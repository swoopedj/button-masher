<script setup>
import HelicopterCanvas from '../components/HelicopterCanvas.vue'
import MountainCanvas from '../components/MountainCanvas.vue'
import TerrainCanvas from '../components/TerrainCanvas.vue'
</script>
<script>
export default {
  components: {
    HelicopterCanvas,
    MountainCanvas,
    TerrainCanvas
  }
}
</script>
<template>
  <div class="fire-heli">
    <HelicopterCanvas />
    <MountainCanvas />
    <TerrainCanvas />
  </div>
</template>

<style>
.fire-heli {
  min-height: 100%;
  position: realative;
}
</style>
