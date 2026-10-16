import { Bus, IBt } from "./index_34.js";
import { bRg } from "./index_35.js";
import { A_, GRg, HRg, Kyn, Ltl, Rtl, VRg } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { mnl } from "./with-selector_2.js";
import { jsxs as $Rg } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as FRg } from "./react-runtime/react/esm-index-production.js";
import { forwardRef as MRg } from "./react-runtime/react/esm-index-production.js";
import { createElement as NRg } from "./react-runtime/react/esm-index-production.js";
import { createRef as ORg } from "./react-runtime/react/esm-index-production.js";
import { useLayoutEffect as PRg } from "./react-runtime/react/esm-index-production.js";
import { Fragment as Snl } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { flushSync as URg } from "./react-runtime/react-dom/esm-index-production.js";
import { createContext as _nl } from "./react-runtime/react/esm-index-production.js";
import bgt from "./react-runtime/react/esm-index-production.js";
import { useContext as bnl } from "./react-runtime/react/esm-index-production.js";
import { useEffect as gnl } from "./react-runtime/react/esm-index-production.js";
import { jsx as ygt } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Cnl, Tnl, Enl, xnl, jCi, Inl, Anl, qus, qCi, Rnl, Dnl, zus, jRg, Kus, Yus, Xus, Sgt, Mnl, qRg, Pnl;
export { Anl, Cnl, Dnl, Enl, Inl, Kus, Mnl, Pnl, Rnl, Sgt, Tnl, Xus, Yus, jCi, jRg, qCi, qRg, qus, xnl, zus };
var __wakaru_Ife_initialized = false;
export function Ife() {
if (__wakaru_Ife_initialized) return;
__wakaru_Ife_initialized = true;
x(), Bus(), A_(), bRg(), mnl(), Cnl = (...e)=>(t)=>{
        e.forEach((n)=>{
            typeof n == "function" ? n(t) : n && (n.current = t);
        });
    }, Tnl = ({ contentComponent: e })=>{
    const t = IBt.useSyncExternalStore(e.subscribe, e.getSnapshot, e.getServerSnapshot);
    return ygt(Snl, {
        children: Object.values(t)
    });
}, Enl = class extends bgt.Component {
    constructor(e){
        var t;
        super(e), this.editorContentRef = bgt.createRef(), this.initialized = !1, this.state = {
            hasContentComponentInitialized: !!((t = e.editor) != null && t.contentComponent)
        };
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    init() {
        var e;
        const t = this.props.editor;
        if (t && !t.isDestroyed && ((e = t.view.dom) != null && e.parentNode)) {
            if (t.contentComponent) return;
            const n = this.editorContentRef.current;
            n.append(...t.view.dom.parentNode.childNodes), t.setOptions({
                element: n
            }), t.contentComponent = HRg(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = t.contentComponent.subscribe(()=>{
                this.setState((i)=>i.hasContentComponentInitialized ? i : {
                        hasContentComponentInitialized: !0
                    }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
            })), t.createNodeViews(), this.initialized = !0;
        }
    }
    componentWillUnmount() {
        var e;
        const t = this.props.editor;
        if (t) {
            this.initialized = !1, t.isDestroyed || t.view.setProps({
                nodeViews: {}
            }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), t.contentComponent = null;
            try {
                if (!((e = t.view.dom) != null && e.parentNode)) return;
                const n = document.createElement("div");
                n.append(...t.view.dom.parentNode.childNodes), t.setOptions({
                    element: n
                });
            } catch  {}
        }
    }
    render() {
        const { editor: e, innerRef: t, ...n } = this.props;
        return $Rg(Snl, {
            children: [
                ygt("div", {
                    ref: Cnl(t, this.editorContentRef),
                    ...n
                }),
                e?.contentComponent && ygt(Tnl, {
                    contentComponent: e.contentComponent
                })
            ]
        });
    }
}, xnl = MRg((e, t)=>{
    const n = bgt.useMemo(()=>Math.floor(Math.random() * 4294967295).toString(), [
        e.editor
    ]);
    return bgt.createElement(Enl, {
        key: n,
        innerRef: t,
        ...e
    });
}), jCi = bgt.memo(xnl), Inl = typeof window < "u" ? PRg : gnl, Anl = class {
    constructor(e){
        this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = new Set, this.editor = e, this.lastSnapshot = {
            editor: e,
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
    subscribe(e) {
        return this.subscribers.add(e), ()=>{
            this.subscribers.delete(e);
        };
    }
    watch(e) {
        if (this.editor = e, this.editor) {
            const t = ()=>{
                this.transactionNumber += 1, this.subscribers.forEach((i)=>i());
            }, n = this.editor;
            return n.on("transaction", t), ()=>{
                n.off("transaction", t);
            };
        }
    }
}, qus = process.env.NODE_ENV !== "production", qCi = typeof window > "u", Rnl = qCi || !!(typeof window < "u" && window.next), Dnl = class xwm {
    constructor(t){
        this.editor = null, this.subscriptions = new Set, this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = t, this.subscriptions = new Set, this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
    }
    setEditor(t) {
        this.editor = t, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((n)=>n());
    }
    getInitialEditor() {
        if (this.options.current.immediatelyRender === void 0) {
            if (qCi || Rnl) {
                if (qus) throw new Error("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches.");
                return null;
            }
            return this.createEditor();
        }
        if (this.options.current.immediatelyRender && qCi && qus) throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
        return this.options.current.immediatelyRender ? this.createEditor() : null;
    }
    createEditor() {
        const t = {
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
        return new Rtl(t);
    }
    getEditor() {
        return this.editor;
    }
    getServerSnapshot() {
        return null;
    }
    subscribe(t) {
        return this.subscriptions.add(t), ()=>{
            this.subscriptions.delete(t);
        };
    }
    static compareOptions(t, n) {
        return Object.keys(t).every((i)=>[
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
            ].includes(i) ? !0 : i === "extensions" && t.extensions && n.extensions ? t.extensions.length !== n.extensions.length ? !1 : t.extensions.every((r, s)=>{
                var o;
                return r === ((o = n.extensions) == null ? void 0 : o[s]);
            }) : t[i] === n[i]);
    }
    onRender(t) {
        return ()=>(this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && t.length === 0 ? xwm.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
                ...this.options.current,
                editable: this.editor.isEditable
            }) : this.refreshEditorInstance(t), ()=>{
                this.isComponentMounted = !1, this.scheduleDestroy();
            });
    }
    refreshEditorInstance(t) {
        if (this.editor && !this.editor.isDestroyed) {
            if (this.previousDeps === null) {
                this.previousDeps = t;
                return;
            }
            if (this.previousDeps.length === t.length && this.previousDeps.every((i, r)=>i === t[r])) return;
        }
        this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = t;
    }
    scheduleDestroy() {
        const t = this.instanceId, n = this.editor;
        this.scheduledDestructionTimeout = setTimeout(()=>{
            if (this.isComponentMounted && this.instanceId === t) {
                n && n.setOptions(this.options.current);
                return;
            }
            n && !n.isDestroyed && (n.destroy(), this.instanceId === t && this.setEditor(null));
        }, 1);
    }
}, zus = _nl({
    editor: null
}), jRg = zus.Consumer, Kus = ()=>bnl(zus), Yus = _nl({
    onDragStart: ()=>{},
    nodeViewContentChildren: void 0,
    nodeViewContentRef: ()=>{}
}), Xus = ()=>bnl(Yus), Sgt = bgt.forwardRef((e, t)=>{
    const { onDragStart: n } = Xus(), i = e.as || "div";
    return ygt(i, {
        ...e,
        ref: t,
        "data-node-view-wrapper": "",
        onDragStart: n,
        style: {
            whiteSpace: "normal",
            ...e.style
        }
    });
}), Mnl = class {
    constructor(e, { editor: t, props: n = {}, as: i = "div", className: r = "" }){
        this.ref = null, this.id = Math.floor(Math.random() * 4294967295).toString(), this.component = e, this.editor = t, this.props = n, this.element = document.createElement(i), this.element.classList.add("react-renderer"), r && this.element.classList.add(...r.split(" ")), this.editor.isInitialized ? URg(()=>{
            this.render();
        }) : queueMicrotask(()=>{
            this.render();
        });
    }
    render() {
        var e;
        const t = this.component, n = this.props, i = this.editor, r = VRg(), s = GRg(t), o = {
            ...n
        };
        o.ref && !(r || s) && delete o.ref, !o.ref && (r || s) && (o.ref = (a)=>{
            this.ref = a;
        }), this.reactElement = ygt(t, {
            ...o
        }), (e = i?.contentComponent) == null || e.setRenderer(this.id, this);
    }
    updateProps(e = {}) {
        this.props = {
            ...this.props,
            ...e
        }, this.render();
    }
    destroy() {
        var e;
        const t = this.editor;
        (e = t?.contentComponent) == null || e.removeRenderer(this.id);
        try {
            this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
        } catch  {}
    }
    updateAttributes(e) {
        Object.keys(e).forEach((t)=>{
            this.element.setAttribute(t, e[t]);
        });
    }
}, qRg = bgt.createContext({
    markViewContentRef: ()=>{}
}), Pnl = class extends Ltl {
    constructor(e, t, n){
        if (super(e, t, n), this.selectionRafId = null, !this.node.isLeaf) {
            this.options.contentDOMElementTag ? this.contentDOMElement = document.createElement(this.options.contentDOMElementTag) : this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div"), this.contentDOMElement.dataset.nodeViewContentReact = "", this.contentDOMElement.dataset.nodeViewWrapper = "", this.contentDOMElement.style.whiteSpace = "inherit";
            const i = this.dom.querySelector("[data-node-view-content]");
            if (!i) return;
            i.appendChild(this.contentDOMElement);
        }
    }
    mount() {
        const e = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            innerDecorations: this.innerDecorations,
            view: this.view,
            selected: !1,
            extension: this.extension,
            HTMLAttributes: this.HTMLAttributes,
            getPos: ()=>this.getPos(),
            updateAttributes: (c = {})=>this.updateAttributes(c),
            deleteNode: ()=>this.deleteNode(),
            ref: ORg()
        };
        if (!this.component.displayName) {
            const c = (l)=>l.charAt(0).toUpperCase() + l.substring(1);
            this.component.displayName = c(this.extension.name);
        }
        const i = {
            onDragStart: this.onDragStart.bind(this),
            nodeViewContentRef: (c)=>{
                c && this.contentDOMElement && c.firstChild !== this.contentDOMElement && (c.hasAttribute("data-node-view-wrapper") && c.removeAttribute("data-node-view-wrapper"), c.appendChild(this.contentDOMElement));
            }
        }, r = this.component, s = FRg((c)=>ygt(Yus.Provider, {
                value: i,
                children: NRg(r, c)
            }));
        s.displayName = "ReactNodeView";
        let o = this.node.isInline ? "span" : "div";
        this.options.as && (o = this.options.as);
        const { className: a = "" } = this.options;
        this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.renderer = new Mnl(s, {
            editor: this.editor,
            props: e,
            as: o,
            className: `node-${this.node.type.name} ${a}`.trim()
        }), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.updateElementAttributes();
    }
    get dom() {
        var e;
        if (this.renderer.element.firstElementChild && !((e = this.renderer.element.firstElementChild) != null && e.hasAttribute("data-node-view-wrapper"))) throw Error("Please use the NodeViewWrapper component for your node view.");
        return this.renderer.element;
    }
    get contentDOM() {
        return this.node.isLeaf ? null : this.contentDOMElement;
    }
    handleSelectionUpdate() {
        this.selectionRafId && (cancelAnimationFrame(this.selectionRafId), this.selectionRafId = null), this.selectionRafId = requestAnimationFrame(()=>{
            this.selectionRafId = null;
            const { from: e, to: t } = this.editor.state.selection, n = this.getPos();
            if (typeof n == "number") if (e <= n && t >= n + this.node.nodeSize) {
                if (this.renderer.props.selected) return;
                this.selectNode();
            } else {
                if (!this.renderer.props.selected) return;
                this.deselectNode();
            }
        });
    }
    update(e, t, n) {
        const i = (r)=>{
            this.renderer.updateProps(r), typeof this.options.attrs == "function" && this.updateElementAttributes();
        };
        if (e.type !== this.node.type) return !1;
        if (typeof this.options.update == "function") {
            const r = this.node, s = this.decorations, o = this.innerDecorations;
            return this.node = e, this.decorations = t, this.innerDecorations = n, this.options.update({
                oldNode: r,
                oldDecorations: s,
                newNode: e,
                newDecorations: t,
                oldInnerDecorations: o,
                innerDecorations: n,
                updateProps: ()=>i({
                        node: e,
                        decorations: t,
                        innerDecorations: n
                    })
            });
        }
        return e === this.node && this.decorations === t && this.innerDecorations === n || (this.node = e, this.decorations = t, this.innerDecorations = n, i({
            node: e,
            decorations: t,
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
            let e = {};
            if (typeof this.options.attrs == "function") {
                const t = this.editor.extensionManager.attributes, n = Kyn(this.node, t);
                e = this.options.attrs({
                    node: this.node,
                    HTMLAttributes: n
                });
            } else e = this.options.attrs;
            this.renderer.updateAttributes(e);
        }
    }
};

}
