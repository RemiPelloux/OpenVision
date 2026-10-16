require.d(exports, {
    FD: ()=>l,
    dn: ()=>h,
    resolveSandboxHelperPath: ()=>u
});
var i = require(79896), o = require(16928), r = require(25925), n = require(91398), a = require(30306);
function l() {
    let e = n.env.shell ?? "";
    try {
        const t = n.workspace.getConfiguration("terminal.integrated"), s = "win32" === process.platform ? "windows" : "darwin" === process.platform ? "osx" : "linux", i = t.get(`defaultProfile.${s}`);
        if (i) {
            const o = t.get(`profiles.${s}`), r = o?.[i]?.path;
            r && (e = r);
        }
    } catch (e) {
        a.gW.warn(`Failed to read terminal config: ${e}`);
    }
    return e;
}
function u(e) {
    if ("linux" !== process.platform && "win32" !== process.platform && "darwin" !== process.platform) return;
    const t = "win32" === process.platform ? "cursorsandbox.exe" : "cursorsandbox", s = process.resourcesPath, r = o.dirname(process.execPath), n = [
        o.join(e, "../../resources/helpers", t)
    ];
    s && (n.push(o.join(s, "app", "resources", "helpers", t)), n.push(o.join(s, "resources", "helpers", t))), n.push(o.join(r, "resources", "helpers", t)), n.push(o.join(r, "resources", "app", "resources", "helpers", t)), "1" === process.env.VSCODE_DEV && n.push(o.join(e, "../../node_modules/@anysphere/sandbox-helper/bin", t));
    for (const e of n)try {
        if (i.existsSync(e)) return e;
    } catch  {}
}
function h(e) {
    return void 0 !== e.helperPath && !!(0, r.yo)() && ((0, r.St)({
        sandboxBinaryPath: e.helperPath,
        workspaceReadEnabled: e.workspaceReadEnabled
    }), !0);
}
