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
        <el-form-item label="用户ID" prop="user_id">
          <el-input v-model="ruleForm.user_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="车辆编号" prop="ticket_number">
          <el-input
            v-model="ruleForm.ticket_number"
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
        <el-table-column prop="user_id" label="用户ID" width="150">
        </el-table-column>
        <el-table-column prop="ticket_number" label="车票编号" width="150">
        </el-table-column>
        <el-table-column prop="train_num" label="列车编号" width="150">
        </el-table-column>
        <el-table-column prop="seating" label="座席" width="150">
        </el-table-column>

        <el-table-column prop="seat_number" label="座位号" width="150">
        </el-table-column>
        <el-table-column prop="order_status" label="车票状态" width="150">
        </el-table-column>
        <el-table-column prop="departure_point" label="发车站点" width="150">
        </el-table-column>
        <el-table-column prop="target_point" label="目标站点" width="150">
        </el-table-column>
        <el-table-column prop="departure_time" label="发车时间" width="150">
        </el-table-column>
        <el-table-column prop="booking_date" label="预订日期" width="150">
        </el-table-column>

        <el-table-column label="操作" width="150" fixed="right">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "TicketRefund",
  data() {
    return {
      ruleForm: {
        user_id: "",
        ticket_number: "",
      },
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
  },
  mounted() {
    this.$bus.$emit("message", this.$route.meta.tittle);
  },
};
</script>

<style></style>
