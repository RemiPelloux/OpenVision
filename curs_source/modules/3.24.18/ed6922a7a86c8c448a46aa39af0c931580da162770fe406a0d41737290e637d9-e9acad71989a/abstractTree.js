import { Cl, Ct, He, Kl, Lo, S, Se, V9, Vpi, Xm, bt, cn, nh, rn, uNt, ve, we, x7 } from "./HVr.js";
import { Zm, cm } from "./actionbar.js";
import { Vo, er } from "./actions.js";
import { hS } from "./aria.js";
import { dr } from "./arrays.js";
import { bn, xg } from "./async.js";
import { Hc } from "./autorun.js";
import { Pe, _i } from "./codicons.js";
import { MO } from "./cssValue.js";
import { en } from "./dom_2.js";
import { B7, mp } from "./event_2.js";
import { Yy, jV } from "./filters.js";
import { Hyi, r3t } from "./findInput.js";
import { Gyi } from "./indexTreeModel.js";
import { CW, OHc } from "./inputBox.js";
import { gu, jg } from "./keyboardEvent.js";
import { Kge, nKe } from "./listView.js";
import { Lbi, mR, qV } from "./listWidget.js";
import { oc, sNt } from "./map.js";
import { rt } from "./nls.js";
import { cR } from "./numbers.js";
import { qa } from "./observable.js";
import { $Hc, $f, Ekg, Eyg, Fd, Ikg, NV, Tkg, Tyg, VV, Ve, Vyi, Xt, Ye, _vn, a5e, c_n, cu, dS, fM, iRe, jy, kb, nw, o3t, r5, t8c, vvn, wFt, xkg, xw, ymt, yrs } from "./qIc.js";
import { Ft, Sr } from "./themables.js";
import { E3, e3t, uU } from "./toggle.js";
import { Ckg } from "./tree.css";
import { hU, pU, y5e } from "./tree.js";
import { x } from "./tslib.es6.js";
var HHc, WHc, jyi, Srs, Smt, GHc, krs, VHc, wrs, jHc, qHc, zHc, s6, wKe, KHc, YHc, Crs, XHc, ZHc, Trs, QHc, JHc, qyi, eWc, tWc, zyi, kmt, nWc;
export { Crs, GHc, HHc, JHc, KHc, QHc, Smt, Srs, Trs, VHc, WHc, XHc, YHc, ZHc, eWc, jHc, jyi, kmt, krs, nWc, qHc, qyi, s6, tWc, wKe, wrs, zHc, zyi };
var __wakaru_Ule_initialized = false;
export function Ule() {
if (__wakaru_Ule_initialized) return;
__wakaru_Ule_initialized = true;
"use strict";
x(), en(), nw(), MO(), B7(), jg(), Zm(), Hyi(), CW(), nKe(), qV(), uU(), Gyi(), pU(), Vo(), dr(), bn(), _i(), Sr(), oc(), bt(), Yy(), Se(), cR(), Ckg(), rt(), $f(), qa(), hS(), HHc = class extends Kge {
    constructor(e){
        super(e.elements.map((t)=>t.element)), this.data = e;
    }
    set context(e) {
        this.data.context = e;
    }
    get context() {
        return this.data.context;
    }
}, WHc = class {
    constructor(e, t){
        this.modelProvider = e, this.dnd = t, this.disposables = new He, this.autoExpandDisposable = this.disposables.add(new cn);
    }
    getDragURI(e) {
        return this.dnd.getDragURI(e.element);
    }
    getDragLabel(e, t) {
        if (this.dnd.getDragLabel) return this.dnd.getDragLabel(e.map((n)=>n.element), t);
    }
    onDragStart(e, t) {
        this.dnd.onDragStart?.(yrs(e), t);
    }
    onDragOver(e, t, n, i, r, s = !0) {
        const o = this.dnd.onDragOver(yrs(e), t && t.element, n, i, r), a = this.autoExpandNode !== t;
        if (a && (this.autoExpandDisposable.clear(), this.autoExpandNode = t), typeof t > "u") return o;
        if (a && typeof o != "boolean" && o.autoExpand && (this.autoExpandDisposable.value = Cl(()=>{
            const p = this.modelProvider(), g = p.getNodeLocation(t);
            p.isCollapsed(g) && p.setCollapsed(g, !1), this.autoExpandNode = void 0;
        }, 500)), typeof o == "boolean" || !o.accept || typeof o.bubble > "u" || o.feedback) {
            if (!s) {
                const p = typeof o == "boolean" ? o : o.accept, g = typeof o == "boolean" ? void 0 : o.effect;
                return {
                    accept: p,
                    effect: g,
                    feedback: [
                        n
                    ]
                };
            }
            return o;
        }
        if (o.bubble === 1) {
            const p = this.modelProvider(), g = p.getNodeLocation(t), f = p.getParentNodeLocation(g), v = p.getNode(f), b = f && p.getListIndex(f);
            return this.onDragOver(e, v, b, i, r, !1);
        }
        const c = this.modelProvider(), l = c.getNodeLocation(t), u = c.getListIndex(l), h = c.getListRenderCount(l);
        return {
            ...o,
            feedback: x7(u, u + h)
        };
    }
    drop(e, t, n, i, r) {
        this.autoExpandDisposable.clear(), this.autoExpandNode = void 0, this.dnd.drop(yrs(e), t && t.element, n, i, r);
    }
    onDragEnd(e) {
        this.dnd.onDragEnd?.(e);
    }
    dispose() {
        this.disposables.dispose(), this.dnd.dispose();
    }
}, jyi = class {
    constructor(e){
        this.delegate = e;
    }
    getHeight(e) {
        return this.delegate.getHeight(e.element);
    }
    getTemplateId(e) {
        return this.delegate.getTemplateId(e.element);
    }
    hasDynamicHeight(e) {
        return !!this.delegate.hasDynamicHeight && this.delegate.hasDynamicHeight(e.element);
    }
    setDynamicHeight(e, t) {
        this.delegate.setDynamicHeight?.(e.element, t);
    }
}, Srs = class k1r {
    static lift(t) {
        return t instanceof k1r ? t : new k1r(t);
    }
    static empty(t = 0) {
        return new k1r({
            focus: [],
            selection: [],
            expanded: Object.create(null),
            scrollTop: t
        });
    }
    constructor(t){
        if (this.focus = new Set(t.focus), this.selection = new Set(t.selection), t.expanded instanceof Array) {
            this.expanded = Object.create(null);
            for (const n of t.expanded)this.expanded[n] = 1;
        } else this.expanded = t.expanded;
        this.expanded = t.expanded, this.scrollTop = t.scrollTop;
    }
    toJSON() {
        return {
            focus: Array.from(this.focus),
            selection: Array.from(this.selection),
            expanded: this.expanded,
            scrollTop: this.scrollTop
        };
    }
}, Smt = ((e)=>(e.None = "none", e.OnHover = "onHover", e.Always = "always", e))(Smt || {}), GHc = class {
    constructor(e, t = []){
        this._elements = t, this.disposables = new He, this.onDidChange = Ct.forEach(e, (n)=>this._elements = n, this.disposables);
    }
    get elements() {
        return this._elements;
    }
    dispose() {
        this.disposables.dispose();
    }
}, krs = class KIa {
    constructor(t, n, i, r, s, o = {}){
        this.renderer = t, this.model = n, this.activeNodes = r, this.renderedIndentGuides = s, this.renderedElements = new Map, this.renderedNodes = new Map, this.indent = KIa.DefaultIndent, this.hideTwistiesOfChildlessElements = !1, this.shouldRenderIndentGuides = !1, this.activeIndentNodes = new Set, this.disposables = new He, this.indentGuidesDisposable = this.disposables.add(new cn), this.templateId = t.templateId, this.updateOptions(o), Ct.map(i, (a)=>a.node)(this.onDidChangeNodeTwistieState, this, this.disposables), t.onDidChangeTwistieState?.(this.onDidChangeTwistieState, this, this.disposables);
    }
    updateOptions(t = {}) {
        if (typeof t.indent < "u") {
            const n = kb(t.indent, 0, 40);
            if (n !== this.indent) {
                this.indent = n;
                for (const [i, r] of this.renderedNodes)this.renderTreeElement(i, r);
            }
        }
        if (typeof t.renderIndentGuides < "u") {
            const n = t.renderIndentGuides !== "none";
            if (n !== this.shouldRenderIndentGuides) {
                this.shouldRenderIndentGuides = n;
                for (const [i, r] of this.renderedNodes)this._renderIndentGuides(i, r);
                if (this.indentGuidesDisposable.clear(), n) {
                    const i = new He;
                    this.activeNodes.onDidChange(this._onDidChangeActiveNodes, this, i), this.indentGuidesDisposable.value = i, this._onDidChangeActiveNodes(this.activeNodes.elements);
                }
            }
        }
        typeof t.hideTwistiesOfChildlessElements < "u" && (this.hideTwistiesOfChildlessElements = t.hideTwistiesOfChildlessElements);
    }
    renderTemplate(t) {
        const n = Ye(t, Ve(".monaco-tl-row")), i = Ye(n, Ve(".monaco-tl-indent")), r = Ye(n, Ve(".monaco-tl-twistie")), s = Ye(n, Ve(".monaco-tl-contents")), o = this.renderer.renderTemplate(s);
        return {
            container: t,
            indent: i,
            twistie: r,
            indentGuidesDisposable: we.None,
            templateData: o
        };
    }
    renderElement(t, n, i, r) {
        this.renderedNodes.set(t, i), this.renderedElements.set(t.element, t), this.renderTreeElement(t, i), this.renderer.renderElement(t, n, i.templateData, r);
    }
    disposeElement(t, n, i, r) {
        i.indentGuidesDisposable.dispose(), this.renderer.disposeElement?.(t, n, i.templateData, r), typeof r == "number" && (this.renderedNodes.delete(t), this.renderedElements.delete(t.element));
    }
    disposeTemplate(t) {
        this.renderer.disposeTemplate(t.templateData);
    }
    onDidChangeTwistieState(t) {
        const n = this.renderedElements.get(t);
        n && this.onDidChangeNodeTwistieState(n);
    }
    onDidChangeNodeTwistieState(t) {
        const n = this.renderedNodes.get(t);
        n && (this._onDidChangeActiveNodes(this.activeNodes.elements), this.renderTreeElement(t, n));
    }
    renderTreeElement(t, n) {
        const i = KIa.DefaultIndent + (t.depth - 1) * this.indent;
        n.twistie.style.paddingLeft = `${i}px`, n.indent.style.width = `${i + this.indent - 16}px`, t.collapsible ? n.container.setAttribute("aria-expanded", String(!t.collapsed)) : n.container.removeAttribute("aria-expanded"), n.twistie.classList.remove(...Ft.asClassNameArray(Pe.treeItemExpanded));
        let r = !1;
        this.renderer.renderTwistie && (r = this.renderer.renderTwistie(t.element, n.twistie)), t.collapsible && (!this.hideTwistiesOfChildlessElements || t.visibleChildrenCount > 0) ? (r || n.twistie.classList.add(...Ft.asClassNameArray(Pe.treeItemExpanded)), n.twistie.classList.add("collapsible"), n.twistie.classList.toggle("collapsed", t.collapsed)) : n.twistie.classList.remove("collapsible", "collapsed"), this._renderIndentGuides(t, n);
    }
    _renderIndentGuides(t, n) {
        if (Fd(n.indent), n.indentGuidesDisposable.dispose(), !this.shouldRenderIndentGuides) return;
        const i = new He;
        for(;;){
            const r = this.model.getNodeLocation(t), s = this.model.getParentNodeLocation(r);
            if (!s) break;
            const o = this.model.getNode(s), a = Ve(".indent-guide", {
                style: `width: ${this.indent}px`
            });
            this.activeIndentNodes.has(o) && a.classList.add("active"), n.indent.childElementCount === 0 ? n.indent.appendChild(a) : n.indent.insertBefore(a, n.indent.firstElementChild), this.renderedIndentGuides.add(o, a), i.add(rn(()=>this.renderedIndentGuides.delete(o, a))), t = o;
        }
        n.indentGuidesDisposable = i;
    }
    _onDidChangeActiveNodes(t) {
        if (!this.shouldRenderIndentGuides) return;
        const n = new Set;
        t.forEach((i)=>{
            const r = this.model.getNodeLocation(i);
            try {
                const s = this.model.getParentNodeLocation(r);
                i.collapsible && i.children.length > 0 && !i.collapsed ? n.add(i) : s && n.add(this.model.getNode(s));
            } catch  {}
        }), this.activeIndentNodes.forEach((i)=>{
            n.has(i) || this.renderedIndentGuides.forEach(i, (r)=>r.classList.remove("active"));
        }), n.forEach((i)=>{
            this.activeIndentNodes.has(i) || this.renderedIndentGuides.forEach(i, (r)=>r.classList.add("active"));
        }), this.activeIndentNodes = n;
    }
    dispose() {
        this.renderedNodes.clear(), this.renderedElements.clear(), Lo(this.disposables);
    }
}, krs.DefaultIndent = 8, VHc = krs, wrs = class {
    constructor(e, t, n){
        this._keyboardNavigationLabelProvider = e, this._filter = t, this._defaultFindVisibility = n, this._totalCount = 0, this._matchCount = 0, this._findMatchType = 0, this._findMode = 0, this._pattern = "", this._lowercasePattern = "", this.disposables = new He;
    }
    get totalCount() {
        return this._totalCount;
    }
    get matchCount() {
        return this._matchCount;
    }
    set findMatchType(e) {
        this._findMatchType = e;
    }
    get findMatchType() {
        return this._findMatchType;
    }
    set findMode(e) {
        this._findMode = e;
    }
    get findMode() {
        return this._findMode;
    }
    set pattern(e) {
        this._pattern = e, this._lowercasePattern = e.toLowerCase();
    }
    filter(e, t) {
        let n = 1;
        if (this._filter) {
            const s = this._filter.filter(e, t);
            if (typeof s == "boolean" ? n = s ? 1 : 0 : c_n(s) ? n = ymt(s.visibility) : n = s, n === 0) return !1;
        }
        if (this._totalCount++, !this._pattern) return this._matchCount++, {
            data: jV.Default,
            visibility: n
        };
        const i = this._keyboardNavigationLabelProvider.getKeyboardNavigationLabel(e), r = Array.isArray(i) ? i : [
            i
        ];
        for (const s of r){
            const o = s && s.toString();
            if (typeof o > "u") return {
                data: jV.Default,
                visibility: n
            };
            let a;
            if (this._findMatchType === 1 ? a = Ekg(this._lowercasePattern, o.toLowerCase()) : a = a5e(this._pattern, this._lowercasePattern, 0, o, o.toLowerCase(), 0, {
                firstMatchCanBeWeak: !0,
                boostFullMatch: !0
            }), a) return this._matchCount++, r.length === 1 ? {
                data: a,
                visibility: n
            } : {
                data: {
                    label: o,
                    score: a
                },
                visibility: n
            };
        }
        return this._findMode === 1 ? typeof this._defaultFindVisibility == "number" ? this._defaultFindVisibility : this._defaultFindVisibility ? this._defaultFindVisibility(e) : 2 : {
            data: jV.Default,
            visibility: n
        };
    }
    reset() {
        this._totalCount = 0, this._matchCount = 0;
    }
    dispose() {
        Lo(this.disposables);
    }
}, jHc = class extends E3 {
    constructor(e, t, n){
        super({
            icon: e.icon,
            title: e.title,
            isChecked: e.isChecked,
            inputActiveOptionBorder: t.inputActiveOptionBorder,
            inputActiveOptionForeground: t.inputActiveOptionForeground,
            inputActiveOptionBackground: t.inputActiveOptionBackground,
            hoverDelegate: n
        }), this.id = e.id;
    }
}, qHc = class {
    constructor(e){
        this.stateMap = new Map(e.map((t)=>[
                t.id,
                {
                    ...t
                }
            ]));
    }
    states() {
        return Array.from(this.stateMap.values());
    }
    get(e) {
        const t = this.stateMap.get(e);
        if (t === void 0) throw new Error(`No state found for toggle id ${e}`);
        return t.isChecked;
    }
    set(e, t) {
        const n = this.stateMap.get(e);
        if (n === void 0) throw new Error(`No state found for toggle id ${e}`);
        return n.isChecked === t ? !1 : (n.isChecked = t, !0);
    }
}, zHc = {
    inputBoxStyles: OHc,
    toggleStyles: e3t,
    listFilterWidgetBackground: void 0,
    listFilterWidgetNoMatchesOutline: void 0,
    listFilterWidgetOutline: void 0,
    listFilterWidgetShadow: void 0
}, s6 = ((e)=>(e[e.Highlight = 0] = "Highlight", e[e.Filter = 1] = "Filter", e))(s6 || {}), wKe = ((e)=>(e[e.Fuzzy = 0] = "Fuzzy", e[e.Contiguous = 1] = "Contiguous", e))(wKe || {}), KHc = class extends we {
    constructor(e, t, n, i, r = [], s){
        super(), this.tree = t, this.elements = cu(".monaco-tree-type-filter", [
            cu(".monaco-tree-type-filter-input@findInput"),
            cu(".monaco-tree-type-filter-actionbar@actionbar")
        ]), this.toggles = [], this._onDidDisable = this._register(new ve), this.onDidDisable = this._onDidDisable.event, e.appendChild(this.elements.root), this._register(rn(()=>this.elements.root.remove()));
        const o = s?.styles ?? zHc;
        o.listFilterWidgetBackground && (this.elements.root.style.backgroundColor = o.listFilterWidgetBackground), o.listFilterWidgetShadow && (this.elements.root.style.boxShadow = `0 0 8px 2px ${o.listFilterWidgetShadow}`);
        const a = this._register(VV());
        this.toggles = r.map((p)=>this._register(new jHc(p, o.toggleStyles, a))), this.onDidToggleChange = Ct.any(...this.toggles.map((p)=>Ct.map(p.onChange, ()=>({
                    id: p.id,
                    isChecked: p.checked
                }))));
        const c = s?.history || [];
        this.findInput = this._register(new r3t(this.elements.findInput, n, {
            label: S(31, null),
            placeholder: i,
            additionalToggles: this.toggles,
            showCommonFindToggles: !1,
            inputBoxStyles: o.inputBoxStyles,
            toggleStyles: o.toggleStyles,
            history: new Set(c)
        })), this.actionbar = this._register(new cm(this.elements.actionbar));
        const l = this._register(new mp(this.findInput.inputBox.inputElement, "keydown")), u = Ct.chain(l.event, (p)=>p.map((g)=>new gu(g)));
        this._register(u((p)=>{
            if (p.equals(3)) {
                p.preventDefault(), p.stopPropagation(), this.findInput.inputBox.addToHistory(), this.tree.domFocus();
                return;
            }
            if (p.equals(18)) {
                p.preventDefault(), p.stopPropagation(), this.findInput.inputBox.isAtLastInHistory() || this.findInput.inputBox.isNowhereInHistory() ? (this.findInput.inputBox.addToHistory(), this.tree.domFocus()) : this.findInput.inputBox.showNextValue();
                return;
            }
            if (p.equals(16)) {
                p.preventDefault(), p.stopPropagation(), this.findInput.inputBox.showPreviousValue();
                return;
            }
        }));
        const h = this._register(new er("close", S(32, null), "codicon codicon-close", !0, ()=>this.dispose()));
        this.actionbar.push(h, {
            icon: !0,
            label: !1
        }), this.onDidChangeValue = this.findInput.onDidChange;
    }
    get value() {
        return this.findInput.inputBox.value;
    }
    set value(e) {
        this.findInput.inputBox.value = e;
    }
    setToggleState(e, t) {
        const n = this.toggles.find((i)=>i.id === e);
        n && (n.checked = t);
    }
    setPlaceHolder(e) {
        this.findInput.inputBox.setPlaceHolder(e);
    }
    getHistory() {
        return this.findInput.inputBox.getHistory();
    }
    focus() {
        this.findInput.focus();
    }
    select() {
        this.findInput.select(), this.findInput.inputBox.addToHistory(!0);
    }
    showMessage(e) {
        this.findInput.showMessage(e);
    }
    clearMessage() {
        this.findInput.clearMessage();
    }
    async dispose() {
        this._onDidDisable.fire(), this.elements.root.classList.add("disabled"), await Kl(300), super.dispose();
    }
}, YHc = class {
    constructor(e, t, n, i = {}){
        this.tree = e, this.filter = t, this.contextViewProvider = n, this.options = i, this._pattern = "", this.previousPattern = "", this._onDidChangePattern = new ve, this.onDidChangePattern = this._onDidChangePattern.event, this._onDidChangeOpenState = new ve, this.onDidChangeOpenState = this._onDidChangeOpenState.event, this.enabledDisposables = new He, this.disposables = new He, this.toggles = new qHc(i.toggles ?? []), this._placeholder = i.placeholder ?? S(33, null);
    }
    get pattern() {
        return this._pattern;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(e) {
        this._placeholder = e, this.widget?.setPlaceHolder(e);
    }
    isOpened() {
        return !!this.widget;
    }
    open() {
        if (this.widget) {
            this.widget.focus(), this.widget.select();
            return;
        }
        this.tree.updateOptions({
            paddingTop: 30
        }), this.widget = new KHc(this.tree.getHTMLElement(), this.tree, this.contextViewProvider, this.placeholder, this.toggles.states(), {
            ...this.options,
            history: this._history
        }), this.enabledDisposables.add(this.widget), this.widget.onDidChangeValue(this.onDidChangeValue, this, this.enabledDisposables), this.widget.onDidDisable(this.close, this, this.enabledDisposables), this.widget.onDidToggleChange(this.onDidToggleChange, this, this.enabledDisposables), this.widget.focus(), this.widget.value = this.previousPattern, this.widget.select(), this._onDidChangeOpenState.fire(!0);
    }
    close() {
        this.widget && (this.tree.updateOptions({
            paddingTop: 0
        }), this._history = this.widget.getHistory(), this.widget = void 0, this.enabledDisposables.clear(), this.previousPattern = this.pattern, this.onDidChangeValue(""), this.tree.domFocus(), this._onDidChangeOpenState.fire(!1));
    }
    onDidChangeValue(e) {
        this._pattern = e, this._onDidChangePattern.fire(e), this.filter.pattern = e, this.applyPattern(e);
    }
    onDidToggleChange(e) {
        this.toggles.set(e.id, e.isChecked);
    }
    updateToggleState(e, t) {
        this.toggles.set(e, t), this.widget?.setToggleState(e, t);
    }
    renderMessage(e, t) {
        e ? this.tree.options.showNotFoundMessage ?? !0 ? this.widget?.showMessage({
            type: 2,
            content: t ?? S(34, null)
        }) : this.widget?.showMessage({
            type: 2
        }) : this.widget?.clearMessage();
    }
    alertResults(e) {
        jy(e ? S(36, null, e) : S(35, null));
    }
    dispose() {
        this._history = void 0, this._onDidChangePattern.dispose(), this.enabledDisposables.dispose(), this.disposables.dispose();
    }
}, Crs = class extends YHc {
    constructor(e, t, n, i = {}){
        const r = i.defaultFindMode ?? 0, s = i.defaultFindMatchType ?? 0, o = [
            {
                id: "mode",
                icon: Pe.listFilter,
                title: S(39, null),
                isChecked: r === 1
            },
            {
                id: "matchType",
                icon: Pe.searchFuzzy,
                title: S(40, null),
                isChecked: s === 0
            }
        ];
        t.findMatchType = s, t.findMode = r, super(e, t, n, {
            ...i,
            toggles: o
        }), this.filter = t, this._onDidChangeMode = new ve, this.onDidChangeMode = this._onDidChangeMode.event, this._onDidChangeMatchType = new ve, this.onDidChangeMatchType = this._onDidChangeMatchType.event, this.disposables.add(this.tree.onDidChangeModel(()=>{
            this.isOpened() && (this.pattern.length !== 0 && this.tree.refilter(), this.render());
        })), this.disposables.add(this.tree.onWillRefilter(()=>this.filter.reset()));
    }
    get mode() {
        return this.toggles.get("mode") ? 1 : 0;
    }
    set mode(e) {
        if (e === this.mode) return;
        const t = e === 1;
        this.updateToggleState("mode", t), this.placeholder = S(t ? 37 : 38, null), this.filter.findMode = e, this.tree.refilter(), this.render(), this._onDidChangeMode.fire(e);
    }
    get matchType() {
        return this.toggles.get("matchType") ? 0 : 1;
    }
    set matchType(e) {
        e !== this.matchType && (this.updateToggleState("matchType", e === 0), this.filter.findMatchType = e, this.tree.refilter(), this.render(), this._onDidChangeMatchType.fire(e));
    }
    updateOptions(e = {}) {
        e.defaultFindMode !== void 0 && (this.mode = e.defaultFindMode), e.defaultFindMatchType !== void 0 && (this.matchType = e.defaultFindMatchType);
    }
    applyPattern(e) {
        this.tree.refilter(), e && this.tree.focusNext(0, !0, void 0, (n)=>!jV.isDefault(n.filterData));
        const t = this.tree.getFocus();
        if (t.length > 0) {
            const n = t[0];
            this.tree.getRelativeTop(n) === null && this.tree.reveal(n, .5);
        }
        this.render();
    }
    shouldAllowFocus(e) {
        return !this.isOpened() || !this.pattern || this.filter.totalCount > 0 && this.filter.matchCount <= 1 ? !0 : !jV.isDefault(e.filterData);
    }
    onDidToggleChange(e) {
        e.id === "mode" ? this.mode = e.isChecked ? 1 : 0 : e.id === "matchType" && (this.matchType = e.isChecked ? 0 : 1);
    }
    render() {
        const t = this.filter.matchCount === 0 && this.filter.totalCount > 0 && this.pattern.length > 0;
        this.renderMessage(t), this.pattern.length && this.alertResults(this.filter.matchCount);
    }
}, XHc = class {
    constructor(e = []){
        this.stickyNodes = e;
    }
    get count() {
        return this.stickyNodes.length;
    }
    equal(e) {
        return nh(this.stickyNodes, e.stickyNodes, xkg);
    }
    contains(e) {
        return this.stickyNodes.some((t)=>t.node.element === e.element);
    }
    lastNodePartiallyVisible() {
        if (this.count === 0) return !1;
        const e = this.stickyNodes[this.count - 1];
        if (this.count === 1) return e.position !== 0;
        const t = this.stickyNodes[this.count - 2];
        return t.position + t.height !== e.position;
    }
    animationStateChanged(e) {
        if (!nh(this.stickyNodes, e.stickyNodes, $Hc) || this.count === 0) return !1;
        const t = this.stickyNodes[this.count - 1], n = e.stickyNodes[e.count - 1];
        return t.position !== n.position;
    }
}, ZHc = class {
    constrainStickyScrollNodes(e, t, n) {
        for(let i = 0; i < e.length; i++){
            const r = e[i];
            if (r.position + r.height > n || i >= t) return e.slice(0, i);
        }
        return e;
    }
}, Trs = class extends we {
    constructor(e, t, n, i, r, s = {}){
        super(), this.tree = e, this.model = t, this.view = n, this.treeDelegate = r, this.maxWidgetViewRatio = .4;
        const o = this.validateStickySettings(s);
        this.stickyScrollMaxItemCount = o.stickyScrollMaxItemCount, this.stickyScrollDelegate = s.stickyScrollDelegate ?? new ZHc, this.paddingTop = s.paddingTop ?? 0, this._widget = this._register(new QHc(n.getScrollableElement(), n, e, i, r, s.accessibilityProvider)), this.onDidChangeHasFocus = this._widget.onDidChangeHasFocus, this.onContextMenu = this._widget.onContextMenu, this._register(n.onDidScroll(()=>this.update())), this._register(n.onDidChangeContentHeight(()=>this.update())), this._register(e.onDidChangeCollapseState(()=>this.update())), this._register(t.onDidSpliceRenderedNodes((a)=>{
            const c = this._widget.state;
            if (!c) return;
            if (a.deleteCount > 0 && c.stickyNodes.some((h)=>!this.model.has(this.model.getNodeLocation(h.node)))) {
                this.update();
                return;
            }
            c.stickyNodes.some((h)=>{
                const p = this.model.getListIndex(this.model.getNodeLocation(h.node));
                return p >= a.start && p < a.start + a.deleteCount && c.contains(h.node);
            }) && this._widget.rerender();
        })), this.update();
    }
    get height() {
        return this._widget.height;
    }
    get count() {
        return this._widget.count;
    }
    getNode(e) {
        return this._widget.getNode(e);
    }
    getNodeAtHeight(e) {
        let t;
        if (e === 0 ? t = this.view.firstVisibleIndex : t = this.view.indexAt(e + this.view.scrollTop), !(t < 0 || t >= this.view.length)) return this.view.element(t);
    }
    update() {
        const e = this.getNodeAtHeight(this.paddingTop);
        if (!e || this.tree.scrollTop <= this.paddingTop) {
            this._widget.setState(void 0);
            return;
        }
        const t = this.findStickyState(e);
        this._widget.setState(t);
    }
    findStickyState(e) {
        const t = [];
        let n = e, i = 0, r = this.getNextStickyNode(n, void 0, i);
        for(; r && (t.push(r), i += r.height, !(t.length <= this.stickyScrollMaxItemCount && (n = this.getNextVisibleNode(r), !n)));)r = this.getNextStickyNode(n, r.node, i);
        const s = this.constrainStickyNodes(t);
        return s.length ? new XHc(s) : void 0;
    }
    getNextVisibleNode(e) {
        return this.getNodeAtHeight(e.position + e.height);
    }
    getNextStickyNode(e, t, n) {
        const i = this.getAncestorUnderPrevious(e, t);
        if (i && !(i === e && (!this.nodeIsUncollapsedParent(e) || this.nodeTopAlignsWithStickyNodesBottom(e, n)))) return this.createStickyScrollNode(i, n);
    }
    nodeTopAlignsWithStickyNodesBottom(e, t) {
        const n = this.getNodeIndex(e), i = this.view.getElementTop(n), r = t;
        return this.view.scrollTop === i - r;
    }
    createStickyScrollNode(e, t) {
        const n = this.treeDelegate.getHeight(e), { startIndex: i, endIndex: r } = this.getNodeRange(e), s = this.calculateStickyNodePosition(r, t, n);
        return {
            node: e,
            position: s,
            height: n,
            startIndex: i,
            endIndex: r
        };
    }
    getAncestorUnderPrevious(e, t = void 0) {
        let n = e, i = this.getParentNode(n);
        for(; i;){
            if (i === t) return n;
            n = i, i = this.getParentNode(n);
        }
        if (t === void 0) return n;
    }
    calculateStickyNodePosition(e, t, n) {
        let i = this.view.getRelativeTop(e);
        if (i === null && this.view.firstVisibleIndex === e && e + 1 < this.view.length) {
            const c = this.treeDelegate.getHeight(this.view.element(e)), l = this.view.getRelativeTop(e + 1);
            i = l ? l - c / this.view.renderHeight : null;
        }
        if (i === null) return t;
        const r = this.view.element(e), s = this.treeDelegate.getHeight(r), a = i * this.view.renderHeight + s;
        return t + n > a && t <= a ? a - n : t;
    }
    constrainStickyNodes(e) {
        if (e.length === 0) return [];
        const t = this.view.renderHeight * this.maxWidgetViewRatio, n = e[e.length - 1];
        if (e.length <= this.stickyScrollMaxItemCount && n.position + n.height <= t) return e;
        const i = this.stickyScrollDelegate.constrainStickyScrollNodes(e, this.stickyScrollMaxItemCount, t);
        if (!i.length) return [];
        const r = i[i.length - 1];
        if (i.length > this.stickyScrollMaxItemCount || r.position + r.height > t) throw new Error("stickyScrollDelegate violates constraints");
        return i;
    }
    getParentNode(e) {
        const t = this.model.getNodeLocation(e), n = this.model.getParentNodeLocation(t);
        return n ? this.model.getNode(n) : void 0;
    }
    nodeIsUncollapsedParent(e) {
        const t = this.model.getNodeLocation(e);
        return this.model.getListRenderCount(t) > 1;
    }
    getNodeIndex(e) {
        const t = this.model.getNodeLocation(e);
        return this.model.getListIndex(t);
    }
    getNodeRange(e) {
        const t = this.model.getNodeLocation(e), n = this.model.getListIndex(t);
        if (n < 0) throw new Error("Node not found in tree");
        const i = this.model.getListRenderCount(t), r = n + i - 1;
        return {
            startIndex: n,
            endIndex: r
        };
    }
    nodePositionTopBelowWidget(e) {
        const t = [];
        let n = this.getParentNode(e);
        for(; n;)t.push(n), n = this.getParentNode(n);
        let i = 0;
        for(let r = 0; r < t.length && r < this.stickyScrollMaxItemCount; r++)i += this.treeDelegate.getHeight(t[r]);
        return i;
    }
    getFocus() {
        return this._widget.getFocus();
    }
    domFocus() {
        this._widget.domFocus();
    }
    focusedLast() {
        return this._widget.focusedLast();
    }
    updateOptions(e = {}) {
        if (e.paddingTop !== void 0 && (this.paddingTop = e.paddingTop), e.stickyScrollMaxItemCount !== void 0) {
            const t = this.validateStickySettings(e);
            this.stickyScrollMaxItemCount !== t.stickyScrollMaxItemCount && (this.stickyScrollMaxItemCount = t.stickyScrollMaxItemCount, this.update());
        }
    }
    validateStickySettings(e) {
        let t = 7;
        return typeof e.stickyScrollMaxItemCount == "number" && (t = Math.max(e.stickyScrollMaxItemCount, 1)), {
            stickyScrollMaxItemCount: t
        };
    }
    setModel(e) {
        this.model = e;
    }
}, QHc = class {
    constructor(e, t, n, i, r, s){
        this.view = t, this.tree = n, this.treeRenderers = i, this.treeDelegate = r, this.accessibilityProvider = s, this._previousElements = [], this._previousStateDisposables = new He, this._rootDomNode = Ve(".monaco-tree-sticky-container.empty"), e.appendChild(this._rootDomNode);
        const o = Ve(".monaco-tree-sticky-container-shadow");
        this._rootDomNode.appendChild(o), this.stickyScrollFocus = new JHc(this._rootDomNode, t), this.onDidChangeHasFocus = this.stickyScrollFocus.onDidChangeHasFocus, this.onContextMenu = this.stickyScrollFocus.onContextMenu;
    }
    get state() {
        return this._previousState;
    }
    get height() {
        if (!this._previousState) return 0;
        const e = this._previousState.stickyNodes[this._previousState.count - 1];
        return e.position + e.height;
    }
    get count() {
        return this._previousState?.count ?? 0;
    }
    getNode(e) {
        return this._previousState?.stickyNodes.find((t)=>t.node === e);
    }
    setState(e) {
        const t = !!this._previousState && this._previousState.count > 0, n = !!e && e.count > 0;
        if (!t && !n || t && n && this._previousState.equal(e)) return;
        if (t !== n && this.setVisible(n), !n) {
            this._previousState = void 0, this._previousElements = [], this._previousStateDisposables.clear();
            return;
        }
        const i = e.stickyNodes[e.count - 1];
        this._previousState && e.animationStateChanged(this._previousState) ? this._previousElements[this._previousState.count - 1].style.top = `${i.position}px` : this.renderState(e), this._previousState = e, this._rootDomNode.style.height = `${i.position + i.height}px`;
    }
    renderState(e) {
        this._previousStateDisposables.clear();
        const t = Array(e.count);
        for(let n = e.count - 1; n >= 0; n--){
            const i = e.stickyNodes[n], { element: r, disposable: s } = this.createElement(i, n, e.count);
            t[n] = r, this._rootDomNode.appendChild(r), this._previousStateDisposables.add(s);
        }
        this.stickyScrollFocus.updateElements(t, e), this._previousElements = t;
    }
    rerender() {
        this._previousState && this.renderState(this._previousState);
    }
    createElement(e, t, n) {
        const i = e.startIndex, r = document.createElement("div");
        r.style.top = `${e.position}px`, this.tree.options.setRowHeight !== !1 && (r.style.height = `${e.height}px`), this.tree.options.setRowLineHeight !== !1 && (r.style.lineHeight = `${e.height}px`), r.classList.add("monaco-tree-sticky-row"), r.classList.add("monaco-list-row"), r.setAttribute("data-index", `${i}`), r.setAttribute("data-parity", i % 2 === 0 ? "even" : "odd"), r.setAttribute("id", this.view.getElementID(i));
        const s = this.setAccessibilityAttributes(r, e.node.element, t, n), o = this.treeDelegate.getTemplateId(e.node), a = this.treeRenderers.find((h)=>h.templateId === o);
        if (!a) throw new Error(`No renderer found for template id ${o}`);
        let c = e.node;
        c === this.tree.getNode(this.tree.getNodeLocation(e.node)) && (c = new Proxy(e.node, {}));
        const l = a.renderTemplate(r);
        a.renderElement(c, e.startIndex, l, e.height);
        const u = rn(()=>{
            s.dispose(), a.disposeElement(c, e.startIndex, l, e.height), a.disposeTemplate(l), r.remove();
        });
        return {
            element: r,
            disposable: u
        };
    }
    setAccessibilityAttributes(e, t, n, i) {
        if (!this.accessibilityProvider) return we.None;
        this.accessibilityProvider.getSetSize && e.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(t, n, i))), this.accessibilityProvider.getPosInSet && e.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(t, n))), this.accessibilityProvider.getRole && e.setAttribute("role", this.accessibilityProvider.getRole(t) ?? "treeitem");
        const r = this.accessibilityProvider.getAriaLabel(t), s = r && typeof r != "string" ? r : xw(r), o = Hc((c)=>{
            const l = c.readObservable(s);
            l ? e.setAttribute("aria-label", l) : e.removeAttribute("aria-label");
        });
        typeof r == "string" || r && e.setAttribute("aria-label", r.get());
        const a = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(t);
        return typeof a == "number" && e.setAttribute("aria-level", `${a}`), e.setAttribute("aria-selected", String(!1)), o;
    }
    setVisible(e) {
        this._rootDomNode.classList.toggle("empty", !e), e || this.stickyScrollFocus.updateElements([], void 0);
    }
    getFocus() {
        return this.stickyScrollFocus.getFocus();
    }
    domFocus() {
        this.stickyScrollFocus.domFocus();
    }
    focusedLast() {
        return this.stickyScrollFocus.focusedLast();
    }
    dispose() {
        this.stickyScrollFocus.dispose(), this._previousStateDisposables.dispose(), this._rootDomNode.remove();
    }
}, JHc = class extends we {
    constructor(e, t){
        super(), this.container = e, this.view = t, this.focusedIndex = -1, this.elements = [], this._onDidChangeHasFocus = this._register(new ve), this.onDidChangeHasFocus = this._onDidChangeHasFocus.event, this._onContextMenu = this._register(new ve), this.onContextMenu = this._onContextMenu.event, this._domHasFocus = !1, this._register(Xt(this.container, "focus", ()=>this.onFocus())), this._register(Xt(this.container, "blur", ()=>this.onBlur())), this._register(this.view.onDidFocus(()=>this.toggleStickyScrollFocused(!1))), this._register(this.view.onKeyDown((n)=>this.onKeyDown(n))), this._register(this.view.onMouseDown((n)=>this.onMouseDown(n))), this._register(this.view.onContextMenu((n)=>this.handleContextMenu(n)));
    }
    get domHasFocus() {
        return this._domHasFocus;
    }
    set domHasFocus(e) {
        e !== this._domHasFocus && (this._onDidChangeHasFocus.fire(e), this._domHasFocus = e);
    }
    handleContextMenu(e) {
        const t = e.browserEvent.target;
        if (!_vn(t) && !vvn(t)) {
            this.focusedLast() && this.view.domFocus();
            return;
        }
        if (!NV(e.browserEvent)) {
            if (!this.state) throw new Error("Context menu should not be triggered when state is undefined");
            const s = this.state.stickyNodes.findIndex((o)=>o.node.element === e.element?.element);
            if (s === -1) throw new Error("Context menu should not be triggered when element is not in sticky scroll widget");
            this.container.focus(), this.setFocus(s);
            return;
        }
        if (!this.state || this.focusedIndex < 0) throw new Error("Context menu key should not be triggered when focus is not in sticky scroll widget");
        const i = this.state.stickyNodes[this.focusedIndex].node.element, r = this.elements[this.focusedIndex];
        this._onContextMenu.fire({
            element: i,
            anchor: r,
            browserEvent: e.browserEvent,
            isStickyScroll: !0
        });
    }
    onKeyDown(e) {
        if (this.domHasFocus && this.state) {
            if (e.key === "ArrowUp") this.setFocusedElement(Math.max(0, this.focusedIndex - 1)), e.preventDefault(), e.stopPropagation();
            else if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                if (this.focusedIndex >= this.state.count - 1) {
                    const t = this.state.stickyNodes[this.state.count - 1].startIndex + 1;
                    this.view.domFocus(), this.view.setFocus([
                        t
                    ]), this.scrollNodeUnderWidget(t, this.state);
                } else this.setFocusedElement(this.focusedIndex + 1);
                e.preventDefault(), e.stopPropagation();
            }
        }
    }
    onMouseDown(e) {
        const t = e.browserEvent.target;
        !_vn(t) && !vvn(t) || (e.browserEvent.preventDefault(), e.browserEvent.stopPropagation());
    }
    updateElements(e, t) {
        if (t && t.count === 0) throw new Error("Sticky scroll state must be undefined when there are no sticky nodes");
        if (t && t.count !== e.length) throw new Error("Sticky scroll focus received illigel state");
        const n = this.focusedIndex;
        if (this.removeFocus(), this.elements = e, this.state = t, t) {
            const i = kb(n, 0, t.count - 1);
            this.setFocus(i);
        } else this.domHasFocus && this.view.domFocus();
        this.container.tabIndex = t ? 0 : -1;
    }
    setFocusedElement(e) {
        const t = this.state;
        if (!t) throw new Error("Cannot set focus when state is undefined");
        if (this.setFocus(e), !(e < t.count - 1) && t.lastNodePartiallyVisible()) {
            const n = t.stickyNodes[e];
            this.scrollNodeUnderWidget(n.endIndex + 1, t);
        }
    }
    scrollNodeUnderWidget(e, t) {
        const n = t.stickyNodes[t.count - 1], i = t.count > 1 ? t.stickyNodes[t.count - 2] : void 0, r = this.view.getElementTop(e), s = i ? i.position + i.height + n.height : n.height;
        this.view.scrollTop = r - s;
    }
    getFocus() {
        if (!(!this.state || this.focusedIndex === -1)) return this.state.stickyNodes[this.focusedIndex].node.element;
    }
    domFocus() {
        if (!this.state) throw new Error("Cannot focus when state is undefined");
        this.container.focus();
    }
    focusedLast() {
        return this.state ? this.view.getHTMLElement().classList.contains("sticky-scroll-focused") : !1;
    }
    removeFocus() {
        this.focusedIndex !== -1 && (this.toggleElementFocus(this.elements[this.focusedIndex], !1), this.focusedIndex = -1);
    }
    setFocus(e) {
        if (0 > e) throw new Error("addFocus() can not remove focus");
        if (!this.state && e >= 0) throw new Error("Cannot set focus index when state is undefined");
        if (this.state && e >= this.state.count) throw new Error("Cannot set focus index to an index that does not exist");
        const t = this.focusedIndex;
        t >= 0 && this.toggleElementFocus(this.elements[t], !1), e >= 0 && this.toggleElementFocus(this.elements[e], !0), this.focusedIndex = e;
    }
    toggleElementFocus(e, t) {
        this.toggleElementActiveFocus(e, t && this.domHasFocus), this.toggleElementPassiveFocus(e, t);
    }
    toggleCurrentElementActiveFocus(e) {
        this.focusedIndex !== -1 && this.toggleElementActiveFocus(this.elements[this.focusedIndex], e);
    }
    toggleElementActiveFocus(e, t) {
        e.classList.toggle("focused", t);
    }
    toggleElementPassiveFocus(e, t) {
        e.classList.toggle("passive-focused", t);
    }
    toggleStickyScrollFocused(e) {
        this.view.getHTMLElement().classList.toggle("sticky-scroll-focused", e);
    }
    onFocus() {
        if (!this.state || this.elements.length === 0) throw new Error("Cannot focus when state is undefined or elements are empty");
        this.domHasFocus = !0, this.toggleStickyScrollFocused(!0), this.toggleCurrentElementActiveFocus(!0), this.focusedIndex === -1 && this.setFocus(0);
    }
    onBlur() {
        this.domHasFocus = !1, this.toggleCurrentElementActiveFocus(!1);
    }
    dispose() {
        this.toggleStickyScrollFocused(!1), this._onDidChangeHasFocus.fire(!1), super.dispose();
    }
}, qyi = class {
    constructor(e, t){
        this.getFirstViewElementWithTrait = e, this.identityProvider = t, this.nodes = [], this._onDidChange = new ve, this.onDidChange = this._onDidChange.event;
    }
    get nodeSet() {
        return this._nodeSet || (this._nodeSet = this.createNodeSet()), this._nodeSet;
    }
    set(e, t) {
        !t?.__forceEvent && nh(this.nodes, e) || this._set(e, !1, t);
    }
    _set(e, t, n) {
        if (this.nodes = [
            ...e
        ], this.elements = void 0, this._nodeSet = void 0, !t) {
            const i = this;
            this._onDidChange.fire({
                get elements () {
                    return i.get();
                },
                browserEvent: n
            });
        }
    }
    get() {
        return this.elements || (this.elements = this.nodes.map((e)=>e.element)), [
            ...this.elements
        ];
    }
    getNodes() {
        return this.nodes;
    }
    has(e) {
        return this.nodeSet.has(e);
    }
    onDidModelSplice({ insertedNodes: e, deletedNodes: t }) {
        if (!this.identityProvider) {
            const a = this.createNodeSet(), c = (l)=>a.delete(l);
            t.forEach((l)=>Vyi(l, c)), this.set([
                ...a.values()
            ]);
            return;
        }
        const n = new Set, i = (a)=>n.add(this.identityProvider.getId(a.element).toString());
        t.forEach((a)=>Vyi(a, i));
        const r = new Map, s = (a)=>r.set(this.identityProvider.getId(a.element).toString(), a);
        e.forEach((a)=>Vyi(a, s));
        const o = [];
        for (const a of this.nodes){
            const c = this.identityProvider.getId(a.element).toString();
            if (!n.has(c)) o.push(a);
            else {
                const u = r.get(c);
                u && u.visible && o.push(u);
            }
        }
        if (this.nodes.length > 0 && o.length === 0) {
            const a = this.getFirstViewElementWithTrait();
            a && o.push(a);
        }
        this._set(o, !0);
    }
    createNodeSet() {
        const e = new Set;
        for (const t of this.nodes)e.add(t);
        return e;
    }
}, eWc = class extends Lbi {
    constructor(e, t, n){
        super(e), this.tree = t, this.stickyScrollProvider = n;
    }
    onViewPointer(e) {
        if (t8c(e.browserEvent.target) || r5(e.browserEvent.target) || wFt(e.browserEvent.target) || e.browserEvent.isHandledByList) return;
        const t = e.element;
        if (!t) return super.onViewPointer(e);
        if (this.isSelectionRangeChangeEvent(e) || this.isSelectionSingleChangeEvent(e)) return super.onViewPointer(e);
        const n = e.browserEvent.target, i = n.classList.contains("monaco-tl-twistie") || n.classList.contains("monaco-icon-label") && n.classList.contains("folder-icon") && e.browserEvent.offsetX < 16, r = vvn(e.browserEvent.target);
        let s = !1;
        if (r ? s = !0 : typeof this.tree.expandOnlyOnTwistieClick == "function" ? s = this.tree.expandOnlyOnTwistieClick(t.element) : s = !!this.tree.expandOnlyOnTwistieClick, r) this.handleStickyScrollMouseEvent(e, t);
        else {
            if (s && !i && e.browserEvent.detail !== 2) return super.onViewPointer(e);
            if (!this.tree.expandOnDoubleClick && e.browserEvent.detail === 2) return super.onViewPointer(e);
        }
        if (t.collapsible && (!r || i)) {
            const o = this.tree.getNodeLocation(t), a = e.browserEvent.altKey;
            if (this.tree.setFocus([
                o
            ]), this.tree.toggleCollapsed(o, a), i) {
                e.browserEvent.isHandledByList = !0;
                return;
            }
        }
        r || super.onViewPointer(e);
    }
    handleStickyScrollMouseEvent(e, t) {
        if (Tyg(e.browserEvent.target) || Eyg(e.browserEvent.target)) return;
        const n = this.stickyScrollProvider();
        if (!n) throw new Error("Sticky scroll controller not found");
        const i = this.list.indexOf(t), r = this.list.getElementTop(i), s = n.nodePositionTopBelowWidget(t);
        this.tree.scrollTop = r - s, this.list.domFocus(), this.list.setFocus([
            i
        ]), this.list.setSelection([
            i
        ]);
    }
    onDoubleClick(e) {
        e.browserEvent.target.classList.contains("monaco-tl-twistie") || !this.tree.expandOnDoubleClick || e.browserEvent.isHandledByList || super.onDoubleClick(e);
    }
    onMouseDown(e) {
        const t = e.browserEvent.target;
        if (!_vn(t) && !vvn(t)) {
            super.onMouseDown(e);
            return;
        }
    }
    onContextMenu(e) {
        const t = e.browserEvent.target;
        if (!_vn(t) && !vvn(t)) {
            super.onContextMenu(e);
            return;
        }
    }
}, tWc = class extends mR {
    constructor(e, t, n, i, r, s, o, a){
        super(e, t, n, i, a), this.focusTrait = r, this.selectionTrait = s, this.anchorTrait = o;
    }
    createMouseController(e) {
        return new eWc(this, e.tree, e.stickyScrollProvider);
    }
    splice(e, t, n = []) {
        if (super.splice(e, t, n), n.length === 0) return;
        const i = [], r = [];
        let s;
        n.forEach((o, a)=>{
            this.focusTrait.has(o) && i.push(e + a), this.selectionTrait.has(o) && r.push(e + a), this.anchorTrait.has(o) && (s = e + a);
        }), i.length > 0 && super.setFocus(Xm([
            ...super.getFocus(),
            ...i
        ])), r.length > 0 && super.setSelection(Xm([
            ...super.getSelection(),
            ...r
        ])), typeof s == "number" && super.setAnchor(s);
    }
    setFocus(e, t, n = !1) {
        super.setFocus(e, t), n || this.focusTrait.set(e.map((i)=>this.element(i)), t);
    }
    setSelection(e, t, n = !1) {
        super.setSelection(e, t), n || this.selectionTrait.set(e.map((i)=>this.element(i)), t);
    }
    setAnchor(e, t = !1) {
        super.setAnchor(e), t || (typeof e > "u" ? this.anchorTrait.set([]) : this.anchorTrait.set([
            this.element(e)
        ]));
    }
}, zyi = ((e)=>(e[e.Tree = 0] = "Tree", e[e.StickyScroll = 1] = "StickyScroll", e))(zyi || {}), kmt = class {
    constructor(e, t, n, i, r = {}){
        this._user = e, this._options = r, this.eventBufferer = new uNt, this.onDidChangeFindOpenState = Ct.None, this.onDidChangeStickyScrollFocused = Ct.None, this.disposables = new He, this.onDidSwapModel = this.disposables.add(new ve), this.onDidChangeModelRelay = this.disposables.add(new V9), this.onDidSpliceModelRelay = this.disposables.add(new V9), this.onDidChangeCollapseStateRelay = this.disposables.add(new V9), this.onDidChangeRenderNodeCountRelay = this.disposables.add(new V9), this.onDidChangeActiveNodesRelay = this.disposables.add(new V9), this._onWillRefilter = new ve, this.onWillRefilter = this._onWillRefilter.event, this._onDidUpdateOptions = new ve, this.onDidUpdateOptions = this._onDidUpdateOptions.event, this.modelDisposables = new He, r.keyboardNavigationLabelProvider && (r.findWidgetEnabled ?? !0) && (this.findFilter = new wrs(r.keyboardNavigationLabelProvider, r.filter, r.defaultFindVisibility), r = {
            ...r,
            filter: this.findFilter
        }, this.disposables.add(this.findFilter)), this.model = this.createModel(e, r), this.treeDelegate = new jyi(n);
        const s = this.disposables.add(new GHc(this.onDidChangeActiveNodesRelay.event)), o = new sNt;
        this.renderers = i.map((a)=>new VHc(a, this.model, this.onDidChangeCollapseStateRelay.event, s, o, r));
        for (const a of this.renderers)this.disposables.add(a);
        if (this.focus = new qyi(()=>this.view.getFocusedElements()[0], r.identityProvider), this.selection = new qyi(()=>this.view.getSelectedElements()[0], r.identityProvider), this.anchor = new qyi(()=>this.view.getAnchorElement(), r.identityProvider), this.view = new tWc(e, t, this.treeDelegate, this.renderers, this.focus, this.selection, this.anchor, {
            ...Tkg(()=>this.model, this.disposables, r),
            tree: this,
            stickyScrollProvider: ()=>this.stickyScrollController
        }), this.setupModel(this.model), r.keyboardSupport !== !1) {
            const a = Ct.chain(this.view.onKeyDown, (c)=>c.filter((l)=>!r5(l.target)).map((l)=>new gu(l)));
            Ct.chain(a, (c)=>c.filter((l)=>l.keyCode === 15))(this.onLeftArrow, this, this.disposables), Ct.chain(a, (c)=>c.filter((l)=>l.keyCode === 17))(this.onRightArrow, this, this.disposables), Ct.chain(a, (c)=>c.filter((l)=>l.keyCode === 10))(this.onSpace, this, this.disposables);
        }
        if ((r.findWidgetEnabled ?? !0) && r.keyboardNavigationLabelProvider && r.contextViewProvider) {
            const a = {
                styles: r.findWidgetStyles,
                defaultFindMode: r.defaultFindMode,
                defaultFindMatchType: r.defaultFindMatchType,
                showNotFoundMessage: r.showNotFoundMessage
            };
            this.findController = this.disposables.add(new Crs(this, this.findFilter, r.contextViewProvider, a)), this.focusNavigationFilter = (c)=>this.findController.shouldAllowFocus(c), this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState, this.onDidChangeFindMode = this.findController.onDidChangeMode, this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
        } else this.onDidChangeFindMode = Ct.None, this.onDidChangeFindMatchType = Ct.None;
        r.enableStickyScroll && (this.stickyScrollController = new Trs(this, this.model, this.view, this.renderers, this.treeDelegate, r), this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus), this.styleElement = dS(this.view.getHTMLElement()), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === "always");
    }
    get onDidScroll() {
        return this.view.onDidScroll;
    }
    get onDidChangeFocus() {
        return this.eventBufferer.wrapEvent(this.focus.onDidChange);
    }
    get onDidChangeSelection() {
        return this.eventBufferer.wrapEvent(this.selection.onDidChange);
    }
    get onMouseClick() {
        return Ct.map(this.view.onMouseClick, o3t);
    }
    get onMouseDblClick() {
        return Ct.filter(Ct.map(this.view.onMouseDblClick, o3t), (e)=>e.target !== y5e.Filter);
    }
    get onMouseOver() {
        return Ct.map(this.view.onMouseOver, o3t);
    }
    get onMouseOut() {
        return Ct.map(this.view.onMouseOut, o3t);
    }
    get onContextMenu() {
        return Ct.any(Ct.filter(Ct.map(this.view.onContextMenu, Ikg), (e)=>!e.isStickyScroll), this.stickyScrollController?.onContextMenu ?? Ct.None);
    }
    get onTap() {
        return Ct.map(this.view.onTap, o3t);
    }
    get onPointer() {
        return Ct.map(this.view.onPointer, o3t);
    }
    get onKeyDown() {
        return this.view.onKeyDown;
    }
    get onKeyUp() {
        return this.view.onKeyUp;
    }
    get onKeyPress() {
        return this.view.onKeyPress;
    }
    get onDidFocus() {
        return this.view.onDidFocus;
    }
    get onDidBlur() {
        return this.view.onDidBlur;
    }
    get onDidChangeModel() {
        return Ct.any(this.onDidChangeModelRelay.event, this.onDidSwapModel.event);
    }
    get onDidChangeCollapseState() {
        return this.onDidChangeCollapseStateRelay.event;
    }
    get onDidChangeRenderNodeCount() {
        return this.onDidChangeRenderNodeCountRelay.event;
    }
    get findMode() {
        return this.findController?.mode ?? 0;
    }
    set findMode(e) {
        this.findController && (this.findController.mode = e);
    }
    get findMatchType() {
        return this.findController?.matchType ?? 0;
    }
    set findMatchType(e) {
        this.findController && (this.findController.matchType = e);
    }
    get onDidChangeFindPattern() {
        return this.findController ? this.findController.onDidChangePattern : Ct.None;
    }
    get expandOnDoubleClick() {
        return typeof this._options.expandOnDoubleClick > "u" ? !0 : this._options.expandOnDoubleClick;
    }
    get expandOnlyOnTwistieClick() {
        return typeof this._options.expandOnlyOnTwistieClick > "u" ? !0 : this._options.expandOnlyOnTwistieClick;
    }
    get onDidDispose() {
        return this.view.onDidDispose;
    }
    updateOptions(e = {}) {
        this._options = {
            ...this._options,
            ...e
        };
        for (const t of this.renderers)t.updateOptions(e);
        this.view.updateOptions(this._options), this.findController?.updateOptions(e), this.updateStickyScroll(e), this._onDidUpdateOptions.fire(this._options), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === "always");
    }
    get options() {
        return this._options;
    }
    updateStickyScroll(e) {
        !this.stickyScrollController && this._options.enableStickyScroll ? (this.stickyScrollController = new Trs(this, this.model, this.view, this.renderers, this.treeDelegate, this._options), this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus) : this.stickyScrollController && !this._options.enableStickyScroll && (this.onDidChangeStickyScrollFocused = Ct.None, this.stickyScrollController.dispose(), this.stickyScrollController = void 0), this.stickyScrollController?.updateOptions(e);
    }
    updateWidth(e) {
        const t = this.model.getListIndex(e);
        t !== -1 && this.view.updateWidth(t);
    }
    getHTMLElement() {
        return this.view.getHTMLElement();
    }
    get contentHeight() {
        return this.view.contentHeight;
    }
    get contentWidth() {
        return this.view.contentWidth;
    }
    get onDidChangeContentHeight() {
        return this.view.onDidChangeContentHeight;
    }
    get onDidChangeContentWidth() {
        return this.view.onDidChangeContentWidth;
    }
    get scrollTop() {
        return this.view.scrollTop;
    }
    set scrollTop(e) {
        this.view.scrollTop = e;
    }
    get scrollLeft() {
        return this.view.scrollLeft;
    }
    set scrollLeft(e) {
        this.view.scrollLeft = e;
    }
    get scrollHeight() {
        return this.view.scrollHeight;
    }
    get renderHeight() {
        return this.view.renderHeight;
    }
    get firstVisibleElement() {
        let e = this.view.firstVisibleIndex;
        return this.stickyScrollController && (e += this.stickyScrollController.count), e < 0 || e >= this.view.length ? void 0 : this.view.element(e).element;
    }
    get lastVisibleElement() {
        const e = this.view.lastVisibleIndex;
        return this.view.element(e).element;
    }
    get ariaLabel() {
        return this.view.ariaLabel;
    }
    set ariaLabel(e) {
        this.view.ariaLabel = e;
    }
    get selectionSize() {
        return this.selection.getNodes().length;
    }
    domFocus() {
        this.stickyScrollController?.focusedLast() ? this.stickyScrollController.domFocus() : this.view.domFocus();
    }
    isDOMFocused() {
        return fM(this.getHTMLElement());
    }
    layout(e, t) {
        this.view.layout(e, t);
    }
    style(e) {
        const t = `.${this.view.domId}`, n = [];
        e.treeIndentGuidesStroke && (n.push(`.monaco-list${t}:hover .monaco-tl-indent > .indent-guide, .monaco-list${t}.always .monaco-tl-indent > .indent-guide  { border-color: ${e.treeInactiveIndentGuidesStroke}; }`), n.push(`.monaco-list${t} .monaco-tl-indent > .indent-guide.active { border-color: ${e.treeIndentGuidesStroke}; }`));
        const i = e.treeStickyScrollBackground ?? e.listBackground;
        i && (n.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container { background-color: ${i}; }`), n.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-row { background-color: ${i}; }`)), e.treeStickyScrollBorder && n.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container { border-bottom: 1px solid ${e.treeStickyScrollBorder}; }`), e.treeStickyScrollShadow && n.push(`.monaco-list${t} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-container-shadow { box-shadow: ${e.treeStickyScrollShadow} 0 6px 6px -6px inset; height: 3px; }`), e.listFocusForeground && (n.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { color: ${e.listFocusForeground}; }`), n.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { color: inherit; }`));
        const r = iRe(e.listFocusAndSelectionOutline, iRe(e.listSelectionOutline, e.listFocusOutline ?? ""));
        r && (n.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused.selected { outline: 1px solid ${r}; outline-offset: -1px;}`), n.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused.selected { outline: inherit;}`)), e.listFocusOutline && (n.push(`.monaco-list${t}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }`), n.push(`.monaco-list${t}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { outline: inherit; }`), n.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.passive-focused { outline: 1px solid ${e.listFocusOutline}; outline-offset: -1px; }`), n.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused.sticky-scroll-focused .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`), n.push(`.monaco-workbench.context-menu-visible .monaco-list${t}.last-focused:not(.sticky-scroll-focused) .monaco-tree-sticky-container .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`)), this.styleElement.textContent = n.join(`
