<template>
  <div class="device-wrapper">
    <el-radio-group v-model="selectedRscId">
      <el-radio-button label="RESPONSETIME_ICMP">응답시간 (ICMP)</el-radio-button>
      <el-radio-button label="RESPONSETIME_SNMP">응답시간 (SNMP)</el-radio-button>
      <el-radio-button label="CPU">CPU</el-radio-button>
      <el-radio-button label="MEMORY">메모리</el-radio-button>
      <el-radio-button label="TEMP">온도</el-radio-button>
      <el-radio-button label="USERDEFINE">사용자 정의</el-radio-button>
    </el-radio-group>
    <div class="device-toolbar">
      <span class="el-icon-info">현재 :</span>
      <el-input class="toolbar-item" v-model="currentValue" :readonly="true" />
      <span class="el-icon-info">최대 - 최근 1시간 :</span>
      <el-input class="toolbar-item" v-model="currentValue" :readonly="true" />
      <span class="el-icon-info">최소 - 최근 1시간 :</span>
      <el-input class="toolbar-item" v-model="currentValue" :readonly="true" />
    </div>
    <div class="device-chart-wrapper">
      <highcharts class="device-chart" :options="chartOptions"></highcharts>
    </div>
    <div class="device-chart-wrapper">
      <highcharts class="device-chart" :options="chartOptions"></highcharts>
    </div>
    <div class="device-chart-wrapper">
      <highcharts class="device-chart" :options="chartOptions"></highcharts>
    </div>
    <div class="device-chart-wrapper">
      <highcharts class="device-chart" :options="chartOptions"></highcharts>
    </div>
  </div>
</template>

<script>
// import Highcharts from 'highcharts';
import { Chart } from 'highcharts-vue';

export default {
  name: 'DevicePerformanceInfo',
  components: {
    // Highcharts,
    highcharts: Chart,
  },
  created() {
    console.log(this.selectedObj);
  },
  data() {
    return {
      selectedRscId: 'RESPONSETIME_ICMP',
      currentValue: '-',
      maxValue: '-',
      minValue: '-',
      chartOptions: {
        title: {
          align: 'left',
          text: '최근 1시간',
        },
        series: [
          {
            data: [1, 2, 3, 5, 2, 8, 12, 7, 18],
          },
        ],
      },
    };
  },
  computed: {
    selectedObj() {
      return this.$store.getters.currentTreeNode;
    },
  },
  methods: {
    loadCurrentData() {},
  },
};
</script>

<style scoped>
.device-wrapper {
  height: calc(100% - 60px);
  overflow-y: auto;
  padding: 15px;
}

.device-toolbar {
  padding: 10px;
  margin-bottom: 8px;
  height: 50px;
  border-style: solid;
  border-top-width: 2px;
  border-bottom-width: 1px;
  border-left: none;
  border-right: none;
  border-color: #dcdfe6;
  margin: 8px 0;
}

.toolbar-item {
  width: 200px;
  margin-right: 15px;
}

.device-chart-wrapper {
  height: 250px;
}

.device-chart {
  height: 100%;
}
</style>
