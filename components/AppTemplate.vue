<template><div class="app-layout" style="position:relative; height:100vh;">

  <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" :duration="300">
    <div v-if="drawerShow && isMobile" style="position:fixed; top:0px; left:0px; width:100%; height:100vh; overflow:auto; background:#00000044; z-index:10;" @click.self="drawerShow=false;">
      <div class="animated fadeInLeft" style="width:80%; height:100vh; background:#fff;"><slot name="drawer"></slot></div>
    </div>
  </transition>

  <!-- header -->
  <div class="p-2" :class="headerClasses" style="position:fixed; top:0px; left:0px; width:100%; z-index:9; box-shadow:0px 0px 25px 5px #00000033;" ref="header">
    <div class="row no-gutters align-items-center">
      <div :class="props.leftClasses">
        <slot name="logo"></slot>
      </div>

      <div :class="props.rightClasses">
        <span class="d-inline-block d-md-none" @click="drawerShow=!drawerShow;">
          <i class="fa fa-fw fa-bars"></i>
        </span>
        <div style="display:inline-block;"><slot name="header"></slot></div>
      </div>
    </div>
  </div>
  <!-- header -->

  <!-- body -->
  <div class="row no-gutters" style="height:100vh;">
    <div :class="props.leftClasses" style="height:100vh; overflow:auto; background:#eee;" :style="'padding-top:'+headerHeight+'px !important;'" ref="drawer">
      <slot name="drawer"></slot>
    </div>

    <div :class="props.rightClasses" style="height:100vh; overflow:auto;" :style="'padding-top:'+headerHeight+'px !important;'">
      <div style="padding:10px;">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
  <!-- body -->
</div></template>

<script>
export default {
  name: 'AppTemplate',
  props: {
    leftClasses: {default:'d-none d-md-block col-3'},
    rightClasses: {default:'col'},
    headerClasses: {default:'bg-light'},
  },

  data() {
    return {
      props: Object.assign({}, this.$props),
      isMobile: false,
      appHeight: 0,
      headerHeight: 0,
      bodyHeight: 0,
      drawerShow: false,
    };
  },

  methods: {
    refreshSizes() {
      this.isMobile = document.body.offsetWidth<=768;
      this.appHeight = this.$el.offsetHeight;
      this.headerHeight = this.$refs.header.offsetHeight;
      this.bodyHeight = this.appHeight-this.headerHeight;
    },
  },

  mounted() {
    this.refreshSizes();
    window.addEventListener('resize', this.refreshSizes);

    this.$el.addEventListener('click', (ev) => {
      var target=ev.target, parent=ev.target.parentNode;
      if ((target && typeof target.dataset.close!='undefined') || (parent && typeof parent.dataset.close!='undefined')) {
        this.drawerShow = false;
      }
    });
  },
};
</script>