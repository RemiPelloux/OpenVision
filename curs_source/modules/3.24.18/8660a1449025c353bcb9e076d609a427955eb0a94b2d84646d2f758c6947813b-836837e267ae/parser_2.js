import { Eeh, Ieh, T_n, Teh, oAr, sAr, ySt, z4y } from "./LYd.js";
import { JYo } from "./cst.js";
import { Ceh, weh } from "./lexer.js";
import { E } from "./tslib.es6.js";
var xeh;
export { xeh };
var __wakaru_Aeh_initialized = false;
export function Aeh() {
if (__wakaru_Aeh_initialized) return;
__wakaru_Aeh_initialized = true;
E(), JYo(), Ceh(), xeh = class {
    constructor(t){
        this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new weh, this.onNewLine = t;
    }
    *parse(t, e = !1) {
        this.onNewLine && this.offset === 0 && this.onNewLine(0);
        for (const n of this.lexer.lex(t, e))yield* this.next(n);
        e || (yield* this.end());
    }
    *next(t) {
        if (this.source = t, this.atScalar) {
            this.atScalar = !1, yield* this.step(), this.offset += t.length;
            return;
        }
        const e = z4y(t);
        if (e) if (e === "scalar") this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
        else {
            switch(this.type = e, yield* this.step(), e){
                case "newline":
                    this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + t.length);
                    break;
                case "space":
                    this.atNewLine && t[0] === " " && (this.indent += t.length);
                    break;
                case "explicit-key-ind":
                case "map-value-ind":
                case "seq-item-ind":
                    this.atNewLine && (this.indent += t.length);
                    break;
                case "doc-mode":
                case "flow-error-end":
                    return;
                default:
                    this.atNewLine = !1;
            }
            this.offset += t.length;
        }
        else {
            const n = `Not a YAML token: ${t}`;
            yield* this.pop({
                type: "error",
                offset: this.offset,
                message: n,
                source: t
            }), this.offset += t.length;
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
        const t = this.peek(1);
        if (this.type === "doc-end" && t?.type !== "doc-end") {
            for(; this.stack.length > 0;)yield* this.pop();
            this.stack.push({
                type: "doc-end",
                offset: this.offset,
                source: this.source
            });
            return;
        }
        if (!t) return yield* this.stream();
        switch(t.type){
            case "document":
                return yield* this.document(t);
            case "alias":
            case "scalar":
            case "single-quoted-scalar":
            case "double-quoted-scalar":
                return yield* this.scalar(t);
            case "block-scalar":
                return yield* this.blockScalar(t);
            case "block-map":
                return yield* this.blockMap(t);
            case "block-seq":
                return yield* this.blockSequence(t);
            case "flow-collection":
                return yield* this.flowCollection(t);
            case "doc-end":
                return yield* this.documentEnd(t);
        }
        yield* this.pop();
    }
    peek(t) {
        return this.stack[this.stack.length - t];
    }
    *pop(t) {
        const e = t ?? this.stack.pop();
        if (!e) yield {
            type: "error",
            offset: this.offset,
            source: "",
            message: "Tried to pop an empty stack"
        };
        else if (this.stack.length === 0) yield e;
        else {
            const n = this.peek(1);
            switch(e.type === "block-scalar" ? e.indent = "indent" in n ? n.indent : 0 : e.type === "flow-collection" && n.type === "document" && (e.indent = 0), e.type === "flow-collection" && Ieh(e), n.type){
                case "document":
                    n.value = e;
                    break;
                case "block-scalar":
                    n.props.push(e);
                    break;
                case "block-map":
                    {
                        const i = n.items[n.items.length - 1];
                        if (i.value) {
                            n.items.push({
                                start: [],
                                key: e,
                                sep: []
                            }), this.onKeyLine = !0;
                            return;
                        } else if (i.sep) i.value = e;
                        else {
                            Object.assign(i, {
                                key: e,
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
                            value: e
                        }) : i.value = e;
                        break;
                    }
                case "flow-collection":
                    {
                        const i = n.items[n.items.length - 1];
                        !i || i.value ? n.items.push({
                            start: [],
                            key: e,
                            sep: []
                        }) : i.sep ? i.value = e : Object.assign(i, {
                            key: e,
                            sep: []
                        });
                        return;
                    }
                default:
                    yield* this.pop(), yield* this.pop(e);
            }
            if ((n.type === "document" || n.type === "block-map" || n.type === "block-seq") && (e.type === "block-map" || e.type === "block-seq")) {
                const i = e.items[e.items.length - 1];
                i && !i.sep && !i.value && i.start.length > 0 && Teh(i.start) === -1 && (e.indent === 0 || i.start.every((r)=>r.type !== "comment" || r.indent < e.indent)) && (n.type === "document" ? n.end = i.start : n.items.push({
                    start: i.start
                }), e.items.splice(-1, 1));
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
                    const t = {
                        type: "document",
                        offset: this.offset,
                        start: []
                    };
                    this.type === "doc-start" && t.start.push(this.sourceToken), this.stack.push(t);
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
    *document(t) {
        if (t.value) return yield* this.lineEnd(t);
        switch(this.type){
            case "doc-start":
                {
                    Teh(t.start) !== -1 ? (yield* this.pop(), yield* this.step()) : t.start.push(this.sourceToken);
                    return;
                }
            case "anchor":
            case "tag":
            case "space":
            case "comment":
            case "newline":
                t.start.push(this.sourceToken);
                return;
        }
        const e = this.startBlockValue(t);
        e ? this.stack.push(e) : yield {
            type: "error",
            offset: this.offset,
            message: `Unexpected ${this.type} token in YAML document`,
            source: this.source
        };
    }
    *scalar(t) {
        if (this.type === "map-value-ind") {
            const e = sAr(this.peek(2)), n = T_n(e);
            let i;
            t.end ? (i = t.end, i.push(this.sourceToken), delete t.end) : i = [
                this.sourceToken
            ];
            const r = {
                type: "block-map",
                offset: t.offset,
                indent: t.indent,
                items: [
                    {
                        start: n,
                        key: t,
                        sep: i
                    }
                ]
            };
            this.onKeyLine = !0, this.stack[this.stack.length - 1] = r;
        } else yield* this.lineEnd(t);
    }
    *blockScalar(t) {
        switch(this.type){
            case "space":
            case "comment":
            case "newline":
                t.props.push(this.sourceToken);
                return;
            case "scalar":
                if (t.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
                    let e = this.source.indexOf(`
`) + 1;
                    for(; e !== 0;)this.onNewLine(this.offset + e), e = this.source.indexOf(`
`, e) + 1;
                }
                yield* this.pop();
                break;
            default:
                yield* this.pop(), yield* this.step();
        }
    }
    *blockMap(t) {
        const e = t.items[t.items.length - 1];
        switch(this.type){
            case "newline":
                if (this.onKeyLine = !1, e.value) {
                    const n = "end" in e.value ? e.value.end : void 0;
                    (Array.isArray(n) ? n[n.length - 1] : void 0)?.type === "comment" ? n?.push(this.sourceToken) : t.items.push({
                        start: [
                            this.sourceToken
                        ]
                    });
                } else e.sep ? e.sep.push(this.sourceToken) : e.start.push(this.sourceToken);
                return;
            case "space":
            case "comment":
                if (e.value) t.items.push({
                    start: [
                        this.sourceToken
                    ]
                });
                else if (e.sep) e.sep.push(this.sourceToken);
                else {
                    if (this.atIndentedComment(e.start, t.indent)) {
                        const i = t.items[t.items.length - 2]?.value?.end;
                        if (Array.isArray(i)) {
                            oAr(i, e.start), i.push(this.sourceToken), t.items.pop();
                            return;
                        }
                    }
                    e.start.push(this.sourceToken);
                }
                return;
        }
        if (this.indent >= t.indent) {
            const n = !this.onKeyLine && this.indent === t.indent, i = n && (e.sep || e.explicitKey) && this.type !== "seq-item-ind";
            let r = [];
            if (i && e.sep && !e.value) {
                const s = [];
                for(let o = 0; o < e.sep.length; ++o){
                    const a = e.sep[o];
                    switch(a.type){
                        case "newline":
                            s.push(o);
                            break;
                        case "space":
                            break;
                        case "comment":
                            a.indent > t.indent && (s.length = 0);
                            break;
                        default:
                            s.length = 0;
                    }
                }
                s.length >= 2 && (r = e.sep.splice(s[1]));
            }
            switch(this.type){
                case "anchor":
                case "tag":
                    i || e.value ? (r.push(this.sourceToken), t.items.push({
                        start: r
                    }), this.onKeyLine = !0) : e.sep ? e.sep.push(this.sourceToken) : e.start.push(this.sourceToken);
                    return;
                case "explicit-key-ind":
                    !e.sep && !e.explicitKey ? (e.start.push(this.sourceToken), e.explicitKey = !0) : i || e.value ? (r.push(this.sourceToken), t.items.push({
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
                    if (e.explicitKey) if (e.sep) if (e.value) t.items.push({
                        start: [],
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    });
                    else if (ySt(e.sep, "map-value-ind")) this.stack.push({
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
                    else if (Eeh(e.key) && !ySt(e.sep, "newline")) {
                        const s = T_n(e.start), o = e.key, a = e.sep;
                        a.push(this.sourceToken), delete e.key, delete e.sep, this.stack.push({
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
                    } else r.length > 0 ? e.sep = e.sep.concat(r, this.sourceToken) : e.sep.push(this.sourceToken);
                    else if (ySt(e.start, "newline")) Object.assign(e, {
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    });
                    else {
                        const s = T_n(e.start);
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
                    else e.sep ? e.value || i ? t.items.push({
                        start: r,
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    }) : ySt(e.sep, "map-value-ind") ? this.stack.push({
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
                    }) : e.sep.push(this.sourceToken) : Object.assign(e, {
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
                        i || e.value ? (t.items.push({
                            start: r,
                            key: s,
                            sep: []
                        }), this.onKeyLine = !0) : e.sep ? this.stack.push(s) : (Object.assign(e, {
                            key: s,
                            sep: []
                        }), this.onKeyLine = !0);
                        return;
                    }
                default:
                    {
                        const s = this.startBlockValue(t);
                        if (s) {
                            if (s.type === "block-seq") {
                                if (!e.explicitKey && e.sep && !ySt(e.sep, "newline")) {
                                    yield* this.pop({
                                        type: "error",
                                        offset: this.offset,
                                        message: "Unexpected block-seq-ind on same line with key",
                                        source: this.source
                                    });
                                    return;
                                }
                            } else n && t.items.push({
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
    *blockSequence(t) {
        const e = t.items[t.items.length - 1];
        switch(this.type){
            case "newline":
                if (e.value) {
                    const n = "end" in e.value ? e.value.end : void 0;
                    (Array.isArray(n) ? n[n.length - 1] : void 0)?.type === "comment" ? n?.push(this.sourceToken) : t.items.push({
                        start: [
                            this.sourceToken
                        ]
                    });
                } else e.start.push(this.sourceToken);
                return;
            case "space":
            case "comment":
                if (e.value) t.items.push({
                    start: [
                        this.sourceToken
                    ]
                });
                else {
                    if (this.atIndentedComment(e.start, t.indent)) {
                        const i = t.items[t.items.length - 2]?.value?.end;
                        if (Array.isArray(i)) {
                            oAr(i, e.start), i.push(this.sourceToken), t.items.pop();
                            return;
                        }
                    }
                    e.start.push(this.sourceToken);
                }
                return;
            case "anchor":
            case "tag":
                if (e.value || this.indent <= t.indent) break;
                e.start.push(this.sourceToken);
                return;
            case "seq-item-ind":
                if (this.indent !== t.indent) break;
                e.value || ySt(e.start, "seq-item-ind") ? t.items.push({
                    start: [
                        this.sourceToken
                    ]
                }) : e.start.push(this.sourceToken);
                return;
        }
        if (this.indent > t.indent) {
            const n = this.startBlockValue(t);
            if (n) {
                this.stack.push(n);
                return;
            }
        }
        yield* this.pop(), yield* this.step();
    }
    *flowCollection(t) {
        const e = t.items[t.items.length - 1];
        if (this.type === "flow-error-end") {
            let n;
            do yield* this.pop(), n = this.peek(1);
            while (n?.type === "flow-collection")
        } else if (t.end.length === 0) {
            switch(this.type){
                case "comma":
                case "explicit-key-ind":
                    !e || e.sep ? t.items.push({
                        start: [
                            this.sourceToken
                        ]
                    }) : e.start.push(this.sourceToken);
                    return;
                case "map-value-ind":
                    !e || e.value ? t.items.push({
                        start: [],
                        key: null,
                        sep: [
                            this.sourceToken
                        ]
                    }) : e.sep ? e.sep.push(this.sourceToken) : Object.assign(e, {
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
                    !e || e.value ? t.items.push({
                        start: [
                            this.sourceToken
                        ]
                    }) : e.sep ? e.sep.push(this.sourceToken) : e.start.push(this.sourceToken);
                    return;
                case "alias":
                case "scalar":
                case "single-quoted-scalar":
                case "double-quoted-scalar":
                    {
                        const i = this.flowScalar(this.type);
                        !e || e.value ? t.items.push({
                            start: [],
                            key: i,
                            sep: []
                        }) : e.sep ? this.stack.push(i) : Object.assign(e, {
                            key: i,
                            sep: []
                        });
                        return;
                    }
                case "flow-map-end":
                case "flow-seq-end":
                    t.end.push(this.sourceToken);
                    return;
            }
            const n = this.startBlockValue(t);
            n ? this.stack.push(n) : (yield* this.pop(), yield* this.step());
        } else {
            const n = this.peek(2);
            if (n.type === "block-map" && (this.type === "map-value-ind" && n.indent === t.indent || this.type === "newline" && !n.items[n.items.length - 1].sep)) yield* this.pop(), yield* this.step();
            else if (this.type === "map-value-ind" && n.type !== "flow-collection") {
                const i = sAr(n), r = T_n(i);
                Ieh(t);
                const s = t.end.splice(1, t.end.length);
                s.push(this.sourceToken);
                const o = {
                    type: "block-map",
                    offset: t.offset,
                    indent: t.indent,
                    items: [
                        {
                            start: r,
                            key: t,
                            sep: s
                        }
                    ]
                };
                this.onKeyLine = !0, this.stack[this.stack.length - 1] = o;
            } else yield* this.lineEnd(t);
        }
    }
    flowScalar(t) {
        if (this.onNewLine) {
            let e = this.source.indexOf(`
`) + 1;
            for(; e !== 0;)this.onNewLine(this.offset + e), e = this.source.indexOf(`
`, e) + 1;
        }
        return {
            type: t,
            offset: this.offset,
            indent: this.indent,
            source: this.source
        };
    }
    startBlockValue(t) {
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
                    const e = sAr(t), n = T_n(e);
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
                    const e = sAr(t), n = T_n(e);
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
    atIndentedComment(t, e) {
        return this.type !== "comment" || this.indent <= e ? !1 : t.every((n)=>n.type === "newline" || n.type === "space");
    }
    *documentEnd(t) {
        this.type !== "doc-mode" && (t.end ? t.end.push(this.sourceToken) : t.end = [
            this.sourceToken
        ], this.type === "newline" && (yield* this.pop()));
    }
    *lineEnd(t) {
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
                t.end ? t.end.push(this.sourceToken) : t.end = [
                    this.sourceToken
                ], this.type === "newline" && (yield* this.pop());
        }
    }
};

}
