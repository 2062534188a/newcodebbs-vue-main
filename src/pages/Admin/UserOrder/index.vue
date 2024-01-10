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
        <el-form-item label="订单号" prop="order_sn">
          <el-input
            type="order_sn"
            v-model="ruleForm.user_id"
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
        style=""
        type="primary"
        plain
        icon="el-icon-refresh-right"
        size="mini"
        v-hasPermi="['table:table:add']"
        >刷新</el-button
      >
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="userId" label="用户ID" width="150">
        </el-table-column>
        <el-table-column prop="orderSn" label="订单号" width="150">
        </el-table-column>
        <el-table-column prop="orderPrice" label="订单金额" width="150">
        </el-table-column>
        <el-table-column prop="userIdName" label="真实姓名" width="150">
        </el-table-column>
        <el-table-column prop="userIdNumber" label="身份证号" width="150">
        </el-table-column>
        <el-table-column prop="userPhone" label="手机号" width="150">
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="150">
        </el-table-column>
        <el-table-column prop="closeTime" label="结束时间" width="150">
        </el-table-column>
        <el-table-column prop="orderStatus" label="订单状态"></el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
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
import { queryOrder } from "@/api/api";
export default {
  name: "UserOrder",
  data() {
    return {
      ruleForm: {
        user_id: "",
        order_sn: "",
        order_price: "",
        user_id_name: "",
        user_id_number: "",
        user_phone: "",
        create_time: "",
        order_status: "",
      },
      tableData: [
        {
          user_id: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
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
    queryOrder() {
      queryOrder().then((res) => {
        const order = res.data;
        this.tableData = order;
        console.log(order);
      });
    },
  },
  mounted() {
    this.$bus.$emit("message", this.$route.meta.tittle);
    this.queryOrder();
  },
};
</script>

<style></style>
