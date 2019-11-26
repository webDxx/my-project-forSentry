export default {
  config: {
    title: '从业时间',
    name: 'loan_term',
    value: '0',
    required: true,
    placeholder: '请选择从业时间',
    data: [
      {
        text: '不显示',
        value: '0',
      },
      {
        text: '1年',
        value: '1',
      },
      {
        text: '2年',
        value: '2',
      },
      {
        text: '3年',
        value: '36',
      },
    ],
    verify(val, selectedIndex) {
      if (val.value == 0) {
        return false;
      } else {
        return true;
      }
    },
  },
  configwchat: {
    title: '微信号',
    name: 'wchat',
    value: '',
    required: true,
    placeholder: '请输入微信号',
    unit: '',
    msg: '',
    verify: function(value) {
      if (!value) {
        this.msg = '请输入微信号';
        return false;
      } else {
        return true;
      }
    },
  },
  configphone: {
    title: '手机号',
    name: 'phone',
    value: '',
    required: true,
    placeholder: '请输入手机号',
    msg: '',
    verify: function(value) {
      let rule = /^1[\d]{10}$/;
      if (!value) {
        this.msg = '请输入手机号';
        return false;
      } else if (!rule.test(value)) {
        this.msg = '请输入正确的手机号';
        return false;
      } else {
        return true;
      }
    },
  },
};
