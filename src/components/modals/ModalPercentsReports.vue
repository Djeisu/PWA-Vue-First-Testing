<template>
  <div>
    <b-button id="show-btn" block variant="warning" @click="showModal">Analytics invasion</b-button>

    <b-modal ref="my-modal" hide-footer title="Reports of the invasion">
      <div class="d-block">
        <div>
          <graph-pie
            :width="300"
            :height="500"
              :padding-top="70"
              :padding-bottom="70"
              :padding-left="70"
              :padding-right="70"
            :values="values"
            :names="names"
            :active-index="[ 0, 1 ]"
            :active-event="'click'"
            :show-text-type="'outside'"
            :data-format="dataFormat">
              <legends :names="names"></legends>
              <tooltip :names="names"></tooltip>
          </graph-pie>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import http from '@/services/http';

  export default {
    name: 'ModalPercentsReports',
    components: {
    },
    data() {
      return {
        show: true,
        abducteds: [],
        nonabducteds: [],
        names: [],
        values: []
      }
    },
    created() {
      var self = this
      http.getAbducteds(abducteds => {
          self.names.push("Abducteds")
          self.values.push(abducteds.data.percents_of_abducteds)
          self.abducteds = abducteds.data.data;
      })
      http.getNonAbducteds(nonabducteds => {
          self.names.push("Non-Abducteds")
          self.values.push(nonabducteds.data.percents_of_nonabducteds)
          self.nonabducteds = nonabducteds.data.data;
      })
    },
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      dataFormat: function(a, b) {
        if(b) return b + "%";
        return a;
      }
    }
  }
</script>