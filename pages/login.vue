<template>
  <section class="wrap-login">
    <h2>Login Page</h2>
    <p v-if="$auth.$state.redirect">
      You have to login before accessing to
      <strong>{{ $auth.$state.redirect }}</strong>
    </p>
    <el-button type="primary" @click="submitLogin">
      {{ $t('links.lgin') }}
    </el-button>
  </section>
</template>
<script>
export default {
  // auth: false,
  data() {
    return {};
  },
  mounted() {
    console.log("[login mounted] $route.query", this.$route.query);
  },
  methods: {
    submitLogin() {
      let random = Math.random();
      if (random > 0.5) {
        this.$auth
          .loginWith("local", {
            data: {
              username: "my-username",
              password: "my-password"
            }
          })
          .then(
            () => {
              this.$message.success("Logged In");
            },
            err => {
              console.log("submitLogin() err:", err);
              this.$message.error("login error");
            }
          );
      } else {
        this.$message.error("random < .5 error");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap-login {
  background-color: yellow;
}
</style>

