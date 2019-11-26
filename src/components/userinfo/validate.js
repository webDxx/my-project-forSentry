import Validator from './validater';
let mobile;
const checkData = {
  mobile: {
    rules: [
      {
        rule: 'required',
        msg: '请填写手机号码',
      },
      {
        rule: 'isNumber',
        msg: '请填写正确手机号码',
      },
      {
        validate: () => {
          if (code === 86) {
            let phone = /^1[\d]{10}$/;
            return phone.test(mobile);
          }
          return true;
        },
        msg: '请填写正确手机号码',
      },
    ],
  },
  wchat: {
    rules: [
      {
        rule: 'required',
        msg: '请填写微信号',
      },
    ],
  },
};
function getValidateData(state, prop) {
  let arr = [];
  if (!prop) {
    // 验证全部
    arr = Object.keys(checkData).map(key => {
      checkData[key].name = key;
      checkData[key].value = state[key];
      return Object.assign({}, { ...checkData[key] });
    });
  } else {
    // 验证name
    if (!checkData[prop]) {
      return arr;
    }
    checkData[prop].name = prop;
    checkData[prop].value = state[prop];
    arr.push(Object.assign({}, { ...checkData[prop] }));
  }
  return arr;
}

export default ({ payload, prop }, callback = () => {}) => {
  let { mobile } = payload;
  const data = getValidateData(payload, prop);
  return Validator(data)
    .then(result => {
      callback(result);
    })
    .catch(err => console.log(err));
};
