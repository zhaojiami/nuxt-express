<template>
  <section>
    <!-- <div class="wrap-back">
      <el-button  @click="handleBack">Back</el-button>
    </div> -->
    <p>
      Product ID:{{ $route.params.id }}
    </p>
  </section>
</template>
<script>
export default {
  // auth: false,
  // validate({ params }) {
  //   return /^\d+/.test(params.id);
  // },
  head() {
    return { title: this.$t("products.title") };
  },
  data() {
    return {};
  },
  mounted() {
    console.log("serial id mounted");
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    }
  }
};
</script>

