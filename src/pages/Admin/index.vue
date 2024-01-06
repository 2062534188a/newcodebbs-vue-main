<template>
  <el-container style="height: auto">
    <!-- 左侧导航栏 -->

    <el-aside style="width: auto; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)"
      ><NavMenu
    /></el-aside>
    <!-- 主体展示页 -->
    <el-container>
      <el-header
        style="
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
        "
        ><AdminHeader :message="message"
      /></el-header>
      <el-main style="padding: 5px"><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import AdminHeader from "@/components/Header/AdminHeader.vue";

export default {
  name: "Admin",
  components: { NavMenu, AdminHeader },
  data() {
    return {
      message: this.$route.meta.tittle,
    };
  },
  methods: {
    update(data) {
      this.message = data;
    },
  },
  mounted() {
    this.$bus.$on("message", this.update);
  },
  beforeDestroy() {
    this.$bus.$off("message");
  },
};
</script>

<style></style>
