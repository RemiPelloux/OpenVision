"use strict";
const t = require("./module-8323.js");
exports.implementation = class {
    constructor(e){
        const a = e[0], n = e[1];
        let s = null;
        if (void 0 !== n && (s = t.basicURLParse(n), "failure" === s)) throw new TypeError("Invalid base URL");
        const o = t.basicURLParse(a, {
            baseURL: s
        });
        if ("failure" === o) throw new TypeError("Invalid URL");
        this._url = o;
    }
    get href() {
        return t.serializeURL(this._url);
    }
    set href(e) {
        const a = t.basicURLParse(e);
        if ("failure" === a) throw new TypeError("Invalid URL");
        this._url = a;
    }
    get origin() {
        return t.serializeURLOrigin(this._url);
    }
    get protocol() {
        return this._url.scheme + ":";
    }
    set protocol(e) {
        t.basicURLParse(e + ":", {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(e) {
        t.cannotHaveAUsernamePasswordPort(this._url) || t.setTheUsername(this._url, e);
    }
    get password() {
        return this._url.password;
    }
    set password(e) {
        t.cannotHaveAUsernamePasswordPort(this._url) || t.setThePassword(this._url, e);
    }
    get host() {
        const e = this._url;
        return null === e.host ? "" : null === e.port ? t.serializeHost(e.host) : t.serializeHost(e.host) + ":" + t.serializeInteger(e.port);
    }
    set host(e) {
        this._url.cannotBeABaseURL || t.basicURLParse(e, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        return null === this._url.host ? "" : t.serializeHost(this._url.host);
    }
    set hostname(e) {
        this._url.cannotBeABaseURL || t.basicURLParse(e, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        return null === this._url.port ? "" : t.serializeInteger(this._url.port);
    }
    set port(e) {
        t.cannotHaveAUsernamePasswordPort(this._url) || ("" === e ? this._url.port = null : t.basicURLParse(e, {
            url: this._url,
            stateOverride: "port"
        }));
    }
    get pathname() {
        return this._url.cannotBeABaseURL ? this._url.path[0] : 0 === this._url.path.length ? "" : "/" + this._url.path.join("/");
    }
    set pathname(e) {
        this._url.cannotBeABaseURL || (this._url.path = [], t.basicURLParse(e, {
            url: this._url,
            stateOverride: "path start"
        }));
    }
    get search() {
        return null === this._url.query || "" === this._url.query ? "" : "?" + this._url.query;
    }
    set search(e) {
        const a = this._url;
        if ("" === e) return void (a.query = null);
        const n = "?" === e[0] ? e.substring(1) : e;
        a.query = "", t.basicURLParse(n, {
            url: a,
            stateOverride: "query"
        });
    }
    get hash() {
        return null === this._url.fragment || "" === this._url.fragment ? "" : "#" + this._url.fragment;
    }
    set hash(e) {
        if ("" === e) return void (this._url.fragment = null);
        const a = "#" === e[0] ? e.substring(1) : e;
        this._url.fragment = "", t.basicURLParse(a, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
