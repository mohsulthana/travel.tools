<template>
  <div>
    <section>
        <LightTimeline :items='items'></LightTimeline>
      <b-container>
        <!-- Jumbotron image -->
        <b-card
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          title="Umroh & Wisata Sejarah"
          class="jumbotron-image">
        </b-card>
      </b-container>
    </section>

      <!-- Schedule -->
    <b-container>
      <b-row>
        <b-col lg="6" xs="12">
          <h2 class="text-left">Umroh & Wisata Sejarah</h2>
          <p class="text-left">Nikmati kenyamanan Ibadah Umroh bersama
            Uhud Tour dengan menyelami kegemilangan sejarah Rasulullah
            dan Khulafaur Rasyidin disampaikan dengan sangat menarik
            oleh Ustadz Khalid Basalamah ditambah dengan mengunjungi pusat
            pemerintahan Islam di daratan Romawi Timur di masa pemerintahan
            Daulah Ustmaniyyah.
          </p>
          <b-button class="action-button">Daftar sekarang</b-button>
        </b-col>
        <b-col lg="6" xs="12">
          <b-row>
            <b-col lg="6" xs="12">
              <h6 class="text-left">WAKTU KEBERANGKATAN</h6>
                <ul id="li-image">
                  <li>Maret 2018</li>
                  <li>Juni 2018</li>
                </ul>
            </b-col>
            <b-col lg="6" xs="12">
              <h6 class="text-left">LAMA WAKTU UMROH</h6>
                <ul id="li-image">
                  <li>9 Hari</li>
                  <li>5 Hari</li>
                </ul>
            </b-col>
          </b-row>
          <hr>
          <b-row>
            <b-col lg="12" xs="12">
              <h6 class="text-left">PAKET KAMAR</h6>
              <b-row>
              <b-col lg="5" xs="12">
                <div id="li-image"></div>
                <p class="text-left font-weight-bold">Quad</p>
                <p class="text-left font-weight-bold">Triple</p>
                <p class="text-left font-weight-bold">Double</p>
              </b-col>
              <b-col lg="5" xs="12">
                <p class="text-left">(1 Kamar 4 Tempat Tidur)</p>
                <p class="text-left">(1 Kamar 3 Tempat Tidur)</p>
                <p class="text-left">(1 Kamar 2 Tempat Tidur)</p>
              </b-col>
              <b-col lg="2" xs="12">
                <p class="text-left font-weight-bold">$3500</p>
                <p class="text-left font-weight-bold">$3700</p>
                <p class="text-left font-weight-bold">$3900</p>
              </b-col>
              <small
                class="text-info"
                >*Harga belum termasuk biaya perlengkapan sebesar Rp2.500.000</small>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <!-- ./ Schedule -->

    <!-- Fasilitas Tab -->
    <section>
      <b-container>
        <b-tabs content-class="mt-3" fill>
          <!-- Fasilitas -->
          <b-tab title="Fasilitas">
          </b-tab>

          <!-- Persyaratan -->
          <b-tab title="Persyaratan" class="text-left">
            <div class="mt-5 persyaratan">
              <h3>Persyaratan Tools.Travel</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Rem aliquam porro fuga quo quis quae,
                illum culpa quam expedita itaque quibusdam soluta
                vero blanditiis debitis sapiente ea,
                consequuntur eius placeat?</p>
                <br>
              <p class="font-weight-bold">Persyaratan Berkas</p>
              <ul>
                <li>Paspor Asli berlaku minimal 8 bulan dan nama di paspor,
                  harus minimal 5 kata. <br>
                  Contoh: Abdullah Arif Sungkar
                </li>
                <li>Menyertakan nama ayah & nama ibu
                  (Persyaratan Visa Turki)
                </li>
              </ul>
            </div>
          </b-tab>

          <!-- Hotel -->
          <b-tab title="Hotel" class="p-3">
            <b-row>
              <b-col lg="6">
                <b-img src="https://picsum.photos/300/150/?image=41" class="berita-lainnya img-fluid" fluid alt="Fluid image"></b-img>
              </b-col>
              <b-col lg="6">
                <b-tabs content-class="mt-3" fill>
                  <!-- Fasilitas -->
                  <b-tab title="Makkah">
                    <div class="text-left p-3">
                      <h4>Elaf Ajyad Hotel</h4>
                      <div>Bintang</div>
                      <font-awesome-icon icon="map-marker-alt" :style="{ color: 'blue' }" />
                      <span> Ibrahim Al Khalil Street,
                        Al Hajjah, Makkah, 24231, 21955, Saudi Arabia
                      </span>
                      <hr>
                      <h6 class="text-left font-weight-bold">PAKET KAMAR</h6>
                      <b-row>
                        <b-col lg="5" xs="6">
                          <div id="li-image"></div>
                          <p class="text-left font-weight-bold">Quad</p>
                          <p class="text-left font-weight-bold">Triple</p>
                          <p class="text-left font-weight-bold">Double</p>
                        </b-col>
                        <b-col lg="5" xs="6">
                          <p class="text-left">30.0 sqm</p>
                          <p class="text-left">25.0 sqm</p>
                          <p class="text-left">35.0 sqm</p>
                        </b-col>
                      </b-row>
                      <hr>
                      <h6 class="text-left font-weight-bold">Fasilitas Khusus</h6>
                      <ul id="li-image">
                        <li>50 m dari Masjidil Haram</li>
                        <li>Sarapan Menu Indonesia</li>
                      </ul>
                    </div>
                  </b-tab>
                  <b-tab title="Madinah">
                  </b-tab>
                  <b-tab title="Istanbul">
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </b-tab>
          <!-- ./ Hotel -->

          <!-- Itenerary -->
          <b-tab title="Itenerary">
            <light-timeline :items='items'></light-timeline>
            Hello
          </b-tab>
          <!-- ./ Itenerary -->
          <b-tab title="Gallery"><p>I'm the tab with the very, very long title</p></b-tab>
        </b-tabs>
      </b-container>
    </section>
    <!-- ./ Fasilitas Tab -->

    <!-- Paket Umroh Lain -->
    <section>
      <div id="paket-lain">
        <b-container class="py-5">
          <div class="text-left pb-5">
            <h3>Paket Umroh yang Lainnya</h3>
            <h6 class="text-info">3 Paket Tersedia</h6>
          </div>
          <b-card no-body class="overflow-hidden">
            <b-row>
              <b-col md="8">
                <b-card-body>
                  <b-card-text>
                    <div class="text-left">
                      <h2>Umroh + Aqsha Palestina</h2>
                      <li class="text-info" id="date_paket">April & Juli 2018</li>
                      <b-tooltip
                      target="tooltip-button-variant"
                      variant="danger">Danger variant tooltip</b-tooltip>
                        <div class="bottom-content-paket-umroh">
                      <b-row>
                          <b-col>
                            <h2>$4200</h2>
                            <p>+Rp2.500.000 (Biaya Perlengkapan)</p>
                          </b-col>
                          <b-col>
                            <b-button
                            class="action-button"
                            style="float: right;">PESAN SEKARANG</b-button>
                          </b-col>
                      </b-row>
                        </div>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-col>
              <b-col md="4">
                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
              </b-col>
            </b-row>
          </b-card>
        </b-container>
      </div>
    </section>
  </div>
