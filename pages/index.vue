<template>
  <section class="wrap-index">
    <logo/>
    <h1 class="title">
      {{ $t('home.title') }}
    </h1>
    <h2 class="subtitle">
      {{ $t('home.introduction') }}
      <nuxt-link :to="localePath('users')">{{ $t('links.users') }}</nuxt-link>
    </h2>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  auth: false,
  components: {
    Logo
  }
};
</script>

<style>
.wrap-index {
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>