import { defaultConfig } from '@/assets/defaultConfig.js'

export const state = () => ({
  outputNodes: {},
  fuelDomain: '',
  fuelModels: {},
  siteInputs: {},
  canopyInputs: {},
  results: {},
  rangeInput: 'windSpeed',
  rangeOutput: 'fireFlameLength',
  selectedFuels: ['tl3', 'sh6', 'sh8', 'gr3', 'gr6'],
  selectedOutputs: ['fireFlameLength', 'fireSpreadRate'],
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

  'INIT_CANOPY_INPUTS' (state, payload) {
    state.canopyInputs = payload
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

  'UPDATE_RANGE_INPUT' (state, payload) {
    state.rangeInput = payload
  },

  'UPDATE_RANGE_OUTPUT' (state, payload) {
    state.rangeOutput = payload
  },
  'UPDATE_RESULTS' (state, { output, fuel, payload }) {
    state.results[output][fuel] = payload
  },

  'UPDATE_SITE_INPUT_PROP' (state, { input, prop, payload }) {
    state.siteInputs[input][prop] = payload
  },

  'UPDATE_CANOPY_INPUT_PROP' (state, { input, prop, payload }) {
    state.canopyInputs[input][prop] = payload
  },
  'UPDATE_FUEL_DOMAIN' (state, payload) {
    state.fuelDomain = payload
  },

  'UPDATE_SELECTED_OUTPUTS' (state, { key, payload, single }) {
    if (single) {
      state.selectedOutputs = [key]
    } else if (payload !== true) {
      const index = state.selectedOutputs.indexOf(key)
      if (index > -1) {
        state.selectedOutputs.splice(index, 1)
      }
    } else {
      state.selectedOutputs.push(key)
    }
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

  updateRangeInput: ({ commit }, payload) => {
    console.log('store range input', payload)
    commit('UPDATE_RANGE_INPUT', payload)
  },

  updateRangeOutput: ({ commit }, payload) => {
    commit('UPDATE_RANGE_OUTPUT', payload)
  },

  updateFuelProp: ({ commit }, fuel, param, payload) => {
    commit('UPDATE_FUEL_PROP', fuel, param, payload)
  },

  initSiteInputs: ({ commit }, payload) => {
    commit('INIT_SITE_INPUTS', payload)
  },

  initCanopyInputs: ({ commit }, payload) => {
    commit('INIT_CANOPY_INPUTS', payload)
  },

  updateSelectedOutputs: ({ commit }, label, payload, single) => {
    commit('UPDATE_SELECTED_OUTPUTS', label, payload, single)
  },

  updateSiteInputProp: ({ commit }, input, prop, payload) => {
    commit('UPDATE_SITE_INPUT_PROP', input, prop, payload)
  },

  updateCanopyInputProp: ({ commit }, input, prop, payload) => {
    commit('UPDATE_CANOPY_INPUT_PROP', input, prop, payload)
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
  canopyInputs: (state) => {
    return state.canopyInputs
  },
  fuelDomain: (state) => {
    return state.fuelDomain
  },
  outputNodes: (state) => {
    return state.outputNodes
  },
  results: (state) => {
    return state.results
  },
  rangeInput: (state) => {
    return state.rangeInput
  },
  rangeOutput: (state) => {
    return state.rangeOutput
  },
  selectedFuels: (state) => {
    return state.selectedFuels
  },
  selectedOutputs: (state) => {
    return state.selectedOutputs
  }

}
