<template>
  <div>
    <b-button id="show-btn" block variant="warning" @click="showModal">Create Survivor</b-button>

    <b-modal ref="my-modal" hide-footer title="Register New Survivor">
      <div class="d-block">
        <FormSurvivor></FormSurvivor>
      </div>
    </b-modal>
  </div>
</template>

<script>
import FormSurvivor from '@/components/forms/FormSurvivor';

  export default {
    name: 'ModalFormSurvivor',
    components: {
      FormSurvivor
    },
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
    }
  }
</script>