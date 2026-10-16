import { expand } from "../../../../../../../dist_exports2.js";
import { init_esm7 } from "../../../../../brace-expansion@5.0.9/node_modules/brace-expansion/dist/esm/index.js";
import { assertValidPattern, init_assert_valid_pattern } from "./assert-valid-pattern.js";
import { AST, init_ast } from "./ast.js";
import { escape2, init_escape } from "./escape.js";
import { init_unescape, unescape2 } from "./unescape.js";
var minimatch, starDotExtRE, starDotExtTest, starDotExtTestDot, starDotExtTestNocase, starDotExtTestNocaseDot, starDotStarRE, starDotStarTest, starDotStarTestDot, dotStarRE, dotStarTest, starRE, starTest, starTestDot, qmarksRE, qmarksTestNocase, qmarksTestNocaseDot, qmarksTestDot, qmarksTest, qmarksTestNoExt, qmarksTestNoExtDot, defaultPlatform, path17, sep4, GLOBSTAR, qmark2, star2, twoStarDot, twoStarNoDot, filter2, ext, defaults, braceExpand, makeRe, match, globMagic, regExpEscape2, Minimatch;
export { GLOBSTAR, Minimatch, braceExpand, defaultPlatform, defaults, dotStarRE, dotStarTest, ext, filter2, globMagic, makeRe, match, minimatch, path17, qmark2, qmarksRE, qmarksTest, qmarksTestDot, qmarksTestNoExt, qmarksTestNoExtDot, qmarksTestNocase, qmarksTestNocaseDot, regExpEscape2, sep4, star2, starDotExtRE, starDotExtTest, starDotExtTestDot, starDotExtTestNocase, starDotExtTestNocaseDot, starDotStarRE, starDotStarTest, starDotStarTestDot, starRE, starTest, starTestDot, twoStarDot, twoStarNoDot };
var __wakaru_init_esm8_initialized = false;
export function init_esm8() {
if (__wakaru_init_esm8_initialized) return;
__wakaru_init_esm8_initialized = true;
init_esm7();
init_assert_valid_pattern();
init_ast();
init_escape();
init_unescape();
init_ast();
init_escape();
init_unescape();
minimatch = (p2, pattern, options2 = {})=>{
    assertValidPattern(pattern);
    if (!options2.nocomment && pattern.charAt(0) === "#") {
        return false;
    }
    return new Minimatch(pattern, options2).match(p2);
};
starDotExtRE = /^\*+([^+@!?*[(]*)$/;
starDotExtTest = (ext2)=>(f2)=>!f2.startsWith(".") && f2.endsWith(ext2);
starDotExtTestDot = (ext2)=>(f2)=>f2.endsWith(ext2);
starDotExtTestNocase = (ext2)=>{
    ext2 = ext2.toLowerCase();
    return (f2)=>!f2.startsWith(".") && f2.toLowerCase().endsWith(ext2);
};
starDotExtTestNocaseDot = (ext2)=>{
    ext2 = ext2.toLowerCase();
    return (f2)=>f2.toLowerCase().endsWith(ext2);
};
starDotStarRE = /^\*+\.\*+$/;
starDotStarTest = (f2)=>!f2.startsWith(".") && f2.includes(".");
starDotStarTestDot = (f2)=>f2 !== "." && f2 !== ".." && f2.includes(".");
dotStarRE = /^\.\*+$/;
dotStarTest = (f2)=>f2 !== "." && f2 !== ".." && f2.startsWith(".");
starRE = /^\*+$/;
starTest = (f2)=>f2.length !== 0 && !f2.startsWith(".");
starTestDot = (f2)=>f2.length !== 0 && f2 !== "." && f2 !== "..";
qmarksRE = /^\?+([^+@!?*[(]*)?$/;
qmarksTestNocase = ([$0, ext2 = ""])=>{
    const noext = qmarksTestNoExt([
        $0
    ]);
    if (!ext2) return noext;
    ext2 = ext2.toLowerCase();
    return (f2)=>noext(f2) && f2.toLowerCase().endsWith(ext2);
};
qmarksTestNocaseDot = ([$0, ext2 = ""])=>{
    const noext = qmarksTestNoExtDot([
        $0
    ]);
    if (!ext2) return noext;
    ext2 = ext2.toLowerCase();
    return (f2)=>noext(f2) && f2.toLowerCase().endsWith(ext2);
};
qmarksTestDot = ([$0, ext2 = ""])=>{
    const noext = qmarksTestNoExtDot([
        $0
    ]);
    return !ext2 ? noext : (f2)=>noext(f2) && f2.endsWith(ext2);
};
qmarksTest = ([$0, ext2 = ""])=>{
    const noext = qmarksTestNoExt([
        $0
    ]);
    return !ext2 ? noext : (f2)=>noext(f2) && f2.endsWith(ext2);
};
qmarksTestNoExt = ([$0])=>{
    const len = $0.length;
    return (f2)=>f2.length === len && !f2.startsWith(".");
};
qmarksTestNoExtDot = ([$0])=>{
    const len = $0.length;
    return (f2)=>f2.length === len && f2 !== "." && f2 !== "..";
};
defaultPlatform = typeof process === "object" && process ? typeof process.env === "object" && process.env && process.env.__MINIMATCH_TESTING_PLATFORM__ || process.platform : "posix";
path17 = {
    win32: {
        sep: "\\"
    },
    posix: {
        sep: "/"
    }
};
sep4 = defaultPlatform === "win32" ? path17.win32.sep : path17.posix.sep;
minimatch.sep = sep4;
GLOBSTAR = Symbol("globstar **");
minimatch.GLOBSTAR = GLOBSTAR;
qmark2 = "[^/]";
star2 = qmark2 + "*?";
twoStarDot = "(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?";
twoStarNoDot = "(?:(?!(?:\\/|^)\\.).)*?";
filter2 = (pattern, options2 = {})=>(p2)=>minimatch(p2, pattern, options2);
minimatch.filter = filter2;
ext = (a, b2 = {})=>Object.assign({}, a, b2);
defaults = (def)=>{
    if (!def || typeof def !== "object" || !Object.keys(def).length) {
        return minimatch;
    }
    const orig = minimatch;
    const m2 = (p2, pattern, options2 = {})=>orig(p2, pattern, ext(def, options2));
    return Object.assign(m2, {
        Minimatch: class Minimatch extends orig.Minimatch {
            constructor(pattern, options2 = {}){
                super(pattern, ext(def, options2));
            }
            static defaults(options2) {
                return orig.defaults(ext(def, options2)).Minimatch;
            }
        },
        AST: class AST extends orig.AST {
            constructor(type2, parent, options2 = {}){
                super(type2, parent, ext(def, options2));
            }
            static fromGlob(pattern, options2 = {}) {
                return orig.AST.fromGlob(pattern, ext(def, options2));
            }
        },
        unescape: (s3, options2 = {})=>orig.unescape(s3, ext(def, options2)),
        escape: (s3, options2 = {})=>orig.escape(s3, ext(def, options2)),
        filter: (pattern, options2 = {})=>orig.filter(pattern, ext(def, options2)),
        defaults: (options2)=>orig.defaults(ext(def, options2)),
        makeRe: (pattern, options2 = {})=>orig.makeRe(pattern, ext(def, options2)),
        braceExpand: (pattern, options2 = {})=>orig.braceExpand(pattern, ext(def, options2)),
        match: (list2, pattern, options2 = {})=>orig.match(list2, pattern, ext(def, options2)),
        sep: orig.sep,
        GLOBSTAR
    });
};
minimatch.defaults = defaults;
braceExpand = (pattern, options2 = {})=>{
    assertValidPattern(pattern);
    if (options2.nobrace || !/\{(?:(?!\{).)*\}/.test(pattern)) {
        return [
            pattern
        ];
    }
    return expand(pattern, {
        max: options2.braceExpandMax
    });
};
minimatch.braceExpand = braceExpand;
makeRe = (pattern, options2 = {})=>new Minimatch(pattern, options2).makeRe();
minimatch.makeRe = makeRe;
match = (list2, pattern, options2 = {})=>{
    const mm = new Minimatch(pattern, options2);
    list2 = list2.filter((f2)=>mm.match(f2));
    if (mm.options.nonull && !list2.length) {
        list2.push(pattern);
    }
    return list2;
};
minimatch.match = match;
globMagic = /[?*]|[+@!]\(.*?\)|\[|\]/;
regExpEscape2 = (s3)=>s3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
Minimatch = class {
    options;
    set;
    pattern;
    windowsPathsNoEscape;
    nonegate;
    negate;
    comment;
    empty;
    preserveMultipleSlashes;
    partial;
    globSet;
    globParts;
    nocase;
    isWindows;
    platform;
    windowsNoMagicRoot;
    maxGlobstarRecursion;
    regexp;
    constructor(pattern, options2 = {}){
        assertValidPattern(pattern);
        options2 = options2 || {};
        this.options = options2;
        this.maxGlobstarRecursion = options2.maxGlobstarRecursion ?? 200;
        this.pattern = pattern;
        this.platform = options2.platform || defaultPlatform;
        this.isWindows = this.platform === "win32";
        const awe = "allowWindowsEscape";
        this.windowsPathsNoEscape = !!options2.windowsPathsNoEscape || options2[awe] === false;
        if (this.windowsPathsNoEscape) {
            this.pattern = this.pattern.replace(/\\/g, "/");
        }
        this.preserveMultipleSlashes = !!options2.preserveMultipleSlashes;
        this.regexp = null;
        this.negate = false;
        this.nonegate = !!options2.nonegate;
        this.comment = false;
        this.empty = false;
        this.partial = !!options2.partial;
        this.nocase = !!this.options.nocase;
        this.windowsNoMagicRoot = options2.windowsNoMagicRoot !== void 0 ? options2.windowsNoMagicRoot : !!(this.isWindows && this.nocase);
        this.globSet = [];
        this.globParts = [];
        this.set = [];
        this.make();
    }
    hasMagic() {
        if (this.options.magicalBraces && this.set.length > 1) {
            return true;
        }
        for (const pattern of this.set){
            for (const part of pattern){
                if (typeof part !== "string") return true;
            }
        }
        return false;
    }
    debug(..._2) {}
    make() {
        const pattern = this.pattern;
        const options2 = this.options;
        if (!options2.nocomment && pattern.charAt(0) === "#") {
            this.comment = true;
            return;
        }
        if (!pattern) {
            this.empty = true;
            return;
        }
        this.parseNegate();
        this.globSet = [
            ...new Set(this.braceExpand())
        ];
        if (options2.debug) {
            this.debug = (...args)=>console.error(...args);
        }
        this.debug(this.pattern, this.globSet);
        const rawGlobParts = this.globSet.map((s3)=>this.slashSplit(s3));
        this.globParts = this.preprocess(rawGlobParts);
        this.debug(this.pattern, this.globParts);
        let set2 = this.globParts.map((s3, _2, __)=>{
            if (this.isWindows && this.windowsNoMagicRoot) {
                const isUNC = s3[0] === "" && s3[1] === "" && (s3[2] === "?" || !globMagic.test(s3[2])) && !globMagic.test(s3[3]);
                const isDrive = /^[a-z]:/i.test(s3[0]);
                if (isUNC) {
                    return [
                        ...s3.slice(0, 4),
                        ...s3.slice(4).map((ss2)=>this.parse(ss2))
                    ];
                } else if (isDrive) {
                    return [
                        s3[0],
                        ...s3.slice(1).map((ss2)=>this.parse(ss2))
                    ];
                }
            }
            return s3.map((ss2)=>this.parse(ss2));
        });
        this.debug(this.pattern, set2);
        this.set = set2.filter((s3)=>s3.indexOf(false) === -1);
        if (this.isWindows) {
            for(let i = 0; i < this.set.length; i++){
                const p2 = this.set[i];
                if (p2[0] === "" && p2[1] === "" && this.globParts[i][2] === "?" && typeof p2[3] === "string" && /^[a-z]:$/i.test(p2[3])) {
                    p2[2] = "?";
                }
            }
        }
        this.debug(this.pattern, this.set);
    }
    preprocess(globParts) {
        if (this.options.noglobstar) {
            for (const partset of globParts){
                for(let j2 = 0; j2 < partset.length; j2++){
                    if (partset[j2] === "**") {
                        partset[j2] = "*";
                    }
                }
            }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            globParts = this.firstPhasePreProcess(globParts);
            globParts = this.secondPhasePreProcess(globParts);
        } else if (optimizationLevel >= 1) {
            globParts = this.levelOneOptimize(globParts);
        } else {
            globParts = this.adjascentGlobstarOptimize(globParts);
        }
        return globParts;
    }
    adjascentGlobstarOptimize(globParts) {
        return globParts.map((parts)=>{
            let gs2 = -1;
            while(-1 !== (gs2 = parts.indexOf("**", gs2 + 1))){
                let i = gs2;
                while(parts[i + 1] === "**"){
                    i++;
                }
                if (i !== gs2) {
                    parts.splice(gs2, i - gs2);
                }
            }
            return parts;
        });
    }
    levelOneOptimize(globParts) {
        return globParts.map((parts)=>{
            parts = parts.reduce((set2, part)=>{
                const prev = set2[set2.length - 1];
                if (part === "**" && prev === "**") {
                    return set2;
                }
                if (part === "..") {
                    if (prev && prev !== ".." && prev !== "." && prev !== "**") {
                        set2.pop();
                        return set2;
                    }
                }
                set2.push(part);
                return set2;
            }, []);
            return parts.length === 0 ? [
                ""
            ] : parts;
        });
    }
    levelTwoFileOptimize(parts) {
        if (!Array.isArray(parts)) {
            parts = this.slashSplit(parts);
        }
        let didSomething = false;
        do {
            didSomething = false;
            if (!this.preserveMultipleSlashes) {
                for(let i = 1; i < parts.length - 1; i++){
                    const p2 = parts[i];
                    if (i === 1 && p2 === "" && parts[0] === "") continue;
                    if (p2 === "." || p2 === "") {
                        didSomething = true;
                        parts.splice(i, 1);
                        i--;
                    }
                }
                if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
                    didSomething = true;
                    parts.pop();
                }
            }
            let dd = 0;
            while(-1 !== (dd = parts.indexOf("..", dd + 1))){
                const p2 = parts[dd - 1];
                if (p2 && p2 !== "." && p2 !== ".." && p2 !== "**" && !(this.isWindows && /^[a-z]:$/i.test(p2))) {
                    didSomething = true;
                    parts.splice(dd - 1, 2);
                    dd -= 2;
                }
            }
        }while (didSomething)
        return parts.length === 0 ? [
            ""
        ] : parts;
    }
    firstPhasePreProcess(globParts) {
        let didSomething = false;
        do {
            didSomething = false;
            for (let parts of globParts){
                let gs2 = -1;
                while(-1 !== (gs2 = parts.indexOf("**", gs2 + 1))){
                    let gss = gs2;
                    while(parts[gss + 1] === "**"){
                        gss++;
                    }
                    if (gss > gs2) {
                        parts.splice(gs2 + 1, gss - gs2);
                    }
                    let next = parts[gs2 + 1];
                    const p2 = parts[gs2 + 2];
                    const p22 = parts[gs2 + 3];
                    if (next !== "..") continue;
                    if (!p2 || p2 === "." || p2 === ".." || !p22 || p22 === "." || p22 === "..") {
                        continue;
                    }
                    didSomething = true;
                    parts.splice(gs2, 1);
                    const other = parts.slice(0);
                    other[gs2] = "**";
                    globParts.push(other);
                    gs2--;
                }
                if (!this.preserveMultipleSlashes) {
                    for(let i = 1; i < parts.length - 1; i++){
                        const p2 = parts[i];
                        if (i === 1 && p2 === "" && parts[0] === "") continue;
                        if (p2 === "." || p2 === "") {
                            didSomething = true;
                            parts.splice(i, 1);
                            i--;
                        }
                    }
                    if (parts[0] === "." && parts.length === 2 && (parts[1] === "." || parts[1] === "")) {
                        didSomething = true;
                        parts.pop();
                    }
                }
                let dd = 0;
                while(-1 !== (dd = parts.indexOf("..", dd + 1))){
                    const p2 = parts[dd - 1];
                    if (p2 && p2 !== "." && p2 !== ".." && p2 !== "**") {
                        didSomething = true;
                        const needDot = dd === 1 && parts[dd + 1] === "**";
                        const splin = needDot ? [
                            "."
                        ] : [];
                        parts.splice(dd - 1, 2, ...splin);
                        if (parts.length === 0) parts.push("");
                        dd -= 2;
                    }
                }
            }
        }while (didSomething)
        return globParts;
    }
    secondPhasePreProcess(globParts) {
        for(let i = 0; i < globParts.length - 1; i++){
            for(let j2 = i + 1; j2 < globParts.length; j2++){
                const matched = this.partsMatch(globParts[i], globParts[j2], !this.preserveMultipleSlashes);
                if (matched) {
                    globParts[i] = [];
                    globParts[j2] = matched;
                    break;
                }
            }
        }
        return globParts.filter((gs2)=>gs2.length);
    }
    partsMatch(a, b2, emptyGSMatch = false) {
        let ai2 = 0;
        let bi2 = 0;
        let result = [];
        let which = "";
        while(ai2 < a.length && bi2 < b2.length){
            if (a[ai2] === b2[bi2]) {
                result.push(which === "b" ? b2[bi2] : a[ai2]);
                ai2++;
                bi2++;
            } else if (emptyGSMatch && a[ai2] === "**" && b2[bi2] === a[ai2 + 1]) {
                result.push(a[ai2]);
                ai2++;
            } else if (emptyGSMatch && b2[bi2] === "**" && a[ai2] === b2[bi2 + 1]) {
                result.push(b2[bi2]);
                bi2++;
            } else if (a[ai2] === "*" && b2[bi2] && (this.options.dot || !b2[bi2].startsWith(".")) && b2[bi2] !== "**") {
                if (which === "b") return false;
                which = "a";
                result.push(a[ai2]);
                ai2++;
                bi2++;
            } else if (b2[bi2] === "*" && a[ai2] && (this.options.dot || !a[ai2].startsWith(".")) && a[ai2] !== "**") {
                if (which === "a") return false;
                which = "b";
                result.push(b2[bi2]);
                ai2++;
                bi2++;
            } else {
                return false;
            }
        }
        return a.length === b2.length && result;
    }
    parseNegate() {
        if (this.nonegate) return;
        const pattern = this.pattern;
        let negate2 = false;
        let negateOffset = 0;
        for(let i = 0; i < pattern.length && pattern.charAt(i) === "!"; i++){
            negate2 = !negate2;
            negateOffset++;
        }
        if (negateOffset) this.pattern = pattern.slice(negateOffset);
        this.negate = negate2;
    }
    matchOne(file, pattern, partial2 = false) {
        let fileStartIndex = 0;
        let patternStartIndex = 0;
        if (this.isWindows) {
            const fileDrive = typeof file[0] === "string" && /^[a-z]:$/i.test(file[0]);
            const fileUNC = !fileDrive && file[0] === "" && file[1] === "" && file[2] === "?" && /^[a-z]:$/i.test(file[3]);
            const patternDrive = typeof pattern[0] === "string" && /^[a-z]:$/i.test(pattern[0]);
            const patternUNC = !patternDrive && pattern[0] === "" && pattern[1] === "" && pattern[2] === "?" && typeof pattern[3] === "string" && /^[a-z]:$/i.test(pattern[3]);
            const fdi = fileUNC ? 3 : fileDrive ? 0 : void 0;
            const pdi = patternUNC ? 3 : patternDrive ? 0 : void 0;
            if (typeof fdi === "number" && typeof pdi === "number") {
                const [fd, pd] = [
                    file[fdi],
                    pattern[pdi]
                ];
                if (fd.toLowerCase() === pd.toLowerCase()) {
                    pattern[pdi] = fd;
                    patternStartIndex = pdi;
                    fileStartIndex = fdi;
                }
            }
        }
        const { optimizationLevel = 1 } = this.options;
        if (optimizationLevel >= 2) {
            file = this.levelTwoFileOptimize(file);
        }
        if (pattern.includes(GLOBSTAR)) {
            return this.#matchGlobstar(file, pattern, partial2, fileStartIndex, patternStartIndex);
        }
        return this.#matchOne(file, pattern, partial2, fileStartIndex, patternStartIndex);
    }
    #matchGlobstar(file, pattern, partial2, fileIndex, patternIndex) {
        const firstgs = pattern.indexOf(GLOBSTAR, patternIndex);
        const lastgs = pattern.lastIndexOf(GLOBSTAR);
        const [head, body, tail] = partial2 ? [
            pattern.slice(patternIndex, firstgs),
            pattern.slice(firstgs + 1),
            []
        ] : [
            pattern.slice(patternIndex, firstgs),
            pattern.slice(firstgs + 1, lastgs),
            pattern.slice(lastgs + 1)
        ];
        if (head.length) {
            const fileHead = file.slice(fileIndex, fileIndex + head.length);
            if (!this.#matchOne(fileHead, head, partial2, 0, 0)) {
                return false;
            }
            fileIndex += head.length;
            patternIndex += head.length;
        }
        let fileTailMatch = 0;
        if (tail.length) {
            if (tail.length + fileIndex > file.length) return false;
            let tailStart = file.length - tail.length;
            if (this.#matchOne(file, tail, partial2, tailStart, 0)) {
                fileTailMatch = tail.length;
            } else {
                if (file[file.length - 1] !== "" || fileIndex + tail.length === file.length) {
                    return false;
                }
                tailStart--;
                if (!this.#matchOne(file, tail, partial2, tailStart, 0)) {
                    return false;
                }
                fileTailMatch = tail.length + 1;
            }
        }
        if (!body.length) {
            let sawSome = !!fileTailMatch;
            for(let i2 = fileIndex; i2 < file.length - fileTailMatch; i2++){
                const f2 = String(file[i2]);
                sawSome = true;
                if (f2 === "." || f2 === ".." || !this.options.dot && f2.startsWith(".")) {
                    return false;
                }
            }
            return partial2 || sawSome;
        }
        const bodySegments = [
            [
                [],
                0
            ]
        ];
        let currentBody = bodySegments[0];
        let nonGsParts = 0;
        const nonGsPartsSums = [
            0
        ];
        for (const b2 of body){
            if (b2 === GLOBSTAR) {
                nonGsPartsSums.push(nonGsParts);
                currentBody = [
                    [],
                    0
                ];
                bodySegments.push(currentBody);
            } else {
                currentBody[0].push(b2);
                nonGsParts++;
            }
        }
        let i = bodySegments.length - 1;
        const fileLength = file.length - fileTailMatch;
        for (const b2 of bodySegments){
            b2[1] = fileLength - (nonGsPartsSums[i--] + b2[0].length);
        }
        return !!this.#matchGlobStarBodySections(file, bodySegments, fileIndex, 0, partial2, 0, !!fileTailMatch);
    }
    #matchGlobStarBodySections(file, bodySegments, fileIndex, bodyIndex, partial2, globStarDepth, sawTail) {
        const bs2 = bodySegments[bodyIndex];
        if (!bs2) {
            for(let i = fileIndex; i < file.length; i++){
                sawTail = true;
                const f2 = file[i];
                if (f2 === "." || f2 === ".." || !this.options.dot && f2.startsWith(".")) {
                    return false;
                }
            }
            return sawTail;
        }
        const [body, after] = bs2;
        while(fileIndex <= after){
            const m2 = this.#matchOne(file.slice(0, fileIndex + body.length), body, partial2, fileIndex, 0);
            if (m2 && globStarDepth < this.maxGlobstarRecursion) {
                const sub = this.#matchGlobStarBodySections(file, bodySegments, fileIndex + body.length, bodyIndex + 1, partial2, globStarDepth + 1, sawTail);
                if (sub !== false) {
                    return sub;
                }
            }
            const f2 = file[fileIndex];
            if (f2 === "." || f2 === ".." || !this.options.dot && f2.startsWith(".")) {
                return false;
            }
            fileIndex++;
        }
        return partial2 || null;
    }
    #matchOne(file, pattern, partial2, fileIndex, patternIndex) {
        let fi2;
        let pi2;
        let pl;
        let fl;
        for(fi2 = fileIndex, pi2 = patternIndex, fl = file.length, pl = pattern.length; fi2 < fl && pi2 < pl; fi2++, pi2++){
            this.debug("matchOne loop");
            let p2 = pattern[pi2];
            let f2 = file[fi2];
            this.debug(pattern, p2, f2);
            if (p2 === false || p2 === GLOBSTAR) {
                return false;
            }
            let hit;
            if (typeof p2 === "string") {
                hit = f2 === p2;
                this.debug("string match", p2, f2, hit);
            } else {
                hit = p2.test(f2);
                this.debug("pattern match", p2, f2, hit);
            }
            if (!hit) return false;
        }
        if (fi2 === fl && pi2 === pl) {
            return true;
        } else if (fi2 === fl) {
            return partial2;
        } else if (pi2 === pl) {
            return fi2 === fl - 1 && file[fi2] === "";
        } else {
            throw new Error("wtf?");
        }
    }
    braceExpand() {
        return braceExpand(this.pattern, this.options);
    }
    parse(pattern) {
        assertValidPattern(pattern);
        const options2 = this.options;
        if (pattern === "**") return GLOBSTAR;
        if (pattern === "") return "";
        let m2;
        let fastTest = null;
        if (m2 = pattern.match(starRE)) {
            fastTest = options2.dot ? starTestDot : starTest;
        } else if (m2 = pattern.match(starDotExtRE)) {
            fastTest = (options2.nocase ? options2.dot ? starDotExtTestNocaseDot : starDotExtTestNocase : options2.dot ? starDotExtTestDot : starDotExtTest)(m2[1]);
        } else if (m2 = pattern.match(qmarksRE)) {
            fastTest = (options2.nocase ? options2.dot ? qmarksTestNocaseDot : qmarksTestNocase : options2.dot ? qmarksTestDot : qmarksTest)(m2);
        } else if (m2 = pattern.match(starDotStarRE)) {
            fastTest = options2.dot ? starDotStarTestDot : starDotStarTest;
        } else if (m2 = pattern.match(dotStarRE)) {
            fastTest = dotStarTest;
        }
        const re3 = AST.fromGlob(pattern, this.options).toMMPattern();
        if (fastTest && typeof re3 === "object") {
            Reflect.defineProperty(re3, "test", {
                value: fastTest
            });
        }
        return re3;
    }
    makeRe() {
        if (this.regexp || this.regexp === false) return this.regexp;
        const set2 = this.set;
        if (!set2.length) {
            this.regexp = false;
            return this.regexp;
        }
        const options2 = this.options;
        const twoStar = options2.noglobstar ? star2 : options2.dot ? twoStarDot : twoStarNoDot;
        const flags = new Set(options2.nocase ? [
            "i"
        ] : []);
        let re3 = set2.map((pattern)=>{
            const pp = pattern.map((p2)=>{
                if (p2 instanceof RegExp) {
                    for (const f2 of p2.flags.split(""))flags.add(f2);
                }
                return typeof p2 === "string" ? regExpEscape2(p2) : p2 === GLOBSTAR ? GLOBSTAR : p2._src;
            });
            pp.forEach((p2, i)=>{
                const next = pp[i + 1];
                const prev = pp[i - 1];
                if (p2 !== GLOBSTAR || prev === GLOBSTAR) {
                    return;
                }
                if (prev === void 0) {
                    if (next !== void 0 && next !== GLOBSTAR) {
                        pp[i + 1] = "(?:\\/|" + twoStar + "\\/)?" + next;
                    } else {
                        pp[i] = twoStar;
                    }
                } else if (next === void 0) {
                    pp[i - 1] = prev + "(?:\\/|\\/" + twoStar + ")?";
                } else if (next !== GLOBSTAR) {
                    pp[i - 1] = prev + "(?:\\/|\\/" + twoStar + "\\/)" + next;
                    pp[i + 1] = GLOBSTAR;
                }
            });
            const filtered = pp.filter((p2)=>p2 !== GLOBSTAR);
            if (this.partial && filtered.length >= 1) {
                const prefixes = [];
                for(let i = 1; i <= filtered.length; i++){
                    prefixes.push(filtered.slice(0, i).join("/"));
                }
                return "(?:" + prefixes.join("|") + ")";
            }
            return filtered.join("/");
        }).join("|");
        const [open7, close] = set2.length > 1 ? [
            "(?:",
            ")"
        ] : [
            "",
            ""
        ];
        re3 = "^" + open7 + re3 + close + "$";
        if (this.partial) {
            re3 = "^(?:\\/|" + open7 + re3.slice(1, -1) + close + ")$";
        }
        if (this.negate) re3 = "^(?!" + re3 + ").+$";
        try {
            this.regexp = new RegExp(re3, [
                ...flags
            ].join(""));
        } catch  {
            this.regexp = false;
        }
        return this.regexp;
    }
    slashSplit(p2) {
        if (this.preserveMultipleSlashes) {
            return p2.split("/");
        } else if (this.isWindows && /^\/\/[^/]+/.test(p2)) {
            return [
                "",
                ...p2.split(/\/+/)
            ];
        } else {
            return p2.split(/\/+/);
        }
    }
    match(f2, partial2 = this.partial) {
        this.debug("match", f2, this.pattern);
        if (this.comment) {
            return false;
        }
        if (this.empty) {
            return f2 === "";
        }
        if (f2 === "/" && partial2) {
            return true;
        }
        const options2 = this.options;
        if (this.isWindows) {
            f2 = f2.split("\\").join("/");
        }
        const ff = this.slashSplit(f2);
        this.debug(this.pattern, "split", ff);
        const set2 = this.set;
        this.debug(this.pattern, "set", set2);
        let filename = ff[ff.length - 1];
        if (!filename) {
            for(let i = ff.length - 2; !filename && i >= 0; i--){
                filename = ff[i];
            }
        }
        for (const pattern of set2){
            let file = ff;
            if (options2.matchBase && pattern.length === 1) {
                file = [
                    filename
                ];
            }
            const hit = this.matchOne(file, pattern, partial2);
            if (hit) {
                if (options2.flipNegate) {
                    return true;
                }
                return !this.negate;
            }
        }
        if (options2.flipNegate) {
            return false;
        }
        return this.negate;
    }
    static defaults(def) {
        return minimatch.defaults(def).Minimatch;
    }
};
minimatch.AST = AST;
minimatch.Minimatch = Minimatch;
minimatch.escape = escape2;
minimatch.unescape = unescape2;

}
