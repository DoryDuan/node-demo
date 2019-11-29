const Koa = require('koa');

const app = new Koa();

// 注意require('koa-router')返回的是函数:
const bodyParser = require('koa-bodyparser');

// 导入controller middleware:
const controller = require('./controller');

app.use(bodyParser());

// 使用middleware:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');