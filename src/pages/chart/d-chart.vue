<style scoped>
.box {
  margin: 30px;
}
.panel {
  margin: 30px 100px;
}
.btn-group {
  margin-bottom: 35px;
}
</style>

<template>
  <div>
    <div class="box">
      <chart :option="option"></chart>
    </div>
    <div class="panel">
      <div class="btn-group">
        <Button @click="random">全部随机生成</Button>
      </div>

      <div>1号</div>
      <Slider
        v-model="option.series[0].data[0]"
        show-input
        @on-change="slide1"
      ></Slider>
      <div>2号</div>
      <Slider
        v-model="option.series[0].data[1]"
        show-input
        @on-change="slide2"
      ></Slider>
      <div>3号</div>
      <Slider
        v-model="option.series[0].data[2]"
        show-input
        @on-change="slide3"
      ></Slider>
      <div>4号</div>
      <Slider
        v-model="option.series[0].data[3]"
        show-input
        @on-change="slide4"
      ></Slider>
      <div>5号</div>
      <Slider
        v-model="option.series[0].data[4]"
        show-input
        @on-change="slide5"
      ></Slider>
    </div>
  </div>
</template>


<script>
import Chart from "../../components/Chart.vue";
import { clearTimeout } from "timers";
import Layout from "../../components/layout";

export default {
  data() {
    return {
      timer: null,
      option: {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        xAxis: [
          {
            type: "category",
            data: ["1号", "2号", "3号", "4号", "5号"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 33, 90, 77]
          }
        ]
      }
    };
  },
  components: {
    Chart,
    Main: Layout
  },
  methods: {
    random() {
      const data = []
      for (let i=0; i<5; i++) {
        data.push(Math.ceil(Math.random() * 100))
      }
      this.option.series[0].data = data
      this.option = { ...this.option }
    },
    slide1(val) {
      this.option.series[0].data[0] = val
      this.option = { ...this.option }
      return val
    },
    slide2(val) {
      this.option.series[0].data[1] = val
      this.option = { ...this.option }
      return val
    },
    slide3(val) {
      this.option.series[0].data[2] = val
      this.option = { ...this.option }
      return val
    },
    slide4(val) {
      this.option.series[0].data[3] = val
      this.option = { ...this.option }
      return val
    },
    slide5(val) {
      this.option.series[0].data[4] = val
      this.option = { ...this.option }
      return val
    }
  }
};
</script>
