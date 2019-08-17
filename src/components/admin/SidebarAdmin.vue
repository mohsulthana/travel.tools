<template>
  <div>
    <div class="sidebar">
      <div class="box-item active">
        <router-link :to="{ name: 'Dashboard' }">
          <font-awesome-icon icon="wallet" size="lg"/>
        </router-link>
      </div>
      <div class="box-item">
        <router-link :to="{ name: 'DataJamaah' }">
          <font-awesome-icon icon="bars" size="lg"/>
        </router-link>
      </div>
      <div class="box-item">
        <router-link :to="{ name: 'MetodePembayaran' }">
          <font-awesome-icon icon="address-card" size="lg"/>
        </router-link>
      </div>
      <div class="box-item">
        <router-link :to="{ name: 'Transaksi' }">
          <font-awesome-icon icon="ambulance" size="lg"/>
        </router-link>
      </div>
      <div class="box-item">
        <router-link :to="{ name: 'RiwayatTransaksi' }">
          <font-awesome-icon icon="wifi" size="lg"/>
        </router-link>
      </div>
      <div class="box-item">
        <router-link :to="{ name: 'TransferRupiah' }">
          <icon slot="icon">
            <path class="fil0" d="M6.57 13.09c-0.71,0 -1.28,-0.57 -1.28,-1.28 0,-0.7 0.57,-1.27 1.28,-1.27l3.83 0c0.7,0 1.28,0.57 1.28,1.27 0,0.71 -0.58,1.28 -1.28,1.28l-3.83 0zm-1.86 -13.09l10.26 0 0.01 0 0.02 0 0 0 0.02 0 0.01 0 0 0 0.02 0 0 0 0.02 0 0.01 0.01 0.02 0 0.02 0 0 0 0.01 0 0 0 0.02 0 0.01 0.01 0.02 0 0.02 0 0.01 0 0.02 0.01 0 0 0.01 0 0.02 0 0 0 0.02 0.01 0 0 0.01 0 0 0 0.02 0.01 0 0 0.01 0 0.02 0 0 0 0.01 0.01 0.02 0 0 0 0.01 0.01 0 0 0.02 0 0 0 0.01 0.01 0 0 0.02 0.01 0.01 0 0 0 0.02 0.01 0.01 0 0 0 0.02 0.01 0 0 0.01 0.01 0.02 0 0 0 0.01 0.01 0.01 0.01 0 0 0.02 0 0.01 0.01 0.02 0.01 0 0 0.01 0.01 0 0 0.01 0.01 0 0 0.02 0 0 0 0.01 0.01 0 0 0.01 0.01 0 0 0.02 0.01 0 0 0.01 0.01 0.01 0.01 0 0 0.02 0 0.01 0.01 0 0 0.01 0.01 0 0 0.01 0.01 0 0 0.02 0.01 0.01 0.01 0 0 0.01 0.01 0 0 0.01 0.01 0 0 0.01 0.01 0 0 0.01 0.01 0 0 0.02 0.01 0 0 0.01 0.01 0.01 0.01 0 0 0.01 0.01 0 0 0.01 0.02 0 0 0.01 0.01 0 0 9.45 9.44 0.01 0.02 0.01 0.01 0 0 0.01 0.01 0.02 0.01 0.02 0.03 0.02 0.02 0.02 0.03 0.02 0.02 0.02 0.03 0.01 0.02 0.02 0.03 0.02 0.03 0.01 0.03 0 0 0.01 0.01 0.01 0.01 0.01 0.03 0.02 0.03 0.01 0.03 0.01 0.03 0.01 0.03 0.01 0.02 0.01 0.03 0 0 0.01 0.03 0 0 0.01 0.02 0 0.01 0.01 0.03 0 0.03 0.01 0.03 0.01 0.03 0 0.02 0 0.01 0 0 0 0.03 0.01 0.03 0 0.04 0 0.03 0 0.03 0 0 0 0.01 0 0.02 0 17.68c0,1.29 -0.53,2.47 -1.38,3.32l0 0.01c-0.86,0.85 -2.03,1.38 -3.33,1.38l-16.28 0c-1.29,0 -2.47,-0.53 -3.32,-1.38l-0.01 -0.01 0 0.01c-0.85,-0.86 -1.38,-2.04 -1.38,-3.33l0 -23.71c0,-1.3 0.53,-2.47 1.38,-3.33 0.86,-0.85 2.03,-1.38 3.33,-1.38zm18.44 12.01l-8.18 0c-0.71,0 -1.28,-0.57 -1.28,-1.27l0 -8.19 -8.98 0c-0.59,0 -1.13,0.25 -1.52,0.64 -0.39,0.39 -0.64,0.93 -0.64,1.52l0 23.71c0,0.59 0.25,1.13 0.64,1.52l0 0c0.39,0.39 0.93,0.63 1.52,0.63l16.28 0c0.6,0 1.14,-0.24 1.53,-0.63 0.39,-0.39 0.63,-0.93 0.63,-1.52l0 -16.41zm-6.91 -2.55l5.1 0 -5.1 -5.1 0 5.1zm-9.67 15.99c-0.71,0 -1.28,-0.57 -1.28,-1.28 0,-0.71 0.57,-1.28 1.28,-1.28l12.37 0c0.71,0 1.28,0.57 1.28,1.28 0,0.71 -0.57,1.28 -1.28,1.28l-12.37 0zm0 -6.18c-0.71,0 -1.28,-0.57 -1.28,-1.28 0,-0.7 0.57,-1.27 1.28,-1.27l12.37 0c0.71,0 1.28,0.57 1.28,1.27 0,0.71 -0.57,1.28 -1.28,1.28l-12.37 0z"/>
          </icon>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '../svg.vue';

export default {
  components: {
    icon,
  },
};
</script>


<style scoped>
/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 80px;
  background-color: #fff;
  position: absolute;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: .8rem .5rem;
  text-decoration: none;
}

.box-item {
  background-color: #f5f5f5;
  position: relative;
  text-align: center;
  margin: 1rem 1rem;
  border: none;
  border-radius: 5px;
}

/* Active/current link */
.sidebar .active {
  background-color: #5575AD;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #5575AD;
  color: white;
}

/* Page content.
The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: left;
    display: block;
    color: black;
    padding: .8rem .5rem;
    margin: 2rem;
    text-decoration: none;
  }
}
</style>
