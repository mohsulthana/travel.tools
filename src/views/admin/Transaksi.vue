<template>
  <div>
      <b-container>
        <div class="text-left my-4">
          <h2>Riwayat Transaksi</h2>
        </div>
        <b-card>
          <b-tabs content-class="mt-3" align="left">
            <b-tab title="Baru" active>
              <div class="text-left card-content">
                <b-row>
                  <b-col lg="6" xs="12">
                    <h3>Angsuran Umroh</h3>
                    <h4>IDR 12.000.000</h4>
                    <p class="text-muted">
                      <small>01 Januari 2018</small>
                      <span class="dot"></span>
                      <small>Sisa waktu pembayaran Anda 2 Jam 50 menit</small>
                    </p>
                  </b-col>
                  <b-col lg="6" xs="12">
                    <div class="text-center">
                      <b-button class="solid-btn">Bayar</b-button>
                      <b-button class="stroke-btn">
                        <font-awesome-icon icon="camera-retro" size="lg"/>
                        Upload Bukti Transfer
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-tab>
            <b-tab title="Selesai">
              <div class="text-left card-content">
                <b-row>
                  <b-col lg="6" xs="12">
                    <h3>Angsuran Umroh</h3>
                    <h4>IDR 12.000.000</h4>
                    <p class="text-muted">
                      <small>01 Januari 2018</small>
                      <span class="dot"></span>
                      <small>Sisa waktu pembayaran Anda 2 Jam 50 menit</small>
                    </p>
                  </b-col>
                  <b-col lg="6" xs="12">
                    <div class="text-center">
                      <b-button class="solid-btn px-4">LIHAT</b-button>
                      <b-button class="stroke-btn">
                        <font-awesome-icon icon="download" size="lg"/>
                        DOWNLOAD KWITANSI
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div class="text-left card-content">
                <b-row>
                  <b-col lg="6" xs="12">
                    <h3>Angsuran Umroh</h3>
                    <h4>IDR 12.000.000</h4>
                    <p class="text-muted">
                      <small>01 Januari 2018</small>
                      <span class="dot"></span>
                      <small>Sisa waktu pembayaran Anda 2 Jam 50 menit</small>
                    </p>
                  </b-col>
                  <b-col lg="6" xs="12">
                    <div class="text-center">
                      <b-button class="solid-btn px-4">LIHAT</b-button>
                      <b-button class="stroke-btn">
                        <font-awesome-icon icon="download" size="lg"/>
                        DOWNLOAD KWITANSI
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-tab>
            <b-tab title="Gagal">
              <div class="text-left card-content">
                <b-row>
                  <b-col lg="6" xs="12">
                    <h3>Angsuran Umroh</h3>
                    <h4>IDR 12.000.000</h4>
                    <p class="text-muted">
                      <small>01 Januari 2018</small>
                      <span class="dot"></span>
                      <small>Gagal, pembayaran Anda
                        belum kami terima
                      </small>
                    </p>
                  </b-col>
                  <b-col lg="6" xs="12">
                    <div class="text-center">
                      <p>
                        <small>Untuk konfirmasi pembayaran
                          silahkan upload bukti transfer
                        </small>
                      </p>
                      <b-button class="solid-btn">
                        <font-awesome-icon icon="camera-retro" size="lg"/>
                        Upload Bukti Transfer
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-container>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>

.dot {
  height: 7px;
  width: 7px;
  background-color: #5575AD;
  border-radius: 50%;
  margin: auto 1rem;
  display: inline-block;
}
.container {
  margin: 2rem auto;
}
.card-content {
  max-width: 1000px;
  padding: 2rem;
  margin: 3rem auto;
  border-left: 3px #5575DA solid;
}
.solid-btn {
  background: #5755da;
  color: #ffffff;
  max-width: 500px;
  margin: 1rem;
}
.stroke-btn {
  background: #fff;
  color: #5755da;
  outline: #5755da solid 1px;
  border: 1px solid #fff;
  margin: auto .5rem;
  border-radius: 9px;
}
.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-item .nav-link {
    color: #495057 !important;
    background-color: #fff;
    /* border-color: #dee2e6 #dee2e6 #fff; */
    padding-left: 5rem !important;
    padding-right: 5rem !important;
    border-bottom: 3px solid #5575AD !important;
}
</style>
