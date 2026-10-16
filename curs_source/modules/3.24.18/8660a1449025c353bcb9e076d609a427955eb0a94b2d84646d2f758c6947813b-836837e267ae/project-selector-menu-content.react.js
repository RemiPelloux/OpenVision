import { zt } from "./LYd.js";
import { i9i } from "./cloud-catalog-list.react.js";
import { $Vl, HA, WVl, mI } from "./glass-menu-dimensions.js";
import { Mt } from "./index_197.js";
import { $Z0, RQ0, cFn, dac, f8e, fI, l8, lFn, nJ0, p7v } from "./lBv.js";
import { cl } from "./menu_2.js";
import { Joc, b3s } from "./origin-repo-unification-context.react.js";
import { Sye, U$ } from "./pending-new-project.js";
import { t3e } from "./project-selector-menu-elements.react.js";
import { PQ0 } from "./project-selector-menu-rows.react.js";
import { HZ0 } from "./project-selector-use-existing-submenu.react.js";
import { E3s, I3s } from "./short-repo-names-context.react.js";
import { E } from "./tslib.es6.js";
import { Y7v, rJ0 } from "./use-project-selector-menu-model.react.js";
import { jsx as GP } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as J7v } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsxs as j3s } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as oJ0 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as sJ0 } from "./react-runtime/react/esm-index-production.js";
var fFn, eUv;
export { eUv, fFn };
var __wakaru_tUv_initialized = false;
export function tUv() {
if (__wakaru_tUv_initialized) return;
__wakaru_tUv_initialized = true;
"use strict";
E(), Mt(), HA(), U$(), i9i(), Joc(), t3e(), HZ0(), I3s(), PQ0(), rJ0(), fFn = {
    menuSurface: {
        kaIpWk: "glass-1m7fhj7",
        $$css: !0
    },
    menuList: {
        kAzted: "glass-1us19tq",
        $$css: !0
    },
    menuLayout: {
        kzqmXN: "glass-h8yej3",
        $$css: !0
    },
    headerSearchRow: {
        k1xSpc: "glass-78zum5",
        kGNEyG: "glass-6s0dn4",
        kB7OPa: "glass-9f619",
        kZKoxP: "glass-1e94bgo",
        kVAEAm: "glass-7wzq59",
        k87sOh: "glass-13vifvy",
        kY2c9j: "glass-1vjfegm",
        kWkggS: "glass-f1vpex",
        $$css: !0
    }
}, eUv = sJ0(function(e) {
    const n = J7v(85), { addedRepoKeys: i, addedWorkspaceIds: r, allowLocalWorkspaceChanges: s, capabilities: o, cloudProjects: a, connectGithubBusy: l, extraSearchValues: c, onConnectGithub: u, onConnectSsh: d, onConnectWsl: h, onCloneRepo: p, onOpenFolder: g, onOpenWorkspace: f, onSelectPendingNewProject: _, onSelectTarget: b, pendingNewProject: y, originCloudProjectsQuery: S, recentProjects: k, recentSortTarget: C, selectedTarget: T, suggestedProjects: I, includeSingleRepoLogicalEnvironments: A, targetScope: P, topContent: M, workspaceProjectFilter: O, isOpen: N, searchValue: U, setIsOpen: j, setSearchValue: $ } = e, H = s === void 0 ? !0 : s, G = P === void 0 ? "all" : P;
    let q;
    n[0] !== i || n[1] !== r || n[2] !== H || n[3] !== o || n[4] !== a || n[5] !== l || n[6] !== c || n[7] !== A || n[8] !== N || n[9] !== p || n[10] !== u || n[11] !== d || n[12] !== h || n[13] !== g || n[14] !== f || n[15] !== _ || n[16] !== b || n[17] !== y || n[18] !== S || n[19] !== k || n[20] !== C || n[21] !== U || n[22] !== T || n[23] !== j || n[24] !== $ || n[25] !== I || n[26] !== G || n[27] !== M || n[28] !== O ? (q = {
        addedRepoKeys: i,
        addedWorkspaceIds: r,
        allowLocalWorkspaceChanges: H,
        capabilities: o,
        cloudProjects: a,
        connectGithubBusy: l,
        extraSearchValues: c,
        isOpen: N,
        onConnectGithub: u,
        onConnectSsh: d,
        onConnectWsl: h,
        onCloneRepo: p,
        onOpenFolder: g,
        onOpenWorkspace: f,
        onSelectPendingNewProject: _,
        onSelectTarget: b,
        pendingNewProject: y,
        originCloudProjectsQuery: S,
        recentProjects: k,
        recentSortTarget: C,
        searchValue: U,
        selectedTarget: T,
        setIsOpen: j,
        setSearchValue: $,
        suggestedProjects: I,
        includeSingleRepoLogicalEnvironments: A,
        targetScope: G,
        topContent: M,
        workspaceProjectFilter: O
    }, n[0] = i, n[1] = r, n[2] = H, n[3] = o, n[4] = a, n[5] = l, n[6] = c, n[7] = A, n[8] = N, n[9] = p, n[10] = u, n[11] = d, n[12] = h, n[13] = g, n[14] = f, n[15] = _, n[16] = b, n[17] = y, n[18] = S, n[19] = k, n[20] = C, n[21] = U, n[22] = T, n[23] = j, n[24] = $, n[25] = I, n[26] = G, n[27] = M, n[28] = O, n[29] = q) : q = n[29];
    const K = nJ0(q), { cloudScope: V, effectiveTargetScope: Y, localSourcesEnabled: J, githubConnect: Q, isCreatingLocalGitRepo: te, localGitRepoCreateError: ee, newProjectAvailable: re, multiRepoSelectionMode: ie, localMultiSelectEnabled: oe, multiRepoSelectedRepoKeys: se, shortRepoNames: le, hasSearchQuery: ce, effectiveMultiSelectionMode: ae, handleCloneRepositoryPrompt: de, handleConnectGitProvider: he, handleCreateLocalGitRepo: ge, handleCloudMultiSelectDone: pe, handleSelectNewProject: ve, originRepoUnificationEnabled: fe } = K, Te = J && !!(g || f || p || d || h), _e = oe, Ce = V && re, Se = V && u !== void 0, Pe = Ce || Se || Te || _e;
    let we;
    n[30] !== _e || n[31] !== l || n[32] !== ae || n[33] !== Y || n[34] !== Q || n[35] !== de || n[36] !== he || n[37] !== ge || n[38] !== ve || n[39] !== Pe || n[40] !== ce || n[41] !== Te || n[42] !== te || n[43] !== ee || n[44] !== p || n[45] !== u || n[46] !== d || n[47] !== h || n[48] !== g || n[49] !== f || n[50] !== Se || n[51] !== Ce ? (we = !ce && Pe ? j3s(l8, {
        children: [
            Ce ? GP(fI, {
                leading: GP(zt, {
                    name: "plus"
                }),
                onSelect: ve,
                children: Sye
            }) : null,
            Se ? GP(fI, {
                disabled: l,
                leading: l ? GP(zt, {
                    modifier: "spin",
                    name: "loading"
                }) : GP(zt, {
                    name: "logo-github"
                }),
                onSelect: u,
                children: "Connect GitHub"
            }) : null,
            Te && j3s($Z0, {
                blocked: ae,
                children: [
                    GP(lFn, {
                        disabled: ae,
                        label: "Use Existing...",
                        leading: GP(zt, {
                            name: "folder-open"
                        }),
                        children: "Use Existing..."
                    }),
                    j3s(cFn, {
                        "aria-label": "Use Existing",
                        maxHeight: WVl,
                        maxWidth: mI,
                        minWidth: $Vl,
                        size: "md",
                        surfaceStyle: fFn.menuSurface,
                        children: [
                            g && GP(fI, {
                                disabled: ae,
                                leading: GP(zt, {
                                    name: "folder-open"
                                }),
                                onSelect: g,
                                children: "Open Folder"
                            }),
                            f && GP(fI, {
                                disabled: ae,
                                leading: GP(zt, {
                                    name: "folders"
                                }),
                                onSelect: f,
                                children: "Add Workspace"
                            }),
                            p && GP(fI, {
                                disabled: ae,
                                leading: GP(zt, {
                                    name: "book"
                                }),
                                onSelect: de,
                                children: "Clone Repository"
                            }),
                            d && GP(fI, {
                                disabled: ae,
                                leading: GP(zt, {
                                    name: "terminal-rectangle"
                                }),
                                onSelect: ()=>d(),
                                children: "Connect via SSH"
                            }),
                            h && GP(fI, {
                                disabled: ae,
                                leading: GP(zt, {
                                    name: "server"
                                }),
                                onSelect: h,
                                children: "WSL"
                            }),
                            Y === "all" ? GP(l8, {
                                title: "Connect",
                                children: Y7v.map((Ve)=>GP(fI, {
                                        disabled: ae,
                                        leading: GP(zt, {
                                            name: Ve.icon
                                        }),
                                        onSelect: Ve.id === "github" ? ()=>void Q.connect() : he,
                                        trailing: GP(zt, {
                                            color: "tertiary",
                                            name: "arrow-right-up"
                                        }),
                                        children: Ve.label
                                    }, Ve.id))
                            }) : null
                        ]
                    })
                ]
            }),
            _e ? j3s(oJ0, {
                children: [
                    GP(fI, {
                        closeOnSelect: !1,
                        disabled: te,
                        leading: te ? GP(zt, {
                            modifier: "spin",
                            name: "loading"
                        }) : GP(zt, {
                            name: "folder-plus"
                        }),
                        onSelect: ()=>{
                            ge();
                        },
                        children: "New Folder"
                    }),
                    ee !== void 0 ? GP(f8e, {
                        children: ee
                    }) : null
                ]
            }) : null
        ]
    }) : void 0, n[30] = _e, n[31] = l, n[32] = ae, n[33] = Y, n[34] = Q, n[35] = de, n[36] = he, n[37] = ge, n[38] = ve, n[39] = Pe, n[40] = ce, n[41] = Te, n[42] = te, n[43] = ee, n[44] = p, n[45] = u, n[46] = d, n[47] = h, n[48] = g, n[49] = f, n[50] = Se, n[51] = Ce, n[52] = we) : we = n[52];
    const Ie = we;
    let Me;
    n[53] !== V || n[54] !== pe || n[55] !== se || n[56] !== ie ? (Me = V && ie && se.size > 0 ? GP("div", {
        className: "glass-78zum5 glass-13a6bvl glass-13ly8rp glass-1yxiud8 glass-1xlntvz glass-yab65l",
        children: GP(p7v, {
            onDone: pe
        })
    }) : void 0, n[53] = V, n[54] = pe, n[55] = se, n[56] = ie, n[57] = Me) : Me = n[57];
    const De = Me, Ne = V ? "Select a repository" : Y === "workspace" ? "Select a workspace" : "Select a project", be = De ?? Ie, je = V ? "Search remote repos, cloud environments..." : Y === "workspace" ? "Search workspaces..." : "Search repos, cloud environments...";
    let $e;
    n[58] !== je ? ($e = GP(dac, {
        placeholder: je,
        rootStyle: fFn.headerSearchRow
    }), n[58] = je, n[59] = $e) : $e = n[59];
    let Je;
    n[60] !== i || n[61] !== r || n[62] !== Y || n[63] !== A || n[64] !== K || n[65] !== p || n[66] !== d || n[67] !== g || n[68] !== y || n[69] !== M ? (Je = GP(RQ0, {
        addedRepoKeys: i,
        addedWorkspaceIds: r,
        includeSingleRepoLogicalEnvironments: A,
        model: K,
        onCloneRepo: p,
        onConnectSsh: d,
        onOpenFolder: g,
        pendingNewProject: y,
        targetScope: Y,
        topContent: M
    }), n[60] = i, n[61] = r, n[62] = Y, n[63] = A, n[64] = K, n[65] = p, n[66] = d, n[67] = g, n[68] = y, n[69] = M, n[70] = Je) : Je = n[70];
    let Ge;
    n[71] !== Je || n[72] !== Ne || n[73] !== be || n[74] !== $e ? (Ge = GP(cl.Content, {
        "aria-label": Ne,
        footer: be,
        header: $e,
        layoutStyle: fFn.menuLayout,
        listStyle: fFn.menuList,
        maxHeight: WVl,
        maxWidth: mI,
        minWidth: $Vl,
        size: "md",
        surfaceStyle: fFn.menuSurface,
        children: Je
    }), n[71] = Je, n[72] = Ne, n[73] = be, n[74] = $e, n[75] = Ge) : Ge = n[75];
    const xe = Ge;
    let Oe;
    n[76] !== U || n[77] !== le ? (Oe = U.trim().length > 0 ? void 0 : le, n[76] = U, n[77] = le, n[78] = Oe) : Oe = n[78];
    let ct;
    n[79] !== xe || n[80] !== Oe ? (ct = GP(E3s.Provider, {
        value: Oe,
        children: xe
    }), n[79] = xe, n[80] = Oe, n[81] = ct) : ct = n[81];
    let Ye;
    return n[82] !== fe || n[83] !== ct ? (Ye = GP(b3s.Provider, {
        value: fe,
        children: ct
    }), n[82] = fe, n[83] = ct, n[84] = Ye) : Ye = n[84], Ye;
});

}
