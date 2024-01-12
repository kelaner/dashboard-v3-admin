<script lang="js" setup>
import { onMounted, ref } from "vue";
import fetchApi from "@/api/mdapi/fetchApi";

const imgs = ref([]);

onMounted(async () => {
  await fetchImgs();
});

const fetchImgs = async () => {
  const quaryBody = {
    model: "resource",
    fields: "img{url}",
  };

  imgs.value = await fetchApi(quaryBody);

  console.log(imgs.value);
};
</script>

<template>
  <div class="app-container center">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <el-image style="width: 100%; height: 100%" :src="item?.img.url" fit="cover" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

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