</template>

<script>
import LightTimeline from 'vue-light-timeline';

const theme = 'red';
export default {
  components: {
    LightTimeline,
  },
  data() {
    return {
      items: [
        {
          tag: '2018-01-12',
          content: 'hallo',
        },
        {
          tag: '2018-01-13',
          color: '#dcdcdc',
          type: 'circle',
          content: 'world',
        },
        {
          type: 'star',
          tag: '2018-01-14',
          htmlMode: true,
          content: `<div style="color: ${theme};"> =v = </div>`,
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  margin: 7rem auto;
}
img {
  min-height: 100%;
  min-width: 100%;
  height: auto;
  width: auto;
}
.custom-card {
  width: 1100px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
}
#paket-lain {
  background-color: #f7f4f4;
}
#li-image {
  font-size: 12px;
  line-height: 3em;
  list-style-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/treehouse-marker.png);
}
.jumbotron-image {
  margin-top: 100px;
  opacity: 0.57;
  background-image: linear-gradient(to right, #b7b6f9, #ffdbdb);
}
.action-button {
  width: 250px;
  height: 50px;
  background-color: rgb(250, 98, 27);
  color: #fff;
  border: none;
}
.persyaratan {
  font-family: Montserrat;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}
.bottom-content-paket-umroh {
  padding-top: 13rem;
}
</style>
