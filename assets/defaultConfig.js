export const defaultConfig = {
  defaultNodes: ['surface.weighted.fire.spreadRate',
    'surface.weighted.fire.flameLength'],
  defaultOutputs: ['fireSpreadRate', 'fireFlameLength'],
  defaultDagConfig: [
    // The primary fuel is specified by a fuel model catalog key
    ['configure.fuel.primary', ['catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
    // There are no secondary fuels
    ['configure.fuel.secondary', ['none', 'catalog', 'behave', 'chaparral', 'palmettoGallberry', 'westernAspen'][0]],
    // Fuel moistures are entered by dead and live category
    ['configure.fuel.moisture', ['individual', 'liveCategory', 'category', 'catalog'][2]],
    // Cured herb fraction is estimated from herb moisture, rather than directly input
    ['configure.fuel.curedHerbFraction', ['input', 'estimated'][1]],
    // Wind speed is at midflame height
    ['configure.wind.speed', 'at10m'],
    // Wind direction is assumed to be upslope
    ['configure.wind.direction', ['sourceFromNorth', 'headingFromUpslope', 'upslope'][2]],
    // Slope steepness is entered as the ratio of vertical rise / horizontal reach
    ['configure.slope.steepness', ['ratio', 'degrees', 'map'][1]],
    // The following is mute since midflame windspeed is being entered directly
    ['configure.fuel.windSpeedAdjustmentFactor', ['input', 'estimated'][0]],
    // The folloiwng is mute since we are using the fuel catalog (and not directly entering chaparral fuels)
    ['configure.fuel.chaparralTotalLoad', ['input', 'estimated'][0]],
    // The following is mute since there is no secondary fuel type
    ['configure.fire.weightingMethod', ['arithmetic', 'expected', 'harmonic'][0]]
  ],

  defaultFuelDomain: 'behave',

  defaultFuels: ['sh6', 'sh8', 'gs3', 'gr6', 'gr8'],
  defaultDeadMoisture: {
    key: 'site.moisture.dead.category',
    value: [0.05]
  },
  defaultLiveMoisture: {
    key: 'site.moisture.live.category',
    value: [0.5] // fraction of fuel ovendry weight
  },
  defaultWindSpeed: {
    key: 'site.wind.speed.at10m',
    value: [2, 2.5] // m/s
  },
  defaultSlopeSteepness: {
    key: 'site.slope.steepness.degrees',
    value: [0] // vertical rise / horizontal reach
  }
}
