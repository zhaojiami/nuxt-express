<template>
    <section class="wrap-solution-index">
        <ul>
            <li>
                <nuxt-link :to="localePath({name: 'solution-id', params: {id: 'solution-111'}})">solution-one</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="localePath({name: 'solution-id', params: {id: 'solution-222'}})">solution-two</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="localePath({name: 'solution-id', params: {id: 'solution-333'}})">solution-three</nuxt-link>
            </li>
        </ul>
    </section>
</template>
<script>
export default {
// auth: false,
  //   transition: "test"
  head() {
    return { title: this.$t("solution.title") };
  },
  mounted() {
    // this.$axios.$get("/api/users").then(
    //   resp => {
    //     console.log("[users index] get users:", resp);
    //   },
    //   err => {
    //     this.$message.error(err.message || "网络繁忙");
    //   }
    // );
  }
};
</script>


