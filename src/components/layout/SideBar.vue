<style scoped>
.logo {
  padding: 10px;
  box-sizing: border-box;
}
</style>

<template>
  <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
    <div class="logo">
        <img src="http://www.lishiots.com/_nuxt/img/logo.321c26b.png" />
      </div>
    <Menu
      :active-name="currentUrl"
      theme="dark"
      width="auto"
      :open-names="['1']"
    >
      <Submenu name="1">
        <template slot="title">
          <Icon type="ios-navigate"></Icon>
          图表页
        </template>
        <MenuItem
          name="/chart"
          to="/chart"
        >静态图表</MenuItem>
        <MenuItem
          name="/d-chart"
          to="/d-chart"
        >动态数据图表</MenuItem>
        <MenuItem
          name="/china-map"
          to="/china-map"
        >中国地图</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          列表页
        </template>
        <MenuItem name="2-1">Option 1</MenuItem>
        <MenuItem name="2-2">Option 2</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-analytics"></Icon>
          表单页
        </template>
        <MenuItem
          name="/form"
          to="/form"
        >表单</MenuItem>
      </Submenu>
    </Menu>
  </Sider>
</template>

<script>
export default {
  computed: {
    currentUrl() {
      console.log("urlChange");
      return this.$route.path || "";
    }
  }
};
</script>
