var fails = require("./module-9039.js");
module.exports = !fails(function() {
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});
