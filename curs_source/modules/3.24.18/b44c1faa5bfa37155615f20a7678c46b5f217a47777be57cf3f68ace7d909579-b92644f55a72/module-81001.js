"use strict";
require.d(exports, {
    P: ()=>s,
    q: ()=>n
});
class n {
    constructor(e){
        if (e.startsWith("file://")) {
            if (!this.isValidFileUrl(e)) throw new Error(`Invalid file URL: ${e}`);
            this.urlString = e;
        } else {
            const t = this.resolvePath(e);
            this.urlString = this.pathToFileUrl(t);
        }
    }
    isValidFileUrl(e) {
        try {
            return "file:" === new URL(e).protocol;
        } catch  {
            return !1;
        }
    }
    resolvePath(e) {
        if (e.includes("\\") && (e = e.replace(/\\/g, "/")), /^[a-zA-Z]:\//.test(e) || /^\//.test(e)) return e;
        const t = e.split("/"), r = [];
        for(let e = 0; e < t.length; e++){
            const n = t[e];
            ".." === n ? r.pop() : "." !== n && "" !== n && r.push(n);
        }
        return 0 === r.length ? "." : `/${r.join("/")}`;
    }
    pathToFileUrl(e) {
        if (/^[a-zA-Z]:\//.test(e)) {
            return `file:///${e.charAt(0).toLowerCase()}:${e.substring(2).replace(/\\/g, "/")}`;
        }
        e.startsWith("/") || (e = `/${e}`);
        return `file://${encodeURIComponent(e).replace(/%2F/g, "/")}`;
    }
    fileUrlToPath(e) {
        try {
            const t = new URL(e);
            if (t.pathname.startsWith("/") && /^\/[a-zA-Z]:\//.test(t.pathname)) {
                const e = t.pathname[1].toUpperCase();
                return `${e}:${t.pathname.substring(3)}`;
            }
            return decodeURIComponent(t.pathname);
        } catch  {
            throw new Error(`Invalid file URL format: ${e}`);
        }
    }
    get fsPath() {
        return this.toPath();
    }
    static fromPath(e) {
        return new n(e);
    }
    static fromUrl(e) {
        if (!e.startsWith("file://")) throw new Error(`Expected file:// URL, got: ${e}`);
        return new n(e);
    }
    static fromString(e) {
        return new n(e);
    }
    toPath() {
        return this.fileUrlToPath(this.urlString);
    }
    toString() {
        return this.urlString;
    }
    serialize() {
        return this.toString();
    }
    toURL() {
        try {
            return new URL(this.urlString);
        } catch  {
            throw new Error(`Invalid URL format: ${this.urlString}`);
        }
    }
    getFilename() {
        const e = this.toPath(), t = e.includes("\\") ? "\\" : "/";
        return e.split(t).pop() || "";
    }
    getDirectory() {
        const e = this.toPath(), t = e.includes("\\") ? "\\" : "/", r = e.lastIndexOf(t);
        return -1 === r ? e : e.substring(0, r);
    }
    equals(e) {
        return this.urlString === e.urlString;
    }
    toJSON() {
        return this.toString();
    }
}
const s = {
    isFileUrl: (e)=>e.startsWith("file://"),
    pathToUrl: (e)=>new n(e).toString(),
    urlToPath: (e)=>new n(e).toPath()
};
