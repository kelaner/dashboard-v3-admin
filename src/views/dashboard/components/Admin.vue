<script setup lang="ts">
import { provide, ref } from "vue";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import { LegendComponent, TitleComponent, TooltipComponent } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent]);

provide(THEME_KEY, "dark");

const option = ref({
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  },
  series: [
    {
      name: "Demo Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});

const loading = ref(false);
</script>

<template>
  <div class="app-container center">
    <div class="total-layout">
      <div class="un-handle-layout">
        <div class="layout-title">待处理事务</div>
        <div class="un-handle-content">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待付款订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">已完成订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待确认收货订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待发货订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">新缺货登记</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待处理退款申请</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">已发货订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待处理退货订单</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">广告位即将到期</span>
                <span style="float: right" class="color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="overview-layout">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="out-border">
              <div class="layout-title">商品总览</div>
              <div style="padding: 40px">
                <el-row>
                  <el-col :span="6" class="color-danger overview-item-value">100</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">400</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">50</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">500</el-col>
                </el-row>
                <el-row class="font-medium">
                  <el-col :span="6" class="overview-item-title">已下架</el-col>
                  <el-col :span="6" class="overview-item-title">已上架</el-col>
                  <el-col :span="6" class="overview-item-title">库存紧张</el-col>
                  <el-col :span="6" class="overview-item-title">全部商品</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="out-border">
              <div class="layout-title">用户总览</div>
              <div style="padding: 40px">
                <el-row>
                  <el-col :span="6" class="color-danger overview-item-value">100</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">200</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">1000</el-col>
                  <el-col :span="6" class="color-danger overview-item-value">5000</el-col>
                </el-row>
                <el-row class="font-medium">
                  <el-col :span="6" class="overview-item-title">今日新增</el-col>
                  <el-col :span="6" class="overview-item-title">昨日新增</el-col>
                  <el-col :span="6" class="overview-item-title">本月新增</el-col>
                  <el-col :span="6" class="overview-item-title">会员总数</el-col>
                </el-row>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="statistics-layout">
        <div class="layout-title">订单统计</div>
        <el-row>
          <el-col :span="4">
            <div style="padding: 20px">
              <div>
                <div style="color: #909399; font-size: 14px">本月订单总数</div>
                <div style="color: #606266; font-size: 24px; padding: 10px 0">10000</div>
                <div>
                  <span class="color-success" style="font-size: 14px">+10%</span>
                  <span style="color: #c0c4cc; font-size: 14px">同比上月</span>
                </div>
              </div>
              <div style="margin-top: 20px">
                <div style="color: #909399; font-size: 14px">本周订单总数</div>
                <div style="color: #606266; font-size: 24px; padding: 10px 0">1000</div>
                <div>
                  <span class="color-danger" style="font-size: 14px">-10%</span>
                  <span style="color: #c0c4cc; font-size: 14px">同比上周</span>
                </div>
              </div>
              <div style="margin-top: 20px">
                <div style="color: #909399; font-size: 14px">本月销售总额</div>
                <div style="color: #606266; font-size: 24px; padding: 10px 0">100000</div>
                <div>
                  <span class="color-success" style="font-size: 14px">+10%</span>
                  <span style="color: #c0c4cc; font-size: 14px">同比上月</span>
                </div>
              </div>
              <div style="margin-top: 20px">
                <div style="color: #909399; font-size: 14px">本周销售总额</div>
                <div style="color: #606266; font-size: 24px; padding: 10px 0">50000</div>
                <div>
                  <span class="color-danger" style="font-size: 14px">-10%</span>
                  <span style="color: #c0c4cc; font-size: 14px">同比上周</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="20">
            <div style="padding: 10px; border-left: 1px solid #dcdfe6">
              <v-chart class="chart" :option="option" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.center {
  margin-top: 40px;
  margin-left: 120px;
  margin-right: 120px;
  background-color: #ffffff;
}

.chart {
  height: 400px;
}

.total-layout {
  margin-top: 20px;
}

.total-frame {
  border: 1px solid #dcdfe6;
  padding: 20px;
  height: 100px;
}

.total-icon {
  color: #409eff;
  width: 60px;
  height: 60px;
}

.total-title {
  position: relative;
  font-size: 16px;
  color: #909399;
  left: 70px;
  top: -50px;
}

.total-value {
  position: relative;
  font-size: 18px;
  color: #606266;
  left: 70px;
  top: -40px;
}

.un-handle-layout {
  margin-top: 20px;
  border: 1px solid #dcdfe6;
}

.layout-title {
  color: #606266;
  padding: 15px 20px;
  background: #f2f6fc;
  font-weight: bold;
}

.un-handle-content {
  padding: 20px 40px;
}

.un-handle-item {
  border-bottom: 1px solid #ebeef5;
  padding: 10px;
}

.overview-layout {
  margin-top: 20px;
}

.overview-item-value {
  font-size: 24px;
  text-align: center;
}

.overview-item-title {
  margin-top: 10px;
  text-align: center;
}

.out-border {
  border: 1px solid #dcdfe6;
}

.statistics-layout {
  margin-top: 20px;
  border: 1px solid #dcdfe6;
}

.mine-layout {
  position: absolute;
  right: 140px;
  top: 107px;
  width: 250px;
  height: 235px;
}

.address-content {
  padding: 20px;
  font-size: 18px;
}
</style>
