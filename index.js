var coffee = require("coffee-script");
coffee.register();
var File = require("fs");
if (!require.extensions[".coffee"]) {
  require.extensions[".coffee"] = function (module, filename) {
    var source = coffee.compile(File.readFileSync(filename, "utf8"));
    return module._compile(source, filename);
  };
}
module.exports = require("./index.coffee");
