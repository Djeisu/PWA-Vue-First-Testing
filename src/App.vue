<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#">X-SUNIT</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-for="(link, index) in links" :key="index">
            <b-nav-item :to="link.to">
                {{ link.name }}
            </b-nav-item>
          </b-navbar-nav>
          <!-- <b-navbar-nav>
            <b-nav-item-dropdown text="Reports" left>
              <b-dropdown-item v-for="(report, index) in reports" :key="index" :to="report.to">
                  {{ report.name }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav> -->

          <!-- <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search by id</b-button>
            </b-nav-form>
          </b-navbar-nav> -->
        </b-collapse>
      </b-navbar>
    </div>

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
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Survivors',
        to: '/'
      },
      // {
      //   name: 'Create Survivor',
      //   to: '/form-survivor'
      // },
      // {
      //   name: 'Bad Link',
      //   to: '/random-bad-url'
      // }
    ],
    // reports: [
    //   {
    //     name: 'Report Abduction',
    //     to: '/'
    //   },
    //   {
    //     name: 'Abducteds',
    //     to: '/'
    //   },
    //   {
    //     name: 'Non-Abducteds',
    //     to: '/'
    //   }
    // ]
  })
}
</script>