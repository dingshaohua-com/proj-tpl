import Router from '@koa/router';
import { UserDto } from '../dto/user';
import { BizError } from '../middleware/response';
import {validateRestfull} from '../middleware/validate';

// mock假数据
const users = [
	{ id: 1, name: '张三', age: 20 },
	{ id: 2, name: '李四', age: 18 },
];

const router = new Router({ prefix: '/users' });

router.get('/', (ctx) => {
	// ctx.state.skipWrap = true; // 假设不需要包装结果
	ctx.body = users;
});


router.get('/:id', validateRestfull(UserDto), (ctx) => {
	const id = Number(ctx.state.params.id);
	const user = users.find((u) => u.id === id);
	if (!user) {
		throw new BizError('用户不存在');
	}
	ctx.body = user;
});

export default router;
