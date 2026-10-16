var TO_STRING_TAG_SUPPORT = require("./module-2140.js");
var isCallable = require("./module-4901.js");
var classofRaw = require("./module-2195.js");
var wellKnownSymbol = require("./module-8227.js");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var $Object = Object;
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) === "Arguments";
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
};
