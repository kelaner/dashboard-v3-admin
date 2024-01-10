<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme";
// 将 Element Plus 的语言设置为中文
import zhCn from "element-plus/es/locale/lang/zh-cn";

const { initTheme } = useTheme();

/** 初始化主题 */
initTheme();

/** 登录后提示 */
// ElNotification({
//   title: "Hello",
//   type: "success",
//   message: h(
//     "a",
//     { style: "color: teal", target: "_blank", href: "https://www.functorz.com/" },
//     "基于Zion自动生成的可视化数据库后台"
//   ),
//   duration: 0,
//   position: "bottom-right"
// })
</script>

<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
</template>
