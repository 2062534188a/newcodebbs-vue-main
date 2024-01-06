<template>
  <el-row style="">
    <el-col :span="24"
      ><h2 style="padding: 10px">{{ message }}</h2></el-col
    >
  </el-row>
</template>

<script>
export default {
  name: "AdminHeader",
  props: ["message"],
  data() {
    return {};
  },
  methods: {},
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
h2 {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 20px Extra large;
}
</style>
