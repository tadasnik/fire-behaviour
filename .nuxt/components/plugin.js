import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BarPlot: () => import('../../components/BarPlot.vue' /* webpackChunkName: "components/bar-plot" */).then(c => wrapFunctional(c.default || c)),
  BoxPlot: () => import('../../components/BoxPlot.vue' /* webpackChunkName: "components/box-plot" */).then(c => wrapFunctional(c.default || c)),
  Card: () => import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c)),
  Echarboxplot: () => import('../../components/Echarboxplot.vue' /* webpackChunkName: "components/echarboxplot" */).then(c => wrapFunctional(c.default || c)),
  Echars: () => import('../../components/Echars.vue' /* webpackChunkName: "components/echars" */).then(c => wrapFunctional(c.default || c)),
  FuelControl: () => import('../../components/FuelControl.vue' /* webpackChunkName: "components/fuel-control" */).then(c => wrapFunctional(c.default || c)),
  FuelProps: () => import('../../components/FuelProps.vue' /* webpackChunkName: "components/fuel-props" */).then(c => wrapFunctional(c.default || c)),
  InputProps: () => import('../../components/InputProps.vue' /* webpackChunkName: "components/input-props" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  SelectOption: () => import('../../components/SelectOption.vue' /* webpackChunkName: "components/select-option" */).then(c => wrapFunctional(c.default || c)),
  Slider: () => import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
