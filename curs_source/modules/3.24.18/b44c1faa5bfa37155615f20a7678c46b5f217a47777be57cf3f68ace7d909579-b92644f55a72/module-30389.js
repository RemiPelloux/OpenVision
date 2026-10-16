"use strict";
function n(e, t) {
    let r = 0, n = e.length, s = !1;
    if (!t) {
        if (e.startsWith("data:")) return null;
        for(; r < e.length && e.charCodeAt(r) <= 32;)r += 1;
        for(; n > r + 1 && e.charCodeAt(n - 1) <= 32;)n -= 1;
        if (47 === e.charCodeAt(r) && 47 === e.charCodeAt(r + 1)) r += 2;
        else {
            const t = e.indexOf(":/", r);
            if (-1 !== t) {
                const n = t - r, s = e.charCodeAt(r), o = e.charCodeAt(r + 1), i = e.charCodeAt(r + 2), a = e.charCodeAt(r + 3), c = e.charCodeAt(r + 4);
                if (5 === n && 104 === s && 116 === o && 116 === i && 112 === a && 115 === c) ;
                else if (4 === n && 104 === s && 116 === o && 116 === i && 112 === a) ;
                else if (3 === n && 119 === s && 115 === o && 115 === i) ;
                else if (2 === n && 119 === s && 115 === o) ;
                else for(let n = r; n < t; n += 1){
                    const t = 32 | e.charCodeAt(n);
                    if (!(t >= 97 && t <= 122 || t >= 48 && t <= 57 || 46 === t || 45 === t || 43 === t)) return null;
                }
                for(r = t + 2; 47 === e.charCodeAt(r);)r += 1;
            }
        }
        let t = -1, o = -1, i = -1;
        for(let a = r; a < n; a += 1){
            const r = e.charCodeAt(a);
            if (35 === r || 47 === r || 63 === r) {
                n = a;
                break;
            }
            64 === r ? t = a : 93 === r ? o = a : 58 === r ? i = a : r >= 65 && r <= 90 && (s = !0);
        }
        if (-1 !== t && t > r && t < n && (r = t + 1), 91 === e.charCodeAt(r)) return -1 !== o ? e.slice(r + 1, o).toLowerCase() : null;
        -1 !== i && i > r && i < n && (n = i);
    }
    for(; n > r + 1 && 46 === e.charCodeAt(n - 1);)n -= 1;
    const o = 0 !== r || n !== e.length ? e.slice(r, n) : e;
    return s ? o.toLowerCase() : o;
}
function s(e) {
    return e >= 97 && e <= 122 || e >= 48 && e <= 57 || e > 127;
}
function o(e) {
    if (e.length > 255) return !1;
    if (0 === e.length) return !1;
    if (!s(e.charCodeAt(0)) && 46 !== e.charCodeAt(0) && 95 !== e.charCodeAt(0)) return !1;
    let t = -1, r = -1;
    const n = e.length;
    for(let o = 0; o < n; o += 1){
        const n = e.charCodeAt(o);
        if (46 === n) {
            if (o - t > 64 || 46 === r || 45 === r || 95 === r) return !1;
            t = o;
        } else if (!s(n) && 45 !== n && 95 !== n) return !1;
        r = n;
    }
    return n - t - 1 <= 63 && 45 !== r;
}
require.r(exports), require.d(exports, {
    getDomain: ()=>g,
    getDomainWithoutSuffix: ()=>w,
    getHostname: ()=>h,
    getPublicSuffix: ()=>f,
    getSubdomain: ()=>y,
    parse: ()=>m
});
const i = function({ allowIcannDomains: e = !0, allowPrivateDomains: t = !1, detectIp: r = !0, extractHostname: n = !0, mixedInputs: s = !0, validHosts: o = null, validateHostname: i = !0 }) {
    return {
        allowIcannDomains: e,
        allowPrivateDomains: t,
        detectIp: r,
        extractHostname: n,
        mixedInputs: s,
        validHosts: o,
        validateHostname: i
    };
}({});
function a(e, t, r, s, a) {
    const c = function(e) {
        return void 0 === e ? i : function({ allowIcannDomains: e = !0, allowPrivateDomains: t = !1, detectIp: r = !0, extractHostname: n = !0, mixedInputs: s = !0, validHosts: o = null, validateHostname: i = !0 }) {
            return {
                allowIcannDomains: e,
                allowPrivateDomains: t,
                detectIp: r,
                extractHostname: n,
                mixedInputs: s,
                validHosts: o,
                validateHostname: i
            };
        }(e);
    }(s);
    return "string" != typeof e ? a : (c.extractHostname ? c.mixedInputs ? a.hostname = n(e, o(e)) : a.hostname = n(e, !1) : a.hostname = e, 0 === t || null === a.hostname || c.detectIp && (a.isIp = function(e) {
        if (e.length < 3) return !1;
        let t = e.startsWith("[") ? 1 : 0, r = e.length;
        if ("]" === e[r - 1] && (r -= 1), r - t > 39) return !1;
        let n = !1;
        for(; t < r; t += 1){
            const r = e.charCodeAt(t);
            if (58 === r) n = !0;
            else if (!(r >= 48 && r <= 57 || r >= 97 && r <= 102 || r >= 65 && r <= 90)) return !1;
        }
        return n;
    }(l = a.hostname) || function(e) {
        if (e.length < 7) return !1;
        if (e.length > 15) return !1;
        let t = 0;
        for(let r = 0; r < e.length; r += 1){
            const n = e.charCodeAt(r);
            if (46 === n) t += 1;
            else if (n < 48 || n > 57) return !1;
        }
        return 3 === t && 46 !== e.charCodeAt(0) && 46 !== e.charCodeAt(e.length - 1);
    }(l), a.isIp) ? a : c.validateHostname && c.extractHostname && !o(a.hostname) ? (a.hostname = null, a) : (r(a.hostname, c, a), 2 === t || null === a.publicSuffix ? a : (a.domain = function(e, t, r) {
        if (null !== r.validHosts) {
            const e = r.validHosts;
            for (const r of e)if (function(e, t) {
                return !!e.endsWith(t) && (e.length === t.length || "." === e[e.length - t.length - 1]);
            }(t, r)) return r;
        }
        let n = 0;
        if (t.startsWith(".")) for(; n < t.length && "." === t[n];)n += 1;
        return e.length === t.length - n ? null : function(e, t) {
            const r = e.length - t.length - 2, n = e.lastIndexOf(".", r);
            return -1 === n ? e : e.slice(n + 1);
        }(t, e);
    }(a.publicSuffix, a.hostname, c), 3 === t || null === a.domain ? a : (a.subdomain = function(e, t) {
        return t.length === e.length ? "" : e.slice(0, -t.length - 1);
    }(a.hostname, a.domain), 4 === t || (a.domainWithoutSuffix = (u = a.domain, d = a.publicSuffix, u.slice(0, -d.length - 1))), a))));
    var l, u, d;
}
const c = function() {
    const e = [
        1,
        {}
    ], t = [
        2,
        {}
    ], r = [
        0,
        {
            city: e
        }
    ];
    return [
        0,
        {
            ck: [
                0,
                {
                    www: e
                }
            ],
            jp: [
                0,
                {
                    kawasaki: r,
                    kitakyushu: r,
                    kobe: r,
                    nagoya: r,
                    sapporo: r,
                    sendai: r,
                    yokohama: r
                }
            ],
            dev: [
                0,
                {
                    hrsn: [
                        0,
                        {
                            psl: [
                                0,
                                {
                                    wc: [
                                        0,
                                        {
                                            ignored: t,
                                            sub: [
                                                0,
                                                {
                                                    ignored: t
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];
}(), l = function() {
    const e = [
        1,
        {}
    ], t = [
        2,
        {}
    ], r = [
        1,
        {
            com: e,
            edu: e,
            gov: e,
            net: e,
            org: e
        }
    ], n = [
        1,
        {
            com: e,
            edu: e,
            gov: e,
            mil: e,
            net: e,
            org: e
        }
    ], s = [
        0,
        {
            "*": t
        }
    ], o = [
        2,
        {
            s
        }
    ], i = [
        0,
        {
            relay: t
        }
    ], a = [
        2,
        {
            id: t
        }
    ], c = [
        1,
        {
            gov: e
        }
    ], l = [
        0,
        {
            "transfer-webapp": t
        }
    ], u = [
        0,
        {
            notebook: t,
            studio: t
        }
    ], d = [
        0,
        {
            labeling: t,
            notebook: t,
            studio: t
        }
    ], p = [
        0,
        {
            notebook: t
        }
    ], m = [
        0,
        {
            labeling: t,
            notebook: t,
            "notebook-fips": t,
            studio: t
        }
    ], h = [
        0,
        {
            notebook: t,
            "notebook-fips": t,
            studio: t,
            "studio-fips": t
        }
    ], f = [
        0,
        {
            "*": e
        }
    ], g = [
        1,
        {
            co: t
        }
    ], y = [
        0,
        {
            objects: t
        }
    ], w = [
        2,
        {
            nodes: t
        }
    ], v = [
        0,
        {
            my: s
        }
    ], _ = [
        0,
        {
            s3: t,
            "s3-accesspoint": t,
            "s3-website": t
        }
    ], A = [
        0,
        {
            s3: t,
            "s3-accesspoint": t
        }
    ], S = [
        0,
        {
            direct: t
        }
    ], b = [
        0,
        {
            "webview-assets": t
        }
    ], E = [
        0,
        {
            vfs: t,
            "webview-assets": t
        }
    ], I = [
        0,
        {
            "execute-api": t,
            "emrappui-prod": t,
            "emrnotebooks-prod": t,
            "emrstudio-prod": t,
            dualstack: _,
            s3: t,
            "s3-accesspoint": t,
            "s3-object-lambda": t,
            "s3-website": t,
            "aws-cloud9": b,
            cloud9: E
        }
    ], C = [
        0,
        {
            "execute-api": t,
            "emrappui-prod": t,
            "emrnotebooks-prod": t,
            "emrstudio-prod": t,
            dualstack: A,
            s3: t,
            "s3-accesspoint": t,
            "s3-object-lambda": t,
            "s3-website": t,
            "aws-cloud9": b,
            cloud9: E
        }
    ], k = [
        0,
        {
            "execute-api": t,
            "emrappui-prod": t,
            "emrnotebooks-prod": t,
            "emrstudio-prod": t,
            dualstack: _,
            s3: t,
            "s3-accesspoint": t,
            "s3-object-lambda": t,
            "s3-website": t,
            "analytics-gateway": t,
            "aws-cloud9": b,
            cloud9: E
        }
    ], x = [
        0,
        {
            "execute-api": t,
            "emrappui-prod": t,
            "emrnotebooks-prod": t,
            "emrstudio-prod": t,
            dualstack: _,
            s3: t,
            "s3-accesspoint": t,
            "s3-object-lambda": t,
            "s3-website": t
        }
    ], T = [
        0,
        {
            s3: t,
            "s3-accesspoint": t,
            "s3-accesspoint-fips": t,
            "s3-fips": t,
            "s3-website": t
        }
    ], R = [
        0,
        {
            "execute-api": t,
            "emrappui-prod": t,
            "emrnotebooks-prod": t,
            "emrstudio-prod": t,
            dualstack: T,
            s3: t,
            "s3-accesspoint": t,
            "s3-accesspoint-fips": t,
            "s3-fips": t,
            "s3-object-lambda": t,
            "s3-website": t,
            "aws-cloud9": b,
            cloud9: E
        }
    ], B = [
        0,
        {
            "execute-api": t,
            "emrappui-prod": t,
            "emrnotebooks-prod": t,
            "emrstudio-prod": t,
            dualstack: T,
            s3: t,
            "s3-accesspoint": t,
            "s3-accesspoint-fips": t,
            "s3-deprecated": t,
            "s3-fips": t,
            "s3-object-lambda": t,
            "s3-website": t,
            "analytics-gateway": t,
            "aws-cloud9": b,
            cloud9: E
        }
    ], P = [
        0,
        {
            "execute-api": t,
            "emrappui-prod": t,
            "emrnotebooks-prod": t,
            "emrstudio-prod": t,
            dualstack: [
                0,
                {
                    s3: t,
                    "s3-accesspoint": t,
                    "s3-accesspoint-fips": t,
                    "s3-fips": t
                }
            ],
            s3: t,
            "s3-accesspoint": t,
            "s3-accesspoint-fips": t,
            "s3-fips": t,
            "s3-object-lambda": t,
            "s3-website": t
        }
    ], J = [
        0,
        {
            auth: t
        }
    ], M = [
        0,
        {
            auth: t,
            "auth-fips": t
        }
    ], q = [
        0,
        {
            "auth-fips": t
        }
    ], D = [
        0,
        {
            apps: t
        }
    ], O = [
        0,
        {
            paas: t
        }
    ], N = [
        2,
        {
            eu: t
        }
    ], F = [
        0,
        {
            app: t
        }
    ], U = [
        0,
        {
            site: t
        }
    ], L = [
        1,
        {
            com: e,
            edu: e,
            net: e,
            org: e
        }
    ], $ = [
        0,
        {
            j: t
        }
    ], Q = [
        0,
        {
            dyn: t
        }
    ], j = [
        1,
        {
            co: e,
            com: e,
            edu: e,
            gov: e,
            net: e,
            org: e
        }
    ], G = [
        0,
        {
            p: t
        }
    ], H = [
        0,
        {
            user: t
        }
    ], z = [
        0,
        {
            shop: t
        }
    ], W = [
        0,
        {
            cdn: t
        }
    ], V = [
        0,
        {
            cust: t,
            reservd: t
        }
    ], K = [
        0,
        {
            cust: t
        }
    ], Y = [
        0,
        {
            s3: t
        }
    ], Z = [
        1,
        {
            biz: e,
            com: e,
            edu: e,
            gov: e,
            info: e,
            net: e,
            org: e
        }
    ], X = [
        0,
        {
            ipfs: t
        }
    ], ee = [
        1,
        {
            framer: t
        }
    ], te = [
        0,
        {
            forgot: t
        }
    ], re = [
        1,
        {
            gs: e
        }
    ], ne = [
        0,
        {
            nes: e
        }
    ], se = [
        1,
        {
            k12: e,
            cc: e,
            lib: e
        }
    ], oe = [
        1,
        {
            cc: e,
            lib: e
        }
    ];
    return [
        0,
        {
            ac: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    drr: t,
                    feedback: t,
                    forms: t
                }
            ],
            ad: e,
            ae: [
                1,
                {
                    ac: e,
                    co: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    sch: e
                }
            ],
            aero: [
                1,
                {
                    airline: e,
                    airport: e,
                    "accident-investigation": e,
                    "accident-prevention": e,
                    aerobatic: e,
                    aeroclub: e,
                    aerodrome: e,
                    agents: e,
                    "air-surveillance": e,
                    "air-traffic-control": e,
                    aircraft: e,
                    airtraffic: e,
                    ambulance: e,
                    association: e,
                    author: e,
                    ballooning: e,
                    broker: e,
                    caa: e,
                    cargo: e,
                    catering: e,
                    certification: e,
                    championship: e,
                    charter: e,
                    civilaviation: e,
                    club: e,
                    conference: e,
                    consultant: e,
                    consulting: e,
                    control: e,
                    council: e,
                    crew: e,
                    design: e,
                    dgca: e,
                    educator: e,
                    emergency: e,
                    engine: e,
                    engineer: e,
                    entertainment: e,
                    equipment: e,
                    exchange: e,
                    express: e,
                    federation: e,
                    flight: e,
                    freight: e,
                    fuel: e,
                    gliding: e,
                    government: e,
                    groundhandling: e,
                    group: e,
                    hanggliding: e,
                    homebuilt: e,
                    insurance: e,
                    journal: e,
                    journalist: e,
                    leasing: e,
                    logistics: e,
                    magazine: e,
                    maintenance: e,
                    marketplace: e,
                    media: e,
                    microlight: e,
                    modelling: e,
                    navigation: e,
                    parachuting: e,
                    paragliding: e,
                    "passenger-association": e,
                    pilot: e,
                    press: e,
                    production: e,
                    recreation: e,
                    repbody: e,
                    res: e,
                    research: e,
                    rotorcraft: e,
                    safety: e,
                    scientist: e,
                    services: e,
                    show: e,
                    skydiving: e,
                    software: e,
                    student: e,
                    taxi: e,
                    trader: e,
                    trading: e,
                    trainer: e,
                    union: e,
                    workinggroup: e,
                    works: e
                }
            ],
            af: r,
            ag: [
                1,
                {
                    co: e,
                    com: e,
                    net: e,
                    nom: e,
                    org: e,
                    obj: t
                }
            ],
            ai: [
                1,
                {
                    com: e,
                    net: e,
                    off: e,
                    org: e,
                    uwu: t,
                    framer: t
                }
            ],
            al: n,
            am: [
                1,
                {
                    co: e,
                    com: e,
                    commune: e,
                    net: e,
                    org: e,
                    radio: t
                }
            ],
            ao: [
                1,
                {
                    co: e,
                    ed: e,
                    edu: e,
                    gov: e,
                    gv: e,
                    it: e,
                    og: e,
                    org: e,
                    pb: e
                }
            ],
            aq: e,
            ar: [
                1,
                {
                    bet: e,
                    com: e,
                    coop: e,
                    edu: e,
                    gob: e,
                    gov: e,
                    int: e,
                    mil: e,
                    musica: e,
                    mutual: e,
                    net: e,
                    org: e,
                    seg: e,
                    senasa: e,
                    tur: e
                }
            ],
            arpa: [
                1,
                {
                    e164: e,
                    home: e,
                    "in-addr": e,
                    ip6: e,
                    iris: e,
                    uri: e,
                    urn: e
                }
            ],
            as: c,
            asia: [
                1,
                {
                    cloudns: t,
                    daemon: t,
                    dix: t
                }
            ],
            at: [
                1,
                {
                    ac: [
                        1,
                        {
                            sth: e
                        }
                    ],
                    co: e,
                    gv: e,
                    or: e,
                    funkfeuer: [
                        0,
                        {
                            wien: t
                        }
                    ],
                    futurecms: [
                        0,
                        {
                            "*": t,
                            ex: s,
                            in: s
                        }
                    ],
                    futurehosting: t,
                    futuremailing: t,
                    ortsinfo: [
                        0,
                        {
                            ex: s,
                            kunden: s
                        }
                    ],
                    biz: t,
                    info: t,
                    "123webseite": t,
                    priv: t,
                    myspreadshop: t,
                    "12hp": t,
                    "2ix": t,
                    "4lima": t,
                    "lima-city": t
                }
            ],
            au: [
                1,
                {
                    asn: e,
                    com: [
                        1,
                        {
                            cloudlets: [
                                0,
                                {
                                    mel: t
                                }
                            ],
                            myspreadshop: t
                        }
                    ],
                    edu: [
                        1,
                        {
                            act: e,
                            catholic: e,
                            nsw: [
                                1,
                                {
                                    schools: e
                                }
                            ],
                            nt: e,
                            qld: e,
                            sa: e,
                            tas: e,
                            vic: e,
                            wa: e
                        }
                    ],
                    gov: [
                        1,
                        {
                            qld: e,
                            sa: e,
                            tas: e,
                            vic: e,
                            wa: e
                        }
                    ],
                    id: e,
                    net: e,
                    org: e,
                    conf: e,
                    oz: e,
                    act: e,
                    nsw: e,
                    nt: e,
                    qld: e,
                    sa: e,
                    tas: e,
                    vic: e,
                    wa: e
                }
            ],
            aw: [
                1,
                {
                    com: e
                }
            ],
            ax: e,
            az: [
                1,
                {
                    biz: e,
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    info: e,
                    int: e,
                    mil: e,
                    name: e,
                    net: e,
                    org: e,
                    pp: e,
                    pro: e
                }
            ],
            ba: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    rs: t
                }
            ],
            bb: [
                1,
                {
                    biz: e,
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    info: e,
                    net: e,
                    org: e,
                    store: e,
                    tv: e
                }
            ],
            bd: f,
            be: [
                1,
                {
                    ac: e,
                    cloudns: t,
                    webhosting: t,
                    interhostsolutions: [
                        0,
                        {
                            cloud: t
                        }
                    ],
                    kuleuven: [
                        0,
                        {
                            ezproxy: t
                        }
                    ],
                    "123website": t,
                    myspreadshop: t,
                    transurl: s
                }
            ],
            bf: c,
            bg: [
                1,
                {
                    0: e,
                    1: e,
                    2: e,
                    3: e,
                    4: e,
                    5: e,
                    6: e,
                    7: e,
                    8: e,
                    9: e,
                    a: e,
                    b: e,
                    c: e,
                    d: e,
                    e,
                    f: e,
                    g: e,
                    h: e,
                    i: e,
                    j: e,
                    k: e,
                    l: e,
                    m: e,
                    n: e,
                    o: e,
                    p: e,
                    q: e,
                    r: e,
                    s: e,
                    t: e,
                    u: e,
                    v: e,
                    w: e,
                    x: e,
                    y: e,
                    z: e,
                    barsy: t
                }
            ],
            bh: r,
            bi: [
                1,
                {
                    co: e,
                    com: e,
                    edu: e,
                    or: e,
                    org: e
                }
            ],
            biz: [
                1,
                {
                    activetrail: t,
                    "cloud-ip": t,
                    cloudns: t,
                    jozi: t,
                    dyndns: t,
                    "for-better": t,
                    "for-more": t,
                    "for-some": t,
                    "for-the": t,
                    selfip: t,
                    webhop: t,
                    orx: t,
                    mmafan: t,
                    myftp: t,
                    "no-ip": t,
                    dscloud: t
                }
            ],
            bj: [
                1,
                {
                    africa: e,
                    agro: e,
                    architectes: e,
                    assur: e,
                    avocats: e,
                    co: e,
                    com: e,
                    eco: e,
                    econo: e,
                    edu: e,
                    info: e,
                    loisirs: e,
                    money: e,
                    net: e,
                    org: e,
                    ote: e,
                    restaurant: e,
                    resto: e,
                    tourism: e,
                    univ: e
                }
            ],
            bm: r,
            bn: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    co: t
                }
            ],
            bo: [
                1,
                {
                    com: e,
                    edu: e,
                    gob: e,
                    int: e,
                    mil: e,
                    net: e,
                    org: e,
                    tv: e,
                    web: e,
                    academia: e,
                    agro: e,
                    arte: e,
                    blog: e,
                    bolivia: e,
                    ciencia: e,
                    cooperativa: e,
                    democracia: e,
                    deporte: e,
                    ecologia: e,
                    economia: e,
                    empresa: e,
                    indigena: e,
                    industria: e,
                    info: e,
                    medicina: e,
                    movimiento: e,
                    musica: e,
                    natural: e,
                    nombre: e,
                    noticias: e,
                    patria: e,
                    plurinacional: e,
                    politica: e,
                    profesional: e,
                    pueblo: e,
                    revista: e,
                    salud: e,
                    tecnologia: e,
                    tksat: e,
                    transporte: e,
                    wiki: e
                }
            ],
            br: [
                1,
                {
                    "9guacu": e,
                    abc: e,
                    adm: e,
                    adv: e,
                    agr: e,
                    aju: e,
                    am: e,
                    anani: e,
                    aparecida: e,
                    app: e,
                    arq: e,
                    art: e,
                    ato: e,
                    b: e,
                    barueri: e,
                    belem: e,
                    bet: e,
                    bhz: e,
                    bib: e,
                    bio: e,
                    blog: e,
                    bmd: e,
                    boavista: e,
                    bsb: e,
                    campinagrande: e,
                    campinas: e,
                    caxias: e,
                    cim: e,
                    cng: e,
                    cnt: e,
                    com: [
                        1,
                        {
                            simplesite: t
                        }
                    ],
                    contagem: e,
                    coop: e,
                    coz: e,
                    cri: e,
                    cuiaba: e,
                    curitiba: e,
                    def: e,
                    des: e,
                    det: e,
                    dev: e,
                    ecn: e,
                    eco: e,
                    edu: e,
                    emp: e,
                    enf: e,
                    eng: e,
                    esp: e,
                    etc: e,
                    eti: e,
                    far: e,
                    feira: e,
                    flog: e,
                    floripa: e,
                    fm: e,
                    fnd: e,
                    fortal: e,
                    fot: e,
                    foz: e,
                    fst: e,
                    g12: e,
                    geo: e,
                    ggf: e,
                    goiania: e,
                    gov: [
                        1,
                        {
                            ac: e,
                            al: e,
                            am: e,
                            ap: e,
                            ba: e,
                            ce: e,
                            df: e,
                            es: e,
                            go: e,
                            ma: e,
                            mg: e,
                            ms: e,
                            mt: e,
                            pa: e,
                            pb: e,
                            pe: e,
                            pi: e,
                            pr: e,
                            rj: e,
                            rn: e,
                            ro: e,
                            rr: e,
                            rs: e,
                            sc: e,
                            se: e,
                            sp: e,
                            to: e
                        }
                    ],
                    gru: e,
                    imb: e,
                    ind: e,
                    inf: e,
                    jab: e,
                    jampa: e,
                    jdf: e,
                    joinville: e,
                    jor: e,
                    jus: e,
                    leg: [
                        1,
                        {
                            ac: t,
                            al: t,
                            am: t,
                            ap: t,
                            ba: t,
                            ce: t,
                            df: t,
                            es: t,
                            go: t,
                            ma: t,
                            mg: t,
                            ms: t,
                            mt: t,
                            pa: t,
                            pb: t,
                            pe: t,
                            pi: t,
                            pr: t,
                            rj: t,
                            rn: t,
                            ro: t,
                            rr: t,
                            rs: t,
                            sc: t,
                            se: t,
                            sp: t,
                            to: t
                        }
                    ],
                    leilao: e,
                    lel: e,
                    log: e,
                    londrina: e,
                    macapa: e,
                    maceio: e,
                    manaus: e,
                    maringa: e,
                    mat: e,
                    med: e,
                    mil: e,
                    morena: e,
                    mp: e,
                    mus: e,
                    natal: e,
                    net: e,
                    niteroi: e,
                    nom: f,
                    not: e,
                    ntr: e,
                    odo: e,
                    ong: e,
                    org: e,
                    osasco: e,
                    palmas: e,
                    poa: e,
                    ppg: e,
                    pro: e,
                    psc: e,
                    psi: e,
                    pvh: e,
                    qsl: e,
                    radio: e,
                    rec: e,
                    recife: e,
                    rep: e,
                    ribeirao: e,
                    rio: e,
                    riobranco: e,
                    riopreto: e,
                    salvador: e,
                    sampa: e,
                    santamaria: e,
                    santoandre: e,
                    saobernardo: e,
                    saogonca: e,
                    seg: e,
                    sjc: e,
                    slg: e,
                    slz: e,
                    sorocaba: e,
                    srv: e,
                    taxi: e,
                    tc: e,
                    tec: e,
                    teo: e,
                    the: e,
                    tmp: e,
                    trd: e,
                    tur: e,
                    tv: e,
                    udi: e,
                    vet: e,
                    vix: e,
                    vlog: e,
                    wiki: e,
                    zlg: e
                }
            ],
            bs: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    we: t
                }
            ],
            bt: r,
            bv: e,
            bw: [
                1,
                {
                    ac: e,
                    co: e,
                    gov: e,
                    net: e,
                    org: e
                }
            ],
            by: [
                1,
                {
                    gov: e,
                    mil: e,
                    com: e,
                    of: e,
                    mediatech: t
                }
            ],
            bz: [
                1,
                {
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    za: t,
                    mydns: t,
                    gsj: t
                }
            ],
            ca: [
                1,
                {
                    ab: e,
                    bc: e,
                    mb: e,
                    nb: e,
                    nf: e,
                    nl: e,
                    ns: e,
                    nt: e,
                    nu: e,
                    on: e,
                    pe: e,
                    qc: e,
                    sk: e,
                    yk: e,
                    gc: e,
                    barsy: t,
                    awdev: s,
                    co: t,
                    "no-ip": t,
                    myspreadshop: t,
                    box: t
                }
            ],
            cat: e,
            cc: [
                1,
                {
                    cleverapps: t,
                    cloudns: t,
                    ftpaccess: t,
                    "game-server": t,
                    myphotos: t,
                    scrapping: t,
                    twmail: t,
                    csx: t,
                    fantasyleague: t,
                    spawn: [
                        0,
                        {
                            instances: t
                        }
                    ]
                }
            ],
            cd: c,
            cf: e,
            cg: e,
            ch: [
                1,
                {
                    square7: t,
                    cloudns: t,
                    cloudscale: [
                        0,
                        {
                            cust: t,
                            lpg: y,
                            rma: y
                        }
                    ],
                    flow: [
                        0,
                        {
                            ae: [
                                0,
                                {
                                    alp1: t
                                }
                            ],
                            appengine: t
                        }
                    ],
                    "linkyard-cloud": t,
                    gotdns: t,
                    dnsking: t,
                    "123website": t,
                    myspreadshop: t,
                    firenet: [
                        0,
                        {
                            "*": t,
                            svc: s
                        }
                    ],
                    "12hp": t,
                    "2ix": t,
                    "4lima": t,
                    "lima-city": t
                }
            ],
            ci: [
                1,
                {
                    ac: e,
                    "xn--aroport-bya": e,
                    aéroport: e,
                    asso: e,
                    co: e,
                    com: e,
                    ed: e,
                    edu: e,
                    go: e,
                    gouv: e,
                    int: e,
                    net: e,
                    or: e,
                    org: e
                }
            ],
            ck: f,
            cl: [
                1,
                {
                    co: e,
                    gob: e,
                    gov: e,
                    mil: e,
                    cloudns: t
                }
            ],
            cm: [
                1,
                {
                    co: e,
                    com: e,
                    gov: e,
                    net: e
                }
            ],
            cn: [
                1,
                {
                    ac: e,
                    com: [
                        1,
                        {
                            amazonaws: [
                                0,
                                {
                                    "cn-north-1": [
                                        0,
                                        {
                                            "execute-api": t,
                                            "emrappui-prod": t,
                                            "emrnotebooks-prod": t,
                                            "emrstudio-prod": t,
                                            dualstack: _,
                                            s3: t,
                                            "s3-accesspoint": t,
                                            "s3-deprecated": t,
                                            "s3-object-lambda": t,
                                            "s3-website": t
                                        }
                                    ],
                                    "cn-northwest-1": [
                                        0,
                                        {
                                            "execute-api": t,
                                            "emrappui-prod": t,
                                            "emrnotebooks-prod": t,
                                            "emrstudio-prod": t,
                                            dualstack: A,
                                            s3: t,
                                            "s3-accesspoint": t,
                                            "s3-object-lambda": t,
                                            "s3-website": t
                                        }
                                    ],
                                    compute: s,
                                    airflow: [
                                        0,
                                        {
                                            "cn-north-1": s,
                                            "cn-northwest-1": s
                                        }
                                    ],
                                    eb: [
                                        0,
                                        {
                                            "cn-north-1": t,
                                            "cn-northwest-1": t
                                        }
                                    ],
                                    elb: s
                                }
                            ],
                            sagemaker: [
                                0,
                                {
                                    "cn-north-1": u,
                                    "cn-northwest-1": u
                                }
                            ]
                        }
                    ],
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    "xn--55qx5d": e,
                    公司: e,
                    "xn--od0alg": e,
                    網絡: e,
                    "xn--io0a7i": e,
                    网络: e,
                    ah: e,
                    bj: e,
                    cq: e,
                    fj: e,
                    gd: e,
                    gs: e,
                    gx: e,
                    gz: e,
                    ha: e,
                    hb: e,
                    he: e,
                    hi: e,
                    hk: e,
                    hl: e,
                    hn: e,
                    jl: e,
                    js: e,
                    jx: e,
                    ln: e,
                    mo: e,
                    nm: e,
                    nx: e,
                    qh: e,
                    sc: e,
                    sd: e,
                    sh: [
                        1,
                        {
                            as: t
                        }
                    ],
                    sn: e,
                    sx: e,
                    tj: e,
                    tw: e,
                    xj: e,
                    xz: e,
                    yn: e,
                    zj: e,
                    "canva-apps": t,
                    canvasite: v,
                    myqnapcloud: t,
                    quickconnect: S
                }
            ],
            co: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    nom: e,
                    org: e,
                    carrd: t,
                    crd: t,
                    otap: s,
                    leadpages: t,
                    lpages: t,
                    mypi: t,
                    xmit: s,
                    firewalledreplit: a,
                    repl: a,
                    supabase: t
                }
            ],
            com: [
                1,
                {
                    a2hosted: t,
                    cpserver: t,
                    adobeaemcloud: [
                        2,
                        {
                            dev: s
                        }
                    ],
                    africa: t,
                    airkitapps: t,
                    "airkitapps-au": t,
                    aivencloud: t,
                    alibabacloudcs: t,
                    kasserver: t,
                    amazonaws: [
                        0,
                        {
                            "af-south-1": I,
                            "ap-east-1": C,
                            "ap-northeast-1": k,
                            "ap-northeast-2": k,
                            "ap-northeast-3": I,
                            "ap-south-1": k,
                            "ap-south-2": x,
                            "ap-southeast-1": k,
                            "ap-southeast-2": k,
                            "ap-southeast-3": x,
                            "ap-southeast-4": x,
                            "ap-southeast-5": [
                                0,
                                {
                                    "execute-api": t,
                                    dualstack: _,
                                    s3: t,
                                    "s3-accesspoint": t,
                                    "s3-deprecated": t,
                                    "s3-object-lambda": t,
                                    "s3-website": t
                                }
                            ],
                            "ca-central-1": R,
                            "ca-west-1": [
                                0,
                                {
                                    "execute-api": t,
                                    "emrappui-prod": t,
                                    "emrnotebooks-prod": t,
                                    "emrstudio-prod": t,
                                    dualstack: T,
                                    s3: t,
                                    "s3-accesspoint": t,
                                    "s3-accesspoint-fips": t,
                                    "s3-fips": t,
                                    "s3-object-lambda": t,
                                    "s3-website": t
                                }
                            ],
                            "eu-central-1": k,
                            "eu-central-2": x,
                            "eu-north-1": C,
                            "eu-south-1": I,
                            "eu-south-2": x,
                            "eu-west-1": [
                                0,
                                {
                                    "execute-api": t,
                                    "emrappui-prod": t,
                                    "emrnotebooks-prod": t,
                                    "emrstudio-prod": t,
                                    dualstack: _,
                                    s3: t,
                                    "s3-accesspoint": t,
                                    "s3-deprecated": t,
                                    "s3-object-lambda": t,
                                    "s3-website": t,
                                    "analytics-gateway": t,
                                    "aws-cloud9": b,
                                    cloud9: E
                                }
                            ],
                            "eu-west-2": C,
                            "eu-west-3": I,
                            "il-central-1": [
                                0,
                                {
                                    "execute-api": t,
                                    "emrappui-prod": t,
                                    "emrnotebooks-prod": t,
                                    "emrstudio-prod": t,
                                    dualstack: _,
                                    s3: t,
                                    "s3-accesspoint": t,
                                    "s3-object-lambda": t,
                                    "s3-website": t,
                                    "aws-cloud9": b,
                                    cloud9: [
                                        0,
                                        {
                                            vfs: t
                                        }
                                    ]
                                }
                            ],
                            "me-central-1": x,
                            "me-south-1": C,
                            "sa-east-1": I,
                            "us-east-1": [
                                2,
                                {
                                    "execute-api": t,
                                    "emrappui-prod": t,
                                    "emrnotebooks-prod": t,
                                    "emrstudio-prod": t,
                                    dualstack: T,
                                    s3: t,
                                    "s3-accesspoint": t,
                                    "s3-accesspoint-fips": t,
                                    "s3-deprecated": t,
                                    "s3-fips": t,
                                    "s3-object-lambda": t,
                                    "s3-website": t,
                                    "analytics-gateway": t,
                                    "aws-cloud9": b,
                                    cloud9: E
                                }
                            ],
                            "us-east-2": B,
                            "us-gov-east-1": P,
                            "us-gov-west-1": P,
                            "us-west-1": R,
                            "us-west-2": B,
                            compute: s,
                            "compute-1": s,
                            airflow: [
                                0,
                                {
                                    "af-south-1": s,
                                    "ap-east-1": s,
                                    "ap-northeast-1": s,
                                    "ap-northeast-2": s,
                                    "ap-northeast-3": s,
                                    "ap-south-1": s,
                                    "ap-south-2": s,
                                    "ap-southeast-1": s,
                                    "ap-southeast-2": s,
                                    "ap-southeast-3": s,
                                    "ap-southeast-4": s,
                                    "ca-central-1": s,
                                    "ca-west-1": s,
                                    "eu-central-1": s,
                                    "eu-central-2": s,
                                    "eu-north-1": s,
                                    "eu-south-1": s,
                                    "eu-south-2": s,
                                    "eu-west-1": s,
                                    "eu-west-2": s,
                                    "eu-west-3": s,
                                    "il-central-1": s,
                                    "me-central-1": s,
                                    "me-south-1": s,
                                    "sa-east-1": s,
                                    "us-east-1": s,
                                    "us-east-2": s,
                                    "us-west-1": s,
                                    "us-west-2": s
                                }
                            ],
                            s3: t,
                            "s3-1": t,
                            "s3-ap-east-1": t,
                            "s3-ap-northeast-1": t,
                            "s3-ap-northeast-2": t,
                            "s3-ap-northeast-3": t,
                            "s3-ap-south-1": t,
                            "s3-ap-southeast-1": t,
                            "s3-ap-southeast-2": t,
                            "s3-ca-central-1": t,
                            "s3-eu-central-1": t,
                            "s3-eu-north-1": t,
                            "s3-eu-west-1": t,
                            "s3-eu-west-2": t,
                            "s3-eu-west-3": t,
                            "s3-external-1": t,
                            "s3-fips-us-gov-east-1": t,
                            "s3-fips-us-gov-west-1": t,
                            "s3-global": [
                                0,
                                {
                                    accesspoint: [
                                        0,
                                        {
                                            mrap: t
                                        }
                                    ]
                                }
                            ],
                            "s3-me-south-1": t,
                            "s3-sa-east-1": t,
                            "s3-us-east-2": t,
                            "s3-us-gov-east-1": t,
                            "s3-us-gov-west-1": t,
                            "s3-us-west-1": t,
                            "s3-us-west-2": t,
                            "s3-website-ap-northeast-1": t,
                            "s3-website-ap-southeast-1": t,
                            "s3-website-ap-southeast-2": t,
                            "s3-website-eu-west-1": t,
                            "s3-website-sa-east-1": t,
                            "s3-website-us-east-1": t,
                            "s3-website-us-gov-west-1": t,
                            "s3-website-us-west-1": t,
                            "s3-website-us-west-2": t,
                            elb: s
                        }
                    ],
                    amazoncognito: [
                        0,
                        {
                            "af-south-1": J,
                            "ap-east-1": J,
                            "ap-northeast-1": J,
                            "ap-northeast-2": J,
                            "ap-northeast-3": J,
                            "ap-south-1": J,
                            "ap-south-2": J,
                            "ap-southeast-1": J,
                            "ap-southeast-2": J,
                            "ap-southeast-3": J,
                            "ap-southeast-4": J,
                            "ap-southeast-5": J,
                            "ca-central-1": J,
                            "ca-west-1": J,
                            "eu-central-1": J,
                            "eu-central-2": J,
                            "eu-north-1": J,
                            "eu-south-1": J,
                            "eu-south-2": J,
                            "eu-west-1": J,
                            "eu-west-2": J,
                            "eu-west-3": J,
                            "il-central-1": J,
                            "me-central-1": J,
                            "me-south-1": J,
                            "sa-east-1": J,
                            "us-east-1": M,
                            "us-east-2": M,
                            "us-gov-east-1": q,
                            "us-gov-west-1": q,
                            "us-west-1": M,
                            "us-west-2": M
                        }
                    ],
                    amplifyapp: t,
                    awsapprunner: s,
                    awsapps: t,
                    elasticbeanstalk: [
                        2,
                        {
                            "af-south-1": t,
                            "ap-east-1": t,
                            "ap-northeast-1": t,
                            "ap-northeast-2": t,
                            "ap-northeast-3": t,
                            "ap-south-1": t,
                            "ap-southeast-1": t,
                            "ap-southeast-2": t,
                            "ap-southeast-3": t,
                            "ca-central-1": t,
                            "eu-central-1": t,
                            "eu-north-1": t,
                            "eu-south-1": t,
                            "eu-west-1": t,
                            "eu-west-2": t,
                            "eu-west-3": t,
                            "il-central-1": t,
                            "me-south-1": t,
                            "sa-east-1": t,
                            "us-east-1": t,
                            "us-east-2": t,
                            "us-gov-east-1": t,
                            "us-gov-west-1": t,
                            "us-west-1": t,
                            "us-west-2": t
                        }
                    ],
                    awsglobalaccelerator: t,
                    siiites: t,
                    appspacehosted: t,
                    appspaceusercontent: t,
                    "on-aptible": t,
                    myasustor: t,
                    "balena-devices": t,
                    boutir: t,
                    bplaced: t,
                    cafjs: t,
                    "canva-apps": t,
                    "cdn77-storage": t,
                    br: t,
                    cn: t,
                    de: t,
                    eu: t,
                    jpn: t,
                    mex: t,
                    ru: t,
                    sa: t,
                    uk: t,
                    us: t,
                    za: t,
                    "clever-cloud": [
                        0,
                        {
                            services: s
                        }
                    ],
                    dnsabr: t,
                    "ip-ddns": t,
                    jdevcloud: t,
                    wpdevcloud: t,
                    "cf-ipfs": t,
                    "cloudflare-ipfs": t,
                    trycloudflare: t,
                    co: t,
                    devinapps: s,
                    builtwithdark: t,
                    datadetect: [
                        0,
                        {
                            demo: t,
                            instance: t
                        }
                    ],
                    dattolocal: t,
                    dattorelay: t,
                    dattoweb: t,
                    mydatto: t,
                    digitaloceanspaces: s,
                    discordsays: t,
                    discordsez: t,
                    drayddns: t,
                    dreamhosters: t,
                    durumis: t,
                    mydrobo: t,
                    blogdns: t,
                    cechire: t,
                    dnsalias: t,
                    dnsdojo: t,
                    doesntexist: t,
                    dontexist: t,
                    doomdns: t,
                    "dyn-o-saur": t,
                    dynalias: t,
                    "dyndns-at-home": t,
                    "dyndns-at-work": t,
                    "dyndns-blog": t,
                    "dyndns-free": t,
                    "dyndns-home": t,
                    "dyndns-ip": t,
                    "dyndns-mail": t,
                    "dyndns-office": t,
                    "dyndns-pics": t,
                    "dyndns-remote": t,
                    "dyndns-server": t,
                    "dyndns-web": t,
                    "dyndns-wiki": t,
                    "dyndns-work": t,
                    "est-a-la-maison": t,
                    "est-a-la-masion": t,
                    "est-le-patron": t,
                    "est-mon-blogueur": t,
                    "from-ak": t,
                    "from-al": t,
                    "from-ar": t,
                    "from-ca": t,
                    "from-ct": t,
                    "from-dc": t,
                    "from-de": t,
                    "from-fl": t,
                    "from-ga": t,
                    "from-hi": t,
                    "from-ia": t,
                    "from-id": t,
                    "from-il": t,
                    "from-in": t,
                    "from-ks": t,
                    "from-ky": t,
                    "from-ma": t,
                    "from-md": t,
                    "from-mi": t,
                    "from-mn": t,
                    "from-mo": t,
                    "from-ms": t,
                    "from-mt": t,
                    "from-nc": t,
                    "from-nd": t,
                    "from-ne": t,
                    "from-nh": t,
                    "from-nj": t,
                    "from-nm": t,
                    "from-nv": t,
                    "from-oh": t,
                    "from-ok": t,
                    "from-or": t,
                    "from-pa": t,
                    "from-pr": t,
                    "from-ri": t,
                    "from-sc": t,
                    "from-sd": t,
                    "from-tn": t,
                    "from-tx": t,
                    "from-ut": t,
                    "from-va": t,
                    "from-vt": t,
                    "from-wa": t,
                    "from-wi": t,
                    "from-wv": t,
                    "from-wy": t,
                    getmyip: t,
                    gotdns: t,
                    "hobby-site": t,
                    homelinux: t,
                    homeunix: t,
                    iamallama: t,
                    "is-a-anarchist": t,
                    "is-a-blogger": t,
                    "is-a-bookkeeper": t,
                    "is-a-bulls-fan": t,
                    "is-a-caterer": t,
                    "is-a-chef": t,
                    "is-a-conservative": t,
                    "is-a-cpa": t,
                    "is-a-cubicle-slave": t,
                    "is-a-democrat": t,
                    "is-a-designer": t,
                    "is-a-doctor": t,
                    "is-a-financialadvisor": t,
                    "is-a-geek": t,
                    "is-a-green": t,
                    "is-a-guru": t,
                    "is-a-hard-worker": t,
                    "is-a-hunter": t,
                    "is-a-landscaper": t,
                    "is-a-lawyer": t,
                    "is-a-liberal": t,
                    "is-a-libertarian": t,
                    "is-a-llama": t,
                    "is-a-musician": t,
                    "is-a-nascarfan": t,
                    "is-a-nurse": t,
                    "is-a-painter": t,
                    "is-a-personaltrainer": t,
                    "is-a-photographer": t,
                    "is-a-player": t,
                    "is-a-republican": t,
                    "is-a-rockstar": t,
                    "is-a-socialist": t,
                    "is-a-student": t,
                    "is-a-teacher": t,
                    "is-a-techie": t,
                    "is-a-therapist": t,
                    "is-an-accountant": t,
                    "is-an-actor": t,
                    "is-an-actress": t,
                    "is-an-anarchist": t,
                    "is-an-artist": t,
                    "is-an-engineer": t,
                    "is-an-entertainer": t,
                    "is-certified": t,
                    "is-gone": t,
                    "is-into-anime": t,
                    "is-into-cars": t,
                    "is-into-cartoons": t,
                    "is-into-games": t,
                    "is-leet": t,
                    "is-not-certified": t,
                    "is-slick": t,
                    "is-uberleet": t,
                    "is-with-theband": t,
                    "isa-geek": t,
                    "isa-hockeynut": t,
                    issmarterthanyou: t,
                    "likes-pie": t,
                    likescandy: t,
                    "neat-url": t,
                    "saves-the-whales": t,
                    selfip: t,
                    "sells-for-less": t,
                    "sells-for-u": t,
                    servebbs: t,
                    "simple-url": t,
                    "space-to-rent": t,
                    "teaches-yoga": t,
                    writesthisblog: t,
                    ddnsfree: t,
                    ddnsgeek: t,
                    giize: t,
                    gleeze: t,
                    kozow: t,
                    loseyourip: t,
                    ooguy: t,
                    theworkpc: t,
                    mytuleap: t,
                    "tuleap-partners": t,
                    encoreapi: t,
                    evennode: [
                        0,
                        {
                            "eu-1": t,
                            "eu-2": t,
                            "eu-3": t,
                            "eu-4": t,
                            "us-1": t,
                            "us-2": t,
                            "us-3": t,
                            "us-4": t
                        }
                    ],
                    onfabrica: t,
                    "fastly-edge": t,
                    "fastly-terrarium": t,
                    "fastvps-server": t,
                    mydobiss: t,
                    firebaseapp: t,
                    fldrv: t,
                    forgeblocks: t,
                    framercanvas: t,
                    "freebox-os": t,
                    freeboxos: t,
                    freemyip: t,
                    aliases121: t,
                    gentapps: t,
                    gentlentapis: t,
                    githubusercontent: t,
                    "0emm": s,
                    appspot: [
                        2,
                        {
                            r: s
                        }
                    ],
                    blogspot: t,
                    codespot: t,
                    googleapis: t,
                    googlecode: t,
                    pagespeedmobilizer: t,
                    withgoogle: t,
                    withyoutube: t,
                    grayjayleagues: t,
                    hatenablog: t,
                    hatenadiary: t,
                    herokuapp: t,
                    gr: t,
                    smushcdn: t,
                    wphostedmail: t,
                    wpmucdn: t,
                    pixolino: t,
                    "apps-1and1": t,
                    "live-website": t,
                    dopaas: t,
                    "hosted-by-previder": O,
                    hosteur: [
                        0,
                        {
                            "rag-cloud": t,
                            "rag-cloud-ch": t
                        }
                    ],
                    "ik-server": [
                        0,
                        {
                            jcloud: t,
                            "jcloud-ver-jpc": t
                        }
                    ],
                    jelastic: [
                        0,
                        {
                            demo: t
                        }
                    ],
                    massivegrid: O,
                    wafaicloud: [
                        0,
                        {
                            jed: t,
                            ryd: t
                        }
                    ],
                    webadorsite: t,
                    joyent: [
                        0,
                        {
                            cns: s
                        }
                    ],
                    lpusercontent: t,
                    linode: [
                        0,
                        {
                            members: t,
                            nodebalancer: s
                        }
                    ],
                    linodeobjects: s,
                    linodeusercontent: [
                        0,
                        {
                            ip: t
                        }
                    ],
                    localtonet: t,
                    lovableproject: t,
                    barsycenter: t,
                    barsyonline: t,
                    modelscape: t,
                    mwcloudnonprod: t,
                    polyspace: t,
                    mazeplay: t,
                    miniserver: t,
                    atmeta: t,
                    fbsbx: D,
                    meteorapp: N,
                    routingthecloud: t,
                    mydbserver: t,
                    hostedpi: t,
                    "mythic-beasts": [
                        0,
                        {
                            caracal: t,
                            customer: t,
                            fentiger: t,
                            lynx: t,
                            ocelot: t,
                            oncilla: t,
                            onza: t,
                            sphinx: t,
                            vs: t,
                            x: t,
                            yali: t
                        }
                    ],
                    nospamproxy: [
                        0,
                        {
                            cloud: [
                                2,
                                {
                                    o365: t
                                }
                            ]
                        }
                    ],
                    "4u": t,
                    nfshost: t,
                    "3utilities": t,
                    blogsyte: t,
                    ciscofreak: t,
                    damnserver: t,
                    ddnsking: t,
                    ditchyourip: t,
                    dnsiskinky: t,
                    dynns: t,
                    geekgalaxy: t,
                    "health-carereform": t,
                    homesecuritymac: t,
                    homesecuritypc: t,
                    myactivedirectory: t,
                    mysecuritycamera: t,
                    myvnc: t,
                    "net-freaks": t,
                    onthewifi: t,
                    point2this: t,
                    quicksytes: t,
                    securitytactics: t,
                    servebeer: t,
                    servecounterstrike: t,
                    serveexchange: t,
                    serveftp: t,
                    servegame: t,
                    servehalflife: t,
                    servehttp: t,
                    servehumour: t,
                    serveirc: t,
                    servemp3: t,
                    servep2p: t,
                    servepics: t,
                    servequake: t,
                    servesarcasm: t,
                    stufftoread: t,
                    unusualperson: t,
                    workisboring: t,
                    myiphost: t,
                    observableusercontent: [
                        0,
                        {
                            static: t
                        }
                    ],
                    simplesite: t,
                    orsites: t,
                    operaunite: t,
                    "customer-oci": [
                        0,
                        {
                            "*": t,
                            oci: s,
                            ocp: s,
                            ocs: s
                        }
                    ],
                    oraclecloudapps: s,
                    oraclegovcloudapps: s,
                    "authgear-staging": t,
                    authgearapps: t,
                    skygearapp: t,
                    outsystemscloud: t,
                    ownprovider: t,
                    pgfog: t,
                    pagexl: t,
                    gotpantheon: t,
                    paywhirl: s,
                    upsunapp: t,
                    "postman-echo": t,
                    prgmr: [
                        0,
                        {
                            xen: t
                        }
                    ],
                    pythonanywhere: N,
                    qa2: t,
                    "alpha-myqnapcloud": t,
                    "dev-myqnapcloud": t,
                    mycloudnas: t,
                    mynascloud: t,
                    myqnapcloud: t,
                    qualifioapp: t,
                    ladesk: t,
                    qbuser: t,
                    quipelements: s,
                    rackmaze: t,
                    "readthedocs-hosted": t,
                    rhcloud: t,
                    onrender: t,
                    render: F,
                    "subsc-pay": t,
                    "180r": t,
                    dojin: t,
                    sakuratan: t,
                    sakuraweb: t,
                    x0: t,
                    code: [
                        0,
                        {
                            builder: s,
                            "dev-builder": s,
                            "stg-builder": s
                        }
                    ],
                    salesforce: [
                        0,
                        {
                            platform: [
                                0,
                                {
                                    "code-builder-stg": [
                                        0,
                                        {
                                            test: [
                                                0,
                                                {
                                                    "001": s
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    logoip: t,
                    scrysec: t,
                    "firewall-gateway": t,
                    myshopblocks: t,
                    myshopify: t,
                    shopitsite: t,
                    "1kapp": t,
                    appchizi: t,
                    applinzi: t,
                    sinaapp: t,
                    vipsinaapp: t,
                    streamlitapp: t,
                    "try-snowplow": t,
                    "playstation-cloud": t,
                    myspreadshop: t,
                    "w-corp-staticblitz": t,
                    "w-credentialless-staticblitz": t,
                    "w-staticblitz": t,
                    "stackhero-network": t,
                    stdlib: [
                        0,
                        {
                            api: t
                        }
                    ],
                    strapiapp: [
                        2,
                        {
                            media: t
                        }
                    ],
                    "streak-link": t,
                    streaklinks: t,
                    streakusercontent: t,
                    "temp-dns": t,
                    dsmynas: t,
                    familyds: t,
                    mytabit: t,
                    taveusercontent: t,
                    "tb-hosting": U,
                    reservd: t,
                    thingdustdata: t,
                    "townnews-staging": t,
                    typeform: [
                        0,
                        {
                            pro: t
                        }
                    ],
                    hk: t,
                    it: t,
                    "deus-canvas": t,
                    vultrobjects: s,
                    wafflecell: t,
                    hotelwithflight: t,
                    "reserve-online": t,
                    cprapid: t,
                    pleskns: t,
                    remotewd: t,
                    wiardweb: [
                        0,
                        {
                            pages: t
                        }
                    ],
                    wixsite: t,
                    wixstudio: t,
                    messwithdns: t,
                    "woltlab-demo": t,
                    wpenginepowered: [
                        2,
                        {
                            js: t
                        }
                    ],
                    xnbay: [
                        2,
                        {
                            u2: t,
                            "u2-local": t
                        }
                    ],
                    yolasite: t
                }
            ],
            coop: e,
            cr: [
                1,
                {
                    ac: e,
                    co: e,
                    ed: e,
                    fi: e,
                    go: e,
                    or: e,
                    sa: e
                }
            ],
            cu: [
                1,
                {
                    com: e,
                    edu: e,
                    gob: e,
                    inf: e,
                    nat: e,
                    net: e,
                    org: e
                }
            ],
            cv: [
                1,
                {
                    com: e,
                    edu: e,
                    id: e,
                    int: e,
                    net: e,
                    nome: e,
                    org: e,
                    publ: e
                }
            ],
            cw: L,
            cx: [
                1,
                {
                    gov: e,
                    cloudns: t,
                    ath: t,
                    info: t,
                    assessments: t,
                    calculators: t,
                    funnels: t,
                    paynow: t,
                    quizzes: t,
                    researched: t,
                    tests: t
                }
            ],
            cy: [
                1,
                {
                    ac: e,
                    biz: e,
                    com: [
                        1,
                        {
                            scaleforce: $
                        }
                    ],
                    ekloges: e,
                    gov: e,
                    ltd: e,
                    mil: e,
                    net: e,
                    org: e,
                    press: e,
                    pro: e,
                    tm: e
                }
            ],
            cz: [
                1,
                {
                    contentproxy9: [
                        0,
                        {
                            rsc: t
                        }
                    ],
                    realm: t,
                    e4: t,
                    co: t,
                    metacentrum: [
                        0,
                        {
                            cloud: s,
                            custom: t
                        }
                    ],
                    muni: [
                        0,
                        {
                            cloud: [
                                0,
                                {
                                    flt: t,
                                    usr: t
                                }
                            ]
                        }
                    ]
                }
            ],
            de: [
                1,
                {
                    bplaced: t,
                    square7: t,
                    com: t,
                    cosidns: Q,
                    dnsupdater: t,
                    "dynamisches-dns": t,
                    "internet-dns": t,
                    "l-o-g-i-n": t,
                    ddnss: [
                        2,
                        {
                            dyn: t,
                            dyndns: t
                        }
                    ],
                    "dyn-ip24": t,
                    dyndns1: t,
                    "home-webserver": [
                        2,
                        {
                            dyn: t
                        }
                    ],
                    "myhome-server": t,
                    dnshome: t,
                    fuettertdasnetz: t,
                    isteingeek: t,
                    istmein: t,
                    lebtimnetz: t,
                    leitungsen: t,
                    traeumtgerade: t,
                    frusky: s,
                    goip: t,
                    "xn--gnstigbestellen-zvb": t,
                    günstigbestellen: t,
                    "xn--gnstigliefern-wob": t,
                    günstigliefern: t,
                    "hs-heilbronn": [
                        0,
                        {
                            it: [
                                0,
                                {
                                    pages: t,
                                    "pages-research": t
                                }
                            ]
                        }
                    ],
                    "dyn-berlin": t,
                    "in-berlin": t,
                    "in-brb": t,
                    "in-butter": t,
                    "in-dsl": t,
                    "in-vpn": t,
                    iservschule: t,
                    "mein-iserv": t,
                    schulplattform: t,
                    schulserver: t,
                    "test-iserv": t,
                    keymachine: t,
                    "git-repos": t,
                    "lcube-server": t,
                    "svn-repos": t,
                    barsy: t,
                    webspaceconfig: t,
                    "123webseite": t,
                    rub: t,
                    "ruhr-uni-bochum": [
                        2,
                        {
                            noc: [
                                0,
                                {
                                    io: t
                                }
                            ]
                        }
                    ],
                    logoip: t,
                    "firewall-gateway": t,
                    "my-gateway": t,
                    "my-router": t,
                    spdns: t,
                    speedpartner: [
                        0,
                        {
                            customer: t
                        }
                    ],
                    myspreadshop: t,
                    "taifun-dns": t,
                    "12hp": t,
                    "2ix": t,
                    "4lima": t,
                    "lima-city": t,
                    "dd-dns": t,
                    "dray-dns": t,
                    draydns: t,
                    "dyn-vpn": t,
                    dynvpn: t,
                    "mein-vigor": t,
                    "my-vigor": t,
                    "my-wan": t,
                    "syno-ds": t,
                    "synology-diskstation": t,
                    "synology-ds": t,
                    uberspace: s,
                    "virtual-user": t,
                    virtualuser: t,
                    "community-pro": t,
                    diskussionsbereich: t
                }
            ],
            dj: e,
            dk: [
                1,
                {
                    biz: t,
                    co: t,
                    firm: t,
                    reg: t,
                    store: t,
                    "123hjemmeside": t,
                    myspreadshop: t
                }
            ],
            dm: j,
            do: [
                1,
                {
                    art: e,
                    com: e,
                    edu: e,
                    gob: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    sld: e,
                    web: e
                }
            ],
            dz: [
                1,
                {
                    art: e,
                    asso: e,
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    pol: e,
                    soc: e,
                    tm: e
                }
            ],
            ec: [
                1,
                {
                    com: e,
                    edu: e,
                    fin: e,
                    gob: e,
                    gov: e,
                    info: e,
                    k12: e,
                    med: e,
                    mil: e,
                    net: e,
                    org: e,
                    pro: e,
                    base: t,
                    official: t
                }
            ],
            edu: [
                1,
                {
                    rit: [
                        0,
                        {
                            "git-pages": t
                        }
                    ]
                }
            ],
            ee: [
                1,
                {
                    aip: e,
                    com: e,
                    edu: e,
                    fie: e,
                    gov: e,
                    lib: e,
                    med: e,
                    org: e,
                    pri: e,
                    riik: e
                }
            ],
            eg: [
                1,
                {
                    ac: e,
                    com: e,
                    edu: e,
                    eun: e,
                    gov: e,
                    info: e,
                    me: e,
                    mil: e,
                    name: e,
                    net: e,
                    org: e,
                    sci: e,
                    sport: e,
                    tv: e
                }
            ],
            er: f,
            es: [
                1,
                {
                    com: e,
                    edu: e,
                    gob: e,
                    nom: e,
                    org: e,
                    "123miweb": t,
                    myspreadshop: t
                }
            ],
            et: [
                1,
                {
                    biz: e,
                    com: e,
                    edu: e,
                    gov: e,
                    info: e,
                    name: e,
                    net: e,
                    org: e
                }
            ],
            eu: [
                1,
                {
                    airkitapps: t,
                    cloudns: t,
                    dogado: [
                        0,
                        {
                            jelastic: t
                        }
                    ],
                    barsy: t,
                    spdns: t,
                    transurl: s,
                    diskstation: t
                }
            ],
            fi: [
                1,
                {
                    aland: e,
                    dy: t,
                    "xn--hkkinen-5wa": t,
                    häkkinen: t,
                    iki: t,
                    cloudplatform: [
                        0,
                        {
                            fi: t
                        }
                    ],
                    datacenter: [
                        0,
                        {
                            demo: t,
                            paas: t
                        }
                    ],
                    kapsi: t,
                    "123kotisivu": t,
                    myspreadshop: t
                }
            ],
            fj: [
                1,
                {
                    ac: e,
                    biz: e,
                    com: e,
                    gov: e,
                    info: e,
                    mil: e,
                    name: e,
                    net: e,
                    org: e,
                    pro: e
                }
            ],
            fk: f,
            fm: [
                1,
                {
                    com: e,
                    edu: e,
                    net: e,
                    org: e,
                    radio: t,
                    user: s
                }
            ],
            fo: e,
            fr: [
                1,
                {
                    asso: e,
                    com: e,
                    gouv: e,
                    nom: e,
                    prd: e,
                    tm: e,
                    avoues: e,
                    cci: e,
                    greta: e,
                    "huissier-justice": e,
                    "en-root": t,
                    "fbx-os": t,
                    fbxos: t,
                    "freebox-os": t,
                    freeboxos: t,
                    goupile: t,
                    "123siteweb": t,
                    "on-web": t,
                    "chirurgiens-dentistes-en-france": t,
                    dedibox: t,
                    aeroport: t,
                    avocat: t,
                    chambagri: t,
                    "chirurgiens-dentistes": t,
                    "experts-comptables": t,
                    medecin: t,
                    notaires: t,
                    pharmacien: t,
                    port: t,
                    veterinaire: t,
                    myspreadshop: t,
                    ynh: t
                }
            ],
            ga: e,
            gb: e,
            gd: [
                1,
                {
                    edu: e,
                    gov: e
                }
            ],
            ge: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    pvt: e,
                    school: e
                }
            ],
            gf: e,
            gg: [
                1,
                {
                    co: e,
                    net: e,
                    org: e,
                    botdash: t,
                    kaas: t,
                    stackit: t,
                    panel: [
                        2,
                        {
                            daemon: t
                        }
                    ]
                }
            ],
            gh: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    org: e
                }
            ],
            gi: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    ltd: e,
                    mod: e,
                    org: e
                }
            ],
            gl: [
                1,
                {
                    co: e,
                    com: e,
                    edu: e,
                    net: e,
                    org: e,
                    biz: t
                }
            ],
            gm: e,
            gn: [
                1,
                {
                    ac: e,
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e
                }
            ],
            gov: e,
            gp: [
                1,
                {
                    asso: e,
                    com: e,
                    edu: e,
                    mobi: e,
                    net: e,
                    org: e
                }
            ],
            gq: e,
            gr: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    barsy: t,
                    simplesite: t
                }
            ],
            gs: e,
            gt: [
                1,
                {
                    com: e,
                    edu: e,
                    gob: e,
                    ind: e,
                    mil: e,
                    net: e,
                    org: e
                }
            ],
            gu: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    guam: e,
                    info: e,
                    net: e,
                    org: e,
                    web: e
                }
            ],
            gw: e,
            gy: j,
            hk: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    idv: e,
                    net: e,
                    org: e,
                    "xn--ciqpn": e,
                    个人: e,
                    "xn--gmqw5a": e,
                    個人: e,
                    "xn--55qx5d": e,
                    公司: e,
                    "xn--mxtq1m": e,
                    政府: e,
                    "xn--lcvr32d": e,
                    敎育: e,
                    "xn--wcvs22d": e,
                    教育: e,
                    "xn--gmq050i": e,
                    箇人: e,
                    "xn--uc0atv": e,
                    組織: e,
                    "xn--uc0ay4a": e,
                    組织: e,
                    "xn--od0alg": e,
                    網絡: e,
                    "xn--zf0avx": e,
                    網络: e,
                    "xn--mk0axi": e,
                    组織: e,
                    "xn--tn0ag": e,
                    组织: e,
                    "xn--od0aq3b": e,
                    网絡: e,
                    "xn--io0a7i": e,
                    网络: e,
                    inc: t,
                    ltd: t
                }
            ],
            hm: e,
            hn: [
                1,
                {
                    com: e,
                    edu: e,
                    gob: e,
                    mil: e,
                    net: e,
                    org: e
                }
            ],
            hr: [
                1,
                {
                    com: e,
                    from: e,
                    iz: e,
                    name: e,
                    brendly: z
                }
            ],
            ht: [
                1,
                {
                    adult: e,
                    art: e,
                    asso: e,
                    com: e,
                    coop: e,
                    edu: e,
                    firm: e,
                    gouv: e,
                    info: e,
                    med: e,
                    net: e,
                    org: e,
                    perso: e,
                    pol: e,
                    pro: e,
                    rel: e,
                    shop: e,
                    rt: t
                }
            ],
            hu: [
                1,
                {
                    2e3: e,
                    agrar: e,
                    bolt: e,
                    casino: e,
                    city: e,
                    co: e,
                    erotica: e,
                    erotika: e,
                    film: e,
                    forum: e,
                    games: e,
                    hotel: e,
                    info: e,
                    ingatlan: e,
                    jogasz: e,
                    konyvelo: e,
                    lakas: e,
                    media: e,
                    news: e,
                    org: e,
                    priv: e,
                    reklam: e,
                    sex: e,
                    shop: e,
                    sport: e,
                    suli: e,
                    szex: e,
                    tm: e,
                    tozsde: e,
                    utazas: e,
                    video: e
                }
            ],
            id: [
                1,
                {
                    ac: e,
                    biz: e,
                    co: e,
                    desa: e,
                    go: e,
                    mil: e,
                    my: e,
                    net: e,
                    or: e,
                    ponpes: e,
                    sch: e,
                    web: e,
                    zone: t
                }
            ],
            ie: [
                1,
                {
                    gov: e,
                    myspreadshop: t
                }
            ],
            il: [
                1,
                {
                    ac: e,
                    co: [
                        1,
                        {
                            ravpage: t,
                            mytabit: t,
                            tabitorder: t
                        }
                    ],
                    gov: e,
                    idf: e,
                    k12: e,
                    muni: e,
                    net: e,
                    org: e
                }
            ],
            "xn--4dbrk0ce": [
                1,
                {
                    "xn--4dbgdty6c": e,
                    "xn--5dbhl8d": e,
                    "xn--8dbq2a": e,
                    "xn--hebda8b": e
                }
            ],
            ישראל: [
                1,
                {
                    אקדמיה: e,
                    ישוב: e,
                    צהל: e,
                    ממשל: e
                }
            ],
            im: [
                1,
                {
                    ac: e,
                    co: [
                        1,
                        {
                            ltd: e,
                            plc: e
                        }
                    ],
                    com: e,
                    net: e,
                    org: e,
                    tt: e,
                    tv: e
                }
            ],
            in: [
                1,
                {
                    "5g": e,
                    "6g": e,
                    ac: e,
                    ai: e,
                    am: e,
                    bihar: e,
                    biz: e,
                    business: e,
                    ca: e,
                    cn: e,
                    co: e,
                    com: e,
                    coop: e,
                    cs: e,
                    delhi: e,
                    dr: e,
                    edu: e,
                    er: e,
                    firm: e,
                    gen: e,
                    gov: e,
                    gujarat: e,
                    ind: e,
                    info: e,
                    int: e,
                    internet: e,
                    io: e,
                    me: e,
                    mil: e,
                    net: e,
                    nic: e,
                    org: e,
                    pg: e,
                    post: e,
                    pro: e,
                    res: e,
                    travel: e,
                    tv: e,
                    uk: e,
                    up: e,
                    us: e,
                    cloudns: t,
                    barsy: t,
                    web: t,
                    supabase: t
                }
            ],
            info: [
                1,
                {
                    cloudns: t,
                    "dynamic-dns": t,
                    "barrel-of-knowledge": t,
                    "barrell-of-knowledge": t,
                    dyndns: t,
                    "for-our": t,
                    "groks-the": t,
                    "groks-this": t,
                    "here-for-more": t,
                    knowsitall: t,
                    selfip: t,
                    webhop: t,
                    barsy: t,
                    mayfirst: t,
                    mittwald: t,
                    mittwaldserver: t,
                    typo3server: t,
                    dvrcam: t,
                    ilovecollege: t,
                    "no-ip": t,
                    forumz: t,
                    nsupdate: t,
                    dnsupdate: t,
                    "v-info": t
                }
            ],
            int: [
                1,
                {
                    eu: e
                }
            ],
            io: [
                1,
                {
                    2038: t,
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    nom: e,
                    org: e,
                    "on-acorn": s,
                    myaddr: t,
                    apigee: t,
                    "b-data": t,
                    beagleboard: t,
                    bitbucket: t,
                    bluebite: t,
                    boxfuse: t,
                    brave: o,
                    browsersafetymark: t,
                    bubble: W,
                    bubbleapps: t,
                    bigv: [
                        0,
                        {
                            uk0: t
                        }
                    ],
                    cleverapps: t,
                    cloudbeesusercontent: t,
                    dappnode: [
                        0,
                        {
                            dyndns: t
                        }
                    ],
                    darklang: t,
                    definima: t,
                    dedyn: t,
                    "fh-muenster": t,
                    shw: t,
                    forgerock: [
                        0,
                        {
                            id: t
                        }
                    ],
                    github: t,
                    gitlab: t,
                    lolipop: t,
                    "hasura-app": t,
                    hostyhosting: t,
                    hypernode: t,
                    moonscale: s,
                    beebyte: O,
                    beebyteapp: [
                        0,
                        {
                            sekd1: t
                        }
                    ],
                    jele: t,
                    webthings: t,
                    loginline: t,
                    barsy: t,
                    azurecontainer: s,
                    ngrok: [
                        2,
                        {
                            ap: t,
                            au: t,
                            eu: t,
                            in: t,
                            jp: t,
                            sa: t,
                            us: t
                        }
                    ],
                    nodeart: [
                        0,
                        {
                            stage: t
                        }
                    ],
                    pantheonsite: t,
                    pstmn: [
                        2,
                        {
                            mock: t
                        }
                    ],
                    protonet: t,
                    qcx: [
                        2,
                        {
                            sys: s
                        }
                    ],
                    qoto: t,
                    vaporcloud: t,
                    myrdbx: t,
                    "rb-hosting": U,
                    "on-k3s": s,
                    "on-rio": s,
                    readthedocs: t,
                    resindevice: t,
                    resinstaging: [
                        0,
                        {
                            devices: t
                        }
                    ],
                    hzc: t,
                    sandcats: t,
                    scrypted: [
                        0,
                        {
                            client: t
                        }
                    ],
                    "mo-siemens": t,
                    lair: D,
                    stolos: s,
                    musician: t,
                    utwente: t,
                    edugit: t,
                    telebit: t,
                    thingdust: [
                        0,
                        {
                            dev: V,
                            disrec: V,
                            prod: K,
                            testing: V
                        }
                    ],
                    tickets: t,
                    webflow: t,
                    webflowtest: t,
                    editorx: t,
                    wixstudio: t,
                    basicserver: t,
                    virtualserver: t
                }
            ],
            iq: n,
            ir: [
                1,
                {
                    ac: e,
                    co: e,
                    gov: e,
                    id: e,
                    net: e,
                    org: e,
                    sch: e,
                    "xn--mgba3a4f16a": e,
                    ایران: e,
                    "xn--mgba3a4fra": e,
                    ايران: e,
                    arvanedge: t
                }
            ],
            is: e,
            it: [
                1,
                {
                    edu: e,
                    gov: e,
                    abr: e,
                    abruzzo: e,
                    "aosta-valley": e,
                    aostavalley: e,
                    bas: e,
                    basilicata: e,
                    cal: e,
                    calabria: e,
                    cam: e,
                    campania: e,
                    "emilia-romagna": e,
                    emiliaromagna: e,
                    emr: e,
                    "friuli-v-giulia": e,
                    "friuli-ve-giulia": e,
                    "friuli-vegiulia": e,
                    "friuli-venezia-giulia": e,
                    "friuli-veneziagiulia": e,
                    "friuli-vgiulia": e,
                    "friuliv-giulia": e,
                    "friulive-giulia": e,
                    friulivegiulia: e,
                    "friulivenezia-giulia": e,
                    friuliveneziagiulia: e,
                    friulivgiulia: e,
                    fvg: e,
                    laz: e,
                    lazio: e,
                    lig: e,
                    liguria: e,
                    lom: e,
                    lombardia: e,
                    lombardy: e,
                    lucania: e,
                    mar: e,
                    marche: e,
                    mol: e,
                    molise: e,
                    piedmont: e,
                    piemonte: e,
                    pmn: e,
                    pug: e,
                    puglia: e,
                    sar: e,
                    sardegna: e,
                    sardinia: e,
                    sic: e,
                    sicilia: e,
                    sicily: e,
                    taa: e,
                    tos: e,
                    toscana: e,
                    "trentin-sud-tirol": e,
                    "xn--trentin-sd-tirol-rzb": e,
                    "trentin-süd-tirol": e,
                    "trentin-sudtirol": e,
                    "xn--trentin-sdtirol-7vb": e,
                    "trentin-südtirol": e,
                    "trentin-sued-tirol": e,
                    "trentin-suedtirol": e,
                    trentino: e,
                    "trentino-a-adige": e,
                    "trentino-aadige": e,
                    "trentino-alto-adige": e,
                    "trentino-altoadige": e,
                    "trentino-s-tirol": e,
                    "trentino-stirol": e,
                    "trentino-sud-tirol": e,
                    "xn--trentino-sd-tirol-c3b": e,
                    "trentino-süd-tirol": e,
                    "trentino-sudtirol": e,
                    "xn--trentino-sdtirol-szb": e,
                    "trentino-südtirol": e,
                    "trentino-sued-tirol": e,
                    "trentino-suedtirol": e,
                    "trentinoa-adige": e,
                    trentinoaadige: e,
                    "trentinoalto-adige": e,
                    trentinoaltoadige: e,
                    "trentinos-tirol": e,
                    trentinostirol: e,
                    "trentinosud-tirol": e,
                    "xn--trentinosd-tirol-rzb": e,
                    "trentinosüd-tirol": e,
                    trentinosudtirol: e,
                    "xn--trentinosdtirol-7vb": e,
                    trentinosüdtirol: e,
                    "trentinosued-tirol": e,
                    trentinosuedtirol: e,
                    "trentinsud-tirol": e,
                    "xn--trentinsd-tirol-6vb": e,
                    "trentinsüd-tirol": e,
                    trentinsudtirol: e,
                    "xn--trentinsdtirol-nsb": e,
                    trentinsüdtirol: e,
                    "trentinsued-tirol": e,
                    trentinsuedtirol: e,
                    tuscany: e,
                    umb: e,
                    umbria: e,
                    "val-d-aosta": e,
                    "val-daosta": e,
                    "vald-aosta": e,
                    valdaosta: e,
                    "valle-aosta": e,
                    "valle-d-aosta": e,
                    "valle-daosta": e,
                    valleaosta: e,
                    "valled-aosta": e,
                    valledaosta: e,
                    "vallee-aoste": e,
                    "xn--valle-aoste-ebb": e,
                    "vallée-aoste": e,
                    "vallee-d-aoste": e,
                    "xn--valle-d-aoste-ehb": e,
                    "vallée-d-aoste": e,
                    valleeaoste: e,
                    "xn--valleaoste-e7a": e,
                    valléeaoste: e,
                    valleedaoste: e,
                    "xn--valledaoste-ebb": e,
                    valléedaoste: e,
                    vao: e,
                    vda: e,
                    ven: e,
                    veneto: e,
                    ag: e,
                    agrigento: e,
                    al: e,
                    alessandria: e,
                    "alto-adige": e,
                    altoadige: e,
                    an: e,
                    ancona: e,
                    "andria-barletta-trani": e,
                    "andria-trani-barletta": e,
                    andriabarlettatrani: e,
                    andriatranibarletta: e,
                    ao: e,
                    aosta: e,
                    aoste: e,
                    ap: e,
                    aq: e,
                    aquila: e,
                    ar: e,
                    arezzo: e,
                    "ascoli-piceno": e,
                    ascolipiceno: e,
                    asti: e,
                    at: e,
                    av: e,
                    avellino: e,
                    ba: e,
                    balsan: e,
                    "balsan-sudtirol": e,
                    "xn--balsan-sdtirol-nsb": e,
                    "balsan-südtirol": e,
                    "balsan-suedtirol": e,
                    bari: e,
                    "barletta-trani-andria": e,
                    barlettatraniandria: e,
                    belluno: e,
                    benevento: e,
                    bergamo: e,
                    bg: e,
                    bi: e,
                    biella: e,
                    bl: e,
                    bn: e,
                    bo: e,
                    bologna: e,
                    bolzano: e,
                    "bolzano-altoadige": e,
                    bozen: e,
                    "bozen-sudtirol": e,
                    "xn--bozen-sdtirol-2ob": e,
                    "bozen-südtirol": e,
                    "bozen-suedtirol": e,
                    br: e,
                    brescia: e,
                    brindisi: e,
                    bs: e,
                    bt: e,
                    bulsan: e,
                    "bulsan-sudtirol": e,
                    "xn--bulsan-sdtirol-nsb": e,
                    "bulsan-südtirol": e,
                    "bulsan-suedtirol": e,
                    bz: e,
                    ca: e,
                    cagliari: e,
                    caltanissetta: e,
                    "campidano-medio": e,
                    campidanomedio: e,
                    campobasso: e,
                    "carbonia-iglesias": e,
                    carboniaiglesias: e,
                    "carrara-massa": e,
                    carraramassa: e,
                    caserta: e,
                    catania: e,
                    catanzaro: e,
                    cb: e,
                    ce: e,
                    "cesena-forli": e,
                    "xn--cesena-forl-mcb": e,
                    "cesena-forlì": e,
                    cesenaforli: e,
                    "xn--cesenaforl-i8a": e,
                    cesenaforlì: e,
                    ch: e,
                    chieti: e,
                    ci: e,
                    cl: e,
                    cn: e,
                    co: e,
                    como: e,
                    cosenza: e,
                    cr: e,
                    cremona: e,
                    crotone: e,
                    cs: e,
                    ct: e,
                    cuneo: e,
                    cz: e,
                    "dell-ogliastra": e,
                    dellogliastra: e,
                    en: e,
                    enna: e,
                    fc: e,
                    fe: e,
                    fermo: e,
                    ferrara: e,
                    fg: e,
                    fi: e,
                    firenze: e,
                    florence: e,
                    fm: e,
                    foggia: e,
                    "forli-cesena": e,
                    "xn--forl-cesena-fcb": e,
                    "forlì-cesena": e,
                    forlicesena: e,
                    "xn--forlcesena-c8a": e,
                    forlìcesena: e,
                    fr: e,
                    frosinone: e,
                    ge: e,
                    genoa: e,
                    genova: e,
                    go: e,
                    gorizia: e,
                    gr: e,
                    grosseto: e,
                    "iglesias-carbonia": e,
                    iglesiascarbonia: e,
                    im: e,
                    imperia: e,
                    is: e,
                    isernia: e,
                    kr: e,
                    "la-spezia": e,
                    laquila: e,
                    laspezia: e,
                    latina: e,
                    lc: e,
                    le: e,
                    lecce: e,
                    lecco: e,
                    li: e,
                    livorno: e,
                    lo: e,
                    lodi: e,
                    lt: e,
                    lu: e,
                    lucca: e,
                    macerata: e,
                    mantova: e,
                    "massa-carrara": e,
                    massacarrara: e,
                    matera: e,
                    mb: e,
                    mc: e,
                    me: e,
                    "medio-campidano": e,
                    mediocampidano: e,
                    messina: e,
                    mi: e,
                    milan: e,
                    milano: e,
                    mn: e,
                    mo: e,
                    modena: e,
                    monza: e,
                    "monza-brianza": e,
                    "monza-e-della-brianza": e,
                    monzabrianza: e,
                    monzaebrianza: e,
                    monzaedellabrianza: e,
                    ms: e,
                    mt: e,
                    na: e,
                    naples: e,
                    napoli: e,
                    no: e,
                    novara: e,
                    nu: e,
                    nuoro: e,
                    og: e,
                    ogliastra: e,
                    "olbia-tempio": e,
                    olbiatempio: e,
                    or: e,
                    oristano: e,
                    ot: e,
                    pa: e,
                    padova: e,
                    padua: e,
                    palermo: e,
                    parma: e,
                    pavia: e,
                    pc: e,
                    pd: e,
                    pe: e,
                    perugia: e,
                    "pesaro-urbino": e,
                    pesarourbino: e,
                    pescara: e,
                    pg: e,
                    pi: e,
                    piacenza: e,
                    pisa: e,
                    pistoia: e,
                    pn: e,
                    po: e,
                    pordenone: e,
                    potenza: e,
                    pr: e,
                    prato: e,
                    pt: e,
                    pu: e,
                    pv: e,
                    pz: e,
                    ra: e,
                    ragusa: e,
                    ravenna: e,
                    rc: e,
                    re: e,
                    "reggio-calabria": e,
                    "reggio-emilia": e,
                    reggiocalabria: e,
                    reggioemilia: e,
                    rg: e,
                    ri: e,
                    rieti: e,
                    rimini: e,
                    rm: e,
                    rn: e,
                    ro: e,
                    roma: e,
                    rome: e,
                    rovigo: e,
                    sa: e,
                    salerno: e,
                    sassari: e,
                    savona: e,
                    si: e,
                    siena: e,
                    siracusa: e,
                    so: e,
                    sondrio: e,
                    sp: e,
                    sr: e,
                    ss: e,
                    "xn--sdtirol-n2a": e,
                    südtirol: e,
                    suedtirol: e,
                    sv: e,
                    ta: e,
                    taranto: e,
                    te: e,
                    "tempio-olbia": e,
                    tempioolbia: e,
                    teramo: e,
                    terni: e,
                    tn: e,
                    to: e,
                    torino: e,
                    tp: e,
                    tr: e,
                    "trani-andria-barletta": e,
                    "trani-barletta-andria": e,
                    traniandriabarletta: e,
                    tranibarlettaandria: e,
                    trapani: e,
                    trento: e,
                    treviso: e,
                    trieste: e,
                    ts: e,
                    turin: e,
                    tv: e,
                    ud: e,
                    udine: e,
                    "urbino-pesaro": e,
                    urbinopesaro: e,
                    va: e,
                    varese: e,
                    vb: e,
                    vc: e,
                    ve: e,
                    venezia: e,
                    venice: e,
                    verbania: e,
                    vercelli: e,
                    verona: e,
                    vi: e,
                    "vibo-valentia": e,
                    vibovalentia: e,
                    vicenza: e,
                    viterbo: e,
                    vr: e,
                    vs: e,
                    vt: e,
                    vv: e,
                    "12chars": t,
                    ibxos: t,
                    iliadboxos: t,
                    neen: [
                        0,
                        {
                            jc: t
                        }
                    ],
                    "123homepage": t,
                    "16-b": t,
                    "32-b": t,
                    "64-b": t,
                    myspreadshop: t,
                    syncloud: t
                }
            ],
            je: [
                1,
                {
                    co: e,
                    net: e,
                    org: e,
                    of: t
                }
            ],
            jm: f,
            jo: [
                1,
                {
                    agri: e,
                    ai: e,
                    com: e,
                    edu: e,
                    eng: e,
                    fm: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    per: e,
                    phd: e,
                    sch: e,
                    tv: e
                }
            ],
            jobs: e,
            jp: [
                1,
                {
                    ac: e,
                    ad: e,
                    co: e,
                    ed: e,
                    go: e,
                    gr: e,
                    lg: e,
                    ne: [
                        1,
                        {
                            aseinet: H,
                            gehirn: t,
                            ivory: t,
                            "mail-box": t,
                            mints: t,
                            mokuren: t,
                            opal: t,
                            sakura: t,
                            sumomo: t,
                            topaz: t
                        }
                    ],
                    or: e,
                    aichi: [
                        1,
                        {
                            aisai: e,
                            ama: e,
                            anjo: e,
                            asuke: e,
                            chiryu: e,
                            chita: e,
                            fuso: e,
                            gamagori: e,
                            handa: e,
                            hazu: e,
                            hekinan: e,
                            higashiura: e,
                            ichinomiya: e,
                            inazawa: e,
                            inuyama: e,
                            isshiki: e,
                            iwakura: e,
                            kanie: e,
                            kariya: e,
                            kasugai: e,
                            kira: e,
                            kiyosu: e,
                            komaki: e,
                            konan: e,
                            kota: e,
                            mihama: e,
                            miyoshi: e,
                            nishio: e,
                            nisshin: e,
                            obu: e,
                            oguchi: e,
                            oharu: e,
                            okazaki: e,
                            owariasahi: e,
                            seto: e,
                            shikatsu: e,
                            shinshiro: e,
                            shitara: e,
                            tahara: e,
                            takahama: e,
                            tobishima: e,
                            toei: e,
                            togo: e,
                            tokai: e,
                            tokoname: e,
                            toyoake: e,
                            toyohashi: e,
                            toyokawa: e,
                            toyone: e,
                            toyota: e,
                            tsushima: e,
                            yatomi: e
                        }
                    ],
                    akita: [
                        1,
                        {
                            akita: e,
                            daisen: e,
                            fujisato: e,
                            gojome: e,
                            hachirogata: e,
                            happou: e,
                            higashinaruse: e,
                            honjo: e,
                            honjyo: e,
                            ikawa: e,
                            kamikoani: e,
                            kamioka: e,
                            katagami: e,
                            kazuno: e,
                            kitaakita: e,
                            kosaka: e,
                            kyowa: e,
                            misato: e,
                            mitane: e,
                            moriyoshi: e,
                            nikaho: e,
                            noshiro: e,
                            odate: e,
                            oga: e,
                            ogata: e,
                            semboku: e,
                            yokote: e,
                            yurihonjo: e
                        }
                    ],
                    aomori: [
                        1,
                        {
                            aomori: e,
                            gonohe: e,
                            hachinohe: e,
                            hashikami: e,
                            hiranai: e,
                            hirosaki: e,
                            itayanagi: e,
                            kuroishi: e,
                            misawa: e,
                            mutsu: e,
                            nakadomari: e,
                            noheji: e,
                            oirase: e,
                            owani: e,
                            rokunohe: e,
                            sannohe: e,
                            shichinohe: e,
                            shingo: e,
                            takko: e,
                            towada: e,
                            tsugaru: e,
                            tsuruta: e
                        }
                    ],
                    chiba: [
                        1,
                        {
                            abiko: e,
                            asahi: e,
                            chonan: e,
                            chosei: e,
                            choshi: e,
                            chuo: e,
                            funabashi: e,
                            futtsu: e,
                            hanamigawa: e,
                            ichihara: e,
                            ichikawa: e,
                            ichinomiya: e,
                            inzai: e,
                            isumi: e,
                            kamagaya: e,
                            kamogawa: e,
                            kashiwa: e,
                            katori: e,
                            katsuura: e,
                            kimitsu: e,
                            kisarazu: e,
                            kozaki: e,
                            kujukuri: e,
                            kyonan: e,
                            matsudo: e,
                            midori: e,
                            mihama: e,
                            minamiboso: e,
                            mobara: e,
                            mutsuzawa: e,
                            nagara: e,
                            nagareyama: e,
                            narashino: e,
                            narita: e,
                            noda: e,
                            oamishirasato: e,
                            omigawa: e,
                            onjuku: e,
                            otaki: e,
                            sakae: e,
                            sakura: e,
                            shimofusa: e,
                            shirako: e,
                            shiroi: e,
                            shisui: e,
                            sodegaura: e,
                            sosa: e,
                            tako: e,
                            tateyama: e,
                            togane: e,
                            tohnosho: e,
                            tomisato: e,
                            urayasu: e,
                            yachimata: e,
                            yachiyo: e,
                            yokaichiba: e,
                            yokoshibahikari: e,
                            yotsukaido: e
                        }
                    ],
                    ehime: [
                        1,
                        {
                            ainan: e,
                            honai: e,
                            ikata: e,
                            imabari: e,
                            iyo: e,
                            kamijima: e,
                            kihoku: e,
                            kumakogen: e,
                            masaki: e,
                            matsuno: e,
                            matsuyama: e,
                            namikata: e,
                            niihama: e,
                            ozu: e,
                            saijo: e,
                            seiyo: e,
                            shikokuchuo: e,
                            tobe: e,
                            toon: e,
                            uchiko: e,
                            uwajima: e,
                            yawatahama: e
                        }
                    ],
                    fukui: [
                        1,
                        {
                            echizen: e,
                            eiheiji: e,
                            fukui: e,
                            ikeda: e,
                            katsuyama: e,
                            mihama: e,
                            minamiechizen: e,
                            obama: e,
                            ohi: e,
                            ono: e,
                            sabae: e,
                            sakai: e,
                            takahama: e,
                            tsuruga: e,
                            wakasa: e
                        }
                    ],
                    fukuoka: [
                        1,
                        {
                            ashiya: e,
                            buzen: e,
                            chikugo: e,
                            chikuho: e,
                            chikujo: e,
                            chikushino: e,
                            chikuzen: e,
                            chuo: e,
                            dazaifu: e,
                            fukuchi: e,
                            hakata: e,
                            higashi: e,
                            hirokawa: e,
                            hisayama: e,
                            iizuka: e,
                            inatsuki: e,
                            kaho: e,
                            kasuga: e,
                            kasuya: e,
                            kawara: e,
                            keisen: e,
                            koga: e,
                            kurate: e,
                            kurogi: e,
                            kurume: e,
                            minami: e,
                            miyako: e,
                            miyama: e,
                            miyawaka: e,
                            mizumaki: e,
                            munakata: e,
                            nakagawa: e,
                            nakama: e,
                            nishi: e,
                            nogata: e,
                            ogori: e,
                            okagaki: e,
                            okawa: e,
                            oki: e,
                            omuta: e,
                            onga: e,
                            onojo: e,
                            oto: e,
                            saigawa: e,
                            sasaguri: e,
                            shingu: e,
                            shinyoshitomi: e,
                            shonai: e,
                            soeda: e,
                            sue: e,
                            tachiarai: e,
                            tagawa: e,
                            takata: e,
                            toho: e,
                            toyotsu: e,
                            tsuiki: e,
                            ukiha: e,
                            umi: e,
                            usui: e,
                            yamada: e,
                            yame: e,
                            yanagawa: e,
                            yukuhashi: e
                        }
                    ],
                    fukushima: [
                        1,
                        {
                            aizubange: e,
                            aizumisato: e,
                            aizuwakamatsu: e,
                            asakawa: e,
                            bandai: e,
                            date: e,
                            fukushima: e,
                            furudono: e,
                            futaba: e,
                            hanawa: e,
                            higashi: e,
                            hirata: e,
                            hirono: e,
                            iitate: e,
                            inawashiro: e,
                            ishikawa: e,
                            iwaki: e,
                            izumizaki: e,
                            kagamiishi: e,
                            kaneyama: e,
                            kawamata: e,
                            kitakata: e,
                            kitashiobara: e,
                            koori: e,
                            koriyama: e,
                            kunimi: e,
                            miharu: e,
                            mishima: e,
                            namie: e,
                            nango: e,
                            nishiaizu: e,
                            nishigo: e,
                            okuma: e,
                            omotego: e,
                            ono: e,
                            otama: e,
                            samegawa: e,
                            shimogo: e,
                            shirakawa: e,
                            showa: e,
                            soma: e,
                            sukagawa: e,
                            taishin: e,
                            tamakawa: e,
                            tanagura: e,
                            tenei: e,
                            yabuki: e,
                            yamato: e,
                            yamatsuri: e,
                            yanaizu: e,
                            yugawa: e
                        }
                    ],
                    gifu: [
                        1,
                        {
                            anpachi: e,
                            ena: e,
                            gifu: e,
                            ginan: e,
                            godo: e,
                            gujo: e,
                            hashima: e,
                            hichiso: e,
                            hida: e,
                            higashishirakawa: e,
                            ibigawa: e,
                            ikeda: e,
                            kakamigahara: e,
                            kani: e,
                            kasahara: e,
                            kasamatsu: e,
                            kawaue: e,
                            kitagata: e,
                            mino: e,
                            minokamo: e,
                            mitake: e,
                            mizunami: e,
                            motosu: e,
                            nakatsugawa: e,
                            ogaki: e,
                            sakahogi: e,
                            seki: e,
                            sekigahara: e,
                            shirakawa: e,
                            tajimi: e,
                            takayama: e,
                            tarui: e,
                            toki: e,
                            tomika: e,
                            wanouchi: e,
                            yamagata: e,
                            yaotsu: e,
                            yoro: e
                        }
                    ],
                    gunma: [
                        1,
                        {
                            annaka: e,
                            chiyoda: e,
                            fujioka: e,
                            higashiagatsuma: e,
                            isesaki: e,
                            itakura: e,
                            kanna: e,
                            kanra: e,
                            katashina: e,
                            kawaba: e,
                            kiryu: e,
                            kusatsu: e,
                            maebashi: e,
                            meiwa: e,
                            midori: e,
                            minakami: e,
                            naganohara: e,
                            nakanojo: e,
                            nanmoku: e,
                            numata: e,
                            oizumi: e,
                            ora: e,
                            ota: e,
                            shibukawa: e,
                            shimonita: e,
                            shinto: e,
                            showa: e,
                            takasaki: e,
                            takayama: e,
                            tamamura: e,
                            tatebayashi: e,
                            tomioka: e,
                            tsukiyono: e,
                            tsumagoi: e,
                            ueno: e,
                            yoshioka: e
                        }
                    ],
                    hiroshima: [
                        1,
                        {
                            asaminami: e,
                            daiwa: e,
                            etajima: e,
                            fuchu: e,
                            fukuyama: e,
                            hatsukaichi: e,
                            higashihiroshima: e,
                            hongo: e,
                            jinsekikogen: e,
                            kaita: e,
                            kui: e,
                            kumano: e,
                            kure: e,
                            mihara: e,
                            miyoshi: e,
                            naka: e,
                            onomichi: e,
                            osakikamijima: e,
                            otake: e,
                            saka: e,
                            sera: e,
                            seranishi: e,
                            shinichi: e,
                            shobara: e,
                            takehara: e
                        }
                    ],
                    hokkaido: [
                        1,
                        {
                            abashiri: e,
                            abira: e,
                            aibetsu: e,
                            akabira: e,
                            akkeshi: e,
                            asahikawa: e,
                            ashibetsu: e,
                            ashoro: e,
                            assabu: e,
                            atsuma: e,
                            bibai: e,
                            biei: e,
                            bifuka: e,
                            bihoro: e,
                            biratori: e,
                            chippubetsu: e,
                            chitose: e,
                            date: e,
                            ebetsu: e,
                            embetsu: e,
                            eniwa: e,
                            erimo: e,
                            esan: e,
                            esashi: e,
                            fukagawa: e,
                            fukushima: e,
                            furano: e,
                            furubira: e,
                            haboro: e,
                            hakodate: e,
                            hamatonbetsu: e,
                            hidaka: e,
                            higashikagura: e,
                            higashikawa: e,
                            hiroo: e,
                            hokuryu: e,
                            hokuto: e,
                            honbetsu: e,
                            horokanai: e,
                            horonobe: e,
                            ikeda: e,
                            imakane: e,
                            ishikari: e,
                            iwamizawa: e,
                            iwanai: e,
                            kamifurano: e,
                            kamikawa: e,
                            kamishihoro: e,
                            kamisunagawa: e,
                            kamoenai: e,
                            kayabe: e,
                            kembuchi: e,
                            kikonai: e,
                            kimobetsu: e,
                            kitahiroshima: e,
                            kitami: e,
                            kiyosato: e,
                            koshimizu: e,
                            kunneppu: e,
                            kuriyama: e,
                            kuromatsunai: e,
                            kushiro: e,
                            kutchan: e,
                            kyowa: e,
                            mashike: e,
                            matsumae: e,
                            mikasa: e,
                            minamifurano: e,
                            mombetsu: e,
                            moseushi: e,
                            mukawa: e,
                            muroran: e,
                            naie: e,
                            nakagawa: e,
                            nakasatsunai: e,
                            nakatombetsu: e,
                            nanae: e,
                            nanporo: e,
                            nayoro: e,
                            nemuro: e,
                            niikappu: e,
                            niki: e,
                            nishiokoppe: e,
                            noboribetsu: e,
                            numata: e,
                            obihiro: e,
                            obira: e,
                            oketo: e,
                            okoppe: e,
                            otaru: e,
                            otobe: e,
                            otofuke: e,
                            otoineppu: e,
                            oumu: e,
                            ozora: e,
                            pippu: e,
                            rankoshi: e,
                            rebun: e,
                            rikubetsu: e,
                            rishiri: e,
                            rishirifuji: e,
                            saroma: e,
                            sarufutsu: e,
                            shakotan: e,
                            shari: e,
                            shibecha: e,
                            shibetsu: e,
                            shikabe: e,
                            shikaoi: e,
                            shimamaki: e,
                            shimizu: e,
                            shimokawa: e,
                            shinshinotsu: e,
                            shintoku: e,
                            shiranuka: e,
                            shiraoi: e,
                            shiriuchi: e,
                            sobetsu: e,
                            sunagawa: e,
                            taiki: e,
                            takasu: e,
                            takikawa: e,
                            takinoue: e,
                            teshikaga: e,
                            tobetsu: e,
                            tohma: e,
                            tomakomai: e,
                            tomari: e,
                            toya: e,
                            toyako: e,
                            toyotomi: e,
                            toyoura: e,
                            tsubetsu: e,
                            tsukigata: e,
                            urakawa: e,
                            urausu: e,
                            uryu: e,
                            utashinai: e,
                            wakkanai: e,
                            wassamu: e,
                            yakumo: e,
                            yoichi: e
                        }
                    ],
                    hyogo: [
                        1,
                        {
                            aioi: e,
                            akashi: e,
                            ako: e,
                            amagasaki: e,
                            aogaki: e,
                            asago: e,
                            ashiya: e,
                            awaji: e,
                            fukusaki: e,
                            goshiki: e,
                            harima: e,
                            himeji: e,
                            ichikawa: e,
                            inagawa: e,
                            itami: e,
                            kakogawa: e,
                            kamigori: e,
                            kamikawa: e,
                            kasai: e,
                            kasuga: e,
                            kawanishi: e,
                            miki: e,
                            minamiawaji: e,
                            nishinomiya: e,
                            nishiwaki: e,
                            ono: e,
                            sanda: e,
                            sannan: e,
                            sasayama: e,
                            sayo: e,
                            shingu: e,
                            shinonsen: e,
                            shiso: e,
                            sumoto: e,
                            taishi: e,
                            taka: e,
                            takarazuka: e,
                            takasago: e,
                            takino: e,
                            tamba: e,
                            tatsuno: e,
                            toyooka: e,
                            yabu: e,
                            yashiro: e,
                            yoka: e,
                            yokawa: e
                        }
                    ],
                    ibaraki: [
                        1,
                        {
                            ami: e,
                            asahi: e,
                            bando: e,
                            chikusei: e,
                            daigo: e,
                            fujishiro: e,
                            hitachi: e,
                            hitachinaka: e,
                            hitachiomiya: e,
                            hitachiota: e,
                            ibaraki: e,
                            ina: e,
                            inashiki: e,
                            itako: e,
                            iwama: e,
                            joso: e,
                            kamisu: e,
                            kasama: e,
                            kashima: e,
                            kasumigaura: e,
                            koga: e,
                            miho: e,
                            mito: e,
                            moriya: e,
                            naka: e,
                            namegata: e,
                            oarai: e,
                            ogawa: e,
                            omitama: e,
                            ryugasaki: e,
                            sakai: e,
                            sakuragawa: e,
                            shimodate: e,
                            shimotsuma: e,
                            shirosato: e,
                            sowa: e,
                            suifu: e,
                            takahagi: e,
                            tamatsukuri: e,
                            tokai: e,
                            tomobe: e,
                            tone: e,
                            toride: e,
                            tsuchiura: e,
                            tsukuba: e,
                            uchihara: e,
                            ushiku: e,
                            yachiyo: e,
                            yamagata: e,
                            yawara: e,
                            yuki: e
                        }
                    ],
                    ishikawa: [
                        1,
                        {
                            anamizu: e,
                            hakui: e,
                            hakusan: e,
                            kaga: e,
                            kahoku: e,
                            kanazawa: e,
                            kawakita: e,
                            komatsu: e,
                            nakanoto: e,
                            nanao: e,
                            nomi: e,
                            nonoichi: e,
                            noto: e,
                            shika: e,
                            suzu: e,
                            tsubata: e,
                            tsurugi: e,
                            uchinada: e,
                            wajima: e
                        }
                    ],
                    iwate: [
                        1,
                        {
                            fudai: e,
                            fujisawa: e,
                            hanamaki: e,
                            hiraizumi: e,
                            hirono: e,
                            ichinohe: e,
                            ichinoseki: e,
                            iwaizumi: e,
                            iwate: e,
                            joboji: e,
                            kamaishi: e,
                            kanegasaki: e,
                            karumai: e,
                            kawai: e,
                            kitakami: e,
                            kuji: e,
                            kunohe: e,
                            kuzumaki: e,
                            miyako: e,
                            mizusawa: e,
                            morioka: e,
                            ninohe: e,
                            noda: e,
                            ofunato: e,
                            oshu: e,
                            otsuchi: e,
                            rikuzentakata: e,
                            shiwa: e,
                            shizukuishi: e,
                            sumita: e,
                            tanohata: e,
                            tono: e,
                            yahaba: e,
                            yamada: e
                        }
                    ],
                    kagawa: [
                        1,
                        {
                            ayagawa: e,
                            higashikagawa: e,
                            kanonji: e,
                            kotohira: e,
                            manno: e,
                            marugame: e,
                            mitoyo: e,
                            naoshima: e,
                            sanuki: e,
                            tadotsu: e,
                            takamatsu: e,
                            tonosho: e,
                            uchinomi: e,
                            utazu: e,
                            zentsuji: e
                        }
                    ],
                    kagoshima: [
                        1,
                        {
                            akune: e,
                            amami: e,
                            hioki: e,
                            isa: e,
                            isen: e,
                            izumi: e,
                            kagoshima: e,
                            kanoya: e,
                            kawanabe: e,
                            kinko: e,
                            kouyama: e,
                            makurazaki: e,
                            matsumoto: e,
                            minamitane: e,
                            nakatane: e,
                            nishinoomote: e,
                            satsumasendai: e,
                            soo: e,
                            tarumizu: e,
                            yusui: e
                        }
                    ],
                    kanagawa: [
                        1,
                        {
                            aikawa: e,
                            atsugi: e,
                            ayase: e,
                            chigasaki: e,
                            ebina: e,
                            fujisawa: e,
                            hadano: e,
                            hakone: e,
                            hiratsuka: e,
                            isehara: e,
                            kaisei: e,
                            kamakura: e,
                            kiyokawa: e,
                            matsuda: e,
                            minamiashigara: e,
                            miura: e,
                            nakai: e,
                            ninomiya: e,
                            odawara: e,
                            oi: e,
                            oiso: e,
                            sagamihara: e,
                            samukawa: e,
                            tsukui: e,
                            yamakita: e,
                            yamato: e,
                            yokosuka: e,
                            yugawara: e,
                            zama: e,
                            zushi: e
                        }
                    ],
                    kochi: [
                        1,
                        {
                            aki: e,
                            geisei: e,
                            hidaka: e,
                            higashitsuno: e,
                            ino: e,
                            kagami: e,
                            kami: e,
                            kitagawa: e,
                            kochi: e,
                            mihara: e,
                            motoyama: e,
                            muroto: e,
                            nahari: e,
                            nakamura: e,
                            nankoku: e,
                            nishitosa: e,
                            niyodogawa: e,
                            ochi: e,
                            okawa: e,
                            otoyo: e,
                            otsuki: e,
                            sakawa: e,
                            sukumo: e,
                            susaki: e,
                            tosa: e,
                            tosashimizu: e,
                            toyo: e,
                            tsuno: e,
                            umaji: e,
                            yasuda: e,
                            yusuhara: e
                        }
                    ],
                    kumamoto: [
                        1,
                        {
                            amakusa: e,
                            arao: e,
                            aso: e,
                            choyo: e,
                            gyokuto: e,
                            kamiamakusa: e,
                            kikuchi: e,
                            kumamoto: e,
                            mashiki: e,
                            mifune: e,
                            minamata: e,
                            minamioguni: e,
                            nagasu: e,
                            nishihara: e,
                            oguni: e,
                            ozu: e,
                            sumoto: e,
                            takamori: e,
                            uki: e,
                            uto: e,
                            yamaga: e,
                            yamato: e,
                            yatsushiro: e
                        }
                    ],
                    kyoto: [
                        1,
                        {
                            ayabe: e,
                            fukuchiyama: e,
                            higashiyama: e,
                            ide: e,
                            ine: e,
                            joyo: e,
                            kameoka: e,
                            kamo: e,
                            kita: e,
                            kizu: e,
                            kumiyama: e,
                            kyotamba: e,
                            kyotanabe: e,
                            kyotango: e,
                            maizuru: e,
                            minami: e,
                            minamiyamashiro: e,
                            miyazu: e,
                            muko: e,
                            nagaokakyo: e,
                            nakagyo: e,
                            nantan: e,
                            oyamazaki: e,
                            sakyo: e,
                            seika: e,
                            tanabe: e,
                            uji: e,
                            ujitawara: e,
                            wazuka: e,
                            yamashina: e,
                            yawata: e
                        }
                    ],
                    mie: [
                        1,
                        {
                            asahi: e,
                            inabe: e,
                            ise: e,
                            kameyama: e,
                            kawagoe: e,
                            kiho: e,
                            kisosaki: e,
                            kiwa: e,
                            komono: e,
                            kumano: e,
                            kuwana: e,
                            matsusaka: e,
                            meiwa: e,
                            mihama: e,
                            minamiise: e,
                            misugi: e,
                            miyama: e,
                            nabari: e,
                            shima: e,
                            suzuka: e,
                            tado: e,
                            taiki: e,
                            taki: e,
                            tamaki: e,
                            toba: e,
                            tsu: e,
                            udono: e,
                            ureshino: e,
                            watarai: e,
                            yokkaichi: e
                        }
                    ],
                    miyagi: [
                        1,
                        {
                            furukawa: e,
                            higashimatsushima: e,
                            ishinomaki: e,
                            iwanuma: e,
                            kakuda: e,
                            kami: e,
                            kawasaki: e,
                            marumori: e,
                            matsushima: e,
                            minamisanriku: e,
                            misato: e,
                            murata: e,
                            natori: e,
                            ogawara: e,
                            ohira: e,
                            onagawa: e,
                            osaki: e,
                            rifu: e,
                            semine: e,
                            shibata: e,
                            shichikashuku: e,
                            shikama: e,
                            shiogama: e,
                            shiroishi: e,
                            tagajo: e,
                            taiwa: e,
                            tome: e,
                            tomiya: e,
                            wakuya: e,
                            watari: e,
                            yamamoto: e,
                            zao: e
                        }
                    ],
                    miyazaki: [
                        1,
                        {
                            aya: e,
                            ebino: e,
                            gokase: e,
                            hyuga: e,
                            kadogawa: e,
                            kawaminami: e,
                            kijo: e,
                            kitagawa: e,
                            kitakata: e,
                            kitaura: e,
                            kobayashi: e,
                            kunitomi: e,
                            kushima: e,
                            mimata: e,
                            miyakonojo: e,
                            miyazaki: e,
                            morotsuka: e,
                            nichinan: e,
                            nishimera: e,
                            nobeoka: e,
                            saito: e,
                            shiiba: e,
                            shintomi: e,
                            takaharu: e,
                            takanabe: e,
                            takazaki: e,
                            tsuno: e
                        }
                    ],
                    nagano: [
                        1,
                        {
                            achi: e,
                            agematsu: e,
                            anan: e,
                            aoki: e,
                            asahi: e,
                            azumino: e,
                            chikuhoku: e,
                            chikuma: e,
                            chino: e,
                            fujimi: e,
                            hakuba: e,
                            hara: e,
                            hiraya: e,
                            iida: e,
                            iijima: e,
                            iiyama: e,
                            iizuna: e,
                            ikeda: e,
                            ikusaka: e,
                            ina: e,
                            karuizawa: e,
                            kawakami: e,
                            kiso: e,
                            kisofukushima: e,
                            kitaaiki: e,
                            komagane: e,
                            komoro: e,
                            matsukawa: e,
                            matsumoto: e,
                            miasa: e,
                            minamiaiki: e,
                            minamimaki: e,
                            minamiminowa: e,
                            minowa: e,
                            miyada: e,
                            miyota: e,
                            mochizuki: e,
                            nagano: e,
                            nagawa: e,
                            nagiso: e,
                            nakagawa: e,
                            nakano: e,
                            nozawaonsen: e,
                            obuse: e,
                            ogawa: e,
                            okaya: e,
                            omachi: e,
                            omi: e,
                            ookuwa: e,
                            ooshika: e,
                            otaki: e,
                            otari: e,
                            sakae: e,
                            sakaki: e,
                            saku: e,
                            sakuho: e,
                            shimosuwa: e,
                            shinanomachi: e,
                            shiojiri: e,
                            suwa: e,
                            suzaka: e,
                            takagi: e,
                            takamori: e,
                            takayama: e,
                            tateshina: e,
                            tatsuno: e,
                            togakushi: e,
                            togura: e,
                            tomi: e,
                            ueda: e,
                            wada: e,
                            yamagata: e,
                            yamanouchi: e,
                            yasaka: e,
                            yasuoka: e
                        }
                    ],
                    nagasaki: [
                        1,
                        {
                            chijiwa: e,
                            futsu: e,
                            goto: e,
                            hasami: e,
                            hirado: e,
                            iki: e,
                            isahaya: e,
                            kawatana: e,
                            kuchinotsu: e,
                            matsuura: e,
                            nagasaki: e,
                            obama: e,
                            omura: e,
                            oseto: e,
                            saikai: e,
                            sasebo: e,
                            seihi: e,
                            shimabara: e,
                            shinkamigoto: e,
                            togitsu: e,
                            tsushima: e,
                            unzen: e
                        }
                    ],
                    nara: [
                        1,
                        {
                            ando: e,
                            gose: e,
                            heguri: e,
                            higashiyoshino: e,
                            ikaruga: e,
                            ikoma: e,
                            kamikitayama: e,
                            kanmaki: e,
                            kashiba: e,
                            kashihara: e,
                            katsuragi: e,
                            kawai: e,
                            kawakami: e,
                            kawanishi: e,
                            koryo: e,
                            kurotaki: e,
                            mitsue: e,
                            miyake: e,
                            nara: e,
                            nosegawa: e,
                            oji: e,
                            ouda: e,
                            oyodo: e,
                            sakurai: e,
                            sango: e,
                            shimoichi: e,
                            shimokitayama: e,
                            shinjo: e,
                            soni: e,
                            takatori: e,
                            tawaramoto: e,
                            tenkawa: e,
                            tenri: e,
                            uda: e,
                            yamatokoriyama: e,
                            yamatotakada: e,
                            yamazoe: e,
                            yoshino: e
                        }
                    ],
                    niigata: [
                        1,
                        {
                            aga: e,
                            agano: e,
                            gosen: e,
                            itoigawa: e,
                            izumozaki: e,
                            joetsu: e,
                            kamo: e,
                            kariwa: e,
                            kashiwazaki: e,
                            minamiuonuma: e,
                            mitsuke: e,
                            muika: e,
                            murakami: e,
                            myoko: e,
                            nagaoka: e,
                            niigata: e,
                            ojiya: e,
                            omi: e,
                            sado: e,
                            sanjo: e,
                            seiro: e,
                            seirou: e,
                            sekikawa: e,
                            shibata: e,
                            tagami: e,
                            tainai: e,
                            tochio: e,
                            tokamachi: e,
                            tsubame: e,
                            tsunan: e,
                            uonuma: e,
                            yahiko: e,
                            yoita: e,
                            yuzawa: e
                        }
                    ],
                    oita: [
                        1,
                        {
                            beppu: e,
                            bungoono: e,
                            bungotakada: e,
                            hasama: e,
                            hiji: e,
                            himeshima: e,
                            hita: e,
                            kamitsue: e,
                            kokonoe: e,
                            kuju: e,
                            kunisaki: e,
                            kusu: e,
                            oita: e,
                            saiki: e,
                            taketa: e,
                            tsukumi: e,
                            usa: e,
                            usuki: e,
                            yufu: e
                        }
                    ],
                    okayama: [
                        1,
                        {
                            akaiwa: e,
                            asakuchi: e,
                            bizen: e,
                            hayashima: e,
                            ibara: e,
                            kagamino: e,
                            kasaoka: e,
                            kibichuo: e,
                            kumenan: e,
                            kurashiki: e,
                            maniwa: e,
                            misaki: e,
                            nagi: e,
                            niimi: e,
                            nishiawakura: e,
                            okayama: e,
                            satosho: e,
                            setouchi: e,
                            shinjo: e,
                            shoo: e,
                            soja: e,
                            takahashi: e,
                            tamano: e,
                            tsuyama: e,
                            wake: e,
                            yakage: e
                        }
                    ],
                    okinawa: [
                        1,
                        {
                            aguni: e,
                            ginowan: e,
                            ginoza: e,
                            gushikami: e,
                            haebaru: e,
                            higashi: e,
                            hirara: e,
                            iheya: e,
                            ishigaki: e,
                            ishikawa: e,
                            itoman: e,
                            izena: e,
                            kadena: e,
                            kin: e,
                            kitadaito: e,
                            kitanakagusuku: e,
                            kumejima: e,
                            kunigami: e,
                            minamidaito: e,
                            motobu: e,
                            nago: e,
                            naha: e,
                            nakagusuku: e,
                            nakijin: e,
                            nanjo: e,
                            nishihara: e,
                            ogimi: e,
                            okinawa: e,
                            onna: e,
                            shimoji: e,
                            taketomi: e,
                            tarama: e,
                            tokashiki: e,
                            tomigusuku: e,
                            tonaki: e,
                            urasoe: e,
                            uruma: e,
                            yaese: e,
                            yomitan: e,
                            yonabaru: e,
                            yonaguni: e,
                            zamami: e
                        }
                    ],
                    osaka: [
                        1,
                        {
                            abeno: e,
                            chihayaakasaka: e,
                            chuo: e,
                            daito: e,
                            fujiidera: e,
                            habikino: e,
                            hannan: e,
                            higashiosaka: e,
                            higashisumiyoshi: e,
                            higashiyodogawa: e,
                            hirakata: e,
                            ibaraki: e,
                            ikeda: e,
                            izumi: e,
                            izumiotsu: e,
                            izumisano: e,
                            kadoma: e,
                            kaizuka: e,
                            kanan: e,
                            kashiwara: e,
                            katano: e,
                            kawachinagano: e,
                            kishiwada: e,
                            kita: e,
                            kumatori: e,
                            matsubara: e,
                            minato: e,
                            minoh: e,
                            misaki: e,
                            moriguchi: e,
                            neyagawa: e,
                            nishi: e,
                            nose: e,
                            osakasayama: e,
                            sakai: e,
                            sayama: e,
                            sennan: e,
                            settsu: e,
                            shijonawate: e,
                            shimamoto: e,
                            suita: e,
                            tadaoka: e,
                            taishi: e,
                            tajiri: e,
                            takaishi: e,
                            takatsuki: e,
                            tondabayashi: e,
                            toyonaka: e,
                            toyono: e,
                            yao: e
                        }
                    ],
                    saga: [
                        1,
                        {
                            ariake: e,
                            arita: e,
                            fukudomi: e,
                            genkai: e,
                            hamatama: e,
                            hizen: e,
                            imari: e,
                            kamimine: e,
                            kanzaki: e,
                            karatsu: e,
                            kashima: e,
                            kitagata: e,
                            kitahata: e,
                            kiyama: e,
                            kouhoku: e,
                            kyuragi: e,
                            nishiarita: e,
                            ogi: e,
                            omachi: e,
                            ouchi: e,
                            saga: e,
                            shiroishi: e,
                            taku: e,
                            tara: e,
                            tosu: e,
                            yoshinogari: e
                        }
                    ],
                    saitama: [
                        1,
                        {
                            arakawa: e,
                            asaka: e,
                            chichibu: e,
                            fujimi: e,
                            fujimino: e,
                            fukaya: e,
                            hanno: e,
                            hanyu: e,
                            hasuda: e,
                            hatogaya: e,
                            hatoyama: e,
                            hidaka: e,
                            higashichichibu: e,
                            higashimatsuyama: e,
                            honjo: e,
                            ina: e,
                            iruma: e,
                            iwatsuki: e,
                            kamiizumi: e,
                            kamikawa: e,
                            kamisato: e,
                            kasukabe: e,
                            kawagoe: e,
                            kawaguchi: e,
                            kawajima: e,
                            kazo: e,
                            kitamoto: e,
                            koshigaya: e,
                            kounosu: e,
                            kuki: e,
                            kumagaya: e,
                            matsubushi: e,
                            minano: e,
                            misato: e,
                            miyashiro: e,
                            miyoshi: e,
                            moroyama: e,
                            nagatoro: e,
                            namegawa: e,
                            niiza: e,
                            ogano: e,
                            ogawa: e,
                            ogose: e,
                            okegawa: e,
                            omiya: e,
                            otaki: e,
                            ranzan: e,
                            ryokami: e,
                            saitama: e,
                            sakado: e,
                            satte: e,
                            sayama: e,
                            shiki: e,
                            shiraoka: e,
                            soka: e,
                            sugito: e,
                            toda: e,
                            tokigawa: e,
                            tokorozawa: e,
                            tsurugashima: e,
                            urawa: e,
                            warabi: e,
                            yashio: e,
                            yokoze: e,
                            yono: e,
                            yorii: e,
                            yoshida: e,
                            yoshikawa: e,
                            yoshimi: e
                        }
                    ],
                    shiga: [
                        1,
                        {
                            aisho: e,
                            gamo: e,
                            higashiomi: e,
                            hikone: e,
                            koka: e,
                            konan: e,
                            kosei: e,
                            koto: e,
                            kusatsu: e,
                            maibara: e,
                            moriyama: e,
                            nagahama: e,
                            nishiazai: e,
                            notogawa: e,
                            omihachiman: e,
                            otsu: e,
                            ritto: e,
                            ryuoh: e,
                            takashima: e,
                            takatsuki: e,
                            torahime: e,
                            toyosato: e,
                            yasu: e
                        }
                    ],
                    shimane: [
                        1,
                        {
                            akagi: e,
                            ama: e,
                            gotsu: e,
                            hamada: e,
                            higashiizumo: e,
                            hikawa: e,
                            hikimi: e,
                            izumo: e,
                            kakinoki: e,
                            masuda: e,
                            matsue: e,
                            misato: e,
                            nishinoshima: e,
                            ohda: e,
                            okinoshima: e,
                            okuizumo: e,
                            shimane: e,
                            tamayu: e,
                            tsuwano: e,
                            unnan: e,
                            yakumo: e,
                            yasugi: e,
                            yatsuka: e
                        }
                    ],
                    shizuoka: [
                        1,
                        {
                            arai: e,
                            atami: e,
                            fuji: e,
                            fujieda: e,
                            fujikawa: e,
                            fujinomiya: e,
                            fukuroi: e,
                            gotemba: e,
                            haibara: e,
                            hamamatsu: e,
                            higashiizu: e,
                            ito: e,
                            iwata: e,
                            izu: e,
                            izunokuni: e,
                            kakegawa: e,
                            kannami: e,
                            kawanehon: e,
                            kawazu: e,
                            kikugawa: e,
                            kosai: e,
                            makinohara: e,
                            matsuzaki: e,
                            minamiizu: e,
                            mishima: e,
                            morimachi: e,
                            nishiizu: e,
                            numazu: e,
                            omaezaki: e,
                            shimada: e,
                            shimizu: e,
                            shimoda: e,
                            shizuoka: e,
                            susono: e,
                            yaizu: e,
                            yoshida: e
                        }
                    ],
                    tochigi: [
                        1,
                        {
                            ashikaga: e,
                            bato: e,
                            haga: e,
                            ichikai: e,
                            iwafune: e,
                            kaminokawa: e,
                            kanuma: e,
                            karasuyama: e,
                            kuroiso: e,
                            mashiko: e,
                            mibu: e,
                            moka: e,
                            motegi: e,
                            nasu: e,
                            nasushiobara: e,
                            nikko: e,
                            nishikata: e,
                            nogi: e,
                            ohira: e,
                            ohtawara: e,
                            oyama: e,
                            sakura: e,
                            sano: e,
                            shimotsuke: e,
                            shioya: e,
                            takanezawa: e,
                            tochigi: e,
                            tsuga: e,
                            ujiie: e,
                            utsunomiya: e,
                            yaita: e
                        }
                    ],
                    tokushima: [
                        1,
                        {
                            aizumi: e,
                            anan: e,
                            ichiba: e,
                            itano: e,
                            kainan: e,
                            komatsushima: e,
                            matsushige: e,
                            mima: e,
                            minami: e,
                            miyoshi: e,
                            mugi: e,
                            nakagawa: e,
                            naruto: e,
                            sanagochi: e,
                            shishikui: e,
                            tokushima: e,
                            wajiki: e
                        }
                    ],
                    tokyo: [
                        1,
                        {
                            adachi: e,
                            akiruno: e,
                            akishima: e,
                            aogashima: e,
                            arakawa: e,
                            bunkyo: e,
                            chiyoda: e,
                            chofu: e,
                            chuo: e,
                            edogawa: e,
                            fuchu: e,
                            fussa: e,
                            hachijo: e,
                            hachioji: e,
                            hamura: e,
                            higashikurume: e,
                            higashimurayama: e,
                            higashiyamato: e,
                            hino: e,
                            hinode: e,
                            hinohara: e,
                            inagi: e,
                            itabashi: e,
                            katsushika: e,
                            kita: e,
                            kiyose: e,
                            kodaira: e,
                            koganei: e,
                            kokubunji: e,
                            komae: e,
                            koto: e,
                            kouzushima: e,
                            kunitachi: e,
                            machida: e,
                            meguro: e,
                            minato: e,
                            mitaka: e,
                            mizuho: e,
                            musashimurayama: e,
                            musashino: e,
                            nakano: e,
                            nerima: e,
                            ogasawara: e,
                            okutama: e,
                            ome: e,
                            oshima: e,
                            ota: e,
                            setagaya: e,
                            shibuya: e,
                            shinagawa: e,
                            shinjuku: e,
                            suginami: e,
                            sumida: e,
                            tachikawa: e,
                            taito: e,
                            tama: e,
                            toshima: e
                        }
                    ],
                    tottori: [
                        1,
                        {
                            chizu: e,
                            hino: e,
                            kawahara: e,
                            koge: e,
                            kotoura: e,
                            misasa: e,
                            nanbu: e,
                            nichinan: e,
                            sakaiminato: e,
                            tottori: e,
                            wakasa: e,
                            yazu: e,
                            yonago: e
                        }
                    ],
                    toyama: [
                        1,
                        {
                            asahi: e,
                            fuchu: e,
                            fukumitsu: e,
                            funahashi: e,
                            himi: e,
                            imizu: e,
                            inami: e,
                            johana: e,
                            kamiichi: e,
                            kurobe: e,
                            nakaniikawa: e,
                            namerikawa: e,
                            nanto: e,
                            nyuzen: e,
                            oyabe: e,
                            taira: e,
                            takaoka: e,
                            tateyama: e,
                            toga: e,
                            tonami: e,
                            toyama: e,
                            unazuki: e,
                            uozu: e,
                            yamada: e
                        }
                    ],
                    wakayama: [
                        1,
                        {
                            arida: e,
                            aridagawa: e,
                            gobo: e,
                            hashimoto: e,
                            hidaka: e,
                            hirogawa: e,
                            inami: e,
                            iwade: e,
                            kainan: e,
                            kamitonda: e,
                            katsuragi: e,
                            kimino: e,
                            kinokawa: e,
                            kitayama: e,
                            koya: e,
                            koza: e,
                            kozagawa: e,
                            kudoyama: e,
                            kushimoto: e,
                            mihama: e,
                            misato: e,
                            nachikatsuura: e,
                            shingu: e,
                            shirahama: e,
                            taiji: e,
                            tanabe: e,
                            wakayama: e,
                            yuasa: e,
                            yura: e
                        }
                    ],
                    yamagata: [
                        1,
                        {
                            asahi: e,
                            funagata: e,
                            higashine: e,
                            iide: e,
                            kahoku: e,
                            kaminoyama: e,
                            kaneyama: e,
                            kawanishi: e,
                            mamurogawa: e,
                            mikawa: e,
                            murayama: e,
                            nagai: e,
                            nakayama: e,
                            nanyo: e,
                            nishikawa: e,
                            obanazawa: e,
                            oe: e,
                            oguni: e,
                            ohkura: e,
                            oishida: e,
                            sagae: e,
                            sakata: e,
                            sakegawa: e,
                            shinjo: e,
                            shirataka: e,
                            shonai: e,
                            takahata: e,
                            tendo: e,
                            tozawa: e,
                            tsuruoka: e,
                            yamagata: e,
                            yamanobe: e,
                            yonezawa: e,
                            yuza: e
                        }
                    ],
                    yamaguchi: [
                        1,
                        {
                            abu: e,
                            hagi: e,
                            hikari: e,
                            hofu: e,
                            iwakuni: e,
                            kudamatsu: e,
                            mitou: e,
                            nagato: e,
                            oshima: e,
                            shimonoseki: e,
                            shunan: e,
                            tabuse: e,
                            tokuyama: e,
                            toyota: e,
                            ube: e,
                            yuu: e
                        }
                    ],
                    yamanashi: [
                        1,
                        {
                            chuo: e,
                            doshi: e,
                            fuefuki: e,
                            fujikawa: e,
                            fujikawaguchiko: e,
                            fujiyoshida: e,
                            hayakawa: e,
                            hokuto: e,
                            ichikawamisato: e,
                            kai: e,
                            kofu: e,
                            koshu: e,
                            kosuge: e,
                            "minami-alps": e,
                            minobu: e,
                            nakamichi: e,
                            nanbu: e,
                            narusawa: e,
                            nirasaki: e,
                            nishikatsura: e,
                            oshino: e,
                            otsuki: e,
                            showa: e,
                            tabayama: e,
                            tsuru: e,
                            uenohara: e,
                            yamanakako: e,
                            yamanashi: e
                        }
                    ],
                    "xn--ehqz56n": e,
                    三重: e,
                    "xn--1lqs03n": e,
                    京都: e,
                    "xn--qqqt11m": e,
                    佐賀: e,
                    "xn--f6qx53a": e,
                    兵庫: e,
                    "xn--djrs72d6uy": e,
                    北海道: e,
                    "xn--mkru45i": e,
                    千葉: e,
                    "xn--0trq7p7nn": e,
                    和歌山: e,
                    "xn--5js045d": e,
                    埼玉: e,
                    "xn--kbrq7o": e,
                    大分: e,
                    "xn--pssu33l": e,
                    大阪: e,
                    "xn--ntsq17g": e,
                    奈良: e,
                    "xn--uisz3g": e,
                    宮城: e,
                    "xn--6btw5a": e,
                    宮崎: e,
                    "xn--1ctwo": e,
                    富山: e,
                    "xn--6orx2r": e,
                    山口: e,
                    "xn--rht61e": e,
                    山形: e,
                    "xn--rht27z": e,
                    山梨: e,
                    "xn--nit225k": e,
                    岐阜: e,
                    "xn--rht3d": e,
                    岡山: e,
                    "xn--djty4k": e,
                    岩手: e,
                    "xn--klty5x": e,
                    島根: e,
                    "xn--kltx9a": e,
                    広島: e,
                    "xn--kltp7d": e,
                    徳島: e,
                    "xn--c3s14m": e,
                    愛媛: e,
                    "xn--vgu402c": e,
                    愛知: e,
                    "xn--efvn9s": e,
                    新潟: e,
                    "xn--1lqs71d": e,
                    東京: e,
                    "xn--4pvxs": e,
                    栃木: e,
                    "xn--uuwu58a": e,
                    沖縄: e,
                    "xn--zbx025d": e,
                    滋賀: e,
                    "xn--8pvr4u": e,
                    熊本: e,
                    "xn--5rtp49c": e,
                    石川: e,
                    "xn--ntso0iqx3a": e,
                    神奈川: e,
                    "xn--elqq16h": e,
                    福井: e,
                    "xn--4it168d": e,
                    福岡: e,
                    "xn--klt787d": e,
                    福島: e,
                    "xn--rny31h": e,
                    秋田: e,
                    "xn--7t0a264c": e,
                    群馬: e,
                    "xn--uist22h": e,
                    茨城: e,
                    "xn--8ltr62k": e,
                    長崎: e,
                    "xn--2m4a15e": e,
                    長野: e,
                    "xn--32vp30h": e,
                    青森: e,
                    "xn--4it797k": e,
                    静岡: e,
                    "xn--5rtq34k": e,
                    香川: e,
                    "xn--k7yn95e": e,
                    高知: e,
                    "xn--tor131o": e,
                    鳥取: e,
                    "xn--d5qv7z876c": e,
                    鹿児島: e,
                    kawasaki: f,
                    kitakyushu: f,
                    kobe: f,
                    nagoya: f,
                    sapporo: f,
                    sendai: f,
                    yokohama: f,
                    buyshop: t,
                    fashionstore: t,
                    handcrafted: t,
                    kawaiishop: t,
                    supersale: t,
                    theshop: t,
                    "0am": t,
                    "0g0": t,
                    "0j0": t,
                    "0t0": t,
                    mydns: t,
                    pgw: t,
                    wjg: t,
                    usercontent: t,
                    angry: t,
                    babyblue: t,
                    babymilk: t,
                    backdrop: t,
                    bambina: t,
                    bitter: t,
                    blush: t,
                    boo: t,
                    boy: t,
                    boyfriend: t,
                    but: t,
                    candypop: t,
                    capoo: t,
                    catfood: t,
                    cheap: t,
                    chicappa: t,
                    chillout: t,
                    chips: t,
                    chowder: t,
                    chu: t,
                    ciao: t,
                    cocotte: t,
                    coolblog: t,
                    cranky: t,
                    cutegirl: t,
                    daa: t,
                    deca: t,
                    deci: t,
                    digick: t,
                    egoism: t,
                    fakefur: t,
                    fem: t,
                    flier: t,
                    floppy: t,
                    fool: t,
                    frenchkiss: t,
                    girlfriend: t,
                    girly: t,
                    gloomy: t,
                    gonna: t,
                    greater: t,
                    hacca: t,
                    heavy: t,
                    her: t,
                    hiho: t,
                    hippy: t,
                    holy: t,
                    hungry: t,
                    icurus: t,
                    itigo: t,
                    jellybean: t,
                    kikirara: t,
                    kill: t,
                    kilo: t,
                    kuron: t,
                    littlestar: t,
                    lolipopmc: t,
                    lolitapunk: t,
                    lomo: t,
                    lovepop: t,
                    lovesick: t,
                    main: t,
                    mods: t,
                    mond: t,
                    mongolian: t,
                    moo: t,
                    namaste: t,
                    nikita: t,
                    nobushi: t,
                    noor: t,
                    oops: t,
                    parallel: t,
                    parasite: t,
                    pecori: t,
                    peewee: t,
                    penne: t,
                    pepper: t,
                    perma: t,
                    pigboat: t,
                    pinoko: t,
                    punyu: t,
                    pupu: t,
                    pussycat: t,
                    pya: t,
                    raindrop: t,
                    readymade: t,
                    sadist: t,
                    schoolbus: t,
                    secret: t,
                    staba: t,
                    stripper: t,
                    sub: t,
                    sunnyday: t,
                    thick: t,
                    tonkotsu: t,
                    under: t,
                    upper: t,
                    velvet: t,
                    verse: t,
                    versus: t,
                    vivian: t,
                    watson: t,
                    weblike: t,
                    whitesnow: t,
                    zombie: t,
                    hateblo: t,
                    hatenablog: t,
                    hatenadiary: t,
                    "2-d": t,
                    bona: t,
                    crap: t,
                    daynight: t,
                    eek: t,
                    flop: t,
                    halfmoon: t,
                    jeez: t,
                    matrix: t,
                    mimoza: t,
                    netgamers: t,
                    nyanta: t,
                    o0o0: t,
                    rdy: t,
                    rgr: t,
                    rulez: t,
                    sakurastorage: [
                        0,
                        {
                            isk01: Y,
                            isk02: Y
                        }
                    ],
                    saloon: t,
                    sblo: t,
                    skr: t,
                    tank: t,
                    "uh-oh": t,
                    undo: t,
                    webaccel: [
                        0,
                        {
                            rs: t,
                            user: t
                        }
                    ],
                    websozai: t,
                    xii: t
                }
            ],
            ke: [
                1,
                {
                    ac: e,
                    co: e,
                    go: e,
                    info: e,
                    me: e,
                    mobi: e,
                    ne: e,
                    or: e,
                    sc: e
                }
            ],
            kg: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    us: t
                }
            ],
            kh: f,
            ki: Z,
            km: [
                1,
                {
                    ass: e,
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    nom: e,
                    org: e,
                    prd: e,
                    tm: e,
                    asso: e,
                    coop: e,
                    gouv: e,
                    medecin: e,
                    notaires: e,
                    pharmaciens: e,
                    presse: e,
                    veterinaire: e
                }
            ],
            kn: [
                1,
                {
                    edu: e,
                    gov: e,
                    net: e,
                    org: e
                }
            ],
            kp: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    org: e,
                    rep: e,
                    tra: e
                }
            ],
            kr: [
                1,
                {
                    ac: e,
                    ai: e,
                    co: e,
                    es: e,
                    go: e,
                    hs: e,
                    io: e,
                    it: e,
                    kg: e,
                    me: e,
                    mil: e,
                    ms: e,
                    ne: e,
                    or: e,
                    pe: e,
                    re: e,
                    sc: e,
                    busan: e,
                    chungbuk: e,
                    chungnam: e,
                    daegu: e,
                    daejeon: e,
                    gangwon: e,
                    gwangju: e,
                    gyeongbuk: e,
                    gyeonggi: e,
                    gyeongnam: e,
                    incheon: e,
                    jeju: e,
                    jeonbuk: e,
                    jeonnam: e,
                    seoul: e,
                    ulsan: e,
                    c01: t,
                    "eliv-dns": t
                }
            ],
            kw: [
                1,
                {
                    com: e,
                    edu: e,
                    emb: e,
                    gov: e,
                    ind: e,
                    net: e,
                    org: e
                }
            ],
            ky: L,
            kz: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    jcloud: t
                }
            ],
            la: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    info: e,
                    int: e,
                    net: e,
                    org: e,
                    per: e,
                    bnr: t
                }
            ],
            lb: r,
            lc: [
                1,
                {
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    oy: t
                }
            ],
            li: e,
            lk: [
                1,
                {
                    ac: e,
                    assn: e,
                    com: e,
                    edu: e,
                    gov: e,
                    grp: e,
                    hotel: e,
                    int: e,
                    ltd: e,
                    net: e,
                    ngo: e,
                    org: e,
                    sch: e,
                    soc: e,
                    web: e
                }
            ],
            lr: r,
            ls: [
                1,
                {
                    ac: e,
                    biz: e,
                    co: e,
                    edu: e,
                    gov: e,
                    info: e,
                    net: e,
                    org: e,
                    sc: e
                }
            ],
            lt: c,
            lu: [
                1,
                {
                    "123website": t
                }
            ],
            lv: [
                1,
                {
                    asn: e,
                    com: e,
                    conf: e,
                    edu: e,
                    gov: e,
                    id: e,
                    mil: e,
                    net: e,
                    org: e
                }
            ],
            ly: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    id: e,
                    med: e,
                    net: e,
                    org: e,
                    plc: e,
                    sch: e
                }
            ],
            ma: [
                1,
                {
                    ac: e,
                    co: e,
                    gov: e,
                    net: e,
                    org: e,
                    press: e
                }
            ],
            mc: [
                1,
                {
                    asso: e,
                    tm: e
                }
            ],
            md: [
                1,
                {
                    ir: t
                }
            ],
            me: [
                1,
                {
                    ac: e,
                    co: e,
                    edu: e,
                    gov: e,
                    its: e,
                    net: e,
                    org: e,
                    priv: e,
                    c66: t,
                    craft: t,
                    edgestack: t,
                    filegear: t,
                    glitch: t,
                    "filegear-sg": t,
                    lohmus: t,
                    barsy: t,
                    mcdir: t,
                    brasilia: t,
                    ddns: t,
                    dnsfor: t,
                    hopto: t,
                    loginto: t,
                    noip: t,
                    webhop: t,
                    soundcast: t,
                    tcp4: t,
                    vp4: t,
                    diskstation: t,
                    dscloud: t,
                    i234: t,
                    myds: t,
                    synology: t,
                    transip: U,
                    nohost: t
                }
            ],
            mg: [
                1,
                {
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    nom: e,
                    org: e,
                    prd: e
                }
            ],
            mh: e,
            mil: e,
            mk: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    inf: e,
                    name: e,
                    net: e,
                    org: e
                }
            ],
            ml: [
                1,
                {
                    ac: e,
                    art: e,
                    asso: e,
                    com: e,
                    edu: e,
                    gouv: e,
                    gov: e,
                    info: e,
                    inst: e,
                    net: e,
                    org: e,
                    pr: e,
                    presse: e
                }
            ],
            mm: f,
            mn: [
                1,
                {
                    edu: e,
                    gov: e,
                    org: e,
                    nyc: t
                }
            ],
            mo: r,
            mobi: [
                1,
                {
                    barsy: t,
                    dscloud: t
                }
            ],
            mp: [
                1,
                {
                    ju: t
                }
            ],
            mq: e,
            mr: c,
            ms: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    minisite: t
                }
            ],
            mt: L,
            mu: [
                1,
                {
                    ac: e,
                    co: e,
                    com: e,
                    gov: e,
                    net: e,
                    or: e,
                    org: e
                }
            ],
            museum: e,
            mv: [
                1,
                {
                    aero: e,
                    biz: e,
                    com: e,
                    coop: e,
                    edu: e,
                    gov: e,
                    info: e,
                    int: e,
                    mil: e,
                    museum: e,
                    name: e,
                    net: e,
                    org: e,
                    pro: e
                }
            ],
            mw: [
                1,
                {
                    ac: e,
                    biz: e,
                    co: e,
                    com: e,
                    coop: e,
                    edu: e,
                    gov: e,
                    int: e,
                    net: e,
                    org: e
                }
            ],
            mx: [
                1,
                {
                    com: e,
                    edu: e,
                    gob: e,
                    net: e,
                    org: e
                }
            ],
            my: [
                1,
                {
                    biz: e,
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    name: e,
                    net: e,
                    org: e
                }
            ],
            mz: [
                1,
                {
                    ac: e,
                    adv: e,
                    co: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e
                }
            ],
            na: [
                1,
                {
                    alt: e,
                    co: e,
                    com: e,
                    gov: e,
                    net: e,
                    org: e
                }
            ],
            name: [
                1,
                {
                    her: te,
                    his: te
                }
            ],
            nc: [
                1,
                {
                    asso: e,
                    nom: e
                }
            ],
            ne: e,
            net: [
                1,
                {
                    adobeaemcloud: t,
                    "adobeio-static": t,
                    adobeioruntime: t,
                    akadns: t,
                    akamai: t,
                    "akamai-staging": t,
                    akamaiedge: t,
                    "akamaiedge-staging": t,
                    akamaihd: t,
                    "akamaihd-staging": t,
                    akamaiorigin: t,
                    "akamaiorigin-staging": t,
                    akamaized: t,
                    "akamaized-staging": t,
                    edgekey: t,
                    "edgekey-staging": t,
                    edgesuite: t,
                    "edgesuite-staging": t,
                    alwaysdata: t,
                    myamaze: t,
                    cloudfront: t,
                    appudo: t,
                    "atlassian-dev": [
                        0,
                        {
                            prod: W
                        }
                    ],
                    myfritz: t,
                    onavstack: t,
                    shopselect: t,
                    blackbaudcdn: t,
                    boomla: t,
                    bplaced: t,
                    square7: t,
                    cdn77: [
                        0,
                        {
                            r: t
                        }
                    ],
                    "cdn77-ssl": t,
                    gb: t,
                    hu: t,
                    jp: t,
                    se: t,
                    uk: t,
                    clickrising: t,
                    "ddns-ip": t,
                    "dns-cloud": t,
                    "dns-dynamic": t,
                    cloudaccess: t,
                    cloudflare: [
                        2,
                        {
                            cdn: t
                        }
                    ],
                    cloudflareanycast: W,
                    cloudflarecn: W,
                    cloudflareglobal: W,
                    ctfcloud: t,
                    "feste-ip": t,
                    "knx-server": t,
                    "static-access": t,
                    cryptonomic: s,
                    dattolocal: t,
                    mydatto: t,
                    debian: t,
                    definima: t,
                    deno: t,
                    "at-band-camp": t,
                    blogdns: t,
                    "broke-it": t,
                    buyshouses: t,
                    dnsalias: t,
                    dnsdojo: t,
                    "does-it": t,
                    dontexist: t,
                    dynalias: t,
                    dynathome: t,
                    endofinternet: t,
                    "from-az": t,
                    "from-co": t,
                    "from-la": t,
                    "from-ny": t,
                    "gets-it": t,
                    "ham-radio-op": t,
                    homeftp: t,
                    homeip: t,
                    homelinux: t,
                    homeunix: t,
                    "in-the-band": t,
                    "is-a-chef": t,
                    "is-a-geek": t,
                    "isa-geek": t,
                    "kicks-ass": t,
                    "office-on-the": t,
                    podzone: t,
                    "scrapper-site": t,
                    selfip: t,
                    "sells-it": t,
                    servebbs: t,
                    serveftp: t,
                    thruhere: t,
                    webhop: t,
                    casacam: t,
                    dynu: t,
                    dynv6: t,
                    twmail: t,
                    ru: t,
                    channelsdvr: [
                        2,
                        {
                            u: t
                        }
                    ],
                    fastly: [
                        0,
                        {
                            freetls: t,
                            map: t,
                            prod: [
                                0,
                                {
                                    a: t,
                                    global: t
                                }
                            ],
                            ssl: [
                                0,
                                {
                                    a: t,
                                    b: t,
                                    global: t
                                }
                            ]
                        }
                    ],
                    fastlylb: [
                        2,
                        {
                            map: t
                        }
                    ],
                    edgeapp: t,
                    "keyword-on": t,
                    "live-on": t,
                    "server-on": t,
                    "cdn-edges": t,
                    heteml: t,
                    cloudfunctions: t,
                    "grafana-dev": t,
                    iobb: t,
                    moonscale: t,
                    "in-dsl": t,
                    "in-vpn": t,
                    oninferno: t,
                    botdash: t,
                    "apps-1and1": t,
                    ipifony: t,
                    cloudjiffy: [
                        2,
                        {
                            "fra1-de": t,
                            "west1-us": t
                        }
                    ],
                    elastx: [
                        0,
                        {
                            "jls-sto1": t,
                            "jls-sto2": t,
                            "jls-sto3": t
                        }
                    ],
                    massivegrid: [
                        0,
                        {
                            paas: [
                                0,
                                {
                                    "fr-1": t,
                                    "lon-1": t,
                                    "lon-2": t,
                                    "ny-1": t,
                                    "ny-2": t,
                                    "sg-1": t
                                }
                            ]
                        }
                    ],
                    saveincloud: [
                        0,
                        {
                            jelastic: t,
                            "nordeste-idc": t
                        }
                    ],
                    scaleforce: $,
                    kinghost: t,
                    uni5: t,
                    krellian: t,
                    ggff: t,
                    localcert: t,
                    localhostcert: t,
                    localto: s,
                    barsy: t,
                    memset: t,
                    "azure-api": t,
                    "azure-mobile": t,
                    azureedge: t,
                    azurefd: t,
                    azurestaticapps: [
                        2,
                        {
                            1: t,
                            2: t,
                            3: t,
                            4: t,
                            5: t,
                            6: t,
                            7: t,
                            centralus: t,
                            eastasia: t,
                            eastus2: t,
                            westeurope: t,
                            westus2: t
                        }
                    ],
                    azurewebsites: t,
                    cloudapp: t,
                    trafficmanager: t,
                    windows: [
                        0,
                        {
                            core: [
                                0,
                                {
                                    blob: t
                                }
                            ],
                            servicebus: t
                        }
                    ],
                    mynetname: [
                        0,
                        {
                            sn: t
                        }
                    ],
                    routingthecloud: t,
                    bounceme: t,
                    ddns: t,
                    "eating-organic": t,
                    mydissent: t,
                    myeffect: t,
                    mymediapc: t,
                    mypsx: t,
                    mysecuritycamera: t,
                    nhlfan: t,
                    "no-ip": t,
                    pgafan: t,
                    privatizehealthinsurance: t,
                    redirectme: t,
                    serveblog: t,
                    serveminecraft: t,
                    sytes: t,
                    dnsup: t,
                    hicam: t,
                    "now-dns": t,
                    ownip: t,
                    vpndns: t,
                    cloudycluster: t,
                    ovh: [
                        0,
                        {
                            hosting: s,
                            webpaas: s
                        }
                    ],
                    rackmaze: t,
                    myradweb: t,
                    in: t,
                    "subsc-pay": t,
                    squares: t,
                    schokokeks: t,
                    "firewall-gateway": t,
                    seidat: t,
                    senseering: t,
                    siteleaf: t,
                    mafelo: t,
                    myspreadshop: t,
                    "vps-host": [
                        2,
                        {
                            jelastic: [
                                0,
                                {
                                    atl: t,
                                    njs: t,
                                    ric: t
                                }
                            ]
                        }
                    ],
                    srcf: [
                        0,
                        {
                            soc: t,
                            user: t
                        }
                    ],
                    supabase: t,
                    dsmynas: t,
                    familyds: t,
                    ts: [
                        2,
                        {
                            c: s
                        }
                    ],
                    torproject: [
                        2,
                        {
                            pages: t
                        }
                    ],
                    vusercontent: t,
                    "reserve-online": t,
                    "community-pro": t,
                    meinforum: t,
                    yandexcloud: [
                        2,
                        {
                            storage: t,
                            website: t
                        }
                    ],
                    za: t
                }
            ],
            nf: [
                1,
                {
                    arts: e,
                    com: e,
                    firm: e,
                    info: e,
                    net: e,
                    other: e,
                    per: e,
                    rec: e,
                    store: e,
                    web: e
                }
            ],
            ng: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    i: e,
                    mil: e,
                    mobi: e,
                    name: e,
                    net: e,
                    org: e,
                    sch: e,
                    biz: [
                        2,
                        {
                            co: t,
                            dl: t,
                            go: t,
                            lg: t,
                            on: t
                        }
                    ],
                    col: t,
                    firm: t,
                    gen: t,
                    ltd: t,
                    ngo: t,
                    plc: t
                }
            ],
            ni: [
                1,
                {
                    ac: e,
                    biz: e,
                    co: e,
                    com: e,
                    edu: e,
                    gob: e,
                    in: e,
                    info: e,
                    int: e,
                    mil: e,
                    net: e,
                    nom: e,
                    org: e,
                    web: e
                }
            ],
            nl: [
                1,
                {
                    co: t,
                    "hosting-cluster": t,
                    gov: t,
                    khplay: t,
                    "123website": t,
                    myspreadshop: t,
                    transurl: s,
                    cistron: t,
                    demon: t
                }
            ],
            no: [
                1,
                {
                    fhs: e,
                    folkebibl: e,
                    fylkesbibl: e,
                    idrett: e,
                    museum: e,
                    priv: e,
                    vgs: e,
                    dep: e,
                    herad: e,
                    kommune: e,
                    mil: e,
                    stat: e,
                    aa: re,
                    ah: re,
                    bu: re,
                    fm: re,
                    hl: re,
                    hm: re,
                    "jan-mayen": re,
                    mr: re,
                    nl: re,
                    nt: re,
                    of: re,
                    ol: re,
                    oslo: re,
                    rl: re,
                    sf: re,
                    st: re,
                    svalbard: re,
                    tm: re,
                    tr: re,
                    va: re,
                    vf: re,
                    akrehamn: e,
                    "xn--krehamn-dxa": e,
                    åkrehamn: e,
                    algard: e,
                    "xn--lgrd-poac": e,
                    ålgård: e,
                    arna: e,
                    bronnoysund: e,
                    "xn--brnnysund-m8ac": e,
                    brønnøysund: e,
                    brumunddal: e,
                    bryne: e,
                    drobak: e,
                    "xn--drbak-wua": e,
                    drøbak: e,
                    egersund: e,
                    fetsund: e,
                    floro: e,
                    "xn--flor-jra": e,
                    florø: e,
                    fredrikstad: e,
                    hokksund: e,
                    honefoss: e,
                    "xn--hnefoss-q1a": e,
                    hønefoss: e,
                    jessheim: e,
                    jorpeland: e,
                    "xn--jrpeland-54a": e,
                    jørpeland: e,
                    kirkenes: e,
                    kopervik: e,
                    krokstadelva: e,
                    langevag: e,
                    "xn--langevg-jxa": e,
                    langevåg: e,
                    leirvik: e,
                    mjondalen: e,
                    "xn--mjndalen-64a": e,
                    mjøndalen: e,
                    "mo-i-rana": e,
                    mosjoen: e,
                    "xn--mosjen-eya": e,
                    mosjøen: e,
                    nesoddtangen: e,
                    orkanger: e,
                    osoyro: e,
                    "xn--osyro-wua": e,
                    osøyro: e,
                    raholt: e,
                    "xn--rholt-mra": e,
                    råholt: e,
                    sandnessjoen: e,
                    "xn--sandnessjen-ogb": e,
                    sandnessjøen: e,
                    skedsmokorset: e,
                    slattum: e,
                    spjelkavik: e,
                    stathelle: e,
                    stavern: e,
                    stjordalshalsen: e,
                    "xn--stjrdalshalsen-sqb": e,
                    stjørdalshalsen: e,
                    tananger: e,
                    tranby: e,
                    vossevangen: e,
                    aarborte: e,
                    aejrie: e,
                    afjord: e,
                    "xn--fjord-lra": e,
                    åfjord: e,
                    agdenes: e,
                    akershus: ne,
                    aknoluokta: e,
                    "xn--koluokta-7ya57h": e,
                    ákŋoluokta: e,
                    al: e,
                    "xn--l-1fa": e,
                    ål: e,
                    alaheadju: e,
                    "xn--laheadju-7ya": e,
                    álaheadju: e,
                    alesund: e,
                    "xn--lesund-hua": e,
                    ålesund: e,
                    alstahaug: e,
                    alta: e,
                    "xn--lt-liac": e,
                    áltá: e,
                    alvdal: e,
                    amli: e,
                    "xn--mli-tla": e,
                    åmli: e,
                    amot: e,
                    "xn--mot-tla": e,
                    åmot: e,
                    andasuolo: e,
                    andebu: e,
                    andoy: e,
                    "xn--andy-ira": e,
                    andøy: e,
                    ardal: e,
                    "xn--rdal-poa": e,
                    årdal: e,
                    aremark: e,
                    arendal: e,
                    "xn--s-1fa": e,
                    ås: e,
                    aseral: e,
                    "xn--seral-lra": e,
                    åseral: e,
                    asker: e,
                    askim: e,
                    askoy: e,
                    "xn--asky-ira": e,
                    askøy: e,
                    askvoll: e,
                    asnes: e,
                    "xn--snes-poa": e,
                    åsnes: e,
                    audnedaln: e,
                    aukra: e,
                    aure: e,
                    aurland: e,
                    "aurskog-holand": e,
                    "xn--aurskog-hland-jnb": e,
                    "aurskog-høland": e,
                    austevoll: e,
                    austrheim: e,
                    averoy: e,
                    "xn--avery-yua": e,
                    averøy: e,
                    badaddja: e,
                    "xn--bdddj-mrabd": e,
                    bådåddjå: e,
                    "xn--brum-voa": e,
                    bærum: e,
                    bahcavuotna: e,
                    "xn--bhcavuotna-s4a": e,
                    báhcavuotna: e,
                    bahccavuotna: e,
                    "xn--bhccavuotna-k7a": e,
                    báhccavuotna: e,
                    baidar: e,
                    "xn--bidr-5nac": e,
                    báidár: e,
                    bajddar: e,
                    "xn--bjddar-pta": e,
                    bájddar: e,
                    balat: e,
                    "xn--blt-elab": e,
                    bálát: e,
                    balestrand: e,
                    ballangen: e,
                    balsfjord: e,
                    bamble: e,
                    bardu: e,
                    barum: e,
                    batsfjord: e,
                    "xn--btsfjord-9za": e,
                    båtsfjord: e,
                    bearalvahki: e,
                    "xn--bearalvhki-y4a": e,
                    bearalváhki: e,
                    beardu: e,
                    beiarn: e,
                    berg: e,
                    bergen: e,
                    berlevag: e,
                    "xn--berlevg-jxa": e,
                    berlevåg: e,
                    bievat: e,
                    "xn--bievt-0qa": e,
                    bievát: e,
                    bindal: e,
                    birkenes: e,
                    bjarkoy: e,
                    "xn--bjarky-fya": e,
                    bjarkøy: e,
                    bjerkreim: e,
                    bjugn: e,
                    bodo: e,
                    "xn--bod-2na": e,
                    bodø: e,
                    bokn: e,
                    bomlo: e,
                    "xn--bmlo-gra": e,
                    bømlo: e,
                    bremanger: e,
                    bronnoy: e,
                    "xn--brnny-wuac": e,
                    brønnøy: e,
                    budejju: e,
                    buskerud: ne,
                    bygland: e,
                    bykle: e,
                    cahcesuolo: e,
                    "xn--hcesuolo-7ya35b": e,
                    čáhcesuolo: e,
                    davvenjarga: e,
                    "xn--davvenjrga-y4a": e,
                    davvenjárga: e,
                    davvesiida: e,
                    deatnu: e,
                    dielddanuorri: e,
                    divtasvuodna: e,
                    divttasvuotna: e,
                    donna: e,
                    "xn--dnna-gra": e,
                    dønna: e,
                    dovre: e,
                    drammen: e,
                    drangedal: e,
                    dyroy: e,
                    "xn--dyry-ira": e,
                    dyrøy: e,
                    eid: e,
                    eidfjord: e,
                    eidsberg: e,
                    eidskog: e,
                    eidsvoll: e,
                    eigersund: e,
                    elverum: e,
                    enebakk: e,
                    engerdal: e,
                    etne: e,
                    etnedal: e,
                    evenassi: e,
                    "xn--eveni-0qa01ga": e,
                    evenášši: e,
                    evenes: e,
                    "evje-og-hornnes": e,
                    farsund: e,
                    fauske: e,
                    fedje: e,
                    fet: e,
                    finnoy: e,
                    "xn--finny-yua": e,
                    finnøy: e,
                    fitjar: e,
                    fjaler: e,
                    fjell: e,
                    fla: e,
                    "xn--fl-zia": e,
                    flå: e,
                    flakstad: e,
                    flatanger: e,
                    flekkefjord: e,
                    flesberg: e,
                    flora: e,
                    folldal: e,
                    forde: e,
                    "xn--frde-gra": e,
                    førde: e,
                    forsand: e,
                    fosnes: e,
                    "xn--frna-woa": e,
                    fræna: e,
                    frana: e,
                    frei: e,
                    frogn: e,
                    froland: e,
                    frosta: e,
                    froya: e,
                    "xn--frya-hra": e,
                    frøya: e,
                    fuoisku: e,
                    fuossko: e,
                    fusa: e,
                    fyresdal: e,
                    gaivuotna: e,
                    "xn--givuotna-8ya": e,
                    gáivuotna: e,
                    galsa: e,
                    "xn--gls-elac": e,
                    gálsá: e,
                    gamvik: e,
                    gangaviika: e,
                    "xn--ggaviika-8ya47h": e,
                    gáŋgaviika: e,
                    gaular: e,
                    gausdal: e,
                    giehtavuoatna: e,
                    gildeskal: e,
                    "xn--gildeskl-g0a": e,
                    gildeskål: e,
                    giske: e,
                    gjemnes: e,
                    gjerdrum: e,
                    gjerstad: e,
                    gjesdal: e,
                    gjovik: e,
                    "xn--gjvik-wua": e,
                    gjøvik: e,
                    gloppen: e,
                    gol: e,
                    gran: e,
                    grane: e,
                    granvin: e,
                    gratangen: e,
                    grimstad: e,
                    grong: e,
                    grue: e,
                    gulen: e,
                    guovdageaidnu: e,
                    ha: e,
                    "xn--h-2fa": e,
                    hå: e,
                    habmer: e,
                    "xn--hbmer-xqa": e,
                    hábmer: e,
                    hadsel: e,
                    "xn--hgebostad-g3a": e,
                    hægebostad: e,
                    hagebostad: e,
                    halden: e,
                    halsa: e,
                    hamar: e,
                    hamaroy: e,
                    hammarfeasta: e,
                    "xn--hmmrfeasta-s4ac": e,
                    hámmárfeasta: e,
                    hammerfest: e,
                    hapmir: e,
                    "xn--hpmir-xqa": e,
                    hápmir: e,
                    haram: e,
                    hareid: e,
                    harstad: e,
                    hasvik: e,
                    hattfjelldal: e,
                    haugesund: e,
                    hedmark: [
                        0,
                        {
                            os: e,
                            valer: e,
                            "xn--vler-qoa": e,
                            våler: e
                        }
                    ],
                    hemne: e,
                    hemnes: e,
                    hemsedal: e,
                    hitra: e,
                    hjartdal: e,
                    hjelmeland: e,
                    hobol: e,
                    "xn--hobl-ira": e,
                    hobøl: e,
                    hof: e,
                    hol: e,
                    hole: e,
                    holmestrand: e,
                    holtalen: e,
                    "xn--holtlen-hxa": e,
                    holtålen: e,
                    hordaland: [
                        0,
                        {
                            os: e
                        }
                    ],
                    hornindal: e,
                    horten: e,
                    hoyanger: e,
                    "xn--hyanger-q1a": e,
                    høyanger: e,
                    hoylandet: e,
                    "xn--hylandet-54a": e,
                    høylandet: e,
                    hurdal: e,
                    hurum: e,
                    hvaler: e,
                    hyllestad: e,
                    ibestad: e,
                    inderoy: e,
                    "xn--indery-fya": e,
                    inderøy: e,
                    iveland: e,
                    ivgu: e,
                    jevnaker: e,
                    jolster: e,
                    "xn--jlster-bya": e,
                    jølster: e,
                    jondal: e,
                    kafjord: e,
                    "xn--kfjord-iua": e,
                    kåfjord: e,
                    karasjohka: e,
                    "xn--krjohka-hwab49j": e,
                    kárášjohka: e,
                    karasjok: e,
                    karlsoy: e,
                    karmoy: e,
                    "xn--karmy-yua": e,
                    karmøy: e,
                    kautokeino: e,
                    klabu: e,
                    "xn--klbu-woa": e,
                    klæbu: e,
                    klepp: e,
                    kongsberg: e,
                    kongsvinger: e,
                    kraanghke: e,
                    "xn--kranghke-b0a": e,
                    kråanghke: e,
                    kragero: e,
                    "xn--krager-gya": e,
                    kragerø: e,
                    kristiansand: e,
                    kristiansund: e,
                    krodsherad: e,
                    "xn--krdsherad-m8a": e,
                    krødsherad: e,
                    "xn--kvfjord-nxa": e,
                    kvæfjord: e,
                    "xn--kvnangen-k0a": e,
                    kvænangen: e,
                    kvafjord: e,
                    kvalsund: e,
                    kvam: e,
                    kvanangen: e,
                    kvinesdal: e,
                    kvinnherad: e,
                    kviteseid: e,
                    kvitsoy: e,
                    "xn--kvitsy-fya": e,
                    kvitsøy: e,
                    laakesvuemie: e,
                    "xn--lrdal-sra": e,
                    lærdal: e,
                    lahppi: e,
                    "xn--lhppi-xqa": e,
                    láhppi: e,
                    lardal: e,
                    larvik: e,
                    lavagis: e,
                    lavangen: e,
                    leangaviika: e,
                    "xn--leagaviika-52b": e,
                    leaŋgaviika: e,
                    lebesby: e,
                    leikanger: e,
                    leirfjord: e,
                    leka: e,
                    leksvik: e,
                    lenvik: e,
                    lerdal: e,
                    lesja: e,
                    levanger: e,
                    lier: e,
                    lierne: e,
                    lillehammer: e,
                    lillesand: e,
                    lindas: e,
                    "xn--linds-pra": e,
                    lindås: e,
                    lindesnes: e,
                    loabat: e,
                    "xn--loabt-0qa": e,
                    loabát: e,
                    lodingen: e,
                    "xn--ldingen-q1a": e,
                    lødingen: e,
                    lom: e,
                    loppa: e,
                    lorenskog: e,
                    "xn--lrenskog-54a": e,
                    lørenskog: e,
                    loten: e,
                    "xn--lten-gra": e,
                    løten: e,
                    lund: e,
                    lunner: e,
                    luroy: e,
                    "xn--lury-ira": e,
                    lurøy: e,
                    luster: e,
                    lyngdal: e,
                    lyngen: e,
                    malatvuopmi: e,
                    "xn--mlatvuopmi-s4a": e,
                    málatvuopmi: e,
                    malselv: e,
                    "xn--mlselv-iua": e,
                    målselv: e,
                    malvik: e,
                    mandal: e,
                    marker: e,
                    marnardal: e,
                    masfjorden: e,
                    masoy: e,
                    "xn--msy-ula0h": e,
                    måsøy: e,
                    "matta-varjjat": e,
                    "xn--mtta-vrjjat-k7af": e,
                    "mátta-várjjat": e,
                    meland: e,
                    meldal: e,
                    melhus: e,
                    meloy: e,
                    "xn--mely-ira": e,
                    meløy: e,
                    meraker: e,
                    "xn--merker-kua": e,
                    meråker: e,
                    midsund: e,
                    "midtre-gauldal": e,
                    moareke: e,
                    "xn--moreke-jua": e,
                    moåreke: e,
                    modalen: e,
                    modum: e,
                    molde: e,
                    "more-og-romsdal": [
                        0,
                        {
                            heroy: e,
                            sande: e
                        }
                    ],
                    "xn--mre-og-romsdal-qqb": [
                        0,
                        {
                            "xn--hery-ira": e,
                            sande: e
                        }
                    ],
                    "møre-og-romsdal": [
                        0,
                        {
                            herøy: e,
                            sande: e
                        }
                    ],
                    moskenes: e,
                    moss: e,
                    mosvik: e,
                    muosat: e,
                    "xn--muost-0qa": e,
                    muosát: e,
                    naamesjevuemie: e,
                    "xn--nmesjevuemie-tcba": e,
                    nååmesjevuemie: e,
                    "xn--nry-yla5g": e,
                    nærøy: e,
                    namdalseid: e,
                    namsos: e,
                    namsskogan: e,
                    nannestad: e,
                    naroy: e,
                    narviika: e,
                    narvik: e,
                    naustdal: e,
                    navuotna: e,
                    "xn--nvuotna-hwa": e,
                    návuotna: e,
                    "nedre-eiker": e,
                    nesna: e,
                    nesodden: e,
                    nesseby: e,
                    nesset: e,
                    nissedal: e,
                    nittedal: e,
                    "nord-aurdal": e,
                    "nord-fron": e,
                    "nord-odal": e,
                    norddal: e,
                    nordkapp: e,
                    nordland: [
                        0,
                        {
                            bo: e,
                            "xn--b-5ga": e,
                            bø: e,
                            heroy: e,
                            "xn--hery-ira": e,
                            herøy: e
                        }
                    ],
                    "nordre-land": e,
                    nordreisa: e,
                    "nore-og-uvdal": e,
                    notodden: e,
                    notteroy: e,
                    "xn--nttery-byae": e,
                    nøtterøy: e,
                    odda: e,
                    oksnes: e,
                    "xn--ksnes-uua": e,
                    øksnes: e,
                    omasvuotna: e,
                    oppdal: e,
                    oppegard: e,
                    "xn--oppegrd-ixa": e,
                    oppegård: e,
                    orkdal: e,
                    orland: e,
                    "xn--rland-uua": e,
                    ørland: e,
                    orskog: e,
                    "xn--rskog-uua": e,
                    ørskog: e,
                    orsta: e,
                    "xn--rsta-fra": e,
                    ørsta: e,
                    osen: e,
                    osteroy: e,
                    "xn--ostery-fya": e,
                    osterøy: e,
                    ostfold: [
                        0,
                        {
                            valer: e
                        }
                    ],
                    "xn--stfold-9xa": [
                        0,
                        {
                            "xn--vler-qoa": e
                        }
                    ],
                    østfold: [
                        0,
                        {
                            våler: e
                        }
                    ],
                    "ostre-toten": e,
                    "xn--stre-toten-zcb": e,
                    "østre-toten": e,
                    overhalla: e,
                    "ovre-eiker": e,
                    "xn--vre-eiker-k8a": e,
                    "øvre-eiker": e,
                    oyer: e,
                    "xn--yer-zna": e,
                    øyer: e,
                    oygarden: e,
                    "xn--ygarden-p1a": e,
                    øygarden: e,
                    "oystre-slidre": e,
                    "xn--ystre-slidre-ujb": e,
                    "øystre-slidre": e,
                    porsanger: e,
                    porsangu: e,
                    "xn--porsgu-sta26f": e,
                    porsáŋgu: e,
                    porsgrunn: e,
                    rade: e,
                    "xn--rde-ula": e,
                    råde: e,
                    radoy: e,
                    "xn--rady-ira": e,
                    radøy: e,
                    "xn--rlingen-mxa": e,
                    rælingen: e,
                    rahkkeravju: e,
                    "xn--rhkkervju-01af": e,
                    ráhkkerávju: e,
                    raisa: e,
                    "xn--risa-5na": e,
                    ráisa: e,
                    rakkestad: e,
                    ralingen: e,
                    rana: e,
                    randaberg: e,
                    rauma: e,
                    rendalen: e,
                    rennebu: e,
                    rennesoy: e,
                    "xn--rennesy-v1a": e,
                    rennesøy: e,
                    rindal: e,
                    ringebu: e,
                    ringerike: e,
                    ringsaker: e,
                    risor: e,
                    "xn--risr-ira": e,
                    risør: e,
                    rissa: e,
                    roan: e,
                    rodoy: e,
                    "xn--rdy-0nab": e,
                    rødøy: e,
                    rollag: e,
                    romsa: e,
                    romskog: e,
                    "xn--rmskog-bya": e,
                    rømskog: e,
                    roros: e,
                    "xn--rros-gra": e,
                    røros: e,
                    rost: e,
                    "xn--rst-0na": e,
                    røst: e,
                    royken: e,
                    "xn--ryken-vua": e,
                    røyken: e,
                    royrvik: e,
                    "xn--ryrvik-bya": e,
                    røyrvik: e,
                    ruovat: e,
                    rygge: e,
                    salangen: e,
                    salat: e,
                    "xn--slat-5na": e,
                    sálat: e,
                    "xn--slt-elab": e,
                    sálát: e,
                    saltdal: e,
                    samnanger: e,
                    sandefjord: e,
                    sandnes: e,
                    sandoy: e,
                    "xn--sandy-yua": e,
                    sandøy: e,
                    sarpsborg: e,
                    sauda: e,
                    sauherad: e,
                    sel: e,
                    selbu: e,
                    selje: e,
                    seljord: e,
                    siellak: e,
                    sigdal: e,
                    siljan: e,
                    sirdal: e,
                    skanit: e,
                    "xn--sknit-yqa": e,
                    skánit: e,
                    skanland: e,
                    "xn--sknland-fxa": e,
                    skånland: e,
                    skaun: e,
                    skedsmo: e,
                    ski: e,
                    skien: e,
                    skierva: e,
                    "xn--skierv-uta": e,
                    skiervá: e,
                    skiptvet: e,
                    skjak: e,
                    "xn--skjk-soa": e,
                    skjåk: e,
                    skjervoy: e,
                    "xn--skjervy-v1a": e,
                    skjervøy: e,
                    skodje: e,
                    smola: e,
                    "xn--smla-hra": e,
                    smøla: e,
                    snaase: e,
                    "xn--snase-nra": e,
                    snåase: e,
                    snasa: e,
                    "xn--snsa-roa": e,
                    snåsa: e,
                    snillfjord: e,
                    snoasa: e,
                    sogndal: e,
                    sogne: e,
                    "xn--sgne-gra": e,
                    søgne: e,
                    sokndal: e,
                    sola: e,
                    solund: e,
                    somna: e,
                    "xn--smna-gra": e,
                    sømna: e,
                    "sondre-land": e,
                    "xn--sndre-land-0cb": e,
                    "søndre-land": e,
                    songdalen: e,
                    "sor-aurdal": e,
                    "xn--sr-aurdal-l8a": e,
                    "sør-aurdal": e,
                    "sor-fron": e,
                    "xn--sr-fron-q1a": e,
                    "sør-fron": e,
                    "sor-odal": e,
                    "xn--sr-odal-q1a": e,
                    "sør-odal": e,
                    "sor-varanger": e,
                    "xn--sr-varanger-ggb": e,
                    "sør-varanger": e,
                    sorfold: e,
                    "xn--srfold-bya": e,
                    sørfold: e,
                    sorreisa: e,
                    "xn--srreisa-q1a": e,
                    sørreisa: e,
                    sortland: e,
                    sorum: e,
                    "xn--srum-gra": e,
                    sørum: e,
                    spydeberg: e,
                    stange: e,
                    stavanger: e,
                    steigen: e,
                    steinkjer: e,
                    stjordal: e,
                    "xn--stjrdal-s1a": e,
                    stjørdal: e,
                    stokke: e,
                    "stor-elvdal": e,
                    stord: e,
                    stordal: e,
                    storfjord: e,
                    strand: e,
                    stranda: e,
                    stryn: e,
                    sula: e,
                    suldal: e,
                    sund: e,
                    sunndal: e,
                    surnadal: e,
                    sveio: e,
                    svelvik: e,
                    sykkylven: e,
                    tana: e,
                    telemark: [
                        0,
                        {
                            bo: e,
                            "xn--b-5ga": e,
                            bø: e
                        }
                    ],
                    time: e,
                    tingvoll: e,
                    tinn: e,
                    tjeldsund: e,
                    tjome: e,
                    "xn--tjme-hra": e,
                    tjøme: e,
                    tokke: e,
                    tolga: e,
                    tonsberg: e,
                    "xn--tnsberg-q1a": e,
                    tønsberg: e,
                    torsken: e,
                    "xn--trna-woa": e,
                    træna: e,
                    trana: e,
                    tranoy: e,
                    "xn--trany-yua": e,
                    tranøy: e,
                    troandin: e,
                    trogstad: e,
                    "xn--trgstad-r1a": e,
                    trøgstad: e,
                    tromsa: e,
                    tromso: e,
                    "xn--troms-zua": e,
                    tromsø: e,
                    trondheim: e,
                    trysil: e,
                    tvedestrand: e,
                    tydal: e,
                    tynset: e,
                    tysfjord: e,
                    tysnes: e,
                    "xn--tysvr-vra": e,
                    tysvær: e,
                    tysvar: e,
                    ullensaker: e,
                    ullensvang: e,
                    ulvik: e,
                    unjarga: e,
                    "xn--unjrga-rta": e,
                    unjárga: e,
                    utsira: e,
                    vaapste: e,
                    vadso: e,
                    "xn--vads-jra": e,
                    vadsø: e,
                    "xn--vry-yla5g": e,
                    værøy: e,
                    vaga: e,
                    "xn--vg-yiab": e,
                    vågå: e,
                    vagan: e,
                    "xn--vgan-qoa": e,
                    vågan: e,
                    vagsoy: e,
                    "xn--vgsy-qoa0j": e,
                    vågsøy: e,
                    vaksdal: e,
                    valle: e,
                    vang: e,
                    vanylven: e,
                    vardo: e,
                    "xn--vard-jra": e,
                    vardø: e,
                    varggat: e,
                    "xn--vrggt-xqad": e,
                    várggát: e,
                    varoy: e,
                    vefsn: e,
                    vega: e,
                    vegarshei: e,
                    "xn--vegrshei-c0a": e,
                    vegårshei: e,
                    vennesla: e,
                    verdal: e,
                    verran: e,
                    vestby: e,
                    vestfold: [
                        0,
                        {
                            sande: e
                        }
                    ],
                    vestnes: e,
                    "vestre-slidre": e,
                    "vestre-toten": e,
                    vestvagoy: e,
                    "xn--vestvgy-ixa6o": e,
                    vestvågøy: e,
                    vevelstad: e,
                    vik: e,
                    vikna: e,
                    vindafjord: e,
                    voagat: e,
                    volda: e,
                    voss: e,
                    co: t,
                    "123hjemmeside": t,
                    myspreadshop: t
                }
            ],
            np: f,
            nr: Z,
            nu: [
                1,
                {
                    merseine: t,
                    mine: t,
                    shacknet: t,
                    enterprisecloud: t
                }
            ],
            nz: [
                1,
                {
                    ac: e,
                    co: e,
                    cri: e,
                    geek: e,
                    gen: e,
                    govt: e,
                    health: e,
                    iwi: e,
                    kiwi: e,
                    maori: e,
                    "xn--mori-qsa": e,
                    māori: e,
                    mil: e,
                    net: e,
                    org: e,
                    parliament: e,
                    school: e,
                    cloudns: t
                }
            ],
            om: [
                1,
                {
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    med: e,
                    museum: e,
                    net: e,
                    org: e,
                    pro: e
                }
            ],
            onion: e,
            org: [
                1,
                {
                    altervista: t,
                    pimienta: t,
                    poivron: t,
                    potager: t,
                    sweetpepper: t,
                    cdn77: [
                        0,
                        {
                            c: t,
                            rsc: t
                        }
                    ],
                    "cdn77-secure": [
                        0,
                        {
                            origin: [
                                0,
                                {
                                    ssl: t
                                }
                            ]
                        }
                    ],
                    ae: t,
                    cloudns: t,
                    "ip-dynamic": t,
                    ddnss: t,
                    dpdns: t,
                    duckdns: t,
                    tunk: t,
                    blogdns: t,
                    blogsite: t,
                    boldlygoingnowhere: t,
                    dnsalias: t,
                    dnsdojo: t,
                    doesntexist: t,
                    dontexist: t,
                    doomdns: t,
                    dvrdns: t,
                    dynalias: t,
                    dyndns: [
                        2,
                        {
                            go: t,
                            home: t
                        }
                    ],
                    endofinternet: t,
                    endoftheinternet: t,
                    "from-me": t,
                    "game-host": t,
                    gotdns: t,
                    "hobby-site": t,
                    homedns: t,
                    homeftp: t,
                    homelinux: t,
                    homeunix: t,
                    "is-a-bruinsfan": t,
                    "is-a-candidate": t,
                    "is-a-celticsfan": t,
                    "is-a-chef": t,
                    "is-a-geek": t,
                    "is-a-knight": t,
                    "is-a-linux-user": t,
                    "is-a-patsfan": t,
                    "is-a-soxfan": t,
                    "is-found": t,
                    "is-lost": t,
                    "is-saved": t,
                    "is-very-bad": t,
                    "is-very-evil": t,
                    "is-very-good": t,
                    "is-very-nice": t,
                    "is-very-sweet": t,
                    "isa-geek": t,
                    "kicks-ass": t,
                    misconfused: t,
                    podzone: t,
                    readmyblog: t,
                    selfip: t,
                    sellsyourhome: t,
                    servebbs: t,
                    serveftp: t,
                    servegame: t,
                    "stuff-4-sale": t,
                    webhop: t,
                    accesscam: t,
                    camdvr: t,
                    freeddns: t,
                    mywire: t,
                    webredirect: t,
                    twmail: t,
                    eu: [
                        2,
                        {
                            al: t,
                            asso: t,
                            at: t,
                            au: t,
                            be: t,
                            bg: t,
                            ca: t,
                            cd: t,
                            ch: t,
                            cn: t,
                            cy: t,
                            cz: t,
                            de: t,
                            dk: t,
                            edu: t,
                            ee: t,
                            es: t,
                            fi: t,
                            fr: t,
                            gr: t,
                            hr: t,
                            hu: t,
                            ie: t,
                            il: t,
                            in: t,
                            int: t,
                            is: t,
                            it: t,
                            jp: t,
                            kr: t,
                            lt: t,
                            lu: t,
                            lv: t,
                            me: t,
                            mk: t,
                            mt: t,
                            my: t,
                            net: t,
                            ng: t,
                            nl: t,
                            no: t,
                            nz: t,
                            pl: t,
                            pt: t,
                            ro: t,
                            ru: t,
                            se: t,
                            si: t,
                            sk: t,
                            tr: t,
                            uk: t,
                            us: t
                        }
                    ],
                    fedorainfracloud: t,
                    fedorapeople: t,
                    fedoraproject: [
                        0,
                        {
                            cloud: t,
                            os: F,
                            stg: [
                                0,
                                {
                                    os: F
                                }
                            ]
                        }
                    ],
                    freedesktop: t,
                    hatenadiary: t,
                    hepforge: t,
                    "in-dsl": t,
                    "in-vpn": t,
                    js: t,
                    barsy: t,
                    mayfirst: t,
                    routingthecloud: t,
                    bmoattachments: t,
                    "cable-modem": t,
                    collegefan: t,
                    couchpotatofries: t,
                    hopto: t,
                    mlbfan: t,
                    myftp: t,
                    mysecuritycamera: t,
                    nflfan: t,
                    "no-ip": t,
                    "read-books": t,
                    ufcfan: t,
                    zapto: t,
                    dynserv: t,
                    "now-dns": t,
                    "is-local": t,
                    httpbin: t,
                    pubtls: t,
                    jpn: t,
                    "my-firewall": t,
                    myfirewall: t,
                    spdns: t,
                    "small-web": t,
                    dsmynas: t,
                    familyds: t,
                    teckids: Y,
                    tuxfamily: t,
                    diskstation: t,
                    hk: t,
                    us: t,
                    toolforge: t,
                    wmcloud: t,
                    wmflabs: t,
                    za: t
                }
            ],
            pa: [
                1,
                {
                    abo: e,
                    ac: e,
                    com: e,
                    edu: e,
                    gob: e,
                    ing: e,
                    med: e,
                    net: e,
                    nom: e,
                    org: e,
                    sld: e
                }
            ],
            pe: [
                1,
                {
                    com: e,
                    edu: e,
                    gob: e,
                    mil: e,
                    net: e,
                    nom: e,
                    org: e
                }
            ],
            pf: [
                1,
                {
                    com: e,
                    edu: e,
                    org: e
                }
            ],
            pg: f,
            ph: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    i: e,
                    mil: e,
                    net: e,
                    ngo: e,
                    org: e,
                    cloudns: t
                }
            ],
            pk: [
                1,
                {
                    ac: e,
                    biz: e,
                    com: e,
                    edu: e,
                    fam: e,
                    gkp: e,
                    gob: e,
                    gog: e,
                    gok: e,
                    gop: e,
                    gos: e,
                    gov: e,
                    net: e,
                    org: e,
                    web: e
                }
            ],
            pl: [
                1,
                {
                    com: e,
                    net: e,
                    org: e,
                    agro: e,
                    aid: e,
                    atm: e,
                    auto: e,
                    biz: e,
                    edu: e,
                    gmina: e,
                    gsm: e,
                    info: e,
                    mail: e,
                    media: e,
                    miasta: e,
                    mil: e,
                    nieruchomosci: e,
                    nom: e,
                    pc: e,
                    powiat: e,
                    priv: e,
                    realestate: e,
                    rel: e,
                    sex: e,
                    shop: e,
                    sklep: e,
                    sos: e,
                    szkola: e,
                    targi: e,
                    tm: e,
                    tourism: e,
                    travel: e,
                    turystyka: e,
                    gov: [
                        1,
                        {
                            ap: e,
                            griw: e,
                            ic: e,
                            is: e,
                            kmpsp: e,
                            konsulat: e,
                            kppsp: e,
                            kwp: e,
                            kwpsp: e,
                            mup: e,
                            mw: e,
                            oia: e,
                            oirm: e,
                            oke: e,
                            oow: e,
                            oschr: e,
                            oum: e,
                            pa: e,
                            pinb: e,
                            piw: e,
                            po: e,
                            pr: e,
                            psp: e,
                            psse: e,
                            pup: e,
                            rzgw: e,
                            sa: e,
                            sdn: e,
                            sko: e,
                            so: e,
                            sr: e,
                            starostwo: e,
                            ug: e,
                            ugim: e,
                            um: e,
                            umig: e,
                            upow: e,
                            uppo: e,
                            us: e,
                            uw: e,
                            uzs: e,
                            wif: e,
                            wiih: e,
                            winb: e,
                            wios: e,
                            witd: e,
                            wiw: e,
                            wkz: e,
                            wsa: e,
                            wskr: e,
                            wsse: e,
                            wuoz: e,
                            wzmiuw: e,
                            zp: e,
                            zpisdn: e
                        }
                    ],
                    augustow: e,
                    "babia-gora": e,
                    bedzin: e,
                    beskidy: e,
                    bialowieza: e,
                    bialystok: e,
                    bielawa: e,
                    bieszczady: e,
                    boleslawiec: e,
                    bydgoszcz: e,
                    bytom: e,
                    cieszyn: e,
                    czeladz: e,
                    czest: e,
                    dlugoleka: e,
                    elblag: e,
                    elk: e,
                    glogow: e,
                    gniezno: e,
                    gorlice: e,
                    grajewo: e,
                    ilawa: e,
                    jaworzno: e,
                    "jelenia-gora": e,
                    jgora: e,
                    kalisz: e,
                    karpacz: e,
                    kartuzy: e,
                    kaszuby: e,
                    katowice: e,
                    "kazimierz-dolny": e,
                    kepno: e,
                    ketrzyn: e,
                    klodzko: e,
                    kobierzyce: e,
                    kolobrzeg: e,
                    konin: e,
                    konskowola: e,
                    kutno: e,
                    lapy: e,
                    lebork: e,
                    legnica: e,
                    lezajsk: e,
                    limanowa: e,
                    lomza: e,
                    lowicz: e,
                    lubin: e,
                    lukow: e,
                    malbork: e,
                    malopolska: e,
                    mazowsze: e,
                    mazury: e,
                    mielec: e,
                    mielno: e,
                    mragowo: e,
                    naklo: e,
                    nowaruda: e,
                    nysa: e,
                    olawa: e,
                    olecko: e,
                    olkusz: e,
                    olsztyn: e,
                    opoczno: e,
                    opole: e,
                    ostroda: e,
                    ostroleka: e,
                    ostrowiec: e,
                    ostrowwlkp: e,
                    pila: e,
                    pisz: e,
                    podhale: e,
                    podlasie: e,
                    polkowice: e,
                    pomorskie: e,
                    pomorze: e,
                    prochowice: e,
                    pruszkow: e,
                    przeworsk: e,
                    pulawy: e,
                    radom: e,
                    "rawa-maz": e,
                    rybnik: e,
                    rzeszow: e,
                    sanok: e,
                    sejny: e,
                    skoczow: e,
                    slask: e,
                    slupsk: e,
                    sosnowiec: e,
                    "stalowa-wola": e,
                    starachowice: e,
                    stargard: e,
                    suwalki: e,
                    swidnica: e,
                    swiebodzin: e,
                    swinoujscie: e,
                    szczecin: e,
                    szczytno: e,
                    tarnobrzeg: e,
                    tgory: e,
                    turek: e,
                    tychy: e,
                    ustka: e,
                    walbrzych: e,
                    warmia: e,
                    warszawa: e,
                    waw: e,
                    wegrow: e,
                    wielun: e,
                    wlocl: e,
                    wloclawek: e,
                    wodzislaw: e,
                    wolomin: e,
                    wroclaw: e,
                    zachpomor: e,
                    zagan: e,
                    zarow: e,
                    zgora: e,
                    zgorzelec: e,
                    art: t,
                    gliwice: t,
                    krakow: t,
                    poznan: t,
                    wroc: t,
                    zakopane: t,
                    beep: t,
                    "ecommerce-shop": t,
                    cfolks: t,
                    dfirma: t,
                    dkonto: t,
                    you2: t,
                    shoparena: t,
                    homesklep: t,
                    sdscloud: t,
                    unicloud: t,
                    lodz: t,
                    pabianice: t,
                    plock: t,
                    sieradz: t,
                    skierniewice: t,
                    zgierz: t,
                    krasnik: t,
                    leczna: t,
                    lubartow: t,
                    lublin: t,
                    poniatowa: t,
                    swidnik: t,
                    co: t,
                    torun: t,
                    simplesite: t,
                    myspreadshop: t,
                    gda: t,
                    gdansk: t,
                    gdynia: t,
                    med: t,
                    sopot: t,
                    bielsko: t
                }
            ],
            pm: [
                1,
                {
                    own: t,
                    name: t
                }
            ],
            pn: [
                1,
                {
                    co: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e
                }
            ],
            post: e,
            pr: [
                1,
                {
                    biz: e,
                    com: e,
                    edu: e,
                    gov: e,
                    info: e,
                    isla: e,
                    name: e,
                    net: e,
                    org: e,
                    pro: e,
                    ac: e,
                    est: e,
                    prof: e
                }
            ],
            pro: [
                1,
                {
                    aaa: e,
                    aca: e,
                    acct: e,
                    avocat: e,
                    bar: e,
                    cpa: e,
                    eng: e,
                    jur: e,
                    law: e,
                    med: e,
                    recht: e,
                    "12chars": t,
                    cloudns: t,
                    barsy: t,
                    ngrok: t
                }
            ],
            ps: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    plo: e,
                    sec: e
                }
            ],
            pt: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    int: e,
                    net: e,
                    nome: e,
                    org: e,
                    publ: e,
                    "123paginaweb": t
                }
            ],
            pw: [
                1,
                {
                    gov: e,
                    cloudns: t,
                    x443: t
                }
            ],
            py: [
                1,
                {
                    com: e,
                    coop: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e
                }
            ],
            qa: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    name: e,
                    net: e,
                    org: e,
                    sch: e
                }
            ],
            re: [
                1,
                {
                    asso: e,
                    com: e,
                    netlib: t,
                    can: t
                }
            ],
            ro: [
                1,
                {
                    arts: e,
                    com: e,
                    firm: e,
                    info: e,
                    nom: e,
                    nt: e,
                    org: e,
                    rec: e,
                    store: e,
                    tm: e,
                    www: e,
                    co: t,
                    shop: t,
                    barsy: t
                }
            ],
            rs: [
                1,
                {
                    ac: e,
                    co: e,
                    edu: e,
                    gov: e,
                    in: e,
                    org: e,
                    brendly: z,
                    barsy: t,
                    ox: t
                }
            ],
            ru: [
                1,
                {
                    ac: t,
                    edu: t,
                    gov: t,
                    int: t,
                    mil: t,
                    eurodir: t,
                    adygeya: t,
                    bashkiria: t,
                    bir: t,
                    cbg: t,
                    com: t,
                    dagestan: t,
                    grozny: t,
                    kalmykia: t,
                    kustanai: t,
                    marine: t,
                    mordovia: t,
                    msk: t,
                    mytis: t,
                    nalchik: t,
                    nov: t,
                    pyatigorsk: t,
                    spb: t,
                    vladikavkaz: t,
                    vladimir: t,
                    na4u: t,
                    mircloud: t,
                    myjino: [
                        2,
                        {
                            hosting: s,
                            landing: s,
                            spectrum: s,
                            vps: s
                        }
                    ],
                    cldmail: [
                        0,
                        {
                            hb: t
                        }
                    ],
                    mcdir: [
                        2,
                        {
                            vps: t
                        }
                    ],
                    mcpre: t,
                    net: t,
                    org: t,
                    pp: t,
                    lk3: t,
                    ras: t
                }
            ],
            rw: [
                1,
                {
                    ac: e,
                    co: e,
                    coop: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e
                }
            ],
            sa: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    med: e,
                    net: e,
                    org: e,
                    pub: e,
                    sch: e
                }
            ],
            sb: r,
            sc: r,
            sd: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    info: e,
                    med: e,
                    net: e,
                    org: e,
                    tv: e
                }
            ],
            se: [
                1,
                {
                    a: e,
                    ac: e,
                    b: e,
                    bd: e,
                    brand: e,
                    c: e,
                    d: e,
                    e,
                    f: e,
                    fh: e,
                    fhsk: e,
                    fhv: e,
                    g: e,
                    h: e,
                    i: e,
                    k: e,
                    komforb: e,
                    kommunalforbund: e,
                    komvux: e,
                    l: e,
                    lanbib: e,
                    m: e,
                    n: e,
                    naturbruksgymn: e,
                    o: e,
                    org: e,
                    p: e,
                    parti: e,
                    pp: e,
                    press: e,
                    r: e,
                    s: e,
                    t: e,
                    tm: e,
                    u: e,
                    w: e,
                    x: e,
                    y: e,
                    z: e,
                    com: t,
                    iopsys: t,
                    "123minsida": t,
                    itcouldbewor: t,
                    myspreadshop: t
                }
            ],
            sg: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    enscaled: t
                }
            ],
            sh: [
                1,
                {
                    com: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    hashbang: t,
                    botda: t,
                    platform: [
                        0,
                        {
                            ent: t,
                            eu: t,
                            us: t
                        }
                    ],
                    now: t
                }
            ],
            si: [
                1,
                {
                    f5: t,
                    gitapp: t,
                    gitpage: t
                }
            ],
            sj: e,
            sk: e,
            sl: r,
            sm: e,
            sn: [
                1,
                {
                    art: e,
                    com: e,
                    edu: e,
                    gouv: e,
                    org: e,
                    perso: e,
                    univ: e
                }
            ],
            so: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    me: e,
                    net: e,
                    org: e,
                    surveys: t
                }
            ],
            sr: e,
            ss: [
                1,
                {
                    biz: e,
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    me: e,
                    net: e,
                    org: e,
                    sch: e
                }
            ],
            st: [
                1,
                {
                    co: e,
                    com: e,
                    consulado: e,
                    edu: e,
                    embaixada: e,
                    mil: e,
                    net: e,
                    org: e,
                    principe: e,
                    saotome: e,
                    store: e,
                    helioho: t,
                    kirara: t,
                    noho: t
                }
            ],
            su: [
                1,
                {
                    abkhazia: t,
                    adygeya: t,
                    aktyubinsk: t,
                    arkhangelsk: t,
                    armenia: t,
                    ashgabad: t,
                    azerbaijan: t,
                    balashov: t,
                    bashkiria: t,
                    bryansk: t,
                    bukhara: t,
                    chimkent: t,
                    dagestan: t,
                    "east-kazakhstan": t,
                    exnet: t,
                    georgia: t,
                    grozny: t,
                    ivanovo: t,
                    jambyl: t,
                    kalmykia: t,
                    kaluga: t,
                    karacol: t,
                    karaganda: t,
                    karelia: t,
                    khakassia: t,
                    krasnodar: t,
                    kurgan: t,
                    kustanai: t,
                    lenug: t,
                    mangyshlak: t,
                    mordovia: t,
                    msk: t,
                    murmansk: t,
                    nalchik: t,
                    navoi: t,
                    "north-kazakhstan": t,
                    nov: t,
                    obninsk: t,
                    penza: t,
                    pokrovsk: t,
                    sochi: t,
                    spb: t,
                    tashkent: t,
                    termez: t,
                    togliatti: t,
                    troitsk: t,
                    tselinograd: t,
                    tula: t,
                    tuva: t,
                    vladikavkaz: t,
                    vladimir: t,
                    vologda: t
                }
            ],
            sv: [
                1,
                {
                    com: e,
                    edu: e,
                    gob: e,
                    org: e,
                    red: e
                }
            ],
            sx: c,
            sy: n,
            sz: [
                1,
                {
                    ac: e,
                    co: e,
                    org: e
                }
            ],
            tc: e,
            td: e,
            tel: e,
            tf: [
                1,
                {
                    sch: t
                }
            ],
            tg: e,
            th: [
                1,
                {
                    ac: e,
                    co: e,
                    go: e,
                    in: e,
                    mi: e,
                    net: e,
                    or: e,
                    online: t,
                    shop: t
                }
            ],
            tj: [
                1,
                {
                    ac: e,
                    biz: e,
                    co: e,
                    com: e,
                    edu: e,
                    go: e,
                    gov: e,
                    int: e,
                    mil: e,
                    name: e,
                    net: e,
                    nic: e,
                    org: e,
                    test: e,
                    web: e
                }
            ],
            tk: e,
            tl: c,
            tm: [
                1,
                {
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    nom: e,
                    org: e
                }
            ],
            tn: [
                1,
                {
                    com: e,
                    ens: e,
                    fin: e,
                    gov: e,
                    ind: e,
                    info: e,
                    intl: e,
                    mincom: e,
                    nat: e,
                    net: e,
                    org: e,
                    perso: e,
                    tourism: e,
                    orangecloud: t
                }
            ],
            to: [
                1,
                {
                    611: t,
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    oya: t,
                    x0: t,
                    quickconnect: S,
                    vpnplus: t
                }
            ],
            tr: [
                1,
                {
                    av: e,
                    bbs: e,
                    bel: e,
                    biz: e,
                    com: e,
                    dr: e,
                    edu: e,
                    gen: e,
                    gov: e,
                    info: e,
                    k12: e,
                    kep: e,
                    mil: e,
                    name: e,
                    net: e,
                    org: e,
                    pol: e,
                    tel: e,
                    tsk: e,
                    tv: e,
                    web: e,
                    nc: c
                }
            ],
            tt: [
                1,
                {
                    biz: e,
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    info: e,
                    mil: e,
                    name: e,
                    net: e,
                    org: e,
                    pro: e
                }
            ],
            tv: [
                1,
                {
                    "better-than": t,
                    dyndns: t,
                    "on-the-web": t,
                    "worse-than": t,
                    from: t,
                    sakura: t
                }
            ],
            tw: [
                1,
                {
                    club: e,
                    com: [
                        1,
                        {
                            mymailer: t
                        }
                    ],
                    ebiz: e,
                    edu: e,
                    game: e,
                    gov: e,
                    idv: e,
                    mil: e,
                    net: e,
                    org: e,
                    url: t,
                    mydns: t
                }
            ],
            tz: [
                1,
                {
                    ac: e,
                    co: e,
                    go: e,
                    hotel: e,
                    info: e,
                    me: e,
                    mil: e,
                    mobi: e,
                    ne: e,
                    or: e,
                    sc: e,
                    tv: e
                }
            ],
            ua: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    in: e,
                    net: e,
                    org: e,
                    cherkassy: e,
                    cherkasy: e,
                    chernigov: e,
                    chernihiv: e,
                    chernivtsi: e,
                    chernovtsy: e,
                    ck: e,
                    cn: e,
                    cr: e,
                    crimea: e,
                    cv: e,
                    dn: e,
                    dnepropetrovsk: e,
                    dnipropetrovsk: e,
                    donetsk: e,
                    dp: e,
                    if: e,
                    "ivano-frankivsk": e,
                    kh: e,
                    kharkiv: e,
                    kharkov: e,
                    kherson: e,
                    khmelnitskiy: e,
                    khmelnytskyi: e,
                    kiev: e,
                    kirovograd: e,
                    km: e,
                    kr: e,
                    kropyvnytskyi: e,
                    krym: e,
                    ks: e,
                    kv: e,
                    kyiv: e,
                    lg: e,
                    lt: e,
                    lugansk: e,
                    luhansk: e,
                    lutsk: e,
                    lv: e,
                    lviv: e,
                    mk: e,
                    mykolaiv: e,
                    nikolaev: e,
                    od: e,
                    odesa: e,
                    odessa: e,
                    pl: e,
                    poltava: e,
                    rivne: e,
                    rovno: e,
                    rv: e,
                    sb: e,
                    sebastopol: e,
                    sevastopol: e,
                    sm: e,
                    sumy: e,
                    te: e,
                    ternopil: e,
                    uz: e,
                    uzhgorod: e,
                    uzhhorod: e,
                    vinnica: e,
                    vinnytsia: e,
                    vn: e,
                    volyn: e,
                    yalta: e,
                    zakarpattia: e,
                    zaporizhzhe: e,
                    zaporizhzhia: e,
                    zhitomir: e,
                    zhytomyr: e,
                    zp: e,
                    zt: e,
                    cc: t,
                    inf: t,
                    ltd: t,
                    cx: t,
                    ie: t,
                    biz: t,
                    co: t,
                    pp: t,
                    v: t
                }
            ],
            ug: [
                1,
                {
                    ac: e,
                    co: e,
                    com: e,
                    edu: e,
                    go: e,
                    gov: e,
                    mil: e,
                    ne: e,
                    or: e,
                    org: e,
                    sc: e,
                    us: e
                }
            ],
            uk: [
                1,
                {
                    ac: e,
                    co: [
                        1,
                        {
                            bytemark: [
                                0,
                                {
                                    dh: t,
                                    vm: t
                                }
                            ],
                            layershift: $,
                            barsy: t,
                            barsyonline: t,
                            retrosnub: K,
                            "nh-serv": t,
                            "no-ip": t,
                            adimo: t,
                            myspreadshop: t
                        }
                    ],
                    gov: [
                        1,
                        {
                            api: t,
                            campaign: t,
                            service: t
                        }
                    ],
                    ltd: e,
                    me: e,
                    net: e,
                    nhs: e,
                    org: [
                        1,
                        {
                            glug: t,
                            lug: t,
                            lugs: t,
                            affinitylottery: t,
                            raffleentry: t,
                            weeklylottery: t
                        }
                    ],
                    plc: e,
                    police: e,
                    sch: f,
                    conn: t,
                    copro: t,
                    hosp: t,
                    "independent-commission": t,
                    "independent-inquest": t,
                    "independent-inquiry": t,
                    "independent-panel": t,
                    "independent-review": t,
                    "public-inquiry": t,
                    "royal-commission": t,
                    pymnt: t,
                    barsy: t,
                    nimsite: t,
                    oraclegovcloudapps: s
                }
            ],
            us: [
                1,
                {
                    dni: e,
                    isa: e,
                    nsn: e,
                    ak: se,
                    al: se,
                    ar: se,
                    as: se,
                    az: se,
                    ca: se,
                    co: se,
                    ct: se,
                    dc: se,
                    de: [
                        1,
                        {
                            cc: e,
                            lib: t
                        }
                    ],
                    fl: se,
                    ga: se,
                    gu: se,
                    hi: oe,
                    ia: se,
                    id: se,
                    il: se,
                    in: se,
                    ks: se,
                    ky: se,
                    la: se,
                    ma: [
                        1,
                        {
                            k12: [
                                1,
                                {
                                    chtr: e,
                                    paroch: e,
                                    pvt: e
                                }
                            ],
                            cc: e,
                            lib: e
                        }
                    ],
                    md: se,
                    me: se,
                    mi: [
                        1,
                        {
                            k12: e,
                            cc: e,
                            lib: e,
                            "ann-arbor": e,
                            cog: e,
                            dst: e,
                            eaton: e,
                            gen: e,
                            mus: e,
                            tec: e,
                            washtenaw: e
                        }
                    ],
                    mn: se,
                    mo: se,
                    ms: se,
                    mt: se,
                    nc: se,
                    nd: oe,
                    ne: se,
                    nh: se,
                    nj: se,
                    nm: se,
                    nv: se,
                    ny: se,
                    oh: se,
                    ok: se,
                    or: se,
                    pa: se,
                    pr: se,
                    ri: oe,
                    sc: se,
                    sd: oe,
                    tn: se,
                    tx: se,
                    ut: se,
                    va: se,
                    vi: se,
                    vt: se,
                    wa: se,
                    wi: se,
                    wv: [
                        1,
                        {
                            cc: e
                        }
                    ],
                    wy: se,
                    cloudns: t,
                    "is-by": t,
                    "land-4-sale": t,
                    "stuff-4-sale": t,
                    heliohost: t,
                    enscaled: [
                        0,
                        {
                            phx: t
                        }
                    ],
                    mircloud: t,
                    ngo: t,
                    golffan: t,
                    noip: t,
                    pointto: t,
                    freeddns: t,
                    srv: [
                        2,
                        {
                            gh: t,
                            gl: t
                        }
                    ],
                    platterp: t,
                    servername: t
                }
            ],
            uy: [
                1,
                {
                    com: e,
                    edu: e,
                    gub: e,
                    mil: e,
                    net: e,
                    org: e
                }
            ],
            uz: [
                1,
                {
                    co: e,
                    com: e,
                    net: e,
                    org: e
                }
            ],
            va: e,
            vc: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    mil: e,
                    net: e,
                    org: e,
                    gv: [
                        2,
                        {
                            d: t
                        }
                    ],
                    "0e": s,
                    mydns: t
                }
            ],
            ve: [
                1,
                {
                    arts: e,
                    bib: e,
                    co: e,
                    com: e,
                    e12: e,
                    edu: e,
                    emprende: e,
                    firm: e,
                    gob: e,
                    gov: e,
                    info: e,
                    int: e,
                    mil: e,
                    net: e,
                    nom: e,
                    org: e,
                    rar: e,
                    rec: e,
                    store: e,
                    tec: e,
                    web: e
                }
            ],
            vg: [
                1,
                {
                    edu: e
                }
            ],
            vi: [
                1,
                {
                    co: e,
                    com: e,
                    k12: e,
                    net: e,
                    org: e
                }
            ],
            vn: [
                1,
                {
                    ac: e,
                    ai: e,
                    biz: e,
                    com: e,
                    edu: e,
                    gov: e,
                    health: e,
                    id: e,
                    info: e,
                    int: e,
                    io: e,
                    name: e,
                    net: e,
                    org: e,
                    pro: e,
                    angiang: e,
                    bacgiang: e,
                    backan: e,
                    baclieu: e,
                    bacninh: e,
                    "baria-vungtau": e,
                    bentre: e,
                    binhdinh: e,
                    binhduong: e,
                    binhphuoc: e,
                    binhthuan: e,
                    camau: e,
                    cantho: e,
                    caobang: e,
                    daklak: e,
                    daknong: e,
                    danang: e,
                    dienbien: e,
                    dongnai: e,
                    dongthap: e,
                    gialai: e,
                    hagiang: e,
                    haiduong: e,
                    haiphong: e,
                    hanam: e,
                    hanoi: e,
                    hatinh: e,
                    haugiang: e,
                    hoabinh: e,
                    hungyen: e,
                    khanhhoa: e,
                    kiengiang: e,
                    kontum: e,
                    laichau: e,
                    lamdong: e,
                    langson: e,
                    laocai: e,
                    longan: e,
                    namdinh: e,
                    nghean: e,
                    ninhbinh: e,
                    ninhthuan: e,
                    phutho: e,
                    phuyen: e,
                    quangbinh: e,
                    quangnam: e,
                    quangngai: e,
                    quangninh: e,
                    quangtri: e,
                    soctrang: e,
                    sonla: e,
                    tayninh: e,
                    thaibinh: e,
                    thainguyen: e,
                    thanhhoa: e,
                    thanhphohochiminh: e,
                    thuathienhue: e,
                    tiengiang: e,
                    travinh: e,
                    tuyenquang: e,
                    vinhlong: e,
                    vinhphuc: e,
                    yenbai: e
                }
            ],
            vu: L,
            wf: [
                1,
                {
                    biz: t,
                    sch: t
                }
            ],
            ws: [
                1,
                {
                    com: e,
                    edu: e,
                    gov: e,
                    net: e,
                    org: e,
                    advisor: s,
                    cloud66: t,
                    dyndns: t,
                    mypets: t
                }
            ],
            yt: [
                1,
                {
                    org: t
                }
            ],
            "xn--mgbaam7a8h": e,
            امارات: e,
            "xn--y9a3aq": e,
            հայ: e,
            "xn--54b7fta0cc": e,
            বাংলা: e,
            "xn--90ae": e,
            бг: e,
            "xn--mgbcpq6gpa1a": e,
            البحرين: e,
            "xn--90ais": e,
            бел: e,
            "xn--fiqs8s": e,
            中国: e,
            "xn--fiqz9s": e,
            中國: e,
            "xn--lgbbat1ad8j": e,
            الجزائر: e,
            "xn--wgbh1c": e,
            مصر: e,
            "xn--e1a4c": e,
            ею: e,
            "xn--qxa6a": e,
            ευ: e,
            "xn--mgbah1a3hjkrd": e,
            موريتانيا: e,
            "xn--node": e,
            გე: e,
            "xn--qxam": e,
            ελ: e,
            "xn--j6w193g": [
                1,
                {
                    "xn--gmqw5a": e,
                    "xn--55qx5d": e,
                    "xn--mxtq1m": e,
                    "xn--wcvs22d": e,
                    "xn--uc0atv": e,
                    "xn--od0alg": e
                }
            ],
            香港: [
                1,
                {
                    個人: e,
                    公司: e,
                    政府: e,
                    教育: e,
                    組織: e,
                    網絡: e
                }
            ],
            "xn--2scrj9c": e,
            ಭಾರತ: e,
            "xn--3hcrj9c": e,
            ଭାରତ: e,
            "xn--45br5cyl": e,
            ভাৰত: e,
            "xn--h2breg3eve": e,
            भारतम्: e,
            "xn--h2brj9c8c": e,
            भारोत: e,
            "xn--mgbgu82a": e,
            ڀارت: e,
            "xn--rvc1e0am3e": e,
            ഭാരതം: e,
            "xn--h2brj9c": e,
            भारत: e,
            "xn--mgbbh1a": e,
            بارت: e,
            "xn--mgbbh1a71e": e,
            بھارت: e,
            "xn--fpcrj9c3d": e,
            భారత్: e,
            "xn--gecrj9c": e,
            ભારત: e,
            "xn--s9brj9c": e,
            ਭਾਰਤ: e,
            "xn--45brj9c": e,
            ভারত: e,
            "xn--xkc2dl3a5ee0h": e,
            இந்தியா: e,
            "xn--mgba3a4f16a": e,
            ایران: e,
            "xn--mgba3a4fra": e,
            ايران: e,
            "xn--mgbtx2b": e,
            عراق: e,
            "xn--mgbayh7gpa": e,
            الاردن: e,
            "xn--3e0b707e": e,
            한국: e,
            "xn--80ao21a": e,
            қаз: e,
            "xn--q7ce6a": e,
            ລາວ: e,
            "xn--fzc2c9e2c": e,
            ලංකා: e,
            "xn--xkc2al3hye2a": e,
            இலங்கை: e,
            "xn--mgbc0a9azcg": e,
            المغرب: e,
            "xn--d1alf": e,
            мкд: e,
            "xn--l1acc": e,
            мон: e,
            "xn--mix891f": e,
            澳門: e,
            "xn--mix082f": e,
            澳门: e,
            "xn--mgbx4cd0ab": e,
            مليسيا: e,
            "xn--mgb9awbf": e,
            عمان: e,
            "xn--mgbai9azgqp6j": e,
            پاکستان: e,
            "xn--mgbai9a5eva00b": e,
            پاكستان: e,
            "xn--ygbi2ammx": e,
            فلسطين: e,
            "xn--90a3ac": [
                1,
                {
                    "xn--80au": e,
                    "xn--90azh": e,
                    "xn--d1at": e,
                    "xn--c1avg": e,
                    "xn--o1ac": e,
                    "xn--o1ach": e
                }
            ],
            срб: [
                1,
                {
                    ак: e,
                    обр: e,
                    од: e,
                    орг: e,
                    пр: e,
                    упр: e
                }
            ],
            "xn--p1ai": e,
            рф: e,
            "xn--wgbl6a": e,
            قطر: e,
            "xn--mgberp4a5d4ar": e,
            السعودية: e,
            "xn--mgberp4a5d4a87g": e,
            السعودیة: e,
            "xn--mgbqly7c0a67fbc": e,
            السعودیۃ: e,
            "xn--mgbqly7cvafr": e,
            السعوديه: e,
            "xn--mgbpl2fh": e,
            سودان: e,
            "xn--yfro4i67o": e,
            新加坡: e,
            "xn--clchc0ea0b2g2a9gcd": e,
            சிங்கப்பூர்: e,
            "xn--ogbpf8fl": e,
            سورية: e,
            "xn--mgbtf8fl": e,
            سوريا: e,
            "xn--o3cw4h": [
                1,
                {
                    "xn--o3cyx2a": e,
                    "xn--12co0c3b4eva": e,
                    "xn--m3ch0j3a": e,
                    "xn--h3cuzk1di": e,
                    "xn--12c1fe0br": e,
                    "xn--12cfi8ixb8l": e
                }
            ],
            ไทย: [
                1,
                {
                    ทหาร: e,
                    ธุรกิจ: e,
                    เน็ต: e,
                    รัฐบาล: e,
                    ศึกษา: e,
                    องค์กร: e
                }
            ],
            "xn--pgbs0dh": e,
            تونس: e,
            "xn--kpry57d": e,
            台灣: e,
            "xn--kprw13d": e,
            台湾: e,
            "xn--nnx388a": e,
            臺灣: e,
            "xn--j1amh": e,
            укр: e,
            "xn--mgb2ddes": e,
            اليمن: e,
            xxx: e,
            ye: n,
            za: [
                0,
                {
                    ac: e,
                    agric: e,
                    alt: e,
                    co: e,
                    edu: e,
                    gov: e,
                    grondar: e,
                    law: e,
                    mil: e,
                    net: e,
                    ngo: e,
                    nic: e,
                    nis: e,
                    nom: e,
                    org: e,
                    school: e,
                    tm: e,
                    web: e
                }
            ],
            zm: [
                1,
                {
                    ac: e,
                    biz: e,
                    co: e,
                    com: e,
                    edu: e,
                    gov: e,
                    info: e,
                    mil: e,
                    net: e,
                    org: e,
                    sch: e
                }
            ],
            zw: [
                1,
                {
                    ac: e,
                    co: e,
                    gov: e,
                    mil: e,
                    org: e
                }
            ],
            aaa: e,
            aarp: e,
            abb: e,
            abbott: e,
            abbvie: e,
            abc: e,
            able: e,
            abogado: e,
            abudhabi: e,
            academy: [
                1,
                {
                    official: t
                }
            ],
            accenture: e,
            accountant: e,
            accountants: e,
            aco: e,
            actor: e,
            ads: e,
            adult: e,
            aeg: e,
            aetna: e,
            afl: e,
            africa: e,
            agakhan: e,
            agency: e,
            aig: e,
            airbus: e,
            airforce: e,
            airtel: e,
            akdn: e,
            alibaba: e,
            alipay: e,
            allfinanz: e,
            allstate: e,
            ally: e,
            alsace: e,
            alstom: e,
            amazon: e,
            americanexpress: e,
            americanfamily: e,
            amex: e,
            amfam: e,
            amica: e,
            amsterdam: e,
            analytics: e,
            android: e,
            anquan: e,
            anz: e,
            aol: e,
            apartments: e,
            app: [
                1,
                {
                    adaptable: t,
                    aiven: t,
                    beget: s,
                    brave: o,
                    clerk: t,
                    clerkstage: t,
                    wnext: t,
                    csb: [
                        2,
                        {
                            preview: t
                        }
                    ],
                    convex: t,
                    deta: t,
                    ondigitalocean: t,
                    easypanel: t,
                    encr: t,
                    evervault: i,
                    expo: [
                        2,
                        {
                            staging: t
                        }
                    ],
                    edgecompute: t,
                    "on-fleek": t,
                    flutterflow: t,
                    e2b: t,
                    framer: t,
                    hosted: s,
                    run: s,
                    web: t,
                    hasura: t,
                    botdash: t,
                    loginline: t,
                    lovable: t,
                    medusajs: t,
                    messerli: t,
                    netfy: t,
                    netlify: t,
                    ngrok: t,
                    "ngrok-free": t,
                    developer: s,
                    noop: t,
                    northflank: s,
                    upsun: s,
                    replit: a,
                    nyat: t,
                    snowflake: [
                        0,
                        {
                            "*": t,
                            privatelink: s
                        }
                    ],
                    streamlit: t,
                    storipress: t,
                    telebit: t,
                    typedream: t,
                    vercel: t,
                    bookonline: t,
                    wdh: t,
                    windsurf: t,
                    zeabur: t,
                    zerops: s
                }
            ],
            apple: e,
            aquarelle: e,
            arab: e,
            aramco: e,
            archi: e,
            army: e,
            art: e,
            arte: e,
            asda: e,
            associates: e,
            athleta: e,
            attorney: e,
            auction: e,
            audi: e,
            audible: e,
            audio: e,
            auspost: e,
            author: e,
            auto: e,
            autos: e,
            aws: [
                1,
                {
                    sagemaker: [
                        0,
                        {
                            "ap-northeast-1": d,
                            "ap-northeast-2": d,
                            "ap-south-1": d,
                            "ap-southeast-1": d,
                            "ap-southeast-2": d,
                            "ca-central-1": m,
                            "eu-central-1": d,
                            "eu-west-1": d,
                            "eu-west-2": d,
                            "us-east-1": m,
                            "us-east-2": m,
                            "us-west-2": m,
                            "af-south-1": u,
                            "ap-east-1": u,
                            "ap-northeast-3": u,
                            "ap-south-2": p,
                            "ap-southeast-3": u,
                            "ap-southeast-4": p,
                            "ca-west-1": [
                                0,
                                {
                                    notebook: t,
                                    "notebook-fips": t
                                }
                            ],
                            "eu-central-2": u,
                            "eu-north-1": u,
                            "eu-south-1": u,
                            "eu-south-2": u,
                            "eu-west-3": u,
                            "il-central-1": u,
                            "me-central-1": u,
                            "me-south-1": u,
                            "sa-east-1": u,
                            "us-gov-east-1": h,
                            "us-gov-west-1": h,
                            "us-west-1": [
                                0,
                                {
                                    notebook: t,
                                    "notebook-fips": t,
                                    studio: t
                                }
                            ],
                            experiments: s
                        }
                    ],
                    repost: [
                        0,
                        {
                            private: s
                        }
                    ],
                    on: [
                        0,
                        {
                            "ap-northeast-1": l,
                            "ap-southeast-1": l,
                            "ap-southeast-2": l,
                            "eu-central-1": l,
                            "eu-north-1": l,
                            "eu-west-1": l,
                            "us-east-1": l,
                            "us-east-2": l,
                            "us-west-2": l
                        }
                    ]
                }
            ],
            axa: e,
            azure: e,
            baby: e,
            baidu: e,
            banamex: e,
            band: e,
            bank: e,
            bar: e,
            barcelona: e,
            barclaycard: e,
            barclays: e,
            barefoot: e,
            bargains: e,
            baseball: e,
            basketball: [
                1,
                {
                    aus: t,
                    nz: t
                }
            ],
            bauhaus: e,
            bayern: e,
            bbc: e,
            bbt: e,
            bbva: e,
            bcg: e,
            bcn: e,
            beats: e,
            beauty: e,
            beer: e,
            bentley: e,
            berlin: e,
            best: e,
            bestbuy: e,
            bet: e,
            bharti: e,
            bible: e,
            bid: e,
            bike: e,
            bing: e,
            bingo: e,
            bio: e,
            black: e,
            blackfriday: e,
            blockbuster: e,
            blog: e,
            bloomberg: e,
            blue: e,
            bms: e,
            bmw: e,
            bnpparibas: e,
            boats: e,
            boehringer: e,
            bofa: e,
            bom: e,
            bond: e,
            boo: e,
            book: e,
            booking: e,
            bosch: e,
            bostik: e,
            boston: e,
            bot: e,
            boutique: e,
            box: e,
            bradesco: e,
            bridgestone: e,
            broadway: e,
            broker: e,
            brother: e,
            brussels: e,
            build: [
                1,
                {
                    v0: t,
                    windsurf: t
                }
            ],
            builders: [
                1,
                {
                    cloudsite: t
                }
            ],
            business: g,
            buy: e,
            buzz: e,
            bzh: e,
            cab: e,
            cafe: e,
            cal: e,
            call: e,
            calvinklein: e,
            cam: e,
            camera: e,
            camp: [
                1,
                {
                    emf: [
                        0,
                        {
                            at: t
                        }
                    ]
                }
            ],
            canon: e,
            capetown: e,
            capital: e,
            capitalone: e,
            car: e,
            caravan: e,
            cards: e,
            care: e,
            career: e,
            careers: e,
            cars: e,
            casa: [
                1,
                {
                    nabu: [
                        0,
                        {
                            ui: t
                        }
                    ]
                }
            ],
            case: e,
            cash: e,
            casino: e,
            catering: e,
            catholic: e,
            cba: e,
            cbn: e,
            cbre: e,
            center: e,
            ceo: e,
            cern: e,
            cfa: e,
            cfd: e,
            chanel: e,
            channel: e,
            charity: e,
            chase: e,
            chat: e,
            cheap: e,
            chintai: e,
            christmas: e,
            chrome: e,
            church: e,
            cipriani: e,
            circle: e,
            cisco: e,
            citadel: e,
            citi: e,
            citic: e,
            city: e,
            claims: e,
            cleaning: e,
            click: e,
            clinic: e,
            clinique: e,
            clothing: e,
            cloud: [
                1,
                {
                    convex: t,
                    elementor: t,
                    encoway: [
                        0,
                        {
                            eu: t
                        }
                    ],
                    statics: s,
                    ravendb: t,
                    axarnet: [
                        0,
                        {
                            "es-1": t
                        }
                    ],
                    diadem: t,
                    jelastic: [
                        0,
                        {
                            vip: t
                        }
                    ],
                    jele: t,
                    "jenv-aruba": [
                        0,
                        {
                            aruba: [
                                0,
                                {
                                    eur: [
                                        0,
                                        {
                                            it1: t
                                        }
                                    ]
                                }
                            ],
                            it1: t
                        }
                    ],
                    keliweb: [
                        2,
                        {
                            cs: t
                        }
                    ],
                    oxa: [
                        2,
                        {
                            tn: t,
                            uk: t
                        }
                    ],
                    primetel: [
                        2,
                        {
                            uk: t
                        }
                    ],
                    reclaim: [
                        0,
                        {
                            ca: t,
                            uk: t,
                            us: t
                        }
                    ],
                    trendhosting: [
                        0,
                        {
                            ch: t,
                            de: t
                        }
                    ],
                    jotelulu: t,
                    kuleuven: t,
                    laravel: t,
                    linkyard: t,
                    magentosite: s,
                    matlab: t,
                    observablehq: t,
                    perspecta: t,
                    vapor: t,
                    "on-rancher": s,
                    scw: [
                        0,
                        {
                            baremetal: [
                                0,
                                {
                                    "fr-par-1": t,
                                    "fr-par-2": t,
                                    "nl-ams-1": t
                                }
                            ],
                            "fr-par": [
                                0,
                                {
                                    cockpit: t,
                                    fnc: [
                                        2,
                                        {
                                            functions: t
                                        }
                                    ],
                                    k8s: w,
                                    s3: t,
                                    "s3-website": t,
                                    whm: t
                                }
                            ],
                            instances: [
                                0,
                                {
                                    priv: t,
                                    pub: t
                                }
                            ],
                            k8s: t,
                            "nl-ams": [
                                0,
                                {
                                    cockpit: t,
                                    k8s: w,
                                    s3: t,
                                    "s3-website": t,
                                    whm: t
                                }
                            ],
                            "pl-waw": [
                                0,
                                {
                                    cockpit: t,
                                    k8s: w,
                                    s3: t,
                                    "s3-website": t
                                }
                            ],
                            scalebook: t,
                            smartlabeling: t
                        }
                    ],
                    servebolt: t,
                    onstackit: [
                        0,
                        {
                            runs: t
                        }
                    ],
                    trafficplex: t,
                    "unison-services": t,
                    urown: t,
                    voorloper: t,
                    zap: t
                }
            ],
            club: [
                1,
                {
                    cloudns: t,
                    jele: t,
                    barsy: t
                }
            ],
            clubmed: e,
            coach: e,
            codes: [
                1,
                {
                    owo: s
                }
            ],
            coffee: e,
            college: e,
            cologne: e,
            commbank: e,
            community: [
                1,
                {
                    nog: t,
                    ravendb: t,
                    myforum: t
                }
            ],
            company: e,
            compare: e,
            computer: e,
            comsec: e,
            condos: e,
            construction: e,
            consulting: e,
            contact: e,
            contractors: e,
            cooking: e,
            cool: [
                1,
                {
                    elementor: t,
                    de: t
                }
            ],
            corsica: e,
            country: e,
            coupon: e,
            coupons: e,
            courses: e,
            cpa: e,
            credit: e,
            creditcard: e,
            creditunion: e,
            cricket: e,
            crown: e,
            crs: e,
            cruise: e,
            cruises: e,
            cuisinella: e,
            cymru: e,
            cyou: e,
            dad: e,
            dance: e,
            data: e,
            date: e,
            dating: e,
            datsun: e,
            day: e,
            dclk: e,
            dds: e,
            deal: e,
            dealer: e,
            deals: e,
            degree: e,
            delivery: e,
            dell: e,
            deloitte: e,
            delta: e,
            democrat: e,
            dental: e,
            dentist: e,
            desi: e,
            design: [
                1,
                {
                    graphic: t,
                    bss: t
                }
            ],
            dev: [
                1,
                {
                    "12chars": t,
                    myaddr: t,
                    panel: t,
                    lcl: s,
                    lclstage: s,
                    stg: s,
                    stgstage: s,
                    pages: t,
                    r2: t,
                    workers: t,
                    deno: t,
                    "deno-staging": t,
                    deta: t,
                    evervault: i,
                    fly: t,
                    githubpreview: t,
                    gateway: s,
                    hrsn: [
                        2,
                        {
                            psl: [
                                0,
                                {
                                    sub: t,
                                    wc: [
                                        0,
                                        {
                                            "*": t,
                                            sub: s
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    botdash: t,
                    inbrowser: s,
                    "is-a-good": t,
                    "is-a": t,
                    iserv: t,
                    runcontainers: t,
                    localcert: [
                        0,
                        {
                            user: s
                        }
                    ],
                    loginline: t,
                    barsy: t,
                    mediatech: t,
                    modx: t,
                    ngrok: t,
                    "ngrok-free": t,
                    "is-a-fullstack": t,
                    "is-cool": t,
                    "is-not-a": t,
                    localplayer: t,
                    xmit: t,
                    "platter-app": t,
                    replit: [
                        2,
                        {
                            archer: t,
                            bones: t,
                            canary: t,
                            global: t,
                            hacker: t,
                            id: t,
                            janeway: t,
                            kim: t,
                            kira: t,
                            kirk: t,
                            odo: t,
                            paris: t,
                            picard: t,
                            pike: t,
                            prerelease: t,
                            reed: t,
                            riker: t,
                            sisko: t,
                            spock: t,
                            staging: t,
                            sulu: t,
                            tarpit: t,
                            teams: t,
                            tucker: t,
                            wesley: t,
                            worf: t
                        }
                    ],
                    crm: [
                        0,
                        {
                            d: s,
                            w: s,
                            wa: s,
                            wb: s,
                            wc: s,
                            wd: s,
                            we: s,
                            wf: s
                        }
                    ],
                    vercel: t,
                    webhare: s
                }
            ],
            dhl: e,
            diamonds: e,
            diet: e,
            digital: [
                1,
                {
                    cloudapps: [
                        2,
                        {
                            london: t
                        }
                    ]
                }
            ],
            direct: [
                1,
                {
                    libp2p: t
                }
            ],
            directory: e,
            discount: e,
            discover: e,
            dish: e,
            diy: e,
            dnp: e,
            docs: e,
            doctor: e,
            dog: e,
            domains: e,
            dot: e,
            download: e,
            drive: e,
            dtv: e,
            dubai: e,
            dunlop: e,
            dupont: e,
            durban: e,
            dvag: e,
            dvr: e,
            earth: e,
            eat: e,
            eco: e,
            edeka: e,
            education: g,
            email: [
                1,
                {
                    crisp: [
                        0,
                        {
                            on: t
                        }
                    ],
                    tawk: G,
                    tawkto: G
                }
            ],
            emerck: e,
            energy: e,
            engineer: e,
            engineering: e,
            enterprises: e,
            epson: e,
            equipment: e,
            ericsson: e,
            erni: e,
            esq: e,
            estate: [
                1,
                {
                    compute: s
                }
            ],
            eurovision: e,
            eus: [
                1,
                {
                    party: H
                }
            ],
            events: [
                1,
                {
                    koobin: t,
                    co: t
                }
            ],
            exchange: e,
            expert: e,
            exposed: e,
            express: e,
            extraspace: e,
            fage: e,
            fail: e,
            fairwinds: e,
            faith: e,
            family: e,
            fan: e,
            fans: e,
            farm: [
                1,
                {
                    storj: t
                }
            ],
            farmers: e,
            fashion: e,
            fast: e,
            fedex: e,
            feedback: e,
            ferrari: e,
            ferrero: e,
            fidelity: e,
            fido: e,
            film: e,
            final: e,
            finance: e,
            financial: g,
            fire: e,
            firestone: e,
            firmdale: e,
            fish: e,
            fishing: e,
            fit: e,
            fitness: e,
            flickr: e,
            flights: e,
            flir: e,
            florist: e,
            flowers: e,
            fly: e,
            foo: e,
            food: e,
            football: e,
            ford: e,
            forex: e,
            forsale: e,
            forum: e,
            foundation: e,
            fox: e,
            free: e,
            fresenius: e,
            frl: e,
            frogans: e,
            frontier: e,
            ftr: e,
            fujitsu: e,
            fun: e,
            fund: e,
            furniture: e,
            futbol: e,
            fyi: e,
            gal: e,
            gallery: e,
            gallo: e,
            gallup: e,
            game: e,
            games: [
                1,
                {
                    pley: t,
                    sheezy: t
                }
            ],
            gap: e,
            garden: e,
            gay: [
                1,
                {
                    pages: t
                }
            ],
            gbiz: e,
            gdn: [
                1,
                {
                    cnpy: t
                }
            ],
            gea: e,
            gent: e,
            genting: e,
            george: e,
            ggee: e,
            gift: e,
            gifts: e,
            gives: e,
            giving: e,
            glass: e,
            gle: e,
            global: [
                1,
                {
                    appwrite: t
                }
            ],
            globo: e,
            gmail: e,
            gmbh: e,
            gmo: e,
            gmx: e,
            godaddy: e,
            gold: e,
            goldpoint: e,
            golf: e,
            goo: e,
            goodyear: e,
            goog: [
                1,
                {
                    cloud: t,
                    translate: t,
                    usercontent: s
                }
            ],
            google: e,
            gop: e,
            got: e,
            grainger: e,
            graphics: e,
            gratis: e,
            green: e,
            gripe: e,
            grocery: e,
            group: [
                1,
                {
                    discourse: t
                }
            ],
            gucci: e,
            guge: e,
            guide: e,
            guitars: e,
            guru: e,
            hair: e,
            hamburg: e,
            hangout: e,
            haus: e,
            hbo: e,
            hdfc: e,
            hdfcbank: e,
            health: [
                1,
                {
                    hra: t
                }
            ],
            healthcare: e,
            help: e,
            helsinki: e,
            here: e,
            hermes: e,
            hiphop: e,
            hisamitsu: e,
            hitachi: e,
            hiv: e,
            hkt: e,
            hockey: e,
            holdings: e,
            holiday: e,
            homedepot: e,
            homegoods: e,
            homes: e,
            homesense: e,
            honda: e,
            horse: e,
            hospital: e,
            host: [
                1,
                {
                    cloudaccess: t,
                    freesite: t,
                    easypanel: t,
                    fastvps: t,
                    myfast: t,
                    tempurl: t,
                    wpmudev: t,
                    jele: t,
                    mircloud: t,
                    wp2: t,
                    half: t
                }
            ],
            hosting: [
                1,
                {
                    opencraft: t
                }
            ],
            hot: e,
            hotels: e,
            hotmail: e,
            house: e,
            how: e,
            hsbc: e,
            hughes: e,
            hyatt: e,
            hyundai: e,
            ibm: e,
            icbc: e,
            ice: e,
            icu: e,
            ieee: e,
            ifm: e,
            ikano: e,
            imamat: e,
            imdb: e,
            immo: e,
            immobilien: e,
            inc: e,
            industries: e,
            infiniti: e,
            ing: e,
            ink: e,
            institute: e,
            insurance: e,
            insure: e,
            international: e,
            intuit: e,
            investments: e,
            ipiranga: e,
            irish: e,
            ismaili: e,
            ist: e,
            istanbul: e,
            itau: e,
            itv: e,
            jaguar: e,
            java: e,
            jcb: e,
            jeep: e,
            jetzt: e,
            jewelry: e,
            jio: e,
            jll: e,
            jmp: e,
            jnj: e,
            joburg: e,
            jot: e,
            joy: e,
            jpmorgan: e,
            jprs: e,
            juegos: e,
            juniper: e,
            kaufen: e,
            kddi: e,
            kerryhotels: e,
            kerryproperties: e,
            kfh: e,
            kia: e,
            kids: e,
            kim: e,
            kindle: e,
            kitchen: e,
            kiwi: e,
            koeln: e,
            komatsu: e,
            kosher: e,
            kpmg: e,
            kpn: e,
            krd: [
                1,
                {
                    co: t,
                    edu: t
                }
            ],
            kred: e,
            kuokgroup: e,
            kyoto: e,
            lacaixa: e,
            lamborghini: e,
            lamer: e,
            lancaster: e,
            land: e,
            landrover: e,
            lanxess: e,
            lasalle: e,
            lat: e,
            latino: e,
            latrobe: e,
            law: e,
            lawyer: e,
            lds: e,
            lease: e,
            leclerc: e,
            lefrak: e,
            legal: e,
            lego: e,
            lexus: e,
            lgbt: e,
            lidl: e,
            life: e,
            lifeinsurance: e,
            lifestyle: e,
            lighting: e,
            like: e,
            lilly: e,
            limited: e,
            limo: e,
            lincoln: e,
            link: [
                1,
                {
                    myfritz: t,
                    cyon: t,
                    dweb: s,
                    inbrowser: s,
                    nftstorage: X,
                    mypep: t,
                    storacha: X,
                    w3s: X
                }
            ],
            live: [
                1,
                {
                    aem: t,
                    hlx: t,
                    ewp: s
                }
            ],
            living: e,
            llc: e,
            llp: e,
            loan: e,
            loans: e,
            locker: e,
            locus: e,
            lol: [
                1,
                {
                    omg: t
                }
            ],
            london: e,
            lotte: e,
            lotto: e,
            love: e,
            lpl: e,
            lplfinancial: e,
            ltd: e,
            ltda: e,
            lundbeck: e,
            luxe: e,
            luxury: e,
            madrid: e,
            maif: e,
            maison: e,
            makeup: e,
            man: e,
            management: e,
            mango: e,
            map: e,
            market: e,
            marketing: e,
            markets: e,
            marriott: e,
            marshalls: e,
            mattel: e,
            mba: e,
            mckinsey: e,
            med: e,
            media: ee,
            meet: e,
            melbourne: e,
            meme: e,
            memorial: e,
            men: e,
            menu: [
                1,
                {
                    barsy: t,
                    barsyonline: t
                }
            ],
            merck: e,
            merckmsd: e,
            miami: e,
            microsoft: e,
            mini: e,
            mint: e,
            mit: e,
            mitsubishi: e,
            mlb: e,
            mls: e,
            mma: e,
            mobile: e,
            moda: e,
            moe: e,
            moi: e,
            mom: [
                1,
                {
                    ind: t
                }
            ],
            monash: e,
            money: e,
            monster: e,
            mormon: e,
            mortgage: e,
            moscow: e,
            moto: e,
            motorcycles: e,
            mov: e,
            movie: e,
            msd: e,
            mtn: e,
            mtr: e,
            music: e,
            nab: e,
            nagoya: e,
            navy: e,
            nba: e,
            nec: e,
            netbank: e,
            netflix: e,
            network: [
                1,
                {
                    alces: s,
                    co: t,
                    arvo: t,
                    azimuth: t,
                    tlon: t
                }
            ],
            neustar: e,
            new: e,
            news: [
                1,
                {
                    noticeable: t
                }
            ],
            next: e,
            nextdirect: e,
            nexus: e,
            nfl: e,
            ngo: e,
            nhk: e,
            nico: e,
            nike: e,
            nikon: e,
            ninja: e,
            nissan: e,
            nissay: e,
            nokia: e,
            norton: e,
            now: e,
            nowruz: e,
            nowtv: e,
            nra: e,
            nrw: e,
            ntt: e,
            nyc: e,
            obi: e,
            observer: e,
            office: e,
            okinawa: e,
            olayan: e,
            olayangroup: e,
            ollo: e,
            omega: e,
            one: [
                1,
                {
                    kin: s,
                    service: t
                }
            ],
            ong: [
                1,
                {
                    obl: t
                }
            ],
            onl: e,
            online: [
                1,
                {
                    eero: t,
                    "eero-stage": t,
                    websitebuilder: t,
                    barsy: t
                }
            ],
            ooo: e,
            open: e,
            oracle: e,
            orange: [
                1,
                {
                    tech: t
                }
            ],
            organic: e,
            origins: e,
            osaka: e,
            otsuka: e,
            ott: e,
            ovh: [
                1,
                {
                    nerdpol: t
                }
            ],
            page: [
                1,
                {
                    aem: t,
                    hlx: t,
                    hlx3: t,
                    translated: t,
                    codeberg: t,
                    heyflow: t,
                    prvcy: t,
                    rocky: t,
                    pdns: t,
                    plesk: t
                }
            ],
            panasonic: e,
            paris: e,
            pars: e,
            partners: e,
            parts: e,
            party: e,
            pay: e,
            pccw: e,
            pet: e,
            pfizer: e,
            pharmacy: e,
            phd: e,
            philips: e,
            phone: e,
            photo: e,
            photography: e,
            photos: ee,
            physio: e,
            pics: e,
            pictet: e,
            pictures: [
                1,
                {
                    1337: t
                }
            ],
            pid: e,
            pin: e,
            ping: e,
            pink: e,
            pioneer: e,
            pizza: [
                1,
                {
                    ngrok: t
                }
            ],
            place: g,
            play: e,
            playstation: e,
            plumbing: e,
            plus: e,
            pnc: e,
            pohl: e,
            poker: e,
            politie: e,
            porn: e,
            pramerica: e,
            praxi: e,
            press: e,
            prime: e,
            prod: e,
            productions: e,
            prof: e,
            progressive: e,
            promo: e,
            properties: e,
            property: e,
            protection: e,
            pru: e,
            prudential: e,
            pub: [
                1,
                {
                    id: s,
                    kin: s,
                    barsy: t
                }
            ],
            pwc: e,
            qpon: e,
            quebec: e,
            quest: e,
            racing: e,
            radio: e,
            read: e,
            realestate: e,
            realtor: e,
            realty: e,
            recipes: e,
            red: e,
            redstone: e,
            redumbrella: e,
            rehab: e,
            reise: e,
            reisen: e,
            reit: e,
            reliance: e,
            ren: e,
            rent: e,
            rentals: e,
            repair: e,
            report: e,
            republican: e,
            rest: e,
            restaurant: e,
            review: e,
            reviews: e,
            rexroth: e,
            rich: e,
            richardli: e,
            ricoh: e,
            ril: e,
            rio: e,
            rip: [
                1,
                {
                    clan: t
                }
            ],
            rocks: [
                1,
                {
                    myddns: t,
                    stackit: t,
                    "lima-city": t,
                    webspace: t
                }
            ],
            rodeo: e,
            rogers: e,
            room: e,
            rsvp: e,
            rugby: e,
            ruhr: e,
            run: [
                1,
                {
                    appwrite: s,
                    development: t,
                    ravendb: t,
                    liara: [
                        2,
                        {
                            iran: t
                        }
                    ],
                    servers: t,
                    build: s,
                    code: s,
                    database: s,
                    migration: s,
                    onporter: t,
                    repl: t,
                    stackit: t,
                    val: [
                        0,
                        {
                            express: t,
                            web: t
                        }
                    ],
                    wix: t
                }
            ],
            rwe: e,
            ryukyu: e,
            saarland: e,
            safe: e,
            safety: e,
            sakura: e,
            sale: e,
            salon: e,
            samsclub: e,
            samsung: e,
            sandvik: e,
            sandvikcoromant: e,
            sanofi: e,
            sap: e,
            sarl: e,
            sas: e,
            save: e,
            saxo: e,
            sbi: e,
            sbs: e,
            scb: e,
            schaeffler: e,
            schmidt: e,
            scholarships: e,
            school: e,
            schule: e,
            schwarz: e,
            science: e,
            scot: [
                1,
                {
                    gov: [
                        2,
                        {
                            service: t
                        }
                    ]
                }
            ],
            search: e,
            seat: e,
            secure: e,
            security: e,
            seek: e,
            select: e,
            sener: e,
            services: [
                1,
                {
                    loginline: t
                }
            ],
            seven: e,
            sew: e,
            sex: e,
            sexy: e,
            sfr: e,
            shangrila: e,
            sharp: e,
            shell: e,
            shia: e,
            shiksha: e,
            shoes: e,
            shop: [
                1,
                {
                    base: t,
                    hoplix: t,
                    barsy: t,
                    barsyonline: t,
                    shopware: t
                }
            ],
            shopping: e,
            shouji: e,
            show: e,
            silk: e,
            sina: e,
            singles: e,
            site: [
                1,
                {
                    square: t,
                    canva: v,
                    cloudera: s,
                    convex: t,
                    cyon: t,
                    fastvps: t,
                    figma: t,
                    heyflow: t,
                    jele: t,
                    jouwweb: t,
                    loginline: t,
                    barsy: t,
                    notion: t,
                    omniwe: t,
                    opensocial: t,
                    madethis: t,
                    platformsh: s,
                    tst: s,
                    byen: t,
                    srht: t,
                    novecore: t,
                    cpanel: t,
                    wpsquared: t
                }
            ],
            ski: e,
            skin: e,
            sky: e,
            skype: e,
            sling: e,
            smart: e,
            smile: e,
            sncf: e,
            soccer: e,
            social: e,
            softbank: e,
            software: e,
            sohu: e,
            solar: e,
            solutions: e,
            song: e,
            sony: e,
            soy: e,
            spa: e,
            space: [
                1,
                {
                    myfast: t,
                    heiyu: t,
                    hf: [
                        2,
                        {
                            static: t
                        }
                    ],
                    "app-ionos": t,
                    project: t,
                    uber: t,
                    xs4all: t
                }
            ],
            sport: e,
            spot: e,
            srl: e,
            stada: e,
            staples: e,
            star: e,
            statebank: e,
            statefarm: e,
            stc: e,
            stcgroup: e,
            stockholm: e,
            storage: e,
            store: [
                1,
                {
                    barsy: t,
                    sellfy: t,
                    shopware: t,
                    storebase: t
                }
            ],
            stream: e,
            studio: e,
            study: e,
            style: e,
            sucks: e,
            supplies: e,
            supply: e,
            support: [
                1,
                {
                    barsy: t
                }
            ],
            surf: e,
            surgery: e,
            suzuki: e,
            swatch: e,
            swiss: e,
            sydney: e,
            systems: [
                1,
                {
                    knightpoint: t
                }
            ],
            tab: e,
            taipei: e,
            talk: e,
            taobao: e,
            target: e,
            tatamotors: e,
            tatar: e,
            tattoo: e,
            tax: e,
            taxi: e,
            tci: e,
            tdk: e,
            team: [
                1,
                {
                    discourse: t,
                    jelastic: t
                }
            ],
            tech: [
                1,
                {
                    cleverapps: t
                }
            ],
            technology: g,
            temasek: e,
            tennis: e,
            teva: e,
            thd: e,
            theater: e,
            theatre: e,
            tiaa: e,
            tickets: e,
            tienda: e,
            tips: e,
            tires: e,
            tirol: e,
            tjmaxx: e,
            tjx: e,
            tkmaxx: e,
            tmall: e,
            today: [
                1,
                {
                    prequalifyme: t
                }
            ],
            tokyo: e,
            tools: [
                1,
                {
                    addr: Q,
                    myaddr: t
                }
            ],
            top: [
                1,
                {
                    ntdll: t,
                    wadl: s
                }
            ],
            toray: e,
            toshiba: e,
            total: e,
            tours: e,
            town: e,
            toyota: e,
            toys: e,
            trade: e,
            trading: e,
            training: e,
            travel: e,
            travelers: e,
            travelersinsurance: e,
            trust: e,
            trv: e,
            tube: e,
            tui: e,
            tunes: e,
            tushu: e,
            tvs: e,
            ubank: e,
            ubs: e,
            unicom: e,
            university: e,
            uno: e,
            uol: e,
            ups: e,
            vacations: e,
            vana: e,
            vanguard: e,
            vegas: e,
            ventures: e,
            verisign: e,
            versicherung: e,
            vet: e,
            viajes: e,
            video: e,
            vig: e,
            viking: e,
            villas: e,
            vin: e,
            vip: e,
            virgin: e,
            visa: e,
            vision: e,
            viva: e,
            vivo: e,
            vlaanderen: e,
            vodka: e,
            volvo: e,
            vote: e,
            voting: e,
            voto: e,
            voyage: e,
            wales: e,
            walmart: e,
            walter: e,
            wang: e,
            wanggou: e,
            watch: e,
            watches: e,
            weather: e,
            weatherchannel: e,
            webcam: e,
            weber: e,
            website: ee,
            wed: e,
            wedding: e,
            weibo: e,
            weir: e,
            whoswho: e,
            wien: e,
            wiki: ee,
            williamhill: e,
            win: e,
            windows: e,
            wine: e,
            winners: e,
            wme: e,
            wolterskluwer: e,
            woodside: e,
            work: e,
            works: e,
            world: e,
            wow: e,
            wtc: e,
            wtf: e,
            xbox: e,
            xerox: e,
            xihuan: e,
            xin: e,
            "xn--11b4c3d": e,
            कॉम: e,
            "xn--1ck2e1b": e,
            セール: e,
            "xn--1qqw23a": e,
            佛山: e,
            "xn--30rr7y": e,
            慈善: e,
            "xn--3bst00m": e,
            集团: e,
            "xn--3ds443g": e,
            在线: e,
            "xn--3pxu8k": e,
            点看: e,
            "xn--42c2d9a": e,
            คอม: e,
            "xn--45q11c": e,
            八卦: e,
            "xn--4gbrim": e,
            موقع: e,
            "xn--55qw42g": e,
            公益: e,
            "xn--55qx5d": e,
            公司: e,
            "xn--5su34j936bgsg": e,
            香格里拉: e,
            "xn--5tzm5g": e,
            网站: e,
            "xn--6frz82g": e,
            移动: e,
            "xn--6qq986b3xl": e,
            我爱你: e,
            "xn--80adxhks": e,
            москва: e,
            "xn--80aqecdr1a": e,
            католик: e,
            "xn--80asehdb": e,
            онлайн: e,
            "xn--80aswg": e,
            сайт: e,
            "xn--8y0a063a": e,
            联通: e,
            "xn--9dbq2a": e,
            קום: e,
            "xn--9et52u": e,
            时尚: e,
            "xn--9krt00a": e,
            微博: e,
            "xn--b4w605ferd": e,
            淡马锡: e,
            "xn--bck1b9a5dre4c": e,
            ファッション: e,
            "xn--c1avg": e,
            орг: e,
            "xn--c2br7g": e,
            नेट: e,
            "xn--cck2b3b": e,
            ストア: e,
            "xn--cckwcxetd": e,
            アマゾン: e,
            "xn--cg4bki": e,
            삼성: e,
            "xn--czr694b": e,
            商标: e,
            "xn--czrs0t": e,
            商店: e,
            "xn--czru2d": e,
            商城: e,
            "xn--d1acj3b": e,
            дети: e,
            "xn--eckvdtc9d": e,
            ポイント: e,
            "xn--efvy88h": e,
            新闻: e,
            "xn--fct429k": e,
            家電: e,
            "xn--fhbei": e,
            كوم: e,
            "xn--fiq228c5hs": e,
            中文网: e,
            "xn--fiq64b": e,
            中信: e,
            "xn--fjq720a": e,
            娱乐: e,
            "xn--flw351e": e,
            谷歌: e,
            "xn--fzys8d69uvgm": e,
            電訊盈科: e,
            "xn--g2xx48c": e,
            购物: e,
            "xn--gckr3f0f": e,
            クラウド: e,
            "xn--gk3at1e": e,
            通販: e,
            "xn--hxt814e": e,
            网店: e,
            "xn--i1b6b1a6a2e": e,
            संगठन: e,
            "xn--imr513n": e,
            餐厅: e,
            "xn--io0a7i": e,
            网络: e,
            "xn--j1aef": e,
            ком: e,
            "xn--jlq480n2rg": e,
            亚马逊: e,
            "xn--jvr189m": e,
            食品: e,
            "xn--kcrx77d1x4a": e,
            飞利浦: e,
            "xn--kput3i": e,
            手机: e,
            "xn--mgba3a3ejt": e,
            ارامكو: e,
            "xn--mgba7c0bbn0a": e,
            العليان: e,
            "xn--mgbab2bd": e,
            بازار: e,
            "xn--mgbca7dzdo": e,
            ابوظبي: e,
            "xn--mgbi4ecexp": e,
            كاثوليك: e,
            "xn--mgbt3dhd": e,
            همراه: e,
            "xn--mk1bu44c": e,
            닷컴: e,
            "xn--mxtq1m": e,
            政府: e,
            "xn--ngbc5azd": e,
            شبكة: e,
            "xn--ngbe9e0a": e,
            بيتك: e,
            "xn--ngbrx": e,
            عرب: e,
            "xn--nqv7f": e,
            机构: e,
            "xn--nqv7fs00ema": e,
            组织机构: e,
            "xn--nyqy26a": e,
            健康: e,
            "xn--otu796d": e,
            招聘: e,
            "xn--p1acf": [
                1,
                {
                    "xn--90amc": t,
                    "xn--j1aef": t,
                    "xn--j1ael8b": t,
                    "xn--h1ahn": t,
                    "xn--j1adp": t,
                    "xn--c1avg": t,
                    "xn--80aaa0cvac": t,
                    "xn--h1aliz": t,
                    "xn--90a1af": t,
                    "xn--41a": t
                }
            ],
            рус: [
                1,
                {
                    биз: t,
                    ком: t,
                    крым: t,
                    мир: t,
                    мск: t,
                    орг: t,
                    самара: t,
                    сочи: t,
                    спб: t,
                    я: t
                }
            ],
            "xn--pssy2u": e,
            大拿: e,
            "xn--q9jyb4c": e,
            みんな: e,
            "xn--qcka1pmc": e,
            グーグル: e,
            "xn--rhqv96g": e,
            世界: e,
            "xn--rovu88b": e,
            書籍: e,
            "xn--ses554g": e,
            网址: e,
            "xn--t60b56a": e,
            닷넷: e,
            "xn--tckwe": e,
            コム: e,
            "xn--tiq49xqyj": e,
            天主教: e,
            "xn--unup4y": e,
            游戏: e,
            "xn--vermgensberater-ctb": e,
            vermögensberater: e,
            "xn--vermgensberatung-pwb": e,
            vermögensberatung: e,
            "xn--vhquv": e,
            企业: e,
            "xn--vuq861b": e,
            信息: e,
            "xn--w4r85el8fhu5dnra": e,
            嘉里大酒店: e,
            "xn--w4rs40l": e,
            嘉里: e,
            "xn--xhq521b": e,
            广东: e,
            "xn--zfr164b": e,
            政务: e,
            xyz: [
                1,
                {
                    botdash: t,
                    telebit: s
                }
            ],
            yachts: e,
            yahoo: e,
            yamaxun: e,
            yandex: e,
            yodobashi: e,
            yoga: e,
            yokohama: e,
            you: e,
            youtube: e,
            yun: e,
            zappos: e,
            zara: e,
            zero: e,
            zip: e,
            zone: [
                1,
                {
                    cloud66: t,
                    triton: s,
                    stackit: t,
                    lima: t
                }
            ],
            zuerich: e
        }
    ];
}();
function u(e, t, r, n) {
    let s = null, o = t;
    for(; void 0 !== o && (0 !== (o[0] & n) && (s = {
        index: r + 1,
        isIcann: 1 === o[0],
        isPrivate: 2 === o[0]
    }), -1 !== r);){
        const t = o[1];
        o = Object.prototype.hasOwnProperty.call(t, e[r]) ? t[e[r]] : t["*"], r -= 1;
    }
    return s;
}
function d(e, t, r) {
    var n;
    if (function(e, t, r) {
        if (!t.allowPrivateDomains && e.length > 3) {
            const t = e.length - 1, n = e.charCodeAt(t), s = e.charCodeAt(t - 1), o = e.charCodeAt(t - 2), i = e.charCodeAt(t - 3);
            if (109 === n && 111 === s && 99 === o && 46 === i) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "com", !0;
            if (103 === n && 114 === s && 111 === o && 46 === i) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "org", !0;
            if (117 === n && 100 === s && 101 === o && 46 === i) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "edu", !0;
            if (118 === n && 111 === s && 103 === o && 46 === i) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "gov", !0;
            if (116 === n && 101 === s && 110 === o && 46 === i) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "net", !0;
            if (101 === n && 100 === s && 46 === o) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "de", !0;
        }
        return !1;
    }(e, t, r)) return;
    const s = e.split("."), o = (t.allowPrivateDomains ? 2 : 0) | (t.allowIcannDomains ? 1 : 0), i = u(s, c, s.length - 1, o);
    if (null !== i) return r.isIcann = i.isIcann, r.isPrivate = i.isPrivate, void (r.publicSuffix = s.slice(i.index + 1).join("."));
    const a = u(s, l, s.length - 1, o);
    if (null !== a) return r.isIcann = a.isIcann, r.isPrivate = a.isPrivate, void (r.publicSuffix = s.slice(a.index).join("."));
    r.isIcann = !1, r.isPrivate = !1, r.publicSuffix = null !== (n = s[s.length - 1]) && void 0 !== n ? n : null;
}
const p = {
    domain: null,
    domainWithoutSuffix: null,
    hostname: null,
    isIcann: null,
    isIp: null,
    isPrivate: null,
    publicSuffix: null,
    subdomain: null
};
function m(e, t = {}) {
    return a(e, 5, d, t, {
        domain: null,
        domainWithoutSuffix: null,
        hostname: null,
        isIcann: null,
        isIp: null,
        isPrivate: null,
        publicSuffix: null,
        subdomain: null
    });
}
function h(e, t = {}) {
    var r;
    return (r = p).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(e, 0, d, t, p).hostname;
}
function f(e, t = {}) {
    var r;
    return (r = p).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(e, 2, d, t, p).publicSuffix;
}
function g(e, t = {}) {
    var r;
    return (r = p).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(e, 3, d, t, p).domain;
}
function y(e, t = {}) {
    var r;
    return (r = p).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(e, 4, d, t, p).subdomain;
}
function w(e, t = {}) {
    var r;
    return (r = p).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(e, 5, d, t, p).domainWithoutSuffix;
}
