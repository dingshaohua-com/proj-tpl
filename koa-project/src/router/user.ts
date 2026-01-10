import Router from '@koa/router';

const router = new Router({ prefix: '/user' });

router.get('/', (ctx) => {
  // ctx.state.skipWrap = true; // 假设不需要包装结果
  ctx.body = [
    {uname:'张三', age:20}
  ];
});

export default router;
