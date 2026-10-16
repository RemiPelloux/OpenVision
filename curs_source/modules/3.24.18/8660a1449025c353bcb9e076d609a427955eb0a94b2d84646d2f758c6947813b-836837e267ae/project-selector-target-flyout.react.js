import { SOi, d6w, hce, i6w, uzf, xUl, yAt } from "./BA.js";
import { An, ao, zt } from "./LYd.js";
import { BAl, GYt, RG, bl, d_s, dgf, et, ixt, m_s, xYt } from "./Ycg.js";
import { N3s } from "./any-repo-pool-repositories.js";
import { g7v, i9i } from "./cloud-catalog-list.react.js";
import { Lk, Nw } from "./cloudEnvironmentTemplateService.js";
import { HA } from "./glass-menu-dimensions.js";
import { Mt } from "./index_197.js";
import { D8v, E7v, JZ0, MYe, Rac, _3s, cQ0, dac, f3s, f8e, fI, gX0, h7v, iQ0, l8, m7v, nQ0, oFn, oQ0, p7v, pac, r9i, rQ0, sQ0, v7v, xac, y7v } from "./lBv.js";
import { cl } from "./menu_2.js";
import { bF } from "./multi-repo-cloud-targets.js";
import { nut } from "./origin-cloud-projects.js";
import { b7v } from "./project-selector-edit-button.react.js";
import { aQ0 } from "./project-selector-flyout-catalog.js";
import { eQ0 } from "./project-selector-local-multi-select.react.js";
import { t3e } from "./project-selector-menu-elements.react.js";
import { F2t } from "./project-selector-menu-items.react.js";
import { WT } from "./project-selector-utils.js";
import { dQ0 } from "./project-selector-workspace-name-input.react.js";
import { E3s, I3s } from "./short-repo-names-context.react.js";
import { uFn } from "./short-repo-names.js";
import { E } from "./tslib.es6.js";
import { C7v } from "./use-cloud-git-repo-search.react.js";
import { q4i } from "./use-cloud-logical-environments.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { aFn } from "./use-origin-cloud-projects.react.js";
import { XZt } from "./use-preferred-repo-source.react.js";
import { In } from "./use-service.react_2.js";
import { AYt } from "./use-user-home-path.react.js";
import { GJt } from "./use-workspace-metadata.react.js";
import { Fragment as Mac } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as hQ0 } from "./react-runtime/react/esm-index-production.js";
import { jsxs as j2t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useId as pQ0 } from "./react-runtime/react/esm-index-production.js";
import { jsx as tx } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useMemo as v8e } from "./react-runtime/react/esm-index-production.js";
var F3s, A7v, R7v;
export { A7v, F3s, R7v };
var __wakaru_vQ0_initialized = false;
export function vQ0() {
if (__wakaru_vQ0_initialized) return;
__wakaru_vQ0_initialized = true;
"use strict";
E(), Mt(), Nw(), XZt(), HA(), C7v(), q4i(), Ru(), aFn(), nut(), In(), AYt(), GJt(), N3s(), i9i(), eQ0(), bF(), b7v(), aQ0(), t3e(), F2t(), WT(), dQ0(), I3s(), uFn(), F3s = {
    submenuSurface: {
        kaIpWk: "glass-1m7fhj7",
        $$css: !0
    },
    submenuSearchRow: {
        k1xSpc: "glass-78zum5",
        kGNEyG: "glass-6s0dn4",
        kB7OPa: "glass-9f619",
        kVAEAm: "glass-1n2onr6",
        k87sOh: "glass-13vifvy",
        kY2c9j: "glass-1vjfegm",
        kZKoxP: "glass-t7dq6l",
        kLKAdn: "glass-13ly8rp",
        kpe85a: "glass-1yxiud8",
        kGO01o: "glass-1rgtt3y",
        kE3dHu: "glass-yab65l",
        kWkggS: "glass-f1vpex",
        k5JduY: "glass-1s928wv",
        kwXMNM: "glass-1j6awrg",
        kLxBhq: "glass-t16qzi",
        k8Iv0R: "glass-1xrz1ek",
        kH8cDV: "glass-kuk3n6",
        k4zj60: "glass-cock1l",
        ks3ayO: "glass-dpb96d",
        kloYau: "glass-2q1x1w",
        $$css: !0
    },
    submenuToggleRow: {
        kVAEAm: "glass-1n2onr6",
        keoZOQ: "glass-1k5org8",
        k1K539: "glass-1vnbkiq",
        k5JduY: "glass-1s928wv",
        kwXMNM: "glass-1j6awrg",
        kLxBhq: "glass-t16qzi",
        k8Iv0R: "glass-j1y78o",
        kH8cDV: "glass-kuk3n6",
        k4zj60: "glass-cock1l",
        ks3ayO: "glass-dpb96d",
        kloYau: "glass-2q1x1w",
        $$css: !0
    }
}, A7v = [], R7v = hQ0(function({ anyRepoPool: e = !1, repositoryPoolName: n, addedRepoKeys: i, addedWorkspaceIds: r, catalogPending: s, searchFirstRepoPicker: o, originReposSearchOnly: a, createFolderError: l, createFolderPending: c, environmentsLoading: u, inCloudMultiSelect: d, inLocalMultiSelect: h, inMultiSelect: p, localCanCreate: g, localCreateError: f, localFallbackWorkspaceName: _, localMultiSelectableIds: b, localMultiSelectedIds: y, localWorkspaceName: S, logicalEnvironments: k, onCloudMultiSelectDone: C, onConnectSsh: T, onCreateFolder: I, onCreateLocalWorkspace: A, onEditMultiRootWorkspace: P, onLocalSelectMultipleMode: M, onLocalSelectSingleMode: O, onLocalWorkspaceNameChange: N, onOpenFolder: U, onSelectMultipleMode: j, onSelectSingleMode: $, onSelectTarget: H, onToggleCloudProject: G, onToggleLocalProject: q, maxMultiRepoSelectionCount: K, selectedCloudRepoKeys: V, selectedTarget: Y, supportsLocalMultiSelect: J, supportsMultiSelect: Q, target: te, searchValue: ee }) {
    const re = BAl(), ie = pQ0(), oe = xYt(), se = _3s(), le = ee.trim(), ce = et(Lk), ae = te.type === "cloud" && n === void 0, de = ae && o, { environments: he, isSearching: ge } = f3s({
        cloudEnvService: ce,
        searchQuery: ae ? le : void 0
    }), { hits: pe, isSearching: ve, catalogIncomplete: fe } = y7v({
        cloudEnvService: ce,
        searchQuery: de ? le : void 0
    }), Te = fe || a, { data: _e, isSettled: Ce } = oFn({
        enabled: de && le.length > 0,
        search: le
    }), Se = de && le.length > 0 && !Ce, Pe = ge || ve || Se, we = bl("cloud_agent_origin_repos"), { preferredRepoSource: Ie } = SOi(), { flyoutProjects: Me, searchHitTemplates: De } = v8e(()=>{
        const bt = te.projects.flatMap((Pt)=>Pt.type === "cloud" ? [
                Pt.template
            ] : []), { listed: St, appended: Et } = i6w({
            listedProjects: bt,
            providerHits: pe,
            originHits: de && le.length > 0 ? _e : [],
            originReposEnabled: we,
            preferredRepoSource: Ie
        });
        if (Et.length === 0 && St.every((Pt, Dt)=>Pt === bt[Dt])) return {
            flyoutProjects: te.projects,
            searchHitTemplates: Et
        };
        let kt = 0;
        return {
            flyoutProjects: [
                ...te.projects.flatMap((Pt)=>{
                    if (Pt.type !== "cloud") return [
                        Pt
                    ];
                    const Dt = St[kt++];
                    return Dt === void 0 ? [] : [
                        Dt === Pt.template ? Pt : {
                            type: "cloud",
                            template: Dt
                        }
                    ];
                }),
                ...Et.map((Pt)=>({
                        type: "cloud",
                        template: Pt
                    }))
            ],
            searchHitTemplates: Et
        };
    }, [
        de,
        we,
        Ie,
        le,
        pe,
        _e,
        te.projects
    ]), Ne = pac(), be = v8e(()=>De.length === 0 ? Ne : gX0(Ne, Me.flatMap((bt)=>bt.type === "cloud" ? [
                bt.template
            ] : [])), [
        Me,
        Ne,
        De
    ]), je = v8e(()=>sQ0({
            logicalEnvironments: k,
            searchedEnvironments: he,
            query: le
        }), [
        k,
        le,
        he
    ]), $e = v8e(()=>Me.flatMap((bt)=>bt.type === "cloud" ? [
                bt.template
            ] : []), [
        Me
    ]), Je = v8e(()=>yAt($e), [
        $e
    ]), Ge = v8e(()=>d ? Je.filter((bt)=>V.has(hce(bt))) : [], [
        d,
        V,
        Je
    ]), xe = v8e(()=>rQ0({
            ...te,
            projects: Me
        }, n), [
        Me,
        n,
        te
    ]), Oe = v8e(()=>n !== void 0 && Rac(Y) === n ? xUl(Y) : void 0, [
        n,
        Y
    ]), ct = xe.length > 0, Ye = v8e(()=>xe.filter((bt)=>oQ0(bt, le, oe, se)), [
        xe,
        se,
        le,
        oe
    ]), Ve = v8e(()=>{
        if (le.length === 0) return je;
        const bt = le.toLowerCase();
        return je.filter((St)=>uzf({
                environment: St,
                normalizedSearch: bt
            }));
    }, [
        je,
        le
    ]), Xe = de && le.length === 0 && !d, lt = v8e(()=>Xe ? d6w(Ve, Ye) : {
            environments: Ve,
            projects: Ye,
            capped: !1
        }, [
        Xe,
        Ve,
        Ye
    ]), He = n === void 0 && (u || Pe) && Ve.length === 0, gt = s && Ye.length === 0, ht = d ? 0 : je.length, Ae = d ? 0 : Ve.length, ot = ct || ht > 0 || He || gt || de && Te, Be = le.length > 0 && !He && !gt && Ye.length === 0 && Ae === 0, Ue = (Q || J) && (p || s || Ye.length >= 2), it = ot ? j2t(Mac, {
        children: [
            n !== void 0 ? gt ? tx(cl.LoadingState, {
                children: "Loading repositories\u2026"
            }) : null : d ? null : tx(h7v, {
                environmentsLoading: u || Pe,
                ignoreSearch: !0,
                loadingLabel: Pe ? "Loading environments\u2026" : "Loading repos\u2026",
                logicalEnvironments: lt.environments,
                onSelectTarget: H,
                selectedTarget: Y
            }),
            lt.projects.map((bt)=>{
                if (bt.type === "workspace") {
                    if (h) return tx(E7v, {
                        localMultiSelectableIds: b,
                        localMultiSelectedIds: y,
                        onSelectTarget: H,
                        onToggleLocalProject: q,
                        project: bt.project
                    }, bt.project.id);
                    const St = r?.has(bt.project.workspaceIdentifier.id) ?? !1;
                    return tx(MYe, {
                        disabled: St,
                        folderTitle: "truncated-path",
                        hideLocationHost: !0,
                        icon: m_s(bt.project),
                        ignoreSearch: !0,
                        isSelected: ixt(bt.project, Y),
                        onSelectTarget: H,
                        project: bt.project,
                        rightAccessory: re(bt.project) && P ? tx(v7v, {
                            ariaLabel: `Edit ${bt.project.name}`,
                            onEdit: ()=>{
                                P(bt.project);
                            }
                        }) : void 0,
                        tooltip: St ? tx(ao, {
                            title: "Already added"
                        }) : void 0
                    }, bt.project.id);
                }
                return tx(xac, {
                    addedRepoKeys: i,
                    icon: "folder",
                    ignoreSearch: !0,
                    inCloudMultiSelect: d,
                    isSelected: Oe?.has(hce(bt.template)),
                    onSelectOverride: n === void 0 ? void 0 : ()=>H(e || r9i(Y) === n ? dgf({
                            poolName: n,
                            repoUrl: RG(bt.template),
                            cloudProjects: [
                                bt.template
                            ]
                        }) : d_s({
                            poolName: n,
                            repoUrl: RG(bt.template),
                            cloudProjects: [
                                bt.template
                            ]
                        })),
                    onSelectTarget: H,
                    onToggleCloudProject: G,
                    repoTitleOnly: !0,
                    maxMultiRepoSelectionCount: K,
                    selectedCloudRepoKeys: V,
                    selectedTarget: Y,
                    template: bt.template
                }, GYt(bt.template));
            })
        ]
    }) : tx(f8e, {
        children: n !== void 0 ? "No repositories" : te.type === "cloud" ? "No repos" : "No projects"
    }), qe = Be && te.type === "local" && te.id === "local" && I !== void 0 && iQ0(le), pt = l !== void 0 && l.name === le ? l.message : void 0, dt = qe ? j2t(Mac, {
        children: [
            tx(fI, {
                closeOnSelect: !1,
                disabled: c,
                ignoreSearch: !0,
                label: `Create New "${le}" Folder`,
                leading: c ? tx(zt, {
                    modifier: "spin",
                    name: "loading"
                }) : tx(zt, {
                    name: "folder-plus"
                }),
                onSelect: ()=>I(le),
                children: tx(cl.TextItem, {
                    inline: !0,
                    title: `Create New "${le}" Folder`
                })
            }),
            pt !== void 0 ? tx(f8e, {
                children: pt
            }) : null
        ]
    }) : tx(f8e, {
        children: "No results found"
    }), ft = Be ? dt : j2t(Mac, {
        children: [
            it,
            de && (Te || lt.capped) && le.length === 0 ? tx(f8e, {
                children: g7v
            }) : null
        ]
    });
    return j2t(E3s.Provider, {
        value: be,
        children: [
            ot ? tx(dac, {
                placeholder: n !== void 0 ? "Search repositories..." : nQ0(te),
                rootStyle: F3s.submenuSearchRow
            }) : null,
            Ue ? tx(D8v, {
                checked: d || h,
                ignoreSearch: !0,
                leading: tx(zt, {
                    name: "folders"
                }),
                rootStyle: F3s.submenuToggleRow,
                switchVariant: "primary",
                onChange: (bt)=>{
                    bt ? te.type === "cloud" ? j() : M() : te.type === "cloud" ? $() : O();
                },
                children: "Select Multiple"
            }) : null,
            tx(JZ0, {
                hideLeadingDivider: !0,
                inLocalMultiSelect: h,
                localMultiSelectableIds: b,
                localMultiSelectedIds: y,
                onSelectTarget: H,
                onToggleLocalProject: q,
                projects: te.projects
            }),
            tx(m7v, {
                addedRepoKeys: i,
                hideLeadingDivider: !0,
                ignoreSearch: !0,
                inCloudMultiSelect: d,
                onSelectTarget: H,
                onToggleCloudProject: G,
                maxMultiRepoSelectionCount: K,
                selectedCloudRepoKeys: V,
                selectedCloudRows: Ge,
                selectedTarget: Y
            }),
            ot && !Ue ? tx("div", {
                className: "glass-uve7l6",
                children: ft
            }) : ft,
            te.type === "local" && te.id === "local" && U ? tx(l8, {
                noDivider: Be && qe,
                trailingDividerVisibility: h && y.size >= 1 ? "hidden" : void 0,
                children: tx(fI, {
                    ignoreSearch: !0,
                    leading: tx(zt, {
                        name: "folder-open"
                    }),
                    onSelect: U,
                    children: "Open Folder"
                })
            }) : null,
            te.sshRemoteAuthority !== void 0 && T ? tx(l8, {
                children: tx(fI, {
                    ignoreSearch: !0,
                    leading: tx(zt, {
                        name: "folder-open"
                    }),
                    onSelect: ()=>T(te.sshRemoteAuthority),
                    children: "Open Folder"
                })
            }) : null,
            h && y.size >= 1 ? j2t("div", {
                className: "glass-7wzq59 glass-1ey2m1c glass-1vjfegm glass-78zum5 glass-dt5ytf glass-1qjc9v5 glass-11twubx glass-13ly8rp glass-1yxiud8 glass-1xlntvz glass-yab65l glass-f1vpex glass-1cpjm7i glass-1hmns74 glass-1y3wzot glass-tmfv51 glass-grx6d4 glass-y80zi5 glass-1850n35 glass-kk1bqk",
                children: [
                    j2t("div", {
                        className: "glass-78zum5 glass-dt5ytf glass-11twubx",
                        children: [
                            tx("label", {
                                htmlFor: ie,
                                className: "glass-19aaqeu glass-y5h43f glass-19ji09o",
                                children: "Workspace Name"
                            }),
                            j2t("div", {
                                className: "glass-78zum5 glass-6s0dn4 glass-pkkfsy",
                                children: [
                                    tx(cQ0, {
                                        id: ie,
                                        onWorkspaceNameChange: N,
                                        placeholder: y.size >= 2 ? _ : "Workspace name",
                                        value: S,
                                        variant: "default"
                                    }),
                                    tx(An, {
                                        disabled: !g,
                                        onClick: ()=>{
                                            A();
                                        },
                                        onMouseDown: (bt)=>{
                                            bt.preventDefault();
                                        },
                                        size: "sm",
                                        variant: "primary",
                                        children: "Done"
                                    })
                                ]
                            })
                        ]
                    }),
                    f !== void 0 ? tx("div", {
                        className: "glass-1jh5svw glass-y5h43f glass-19ji09o",
                        role: "alert",
                        children: f
                    }) : null
                ]
            }) : null,
            d && V.size > 0 && C ? tx("div", {
                className: "glass-7wzq59 glass-1ey2m1c glass-1vjfegm glass-78zum5 glass-dt5ytf glass-11twubx glass-13ly8rp glass-1yxiud8 glass-1xlntvz glass-yab65l glass-f1vpex glass-1cpjm7i glass-1hmns74 glass-1y3wzot glass-tmfv51 glass-grx6d4 glass-y80zi5 glass-1850n35 glass-kk1bqk glass-uk3077",
                children: tx(p7v, {
                    onDone: C
                })
            }) : null
        ]
    });
});

}
