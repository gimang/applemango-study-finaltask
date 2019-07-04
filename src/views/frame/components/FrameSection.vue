<template>
  <WPerformance />
</template>

<script>
import { mapState } from 'vuex';
import MenuInfoData from '@/data/MenuInfoData';
import WPerformance from '@/views/performance';

export default {
  name: 'WFrameSection',
  components: {
    WPerformance,
  },
  computed: mapState(['selectedMenu']),
  watch: {},
};
</script>

<style>
</style>
