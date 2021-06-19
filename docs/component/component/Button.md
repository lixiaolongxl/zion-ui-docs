# ZButton按钮
常用的操作按钮。

### 基础用法

:::demo 使用`type`属性来定义 Button 的样式。

```html
<el-row>
    <z-button >默认按钮</z-button>
    <z-button type="primary">主要按钮</z-button>
    <z-button type="success">成功按钮</z-button>
    <z-button type="warning">警告按钮</z-button>
    <z-button type="danger">危险按钮</z-button>
    <z-button type="info">信息按钮</z-button>
</el-row>
```

::: tip
可选属性
:::
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |

