module.exports = function(methodName, argument) {
    var method = typeof Iterator == "function" && Iterator.prototype[methodName];
    if (method) try {
        method.call({
            next: null
        }, argument).next();
    } catch (error) {
        return true;
    }
};
