
import Router from '@koa/router';
import rootRouter from './root.ts';
import userRouter from './user.ts';

const routers = [rootRouter, userRouter];
const wrappRouter = new Router({ prefix: '/api' });  
routers.forEach(router => {
  wrappRouter.use(router.routes(), router.allowedMethods());
});

export default wrappRouter;
