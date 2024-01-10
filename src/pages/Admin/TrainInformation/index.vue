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
        <el-form-item label="站点" prop="train_Stops">
          <el-input
            v-model="ruleForm.train_Stops"
            autocomplete="off"
          ></el-input>
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
        <el-table-column prop="trainStops" label="站点"> </el-table-column>
        <el-table-column prop="trainIssuedTime" label="预计出发时间">
        </el-table-column>
        <el-table-column prop="trainArrivalTime" label="预计到达时间">
        </el-table-column>
        <el-table-column prop="trainResidenceTime" label="预计停留时间">
        </el-table-column>
        <el-table-column prop="trainLate" label="预计晚点"> </el-table-column>
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
import { queryTrainInformation } from "@/api/api";
export default {
  name: "TrainInformation",
  data() {
    return {
      ruleForm: {
        train_num: "",
        train_Stops: "",
      },
      tableData: [
        {
          train_num: "2016-05-02",
          train_Stops: "王小虎",
          train_arrival_time: "上海市普陀区金沙江路 1518 弄",
          train_issued_time: "上海市普陀区金沙江路 1518 弄",
          train_residence_time: "上海市普陀区金沙江路 1518 弄",
          train_late: "上海市普陀区金沙江路 1518 弄",
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
    queryTrainInformation() {
      queryTrainInformation().then((res) => {
        const trainInformation = res.data;
        this.tableData = trainInformation;
        console.log(trainInformation);
      });
    },
  },
  mounted() {
    this.$bus.$emit("message", this.$route.meta.tittle);
    this.queryTrainInformation();
  },
};
</script>

<style></style>
