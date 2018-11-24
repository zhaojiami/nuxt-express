<template>
  <div class="wrap-layout-default">
    <header class="Header">
      <div class="content-header">
        <nuxt-link :to="localePath('index')" exact>
          <img src="../assets/logo.png" alt="siden" class="Header__Title">
        </nuxt-link>
        <nav class="Header__Menu">
          <nuxt-link class="Header__Link" :to="localePath('index')" exact>
            {{ $t('links.home') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="localePath('products')">
            {{ $t('links.products') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="localePath('solution')">
            {{ $t('links.solution') }}
          </nuxt-link>
          <nuxt-link class="Header__Link" :to="localePath('about')">
            {{ $t('links.about') }}
          </nuxt-link>
        </nav>
      </div>
    </header>
    <div class="wrap-content">
      <nuxt class="container-content" />
      <footer class="wrap-simple-des">
        <div class="container-des">
          <el-row>
            <el-col :span="24">
              <p class="txt-des">
                Shenzhen Siden Electronics Co. Ltd</br>
                Tel: 0755-33174466<br>
                Mail: info@sidenlux.com<br>
                Website: <a href="https://www.sidenlux.com" class="arch-cp">www.sidenlux.com</a><br>
                Address: Building A1 , Hedian Industrial Park, Shijing Road, Guanlan Town, Longhua District, Shenzhen, China
              </p>
            </el-col>
          </el-row>
        </div>
        <div class="wrap-copyright">
          <div class="container-copyright">
            &copy;2018 SIDEN | All Rights Reserved | Designed by&nbsp;<a href="https://www.sidenlux.com" class="arch-cp">www.sidenlux.com</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log("[layouts default] mounted");
  },
  methods: {
    handleLogout() {
      // this.$auth.logout();
    }
  }
};
</script>
<style lang="scss" scoped>
.wrap-layout-default {
  position: static;
  width: 100%;
  min-width: 900px;
  z-index: 2;
  .Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 685px;
    height: 70px;
    line-height: 70px;
    background-color: #f8f8f8;
    box-shadow: 0px 6px 18px 0px rgba(144, 164, 183, 0.22);
    z-index: 100;
  }
  .content-header {
    margin: 0 auto;
    padding: 0 50px;
    .Header__Title {
      float: left;
      user-select: none;
      height: 40px;
      margin-top: 15px;
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
          color: #8f1577;
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
    padding-top: 70px;
    .container-content {
      padding: 20px 50px;
      background-color: white;
      min-height: calc(100vh - 70px);
    }
    .wrap-simple-des {
      padding: 0 50px;
      background-color: black;
      color: white;
      .container-des {
        padding: 30px 0;
        .title-des {
          margin: 0.85em auto 8px auto;
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
              color: #8f1577;
            }
          }
        }
      }
    }
  }
}
</style>
