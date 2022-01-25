<template>
  <!-- Session One -->
  <el-row style="margin-bottom: 20px; min-height: 200px" :gutter="20">
    <el-col :lg="7" style="margin-bottom: 10px">
      <el-card class="ses-one-left-card">
        <el-row>
          <el-col :span="18">
            <el-row
              ><span class="ses-one-right-title"
                >Congratulations John! 🥳</span
              ></el-row
            >
            <el-row
              ><span class="ses-one-right-one"
                >You have won Trophy</span
              ></el-row
            >
            <el-row><span class="ses-one-right-two">$42.8k</span></el-row>
            <el-row
              ><el-button class="btn-view-sales">View Sales</el-button></el-row
            >
          </el-col>
          <el-col class="ses-one-right-img" :span="6">
            <img
              style="width: 80%; max-width: 60px"
              src="https://themeselection.com/demo/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/trophy.png?143ee16825ecd2dc644cd2326760ef82"
              alt=""
            />
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :lg="17" style="margin-bottom: 10px">
      <el-card class="ses-one-card-right">
        <el-row>
          <el-col
            ><span class="ses-one-right-card">Statistics Card </span></el-col
          >
        </el-row>
        <el-row>
          <el-col
            ><span style="font-weight: 600">Total 48.5% Growth 😎 </span>
            <span style="color: gray">this month</span></el-col
          >
        </el-row>
        <el-row class="four-dashboard">
          <el-col :span="6">
            <el-row :gutter="50">
              <el-col :span="3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                  style="background: #9155fd"
                >
                  <path
                    fill="white"
                    d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"
                  ></path>
                </svg>
              </el-col>
              <el-col :span="18">
                <el-row
                  ><el-col :lg="24"
                    ><span style="color: #a19da5">Sales</span></el-col
                  >
                  <el-col :lg="24"
                    ><span class="turnover">245k</span></el-col
                  ></el-row
                >
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row :gutter="50">
              <el-col :span="3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                  style="background: #56ca00"
                >
                  <path
                    fill="white"
                    d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                  ></path>
                </svg>
              </el-col>
              <el-col :span="18">
                <el-row
                  ><el-col :lg="24"
                    ><span style="color: #a19da5">Customers</span></el-col
                  >
                  <el-col :lg="24"
                    ><span class="turnover">12.5k</span></el-col
                  ></el-row
                >
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row :gutter="50">
              <el-col :span="3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                  style="background: #ffb400"
                >
                  <path
                    fill="white"
                    d="M16,17H5V7H16L19.55,12M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z"
                  ></path>
                </svg>
              </el-col>
              <el-col :span="18">
                <el-row
                  ><el-col :lg="24"
                    ><span style="color: #a19da5">Product</span></el-col
                  >
                  <el-col :lg="24"
                    ><span class="turnover">1.54k</span></el-col
                  ></el-row
                >
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row :gutter="50">
              <el-col :span="3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  role="img"
                  aria-hidden="true"
                  class="v-icon__svg"
                  style="background: #ffb400"
                >
                  <path
                    fill="white"
                    d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"
                  ></path>
                </svg>
              </el-col>
              <el-col :span="18">
                <el-row
                  ><el-col :lg="24"
                    ><span style="color: #a19da5">Revenue</span></el-col
                  >
                  <el-col :lg="24"
                    ><span class="turnover">$88k </span></el-col
                  ></el-row
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
  <!-- Session two -->
  <el-row
    class="ses-two"
    style="margin-bottom: 20px; min-height: 472px"
    :gutter="20"
  >
    <el-col :lg="7" style="margin-bottom: 20px">
      <el-card class="ses-two-card" style="min-height: 100%">
        <el-row>
          <el-col :lg="24">
            <el-row align="middle"
              ><el-col :span="23">
                <span class="ses-two-card-title">Weekly Overview</span></el-col
              >
              <el-col :span="1">
                <el-icon><more-filled /></el-icon> </el-col
            ></el-row>
          </el-col>
        </el-row>
        <el-row style="margin-top: 50px">
          <apexChartComponent />
        </el-row>
        <el-row style="margin-bottom: 20px; margin-top: 20px" align="middle">
          <el-col :lg="4">
            <span style="font-size: 18px; font-weight: 400; color: gray">
              45%
            </span>
          </el-col>
          <el-col :lg="20">
            <span class="ses-two-details">
              Your sales perfomance in 45% 🤩 better compare to last month
            </span>
          </el-col>
        </el-row>

        <el-row>
          <el-button>DETAIlS</el-button>
        </el-row>
      </el-card>
    </el-col>
    <el-col :lg="17" style="margin-bottom: 10px">
      <el-row style="min-height: 100%" :gutter="20">
        <el-col :lg="12" style="margin-bottom: 10px" >
          <el-card style="min-height: 100%" class="total-earning-card">
            <el-row>
              <el-col :lg="24">
                <el-row align="middle"
                  ><el-col :span="23">
                    <span class="ses-two-card-title"
                      >Total Earning</span
                    ></el-col
                  >
                  <el-col :span="1">
                    <el-icon><more-filled /></el-icon> </el-col
                ></el-row>
              </el-col>
            </el-row>
            <el-row align="bottom">
              <el-col class="total-earning" :lg="16">
                <span>$ 24.895</span>
              </el-col>
              <el-col class="decrease-earning" :lg="8">
                <el-row align="bottom">
                  <el-icon><caret-top /></el-icon> <span>10%</span>
                </el-row>
              </el-col>
            </el-row>
            <el-row style="margin-top: 10px; margin-bottom: 50px">
              <el-col>
                <span style="font-weight: 600; font-size: 18px; color: gray"
                  >Compared to $84,325 last year</span
                >
              </el-col>
            </el-row>
            <el-row
              v-for="(item, index) in listTotalEarning"
              :key="index"
              class="total-earning-list"
            >
              <el-col :span="3">
                <img style="width: 50%; max-width: 40px" :src="item.url" alt="" />
              </el-col>
              <el-col :span="13">
                <el-row>
                  <el-col :span="24">{{ item.project }}</el-col></el-row
                >
                <el-col style="color: gray; margin-top: 5px" :span="24">{{
                  item.languages
                }}</el-col>
              </el-col>
              <el-col :span="7">
                <el-row>
                  <el-col :span="24">
                    <span>{{ item.number }}</span>
                  </el-col>
                  <el-col :span="24"
                    ><el-progress
                      :show-text="false"
                      :percentage="Number(item.percent)"
                      :color="item.color"
                  /></el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="6" style="margin-bottom: 10px"  >
          <el-row
            ><el-col style="margin-bottom: 20px" :span="24"
              ><el-card class="card-total-profit">
                <el-row align="middle">
                  <el-col :span="23">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      class="v-icon__svg"
                    >
                      <path
                        fill="white"
                        d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z"
                      ></path>
                    </svg>
                  </el-col>
                  <el-col :span="1">
                    <el-icon><more-filled /></el-icon> </el-col
                ></el-row>
                <el-row>
                  <el-col :span="24" class="total-profit-title">
                    <span> Total Profit </span>
                  </el-col>
                </el-row>
                <el-row class="total-profit-price" align="middle">
                  <el-col :span="16" class="price">
                    <span>$ 25.6k</span>
                  </el-col>
                  <el-col :span="6" class="decrease">
                    <span>+42%</span>
                  </el-col>
                </el-row>
                <el-row class="total-profit-footer">
                  <el-col><span>Weekly Project</span></el-col>
                </el-row>
              </el-card></el-col
            >

            <el-col :span="24"
              ><el-card class="card-total-profit">
                <el-row align="middle">
                  <el-col :span="23">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      class="v-icon__svg"
                      style="background-color: gray"
                    >
                      <path
                        fill="white"
                        d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"
                      ></path>
                    </svg>
                  </el-col>
                  <el-col :span="1">
                    <el-icon><more-filled /></el-icon> </el-col
                ></el-row>
                <el-row>
                  <el-col :span="24" class="total-profit-title">
                    <span> Refunds </span>
                  </el-col>
                </el-row>
                <el-row class="total-profit-price" align="middle">
                  <el-col :span="12" class="price">
                    <span>$ 78 </span>
                  </el-col>
                  <el-col :span="6" class="decrease">
                    <span style="color: red">-15%</span>
                  </el-col>
                </el-row>
                <el-row class="total-profit-footer">
                  <el-col><span>Past Month</span></el-col>
                </el-row>
              </el-card></el-col
            >
          </el-row>
        </el-col>
        <el-col :lg="6" style="margin-bottom: 10px">
          <el-row>
            <el-col style="margin-bottom: 20px" :span="24"
              ><el-card class="card-total-profit">
                <el-row align="middle">
                  <el-col :span="23">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      class="v-icon__svg"
                      style="background-color: #9155fd"
                    >
                      <path
                        fill="white"
                        d="M6.5,17H15L18.5,12L15,7H6.5L10,12L6.5,17M15,19H3L7.5,12L3,5H15C15.69,5 16.23,5.3 16.64,5.86L21,12L16.64,18.14C16.23,18.7 15.69,19 15,19Z"
                      ></path>
                    </svg>
                  </el-col>
                  <el-col :span="1">
                    <el-icon><more-filled /></el-icon> </el-col
                ></el-row>
                <el-row>
                  <el-col :span="24" class="total-profit-title">
                    <span> New Project </span>
                  </el-col>
                </el-row>
                <el-row class="total-profit-price" align="middle">
                  <el-col :span="12" class="price">
                    <span>862</span>
                  </el-col>
                  <el-col :span="6" class="decrease">
                    <span style="color: red">-18%</span>
                  </el-col>
                </el-row>
                <el-row class="total-profit-footer">
                  <el-col><span>Yearly Project</span></el-col>
                </el-row>
              </el-card></el-col
            >
            <el-col :span="24"
              ><el-card class="card-total-profit">
                <el-row align="middle">
                  <el-col :span="23">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      role="img"
                      aria-hidden="true"
                      class="v-icon__svg"
                      style="background-color: #ffb400"
                    >
                      <path
                        fill="white"
                        d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"
                      ></path>
                    </svg>
                  </el-col>
                  <el-col :span="1">
                    <el-icon><more-filled /></el-icon> </el-col
                ></el-row>
                <el-row>
                  <el-col :span="24" class="total-profit-title">
                    <span> Sales Quries </span>
                  </el-col>
                </el-row>
                <el-row class="total-profit-price" align="middle">
                  <el-col :span="12" class="price">
                    <span>15</span>
                  </el-col>
                  <el-col :span="6" class="decrease">
                    <span style="color: red">-18% </span>
                  </el-col>
                </el-row>
                <el-row class="total-profit-footer">
                  <el-col><span>Last week</span></el-col>
                </el-row>
              </el-card></el-col
            >
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
  <!-- Session three -->

  <el-row style="margin-bottom: 20px; min-height: 415px" :gutter="20">
    <el-col :lg="7" style="margin-bottom: 10px">
      <el-card class="sales-country-card">
        <el-row align="middle" style="margin-bottom: 30px"
          ><el-col :span="23">
            <span class="ses-two-card-title">Sales by Countries </span></el-col
          >
          <el-col :span="1">
            <el-icon><more-filled /></el-icon> </el-col
        ></el-row>
        <el-row
          v-for="(item, index) in listSale"
          :key="index"
          class="row-info"
          align="middle"
        >
          <el-col  :span="3">
            <el-container
              class="container-country"
              :style="{ backgroundColor: `${item.color}`, height: '40px' }"
            >
              <span class="country">{{ item.country }}</span>
            </el-container>
          </el-col>
          <el-col :span="18">
            <el-row style="padding-left: 20px">
              <el-col :lg="24"
                ><span class="sold">{{ item.sale }}</span
                ><span class="percent">{{ item.percent }}</span></el-col
              >
              <el-col :lg="24"
                ><span class="place">{{ item.place }}</span></el-col
              >
            </el-row>
          </el-col>
          <el-col :span="3">
            <el-row>
              <el-col :lg="24">
                <span class="sold-two">{{ item.sold }}</span></el-col
              >
              <el-col :lg="24"
                ><span class="sales">{{ item.sales }}</span></el-col
              >
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :lg="17" style="margin-bottom: 10px">
      <el-card class="card-table">
        <TableComponent />
      </el-card>
    </el-col>
  </el-row>
  <el-row class="hidden-md-only hidden-lg-only hidden-xl-only">
    <el-col :span="24">
      <drawer />
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { MoreFilled, CaretTop } from "@element-plus/icons-vue";
import apexChartComponent from "../components/ChartComponent.vue";
import TableComponent from "../components/Table.vue";
import Drawer from "../components/Drawer.vue";
export default defineComponent({
  components: {
    MoreFilled,
    TableComponent,
    apexChartComponent,
    CaretTop,
    Drawer,
  },
  setup() {
    const listTotalEarning = [
      {
        url: "https://themeselection.com/demo/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/zipcar.png?9fbabad0525ed15da3a7aa052239a453",
        project: "Zipcar",
        languages: "Vuejs, React & HTML",
        percent: 90,
        color: "#9155fd",
        number: "$24,895.65",
      },
      {
        url: "https://themeselection.com/demo/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/bitbank.png?bb37b27d2f6e93344acb315734eb176a",
        project: "Bitbank",
        languages: "Sketch, Figma & XD",
        percent: 70,
        color: "blue",
        number: "$8,6500.20",
      },
      {
        url: "https://themeselection.com/demo/materio-vuetify-vuejs-laravel-admin-template-free/demo/images/aviato.png?aef8d9250a299b44fbea1766f59124a9",
        project: "Aviato",
        languages: "HTML & angular",
        percent: 40,
        color: "gray",
        number: "$1,2450.80",
      },
    ];
    const listSale = [
      {
        color: "red",
        country: "US",
        sale: "$8,656k",
        percent: "25.8%",
        place: "United states of america",
        sold: "894k",
        sales: "Sales",
      },
      {
        color: "green",
        country: "UK",
        sale: "$2,415k",
        percent: "6.2%",
        place: "United kingdom",
        sold: "645k",
        sales: "Sales",
      },
      {
        color: "blue",
        country: "IN",
        sale: "$865k",
        percent: "12.4%",
        place: "India",
        sold: "148k",
        sales: "Sales",
      },
      {
        color: "#ffb400",
        country: "JA",
        sale: "$745k",
        percent: "11.9%",
        place: "Japan",
        sold: "86k",
        sales: "Sales",
      },
      {
        color: "gray",
        country: "KO",
        sale: "$45k",
        percent: "16.2%",
        place: "Korea",
        sold: "42k",
        sales: "Sales",
      },
    ];
    return { listTotalEarning, listSale };
  },
});
</script>
<style>
.ses-one-right-title {
  font-size: 20px;
  font-weight: 600;
  color: #514a5aad;
}
.ses-one-right-one {
  color: gray;
}
.ses-one-right-two {
  margin-top: 30px;

  color: #9155fd;
  font-size: 24px;
  font-weight: 700;
}
.ses-one-left-card .btn-view-sales {
  color: white;
  background-color: #9155fd;
  margin-top: 10px;
}
.ses-one-left-card .ses-one-right-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ses-one-right-card {
  font-size: 24px;
  color: black;
  font-weight: 600;
}
.ses-one-left-card {
  /* min-height: 190px; */
  min-height: 100%;
}
.ses-one-card-right {
  /* min-height: 190px; */
  min-height: 100%;
}
.four-dashboard {
  margin-top: 60px;
}
.turnover {
  font-size: 24px;
  font-weight: 700;
  margin-top: 5px;
}
.v-icon__svg {
  font-size: 30px;
  border-radius: 5px;
  height: 30px;
  width: 30px;
  padding: 5px;
}
.ses-two-card-title {
  font-size: 20px;
  color: #9e9e9e;
  font-weight: 600;
}
.ses-two-card .ses-two-details {
  font-size: 18px;
  font-weight: 500;
  color: gray;
}
.ses-two-card .el-button {
  width: 100%;
  min-height: 45px;
  border-color: #bf3fcf;
  color: #bf3fcf;
  font-weight: 600;
  margin-top: 20px;
}
.total-earning-card {
  min-height: 456px;
}
.total-earning {
  margin-top: 60px;
  font-size: 36px;
  font-weight: 600;
}
.decrease-earning {
  font-size: 24px;
  color: rgb(70, 182, 70);
  font-weight: 600;
}
.total-earning-list {
  margin-top: 30px;
}
.card-total-profit {
  margin-bottom: 20px;
  min-height: 100%;
  min-width: 100%;
}
.card-total-profit .v-icon__svg {
  background-color: #56ca00;
  border-radius: 30px;
  padding: 7px;
}
.total-profit-title {
  font-size: 20px;
  color: gray;
  margin-top: 20px;
}
.total-profit-price .price {
  font-weight: 600;
  font-size: 30px;
}
.total-profit-price .decrease {
  color: limegreen;
  font-weight: 400;
  font-size: 20px;
}
.total-profit-price {
  margin-top: 10px;
}
.total-profit-footer {
  margin-top: 10px;
  font-size: 14px;
  color: gray;
}
.sales-country-card {
  min-height: 100%;
}
.card-table {
  min-height: 100%;
}
.row-info {
  margin-bottom: 20px;
}

.container-country {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  min-height: 50px;
  border-radius: 40px;
}
.row-info .country {
  color: white;
  font-weight: 700;
}
.row-info .sold {
  color: #5e5669de;
  font-weight: 700;
  font-size: 20px;
}
.row-info .percent {
  margin-left: 15px;
  font-weight: 600;
}
.row-info .place {
  color: #bebebe;
}
.row-info .sales {
  color: #bebebe;
}
.row-info .sold-two {
  color: #5e5669de;
  font-weight: 700;
}
</style>
