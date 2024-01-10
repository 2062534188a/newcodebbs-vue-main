<template>
  <el-container>
    <el-main>
      <el-card class="box-card" style="height: 80vh">
        <div slot="header" class="clearfix">
          <span>会员信息</span>
        </div>
        <div class="text item">
          <el-descriptions title="基本信息" direction="vertical">
            <el-descriptions-item label="手机号">{{
              tableData.userPhone
            }}</el-descriptions-item>
            <el-descriptions-item label="姓名">{{
              tableData.userIdName
            }}</el-descriptions-item>
            <el-descriptions-item label="会员等级">{{
              tableData.userVip + 1
            }}</el-descriptions-item>
            <el-descriptions-item label="备注">
              <el-tag size="small">无</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="等级生效起始日">{{
              tableData.userCreate
            }}</el-descriptions-item
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
          <el-steps
            :active="tableData.userVip"
            align-center
            style="margin-top: 70px"
          >
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
import { queryMyVipInformation } from "@/api/api";
export default {
  name: "MemberCenter",
  data() {
    return {
      MembershipPoints: 100,
      tableData: {},
    };
  },
  methods: {
    getMembershipPoints(percentage) {
      switch (this.tableData.userVip + 1) {
        case 2:
          this.MembershipPoints = this.tableData.userVipIntegral / 500;
          break;
        case 3:
          this.MembershipPoints = this.tableData.userVipIntegral / 1500;
          break;
        case 4:
          this.MembershipPoints = this.tableData.userVipIntegral / 2500;
          break;
      }
      return this.tableData.userVipIntegral;
    },
    queryMyVipInformation() {
      queryMyVipInformation().then((res) => {
        const vipInformation = res.data;
        this.tableData = vipInformation;
        this.getMembershipPoints();
        console.log(vipInformation);
      });
    },
  },
  mounted() {
    this.queryMyVipInformation();
  },
};
</script>

<style>
a {
  color: powderblue;
}
</style>
