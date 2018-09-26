<template>
  <div class="wrap-layout-default">
    <header class="Header">
      <div class="container">
        <h1 class="Header__Title">Nuxt Starter</h1>
        <nav class="Header__Menu">
          <nuxt-link class="Header__Link" :to="localePath('index')" exact>
            {{ $t('links.home') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="localePath('about')" exact>
            {{ $t('links.about') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" v-if="$i18n.locale === 'zh'" :to="switchLocalePath('en')" active-class="none" exact>
            {{ $t('links.english') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" v-else :to="switchLocalePath('zh')" active-class="none" exact>
            {{ $t('links.chinese') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" v-if="!$auth.loggedIn" :to="localePath('login')">
            {{ $t('links.lgin') }}
          </nuxt-link>
          <span v-if="$auth.loggedIn">
            <span>{{ $auth.user.username }}</span>
            <span class="Header__Link" @click="handleLogout">
              {{ $t('links.lgout') }}
            </span>
          </span>
        </nav>
      </div>
    </header>
    <nuxt/>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('[layouts default] mounted');
  },
  methods: {
    handleLogout() {
      this.$auth.logout();
    }
  }
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  width: 75%;
  margin: 0 auto;
}
.container:after {
  content: "";
  display: table;
  clear: both;
}
.Header {
  color: #fff;
  min-width: 900px;
  height: 80px;
  line-height: 80px;
  background-color: #2e2f30;
}
.Header__Title {
  float: left;
  font-weight: 300;
  font-size: 30px;
}
.Header__Menu {
  float: right;
}
.Header__Link {
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  padding: 7px 12px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  margin-left: 10px;
}
.Header__Link:hover {
  color: #2e2f30;
  background-color: #fff;
}
.nuxt-link-active {
  color: cyan;
}
.Content {
  padding: 50px 0;
  text-align: center;
}
.Content__Title {
  font-weight: 300;
  padding-bottom: 30px;
}
</style>