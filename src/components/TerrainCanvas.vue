<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null
    };
  },
  mounted() {
    this.canvas = document.getElementById('terrainCanvas');
    this.ctx = this.canvas.getContext('2d');

    this.resizeCanvas();

    const background = new Image();
    background.src = '/assets/gray-concrete-or-cinder-block-wall-texture.jpg';
    background.onload = () => {
      this.ctx.clearRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);

      this.ctx.drawImage(
        background,
        0,
        0,
        this.canvasDimensions.width,
        this.canvasDimensions.height
      );
    };
  },

  inject: ['canvasDimensions'],

  methods: {
    resizeCanvas() {
      const container = document.getElementById('canvasWrapper');

      this.canvas.width = container.clientWidth;
      console.log(this.canvas.width);
      this.canvas.height = container.clientHeight;

      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
};
</script>

<template>
  <div id="canvasWrapper" class="canvas-wrapper" ref="canvasWrapper">
    <canvas id="terrainCanvas" ref="terrainCanvas"></canvas>
  </div>
</template>
