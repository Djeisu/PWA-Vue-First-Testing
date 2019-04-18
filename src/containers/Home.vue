<template>
  <div id="app" class="mt-5">
    <b-container fluid>
      <b-card-group deck class="justify-content-md-center">
        <div v-for="survivor in survivors" :key="survivor.id">
          <survivor class="mb-4" 
            :name="survivor.name"
            :age="survivor.age"
            :gender="survivor.gender"
            :abducted="survivor.abducted"
            :latitude="survivor.latitude"
            :longitude="survivor.longitude"
          ></survivor>
        </div>
      </b-card-group>
    </b-container>
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
  name: 'App',
  components: {
    Survivor
  },
  data() {
    return {
      survivors: []
    }
  },
  created() {
    var self = this
    http.getSurvivors(10, survivors => {
      self.survivors = survivors.data.data;
    })
  },
  methods: {
  }
}
</script>