<template><div>
  <AppTemplate>
    <template v-slot:logo>
      <img src="https://logoipsum.com/assets/logo/logo-1.svg" alt="" style="height:70px; margin:-20px 0px;">
    </template>

    <template v-slot:drawer>
      <div style="padding:15px; background:url(https://images.unsplash.com/photo-1568547741072-0c2468182867?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60) #eee center center no-repeat; background-size:cover;">
        <div class="row no-gutters align-items-center">
          <div class="col-3">
            <img src="https://randomuser.me/api/portraits/men/19.jpg" alt="" style="width:90%; border-radius:50%; border:solid 3px #ffffffbb;">
          </div>
          <div class="col" style="mix-blend-mode: difference;">
            <div>User Name</div>
            <div>user@grr.la</div>
          </div>
        </div>
      </div>

      <div class="list-group">
        <nuxt-link class="list-group-item" data-close to="/">Dashboard</nuxt-link>
        <nuxt-link class="list-group-item" data-close to="/whatsapp">Whatsapp</nuxt-link>
        <nuxt-link class="list-group-item" data-close to="/auth">Auth</nuxt-link>
      </div>
    </template>

    <template v-slot:header>&nbsp;</template>

    <template v-slot:content><nuxt /></template>
  </AppTemplate>
</div></template>

<script>
import AppTemplate from '~/components/AppTemplate.vue';

export default {
  components: {
    AppTemplate,
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
