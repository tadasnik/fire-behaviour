import { defaultConfig } from '@/assets/defaultConfig.js'

export const state = () => ({
  outputNodes: {},
  fuelDomain: '',
  fuelModels: {},
  siteInputs: {},
  results: {},
  defaultDagConfig: defaultConfig.defaultDagConfig
})

export const mutations = {

  'INIT_FUEL_MODELS' (state, payload) {
    state.fuelModels = payload
  },

  'UPDATE_FUEL_PROP' (state, { fuel, param, payload }) {
    state.fuelModels[fuel][param] = payload
  },

  'INIT_SITE_INPUTS' (state, payload) {
    state.siteInputs = payload
  },

  'INIT_OUTPUT_NODES' (state, payload) {
    state.outputNodes = payload
  },

  'INIT_RESULTS' (state) {
    const results = {}
    Object.keys(state.outputNodes).forEach((key) => {
      results[key] = {}
      Object.keys(state.fuelModels).forEach((fuel) => {
        results[key][fuel] = []
      })
    })
    state.results = results
  },

  'UPDATE_RESULTS' (state, { output, fuel, payload }) {
    state.results[output][fuel] = payload
  },

  'UPDATE_SITE_INPUT_PROP' (state, { input, prop, payload }) {
    state.siteInputs[input][prop] = payload
  },

  'UPDATE_FUEL_DOMAIN' (state, payload) {
    state.fuelDomain = payload
  }
}

export const actions = {

  initConfig: ({ commit }) => {
    commit('UPDATE_FUEL_DOMAIN', defaultConfig.defaultFuelDomain)
    commit('INIT_RESULTS')
  },

  initFuelModels: ({ commit }, payload) => {
    commit('INIT_FUEL_MODELS', payload)
  },

  updateFuelProp: ({ commit }, fuel, param, payload) => {
    commit('UPDATE_FUEL_PROP', fuel, param, payload)
  },

  initSiteInputs: ({ commit }, payload) => {
    commit('INIT_SITE_INPUTS', payload)
  },

  updateSiteInputProp: ({ commit }, input, prop, payload) => {
    commit('UPDATE_SITE_INPUT_PROP', input, prop, payload)
  },

  initOutputNodes: ({ commit }, payload) => {
    commit('INIT_OUTPUT_NODES', payload)
  },

  updateResults: ({ commit }, output, fuel, payload) => {
    commit('UPDATE_RESULTS', output, fuel, payload)
  }
}

export const getters = {
  defaultDagConfig: (state) => {
    return state.defaultDagConfig
  },

  fuelModels: (state) => {
    return state.fuelModels
  },

  siteInputs: (state) => {
    return state.siteInputs
  },

  fuelDomain: (state) => {
    return state.fuelDomain
  },
  outputNodes: (state) => {
    return state.outputNodes
  },
  results: (state) => {
    return state.results
  }
}
