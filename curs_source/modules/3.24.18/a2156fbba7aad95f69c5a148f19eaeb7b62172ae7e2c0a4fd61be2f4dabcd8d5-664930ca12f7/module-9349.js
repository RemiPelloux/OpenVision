require.d(exports, {
    configureRipgrepWithStartupDiagnostics: ()=>d
});
var t = require(79896), i = require(16928), n = require(37949), a = require(25925), o = require(91398);
const c = (0, n.h)("cursor-agent-host");
function d(s, r) {
    const e = o.cursor.rgPath;
    if (e) {
        const n = (0, t.existsSync)(e), d = (0, i.dirname)(e), p = (0, t.existsSync)(d);
        (0, a.J)(e);
        const g = {
            rgPath: e,
            rgPathExists: n,
            rgParentDirExists: p,
            platform: process.platform,
            arch: process.arch,
            nodeVersion: process.version,
            extensionPath: r.extensionPath,
            execPath: process.execPath,
            remoteName: o.env.remoteName,
            uiKind: o.env.uiKind === o.UIKind.Desktop ? "desktop" : "web"
        };
        if (n) try {
            const s = (0, t.statSync)(e);
            g.rgFileSize = s.size, g.rgFileMode = s.mode.toString(8), g.rgIsFile = s.isFile();
        } catch (s) {
            g.rgStatError = s instanceof Error ? s.message : String(s);
        }
        const x = 50;
        if (p) try {
            g.parentDirContents = (0, t.readdirSync)(d).slice(0, x);
        } catch (s) {
            g.parentDirListError = s instanceof Error ? s.message : String(s);
        }
        const h = (0, i.dirname)(d);
        try {
            g.grandparentDirExists = (0, t.existsSync)(h), g.grandparentDirExists && (g.grandparentDirContents = (0, t.readdirSync)(h).slice(0, x));
        } catch (s) {
            g.grandparentDirError = s instanceof Error ? s.message : String(s);
        }
        const m = "node_modules.asar.unpacked";
        if (e.includes(m)) {
            const s = e.split(m)[0];
            if (s) {
                try {
                    g.asarExists = (0, t.existsSync)(s.concat("node_modules.asar"));
                } catch  {
                    g.asarExists = "check_failed";
                }
                const r = s.concat(m);
                try {
                    if (g.asarUnpackedDirExists = (0, t.existsSync)(r), g.asarUnpackedDirExists) {
                        const s = (0, i.join)(r, "@vscode", "ripgrep");
                        g.ripgrepPkgDirExists = (0, t.existsSync)(s);
                    }
                } catch  {
                    g.asarUnpackedDirExists = "check_failed";
                }
            }
        }
        c.info(s, "rg_diagnostics.startup", g), n || c.warn(s, "rg_diagnostics.startup.missing_binary", g);
    } else c.error(s, "rg_diagnostics.startup.no_path", {
        platform: process.platform,
        arch: process.arch,
        nodeVersion: process.version,
        extensionPath: r.extensionPath,
        execPath: process.execPath,
        remoteName: o.env.remoteName,
        uiKind: o.env.uiKind === o.UIKind.Desktop ? "desktop" : "web"
    });
}
