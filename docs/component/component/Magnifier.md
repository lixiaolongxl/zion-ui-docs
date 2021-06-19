# ZMagnifier 放大镜
  图片放大

## 使用

```html
    <z-magnifier 
      link="www.baidu.com"
      :imgUrl="data.imgUrl"
      :width="data.width"
      :height="data.height"
      :magWidth="data.magWidth"
      :magHeight="data.magHeight"
      @linkClick="HandClick"
    ></z-magnifier>
```

``` js
export default defineComponent({
  name: 'App',
  setup(){
    const data = reactive<magnifierprop>({
      imgUrl:'https://lixiaolongxl.github.io/img/logo.jpeg',
      width:300,
      height:300,
      magWidth:100,
      magHeight:100,
    })
    const HandClick = (linkUrl:string)=>{
      debugger
    }
    return {
      data,
      HandClick
    }
  }
});
```
### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   | 功能 |
|---------- |-------- |---------- |-------------  |-------- |-------- |
| link     | 类型   | string    |   - |     —    | 点击跳转地址|
| imgUrl     | 类型   | string    |   - |     —    | 图片地址|
| width     | 类型   | number    |   - |     200    | 图片默认宽度|
| height     | 类型   | number    |   - |     200    | 图片默认高度|
| magWidth     | 类型   | number    |   - |     100    | 拖动区域默认宽度|
| magHeight     | 类型   | number    |   - |     100    | 拖动区域默认高度|