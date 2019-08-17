<template>
  <div class="detail-jamaah">
    <slot name="sendiri">
      <section class="detail">
        <div class="container">
          <div class="card" style="max-width: 30rem;">
            <div class="card-body">
              <div class="text-center">
                <h2>Data Pribadi</h2>
                <p>Lengkapi data pribadi Anda untuk proses pendaftaran Umroh.</p>
              </div>
              <div class="form text-left">
                <div class="form-group">
                  <label for="nama">Nama Lengkap</label>
                  <input type="text" class="form-control" id="nama" aria-describedby="nama">
                </div>
                <div class="form-group">
                  <label for="nomorTelepon">Nomor Telepon</label>
                  <input type="text" class="form-control" id="nomorTelepon">
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio"
                  name="laki-laki" id="laki-laki" value="laki-laki">
                  <label class="form-check-label" for="laki-laki1">
                    Laki-Laki
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio"
                  name="perempuan" id="perempuan" value="perempuan">
                  <label class="form-check-label" for="perempuan">
                    Perempuan
                  </label>
                </div>
                <div class="form-group">
                  <label for="nomorTelepon">Paket Kamar</label>
                    <div class="row text-center">
                      <b-col class="sub-card">
                        <p>Transfer Rupiah</p>
                      </b-col>
                      <b-col class="sub-card">
                        <p>Transfer Dollar</p>
                      </b-col>
                      <b-col class="sub-card">
                        <p>Bayar di Kantor</p>
                      </b-col>
                    </div>
                </div>
                <b-button class="btn">Lanjut</b-button>
                <small class="text-left">* Harga belum termasuk biaya
                  perlengkapan sebesar Rp2.500.000</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </slot>

    <slot name="pasangan">
      <section class="detail">
        <div class="container">
          <div class="card" style="max-width: 30rem;">
            <div class="card-body">
              <div class="text-center">
                <h2>Data Suami/Istri</h2>
                <p>Lengkapi data Suami/Istri untuk proses pendaftaran Umroh.</p>
              </div>
              <div class="text-left">
                <ul>
                  <li><h5 class="pb-2">Data Suami</h5></li>
                  <div class="form text-left">
                    <div class="form-group">
                      <label for="namaSuami">Nama Lengkap</label>
                      <input type="text" class="form-control" id="namaSuami" aria-describedby="namaSuami">
                    </div>
                    <div class="form-group">
                      <label for="namaAyahSuami">Nama Ayah</label>
                      <input type="text" class="form-control" id="namaAyahSuami" aria-describedby="namaAyahSuami">
                    </div>
                    <div class="form-group">
                      <label for="namaIbuSuami">Nama Ibu</label>
                      <input type="text" class="form-control" id="namaIbuSuami" aria-describedby="namaIbuSuami">
                    </div>
                    <div class="form-group">
                      <label for="nomorTeleponSuami">Nomor Telepon yang bisa dihubungi</label>
                      <input type="text" class="form-control" id="nomorTeleponSuami" aria-describedby="nomorTeleponSuami">
                    </div>
                  </div>
                </ul>
                <ul>
                  <li><h5 class="pb-2">Data Istri</h5></li>
                  <div class="form text-left">
                    <div class="form-group">
                      <label for="namaIstri">Nama Lengkap</label>
                      <input type="text" class="form-control" id="namaIstri" aria-describedby="namaIstri">
                    </div>
                    <div class="form-group">
                      <label for="namaAyahIstri">Nama Ayah</label>
                      <input type="text" class="form-control" id="namaAyahIstri" aria-describedby="namaAyahIstri">
                    </div>
                    <div class="form-group">
                      <label for="namaIbuIstri">Nama Ibu</label>
                      <input type="text" class="form-control" id="namaIbuIstri"
                      aria-describedby="namaIbuIstri">
                    </div>
                    <div class="form-group">
                      <label for="nomorTelepon">Paket Kamar</label>
                        <div class="row text-center">
                          <b-col class="sub-card">
                            <p>Transfer Rupiah</p>
                          </b-col>
                          <b-col class="sub-card">
                            <p>Transfer Dollar</p>
                          </b-col>
                          <b-col class="sub-card">
                            <p>Bayar di Kantor</p>
                          </b-col>
                        </div>
                    </div>
                    <b-button class="btn">Lanjut</b-button>
                    <small class="text-left">* Harga belum termasuk biaya
                      perlengkapan sebesar Rp2.500.000</small>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </slot>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.btn {
  width: 100%;
  margin: .5rem auto;
  background-color: #7675c8;
}
</style>
