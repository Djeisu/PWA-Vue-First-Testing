<template>
  <div>
    <b-button id="show-btn" block variant="primary" @click="showModal">Report Abduction</b-button>

    <b-modal ref="my-modal" hide-footer title="Register New Survivor">
      <div class="d-block">
        <FormReport></FormReport>
      </div>
    </b-modal>
  </div>
</template>

<script>
import FormReport from '@/components/forms/FormReport';

  export default {
    name: 'ModalFormReport',
    components: {
      FormReport
    },
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
    }
  }
</script>