# ZGverify 文字校验组件
一般用于输入框验证码校验，防止频繁提交。

## 使用
```html
    <z-gverify ref="gverify" ></z-gverify>
```
```js{4,10}
export default defineComponent({
  name: 'App',
  setup(){
    const gverify = ref(null) // 通过 ref 绑定子组件
    const jiaoyan = ()=>{
      let code = (gverify as any).value.validate('123')
      console.log(code);
    }
    return {
      gverify,
      jiaoyan
    }
  }
});
```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   | 功能 |
|---------- |-------- |---------- |-------------  |-------- |-------- |
| width     | 类型   | number    |   - |     120    | 宽度|
| height     | 类型   | number    |   - |     30    | 高度|
| size     | 类型   | number    |   any |     4    | 文字数量|
| iswire     | 类型   | boole    |   true |     false    | 是否加干扰线|
| isPoint     | 类型   | boole    |   true |     false    | 是否加干扰点|
| blend     | 类型   | string    |   blend、number、letter |     blend    | 模式分别是字母加数字、数字、字母|

### 方法
| 参数      | 说明    | 类型      | 入参       | 返回   | 功能 |
|---------- |-------- |---------- |-------------  |-------- |-------- |
| validate     | 类型   | function    |   string |     boole   | 检验code是否一致|