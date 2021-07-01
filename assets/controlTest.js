export const controlsConfig = {
  controlNodesLabels: [
    { label: 'site.wind.speed.at10m', max: 50 },
    { label: 'site.moisture.dead.category', max: 100 },
    { label: 'site.moisture.live.category', max: 100 },
    { label: 'site.slope.steepness.degrees', max: 89 }
  ],
  fuelNodeProps: [
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl100h.ovendryLoad',
      label: 'pFuelDead100Load',
      units: 'kg/m2',
      used: true,
      max: 10,
      step: 0.1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl10h.ovendryLoad',
      label: 'pFuelDead10Load',
      units: 'kg/m2',
      used: true,
      max: 10,
      step: 0.1
    },
    {
      geneLabel: 'surface.primary.fuel.model.behave.parms.dead.tl1h.ovendryLoad',
      label: 'pFuelDead1Load',
      units: 'kg/m2',
      used: true,
      max: 10,
      step: 0.1
    }
  ],

  defaultPrimaryFuel: 'Short grass'
}
