import { uf, xr } from "./Iwo.js";
import { $l, Ah } from "./SZu.js";
import { An, nn, zt } from "./LYd.js";
import { ho } from "./nca.js";
import { F4r } from "./ipa.js";
import { l$a } from "./yBp.js";
import { aF } from "./Aeg.js";
import { BVk, FVk, Gp, Hy, PAl, Pmf, Uie, XVe, ZIt, bl, cC, et, ext, h_, lVk, lu, oxt, t_s, td, uxt, xVk, zMn } from "./Ycg.js";
import { Xme } from "./Asv.js";
import { ADv, BDv, G6i, KDv, SDv, bMs, sic, tic } from "./BPv.js";
import { AUv, EtC, GUv, H3s, H4i, M2t, MUv, N2t, NBv, PYe, SUv, UBv, Uoc, VUv, XJt, XeC, Zac, c9i, dSe, eeC, ejv, etC, geC, ieC, kUv, leC, m3s, meC, oeC, peC, qUv, qoc, reC, seC, stC, utC, wtC, zeC } from "./lBv.js";
import { Xr } from "./Dialog.js";
import { _d } from "./InputGroup.js";
import { Yg } from "./Progress_2.js";
import { ma } from "./agentRepositoryServiceTypes.js";
import { Qr } from "./aiMiscServices.js";
import { Lk } from "./cloudEnvironmentTemplateService.js";
import { Obi } from "./constants_18.js";
import { NUv } from "./create-project-dialog-staged.js";
import { _jv, clc, een, fjv, gjv, mjv, pjv, vjv } from "./create-project-dialog.react.js";
import { FUv } from "./create-project-github-onboarding.js";
import { ulc } from "./edit-workspace-folder-picker.react.js";
import { n8v } from "./environment-selector-capabilities.js";
import { Cr } from "./experimentService.js";
import { i3s } from "./glass-create-project-draft-service.js";
import { yU } from "./glass-dialog-service.js";
import { Vme } from "./glass-error-boundary.react.js";
import { eu } from "./glass-log-service.js";
import { O2t } from "./glass-new-project-service.js";
import { ul } from "./glass-notification-service.js";
import { $Jt, d3s } from "./glass-staged-projects-service.contract.js";
import { pU } from "./glass-workspaces-management-service.js";
import { iD } from "./glass-workspaces-service.contract.js";
import { iNn } from "./multiRootWorkspaceFileService.js";
import { Ot } from "./network.js";
import { Yac } from "./new-project-cloud-picker-utils.js";
import { HMn, i_s, n_s } from "./pending-new-project.js";
import { sa } from "./reactiveStorageServiceTypes.js";
import { Aa, Iu, Mc } from "./resources.js";
import { dlc } from "./save-edited-workspace.js";
import { Ai } from "./uuid_2.js";
import { Qg } from "./workspaceMetadataService.js";
import { useCallback as OYe, useEffect as K3s, useMemo as h9i, useRef as kFn, useState as i3e } from "./react-runtime/react/esm-index-production.js";
import { jsx as cZ, jsxs as W2t } from "./react-runtime/react/esm-jsx-runtime-production.js";
function xtC() {
    var t = typeof SuppressedError == "function" ? SuppressedError : function(r, s) {
        var o = Error();
        return o.name = "SuppressedError", o.error = r, o.suppressed = s, o;
    }, e = {}, n = [];
    function i(r, s) {
        if (s != null) {
            if (Object(s) !== s) throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
            if (r) var o = s[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
            if (o === void 0 && (o = s[Symbol.dispose || Symbol.for("Symbol.dispose")], r)) var a = o;
            if (typeof o != "function") throw new TypeError("Object is not disposable.");
            a && (o = function() {
                try {
                    a.call(s);
                } catch (l) {
                    return Promise.reject(l);
                }
            }), n.push({
                v: s,
                d: o,
                a: r
            });
        } else r && n.push({
            d: s,
            a: r
        });
        return s;
    }
    return {
        e,
        u: i.bind(null, !1),
        a: i.bind(null, !0),
        d: function() {
            var r, s = this.e, o = 0;
            function a() {
                for(; r = n.pop();)try {
                    if (!r.a && o === 1) return o = 0, n.push(r), Promise.resolve().then(a);
                    if (r.d) {
                        var c = r.d.call(r.v);
                        if (r.a) return o |= 2, Promise.resolve(c).then(a, l);
                    } else o |= 1;
                } catch (u) {
                    return l(u);
                }
                if (o === 1) return s !== e ? Promise.reject(s) : Promise.resolve();
                if (s !== e) throw s;
            }
            function l(c) {
                return s = s !== e ? new t(c, s) : c, a();
            }
            return a();
        }
    };
}
function AtC(t) {
    return t === void 0 || t.kind === "cleared" ? void 0 : t.target;
}
export function RtC({ sourceAgentId: t, stagedProject: e, createAttemptId: n, createAttemptStartedAtMs: i, projectCount: r, onCreated: s, onCreateFailedAfterClose: o, onClose: a }) {
    const { homeWorkspaceIdentifier: l } = M2t(), c = et(ma), u = et(Qr), d = et(O2t), h = et(ul), p = et($Jt), g = Uoc(), f = et(Lk), _ = et(sa), b = et(i3s), [y] = i3e(()=>oeC({
            stagedProject: e,
            draft: e === void 0 ? b.read() : void 0
        })), S = y.restoredDraft, [k] = i3e(()=>r ?? H4i(c.agents.value)), C = utC({
        analyticsService: u,
        createAttemptId: n,
        createAttemptStartedAtMs: i,
        projectCount: k,
        restoredDraft: S
    }), T = kFn(void 0), I = kFn(0), A = et(Cr), P = et(Qg), M = bl("dev_only_force_first_project_experience"), O = XJt(), N = oxt(), U = td(f.data), [j, $] = i3e(y.name), [H, G] = i3e(y.appearance), [q, K] = i3e(y.hasCustomAppearance), [V, Y] = i3e(y.modelPickerDraftId), J = y.modelPickerDraftId, Q = OYe((Qt)=>{
        Y(Qt);
    }, []), [te, ee] = i3e(void 0), [re, ie] = i3e(!1), oe = kFn(null), [se, le] = i3e("loading"), [ce, ae] = i3e(!1), [de, he] = i3e(!1), [ge, pe] = i3e(), ve = kFn(null), fe = kFn(!1), Te = kFn(Ai());
    K3s(()=>{
        const Qt = (Sn)=>{
            Sn.key === "Escape" && (I.current = Date.now());
        };
        return document.addEventListener("keydown", Qt, !0), ()=>document.removeEventListener("keydown", Qt, !0);
    }, []), K3s(()=>{
        e === void 0 && b.write({
            name: j,
            appearance: {
                icon: H.icon,
                colorId: H.colorId
            },
            hasCustomAppearance: q,
            modelPickerDraftId: V
        });
    }, [
        H.colorId,
        H.icon,
        b,
        q,
        V,
        j,
        e
    ]);
    const _e = AtC(te), Ce = te !== void 0 && te.kind !== "default", Se = _e !== void 0 && !dSe(_e) && !lu(_e) && _e.usePrivateWorker === !0, Pe = N2t(!Se), we = t_s(Pe), Ie = Pe.kind === "loading", Me = Xme(), De = Hy(), { cloudProjects: Ne, githubConnected: be, isLoading: je } = etC({
        cloudEnvService: f,
        newProjectActive: !0,
        projectSelectorOpen: ce
    }), $e = OYe((Qt)=>{
        ee((Sn)=>Sn ?? {
                kind: "default",
                target: Qt
            });
    }, []), Je = h9i(()=>{
        const Qt = {
            cloudProjects: Ne,
            workspaceMetadataService: P
        }, Sn = t === void 0 ? void 0 : c.getAgentHeader(t);
        return [
            Sn === void 0 ? void 0 : ext(PYe(Sn, Qt), Sn),
            PYe(c.getEmptyStateDraft().header, Qt)
        ];
    }, [
        c,
        Ne,
        t,
        P
    ]), Ge = EtC({
        listed: U.logicalEnvironments,
        listedSettled: U.hasSettledLogicalEnvironments,
        stagedProject: e
    }), xe = h9i(()=>ieC({
            listed: Ge.logicalEnvironments,
            preferredTargets: Je
        }), [
        Je,
        Ge.logicalEnvironments
    ]), Oe = h9i(()=>e === void 0 ? void 0 : [
            leC(e)
        ], [
        e
    ]);
    stC({
        cloudProjects: Ne,
        cloudProjectsSettled: !re && !je,
        logicalEnvironments: xe,
        logicalEnvironmentsSettled: Ge.logicalEnvironmentsSettled,
        newRepositoryFallback: Ne.length === 0 && we && !Ie,
        onResolveDefaultTarget: $e,
        preferredSelections: Oe,
        preferredTargets: Je,
        recentProjects: N
    });
    const ct = h9i(()=>eeC({
            cloudProjects: Ne,
            cloudProjectsSettled: !je,
            logicalEnvironments: xe,
            newRepositorySelectable: we,
            selectedTarget: _e,
            selectedFromPicker: Ce
        }), [
        Ne,
        xe,
        je,
        we,
        _e,
        Ce
    ]), Ye = ct, Ve = OYe((Qt)=>{
        if (!Qt && !fe.current) {
            const Sn = T.current ?? (Date.now() - I.current < 250 ? "escape" : "backdrop");
            T.current = void 0, C.trackDismissed(Sn), a();
        }
    }, [
        C,
        a
    ]), Xe = OYe((Qt)=>{
        if (!dSe(Qt)) {
            if (Uie(Qt)) {
                C.trackValidationFailed("no_target");
                return;
            }
            if (lu(Qt)) {
                C.trackValidationFailed("not_workspace");
                return;
            }
        }
        ee({
            kind: "picked",
            target: Qt
        }), C.trackFieldCompleted("workspace"), pe(void 0);
    }, [
        C
    ]), lt = OYe((Qt)=>{
        Qt === "cloud" && Xe(Yac);
    }, [
        Xe
    ]), He = OYe(()=>{
        ee({
            kind: "cleared"
        }), ie(!0), ae(!1);
    }, []), gt = OYe((Qt)=>{
        $(Qt.currentTarget.value), pe(void 0);
    }, []), ht = OYe((Qt)=>{
        const Sn = Qt.currentTarget.value.trim();
        $(Sn), Sn.length > 0 && C.trackFieldCompleted("name");
    }, [
        C
    ]), Ae = OYe((Qt)=>{
        ae(Qt), Qt ? C.trackStepViewed("workspace_picker") : ve.current?.focus();
    }, [
        C
    ]), ot = OYe((Qt)=>{
        G(Qt), K(!0), C.trackFieldCompleted("appearance"), u.trackEvent("glass.projects.appearance_changed", {
            phase: "pre_create",
            source: "dialog",
            icon: Qt.icon,
            colorId: Qt.colorId
        });
    }, [
        u,
        C
    ]), Be = h9i(()=>Ye !== void 0 && !dSe(Ye) && !Uie(Ye) ? c9i({
            selectedTarget: Ye,
            selfHostedAvailable: O.selfHostedAvailable,
            remoteControlAvailable: O.remoteControlAvailable,
            homeWorkspaceIdentifier: l
        }) : void 0, [
        Ye,
        O.remoteControlAvailable,
        O.selfHostedAvailable,
        l
    ]), Ue = j.trim(), it = Ue.length > 0 ? Ue : Obi, qe = Ue.length > 0, pt = e !== void 0 && !qe, ft = dSe(ct) ? _jv : void 0, { connectGithubBusy: bt, gateCreate: St, githubOnboarding: Et, onConnectGithubMenuSelect: kt, setupCloudPillAction: xt } = wtC({
        createAttemptId: C.createAttemptId,
        onCreate: (Qt)=>{
            un(Qt);
        },
        selectedTarget: Ye
    }), Pt = geC(Et), Dt = be === !1 || Et.kind === "connectTarget", Vt = AUv({
        resolvedCloudTarget: ct,
        cloudProjects: Ne,
        logicalEnvironments: xe,
        githubHoldsCreate: peC(Et),
        cloudPickerFailed: re,
        newRepositorySelectable: we,
        newRepositoryLoading: Ie,
        selectedFromPicker: Ce,
        modelPickerReady: se === "ready",
        isCreating: de,
        nameMissing: pt
    });
    K3s(()=>{
        meC({
            githubConnected: be,
            githubOnboarding: Et,
            workspacePickerOpen: ce
        }) && C.trackStepViewed("github_connect");
    }, [
        C,
        be,
        Et,
        ce
    ]), K3s(()=>{
        re && C.trackBlocked("cloud_picker_failed");
    }, [
        re,
        C
    ]);
    function tn() {
        const Qt = seC({
            resolvedCloudTarget: ct,
            cloudProjects: Ne,
            logicalEnvironments: xe,
            githubHold: Pt,
            cloudPickerFailed: re,
            newRepositorySelectable: we,
            newRepositoryLoading: Ie,
            selectedFromPicker: Ce,
            modelPickerStatus: se,
            isCreating: fe.current || de
        });
        Qt !== void 0 && C.trackBlocked(Qt);
    }
    async function un(Qt) {
        const Sn = oe.current?.getSubmitModelConfig();
        if (fe.current || Ye === void 0 || !dSe(Ye) && (Uie(Ye) || Be === void 0) || Sn === void 0 || !Vt) {
            tn();
            return;
        }
        fe.current = !0, he(!0), pe(void 0);
        const $n = e === void 0 ? void 0 : ()=>p.relist();
        try {
            qe && C.trackFieldCompleted("name"), C.trackCreateSubmitted({
                submitEntry: Qt,
                hasAttachments: !1,
                hasCustomName: qe,
                hasCustomAppearance: q,
                restoredDraft: S,
                githubConnectShown: Dt
            });
            const Un = dSe(Ye) ? await XeC({
                selectedTarget: Ye,
                availability: Pe,
                draftId: Te.current,
                projectName: it,
                newProjectService: d
            }) : {
                kind: "ready",
                target: Ye,
                startedAsNewProject: !1
            };
            if (Un.kind === "originUnavailable") {
                C.trackBlocked(Pmf(Pe) ? "storage_disabled" : "origin_unavailable"), uxt(h, Pmf(Pe) ? i_s : n_s), fe.current = !1, he(!1);
                return;
            }
            if (Un.kind === "mintFailed") {
                C.trackBlocked(qoc(Un.error) ? "storage_disabled" : "mint_failed"), qoc(Un.error) ? uxt(h, i_s) : (xr(Un.error), uxt(h, HMn)), fe.current = !1, he(!1);
                return;
            }
            const Xn = dSe(Ye) ? await SUv(c9i({
                selectedTarget: Un.target,
                selfHostedAvailable: O.selfHostedAvailable,
                remoteControlAvailable: O.remoteControlAvailable,
                homeWorkspaceIdentifier: l
            }), async ()=>kUv(await Me(), De, "personal")) : Be;
            if (Xn === void 0) throw new Error("Could not resolve Project submit context");
            const Ti = e === void 0 ? void 0 : Zac(e, Un.target), bi = (ni)=>{
                Ti !== void 0 && p.recordPromote(ni, Ti, "dialog");
            }, Qn = GUv({
                submitContext: Xn,
                modelConfig: Sn,
                projectName: it,
                projectAppearance: reC({
                    appearance: H,
                    hasCustomAppearance: q
                }),
                stagedProjectId: e?.bcId,
                dashboardUserId: _.applicationUserPersistentStorage.dashboardUserId,
                startedAsNewProject: Un.startedAsNewProject,
                firstProjectOnboardingEnabled: UBv(A),
                forceFirstProjectExperience: M,
                existingProjectCount: H4i(c.agents.value)
            });
            try {
                var Mn = xtC();
                const ni = Mn.u(await c.createAgent(Qn.text, Qn.environment, {
                    ...Qn.options,
                    onCreateSucceeded: Ti === void 0 ? void 0 : ()=>{
                        bi("created"), $n?.();
                    },
                    onCreateFailed: (pn, yn, Ln)=>{
                        const xi = e !== void 0 && MUv(yn);
                        xi ? uxt(h, d3s) : NBv(h, Ln ?? HMn, yn, {
                            ...g,
                            notificationService: h
                        }), bi(xi ? "gone" : "failed"), $n?.(), o?.(pn);
                    },
                    onCreateCancelled: (pn)=>{
                        bi("cancelled"), $n?.(), o?.(pn);
                    }
                }));
                Un.startedAsNewProject && (d.clearDraft(Te.current), Te.current = Ai()), C.trackCreated({
                    projectId: ni.header.id,
                    ...qUv({
                        target: Un.target,
                        createOptions: Qn.options,
                        stagedProject: e,
                        hasCustomName: qe,
                        hasCustomAppearance: q
                    }),
                    ...e === void 0 ? {} : {
                        instantCreate: !1
                    }
                });
                try {
                    m3s(ni.header.id, "waiting"), await s?.(ni.header.id);
                } catch (pn) {
                    xr(pn);
                } finally{
                    e === void 0 && b.discard(), a();
                }
            } catch (ni) {
                Mn.e = ni;
            } finally{
                Mn.d();
            }
        } catch (Un) {
            fe.current = !1, xr(Un), pe(lVk(Un)), he(!1);
        }
    }
    function kn(Qt) {
        if (Qt.key === "Enter") {
            if (!Vt) {
                tn();
                return;
            }
            Qt.preventDefault(), St("keyboard");
        }
    }
    function oi() {
        St("click");
    }
    const Fn = cZ(H3s, {
        capabilities: n8v,
        cloudProjects: Ne,
        connectGithubBusy: bt,
        creationKind: "project",
        includeSingleRepoLogicalEnvironments: !0,
        menuOpen: ce,
        onConnectGithub: be === !1 ? kt : void 0,
        onMenuOpenChange: Ae,
        onSelectPendingNewProject: we ? lt : void 0,
        onSelectTarget: Xe,
        pendingNewProject: ft,
        recentProjects: N,
        selectedTarget: dSe(Ye) ? void 0 : Ye,
        targetScope: "cloud"
    });
    return W2t(Xr, {
        "aria-label": clc,
        closeOnBackdropClick: !de,
        closeOnEscape: !de,
        closeOnOutsidePress: !1,
        initialFocus: ve,
        onOpenChange: Ve,
        open: !0,
        size: "lg",
        children: [
            cZ(Xr.Header, {
                description: e === void 0 ? pjv : NUv,
                descriptionFontSize: "base",
                title: clc,
                children: cZ(Xr.Close, {
                    onClick: ()=>{
                        fe.current || (T.current = "close_button");
                    },
                    rootStyle: een.closeButton
                })
            }),
            W2t(Xr.Content, {
                rootStyle: een.body,
                children: [
                    W2t("div", {
                        className: "glass-78zum5 glass-h8yej3 glass-dt5ytf glass-6s0dn4 glass-1oot3zn glass-euugli",
                        children: [
                            cZ(F4r, {
                                "aria-label": "Choose project icon",
                                finalFocus: ve,
                                onChange: ot,
                                placeholder: !q,
                                triggerSize: "xlarge",
                                value: H
                            }),
                            cZ(_d.Root, {
                                rootStyle: een.nameInputGroup,
                                size: "xl",
                                variant: "unfilled",
                                children: cZ(_d.Input, {
                                    "aria-label": gjv,
                                    onBlur: ht,
                                    onChange: gt,
                                    onKeyDown: kn,
                                    placeholder: e?.name ?? Obi,
                                    ref: ve,
                                    rootStyle: een.nameInput,
                                    value: j
                                })
                            }),
                            e !== void 0 ? cZ(nn, {
                                as: "p",
                                color: "secondary",
                                rootStyle: een.stagedDescription,
                                size: "sm",
                                children: e.description
                            }) : null
                        ]
                    }),
                    W2t("div", {
                        className: "glass-78zum5 glass-h8yej3 glass-dt5ytf glass-1qjc9v5 glass-euugli",
                        children: [
                            W2t("div", {
                                className: "glass-78zum5 glass-6s0dn4 glass-1qughib glass-1qqbgdy glass-euugli glass-1t8xvyj glass-usxwy5 glass-so031l glass-1q0q8m5 glass-1g95lbd",
                                children: [
                                    cZ(nn, {
                                        as: "div",
                                        color: "primary",
                                        size: "md",
                                        children: fjv
                                    }),
                                    cZ("div", {
                                        className: "glass-3nfvp2 glass-euugli glass-193iq5w",
                                        children: re ? cZ(ejv, {
                                            label: "Repositories unavailable",
                                            state: "error"
                                        }) : cZ(Vme, {
                                            boundaryName: "CreateProjectDialogProjectSelector",
                                            fallback: ()=>cZ(ejv, {
                                                    label: "Repositories unavailable",
                                                    state: "error"
                                                }),
                                            onError: He,
                                            children: Fn
                                        })
                                    })
                                ]
                            }),
                            W2t("div", {
                                className: "glass-78zum5 glass-6s0dn4 glass-1qughib glass-1qqbgdy glass-euugli glass-1t8xvyj glass-usxwy5",
                                children: [
                                    cZ(nn, {
                                        as: "div",
                                        color: "primary",
                                        size: "md",
                                        children: vjv
                                    }),
                                    cZ(zeC, {
                                        handleRef: oe,
                                        onDraftId: Q,
                                        onLeaveForAddModels: ()=>{
                                            C.trackDismissed("leave_for_add_models"), a();
                                        },
                                        onStatusChange: le,
                                        placement: "top-start",
                                        retainOnUnmount: !0,
                                        retainedDraftId: J,
                                        targetEnvironment: Be?.environment,
                                        triggerSize: "md"
                                    })
                                ]
                            })
                        ]
                    }),
                    ge ? cZ("div", {
                        role: "alert",
                        className: "glass-1jh5svw glass-fifm61 glass-2b8uid",
                        children: ge
                    }) : null,
                    se === "error" ? cZ("div", {
                        role: "alert",
                        className: "glass-1jh5svw glass-fifm61 glass-2b8uid",
                        children: "Couldn\u2019t load models. Close and try again."
                    }) : null
                ]
            }),
            W2t(Xr.Footer, {
                rootStyle: een.footer,
                children: [
                    xt !== null ? cZ(VUv, {
                        dataComponent: FUv,
                        icon: xt.icon,
                        label: xt.label,
                        onClick: xt.onClick,
                        tooltipContent: xt.tooltipContent,
                        tooltipIsPreviewCard: xt.tooltipIsPreviewCard,
                        treatment: xt.treatment
                    }) : null,
                    cZ(An, {
                        disabled: !Vt,
                        onClick: oi,
                        size: "lg",
                        variant: "primary",
                        children: de ? W2t("span", {
                            className: "glass-3nfvp2 glass-6s0dn4 glass-ehausa",
                            children: [
                                cZ(Yg, {
                                    "aria-hidden": !0,
                                    indeterminate: !0,
                                    size: "sm",
                                    variant: "ring"
                                }),
                                "Creating\u2026"
                            ]
                        }) : Et.kind === "checkingAccess" ? "Checking access\u2026" : mjv
                    })
                ]
            })
        ]
    });
}
function bjv(t) {
    const e = new Set, n = [];
    for (const i of t){
        if (!zMn(i)) continue;
        const r = i.toString();
        e.has(r) || (e.add(r), n.push(i));
    }
    return n;
}
function MtC(t) {
    if (t.storedFolders !== void 0 && t.storedFolders.length > 0) return bjv(t.storedFolders);
    if (t.metadataPaths !== void 0 && t.metadataPaths.length > 0) return bjv(t.metadataPaths.map((n)=>n.uri));
    const e = t.workspace.workspaceIdentifier;
    return $l(e) && e.uri.scheme === Ot.file ? [
        e.uri
    ] : [];
}
function yjv(t) {
    const e = t.fsPath.replace(/[\\/]+$/, "").split(/[\\/]/), n = e[e.length - 1];
    return n !== void 0 && n.length > 0 ? n : t.fsPath;
}
function DtC(t, e) {
    if (e !== void 0 && e.length > 0) return e;
    if (t.scheme === Ot.file) return yjv(t);
    const n = t.path.replace(/\/+$/, "").split("/"), i = n[n.length - 1];
    return i !== void 0 && i.length > 0 ? i : t.authority.length > 0 ? t.authority : t.toString(!0);
}
function NtC(t) {
    return t.scheme === Ot.file ? t.fsPath : t.toString(!0);
}
import { c as Y3s } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as pge, jsxs as wFn } from "./react-runtime/react/esm-jsx-runtime-production.js";
function LtC(t) {
    const e = Y3s(12), { name: n, uri: i } = t;
    let r;
    e[0] !== n || e[1] !== i ? (r = DtC(i, n), e[0] = n, e[1] = i, e[2] = r) : r = e[2];
    let s;
    e[3] !== r ? (s = pge(nn, {
        size: "sm",
        children: r
    }), e[3] = r, e[4] = s) : s = e[4];
    let o;
    e[5] !== i ? (o = NtC(i), e[5] = i, e[6] = o) : o = e[6];
    let a;
    e[7] !== o ? (a = pge(nn, {
        color: "tertiary",
        rootStyle: ulc.path,
        size: "xs",
        children: o
    }), e[7] = o, e[8] = a) : a = e[8];
    let l;
    return e[9] !== s || e[10] !== a ? (l = wFn("div", {
        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1r8uery glass-137clkk glass-euugli",
        children: [
            s,
            a
        ]
    }), e[9] = s, e[10] = a, e[11] = l) : l = e[11], l;
}
function OtC(t) {
    return typeof t.stored.name == "string" && t.stored.name.length > 0 ? t.stored.name : void 0;
}
function kjv(t) {
    const e = Y3s(10), { name: n, onRemove: i, uri: r } = t;
    let s;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (s = pge(zt, {
        color: "tertiary",
        name: "folder",
        size: "sm"
    }), e[0] = s) : s = e[0];
    let o;
    e[1] !== n || e[2] !== r ? (o = pge(LtC, {
        name: n,
        uri: r
    }), e[1] = n, e[2] = r, e[3] = o) : o = e[3];
    let a;
    e[4] !== i || e[5] !== r ? (a = i !== void 0 ? pge(ho, {
        "aria-label": `Remove ${yjv(r)}`,
        icon: "close",
        onClick: i,
        size: "sm",
        variant: "ghost"
    }) : null, e[4] = i, e[5] = r, e[6] = a) : a = e[6];
    let l;
    return e[7] !== o || e[8] !== a ? (l = wFn("li", {
        className: "glass-78zum5 glass-1q0g3np glass-6s0dn4 glass-1oot3zn glass-11ooeo3 glass-13ly8rp glass-1jkygx glass-1xlntvz glass-1o7kk3e glass-so031l glass-1t1lzn6 glass-1q0q8m5 glass-1jfuf7k",
        children: [
            s,
            o,
            a
        ]
    }), e[7] = o, e[8] = a, e[9] = l) : l = e[9], l;
}
function FtC(t) {
    const e = Y3s(4), { onPickFolder: n } = t;
    let i, r;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (i = pge(zt, {
        color: "tertiary",
        name: "folder-plus",
        size: "sm"
    }), r = pge(nn, {
        color: "primary",
        size: "sm",
        children: "Add Folder"
    }), e[0] = i, e[1] = r) : (i = e[0], r = e[1]);
    let s;
    return e[2] !== n ? (s = pge("li", {
        className: "glass-so031l glass-1t1lzn6 glass-1q0q8m5 glass-1jfuf7k",
        children: wFn("button", {
            "aria-label": "Add Folder",
            onClick: n,
            type: "button",
            className: "glass-jyslct glass-9f619 glass-78zum5 glass-1q0g3np glass-6s0dn4 glass-1oot3zn glass-11ooeo3 glass-h8yej3 glass-13ly8rp glass-1jkygx glass-1xlntvz glass-1o7kk3e glass-c342km glass-ng3xce glass-2u8bby glass-jbqb8w glass-1iuyybk glass-bc7umr glass-1wd3ewq glass-1ypdohk glass-dpxx8g",
            children: [
                i,
                r
            ]
        })
    }), e[2] = n, e[3] = s) : s = e[3], s;
}
export function BtC(t) {
    const e = Y3s(22), { errorMessage: n, folders: i, hintMessage: r, lockedFolders: s, onPickFolder: o, onRemoveFolder: a } = t;
    let l;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (l = pge(nn, {
        color: "secondary",
        size: "sm",
        weight: "medium",
        children: "In this workspace"
    }), e[0] = l) : l = e[0];
    let c;
    e[1] !== s ? (c = s.map(UtC), e[1] = s, e[2] = c) : c = e[2];
    let u;
    if (e[3] !== i || e[4] !== a) {
        let _;
        e[6] !== a ? (_ = (b)=>pge(kjv, {
                onRemove: ()=>a(b),
                uri: b
            }, b.toString()), e[6] = a, e[7] = _) : _ = e[7], u = i.map(_), e[3] = i, e[4] = a, e[5] = u;
    } else u = e[5];
    let d;
    e[8] !== o ? (d = pge(FtC, {
        onPickFolder: o
    }), e[8] = o, e[9] = d) : d = e[9];
    let h;
    e[10] !== c || e[11] !== u || e[12] !== d ? (h = wFn("div", {
        className: "glass-78zum5 glass-dt5ytf glass-pkkfsy glass-euugli",
        children: [
            l,
            pge("div", {
                className: "glass-mkeg23 glass-1y0btm7 glass-13747pv glass-1m7fhj7 glass-b3r6kr glass-19aweqf glass-2lwn1j",
                children: wFn("ul", {
                    "aria-label": "Selected folders",
                    className: "glass-78zum5 glass-dt5ytf glass-3ct3a4 glass-dj266r glass-1yf7rl7 glass-at24cr glass-j3b58b glass-exx8yu glass-1xpa7k glass-18d9i69 glass-1uhho1l glass-1odjw0f glass-19aweqf",
                    children: [
                        c,
                        u,
                        d
                    ]
                })
            })
        ]
    }), e[10] = c, e[11] = u, e[12] = d, e[13] = h) : h = e[13];
    let p;
    e[14] !== r ? (p = r !== void 0 ? pge(nn, {
        color: "secondary",
        size: "sm",
        children: r
    }) : null, e[14] = r, e[15] = p) : p = e[15];
    let g;
    e[16] !== n ? (g = n !== void 0 ? pge(nn, {
        rootStyle: ulc.error,
        size: "sm",
        children: n
    }) : null, e[16] = n, e[17] = g) : g = e[17];
    let f;
    return e[18] !== h || e[19] !== p || e[20] !== g ? (f = wFn("div", {
        className: "glass-78zum5 glass-dt5ytf glass-1oot3zn glass-euugli",
        children: [
            h,
            p,
            g
        ]
    }), e[18] = h, e[19] = p, e[20] = g, e[21] = f) : f = e[21], f;
}
function UtC(t) {
    return pge(kjv, {
        name: OtC(t),
        uri: t.uri
    }, t.uri.toString());
}
import { useCallback as $tC, useState as wjv } from "./react-runtime/react/esm-index-production.js";
import { jsx as G2t, jsxs as Cjv, Fragment as HtC } from "./react-runtime/react/esm-jsx-runtime-production.js";
function WtC(t) {
    const e = h_(t);
    return e.type === "remote-wsl" ? {
        connectionType: "wsl",
        hostname: e.host,
        remoteExtensionId: "anysphere.remote-wsl",
        remoteOutputChannelName: "Remote - WSL"
    } : {
        connectionType: "ssh",
        hostname: e.type === "remote-ssh" ? e.host : t,
        remoteExtensionId: "anysphere.remote-ssh",
        remoteOutputChannelName: "Remote - SSH"
    };
}
export function GtC({ onAdd: t, onBack: e, remoteAuthority: n, visible: i }) {
    const { clipboardService: r, notificationService: s, workspacesService: o } = KDv(), { connectionType: a, hostname: l, remoteExtensionId: c, remoteOutputChannelName: u } = WtC(n), [d, h] = wjv(), [p, g] = wjv(!1), { connectingWorkspace: f, fileService: _, handleCopyLogs: b, handleSelectedPathChange: y, hasConnectionError: S, hasCopied: k, isConnected: C, logContentRef: T, operatingSystem: I, selectedPath: A } = sic({
        onClose: e,
        onError: (N)=>s.error(uf(N)),
        workspacesService: o,
        clipboardService: r,
        getProjectName: ()=>l,
        initialRemoteAuthority: n
    }), P = $tC(()=>{
        !C || _ === void 0 || I === void 0 || p || (g(!0), (async ()=>{
            try {
                t(await tic(n, A, I, _));
            } catch (N) {
                s.error(uf(N));
            } finally{
                g(!1);
            }
        })());
    }, [
        _,
        p,
        C,
        s,
        t,
        I,
        n,
        A
    ]), M = C && _ !== void 0 && I !== void 0, O = SDv({
        connectionFailed: S,
        connectionType: a,
        currentStepId: "connecting",
        hostname: l
    });
    return i ? Cjv(HtC, {
        children: [
            G2t(Xr.Header, {
                description: M ? "Choose a folder on this remote" : O ?? "Choose a folder on this remote",
                descriptionFontSize: "base",
                title: S ? "Connection Failed" : M ? "Add Folder" : "Connecting",
                children: G2t(Xr.Close, {})
            }),
            G2t(Xr.Content, {
                children: M ? G2t(BDv, {
                    fileService: _,
                    hostname: l,
                    newFolderDraft: d,
                    onNewFolderDraftChange: h,
                    onSelectedPathChange: y,
                    operatingSystem: I,
                    remoteAuthority: n,
                    selectedPath: A,
                    showNewFolderButton: !0
                }) : G2t(ADv, {
                    logContentRef: T,
                    remoteExtensionId: c,
                    remoteOutputChannelName: u,
                    workspace: f
                })
            }),
            Cjv(Xr.Footer, {
                children: [
                    G2t(An, {
                        onClick: ()=>e(S),
                        variant: "text",
                        children: "Back"
                    }),
                    S ? G2t(An, {
                        onClick: b,
                        variant: "secondary",
                        children: k ? "Copied!" : "Copy Logs"
                    }) : G2t(An, {
                        disabled: !M || p,
                        onClick: P,
                        variant: "primary",
                        children: p ? "Adding..." : "Add"
                    })
                ]
            })
        ]
    }) : null;
}
function ztC(t) {
    const e = G6i(t.requestedName ?? "");
    if (e.length > 0) return e;
    const n = G6i(t.currentName);
    return n.length > 0 ? n : bMs(t.folderNames);
}
function VtC(t) {
    const e = new Set(t.nextUris.map((r)=>r.toString())), n = new Set, i = [];
    for (const r of t.original){
        if (n.add(r.uri.toString()), !zMn(r.uri)) {
            i.push(r.stored);
            continue;
        }
        e.has(r.uri.toString()) && i.push(r.stored);
    }
    for (const r of t.nextUris)!zMn(r) || n.has(r.toString()) || i.push(l$a(r, !1, void 0, t.workspaceConfigFolder, Iu));
    return i;
}
function KtC(t, e) {
    return [
        ...e.filter((i)=>!zMn(i.uri)).map((i)=>({
                uri: i.uri
            })),
        ...t.map((i)=>({
                uri: i
            }))
    ];
}
async function YtC(t) {
    const e = t.originalEntries ?? [], n = e.filter((h)=>!zMn(h.uri)).length;
    if (t.folders.length + n < dlc) throw new Error("A workspace needs at least one folder.");
    const i = t.currentWorkspace.workspaceIdentifier, r = KtC(t.folders, e), s = ztC({
        requestedName: t.workspaceName,
        currentName: t.currentWorkspace.name,
        folderNames: t.folders.map((h)=>Aa(h))
    }), o = t.currentWorkspace.remoteAuthority ?? t.folders.map(PAl).find((h)=>h !== void 0), a = o !== void 0 ? {
        remoteAuthority: o
    } : {};
    let l, c;
    if (Ah(i)) {
        const h = VtC({
            original: e,
            nextUris: t.folders,
            workspaceConfigFolder: Mc(i.configPath)
        }), p = await t.workspaceFileService.updateWorkspaceFile(i, h);
        if (l = s === aF(p) ? p : await t.workspaceFileService.renameWorkspaceFile(p, s), l.id === p.id) {
            const g = cC(l, a);
            return t.glassWorkspacesService.replaceWorkspaceProject({
                project: g,
                replaces: t.currentWorkspace
            }), t.workspaceMetadataService.updateMetadata(l, {
                paths: r
            }), g;
        }
        c = p;
    } else {
        const h = $l(i) && t.folders.some((p)=>Iu.isEqual(p, i.uri));
        if (h && t.folders.length === 1 && s === G6i(t.currentWorkspace.name)) return t.currentWorkspace;
        l = await t.workspaceFileService.createWorkspaceFile(t.folders.map((p)=>({
                uri: p
            })), s), c = h ? i : void 0;
    }
    const u = cC(l, a);
    t.workspaceMetadataService.updateMetadata(l, {
        paths: r
    });
    const d = c !== void 0 && (await t.agentRepositoryService.moveWorkspaceAgents({
        from: c,
        to: l
    })).unmovedAgentIds.length === 0;
    return t.glassWorkspacesService.replaceWorkspaceProject({
        project: u,
        replaces: d ? t.currentWorkspace : void 0
    }), d && Ah(c) && await t.workspaceFileService.deleteWorkspaceFile(c), u;
}
import { useCallback as p9i, useEffect as ZtC, useState as fdt } from "./react-runtime/react/esm-index-production.js";
async function QtC(t, e, n) {
    try {
        e !== void 0 && n.configPath.toString() !== e.toString() && await t.removeRecentlyOpened([
            e
        ]), await t.addRecentlyOpened([
            {
                workspace: n
            }
        ]);
    } catch  {}
}
export function JtC({ onSaved: t, workspace: e }) {
    const n = et(yU), i = et(eu), r = et(pU), s = et(Qg), o = et(iNn), a = et(iD), l = et(ma), [c, u] = fdt([]), [d, h] = fdt([]), [p, g] = fdt(e.name), [f, _] = fdt(!1), [b, y] = fdt(!1), [S, k] = fdt(void 0), [C, T] = fdt(!1), [I, A] = fdt(!1), P = Ah(e.workspaceIdentifier), M = Gp(s.onDidChangeMetadata, ()=>FVk(e, s.getMetadata(e.workspaceIdentifier), [
            ...c,
            ...d.map((Q)=>Q.uri)
        ])), O = xVk(M), [N, U] = fdt(e);
    N !== e && (U(e), g(e.name), k(void 0), T(!1), A(!1), _(!1)), ZtC(()=>{
        let Q = !1;
        const te = s.getMetadata(e.workspaceIdentifier);
        return (async ()=>{
            const re = e.workspaceIdentifier, ie = Ah(re) ? await o.readWorkspaceFolders(re) : [];
            Q || (h(ie), u(MtC({
                workspace: e,
                metadataPaths: te?.paths,
                storedFolders: ie.map((oe)=>oe.uri)
            })), _(!0));
        })(), ()=>{
            Q = !0;
        };
    }, [
        e,
        o,
        s
    ]);
    const j = p9i((Q)=>{
        if (!BVk(Q, M)) return;
        const te = Q.toString();
        u((ee)=>ee.some((re)=>re.toString() === te) ? ee : [
                ...ee,
                Q
            ]), k(void 0), T(!1);
    }, [
        M
    ]), $ = p9i((Q)=>{
        const te = Q.toString();
        u((ee)=>ee.filter((re)=>re.toString() !== te)), k(void 0);
    }, []), H = p9i(async ()=>{
        if (f) {
            if (O) {
                A(!0), T(!0);
                return;
            }
            if (!ZIt(M)) try {
                const Q = await XVe(n, r);
                if (!Q || !$l(Q)) return;
                j(Q.uri);
            } catch (Q) {
                i.error("[EditWorkspace] Failed to add folder:", Q);
            }
        }
    }, [
        O,
        n,
        j,
        f,
        i,
        M,
        r
    ]), G = p9i((Q = !1)=>{
        T(!1), Q && A(!1);
    }, []), q = d.filter((Q)=>!zMn(Q.uri)), K = c.length + q.length >= dlc, V = f && K && !b, Y = f && !b && !K, J = p9i(async ()=>{
        if (V) {
            y(!0), k(void 0);
            try {
                const Q = Ah(e.workspaceIdentifier) ? e.workspaceIdentifier.configPath : void 0, te = await YtC({
                    currentWorkspace: e,
                    folders: c,
                    originalEntries: d,
                    workspaceName: p,
                    workspaceFileService: o,
                    workspaceMetadataService: s,
                    glassWorkspacesService: a,
                    agentRepositoryService: l
                }), ee = te.workspaceIdentifier;
                Ah(ee) && await QtC(r, Q, ee), t?.(te);
            } catch (Q) {
                i.error("[EditWorkspace] Failed to save workspace:", Q), k("Could not save this workspace. Try again.");
            } finally{
                y(!1);
            }
        }
    }, [
        l,
        V,
        c,
        a,
        d,
        i,
        t,
        e,
        o,
        s,
        p,
        r
    ]);
    return {
        canSave: V,
        errorMessage: S,
        folders: c,
        handleAddFolder: j,
        handleCancelRemoteFolderPick: G,
        handlePickFolder: H,
        handleRemoveFolder: $,
        handleSave: J,
        hasOpenedRemotePicker: I,
        isExistingMultiRoot: P,
        isPickingRemoteFolder: C,
        isSaving: b,
        lockedFolders: q,
        needsMoreFolders: Y,
        remoteAuthority: O ? M : void 0,
        setWorkspaceName: g,
        workspaceName: p
    };
}

export var hjv = {};
Object.defineProperty(hjv, "CreateProjectDialog", {
    enumerable: true,
    get: ()=>RtC
});
