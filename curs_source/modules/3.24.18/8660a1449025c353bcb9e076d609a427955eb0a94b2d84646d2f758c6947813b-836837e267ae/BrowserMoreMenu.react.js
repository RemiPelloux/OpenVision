import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var kwg, wwg, Pxi, Rcs, Cwg, Twg, Ewg, Iwg;
export { Cwg, Ewg, Iwg, Pxi, Rcs, Twg, kwg, wwg };
var __wakaru_xwg_initialized = false;
export function xwg() {
if (__wakaru_xwg_initialized) return;
__wakaru_xwg_initialized = true;
"use strict";
E(), Mt(), kwg = 25, wwg = 500, Pxi = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "20px",
    height: "20px",
    padding: 0,
    background: "transparent",
    border: "1px solid var(--vscode-panel-border)",
    color: "var(--vscode-foreground)",
    cursor: "pointer",
    opacity: .7,
    fontSize: "12px",
    lineHeight: 1
}, Rcs = {
    ...Pxi,
    cursor: "not-allowed",
    opacity: .3
}, Cwg = {
    display: "flex",
    alignItems: "center",
    gap: "1px",
    color: "var(--vscode-foreground)"
}, Twg = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "36px",
    height: "20px",
    padding: "0 2px",
    fontSize: "10px",
    color: "var(--vscode-foreground)",
    borderTop: "1px solid var(--vscode-panel-border)",
    borderBottom: "1px solid var(--vscode-panel-border)",
    userSelect: "none"
}, Ewg = {
    fontSize: "12px"
}, Iwg = {
    history: {
        title: "Clear Browsing History",
        description: "This will remove all browsing history entries."
    },
    cookies: {
        title: "Clear Cookies",
        description: "This will remove all cookies. You may be signed out of websites."
    },
    cache: {
        title: "Clear Cache",
        description: "This will clear the browser cache."
    },
    certificates: {
        title: "Clear Accepted Certificates",
        description: "This will remove all manually accepted certificates."
    }
};

}
