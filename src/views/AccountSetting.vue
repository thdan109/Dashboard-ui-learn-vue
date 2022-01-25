<template>
  <el-card class="card">
    <el-tabs class="tab" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name="user">
        <template #label>
          <div class="span-icon-tabs">
            <el-icon class="icon"><avatar /></el-icon>
            <span class="name-tab">USER</span>
          </div>
        </template>
        <!-- avatar -->
        <el-row align="middle">
          <el-col :lg="3">
            <img
              style="width: 120px; height: 120px; border-radius: 5px"
              src="https://themeselection.com/demo/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/1.png?d79cbd6eda5ee96bfdfc8773ab6c1ee7"
              alt=""
            />
          </el-col>
          <el-col :lg="21">
            <el-row class="button"
              ><el-col :span="24"
                ><el-button class="button-upload">Up load new photo</el-button>
                <el-button class="button-reset">Reset</el-button>
              </el-col></el-row
            >
            <el-row>
              <el-col :span="24"
                ><span style="color: gray"
                  >Allowed JPG, GIF or PNG. Max size of 800K</span
                ></el-col
              >
            </el-row>
          </el-col>
        </el-row>
        <!-- form  -->
        <el-row class="form-info" :gutter="20">
          <el-col :xl="12" :lg="12" class="left">
            <el-row>
              <el-col><span class="title-input">Username</span></el-col>
              <el-col
                ><el-input v-model="input" size="large" placeholder="johnDoe"
              /></el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Email</span></el-col>
              <el-col>
                <el-input
                  v-model="input"
                  size="large"
                  placeholder="johnDoe@example.com"
              /></el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Status</span></el-col>
              <el-col>
                <el-select size="large" v-model="value" placeholder="Select">
                  <el-option
                    size="large"
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  >
                  </el-option> </el-select
              ></el-col>
            </el-row>
          </el-col>
          <el-col :xl="12" :lg="12" class="right">
            <el-row>
              <el-col><span class="title-input">Name</span></el-col>
              <el-col>
                <el-input size="large" v-model="input" placeholder="john Doe" />
              </el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Role</span></el-col>
              <el-col>
                <el-input v-model="input" size="large" placeholder="Admin" />
              </el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Company</span></el-col>
              <el-col>
                <el-input
                  v-model="input"
                  size="large"
                  placeholder="Google.inc"
                />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="btn-form">
          <el-button class="save-btn">SAVE CHANGES</el-button>
          <el-button class="cancel-btn">CANCEL</el-button>
        </el-row>
      </el-tab-pane>

      <el-tab-pane name="security">
        <template #label>
          <span class="span-icon-tabs">
            <el-icon class="icon"><unlock /></el-icon>
            <span class="name-tab"> SECURITY</span>
          </span>
        </template>
        <el-row class="security">
          <el-col :span="12">
            <el-row>
              <el-col><span class="title-input">Current password</span></el-col>
              <el-col>
                <el-input type="password" v-model="pw" size="large" />
              </el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">New Password</span></el-col>
              <el-col>
                <el-input type="password" v-model="pw" size="large" />
              </el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Confirm password</span></el-col>
              <el-col>
                <el-input type="password" v-model="pw" size="large" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="12">
            <el-row justify="center">
              <el-col :span="8">
                <img
                  style="width: 90%"
                  src="https://themeselection.com/demo/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/pose-m-1.png?547d2e96e65471e3f8aa68001a550d59"
                  alt=""
                />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row class="btn-form">
          <el-button class="save-btn">SAVE CHANGES</el-button>
          <el-button class="cancel-btn">CANCEL</el-button>
        </el-row>
      </el-tab-pane>

      <el-tab-pane name="infor">
        <template #label>
          <span class="span-icon-tabs">
            <el-icon class="icon"><info-filled /></el-icon>
            <span class="name-tab"> INFO</span>
          </span>
        </template>
        <el-row class="form-info" :gutter="20">
          <el-col class="bio">
            <el-row>
              <el-col><span class="title-input">Bio</span></el-col>
              <el-col
                ><el-input
                  v-model="textarea"
                  :rows="2"
                  type="textarea"
                  
              /></el-col>
            </el-row>
          </el-col>
          <el-col :xl="12" :lg="12" class="left">
            <el-row>
              <el-col><span class="title-input">Birthday</span></el-col>
              <el-col
                ><el-input
                  v-model="birthday"
                  size="large"
                 
              /></el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Website</span></el-col>
              <el-col>
                <el-input
                  v-model="website"
                  size="large"
                 
              /></el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Languages</span></el-col>
              <el-col>
                <el-select size="large" v-model="value" placeholder="Select">
                  <el-option
                    size="large"
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled"
                  >
                  </el-option> </el-select
              ></el-col>
            </el-row>
          </el-col>
          <el-col :xl="12" :lg="12" class="right">
            <el-row>
              <el-col><span class="title-input">Phone</span></el-col>
              <el-col>
                <el-input size="large" v-model="phone"  />
              </el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Country</span></el-col>
              <el-col>
                <el-input v-model="country" size="large" />
              </el-col>
            </el-row>
            <el-row>
              <el-col><span class="title-input">Company</span></el-col>
              <el-col>
                <el-radio-group v-model="radio">
                  <el-radio :label="3">Male</el-radio>
                  <el-radio :label="6">Female</el-radio>
                  <el-radio :label="9">Other</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="btn-form">
          <el-button class="save-btn">SAVE CHANGES</el-button>
          <el-button class="cancel-btn">CANCEL</el-button>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import { defineComponent, ref } from "vue";
