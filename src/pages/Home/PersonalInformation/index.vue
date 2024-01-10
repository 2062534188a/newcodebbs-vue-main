<template>
  <el-container>
    <el-main style="display: flex; justify-content: center">
      <el-card class="box-card" style="width: 600px">
        <div slot="header" class="clearfix">
          <span>个人信息</span>
        </div>
        <div class="text item">
          <el-descriptions class="margin-top" :column="1">
            <el-descriptions-item label="真实姓名">{{
              userData.userIdName
            }}</el-descriptions-item>
            <el-descriptions-item label="身份证号">{{
              userData.userIdNumber
            }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{
              userData.userSex
            }}</el-descriptions-item>
            <el-descriptions-item label="生日">{{
              userData.userBirthday
            }}</el-descriptions-item>
            <el-descriptions-item label="年龄">{{
              userData.userAge
            }}</el-descriptions-item>
          </el-descriptions>
          <el-divider></el-divider>
          <el-descriptions class="margin-top" :column="1" title="联系方式">
            <el-descriptions-item label="手机号">{{
              userData.userPhone
            }}</el-descriptions-item>
            <el-descriptions-item label="手机号状态">{{
              userData.userPhoneState
            }}</el-descriptions-item>
            <el-descriptions-item label="邮箱">{{
              userData.userMail
            }}</el-descriptions-item>
            <el-descriptions-item label="邮箱状态">{{
              userData.userMailState
            }}</el-descriptions-item>
            <el-descriptions-item label="用户类型">{{
              userData.userType
            }}</el-descriptions-item>
            <el-descriptions-item label="注册时间">{{
              userData.userCreate
            }}</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
import { queryMyUserData } from "@/api/api";
export default {
  name: "PersonalInformation",
  data() {
    return {
      userData: {
        user_id_name: "",
        user_id_number: "",
        user_birthday: "",
        user_age: "",
        user_phone: "",
        user_phone_state: "",
        user_mail: "",
        user_mail_state: "",
        user_sex: "",
        user_type: "",
        user_create: "",
      },
    };
  },
  methods: {
    queryMyUserData() {
      queryMyUserData()
        .then((res) => {
          const userData = res.data;
          this.userData = userData;
          console.log(userData);
        })
        .catch((err) => {});
    },
  },
  mounted() {
    this.queryMyUserData();
  },
};
</script>

<style></style>
