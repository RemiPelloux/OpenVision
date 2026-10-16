var store = require("./module-7629.js");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};
