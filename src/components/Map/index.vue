<style scoped>
</style>

<template>
  <div :style="{width, height}"></div>
</template>

<script>
// import echarts from 'echarts'
import CHINAJSON from "./china.json";
import cityMap from "./city/china-main-city-map.js";
import axios from "axios";
const echarts = window.echarts;

const noInfoList = ["南海诸岛"];

export default {
  data() {
    return {
      chart: null,
      status: {
        step: 1,
        select: "china"
      }
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
    this.init();
    this.chart.on("click", params => {
      console.log(params.name)
      if (noInfoList.includes(params.name)) return

      if (this.status.step === 1) {
        this.showProvince(params);
      } else if (this.status.step === 2) {
        this.showCity(params);
      }
    });

    this.chart.on("dblclick", () => {
      if (this.status.step > 1) {
        this.init();
      }
    });
  },

  methods: {
    init() {
      this.status.step = 1;
      echarts.registerMap("china", CHINAJSON);
      this.chart = echarts.init(this.$el);
      this.chart.setOption(this.option);
    },
    async showProvince(params) {
      const res = await import(`./province/${params.name}`);
      const data = res.default;

      echarts.registerMap(params.name, data);

      this.status.step = 2;
      this.chart = echarts.init(this.$el);
      this.chart.setOption({
        title: this.option.title,
        geo: {
          map: params.name,
          top: 'middle',
          left: 'center'
        }
      });
      console.log(this.chart)
    },
    async showCity(params) {
      const cityName = cityMap[params.name];
      const res = await import(`./city/${cityName}.json`);
      const data = res.default;

      echarts.registerMap(params.name, data);

      this.status.step = 3;
      this.chart = echarts.init(this.$el);
      this.chart.setOption({
        title: this.option.title,
        geo: {
          map: params.name
        }
      });
    }
  }
};
</script>
