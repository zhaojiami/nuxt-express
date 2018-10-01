<template>
  <section>
    ID:{{ $route.params.id }}
    <div>
      <nuxt-link :to="localePath('users')">{{ $t('links.users') }}</nuxt-link>
    </div>
  </section>
</template>
<script>
export default {
  auth: false,
  validate({ params }) {
    return /^\d+/.test(params.id);
  },
  data() {
    return {};
  },
  mounted() {
    console.log("[_id.vue] $route:", this.$route);
  }
};
</script>

