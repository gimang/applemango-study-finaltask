<template>
<!-- Navigation 영역 -->
<nav>
  <ul style="height: calc(100% - 100px);">
    <li class="logo-wrapper">
      <div>
        <i class="navbar-brand-icon"></i>
        <span>WatchAll</span>
      </div>
    </li>
    <li class="unread">
      <div>
        <i class="fa fa-laptop"></i>
        <span>Sample 1</span>
      </div>
    </li>
	<li class="unread active">
      <div>
        <i class="fa fa-laptop"></i>
        <span>Sample 2</span>
      </div>
    </li>
	<li class="unread">
      <div>
        <i class="fa fa-laptop"></i>
        <span>Sample 3</span>
      </div>
    </li>
  </ul>
  <ul class="fix-menu" style="height: 100px;">
    <li class="unread active">
      <div>
        <i class="fa fa-laptop"></i>
        <span>Sample 3</span>
      </div>
    </li>
	<li class="unread">
      <div>
        <i class="fa fa-laptop"></i>
        <span>Sample 3</span>
      </div>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'WFrameMenu',
};
</script>

<style>

</style>