import { Avatar, Unlock, InfoFilled } from "@element-plus/icons-vue";
export default defineComponent({
  components: {
    Avatar,
    Unlock,
    InfoFilled,
  },
  setup() {
    const textarea = ref(
      "The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scaLabel 😀, and lightning 😍 fasádasdsat search and discovery experiences."
    );
    const radio = ref(3);
    const pw = ref("112333333");
    const birthday = ref("February 22, 1995");
    const website = ref("https://themeselection.com/");
    const phone = ref("0378347216");
    const country = ref("Viet Nam");
    const activeName = ref("user");
    const value = ref("");
    const options = [
      {
        value: "Option1",
        label: "Option1",
      },
      {
        value: "Option2",
        label: "Option2",
        disabled: true,
      },
      {
        value: "Option3",
        label: "Option3",
      },
      {
        value: "Option4",
        label: "Option4",
      },
      {
        value: "Option5",
        label: "Option5",
      },
    ];
    return {
      birthday,
      phone,
      country,
      website,
      radio,
      activeName,
      textarea,
      options,
      value,
      pw,
    };
  },
});
</script>
<style lang="scss">
.card {
  .el-card__body {
    padding: 0px;
  }
}
.el-tabs__item {
  // min-width: 150px
  font-weight: 700;
  color: #5e5669de;
  padding: 0px !important;
}
.el-tabs__item:hover {
  color: #9155fd;
  background-color: #ebebecde;
}
.el-tabs__item.is-active {
  color: #9155fd;
}
.el-tabs__active-bar {
  background-color: #9155fd;
  width: 100%;
}
.el-tabs__nav {
  margin-right: 40px !important ;
}
.span-icon-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
  .name-tab {
    margin-left: 10px;
  }
}
.el-tab-pane {
  padding: 20px 40px;
}
.button {
  margin-bottom: 20px;
}
.button-reset {
  height: 38px;
  padding: 0px 30px;
  color: red;
  font-weight: 600;
  border-color: red;
}
.button-reset:hover {
  color: red;
  font-weight: 600;
  border-color: red;
}
.button-reset:focus {
  color: red;
  font-weight: 600;
  border-color: red;
}
.button-upload {
  padding: 0px 30px;
  height: 40px;
  background-color: #9155fd;
  color: white;
  font-weight: 600;
}
.button-upload:hover {
  background-color: #9155fd;
  color: white;
  font-weight: 600;
}
.button-upload:focus {
  background-color: #9155fd;
  color: white;
  font-weight: 600;
}
.el-input__inner:focus {
  border-color: #9155fd;
  border-width: 2px;
}
.form-info {
  margin-top: 20px;
  .left {
    .el-select {
      width: 100%;
    }
    .el-select .el-input.is-focus .el-input__inner {
      border-color: #9155fd;
      border-width: 2px;
    }
    .el-input {
      margin-bottom: 10px;
    }
    .el-input:focus {
      border-color: #9155fd;
      border-width: 2px;
    }
  }
  .right {
    .el-input {
      margin-bottom: 10px;
    }
  }
  .title-input {
    font-size: 12px;
  }
}
.security {
  .el-input {
    margin-bottom: 15px;
  }

  .title-input {
    font-size: 12px;
  }
}
.btn-form {
  margin-top: 30px;
  .save-btn {
    height: 40px;
    color: white;
    background-color: #9155fd;
    border-color: #9155fd;
  }
  .cancel-btn {
    height: 40px;
    color: #ff4800;
    border-color: #ff4800;
  }
}
.bio {
  margin-bottom: 20px;
  .el-textarea__inner {
    min-height: 65px !important;
  }
  .el-textarea__inner:focus {
    border-color: #9155fd;
  }
}
.el-radio__input.is-checked+.el-radio__label{
  color: #9155fd
}
.el-radio__input.is-checked .el-radio__inner{
  background-color: #9155fd;
}
</style>
