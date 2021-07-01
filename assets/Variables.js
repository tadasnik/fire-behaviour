/**
 * Firescope variables
 */
import { Variant } from './Variants.js'

// Single-fuel surface fire ellipse
export const Config = [
  ['configure.fire.effectiveWindSpeedLimit', ['applied', 'ignored'][1]],
  ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]],
  ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
  ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][0]],
  ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
  ['configure.slope.steepness', ['ratio', 'degrees', 'map'][0]],
  ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][0]],
  ['configure.wind.speed', ['at10m', 'at20ft', 'atMidflame'][2]],
  ['configure.fire.vector', ['fromHead', 'fromUpslope', 'fromNorth'][0]],
  // Less important
  ['configure.fire.firelineIntensity', ['firelineIntensity', 'flameLength'][1]],
  ['configure.fire.lengthToWidthRatio', ['lengthToWidthRatio', 'effectiveWindSpeed'][0]],
  ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
  ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]]
]

// Predefined literals
const backing = 'Backing'
const direction = 'Fire Heading'
const distance = 'Spread Distance'
const ellipse = 'Ellipse'
const flame = 'Flame Length'
const flanking = 'Flanking'
const fli = 'Fireline Intensity'
const fuel = 'Fuel'
const heading = 'Heading'
const hpua = 'Heat per Unit Area'
const moisture = 'Fuel Moisture'
const primary = 'Surface Primary'
const ros = 'Spread Rate'
const rxi = 'Reaction Intensity'
const scorch = 'Scorch Height'
const slope = 'Slope'
const wind = 'Wind'

export const Input = {
  fuelModelCatalogKey: {
    group: fuel,
    label: 'Model Key',
    nodeKey: 'surface.primary.fuel.model.catalogKey',
    variant: Variant.fuelModelKey,
    range: null,
    value: { base: 'gs4' }
  },
  fuelMoistureDead1: {
    group: moisture,
    label: 'Dead 1-h',
    nodeKey: 'site.moisture.dead.tl1h',
    variant: Variant.fuelMoisture,
    range: { min: 0.01, max: 0.4, step: 0.01 },
    value: { base: 0.05 }
  },
  fuelMoistureDead10: {
    group: moisture,
    label: 'Dead 10-h',
    nodeKey: 'site.moisture.dead.tl10h',
    variant: Variant.fuelMoisture,
    range: { min: 0.01, max: 0.4, step: 0.01 },
    value: { base: 0.07 }
  },
  fuelMoistureDead100: {
    group: moisture,
    label: 'Dead 100-h',
    nodeKey: 'site.moisture.dead.tl100h',
    variant: Variant.fuelMoisture,
    range: { min: 0.01, max: 0.4, step: 0.01 },
    value: { base: 0.09 }
  },
  fuelMoistureLiveHerb: {
    group: moisture,
    label: 'Live Herb',
    nodeKey: 'site.moisture.live.herb',
    variant: Variant.fuelMoisture,
    range: { min: 0.3, max: 4, step: 0.1 },
    value: { base: 0.5 }
  },
  fuelMoistureLiveStem: {
    group: moisture,
    label: 'Live Stem',
    nodeKey: 'site.moisture.live.stem',
    variant: Variant.fuelMoisture,
    range: { min: 0.3, max: 4, step: 0.1 },
    value: { base: 0.5 }
  },
  slopeDirectionAspect: {
    group: slope,
    label: 'Aspect',
    nodeKey: 'site.slope.direction.aspect',
    variant: Variant.compassAzimuth,
    range: { min: 0, max: 360, step: 5 },
    value: { base: 225 }
  },
  slopeSteepnessRatio: {
    group: slope,
    label: 'Steepness',
    nodeKey: 'site.slope.steepness.ratio',
    variant: Variant.slopeSteepness,
    range: { min: 0, max: 5, step: 0.05 }, // 0-200%, and 5% is 3 deg
    value: { base: 1 }
  },
  windDirectionSourceFromNorth: {
    group: wind,
    label: 'Source from North',
    nodeKey: 'site.wind.direction.source.fromNorth',
    variant: Variant.compassAzimuth,
    range: { min: 0, max: 360, step: 5 },
    value: { base: 270 }
  },
  windSpeedAtMidflame: {
    group: wind,
    label: 'Speed at Midflame Height',
    nodeKey: 'site.wind.speed.atMidflame',
    variant: Variant.windSpeed,
    range: { min: 0, max: 40 * 88, step: 88 },
    value: { base: 880 }
  },
  airTemperature: {
    group: 'Air',
    label: 'Temperature',
    nodeKey: 'site.temperature.air',
    variant: Variant.temperature,
    range: { min: 30, max: 120, step: 5 },
    value: { base: 75 }
  },
  timeSinceIgnition: {
    group: 'Time',
    label: 'Since Ignition',
    nodeKey: 'site.fire.time.sinceIgnition',
    variant: Variant.fireTime,
    range: { min: 0, max: 24 * 60, step: 15 },
    value: { base: 60 }
  }
}

