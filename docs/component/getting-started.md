# 快速开始
本节将介绍如何在项目中使用 ZIONUI。

## 使用 vue-cli@3
我们为新版的 vue-cli 准备了相应的 ZIONUI。 插件，你可以用它们快速地搭建一个基于 ZIONUI。 的项目。

## 引入 ZIONUI
    你可以引入整个 EZIONUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 ZIONUI
### 完整引入
在 main.ts 中写入以下内容：
``` js{4,5}
import { createApp } from 'vue'
import App from './App.vue'

import ZIONUI from "zion-ui-plus"
import 'zion-ui-plus/theme-chalk/ZIONUI.css'

const app = createApp(App)
app.use(ZIONUI)
app.mount('#app')

```

### 单个引入
接下来，如果你只希望引入部分组件，比如 Button 和 那么需要在 main.ts 中写入以下内容：

``` js{3,4}
import { createApp } from 'vue'
import App from './App.vue'
import { ZButton } from 'zion-ui-plus';
const app = createApp(App)
app.component(ZButton.name, ZButton);
app.mount('#app')
```