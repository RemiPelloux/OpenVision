"use strict";
require.d(exports, {
    Gy: ()=>i,
    Pg: ()=>s,
    W5: ()=>n,
    WX: ()=>_,
    g: ()=>a,
    gP: ()=>d,
    gr: ()=>v,
    pv: ()=>p
});
class n extends Error {
    constructor(e, t){
        super(e), this.errorUri = t, this.name = this.constructor.name;
    }
    toResponseObject() {
        const e = {
            error: this.errorCode,
            error_description: this.message
        };
        return this.errorUri && (e.error_uri = this.errorUri), e;
    }
    get errorCode() {
        return this.constructor.errorCode;
    }
}
class o extends n {
}
o.errorCode = "invalid_request";
class s extends n {
}
s.errorCode = "invalid_client";
class i extends n {
}
i.errorCode = "invalid_grant";
class a extends n {
}
a.errorCode = "unauthorized_client";
class l extends n {
}
l.errorCode = "unsupported_grant_type";
class c extends n {
}
c.errorCode = "invalid_scope";
class u extends n {
}
u.errorCode = "access_denied";
class d extends n {
}
d.errorCode = "server_error";
class p extends n {
}
p.errorCode = "temporarily_unavailable";
class h extends n {
}
h.errorCode = "unsupported_response_type";
class m extends n {
}
m.errorCode = "unsupported_token_type";
class f extends n {
}
f.errorCode = "invalid_token";
class g extends n {
}
g.errorCode = "method_not_allowed";
class y extends n {
}
y.errorCode = "too_many_requests";
class v extends n {
}
v.errorCode = "invalid_client_metadata";
class w extends n {
}
w.errorCode = "insufficient_scope";
class b extends n {
}
b.errorCode = "invalid_target";
const _ = {
    [o.errorCode]: o,
    [s.errorCode]: s,
    [i.errorCode]: i,
    [a.errorCode]: a,
    [l.errorCode]: l,
    [c.errorCode]: c,
    [u.errorCode]: u,
    [d.errorCode]: d,
    [p.errorCode]: p,
    [h.errorCode]: h,
    [m.errorCode]: m,
    [f.errorCode]: f,
    [g.errorCode]: g,
    [y.errorCode]: y,
    [v.errorCode]: v,
    [w.errorCode]: w,
    [b.errorCode]: b
};
