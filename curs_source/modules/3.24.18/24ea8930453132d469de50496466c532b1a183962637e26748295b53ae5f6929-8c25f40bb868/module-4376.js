var classof = require("./module-2195.js");
module.exports = Array.isArray || function isArray(argument) {
    return classof(argument) === "Array";
};
