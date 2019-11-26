<template>
  <div class="r-textarea">
    <div>
      <label class="r-textarea-label">
        <span>{{attrs.title}}</span>
      </label>
      <div class="textarea-wrap">
        <textarea
          rows="5"
          :type="attrs.inputType"
          :name="attrs.name"
          :placeholder="attrs.placeholder"
          :maxlength="attrs.maxlength"
          @input="onInput"
          @keyup.enter="onEnter"
          @focus="onFocus"
          v-model="currentValue"
        >
        ></textarea>
        <rIcon
          :type="attrs.inputIconType"
          size="0.8rem"
          v-show="showInputIcon"
          @iconClick="onclickInputIcon"
        ></rIcon>
        <p v-show="surplus<=40">{{surplus}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'rTextarea',
  props: {
    attrs: {
      type: Object,
      default: {
        title: '表单名称',
        name: '',
        value: '',
        placeholder: '请输入',
        maxlength: -1,
        //显示input后面icon
        showInputIcon: false,
        //input后面icon的类型
        inputIconType: 'close-circled',
        showLabel: true
      }
    }
  },
  data() {
    return {
      currentValue: this.attrs.value || '',
      showKb: false, //控制光标
      surplus: this.attrs.maxlength //剩余字数
    };
  },
  computed: {
    showInputIcon() {
      if (this.attrs.inputIconType == 'close-circled') {
        if (this.attrs.showInputIcon && this.currentValue && this.showKb) {
          return true;
        } else {
          return false;
        }
      } else {
        return this.attrs.showInputIcon;
      }
    }
  },
  watch: {
    'attrs.value': function(newval, oldval) {
      this.currentValue = newval;
    }
  },
  methods: {
    onEnter(e) {
      this.$emit('onenter', e, this);
    },
    onFocus(e) {
      this.$emit('onfocus', e, this);
      this.showKb = true;
    },
    onInput(e) {
      this.currentValue = e.target.value;
      let done = this.getCharCode(e.target.value);
      console.log(done);
      if (done <= attrs.maxlength) {
        this.surplus = attrs.maxlength - done;
      }
      this.$emit('oninput', e, this);
    },
    onclickInputIcon(e) {
      if (this.attrs.inputIconType == 'close-circled') {
        this.$el.querySelector('textarea').focus();
        this.currentValue = '';
        this.surplus = attrs.maxlength;
        this.$emit('onclear', this);
      } else {
        this.$emit('onclickInputIcon', this);
      }
    },
    getCharCode(str) {
      let len = str.length;
      for (let i = 0; i < len; i++) {
        if (str.charCodeAt(i) > 255) {
          len++;
        }
      }
      return len;
    }
  }
};
</script>
<style lang="scss">
.r-textarea {
  width: 100%;
  height: 120px;
  padding: 10px 15px;

  background: #fff;

  font-size: 14px;
  label {
    width: 100%;
  }
  textarea {
    width: 95%;

    outline: none;
  }
  .textarea-wrap {
    position: relative;
    p {
      text-align: right;

      color: red;
    }
    span {
      position: absolute;
      top: 0px;
      right: 0px;
    }
  }
  .r-iconfont-close-circled:before {
    color: #d0d0d3;
  }
}
</style>