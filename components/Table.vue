<template>
  <table class="table is-striped">
    <thead>
      <tr>
        <td>Flame length (m)</td>
        <td>Fire intensity</td>
        <td>Strategy</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0-0.5</td>
        <td><span class="tag is-success is-large">Low</span></td>
        <td>Normally self extinguish</td>
      </tr>
      <tr>
        <td>0.5-1.5</td>
        <td><span class="tag is-info is-large">Moderate</span></td>
        <td>Direct Attack hand tools and back-packs</td>
      </tr>
      <tr is-primary>
        <td>1.5-3.5</td>
        <td><span class="tag is-warning is-large">High</span></td>
        <td>Direct Attack Pumped water, fogging, Aerial operations (>2.5m beyond FRS control with water). Indirect Attack tools and back-packs</td>
      </tr>
      <tr is-primary>
        <td>3.5-8</td>
        <td><span class="tag is-primary is-large">Extreme</span></td>
        <td>Direct Attack aerial attack. Indirect Attack Consider flanking, control lines, defensive use of fire, aerial operations (will require outside agency assistance) (>8m beyond FRS capability)</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
}
</script>
