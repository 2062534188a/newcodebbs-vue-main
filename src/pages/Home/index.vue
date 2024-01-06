<template>
  <el-container>
    <!-- 头部导航栏 -->
    <el-header style="height: auto"><Header /></el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-main> </el-main>
  </el-container>
</template>

<script>
import Header from "@/components/Header/UserHeader.vue";
export default {
  name: "home",
  components: { Header },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
</style>
