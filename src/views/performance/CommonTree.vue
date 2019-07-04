<template>
  <div class="tree-wrapper">
    <el-tree
      class="el-tree"
      :data="data"
      :props="defaultProps"
      node-key="tempTreeKey"
      :default-expanded-keys="['1']"
    ></el-tree>
  </div>
</template>

<script>
import axios from 'axios';
import _ from 'lodash';

export default {
  name: 'CommonTree',
  created() {
    this.loadData();
  },
  data() {
    return {
      data: [
        {
          treeKey: '1',
          label: 'DC',
          children: [
            {
              treeKey: '1.1',
              label: 'Group1',
              children: [
                { treeKey: '1.1.1', label: '관리대상1' },
                { treeKey: '1.1.2', label: '관리대상2' },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
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
};
</script>
