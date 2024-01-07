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
                    inline-message="true"
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
                <span>车票列表</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >刷新</el-button
                >
              </div>
              <div class="text item">
                <!-- 车票展示列表 -->
                <el-table :data="tableData" height="350">
                  <el-table-column prop="date" label="发车日期" width="180">
                  </el-table-column>
                  <el-table-column prop="name" label="发车站点" width="180">
                  </el-table-column>
                  <el-table-column prop="address" label="目标站点">
                  </el-table-column>
                </el-table>
              </div>
            </el-card></div
        ></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "search",
  data() {
    var checkDate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("日期不能为空"));
      }
    };
    return {
      ruleForm: {
        go: "",
        from: "",
        date: "",
        type: [],
      },
      tableData: [
        {
          train_issued_time: "2016-05-02",
          train_Stops: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      rules: {
        from: [
          { required: true, message: "请输入出发地", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
        to: [
          { required: true, message: "请输入到达地", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 2 到 10 个字符", trigger: "blur" },
        ],
        date: [{ validator: checkDate, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
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
