"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PRIVATE_INFERENCE_DISABLED = void 0, exports.isPrivateInferenceLockedDown = function(t) {
    return "disabled" !== t;
}, exports.createPrivateInferenceEnablementSource = function(t) {
    const e = new Set;
    let r = t.getEnablement();
    const n = ()=>{
        const n = t.getEnablement();
        if (n !== r) {
            r = n;
            for (const t of [
                ...e
            ])t(n);
        }
    }, s = t.onDidChangeEnablement?.(n), i = t.onDidChangeActiveTeamId?.(n);
    return {
        get state () {
            return t.getEnablement();
        },
        onDidChange: (t)=>(e.add(t), {
                dispose: ()=>e.delete(t)
            }),
        dispose () {
            s?.dispose(), i?.dispose(), e.clear();
        }
    };
}, exports.PRIVATE_INFERENCE_DISABLED = {
    state: "disabled",
    onDidChange: ()=>({
            dispose: ()=>{}
        })
};
