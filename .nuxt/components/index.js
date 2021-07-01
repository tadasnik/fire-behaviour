import { wrapFunctional } from './utils'

export { default as BarPlot } from '../../components/BarPlot.vue'
export { default as BoxPlot } from '../../components/BoxPlot.vue'
export { default as Card } from '../../components/Card.vue'
export { default as Echarboxplot } from '../../components/Echarboxplot.vue'
export { default as Echars } from '../../components/Echars.vue'
export { default as FuelControl } from '../../components/FuelControl.vue'
export { default as FuelProps } from '../../components/FuelProps.vue'
export { default as InputProps } from '../../components/InputProps.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as SelectOption } from '../../components/SelectOption.vue'
export { default as Slider } from '../../components/Slider.vue'

export const LazyBarPlot = import('../../components/BarPlot.vue' /* webpackChunkName: "components/bar-plot" */).then(c => wrapFunctional(c.default || c))
export const LazyBoxPlot = import('../../components/BoxPlot.vue' /* webpackChunkName: "components/box-plot" */).then(c => wrapFunctional(c.default || c))
export const LazyCard = import('../../components/Card.vue' /* webpackChunkName: "components/card" */).then(c => wrapFunctional(c.default || c))
export const LazyEcharboxplot = import('../../components/Echarboxplot.vue' /* webpackChunkName: "components/echarboxplot" */).then(c => wrapFunctional(c.default || c))
export const LazyEchars = import('../../components/Echars.vue' /* webpackChunkName: "components/echars" */).then(c => wrapFunctional(c.default || c))
export const LazyFuelControl = import('../../components/FuelControl.vue' /* webpackChunkName: "components/fuel-control" */).then(c => wrapFunctional(c.default || c))
export const LazyFuelProps = import('../../components/FuelProps.vue' /* webpackChunkName: "components/fuel-props" */).then(c => wrapFunctional(c.default || c))
export const LazyInputProps = import('../../components/InputProps.vue' /* webpackChunkName: "components/input-props" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazySelectOption = import('../../components/SelectOption.vue' /* webpackChunkName: "components/select-option" */).then(c => wrapFunctional(c.default || c))
export const LazySlider = import('../../components/Slider.vue' /* webpackChunkName: "components/slider" */).then(c => wrapFunctional(c.default || c))
