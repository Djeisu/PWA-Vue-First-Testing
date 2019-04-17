<template>
  <div id="app">
    <b-container fluid>
      <b-card-group deck>
        <div v-for="survivor in survivors" :key="survivor.id">
          <survivor :name="survivor.name" :abducted="survivor.abducted"></survivor>
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
    // getImagem: function(survivors) {
    //   if (quadrinho.images.length) {
    //     return quadrinho.images[0].path + '/portrait_medium.jpg';
    //   }
    // }
    // passar no no input :imagem="getImagem(quadrinho)"
  }
}
</script>