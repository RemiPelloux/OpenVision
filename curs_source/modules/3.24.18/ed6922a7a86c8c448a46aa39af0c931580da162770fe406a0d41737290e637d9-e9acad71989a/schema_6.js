import { x } from "./tslib.es6.js";
var DYe, Wfe;
export { DYe, Wfe };
var __wakaru_qfs_initialized = false;
export function qfs() {
if (__wakaru_qfs_initialized) return;
__wakaru_qfs_initialized = true;
x(), DYe = [
    "ariaDescribedBy",
    "ariaLabel",
    "ariaLabelledBy"
], Wfe = {
    ancestors: {
        tbody: [
            "table"
        ],
        td: [
            "table"
        ],
        th: [
            "table"
        ],
        thead: [
            "table"
        ],
        tfoot: [
            "table"
        ],
        tr: [
            "table"
        ]
    },
    attributes: {
        a: [
            ...DYe,
            "dataFootnoteBackref",
            "dataFootnoteRef",
            [
                "className",
                "data-footnote-backref"
            ],
            "href"
        ],
        blockquote: [
            "cite"
        ],
        code: [
            [
                "className",
                /^language-./
            ]
        ],
        del: [
            "cite"
        ],
        div: [
            "itemScope",
            "itemType"
        ],
        dl: [
            ...DYe
        ],
        h2: [
            [
                "className",
                "sr-only"
            ]
        ],
        img: [
            ...DYe,
            "longDesc",
            "src"
        ],
        input: [
            [
                "disabled",
                !0
            ],
            [
                "type",
                "checkbox"
            ]
        ],
        ins: [
            "cite"
        ],
        li: [
            [
                "className",
                "task-list-item"
            ]
        ],
        ol: [
            ...DYe,
            [
                "className",
                "contains-task-list"
            ]
        ],
        q: [
            "cite"
        ],
        section: [
            "dataFootnotes",
            [
                "className",
                "footnotes"
            ]
        ],
        source: [
            "srcSet"
        ],
        summary: [
            ...DYe
        ],
        table: [
            ...DYe
        ],
        ul: [
            ...DYe,
            [
                "className",
                "contains-task-list"
            ]
        ],
        "*": [
            "abbr",
            "accept",
            "acceptCharset",
            "accessKey",
            "action",
            "align",
            "alt",
            "axis",
            "border",
            "cellPadding",
            "cellSpacing",
            "char",
            "charOff",
            "charSet",
            "checked",
            "clear",
            "colSpan",
            "color",
            "cols",
            "compact",
            "coords",
            "dateTime",
            "dir",
            "encType",
            "frame",
            "hSpace",
            "headers",
            "height",
            "hrefLang",
            "htmlFor",
            "id",
            "isMap",
            "itemProp",
            "label",
            "lang",
            "maxLength",
            "media",
            "method",
            "multiple",
            "name",
            "noHref",
            "noShade",
            "noWrap",
            "open",
            "prompt",
            "readOnly",
            "rev",
            "rowSpan",
            "rows",
            "rules",
            "scope",
            "selected",
            "shape",
            "size",
            "span",
            "start",
            "summary",
            "tabIndex",
            "title",
            "useMap",
            "vAlign",
            "value",
            "width"
        ]
    },
    clobber: [
        "ariaDescribedBy",
        "ariaLabelledBy",
        "id",
        "name"
    ],
    clobberPrefix: "user-content-",
    protocols: {
        cite: [
            "http",
            "https"
        ],
        href: [
            "http",
            "https",
            "irc",
            "ircs",
            "mailto",
            "xmpp"
        ],
        longDesc: [
            "http",
            "https"
        ],
        src: [
            "http",
            "https"
        ]
    },
    required: {
        input: {
            disabled: !0,
            type: "checkbox"
        }
    },
    strip: [
        "script"
    ],
    tagNames: [
        "a",
        "b",
        "blockquote",
        "br",
        "code",
        "dd",
        "del",
        "details",
        "div",
        "dl",
        "dt",
        "em",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "hr",
        "i",
        "img",
        "input",
        "ins",
        "kbd",
        "li",
        "ol",
        "p",
        "picture",
        "pre",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "section",
        "source",
        "span",
        "strike",
        "strong",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "tfoot",
        "th",
        "thead",
        "tr",
        "tt",
        "ul",
        "var"
    ]
};

}
