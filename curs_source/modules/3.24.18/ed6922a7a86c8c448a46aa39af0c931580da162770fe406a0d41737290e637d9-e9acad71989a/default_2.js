import { Hfe, l9e } from "./html_2.js";
import { x } from "./tslib.es6.js";
var u9e;
export { u9e };
var __wakaru_Ifs_initialized = false;
export function Ifs() {
if (__wakaru_Ifs_initialized) return;
__wakaru_Ifs_initialized = true;
x(), l9e(), u9e = {
    createDocument () {
        return {
            nodeName: "#document",
            mode: Hfe.NO_QUIRKS,
            childNodes: []
        };
    },
    createDocumentFragment () {
        return {
            nodeName: "#document-fragment",
            childNodes: []
        };
    },
    createElement (e, t, n) {
        return {
            nodeName: e,
            tagName: e,
            attrs: n,
            namespaceURI: t,
            childNodes: [],
            parentNode: null
        };
    },
    createCommentNode (e) {
        return {
            nodeName: "#comment",
            data: e,
            parentNode: null
        };
    },
    createTextNode (e) {
        return {
            nodeName: "#text",
            value: e,
            parentNode: null
        };
    },
    appendChild (e, t) {
        e.childNodes.push(t), t.parentNode = e;
    },
    insertBefore (e, t, n) {
        const i = e.childNodes.indexOf(n);
        e.childNodes.splice(i, 0, t), t.parentNode = e;
    },
    setTemplateContent (e, t) {
        e.content = t;
    },
    getTemplateContent (e) {
        return e.content;
    },
    setDocumentType (e, t, n, i) {
        const r = e.childNodes.find((s)=>s.nodeName === "#documentType");
        if (r) r.name = t, r.publicId = n, r.systemId = i;
        else {
            const s = {
                nodeName: "#documentType",
                name: t,
                publicId: n,
                systemId: i,
                parentNode: null
            };
            u9e.appendChild(e, s);
        }
    },
    setDocumentMode (e, t) {
        e.mode = t;
    },
    getDocumentMode (e) {
        return e.mode;
    },
    detachNode (e) {
        if (e.parentNode) {
            const t = e.parentNode.childNodes.indexOf(e);
            e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
        }
    },
    insertText (e, t) {
        if (e.childNodes.length > 0) {
            const n = e.childNodes[e.childNodes.length - 1];
            if (u9e.isTextNode(n)) {
                n.value += t;
                return;
            }
        }
        u9e.appendChild(e, u9e.createTextNode(t));
    },
    insertTextBefore (e, t, n) {
        const i = e.childNodes[e.childNodes.indexOf(n) - 1];
        i && u9e.isTextNode(i) ? i.value += t : u9e.insertBefore(e, u9e.createTextNode(t), n);
    },
    adoptAttributes (e, t) {
        const n = new Set(e.attrs.map((i)=>i.name));
        for(let i = 0; i < t.length; i++)n.has(t[i].name) || e.attrs.push(t[i]);
    },
    getFirstChild (e) {
        return e.childNodes[0];
    },
    getChildNodes (e) {
        return e.childNodes;
    },
    getParentNode (e) {
        return e.parentNode;
    },
    getAttrList (e) {
        return e.attrs;
    },
    getTagName (e) {
        return e.tagName;
    },
    getNamespaceURI (e) {
        return e.namespaceURI;
    },
    getTextNodeContent (e) {
        return e.value;
    },
    getCommentNodeContent (e) {
        return e.data;
    },
    getDocumentTypeNodeName (e) {
        return e.name;
    },
    getDocumentTypeNodePublicId (e) {
        return e.publicId;
    },
    getDocumentTypeNodeSystemId (e) {
        return e.systemId;
    },
    isTextNode (e) {
        return e.nodeName === "#text";
    },
    isCommentNode (e) {
        return e.nodeName === "#comment";
    },
    isDocumentTypeNode (e) {
        return e.nodeName === "#documentType";
    },
    isElementNode (e) {
        return Object.prototype.hasOwnProperty.call(e, "tagName");
    },
    setNodeSourceCodeLocation (e, t) {
        e.sourceCodeLocation = t;
    },
    getNodeSourceCodeLocation (e) {
        return e.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation (e, t) {
        e.sourceCodeLocation = {
            ...e.sourceCodeLocation,
            ...t
        };
    }
};

}
