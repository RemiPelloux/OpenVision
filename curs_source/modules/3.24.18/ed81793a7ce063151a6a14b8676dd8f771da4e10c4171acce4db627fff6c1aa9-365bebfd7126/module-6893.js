var n = require("./module-5234.js");
module.exports = !n(function() {
    return 7 !== Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1];
});
