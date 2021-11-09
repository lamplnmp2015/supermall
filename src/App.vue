<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" ></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" ></router-view>
    <main-tab-bar v-if="$route.meta.keepAlive"></main-tab-bar>
    <!-- <main-tab-bar></main-tab-bar> -->
  </div>
</template>
// <script src="http://192.168.104:8090/target/target-script-min.js#anonymous"></script>
<script>

import MainTabBar from 'components/content/MainTabBar'
export default {
  name: 'App',
  components: {
    'main-tab-bar':MainTabBar
  }
}
</script>

<style >
@import 'assets/css/base.css'

</style>
