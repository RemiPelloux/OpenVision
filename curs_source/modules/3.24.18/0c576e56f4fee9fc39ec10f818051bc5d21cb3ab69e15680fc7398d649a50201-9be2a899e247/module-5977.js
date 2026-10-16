"use strict";
require.d(exports, {
    Gy: ()=>i,
    Pg: ()=>s,
    W5: ()=>n,
    WX: ()=>b,
    g: ()=>a,
    gP: ()=>d,
    gr: ()=>_,
    hY: ()=>m,
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
class c extends n {
}
c.errorCode = "unsupported_grant_type";
class u extends n {
}
u.errorCode = "invalid_scope";
class l extends n {
}
l.errorCode = "access_denied";
class d extends n {
}
d.errorCode = "server_error";
class p extends n {
}
p.errorCode = "temporarily_unavailable";
class f extends n {
}
f.errorCode = "unsupported_response_type";
class h extends n {
}
h.errorCode = "unsupported_token_type";
class m extends n {
}
m.errorCode = "invalid_token";
class g extends n {
}
g.errorCode = "method_not_allowed";
class y extends n {
}
y.errorCode = "too_many_requests";
class _ extends n {
}
_.errorCode = "invalid_client_metadata";
class v extends n {
}
v.errorCode = "insufficient_scope";
class w extends n {
}
w.errorCode = "invalid_target";
const b = {
    [o.errorCode]: o,
    [s.errorCode]: s,
    [i.errorCode]: i,
    [a.errorCode]: a,
    [c.errorCode]: c,
    [u.errorCode]: u,
    [l.errorCode]: l,
    [d.errorCode]: d,
    [p.errorCode]: p,
    [f.errorCode]: f,
    [h.errorCode]: h,
    [m.errorCode]: m,
    [g.errorCode]: g,
    [y.errorCode]: y,
    [_.errorCode]: _,
    [v.errorCode]: v,
    [w.errorCode]: w
};
