<template>
  <div>
    <vuedraggable :list="list" :move="getdata" @update="datadragEnd" :options="{handle:'.dargDiv'}">
      <transition-group name="list-complete">
        <div v-for="element in list" :key="element.it.name" class="list-complete-item">
          <div class="styleclass dargDiv">{{element.id}}</div>
          <div class="styleclass">{{element.it.name}}</div>
        </div>
      </transition-group>
    </vuedraggable>
    <dnd />
    <sortable />
    <DoMyself />
  </div>
</template>

<script>
import vuedraggable from 'vuedraggable'
import dnd from './dnd'
import sortable from './sortable'
import DoMyself from './DoMyself'

export default {
  name: 'HelloWorld',
  components: { vuedraggable, dnd, sortable, DoMyself },
  props: {},
  data () {
    return {
      list: [
        { id: 'id1', it: { name: 'bbbb' } },
        { id: 'id2', it: { name: '2222' } },
        { id: 'id3', it: { name: '3333' } },
        { id: 'id4', it: { name: '4444' } }
      ],
      oldindex: -1,
      oldval: -1
    }
  },
  updated () {
    console.log(this.list)
  },
  methods: {
    dragstart (evt) {
      console.log('start')
      // this.oldindex = evt.oldIndex;
      // this.oldval = this.list[this.oldindex];
      // console.log(this.$refs.list[this.oldindex]);
      // this.list.splice(evt.oldIndex, 1);
      // this.$refs.list[this.oldindex].style.display = 'none';
    },
    getdata (evt) {
      console.log('move')
      console.log(evt)
      // 拖动中
      console.log(evt.draggedContext.element)
      console.log(evt.draggedContext.futureIndex)
      // let next = evt.draggedContext.futureIndex;
      // this.$refs.list.forEach(item => {
      //   item.style.marginTop = '';
      // });
      // this.$refs.list[next].style.marginTop = '80px';
    },
    datadragEnd (evt) {
      // this.$refs.list[this.oldindex].style.display = '';
      // this.list.splice(evt.newIndex, 0, this.oldval);
      // this.$refs.list.forEach(item => {
      //   item.style.marginTop = '';
      // });
      // // 拖动结束
      console.log('拖动前的索引 :' + evt.oldIndex)
      console.log('拖动后的索引 :' + evt.newIndex)
    }
  }
}
</script>
<style scoped>
body {
  font-family: "微软雅黑";
}
[v-cloak] {
  display: none;
}
#example {
  width: 1000px;
  margin: 0 auto;
}
.list-complete-item {
  transition: all 1s;
  height: 50px;
  line-height: 50px;
  background: #000;
  color: #fff;
  text-align: center;
  font-size: 24px;
  margin-top: 10px;
}
.styleclass {
  width: 100px;
  float: left;
}
/* .list-complete-enter,
.list-complete-leave-active {
  opacity: 0;
  height: 0px;
  margin-top: 0px;
  padding: 0px;
  border: solid 0px;
}
.list-complete-sortable-chosen,
.list-complete-sortable-ghost {
  opacity: 0;
  height: 0px;
  margin-top: 0px;
  padding: 0px;
  border: solid 0px;
} */
.dargDiv {
  cursor: move;
  background: red;
}
.wrods {
  margin-top: 50px;
}
p {
  line-height: 24px;
  text-align: center;
}
</style>
