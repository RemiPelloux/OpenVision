var n = require("./module-5234.js"), o = require("./module-831.js"), i = require("./module-8689.js"), a = require("./module-5469.js"), u = Object.isExtensible, s = n(function() {
    u(1);
});
module.exports = s || a ? function(t) {
    return !!o(t) && (!a || "ArrayBuffer" !== i(t)) && (!u || u(t));
} : u;
