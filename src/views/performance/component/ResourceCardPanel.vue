<template>
  <div class="box_wrap">
    <div
      v-for="(item, key) in cardList"
      :key="key"
      @click="cardClick(item)"
      class="box comp_sty1_wrap"
      :class="checkBoxClass(item)"
    >
      <div class="com_sty1_bx">
        <p class="num">{{item.count}}</p>
        <div class="com_sty1_tit">{{item.label}}</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ResourceCardPanel',
  created() {
    this.loadData();
  },
  data() {
    return {
      rscList: [],
      selectedKey: 'NETDEVICE_TOTAL',
    };
  },
  props: ['cardList', 'selectedRsc'],
  methods: {
    loadData() {},
    checkBoxClass(rsc) {
      const isEvent = rsc.count > 0;
      const isSelected = this.selectedKey === rsc.key;
      let classMap = {};

      if (isEvent) {
        classMap = {
          comp_sty1_red: true,
          comp_sty1_red_selected: isSelected,
        };
      } else {
        classMap = {
          comp_sty1_blue: true,
          comp_sty1_blue_selected: isSelected,
        };
      }

      return classMap;
    },
    cardClick(rsc) {
      this.selectedKey = rsc.key;
      this.$emit('card-click', rsc);
    },
  },
};
</script>

<style scoped>
.box_wrap {
  height: 94px;
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
}

.box {
  margin-right: 5px;
}

.box:last-child {
  margin-right: 0;
}
</style>
