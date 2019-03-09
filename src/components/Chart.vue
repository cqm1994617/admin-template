<style scoped>
</style>

<template>
  <div :style="{width, height}"></div>
</template>

<script>
// import echarts from 'echarts'
const echarts = window.echarts;

export default {
  data() {
    return {
      chart: null
    };
  },
  props: {
    isMap: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default: {}
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  watch: {
    option(opt) {
      this.chart.setOption(opt);
    }
  },
  mounted() {
    this.chart = echarts.init(this.$el)
    this.chart.setOption(this.option)
  }
};
</script>
