import { SLn, dlv, hlv, ue0, ulv } from "./Asv.js";
import { Ei, xr } from "./Iwo.js";
import { bn } from "./SZu.js";
import { Rn } from "./extensions.js";
import { U0, llv } from "./glass-modal-service.contract.js";
import { E } from "./tslib.es6.js";
var gql, plv;
export { gql, plv };
var __wakaru_Cce_initialized = false;
export function Cce() {
if (__wakaru_Cce_initialized) return;
__wakaru_Cce_initialized = true;
"use strict";
E(), Ei(), Rn(), llv(), llv(), gql = {
    palette: 1,
    "recent-agent-switcher": 1,
    "configure-ssh-workspace": 2,
    "configure-wsl-workspace": 2,
    "github-connect": 2,
    diagnostics: 3,
    "indexed-agent-search-dev-tools": 3,
    "chat-switch-trace-dev-tools": 3,
    "startup-performance": 3,
    storage: 3,
    "workspace-metadata": 3,
    "explorer-orchestrator-cache": 3,
    "theme-builder": 2,
    "clone-repository": 2,
    "workspace-trust": 3,
    "quit-background-terminals": 3,
    "quit-streaming-agents": 3,
    "create-file-tree-item": 2,
    "create-project": 3,
    "preview-staged-projects": 3,
    "edit-workspace": 2,
    "claude-code-import": 2,
    "heavy-load": 3,
    "buy-credits": 4
}, plv = class {
    constructor(){
        this.state = new Map, this.listeners = new Set;
    }
    openModal(t, e) {
        const n = gql[t], i = [];
        for (const [s, o] of this.state)if (o.open && gql[s] <= n) {
            const a = ue0(s, SLn(o, s) ? o : void 0);
            this.state.set(s, a.next), i.push(a.onClose);
        }
        const r = e === void 0 ? {
            id: t,
            open: !0
        } : {
            id: t,
            open: !0,
            props: e
        };
        this.state.set(t, r), this.notify(), hlv(i);
    }
    openPalette(t) {
        this.openModal("palette", t);
    }
    getProps(t) {
        const e = this.state.get(t);
        if (SLn(e, t)) return e.props;
    }
    updateModalProps(t, e) {
        const n = this.state.get(t);
        if (!SLn(n, t)) return;
        const r = {
            ...n.props ?? {},
            ...e
        };
        this.state.set(t, {
            id: t,
            open: n.open,
            props: r
        }), this.notify();
    }
    closeModal(t) {
        const e = this.state.get(t);
        e?.open && (this.state.set(t, ulv(t, SLn(e, t) ? e : void 0)), this.notify());
    }
    isOpen(t) {
        return this.state.get(t)?.open ?? !1;
    }
    subscribe(t) {
        return this.listeners.add(t), t(new Map(this.state)), ()=>{
            this.listeners.delete(t);
        };
    }
    resetAll() {
        if (this.state.size === 0) return;
        const t = [];
        for (const [e, n] of this.state)n.open && t.push(dlv(SLn(n, e) ? n.props : void 0));
        this.state.clear(), this.notify(), hlv(t);
    }
    notify() {
        const t = new Map(this.state);
        for (const e of this.listeners)try {
            e(t);
        } catch (n) {
            xr(n);
        }
    }
}, bn(U0, plv, 1, 1);

}
