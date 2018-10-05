<template>
    <section class="wrap-products-index">
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
      ]
    };
  },
  // auth: false,
  //   transition: "test"
  head() {
    return { title: this.$t("products.title") };
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrap-products-index {
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
        color: #5bba4a;
      }
      &.indus {
        background-image: url("../../static/products/indus/ufo-led-highbay/100W-1.jpg");
      }
      &.com {
        background-image: url("../../static/products/com/led-par-lamp/7-10W.jpg");
      }
      &.smart {
        background-image: url("../../static/products/smart/smart-led-bulb/7W.jpg");
      }
      .title-serial {
        text-decoration: none;
        font-size: 20px;
      }
    }
  }
}
</style>