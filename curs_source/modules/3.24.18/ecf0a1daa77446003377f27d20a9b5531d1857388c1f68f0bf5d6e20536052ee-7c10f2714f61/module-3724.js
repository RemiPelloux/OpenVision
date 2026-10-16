var s = require("./module-9039.js");
module.exports = !s(function() {
    return 7 !== Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1];
});
