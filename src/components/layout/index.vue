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
    <SideBar></SideBar>
    <Layout :style="{marginLeft: '200px'}">
      <NavBar></NavBar>
      <Content :style="{padding: '0 16px 16px'}">
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>


<script>
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";

export default {
  components: {
    SideBar,
    NavBar
  }
};
</script>
