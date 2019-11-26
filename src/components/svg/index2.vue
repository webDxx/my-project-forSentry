<template>
  <div>
    <svg class="svg">
      <g class="g_1">
        <a xlink:href="http://www.baidu.com">
          <rect class="rect" />
        </a>
        <circle class="circle" />
        <ellipse class="ellipse" />
        <line x1="20" y1="5" x2="100" y2="5" class="line" />
        <line stroke-dasharray="10,10" x1="0" y1="150" x2="552" y2="150" />
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="33%" style="stop-color:rgb(0,0,255); stop-opacity:1" />
          <stop offset="66%" style="stop-color:rgb(255,0,0); stop-opacity:1" />
          <stop offset="99%" style="stop-color:rgb(0,255,0); stop-opacity:1" />
        </linearGradient>
        <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="80%" fy="20%">
          <stop offset="0%" style="stop-color:rgb(255,255,255); stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(0,0,0); stop-opacity:1" />
        </radialGradient>
        <!-- <rect x="100" y="50" width="280" height="150" fill="url(#grad1)" /> -->
        <!-- <circle cx="50" cy="50" r="50" fill="url(#grad2)" /> -->
        <circle class="redrect" cx="70" cy="350" r="50" fill="none" stroke="red" stroke-width="10" />
        <rect class="no2" x="60" y="599" width="100" height="100" fill="none" stroke-width="1" stroke="blue" />
      </g>
    </svg>
    <svg class="load" viewBox="25 25 50 50">
      <circle class="loading" cx="50" cy="50" r="20" fill="none" />
    </svg>
    <div class="loader">
      <svg width="100" height="100">
        <polygon class="triangle" fill="none" stroke="#7eccd8" stroke-width="4" points="50,1 99,99 1,99" />
      </svg>
    </div>
    <div class="mycircle"></div>
    <div id="box"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let box = document.getElementById('box');
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    box.appendChild(svg);
    var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '10');
    rect.setAttribute('y', '10');
    rect.setAttribute('width', '200');
    rect.setAttribute('height', '150');
    rect.setAttribute('fill', 'black');
    rect.setAttribute('stroke', 'red');
    svg.appendChild(rect);
  }
};
</script>

<style lang="scss" scoped>
.load {
  width: 80px;
  height: 80px;
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 130, 200;
    stroke-dashoffset: -50;
  }
  100% {
    stroke-dasharray: 130, 200;
    stroke-dashoffset: -188;
  }
}
.mycircle {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  border-radius: 70px;
  border-bottom: none;
  border-right: none;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  stroke: rgb(53, 157, 218);
  stroke-width: 5;
  fill: none;
  animation: dash 1.5s linear infinite;
}

.load {
  animation: rotate 2s linear infinite;
}

.svg {
  width: 300px;
  height: 600px;
}
.rect {
  width: 100px;
  height: 100px;
  x: 20px;
  y: 20px;
  fill: rgb(0, 100, 255);
  stroke-width: 6;
  stroke: rgb(0, 255, 0);
  fill-opacity: 0.8;
  stroke-opacity: 0.5;
  rx: 20px;
  ry: 20px;
}
.circle {
  cx: 70px;
  cy: 200px;

  r: 50px;
}
.ellipse {
  cx: 70px;
  cy: 300px;
  rx: 50px;
  ry: 10px;
}
.g_1 {
  fill: rgb(0, 0, 255);
  stroke-width: 6;
  stroke: rgb(0, 255, 0);
}
.redrect {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  -webkit-animation: dash 2s linear infinite;
  animation: dash 2s linear infinite;
}
@-webkit-keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.no2 {
  stroke-dasharray: 10;
  stroke-dashoffset: 600;
  -webkit-animation: anim 5s linear infinite;
  animation: anim 5s linear infinite;
}
@-webkit-keyframes anim {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes anim {
  to {
    stroke-dashoffset: 0;
  }
}

.loader {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  z-index: 3;
}
.loader .triangle {
  stroke-dasharray: 50 30;
  -webkit-animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  -moz-animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  -ms-animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  -o-animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
  animation: dash 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
}
//命名dash，动画写划线的距离
@-webkit-keyframes dash {
  to {
    stroke-dashoffset: 500;
  }
}
@-moz-keyframes dash {
  to {
    stroke-dashoffset: 500;
  }
}
@-ms-keyframes dash {
  to {
    stroke-dashoffset: 500;
  }
}
@-o-keyframes dash {
  to {
    stroke-dashoffset: 500;
  }
}
@keyframes dash {
  to {
    stroke-dashoffset: 500;
  }
}
</style>