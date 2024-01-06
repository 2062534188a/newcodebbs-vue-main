<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
      style="margin: 30px 0 0 10%"
    >
      <el-form-item label="" prop="loginMsg" style="width: 80%">
        <el-input
          v-model="ruleForm.loginMsg"
          placeholder="请输入手机号/用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="password" style="width: 80%">
        <el-input
          v-model="ruleForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item style="width: 80%">
        <el-button
          type="primary"
          @click="login('ruleForm')"
          style="float: right"
          >立即登录</el-button
        >
      </el-form-item>
    </el-form>

    <el-checkbox v-model="checked" id="checked">记住密码</el-checkbox>
    <el-link icon="el-icon-edit" id="edit">找回密码</el-link>
  </div>
</template>

<script>
// 引入base64库
export default {
  name: "Login",
  data() {
    return {
      ruleForm: {
        loginMsg: "",
        password: "",
        loginMethod: 0,
      },
      rules: {
        loginMsg: [
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
      },
      //是否记住密码
      checked: true,
    };
  },
  methods: {
    //密码登录
    login(formName) {
      //验证表单内容
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const msg = this.ruleForm.loginMsg;
          if (msg.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
            //修改标识符为邮箱登录
            this.ruleForm.loginMethod = 2;
          } else if (msg.match("^1[3456789]\\d{9}$")) {
            //修改标识符为手机号登录
            this.ruleForm.loginMethod = 1;
          }
          //调用vuex发送登录请求
          const promise = this.$store.dispatch(
            "LogAndReg/Login",
            this.ruleForm
          );
          promise
            .then((res) => {
              //弹框展示登录信息
              const token = res.data;

              if (token == null) {
                //用户权限为普通用户 跳转首页
                this.$message("当前账号异常，请联系管理员");
                return;
              }
              // 获取JWT的payload部分
              const jwtPayload = token.split(".")[1];
              //获取用户权限
              const user_permissions = JSON.parse(atob(jwtPayload))[
                "user_permissions"
              ];
              console.log(user_permissions);
              if (user_permissions == 0) {
                //用户权限为普通用户 跳转首页
                this.$message(res.msg);
                this.$router.replace({ name: "Homepage" });
              } else if (user_permissions == 1) {
                //用户权限为管理员 跳转后台管理业
                this.$message("管理员登录");
                this.$router.replace({ name: "Admin" });
              }
            })
            .catch((err) => {
              //弹框展示异常信息
              this.$message(err.message);
            });
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
a {
  text-decoration: none;
  color: #000;
}
#edit {
  font-size: 17px;
  float: right;
  margin-right: 10%;
}
#checked {
  margin-left: 10%;
}
.input1,
.input2 {
  height: 60px;
  width: 75%;
  margin: 2% 10%;
}
.test {
  position: relative;
}

#login {
  position: absolute;
  top: 18%;
  right: 16%;

  text-align: left;
}
.input1::after {
  content: "@163.com";
  color: #000;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
}
</style>
