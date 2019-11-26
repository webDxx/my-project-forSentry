/**
 * create time: 2018-09-21
 * author: dongsheng
 * fn: 验证数据是否合法，内置部分常用 验证规则，具体参考源码 _hook
 * 参数： 接受数据配置对象
 * 数据格式：
 * //其中 validate 非必选参数，自定义验证逻辑，正则  或者 函数（参数为value,返回ret）
 * ret 有多种可能性
 * 1. 一个promsie，代表异步，reject 可以附带错误信息(非必需)
 * 2. 一个 boolean 值，ture 表示验证 通过，false表示失败
 * 3. 一个 Object， 里面必填 failed 表示结果，msg表示错误信息，非必填
 * [
 *    {
 *        name: 'xxx',
 *        value: xxxx,
 *        rules: [
 *            {
 *                rule: 'required',
 *                validate: '',
 *                msg: '验证失败提示信息'
 *            }
 *        ]
 *    }
 * ]
 * 返回一个promise，理论此promise 只有 resolve 成功态，传递 验证结果数据
 * {
 *    failed: false,
 *    validate: {}
 * }
 */
const regexs = {
  /**
   * @descrition:邮箱规则
   * 1.邮箱以a-z、A-Z、0-9开头，最小长度为1.
   * 2.如果左侧部分包含-、_、.则这些特殊符号的前面必须包一位数字或字母。
   * 3.@符号是必填项
   * 4.右则部分可分为两部分，第一部分为邮件提供商域名地址，第二部分为域名后缀，现已知的最短为2位。最长的为6为。
   * 5.邮件提供商域可以包含特殊字符-、_、.
   */
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  // email: /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,

  /**
   *@descrition:手机号码段规则
   * 13段：130、131、132、133、134、135、136、137、138、139
   * 14段：145、147
   * 15段：150、151、152、153、155、156、157、158、159
   * 17段：170、176、177、178
   * 18段：180、181、182、183、184、185、186、187、188、189
   * 国际码 如：中国(+86)
   */
  // phone: /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|15[012356789]|17[03678]|18[0-9])\d{8}$/,
  phone: /^1[\d]{10}$/,
  english: /^[A-Za-z\s]+$/,
  chinese: /^([\u4e00-\u9fa5]+)$/,
  number: /^[\d]+$/,
  idNumber: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  zhSpecialChars: /[……·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im,
  enSpecialChars: /[……`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
};
const _hook = {
  isEmpty: value => !_hook.required(value),
  required: value => value !== null && value !== '',
  isEmail: value => regexs.email.test(value),
  isPhone: value => regexs.phone.test(value),
  isEnglish: value => regexs.english.test(value),
  isChinese: value => regexs.chinese.test(value),
  isNumber: value => regexs.number.test(value),
  isIdNumber: value => regexs.idNumber.test(value),
  isContainSpecialCharacters: value =>
    regexs.zhSpecialChars.test(value) || regexs.enSpecialChars.test(value),
};

function isFn(fn) {
  return typeof fn === 'function';
}

function isRegExp(p) {
  return Object.prototype.toString.call(p) === '[object RegExp]';
}

function Validator(data) {
  return new Promise((resolve, reject) => {
    const tasks = [];

    const result = {};
    let failed = false;
    if (!Array.isArray(data)) {
      reject(new Error('数据格式不正确'));
      return false;
    }
    if (data.length < 1) {
      reject(new Error('验证数据为空'));
      return false;
    }
    try {
      for (let i = 0, len = data.length; i < len; i++) {
        const { name, value, rules } = data[i];

        const rulesPromise = [];
        for (let j = 0; j < rules.length; j++) {
          const { rule, validate, msg } = rules[j];
          // 根据规则验证
          const p = new Promise((ruleResolve, ruleReject) => {
            if (rule) {
              // 调用内置rule验证
              if (isFn(_hook[rule])) {
                if (!_hook[rule](value)) {
                  ruleReject(msg);
                } else {
                  ruleResolve();
                }
              }
            }
            if (validate) {
              if (isFn(validate)) {
                /**
                 * ret 有多种可能性
                 * 1. 一个promsie，代表异步，reject 可以附带错误信息(非必需)
                 * 2. 一个 boolean 值，ture 表示验证 通过，false表示失败
                 * 3. 一个 Object， 里面必填 failed 表示结果，msg表示错误信息，非必填
                 */
                const ret = validate(value);
                if (ret && typeof ret.then === 'function') {
                  ret
                    .then(() => ruleResolve())
                    .catch(err => ruleReject(err || msg));
                } else if (typeof ret === 'boolean') {
                  if (ret) ruleResolve();
                  else ruleReject(msg);
                } else {
                  if (ret.failed) {
                    ruleReject(ret.msg || msg);
                  } else {
                    ruleResolve();
                  }
                }
              } else if (isRegExp(validate)) {
                if (!validate.test(value)) {
                  ruleReject(msg);
                } else {
                  ruleResolve();
                }
              }
            }
          });
          rulesPromise.push(p);
        }
        const dataPromise = Promise.all(rulesPromise)
          .then(() => {
            if (name) {
              result[name] = {
                status: 1,
                help: '',
              };
            }
          })
          .catch(err => {
            failed = true;
            if (name) {
              result[name] = {
                status: 0,
                help: err,
              };
            }
          });

        tasks.push(dataPromise);
      }
      /**
       * 理论上此 catch 不会执行，因为每个rulesPromise捕获自身的catch
       */
      Promise.all(tasks)
        .then(() => {
          resolve({
            failed,
            validate: {
              ...result,
            },
          });
        })
        .catch(err => {
          reject(err);
        });
    } catch (err) {
      reject(err);
      return false;
    }
    return true;
  });
}

Object.keys(_hook).forEach(key => {
  Validator[key] = _hook[key];
});

export default Validator;
