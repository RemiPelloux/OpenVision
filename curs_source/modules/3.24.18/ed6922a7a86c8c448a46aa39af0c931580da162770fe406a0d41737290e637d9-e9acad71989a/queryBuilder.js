import { $Dv, BDv, Cqi, HDv, Iqi, L2n, UDv, cmo, lmo } from "./A3u.js";
import { mHs, sT } from "./De_3.js";
import { Hqr, Ps, S, Tl, Vie, ZLt, l1, qu, tl } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { dr } from "./arrays.js";
import { lge } from "./collections.js";
import { Cn, qt } from "./configuration.js";
import { Nc, gs } from "./editorGroupsService.js";
import { qM } from "./glob.js";
import { Qn, Wn } from "./log.js";
import { Mc, oc } from "./map.js";
import { gt, li } from "./network.js";
import { rt } from "./nls.js";
import { fu, zl } from "./pathService.js";
import { Eu, X3e, ba, e2, gD } from "./path_2.js";
import { WQr, tvi } from "./qIc.js";
import { Ac, Li, fo, vzr } from "./resources.js";
import { sE } from "./search_2.js";
import { zBe } from "./textModelSearch.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
import { Ee, Qt } from "./uri.js";
import { Ea, rl } from "./uriIdentity.js";
import { Jn, ci } from "./workspace.js";
var nq;
export { nq };
var __wakaru_qee_initialized = false;
export function qee() {
if (__wakaru_qee_initialized) return;
__wakaru_qee_initialized = true;
"use strict";
x(), dr(), lge(), qM(), sT(), oc(), li(), ba(), Li(), Ps(), gr(), Qt(), zBe(), rt(), Cn(), Qn(), rl(), ci(), Nc(), fu(), sE(), nq = class {
    constructor(e, t, n, i, r, s){
        this.configurationService = e, this.workspaceContextService = t, this.editorGroupsService = n, this.logService = i, this.pathService = r, this.uriIdentityService = s;
    }
    text(e, t, n = {}) {
        e = this.getContentPattern(e, n);
        const i = this.configurationService.getValue(), r = t && t.some((o)=>!this.configurationService.getValue({
                resource: o
            }).search.useRipgrep);
        return {
            ...this.commonQuery(t?.map(tvi), n),
            type: 2,
            contentPattern: e,
            previewOptions: n.previewOptions,
            maxFileSize: n.maxFileSize,
            usePCRE2: i.search.usePCRE2 || r || !1,
            surroundingContext: n.surroundingContext,
            userDisabledExcludesAndIgnoreFiles: n.disregardExcludeSettings && n.disregardIgnoreFiles,
            useIndex: n.useIndex
        };
    }
    textFromFileList(e, t, n = {}) {
        e = this.getContentPattern(e, n);
        const i = this.configurationService.getValue(), r = this.commonQuery([], n), s = t.filter((a)=>L2n(r, a.fsPath));
        return {
            ...this.commonQueryFromFileList(s),
            _reason: n._reason,
            type: 2,
            contentPattern: e,
            previewOptions: n.previewOptions,
            maxFileSize: n.maxFileSize,
            maxResults: n.maxResults,
            usePCRE2: i.search.usePCRE2 || !1,
            surroundingContext: n.surroundingContext,
            useIndex: n.useIndex
        };
    }
    getContentPattern(e, t) {
        const n = this.configurationService.getValue();
        e.isRegExp && (e.pattern = e.pattern.replace(/\r?\n/g, "\\n"));
        const i = {
            ...e,
            wordSeparators: n.editor.wordSeparators
        };
        return this.isCaseSensitive(e, t) && (i.isCaseSensitive = !0), this.isMultiline(e) && (i.isMultiline = !0), t.notebookSearchConfig?.includeMarkupInput && (i.notebookInfo || (i.notebookInfo = {}), i.notebookInfo.isInNotebookMarkdownInput = t.notebookSearchConfig.includeMarkupInput), t.notebookSearchConfig?.includeMarkupPreview && (i.notebookInfo || (i.notebookInfo = {}), i.notebookInfo.isInNotebookMarkdownPreview = t.notebookSearchConfig.includeMarkupPreview), t.notebookSearchConfig?.includeCodeInput && (i.notebookInfo || (i.notebookInfo = {}), i.notebookInfo.isInNotebookCellInput = t.notebookSearchConfig.includeCodeInput), t.notebookSearchConfig?.includeOutput && (i.notebookInfo || (i.notebookInfo = {}), i.notebookInfo.isInNotebookCellOutput = t.notebookSearchConfig.includeOutput), i;
    }
    file(e, t = {}) {
        return {
            ...this.commonQuery(e, t),
            type: 1,
            filePattern: t.filePattern ? t.filePattern.trim() : t.filePattern,
            exists: t.exists,
            sortByScore: t.sortByScore,
            cacheKey: t.cacheKey,
            shouldGlobMatchFilePattern: t.shouldGlobSearch,
            maxDepth: t.maxDepth
        };
    }
    handleIncludeExclude(e, t) {
        if (!e) return {};
        if (Array.isArray(e)) {
            if (e = e.filter((n)=>n.length > 0).map(Iqi), !e.length) return {};
        } else e = Iqi(e);
        return t ? this.parseSearchPaths(e) : {
            pattern: cmo(...Array.isArray(e) ? e : [
                e
            ])
        };
    }
    commonQuery(e = [], t = {}) {
        let n = Array.isArray(t.excludePattern) ? t.excludePattern.map((l)=>l.pattern).flat() : t.excludePattern;
        n = n?.length === 1 ? n[0] : n;
        const i = this.handleIncludeExclude(t.includePattern, t.expandPatterns), r = this.handleIncludeExclude(n, t.expandPatterns), s = e.length > 1, o = (i.searchPaths && i.searchPaths.length ? i.searchPaths.map((l)=>this.getFolderQueryForSearchPath(l, t, r)) : e.map((l)=>this.getFolderQueryForRoot(l, t, r, s))).filter((l)=>!!l), a = {
            _reason: t._reason,
            folderQueries: o,
            usingSearchPaths: !!(i.searchPaths && i.searchPaths.length),
            extraFileResources: t.extraFileResources,
            excludePattern: r.pattern,
            includePattern: i.pattern,
            onlyOpenEditors: t.onlyOpenEditors,
            maxResults: t.maxResults,
            onlyFileScheme: t.onlyFileScheme
        };
        if (t.onlyOpenEditors) {
            const l = qu(this.editorGroupsService.groups.flatMap((p)=>p.editors.map((g)=>g.resource)));
            this.logService.trace("QueryBuilder#commonQuery - openEditor URIs", JSON.stringify(l));
            const u = l.filter((p)=>L2n(a, p.fsPath)), h = this.commonQueryFromFileList(u);
            return this.logService.trace("QueryBuilder#commonQuery - openEditor Query", JSON.stringify(h)), {
                ...a,
                ...h
            };
        }
        const c = t.extraFileResources && t.extraFileResources.filter((l)=>L2n(a, l.fsPath));
        return a.extraFileResources = c && c.length ? c : void 0, a;
    }
    commonQueryFromFileList(e) {
        const t = [], n = new Mc, i = {};
        let r = !1;
        return e.forEach((s)=>{
            if (s.scheme === gt.walkThrough) return;
            if (vzr(s)) {
                const a = this.workspaceContextService.getWorkspaceFolder(s)?.uri ?? this.uriIdentityService.extUri.dirname(s);
                let c = n.get(a);
                c || (r = !0, c = {
                    folder: a,
                    includePattern: {}
                }, t.push(c), n.set(a, c));
                const l = X3e(a.fsPath, s.fsPath);
                tl(c.includePattern)[l.replace(/\\/g, "/")] = !0;
            } else s.fsPath && (r = !0, i[s.fsPath] = !0);
        }), {
            folderQueries: t,
            includePattern: i,
            usingSearchPaths: !0,
            excludePattern: r ? void 0 : {
                "**/*": !0
            }
        };
    }
    isCaseSensitive(e, t) {
        if (t.isSmartCase) {
            if (e.isRegExp) {
                if (Hqr(e.pattern, !0)) return !0;
            } else if (Hqr(e.pattern)) return !0;
        }
        return !!e.isCaseSensitive;
    }
    isMultiline(e) {
        return e.isMultiline || e.isRegExp && WQr(e.pattern) || e.pattern.indexOf(`
`) >= 0 ? !0 : !!e.isMultiline;
    }
    parseSearchPaths(e) {
        const t = (u)=>e2(u) || /^\.\.?([\/\\]|$)/.test(u), i = (Array.isArray(e) ? e : $Dv(e)).map((u)=>{
            const h = this.pathService.resolvedUserHome;
            return h ? mHs(u, h.scheme === gt.file ? h.fsPath : h.path) : u;
        }), r = ZLt(i, (u)=>t(u) ? "searchPaths" : "exprSegments"), s = (r.exprSegments || []).map((u)=>Vie(u, "/")).map((u)=>Vie(u, "\\")).map((u)=>(u[0] === "." && (u = "*" + u), HDv(u))), o = {}, a = this.expandSearchPathPatterns(r.searchPaths || []);
        a && a.length && (o.searchPaths = a);
        const c = s.flat(), l = cmo(...c);
        return l && (o.pattern = l), o;
    }
    getExcludesForFolder(e, t) {
        return t.disregardExcludeSettings ? void 0 : Cqi(e, !t.disregardSearchExcludeSettings);
    }
    expandSearchPathPatterns(e) {
        if (!e || !e.length) return [];
        const t = e.flatMap((i)=>{
            let { pathPortion: r, globPortion: s } = UDv(i);
            return s && (s = lmo(s)), this.expandOneSearchPath(r).flatMap((a)=>this.resolveOneSearchPathPattern(a, s));
        }), n = new Map;
        return t.forEach((i)=>{
            const r = i.searchPath.toString(), s = n.get(r);
            s ? i.pattern && (s.pattern = s.pattern || {}, s.pattern[i.pattern] = !0) : n.set(r, {
                searchPath: i.searchPath,
                pattern: i.pattern ? cmo(i.pattern) : void 0
            });
        }), Array.from(n.values());
    }
    expandOneSearchPath(e) {
        if (e2(e)) {
            const t = this.workspaceContextService.getWorkspace().folders;
            return t[0] && t[0].uri.scheme !== gt.file ? [
                {
                    searchPath: t[0].uri.with({
                        path: e
                    })
                }
            ] : [
                {
                    searchPath: Ee.file(gD(e))
                }
            ];
        }
        if (this.workspaceContextService.getWorkbenchState() === 2) {
            const t = this.workspaceContextService.getWorkspace().folders[0].uri;
            if (e = Iqi(e), e.startsWith("../") || e === "..") {
                const i = Eu.resolve(t.path, e);
                return [
                    {
                        searchPath: t.with({
                            path: i
                        })
                    }
                ];
            }
            const n = lmo(e);
            return [
                {
                    searchPath: t,
                    pattern: n
                }
            ];
        } else {
            if (e === "./" || e === ".\\") return [];
            {
                const t = e.replace(/^\.[\/\\]/, ""), i = this.workspaceContextService.getWorkspace().folders.map((r)=>{
                    const s = t.match(new RegExp(`^${l1(r.name)}(?:/(.*)|$)`));
                    return s ? {
                        match: s,
                        folder: r
                    } : null;
                }).filter(Tl);
                if (i.length) return i.map((r)=>{
                    const s = r.match[1];
                    return {
                        searchPath: r.folder.uri,
                        pattern: s && lmo(s)
                    };
                });
                {
                    const r = e.match(/\.[\/\\](.+)[\/\\]?/), s = r ? r[1] : e, o = S(12999, null, s);
                    throw new Error(o);
                }
            }
        }
    }
    resolveOneSearchPathPattern(e, t) {
        const n = e.pattern && t ? `${e.pattern}/${t}` : e.pattern || t, i = [
            {
                searchPath: e.searchPath,
                pattern: n
            }
        ];
        return n && !n.endsWith("**") && i.push({
            searchPath: e.searchPath,
            pattern: n + "/**"
        }), i;
    }
    getFolderQueryForSearchPath(e, t, n) {
        const i = this.getFolderQueryForRoot(tvi(e.searchPath), t, n, !1);
        return i ? {
            ...i,
            includePattern: e.pattern
        } : null;
    }
    getFolderQueryForRoot(e, t, n, i) {
        let r;
        const s = Ee.isUri(e) ? e : e.uri;
        let o = t.excludePattern?.map((p)=>{
            const g = t.excludePattern && BDv(p) ? p.uri : void 0;
            return !g || !(Ee.isUri(e) && this.uriIdentityService.extUri.isEqual(e, g)) ? g : void 0;
        });
        if (o?.length || (o = [
            void 0
        ]), n.searchPaths) {
            const p = n.searchPaths.filter((g)=>Ac(g.searchPath, s))[0];
            if (p && !p.pattern) return null;
            p && (r = p.pattern);
        }
        const a = this.configurationService.getValue({
            resource: s
        }), l = {
            ...this.getExcludesForFolder(a, t) || {},
            ...r || {}
        }, u = Ee.isUri(e) ? fo(e) : e.name, h = o.map((p)=>Object.keys(l).length > 0 ? {
                folder: p,
                pattern: l
            } : void 0).filter((p)=>p);
        return {
            folder: s,
            folderName: i ? u : void 0,
            excludePattern: h,
            fileEncoding: a.files && a.files.encoding,
            disregardIgnoreFiles: typeof t.disregardIgnoreFiles == "boolean" ? t.disregardIgnoreFiles : !a.search.useIgnoreFiles,
            disregardGlobalIgnoreFiles: typeof t.disregardGlobalIgnoreFiles == "boolean" ? t.disregardGlobalIgnoreFiles : !a.search.useGlobalIgnoreFiles,
            disregardParentIgnoreFiles: typeof t.disregardParentIgnoreFiles == "boolean" ? t.disregardParentIgnoreFiles : !a.search.useParentIgnoreFiles,
            ignoreSymlinks: typeof t.ignoreSymlinks == "boolean" ? t.ignoreSymlinks : !a.search.followSymlinks
        };
    }
}, nq = ie([
    C(0, qt),
    C(1, Jn),
    C(2, gs),
    C(3, Wn),
    C(4, zl),
    C(5, Ea)
], nq);

}
