<template>
  <el-breadcrumb class="main-breadcrumb">
    <el-breadcrumb-item :to="{ name: 'performanceTreekey' }">성능 조회</el-breadcrumb-item>
    <el-breadcrumb-item>Local</el-breadcrumb-item>
    <el-breadcrumb-item>성능 조회</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
};
</script>
