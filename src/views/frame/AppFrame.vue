<template>
  <el-container class="portal-wrapper">
    <w-frame-menu />
    <div class="portal-main-wrapper">
      <w-frame-header class="frame-header" />
      <w-frame-section class="frame-section" />
    </div>
  </el-container>
</template>

<script>
import WFrameHeader from './components/FrameHeader';
import WFrameMenu from './components/FrameMenu';
import WFrameSection from './components/FrameSection';

export default {
  name: 'WAppFrame',
  components: {
    WFrameHeader,
    WFrameMenu,
    WFrameSection,
  },
};
</script>

<style scoped>
.portal-main-wrapper {
  display: flex;
  flex-direction: column;
}

.frame-header {
  height: 50px;
}

.frame-section {
  height: calc(100% - 50px);
  flex: 1;
}
</style>
