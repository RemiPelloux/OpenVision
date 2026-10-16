import { Fy, a7y, l7y, lli, lrh, rrh, s7y } from "./LYd.js";
import { BZo, j_n } from "./index_39.js";
import { F8y } from "./index_40.js";
import { E } from "./tslib.es6.js";
import { Hrh } from "./with-selector_2.js";
import { jsx as D8t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { createElement as J8y } from "./react-runtime/react/esm-index-production.js";
import M8t from "./react-runtime/react/esm-index-production.js";
import { useContext as Vrh } from "./react-runtime/react/esm-index-production.js";
import { useEffect as Wrh } from "./react-runtime/react/esm-index-production.js";
import { forwardRef as X8y } from "./react-runtime/react/esm-index-production.js";
import { Fragment as Yrh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useLayoutEffect as Z8y } from "./react-runtime/react/esm-index-production.js";
import { createRef as e7y } from "./react-runtime/react/esm-index-production.js";
import { flushSync as i7y } from "./react-runtime/react-dom/esm-index-production.js";
import { jsxs as r7y } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as t7y } from "./react-runtime/react/esm-index-production.js";
import { createContext as zrh } from "./react-runtime/react/esm-index-production.js";
var Qrh, Jrh, esh, tsh, qAr, nsh, ish, qZo, zAr, rsh, ssh, zZo, c7y, VZo, KZo, YZo, Unt, osh, u7y, ash;
export { Jrh, KZo, Qrh, Unt, VZo, YZo, ash, c7y, esh, ish, nsh, osh, qAr, qZo, rsh, ssh, tsh, u7y, zAr, zZo };
var __wakaru_v_e_initialized = false;
export function v_e() {
if (__wakaru_v_e_initialized) return;
__wakaru_v_e_initialized = true;
E(), BZo(), Fy(), F8y(), Hrh(), Qrh = (...t)=>(e)=>{
        t.forEach((n)=>{
            typeof n == "function" ? n(e) : n && (n.current = e);
        });
    }, Jrh = ({ contentComponent: t })=>{
    const e = j_n.useSyncExternalStore(t.subscribe, t.getSnapshot, t.getServerSnapshot);
    return D8t(Yrh, {
        children: Object.values(e)
    });
}, esh = class extends M8t.Component {
    constructor(t){
        var e;
        super(t), this.editorContentRef = M8t.createRef(), this.initialized = !1, this.state = {
            hasContentComponentInitialized: !!((e = t.editor) != null && e.contentComponent)
        };
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    init() {
        var t;
        const e = this.props.editor;
        if (e && !e.isDestroyed && ((t = e.view.dom) != null && t.parentNode)) {
            if (e.contentComponent) return;
            const n = this.editorContentRef.current;
            n.append(...e.view.dom.parentNode.childNodes), e.setOptions({
                element: n
            }), e.contentComponent = s7y(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = e.contentComponent.subscribe(()=>{
                this.setState((i)=>i.hasContentComponentInitialized ? i : {
                        hasContentComponentInitialized: !0
                    }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
            })), e.createNodeViews(), this.initialized = !0;
        }
    }
    componentWillUnmount() {
        var t;
        const e = this.props.editor;
        if (e) {
            this.initialized = !1, e.isDestroyed || e.view.setProps({
                nodeViews: {}
            }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), e.contentComponent = null;
            try {
                if (!((t = e.view.dom) != null && t.parentNode)) return;
                const n = document.createElement("div");
                n.append(...e.view.dom.parentNode.childNodes), e.setOptions({
                    element: n
                });
            } catch  {}
        }
    }
    render() {
        const { editor: t, innerRef: e, ...n } = this.props;
        return r7y(Yrh, {
            children: [
                D8t("div", {
                    ref: Qrh(e, this.editorContentRef),
                    ...n
                }),
                t?.contentComponent && D8t(Jrh, {
                    contentComponent: t.contentComponent
                })
            ]
        });
    }
}, tsh = X8y((t, e)=>{
    const n = M8t.useMemo(()=>Math.floor(Math.random() * 4294967295).toString(), [
        t.editor
    ]);
    return M8t.createElement(esh, {
        key: n,
        innerRef: e,
        ...t
    });
}), qAr = M8t.memo(tsh), nsh = typeof window < "u" ? Z8y : Wrh, ish = class {
    constructor(t){
        this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = new Set, this.editor = t, this.lastSnapshot = {
            editor: t,
            transactionNumber: 0
        }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
    }
    getSnapshot() {
        return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = {
            editor: this.editor,
            transactionNumber: this.transactionNumber
        }, this.lastSnapshot);
    }
    getServerSnapshot() {
        return {
            editor: null,
            transactionNumber: 0
        };
    }
    subscribe(t) {
        return this.subscribers.add(t), ()=>{
            this.subscribers.delete(t);
        };
    }
    watch(t) {
        if (this.editor = t, this.editor) {
            const e = ()=>{
                this.transactionNumber += 1, this.subscribers.forEach((i)=>i());
            }, n = this.editor;
            return n.on("transaction", e), ()=>{
                n.off("transaction", e);
            };
        }
    }
}, qZo = process.env.NODE_ENV !== "production", zAr = typeof window > "u", rsh = zAr || !!(typeof window < "u" && window.next), ssh = class l2b {
    constructor(e){
        this.editor = null, this.subscriptions = new Set, this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = new Set, this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
    }
    setEditor(e) {
        this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((n)=>n());
    }
    getInitialEditor() {
        if (this.options.current.immediatelyRender === void 0) {
            if (zAr || rsh) {
                if (qZo) throw new Error("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches.");
                return null;
            }
            return this.createEditor();
        }
        if (this.options.current.immediatelyRender && zAr && qZo) throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
        return this.options.current.immediatelyRender ? this.createEditor() : null;
    }
    createEditor() {
        const e = {
            ...this.options.current,
            onBeforeCreate: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onBeforeCreate) == null ? void 0 : s.call(r, ...i);
            },
            onBlur: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onBlur) == null ? void 0 : s.call(r, ...i);
            },
            onCreate: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onCreate) == null ? void 0 : s.call(r, ...i);
            },
            onDestroy: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onDestroy) == null ? void 0 : s.call(r, ...i);
            },
            onFocus: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onFocus) == null ? void 0 : s.call(r, ...i);
            },
            onSelectionUpdate: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onSelectionUpdate) == null ? void 0 : s.call(r, ...i);
            },
            onTransaction: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onTransaction) == null ? void 0 : s.call(r, ...i);
            },
            onUpdate: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onUpdate) == null ? void 0 : s.call(r, ...i);
            },
            onContentError: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onContentError) == null ? void 0 : s.call(r, ...i);
            },
            onDrop: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onDrop) == null ? void 0 : s.call(r, ...i);
            },
            onPaste: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onPaste) == null ? void 0 : s.call(r, ...i);
            },
            onDelete: (...i)=>{
                var r, s;
                return (s = (r = this.options.current).onDelete) == null ? void 0 : s.call(r, ...i);
            }
        };
        return new rrh(e);
    }
    getEditor() {
        return this.editor;
    }
    getServerSnapshot() {
        return null;
    }
    subscribe(e) {
        return this.subscriptions.add(e), ()=>{
            this.subscriptions.delete(e);
        };
    }
    static compareOptions(e, n) {
        return Object.keys(e).every((i)=>[
                "onCreate",
                "onBeforeCreate",
                "onDestroy",
                "onUpdate",
                "onTransaction",
                "onFocus",
                "onBlur",
                "onSelectionUpdate",
                "onContentError",
                "onDrop",
                "onPaste"
            ].includes(i) ? !0 : i === "extensions" && e.extensions && n.extensions ? e.extensions.length !== n.extensions.length ? !1 : e.extensions.every((r, s)=>{
                var o;
                return r === ((o = n.extensions) == null ? void 0 : o[s]);
            }) : e[i] === n[i]);
    }
    onRender(e) {
        return ()=>(this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && e.length === 0 ? l2b.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
                ...this.options.current,
                editable: this.editor.isEditable
            }) : this.refreshEditorInstance(e), ()=>{
                this.isComponentMounted = !1, this.scheduleDestroy();
            });
    }
    refreshEditorInstance(e) {
        if (this.editor && !this.editor.isDestroyed) {
            if (this.previousDeps === null) {
                this.previousDeps = e;
                return;
            }
            if (this.previousDeps.length === e.length && this.previousDeps.every((i, r)=>i === e[r])) return;
        }
        this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = e;
    }
    scheduleDestroy() {
        const e = this.instanceId, n = this.editor;
        this.scheduledDestructionTimeout = setTimeout(()=>{
            if (this.isComponentMounted && this.instanceId === e) {
                n && n.setOptions(this.options.current);
                return;
            }
            n && !n.isDestroyed && (n.destroy(), this.instanceId === e && this.setEditor(null));
        }, 1);
    }
}, zZo = zrh({
    editor: null
}), c7y = zZo.Consumer, VZo = ()=>Vrh(zZo), KZo = zrh({
    onDragStart: ()=>{},
    nodeViewContentChildren: void 0,
    nodeViewContentRef: ()=>{}
}), YZo = ()=>Vrh(KZo), Unt = M8t.forwardRef((t, e)=>{
    const { onDragStart: n } = YZo(), i = t.as || "div";
    return D8t(i, {
        ...t,
        ref: e,
        "data-node-view-wrapper": "",
        onDragStart: n,
        style: {
            whiteSpace: "normal",
            ...t.style
        }
    });
}), osh = class {
    constructor(t, { editor: e, props: n = {}, as: i = "div", className: r = "" }){
        this.ref = null, this.id = Math.floor(Math.random() * 4294967295).toString(), this.component = t, this.editor = e, this.props = n, this.element = document.createElement(i), this.element.classList.add("react-renderer"), r && this.element.classList.add(...r.split(" ")), this.editor.isInitialized ? i7y(()=>{
            this.render();
        }) : queueMicrotask(()=>{
            this.render();
        });
    }
    render() {
        var t;
        const e = this.component, n = this.props, i = this.editor, r = l7y(), s = a7y(e), o = {
            ...n
        };
        o.ref && !(r || s) && delete o.ref, !o.ref && (r || s) && (o.ref = (a)=>{
            this.ref = a;
        }), this.reactElement = D8t(e, {
            ...o
        }), (t = i?.contentComponent) == null || t.setRenderer(this.id, this);
    }
    updateProps(t = {}) {
        this.props = {
            ...this.props,
            ...t
        }, this.render();
    }
    destroy() {
        var t;
        const e = this.editor;
        (t = e?.contentComponent) == null || t.removeRenderer(this.id);
        try {
            this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
        } catch  {}
    }
    updateAttributes(t) {
        Object.keys(t).forEach((e)=>{
            this.element.setAttribute(e, t[e]);
        });
    }
}, u7y = M8t.createContext({
    markViewContentRef: ()=>{}
}), ash = class extends lrh {
    constructor(t, e, n){
        if (super(t, e, n), this.selectionRafId = null, !this.node.isLeaf) {
            this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement.dataset.nodeViewContentReact = "", this.contentDOMElement.dataset.nodeViewWrapper = "", this.contentDOMElement.style.whiteSpace = "inherit";
            const i = this.dom.querySelector("[data-node-view-content]");
            if (!i) return;
            i.appendChild(this.contentDOMElement);
        }
    }
    mount() {
        const t = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            innerDecorations: this.innerDecorations,
            view: this.view,
            selected: !1,
            extension: this.extension,
            HTMLAttributes: this.HTMLAttributes,
            getPos: ()=>this.getPos(),
            updateAttributes: (l = {})=>this.updateAttributes(l),
            deleteNode: ()=>this.deleteNode(),
            ref: e7y()
        };
        if (!this.component.displayName) {
            const l = (c)=>c.charAt(0).toUpperCase() + c.substring(1);
            this.component.displayName = l(this.extension.name);
        }
        const i = {
            onDragStart: this.onDragStart.bind(this),
            nodeViewContentRef: (l)=>{
                l && this.contentDOMElement && l.firstChild !== this.contentDOMElement && (l.hasAttribute("data-node-view-wrapper") && l.removeAttribute("data-node-view-wrapper"), l.appendChild(this.contentDOMElement));
            }
        }, r = this.component, s = t7y((l)=>D8t(KZo.Provider, {
                value: i,
                children: J8y(r, l)
            }));
        s.displayName = "ReactNodeView";
        let o = this.node.isInline ? "span" : "div";
        this.options.as && (o = this.options.as);
        const { className: a = "" } = this.options;
        this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.renderer = new osh(s, {
            editor: this.editor,
            props: t,
            as: o,
            className: `node-${this.node.type.name} ${a}`.trim()
        }), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.updateElementAttributes();
    }
    get dom() {
        var t;
        if (this.renderer.element.firstElementChild && !((t = this.renderer.element.firstElementChild) != null && t.hasAttribute("data-node-view-wrapper"))) throw Error("Please use the NodeViewWrapper component for your node view.");
        return this.renderer.element;
    }
    get contentDOM() {
        return this.node.isLeaf ? null : this.contentDOMElement;
    }
    handleSelectionUpdate() {
        this.selectionRafId && (cancelAnimationFrame(this.selectionRafId), this.selectionRafId = null), this.selectionRafId = requestAnimationFrame(()=>{
            this.selectionRafId = null;
            const { from: t, to: e } = this.editor.state.selection, n = this.getPos();
            if (typeof n == "number") if (t <= n && e >= n + this.node.nodeSize) {
                if (this.renderer.props.selected) return;
                this.selectNode();
            } else {
                if (!this.renderer.props.selected) return;
                this.deselectNode();
            }
        });
    }
    update(t, e, n) {
        const i = (r)=>{
            this.renderer.updateProps(r), typeof this.options.attrs == "function" && this.updateElementAttributes();
        };
        if (t.type !== this.node.type) return !1;
        if (typeof this.options.update == "function") {
            const r = this.node, s = this.decorations, o = this.innerDecorations;
            return this.node = t, this.decorations = e, this.innerDecorations = n, this.options.update({
                oldNode: r,
                oldDecorations: s,
                newNode: t,
                newDecorations: e,
                oldInnerDecorations: o,
                innerDecorations: n,
                updateProps: ()=>i({
                        node: t,
                        decorations: e,
                        innerDecorations: n
                    })
            });
        }
        return t === this.node && this.decorations === e && this.innerDecorations === n || (this.node = t, this.decorations = e, this.innerDecorations = n, i({
            node: t,
            decorations: e,
            innerDecorations: n
        })), !0;
    }
    selectNode() {
        this.renderer.updateProps({
            selected: !0
        }), this.renderer.element.classList.add("ProseMirror-selectednode");
    }
    deselectNode() {
        this.renderer.updateProps({
            selected: !1
        }), this.renderer.element.classList.remove("ProseMirror-selectednode");
    }
    destroy() {
        this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate), this.contentDOMElement = null, this.selectionRafId && (cancelAnimationFrame(this.selectionRafId), this.selectionRafId = null);
    }
    updateElementAttributes() {
        if (this.options.attrs) {
            let t = {};
            if (typeof this.options.attrs == "function") {
                const e = this.editor.extensionManager.attributes, n = lli(this.node, e);
                t = this.options.attrs({
                    node: this.node,
                    HTMLAttributes: n
                });
            } else t = this.options.attrs;
            this.renderer.updateAttributes(t);
        }
    }
};

}
