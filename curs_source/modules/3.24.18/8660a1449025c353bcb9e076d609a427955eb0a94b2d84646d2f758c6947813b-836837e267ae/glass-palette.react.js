import { M5n, Q60, X60, Z60, u90 } from "./BPv.js";
import { W5, ao, nn, zt } from "./LYd.js";
import { L4i, ez0, f9v, g9v, v9v, y9v } from "./O4v.js";
import { Xu } from "./Palette.js";
import { AG, KRl, vmf } from "./Ycg.js";
import { Ss } from "./aiMiscServices.js";
import { ebs } from "./chatLinkDragSource.react.js";
import { YVe } from "./cloud-target-utils.js";
import { jm } from "./command-ids.js";
import { py } from "./cursorCredsService.js";
import { Du, Pk } from "./dashboard_pb.js";
import { OYt } from "./formatters.js";
import { kJ } from "./fuzzyScorer.js";
import { qNv } from "./glass-go-to-file.js";
import { R2 } from "./glass-keybinding-router-service.js";
import { Cce } from "./glass-modal-service.js";
import { P40 } from "./glass-palette-footer.react.js";
import { s4i } from "./glass-palette-item-chevron.react.js";
import { i90 } from "./glass-palette-pull-request-section.react.js";
import { c90 } from "./glass-palette-toolbar.react.js";
import { A2 } from "./glassAction.js";
import { Gv } from "./glassContextKeys.js";
import { Mt } from "./index_197.js";
import { Nq0 } from "./index_232.js";
import { Vq0 } from "./keybinding-help-step.react.js";
import { gRl } from "./model-provider-utils.js";
import { e40 } from "./palette-canvas-search.js";
import { h90 } from "./palette-chat-leading-icon.react.js";
import { l40 } from "./palette-conversation-search.js";
import { u40 } from "./palette-section-ranking.js";
import { C5n } from "./palette_2.js";
import { Mk } from "./pullRequestIdentity.js";
import { mEe } from "./sidebar-settings.js";
import { WMs } from "./theme-slot.js";
import { Dec } from "./time-buckets.js";
import { xs } from "./tooltip.js";
import { E } from "./tslib.es6.js";
import { o9 } from "./types_12.js";
import { fn, rt } from "./uri.js";
import { QW } from "./usageLimitPolicyStatusService.js";
import { r1 } from "./use-command-bridge.react.js";
import { C60 } from "./use-conversation-search.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { I60 } from "./use-held-value.react.js";
import { JM } from "./use-now.react.js";
import { WPs } from "./use-palette-files.react.js";
import { F60 } from "./use-palette-launchpad.react.js";
import { H60 } from "./use-palette-navigation.react.js";
import { z60 } from "./use-palette-recent-actions.react.js";
import { G6 } from "./use-project-agents.react.js";
import { K60 } from "./use-reset-palette-state-on-open-or-filter-change.react.js";
import { w_ } from "./use-service-event-state.react_2.js";
import { In } from "./use-service.react_2.js";
import { Af } from "./use-solid-selector.react_2.js";
import { HP } from "./use-workspace.react_2.js";
import { jsxs as AR } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as IF } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as Lu } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as x2t } from "./react-runtime/react/esm-index-production.js";
var Coc, k9v, w9v, Toc, Eoc, C9v, T9v, E9v, I9v, x9v, A9v, R9v, P9v, M9v, D9v, N9v, L9v, O9v, F9v;
export { A9v, C9v, Coc, D9v, E9v, Eoc, F9v, I9v, L9v, M9v, N9v, O9v, P9v, R9v, T9v, Toc, k9v, w9v, x9v };
var __wakaru_Nz0_initialized = false;
export function Nz0() {
if (__wakaru_Nz0_initialized) return;
__wakaru_Nz0_initialized = true;
"use strict";
E(), Mt(), Du(), kJ(), fn(), JM(), QW(), ebs(), Mk(), Ss(), py(), qNv(), A2(), Gv(), jm(), r1(), C60(), Ru(), I60(), WPs(), F60(), H60(), z60(), K60(), G6(), In(), w_(), Af(), HP(), Cce(), R2(), C5n(), YVe(), gRl(), e40(), l40(), u40(), WMs(), Dec(), P40(), s4i(), i90(), c90(), h90(), mEe(), o9(), OYt(), Nq0(), Vq0(), Coc = 5, k9v = 25, w9v = {
    status: "unavailable"
}, Toc = {
    dialogSurface: {
        kWkggS: "glass-81cskf glass-o3rr03",
        kaIpWk: "glass-1828qc5",
        kXHlph: "glass-6ikm8r",
        kORKVm: "glass-10wlt62",
        k6WDB: "glass-1jh03n0 glass-1nj9eaa",
        keRtuK: "glass-1wkhr77 glass-9r6blg",
        kGVxlE: "glass-lygxiq",
        $$css: !0
    },
    dialogContent: {
        kWkggS: "glass-jbqb8w",
        $$css: !0
    }
}, Eoc = 5, C9v = 5, T9v = 5, E9v = [
    {
        stage: null,
        label: "Clear Simulation",
        description: "clear",
        detail: "Clear limit-hit simulation and restore normal status.",
        keywords: [
            "clear",
            "reset",
            "limit",
            "usage",
            "simulate",
            "debug"
        ]
    },
    {
        stage: Pk.SLOW_POOL,
        label: "Slow Pool",
        description: "slow_pool",
        detail: "Simulate slower responses with the new limit-hit tray.",
        keywords: [
            "slow",
            "pool",
            "limit",
            "usage",
            "simulate",
            "debug"
        ]
    },
    {
        stage: Pk.AUTO_SWITCH,
        label: "Auto Switch",
        description: "auto_switch",
        detail: "Simulate the model auto-switch notice.",
        keywords: [
            "auto",
            "switch",
            "model",
            "limit",
            "usage",
            "simulate",
            "debug"
        ]
    },
    {
        stage: Pk.HARD_BLOCK,
        label: "Hard Block",
        description: "hard_block",
        detail: "Simulate the out-of-usage hard block.",
        keywords: [
            "hard",
            "block",
            "out",
            "usage",
            "limit",
            "simulate",
            "debug"
        ]
    },
    {
        stage: Pk.WEEKLY_LIMIT,
        label: "Weekly Limit",
        description: "weekly_limit",
        detail: "Simulate the unified SKU weekly usage-limit notice.",
        keywords: [
            "weekly",
            "limit",
            "usage",
            "simulate",
            "debug"
        ]
    }
], I9v = [
    {
        value: "workspace",
        label: "Group by Workspace",
        icon: "folder"
    },
    {
        value: "repository",
        label: "Group by Repository",
        icon: "folder-library"
    },
    {
        value: "time",
        label: "Group by Updated",
        icon: "clock"
    },
    {
        value: "status",
        label: "Group by Status",
        icon: "circle-dashed"
    },
    {
        value: "environment",
        label: "Group by Environment",
        icon: "server"
    }
], x9v = new Set([
    "agents",
    "files",
    "suggested"
]), A9v = [
    "recent"
], R9v = x2t(function(e) {
    const n = IF(25), { item: i, value: r, extraKeywords: s, kbLabel: o, onRun: a } = e;
    let l;
    n[0] !== s ? (l = s ?? [], n[0] = s, n[1] = l) : l = n[1];
    let c;
    n[2] !== i.keywords || n[3] !== i.title || n[4] !== l ? (c = [
        i.title,
        ...i.keywords,
        ...l
    ], n[2] = i.keywords, n[3] = i.title, n[4] = l, n[5] = c) : c = n[5];
    let u;
    n[6] !== i.commandId || n[7] !== i.run || n[8] !== a ? (u = a(i.commandId, i.run), n[6] = i.commandId, n[7] = i.run, n[8] = a, n[9] = u) : u = n[9];
    let d;
    n[10] !== i.icon ? (d = Lu("div", {
        className: "glass-78zum5 glass-6jxa94 glass-1v9usgg glass-2lah0s glass-6s0dn4 glass-l56j7k",
        children: Lu(zt, {
            name: i.icon,
            size: "base"
        })
    }), n[10] = i.icon, n[11] = d) : d = n[11];
    let h;
    n[12] !== o ? (h = o && Lu(Xu.Shortcut, {
        children: o
    }), n[12] = o, n[13] = h) : h = n[13];
    let p;
    n[14] !== i.opensNestedPalette || n[15] !== o ? (p = i.opensNestedPalette && Lu(M5n, {
        placement: o ? "after-shortcut" : "trailing"
    }), n[14] = i.opensNestedPalette, n[15] = o, n[16] = p) : p = n[16];
    let g;
    return n[17] !== i.title || n[18] !== c || n[19] !== u || n[20] !== d || n[21] !== h || n[22] !== p || n[23] !== r ? (g = AR(Xu.Item, {
        keywords: c,
        onSelect: u,
        value: r,
        children: [
            d,
            i.title,
            h,
            p
        ]
    }), n[17] = i.title, n[18] = c, n[19] = u, n[20] = d, n[21] = h, n[22] = p, n[23] = r, n[24] = g) : g = n[24], g;
}), P9v = x2t(function(e) {
    const n = IF(21), { file: i, executeCommand: r, withClose: s } = e, o = i.keywords;
    let a;
    n[0] !== r || n[1] !== i.uriString ? (a = ()=>r("glass.openFileInStableTab", {
            uri: rt.parse(i.uriString)
        }), n[0] = r, n[1] = i.uriString, n[2] = a) : a = n[2];
    let l;
    n[3] !== a || n[4] !== s ? (l = s(a), n[3] = a, n[4] = s, n[5] = l) : l = n[5];
    const c = `file-${i.uriString}`;
    let u;
    n[6] !== i.label ? (u = Lu("div", {
        className: "glass-78zum5 glass-6jxa94 glass-1v9usgg glass-2lah0s glass-6s0dn4 glass-l56j7k",
        children: Lu(W5, {
            name: i.label,
            size: "lg"
        })
    }), n[6] = i.label, n[7] = u) : u = n[7];
    let d;
    n[8] !== i.label ? (d = Lu(nn, {
        size: "md",
        truncate: !0,
        children: i.label
    }), n[8] = i.label, n[9] = d) : d = n[9];
    let h;
    n[10] !== i.description ? (h = i.description && Lu(nn, {
        className: "glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli",
        color: "tertiary",
        size: "sm",
        truncate: !0,
        children: i.description
    }), n[10] = i.description, n[11] = h) : h = n[11];
    let p;
    n[12] !== d || n[13] !== h ? (p = AR("div", {
        className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-1pha0wt glass-11twubx",
        children: [
            d,
            h
        ]
    }), n[12] = d, n[13] = h, n[14] = p) : p = n[14];
    let g;
    return n[15] !== i.keywords || n[16] !== l || n[17] !== c || n[18] !== u || n[19] !== p ? (g = AR(Xu.Item, {
        keywords: o,
        onSelect: l,
        value: c,
        children: [
            u,
            p
        ]
    }), n[15] = i.keywords, n[16] = l, n[17] = c, n[18] = u, n[19] = p, n[20] = g) : g = n[20], g;
}), M9v = x2t(function(e) {
    const n = IF(19), { target: i, isEmptyState: r, onSelectCloudTarget: s, withClose: o } = e;
    let a;
    n[0] !== i ? (a = vmf(i), n[0] = i, n[1] = a) : a = n[1];
    const l = a;
    let c;
    n[2] !== r || n[3] !== i ? (c = g9v(i, r), n[2] = r, n[3] = i, n[4] = c) : c = n[4];
    let u;
    n[5] !== s || n[6] !== i ? (u = ()=>s?.(i), n[5] = s, n[6] = i, n[7] = u) : u = n[7];
    let d;
    n[8] !== u || n[9] !== o ? (d = o(u), n[8] = u, n[9] = o, n[10] = d) : d = n[10];
    let h;
    n[11] !== i ? (h = AG(i), n[11] = i, n[12] = h) : h = n[12];
    const p = `recent-cloud-${h}`;
    let g;
    n[13] === Symbol.for("react.memo_cache_sentinel") ? (g = Lu("div", {
        className: "glass-78zum5 glass-6jxa94 glass-1v9usgg glass-2lah0s glass-6s0dn4 glass-l56j7k",
        children: Lu(zt, {
            name: "cloud",
            size: "base"
        })
    }), n[13] = g) : g = n[13];
    const f = r ? l : `New Agent in ${l}`;
    let _;
    return n[14] !== c || n[15] !== d || n[16] !== p || n[17] !== f ? (_ = AR(Xu.Item, {
        keywords: c,
        onSelect: d,
        value: p,
        children: [
            g,
            f
        ]
    }), n[14] = c, n[15] = d, n[16] = p, n[17] = f, n[18] = _) : _ = n[18], _;
}), D9v = x2t(function(e) {
    const n = IF(15), { project: i, isEmptyState: r, onSelectWorkspace: s, withClose: o } = e;
    let a;
    n[0] !== r || n[1] !== i ? (a = f9v(i, r), n[0] = r, n[1] = i, n[2] = a) : a = n[2];
    let l;
    n[3] !== s || n[4] !== i ? (l = ()=>s?.(i), n[3] = s, n[4] = i, n[5] = l) : l = n[5];
    let c;
    n[6] !== l || n[7] !== o ? (c = o(l), n[6] = l, n[7] = o, n[8] = c) : c = n[8];
    const u = `recent-workspace-${i.id}`;
    let d;
    n[9] === Symbol.for("react.memo_cache_sentinel") ? (d = Lu("div", {
        className: "glass-78zum5 glass-6jxa94 glass-1v9usgg glass-2lah0s glass-6s0dn4 glass-l56j7k",
        children: Lu(zt, {
            name: "folder",
            size: "base"
        })
    }), n[9] = d) : d = n[9];
    const h = r ? i.name : `New Agent in ${i.name}`;
    let p;
    return n[10] !== a || n[11] !== c || n[12] !== u || n[13] !== h ? (p = AR(Xu.Item, {
        keywords: a,
        onSelect: c,
        value: u,
        children: [
            d,
            h
        ]
    }), n[10] = a, n[11] = c, n[12] = u, n[13] = h, n[14] = p) : p = n[14], p;
}), N9v = x2t(function(e) {
    const n = IF(14), { model: i, executeCommand: r, withClose: s } = e, o = i.keywords;
    let a;
    n[0] !== r || n[1] !== i.modelId ? (a = ()=>r("glass.newAgentWithModel", i.modelId), n[0] = r, n[1] = i.modelId, n[2] = a) : a = n[2];
    let l;
    n[3] !== a || n[4] !== s ? (l = s(a), n[3] = a, n[4] = s, n[5] = l) : l = n[5];
    let c;
    n[6] !== i.icon ? (c = Lu("div", {
        className: "glass-78zum5 glass-6jxa94 glass-1v9usgg glass-2lah0s glass-6s0dn4 glass-l56j7k",
        children: i.icon
    }), n[6] = i.icon, n[7] = c) : c = n[7];
    let u;
    return n[8] !== i.id || n[9] !== i.keywords || n[10] !== i.label || n[11] !== l || n[12] !== c ? (u = AR(Xu.Item, {
        keywords: o,
        onSelect: l,
        value: i.id,
        children: [
            c,
            i.label
        ]
    }), n[8] = i.id, n[9] = i.keywords, n[10] = i.label, n[11] = l, n[12] = c, n[13] = u) : u = n[13], u;
}), L9v = x2t(function(e) {
    const n = IF(11), { cmd: i, withClose: r } = e, s = i.keywords;
    let o;
    n[0] !== i.handler || n[1] !== r ? (o = r(i.handler), n[0] = i.handler, n[1] = r, n[2] = o) : o = n[2];
    let a;
    n[3] !== i.icon ? (a = Lu("div", {
        className: "glass-78zum5 glass-6jxa94 glass-1v9usgg glass-2lah0s glass-6s0dn4 glass-l56j7k",
        children: Lu(zt, {
            name: i.icon,
            size: "base"
        })
    }), n[3] = i.icon, n[4] = a) : a = n[4];
    let l;
    return n[5] !== i.id || n[6] !== i.keywords || n[7] !== i.label || n[8] !== o || n[9] !== a ? (l = AR(Xu.Item, {
        keywords: s,
        onSelect: o,
        value: i.id,
        children: [
            a,
            i.label
        ]
    }), n[5] = i.id, n[6] = i.keywords, n[7] = i.label, n[8] = o, n[9] = a, n[10] = l) : l = n[10], l;
}), O9v = x2t(function(e) {
    const n = IF(17), { cmd: i, onSelectSlashCommand: r, withClose: s } = e, o = i.description ?? "";
    let a;
    n[0] !== i.name || n[1] !== o ? (a = [
        i.name,
        o
    ].filter(Boolean), n[0] = i.name, n[1] = o, n[2] = a) : a = n[2];
    let l;
    n[3] !== i || n[4] !== r ? (l = ()=>r?.(i), n[3] = i, n[4] = r, n[5] = l) : l = n[5];
    let c;
    n[6] !== l || n[7] !== s ? (c = s(l), n[6] = l, n[7] = s, n[8] = c) : c = n[8];
    const u = `slash-${i.id}`, d = i.badgeAppearance?.icon ?? "cube";
    let h;
    n[9] !== d ? (h = Lu("div", {
        className: "glass-78zum5 glass-6jxa94 glass-1v9usgg glass-2lah0s glass-6s0dn4 glass-l56j7k",
        children: Lu(zt, {
            name: d,
            size: "base"
        })
    }), n[9] = d, n[10] = h) : h = n[10];
    let p;
    return n[11] !== i.name || n[12] !== a || n[13] !== c || n[14] !== u || n[15] !== h ? (p = AR(Xu.Item, {
        keywords: a,
        onSelect: c,
        value: u,
        children: [
            h,
            i.name
        ]
    }), n[11] = i.name, n[12] = a, n[13] = c, n[14] = u, n[15] = h, n[16] = p) : p = n[16], p;
}), F9v = x2t(function(e) {
    const n = IF(27), { item: i, resultIndex: r, fallbackTitleHighlights: s, onSelectChat: o } = e, { chat: a, keywords: l, snippet: c, snippetHighlights: u, title: d, titleHighlights: h } = i;
    let p;
    if (n[0] !== a) {
        const I = ez0(a);
        p = I.length > 0 ? I.join(", ") : void 0, n[0] = a, n[1] = p;
    } else p = n[1];
    const g = p;
    let f;
    n[2] !== a ? (f = X60(a), n[2] = a, n[3] = f) : f = n[3];
    const _ = f;
    let b;
    n[4] !== a ? (b = Q60(a), n[4] = a, n[5] = b) : b = n[5];
    const y = b;
    let S;
    n[6] !== a || n[7] !== c ? (S = Z60(a, c), n[6] = a, n[7] = c, n[8] = S) : S = n[8];
    const k = S;
    let C;
    n[9] !== a || n[10] !== k || n[11] !== s || n[12] !== i || n[13] !== l || n[14] !== _ || n[15] !== o || n[16] !== g || n[17] !== r || n[18] !== u || n[19] !== d || n[20] !== h || n[21] !== y.label || n[22] !== y.title ? (C = (I)=>AR(Xu.Item, {
            keywords: l,
            lines: k ? 2 : 1,
            onSelect: ()=>o(i, r),
            ref: I?.setNodeRef,
            value: L4i(a),
            ...I?.listeners,
            ...I?.sourceProps,
            children: [
                Lu("div", {
                    className: "glass-78zum5 glass-6jxa94 glass-1v9usgg glass-2lah0s glass-6s0dn4 glass-l56j7k",
                    children: Lu(u90, {
                        chat: a
                    })
                }),
                Lu("div", {
                    className: "glass-3nfvp2 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-6s0dn4 glass-pkkfsy",
                    children: AR("div", {
                        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli",
                        children: [
                            AR("span", {
                                className: "glass-3nfvp2 glass-euugli glass-6s0dn4 glass-pkkfsy",
                                children: [
                                    Lu("span", {
                                        className: "glass-euugli glass-b3r6kr glass-lyipyv glass-uxw1ft",
                                        children: Lu(v9v, {
                                            highlights: h ?? s ?? [],
                                            text: d ?? a.name
                                        })
                                    }),
                                    g ? Lu(nn, {
                                        className: "glass-euugli",
                                        color: "quaternary",
                                        size: "md",
                                        truncate: !0,
                                        children: g
                                    }) : null,
                                    _ ? Lu(nn, {
                                        className: "glass-euugli",
                                        color: "quaternary",
                                        "data-component": "glass-palette-side-chat-kind",
                                        size: "md",
                                        truncate: !0,
                                        children: _
                                    }) : null,
                                    a.envIcon && Lu(xs, {
                                        content: Lu(ao, {
                                            title: a.envTooltip ?? ""
                                        }),
                                        children: Lu("span", {
                                            className: "glass-3nfvp2 glass-2lah0s glass-6s0dn4",
                                            children: Lu(zt, {
                                                className: "glass-2lah0s glass-197sbye",
                                                color: "tertiary",
                                                name: a.envIcon,
                                                size: "sm"
                                            })
                                        })
                                    })
                                ]
                            }),
                            k ? Lu(nn, {
                                color: "tertiary",
                                size: "sm",
                                truncate: !0,
                                children: Lu(v9v, {
                                    highlights: u ?? [],
                                    text: k
                                })
                            }) : null
                        ]
                    })
                }),
                Lu(nn, {
                    className: "glass-2lah0s glass-vc5jky glass-1racy4e",
                    color: "tertiary",
                    "data-component": "glass-palette-agent-workspace-label",
                    size: "sm",
                    title: y.title,
                    truncate: !0,
                    children: y.label
                }),
                Lu(y9v, {
                    lastUpdatedAt: a.lastUpdatedAt
                })
            ]
        }), n[9] = a, n[10] = k, n[11] = s, n[12] = i, n[13] = l, n[14] = _, n[15] = o, n[16] = g, n[17] = r, n[18] = u, n[19] = d, n[20] = h, n[21] = y.label, n[22] = y.title, n[23] = C) : C = n[23];
    let T;
    return n[24] !== a.id || n[25] !== C ? (T = Lu(KRl, {
        agentId: a.id,
        children: C
    }), n[24] = a.id, n[25] = C, n[26] = T) : T = n[26], T;
});

}
