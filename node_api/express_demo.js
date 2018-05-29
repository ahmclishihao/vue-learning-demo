const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 8181;
const host = '0.0.0.0';

// 配置post内容解析器
app.use(bodyParser.urlencoded({
  extended: true
}));

// 处理响应拦截器 允许所有的跨域
app.all('*', function (req, res, next) {
  res.header("Accept", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

const server = app.listen(port, host, () => {
  let address = server.address().address;
  let port = server.address().port;
  console.log(`API服务器已经启动 http://${address}:${port} `);
});

// 用户管理模块
const userList = [];
let nextUserId = 23;

for (let i = 1; i < 23; i++) {
  userList.push({
    "id": 1 + i,
    "name": `张三 ${i}`,
    "age": 11,
    "address": `南京`,
    "birthday": "2017-07-07",
    "type": "male",
    "favorites": [
      "兵乓球",
      "跳舞",
      "画画"
    ]
  });
}

function getNextUserId() {
  return nextUserId++;
}

app.get('/userList', (req, res) => {
  let pageNum = Number.parseInt(req.query.pageNum);
  let pageSize = Number.parseInt(req.query.pageSize);
  let start = (pageNum - 1) * pageSize;
  let end = start + pageSize;
  res.send({
    data: userList.slice(start, end),
    total: userList.length
  });
});

app.all('/addUser', (req, res) => {
  console.log(req.body);
  userList.push({
    id: getNextUserId(),
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    birthday: req.body.birthday,
    type: req.body.type,
    favorites: req.body.favorites
  })
  res.send({
    code: '0000',
    data: true,
    message: '操作成功'
  })
});
