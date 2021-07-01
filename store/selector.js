import { defaultConfig } from '@/assets/defaultConfig.js'

export const state = () => ({
  selectNodes: [],
  fuelDomain: '',
  fuelModels: [],
  siteInputs: [],
  selectedFuels: [],
  defaultDagConfig: defaultConfig.defaultDagConfig
})

export const mutations = {

  'INIT_FUEL_MODELS' (state, payload) {
    state.fuelModels = payload
  },
  'UPDATE_FUEL_PROP' (state, { fuel, prop, value }) {
    console.log('store ', fuel, prop, value)
    const fuelM = state.fuelModels.find(item => item.code === fuel)
    fuelM[prop] = value
    console.log('store ', fuelM[prop])
  },

  'INIT_SITE_INPUTS' (state, payload) {
    state.siteInputs = payload
  },
  'UPDATE_SITE_INPUTS_PROP' (state, { geneLabel, payload }) {
    console.log('store', geneLabel)
    console.log('store', payload)
    const siteI = state.siteInputs.find(item => item.geneLabel === geneLabel)
    siteI.value = payload
  },

  'UPDATE_SELECTED_NODES' (state, payload) {
    state.selectNodes = payload
  },

  'REMOVE_SELECTED_FUEL' (state, payload) {
    const index = state.selectedFuels.indexOf(payload)
    console.log('store', index)
    if (index > -1) {
      state.selectedFuels.splice(index, 1)
    }
  },

  'INIT_SELECTED_FUEL' (state, payload) {
    state.selectedFuels = payload
  },

  'ADD_SELECTED_FUEL' (state, payload) {
    state.selectedFuels.push(payload)
  },

  'UPDATE_FUEL_DOMAIN' (state, payload) {
    state.fuelDomain = payload
  }
}

export const actions = {
  initConfig: ({ commit }) => {
    commit('UPDATE_FUEL_DOMAIN', defaultConfig.defaultFuelDomain)
    console.log('store def fuels', defaultConfig.defaultPrimaryFuel)
    commit('INIT_SELECTED_FUEL', defaultConfig.defaultPrimaryFuel)
    commit('UPDATE_SELECTED_NODES', defaultConfig.defaultNodes)
  },

  initFuelModels: ({ commit }, payload) => {
    console.log('store init fuels')
    commit('INIT_FUEL_MODELS', payload)
  },
  updateFuelProp: ({ commit }, fuel, prop, value) => {
    commit('UPDATE_FUEL_PROP', fuel, prop, value)
  },
  addSelectedFuel: ({ commit }, payload) => {
    commit('ADD_SELECTED_FUEL', payload)
  },
  removeSelectedFuel: ({ commit }, payload) => {
    commit('REMOVE_SELECTED_FUEL', payload)
  },

  initSiteInputs: ({ commit }, payload) => {
    commit('INIT_SITE_INPUTS', payload)
  },
  updateSiteInputsProp: ({ commit }, geneLabel, payload) => {
    commit('UPDATE_SITE_INPUTS_PROP', geneLabel, payload)
  },

  updateSelectedPrimaryFuel: ({ commit }, payload) => {
    commit('UPDATE_SELECTED_PRIMARY_FUEL', payload)
  }
}

export const getters = {
  defaultDagConfig: (state) => {
    return state.defaultDagConfig
  },

  fuelModels: (state) => {
    return state.fuelModels
  },
  fuelMod: state => param => state.fuelModels.find(item => item.code === param),

  siteInputs: (state) => {
    return state.siteInputs
  },
  siteInput: state => param => state.siteInputs.find(item => item.geneLabel === param).value,

  fuelDomain: (state) => {
    return state.fuelDomain
  },
  selectNodes: (state) => {
    return state.selectNodes
  },
  selectedFuels: (state) => {
    return state.selectedFuels
  }
}
