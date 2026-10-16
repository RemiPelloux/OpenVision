import { GRe, _it } from "./html_2.js";
import { E } from "./tslib.es6.js";
var bit;
export { bit };
var __wakaru_Hia_initialized = false;
export function Hia() {
if (__wakaru_Hia_initialized) return;
__wakaru_Hia_initialized = true;
E(), _it(), bit = {
    createDocument () {
        return {
            nodeName: "#document",
            mode: GRe.NO_QUIRKS,
            childNodes: []
        };
    },
    createDocumentFragment () {
        return {
            nodeName: "#document-fragment",
            childNodes: []
        };
    },
    createElement (t, e, n) {
        return {
            nodeName: t,
            tagName: t,
            attrs: n,
            namespaceURI: e,
            childNodes: [],
            parentNode: null
        };
    },
    createCommentNode (t) {
        return {
            nodeName: "#comment",
            data: t,
            parentNode: null
        };
    },
    createTextNode (t) {
        return {
            nodeName: "#text",
            value: t,
            parentNode: null
        };
    },
    appendChild (t, e) {
        t.childNodes.push(e), e.parentNode = t;
    },
    insertBefore (t, e, n) {
        const i = t.childNodes.indexOf(n);
        t.childNodes.splice(i, 0, e), e.parentNode = t;
    },
    setTemplateContent (t, e) {
        t.content = e;
    },
    getTemplateContent (t) {
        return t.content;
    },
    setDocumentType (t, e, n, i) {
        const r = t.childNodes.find((s)=>s.nodeName === "#documentType");
        if (r) r.name = e, r.publicId = n, r.systemId = i;
        else {
            const s = {
                nodeName: "#documentType",
                name: e,
                publicId: n,
                systemId: i,
                parentNode: null
            };
            bit.appendChild(t, s);
        }
    },
    setDocumentMode (t, e) {
        t.mode = e;
    },
    getDocumentMode (t) {
        return t.mode;
    },
    detachNode (t) {
        if (t.parentNode) {
            const e = t.parentNode.childNodes.indexOf(t);
            t.parentNode.childNodes.splice(e, 1), t.parentNode = null;
        }
    },
    insertText (t, e) {
        if (t.childNodes.length > 0) {
            const n = t.childNodes[t.childNodes.length - 1];
            if (bit.isTextNode(n)) {
                n.value += e;
                return;
            }
        }
        bit.appendChild(t, bit.createTextNode(e));
    },
    insertTextBefore (t, e, n) {
        const i = t.childNodes[t.childNodes.indexOf(n) - 1];
        i && bit.isTextNode(i) ? i.value += e : bit.insertBefore(t, bit.createTextNode(e), n);
    },
    adoptAttributes (t, e) {
        const n = new Set(t.attrs.map((i)=>i.name));
        for(let i = 0; i < e.length; i++)n.has(e[i].name) || t.attrs.push(e[i]);
    },
    getFirstChild (t) {
        return t.childNodes[0];
    },
    getChildNodes (t) {
        return t.childNodes;
    },
    getParentNode (t) {
        return t.parentNode;
    },
    getAttrList (t) {
        return t.attrs;
    },
    getTagName (t) {
        return t.tagName;
    },
    getNamespaceURI (t) {
        return t.namespaceURI;
    },
    getTextNodeContent (t) {
        return t.value;
    },
    getCommentNodeContent (t) {
        return t.data;
    },
    getDocumentTypeNodeName (t) {
        return t.name;
    },
    getDocumentTypeNodePublicId (t) {
        return t.publicId;
    },
    getDocumentTypeNodeSystemId (t) {
        return t.systemId;
    },
    isTextNode (t) {
        return t.nodeName === "#text";
    },
    isCommentNode (t) {
        return t.nodeName === "#comment";
    },
    isDocumentTypeNode (t) {
        return t.nodeName === "#documentType";
    },
    isElementNode (t) {
        return Object.prototype.hasOwnProperty.call(t, "tagName");
    },
    setNodeSourceCodeLocation (t, e) {
        t.sourceCodeLocation = e;
    },
    getNodeSourceCodeLocation (t) {
        return t.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation (t, e) {
        t.sourceCodeLocation = {
            ...t.sourceCodeLocation,
            ...e
        };
    }
};

}
