const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios')
const app = new Koa();
const router = new Router();

router.get('/*', async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
    ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH');
    const api = ctx.url.substring(1);
    const res = await axios.get(api);
    console.log(res)
    ctx.body = res.data;
    next();
  });

app.use(router.routes());
app.listen(4000);