<template>
  <div class="wrap-layout-default">
    <header class="Header">
      <div class="content-header">
        <h1 class="Header__Title">SidenLux</h1>
        <nav class="Header__Menu">
          <nuxt-link class="Header__Link" :to="localePath('index')" exact>
            {{ $t('links.home') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="localePath('products')" exact>
            {{ $t('links.products') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="localePath('solution')" exact>
            {{ $t('links.solution') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="localePath('about')" exact>
            {{ $t('links.about') }}
          </nuxt-link>
        </nav>
      </div>
    </header>
    <div class="wrap-content">
      <nuxt class="container-content"/>
      <footer class="wrap-simple-des">
        <div class="container-des">
          <el-row>
            <el-col :span="12">
              <!-- <div class="title-des">CONTACT INFO</div> -->
              <p class="txt-des">
                Tel: +86-13265637766<br>
                Email: info@sidenlux.com
              </p>
            </el-col>
            <el-col :span="12">
              <p class="txt-des">
                Address: Bao'an District, Shenzhen City, Guangdong Province, China<br>
                Working Hours: Mon-Fri 8am to 6pm
              </p>
            </el-col>
          </el-row>
        </div>
        <div class="wrap-copyright">
          <div class="container-copyright">
            &copy;2018 SIDENLUX | All Rights Reserved | Designed by 
            <a href="https://sidenlux.com" class="arch-cp">sidenlux.com</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("[layouts default] mounted");
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
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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
</style>
<style lang="scss" scoped>
.wrap-layout-default {
    position: static;
    width: 100%;
    min-width: 900px;
    z-index: 2;
    .Header {
      height: 70px;
      line-height: 70px;
      background-color: #f8f8f8;
      box-shadow: 0px 6px 18px 0px rgba(144,164,183,0.22);
    }
    .content-header {
      margin: 0 auto;
      padding: 0 50px;
      .Header__Title {
        float: left;
        color: #333333;
        font-size: 30px;
        user-select: none;
      }
      .Header__Menu {
        float: right;
        .Header__Link {
          margin-left: 10px;
          border: none;
          padding: 7px 12px;
          background-color: transparent;
          color: #333333;
          font-size: 16px;
          text-transform: uppercase;
          text-decoration: none;
          user-select: none;
          &:hover {
            color: #5bba4a;
          }
        }
      }
    }
    .content-header:after {
      content: "";
      display: table;
      clear: both;
    }

    .wrap-content {
      position: relative;
      display: block;
      min-height: calc(100% - 70px);
      .container-content {
        padding: 20px 50px;
        min-height: 450px;
        /* background-color: tomato; */
      }
      .wrap-simple-des {
        padding: 0 50px;
        /* background: #f8f8f8;
        color: #333333; */
        background-color: black;
        color: white;
        .container-des {
          padding: 30px 0;
          .title-des {
            margin: .85em auto 8px auto;
            font-weight: bold;
          }
        }
        .wrap-copyright {
          padding-bottom: 15px;
          .container-copyright {
            margin: 0 auto;
            border-top: 1px solid #a4a4a4;
            padding-top: 17px;
            font-size: 11px;
            text-align: center;
            .arch-cp {
              text-decoration: none;
              color: white;
              &:hover {
                cursor: pointer;
                color: #5bba4a;
              }
            }
          }
        }
      }
    }
}
</style>
