<template>
  <div class="mt-4">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="name-group" label="Name:" label-for="name" description="Inform the name of survivor">
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-row>
        <b-col cols="6">
          <b-form-group id="age-group" label="Age:" label-for="age" description="Inform the age of survivor">
            <b-form-input
              id="age"
              v-model="form.age"
              placeholder="Enter age"
              type="number"
              min="1"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group id="gender-group" label="Gender:" label-for="gender" description="Inform the gender of survivor">
            <b-form-select
              id="gender"
              v-model="form.gender"
              :options="genders"
              required
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
        
      <b-row>
        <b-col cols="4">
          <b-form-group 
            id="location-group"
            label="Location:"
            label-for="location"
          >
            <b-form-input id="latitude" v-model="form.latitude" disabled required placeholder="Latitude"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group 
            id="location-group"
            label="Location:"
            label-for="location"
          >
            <b-form-input id="longitude" v-model="form.longitude" disabled required placeholder="Longitude"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col cols="4">
          <b-form-group class="text-center"
            label="Generate Fake Location"
          >
            <b-button type="button" variant="outline-primary" block v-on:click="randomLocation()">Click Here!</b-button>
          </b-form-group>
        </b-col>
      </b-row>
      
      <div class="mt-3 d-flex justify-content-center">
        <b-button type="submit" class="mr-1" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </div>

    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>


<style scoped>
h1 {
  color: blue
}
</style>

<script>
import http from '@/services/http';
import Survivor from '@/components/Survivor';

export default {
    name: 'FormSurvivor',
    data() {
      return {
        form: {
          name: '',
          age: null,
          gender: null,
          latitude: null,
          longitude: null
        },
        genders: [{ text: 'Select One', value: null }, 'Female', 'Male'],
        show: true
      }
    },
    created() {
      if(this.$route.query.id != undefined)
        http.getSurvivor(this.$route.query.id, survivor => {
          this.form = survivor.data.data
        })
    },
    methods: {
      onSubmit(evt) {
        if(this.$route.query.id != undefined)
          http.updateSurvivor(this.form, survivor => {
            console.log(survivor);
            this.form = survivor.data.data;
          })
        else
          http.postSurvivor(this.form, survivor => {
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
      randomLocation(){
        this.form.latitude = this.$faker().address.latitude()
        this.form.longitude = this.$faker().address.longitude()
      }
    }
  }
</script>