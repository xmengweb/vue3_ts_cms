<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6" :xs="24" :sm="12" :md="8" :lg="6">
          <countCardVue v-bind="item" />
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="7">
        <chartCardVue>
          <pie-echart :pie-data="showGoodsCategoryCount" />
        </chartCardVue>
      </el-col>
      <el-col :span="10">
        <chartCardVue>
          <map-echart :map-data="showGoodsAddressSale" />
        </chartCardVue>
      </el-col>
      <el-col :span="7">
        <chartCardVue>
          <rose-echart :rose-data="showGoodsCategoryCount" />
        </chartCardVue>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <chartCardVue>
          <line-echart v-bind="showGoodsCategorySale" />
        </chartCardVue>
      </el-col>
      <el-col :span="12">
        <chartCardVue>
          <bar-echart v-bind="showGoodsCategoryFavor" />
        </chartCardVue>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import countCardVue from './cnpms/count-card.vue'
import chartCardVue from './cnpms/chart-card.vue'
import useAnalysisStore from '@/store/analysis'
import { PieEchart, LineEchart, RoseEchart, BarEchart, MapEchart } from '@/components/page-echarts'

const analysisStore = useAnalysisStore()
analysisStore.fetchAnalysisDataAction()

// 2.从store获取数据
const { amountList, goodsCategoryCount, goodsCategorySale, goodsCategoryFavor, goodsAddressSale } =
  storeToRefs(analysisStore)

const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map((item) => ({
    name: item.name,
    value: item.goodsCount
  }))
})
const showGoodsCategorySale = computed(() => {
  const labels = goodsCategorySale.value.map((item) => item.name)
  const values = goodsCategorySale.value.map((item) => item.goodsCount)
  return { labels, values }
})
const showGoodsCategoryFavor = computed(() => {
  const labels = goodsCategoryFavor.value.map((item) => item.name)
  const values = goodsCategoryFavor.value.map((item) => item.goodsFavor)
  return { labels, values }
})
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map((item) => ({
    name: item.address,
    value: item.count
  }))
})
</script>

<style lang="less" scoped>
.el-row {
  margin-bottom: 10px;
}
</style>
