<template>
  <section class="wrap-index">
    <!-- <section class="wrap-sec">
      <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    </section> -->
    <section class="wrap-sec">
      <header class="title-sec">Products</header>
      <el-row class="list-product-serial">
        <el-col :span="8" v-for="serial in productSerial" :key="serial.id">
          <nuxt-link :to="localePath({name: 'products-serial', params: {serial: serial.id}})">
            <span :class="['item-product-serial', serial.cls]">
              <span class="title-serial">{{ serial.name }}</span>
            </span>
          </nuxt-link>
        </el-col>
      </el-row>
    </section>
    <section class="wrap-sec">
      <header class="title-sec">Solution</header>
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
  </section>
</template>

<script>
// import Logo from "~/components/Logo.vue";

export default {
  // auth: false,
  // components: {
  //   Logo
  // },
  data() {
    return {
      productSerial: [
        {
          id: "industrial",
          name: "Industrial Lighting",
          cls: "indus"
        },
        {
          id: "commercial",
          name: "Commercial Lighting",
          cls: "com"
        },
        {
          id: "smart",
          name: "Smart Lighting",
          cls: "smart"
        }
      ],
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
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

<style lang="scss" scoped>
.wrap-index {
  text-align: center;
}
.wrap-sec {
  margin-bottom: 50px;
  .title-sec {
    color: #8F1577;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
}

.list-product-serial {
  text-align: center;
  .item-product-serial {
    display: inline-block;
    width: 300px;
    height: 250px;
    padding: 210px 10px 0 10px;
    background-repeat: no-repeat;
    background-position: center top;
    background-size: auto 200px;
    color: #333333;
    text-align: center;
    cursor: pointer;
    &:hover {
      /* transform: scale(1.1); */
      color: #8f1577;
    }
    &.indus {
      background-image: url("../assets/img/products/indus/ufo-led-highbay/100W-1.jpg");
    }
    &.com {
      background-image: url("../assets/img/products/com/led-par-lamp/7-10W.jpg");
    }
    &.smart {
      background-image: url("../assets/img/products/smart/smart-led-bulb/7W.jpg");
    }
    .title-serial {
      text-decoration: none;
      font-size: 20px;
    }
  }
}
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
      color: #8f1577;
    }
    &.gymnasium {
      background-image: url("../assets/img/solutions/gymnasium/gymnasium.jpg");
    }
    &.manufacturing {
      background-image: url("../assets/img/solutions/manufacturing/manufacturing.jpg");
    }
    &.smart-home {
      background-image: url("../assets/img/solutions/smart-home/smart-home.jpg");
    }
    &.warehouse {
      background-image: url("../assets/img/solutions/warehouse/warehouse.jpg");
    }
    .title-solution {
      text-decoration: none;
      font-size: 20px;
    }
  }
}
</style>