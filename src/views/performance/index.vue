<template>
  <div class="frame-container">
    <breadcrumb class="breadcrumb-container"></breadcrumb>
    <div class="main-container">
      <common-tree></common-tree>
      <w-view></w-view>
    </div>
  </div>
</template>

<script>
import CommonTree from './CommonTree';
import Breadcrumb from './Breadcrumb';
import WView from './view';

export default {
  name: 'WPerformance',
  components: {
    CommonTree,
    WView,
    Breadcrumb,
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
