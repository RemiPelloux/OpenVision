var $ = require("./module-6518.js");
var $transfer = require("./module-5636.js");
if ($transfer) $({
    target: "ArrayBuffer",
    proto: true
}, {
    transferToFixedLength: function transferToFixedLength() {
        return $transfer(this, arguments.length ? arguments[0] : void 0, false);
    }
});
