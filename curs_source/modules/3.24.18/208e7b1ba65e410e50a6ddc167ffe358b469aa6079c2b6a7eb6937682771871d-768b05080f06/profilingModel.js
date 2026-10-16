import { h } from "./tslib.es6.js";
var GD, Ume, xme;
export { GD, Ume, xme };
var __wakaru_lze_initialized = false;
export function lze() {
if (__wakaru_lze_initialized) return;
__wakaru_lze_initialized = true;
"use strict";
h(), GD = (e, t)=>{
    const n = t[e];
    if (n.aggregateTime) return n.aggregateTime;
    let r = n.selfTime;
    for (const s of n.children)r += GD(s, t);
    return n.aggregateTime = r;
}, Ume = (e)=>{
    let t = 0;
    const n = new Map, r = (s)=>{
        const i = [
            s.functionName,
            s.url,
            s.scriptId,
            s.lineNumber,
            s.columnNumber
        ].join(":"), a = n.get(i);
        if (a) return a.id;
        const o = t++;
        return n.set(i, {
            id: o,
            callFrame: s,
            location: {
                lineNumber: s.lineNumber + 1,
                columnNumber: s.columnNumber + 1
            }
        }), o;
    };
    for (const s of e.nodes)s.locationId = r(s.callFrame), s.positionTicks = s.positionTicks?.map((i)=>({
            ...i,
            startLocationId: r({
                ...s.callFrame,
                lineNumber: i.line - 1,
                columnNumber: 0
            }),
            endLocationId: r({
                ...s.callFrame,
                lineNumber: i.line,
                columnNumber: 0
            })
        }));
    return [
        ...n.values()
    ].sort((s, i)=>s.id - i.id).map((s)=>({
            locations: [
                s.location
            ],
            callFrame: s.callFrame
        }));
}, xme = (e)=>{
    if (!e.timeDeltas || !e.samples) return {
        nodes: [],
        locations: [],
        samples: e.samples || [],
        timeDeltas: e.timeDeltas || [],
        duration: e.endTime - e.startTime
    };
    const { samples: t, timeDeltas: n } = e, s = Ume(e).map((u, m)=>{
        const f = u.locations[0];
        return {
            id: m,
            selfTime: 0,
            aggregateTime: 0,
            ticks: 0,
            callFrame: u.callFrame,
            src: f
        };
    }), i = new Map, a = (u)=>{
        let m = i.get(u);
        return m === void 0 && (m = i.size, i.set(u, m)), m;
    }, o = new Array(e.nodes.length);
    for(let u = 0; u < e.nodes.length; u++){
        const m = e.nodes[u], f = a(m.id);
        o[f] = {
            id: f,
            selfTime: 0,
            aggregateTime: 0,
            locationId: m.locationId,
            children: m.children?.map(a) || []
        };
        for (const v of m.positionTicks || [])v.startLocationId && (s[v.startLocationId].ticks += v.ticks);
    }
    for (const u of o)for (const m of u.children)o[m].parent = u.id;
    const l = e.endTime - e.startTime;
    let d = l - n[0];
    for(let u = 0; u < n.length - 1; u++){
        const m = n[u + 1];
        o[a(t[u])].selfTime += m, d -= m;
    }
    o.length && (o[a(t[n.length - 1])].selfTime += d, n.push(d));
    for(let u = 0; u < o.length; u++){
        const m = o[u], f = s[m.locationId];
        f.aggregateTime += GD(u, o), f.selfTime += m.selfTime;
    }
    return {
        nodes: o,
        locations: s,
        samples: t.map(a),
        timeDeltas: n,
        duration: l
    };
};

}
