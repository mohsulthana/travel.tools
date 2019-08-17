<template>
  <div>
    <!-- Call-to-action -->
    <section id="call-action">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3 class="text-light text-left">Daftarkan emailmu untuk mendaftarkan info umrah
              terbaru dari Tools.Travel
            </h3>
          </b-col>
          <b-col md="5">
            <b-input-group>
              <b-form-input placeholder="Masukkan Email Anda Disini" class="email"></b-form-input>
              <b-input-group-append>
                <b-button class="text-light btn-action">SUBSCRIBE</b-button>
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- ./Call-to-action -->
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.btn-action {
  background-color: #7675c8;
}
.btn-action:hover {
  background-color: #4543c4;
}
#call-action {
  padding-top: 60px;
  padding-bottom: 60px;
  background-color: #b7b6f9;
}
</style>
