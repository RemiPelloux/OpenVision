var __wakaru_require_privateInferenceEnablement_cache;
export function require_privateInferenceEnablement() {
if (__wakaru_require_privateInferenceEnablement_cache) return __wakaru_require_privateInferenceEnablement_cache;
var exports2 = {};
__wakaru_require_privateInferenceEnablement_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.PRIVATE_INFERENCE_DISABLED = void 0;
exports2.isPrivateInferenceLockedDown = isPrivateInferenceLockedDown;
exports2.createPrivateInferenceEnablementSource = createPrivateInferenceEnablementSource;
function isPrivateInferenceLockedDown(state) {
    return state !== "disabled";
}
exports2.PRIVATE_INFERENCE_DISABLED = {
    state: "disabled",
    onDidChange: ()=>({
            dispose: ()=>{}
        })
};
function createPrivateInferenceEnablementSource(options2) {
    const listeners = new Set();
    let last = options2.getEnablement();
    const notify = ()=>{
        const state = options2.getEnablement();
        if (state === last) {
            return;
        }
        last = state;
        for (const listener of [
            ...listeners
        ]){
            listener(state);
        }
    };
    const enablementSubscription = options2.onDidChangeEnablement?.(notify);
    const teamSubscription = options2.onDidChangeActiveTeamId?.(notify);
    return {
        get state () {
            return options2.getEnablement();
        },
        onDidChange (listener) {
            listeners.add(listener);
            return {
                dispose: ()=>listeners.delete(listener)
            };
        },
        dispose () {
            enablementSubscription?.dispose();
            teamSubscription?.dispose();
            listeners.clear();
        }
    };
}

return exports2;
}
