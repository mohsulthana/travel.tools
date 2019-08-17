<template>
  <div id="app">
    <b-container>
      <b-card>
        <font-awesome-icon :icon="['far', 'check-circle']" size="lg" class="mt-2" />
        <h3 class="font-weight-bold">Transfer Rupiah</h3>
        <b-card-text>
          Terima kasih, Anda memilih
          pembayaran Transfer Rupiah,
          untuk cara pembayaran dan total yang
          harus dibayar akan kami infokan
          secepatnya melalui tim Travel Kami.
        </b-card-text>
        <b-button class="button-action card-link">Kembali</b-button>
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
.card {
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1.5rem;
  max-width: 550px;
}
.card p {
  font-size: 1rem
}
</style>
