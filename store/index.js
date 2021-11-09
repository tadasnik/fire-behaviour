export const state = () => ({
  fuelModelsUK: {},
  token: null
})

export const mutations = {

  'SET_TOKEN' (state, token) {
    state.token = token
  },

  'CLEAR_TOKEN' (state) {
    state.token = null
  },

  'ADD_FUEL' (state, payload) {
    state.fuelModelsUK[payload.code] = payload
  },

  'EDIT_FUEL' (state, editedFuel) {
    // const fuelIndex = state.fuelModelsUK.findIndex(fuel => fuel.id === editedFuel.id)
    state.fuelModelsUK[editedFuel] = editedFuel
  },

  'INIT_FUELS_UK' (state, payload) {
    state.fuelModelsUK = payload
  }

}

export const actions = {

  async nuxtServerInit (vuexContext, context) {
    console.log('store server init')
    const data = await context.app.$http.$get('/fuelsUK.json')
    const fuelsObject = {}
    for (const key in data) {
      fuelsObject[data[key].code] = { ...data[key], id: key }
    }
    vuexContext.commit('INIT_FUELS_UK', fuelsObject)
  },

  async authenticateUser ({ commit }, authData) {
    let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.firebaseKey
    if (!authData.isLogin) {
      authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.firebaseKey
    }
    try {
      const result = await this.$http
        .$post(authUrl, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
      commit('SET_TOKEN', result.idToken)
      // set localStorage values for access from client
      localStorage.setItem('token', result.idToken)
      const expirationDate = new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
      localStorage.setItem('tokenExpiration', expirationDate)
      // set cookie values as well for if needed on server
      this.app.$cookies.set('ssrToken', result.idToken)
      this.app.$cookies.set('ssrExpiration', expirationDate)
    } catch (e) {
      console.log(e)
    }
  },

  initAuth ({ commit, dispatch }, req) {
    // if request (server) try to extract token and expirationDate from cookie
    let token
    let expirationDate
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const ssrToken = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('ssrToken='))
      if (!ssrToken) {
        return
      }
      token = ssrToken.split('=')[1]
      expirationDate = req.headers.cookie
        .split(';')
        .find(c => c.trim().startsWith('ssrExpiration='))
        .split('=')[1]
    } else {
      // Otherwise if on client, get token and expirationDate from localStorage
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
    }
    if (new Date().getTime() > expirationDate || !token) {
      console.log('initAuth no or invalid token')
      dispatch('logout')
      return
    }
    commit('SET_TOKEN', token)
  },

  logout ({ commit }) {
    console.log('store logout')
    commit('CLEAR_TOKEN')
    this.app.$cookies.remove('ssrToken')
    this.app.$cookies.remove('ssrExpiration')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
    }
  },

  async addFuel ({ commit, state }, payload) {
    const newFuel = { ...payload.fuel, updatedDate: new Date() }
    const postAction = await this.$http.$post('/' + payload.key + '.json?auth=' + state.token, newFuel)
    commit('ADD_FUEL', { ...newFuel, id: postAction.name })
  },

  editFuel ({ commit, state }, payload) {
    const editedFuel = { ...payload.fuel, updatedDate: new Date() }
    console.log('store editing', '/' + payload.key + '/' + payload.fuel.id)
    this.$http.put('/' + payload.key + '/' + payload.fuel.id +
      '.json?auth=' + state.token, editedFuel)
    commit('EDIT_FUEL', payload)
  }
}

export const getters = {

  isAuthenticated: (state) => {
    return state.token != null
  },

  fuelModelsUK: (state) => {
    return state.fuelModelsUK
  }

}
