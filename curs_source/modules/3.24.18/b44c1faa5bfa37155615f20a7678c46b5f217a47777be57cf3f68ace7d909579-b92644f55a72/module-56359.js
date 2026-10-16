"use strict";
require.d(exports, {
    Jp: ()=>a,
    Wr: ()=>c,
    ao: ()=>s,
    bi: ()=>l,
    m2: ()=>p,
    n_: ()=>d,
    s8: ()=>u,
    tq: ()=>f,
    wo: ()=>g
});
const n = "ask_question_auto_answer", s = "No response was received within the time limit", o = `${s}. Proceed with the recommended option(s) you offered for each question, or your best judgment based on the information already available.`;
function i(e = "timeout") {
    return {
        marker: n,
        kind: e
    };
}
const a = function(e = i()) {
    return `${e.marker}:${e.kind}|${o}`;
}();
function c(e) {
    const t = (e ?? "").trim().match(new RegExp(`^${n}:(timeout|other)\\|`));
    if (null !== t) return i(t[1]);
}
function l(e) {
    return void 0 !== c(e) || (e ?? "").trim().startsWith(s);
}
const u = "decision", d = "allow", p = "deny", m = "Allow this agent to run workers on ", h = "?";
function f(e) {
    return `${m}${e}${h}`;
}
function g(e) {
    const t = (e ?? "").trim();
    if (!t.startsWith(m) || !t.endsWith(h)) return;
    const r = t.slice(m.length, t.length - h.length).trim();
    return r.length > 0 ? r : void 0;
}
