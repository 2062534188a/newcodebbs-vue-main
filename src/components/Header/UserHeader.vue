<template>
  <div>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple-dark">
          <img
            src="./铁路.png"
            alt=""
            style="height: 50px; width: 200px"
          /></div
      ></el-col>

      <el-col :span="7"
        ><div class="grid-content bg-purple-dark">
          <el-input
            v-model="search"
            placeholder="请输入搜索内容"
          ></el-input></div
      ></el-col>

      <el-col :span="2"
        ><div class="grid-content bg-purple-dark">
          <el-button icon="el-icon-search"></el-button></div
      ></el-col>

      <el-col :span="1" :offset="3"
        ><div class="grid-content bg-purple-dark">
          <el-link icon="el-icon-edit" href="http://localhost/#/login"
            >登录</el-link
          >
        </div></el-col
      >
      <el-col :span="1"
        ><div class="grid-content bg-purple-dark">
          <el-link href="http://localhost/#/register">注册 </el-link>
        </div></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark">
          <ul id="nav">
            <li class="slide1"></li>
            <li class="slide2"></li>
            <li><a href="http://localhost/#/home/search">首页</a></li>
            <li><a href="http://localhost/#/home/homepage">本人车票</a></li>
            <li><a href="http://localhost/#/home/memberCenter">会员中心</a></li>
            <li><a href="http://localhost/#/home/orderCenter">我的订单</a></li>
            <li>
              <a href="http://localhost/#/home/personalInformation">个人中心</a>
            </li>
          </ul>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script scoped>
import $ from "jquery";
export default {
  name: "UserHeader",
  data() {
    return {
      search: "",
    };
  },
  methods: {},
  mounted() {
    console.log(11111);
    $("#nav a").on("click", function () {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
      console.log(position, "***", width);
      $("#nav .slide1").css({ opacity: 1, left: +position.left, width: width });
    });
    $("#nav a").on("mouseover", function () {
      var position = $(this).parent().position();
      var width = $(this).parent().width();
      $("#nav .slide2")
        .css({ opacity: 1, left: +position.left, width: width })
        .addClass("squeeze");
    });
    $("#nav a").on("mouseout", function () {
      $("#nav .slide2").css({ opacity: 0 }).removeClass("squeeze");
    });
    var currentWidth = $("#nav li:nth-of-type(3) a").parent("li").width();
    var current = $("li:nth-of-type(3) a").position();
    console.log(current, "***");
    $("#nav .slide1").css({ left: +current.left, width: currentWidth });
  },
};
</script>

<style scoped>
.el-row {
  margin-top: 10px;
  display: flex;
}
a {
  text-decoration: none;
}
#nav {
  position: relative;

  border: none;
  display: flex;
  list-style: none;

  background: #f5f5f5;
  box-shadow: 20px 40px 40px #00000033;
  padding: 10px;
  justify-content: center;
}

#nav li a {
  position: relative;
  padding: 5px 35px;
  font: 500 20px "优设标题黑";
  margin: 0 10px;
  border: none;
  outline: none;
  color: rgb(70, 100, 180);
  display: inline-block;
  z-index: 3;
}

.slide1,
.slide2 {
  position: absolute;
  display: inline-block;
  height: 40px;
  border-radius: 10em;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
}

.slide1 {
  background-color: rgb(170, 190, 255);
  z-index: 2;
}

.slide2 {
  opacity: 0;
  background-color: rgba(170, 190, 255, 0.5);
  z-index: 1;
  box-shadow: 0 0 20px #ffffffaa inset;
}

.squeeze {
  transform: scale(0.9);
}
</style>
