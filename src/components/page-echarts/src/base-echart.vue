<template>
  <div class="baseEchart">
    <div class="main" ref="divRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { onMounted, ref, watchEffect } from 'vue'
import ChinaJSON from '../data/china.json'

echarts.registerMap('china', ChinaJSON as any)

interface IProps {
  option: EChartsOption
}
const divRef = ref<HTMLElement>()
const props = defineProps<IProps>()

onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(divRef.value!, 'light', { renderer: 'canvas' })
  // 绘制图表

  // watchEffect监听option变化, 重新执行
  watchEffect(() => myChart.setOption(props.option))
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})
</script>

<style lang="less" scoped>
.baseEchart {
  .main {
    height: 300px;
  }
}
</style>
