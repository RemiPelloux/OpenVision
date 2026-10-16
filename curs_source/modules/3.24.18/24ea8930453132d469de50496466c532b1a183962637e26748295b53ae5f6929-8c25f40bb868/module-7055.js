var uncurryThis = require("./module-9504.js");
var fails = require("./module-9039.js");
var classof = require("./module-2195.js");
var $Object = Object;
var split = uncurryThis("".split);
module.exports = fails(function() {
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;
