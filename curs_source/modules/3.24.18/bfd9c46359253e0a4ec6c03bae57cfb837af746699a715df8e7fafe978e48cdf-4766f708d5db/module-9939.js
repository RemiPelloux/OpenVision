"use strict";
require.d(exports, {
    Gy: ()=>i,
    Pg: ()=>o,
    W5: ()=>n,
    WX: ()=>b,
    g: ()=>a,
    gP: ()=>d,
    gr: ()=>w,
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
class s extends n {
}
s.errorCode = "invalid_request";
class o extends n {
}
o.errorCode = "invalid_client";
class i extends n {
}
i.errorCode = "invalid_grant";
class a extends n {
}
a.errorCode = "unauthorized_client";
class c extends n {
}
c.errorCode = "unsupported_grant_type";
class l extends n {
}
l.errorCode = "invalid_scope";
class u extends n {
}
u.errorCode = "access_denied";
class d extends n {
}
d.errorCode = "server_error";
class p extends n {
}
p.errorCode = "temporarily_unavailable";
class m extends n {
}
m.errorCode = "unsupported_response_type";
class h extends n {
}
h.errorCode = "unsupported_token_type";
class f extends n {
}
f.errorCode = "invalid_token";
class g extends n {
}
g.errorCode = "method_not_allowed";
class y extends n {
}
y.errorCode = "too_many_requests";
class w extends n {
}
w.errorCode = "invalid_client_metadata";
class v extends n {
}
v.errorCode = "insufficient_scope";
class _ extends n {
}
_.errorCode = "invalid_target";
const b = {
    [s.errorCode]: s,
    [o.errorCode]: o,
    [i.errorCode]: i,
    [a.errorCode]: a,
    [c.errorCode]: c,
    [l.errorCode]: l,
    [u.errorCode]: u,
    [d.errorCode]: d,
    [p.errorCode]: p,
    [m.errorCode]: m,
    [h.errorCode]: h,
    [f.errorCode]: f,
    [g.errorCode]: g,
    [y.errorCode]: y,
    [w.errorCode]: w,
    [v.errorCode]: v,
    [_.errorCode]: _
};