`), this.view.style(e);
    }
    getParentElement(e) {
        const t = this.model.getParentNodeLocation(e);
        return this.model.getNode(t).element;
    }
    getFirstElementChild(e) {
        return this.model.getFirstElementChild(e);
    }
    getNode(e) {
        return this.model.getNode(e);
    }
    getNodeLocation(e) {
        return this.model.getNodeLocation(e);
    }
    collapse(e, t = !1) {
        return this.model.setCollapsed(e, !0, t);
    }
    expand(e, t = !1) {
        return this.model.setCollapsed(e, !1, t);
    }
    toggleCollapsed(e, t = !1) {
        return this.model.setCollapsed(e, void 0, t);
    }
    expandAll() {
        this.model.setCollapsed(this.model.rootRef, !1, !0);
    }
    collapseAll() {
        this.model.setCollapsed(this.model.rootRef, !0, !0);
    }
    isCollapsible(e) {
        return this.model.isCollapsible(e);
    }
    setCollapsible(e, t) {
        return this.model.setCollapsible(e, t);
    }
    isCollapsed(e) {
        return this.model.isCollapsed(e);
    }
    expandTo(e) {
        this.model.expandTo(e);
    }
    triggerTypeNavigation() {
        this.view.triggerTypeNavigation();
    }
    openFind() {
        this.findController?.open();
    }
    closeFind() {
        this.findController?.close();
    }
    refilter() {
        this._onWillRefilter.fire(void 0), this.model.refilter();
    }
    setAnchor(e) {
        if (typeof e > "u") return this.view.setAnchor(void 0);
        this.eventBufferer.bufferEvents(()=>{
            const t = this.model.getNode(e);
            this.anchor.set([
                t
            ]);
            const n = this.model.getListIndex(e);
            n > -1 && this.view.setAnchor(n, !0);
        });
    }
    getAnchor() {
        return this.anchor.get().at(0);
    }
    setSelection(e, t) {
        this.eventBufferer.bufferEvents(()=>{
            const n = e.map((r)=>this.model.getNode(r));
            this.selection.set(n, t);
            const i = e.map((r)=>this.model.getListIndex(r)).filter((r)=>r > -1);
            this.view.setSelection(i, t, !0);
        });
    }
    getSelection() {
        return this.selection.get();
    }
    setFocus(e, t) {
        this.eventBufferer.bufferEvents(()=>{
            const n = e.map((r)=>this.model.getNode(r));
            this.focus.set(n, t);
            const i = e.map((r)=>this.model.getListIndex(r)).filter((r)=>r > -1);
            this.view.setFocus(i, t, !0);
        });
    }
    focusNext(e = 1, t = !1, n, i = NV(n) && n.altKey ? void 0 : this.focusNavigationFilter) {
        this.view.focusNext(e, t, n, i);
    }
    focusPrevious(e = 1, t = !1, n, i = NV(n) && n.altKey ? void 0 : this.focusNavigationFilter) {
        this.view.focusPrevious(e, t, n, i);
    }
    focusNextPage(e, t = NV(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
        return this.view.focusNextPage(e, t);
    }
    focusPreviousPage(e, t = NV(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
        return this.view.focusPreviousPage(e, t, ()=>this.stickyScrollController?.height ?? 0);
    }
    focusLast(e, t = NV(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
        this.view.focusLast(e, t);
    }
    focusFirst(e, t = NV(e) && e.altKey ? void 0 : this.focusNavigationFilter) {
        this.view.focusFirst(e, t);
    }
    getFocus() {
        return this.focus.get();
    }
    getStickyScrollFocus() {
        const e = this.stickyScrollController?.getFocus();
        return e !== void 0 ? [
            e
        ] : [];
    }
    getFocusedPart() {
        return this.stickyScrollController?.focusedLast() ? 1 : 0;
    }
    reveal(e, t) {
        this.model.expandTo(e);
        const n = this.model.getListIndex(e);
        if (n !== -1) if (!this.stickyScrollController) this.view.reveal(n, t);
        else {
            const i = this.stickyScrollController.nodePositionTopBelowWidget(this.getNode(e));
            this.view.reveal(n, t, i);
        }
    }
    getRelativeTop(e) {
        const t = this.model.getListIndex(e);
        if (t === -1) return null;
        const n = this.stickyScrollController?.getNode(this.getNode(e));
        return this.view.getRelativeTop(t, n?.position ?? this.stickyScrollController?.height);
    }
    getViewState(e = this.options.identityProvider) {
        if (!e) throw new hU(this._user, "Can't get tree view state without an identity provider");
        const t = (s)=>e.getId(s).toString(), n = Srs.empty(this.scrollTop);
        for (const s of this.getFocus())n.focus.add(t(s));
        for (const s of this.getSelection())n.selection.add(t(s));
        const i = this.model.getNode(), r = [
            i
        ];
        for(; r.length > 0;){
            const s = r.pop();
            s !== i && s.collapsible && (n.expanded[t(s.element)] = s.collapsed ? 0 : 1), Vpi(r, r.length, s.children);
        }
        return n;
    }
    onLeftArrow(e) {
        e.preventDefault(), e.stopPropagation();
        const t = this.view.getFocusedElements();
        if (t.length === 0) return;
        const n = t[0], i = this.model.getNodeLocation(n);
        if (!this.model.setCollapsed(i, !0)) {
            const s = this.model.getParentNodeLocation(i);
            if (!s) return;
            const o = this.model.getListIndex(s);
            this.view.reveal(o), this.view.setFocus([
                o
            ]);
        }
    }
    onRightArrow(e) {
        e.preventDefault(), e.stopPropagation();
        const t = this.view.getFocusedElements();
        if (t.length === 0) return;
        const n = t[0], i = this.model.getNodeLocation(n);
        if (!this.model.setCollapsed(i, !1)) {
            if (!n.children.some((a)=>a.visible)) return;
            const [s] = this.view.getFocus(), o = s + 1;
            this.view.reveal(o), this.view.setFocus([
                o
            ]);
        }
    }
    onSpace(e) {
        e.preventDefault(), e.stopPropagation();
        const t = this.view.getFocusedElements();
        if (t.length === 0) return;
        const n = t[0], i = this.model.getNodeLocation(n), r = e.browserEvent.altKey;
        this.model.setCollapsed(i, void 0, r);
    }
    setupModel(e) {
        this.modelDisposables.clear(), this.modelDisposables.add(e.onDidSpliceRenderedNodes(({ start: r, deleteCount: s, elements: o })=>this.view.splice(r, s, o)));
        const t = Ct.forEach(e.onDidSpliceModel, (r)=>{
            this.eventBufferer.bufferEvents(()=>{
                this.focus.onDidModelSplice(r), this.selection.onDidModelSplice(r);
            });
        }, this.modelDisposables);
        t(()=>null, null, this.modelDisposables);
        const n = this.modelDisposables.add(new ve), i = this.modelDisposables.add(new xg(0));
        this.modelDisposables.add(Ct.any(t, this.focus.onDidChange, this.selection.onDidChange)(()=>{
            i.trigger(()=>{
                const r = new Set;
                for (const s of this.focus.getNodes())r.add(s);
                for (const s of this.selection.getNodes())r.add(s);
                n.fire([
                    ...r.values()
                ]);
            });
        })), this.onDidChangeActiveNodesRelay.input = n.event, this.onDidChangeModelRelay.input = Ct.signal(e.onDidSpliceModel), this.onDidChangeCollapseStateRelay.input = e.onDidChangeCollapseState, this.onDidChangeRenderNodeCountRelay.input = e.onDidChangeRenderNodeCount, this.onDidSpliceModelRelay.input = e.onDidSpliceModel;
    }
    navigate(e) {
        return new nWc(this.view, this.model, e);
    }
    dispose() {
        Lo(this.disposables), this.stickyScrollController?.dispose(), this.view.dispose(), this.modelDisposables.dispose();
    }
}, nWc = class {
    constructor(e, t, n){
        this.view = e, this.model = t, n ? this.index = this.model.getListIndex(n) : this.index = -1;
    }
    current() {
        return this.index < 0 || this.index >= this.view.length ? null : this.view.element(this.index).element;
    }
    previous() {
        return this.index--, this.current();
    }
    next() {
        return this.index++, this.current();
    }
    first() {
        return this.index = 0, this.current();
    }
    last() {
        return this.index = this.view.length - 1, this.current();
    }
};

}
