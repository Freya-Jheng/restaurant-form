import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  // 類似component裡面的data，但是可以在每一個component使用，而data僅限於當前的component
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
  },
  // 如想要更改state的話，要在這邊做設定
  mutations: {
    // 這裡有兩個參數，第一個參數是vuex裡面的state；第二個參數則是會從外面傳過來的
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  // 設定其他非同步函數，ex：串接API
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        // 在這裡採用usersAPI裡面getCurrentUser()
        const { data } = await usersAPI.getCurrentUser()

        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {

  }
})
