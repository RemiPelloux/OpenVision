import { init_brace_expressions, parseClass } from "./brace-expressions.js";
import { init_unescape, unescape2 } from "./unescape.js";
var _a2, types, isExtglobType, isExtglobAST, adoptionMap, adoptionWithSpaceMap, adoptionAnyMap, usurpMap, startNoTraversal, startNoDot, addPatternStart, justDots, reSpecials, regExpEscape, qmark, star, starNoEmpty, ID, AST;
export { AST, ID, _a2, addPatternStart, adoptionAnyMap, adoptionMap, adoptionWithSpaceMap, isExtglobAST, isExtglobType, justDots, qmark, reSpecials, regExpEscape, star, starNoEmpty, startNoDot, startNoTraversal, types, usurpMap };
var __wakaru_init_ast_initialized = false;
export function init_ast() {
if (__wakaru_init_ast_initialized) return;
__wakaru_init_ast_initialized = true;
init_brace_expressions();
init_unescape();
types = new Set([
    "!",
    "?",
    "+",
    "*",
    "@"
]);
isExtglobType = (c)=>types.has(c);
isExtglobAST = (c)=>isExtglobType(c.type);
adoptionMap = new Map([
    [
        "!",
        [
            "@"
        ]
    ],
    [
        "?",
        [
            "?",
            "@"
        ]
    ],
    [
        "@",
        [
            "@"
        ]
    ],
    [
        "*",
        [
            "*",
            "+",
            "?",
            "@"
        ]
    ],
    [
        "+",
        [
            "+",
            "@"
        ]
    ]
]);
adoptionWithSpaceMap = new Map([
    [
        "!",
        [
            "?"
        ]
    ],
    [
        "@",
        [
            "?"
        ]
    ],
    [
        "+",
        [
            "?",
            "*"
        ]
    ]
]);
adoptionAnyMap = new Map([
    [
        "!",
        [
            "?",
            "@"
        ]
    ],
    [
        "?",
        [
            "?",
            "@"
        ]
    ],
    [
        "@",
        [
            "?",
            "@"
        ]
    ],
    [
        "*",
        [
            "*",
            "+",
            "?",
            "@"
        ]
    ],
    [
        "+",
        [
            "+",
            "@",
            "?",
            "*"
        ]
    ]
]);
usurpMap = new Map([
    [
        "!",
        new Map([
            [
                "!",
                "@"
            ]
        ])
    ],
    [
        "?",
        new Map([
            [
                "*",
                "*"
            ],
            [
                "+",
                "*"
            ]
        ])
    ],
    [
        "@",
        new Map([
            [
                "!",
                "!"
            ],
            [
                "?",
                "?"
            ],
            [
                "@",
                "@"
            ],
            [
                "*",
                "*"
            ],
            [
                "+",
                "+"
            ]
        ])
    ],
    [
        "+",
        new Map([
            [
                "?",
                "*"
            ],
            [
                "*",
                "*"
            ]
        ])
    ]
]);
startNoTraversal = "(?!(?:^|/)\\.\\.?(?:$|/))";
startNoDot = "(?!\\.)";
addPatternStart = new Set([
    "[",
    "."
]);
justDots = new Set([
    "..",
    "."
]);
reSpecials = new Set("().*{}+?[]^$\\!");
regExpEscape = (s3)=>s3.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
qmark = "[^/]";
star = qmark + "*?";
starNoEmpty = qmark + "+?";
ID = 0;
AST = class {
    type;
    #root;
    #hasMagic;
    #uflag = false;
    #parts = [];
    #parent;
    #parentIndex;
    #negs;
    #filledNegs = false;
    #options;
    #toString;
    #emptyExt = false;
    id = ++ID;
    get depth() {
        return (this.#parent?.depth ?? -1) + 1;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
        return {
            "@@type": "AST",
            id: this.id,
            type: this.type,
            root: this.#root.id,
            parent: this.#parent?.id,
            depth: this.depth,
            partsLength: this.#parts.length,
            parts: this.#parts
        };
    }
    constructor(type2, parent, options2 = {}){
        this.type = type2;
        if (type2) this.#hasMagic = true;
        this.#parent = parent;
        this.#root = this.#parent ? this.#parent.#root : this;
        this.#options = this.#root === this ? options2 : this.#root.#options;
        this.#negs = this.#root === this ? [] : this.#root.#negs;
        if (type2 === "!" && !this.#root.#filledNegs) this.#negs.push(this);
        this.#parentIndex = this.#parent ? this.#parent.#parts.length : 0;
    }
    get hasMagic() {
        if (this.#hasMagic !== void 0) return this.#hasMagic;
        for (const p2 of this.#parts){
            if (typeof p2 === "string") continue;
            if (p2.type || p2.hasMagic) return this.#hasMagic = true;
        }
        return this.#hasMagic;
    }
    toString() {
        return this.#toString !== void 0 ? this.#toString : !this.type ? this.#toString = this.#parts.map((p2)=>String(p2)).join("") : this.#toString = this.type + "(" + this.#parts.map((p2)=>String(p2)).join("|") + ")";
    }
    #fillNegs() {
        if (this !== this.#root) throw new Error("should only call on root");
        if (this.#filledNegs) return this;
        this.toString();
        this.#filledNegs = true;
        let n;
        while(n = this.#negs.pop()){
            if (n.type !== "!") continue;
            let p2 = n;
            let pp = p2.#parent;
            while(pp){
                for(let i = p2.#parentIndex + 1; !pp.type && i < pp.#parts.length; i++){
                    for (const part of n.#parts){
                        if (typeof part === "string") {
                            throw new Error("string part in extglob AST??");
                        }
                        part.copyIn(pp.#parts[i]);
                    }
                }
                p2 = pp;
                pp = p2.#parent;
            }
        }
        return this;
    }
    push(...parts) {
        for (const p2 of parts){
            if (p2 === "") continue;
            if (typeof p2 !== "string" && !(p2 instanceof _a2 && p2.#parent === this)) {
                throw new Error("invalid part: " + p2);
            }
            this.#parts.push(p2);
        }
    }
    toJSON() {
        const ret = this.type === null ? this.#parts.slice().map((p2)=>typeof p2 === "string" ? p2 : p2.toJSON()) : [
            this.type,
            ...this.#parts.map((p2)=>p2.toJSON())
        ];
        if (this.isStart() && !this.type) ret.unshift([]);
        if (this.isEnd() && (this === this.#root || this.#root.#filledNegs && this.#parent?.type === "!")) {
            ret.push({});
        }
        return ret;
    }
    isStart() {
        if (this.#root === this) return true;
        if (!this.#parent?.isStart()) return false;
        if (this.#parentIndex === 0) return true;
        const p2 = this.#parent;
        for(let i = 0; i < this.#parentIndex; i++){
            const pp = p2.#parts[i];
            if (!(pp instanceof _a2 && pp.type === "!")) {
                return false;
            }
        }
        return true;
    }
    isEnd() {
        if (this.#root === this) return true;
        if (this.#parent?.type === "!") return true;
        if (!this.#parent?.isEnd()) return false;
        if (!this.type) return this.#parent?.isEnd();
        const pl = this.#parent ? this.#parent.#parts.length : 0;
        return this.#parentIndex === pl - 1;
    }
    copyIn(part) {
        if (typeof part === "string") this.push(part);
        else this.push(part.clone(this));
    }
    clone(parent) {
        const c = new _a2(this.type, parent);
        for (const p2 of this.#parts){
            c.copyIn(p2);
        }
        return c;
    }
    static #parseAST(str3, ast, pos, opt, extDepth) {
        const maxDepth = opt.maxExtglobRecursion ?? 2;
        let escaping = false;
        let inBrace = false;
        let braceStart = -1;
        let braceNeg = false;
        if (ast.type === null) {
            let i2 = pos;
            let acc2 = "";
            while(i2 < str3.length){
                const c = str3.charAt(i2++);
                if (escaping || c === "\\") {
                    escaping = !escaping;
                    acc2 += c;
                    continue;
                }
                if (inBrace) {
                    if (i2 === braceStart + 1) {
                        if (c === "^" || c === "!") {
                            braceNeg = true;
                        }
                    } else if (c === "]" && !(i2 === braceStart + 2 && braceNeg)) {
                        inBrace = false;
                    }
                    acc2 += c;
                    continue;
                } else if (c === "[") {
                    inBrace = true;
                    braceStart = i2;
                    braceNeg = false;
                    acc2 += c;
                    continue;
                }
                const doRecurse = !opt.noext && isExtglobType(c) && str3.charAt(i2) === "(" && extDepth <= maxDepth;
                if (doRecurse) {
                    ast.push(acc2);
                    acc2 = "";
                    const ext2 = new _a2(c, ast);
                    i2 = _a2.#parseAST(str3, ext2, i2, opt, extDepth + 1);
                    ast.push(ext2);
                    continue;
                }
                acc2 += c;
            }
            ast.push(acc2);
            return i2;
        }
        let i = pos + 1;
        let part = new _a2(null, ast);
        const parts = [];
        let acc = "";
        while(i < str3.length){
            const c = str3.charAt(i++);
            if (escaping || c === "\\") {
                escaping = !escaping;
                acc += c;
                continue;
            }
            if (inBrace) {
                if (i === braceStart + 1) {
                    if (c === "^" || c === "!") {
                        braceNeg = true;
                    }
                } else if (c === "]" && !(i === braceStart + 2 && braceNeg)) {
                    inBrace = false;
                }
                acc += c;
                continue;
            } else if (c === "[") {
                inBrace = true;
                braceStart = i;
                braceNeg = false;
                acc += c;
                continue;
            }
            const doRecurse = !opt.noext && isExtglobType(c) && str3.charAt(i) === "(" && (extDepth <= maxDepth || ast && ast.#canAdoptType(c));
            if (doRecurse) {
                const depthAdd = ast && ast.#canAdoptType(c) ? 0 : 1;
                part.push(acc);
                acc = "";
                const ext2 = new _a2(c, part);
                part.push(ext2);
                i = _a2.#parseAST(str3, ext2, i, opt, extDepth + depthAdd);
                continue;
            }
            if (c === "|") {
                part.push(acc);
                acc = "";
                parts.push(part);
                part = new _a2(null, ast);
                continue;
            }
            if (c === ")") {
                if (acc === "" && ast.#parts.length === 0) {
                    ast.#emptyExt = true;
                }
                part.push(acc);
                acc = "";
                ast.push(...parts, part);
                return i;
            }
            acc += c;
        }
        ast.type = null;
        ast.#hasMagic = void 0;
        ast.#parts = [
            str3.substring(pos - 1)
        ];
        return i;
    }
    #canAdoptWithSpace(child) {
        return this.#canAdopt(child, adoptionWithSpaceMap);
    }
    #canAdopt(child, map4 = adoptionMap) {
        if (!child || typeof child !== "object" || child.type !== null || child.#parts.length !== 1 || this.type === null) {
            return false;
        }
        const gc = child.#parts[0];
        if (!gc || typeof gc !== "object" || gc.type === null) {
            return false;
        }
        return this.#canAdoptType(gc.type, map4);
    }
    #canAdoptType(c, map4 = adoptionAnyMap) {
        return !!map4.get(this.type)?.includes(c);
    }
    #adoptWithSpace(child, index) {
        const gc = child.#parts[0];
        const blank = new _a2(null, gc, this.options);
        blank.#parts.push("");
        gc.push(blank);
        this.#adopt(child, index);
    }
    #adopt(child, index) {
        const gc = child.#parts[0];
        this.#parts.splice(index, 1, ...gc.#parts);
        for (const p2 of gc.#parts){
            if (typeof p2 === "object") p2.#parent = this;
        }
        this.#toString = void 0;
    }
    #canUsurpType(c) {
        const m2 = usurpMap.get(this.type);
        return !!m2?.has(c);
    }
    #canUsurp(child) {
        if (!child || typeof child !== "object" || child.type !== null || child.#parts.length !== 1 || this.type === null || this.#parts.length !== 1) {
            return false;
        }
        const gc = child.#parts[0];
        if (!gc || typeof gc !== "object" || gc.type === null) {
            return false;
        }
        return this.#canUsurpType(gc.type);
    }
    #usurp(child) {
        const m2 = usurpMap.get(this.type);
        const gc = child.#parts[0];
        const nt2 = m2?.get(gc.type);
        if (!nt2) return false;
        this.#parts = gc.#parts;
        for (const p2 of this.#parts){
            if (typeof p2 === "object") {
                p2.#parent = this;
            }
        }
        this.type = nt2;
        this.#toString = void 0;
        this.#emptyExt = false;
    }
    static fromGlob(pattern, options2 = {}) {
        const ast = new _a2(null, void 0, options2);
        _a2.#parseAST(pattern, ast, 0, options2, 0);
        return ast;
    }
    toMMPattern() {
        if (this !== this.#root) return this.#root.toMMPattern();
        const glob = this.toString();
        const [re3, body, hasMagic, uflag] = this.toRegExpSource();
        const anyMagic = hasMagic || this.#hasMagic || this.#options.nocase && !this.#options.nocaseMagicOnly && glob.toUpperCase() !== glob.toLowerCase();
        if (!anyMagic) {
            return body;
        }
        const flags = (this.#options.nocase ? "i" : "") + (uflag ? "u" : "");
        return Object.assign(new RegExp(`^${re3}$`, flags), {
            _src: re3,
            _glob: glob
        });
    }
    get options() {
        return this.#options;
    }
    toRegExpSource(allowDot) {
        const dot = allowDot ?? !!this.#options.dot;
        if (this.#root === this) {
            this.#flatten();
            this.#fillNegs();
        }
        if (!isExtglobAST(this)) {
            const noEmpty = this.isStart() && this.isEnd() && !this.#parts.some((s3)=>typeof s3 !== "string");
            const src = this.#parts.map((p2)=>{
                const [re3, _2, hasMagic, uflag] = typeof p2 === "string" ? _a2.#parseGlob(p2, this.#hasMagic, noEmpty) : p2.toRegExpSource(allowDot);
                this.#hasMagic = this.#hasMagic || hasMagic;
                this.#uflag = this.#uflag || uflag;
                return re3;
            }).join("");
            let start2 = "";
            if (this.isStart()) {
                if (typeof this.#parts[0] === "string") {
                    const dotTravAllowed = this.#parts.length === 1 && justDots.has(this.#parts[0]);
                    if (!dotTravAllowed) {
                        const aps = addPatternStart;
                        const needNoTrav = (dot && aps.has(src.charAt(0)) || src.startsWith("\\.") && aps.has(src.charAt(2)) || src.startsWith("\\.\\.") && aps.has(src.charAt(4)));
                        const needNoDot = !dot && !allowDot && aps.has(src.charAt(0));
                        start2 = needNoTrav ? startNoTraversal : needNoDot ? startNoDot : "";
                    }
                }
            }
            let end = "";
            if (this.isEnd() && this.#root.#filledNegs && this.#parent?.type === "!") {
                end = "(?:$|\\/)";
            }
            const final2 = start2 + src + end;
            return [
                final2,
                unescape2(src),
                this.#hasMagic = !!this.#hasMagic,
                this.#uflag
            ];
        }
        const repeated = this.type === "*" || this.type === "+";
        const start = this.type === "!" ? "(?:(?!(?:" : "(?:";
        let body = this.#partsToRegExp(dot);
        if (this.isStart() && this.isEnd() && !body && this.type !== "!") {
            const s3 = this.toString();
            const me2 = this;
            me2.#parts = [
                s3
            ];
            me2.type = null;
            me2.#hasMagic = void 0;
            return [
                s3,
                unescape2(this.toString()),
                false,
                false
            ];
        }
        let bodyDotAllowed = !repeated || allowDot || dot || !startNoDot ? "" : this.#partsToRegExp(true);
        if (bodyDotAllowed === body) {
            bodyDotAllowed = "";
        }
        if (bodyDotAllowed) {
            body = `(?:${body})(?:${bodyDotAllowed})*?`;
        }
        let final = "";
        if (this.type === "!" && this.#emptyExt) {
            final = (this.isStart() && !dot ? startNoDot : "") + starNoEmpty;
        } else {
            const close = this.type === "!" ? ("))" + (this.isStart() && !dot && !allowDot ? startNoDot : "") + star + ")") : this.type === "@" ? ")" : this.type === "?" ? ")?" : this.type === "+" && bodyDotAllowed ? ")" : this.type === "*" && bodyDotAllowed ? `)?` : `)${this.type}`;
            final = start + body + close;
        }
        return [
            final,
            unescape2(body),
            this.#hasMagic = !!this.#hasMagic,
            this.#uflag
        ];
    }
    #flatten() {
        if (!isExtglobAST(this)) {
            for (const p2 of this.#parts){
                if (typeof p2 === "object") {
                    p2.#flatten();
                }
            }
        } else {
            let iterations = 0;
            let done = false;
            do {
                done = true;
                for(let i = 0; i < this.#parts.length; i++){
                    const c = this.#parts[i];
                    if (typeof c === "object") {
                        c.#flatten();
                        if (this.#canAdopt(c)) {
                            done = false;
                            this.#adopt(c, i);
                        } else if (this.#canAdoptWithSpace(c)) {
                            done = false;
                            this.#adoptWithSpace(c, i);
                        } else if (this.#canUsurp(c)) {
                            done = false;
                            this.#usurp(c);
                        }
                    }
                }
            }while (!done && ++iterations < 10)
        }
        this.#toString = void 0;
    }
    #partsToRegExp(dot) {
        return this.#parts.map((p2)=>{
            if (typeof p2 === "string") {
                throw new Error("string type in extglob ast??");
            }
            const [re3, _2, _hasMagic, uflag] = p2.toRegExpSource(dot);
            this.#uflag = this.#uflag || uflag;
            return re3;
        }).filter((p2)=>!(this.isStart() && this.isEnd()) || !!p2).join("|");
    }
    static #parseGlob(glob, hasMagic, noEmpty = false) {
        let escaping = false;
        let re3 = "";
        let uflag = false;
        let inStar = false;
        for(let i = 0; i < glob.length; i++){
            const c = glob.charAt(i);
            if (escaping) {
                escaping = false;
                re3 += (reSpecials.has(c) ? "\\" : "") + c;
                continue;
            }
            if (c === "*") {
                if (inStar) continue;
                inStar = true;
                re3 += noEmpty && /^[*]+$/.test(glob) ? starNoEmpty : star;
                hasMagic = true;
                continue;
            } else {
                inStar = false;
            }
            if (c === "\\") {
                if (i === glob.length - 1) {
                    re3 += "\\\\";
                } else {
                    escaping = true;
                }
                continue;
            }
            if (c === "[") {
                const [src, needUflag, consumed, magic] = parseClass(glob, i);
                if (consumed) {
                    re3 += src;
                    uflag = uflag || needUflag;
                    i += consumed - 1;
                    hasMagic = hasMagic || magic;
                    continue;
                }
            }
            if (c === "?") {
                re3 += qmark;
                hasMagic = true;
                continue;
            }
            re3 += regExpEscape(c);
        }
        return [
            re3,
            unescape2(glob),
            !!hasMagic,
            uflag
        ];
    }
};
_a2 = AST;

}
