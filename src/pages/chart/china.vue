<style scoped>
.container {
  width: 100%;
  height: 600px;
}
</style>


<template>
  <div class="container">
    <Map
      :option="option"
      :width="'100%'"
      :height="'100%'"
      :isMap="true"
    >

    </Map>
  </div>
</template>

<script>
import Map from "../../components/Map/index.vue";

export default {
  data() {
    return {
      option: {
        title: {
          text: "中国地图",
          left: "center",
          textStyle: {
            color: "#FFFFFF",
            fontSize: 25
          }
        },
        backgroundColor: "#404a59",
        animationDuration: 1000,
        animationEasing: "cubicOut",
        animationDurationUpdate: 1000,
        geo: {
          map: "china",
          // roam: true,
          label: {
            emphasis: {
              textStyle: { color: "#eee" }
            }
          },
          itemStyle: {
            position: "center",
            normal: {
              areaColor: "#323c48",
              borderColor: "#111"
            },
            emphasis: {
              areaColor: "#2a333d",
              textStyle: {
                color: "#fff"
              }
            }
          }
        }
      }
    };
  },

  components: {
    Map
  }
};
</script>
