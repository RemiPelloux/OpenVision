import { $m, D, Eke, Fa, Md, Mm, ZKu, dA, xCo } from "./Iwo.js";
import { Ngr } from "./SZu.js";
import { bo } from "./arrays.js";
import { YFt } from "./collections.js";
import { or, yi } from "./configuration.js";
import { Ld, _a } from "./editorGroupsService.js";
import { NB } from "./glob.js";
import { Nx, gyi } from "./ipa.js";
import { Ji, Li } from "./log.js";
import { du, gd } from "./map.js";
import { Ki, Ot } from "./network.js";
import { Bt } from "./nls.js";
import { Rd, ih } from "./pathService.js";
import { Qxe, Ul, eW, lh, nL } from "./path_2.js";
import { Aa, Lr, gu, tTo } from "./resources.js";
import { wL } from "./search_2.js";
import { ayt } from "./textModelSearch.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn, rt } from "./uri.js";
import { Vp, nh } from "./uriIdentity.js";
import { F, Re } from "./userDataProfile.js";
import { Sr, yr } from "./workspace.js";
import { HKa, IJr, PJr, XKa, YKa, aG1, cG1, lG1, oG1 } from "./yBp.js";
import { e$o } from "./ze.js";
var xCe;
export { xCe };
var __wakaru_f4e_initialized = false;
export function f4e() {
if (__wakaru_f4e_initialized) return;
__wakaru_f4e_initialized = true;
"use strict";
E(), bo(), YFt(), NB(), Nx(), du(), Ki(), Ul(), Lr(), Fa(), To(), fn(), ayt(), Bt(), or(), Ji(), Vp(), Sr(), Ld(), ih(), wL(), xCe = class {
    constructor(t, e, n, i, r, s){
        this.configurationService = t, this.workspaceContextService = e, this.editorGroupsService = n, this.logService = i, this.pathService = r, this.uriIdentityService = s;
    }
    text(t, e, n = {}) {
        t = this.getContentPattern(t, n);
        const i = this.configurationService.getValue(), r = e && e.some((o)=>!this.configurationService.getValue({
                resource: o
            }).search.useRipgrep);
        return {
            ...this.commonQuery(e?.map(Ngr), n),
            type: 2,
            contentPattern: t,
            previewOptions: n.previewOptions,
            maxFileSize: n.maxFileSize,
            usePCRE2: i.search.usePCRE2 || r || !1,
            surroundingContext: n.surroundingContext,
            userDisabledExcludesAndIgnoreFiles: n.disregardExcludeSettings && n.disregardIgnoreFiles,
            useIndex: n.useIndex
        };
    }
    textFromFileList(t, e, n = {}) {
        t = this.getContentPattern(t, n);
        const i = this.configurationService.getValue(), r = this.commonQuery([], n), s = e.filter((a)=>IJr(r, a.fsPath));
        return {
            ...this.commonQueryFromFileList(s),
            _reason: n._reason,
            type: 2,
            contentPattern: t,
            previewOptions: n.previewOptions,
            maxFileSize: n.maxFileSize,
            maxResults: n.maxResults,
            usePCRE2: i.search.usePCRE2 || !1,
            surroundingContext: n.surroundingContext,
            useIndex: n.useIndex
        };
    }
    getContentPattern(t, e) {
        const n = this.configurationService.getValue();
        t.isRegExp && (t.pattern = t.pattern.replace(/\r?\n/g, "\\n"));
        const i = {
            ...t,
            wordSeparators: n.editor.wordSeparators
        };
        return this.isCaseSensitive(t, e) && (i.isCaseSensitive = !0), this.isMultiline(t) && (i.isMultiline = !0), e.notebookSearchConfig?.includeMarkupInput && (i.notebookInfo || (i.notebookInfo = {}), i.notebookInfo.isInNotebookMarkdownInput = e.notebookSearchConfig.includeMarkupInput), e.notebookSearchConfig?.includeMarkupPreview && (i.notebookInfo || (i.notebookInfo = {}), i.notebookInfo.isInNotebookMarkdownPreview = e.notebookSearchConfig.includeMarkupPreview), e.notebookSearchConfig?.includeCodeInput && (i.notebookInfo || (i.notebookInfo = {}), i.notebookInfo.isInNotebookCellInput = e.notebookSearchConfig.includeCodeInput), e.notebookSearchConfig?.includeOutput && (i.notebookInfo || (i.notebookInfo = {}), i.notebookInfo.isInNotebookCellOutput = e.notebookSearchConfig.includeOutput), i;
    }
    file(t, e = {}) {
        return {
            ...this.commonQuery(t, e),
            type: 1,
            filePattern: e.filePattern ? e.filePattern.trim() : e.filePattern,
            exists: e.exists,
            sortByScore: e.sortByScore,
            cacheKey: e.cacheKey,
            shouldGlobMatchFilePattern: e.shouldGlobSearch,
            maxDepth: e.maxDepth
        };
    }
    handleIncludeExclude(t, e) {
        if (!t) return {};
        if (Array.isArray(t)) {
            if (t = t.filter((n)=>n.length > 0).map(PJr), !t.length) return {};
        } else t = PJr(t);
        return e ? this.parseSearchPaths(t) : {
            pattern: YKa(...Array.isArray(t) ? t : [
                t
            ])
        };
    }
    commonQuery(t = [], e = {}) {
        let n = Array.isArray(e.excludePattern) ? e.excludePattern.map((c)=>c.pattern).flat() : e.excludePattern;
        n = n?.length === 1 ? n[0] : n;
        const i = this.handleIncludeExclude(e.includePattern, e.expandPatterns), r = this.handleIncludeExclude(n, e.expandPatterns), s = t.length > 1, o = (i.searchPaths && i.searchPaths.length ? i.searchPaths.map((c)=>this.getFolderQueryForSearchPath(c, e, r)) : t.map((c)=>this.getFolderQueryForRoot(c, e, r, s))).filter((c)=>!!c), a = {
            _reason: e._reason,
            folderQueries: o,
            usingSearchPaths: !!(i.searchPaths && i.searchPaths.length),
            extraFileResources: e.extraFileResources,
            excludePattern: r.pattern,
            includePattern: i.pattern,
            onlyOpenEditors: e.onlyOpenEditors,
            maxResults: e.maxResults,
            onlyFileScheme: e.onlyFileScheme
        };
        if (e.onlyOpenEditors) {
            const c = Mm(this.editorGroupsService.groups.flatMap((h)=>h.editors.map((p)=>p.resource)));
            this.logService.trace("QueryBuilder#commonQuery - openEditor URIs", JSON.stringify(c));
            const u = c.filter((h)=>IJr(a, h.fsPath)), d = this.commonQueryFromFileList(u);
            return this.logService.trace("QueryBuilder#commonQuery - openEditor Query", JSON.stringify(d)), {
                ...a,
                ...d
            };
        }
        const l = e.extraFileResources && e.extraFileResources.filter((c)=>IJr(a, c.fsPath));
        return a.extraFileResources = l && l.length ? l : void 0, a;
    }
    commonQueryFromFileList(t) {
        const e = [], n = new gd, i = {};
        let r = !1;
        return t.forEach((s)=>{
            if (s.scheme === Ot.walkThrough) return;
            if (tTo(s)) {
                const a = this.workspaceContextService.getWorkspaceFolder(s)?.uri ?? this.uriIdentityService.extUri.dirname(s);
                let l = n.get(a);
                l || (r = !0, l = {
                    folder: a,
                    includePattern: {}
                }, e.push(l), n.set(a, l));
                const c = Qxe(a.fsPath, s.fsPath);
                Md(l.includePattern)[c.replace(/\\/g, "/")] = !0;
            } else s.fsPath && (r = !0, i[s.fsPath] = !0);
        }), {
            folderQueries: e,
            includePattern: i,
            usingSearchPaths: !0,
            excludePattern: r ? void 0 : {
                "**/*": !0
            }
        };
    }
    isCaseSensitive(t, e) {
        if (e.isSmartCase) {
            if (t.isRegExp) {
                if (xCo(t.pattern, !0)) return !0;
            } else if (xCo(t.pattern)) return !0;
        }
        return !!t.isCaseSensitive;
    }
    isMultiline(t) {
        return t.isMultiline || t.isRegExp && e$o(t.pattern) || t.pattern.indexOf(`
`) >= 0 ? !0 : !!t.isMultiline;
    }
    parseSearchPaths(t) {
        const e = (u)=>eW(u) || /^\.\.?([\/\\]|$)/.test(u), i = (Array.isArray(t) ? t : lG1(t)).map((u)=>{
            const d = this.pathService.resolvedUserHome;
            return d ? gyi(u, d.scheme === Ot.file ? d.fsPath : d.path) : u;
        }), r = ZKu(i, (u)=>e(u) ? "searchPaths" : "exprSegments"), s = (r.exprSegments || []).map((u)=>Eke(u, "/")).map((u)=>Eke(u, "\\")).map((u)=>(u[0] === "." && (u = "*" + u), cG1(u))), o = {}, a = this.expandSearchPathPatterns(r.searchPaths || []);
        a && a.length && (o.searchPaths = a);
        const l = s.flat(), c = YKa(...l);
        return c && (o.pattern = c), o;
    }
    getExcludesForFolder(t, e) {
        return e.disregardExcludeSettings ? void 0 : HKa(t, !e.disregardSearchExcludeSettings);
    }
    expandSearchPathPatterns(t) {
        if (!t || !t.length) return [];
        const e = t.flatMap((i)=>{
            let { pathPortion: r, globPortion: s } = aG1(i);
            return s && (s = XKa(s)), this.expandOneSearchPath(r).flatMap((a)=>this.resolveOneSearchPathPattern(a, s));
        }), n = new Map;
        return e.forEach((i)=>{
            const r = i.searchPath.toString(), s = n.get(r);
            s ? i.pattern && (s.pattern = s.pattern || {}, s.pattern[i.pattern] = !0) : n.set(r, {
                searchPath: i.searchPath,
                pattern: i.pattern ? YKa(i.pattern) : void 0
            });
        }), Array.from(n.values());
    }
    expandOneSearchPath(t) {
        if (eW(t)) {
            const e = this.workspaceContextService.getWorkspace().folders;
            return e[0] && e[0].uri.scheme !== Ot.file ? [
                {
                    searchPath: e[0].uri.with({
                        path: t
                    })
                }
            ] : [
                {
                    searchPath: rt.file(nL(t))
                }
            ];
        }
        if (this.workspaceContextService.getWorkbenchState() === 2) {
            const e = this.workspaceContextService.getWorkspace().folders[0].uri;
            if (t = PJr(t), t.startsWith("../") || t === "..") {
                const i = lh.resolve(e.path, t);
                return [
                    {
                        searchPath: e.with({
                            path: i
                        })
                    }
                ];
            }
            const n = XKa(t);
            return [
                {
                    searchPath: e,
                    pattern: n
                }
            ];
        } else {
            if (t === "./" || t === ".\\") return [];
            {
                const e = t.replace(/^\.[\/\\]/, ""), i = this.workspaceContextService.getWorkspace().folders.map((r)=>{
                    const s = e.match(new RegExp(`^${dA(r.name)}(?:/(.*)|$)`));
                    return s ? {
                        match: s,
                        folder: r
                    } : null;
                }).filter($m);
                if (i.length) return i.map((r)=>{
                    const s = r.match[1];
                    return {
                        searchPath: r.folder.uri,
                        pattern: s && XKa(s)
                    };
                });
                {
                    const r = t.match(/\.[\/\\](.+)[\/\\]?/), s = r ? r[1] : t, o = D(12999, null, s);
                    throw new Error(o);
                }
            }
        }
    }
    resolveOneSearchPathPattern(t, e) {
        const n = t.pattern && e ? `${t.pattern}/${e}` : t.pattern || e, i = [
            {
                searchPath: t.searchPath,
                pattern: n
            }
        ];
        return n && !n.endsWith("**") && i.push({
            searchPath: t.searchPath,
            pattern: n + "/**"
        }), i;
    }
    getFolderQueryForSearchPath(t, e, n) {
        const i = this.getFolderQueryForRoot(Ngr(t.searchPath), e, n, !1);
        return i ? {
            ...i,
            includePattern: t.pattern
        } : null;
    }
    getFolderQueryForRoot(t, e, n, i) {
        let r;
        const s = rt.isUri(t) ? t : t.uri;
        let o = e.excludePattern?.map((h)=>{
            const p = e.excludePattern && oG1(h) ? h.uri : void 0;
            return !p || !(rt.isUri(t) && this.uriIdentityService.extUri.isEqual(t, p)) ? p : void 0;
        });
        if (o?.length || (o = [
            void 0
        ]), n.searchPaths) {
            const h = n.searchPaths.filter((p)=>gu(p.searchPath, s))[0];
            if (h && !h.pattern) return null;
            h && (r = h.pattern);
        }
        const a = this.configurationService.getValue({
            resource: s
        }), c = {
            ...this.getExcludesForFolder(a, e) || {},
            ...r || {}
        }, u = rt.isUri(t) ? Aa(t) : t.name, d = o.map((h)=>Object.keys(c).length > 0 ? {
                folder: h,
                pattern: c
            } : void 0).filter((h)=>h);
        return {
            folder: s,
            folderName: i ? u : void 0,
            excludePattern: d,
            fileEncoding: a.files && a.files.encoding,
            disregardIgnoreFiles: typeof e.disregardIgnoreFiles == "boolean" ? e.disregardIgnoreFiles : !a.search.useIgnoreFiles,
            disregardGlobalIgnoreFiles: typeof e.disregardGlobalIgnoreFiles == "boolean" ? e.disregardGlobalIgnoreFiles : !a.search.useGlobalIgnoreFiles,
            disregardParentIgnoreFiles: typeof e.disregardParentIgnoreFiles == "boolean" ? e.disregardParentIgnoreFiles : !a.search.useParentIgnoreFiles,
            ignoreSymlinks: typeof e.ignoreSymlinks == "boolean" ? e.ignoreSymlinks : !a.search.followSymlinks
        };
    }
}, xCe = Re([
    F(0, yi),
    F(1, yr),
    F(2, _a),
    F(3, Li),
    F(4, Rd),
    F(5, nh)
], xCe);

}
