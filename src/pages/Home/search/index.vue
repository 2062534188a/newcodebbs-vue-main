<template>
  <el-container>
    <el-main>
      <el-row>
        <el-col :span="11"
          ><div class="grid-content bg-purple-dark">
            <!-- 车票查询表单 -->
            <el-card style="width: 500px; margin: 10%">
              <div slot="header">
                <span><i class="el-icon-pie-chart"></i> 车票查询</span>
              </div>
              <div class="el-table el-table--enable-row-hover el-table--medium">
                <div ref="mychart" style="height: 320px">
                  <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm"
                    inline-message
                  >
                    <el-form-item label="出发地" prop="from">
                      <el-input
                        v-model="ruleForm.from"
                        size="mini"
                        style="width: 70%"
                        placeholder="请输入出发地"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="到达地" prop="to">
                      <el-input
                        v-model="ruleForm.to"
                        size="mini"
                        style="width: 70%"
                        placeholder="请输入到达地"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="出发时间" prop="date">
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="ruleForm.date"
                        style="width: 70%"
                        size="mini"
                      ></el-date-picker>
                    </el-form-item>
                    <el-form-item>
                      <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="学生" name="type"></el-checkbox>
                        <el-checkbox
                          label="高铁/动车"
                          name="type"
                        ></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label-width="50px">
                      <el-button
                        type="primary"
                        @click="submitForm('ruleForm')"
                        style="height: 40px; width: 85%"
                        >立即查询</el-button
                      >
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-card>
          </div></el-col
        >
        <el-col :span="13"
          ><div class="grid-content bg-purple-dark">
            <!-- 车票展示表单 -->
            <el-card
              class="box-card"
              style="
                margin-top: 60px;
                width: 100%;
                height: 700px;
                margin: 3% 10% 10% 0;
              "
            >
              <div slot="header" class="clearfix">
                <span>车次列表</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >刷新</el-button
                >
              </div>
              <div class="text item">
                <!-- 车票展示列表 -->
                <el-table :data="tableData" height="350">
                  <el-table-column prop="trainNum" label="车辆编号" width="150">
                  </el-table-column>

                  <el-table-column
                    prop="fromStops"
                    label="发车站点"
                    width="150"
                  >
                  </el-table-column>
                  <el-table-column prop="toStops" label="目标站点" width="150">
                  </el-table-column>
                  <el-table-column
                    prop="trainIssuedTime"
                    label="发车日期"
                    width="180"
                  >
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                        >预订</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-card>
          </div></el-col
        >
      </el-row>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="座位列" :label-width="formLabelWidth">
            <el-select v-model="form.rowSeat" placeholder="请选择">
              <el-option label="A" value="0"></el-option>
              <el-option label="B" value="1"></el-option>
              <el-option label="C" value="2"></el-option>
              <el-option label="D" value="3"></el-option>
              <el-option label="E" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="座席" :label-width="formLabelWidth">
            <el-select v-model="form.seating" placeholder="请选择座席">
              <el-option label="商务座" value="0"></el-option>
              <el-option label="特等座" value="1"></el-option>
              <el-option label="一等座" value="2"></el-option>
              <el-option label="二等座" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitBooking()">确 定</el-button>
        </div>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
import { queryTrainByRoute, BookingTickets } from "@/api/api";
export default {
  name: "search",
  data() {
    var checkDate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("日期不能为空"));
      } else {
        return callback();
      }
    };
    return {
      dialogFormVisible: false,
      form: {
        trainNum: "",
        fromStops: "",
        toStops: "",
        trainIssuedTime: "",
        trainArrivalTime: "",
        rowSeat: "",
        seating: "",
      },
      formLabelWidth: "120px",
      ruleForm: {
        from: "",
        to: "",
        date: "",
        type: [],
      },
      tableData: [],
      rules: {
        from: [
          { required: true, message: "请输入出发地", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
        to: [
          { required: true, message: "请输入到达地", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
        date: [{ validator: checkDate, trigger: "blur" }],
      },
    };
  },
  methods: {
    handleEdit(index, value) {
      console.log("1111", value);
      this.dialogFormVisible = true;
      this.form.trainNum = value.trainNum;
      this.form.fromStops = value.fromStops;
      this.form.toStops = value.toStops;
      this.form.trainIssuedTime = value.trainIssuedTime;
      this.form.trainArrivalTime = value.trainArrivalTime;
    },
    submitForm(formName) {
      console.log(this.ruleForm);
      this.$refs[formName].validate((valid) => {
        console.log(valid);

        if (valid) {
          queryTrainByRoute(this.ruleForm).then((res) => {
            const route = res.data;
            this.tableData = route;
            this.$message("查询成功！");
          });
        } else {
          return false;
        }
      });
    },
    //预订车票
    submitBooking() {
      BookingTickets(this.form).then((res) => {
        this.dialogFormVisible = false;
        this.$message(res.msg);
      });
    },
  },
};
</script>

<style scoped>
.el-checkbox-group {
  display: flex;
  justify-content: space-between;
  width: 70%;
}
</style>
