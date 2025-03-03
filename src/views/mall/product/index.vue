<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import { type GetProductData } from "@/api/mall/product/types/product";
import { ElMessageBox, type FormInstance, type FormRules } from "element-plus";
import { CirclePlus, Delete, Download, Refresh, RefreshRight, Search } from "@element-plus/icons-vue";
import { usePagination } from "@/hooks/usePagination";
import { getProductDataApi } from "@/api/mall/product";

defineOptions({
  // 命名当前组件
  name: "Product",
});

const loading = ref<boolean>(false);
const { paginationData, handleCurrentChange, handleSizeChange } = usePagination();

//#region 增
const dialogVisible = ref<boolean>(false);
const formRef = ref<FormInstance | null>(null);
const formData = reactive({
  name: "",
  status: "",
});
const formRules: FormRules = reactive({
  name: [{ required: true, trigger: "blur", message: "请输入商品名" }],
});
const handleCreate = () => {
  formRef.value?.validate((valid: boolean, fields) => {
    if (valid) {
      if (currentUpdateId.value === undefined) {
        // createProductDataApi(formData)
        //   .then(() => {
        //     ElMessage.success("新增成功");
        //     getProductData();
        //   })
        //   .finally(() => {
        //     dialogVisible.value = false;
        //   });
      } else {
        // updateProductDataApi({
        //   id: currentUpdateId.value,
        //   name: formData.name,
        // })
        //   .then(() => {
        //     ElMessage.success("修改成功");
        //     getProductData();
        //   })
        //   .finally(() => {
        //     dialogVisible.value = false;
        //   });
      }
    } else {
      console.error("表单校验不通过", fields);
    }
  });
};
const resetForm = () => {
  currentUpdateId.value = undefined;
  formData.name = "";
};
//#endregion

//#region 删
const handleDelete = (row: GetProductData) => {
  ElMessageBox.confirm(`正在删除商品：${row.name}，确认删除？`, "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    // deleteProductDataApi(row.id).then(() => {
    //   ElMessage.success("删除成功");
    //   getProductData();
    // });
  });
};
//#endregion

//#region 改
const currentUpdateId = ref<undefined | string>(undefined);
const handleUpdate = (row: GetProductData) => {
  currentUpdateId.value = row.id;
  formData.name = row.name;
  dialogVisible.value = true;
};
//#endregion

//#region 查
const tableData = ref<GetProductData[]>([]);
const searchFormRef = ref<FormInstance | null>(null);
const searchData = reactive({
  name: "",
});

const getProductData = async () => {
  loading.value = true;
  getProductDataApi({
    currentPage: paginationData.currentPage,
    size: paginationData.pageSize,
    name: searchData.name || undefined,
  })
    .then(async (res) => {
      const apiTotalDate: [] = await getProductDataApi();
      paginationData.total = apiTotalDate.length;
      tableData.value = res;
    })
    .catch(() => {
      tableData.value = [];
    })
    .finally(() => {
      loading.value = false;
    });
};
const handleSearch = () => {
  paginationData.currentPage === 1 ? getProductData() : (paginationData.currentPage = 1);
};
const resetSearch = () => {
  searchFormRef.value?.resetFields();
  handleSearch();
};
//#endregion

/** 监听分页参数的变化 */
watch([() => paginationData.currentPage, () => paginationData.pageSize], getProductData, { immediate: true });
</script>

<template>
  <div class="app-container">
    <el-card v-loading="loading" shadow="never" class="search-wrapper">
      <el-form ref="searchFormRef" :inline="true" :model="searchData">
        <el-form-item prop="name" label="商品名">
          <el-input v-model="searchData.name" placeholder="请输入" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :icon="Search" @click="handleSearch">查询</el-button>
          <el-button :icon="Refresh" @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card v-loading="loading" shadow="never">
      <div class="toolbar-wrapper">
        <div>
          <el-button type="primary" :icon="CirclePlus" @click="dialogVisible = true">新增商品</el-button>
          <el-button type="danger" :icon="Delete">批量删除</el-button>
        </div>
        <div>
          <el-tooltip content="下载">
            <el-button type="primary" :icon="Download" circle />
          </el-tooltip>
          <el-tooltip content="刷新当前页">
            <el-button type="primary" :icon="RefreshRight" circle @click="getProductData" />
          </el-tooltip>
        </div>
      </div>
      <div class="table-wrapper">
        <el-table :data="tableData">
          <el-table-column type="selection" width="50" align="center" />
          <el-table-column prop="name" label="商品名" align="center" />
          <el-table-column prop="price" label="价格" align="center" />
          <el-table-column prop="inventory" label="库存" align="center" />
          <el-table-column prop="status" label="状态" align="center">
            <template #default="scope">
              <el-tag v-if="scope.row.status" type="success" effect="plain">启用</el-tag>
              <el-tag v-else type="danger" effect="plain">禁用</el-tag>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150" align="center">
            <template #default="scope">
              <el-button type="primary" text bg size="small" @click="handleUpdate(scope.row)">修改</el-button>
              <el-button type="danger" text bg size="small" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pager-wrapper">
        <el-pagination
          background
          :layout="paginationData.layout"
          :page-sizes="paginationData.pageSizes"
          :total="paginationData.total"
          :page-size="paginationData.pageSize"
          :currentPage="paginationData.currentPage"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
    <!-- 新增/修改 -->
    <el-dialog
      v-model="dialogVisible"
      :title="currentUpdateId === undefined ? '新增商品' : '修改商品'"
      @close="resetForm"
      width="30%"
    >
      <el-form ref="formRef" :model="formData" :rules="formRules" label-width="100px" label-position="left">
        <el-form-item prop="name" label="商品名">
          <el-input v-model="formData.name" placeholder="请输入" />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleCreate">确认</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.search-wrapper {
  margin-bottom: 20px;

  :deep(.el-card__body) {
    padding-bottom: 2px;
  }
}

.toolbar-wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.table-wrapper {
  margin-bottom: 20px;
}

.pager-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
