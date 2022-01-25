<template>
  <el-container>
    <el-row
      justify="center"
      align="middle"
      style="width: 100vw; height: 100vh; background: #f4f5fa"
    >
      <el-card class="card-login">
        <el-row justify="center" style="margin-bottom: 30px">
          <el-row>
            <img
              src="https://themeselection.com/demo/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/logo.svg?fecd2e202e78acb6738b5766339caca0"
              alt=""
            />
            <span class="name-company">Materio</span>
          </el-row>
        </el-row>

        <el-row style="margin-bottom: 10px">
          <span class="title-logo">Adventure starts here 🚀</span>
        </el-row>
        <el-row>
          <span class="welcome">Make your app management easy and fun!</span>
        </el-row>
        <el-row class="form" justify="center">
          <el-col :span="24">
            <el-row>
              <el-col :span="24"
                ><span class="title-input">Username</span></el-col
              >
              <el-col :span="24">
                <el-input size="large" v-model="username"></el-input
              ></el-col>
            </el-row>
          </el-col>
          <el-col :span="24">
            <el-row>
              <el-col :span="24"><span class="title-input">Email</span></el-col>
              <el-col :span="24">
                <el-input size="large" v-model="pw"></el-input
              ></el-col>
            </el-row>
          </el-col>
          <el-col :span="24">
            <el-row>
              <el-col :span="24"
                ><span class="title-input">Password</span></el-col
              >
              <el-col :span="24">
                <el-input type="password" size="large" v-model="pw"></el-input
              ></el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 30px" align="middle">
          <el-checkbox v-model="checked">I agree to</el-checkbox>

          <span class="privacy">privacy policy & terms</span>
        </el-row>
        <el-row style="margin-bottom: 20px">
          <el-col>
            <el-button class="btn-login">SIGN UP</el-button>
          </el-col>
        </el-row>
        <el-row justify="center" style="margin-bottom: 20px">
          <span class="new-platform">Already have an account?</span>
          <span class="create-account">Sign in instead</span>
        </el-row>

        <el-row justify="center" style="margin-bottom: 20px">
          <span>or</span>
        </el-row>
        <el-row justify="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            class="v-icon__svg"
          >
            <path
              fill="#4267b2"
              d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
              style=""
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            class="v-icon__svg"
          >
            <path
              fill="#1da1f2"
              d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              style=""
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            class="v-icon__svg"
            style=""
          >
            <path
              fill=""
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            class="v-icon__svg"
          >
            <path
              fill="#db4437"
              d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
            ></path>
          </svg>
        </el-row>
      </el-card>
    </el-row>
  </el-container>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const pw = ref("");
    const username = ref("");
    const checked = ref(true);
    return {
      pw,
      username,
      checked,
    };
  },
});
</script>
<style lang="scss">
.card-login {
  max-width: 28vw !important;
  padding: 30px 15px;
}
.name-company {
  font-size: 24px;
  font-weight: 600;
  margin-left: 10px;
}
.title-logo {
  font-size: 24px;
}
.welcome {
  font-size: 14px;
  color: gray;
  margin-bottom: 20px;
}
.form {
  .el-input {
    margin-bottom: 10px;
    .el-input__inner {
      height: 45px;
    }
  }
}
.title-input {
  font-size: 13px;
}
.forgot {
  float: right;
  font-size: 14px;
}
.privacy {
  font-size: 14px;
  color: #9155fd;
  font-weight: 600;
  margin-left: 5px;
  cursor: pointer;
}

.btn-login {
  width: 100%;
  color: white;
  background-color: #9155fd;
  height: 35px;
}
.btn-login:hover {
  width: 100%;
  color: white;
  border-color: #9155fd;
  background-color: #9155fd;
  height: 35px;
}
.btn-login:focus {
  width: 100%;
  height: 35px;
  color: white;
  background-color: #9155fd;
  border-color: #9155fd;
}
.create-account {
  color: #9155fd;
  font-size: 14px;
  font-weight: 800;
  margin-left: 5px;
  cursor: pointer;
}
.new-platform {
  color: gray;
  font-size: 14px;
}
.icon-fb {
  .v-icon__svg {
    color: blue !important;
  }
}
</style>
