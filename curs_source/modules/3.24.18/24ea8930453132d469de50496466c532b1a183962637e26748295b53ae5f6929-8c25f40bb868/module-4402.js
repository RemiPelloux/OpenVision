var uncurryThis = require("./module-9504.js");
var SetPrototype = Set.prototype;
module.exports = {
    Set,
    add: uncurryThis(SetPrototype.add),
    has: uncurryThis(SetPrototype.has),
    remove: uncurryThis(SetPrototype["delete"]),
    proto: SetPrototype
};
