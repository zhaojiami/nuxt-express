(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"wrap-users-index"},[s("h3",[t._v(t._s(t.$t("users.title")))]),t._v(" "),s("ul",[s("li",[s("nuxt-link",{attrs:{to:t.localePath({name:"users-id",params:{id:111}})}},[t._v("one")])],1),t._v(" "),s("li",[s("nuxt-link",{attrs:{to:t.localePath({name:"users-id",params:{id:222}})}},[t._v("two")])],1),t._v(" "),s("li",[s("nuxt-link",{attrs:{to:t.localePath({name:"users-id",params:{id:333}})}},[t._v("three")])],1)]),t._v(" "),s("nuxt-link",{attrs:{to:t.localePath("index")}},[t._v(t._s(t.$t("links.home")))])],1)};n._withStripped=!0;var i={mounted:function(){var t=this;this.$axios.$get("/api/users").then(function(t){console.log("[users index] get users:",t)},function(e){t.$message.error(e.message||"网络繁忙")})}},a=s(17),l=Object(a.a)(i,n,[],!1,null,null,null);l.options.__file="index.vue";e.default=l.exports}}]);