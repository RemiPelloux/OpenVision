import { Gt, Qe, st, tt } from "./Iwo.js";
import { Il, bn } from "./SZu.js";
import { X4 } from "./Sol.js";
import { Fol, Ool } from "./appLayoutContextKeys.js";
import { nr, rs } from "./commands.js";
import { Hi, Rr } from "./contextkey.js";
import { Rn } from "./extensions.js";
import { id, ld } from "./extensions_4.js";
import { iv } from "./index_16.js";
import { It } from "./instantiation.js";
import { Fp, zp } from "./lifecycle_2.js";
import { Ks, Wr } from "./notification.js";
import { Jc } from "./observable.js";
import { Zi, ki } from "./storage_2.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Ai, Xo } from "./uuid_2.js";
import { bc, ze } from "./ze.js";
var Gag, qag, X4e, NP;
export { Gag, NP, X4e, qag };
var __wakaru_YCe_initialized = false;
export function YCe() {
if (__wakaru_YCe_initialized) return;
__wakaru_YCe_initialized = true;
"use strict";
E(), iv(), Gt(), Qe(), Jc(), Xo(), rs(), Hi(), Rn(), It(), Ks(), Zi(), ld(), zp(), Fol(), Gag = ze.object({
    url: ze.string().min(1),
    title: ze.string().catch(""),
    favicon: ze.string().catch(""),
    visitCount: ze.number().catch(1),
    lastVisited: ze.number().catch(0)
}), qag = ze.array(Gag), X4e = Il("browserAutomationService"), NP = class extends st {
    constructor(t, e, n, i, r, s){
        super(), this.commandService = t, this.notificationService = e, this.storageService = n, this.extensionService = i, this.contextKeyService = r, this.lifecycleService = s, this._onNavigateRequest = this._register(new tt), this.onNavigateRequest = this._onNavigateRequest.event, this._onDevToolsRequest = this._register(new tt), this.onDevToolsRequest = this._onDevToolsRequest.event, this._pendingDevToolsRequest = !1, this._onDidAddBookmark = this._register(new tt), this.onDidAddBookmark = this._onDidAddBookmark.event, this._onDidRemoveBookmark = this._register(new tt), this.onDidRemoveBookmark = this._onDidRemoveBookmark.event, this._onDidReorderBookmarks = this._register(new tt), this.onDidReorderBookmarks = this._onDidReorderBookmarks.event, this._onDidChangeBookmarkBar = this._register(new tt), this.onDidChangeBookmarkBar = this._onDidChangeBookmarkBar.event, this._onDidChangeBookmarkBarVisible = this._register(new tt), this.onDidChangeBookmarkBarVisible = this._onDidChangeBookmarkBarVisible.event, this._onDidChangeHistory = this._register(new tt), this.onDidChangeHistory = this._onDidChangeHistory.event, this._settableEnabled = bc("BrowserAutomationService.enabled", !0), this.enabled = this._settableEnabled, this._enabledContextKey = Ool.bindTo(this.contextKeyService), this._enabledContextKey.set(this._settableEnabled.get()), this.tabState = bc("BrowserAutomationService.tabState", void 0);
    }
    getStorageKey(t, e) {
        return t ? `browserAutomation.${t}.${e}` : `browserAutomation.${e}`;
    }
    getLastUrl(t) {
        return this.storageService.get(this.getStorageKey(t, "lastUrl"), 1);
    }
    saveLastUrl(t, e) {
        this.storageService.store(this.getStorageKey(e, "lastUrl"), t, 1, 1);
    }
    getSavedZoomLevel(t) {
        const e = this.storageService.getNumber(this.getStorageKey(t, "zoomLevel"), 1);
        return e !== void 0 ? e : void 0;
    }
    saveZoomLevel(t, e) {
        this.storageService.store(this.getStorageKey(e, "zoomLevel"), t, 1, 1);
    }
    getHostZoomLevel(t) {
        const e = this.storageService.get(NP.STORAGE_KEY_HOST_ZOOM, 0);
        if (e) try {
            const n = JSON.parse(e);
            return typeof n[t] == "number" ? n[t] : void 0;
        } catch  {
            return;
        }
    }
    saveHostZoomLevel(t, e) {
        const n = this.storageService.get(NP.STORAGE_KEY_HOST_ZOOM, 0);
        let i = {};
        if (n) try {
            i = JSON.parse(n);
        } catch  {
            i = {};
        }
        e === 0 ? delete i[t] : i[t] = e, this.storageService.store(NP.STORAGE_KEY_HOST_ZOOM, JSON.stringify(i), 0, 1);
    }
    getBookmarkBarItems(t = 1) {
        const e = this.storageService.get(NP.STORAGE_KEY_BOOKMARKS, t);
        if (!e) return [];
        try {
            const n = JSON.parse(e);
            return Array.isArray(n) ? n : [];
        } catch  {
            return [];
        }
    }
    saveBookmarkBarItems(t, e = 1) {
        this.saveItems(t, e), this._onDidChangeBookmarkBar.fire();
    }
    createBookmarkFolder(t, e = 1) {
        return {
            type: "folder",
            id: Ai(),
            name: t,
            children: []
        };
    }
    getBookmarks(t = 1) {
        const e = this.getBookmarkBarItems(t), n = [];
        for (const i of e)X4(i) ? n.push(...i.children) : n.push(i);
        return n;
    }
    addBookmark(t, e, n, i, r = 1) {
        const s = this.getBookmarkBarItems(r);
        if (this.getBookmarks(r).findIndex((l)=>l.url === t) === -1) {
            const l = {
                url: t,
                title: e,
                favicon: n,
                timestamp: Date.now(),
                customName: i
            };
            s.push(l), this.saveItems(s, r), this._onDidAddBookmark.fire(l), this._onDidChangeBookmarkBar.fire();
        }
    }
    removeBookmark(t, e = 1) {
        const n = this.getBookmarkBarItems(e);
        let i = !1;
        const r = n.filter((s)=>!X4(s) && s.url === t ? (i = !0, !1) : !0).map((s)=>{
            if (X4(s)) {
                const o = s.children.filter((a)=>a.url !== t);
                if (o.length !== s.children.length) return i = !0, {
                    ...s,
                    children: o
                };
            }
            return s;
        });
        i && (this.saveItems(r, e), this._onDidRemoveBookmark.fire(t), this._onDidChangeBookmarkBar.fire());
    }
    reorderBookmarks(t, e = 1) {
        const i = this.getBookmarkBarItems(e).filter(X4), r = new Set;
        for (const a of i)for (const l of a.children)r.add(l.url);
        const s = t.filter((a)=>!r.has(a.url)), o = [
            ...s,
            ...i
        ];
        this.saveItems(o, e), this._onDidReorderBookmarks.fire(s);
    }
    isBookmarked(t, e = 1) {
        return this.getBookmarkBarItems(e).some((i)=>X4(i) ? i.children.some((r)=>r.url === t) : i.url === t);
    }
    renameBookmark(t, e, n = 1) {
        const i = this.getBookmarkBarItems(n);
        let r;
        const s = i.map((o)=>{
            if (!X4(o) && o.url === t) return r = {
                ...o,
                customName: e
            }, r;
            if (X4(o)) {
                const a = o.children.map((l)=>l.url === t ? (r = {
                        ...l,
                        customName: e
                    }, r) : l);
                if (r) return {
                    ...o,
                    children: a
                };
            }
            return o;
        });
        r && (this.saveItems(s, n), this._onDidAddBookmark.fire(r), this._onDidChangeBookmarkBar.fire());
    }
    moveBookmarkToFolder(t, e, n, i = 0) {
        const r = this.getBookmarkBarItems(i), { items: s, bookmark: o, sourceFolderId: a, sourceChildIndex: l } = this.findAndRemoveBookmark(r, t);
        if (!o || n !== void 0 && a === e && l === n) return;
        let c = !1;
        const u = s.map((d)=>{
            if (X4(d) && d.id === e) {
                const h = [
                    ...d.children
                ];
                if (n !== void 0) {
                    let p = n;
                    a === e && l !== void 0 && l < p && p--, h.splice(Math.min(p, h.length), 0, o);
                } else h.push(o);
                return c = !0, {
                    ...d,
                    children: h
                };
            }
            return d;
        });
        c && this.saveBookmarkBarItems(u, i);
    }
    moveBookmarkToBarAt(t, e, n = 0) {
        const i = this.getBookmarkBarItems(n), { items: r, bookmark: s } = this.findAndRemoveBookmark(i, t);
        if (!s) return;
        const o = i.findIndex((c)=>!X4(c) && c.url === t);
        let a = e;
        o >= 0 && o < e && a--;
        const l = [
            ...r
        ];
        l.splice(Math.min(a, l.length), 0, s), this.saveBookmarkBarItems(l, n);
    }
    reorderBarItem(t, e, n = 0) {
        if (t === e || t + 1 === e) return;
        const i = this.getBookmarkBarItems(n);
        if (t < 0 || t >= i.length) return;
        const r = [
            ...i
        ], [s] = r.splice(t, 1), o = e > t ? e - 1 : e;
        r.splice(o, 0, s), this.saveBookmarkBarItems(r, n);
    }
    renameFolder(t, e, n = 0) {
        const i = this.getBookmarkBarItems(n);
        let r = !1;
        const s = i.map((o)=>X4(o) && o.id === t ? (r = !0, {
                ...o,
                name: e
            }) : o);
        r && this.saveBookmarkBarItems(s, n);
    }
    deleteFolder(t, e = 0) {
        const n = this.getBookmarkBarItems(e), i = [];
        for (const r of n)X4(r) && r.id === t ? i.push(...r.children) : i.push(r);
        this.saveBookmarkBarItems(i, e);
    }
    findAndRemoveBookmark(t, e) {
        let n, i, r;
        const s = [];
        for (const o of t)if (!X4(o)) o.url === e ? n = o : s.push(o);
        else {
            const a = [];
            for(let l = 0; l < o.children.length; l++){
                const c = o.children[l];
                c.url === e ? (n = c, i = o.id, r = l) : a.push(c);
            }
            s.push({
                ...o,
                children: a
            });
        }
        return {
            items: s,
            bookmark: n,
            sourceFolderId: i,
            sourceChildIndex: r
        };
    }
    saveItems(t, e) {
        this.storageService.store(NP.STORAGE_KEY_BOOKMARKS, JSON.stringify(t), e, 1);
    }
    getIsBookmarkBarVisible(t = 0) {
        return this.storageService.getBoolean(NP.STORAGE_KEY_BOOKMARK_BAR_VISIBLE, t, !1);
    }
    setIsBookmarkBarVisible(t, e = 0) {
        this.storageService.store(NP.STORAGE_KEY_BOOKMARK_BAR_VISIBLE, t, e, 1), this._onDidChangeBookmarkBarVisible.fire();
    }
    getHistory() {
        const t = this.storageService.get(NP.STORAGE_KEY_HISTORY, 0);
        if (!t) return [];
        try {
            const e = qag.safeParse(JSON.parse(t));
            return e.success ? e.data.filter((n)=>n.url.length <= NP.MAX_HISTORY_URL_LENGTH).map((n)=>({
                    ...n,
                    title: n.title.slice(0, NP.MAX_HISTORY_TITLE_LENGTH),
                    favicon: n.favicon.length <= NP.MAX_HISTORY_FAVICON_LENGTH ? n.favicon : ""
                })) : [];
        } catch  {
            return [];
        }
    }
    addHistoryEntry(t, e, n) {
        if (!t || t.length > NP.MAX_HISTORY_URL_LENGTH) return;
        const i = (e || t).slice(0, NP.MAX_HISTORY_TITLE_LENGTH), r = n.length <= NP.MAX_HISTORY_FAVICON_LENGTH ? n : "", s = this.getHistory(), o = s.findIndex((a)=>a.url === t);
        if (o !== -1) {
            const a = s[o];
            a.visitCount += 1, a.lastVisited = Date.now(), e && (a.title = i), n && (a.favicon = r), s.splice(o, 1), s.unshift(a);
        } else {
            const a = {
                url: t,
                title: i,
                favicon: r,
                visitCount: 1,
                lastVisited: Date.now()
            };
            s.unshift(a);
        }
        s.length > NP.MAX_HISTORY_ENTRIES && (s.sort((a, l)=>l.lastVisited - a.lastVisited), s.length = NP.MAX_HISTORY_ENTRIES), this.storageService.store(NP.STORAGE_KEY_HISTORY, JSON.stringify(s), 0, 1), this._onDidChangeHistory.fire();
    }
    removeHistoryEntry(t) {
        const e = this.getHistory(), n = e.filter((i)=>i.url !== t);
        n.length !== e.length && (this.storageService.store(NP.STORAGE_KEY_HISTORY, JSON.stringify(n), 0, 1), this._onDidChangeHistory.fire());
    }
    clearHistory() {
        this.storageService.store(NP.STORAGE_KEY_HISTORY, JSON.stringify([]), 0, 1), this._onDidChangeHistory.fire();
    }
    clearLastUrls() {
        const t = ".lastUrl";
        for (const e of this.storageService.keys(1, 1))e.startsWith("browserAutomation.") && e.endsWith(t) && this.storageService.remove(e, 1);
    }
    requestNavigation(t, e) {
        this._onNavigateRequest.fire({
            url: t,
            targetBrowserId: e
        });
    }
    requestDevToolsOpen() {
        this._pendingDevToolsRequest = !0, this._onDevToolsRequest.fire();
    }
    hasPendingDevToolsRequest() {
        return this._pendingDevToolsRequest;
    }
    clearPendingDevToolsRequest() {
        this._pendingDevToolsRequest = !1;
    }
}, NP.STORAGE_KEY_LAST_URL = "browserAutomation.lastUrl", NP.STORAGE_KEY_ZOOM_LEVEL = "browserAutomation.zoomLevel", NP.STORAGE_KEY_HOST_ZOOM = "browserAutomation.hostZoomLevels", NP.STORAGE_KEY_BOOKMARKS = "browserAutomation.bookmarks", NP.STORAGE_KEY_HISTORY = "browserAutomation.history", NP.STORAGE_KEY_BOOKMARK_BAR_VISIBLE = "browserAutomation.bookmarkBarVisible", NP.MAX_HISTORY_ENTRIES = 500, NP.MAX_HISTORY_URL_LENGTH = 2048, NP.MAX_HISTORY_TITLE_LENGTH = 1024, NP.MAX_HISTORY_FAVICON_LENGTH = 4096, NP = Re([
    F(0, nr),
    F(1, Wr),
    F(2, ki),
    F(3, id),
    F(4, Rr),
    F(5, Fp)
], NP), bn(X4e, NP, 1, 1);

}
