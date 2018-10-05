<template>
  <section>
    Solution ID:{{ $route.params.id }}
  </section>
</template>
<script>
export default {
  // auth: false,
  // validate({ params }) {
  //   return /^\d+/.test(params.id);
  // },
  head() {
    return { title: this.$t("solution.title") };
  },
  data() {
    return {};
  },
  mounted() {
    console.log("[_id.vue] $route:", this.$route);
  }
};
</script>

