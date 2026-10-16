"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PRIVATE_INFERENCE_DISABLED = void 0, exports.isPrivateInferenceLockedDown = function(e) {
    return "disabled" !== e;
}, exports.createPrivateInferenceEnablementSource = function(e) {
    const t = new Set;
    let r = e.getEnablement();
    const n = ()=>{
        const n = e.getEnablement();
        if (n !== r) {
            r = n;
            for (const e of [
                ...t
            ])e(n);
        }
    }, s = e.onDidChangeEnablement?.(n), o = e.onDidChangeActiveTeamId?.(n);
    return {
        get state () {
            return e.getEnablement();
        },
        onDidChange: (e)=>(t.add(e), {
                dispose: ()=>t.delete(e)
            }),
        dispose () {
            s?.dispose(), o?.dispose(), t.clear();
        }
    };
}, exports.PRIVATE_INFERENCE_DISABLED = {
    state: "disabled",
    onDidChange: ()=>({
            dispose: ()=>{}
        })
};
