<template>
  <div id="app">
    <b-container>
      <b-card>
        <font-awesome-icon :icon="['far', 'check-circle']" size="lg" class="mt-2" />
        <h3 class="font-weight-bold">Transfer Rupiah</h3>
        <b-card-text>
          Silahkan masukkan nominal Rupiah yang ingin anda transfer
        </b-card-text>
          <div class="card-link">
            <b-form-input class="input" placeholder="Nominal Rp"></b-form-input>
            <b-button class="button-action">Bayar</b-button>
          </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      backgroundcolor: 'rgb(190, 190, 190)',
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Proza+Libre|Fira+Mono');

.container {
  display: flex;
  margin: 2rem auto;
  justify-content: center;
}
.card {
  max-width: 550px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1.5rem;
}
.card p {
  font-size: 1rem
}
.sub-card p {
  font-size: .8rem;
  padding-left: .5em;
}
.button-action:hover {
  background-color: #5755da;
}
.button-action {
  width: 100%;
  height: inherit;
  margin-top: 30px;
  background-color: #7675c8;
  bottom: 0px;
  font-family: 'Proza Libre', sans-serif;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.input {
  padding: 1rem 1rem;
  font-size: 1.5rem;
  color: #000;
  border: 0;
  border-radius: 3px;
  background: #fff;
  border: 2px solid #7675c8;
}
h1 {
  font-family: 'Proza Libre', sans-serif;
  color: #fff;
  font-weight: 300;
}
.card p {
  font-size: 1rem
}
</style>
