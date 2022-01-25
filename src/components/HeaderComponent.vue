<template>
  <el-row class="header">
    <el-col class="search-text" :lg="4" :md="4" :xs="14" :sm="8">
      <el-row align="middle">
        <el-col :span="4" class="hidden-xs-only">
          <el-icon
            style="font-size: 25px; cursor: pointer; color: #9155fd"
            @click="onHandleStatusCollapse"
            v-if="isCollapse === false"
            ><expand
          /></el-icon>

          <el-icon
            style="font-size: 25px; cursor: pointer; color: #9155fd"
            @click="onHandleStatusCollapse"
            v-else
            ><fold
          /></el-icon>
        </el-col>
        <el-col class="hidden-lg-only hidden-md-only hidden-sm-only" :span="4">
          <el-icon
            @click="onHandleStatusCollapse"
            style="font-size: 25px; cursor: pointer; color: #9155fd"
            ><Menu
          /></el-icon>
        </el-col>
        <el-col :span="20" style="padding-left: 10px">
          <el-input
            v-model="input4"
            class="w-50 m-2"
            placeholder="Type something"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>
        </el-col>
      </el-row>
    </el-col>
    <el-col :xs="2" :lg="18" :md="17" :sm="12"></el-col>
    <el-col class="action-headers" :lg="2" :md="3" :xs="8" :sm="4">
      <el-icon style="color: #ff9b19"><moon /></el-icon>
      <el-icon style="color: #fc5555"> <bell-filled /></el-icon>

      <el-popover
        popper-class="pp"
        placement="bottom-start"
        :width="150"
        trigger="click"
      >
        <el-row align="middle">
          <el-col :span="8">
            <img
              style="width: 40px; border-radius: 20px"
              src="../assets/unnamed.webp"
              alt=""
            />
          </el-col>
          <el-col :span="16">
            <el-row>
              <el-col :span="24">
                <span style="font-size: 16px; font-weight: 600">Huu Dan</span>
              </el-col>
              <el-col :span="24">
                <span style="font-size: 12px; font-weight: 300">Admin</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="action-account" align="middle">
          <el-col :span="1"></el-col>
          <el-col :span="5">
            <el-icon style="font-size: 20px; cursor: pointer"
              ><UserFilled
            /></el-icon>
          </el-col>
          <el-col :span="17">
            <span>Profile</span>
          </el-col>
        </el-row>
        <el-row class="action-account" align="middle">
          <el-col :span="1"></el-col>
          <el-col :span="5">
            <el-icon style="font-size: 20px; cursor: pointer"
              ><coffee-cup
            /></el-icon>
          </el-col>
          <el-col :span="17">
            <span>Notifications</span>
          </el-col>
        </el-row>
        <el-row class="action-account" align="middle">
          <el-col :span="1"></el-col>
          <el-col :span="5">
            <el-icon style="font-size: 20px; cursor: pointer"
              ><chat-line-round
            /></el-icon>
          </el-col>
          <el-col :span="17">
            <span>Messages</span>
          </el-col>
        </el-row>
        <el-row class="action-account" align="middle" @click="handleLogOut">
          <el-col :span="1"></el-col>
          <el-col :span="5">
            <el-icon style="font-size: 20px; cursor: pointer"><back /></el-icon>
          </el-col>
          <el-col :span="17">
            <span>Log out</span>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <template #reference>
          <img src="../assets/unnamed.webp" alt="" />
        </template>
      </el-popover>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import {
  Search,
  Moon,
  BellFilled,
  Fold,
  Expand,
  UserFilled,
  CoffeeCup,
  Back,
  ChatLineRound,
  Menu,
} from "@element-plus/icons-vue";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter} from "vue-router"
export default defineComponent({
  components: {
    Search,
    Back,
    ChatLineRound,
    Moon,
    Menu,
    BellFilled,
    CoffeeCup,
    Fold,
    Expand,
    UserFilled,
  },
  setup() {
    const store = useStore();
    const route = useRouter()
    const isCollapse = computed(() => store.state.isCollapse);

    const onHandleStatusCollapse = () => {
      store.commit("setIsCollapse");
    };
    const handleLogOut = () =>{
      store.commit("setAuthenticator")
      route.push('/login')
    }

    return { isCollapse, onHandleStatusCollapse, handleLogOut };
  },
});
</script>
<style lang="scss">
/* .search-text{
  border-radius: 15px !important;
} */
.el-input--prefix .el-input__inner {
  border-radius: 15px !important;
  background-color: #f4f5fa;
  min-width: 150px;
}
.header {
  /* display: flex; */
  /* align-items: center; */
  margin-top: 10px;
}
.action-headers {
  display: flex !important;
  align-items: center !important;
  flex-direction: row;
}
.action-headers img {
  cursor: pointer;
  min-width: 30px;
  width: 30%;
  max-width: 40px;
  border-radius: 10px;
  margin-left: 10px;
}
.action-headers .el-icon {
  font-size: 22px;
  margin-right: 10px;
}
.action-account {
  margin-bottom: 5px;
  cursor: pointer;
}
.el-popper.is-light.el-popover.pp {
  left: -30px !important;
  span.el-popper__arrow {
    left: 31px !important;
  }
}
</style>
