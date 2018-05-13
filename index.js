function RemoveWebpackPlugin(options) {
  this.options = options;
}

RemoveWebpackPlugin.prototype.apply = function(compiler) {
  let path = this.options.filterPath;
  compiler.plugin('emit', function(compilation, callback) {
    let keys = Object.keys(compilation.assets);
    keys.forEach(function(key) {
      if(path.test(key)) {
        delete compilation.assets[key];
      }
    });

    callback();
  });
};

module.exports = RemoveWebpackPlugin;