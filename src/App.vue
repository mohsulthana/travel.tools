<template>
  <div id="app">
    <div :is="component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import adminLayout from '@/layouts/adminLayout.vue';
import homeLayout from '@/layouts/homeLayout.vue';

export default {
  components: {
    adminLayout,
    homeLayout,
  },
  computed: {
    ...mapState('commonModule', {
      component: state => state.layout,
    }),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');

body {
  margin: 0;
  background-color: #d4d4f559;
}
#app {
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
