<template>
  <div
    class="box box2"
    :style="box2Style"
    ref="box2"
  >
    <div
      class="dargbtn"
      @mousedown="box2ButtonDown"
    >点此拖拽2</div>
    <div class="delay-box">
      <span
        v-for="(item, index) in testData"
        :key="index"
        :data-testdata="testFun('box2')"
      >{{item.value}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 2
      testData: [
        { value: '1' },
        { value: '2' },
        { value: '3' },
        { value: '4' },
        { value: '5' },
        { value: '6' },
        { value: '7' },
        { value: '9' },
        { value: '10' }
      ],
      box2X: 0,
      box2Y: 0,
      box2L: 0,
      box2T: 0,
      box2CurrentX: 0,
      box2CurrentY: 400
    };
  },
  computed: {
    box2Style() {
      return {
        top: '400px',
        left: '0px'
      };
    }
  },
  methods: {
    testFun(name) {
      console.time(name + '-delay');
      for (let i = 0; i < 10240000; i++) {}
      console.timeEnd(name + '-delay');
    },
    box2Start(e) {
      let dv = this.$refs.box2;
      this.box2X = e.clientX;
      this.box2Y = e.clientY;

      this.box2L = dv.offsetLeft;
      this.box2T = dv.offsetTop;
    },
    box2Move(e) {
      console.log('box2 move');
      let nx = e.clientX;
      let ny = e.clientY;
      let nl = nx - (this.box2X - this.box2L);
      let nt = ny - (this.box2Y - this.box2T);

      // 代码关键处
      this.box2CurrentX = nl;
      this.box2CurrentY = nt;
      let legendBox = this.$refs.box2;
      legendBox.style.left = nl + 'px';
      legendBox.style.top = nt + 'px';
    },
    box2End(e) {
      window.removeEventListener('mousemove', this.box2Move);
      window.removeEventListener('mouseup', this.box2End);
    },
    box2ButtonDown(e) {
      alert('ooo');
      this.box2Start(e);
      window.addEventListener('mousemove', this.box2Move);
      window.addEventListener('mouseup', this.box2End);
    }
  }
};
</script>
<style>
*::selection {
  background: none;
}
.box {
  position: fixed;
  z-index: 100;
  width: 200px;
  height: 80px;
}
.dargbtn {
  margin: 15px;
  color: #222222;
  background: #eee;
  cursor: pointer;
}
.box1 {
  background: #c0c;
}
.box2 {
  background: #0cc;
}
</style>