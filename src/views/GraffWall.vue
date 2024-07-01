<script>
export default {
  data() {
    return {
      canvas: null,
      colors: ['#487ab3', '#d45d1a', '#fdd800', '#1f1f1f', '#037843', '#e21f25', '#d8265f'],
      ctx: null,
      isPainting: false,
      sprayWidth: 10,
      lineCap: 'round'
    };
  },
  mounted() {
    this.canvas = document.getElementById('graffCanvasBackground');
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
      // const pattern = this.ctx.createPattern(background, 'no-repeat')
      // this.ctx.fillStyle = pattern
      // this.ctx.fillRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height)
    };

    this.ctx.strokeStyle = this.colors[0];

    // this.ctx.drawImage(background, 0, 0, this.canvasDimensions.width, this.canvasDimensions.height)
    // set background

    // add blank canvas layer
  },

  inject: ['canvasDimensions'],

  methods: {
    changeColor(color) {
      this.ctx.strokeStyle = color;
    },

    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvasDimensions.width, this.canvasDimensions.height);
    },

    resizeCanvas() {
      const container = document.getElementById('canvasWrapper');

      this.canvas.width = container.clientWidth;
      console.log(this.canvas.width);
      this.canvas.height = container.clientHeight;

      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },

    startPaint(e) {
      this.isPainting = true;
      this.draw(e);
    },

    stopPaint() {
      this.isPainting = false;
      this.ctx.beginPath();
    },

    // getCursorPos(e) {
    //   const rect = this.ctx.getBoundingClientRect()
    //   return {
    //     x: e.clientX - rect.left,
    //     y: e.clientY - rect.top
    //   }
    // },

    draw(e) {
      if (!this.isPainting) return;
      // const pos = this.getCursorPos(e)

      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineWidth = this.lineCap;

      this.ctx.lineTo(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop);
    }
  }
};
</script>

<template>
  <div id="canvasWrapper" class="canvas-wrapper" ref="canvasWrapper">
    <div class="graff-tools">
      <a class="clear-button" @click.prevent="changeBackdrop">Backdrop</a>

      <div class="color-picker">
        <div
          v-for="color in colors"
          :key="color"
          class="color-box"
          :style="{ backgroundColor: color }"
          @click="changeColor(color)"
        ></div>
      </div>

      <a class="clear-button" @click.prevent="clearCanvas">Clear</a>
    </div>

    <canvas
      id="graffCanvasBackground"
      ref="graffCanvasBackground"
      @touchstart.prevent
      @pointerdown="startPaint"
      @pointerup="stopPaint"
      @pointercancel="stopPaint"
      @mousemove="draw"
    />
  </div>
</template>

<style>
.graff-tools {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  text-align: center;
  margin-bottom: 0.5rem;
}

.color-picker {
  margin-top: auto;
}

.color-box {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
}

.tool-buttons {
  display: flex;
  flex-direction: row;
}

.clear-button {
  display: block;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}

.clear-button:hover {
  background-color: #444;
}
</style>
