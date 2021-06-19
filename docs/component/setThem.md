# 自定义主题
默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。
## 在项目中改变 SCSS 变量
新建一个sass文件 index.css 代码如下
```scss{2,7}
    /* 改变主题色变量 */
    $--color-primary: red;


    /* 改变 icon 字体路径变量，必需 */
    // $--font-path: 'zion-ui-plus/packages/fonts';
    @import 'zion-ui-plus/packages/style/index'
```
之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 zion-ui 编译好的 CSS 文件）：

```js{6}
    import { createApp } from 'vue'
    import App from './App.vue'

    import ZIONUI from "zion-ui-plus"
    // import 'zion-ui-plus/theme-chalk/ZIONUI.css'
    import './style/index.scss'

    const app = createApp(App)
    app.use(ZIONUI)
    app.mount('#app')
```



