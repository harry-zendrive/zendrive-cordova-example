cordova.define("com-zendrive-plugin-sdk.ZendriveFinalPlugin", function(require, exports, module) {
var exec = require('cordova/exec');

exports.setup = function (arg0, success, error) {
    exec(success, error, 'ZendriveFinalPlugin', 'setup', [arg0]);
};

});
