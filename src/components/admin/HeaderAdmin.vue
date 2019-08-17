<template>
  <div>
    <!-- <div class="box"></div> -->
    <!-- <div class="navbar">
      <div class="navbar-link navbar-link-brand mb-5">
        Tools.travel
      </div>
      <div class="navbar-link navbar-link-toggle" @click="toggle" >
        <font-awesome-icon icon="bars"/>
      </div>
      <nav class="navbar-items navbar-items-right">
        <font-awesome-icon :icon="['far', 'bell']" size="lg" class="mt-2 mr-5" />
        <b-img height="40" width="40" src="https://specials-images.forbesimg.com/imageserve/5bb22ae84bbe6f67d2e82e05/416x416.jpg" rounded="circle" alt="Circle image"></b-img>
        <ul class="menu">
          <li>Farhan</li>
          <ul class="sub-menu">
            <li>Edit profile</li>
          </ul>
        </ul>
      </nav>
    </div> -->
    <b-navbar toggleable="lg" sticky="top" class="navbar navbar-light bg-light">
    <div class="box"></div>
      <b-navbar-brand href="#">Tools.Travel</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <img src="http://demos.q-themes.net/shapes/v1.3/assets/member2.png"
          height="40" width="40"
          class="navbar-nav" rounded-circle alt="Profile">
          <b-nav-item-dropdown text="Farhan Hadi P." right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default ({
  methods: {
    toggle() {
      document.querySelector('.navbar-link-toggle').addEventListener('click', this.classToggle);
    },
    classToggle() {
      const navs = document.querySelectorAll('.navbar-items');
      navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
    },
  },
});
</script>

<style scoped>

.navbar {
  height: 80px;
}
.bg-light {
  background-color: #fff !important;
}
.box {
  position: relative;
  z-index: 3;
  right: 1rem;
  height: 80px;
  width: 80px;
  background-color: #7675c8;
}
@media screen and (min-width: 1200px) {
  .box {
    top: 0rem;
  }
}
@media screen and (min-width: 700px) {
  .box {
    bottom: .5rem;
  }
}
@media screen and (max-width: 699px) {
  .box {
    display: none;
  }
}
@media screen and (max-width: 400px) {
  .box {
    display: none;
    bottom: .5rem;
  }
  .navbar-brand {
    align-items: center;
  }
  .navbar {
    height: 100px;
  }
}
</style>
