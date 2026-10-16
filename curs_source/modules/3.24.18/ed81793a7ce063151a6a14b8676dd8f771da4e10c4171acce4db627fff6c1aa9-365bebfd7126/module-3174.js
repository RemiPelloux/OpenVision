var r = String;
module.exports = function(t) {
    try {
        return r(t);
    } catch (t) {
        return "Object";
    }
};
