var trunc = require("./module-741.js");
module.exports = function(argument) {
    var number = +argument;
    return number !== number || number === 0 ? 0 : trunc(number);
};
