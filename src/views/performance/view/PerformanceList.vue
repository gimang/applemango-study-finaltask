<template>
  <el-tabs v-model="activePanel" class="main-tab">
    <el-tab-pane class="panel-h100" name="performance" label="성능 조회">
      <resource-card-panel :cardList="rscList" @card-click="rscClick"></resource-card-panel>
      <div class="toolbar-container">
        <el-checkbox
          class="toolbar-item"
          v-model="isEvent"
          @change="changeEventCondition"
          border
        >이상 장비</el-checkbox>
        <el-button
          type="text"
          class="toolbar-item"
          :icon="isFavoriteIconCls"
          :class="[ isFavorite ? 'favorite-button-checked' : 'favorite-button-unchecked' ]"
          @click="toggleFavorite"
        >관심 대상</el-button>
        <el-select
          class="toolbar-item"
          v-model="responsetimeRscId"
          placeholder="응답시간 자원"
          v-show="this.selectedRsc.key === 'RESPONSETIME'"
          @change="responsetimeRscIdChange"
        >
          <el-option
            v-for="item in responsetimeRscIds"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <div class="toolbar-item-gnb">
          <el-input
            placeholder="검색어를 입력해 주세요"
            v-model="searchValue"
            clearable
            @keydown.enter.native="statusCountLoad"
          ></el-input>
          <el-button type="primary" @click="statusCountLoad">검색</el-button>
        </div>
      </div>
      <performance-table
        :data-list="objList"
        :selected-key="this.selectedRsc.key"
        :responsetime-rsc-id="this.responsetimeRscId"
      />
    </el-tab-pane>
    <el-tab-pane name="event" label="이벤트/알람">이벤트/알람</el-tab-pane>
    <el-tab-pane name="cpu" label="CPU">CPU</el-tab-pane>
    <el-tab-pane name="service" label="서비스">서비스</el-tab-pane>
  </el-tabs>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import ResourceCardPanel from '../component/ResourceCardPanel';
import PerformanceTable from '../component/PerformanceTable';

export default {
  name: 'PerformanceList',
  components: {
    ResourceCardPanel,
    PerformanceTable,
  },
  created() {
    this.statusCountLoad();
  },
  data() {
    return {
      activePanel: 'performance',
      isEvent: false,
      isFavorite: false,
      isFavoriteIconCls: 'el-icon-star-off',
      searchValue: '',
      objList: [],
      rscList: [],
      selectedRsc: { key: 'NETDEVICE_TOTAL' },
      responsetimeRscIds: [
        { label: 'ICMP', value: 'RESPONSETIME_ICMP' },
        { label: 'SNMP', value: 'RESPONSETIME_SNMP' },
      ],
      responsetimeRscId: 'RESPONSETIME_ICMP',
    };
  },
  watch: {
    selectedObj() {
      this.statusCountLoad();
    },
  },
  computed: {
    objListParams() {
      let params = {};

      params.managetypeKey = 'ND';
      if (this.selectedObj.item_level === 'GROUP') {
        params.treeType = 'GROUP';
        params.treeNodeId = this.selectedObj.managegroupId;
      } else {
        params.treeType = 'DC';
      }

      if (!_.isEmpty(this.searchValue)) {
        params.searchCondition = 'ndall';
        params.searchValue = this.searchValue;
      }

      if (!_.isEmpty(this.selectedRsc.rsctypeId)) {
        params = {
          rsctypeId: this.selectedRsc.rsctypeId,
          rscId: this.selectedRsc.key,
        };

        if (this.selectedRsc.rsctypeId === 'RESPONSETIME') {
          params.rscId = this.responsetimeRscId;
        }
      }

      if (this.isEvent) {
        params.eventlevelId = 'NM';
      }

      if (this.isFavorite) {
        params.objFavoriteFlag = true;
      }

      return params;
    },
    selectedObj() {
      return this.$store.getters.currentTreeNode;
    },
  },
  methods: {
    statusCountLoad() {
      axios
        .get(
          'modules/nms/operation/operationstate/get-netdevice-status-count.do',
          {
            params: {
              ...this.objListParams,
            },
          },
        )
        .then((response) => {
          if (_.isEmpty(response.data) && !response.data.success) {
            return;
          }

          this.rscList = _.orderBy(response.data.data, 'orderbyIndex', 'asc');

          this.loadData();
        });
    },
    loadData() {
      let baseUrl = 'modules/nms/operation/operationstate';
      const { key } = this.selectedRsc;

      if (key === 'NETDEVICE_TOTAL') {
        baseUrl += '/get-netdevice-totalstatus-list.do';
      } else if (key === 'NETDEVICE_ALIVE') {
        baseUrl += '/get-netdevice-status-list.do';
      } else if (key === 'UNCHECKED_SYSLOG') {
        baseUrl += '/get-netdevice-syslog-list.do';
      } else if (key === 'UNCHECKED_SNMPTRAP') {
        baseUrl += '/get-netdevice-snmptrap-list.do';
      } else if (key === 'USERDEFINE') {
        baseUrl += '/get-user-define-rsc-list.do';
      } else {
        baseUrl += '/get-netdevice-performance-list.do';
      }

      axios
        .get(baseUrl, {
          params: {
            page: 1,
            start: 0,
            limit: 25,
            ...this.objListParams,
          },
        })
        .then((response) => {
          if (_.isEmpty(response.data) && !response.data.success) {
            return;
          }

          this.objList = response.data.data;
        });
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
      this.isFavoriteIconCls = this.isFavorite
        ? 'el-icon-star-on'
        : 'el-icon-star-off';

      this.statusCountLoad();
    },
    rscClick(rsc) {
      this.selectedRsc = rsc;
      this.loadData();
    },
    responsetimeRscIdChange(value) {
      this.responsetimeRscId = value;
      this.loadData();
    },
    changeEventCondition(value) {
      this.isEvent = value;
      this.statusCountLoad();
    },
  },
};
</script>

<style scoped>
.toolbar-container {
  display: flex;
  margin-bottom: 5px;
}

.toolbar-item {
  flex: none;
  margin-right: 4px;
}

.toolbar-item-gnb {
  margin-left: auto;
  display: flex;
}
</style>
