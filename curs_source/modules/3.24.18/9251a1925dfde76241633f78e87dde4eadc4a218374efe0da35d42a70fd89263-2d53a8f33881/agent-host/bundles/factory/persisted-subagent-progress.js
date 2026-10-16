var __classPrivateFieldGet4, _PersistedSubagentProgressRegistry_byStore, PersistedSubagentProgressRegistry, persistedSubagentProgressRegistry;
export { PersistedSubagentProgressRegistry, _PersistedSubagentProgressRegistry_byStore, __classPrivateFieldGet4, persistedSubagentProgressRegistry };
var __wakaru_init_persisted_subagent_progress_initialized = false;
export function init_persisted_subagent_progress() {
if (__wakaru_init_persisted_subagent_progress_initialized) return;
__wakaru_init_persisted_subagent_progress_initialized = true;
"use strict";
__classPrivateFieldGet4 = function(receiver, state, kind, f2) {
    if (kind === "a" && !f2) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
};
PersistedSubagentProgressRegistry = class {
    constructor(){
        _PersistedSubagentProgressRegistry_byStore.set(this, new WeakMap());
    }
    mark(store, snapshot) {
        __classPrivateFieldGet4(this, _PersistedSubagentProgressRegistry_byStore, "f").set(store, snapshot);
    }
    get(store, parentToolCallId) {
        return __classPrivateFieldGet4(this, _PersistedSubagentProgressRegistry_byStore, "f").get(store)?.get(parentToolCallId);
    }
};
_PersistedSubagentProgressRegistry_byStore = new WeakMap();
persistedSubagentProgressRegistry = new PersistedSubagentProgressRegistry();

}
