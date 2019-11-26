import * as express from 'express'

const app = express()
app.get('/', function (req: any, res: any) {
  res.end('hello, world')
})

app.listen(3000, function () {
  console.log('server is listening')
})
