<template>
  <div>
    <div
      class="all"
      id='all'
    >
      <div
        class="screen"
        ref="screen"
        id="screen"
        style="left:0px;"
      >
        <ul id="ul">
          <li><img
              src="../assets/1.jpg"
              width="420"
              height="200"
            /></li>
          <li><img
              src="../assets/cat.png"
              width="420"
              height="200"
            /></li>
          <li><img
              src="../assets/logo.png"
              width="420"
              height="200"
            /></li>
        </ul>
        <ol></ol>
      </div>
      <div class="btn">
        <span
          class="prev"
          @click="goprev"
        >《</span>
        <span
          class="next"
          @click="gonext"
        >》</span>
      </div>
      <ul class="point">
        <li :class="{active:page==0}"></li>
        <li :class="{active:page==-1}"></li>
        <li :class="{active:page==-2}"></li>
      </ul>
    </div>
  </div>
</template>
<script>
import utils from '../lib/utils';
import { setTimeout } from 'timers';
export default {
  name: 'HelloWorld',
  data() {
    return {
      page: 0
    };
  },
  mounted() {
    this.timerInit();
  },
  watch: {
    page(newval) {
      utils.myanimate(this.$refs.screen, newval * 420);
    }
  },
  methods: {
    goprev() {
      this.page--;
    },
    gonext() {
      this.page++;
    },
    timerInit() {
      setTimeout(() => {
        if (this.page >= -1) {
          this.page--;
        } else {
          this.page = 0;
        }
        this.timerInit();
      }, 3000);
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  margin: 0px;
  padding: 0px;
  li {
    margin: 0px;
    padding: 0px;
    float: left;
    list-style: none;
  }
}

.all {
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
  .screen {
    width: 1500px;
    position: absolute;
  }
  .btn {
    .prev,
    .next {
      display: block;
      width: 50px;
      height: 50px;
      background: rgba(200, 54, 54, 0.5);
      line-height: 50px;
      position: absolute;
      top: 75px;
    }
    .next {
      right: 0px;
    }
  }
  .point {
    position: absolute;
    top: 180px;
    width: 100%;
    display: flex;
    justify-content: center;
    li {
      list-style: none;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background: #ccc;
      float: left;
      margin-right: 10px;
      &.active {
        background: red;
      }
    }
  }
}
</style>
