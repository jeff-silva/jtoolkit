import firebase from 'firebase';

export const state = () => ({
	loading: false,
	error: false,
	user: JSON.parse(localStorage.getItem('auth-user')),
});

export const mutations = {
	loading(state, loading) {
		state.loading = loading;
	},

	error(state, error) {
		state.error = error;
	},

	user(state, user) {
		state.user = user;
	},
};


export const actions = {
	login({ commit, state }, post) {
		return new Promise((resolve, reject) => {
			post = Object.assign({email:'', pass:''}, post||{});
			commit('loading', true);
			commit('error', false);
			firebase.auth().signInWithEmailAndPassword(post.email, post.pass).then((user) => {
				commit('loading', false);
				commit('user', user.user.providerData[0]);
				localStorage.setItem('auth-user', JSON.stringify(user));
			}).catch((err) => {
				commit('loading', false);
				commit('error', err.message);
			});
		});
	},

	register({ commit, state }, post) {
		return new Promise((resolve, reject) => {
			post = Object.assign({email:'', pass:''}, post||{});
			commit('loading', true);
			commit('error', false);

			firebase.auth().createUserWithEmailAndPassword(post.email, post.pass).then((user) => {
				commit('loading', false);
				commit('user', user.user.providerData[0]);
				localStorage.setItem('auth-user', JSON.stringify(user));
			}).catch((err) => {
				commit('loading', false);
				commit('error', err.message);
			});
		});
	},

	logout({ commit, state }) {
		commit('loading', true);
		firebase.auth().signOut()
			.then(() => {
				commit('loading', false);
				commit('user', false);
				localStorage.removeItem('auth-user');
			})
			.catch((err) => {
				commit('loading', false);
			});
	},

	check({ commit, state }) {
		return new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					resolve(user, null);
				}
				else {
					reject({message:'User not logged in.'});
				}
			});
		});
	},
};