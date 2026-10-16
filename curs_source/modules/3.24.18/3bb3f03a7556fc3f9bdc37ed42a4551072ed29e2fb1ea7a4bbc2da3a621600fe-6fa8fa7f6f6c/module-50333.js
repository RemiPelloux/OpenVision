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
    constructor(e){
        this.method = e.method || "GET", this.hostname = e.hostname || "localhost", this.port = e.port, this.query = e.query || {}, this.headers = e.headers || {}, this.body = e.body, this.protocol = e.protocol ? ":" !== e.protocol.slice(-1) ? `${e.protocol}:` : e.protocol : "https:", this.path = e.path ? "/" !== e.path.charAt(0) ? `/${e.path}` : e.path : "/", this.username = e.username, this.password = e.password, this.fragment = e.fragment;
    }
    static clone(e) {
        const t = new o({
            ...e,
            headers: {
                ...e.headers
            }
        });
        var r;
        return t.query && (t.query = (r = t.query, Object.keys(r).reduce((e, t)=>{
            const o = r[t];
            return {
                ...e,
                [t]: Array.isArray(o) ? [
                    ...o
                ] : o
            };
        }, {}))), t;
    }
    static isInstance(e) {
        if (!e) return !1;
        const t = e;
        return "method" in t && "protocol" in t && "hostname" in t && "path" in t && "object" == typeof t.query && "object" == typeof t.headers;
    }
    clone() {
        return o.clone(this);
    }
}
