<template>
    <section class="wrap-users-index">
        <h3>{{ $t('users.title') }}</h3>
        <ul>
            <li>
                <nuxt-link :to="localePath({name: 'users-id', params: {id: 111}})">one</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="localePath({name: 'users-id', params: {id: 222}})">two</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="localePath({name: 'users-id', params: {id: 333}})">three</nuxt-link>
            </li>
        </ul>
        <nuxt-link :to="localePath('index')">{{ $t('links.home') }}</nuxt-link>
    </section>
</template>
<script>
export default {
  //   transition: "test"
  mounted() {
    this.$axios.$get("/api/users").then(
      resp => {
        console.log("[users index] get users:", resp);
      },
      err => {
        this.$message.error(err.message || "网络繁忙");
      }
    );
  }
};
</script>


