<template>
    <section class="wrap-solution-index">
        <el-row class="list-solutions">
            <el-col :span="8" v-for="solution in solutions" :key="solution.id">
            <nuxt-link :to="localePath({name: 'solution-id', params: {id: solution.id}})">
                <span :class="['item-solution', solution.cls]">
                    <span class="title-solution">{{ solution.name }}</span>
                </span>
            </nuxt-link>
            </el-col>
        </el-row>
    </section>
</template>
<script>
export default {
// auth: false,
  //   transition: "test"
  head() {
    return { title: this.$t("solution.title") };
  },
    data() {
    return {
      solutions: [
        {
          id: "gymnasium",
          name: "Gymnasium",
          cls: "gymnasium"
        },
        {
          id: "manufacturing",
          name: "Manufacturing",
          cls: "manufacturing"
        },
        {
          id: "smart-home",
          name: "Smart Home",
          cls: "smart-home"
        },
        {
          id: "warehouse",
          name: "Warehouse",
          cls: "warehouse"
        }
      ]
    };
  },
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
.wrap-solution-index {
  .list-solutions {
    text-align: center;
    .item-solution {
      display: inline-block;
      width: 300px;
      height: 250px;
      padding: 210px 10px 0 10px;
      background-repeat: no-repeat;
      background-position: center top;
      background-size: 300px 200px;
      color: #333333;
      text-align: center;
      cursor: pointer;
      &:hover {
        /* transform: scale(1.1); */
        color: #8F1577;
      }
      &.gymnasium {
        background-image: url("../../assets/img/solutions/gymnasium/gymnasium.jpg");
      }
      &.manufacturing {
        background-image: url("../../assets/img/solutions/manufacturing/manufacturing.jpg");
      }
      &.smart-home {
        background-image: url("../../assets/img/solutions/smart-home/smart-home.jpg");
      }
      &.warehouse {
        background-image: url("../../assets/img/solutions/warehouse/warehouse.jpg");
      }
      .title-solution {
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
}
</style>