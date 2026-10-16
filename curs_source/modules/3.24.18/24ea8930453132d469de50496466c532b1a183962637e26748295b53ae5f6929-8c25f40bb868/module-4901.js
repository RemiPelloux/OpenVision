var documentAll = typeof document == "object" && document.all;
module.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};
