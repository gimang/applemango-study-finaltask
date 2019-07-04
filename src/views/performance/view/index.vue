<template>
  <div class="content">
    <performance-list></performance-list>
    <device></device>
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
};
</script>

<style scoped>
.content {
  flex: 1;
}
</style>
