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
    <section class="section">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">
              One
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
          <div class="tile is-child box">
            <p class="title">
              One
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>

          <div class="tile is-child box">
            <p class="title">
              Two
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">
              Three
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
            <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
            <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
          </div>
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
