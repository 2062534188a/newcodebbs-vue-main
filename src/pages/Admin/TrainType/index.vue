<template>
  <el-container>
    <el-main>
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        :inline="true"
        class="demo-ruleForm"
        size="mini"
      >
        <el-form-item label="列车编号" prop="train_num">
          <el-input v-model="ruleForm.train_num" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="列车类型" prop="train_type">
          <el-input v-model="ruleForm.train_type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="列车状态" prop="state">
          <el-select v-model="ruleForm.state" placeholder="">
            <el-option label="维修中" value="0"></el-option>
            <el-option label="运行中" value="1"></el-option>
            <el-option label="状态异常" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        plain
        icon="el-icon-plus"
        size="mini"
        v-hasPermi="['table:table:add']"
        >新增</el-button
      >
      <el-button
        style=""
        type="primary"
        plain
        icon="el-icon-refresh-right"
        size="mini"
        v-hasPermi="['table:table:add']"
        >刷新</el-button
      >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="trainNum" label="列车编号"> </el-table-column>
        <el-table-column prop="trainType" label="列车类型"> </el-table-column>

        <el-table-column
          prop="train_seats"
          label="商务/特等/一等/二等座余量"
          width="200"
        >
          <template slot-scope="scope">
            {{ scope.row.trainBusinessSeats }}/{{
              scope.row.trainSuperiorSeats
            }}/{{ scope.row.trainFirstSeats }}/{{ scope.row.trainSecondSeats }}
          </template>
        </el-table-column>
        <el-table-column
          prop="train_seats_price"
          label="商务/特等/一等/二等座票价"
          width="200"
        >
          <template slot-scope="scope">
            {{ scope.row.trainBusinessSeatsPrice }}/{{
              scope.row.trainSuperiorSeatsPrice
            }}/{{ scope.row.trainFirstSeatsPrice }}/{{
              scope.row.trainSecondSeatsPrice
            }}
          </template>
        </el-table-column>

        <el-table-column prop="trainState" label="列车状态"> </el-table-column>
        <el-table-column prop="trainServiceLife" label="列车使用年限">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
import { queryTrainType } from "@/api/api";
export default {
  name: "UserManagement",
  data() {
    return {
      ruleForm: {
        train_num: "",
        train_seats: "",
        train_type: "",
        state: "",
      },
      tableData: [
        {
          train_num: "",
          train_seats: "2016-05-02",
          train_type: "",
          train_seats_price: "王小虎",
          train_state: "上海市普陀区金沙江路 1518 弄",
          train_service_life: "",
        },
      ],
    };
  },
  methods: {
    onSubmit() {},
    resetForm(formName) {
      console.log(formName);
      this.$refs[formName].resetFields();
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    queryTrainType() {
      queryTrainType().then((res) => {
        const trainType = res.data;
        this.tableData = trainType;
        console.log(trainType);
      });
    },
  },
  mounted() {
    this.$bus.$emit("message", this.$route.meta.tittle);
    this.queryTrainType();
  },
};
</script>

<style></style>
