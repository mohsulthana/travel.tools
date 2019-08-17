<template>
  <div>
    <b-container>
      <div class="dashboard">
        <b-row>
          <b-col lg="10" xs="12" offset-lg="1">
            <horizontal-stepper :steps="steps" @completed-step="completeStep"
              @active-step="isStepActive"
            >
            </horizontal-stepper>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <b-container>
      <detail-jamaah
        slot="sendiri"
        v-if="status == 'sendiri'
        || status != 'pasangan'"></detail-jamaah>
      <detail-jamaah slot="pasangan" v-if="status === 'pasangan'"></detail-jamaah>
      <detail-jamaah slot="keluarga" v-if="status === 'keluarga'"></detail-jamaah>
      <detail-jamaah slot="lainnya" v-if="status === 'lainnya'"></detail-jamaah>
    </b-container>
  </div>
</template>

<script>
import HorizontalStepper from 'vue-stepper';
import StepOne from './steps/StepOne.vue';
import EventBus from '@/EventBus';
import DetailJamaah from './jamaah/DetailSlot.vue';

export default {
  components: {
    HorizontalStepper,
    DetailJamaah,
  },
  methods: {
    // Executed when @completed-step event is triggered
    // completeStep(payload) {
    //   this.steps.forEach((step) => {
    //     if (step.name === payload.name) {
    //       step.completed = true;
    //     }
    //   });
    // },
  },
  mounted() {
    EventBus.$on('dataJamaah', (value) => {
      this.status = value;
    });
  },
  data() {
    return {
      status: '',
      perempuan: true,
      steps: [
        {
          icon: 'mail',
          name: 'Data',
          title: 'Data Jamaah',
          component: StepOne,
          completed: false,
        },
        {
          icon: 'person',
          name: 'Kamar',
          title: 'Pilih kamar',
          completed: false,
        },
        {
          icon: 'book',
          name: 'Review',
          title: 'Review Data',
          completed: false,
        },
        {
          icon: 'payment',
          name: 'Pembayaran',
          title: 'Pembayaran',
          completed: false,
        },
        {
          icon: 'loading',
          name: 'Proses',
          title: 'Proses',
          completed: false,
        },
        {
          icon: 'invoice',
          name: 'Invoice',
          title: 'Invoice',
          completed: false,
        },
      ],
    };
  },
};
</script>

<style>
.card {
  margin: 3rem;
  margin-left: auto;
  margin-right: auto;
}
.container-layout {
  margin-left: auto;
  margin-top: auto;
}
.dashboard {
  padding-top: 8rem;
}
.detail {
  margin-top: 8rem;
}
.sub-card {
  border: 2px solid #5755da;
  border-radius: 10px;
  padding: 1.2rem;
  margin: .5rem;
}
.sub-card p {
  font-size: .8rem;
  padding-left: .5em;
}
</style>
