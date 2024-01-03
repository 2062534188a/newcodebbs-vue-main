<template>
  <div>
    <el-form
      size="mini"
      label-position="right"
      :rules="rules"
      ref="ruleForm"
      :model="form"
      label-width="90px"
      style="margin: 50px 0 0 10%"
    >
      <el-form-item label="用户名:" style="margin-top: 10px" prop="username">
        <el-input
          v-model="form.username"
          style="width: 60%"
          placeholder="用户名设置成功后不可修改"
        ></el-input>
      </el-form-item>
      <el-form-item label="登录密码:" prop="password">
        <el-input
          v-model="form.password"
          style="width: 60%"
          placeholder="6-20位数字、数字或符号"
        ></el-input>
        <el-progress
          :percentage="percentage"
          :color="customColor"
          style="width: 30%; margin: 0 0 0 38%; position: absolute"
        ></el-progress>
      </el-form-item>

      <el-form-item label="确认密码:" prop="password2">
        <el-input
          v-model="form.password2"
          style="width: 60%"
          placeholder="请再次输入您的登录密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="姓名:" prop="name">
        <el-input
          v-model="form.name"
          style="width: 60%"
          placeholder="请输入姓名"
        ></el-input>
      </el-form-item>
      <el-form-item label="证件号码:" prop="idNum">
        <el-input
          v-model="form.idNum"
          style="width: 60%"
          placeholder="请输入您的证件号码"
        ></el-input>
      </el-form-item>
      <el-form-item label="邮箱:">
        <el-input
          v-model="form.mail"
          style="width: 60%"
          placeholder="请正确填写邮箱地址"
        ></el-input>
      </el-form-item>
      <el-form-item label="优惠类型">
        <el-select v-model="form.peopleType" placeholder="请选择优惠类型">
          <el-option label="成人" value="0"></el-option>
          <el-option label="儿童" value="1"></el-option>
          <el-option label="学生" value="2"></el-option>
          <el-option label="残疾军人" value="3"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="手机号码" id="phone">
        <el-select
          v-model="form.phoneType"
          placeholder="请选择"
          style="width: 30%"
        >
          <el-option label="+86 中国" value="0"></el-option>
          <el-option label="+852 香港" value="1"></el-option>
          <el-option label="+853 澳门" value="2"></el-option>
          <el-option label="+886 台湾" value="3"></el-option>
        </el-select>
        <el-form-item prop="phone" style="display: inline-block">
          <el-input
            v-model="form.phone"
            style="margin-left: 5px"
            placeholder="手机号码"
          ></el-input>
        </el-form-item>
      </el-form-item>
      <el-form-item>
        <el-checkbox-group v-model="isTrue">
          <el-checkbox
            label="我已阅读并同意遵守《铁路客户服务中心网站条款》"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="register('ruleForm')"
          >提交注册</el-button
        >
        <el-link target="_blank" style="margin-left: 35%" @click="pushLogin()"
          >已有账号？</el-link
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reqRegister } from "@/api/api";
export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        name: "",
        idNum: "",
        mail: "",
        peopleType: "",
        phoneType: "",
        phone: "",
      },
      //表单规则验证
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 30,
            message: '6-30位字母、数字或"_",字母开头',
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 20,
            message: "长度在 6 到 20 个字符",
            trigger: "blur",
          },
        ],
        password2: [
          { required: true, message: "请输入确认登录密码", trigger: "blur" },
          { min: 6, max: 20, message: "密码与第一次不同", trigger: "blur" },
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 10, message: "请输入正确姓名", trigger: "blur" },
        ],
        idNum: [
          { required: true, message: "请输入证件号码", trigger: "blur" },
          { min: 18, max: 18, message: "证件号码不正确", trigger: "blur" },
        ],

        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { min: 10, max: 12, message: "手机号码不正确", trigger: "blur" },
        ],
      },
      isTrue: false,
      percentage: 0,
      customColor: "#909399",
    };
  },
  components: {},

  methods: {
    register(formName) {
      //检查协议勾选
      if (this.isTrue) {
        //对表单格式进行校验
        this.$refs[formName].validate((valid) => {
          if (valid) {
            reqRegister(this.form)
              .then((res) => {
                if (res.code == 200) {
                  //注册成功 跳转登录
                  this.$router.push({ name: "Login" });
                  this.$message(res.msg);
                  return true;
                }
              })
              .catch((err) => {
                //状态码非200 注册失败
                this.$message(res.msg);
              });
          } else {
            return false;
          }
        });
      } else {
        this.$message("请勾选同意协议");
      }
    },
    pushLogin() {
      this.$router.push({ name: "Login" });
    },
  },
  watch: {
    //检查密码安全性
    "form.password"(item1, item2) {
      if (
        item1.length >= 6 &&
        item1.match("^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[^\\w\\d\\s]).+$")
      ) {
        //密码含有特殊字符、字母、数字
        this.percentage = 100;
        this.customColor = "#00FF00";
      } else if (
        item1.length >= 6 &&
        item1.match("^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]+$")
      ) {
        //密码含有字母、数字
        this.percentage = 66;
        this.customColor = "#D2B48C";
      } else if (item1.length >= 6 && item1.match("^\\d+$")) {
        //密码含有数字
        this.percentage = 33;
        this.customColor = "#FF0000";
      } else if (item1.length >= 6 && item1.match("^[a-zA-Z]+$")) {
        //密码含有字母
        this.percentage = 33;
        this.customColor = "#FF0000";
      } else {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style scoped></style>
