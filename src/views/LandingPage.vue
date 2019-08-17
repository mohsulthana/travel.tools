<template>
  <div>
    <!-- Jumbotron -->
    <b-jumbotron>
      <b-container>
        <b-row align-h="start">
          <b-col cols="6">
            <h3 class="display-3">Umroh & Mengkaji Sejarah Ustmani bersama Tools.Travel</h3>
            <h3 class="lead">Tools.Travel lorem ipsum de amat</h3>
          </b-col>
        </b-row>
        <b-row>
          <!-- Card -->
          <b-card class="w-60 umroh-card">
            <b-row>
              <b-col>
                <b-row>
                  <b-col>
                    <font-awesome-icon icon="calendar-week" size="lg"/>
                  </b-col>
                  <b-col>
                    <b-card-text>
                      <p class="text-muted">Waktu Keberangkatan</p>
                      <p class="font-weight-bold">Juni 2019</p>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-row>
                  <b-col>
                    <font-awesome-icon icon="calendar-week" size="lg"/>
                  </b-col>
                  <b-col>
                    <b-card-text>
                      <p class="text-muted">Waktu Keberangkatan</p>
                      <p class="font-weight-bold">Juni 2019</p>
                    </b-card-text>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-card>
          <!-- ./Card -->
        </b-row>
        <b-row>
          <b-button block class="search-btn mt-5">SEARCH</b-button>
        </b-row>
      </b-container>
    </b-jumbotron>
    <!-- ./ Jumbotron -->
    <banner />
    <section>
      <paket-umroh />
    </section>
    <!-- Video -->
    <section id="video">
      <div>
        <b-container>
          <b-row align-self="center">
            <b-col md="4">
              <h2 class="text-left">Umroh & Tour Sejarah Daulah Utsmaniyah</h2>
              <p class="text-left">Uhud Tour menyajikan pelayanan Umroh berkualitas
                dibimbing langsung oleh Ustadz Khalid Basalamah
                dengan mengupas sejarah Daulah Utsmaniyah.
              </p>
            </b-col>
            <b-col>
              <img height="200" width="400" src="http://imaginespainforyou.com/wp-content/uploads/2015/01/andalusia-granada.jpg" alt="" class="rounded mx-auto d-block">
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
    <!-- ./Video -->
    <section>
      <Action />
    </section>
  </div>
</template>

<script>
import Action from '@/components/CallToAction.vue';
import Banner from '@/components/Banner.vue';
import PaketUmroh from '@/components/PaketUmroh.vue';

export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    };
  },
  components: {
    Action,
    Banner,
    PaketUmroh,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.umroh-card {
  border-radius: 3.9px;
  box-shadow: -5.3px 5.3px 10.5px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
}
.search-btn {
  width: 133px;
  height: 45px;
  background-color: #7675c8;
  font-family: Montserrat;
}
.jumbotron {
  background: #fff;
  margin: 0;
}
.lead {
  width: 507px;
  height: 41.5px;
  font-family: Montserrat;
  font-size: 19.5px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}
.display-3 {
  font-family: Montserrat;
  font-size: 46.5px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
  font-family: Montserrat;
  font-size: 46.5px;
}
.banner {
  padding: 5rem;
  background: #f1f1f1;
}
section {
  margin-top: 5rem;
}
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 30px;
}
#video {
  margin-top: 280px;
  margin-bottom: 344.5px;
}
.email {
  width: 521px;
  height: 60.5px;
  border-radius: 5px;
  background-color: #ffffff;
}
.btn-selengkapnya {
  width: 206px;
  height: 48px;
  background-color: #7675c8;
}
.vr {
  height: 3em;
  margin: auto auto;
  margin-right: 2em;
  border-left: 1px solid #F2F2F2;
  border-right: 1px solid #FFF;
}
.paket {
  box-shadow: -7.1px 7.1px 25px 0 rgba(0, 0, 0, 0.05);
}
.rounded-card {
  border-radius: 10px;
}
.btn-action {
  width: 156px;
  height: 60.5px;
  font-size: 14px;
  border-radius: 1.5px;
  background-color: #7675c8;
}
</style>
