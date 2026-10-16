var zLt;
export { zLt };
var __wakaru_O0r_initialized = false;
export function O0r() {
if (__wakaru_O0r_initialized) return;
__wakaru_O0r_initialized = true;
"use strict";
zLt = {
    name: "css-variables",
    type: "dark",
    fg: "var(--shiki-foreground)",
    bg: "var(--shiki-background)",
    settings: [
        {
            scope: [
                "meta.embedded",
                "meta.template.expression"
            ],
            settings: {
                foreground: "var(--shiki-foreground)"
            }
        },
        {
            scope: [
                "comment",
                "punctuation.definition.comment"
            ],
            settings: {
                foreground: "var(--shiki-token-comment)",
                fontStyle: "italic"
            }
        },
        {
            scope: [
                "string",
                "string.quoted",
                "string.template",
                "string.other.link"
            ],
            settings: {
                foreground: "var(--shiki-token-string)"
            }
        },
        {
            scope: [
                "string.regexp"
            ],
            settings: {
                foreground: "var(--shiki-token-string-expression)"
            }
        },
        {
            scope: [
                "constant.numeric"
            ],
            settings: {
                foreground: "var(--shiki-token-constant)"
            }
        },
        {
            scope: [
                "constant.language"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "constant.character",
                "constant.character.escape"
            ],
            settings: {
                foreground: "var(--shiki-token-string-expression)"
            }
        },
        {
            scope: [
                "constant.other"
            ],
            settings: {
                foreground: "var(--shiki-token-constant)"
            }
        },
        {
            scope: [
                "variable"
            ],
            settings: {
                foreground: "var(--shiki-token-variable)"
            }
        },
        {
            scope: [
                "variable.language"
            ],
            settings: {
                foreground: "var(--shiki-token-language-variable)"
            }
        },
        {
            scope: [
                "variable.parameter"
            ],
            settings: {
                foreground: "var(--shiki-token-parameter)"
            }
        },
        {
            scope: [
                "variable.other.constant"
            ],
            settings: {
                foreground: "var(--shiki-token-constant-variable)"
            }
        },
        {
            scope: [
                "variable.other.property",
                "support.variable.property"
            ],
            settings: {
                foreground: "var(--shiki-token-property)"
            }
        },
        {
            scope: [
                "keyword",
                "keyword.control",
                "keyword.operator.new",
                "keyword.operator.expression",
                "keyword.operator.logical",
                "keyword.operator.delete",
                "storage",
                "storage.type",
                "storage.modifier"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "entity.name.function",
                "support.function"
            ],
            settings: {
                foreground: "var(--shiki-token-function)"
            }
        },
        {
            scope: [
                "entity.name.type",
                "support.type",
                "entity.name.type.class"
            ],
            settings: {
                foreground: "var(--shiki-token-type)"
            }
        },
        {
            scope: [
                "entity.name.class",
                "support.class"
            ],
            settings: {
                foreground: "var(--shiki-token-class)"
            }
        },
        {
            scope: [
                "entity.name.tag",
                "support.class.component",
                "punctuation.definition.tag"
            ],
            settings: {
                foreground: "var(--shiki-token-tag)"
            }
        },
        {
            scope: [
                "entity.other.attribute-name"
            ],
            settings: {
                foreground: "var(--shiki-token-attribute)"
            }
        },
        {
            scope: [
                "entity.name.section"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "entity.name.namespace",
                "entity.name.module",
                "entity.name.scope-resolution"
            ],
            settings: {
                foreground: "var(--shiki-token-type)"
            }
        },
        {
            scope: [
                "entity.other.inherited-class"
            ],
            settings: {
                foreground: "var(--shiki-token-class)"
            }
        },
        {
            scope: [
                "support.type.property-name",
                "meta.object-literal.key"
            ],
            settings: {
                foreground: "var(--shiki-token-property)"
            }
        },
        {
            scope: [
                "support.constant"
            ],
            settings: {
                foreground: "var(--shiki-token-constant)"
            }
        },
        {
            scope: [
                "support.variable"
            ],
            settings: {
                foreground: "var(--shiki-token-variable)"
            }
        },
        {
            scope: [
                "punctuation",
                "meta.brace",
                "meta.delimiter",
                "keyword.operator",
                "keyword.operator.assignment"
            ],
            settings: {
                foreground: "var(--shiki-token-punctuation)"
            }
        },
        {
            scope: [
                "punctuation.definition.template-expression.begin",
                "punctuation.definition.template-expression.end",
                "punctuation.section.embedded"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "markup.heading"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)",
                fontStyle: "bold"
            }
        },
        {
            scope: [
                "markup.bold"
            ],
            settings: {
                fontStyle: "bold"
            }
        },
        {
            scope: [
                "markup.italic"
            ],
            settings: {
                fontStyle: "italic"
            }
        },
        {
            scope: [
                "markup.strikethrough"
            ],
            settings: {
                fontStyle: "strikethrough"
            }
        },
        {
            scope: [
                "markup.inline.raw"
            ],
            settings: {
                foreground: "var(--shiki-token-string)"
            }
        },
        {
            scope: [
                "markup.underline.link"
            ],
            settings: {
                foreground: "var(--shiki-token-link)"
            }
        },
        {
            scope: [
                "markup.inserted"
            ],
            settings: {
                foreground: "var(--shiki-token-constant)"
            }
        },
        {
            scope: [
                "markup.deleted"
            ],
            settings: {
                foreground: "var(--shiki-token-string)"
            }
        },
        {
            scope: [
                "markup.changed"
            ],
            settings: {
                foreground: "var(--shiki-token-keyword)"
            }
        },
        {
            scope: [
                "markup.quote"
            ],
            settings: {
                foreground: "var(--shiki-token-comment)"
            }
        }
    ]
};

}
