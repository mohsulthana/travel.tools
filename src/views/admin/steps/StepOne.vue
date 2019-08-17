<template>
  <div>
    <b-container>
      <b-row>
        <div class="container-layout">
          <h3>Bersama siapa Anda berangkat Umroh?</h3>
          <b-row>
            <b-col>
              <div @click="setActive('sendiri')">
                <img
                  height="100"
                  width="100"
                  src="https://previews.123rf.com/images/dzein/dzein1505/dzein150500051/40348820-3d-realistic-muslim-man-character-wearing-ihram-clothes-performing-hajj-or-umrah-with-kaaba-and-gold.jpg"
                  >
                  <p>Sendiri</p>
              </div>
            </b-col>
            <b-col>
              <div @click="setActive('pasangan')">
                <img
                  height="100"
                  width="100"
                  src="https://previews.123rf.com/images/dzein/dzein1505/dzein150500051/40348820-3d-realistic-muslim-man-character-wearing-ihram-clothes-performing-hajj-or-umrah-with-kaaba-and-gold.jpg"
                >
                <p>Suami/Istri</p>
              </div>
            </b-col>
            <b-col>
              <div @click="setActive('keluarga')">
                <img
                  height="100"
                  width="100"
                  src="https://previews.123rf.com/images/dzein/dzein1505/dzein150500051/40348820-3d-realistic-muslim-man-character-wearing-ihram-clothes-performing-hajj-or-umrah-with-kaaba-and-gold.jpg"
                >
                <p>Keluarga</p>
              </div>
            </b-col>
            <b-col>
              <div @click="setActive('lainnya')">
                <img
                  height="100"
                  width="100"
                  src="https://previews.123rf.com/images/dzein/dzein1505/dzein150500051/40348820-3d-realistic-muslim-man-character-wearing-ihram-clothes-performing-hajj-or-umrah-with-kaaba-and-gold.jpg"
                >
                <p>Lainnya</p>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EventBus from '@/EventBus';

export default {
  data() {
    return {
      jamaah: '',
    };
  },
  methods: {
    setActive(jamaah) {
      this.jamaah = jamaah;
      EventBus.$emit('dataJamaah', jamaah);
    },
  },
};
</script>

<style scoped>
.container-layout {
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
}
</style>
