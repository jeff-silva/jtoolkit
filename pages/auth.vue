<template><div>
	
	<form v-if="query.form=='login'" @submit.prevent="loginSubmit();">
		<div class="alert alert-success" v-if="login.success" v-html="login.success"></div>
		<div class="alert alert-danger" v-if="login.danger" v-html="login.danger"></div>

		<div class="form-group">
			<label>Login</label>
			<input type="text" class="form-control" v-model="login.post.email">
		</div>

		<div class="form-group">
			<label>Senha</label>
			<input type="password" class="form-control" v-model="login.post.pass">
		</div>

		<div class="row">
			<div class="col">
				<button type="submit" class="btn btn-primary btn-block">
					<i class="fa fa-fw fa-spin fa-spinner" v-if="login.loading"></i>
					<span v-else>Login</span>
				</button>
			</div>
		</div>
	</form>

	<form v-if="query.form=='register'" @submit.prevent="registerSubmit();">
		<div class="alert alert-success" v-if="register.success" v-html="register.success"></div>
		<div class="alert alert-danger" v-if="register.danger" v-html="register.danger"></div>
		<div class="form-group">
			<label>Email</label>
			<input type="text" class="form-control" v-model="register.post.email">
		</div>

		<div class="form-group">
			<label>Senha</label>
			<input type="password" class="form-control" v-model="register.post.pass">
		</div>

		<div class="row">
			<div class="col">
				<button type="submit" class="btn btn-primary btn-block">
					<i class="fa fa-fw fa-spin fa-spinner" v-if="register.loading"></i>
					<span v-else>Register</span>
				</button>
			</div>
		</div>
	</form>

	<form v-if="query.form=='password'" @submit.prevent="passwordSubmit();">
		<div class="form-group">
			<label>Email</label>
			<input type="text" class="form-control">
		</div>

		<div class="form-group">
			<label>Code</label>
			<input type="text" class="form-control">
		</div>

		<div class="form-group">
			<label>Password</label>
			<input type="password" class="form-control">
		</div>

		<div class="form-group">
			<label>Repeat Password</label>
			<input type="password" class="form-control">
		</div>

		<div class="row">
			<div class="col">
				<button type="submit" class="btn btn-primary btn-block">
					<i class="fa fa-fw fa-spin fa-spinner" v-if="password.loading"></i>
					<span v-else>Password</span>
				</button>
			</div>
		</div>
	</form>

	<br>
	<div class="row">
		<div class="col">
			<nuxt-link class="btn btn-link btn-sm btn-block" :to="{query:{form:'login'}}">
				Login
			</nuxt-link>
		</div>

		<div class="col">
			<nuxt-link class="btn btn-link btn-sm btn-block" :to="{query:{form:'register'}}">
				Register
			</nuxt-link>
		</div>

		<div class="col">
			<nuxt-link class="btn btn-link btn-sm btn-block" :to="{query:{form:'password'}}">
				Password
			</nuxt-link>
		</div>
	</div>

  <!--
  <pre>$store.state.auth: {{ $store.state.auth }}</pre>
  <pre>$data: {{ $data }}</pre>
  -->
</div></template>

<script>
import firebase from 'firebase';

export default {
  components: {},

  data() {
  	return {
  		query: Object.assign({
  			form: 'login',
  		}, this.$route.query),

  		login: {
  			loading: false,
  			danger: false,
  			success: false,
  			post: this.loginDefault(),
  		},

  		register: {
  			loading: false,
  			danger: false,
  			success: false,
  			post: this.registerDefault(),
  		},

  		password: {
  			loading: false,
  			danger: false,
  			success: false,
  			post: this.passwordDefault(),
  		},
  	};
  },

  methods: {
  	loginDefault() {
  		return {
  			email: '',
  			pass: '',
  		};
  	},

  	loginSubmit() {
  		this.login.loading = true;
  		this.login.danger = false;
  		this.login.success = false;

  		var _response = (user, error) => {
			this.login.loading = false;
			this.login.success = false;
			if (error) { return this.login.danger = error.message; }
			this.login.success = 'Usuário logado';
  		};

		this.$store.dispatch('auth/login', this.login.post)
			.then((user) => { _response(user, false); })
			.catch((err) => { _response(false, err); });
  	},

  	registerDefault() {
  		return {
  			email: '',
  			pass: '',
  		};
  	},

  	registerSubmit() {
  		var post = this.register.post;

  		this.register.loading = true;
  		this.register.danger = false;
		firebase.auth().createUserWithEmailAndPassword(post.email, post.pass)
			.then((user) => {
				this.register.loading = false;
				this.register.success = 'Usuário registrado!';
				this.register.post = this.registerDefault();
			})
			.catch((error) => {
				this.register.loading = false;
				this.register.danger = error.message;
			});
  	},

  	passwordDefault() {
  		return {
  			email: '',
  			pass: '',
  		};
  	},

  	passwordSubmit() {
  		alert('passwordSubmit');
  	},
  },

  watch: {
  	$route: {
  		deep: true,
  		handler(to, from) {
  			this.query = to.query;
  		},
  	},
  },

  mounted() {
  	// 
  },
}
</script>