<template>
  <div ref="mydiv">
    <div
      v-for="item in info"
      :key="item"
      :data-id="item"
    >
      　<h3>{{item}} <span class="my-handle">三</span></h3>
    </div>
  </div>
</template>
 
<script>
import Sortable from 'sortablejs';
export default {
  data() {
    return {
      info: [1, 2, 3, 4, 5, 6],
      sortable: null
    };
  },
  created() {},
  mounted() {
    console.log(this.$refs.mydiv);
    this.sortable = new Sortable(this.$refs.mydiv, {
      animation: 300,
      ghostClass: 'blue-background-class',
      distance: 30, //至少要在元素上面拖动多少像素后，才正式触发排序动作
      handle: '.my-handle',
      ghostClass: 'ghost', //设置占位样式，类名
      onEnd: function(evt) {
        console.log(evt);
      },
      store: {
        set: function(sortable) {
          console.log('set');
          //获取新的排序数组
          var order = sortable.toArray();
          console.log(order);
        }
      }
    });
  }
};
</script>
<style scoped>
h3 {
  width: 100%;
  background: gold;
}
.my-handle {
  display: block;
  width: 60px;
  /* 鼠标游标样式 */
  cursor: move;
  cursor: -webkit-grabbing;
  float: right;
}
.ghost {
  opacity: 0.2;
}
</style>
