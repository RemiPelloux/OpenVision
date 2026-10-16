"use strict";
require.d(exports, {
    J: ()=>a
});
var n = require("./module-48161.js");
const s = [
    [
        "safe.bareRepository",
        "explicit"
    ]
], o = [
    [
        "core.fsmonitor",
        "false"
    ],
    [
        "core.hooksPath",
        n.devNull
    ],
    [
        "core.attributesFile",
        n.devNull
    ]
];
function i(e, t) {
    const r = function(e) {
        const t = e.GIT_CONFIG_COUNT;
        if (void 0 === t || "" === t) return 0;
        const r = Number.parseInt(String(t), 10);
        return !Number.isFinite(r) || r < 0 ? 0 : r;
    }(e), n = {
        ...e
    }, s = new Set;
    for(let e = 0; e < r; e++){
        const r = n[`GIT_CONFIG_KEY_${e}`];
        for (const [o, i] of t)r === o && (n[`GIT_CONFIG_VALUE_${e}`] = i, s.add(o));
    }
    let o = r;
    for (const [e, r] of t)s.has(e) || (n[`GIT_CONFIG_KEY_${o}`] = e, n[`GIT_CONFIG_VALUE_${o}`] = r, o++);
    return o !== r && (n.GIT_CONFIG_COUNT = String(o)), n;
}
function a(e) {
    const t = {
        ...process.env,
        ...e.spawnerEnv,
        LC_ALL: "en_US.UTF-8",
        LANG: "en_US.UTF-8",
        GIT_PAGER: "cat",
        ...e.optionsEnv
    };
    return void 0 !== e.command ? t.VSCODE_GIT_COMMAND = e.command : delete t.VSCODE_GIT_COMMAND, i(t, function(e) {
        const t = "allow-hooks" === e ? o.filter(([e])=>"core.hooksPath" !== e) : o;
        return [
            ...s,
            ...t
        ];
    }(e.repoConfigExecution ?? "block"));
}
