<template >
 <el-drawer v-model="$store.state.isCollapse" :direction="direction" :with-header="false" style="width: 250px">
      <el-row style="background-color: #f4f5fa;width: 100%; min-height: 100vh;">
        <el-col :span="24" style=" padding-top: 30px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            style=""
          >
            <el-menu-item index="1">
              <el-icon><Menu /></el-icon>
              <span>Dashboard</span>
            </el-menu-item>
            <el-menu-item index="2">
              <el-icon><UserFilled /></el-icon>
              <span>Account Setting</span>
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
  </el-drawer>
</template>
<script>
import { defineComponent, ref } from "vue";
import {
  Menu,
  UserFilled,
  Document,
  IceCreamRound,
  TakeawayBox,
  WarningFilled,
} from "@element-plus/icons-vue";
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
   
    const direction = ref('ltr')
    return {
      
      direction,
    };
  },
});
</script>
<style>

.el-drawer__body{
  padding: 0px !important;
  /* padding-top: 20px !important; */
}

  .el-drawer.ltr, .el-drawer.rtl{
    width: 50% !important;
  }
</style>