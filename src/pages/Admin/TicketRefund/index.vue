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
          <el-input
            type="password"
            v-model="ruleForm.user_id"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="订单号" prop="order_id">
          <el-input
            type="password"
            v-model="ruleForm.order_id"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="列车状态" prop="refund_status">
          <el-select v-model="ruleForm.refund_status" placeholder="">
            <el-option label="待审核" value="0"></el-option>
            <el-option label="审核已通过" value="1"></el-option>
            <el-option label="审核未通过" value="2"></el-option>
            <el-option label="审核已退款" value="3"></el-option>
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
        <el-table-column prop="userId" label="用户ID"> </el-table-column>
        <el-table-column prop="orderId" label="订单号"> </el-table-column>
        <el-table-column prop="refundAmount" label="退款金额">
        </el-table-column>
        <el-table-column prop="refundReason" label="退款原因">
        </el-table-column>
        <el-table-column prop="refundTime" label="申请时间"> </el-table-column>
        <el-table-column prop="refundStatus" label="退款状态">
        </el-table-column>
        <el-table-column prop="adminComment" label="备注"> </el-table-column>
        <el-table-column label="操作" width="150">
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
import { queryTicketRefund } from "@/api/api";
export default {
  name: "TicketPre-sale",
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      tableData: [
        {
          user_id: "2016-05-02",
          order_id: "王小虎",
          refund_amount: "上海市普陀区金沙江路 1518 弄",
          refund_reason: "上海市普陀区金沙江路 1518 弄",
          refund_time: "上海市普陀区金沙江路 1518 弄",
          refund_status: "上海市普陀区金沙江路 1518 弄",
          admin_comment: "上海市普陀区金沙江路 1518 弄",
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
    queryTicketRefund() {
      queryTicketRefund().then((res) => {
        const ticketRefund = res.data;
        this.tableData = ticketRefund;
        console.log(ticketRefund);
      });
    },
  },
  mounted() {
    this.$bus.$emit("message", this.$route.meta.tittle);
    this.queryTicketRefund();
  },
};
</script>

<style></style>
