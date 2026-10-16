import { Sa } from "./Iwo.js";
import { WW } from "./ipa.js";
import { $i } from "./Ycg.js";
import { B0, fg, q6 } from "./Asv.js";
import { nx } from "./Zo_.js";
import { LT_ } from "./mm_.js";
import { W1 } from "./SurfaceSidebar.js";
import { jkc } from "./fullscreen-draft-agent-panel-context.react.js";
import { $d } from "./glass-tab-persistence-service.contract.js";
import { c as AaT } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as RaT } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function PaT(t) {
    const e = AaT(6), { tabId: n } = WW(), { workspace: i } = fg(), r = $i(i, $d);
    let s;
    e[0] !== n || e[1] !== r ? (s = ()=>r.shouldTabTakeFocusOnMount(n), e[0] = n, e[1] = r, e[2] = s) : s = e[2];
    const o = s;
    let a;
    return e[3] !== t.agentId || e[4] !== o ? (a = RaT(LT_, {
        agentId: t.agentId,
        errorMessage: "Unable to load side chat",
        focusPromptOnMount: o,
        loadingLabel: "Loading side chat"
    }), e[3] = t.agentId, e[4] = o, e[5] = a) : a = e[5], a;
}
import { c as DaT } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as NaT, use as LaT } from "./react-runtime/react/esm-index-production.js";
import { jsx as OaT } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function FaT(t) {
    const e = DaT(6), { agentId: n, children: i, panel: r } = t;
    let s;
    e[0] !== n || e[1] !== r ? (s = n === void 0 ? void 0 : {
        agentId: n,
        panel: r
    }, e[0] = n, e[1] = r, e[2] = s) : s = e[2];
    const o = s;
    let a;
    return e[3] !== i || e[4] !== o ? (a = OaT(jkc.Provider, {
        value: o,
        children: i
    }), e[3] = i, e[4] = o, e[5] = a) : a = e[5], a;
}
function BaT(t) {
    const e = LaT(jkc);
    return e?.agentId === t ? e.panel : void 0;
}
export var UT_ = {};
Sa(UT_, {
    AgentChatTabContent: ()=>$aT
});
import { c as UaT } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as jaT } from "./react-runtime/react/esm-jsx-runtime-production.js";
function $aT(t) {
    const e = UaT(2), { isActive: n } = WW(), i = B0(), r = q6(i, HaT), s = BaT(t.agentId);
    if (!r) return null;
    if (s !== void 0) return n ? s : null;
    let o;
    return e[0] !== t.agentId ? (o = jaT(LT_, {
        agentId: t.agentId,
        errorMessage: "Unable to load chat",
        loadingLabel: "Loading chat"
    }), e[0] = t.agentId, e[1] = o) : o = e[1], o;
}
function HaT(t) {
    return t.editorPanelFullscreen;
}
import { c as jT_ } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as iMt } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function GaT(t) {
    const e = jT_(9), { activeFindingKey: n, findings: i, onOpenSuggestion: r } = t;
    let s;
    if (e[0] !== n || e[1] !== i || e[2] !== r) {
        let a;
        e[4] !== n || e[5] !== r ? (a = (l)=>iMt(qaT, {
                active: nx(l) === n,
                finding: l,
                onOpenSuggestion: r
            }, nx(l)), e[4] = n, e[5] = r, e[6] = a) : a = e[6], s = i.map(a), e[0] = n, e[1] = i, e[2] = r, e[3] = s;
    } else s = e[3];
    let o;
    return e[7] !== s ? (o = iMt(W1, {
        "aria-label": "Suggestion list",
        background: "transparent",
        children: iMt(W1.Scroll, {
            children: iMt(W1.Group, {
                label: "Suggestions",
                children: s
            })
        })
    }), e[7] = s, e[8] = o) : o = e[8], o;
}
function qaT(t) {
    const e = jT_(19), { active: n, finding: i, onOpenSuggestion: r } = t;
    let s;
    e[0] !== i.title ? (s = i.title.trim() || "Suggestion", e[0] = i.title, e[1] = s) : s = e[1];
    const o = s;
    let a;
    e[2] !== i || e[3] !== r ? (a = ()=>{
        r(i);
    }, e[2] = i, e[3] = r, e[4] = a) : a = e[4];
    const l = a;
    let c;
    e[5] !== l ? (c = (f)=>{
        f.defaultPrevented || f.target instanceof Element && f.target.closest("button") !== null || l();
    }, e[5] = l, e[6] = c) : c = e[6];
    const u = c;
    let d;
    e[7] !== o ? (d = iMt(W1.RowTitle, {
        children: o
    }), e[7] = o, e[8] = d) : d = e[8];
    let h;
    e[9] !== l || e[10] !== d || e[11] !== o ? (h = iMt(W1.RowButton, {
        "aria-label": o,
        onSelect: l,
        children: d
    }), e[9] = l, e[10] = d, e[11] = o, e[12] = h) : h = e[12];
    let p;
    e[13] !== n || e[14] !== h ? (p = iMt(W1.Row, {
        active: n,
        children: h
    }), e[13] = n, e[14] = h, e[15] = p) : p = e[15];
    let g;
    return e[16] !== u || e[17] !== p ? (g = iMt("div", {
        className: "glass-euugli",
        onClick: u,
        children: p
    }), e[16] = u, e[17] = p, e[18] = g) : g = e[18], g;
}

export var FT_ = {};
Object.defineProperty(FT_, "SideChatTabContent", {
    enumerable: true,
    get: ()=>PaT
});
