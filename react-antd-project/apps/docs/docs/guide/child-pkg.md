# 抽取子包
主项目优化：将通用的，业务无关的部分，抽取为子包。使得主项目更清晰！

## 集成tailwind
Tailwind有一堆预设的 css 样式集合，而且它会按需打包 class 样式，并智能解决class冲突等问题，所以无论你是使用什么ui框架，它都推荐作为基础配置！

### 抽离到子包
将 tailwind 抽离到 @repo/config-tailwind 中，内容大致如下
```shell
config-tailwind
  |--config
  |--layers # 自定义className
    |--base.css # 基础类，如html、body等
    |--components.css  # 组件类，如输入框、按钮等
    |--utilities.css # 工具类，如阴影、圆角等
  |--themes # 主题
  |--base-styles.css # 入口
  |--package.json
  |--postcss.config.js # PostCSS 插件
```

:::tip 为啥要PostCSS
不同于 Vite，在 Rsbuild 中 Tailwind CSS v4 需要通过 PostCSS 插件来来注册 Tailwind CSS 的 PostCSS 插件。
:::

### 使用子包
虽然你在 @repo/config-tailwind 包里已经配置好了 PostCSS，但 Rsbuild 需要在当前项目目录下找到 postcss.config.js 文件才能正确加载这些配置。因此main项目也需要此文件
```js title=mian/postcss.config.js
import { postcssConfig } from '@repo/config-tailwind/postcss';

export default postcssConfig;
```

哦，对了别忘了，记得在 main项目安装它`pnpm add --D @repo/config-tailwind --workspace`.

最后 在 apps/main 项目的 style.css 引用即可
```css App.css
@import "@repo/config-tailwind";
```

看看效果，在 App.tsx 中`<p className="text-red-300">你好</p>`

## 集成antd
按照官网即成即可！

## 集成自己组件库
有些时候我们也想自己抽离一些跟业务无关的纯ui组件库。

### 抽离到子包
在packages创建新的子包项目 ui-custom，并初始化它
```shell
ui-custom
  |--src # 自定义组件们
  |--package.json
  |--tsconfig.json 
     # 作为独立子包所需的ts配置，
     # 注意特意为它提出了一个
     # @repo/config-ts/react-lib.json
```

另外为了方便合并外部class，还特意为此子包封装个了 cn 工具函数。

我们定义一个自定义的 `Card组件`吧
```jsx title=packages/ui-custom/src/card/index.tsx
import React from "react";
import {cn} from "../utils"

type CardPops = React.ComponentProps<'div'> 
export default function Card(props: CardPops){
    return <div className={cn('border', props.className)}>
        {props.children}
    </div>
}
```


### 使用子包
进入到主项目 main，安装此包 `pnpm add @repo/ui-custom --workspace`
```jsx title=apps/main/src/App.tsx
import "./App.css";
import Card from "@repo/ui-custom/card"

const App = () => {
  return <Card>你好啊</Card>;
};

export default App;
```


## 封装通用工具类
创建一个子包 `@repo/utils`使用，这个没有什么好讲的，看代码即可！