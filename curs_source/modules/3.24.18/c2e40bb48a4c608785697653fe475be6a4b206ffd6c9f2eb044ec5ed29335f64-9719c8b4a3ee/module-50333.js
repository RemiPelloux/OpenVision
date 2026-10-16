require.d(exports, {
    K: ()=>r
});
class r {
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
        const t = new r({
            ...e,
            headers: {
                ...e.headers
            }
        });
        var o;
        return t.query && (t.query = (o = t.query, Object.keys(o).reduce((e, t)=>{
            const r = o[t];
            return {
                ...e,
                [t]: Array.isArray(r) ? [
                    ...r
                ] : r
            };
        }, {}))), t;
    }
    static isInstance(e) {
        if (!e) return !1;
        const t = e;
        return "method" in t && "protocol" in t && "hostname" in t && "path" in t && "object" == typeof t.query && "object" == typeof t.headers;
    }
    clone() {
        return r.clone(this);
    }
}
