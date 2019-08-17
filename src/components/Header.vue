<template>
  <div>
    <nav>
      <div class="navbar">
        <a @click="toggle" href="#" class="toggle" id="nav-hamburg">
          <font-awesome-icon icon="bars"/>
        </a>
        <a href="#" class="brand">Tools.Travel</a>

        <div class="left">
          <div class="navbar-item">
            <router-link :to="{ name: 'Landing' }">Home</router-link>
          </div>
          <a href="#" class="navbar-item">
            <router-link :to="{ name: 'Blog' }">Blog</router-link>
          </a>
          <a href="#" class="navbar-item">
            <router-link :to="{ name: 'DetailArtikel' }">Detail Artikel</router-link>
          </a>
          <a href="#" class="navbar-item">
            <router-link :to="{ name: 'Dashboard' }">Admin</router-link>
          </a>
          <a href="#" class="navbar-item">
            <router-link :to="{ name: 'Gallery' }">Gallery</router-link>
          </a>
        </div>

        <div class="right">
          <b-button class="btn-number">+62877-7111-1173</b-button>
          <b-button class="btn-login">Login</b-button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default ({
  methods: {
    toggle() {
      const hamburg = document.querySelector('#nav-hamburg');
      hamburg.addEventListener('click', () => {
        hamburg.parentElement.classList.toggle('active');
      });
    },
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');

.btn-number {
  width: 170px;
  height: 43.5px;
  color: #fff;
  background-image: linear-gradient(to right, #535353, #c6c6c6);
  font-family: Futura;
  font-size: 13.8px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  float: center;
  margin-right: 20px;
}
.btn-login {
  width: 153px;
  height: 43.5px;
  float: center;
  background-image: linear-gradient(to right, #535353, #c6c6c6),
  linear-gradient(to bottom, #606060, #606060);
  font-family: Futura;
  font-size: 13.5px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #606060;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
html {
  font-family: 'Oxygen', sans-serif;
}
body {
  margin: 0px;
}
.navbar {
  background: transparent;
}
.brand {
  margin-right: 9em;
}
.navbar div {
  display: none;
}
.navbar .toggle,
.navbar .brand {
  display: inline-block;
}
.navbar .navbar-item {
  display: block;
  text-align: center;
  padding: 1.5em;
  text-decoration: none;
  color: black;
  font-family: 'Titillium Web', sans-serif;
  font-weight: 600;
}
.navbar-item {
  text-align: center;
}
.navbar .navbar-item:hover,
.navbar .navbar-item:active {
  color: #223047;
  background: transparent;
}
.navbar .brand {
  width: 10em;
  text-align: center;
  padding: 1em;
  color: black;
}
.navbar a {
  text-decoration: none;
}
.navbar .toggle {
  padding: 1em;
  color: black;
}
@media (min-width: 48em) {
  .navbar {
    display: flex;
  }
  .navbar .left,
  .navbar .right {
    display: flex;
    flex: 1;
  }
  .navbar .navbar-item {
    width: auto;
  }
  .navbar .right {
    justify-content: flex-end;
  }
  .navbar .toggle {
    display: none;
  }
}
@media (min-width: 48em) {
  .navbar div {
      display: flex;
  }
}
@media (max-width: 48em) {
  .navbar.active .toggle {
    background: #fff;
    color: black;
  }
  .navbar .brand {
    text-align: center;
  }
  .navbar.active div {
    display: inline-block;
  }
}
</style>
