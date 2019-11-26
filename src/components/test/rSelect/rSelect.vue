<template>
  <div :class="{'r-select':true,'r-border':config.showBottomBorder}">
    <div class="r-select-txt-wrap">
      <label class="r-select-label" v-show="config.showLabel">{{config.title}}</label>
      <div class="r-select-input right" @click="showPicker">{{text?text:config.placeholder}}</div>
    </div>
  </div>
</template>
<script>
import Picker from 'better-picker';
export default {
  props: {
    config: {
      type: Object,
      default: () => {
        return {
          title: '',
          placeholder: '',
          val: '', //默认值
          showBottomBorder: false,
          showLabel: true,
          data: [] //下拉选项
        };
      }
    }
  },
  data() {
    return {
      currentVal: this.config.val,
      data2: [
        {
          value: 100,
          text: '100'
        },
        {
          value: 200,
          text: '200'
        },
        {
          value: 300,
          text: '300'
        },
        {
          value: 400,
          text: '400'
        }
      ]
    };
  },
  computed: {
    text() {
      let item = this.config.data.find(item => item.value == this.currentVal);
      console.log(item.text);
      return item.text || '';
    }
  },
  methods: {
    showPicker() {
      this.picker = new Picker({
        data: [this.config.data, this.data2]
      });
      let _this = this;
      this.picker.on('picker.select', function(selectedVal) {
        console.log(selectedVal);
        _this.currentVal = selectedVal[0];
      });
      this.picker.show();
    }
  }
};
</script>
<style lang="scss" scoped>
.r-select {
  position: relative;
  overflow: hidden;
  background: #fff;
  width: 100%;
  color: #333;
  font-size: r(14);
  .r-select-txt-wrap {
    height: r(45);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: r(15);
    padding-right: r(15);
    position: relative;
    .r-select-label {
      padding-right: r(20);
      display: inline-block;
      text-align: left;
    }
    .r-select-input {
      flex: 1;
      margin-right: r(7);
    }
  }
  .r-select-children {
    margin-left: r(10);
  }
  &.r-border {
    border-bottom: 1px solid #ccc;
  }
}
</style>
