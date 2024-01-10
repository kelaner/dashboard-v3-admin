<template>
  <div class="app-container center">
    <!--    <el-empty description="Admin 权限可见" />-->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item?.img.url" fit="cover" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="js" setup>
import zionMdapi from "zion-mdapi";
import { onMounted, ref } from "vue";

const imgs = ref([]);

onMounted(async () => {
  await fetchImgs();
});

const fetchImgs = async () => {
  const mdapiConfig = {
    url: "https://zion-app.functorz.com/zero/l7YRy8q7m9g/api/graphql-v2",
    actionflow_id: "5a58d947-3b59-47ea-9499-d11b9ba72a42",
  };
  const mdapi = zionMdapi.init(mdapiConfig);

  await mdapi
    .debugActionflow({
      actionflow_name: "demo",
      actionflow_dir: "/",
    })
    .then((res) => {
      console.log(res.data);
      imgs.value = res.data;
    });
};
</script>

<style lang="scss" scoped>
.center {
  height: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
