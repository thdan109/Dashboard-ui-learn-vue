<template>
  <el-col
    class="hidden-xs-only"
    style="position: fixed"
    :style="{
      width: $store.state.isCollapse === false ? '250px' : '50px',
    }"
  >
    <el-row>
      <el-col style="min-height: 90px" :span="24" class="col-img">
        <img
          style="width: 50%"
          :style="{
            display: $store.state.isCollapse === true ? 'none' : 'block',
          }"
          src="../assets/Materio-FullMark-02.png"
          alt=""
        />
      </el-col>
    </el-row>
    <el-row style="background-color: #f4f5fa">
      <el-col :span="24">
        <el-menu
          default-active="/"
          
          class="el-menu-vertical-demo"
          :collapse="$store.state.isCollapse"
          router="true"
        >
          <el-menu-item   index="/">
            <el-icon><Menu /></el-icon>
            <span>Dashboard</span>
          </el-menu-item>

          <el-menu-item index="/account">
            <el-icon><UserFilled /></el-icon>
            <span>Account Setting </span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><Document /></el-icon>
              <span>Page</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <el-icon><warning-filled /></el-icon>
                <span>Login</span></el-menu-item
              >
              <el-menu-item index="1-2"
                ><el-icon><warning-filled /></el-icon>
                <span>Register</span></el-menu-item
              >
              <el-menu-item index="1-3"
                ><el-icon><warning-filled /></el-icon>
                <span>Error</span></el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item index="4">
            <el-icon><ice-cream-round /></el-icon>
            <span>Typography</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon><document /></el-icon>
            <span>Icons</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon><takeaway-box /></el-icon>
            <span>Tables</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </el-col>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import {
  Menu,
  UserFilled,
  Document,
  IceCreamRound,
  TakeawayBox,
  WarningFilled,
} from "@element-plus/icons-vue";
import {useRoute} from "vue-router"
export default defineComponent({
  components: {
    Menu,
    UserFilled,
    WarningFilled,
    Document,
    IceCreamRound,
    TakeawayBox,
  },
  setup() {
    const router = useRoute()
    const direction = ref("ltr");
    console.log(router);
    
    return {
      direction,
    };
  },
});
</script>
<style>
.col-img {
  max-height: 120px;
  /* border:1px solid black; */
  /* margin-bottom: 20px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-menu {
  background-color: #f4f5fa !important;
  border: none !important;
}
.el-menu-item {
  max-height: 45px;
  padding-left: 15px !important;
  color: #5e5669de !important;
  margin-bottom: 10px;
}
.el-menu-item span {
  font-size: 18px;
  padding-left: 8px;
}

.el-sub-menu__title {
  padding-left: 15px !important;
  color: #5e5669de !important;
}

.el-sub-menu__title span {
  padding-left: 8px;
  font-size: 18px;
}
.el-menu-item:hover {
  background-color: #e8e9ee;
  font-weight: 500;
  /* margin-right: 25px; */
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  max-height: 45px;
}
.el-menu-item.is-active {
  /* background-color: #a673fd; */
  background: linear-gradient(
    90deg,
    rgba(202, 151, 253, 1) 27%,
    rgba(179, 127, 254, 1) 80%,
    rgba(159, 106, 255, 1) 100%,
    rgba(201, 150, 251, 1) 100%
  );
  color: white !important;
  font-size: 18px;
  /* font-weight: 600; */
  /* margin-right: 25px; */
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  max-height: 45px;
}
.el-sub-menu .el-sub-menu__title {
  max-height: 40px;
}
.link {
  text-decoration: none;
  color: #5e5669de !important;
}
.el-menu-item-group .el-menu-item-group__title {
  padding: 0px !important;
}
.el-menu-item-group ul {
  margin-left: 15px !important;
}
</style>
