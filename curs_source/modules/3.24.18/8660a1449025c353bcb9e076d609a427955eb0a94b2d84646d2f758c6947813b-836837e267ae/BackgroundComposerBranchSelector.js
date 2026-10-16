import { N2w, kBf } from "./BA.js";
import { y9e } from "./ComposerUnifiedContextMenu.js";
import { Wd } from "./Iwo.js";
import { Gr, L6, nye, ol, vMe } from "./Ycg.js";
import { A9l, D9l } from "./appLayoutActions.js";
import { ZE, qn } from "./async.js";
import { OCn, tCe } from "./backgroundComposerData.js";
import { FS } from "./button_4.js";
import { gs, yt } from "./codicons.js";
import { gYa } from "./gYa.js";
import { iye } from "./hooks.js";
import { Bu, Iw } from "./hoverWidget.js";
import { w6p } from "./ipa.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { N6, sye } from "./useKeyboardShortcut.js";
import { O6 } from "./useVSHoverTooltip.js";
import { at } from "./web.js";
import { qM } from "./worktree.js";
import { N9l } from "./worktreeUtils_2.js";
import { Le, wt } from "./yBp.js";
import { Cn, Ee, On, Ut, V_, Wt, Xc, ks, pi, vt } from "./ze.js";
var TBf, EBf, IBf, xBf, L9l, rZt, ABf;
export { ABf, EBf, IBf, L9l, TBf, rZt, xBf };
var __wakaru_L2w_initialized = false;
export function L2w() {
if (__wakaru_L2w_initialized) return;
__wakaru_L2w_initialized = true;
"use strict";
E(), at(), at(), at(), pi(), Iw(), qn(), gs(), D9l(), y9e(), vo(), FS(), sye(), O6(), iye(), OCn(), N9l(), TBf = wt("<span class=anysphere-button-truncate-text>"), EBf = wt('<div class="flex items-center">'), IBf = wt("<span class=bg-composer-branch-local-changes-tag>(with local changes)"), xBf = 20, L9l = 100, rZt = "Not synced with remote", ABf = (t)=>{
    const e = Gr(), [n, i] = Wt([]), [r, s] = Wt([]), [o, a] = Wt(new Set), [l, c] = Wt(""), [u, d] = Wt(""), [h, p] = Wt(!1), [g, f] = Wt(!1), _ = vt(()=>g()), [b, y] = Wt(!1), [S, k] = Wt(!1), C = vt(()=>l() === "HEAD"), [T, I] = Wt(0), [A, P, M] = nye();
    let O = !1;
    const N = new ZE;
    On(()=>{
        O = !0, N.dispose(), A() && e.backgroundComposerDataService.setData("isBranchSelectorOpen", !1);
    });
    const U = vt(()=>e.backgroundComposerDataService.workspacePersistentData.cachedBranchSelectionMode ?? tCe.DEFAULT), j = vt(()=>{
        const ce = U();
        return C() ? tCe.DEFAULT : ce === tCe.CURRENT_WITH_CHANGES && !b() && !S() ? tCe.CURRENT : ce;
    });
    Cn(()=>{
        t.onEffectiveBranchModeChange?.(j());
    }), Cn(()=>{
        let ce = !0;
        t.gitState?.ref && (ee(()=>!ce), On(()=>{
            ce = !1;
        }));
    });
    const [$, H] = Wt(null), G = vt(()=>(t.isBranchLoading ?? !1) || h() && !_()), q = ()=>{
        M(), e.backgroundComposerDataService.setData("isBranchSelectorOpen", !1), t.onPickerClose?.();
    }, K = ()=>{
        const ce = $();
        if (ce) {
            const ae = (de = 0)=>{
                de > 20 || requestAnimationFrame(()=>{
                    ce.focus(), document.activeElement !== ce && setTimeout(()=>ae(de + 1), 10);
                });
            };
            ae();
        }
    }, V = `bg-composer-branch-selector-${Math.random().toString(36).substring(2, 15)}`, Y = vt(()=>e.composerDataService.selectedComposerId);
    Cn(()=>{
        const ce = e.composerEventService, ae = Y();
        if (!ae) return;
        const de = ce.onDidRequestOpenBranchMenu(({ composerId: he })=>{
            if (he === ae) {
                const ge = document.getElementById(V)?.getBoundingClientRect();
                ge && (P({
                    x: ge.left - 5,
                    y: ge.bottom + 3
                }), setTimeout(()=>K(), 50), e.backgroundComposerDataService.setData("isBranchSelectorOpen", !0));
            }
        });
        On(()=>{
            de.dispose();
        });
    });
    const J = N6(A9l), Q = vt(()=>{
        const ce = J();
        if (!(!ce || A())) return `Switch base branch (${ce})`;
    }), te = vt(()=>o().has(l())), ee = async (ce)=>{
        const ae = ()=>O || (ce?.() ?? !1);
        await ks(async ()=>{
            try {
                const de = await e.gitContextService.getGitDiff();
                if (ae()) return;
                y((de?.length ?? 0) > 0);
                const he = await e.gitContextService.getCurrentBranch();
                if (ae()) return;
                if (he) try {
                    const ge = e.workspaceContextService.getWorkspace().folders[0];
                    if (ge) {
                        const pe = await e.gitContextService.executeGitCommand(ge.uri.fsPath, [
                            "rev-list",
                            "@{u}..HEAD",
                            "--count"
                        ]);
                        if (ae()) return;
                        const ve = parseInt(pe.trim(), 10);
                        k(!isNaN(ve) && ve > 0);
                    }
                } catch  {
                    if (ae()) return;
                    k(!1);
                }
            } catch (de) {
                if (ae()) return;
                console.error("Error checking git status:", de), y(!1), k(!1);
            }
        });
    }, re = async (ce = !1)=>{
        I(Date.now()), await ks(async ()=>{
            for(let he = 0; he < 5; he++){
                if (O) return;
                try {
                    const ge = Date.now(), pe = async ()=>{
                        try {
                            return await e.gitContextService.getDefaultBranch({
                                withoutOrigin: !0
                            });
                        } catch  {
                            const je = await e.gitContextService.getAllBranchNames({
                                sortBy: "committerdate",
                                includeRemotes: !0
                            });
                            return je?.includes("main") ? "main" : je?.includes("master") ? "master" : je?.[0] || "main";
                        }
                    }, [ve, fe, Te] = await Promise.all([
                        e.gitContextService.getAllBranchNames({
                            sortBy: "committerdate",
                            includeRemotes: !0
                        }).then((je)=>je ?? []),
                        e.gitContextService.getCurrentBranch(),
                        pe()
                    ]);
                    if (O) return;
                    const { localBranchNames: _e, remoteBranchNames: Ce } = kBf(ve), Se = new Set(_e), Pe = new Set(Ce), we = _e.filter((je)=>!Ce.includes(je)), Ie = _e?.filter((je)=>Pe.has(je)), Me = Ce?.filter((je)=>!Se.has(je)), De = [
                        ...Ie,
                        ...Me,
                        ...we
                    ], Ne = [
                        ...Ie,
                        ...Me,
                        ...we
                    ].slice(0, xBf), be = Date.now();
                    if (console.log(`BackgroundComposerBranchSelector: Time taken to fetch branches: ${be - ge}ms`), !Ne) return;
                    if (i(Ne), s(De), a(new Set(we)), c(fe || "main"), d(Te || "main"), ce && t.onGitStateChange) {
                        const je = ks(()=>t.gitState?.ref);
                        if (!(je && je !== "" && je !== "Loading\u2026")) {
                            const Je = e.backgroundComposerDataService.workspacePersistentData.cachedBranchSelectionMode ?? tCe.DEFAULT, Ge = w6p({
                                cachedMode: Je,
                                currentBranch: fe,
                                defaultBranch: Te
                            });
                            t.onGitStateChange?.({
                                ref: Ge,
                                autoBranch: !0,
                                baseRef: void 0,
                                continueRef: Ge
                            });
                        }
                    }
                    break;
                } catch (ge) {
                    console.error(`Error fetching branch data (attempt ${he + 1}/5):`, ge), he === 4 ? console.error("Failed to load branches after all retry attempts") : await Wd(500 * (he + 1));
                }
            }
            ce && !O && f(!0);
        });
    };
    Cn(()=>{
        if (r().length > 0) {
            const ce = ks(()=>t.gitState?.ref);
            if (!ce || ce === "" || ce === "Loading\u2026") return;
            if (!r().some((de)=>de === ce || de === `origin/${ce}` || ce === `origin/${de}`) && (l() || u())) {
                const he = l() || u() || u();
                t.onGitStateChange?.({
                    ref: he,
                    autoBranch: !0,
                    baseRef: void 0,
                    continueRef: he
                });
            }
        }
    }), Xc(()=>{
        re(!0), ee();
        const ce = e.gitContextService.onDidRunGitStatus(()=>{
            ee();
        });
        On(()=>{
            ce.dispose();
        });
    }), Cn(()=>{
        if (A()) {
            const ae = Date.now();
            ae - T() >= 1e4 && (I(ae), re(), ee());
        }
    });
    const [ie, oe] = Wt(null), se = ()=>{
        const ce = t.menuPosition;
        if (ce) return typeof ce == "function" ? ce() ?? null : ce;
        const ae = document.getElementById(V);
        if (!ae) return null;
        const de = ae.getBoundingClientRect();
        return {
            x: de.left - 5,
            y: de.bottom + 3
        };
    };
    Cn(V_(()=>t.requestOpen, (ce)=>{
        if (ce) {
            const ae = se();
            if (!ae) return;
            _() ? (e.backgroundComposerDataService.setData("isBranchSelectorOpen", !0), P(ae), setTimeout(()=>K(), 50)) : oe(ae);
        } else oe(null), A() && q();
    }, {
        defer: !0
    })), Cn(()=>{
        const ce = ie();
        _() && ce && (oe(null), e.backgroundComposerDataService.setData("isBranchSelectorOpen", !0), P(ce), setTimeout(()=>K(), 50));
    }), Cn(()=>{
        t.onPendingOpenChange?.(ie() !== null);
    });
    const le = vt(()=>G() ? "Loading\u2026" : C() ? u() : t.gitState?.ref || "Loading\u2026");
    return [
        (()=>{
            var ce = EBf();
            return Le(ce, Ee(ol, {
                id: V,
                get codicon () {
                    return yt.branch;
                },
                get rightCodicon () {
                    return yt.chevronDown;
                },
                variant: "text",
                class: "!items-center !px-0 !opacity-100 !py-0 box-border !justify-start !text-[12px] !text-[var(--cursor-text-secondary)] anysphere-button-truncate-flex",
                style: {
                    color: "var(--cursor-text-secondary)"
                },
                get iconClass () {
                    return `!text-[13px] ${j() === tCe.CURRENT_WITH_CHANGES ? "bg-composer-branch-dot-with-colored-dot" : void 0}`;
                },
                iconWrapperStyle: {
                    width: "16px",
                    height: "16px",
                    display: "flex",
                    "align-items": "center",
                    "justify-content": "center",
                    "line-height": "1"
                },
                get isLoading () {
                    return G();
                },
                onClick: (ae)=>{
                    const de = ae.currentTarget.getBoundingClientRect();
                    if (!_()) {
                        p(!0);
                        const he = ()=>{
                            _() ? (N.cancel(), p(!1), e.backgroundComposerDataService.setData("isBranchSelectorOpen", !0), P({
                                x: de.left - 5,
                                y: de.bottom + 3
                            }), setTimeout(()=>K(), 50)) : N.cancelAndSet(he, 50);
                        };
                        he();
                        return;
                    }
                    e.backgroundComposerDataService.setData("isBranchSelectorOpen", !0), P({
                        x: de.left - 5,
                        y: de.bottom + 3
                    }), setTimeout(()=>K(), 50);
                },
                get hintText () {
                    return Q();
                },
                rightIconClass: "!text-[14px]",
                get children () {
                    var ae = TBf();
                    return ae.style.setProperty("display", "inline-block"), ae.style.setProperty("max-width", "125px"), ae.style.setProperty("overflow", "hidden"), ae.style.setProperty("text-overflow", "ellipsis"), Le(ae, le), ae;
                }
            })), ce;
        })(),
        Ee(Ut, {
            get when () {
                return A();
            },
            children: (ce)=>{
                const { showHover: ae, hideHover: de } = L6(300), [he, ge] = Wt(""), [pe, ve] = Wt(!1), [fe, Te] = Wt(null), _e = (Pe)=>/^[0-9a-f]+$/i.test(Pe) && Pe.length >= 7, Ce = async (Pe)=>{
                    if (!_e(Pe)) return Te(null), !1;
                    const we = setTimeout(()=>{
                        Te(!1);
                    }, 5e3);
                    try {
                        const Me = !!await e.gitContextService.getCommitRawByCommitHash(Pe);
                        return Te(Me), Me;
                    } catch (Ie) {
                        return console.error("Error validating commit hash:", Ie), Te(!1), !1;
                    } finally{
                        clearTimeout(we);
                    }
                }, Se = vt(()=>{
                    const Pe = he().toLowerCase(), we = (Xe)=>Pe === "" || Xe.toLowerCase().includes(Pe), Ie = (Xe, lt)=>{
                        const He = te(), gt = lt === tCe.CURRENT_WITH_CHANGES;
                        return {
                            title: Xe,
                            customSubTitle: gt ? IBf() : void 0,
                            icon: yt.branch,
                            iconClass: gt ? "bg-composer-branch-dot-with-colored-dot" : void 0,
                            id: `bg-composer-branch-${lt}-${Xe}`,
                            hintText: He ? rZt : void 0,
                            onFocus: He ? (ht)=>{
                                const Ae = ht.currentTarget.closest(".composer-unified-context-menu-item");
                                ae({
                                    content: rZt,
                                    target: Ae || ht.currentTarget,
                                    appearance: {
                                        compact: !0,
                                        showPointer: !0,
                                        skipFadeInAnimation: !0
                                    },
                                    position: {
                                        hoverPosition: Bu.LEFT
                                    },
                                    persistence: {
                                        hideOnHover: !1
                                    },
                                    additionalClasses: [
                                        "chat-hover-tooltip"
                                    ]
                                });
                            } : void 0,
                            onBlur: He ? de : void 0,
                            onClick: ()=>{
                                t.onGitStateChange?.({
                                    ref: Xe,
                                    autoBranch: !0,
                                    baseRef: void 0,
                                    continueRef: Xe
                                }), e.backgroundComposerDataService.setWorkspacePersistentData("cachedStickyRef", !0), e.backgroundComposerDataService.setWorkspacePersistentData("cachedBranchSelectionMode", lt), q();
                            }
                        };
                    }, Me = [];
                    if (we(u())) {
                        const Xe = o().has(u());
                        Me.push({
                            title: u(),
                            subTitle: void 0,
                            icon: yt.branch,
                            id: `bg-composer-branch-${u()}`,
                            hintText: Xe ? rZt : void 0,
                            onFocus: Xe ? (lt)=>{
                                const He = lt.currentTarget.closest(".composer-unified-context-menu-item");
                                ae({
                                    content: rZt,
                                    target: He || lt.currentTarget,
                                    appearance: {
                                        compact: !0,
                                        showPointer: !0,
                                        skipFadeInAnimation: !0
                                    },
                                    position: {
                                        hoverPosition: Bu.LEFT
                                    },
                                    persistence: {
                                        hideOnHover: !1
                                    },
                                    additionalClasses: [
                                        "chat-hover-tooltip"
                                    ]
                                });
                            } : void 0,
                            onBlur: Xe ? de : void 0,
                            onClick: ()=>{
                                t.onGitStateChange?.({
                                    ref: u(),
                                    autoBranch: !0,
                                    baseRef: void 0,
                                    continueRef: u()
                                }), e.backgroundComposerDataService.setWorkspacePersistentData("cachedStickyRef", u() === l()), e.backgroundComposerDataService.setWorkspacePersistentData("cachedBranchSelectionMode", tCe.DEFAULT), q();
                            }
                        });
                    }
                    l() !== u() && we(l()) && !C() && Me.push(Ie(l(), tCe.CURRENT)), (b() || S()) && !C() && Me.push(Ie(l(), tCe.CURRENT_WITH_CHANGES));
                    const De = Me.length > 0 ? {
                        type: "items",
                        title: "Your branches",
                        items: Me
                    } : void 0, be = (Pe !== "" ? r() : n()).filter((Xe)=>Xe !== u() && Xe !== l()).filter(we), je = Pe !== "" ? be.slice(0, L9l) : be;
                    Pe !== "" && be.length > L9l && console.log(`BackgroundComposerBranchSelector: Search "${Pe}" found ${be.length} results, showing ${je.length}`);
                    const $e = je.filter((Xe)=>!Xe.startsWith("cursor/")), Je = je.filter((Xe)=>Xe.startsWith("cursor/")), Ge = h(), xe = (Xe)=>{
                        const lt = o().has(Xe);
                        return {
                            title: Xe,
                            subTitle: void 0,
                            icon: yt.branch,
                            id: `bg-composer-branch-${Xe}`,
                            hintText: lt ? rZt : void 0,
                            onFocus: lt ? (He)=>{
                                const gt = He.currentTarget.closest(".composer-unified-context-menu-item");
                                ae({
                                    content: rZt,
                                    target: gt || He.currentTarget,
                                    appearance: {
                                        compact: !0,
                                        showPointer: !0,
                                        skipFadeInAnimation: !0
                                    },
                                    position: {
                                        hoverPosition: Bu.LEFT
                                    },
                                    persistence: {
                                        hideOnHover: !1
                                    },
                                    additionalClasses: [
                                        "chat-hover-tooltip"
                                    ]
                                });
                            } : void 0,
                            onBlur: lt ? de : void 0,
                            onClick: async ()=>{
                                t.onGitStateChange?.({
                                    ref: Xe,
                                    autoBranch: !0,
                                    baseRef: void 0,
                                    continueRef: Xe
                                }), e.backgroundComposerDataService.setWorkspacePersistentData("cachedStickyRef", !1);
                                try {
                                    const He = e.composerDataService.selectedComposerIds[0];
                                    if (He) {
                                        const ht = (await e.composerDataService.getComposerHandleById(He))?.data.gitWorktree?.worktreePath;
                                        if (ht) {
                                            const { IWorktreeManagerService: Ae } = await Promise.resolve().then(()=>(qM(), gYa)), Be = await e.instantiationService.invokeFunction((Ue)=>Ue.get(Ae)).getWorktree(ht);
                                            if (Be) try {
                                                await Be.checkoutBranch(Xe);
                                            } catch (Ue) {
                                                console.error(`Could not checkout branch ${Xe}, creating new branch:`, Ue), await Be.createBranch(Xe);
                                            }
                                        }
                                    }
                                } catch (He) {
                                    console.error("Error switching branch:", He);
                                }
                                q();
                            }
                        };
                    }, Oe = [
                        ...pe() && he().trim() !== "" && fe() === !0 ? [
                            {
                                type: "items",
                                items: [
                                    {
                                        title: "Use commit hash",
                                        subTitle: he(),
                                        icon: yt.gitCommit,
                                        id: `bg-composer-commit-${he()}`,
                                        onClick: ()=>{
                                            t.onGitStateChange?.({
                                                ref: he(),
                                                autoBranch: !0,
                                                baseRef: void 0,
                                                continueRef: he()
                                            }), e.backgroundComposerDataService.setWorkspacePersistentData("cachedStickyRef", !1), q();
                                        }
                                    }
                                ]
                            },
                            {
                                type: "divider"
                            }
                        ] : [],
                        ...De ? [
                            De,
                            ...je.length > 0 || Ge ? [
                                {
                                    type: "divider"
                                }
                            ] : []
                        ] : [],
                        ...Ge ? [
                            {
                                type: "items",
                                items: [
                                    {
                                        title: "Loading",
                                        subTitle: void 0,
                                        icon: yt.loading,
                                        id: "bg-composer-loading-branches",
                                        onClick: ()=>{}
                                    }
                                ]
                            }
                        ] : $e.length > 0 || Je.length > 0 ? [
                            ...$e.length > 0 ? [
                                {
                                    type: "items",
                                    title: De ? "Other branches" : "Your branches",
                                    items: $e.map(xe)
                                }
                            ] : [],
                            ...$e.length > 0 && Je.length > 0 ? [
                                {
                                    type: "divider"
                                }
                            ] : [],
                            ...Je.length > 0 ? [
                                {
                                    type: "items",
                                    title: "Created by Cursor",
                                    items: Je.map(xe)
                                }
                            ] : []
                        ] : []
                    ], ct = he().trim(), Ye = N2w(ct), Ve = r().some((Xe)=>Xe.toLowerCase() === Ye.toLowerCase()) || u().toLowerCase() === Ye.toLowerCase() || l().toLowerCase() === Ye.toLowerCase();
                    return ct !== "" && !pe() && !Ve && Oe.unshift({
                        type: "items",
                        items: [
                            {
                                id: `bg-composer-create-branch-${Ye}`,
                                title: "New worktree",
                                subTitle: Ye,
                                icon: yt.add,
                                onClick: async ()=>{
                                    try {
                                        const Xe = e.composerDataService.selectedComposerIds[0];
                                        if (!Xe) {
                                            t.onGitStateChange?.({
                                                ref: Ye,
                                                autoBranch: !0,
                                                baseRef: void 0,
                                                continueRef: Ye
                                            }), q();
                                            return;
                                        }
                                        const lt = await e.composerDataService.getComposerHandleById(Xe);
                                        let He = lt?.data.gitWorktree?.worktreePath;
                                        const { IWorktreeManagerService: gt } = await Promise.resolve().then(()=>(qM(), gYa)), ht = e.instantiationService.invokeFunction((ot)=>ot.get(gt));
                                        let Ae;
                                        if (He) {
                                            const ot = await ht.getWorktree(He);
                                            ot && (Ae = ot);
                                        } else {
                                            const ot = await ht.createWorktree({
                                                composerId: Xe
                                            });
                                            ot && (Ae = ot, He = ot.path, e.composerDataService.updateComposerDataSetStore(lt, (Be)=>Be("gitWorktree", {
                                                    worktreePath: ot.path,
                                                    commitHash: ot.commitHash
                                                })));
                                        }
                                        Ae && (await Ae.createBranch(Ye), Ae.setBranchName(Ye), e.composerDataService.updateComposerDataSetStore(lt, (ot)=>ot("gitWorktree", (Be)=>({
                                                    ...Be,
                                                    branchName: Ye
                                                })))), t.onGitStateChange?.({
                                            ref: Ye,
                                            autoBranch: !0,
                                            baseRef: void 0,
                                            continueRef: Ye
                                        });
                                    } catch (Xe) {
                                        console.error("Error creating branch:", Xe);
                                    } finally{
                                        q();
                                    }
                                }
                            }
                        ]
                    }), Oe.length === 0 && Oe.push({
                        type: "message",
                        message: "No branch or commit hash found"
                    }), Oe;
                });
                return Ee(vMe, {
                    shouldMountInPortal: !0,
                    get position () {
                        return ce();
                    },
                    get anchor () {
                        return t.menuAnchor;
                    },
                    onClose: q,
                    shouldShowInput: !0,
                    inputPlaceholder: "Branch or commit hash",
                    width: 300,
                    get allowedOutsideClickElements () {
                        return t.allowedOutsideClickSelectors;
                    },
                    get searchTerm () {
                        return he();
                    },
                    onSearchTermChange: (Pe)=>{
                        ge(Pe);
                        const we = _e(Pe);
                        ve(we), we ? Ce(Pe) : Te(null);
                    },
                    maxHeight: 130,
                    get sections () {
                        return Se();
                    },
                    nonBlockingRoot: `#${V}`,
                    nonBlockingDirection: "vertical",
                    setInputDomRef: H
                });
            }
        })
    ];
};

}
