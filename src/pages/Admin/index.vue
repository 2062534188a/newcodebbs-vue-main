<template>
  <el-container style="height: auto">
    <!-- 左侧导航栏 -->
    <el-aside style="width: auto"><NavMenu /></el-aside>
    <!-- 主体展示页 -->
    <el-container>
      <el-header><adminHeader /></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import AdminHeader from "@/components/Header/AdminHeader.vue";

export default {
  name: "Admin",
  components: { NavMenu, AdminHeader },
};
</script>

<style></style>
