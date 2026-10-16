import { De } from "./De_3.js";
import { q_e } from "./ECo.js";
import { Se, bt, ve, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { HCo, WCo } from "./appLayoutContextKeys.js";
import { $n, vi } from "./commands.js";
import { dn, xn } from "./contextkey.js";
import { Pn } from "./extensions.js";
import { Ma, hc } from "./extensions_4.js";
import { HM } from "./index_191.js";
import { Ze } from "./instantiation.js";
import { $d, Id } from "./lifecycle_2.js";
import { di, ji } from "./notification.js";
import { qa } from "./observable.js";
import { Xo, mn, pd } from "./qIc.js";
import { Vn, yn } from "./storage_2.js";
import { x } from "./tslib.es6.js";
import { Js, zn } from "./uuid.js";
var Rkh, Dkh, yCt, Wx;
export { Dkh, Rkh, Wx, yCt };
var __wakaru_njt_initialized = false;
export function njt() {
if (__wakaru_njt_initialized) return;
__wakaru_njt_initialized = true;
"use strict";
x(), HM(), bt(), Se(), qa(), Js(), vi(), dn(), Pn(), Ze(), ji(), Vn(), hc(), $d(), WCo(), Rkh = De.object({
    url: De.string().min(1),
    title: De.string().catch(""),
    favicon: De.string().catch(""),
    visitCount: De.number().catch(1),
    lastVisited: De.number().catch(0)
}), Dkh = De.array(Rkh), yCt = pd("browserAutomationService"), Wx = class extends we {
    constructor(e, t, n, i, r, s){
        super(), this.commandService = e, this.notificationService = t, this.storageService = n, this.extensionService = i, this.contextKeyService = r, this.lifecycleService = s, this._onNavigateRequest = this._register(new ve), this.onNavigateRequest = this._onNavigateRequest.event, this._onDevToolsRequest = this._register(new ve), this.onDevToolsRequest = this._onDevToolsRequest.event, this._pendingDevToolsRequest = !1, this._onDidAddBookmark = this._register(new ve), this.onDidAddBookmark = this._onDidAddBookmark.event, this._onDidRemoveBookmark = this._register(new ve), this.onDidRemoveBookmark = this._onDidRemoveBookmark.event, this._onDidReorderBookmarks = this._register(new ve), this.onDidReorderBookmarks = this._onDidReorderBookmarks.event, this._onDidChangeBookmarkBar = this._register(new ve), this.onDidChangeBookmarkBar = this._onDidChangeBookmarkBar.event, this._onDidChangeBookmarkBarVisible = this._register(new ve), this.onDidChangeBookmarkBarVisible = this._onDidChangeBookmarkBarVisible.event, this._onDidChangeHistory = this._register(new ve), this.onDidChangeHistory = this._onDidChangeHistory.event, this._settableEnabled = Xo("BrowserAutomationService.enabled", !0), this.enabled = this._settableEnabled, this._enabledContextKey = HCo.bindTo(this.contextKeyService), this._enabledContextKey.set(this._settableEnabled.get()), this.tabState = Xo("BrowserAutomationService.tabState", void 0);
    }
    getStorageKey(e, t) {
        return e ? `browserAutomation.${e}.${t}` : `browserAutomation.${t}`;
    }
    getLastUrl(e) {
        return this.storageService.get(this.getStorageKey(e, "lastUrl"), 1);
    }
    saveLastUrl(e, t) {
        this.storageService.store(this.getStorageKey(t, "lastUrl"), e, 1, 1);
    }
    getSavedZoomLevel(e) {
        const t = this.storageService.getNumber(this.getStorageKey(e, "zoomLevel"), 1);
        return t !== void 0 ? t : void 0;
    }
    saveZoomLevel(e, t) {
        this.storageService.store(this.getStorageKey(t, "zoomLevel"), e, 1, 1);
    }
    getHostZoomLevel(e) {
        const t = this.storageService.get(Wx.STORAGE_KEY_HOST_ZOOM, 0);
        if (t) try {
            const n = JSON.parse(t);
            return typeof n[e] == "number" ? n[e] : void 0;
        } catch  {
            return;
        }
    }
    saveHostZoomLevel(e, t) {
        const n = this.storageService.get(Wx.STORAGE_KEY_HOST_ZOOM, 0);
        let i = {};
        if (n) try {
            i = JSON.parse(n);
        } catch  {
            i = {};
        }
        t === 0 ? delete i[e] : i[e] = t, this.storageService.store(Wx.STORAGE_KEY_HOST_ZOOM, JSON.stringify(i), 0, 1);
    }
    getBookmarkBarItems(e = 1) {
        const t = this.storageService.get(Wx.STORAGE_KEY_BOOKMARKS, e);
        if (!t) return [];
        try {
            const n = JSON.parse(t);
            return Array.isArray(n) ? n : [];
        } catch  {
            return [];
        }
    }
    saveBookmarkBarItems(e, t = 1) {
        this.saveItems(e, t), this._onDidChangeBookmarkBar.fire();
    }
    createBookmarkFolder(e, t = 1) {
        return {
            type: "folder",
            id: zn(),
            name: e,
            children: []
        };
    }
    getBookmarks(e = 1) {
        const t = this.getBookmarkBarItems(e), n = [];
        for (const i of t)q_e(i) ? n.push(...i.children) : n.push(i);
        return n;
    }
    addBookmark(e, t, n, i, r = 1) {
        const s = this.getBookmarkBarItems(r);
        if (this.getBookmarks(r).findIndex((c)=>c.url === e) === -1) {
            const c = {
                url: e,
                title: t,
                favicon: n,
                timestamp: Date.now(),
                customName: i
            };
            s.push(c), this.saveItems(s, r), this._onDidAddBookmark.fire(c), this._onDidChangeBookmarkBar.fire();
        }
    }
    removeBookmark(e, t = 1) {
        const n = this.getBookmarkBarItems(t);
        let i = !1;
        const r = n.filter((s)=>!q_e(s) && s.url === e ? (i = !0, !1) : !0).map((s)=>{
            if (q_e(s)) {
                const o = s.children.filter((a)=>a.url !== e);
                if (o.length !== s.children.length) return i = !0, {
                    ...s,
                    children: o
                };
            }
            return s;
        });
        i && (this.saveItems(r, t), this._onDidRemoveBookmark.fire(e), this._onDidChangeBookmarkBar.fire());
    }
    reorderBookmarks(e, t = 1) {
        const i = this.getBookmarkBarItems(t).filter(q_e), r = new Set;
        for (const a of i)for (const c of a.children)r.add(c.url);
        const s = e.filter((a)=>!r.has(a.url)), o = [
            ...s,
            ...i
        ];
        this.saveItems(o, t), this._onDidReorderBookmarks.fire(s);
    }
    isBookmarked(e, t = 1) {
        return this.getBookmarkBarItems(t).some((i)=>q_e(i) ? i.children.some((r)=>r.url === e) : i.url === e);
    }
    renameBookmark(e, t, n = 1) {
        const i = this.getBookmarkBarItems(n);
        let r;
        const s = i.map((o)=>{
            if (!q_e(o) && o.url === e) return r = {
                ...o,
                customName: t
            }, r;
            if (q_e(o)) {
                const a = o.children.map((c)=>c.url === e ? (r = {
                        ...c,
                        customName: t
                    }, r) : c);
                if (r) return {
                    ...o,
                    children: a
                };
            }
            return o;
        });
        r && (this.saveItems(s, n), this._onDidAddBookmark.fire(r), this._onDidChangeBookmarkBar.fire());
    }
    moveBookmarkToFolder(e, t, n, i = 0) {
        const r = this.getBookmarkBarItems(i), { items: s, bookmark: o, sourceFolderId: a, sourceChildIndex: c } = this.findAndRemoveBookmark(r, e);
        if (!o || n !== void 0 && a === t && c === n) return;
        let l = !1;
        const u = s.map((h)=>{
            if (q_e(h) && h.id === t) {
                const p = [
                    ...h.children
                ];
                if (n !== void 0) {
                    let g = n;
                    a === t && c !== void 0 && c < g && g--, p.splice(Math.min(g, p.length), 0, o);
                } else p.push(o);
                return l = !0, {
                    ...h,
                    children: p
                };
            }
            return h;
        });
        l && this.saveBookmarkBarItems(u, i);
    }
    moveBookmarkToBarAt(e, t, n = 0) {
        const i = this.getBookmarkBarItems(n), { items: r, bookmark: s } = this.findAndRemoveBookmark(i, e);
        if (!s) return;
        const o = i.findIndex((l)=>!q_e(l) && l.url === e);
        let a = t;
        o >= 0 && o < t && a--;
        const c = [
            ...r
        ];
        c.splice(Math.min(a, c.length), 0, s), this.saveBookmarkBarItems(c, n);
    }
    reorderBarItem(e, t, n = 0) {
        if (e === t || e + 1 === t) return;
        const i = this.getBookmarkBarItems(n);
        if (e < 0 || e >= i.length) return;
        const r = [
            ...i
        ], [s] = r.splice(e, 1), o = t > e ? t - 1 : t;
        r.splice(o, 0, s), this.saveBookmarkBarItems(r, n);
    }
    renameFolder(e, t, n = 0) {
        const i = this.getBookmarkBarItems(n);
        let r = !1;
        const s = i.map((o)=>q_e(o) && o.id === e ? (r = !0, {
                ...o,
                name: t
            }) : o);
        r && this.saveBookmarkBarItems(s, n);
    }
    deleteFolder(e, t = 0) {
        const n = this.getBookmarkBarItems(t), i = [];
        for (const r of n)q_e(r) && r.id === e ? i.push(...r.children) : i.push(r);
        this.saveBookmarkBarItems(i, t);
    }
    findAndRemoveBookmark(e, t) {
        let n, i, r;
        const s = [];
        for (const o of e)if (!q_e(o)) o.url === t ? n = o : s.push(o);
        else {
            const a = [];
            for(let c = 0; c < o.children.length; c++){
                const l = o.children[c];
                l.url === t ? (n = l, i = o.id, r = c) : a.push(l);
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
    saveItems(e, t) {
        this.storageService.store(Wx.STORAGE_KEY_BOOKMARKS, JSON.stringify(e), t, 1);
    }
    getIsBookmarkBarVisible(e = 0) {
        return this.storageService.getBoolean(Wx.STORAGE_KEY_BOOKMARK_BAR_VISIBLE, e, !1);
    }
    setIsBookmarkBarVisible(e, t = 0) {
        this.storageService.store(Wx.STORAGE_KEY_BOOKMARK_BAR_VISIBLE, e, t, 1), this._onDidChangeBookmarkBarVisible.fire();
    }
    getHistory() {
        const e = this.storageService.get(Wx.STORAGE_KEY_HISTORY, 0);
        if (!e) return [];
        try {
            const t = Dkh.safeParse(JSON.parse(e));
            return t.success ? t.data.filter((n)=>n.url.length <= Wx.MAX_HISTORY_URL_LENGTH).map((n)=>({
                    ...n,
                    title: n.title.slice(0, Wx.MAX_HISTORY_TITLE_LENGTH),
                    favicon: n.favicon.length <= Wx.MAX_HISTORY_FAVICON_LENGTH ? n.favicon : ""
                })) : [];
        } catch  {
            return [];
        }
    }
    addHistoryEntry(e, t, n) {
        if (!e || e.length > Wx.MAX_HISTORY_URL_LENGTH) return;
        const i = (t || e).slice(0, Wx.MAX_HISTORY_TITLE_LENGTH), r = n.length <= Wx.MAX_HISTORY_FAVICON_LENGTH ? n : "", s = this.getHistory(), o = s.findIndex((a)=>a.url === e);
        if (o !== -1) {
            const a = s[o];
            a.visitCount += 1, a.lastVisited = Date.now(), t && (a.title = i), n && (a.favicon = r), s.splice(o, 1), s.unshift(a);
        } else {
            const a = {
                url: e,
                title: i,
                favicon: r,
                visitCount: 1,
                lastVisited: Date.now()
            };
            s.unshift(a);
        }
        s.length > Wx.MAX_HISTORY_ENTRIES && (s.sort((a, c)=>c.lastVisited - a.lastVisited), s.length = Wx.MAX_HISTORY_ENTRIES), this.storageService.store(Wx.STORAGE_KEY_HISTORY, JSON.stringify(s), 0, 1), this._onDidChangeHistory.fire();
    }
    removeHistoryEntry(e) {
        const t = this.getHistory(), n = t.filter((i)=>i.url !== e);
        n.length !== t.length && (this.storageService.store(Wx.STORAGE_KEY_HISTORY, JSON.stringify(n), 0, 1), this._onDidChangeHistory.fire());
    }
    clearHistory() {
        this.storageService.store(Wx.STORAGE_KEY_HISTORY, JSON.stringify([]), 0, 1), this._onDidChangeHistory.fire();
    }
    clearLastUrls() {
        const e = ".lastUrl";
        for (const t of this.storageService.keys(1, 1))t.startsWith("browserAutomation.") && t.endsWith(e) && this.storageService.remove(t, 1);
    }
    requestNavigation(e, t) {
        this._onNavigateRequest.fire({
            url: e,
            targetBrowserId: t
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
}, Wx.STORAGE_KEY_LAST_URL = "browserAutomation.lastUrl", Wx.STORAGE_KEY_ZOOM_LEVEL = "browserAutomation.zoomLevel", Wx.STORAGE_KEY_HOST_ZOOM = "browserAutomation.hostZoomLevels", Wx.STORAGE_KEY_BOOKMARKS = "browserAutomation.bookmarks", Wx.STORAGE_KEY_HISTORY = "browserAutomation.history", Wx.STORAGE_KEY_BOOKMARK_BAR_VISIBLE = "browserAutomation.bookmarkBarVisible", Wx.MAX_HISTORY_ENTRIES = 500, Wx.MAX_HISTORY_URL_LENGTH = 2048, Wx.MAX_HISTORY_TITLE_LENGTH = 1024, Wx.MAX_HISTORY_FAVICON_LENGTH = 4096, Wx = ie([
    C(0, $n),
    C(1, di),
    C(2, yn),
    C(3, Ma),
    C(4, xn),
    C(5, Id)
], Wx), mn(yCt, Wx, 1, 1);

}
