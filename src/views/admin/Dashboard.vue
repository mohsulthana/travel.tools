<template>
  <div id="app">
    <section>
      <b-container>
        <div class="dashboard">
          <b-row class="mt-5">
            <b-col lg="4" xs="12">
              <div class="card">
                <picture class="thumbnail">
                  <img src="http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg" alt="A banana that looks like a bird">
                </picture>
                <div class="caption">
                  <p class="font-weight-bold">Paket Umroh + Istanbul Turki</p>
                  <small>Keberangkatan 28 Februai 2018</small>
                </div>
                <content class="text-left p-3">
                  <p>Paket Kamar</p>
                  <p>1 Paket Squad</p>
                  <p>2 Paket Double</p>
                  <hr>
                  <small>Silahkan lunasi sisa pembayaran Anda
                    sebelum <span class="font-weight-bold">27 Januari 2019</span>
                  </small>
                </content>
              </div>
            </b-col>
            <b-col lg="8" xs="12">
              <b-row>
                <div class="card p-5 text-left vertical-line">
                  <b-row>
                    <b-col>
                      <font-awesome-icon icon="wallet" size="lg"/>
                    </b-col>
                    <b-col>
                      <b-row>
                        <small class="text-muted">Sisa Tagihan Biaya Umroh</small>
                      </b-row>
                      <b-row>
                        <h3>IDR 2.700.000</h3>
                      </b-row>
                    </b-col>
                    <b-col>
                      <b-button class="solid-btn">Angsur Sekarang</b-button>
                    </b-col>
                  </b-row>
                </div>
              </b-row>
              <b-row>
                <div class="card p-5 text-left">
                  <content>
                    <h6 class="font-weight-bold lend">Farhan Hadi Priatna</h6>
                    <progress max="100" value="75"></progress><small class="mx-3 mr-5">75%</small>
                    <b-button class="stroke-btn">LENGKAPI</b-button>
                    <p>Silahkan lengkapi profile & dokumen Anda</p>
                  </content>
                </div>
              </b-row>
              <b-row>
                <b-col lg="6" xs="12">
                  <div class="card p-3 text-left card-third-right">
                    <h6 class="lead font-weigh-bold">Masripah</h6>
                    <small>Ibu dari Farhan Hadi Priatna</small>
                    <hr>
                    <progress max="100" value="75"></progress><small>75%</small>
                    <b-button class="stroke-btn">LENGKAPI</b-button>
                  </div>
                </b-col>
                <b-col lg="6" xs="12">
                  <div class="card p-3 text-left card-third-right">
                    <h6 class="lead font-weigh-bold">Masripah</h6>
                    <small>Ibu dari Farhan Hadi Priatna</small>
                    <hr>
                    <progress max="100" value="75"></progress><small>75%</small>
                    <b-button class="stroke-btn">LENGKAPI</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
export default ({

});
</script>

<style scoped>
.dashboard {
  padding-top: .5rem;
}
.vertical-line {
  border-left: thick solid #5755da;
}
progress {
  -webkit-appearance: none;
  appearance: none;
  border: none;
  height: 8px;
  border: 1px solid whitesmoke;
  border-radius: 15px;
  width: 55%;
}
progress::-webkit-progress-value {
  background-color: #5755da;
  border-radius: 20px;
}
progress::-webkit-progress-bar {
  background: whitesmoke;
  border-radius: 20px;
}
.caption {
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-40%, -310%);
  line-height: .1em;
  text-align: left;
  color: white;
}
.solid-btn {
  background: #5755da;
  color: #ffffff;
}
.stroke-btn {
  background: #fff;
  color: #5755da;
  outline: #5755da solid 1px;
  border: 1px solid #5755da;
  border-color: #fff;
  border-radius: 9px;
  margin-left: 20px;
  float: right;
}
.card-third-right {
  display: inline-block;
}
.thumbnail img {
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
}
.card {
  float: left;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1); /* this adds the "card" effect */
  text-align: center;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 50px;
}
</style>
