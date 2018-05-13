# remove-webpack-plugin


如何使用

```
const PurifyCSSPlugin = require('remove-webpack-plugin');

new RemoveWebpackPlugin({
    filterPath: /^\/css\/.*\.js?$/ig
})
```

filterPath 为正则表达式

该插件解决了，当入口文件为less，或sass时，会额外产生js文件的问题