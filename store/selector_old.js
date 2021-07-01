import { defaultConfig } from '@/assets/defaultConfig.js'

export const state = () => ({
  selectNodes: [],
  fuelDomain: '',
  fuelMods: [],
  siteInputs: [],
  selectedFuels: [],
  pFDead100Load: 0,
  pFuelDead10Load: 0,
  pFuelDead1Load: 0,
  pFuelDead1Savr: 0,
  pFuelDeadHeat: 0,
  pFuelDeadMext: 0,
  pFuelDepth: 0,
  pFuelLiveHeat: 0,
  pFuelLiveHerbSavr: 0,
  pFuelLiveStemLoad: 0,
  pFuelLiveStemSavr: 0,
  pFuelTotHerbLoad: 0,
  pFuelDeadMoist: 0,
  pFuelLiveMoist: 0,
  windSpeed: 0,
  slopeSteepness: 0,
  defaultDagConfig: defaultConfig.defaultDagConfig
})

export const mutations = {

  'INIT_FUEL_MODELS' (state, payload) {
    state.fuelMods = payload
  },
  'UPDATE_FUEL_PROP' (state, { fuel, prop, payload }) {
    const fuelM = state.fuelMods.find(item => item.code === fuel)
    fuelM[prop] = payload
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

  'INIT_WIND_SPEED' (state, payload) {
    state.windSpeed = payload
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

  'UPDATE_PF_D100L' (state, payload) {
    state.pFuelDead100Load = payload
  },

  'UPDATE_PF_D10L' (state, payload) {
    state.pFuelDead10Load = payload
  },

  'UPDATE_PF_D1L' (state, payload) {
    state.pFuelDead1Load = payload
  },

  'UPDATE_PF_D1Savr' (state, payload) {
    state.pFuelDead1Savr = payload
  },

  'UPDATE_PF_DHeat' (state, payload) {
    state.pFuelDeadHeat = payload
  },

  'UPDATE_PF_DMext' (state, payload) {
    state.pFuelDeadMext = payload
  },

  'UPDATE_PF_Depth' (state, payload) {
    state.pFuelDepth = payload
  },

  'UPDATE_PF_LHeat' (state, payload) {
    state.pFuelLiveHeat = payload
  },

  'UPDATE_PF_LHerbSavr' (state, payload) {
    state.pFuelLiveHerbSavr = payload
  },

  'UPDATE_PF_LStemLoad' (state, payload) {
    state.pFuelLiveStemLoad = payload
  },

  'UPDATE_PF_LStemSavr' (state, payload) {
    state.pFuelLiveStemSavr = payload
  },

  'UPDATE_PF_TotHerbLoad' (state, payload) {
    state.pFuelTotHerbLoad = payload
  },

  'UPDATE_DEAD_FUEL_MOISTURE' (state, payload) {
    state.deadMoisture = payload
  },

  'UPDATE_LIVE_FUEL_MOISTURE' (state, payload) {
    state.liveMoisture = payload
  },

  'UPDATE_WIND_SPEED' (state, payload) {
    state.windSpeed.value = payload
  },

  'UPDATE_SLOPE_STEEPNESS' (state, payload) {
    state.slopeSteepness = payload
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
    commit('UPDATE_DEAD_FUEL_MOISTURE', defaultConfig.defaultDeadMoisture)
    commit('UPDATE_LIVE_FUEL_MOISTURE', defaultConfig.defaultLiveMoisture)
    commit('INIT_WIND_SPEED', defaultConfig.defaultWindSpeed)
    commit('UPDATE_SLOPE_STEEPNESS', defaultConfig.defaultSlopeSteepness)
  },

  initFuelMods: ({ commit }, payload) => {
    console.log('store init fuels')
    commit('INIT_FUEL_MODELS', payload)
  },
  updateFuelProp: ({ commit }, fuel, prop, payload) => {
    commit('UPDATE_FUEL_PROP', fuel, prop, payload)
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
    // commit('UPDATE_PF_D100L', payload.dead100Load)
    // commit('UPDATE_PF_D10L', payload.dead10Load)
    // commit('UPDATE_PF_D1L', payload.dead1Load)
  },

  updatewindSpeed: ({ commit }, payload) => {
    commit('UPDATE_WIND_SPEED', payload)
  },
  updatepFuelDeadMoist: ({ commit }, payload) => {
    commit('UPDATE_DEAD_FUEL_MOISTURE', payload)
  },
  updatepFuelLiveMoist: ({ commit }, payload) => {
    commit('UPDATE_LIVE_FUEL_MOISTURE', payload)
  },
  updateslopeSteepness: ({ commit }, payload) => {
    commit('UPDATE_SLOPE_STEEPNESS', payload)
  },
  updateFuelDomain: ({ commit }, payload) => {
    commit('UPDATE_FUEL_DOMAIN', payload)
  },
  updatepFuelDead100Load: ({ commit }, payload) => {
    commit('UPDATE_PF_D100L', payload)
  },
  updatepFuelDead10Load: ({ commit }, payload) => {
    commit('UPDATE_PF_D10L', payload)
  },
  updatepFuelDead1Load: ({ commit }, payload) => {
    commit('UPDATE_PF_D1L', payload)
  },
  updatepFuelDead1Savr: ({ commit }, payload) => {
    commit('UPDATE_PF_D1Savr', payload)
  },
  updatepFuelDeadHeat: ({ commit }, payload) => {
    commit('UPDATE_PF_DHeat', payload)
  },
  updatepFuelDeadMext: ({ commit }, payload) => {
    commit('UPDATE_PF_DMext', payload)
  },
  updatepFuelDepth: ({ commit }, payload) => {
    commit('UPDATE_PF_Depth', payload)
  },
  updatepFuelLiveHeat: ({ commit }, payload) => {
    commit('UPDATE_PF_LHeat', payload)
  },
  updatepFuelLiveHerbSavr: ({ commit }, payload) => {
    commit('UPDATE_PF_LHerbSavr', payload)
  },
  updatepFuelLiveStemLoad: ({ commit }, payload) => {
    commit('UPDATE_PF_LStemLoad', payload)
  },
  updatepFuelLiveStemSavr: ({ commit }, payload) => {
    commit('UPDATE_PF_LStemSavr', payload)
  },
  updatepFcuredHerbFrac: () => {
  },
  updatepFuelTotHerbLoad: ({ commit }, payload) => {
    commit('UPDATE_PF_TotHerbLoad', payload)
  }
}

export const getters = {
  defaultDagConfig: (state) => {
    return state.defaultDagConfig
  },

  fuelMods: (state) => {
    return state.fuelMods
  },
  fuelMod: state => param => state.fuelMods.find(item => item.code === param),

  siteInputs: (state) => {
    return state.siteInputs
  },
  siteInput: state => param => state.siteInputs.find(item => item.geneLabel === param),

  fuelDomain: (state) => {
    return state.fuelDomain
  },
  selectNodes: (state) => {
    return state.selectNodes
  },
  selectedFuels: (state) => {
    return state.selectedFuels
  },
  pFuelDead100Load: (state) => {
    return state.pFuelDead100Load
  },
  pFuelDead10Load: (state) => {
    return state.pFuelDead10Load
  },
  pFuelDead1Load: (state) => {
    return state.pFuelDead1Load
  },
  pFuelDeadHeat: (state) => {
    return state.pFuelDeadHeat
  },
  pFuelDeadMext: (state) => {
    return state.pFuelDeadMext
  },
  pFuelDepth: (state) => {
    return state.pFuelDepth
  },
  pFuelLiveHeat: (state) => {
    return state.pFuelLiveHeat
  },
  pFuelDead1Savr: (state) => {
    return state.pFuelDead1Savr
  },
  pFuelLiveHerbSavr: (state) => {
    return state.pFuelLiveHerbSavr
  },
  pFuelLiveStemLoad: (state) => {
    return state.pFuelStemLoad
  },
  pFuelLiveStemSavr: (state) => {
    return state.pFuelStemSavr
  },
  pFuelTotHerbLoad: (state) => {
    return state.pFuelTotHerbLoad
  },
  deadMoisture: (state) => {
    return state.deadMoisture
  },
  liveMoisture: (state) => {
    return state.liveMoisture
  },
  windSpeed: (state) => {
    return state.windSpeed
  },
  slopeSteepness: (state) => {
    return state.slopeSteepness
  }
}
