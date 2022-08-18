class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap("My Plugin", (compilation) => {
      console.log("The webpack build process is starting!");
    });
    compiler.hooks.done.tap("My Plugin", (compilation) => {
      console.log("The webpack build process is done!");
    });
  }
}

module.exports = MyWebpackPlugin;
