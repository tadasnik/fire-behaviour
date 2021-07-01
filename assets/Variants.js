/**
 * Defines all the variants used by Firescope.
 * These shadow the behaveplus-radical Variants.
 */
// Variant units-of-measure
export const Units = {
  base: 'base', //  ft, lb, btu, min, ratio
  usc: 'US Customary', //  ft, lb, btu, min, percent
  uss: 'US Surveyor', //  ft, lb, btu, min, percent
  sim: 'SI (metric)' // m, kg, J, min, percent
}

const quantity = 'Quantity'
const option = 'Option'

export const Variant = {
  compassAzimuth: {
    type: quantity,
    units: { base: 'deg', usc: 'deg', uss: 'deg', sim: 'deg' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  fireArea: {
    type: quantity,
    units: { base: 'ft2', usc: 'ac', uss: 'ac', sim: 'ha' },
    decimals: { base: 0, usc: 2, uss: 2, sim: 2 }
  },
  fireDistance: {
    type: quantity,
    units: { base: 'ft', usc: 'ft', uss: 'ch', sim: 'm' },
    decimals: { base: 0, usc: 2, uss: 2, sim: 0 }
  },
  fireHeatPerUnitArea: {
    type: quantity,
    units: { base: 'btu/ft2', usc: 'btu/ft2', uss: 'btu/ft2', sim: 'J/m2' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  fireFirelineIntensity: {
    type: quantity,
    units: { base: 'btu/ft/s', usc: 'btu/ft/s', uss: 'btu/ft/s', sim: 'J/m/s' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  fireFlameLength: {
    type: quantity,
    units: { base: 'ft', usc: 'ft', uss: 'ft', sim: 'm' },
    decimals: { base: 2, usc: 2, uss: 2, sim: 2 }
  },
  fireLengthToWidthRatio: {
    type: quantity,
    units: { base: 'ratio', usc: 'ratio', uss: 'ratio', sim: 'ratio' },
    decimals: { base: 2, usc: 2, uss: 2, sim: 2 }
  },
  fireReactionIntensity: {
    type: quantity,
    units: { base: 'btu/ft2/min', usc: 'btu/ft2/min', uss: 'btu/ft2/min', sim: 'J/m2/min' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  fireScorchHt: {
    type: quantity,
    units: { base: 'ft', usc: 'ft', uss: 'ft', sim: 'm' },
    decimals: { base: 2, usc: 2, uss: 2, sim: 2 }
  },
  fireSpreadRate: {
    type: quantity,
    units: { base: 'ft/min', usc: 'ft/min', uss: 'ch/h', sim: 'm/min' },
    decimals: { base: 2, usc: 2, uss: 2, sim: 2 }
  },
  fireTime: {
    type: quantity,
    units: { base: 'min', usc: 'h', uss: 'h', sim: 'h' },
    decimals: { base: 0, usc: 2, uss: 2, sim: 2 }
  },
  fuelFraction: { // cured fraction, cover fraction
    type: quantity,
    units: { base: 'ratio', usc: '%', uss: '%', sim: '%' },
    decimals: { base: 2, usc: 0, uss: 0, sim: 0 }
  },
  fuelModelKey: {
    type: option
  },
  fuelMoisture: {
    type: quantity,
    units: { base: 'ratio', usc: '%', uss: '%', sim: '%' },
    decimals: { base: 2, usc: 0, uss: 0, sim: 0 }
  },
  slopeSteepness: {
    type: quantity,
    units: { base: 'ratio', usc: '%', uss: '%', sim: '%' },
    decimals: { base: 2, usc: 0, uss: 0, sim: 0 }
  },
  temperature: {
    type: quantity,
    units: { base: 'F', usc: 'F', uss: 'F', sim: 'C' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  },
  windSpeed: {
    type: quantity,
    units: { base: 'ft/min', usc: 'mi/h', uss: 'mi/h', sim: 'km/h' },
    decimals: { base: 0, usc: 0, uss: 0, sim: 0 }
  }
}
