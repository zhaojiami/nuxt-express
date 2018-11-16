<template>
    <section class="wrap-serial-index">
        <!-- <div class="wrap-back">
            <el-button  @click="handleBack">Back</el-button>
        </div> -->
        <el-row class="list-product">
          <el-col :span="8" v-for="product in serialProducts" :key="product.id">
            <nuxt-link :to="localePath({name: 'products-serial-id', params: {serial: $route.params.serial, id: product.id}})">
                <span :class="['item-product', product.cls]">
                    <span class="title-serial">{{ product.name }}</span>
                </span>
            </nuxt-link>
          </el-col>
        </el-row>
    </section>
</template>
<script>
export default {
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
      products: [
        {
          id: "ufo-led-highbay",
          name: " ufo led highbay",
          serial: "industrial",
          cls: "indus-ufo-led-highbay"
        },
        {
          id: "square-led-highbay",
          name: "square led highbay",
          serial: "industrial",
          cls: "indus-square-led-highbay"
        },
        {
          id: "linear-led-highbay",
          name: "linear led highbay",
          serial: "industrial",
          cls: "indus-linear-led-highbay"
        },
        {
          id: "nova-flood-light",
          name: "nova flood light",
          serial: "industrial",
          cls: "indus-nova-flood-light"
        },
        {
          id: "led-bulb",
          name: "LED bulb",
          serial: "commercial",
          cls: "com-led-bulb"
        },
        // {
        //   id: "led-spotlight",
        //   name: "led spotlight",
        //   serial: "commercial",
        //   cls: "com-"
        // },
        {
          id: "led-par-lamp",
          name: "led par lamp",
          serial: "commercial",
          serialName: "Commercial Lighting",
          cls: "com-led-par-lamp"
        },
        {
          id: "saber-linear-light",
          name: "saber linear light",
          serial: "commercial",
          serialName: "Commercial Lighting",
          cls: "com-saber-linear-light"
        },
        {
          id: "led-bulb",
          name: "smart led bulb",
          serial: "smart",
          serialName: "Smart Lighting",
          cls: "smart-led-bulb"
        },
        // {
        //   id: "smart-led-spotlight",
        //   name: "smart led spotlight",
        //   serial: "smart",
        //   serialName: "Smart Lighting",
        //   cls: "indus"
        // }
      ]
    };
  },
  head() {
    return { title: this.$t("products.title") };
  },
  computed: {
    serialProducts() {
      let result = this.products.filter((value, index, arr) => {
        return value.serial === this.$route.params.serial;
      });
      return result;
    }
  },
  mounted() {
    // console.log("serial index mounted");
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap-serial-index {
  .list-product {
    text-align: center;
    .item-product {
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
        color: #8F1577;
      }
      &.indus-ufo-led-highbay {
        background-image: url("../../../assets/img/products/indus/ufo-led-highbay/100W-1.jpg");
      }
      &.indus-square-led-highbay {
        background-image: url("../../../assets/img/products/indus/square-led-highbay/100W-1.jpg");
      }
      &.indus-linear-led-highbay {
        background-image: url("../../../assets/img/products/indus/linear-led-highbay/100W-1.png");
      }
      &.indus-nova-flood-light {
        background-image: url("../../../assets/img/products/indus/nova-flood-light/1.jpg");
      }
      &.com-led-bulb {
        background-image: url("../../../assets/img/products/com/led-bulb/7W.jpg");
      }
      &.com-led-par-lamp {
        background-image: url("../../../assets/img/products/com/led-par-lamp/7-10W.jpg");
      }
      &.com-saber-linear-light {
        background-image: url("../../../assets/img/products/com/saber-linear-light/1.jpg");
      }
      &.smart-led-bulb {
        background-image: url("../../../assets/img/products/smart/smart-led-bulb/7W.jpg");
      }
      .title-serial {
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
}
</style>