// Output tables list properties in their order
export const Output = {
  fireArea: {
    group: ellipse,
    label: 'Area',
    nodeKey: 'surface.fire.ellipse.size.area',
    variant: Variant.fireArea,
    value: { base: 0 }
  },
  firePerimeter: {
    group: ellipse,
    label: 'Perimeter',
    nodeKey: 'surface.fire.ellipse.size.perimeter',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  lengthToWidthRatio: {
    group: ellipse,
    label: 'Length/Width Ratio',
    nodeKey: 'surface.weighted.fire.lengthToWidthRatio',
    variant: Variant.fireLengthToWidthRatio,
    value: { base: 1 }
  },
  fireLength: {
    group: ellipse,
    label: 'Length',
    nodeKey: 'surface.fire.ellipse.size.length',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  fireWidth: {
    group: ellipse,
    label: 'Width',
    nodeKey: 'surface.fire.ellipse.size.width',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  fireHeadingFromNorth: {
    group: direction,
    label: 'from North',
    nodeKey: 'surface.weighted.fire.heading.fromNorth',
    variant: Variant.compassAzimuth,
    value: { base: 0 }
  },
  fireHeadingFromUpslope: {
    group: direction,
    label: 'from Upslope',
    nodeKey: 'surface.weighted.fire.heading.fromUpslope',
    variant: Variant.compassAzimuth,
    value: { base: 0 }
  },
  headingSpreadRate: {
    group: heading,
    label: ros,
    nodeKey: 'surface.fire.ellipse.head.spreadRate',
    variant: Variant.fireSpreadRate,
    value: { base: 0 }
  },
  headingSpreadDistance: {
    group: heading,
    label: distance,
    nodeKey: 'surface.fire.ellipse.head.spreadDistance',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  headingFlameLength: {
    group: heading,
    label: flame,
    nodeKey: 'surface.fire.ellipse.head.flameLength',
    variant: Variant.fireFlameLength,
    value: { base: 0 }
  },
  headingScorchHeight: {
    group: heading,
    label: scorch,
    nodeKey: 'surface.fire.ellipse.head.scorchHeight',
    variant: Variant.fireScorchHt,
    value: { base: 0 }
  },
  flankingSpreadRate: {
    group: flanking,
    label: ros,
    nodeKey: 'surface.fire.ellipse.flank.spreadRate',
    variant: Variant.fireSpreadRate,
    value: { base: 0 }
  },
  flankingSpreadDistance: {
    group: flanking,
    label: distance,
    nodeKey: 'surface.fire.ellipse.flank.spreadDistance',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  flankingFlameLength: {
    group: flanking,
    label: flame,
    nodeKey: 'surface.fire.ellipse.flank.flameLength',
    variant: Variant.fireFlameLength,
    value: { base: 0 }
  },
  flankingScorchHeight: {
    group: flanking,
    label: scorch,
    nodeKey: 'surface.fire.ellipse.flank.scorchHeight',
    variant: Variant.fireScorchHt,
    value: { base: 0 }
  },
  backingSpreadRate: {
    group: backing,
    label: ros,
    nodeKey: 'surface.fire.ellipse.back.spreadRate',
    variant: Variant.fireSpreadRate,
    value: { base: 0 }
  },
  backingFlameLength: {
    group: backing,
    label: flame,
    nodeKey: 'surface.fire.ellipse.back.flameLength',
    variant: Variant.fireFlameLength,
    value: { base: 0 }
  },
  backingSpreadDistance: {
    group: backing,
    label: distance,
    nodeKey: 'surface.fire.ellipse.back.spreadDistance',
    variant: Variant.fireDistance,
    value: { base: 0 }
  },
  backingScorchHeight: {
    group: backing,
    label: scorch,
    nodeKey: 'surface.fire.ellipse.back.scorchHeight',
    variant: Variant.fireScorchHt,
    value: { base: 0 }
  },
  spreadRate: {
    group: primary,
    label: ros,
    nodeKey: 'surface.weighted.fire.spreadRate',
    variant: Variant.fireSpreadRate,
    value: { base: 0 }
  },
  reactionIntensity: {
    group: primary,
    label: rxi,
    nodeKey: 'surface.weighted.fire.reactionIntensity',
    variant: Variant.fireReactionIntensity,
    value: { base: 0 }
  },
  firelineIntensity: {
    group: primary,
    label: fli,
    nodeKey: 'surface.weighted.fire.firelineIntensity',
    variant: Variant.fireFirelineIntensity,
    value: { base: 0 }
  },
  flameLength: {
    group: primary,
    label: flame,
    nodeKey: 'surface.weighted.fire.flameLength',
    variant: Variant.fireFlameLength,
    value: { base: 0 }
  },
  heatPerUnitArea: {
    group: primary,
    label: hpua,
    nodeKey: 'surface.weighted.fire.heatPerUnitArea',
    variant: Variant.fireHeatPerUnitArea,
    value: { base: 0 }
  },
  scorchHeight: {
    group: primary,
    label: scorch,
    nodeKey: 'surface.weighted.fire.scorchHeight',
    variant: Variant.fireScorchHt,
    value: { base: 0 }
  },
  curedHerbFraction: {
    group: fuel,
    label: 'Cured Herb Fraction',
    nodeKey: 'surface.primary.fuel.model.behave.parms.cured.herb.fraction',
    variant: Variant.fuelFraction,
    range: { min: 0, max: 1, step: 0.01 },
    value: { base: 0 }
  }
}
