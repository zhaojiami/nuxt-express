<template>
  <nuxt-child class="wrap-products-serial" />
</template>
<script>
export default {
  data() {
    return {
    };
  },
  head() {
    return { title: this.$t("products.title") };
  },
  mounted() {
    // console.log('_serial mounted');
  }
};
</script>
<style lang="scss" scoped>
</style>