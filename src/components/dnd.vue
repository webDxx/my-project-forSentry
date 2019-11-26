<template>
  <div>
    　　<div
      v-for="(item, index) in info"
      v-dragging="{ list: info, item: item, group: 'item' }"
      :key="index"
    >
      　<h3>{{item}}</h3>
      　　</div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      info: [1, 2, 3, 4, 5, 6]
    };
  },
  mounted() {
    this.$dragging.$on('dragged', value => {
      //因为我这在排序的时候不需要做处理，所以空着就行
    });
  }
};
</script>
<style>
h3 {
  width: 100%;
  background: #ccc;
}
</style>
