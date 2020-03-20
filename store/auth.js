import firebase from 'firebase';

export const state = () => ({
	user: JSON.parse(localStorage.getItem('auth-user')),
});

export const mutations = {
  set(state, payload) {
	state.user = payload.user;
  },
};

export const actions = {
	login({ commit, state }, post) {
		post = Object.assign({email:'', pass:''}, post||{});
		return new Promise((resolve, reject) => {
			firebase.auth().signInWithEmailAndPassword(post.email, post.pass)
				.then((user) => {
					resolve(user);
					commit('set', {user:user});
					localStorage.setItem('auth-user', JSON.stringify(user));
				})
				.catch((err) => { reject(err); });
		});
	},

  logout({ commit, state }) {
	return new Promise((resolve, reject) => {
	  firebase.auth().signOut()
		.then(() => {
		  commit('LOGOUT');
		  resolve(true, null);
		})
		.catch((err) => {
		  reject(null, 'Error');
		});
	});
  },

  check({ commit, state }) {
	return new Promise((resolve, reject) => {
	  firebase.auth().onAuthStateChanged((user) => {
		if (user) {
		  resolve(user, null);
		} else {
		  reject({message:'User not logged in.'});
		}
	  });
	});
  },
};