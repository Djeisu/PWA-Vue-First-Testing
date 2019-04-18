<template>
  <div class="mt-4">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row>
        <b-col cols="6">
          <b-form-group id="gender-group" label="Survivor:" label-for="gender" description="Inform who will report">
            <b-form-select
              id="survivor_report_id"
              v-model="form.survivor_report_id"
              required
            >
              <option v-for="survivor in getNonAbducteds(survivors)" :key="survivor.id" :value="survivor.id">{{survivor.name}}</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="gender-group" label="Abducted:" label-for="gender" description="Inform the survivor abducted">
            <b-form-select
              id="survivor_abducted_id"
              v-model="form.survivor_abducted_id"
              required
            >
              <option v-for="survivor in getNonAbducteds(survivors)" :key="survivor.id" :value="survivor.id">{{survivor.name}}</option>
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      
      <b-button block type="submit" class="mr-1" variant="primary">Submit</b-button>
      <b-button block type="reset" variant="outline-danger">Reset</b-button>
      <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
    </b-form>
  </div>
</template>


<style scoped>
h1 {
  color: blue
}
</style>

<script>
import http from '@/services/http';

export default {
    name: 'FormReport',
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
      onSubmit(evt) {
        console.log(this.form)
        http.postReportAbduction(this.form, survivor => {
            this.form = survivor.data.data;
        })
        evt.preventDefault()
        this.$router.push('/')
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.age = null
        this.form.gender = null
        this.form.latitude = null
        this.form.longitude = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      getNonAbducteds(obj){
        return obj.filter(el => !el.abducted)
      }
    }
  }
</script>