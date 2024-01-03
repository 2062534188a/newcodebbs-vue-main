<template>
  <div>
    <el-container>
      <el-main>
        <el-tabs :tab-position="top" style="height: 640px; margin: 5px 20px">
          <el-tab-pane label="待出行车票" v-loading="loding">
            <el-card class="box-card">
              <div
                class="text item"
                v-show="tableData.length == 0"
                style="
                  height: 500px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                未查询到订单，去
                <el-link type="primary" href="http://localhost/#/home/search"
                  >预订车票
                </el-link>
                吧
              </div>
              <el-table
                v-show="!tableData.length == 0"
                :data="tableData"
                height="350"
              >
                <el-table-column prop="date" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址"> </el-table-column>
              </el-table>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="未完成车票">
            <el-form
              ref="form"
              :model="form"
              label-width="80px"
              size="mini"
              inline="true"
            >
              <el-form-item>
                <el-select v-model="form.region" placeholder="请选择查询方式">
                  <el-option label="按订票日期查询" value="0"></el-option>
                  <el-option label="按乘车日期查询" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="0.1">-</el-col>
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.name"
                  placeholder="订单号/车次/姓名"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="search()" style="padding: 7px 20px"
                  >立即查询
                </el-button>
              </el-form-item>
            </el-form>
            <el-table :data="tableData" style="width: 100%" v-loading="loding">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="历史车票">
            <el-form
              ref="form"
              :model="form"
              label-width="80px"
              size="mini"
              inline="true"
            >
              <el-form-item label="乘车日期">
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
                <el-col class="line" :span="0.1">-</el-col>
                <el-col :span="11">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.date1"
                    style="width: 100%"
                  ></el-date-picker>
                </el-col>
              </el-form-item>
              <el-form-item>
                <el-input
                  v-model="form.name"
                  placeholder="订单号/车次/姓名"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="search()" style="padding: 7px 20px"
                  >立即查询
                </el-button>
              </el-form-item>
            </el-form>
            <el-table :data="tableData" style="width: 100%" v-loading="loding">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  name: "Homepage",
  components: { Header },
  data() {
    return {
      tableData: [
        // {
        //   date: "2016-05-02",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1518 弄",
        // },
        // {
        //   date: "2016-05-04",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1517 弄",
        // },
        // {
        //   date: "2016-05-01",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1519 弄",
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄",
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄",
        // },
        // {
        //   date: "2016-05-03",
        //   name: "王小虎",
        //   address: "上海市普陀区金沙江路 1516 弄",
        // },
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      loding: false,
    };
  },
  methods: {
    search() {},
  },
  mounted() {},
};
</script>

<style scoped></style>
