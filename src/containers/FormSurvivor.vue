<template>
  <div>
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
  name: 'NewSurvivorPage',
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
    // http.getSurvivors(10, survivors => {
    //   self.survivors = survivors.data.data;
    // })
  }
}
</script>