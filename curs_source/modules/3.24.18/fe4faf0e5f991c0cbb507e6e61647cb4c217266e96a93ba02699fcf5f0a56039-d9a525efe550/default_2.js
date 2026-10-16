import { c3, yP } from "./html_2.js";
var JT;
export { JT };
var __wakaru_VNt_initialized = false;
export function VNt() {
if (__wakaru_VNt_initialized) return;
__wakaru_VNt_initialized = true;
yP(), JT = {
    createDocument () {
        return {
            nodeName: "#document",
            mode: c3.NO_QUIRKS,
            childNodes: []
        };
    },
    createDocumentFragment () {
        return {
            nodeName: "#document-fragment",
            childNodes: []
        };
    },
    createElement (r, e, a) {
        return {
            nodeName: r,
            tagName: r,
            attrs: a,
            namespaceURI: e,
            childNodes: [],
            parentNode: null
        };
    },
    createCommentNode (r) {
        return {
            nodeName: "#comment",
            data: r,
            parentNode: null
        };
    },
    createTextNode (r) {
        return {
            nodeName: "#text",
            value: r,
            parentNode: null
        };
    },
    appendChild (r, e) {
        r.childNodes.push(e), e.parentNode = r;
    },
    insertBefore (r, e, a) {
        const s = r.childNodes.indexOf(a);
        r.childNodes.splice(s, 0, e), e.parentNode = r;
    },
    setTemplateContent (r, e) {
        r.content = e;
    },
    getTemplateContent (r) {
        return r.content;
    },
    setDocumentType (r, e, a, s) {
        const l = r.childNodes.find((u)=>u.nodeName === "#documentType");
        if (l) l.name = e, l.publicId = a, l.systemId = s;
        else {
            const u = {
                nodeName: "#documentType",
                name: e,
                publicId: a,
                systemId: s,
                parentNode: null
            };
            JT.appendChild(r, u);
        }
    },
    setDocumentMode (r, e) {
        r.mode = e;
    },
    getDocumentMode (r) {
        return r.mode;
    },
    detachNode (r) {
        if (r.parentNode) {
            const e = r.parentNode.childNodes.indexOf(r);
            r.parentNode.childNodes.splice(e, 1), r.parentNode = null;
        }
    },
    insertText (r, e) {
        if (r.childNodes.length > 0) {
            const a = r.childNodes[r.childNodes.length - 1];
            if (JT.isTextNode(a)) {
                a.value += e;
                return;
            }
        }
        JT.appendChild(r, JT.createTextNode(e));
    },
    insertTextBefore (r, e, a) {
        const s = r.childNodes[r.childNodes.indexOf(a) - 1];
        s && JT.isTextNode(s) ? s.value += e : JT.insertBefore(r, JT.createTextNode(e), a);
    },
    adoptAttributes (r, e) {
        const a = new Set(r.attrs.map((s)=>s.name));
        for(let s = 0; s < e.length; s++)a.has(e[s].name) || r.attrs.push(e[s]);
    },
    getFirstChild (r) {
        return r.childNodes[0];
    },
    getChildNodes (r) {
        return r.childNodes;
    },
    getParentNode (r) {
        return r.parentNode;
    },
    getAttrList (r) {
        return r.attrs;
    },
    getTagName (r) {
        return r.tagName;
    },
    getNamespaceURI (r) {
        return r.namespaceURI;
    },
    getTextNodeContent (r) {
        return r.value;
    },
    getCommentNodeContent (r) {
        return r.data;
    },
    getDocumentTypeNodeName (r) {
        return r.name;
    },
    getDocumentTypeNodePublicId (r) {
        return r.publicId;
    },
    getDocumentTypeNodeSystemId (r) {
        return r.systemId;
    },
    isTextNode (r) {
        return r.nodeName === "#text";
    },
    isCommentNode (r) {
        return r.nodeName === "#comment";
    },
    isDocumentTypeNode (r) {
        return r.nodeName === "#documentType";
    },
    isElementNode (r) {
        return Object.prototype.hasOwnProperty.call(r, "tagName");
    },
    setNodeSourceCodeLocation (r, e) {
        r.sourceCodeLocation = e;
    },
    getNodeSourceCodeLocation (r) {
        return r.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation (r, e) {
        r.sourceCodeLocation = {
            ...r.sourceCodeLocation,
            ...e
        };
    }
};

}
