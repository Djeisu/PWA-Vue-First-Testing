<template>
  <div>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
    <main>
      <b-container class="bv-example-row">
        <b-row class="justify-content-md-center">
          <b-col cols="12" md="auto">
            <router-view/>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  li {
    padding: 5px 15px 5px 0;
  }
  li a {
    text-decoration: none;
    color: black;
  }
  li a:hover {
    color: #404040;
  }
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Bad Link',
        to: '/random-bad-url'
      }
    ]
  })
}
</script>