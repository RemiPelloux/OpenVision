import { le, w3, xr } from "./async.js";
import { ZDe } from "./background_composer_connectweb.js";
import { RL, Tr, ke, yL } from "./background_composer_pb.js";
import { Ie, Mt } from "./cancellation.js";
import { BE, zDe } from "./cloud-agent-source-category.ts";
import { Be } from "./code.js";
import { wt } from "./connect-error.js";
import { Rke } from "./dockAgentRows.js";
import { Pke, eat, jke } from "./dockMenuMain.js";
import { Ye, qe } from "./environmentMainService.js";
import { N, ge, se } from "./event.js";
import { Bs } from "./extensionsScannerService.js";
import { gfe } from "./firstWindowLocalReactivation.js";
import { Tw, YM, cP, y1 } from "./firstWindowStartupMainService.js";
import { B, Hn } from "./ipc.js";
import { J, Ut, j } from "./lifecycle.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { Z, te } from "./log.js";
import { ns } from "./objects.js";
import { Ce, L } from "./path.js";
import { Fe, ee, oe, q } from "./platform.js";
import { Tt, et } from "./productService.js";
import { br, fr } from "./state.js";
import { Cn, Gs, or } from "./storageMainService.js";
import { A9, If } from "./systemNotification.js";
import { Ed, ts, wd } from "./telemetry.js";
import { w } from "./themeMainService.js";
import { GE, iU, iot, rOe, sU } from "./trayCloudListMain.js";
import { dot } from "./trayCloudRefreshMain.js";
import { Bit, Eke, L9, wke } from "./trayMenuBarVisibility.js";
import { Dke, F9, Lke, Nke, Oke, Uke, vE, xke } from "./trayMenuState.js";
import { uat } from "./trayStatusIcons.js";
import { h } from "./tslib.es6.js";
import { ct, pt } from "./windows.js";
import { Eu, wu } from "./workspacesHistoryMainService.js";
import { powerMonitor as $E } from "electron";
import { existsSync as Hke } from "fs";
import { nativeTheme as VE } from "electron";
import { nativeImage as W9 } from "electron";
import { existsSync as _l } from "fs";
import { Menu as aOe } from "electron";
import { screen as cOe } from "electron";
import { shell as mot } from "electron";
import { nativeTheme as nat } from "electron";
import { nativeImage as oOe } from "electron";
import { systemPreferences as pot } from "electron";
import { readFileSync as rat } from "fs";
import { app as tat } from "electron";
import { Tray as uot } from "electron";
import { app as zu } from "electron";
function Fit(e, t) {
    if (!(e.height <= 0)) return t.some((n)=>{
        const r = n.workArea.y - n.bounds.y;
        return r <= 0 ? e.height !== Eke : e.y === n.bounds.y && e.height === r;
    });
}
function Wit(e) {
    const t = Fit(e.bounds, e.displays);
    return t === void 0 ? {
        kind: "report",
        visibility: "unknown"
    } : t ? {
        kind: "report",
        visibility: "visible"
    } : e.legacyVisibleDefault === "0" && !e.recreateAttempted ? {
        kind: "recreate"
    } : {
        kind: "report",
        visibility: "blocked"
    };
}
function bke(e) {
    if (!e) return [];
    const t = new Set(e.notificationStates.filter((r)=>r.hasNotification).map((r)=>r.composerId)), n = new Map;
    for (const r of e.sections.flatMap((s)=>s.items))t.has(r.composerId) && !n.has(r.composerId) && n.set(r.composerId, {
        composerId: r.composerId,
        name: r.name,
        source: r.source
    });
    return [
        ...n.values()
    ];
}
function Git(e) {
    const t = e.windows.filter((s)=>s.isVisible && s.isGlass);
    if (t.length === 0) return e.mainProcessCloudRefreshEnabled ? {
        kind: "main"
    } : {
        kind: "none"
    };
    const r = t.find((s)=>s.isLastActive) ?? t[0];
    return e.reason === "engagement" || e.reason === "poll" && r.rendererHasFocus ? {
        kind: "none"
    } : {
        kind: "renderer",
        windowId: r.id
    };
}
function Vit(e) {
    const t = Math.min(Math.max(e.consecutiveFailures, 0), Dke), n = t === 0 ? e.baseIntervalMs : Math.min(Math.floor(e.baseIntervalMs * Math.pow(Nke, t)), Oke);
    return Math.max(n, e.retryAfterMs ?? 0);
}
function $it(e, t) {
    const n = e?.trim();
    if (!n) return F9;
    const r = Number(n);
    if (Number.isFinite(r)) return Math.max(0, r * 1e3);
    const s = Date.parse(n);
    return Number.isNaN(s) ? F9 : Math.max(0, s - t);
}
function jit(e, t) {
    return e !== void 0 && e.length > 0 && t !== void 0 && t.length > 0;
}
function Oa(e) {
    return e.startsWith("glass:");
}
function fE(e, t) {
    const n = Oa(e.contribution.producerId) ? 0 : 1, r = Oa(t.contribution.producerId) ? 0 : 1, s = e.ownerWindowId === void 0 ? 1 : 0, i = t.ownerWindowId === void 0 ? 1 : 0;
    return n - r || s - i || t.contribution.revision - e.contribution.revision || e.contribution.producerId.localeCompare(t.contribution.producerId) || (e.ownerWindowId ?? Number.MAX_SAFE_INTEGER) - (t.ownerWindowId ?? Number.MAX_SAFE_INTEGER);
}
function U9(e) {
    return [
        ...e
    ].sort(fE)[0];
}
function Hit(e) {
    const t = {
        "needs-attention": 3,
        unread: 2,
        running: 1,
        seen: 0
    }, n = {
        local: 3,
        "claude-code": 2,
        cloud: 1
    }, r = (m, f)=>m.item.agentUpdatedAt - f.item.agentUpdatedAt || t[m.item.statusIcon] - t[f.item.statusIcon] || n[m.item.source] - n[f.item.source] || (m.record.ownerWindowId === void 0 ? 0 : 1) - (f.record.ownerWindowId === void 0 ? 0 : 1) || (Oa(m.record.contribution.producerId) ? 1 : 0) - (Oa(f.record.contribution.producerId) ? 1 : 0) || m.record.contribution.revision - f.record.contribution.revision || -fE(m.record, f.record) || f.item.name.localeCompare(m.item.name) || f.sectionLabel.localeCompare(m.sectionLabel) || f.sectionId.localeCompare(m.sectionId), s = (m, f)=>fE(m.record, f.record) || m.sectionIndex - f.sectionIndex || m.sectionId.localeCompare(f.sectionId), i = new Map;
    for (const m of e)m.contribution.sections.forEach((f, v)=>{
        f.items.forEach((T, S)=>{
            const k = {
                item: T,
                sectionId: f.id,
                sectionLabel: f.label,
                sectionIndex: v,
                itemIndex: S,
                record: m
            }, y = i.get(T.composerId);
            (!y || r(k, y) > 0) && i.set(T.composerId, k);
        });
    });
    const a = new Map, o = new Map, l = new Map, d = new Map;
    for (const m of i.values()){
        const f = a.get(m.sectionId);
        f ? (f.items.push(m), s(m, f.order) < 0 && (f.order = m, f.label = m.sectionLabel)) : a.set(m.sectionId, {
            label: m.sectionLabel,
            items: [
                m
            ],
            order: m
        }), l.set(m.item.composerId, {
            id: m.record.contribution.profileId,
            name: m.record.contribution.profileName
        }), d.set(m.item.composerId, Oa(m.record.contribution.producerId));
    }
    const u = new Map;
    for (const m of i.values())m.record.ownerWindowId !== void 0 && (o.set(m.item.composerId, m.record.ownerWindowId), u.set(m.item.composerId, Oa(m.record.contribution.producerId)));
    for (const m of e){
        if (m.ownerWindowId === void 0) continue;
        const f = Oa(m.contribution.producerId);
        for (const v of m.contribution.sections)for (const T of v.items)i.has(T.composerId) && (o.has(T.composerId) || (o.set(T.composerId, m.ownerWindowId), u.set(T.composerId, f)));
    }
    for (const m of e)if (m.ownerWindowId !== void 0 && Oa(m.contribution.producerId)) for (const f of m.contribution.sections)for (const v of f.items)!i.has(v.composerId) || u.get(v.composerId) || i.get(v.composerId)?.record.ownerWindowId !== void 0 || (o.set(v.composerId, m.ownerWindowId), u.set(v.composerId, !0));
    return {
        sections: [
            ...a.entries()
        ].sort(([, m], [, f])=>s(m.order, f.order)).map(([m, f])=>({
                id: m,
                label: f.label,
                items: f.items.sort((v, T)=>fE(v.record, T.record) || v.sectionIndex - T.sectionIndex || v.itemIndex - T.itemIndex || T.item.agentUpdatedAt - v.item.agentUpdatedAt || v.item.composerId.localeCompare(T.item.composerId)).map((v)=>v.item)
            })),
        ownerWindowByComposerId: o,
        profileByComposerId: l,
        preferGlassByComposerId: d
    };
}
function qit(e, t) {
    return e.map((n)=>({
            ...n,
            items: n.items.map((r)=>{
                const s = t.get(r.composerId);
                return !s || s.hasNotification === r.hasNotification ? r : {
                    ...r,
                    hasNotification: s.hasNotification,
                    statusIcon: r.statusIcon === "seen" || r.statusIcon === "unread" ? s.hasNotification ? "unread" : "seen" : r.statusIcon
                };
            })
        }));
}
function Kit(e, t, n) {
    const r = [
        ...new Set(e.flatMap((a)=>a.items.map((o)=>o.composerId)))
    ], s = r.filter((a)=>n.get(a)?.hasNotification === !0), i = new Set(s.slice(0, t));
    for (const a of r){
        if (i.size >= t) break;
        i.add(a);
    }
    return {
        sections: e.flatMap((a)=>{
            const o = a.items.filter((l)=>i.has(l.composerId));
            return o.length > 0 ? [
                {
                    ...a,
                    items: o
                }
            ] : [];
        }),
        overflowUnreadComposerIds: s.slice(t)
    };
}
function zit(e) {
    const t = new Map, n = new Map;
    for (const r of [
        ...e
    ].reverse()){
        const s = r.ownerWindowId !== void 0;
        for (const i of r.contribution.notificationStates){
            const a = t.get(i.composerId), o = n.get(i.composerId) === !0;
            if (!a) {
                t.set(i.composerId, i), n.set(i.composerId, s);
                continue;
            }
            if (s !== o) {
                (i.notificationRevision > a.notificationRevision || i.notificationRevision === a.notificationRevision && (i.agentUpdatedAt > a.agentUpdatedAt || i.agentUpdatedAt === a.agentUpdatedAt && Number(i.hasNotification) > Number(a.hasNotification) || i.agentUpdatedAt === a.agentUpdatedAt && i.hasNotification === a.hasNotification && s)) && (t.set(i.composerId, i), n.set(i.composerId, s));
                continue;
            }
            (i.notificationRevision > a.notificationRevision || i.notificationRevision === a.notificationRevision && (i.agentUpdatedAt > a.agentUpdatedAt || i.agentUpdatedAt === a.agentUpdatedAt && !i.hasNotification)) && t.set(i.composerId, i);
        }
    }
    return t;
}
function _E(e) {
    const t = new Map, n = {
        allowedSources: new Set,
        hiddenSources: new Set,
        allowUnprojectedDiscovery: !1
    };
    t.set(void 0, n);
    const r = e.filter((i)=>i.ownerWindowId !== void 0), s = r.length > 0 ? r : [];
    for (const { contribution: i } of s)for (const a of i.cloudDiscoveryScopes){
        let o = t.get(a.teamId);
        o || (o = {
            allowedSources: new Set,
            hiddenSources: new Set,
            allowUnprojectedDiscovery: !1
        }, t.set(a.teamId, o));
        for (const l of a.allowedCloudSourceCategories)o.allowedSources.add(l), n.allowedSources.add(l);
        for (const l of a.includeHiddenSources)o.hiddenSources.add(l), n.hiddenSources.add(l);
        o.allowUnprojectedDiscovery ||= a.allowUnprojectedDiscovery, n.allowUnprojectedDiscovery ||= a.allowUnprojectedDiscovery;
    }
    return [
        ...t
    ].filter(([, i])=>i.allowedSources.size > 0 || i.allowUnprojectedDiscovery).map(([i, a])=>({
            teamId: i,
            allowedCloudSourceCategories: [
                ...a.allowedSources
            ].sort(),
            includeHiddenSources: [
                ...a.hiddenSources
            ].sort((o, l)=>o - l),
            allowUnprojectedDiscovery: a.allowUnprojectedDiscovery
        }));
}
function Cke(e, t) {
    const n = e.name.trim(), r = e.status === "running", s = t !== void 0 && t.statusIcon !== "running" && t.statusIcon !== "unread" && !t.hasNotification && e.updatedAtMs <= t.agentUpdatedAt, i = !r && e.isUnread && !s, a = r ? "running" : e.status === "error" ? "needs-attention" : i ? "unread" : "seen";
    return {
        composerId: e.composerId,
        name: n.length > 0 ? n : e.composerId,
        source: "cloud",
        repositoryUrls: e.repositoryUrls,
        agentUpdatedAt: e.updatedAtMs,
        statusIcon: a,
        toolTip: r ? "Running" : e.status === "error" ? "Needs attention" : void 0,
        hasNotification: i
    };
}
function Ike(e, t, n) {
    const r = t?.hasNotification === e.hasNotification ? t.notificationRevision : t ? Math.max(n, e.agentUpdatedAt, t.notificationRevision + 1) : e.agentUpdatedAt;
    return {
        composerId: e.composerId,
        hasNotification: e.hasNotification,
        agentUpdatedAt: e.agentUpdatedAt,
        notificationRevision: r
    };
}
function Ake(e) {
    return e.trim().toLowerCase().replace(/^git@([^:]+):/, "https://$1/").replace(/^ssh:\/\/git@/, "https://").replace(/\.git$/, "").replace(/\/$/, "");
}
function Yit(e) {
    const t = new Map(e.composers.map((i)=>{
        const a = e.readAtByComposerId.get(i.composerId);
        return [
            i.composerId,
            a !== void 0 && i.isUnread && i.updatedAtMs > 0 && i.updatedAtMs <= a ? {
                ...i,
                isUnread: !1
            } : i
        ];
    })), n = new Set, r = e.sections.flatMap((i)=>{
        const a = i.items.flatMap((o)=>{
            if (o.source !== "cloud") return n.add(o.composerId), [
                o
            ];
            if (e.missingComposerIds.has(o.composerId)) return e.notificationByComposerId.delete(o.composerId), [];
            const l = t.get(o.composerId);
            if (!l) return n.add(o.composerId), [
                o
            ];
            if (l.isArchived) return e.notificationByComposerId.delete(o.composerId), [];
            if (l.name.trim().length === 0) return n.add(o.composerId), [
                o
            ];
            const d = l.updatedAtMs >= o.agentUpdatedAt ? Cke(l, o) : o;
            return n.add(d.composerId), d !== o && e.notificationByComposerId.set(d.composerId, Ike(d, e.notificationByComposerId.get(d.composerId), e.nowMs)), [
                d
            ];
        });
        return a.length > 0 ? [
            {
                ...i,
                items: a
            }
        ] : [];
    }), s = e.allowUnprojectedAdditions ? [
        ...t.values()
    ].filter((i)=>!i.isArchived && i.name.trim().length > 0 && i.isEligibleForDiscovery && e.admittedComposerIds.has(i.composerId) && !n.has(i.composerId) && !e.missingComposerIds.has(i.composerId)).sort((i, a)=>a.updatedAtMs - i.updatedAtMs).map((i)=>Cke(i)) : [];
    if (s.length > 0) {
        const i = new Map;
        for (const l of r)for (const d of l.items)if (d.source === "cloud") for (const u of d.repositoryUrls ?? []){
            const m = Ake(u);
            m.length > 0 && !i.has(m) && i.set(m, l.id);
        }
        const a = new Map, o = [];
        for (const l of s){
            e.notificationByComposerId.set(l.composerId, Ike(l, e.notificationByComposerId.get(l.composerId), e.nowMs));
            const d = l.repositoryUrls?.map(Ake).map((u)=>i.get(u)).find((u)=>u !== void 0);
            if (d === void 0) o.push(l);
            else {
                const u = a.get(d) ?? [];
                u.push(l), a.set(d, u);
            }
        }
        for(let l = 0; l < r.length; l++){
            const d = r[l], u = a.get(d.id);
            u && (r[l] = {
                ...d,
                items: [
                    ...u,
                    ...d.items
                ]
            });
        }
        o.length > 0 && r.push({
            id: "cloud:discovered",
            label: "Cloud agents",
            items: o
        });
    }
    return r;
}
function Jit(e) {
    const t = e.cloudComposers ?? [], n = U9(e.records), r = e.admittedCloudComposerIds ?? new Set(t.filter((f)=>f.isEligibleForDiscovery && f.status === "running").map((f)=>f.composerId)), s = Hit(e.records), i = zit(e.records), a = !e.records.some((f)=>f.ownerWindowId !== void 0 && f.contribution.allowUnprojectedAdditions === !1), o = Yit({
        sections: s.sections,
        notificationByComposerId: i,
        composers: t,
        missingComposerIds: e.missingCloudComposerIds ?? new Set,
        admittedComposerIds: r,
        readAtByComposerId: e.cloudReadAtByComposerId ?? new Map,
        nowMs: e.nowMs ?? Date.now(),
        allowUnprojectedAdditions: a
    }), l = qit(o, i), d = n?.contribution.refresh ?? xke, { sections: u, overflowUnreadComposerIds: m } = Kit(l, d.menuCap, i);
    return {
        view: {
            newComposerActionLabel: n?.contribution.newComposerActionLabel ?? "New Agent",
            sections: u,
            overflowUnreadComposerIds: m,
            notificationStates: [
                ...i.values()
            ],
            hasRunningAgents: l.some((f)=>f.items.some((v)=>v.statusIcon === "running")),
            refresh: d
        },
        ownerWindowByComposerId: s.ownerWindowByComposerId,
        profileByComposerId: s.profileByComposerId,
        preferGlassByComposerId: s.preferGlassByComposerId
    };
}
function x9(e) {
    if (!e) return 0;
    const t = new Set(e.notificationStates.filter((n)=>n.hasNotification).map((n)=>n.composerId));
    return e.overflowUnreadComposerIds.filter((n)=>t.has(n)).length;
}
function Mke(e) {
    return bke(e).length + x9(e);
}
function sat(e) {
    Kke = e, $u = void 0;
}
function qke() {
    return nat.shouldUseDarkColors ? "dark" : "light";
}
function iat() {
    return Kke ?? L(tat.getAppPath(), "resources");
}
function TE(e) {
    const t = L(iat(), "tray-status"), n = L(t, e.replace(/\.png$/, "@2x.png"));
    if (Hke(n)) return W9.createFromBuffer(rat(n), {
        width: 32,
        height: 32,
        scaleFactor: 2
    });
    const r = L(t, e);
    return Hke(r) ? W9.createFromPath(r) : W9.createEmpty();
}
function aat() {
    return TE("spacer.png");
}
function oat() {
    const e = qke();
    return {
        key: e,
        icons: {
            "needs-attention": TE(`${e}-attention.png`),
            unread: TE(`${e}-unread.png`),
            running: TE(`${e}-running.png`),
            seen: aat()
        }
    };
}
function cat() {
    const e = qke();
    return (!$u || $u.key !== e) && ($u = oat()), $u;
}
function lat(e) {
    return cat().icons[e];
}
function dat() {
    $u = void 0;
}
var $u, Kke;
function zat(e) {
    return e !== ke.LOCAL && e !== ke.AS_SUBAGENT_FROM_LOCAL && e !== ke.AS_SUBAGENT_FROM_CLOUD && e !== ke.CLOUD_META_AGENT;
}
function Yat(e) {
    return (e.source === ke.SAND_CODING_SUBAGENT || e.source === ke.GROK_BOT || (e.owningServiceAccount?.trim().length ?? 0) === 0) && zat(e.source);
}
function Xat(e) {
    switch(e){
        case Tr.RUNNING:
        case Tr.CREATING:
            return "running";
        case Tr.ERROR:
            return "error";
        case Tr.FINISHED:
        case Tr.EXPIRED:
        case Tr.UNSPECIFIED:
            return "done";
        default:
            return e;
    }
}
async function Qat(e) {
    const t = Tw(e.accessToken, e.nowMs ?? Date.now());
    if (!t) return {
        kind: "unavailable"
    };
    const { client: n, headers: r } = eOe(e, t), s = e.discoveryScopes?.length ? e.discoveryScopes : [
        {
            allowedCloudSourceCategories: BE,
            includeHiddenSources: [],
            allowUnprojectedDiscovery: !0
        }
    ], i = await Promise.all(s.map((d)=>n.listBackgroundComposers(new RL({
            n: iU,
            includeStatus: !0,
            includeArchived: !1,
            teamId: d.teamId,
            shouldIncludeCollaborators: d.teamId !== void 0,
            includeHiddenSources: [
                ...d.includeHiddenSources
            ]
        }), {
            headers: rU(r, d),
            timeoutMs: GE
        }))), a = [
        ...new Set(e.knownComposerIds ?? [])
    ], o = await Promise.all(s.flatMap((d)=>tot(a, iU).map((u)=>n.listDetailedBackgroundComposers(new yL({
                bcIds: u,
                includeTeamWide: d.teamId !== void 0,
                includeArchived: !1
            }), {
                headers: rU(r, d),
                timeoutMs: GE
            })))), l = new Map;
    for (const [d, u] of i.entries()){
        const m = s[d];
        for (const f of u.composers)nOe(l, tOe(f, {
            status: f.status,
            isUnread: f.isUnread,
            isEligibleForDiscovery: m.allowUnprojectedDiscovery && m.allowedCloudSourceCategories.includes(zDe(f.source)) && Yat(f)
        }));
    }
    for (const d of o.flatMap((u)=>u.composers)){
        const u = d.composer;
        u && nOe(l, tOe(u, {
            status: d.status,
            isUnread: d.unread,
            isEligibleForDiscovery: !1
        }));
    }
    return {
        kind: "success",
        composers: [
            ...l.values()
        ],
        missingKnownComposerIds: new Set(a.filter((d)=>!l.has(d)))
    };
}
function Zat(e, t = Date.now()) {
    if (!(!(e instanceof wt) || e.code !== Be.ResourceExhausted)) return $it(e.metadata.get("retry-after"), t);
}
async function eot(e) {
    const t = Tw(e.accessToken, e.nowMs ?? Date.now());
    if (!t) return !1;
    const n = [
        ...new Set(e.composerIds)
    ];
    if (n.length === 0) return !0;
    const { client: r, headers: s } = eOe(e, t), i = e.discoveryScopes?.length ? e.discoveryScopes : [
        {
            allowedCloudSourceCategories: BE,
            includeHiddenSources: [],
            allowUnprojectedDiscovery: !1
        }
    ];
    return await Promise.all(n.map(async (a)=>{
        const o = await Promise.allSettled(i.map((l)=>r.markBackgroundComposerRead({
                bcId: a
            }, {
                headers: rU(s, l),
                timeoutMs: GE
            })));
        if (o.every((l)=>l.status === "rejected")) throw o.find((d)=>d.status === "rejected")?.reason;
    })), !0;
}
function eOe(e, t) {
    const n = e.fetchFn ?? globalThis.fetch.bind(globalThis), r = YM(ZDe, cP({
        httpClient: not(n),
        baseUrl: e.backendUrl && e.backendUrl.length > 0 ? e.backendUrl : rOe,
        useBinaryFormat: !1,
        interceptors: [],
        acceptCompression: [],
        sendCompression: null,
        compressMinBytes: Number.MAX_SAFE_INTEGER,
        readMaxBytes: Number.MAX_SAFE_INTEGER,
        writeMaxBytes: Number.MAX_SAFE_INTEGER
    })), s = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`,
        "x-cursor-client-type": "ide",
        "x-cursor-client-version": e.clientVersion
    };
    return e.machineId && (s["x-cursor-checksum"] = e.macMachineId === void 0 ? `${sU}${e.machineId}` : `${sU}${e.machineId}/${e.macMachineId}`), {
        client: r,
        headers: s
    };
}
function tOe(e, t = {}) {
    const n = t.status ?? e.status, r = t.isUnread ?? e.isUnread, s = t.isEligibleForDiscovery ?? !1;
    return {
        composerId: e.bcId,
        name: e.name,
        isArchived: e.isArchived || e.isKilled,
        isUnread: r,
        status: Xat(n),
        updatedAtMs: e.updatedAtMs || e.createdAtMs || 0,
        source: e.source,
        isEligibleForDiscovery: s,
        repositoryUrls: e.repoUrls.length > 0 ? e.repoUrls : e.repoUrl ? [
            e.repoUrl
        ] : []
    };
}
function nOe(e, t) {
    const n = e.get(t.composerId);
    !n || t.updatedAtMs >= n.updatedAtMs ? e.set(t.composerId, {
        ...t,
        isEligibleForDiscovery: t.isEligibleForDiscovery || n?.isEligibleForDiscovery === !0
    }) : t.isEligibleForDiscovery && !n.isEligibleForDiscovery && e.set(t.composerId, {
        ...n,
        isEligibleForDiscovery: !0
    });
}
function rU(e, t) {
    return t.teamId === void 0 ? {
        ...e
    } : {
        ...e,
        "x-cursor-team-id": String(t.teamId)
    };
}
function tot(e, t) {
    const n = [];
    for(let r = 0; r < e.length; r += t)n.push(e.slice(r, r + t));
    return n;
}
function not(e) {
    return async (t)=>{
        const n = new Headers(t.header);
        n.set("Accept-Encoding", "identity");
        const r = await e(t.url, {
            method: t.method,
            headers: n,
            signal: t.signal,
            body: t.body ? await rot(t.body) : void 0
        }), s = new Headers(r.headers);
        return s.delete("content-encoding"), s.delete("content-length"), {
            status: r.status,
            header: s,
            body: sot(r),
            trailer: new Headers
        };
    };
}
async function rot(e) {
    const t = [];
    let n = 0;
    for await (const i of e)t.push(i), n += i.byteLength;
    if (n === 0) return;
    const r = new Uint8Array(n);
    let s = 0;
    for (const i of t)r.set(i, s), s += i.byteLength;
    return r.buffer;
}
async function* sot(e) {
    const t = new Uint8Array(await e.arrayBuffer());
    t.byteLength > 0 && (yield t);
}
function sOe() {
    return {
        composers: [],
        missingComposerIds: new Set,
        admittedComposerIds: new Set,
        readAtByComposerId: new Map
    };
}
function aot(e) {
    const t = _E(e).sort((n, r)=>(n.teamId ?? Number.MIN_SAFE_INTEGER) - (r.teamId ?? Number.MIN_SAFE_INTEGER));
    return JSON.stringify(t);
}
function iOe(e, t) {
    return U9(e.filter((r)=>r.ownerWindowId !== void 0))?.contribution?.mainProcessCloudRefreshEnabled ?? t;
}
function oot(e, t) {
    const n = new Set;
    for (const r of e)for (const s of r.contribution.sections)for (const i of s.items)i.source === "cloud" && n.add(i.composerId);
    for (const r of t.composers)n.add(r.composerId);
    return [
        ...n
    ];
}
function cot(e, t) {
    const n = new Map(t.composers.map((i)=>[
            i.composerId,
            i
        ])), r = new Set([
        ...e.admittedComposerIds
    ].filter((i)=>{
        const a = n.get(i);
        return a !== void 0 && !a.isArchived && !t.missingKnownComposerIds.has(i);
    })), s = new Map(e.readAtByComposerId);
    for (const i of t.composers){
        i.isEligibleForDiscovery && i.status === "running" && r.add(i.composerId);
        const a = s.get(i.composerId);
        a !== void 0 && i.updatedAtMs > a && s.delete(i.composerId);
    }
    for (const i of t.missingKnownComposerIds)s.delete(i);
    return {
        composers: t.composers,
        missingComposerIds: t.missingKnownComposerIds,
        admittedComposerIds: r,
        readAtByComposerId: s
    };
}
function lot(e, t, n) {
    const r = new Map(e.readAtByComposerId);
    for (const s of t)r.set(s, n);
    return {
        ...e,
        composers: e.composers.map((s)=>t.has(s.composerId) ? {
                ...s,
                isUnread: !1
            } : s),
        readAtByComposerId: r
    };
}
var Lo, jE, aU, is, HE;
export { $it, $u, Ake, Cke, Fit, Git, HE, Hit, Ike, Jit, Kit, Kke, Lo, Mke, Oa, Qat, TE, U9, Vit, Wit, Xat, Yat, Yit, Zat, _E, aU, aat, aot, bke, cat, cot, dat, eOe, eot, fE, iOe, iat, is, jE, jit, lat, lot, nOe, not, oat, oot, qit, qke, rU, rot, sOe, sat, sot, tOe, tot, x9, zat, zit };
var __wakaru_hot_initialized = false;
export function hot() {
if (__wakaru_hot_initialized) return;
__wakaru_hot_initialized = true;
"use strict";
h(), se(), j(), le(), ns(), oe(), Ce(), Vt(), te(), pt(), Ye(), Tt(), Eu(), Mt(), Bit(), Rke(), eat(), A9(), uat(), vE(), or(), br(), ts(), iot(), dot(), gfe(), Lo = "cursorAuth/accessToken", jE = "cursorAuth/refreshToken", aU = "cursor.tray.mainProcessCloudRefreshEnabled", is = {
    WINDOW_READY_DELAY_MS: 1e3,
    MENU_REBUILD_COALESCE_MS: 100,
    MENU_BAR_VISIBILITY_CHECK_DELAY_MS: 1e3,
    ICON_PATHS: {
        MACOS: {
            TEMPLATE: [
                "trayTemplate@2x.png",
                "trayTemplate.png"
            ],
            NOTIFY: [
                "trayNotifyWhite@2x.png",
                "trayNotifyWhite.png"
            ]
        },
        WINDOWS: {
            TEMPLATE: "win32/trayTemplate.ico",
            TEMPLATE_DARK: "win32/trayTemplateDark.ico",
            NOTIFY: "win32/trayNotifyWhite.ico",
            NOTIFY_DARK: "win32/trayNotifyDark.ico"
        },
        LINUX: {
            TEMPLATE: [
                "trayTemplate.png",
                "trayTemplate-24.png",
                "trayTemplate-22.png",
                "trayTemplate-16.png"
            ],
            TEMPLATE_DARK: [
                "trayTemplateDark.png",
                "trayTemplateDark-24.png",
                "trayTemplateDark-22.png",
                "trayTemplateDark-16.png"
            ],
            NOTIFY: [
                "trayNotifyWhite.png",
                "trayNotifyWhite-24.png",
                "trayNotifyWhite-22.png",
                "trayNotifyWhite-16.png"
            ],
            NOTIFY_DARK: [
                "trayNotifyDark.png",
                "trayNotifyDark-24.png",
                "trayNotifyDark-22.png",
                "trayNotifyDark-16.png"
            ]
        }
    }
}, HE = class extends J {
    constructor(e, t, n, r, s, i, a, o, l, d){
        super(), this.lifecycleMainService = e, this.logService = t, this.windowsMainService = n, this.environmentMainService = r, this.productService = s, this.applicationStorageMainService = i, this.storageMainService = a, this.stateService = o, this.systemNotificationService = l, this.contributionLedger = new Uke, this.mainCloudState = sOe(), this.composerToWindow = new Map, this.composerToProfile = new Map, this.composerPreferGlass = new Map, this.menuPreferGlass = !1, this.hasAnyNotifications = !1, this.dockBadgeEnabled = !0, this.lastEngagementRefreshAt = 0, this.deferredContributions = new Map, this.menuRebuildScheduler = this._register(new xr(()=>this.rebuildContextMenu(), is.MENU_REBUILD_COALESCE_MS)), this.refreshTimer = this._register(new Ut), this.refreshWhenWindowReady = !1, this.cloudRefreshQueue = new w3, this.authenticationFence = new Lke, this.clearedUnreadFence = new Map, this.mainCloudConsecutiveFailures = 0, this._onDidChangeMenuBarVisibility = this._register(new N), this.onDidChangeMenuBarVisibility = this._onDidChangeMenuBarVisibility.event, this.menuBarVisibility = "unknown", this.menuBarVisibilityCheck = this._register(new Ut), this.legacyHiddenRecreateAttempted = !1, this.dockMenu = q ? this._register(new jke(this.windowsMainService, d, (f)=>{
            this.openComposerFromMenu(f, "dock.agent_opened");
        })) : void 0, this._register(this.lifecycleMainService.onWillShutdown(()=>this.dispose()));
        const u = ()=>this.onAuthenticationChange();
        this.applicationStorageMainService.whenReady.then(()=>{
            this._store.isDisposed || (u(), this._register(this.storageMainService.applicationStorage.onDidChangeStorage((f)=>{
                (f.key === Lo || f.key === jE) && u();
            })));
        }), this._register(this.windowsMainService.onDidDestroyWindow((f)=>{
            this.onWindowClosed(f.id);
        })), this._register(this.windowsMainService.onDidChangeWindowsCount((f)=>{
            f.newCount >= f.oldCount || this.contributionLedger.reconcileWindows(new Set(this.windowsMainService.getWindows().map((v)=>v.id))) && (this.getVisibleSnapshotWindows().length === 0 && (this.refreshWhenWindowReady = !0), this.onContributionLedgerChanged());
        })), this._register(this.windowsMainService.onDidSignalReadyWindow((f)=>{
            this.refreshWhenWindowReady && (this.refreshWhenWindowReady = !1, this.logService.trace(`[Tray] Window ${f.id} ready after empty set; requesting refresh`), this.requestSnapshotRefresh("poll"));
        }));
        const m = ()=>{
            this.tray && (dat(), this.renderedMenuState = void 0, this.updateContextMenu(), (ee || Fe) && this.updateIcon());
        };
        if (VE.on("updated", m), this._register(ge(()=>VE.off("updated", m))), this.registerPowerListeners(), q) {
            const f = ()=>{
                this.tray && this.scheduleMenuBarVisibilityCheck();
            };
            zu.on("did-become-active", f), this._register(ge(()=>zu.off("did-become-active", f)));
        }
    }
    registerPowerListeners() {
        try {
            const e = ()=>{
                this.currentView?.refresh.enablePower !== !1 && this.requestSnapshotRefresh("power");
            };
            $E.on("resume", e), $E.on("unlock-screen", e), this._register(ge(()=>{
                $E.off("resume", e), $E.off("unlock-screen", e);
            }));
        } catch (e) {
            this.logService.warn("TrayMainService: Unable to observe power events", e);
        }
    }
    initialize() {
        if (!this.tray) {
            sat(this.getResourcesRoot());
            try {
                const e = this.getIconPath(!1);
                if (!_l(e)) {
                    this.logService.error(`TrayMainService: Icon file does not exist at path: ${e}`);
                    return;
                }
                const t = oOe.createFromPath(e);
                q && t.setTemplateImage(!0), this.tray = new uot(t), this.tray.setToolTip(this.productService.nameShort || "Cursor"), q ? (this.tray.setIgnoreDoubleClickEvents(!0), this.tray.on("click", ()=>{
                    this.trackEvent("tray.menu_opened"), this.onTrayEngagement();
                }), this.tray.on("right-click", ()=>{
                    this.trackEvent("tray.menu_opened"), this.onTrayEngagement();
                })) : (this.tray.on("click", ()=>{
                    this.onTrayEngagement(), this.toggleWindowVisibility();
                }), this.tray.on("right-click", ()=>{
                    this.trackEvent("tray.menu_opened"), this.onTrayEngagement();
                })), (q || ee) && this.tray.on("mouse-enter", ()=>this.onTrayEngagement()), this.applyNotificationPresentation(), this.tray.setContextMenu(aOe.buildFromTemplate([
                    {
                        label: this.productService.nameShort || "Cursor",
                        enabled: !1
                    }
                ])), this.applicationStorageMainService.whenReady.then(()=>{
                    !this._store.isDisposed && this.tray && (this.renderedMenuState = void 0, this.rebuildContextMenu(), this.requestSnapshotRefresh("poll"));
                }), q && this.scheduleMenuBarVisibilityCheck();
            } catch (e) {
                this.logService.error("TrayMainService: Failed to initialize tray", e);
            }
        }
    }
    scheduleMenuBarVisibilityCheck() {
        this.menuBarVisibilityCheck.value = Hn(()=>{
            this.menuBarVisibilityCheck.clear(), this.checkMenuBarVisibility();
        }, is.MENU_BAR_VISIBILITY_CHECK_DELAY_MS);
    }
    checkMenuBarVisibility() {
        if (!this.tray) return;
        const e = Wit({
            bounds: this.tray.getBounds(),
            displays: cOe.getAllDisplays(),
            legacyVisibleDefault: pot.getUserDefault(L9, "string"),
            recreateAttempted: this.legacyHiddenRecreateAttempted
        });
        if (e.kind === "recreate") {
            this.logService.info(`[Tray] Menu bar icon hidden by legacy '${L9}' default; recreating`), this.legacyHiddenRecreateAttempted = !0, this.destroyTray(), this.initialize();
            return;
        }
        this.setMenuBarVisibility(e.visibility);
    }
    setMenuBarVisibility(e) {
        e !== this.menuBarVisibility && (this.logService.info(`[Tray] Menu bar visibility: ${this.menuBarVisibility} -> ${e}`), this.menuBarVisibility = e, this._onDidChangeMenuBarVisibility.fire(e));
    }
    async getMenuBarVisibility() {
        return q && this.tray && !this.menuBarVisibilityCheck.value && this.checkMenuBarVisibility(), this.menuBarVisibility;
    }
    async openMenuBarSettings() {
        q && await mot.openExternal(wke);
    }
    updateContextMenu() {
        this.tray && this.menuRebuildScheduler.schedule();
    }
    rebuildContextMenu() {
        if (!this.tray) return;
        const e = this.getContextMenuState();
        Bs(e, this.renderedMenuState) || (this.renderedMenuState = e, this.tray.setContextMenu(this.createContextMenu(e)));
    }
    createComposerMenuItem(e, t) {
        return {
            id: e.statusIcon === "running" ? `tray-running-${e.composerId}` : `tray-composer-${e.composerId}`,
            label: e.name || t,
            toolTip: e.toolTip,
            icon: lat(e.statusIcon),
            click: ()=>this.openComposerFromMenu(e, "tray.agent_opened")
        };
    }
    openComposerFromMenu(e, t) {
        this.trackEvent(t), this.sendMessageToWindow("vscode:openComposer", {
            composerId: e.composerId
        }, this.composerToWindow.get(e.composerId), this.composerToProfile.get(e.composerId), this.composerPreferGlass.get(e.composerId) ?? e.source !== "local");
    }
    getContextMenuState() {
        return this.hasLiveSession() ? {
            kind: "signed-in",
            newComposerActionLabel: this.currentView?.newComposerActionLabel ?? "New Agent",
            sections: this.currentView?.sections ?? [],
            overflowUnreadCount: x9(this.currentView),
            hasAnyNotifications: this.hasAnyNotifications
        } : {
            kind: "signed-out"
        };
    }
    isAuthenticated() {
        return jit(this.applicationStorageMainService.get(Lo, -1), this.applicationStorageMainService.get(jE, -1));
    }
    hasRefreshToken() {
        const e = this.applicationStorageMainService.get(jE, -1);
        return e !== void 0 && e.length > 0;
    }
    hasLiveSession() {
        return this.isAuthenticated() ? !0 : this.hasRefreshToken() && this.lastAcceptingAuthId !== void 0 && this.authenticationFence.accepts(this.lastAcceptingAuthId);
    }
    acceptsContributionIdentity(e) {
        if (this.authenticationFence.accepts(e)) return !0;
        const t = this.applicationStorageMainService.get(Lo, -1);
        return !!((e === void 0 || e.length === 0) && y1(t) === void 0 && this.hasRefreshToken() && this.lastAcceptingAuthId !== void 0 && this.authenticationFence.accepts(this.lastAcceptingAuthId));
    }
    onAuthenticationChange() {
        const e = this.applicationStorageMainService.get(Lo, -1), t = this.hasRefreshToken(), n = this.isAuthenticated(), r = y1(e) ?? null, s = !n && !t, i = s ? null : r ?? (t ? this.lastAcceptingAuthId ?? null : null), a = this.lastAcceptingAuthId, o = this.authenticationFence.updateIdentity(i);
        r !== null && !s && (this.lastAcceptingAuthId = r), (o || !n) && (this.cloudAuthorityKey = void 0), s && (this.lastAcceptingAuthId = void 0), (s || a !== void 0 && r !== null && a !== r) && this.clearAccountOwnedState(), this.renderedMenuState = void 0, this.hasLiveSession() && (this.flushDeferredContributions(), this.applyMergedSnapshot()), this.applyNotificationPresentation(), this.updateContextMenu(), this.scheduleSnapshotRefresh(!0), n && this.requestSnapshotRefresh("poll");
    }
    clearAccountOwnedState() {
        this.currentView = void 0, this.clearedUnreadFence.clear(), this.mainCloudConsecutiveFailures = 0, this.mainCloudRetryAfterUntilMs = void 0, this.contributionLedger.clear(), this.deferredContributions.clear(), this.clearMainCloudState(), this.composerToWindow.clear(), this.composerToProfile.clear(), this.composerPreferGlass.clear(), this.menuPreferGlass = !1, this.menuPresentationProfile = void 0, this.hasAnyNotifications = !1, this.dockBadgeEnabled = !0;
    }
    clearMainCloudState() {
        this.mainCloudState = sOe();
    }
    onTrayEngagement() {
        if (!this.isAuthenticated()) return;
        const e = this.currentView?.refresh;
        if (!e?.enableEngagement) return;
        const t = Date.now();
        t - this.lastEngagementRefreshAt < e.engagementThrottleMs || (this.lastEngagementRefreshAt = t, this.requestSnapshotRefresh("engagement"));
    }
    getResourcesRoot() {
        const e = zu.isPackaged ? L(zu.getAppPath(), "resources") : L(this.environmentMainService.appRoot, "resources");
        return this.logService.trace(`[Tray] Resources root: ${e}, isPackaged: ${zu.isPackaged}`), e;
    }
    findFirstExistingPath(e) {
        for (const t of e)if (_l(t)) return this.logService.trace(`[Tray] Using icon: ${t}`), t;
    }
    orderLinuxIconNamesByScale(e) {
        const t = cOe.getPrimaryDisplay().scaleFactor, n = t >= 1.75 ? [
            48,
            32,
            24,
            22,
            16
        ] : t >= 1.25 ? [
            32,
            24,
            22,
            16
        ] : [
            24,
            22,
            16
        ], r = [], s = (i)=>{
            r.includes(i) || r.push(i);
        };
        for (const i of e){
            const a = i.match(/^(.*?)(-(\d+))?(\.[^.]+)$/);
            if (a) {
                const o = a[1], l = a[4];
                for (const d of n)s(`${o}-${d}${l}`);
            }
            s(i);
        }
        return r;
    }
    getMacOSIconPath(e, t) {
        this.logService.info(`[Tray] getMacOSIconPath: hasNotifications: ${e}`);
        const r = (e ? is.ICON_PATHS.MACOS.NOTIFY : is.ICON_PATHS.MACOS.TEMPLATE).map((i)=>L(t, "darwin", i)), s = this.findFirstExistingPath(r);
        return s || (this.logService.warn(`[Tray] No macOS icon found. Tried: ${r.join(", ")}`), r[0]);
    }
    getWindowsIconPath(e, t) {
        const n = !VE.shouldUseDarkColors;
        let r;
        e ? r = n ? is.ICON_PATHS.WINDOWS.NOTIFY : is.ICON_PATHS.WINDOWS.NOTIFY_DARK : r = n ? is.ICON_PATHS.WINDOWS.TEMPLATE : is.ICON_PATHS.WINDOWS.TEMPLATE_DARK;
        const s = L(t, r);
        if (_l(s)) return this.logService.trace(`[Tray] Using Windows icon: ${s} (light mode: ${n})`), s;
        const i = L(t, "win32", "code.ico");
        return _l(i) ? (this.logService.warn(`[Tray] Using fallback Windows icon: ${i}. Consider adding tray-specific icons.`), i) : (this.logService.error(`[Tray] No Windows icon found at: ${s}`), s);
    }
    getLinuxIconPath(e, t) {
        const n = !VE.shouldUseDarkColors;
        let r;
        e ? r = n ? is.ICON_PATHS.LINUX.NOTIFY : is.ICON_PATHS.LINUX.NOTIFY_DARK : r = n ? is.ICON_PATHS.LINUX.TEMPLATE : is.ICON_PATHS.LINUX.TEMPLATE_DARK;
        const i = this.orderLinuxIconNamesByScale(r).map((o)=>L(t, "linux", o)), a = this.findFirstExistingPath(i);
        if (!a) {
            const o = L(t, "linux", "code.png");
            return _l(o) ? (this.logService.warn(`[Tray] Using fallback Linux icon: ${o}. Consider adding tray-specific icons.`), o) : (this.logService.warn(`[Tray] No Linux icon found. Tried: ${i.join(", ")} (light mode: ${n})`), i[0]);
        }
        return this.logService.trace(`[Tray] Using Linux icon (light mode: ${n})`), a;
    }
    getIconPath(e) {
        const t = this.getResourcesRoot();
        return q ? this.getMacOSIconPath(e, t) : ee ? this.getWindowsIconPath(e, t) : this.getLinuxIconPath(e, t);
    }
    async sendMessageToWindow(e, t, n, r, s = !1) {
        try {
            const i = this.windowsMainService.getWindows();
            if (n !== void 0) {
                const d = i.find((u)=>u.id === n);
                if (d) {
                    d.sendWhenReady(e, Ie.None, t), d.focus();
                    return;
                }
                this.logService.warn(`TrayMainService: Target window ${n} not found, using fallback`);
            }
            const a = (d)=>r === void 0 || d.config?.profiles.profile.id === r.id, l = i.find((d)=>d.config?.glass === !0 === s && a(d)) ?? (s ? void 0 : i.find(a) ?? i[0]);
            if (l) l.sendWhenReady(e, Ie.None, t), l.focus();
            else {
                const d = s ? await this.windowsMainService.open({
                    context: 2,
                    cli: {
                        _: [],
                        glass: !0
                    },
                    forceProfile: r?.name
                }) : await this.windowsMainService.openEmptyWindow({
                    context: 2
                }, {
                    forceProfile: r?.name
                });
                d.length > 0 && setTimeout(()=>{
                    try {
                        d[0].sendWhenReady(e, Ie.None, t);
                    } catch (u) {
                        this.logService.error(`TrayMainService: Failed to send message '${e}' to window`, u);
                    }
                }, is.WINDOW_READY_DELAY_MS);
            }
        } catch (i) {
            this.logService.error("TrayMainService: Error during window message handling", i);
        }
    }
    sendMessageToAllWindows(e, t) {
        try {
            const n = this.windowsMainService.getWindows();
            for (const r of n)try {
                r.sendWhenReady(e, Ie.None, t);
            } catch (s) {
                this.logService.error(`TrayMainService: Failed to broadcast message '${e}' to window ${r.id}`, s);
            }
        } catch (n) {
            this.logService.error(`TrayMainService: Error broadcasting message '${e}'`, n);
        }
    }
    getVisibleSnapshotWindows() {
        return this.windowsMainService.getWindows().filter((e)=>e.win?.isVisible() === !0);
    }
    getCloudRefreshPlan(e) {
        const t = this.windowsMainService.getLastActiveWindow()?.id, n = this.windowsMainService.getFocusedWindow()?.id, r = this.getContributionRecords();
        return Git({
            mainProcessCloudRefreshEnabled: iOe(r, this.applicationStorageMainService.getBoolean(aU, -1, !1)),
            reason: e,
            windows: this.windowsMainService.getWindows().map((s)=>({
                    id: s.id,
                    isVisible: s.win?.isVisible() === !0,
                    isGlass: s.config?.glass === !0,
                    isLastActive: s.id === t,
                    rendererHasFocus: s.id === n
                }))
        });
    }
    requestSnapshotRefresh(e) {
        if (!(!this.tray || !this.isAuthenticated())) try {
            const t = this.windowsMainService.getWindows();
            this.reconcileCloudAuthority() && this.applyMergedSnapshot();
            const n = this.getCloudRefreshPlan(e);
            this.getVisibleSnapshotWindows().length === 0 && (this.refreshWhenWindowReady = !0);
            for (const r of t){
                const s = {
                    reason: e,
                    isCloudRefreshTarget: n.kind === "renderer" && n.windowId === r.id
                };
                r.sendWhenReady("vscode:trayRequestRefresh", Ie.None, s);
            }
            this.logService.trace(`[Tray] Refreshing ${t.length} renderer contributions with ${n.kind} cloud owner (reason: ${e})`), n.kind === "main" ? this.refreshCloudProjection(e) : (this.mainCloudConsecutiveFailures = 0, this.mainCloudRetryAfterUntilMs = void 0);
        } catch (t) {
            this.logService.error("TrayMainService: Failed to request contribution refresh", t);
        } finally{
            this.scheduleSnapshotRefresh(!0);
        }
    }
    async refreshCloudProjection(e) {
        await this.cloudRefreshQueue.queue(async ()=>{
            this.tray && this.isAuthenticated() && await this.doRefreshCloudProjection(e);
        });
    }
    async doRefreshCloudProjection(e) {
        try {
            await this.applicationStorageMainService.whenReady;
            const t = this.mainCloudRetryAfterRemainingMs();
            if (t !== void 0 && t > 0) {
                this.logService.trace(`[Tray] Main cloud refresh (${e}) held ${t}ms by a server rate limit`);
                return;
            }
            const n = this.getCloudRefreshPlan("poll");
            if (n.kind !== "main") {
                n.kind === "renderer" && this.requestSnapshotRefresh("poll");
                return;
            }
            const r = this.getContributionRecords(), s = _E(r);
            if (s.length === 0) return;
            const i = this.cloudAuthorityKey, a = this.applicationStorageMainService.get(Lo, -1), o = this.environmentMainService.args["test-backend-url"], l = await Qat({
                accessToken: a,
                backendUrl: typeof o == "string" ? o : void 0,
                machineId: this.stateService.getItem(wd),
                macMachineId: this.stateService.getItem(Ed),
                clientVersion: this.productService.version,
                discoveryScopes: s,
                knownComposerIds: oot(r, this.mainCloudState)
            }), d = this.mainCloudConsecutiveFailures > 0 || this.mainCloudRetryAfterUntilMs !== void 0;
            if (this.mainCloudConsecutiveFailures = 0, this.mainCloudRetryAfterUntilMs = void 0, d && this.scheduleSnapshotRefresh(!0), i !== this.cloudAuthorityKey || i !== this.getCloudAuthorityKey() || this.getCloudRefreshPlan("poll").kind !== "main") {
                this.requestSnapshotRefresh("poll");
                return;
            }
            if (l.kind === "unavailable") {
                this.logService.trace(`[Tray] Main cloud refresh (${e}) skipped without a usable token`);
                return;
            }
            this.mainCloudState = cot(this.mainCloudState, l);
            for (const u of this.mainCloudState.composers)u.isUnread && !this.mainCloudState.readAtByComposerId.has(u.composerId) && this.clearedUnreadFence.delete(u.composerId);
            this.logService.trace(`[Tray] Main cloud refresh (${e}) applied ${l.composers.length} composers`), this.applyMergedSnapshot();
        } catch (t) {
            this.mainCloudConsecutiveFailures += 1;
            const n = Zat(t);
            n !== void 0 && (this.mainCloudRetryAfterUntilMs = Date.now() + n), this.logService.warn(`[Tray] Main cloud refresh (${e}) failed (${this.mainCloudConsecutiveFailures} consecutive)`, t), this.scheduleSnapshotRefresh(!0);
        }
    }
    mainCloudRetryAfterRemainingMs() {
        if (this.mainCloudRetryAfterUntilMs !== void 0) return Math.max(0, this.mainCloudRetryAfterUntilMs - Date.now());
    }
    scheduleSnapshotRefresh(e = !1) {
        if (!this.tray || !this.isAuthenticated()) {
            this.refreshTimer.clear(), this.scheduledRefreshIntervalMs = void 0;
            return;
        }
        const t = this.currentView;
        if (!t?.refresh.enablePoll) {
            this.refreshTimer.clear(), this.scheduledRefreshIntervalMs = void 0;
            return;
        }
        const n = t.sections.length === 0 ? t.refresh.emptyIntervalMs : t.hasRunningAgents ? t.refresh.activeIntervalMs : t.refresh.idleIntervalMs, r = Vit({
            baseIntervalMs: n,
            consecutiveFailures: this.mainCloudConsecutiveFailures,
            retryAfterMs: this.mainCloudRetryAfterRemainingMs()
        });
        !e && this.refreshTimer.value && this.scheduledRefreshIntervalMs === r || (this.scheduledRefreshIntervalMs = r, this.refreshTimer.value = Hn(()=>{
            this.refreshTimer.clear(), this.scheduledRefreshIntervalMs = void 0, this.onSnapshotRefreshTick();
        }, r));
    }
    onSnapshotRefreshTick() {
        this.requestSnapshotRefresh("poll");
    }
    focusOrOpenWindow() {
        try {
            const e = this.windowsMainService.getFocusedWindow() ?? this.windowsMainService.getLastActiveWindow();
            e ? e.focus() : this.windowsMainService.openEmptyWindow({
                context: 2
            });
        } catch (e) {
            this.logService.error("TrayMainService: Error during window focus", e);
        }
    }
    trackEvent(e) {
        try {
            const t = this.windowsMainService.getFocusedWindow() ?? this.windowsMainService.getLastActiveWindow();
            t && t.sendWhenReady("vscode:trayAnalytics", Ie.None, {
                eventName: e
            });
        } catch  {}
    }
    createContextMenu(e) {
        const t = [];
        switch(e.kind){
            case "signed-out":
                t.push({
                    label: "Log In",
                    click: ()=>{
                        this.trackEvent("tray.log_in_clicked"), this.sendMessageToWindow("vscode:trayLogIn", {});
                    }
                }), t.push({
                    label: "Sign Up",
                    click: ()=>{
                        this.trackEvent("tray.sign_up_clicked"), this.sendMessageToWindow("vscode:traySignUp", {});
                    }
                });
                break;
            case "signed-in":
                {
                    if (e.sections.length > 0) {
                        for (const [n, r] of e.sections.entries())n > 0 && t.push({
                            type: "separator"
                        }), t.push({
                            id: `tray-section-${r.id}`,
                            label: r.label,
                            enabled: !1
                        }), r.items.forEach((s, i)=>{
                            t.push(this.createComposerMenuItem(s, `Agent ${i + 1}`));
                        });
                        e.overflowUnreadCount > 0 && t.push({
                            label: Pke(e.overflowUnreadCount),
                            click: ()=>{
                                this.trackEvent("tray.more_unread_clicked"), this.focusOrOpenWindow();
                            }
                        });
                    } else t.push({
                        label: "No recent agents",
                        enabled: !1
                    });
                    t.push({
                        type: "separator"
                    }), t.push({
                        label: e.newComposerActionLabel,
                        click: ()=>{
                            this.trackEvent("tray.new_agent_clicked"), this.sendMessageToWindow("vscode:createNewComposer", {}, void 0, this.menuPresentationProfile, this.menuPreferGlass);
                        }
                    }), t.push({
                        label: "Clear All Notifications",
                        enabled: e.hasAnyNotifications,
                        click: ()=>{
                            this.trackEvent("tray.clear_all_notifications_clicked"), this.clearAllNotifications();
                        }
                    });
                    break;
                }
            default:
                return e;
        }
        return t.push({
            type: "separator"
        }), t.push({
            label: "Open Cursor",
            click: ()=>{
                this.trackEvent("tray.open_cursor_clicked"), this.focusOrOpenWindow();
            }
        }), t.push({
            label: "Settings",
            click: ()=>{
                this.trackEvent("tray.settings_opened"), this.sendMessageToWindow("vscode:openSettings", {}, void 0, this.menuPresentationProfile, this.menuPreferGlass);
            }
        }), t.push({
            label: "Quit",
            click: ()=>{
                zu.quit();
            }
        }), aOe.buildFromTemplate(t);
    }
    async clearAllNotifications() {
        const e = new Set(this.currentView?.notificationStates.filter((d)=>d.hasNotification).map((d)=>d.composerId) ?? []);
        for (const d of this.currentView?.sections ?? [])for (const u of d.items)(u.hasNotification || u.statusIcon === "unread") && e.add(u.composerId);
        const t = this.mainCloudState.composers.filter((d)=>d.isUnread || e.has(d.composerId)).map((d)=>d.composerId), n = new Map((this.currentView?.notificationStates ?? []).map((d)=>[
                d.composerId,
                d
            ])), r = new Map;
        for (const d of this.currentView?.sections ?? [])for (const u of d.items)r.set(u.composerId, u.agentUpdatedAt);
        const s = this.windowsMainService.getWindows().map((d)=>d.id);
        for (const d of new Set([
            ...e,
            ...t
        ])){
            const u = n.get(d);
            this.clearedUnreadFence.set(d, {
                agentUpdatedAt: Math.max(u?.agentUpdatedAt ?? 0, r.get(d) ?? 0),
                notificationRevision: u?.notificationRevision ?? 0,
                pendingAckWindowIds: new Set(s)
            });
        }
        if (this.contributionLedger.clearNotifications(), t.length > 0 && (this.mainCloudState = lot(this.mainCloudState, new Set(t), Date.now())), this.applyMergedSnapshot(), this.sendMessageToAllWindows("vscode:clearAllNotifications", {}), await this.applicationStorageMainService.whenReady, t.length === 0) return;
        const i = this.cloudAuthorityKey, a = this.getContributionRecords(), o = this.applicationStorageMainService.get(Lo, -1), l = _E(a);
        if (l.length !== 0) try {
            const d = this.environmentMainService.args["test-backend-url"], u = await eot({
                accessToken: o,
                backendUrl: typeof d == "string" ? d : void 0,
                machineId: this.stateService.getItem(wd),
                macMachineId: this.stateService.getItem(Ed),
                clientVersion: this.productService.version,
                discoveryScopes: l,
                composerIds: t
            });
            if (i !== this.cloudAuthorityKey || i !== this.getCloudAuthorityKey()) return;
            u || this.requestSnapshotRefresh("poll");
        } catch (d) {
            this.logService.warn("[Tray] Failed to clear cloud notifications", d), i === this.cloudAuthorityKey && i === this.getCloudAuthorityKey() && this.requestSnapshotRefresh("poll");
        }
    }
    toggleWindowVisibility() {
        const e = this.windowsMainService.getFocusedWindow() ?? this.windowsMainService.getLastActiveWindow();
        if (!e) this.windowsMainService.openEmptyWindow({
            context: 2
        });
        else {
            const t = e;
            t.win && (t.win.isVisible() ? t.win.hide() : (t.win.show(), t.focus()));
        }
    }
    updateIcon() {
        if (this.tray) try {
            const e = this.getIconPath(this.hasLiveSession() && this.hasAnyNotifications);
            if (!_l(e)) {
                this.logService.error(`TrayMainService: Icon not found at path: ${e}`);
                const n = this.getIconPath(!1);
                if (!_l(n)) {
                    this.logService.error(`TrayMainService: Fallback icon also not found: ${n}`);
                    return;
                }
            }
            const t = oOe.createFromPath(e);
            q && t.setTemplateImage(!0), this.tray.setImage(t);
        } catch (e) {
            this.logService.error("TrayMainService: Error updating icon", e);
        }
    }
    updateTooltip(e) {
        if (this.tray) try {
            this.tray.setToolTip(e);
        } catch (t) {
            this.logService.error("TrayMainService: Error updating tooltip", t);
        }
    }
    async updateSnapshot(e, t) {
        if (!this.windowsMainService.getWindows().some((n)=>n.id === e)) {
            this.logService.trace(`[Tray] Ignoring contribution from closed window ${e}`);
            return;
        }
        if (!this.acceptsContributionIdentity(t.authenticationIdentity)) {
            this.authenticationFence.isPending() ? this.deferredContributions.set(e, t) : this.logService.trace("[Tray] Ignoring contribution for a stale authentication identity");
            return;
        }
        this.deferredContributions.delete(e), this.contributionLedger.update(e, this.scrubClearedUnreadContribution(t, {
            ackWindowId: e
        })), this.applicationStorageMainService.store(aU, iOe(this.getContributionRecords(), t.mainProcessCloudRefreshEnabled), -1, 1), this.onContributionLedgerChanged();
    }
    getContributionRecords() {
        return this.contributionLedger.records();
    }
    flushDeferredContributions() {
        const e = new Set(this.windowsMainService.getWindows().map((t)=>t.id));
        for (const [t, n] of [
            ...this.deferredContributions
        ]){
            if (!e.has(t)) {
                this.deferredContributions.delete(t);
                continue;
            }
            if (!this.acceptsContributionIdentity(n.authenticationIdentity)) {
                this.authenticationFence.isPending() || this.deferredContributions.delete(t);
                continue;
            }
            this.deferredContributions.delete(t), this.contributionLedger.update(t, this.scrubClearedUnreadContribution(n, {
                ackWindowId: t
            }));
        }
    }
    acknowledgeClearedUnread(e, t) {
        const n = this.clearedUnreadFence.get(e);
        n && (n.pendingAckWindowIds.delete(t), n.pendingAckWindowIds.size === 0 && this.clearedUnreadFence.delete(e));
    }
    scrubClearedUnreadContribution(e, t) {
        if (this.clearedUnreadFence.size === 0) return e;
        let n = !1;
        const r = new Set, s = e.notificationStates.map((a)=>{
            const o = this.clearedUnreadFence.get(a.composerId);
            return !o || !a.hasNotification ? a : a.agentUpdatedAt > o.agentUpdatedAt || a.notificationRevision > o.notificationRevision ? (this.clearedUnreadFence.delete(a.composerId), a) : (r.add(a.composerId), n = !0, {
                ...a,
                hasNotification: !1
            });
        }), i = e.sections.map((a)=>({
                ...a,
                items: a.items.map((o)=>{
                    const l = this.clearedUnreadFence.get(o.composerId);
                    return !l || !o.hasNotification && o.statusIcon !== "unread" ? o : o.agentUpdatedAt > l.agentUpdatedAt ? (this.clearedUnreadFence.delete(o.composerId), o) : (r.add(o.composerId), n = !0, {
                        ...o,
                        hasNotification: !1,
                        statusIcon: o.statusIcon === "unread" ? "seen" : o.statusIcon
                    });
                })
            }));
        if (t?.ackWindowId !== void 0) for (const a of [
            ...this.clearedUnreadFence.keys()
        ])r.has(a) || this.acknowledgeClearedUnread(a, t.ackWindowId);
        return n ? {
            ...e,
            sections: i,
            notificationStates: s
        } : e;
    }
    applyMergedSnapshot() {
        const e = this.hasAnyNotifications, t = this.getContributionRecords().map((o)=>({
                ...o,
                contribution: this.scrubClearedUnreadContribution(o.contribution)
            })), n = Jit({
            records: t,
            cloudComposers: this.mainCloudState.composers,
            missingCloudComposerIds: this.mainCloudState.missingComposerIds,
            admittedCloudComposerIds: this.mainCloudState.admittedComposerIds,
            cloudReadAtByComposerId: this.mainCloudState.readAtByComposerId
        }), r = n.view.notificationStates.map((o)=>o.hasNotification && this.clearedUnreadFence.has(o.composerId) ? {
                ...o,
                hasNotification: !1
            } : o), s = n.view.sections.map((o)=>({
                ...o,
                items: o.items.map((l)=>!this.clearedUnreadFence.has(l.composerId) || !l.hasNotification && l.statusIcon !== "unread" ? l : {
                        ...l,
                        hasNotification: !1,
                        statusIcon: l.statusIcon === "unread" ? "seen" : l.statusIcon
                    })
            }));
        this.currentView = {
            ...n.view,
            sections: s,
            notificationStates: r
        }, this.hasAnyNotifications = Mke(this.currentView) > 0, this.composerToWindow = new Map(n.ownerWindowByComposerId), this.composerToProfile = new Map(n.profileByComposerId), this.composerPreferGlass = new Map(n.preferGlassByComposerId);
        const i = t.filter((o)=>o.ownerWindowId !== void 0), a = U9(i.length > 0 ? i : t);
        this.menuPreferGlass = a ? Oa(a.contribution.producerId) : !1, this.menuPresentationProfile = a ? {
            id: a.contribution.profileId,
            name: a.contribution.profileName
        } : void 0, this.dockBadgeEnabled = a?.contribution.systemNotificationsEnabled ?? !0, this.applyNotificationPresentation({
            skipIcon: e === this.hasAnyNotifications
        }), this.updateContextMenu(), this.scheduleSnapshotRefresh();
    }
    getCloudAuthorityKey() {
        const e = this.applicationStorageMainService.get(Lo, -1);
        return `${y1(e) ?? ""}\0${aot(this.getContributionRecords())}`;
    }
    reconcileCloudAuthority() {
        const e = this.getCloudAuthorityKey();
        if (e === this.cloudAuthorityKey) return !1;
        const t = this.cloudAuthorityKey !== void 0;
        return this.cloudAuthorityKey = e, t && (_E(this.getContributionRecords()).length === 0 ? this.mainCloudState = {
            composers: [],
            missingComposerIds: this.mainCloudState.missingComposerIds,
            admittedComposerIds: new Set,
            readAtByComposerId: this.mainCloudState.readAtByComposerId
        } : this.clearMainCloudState()), !0;
    }
    onContributionLedgerChanged() {
        const e = this.reconcileCloudAuthority();
        this.applyMergedSnapshot(), e && this.tray && this.isAuthenticated() && this.requestSnapshotRefresh("poll");
    }
    applyNotificationPresentation(e) {
        const t = this.hasLiveSession(), n = t ? Mke(this.currentView) : 0;
        e?.skipIcon !== !0 && this.updateIcon();
        const r = this.productService.nameShort || "Cursor";
        this.updateTooltip(n > 0 ? `${r} (${n})` : r), q && this.tray && this.tray.setTitle(n > 0 ? ` ${n}` : ""), this.updateDockBadge(n), this.dockMenu?.setUnreadAgents(t ? bke(this.currentView) : [], t ? x9(this.currentView) : 0);
    }
    updateDockBadge(e) {
        this.systemNotificationService.setBadgeCount(this.dockBadgeEnabled ? e : 0).catch((t)=>this.logService.error("TrayMainService: Error updating dock badge", t));
    }
    onWindowClosed(e) {
        for (const t of [
            ...this.clearedUnreadFence.keys()
        ])this.acknowledgeClearedUnread(t, e);
        this.contributionLedger.removeWindow(e) && (this.getVisibleSnapshotWindows().length === 0 && (this.refreshWhenWindowReady = !0), this.onContributionLedgerChanged());
    }
    async setEnabled(e) {
        e ? this.tray || this.initialize() : (this.destroyTray(), this.setMenuBarVisibility("unknown"));
    }
    destroyTray() {
        this.menuBarVisibilityCheck.clear(), this.menuRebuildScheduler.cancel(), this.refreshTimer.clear(), this.scheduledRefreshIntervalMs = void 0, this.renderedMenuState = void 0, this.tray && (this.tray.destroy(), this.tray = void 0);
    }
    dispose() {
        this.destroyTray(), super.dispose();
    }
}, HE = B([
    w(0, ht),
    w(1, Z),
    w(2, ct),
    w(3, qe),
    w(4, et),
    w(5, Cn),
    w(6, Gs),
    w(7, fr),
    w(8, If),
    w(9, wu)
], HE);

}
