import { require_isexe } from "../../../isexe@2.0.0/node_modules/isexe/index.js";
var __wakaru_require_which_cache;
export function require_which() {
if (__wakaru_require_which_cache) return __wakaru_require_which_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_which_cache = module2;
var isWindows5 = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
var path64 = require("path");
var COLON = isWindows5 ? ";" : ":";
var isexe = require_isexe();
var getNotFoundError = (cmd)=>Object.assign(new Error(`not found: ${cmd}`), {
        code: "ENOENT"
    });
var getPathInfo = (cmd, opt)=>{
    const colon = opt.colon || COLON;
    const pathEnv = cmd.match(/\//) || isWindows5 && cmd.match(/\\/) ? [
        ""
    ] : [
        ...isWindows5 ? [
            process.cwd()
        ] : [],
        ...(opt.path || process.env.PATH || "").split(colon)
    ];
    const pathExtExe = isWindows5 ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
    const pathExt = isWindows5 ? pathExtExe.split(colon) : [
        ""
    ];
    if (isWindows5) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "") pathExt.unshift("");
    }
    return {
        pathEnv,
        pathExt,
        pathExtExe
    };
};
var which = (cmd, opt, cb)=>{
    if (typeof opt === "function") {
        cb = opt;
        opt = {};
    }
    if (!opt) opt = {};
    const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
    const found = [];
    const step = (i)=>new Promise((resolve36, reject2)=>{
            if (i === pathEnv.length) return opt.all && found.length ? resolve36(found) : reject2(getNotFoundError(cmd));
            const ppRaw = pathEnv[i];
            const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
            const pCmd = path64.join(pathPart, cmd);
            const p2 = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
            resolve36(subStep(p2, i, 0));
        });
    const subStep = (p2, i, ii2)=>new Promise((resolve36, reject2)=>{
            if (ii2 === pathExt.length) return resolve36(step(i + 1));
            const ext2 = pathExt[ii2];
            isexe(p2 + ext2, {
                pathExt: pathExtExe
            }, (er2, is2)=>{
                if (!er2 && is2) {
                    if (opt.all) found.push(p2 + ext2);
                    else return resolve36(p2 + ext2);
                }
                return resolve36(subStep(p2, i, ii2 + 1));
            });
        });
    return cb ? step(0).then((res)=>cb(null, res), cb) : step(0);
};
var whichSync = (cmd, opt)=>{
    opt = opt || {};
    const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
    const found = [];
    for(let i = 0; i < pathEnv.length; i++){
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path64.join(pathPart, cmd);
        const p2 = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for(let j2 = 0; j2 < pathExt.length; j2++){
            const cur = p2 + pathExt[j2];
            try {
                const is2 = isexe.sync(cur, {
                    pathExt: pathExtExe
                });
                if (is2) {
                    if (opt.all) found.push(cur);
                    else return cur;
                }
            } catch (ex) {}
        }
    }
    if (opt.all && found.length) return found;
    if (opt.nothrow) return null;
    throw getNotFoundError(cmd);
};
module2.exports = which;
which.sync = whichSync;

return module2.exports;
}
