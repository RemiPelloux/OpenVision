import { Qcs } from "./cst.js";
import { XZc, ZZc } from "./lexer.js";
import { Exg, JZc, KKe, QZc, eQc, gBt, oCi, sCi } from "./qIc.js";
import { x } from "./tslib.es6.js";
var tQc;
export { tQc };
var __wakaru_nQc_initialized = false;
export function nQc() {
if (__wakaru_nQc_initialized) return;
__wakaru_nQc_initialized = true;
x(), Qcs(), ZZc(), tQc = class {
    constructor(e){
        this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new XZc, this.onNewLine = e;
    }
    *parse(e, t = !1) {
        this.onNewLine && this.offset === 0 && this.onNewLine(0);
        for (const n of this.lexer.lex(e, t))yield* this.next(n);
        t || (yield* this.end());
    }
    *next(e) {
        if (this.source = e, this.atScalar) {
            this.atScalar = !1, yield* this.step(), this.offset += e.length;
            return;
        }
        const t = Exg(e);
        if (t) if (t === "scalar") this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
        else {
            switch(this.type = t, yield* this.step(), t){
                case "newline":
                    this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e.length);
                    break;
                case "space":
                    this.atNewLine && e[0] === " " && (this.indent += e.length);
                    break;
                case "explicit-key-ind":
                case "map-value-ind":
                case "seq-item-ind":
                    this.atNewLine && (this.indent += e.length);
                    break;
                case "doc-mode":
                case "flow-error-end":
                    return;
                default:
                    this.atNewLine = !1;
            }
            this.offset += e.length;
        }
        else {
            const n = `Not a YAML token: ${e}`;
            yield* this.pop({
                type: "error",
                offset: this.offset,
                message: n,
                source: e
            }), this.offset += e.length;
        }
    }
    *end() {
        for(; this.stack.length > 0;)yield* this.pop();
    }
    get sourceToken() {
        return {
            type: this.type,
            offset: this.offset,
            indent: this.indent,
            source: this.source
        };
    }
    *step() {
        const e = this.peek(1);
        if (this.type === "doc-end" && e?.type !== "doc-end") {
            for(; this.stack.length > 0;)yield* this.pop();
            this.stack.push({
                type: "doc-end",
                offset: this.offset,
                source: this.source
            });
            return;
        }
        if (!e) return yield* this.stream();
        switch(e.type){
            case "document":
                return yield* this.document(e);
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar":
                return yield* this.scalar(e);
            case "block-scalar":
                return yield* this.blockScalar(e);
            case "block-map":
                return yield* this.blockMap(e);
            case "block-seq":
                return yield* this.blockSequence(e);
            case "flow-collection":
                return yield* this.flowCollection(e);
            case "doc-end":
                return yield* this.documentEnd(e);
        }
        yield* this.pop();
    }
    peek(e) {
        return this.stack[this.stack.length - e];
    }
    *pop(e) {
        const t = e ?? this.stack.pop();
        if (!t) yield {
            type: "error",
            offset: this.offset,
            source: "",
            message: "Tried to pop an empty stack"
        };
        else if (this.stack.length === 0) yield t;
        else {
            const n = this.peek(1);
            switch(t.type === "block-scalar" ? t.indent = "indent" in n ? n.indent : 0 : t.type === "flow-collection" && n.type === "document" && (t.indent = 0), t.type === "flow-collection" && eQc(t), n.type){
                case "document":
                    n.value = t;
                    break;
                case "block-scalar":
                    n.props.push(t);
                    break;
                case "block-map":
                    {
                        const i = n.items[n.items.length - 1];
                        if (i.value) {
                            n.items.push({
                                start: [],
                                key: t,
                                sep: []
                            }), this.onKeyLine = !0;
                            return;
                        } else if (i.sep) i.value = t;
                        else {
                            Object.assign(i, {
                                key: t,
                                sep: []
                            }), this.onKeyLine = !i.explicitKey;
                            return;
                        }
                        break;
                    }
                case "block-seq":
                    {
                        const i = n.items[n.items.length - 1];
                        i.value ? n.items.push({
                            start: [],
                            value: t
                        }) : i.value = t;
                        break;
                    }
                case "flow-collection":
                    {
                        const i = n.items[n.items.length - 1];
                        !i || i.value ? n.items.push({
                            start: [],
                            key: t,
                            sep: []
                        }) : i.sep ? i.value = t : Object.assign(i, {
                            key: t,
                            sep: []
                        });
                        return;
                    }
                default:
                    yield* this.pop(), yield* this.pop(t);
            }
            if ((n.type === "document" || n.type === "block-map" || n.type === "block-seq") && (t.type === "block-map" || t.type === "block-seq")) {
                const i = t.items[t.items.length - 1];
                i && !i.sep && !i.value && i.start.length > 0 && QZc(i.start) === -1 && (t.indent === 0 || i.start.every((r)=>r.type !== "comment" || r.indent < t.indent)) && (n.type === "document" ? n.end = i.start : n.items.push({
                    start: i.start
                }), t.items.splice(-1, 1));
            }
        }
    }
    *stream() {
        switch(this.type){
            case "directive-line":
                yield {
                    type: "directive",
                    offset: this.offset,
                    source: this.source
                };
                return;
            case "byte-order-mark":
            case "space":
            case "comment":
            case "newline":
                yield this.sourceToken;
                return;
            case "doc-mode":
            case "doc-start":
                {
                    const e = {
                        type: "document",
                        offset: this.offset,
                        start: []
                    };
                    this.type === "doc-start" && e.start.push(this.sourceToken), this.stack.push(e);
                    return;
                }
        }
        yield {
            type: "error",
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML stream`,
            source: this.source
        };
    }
    *document(e) {
        if (e.value) return yield* this.lineEnd(e);
        switch(this.type){
            case "doc-start":
                {
                    QZc(e.start) !== -1 ? (yield* this.pop(), yield* this.step()) : e.start.push(this.sourceToken);
                    return;
                }
            case "anchor":
            case "tag":
            case "space":
            case "comment":
            case "newline":
                e.start.push(this.sourceToken);
                return;
        }
        const t = this.startBlockValue(e);
        t ? this.stack.push(t) : yield {
            type: "error",
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML document`,
            source: this.source
        };
    }
    *scalar(e) {
        if (this.type === "map-value-ind") {
            const t = sCi(this.peek(2)), n = gBt(t);
            let i;
            e.end ? (i = e.end, i.push(this.sourceToken), delete e.end) : i = [
                this.sourceToken
            ];
            const r = {
                type: "block-map",
                offset: e.offset,
                indent: e.indent,
                items: [
                    {
                        start: n,
                        key: e,
                        sep: i
                    }
                ]
            };
            this.onKeyLine = !0, this.stack[this.stack.length - 1] = r;
        } else yield* this.lineEnd(e);
    }
    *blockScalar(e) {
        switch(this.type){
            case "space":
            case "comment":
            case "newline":
                e.props.push(this.sourceToken);
                return;
            case "scalar":
                if (e.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
                    let t = this.source.indexOf(`
`) + 1;
                    for(; t !== 0;)this.onNewLine(this.offset + t), t = this.source.indexOf(`
`, t) + 1;
                }
                yield* this.pop();
                break;
            default:
                yield* this.pop(), yield* this.step();
        }
    }
    *blockMap(e) {
        const t = e.items[e.items.length - 1];
        switch(this.type){
            case "newline":
                if (this.onKeyLine = !1, t.value) {
                    const n = "end" in t.value ? t.value.end : void 0;
                    (Array.isArray(n) ? n[n.length - 1] : void 0)?.type === "comment" ? n?.push(this.sourceToken) : e.items.push({
                        start: [
                            this.sourceToken
                        ]
                    });
                } else t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
                return;
            case "space":
            case "comment":
                if (t.value) e.items.push({
                    start: [
                        this.sourceToken
                    ]
                });
                else if (t.sep) t.sep.push(this.sourceToken);
                else {
                    if (this.atIndentedComment(t.start, e.indent)) {
                        const i = e.items[e.items.length - 2]?.value?.end;
                        if (Array.isArray(i)) {
                            oCi(i, t.start), i.push(this.sourceToken), e.items.pop();
                            return;
                        }
                    }
                    t.start.push(this.sourceToken);
                }
                return;
        }
        if (this.indent >= e.indent) {
            const n = !this.onKeyLine && this.indent === e.indent, i = n && (t.sep || t.explicitKey) && this.type !== "seq-item-ind";
            let r = [];
            if (i && t.sep && !t.value) {
                const s = [];
                for(let o = 0; o < t.sep.length; ++o){
                    const a = t.sep[o];
                    switch(a.type){
                        case "newline":
                            s.push(o);
                            break;
                        case "space":
                            break;
                        case "comment":
                            a.indent > e.indent && (s.length = 0);
                            break;
                        default:
                            s.length = 0;
                    }
                }
                s.length >= 2 && (r = t.sep.splice(s[1]));
            }
            switch(this.type){
                case "anchor":
                case "tag":
                    i || t.value ? (r.push(this.sourceToken), e.items.push({
                        start: r
                    }), this.onKeyLine = !0) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
                    return;
                case "explicit-key-ind":
                    !t.sep && !t.explicitKey ? (t.start.push(this.sourceToken), t.explicitKey = !0) : i || t.value ? (r.push(this.sourceToken), e.items.push({
                        start: r,
                        explicitKey: !0
                    })) : this.stack.push({
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                            {
                                start: [
                                    this.sourceToken
                                ],
                                explicitKey: !0
                            }
                        ]
                    }), this.onKeyLine = !0;
                    return;
                case "map-value-ind":
                    if (t.explicitKey) if (t.sep) if (t.value) e.items.push({
                        start: [],
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    });
                    else if (KKe(t.sep, "map-value-ind")) this.stack.push({
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                            {
                                start: r,
                                key: null,
                                sep: [
                                    this.sourceToken
                                ]
                            }
                        ]
                    });
                    else if (JZc(t.key) && !KKe(t.sep, "newline")) {
                        const s = gBt(t.start), o = t.key, a = t.sep;
                        a.push(this.sourceToken), delete t.key, delete t.sep, this.stack.push({
                            type: "block-map",
                            offset: this.offset,
                            indent: this.indent,
                            items: [
                                {
                                    start: s,
                                    key: o,
                                    sep: a
                                }
                            ]
                        });
                    } else r.length > 0 ? t.sep = t.sep.concat(r, this.sourceToken) : t.sep.push(this.sourceToken);
                    else if (KKe(t.start, "newline")) Object.assign(t, {
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    });
                    else {
                        const s = gBt(t.start);
                        this.stack.push({
                            type: "block-map",
                            offset: this.offset,
                            indent: this.indent,
                            items: [
                                {
                                    start: s,
                                    key: null,
                                    sep: [
                                        this.sourceToken
                                    ]
                                }
                            ]
                        });
                    }
                    else t.sep ? t.value || i ? e.items.push({
                        start: r,
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    }) : KKe(t.sep, "map-value-ind") ? this.stack.push({
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                            {
                                start: [],
                                key: null,
                                sep: [
                                    this.sourceToken
                                ]
                            }
                        ]
                    }) : t.sep.push(this.sourceToken) : Object.assign(t, {
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    });
                    this.onKeyLine = !0;
                    return;
                case "alias":
                case "scalar":
                case "single-quoted-scalar":
                case "double-quoted-scalar":
                    {
                        const s = this.flowScalar(this.type);
                        i || t.value ? (e.items.push({
                            start: r,
                            key: s,
                            sep: []
                        }), this.onKeyLine = !0) : t.sep ? this.stack.push(s) : (Object.assign(t, {
                            key: s,
                            sep: []
                        }), this.onKeyLine = !0);
                        return;
                    }
                default:
                    {
                        const s = this.startBlockValue(e);
                        if (s) {
                            if (s.type === "block-seq") {
                                if (!t.explicitKey && t.sep && !KKe(t.sep, "newline")) {
                                    yield* this.pop({
                                        type: "error",
                                        offset: this.offset,
                                        message: "Unexpected block-seq-ind on same line with key",
                                        source: this.source
                                    });
                                    return;
                                }
                            } else n && e.items.push({
                                start: r
                            });
                            this.stack.push(s);
                            return;
                        }
                    }
            }
        }
        yield* this.pop(), yield* this.step();
    }
    *blockSequence(e) {
        const t = e.items[e.items.length - 1];
        switch(this.type){
            case "newline":
                if (t.value) {
                    const n = "end" in t.value ? t.value.end : void 0;
                    (Array.isArray(n) ? n[n.length - 1] : void 0)?.type === "comment" ? n?.push(this.sourceToken) : e.items.push({
                        start: [
                            this.sourceToken
                        ]
                    });
                } else t.start.push(this.sourceToken);
                return;
            case "space":
            case "comment":
                if (t.value) e.items.push({
                    start: [
                        this.sourceToken
                    ]
                });
                else {
                    if (this.atIndentedComment(t.start, e.indent)) {
                        const i = e.items[e.items.length - 2]?.value?.end;
                        if (Array.isArray(i)) {
                            oCi(i, t.start), i.push(this.sourceToken), e.items.pop();
                            return;
                        }
                    }
                    t.start.push(this.sourceToken);
                }
                return;
            case "anchor":
            case "tag":
                if (t.value || this.indent <= e.indent) break;
                t.start.push(this.sourceToken);
                return;
            case "seq-item-ind":
                if (this.indent !== e.indent) break;
                t.value || KKe(t.start, "seq-item-ind") ? e.items.push({
                    start: [
                        this.sourceToken
                    ]
                }) : t.start.push(this.sourceToken);
                return;
        }
        if (this.indent > e.indent) {
            const n = this.startBlockValue(e);
            if (n) {
                this.stack.push(n);
                return;
            }
        }
        yield* this.pop(), yield* this.step();
    }
    *flowCollection(e) {
        const t = e.items[e.items.length - 1];
        if (this.type === "flow-error-end") {
            let n;
            do yield* this.pop(), n = this.peek(1);
            while (n?.type === "flow-collection")
        } else if (e.end.length === 0) {
            switch(this.type){
                case "comma":
                case "explicit-key-ind":
                    !t || t.sep ? e.items.push({
                        start: [
                            this.sourceToken
                        ]
                    }) : t.start.push(this.sourceToken);
                    return;
                case "map-value-ind":
                    !t || t.value ? e.items.push({
                        start: [],
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    }) : t.sep ? t.sep.push(this.sourceToken) : Object.assign(t, {
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    });
                    return;
                case "space":
                case "comment":
                case "newline":
                case "anchor":
                case "tag":
                    !t || t.value ? e.items.push({
                        start: [
                            this.sourceToken
                        ]
                    }) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken);
                    return;
                case "alias":
                case "scalar":
                case "single-quoted-scalar":
                case "double-quoted-scalar":
                    {
                        const i = this.flowScalar(this.type);
                        !t || t.value ? e.items.push({
                            start: [],
                            key: i,
                            sep: []
                        }) : t.sep ? this.stack.push(i) : Object.assign(t, {
                            key: i,
                            sep: []
                        });
                        return;
                    }
                case "flow-map-end":
                case "flow-seq-end":
                    e.end.push(this.sourceToken);
                    return;
            }
            const n = this.startBlockValue(e);
            n ? this.stack.push(n) : (yield* this.pop(), yield* this.step());
        } else {
            const n = this.peek(2);
            if (n.type === "block-map" && (this.type === "map-value-ind" && n.indent === e.indent || this.type === "newline" && !n.items[n.items.length - 1].sep)) yield* this.pop(), yield* this.step();
            else if (this.type === "map-value-ind" && n.type !== "flow-collection") {
                const i = sCi(n), r = gBt(i);
                eQc(e);
                const s = e.end.splice(1, e.end.length);
                s.push(this.sourceToken);
                const o = {
                    type: "block-map",
                    offset: e.offset,
                    indent: e.indent,
                    items: [
                        {
                            start: r,
                            key: e,
                            sep: s
                        }
                    ]
                };
                this.onKeyLine = !0, this.stack[this.stack.length - 1] = o;
            } else yield* this.lineEnd(e);
        }
    }
    flowScalar(e) {
        if (this.onNewLine) {
            let t = this.source.indexOf(`
`) + 1;
            for(; t !== 0;)this.onNewLine(this.offset + t), t = this.source.indexOf(`
`, t) + 1;
        }
        return {
            type: e,
            offset: this.offset,
            indent: this.indent,
            source: this.source
        };
    }
    startBlockValue(e) {
        switch(this.type){
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar":
                return this.flowScalar(this.type);
            case "block-scalar-header":
                return {
                    type: "block-scalar",
                    offset: this.offset,
                    indent: this.indent,
                    props: [
                        this.sourceToken
                    ],
                    source: ""
                };
            case "flow-map-start":
            case "flow-seq-start":
                return {
                    type: "flow-collection",
                    offset: this.offset,
                    indent: this.indent,
                    start: this.sourceToken,
                    items: [],
                    end: []
                };
            case "seq-item-ind":
                return {
                    type: "block-seq",
                    offset: this.offset,
                    indent: this.indent,
                    items: [
                        {
                            start: [
                                this.sourceToken
                            ]
                        }
                    ]
                };
            case "explicit-key-ind":
                {
                    this.onKeyLine = !0;
                    const t = sCi(e), n = gBt(t);
                    return n.push(this.sourceToken), {
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                            {
                                start: n,
                                explicitKey: !0
                            }
                        ]
                    };
                }
            case "map-value-ind":
                {
                    this.onKeyLine = !0;
                    const t = sCi(e), n = gBt(t);
                    return {
                        type: "block-map",
                        offset: this.offset,
                        indent: this.indent,
                        items: [
                            {
                                start: n,
                                key: null,
                                sep: [
                                    this.sourceToken
                                ]
                            }
                        ]
                    };
                }
        }
        return null;
    }
    atIndentedComment(e, t) {
        return this.type !== "comment" || this.indent <= t ? !1 : e.every((n)=>n.type === "newline" || n.type === "space");
    }
    *documentEnd(e) {
        this.type !== "doc-mode" && (e.end ? e.end.push(this.sourceToken) : e.end = [
            this.sourceToken
        ], this.type === "newline" && (yield* this.pop()));
    }
    *lineEnd(e) {
        switch(this.type){
            case "comma":
            case "doc-start":
            case "doc-end":
            case "flow-seq-end":
            case "flow-map-end":
            case "map-value-ind":
                yield* this.pop(), yield* this.step();
                break;
            case "newline":
                this.onKeyLine = !1;
            case "space":
            case "comment":
            default:
                e.end ? e.end.push(this.sourceToken) : e.end = [
                    this.sourceToken
                ], this.type === "newline" && (yield* this.pop());
        }
    }
};

}
