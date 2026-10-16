import { D, Dte, Ec, Gt, Nc, Nt, Pn, Qe, Upr, Vn, Wd, Zm, ddn, eY, en, kk, st, tt } from "./Iwo.js";
import { PT, oR } from "./actionbar.js";
import { vu, za } from "./actions.js";
import { $3 } from "./aria.js";
import { bo } from "./arrays.js";
import { II, qn } from "./async.js";
import { Jd } from "./autorun.js";
import { gs, yt } from "./codicons.js";
import { NQ } from "./cssValue.js";
import { Hn } from "./dom_2.js";
import { Gg, voe } from "./event_2.js";
import { one, s6 } from "./filters.js";
import { qoi, zzo } from "./findInput.js";
import { jEr } from "./indexTreeModel.js";
import { AKd, fnt } from "./inputBox.js";
import { nT, rv } from "./keyboardEvent.js";
import { Lyt, oTr } from "./listView.js";
import { F5, SGo, nRe } from "./listWidget.js";
import { du, odn } from "./map.js";
import { Bt } from "./nls.js";
import { b4 } from "./numbers.js";
import { Jc } from "./observable.js";
import { Gn, ta } from "./themables.js";
import { M5e, OEr, che } from "./toggle.js";
import { s5y } from "./tree.css";
import { AHe, bz, vnt } from "./tree.js";
import { E } from "./tslib.es6.js";
import { $Er, DKd, Dj, EGd, Ii, Ksi, Nvn, Qte, U3, VBt, Voi, Xsi, Xte, Ysi, Zzo, _Ny, a5y, bNy, bP, c5y, f1, fHe, fr, int, iwe, l5y, li, o5y, sR, uE, uy, vHe, xv } from "./ze.js";
var NKd, LKd, HEr, OKd, Qzo, FKd, Jzo, BKd, eVo, UKd, jKd, $Kd, D5e, KBt, HKd, WKd, tVo, GKd, qKd, nVo, zKd, VKd, WEr, KKd, YKd, YBt, XKd;
export { $Kd, BKd, D5e, FKd, GKd, HEr, HKd, Jzo, KBt, KKd, LKd, NKd, OKd, Qzo, UKd, VKd, WEr, WKd, XKd, YBt, YKd, eVo, jKd, nVo, qKd, tVo, zKd };
var __wakaru_Lvn_initialized = false;
export function Lvn() {
if (__wakaru_Lvn_initialized) return;
__wakaru_Lvn_initialized = true;
"use strict";
E(), Hn(), U3(), NQ(), voe(), nT(), PT(), zzo(), fnt(), oTr(), nRe(), M5e(), jEr(), AHe(), vu(), bo(), qn(), gs(), ta(), du(), Gt(), s6(), Qe(), b4(), s5y(), Bt(), sR(), Jc(), $3(), NKd = class extends Lyt {
    constructor(t){
        super(t.elements.map((e)=>e.element)), this.data = t;
    }
    set context(t) {
        this.data.context = t;
    }
    get context() {
        return this.data.context;
    }
}, LKd = class {
    constructor(t, e){
        this.modelProvider = t, this.dnd = e, this.disposables = new Nt, this.autoExpandDisposable = this.disposables.add(new Vn);
    }
    getDragURI(t) {
        return this.dnd.getDragURI(t.element);
    }
    getDragLabel(t, e) {
        if (this.dnd.getDragLabel) return this.dnd.getDragLabel(t.map((n)=>n.element), e);
    }
    onDragStart(t, e) {
        this.dnd.onDragStart?.(Zzo(t), e);
    }
    onDragOver(t, e, n, i, r, s = !0) {
        const o = this.dnd.onDragOver(Zzo(t), e && e.element, n, i, r), a = this.autoExpandNode !== e;
        if (a && (this.autoExpandDisposable.clear(), this.autoExpandNode = e), typeof e > "u") return o;
        if (a && typeof o != "boolean" && o.autoExpand && (this.autoExpandDisposable.value = Ec(()=>{
            const h = this.modelProvider(), p = h.getNodeLocation(e);
            h.isCollapsed(p) && h.setCollapsed(p, !1), this.autoExpandNode = void 0;
        }, 500)), typeof o == "boolean" || !o.accept || typeof o.bubble > "u" || o.feedback) {
            if (!s) {
                const h = typeof o == "boolean" ? o : o.accept, p = typeof o == "boolean" ? void 0 : o.effect;
                return {
                    accept: h,
                    effect: p,
                    feedback: [
                        n
                    ]
                };
            }
            return o;
        }
        if (o.bubble === 1) {
            const h = this.modelProvider(), p = h.getNodeLocation(e), g = h.getParentNodeLocation(p), f = h.getNode(g), _ = g && h.getListIndex(g);
            return this.onDragOver(t, f, _, i, r, !1);
        }
        const l = this.modelProvider(), c = l.getNodeLocation(e), u = l.getListIndex(c), d = l.getListRenderCount(c);
        return {
            ...o,
            feedback: Dte(u, u + d)
        };
    }
    drop(t, e, n, i, r) {
        this.autoExpandDisposable.clear(), this.autoExpandNode = void 0, this.dnd.drop(Zzo(t), e && e.element, n, i, r);
    }
    onDragEnd(t) {
        this.dnd.onDragEnd?.(t);
    }
    dispose() {
        this.disposables.dispose(), this.dnd.dispose();
    }
}, HEr = class {
    constructor(t){
        this.delegate = t;
    }
    getHeight(t) {
        return this.delegate.getHeight(t.element);
    }
    getTemplateId(t) {
        return this.delegate.getTemplateId(t.element);
    }
    hasDynamicHeight(t) {
        return !!this.delegate.hasDynamicHeight && this.delegate.hasDynamicHeight(t.element);
    }
    setDynamicHeight(t, e) {
        this.delegate.setDynamicHeight?.(t.element, e);
    }
}, OKd = class hXs {
    static lift(e) {
        return e instanceof hXs ? e : new hXs(e);
    }
    static empty(e = 0) {
        return new hXs({
            focus: [],
            selection: [],
            expanded: Object.create(null),
            scrollTop: e
        });
    }
    constructor(e){
        if (this.focus = new Set(e.focus), this.selection = new Set(e.selection), e.expanded instanceof Array) {
            this.expanded = Object.create(null);
            for (const n of e.expanded)this.expanded[n] = 1;
        } else this.expanded = e.expanded;
        this.expanded = e.expanded, this.scrollTop = e.scrollTop;
    }
    toJSON() {
        return {
            focus: Array.from(this.focus),
            selection: Array.from(this.selection),
            expanded: this.expanded,
            scrollTop: this.scrollTop
        };
    }
}, Qzo = ((t)=>(t.None = "none", t.OnHover = "onHover", t.Always = "always", t))(Qzo || {}), FKd = class {
    constructor(t, e = []){
        this._elements = e, this.disposables = new Nt, this.onDidChange = en.forEach(t, (n)=>this._elements = n, this.disposables);
    }
    get elements() {
        return this._elements;
    }
    dispose() {
        this.disposables.dispose();
    }
}, Jzo = class MJc {
    constructor(e, n, i, r, s, o = {}){
        this.renderer = e, this.model = n, this.activeNodes = r, this.renderedIndentGuides = s, this.renderedElements = new Map, this.renderedNodes = new Map, this.indent = MJc.DefaultIndent, this.hideTwistiesOfChildlessElements = !1, this.shouldRenderIndentGuides = !1, this.activeIndentNodes = new Set, this.disposables = new Nt, this.indentGuidesDisposable = this.disposables.add(new Vn), this.templateId = e.templateId, this.updateOptions(o), en.map(i, (a)=>a.node)(this.onDidChangeNodeTwistieState, this, this.disposables), e.onDidChangeTwistieState?.(this.onDidChangeTwistieState, this, this.disposables);
    }
    updateOptions(e = {}) {
        if (typeof e.indent < "u") {
            const n = f1(e.indent, 0, 40);
            if (n !== this.indent) {
                this.indent = n;
                for (const [i, r] of this.renderedNodes)this.renderTreeElement(i, r);
            }
        }
        if (typeof e.renderIndentGuides < "u") {
            const n = e.renderIndentGuides !== "none";
            if (n !== this.shouldRenderIndentGuides) {
                this.shouldRenderIndentGuides = n;
                for (const [i, r] of this.renderedNodes)this._renderIndentGuides(i, r);
                if (this.indentGuidesDisposable.clear(), n) {
                    const i = new Nt;
                    this.activeNodes.onDidChange(this._onDidChangeActiveNodes, this, i), this.indentGuidesDisposable.value = i, this._onDidChangeActiveNodes(this.activeNodes.elements);
                }
            }
        }
        typeof e.hideTwistiesOfChildlessElements < "u" && (this.hideTwistiesOfChildlessElements = e.hideTwistiesOfChildlessElements);
    }
    renderTemplate(e) {
        const n = fr(e, Ii(".monaco-tl-row")), i = fr(n, Ii(".monaco-tl-indent")), r = fr(n, Ii(".monaco-tl-twistie")), s = fr(n, Ii(".monaco-tl-contents")), o = this.renderer.renderTemplate(s);
        return {
            container: e,
            indent: i,
            twistie: r,
            indentGuidesDisposable: st.None,
            templateData: o
        };
    }
    renderElement(e, n, i, r) {
        this.renderedNodes.set(e, i), this.renderedElements.set(e.element, e), this.renderTreeElement(e, i), this.renderer.renderElement(e, n, i.templateData, r);
    }
    disposeElement(e, n, i, r) {
        i.indentGuidesDisposable.dispose(), this.renderer.disposeElement?.(e, n, i.templateData, r), typeof r == "number" && (this.renderedNodes.delete(e), this.renderedElements.delete(e.element));
    }
    disposeTemplate(e) {
        this.renderer.disposeTemplate(e.templateData);
    }
    onDidChangeTwistieState(e) {
        const n = this.renderedElements.get(e);
        n && this.onDidChangeNodeTwistieState(n);
    }
    onDidChangeNodeTwistieState(e) {
        const n = this.renderedNodes.get(e);
        n && (this._onDidChangeActiveNodes(this.activeNodes.elements), this.renderTreeElement(e, n));
    }
    renderTreeElement(e, n) {
        const i = MJc.DefaultIndent + (e.depth - 1) * this.indent;
        n.twistie.style.paddingLeft = `${i}px`, n.indent.style.width = `${i + this.indent - 16}px`, e.collapsible ? n.container.setAttribute("aria-expanded", String(!e.collapsed)) : n.container.removeAttribute("aria-expanded"), n.twistie.classList.remove(...Gn.asClassNameArray(yt.treeItemExpanded));
        let r = !1;
        this.renderer.renderTwistie && (r = this.renderer.renderTwistie(e.element, n.twistie)), e.collapsible && (!this.hideTwistiesOfChildlessElements || e.visibleChildrenCount > 0) ? (r || n.twistie.classList.add(...Gn.asClassNameArray(yt.treeItemExpanded)), n.twistie.classList.add("collapsible"), n.twistie.classList.toggle("collapsed", e.collapsed)) : n.twistie.classList.remove("collapsible", "collapsed"), this._renderIndentGuides(e, n);
    }
    _renderIndentGuides(e, n) {
        if (uy(n.indent), n.indentGuidesDisposable.dispose(), !this.shouldRenderIndentGuides) return;
        const i = new Nt;
        for(;;){
            const r = this.model.getNodeLocation(e), s = this.model.getParentNodeLocation(r);
            if (!s) break;
            const o = this.model.getNode(s), a = Ii(".indent-guide", {
                style: `width: ${this.indent}px`
            });
            this.activeIndentNodes.has(o) && a.classList.add("active"), n.indent.childElementCount === 0 ? n.indent.appendChild(a) : n.indent.insertBefore(a, n.indent.firstElementChild), this.renderedIndentGuides.add(o, a), i.add(Pn(()=>this.renderedIndentGuides.delete(o, a))), e = o;
        }
        n.indentGuidesDisposable = i;
    }
    _onDidChangeActiveNodes(e) {
        if (!this.shouldRenderIndentGuides) return;
        const n = new Set;
        e.forEach((i)=>{
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
        this.renderedNodes.clear(), this.renderedElements.clear(), Nc(this.disposables);
    }
}, Jzo.DefaultIndent = 8, BKd = Jzo, eVo = class {
    constructor(t, e, n){
        this._keyboardNavigationLabelProvider = t, this._filter = e, this._defaultFindVisibility = n, this._totalCount = 0, this._matchCount = 0, this._findMatchType = 0, this._findMode = 0, this._pattern = "", this._lowercasePattern = "", this.disposables = new Nt;
    }
    get totalCount() {
        return this._totalCount;
    }
    get matchCount() {
        return this._matchCount;
    }
    set findMatchType(t) {
        this._findMatchType = t;
    }
    get findMatchType() {
        return this._findMatchType;
    }
    set findMode(t) {
        this._findMode = t;
    }
    get findMode() {
        return this._findMode;
    }
    set pattern(t) {
        this._pattern = t, this._lowercasePattern = t.toLowerCase();
    }
    filter(t, e) {
        let n = 1;
        if (this._filter) {
            const s = this._filter.filter(t, e);
            if (typeof s == "boolean" ? n = s ? 1 : 0 : Voi(s) ? n = VBt(s.visibility) : n = s, n === 0) return !1;
        }
        if (this._totalCount++, !this._pattern) return this._matchCount++, {
            data: one.Default,
            visibility: n
        };
        const i = this._keyboardNavigationLabelProvider.getKeyboardNavigationLabel(t), r = Array.isArray(i) ? i : [
            i
        ];
        for (const s of r){
            const o = s && s.toString();
            if (typeof o > "u") return {
                data: one.Default,
                visibility: n
            };
            let a;
            if (this._findMatchType === 1 ? a = a5y(this._lowercasePattern, o.toLowerCase()) : a = int(this._pattern, this._lowercasePattern, 0, o, o.toLowerCase(), 0, {
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
        return this._findMode === 1 ? typeof this._defaultFindVisibility == "number" ? this._defaultFindVisibility : this._defaultFindVisibility ? this._defaultFindVisibility(t) : 2 : {
            data: one.Default,
            visibility: n
        };
    }
    reset() {
        this._totalCount = 0, this._matchCount = 0;
    }
    dispose() {
        Nc(this.disposables);
    }
}, UKd = class extends che {
    constructor(t, e, n){
        super({
            icon: t.icon,
            title: t.title,
            isChecked: t.isChecked,
            inputActiveOptionBorder: e.inputActiveOptionBorder,
            inputActiveOptionForeground: e.inputActiveOptionForeground,
            inputActiveOptionBackground: e.inputActiveOptionBackground,
            hoverDelegate: n
        }), this.id = t.id;
    }
}, jKd = class {
    constructor(t){
        this.stateMap = new Map(t.map((e)=>[
                e.id,
                {
                    ...e
                }
            ]));
    }
    states() {
        return Array.from(this.stateMap.values());
    }
    get(t) {
        const e = this.stateMap.get(t);
        if (e === void 0) throw new Error(`No state found for toggle id ${t}`);
        return e.isChecked;
    }
    set(t, e) {
        const n = this.stateMap.get(t);
        if (n === void 0) throw new Error(`No state found for toggle id ${t}`);
        return n.isChecked === e ? !1 : (n.isChecked = e, !0);
    }
}, $Kd = {
    inputBoxStyles: AKd,
    toggleStyles: OEr,
    listFilterWidgetBackground: void 0,
    listFilterWidgetNoMatchesOutline: void 0,
    listFilterWidgetOutline: void 0,
    listFilterWidgetShadow: void 0
}, D5e = ((t)=>(t[t.Highlight = 0] = "Highlight", t[t.Filter = 1] = "Filter", t))(D5e || {}), KBt = ((t)=>(t[t.Fuzzy = 0] = "Fuzzy", t[t.Contiguous = 1] = "Contiguous", t))(KBt || {}), HKd = class extends st {
    constructor(t, e, n, i, r = [], s){
        super(), this.tree = e, this.elements = xv(".monaco-tree-type-filter", [
            xv(".monaco-tree-type-filter-input@findInput"),
            xv(".monaco-tree-type-filter-actionbar@actionbar")
        ]), this.toggles = [], this._onDidDisable = this._register(new tt), this.onDidDisable = this._onDidDisable.event, t.appendChild(this.elements.root), this._register(Pn(()=>this.elements.root.remove()));
        const o = s?.styles ?? $Kd;
        o.listFilterWidgetBackground && (this.elements.root.style.backgroundColor = o.listFilterWidgetBackground), o.listFilterWidgetShadow && (this.elements.root.style.boxShadow = `0 0 8px 2px ${o.listFilterWidgetShadow}`);
        const a = this._register(fHe());
        this.toggles = r.map((h)=>this._register(new UKd(h, o.toggleStyles, a))), this.onDidToggleChange = en.any(...this.toggles.map((h)=>en.map(h.onChange, ()=>({
                    id: h.id,
                    isChecked: h.checked
                }))));
        const l = s?.history || [];
        this.findInput = this._register(new qoi(this.elements.findInput, n, {
            label: D(31, null),
            placeholder: i,
            additionalToggles: this.toggles,
            showCommonFindToggles: !1,
            inputBoxStyles: o.inputBoxStyles,
            toggleStyles: o.toggleStyles,
            history: new Set(l)
        })), this.actionbar = this._register(new oR(this.elements.actionbar));
        const c = this._register(new Gg(this.findInput.inputBox.inputElement, "keydown")), u = en.chain(c.event, (h)=>h.map((p)=>new rv(p)));
        this._register(u((h)=>{
            if (h.equals(3)) {
                h.preventDefault(), h.stopPropagation(), this.findInput.inputBox.addToHistory(), this.tree.domFocus();
                return;
            }
            if (h.equals(18)) {
                h.preventDefault(), h.stopPropagation(), this.findInput.inputBox.isAtLastInHistory() || this.findInput.inputBox.isNowhereInHistory() ? (this.findInput.inputBox.addToHistory(), this.tree.domFocus()) : this.findInput.inputBox.showNextValue();
                return;
            }
            if (h.equals(16)) {
                h.preventDefault(), h.stopPropagation(), this.findInput.inputBox.showPreviousValue();
                return;
            }
        }));
        const d = this._register(new za("close", D(32, null), "codicon codicon-close", !0, ()=>this.dispose()));
        this.actionbar.push(d, {
            icon: !0,
            label: !1
        }), this.onDidChangeValue = this.findInput.onDidChange;
    }
    get value() {
        return this.findInput.inputBox.value;
    }
    set value(t) {
        this.findInput.inputBox.value = t;
    }
    setToggleState(t, e) {
        const n = this.toggles.find((i)=>i.id === t);
        n && (n.checked = e);
    }
    setPlaceHolder(t) {
        this.findInput.inputBox.setPlaceHolder(t);
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
    showMessage(t) {
        this.findInput.showMessage(t);
    }
    clearMessage() {
        this.findInput.clearMessage();
    }
    async dispose() {
        this._onDidDisable.fire(), this.elements.root.classList.add("disabled"), await Wd(300), super.dispose();
    }
}, WKd = class {
    constructor(t, e, n, i = {}){
        this.tree = t, this.filter = e, this.contextViewProvider = n, this.options = i, this._pattern = "", this.previousPattern = "", this._onDidChangePattern = new tt, this.onDidChangePattern = this._onDidChangePattern.event, this._onDidChangeOpenState = new tt, this.onDidChangeOpenState = this._onDidChangeOpenState.event, this.enabledDisposables = new Nt, this.disposables = new Nt, this.toggles = new jKd(i.toggles ?? []), this._placeholder = i.placeholder ?? D(33, null);
    }
    get pattern() {
        return this._pattern;
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(t) {
        this._placeholder = t, this.widget?.setPlaceHolder(t);
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
        }), this.widget = new HKd(this.tree.getHTMLElement(), this.tree, this.contextViewProvider, this.placeholder, this.toggles.states(), {
            ...this.options,
            history: this._history
        }), this.enabledDisposables.add(this.widget), this.widget.onDidChangeValue(this.onDidChangeValue, this, this.enabledDisposables), this.widget.onDidDisable(this.close, this, this.enabledDisposables), this.widget.onDidToggleChange(this.onDidToggleChange, this, this.enabledDisposables), this.widget.focus(), this.widget.value = this.previousPattern, this.widget.select(), this._onDidChangeOpenState.fire(!0);
    }
    close() {
        this.widget && (this.tree.updateOptions({
            paddingTop: 0
        }), this._history = this.widget.getHistory(), this.widget = void 0, this.enabledDisposables.clear(), this.previousPattern = this.pattern, this.onDidChangeValue(""), this.tree.domFocus(), this._onDidChangeOpenState.fire(!1));
    }
    onDidChangeValue(t) {
        this._pattern = t, this._onDidChangePattern.fire(t), this.filter.pattern = t, this.applyPattern(t);
    }
    onDidToggleChange(t) {
        this.toggles.set(t.id, t.isChecked);
    }
    updateToggleState(t, e) {
        this.toggles.set(t, e), this.widget?.setToggleState(t, e);
    }
    renderMessage(t, e) {
        t ? this.tree.options.showNotFoundMessage ?? !0 ? this.widget?.showMessage({
            type: 2,
            content: e ?? D(34, null)
        }) : this.widget?.showMessage({
            type: 2
        }) : this.widget?.clearMessage();
    }
    alertResults(t) {
        Dj(t ? D(36, null, t) : D(35, null));
    }
    dispose() {
        this._history = void 0, this._onDidChangePattern.dispose(), this.enabledDisposables.dispose(), this.disposables.dispose();
    }
}, tVo = class extends WKd {
    constructor(t, e, n, i = {}){
        const r = i.defaultFindMode ?? 0, s = i.defaultFindMatchType ?? 0, o = [
            {
                id: "mode",
                icon: yt.listFilter,
                title: D(39, null),
                isChecked: r === 1
            },
            {
                id: "matchType",
                icon: yt.searchFuzzy,
                title: D(40, null),
                isChecked: s === 0
            }
        ];
        e.findMatchType = s, e.findMode = r, super(t, e, n, {
            ...i,
            toggles: o
        }), this.filter = e, this._onDidChangeMode = new tt, this.onDidChangeMode = this._onDidChangeMode.event, this._onDidChangeMatchType = new tt, this.onDidChangeMatchType = this._onDidChangeMatchType.event, this.disposables.add(this.tree.onDidChangeModel(()=>{
            this.isOpened() && (this.pattern.length !== 0 && this.tree.refilter(), this.render());
        })), this.disposables.add(this.tree.onWillRefilter(()=>this.filter.reset()));
    }
    get mode() {
        return this.toggles.get("mode") ? 1 : 0;
    }
    set mode(t) {
        if (t === this.mode) return;
        const e = t === 1;
        this.updateToggleState("mode", e), this.placeholder = D(e ? 37 : 38, null), this.filter.findMode = t, this.tree.refilter(), this.render(), this._onDidChangeMode.fire(t);
    }
    get matchType() {
        return this.toggles.get("matchType") ? 0 : 1;
    }
    set matchType(t) {
        t !== this.matchType && (this.updateToggleState("matchType", t === 0), this.filter.findMatchType = t, this.tree.refilter(), this.render(), this._onDidChangeMatchType.fire(t));
    }
    updateOptions(t = {}) {
        t.defaultFindMode !== void 0 && (this.mode = t.defaultFindMode), t.defaultFindMatchType !== void 0 && (this.matchType = t.defaultFindMatchType);
    }
    applyPattern(t) {
        this.tree.refilter(), t && this.tree.focusNext(0, !0, void 0, (n)=>!one.isDefault(n.filterData));
        const e = this.tree.getFocus();
        if (e.length > 0) {
            const n = e[0];
            this.tree.getRelativeTop(n) === null && this.tree.reveal(n, .5);
        }
        this.render();
    }
    shouldAllowFocus(t) {
        return !this.isOpened() || !this.pattern || this.filter.totalCount > 0 && this.filter.matchCount <= 1 ? !0 : !one.isDefault(t.filterData);
    }
    onDidToggleChange(t) {
        t.id === "mode" ? this.mode = t.isChecked ? 1 : 0 : t.id === "matchType" && (this.matchType = t.isChecked ? 0 : 1);
    }
    render() {
        const e = this.filter.matchCount === 0 && this.filter.totalCount > 0 && this.pattern.length > 0;
        this.renderMessage(e), this.pattern.length && this.alertResults(this.filter.matchCount);
    }
}, GKd = class {
    constructor(t = []){
        this.stickyNodes = t;
    }
    get count() {
        return this.stickyNodes.length;
    }
    equal(t) {
        return Zm(this.stickyNodes, t.stickyNodes, l5y);
    }
    contains(t) {
        return this.stickyNodes.some((e)=>e.node.element === t.element);
    }
    lastNodePartiallyVisible() {
        if (this.count === 0) return !1;
        const t = this.stickyNodes[this.count - 1];
        if (this.count === 1) return t.position !== 0;
        const e = this.stickyNodes[this.count - 2];
        return e.position + e.height !== t.position;
    }
    animationStateChanged(t) {
        if (!Zm(this.stickyNodes, t.stickyNodes, DKd) || this.count === 0) return !1;
        const e = this.stickyNodes[this.count - 1], n = t.stickyNodes[t.count - 1];
        return e.position !== n.position;
    }
}, qKd = class {
    constrainStickyScrollNodes(t, e, n) {
        for(let i = 0; i < t.length; i++){
            const r = t[i];
            if (r.position + r.height > n || i >= e) return t.slice(0, i);
        }
        return t;
    }
}, nVo = class extends st {
    constructor(t, e, n, i, r, s = {}){
        super(), this.tree = t, this.model = e, this.view = n, this.treeDelegate = r, this.maxWidgetViewRatio = .4;
        const o = this.validateStickySettings(s);
        this.stickyScrollMaxItemCount = o.stickyScrollMaxItemCount, this.stickyScrollDelegate = s.stickyScrollDelegate ?? new qKd, this.paddingTop = s.paddingTop ?? 0, this._widget = this._register(new zKd(n.getScrollableElement(), n, t, i, r, s.accessibilityProvider)), this.onDidChangeHasFocus = this._widget.onDidChangeHasFocus, this.onContextMenu = this._widget.onContextMenu, this._register(n.onDidScroll(()=>this.update())), this._register(n.onDidChangeContentHeight(()=>this.update())), this._register(t.onDidChangeCollapseState(()=>this.update())), this._register(e.onDidSpliceRenderedNodes((a)=>{
            const l = this._widget.state;
            if (!l) return;
            if (a.deleteCount > 0 && l.stickyNodes.some((d)=>!this.model.has(this.model.getNodeLocation(d.node)))) {
                this.update();
                return;
            }
            l.stickyNodes.some((d)=>{
                const h = this.model.getListIndex(this.model.getNodeLocation(d.node));
                return h >= a.start && h < a.start + a.deleteCount && l.contains(d.node);
            }) && this._widget.rerender();
        })), this.update();
    }
    get height() {
        return this._widget.height;
    }
    get count() {
        return this._widget.count;
    }
    getNode(t) {
        return this._widget.getNode(t);
    }
    getNodeAtHeight(t) {
        let e;
        if (t === 0 ? e = this.view.firstVisibleIndex : e = this.view.indexAt(t + this.view.scrollTop), !(e < 0 || e >= this.view.length)) return this.view.element(e);
    }
    update() {
        const t = this.getNodeAtHeight(this.paddingTop);
        if (!t || this.tree.scrollTop <= this.paddingTop) {
            this._widget.setState(void 0);
            return;
        }
        const e = this.findStickyState(t);
        this._widget.setState(e);
    }
    findStickyState(t) {
        const e = [];
        let n = t, i = 0, r = this.getNextStickyNode(n, void 0, i);
        for(; r && (e.push(r), i += r.height, !(e.length <= this.stickyScrollMaxItemCount && (n = this.getNextVisibleNode(r), !n)));)r = this.getNextStickyNode(n, r.node, i);
        const s = this.constrainStickyNodes(e);
        return s.length ? new GKd(s) : void 0;
    }
    getNextVisibleNode(t) {
        return this.getNodeAtHeight(t.position + t.height);
    }
    getNextStickyNode(t, e, n) {
        const i = this.getAncestorUnderPrevious(t, e);
        if (i && !(i === t && (!this.nodeIsUncollapsedParent(t) || this.nodeTopAlignsWithStickyNodesBottom(t, n)))) return this.createStickyScrollNode(i, n);
    }
    nodeTopAlignsWithStickyNodesBottom(t, e) {
        const n = this.getNodeIndex(t), i = this.view.getElementTop(n), r = e;
        return this.view.scrollTop === i - r;
    }
    createStickyScrollNode(t, e) {
        const n = this.treeDelegate.getHeight(t), { startIndex: i, endIndex: r } = this.getNodeRange(t), s = this.calculateStickyNodePosition(r, e, n);
        return {
            node: t,
            position: s,
            height: n,
            startIndex: i,
            endIndex: r
        };
    }
    getAncestorUnderPrevious(t, e = void 0) {
        let n = t, i = this.getParentNode(n);
        for(; i;){
            if (i === e) return n;
            n = i, i = this.getParentNode(n);
        }
        if (e === void 0) return n;
    }
    calculateStickyNodePosition(t, e, n) {
        let i = this.view.getRelativeTop(t);
        if (i === null && this.view.firstVisibleIndex === t && t + 1 < this.view.length) {
            const l = this.treeDelegate.getHeight(this.view.element(t)), c = this.view.getRelativeTop(t + 1);
            i = c ? c - l / this.view.renderHeight : null;
        }
        if (i === null) return e;
        const r = this.view.element(t), s = this.treeDelegate.getHeight(r), a = i * this.view.renderHeight + s;
        return e + n > a && e <= a ? a - n : e;
    }
    constrainStickyNodes(t) {
        if (t.length === 0) return [];
        const e = this.view.renderHeight * this.maxWidgetViewRatio, n = t[t.length - 1];
        if (t.length <= this.stickyScrollMaxItemCount && n.position + n.height <= e) return t;
        const i = this.stickyScrollDelegate.constrainStickyScrollNodes(t, this.stickyScrollMaxItemCount, e);
        if (!i.length) return [];
        const r = i[i.length - 1];
        if (i.length > this.stickyScrollMaxItemCount || r.position + r.height > e) throw new Error("stickyScrollDelegate violates constraints");
        return i;
    }
    getParentNode(t) {
        const e = this.model.getNodeLocation(t), n = this.model.getParentNodeLocation(e);
        return n ? this.model.getNode(n) : void 0;
    }
    nodeIsUncollapsedParent(t) {
        const e = this.model.getNodeLocation(t);
        return this.model.getListRenderCount(e) > 1;
    }
    getNodeIndex(t) {
        const e = this.model.getNodeLocation(t);
        return this.model.getListIndex(e);
    }
    getNodeRange(t) {
        const e = this.model.getNodeLocation(t), n = this.model.getListIndex(e);
        if (n < 0) throw new Error("Node not found in tree");
        const i = this.model.getListRenderCount(e), r = n + i - 1;
        return {
            startIndex: n,
            endIndex: r
        };
    }
    nodePositionTopBelowWidget(t) {
        const e = [];
        let n = this.getParentNode(t);
        for(; n;)e.push(n), n = this.getParentNode(n);
        let i = 0;
        for(let r = 0; r < e.length && r < this.stickyScrollMaxItemCount; r++)i += this.treeDelegate.getHeight(e[r]);
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
    updateOptions(t = {}) {
        if (t.paddingTop !== void 0 && (this.paddingTop = t.paddingTop), t.stickyScrollMaxItemCount !== void 0) {
            const e = this.validateStickySettings(t);
            this.stickyScrollMaxItemCount !== e.stickyScrollMaxItemCount && (this.stickyScrollMaxItemCount = e.stickyScrollMaxItemCount, this.update());
        }
    }
    validateStickySettings(t) {
        let e = 7;
        return typeof t.stickyScrollMaxItemCount == "number" && (e = Math.max(t.stickyScrollMaxItemCount, 1)), {
            stickyScrollMaxItemCount: e
        };
    }
    setModel(t) {
        this.model = t;
    }
}, zKd = class {
    constructor(t, e, n, i, r, s){
        this.view = e, this.tree = n, this.treeRenderers = i, this.treeDelegate = r, this.accessibilityProvider = s, this._previousElements = [], this._previousStateDisposables = new Nt, this._rootDomNode = Ii(".monaco-tree-sticky-container.empty"), t.appendChild(this._rootDomNode);
        const o = Ii(".monaco-tree-sticky-container-shadow");
        this._rootDomNode.appendChild(o), this.stickyScrollFocus = new VKd(this._rootDomNode, e), this.onDidChangeHasFocus = this.stickyScrollFocus.onDidChangeHasFocus, this.onContextMenu = this.stickyScrollFocus.onContextMenu;
    }
    get state() {
        return this._previousState;
    }
    get height() {
        if (!this._previousState) return 0;
        const t = this._previousState.stickyNodes[this._previousState.count - 1];
        return t.position + t.height;
    }
    get count() {
        return this._previousState?.count ?? 0;
    }
    getNode(t) {
        return this._previousState?.stickyNodes.find((e)=>e.node === t);
    }
    setState(t) {
        const e = !!this._previousState && this._previousState.count > 0, n = !!t && t.count > 0;
        if (!e && !n || e && n && this._previousState.equal(t)) return;
        if (e !== n && this.setVisible(n), !n) {
            this._previousState = void 0, this._previousElements = [], this._previousStateDisposables.clear();
            return;
        }
        const i = t.stickyNodes[t.count - 1];
        this._previousState && t.animationStateChanged(this._previousState) ? this._previousElements[this._previousState.count - 1].style.top = `${i.position}px` : this.renderState(t), this._previousState = t, this._rootDomNode.style.height = `${i.position + i.height}px`;
    }
    renderState(t) {
        this._previousStateDisposables.clear();
        const e = Array(t.count);
        for(let n = t.count - 1; n >= 0; n--){
            const i = t.stickyNodes[n], { element: r, disposable: s } = this.createElement(i, n, t.count);
            e[n] = r, this._rootDomNode.appendChild(r), this._previousStateDisposables.add(s);
        }
        this.stickyScrollFocus.updateElements(e, t), this._previousElements = e;
    }
    rerender() {
        this._previousState && this.renderState(this._previousState);
    }
    createElement(t, e, n) {
        const i = t.startIndex, r = document.createElement("div");
        r.style.top = `${t.position}px`, this.tree.options.setRowHeight !== !1 && (r.style.height = `${t.height}px`), this.tree.options.setRowLineHeight !== !1 && (r.style.lineHeight = `${t.height}px`), r.classList.add("monaco-tree-sticky-row"), r.classList.add("monaco-list-row"), r.setAttribute("data-index", `${i}`), r.setAttribute("data-parity", i % 2 === 0 ? "even" : "odd"), r.setAttribute("id", this.view.getElementID(i));
        const s = this.setAccessibilityAttributes(r, t.node.element, e, n), o = this.treeDelegate.getTemplateId(t.node), a = this.treeRenderers.find((d)=>d.templateId === o);
        if (!a) throw new Error(`No renderer found for template id ${o}`);
        let l = t.node;
        l === this.tree.getNode(this.tree.getNodeLocation(t.node)) && (l = new Proxy(t.node, {}));
        const c = a.renderTemplate(r);
        a.renderElement(l, t.startIndex, c, t.height);
        const u = Pn(()=>{
            s.dispose(), a.disposeElement(l, t.startIndex, c, t.height), a.disposeTemplate(c), r.remove();
        });
        return {
            element: r,
            disposable: u
        };
    }
    setAccessibilityAttributes(t, e, n, i) {
        if (!this.accessibilityProvider) return st.None;
        this.accessibilityProvider.getSetSize && t.setAttribute("aria-setsize", String(this.accessibilityProvider.getSetSize(e, n, i))), this.accessibilityProvider.getPosInSet && t.setAttribute("aria-posinset", String(this.accessibilityProvider.getPosInSet(e, n))), this.accessibilityProvider.getRole && t.setAttribute("role", this.accessibilityProvider.getRole(e) ?? "treeitem");
        const r = this.accessibilityProvider.getAriaLabel(e), s = r && typeof r != "string" ? r : uE(r), o = Jd((l)=>{
            const c = l.readObservable(s);
            c ? t.setAttribute("aria-label", c) : t.removeAttribute("aria-label");
        });
        typeof r == "string" || r && t.setAttribute("aria-label", r.get());
        const a = this.accessibilityProvider.getAriaLevel && this.accessibilityProvider.getAriaLevel(e);
        return typeof a == "number" && t.setAttribute("aria-level", `${a}`), t.setAttribute("aria-selected", String(!1)), o;
    }
    setVisible(t) {
        this._rootDomNode.classList.toggle("empty", !t), t || this.stickyScrollFocus.updateElements([], void 0);
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
}, VKd = class extends st {
    constructor(t, e){
        super(), this.container = t, this.view = e, this.focusedIndex = -1, this.elements = [], this._onDidChangeHasFocus = this._register(new tt), this.onDidChangeHasFocus = this._onDidChangeHasFocus.event, this._onContextMenu = this._register(new tt), this.onContextMenu = this._onContextMenu.event, this._domHasFocus = !1, this._register(li(this.container, "focus", ()=>this.onFocus())), this._register(li(this.container, "blur", ()=>this.onBlur())), this._register(this.view.onDidFocus(()=>this.toggleStickyScrollFocused(!1))), this._register(this.view.onKeyDown((n)=>this.onKeyDown(n))), this._register(this.view.onMouseDown((n)=>this.onMouseDown(n))), this._register(this.view.onContextMenu((n)=>this.handleContextMenu(n)));
    }
    get domHasFocus() {
        return this._domHasFocus;
    }
    set domHasFocus(t) {
        t !== this._domHasFocus && (this._onDidChangeHasFocus.fire(t), this._domHasFocus = t);
    }
    handleContextMenu(t) {
        const e = t.browserEvent.target;
        if (!Xsi(e) && !Ysi(e)) {
            this.focusedLast() && this.view.domFocus();
            return;
        }
        if (!iwe(t.browserEvent)) {
            if (!this.state) throw new Error("Context menu should not be triggered when state is undefined");
            const s = this.state.stickyNodes.findIndex((o)=>o.node.element === t.element?.element);
            if (s === -1) throw new Error("Context menu should not be triggered when element is not in sticky scroll widget");
            this.container.focus(), this.setFocus(s);
            return;
        }
        if (!this.state || this.focusedIndex < 0) throw new Error("Context menu key should not be triggered when focus is not in sticky scroll widget");
        const i = this.state.stickyNodes[this.focusedIndex].node.element, r = this.elements[this.focusedIndex];
        this._onContextMenu.fire({
            element: i,
            anchor: r,
            browserEvent: t.browserEvent,
            isStickyScroll: !0
        });
    }
    onKeyDown(t) {
        if (this.domHasFocus && this.state) {
            if (t.key === "ArrowUp") this.setFocusedElement(Math.max(0, this.focusedIndex - 1)), t.preventDefault(), t.stopPropagation();
            else if (t.key === "ArrowDown" || t.key === "ArrowRight") {
                if (this.focusedIndex >= this.state.count - 1) {
                    const e = this.state.stickyNodes[this.state.count - 1].startIndex + 1;
                    this.view.domFocus(), this.view.setFocus([
                        e
                    ]), this.scrollNodeUnderWidget(e, this.state);
                } else this.setFocusedElement(this.focusedIndex + 1);
                t.preventDefault(), t.stopPropagation();
            }
        }
    }
    onMouseDown(t) {
        const e = t.browserEvent.target;
        !Xsi(e) && !Ysi(e) || (t.browserEvent.preventDefault(), t.browserEvent.stopPropagation());
    }
    updateElements(t, e) {
        if (e && e.count === 0) throw new Error("Sticky scroll state must be undefined when there are no sticky nodes");
        if (e && e.count !== t.length) throw new Error("Sticky scroll focus received illigel state");
        const n = this.focusedIndex;
        if (this.removeFocus(), this.elements = t, this.state = e, e) {
            const i = f1(n, 0, e.count - 1);
            this.setFocus(i);
        } else this.domHasFocus && this.view.domFocus();
        this.container.tabIndex = e ? 0 : -1;
    }
    setFocusedElement(t) {
        const e = this.state;
        if (!e) throw new Error("Cannot set focus when state is undefined");
        if (this.setFocus(t), !(t < e.count - 1) && e.lastNodePartiallyVisible()) {
            const n = e.stickyNodes[t];
            this.scrollNodeUnderWidget(n.endIndex + 1, e);
        }
    }
    scrollNodeUnderWidget(t, e) {
        const n = e.stickyNodes[e.count - 1], i = e.count > 1 ? e.stickyNodes[e.count - 2] : void 0, r = this.view.getElementTop(t), s = i ? i.position + i.height + n.height : n.height;
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
    setFocus(t) {
        if (0 > t) throw new Error("addFocus() can not remove focus");
        if (!this.state && t >= 0) throw new Error("Cannot set focus index when state is undefined");
        if (this.state && t >= this.state.count) throw new Error("Cannot set focus index to an index that does not exist");
        const e = this.focusedIndex;
        e >= 0 && this.toggleElementFocus(this.elements[e], !1), t >= 0 && this.toggleElementFocus(this.elements[t], !0), this.focusedIndex = t;
    }
    toggleElementFocus(t, e) {
        this.toggleElementActiveFocus(t, e && this.domHasFocus), this.toggleElementPassiveFocus(t, e);
    }
    toggleCurrentElementActiveFocus(t) {
        this.focusedIndex !== -1 && this.toggleElementActiveFocus(this.elements[this.focusedIndex], t);
    }
    toggleElementActiveFocus(t, e) {
        t.classList.toggle("focused", e);
    }
    toggleElementPassiveFocus(t, e) {
        t.classList.toggle("passive-focused", e);
    }
    toggleStickyScrollFocused(t) {
        this.view.getHTMLElement().classList.toggle("sticky-scroll-focused", t);
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
}, WEr = class {
    constructor(t, e){
        this.getFirstViewElementWithTrait = t, this.identityProvider = e, this.nodes = [], this._onDidChange = new tt, this.onDidChange = this._onDidChange.event;
    }
    get nodeSet() {
        return this._nodeSet || (this._nodeSet = this.createNodeSet()), this._nodeSet;
    }
    set(t, e) {
        !e?.__forceEvent && Zm(this.nodes, t) || this._set(t, !1, e);
    }
    _set(t, e, n) {
        if (this.nodes = [
            ...t
        ], this.elements = void 0, this._nodeSet = void 0, !e) {
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
        return this.elements || (this.elements = this.nodes.map((t)=>t.element)), [
            ...this.elements
        ];
    }
    getNodes() {
        return this.nodes;
    }
    has(t) {
        return this.nodeSet.has(t);
    }
    onDidModelSplice({ insertedNodes: t, deletedNodes: e }) {
        if (!this.identityProvider) {
            const a = this.createNodeSet(), l = (c)=>a.delete(c);
            e.forEach((c)=>$Er(c, l)), this.set([
                ...a.values()
            ]);
            return;
        }
        const n = new Set, i = (a)=>n.add(this.identityProvider.getId(a.element).toString());
        e.forEach((a)=>$Er(a, i));
        const r = new Map, s = (a)=>r.set(this.identityProvider.getId(a.element).toString(), a);
        t.forEach((a)=>$Er(a, s));
        const o = [];
        for (const a of this.nodes){
            const l = this.identityProvider.getId(a.element).toString();
            if (!n.has(l)) o.push(a);
            else {
                const u = r.get(l);
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
        const t = new Set;
        for (const e of this.nodes)t.add(e);
        return t;
    }
}, KKd = class extends SGo {
    constructor(t, e, n){
        super(t), this.tree = e, this.stickyScrollProvider = n;
    }
    onViewPointer(t) {
        if (EGd(t.browserEvent.target) || Qte(t.browserEvent.target) || Ksi(t.browserEvent.target) || t.browserEvent.isHandledByList) return;
        const e = t.element;
        if (!e) return super.onViewPointer(t);
        if (this.isSelectionRangeChangeEvent(t) || this.isSelectionSingleChangeEvent(t)) return super.onViewPointer(t);
        const n = t.browserEvent.target, i = n.classList.contains("monaco-tl-twistie") || n.classList.contains("monaco-icon-label") && n.classList.contains("folder-icon") && t.browserEvent.offsetX < 16, r = Ysi(t.browserEvent.target);
        let s = !1;
        if (r ? s = !0 : typeof this.tree.expandOnlyOnTwistieClick == "function" ? s = this.tree.expandOnlyOnTwistieClick(e.element) : s = !!this.tree.expandOnlyOnTwistieClick, r) this.handleStickyScrollMouseEvent(t, e);
        else {
            if (s && !i && t.browserEvent.detail !== 2) return super.onViewPointer(t);
            if (!this.tree.expandOnDoubleClick && t.browserEvent.detail === 2) return super.onViewPointer(t);
        }
        if (e.collapsible && (!r || i)) {
            const o = this.tree.getNodeLocation(e), a = t.browserEvent.altKey;
            if (this.tree.setFocus([
                o
            ]), this.tree.toggleCollapsed(o, a), i) {
                t.browserEvent.isHandledByList = !0;
                return;
            }
        }
        r || super.onViewPointer(t);
    }
    handleStickyScrollMouseEvent(t, e) {
        if (_Ny(t.browserEvent.target) || bNy(t.browserEvent.target)) return;
        const n = this.stickyScrollProvider();
        if (!n) throw new Error("Sticky scroll controller not found");
        const i = this.list.indexOf(e), r = this.list.getElementTop(i), s = n.nodePositionTopBelowWidget(e);
        this.tree.scrollTop = r - s, this.list.domFocus(), this.list.setFocus([
            i
        ]), this.list.setSelection([
            i
        ]);
    }
    onDoubleClick(t) {
        t.browserEvent.target.classList.contains("monaco-tl-twistie") || !this.tree.expandOnDoubleClick || t.browserEvent.isHandledByList || super.onDoubleClick(t);
    }
    onMouseDown(t) {
        const e = t.browserEvent.target;
        if (!Xsi(e) && !Ysi(e)) {
            super.onMouseDown(t);
            return;
        }
    }
    onContextMenu(t) {
        const e = t.browserEvent.target;
        if (!Xsi(e) && !Ysi(e)) {
            super.onContextMenu(t);
            return;
        }
    }
}, YKd = class extends F5 {
    constructor(t, e, n, i, r, s, o, a){
        super(t, e, n, i, a), this.focusTrait = r, this.selectionTrait = s, this.anchorTrait = o;
    }
    createMouseController(t) {
        return new KKd(this, t.tree, t.stickyScrollProvider);
    }
    splice(t, e, n = []) {
        if (super.splice(t, e, n), n.length === 0) return;
        const i = [], r = [];
        let s;
        n.forEach((o, a)=>{
            this.focusTrait.has(o) && i.push(t + a), this.selectionTrait.has(o) && r.push(t + a), this.anchorTrait.has(o) && (s = t + a);
        }), i.length > 0 && super.setFocus(kk([
            ...super.getFocus(),
            ...i
        ])), r.length > 0 && super.setSelection(kk([
            ...super.getSelection(),
            ...r
        ])), typeof s == "number" && super.setAnchor(s);
    }
    setFocus(t, e, n = !1) {
        super.setFocus(t, e), n || this.focusTrait.set(t.map((i)=>this.element(i)), e);
    }
    setSelection(t, e, n = !1) {
        super.setSelection(t, e), n || this.selectionTrait.set(t.map((i)=>this.element(i)), e);
    }
    setAnchor(t, e = !1) {
        super.setAnchor(t), e || (typeof t > "u" ? this.anchorTrait.set([]) : this.anchorTrait.set([
            this.element(t)
        ]));
    }
}, YBt = class {
    constructor(t, e, n, i, r = {}){
        this._user = t, this._options = r, this.eventBufferer = new ddn, this.onDidChangeFindOpenState = en.None, this.onDidChangeStickyScrollFocused = en.None, this.disposables = new Nt, this.onDidSwapModel = this.disposables.add(new tt), this.onDidChangeModelRelay = this.disposables.add(new eY), this.onDidSpliceModelRelay = this.disposables.add(new eY), this.onDidChangeCollapseStateRelay = this.disposables.add(new eY), this.onDidChangeRenderNodeCountRelay = this.disposables.add(new eY), this.onDidChangeActiveNodesRelay = this.disposables.add(new eY), this._onWillRefilter = new tt, this.onWillRefilter = this._onWillRefilter.event, this._onDidUpdateOptions = new tt, this.onDidUpdateOptions = this._onDidUpdateOptions.event, this.modelDisposables = new Nt, r.keyboardNavigationLabelProvider && (r.findWidgetEnabled ?? !0) && (this.findFilter = new eVo(r.keyboardNavigationLabelProvider, r.filter, r.defaultFindVisibility), r = {
            ...r,
            filter: this.findFilter
        }, this.disposables.add(this.findFilter)), this.model = this.createModel(t, r), this.treeDelegate = new HEr(n);
        const s = this.disposables.add(new FKd(this.onDidChangeActiveNodesRelay.event)), o = new odn;
        this.renderers = i.map((a)=>new BKd(a, this.model, this.onDidChangeCollapseStateRelay.event, s, o, r));
        for (const a of this.renderers)this.disposables.add(a);
        if (this.focus = new WEr(()=>this.view.getFocusedElements()[0], r.identityProvider), this.selection = new WEr(()=>this.view.getSelectedElements()[0], r.identityProvider), this.anchor = new WEr(()=>this.view.getAnchorElement(), r.identityProvider), this.view = new YKd(t, e, this.treeDelegate, this.renderers, this.focus, this.selection, this.anchor, {
            ...o5y(()=>this.model, this.disposables, r),
            tree: this,
            stickyScrollProvider: ()=>this.stickyScrollController
        }), this.setupModel(this.model), r.keyboardSupport !== !1) {
            const a = en.chain(this.view.onKeyDown, (l)=>l.filter((c)=>!Qte(c.target)).map((c)=>new rv(c)));
            en.chain(a, (l)=>l.filter((c)=>c.keyCode === 15))(this.onLeftArrow, this, this.disposables), en.chain(a, (l)=>l.filter((c)=>c.keyCode === 17))(this.onRightArrow, this, this.disposables), en.chain(a, (l)=>l.filter((c)=>c.keyCode === 10))(this.onSpace, this, this.disposables);
        }
        if ((r.findWidgetEnabled ?? !0) && r.keyboardNavigationLabelProvider && r.contextViewProvider) {
            const a = {
                styles: r.findWidgetStyles,
                defaultFindMode: r.defaultFindMode,
                defaultFindMatchType: r.defaultFindMatchType,
                showNotFoundMessage: r.showNotFoundMessage
            };
            this.findController = this.disposables.add(new tVo(this, this.findFilter, r.contextViewProvider, a)), this.focusNavigationFilter = (l)=>this.findController.shouldAllowFocus(l), this.onDidChangeFindOpenState = this.findController.onDidChangeOpenState, this.onDidChangeFindMode = this.findController.onDidChangeMode, this.onDidChangeFindMatchType = this.findController.onDidChangeMatchType;
        } else this.onDidChangeFindMode = en.None, this.onDidChangeFindMatchType = en.None;
        r.enableStickyScroll && (this.stickyScrollController = new nVo(this, this.model, this.view, this.renderers, this.treeDelegate, r), this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus), this.styleElement = bP(this.view.getHTMLElement()), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === "always");
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
        return en.map(this.view.onMouseClick, Nvn);
    }
    get onMouseDblClick() {
        return en.filter(en.map(this.view.onMouseDblClick, Nvn), (t)=>t.target !== vnt.Filter);
    }
    get onMouseOver() {
        return en.map(this.view.onMouseOver, Nvn);
    }
    get onMouseOut() {
        return en.map(this.view.onMouseOut, Nvn);
    }
    get onContextMenu() {
        return en.any(en.filter(en.map(this.view.onContextMenu, c5y), (t)=>!t.isStickyScroll), this.stickyScrollController?.onContextMenu ?? en.None);
    }
    get onTap() {
        return en.map(this.view.onTap, Nvn);
    }
    get onPointer() {
        return en.map(this.view.onPointer, Nvn);
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
        return en.any(this.onDidChangeModelRelay.event, this.onDidSwapModel.event);
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
    set findMode(t) {
        this.findController && (this.findController.mode = t);
    }
    get findMatchType() {
        return this.findController?.matchType ?? 0;
    }
    set findMatchType(t) {
        this.findController && (this.findController.matchType = t);
    }
    get onDidChangeFindPattern() {
        return this.findController ? this.findController.onDidChangePattern : en.None;
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
    updateOptions(t = {}) {
        this._options = {
            ...this._options,
            ...t
        };
        for (const e of this.renderers)e.updateOptions(t);
        this.view.updateOptions(this._options), this.findController?.updateOptions(t), this.updateStickyScroll(t), this._onDidUpdateOptions.fire(this._options), this.getHTMLElement().classList.toggle("always", this._options.renderIndentGuides === "always");
    }
    get options() {
        return this._options;
    }
    updateStickyScroll(t) {
        !this.stickyScrollController && this._options.enableStickyScroll ? (this.stickyScrollController = new nVo(this, this.model, this.view, this.renderers, this.treeDelegate, this._options), this.onDidChangeStickyScrollFocused = this.stickyScrollController.onDidChangeHasFocus) : this.stickyScrollController && !this._options.enableStickyScroll && (this.onDidChangeStickyScrollFocused = en.None, this.stickyScrollController.dispose(), this.stickyScrollController = void 0), this.stickyScrollController?.updateOptions(t);
    }
    updateWidth(t) {
        const e = this.model.getListIndex(t);
        e !== -1 && this.view.updateWidth(e);
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
    set scrollTop(t) {
        this.view.scrollTop = t;
    }
    get scrollLeft() {
        return this.view.scrollLeft;
    }
    set scrollLeft(t) {
        this.view.scrollLeft = t;
    }
    get scrollHeight() {
        return this.view.scrollHeight;
    }
    get renderHeight() {
        return this.view.renderHeight;
    }
    get firstVisibleElement() {
        let t = this.view.firstVisibleIndex;
        return this.stickyScrollController && (t += this.stickyScrollController.count), t < 0 || t >= this.view.length ? void 0 : this.view.element(t).element;
    }
    get lastVisibleElement() {
        const t = this.view.lastVisibleIndex;
        return this.view.element(t).element;
    }
    get ariaLabel() {
        return this.view.ariaLabel;
    }
    set ariaLabel(t) {
        this.view.ariaLabel = t;
    }
    get selectionSize() {
        return this.selection.getNodes().length;
    }
    domFocus() {
        this.stickyScrollController?.focusedLast() ? this.stickyScrollController.domFocus() : this.view.domFocus();
    }
    isDOMFocused() {
        return Xte(this.getHTMLElement());
    }
    layout(t, e) {
        this.view.layout(t, e);
    }
    style(t) {
        const e = `.${this.view.domId}`, n = [];
        t.treeIndentGuidesStroke && (n.push(`.monaco-list${e}:hover .monaco-tl-indent > .indent-guide, .monaco-list${e}.always .monaco-tl-indent > .indent-guide  { border-color: ${t.treeInactiveIndentGuidesStroke}; }`), n.push(`.monaco-list${e} .monaco-tl-indent > .indent-guide.active { border-color: ${t.treeIndentGuidesStroke}; }`));
        const i = t.treeStickyScrollBackground ?? t.listBackground;
        i && (n.push(`.monaco-list${e} .monaco-scrollable-element .monaco-tree-sticky-container { background-color: ${i}; }`), n.push(`.monaco-list${e} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-row { background-color: ${i}; }`)), t.treeStickyScrollBorder && n.push(`.monaco-list${e} .monaco-scrollable-element .monaco-tree-sticky-container { border-bottom: 1px solid ${t.treeStickyScrollBorder}; }`), t.treeStickyScrollShadow && n.push(`.monaco-list${e} .monaco-scrollable-element .monaco-tree-sticky-container .monaco-tree-sticky-container-shadow { box-shadow: ${t.treeStickyScrollShadow} 0 6px 6px -6px inset; height: 3px; }`), t.listFocusForeground && (n.push(`.monaco-list${e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { color: ${t.listFocusForeground}; }`), n.push(`.monaco-list${e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { color: inherit; }`));
        const r = vHe(t.listFocusAndSelectionOutline, vHe(t.listSelectionOutline, t.listFocusOutline ?? ""));
        r && (n.push(`.monaco-list${e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused.selected { outline: 1px solid ${r}; outline-offset: -1px;}`), n.push(`.monaco-list${e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused.selected { outline: inherit;}`)), t.listFocusOutline && (n.push(`.monaco-list${e}.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container:focus .monaco-list-row.focused { outline: 1px solid ${t.listFocusOutline}; outline-offset: -1px; }`), n.push(`.monaco-list${e}:not(.sticky-scroll-focused) .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.focused { outline: inherit; }`), n.push(`.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused.sticky-scroll-focused .monaco-scrollable-element .monaco-tree-sticky-container .monaco-list-row.passive-focused { outline: 1px solid ${t.listFocusOutline}; outline-offset: -1px; }`), n.push(`.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused.sticky-scroll-focused .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`), n.push(`.monaco-workbench.context-menu-visible .monaco-list${e}.last-focused:not(.sticky-scroll-focused) .monaco-tree-sticky-container .monaco-list-rows .monaco-list-row.focused { outline: inherit; }`)), this.styleElement.textContent = n.join(`
`), this.view.style(t);
    }
    getParentElement(t) {
        const e = this.model.getParentNodeLocation(t);
        return this.model.getNode(e).element;
    }
    getFirstElementChild(t) {
        return this.model.getFirstElementChild(t);
    }
    getNode(t) {
        return this.model.getNode(t);
    }
    getNodeLocation(t) {
        return this.model.getNodeLocation(t);
    }
    collapse(t, e = !1) {
        return this.model.setCollapsed(t, !0, e);
    }
    expand(t, e = !1) {
        return this.model.setCollapsed(t, !1, e);
    }
    toggleCollapsed(t, e = !1) {
        return this.model.setCollapsed(t, void 0, e);
    }
    expandAll() {
        this.model.setCollapsed(this.model.rootRef, !1, !0);
    }
    collapseAll() {
        this.model.setCollapsed(this.model.rootRef, !0, !0);
    }
    isCollapsible(t) {
        return this.model.isCollapsible(t);
    }
    setCollapsible(t, e) {
        return this.model.setCollapsible(t, e);
    }
    isCollapsed(t) {
        return this.model.isCollapsed(t);
    }
    expandTo(t) {
        this.model.expandTo(t);
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
    setAnchor(t) {
        if (typeof t > "u") return this.view.setAnchor(void 0);
        this.eventBufferer.bufferEvents(()=>{
            const e = this.model.getNode(t);
            this.anchor.set([
                e
            ]);
            const n = this.model.getListIndex(t);
            n > -1 && this.view.setAnchor(n, !0);
        });
    }
    getAnchor() {
        return this.anchor.get().at(0);
    }
    setSelection(t, e) {
        this.eventBufferer.bufferEvents(()=>{
            const n = t.map((r)=>this.model.getNode(r));
            this.selection.set(n, e);
            const i = t.map((r)=>this.model.getListIndex(r)).filter((r)=>r > -1);
            this.view.setSelection(i, e, !0);
        });
    }
    getSelection() {
        return this.selection.get();
    }
    setFocus(t, e) {
        this.eventBufferer.bufferEvents(()=>{
            const n = t.map((r)=>this.model.getNode(r));
            this.focus.set(n, e);
            const i = t.map((r)=>this.model.getListIndex(r)).filter((r)=>r > -1);
            this.view.setFocus(i, e, !0);
        });
    }
    focusNext(t = 1, e = !1, n, i = iwe(n) && n.altKey ? void 0 : this.focusNavigationFilter) {
        this.view.focusNext(t, e, n, i);
    }
    focusPrevious(t = 1, e = !1, n, i = iwe(n) && n.altKey ? void 0 : this.focusNavigationFilter) {
        this.view.focusPrevious(t, e, n, i);
    }
    focusNextPage(t, e = iwe(t) && t.altKey ? void 0 : this.focusNavigationFilter) {
        return this.view.focusNextPage(t, e);
    }
    focusPreviousPage(t, e = iwe(t) && t.altKey ? void 0 : this.focusNavigationFilter) {
        return this.view.focusPreviousPage(t, e, ()=>this.stickyScrollController?.height ?? 0);
    }
    focusLast(t, e = iwe(t) && t.altKey ? void 0 : this.focusNavigationFilter) {
        this.view.focusLast(t, e);
    }
    focusFirst(t, e = iwe(t) && t.altKey ? void 0 : this.focusNavigationFilter) {
        this.view.focusFirst(t, e);
    }
    getFocus() {
        return this.focus.get();
    }
    getStickyScrollFocus() {
        const t = this.stickyScrollController?.getFocus();
        return t !== void 0 ? [
            t
        ] : [];
    }
    getFocusedPart() {
        return this.stickyScrollController?.focusedLast() ? 1 : 0;
    }
    reveal(t, e) {
        this.model.expandTo(t);
        const n = this.model.getListIndex(t);
        if (n !== -1) if (!this.stickyScrollController) this.view.reveal(n, e);
        else {
            const i = this.stickyScrollController.nodePositionTopBelowWidget(this.getNode(t));
            this.view.reveal(n, e, i);
        }
    }
    getRelativeTop(t) {
        const e = this.model.getListIndex(t);
        if (e === -1) return null;
        const n = this.stickyScrollController?.getNode(this.getNode(t));
        return this.view.getRelativeTop(e, n?.position ?? this.stickyScrollController?.height);
    }
    getViewState(t = this.options.identityProvider) {
        if (!t) throw new bz(this._user, "Can't get tree view state without an identity provider");
        const e = (s)=>t.getId(s).toString(), n = OKd.empty(this.scrollTop);
        for (const s of this.getFocus())n.focus.add(e(s));
        for (const s of this.getSelection())n.selection.add(e(s));
        const i = this.model.getNode(), r = [
            i
        ];
        for(; r.length > 0;){
            const s = r.pop();
            s !== i && s.collapsible && (n.expanded[e(s.element)] = s.collapsed ? 0 : 1), Upr(r, r.length, s.children);
        }
        return n;
    }
    onLeftArrow(t) {
        t.preventDefault(), t.stopPropagation();
        const e = this.view.getFocusedElements();
        if (e.length === 0) return;
        const n = e[0], i = this.model.getNodeLocation(n);
        if (!this.model.setCollapsed(i, !0)) {
            const s = this.model.getParentNodeLocation(i);
            if (!s) return;
            const o = this.model.getListIndex(s);
            this.view.reveal(o), this.view.setFocus([
                o
            ]);
        }
    }
    onRightArrow(t) {
        t.preventDefault(), t.stopPropagation();
        const e = this.view.getFocusedElements();
        if (e.length === 0) return;
        const n = e[0], i = this.model.getNodeLocation(n);
        if (!this.model.setCollapsed(i, !1)) {
            if (!n.children.some((a)=>a.visible)) return;
            const [s] = this.view.getFocus(), o = s + 1;
            this.view.reveal(o), this.view.setFocus([
                o
            ]);
        }
    }
    onSpace(t) {
        t.preventDefault(), t.stopPropagation();
        const e = this.view.getFocusedElements();
        if (e.length === 0) return;
        const n = e[0], i = this.model.getNodeLocation(n), r = t.browserEvent.altKey;
        this.model.setCollapsed(i, void 0, r);
    }
    setupModel(t) {
        this.modelDisposables.clear(), this.modelDisposables.add(t.onDidSpliceRenderedNodes(({ start: r, deleteCount: s, elements: o })=>this.view.splice(r, s, o)));
        const e = en.forEach(t.onDidSpliceModel, (r)=>{
            this.eventBufferer.bufferEvents(()=>{
                this.focus.onDidModelSplice(r), this.selection.onDidModelSplice(r);
            });
        }, this.modelDisposables);
        e(()=>null, null, this.modelDisposables);
        const n = this.modelDisposables.add(new tt), i = this.modelDisposables.add(new II(0));
        this.modelDisposables.add(en.any(e, this.focus.onDidChange, this.selection.onDidChange)(()=>{
            i.trigger(()=>{
                const r = new Set;
                for (const s of this.focus.getNodes())r.add(s);
                for (const s of this.selection.getNodes())r.add(s);
                n.fire([
                    ...r.values()
                ]);
            });
        })), this.onDidChangeActiveNodesRelay.input = n.event, this.onDidChangeModelRelay.input = en.signal(t.onDidSpliceModel), this.onDidChangeCollapseStateRelay.input = t.onDidChangeCollapseState, this.onDidChangeRenderNodeCountRelay.input = t.onDidChangeRenderNodeCount, this.onDidSpliceModelRelay.input = t.onDidSpliceModel;
    }
    navigate(t) {
        return new XKd(this.view, this.model, t);
    }
    dispose() {
        Nc(this.disposables), this.stickyScrollController?.dispose(), this.view.dispose(), this.modelDisposables.dispose();
    }
}, XKd = class {
    constructor(t, e, n){
        this.view = t, this.model = e, n ? this.index = this.model.getListIndex(n) : this.index = -1;
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
