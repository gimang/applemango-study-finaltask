<template>
  <el-tree
    class="el-tree"
    :data="treeData"
    :props="defaultProps"
    node-key="tempTreeKey"
    :default-expanded-keys="['1']"
    @node-click="onClickNode"
    :expand-on-click-node="false"
  ></el-tree>
</template>

<script>
import _ from 'lodash';
import MenuStoreData from '@/data/MenuStoreData';

export default {
  name: 'CommonTree',
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  props: ['treeData'],
  watch: {
    treeData(val) {
      if (!_.isEmpty(val)) {
        this.$store.commit(MenuStoreData.CHANGE_SELECTED_TREE_NODE, val[0]);
      }
    },
  },
  methods: {
    onClickNode(node) {
      this.$store.commit(MenuStoreData.CHANGE_SELECTED_TREE_NODE, node);
    },
  },
};
</script>
