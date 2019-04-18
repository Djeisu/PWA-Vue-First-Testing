<template>
  <div>
    <b-button id="show-btn" block variant="warning" @click="showModal">Abducteds</b-button>

    <b-modal ref="my-modal" hide-footer title="Register New Survivor">
      <div class="d-block">
      </div>
    </b-modal>
  </div>
</template>

<script>
import http from '@/services/http';

  export default {
    name: 'ModalPercentsAbducted',
    components: {
    },
    data() {
      return {
        form: {
            survivor_report_id: null,
            survivor_abducted_id: null
        },
        survivors: [],
        show: true
      }
    },
    created() {
      var self = this
        http.getSurvivors(10, survivors => {
            self.survivors = survivors.data.data;
        })
    },
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
    }
  }
</script>