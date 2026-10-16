import { bP, cJ, hi, yP, ye } from "./html_2.js";
import { i } from "./plugin-brand-icon.js";
function Oar(r) {
    const e = r.tagID;
    return e === ye.FONT && r.attrs.some(({ name: s })=>s === bP.COLOR || s === bP.SIZE || s === bP.FACE) || Kar.has(e);
}
function QNt(r) {
    for(let e = 0; e < r.attrs.length; e++)if (r.attrs[e].name === Gar) {
        r.attrs[e].name = War;
        break;
    }
}
function eMt(r) {
    for(let e = 0; e < r.attrs.length; e++){
        const a = Har.get(r.attrs[e].name);
        a != null && (r.attrs[e].name = a);
    }
}
function PNe(r) {
    for(let e = 0; e < r.attrs.length; e++){
        const a = Zar.get(r.attrs[e].name);
        a && (r.attrs[e].prefix = a.prefix, r.attrs[e].name = a.name, r.attrs[e].namespace = a.namespace);
    }
}
function zar(r) {
    const e = Var.get(r.tagName);
    e != null && (r.tagName = e, r.tagID = cJ(r.tagName));
}
function Bar(r, e) {
    return e === hi.MATHML && (r === ye.MI || r === ye.MO || r === ye.MN || r === ye.MS || r === ye.MTEXT);
}
function qar(r, e, a) {
    if (e === hi.MATHML && r === ye.ANNOTATION_XML) {
        for(let s = 0; s < a.length; s++)if (a[s].name === bP.ENCODING) {
            const l = a[s].value.toLowerCase();
            return l === tMt.TEXT_HTML || l === tMt.APPLICATION_XML;
        }
    }
    return e === hi.SVG && (r === ye.FOREIGN_OBJECT || r === ye.DESC || r === ye.TITLE);
}
function Uar(r, e, a, s) {
    return (!s || s === hi.HTML) && qar(r, e, a) || (!s || s === hi.MATHML) && Bar(r, e);
}
var tMt, Gar, War, Har, Zar, Var, Kar;
export { Bar, Gar, Har, Kar, Oar, PNe, QNt, Uar, Var, War, Zar, eMt, qar, tMt, zar };
var __wakaru_Xar_initialized = false;
export function Xar() {
if (__wakaru_Xar_initialized) return;
__wakaru_Xar_initialized = true;
yP(), tMt = {
    TEXT_HTML: "text/html",
    APPLICATION_XML: "application/xhtml+xml"
}, Gar = "definitionurl", War = "definitionURL", Har = new Map([
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map((r)=>[
        r.toLowerCase(),
        r
    ])), Zar = new Map([
    [
        "xlink:actuate",
        {
            prefix: "xlink",
            name: "actuate",
            namespace: hi.XLINK
        }
    ],
    [
        "xlink:arcrole",
        {
            prefix: "xlink",
            name: "arcrole",
            namespace: hi.XLINK
        }
    ],
    [
        "xlink:href",
        {
            prefix: "xlink",
            name: "href",
            namespace: hi.XLINK
        }
    ],
    [
        "xlink:role",
        {
            prefix: "xlink",
            name: "role",
            namespace: hi.XLINK
        }
    ],
    [
        "xlink:show",
        {
            prefix: "xlink",
            name: "show",
            namespace: hi.XLINK
        }
    ],
    [
        "xlink:title",
        {
            prefix: "xlink",
            name: "title",
            namespace: hi.XLINK
        }
    ],
    [
        "xlink:type",
        {
            prefix: "xlink",
            name: "type",
            namespace: hi.XLINK
        }
    ],
    [
        "xml:lang",
        {
            prefix: "xml",
            name: "lang",
            namespace: hi.XML
        }
    ],
    [
        "xml:space",
        {
            prefix: "xml",
            name: "space",
            namespace: hi.XML
        }
    ],
    [
        "xmlns",
        {
            prefix: "",
            name: "xmlns",
            namespace: hi.XMLNS
        }
    ],
    [
        "xmlns:xlink",
        {
            prefix: "xmlns",
            name: "xlink",
            namespace: hi.XMLNS
        }
    ]
]), Var = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map((r)=>[
        r.toLowerCase(),
        r
    ])), Kar = new Set([
    ye.B,
    ye.BIG,
    ye.BLOCKQUOTE,
    ye.BODY,
    ye.BR,
    ye.CENTER,
    ye.CODE,
    ye.DD,
    ye.DIV,
    ye.DL,
    ye.DT,
    ye.EM,
    ye.EMBED,
    ye.H1,
    ye.H2,
    ye.H3,
    ye.H4,
    ye.H5,
    ye.H6,
    ye.HEAD,
    ye.HR,
    ye.I,
    ye.IMG,
    ye.LI,
    ye.LISTING,
    ye.MENU,
    ye.META,
    ye.NOBR,
    ye.OL,
    ye.P,
    ye.PRE,
    ye.RUBY,
    ye.S,
    ye.SMALL,
    ye.SPAN,
    ye.STRONG,
    ye.STRIKE,
    ye.SUB,
    ye.SUP,
    ye.TABLE,
    ye.TT,
    ye.U,
    ye.UL,
    ye.VAR
]), i(Oar, "causesExit"), i(QNt, "adjustTokenMathMLAttrs"), i(eMt, "adjustTokenSVGAttrs"), i(PNe, "adjustTokenXMLAttrs"), i(zar, "adjustTokenSVGTagName"), i(Bar, "isMathMLTextIntegrationPoint"), i(qar, "isHtmlIntegrationPoint"), i(Uar, "isIntegrationPoint");

}
