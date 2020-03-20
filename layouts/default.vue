<template><div>
  <AppTemplate :auth="$store.state.auth.user">
    <template v-slot:auth>
      <div class="p-3">
        <Auth></Auth>
      </div>
    </template>

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

    <template v-slot:header>
      <div class="row no-gutters align-items-center">
        <div class="col text-right">
          <a href="javascript:;" @click="$store.dispatch('auth/logout');">Logout</a>
        </div>
      </div>
    </template>

    <template v-slot:content><nuxt /></template>
  </AppTemplate>
</div></template>

<script>
import AppTemplate from '~/components/AppTemplate.vue';
import Auth from '~/components/Auth.vue';

export default {
  components: {
    AppTemplate,
    Auth,
  }
}
</script>