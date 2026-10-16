import { An, nn } from "./LYd.js";
import { nI } from "./ipa.js";
import { BtC, GtC, JtC } from "./hjv.js";
import { Xr } from "./Dialog.js";
import { c as tnC } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as q2t, jsxs as m9i, Fragment as nnC } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function inC(t) {
    const e = tnC(34), { onClose: n, onSaved: i, workspace: r } = t;
    let s;
    e[0] !== n || e[1] !== i ? (s = (j)=>{
        i?.(j), n();
    }, e[0] = n, e[1] = i, e[2] = s) : s = e[2];
    const o = s;
    let a;
    e[3] !== o || e[4] !== r ? (a = {
        onSaved: o,
        workspace: r
    }, e[3] = o, e[4] = r, e[5] = a) : a = e[5];
    const { canSave: l, errorMessage: c, folders: u, handleAddFolder: d, handleCancelRemoteFolderPick: h, handlePickFolder: p, handleRemoveFolder: g, handleSave: f, hasOpenedRemotePicker: _, isExistingMultiRoot: b, isPickingRemoteFolder: y, isSaving: S, lockedFolders: k, needsMoreFolders: C, remoteAuthority: T, setWorkspaceName: I, workspaceName: A } = JtC(a);
    let P;
    e[6] !== n ? (P = (j)=>{
        j || n();
    }, e[6] = n, e[7] = P) : P = e[7];
    const M = P;
    let O;
    e[8] !== d || e[9] !== h || e[10] !== _ || e[11] !== y || e[12] !== T ? (O = T !== void 0 && _ && q2t(GtC, {
        onAdd: d,
        onBack: h,
        remoteAuthority: T,
        visible: y
    }), e[8] = d, e[9] = h, e[10] = _, e[11] = y, e[12] = T, e[13] = O) : O = e[13];
    let N;
    e[14] !== l || e[15] !== c || e[16] !== u || e[17] !== p || e[18] !== g || e[19] !== f || e[20] !== b || e[21] !== y || e[22] !== S || e[23] !== k || e[24] !== C || e[25] !== n || e[26] !== T || e[27] !== I || e[28] !== A ? (N = !(y && T !== void 0) && m9i(nnC, {
        children: [
            q2t(Xr.Header, {
                description: T !== void 0 ? "Name this workspace and choose folders on this remote" : "Name this workspace and choose folders to include",
                descriptionFontSize: "base",
                title: b ? "Edit Workspace" : "Add Folders",
                children: q2t(Xr.Close, {})
            }),
            m9i(Xr.Content, {
                children: [
                    m9i("div", {
                        className: "glass-78zum5 glass-dt5ytf glass-pkkfsy glass-14q74kp",
                        children: [
                            q2t(nn, {
                                color: "secondary",
                                size: "sm",
                                weight: "medium",
                                children: "Name"
                            }),
                            q2t(nI, {
                                "aria-label": "Workspace name",
                                onChange: (j)=>I(j.target.value),
                                placeholder: "Workspace name",
                                value: A
                            })
                        ]
                    }),
                    q2t(BtC, {
                        errorMessage: c,
                        folders: u,
                        hintMessage: C ? "Add a folder to save this workspace." : void 0,
                        lockedFolders: k,
                        onPickFolder: p,
                        onRemoveFolder: g
                    })
                ]
            }),
            m9i(Xr.Footer, {
                children: [
                    q2t(An, {
                        onClick: n,
                        variant: "text",
                        children: "Cancel"
                    }),
                    q2t(An, {
                        disabled: !l,
                        onClick: ()=>void f(),
                        variant: "primary",
                        children: S ? "Saving..." : "Save"
                    })
                ]
            })
        ]
    }), e[14] = l, e[15] = c, e[16] = u, e[17] = p, e[18] = g, e[19] = f, e[20] = b, e[21] = y, e[22] = S, e[23] = k, e[24] = C, e[25] = n, e[26] = T, e[27] = I, e[28] = A, e[29] = N) : N = e[29];
    let U;
    return e[30] !== M || e[31] !== O || e[32] !== N ? (U = m9i(Xr, {
        onOpenChange: M,
        open: !0,
        size: "xl",
        children: [
            O,
            N
        ]
    }), e[30] = M, e[31] = O, e[32] = N, e[33] = U) : U = e[33], U;
}

export var Tjv = {};
Object.defineProperty(Tjv, "EditWorkspaceModal", {
    enumerable: true,
    get: ()=>inC
});
