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
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="ruleForm.userId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
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
        <el-table-column prop="userId" label="用户ID" width="180">
        </el-table-column>
        <el-table-column prop="userIdName" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="userPhone" label="手机号"> </el-table-column>
        <el-table-column prop="userLoginIp" label="登录IP"> </el-table-column>
        <el-table-column prop="userSex" label="性别"> </el-table-column>
        <el-table-column prop="userPermissions" label="用户状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.userPermissions"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :change="SSS(scope.row.userPermissions)"
            >
            </el-switch>
            <!-- {{ scope.row.userPermissions }} -->
          </template>
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
import { queryUserData } from "@/api/api";
export default {
  name: "UserManagement",
  data() {
    return {
      ruleForm: {
        userId: "",
        phone: "",
      },
      va: true,

      tableData: [
        {
          username: "2016-05-02",
          name: "王小虎",
          phone: "上海市普陀区金沙江路 1518 弄",
          IP: "",
          sex: "",
          state: true,
        },
      ],
    };
  },
  methods: {
    SSS(index) {
      console.log(index);
    },
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
    queryUserData() {
      queryUserData().then((res) => {
        const userData = res.data;
        this.tableData = userData;
        console.log(userData);
      });
    },
  },

  mounted() {
    this.$bus.$emit("message", this.$route.meta.tittle);
    this.queryUserData();
  },
};
</script>

<style></style>
