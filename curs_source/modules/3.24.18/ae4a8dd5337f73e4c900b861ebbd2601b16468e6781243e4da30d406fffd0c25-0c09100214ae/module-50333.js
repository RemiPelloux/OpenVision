require.d(exports, {
    K: ()=>o
});
class o {
    method;
    protocol;
    hostname;
    port;
    path;
    query;
    headers;
    username;
    password;
    fragment;
    body;
    constructor(t){
        this.method = t.method || "GET", this.hostname = t.hostname || "localhost", this.port = t.port, this.query = t.query || {}, this.headers = t.headers || {}, this.body = t.body, this.protocol = t.protocol ? ":" !== t.protocol.slice(-1) ? `${t.protocol}:` : t.protocol : "https:", this.path = t.path ? "/" !== t.path.charAt(0) ? `/${t.path}` : t.path : "/", this.username = t.username, this.password = t.password, this.fragment = t.fragment;
    }
    static clone(t) {
        const e = new o({
            ...t,
            headers: {
                ...t.headers
            }
        });
        var s;
        return e.query && (e.query = (s = e.query, Object.keys(s).reduce((t, e)=>{
            const o = s[e];
            return {
                ...t,
                [e]: Array.isArray(o) ? [
                    ...o
                ] : o
            };
        }, {}))), e;
    }
    static isInstance(t) {
        if (!t) return !1;
        const e = t;
        return "method" in e && "protocol" in e && "hostname" in e && "path" in e && "object" == typeof e.query && "object" == typeof e.headers;
    }
    clone() {
        return o.clone(this);
    }
}
