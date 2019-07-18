<template>
  <div class="maincontent-wrap">
    <div
      class="container panel-header common-panel"
      style="height:56px;padding:15px;"
    >{{selectedObj.label}}</div>
    <device v-if="selectedNode.item_level === 'NETDEVICE'" />
    <performance-list
      class="maincontent common-panel"
      v-else-if="(selectedNode.item_level === 'DC') || (selectedNode.item_level === 'GROUP')"
    />
  </div>
</template>

<script>
import PerformanceList from './PerformanceList';
import Device from './Device';

export default {
  name: 'WView',
  components: {
    PerformanceList,
    Device,
  },
  computed: {
    selectedObj() {
      return this.$store.getters.currentTreeNode;
    },
  },
  props: ['selectedNode'],
};
</script>

<style scoped>
.content {
  flex: 1;
}
</style>
