<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.logo {
  padding: 10px;
  box-sizing: border-box;
}
</style>

<template>
  <div class="layout">
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
          <MenuItem name="/template-1/chart" to="/template-1/chart">静态图表</MenuItem>
          <MenuItem name="/template-1/d-chart" to="/template-1/d-chart">动态数据图表</MenuItem>
          <MenuItem name="/template-1/china-map" to="/template-1/china-map">中国地图</MenuItem>
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
          <MenuItem name="/template-1/form" to="/template-1/form">表单</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
      <Content :style="{padding: '0 16px 16px'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>


<script>

export default {
  data() {
    return {
      currentUrl: this.$route.path || ''
    };
  }
};
</script>
