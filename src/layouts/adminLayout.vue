<template>
  <div>
    <Header />
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/admin/HeaderAdmin.vue';
import Sidebar from '@/components/admin/SidebarAdmin.vue';

export default {
  name: 'adminLayout',
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #d4d4f559;
}
</style>
