import { z } from 'zod';

export const UserDto = z.object({
	id: z.string()
});

// 一键生成 TS 类型:完全等同于手写 interface
export type UserDto = z.infer<typeof UserDto>; 
