import { E } from "./tslib.es6.js";
var bwt;
export { bwt };
var __wakaru_ngp_initialized = false;
export function ngp() {
if (__wakaru_ngp_initialized) return;
__wakaru_ngp_initialized = true;
"use strict";
E(), bwt = {
    repo: {
        order: 0,
        icon: "book",
        groupLabel: "Repos",
        kindLabel: "Git Repository",
        badgeLabel: "repo"
    },
    plan: {
        order: 1,
        icon: "file-text",
        groupLabel: "Plans",
        kindLabel: "Project Plan",
        badgeLabel: "plan"
    },
    notion: {
        order: 2,
        icon: "logo-notion",
        groupLabel: "Notion",
        kindLabel: "Notion Page",
        badgeLabel: "notion"
    },
    figma: {
        order: 3,
        icon: "logo-figma",
        groupLabel: "Figma",
        kindLabel: "Figma Design File",
        badgeLabel: "fig"
    },
    markdown: {
        order: 4,
        icon: "file-text",
        groupLabel: "Markdown",
        kindLabel: "Markdown Document",
        badgeLabel: "md"
    },
    mermaid: {
        order: 5,
        icon: "graph",
        groupLabel: "Mermaid",
        kindLabel: "Mermaid Diagram",
        badgeLabel: "mmd"
    }
};

}
