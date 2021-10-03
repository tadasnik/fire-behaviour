export const nodeProps = {

  outputNodes: {
    fireSpreadRate: {
      group: 'primary',
      selected: true,
      geneLabel: 'surface.weighted.fire.spreadRate',
      text: 'Fire spread rate',
      label: 'fireSpreadRate',
      units: 'm/min',
      decimals: 2
    },
    fireFlameLength: {
      group: 'primary',
      selected: true,
      geneLabel: 'surface.weighted.fire.flameLength',
      text: 'Fire flame length',
      label: 'fireFlameLength',
      units: 'm',
      decimals: 2
    },
    reactionIntensity: {
      group: 'primary',
      selected: false,
      geneLabel: 'surface.weighted.fire.reactionIntensity',
      text: 'Reaction intensity',
      label: 'reactionIntensity',
      units: 'J/m2/min',
      decimals: 0
    },
    fireFirelineIntensity: {
      group: 'primary',
      selected: false,
      geneLabel: 'surface.weighted.fire.firelineIntensity',
      text: 'Fireline intensity',
      label: 'fireFirelineIntensity',
      units: 'J/m/s',
      decimals: 0
    },
    Area: {
      group: 'ellipse',
      selected: false,
      geneLabel: 'surface.fire.ellipse.size.area',
      text: 'Fire ellipse area',
      label: 'Area',
      units: 'ha',
      decimals: 2
    },
    LengthWidthRatio: {
      group: 'ellipse',
      selected: false,
      geneLabel: 'surface.weighted.fire.lengthToWidthRatio',
      text: 'Fire ellipse length/width ratio',
      label: 'Length/Width Ratio',
      units: 'ratio',
      decimals: 2
    },
    crownFireSpreadRate: {
      group: 'crown',
      selected: true,
      geneLabel: 'crown.fire.active.spreadRate',
      text: 'Crown fire spread rate',
      label: 'fireSpreadRate',
      units: 'm/min',
      decimals: 2
    },
    crownFireFlameLength: {
      group: 'primary',
      selected: true,
      geneLabel: 'crown.fire.active.flameLength',
      text: 'Crown fire flame length',
      label: 'fireFlameLength',
      units: 'm',
      decimals: 2
    }
  },

  inputNodes: {
    windSpeed: {
      geneLabel: 'site.wind.speed.at10m',
      label: 'Wind speed (km/h)',
      code: 'windSpeed',
      units: 'km/h',
      selected: true,
      value: [2, 5],
      decimals: 0,
      max: 50,
      step: 1
    },
    slopeAngle: {
      geneLabel: 'site.slope.steepness.degrees',
      label: 'Slope angle (deg)',
      code: 'slopeAngle',
      units: 'deg',
      selected: true,
      value: 10,
      decimals: 0,
      max: 100,
      step: 1
    },

    deadFuelMoisture: {
      geneLabel: 'site.moisture.dead.category',
      label: 'Dead fuel moisture (%)',
      code: 'deadFuelMoisture',
      units: '%',
      selected: true,
      value: 30,
      decimals: 0,
      max: 100,
      step: 1
    },

    dead1hFuelMoisture: {
      geneLabel: 'site.moisture.dead.tl1h',
      label: 'Dead 1h fuel moisture (%)',
      code: 'dead1hFuelMoisture',
      units: '%',
      selected: true,
      value: 30,
      decimals: 0,
      max: 100,
      step: 1
    },

    dead10hFuelMoisture: {
      geneLabel: 'site.moisture.dead.tl10h',
      label: 'Dead 10h fuel moisture (%)',
      code: 'dead10hFuelMoisture',
      units: '%',
      selected: true,
      value: 30,
      decimals: 0,
      max: 100,
      step: 1
    },

    dead100hFuelMoisture: {
      geneLabel: 'site.moisture.dead.tl100h',
      label: 'Dead 100h fuel moisture (%)',
      code: 'dead100hFuelMoisture',
      units: '%',
      selected: true,
      value: 30,
      decimals: 0,
      max: 100,
      step: 1
    },

    liveFuelMoisture: {
      geneLabel: 'site.moisture.live.category',
      label: 'Live fuel moisture (%)',
      code: 'liveFuelMoisture',
      units: '%',
      selected: true,
      value: 70,
      decimals: 0,
      max: 100,
      step: 1
    },

    timeSinceIgnition: {
      geneLabel: 'site.fire.time.sinceIgnition',
      label: 'Time since ignition (h)',
      code: 'timeSinceIgnition',
      units: 'h',
      selected: false,
      value: 1,
      decimals: 0,
      max: 24,
      step: 1
    },

    baseHeight: {
      geneLabel: 'site.canopy.crown.baseHeight',
      label: 'Canopy base height (m)',
      code: 'baseHeight',
      units: 'm',
      selected: true,
      value: 5,
      decimals: 0,
      max: 20,
      step: 1
    },
    totalHeight: {
      geneLabel: 'site.canopy.crown.totalHeight',
      label: 'Canopy total height (m)',
      code: 'totalHeight',
      units: 'm',
      selected: true,
      value: 5,
      decimals: 0,
      max: 20,
      step: 1
    },
    bulkDensity: {
      geneLabel: 'site.canopy.fuel.bulkDensity',
      label: 'Canopy buld density (kg/m3)',
      code: 'bulkDensity',
      units: 'kg/m3',
      selected: true,
      value: 1,
      decimals: 0,
      max: 20,
      step: 1
    }
  },

  fuelNodeProps: {

    depth: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.depth',
      label: 'Fuel depth (m)',
      catalogParam: 'depth',
      units: 'm',
      selected: true,
      value: 0.2,
      decimals: 1,
      max: 5,
      step: 0.1
    },

    liveHeat: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion',
      label: 'Live fuel heat (J/kg)',
      catalogParam: 'liveHeat',
      units: 'J/kg',
      selected: false,
      value: 0.2,
      decimals: 0,
      max: 25000000,
      step: 100000
    },

    deadHeat: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion',
      label: 'Dead fuel heat (J/kg)',
      catalogParam: 'deadHeat',
      units: 'J/kg',
      selected: true,
      value: 0.2,
      decimals: 0,
      max: 25000000,
      step: 100000
    },

    dead1Load: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad',
      label: 'Dead 1h load (kg/m2)',
      catalogParam: 'dead1Load',
      units: 'kg/m2',
      selected: true,
      value: 0.2,
      decimals: 2,
      max: 2,
      step: 0.1
    },

    dead10Load: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad',
      label: 'Dead 10h load (kg/m2)',
      catalogParam: 'dead10Load',
      units: 'kg/m2',
      selected: true,
      value: 0.2,
      decimals: 2,
      max: 2,
      step: 0.1
    },

    dead100Load: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad',
      label: 'Dead 100h load (kg/m2)',
      catalogParam: 'dead100Load',
      units: 'kg/m2',
      selected: true,
      value: 0.2,
      decimals: 2,
      max: 2,
      step: 0.1
    },

    dead1Savr: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio',
      label: 'Dead 1h SAVR (cm2/cm3)',
      catalogParam: 'dead1Savr',
      units: 'cm2/cm3',
      selected: true,
      value: 0.2,
      decimals: 2,
      max: 200,
      step: 1
    },

    deadMext: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent',
      label: 'Dead ext. moist. (%)',
      catalogParam: 'deadMext',
      units: '%',
      selected: true,
      value: 15,
      decimals: 0,
      max: 100,
      step: 1
    },

    liveHerbSavr: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio',
      label: 'Live herb SAVR (cm2/cm3)',
      catalogParam: 'liveHerbSavr',
      units: 'cm2/cm3',
      selected: true,
      value: 15,
      decimals: 2,
      max: 200,
      step: 1
    },

    liveStemSavr: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio',
      label: 'Live stem SAVR (cm2/cm3)',
      catalogParam: 'liveStemSavr',
      units: 'cm2/cm3',
      selected: true,
      value: 15,
      decimals: 2,
      max: 200,
      step: 1
    },

    liveStemLoad: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad',
      label: 'Live stem load (kg/m2)',
      catalogParam: 'liveStemLoad',
      units: 'kg/m2',
      selected: true,
      value: 15,
      decimals: 2,
      max: 2,
      step: 0.01
    },

    totalHerbLoad: {
      geneLabel: 'surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad',
      label: 'Total herb load (kg/m2)',
      catalogParam: 'totalHerbLoad',
      units: 'kg/m2',
      selected: true,
      value: 15,
      decimals: 2,
      max: 2,
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
      step: 1
    }
  }
}
