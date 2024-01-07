<template>
  <el-container>
    <el-main>
      <el-card class="box-card" style="height: 80vh">
        <div slot="header" class="clearfix">
          <span>会员信息</span>
        </div>
        <div class="text item">
          <el-descriptions title="基本信息" direction="vertical">
            <el-descriptions-item label="手机号"
              >kooriookami</el-descriptions-item
            >
            <el-descriptions-item label="姓名"
              >18100000000</el-descriptions-item
            >
            <el-descriptions-item label="会员等级">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
              <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="等级生效起始日"
              >江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item
            ><el-descriptions-item label="等级终止日"
              ><h3 style="color: powderblue">长期有效</h3></el-descriptions-item
            >
          </el-descriptions>
          <el-progress
            type="circle"
            :format="getMembershipPoints"
            :percentage="MembershipPoints"
            style="float: left; margin-top: 40px"
          ></el-progress>
          <el-steps :active="1" align-center style="margin-top: 70px">
            <el-step title="0" description="二星"></el-step>
            <el-step title="50000" description="三星"></el-step>
            <el-step title="150000" description="四星"></el-step>
            <el-step title="250000" description="五星"></el-step>
          </el-steps>
        </div> </el-card
    ></el-main>
  </el-container>
</template>

<script>
export default {
  name: "MemberCenter",
  data() {
    return {
      MembershipPoints: "1",
    };
  },
  methods: {
    getMembershipPoints(percentage) {
      return "2";
    },
  },
};
</script>

<style>
a {
  color: powderblue;
}
</style>
