<template><div>
  
  <div v-if="isMobile" style="position:fixed; bottom:0px; left:0px; width:100%; background:#fff; box-shadow:0px 0px 5px 5px #00000022;">
    <button type="button" class="btn btn-light btn-block" @click="show = !show;">
      <span v-if="show" v-html="textShow"></span>
      <span v-else v-html="textHide" class="text-muted"></span>
    </button>

    <transition enter-active-class="animated fadeInUp faster" leave-active-class="animated fadeOutDown faster" :duration="300">
      <div v-if="show" style="padding:15px;">
        <slot></slot>
      </div>
    </transition>
    
  </div>

  <div v-else>
    <slot></slot>
  </div>
</div></template>

<script>
export default {
  name: 'AppActions',

  props: {
    show: {default:false},
    textShow: {default:'Ações'},
    textHide: {default:'Fechar <i class="fa fa-fw fa-remove"></i>'},
  },

  data() {
    return {
      isMobile: false,
    };
  },

  mounted() {
    this.isMobile = document.body.offsetWidth<=768;
    window.addEventListener('resize', () => {
      this.isMobile = document.body.offsetWidth<=768;
    });
  },
};
</script>