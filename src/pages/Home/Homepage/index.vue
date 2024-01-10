<template>
  <div>
    <el-container>
      <el-main>
        <el-tabs tab-position="top" style="height: 640px; margin: 5px 20px">
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
                :data="table1"
                style="width: 100%"
                v-show="!tableData.length == 0"
              >
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form
                      label-position="left"
                      inline
                      class="demo-table-expand"
                    >
                      <el-form-item label="车票编号">
                        <span>{{ props.row.ticketNumber }}</span>
                      </el-form-item>
                      <el-form-item label="列车编号">
                        <span>{{ props.row.trainNum }}</span>
                      </el-form-item>
                      <el-form-item label="座席">
                        <span>{{ props.row.seating | getSeating }}</span>
                      </el-form-item>
                      <el-form-item label="座位号">
                        <span>{{ props.row.seatNumber }}</span>
                      </el-form-item>
                      <el-form-item label="车票状态">
                        <span>{{ props.row.orderStatus }}</span>
                      </el-form-item>
                      <el-form-item label="发车站点">
                        <span>{{ props.row.departurePoint }}</span>
                      </el-form-item>
                      <el-form-item label="目标站点">
                        <span>{{ props.row.targetPoint }}</span>
                      </el-form-item>
                      <el-form-item label="发车时间">
                        <span>{{ props.row.departureTime }}</span>
                      </el-form-item>
                      <el-form-item label="预订日期">
                        <span>{{ props.row.bookingDate }}</span>
                      </el-form-item>
                      <el-form-item>
                        <el-button
                          type="small"
                          @click="submitTicketRefund(props.$index, props.row)"
                          >退票</el-button
                        >
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column label="车票编号" prop="ticketNumber">
                </el-table-column>
                <el-table-column label="列车编号" prop="trainNum">
                </el-table-column>
                <el-table-column label="座席" prop="seating"> </el-table-column>
                <el-table-column label="座位号" prop="seatNumber">
                </el-table-column>
                <el-table-column label="车票状态" prop="orderStatus">
                </el-table-column>
              </el-table>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="未完成车票">
            <el-form
              ref="form"
              :model="form"
              label-width="80px"
              size="mini"
              inline
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

            <el-table
              :data="tableData"
              style="width: 100%"
              v-show="!tableData.length == 0"
              v-loading="loding"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form
                    label-position="left"
                    inline
                    class="demo-table-expand"
                  >
                    <el-form-item label="车票编号">
                      <span>{{ props.row.ticketNumber }}</span>
                    </el-form-item>
                    <el-form-item label="列车编号">
                      <span>{{ props.row.trainNum }}</span>
                    </el-form-item>
                    <el-form-item label="座席">
                      <span>{{ props.row.seating | getSeating }}</span>
                    </el-form-item>
                    <el-form-item label="座位号">
                      <span>{{ props.row.seatNumber }}</span>
                    </el-form-item>
                    <el-form-item label="车票状态">
                      <span>{{ props.row.orderStatus | getStatus }}</span>
                    </el-form-item>
                    <el-form-item label="发车站点">
                      <span>{{ props.row.departurePoint }}</span>
                    </el-form-item>
                    <el-form-item label="目标站点">
                      <span>{{ props.row.targetPoint }}</span>
                    </el-form-item>
                    <el-form-item label="发车时间">
                      <span>{{ props.row.departureTime }}</span>
                    </el-form-item>
                    <el-form-item label="预订日期">
                      <span>{{ props.row.bookingDate }}</span>
                    </el-form-item>
                    <el-form-item>
                      <el-button
                        type="small"
                        @click="submitTicketRefund(props.$index, props.row)"
                        >退票</el-button
                      >
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="车票编号" prop="ticketNumber">
              </el-table-column>
              <el-table-column label="列车编号" prop="trainNum">
              </el-table-column>
              <el-table-column label="座席" prop="seating"> </el-table-column>
              <el-table-column label="座位号" prop="seatNumber">
              </el-table-column>
              <el-table-column label="车票状态" prop="orderStatus">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="历史车票">
            <el-form
              ref="form"
              :model="form"
              label-width="80px"
              size="mini"
              inline
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
            <el-table
              :data="tableData"
              style="width: 100%"
              v-show="!tableData.length == 0"
              v-loading="loding"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form
                    label-position="left"
                    inline
                    class="demo-table-expand"
                    v-loading="loding"
                  >
                    <el-form-item label="车票编号">
                      <span>{{ props.row.ticketNumber }}</span>
                    </el-form-item>
                    <el-form-item label="列车编号">
                      <span>{{ props.row.trainNum }}</span>
                    </el-form-item>
                    <el-form-item label="座席">
                      <span>{{ props.row.seating | getSeating }}</span>
                    </el-form-item>
                    <el-form-item label="座位号">
                      <span>{{ props.row.seatNumber }}</span>
                    </el-form-item>
                    <el-form-item label="车票状态">
                      <span>{{ props.row.orderStatus | getStatus }}</span>
                    </el-form-item>
                    <el-form-item label="发车站点">
                      <span>{{ props.row.departurePoint }}</span>
                    </el-form-item>
                    <el-form-item label="目标站点">
                      <span>{{ props.row.targetPoint }}</span>
                    </el-form-item>
                    <el-form-item label="发车时间">
                      <span>{{ props.row.departureTime }}</span>
                    </el-form-item>
                    <el-form-item label="预订日期">
                      <span>{{ props.row.bookingDate }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="车票编号" prop="ticketNumber">
              </el-table-column>
              <el-table-column label="列车编号" prop="trainNum">
              </el-table-column>
              <el-table-column label="座席" prop="seating"> </el-table-column>
              <el-table-column label="座位号" prop="seatNumber">
              </el-table-column>
              <el-table-column label="车票状态" prop="orderStatus">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header/UserHeader.vue";
import { queryMyTicket, TicketRefund } from "@/api/api";
export default {
  name: "Homepage",
  components: { Header },
  data() {
    return {
      table1: [],
      table2: [],

      tableData: [
        {
          user_id: "2016-05-02",
          ticket_number: "王小虎",
          train_num: "上海市普陀区金沙江路 1518 弄",
          seating: "上海市普陀区金沙江路 1518 弄",
          seat_number: "上海市普陀区金沙江路 1518 弄",
          order_status: "上海市普陀区金沙江路 1518 弄",
          departure_point: "上海市普陀区金沙江路 1518 弄",
          target_point: "上海市普陀区金沙江路 1518 弄",
          departure_time: "上海市普陀区金沙江路 1518 弄",
          booking_date: "上海市普陀区金沙江路 1518 弄",
        },
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
  filters: {
    getSeating(value) {
      return value == 0
        ? "商务座"
        : value == 1
        ? "特等座"
        : value == 2
        ? "一等座"
        : "二等座";
    },
    getStatus(value) {
      return value == 0
        ? "预定失败"
        : value == 1
        ? "预订中"
        : value == 2
        ? "预订成功"
        : value == 3
        ? "候车中"
        : value == 4
        ? "行驶中"
        : "订单结束";
    },
  },
  methods: {
    submitTicketRefund(value1, value2) {
      console.log(value2);
      TicketRefund(value2).then((res) => {
        this.$message(res.msg);
        location.reload();
      });
    },
    search() {},
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    queryMyTicket() {
      queryMyTicket()
        .then((res) => {
          const ticket = res.data;
          this.tableData = ticket;
          this.tableData.forEach((element) => {
            if (element.orderStatus == 2 || element.orderStatus == 3) {
              this.table1.push(element);
            }
            if (element.orderStatus != 1 && element.order_status != 5) {
              this.table2.push(element);
            }
          });

          // console.log(ticket);
        })
        .catch(() => {});
    },
  },
  mounted() {
    this.queryMyTicket();
  },
};
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
