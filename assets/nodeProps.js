export const nodeProps = {

  outputNodeProps: [
    {
      geneLabel: 'surface.weighted.fire.spreadRate',
      label: 'fireSpreadRate',
      units: 'm/min'
    },
    {
      geneLabel: 'surface.weighted.fire.flameLength',
      label: 'fireFlameLength',
      units: 'm'
    }
  ],

  inputNodeProps: [
    {
      geneLabel: 'site.wind.speed.at10m',
      label: 'Wind speed (m/s)',
      units: 'm/s',
      used: true,
      value: 1.05,
      max: 30,
      step: 1
    },
    {
      geneLabel: 'site.slope.steepness.degrees',
      label: 'Slope angle (deg)',
      units: 'deg',
      used: true,
      value: 10,
      max: 100,
      step: 1
    },
    {
      geneLabel: 'site.moisture.dead.category',
      label: 'Dead fuel moisture (%)',
      units: '%',
      used: true,
      value: 10,
      max: 100,
      step: 1
    },
    {
      geneLabel: 'site.moisture.live.category',
      label: 'Live fuel moisture (%)',
      units: '%',
      used: true,
      value: 10,
      max: 100,
      step: 1
    }
  ],

  fuelNodeProps: [
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.depth',
      label: 'Fuel depth (m)',
      catalogParam: 'depth',
      units: 'm',
      used: true,
      max: 5,
      step: 0.1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.heatOfCombustion',
      label: 'Live fuel heat (J/kg)',
      catalogParam: 'liveHeat',
      units: 'J/kg',
      used: false,
      max: 25000000,
      step: 100000
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.heatOfCombustion',
      label: 'Dead fuel heat (J/kg)',
      catalogParam: 'deadHeat',
      units: 'J/kg',
      used: true,
      max: 25000000,
      step: 100000
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad',
      label: 'Dead 1h load (kg/m2)',
      catalogParam: 'dead1Load',
      units: 'kg/m2',
      used: true,
      max: 10,
      step: 0.1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad',
      label: 'Dead 10h load (kg/m2)',
      catalogParam: 'dead10Load',
      units: 'kg/m2',
      used: true,
      max: 10,
      step: 0.1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad',
      label: 'Dead 100h load (kg/m2)',
      catalogParam: 'dead100Load',
      units: 'kg/m2',
      used: true,
      max: 10,
      step: 0.1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl1h.surfaceAreaToVolumeRatio',
      label: 'Dead 1h SAVR (cm2/cm3)',
      catalogParam: 'dead1Savr',
      units: 'cm2/cm3',
      used: true,
      max: 200,
      step: 1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.extinction.moistureContent',
      label: 'Dead ext. moist. (%)',
      catalogParam: 'deadMext',
      units: '%',
      used: true,
      max: 100,
      step: 1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.herb.surfaceAreaToVolumeRatio',
      label: 'Live herb SAVR (cm2/cm3)',
      catalogParam: 'liveHerbSavr',
      units: 'cm2/cm3',
      used: true,
      max: 200,
      step: 1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.stem.surfaceAreaToVolumeRatio',
      label: 'Live stem SAVR (cm2/cm3)',
      catalogParam: 'liveStemSavr',
      units: 'cm2/cm3',
      used: true,
      max: 200,
      step: 1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.live.stem.ovendryLoad',
      label: 'Live stem load (kg/m2)',
      catalogParam: 'liveStemLoad',
      units: 'kg/m2',
      used: true,
      max: 2,
      step: 0.01
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.total.herb.ovendryLoad',
      label: 'Total herb load (kg/m2)',
      catalogParam: 'totalHerbLoad',
      units: 'kg/m2',
      used: true,
      max: 2,
      step: 0.01
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.cured.herb.fraction',
      label: 'Cured herb frac.',
      catalogParam: '',
      units: '%',
      used: false,
      max: 100,
      step: 1
    }
  ]
}
