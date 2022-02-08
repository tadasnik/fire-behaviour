export const nodeProps = {

  outputNodes: {
    fireSpreadRate: {
      group: 'primary',
      selected: true,
      geneLabel: 'surface.weighted.fire.spreadRate',
      label: 'Fire spread rate',
      units: 'm/min',
      decimals: 2,
      description: 'Surface fire rate of spread is the "speed" at which the fire travels through the surface fuels. Surface fuels include the litter, grass, brush, and other dead and live vegetation within about 6 feet (1.8 meters) of the ground. \nThe SURFACE module allows the user to determine whether rate of spread calculations are done for heading fire, flanking fire, backing fire, or for specified directions from the ignition point or from the fire perimeter. The heading on the output pages specifies which spread direction option has been selected. \nThe surface fire rate of spread prediction uses the Rothermel (1972) surface fire spread model, which assumes the weather, topography and fuel are constant and uniform for the elapsed time. The basic model was developed for a head fire spreading upslope with the wind. Adaptations have been made to allow calculations for other direction options.'
    },
    fireFlameLength: {
      group: 'primary',
      selected: true,
      geneLabel: 'surface.weighted.fire.flameLength',
      label: 'Fire flame length',
      units: 'm',
      decimals: 2,
      description: 'Surface fire flame length of a spreading surface fire within the flaming front is measured from midway in the active flaming combustion zone to the average tip of the flames. According to Rothermel (1991), "Flame length is an elusive parameter that exists in the eye of the beholder. It is a poor quantity to use in a scientific or engineering sense, but it is so readily apparent to fireline personnel and so readily conveys a sense of fire intensity that it is worth featuring as a primary fire variable."\nBoth surface fireline intensity and surface fire flame length are related to the heat felt by a person standing next to the flames. Flame length is calculated from fireline intensity, which is a function of surface fire rate of spread and heat per unit area.'
    },

    fireFirelineIntensity: {
      group: 'primary',
      selected: true,
      geneLabel: 'surface.weighted.fire.firelineIntensity',
      label: 'Fireline intensity',
      units: 'J/m/s',
      decimals: 0,
      description: 'Surface fireline intensity is the heat energy release per unit time from a one-foot (one-meter) wide section of the fuel bed extending from the front to the rear of the flaming zone of a surface fire. Surface fireline intensity is a function of surface fire rate of spread and surface fire heat per unit area. \nBoth surface fireline intensity and surface fire flame length are related to the heat felt by a person standing next to the flames. Surface fireline intensity is directly related to and is used in the calculation of flame length.'
    },

    Area: {
      group: 'ellipse',
      selected: false,
      geneLabel: 'surface.fire.ellipse.size.area',
      label: 'Fire ellipse area',
      units: 'ha',
      decimals: 2
    },
    LengthWidthRatio: {
      group: 'ellipse',
      selected: false,
      geneLabel: 'surface.weighted.fire.lengthToWidthRatio',
      label: 'Fire ellipse length/width ratio',
      units: 'ratio',
      decimals: 2
    },
    crownFireSpreadRate: {
      group: 'crown',
      selected: true,
      geneLabel: 'crown.fire.active.spreadRate',
      label: 'Crown fire spread rate',
      units: 'm/min',
      decimals: 2,
      description: "Active crown fire rate of spread is the head fire (forward) spread rate of a crown fire estimated using Rothermel's (1991) crown fire spread model. It is the overall spread for a sustained run over several hours and implicitly includes the effects of spotting. It does not consider a description of the overstory. The active crown fire rate of spread is calculated from 20-foot wind speed and surface fuel moisture values."
    },
    crownFireFlameLength: {
      group: 'crown',
      selected: true,
      geneLabel: 'crown.fire.active.flameLength',
      label: 'Crown fire flame length',
      units: 'm',
      decimals: 2,
      description: 'Active crown fire flame length, based on 20-foot wind speed, is calculated from active crown fireline intensity as described by Rothermel (1991). The flame length equation is taken from Thomas (1963) and differs from that used for surface fire (Byram 1959). Active crown fire flame length is also used to find spotting distance from active crown fire.'
    },
    transitionRatio: {
      group: 'crown',
      selected: true,
      geneLabel: 'crown.fire.initiation.transitionRatio',
      label: 'Crown fire transition ratio',
      units: 'ratio',
      decimals: 1,
      description: 'Transition ratio is the surface fireline intensity divided by the critical surface fireline intensity. If the transition ratio is greater than or equal to 1, then the surface fireline intensity is sufficient for a transition to crown fire. The transition ratio provides more information than the Yes or No answer provided by the transition to crown fire? variable. It is helpful to know whether the transition ratio is close to 1 or very different from 1. A value much higher than 1 may indicate that a transition to crown fire is more likely, while a value much less than 1 may indicate that the fire is more likely to remain a surface fire. As always, expert knowledge should be used to confirm model predictions.'
    },

    activeRatio: {
      group: 'crown',
      selected: false,
      geneLabel: 'crown.fire.initiation.activeRatio',
      label: 'Active crown fire ratio',
      units: 'ratio',
      decimals: 1,
      description: 'The active ratio is crown fire rate of spread divided by the critical crown fire rate of spread. If the active ratio is greater than or equal to 1, then the fire may be an active crown fire. The active ratio provides more information than the Yes or No answer provided by the active crown fire? variable. It is instructive to know whether the active ratio is close to 1 or significantly different from 1. A value much higher than 1 may indicate that an active crown fire is more likely, while a value much less than 1 may indicate that the fire is more likely to remain a surface fire. As always, expert knowledge should be used to confirm model predictions.'
    },

    scorchHeight: {
      group: 'effects',
      selected: true,
      geneLabel: 'surface.primary.fuel.fire.scorchHeight',
      label: 'Scorch height',
      units: 'm',
      decimals: 2,
      description: 'Scorch height is the maximum vertical height above the ground at which lethal scorching of foliage occurs. Below this height, the temperature in the convection column is greater than or equal to the lethal temperature necessary to kill live crown foliage. This temperature is assumed to be 140 degrees Fahrenheit (60 degrees Celsius). \nIf both SURFACE and SCORCH modules are selected, midflame wind speed and the flame length in the direction of the spread calculation are used as inputs to SCORCH.'
    },

    mortalityRate: {
      group: 'effects',
      selected: true,
      geneLabel: 'mortality.rate',
      label: 'Tree mortality rate',
      units: '%',
      decimals: 0,
      description: 'Probability of mortality is the likelihood that a tree will be killed by a fire. The equation used to calculate probability of mortality depends on the mortality tree species. There are 13 mortality equations, which variously include bark thickness, tree crown length scorched and/or tree crown volume scorched. \nProbability of mortality can be interpreted as the probability of an individual tree dying, or it can be multiplied by the number of trees on a site to estimate the number of trees that will die.'
    }

  },

  inputNodes: {
    windSpeed: {
      geneLabel: 'site.wind.speed.atMidflame',
      label: 'Wind speed',
      code: 'windSpeed',
      units: 'km/h',
      selected: true,
      defValue: 5,
      value: 5,
      decimals: 0,
      max: 30,
      min: 0,
      step: 1,
      description: 'Wind speed at midflame height'
    },

    windSpeed10: {
      geneLabel: 'site.wind.speed.at10m',
      label: 'Wind speed at 10 metres',
      code: 'windSpeed10',
      units: 'km/h',
      selected: true,
      defValue: 5,
      value: 5,
      decimals: 0,
      max: 30,
      min: 0,
      step: 1
    },

    windSpeedAdjust: {
      geneLabel: 'site.windSpeedAdjustmentFactor',
      label: 'Wind speed adjustment factor',
      code: 'windSpeedAdjust',
      units: 'ratio',
      selected: true,
      defValue: 0.5,
      value: 0.5,
      decimals: 1,
      max: 1,
      min: 0,
      step: 0.1
    },

    slopeAngle: {
      geneLabel: 'site.slope.steepness.degrees',
      label: 'Terrain slope',
      code: 'slopeAngle',
      units: 'deg',
      selected: true,
      defValue: 5,
      value: 5,
      decimals: 0,
      max: 40,
      min: 0,
      step: 1,
      description: 'Slope steepness is the maximum steepness of the slope on which a fire is burning.'
    },

    deadFuelMoisture: {
      geneLabel: 'site.moisture.dead.category',
      label: 'Dead fuel moisture',
      code: 'deadFuelMoisture',
      units: '%',
      selected: true,
      defValue: 15,
      value: 15,
      decimals: 0,
      max: 50,
      min: 0,
      step: 1
    },

    dead1hFuelMoisture: {
      geneLabel: 'site.moisture.dead.tl1h',
      label: 'Dead 1h fuel moisture',
      code: 'dead1hFuelMoisture',
      units: '%',
      selected: true,
      defValue: 15,
      value: 15,
      decimals: 0,
      max: 50,
      min: 0,
      step: 1,
      description: '1-h fuel moisture content is the portion (percent or fraction) of the 1-h timelag dead fuel that is water, calculated on a dry weight basis.'
    },

    dead10hFuelMoisture: {
      geneLabel: 'site.moisture.dead.tl10h',
      label: 'Dead 10h fuel moisture',
      code: 'dead10hFuelMoisture',
      units: '%',
      selected: true,
      defValue: 20,
      value: 20,
      decimals: 0,
      max: 50,
      min: 0,
      step: 1,
      description: 'The 10-h fuel moisture content is the portion of the 10-h timelag dead fuel that is water, calculated on a dry weight basis.'
    },

    dead100hFuelMoisture: {
      geneLabel: 'site.moisture.dead.tl100h',
      label: 'Dead 100h fuel moisture',
      code: 'dead100hFuelMoisture',
      units: '%',
      selected: true,
      defValue: 30,
      value: 30,
      decimals: 0,
      max: 60,
      min: 0,
      step: 1,
      description: 'The 100-h fuel moisture content is the portion of the 100-h timelag dead fuel that is water, calculated on a dry weight basis.'
    },

    liveHerbFuelMoisture: {
      geneLabel: 'site.moisture.live.herb',
      label: 'Live herb fuel moisture',
      code: 'liveHerbFuelMoisture',
      units: '%',
      selected: true,
      defValue: 80,
      value: 80,
      decimals: 0,
      max: 300,
      min: 30,
      step: 1,
      description: 'Live herbaceous fuel moisture content is the portion of the live grasses and forbs that is water, calculated on a dry weight basis.'
    },

    liveStemFuelMoisture: {
      geneLabel: 'site.moisture.live.stem',
      label: 'Live stem fuel moisture',
      code: 'liveStemFuelMoisture',
      units: '%',
      selected: true,
      defValue: 100,
      value: 100,
      decimals: 0,
      max: 300,
      min: 30,
      step: 1,
      description: 'Live woody fuel moisture content is the portion of the shrub foliage and very fine stems that is water. It is calculated on a dry weight basis.'
    },

    liveFuelMoisture: {
      geneLabel: 'site.moisture.live.category',
      label: 'Live fuel moisture',
      code: 'liveFuelMoisture',
      units: '%',
      selected: true,
      defValue: 100,
      value: 100,
      decimals: 0,
      max: 300,
      min: 30,
      step: 1
    },

    timeSinceIgnition: {
      geneLabel: 'site.fire.time.sinceIgnition',
      label: 'Time since ignition',
      code: 'timeSinceIgnition',
      units: 'h',
      selected: false,
      defValue: 1,
      value: 1,
      decimals: 0,
      max: 24,
      step: 1
    },

    airTemperature: {
      geneLabel: 'site.temperature.air',
      label: 'Air temperature',
      code: 'airTemperature',
      units: 'oC',
      selected: true,
      defValue: 20,
      value: 20,
      decimals: 0,
      max: 45,
      min: 0,
      step: 1,
      description: 'Air temeperature in degrees Celsius'
    },

    treeDBH: {
      geneLabel: 'site.canopy.tree.dbh',
      label: 'Tree diameter at chest height',
      code: 'treeDBH',
      units: 'm',
      selected: true,
      defValue: 0.3,
      value: 0.3,
      decimals: 1,
      max: 2,
      min: 0,
      step: 0.1,
      description: 'A measurement of the diameter of a tree at about 1.4 metres from the ground'
    },

    treeSpecies: {
      geneLabel: 'site.canopy.tree.species.fofem6.code',
      label: 'Tree species',
      code: 'treeSpecies',
      units: '',
      selected: false,
      defValue: 'PINSPP',
      value: 'PINSPP',
      decimals: 0,
      max: 0,
      min: 0,
      step: 0.1
    },

    baseHeight: {
      geneLabel: 'site.canopy.crown.baseHeight',
      label: 'Canopy base height',
      code: 'baseHeight',
      units: 'm',
      selected: true,
      defValue: 8,
      value: 8,
      max: 20,
      min: 1,
      step: 1,
      description: 'The canopy base height for an individual tree is the height at which there is sufficient fuel density to sustain canopy ignition. For a stand of trees, canopy base height considers both the main canopy layer and ladder fuels in the understory.'
    },

    totalHeight: {
      geneLabel: 'site.canopy.crown.totalHeight',
      label: 'Canopy total height',
      code: 'totalHeight',
      units: 'm',
      selected: true,
      defValue: 20,
      value: 20,
      decimals: 0,
      max: 30,
      min: 2,
      step: 1,
      description: 'Canopy height describes the average tree height in a stand.'
    },

    bulkDensity: {
      geneLabel: 'site.canopy.fuel.bulkDensity',
      label: 'Canopy buld density',
      code: 'bulkDensity',
      units: 'kg/m3',
      selected: true,
      defValue: 1,
      value: 1,
      decimals: 1,
      max: 5,
      min: 0,
      step: 0.1,
      description: 'Canopy bulk density is a stand description of weight of canopy fuels per unit of canopy volume (kg/m3).'
    },

    foliarMoisture: {
      geneLabel: 'site.canopy.fuel.foliar.moistureContent',
      label: 'Canopy moisture content',
      code: 'foliarMoisture',
      units: '%',
      selected: true,
      defValue: 100,
      value: 100,
      decimals: 0,
      max: 300,
      min: 30,
      step: 1,
      description: 'Foliar moisture is the moisture content of the overstory foliage: the conifer needles.'
    }

  },

  fuelNodeProps: {

    depth: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.depth',
      label: 'Fuel depth',
      catalogParam: 'depth',
      units: 'm',
      selected: true,
      value: 0.2,
      decimals: 1,
      max: 5,
      min: 0.01,
      step: 0.1
    },

    liveHeat: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion',
      label: 'Live fuel heat',
      catalogParam: 'liveHeat',
      units: 'J/kg',
      selected: false,
      value: 0.2,
      decimals: 0,
      max: 25000000,
      min: 1000000,
      step: 100000
    },

    deadHeat: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion',
      label: 'Dead fuel heat',
      catalogParam: 'deadHeat',
      units: 'J/kg',
      selected: true,
      value: 0.2,
      decimals: 0,
      max: 25000000,
      min: 1000000,
      step: 100000
    },

    dead1Load: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad',
      label: 'Dead 1h load',
      catalogParam: 'dead1Load',
      units: 'kg/m2',
      selected: true,
      value: 0.2,
      decimals: 2,
      max: 2,
      min: 0,
      step: 0.1
    },

    dead10Load: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad',
      label: 'Dead 10h load',
      catalogParam: 'dead10Load',
      units: 'kg/m2',
      selected: true,
      value: 0.2,
      decimals: 2,
      max: 2,
      min: 0,
      step: 0.1
    },

    dead100Load: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad',
      label: 'Dead 100h load',
      catalogParam: 'dead100Load',
      units: 'kg/m2',
      selected: true,
      value: 0.2,
      decimals: 2,
      max: 2,
      min: 0,
      step: 0.1
    },

    dead1Savr: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio',
      label: 'Dead 1h SAVR',
      catalogParam: 'dead1Savr',
      units: 'cm2/cm3',
      selected: true,
      value: 0.2,
      decimals: 2,
      max: 200,
      min: 1,
      step: 1
    },

    deadMext: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent',
      label: 'Dead fuel moisture of extinction',
      catalogParam: 'deadMext',
      units: '%',
      selected: true,
      value: 15,
      decimals: 0,
      max: 60,
      min: 1,
      step: 1
    },

    liveHerbSavr: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio',
      label: 'Live herb SAVR',
      catalogParam: 'liveHerbSavr',
      units: 'cm2/cm3',
      selected: true,
      value: 15,
      decimals: 2,
      max: 200,
      min: 1,
      step: 1
    },

    liveStemSavr: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio',
      label: 'Live stem SAVR',
      catalogParam: 'liveStemSavr',
      units: 'cm2/cm3',
      selected: true,
      value: 15,
      decimals: 2,
      max: 200,
      min: 1,
      step: 1
    },

    liveStemLoad: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad',
      label: 'Live stem load',
      catalogParam: 'liveStemLoad',
      units: 'kg/m2',
      selected: true,
      value: 15,
      decimals: 2,
      max: 2,
      min: 0,
      step: 0.01
    },

    totalHerbLoad: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad',
      label: 'Total herb load',
      catalogParam: 'totalHerbLoad',
      units: 'kg/m2',
      selected: true,
      value: 15,
      decimals: 2,
      max: 2,
      min: 0,
      step: 0.01
    },

    curedHerbFrac: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.cured.herb.fraction',
      label: 'Cured herb frac.',
      catalogParam: 'curedHerbFrac',
      units: '%',
      selected: false,
      value: 15,
      decimals: 0,
      max: 100,
      min: 0,
      step: 1
    }
  }
}
