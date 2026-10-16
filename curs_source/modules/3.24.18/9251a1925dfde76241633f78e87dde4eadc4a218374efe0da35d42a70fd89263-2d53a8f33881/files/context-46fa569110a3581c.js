var BaseContext, ROOT_CONTEXT;
export { BaseContext, ROOT_CONTEXT };
var __wakaru_init_context_initialized = false;
export function init_context() {
if (__wakaru_init_context_initialized) return;
__wakaru_init_context_initialized = true;
BaseContext = (function() {
    function BaseContext2(parentContext) {
        var self2 = this;
        self2._currentContext = parentContext ? new Map(parentContext) : new Map();
        self2.getValue = function(key) {
            return self2._currentContext.get(key);
        };
        self2.setValue = function(key, value) {
            var context2 = new BaseContext2(self2._currentContext);
            context2._currentContext.set(key, value);
            return context2;
        };
        self2.deleteValue = function(key) {
            var context2 = new BaseContext2(self2._currentContext);
            context2._currentContext.delete(key);
            return context2;
        };
    }
    return BaseContext2;
})();
ROOT_CONTEXT = new BaseContext();

}
