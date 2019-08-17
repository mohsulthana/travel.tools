<template>
  <div>
    <!-- Jumbotron image -->
    <section>
      <b-container>
        <b-card
          overlay
          img-src="https://picsum.photos/900/250/?image=3"
          img-alt="Card Image"
          text-variant="white"
          title="Umroh & Wisata Sejarah"
          class="jumbotron-image mb-5"
          height="418"
          width="1149.5">
        </b-card>
        <small>
          <span class="text-left text-muted">18 JAN 2018 | Artikel | Tools.Travel</span>
          </small>
        <b-row>
          <b-col lg="9" xs="12" class="text-justify content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, deleniti. Repudiandae, dolores facere ut,
            repellendus rem blanditiis veniam ipsa quibusdam, exercitationem quia delectus.
            Rerum, veniam sapiente! Quod ut est cupiditate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, deleniti. Repudiandae, dolores facere ut,
            repellendus rem blanditiis veniam ipsa quibusdam, exercitationem quia delectus.
            Rerum, veniam sapiente! Quod ut est cupiditate?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit, deleniti. Repudiandae, dolores facere ut,
            repellendus rem blanditiis veniam ipsa quibusdam, exercitationem quia delectus.
            Rerum, veniam sapiente! Quod ut est cupiditate?
            <b-img src="https://picsum.photos/820/250/?image=3" alt="Image 1"></b-img>
            <hr>
            <b-row>
              <b-col lg="6" xs="12">
                <b-button class="action-button">TULIS KOMENTAR</b-button>
              </b-col>
              <b-col lg="6" xs="12">
                <div class="pl-5">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" size="lg"/>
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" size="lg"/>
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp' }" size="lg"/>
                  <font-awesome-icon :icon="{ prefix: 'far', iconName: 'bookmark' }" size="lg"/>
                </div>
              </b-col>
            </b-row>
            <hr>
          </b-col>
          <b-col lg="3" xs="12" class="text-left">
            <h4>ARTIKEL TERKAIT</h4>
            <div class="mt-3">
              <b-img src="https://picsum.photos/300/150/?image=41" height="200" width="250" alt="Image 1"></b-img>
              <small class="text-muted">18 JAN 2018 | Artikel | Tools.Travel</small>
              <p class="lead">Lorem ipsum dolor sit amet consecteur adipisicing</p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- ./ Body Artikel -->

    <!-- Berita Lainnya -->
    <section>
      <b-container>
        <!-- Picture -->
        <h4 class="text-left">BERITA LAINNYA</h4>
        <b-row>
          <b-col lg="4" xs="12">
            <b-img src="https://picsum.photos/300/150/?image=41" class="berita-lainnya" fluid alt="Fluid image"></b-img>
            <b-container>
              <p class="text-muted text-left mt-3 ml-4">18 Januari 2018</p>
              <p class="lead text-left">Sepeda, alat transportasi yang bisa jadi prestasi</p>
            </b-container>
          </b-col>
          <b-col lg="4" xs="12">
            <b-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhNUO30flh1hRJNuo0150hvUc4xXgU0n9gnzYHjgpSJ_SIEN1" class="berita-lainnya" fluid alt="Fluid image"></b-img>
            <b-container>
              <p class="text-muted text-left mt-3 ml-4">18 Januari 2018</p>
              <p class="lead text-left">Sepeda, alat transportasi yang bisa jadi prestasi</p>
            </b-container>
          </b-col>
          <b-col lg="4" xs="12">
            <b-img src="https://t-ec.bstatic.com/images/hotel/max1024x768/832/83237765.jpg" class="berita-lainnya" fluid alt="Fluid image"></b-img>
            <b-container>
              <p class="text-muted text-left mt-3 ml-4">18 Januari 2018</p>
              <p class="lead text-left">Lorem ipsu de amat, consectetur adipisicing</p>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!-- ./ Berita Lainnya -->

    <!-- Call to Action -->
    <section>
      <call-to-action />
    </section>
    <!-- ./ Call to Action -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CallToAction from '@/components/CallToAction.vue';

export default Vue.extend({
  components: {
    CallToAction,
  },
});
</script>

<style scoped>
svg {
  margin-left: 2rem;
  position: relative;
  top: .8rem;
}
.jumbotron-image {
  background-image: linear-gradient(to bottom, #b7b6f9, #b7b6f9),
  linear-gradient(to top, #b7b6f9, #b7b6f9);
}
section {
  margin-top: 100px;
}
.content {
  line-height: 2.0;
}
.action-button {
  width: 392px;
  height: 54.5px;
  background-color: #7675c8;
}
.social-media-button {
  width: 250px;
  height: 48px;
  background-color: red;
}
.berita-lainnya {
  width: 400px; /* You can set the dimensions to whatever you want */
  height: 200px;
  object-fit: cover;
}
</style>
