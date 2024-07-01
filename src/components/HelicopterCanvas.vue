<script>
import helicopterRight1 from '/assets/helicopter/heli_hover_right_1.png';
import helicopterRight2 from '/assets/helicopter/heli_hover_right_2.png';
import helicopterLeft1 from '/assets/helicopter/heli_hover_left_1.png';
import helicopterLeft2 from '/assets/helicopter/heli_hover_left_2.png';

export default {
  data() {
    return {
      ctx: null,
      helicopterRight1: helicopterRight1,
      helicopterRight2: helicopterRight2,
      helicopterLeft1: helicopterLeft1,
      helicopterLeft2: helicopterLeft2
    };
  },

  inject: ['canvasDimensions'],

  mounted() {
    this.canvas = this.$refs.helicopterCanvas.getContext('2d');
    // this.draw()
  },

  methods: {
    draw() {
      this.canvas.beginPath();
      this.canvas.rect(20, 20, 150, 100);
      this.canvas.stroke();
    }
  }
};
</script>

<template>
  <canvas
    id="helicopterCanvas"
    class="game-canvas"
    ref="helicopterCanvas"
    width="canvasDimentions.width"
    height="canvasDimentions.height"
  />
</template>

<style>
/* #helicopterCanvas {
  background-color: white;
  color: black;
} */
</style>
