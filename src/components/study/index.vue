<template>
  <div id="wrap">
    <div id="main">
      <div class="page page1"></div>
      <div class="page page2"></div>
      <div class="page page3"></div>
      <div class="page page4"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    document.addEventListener('touchstart', handleStart, false);
    document.addEventListener('touchmove', handleMove, false);
    document.addEventListener('touchend', handleEnd, false);
    let startY; //存储初始位置的Y值
    let diff;
    let page = 0;
    let hei = document.querySelector('.page').offsetHeight;
    // hei,是一屏的高度
    function handleStart(e) {
      startY = e.touches[0].pageY;
    }
    function handleMove(e) {
      if (!startY) {
        startY = e.touches[0].pageY;
      }
      diff = e.touches[0].pageY - startY;
      // 用当前的pageY - 初始pageY，小于0说明是手指向上滑动，页面下翻，相反则页面上翻
    }
    function handleEnd(e) {
      if (diff < 0) {
        // 下滑
        if (page >= 0 && page < 3) {
          page++;
        }
      } else {
        //上滑
        if (page > 0 && page <= 3) {
          page--;
        }
      }
      console.log(page);
      let top = hei * page;
      document.querySelector('#wrap').scrollTo({ top, behavior: 'smooth' });
    }
  },
  methods: {}
};
</script>
<style lang="scss">
html,
body,
#app {
  height: 100%;
}
#wrap {
  height: 100%;
  overflow: scroll;
}
#main {
  height: 100%;
}
.page {
  height: 100%;
}
.page1 {
  background: #e4e6ce;
}
.page2 {
  background: #6ce26c;
}
.page3 {
  background: #bf4938;
}
.page4 {
  background: #2932e1;
}
</style>

