// 引入mockjs
const Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const simulateData = function () {
  let data = []
  for (let i = 0; i < 8; i++) {
    let data2 = {
      name: Random.cname(),
      date: Random.date(),
      city: Random.city()
    }
    data.push(data2)
  }

  return {
    data: data
  }
}

Mock.mock('/user/login', 'get', simulateData)
