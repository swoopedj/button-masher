<script>
import mountainsImg from '/assets/mountains_1.png';

export default {
  data() {
    return {
      ctx: null,
      mountainsImg: mountainsImg
    };
  },

  inject: ['canvasDimensions'],
  mounted() {
    this.canvas = this.$refs.mountainCanvas.getContext('2d');
    this.draw();
  },
  methods: {
    draw() {
      var img = new Image();
      img.src = this.mountainsImg1;
      img.onload = function () {
        console.log('image loaded');
        var pattern = this.canvas.createPattern(img, 'no-repeat');
        this.canvas.fillStyle = pattern;
        this.canvas.fillRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);
      };

      this.canvas.clearRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);

      this.canvas.drawImage(img, 0, 0, this.canvasDimensions.height, this.canvasDimensions.width);
    }
  }
};
</script>

<template>
  <canvas
    id="mountainCanvas"
    class="game-canvas"
    ref="mountainCanvas"
    width="canvasDimentions.width"
    height="canvasDimentions.height"
  />
</template>
