(() => {
  "use strict";
  var t,
    e = {
      181: (t) => {
        t.exports = require("buffer");
      },
      2203: (t) => {
        t.exports = require("stream");
      },
      2613: (t) => {
        t.exports = require("assert");
      },
      3106: (t) => {
        t.exports = require("zlib");
      },
      9023: (t) => {
        t.exports = require("util");
      },
      9896: (t) => {
        t.exports = require("fs");
      },
    },
    n = {};
  function r(t) {
    var o = n[t];
    if (void 0 !== o) return o.exports;
    var s = (n[t] = { exports: {} });
    return (e[t](s, s.exports, r), s.exports);
  }
  ((r.m = e),
    (r.d = (t, e) => {
      for (var n in e)
        r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (r.f = {}),
    (r.e = (t) => Promise.all(Object.keys(r.f).reduce((e, n) => (r.f[n](t, e), e), []))),
    (r.u = (t) => t + ".js"),
    (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (r.r = (t) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 }));
    }),
    (t = { 606: 1 }),
    (r.f.require = (e, n) => {
      t[e] ||
        ((e) => {
          var n = e.modules,
            o = e.ids,
            s = e.runtime;
          for (var i in n) r.o(n, i) && (r.m[i] = n[i]);
          s && s(r);
          for (var a = 0; a < o.length; a++) t[o[a]] = 1;
        })(require("./" + r.u(e)));
    }));
  var o = {};
  (r.r(o),
    r.d(o, {
      BrowserAutomationMcpProvider: () => $t,
      BrowserSnapshotPushController: () => At,
      activate: () => Ot,
      deactivate: () => Lt,
      doEmit: () => Dt,
    }));
  const s = require("vscode"),
    i = class t {
      constructor(t) {
        this.identifier = t;
      }
      static init() {
        this.outputChannel ||
          (this.outputChannel = s.window.createOutputChannel("Cursor IDE Browser Automation"));
      }
      static getLogger(e) {
        return (this.loggers.has(e) || this.loggers.set(e, new t(e)), this.loggers.get(e));
      }
      static debug(t) {
        this.log("DEBUG", "general", t);
      }
      static info(t) {
        this.log("INFO", "general", t);
      }
      static warn(t) {
        this.log("WARN", "general", t);
      }
      static error(t, e) {
        const n = e ? `${t}: ${e.message}` : t;
        (this.log("ERROR", "general", n), e?.stack && this.log("ERROR", "general", e.stack));
      }
      info(e) {
        t.log("INFO", this.identifier, e);
      }
      warn(e) {
        t.log("WARN", this.identifier, e);
      }
      error(e, n) {
        const r = n ? `${e}: ${n.message}` : e;
        (t.log("ERROR", this.identifier, r), n?.stack && t.log("ERROR", this.identifier, n.stack));
      }
      static log(t, e, n) {
        if (this.outputChannel) {
          const r = new Date().toISOString();
          this.outputChannel.appendLine(`[${r}] [${t}] [${e}] ${n}`);
        }
      }
    };
  i.loggers = new Map();
  let a = i;
  class l {
    constructor() {
      this.viewsByTurn = new Map();
    }
    record(t, e) {
      let n = this.viewsByTurn.get(t);
      if (!n && ((n = new Map()), this.viewsByTurn.set(t, n), this.viewsByTurn.size > 64)) {
        const t = this.viewsByTurn.keys().next().value;
        void 0 !== t && this.viewsByTurn.delete(t);
      }
      n.set(e.viewId, e);
    }
    take(t) {
      const e = this.viewsByTurn.get(t);
      return (this.viewsByTurn.delete(t), e ? [...e.values()] : []);
    }
  }
  const c =
      "\nfunction getParentElementAcrossShadow(element) {\n    if (!element) return null;\n    if (element.parentElement) return element.parentElement;\n    const root = element.getRootNode ? element.getRootNode() : null;\n    if (root && root.host && root.host.nodeType === Node.ELEMENT_NODE) {\n        return root.host;\n    }\n    return null;\n}\n\nfunction walkComposedElements(root, visitor) {\n    function visitContainer(container) {\n        const children = container && container.children ? Array.from(container.children) : [];\n        for (const child of children) {\n            if (visitElement(child)) {\n                return true;\n            }\n        }\n        return false;\n    }\n\n    function visitElement(element) {\n        if (visitor(element)) {\n            return true;\n        }\n        if (element.shadowRoot && element.shadowRoot.mode === 'open') {\n            if (visitContainer(element.shadowRoot)) {\n                return true;\n            }\n        }\n        return visitContainer(element);\n    }\n\n    return visitContainer(root);\n}\n\nfunction querySelectorAllIncludingOpenShadowRoots(selector) {\n    const matches = [];\n    walkComposedElements(document, (element) => {\n        try {\n            if (element.matches && element.matches(selector)) {\n                matches.push(element);\n            }\n        } catch (_) { }\n        return false;\n    });\n    return matches;\n}\n\nfunction findElementByIdAcrossRoots(id, preferredRoot) {\n    if (!id) return null;\n\n    function findElementByIdWithinRoot(root) {\n        let match = null;\n        walkComposedElements(root, (element) => {\n            if (element.id === id) {\n                match = element;\n                return true;\n            }\n            return false;\n        });\n        return match;\n    }\n\n    const rootsToSearch = [];\n    if (preferredRoot) {\n        rootsToSearch.push(preferredRoot);\n    }\n    if (preferredRoot !== document) {\n        rootsToSearch.push(document);\n    }\n    for (const root of rootsToSearch) {\n        try {\n            if (root && typeof root.getElementById === 'function') {\n                const element = root.getElementById(id);\n                if (element) {\n                    return element;\n                }\n            }\n            if (root && typeof root.querySelector === 'function') {\n                const element = root.querySelector('#' + CSS.escape(String(id)));\n                if (element) {\n                    return element;\n                }\n            }\n            const nestedElement = findElementByIdWithinRoot(root);\n            if (nestedElement) {\n                return nestedElement;\n            }\n        } catch (_) { }\n    }\n    return null;\n}\n\nfunction isElementHiddenForAria(element) {\n    if (!element) return true;\n    const tag = element.tagName?.toUpperCase();\n    if (['STYLE', 'SCRIPT', 'NOSCRIPT', 'TEMPLATE'].includes(tag)) return true;\n    if (element.getAttribute('aria-hidden') === 'true') return true;\n\n    const style = window.getComputedStyle(element);\n    if (!style) return false;\n\n    if (style.visibility === 'hidden' || style.visibility === 'collapse') return true;\n    if (style.display === 'none') return true;\n\n    let parent = getParentElementAcrossShadow(element);\n    while (parent && parent !== document.body) {\n        if (parent.getAttribute('aria-hidden') === 'true') return true;\n        const parentStyle = window.getComputedStyle(parent);\n        if (parentStyle?.display === 'none') return true;\n        parent = getParentElementAcrossShadow(parent);\n    }\n\n    return false;\n}\n\nfunction getTextFromIds(ids, preferredRoot) {\n    try {\n        if (!ids) return '';\n        const parts = [];\n        ids.split(/\\s+/).forEach(id => {\n            const el = findElementByIdAcrossRoots(id, preferredRoot);\n            if (el) {\n                const t = (el.innerText || el.textContent || '').trim();\n                if (t) parts.push(t);\n            }\n        });\n        return parts.join(' ').trim();\n    } catch (_) { return ''; }\n}\n\nfunction getVisibleText(el) {\n    try {\n        const parts = [];\n        const state = { length: 0, maxLength: 240 };\n\n        function collectVisibleTextParts(node) {\n            if (!node || state.length > state.maxLength) {\n                return;\n            }\n\n            if (node.nodeType === Node.TEXT_NODE) {\n                const parent = node.parentElement;\n                if (parent && isElementHiddenForAria(parent)) {\n                    return;\n                }\n                const text = node.textContent || '';\n                const clean = text.replace(/\\s+/g, ' ').trim();\n                if (clean) {\n                    parts.push(clean);\n                    state.length += clean.length + 1;\n                }\n                return;\n            }\n\n            if (node.nodeType !== Node.ELEMENT_NODE && node.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {\n                return;\n            }\n\n            if (node.nodeType === Node.ELEMENT_NODE) {\n                const element = node;\n                const tag = element.tagName?.toUpperCase();\n                if (['STYLE', 'SCRIPT', 'NOSCRIPT', 'TEMPLATE'].includes(tag)) {\n                    return;\n                }\n                if (isElementHiddenForAria(element)) {\n                    return;\n                }\n                if (tag === 'SLOT') {\n                    const assignedNodes = typeof element.assignedNodes === 'function'\n                        ? element.assignedNodes({ flatten: true })\n                        : [];\n                    const slotChildren = assignedNodes.length > 0 ? assignedNodes : Array.from(element.childNodes || []);\n                    for (const child of slotChildren) {\n                        collectVisibleTextParts(child);\n                        if (state.length > state.maxLength) {\n                            break;\n                        }\n                    }\n                    return;\n                }\n                if (element.shadowRoot && element.shadowRoot.mode === 'open') {\n                    collectVisibleTextParts(element.shadowRoot);\n                    return;\n                }\n            }\n\n            const children = Array.from(node.childNodes || []);\n            for (const child of children) {\n                collectVisibleTextParts(child);\n                if (state.length > state.maxLength) {\n                    break;\n                }\n            }\n        }\n\n        collectVisibleTextParts(el);\n        if (parts.length) {\n            return parts.join(' ').trim().substring(0, 200);\n        }\n        const fallback = (el.innerText || el.textContent || '').replace(/\\s+/g, ' ').trim();\n        return fallback.substring(0, 200);\n    } catch (_) {\n        try {\n            const text = (el.innerText || '').replace(/\\s+/g, ' ').trim();\n            return text.substring(0, 200);\n        } catch (_) {\n            return '';\n        }\n    }\n}\n\nfunction getLabelsText(el) {\n    try {\n        const labels = (el.labels && Array.from(el.labels)) || [];\n        if (!labels.length) return '';\n        const labelText = labels\n            .map(label => getVisibleText(label) || (label.textContent || '').trim())\n            .filter(Boolean)\n            .join(' ')\n            .trim();\n        return labelText.substring(0, 200);\n    } catch (_) {\n        return '';\n    }\n}\n\nfunction getImplicitRole(el) {\n    try {\n        const tag = el.tagName ? el.tagName.toLowerCase() : '';\n        switch (tag) {\n            case 'a':\n                return el.hasAttribute('href') ? 'link' : null;\n            case 'area':\n                return el.hasAttribute('href') ? 'link' : null;\n            case 'article':\n                return 'article';\n            case 'aside':\n                return 'complementary';\n            case 'button':\n                return 'button';\n            case 'datalist':\n                return 'listbox';\n            case 'details':\n                return 'group';\n            case 'dialog':\n                return 'dialog';\n            case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6':\n                return 'heading';\n            case 'hr':\n                return 'separator';\n            case 'img':\n                return (el.getAttribute('alt') === '' && !el.getAttribute('title')) ? null : 'img';\n            case 'input': {\n                const type = (el.type || el.getAttribute('type') || 'text').toLowerCase();\n                if (type === 'button' || type === 'submit' || type === 'reset' || type === 'image') return 'button';\n                if (type === 'checkbox') return 'checkbox';\n                if (type === 'radio') return 'radio';\n                if (type === 'range') return 'slider';\n                if (type === 'number') return 'spinbutton';\n                if (type === 'search') return el.hasAttribute('list') ? 'combobox' : 'searchbox';\n                if (type === 'hidden') return null;\n                if (['email', 'tel', 'text', 'url', 'password', ''].includes(type)) {\n                    const list = el.getAttribute('list');\n                    if (list) {\n                        const datalist = findElementByIdAcrossRoots(list, el.getRootNode ? el.getRootNode() : document);\n                        if (datalist && datalist.tagName === 'DATALIST') return 'combobox';\n                    }\n                    return 'textbox';\n                }\n                return 'textbox';\n            }\n            case 'li':\n                return 'listitem';\n            case 'main':\n                return 'main';\n            case 'math':\n                return 'math';\n            case 'menu':\n                return 'list';\n            case 'meter':\n                return 'meter';\n            case 'nav':\n                return 'navigation';\n            case 'ol': case 'ul':\n                return 'list';\n            case 'optgroup':\n                return 'group';\n            case 'option':\n                return 'option';\n            case 'output':\n                return 'status';\n            case 'progress':\n                return 'progressbar';\n            case 'search':\n                return 'search';\n            case 'select':\n                return el.hasAttribute('multiple') || (el.size > 1) ? 'listbox' : 'combobox';\n            case 'summary':\n                return 'button';\n            case 'table':\n                return 'table';\n            case 'tbody': case 'tfoot': case 'thead':\n                return 'rowgroup';\n            case 'td':\n                return 'cell';\n            case 'textarea':\n                return 'textbox';\n            case 'th':\n                return 'columnheader';\n            case 'tr':\n                return 'row';\n            case 'section':\n                return (el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby')) ? 'region' : null;\n            case 'form':\n                return (el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby')) ? 'form' : null;\n            case 'header':\n                return 'banner';\n            case 'footer':\n                return 'contentinfo';\n            case 'svg':\n                return 'img';\n            default:\n                return null;\n        }\n    } catch (_) {\n        return null;\n    }\n}\n\nfunction getAriaRole(el) {\n    const explicitRole = el.getAttribute('role');\n    if (explicitRole) {\n        const roles = explicitRole.split(' ').map(r => r.trim()).filter(Boolean);\n        if (roles.length > 0) return roles[0];\n    }\n    return getImplicitRole(el);\n}\n\nfunction computeAccessibleName(el, role) {\n    try {\n        if (!el || el.getAttribute('aria-hidden') === 'true') {\n            return '';\n        }\n\n        const labelledBy = el.getAttribute('aria-labelledby');\n        const fromLabelledBy = getTextFromIds(labelledBy, el.getRootNode ? el.getRootNode() : document);\n        if (fromLabelledBy) return fromLabelledBy.substring(0, 200);\n\n        const ariaLabel = (el.getAttribute('aria-label') || '').trim();\n        if (ariaLabel) return ariaLabel.substring(0, 200);\n\n        const ariaPlaceholder = (el.getAttribute('aria-placeholder') || '').trim();\n        if (ariaPlaceholder) return ariaPlaceholder.substring(0, 200);\n\n        const labelsText = getLabelsText(el);\n        if (labelsText) return labelsText.substring(0, 200);\n\n        const tag = el.tagName ? el.tagName.toLowerCase() : '';\n\n        if (tag === 'img') {\n            const alt = (el.getAttribute('alt') || '').trim();\n            if (alt) return alt.substring(0, 200);\n        }\n\n        if (tag === 'input') {\n            const type = (el.getAttribute('type') || 'text').toLowerCase();\n            const value = el.value || el.getAttribute('value') || '';\n            const placeholder = (el.getAttribute('placeholder') || '').trim();\n            if (type === 'button' || type === 'submit' || type === 'reset') {\n                if (value) return String(value).substring(0, 200);\n            }\n            if (placeholder) return placeholder.substring(0, 200);\n            if (value && type !== 'password') return String(value).substring(0, 200);\n        }\n\n        if (tag === 'textarea') {\n            const placeholder = (el.getAttribute('placeholder') || '').trim();\n            if (placeholder) return placeholder.substring(0, 200);\n            if (el.value) return String(el.value).substring(0, 200);\n        }\n\n        if (tag === 'select') {\n            const selected = Array.from(el.selectedOptions || [])\n                .map(option => getVisibleText(option) || (option.textContent || '').trim())\n                .filter(Boolean)\n                .join(', ')\n                .trim();\n            if (selected) return selected.substring(0, 200);\n        }\n\n        const roleLower = (role || '').toLowerCase();\n        const interactiveRoles = new Set(['button', 'link', 'menuitem', 'option', 'tab', 'checkbox', 'radio', 'switch', 'combobox', 'textbox', 'listbox', 'slider', 'spinbutton', 'cell', 'gridcell', 'row', 'columnheader', 'rowheader']);\n        const interactiveTags = new Set(['button', 'a', 'summary', 'label', 'option', 'textarea', 'select', 'time']);\n        const headingTags = new Set(['h1','h2','h3','h4','h5','h6']);\n        if (interactiveRoles.has(roleLower) || interactiveTags.has(tag) || headingTags.has(tag)) {\n            const visible = getVisibleText(el);\n            if (visible) return visible.substring(0, 200);\n        }\n\n        if (tag === 'p' || tag === 'li' || roleLower === 'heading') {\n            const visible = getVisibleText(el);\n            if (visible) return visible.substring(0, 200);\n        }\n\n        const title = (el.getAttribute('title') || '').trim();\n        if (title) return title.substring(0, 200);\n\n        return '';\n    } catch (_) {\n        return '';\n    }\n}\n\nfunction buildPageSnapshot(options = {}) {\n    const maxDepth = options.maxDepth || 30;\n    const interactiveOnly = options.interactive || false;\n    const compact = options.compact || false;\n    const selector = options.selector || null;\n\n    function collectElementStates(el, role) {\n        const states = [];\n        try {\n            if (document.activeElement === el) {\n                states.push('active');\n                states.push('focused');\n            }\n            if (el.matches && el.matches(':checked')) states.push('checked');\n            const ariaChecked = el.getAttribute('aria-checked');\n            if (ariaChecked === 'true') states.push('checked');\n            if (ariaChecked === 'mixed') states.push('indeterminate');\n            if (el.matches && el.matches(':disabled')) states.push('disabled');\n            if (el.disabled) states.push('disabled');\n            let parent = getParentElementAcrossShadow(el);\n            while (parent) {\n                if (parent.tagName === 'FIELDSET' && parent.disabled) {\n                    states.push('disabled');\n                    break;\n                }\n                parent = getParentElementAcrossShadow(parent);\n            }\n            if (el.matches && el.matches(':required')) states.push('required');\n            if (el.matches && el.matches(':read-only') && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')) states.push('readonly');\n            if (el.readOnly) states.push('readonly');\n            if (el.selected) states.push('selected');\n            const ariaSelected = el.getAttribute('aria-selected');\n            if (ariaSelected === 'true') states.push('selected');\n            const ariaExpanded = el.getAttribute('aria-expanded');\n            if (ariaExpanded === 'true') states.push('expanded');\n            if (ariaExpanded === 'false') states.push('collapsed');\n            const ariaPressed = el.getAttribute('aria-pressed');\n            if (ariaPressed === 'true') states.push('pressed');\n            if (ariaPressed === 'false') states.push('released');\n            if (el.getAttribute && el.getAttribute('aria-current')) states.push('current');\n            if (el.getAttribute && el.getAttribute('aria-invalid') === 'true') states.push('invalid');\n            if (el.getAttribute && el.getAttribute('aria-busy') === 'true') states.push('busy');\n        } catch (_) { }\n        return Array.from(new Set(states));\n    }\n\n    function collectElementDetails(el, role) {\n        const details = {};\n        try {\n            const tag = el.tagName ? el.tagName.toLowerCase() : '';\n            const ariaDescription = (el.getAttribute('aria-description') || '').trim();\n            if (ariaDescription) {\n                details.description = ariaDescription.substring(0, 200);\n            }\n            const describedBy = getTextFromIds(el.getAttribute('aria-describedby'), el.getRootNode ? el.getRootNode() : document);\n            if (describedBy) {\n                details.description = details.description\n                    ? (details.description + ' ' + describedBy.substring(0, 200)).trim()\n                    : describedBy.substring(0, 200);\n            }\n            if (tag === 'a' && el.hasAttribute('href')) {\n                details.url = el.getAttribute('href');\n            }\n            if ((tag === 'img' || tag === 'svg') && el.hasAttribute('src')) {\n                details.src = el.getAttribute('src');\n            }\n            if (tag === 'input' || tag === 'textarea') {\n                const type = (el.getAttribute('type') || 'text').toLowerCase();\n                const value = el.value || el.getAttribute('value') || '';\n                if (value && (tag !== 'input' || type !== 'password')) {\n                    details.value = String(value).substring(0, 200);\n                }\n                const placeholder = (el.getAttribute('placeholder') || '').trim();\n                if (placeholder) {\n                    details.placeholder = placeholder.substring(0, 200);\n                }\n            }\n            if (tag === 'select') {\n                const selected = Array.from(el.selectedOptions || [])\n                    .map(option => getVisibleText(option) || (option.textContent || '').trim())\n                    .filter(Boolean);\n                if (selected.length) {\n                    details.value = selected.join(', ').substring(0, 200);\n                }\n                const allOptions = Array.from(el.options || []);\n                if (allOptions.length > 0 && allOptions.length <= 20) {\n                    details.options = allOptions.map(opt => {\n                        const label = (opt.textContent || '').trim();\n                        const value = opt.value;\n                        const disabled = opt.disabled;\n                        let optStr = label;\n                        if (value && value !== label) {\n                            optStr += ' (value: ' + value + ')';\n                        }\n                        if (disabled) {\n                            optStr += ' [disabled]';\n                        }\n                        return optStr;\n                    }).join(', ');\n                } else if (allOptions.length > 20) {\n                    details.options = allOptions.slice(0, 10).map(opt => {\n                        const label = (opt.textContent || '').trim();\n                        return label;\n                    }).join(', ') + '... (' + allOptions.length + ' total options)';\n                }\n            }\n            if (role === 'combobox' && el.getAttribute('aria-activedescendant')) {\n                details.activeDescendant = el.getAttribute('aria-activedescendant');\n            }\n        } catch (_) { }\n        return details;\n    }\n\n    function shouldIncludeElement(el) {\n        try {\n            if (!el || el.getAttribute('aria-hidden') === 'true') {\n                return false;\n            }\n            const tag = el.tagName ? el.tagName.toLowerCase() : '';\n            const role = el.getAttribute('role') || getImplicitRole(el);\n            const meaningfulTags = new Set(['a', 'button', 'input', 'select', 'textarea', 'img', 'svg', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'nav', 'main', 'header', 'footer', 'section', 'article', 'form', 'label', 'ul', 'ol', 'li', 'p', 'strong', 'em', 'small', 'time', 'option', 'summary', 'details']);\n            if (meaningfulTags.has(tag)) {\n                return true;\n            }\n            if (role && role !== 'generic') {\n                return true;\n            }\n            if (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')) {\n                return true;\n            }\n            if (el.matches && el.matches('[contenteditable=\"true\"]')) {\n                return true;\n            }\n            if (el.querySelector && el.querySelector('a, button, input, select, textarea, [role], [contenteditable=\"true\"]')) {\n                return true;\n            }\n        } catch (_) {\n            return true;\n        }\n        return false;\n    }\n\n    const INTERACTIVE_ROLES = new Set([\n        'button', 'link', 'textbox', 'checkbox', 'radio', 'combobox', 'listbox',\n        'menuitem', 'menuitemcheckbox', 'menuitemradio', 'option', 'slider',\n        'spinbutton', 'switch', 'tab', 'treeitem', 'searchbox'\n    ]);\n\n    function isValidRef(ref) {\n        return typeof ref === 'string' && /^e\\d+$/.test(ref);\n    }\n\n    function getMaxRefIndex() {\n        let maxIndex = -1;\n        const existing = querySelectorAllIncludingOpenShadowRoots('[data-cursor-ref]');\n        for (const el of existing) {\n            const ref = el.getAttribute('data-cursor-ref');\n            if (isValidRef(ref)) {\n                const num = parseInt(ref.substring(1), 10);\n                if (!Number.isNaN(num)) {\n                    maxIndex = Math.max(maxIndex, num);\n                }\n            }\n        }\n        return maxIndex;\n    }\n\n    let refCounter = 0;\n\n    class RoleNameTracker {\n        constructor() {\n            this.counts = new Map();\n            this.refsByKey = new Map();\n        }\n        getKey(role, name) {\n            return role + '::' + (name || '');\n        }\n        getNextIndex(role, name) {\n            const key = this.getKey(role, name);\n            const current = this.counts.get(key) || 0;\n            this.counts.set(key, current + 1);\n            return current;\n        }\n        trackRef(role, name, ref) {\n            const key = this.getKey(role, name);\n            const refs = this.refsByKey.get(key) || [];\n            refs.push(ref);\n            this.refsByKey.set(key, refs);\n        }\n        getDuplicateKeys() {\n            const duplicates = new Set();\n            for (const [key, refs] of this.refsByKey) {\n                if (refs.length > 1) {\n                    duplicates.add(key);\n                }\n            }\n            return duplicates;\n        }\n    }\n\n    function buildInteractiveSnapshot() {\n        const tracker = new RoleNameTracker();\n        const elements = [];\n        const usedRefs = new Set();\n        const interactiveSet = new Set();\n\n        const interactiveSelector = [\n            'input', 'textarea', 'select', 'button', 'a[href]',\n            '[role=\"button\"]', '[role=\"link\"]', '[role=\"textbox\"]', '[role=\"checkbox\"]',\n            '[role=\"radio\"]', '[role=\"combobox\"]', '[role=\"listbox\"]', '[role=\"menuitem\"]',\n            '[role=\"menuitemcheckbox\"]', '[role=\"menuitemradio\"]', '[role=\"option\"]',\n            '[role=\"slider\"]', '[role=\"spinbutton\"]', '[role=\"switch\"]', '[role=\"tab\"]',\n            '[role=\"treeitem\"]', '[role=\"searchbox\"]', '[contenteditable=\"true\"]',\n            'summary', '[tabindex]:not([tabindex=\"-1\"])'\n        ].join(', ');\n\n        const allInteractive = querySelectorAllIncludingOpenShadowRoots(interactiveSelector);\n\n        for (const el of allInteractive) {\n            if (el.getAttribute('aria-hidden') === 'true') continue;\n            const style = window.getComputedStyle(el);\n            if (style.display === 'none' || style.visibility === 'hidden') continue;\n            const rect = el.getBoundingClientRect();\n            if (rect.width === 0 && rect.height === 0) continue;\n\n            const tag = el.tagName.toLowerCase();\n            interactiveSet.add(el);\n            const roleAttr = el.getAttribute('role') || '';\n            const implicitRole = getImplicitRole(el);\n            const role = roleAttr || implicitRole || 'generic';\n\n            if (!INTERACTIVE_ROLES.has(role) && role !== 'generic') continue;\n\n            const name = computeAccessibleName(el, role);\n            const existingRef = el.getAttribute('data-cursor-ref');\n            let ref = null;\n            if (isValidRef(existingRef) && !usedRefs.has(existingRef)) {\n                ref = existingRef;\n            } else {\n                ref = 'e' + refCounter++;\n            }\n            el.setAttribute('data-cursor-ref', ref);\n            usedRefs.add(ref);\n\n            const nth = tracker.getNextIndex(role, name);\n            tracker.trackRef(role, name, ref);\n\n            const node = { ref, role, name, tag };\n\n            const states = collectElementStates(el, role);\n            if (states.length) node.states = states;\n\n            const details = collectElementDetails(el, role);\n            for (const key in details) {\n                if (details[key] !== undefined && details[key] !== '') {\n                    node[key] = details[key];\n                }\n            }\n\n            node._nth = nth;\n\n            elements.push(node);\n        }\n\n        const duplicateKeys = tracker.getDuplicateKeys();\n        for (const el of elements) {\n            const key = tracker.getKey(el.role, el.name);\n            if (duplicateKeys.has(key) && el._nth > 0) {\n                el.nth = el._nth;\n            }\n            delete el._nth;\n        }\n\n        return { elements, tracker, usedRefs, interactiveSet };\n    }\n\n    function buildContentElements(interactiveSet, usedRefs) {\n        const elements = [];\n        const contentSelector = [\n            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',\n            'label', '[role=\"heading\"]', 'p', 'li',\n            'article', 'nav', 'main', 'header', 'footer', 'section',\n            '[role=\"article\"]', '[role=\"region\"]', '[role=\"main\"]', '[role=\"navigation\"]',\n            '[role=\"cell\"]', '[role=\"gridcell\"]', '[role=\"columnheader\"]', '[role=\"rowheader\"]',\n            '[role=\"listitem\"]'\n        ].join(', ');\n        const allContent = querySelectorAllIncludingOpenShadowRoots(contentSelector);\n\n        for (const el of allContent) {\n            if (el.getAttribute('aria-hidden') === 'true') continue;\n            if (interactiveSet.has(el)) continue;\n\n            const style = window.getComputedStyle(el);\n            if (style.display === 'none' || style.visibility === 'hidden') continue;\n\n            const tag = el.tagName.toLowerCase();\n            const role = el.getAttribute('role') || getImplicitRole(el);\n            const name = computeAccessibleName(el, role);\n\n            if (!name) continue;\n\n            const existingRef = el.getAttribute('data-cursor-ref');\n            let ref = null;\n            if (isValidRef(existingRef) && !usedRefs.has(existingRef)) {\n                ref = existingRef;\n            } else {\n                ref = 'e' + refCounter++;\n            }\n            el.setAttribute('data-cursor-ref', ref);\n            usedRefs.add(ref);\n\n            const node = { ref, role, name, tag };\n\n            if (role === 'heading') {\n                const ariaLevel = parseInt(el.getAttribute('aria-level') || '', 10);\n                const tagLevelMatch = tag.match(/^h([1-6])$/);\n                const tagLevel = tagLevelMatch ? parseInt(tagLevelMatch[1], 10) : undefined;\n                const level = !Number.isNaN(ariaLevel) ? ariaLevel : tagLevel;\n                if (level) node.level = level;\n            }\n\n            elements.push(node);\n        }\n\n        return elements;\n    }\n\n    refCounter = getMaxRefIndex() + 1;\n\n    const { elements: interactiveElements, tracker, usedRefs, interactiveSet } = buildInteractiveSnapshot();\n    const contentElements = interactiveOnly ? [] : buildContentElements(interactiveSet, usedRefs);\n\n    const allElements = [...interactiveElements, ...contentElements];\n\n    querySelectorAllIncludingOpenShadowRoots('[data-cursor-ref]').forEach(el => {\n        const ref = el.getAttribute('data-cursor-ref');\n        if (!isValidRef(ref) || !usedRefs.has(ref)) {\n            el.removeAttribute('data-cursor-ref');\n        }\n    });\n\n    const tree = {\n        role: 'document',\n        ref: 'root',\n        name: document.title || '',\n        children: allElements\n    };\n\n    return {\n        tree,\n        stats: {\n            totalRefs: allElements.length,\n            interactiveRefs: interactiveElements.length,\n            maxDepth: maxDepth\n        }\n    };\n}\n",
    d = require("fs/promises"),
    u = require("path"),
    p = require("os");
  function f() {}
  function m(t, e, n, r, o) {
    for (var s, i = []; e;)
      (i.push(e), (s = e.previousComponent), delete e.previousComponent, (e = s));
    i.reverse();
    for (var a = 0, l = i.length, c = 0, d = 0; a < l; a++) {
      var u = i[a];
      if (u.removed) {
        if (((u.value = t.join(r.slice(d, d + u.count))), (d += u.count), a && i[a - 1].added)) {
          var p = i[a - 1];
          ((i[a - 1] = i[a]), (i[a] = p));
        }
      } else {
        if (!u.added && o) {
          var f = n.slice(c, c + u.count);
          ((f = f.map(function (t, e) {
            var n = r[d + e];
            return n.length > t.length ? n : t;
          })),
            (u.value = t.join(f)));
        } else u.value = t.join(n.slice(c, c + u.count));
        ((c += u.count), u.added || (d += u.count));
      }
    }
    var m = i[l - 1];
    return (
      l > 1 &&
        "string" == typeof m.value &&
        (m.added || m.removed) &&
        t.equals("", m.value) &&
        ((i[l - 2].value += m.value), i.pop()),
      i
    );
  }
  f.prototype = {
    diff: function (t, e) {
      var n,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        o = r.callback;
      ("function" == typeof r && ((o = r), (r = {})), (this.options = r));
      var s = this;
      function i(t) {
        return o
          ? (setTimeout(function () {
              o(void 0, t);
            }, 0),
            !0)
          : t;
      }
      ((t = this.castInput(t)), (e = this.castInput(e)), (t = this.removeEmpty(this.tokenize(t))));
      var a = (e = this.removeEmpty(this.tokenize(e))).length,
        l = t.length,
        c = 1,
        d = a + l;
      r.maxEditLength && (d = Math.min(d, r.maxEditLength));
      var u = null !== (n = r.timeout) && void 0 !== n ? n : 1 / 0,
        p = Date.now() + u,
        f = [{ oldPos: -1, lastComponent: void 0 }],
        h = this.extractCommon(f[0], e, t, 0);
      if (f[0].oldPos + 1 >= l && h + 1 >= a) return i([{ value: this.join(e), count: e.length }]);
      var g = -1 / 0,
        w = 1 / 0;
      function b() {
        for (var n = Math.max(g, -c); n <= Math.min(w, c); n += 2) {
          var r = void 0,
            o = f[n - 1],
            d = f[n + 1];
          o && (f[n - 1] = void 0);
          var u = !1;
          if (d) {
            var p = d.oldPos - n;
            u = d && 0 <= p && p < a;
          }
          var b = o && o.oldPos + 1 < l;
          if (u || b) {
            if (
              ((r =
                !b || (u && o.oldPos + 1 < d.oldPos)
                  ? s.addToPath(d, !0, void 0, 0)
                  : s.addToPath(o, void 0, !0, 1)),
              (h = s.extractCommon(r, e, t, n)),
              r.oldPos + 1 >= l && h + 1 >= a)
            )
              return i(m(s, r.lastComponent, e, t, s.useLongestToken));
            ((f[n] = r),
              r.oldPos + 1 >= l && (w = Math.min(w, n - 1)),
              h + 1 >= a && (g = Math.max(g, n + 1)));
          } else f[n] = void 0;
        }
        c++;
      }
      if (o)
        !(function t() {
          setTimeout(function () {
            if (c > d || Date.now() > p) return o();
            b() || t();
          }, 0);
        })();
      else
        for (; c <= d && Date.now() <= p;) {
          var y = b();
          if (y) return y;
        }
    },
    addToPath: function (t, e, n, r) {
      var o = t.lastComponent;
      return o && o.added === e && o.removed === n
        ? {
            oldPos: t.oldPos + r,
            lastComponent: {
              count: o.count + 1,
              added: e,
              removed: n,
              previousComponent: o.previousComponent,
            },
          }
        : {
            oldPos: t.oldPos + r,
            lastComponent: { count: 1, added: e, removed: n, previousComponent: o },
          };
    },
    extractCommon: function (t, e, n, r) {
      for (
        var o = e.length, s = n.length, i = t.oldPos, a = i - r, l = 0;
        a + 1 < o && i + 1 < s && this.equals(e[a + 1], n[i + 1]);
      )
        (a++, i++, l++);
      return (
        l && (t.lastComponent = { count: l, previousComponent: t.lastComponent }), (t.oldPos = i), a
      );
    },
    equals: function (t, e) {
      return this.options.comparator
        ? this.options.comparator(t, e)
        : t === e || (this.options.ignoreCase && t.toLowerCase() === e.toLowerCase());
    },
    removeEmpty: function (t) {
      for (var e = [], n = 0; n < t.length; n++) t[n] && e.push(t[n]);
      return e;
    },
    castInput: function (t) {
      return t;
    },
    tokenize: function (t) {
      return t.split("");
    },
    join: function (t) {
      return t.join("");
    },
  };
  new f();
  var h = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/,
    g = /\S/,
    w = new f();
  ((w.equals = function (t, e) {
    return (
      this.options.ignoreCase && ((t = t.toLowerCase()), (e = e.toLowerCase())),
      t === e || (this.options.ignoreWhitespace && !g.test(t) && !g.test(e))
    );
  }),
    (w.tokenize = function (t) {
      for (var e = t.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n = 0; n < e.length - 1; n++)
        !e[n + 1] &&
          e[n + 2] &&
          h.test(e[n]) &&
          h.test(e[n + 2]) &&
          ((e[n] += e[n + 2]), e.splice(n + 1, 2), n--);
      return e;
    }));
  var b = new f();
  b.tokenize = function (t) {
    this.options.stripTrailingCr && (t = t.replace(/\r\n/g, "\n"));
    var e = [],
      n = t.split(/(\n|\r\n)/);
    n[n.length - 1] || n.pop();
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      r % 2 && !this.options.newlineIsToken
        ? (e[e.length - 1] += o)
        : (this.options.ignoreWhitespace && (o = o.trim()), e.push(o));
    }
    return e;
  };
  var y = new f();
  y.tokenize = function (t) {
    return t.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  var v = new f();
  function x(t) {
    return (
      (x =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      x(t)
    );
  }
  function E(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return k(t);
      })(t) ||
      (function (t) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return k(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(t, e);
      })(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      })()
    );
  }
  function k(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  v.tokenize = function (t) {
    return t.split(/([{}:;,]|\s+)/);
  };
  var S = Object.prototype.toString,
    R = new f();
  function C(t, e, n, r, o) {
    var s, i;
    for (e = e || [], n = n || [], r && (t = r(o, t)), s = 0; s < e.length; s += 1)
      if (e[s] === t) return n[s];
    if ("[object Array]" === S.call(t)) {
      for (e.push(t), i = new Array(t.length), n.push(i), s = 0; s < t.length; s += 1)
        i[s] = C(t[s], e, n, r, o);
      return (e.pop(), n.pop(), i);
    }
    if ((t && t.toJSON && (t = t.toJSON()), "object" === x(t) && null !== t)) {
      (e.push(t), (i = {}), n.push(i));
      var a,
        l = [];
      for (a in t) t.hasOwnProperty(a) && l.push(a);
      for (l.sort(), s = 0; s < l.length; s += 1) i[(a = l[s])] = C(t[a], e, n, r, a);
      (e.pop(), n.pop());
    } else i = t;
    return i;
  }
  ((R.useLongestToken = !0),
    (R.tokenize = b.tokenize),
    (R.castInput = function (t) {
      var e = this.options,
        n = e.undefinedReplacement,
        r = e.stringifyReplacer,
        o =
          void 0 === r
            ? function (t, e) {
                return void 0 === e ? n : e;
              }
            : r;
      return "string" == typeof t ? t : JSON.stringify(C(t, null, null, o), o, "  ");
    }),
    (R.equals = function (t, e) {
      return f.prototype.equals.call(
        R,
        t.replace(/,([\r\n])/g, "$1"),
        e.replace(/,([\r\n])/g, "$1"),
      );
    }));
  var T = new f();
  function I(t, e, n, r, o, s, i) {
    (i || (i = {}), void 0 === i.context && (i.context = 4));
    var a = (function (t, e, n) {
      return b.diff(t, e, n);
    })(n, r, i);
    if (a) {
      a.push({ value: "", lines: [] });
      for (
        var l = [],
          c = 0,
          d = 0,
          u = [],
          p = 1,
          f = 1,
          m = function (t) {
            var e = a[t],
              o = e.lines || e.value.replace(/\n$/, "").split("\n");
            if (((e.lines = o), e.added || e.removed)) {
              var s;
              if (!c) {
                var m = a[t - 1];
                ((c = p),
                  (d = f),
                  m &&
                    ((u = i.context > 0 ? g(m.lines.slice(-i.context)) : []),
                    (c -= u.length),
                    (d -= u.length)));
              }
              ((s = u).push.apply(
                s,
                E(
                  o.map(function (t) {
                    return (e.added ? "+" : "-") + t;
                  }),
                ),
              ),
                e.added ? (f += o.length) : (p += o.length));
            } else {
              if (c)
                if (o.length <= 2 * i.context && t < a.length - 2) {
                  var h;
                  (h = u).push.apply(h, E(g(o)));
                } else {
                  var w,
                    b = Math.min(o.length, i.context);
                  (w = u).push.apply(w, E(g(o.slice(0, b))));
                  var y = {
                    oldStart: c,
                    oldLines: p - c + b,
                    newStart: d,
                    newLines: f - d + b,
                    lines: u,
                  };
                  if (t >= a.length - 2 && o.length <= i.context) {
                    var v = /\n$/.test(n),
                      x = /\n$/.test(r),
                      k = 0 == o.length && u.length > y.oldLines;
                    (!v &&
                      k &&
                      n.length > 0 &&
                      u.splice(y.oldLines, 0, "\\ No newline at end of file"),
                      ((v || k) && x) || u.push("\\ No newline at end of file"));
                  }
                  (l.push(y), (c = 0), (d = 0), (u = []));
                }
              ((p += o.length), (f += o.length));
            }
          },
          h = 0;
        h < a.length;
        h++
      )
        m(h);
      return { oldFileName: t, newFileName: e, oldHeader: o, newHeader: s, hunks: l };
    }
    function g(t) {
      return t.map(function (t) {
        return " " + t;
      });
    }
  }
  function A(t) {
    if (Array.isArray(t)) return t.map(A).join("\n");
    var e = [];
    (t.oldFileName == t.newFileName && e.push("Index: " + t.oldFileName),
      e.push("==================================================================="),
      e.push("--- " + t.oldFileName + (void 0 === t.oldHeader ? "" : "\t" + t.oldHeader)),
      e.push("+++ " + t.newFileName + (void 0 === t.newHeader ? "" : "\t" + t.newHeader)));
    for (var n = 0; n < t.hunks.length; n++) {
      var r = t.hunks[n];
      (0 === r.oldLines && (r.oldStart -= 1),
        0 === r.newLines && (r.newStart -= 1),
        e.push(
          "@@ -" + r.oldStart + "," + r.oldLines + " +" + r.newStart + "," + r.newLines + " @@",
        ),
        e.push.apply(e, r.lines));
    }
    return e.join("\n") + "\n";
  }
  function D(t, e, n, r, o, s) {
    return (function (t, e, n, r, o, s, i) {
      return A(I(t, e, n, r, o, s, i));
    })(t, t, e, n, r, o, s);
  }
  let _;
  function $() {
    if (void 0 === _) {
      const t = (async function () {
        const [
          { createJimp: t },
          { default: e },
          { default: n },
          { default: o, msBmp: s },
          { default: i },
          { default: a },
          { methods: l },
        ] = await Promise.all([
          Promise.all([r.e(746), r.e(716), r.e(273)]).then(r.bind(r, 5273)),
          r.e(621).then(r.bind(r, 7621)),
          r.e(502).then(r.bind(r, 6502)),
          Promise.all([r.e(716), r.e(691)]).then(r.bind(r, 3691)),
          r.e(46).then(r.bind(r, 3046)),
          r.e(928).then(r.bind(r, 9928)),
          Promise.all([r.e(746), r.e(853)]).then(r.bind(r, 5853)),
        ]);
        return t({ formats: [e, n, o, s, i, a], plugins: [l] });
      })().catch((e) => {
        throw (_ === t && (_ = void 0), e);
      });
      _ = t;
    }
    return _;
  }
  ((T.tokenize = function (t) {
    return t.slice();
  }),
    (T.join = T.removeEmpty =
      function (t) {
        return t;
      }));
  const P = 1024,
    N = 1048576,
    M = new Map();
  function O(t) {
    const e = t.match(/^data:([^;]+);base64,(.+)$/);
    if (e) return { mimeType: e[1], base64Data: e[2] };
  }
  function L(t) {
    return /^image\//i.test(t);
  }
  function B(t) {
    const e = O(t);
    if (e && L(e.mimeType)) return { type: "image", data: e.base64Data, mimeType: e.mimeType };
  }
  async function F(t, e) {
    const n = O(t);
    if (n && L(n.mimeType))
      try {
        const r = Buffer.from(n.base64Data, "base64"),
          o = await $(),
          s = await o.read(r),
          i = (function (t, e) {
            return (function (t) {
              switch (t) {
                case "image/png":
                case "image/bmp":
                case "image/tiff":
                case "image/x-ms-bmp":
                case "image/gif":
                case "image/jpeg":
                  return !0;
                default:
                  return !1;
              }
            })(t.mime)
              ? t.mime
              : "image/jpeg" === e
                ? e
                : "image/png";
          })(s, n.mimeType),
          a = s.width,
          l = s.height,
          c = (function (t, e) {
            let n = t,
              r = e;
            return (
              t > e
                ? t > P && ((n = P), (r = Math.max(1, Math.round((e * P) / t))))
                : e > P && ((r = P), (n = Math.max(1, Math.round((t * P) / e)))),
              { width: n, height: r }
            );
          })(a, l),
          d = c.width !== a || c.height !== l;
        let u = r,
          p = a,
          f = l;
        if (d || r.length > N) {
          const t = s.clone();
          for (
            d && t.resize({ w: c.width, h: c.height }),
              u = await t.getBuffer(i),
              p = t.width,
              f = t.height;
            u.length > N && p > 1 && f > 1;
          )
            ((p = Math.max(1, Math.round(0.8 * p))),
              (f = Math.max(1, Math.round(0.8 * f))),
              t.resize({ w: p, h: f }),
              (u = await t.getBuffer(i)));
        }
        return {
          originalDataUrl: t,
          imageContent: { type: "image", data: u.toString("base64"), mimeType: i },
          metadata: {
            ...e,
            originalImageWidth: a,
            originalImageHeight: l,
            sentImageWidth: p,
            sentImageHeight: f,
            mimeType: i,
          },
        };
      } catch {
        return;
      }
  }
  function Y(t) {
    M.delete(t);
  }
  const X = 20480,
    V = u.join(p.homedir(), ".cursor", "browser-logs"),
    H = "cursor.browserView.getURL",
    j = new Map(),
    K = new Map(),
    W = new Map();
  function U(t) {
    if (!t) return t;
    const e = t.trim();
    return e.startsWith("@") ? e.substring(1) : e.startsWith("ref=") ? e.substring(4) : e;
  }
  const q =
      "\nfunction getParentElementAcrossShadow(element) {\n\tif (!element) return null;\n\tif (element.parentElement) return element.parentElement;\n\tconst root = element.getRootNode ? element.getRootNode() : null;\n\tif (root && root.host && root.host.nodeType === Node.ELEMENT_NODE) {\n\t\treturn root.host;\n\t}\n\treturn null;\n}\n\nfunction composedContains(ancestor, node) {\n\tlet current = node;\n\twhile (current) {\n\t\tif (current === ancestor) {\n\t\t\treturn true;\n\t\t}\n\t\tcurrent = getParentElementAcrossShadow(current);\n\t}\n\treturn false;\n}\n\nfunction getDeepElementFromPoint(root, x, y) {\n\tif (!root || typeof root.elementFromPoint !== 'function') {\n\t\treturn null;\n\t}\n\tlet element = root.elementFromPoint(x, y);\n\twhile (element && element.shadowRoot && element.shadowRoot.mode === 'open' && typeof element.shadowRoot.elementFromPoint === 'function') {\n\t\tconst nested = element.shadowRoot.elementFromPoint(x, y);\n\t\tif (!nested || nested === element) {\n\t\t\tbreak;\n\t\t}\n\t\telement = nested;\n\t}\n\treturn element;\n}\n\nfunction walkComposedElements(root, visitor) {\n\tfunction visitContainer(container) {\n\t\tconst children = container && container.children ? Array.from(container.children) : [];\n\t\tfor (const child of children) {\n\t\t\tif (visitElement(child)) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\n\tfunction visitElement(element) {\n\t\tif (visitor(element)) {\n\t\t\treturn true;\n\t\t}\n\t\tif (element.shadowRoot && element.shadowRoot.mode === 'open') {\n\t\t\tif (visitContainer(element.shadowRoot)) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn visitContainer(element);\n\t}\n\n\treturn visitContainer(root);\n}\n\nfunction querySelectorAllIncludingOpenShadowRoots(selector) {\n\tconst matches = [];\n\twalkComposedElements(document, (element) => {\n\t\ttry {\n\t\t\tif (element.matches && element.matches(selector)) {\n\t\t\t\tmatches.push(element);\n\t\t\t}\n\t\t} catch (_) { }\n\t\treturn false;\n\t});\n\treturn matches;\n}\n\nfunction findElementByRef(ref) {\n\tlet element = null;\n\twalkComposedElements(document, (candidate) => {\n\t\tif (candidate.getAttribute && candidate.getAttribute('data-cursor-ref') === ref) {\n\t\t\telement = candidate;\n\t\t\treturn true;\n\t\t}\n\t\treturn false;\n\t});\n\tif (element) {\n\t\treturn { element, method: 'ref-attribute' };\n\t}\n\treturn { element: null, method: 'not-found' };\n}\n\nfunction getElementDescription(element) {\n\tif (!element) return '';\n\tconst tag = element.tagName?.toLowerCase() || '';\n\tconst role = element.getAttribute('role') || '';\n\tconst ariaLabel = element.getAttribute('aria-label') || '';\n\tconst text = (element.textContent || '').trim().substring(0, 50);\n\tconst parts = [];\n\tif (tag) parts.push(tag);\n\tif (role) parts.push('role=' + role);\n\tif (ariaLabel) parts.push('aria-label=\"' + ariaLabel + '\"');\n\telse if (text) parts.push('text=\"' + text + '\"');\n\treturn parts.length > 0 ? ' (' + parts.join(', ') + ')' : '';\n}\n\nfunction assertDescriptionMatches(element, ref, expectedDescription) {\n\tconst actualDescription = getElementDescription(element);\n\tif (expectedDescription) {\n\t\tconst expectedLower = expectedDescription.toLowerCase();\n\t\tconst actualLower = actualDescription.toLowerCase();\n\n\t\tconst actualTextMatch = actualLower.match(/text=\"([^\"]+)\"/);\n\t\tconst actualText = actualTextMatch ? actualTextMatch[1] : '';\n\n\t\tconst actualTag = element.tagName?.toLowerCase() || '';\n\t\tconst actualRole = element.getAttribute?.('role')?.toLowerCase() || '';\n\n\t\tconst expectedMentionsButton = expectedLower.includes('button');\n\t\tconst actualIsButton = actualTag === 'button' || actualRole === 'button' || actualLower.includes('button');\n\n\t\tif (expectedMentionsButton && !actualIsButton) {\n\t\t\tthrow new Error('Stale element reference: ' + ref + ' expected a button but found ' + actualDescription + '. The page may have changed. Take a new snapshot.');\n\t\t}\n\n\t\tconst expectedWords = expectedLower.replace(/button|link|input|checkbox|radio/g, '').trim().split(/\\s+/).filter(w => w.length > 2);\n\t\tif (expectedWords.length > 0 && actualText) {\n\t\t\tconst hasMatchingWord = expectedWords.some(word => actualText.includes(word));\n\t\t\tif (!hasMatchingWord) {\n\t\t\t\tthrow new Error('Stale element reference: ' + ref + ' now points to' + actualDescription + ' but was expected to be \"' + expectedDescription + '\". The page may have changed. Take a new snapshot.');\n\t\t\t}\n\t\t}\n\t}\n}\n\nfunction validateElementForInteraction(element, ref, action, expectedDescription) {\n\tif (!element) {\n\t\tthrow new Error('Element not found: ' + ref + '. Take a snapshot to get updated refs.');\n\t}\n\n\tassertDescriptionMatches(element, ref, expectedDescription);\n\n\tconst actualDescription = getElementDescription(element);\n\n\tconst rect = element.getBoundingClientRect();\n\tif (rect.width === 0 && rect.height === 0) {\n\t\tthrow new Error('Element ' + ref + actualDescription + ' is not visible (zero dimensions). It may be hidden or collapsed.');\n\t}\n\n\tconst style = window.getComputedStyle(element);\n\tif (style.display === 'none') {\n\t\tthrow new Error('Element ' + ref + actualDescription + ' is hidden (display: none).');\n\t}\n\tif (style.visibility === 'hidden') {\n\t\tthrow new Error('Element ' + ref + actualDescription + ' is hidden (visibility: hidden).');\n\t}\n\tif (parseFloat(style.opacity) === 0) {\n\t\tthrow new Error('Element ' + ref + actualDescription + ' is not visible (opacity: 0). Wait for it to appear.');\n\t}\n\tif (style.pointerEvents === 'none' && action !== 'type' && action !== 'fill') {\n\t\tthrow new Error('Element ' + ref + actualDescription + ' has pointer-events: none and cannot receive ' + action + ' interactions. Try clicking a parent element or waiting for a loading state to complete.');\n\t}\n\n\tif (element.disabled) {\n\t\tthrow new Error('Element ' + ref + actualDescription + ' is disabled and cannot be interacted with. Enable the element first or interact with a different element.');\n\t}\n\tlet parent = getParentElementAcrossShadow(element);\n\twhile (parent) {\n\t\tif (parent.tagName === 'FIELDSET' && parent.disabled) {\n\t\t\tthrow new Error('Element ' + ref + actualDescription + ' is inside a disabled fieldset and cannot be interacted with. Enable the fieldset first or interact with elements outside it.');\n\t\t}\n\t\tparent = getParentElementAcrossShadow(parent);\n\t}\n\n\tif (action === 'type' || action === 'fill') {\n\t\tconst tag = element.tagName?.toLowerCase();\n\t\tconst isContentEditable = element.isContentEditable || element.getAttribute('contenteditable') === 'true';\n\t\tconst isReadonly = element.readOnly || element.getAttribute('readonly') !== null;\n\t\tconst isTextInput = (tag === 'input' && !['button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'image', 'hidden'].includes(element.type?.toLowerCase())) ||\n\t\t\ttag === 'textarea' ||\n\t\t\tisContentEditable;\n\t\tif (!isTextInput) {\n\t\t\tthrow new Error('Element ' + ref + actualDescription + ' is not a text input, textarea, or contenteditable element. Use browser_cdp with DOM and Input commands if you want to interact with this element.');\n\t\t}\n\t\tif (isReadonly && !isContentEditable) {\n\t\t\tthrow new Error('Element ' + ref + actualDescription + ' is readonly and cannot be modified. The value is set programmatically and cannot be changed by user input.');\n\t\t}\n\t}\n\n\treturn true;\n}\n\nfunction previewNode(element) {\n\tif (!element) return 'null';\n\tconst tag = element.tagName?.toLowerCase() || 'unknown';\n\tconst attrs = [];\n\tif (element.id) attrs.push('id=\"' + element.id + '\"');\n\tif (element.className && typeof element.className === 'string') {\n\t\tconst classes = element.className.trim().split(/\\s+/).slice(0, 2).join(' ');\n\t\tif (classes) attrs.push('class=\"' + classes + '\"');\n\t}\n\tif (element.getAttribute && element.getAttribute('role')) {\n\t\tattrs.push('role=\"' + element.getAttribute('role') + '\"');\n\t}\n\tif (element.getAttribute && element.getAttribute('data-cursor-ref')) {\n\t\tattrs.push('ref=\"' + element.getAttribute('data-cursor-ref') + '\"');\n\t}\n\tconst text = (element.textContent || '').trim().substring(0, 30);\n\tconst textPart = text ? '>' + text + '...' : '';\n\treturn '<' + tag + (attrs.length ? ' ' + attrs.join(' ') : '') + textPart + '>';\n}\n\nfunction expectHitTarget(hitPoint, targetElement, targetRef) {\n\tconst doc = hitPoint.ownerDocument || document;\n\tlet hitElement = getDeepElementFromPoint(doc, hitPoint.x, hitPoint.y);\n\n\tif (!hitElement) {\n\t\treturn {\n\t\t\thit: false,\n\t\t\tinterceptedBy: 'nothing (coordinates outside viewport)',\n\t\t\terror: 'Click coordinates (' + hitPoint.x + ', ' + hitPoint.y + ') are outside the visible viewport.',\n\t\t\tsuggestion: 'The element may be scrolled out of view. Use browser_cdp with Runtime.evaluate or DOM commands to scroll it into view first.'\n\t\t};\n\t}\n\n\tif (hitElement === targetElement || composedContains(targetElement, hitElement)) {\n\t\treturn { hit: true };\n\t}\n\n\tif (composedContains(targetElement, getParentElementAcrossShadow(hitElement))) {\n\t\treturn { hit: true };\n\t}\n\n\tfunction isScrollContainer(el) {\n\t\tconst style = window.getComputedStyle(el);\n\t\tconst overflowY = style.overflowY;\n\t\tconst overflowX = style.overflowX;\n\t\treturn (overflowY === 'auto' || overflowY === 'scroll' || overflowX === 'auto' || overflowX === 'scroll') &&\n\t\t\t(el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth);\n\t}\n\n\tfunction isElementClippedByContainer(el, container) {\n\t\tconst elRect = el.getBoundingClientRect();\n\t\tconst containerRect = container.getBoundingClientRect();\n\t\treturn elRect.top < containerRect.top || elRect.bottom > containerRect.bottom ||\n\t\t\telRect.left < containerRect.left || elRect.right > containerRect.right;\n\t}\n\n\tlet current = hitElement;\n\twhile (current && current !== targetElement && current !== document.body) {\n\t\tconst tagName = current.tagName?.toLowerCase() || '';\n\t\tconst role = current.getAttribute?.('role') || '';\n\t\tconst style = window.getComputedStyle(current);\n\t\tconst position = style.position;\n\t\tconst zIndex = parseInt(style.zIndex, 10);\n\t\tconst hasHighZIndex = !isNaN(zIndex) && zIndex > 100;\n\t\tconst isFixed = position === 'fixed' || position === 'absolute';\n\n\t\tconst isDialog = tagName === 'dialog' || role === 'dialog' || role === 'alertdialog';\n\t\tconst isModal = current.getAttribute?.('aria-modal') === 'true';\n\t\tconst isIframe = tagName === 'iframe';\n\t\tconst isNavOrHeader = tagName === 'nav' || tagName === 'header' || role === 'navigation' || role === 'banner';\n\n\t\tif (isIframe) {\n\t\t\tconst hitRef = current.getAttribute('data-cursor-ref');\n\t\t\tconst preview = previewNode(current);\n\t\t\treturn {\n\t\t\t\thit: false,\n\t\t\t\tinterceptedBy: preview,\n\t\t\t\tinterceptedRef: hitRef || undefined,\n\t\t\t\tblockingType: 'iframe',\n\t\t\t\terror: 'Click would hit an iframe instead of the target element.',\n\t\t\t\tsuggestion: 'The target is behind an iframe. Iframe content cannot be interacted with directly. ' + (hitRef ? 'The iframe has ref ' + hitRef + '.' : 'Navigate to the iframe URL directly if you need to interact with its content.')\n\t\t\t};\n\t\t}\n\n\t\tif (isDialog || isModal) {\n\t\t\tconst hitRef = current.getAttribute('data-cursor-ref');\n\t\t\tconst preview = previewNode(current);\n\t\t\treturn {\n\t\t\t\thit: false,\n\t\t\t\tinterceptedBy: preview,\n\t\t\t\tinterceptedRef: hitRef || undefined,\n\t\t\t\tblockingType: 'modal',\n\t\t\t\terror: 'Click would hit a modal/dialog instead of the target element.',\n\t\t\t\tsuggestion: 'A modal or dialog is blocking the target. Close it first with browser_cdp using Runtime.evaluate or by clicking its close button.'\n\t\t\t};\n\t\t}\n\n\t\tif (isScrollContainer(current)) {\n\t\t\tif (targetElement.closest && composedContains(current, targetElement)) {\n\t\t\t\tif (isElementClippedByContainer(targetElement, current)) {\n\t\t\t\t\tconst hitRef = current.getAttribute('data-cursor-ref');\n\t\t\t\t\tconst preview = previewNode(current);\n\t\t\t\t\treturn {\n\t\t\t\t\t\thit: false,\n\t\t\t\t\t\tinterceptedBy: preview,\n\t\t\t\t\t\tinterceptedRef: hitRef || undefined,\n\t\t\t\t\t\tblockingType: 'scroll-container',\n\t\t\t\t\t\terror: 'The target element is clipped by a scroll container (' + preview + '). The element exists but is not visible within its scrollable parent.',\n\t\t\t\t\t\tsuggestion: 'Use browser_cdp with Runtime.evaluate to scroll the element into view within its container.' + (hitRef ? ' The scroll container has ref ' + hitRef + '.' : '')\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (isNavOrHeader && isFixed) {\n\t\t\tconst hitRef = current.getAttribute('data-cursor-ref');\n\t\t\tconst preview = previewNode(current);\n\t\t\treturn {\n\t\t\t\thit: false,\n\t\t\t\tinterceptedBy: preview,\n\t\t\t\tinterceptedRef: hitRef || undefined,\n\t\t\t\tblockingType: 'fixed-header',\n\t\t\t\terror: 'Click would hit a fixed header/navigation bar instead of the target.',\n\t\t\t\tsuggestion: 'A fixed header/navigation bar is blocking the target. Try scrolling the page so the target is not behind the fixed element, or click directly on the header element if that is the intent.'\n\t\t\t};\n\t\t}\n\n\t\tif (hasHighZIndex && isFixed && !isScrollContainer(current)) {\n\t\t\tconst hitRef = current.getAttribute('data-cursor-ref');\n\t\t\tconst preview = previewNode(current);\n\t\t\treturn {\n\t\t\t\thit: false,\n\t\t\t\tinterceptedBy: preview,\n\t\t\t\tinterceptedRef: hitRef || undefined,\n\t\t\t\tblockingType: 'overlay',\n\t\t\t\terror: 'Click would hit an overlay element (' + preview + ') instead of the target.',\n\t\t\t\tsuggestion: hitRef\n\t\t\t\t\t? 'An overlay (ref: ' + hitRef + ') is blocking the target. Either click that element directly, or dismiss/close the overlay first.'\n\t\t\t\t\t: 'An overlay element is blocking the target. Close or dismiss this overlay before interacting with elements behind it. Try pressing Escape or looking for a close button.'\n\t\t\t};\n\t\t}\n\n\t\tcurrent = getParentElementAcrossShadow(current);\n\t}\n\n\tif (current !== targetElement && !composedContains(targetElement, hitElement)) {\n\t\tconst hitRef = hitElement.getAttribute('data-cursor-ref');\n\t\tconst preview = previewNode(hitElement);\n\t\tconst targetRect = targetElement.getBoundingClientRect();\n\t\tconst isTargetOffscreen = targetRect.bottom < 0 || targetRect.top > window.innerHeight ||\n\t\t\ttargetRect.right < 0 || targetRect.left > window.innerWidth;\n\n\t\tif (isTargetOffscreen) {\n\t\t\treturn {\n\t\t\t\thit: false,\n\t\t\t\tinterceptedBy: preview,\n\t\t\t\tinterceptedRef: hitRef || undefined,\n\t\t\t\tblockingType: 'offscreen',\n\t\t\t\terror: 'The target element is outside the visible viewport.',\n\t\t\t\tsuggestion: 'Use browser_cdp with Runtime.evaluate to bring the target into view first.'\n\t\t\t};\n\t\t}\n\n\t\tconst hitElementStyle = window.getComputedStyle(hitElement);\n\t\tconst hitTagName = hitElement.tagName?.toLowerCase() || '';\n\t\tconst isHitScrollContainer = isScrollContainer(hitElement);\n\n\t\tif (isHitScrollContainer && composedContains(hitElement, targetElement)) {\n\t\t\treturn {\n\t\t\t\thit: false,\n\t\t\t\tinterceptedBy: preview,\n\t\t\t\tinterceptedRef: hitRef || undefined,\n\t\t\t\tblockingType: 'scroll-container',\n\t\t\t\terror: 'The target is inside a scroll container but not in the visible scroll area. The click would hit the scroll container instead.',\n\t\t\t\tsuggestion: 'Use browser_cdp with Runtime.evaluate to scroll the element into view within its container.'\n\t\t\t};\n\t\t}\n\n\t\treturn {\n\t\t\thit: false,\n\t\t\tinterceptedBy: preview,\n\t\t\tinterceptedRef: hitRef || undefined,\n\t\t\tblockingType: 'sibling',\n\t\t\terror: 'Click would hit a different element (' + preview + ') instead of the target.',\n\t\t\tsuggestion: hitRef\n\t\t\t\t? 'The element at the click position has ref ' + hitRef + '. Click that ref if it is the intended target, or take a snapshot to see updated element positions.'\n\t\t\t\t: 'Another element is at the click position. Take a snapshot to see the current page layout and find the correct element ref.'\n\t\t};\n\t}\n\n\treturn { hit: true };\n}\n",
    J = [
      {
        patterns: ["element not found", "cannot find"],
        getMessage: (t) => "Element not found" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "Take a snapshot first to see the current page state and available element refs. The refs might have changed since the last snapshot.",
        recovery: "browser_snapshot",
      },
      {
        patterns: ["is not a text input", "use click instead"],
        getMessage: (t) => "Element is not a text input" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "This element cannot accept text input. If you need to interact with it, use browser_cdp with DOM and Runtime.evaluate commands. If you need to type, find the actual input element.",
        recovery: "browser_cdp or browser_snapshot to find correct input",
      },
      {
        patterns: ["timeout", "timed out"],
        getMessage: () => "Operation timed out",
        suggestion:
          "The page might be slow to respond. Try waiting a bit and then taking a snapshot to check the current state.",
        recovery: "browser_cdp polling with Runtime.evaluate",
      },
      {
        patterns: ["not visible", "hidden", "obscured", "zero dimensions"],
        getMessage: (t) => "Element is not visible or interactable" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "The element might be hidden, covered by another element, or outside the viewport. Try scrolling to bring it into view, or dismiss any overlays first.",
        recovery: "browser_cdp with Runtime.evaluate",
      },
      {
        patterns: ["multiple elements", "ambiguous"],
        getMessage: (t) =>
          "Multiple elements match the selector" + (t?.selector ? `: ${t.selector}` : ""),
        suggestion:
          "Use a more specific selector or take a snapshot to see the element refs, then use the ref directly.",
        recovery: "browser_snapshot to get specific refs",
      },
      {
        patterns: ["pointer-events: none", "pointer-events:none"],
        getMessage: (t) =>
          "Element has pointer-events: none CSS property" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "This element cannot receive pointer events due to its CSS. The element may be decorative or the interaction should target a different element.",
        recovery: "browser_snapshot to find an alternative clickable element",
      },
      {
        patterns: ["blocked by an overlay", "blocked by a modal"],
        getMessage: (t, e) =>
          e || "Element is blocked by an overlay or modal" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "Close the modal or overlay first before interacting with elements behind it. If no modal is visible, try taking a fresh snapshot as element refs may be stale.",
        recovery: "browser_snapshot to refresh refs, or browser_cdp with Runtime.evaluate",
      },
      {
        patterns: ["failed to focus"],
        getMessage: (t, e) => e || "Failed to focus element" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "The element could not receive focus. Check if another element is covering it, if it has a negative tabindex, or if it is disabled. Take a snapshot to verify current element state.",
        recovery: "browser_snapshot to check element state",
      },
      {
        patterns: ["navigation", "redirect"],
        getMessage: () => "Navigation occurred during the operation",
        suggestion:
          "Wait for navigation to complete and take a new snapshot to see the updated page state.",
        recovery: "browser_snapshot after navigation completes",
      },
      {
        patterns: ["detached", "stale"],
        getMessage: () => "Element reference is stale (page has changed)",
        suggestion:
          "The page content has changed since the last snapshot. Take a new snapshot to get updated refs.",
        recovery: "browser_snapshot",
      },
      {
        patterns: ["disabled fieldset"],
        getMessage: (t) => "Element is inside a disabled fieldset" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "The element is inside a <fieldset disabled> and cannot be interacted with. Enable the fieldset first or interact with elements outside of it.",
        recovery: "browser_snapshot to find alternative elements",
      },
      {
        patterns: ["opacity: 0", "opacity:0"],
        getMessage: (t) =>
          "Element has opacity: 0 and is not visible" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "This element is invisible due to CSS opacity. Wait for it to become visible or interact with a different element.",
        recovery: "browser_cdp polling or browser_snapshot",
      },
      {
        patterns: ["option", "not found"],
        allRequired: !0,
        getMessage: () => "Option value not found in select element",
        suggestion: "Take a snapshot to see the available options in the select element.",
        recovery: "browser_snapshot",
      },
      {
        patterns: ["readonly", "disabled"],
        getMessage: (t) => "Element is readonly or disabled" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "This element cannot be modified directly. Check if there is a way to enable it first.",
        recovery: "Check element states in snapshot",
      },
      {
        patterns: ["clipped by a scroll container", "scroll container"],
        getMessage: (t, e) =>
          e || "Element is clipped by a scroll container" + (t?.ref ? `: ${t.ref}` : ""),
        suggestion:
          "The element is inside a scrollable container but not in the visible scroll area. Use browser_cdp with Runtime.evaluate to scroll it into view.",
        recovery: "browser_cdp with Runtime.evaluate",
      },
      {
        patterns: ["coordinates", "outside", "viewport"],
        allRequired: !0,
        getMessage: (t) =>
          "Click coordinates are outside the visible viewport" +
          (t?.ref ? ` for element ${t.ref}` : ""),
        suggestion:
          "The element may be in a nested scroll container. Try using browser_cdp with Runtime.evaluate to scroll it into view first.",
        recovery: "browser_cdp with Runtime.evaluate",
      },
    ];
  function z(t, e) {
    const n = "string" == typeof t ? t : t.message,
      r = n.toLowerCase();
    if (
      r.includes("strict mode violation") ||
      (r.includes("resolved to") && r.includes("elements"))
    ) {
      const t = n.match(/resolved to (\d+) elements/i);
      return {
        message: `Selector matched ${t ? t[1] : "multiple"} elements${e?.selector ? ` (${e.selector})` : ""}`,
        suggestion:
          "Take a snapshot to get specific refs for each element, then use the ref directly instead of the selector.",
        recovery: "browser_snapshot to get specific refs with nth disambiguation",
      };
    }
    if (r.includes("intercepted") || r.includes("would hit") || r.includes("instead of target")) {
      const t = n.match(/ref:\s*(\w+)/),
        e = t ? t[1] : null,
        o = r.includes("overflow") || r.includes("scroll") || r.includes("container");
      let s = e
        ? `Click the intercepting element (ref: ${e}) directly if that is the intended target, or take a snapshot to see the updated element positions.`
        : "Take a snapshot to see which element is at the click position and use that ref instead.";
      return (
        o &&
          (s +=
            " The element may be inside a scrollable container - try using browser_cdp to scroll the target into view first."),
        {
          message: "Click was intercepted by another element" + (e ? ` (ref: ${e})` : ""),
          suggestion: s,
          recovery: o
            ? "browser_cdp to scroll target ref, or browser_snapshot"
            : e
              ? `browser_cdp with DOM/Input for ref ${e}`
              : "browser_snapshot",
        }
      );
    }
    if (r.includes("option") && r.includes("disabled") && r.includes("cannot be selected")) {
      const t = n.match(/"([^"]+)".*disabled/i);
      return {
        message: `Option "${t ? t[1] : "the requested option"}" is disabled and cannot be selected`,
        suggestion:
          "The specific option you tried to select is disabled. Check the snapshot for available (non-disabled) options, or wait for the option to become enabled.",
        recovery: "browser_snapshot to see available options, or select a different option",
      };
    }
    for (const t of J) {
      if (
        t.allRequired
          ? t.patterns.every((t) => r.includes(t))
          : t.patterns.some((t) => r.includes(t))
      )
        return { message: t.getMessage(e, n), suggestion: t.suggestion, recovery: t.recovery };
    }
    return {
      message: n,
      suggestion:
        "An unexpected error occurred. Try taking a snapshot to understand the current page state.",
      recovery: "browser_snapshot",
    };
  }
  function G(t) {
    const e = [`Error: ${t.message}`];
    return (
      e.push(`\nSuggestion: ${t.suggestion}`),
      t.recovery && e.push(`\nRecovery action: ${t.recovery}`),
      e.join("")
    );
  }
  async function Z(t, e, n) {
    const r = await s.commands.executeCommand(H, e, { ownerAgentId: n?.ownerAgentId });
    await s.commands.executeCommand("cursor.browserOriginAllowlist.ensurePageOriginAllowed", {
      toolName: t,
      url: r,
    });
  }
  function Q(t, e = 0) {
    const n = "  ".repeat(e),
      r = [];
    if ((t.role && r.push(`${n}- role: ${t.role}`), t.name)) {
      const e = String(t.name).replace(/\n/g, " ").trim();
      e.includes(":") || e.includes('"') || e.includes("[")
        ? r.push(`${n}  name: "${e.replace(/"/g, '\\"')}"`)
        : r.push(`${n}  name: ${e}`);
    }
    if (
      (t.ref && r.push(`${n}  ref: ${t.ref}`),
      void 0 !== t.nth && t.nth > 0 && r.push(`${n}  nth: ${t.nth}`),
      void 0 !== t.value && "" !== t.value)
    ) {
      const e = String(t.value).replace(/\n/g, "\\n").substring(0, 100);
      e.includes(":") || e.includes('"') || e.includes("[")
        ? r.push(`${n}  value: "${e.replace(/"/g, '\\"')}"`)
        : r.push(`${n}  value: ${e}`);
    }
    if (
      (void 0 !== t.placeholder &&
        "" !== t.placeholder &&
        r.push(`${n}  placeholder: ${t.placeholder}`),
      void 0 !== t.options && "" !== t.options)
    ) {
      const e = String(t.options).replace(/\n/g, " ").substring(0, 300);
      e.includes(":") || e.includes('"')
        ? r.push(`${n}  options: "${e.replace(/"/g, '\\"')}"`)
        : r.push(`${n}  options: [${e}]`);
    }
    if (
      (void 0 !== t.level && r.push(`${n}  level: ${t.level}`),
      t.states && t.states.length > 0 && r.push(`${n}  states: [${t.states.join(", ")}]`),
      t.children && t.children.length > 0)
    ) {
      r.push(`${n}  children:`);
      for (const n of t.children) r.push(Q(n, e + 2));
    }
    return r.join("\n");
  }
  async function tt(t) {
    await d.mkdir(V, { recursive: !0 });
    const e = `snapshot-${new Date().toISOString().replace(/[:.]/g, "-")}-${Math.random().toString(36).slice(2, 8)}.log`,
      n = u.join(V, e),
      r = t.split("\n"),
      o = r.length,
      s = r.slice(0, Math.min(50, o));
    return (
      await d.writeFile(n, t, "utf8"),
      a.info(`Large snapshot redirected to: ${n} (${o} lines, ${s.length} preview lines)`),
      { filePath: n, previewLines: s, totalLines: o }
    );
  }
  async function et(t, e, n, r) {
    try {
      return await s.commands.executeCommand("cursor.browserView.executeJavaScript", t, e, {
        headless: n,
        ownerAgentId: r?.ownerAgentId,
      });
    } catch (t) {
      throw (a.error("Failed to execute JavaScript in browser:", t), t);
    }
  }
  function nt(t, e) {
    if (null == t) throw new Error("Browser execution returned null or undefined");
    if ("object" != typeof t) throw new Error("Browser execution returned non-object: " + typeof t);
    const n = t;
    if ("boolean" != typeof n.success)
      throw new Error('Browser result missing required "success" field');
    for (const t of e)
      if (!(t in n)) throw new Error(`Browser result missing required field: ${String(t)}`);
    return t;
  }
  async function rt(t) {
    const {
      action: e,
      detailLines: n,
      pageState: r,
      viewId: o,
      snapshotYaml: s,
      includeSnapshotDiff: i,
      context: l,
    } = t;
    if (r?.snapshot) {
      const t = s ?? Q(r.snapshot),
        c = r.url,
        d = r.title,
        u = o ? K.get(o) : void 0;
      o &&
        (!(function (t, e, n) {
          W.set(t, { url: e, title: n });
        })(o, c, d),
        K.set(o, t));
      const p = (function (t, e, n, r) {
          if (t) return { viewId: t, postUrl: e, postTitle: n, postSnapshotYaml: r };
        })(o, c, d, t),
        f = Boolean(i && u && u !== t),
        m = f && u ? D("snapshot", u, t, "previous", "current", { context: 2 }) : void 0,
        h = m ? Buffer.byteLength(m, "utf8") : 0,
        g = void 0 !== m && h > 0 && h <= X,
        w = Buffer.byteLength(t, "utf8");
      if (w > 25600)
        try {
          const { filePath: r, previewLines: s, totalLines: i } = await tt(t),
            a = [];
          (a.push(`### Action: ${e}`),
            n && n.length > 0 && a.push(...n),
            o && a.push(`- Browser View ID: ${o}`),
            a.push(
              "\n### Page state",
              `- Page URL: ${c}`,
              `- Page Title: ${d}`,
              `- Page Snapshot: Large snapshot (${w} bytes, ${i} lines) written to file`,
              `- Snapshot File: [${r}](file://${r})`,
              `- Preview (first ${s.length} lines):`,
              "```yaml",
              s.join("\n"),
              "```",
              `\n... (${i - s.length} more lines in file)`,
            ),
            g && m
              ? a.push("\n### Snapshot diff (previous vs current)", "```diff", m, "```")
              : f &&
                h > X &&
                a.push(
                  "\n### Snapshot diff (previous vs current)",
                  `- Diff too large to include inline (${h} bytes).`,
                ));
          const u = [{ type: "text", text: a.join("\n") }];
          return (
            o && u.push(await lt(o, { title: d, url: c }, l)), { content: u, browserTelemetry: p }
          );
        } catch (t) {
          a.error("Failed to write snapshot to file, returning inline:", t);
        }
      const b = [];
      (b.push(`### Action: ${e}`),
        n && n.length > 0 && b.push(...n),
        o && b.push(`- Browser View ID: ${o}`),
        b.push(
          "\n### Page state",
          `- Page URL: ${c}`,
          `- Page Title: ${d}`,
          "- Page Snapshot:",
          "```yaml",
          t,
          "```",
        ),
        g && m
          ? b.push("\n### Snapshot diff (previous vs current)", "```diff", m, "```")
          : f &&
            h > X &&
            b.push(
              "\n### Snapshot diff (previous vs current)",
              `- Diff too large to include inline (${h} bytes).`,
            ));
      const y = [{ type: "text", text: b.join("\n") }];
      return (
        o && y.push(await lt(o, { title: d, url: c }, l)), { content: y, browserTelemetry: p }
      );
    }
    const c = [{ type: "text", text: JSON.stringify(t) }];
    return (o && c.push(await lt(o, void 0, l)), { content: c });
  }
  async function ot(t, e) {
    const n = await s.commands.executeCommand("cursor.browserView.listTabs", {
      ownerAgentId: e?.ownerAgentId,
    });
    let r;
    return (
      (r = t
        ? n?.tabs?.includes(t)
          ? t
          : void 0
        : (n?.lastInteractedTab ?? n?.activeTab ?? n?.tabs?.[0])),
      r
    );
  }
  async function st(t, e, n, r) {
    if (
      (function (t) {
        const e = j.get(t);
        return !e || Date.now() - e > 1e4;
      })(t)
    ) {
      if ((a.info(`Auto-snapshotting view ${t} (stale or missing)`), !n))
        throw new Error("browserUtils must be provided for ensureFreshSnapshot");
      const o = `${n} buildPageSnapshot();`;
      (await et(o, t, e, r), j.set(t, Date.now()));
    }
  }
  async function it(t, e) {
    try {
      const n = await s.commands.executeCommand(H, t);
      await s.commands.executeCommand("cursor.browserView.updateScreenshot", t, e, n);
    } catch (t) {
      a.warn(`Failed to update screenshot service: ${t}`);
    }
  }
  async function at(t, e, n) {
    if ((Y(t), !n?.cacheViewportScreenshot)) return B(e);
    try {
      const r = await et(
          "\n\t(() => ({\n\t\tviewportCssWidth: window.innerWidth,\n\t\tviewportCssHeight: window.innerHeight,\n\t\turl: window.location.href,\n\t}))();\n",
          t,
          n.headless,
          n.context,
        ),
        o = Number(r.viewportCssWidth),
        s = Number(r.viewportCssHeight),
        i = "string" == typeof r.url ? r.url : "";
      if (!Number.isFinite(o) || !Number.isFinite(s) || 0 === i.length)
        throw new Error("Viewport screenshot metrics were incomplete");
      const a = await F(e, {
        viewportCssWidth: Math.round(o),
        viewportCssHeight: Math.round(s),
        url: i,
      });
      if (!a) throw new Error("Viewport screenshot could not be normalized");
      return (
        (function (t, e) {
          M.set(t, e);
        })(t, a.metadata),
        a.imageContent
      );
    } catch (t) {
      return (a.warn(`Failed to normalize viewport screenshot: ${t}`), B(e));
    }
  }
  async function lt(t, e, n) {
    const r = await s.commands.executeCommand("cursor.browserView.isLocked", t, {
      ownerAgentId: n?.ownerAgentId,
    });
    return { type: "metadata", viewId: t, title: e?.title, url: e?.url, locked: r ?? !1 };
  }
  async function ct(t, e, n, r) {
    if (!n) return t;
    const o = await (async function (t, e) {
      try {
        a.info(`[getScreenshot] viewId=${t}, taking screenshot`);
        const n = await s.commands.executeCommand("cursor.browserView.takeScreenshot", {
          viewId: t,
          type: "png",
          fullPage: !1,
          ownerAgentId: e?.ownerAgentId,
        });
        return n.success && n.dataUrl
          ? (await it(t, n.dataUrl), at(t, n.dataUrl, { cacheViewportScreenshot: !0, context: e }))
          : void a.warn(`Failed to take screenshot: ${n.error}`);
      } catch (t) {
        return void a.warn(`Error taking screenshot: ${t}`);
      }
    })(e, r);
    return (o && t.content.push(o), t);
  }
  const dt =
    "\nfunction setNativeValue(el, val) {\n\tconst elTagName = el.tagName.toUpperCase();\n\tlet valueSetter = null;\n\n\tif (elTagName === 'INPUT') {\n\t\tvalueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;\n\t} else if (elTagName === 'TEXTAREA') {\n\t\tvalueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;\n\t}\n\n\tif (valueSetter) {\n\t\tvalueSetter.call(el, val);\n\t} else {\n\t\tel.value = val;\n\t}\n}\n";
  const ut =
      "\nasync function dispatchMouseClickSequenceInBrowser(element, options) {\n\tconst globals = globalThis;\n\tconst browserDocument = globals.document;\n\tconst button = options.button ?? 'left';\n\tconst modifiers = options.modifiers ?? [];\n\n\tlet buttonValue = 0;\n\tlet buttonsValue = 1;\n\tlet clickEventType = 'click';\n\tif (button === 'right') {\n\t\tbuttonValue = 2;\n\t\tbuttonsValue = 2;\n\t\tclickEventType = 'contextmenu';\n\t} else if (button === 'middle') {\n\t\tbuttonValue = 1;\n\t\tbuttonsValue = 4;\n\t\tclickEventType = 'auxclick';\n\t}\n\n\tconst pointerEventOptions = {\n\t\tbubbles: true,\n\t\tcancelable: true,\n\t\tview: globals.window,\n\t\tbutton: buttonValue,\n\t\tbuttons: buttonsValue,\n\t\tctrlKey: modifiers.includes('Control') || modifiers.includes('ControlOrMeta'),\n\t\tshiftKey: modifiers.includes('Shift'),\n\t\taltKey: modifiers.includes('Alt'),\n\t\tmetaKey: modifiers.includes('Meta') || modifiers.includes('ControlOrMeta'),\n\t\tclientX: options.x,\n\t\tclientY: options.y,\n\t\tpointerId: 1,\n\t\tpointerType: 'mouse',\n\t\tisPrimary: true,\n\t};\n\n\tconst mouseEventOptions = {\n\t\tbubbles: true,\n\t\tcancelable: true,\n\t\tview: globals.window,\n\t\tbutton: buttonValue,\n\t\tbuttons: buttonsValue,\n\t\tctrlKey: modifiers.includes('Control') || modifiers.includes('ControlOrMeta'),\n\t\tshiftKey: modifiers.includes('Shift'),\n\t\taltKey: modifiers.includes('Alt'),\n\t\tmetaKey: modifiers.includes('Meta') || modifiers.includes('ControlOrMeta'),\n\t\tclientX: options.x,\n\t\tclientY: options.y,\n\t};\n\n\tconst previousActiveElement = browserDocument?.activeElement;\n\tif (previousActiveElement && previousActiveElement !== element && previousActiveElement !== browserDocument?.body) {\n\t\tif (typeof previousActiveElement.blur === 'function') {\n\t\t\tpreviousActiveElement.blur();\n\t\t}\n\t}\n\n\tif (typeof element.focus === 'function') {\n\t\telement.focus();\n\t}\n\n\tawait new Promise((resolve) => {\n\t\tglobals.setTimeout(resolve, 0);\n\t});\n\n\telement.dispatchEvent(new globals.PointerEvent('pointerover', pointerEventOptions));\n\telement.dispatchEvent(new globals.PointerEvent('pointerenter', { ...pointerEventOptions, bubbles: false }));\n\telement.dispatchEvent(new globals.MouseEvent('mouseover', mouseEventOptions));\n\telement.dispatchEvent(new globals.MouseEvent('mouseenter', { ...mouseEventOptions, bubbles: false }));\n\telement.dispatchEvent(new globals.PointerEvent('pointermove', pointerEventOptions));\n\telement.dispatchEvent(new globals.MouseEvent('mousemove', mouseEventOptions));\n\telement.dispatchEvent(new globals.PointerEvent('pointerdown', pointerEventOptions));\n\telement.dispatchEvent(new globals.MouseEvent('mousedown', mouseEventOptions));\n\n\tif (typeof element.focus === 'function') {\n\t\telement.focus();\n\t}\n\n\tif ((options.holdDurationMs ?? 0) > 0) {\n\t\tawait new Promise((resolve) => {\n\t\t\tglobals.setTimeout(resolve, options.holdDurationMs);\n\t\t});\n\t}\n\n\telement.dispatchEvent(new globals.PointerEvent('pointerup', pointerEventOptions));\n\telement.dispatchEvent(new globals.MouseEvent('mouseup', mouseEventOptions));\n\telement.dispatchEvent(new globals.MouseEvent(clickEventType, mouseEventOptions));\n\n\tif (options.doubleClick) {\n\t\telement.dispatchEvent(new globals.PointerEvent('pointerdown', pointerEventOptions));\n\t\telement.dispatchEvent(new globals.MouseEvent('mousedown', mouseEventOptions));\n\t\telement.dispatchEvent(new globals.PointerEvent('pointerup', pointerEventOptions));\n\t\telement.dispatchEvent(new globals.MouseEvent('mouseup', mouseEventOptions));\n\t\telement.dispatchEvent(new globals.MouseEvent(clickEventType, mouseEventOptions));\n\t\tif (clickEventType === 'click') {\n\t\t\telement.dispatchEvent(new globals.MouseEvent('dblclick', mouseEventOptions));\n\t\t}\n\t}\n\n\tawait new Promise((resolve) => {\n\t\tglobals.setTimeout(resolve, 0);\n\t});\n}\n",
    pt =
      "\nfunction getScrollableAncestors(el) {\n\tconst ancestors = [];\n\tlet current = el.parentElement;\n\twhile (current && current !== document.body && current !== document.documentElement) {\n\t\tconst style = window.getComputedStyle(current);\n\t\tconst overflowY = style.overflowY;\n\t\tconst overflowX = style.overflowX;\n\t\tconst isScrollable = (\n\t\t\t(overflowY === 'auto' || overflowY === 'scroll' || overflowX === 'auto' || overflowX === 'scroll') &&\n\t\t\t(current.scrollHeight > current.clientHeight || current.scrollWidth > current.clientWidth)\n\t\t);\n\t\tif (isScrollable) {\n\t\t\tancestors.push(current);\n\t\t}\n\t\tcurrent = current.parentElement;\n\t}\n\tif (document.scrollingElement && (document.scrollingElement.scrollHeight > window.innerHeight || document.scrollingElement.scrollWidth > window.innerWidth)) {\n\t\tancestors.push(document.scrollingElement);\n\t}\n\treturn ancestors;\n}\n\nfunction safeRound(val) {\n\tif (typeof val !== 'number' || !Number.isFinite(val)) return 0;\n\treturn Math.round(val);\n}\n\nfunction getScrollContainerInfo(container) {\n\tconst rect = container.getBoundingClientRect();\n\tconst ref = container.getAttribute ? (container.getAttribute('data-cursor-ref') || null) : null;\n\tconst tag = container.tagName?.toLowerCase() || '';\n\tconst id = container.id || null;\n\tconst classes = container.className && typeof container.className === 'string'\n\t\t? container.className.trim().split(/\\s+/).slice(0, 2).join(' ')\n\t\t: '';\n\treturn {\n\t\tref,\n\t\ttag,\n\t\tid,\n\t\tclasses,\n\t\tscrollTop: safeRound(container.scrollTop),\n\t\tscrollLeft: safeRound(container.scrollLeft),\n\t\tscrollHeight: safeRound(container.scrollHeight),\n\t\tscrollWidth: safeRound(container.scrollWidth),\n\t\tclientHeight: safeRound(container.clientHeight),\n\t\tclientWidth: safeRound(container.clientWidth),\n\t\tcanScrollDown: container.scrollTop + container.clientHeight < container.scrollHeight - 5,\n\t\tcanScrollUp: container.scrollTop > 5,\n\t\tcanScrollRight: container.scrollLeft + container.clientWidth < container.scrollWidth - 5,\n\t\tcanScrollLeft: container.scrollLeft > 5,\n\t\tboundingBox: {\n\t\t\ttop: safeRound(rect.top),\n\t\t\tleft: safeRound(rect.left),\n\t\t\twidth: safeRound(rect.width),\n\t\t\theight: safeRound(rect.height)\n\t\t}\n\t};\n}\n\nfunction isElementVisibleInContainer(el, container) {\n\tconst elRect = el.getBoundingClientRect();\n\tconst containerRect = container === document.scrollingElement\n\t\t? { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth }\n\t\t: container.getBoundingClientRect();\n\tconst padding = 10;\n\treturn (\n\t\telRect.top >= containerRect.top - padding &&\n\t\telRect.bottom <= containerRect.bottom + padding &&\n\t\telRect.left >= containerRect.left - padding &&\n\t\telRect.right <= containerRect.right + padding\n\t);\n}\n\nfunction scrollElementIntoContainer(el, container) {\n\tconst elRect = el.getBoundingClientRect();\n\tconst containerRect = container === document.scrollingElement\n\t\t? { top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth, width: window.innerWidth, height: window.innerHeight }\n\t\t: container.getBoundingClientRect();\n\n\tlet scrollTopDelta = 0;\n\tlet scrollLeftDelta = 0;\n\n\tif (elRect.bottom > containerRect.bottom) {\n\t\tscrollTopDelta = elRect.bottom - containerRect.bottom + 20;\n\t} else if (elRect.top < containerRect.top) {\n\t\tscrollTopDelta = elRect.top - containerRect.top - 20;\n\t}\n\n\tif (elRect.right > containerRect.right) {\n\t\tscrollLeftDelta = elRect.right - containerRect.right + 20;\n\t} else if (elRect.left < containerRect.left) {\n\t\tscrollLeftDelta = elRect.left - containerRect.left - 20;\n\t}\n\n\tif (Math.abs(scrollTopDelta) > 5 || Math.abs(scrollLeftDelta) > 5) {\n\t\tcontainer.scrollBy({ top: scrollTopDelta, left: scrollLeftDelta, behavior: 'instant' });\n\t\treturn { scrolled: true, deltaY: safeRound(scrollTopDelta), deltaX: safeRound(scrollLeftDelta) };\n\t}\n\treturn { scrolled: false, deltaY: 0, deltaX: 0 };\n}\n\nfunction isInViewport(rect) {\n\tif (!rect || !Number.isFinite(rect.top) || !Number.isFinite(rect.bottom)) return false;\n\tconst padding = 10;\n\treturn (\n\t\trect.top >= -padding &&\n\t\trect.left >= -padding &&\n\t\trect.bottom <= window.innerHeight + padding &&\n\t\trect.right <= window.innerWidth + padding\n\t);\n}\n\nfunction getSafeRect(element) {\n\tconst rect = element.getBoundingClientRect();\n\treturn {\n\t\ttop: safeRound(rect.top),\n\t\tleft: safeRound(rect.left),\n\t\tbottom: safeRound(rect.bottom),\n\t\tright: safeRound(rect.right),\n\t\twidth: safeRound(rect.width),\n\t\theight: safeRound(rect.height)\n\t};\n}\n\nasync function ensureElementInView(element, maxAttempts) {\n\tconst attempts = maxAttempts || 5;\n\tconst scrollableAncestors = getScrollableAncestors(element);\n\tlet totalScrolledContainers = 0;\n\n\tfor (let attempt = 0; attempt < attempts; attempt++) {\n\t\tconst rect = getSafeRect(element);\n\n\t\tif (isInViewport(rect)) {\n\t\t\treturn {\n\t\t\t\tsuccess: true,\n\t\t\t\tattempts: attempt + 1,\n\t\t\t\tscrolledContainers: totalScrolledContainers,\n\t\t\t\tcontainerCount: scrollableAncestors.length\n\t\t\t};\n\t\t}\n\n\t\tlet didScroll = false;\n\n\t\tfor (let i = 0; i < scrollableAncestors.length; i++) {\n\t\t\tconst container = scrollableAncestors[i];\n\t\t\tif (!isElementVisibleInContainer(element, container)) {\n\t\t\t\tconst scrollResult = scrollElementIntoContainer(element, container);\n\t\t\t\tif (scrollResult.scrolled) {\n\t\t\t\t\ttotalScrolledContainers++;\n\t\t\t\t\tdidScroll = true;\n\t\t\t\t\tawait new Promise(r => setTimeout(r, 100));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (didScroll) {\n\t\t\tawait new Promise(r => setTimeout(r, 50));\n\t\t\tcontinue;\n\t\t}\n\n\t\tconst newRect = getSafeRect(element);\n\t\tif (!isInViewport(newRect)) {\n\t\t\ttry {\n\t\t\t\telement.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' });\n\t\t\t\tawait new Promise(r => setTimeout(r, 100));\n\t\t\t} catch (e) {\n\t\t\t\telement.scrollIntoView(true);\n\t\t\t\tawait new Promise(r => setTimeout(r, 100));\n\t\t\t}\n\t\t}\n\n\t\tconst finalRect = getSafeRect(element);\n\t\tif (isInViewport(finalRect)) {\n\t\t\treturn {\n\t\t\t\tsuccess: true,\n\t\t\t\tattempts: attempt + 1,\n\t\t\t\tscrolledContainers: totalScrolledContainers,\n\t\t\t\tcontainerCount: scrollableAncestors.length\n\t\t\t};\n\t\t}\n\n\t\tfor (let i = scrollableAncestors.length - 1; i >= 0; i--) {\n\t\t\tconst container = scrollableAncestors[i];\n\t\t\tconst scrollResult = scrollElementIntoContainer(element, container);\n\t\t\tif (scrollResult.scrolled) {\n\t\t\t\ttotalScrolledContainers++;\n\t\t\t\tawait new Promise(r => setTimeout(r, 100));\n\t\t\t}\n\t\t}\n\t}\n\n\tconst finalRect = getSafeRect(element);\n\tconst finalContainerInfos = scrollableAncestors.map(c => getScrollContainerInfo(c));\n\n\treturn {\n\t\tsuccess: false,\n\t\tattempts: attempts,\n\t\trect: finalRect,\n\t\tviewportSize: { width: window.innerWidth, height: window.innerHeight },\n\t\tscrollContainers: finalContainerInfos,\n\t\tscrolledContainers: totalScrolledContainers,\n\t\tcontainerCount: scrollableAncestors.length\n\t};\n}\n",
    ft = [];
  function mt(t) {
    (ft.push({ ...t, timestamp: Date.now() }), ft.length > 100 && ft.shift());
    const e = "success" === t.outcome ? "[OK]" : "retry" === t.outcome ? "[RETRY]" : "[FAIL]",
      n = t.attempts > 1 ? ` (attempt ${t.attempts})` : "",
      r = `${e} ${t.actionType}: ${t.targetDescription}${n}`;
    "failure" === t.outcome ? a.warn(r + (t.error ? ` - ${t.error}` : "")) : a.info(r);
  }
  async function ht(t, e, n) {
    const r = t.actionType ?? "safeClick",
      o = await ot(t.viewId, n);
    if (!o)
      return (
        mt({
          actionType: r,
          targetDescription: t.ref,
          attempts: 1,
          outcome: "failure",
          error: "No browser tab available",
        }),
        {
          content: [
            { type: "text", text: "No browser tab available. Please navigate to a page first." },
          ],
        }
      );
    try {
      (await Z("browser_click", o, n), await st(o, t.headless, c, n));
      const s = U(t.ref),
        i = t.element || "",
        a = t.maxScrollAttempts ?? 5,
        l = t.retryOnStaleRef ?? !0,
        d = t.autoCloseDropdowns ?? !0,
        u = t.retryWithOffset ?? !0,
        p = `\n\t\t\t${q}\n\t\t\t${c}\n\t\t\t${pt}\n\t\t\t\nfunction isDropdownElement(el) {\n\tif (!el) return false;\n\tconst tag = el.tagName?.toLowerCase() || '';\n\tconst role = el.getAttribute?.('role') || '';\n\n\tconst dropdownRoles = ['listbox', 'menu', 'combobox', 'tree', 'grid'];\n\tconst dropdownClasses = ['dropdown', 'select-options', 'autocomplete', 'suggestions', 'popover', 'menu-list', 'option-list'];\n\n\tif (dropdownRoles.includes(role)) return true;\n\tif (tag === 'select' || tag === 'datalist') return true;\n\n\tconst ariaHaspopup = el.getAttribute?.('aria-haspopup');\n\tconst ariaExpanded = el.getAttribute?.('aria-expanded');\n\tif (ariaHaspopup && ariaHaspopup !== 'false') return true;\n\tif (ariaExpanded === 'true') return true;\n\n\tconst classList = el.className && typeof el.className === 'string' ? el.className.toLowerCase() : '';\n\tif (dropdownClasses.some(cls => classList.includes(cls))) return true;\n\n\tconst style = window.getComputedStyle(el);\n\tconst isAbsoluteOrFixed = style.position === 'absolute' || style.position === 'fixed';\n\tconst hasHighZIndex = parseInt(style.zIndex, 10) > 10;\n\tconst hasOptions = el.querySelectorAll('[role="option"], [role="menuitem"], option, li').length > 0;\n\n\tif (isAbsoluteOrFixed && hasHighZIndex && hasOptions) return true;\n\n\treturn false;\n}\n\nfunction findDropdownAncestor(el) {\n\tlet current = el;\n\twhile (current && current !== document.body) {\n\t\tif (isDropdownElement(current)) {\n\t\t\treturn current;\n\t\t}\n\t\tcurrent = current.parentElement;\n\t}\n\treturn null;\n}\n\nasync function attemptDropdownClose(dropdownEl) {\n\tconst result = {\n\t\tattempted: true,\n\t\tmethod: null,\n\t\tsuccess: false\n\t};\n\n\tdocument.body.dispatchEvent(new MouseEvent('click', {\n\t\tbubbles: true,\n\t\tcancelable: true,\n\t\tview: window,\n\t\tclientX: 0,\n\t\tclientY: 0\n\t}));\n\tresult.method = 'click-body';\n\n\tawait new Promise(r => setTimeout(r, 100));\n\n\tconst style = window.getComputedStyle(dropdownEl);\n\tif (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {\n\t\tresult.success = true;\n\t\treturn result;\n\t}\n\n\tdocument.dispatchEvent(new KeyboardEvent('keydown', {\n\t\tkey: 'Escape',\n\t\tcode: 'Escape',\n\t\tkeyCode: 27,\n\t\tbubbles: true,\n\t\tcancelable: true\n\t}));\n\tresult.method = 'press-escape';\n\n\tawait new Promise(r => setTimeout(r, 100));\n\n\tconst styleAfterEsc = window.getComputedStyle(dropdownEl);\n\tif (styleAfterEsc.display === 'none' || styleAfterEsc.visibility === 'hidden' || parseFloat(styleAfterEsc.opacity) === 0) {\n\t\tresult.success = true;\n\t}\n\n\treturn result;\n}\n\n\t\t\t\nfunction getBlockingElementInfo(hitElement, targetElement) {\n\tif (!hitElement) {\n\t\treturn null;\n\t}\n\n\tconst tag = hitElement.tagName?.toLowerCase() || '';\n\tconst id = hitElement.id || null;\n\tconst classes = hitElement.className && typeof hitElement.className === 'string'\n\t\t? hitElement.className.trim().split(/\\s+/).filter(Boolean)\n\t\t: [];\n\tconst role = hitElement.getAttribute?.('role') || null;\n\tconst rect = hitElement.getBoundingClientRect();\n\tconst ref = hitElement.getAttribute?.('data-cursor-ref') || null;\n\n\tconst nonInteractiveTags = ['p', 'span', 'div', 'label', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'td', 'th', 'caption', 'figcaption', 'legend', 'small', 'strong', 'em', 'b', 'i', 'u', 'mark', 'del', 'ins', 'sub', 'sup', 'code', 'pre', 'blockquote', 'cite', 'q', 'abbr', 'address', 'time'];\n\tconst interactiveRoles = ['button', 'link', 'checkbox', 'radio', 'textbox', 'combobox', 'listbox', 'menuitem', 'tab', 'switch', 'slider', 'spinbutton', 'option'];\n\tconst dropdownRoles = ['listbox', 'menu', 'combobox', 'tree', 'grid'];\n\n\tconst isNonInteractive = (\n\t\tnonInteractiveTags.includes(tag) &&\n\t\t!role &&\n\t\t!hitElement.onclick &&\n\t\t!hitElement.hasAttribute('tabindex') &&\n\t\thitElement.getAttribute('contenteditable') !== 'true'\n\t);\n\n\tconst isInteractiveByRole = role && interactiveRoles.includes(role);\n\tconst isInteractiveByTag = ['a', 'button', 'input', 'select', 'textarea', 'summary'].includes(tag);\n\n\tconst dropdownAncestor = findDropdownAncestor ? findDropdownAncestor(hitElement) : null;\n\tconst isDropdownOption = role === 'option' || role === 'menuitem' || tag === 'option' ||\n\t\t(dropdownAncestor && dropdownAncestor !== hitElement);\n\n\tconst info = {\n\t\ttag,\n\t\tid,\n\t\tclasses,\n\t\trole,\n\t\tref,\n\t\tisNonInteractiveText: isNonInteractive && !isInteractiveByRole && !isInteractiveByTag,\n\t\tisDropdownOption: isDropdownOption,\n\t\tdropdownAncestorRef: dropdownAncestor ? (dropdownAncestor.getAttribute?.('data-cursor-ref') || null) : null,\n\t\tboundingBox: {\n\t\t\ttop: Math.round(rect.top),\n\t\t\tleft: Math.round(rect.left),\n\t\t\twidth: Math.round(rect.width),\n\t\t\theight: Math.round(rect.height),\n\t\t\tbottom: Math.round(rect.bottom),\n\t\t\tright: Math.round(rect.right)\n\t\t}\n\t};\n\n\tif (tag === 'iframe') {\n\t\tinfo.iframe = getIframeInfo(hitElement);\n\t}\n\n\tif (isNonInteractive && targetElement) {\n\t\tconst targetRect = targetElement.getBoundingClientRect();\n\t\tconst hitRect = rect;\n\n\t\tinfo.clickOffsetSuggestion = null;\n\n\t\tif (hitRect.bottom <= targetRect.bottom && hitRect.top >= targetRect.top) {\n\t\t\tif (hitRect.right < targetRect.right - 10) {\n\t\t\t\tinfo.clickOffsetSuggestion = { offsetX: Math.round(targetRect.width - 5), description: 'right edge' };\n\t\t\t} else if (hitRect.left > targetRect.left + 10) {\n\t\t\t\tinfo.clickOffsetSuggestion = { offsetX: 5, description: 'left edge' };\n\t\t\t}\n\t\t}\n\t\tif (!info.clickOffsetSuggestion) {\n\t\t\tif (hitRect.bottom < targetRect.bottom - 10) {\n\t\t\t\tinfo.clickOffsetSuggestion = { offsetY: Math.round(targetRect.height - 5), description: 'bottom edge' };\n\t\t\t} else if (hitRect.top > targetRect.top + 10) {\n\t\t\t\tinfo.clickOffsetSuggestion = { offsetY: 5, description: 'top edge' };\n\t\t\t}\n\t\t}\n\t}\n\n\treturn info;\n}\n\nfunction getIframeInfo(iframe) {\n\tif (!iframe || iframe.tagName?.toLowerCase() !== 'iframe') {\n\t\treturn null;\n\t}\n\n\tconst src = iframe.getAttribute('src') || null;\n\tconst sandbox = iframe.getAttribute('sandbox') || null;\n\tconst title = iframe.getAttribute('title') || null;\n\tconst name = iframe.getAttribute('name') || null;\n\tconst allow = iframe.getAttribute('allow') || null;\n\n\tlet isSameOrigin = false;\n\ttry {\n\t\tif (src) {\n\t\t\tconst iframeUrl = new URL(src, window.location.href);\n\t\t\tisSameOrigin = iframeUrl.origin === window.location.origin;\n\t\t}\n\t} catch (e) {\n\t\tisSameOrigin = false;\n\t}\n\n\treturn {\n\t\tsrc,\n\t\tsandbox,\n\t\ttitle,\n\t\tname,\n\t\tallow,\n\t\tisSameOrigin\n\t};\n}\n\n\t\t\t\nfunction attemptRefRecovery(ref, expectedRole, expectedName) {\n\tconst allElements = querySelectorAllIncludingOpenShadowRoots('[data-cursor-ref]');\n\tlet bestMatch = null;\n\tlet bestScore = 0;\n\n\tfor (const el of allElements) {\n\t\tconst elRole = el.getAttribute('role') || getImplicitRole(el);\n\t\tconst elName = computeAccessibleName(el, elRole);\n\n\t\tlet score = 0;\n\n\t\tif (expectedRole && elRole === expectedRole) {\n\t\t\tscore += 50;\n\t\t}\n\n\t\tif (expectedName && elName) {\n\t\t\tconst expectedLower = expectedName.toLowerCase();\n\t\t\tconst actualLower = elName.toLowerCase();\n\n\t\t\tif (actualLower === expectedLower) {\n\t\t\t\tscore += 50;\n\t\t\t} else if (actualLower.includes(expectedLower) || expectedLower.includes(actualLower)) {\n\t\t\t\tscore += 25;\n\t\t\t}\n\t\t}\n\n\t\tif (score > bestScore) {\n\t\t\tbestScore = score;\n\t\t\tbestMatch = el;\n\t\t}\n\t}\n\n\tif (bestMatch && bestScore >= 50) {\n\t\treturn {\n\t\t\tsuccess: true,\n\t\t\telement: bestMatch,\n\t\t\tnewRef: bestMatch.getAttribute('data-cursor-ref'),\n\t\t\tmatchScore: bestScore\n\t\t};\n\t}\n\n\treturn { success: false };\n}\n\nfunction parseExpectedDescription(description) {\n\tif (!description) return { role: null, name: null };\n\n\tconst desc = description.toLowerCase();\n\tlet role = null;\n\tlet name = null;\n\n\tconst rolePatterns = [\n\t\t/role=["']?([^"',)]+)/,\n\t\t/^(button|link|textbox|checkbox|radio|combobox|listbox|menuitem|option|slider|switch|tab)/\n\t];\n\n\tfor (const pattern of rolePatterns) {\n\t\tconst match = desc.match(pattern);\n\t\tif (match) {\n\t\t\trole = match[1].trim();\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tconst namePatterns = [\n\t\t/(?:aria-label|text|name)=["']?([^"']+)["']?/,\n\t\t/["']([^"']+)["']/\n\t];\n\n\tfor (const pattern of namePatterns) {\n\t\tconst match = description.match(pattern);\n\t\tif (match) {\n\t\t\tname = match[1].trim();\n\t\t\tbreak;\n\t\t}\n\t}\n\n\tif (!name && description) {\n\t\tname = description.replace(/(.*)/, '').trim();\n\t}\n\n\treturn { role, name };\n}\n\n\t\t\t${ut}\n\t\t\t(async function() {\n\t\t\t\tconst ref = ${JSON.stringify(s)};\n\t\t\t\tconst expectedDescription = ${JSON.stringify(i)};\n\t\t\t\tconst maxScrollAttempts = ${a};\n\t\t\t\tconst retryOnStaleRef = ${l};\n\t\t\t\tconst autoCloseDropdowns = ${d};\n\t\t\t\tconst retryWithOffset = ${u};\n\t\t\t\tlet offsetX = ${t.offsetX ?? "null"};\n\t\t\t\tlet offsetY = ${t.offsetY ?? "null"};\n\t\t\t\tconst holdDurationMs = ${t.holdDurationMs ?? 0};\n\n\t\t\t\tlet element = null;\n\t\t\t\tlet usedRef = ref;\n\t\t\t\tlet recoveryAttempted = false;\n\t\t\t\tlet dropdownRecovery = null;\n\t\t\t\tlet offsetRetry = null;\n\n\t\t\t\tconst findResult = findElementByRef(ref);\n\t\t\t\telement = findResult.element;\n\n\t\t\t\tif (!element && retryOnStaleRef && expectedDescription) {\n\t\t\t\t\tconst { role: expectedRole, name: expectedName } = parseExpectedDescription(expectedDescription);\n\t\t\t\t\tconst recovery = attemptRefRecovery(ref, expectedRole, expectedName);\n\n\t\t\t\t\tif (recovery.success) {\n\t\t\t\t\t\telement = recovery.element;\n\t\t\t\t\t\tusedRef = recovery.newRef;\n\t\t\t\t\t\trecoveryAttempted = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (!element) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\terror: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.',\n\t\t\t\t\t\tstaleRef: true,\n\t\t\t\t\t\trecoveryAttempted: recoveryAttempted\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvalidateElementForInteraction(element, usedRef, 'click', expectedDescription);\n\t\t\t\t} catch (validationError) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\terror: validationError.message,\n\t\t\t\t\t\tvalidationFailed: true\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tconst scrollResult = await ensureElementInView(element, maxScrollAttempts);\n\n\t\t\t\tif (!scrollResult.success) {\n\t\t\t\t\tlet errorMsg = 'Could not scroll element into view after ' + scrollResult.attempts + ' attempts.';\n\t\t\t\t\tif (scrollResult.containerCount > 0) {\n\t\t\t\t\t\terrorMsg += ' Found ' + scrollResult.containerCount + ' scroll container(s).';\n\t\t\t\t\t}\n\t\t\t\t\tif (scrollResult.rect) {\n\t\t\t\t\t\tconst r = scrollResult.rect;\n\t\t\t\t\t\tconst vp = scrollResult.viewportSize;\n\t\t\t\t\t\tconst belowBy = r.bottom - vp.height;\n\t\t\t\t\t\tconst aboveBy = -r.top;\n\t\t\t\t\t\tif (Number.isFinite(belowBy) && belowBy > 0) {\n\t\t\t\t\t\t\terrorMsg += ' Element is ' + Math.round(belowBy) + 'px below viewport.';\n\t\t\t\t\t\t} else if (Number.isFinite(aboveBy) && aboveBy > 0) {\n\t\t\t\t\t\t\terrorMsg += ' Element is ' + Math.round(aboveBy) + 'px above viewport.';\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\terror: errorMsg,\n\t\t\t\t\t\tscrollFailed: true,\n\t\t\t\t\t\telementRect: scrollResult.rect,\n\t\t\t\t\t\tviewportSize: scrollResult.viewportSize,\n\t\t\t\t\t\tscrollContainers: scrollResult.scrollContainers,\n\t\t\t\t\t\tscrolledContainers: scrollResult.scrolledContainers,\n\t\t\t\t\t\tcontainerCount: scrollResult.containerCount\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tconst rect = element.getBoundingClientRect();\n\t\t\t\tlet cx, cy;\n\n\t\t\t\tfunction computeClickCoords(oX, oY) {\n\t\t\t\t\tlet x, y;\n\t\t\t\t\tif (oX !== null && oY !== null) {\n\t\t\t\t\t\tx = Math.round(rect.left + oX);\n\t\t\t\t\t\ty = Math.round(rect.top + oY);\n\t\t\t\t\t} else if (oX !== null) {\n\t\t\t\t\t\tx = Math.round(rect.left + oX);\n\t\t\t\t\t\ty = Math.round(rect.top + rect.height / 2);\n\t\t\t\t\t} else if (oY !== null) {\n\t\t\t\t\t\tx = Math.round(rect.left + rect.width / 2);\n\t\t\t\t\t\ty = Math.round(rect.top + oY);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tx = Math.round(rect.left + rect.width / 2);\n\t\t\t\t\t\ty = Math.round(rect.top + rect.height / 2);\n\t\t\t\t\t}\n\t\t\t\t\treturn { x, y };\n\t\t\t\t}\n\n\t\t\t\tconst coords = computeClickCoords(offsetX, offsetY);\n\t\t\t\tcx = coords.x;\n\t\t\t\tcy = coords.y;\n\n\t\t\t\tlet hitCheck = expectHitTarget({ x: cx, y: cy }, element, usedRef);\n\n\t\t\t\tif (!hitCheck.hit) {\n\t\t\t\t\tconst doc = document;\n\t\t\t\t\tconst hitElement = getDeepElementFromPoint(doc, cx, cy);\n\t\t\t\t\tconst blockingInfo = getBlockingElementInfo(hitElement, element);\n\n\t\t\t\t\tif (autoCloseDropdowns && blockingInfo && (blockingInfo.isDropdownOption || blockingInfo.dropdownAncestorRef)) {\n\t\t\t\t\t\tconst dropdownEl = blockingInfo.dropdownAncestorRef\n\t\t\t\t\t\t\t? findElementByRef(blockingInfo.dropdownAncestorRef).element\n\t\t\t\t\t\t\t: findDropdownAncestor(hitElement);\n\n\t\t\t\t\t\tif (dropdownEl) {\n\t\t\t\t\t\t\tdropdownRecovery = {\n\t\t\t\t\t\t\t\tdetected: true,\n\t\t\t\t\t\t\t\tdropdownRef: dropdownEl.getAttribute('data-cursor-ref') || null,\n\t\t\t\t\t\t\t\tdropdownTag: dropdownEl.tagName?.toLowerCase() || '',\n\t\t\t\t\t\t\t\tdropdownRole: dropdownEl.getAttribute('role') || null,\n\t\t\t\t\t\t\t\trecoveryAttempted: true,\n\t\t\t\t\t\t\t\trecoverySucceeded: false\n\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\tconst closeResult = await attemptDropdownClose(dropdownEl);\n\t\t\t\t\t\t\tdropdownRecovery.recoveryAction = closeResult.method;\n\t\t\t\t\t\t\tdropdownRecovery.recoverySucceeded = closeResult.success;\n\n\t\t\t\t\t\t\tif (closeResult.success) {\n\t\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 50));\n\t\t\t\t\t\t\t\thitCheck = expectHitTarget({ x: cx, y: cy }, element, usedRef);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tif (!hitCheck.hit && retryWithOffset && blockingInfo && blockingInfo.isNonInteractiveText && blockingInfo.clickOffsetSuggestion) {\n\t\t\t\t\t\tconst suggestion = blockingInfo.clickOffsetSuggestion;\n\t\t\t\t\t\toffsetRetry = {\n\t\t\t\t\t\t\tattempted: true,\n\t\t\t\t\t\t\tsuggestedOffset: { x: suggestion.offsetX, y: suggestion.offsetY },\n\t\t\t\t\t\t\tretrySucceeded: false\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tconst newOffsetX = suggestion.offsetX !== undefined ? suggestion.offsetX : offsetX;\n\t\t\t\t\t\tconst newOffsetY = suggestion.offsetY !== undefined ? suggestion.offsetY : offsetY;\n\t\t\t\t\t\tconst newCoords = computeClickCoords(newOffsetX, newOffsetY);\n\n\t\t\t\t\t\tconst retryHitCheck = expectHitTarget({ x: newCoords.x, y: newCoords.y }, element, usedRef);\n\t\t\t\t\t\tif (retryHitCheck.hit) {\n\t\t\t\t\t\t\tcx = newCoords.x;\n\t\t\t\t\t\t\tcy = newCoords.y;\n\t\t\t\t\t\t\toffsetX = newOffsetX;\n\t\t\t\t\t\t\toffsetY = newOffsetY;\n\t\t\t\t\t\t\thitCheck = retryHitCheck;\n\t\t\t\t\t\t\toffsetRetry.retrySucceeded = true;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (!hitCheck.hit) {\n\t\t\t\t\tconst doc = document;\n\t\t\t\t\tconst hitElement = getDeepElementFromPoint(doc, cx, cy);\n\t\t\t\t\tconst blockingInfo = getBlockingElementInfo(hitElement, element);\n\n\t\t\t\t\tlet blockingType = hitCheck.blockingType;\n\t\t\t\t\tif (blockingInfo && (blockingInfo.isDropdownOption || blockingInfo.dropdownAncestorRef)) {\n\t\t\t\t\t\tblockingType = 'dropdown';\n\t\t\t\t\t}\n\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\thitTargetFailed: true,\n\t\t\t\t\t\terror: hitCheck.error || 'Click would not reach the intended element.',\n\t\t\t\t\t\tinterceptedBy: hitCheck.interceptedBy,\n\t\t\t\t\t\tinterceptedRef: hitCheck.interceptedRef,\n\t\t\t\t\t\tblockingType: blockingType,\n\t\t\t\t\t\tblockingElementInfo: blockingInfo,\n\t\t\t\t\t\tsuggestion: hitCheck.suggestion,\n\t\t\t\t\t\ttargetRef: usedRef,\n\t\t\t\t\t\ttargetPreview: previewNode(element),\n\t\t\t\t\t\tscrollAttempts: scrollResult.attempts,\n\t\t\t\t\t\tdropdownRecovery: dropdownRecovery,\n\t\t\t\t\t\toffsetRetry: offsetRetry,\n\t\t\t\t\t\tpageState: {\n\t\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\t\tsnapshot: buildPageSnapshot().tree\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tawait dispatchMouseClickSequenceInBrowser(element, {\n\t\t\t\t\tx: cx,\n\t\t\t\t\ty: cy,\n\t\t\t\t\tbutton: ${JSON.stringify(t.button ?? "left")},\n\t\t\t\t\tmodifiers: ${JSON.stringify(t.modifiers || [])},\n\t\t\t\t\tdoubleClick: ${JSON.stringify(t.doubleClick ?? !1)},\n\t\t\t\t\tholdDurationMs: holdDurationMs\n\t\t\t\t});\n\n\t\t\t\tconst snapshotResult = buildPageSnapshot();\n\t\t\t\treturn {\n\t\t\t\t\tsuccess: true,\n\t\t\t\t\tusedRef: usedRef,\n\t\t\t\t\trefRecovered: recoveryAttempted,\n\t\t\t\t\tscrollAttempts: scrollResult.attempts,\n\t\t\t\t\tscrolledContainers: scrollResult.scrolledContainers || 0,\n\t\t\t\t\tdoubleClick: ${JSON.stringify(t.doubleClick)} || false,\n\t\t\t\t\tbutton: ${JSON.stringify(t.button)} || 'left',\n\t\t\t\t\toffsetUsed: offsetX !== null || offsetY !== null,\n\t\t\t\t\tholdDuration: holdDurationMs,\n\t\t\t\t\tdropdownRecovery: dropdownRecovery,\n\t\t\t\t\toffsetRetry: offsetRetry,\n\t\t\t\t\tpageState: {\n\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t})();\n\t\t`,
        f = nt(await e(p, o, t.headless, n), []);
      if (!f.success) {
        const e = [];
        if (f.hitTargetFailed && f.blockingElementInfo)
          (e.push("Error: Click target intercepted"),
            e.push(""),
            e.push(
              (function (t) {
                const e = [];
                t.isNonInteractiveText
                  ? e.push(`Click intercepted by non-interactive text element: <${t.tag}>`)
                  : (e.push(`Click intercepted by: <${t.tag}`),
                    t.id && (e[e.length - 1] += ` id="${t.id}"`),
                    t.classes &&
                      t.classes.length > 0 &&
                      (e[e.length - 1] += ` class="${t.classes.slice(0, 3).join(" ")}"`),
                    t.role && (e[e.length - 1] += ` role="${t.role}"`),
                    (e[e.length - 1] += ">"));
                t.boundingBox &&
                  e.push(
                    `Position: top=${t.boundingBox.top}, left=${t.boundingBox.left}, ${t.boundingBox.width}x${t.boundingBox.height}`,
                  );
                t.ref && e.push(`Blocking element ref: ${t.ref}`);
                if (t.isNonInteractiveText && t.clickOffsetSuggestion) {
                  e.push("");
                  const n = t.clickOffsetSuggestion;
                  void 0 !== n.offsetX
                    ? e.push(
                        `Suggestion: Use offsetX=${n.offsetX} to click the ${n.description} of the target element.`,
                      )
                    : void 0 !== n.offsetY &&
                      e.push(
                        `Suggestion: Use offsetY=${n.offsetY} to click the ${n.description} of the target element.`,
                      );
                }
                if (t.iframe) {
                  const n = t.iframe;
                  (e.push(""),
                    e.push("Iframe details:"),
                    e.push(`  src: ${n.src || "(none)"}`),
                    e.push(`  title: ${n.title || "(none)"}`),
                    e.push(`  sandbox: ${n.sandbox || "(none)"}`),
                    e.push(`  same-origin: ${n.isSameOrigin}`),
                    n.name && e.push(`  name: ${n.name}`),
                    n.allow && e.push(`  allow: ${n.allow}`),
                    n.isSameOrigin &&
                      n.src &&
                      (e.push(""),
                      e.push(
                        `Suggestion: This iframe is same-origin. You can navigate directly to: ${n.src}`,
                      )));
                }
                return e.join("\n");
              })(f.blockingElementInfo),
            ));
        else if (f.scrollFailed) {
          if ((e.push(`Error: ${f.error}`), f.scrollContainers && f.scrollContainers.length > 0)) {
            (e.push(""), e.push("Scroll containers found:"));
            for (const t of f.scrollContainers) {
              const n = t.ref
                  ? `ref="${t.ref}"`
                  : `<${t.tag}${t.id ? ` id="${t.id}"` : ""}${t.classes ? ` class="${t.classes}"` : ""}>`,
                r = [];
              (t.canScrollDown && r.push("can scroll down"),
                t.canScrollUp && r.push("can scroll up"),
                e.push(`  - ${n} (${r.length > 0 ? r.join(", ") : "at scroll limit"})`));
            }
          }
          f.elementRect &&
            f.viewportSize &&
            (e.push(""),
            e.push(
              `Element position: top=${Math.round(f.elementRect.top)}, bottom=${Math.round(f.elementRect.bottom)}`,
            ),
            e.push(`Viewport: ${f.viewportSize.width}x${f.viewportSize.height}`));
        } else f.error && e.push(`Error: ${f.error}`);
        if (
          (f.dropdownRecovery &&
            f.dropdownRecovery.detected &&
            (e.push(""),
            e.push("Dropdown recovery attempted:"),
            e.push(
              `  - Dropdown element: <${f.dropdownRecovery.dropdownTag}${f.dropdownRecovery.dropdownRole ? ` role="${f.dropdownRecovery.dropdownRole}"` : ""}>`,
            ),
            f.dropdownRecovery.dropdownRef &&
              e.push(`  - Dropdown ref: ${f.dropdownRecovery.dropdownRef}`),
            e.push(`  - Recovery action: ${f.dropdownRecovery.recoveryAction}`),
            e.push(
              "  - Recovery result: " +
                (f.dropdownRecovery.recoverySucceeded
                  ? "succeeded but click still blocked"
                  : "failed"),
            )),
          f.offsetRetry && f.offsetRetry.attempted)
        ) {
          if (
            (e.push(""), e.push("Offset click retry attempted:"), f.offsetRetry.suggestedOffset)
          ) {
            const t = f.offsetRetry.suggestedOffset;
            e.push(`  - Suggested offset: (${t.x ?? "center"}, ${t.y ?? "center"})`);
          }
          e.push("  - Retry result: " + (f.offsetRetry.retrySucceeded ? "succeeded" : "failed"));
        }
        f.suggestion && (e.push(""), e.push(`Suggestion: ${f.suggestion}`));
        let i = "browser_snapshot to see current element positions";
        if (f.scrollFailed && f.scrollContainers && f.scrollContainers.length > 0) {
          const t = f.scrollContainers.find((t) => t.canScrollDown || t.canScrollUp);
          i =
            t && t.ref
              ? `browser_scroll with ref="${t.ref}" and direction="down" to scroll the container, then retry click`
              : "browser_scroll with target ref and scrollIntoView: true, or manually scroll the nearest container";
        } else
          "modal" === f.blockingType
            ? (i =
                'browser_press_key with key "Escape" to close modal, or browser_snapshot to find close button')
            : "offscreen" === f.blockingType || "scroll-container" === f.blockingType
              ? (i = "browser_scroll with ref and scrollIntoView: true")
              : "dropdown" === f.blockingType
                ? (i =
                    'browser_press_key with key "Escape" to close dropdown, or browser_click outside the dropdown area')
                : "iframe" === f.blockingType
                  ? (i =
                      f.blockingElementInfo?.iframe?.isSameOrigin &&
                      f.blockingElementInfo?.iframe?.src
                        ? `browser_navigate to ${f.blockingElementInfo.iframe.src}`
                        : "browser_navigate to iframe URL if accessible, or browser_snapshot to see alternative elements")
                  : f.interceptedRef &&
                    (i = `browser_click with ref "${f.interceptedRef}" if that is the target, or browser_snapshot`);
        if (
          (e.push(""),
          e.push(`Recovery action: ${i}`),
          mt({
            actionType: r,
            targetDescription: `${s}${t.element ? ` (${t.element})` : ""}`,
            attempts: f.scrollAttempts ?? 1,
            outcome: "failure",
            error: f.error,
            blockingInfo: f.blockingElementInfo,
          }),
          f.pageState)
        ) {
          j.set(o, Date.now());
          return ct(
            await rt({
              action: `${r} (failed)`,
              detailLines: e,
              pageState: f.pageState,
              viewId: o,
              context: n,
            }),
            o,
            t.take_screenshot_afterwards ?? !1,
            n,
          );
        }
        return { content: [{ type: "text", text: e.join("\n") }] };
      }
      const m = [];
      if (
        (m.push("- Click type: " + (f.doubleClick ? "double-click" : "single-click")),
        m.push(`- Button: ${f.button || "left"}`),
        f.refRecovered && m.push(`- Ref recovered: original "${s}" -> used "${f.usedRef}"`),
        f.scrollAttempts &&
          f.scrollAttempts > 1 &&
          m.push(`- Scroll attempts: ${f.scrollAttempts}`),
        f.scrolledContainers &&
          f.scrolledContainers > 0 &&
          m.push(`- Scrolled ${f.scrolledContainers} nested container(s)`),
        f.offsetUsed &&
          m.push(`- Position: offset (${t.offsetX ?? "center"}, ${t.offsetY ?? "center"})`),
        f.holdDuration && f.holdDuration > 0 && m.push(`- Hold duration: ${f.holdDuration}ms`),
        f.dropdownRecovery &&
          f.dropdownRecovery.detected &&
          (m.push(
            "- Dropdown recovery: " +
              (f.dropdownRecovery.recoverySucceeded ? "succeeded" : "attempted"),
          ),
          f.dropdownRecovery.dropdownRef &&
            m.push(`  - Dropdown ref: ${f.dropdownRecovery.dropdownRef}`),
          m.push(`  - Recovery action: ${f.dropdownRecovery.recoveryAction}`)),
        f.offsetRetry &&
          f.offsetRetry.attempted &&
          (m.push("- Offset retry: " + (f.offsetRetry.retrySucceeded ? "succeeded" : "attempted")),
          f.offsetRetry.suggestedOffset))
      ) {
        const t = f.offsetRetry.suggestedOffset;
        m.push(`  - Used offset: (${t.x ?? "center"}, ${t.y ?? "center"})`);
      }
      (mt({
        actionType: r,
        targetDescription: `${f.usedRef || s}${t.element ? ` (${t.element})` : ""}`,
        attempts: f.scrollAttempts ?? 1,
        outcome: "success",
      }),
        j.set(o, Date.now()));
      return ct(
        await rt({ action: r, detailLines: m, pageState: f.pageState, viewId: o, context: n }),
        o,
        t.take_screenshot_afterwards ?? !1,
        n,
      );
    } catch (e) {
      const n = z(e instanceof Error ? e : new Error(String(e)), { ref: t.ref, action: r });
      return (
        mt({
          actionType: r,
          targetDescription: t.ref,
          attempts: 1,
          outcome: "failure",
          error: n.message,
        }),
        { content: [{ type: "text", text: G(n) }] }
      );
    }
  }
  async function gt(t, e, n) {
    const r = "click at position",
      o = Math.round(t.x),
      s = Math.round(t.y),
      i = `(${o}, ${s})`;
    if (!Number.isFinite(o) || !Number.isFinite(s))
      return {
        content: [
          {
            type: "text",
            text: "Error: x and y must be finite numbers.\n\nUse coordinates from a fresh viewport screenshot.",
          },
        ],
      };
    const a = await ot(t.viewId, n);
    if (!a)
      return (
        mt({
          actionType: r,
          targetDescription: `(${o}, ${s})`,
          attempts: 1,
          outcome: "failure",
          error: "No browser tab available",
        }),
        {
          content: [
            { type: "text", text: "No browser tab available. Please navigate to a page first." },
          ],
        }
      );
    const l = (function (t) {
      return M.get(t);
    })(a);
    if (!l)
      return (
        mt({
          actionType: r,
          targetDescription: i,
          attempts: 1,
          outcome: "failure",
          error: "No recent viewport screenshot available",
        }),
        {
          content: [
            {
              type: "text",
              text: "Error: browser_mouse_click_xy needs a fresh screenshot for this tab.\n\nTake a screenshot right before this call. Other browser tool calls clear the cache.",
            },
          ],
        }
      );
    const d = (function (t, e, n) {
      const r = n.viewportCssWidth / n.sentImageWidth,
        o = n.viewportCssHeight / n.sentImageHeight;
      return { mappedX: Math.round(t * r), mappedY: Math.round(e * o), scaleX: r, scaleY: o };
    })(o, s, l);
    try {
      await Z("browser_mouse_click_xy", a, n);
      const u = `\n\t\t\t${q}\n\t\t\t${c}\n\t\t\t${ut}\n\t\t\t(async function() {\n\t\t\t\tconst screenshotX = ${o};\n\t\t\t\tconst screenshotY = ${s};\n\t\t\t\tconst mappedX = ${d.mappedX};\n\t\t\t\tconst mappedY = ${d.mappedY};\n\t\t\t\tconst cachedUrl = ${JSON.stringify(l.url)};\n\t\t\t\tconst sentImageWidth = ${l.sentImageWidth};\n\t\t\t\tconst sentImageHeight = ${l.sentImageHeight};\n\n\t\t\t\tif (window.location.href !== cachedUrl) {\n\t\t\t\t\tconst snapshotResult = buildPageSnapshot();\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\tstaleScreenshot: true,\n\t\t\t\t\t\terror: 'browser_mouse_click_xy needs a fresh screenshot. The page changed since the last one.',\n\t\t\t\t\t\tsuggestion: 'Take a new screenshot for this tab, then retry with coordinates from it.',\n\t\t\t\t\t\tpageState: {\n\t\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tconst targetElement = getDeepElementFromPoint(document, mappedX, mappedY);\n\n\t\t\t\tif (!targetElement) {\n\t\t\t\t\tconst snapshotResult = buildPageSnapshot();\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\terror: 'The coordinates are outside the visible viewport.',\n\t\t\t\t\t\tsuggestion: 'Take a new screenshot for this tab, then retry with coordinates from it.',\n\t\t\t\t\t\tscreenshotCoordinates: { x: screenshotX, y: screenshotY },\n\t\t\t\t\t\tmappedCoordinates: { x: mappedX, y: mappedY },\n\t\t\t\t\t\tscreenshotSize: { width: sentImageWidth, height: sentImageHeight },\n\t\t\t\t\t\tpageState: {\n\t\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tawait dispatchMouseClickSequenceInBrowser(targetElement, {\n\t\t\t\t\tx: mappedX,\n\t\t\t\t\ty: mappedY,\n\t\t\t\t\tbutton: ${JSON.stringify(t.button ?? "left")}\n\t\t\t\t});\n\n\t\t\t\tconst snapshotResult = buildPageSnapshot();\n\t\t\t\treturn {\n\t\t\t\t\tsuccess: true,\n\t\t\t\t\tbutton: ${JSON.stringify(t.button ?? "left")},\n\t\t\t\t\tscreenshotCoordinates: { x: screenshotX, y: screenshotY },\n\t\t\t\t\tmappedCoordinates: { x: mappedX, y: mappedY },\n\t\t\t\t\tscreenshotSize: { width: sentImageWidth, height: sentImageHeight },\n\t\t\t\t\ttargetPreview: previewNode(targetElement),\n\t\t\t\t\ttargetRef: targetElement.getAttribute ? (targetElement.getAttribute('data-cursor-ref') || undefined) : undefined,\n\t\t\t\t\tpageState: {\n\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t})();\n\t\t`,
        p = nt(await e(u, a, t.headless, n), []);
      if (!p.success) {
        const e = [`Error: ${p.error || `Failed to click at coordinates (${o}, ${s}).`}`];
        if (
          (p.screenshotCoordinates &&
            p.mappedCoordinates &&
            (e.push(
              `- Screenshot position: (${p.screenshotCoordinates.x}, ${p.screenshotCoordinates.y})`,
            ),
            e.push(
              `- Mapped viewport position: (${p.mappedCoordinates.x}, ${p.mappedCoordinates.y})`,
            )),
          p.screenshotSize &&
            e.push(`- Screenshot size: ${p.screenshotSize.width}x${p.screenshotSize.height}`),
          p.suggestion && e.push("", `Suggestion: ${p.suggestion}`),
          p.staleScreenshot && Y(a),
          mt({
            actionType: r,
            targetDescription: i,
            attempts: 1,
            outcome: "failure",
            error: p.error,
          }),
          p.pageState)
        ) {
          j.set(a, Date.now());
          return ct(
            await rt({
              action: `${r} (failed)`,
              detailLines: e,
              pageState: p.pageState,
              viewId: a,
              context: n,
            }),
            a,
            t.take_screenshot_afterwards ?? !1,
            n,
          );
        }
        return { content: [{ type: "text", text: e.join("\n") }] };
      }
      const f = [`- Screenshot position: (${o}, ${s})`];
      ((d.mappedX === o && d.mappedY === s) ||
        f.push(`- Viewport position: (${d.mappedX}, ${d.mappedY})`),
        p.targetPreview && f.push(`- Target: ${p.targetPreview}`),
        p.targetRef && f.push(`- Target ref: ${p.targetRef}`),
        mt({
          actionType: r,
          targetDescription: p.targetPreview ?? `${i} -> (${d.mappedX}, ${d.mappedY})`,
          attempts: 1,
          outcome: "success",
        }),
        Y(a),
        j.set(a, Date.now()));
      return ct(
        await rt({ action: r, detailLines: f, pageState: p.pageState, viewId: a, context: n }),
        a,
        t.take_screenshot_afterwards ?? !1,
        n,
      );
    } catch (t) {
      const e = z(t instanceof Error ? t : new Error(String(t)), { action: r });
      return (
        mt({
          actionType: r,
          targetDescription: `(${o}, ${s})`,
          attempts: 1,
          outcome: "failure",
          error: e.message,
        }),
        { content: [{ type: "text", text: G(e) }] }
      );
    }
  }
  async function wt(t, e, n) {
    const r = t.actionType ?? "hoverAndWait",
      o = await ot(t.viewId, n);
    if (!o)
      return (
        mt({
          actionType: r,
          targetDescription: t.ref,
          attempts: 1,
          outcome: "failure",
          error: "No browser tab available",
        }),
        {
          content: [
            { type: "text", text: "No browser tab available. Please navigate to a page first." },
          ],
        }
      );
    try {
      (await Z("browser_hover", o, n), await st(o, t.headless, c, n));
      const s = U(t.ref),
        i = t.element || "",
        a = t.maxWaitMs ?? 3e3,
        l = t.pollIntervalMs ?? 200,
        d = t.waitForSelector ?? null,
        u = t.waitForText ?? null,
        p = t.fullSnapshot ?? !1,
        f = t.verifyHoverContent ?? !1,
        m = `\n\t\t\t${q}\n\t\t\t${c}\n\t\t\t${pt}\n\t\t\t\nconst HOVER_WAIT_INTERVALS = [100, 200, 300];\n\nconst DEFAULT_HOVER_SELECTORS = [\n\t'[role="tooltip"]',\n\t'[role="menu"]',\n\t'[role="listbox"]',\n\t'.tooltip',\n\t'.dropdown-menu',\n\t'.popover',\n\t'.submenu',\n\t'[data-tooltip]',\n\t'[aria-describedby]',\n\t'[data-state="open"]',\n\t'[data-radix-popper-content-wrapper]'\n];\n\nfunction isElementVisibleAndSized(el) {\n\tif (!el) return false;\n\tconst style = window.getComputedStyle(el);\n\tif (style.display === 'none' || style.visibility === 'hidden' || parseFloat(style.opacity) === 0) {\n\t\treturn false;\n\t}\n\tconst rect = el.getBoundingClientRect();\n\treturn rect.width > 0 && rect.height > 0;\n}\n\nfunction findNewlyVisibleElements(selectors, previouslyFound) {\n\tconst found = [];\n\tfor (const selector of selectors) {\n\t\ttry {\n\t\t\tconst elements = document.querySelectorAll(selector);\n\t\t\tfor (const el of elements) {\n\t\t\t\tif (isElementVisibleAndSized(el)) {\n\t\t\t\t\tconst ref = el.getAttribute('data-cursor-ref');\n\t\t\t\t\tconst role = el.getAttribute('role') || '';\n\t\t\t\t\tconst tag = el.tagName?.toLowerCase() || '';\n\t\t\t\t\tconst classes = el.className && typeof el.className === 'string'\n\t\t\t\t\t\t? el.className.trim().split(/\\s+/).slice(0, 2).join(' ')\n\t\t\t\t\t\t: '';\n\t\t\t\t\tconst desc = '<' + tag + (role ? ' role="' + role + '"' : '') + (ref ? ' ref="' + ref + '"' : '') + (classes ? ' class="' + classes + '"' : '') + '>';\n\t\t\t\t\tif (!previouslyFound.has(desc)) {\n\t\t\t\t\t\tfound.push({ desc, ref, tag, role });\n\t\t\t\t\t\tpreviouslyFound.add(desc);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t} catch (e) {}\n\t}\n\treturn found;\n}\n\nasync function verifyHoverContentAsync(options) {\n\tconst waitIntervals = HOVER_WAIT_INTERVALS;\n\tconst maxChecks = options.maxChecks || 3;\n\tconst selectors = options.selectors && options.selectors.length > 0\n\t\t? options.selectors\n\t\t: DEFAULT_HOVER_SELECTORS;\n\tconst textPatterns = options.textPatterns || [];\n\n\tconst result = {\n\t\tverified: false,\n\t\tchecksPassed: 0,\n\t\ttotalChecks: maxChecks,\n\t\tfoundElements: [],\n\t\twaitIntervals: [],\n\t\ttotalWaitMs: 0,\n\t\tsnapshotsChecked: 0\n\t};\n\n\tconst previouslyFound = new Set();\n\n\tfor (let i = 0; i < maxChecks; i++) {\n\t\tconst waitMs = waitIntervals[i] || waitIntervals[waitIntervals.length - 1];\n\t\tresult.waitIntervals.push(waitMs);\n\t\tresult.totalWaitMs += waitMs;\n\n\t\tawait new Promise(r => setTimeout(r, waitMs));\n\t\tresult.checksPassed++;\n\t\tresult.snapshotsChecked++;\n\n\t\tconst newElements = findNewlyVisibleElements(selectors, previouslyFound);\n\t\tfor (const el of newElements) {\n\t\t\tresult.foundElements.push(el.desc);\n\t\t\tresult.verified = true;\n\t\t}\n\n\t\tif (textPatterns.length > 0) {\n\t\t\tconst bodyText = document.body.innerText || '';\n\t\t\tfor (const pattern of textPatterns) {\n\t\t\t\tconst patternKey = 'text: "' + pattern.substring(0, 30) + '"';\n\t\t\t\tif (bodyText.includes(pattern) && !previouslyFound.has(patternKey)) {\n\t\t\t\t\tresult.verified = true;\n\t\t\t\t\tresult.foundElements.push(patternKey);\n\t\t\t\t\tpreviouslyFound.add(patternKey);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (result.verified) {\n\t\t\tbreak;\n\t\t}\n\t}\n\n\treturn result;\n}\n\n\t\t\t(async function() {\n\t\t\t\tconst ref = ${JSON.stringify(s)};\n\t\t\t\tconst expectedDescription = ${JSON.stringify(i)};\n\t\t\t\tconst maxWaitMs = ${a};\n\t\t\t\tconst pollIntervalMs = ${l};\n\t\t\t\tconst waitForSelector = ${JSON.stringify(d)};\n\t\t\t\tconst waitForText = ${JSON.stringify(u)};\n\t\t\t\tconst useFullSnapshot = ${p};\n\t\t\t\tconst shouldVerifyHover = ${f};\n\n\t\t\t\tconst { element } = findElementByRef(ref);\n\t\t\t\tif (!element) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\terror: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.'\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\ttry {\n\t\t\t\t\tvalidateElementForInteraction(element, ref, 'hover', expectedDescription);\n\t\t\t\t} catch (e) {\n\t\t\t\t\treturn { success: false, error: e.message };\n\t\t\t\t}\n\n\t\t\t\tconst scrollResult = await ensureElementInView(element, 3);\n\t\t\t\tif (!scrollResult.success) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\terror: 'Could not scroll element into view.'\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tconst rect = element.getBoundingClientRect();\n\t\t\t\tconst cx = Math.round(rect.left + rect.width / 2);\n\t\t\t\tconst cy = Math.round(rect.top + rect.height / 2);\n\n\t\t\t\tconst hitCheck = expectHitTarget({ x: cx, y: cy }, element, ref);\n\t\t\t\tif (!hitCheck.hit) {\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\thitTargetFailed: true,\n\t\t\t\t\t\terror: hitCheck.error || 'Hover would not reach the intended element.',\n\t\t\t\t\t\tinterceptedBy: hitCheck.interceptedBy,\n\t\t\t\t\t\tinterceptedRef: hitCheck.interceptedRef,\n\t\t\t\t\t\tsuggestion: hitCheck.suggestion\n\t\t\t\t\t};\n\t\t\t\t}\n\n\t\t\t\tconst eventOptions = {\n\t\t\t\t\tbubbles: true,\n\t\t\t\t\tcancelable: true,\n\t\t\t\t\tview: window,\n\t\t\t\t\tclientX: cx,\n\t\t\t\t\tclientY: cy,\n\t\t\t\t\tpointerId: 1,\n\t\t\t\t\tpointerType: 'mouse',\n\t\t\t\t\tisPrimary: true\n\t\t\t\t};\n\n\t\t\t\telement.dispatchEvent(new PointerEvent('pointerover', eventOptions));\n\t\t\t\telement.dispatchEvent(new PointerEvent('pointerenter', { ...eventOptions, bubbles: false }));\n\t\t\t\telement.dispatchEvent(new MouseEvent('mouseover', eventOptions));\n\t\t\t\telement.dispatchEvent(new MouseEvent('mouseenter', { ...eventOptions, bubbles: false }));\n\t\t\t\telement.dispatchEvent(new PointerEvent('pointermove', eventOptions));\n\t\t\t\telement.dispatchEvent(new MouseEvent('mousemove', eventOptions));\n\n\t\t\t\tlet waitedMs = 0;\n\t\t\t\tlet foundTarget = false;\n\t\t\t\tlet waitIterations = 0;\n\t\t\t\tlet verificationResult = null;\n\n\t\t\t\tif (shouldVerifyHover) {\n\t\t\t\t\tconst intervals = HOVER_WAIT_INTERVALS;\n\t\t\t\t\tlet totalMs = 0;\n\t\t\t\t\tlet checksNeeded = 0;\n\t\t\t\t\tfor (let i = 0; totalMs < maxWaitMs; i++) {\n\t\t\t\t\t\tconst interval = intervals[Math.min(i, intervals.length - 1)];\n\t\t\t\t\t\ttotalMs += interval;\n\t\t\t\t\t\tchecksNeeded++;\n\t\t\t\t\t}\n\t\t\t\t\tchecksNeeded = Math.max(checksNeeded, 1);\n\n\t\t\t\t\tconst verifyOptions = {\n\t\t\t\t\t\tmaxChecks: checksNeeded,\n\t\t\t\t\t\tselectors: waitForSelector ? [waitForSelector] : undefined,\n\t\t\t\t\t\ttextPatterns: waitForText ? [waitForText] : undefined\n\t\t\t\t\t};\n\t\t\t\t\tverificationResult = await verifyHoverContentAsync(verifyOptions);\n\t\t\t\t\tfoundTarget = verificationResult.verified;\n\t\t\t\t\twaitedMs = verificationResult.totalWaitMs;\n\t\t\t\t\twaitIterations = verificationResult.checksPassed;\n\t\t\t\t} else if (waitForSelector || waitForText) {\n\t\t\t\t\tconst startTime = Date.now();\n\n\t\t\t\t\twhile (waitedMs < maxWaitMs) {\n\t\t\t\t\t\twaitIterations++;\n\n\t\t\t\t\t\tif (waitForSelector) {\n\t\t\t\t\t\t\tconst target = document.querySelector(waitForSelector);\n\t\t\t\t\t\t\tif (target) {\n\t\t\t\t\t\t\t\tconst style = window.getComputedStyle(target);\n\t\t\t\t\t\t\t\tif (style.display !== 'none' && style.visibility !== 'hidden' && parseFloat(style.opacity) > 0) {\n\t\t\t\t\t\t\t\t\tfoundTarget = true;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (waitForText) {\n\t\t\t\t\t\t\tconst bodyText = document.body.innerText || '';\n\t\t\t\t\t\t\tif (bodyText.includes(waitForText)) {\n\t\t\t\t\t\t\t\tfoundTarget = true;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst currentInterval = Math.min(pollIntervalMs * Math.pow(1.5, waitIterations - 1), 500);\n\t\t\t\t\t\tawait new Promise(r => setTimeout(r, currentInterval));\n\t\t\t\t\t\twaitedMs = Date.now() - startTime;\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tawait new Promise(r => setTimeout(r, 100));\n\t\t\t\t\tfoundTarget = true;\n\t\t\t\t}\n\n\t\t\t\tconst snapshotResult = buildPageSnapshot({ compact: !useFullSnapshot });\n\t\t\t\treturn {\n\t\t\t\t\tsuccess: true,\n\t\t\t\t\twaitedMs,\n\t\t\t\t\twaitIterations,\n\t\t\t\t\tfoundTarget,\n\t\t\t\t\twaitCondition: waitForSelector ? 'selector: ' + waitForSelector : (waitForText ? 'text: ' + waitForText : 'none'),\n\t\t\t\t\tsnapshotMode: useFullSnapshot ? 'full' : 'compact',\n\t\t\t\t\tverificationResult: verificationResult,\n\t\t\t\t\tpageState: {\n\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t}\n\t\t\t\t};\n\t\t\t})();\n\t\t`,
        h = nt(await e(m, o, t.headless, n), []);
      if (!h.success) {
        mt({
          actionType: r,
          targetDescription: s,
          attempts: 1,
          outcome: "failure",
          error: h.error,
        });
        return {
          content: [
            { type: "text", text: G(z(h.error || "Hover failed", { ref: t.ref, action: r })) },
          ],
        };
      }
      const g = [];
      (g.push(`- Hovered over element: ${s}`),
        h.waitCondition &&
          "none" !== h.waitCondition &&
          (g.push(`- Wait condition: ${h.waitCondition}`),
          g.push("- Target found: " + (h.foundTarget ? "yes" : "no")),
          g.push(`- Waited: ${h.waitedMs}ms (${h.waitIterations} iterations)`)),
        h.snapshotMode && g.push(`- Snapshot mode: ${h.snapshotMode}`),
        h.verificationResult &&
          (g.push("- Hover verification: " + (h.verificationResult.verified ? "passed" : "failed")),
          g.push(
            `- Checks: ${h.verificationResult.checksPassed}/${h.verificationResult.totalChecks}`,
          ),
          h.verificationResult.foundElements.length > 0 &&
            g.push(`- Found elements: ${h.verificationResult.foundElements.join(", ")}`),
          g.push(`- Wait intervals: [${h.verificationResult.waitIntervals.join("ms, ")}ms]`),
          h.verificationResult.verified ||
            (g.push(""),
            g.push("Hover content verification failed:"),
            g.push(
              `  - Checked ${h.verificationResult.snapshotsChecked || h.verificationResult.checksPassed} snapshots at intervals [100ms, 200ms, 300ms]`,
            ),
            g.push("  - No tooltip, menu, or submenu elements appeared"),
            g.push(`  - Snapshot mode used: ${h.snapshotMode || "compact"}`),
            g.push(""),
            g.push("Suggestions:"),
            g.push("  - Try using fullSnapshot: true for more detailed element detection"),
            g.push("  - The hover target may not have hover-triggered content"),
            g.push("  - Check if the element requires a longer hover duration"))));
      const w = h.verificationResult ? h.verificationResult.verified : h.foundTarget;
      (mt({
        actionType: r,
        targetDescription: s,
        attempts: 1,
        outcome: w ? "success" : "failure",
        error: w ? void 0 : "Hover content not detected after verification",
      }),
        j.set(o, Date.now()));
      return ct(
        await rt({ action: r, detailLines: g, pageState: h.pageState, viewId: o, context: n }),
        o,
        t.take_screenshot_afterwards ?? !1,
        n,
      );
    } catch (e) {
      const n = z(e instanceof Error ? e : new Error(String(e)), { ref: t.ref, action: r });
      return (
        mt({
          actionType: r,
          targetDescription: t.ref,
          attempts: 1,
          outcome: "failure",
          error: n.message,
        }),
        { content: [{ type: "text", text: G(n) }] }
      );
    }
  }
  function bt(t) {
    return {
      async navigate(e, n) {
        (await (async function (t) {
          await s.commands.executeCommand("cursor.browserOriginAllowlist.ensureNavigationAllowed", {
            url: t,
          });
        })(e.url),
          e.headless &&
            !e.viewId &&
            n?.ownerAgentId &&
            (e = { ...e, viewId: `${n.ownerAgentId}:headless` }),
          a.info(`Navigating to ${e.url}${e.headless ? " (headless)" : ""}`));
        const r = { ownerAgentId: n?.ownerAgentId },
          o = await s.commands.executeCommand("cursor.browserView.listTabs", r),
          i = o?.tabs ?? [],
          l = new Set(o?.headlessTabs ?? []);
        let c = !1;
        if (e.viewId) {
          const r = i.includes(e.viewId);
          if (!r && e.headless) {
            a.info(`Creating headless tab with viewId: ${e.viewId}`);
            const r = await s.commands.executeCommand(
              "cursor.browserView.newHeadlessTab",
              e.url,
              e.viewId,
              n?.ownerAgentId,
            );
            return r?.browserId
              ? t.snapshot(
                  {
                    viewId: r.browserId,
                    headless: !0,
                    take_screenshot_afterwards: e.take_screenshot_afterwards,
                  },
                  n,
                )
              : { content: [{ type: "text", text: "Failed to create headless browser tab" }] };
          }
          if (!r)
            return {
              content: [
                {
                  type: "text",
                  text: `Browser view not found: ${e.viewId}. Use browser_navigate without a viewId to create a new tab.`,
                },
              ],
            };
          let o;
          try {
            (j.delete(e.viewId),
              await s.commands.executeCommand("cursor.browserView.navigate", e.url, e.viewId, {
                headless: e.headless,
                preserveFocus: !0,
                trackingId: "mcp_tool",
                ownerAgentId: n?.ownerAgentId,
              }),
              (o = e.viewId));
          } catch (t) {
            if (e.headless) throw t;
            (a.warn(
              `Navigate to viewId ${e.viewId} failed, creating a new tab: ${t instanceof Error ? t.message : String(t)}`,
            ),
              (c = !0));
          }
          if (o)
            return await t.snapshot(
              {
                viewId: o,
                headless: e.headless,
                take_screenshot_afterwards: e.take_screenshot_afterwards,
              },
              n,
            );
        }
        if (!c && i.length > 0 && !e.headless && !e.newTab) {
          const r = i.find((t) => !l.has(t));
          if (r) {
            let o = !1;
            try {
              (j.delete(r),
                await s.commands.executeCommand("cursor.browserView.navigate", e.url, r, {
                  preserveFocus: !0,
                  trackingId: "mcp_tool",
                  ownerAgentId: n?.ownerAgentId,
                }),
                (o = !0));
            } catch (t) {
              a.warn(
                `Reuse of tab ${r} failed, creating a new tab: ${t instanceof Error ? t.message : String(t)}`,
              );
            }
            if (o)
              return await t.snapshot(
                { viewId: r, take_screenshot_afterwards: e.take_screenshot_afterwards },
                n,
              );
          }
        }
        if (e.headless) {
          const r = await s.commands.executeCommand(
            "cursor.browserView.newHeadlessTab",
            e.url,
            void 0,
            n?.ownerAgentId,
          );
          return r?.browserId
            ? t.snapshot(
                {
                  viewId: r.browserId,
                  headless: !0,
                  take_screenshot_afterwards: e.take_screenshot_afterwards,
                },
                n,
              )
            : { content: [{ type: "text", text: "Failed to create headless browser tab" }] };
        }
        const d = {
          preserveFocus: void 0 === e.position,
          trackingId: "mcp_tool",
          agentId: n?.ownerAgentId,
        };
        e.position && (d.position = e.position);
        const u = await s.commands.executeCommand("cursor.browserView.newTab", e.url, d);
        return u?.browserId
          ? t.snapshot(
              { viewId: u.browserId, take_screenshot_afterwards: e.take_screenshot_afterwards },
              n,
            )
          : { content: [{ type: "text", text: "Failed to create new browser tab" }] };
      },
      async tabs(e, n) {
        const r = { ownerAgentId: n?.ownerAgentId };
        switch (e.action) {
          case "list": {
            const t = await s.commands.executeCommand("cursor.browserView.listTabs", r);
            if (!t || !t.tabs) return { content: [{ type: "text", text: "Open tabs:\n(none)" }] };
            return {
              content: [
                {
                  type: "text",
                  text: `Open tabs:\n${(
                    await Promise.all(
                      t.tabs.map(async (t, e) => {
                        const [n, o] = await Promise.all([
                          s.commands.executeCommand("cursor.browserView.getURL", t, r),
                          s.commands.executeCommand("cursor.browserView.getTitle", t, r),
                        ]);
                        return `[${e}] "${o || "New Tab"}" - ${n || "about:blank"} (viewId: ${t})`;
                      }),
                    )
                  ).join("\n")}`,
                },
              ],
            };
          }
          case "new": {
            const t = {
              preserveFocus: void 0 === e.position,
              trackingId: "mcp_tool",
              agentId: n?.ownerAgentId,
            };
            e.position && (t.position = e.position);
            const r = await s.commands.executeCommand("cursor.browserView.newTab", void 0, t),
              o = r?.browserId,
              i = [
                {
                  type: "text",
                  text: "Created new tab" + ("side" === e.position ? " on the side" : ""),
                },
              ];
            return (
              o && i.push({ type: "metadata", viewId: o, title: "New Tab", url: "about:blank" }),
              { content: i }
            );
          }
          case "close": {
            const o = await s.commands.executeCommand("cursor.browserView.listTabs", r),
              i = o?.tabs ?? [],
              a = void 0 !== e.index ? i[e.index] : void 0;
            let l = "Tab",
              c = "";
            if (a) {
              const [t, e] = await Promise.all([
                s.commands.executeCommand("cursor.browserView.getTitle", a, r),
                s.commands.executeCommand("cursor.browserView.getURL", a, r),
              ]);
              ((l = t || "Tab"), (c = e || ""));
            }
            await s.commands.executeCommand("cursor.browserView.closeTab", a, r);
            const d = await s.commands.executeCommand("cursor.browserView.listTabs", r),
              u = d?.activeTab ?? d?.lastInteractedTab;
            return u
              ? t.snapshot({ viewId: u }, n)
              : {
                  content: [
                    { type: "text", text: "Tab closed. No remaining tabs." },
                    { type: "metadata", viewId: a || "", title: l, url: c },
                  ],
                };
          }
          case "select": {
            if (void 0 === e.index) throw new Error("Tab index is required");
            const o = await s.commands.executeCommand("cursor.browserView.listTabs", r),
              i = (o?.tabs ?? [])[e.index];
            if (!i) throw new Error(`Tab ${e.index} not found`);
            await s.commands.executeCommand("cursor.browserView.selectTab", i, {
              preserveFocus: !0,
              ownerAgentId: n?.ownerAgentId,
            });
            const [a, l] = await Promise.all([
                s.commands.executeCommand("cursor.browserView.getTitle", i, r),
                s.commands.executeCommand("cursor.browserView.getURL", i, r),
              ]),
              c = await t.snapshot({ viewId: i }, n),
              d = c.content?.find((t) => "metadata" === t.type);
            return (
              d &&
                "metadata" === d.type &&
                ((d.title = a || "New Tab"), (d.url = l || "about:blank")),
              c
            );
          }
          default:
            throw new Error(`Unknown action: ${e.action}`);
        }
      },
    };
  }
  function yt(t) {
    return {
      async snapshot(t, e) {
        const n = await ot(t.viewId, e);
        if (!n)
          return {
            content: [
              { type: "text", text: "No browser tab available. Please navigate to a page first." },
            ],
          };
        await Z("browser_snapshot", n, e);
        const r = {
            interactive: t.interactive ?? !1,
            maxDepth: t.maxDepth ?? 20,
            compact: t.compact ?? !1,
            selector: t.selector ?? null,
          },
          o = `\n\t\t\t\t${c}\n\t\t\t\t(function() {\n\t\t\t\t\tconst options = ${JSON.stringify(r)};\n\t\t\t\t\tconst result = buildPageSnapshot(options);\n\t\t\t\t\treturn {\n\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\tpageState: {\n\t\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\t\tsnapshot: result.tree\n\t\t\t\t\t\t},\n\t\t\t\t\t\tstats: result.stats\n\t\t\t\t\t};\n\t\t\t\t})();\n\t\t\t`,
          s = await et(o, n, t.headless, e);
        if (!s?.pageState || !s.stats)
          throw new Error(
            "Browser tab is detached or unresponsive. Retry browser_navigate to recreate it.",
          );
        j.set(n, Date.now());
        const i = [];
        s.stats &&
          (i.push(`- Total refs: ${s.stats.totalRefs}`),
          i.push(`- Interactive refs: ${s.stats.interactiveRefs}`),
          t.interactive && i.push("- Filter: interactive only"),
          t.compact && i.push("- Filter: compact mode"),
          t.selector && i.push(`- Selector: ${t.selector}`));
        const a = Q(s.pageState.snapshot),
          l = await rt({
            action: "snapshot",
            detailLines: i.length > 0 ? i : void 0,
            pageState: s.pageState,
            viewId: n,
            snapshotYaml: a,
            includeSnapshotDiff: t.includeDiff ?? !1,
            context: e,
          });
        return (
          (function (t, e) {
            K.set(t, e);
          })(n, a),
          ct(l, n, t.take_screenshot_afterwards ?? !1, e)
        );
      },
    };
  }
  const vt = u.join(p.homedir(), ".cursor", "browser-logs");
  async function xt(t, e) {
    await d.mkdir(vt, { recursive: !0 });
    const n = u.join(
      vt,
      (function (t) {
        const e = new Date().toISOString().replace(/[:.]/g, "-"),
          n = t.replace(/[^a-zA-Z0-9.-]/g, "_");
        return `${"Profiler.stop" === t ? "cdp-profile" : "cdp-response"}-${n}-${e}.json`;
      })(t),
    );
    return (
      await d.writeFile(n, e, "utf8"), { filePath: n, sizeBytes: Buffer.byteLength(e, "utf8") }
    );
  }
  const Et = (function () {
    const t = {},
      e = bt(t),
      n = yt(),
      r = (function (t) {
        return {
          async cdp(e, n) {
            const r = await ot(e.viewId, n);
            if (!r)
              return {
                content: [
                  {
                    type: "text",
                    text: "No browser tab available. Please navigate to a page first.",
                  },
                ],
              };
            await Z("browser_cdp", r, n);
            const o = await s.commands.executeCommand(
                "cursor.browserView.sendCDPCommand",
                e.method,
                e.params ?? {},
                r,
                { ownerAgentId: n?.ownerAgentId },
              ),
              i = JSON.stringify(o ?? {}, null, 2);
            let a;
            if (
              (function (t, e) {
                return "Profiler.stop" === t || e.length > 25e3;
              })(e.method, i)
            ) {
              const { filePath: t, sizeBytes: n } = await xt(e.method, i);
              a = {
                content: [
                  {
                    type: "text",
                    text: `${"Profiler.stop" === e.method ? "Profile data can be large, so it was saved to a file instead of being inlined." : "CDP response exceeded 25000 characters, so it was saved to a file instead of being inlined."}\nFile: ${t}`,
                  },
                  { type: "log_file", file: t, size: n },
                  { type: "metadata", viewId: r },
                ],
              };
            } else
              a = {
                content: [
                  { type: "text", text: i },
                  { type: "metadata", viewId: r },
                ],
              };
            if (!e.take_screenshot_afterwards) return a;
            const l = await t.takeScreenshot({ viewId: r, headless: e.headless }, n);
            return { content: [...a.content, ...l.content] };
          },
          async takeScreenshot(t, e) {
            const n = await ot(t.viewId, e);
            if (!n)
              return {
                content: [
                  {
                    type: "text",
                    text: "No browser tab available. Please navigate to a page first.",
                  },
                ],
              };
            await Z("browser_take_screenshot", n, e);
            let r = { ...t, viewId: n, headless: t.headless, ownerAgentId: e?.ownerAgentId };
            if (t.filename && !/\.[a-zA-Z0-9]+$/.test(t.filename)) {
              const e = t.type || "png";
              r = { ...r, filename: `${t.filename}.${e}` };
            }
            const o = new Promise((t) => {
                setTimeout(() => {
                  t({ success: !1, error: "screen shot timed out, please try again" });
                }, 5e3);
              }),
              i = s.commands.executeCommand("cursor.browserView.takeScreenshot", r),
              a = await Promise.race([i, o]);
            if (!a.success || a.error)
              return {
                content: [
                  { type: "text", text: `Screenshot failed: ${a.error || "Unknown error"}` },
                ],
              };
            if (a.dataUrl) {
              await it(n, a.dataUrl);
              const o = await at(n, a.dataUrl, {
                cacheViewportScreenshot: ((l = r), !l.fullPage && !l.ref && !l.element),
                headless: t.headless,
                context: e,
              });
              if (o) {
                const t = ["Screenshot captured successfully"];
                return (
                  a.filename && t.push(`Filename: ${a.filename}`),
                  a.savedPath && t.push(`Saved to: ${a.savedPath}`),
                  {
                    content: [
                      { type: "text", text: t.join("\n") },
                      o,
                      { type: "metadata", viewId: n },
                    ],
                  }
                );
              }
            }
            var l;
            return {
              content: [
                {
                  type: "text",
                  text: a.savedPath
                    ? `Screenshot saved to: ${a.savedPath}`
                    : "Screenshot captured but no image data available",
                },
                { type: "metadata", viewId: n },
              ],
            };
          },
          async scroll(t, e) {
            const n = await ot(t.viewId, e);
            if (!n)
              return {
                content: [
                  {
                    type: "text",
                    text: "No browser tab available. Please navigate to a page first.",
                  },
                ],
              };
            await Z("browser_scroll", n, e);
            let r = t.deltaX ?? 0,
              o = t.deltaY ?? 0;
            const s = t.amount ?? 300;
            if (t.direction)
              switch (t.direction) {
                case "up":
                  o = -s;
                  break;
                case "down":
                  o = s;
                  break;
                case "left":
                  r = -s;
                  break;
                case "right":
                  r = s;
              }
            const i = t.scrollIntoView ?? (t.ref && 0 === r && 0 === o),
              a = t.ref ? U(t.ref) : void 0,
              l = `\n\t\t\t\t(async function() {\n\t\t\t\t\t${q}\n\n\t\t\t\t\tconst ref = ${JSON.stringify(a)};\n\t\t\t\t\tconst deltaX = ${r};\n\t\t\t\t\tconst deltaY = ${o};\n\t\t\t\t\tconst scrollIntoView = ${i};\n\n\t\t\t\t\tfunction getScrollableAncestors(el) {\n\t\t\t\t\t\tconst ancestors = [];\n\t\t\t\t\t\tlet current = el.parentElement;\n\t\t\t\t\t\twhile (current && current !== document.body && current !== document.documentElement) {\n\t\t\t\t\t\t\tconst style = window.getComputedStyle(current);\n\t\t\t\t\t\t\tconst overflowY = style.overflowY;\n\t\t\t\t\t\t\tconst overflowX = style.overflowX;\n\t\t\t\t\t\t\tconst isScrollable = (\n\t\t\t\t\t\t\t\t(overflowY === 'auto' || overflowY === 'scroll' || overflowX === 'auto' || overflowX === 'scroll') &&\n\t\t\t\t\t\t\t\t(current.scrollHeight > current.clientHeight || current.scrollWidth > current.clientWidth)\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tif (isScrollable) {\n\t\t\t\t\t\t\t\tancestors.push(current);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcurrent = current.parentElement;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn ancestors;\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction isElementVisibleInContainer(el, container) {\n\t\t\t\t\t\tconst elRect = el.getBoundingClientRect();\n\t\t\t\t\t\tconst containerRect = container.getBoundingClientRect();\n\t\t\t\t\t\tconst padding = 10;\n\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\telRect.top >= containerRect.top - padding &&\n\t\t\t\t\t\t\telRect.bottom <= containerRect.bottom + padding &&\n\t\t\t\t\t\t\telRect.left >= containerRect.left - padding &&\n\t\t\t\t\t\t\telRect.right <= containerRect.right + padding\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction scrollElementIntoContainer(el, container) {\n\t\t\t\t\t\tconst elRect = el.getBoundingClientRect();\n\t\t\t\t\t\tconst containerRect = container.getBoundingClientRect();\n\n\t\t\t\t\t\tlet scrollTopDelta = 0;\n\t\t\t\t\t\tlet scrollLeftDelta = 0;\n\n\t\t\t\t\t\tconst elCenterY = elRect.top + elRect.height / 2;\n\t\t\t\t\t\tconst containerCenterY = containerRect.top + containerRect.height / 2;\n\t\t\t\t\t\tconst elCenterX = elRect.left + elRect.width / 2;\n\t\t\t\t\t\tconst containerCenterX = containerRect.left + containerRect.width / 2;\n\n\t\t\t\t\t\tscrollTopDelta = elCenterY - containerCenterY;\n\t\t\t\t\t\tscrollLeftDelta = elCenterX - containerCenterX;\n\n\t\t\t\t\t\tif (Math.abs(scrollTopDelta) > 5 || Math.abs(scrollLeftDelta) > 5) {\n\t\t\t\t\t\t\tcontainer.scrollBy({ top: scrollTopDelta, left: scrollLeftDelta, behavior: 'instant' });\n\t\t\t\t\t\t\treturn true;\n\t\t\t\t\t\t}\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (ref) {\n\t\t\t\t\t\tconst { element } = findElementByRef(ref);\n\t\t\t\t\t\tif (!element) {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\t\t\terror: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.'\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (scrollIntoView) {\n\t\t\t\t\t\t\tconst scrollableAncestors = getScrollableAncestors(element);\n\t\t\t\t\t\t\tlet scrolledContainers = 0;\n\n\t\t\t\t\t\t\tfor (const container of scrollableAncestors) {\n\t\t\t\t\t\t\t\tif (!isElementVisibleInContainer(element, container)) {\n\t\t\t\t\t\t\t\t\tscrollElementIntoContainer(element, container);\n\t\t\t\t\t\t\t\t\tscrolledContainers++;\n\t\t\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 100));\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\telement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 200));\n\n\t\t\t\t\t\t\tconst finalRect = element.getBoundingClientRect();\n\t\t\t\t\t\t\tconst isVisible = finalRect.top >= 0 && finalRect.bottom <= window.innerHeight &&\n\t\t\t\t\t\t\t\tfinalRect.left >= 0 && finalRect.right <= window.innerWidth;\n\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\t\taction: 'scrollIntoView',\n\t\t\t\t\t\t\t\tref: ref,\n\t\t\t\t\t\t\t\tscrolledContainers: scrolledContainers,\n\t\t\t\t\t\t\t\tisNowVisible: isVisible,\n\t\t\t\t\t\t\t\tmessage: 'Scrolled element into view' + (scrolledContainers > 0 ? ' (scrolled ' + scrolledContainers + ' nested container(s))' : '') + (isVisible ? '' : ' (element may still be partially obscured)')\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tconst scrollableParent = getScrollableAncestors(element)[0];\n\n\t\t\t\t\t\t\tif (scrollableParent) {\n\t\t\t\t\t\t\t\tconst beforeX = scrollableParent.scrollLeft;\n\t\t\t\t\t\t\t\tconst beforeY = scrollableParent.scrollTop;\n\t\t\t\t\t\t\t\tscrollableParent.scrollBy({ left: deltaX, top: deltaY, behavior: 'smooth' });\n\t\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 200));\n\t\t\t\t\t\t\t\tconst actualDeltaX = scrollableParent.scrollLeft - beforeX;\n\t\t\t\t\t\t\t\tconst actualDeltaY = scrollableParent.scrollTop - beforeY;\n\n\t\t\t\t\t\t\t\tconst containerRef = scrollableParent.getAttribute('data-cursor-ref');\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\t\t\taction: 'scrollContainer',\n\t\t\t\t\t\t\t\t\tref: ref,\n\t\t\t\t\t\t\t\t\tcontainerRef: containerRef || undefined,\n\t\t\t\t\t\t\t\t\tscrolled: { deltaX: actualDeltaX, deltaY: actualDeltaY },\n\t\t\t\t\t\t\t\t\tmessage: 'Scrolled container by (' + actualDeltaX + ', ' + actualDeltaY + ') pixels'\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\t\t\t\terror: 'Element ' + ref + ' is not inside a scrollable container.',\n\t\t\t\t\t\t\t\t\tsuggestion: 'Use scrollIntoView: true to scroll the element into view using the standard scrollIntoView method, or omit the ref to scroll the main page.'\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tconst beforeX = window.scrollX;\n\t\t\t\t\t\tconst beforeY = window.scrollY;\n\t\t\t\t\t\twindow.scrollBy({ left: deltaX, top: deltaY, behavior: 'smooth' });\n\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 200));\n\t\t\t\t\t\tconst actualDeltaX = window.scrollX - beforeX;\n\t\t\t\t\t\tconst actualDeltaY = window.scrollY - beforeY;\n\n\t\t\t\t\t\tif (actualDeltaX === 0 && actualDeltaY === 0 && (deltaX !== 0 || deltaY !== 0)) {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\t\taction: 'scroll',\n\t\t\t\t\t\t\t\twarning: 'Page may have reached scroll boundary',\n\t\t\t\t\t\t\t\tmessage: 'Attempted to scroll page, but no scroll occurred (may be at edge)'\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\taction: 'scroll',\n\t\t\t\t\t\t\tscrolled: { deltaX: actualDeltaX, deltaY: actualDeltaY },\n\t\t\t\t\t\t\tmessage: 'Scrolled page by (' + actualDeltaX + ', ' + actualDeltaY + ') pixels'\n\t\t\t\t\t\t};\n\t\t\t\t\t}\n\t\t\t\t})();\n\t\t\t`,
              c = nt(await et(l, n, t.headless, e), []);
            if (!c.success)
              return {
                content: [
                  { type: "text", text: G(z(c.error || "Unknown scroll error", { ref: t.ref })) },
                ],
              };
            const d = ["### Action: scroll"];
            return (
              d.push(`- ${c.message}`),
              c.scrolled &&
                d.push(`- Actual scroll: (${c.scrolled.deltaX}px, ${c.scrolled.deltaY}px)`),
              c.warning && d.push(`- Warning: ${c.warning}`),
              ct(
                {
                  content: [
                    { type: "text", text: d.join("\n") },
                    { type: "metadata", viewId: n },
                  ],
                },
                n,
                t.take_screenshot_afterwards ?? !1,
                e,
              )
            );
          },
          async getBoundingBox(t, e) {
            const n = await ot(t.viewId, e);
            if (!n)
              return {
                content: [
                  {
                    type: "text",
                    text: "No browser tab available. Please navigate to a page first.",
                  },
                ],
              };
            try {
              (await Z("browser_get_bounding_box", n, e), await st(n, t.headless, c, e));
              const r = U(t.ref),
                o = t.element || "",
                s = `\n\t\t\t\t\t${q}\n\t\t\t\t\t(function() {\n\t\t\t\t\t\tconst ref = ${JSON.stringify(r)};\n\t\t\t\t\t\tconst expectedDescription = ${JSON.stringify(o)};\n\t\t\t\t\t\tconst { element } = findElementByRef(ref);\n\t\t\t\t\t\tif (!element) {\n\t\t\t\t\t\t\treturn { success: false, error: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.' };\n\t\t\t\t\t\t}\n\t\t\t\t\t\tassertDescriptionMatches(element, ref, expectedDescription);\n\t\t\t\t\t\tconst rect = element.getBoundingClientRect();\n\t\t\t\t\t\tconst x = rect.left + window.scrollX;\n\t\t\t\t\t\tconst y = rect.top + window.scrollY;\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\tbox: {\n\t\t\t\t\t\t\t\tx,\n\t\t\t\t\t\t\t\ty,\n\t\t\t\t\t\t\t\twidth: rect.width,\n\t\t\t\t\t\t\t\theight: rect.height,\n\t\t\t\t\t\t\t\ttop: rect.top,\n\t\t\t\t\t\t\t\tleft: rect.left,\n\t\t\t\t\t\t\t\tright: rect.right,\n\t\t\t\t\t\t\t\tbottom: rect.bottom\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\t\t\t\t\t})();\n\t\t\t\t`,
                i = nt(await et(s, n, t.headless, e), ["box"]).box;
              return {
                content: [
                  {
                    type: "text",
                    text: `Bounding box: x=${Math.round(i.x)}, y=${Math.round(i.y)}, w=${Math.round(i.width)}, h=${Math.round(i.height)}`,
                  },
                  { type: "metadata", viewId: n },
                ],
              };
            } catch (e) {
              return {
                content: [
                  {
                    type: "text",
                    text: G(
                      z(e instanceof Error ? e : new Error(String(e)), {
                        ref: t.ref,
                        action: "get_bounding_box",
                      }),
                    ),
                  },
                ],
              };
            }
          },
          async highlight(t, e) {
            const n = await ot(t.viewId, e);
            if (!n)
              return {
                content: [
                  {
                    type: "text",
                    text: "No browser tab available. Please navigate to a page first.",
                  },
                ],
              };
            try {
              (await Z("browser_highlight", n, e), await st(n, t.headless, c, e));
              const r = U(t.ref),
                o = t.element || "",
                s = t.durationMs ?? 2e3,
                i = `\n\t\t\t\t\t${q}\n\t\t\t\t\t(function() {\n\t\t\t\t\t\tconst ref = ${JSON.stringify(r)};\n\t\t\t\t\t\tconst expectedDescription = ${JSON.stringify(o)};\n\t\t\t\t\t\tconst durationMs = ${s};\n\t\t\t\t\t\tconst { element } = findElementByRef(ref);\n\t\t\t\t\t\tif (!element) {\n\t\t\t\t\t\t\treturn { success: false, error: 'Element not found: ' + ref + '. Take a snapshot to get updated refs.' };\n\t\t\t\t\t\t}\n\t\t\t\t\t\tassertDescriptionMatches(element, ref, expectedDescription);\n\n\t\t\t\t\t\tconst styleId = 'cursor-highlight-style';\n\t\t\t\t\t\tif (!document.getElementById(styleId)) {\n\t\t\t\t\t\t\tconst style = document.createElement('style');\n\t\t\t\t\t\t\tstyle.id = styleId;\n\t\t\t\t\t\t\tstyle.textContent = '.cursor-highlighted { outline: 2px solid #ff6a00; box-shadow: 0 0 0 2px rgba(255, 106, 0, 0.4); }';\n\t\t\t\t\t\t\tdocument.head.appendChild(style);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\telement.classList.add('cursor-highlighted');\n\t\t\t\t\t\tsetTimeout(() => {\n\t\t\t\t\t\t\telement.classList.remove('cursor-highlighted');\n\t\t\t\t\t\t}, durationMs);\n\n\t\t\t\t\t\treturn { success: true, durationMs };\n\t\t\t\t\t})();\n\t\t\t\t`;
              return {
                content: [
                  {
                    type: "text",
                    text: `Highlighted element for ${nt(await et(i, n, t.headless, e), ["durationMs"]).durationMs}ms`,
                  },
                  { type: "metadata", viewId: n },
                ],
              };
            } catch (e) {
              return {
                content: [
                  {
                    type: "text",
                    text: G(
                      z(e instanceof Error ? e : new Error(String(e)), {
                        ref: t.ref,
                        action: "highlight",
                      }),
                    ),
                  },
                ],
              };
            }
          },
          async lock(t, e) {
            const n = await ot(t.viewId, e);
            if (!n)
              return {
                content: [
                  {
                    type: "text",
                    text: "No browser tab available. Please navigate to a page first.",
                  },
                ],
              };
            const r = "unlock" === t.action,
              o = await s.commands.executeCommand("cursor.browserView.setLocked", n, !r, {
                ownerAgentId: e?.ownerAgentId,
              });
            return o?.success
              ? {
                  content: [
                    { type: "text", text: r ? "Browser unlocked." : "Browser locked." },
                    await lt(n, void 0, e),
                  ],
                }
              : {
                  content: [
                    {
                      type: "text",
                      text: r ? "Failed to unlock browser." : "Failed to lock browser.",
                    },
                  ],
                };
          },
        };
      })(t),
      o = {
        async type(t, e) {
          const n = await ot(t.viewId, e);
          if (!n)
            return {
              content: [
                {
                  type: "text",
                  text: "No browser tab available. Please navigate to a page first.",
                },
              ],
            };
          try {
            (await Z("browser_type", n, e), await st(n, t.headless, c, e));
            const r = U(t.ref),
              o = t.element || "",
              s = `\n\t\t\t\t\t${q}\n\t\t\t\t\t${c}\n\t\t\t\t\t${dt}\n\t\t\t\t\t(async function() {\n\t\t\t\t\t\tconst ref = ${JSON.stringify(r)};\n\t\t\t\t\t\tconst expectedDescription = ${JSON.stringify(o)};\n\t\t\t\t\t\tconst { element } = findElementByRef(ref);\n\t\t\t\t\t\tvalidateElementForInteraction(element, ref, 'type', expectedDescription);\n\n\t\t\t\t\t\tconst rect = element.getBoundingClientRect();\n\t\t\t\t\t\tconst scrollPadding = 50;\n\t\t\t\t\t\tconst needsScroll = rect.top < scrollPadding || rect.left < scrollPadding ||\n\t\t\t\t\t\t\trect.bottom > window.innerHeight - scrollPadding || rect.right > window.innerWidth - scrollPadding;\n\t\t\t\t\t\tif (needsScroll) {\n\t\t\t\t\t\t\telement.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 300));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst tagName = element.tagName.toUpperCase();\n\t\t\t\t\t\tconst isContentEditable = element.isContentEditable;\n\n\t\t\t\t\t\tconst valueBefore = isContentEditable ? element.textContent : element.value;\n\n\t\t\t\t\t\tconst previousActiveElement = document.activeElement;\n\t\t\t\t\t\tif (previousActiveElement && previousActiveElement !== element && previousActiveElement !== document.body) {\n\t\t\t\t\t\t\tif (typeof previousActiveElement.blur === 'function') {\n\t\t\t\t\t\t\t\tpreviousActiveElement.blur();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\telement.focus();\n\n\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 0));\n\n\t\t\t\t\t\tif (document.activeElement !== element) {\n\t\t\t\t\t\t\telement.click();\n\t\t\t\t\t\t\telement.focus();\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 0));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (document.activeElement !== element) {\n\t\t\t\t\t\t\tconst elementTag = element.tagName?.toLowerCase() || 'element';\n\t\t\t\t\t\t\tconst focusBlockers = [];\n\n\t\t\t\t\t\t\tconst style = window.getComputedStyle(element);\n\t\t\t\t\t\t\tif (element.tabIndex < 0) focusBlockers.push('negative tabindex');\n\t\t\t\t\t\t\tif (style.display === 'none') focusBlockers.push('display: none');\n\t\t\t\t\t\t\tif (style.visibility === 'hidden') focusBlockers.push('visibility: hidden');\n\t\t\t\t\t\t\tif (element.disabled) focusBlockers.push('disabled attribute');\n\n\t\t\t\t\t\t\tconst hitCheck = document.elementFromPoint(\n\t\t\t\t\t\t\t\trect.left + rect.width / 2,\n\t\t\t\t\t\t\t\trect.top + rect.height / 2\n\t\t\t\t\t\t\t);\n\t\t\t\t\t\t\tif (hitCheck && hitCheck !== element && !element.contains(hitCheck)) {\n\t\t\t\t\t\t\t\tconst hitPreview = hitCheck.tagName?.toLowerCase() + (hitCheck.getAttribute('data-cursor-ref') ? ' (ref: ' + hitCheck.getAttribute('data-cursor-ref') + ')' : '');\n\t\t\t\t\t\t\t\tfocusBlockers.push('another element at position: ' + hitPreview);\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tconst reason = focusBlockers.length > 0\n\t\t\t\t\t\t\t\t? ' Possible reasons: ' + focusBlockers.join(', ') + '.'\n\t\t\t\t\t\t\t\t: ' The element may not be focusable, or another element may be intercepting focus.';\n\t\t\t\t\t\t\tthrow new Error('Failed to focus ' + elementTag + ' ' + ref + '.' + reason + ' Try taking a fresh snapshot to verify the element state.');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst text = ${JSON.stringify(t.text)};\n\t\t\t\t\t\tconst clearFirst = ${JSON.stringify(t.clear)} || false;\n\t\t\t\t\t\tconst slowly = ${JSON.stringify(t.slowly)} || false;\n\t\t\t\t\t\tconst submit = ${JSON.stringify(t.submit)} || false;\n\n\t\t\t\t\t\tfunction dispatchInputEvent(el) {\n\t\t\t\t\t\t\tconst inputEvent = new InputEvent('input', { bubbles: true, cancelable: true, inputType: 'insertText', data: text });\n\t\t\t\t\t\t\tel.dispatchEvent(inputEvent);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (clearFirst) {\n\t\t\t\t\t\t\tif (isContentEditable) {\n\t\t\t\t\t\t\t\telement.textContent = '';\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tsetNativeValue(element, '');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\telement.dispatchEvent(new Event('input', { bubbles: true }));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (slowly) {\n\t\t\t\t\t\t\tconst delay = 50;\n\t\t\t\t\t\t\tconst existingValue = clearFirst ? '' : (isContentEditable ? (element.textContent || '') : (element.value || ''));\n\t\t\t\t\t\t\tfor (let i = 0; i < text.length; i++) {\n\t\t\t\t\t\t\t\tconst char = text[i];\n\t\t\t\t\t\t\t\tif (isContentEditable) {\n\t\t\t\t\t\t\t\t\tconst selection = window.getSelection();\n\t\t\t\t\t\t\t\t\tconst range = document.createRange();\n\t\t\t\t\t\t\t\t\trange.selectNodeContents(element);\n\t\t\t\t\t\t\t\t\trange.collapse(false);\n\t\t\t\t\t\t\t\t\tselection.removeAllRanges();\n\t\t\t\t\t\t\t\t\tselection.addRange(range);\n\t\t\t\t\t\t\t\t\tdocument.execCommand('insertText', false, char);\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\tsetNativeValue(element, existingValue + text.substring(0, i + 1));\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telement.dispatchEvent(new KeyboardEvent('keydown', { key: char, bubbles: true, cancelable: true }));\n\t\t\t\t\t\t\t\tdispatchInputEvent(element);\n\t\t\t\t\t\t\t\telement.dispatchEvent(new KeyboardEvent('keyup', { key: char, bubbles: true, cancelable: true }));\n\t\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, delay));\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tif (isContentEditable) {\n\t\t\t\t\t\t\t\tconst existingContent = clearFirst ? '' : (element.textContent || '');\n\t\t\t\t\t\t\t\telement.textContent = existingContent + text;\n\t\t\t\t\t\t\t\telement.dispatchEvent(new Event('input', { bubbles: true }));\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tconst existingValue = clearFirst ? '' : (element.value || '');\n\t\t\t\t\t\t\t\tsetNativeValue(element, existingValue + text);\n\t\t\t\t\t\t\t\tdispatchInputEvent(element);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\telement.dispatchEvent(new Event('change', { bubbles: true }));\n\n\t\t\t\t\t\tif (submit) {\n\t\t\t\t\t\t\telement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true }));\n\t\t\t\t\t\t\telement.dispatchEvent(new KeyboardEvent('keypress', { key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true }));\n\t\t\t\t\t\t\telement.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true }));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst valueAfter = isContentEditable ? element.textContent : element.value;\n\t\t\t\t\t\tconst valueChanged = valueBefore !== valueAfter;\n\t\t\t\t\t\tconst valueMatchesExpected = isContentEditable\n\t\t\t\t\t\t\t? (element.textContent || '').includes(text)\n\t\t\t\t\t\t\t: element.value === text || element.value.endsWith(text);\n\n\t\t\t\t\t\tconst maxLength = element.maxLength;\n\t\t\t\t\t\tconst hasMaxLength = maxLength > 0 && maxLength !== 2147483647;\n\t\t\t\t\t\tconst exceedsMaxLength = hasMaxLength && (valueAfter?.length || 0) > maxLength;\n\n\t\t\t\t\t\tconst snapshotResult = buildPageSnapshot();\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\tslowly,\n\t\t\t\t\t\t\tsubmitted: submit,\n\t\t\t\t\t\t\ttextLength: text.length,\n\t\t\t\t\t\t\tvalueChanged,\n\t\t\t\t\t\t\tvalueMatchesExpected,\n\t\t\t\t\t\t\tactualValue: valueAfter ? String(valueAfter).substring(0, 100) : '',\n\t\t\t\t\t\t\tmaxLength: hasMaxLength ? maxLength : null,\n\t\t\t\t\t\t\texceedsMaxLength,\n\t\t\t\t\t\t\tpageState: {\n\t\t\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\t\t\t\t\t})();\n\t\t\t\t`,
              i = await et(s, n, t.headless, e),
              a = [];
            return (
              a.push(`- Characters typed: ${i.textLength}`),
              a.push("- Typing mode: " + (i.slowly ? "slow (character-by-character)" : "fast")),
              t.clear && a.push("- Cleared existing content: yes"),
              i.submitted && a.push("- Form submitted: yes (Enter key pressed)"),
              i.valueChanged || a.push("- WARNING: Value did not change after typing"),
              !i.valueMatchesExpected &&
                i.valueChanged &&
                a.push(`- Note: Final value differs from input (actual: "${i.actualValue}")`),
              i.exceedsMaxLength &&
                null !== i.maxLength &&
                a.push(
                  `- Note: Input exceeds maxlength attribute (${i.maxLength}). Browser automation bypasses maxlength validation. Server-side validation may still reject this value.`,
                ),
              j.set(n, Date.now()),
              ct(
                await rt({
                  action: "type",
                  detailLines: a,
                  pageState: i.pageState,
                  viewId: n,
                  context: e,
                }),
                n,
                t.take_screenshot_afterwards ?? !1,
                e,
              )
            );
          } catch (e) {
            return {
              content: [
                {
                  type: "text",
                  text: G(
                    z(e instanceof Error ? e : new Error(String(e)), {
                      ref: t.ref,
                      action: "type",
                    }),
                  ),
                },
              ],
            };
          }
        },
        async fill(t, e) {
          const n = await ot(t.viewId, e);
          if (!n)
            return {
              content: [
                {
                  type: "text",
                  text: "No browser tab available. Please navigate to a page first.",
                },
              ],
            };
          try {
            (await Z("browser_fill", n, e), await st(n, t.headless, c, e));
            const r = U(t.ref),
              o = t.element || "",
              s = `\n\t\t\t\t\t${q}\n\t\t\t\t\t${c}\n\t\t\t\t\t${dt}\n\t\t\t\t\t(async function() {\n\t\t\t\t\t\tconst ref = ${JSON.stringify(r)};\n\t\t\t\t\t\tconst expectedDescription = ${JSON.stringify(o)};\n\t\t\t\t\t\tconst { element } = findElementByRef(ref);\n\t\t\t\t\t\tvalidateElementForInteraction(element, ref, 'fill', expectedDescription);\n\n\t\t\t\t\t\tconst rect = element.getBoundingClientRect();\n\t\t\t\t\t\tconst scrollPadding = 50;\n\t\t\t\t\t\tconst needsScroll = rect.top < scrollPadding || rect.left < scrollPadding ||\n\t\t\t\t\t\t\trect.bottom > window.innerHeight - scrollPadding || rect.right > window.innerWidth - scrollPadding;\n\t\t\t\t\t\tif (needsScroll) {\n\t\t\t\t\t\t\telement.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 300));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst tagName = element.tagName.toUpperCase();\n\t\t\t\t\t\tconst isContentEditable = element.isContentEditable;\n\n\t\t\t\t\t\tconst previousActiveElement = document.activeElement;\n\t\t\t\t\t\tif (previousActiveElement && previousActiveElement !== element && previousActiveElement !== document.body) {\n\t\t\t\t\t\t\tif (typeof previousActiveElement.blur === 'function') {\n\t\t\t\t\t\t\t\tpreviousActiveElement.blur();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\telement.focus();\n\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 0));\n\n\t\t\t\t\t\tif (document.activeElement !== element) {\n\t\t\t\t\t\t\telement.click();\n\t\t\t\t\t\t\telement.focus();\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 0));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst value = ${JSON.stringify(t.value)};\n\n\t\t\t\t\t\tif (isContentEditable) {\n\t\t\t\t\t\t\telement.textContent = '';\n\t\t\t\t\t\t\telement.textContent = value;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tsetNativeValue(element, '');\n\t\t\t\t\t\t\tsetNativeValue(element, value);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\telement.dispatchEvent(new Event('input', { bubbles: true }));\n\t\t\t\t\t\telement.dispatchEvent(new Event('change', { bubbles: true }));\n\n\t\t\t\t\t\tconst snapshotResult = buildPageSnapshot();\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\tvalue: value,\n\t\t\t\t\t\t\tpageState: {\n\t\t\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\t\t\t\t\t})();\n\t\t\t\t`,
              i = await et(s, n, t.headless, e);
            return (
              j.set(n, Date.now()),
              ct(
                await rt({
                  action: "fill",
                  detailLines: [
                    `- Filled with value: "${i.value.substring(0, 50)}${i.value.length > 50 ? "..." : ""}"`,
                  ],
                  pageState: i.pageState,
                  viewId: n,
                  context: e,
                }),
                n,
                t.take_screenshot_afterwards ?? !1,
                e,
              )
            );
          } catch (e) {
            return {
              content: [
                {
                  type: "text",
                  text: G(
                    z(e instanceof Error ? e : new Error(String(e)), {
                      ref: t.ref,
                      action: "fill",
                    }),
                  ),
                },
              ],
            };
          }
        },
        async fillForm(t, e) {
          const n = await ot(t.viewId, e);
          if (!n)
            return {
              content: [
                {
                  type: "text",
                  text: "No browser tab available. Please navigate to a page first.",
                },
              ],
            };
          if (!t.fields || !Array.isArray(t.fields))
            return {
              content: [
                {
                  type: "text",
                  text: 'Error: Missing required "fields" parameter.\n\nThe browser_fill_form tool requires a "fields" array containing the fields to fill.\n\nExample usage:\n{ fields: [{ ref: "e123", value: "John Doe" }, { ref: "e456", value: "john@example.com" }] }\n\nEach field should have a "ref" (element reference) and "value" (text to fill).',
                },
              ],
            };
          if (0 === t.fields.length)
            return {
              content: [
                {
                  type: "text",
                  text: 'Error: Empty "fields" array provided.\n\nProvide at least one field to fill. Take a snapshot to identify the form fields and their refs.',
                },
              ],
            };
          try {
            (await Z("browser_fill_form", n, e), await st(n, t.headless, c, e));
            const r = t.fields.map((t) => ({
                ref: U(t.ref),
                value: t.value,
                element: t.element || "",
                clear: t.clear,
              })),
              o = `\n\t\t\t\t\t${q}\n\t\t\t\t\t${c}\n\t\t\t\t\t${dt}\n\t\t\t\t\t(async function() {\n\t\t\t\t\t\tconst fields = ${JSON.stringify(r)};\n\t\t\t\t\t\tconst filled = [];\n\t\t\t\t\t\tconst failed = [];\n\n\t\t\t\t\t\tfor (const field of fields) {\n\t\t\t\t\t\t\tconst ref = field.ref;\n\t\t\t\t\t\t\tconst expectedDescription = field.element || '';\n\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\tconst { element } = findElementByRef(ref);\n\t\t\t\t\t\t\t\tvalidateElementForInteraction(element, ref, 'fill', expectedDescription);\n\n\t\t\t\t\t\t\t\tconst rect = element.getBoundingClientRect();\n\t\t\t\t\t\t\t\tconst scrollPadding = 50;\n\t\t\t\t\t\t\t\tconst needsScroll = rect.top < scrollPadding || rect.left < scrollPadding ||\n\t\t\t\t\t\t\t\t\trect.bottom > window.innerHeight - scrollPadding || rect.right > window.innerWidth - scrollPadding;\n\t\t\t\t\t\t\t\tif (needsScroll) {\n\t\t\t\t\t\t\t\t\telement.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });\n\t\t\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 300));\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tconst isContentEditable = element.isContentEditable;\n\t\t\t\t\t\t\t\tconst clearFirst = field.clear !== undefined ? field.clear : true;\n\t\t\t\t\t\t\t\tconst value = String(field.value);\n\n\t\t\t\t\t\t\t\tif (clearFirst) {\n\t\t\t\t\t\t\t\t\tif (isContentEditable) {\n\t\t\t\t\t\t\t\t\t\telement.textContent = '';\n\t\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\t\tsetNativeValue(element, '');\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\tif (isContentEditable) {\n\t\t\t\t\t\t\t\t\tconst existingContent = clearFirst ? '' : (element.textContent || '');\n\t\t\t\t\t\t\t\t\telement.textContent = existingContent + value;\n\t\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\t\tconst existingValue = clearFirst ? '' : (element.value || '');\n\t\t\t\t\t\t\t\t\tsetNativeValue(element, existingValue + value);\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\telement.dispatchEvent(new Event('input', { bubbles: true }));\n\t\t\t\t\t\t\t\telement.dispatchEvent(new Event('change', { bubbles: true }));\n\n\t\t\t\t\t\t\t\tconst preview = value.length > 60 ? value.substring(0, 60) + '...' : value;\n\t\t\t\t\t\t\t\tfilled.push({ ref, valuePreview: preview });\n\t\t\t\t\t\t\t} catch (err) {\n\t\t\t\t\t\t\t\tconst message = err instanceof Error ? err.message : String(err);\n\t\t\t\t\t\t\t\tfailed.push({ ref, error: message });\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst snapshotResult = buildPageSnapshot();\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\tsuccess: failed.length === 0,\n\t\t\t\t\t\t\tfilled,\n\t\t\t\t\t\t\tfailed,\n\t\t\t\t\t\t\tpageState: {\n\t\t\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\t\t\t\t\t})();\n\t\t\t\t`,
              s = nt(await et(o, n, t.headless, e), ["filled", "failed", "pageState"]),
              i = [];
            if ((i.push(`- Fields filled: ${s.filled.length}`), s.failed.length > 0)) {
              i.push(`- Fields failed: ${s.failed.length}`);
              const t = s.failed.slice(0, 5).map((t) => `${t.ref}: ${t.error}`);
              i.push(`- Failed refs: ${t.join("; ")}`);
            }
            return (
              j.set(n, Date.now()),
              ct(
                await rt({
                  action: "fill_form",
                  detailLines: i,
                  pageState: s.pageState,
                  viewId: n,
                  context: e,
                }),
                n,
                t.take_screenshot_afterwards ?? !1,
                e,
              )
            );
          } catch (t) {
            return {
              content: [
                {
                  type: "text",
                  text: G(
                    z(t instanceof Error ? t : new Error(String(t)), { action: "fill_form" }),
                  ),
                },
              ],
            };
          }
        },
        async selectOption(t, e) {
          const n = await ot(t.viewId, e);
          if (!n)
            return {
              content: [
                {
                  type: "text",
                  text: "No browser tab available. Please navigate to a page first.",
                },
              ],
            };
          if (!t.values || !Array.isArray(t.values))
            return {
              content: [
                {
                  type: "text",
                  text: 'Error: Missing required "values" parameter.\n\nThe browser_select_option tool requires a "values" array containing the option(s) to select.\n\nExample usage:\n- Single select: { ref: "e123", values: ["optionValue"] }\n- Multi-select: { ref: "e123", values: ["value1", "value2"] }\n\nValues can be option values or labels. Take a snapshot to see available options.',
                },
              ],
            };
          if (0 === t.values.length)
            return {
              content: [
                {
                  type: "text",
                  text: 'Error: Empty "values" array provided.\n\nProvide at least one value to select. Take a snapshot to see available options for this select element.',
                },
              ],
            };
          try {
            (await Z("browser_select_option", n, e), await st(n, t.headless, c, e));
            const r = U(t.ref),
              o = `\n\t\t\t\t\t${q}\n\t\t\t\t\t${c}\n\t\t\t\t\t(async function() {\n\t\t\t\t\t\tconst ref = ${JSON.stringify(r)};\n\t\t\t\t\t\tconst { element } = findElementByRef(ref);\n\t\t\t\t\t\tif (!element) throw new Error('Element not found: ' + ref + '. Take a snapshot to get updated refs.');\n\n\t\t\t\t\t\tconst selectElement = element;\n\t\t\t\t\t\tif (selectElement.tagName.toUpperCase() !== 'SELECT') {\n\t\t\t\t\t\t\tthrow new Error('Element ' + ref + ' is not a select element (found: ' + selectElement.tagName.toLowerCase() + ').');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (selectElement.disabled) {\n\t\t\t\t\t\t\tthrow new Error('Select element ' + ref + ' is disabled and cannot be interacted with.');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst rect = selectElement.getBoundingClientRect();\n\t\t\t\t\t\tconst scrollPadding = 50;\n\t\t\t\t\t\tconst needsScroll = rect.top < scrollPadding || rect.left < scrollPadding ||\n\t\t\t\t\t\t\trect.bottom > window.innerHeight - scrollPadding || rect.right > window.innerWidth - scrollPadding;\n\t\t\t\t\t\tif (needsScroll) {\n\t\t\t\t\t\t\tselectElement.scrollIntoView({ block: 'center', inline: 'center', behavior: 'smooth' });\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 300));\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tselectElement.focus();\n\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 0));\n\n\t\t\t\t\t\tconst values = ${JSON.stringify(t.values)};\n\n\t\t\t\t\t\tconst availableOptions = Array.from(selectElement.options).map(o => ({\n\t\t\t\t\t\t\tvalue: o.value,\n\t\t\t\t\t\t\tlabel: o.textContent?.trim() || o.label || '',\n\t\t\t\t\t\t\tdisabled: o.disabled\n\t\t\t\t\t\t}));\n\n\t\t\t\t\t\tif (values.length > 1 && !selectElement.multiple) {\n\t\t\t\t\t\t\tthrow new Error('Cannot select multiple values on a single-select dropdown. The select element does not have the "multiple" attribute. Use a single value instead, or interact with the correct multi-select element.');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (!selectElement.multiple) {\n\t\t\t\t\t\t\tselectElement.value = '';\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tArray.from(selectElement.options).forEach(option => {\n\t\t\t\t\t\t\t\toption.selected = false;\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst selectedValues = [];\n\t\t\t\t\t\tconst matchedBy = [];\n\t\t\t\t\t\tfor (const value of values) {\n\t\t\t\t\t\t\tlet optionFound = false;\n\t\t\t\t\t\t\tfor (const option of selectElement.options) {\n\t\t\t\t\t\t\t\tif (option.value === value) {\n\t\t\t\t\t\t\t\t\tif (option.disabled) {\n\t\t\t\t\t\t\t\t\t\tthrow new Error('Option "' + value + '" is disabled and cannot be selected.');\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\toption.selected = true;\n\t\t\t\t\t\t\t\t\tselectedValues.push(option.value);\n\t\t\t\t\t\t\t\t\tmatchedBy.push('value');\n\t\t\t\t\t\t\t\t\toptionFound = true;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif (!optionFound) {\n\t\t\t\t\t\t\t\tfor (const option of selectElement.options) {\n\t\t\t\t\t\t\t\t\tconst labelText = (option.textContent?.trim() || option.label || '').toLowerCase();\n\t\t\t\t\t\t\t\t\tif (labelText === value.toLowerCase()) {\n\t\t\t\t\t\t\t\t\t\tif (option.disabled) {\n\t\t\t\t\t\t\t\t\t\t\tthrow new Error('Option with label "' + value + '" is disabled and cannot be selected.');\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\toption.selected = true;\n\t\t\t\t\t\t\t\t\t\tselectedValues.push(option.value);\n\t\t\t\t\t\t\t\t\t\tmatchedBy.push('label');\n\t\t\t\t\t\t\t\t\t\toptionFound = true;\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif (!optionFound) {\n\t\t\t\t\t\t\t\tfor (const option of selectElement.options) {\n\t\t\t\t\t\t\t\t\tconst labelText = (option.textContent?.trim() || option.label || '').toLowerCase();\n\t\t\t\t\t\t\t\t\tif (labelText.includes(value.toLowerCase())) {\n\t\t\t\t\t\t\t\t\t\tif (option.disabled) {\n\t\t\t\t\t\t\t\t\t\t\tthrow new Error('Option containing "' + value + '" is disabled and cannot be selected.');\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\toption.selected = true;\n\t\t\t\t\t\t\t\t\t\tselectedValues.push(option.value);\n\t\t\t\t\t\t\t\t\t\tmatchedBy.push('partial label');\n\t\t\t\t\t\t\t\t\t\toptionFound = true;\n\t\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif (!optionFound) {\n\t\t\t\t\t\t\t\tconst optionList = availableOptions.slice(0, 8).map(o =>\n\t\t\t\t\t\t\t\t\t'"' + o.label + '"' + (o.value !== o.label ? ' (value: ' + o.value + ')' : '') + (o.disabled ? ' [disabled]' : '')\n\t\t\t\t\t\t\t\t).join(', ');\n\t\t\t\t\t\t\t\tconst isMultiple = selectElement.multiple ? ' (multi-select)' : ' (single-select)';\n\t\t\t\t\t\t\t\tthrow new Error('Option "' + value + '" not found in select element' + isMultiple + '. Available options: ' + optionList + (availableOptions.length > 8 ? '...' : '') + '. Try using the exact option value or label.');\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tselectElement.dispatchEvent(new Event('input', { bubbles: true }));\n\t\t\t\t\t\tselectElement.dispatchEvent(new Event('change', { bubbles: true }));\n\n\t\t\t\t\t\tconst snapshotResult = buildPageSnapshot();\n\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\tselectedValues,\n\t\t\t\t\t\t\tmatchedBy,\n\t\t\t\t\t\t\tavailableOptions: availableOptions.slice(0, 10),\n\t\t\t\t\t\t\tpageState: {\n\t\t\t\t\t\t\t\turl: window.location.href,\n\t\t\t\t\t\t\t\ttitle: document.title,\n\t\t\t\t\t\t\t\tsnapshot: snapshotResult.tree\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t};\n\t\t\t\t\t})();\n\t\t\t\t`,
              s = nt(await et(o, n, t.headless, e), ["selectedValues", "matchedBy", "pageState"]),
              i = [];
            if (s.selectedValues.length > 0) {
              const t = s.selectedValues.map(
                (t, e) => `${t} (matched by ${s.matchedBy[e] || "value"})`,
              );
              i.push(`- Selected: ${t.join(", ")}`);
            } else i.push("- Selected values: (none)");
            return (
              j.set(n, Date.now()),
              ct(
                await rt({
                  action: "select_option",
                  detailLines: i,
                  pageState: s.pageState,
                  viewId: n,
                  context: e,
                }),
                n,
                t.take_screenshot_afterwards ?? !1,
                e,
              )
            );
          } catch (e) {
            return {
              content: [
                {
                  type: "text",
                  text: G(
                    z(e instanceof Error ? e : new Error(String(e)), {
                      ref: t.ref,
                      action: "selectOption",
                    }),
                  ),
                },
              ],
            };
          }
        },
        async pressKey(t, e) {
          const n = await ot(t.viewId, e);
          if (!n)
            return {
              content: [
                {
                  type: "text",
                  text: "No browser tab available. Please navigate to a page first.",
                },
              ],
            };
          await Z("browser_press_key", n, e);
          const r = `\n\t\t\t\t(function() {\n\t\t\t\t\tconst keyInput = ${JSON.stringify(t.key)};\n\n\t\t\t\t\tconst keyCodeMap = {\n\t\t\t\t\t\t'PageDown': 34, 'PageUp': 33, 'End': 35, 'Home': 36,\n\t\t\t\t\t\t'ArrowLeft': 37, 'ArrowUp': 38, 'ArrowRight': 39, 'ArrowDown': 40,\n\t\t\t\t\t\t'Enter': 13, 'Escape': 27, 'Tab': 9, 'Backspace': 8, 'Delete': 46,\n\t\t\t\t\t\t'Space': 32, ' ': 32, 'F1': 112, 'F2': 113, 'F3': 114, 'F4': 115,\n\t\t\t\t\t\t'F5': 116, 'F6': 117, 'F7': 118, 'F8': 119, 'F9': 120, 'F10': 121,\n\t\t\t\t\t\t'F11': 122, 'F12': 123, 'Insert': 45, 'NumLock': 144, 'ScrollLock': 145,\n\t\t\t\t\t\t'Pause': 19, 'CapsLock': 20\n\t\t\t\t\t};\n\n\t\t\t\t\tconst codeMap = {\n\t\t\t\t\t\t'a': 'KeyA', 'b': 'KeyB', 'c': 'KeyC', 'd': 'KeyD', 'e': 'KeyE',\n\t\t\t\t\t\t'f': 'KeyF', 'g': 'KeyG', 'h': 'KeyH', 'i': 'KeyI', 'j': 'KeyJ',\n\t\t\t\t\t\t'k': 'KeyK', 'l': 'KeyL', 'm': 'KeyM', 'n': 'KeyN', 'o': 'KeyO',\n\t\t\t\t\t\t'p': 'KeyP', 'q': 'KeyQ', 'r': 'KeyR', 's': 'KeyS', 't': 'KeyT',\n\t\t\t\t\t\t'u': 'KeyU', 'v': 'KeyV', 'w': 'KeyW', 'x': 'KeyX', 'y': 'KeyY', 'z': 'KeyZ',\n\t\t\t\t\t\t'0': 'Digit0', '1': 'Digit1', '2': 'Digit2', '3': 'Digit3', '4': 'Digit4',\n\t\t\t\t\t\t'5': 'Digit5', '6': 'Digit6', '7': 'Digit7', '8': 'Digit8', '9': 'Digit9',\n\t\t\t\t\t\t' ': 'Space', 'Space': 'Space',\n\t\t\t\t\t\t'Enter': 'Enter', 'Tab': 'Tab', 'Escape': 'Escape', 'Backspace': 'Backspace',\n\t\t\t\t\t\t'Delete': 'Delete', 'Insert': 'Insert',\n\t\t\t\t\t\t'ArrowUp': 'ArrowUp', 'ArrowDown': 'ArrowDown', 'ArrowLeft': 'ArrowLeft', 'ArrowRight': 'ArrowRight',\n\t\t\t\t\t\t'Home': 'Home', 'End': 'End', 'PageUp': 'PageUp', 'PageDown': 'PageDown',\n\t\t\t\t\t\t'F1': 'F1', 'F2': 'F2', 'F3': 'F3', 'F4': 'F4', 'F5': 'F5', 'F6': 'F6',\n\t\t\t\t\t\t'F7': 'F7', 'F8': 'F8', 'F9': 'F9', 'F10': 'F10', 'F11': 'F11', 'F12': 'F12',\n\t\t\t\t\t\t'-': 'Minus', '=': 'Equal', '[': 'BracketLeft', ']': 'BracketRight',\n\t\t\t\t\t\t'\\\\': 'Backslash', ';': 'Semicolon', "'": 'Quote', ',': 'Comma',\n\t\t\t\t\t\t'.': 'Period', '/': 'Slash', '\`': 'Backquote'\n\t\t\t\t\t};\n\n\t\t\t\t\tconst scrollAmounts = {\n\t\t\t\t\t\t'PageDown': { x: 0, y: window.innerHeight * 0.8 },\n\t\t\t\t\t\t'PageUp': { x: 0, y: -window.innerHeight * 0.8 },\n\t\t\t\t\t\t'ArrowDown': { x: 0, y: 40 },\n\t\t\t\t\t\t'ArrowUp': { x: 0, y: -40 },\n\t\t\t\t\t\t'End': { x: 0, y: document.documentElement.scrollHeight - window.scrollY },\n\t\t\t\t\t\t'Home': { x: 0, y: -window.scrollY },\n\t\t\t\t\t\t'Space': { x: 0, y: window.innerHeight * 0.8 },\n\t\t\t\t\t\t' ': { x: 0, y: window.innerHeight * 0.8 },\n\t\t\t\t\t};\n\n\t\t\t\t\tconst modifierAliases = {\n\t\t\t\t\t\t'Control': ['Control', 'Ctrl', 'control', 'ctrl'],\n\t\t\t\t\t\t'Shift': ['Shift', 'shift'],\n\t\t\t\t\t\t'Alt': ['Alt', 'alt', 'Option', 'option'],\n\t\t\t\t\t\t'Meta': ['Meta', 'meta', 'Command', 'command', 'Cmd', 'cmd', 'Win', 'win']\n\t\t\t\t\t};\n\n\t\t\t\t\tfunction parseKeyCombo(input) {\n\t\t\t\t\t\tconst parts = input.split('+').map(p => p.trim());\n\t\t\t\t\t\tconst modifiers = { ctrlKey: false, shiftKey: false, altKey: false, metaKey: false };\n\t\t\t\t\t\tlet mainKey = '';\n\n\t\t\t\t\t\tfor (const part of parts) {\n\t\t\t\t\t\t\tlet isModifier = false;\n\t\t\t\t\t\t\tfor (const [mod, aliases] of Object.entries(modifierAliases)) {\n\t\t\t\t\t\t\t\tif (aliases.includes(part)) {\n\t\t\t\t\t\t\t\t\tif (mod === 'Control') modifiers.ctrlKey = true;\n\t\t\t\t\t\t\t\t\telse if (mod === 'Shift') modifiers.shiftKey = true;\n\t\t\t\t\t\t\t\t\telse if (mod === 'Alt') modifiers.altKey = true;\n\t\t\t\t\t\t\t\t\telse if (mod === 'Meta') modifiers.metaKey = true;\n\t\t\t\t\t\t\t\t\tisModifier = true;\n\t\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif (!isModifier) {\n\t\t\t\t\t\t\t\tmainKey = part;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\treturn { modifiers, mainKey };\n\t\t\t\t\t}\n\n\t\t\t\t\tconst { modifiers, mainKey } = parseKeyCombo(keyInput);\n\t\t\t\t\tconst key = mainKey || keyInput;\n\n\t\t\t\t\tconst keyLower = key.toLowerCase();\n\t\t\t\t\tconst code = codeMap[key] || codeMap[keyLower] || (key.length === 1 ? 'Key' + key.toUpperCase() : key);\n\t\t\t\t\tconst keyCode = keyCodeMap[key] || (key.length === 1 ? key.toUpperCase().charCodeAt(0) : 0);\n\n\t\t\t\t\tconst activeElement = document.activeElement || document.body;\n\n\t\t\t\t\tconst scrollKeys = ['PageDown', 'PageUp', 'Home', 'End'];\n\t\t\t\t\tif (scrollKeys.includes(key) && !modifiers.ctrlKey && !modifiers.altKey && !modifiers.metaKey) {\n\t\t\t\t\t\tconst isScrollable = (el) => {\n\t\t\t\t\t\t\tif (!el || !(el instanceof HTMLElement)) return false;\n\t\t\t\t\t\t\tconst style = getComputedStyle(el);\n\t\t\t\t\t\t\tconst overflowY = style.overflowY;\n\t\t\t\t\t\t\treturn (overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight;\n\t\t\t\t\t\t};\n\n\t\t\t\t\t\tlet scrollable = null;\n\t\t\t\t\t\tlet current = activeElement;\n\t\t\t\t\t\twhile (current && current !== document.body) {\n\t\t\t\t\t\t\tif (isScrollable(current)) {\n\t\t\t\t\t\t\t\tscrollable = current;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcurrent = current.parentElement;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (!scrollable) {\n\t\t\t\t\t\t\tscrollable = document.scrollingElement || document.documentElement;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst viewportHeight = scrollable.clientHeight;\n\n\t\t\t\t\t\tswitch (key) {\n\t\t\t\t\t\t\tcase 'PageDown':\n\t\t\t\t\t\t\t\tscrollable.scrollBy({ top: viewportHeight, behavior: 'instant' });\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'PageUp':\n\t\t\t\t\t\t\t\tscrollable.scrollBy({ top: -viewportHeight, behavior: 'instant' });\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'Home':\n\t\t\t\t\t\t\t\tscrollable.scrollTo({ top: 0, behavior: 'instant' });\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\tcase 'End':\n\t\t\t\t\t\t\t\tscrollable.scrollTo({ top: scrollable.scrollHeight, behavior: 'instant' });\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t}\n\t\t\t\t\t} else if (scrollAmounts[key] && !modifiers.ctrlKey && !modifiers.altKey && !modifiers.metaKey) {\n\t\t\t\t\t\twindow.scrollBy({ left: scrollAmounts[key].x, top: scrollAmounts[key].y, behavior: 'smooth' });\n\t\t\t\t\t}\n\n\t\t\t\t\tconst eventInit = {\n\t\t\t\t\t\tkey: key,\n\t\t\t\t\t\tcode: code,\n\t\t\t\t\t\tkeyCode: keyCode,\n\t\t\t\t\t\twhich: keyCode,\n\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\tctrlKey: modifiers.ctrlKey,\n\t\t\t\t\t\tshiftKey: modifiers.shiftKey,\n\t\t\t\t\t\taltKey: modifiers.altKey,\n\t\t\t\t\t\tmetaKey: modifiers.metaKey\n\t\t\t\t\t};\n\n\t\t\t\t\tactiveElement.dispatchEvent(new KeyboardEvent('keydown', eventInit));\n\n\t\t\t\t\tif (key.length === 1 && !modifiers.ctrlKey && !modifiers.altKey && !modifiers.metaKey) {\n\t\t\t\t\t\tactiveElement.dispatchEvent(new KeyboardEvent('keypress', eventInit));\n\n\t\t\t\t\t\tif (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable) {\n\t\t\t\t\t\t\tconst inputEvent = new InputEvent('beforeinput', {\n\t\t\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\t\t\tinputType: 'insertText',\n\t\t\t\t\t\t\t\tdata: key\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tactiveElement.dispatchEvent(inputEvent);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\tactiveElement.dispatchEvent(new KeyboardEvent('keyup', eventInit));\n\n\t\t\t\t\tconst modifierStr = [\n\t\t\t\t\t\tmodifiers.ctrlKey ? 'Ctrl' : '',\n\t\t\t\t\t\tmodifiers.shiftKey ? 'Shift' : '',\n\t\t\t\t\t\tmodifiers.altKey ? 'Alt' : '',\n\t\t\t\t\t\tmodifiers.metaKey ? 'Meta' : ''\n\t\t\t\t\t].filter(Boolean).join('+');\n\n\t\t\t\t\treturn {\n\t\t\t\t\t\taction: 'press_key',\n\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\tkey: key,\n\t\t\t\t\t\tcode: code,\n\t\t\t\t\t\tmodifiers: modifierStr || 'none',\n\t\t\t\t\t\tfullCombo: modifierStr ? modifierStr + '+' + key : key\n\t\t\t\t\t};\n\t\t\t\t})();\n\t\t\t`,
            o = nt(await et(r, n, t.headless, e), ["key", "code", "fullCombo"]);
          return o.success
            ? ct(
                {
                  content: [
                    {
                      type: "text",
                      text: `Successfully pressed key: ${o.fullCombo} (code: ${o.code})`,
                    },
                    { type: "metadata", viewId: n },
                  ],
                },
                n,
                t.take_screenshot_afterwards ?? !1,
                e,
              )
            : { content: [{ type: "text", text: `Failed to press key: ${o.key}` }] };
        },
      },
      i = {
        click: async (t, e) => ht({ ...t, retryWithOffset: !1, actionType: "click" }, et, e),
        safeClick: async (t, e) => ht(t, et, e),
        mouseClickXY: async (t, e) => gt(t, et, e),
        hover: async (t, e) => wt({ ...t, actionType: "hover" }, et, e),
        hoverAndWait: async (t, e) => wt(t, et, e),
        async drag(t, e) {
          const n = await ot(t.viewId, e);
          if (!n)
            return {
              content: [
                {
                  type: "text",
                  text: "No browser tab available. Please navigate to a page first.",
                },
              ],
            };
          try {
            (await Z("browser_drag", n, e), await st(n, t.headless, c, e));
            const r = U(t.sourceRef),
              o = t.targetRef ? U(t.targetRef) : void 0;
            if (!o && (void 0 === t.targetX || void 0 === t.targetY))
              return {
                content: [
                  {
                    type: "text",
                    text: "Error: Either targetRef or both targetX and targetY must be provided for drag operation.\n\nSuggestion: Specify where to drop the element using targetRef (for element-to-element drag) or targetX/targetY coordinates.",
                  },
                ],
              };
            const s = `\n\t\t\t\t\t(async function() {\n\t\t\t\t\t\t${q}\n\n\t\t\t\t\t\tconst sourceRef = ${JSON.stringify(r)};\n\t\t\t\t\t\tconst targetRef = ${JSON.stringify(o)};\n\t\t\t\t\t\tconst targetX = ${t.targetX ?? "null"};\n\t\t\t\t\t\tconst targetY = ${t.targetY ?? "null"};\n\n\t\t\t\t\t\tconst { element: sourceElement } = findElementByRef(sourceRef);\n\t\t\t\t\t\tif (!sourceElement) {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\t\t\terror: 'Source element not found: ' + sourceRef + '. Take a snapshot to get updated refs.',\n\t\t\t\t\t\t\t\tsuggestion: 'The source element reference may be stale. Take a new snapshot to get current element refs.'\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst sourceStyle = window.getComputedStyle(sourceElement);\n\t\t\t\t\t\tconst isDraggable = sourceElement.draggable || sourceElement.getAttribute('draggable') === 'true';\n\t\t\t\t\t\tif (!isDraggable && sourceStyle.cursor !== 'grab' && sourceStyle.cursor !== 'move') {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\t\t\terror: 'Source element ' + sourceRef + ' does not appear to be draggable. It lacks the draggable attribute.',\n\t\t\t\t\t\t\t\tsuggestion: 'Verify the element is meant to be dragged. Check if it has draggable="true" attribute or is part of a drag-and-drop library that uses different mechanisms.'\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tlet targetElement = null;\n\t\t\t\t\t\tif (targetRef) {\n\t\t\t\t\t\t\tconst targetResult = findElementByRef(targetRef);\n\t\t\t\t\t\t\ttargetElement = targetResult.element;\n\t\t\t\t\t\t\tif (!targetElement) {\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\t\t\t\terror: 'Target element not found: ' + targetRef + '. Take a snapshot to get updated refs.',\n\t\t\t\t\t\t\t\t\tsuggestion: 'The target element reference may be stale. Take a new snapshot to get current element refs.'\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tconst sourceRect = sourceElement.getBoundingClientRect();\n\t\t\t\t\t\tconst startX = Math.round(sourceRect.left + sourceRect.width / 2);\n\t\t\t\t\t\tconst startY = Math.round(sourceRect.top + sourceRect.height / 2);\n\n\t\t\t\t\t\tlet dropX, dropY;\n\t\t\t\t\t\tif (targetElement) {\n\t\t\t\t\t\t\tconst targetRect = targetElement.getBoundingClientRect();\n\t\t\t\t\t\t\tdropX = Math.round(targetRect.left + targetRect.width / 2);\n\t\t\t\t\t\t\tdropY = Math.round(targetRect.top + targetRect.height / 2);\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tdropX = targetX;\n\t\t\t\t\t\t\tdropY = targetY;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tconst dataTransfer = new DataTransfer();\n\t\t\t\t\t\t\tdataTransfer.effectAllowed = 'all';\n\n\t\t\t\t\t\t\tconst pointerOpts = {\n\t\t\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\t\t\tview: window,\n\t\t\t\t\t\t\t\tpointerId: 1,\n\t\t\t\t\t\t\t\tpointerType: 'mouse',\n\t\t\t\t\t\t\t\tisPrimary: true,\n\t\t\t\t\t\t\t\tbutton: 0,\n\t\t\t\t\t\t\t\tbuttons: 1\n\t\t\t\t\t\t\t};\n\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new PointerEvent('pointerover', { ...pointerOpts, clientX: startX, clientY: startY }));\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new PointerEvent('pointerenter', { ...pointerOpts, clientX: startX, clientY: startY, bubbles: false }));\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, clientX: startX, clientY: startY }));\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new MouseEvent('mouseenter', { bubbles: false, clientX: startX, clientY: startY }));\n\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new PointerEvent('pointerdown', { ...pointerOpts, clientX: startX, clientY: startY }));\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, clientX: startX, clientY: startY, button: 0 }));\n\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 50));\n\n\t\t\t\t\t\t\tconst dragStartEvent = new DragEvent('dragstart', {\n\t\t\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\t\t\tclientX: startX,\n\t\t\t\t\t\t\t\tclientY: startY,\n\t\t\t\t\t\t\t\tdataTransfer: dataTransfer\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tconst dragStarted = sourceElement.dispatchEvent(dragStartEvent);\n\n\t\t\t\t\t\t\tif (!dragStarted) {\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\t\t\t\terror: 'Drag start was prevented by the page.',\n\t\t\t\t\t\t\t\t\tsuggestion: 'The page may have event handlers preventing drag. Try using browser_evaluate to trigger the drag programmatically.'\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new DragEvent('drag', {\n\t\t\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\t\t\tclientX: startX,\n\t\t\t\t\t\t\t\tclientY: startY,\n\t\t\t\t\t\t\t\tdataTransfer: dataTransfer\n\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 50));\n\n\t\t\t\t\t\t\tconst dropTarget = targetElement || document.elementFromPoint(dropX, dropY);\n\t\t\t\t\t\t\tif (!dropTarget) {\n\t\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\t\t\t\terror: 'No element found at drop coordinates (' + dropX + ', ' + dropY + ').',\n\t\t\t\t\t\t\t\t\tsuggestion: 'Verify the target coordinates are within the viewport and point to a valid drop zone.'\n\t\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\tdropTarget.dispatchEvent(new DragEvent('dragenter', {\n\t\t\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\t\t\tclientX: dropX,\n\t\t\t\t\t\t\t\tclientY: dropY,\n\t\t\t\t\t\t\t\tdataTransfer: dataTransfer\n\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tconst dragOverEvent = new DragEvent('dragover', {\n\t\t\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\t\t\tclientX: dropX,\n\t\t\t\t\t\t\t\tclientY: dropY,\n\t\t\t\t\t\t\t\tdataTransfer: dataTransfer\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tdropTarget.dispatchEvent(dragOverEvent);\n\n\t\t\t\t\t\t\tawait new Promise(r => setTimeout(r, 50));\n\n\t\t\t\t\t\t\tconst dropEvent = new DragEvent('drop', {\n\t\t\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\t\t\tcancelable: true,\n\t\t\t\t\t\t\t\tclientX: dropX,\n\t\t\t\t\t\t\t\tclientY: dropY,\n\t\t\t\t\t\t\t\tdataTransfer: dataTransfer\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tconst dropAccepted = dropTarget.dispatchEvent(dropEvent);\n\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new DragEvent('dragend', {\n\t\t\t\t\t\t\t\tbubbles: true,\n\t\t\t\t\t\t\t\tcancelable: false,\n\t\t\t\t\t\t\t\tclientX: dropX,\n\t\t\t\t\t\t\t\tclientY: dropY,\n\t\t\t\t\t\t\t\tdataTransfer: dataTransfer\n\t\t\t\t\t\t\t}));\n\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new PointerEvent('pointerup', { ...pointerOpts, clientX: dropX, clientY: dropY }));\n\t\t\t\t\t\t\tsourceElement.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, clientX: dropX, clientY: dropY }));\n\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tsuccess: true,\n\t\t\t\t\t\t\t\taction: 'drag',\n\t\t\t\t\t\t\t\tsource: sourceRef,\n\t\t\t\t\t\t\t\ttarget: targetRef || ('(' + dropX + ', ' + dropY + ')'),\n\t\t\t\t\t\t\t\tdropAccepted: dropAccepted,\n\t\t\t\t\t\t\t\tmessage: 'Drag completed from ' + sourceRef + ' to ' + (targetRef || 'coordinates (' + dropX + ', ' + dropY + ')') + (dropAccepted ? '' : ' (drop may not have been accepted by target)')\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t} catch (err) {\n\t\t\t\t\t\t\treturn {\n\t\t\t\t\t\t\t\tsuccess: false,\n\t\t\t\t\t\t\t\terror: 'Drag operation failed: ' + (err instanceof Error ? err.message : String(err)),\n\t\t\t\t\t\t\t\tsuggestion: 'The drag-and-drop may use a library (like react-dnd or sortablejs) that requires specific event sequences. Try using browser_evaluate to interact with the library directly.'\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t}\n\t\t\t\t\t})();\n\t\t\t\t`,
              i = nt(await et(s, n, t.headless, e), []);
            return i.success
              ? ct(
                  {
                    content: [
                      {
                        type: "text",
                        text: `### Action: drag\n- ${i.message}\n- Source: ${i.source}\n- Target: ${i.target}`,
                      },
                      { type: "metadata", viewId: n },
                    ],
                  },
                  n,
                  t.take_screenshot_afterwards ?? !1,
                  e,
                )
              : {
                  content: [
                    {
                      type: "text",
                      text: `Error: ${i.error || "Unknown drag error"}\n\nSuggestion: ${i.suggestion || "Take a snapshot to verify the elements are draggable."}\n\nRecovery action: browser_snapshot`,
                    },
                  ],
                };
          } catch (e) {
            return {
              content: [
                {
                  type: "text",
                  text: G(
                    z(e instanceof Error ? e : new Error(String(e)), {
                      ref: t.sourceRef,
                      action: "drag",
                    }),
                  ),
                },
              ],
            };
          }
        },
      };
    return (
      Object.assign(t, e),
      Object.assign(t, n),
      Object.assign(t, r),
      Object.assign(t, o),
      Object.assign(t, i),
      t
    );
  })();
  function kt(t, e, n, r = Math.random) {
    const o = e * 2 ** t,
      s = Math.min(o, n);
    return r() * s;
  }
  const St = new Set(["retry", "recovery_backfill", "watchdog_backfill"]);
  function Rt(t, e, n = "distribution", r) {
    try {
      const o = ["mcp_version:snapshots", "serverIdentifier:cursor-ide-browser", ...(r ?? [])];
      "distribution" === n
        ? s.cursor.metricsDistribution({ stat: t, value: e, tags: o })
        : s.cursor.metricsIncrement({ stat: t, value: e, tags: o });
    } catch {}
  }
  function Ct(t) {
    if (null == t) return "null";
    if ("string" == typeof t || "number" == typeof t || "boolean" == typeof t)
      return JSON.stringify(t);
    if (Array.isArray(t)) return `[${t.map(Ct).join(",")}]`;
    if ("object" == typeof t) {
      const e = t;
      return `{${Object.keys(e)
        .sort()
        .map((t) => `${JSON.stringify(t)}:${Ct(e[t])}`)
        .join(",")}}`;
    }
    return "null";
  }
  function Tt(t) {
    try {
      return JSON.parse(t);
    } catch {
      return {};
    }
  }
  function It(t) {
    const e = Tt(t);
    if (!e || "object" != typeof e) return [];
    const n = e,
      r = new Set(n.required ?? []);
    return Object.keys(n.properties ?? {})
      .sort()
      .map((t) => ({ name: t, description: n.properties?.[t]?.description, required: r.has(t) }));
  }
  class At {
    constructor(t) {
      ((this.snapshotRevision = 0),
        (this.isDisposed = !1),
        (this.refreshDirty = !1),
        (this.retryAttempt = 0),
        (this.recoveryAttempt = 0),
        (this.getProvider = t.getProvider),
        (this.pushSnapshots = t.pushSnapshots ?? ((t) => s.cursor.pushMcpSnapshots(t))),
        (this.retryBaseDelayMs = t.retryBaseDelayMs ?? 1e3),
        (this.retryMaxDelayMs = t.retryMaxDelayMs ?? 3e4),
        (this.maxRetryAttempts = t.maxRetryAttempts ?? 5),
        (this.recoveryBaseDelayMs = t.recoveryBaseDelayMs ?? 3e4),
        (this.recoveryMaxDelayMs = t.recoveryMaxDelayMs ?? 12e4),
        (this.snapshotEpoch = Date.now()));
    }
    requestPush(t) {
      if (!this.isDisposed)
        return this.inFlightPush
          ? ((this.refreshDirty = !0), void (this.refreshDirtyReason = t))
          : void (this.inFlightPush = this.flush(t).finally(() => {
              if (((this.inFlightPush = void 0), this.isDisposed || !this.refreshDirty)) return;
              const t = this.refreshDirtyReason;
              ((this.refreshDirty = !1),
                (this.refreshDirtyReason = void 0),
                t && this.requestPush(t));
            }));
    }
    async flush(t) {
      if (this.isDisposed) return;
      const e = Date.now();
      try {
        const n = this.getProvider();
        if (!n) return;
        const r = this.snapshotRevision + 1,
          o = await n.listOfferings();
        if (this.isDisposed) return;
        const s = (function (t, e, n, r) {
            return {
              serverIdentifier: t.id,
              serverName: t.id,
              snapshotEpoch: n,
              snapshotRevision: r,
              status: "connected",
              tools: e.tools.map((t) => ({
                name: t.name,
                description: t.description,
                inputSchema: Tt(t.parameters),
                outputSchema: t.outputSchema ? Tt(t.outputSchema) : void 0,
              })),
              resources:
                e.resources?.map((t) => ({
                  uri: t.uri,
                  name: t.name,
                  description: t.description,
                  mimeType: t.mimeType,
                })) ?? [],
              prompts: e.prompts.map((t) => ({
                name: t.name,
                description: t.description,
                arguments: It(t.parameters),
              })),
              instructions: t.instructions,
            };
          })(n, o, this.snapshotEpoch, r),
          i = (function (t) {
            return Ct({
              serverIdentifier: t.serverIdentifier,
              serverName: t.serverName,
              status: t.status,
              statusDetail: t.statusDetail,
              tools: t.tools
                .map((t) => ({
                  name: t.name,
                  description: t.description,
                  inputSchema: t.inputSchema,
                  outputSchema: t.outputSchema,
                }))
                .sort((t, e) => t.name.localeCompare(e.name)),
              resources: t.resources
                .map((t) => ({
                  uri: t.uri,
                  name: t.name,
                  description: t.description,
                  mimeType: t.mimeType,
                }))
                .sort((t, e) => t.uri.localeCompare(e.uri)),
              prompts: t.prompts
                .map((t) => ({
                  name: t.name,
                  description: t.description,
                  arguments: (t.arguments ?? [])
                    .map((t) => ({
                      name: t.name,
                      description: t.description,
                      required: t.required,
                    }))
                    .sort((t, e) => t.name.localeCompare(e.name)),
                }))
                .sort((t, e) => t.name.localeCompare(e.name)),
              instructions: t.instructions,
            });
          })(s),
          a = i === this.lastPushedFingerprint,
          l =
            a &&
            (function (t) {
              return St.has(t);
            })(t);
        if (a && !l)
          return void Rt(
            "mcp.snapshot.browser_provider_push_duration_ms",
            Date.now() - e,
            "distribution",
            [`reason:${t}`, "outcome:noop", "unchanged:true"],
          );
        (l &&
          Rt("mcp.snapshot.browser_provider_push_forced_unchanged_delivery_count", 1, "increment", [
            `reason:${t}`,
          ]),
          this.pushSnapshots([s]),
          (this.snapshotRevision = r),
          (this.lastPushedFingerprint = i),
          this.clearRetryState(),
          this.clearRecoveryLoop("drained"),
          Rt("mcp.snapshot.browser_provider_push_duration_ms", Date.now() - e, "distribution", [
            `reason:${t}`,
            "outcome:success",
            "unchanged:" + (a ? "true" : "false"),
          ]));
      } catch (n) {
        (Rt("mcp.snapshot.browser_provider_push_duration_ms", Date.now() - e, "distribution", [
          `reason:${t}`,
          "outcome:error",
        ]),
          Rt("mcp.snapshot.browser_provider_push_error_count", 1, "increment", [`reason:${t}`]),
          a.debug(
            `Browser snapshot push failed (${t}): ${n instanceof Error ? n.message : String(n)}`,
          ),
          this.scheduleRetry(t));
      }
    }
    scheduleRetry(t) {
      if (this.isDisposed) return;
      if (((this.retryAttempt += 1), this.retryAttempt > this.maxRetryAttempts))
        return (
          Rt("mcp.snapshot.browser_provider_push_retry_exhausted_count", 1, "increment", [
            `reason:${t}`,
          ]),
          a.warn(`Browser snapshot push retries exhausted (${t}); entering recovery backfill loop`),
          this.clearRetryState(),
          void this.scheduleRecoveryLoop()
        );
      this.retryTimer && clearTimeout(this.retryTimer);
      const e = Math.max(
        this.retryBaseDelayMs,
        kt(this.retryAttempt - 1, this.retryBaseDelayMs, this.retryMaxDelayMs),
      );
      this.retryTimer = setTimeout(() => {
        ((this.retryTimer = void 0), this.requestPush("retry"));
      }, e);
    }
    clearRetryState() {
      ((this.retryAttempt = 0),
        this.retryTimer && (clearTimeout(this.retryTimer), (this.retryTimer = void 0)));
    }
    scheduleRecoveryLoop() {
      if (this.isDisposed || this.recoveryTimer) return;
      const t = Math.max(
        this.recoveryBaseDelayMs,
        kt(this.recoveryAttempt, this.recoveryBaseDelayMs, this.recoveryMaxDelayMs),
      );
      this.recoveryTimer = setTimeout(() => {
        ((this.recoveryTimer = void 0),
          this.isDisposed ||
            ((this.recoveryAttempt += 1),
            Rt("mcp.snapshot.browser_provider_push_recovery_backfill_count", 1, "increment", [
              `attempt:${this.recoveryAttempt}`,
            ]),
            this.requestPush("recovery_backfill"),
            this.scheduleRecoveryLoop()));
      }, t);
    }
    clearRecoveryLoop(t) {
      (this.recoveryTimer && (clearTimeout(this.recoveryTimer), (this.recoveryTimer = void 0)),
        (this.recoveryAttempt = 0));
    }
    dispose() {
      ((this.isDisposed = !0),
        (this.refreshDirty = !1),
        (this.refreshDirtyReason = void 0),
        this.clearRetryState(),
        this.clearRecoveryLoop("disposed"));
    }
  }
  async function Dt(t, e, n, r) {
    const o = r?.viewId ?? (await ot("string" == typeof e.viewId ? e.viewId : void 0)) ?? "unknown",
      i =
        r?.postSnapshotYaml ??
        (function (t) {
          return K.get(t);
        })(o),
      a =
        void 0 === r
          ? (function (t) {
              return W.get(t);
            })(o)
          : void 0,
      l = { ...e };
    (delete l.take_screenshot_afterwards,
      s.commands.executeCommand("cursor.internal.recordBrowserTelemEvent", {
        viewId: o,
        toolName: t,
        argsJson: JSON.stringify(l),
        success: n,
        snapshotYaml: i,
        url: r?.postUrl ?? a?.url,
        title: r?.postTitle ?? a?.title,
      }));
  }
  const _t = "cursor.browserAutomation.requestSnapshotBackfill";
  class $t {
    constructor() {
      ((this.id = "cursor-ide-browser"),
        (this.cdpTurnTracker = new l()),
        (this.featureGateName = void 0),
        (this.instructions =
          'The cursor-ide-browser MCP server provides a Cursor-owned browser tab plus a raw Chrome DevTools Protocol command tool.\n\nCORE WORKFLOW:\n1. Start by understanding the user\'s goal and what success looks like on the page.\n2. Use browser_tabs with action "list" to inspect open tabs and URLs before acting.\n3. Use browser_navigate to create or navigate the target tab. Omit the position parameter for background automation so focus is preserved.\n4. Use browser_lock before longer automation on an existing tab, then browser_lock with action "unlock" when finished.\n5. Use browser_snapshot for accessibility context and browser_take_screenshot for visual verification.\n6. Use browser_click, browser_type, browser_fill, browser_select_option, browser_press_key, browser_scroll, and browser_drag for page interactions.\n7. Use browser_highlight and browser_get_bounding_box for visual grounding and coordinate diagnostics.\n8. Use browser_cdp for page inspection, profiling, runtime evaluation, DOM/CSS queries, and performance data.\n\nAVOID RABBIT HOLES:\n1. Do not repeat the same failing action more than once without new evidence such as a fresh snapshot, a different ref, a changed page state, or a clear new hypothesis.\n2. IMPORTANT: If four attempts fail or progress stalls, stop acting and report what you observed, what blocked progress, and the most likely next step.\n3. Prefer gathering evidence over brute force. If the page is confusing, use browser_snapshot, browser_take_screenshot, or CDP inspection before trying more actions.\n4. If you encounter a blocker such as login, passkey/manual user interaction, permissions, captchas, destructive confirmations, missing data, or an unexpected state, stop and report it instead of improvising repeated actions.\n5. Do not get stuck in wait-action-wait loops. Every retry should be justified by something newly observed.\n\nCRITICAL - Lock/unlock workflow:\n1. browser_lock requires an existing browser tab - you CANNOT call browser_lock with action: "lock" before browser_navigate\n2. Correct order: browser_navigate -> browser_lock({ action: "lock" }) -> (interactions) -> browser_lock({ action: "unlock" })\n3. If a browser tab already exists (check with browser_tabs list), call browser_lock with action: "lock" FIRST before any interactions\n4. Only call browser_lock with action: "unlock" when completely done with ALL browser operations for this turn\n\nIMPORTANT - Waiting strategy:\nWhen waiting for page changes, prefer short CDP polling loops with Runtime.evaluate, DOM queries, Page lifecycle signals, or browser_snapshot checks rather than a single long wait.\n\nCDP USAGE:\n- Use browser_cdp with a DevTools Protocol method and params object, for example Runtime.evaluate, DOM.getDocument, CSS.getComputedStyleForNode, Profiler.start/stop, Performance.getMetrics, Log.enable, and Network.enable.\n- Do not use browser_cdp with CDP Input.* methods. They are denied because they are focus-sensitive in Electron webviews and can route input to Cursor UI instead of the browser page.\n- Use browser_click, browser_type, browser_fill, browser_select_option, browser_press_key, browser_scroll, and browser_drag for clicks, typing, filling inputs, selecting options, keyboard actions, scrolling, and drag-and-drop.\n- Use Runtime.evaluate for advanced DOM-scoped interactions that the dedicated browser tools do not cover.\n- For profiling, call Profiler.enable, Profiler.start, reproduce the behavior, then Profiler.stop. The profile is saved to a file and returned as a log_file; read that file only when you need to inspect details.\n- For JavaScript evaluation, prefer Runtime.evaluate with returnByValue when possible.\n- Device emulation you set with Emulation.setDeviceMetricsOverride, Emulation.setTouchEmulationEnabled, or Emulation.setUserAgentOverride (for example for a phone-sized screenshot) lasts only for the current turn: it is cleared when your turn ends, and the user can reset it from the browser tab at any time. Send Emulation.clearDeviceMetricsOverride yourself once you are done with it within a turn.\n- Some browser-wide or sensitive CDP methods are denied, especially cookie, storage, permission, download, target-management, filesystem-backed file-input commands, system-level commands, and CDP navigation/history navigation commands.\n- Large CDP responses are saved to files instead of being inlined. Prefer using the returned file path over immediately stuffing large payloads into context; read focused sections only when needed.\n\nVISION:\n- browser_take_screenshot attaches an image result that the model can inspect. CDP Page.captureScreenshot returns data inside JSON and should not replace browser_take_screenshot when visual verification is needed.\n\nNOTES:\n- browser_snapshot returns snapshot YAML and is the main source of truth for page structure.\n- Refs are opaque handles tied to the latest browser_snapshot for that tab.\n- Iframe content is not accessible - only elements outside iframes can be interacted with.\n- When you stop to report a blocker, include the current page, the target you were trying to reach, the blocker you observed, and the best next action. If the blocker requires manual user interaction, ask the user to take over at that point rather than assuming it in advance.\n'),
        (this.tools = [
          {
            name: "browser_navigate",
            description:
              "Navigate to a URL. By default reuses an existing tab; set newTab: true to open in a new tab.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                url: { type: "string", description: "The URL to navigate to" },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                position: {
                  type: "string",
                  enum: ["active", "side"],
                  description:
                    'Only set when the user explicitly asks to reveal, show, focus, or open the browser visibly. Set to "active" for visible/revealed browser UI, or "side" if the user mentions "side", "beside", "side panel", or "side by side". Omit this parameter for background automation so focus is preserved.',
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after navigation completes. Defaults to false.",
                },
                newTab: {
                  type: "boolean",
                  description:
                    "When true, creates a new tab before navigating instead of reusing an existing tab. Defaults to false.",
                },
              },
              required: ["url"],
            }),
          },
          {
            name: "browser_snapshot",
            description:
              "Capture accessibility snapshot of the current page, this is better than screenshot",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                interactive: {
                  type: "boolean",
                  description:
                    "When true, only include interactive elements in the snapshot. Defaults to false.",
                },
                maxDepth: {
                  type: "number",
                  description: "Maximum depth for snapshot output. Defaults to 20.",
                },
                compact: {
                  type: "boolean",
                  description:
                    "When true, outputs a more compact snapshot format. Defaults to false.",
                },
                selector: {
                  type: "string",
                  description: "Optional CSS selector to scope the snapshot to a subtree.",
                },
                includeDiff: {
                  type: "boolean",
                  description:
                    "When true, include a diff vs the previous snapshot for this tab. Defaults to false.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after snapshot completes. Defaults to false.",
                },
              },
              required: [],
            }),
          },
          {
            name: "browser_click",
            description:
              "Click an element by ref from browser_snapshot. Use this instead of CDP Input.* methods.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                ref: { type: "string", description: "Element ref from browser_snapshot." },
                element: {
                  type: "string",
                  description: "Human-readable description of the element.",
                },
                offsetX: {
                  type: "number",
                  description: "Optional x offset from the element center.",
                },
                offsetY: {
                  type: "number",
                  description: "Optional y offset from the element center.",
                },
                doubleClick: {
                  type: "boolean",
                  description: "When true, double-click the element.",
                },
                button: {
                  type: "string",
                  enum: ["left", "right", "middle"],
                  description: "Mouse button. Defaults to left.",
                },
                modifiers: {
                  type: "array",
                  items: {
                    type: "string",
                    enum: ["Control", "Shift", "Alt", "Meta", "ControlOrMeta"],
                  },
                  description: "Optional modifier keys.",
                },
                holdDurationMs: {
                  type: "number",
                  description: "Optional mouse hold duration before release.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after the click completes. Defaults to false.",
                },
              },
              required: ["ref"],
            }),
          },
          {
            name: "browser_mouse_click_xy",
            description:
              "Click at viewport coordinates. Prefer browser_click with refs when possible.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                x: { type: "number", description: "Viewport x coordinate." },
                y: { type: "number", description: "Viewport y coordinate." },
                button: {
                  type: "string",
                  enum: ["left", "right", "middle"],
                  description: "Mouse button. Defaults to left.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after the click completes. Defaults to false.",
                },
              },
              required: ["x", "y"],
            }),
          },
          {
            name: "browser_type",
            description: "Type text into an input, textarea, or contenteditable element by ref.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                ref: { type: "string", description: "Element ref from browser_snapshot." },
                text: { type: "string", description: "Text to type." },
                element: {
                  type: "string",
                  description: "Human-readable description of the element.",
                },
                clear: { type: "boolean", description: "When true, clear existing text first." },
                submit: { type: "boolean", description: "When true, press Enter after typing." },
                slowly: { type: "boolean", description: "When true, type character by character." },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after typing completes. Defaults to false.",
                },
              },
              required: ["ref", "text"],
            }),
          },
          {
            name: "browser_fill",
            description: "Set the value of an input, textarea, or contenteditable element by ref.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                ref: { type: "string", description: "Element ref from browser_snapshot." },
                value: { type: "string", description: "Value to set." },
                element: {
                  type: "string",
                  description: "Human-readable description of the element.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after filling completes. Defaults to false.",
                },
              },
              required: ["ref", "value"],
            }),
          },
          {
            name: "browser_select_option",
            description: "Select one or more options in a select element by ref.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                ref: { type: "string", description: "Element ref from browser_snapshot." },
                values: {
                  type: "array",
                  items: { type: "string" },
                  description: "Option values or labels to select.",
                },
                element: {
                  type: "string",
                  description: "Human-readable description of the element.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after selection completes. Defaults to false.",
                },
              },
              required: ["ref", "values"],
            }),
          },
          {
            name: "browser_press_key",
            description: "Press a key in the browser page using DOM keyboard events.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                key: {
                  type: "string",
                  description:
                    "Key to press, for example Enter, Escape, Tab, ArrowDown, or a single character.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after the key press completes. Defaults to false.",
                },
              },
              required: ["key"],
            }),
          },
          {
            name: "browser_scroll",
            description:
              "Scroll the page, a scrollable container, or an element into view. Use this instead of CDP Input.* wheel events.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                ref: { type: "string", description: "Optional element ref from browser_snapshot." },
                direction: {
                  type: "string",
                  enum: ["up", "down", "left", "right"],
                  description: "Scroll direction.",
                },
                amount: {
                  type: "number",
                  description: "Scroll amount in pixels. Defaults to 300.",
                },
                deltaX: { type: "number", description: "Explicit horizontal scroll delta." },
                deltaY: { type: "number", description: "Explicit vertical scroll delta." },
                scrollIntoView: {
                  type: "boolean",
                  description: "When true, scroll the ref into view.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after scrolling completes. Defaults to false.",
                },
              },
              required: [],
            }),
          },
          {
            name: "browser_drag",
            description: "Drag an element by ref to another ref or viewport coordinates.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                sourceRef: {
                  type: "string",
                  description: "Source element ref from browser_snapshot.",
                },
                targetRef: {
                  type: "string",
                  description: "Optional target element ref from browser_snapshot.",
                },
                targetX: { type: "number", description: "Optional target viewport x coordinate." },
                targetY: { type: "number", description: "Optional target viewport y coordinate." },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after drag completes. Defaults to false.",
                },
              },
              required: ["sourceRef"],
            }),
          },
          {
            name: "browser_get_bounding_box",
            description: "Get the viewport bounding box for an element ref.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                ref: { type: "string", description: "Element ref from browser_snapshot." },
                element: {
                  type: "string",
                  description: "Human-readable description of the element.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
              },
              required: ["ref"],
            }),
          },
          {
            name: "browser_highlight",
            description: "Highlight an element by ref in the browser page for visual grounding.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                ref: { type: "string", description: "Element ref from browser_snapshot." },
                element: {
                  type: "string",
                  description: "Human-readable description of the element.",
                },
                durationMs: {
                  type: "number",
                  description: "Highlight duration in milliseconds. Defaults to 2000.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
              },
              required: ["ref"],
            }),
          },
          {
            name: "browser_tabs",
            description: "List, create, close, or select a browser tab",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                action: {
                  type: "string",
                  enum: ["list", "new", "close", "select"],
                  description: "Operation to perform",
                },
                index: {
                  type: "number",
                  description:
                    'Tab index. Required for "select". Optional for "close" (defaults to current tab).',
                },
                position: {
                  type: "string",
                  enum: ["active", "side"],
                  description:
                    'Only set for action "new" when the user explicitly asks to reveal, show, focus, or open the browser visibly. Set to "active" for visible/revealed browser UI, or "side" if the user mentions "side", "beside", "side panel", or "side by side". Omit this parameter for background automation so focus is preserved.',
                },
              },
              required: ["action"],
            }),
          },
          {
            name: "browser_cdp",
            description:
              "Send a Chrome DevTools Protocol command to the target browser tab. Do not use CDP Input.* methods; use dedicated browser tools for clicks, text input, key presses, scrolling, and drag-and-drop. Browser-wide, storage, cookie, permission, download, target-management, and system-level commands are denied.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                method: {
                  type: "string",
                  description:
                    "CDP method name, for example Runtime.evaluate, DOM.getDocument, Profiler.start, or Performance.getMetrics.",
                },
                params: {
                  type: "object",
                  description:
                    "CDP params object. Omit or pass {} when the command takes no params.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
                take_screenshot_afterwards: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot after the CDP command completes. Defaults to false.",
                },
              },
              required: ["method"],
            }),
          },
          {
            name: "browser_take_screenshot",
            description:
              "Take a screenshot of the current page. You can't perform actions based on the screenshot, use browser_snapshot for actions.",
            parameters: JSON.stringify({
              type: "object",
              properties: {
                type: {
                  type: "string",
                  description: "Image format for the screenshot. Default is png.",
                },
                filename: {
                  type: "string",
                  description:
                    "File name to save the screenshot to. Defaults to page-{timestamp}.{png|jpeg} if not specified.",
                },
                element: {
                  type: "string",
                  description: "Description of the element, if taking a screenshot of an element",
                },
                ref: {
                  type: "string",
                  description: "CSS selector for the element, if taking a screenshot of an element",
                },
                fullPage: {
                  type: "boolean",
                  description:
                    "When true, takes a screenshot of the full scrollable page, instead of the currently visible viewport. Cannot be used with element screenshots.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
              },
              required: [],
            }),
          },
          {
            name: "browser_lock",
            description:
              'Lock or unlock the browser to control whether the user can interact while you work. Set action to "lock" or "unlock". When locked, the user can still click "Take Control" to unlock if needed.',
            parameters: JSON.stringify({
              type: "object",
              properties: {
                action: {
                  type: "string",
                  enum: ["lock", "unlock"],
                  description: "Whether to lock or unlock the browser for user interaction.",
                },
                viewId: {
                  type: "string",
                  description: "Target browser tab ID. If omitted, uses the last interacted tab.",
                },
              },
              required: ["action"],
            }),
          },
        ]));
    }
    async initialize(t) {
      a.info("Browser Automation MCP Provider initialized with direct execution");
    }
    async listOfferings() {
      return { tools: [...this.tools], prompts: [], resources: [] };
    }
    async callTool(t, e, n) {
      a.info(`Executing tool: ${t} with args: ${JSON.stringify(e)}`);
      let r,
        o = !0;
      try {
        const o = { ownerAgentId: n?.composerId };
        switch (t) {
          case "browser_navigate": {
            const t = e;
            r = await Et.navigate(t, o);
            break;
          }
          case "browser_snapshot":
            r = await Et.snapshot(e, o);
            break;
          case "browser_take_screenshot":
            r = await Et.takeScreenshot(e, o);
            break;
          case "browser_cdp": {
            r = await Et.cdp(e, o);
            const t = (function (t) {
                return t?.conversationId ?? t?.composerId;
              })(n),
              s = (function (t) {
                for (const e of t.content) if ("metadata" === e.type) return e.viewId;
              })(r);
            void 0 !== t &&
              void 0 !== s &&
              this.cdpTurnTracker.record(t, { viewId: s, ownerAgentId: o.ownerAgentId });
            break;
          }
          case "browser_click":
            r = await Et.click(e, o);
            break;
          case "browser_mouse_click_xy":
            r = await Et.mouseClickXY(e, o);
            break;
          case "browser_type":
            r = await Et.type(e, o);
            break;
          case "browser_fill":
            r = await Et.fill(e, o);
            break;
          case "browser_select_option":
            r = await Et.selectOption(e, o);
            break;
          case "browser_press_key":
            r = await Et.pressKey(e, o);
            break;
          case "browser_scroll":
            r = await Et.scroll(e, o);
            break;
          case "browser_drag":
            r = await Et.drag(e, o);
            break;
          case "browser_get_bounding_box":
            r = await Et.getBoundingBox(e, o);
            break;
          case "browser_highlight":
            r = await Et.highlight(e, o);
            break;
          case "browser_tabs": {
            const t = e;
            r = await Et.tabs(t, o);
            break;
          }
          case "browser_lock":
            r = await Et.lock(e, o);
            break;
          default:
            throw new Error(`Unknown tool: ${t}`);
        }
        return r;
      } catch (e) {
        throw ((o = !1), a.error(`Error executing tool ${t}:`, e), e);
      } finally {
        !(function (t, e, n, r) {
          try {
            Promise.resolve(s.cursor.checkFeatureGate("browser_cpp_telemetry"))
              .then((o) => {
                if (o) return Dt(t, e, n, r);
              })
              .catch(() => {});
          } catch {}
        })(t, e, o, r?.browserTelemetry);
      }
    }
    async onTurnEnded(t) {
      for (const e of this.cdpTurnTracker.take(t.conversationId))
        try {
          await s.commands.executeCommand(
            "cursor.browserView.clearAgentDeviceEmulation",
            e.viewId,
            { ownerAgentId: e.ownerAgentId },
          );
        } catch (t) {
          a.warn(
            `Failed to clear device emulation on ${e.viewId} at the end of a turn: ${String(t)}`,
          );
        }
    }
    async dispose() {
      a.info("Browser Automation MCP Provider disposed");
    }
  }
  let Pt, Nt;
  async function Mt() {
    a.info("injectBrowserUIScript called");
    try {
      const e =
        ((t = "browser-tab-id"),
        `\n(function() {\n\t// Prevent double injection\n\tif (window.__cursorBrowserAutomationInjected) {\n\t\treturn;\n\t}\n\n\t// Only inject in top-level frame\n\tif (window !== window.top) {\n\t\treturn;\n\t}\n\n\twindow.__cursorBrowserAutomationInjected = true;\n\n\tconst tabId = ${JSON.stringify(t)};\n\n\t// =============================================================================\n\t// Area Screenshot Selection\n\t// =============================================================================\n\t// IMPORTANT: BrowserEditorContent.tsx may also inject area screenshot handling\n\t// via BROWSER_AREA_SCREENSHOT_SCRIPT. Check if it's already injected to avoid\n\t// duplicate screenshot captures.\n\n\tconst areaScreenshotAlreadyInjected = window.__cursorAreaScreenshotInjected === true;\n\n\tlet isDragging = false;\n\tlet dragStartX = null;\n\tlet dragStartY = null;\n\tlet dragSelectionBox = null;\n\tlet areaDragListeners = null;\n\n\tfunction enableAreaSelection() {\n\t\t// Skip if BrowserEditorContent already handles area screenshots\n\t\tif (areaScreenshotAlreadyInjected) {\n\t\t\treturn;\n\t\t}\n\n\t\tconst mousedownListener = (e) => {\n\t\t\tif (!e.isTrusted) return;\n\t\t\t// Only start drag if not clicking on any overlay elements\n\t\t\tif (e.target.getAttribute &&\n\t\t\t\te.target.getAttribute('data-cursor-overlay') === 'true'\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\te.preventDefault();\n\t\t\te.stopPropagation();\n\n\t\t\tisDragging = true;\n\t\t\tdragStartX = e.clientX;\n\t\t\tdragStartY = e.clientY;\n\n\t\t\t// Hide any existing overlays\n\t\t\tconst overlays = document.querySelectorAll('[data-cursor-overlay="true"]');\n\t\t\toverlays.forEach(el => el.style.display = 'none');\n\n\t\t\tif (!dragSelectionBox) {\n\t\t\t\tdragSelectionBox = document.createElement('div');\n\t\t\t\tdragSelectionBox.style.cssText = 'position:fixed;background:rgba(58,150,221,0.1);border:2px dashed #3a96dd;pointer-events:none;z-index:2147483647;';\n\t\t\t\tdocument.body.appendChild(dragSelectionBox);\n\t\t\t}\n\t\t\tdragSelectionBox.style.left = dragStartX + 'px';\n\t\t\tdragSelectionBox.style.top = dragStartY + 'px';\n\t\t\tdragSelectionBox.style.width = '0px';\n\t\t\tdragSelectionBox.style.height = '0px';\n\t\t};\n\n\t\tconst mousemoveListener = (e) => {\n\t\t\tif (!isDragging || !dragSelectionBox) return;\n\n\t\t\tconst currentX = e.clientX;\n\t\t\tconst currentY = e.clientY;\n\n\t\t\tconst left = Math.min(dragStartX, currentX);\n\t\t\tconst top = Math.min(dragStartY, currentY);\n\t\t\tconst width = Math.abs(currentX - dragStartX);\n\t\t\tconst height = Math.abs(currentY - dragStartY);\n\n\t\t\tdragSelectionBox.style.left = left + 'px';\n\t\t\tdragSelectionBox.style.top = top + 'px';\n\t\t\tdragSelectionBox.style.width = width + 'px';\n\t\t\tdragSelectionBox.style.height = height + 'px';\n\t\t};\n\n\t\tconst mouseupListener = (e) => {\n\t\t\tif (!isDragging || !e.isTrusted) return;\n\t\t\te.preventDefault();\n\t\t\te.stopPropagation();\n\n\t\t\tconst currentX = e.clientX;\n\t\t\tconst currentY = e.clientY;\n\n\t\t\tconst left = Math.min(dragStartX, currentX);\n\t\t\tconst top = Math.min(dragStartY, currentY);\n\t\t\tconst width = Math.abs(currentX - dragStartX);\n\t\t\tconst height = Math.abs(currentY - dragStartY);\n\n\t\t\tif (width > 5 || height > 5) {\n\t\t\t\tconst bounds = {\n\t\t\t\t\tx: Math.round(left),\n\t\t\t\t\ty: Math.round(top),\n\t\t\t\t\twidth: Math.round(width),\n\t\t\t\t\theight: Math.round(height)\n\t\t\t\t};\n\n\t\t\t\tif (dragSelectionBox) {\n\t\t\t\t\tdragSelectionBox.remove();\n\t\t\t\t\tdragSelectionBox = null;\n\t\t\t\t}\n\n\t\t\t\tdisableAreaSelection();\n\n\t\t\t\t// Send area screenshot selection\n\t\t\t\trequestAnimationFrame(() => {\n\t\t\t\t\trequestAnimationFrame(() => {\n\t\t\t\t\t\tif (window.cursorBrowser) {\n\t\t\t\t\t\t\twindow.cursorBrowser.send('area-screenshot-selected', {\n\t\t\t\t\t\t\t\tbounds: bounds\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Area selection is complete, element selection will continue to work\n\t\t\t\t\t\t// No need to re-enable as the overlay system maintains its own state\n\t\t\t\t\t});\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tif (dragSelectionBox) {\n\t\t\t\t\tdragSelectionBox.remove();\n\t\t\t\t\tdragSelectionBox = null;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tisDragging = false;\n\t\t};\n\n\t\tdocument.addEventListener('mousedown', mousedownListener, true);\n\t\tdocument.addEventListener('mousemove', mousemoveListener);\n\t\tdocument.addEventListener('mouseup', mouseupListener, true);\n\n\t\tareaDragListeners = {\n\t\t\tmousedown: mousedownListener,\n\t\t\tmousemove: mousemoveListener,\n\t\t\tmouseup: mouseupListener\n\t\t};\n\t}\n\n\tfunction disableAreaSelection() {\n\t\t// Skip if BrowserEditorContent already handles area screenshots\n\t\tif (areaScreenshotAlreadyInjected) {\n\t\t\treturn;\n\t\t}\n\n\t\tisDragging = false;\n\t\tdragStartX = null;\n\t\tdragStartY = null;\n\n\t\tif (dragSelectionBox) {\n\t\t\tdragSelectionBox.remove();\n\t\t\tdragSelectionBox = null;\n\t\t}\n\n\t\tif (areaDragListeners) {\n\t\t\tconst { mousedown, mousemove, mouseup } = areaDragListeners;\n\t\t\tdocument.removeEventListener('mousedown', mousedown, true);\n\t\t\tdocument.removeEventListener('mousemove', mousemove);\n\t\t\tdocument.removeEventListener('mouseup', mouseup, true);\n\t\t\tareaDragListeners = null;\n\t\t}\n\t}\n\n\t// =============================================================================\n\t// Message Handling\n\t// =============================================================================\n\n\tfunction onAreaScreenshotCommand(data) {\n\t\tif (!data || !data.type) {\n\t\t\treturn;\n\t\t}\n\t\tif (data.type === 'enable-element-selection') {\n\t\t\tif (data.enableAreaSelection) {\n\t\t\t\tenableAreaSelection();\n\t\t\t}\n\t\t} else if (data.type === 'disable-element-selection') {\n\t\t\tdisableAreaSelection();\n\t\t} else if (data.type === 'start-area-screenshot') {\n\t\t\tenableAreaSelection();\n\t\t} else if (data.type === 'stop-area-screenshot') {\n\t\t\tdisableAreaSelection();\n\t\t}\n\t}\n\tif (typeof window.__cursorAreaScreenshotCommand !== 'function') {\n\t\twindow.__cursorAreaScreenshotCommand = onAreaScreenshotCommand;\n\t}\n\n\t// =============================================================================\n\t// Keyboard Shortcuts\n\t// =============================================================================\n\n\tdocument.addEventListener('keydown', (e) => {\n\t\tconst isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;\n\t\tconst cmdOrCtrl = isMac ? e.metaKey : e.ctrlKey;\n\n\t\tif (cmdOrCtrl && !e.altKey) {\n\t\t\tif (e.key === 'a' && !e.shiftKey) {\n\t\t\t\te.preventDefault();\n\t\t\t\te.stopPropagation();\n\n\t\t\t\tconst target = e.target;\n\t\t\t\tif (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) {\n\t\t\t\t\ttarget.select();\n\t\t\t\t} else if (target instanceof HTMLElement && target.isContentEditable) {\n\t\t\t\t\tconst selection = window.getSelection();\n\t\t\t\t\tconst range = document.createRange();\n\t\t\t\t\trange.selectNodeContents(target);\n\t\t\t\t\tselection?.removeAllRanges();\n\t\t\t\t\tselection?.addRange(range);\n\t\t\t\t} else {\n\t\t\t\t\tdocument.execCommand('selectAll');\n\t\t\t\t}\n\t\t\t\treturn;\n\t\t\t}\n\t\t}\n\t}, true);\n\n})();\n`);
      (await s.commands.executeCommand("cursor.browserView.executeJavaScriptInIsolatedWorld", e),
        a.info("Browser UI script injected successfully"));
    } catch (t) {
      a.error("Failed to inject browser UI script:", t);
    }
    var t;
  }
  async function Ot(t) {
    (a.init(),
      a.info("Cursor Browser Automation extension activated"),
      a.info("Using Browser MCP provider"));
    const e = new $t();
    (await e.initialize(t.globalStorageUri.fsPath),
      (Pt = e),
      (Nt = new At({ getProvider: () => Pt })),
      t.subscriptions.push(
        new s.Disposable(() => {
          (Nt?.dispose(), (Nt = void 0));
        }),
      ));
    const n = s.cursor.registerMcpProvider(Pt);
    (t.subscriptions.push(n),
      Nt.requestPush("activation"),
      t.subscriptions.push(
        s.window.onDidChangeActiveColorTheme(() => {
          Nt?.requestPush("theme_change");
        }),
      ));
    const r = s.commands.registerCommand(_t, () => {
      Nt?.requestPush("watchdog_backfill");
    });
    t.subscriptions.push(r);
    const o = s.commands.registerCommand("cursor.browserAutomation.reinjectUIScript", Mt);
    (t.subscriptions.push(o), Mt().catch(() => {}));
  }
  async function Lt() {
    (Nt?.dispose(), (Nt = void 0), Pt && (await Pt.dispose(), (Pt = void 0)));
  }
  var Bt = exports;
  for (var Ft in o) Bt[Ft] = o[Ft];
  o.__esModule && Object.defineProperty(Bt, "__esModule", { value: !0 });
})();
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-browser-automation/dist/extension.js.map
