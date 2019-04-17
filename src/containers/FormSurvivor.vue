<template>
  <div class="mt-4">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="name-group"
        label="Name:"
        label-for="name"
        description="Inform the name of survivor"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          type="email"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="age-group" label="Age:" label-for="age" description="Inform the age of survivor">
        <b-form-input
          id="age"
          v-model="form.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="gender-group" label="Gender:" label-for="gender">
        <b-form-select
          id="gender"
          v-model="form.gender"
          :options="genders"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group 
        id="location-group"
        label="Location:"
        label-for="location"
        description="Inform the name of survivor"
      >
        <b-row>
          <b-col>
            <b-form-input
              id="latitude"
              v-model="form.latitude"
              required
              placeholder="Latitude"
            ></b-form-input>
          </b-col>
          <b-col>
            <b-form-input
              id="longitude"
              v-model="form.longitude"
              required
              placeholder="Longitude"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
          name: this.$faker().name.findName(),
          age: null,
          gender: null,
          latitude: null,
          longitude: null
        },
        genders: [{ text: 'Select One', value: null }, 'Female', 'Male'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
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
      }
    }
  }
</script>