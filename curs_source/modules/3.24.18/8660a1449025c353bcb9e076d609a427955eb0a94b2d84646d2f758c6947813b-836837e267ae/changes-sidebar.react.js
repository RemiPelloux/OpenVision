import { L1C } from "./changes-sidebar.model.js";
import { kJt } from "./file-tree-row-density.js";
import { Gr_, K1C, V1C, X1C, Y1C } from "./gpc.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
import { createContext as O1C } from "./react-runtime/react/esm-index-production.js";
var ngc, qr_, zr_, Vr_, ZOs;
export { Vr_, ZOs, ngc, qr_, zr_ };
var __wakaru_Kr__initialized = false;
export function Kr_() {
if (__wakaru_Kr__initialized) return;
__wakaru_Kr__initialized = true;
"use strict";
E(), Mt(), kJt(), L1C(), ngc = O1C(null), qr_ = new Set, zr_ = {
    added: {
        label: "Added",
        icon: "diff-added"
    },
    modified: {
        label: "Modified",
        icon: "diff-modified"
    },
    deleted: {
        label: "Deleted",
        icon: "diff-removed"
    },
    renamed: {
        label: "Renamed",
        icon: "diff-renamed"
    },
    untracked: {
        label: "Untracked",
        icon: "diff-added"
    }
}, Vr_ = {
    added: "var(--cursor-icon-green-primary)",
    modified: "var(--cursor-icon-orange-primary)",
    deleted: "var(--cursor-icon-red-primary)",
    renamed: "var(--cursor-icon-cyan-primary)",
    untracked: "var(--cursor-icon-green-primary)"
}, ZOs = Object.assign(Gr_, {
    Root: Gr_,
    Summary: V1C,
    CommitButton: K1C,
    ScopeRow: Y1C,
    Tree: X1C
});

}
