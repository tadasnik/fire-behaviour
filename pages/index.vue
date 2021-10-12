<template>
  <div>
    <section class="section">
      <div class="container has-text-centered is-size-3">
        <div class="content is-medium">
          <p>
            Welcome to the GEG337 modelling exercise. This website provides an
            interface to a subset of <strong><a
              href="https://www.frames.gov/behaveplus/home"
              target="_blank"
              rel="noopener noreferrer"
            >BehavePlus</a></strong> fire behaviour
            model capabilities. BehavePlus is a colection of mathematical models
            that simulate a wide range of fire behaviour, fire environment,
            fire effects and fire management aspects. Here we will focus
            on fire rate of spread, flame length, fireline intensity, scorch height, tree mortality and crown flaming initiation. The model requires fuel
            characteristics, wind and terain as inputs.
          </p>
          <p>
            Fuels are key components determing fire behaviour and are representet in the <strong>BehavePlus</strong> model by "fuel models", a
          </p>
          <fire-table /></fire-table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import FireTable from '~/components/Table'

export default {
  name: 'Introduction',

  components: {
    FireTable
  }
}
</script>
