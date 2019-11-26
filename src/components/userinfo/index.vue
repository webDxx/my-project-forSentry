<template>
  <div class="userinfo-wrap">
    <rTitlebar :tbStyle="{background:'#fff',color:'#333'}" title="个人信息">
    </rTitlebar>
    <uploadImg />
    <div class="workinfo">
      <ul>
        <li>
          <div>姓名</div>
          <div wrap="c_999">小明</div>
        </li>
        <li>
          <div>职位</div>
          <div wrap="c_999">高级顾问</div>
        </li>
      </ul>
    </div>
    <div class="introduce">
      <ul>
        <li>
          <rNumber :attrs="configphone" :ref="configphone.name" @oninput="getCount"></rNumber>
        </li>
        <li>
          <rInput :attrs="configwchat" :ref="configwchat.name">
          </rInput>
        </li>
        <li>
          <rSelect :attrs="config" :ref="config.name"></rSelect>
        </li>
        <li>
          <rTextarea :attrs="textareaConfig" @input="oninput" />
        </li>
      </ul>
    </div>
    <rButton type="unchoose" @click="doSubmit">
      圆角
    </rButton>

    <rButton type="choose" @click="doSubmit" class="footer">保存</rButton>
  </div>
</template>
<script>
import uploadImg from './uploadImg';
import rTextarea from './rTextarea/rTextarea';
import rSelect from './rSelect/rSelect';
import obj from './const';
export default {
  components: { uploadImg, rTextarea, rSelect },
  data() {
    return {
      config: obj.config,
      configwchat: obj.configwchat,
      configphone: obj.configphone,
      textareaConfig: {
        title: '自我介绍',
        placeholder: '介绍一下自己',
        maxlength: 140,
        //显示input后面icon
        showInputIcon: true,
        //input后面icon的类型
        inputIconType: 'close-circled',
        showLabel: true
      },
      file: null, //上传的文件对象
      current_img: '',
      figure_img:
        'https://static.rong360.com/upload/png/08/39/08391341b9b4428ab5eeb6e42d962bd8.png'
    };
  },
  methods: {
    getCount(count) {
      this.configphone.value = count;
    },
    oninput(e) {
      let done = this.getCharCode(e.target.value);
      console.log(done);
      if (done <= 140) {
        this.surplus = 140 - done;
      }
    },
    doSubmit() {
      let pass = true;
      for (var key in this.$refs) {
        let el = this.$refs[key];
        if (el) {
          if (!el.attrs.verify(el.currentValue)) {
            this.$toast(el.attrs.msg);
            pass = false;
            break;
          }
        }
      }
      if (!pass) return;
      console.log(pass + '+提交代码');
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
<style lang="scss" scoped>
.imginput {
  display: none;
}
.userinfo-wrap {
  width: 100%;
  height: 100%;

  background: #edeff1;

  font-size: 14px;
  ul li {
    display: flex;
    justify-content: space-between;

    border-bottom: #ccc;

    line-height: 30px;
  }
  .workinfo {
    padding: 10px 15px;

    background: #fff;
  }
  .logo {
    float: left;

    width: 40px;
    height: 40px;
    margin-right: 10px;

    border-radius: 20px;
    background: url('./assets/logo.png') no-repeat center / 100%;
  }
}
.footer {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}
.footer-test div {
  background: transparent;
}
</style>


