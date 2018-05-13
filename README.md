# jay-remove-webpack-plugin


如何使用

```
const PurifyCSSPlugin = require('jay-remove-webpack-plugin');

new RemoveWebpackPlugin({
    filterPath: /^\/css\/.*\.js?$/ig
})
```

filterPath 为正则表达式

该插件解决了，当入口文件为less，或sass时，会额外产生js文件的问题

效果： webpack生成文件时，将会不会生成符合filterPath的文件