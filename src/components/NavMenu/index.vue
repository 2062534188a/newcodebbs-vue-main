<template>
  <el-row class="tac" style="height: 100vh">
    <el-col :span="24">
      <img src="./铁路.png" alt="" style="height: 50px; width: 200px" />

      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              index="1-1"
              @click="$router.push({ name: 'UserManagement' })"
              >用户信息</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>火车管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              index="2-1"
              @click="$router.push({ name: 'TrainType' })"
              >火车类型管理</el-menu-item
            >
            <el-menu-item
              index="2-2"
              @click="$router.push({ name: 'TrainInformation' })"
              >火车信息管理</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              index="3-1"
              @click="$router.push({ name: 'UserOrder' })"
              >用户订单管理</el-menu-item
            >
            <el-menu-item
              index="3-2"
              @click="$router.push({ name: 'TicketRefund' })"
              >用户退票管理</el-menu-item
            >
            <el-menu-item
              index="3-3"
              @click="$router.push({ name: 'TicketPre' })"
              >车票车票管理</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
