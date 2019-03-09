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
      this.restore();
      this.chart.setOption(opt);
    }
  },
  mounted() {
    this.init();
    this.chart.on("click", params => {
      if (noInfoList.includes(params.name)) return;
      this.showChildMap(params);
    });
    this.chart.on("dblclick", () => {
      if (this.status.step > 1) {
        this.init();
      }
    });
  },

  methods: {
    init() {
      if (this.chart) {
        this.restore();
      }
      this.status.step = 1;
      echarts.registerMap("china", CHINAJSON);
      if (!this.chart) {
        this.chart = echarts.init(this.$el);
      }
      this.chart.setOption(this.option);
    },
    restore() {
      this.chart.dispatchAction({
        type: "restore"
      });
    },
    async showChildMap(params) {
      const cityName = cityMap[params.name];

      if (this.status.step > 1 && !cityName) {
        console.log("到底了");
        return;
      }

      this.restore();

      this.status.step++;

      const obj = {
        2: `./province/${params.name}.json`,
        3: `./city/${cityName}.json`
      };

      const url = obj[this.status.step];
      const res = await import(`${url}`);
      const data = res.default;

      echarts.registerMap(params.name, data);

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
