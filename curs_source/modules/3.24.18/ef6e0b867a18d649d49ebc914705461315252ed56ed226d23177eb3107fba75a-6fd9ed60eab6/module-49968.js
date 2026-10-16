"use strict";
function t() {
    this._types = Object.create(null), this._extensions = Object.create(null);
    for(let e = 0; e < arguments.length; e++)this.define(arguments[e]);
    this.define = this.define.bind(this), this.getType = this.getType.bind(this), this.getExtension = this.getExtension.bind(this);
}
t.prototype.define = function(e, t) {
    for(let i in e){
        let a = e[i].map(function(e) {
            return e.toLowerCase();
        });
        i = i.toLowerCase();
        for(let e = 0; e < a.length; e++){
            const n = a[e];
            if ("*" !== n[0]) {
                if (!t && n in this._types) throw new Error('Attempt to change mapping for "' + n + '" extension from "' + this._types[n] + '" to "' + i + '". Pass `force=true` to allow this, otherwise remove "' + n + '" from the list of extensions for "' + i + '".');
                this._types[n] = i;
            }
        }
        if (t || !this._extensions[i]) {
            const e = a[0];
            this._extensions[i] = "*" !== e[0] ? e : e.substr(1);
        }
    }
}, t.prototype.getType = function(e) {
    let t = (e = String(e)).replace(/^.*[/\\]/, "").toLowerCase(), i = t.replace(/^.*\./, "").toLowerCase(), a = t.length < e.length;
    return (i.length < t.length - 1 || !a) && this._types[i] || null;
}, t.prototype.getExtension = function(e) {
    return (e = /^\s*([^;\s]*)/.test(e) && RegExp.$1) && this._extensions[e.toLowerCase()] || null;
}, module.exports = t;
