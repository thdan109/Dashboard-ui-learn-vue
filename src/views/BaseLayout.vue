<template>
  <el-container v-show="$store.state.authenticator === false">
    <router-view></router-view>
  </el-container>
  <el-container v-show="$store.state.authenticator" class="container-base-layout">
    <el-aside
      class="hidden-xs-only"
      :style="{
        minHeight: '100vh',
        width: $store.state.isCollapse === false ? '250px' : '50px',
      }"
    >
      <menu-component />
    </el-aside>
    <el-container class="main">
      <el-header>
        <header-component />
      </el-header>
      <el-main>
          <router-view></router-view>
        <!-- <main-component /> -->
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MenuComponent from "../components/MenuComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
// import MainComponent from "@/components/MainComponent.vue";
export default defineComponent({
  components: {
    MenuComponent,
    HeaderComponent,
    // MainComponent,
  },
});
</script>
<style>
.container-base-layout {
  background-color: #f4f5fa;
}
.el-aside {
  width: 250px;
}
.col-menu {
  position: fixed;
  top: 0;
}
.main{
  padding-left: 40px;
  padding-right: 40px;
}
</style>
