"use strict";
require.d(exports, {
    DH: ()=>c
});
var n = require("./module-73024.js"), s = require("./module-76760.js"), o = require("./module-77314.js"), i = require("./module-22544.js");
const a = "session.sqlite";
class c {
    constructor(e, t){
        if (this.storageDir = e, this.observer = t, 0 === e.length) throw new Error("Agent host storage needs a non-empty storageDir");
        this.sessionsDir = s.join(e, "sessions"), this.globalDbPath = s.join(e, "data.sqlite");
    }
    openGlobalStore() {
        return this.open("global", this.globalDbPath);
    }
    sessionDir(e) {
        return (0, o.M)(e), s.join(this.sessionsDir, e);
    }
    sessionDbPath(e) {
        return s.join(this.sessionDir(e), a);
    }
    sessionDbRelPath(e) {
        return this.relPath(this.sessionDbPath(e));
    }
    hasSessionStore(e) {
        return (0, i.Is)(this.sessionDbPath(e));
    }
    openSessionStore(e) {
        return this.open("session", this.sessionDbPath(e));
    }
    readSessionStore(e) {
        const t = this.sessionDbPath(e);
        return i.Zg.openReadOnly(t, {
            store: "session",
            relPath: this.relPath(t),
            observer: this.observer
        });
    }
    open(e, t) {
        return i.Zg.open(t, {
            store: e,
            relPath: this.relPath(t),
            observer: this.observer
        });
    }
    deleteSessionDir(e) {
        const t = this.sessionDir(e);
        try {
            n.rmSync(t, {
                recursive: !0,
                force: !0
            });
        } catch (e) {
            throw (0, i.rD)(e, this.relPath(t));
        }
    }
    relPath(e) {
        return s.relative(this.storageDir, e).split(s.sep).join("/");
    }
    listSessionIds() {
        let e;
        try {
            e = n.readdirSync(this.sessionsDir, {
                withFileTypes: !0
            });
        } catch (e) {
            if ("ENOENT" === (0, i.CA)(e).code) return [];
            throw (0, i.rD)(e, this.relPath(this.sessionsDir));
        }
        return e.filter((e)=>e.isDirectory() && (0, o._)(e.name) && (0, i.Ze)(s.join(this.sessionsDir, e.name, a))).map((e)=>e.name).sort();
    }
}
