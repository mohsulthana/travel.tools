<template>
  <div id="app">
    <b-container>
      <b-card>
        <font-awesome-icon :icon="['far', 'check-circle']" size="lg" class="mt-2" />
        <h3 class="font-weight-bold">Metode Pembayaran</h3>
        <b-card-text>
          Silahkan pilih metode pembayaran
          untuk melanjutkan pembayaran uang
          muka.
        </b-card-text>
        <b-card-text>
          <b-row>
            <b-col class="sub-card">
              <p>Transfer Rupiah</p>
            </b-col>
            <b-col class="sub-card">
              <p>Transfer Dollar</p>
            </b-col>
            <b-col class="sub-card">
              <p>Bayar di Kantor</p>
            </b-col>
          </b-row>
        </b-card-text>
        <b-button class="button-action card-link">Lanjut</b-button>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {

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
.sub-card {
  border: 2px solid #5755da;
  border-radius: 10px;
  padding: 1.2rem;
  margin: .5rem;
}
.sub-card p {
  font-size: .8rem;
  padding-left: .5em;
}
.card p {
  font-size: 1rem
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
</style>
