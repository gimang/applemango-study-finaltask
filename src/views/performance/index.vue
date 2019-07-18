<template>
  <div class="frame-container">
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="main-container">
      <common-tree class="tree-wrapper" ref="commonTree" :treeData="data"></common-tree>
      <w-view :selectedNode="selectedTreeNode"></w-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';
import CommonTree from './CommonTree';
import Breadcrumb from './Breadcrumb';
import WView from './view';
import MenuInfoData from '@/data/MenuInfoData';

export default {
  name: 'WPerformance',
  components: {
    CommonTree,
    WView,
    Breadcrumb,
  },
  created() {
    this.loadData();
  },
  data() {
    return {
      data: [],
    };
  },
  computed: {
    selectedTreeNode() {
      return this.$store.getters.currentTreeNode;
    },
  },
  methods: {
    loadData() {
      axios
        .get('/modules/common/target/tree.do', {
          params: {
            viewType: 'LOGICAL',
            treeType: 'STATIC',
            managetypeId: 'NMS',
            managetypeKey: 'ND',
          },
        })
        .then((response) => {
          if (_.isEmpty(response.data) && !response.data.success) {
            return;
          }

          this.data = response.data.children;
        });
    },
  },
  watch: {
    selectedTreeNode(val) {
      this.$router.push({
        name: MenuInfoData.MENU_PERFORMANCE.routerName,
        params: {
          treekey: val.tempTreeKey,
        },
      });
    },
  },
};
</script>

<style scoped>
.frame-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.breadcrumb-container {
  height: 40px;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: row;
}
</style>
