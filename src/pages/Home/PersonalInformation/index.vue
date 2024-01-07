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
              userData.user_id_name
            }}</el-descriptions-item>
            <el-descriptions-item label="身份证号">{{
              userData.user_id_number
            }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{
              userData.user_sex
            }}</el-descriptions-item>
            <el-descriptions-item label="生日">{{
              userData.user_birthday
            }}</el-descriptions-item>
            <el-descriptions-item label="年龄">{{
              userData.user_age
            }}</el-descriptions-item>
          </el-descriptions>
          <el-divider></el-divider>
          <el-descriptions class="margin-top" :column="1" title="联系方式">
            <el-descriptions-item label="手机号">{{
              userData.user_phone
            }}</el-descriptions-item>
            <el-descriptions-item label="手机号状态">{{
              userData.user_phone_state
            }}</el-descriptions-item>
            <el-descriptions-item label="邮箱">{{
              userData.user_mail
            }}</el-descriptions-item>
            <el-descriptions-item label="邮箱状态">{{
              userData.user_mail_state
            }}</el-descriptions-item>
            <el-descriptions-item label="用户类型">{{
              userData.user_type
            }}</el-descriptions-item>
            <el-descriptions-item label="注册时间">{{
              userData.user_create
            }}</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-card>
    </el-main>
  </el-container>
</template>

<script>
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
};
</script>

<style>
a {
}
</style>
