<template>
  <div id="app">
    <section>
      <b-container>
        <div class="text-center">
          <p class="lead mb-3">Gallery Kegiatan Uhud Tour</p>
          <p>Beberapa kegiatan umroh
            yang diselenggarakan oleh Uhud Tour
          </p>
        </div>
      </b-container>
    </section>

    <!-- Gallery -->
    <section>
        <div class="gallery">
          <div><img src="https://unsplash.it/600/400?image=580"></div>
          <div><img src="https://unsplash.it/500/340?image=870"></div>
          <div><img src="https://unsplash.it/600/450?image=871"></div>
          <div><img src="https://unsplash.it/520/400?image=767"></div>
          <div><img src="https://unsplash.it/650/400?image=296"></div>
          <div><img src="https://unsplash.it/620/410?image=168"></div>
          <div><img src="https://unsplash.it/600/450?image=871"></div>
          <div><img src="https://unsplash.it/355/400?image=826"></div>
          <div><img src="https://unsplash.it/620/410?image=168"></div>
          <div><img src="https://unsplash.it/355/400?image=826"></div>
        </div>
        <b-button class="action-button">LIHAT LAINNYA</b-button>
    </section>
    <!-- ./ Gallery -->


    <!-- Call to Action -->
    <call-to-action />
    <!-- ./ Call to Action -->
  </div>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue';

export default {
  components: {
    CallToAction,
  },
};
</script>

<style scoped>
.action-button {
  margin-top: 4rem;
  width: 392px;
  height: 54.5px;
  background-color: #7675c8;
}
.gallery {
  max-width: 900px;
  padding: .5vw;
  font-size: 0;
  display: -ms-flexbox;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  display: -webkit-box;
  display: flex;
  margin: 0 auto;
}
.gallery div {
  -webkit-box-flex: auto;
  -ms-flex: auto;
  flex: auto;
  width: 200px;
  margin: .5vw;
}
.gallery div img {
  width: 100%;
  height: auto;
}
section {
  margin: 3rem;
}
</style>
