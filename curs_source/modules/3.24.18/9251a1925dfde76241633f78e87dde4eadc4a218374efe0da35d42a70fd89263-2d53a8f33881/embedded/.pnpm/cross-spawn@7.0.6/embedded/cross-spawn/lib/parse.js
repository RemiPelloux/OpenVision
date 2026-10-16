import { require_escape } from "./util/escape.js";
import { require_readShebang } from "./util/readShebang.js";
import { require_resolveCommand } from "./util/resolveCommand.js";
var __wakaru_require_parse5_cache;
export function require_parse5() {
if (__wakaru_require_parse5_cache) return __wakaru_require_parse5_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_parse5_cache = module2;
"use strict";
var path64 = require("path");
var resolveCommand = require_resolveCommand();
var escape3 = require_escape();
var readShebang = require_readShebang();
var isWin = process.platform === "win32";
var isExecutableRegExp = /\.(?:com|exe)$/i;
var isCmdShimRegExp = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
function detectShebang(parsed) {
    parsed.file = resolveCommand(parsed);
    const shebang = parsed.file && readShebang(parsed.file);
    if (shebang) {
        parsed.args.unshift(parsed.file);
        parsed.command = shebang;
        return resolveCommand(parsed);
    }
    return parsed.file;
}
function parseNonShell(parsed) {
    if (!isWin) {
        return parsed;
    }
    const commandFile = detectShebang(parsed);
    const needsShell = !isExecutableRegExp.test(commandFile);
    if (parsed.options.forceShell || needsShell) {
        const needsDoubleEscapeMetaChars = isCmdShimRegExp.test(commandFile);
        parsed.command = path64.normalize(parsed.command);
        parsed.command = escape3.command(parsed.command);
        parsed.args = parsed.args.map((arg)=>escape3.argument(arg, needsDoubleEscapeMetaChars));
        const shellCommand = [
            parsed.command
        ].concat(parsed.args).join(" ");
        parsed.args = [
            "/d",
            "/s",
            "/c",
            `"${shellCommand}"`
        ];
        parsed.command = process.env.comspec || "cmd.exe";
        parsed.options.windowsVerbatimArguments = true;
    }
    return parsed;
}
function parse11(command, args, options2) {
    if (args && !Array.isArray(args)) {
        options2 = args;
        args = null;
    }
    args = args ? args.slice(0) : [];
    options2 = Object.assign({}, options2);
    const parsed = {
        command,
        args,
        options: options2,
        file: void 0,
        original: {
            command,
            args
        }
    };
    return options2.shell ? parsed : parseNonShell(parsed);
}
module2.exports = parse11;

return module2.exports;
}
