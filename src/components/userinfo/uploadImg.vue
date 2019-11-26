<template>
  <div>
    <div
      wrap="flex mt_15 mb_15 jc_sb lh_40"
      class="head"
      @click="doUpload"
    >
      <div>头像</div>
      <div>
        <div class="logo"></div>
        <rIcon
          type="arrow-right"
          size=".8rem"
          color="#000"
          @iconClick="onclickIcon"
        ></rIcon>
      </div>
    </div>
    <input
      class="imginput"
      type="file"
      @change="handleChange"
      accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: null, //上传的文件对象
      current_img: '',
      figure_img:
        'https://static.rong360.com/upload/png/08/39/08391341b9b4428ab5eeb6e42d962bd8.png'
    };
  },
  methods: {
    // input点击事件
    onclickIcon(e, component) {
      console.log(e);
      console.log(component);
    },
    // 上传图片
    doUpload() {
      document.querySelector('.imginput').click();
    },
    handleChange(e) {
      console.log(e);
      let files = e.target.files;
      console.log(files);
      if (!files.length) {
        return;
      }
      this.file = files[0];
      console.log(this.file);
      let _this = this;
      let reader = new FileReader();
      reader.onload = function(evt) {
        _this.current_img = evt.target.result;
        _this.upload(); //上传进行ocr校验
      };
      reader.readAsDataURL(this.file);
    },
    upload() {
      if (typeof XMLHttpRequest === 'undefined') {
        return;
      }

      const xhr = new XMLHttpRequest();
      let _this = this,
        formData = new FormData();
      formData.append('policy_order_id', 123);
      formData.append('policy_id', 123);
      formData.append('imgbinary', _this.file);
      formData.append('is_holder', _this.index == 0 ? 1 : 0);
      formData.append('type', 1);

      xhr.onerror = function error(e) {
        _this.showError('上传失败，请稍后重试');
      };

      xhr.onload = function onload() {
        if (xhr.status < 200 || xhr.status >= 300) {
          _this.showError('上传失败，请稍后重试');
        } else {
          try {
            let res = JSON.parse(xhr.responseText);
            if (res.status == 0) {
              _this.has_pass = res.data.pass == 0 ? 0 : 1;
            }
            res.status != 0 &&
              _this.showError(
                res.msg || res.statusInfo || '上传失败，请稍后重试'
              );
          } catch (e) {
            _this.$toast('服务出错，请稍后重试');
          }
        }
      };

      xhr.open('post', '/order/main/uploadmaterial', true);

      xhr.send(formData);
    },
    showError(msg) {
      this.$toast({
        propsData: {
          type: 'negetive',
          message: msg || '服务器偷懒了，请稍后再试'
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.imginput {
  display: none;
}
.head {
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
</style>

