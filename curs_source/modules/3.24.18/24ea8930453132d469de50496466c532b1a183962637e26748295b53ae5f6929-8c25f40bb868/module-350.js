var DESCRIPTORS = require("./module-3724.js");
var hasOwn = require("./module-9297.js");
var FunctionPrototype = Function.prototype;
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS,
    PROPER,
    CONFIGURABLE
};
