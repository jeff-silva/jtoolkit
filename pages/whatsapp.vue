<template><div>
	<form action="https://api.whatsapp.com/send" method="get" target="_blank" @submit="submit();">
		<div class="form-group">
			<label>Telefone</label>
			<div class="input-group">
				<input type="tel" name="phone" class="form-control" ref="phone" placeholder="+55 (31) 98765-4321">
				<div class="input-group-btn">
					<button type="submit" class="btn btn-primary">
						<i class="fa fa-fw fa-send"></i>
					</button>
				</div>
			</div>
		</div>
	</form>
</div></template>

<script>
import AppActions from '~/components/AppActions.vue';

export default {
  components: {
  	AppActions,
  },

  methods: {
  	submit() {
  		this.$refs.phone.value = this.$refs.phone.value.replace(/[^0-9]/gi, '');
  	},
  },
}
</script>