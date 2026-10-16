"use strict";
function n(t, e) {
    let r = 0, n = t.length, s = !1;
    if (!e) {
        if (t.startsWith("data:")) return null;
        for(; r < t.length && t.charCodeAt(r) <= 32;)r += 1;
        for(; n > r + 1 && t.charCodeAt(n - 1) <= 32;)n -= 1;
        if (47 === t.charCodeAt(r) && 47 === t.charCodeAt(r + 1)) r += 2;
        else {
            const e = t.indexOf(":/", r);
            if (-1 !== e) {
                const n = e - r, s = t.charCodeAt(r), i = t.charCodeAt(r + 1), o = t.charCodeAt(r + 2), a = t.charCodeAt(r + 3), u = t.charCodeAt(r + 4);
                if (5 === n && 104 === s && 116 === i && 116 === o && 112 === a && 115 === u) ;
                else if (4 === n && 104 === s && 116 === i && 116 === o && 112 === a) ;
                else if (3 === n && 119 === s && 115 === i && 115 === o) ;
                else if (2 === n && 119 === s && 115 === i) ;
                else for(let n = r; n < e; n += 1){
                    const e = 32 | t.charCodeAt(n);
                    if (!(e >= 97 && e <= 122 || e >= 48 && e <= 57 || 46 === e || 45 === e || 43 === e)) return null;
                }
                for(r = e + 2; 47 === t.charCodeAt(r);)r += 1;
            }
        }
        let e = -1, i = -1, o = -1;
        for(let a = r; a < n; a += 1){
            const r = t.charCodeAt(a);
            if (35 === r || 47 === r || 63 === r) {
                n = a;
                break;
            }
            64 === r ? e = a : 93 === r ? i = a : 58 === r ? o = a : r >= 65 && r <= 90 && (s = !0);
        }
        if (-1 !== e && e > r && e < n && (r = e + 1), 91 === t.charCodeAt(r)) return -1 !== i ? t.slice(r + 1, i).toLowerCase() : null;
        -1 !== o && o > r && o < n && (n = o);
    }
    for(; n > r + 1 && 46 === t.charCodeAt(n - 1);)n -= 1;
    const i = 0 !== r || n !== t.length ? t.slice(r, n) : t;
    return s ? i.toLowerCase() : i;
}
function s(t) {
    return t >= 97 && t <= 122 || t >= 48 && t <= 57 || t > 127;
}
function i(t) {
    if (t.length > 255) return !1;
    if (0 === t.length) return !1;
    if (!s(t.charCodeAt(0)) && 46 !== t.charCodeAt(0) && 95 !== t.charCodeAt(0)) return !1;
    let e = -1, r = -1;
    const n = t.length;
    for(let i = 0; i < n; i += 1){
        const n = t.charCodeAt(i);
        if (46 === n) {
            if (i - e > 64 || 46 === r || 45 === r || 95 === r) return !1;
            e = i;
        } else if (!s(n) && 45 !== n && 95 !== n) return !1;
        r = n;
    }
    return n - e - 1 <= 63 && 45 !== r;
}
require.r(exports), require.d(exports, {
    getDomain: ()=>g,
    getDomainWithoutSuffix: ()=>_,
    getHostname: ()=>p,
    getPublicSuffix: ()=>h,
    getSubdomain: ()=>A,
    parse: ()=>f
});
const o = function({ allowIcannDomains: t = !0, allowPrivateDomains: e = !1, detectIp: r = !0, extractHostname: n = !0, mixedInputs: s = !0, validHosts: i = null, validateHostname: o = !0 }) {
    return {
        allowIcannDomains: t,
        allowPrivateDomains: e,
        detectIp: r,
        extractHostname: n,
        mixedInputs: s,
        validHosts: i,
        validateHostname: o
    };
}({});
function a(t, e, r, s, a) {
    const u = function(t) {
        return void 0 === t ? o : function({ allowIcannDomains: t = !0, allowPrivateDomains: e = !1, detectIp: r = !0, extractHostname: n = !0, mixedInputs: s = !0, validHosts: i = null, validateHostname: o = !0 }) {
            return {
                allowIcannDomains: t,
                allowPrivateDomains: e,
                detectIp: r,
                extractHostname: n,
                mixedInputs: s,
                validHosts: i,
                validateHostname: o
            };
        }(t);
    }(s);
    return "string" != typeof t ? a : (u.extractHostname ? u.mixedInputs ? a.hostname = n(t, i(t)) : a.hostname = n(t, !1) : a.hostname = t, 0 === e || null === a.hostname || u.detectIp && (a.isIp = function(t) {
        if (t.length < 3) return !1;
        let e = t.startsWith("[") ? 1 : 0, r = t.length;
        if ("]" === t[r - 1] && (r -= 1), r - e > 39) return !1;
        let n = !1;
        for(; e < r; e += 1){
            const r = t.charCodeAt(e);
            if (58 === r) n = !0;
            else if (!(r >= 48 && r <= 57 || r >= 97 && r <= 102 || r >= 65 && r <= 90)) return !1;
        }
        return n;
    }(c = a.hostname) || function(t) {
        if (t.length < 7) return !1;
        if (t.length > 15) return !1;
        let e = 0;
        for(let r = 0; r < t.length; r += 1){
            const n = t.charCodeAt(r);
            if (46 === n) e += 1;
            else if (n < 48 || n > 57) return !1;
        }
        return 3 === e && 46 !== t.charCodeAt(0) && 46 !== t.charCodeAt(t.length - 1);
    }(c), a.isIp) ? a : u.validateHostname && u.extractHostname && !i(a.hostname) ? (a.hostname = null, a) : (r(a.hostname, u, a), 2 === e || null === a.publicSuffix ? a : (a.domain = function(t, e, r) {
        if (null !== r.validHosts) {
            const t = r.validHosts;
            for (const r of t)if (function(t, e) {
                return !!t.endsWith(e) && (t.length === e.length || "." === t[t.length - e.length - 1]);
            }(e, r)) return r;
        }
        let n = 0;
        if (e.startsWith(".")) for(; n < e.length && "." === e[n];)n += 1;
        return t.length === e.length - n ? null : function(t, e) {
            const r = t.length - e.length - 2, n = t.lastIndexOf(".", r);
            return -1 === n ? t : t.slice(n + 1);
        }(e, t);
    }(a.publicSuffix, a.hostname, u), 3 === e || null === a.domain ? a : (a.subdomain = function(t, e) {
        return e.length === t.length ? "" : t.slice(0, -e.length - 1);
    }(a.hostname, a.domain), 4 === e || (a.domainWithoutSuffix = (l = a.domain, m = a.publicSuffix, l.slice(0, -m.length - 1))), a))));
    var c, l, m;
}
const u = function() {
    const t = [
        1,
        {}
    ], e = [
        2,
        {}
    ], r = [
        0,
        {
            city: t
        }
    ];
    return [
        0,
        {
            ck: [
                0,
                {
                    www: t
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
                                            ignored: e,
                                            sub: [
                                                0,
                                                {
                                                    ignored: e
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
}(), c = function() {
    const t = [
        1,
        {}
    ], e = [
        2,
        {}
    ], r = [
        1,
        {
            com: t,
            edu: t,
            gov: t,
            net: t,
            org: t
        }
    ], n = [
        1,
        {
            com: t,
            edu: t,
            gov: t,
            mil: t,
            net: t,
            org: t
        }
    ], s = [
        0,
        {
            "*": e
        }
    ], i = [
        2,
        {
            s
        }
    ], o = [
        0,
        {
            relay: e
        }
    ], a = [
        2,
        {
            id: e
        }
    ], u = [
        1,
        {
            gov: t
        }
    ], c = [
        0,
        {
            "transfer-webapp": e
        }
    ], l = [
        0,
        {
            notebook: e,
            studio: e
        }
    ], m = [
        0,
        {
            labeling: e,
            notebook: e,
            studio: e
        }
    ], d = [
        0,
        {
            notebook: e
        }
    ], f = [
        0,
        {
            labeling: e,
            notebook: e,
            "notebook-fips": e,
            studio: e
        }
    ], p = [
        0,
        {
            notebook: e,
            "notebook-fips": e,
            studio: e,
            "studio-fips": e
        }
    ], h = [
        0,
        {
            "*": t
        }
    ], g = [
        1,
        {
            co: e
        }
    ], A = [
        0,
        {
            objects: e
        }
    ], _ = [
        2,
        {
            nodes: e
        }
    ], y = [
        0,
        {
            my: s
        }
    ], w = [
        0,
        {
            s3: e,
            "s3-accesspoint": e,
            "s3-website": e
        }
    ], S = [
        0,
        {
            s3: e,
            "s3-accesspoint": e
        }
    ], J = [
        0,
        {
            direct: e
        }
    ], B = [
        0,
        {
            "webview-assets": e
        }
    ], E = [
        0,
        {
            vfs: e,
            "webview-assets": e
        }
    ], I = [
        0,
        {
            "execute-api": e,
            "emrappui-prod": e,
            "emrnotebooks-prod": e,
            "emrstudio-prod": e,
            dualstack: w,
            s3: e,
            "s3-accesspoint": e,
            "s3-object-lambda": e,
            "s3-website": e,
            "aws-cloud9": B,
            cloud9: E
        }
    ], C = [
        0,
        {
            "execute-api": e,
            "emrappui-prod": e,
            "emrnotebooks-prod": e,
            "emrstudio-prod": e,
            dualstack: S,
            s3: e,
            "s3-accesspoint": e,
            "s3-object-lambda": e,
            "s3-website": e,
            "aws-cloud9": B,
            cloud9: E
        }
    ], b = [
        0,
        {
            "execute-api": e,
            "emrappui-prod": e,
            "emrnotebooks-prod": e,
            "emrstudio-prod": e,
            dualstack: w,
            s3: e,
            "s3-accesspoint": e,
            "s3-object-lambda": e,
            "s3-website": e,
            "analytics-gateway": e,
            "aws-cloud9": B,
            cloud9: E
        }
    ], k = [
        0,
        {
            "execute-api": e,
            "emrappui-prod": e,
            "emrnotebooks-prod": e,
            "emrstudio-prod": e,
            dualstack: w,
            s3: e,
            "s3-accesspoint": e,
            "s3-object-lambda": e,
            "s3-website": e
        }
    ], v = [
        0,
        {
            s3: e,
            "s3-accesspoint": e,
            "s3-accesspoint-fips": e,
            "s3-fips": e,
            "s3-website": e
        }
    ], q = [
        0,
        {
            "execute-api": e,
            "emrappui-prod": e,
            "emrnotebooks-prod": e,
            "emrstudio-prod": e,
            dualstack: v,
            s3: e,
            "s3-accesspoint": e,
            "s3-accesspoint-fips": e,
            "s3-fips": e,
            "s3-object-lambda": e,
            "s3-website": e,
            "aws-cloud9": B,
            cloud9: E
        }
    ], R = [
        0,
        {
            "execute-api": e,
            "emrappui-prod": e,
            "emrnotebooks-prod": e,
            "emrstudio-prod": e,
            dualstack: v,
            s3: e,
            "s3-accesspoint": e,
            "s3-accesspoint-fips": e,
            "s3-deprecated": e,
            "s3-fips": e,
            "s3-object-lambda": e,
            "s3-website": e,
            "analytics-gateway": e,
            "aws-cloud9": B,
            cloud9: E
        }
    ], P = [
        0,
        {
            "execute-api": e,
            "emrappui-prod": e,
            "emrnotebooks-prod": e,
            "emrstudio-prod": e,
            dualstack: [
                0,
                {
                    s3: e,
                    "s3-accesspoint": e,
                    "s3-accesspoint-fips": e,
                    "s3-fips": e
                }
            ],
            s3: e,
            "s3-accesspoint": e,
            "s3-accesspoint-fips": e,
            "s3-fips": e,
            "s3-object-lambda": e,
            "s3-website": e
        }
    ], T = [
        0,
        {
            auth: e
        }
    ], x = [
        0,
        {
            auth: e,
            "auth-fips": e
        }
    ], N = [
        0,
        {
            "auth-fips": e
        }
    ], D = [
        0,
        {
            apps: e
        }
    ], U = [
        0,
        {
            paas: e
        }
    ], Q = [
        2,
        {
            eu: e
        }
    ], M = [
        0,
        {
            app: e
        }
    ], O = [
        0,
        {
            site: e
        }
    ], F = [
        1,
        {
            com: t,
            edu: t,
            net: t,
            org: t
        }
    ], L = [
        0,
        {
            j: e
        }
    ], $ = [
        0,
        {
            dyn: e
        }
    ], G = [
        1,
        {
            co: t,
            com: t,
            edu: t,
            gov: t,
            net: t,
            org: t
        }
    ], H = [
        0,
        {
            p: e
        }
    ], K = [
        0,
        {
            user: e
        }
    ], V = [
        0,
        {
            shop: e
        }
    ], z = [
        0,
        {
            cdn: e
        }
    ], W = [
        0,
        {
            cust: e,
            reservd: e
        }
    ], Y = [
        0,
        {
            cust: e
        }
    ], j = [
        0,
        {
            s3: e
        }
    ], X = [
        1,
        {
            biz: t,
            com: t,
            edu: t,
            gov: t,
            info: t,
            net: t,
            org: t
        }
    ], Z = [
        0,
        {
            ipfs: e
        }
    ], tt = [
        1,
        {
            framer: e
        }
    ], et = [
        0,
        {
            forgot: e
        }
    ], rt = [
        1,
        {
            gs: t
        }
    ], nt = [
        0,
        {
            nes: t
        }
    ], st = [
        1,
        {
            k12: t,
            cc: t,
            lib: t
        }
    ], it = [
        1,
        {
            cc: t,
            lib: t
        }
    ];
    return [
        0,
        {
            ac: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    drr: e,
                    feedback: e,
                    forms: e
                }
            ],
            ad: t,
            ae: [
                1,
                {
                    ac: t,
                    co: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    sch: t
                }
            ],
            aero: [
                1,
                {
                    airline: t,
                    airport: t,
                    "accident-investigation": t,
                    "accident-prevention": t,
                    aerobatic: t,
                    aeroclub: t,
                    aerodrome: t,
                    agents: t,
                    "air-surveillance": t,
                    "air-traffic-control": t,
                    aircraft: t,
                    airtraffic: t,
                    ambulance: t,
                    association: t,
                    author: t,
                    ballooning: t,
                    broker: t,
                    caa: t,
                    cargo: t,
                    catering: t,
                    certification: t,
                    championship: t,
                    charter: t,
                    civilaviation: t,
                    club: t,
                    conference: t,
                    consultant: t,
                    consulting: t,
                    control: t,
                    council: t,
                    crew: t,
                    design: t,
                    dgca: t,
                    educator: t,
                    emergency: t,
                    engine: t,
                    engineer: t,
                    entertainment: t,
                    equipment: t,
                    exchange: t,
                    express: t,
                    federation: t,
                    flight: t,
                    freight: t,
                    fuel: t,
                    gliding: t,
                    government: t,
                    groundhandling: t,
                    group: t,
                    hanggliding: t,
                    homebuilt: t,
                    insurance: t,
                    journal: t,
                    journalist: t,
                    leasing: t,
                    logistics: t,
                    magazine: t,
                    maintenance: t,
                    marketplace: t,
                    media: t,
                    microlight: t,
                    modelling: t,
                    navigation: t,
                    parachuting: t,
                    paragliding: t,
                    "passenger-association": t,
                    pilot: t,
                    press: t,
                    production: t,
                    recreation: t,
                    repbody: t,
                    res: t,
                    research: t,
                    rotorcraft: t,
                    safety: t,
                    scientist: t,
                    services: t,
                    show: t,
                    skydiving: t,
                    software: t,
                    student: t,
                    taxi: t,
                    trader: t,
                    trading: t,
                    trainer: t,
                    union: t,
                    workinggroup: t,
                    works: t
                }
            ],
            af: r,
            ag: [
                1,
                {
                    co: t,
                    com: t,
                    net: t,
                    nom: t,
                    org: t,
                    obj: e
                }
            ],
            ai: [
                1,
                {
                    com: t,
                    net: t,
                    off: t,
                    org: t,
                    uwu: e,
                    framer: e
                }
            ],
            al: n,
            am: [
                1,
                {
                    co: t,
                    com: t,
                    commune: t,
                    net: t,
                    org: t,
                    radio: e
                }
            ],
            ao: [
                1,
                {
                    co: t,
                    ed: t,
                    edu: t,
                    gov: t,
                    gv: t,
                    it: t,
                    og: t,
                    org: t,
                    pb: t
                }
            ],
            aq: t,
            ar: [
                1,
                {
                    bet: t,
                    com: t,
                    coop: t,
                    edu: t,
                    gob: t,
                    gov: t,
                    int: t,
                    mil: t,
                    musica: t,
                    mutual: t,
                    net: t,
                    org: t,
                    seg: t,
                    senasa: t,
                    tur: t
                }
            ],
            arpa: [
                1,
                {
                    e164: t,
                    home: t,
                    "in-addr": t,
                    ip6: t,
                    iris: t,
                    uri: t,
                    urn: t
                }
            ],
            as: u,
            asia: [
                1,
                {
                    cloudns: e,
                    daemon: e,
                    dix: e
                }
            ],
            at: [
                1,
                {
                    ac: [
                        1,
                        {
                            sth: t
                        }
                    ],
                    co: t,
                    gv: t,
                    or: t,
                    funkfeuer: [
                        0,
                        {
                            wien: e
                        }
                    ],
                    futurecms: [
                        0,
                        {
                            "*": e,
                            ex: s,
                            in: s
                        }
                    ],
                    futurehosting: e,
                    futuremailing: e,
                    ortsinfo: [
                        0,
                        {
                            ex: s,
                            kunden: s
                        }
                    ],
                    biz: e,
                    info: e,
                    "123webseite": e,
                    priv: e,
                    myspreadshop: e,
                    "12hp": e,
                    "2ix": e,
                    "4lima": e,
                    "lima-city": e
                }
            ],
            au: [
                1,
                {
                    asn: t,
                    com: [
                        1,
                        {
                            cloudlets: [
                                0,
                                {
                                    mel: e
                                }
                            ],
                            myspreadshop: e
                        }
                    ],
                    edu: [
                        1,
                        {
                            act: t,
                            catholic: t,
                            nsw: [
                                1,
                                {
                                    schools: t
                                }
                            ],
                            nt: t,
                            qld: t,
                            sa: t,
                            tas: t,
                            vic: t,
                            wa: t
                        }
                    ],
                    gov: [
                        1,
                        {
                            qld: t,
                            sa: t,
                            tas: t,
                            vic: t,
                            wa: t
                        }
                    ],
                    id: t,
                    net: t,
                    org: t,
                    conf: t,
                    oz: t,
                    act: t,
                    nsw: t,
                    nt: t,
                    qld: t,
                    sa: t,
                    tas: t,
                    vic: t,
                    wa: t
                }
            ],
            aw: [
                1,
                {
                    com: t
                }
            ],
            ax: t,
            az: [
                1,
                {
                    biz: t,
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    info: t,
                    int: t,
                    mil: t,
                    name: t,
                    net: t,
                    org: t,
                    pp: t,
                    pro: t
                }
            ],
            ba: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    rs: e
                }
            ],
            bb: [
                1,
                {
                    biz: t,
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    info: t,
                    net: t,
                    org: t,
                    store: t,
                    tv: t
                }
            ],
            bd: h,
            be: [
                1,
                {
                    ac: t,
                    cloudns: e,
                    webhosting: e,
                    interhostsolutions: [
                        0,
                        {
                            cloud: e
                        }
                    ],
                    kuleuven: [
                        0,
                        {
                            ezproxy: e
                        }
                    ],
                    "123website": e,
                    myspreadshop: e,
                    transurl: s
                }
            ],
            bf: u,
            bg: [
                1,
                {
                    0: t,
                    1: t,
                    2: t,
                    3: t,
                    4: t,
                    5: t,
                    6: t,
                    7: t,
                    8: t,
                    9: t,
                    a: t,
                    b: t,
                    c: t,
                    d: t,
                    e: t,
                    f: t,
                    g: t,
                    h: t,
                    i: t,
                    j: t,
                    k: t,
                    l: t,
                    m: t,
                    n: t,
                    o: t,
                    p: t,
                    q: t,
                    r: t,
                    s: t,
                    t,
                    u: t,
                    v: t,
                    w: t,
                    x: t,
                    y: t,
                    z: t,
                    barsy: e
                }
            ],
            bh: r,
            bi: [
                1,
                {
                    co: t,
                    com: t,
                    edu: t,
                    or: t,
                    org: t
                }
            ],
            biz: [
                1,
                {
                    activetrail: e,
                    "cloud-ip": e,
                    cloudns: e,
                    jozi: e,
                    dyndns: e,
                    "for-better": e,
                    "for-more": e,
                    "for-some": e,
                    "for-the": e,
                    selfip: e,
                    webhop: e,
                    orx: e,
                    mmafan: e,
                    myftp: e,
                    "no-ip": e,
                    dscloud: e
                }
            ],
            bj: [
                1,
                {
                    africa: t,
                    agro: t,
                    architectes: t,
                    assur: t,
                    avocats: t,
                    co: t,
                    com: t,
                    eco: t,
                    econo: t,
                    edu: t,
                    info: t,
                    loisirs: t,
                    money: t,
                    net: t,
                    org: t,
                    ote: t,
                    restaurant: t,
                    resto: t,
                    tourism: t,
                    univ: t
                }
            ],
            bm: r,
            bn: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    co: e
                }
            ],
            bo: [
                1,
                {
                    com: t,
                    edu: t,
                    gob: t,
                    int: t,
                    mil: t,
                    net: t,
                    org: t,
                    tv: t,
                    web: t,
                    academia: t,
                    agro: t,
                    arte: t,
                    blog: t,
                    bolivia: t,
                    ciencia: t,
                    cooperativa: t,
                    democracia: t,
                    deporte: t,
                    ecologia: t,
                    economia: t,
                    empresa: t,
                    indigena: t,
                    industria: t,
                    info: t,
                    medicina: t,
                    movimiento: t,
                    musica: t,
                    natural: t,
                    nombre: t,
                    noticias: t,
                    patria: t,
                    plurinacional: t,
                    politica: t,
                    profesional: t,
                    pueblo: t,
                    revista: t,
                    salud: t,
                    tecnologia: t,
                    tksat: t,
                    transporte: t,
                    wiki: t
                }
            ],
            br: [
                1,
                {
                    "9guacu": t,
                    abc: t,
                    adm: t,
                    adv: t,
                    agr: t,
                    aju: t,
                    am: t,
                    anani: t,
                    aparecida: t,
                    app: t,
                    arq: t,
                    art: t,
                    ato: t,
                    b: t,
                    barueri: t,
                    belem: t,
                    bet: t,
                    bhz: t,
                    bib: t,
                    bio: t,
                    blog: t,
                    bmd: t,
                    boavista: t,
                    bsb: t,
                    campinagrande: t,
                    campinas: t,
                    caxias: t,
                    cim: t,
                    cng: t,
                    cnt: t,
                    com: [
                        1,
                        {
                            simplesite: e
                        }
                    ],
                    contagem: t,
                    coop: t,
                    coz: t,
                    cri: t,
                    cuiaba: t,
                    curitiba: t,
                    def: t,
                    des: t,
                    det: t,
                    dev: t,
                    ecn: t,
                    eco: t,
                    edu: t,
                    emp: t,
                    enf: t,
                    eng: t,
                    esp: t,
                    etc: t,
                    eti: t,
                    far: t,
                    feira: t,
                    flog: t,
                    floripa: t,
                    fm: t,
                    fnd: t,
                    fortal: t,
                    fot: t,
                    foz: t,
                    fst: t,
                    g12: t,
                    geo: t,
                    ggf: t,
                    goiania: t,
                    gov: [
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
                    gru: t,
                    imb: t,
                    ind: t,
                    inf: t,
                    jab: t,
                    jampa: t,
                    jdf: t,
                    joinville: t,
                    jor: t,
                    jus: t,
                    leg: [
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
                    leilao: t,
                    lel: t,
                    log: t,
                    londrina: t,
                    macapa: t,
                    maceio: t,
                    manaus: t,
                    maringa: t,
                    mat: t,
                    med: t,
                    mil: t,
                    morena: t,
                    mp: t,
                    mus: t,
                    natal: t,
                    net: t,
                    niteroi: t,
                    nom: h,
                    not: t,
                    ntr: t,
                    odo: t,
                    ong: t,
                    org: t,
                    osasco: t,
                    palmas: t,
                    poa: t,
                    ppg: t,
                    pro: t,
                    psc: t,
                    psi: t,
                    pvh: t,
                    qsl: t,
                    radio: t,
                    rec: t,
                    recife: t,
                    rep: t,
                    ribeirao: t,
                    rio: t,
                    riobranco: t,
                    riopreto: t,
                    salvador: t,
                    sampa: t,
                    santamaria: t,
                    santoandre: t,
                    saobernardo: t,
                    saogonca: t,
                    seg: t,
                    sjc: t,
                    slg: t,
                    slz: t,
                    sorocaba: t,
                    srv: t,
                    taxi: t,
                    tc: t,
                    tec: t,
                    teo: t,
                    the: t,
                    tmp: t,
                    trd: t,
                    tur: t,
                    tv: t,
                    udi: t,
                    vet: t,
                    vix: t,
                    vlog: t,
                    wiki: t,
                    zlg: t
                }
            ],
            bs: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    we: e
                }
            ],
            bt: r,
            bv: t,
            bw: [
                1,
                {
                    ac: t,
                    co: t,
                    gov: t,
                    net: t,
                    org: t
                }
            ],
            by: [
                1,
                {
                    gov: t,
                    mil: t,
                    com: t,
                    of: t,
                    mediatech: e
                }
            ],
            bz: [
                1,
                {
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    za: e,
                    mydns: e,
                    gsj: e
                }
            ],
            ca: [
                1,
                {
                    ab: t,
                    bc: t,
                    mb: t,
                    nb: t,
                    nf: t,
                    nl: t,
                    ns: t,
                    nt: t,
                    nu: t,
                    on: t,
                    pe: t,
                    qc: t,
                    sk: t,
                    yk: t,
                    gc: t,
                    barsy: e,
                    awdev: s,
                    co: e,
                    "no-ip": e,
                    myspreadshop: e,
                    box: e
                }
            ],
            cat: t,
            cc: [
                1,
                {
                    cleverapps: e,
                    cloudns: e,
                    ftpaccess: e,
                    "game-server": e,
                    myphotos: e,
                    scrapping: e,
                    twmail: e,
                    csx: e,
                    fantasyleague: e,
                    spawn: [
                        0,
                        {
                            instances: e
                        }
                    ]
                }
            ],
            cd: u,
            cf: t,
            cg: t,
            ch: [
                1,
                {
                    square7: e,
                    cloudns: e,
                    cloudscale: [
                        0,
                        {
                            cust: e,
                            lpg: A,
                            rma: A
                        }
                    ],
                    flow: [
                        0,
                        {
                            ae: [
                                0,
                                {
                                    alp1: e
                                }
                            ],
                            appengine: e
                        }
                    ],
                    "linkyard-cloud": e,
                    gotdns: e,
                    dnsking: e,
                    "123website": e,
                    myspreadshop: e,
                    firenet: [
                        0,
                        {
                            "*": e,
                            svc: s
                        }
                    ],
                    "12hp": e,
                    "2ix": e,
                    "4lima": e,
                    "lima-city": e
                }
            ],
            ci: [
                1,
                {
                    ac: t,
                    "xn--aroport-bya": t,
                    aéroport: t,
                    asso: t,
                    co: t,
                    com: t,
                    ed: t,
                    edu: t,
                    go: t,
                    gouv: t,
                    int: t,
                    net: t,
                    or: t,
                    org: t
                }
            ],
            ck: h,
            cl: [
                1,
                {
                    co: t,
                    gob: t,
                    gov: t,
                    mil: t,
                    cloudns: e
                }
            ],
            cm: [
                1,
                {
                    co: t,
                    com: t,
                    gov: t,
                    net: t
                }
            ],
            cn: [
                1,
                {
                    ac: t,
                    com: [
                        1,
                        {
                            amazonaws: [
                                0,
                                {
                                    "cn-north-1": [
                                        0,
                                        {
                                            "execute-api": e,
                                            "emrappui-prod": e,
                                            "emrnotebooks-prod": e,
                                            "emrstudio-prod": e,
                                            dualstack: w,
                                            s3: e,
                                            "s3-accesspoint": e,
                                            "s3-deprecated": e,
                                            "s3-object-lambda": e,
                                            "s3-website": e
                                        }
                                    ],
                                    "cn-northwest-1": [
                                        0,
                                        {
                                            "execute-api": e,
                                            "emrappui-prod": e,
                                            "emrnotebooks-prod": e,
                                            "emrstudio-prod": e,
                                            dualstack: S,
                                            s3: e,
                                            "s3-accesspoint": e,
                                            "s3-object-lambda": e,
                                            "s3-website": e
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
                                            "cn-north-1": e,
                                            "cn-northwest-1": e
                                        }
                                    ],
                                    elb: s
                                }
                            ],
                            sagemaker: [
                                0,
                                {
                                    "cn-north-1": l,
                                    "cn-northwest-1": l
                                }
                            ]
                        }
                    ],
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    "xn--55qx5d": t,
                    公司: t,
                    "xn--od0alg": t,
                    網絡: t,
                    "xn--io0a7i": t,
                    网络: t,
                    ah: t,
                    bj: t,
                    cq: t,
                    fj: t,
                    gd: t,
                    gs: t,
                    gx: t,
                    gz: t,
                    ha: t,
                    hb: t,
                    he: t,
                    hi: t,
                    hk: t,
                    hl: t,
                    hn: t,
                    jl: t,
                    js: t,
                    jx: t,
                    ln: t,
                    mo: t,
                    nm: t,
                    nx: t,
                    qh: t,
                    sc: t,
                    sd: t,
                    sh: [
                        1,
                        {
                            as: e
                        }
                    ],
                    sn: t,
                    sx: t,
                    tj: t,
                    tw: t,
                    xj: t,
                    xz: t,
                    yn: t,
                    zj: t,
                    "canva-apps": e,
                    canvasite: y,
                    myqnapcloud: e,
                    quickconnect: J
                }
            ],
            co: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    nom: t,
                    org: t,
                    carrd: e,
                    crd: e,
                    otap: s,
                    leadpages: e,
                    lpages: e,
                    mypi: e,
                    xmit: s,
                    firewalledreplit: a,
                    repl: a,
                    supabase: e
                }
            ],
            com: [
                1,
                {
                    a2hosted: e,
                    cpserver: e,
                    adobeaemcloud: [
                        2,
                        {
                            dev: s
                        }
                    ],
                    africa: e,
                    airkitapps: e,
                    "airkitapps-au": e,
                    aivencloud: e,
                    alibabacloudcs: e,
                    kasserver: e,
                    amazonaws: [
                        0,
                        {
                            "af-south-1": I,
                            "ap-east-1": C,
                            "ap-northeast-1": b,
                            "ap-northeast-2": b,
                            "ap-northeast-3": I,
                            "ap-south-1": b,
                            "ap-south-2": k,
                            "ap-southeast-1": b,
                            "ap-southeast-2": b,
                            "ap-southeast-3": k,
                            "ap-southeast-4": k,
                            "ap-southeast-5": [
                                0,
                                {
                                    "execute-api": e,
                                    dualstack: w,
                                    s3: e,
                                    "s3-accesspoint": e,
                                    "s3-deprecated": e,
                                    "s3-object-lambda": e,
                                    "s3-website": e
                                }
                            ],
                            "ca-central-1": q,
                            "ca-west-1": [
                                0,
                                {
                                    "execute-api": e,
                                    "emrappui-prod": e,
                                    "emrnotebooks-prod": e,
                                    "emrstudio-prod": e,
                                    dualstack: v,
                                    s3: e,
                                    "s3-accesspoint": e,
                                    "s3-accesspoint-fips": e,
                                    "s3-fips": e,
                                    "s3-object-lambda": e,
                                    "s3-website": e
                                }
                            ],
                            "eu-central-1": b,
                            "eu-central-2": k,
                            "eu-north-1": C,
                            "eu-south-1": I,
                            "eu-south-2": k,
                            "eu-west-1": [
                                0,
                                {
                                    "execute-api": e,
                                    "emrappui-prod": e,
                                    "emrnotebooks-prod": e,
                                    "emrstudio-prod": e,
                                    dualstack: w,
                                    s3: e,
                                    "s3-accesspoint": e,
                                    "s3-deprecated": e,
                                    "s3-object-lambda": e,
                                    "s3-website": e,
                                    "analytics-gateway": e,
                                    "aws-cloud9": B,
                                    cloud9: E
                                }
                            ],
                            "eu-west-2": C,
                            "eu-west-3": I,
                            "il-central-1": [
                                0,
                                {
                                    "execute-api": e,
                                    "emrappui-prod": e,
                                    "emrnotebooks-prod": e,
                                    "emrstudio-prod": e,
                                    dualstack: w,
                                    s3: e,
                                    "s3-accesspoint": e,
                                    "s3-object-lambda": e,
                                    "s3-website": e,
                                    "aws-cloud9": B,
                                    cloud9: [
                                        0,
                                        {
                                            vfs: e
                                        }
                                    ]
                                }
                            ],
                            "me-central-1": k,
                            "me-south-1": C,
                            "sa-east-1": I,
                            "us-east-1": [
                                2,
                                {
                                    "execute-api": e,
                                    "emrappui-prod": e,
                                    "emrnotebooks-prod": e,
                                    "emrstudio-prod": e,
                                    dualstack: v,
                                    s3: e,
                                    "s3-accesspoint": e,
                                    "s3-accesspoint-fips": e,
                                    "s3-deprecated": e,
                                    "s3-fips": e,
                                    "s3-object-lambda": e,
                                    "s3-website": e,
                                    "analytics-gateway": e,
                                    "aws-cloud9": B,
                                    cloud9: E
                                }
                            ],
                            "us-east-2": R,
                            "us-gov-east-1": P,
                            "us-gov-west-1": P,
                            "us-west-1": q,
                            "us-west-2": R,
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
                            s3: e,
                            "s3-1": e,
                            "s3-ap-east-1": e,
                            "s3-ap-northeast-1": e,
                            "s3-ap-northeast-2": e,
                            "s3-ap-northeast-3": e,
                            "s3-ap-south-1": e,
                            "s3-ap-southeast-1": e,
                            "s3-ap-southeast-2": e,
                            "s3-ca-central-1": e,
                            "s3-eu-central-1": e,
                            "s3-eu-north-1": e,
                            "s3-eu-west-1": e,
                            "s3-eu-west-2": e,
                            "s3-eu-west-3": e,
                            "s3-external-1": e,
                            "s3-fips-us-gov-east-1": e,
                            "s3-fips-us-gov-west-1": e,
                            "s3-global": [
                                0,
                                {
                                    accesspoint: [
                                        0,
                                        {
                                            mrap: e
                                        }
                                    ]
                                }
                            ],
                            "s3-me-south-1": e,
                            "s3-sa-east-1": e,
                            "s3-us-east-2": e,
                            "s3-us-gov-east-1": e,
                            "s3-us-gov-west-1": e,
                            "s3-us-west-1": e,
                            "s3-us-west-2": e,
                            "s3-website-ap-northeast-1": e,
                            "s3-website-ap-southeast-1": e,
                            "s3-website-ap-southeast-2": e,
                            "s3-website-eu-west-1": e,
                            "s3-website-sa-east-1": e,
                            "s3-website-us-east-1": e,
                            "s3-website-us-gov-west-1": e,
                            "s3-website-us-west-1": e,
                            "s3-website-us-west-2": e,
                            elb: s
                        }
                    ],
                    amazoncognito: [
                        0,
                        {
                            "af-south-1": T,
                            "ap-east-1": T,
                            "ap-northeast-1": T,
                            "ap-northeast-2": T,
                            "ap-northeast-3": T,
                            "ap-south-1": T,
                            "ap-south-2": T,
                            "ap-southeast-1": T,
                            "ap-southeast-2": T,
                            "ap-southeast-3": T,
                            "ap-southeast-4": T,
                            "ap-southeast-5": T,
                            "ca-central-1": T,
                            "ca-west-1": T,
                            "eu-central-1": T,
                            "eu-central-2": T,
                            "eu-north-1": T,
                            "eu-south-1": T,
                            "eu-south-2": T,
                            "eu-west-1": T,
                            "eu-west-2": T,
                            "eu-west-3": T,
                            "il-central-1": T,
                            "me-central-1": T,
                            "me-south-1": T,
                            "sa-east-1": T,
                            "us-east-1": x,
                            "us-east-2": x,
                            "us-gov-east-1": N,
                            "us-gov-west-1": N,
                            "us-west-1": x,
                            "us-west-2": x
                        }
                    ],
                    amplifyapp: e,
                    awsapprunner: s,
                    awsapps: e,
                    elasticbeanstalk: [
                        2,
                        {
                            "af-south-1": e,
                            "ap-east-1": e,
                            "ap-northeast-1": e,
                            "ap-northeast-2": e,
                            "ap-northeast-3": e,
                            "ap-south-1": e,
                            "ap-southeast-1": e,
                            "ap-southeast-2": e,
                            "ap-southeast-3": e,
                            "ca-central-1": e,
                            "eu-central-1": e,
                            "eu-north-1": e,
                            "eu-south-1": e,
                            "eu-west-1": e,
                            "eu-west-2": e,
                            "eu-west-3": e,
                            "il-central-1": e,
                            "me-south-1": e,
                            "sa-east-1": e,
                            "us-east-1": e,
                            "us-east-2": e,
                            "us-gov-east-1": e,
                            "us-gov-west-1": e,
                            "us-west-1": e,
                            "us-west-2": e
                        }
                    ],
                    awsglobalaccelerator: e,
                    siiites: e,
                    appspacehosted: e,
                    appspaceusercontent: e,
                    "on-aptible": e,
                    myasustor: e,
                    "balena-devices": e,
                    boutir: e,
                    bplaced: e,
                    cafjs: e,
                    "canva-apps": e,
                    "cdn77-storage": e,
                    br: e,
                    cn: e,
                    de: e,
                    eu: e,
                    jpn: e,
                    mex: e,
                    ru: e,
                    sa: e,
                    uk: e,
                    us: e,
                    za: e,
                    "clever-cloud": [
                        0,
                        {
                            services: s
                        }
                    ],
                    dnsabr: e,
                    "ip-ddns": e,
                    jdevcloud: e,
                    wpdevcloud: e,
                    "cf-ipfs": e,
                    "cloudflare-ipfs": e,
                    trycloudflare: e,
                    co: e,
                    devinapps: s,
                    builtwithdark: e,
                    datadetect: [
                        0,
                        {
                            demo: e,
                            instance: e
                        }
                    ],
                    dattolocal: e,
                    dattorelay: e,
                    dattoweb: e,
                    mydatto: e,
                    digitaloceanspaces: s,
                    discordsays: e,
                    discordsez: e,
                    drayddns: e,
                    dreamhosters: e,
                    durumis: e,
                    mydrobo: e,
                    blogdns: e,
                    cechire: e,
                    dnsalias: e,
                    dnsdojo: e,
                    doesntexist: e,
                    dontexist: e,
                    doomdns: e,
                    "dyn-o-saur": e,
                    dynalias: e,
                    "dyndns-at-home": e,
                    "dyndns-at-work": e,
                    "dyndns-blog": e,
                    "dyndns-free": e,
                    "dyndns-home": e,
                    "dyndns-ip": e,
                    "dyndns-mail": e,
                    "dyndns-office": e,
                    "dyndns-pics": e,
                    "dyndns-remote": e,
                    "dyndns-server": e,
                    "dyndns-web": e,
                    "dyndns-wiki": e,
                    "dyndns-work": e,
                    "est-a-la-maison": e,
                    "est-a-la-masion": e,
                    "est-le-patron": e,
                    "est-mon-blogueur": e,
                    "from-ak": e,
                    "from-al": e,
                    "from-ar": e,
                    "from-ca": e,
                    "from-ct": e,
                    "from-dc": e,
                    "from-de": e,
                    "from-fl": e,
                    "from-ga": e,
                    "from-hi": e,
                    "from-ia": e,
                    "from-id": e,
                    "from-il": e,
                    "from-in": e,
                    "from-ks": e,
                    "from-ky": e,
                    "from-ma": e,
                    "from-md": e,
                    "from-mi": e,
                    "from-mn": e,
                    "from-mo": e,
                    "from-ms": e,
                    "from-mt": e,
                    "from-nc": e,
                    "from-nd": e,
                    "from-ne": e,
                    "from-nh": e,
                    "from-nj": e,
                    "from-nm": e,
                    "from-nv": e,
                    "from-oh": e,
                    "from-ok": e,
                    "from-or": e,
                    "from-pa": e,
                    "from-pr": e,
                    "from-ri": e,
                    "from-sc": e,
                    "from-sd": e,
                    "from-tn": e,
                    "from-tx": e,
                    "from-ut": e,
                    "from-va": e,
                    "from-vt": e,
                    "from-wa": e,
                    "from-wi": e,
                    "from-wv": e,
                    "from-wy": e,
                    getmyip: e,
                    gotdns: e,
                    "hobby-site": e,
                    homelinux: e,
                    homeunix: e,
                    iamallama: e,
                    "is-a-anarchist": e,
                    "is-a-blogger": e,
                    "is-a-bookkeeper": e,
                    "is-a-bulls-fan": e,
                    "is-a-caterer": e,
                    "is-a-chef": e,
                    "is-a-conservative": e,
                    "is-a-cpa": e,
                    "is-a-cubicle-slave": e,
                    "is-a-democrat": e,
                    "is-a-designer": e,
                    "is-a-doctor": e,
                    "is-a-financialadvisor": e,
                    "is-a-geek": e,
                    "is-a-green": e,
                    "is-a-guru": e,
                    "is-a-hard-worker": e,
                    "is-a-hunter": e,
                    "is-a-landscaper": e,
                    "is-a-lawyer": e,
                    "is-a-liberal": e,
                    "is-a-libertarian": e,
                    "is-a-llama": e,
                    "is-a-musician": e,
                    "is-a-nascarfan": e,
                    "is-a-nurse": e,
                    "is-a-painter": e,
                    "is-a-personaltrainer": e,
                    "is-a-photographer": e,
                    "is-a-player": e,
                    "is-a-republican": e,
                    "is-a-rockstar": e,
                    "is-a-socialist": e,
                    "is-a-student": e,
                    "is-a-teacher": e,
                    "is-a-techie": e,
                    "is-a-therapist": e,
                    "is-an-accountant": e,
                    "is-an-actor": e,
                    "is-an-actress": e,
                    "is-an-anarchist": e,
                    "is-an-artist": e,
                    "is-an-engineer": e,
                    "is-an-entertainer": e,
                    "is-certified": e,
                    "is-gone": e,
                    "is-into-anime": e,
                    "is-into-cars": e,
                    "is-into-cartoons": e,
                    "is-into-games": e,
                    "is-leet": e,
                    "is-not-certified": e,
                    "is-slick": e,
                    "is-uberleet": e,
                    "is-with-theband": e,
                    "isa-geek": e,
                    "isa-hockeynut": e,
                    issmarterthanyou: e,
                    "likes-pie": e,
                    likescandy: e,
                    "neat-url": e,
                    "saves-the-whales": e,
                    selfip: e,
                    "sells-for-less": e,
                    "sells-for-u": e,
                    servebbs: e,
                    "simple-url": e,
                    "space-to-rent": e,
                    "teaches-yoga": e,
                    writesthisblog: e,
                    ddnsfree: e,
                    ddnsgeek: e,
                    giize: e,
                    gleeze: e,
                    kozow: e,
                    loseyourip: e,
                    ooguy: e,
                    theworkpc: e,
                    mytuleap: e,
                    "tuleap-partners": e,
                    encoreapi: e,
                    evennode: [
                        0,
                        {
                            "eu-1": e,
                            "eu-2": e,
                            "eu-3": e,
                            "eu-4": e,
                            "us-1": e,
                            "us-2": e,
                            "us-3": e,
                            "us-4": e
                        }
                    ],
                    onfabrica: e,
                    "fastly-edge": e,
                    "fastly-terrarium": e,
                    "fastvps-server": e,
                    mydobiss: e,
                    firebaseapp: e,
                    fldrv: e,
                    forgeblocks: e,
                    framercanvas: e,
                    "freebox-os": e,
                    freeboxos: e,
                    freemyip: e,
                    aliases121: e,
                    gentapps: e,
                    gentlentapis: e,
                    githubusercontent: e,
                    "0emm": s,
                    appspot: [
                        2,
                        {
                            r: s
                        }
                    ],
                    blogspot: e,
                    codespot: e,
                    googleapis: e,
                    googlecode: e,
                    pagespeedmobilizer: e,
                    withgoogle: e,
                    withyoutube: e,
                    grayjayleagues: e,
                    hatenablog: e,
                    hatenadiary: e,
                    herokuapp: e,
                    gr: e,
                    smushcdn: e,
                    wphostedmail: e,
                    wpmucdn: e,
                    pixolino: e,
                    "apps-1and1": e,
                    "live-website": e,
                    dopaas: e,
                    "hosted-by-previder": U,
                    hosteur: [
                        0,
                        {
                            "rag-cloud": e,
                            "rag-cloud-ch": e
                        }
                    ],
                    "ik-server": [
                        0,
                        {
                            jcloud: e,
                            "jcloud-ver-jpc": e
                        }
                    ],
                    jelastic: [
                        0,
                        {
                            demo: e
                        }
                    ],
                    massivegrid: U,
                    wafaicloud: [
                        0,
                        {
                            jed: e,
                            ryd: e
                        }
                    ],
                    webadorsite: e,
                    joyent: [
                        0,
                        {
                            cns: s
                        }
                    ],
                    lpusercontent: e,
                    linode: [
                        0,
                        {
                            members: e,
                            nodebalancer: s
                        }
                    ],
                    linodeobjects: s,
                    linodeusercontent: [
                        0,
                        {
                            ip: e
                        }
                    ],
                    localtonet: e,
                    lovableproject: e,
                    barsycenter: e,
                    barsyonline: e,
                    modelscape: e,
                    mwcloudnonprod: e,
                    polyspace: e,
                    mazeplay: e,
                    miniserver: e,
                    atmeta: e,
                    fbsbx: D,
                    meteorapp: Q,
                    routingthecloud: e,
                    mydbserver: e,
                    hostedpi: e,
                    "mythic-beasts": [
                        0,
                        {
                            caracal: e,
                            customer: e,
                            fentiger: e,
                            lynx: e,
                            ocelot: e,
                            oncilla: e,
                            onza: e,
                            sphinx: e,
                            vs: e,
                            x: e,
                            yali: e
                        }
                    ],
                    nospamproxy: [
                        0,
                        {
                            cloud: [
                                2,
                                {
                                    o365: e
                                }
                            ]
                        }
                    ],
                    "4u": e,
                    nfshost: e,
                    "3utilities": e,
                    blogsyte: e,
                    ciscofreak: e,
                    damnserver: e,
                    ddnsking: e,
                    ditchyourip: e,
                    dnsiskinky: e,
                    dynns: e,
                    geekgalaxy: e,
                    "health-carereform": e,
                    homesecuritymac: e,
                    homesecuritypc: e,
                    myactivedirectory: e,
                    mysecuritycamera: e,
                    myvnc: e,
                    "net-freaks": e,
                    onthewifi: e,
                    point2this: e,
                    quicksytes: e,
                    securitytactics: e,
                    servebeer: e,
                    servecounterstrike: e,
                    serveexchange: e,
                    serveftp: e,
                    servegame: e,
                    servehalflife: e,
                    servehttp: e,
                    servehumour: e,
                    serveirc: e,
                    servemp3: e,
                    servep2p: e,
                    servepics: e,
                    servequake: e,
                    servesarcasm: e,
                    stufftoread: e,
                    unusualperson: e,
                    workisboring: e,
                    myiphost: e,
                    observableusercontent: [
                        0,
                        {
                            static: e
                        }
                    ],
                    simplesite: e,
                    orsites: e,
                    operaunite: e,
                    "customer-oci": [
                        0,
                        {
                            "*": e,
                            oci: s,
                            ocp: s,
                            ocs: s
                        }
                    ],
                    oraclecloudapps: s,
                    oraclegovcloudapps: s,
                    "authgear-staging": e,
                    authgearapps: e,
                    skygearapp: e,
                    outsystemscloud: e,
                    ownprovider: e,
                    pgfog: e,
                    pagexl: e,
                    gotpantheon: e,
                    paywhirl: s,
                    upsunapp: e,
                    "postman-echo": e,
                    prgmr: [
                        0,
                        {
                            xen: e
                        }
                    ],
                    pythonanywhere: Q,
                    qa2: e,
                    "alpha-myqnapcloud": e,
                    "dev-myqnapcloud": e,
                    mycloudnas: e,
                    mynascloud: e,
                    myqnapcloud: e,
                    qualifioapp: e,
                    ladesk: e,
                    qbuser: e,
                    quipelements: s,
                    rackmaze: e,
                    "readthedocs-hosted": e,
                    rhcloud: e,
                    onrender: e,
                    render: M,
                    "subsc-pay": e,
                    "180r": e,
                    dojin: e,
                    sakuratan: e,
                    sakuraweb: e,
                    x0: e,
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
                    logoip: e,
                    scrysec: e,
                    "firewall-gateway": e,
                    myshopblocks: e,
                    myshopify: e,
                    shopitsite: e,
                    "1kapp": e,
                    appchizi: e,
                    applinzi: e,
                    sinaapp: e,
                    vipsinaapp: e,
                    streamlitapp: e,
                    "try-snowplow": e,
                    "playstation-cloud": e,
                    myspreadshop: e,
                    "w-corp-staticblitz": e,
                    "w-credentialless-staticblitz": e,
                    "w-staticblitz": e,
                    "stackhero-network": e,
                    stdlib: [
                        0,
                        {
                            api: e
                        }
                    ],
                    strapiapp: [
                        2,
                        {
                            media: e
                        }
                    ],
                    "streak-link": e,
                    streaklinks: e,
                    streakusercontent: e,
                    "temp-dns": e,
                    dsmynas: e,
                    familyds: e,
                    mytabit: e,
                    taveusercontent: e,
                    "tb-hosting": O,
                    reservd: e,
                    thingdustdata: e,
                    "townnews-staging": e,
                    typeform: [
                        0,
                        {
                            pro: e
                        }
                    ],
                    hk: e,
                    it: e,
                    "deus-canvas": e,
                    vultrobjects: s,
                    wafflecell: e,
                    hotelwithflight: e,
                    "reserve-online": e,
                    cprapid: e,
                    pleskns: e,
                    remotewd: e,
                    wiardweb: [
                        0,
                        {
                            pages: e
                        }
                    ],
                    wixsite: e,
                    wixstudio: e,
                    messwithdns: e,
                    "woltlab-demo": e,
                    wpenginepowered: [
                        2,
                        {
                            js: e
                        }
                    ],
                    xnbay: [
                        2,
                        {
                            u2: e,
                            "u2-local": e
                        }
                    ],
                    yolasite: e
                }
            ],
            coop: t,
            cr: [
                1,
                {
                    ac: t,
                    co: t,
                    ed: t,
                    fi: t,
                    go: t,
                    or: t,
                    sa: t
                }
            ],
            cu: [
                1,
                {
                    com: t,
                    edu: t,
                    gob: t,
                    inf: t,
                    nat: t,
                    net: t,
                    org: t
                }
            ],
            cv: [
                1,
                {
                    com: t,
                    edu: t,
                    id: t,
                    int: t,
                    net: t,
                    nome: t,
                    org: t,
                    publ: t
                }
            ],
            cw: F,
            cx: [
                1,
                {
                    gov: t,
                    cloudns: e,
                    ath: e,
                    info: e,
                    assessments: e,
                    calculators: e,
                    funnels: e,
                    paynow: e,
                    quizzes: e,
                    researched: e,
                    tests: e
                }
            ],
            cy: [
                1,
                {
                    ac: t,
                    biz: t,
                    com: [
                        1,
                        {
                            scaleforce: L
                        }
                    ],
                    ekloges: t,
                    gov: t,
                    ltd: t,
                    mil: t,
                    net: t,
                    org: t,
                    press: t,
                    pro: t,
                    tm: t
                }
            ],
            cz: [
                1,
                {
                    contentproxy9: [
                        0,
                        {
                            rsc: e
                        }
                    ],
                    realm: e,
                    e4: e,
                    co: e,
                    metacentrum: [
                        0,
                        {
                            cloud: s,
                            custom: e
                        }
                    ],
                    muni: [
                        0,
                        {
                            cloud: [
                                0,
                                {
                                    flt: e,
                                    usr: e
                                }
                            ]
                        }
                    ]
                }
            ],
            de: [
                1,
                {
                    bplaced: e,
                    square7: e,
                    com: e,
                    cosidns: $,
                    dnsupdater: e,
                    "dynamisches-dns": e,
                    "internet-dns": e,
                    "l-o-g-i-n": e,
                    ddnss: [
                        2,
                        {
                            dyn: e,
                            dyndns: e
                        }
                    ],
                    "dyn-ip24": e,
                    dyndns1: e,
                    "home-webserver": [
                        2,
                        {
                            dyn: e
                        }
                    ],
                    "myhome-server": e,
                    dnshome: e,
                    fuettertdasnetz: e,
                    isteingeek: e,
                    istmein: e,
                    lebtimnetz: e,
                    leitungsen: e,
                    traeumtgerade: e,
                    frusky: s,
                    goip: e,
                    "xn--gnstigbestellen-zvb": e,
                    günstigbestellen: e,
                    "xn--gnstigliefern-wob": e,
                    günstigliefern: e,
                    "hs-heilbronn": [
                        0,
                        {
                            it: [
                                0,
                                {
                                    pages: e,
                                    "pages-research": e
                                }
                            ]
                        }
                    ],
                    "dyn-berlin": e,
                    "in-berlin": e,
                    "in-brb": e,
                    "in-butter": e,
                    "in-dsl": e,
                    "in-vpn": e,
                    iservschule: e,
                    "mein-iserv": e,
                    schulplattform: e,
                    schulserver: e,
                    "test-iserv": e,
                    keymachine: e,
                    "git-repos": e,
                    "lcube-server": e,
                    "svn-repos": e,
                    barsy: e,
                    webspaceconfig: e,
                    "123webseite": e,
                    rub: e,
                    "ruhr-uni-bochum": [
                        2,
                        {
                            noc: [
                                0,
                                {
                                    io: e
                                }
                            ]
                        }
                    ],
                    logoip: e,
                    "firewall-gateway": e,
                    "my-gateway": e,
                    "my-router": e,
                    spdns: e,
                    speedpartner: [
                        0,
                        {
                            customer: e
                        }
                    ],
                    myspreadshop: e,
                    "taifun-dns": e,
                    "12hp": e,
                    "2ix": e,
                    "4lima": e,
                    "lima-city": e,
                    "dd-dns": e,
                    "dray-dns": e,
                    draydns: e,
                    "dyn-vpn": e,
                    dynvpn: e,
                    "mein-vigor": e,
                    "my-vigor": e,
                    "my-wan": e,
                    "syno-ds": e,
                    "synology-diskstation": e,
                    "synology-ds": e,
                    uberspace: s,
                    "virtual-user": e,
                    virtualuser: e,
                    "community-pro": e,
                    diskussionsbereich: e
                }
            ],
            dj: t,
            dk: [
                1,
                {
                    biz: e,
                    co: e,
                    firm: e,
                    reg: e,
                    store: e,
                    "123hjemmeside": e,
                    myspreadshop: e
                }
            ],
            dm: G,
            do: [
                1,
                {
                    art: t,
                    com: t,
                    edu: t,
                    gob: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    sld: t,
                    web: t
                }
            ],
            dz: [
                1,
                {
                    art: t,
                    asso: t,
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    pol: t,
                    soc: t,
                    tm: t
                }
            ],
            ec: [
                1,
                {
                    com: t,
                    edu: t,
                    fin: t,
                    gob: t,
                    gov: t,
                    info: t,
                    k12: t,
                    med: t,
                    mil: t,
                    net: t,
                    org: t,
                    pro: t,
                    base: e,
                    official: e
                }
            ],
            edu: [
                1,
                {
                    rit: [
                        0,
                        {
                            "git-pages": e
                        }
                    ]
                }
            ],
            ee: [
                1,
                {
                    aip: t,
                    com: t,
                    edu: t,
                    fie: t,
                    gov: t,
                    lib: t,
                    med: t,
                    org: t,
                    pri: t,
                    riik: t
                }
            ],
            eg: [
                1,
                {
                    ac: t,
                    com: t,
                    edu: t,
                    eun: t,
                    gov: t,
                    info: t,
                    me: t,
                    mil: t,
                    name: t,
                    net: t,
                    org: t,
                    sci: t,
                    sport: t,
                    tv: t
                }
            ],
            er: h,
            es: [
                1,
                {
                    com: t,
                    edu: t,
                    gob: t,
                    nom: t,
                    org: t,
                    "123miweb": e,
                    myspreadshop: e
                }
            ],
            et: [
                1,
                {
                    biz: t,
                    com: t,
                    edu: t,
                    gov: t,
                    info: t,
                    name: t,
                    net: t,
                    org: t
                }
            ],
            eu: [
                1,
                {
                    airkitapps: e,
                    cloudns: e,
                    dogado: [
                        0,
                        {
                            jelastic: e
                        }
                    ],
                    barsy: e,
                    spdns: e,
                    transurl: s,
                    diskstation: e
                }
            ],
            fi: [
                1,
                {
                    aland: t,
                    dy: e,
                    "xn--hkkinen-5wa": e,
                    häkkinen: e,
                    iki: e,
                    cloudplatform: [
                        0,
                        {
                            fi: e
                        }
                    ],
                    datacenter: [
                        0,
                        {
                            demo: e,
                            paas: e
                        }
                    ],
                    kapsi: e,
                    "123kotisivu": e,
                    myspreadshop: e
                }
            ],
            fj: [
                1,
                {
                    ac: t,
                    biz: t,
                    com: t,
                    gov: t,
                    info: t,
                    mil: t,
                    name: t,
                    net: t,
                    org: t,
                    pro: t
                }
            ],
            fk: h,
            fm: [
                1,
                {
                    com: t,
                    edu: t,
                    net: t,
                    org: t,
                    radio: e,
                    user: s
                }
            ],
            fo: t,
            fr: [
                1,
                {
                    asso: t,
                    com: t,
                    gouv: t,
                    nom: t,
                    prd: t,
                    tm: t,
                    avoues: t,
                    cci: t,
                    greta: t,
                    "huissier-justice": t,
                    "en-root": e,
                    "fbx-os": e,
                    fbxos: e,
                    "freebox-os": e,
                    freeboxos: e,
                    goupile: e,
                    "123siteweb": e,
                    "on-web": e,
                    "chirurgiens-dentistes-en-france": e,
                    dedibox: e,
                    aeroport: e,
                    avocat: e,
                    chambagri: e,
                    "chirurgiens-dentistes": e,
                    "experts-comptables": e,
                    medecin: e,
                    notaires: e,
                    pharmacien: e,
                    port: e,
                    veterinaire: e,
                    myspreadshop: e,
                    ynh: e
                }
            ],
            ga: t,
            gb: t,
            gd: [
                1,
                {
                    edu: t,
                    gov: t
                }
            ],
            ge: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    pvt: t,
                    school: t
                }
            ],
            gf: t,
            gg: [
                1,
                {
                    co: t,
                    net: t,
                    org: t,
                    botdash: e,
                    kaas: e,
                    stackit: e,
                    panel: [
                        2,
                        {
                            daemon: e
                        }
                    ]
                }
            ],
            gh: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    org: t
                }
            ],
            gi: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    ltd: t,
                    mod: t,
                    org: t
                }
            ],
            gl: [
                1,
                {
                    co: t,
                    com: t,
                    edu: t,
                    net: t,
                    org: t,
                    biz: e
                }
            ],
            gm: t,
            gn: [
                1,
                {
                    ac: t,
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t
                }
            ],
            gov: t,
            gp: [
                1,
                {
                    asso: t,
                    com: t,
                    edu: t,
                    mobi: t,
                    net: t,
                    org: t
                }
            ],
            gq: t,
            gr: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    barsy: e,
                    simplesite: e
                }
            ],
            gs: t,
            gt: [
                1,
                {
                    com: t,
                    edu: t,
                    gob: t,
                    ind: t,
                    mil: t,
                    net: t,
                    org: t
                }
            ],
            gu: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    guam: t,
                    info: t,
                    net: t,
                    org: t,
                    web: t
                }
            ],
            gw: t,
            gy: G,
            hk: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    idv: t,
                    net: t,
                    org: t,
                    "xn--ciqpn": t,
                    个人: t,
                    "xn--gmqw5a": t,
                    個人: t,
                    "xn--55qx5d": t,
                    公司: t,
                    "xn--mxtq1m": t,
                    政府: t,
                    "xn--lcvr32d": t,
                    敎育: t,
                    "xn--wcvs22d": t,
                    教育: t,
                    "xn--gmq050i": t,
                    箇人: t,
                    "xn--uc0atv": t,
                    組織: t,
                    "xn--uc0ay4a": t,
                    組织: t,
                    "xn--od0alg": t,
                    網絡: t,
                    "xn--zf0avx": t,
                    網络: t,
                    "xn--mk0axi": t,
                    组織: t,
                    "xn--tn0ag": t,
                    组织: t,
                    "xn--od0aq3b": t,
                    网絡: t,
                    "xn--io0a7i": t,
                    网络: t,
                    inc: e,
                    ltd: e
                }
            ],
            hm: t,
            hn: [
                1,
                {
                    com: t,
                    edu: t,
                    gob: t,
                    mil: t,
                    net: t,
                    org: t
                }
            ],
            hr: [
                1,
                {
                    com: t,
                    from: t,
                    iz: t,
                    name: t,
                    brendly: V
                }
            ],
            ht: [
                1,
                {
                    adult: t,
                    art: t,
                    asso: t,
                    com: t,
                    coop: t,
                    edu: t,
                    firm: t,
                    gouv: t,
                    info: t,
                    med: t,
                    net: t,
                    org: t,
                    perso: t,
                    pol: t,
                    pro: t,
                    rel: t,
                    shop: t,
                    rt: e
                }
            ],
            hu: [
                1,
                {
                    2e3: t,
                    agrar: t,
                    bolt: t,
                    casino: t,
                    city: t,
                    co: t,
                    erotica: t,
                    erotika: t,
                    film: t,
                    forum: t,
                    games: t,
                    hotel: t,
                    info: t,
                    ingatlan: t,
                    jogasz: t,
                    konyvelo: t,
                    lakas: t,
                    media: t,
                    news: t,
                    org: t,
                    priv: t,
                    reklam: t,
                    sex: t,
                    shop: t,
                    sport: t,
                    suli: t,
                    szex: t,
                    tm: t,
                    tozsde: t,
                    utazas: t,
                    video: t
                }
            ],
            id: [
                1,
                {
                    ac: t,
                    biz: t,
                    co: t,
                    desa: t,
                    go: t,
                    mil: t,
                    my: t,
                    net: t,
                    or: t,
                    ponpes: t,
                    sch: t,
                    web: t,
                    zone: e
                }
            ],
            ie: [
                1,
                {
                    gov: t,
                    myspreadshop: e
                }
            ],
            il: [
                1,
                {
                    ac: t,
                    co: [
                        1,
                        {
                            ravpage: e,
                            mytabit: e,
                            tabitorder: e
                        }
                    ],
                    gov: t,
                    idf: t,
                    k12: t,
                    muni: t,
                    net: t,
                    org: t
                }
            ],
            "xn--4dbrk0ce": [
                1,
                {
                    "xn--4dbgdty6c": t,
                    "xn--5dbhl8d": t,
                    "xn--8dbq2a": t,
                    "xn--hebda8b": t
                }
            ],
            ישראל: [
                1,
                {
                    אקדמיה: t,
                    ישוב: t,
                    צהל: t,
                    ממשל: t
                }
            ],
            im: [
                1,
                {
                    ac: t,
                    co: [
                        1,
                        {
                            ltd: t,
                            plc: t
                        }
                    ],
                    com: t,
                    net: t,
                    org: t,
                    tt: t,
                    tv: t
                }
            ],
            in: [
                1,
                {
                    "5g": t,
                    "6g": t,
                    ac: t,
                    ai: t,
                    am: t,
                    bihar: t,
                    biz: t,
                    business: t,
                    ca: t,
                    cn: t,
                    co: t,
                    com: t,
                    coop: t,
                    cs: t,
                    delhi: t,
                    dr: t,
                    edu: t,
                    er: t,
                    firm: t,
                    gen: t,
                    gov: t,
                    gujarat: t,
                    ind: t,
                    info: t,
                    int: t,
                    internet: t,
                    io: t,
                    me: t,
                    mil: t,
                    net: t,
                    nic: t,
                    org: t,
                    pg: t,
                    post: t,
                    pro: t,
                    res: t,
                    travel: t,
                    tv: t,
                    uk: t,
                    up: t,
                    us: t,
                    cloudns: e,
                    barsy: e,
                    web: e,
                    supabase: e
                }
            ],
            info: [
                1,
                {
                    cloudns: e,
                    "dynamic-dns": e,
                    "barrel-of-knowledge": e,
                    "barrell-of-knowledge": e,
                    dyndns: e,
                    "for-our": e,
                    "groks-the": e,
                    "groks-this": e,
                    "here-for-more": e,
                    knowsitall: e,
                    selfip: e,
                    webhop: e,
                    barsy: e,
                    mayfirst: e,
                    mittwald: e,
                    mittwaldserver: e,
                    typo3server: e,
                    dvrcam: e,
                    ilovecollege: e,
                    "no-ip": e,
                    forumz: e,
                    nsupdate: e,
                    dnsupdate: e,
                    "v-info": e
                }
            ],
            int: [
                1,
                {
                    eu: t
                }
            ],
            io: [
                1,
                {
                    2038: e,
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    nom: t,
                    org: t,
                    "on-acorn": s,
                    myaddr: e,
                    apigee: e,
                    "b-data": e,
                    beagleboard: e,
                    bitbucket: e,
                    bluebite: e,
                    boxfuse: e,
                    brave: i,
                    browsersafetymark: e,
                    bubble: z,
                    bubbleapps: e,
                    bigv: [
                        0,
                        {
                            uk0: e
                        }
                    ],
                    cleverapps: e,
                    cloudbeesusercontent: e,
                    dappnode: [
                        0,
                        {
                            dyndns: e
                        }
                    ],
                    darklang: e,
                    definima: e,
                    dedyn: e,
                    "fh-muenster": e,
                    shw: e,
                    forgerock: [
                        0,
                        {
                            id: e
                        }
                    ],
                    github: e,
                    gitlab: e,
                    lolipop: e,
                    "hasura-app": e,
                    hostyhosting: e,
                    hypernode: e,
                    moonscale: s,
                    beebyte: U,
                    beebyteapp: [
                        0,
                        {
                            sekd1: e
                        }
                    ],
                    jele: e,
                    webthings: e,
                    loginline: e,
                    barsy: e,
                    azurecontainer: s,
                    ngrok: [
                        2,
                        {
                            ap: e,
                            au: e,
                            eu: e,
                            in: e,
                            jp: e,
                            sa: e,
                            us: e
                        }
                    ],
                    nodeart: [
                        0,
                        {
                            stage: e
                        }
                    ],
                    pantheonsite: e,
                    pstmn: [
                        2,
                        {
                            mock: e
                        }
                    ],
                    protonet: e,
                    qcx: [
                        2,
                        {
                            sys: s
                        }
                    ],
                    qoto: e,
                    vaporcloud: e,
                    myrdbx: e,
                    "rb-hosting": O,
                    "on-k3s": s,
                    "on-rio": s,
                    readthedocs: e,
                    resindevice: e,
                    resinstaging: [
                        0,
                        {
                            devices: e
                        }
                    ],
                    hzc: e,
                    sandcats: e,
                    scrypted: [
                        0,
                        {
                            client: e
                        }
                    ],
                    "mo-siemens": e,
                    lair: D,
                    stolos: s,
                    musician: e,
                    utwente: e,
                    edugit: e,
                    telebit: e,
                    thingdust: [
                        0,
                        {
                            dev: W,
                            disrec: W,
                            prod: Y,
                            testing: W
                        }
                    ],
                    tickets: e,
                    webflow: e,
                    webflowtest: e,
                    editorx: e,
                    wixstudio: e,
                    basicserver: e,
                    virtualserver: e
                }
            ],
            iq: n,
            ir: [
                1,
                {
                    ac: t,
                    co: t,
                    gov: t,
                    id: t,
                    net: t,
                    org: t,
                    sch: t,
                    "xn--mgba3a4f16a": t,
                    ایران: t,
                    "xn--mgba3a4fra": t,
                    ايران: t,
                    arvanedge: e
                }
            ],
            is: t,
            it: [
                1,
                {
                    edu: t,
                    gov: t,
                    abr: t,
                    abruzzo: t,
                    "aosta-valley": t,
                    aostavalley: t,
                    bas: t,
                    basilicata: t,
                    cal: t,
                    calabria: t,
                    cam: t,
                    campania: t,
                    "emilia-romagna": t,
                    emiliaromagna: t,
                    emr: t,
                    "friuli-v-giulia": t,
                    "friuli-ve-giulia": t,
                    "friuli-vegiulia": t,
                    "friuli-venezia-giulia": t,
                    "friuli-veneziagiulia": t,
                    "friuli-vgiulia": t,
                    "friuliv-giulia": t,
                    "friulive-giulia": t,
                    friulivegiulia: t,
                    "friulivenezia-giulia": t,
                    friuliveneziagiulia: t,
                    friulivgiulia: t,
                    fvg: t,
                    laz: t,
                    lazio: t,
                    lig: t,
                    liguria: t,
                    lom: t,
                    lombardia: t,
                    lombardy: t,
                    lucania: t,
                    mar: t,
                    marche: t,
                    mol: t,
                    molise: t,
                    piedmont: t,
                    piemonte: t,
                    pmn: t,
                    pug: t,
                    puglia: t,
                    sar: t,
                    sardegna: t,
                    sardinia: t,
                    sic: t,
                    sicilia: t,
                    sicily: t,
                    taa: t,
                    tos: t,
                    toscana: t,
                    "trentin-sud-tirol": t,
                    "xn--trentin-sd-tirol-rzb": t,
                    "trentin-süd-tirol": t,
                    "trentin-sudtirol": t,
                    "xn--trentin-sdtirol-7vb": t,
                    "trentin-südtirol": t,
                    "trentin-sued-tirol": t,
                    "trentin-suedtirol": t,
                    trentino: t,
                    "trentino-a-adige": t,
                    "trentino-aadige": t,
                    "trentino-alto-adige": t,
                    "trentino-altoadige": t,
                    "trentino-s-tirol": t,
                    "trentino-stirol": t,
                    "trentino-sud-tirol": t,
                    "xn--trentino-sd-tirol-c3b": t,
                    "trentino-süd-tirol": t,
                    "trentino-sudtirol": t,
                    "xn--trentino-sdtirol-szb": t,
                    "trentino-südtirol": t,
                    "trentino-sued-tirol": t,
                    "trentino-suedtirol": t,
                    "trentinoa-adige": t,
                    trentinoaadige: t,
                    "trentinoalto-adige": t,
                    trentinoaltoadige: t,
                    "trentinos-tirol": t,
                    trentinostirol: t,
                    "trentinosud-tirol": t,
                    "xn--trentinosd-tirol-rzb": t,
                    "trentinosüd-tirol": t,
                    trentinosudtirol: t,
                    "xn--trentinosdtirol-7vb": t,
                    trentinosüdtirol: t,
                    "trentinosued-tirol": t,
                    trentinosuedtirol: t,
                    "trentinsud-tirol": t,
                    "xn--trentinsd-tirol-6vb": t,
                    "trentinsüd-tirol": t,
                    trentinsudtirol: t,
                    "xn--trentinsdtirol-nsb": t,
                    trentinsüdtirol: t,
                    "trentinsued-tirol": t,
                    trentinsuedtirol: t,
                    tuscany: t,
                    umb: t,
                    umbria: t,
                    "val-d-aosta": t,
                    "val-daosta": t,
                    "vald-aosta": t,
                    valdaosta: t,
                    "valle-aosta": t,
                    "valle-d-aosta": t,
                    "valle-daosta": t,
                    valleaosta: t,
                    "valled-aosta": t,
                    valledaosta: t,
                    "vallee-aoste": t,
                    "xn--valle-aoste-ebb": t,
                    "vallée-aoste": t,
                    "vallee-d-aoste": t,
                    "xn--valle-d-aoste-ehb": t,
                    "vallée-d-aoste": t,
                    valleeaoste: t,
                    "xn--valleaoste-e7a": t,
                    valléeaoste: t,
                    valleedaoste: t,
                    "xn--valledaoste-ebb": t,
                    valléedaoste: t,
                    vao: t,
                    vda: t,
                    ven: t,
                    veneto: t,
                    ag: t,
                    agrigento: t,
                    al: t,
                    alessandria: t,
                    "alto-adige": t,
                    altoadige: t,
                    an: t,
                    ancona: t,
                    "andria-barletta-trani": t,
                    "andria-trani-barletta": t,
                    andriabarlettatrani: t,
                    andriatranibarletta: t,
                    ao: t,
                    aosta: t,
                    aoste: t,
                    ap: t,
                    aq: t,
                    aquila: t,
                    ar: t,
                    arezzo: t,
                    "ascoli-piceno": t,
                    ascolipiceno: t,
                    asti: t,
                    at: t,
                    av: t,
                    avellino: t,
                    ba: t,
                    balsan: t,
                    "balsan-sudtirol": t,
                    "xn--balsan-sdtirol-nsb": t,
                    "balsan-südtirol": t,
                    "balsan-suedtirol": t,
                    bari: t,
                    "barletta-trani-andria": t,
                    barlettatraniandria: t,
                    belluno: t,
                    benevento: t,
                    bergamo: t,
                    bg: t,
                    bi: t,
                    biella: t,
                    bl: t,
                    bn: t,
                    bo: t,
                    bologna: t,
                    bolzano: t,
                    "bolzano-altoadige": t,
                    bozen: t,
                    "bozen-sudtirol": t,
                    "xn--bozen-sdtirol-2ob": t,
                    "bozen-südtirol": t,
                    "bozen-suedtirol": t,
                    br: t,
                    brescia: t,
                    brindisi: t,
                    bs: t,
                    bt: t,
                    bulsan: t,
                    "bulsan-sudtirol": t,
                    "xn--bulsan-sdtirol-nsb": t,
                    "bulsan-südtirol": t,
                    "bulsan-suedtirol": t,
                    bz: t,
                    ca: t,
                    cagliari: t,
                    caltanissetta: t,
                    "campidano-medio": t,
                    campidanomedio: t,
                    campobasso: t,
                    "carbonia-iglesias": t,
                    carboniaiglesias: t,
                    "carrara-massa": t,
                    carraramassa: t,
                    caserta: t,
                    catania: t,
                    catanzaro: t,
                    cb: t,
                    ce: t,
                    "cesena-forli": t,
                    "xn--cesena-forl-mcb": t,
                    "cesena-forlì": t,
                    cesenaforli: t,
                    "xn--cesenaforl-i8a": t,
                    cesenaforlì: t,
                    ch: t,
                    chieti: t,
                    ci: t,
                    cl: t,
                    cn: t,
                    co: t,
                    como: t,
                    cosenza: t,
                    cr: t,
                    cremona: t,
                    crotone: t,
                    cs: t,
                    ct: t,
                    cuneo: t,
                    cz: t,
                    "dell-ogliastra": t,
                    dellogliastra: t,
                    en: t,
                    enna: t,
                    fc: t,
                    fe: t,
                    fermo: t,
                    ferrara: t,
                    fg: t,
                    fi: t,
                    firenze: t,
                    florence: t,
                    fm: t,
                    foggia: t,
                    "forli-cesena": t,
                    "xn--forl-cesena-fcb": t,
                    "forlì-cesena": t,
                    forlicesena: t,
                    "xn--forlcesena-c8a": t,
                    forlìcesena: t,
                    fr: t,
                    frosinone: t,
                    ge: t,
                    genoa: t,
                    genova: t,
                    go: t,
                    gorizia: t,
                    gr: t,
                    grosseto: t,
                    "iglesias-carbonia": t,
                    iglesiascarbonia: t,
                    im: t,
                    imperia: t,
                    is: t,
                    isernia: t,
                    kr: t,
                    "la-spezia": t,
                    laquila: t,
                    laspezia: t,
                    latina: t,
                    lc: t,
                    le: t,
                    lecce: t,
                    lecco: t,
                    li: t,
                    livorno: t,
                    lo: t,
                    lodi: t,
                    lt: t,
                    lu: t,
                    lucca: t,
                    macerata: t,
                    mantova: t,
                    "massa-carrara": t,
                    massacarrara: t,
                    matera: t,
                    mb: t,
                    mc: t,
                    me: t,
                    "medio-campidano": t,
                    mediocampidano: t,
                    messina: t,
                    mi: t,
                    milan: t,
                    milano: t,
                    mn: t,
                    mo: t,
                    modena: t,
                    monza: t,
                    "monza-brianza": t,
                    "monza-e-della-brianza": t,
                    monzabrianza: t,
                    monzaebrianza: t,
                    monzaedellabrianza: t,
                    ms: t,
                    mt: t,
                    na: t,
                    naples: t,
                    napoli: t,
                    no: t,
                    novara: t,
                    nu: t,
                    nuoro: t,
                    og: t,
                    ogliastra: t,
                    "olbia-tempio": t,
                    olbiatempio: t,
                    or: t,
                    oristano: t,
                    ot: t,
                    pa: t,
                    padova: t,
                    padua: t,
                    palermo: t,
                    parma: t,
                    pavia: t,
                    pc: t,
                    pd: t,
                    pe: t,
                    perugia: t,
                    "pesaro-urbino": t,
                    pesarourbino: t,
                    pescara: t,
                    pg: t,
                    pi: t,
                    piacenza: t,
                    pisa: t,
                    pistoia: t,
                    pn: t,
                    po: t,
                    pordenone: t,
                    potenza: t,
                    pr: t,
                    prato: t,
                    pt: t,
                    pu: t,
                    pv: t,
                    pz: t,
                    ra: t,
                    ragusa: t,
                    ravenna: t,
                    rc: t,
                    re: t,
                    "reggio-calabria": t,
                    "reggio-emilia": t,
                    reggiocalabria: t,
                    reggioemilia: t,
                    rg: t,
                    ri: t,
                    rieti: t,
                    rimini: t,
                    rm: t,
                    rn: t,
                    ro: t,
                    roma: t,
                    rome: t,
                    rovigo: t,
                    sa: t,
                    salerno: t,
                    sassari: t,
                    savona: t,
                    si: t,
                    siena: t,
                    siracusa: t,
                    so: t,
                    sondrio: t,
                    sp: t,
                    sr: t,
                    ss: t,
                    "xn--sdtirol-n2a": t,
                    südtirol: t,
                    suedtirol: t,
                    sv: t,
                    ta: t,
                    taranto: t,
                    te: t,
                    "tempio-olbia": t,
                    tempioolbia: t,
                    teramo: t,
                    terni: t,
                    tn: t,
                    to: t,
                    torino: t,
                    tp: t,
                    tr: t,
                    "trani-andria-barletta": t,
                    "trani-barletta-andria": t,
                    traniandriabarletta: t,
                    tranibarlettaandria: t,
                    trapani: t,
                    trento: t,
                    treviso: t,
                    trieste: t,
                    ts: t,
                    turin: t,
                    tv: t,
                    ud: t,
                    udine: t,
                    "urbino-pesaro": t,
                    urbinopesaro: t,
                    va: t,
                    varese: t,
                    vb: t,
                    vc: t,
                    ve: t,
                    venezia: t,
                    venice: t,
                    verbania: t,
                    vercelli: t,
                    verona: t,
                    vi: t,
                    "vibo-valentia": t,
                    vibovalentia: t,
                    vicenza: t,
                    viterbo: t,
                    vr: t,
                    vs: t,
                    vt: t,
                    vv: t,
                    "12chars": e,
                    ibxos: e,
                    iliadboxos: e,
                    neen: [
                        0,
                        {
                            jc: e
                        }
                    ],
                    "123homepage": e,
                    "16-b": e,
                    "32-b": e,
                    "64-b": e,
                    myspreadshop: e,
                    syncloud: e
                }
            ],
            je: [
                1,
                {
                    co: t,
                    net: t,
                    org: t,
                    of: e
                }
            ],
            jm: h,
            jo: [
                1,
                {
                    agri: t,
                    ai: t,
                    com: t,
                    edu: t,
                    eng: t,
                    fm: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    per: t,
                    phd: t,
                    sch: t,
                    tv: t
                }
            ],
            jobs: t,
            jp: [
                1,
                {
                    ac: t,
                    ad: t,
                    co: t,
                    ed: t,
                    go: t,
                    gr: t,
                    lg: t,
                    ne: [
                        1,
                        {
                            aseinet: K,
                            gehirn: e,
                            ivory: e,
                            "mail-box": e,
                            mints: e,
                            mokuren: e,
                            opal: e,
                            sakura: e,
                            sumomo: e,
                            topaz: e
                        }
                    ],
                    or: t,
                    aichi: [
                        1,
                        {
                            aisai: t,
                            ama: t,
                            anjo: t,
                            asuke: t,
                            chiryu: t,
                            chita: t,
                            fuso: t,
                            gamagori: t,
                            handa: t,
                            hazu: t,
                            hekinan: t,
                            higashiura: t,
                            ichinomiya: t,
                            inazawa: t,
                            inuyama: t,
                            isshiki: t,
                            iwakura: t,
                            kanie: t,
                            kariya: t,
                            kasugai: t,
                            kira: t,
                            kiyosu: t,
                            komaki: t,
                            konan: t,
                            kota: t,
                            mihama: t,
                            miyoshi: t,
                            nishio: t,
                            nisshin: t,
                            obu: t,
                            oguchi: t,
                            oharu: t,
                            okazaki: t,
                            owariasahi: t,
                            seto: t,
                            shikatsu: t,
                            shinshiro: t,
                            shitara: t,
                            tahara: t,
                            takahama: t,
                            tobishima: t,
                            toei: t,
                            togo: t,
                            tokai: t,
                            tokoname: t,
                            toyoake: t,
                            toyohashi: t,
                            toyokawa: t,
                            toyone: t,
                            toyota: t,
                            tsushima: t,
                            yatomi: t
                        }
                    ],
                    akita: [
                        1,
                        {
                            akita: t,
                            daisen: t,
                            fujisato: t,
                            gojome: t,
                            hachirogata: t,
                            happou: t,
                            higashinaruse: t,
                            honjo: t,
                            honjyo: t,
                            ikawa: t,
                            kamikoani: t,
                            kamioka: t,
                            katagami: t,
                            kazuno: t,
                            kitaakita: t,
                            kosaka: t,
                            kyowa: t,
                            misato: t,
                            mitane: t,
                            moriyoshi: t,
                            nikaho: t,
                            noshiro: t,
                            odate: t,
                            oga: t,
                            ogata: t,
                            semboku: t,
                            yokote: t,
                            yurihonjo: t
                        }
                    ],
                    aomori: [
                        1,
                        {
                            aomori: t,
                            gonohe: t,
                            hachinohe: t,
                            hashikami: t,
                            hiranai: t,
                            hirosaki: t,
                            itayanagi: t,
                            kuroishi: t,
                            misawa: t,
                            mutsu: t,
                            nakadomari: t,
                            noheji: t,
                            oirase: t,
                            owani: t,
                            rokunohe: t,
                            sannohe: t,
                            shichinohe: t,
                            shingo: t,
                            takko: t,
                            towada: t,
                            tsugaru: t,
                            tsuruta: t
                        }
                    ],
                    chiba: [
                        1,
                        {
                            abiko: t,
                            asahi: t,
                            chonan: t,
                            chosei: t,
                            choshi: t,
                            chuo: t,
                            funabashi: t,
                            futtsu: t,
                            hanamigawa: t,
                            ichihara: t,
                            ichikawa: t,
                            ichinomiya: t,
                            inzai: t,
                            isumi: t,
                            kamagaya: t,
                            kamogawa: t,
                            kashiwa: t,
                            katori: t,
                            katsuura: t,
                            kimitsu: t,
                            kisarazu: t,
                            kozaki: t,
                            kujukuri: t,
                            kyonan: t,
                            matsudo: t,
                            midori: t,
                            mihama: t,
                            minamiboso: t,
                            mobara: t,
                            mutsuzawa: t,
                            nagara: t,
                            nagareyama: t,
                            narashino: t,
                            narita: t,
                            noda: t,
                            oamishirasato: t,
                            omigawa: t,
                            onjuku: t,
                            otaki: t,
                            sakae: t,
                            sakura: t,
                            shimofusa: t,
                            shirako: t,
                            shiroi: t,
                            shisui: t,
                            sodegaura: t,
                            sosa: t,
                            tako: t,
                            tateyama: t,
                            togane: t,
                            tohnosho: t,
                            tomisato: t,
                            urayasu: t,
                            yachimata: t,
                            yachiyo: t,
                            yokaichiba: t,
                            yokoshibahikari: t,
                            yotsukaido: t
                        }
                    ],
                    ehime: [
                        1,
                        {
                            ainan: t,
                            honai: t,
                            ikata: t,
                            imabari: t,
                            iyo: t,
                            kamijima: t,
                            kihoku: t,
                            kumakogen: t,
                            masaki: t,
                            matsuno: t,
                            matsuyama: t,
                            namikata: t,
                            niihama: t,
                            ozu: t,
                            saijo: t,
                            seiyo: t,
                            shikokuchuo: t,
                            tobe: t,
                            toon: t,
                            uchiko: t,
                            uwajima: t,
                            yawatahama: t
                        }
                    ],
                    fukui: [
                        1,
                        {
                            echizen: t,
                            eiheiji: t,
                            fukui: t,
                            ikeda: t,
                            katsuyama: t,
                            mihama: t,
                            minamiechizen: t,
                            obama: t,
                            ohi: t,
                            ono: t,
                            sabae: t,
                            sakai: t,
                            takahama: t,
                            tsuruga: t,
                            wakasa: t
                        }
                    ],
                    fukuoka: [
                        1,
                        {
                            ashiya: t,
                            buzen: t,
                            chikugo: t,
                            chikuho: t,
                            chikujo: t,
                            chikushino: t,
                            chikuzen: t,
                            chuo: t,
                            dazaifu: t,
                            fukuchi: t,
                            hakata: t,
                            higashi: t,
                            hirokawa: t,
                            hisayama: t,
                            iizuka: t,
                            inatsuki: t,
                            kaho: t,
                            kasuga: t,
                            kasuya: t,
                            kawara: t,
                            keisen: t,
                            koga: t,
                            kurate: t,
                            kurogi: t,
                            kurume: t,
                            minami: t,
                            miyako: t,
                            miyama: t,
                            miyawaka: t,
                            mizumaki: t,
                            munakata: t,
                            nakagawa: t,
                            nakama: t,
                            nishi: t,
                            nogata: t,
                            ogori: t,
                            okagaki: t,
                            okawa: t,
                            oki: t,
                            omuta: t,
                            onga: t,
                            onojo: t,
                            oto: t,
                            saigawa: t,
                            sasaguri: t,
                            shingu: t,
                            shinyoshitomi: t,
                            shonai: t,
                            soeda: t,
                            sue: t,
                            tachiarai: t,
                            tagawa: t,
                            takata: t,
                            toho: t,
                            toyotsu: t,
                            tsuiki: t,
                            ukiha: t,
                            umi: t,
                            usui: t,
                            yamada: t,
                            yame: t,
                            yanagawa: t,
                            yukuhashi: t
                        }
                    ],
                    fukushima: [
                        1,
                        {
                            aizubange: t,
                            aizumisato: t,
                            aizuwakamatsu: t,
                            asakawa: t,
                            bandai: t,
                            date: t,
                            fukushima: t,
                            furudono: t,
                            futaba: t,
                            hanawa: t,
                            higashi: t,
                            hirata: t,
                            hirono: t,
                            iitate: t,
                            inawashiro: t,
                            ishikawa: t,
                            iwaki: t,
                            izumizaki: t,
                            kagamiishi: t,
                            kaneyama: t,
                            kawamata: t,
                            kitakata: t,
                            kitashiobara: t,
                            koori: t,
                            koriyama: t,
                            kunimi: t,
                            miharu: t,
                            mishima: t,
                            namie: t,
                            nango: t,
                            nishiaizu: t,
                            nishigo: t,
                            okuma: t,
                            omotego: t,
                            ono: t,
                            otama: t,
                            samegawa: t,
                            shimogo: t,
                            shirakawa: t,
                            showa: t,
                            soma: t,
                            sukagawa: t,
                            taishin: t,
                            tamakawa: t,
                            tanagura: t,
                            tenei: t,
                            yabuki: t,
                            yamato: t,
                            yamatsuri: t,
                            yanaizu: t,
                            yugawa: t
                        }
                    ],
                    gifu: [
                        1,
                        {
                            anpachi: t,
                            ena: t,
                            gifu: t,
                            ginan: t,
                            godo: t,
                            gujo: t,
                            hashima: t,
                            hichiso: t,
                            hida: t,
                            higashishirakawa: t,
                            ibigawa: t,
                            ikeda: t,
                            kakamigahara: t,
                            kani: t,
                            kasahara: t,
                            kasamatsu: t,
                            kawaue: t,
                            kitagata: t,
                            mino: t,
                            minokamo: t,
                            mitake: t,
                            mizunami: t,
                            motosu: t,
                            nakatsugawa: t,
                            ogaki: t,
                            sakahogi: t,
                            seki: t,
                            sekigahara: t,
                            shirakawa: t,
                            tajimi: t,
                            takayama: t,
                            tarui: t,
                            toki: t,
                            tomika: t,
                            wanouchi: t,
                            yamagata: t,
                            yaotsu: t,
                            yoro: t
                        }
                    ],
                    gunma: [
                        1,
                        {
                            annaka: t,
                            chiyoda: t,
                            fujioka: t,
                            higashiagatsuma: t,
                            isesaki: t,
                            itakura: t,
                            kanna: t,
                            kanra: t,
                            katashina: t,
                            kawaba: t,
                            kiryu: t,
                            kusatsu: t,
                            maebashi: t,
                            meiwa: t,
                            midori: t,
                            minakami: t,
                            naganohara: t,
                            nakanojo: t,
                            nanmoku: t,
                            numata: t,
                            oizumi: t,
                            ora: t,
                            ota: t,
                            shibukawa: t,
                            shimonita: t,
                            shinto: t,
                            showa: t,
                            takasaki: t,
                            takayama: t,
                            tamamura: t,
                            tatebayashi: t,
                            tomioka: t,
                            tsukiyono: t,
                            tsumagoi: t,
                            ueno: t,
                            yoshioka: t
                        }
                    ],
                    hiroshima: [
                        1,
                        {
                            asaminami: t,
                            daiwa: t,
                            etajima: t,
                            fuchu: t,
                            fukuyama: t,
                            hatsukaichi: t,
                            higashihiroshima: t,
                            hongo: t,
                            jinsekikogen: t,
                            kaita: t,
                            kui: t,
                            kumano: t,
                            kure: t,
                            mihara: t,
                            miyoshi: t,
                            naka: t,
                            onomichi: t,
                            osakikamijima: t,
                            otake: t,
                            saka: t,
                            sera: t,
                            seranishi: t,
                            shinichi: t,
                            shobara: t,
                            takehara: t
                        }
                    ],
                    hokkaido: [
                        1,
                        {
                            abashiri: t,
                            abira: t,
                            aibetsu: t,
                            akabira: t,
                            akkeshi: t,
                            asahikawa: t,
                            ashibetsu: t,
                            ashoro: t,
                            assabu: t,
                            atsuma: t,
                            bibai: t,
                            biei: t,
                            bifuka: t,
                            bihoro: t,
                            biratori: t,
                            chippubetsu: t,
                            chitose: t,
                            date: t,
                            ebetsu: t,
                            embetsu: t,
                            eniwa: t,
                            erimo: t,
                            esan: t,
                            esashi: t,
                            fukagawa: t,
                            fukushima: t,
                            furano: t,
                            furubira: t,
                            haboro: t,
                            hakodate: t,
                            hamatonbetsu: t,
                            hidaka: t,
                            higashikagura: t,
                            higashikawa: t,
                            hiroo: t,
                            hokuryu: t,
                            hokuto: t,
                            honbetsu: t,
                            horokanai: t,
                            horonobe: t,
                            ikeda: t,
                            imakane: t,
                            ishikari: t,
                            iwamizawa: t,
                            iwanai: t,
                            kamifurano: t,
                            kamikawa: t,
                            kamishihoro: t,
                            kamisunagawa: t,
                            kamoenai: t,
                            kayabe: t,
                            kembuchi: t,
                            kikonai: t,
                            kimobetsu: t,
                            kitahiroshima: t,
                            kitami: t,
                            kiyosato: t,
                            koshimizu: t,
                            kunneppu: t,
                            kuriyama: t,
                            kuromatsunai: t,
                            kushiro: t,
                            kutchan: t,
                            kyowa: t,
                            mashike: t,
                            matsumae: t,
                            mikasa: t,
                            minamifurano: t,
                            mombetsu: t,
                            moseushi: t,
                            mukawa: t,
                            muroran: t,
                            naie: t,
                            nakagawa: t,
                            nakasatsunai: t,
                            nakatombetsu: t,
                            nanae: t,
                            nanporo: t,
                            nayoro: t,
                            nemuro: t,
                            niikappu: t,
                            niki: t,
                            nishiokoppe: t,
                            noboribetsu: t,
                            numata: t,
                            obihiro: t,
                            obira: t,
                            oketo: t,
                            okoppe: t,
                            otaru: t,
                            otobe: t,
                            otofuke: t,
                            otoineppu: t,
                            oumu: t,
                            ozora: t,
                            pippu: t,
                            rankoshi: t,
                            rebun: t,
                            rikubetsu: t,
                            rishiri: t,
                            rishirifuji: t,
                            saroma: t,
                            sarufutsu: t,
                            shakotan: t,
                            shari: t,
                            shibecha: t,
                            shibetsu: t,
                            shikabe: t,
                            shikaoi: t,
                            shimamaki: t,
                            shimizu: t,
                            shimokawa: t,
                            shinshinotsu: t,
                            shintoku: t,
                            shiranuka: t,
                            shiraoi: t,
                            shiriuchi: t,
                            sobetsu: t,
                            sunagawa: t,
                            taiki: t,
                            takasu: t,
                            takikawa: t,
                            takinoue: t,
                            teshikaga: t,
                            tobetsu: t,
                            tohma: t,
                            tomakomai: t,
                            tomari: t,
                            toya: t,
                            toyako: t,
                            toyotomi: t,
                            toyoura: t,
                            tsubetsu: t,
                            tsukigata: t,
                            urakawa: t,
                            urausu: t,
                            uryu: t,
                            utashinai: t,
                            wakkanai: t,
                            wassamu: t,
                            yakumo: t,
                            yoichi: t
                        }
                    ],
                    hyogo: [
                        1,
                        {
                            aioi: t,
                            akashi: t,
                            ako: t,
                            amagasaki: t,
                            aogaki: t,
                            asago: t,
                            ashiya: t,
                            awaji: t,
                            fukusaki: t,
                            goshiki: t,
                            harima: t,
                            himeji: t,
                            ichikawa: t,
                            inagawa: t,
                            itami: t,
                            kakogawa: t,
                            kamigori: t,
                            kamikawa: t,
                            kasai: t,
                            kasuga: t,
                            kawanishi: t,
                            miki: t,
                            minamiawaji: t,
                            nishinomiya: t,
                            nishiwaki: t,
                            ono: t,
                            sanda: t,
                            sannan: t,
                            sasayama: t,
                            sayo: t,
                            shingu: t,
                            shinonsen: t,
                            shiso: t,
                            sumoto: t,
                            taishi: t,
                            taka: t,
                            takarazuka: t,
                            takasago: t,
                            takino: t,
                            tamba: t,
                            tatsuno: t,
                            toyooka: t,
                            yabu: t,
                            yashiro: t,
                            yoka: t,
                            yokawa: t
                        }
                    ],
                    ibaraki: [
                        1,
                        {
                            ami: t,
                            asahi: t,
                            bando: t,
                            chikusei: t,
                            daigo: t,
                            fujishiro: t,
                            hitachi: t,
                            hitachinaka: t,
                            hitachiomiya: t,
                            hitachiota: t,
                            ibaraki: t,
                            ina: t,
                            inashiki: t,
                            itako: t,
                            iwama: t,
                            joso: t,
                            kamisu: t,
                            kasama: t,
                            kashima: t,
                            kasumigaura: t,
                            koga: t,
                            miho: t,
                            mito: t,
                            moriya: t,
                            naka: t,
                            namegata: t,
                            oarai: t,
                            ogawa: t,
                            omitama: t,
                            ryugasaki: t,
                            sakai: t,
                            sakuragawa: t,
                            shimodate: t,
                            shimotsuma: t,
                            shirosato: t,
                            sowa: t,
                            suifu: t,
                            takahagi: t,
                            tamatsukuri: t,
                            tokai: t,
                            tomobe: t,
                            tone: t,
                            toride: t,
                            tsuchiura: t,
                            tsukuba: t,
                            uchihara: t,
                            ushiku: t,
                            yachiyo: t,
                            yamagata: t,
                            yawara: t,
                            yuki: t
                        }
                    ],
                    ishikawa: [
                        1,
                        {
                            anamizu: t,
                            hakui: t,
                            hakusan: t,
                            kaga: t,
                            kahoku: t,
                            kanazawa: t,
                            kawakita: t,
                            komatsu: t,
                            nakanoto: t,
                            nanao: t,
                            nomi: t,
                            nonoichi: t,
                            noto: t,
                            shika: t,
                            suzu: t,
                            tsubata: t,
                            tsurugi: t,
                            uchinada: t,
                            wajima: t
                        }
                    ],
                    iwate: [
                        1,
                        {
                            fudai: t,
                            fujisawa: t,
                            hanamaki: t,
                            hiraizumi: t,
                            hirono: t,
                            ichinohe: t,
                            ichinoseki: t,
                            iwaizumi: t,
                            iwate: t,
                            joboji: t,
                            kamaishi: t,
                            kanegasaki: t,
                            karumai: t,
                            kawai: t,
                            kitakami: t,
                            kuji: t,
                            kunohe: t,
                            kuzumaki: t,
                            miyako: t,
                            mizusawa: t,
                            morioka: t,
                            ninohe: t,
                            noda: t,
                            ofunato: t,
                            oshu: t,
                            otsuchi: t,
                            rikuzentakata: t,
                            shiwa: t,
                            shizukuishi: t,
                            sumita: t,
                            tanohata: t,
                            tono: t,
                            yahaba: t,
                            yamada: t
                        }
                    ],
                    kagawa: [
                        1,
                        {
                            ayagawa: t,
                            higashikagawa: t,
                            kanonji: t,
                            kotohira: t,
                            manno: t,
                            marugame: t,
                            mitoyo: t,
                            naoshima: t,
                            sanuki: t,
                            tadotsu: t,
                            takamatsu: t,
                            tonosho: t,
                            uchinomi: t,
                            utazu: t,
                            zentsuji: t
                        }
                    ],
                    kagoshima: [
                        1,
                        {
                            akune: t,
                            amami: t,
                            hioki: t,
                            isa: t,
                            isen: t,
                            izumi: t,
                            kagoshima: t,
                            kanoya: t,
                            kawanabe: t,
                            kinko: t,
                            kouyama: t,
                            makurazaki: t,
                            matsumoto: t,
                            minamitane: t,
                            nakatane: t,
                            nishinoomote: t,
                            satsumasendai: t,
                            soo: t,
                            tarumizu: t,
                            yusui: t
                        }
                    ],
                    kanagawa: [
                        1,
                        {
                            aikawa: t,
                            atsugi: t,
                            ayase: t,
                            chigasaki: t,
                            ebina: t,
                            fujisawa: t,
                            hadano: t,
                            hakone: t,
                            hiratsuka: t,
                            isehara: t,
                            kaisei: t,
                            kamakura: t,
                            kiyokawa: t,
                            matsuda: t,
                            minamiashigara: t,
                            miura: t,
                            nakai: t,
                            ninomiya: t,
                            odawara: t,
                            oi: t,
                            oiso: t,
                            sagamihara: t,
                            samukawa: t,
                            tsukui: t,
                            yamakita: t,
                            yamato: t,
                            yokosuka: t,
                            yugawara: t,
                            zama: t,
                            zushi: t
                        }
                    ],
                    kochi: [
                        1,
                        {
                            aki: t,
                            geisei: t,
                            hidaka: t,
                            higashitsuno: t,
                            ino: t,
                            kagami: t,
                            kami: t,
                            kitagawa: t,
                            kochi: t,
                            mihara: t,
                            motoyama: t,
                            muroto: t,
                            nahari: t,
                            nakamura: t,
                            nankoku: t,
                            nishitosa: t,
                            niyodogawa: t,
                            ochi: t,
                            okawa: t,
                            otoyo: t,
                            otsuki: t,
                            sakawa: t,
                            sukumo: t,
                            susaki: t,
                            tosa: t,
                            tosashimizu: t,
                            toyo: t,
                            tsuno: t,
                            umaji: t,
                            yasuda: t,
                            yusuhara: t
                        }
                    ],
                    kumamoto: [
                        1,
                        {
                            amakusa: t,
                            arao: t,
                            aso: t,
                            choyo: t,
                            gyokuto: t,
                            kamiamakusa: t,
                            kikuchi: t,
                            kumamoto: t,
                            mashiki: t,
                            mifune: t,
                            minamata: t,
                            minamioguni: t,
                            nagasu: t,
                            nishihara: t,
                            oguni: t,
                            ozu: t,
                            sumoto: t,
                            takamori: t,
                            uki: t,
                            uto: t,
                            yamaga: t,
                            yamato: t,
                            yatsushiro: t
                        }
                    ],
                    kyoto: [
                        1,
                        {
                            ayabe: t,
                            fukuchiyama: t,
                            higashiyama: t,
                            ide: t,
                            ine: t,
                            joyo: t,
                            kameoka: t,
                            kamo: t,
                            kita: t,
                            kizu: t,
                            kumiyama: t,
                            kyotamba: t,
                            kyotanabe: t,
                            kyotango: t,
                            maizuru: t,
                            minami: t,
                            minamiyamashiro: t,
                            miyazu: t,
                            muko: t,
                            nagaokakyo: t,
                            nakagyo: t,
                            nantan: t,
                            oyamazaki: t,
                            sakyo: t,
                            seika: t,
                            tanabe: t,
                            uji: t,
                            ujitawara: t,
                            wazuka: t,
                            yamashina: t,
                            yawata: t
                        }
                    ],
                    mie: [
                        1,
                        {
                            asahi: t,
                            inabe: t,
                            ise: t,
                            kameyama: t,
                            kawagoe: t,
                            kiho: t,
                            kisosaki: t,
                            kiwa: t,
                            komono: t,
                            kumano: t,
                            kuwana: t,
                            matsusaka: t,
                            meiwa: t,
                            mihama: t,
                            minamiise: t,
                            misugi: t,
                            miyama: t,
                            nabari: t,
                            shima: t,
                            suzuka: t,
                            tado: t,
                            taiki: t,
                            taki: t,
                            tamaki: t,
                            toba: t,
                            tsu: t,
                            udono: t,
                            ureshino: t,
                            watarai: t,
                            yokkaichi: t
                        }
                    ],
                    miyagi: [
                        1,
                        {
                            furukawa: t,
                            higashimatsushima: t,
                            ishinomaki: t,
                            iwanuma: t,
                            kakuda: t,
                            kami: t,
                            kawasaki: t,
                            marumori: t,
                            matsushima: t,
                            minamisanriku: t,
                            misato: t,
                            murata: t,
                            natori: t,
                            ogawara: t,
                            ohira: t,
                            onagawa: t,
                            osaki: t,
                            rifu: t,
                            semine: t,
                            shibata: t,
                            shichikashuku: t,
                            shikama: t,
                            shiogama: t,
                            shiroishi: t,
                            tagajo: t,
                            taiwa: t,
                            tome: t,
                            tomiya: t,
                            wakuya: t,
                            watari: t,
                            yamamoto: t,
                            zao: t
                        }
                    ],
                    miyazaki: [
                        1,
                        {
                            aya: t,
                            ebino: t,
                            gokase: t,
                            hyuga: t,
                            kadogawa: t,
                            kawaminami: t,
                            kijo: t,
                            kitagawa: t,
                            kitakata: t,
                            kitaura: t,
                            kobayashi: t,
                            kunitomi: t,
                            kushima: t,
                            mimata: t,
                            miyakonojo: t,
                            miyazaki: t,
                            morotsuka: t,
                            nichinan: t,
                            nishimera: t,
                            nobeoka: t,
                            saito: t,
                            shiiba: t,
                            shintomi: t,
                            takaharu: t,
                            takanabe: t,
                            takazaki: t,
                            tsuno: t
                        }
                    ],
                    nagano: [
                        1,
                        {
                            achi: t,
                            agematsu: t,
                            anan: t,
                            aoki: t,
                            asahi: t,
                            azumino: t,
                            chikuhoku: t,
                            chikuma: t,
                            chino: t,
                            fujimi: t,
                            hakuba: t,
                            hara: t,
                            hiraya: t,
                            iida: t,
                            iijima: t,
                            iiyama: t,
                            iizuna: t,
                            ikeda: t,
                            ikusaka: t,
                            ina: t,
                            karuizawa: t,
                            kawakami: t,
                            kiso: t,
                            kisofukushima: t,
                            kitaaiki: t,
                            komagane: t,
                            komoro: t,
                            matsukawa: t,
                            matsumoto: t,
                            miasa: t,
                            minamiaiki: t,
                            minamimaki: t,
                            minamiminowa: t,
                            minowa: t,
                            miyada: t,
                            miyota: t,
                            mochizuki: t,
                            nagano: t,
                            nagawa: t,
                            nagiso: t,
                            nakagawa: t,
                            nakano: t,
                            nozawaonsen: t,
                            obuse: t,
                            ogawa: t,
                            okaya: t,
                            omachi: t,
                            omi: t,
                            ookuwa: t,
                            ooshika: t,
                            otaki: t,
                            otari: t,
                            sakae: t,
                            sakaki: t,
                            saku: t,
                            sakuho: t,
                            shimosuwa: t,
                            shinanomachi: t,
                            shiojiri: t,
                            suwa: t,
                            suzaka: t,
                            takagi: t,
                            takamori: t,
                            takayama: t,
                            tateshina: t,
                            tatsuno: t,
                            togakushi: t,
                            togura: t,
                            tomi: t,
                            ueda: t,
                            wada: t,
                            yamagata: t,
                            yamanouchi: t,
                            yasaka: t,
                            yasuoka: t
                        }
                    ],
                    nagasaki: [
                        1,
                        {
                            chijiwa: t,
                            futsu: t,
                            goto: t,
                            hasami: t,
                            hirado: t,
                            iki: t,
                            isahaya: t,
                            kawatana: t,
                            kuchinotsu: t,
                            matsuura: t,
                            nagasaki: t,
                            obama: t,
                            omura: t,
                            oseto: t,
                            saikai: t,
                            sasebo: t,
                            seihi: t,
                            shimabara: t,
                            shinkamigoto: t,
                            togitsu: t,
                            tsushima: t,
                            unzen: t
                        }
                    ],
                    nara: [
                        1,
                        {
                            ando: t,
                            gose: t,
                            heguri: t,
                            higashiyoshino: t,
                            ikaruga: t,
                            ikoma: t,
                            kamikitayama: t,
                            kanmaki: t,
                            kashiba: t,
                            kashihara: t,
                            katsuragi: t,
                            kawai: t,
                            kawakami: t,
                            kawanishi: t,
                            koryo: t,
                            kurotaki: t,
                            mitsue: t,
                            miyake: t,
                            nara: t,
                            nosegawa: t,
                            oji: t,
                            ouda: t,
                            oyodo: t,
                            sakurai: t,
                            sango: t,
                            shimoichi: t,
                            shimokitayama: t,
                            shinjo: t,
                            soni: t,
                            takatori: t,
                            tawaramoto: t,
                            tenkawa: t,
                            tenri: t,
                            uda: t,
                            yamatokoriyama: t,
                            yamatotakada: t,
                            yamazoe: t,
                            yoshino: t
                        }
                    ],
                    niigata: [
                        1,
                        {
                            aga: t,
                            agano: t,
                            gosen: t,
                            itoigawa: t,
                            izumozaki: t,
                            joetsu: t,
                            kamo: t,
                            kariwa: t,
                            kashiwazaki: t,
                            minamiuonuma: t,
                            mitsuke: t,
                            muika: t,
                            murakami: t,
                            myoko: t,
                            nagaoka: t,
                            niigata: t,
                            ojiya: t,
                            omi: t,
                            sado: t,
                            sanjo: t,
                            seiro: t,
                            seirou: t,
                            sekikawa: t,
                            shibata: t,
                            tagami: t,
                            tainai: t,
                            tochio: t,
                            tokamachi: t,
                            tsubame: t,
                            tsunan: t,
                            uonuma: t,
                            yahiko: t,
                            yoita: t,
                            yuzawa: t
                        }
                    ],
                    oita: [
                        1,
                        {
                            beppu: t,
                            bungoono: t,
                            bungotakada: t,
                            hasama: t,
                            hiji: t,
                            himeshima: t,
                            hita: t,
                            kamitsue: t,
                            kokonoe: t,
                            kuju: t,
                            kunisaki: t,
                            kusu: t,
                            oita: t,
                            saiki: t,
                            taketa: t,
                            tsukumi: t,
                            usa: t,
                            usuki: t,
                            yufu: t
                        }
                    ],
                    okayama: [
                        1,
                        {
                            akaiwa: t,
                            asakuchi: t,
                            bizen: t,
                            hayashima: t,
                            ibara: t,
                            kagamino: t,
                            kasaoka: t,
                            kibichuo: t,
                            kumenan: t,
                            kurashiki: t,
                            maniwa: t,
                            misaki: t,
                            nagi: t,
                            niimi: t,
                            nishiawakura: t,
                            okayama: t,
                            satosho: t,
                            setouchi: t,
                            shinjo: t,
                            shoo: t,
                            soja: t,
                            takahashi: t,
                            tamano: t,
                            tsuyama: t,
                            wake: t,
                            yakage: t
                        }
                    ],
                    okinawa: [
                        1,
                        {
                            aguni: t,
                            ginowan: t,
                            ginoza: t,
                            gushikami: t,
                            haebaru: t,
                            higashi: t,
                            hirara: t,
                            iheya: t,
                            ishigaki: t,
                            ishikawa: t,
                            itoman: t,
                            izena: t,
                            kadena: t,
                            kin: t,
                            kitadaito: t,
                            kitanakagusuku: t,
                            kumejima: t,
                            kunigami: t,
                            minamidaito: t,
                            motobu: t,
                            nago: t,
                            naha: t,
                            nakagusuku: t,
                            nakijin: t,
                            nanjo: t,
                            nishihara: t,
                            ogimi: t,
                            okinawa: t,
                            onna: t,
                            shimoji: t,
                            taketomi: t,
                            tarama: t,
                            tokashiki: t,
                            tomigusuku: t,
                            tonaki: t,
                            urasoe: t,
                            uruma: t,
                            yaese: t,
                            yomitan: t,
                            yonabaru: t,
                            yonaguni: t,
                            zamami: t
                        }
                    ],
                    osaka: [
                        1,
                        {
                            abeno: t,
                            chihayaakasaka: t,
                            chuo: t,
                            daito: t,
                            fujiidera: t,
                            habikino: t,
                            hannan: t,
                            higashiosaka: t,
                            higashisumiyoshi: t,
                            higashiyodogawa: t,
                            hirakata: t,
                            ibaraki: t,
                            ikeda: t,
                            izumi: t,
                            izumiotsu: t,
                            izumisano: t,
                            kadoma: t,
                            kaizuka: t,
                            kanan: t,
                            kashiwara: t,
                            katano: t,
                            kawachinagano: t,
                            kishiwada: t,
                            kita: t,
                            kumatori: t,
                            matsubara: t,
                            minato: t,
                            minoh: t,
                            misaki: t,
                            moriguchi: t,
                            neyagawa: t,
                            nishi: t,
                            nose: t,
                            osakasayama: t,
                            sakai: t,
                            sayama: t,
                            sennan: t,
                            settsu: t,
                            shijonawate: t,
                            shimamoto: t,
                            suita: t,
                            tadaoka: t,
                            taishi: t,
                            tajiri: t,
                            takaishi: t,
                            takatsuki: t,
                            tondabayashi: t,
                            toyonaka: t,
                            toyono: t,
                            yao: t
                        }
                    ],
                    saga: [
                        1,
                        {
                            ariake: t,
                            arita: t,
                            fukudomi: t,
                            genkai: t,
                            hamatama: t,
                            hizen: t,
                            imari: t,
                            kamimine: t,
                            kanzaki: t,
                            karatsu: t,
                            kashima: t,
                            kitagata: t,
                            kitahata: t,
                            kiyama: t,
                            kouhoku: t,
                            kyuragi: t,
                            nishiarita: t,
                            ogi: t,
                            omachi: t,
                            ouchi: t,
                            saga: t,
                            shiroishi: t,
                            taku: t,
                            tara: t,
                            tosu: t,
                            yoshinogari: t
                        }
                    ],
                    saitama: [
                        1,
                        {
                            arakawa: t,
                            asaka: t,
                            chichibu: t,
                            fujimi: t,
                            fujimino: t,
                            fukaya: t,
                            hanno: t,
                            hanyu: t,
                            hasuda: t,
                            hatogaya: t,
                            hatoyama: t,
                            hidaka: t,
                            higashichichibu: t,
                            higashimatsuyama: t,
                            honjo: t,
                            ina: t,
                            iruma: t,
                            iwatsuki: t,
                            kamiizumi: t,
                            kamikawa: t,
                            kamisato: t,
                            kasukabe: t,
                            kawagoe: t,
                            kawaguchi: t,
                            kawajima: t,
                            kazo: t,
                            kitamoto: t,
                            koshigaya: t,
                            kounosu: t,
                            kuki: t,
                            kumagaya: t,
                            matsubushi: t,
                            minano: t,
                            misato: t,
                            miyashiro: t,
                            miyoshi: t,
                            moroyama: t,
                            nagatoro: t,
                            namegawa: t,
                            niiza: t,
                            ogano: t,
                            ogawa: t,
                            ogose: t,
                            okegawa: t,
                            omiya: t,
                            otaki: t,
                            ranzan: t,
                            ryokami: t,
                            saitama: t,
                            sakado: t,
                            satte: t,
                            sayama: t,
                            shiki: t,
                            shiraoka: t,
                            soka: t,
                            sugito: t,
                            toda: t,
                            tokigawa: t,
                            tokorozawa: t,
                            tsurugashima: t,
                            urawa: t,
                            warabi: t,
                            yashio: t,
                            yokoze: t,
                            yono: t,
                            yorii: t,
                            yoshida: t,
                            yoshikawa: t,
                            yoshimi: t
                        }
                    ],
                    shiga: [
                        1,
                        {
                            aisho: t,
                            gamo: t,
                            higashiomi: t,
                            hikone: t,
                            koka: t,
                            konan: t,
                            kosei: t,
                            koto: t,
                            kusatsu: t,
                            maibara: t,
                            moriyama: t,
                            nagahama: t,
                            nishiazai: t,
                            notogawa: t,
                            omihachiman: t,
                            otsu: t,
                            ritto: t,
                            ryuoh: t,
                            takashima: t,
                            takatsuki: t,
                            torahime: t,
                            toyosato: t,
                            yasu: t
                        }
                    ],
                    shimane: [
                        1,
                        {
                            akagi: t,
                            ama: t,
                            gotsu: t,
                            hamada: t,
                            higashiizumo: t,
                            hikawa: t,
                            hikimi: t,
                            izumo: t,
                            kakinoki: t,
                            masuda: t,
                            matsue: t,
                            misato: t,
                            nishinoshima: t,
                            ohda: t,
                            okinoshima: t,
                            okuizumo: t,
                            shimane: t,
                            tamayu: t,
                            tsuwano: t,
                            unnan: t,
                            yakumo: t,
                            yasugi: t,
                            yatsuka: t
                        }
                    ],
                    shizuoka: [
                        1,
                        {
                            arai: t,
                            atami: t,
                            fuji: t,
                            fujieda: t,
                            fujikawa: t,
                            fujinomiya: t,
                            fukuroi: t,
                            gotemba: t,
                            haibara: t,
                            hamamatsu: t,
                            higashiizu: t,
                            ito: t,
                            iwata: t,
                            izu: t,
                            izunokuni: t,
                            kakegawa: t,
                            kannami: t,
                            kawanehon: t,
                            kawazu: t,
                            kikugawa: t,
                            kosai: t,
                            makinohara: t,
                            matsuzaki: t,
                            minamiizu: t,
                            mishima: t,
                            morimachi: t,
                            nishiizu: t,
                            numazu: t,
                            omaezaki: t,
                            shimada: t,
                            shimizu: t,
                            shimoda: t,
                            shizuoka: t,
                            susono: t,
                            yaizu: t,
                            yoshida: t
                        }
                    ],
                    tochigi: [
                        1,
                        {
                            ashikaga: t,
                            bato: t,
                            haga: t,
                            ichikai: t,
                            iwafune: t,
                            kaminokawa: t,
                            kanuma: t,
                            karasuyama: t,
                            kuroiso: t,
                            mashiko: t,
                            mibu: t,
                            moka: t,
                            motegi: t,
                            nasu: t,
                            nasushiobara: t,
                            nikko: t,
                            nishikata: t,
                            nogi: t,
                            ohira: t,
                            ohtawara: t,
                            oyama: t,
                            sakura: t,
                            sano: t,
                            shimotsuke: t,
                            shioya: t,
                            takanezawa: t,
                            tochigi: t,
                            tsuga: t,
                            ujiie: t,
                            utsunomiya: t,
                            yaita: t
                        }
                    ],
                    tokushima: [
                        1,
                        {
                            aizumi: t,
                            anan: t,
                            ichiba: t,
                            itano: t,
                            kainan: t,
                            komatsushima: t,
                            matsushige: t,
                            mima: t,
                            minami: t,
                            miyoshi: t,
                            mugi: t,
                            nakagawa: t,
                            naruto: t,
                            sanagochi: t,
                            shishikui: t,
                            tokushima: t,
                            wajiki: t
                        }
                    ],
                    tokyo: [
                        1,
                        {
                            adachi: t,
                            akiruno: t,
                            akishima: t,
                            aogashima: t,
                            arakawa: t,
                            bunkyo: t,
                            chiyoda: t,
                            chofu: t,
                            chuo: t,
                            edogawa: t,
                            fuchu: t,
                            fussa: t,
                            hachijo: t,
                            hachioji: t,
                            hamura: t,
                            higashikurume: t,
                            higashimurayama: t,
                            higashiyamato: t,
                            hino: t,
                            hinode: t,
                            hinohara: t,
                            inagi: t,
                            itabashi: t,
                            katsushika: t,
                            kita: t,
                            kiyose: t,
                            kodaira: t,
                            koganei: t,
                            kokubunji: t,
                            komae: t,
                            koto: t,
                            kouzushima: t,
                            kunitachi: t,
                            machida: t,
                            meguro: t,
                            minato: t,
                            mitaka: t,
                            mizuho: t,
                            musashimurayama: t,
                            musashino: t,
                            nakano: t,
                            nerima: t,
                            ogasawara: t,
                            okutama: t,
                            ome: t,
                            oshima: t,
                            ota: t,
                            setagaya: t,
                            shibuya: t,
                            shinagawa: t,
                            shinjuku: t,
                            suginami: t,
                            sumida: t,
                            tachikawa: t,
                            taito: t,
                            tama: t,
                            toshima: t
                        }
                    ],
                    tottori: [
                        1,
                        {
                            chizu: t,
                            hino: t,
                            kawahara: t,
                            koge: t,
                            kotoura: t,
                            misasa: t,
                            nanbu: t,
                            nichinan: t,
                            sakaiminato: t,
                            tottori: t,
                            wakasa: t,
                            yazu: t,
                            yonago: t
                        }
                    ],
                    toyama: [
                        1,
                        {
                            asahi: t,
                            fuchu: t,
                            fukumitsu: t,
                            funahashi: t,
                            himi: t,
                            imizu: t,
                            inami: t,
                            johana: t,
                            kamiichi: t,
                            kurobe: t,
                            nakaniikawa: t,
                            namerikawa: t,
                            nanto: t,
                            nyuzen: t,
                            oyabe: t,
                            taira: t,
                            takaoka: t,
                            tateyama: t,
                            toga: t,
                            tonami: t,
                            toyama: t,
                            unazuki: t,
                            uozu: t,
                            yamada: t
                        }
                    ],
                    wakayama: [
                        1,
                        {
                            arida: t,
                            aridagawa: t,
                            gobo: t,
                            hashimoto: t,
                            hidaka: t,
                            hirogawa: t,
                            inami: t,
                            iwade: t,
                            kainan: t,
                            kamitonda: t,
                            katsuragi: t,
                            kimino: t,
                            kinokawa: t,
                            kitayama: t,
                            koya: t,
                            koza: t,
                            kozagawa: t,
                            kudoyama: t,
                            kushimoto: t,
                            mihama: t,
                            misato: t,
                            nachikatsuura: t,
                            shingu: t,
                            shirahama: t,
                            taiji: t,
                            tanabe: t,
                            wakayama: t,
                            yuasa: t,
                            yura: t
                        }
                    ],
                    yamagata: [
                        1,
                        {
                            asahi: t,
                            funagata: t,
                            higashine: t,
                            iide: t,
                            kahoku: t,
                            kaminoyama: t,
                            kaneyama: t,
                            kawanishi: t,
                            mamurogawa: t,
                            mikawa: t,
                            murayama: t,
                            nagai: t,
                            nakayama: t,
                            nanyo: t,
                            nishikawa: t,
                            obanazawa: t,
                            oe: t,
                            oguni: t,
                            ohkura: t,
                            oishida: t,
                            sagae: t,
                            sakata: t,
                            sakegawa: t,
                            shinjo: t,
                            shirataka: t,
                            shonai: t,
                            takahata: t,
                            tendo: t,
                            tozawa: t,
                            tsuruoka: t,
                            yamagata: t,
                            yamanobe: t,
                            yonezawa: t,
                            yuza: t
                        }
                    ],
                    yamaguchi: [
                        1,
                        {
                            abu: t,
                            hagi: t,
                            hikari: t,
                            hofu: t,
                            iwakuni: t,
                            kudamatsu: t,
                            mitou: t,
                            nagato: t,
                            oshima: t,
                            shimonoseki: t,
                            shunan: t,
                            tabuse: t,
                            tokuyama: t,
                            toyota: t,
                            ube: t,
                            yuu: t
                        }
                    ],
                    yamanashi: [
                        1,
                        {
                            chuo: t,
                            doshi: t,
                            fuefuki: t,
                            fujikawa: t,
                            fujikawaguchiko: t,
                            fujiyoshida: t,
                            hayakawa: t,
                            hokuto: t,
                            ichikawamisato: t,
                            kai: t,
                            kofu: t,
                            koshu: t,
                            kosuge: t,
                            "minami-alps": t,
                            minobu: t,
                            nakamichi: t,
                            nanbu: t,
                            narusawa: t,
                            nirasaki: t,
                            nishikatsura: t,
                            oshino: t,
                            otsuki: t,
                            showa: t,
                            tabayama: t,
                            tsuru: t,
                            uenohara: t,
                            yamanakako: t,
                            yamanashi: t
                        }
                    ],
                    "xn--ehqz56n": t,
                    三重: t,
                    "xn--1lqs03n": t,
                    京都: t,
                    "xn--qqqt11m": t,
                    佐賀: t,
                    "xn--f6qx53a": t,
                    兵庫: t,
                    "xn--djrs72d6uy": t,
                    北海道: t,
                    "xn--mkru45i": t,
                    千葉: t,
                    "xn--0trq7p7nn": t,
                    和歌山: t,
                    "xn--5js045d": t,
                    埼玉: t,
                    "xn--kbrq7o": t,
                    大分: t,
                    "xn--pssu33l": t,
                    大阪: t,
                    "xn--ntsq17g": t,
                    奈良: t,
                    "xn--uisz3g": t,
                    宮城: t,
                    "xn--6btw5a": t,
                    宮崎: t,
                    "xn--1ctwo": t,
                    富山: t,
                    "xn--6orx2r": t,
                    山口: t,
                    "xn--rht61e": t,
                    山形: t,
                    "xn--rht27z": t,
                    山梨: t,
                    "xn--nit225k": t,
                    岐阜: t,
                    "xn--rht3d": t,
                    岡山: t,
                    "xn--djty4k": t,
                    岩手: t,
                    "xn--klty5x": t,
                    島根: t,
                    "xn--kltx9a": t,
                    広島: t,
                    "xn--kltp7d": t,
                    徳島: t,
                    "xn--c3s14m": t,
                    愛媛: t,
                    "xn--vgu402c": t,
                    愛知: t,
                    "xn--efvn9s": t,
                    新潟: t,
                    "xn--1lqs71d": t,
                    東京: t,
                    "xn--4pvxs": t,
                    栃木: t,
                    "xn--uuwu58a": t,
                    沖縄: t,
                    "xn--zbx025d": t,
                    滋賀: t,
                    "xn--8pvr4u": t,
                    熊本: t,
                    "xn--5rtp49c": t,
                    石川: t,
                    "xn--ntso0iqx3a": t,
                    神奈川: t,
                    "xn--elqq16h": t,
                    福井: t,
                    "xn--4it168d": t,
                    福岡: t,
                    "xn--klt787d": t,
                    福島: t,
                    "xn--rny31h": t,
                    秋田: t,
                    "xn--7t0a264c": t,
                    群馬: t,
                    "xn--uist22h": t,
                    茨城: t,
                    "xn--8ltr62k": t,
                    長崎: t,
                    "xn--2m4a15e": t,
                    長野: t,
                    "xn--32vp30h": t,
                    青森: t,
                    "xn--4it797k": t,
                    静岡: t,
                    "xn--5rtq34k": t,
                    香川: t,
                    "xn--k7yn95e": t,
                    高知: t,
                    "xn--tor131o": t,
                    鳥取: t,
                    "xn--d5qv7z876c": t,
                    鹿児島: t,
                    kawasaki: h,
                    kitakyushu: h,
                    kobe: h,
                    nagoya: h,
                    sapporo: h,
                    sendai: h,
                    yokohama: h,
                    buyshop: e,
                    fashionstore: e,
                    handcrafted: e,
                    kawaiishop: e,
                    supersale: e,
                    theshop: e,
                    "0am": e,
                    "0g0": e,
                    "0j0": e,
                    "0t0": e,
                    mydns: e,
                    pgw: e,
                    wjg: e,
                    usercontent: e,
                    angry: e,
                    babyblue: e,
                    babymilk: e,
                    backdrop: e,
                    bambina: e,
                    bitter: e,
                    blush: e,
                    boo: e,
                    boy: e,
                    boyfriend: e,
                    but: e,
                    candypop: e,
                    capoo: e,
                    catfood: e,
                    cheap: e,
                    chicappa: e,
                    chillout: e,
                    chips: e,
                    chowder: e,
                    chu: e,
                    ciao: e,
                    cocotte: e,
                    coolblog: e,
                    cranky: e,
                    cutegirl: e,
                    daa: e,
                    deca: e,
                    deci: e,
                    digick: e,
                    egoism: e,
                    fakefur: e,
                    fem: e,
                    flier: e,
                    floppy: e,
                    fool: e,
                    frenchkiss: e,
                    girlfriend: e,
                    girly: e,
                    gloomy: e,
                    gonna: e,
                    greater: e,
                    hacca: e,
                    heavy: e,
                    her: e,
                    hiho: e,
                    hippy: e,
                    holy: e,
                    hungry: e,
                    icurus: e,
                    itigo: e,
                    jellybean: e,
                    kikirara: e,
                    kill: e,
                    kilo: e,
                    kuron: e,
                    littlestar: e,
                    lolipopmc: e,
                    lolitapunk: e,
                    lomo: e,
                    lovepop: e,
                    lovesick: e,
                    main: e,
                    mods: e,
                    mond: e,
                    mongolian: e,
                    moo: e,
                    namaste: e,
                    nikita: e,
                    nobushi: e,
                    noor: e,
                    oops: e,
                    parallel: e,
                    parasite: e,
                    pecori: e,
                    peewee: e,
                    penne: e,
                    pepper: e,
                    perma: e,
                    pigboat: e,
                    pinoko: e,
                    punyu: e,
                    pupu: e,
                    pussycat: e,
                    pya: e,
                    raindrop: e,
                    readymade: e,
                    sadist: e,
                    schoolbus: e,
                    secret: e,
                    staba: e,
                    stripper: e,
                    sub: e,
                    sunnyday: e,
                    thick: e,
                    tonkotsu: e,
                    under: e,
                    upper: e,
                    velvet: e,
                    verse: e,
                    versus: e,
                    vivian: e,
                    watson: e,
                    weblike: e,
                    whitesnow: e,
                    zombie: e,
                    hateblo: e,
                    hatenablog: e,
                    hatenadiary: e,
                    "2-d": e,
                    bona: e,
                    crap: e,
                    daynight: e,
                    eek: e,
                    flop: e,
                    halfmoon: e,
                    jeez: e,
                    matrix: e,
                    mimoza: e,
                    netgamers: e,
                    nyanta: e,
                    o0o0: e,
                    rdy: e,
                    rgr: e,
                    rulez: e,
                    sakurastorage: [
                        0,
                        {
                            isk01: j,
                            isk02: j
                        }
                    ],
                    saloon: e,
                    sblo: e,
                    skr: e,
                    tank: e,
                    "uh-oh": e,
                    undo: e,
                    webaccel: [
                        0,
                        {
                            rs: e,
                            user: e
                        }
                    ],
                    websozai: e,
                    xii: e
                }
            ],
            ke: [
                1,
                {
                    ac: t,
                    co: t,
                    go: t,
                    info: t,
                    me: t,
                    mobi: t,
                    ne: t,
                    or: t,
                    sc: t
                }
            ],
            kg: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    us: e
                }
            ],
            kh: h,
            ki: X,
            km: [
                1,
                {
                    ass: t,
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    nom: t,
                    org: t,
                    prd: t,
                    tm: t,
                    asso: t,
                    coop: t,
                    gouv: t,
                    medecin: t,
                    notaires: t,
                    pharmaciens: t,
                    presse: t,
                    veterinaire: t
                }
            ],
            kn: [
                1,
                {
                    edu: t,
                    gov: t,
                    net: t,
                    org: t
                }
            ],
            kp: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    org: t,
                    rep: t,
                    tra: t
                }
            ],
            kr: [
                1,
                {
                    ac: t,
                    ai: t,
                    co: t,
                    es: t,
                    go: t,
                    hs: t,
                    io: t,
                    it: t,
                    kg: t,
                    me: t,
                    mil: t,
                    ms: t,
                    ne: t,
                    or: t,
                    pe: t,
                    re: t,
                    sc: t,
                    busan: t,
                    chungbuk: t,
                    chungnam: t,
                    daegu: t,
                    daejeon: t,
                    gangwon: t,
                    gwangju: t,
                    gyeongbuk: t,
                    gyeonggi: t,
                    gyeongnam: t,
                    incheon: t,
                    jeju: t,
                    jeonbuk: t,
                    jeonnam: t,
                    seoul: t,
                    ulsan: t,
                    c01: e,
                    "eliv-dns": e
                }
            ],
            kw: [
                1,
                {
                    com: t,
                    edu: t,
                    emb: t,
                    gov: t,
                    ind: t,
                    net: t,
                    org: t
                }
            ],
            ky: F,
            kz: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    jcloud: e
                }
            ],
            la: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    info: t,
                    int: t,
                    net: t,
                    org: t,
                    per: t,
                    bnr: e
                }
            ],
            lb: r,
            lc: [
                1,
                {
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    oy: e
                }
            ],
            li: t,
            lk: [
                1,
                {
                    ac: t,
                    assn: t,
                    com: t,
                    edu: t,
                    gov: t,
                    grp: t,
                    hotel: t,
                    int: t,
                    ltd: t,
                    net: t,
                    ngo: t,
                    org: t,
                    sch: t,
                    soc: t,
                    web: t
                }
            ],
            lr: r,
            ls: [
                1,
                {
                    ac: t,
                    biz: t,
                    co: t,
                    edu: t,
                    gov: t,
                    info: t,
                    net: t,
                    org: t,
                    sc: t
                }
            ],
            lt: u,
            lu: [
                1,
                {
                    "123website": e
                }
            ],
            lv: [
                1,
                {
                    asn: t,
                    com: t,
                    conf: t,
                    edu: t,
                    gov: t,
                    id: t,
                    mil: t,
                    net: t,
                    org: t
                }
            ],
            ly: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    id: t,
                    med: t,
                    net: t,
                    org: t,
                    plc: t,
                    sch: t
                }
            ],
            ma: [
                1,
                {
                    ac: t,
                    co: t,
                    gov: t,
                    net: t,
                    org: t,
                    press: t
                }
            ],
            mc: [
                1,
                {
                    asso: t,
                    tm: t
                }
            ],
            md: [
                1,
                {
                    ir: e
                }
            ],
            me: [
                1,
                {
                    ac: t,
                    co: t,
                    edu: t,
                    gov: t,
                    its: t,
                    net: t,
                    org: t,
                    priv: t,
                    c66: e,
                    craft: e,
                    edgestack: e,
                    filegear: e,
                    glitch: e,
                    "filegear-sg": e,
                    lohmus: e,
                    barsy: e,
                    mcdir: e,
                    brasilia: e,
                    ddns: e,
                    dnsfor: e,
                    hopto: e,
                    loginto: e,
                    noip: e,
                    webhop: e,
                    soundcast: e,
                    tcp4: e,
                    vp4: e,
                    diskstation: e,
                    dscloud: e,
                    i234: e,
                    myds: e,
                    synology: e,
                    transip: O,
                    nohost: e
                }
            ],
            mg: [
                1,
                {
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    nom: t,
                    org: t,
                    prd: t
                }
            ],
            mh: t,
            mil: t,
            mk: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    inf: t,
                    name: t,
                    net: t,
                    org: t
                }
            ],
            ml: [
                1,
                {
                    ac: t,
                    art: t,
                    asso: t,
                    com: t,
                    edu: t,
                    gouv: t,
                    gov: t,
                    info: t,
                    inst: t,
                    net: t,
                    org: t,
                    pr: t,
                    presse: t
                }
            ],
            mm: h,
            mn: [
                1,
                {
                    edu: t,
                    gov: t,
                    org: t,
                    nyc: e
                }
            ],
            mo: r,
            mobi: [
                1,
                {
                    barsy: e,
                    dscloud: e
                }
            ],
            mp: [
                1,
                {
                    ju: e
                }
            ],
            mq: t,
            mr: u,
            ms: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    minisite: e
                }
            ],
            mt: F,
            mu: [
                1,
                {
                    ac: t,
                    co: t,
                    com: t,
                    gov: t,
                    net: t,
                    or: t,
                    org: t
                }
            ],
            museum: t,
            mv: [
                1,
                {
                    aero: t,
                    biz: t,
                    com: t,
                    coop: t,
                    edu: t,
                    gov: t,
                    info: t,
                    int: t,
                    mil: t,
                    museum: t,
                    name: t,
                    net: t,
                    org: t,
                    pro: t
                }
            ],
            mw: [
                1,
                {
                    ac: t,
                    biz: t,
                    co: t,
                    com: t,
                    coop: t,
                    edu: t,
                    gov: t,
                    int: t,
                    net: t,
                    org: t
                }
            ],
            mx: [
                1,
                {
                    com: t,
                    edu: t,
                    gob: t,
                    net: t,
                    org: t
                }
            ],
            my: [
                1,
                {
                    biz: t,
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    name: t,
                    net: t,
                    org: t
                }
            ],
            mz: [
                1,
                {
                    ac: t,
                    adv: t,
                    co: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t
                }
            ],
            na: [
                1,
                {
                    alt: t,
                    co: t,
                    com: t,
                    gov: t,
                    net: t,
                    org: t
                }
            ],
            name: [
                1,
                {
                    her: et,
                    his: et
                }
            ],
            nc: [
                1,
                {
                    asso: t,
                    nom: t
                }
            ],
            ne: t,
            net: [
                1,
                {
                    adobeaemcloud: e,
                    "adobeio-static": e,
                    adobeioruntime: e,
                    akadns: e,
                    akamai: e,
                    "akamai-staging": e,
                    akamaiedge: e,
                    "akamaiedge-staging": e,
                    akamaihd: e,
                    "akamaihd-staging": e,
                    akamaiorigin: e,
                    "akamaiorigin-staging": e,
                    akamaized: e,
                    "akamaized-staging": e,
                    edgekey: e,
                    "edgekey-staging": e,
                    edgesuite: e,
                    "edgesuite-staging": e,
                    alwaysdata: e,
                    myamaze: e,
                    cloudfront: e,
                    appudo: e,
                    "atlassian-dev": [
                        0,
                        {
                            prod: z
                        }
                    ],
                    myfritz: e,
                    onavstack: e,
                    shopselect: e,
                    blackbaudcdn: e,
                    boomla: e,
                    bplaced: e,
                    square7: e,
                    cdn77: [
                        0,
                        {
                            r: e
                        }
                    ],
                    "cdn77-ssl": e,
                    gb: e,
                    hu: e,
                    jp: e,
                    se: e,
                    uk: e,
                    clickrising: e,
                    "ddns-ip": e,
                    "dns-cloud": e,
                    "dns-dynamic": e,
                    cloudaccess: e,
                    cloudflare: [
                        2,
                        {
                            cdn: e
                        }
                    ],
                    cloudflareanycast: z,
                    cloudflarecn: z,
                    cloudflareglobal: z,
                    ctfcloud: e,
                    "feste-ip": e,
                    "knx-server": e,
                    "static-access": e,
                    cryptonomic: s,
                    dattolocal: e,
                    mydatto: e,
                    debian: e,
                    definima: e,
                    deno: e,
                    "at-band-camp": e,
                    blogdns: e,
                    "broke-it": e,
                    buyshouses: e,
                    dnsalias: e,
                    dnsdojo: e,
                    "does-it": e,
                    dontexist: e,
                    dynalias: e,
                    dynathome: e,
                    endofinternet: e,
                    "from-az": e,
                    "from-co": e,
                    "from-la": e,
                    "from-ny": e,
                    "gets-it": e,
                    "ham-radio-op": e,
                    homeftp: e,
                    homeip: e,
                    homelinux: e,
                    homeunix: e,
                    "in-the-band": e,
                    "is-a-chef": e,
                    "is-a-geek": e,
                    "isa-geek": e,
                    "kicks-ass": e,
                    "office-on-the": e,
                    podzone: e,
                    "scrapper-site": e,
                    selfip: e,
                    "sells-it": e,
                    servebbs: e,
                    serveftp: e,
                    thruhere: e,
                    webhop: e,
                    casacam: e,
                    dynu: e,
                    dynv6: e,
                    twmail: e,
                    ru: e,
                    channelsdvr: [
                        2,
                        {
                            u: e
                        }
                    ],
                    fastly: [
                        0,
                        {
                            freetls: e,
                            map: e,
                            prod: [
                                0,
                                {
                                    a: e,
                                    global: e
                                }
                            ],
                            ssl: [
                                0,
                                {
                                    a: e,
                                    b: e,
                                    global: e
                                }
                            ]
                        }
                    ],
                    fastlylb: [
                        2,
                        {
                            map: e
                        }
                    ],
                    edgeapp: e,
                    "keyword-on": e,
                    "live-on": e,
                    "server-on": e,
                    "cdn-edges": e,
                    heteml: e,
                    cloudfunctions: e,
                    "grafana-dev": e,
                    iobb: e,
                    moonscale: e,
                    "in-dsl": e,
                    "in-vpn": e,
                    oninferno: e,
                    botdash: e,
                    "apps-1and1": e,
                    ipifony: e,
                    cloudjiffy: [
                        2,
                        {
                            "fra1-de": e,
                            "west1-us": e
                        }
                    ],
                    elastx: [
                        0,
                        {
                            "jls-sto1": e,
                            "jls-sto2": e,
                            "jls-sto3": e
                        }
                    ],
                    massivegrid: [
                        0,
                        {
                            paas: [
                                0,
                                {
                                    "fr-1": e,
                                    "lon-1": e,
                                    "lon-2": e,
                                    "ny-1": e,
                                    "ny-2": e,
                                    "sg-1": e
                                }
                            ]
                        }
                    ],
                    saveincloud: [
                        0,
                        {
                            jelastic: e,
                            "nordeste-idc": e
                        }
                    ],
                    scaleforce: L,
                    kinghost: e,
                    uni5: e,
                    krellian: e,
                    ggff: e,
                    localcert: e,
                    localhostcert: e,
                    localto: s,
                    barsy: e,
                    memset: e,
                    "azure-api": e,
                    "azure-mobile": e,
                    azureedge: e,
                    azurefd: e,
                    azurestaticapps: [
                        2,
                        {
                            1: e,
                            2: e,
                            3: e,
                            4: e,
                            5: e,
                            6: e,
                            7: e,
                            centralus: e,
                            eastasia: e,
                            eastus2: e,
                            westeurope: e,
                            westus2: e
                        }
                    ],
                    azurewebsites: e,
                    cloudapp: e,
                    trafficmanager: e,
                    windows: [
                        0,
                        {
                            core: [
                                0,
                                {
                                    blob: e
                                }
                            ],
                            servicebus: e
                        }
                    ],
                    mynetname: [
                        0,
                        {
                            sn: e
                        }
                    ],
                    routingthecloud: e,
                    bounceme: e,
                    ddns: e,
                    "eating-organic": e,
                    mydissent: e,
                    myeffect: e,
                    mymediapc: e,
                    mypsx: e,
                    mysecuritycamera: e,
                    nhlfan: e,
                    "no-ip": e,
                    pgafan: e,
                    privatizehealthinsurance: e,
                    redirectme: e,
                    serveblog: e,
                    serveminecraft: e,
                    sytes: e,
                    dnsup: e,
                    hicam: e,
                    "now-dns": e,
                    ownip: e,
                    vpndns: e,
                    cloudycluster: e,
                    ovh: [
                        0,
                        {
                            hosting: s,
                            webpaas: s
                        }
                    ],
                    rackmaze: e,
                    myradweb: e,
                    in: e,
                    "subsc-pay": e,
                    squares: e,
                    schokokeks: e,
                    "firewall-gateway": e,
                    seidat: e,
                    senseering: e,
                    siteleaf: e,
                    mafelo: e,
                    myspreadshop: e,
                    "vps-host": [
                        2,
                        {
                            jelastic: [
                                0,
                                {
                                    atl: e,
                                    njs: e,
                                    ric: e
                                }
                            ]
                        }
                    ],
                    srcf: [
                        0,
                        {
                            soc: e,
                            user: e
                        }
                    ],
                    supabase: e,
                    dsmynas: e,
                    familyds: e,
                    ts: [
                        2,
                        {
                            c: s
                        }
                    ],
                    torproject: [
                        2,
                        {
                            pages: e
                        }
                    ],
                    vusercontent: e,
                    "reserve-online": e,
                    "community-pro": e,
                    meinforum: e,
                    yandexcloud: [
                        2,
                        {
                            storage: e,
                            website: e
                        }
                    ],
                    za: e
                }
            ],
            nf: [
                1,
                {
                    arts: t,
                    com: t,
                    firm: t,
                    info: t,
                    net: t,
                    other: t,
                    per: t,
                    rec: t,
                    store: t,
                    web: t
                }
            ],
            ng: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    i: t,
                    mil: t,
                    mobi: t,
                    name: t,
                    net: t,
                    org: t,
                    sch: t,
                    biz: [
                        2,
                        {
                            co: e,
                            dl: e,
                            go: e,
                            lg: e,
                            on: e
                        }
                    ],
                    col: e,
                    firm: e,
                    gen: e,
                    ltd: e,
                    ngo: e,
                    plc: e
                }
            ],
            ni: [
                1,
                {
                    ac: t,
                    biz: t,
                    co: t,
                    com: t,
                    edu: t,
                    gob: t,
                    in: t,
                    info: t,
                    int: t,
                    mil: t,
                    net: t,
                    nom: t,
                    org: t,
                    web: t
                }
            ],
            nl: [
                1,
                {
                    co: e,
                    "hosting-cluster": e,
                    gov: e,
                    khplay: e,
                    "123website": e,
                    myspreadshop: e,
                    transurl: s,
                    cistron: e,
                    demon: e
                }
            ],
            no: [
                1,
                {
                    fhs: t,
                    folkebibl: t,
                    fylkesbibl: t,
                    idrett: t,
                    museum: t,
                    priv: t,
                    vgs: t,
                    dep: t,
                    herad: t,
                    kommune: t,
                    mil: t,
                    stat: t,
                    aa: rt,
                    ah: rt,
                    bu: rt,
                    fm: rt,
                    hl: rt,
                    hm: rt,
                    "jan-mayen": rt,
                    mr: rt,
                    nl: rt,
                    nt: rt,
                    of: rt,
                    ol: rt,
                    oslo: rt,
                    rl: rt,
                    sf: rt,
                    st: rt,
                    svalbard: rt,
                    tm: rt,
                    tr: rt,
                    va: rt,
                    vf: rt,
                    akrehamn: t,
                    "xn--krehamn-dxa": t,
                    åkrehamn: t,
                    algard: t,
                    "xn--lgrd-poac": t,
                    ålgård: t,
                    arna: t,
                    bronnoysund: t,
                    "xn--brnnysund-m8ac": t,
                    brønnøysund: t,
                    brumunddal: t,
                    bryne: t,
                    drobak: t,
                    "xn--drbak-wua": t,
                    drøbak: t,
                    egersund: t,
                    fetsund: t,
                    floro: t,
                    "xn--flor-jra": t,
                    florø: t,
                    fredrikstad: t,
                    hokksund: t,
                    honefoss: t,
                    "xn--hnefoss-q1a": t,
                    hønefoss: t,
                    jessheim: t,
                    jorpeland: t,
                    "xn--jrpeland-54a": t,
                    jørpeland: t,
                    kirkenes: t,
                    kopervik: t,
                    krokstadelva: t,
                    langevag: t,
                    "xn--langevg-jxa": t,
                    langevåg: t,
                    leirvik: t,
                    mjondalen: t,
                    "xn--mjndalen-64a": t,
                    mjøndalen: t,
                    "mo-i-rana": t,
                    mosjoen: t,
                    "xn--mosjen-eya": t,
                    mosjøen: t,
                    nesoddtangen: t,
                    orkanger: t,
                    osoyro: t,
                    "xn--osyro-wua": t,
                    osøyro: t,
                    raholt: t,
                    "xn--rholt-mra": t,
                    råholt: t,
                    sandnessjoen: t,
                    "xn--sandnessjen-ogb": t,
                    sandnessjøen: t,
                    skedsmokorset: t,
                    slattum: t,
                    spjelkavik: t,
                    stathelle: t,
                    stavern: t,
                    stjordalshalsen: t,
                    "xn--stjrdalshalsen-sqb": t,
                    stjørdalshalsen: t,
                    tananger: t,
                    tranby: t,
                    vossevangen: t,
                    aarborte: t,
                    aejrie: t,
                    afjord: t,
                    "xn--fjord-lra": t,
                    åfjord: t,
                    agdenes: t,
                    akershus: nt,
                    aknoluokta: t,
                    "xn--koluokta-7ya57h": t,
                    ákŋoluokta: t,
                    al: t,
                    "xn--l-1fa": t,
                    ål: t,
                    alaheadju: t,
                    "xn--laheadju-7ya": t,
                    álaheadju: t,
                    alesund: t,
                    "xn--lesund-hua": t,
                    ålesund: t,
                    alstahaug: t,
                    alta: t,
                    "xn--lt-liac": t,
                    áltá: t,
                    alvdal: t,
                    amli: t,
                    "xn--mli-tla": t,
                    åmli: t,
                    amot: t,
                    "xn--mot-tla": t,
                    åmot: t,
                    andasuolo: t,
                    andebu: t,
                    andoy: t,
                    "xn--andy-ira": t,
                    andøy: t,
                    ardal: t,
                    "xn--rdal-poa": t,
                    årdal: t,
                    aremark: t,
                    arendal: t,
                    "xn--s-1fa": t,
                    ås: t,
                    aseral: t,
                    "xn--seral-lra": t,
                    åseral: t,
                    asker: t,
                    askim: t,
                    askoy: t,
                    "xn--asky-ira": t,
                    askøy: t,
                    askvoll: t,
                    asnes: t,
                    "xn--snes-poa": t,
                    åsnes: t,
                    audnedaln: t,
                    aukra: t,
                    aure: t,
                    aurland: t,
                    "aurskog-holand": t,
                    "xn--aurskog-hland-jnb": t,
                    "aurskog-høland": t,
                    austevoll: t,
                    austrheim: t,
                    averoy: t,
                    "xn--avery-yua": t,
                    averøy: t,
                    badaddja: t,
                    "xn--bdddj-mrabd": t,
                    bådåddjå: t,
                    "xn--brum-voa": t,
                    bærum: t,
                    bahcavuotna: t,
                    "xn--bhcavuotna-s4a": t,
                    báhcavuotna: t,
                    bahccavuotna: t,
                    "xn--bhccavuotna-k7a": t,
                    báhccavuotna: t,
                    baidar: t,
                    "xn--bidr-5nac": t,
                    báidár: t,
                    bajddar: t,
                    "xn--bjddar-pta": t,
                    bájddar: t,
                    balat: t,
                    "xn--blt-elab": t,
                    bálát: t,
                    balestrand: t,
                    ballangen: t,
                    balsfjord: t,
                    bamble: t,
                    bardu: t,
                    barum: t,
                    batsfjord: t,
                    "xn--btsfjord-9za": t,
                    båtsfjord: t,
                    bearalvahki: t,
                    "xn--bearalvhki-y4a": t,
                    bearalváhki: t,
                    beardu: t,
                    beiarn: t,
                    berg: t,
                    bergen: t,
                    berlevag: t,
                    "xn--berlevg-jxa": t,
                    berlevåg: t,
                    bievat: t,
                    "xn--bievt-0qa": t,
                    bievát: t,
                    bindal: t,
                    birkenes: t,
                    bjarkoy: t,
                    "xn--bjarky-fya": t,
                    bjarkøy: t,
                    bjerkreim: t,
                    bjugn: t,
                    bodo: t,
                    "xn--bod-2na": t,
                    bodø: t,
                    bokn: t,
                    bomlo: t,
                    "xn--bmlo-gra": t,
                    bømlo: t,
                    bremanger: t,
                    bronnoy: t,
                    "xn--brnny-wuac": t,
                    brønnøy: t,
                    budejju: t,
                    buskerud: nt,
                    bygland: t,
                    bykle: t,
                    cahcesuolo: t,
                    "xn--hcesuolo-7ya35b": t,
                    čáhcesuolo: t,
                    davvenjarga: t,
                    "xn--davvenjrga-y4a": t,
                    davvenjárga: t,
                    davvesiida: t,
                    deatnu: t,
                    dielddanuorri: t,
                    divtasvuodna: t,
                    divttasvuotna: t,
                    donna: t,
                    "xn--dnna-gra": t,
                    dønna: t,
                    dovre: t,
                    drammen: t,
                    drangedal: t,
                    dyroy: t,
                    "xn--dyry-ira": t,
                    dyrøy: t,
                    eid: t,
                    eidfjord: t,
                    eidsberg: t,
                    eidskog: t,
                    eidsvoll: t,
                    eigersund: t,
                    elverum: t,
                    enebakk: t,
                    engerdal: t,
                    etne: t,
                    etnedal: t,
                    evenassi: t,
                    "xn--eveni-0qa01ga": t,
                    evenášši: t,
                    evenes: t,
                    "evje-og-hornnes": t,
                    farsund: t,
                    fauske: t,
                    fedje: t,
                    fet: t,
                    finnoy: t,
                    "xn--finny-yua": t,
                    finnøy: t,
                    fitjar: t,
                    fjaler: t,
                    fjell: t,
                    fla: t,
                    "xn--fl-zia": t,
                    flå: t,
                    flakstad: t,
                    flatanger: t,
                    flekkefjord: t,
                    flesberg: t,
                    flora: t,
                    folldal: t,
                    forde: t,
                    "xn--frde-gra": t,
                    førde: t,
                    forsand: t,
                    fosnes: t,
                    "xn--frna-woa": t,
                    fræna: t,
                    frana: t,
                    frei: t,
                    frogn: t,
                    froland: t,
                    frosta: t,
                    froya: t,
                    "xn--frya-hra": t,
                    frøya: t,
                    fuoisku: t,
                    fuossko: t,
                    fusa: t,
                    fyresdal: t,
                    gaivuotna: t,
                    "xn--givuotna-8ya": t,
                    gáivuotna: t,
                    galsa: t,
                    "xn--gls-elac": t,
                    gálsá: t,
                    gamvik: t,
                    gangaviika: t,
                    "xn--ggaviika-8ya47h": t,
                    gáŋgaviika: t,
                    gaular: t,
                    gausdal: t,
                    giehtavuoatna: t,
                    gildeskal: t,
                    "xn--gildeskl-g0a": t,
                    gildeskål: t,
                    giske: t,
                    gjemnes: t,
                    gjerdrum: t,
                    gjerstad: t,
                    gjesdal: t,
                    gjovik: t,
                    "xn--gjvik-wua": t,
                    gjøvik: t,
                    gloppen: t,
                    gol: t,
                    gran: t,
                    grane: t,
                    granvin: t,
                    gratangen: t,
                    grimstad: t,
                    grong: t,
                    grue: t,
                    gulen: t,
                    guovdageaidnu: t,
                    ha: t,
                    "xn--h-2fa": t,
                    hå: t,
                    habmer: t,
                    "xn--hbmer-xqa": t,
                    hábmer: t,
                    hadsel: t,
                    "xn--hgebostad-g3a": t,
                    hægebostad: t,
                    hagebostad: t,
                    halden: t,
                    halsa: t,
                    hamar: t,
                    hamaroy: t,
                    hammarfeasta: t,
                    "xn--hmmrfeasta-s4ac": t,
                    hámmárfeasta: t,
                    hammerfest: t,
                    hapmir: t,
                    "xn--hpmir-xqa": t,
                    hápmir: t,
                    haram: t,
                    hareid: t,
                    harstad: t,
                    hasvik: t,
                    hattfjelldal: t,
                    haugesund: t,
                    hedmark: [
                        0,
                        {
                            os: t,
                            valer: t,
                            "xn--vler-qoa": t,
                            våler: t
                        }
                    ],
                    hemne: t,
                    hemnes: t,
                    hemsedal: t,
                    hitra: t,
                    hjartdal: t,
                    hjelmeland: t,
                    hobol: t,
                    "xn--hobl-ira": t,
                    hobøl: t,
                    hof: t,
                    hol: t,
                    hole: t,
                    holmestrand: t,
                    holtalen: t,
                    "xn--holtlen-hxa": t,
                    holtålen: t,
                    hordaland: [
                        0,
                        {
                            os: t
                        }
                    ],
                    hornindal: t,
                    horten: t,
                    hoyanger: t,
                    "xn--hyanger-q1a": t,
                    høyanger: t,
                    hoylandet: t,
                    "xn--hylandet-54a": t,
                    høylandet: t,
                    hurdal: t,
                    hurum: t,
                    hvaler: t,
                    hyllestad: t,
                    ibestad: t,
                    inderoy: t,
                    "xn--indery-fya": t,
                    inderøy: t,
                    iveland: t,
                    ivgu: t,
                    jevnaker: t,
                    jolster: t,
                    "xn--jlster-bya": t,
                    jølster: t,
                    jondal: t,
                    kafjord: t,
                    "xn--kfjord-iua": t,
                    kåfjord: t,
                    karasjohka: t,
                    "xn--krjohka-hwab49j": t,
                    kárášjohka: t,
                    karasjok: t,
                    karlsoy: t,
                    karmoy: t,
                    "xn--karmy-yua": t,
                    karmøy: t,
                    kautokeino: t,
                    klabu: t,
                    "xn--klbu-woa": t,
                    klæbu: t,
                    klepp: t,
                    kongsberg: t,
                    kongsvinger: t,
                    kraanghke: t,
                    "xn--kranghke-b0a": t,
                    kråanghke: t,
                    kragero: t,
                    "xn--krager-gya": t,
                    kragerø: t,
                    kristiansand: t,
                    kristiansund: t,
                    krodsherad: t,
                    "xn--krdsherad-m8a": t,
                    krødsherad: t,
                    "xn--kvfjord-nxa": t,
                    kvæfjord: t,
                    "xn--kvnangen-k0a": t,
                    kvænangen: t,
                    kvafjord: t,
                    kvalsund: t,
                    kvam: t,
                    kvanangen: t,
                    kvinesdal: t,
                    kvinnherad: t,
                    kviteseid: t,
                    kvitsoy: t,
                    "xn--kvitsy-fya": t,
                    kvitsøy: t,
                    laakesvuemie: t,
                    "xn--lrdal-sra": t,
                    lærdal: t,
                    lahppi: t,
                    "xn--lhppi-xqa": t,
                    láhppi: t,
                    lardal: t,
                    larvik: t,
                    lavagis: t,
                    lavangen: t,
                    leangaviika: t,
                    "xn--leagaviika-52b": t,
                    leaŋgaviika: t,
                    lebesby: t,
                    leikanger: t,
                    leirfjord: t,
                    leka: t,
                    leksvik: t,
                    lenvik: t,
                    lerdal: t,
                    lesja: t,
                    levanger: t,
                    lier: t,
                    lierne: t,
                    lillehammer: t,
                    lillesand: t,
                    lindas: t,
                    "xn--linds-pra": t,
                    lindås: t,
                    lindesnes: t,
                    loabat: t,
                    "xn--loabt-0qa": t,
                    loabát: t,
                    lodingen: t,
                    "xn--ldingen-q1a": t,
                    lødingen: t,
                    lom: t,
                    loppa: t,
                    lorenskog: t,
                    "xn--lrenskog-54a": t,
                    lørenskog: t,
                    loten: t,
                    "xn--lten-gra": t,
                    løten: t,
                    lund: t,
                    lunner: t,
                    luroy: t,
                    "xn--lury-ira": t,
                    lurøy: t,
                    luster: t,
                    lyngdal: t,
                    lyngen: t,
                    malatvuopmi: t,
                    "xn--mlatvuopmi-s4a": t,
                    málatvuopmi: t,
                    malselv: t,
                    "xn--mlselv-iua": t,
                    målselv: t,
                    malvik: t,
                    mandal: t,
                    marker: t,
                    marnardal: t,
                    masfjorden: t,
                    masoy: t,
                    "xn--msy-ula0h": t,
                    måsøy: t,
                    "matta-varjjat": t,
                    "xn--mtta-vrjjat-k7af": t,
                    "mátta-várjjat": t,
                    meland: t,
                    meldal: t,
                    melhus: t,
                    meloy: t,
                    "xn--mely-ira": t,
                    meløy: t,
                    meraker: t,
                    "xn--merker-kua": t,
                    meråker: t,
                    midsund: t,
                    "midtre-gauldal": t,
                    moareke: t,
                    "xn--moreke-jua": t,
                    moåreke: t,
                    modalen: t,
                    modum: t,
                    molde: t,
                    "more-og-romsdal": [
                        0,
                        {
                            heroy: t,
                            sande: t
                        }
                    ],
                    "xn--mre-og-romsdal-qqb": [
                        0,
                        {
                            "xn--hery-ira": t,
                            sande: t
                        }
                    ],
                    "møre-og-romsdal": [
                        0,
                        {
                            herøy: t,
                            sande: t
                        }
                    ],
                    moskenes: t,
                    moss: t,
                    mosvik: t,
                    muosat: t,
                    "xn--muost-0qa": t,
                    muosát: t,
                    naamesjevuemie: t,
                    "xn--nmesjevuemie-tcba": t,
                    nååmesjevuemie: t,
                    "xn--nry-yla5g": t,
                    nærøy: t,
                    namdalseid: t,
                    namsos: t,
                    namsskogan: t,
                    nannestad: t,
                    naroy: t,
                    narviika: t,
                    narvik: t,
                    naustdal: t,
                    navuotna: t,
                    "xn--nvuotna-hwa": t,
                    návuotna: t,
                    "nedre-eiker": t,
                    nesna: t,
                    nesodden: t,
                    nesseby: t,
                    nesset: t,
                    nissedal: t,
                    nittedal: t,
                    "nord-aurdal": t,
                    "nord-fron": t,
                    "nord-odal": t,
                    norddal: t,
                    nordkapp: t,
                    nordland: [
                        0,
                        {
                            bo: t,
                            "xn--b-5ga": t,
                            bø: t,
                            heroy: t,
                            "xn--hery-ira": t,
                            herøy: t
                        }
                    ],
                    "nordre-land": t,
                    nordreisa: t,
                    "nore-og-uvdal": t,
                    notodden: t,
                    notteroy: t,
                    "xn--nttery-byae": t,
                    nøtterøy: t,
                    odda: t,
                    oksnes: t,
                    "xn--ksnes-uua": t,
                    øksnes: t,
                    omasvuotna: t,
                    oppdal: t,
                    oppegard: t,
                    "xn--oppegrd-ixa": t,
                    oppegård: t,
                    orkdal: t,
                    orland: t,
                    "xn--rland-uua": t,
                    ørland: t,
                    orskog: t,
                    "xn--rskog-uua": t,
                    ørskog: t,
                    orsta: t,
                    "xn--rsta-fra": t,
                    ørsta: t,
                    osen: t,
                    osteroy: t,
                    "xn--ostery-fya": t,
                    osterøy: t,
                    ostfold: [
                        0,
                        {
                            valer: t
                        }
                    ],
                    "xn--stfold-9xa": [
                        0,
                        {
                            "xn--vler-qoa": t
                        }
                    ],
                    østfold: [
                        0,
                        {
                            våler: t
                        }
                    ],
                    "ostre-toten": t,
                    "xn--stre-toten-zcb": t,
                    "østre-toten": t,
                    overhalla: t,
                    "ovre-eiker": t,
                    "xn--vre-eiker-k8a": t,
                    "øvre-eiker": t,
                    oyer: t,
                    "xn--yer-zna": t,
                    øyer: t,
                    oygarden: t,
                    "xn--ygarden-p1a": t,
                    øygarden: t,
                    "oystre-slidre": t,
                    "xn--ystre-slidre-ujb": t,
                    "øystre-slidre": t,
                    porsanger: t,
                    porsangu: t,
                    "xn--porsgu-sta26f": t,
                    porsáŋgu: t,
                    porsgrunn: t,
                    rade: t,
                    "xn--rde-ula": t,
                    råde: t,
                    radoy: t,
                    "xn--rady-ira": t,
                    radøy: t,
                    "xn--rlingen-mxa": t,
                    rælingen: t,
                    rahkkeravju: t,
                    "xn--rhkkervju-01af": t,
                    ráhkkerávju: t,
                    raisa: t,
                    "xn--risa-5na": t,
                    ráisa: t,
                    rakkestad: t,
                    ralingen: t,
                    rana: t,
                    randaberg: t,
                    rauma: t,
                    rendalen: t,
                    rennebu: t,
                    rennesoy: t,
                    "xn--rennesy-v1a": t,
                    rennesøy: t,
                    rindal: t,
                    ringebu: t,
                    ringerike: t,
                    ringsaker: t,
                    risor: t,
                    "xn--risr-ira": t,
                    risør: t,
                    rissa: t,
                    roan: t,
                    rodoy: t,
                    "xn--rdy-0nab": t,
                    rødøy: t,
                    rollag: t,
                    romsa: t,
                    romskog: t,
                    "xn--rmskog-bya": t,
                    rømskog: t,
                    roros: t,
                    "xn--rros-gra": t,
                    røros: t,
                    rost: t,
                    "xn--rst-0na": t,
                    røst: t,
                    royken: t,
                    "xn--ryken-vua": t,
                    røyken: t,
                    royrvik: t,
                    "xn--ryrvik-bya": t,
                    røyrvik: t,
                    ruovat: t,
                    rygge: t,
                    salangen: t,
                    salat: t,
                    "xn--slat-5na": t,
                    sálat: t,
                    "xn--slt-elab": t,
                    sálát: t,
                    saltdal: t,
                    samnanger: t,
                    sandefjord: t,
                    sandnes: t,
                    sandoy: t,
                    "xn--sandy-yua": t,
                    sandøy: t,
                    sarpsborg: t,
                    sauda: t,
                    sauherad: t,
                    sel: t,
                    selbu: t,
                    selje: t,
                    seljord: t,
                    siellak: t,
                    sigdal: t,
                    siljan: t,
                    sirdal: t,
                    skanit: t,
                    "xn--sknit-yqa": t,
                    skánit: t,
                    skanland: t,
                    "xn--sknland-fxa": t,
                    skånland: t,
                    skaun: t,
                    skedsmo: t,
                    ski: t,
                    skien: t,
                    skierva: t,
                    "xn--skierv-uta": t,
                    skiervá: t,
                    skiptvet: t,
                    skjak: t,
                    "xn--skjk-soa": t,
                    skjåk: t,
                    skjervoy: t,
                    "xn--skjervy-v1a": t,
                    skjervøy: t,
                    skodje: t,
                    smola: t,
                    "xn--smla-hra": t,
                    smøla: t,
                    snaase: t,
                    "xn--snase-nra": t,
                    snåase: t,
                    snasa: t,
                    "xn--snsa-roa": t,
                    snåsa: t,
                    snillfjord: t,
                    snoasa: t,
                    sogndal: t,
                    sogne: t,
                    "xn--sgne-gra": t,
                    søgne: t,
                    sokndal: t,
                    sola: t,
                    solund: t,
                    somna: t,
                    "xn--smna-gra": t,
                    sømna: t,
                    "sondre-land": t,
                    "xn--sndre-land-0cb": t,
                    "søndre-land": t,
                    songdalen: t,
                    "sor-aurdal": t,
                    "xn--sr-aurdal-l8a": t,
                    "sør-aurdal": t,
                    "sor-fron": t,
                    "xn--sr-fron-q1a": t,
                    "sør-fron": t,
                    "sor-odal": t,
                    "xn--sr-odal-q1a": t,
                    "sør-odal": t,
                    "sor-varanger": t,
                    "xn--sr-varanger-ggb": t,
                    "sør-varanger": t,
                    sorfold: t,
                    "xn--srfold-bya": t,
                    sørfold: t,
                    sorreisa: t,
                    "xn--srreisa-q1a": t,
                    sørreisa: t,
                    sortland: t,
                    sorum: t,
                    "xn--srum-gra": t,
                    sørum: t,
                    spydeberg: t,
                    stange: t,
                    stavanger: t,
                    steigen: t,
                    steinkjer: t,
                    stjordal: t,
                    "xn--stjrdal-s1a": t,
                    stjørdal: t,
                    stokke: t,
                    "stor-elvdal": t,
                    stord: t,
                    stordal: t,
                    storfjord: t,
                    strand: t,
                    stranda: t,
                    stryn: t,
                    sula: t,
                    suldal: t,
                    sund: t,
                    sunndal: t,
                    surnadal: t,
                    sveio: t,
                    svelvik: t,
                    sykkylven: t,
                    tana: t,
                    telemark: [
                        0,
                        {
                            bo: t,
                            "xn--b-5ga": t,
                            bø: t
                        }
                    ],
                    time: t,
                    tingvoll: t,
                    tinn: t,
                    tjeldsund: t,
                    tjome: t,
                    "xn--tjme-hra": t,
                    tjøme: t,
                    tokke: t,
                    tolga: t,
                    tonsberg: t,
                    "xn--tnsberg-q1a": t,
                    tønsberg: t,
                    torsken: t,
                    "xn--trna-woa": t,
                    træna: t,
                    trana: t,
                    tranoy: t,
                    "xn--trany-yua": t,
                    tranøy: t,
                    troandin: t,
                    trogstad: t,
                    "xn--trgstad-r1a": t,
                    trøgstad: t,
                    tromsa: t,
                    tromso: t,
                    "xn--troms-zua": t,
                    tromsø: t,
                    trondheim: t,
                    trysil: t,
                    tvedestrand: t,
                    tydal: t,
                    tynset: t,
                    tysfjord: t,
                    tysnes: t,
                    "xn--tysvr-vra": t,
                    tysvær: t,
                    tysvar: t,
                    ullensaker: t,
                    ullensvang: t,
                    ulvik: t,
                    unjarga: t,
                    "xn--unjrga-rta": t,
                    unjárga: t,
                    utsira: t,
                    vaapste: t,
                    vadso: t,
                    "xn--vads-jra": t,
                    vadsø: t,
                    "xn--vry-yla5g": t,
                    værøy: t,
                    vaga: t,
                    "xn--vg-yiab": t,
                    vågå: t,
                    vagan: t,
                    "xn--vgan-qoa": t,
                    vågan: t,
                    vagsoy: t,
                    "xn--vgsy-qoa0j": t,
                    vågsøy: t,
                    vaksdal: t,
                    valle: t,
                    vang: t,
                    vanylven: t,
                    vardo: t,
                    "xn--vard-jra": t,
                    vardø: t,
                    varggat: t,
                    "xn--vrggt-xqad": t,
                    várggát: t,
                    varoy: t,
                    vefsn: t,
                    vega: t,
                    vegarshei: t,
                    "xn--vegrshei-c0a": t,
                    vegårshei: t,
                    vennesla: t,
                    verdal: t,
                    verran: t,
                    vestby: t,
                    vestfold: [
                        0,
                        {
                            sande: t
                        }
                    ],
                    vestnes: t,
                    "vestre-slidre": t,
                    "vestre-toten": t,
                    vestvagoy: t,
                    "xn--vestvgy-ixa6o": t,
                    vestvågøy: t,
                    vevelstad: t,
                    vik: t,
                    vikna: t,
                    vindafjord: t,
                    voagat: t,
                    volda: t,
                    voss: t,
                    co: e,
                    "123hjemmeside": e,
                    myspreadshop: e
                }
            ],
            np: h,
            nr: X,
            nu: [
                1,
                {
                    merseine: e,
                    mine: e,
                    shacknet: e,
                    enterprisecloud: e
                }
            ],
            nz: [
                1,
                {
                    ac: t,
                    co: t,
                    cri: t,
                    geek: t,
                    gen: t,
                    govt: t,
                    health: t,
                    iwi: t,
                    kiwi: t,
                    maori: t,
                    "xn--mori-qsa": t,
                    māori: t,
                    mil: t,
                    net: t,
                    org: t,
                    parliament: t,
                    school: t,
                    cloudns: e
                }
            ],
            om: [
                1,
                {
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    med: t,
                    museum: t,
                    net: t,
                    org: t,
                    pro: t
                }
            ],
            onion: t,
            org: [
                1,
                {
                    altervista: e,
                    pimienta: e,
                    poivron: e,
                    potager: e,
                    sweetpepper: e,
                    cdn77: [
                        0,
                        {
                            c: e,
                            rsc: e
                        }
                    ],
                    "cdn77-secure": [
                        0,
                        {
                            origin: [
                                0,
                                {
                                    ssl: e
                                }
                            ]
                        }
                    ],
                    ae: e,
                    cloudns: e,
                    "ip-dynamic": e,
                    ddnss: e,
                    dpdns: e,
                    duckdns: e,
                    tunk: e,
                    blogdns: e,
                    blogsite: e,
                    boldlygoingnowhere: e,
                    dnsalias: e,
                    dnsdojo: e,
                    doesntexist: e,
                    dontexist: e,
                    doomdns: e,
                    dvrdns: e,
                    dynalias: e,
                    dyndns: [
                        2,
                        {
                            go: e,
                            home: e
                        }
                    ],
                    endofinternet: e,
                    endoftheinternet: e,
                    "from-me": e,
                    "game-host": e,
                    gotdns: e,
                    "hobby-site": e,
                    homedns: e,
                    homeftp: e,
                    homelinux: e,
                    homeunix: e,
                    "is-a-bruinsfan": e,
                    "is-a-candidate": e,
                    "is-a-celticsfan": e,
                    "is-a-chef": e,
                    "is-a-geek": e,
                    "is-a-knight": e,
                    "is-a-linux-user": e,
                    "is-a-patsfan": e,
                    "is-a-soxfan": e,
                    "is-found": e,
                    "is-lost": e,
                    "is-saved": e,
                    "is-very-bad": e,
                    "is-very-evil": e,
                    "is-very-good": e,
                    "is-very-nice": e,
                    "is-very-sweet": e,
                    "isa-geek": e,
                    "kicks-ass": e,
                    misconfused: e,
                    podzone: e,
                    readmyblog: e,
                    selfip: e,
                    sellsyourhome: e,
                    servebbs: e,
                    serveftp: e,
                    servegame: e,
                    "stuff-4-sale": e,
                    webhop: e,
                    accesscam: e,
                    camdvr: e,
                    freeddns: e,
                    mywire: e,
                    webredirect: e,
                    twmail: e,
                    eu: [
                        2,
                        {
                            al: e,
                            asso: e,
                            at: e,
                            au: e,
                            be: e,
                            bg: e,
                            ca: e,
                            cd: e,
                            ch: e,
                            cn: e,
                            cy: e,
                            cz: e,
                            de: e,
                            dk: e,
                            edu: e,
                            ee: e,
                            es: e,
                            fi: e,
                            fr: e,
                            gr: e,
                            hr: e,
                            hu: e,
                            ie: e,
                            il: e,
                            in: e,
                            int: e,
                            is: e,
                            it: e,
                            jp: e,
                            kr: e,
                            lt: e,
                            lu: e,
                            lv: e,
                            me: e,
                            mk: e,
                            mt: e,
                            my: e,
                            net: e,
                            ng: e,
                            nl: e,
                            no: e,
                            nz: e,
                            pl: e,
                            pt: e,
                            ro: e,
                            ru: e,
                            se: e,
                            si: e,
                            sk: e,
                            tr: e,
                            uk: e,
                            us: e
                        }
                    ],
                    fedorainfracloud: e,
                    fedorapeople: e,
                    fedoraproject: [
                        0,
                        {
                            cloud: e,
                            os: M,
                            stg: [
                                0,
                                {
                                    os: M
                                }
                            ]
                        }
                    ],
                    freedesktop: e,
                    hatenadiary: e,
                    hepforge: e,
                    "in-dsl": e,
                    "in-vpn": e,
                    js: e,
                    barsy: e,
                    mayfirst: e,
                    routingthecloud: e,
                    bmoattachments: e,
                    "cable-modem": e,
                    collegefan: e,
                    couchpotatofries: e,
                    hopto: e,
                    mlbfan: e,
                    myftp: e,
                    mysecuritycamera: e,
                    nflfan: e,
                    "no-ip": e,
                    "read-books": e,
                    ufcfan: e,
                    zapto: e,
                    dynserv: e,
                    "now-dns": e,
                    "is-local": e,
                    httpbin: e,
                    pubtls: e,
                    jpn: e,
                    "my-firewall": e,
                    myfirewall: e,
                    spdns: e,
                    "small-web": e,
                    dsmynas: e,
                    familyds: e,
                    teckids: j,
                    tuxfamily: e,
                    diskstation: e,
                    hk: e,
                    us: e,
                    toolforge: e,
                    wmcloud: e,
                    wmflabs: e,
                    za: e
                }
            ],
            pa: [
                1,
                {
                    abo: t,
                    ac: t,
                    com: t,
                    edu: t,
                    gob: t,
                    ing: t,
                    med: t,
                    net: t,
                    nom: t,
                    org: t,
                    sld: t
                }
            ],
            pe: [
                1,
                {
                    com: t,
                    edu: t,
                    gob: t,
                    mil: t,
                    net: t,
                    nom: t,
                    org: t
                }
            ],
            pf: [
                1,
                {
                    com: t,
                    edu: t,
                    org: t
                }
            ],
            pg: h,
            ph: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    i: t,
                    mil: t,
                    net: t,
                    ngo: t,
                    org: t,
                    cloudns: e
                }
            ],
            pk: [
                1,
                {
                    ac: t,
                    biz: t,
                    com: t,
                    edu: t,
                    fam: t,
                    gkp: t,
                    gob: t,
                    gog: t,
                    gok: t,
                    gop: t,
                    gos: t,
                    gov: t,
                    net: t,
                    org: t,
                    web: t
                }
            ],
            pl: [
                1,
                {
                    com: t,
                    net: t,
                    org: t,
                    agro: t,
                    aid: t,
                    atm: t,
                    auto: t,
                    biz: t,
                    edu: t,
                    gmina: t,
                    gsm: t,
                    info: t,
                    mail: t,
                    media: t,
                    miasta: t,
                    mil: t,
                    nieruchomosci: t,
                    nom: t,
                    pc: t,
                    powiat: t,
                    priv: t,
                    realestate: t,
                    rel: t,
                    sex: t,
                    shop: t,
                    sklep: t,
                    sos: t,
                    szkola: t,
                    targi: t,
                    tm: t,
                    tourism: t,
                    travel: t,
                    turystyka: t,
                    gov: [
                        1,
                        {
                            ap: t,
                            griw: t,
                            ic: t,
                            is: t,
                            kmpsp: t,
                            konsulat: t,
                            kppsp: t,
                            kwp: t,
                            kwpsp: t,
                            mup: t,
                            mw: t,
                            oia: t,
                            oirm: t,
                            oke: t,
                            oow: t,
                            oschr: t,
                            oum: t,
                            pa: t,
                            pinb: t,
                            piw: t,
                            po: t,
                            pr: t,
                            psp: t,
                            psse: t,
                            pup: t,
                            rzgw: t,
                            sa: t,
                            sdn: t,
                            sko: t,
                            so: t,
                            sr: t,
                            starostwo: t,
                            ug: t,
                            ugim: t,
                            um: t,
                            umig: t,
                            upow: t,
                            uppo: t,
                            us: t,
                            uw: t,
                            uzs: t,
                            wif: t,
                            wiih: t,
                            winb: t,
                            wios: t,
                            witd: t,
                            wiw: t,
                            wkz: t,
                            wsa: t,
                            wskr: t,
                            wsse: t,
                            wuoz: t,
                            wzmiuw: t,
                            zp: t,
                            zpisdn: t
                        }
                    ],
                    augustow: t,
                    "babia-gora": t,
                    bedzin: t,
                    beskidy: t,
                    bialowieza: t,
                    bialystok: t,
                    bielawa: t,
                    bieszczady: t,
                    boleslawiec: t,
                    bydgoszcz: t,
                    bytom: t,
                    cieszyn: t,
                    czeladz: t,
                    czest: t,
                    dlugoleka: t,
                    elblag: t,
                    elk: t,
                    glogow: t,
                    gniezno: t,
                    gorlice: t,
                    grajewo: t,
                    ilawa: t,
                    jaworzno: t,
                    "jelenia-gora": t,
                    jgora: t,
                    kalisz: t,
                    karpacz: t,
                    kartuzy: t,
                    kaszuby: t,
                    katowice: t,
                    "kazimierz-dolny": t,
                    kepno: t,
                    ketrzyn: t,
                    klodzko: t,
                    kobierzyce: t,
                    kolobrzeg: t,
                    konin: t,
                    konskowola: t,
                    kutno: t,
                    lapy: t,
                    lebork: t,
                    legnica: t,
                    lezajsk: t,
                    limanowa: t,
                    lomza: t,
                    lowicz: t,
                    lubin: t,
                    lukow: t,
                    malbork: t,
                    malopolska: t,
                    mazowsze: t,
                    mazury: t,
                    mielec: t,
                    mielno: t,
                    mragowo: t,
                    naklo: t,
                    nowaruda: t,
                    nysa: t,
                    olawa: t,
                    olecko: t,
                    olkusz: t,
                    olsztyn: t,
                    opoczno: t,
                    opole: t,
                    ostroda: t,
                    ostroleka: t,
                    ostrowiec: t,
                    ostrowwlkp: t,
                    pila: t,
                    pisz: t,
                    podhale: t,
                    podlasie: t,
                    polkowice: t,
                    pomorskie: t,
                    pomorze: t,
                    prochowice: t,
                    pruszkow: t,
                    przeworsk: t,
                    pulawy: t,
                    radom: t,
                    "rawa-maz": t,
                    rybnik: t,
                    rzeszow: t,
                    sanok: t,
                    sejny: t,
                    skoczow: t,
                    slask: t,
                    slupsk: t,
                    sosnowiec: t,
                    "stalowa-wola": t,
                    starachowice: t,
                    stargard: t,
                    suwalki: t,
                    swidnica: t,
                    swiebodzin: t,
                    swinoujscie: t,
                    szczecin: t,
                    szczytno: t,
                    tarnobrzeg: t,
                    tgory: t,
                    turek: t,
                    tychy: t,
                    ustka: t,
                    walbrzych: t,
                    warmia: t,
                    warszawa: t,
                    waw: t,
                    wegrow: t,
                    wielun: t,
                    wlocl: t,
                    wloclawek: t,
                    wodzislaw: t,
                    wolomin: t,
                    wroclaw: t,
                    zachpomor: t,
                    zagan: t,
                    zarow: t,
                    zgora: t,
                    zgorzelec: t,
                    art: e,
                    gliwice: e,
                    krakow: e,
                    poznan: e,
                    wroc: e,
                    zakopane: e,
                    beep: e,
                    "ecommerce-shop": e,
                    cfolks: e,
                    dfirma: e,
                    dkonto: e,
                    you2: e,
                    shoparena: e,
                    homesklep: e,
                    sdscloud: e,
                    unicloud: e,
                    lodz: e,
                    pabianice: e,
                    plock: e,
                    sieradz: e,
                    skierniewice: e,
                    zgierz: e,
                    krasnik: e,
                    leczna: e,
                    lubartow: e,
                    lublin: e,
                    poniatowa: e,
                    swidnik: e,
                    co: e,
                    torun: e,
                    simplesite: e,
                    myspreadshop: e,
                    gda: e,
                    gdansk: e,
                    gdynia: e,
                    med: e,
                    sopot: e,
                    bielsko: e
                }
            ],
            pm: [
                1,
                {
                    own: e,
                    name: e
                }
            ],
            pn: [
                1,
                {
                    co: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t
                }
            ],
            post: t,
            pr: [
                1,
                {
                    biz: t,
                    com: t,
                    edu: t,
                    gov: t,
                    info: t,
                    isla: t,
                    name: t,
                    net: t,
                    org: t,
                    pro: t,
                    ac: t,
                    est: t,
                    prof: t
                }
            ],
            pro: [
                1,
                {
                    aaa: t,
                    aca: t,
                    acct: t,
                    avocat: t,
                    bar: t,
                    cpa: t,
                    eng: t,
                    jur: t,
                    law: t,
                    med: t,
                    recht: t,
                    "12chars": e,
                    cloudns: e,
                    barsy: e,
                    ngrok: e
                }
            ],
            ps: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    plo: t,
                    sec: t
                }
            ],
            pt: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    int: t,
                    net: t,
                    nome: t,
                    org: t,
                    publ: t,
                    "123paginaweb": e
                }
            ],
            pw: [
                1,
                {
                    gov: t,
                    cloudns: e,
                    x443: e
                }
            ],
            py: [
                1,
                {
                    com: t,
                    coop: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t
                }
            ],
            qa: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    name: t,
                    net: t,
                    org: t,
                    sch: t
                }
            ],
            re: [
                1,
                {
                    asso: t,
                    com: t,
                    netlib: e,
                    can: e
                }
            ],
            ro: [
                1,
                {
                    arts: t,
                    com: t,
                    firm: t,
                    info: t,
                    nom: t,
                    nt: t,
                    org: t,
                    rec: t,
                    store: t,
                    tm: t,
                    www: t,
                    co: e,
                    shop: e,
                    barsy: e
                }
            ],
            rs: [
                1,
                {
                    ac: t,
                    co: t,
                    edu: t,
                    gov: t,
                    in: t,
                    org: t,
                    brendly: V,
                    barsy: e,
                    ox: e
                }
            ],
            ru: [
                1,
                {
                    ac: e,
                    edu: e,
                    gov: e,
                    int: e,
                    mil: e,
                    eurodir: e,
                    adygeya: e,
                    bashkiria: e,
                    bir: e,
                    cbg: e,
                    com: e,
                    dagestan: e,
                    grozny: e,
                    kalmykia: e,
                    kustanai: e,
                    marine: e,
                    mordovia: e,
                    msk: e,
                    mytis: e,
                    nalchik: e,
                    nov: e,
                    pyatigorsk: e,
                    spb: e,
                    vladikavkaz: e,
                    vladimir: e,
                    na4u: e,
                    mircloud: e,
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
                            hb: e
                        }
                    ],
                    mcdir: [
                        2,
                        {
                            vps: e
                        }
                    ],
                    mcpre: e,
                    net: e,
                    org: e,
                    pp: e,
                    lk3: e,
                    ras: e
                }
            ],
            rw: [
                1,
                {
                    ac: t,
                    co: t,
                    coop: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t
                }
            ],
            sa: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    med: t,
                    net: t,
                    org: t,
                    pub: t,
                    sch: t
                }
            ],
            sb: r,
            sc: r,
            sd: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    info: t,
                    med: t,
                    net: t,
                    org: t,
                    tv: t
                }
            ],
            se: [
                1,
                {
                    a: t,
                    ac: t,
                    b: t,
                    bd: t,
                    brand: t,
                    c: t,
                    d: t,
                    e: t,
                    f: t,
                    fh: t,
                    fhsk: t,
                    fhv: t,
                    g: t,
                    h: t,
                    i: t,
                    k: t,
                    komforb: t,
                    kommunalforbund: t,
                    komvux: t,
                    l: t,
                    lanbib: t,
                    m: t,
                    n: t,
                    naturbruksgymn: t,
                    o: t,
                    org: t,
                    p: t,
                    parti: t,
                    pp: t,
                    press: t,
                    r: t,
                    s: t,
                    t,
                    tm: t,
                    u: t,
                    w: t,
                    x: t,
                    y: t,
                    z: t,
                    com: e,
                    iopsys: e,
                    "123minsida": e,
                    itcouldbewor: e,
                    myspreadshop: e
                }
            ],
            sg: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    enscaled: e
                }
            ],
            sh: [
                1,
                {
                    com: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    hashbang: e,
                    botda: e,
                    platform: [
                        0,
                        {
                            ent: e,
                            eu: e,
                            us: e
                        }
                    ],
                    now: e
                }
            ],
            si: [
                1,
                {
                    f5: e,
                    gitapp: e,
                    gitpage: e
                }
            ],
            sj: t,
            sk: t,
            sl: r,
            sm: t,
            sn: [
                1,
                {
                    art: t,
                    com: t,
                    edu: t,
                    gouv: t,
                    org: t,
                    perso: t,
                    univ: t
                }
            ],
            so: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    me: t,
                    net: t,
                    org: t,
                    surveys: e
                }
            ],
            sr: t,
            ss: [
                1,
                {
                    biz: t,
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    me: t,
                    net: t,
                    org: t,
                    sch: t
                }
            ],
            st: [
                1,
                {
                    co: t,
                    com: t,
                    consulado: t,
                    edu: t,
                    embaixada: t,
                    mil: t,
                    net: t,
                    org: t,
                    principe: t,
                    saotome: t,
                    store: t,
                    helioho: e,
                    kirara: e,
                    noho: e
                }
            ],
            su: [
                1,
                {
                    abkhazia: e,
                    adygeya: e,
                    aktyubinsk: e,
                    arkhangelsk: e,
                    armenia: e,
                    ashgabad: e,
                    azerbaijan: e,
                    balashov: e,
                    bashkiria: e,
                    bryansk: e,
                    bukhara: e,
                    chimkent: e,
                    dagestan: e,
                    "east-kazakhstan": e,
                    exnet: e,
                    georgia: e,
                    grozny: e,
                    ivanovo: e,
                    jambyl: e,
                    kalmykia: e,
                    kaluga: e,
                    karacol: e,
                    karaganda: e,
                    karelia: e,
                    khakassia: e,
                    krasnodar: e,
                    kurgan: e,
                    kustanai: e,
                    lenug: e,
                    mangyshlak: e,
                    mordovia: e,
                    msk: e,
                    murmansk: e,
                    nalchik: e,
                    navoi: e,
                    "north-kazakhstan": e,
                    nov: e,
                    obninsk: e,
                    penza: e,
                    pokrovsk: e,
                    sochi: e,
                    spb: e,
                    tashkent: e,
                    termez: e,
                    togliatti: e,
                    troitsk: e,
                    tselinograd: e,
                    tula: e,
                    tuva: e,
                    vladikavkaz: e,
                    vladimir: e,
                    vologda: e
                }
            ],
            sv: [
                1,
                {
                    com: t,
                    edu: t,
                    gob: t,
                    org: t,
                    red: t
                }
            ],
            sx: u,
            sy: n,
            sz: [
                1,
                {
                    ac: t,
                    co: t,
                    org: t
                }
            ],
            tc: t,
            td: t,
            tel: t,
            tf: [
                1,
                {
                    sch: e
                }
            ],
            tg: t,
            th: [
                1,
                {
                    ac: t,
                    co: t,
                    go: t,
                    in: t,
                    mi: t,
                    net: t,
                    or: t,
                    online: e,
                    shop: e
                }
            ],
            tj: [
                1,
                {
                    ac: t,
                    biz: t,
                    co: t,
                    com: t,
                    edu: t,
                    go: t,
                    gov: t,
                    int: t,
                    mil: t,
                    name: t,
                    net: t,
                    nic: t,
                    org: t,
                    test: t,
                    web: t
                }
            ],
            tk: t,
            tl: u,
            tm: [
                1,
                {
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    nom: t,
                    org: t
                }
            ],
            tn: [
                1,
                {
                    com: t,
                    ens: t,
                    fin: t,
                    gov: t,
                    ind: t,
                    info: t,
                    intl: t,
                    mincom: t,
                    nat: t,
                    net: t,
                    org: t,
                    perso: t,
                    tourism: t,
                    orangecloud: e
                }
            ],
            to: [
                1,
                {
                    611: e,
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    oya: e,
                    x0: e,
                    quickconnect: J,
                    vpnplus: e
                }
            ],
            tr: [
                1,
                {
                    av: t,
                    bbs: t,
                    bel: t,
                    biz: t,
                    com: t,
                    dr: t,
                    edu: t,
                    gen: t,
                    gov: t,
                    info: t,
                    k12: t,
                    kep: t,
                    mil: t,
                    name: t,
                    net: t,
                    org: t,
                    pol: t,
                    tel: t,
                    tsk: t,
                    tv: t,
                    web: t,
                    nc: u
                }
            ],
            tt: [
                1,
                {
                    biz: t,
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    info: t,
                    mil: t,
                    name: t,
                    net: t,
                    org: t,
                    pro: t
                }
            ],
            tv: [
                1,
                {
                    "better-than": e,
                    dyndns: e,
                    "on-the-web": e,
                    "worse-than": e,
                    from: e,
                    sakura: e
                }
            ],
            tw: [
                1,
                {
                    club: t,
                    com: [
                        1,
                        {
                            mymailer: e
                        }
                    ],
                    ebiz: t,
                    edu: t,
                    game: t,
                    gov: t,
                    idv: t,
                    mil: t,
                    net: t,
                    org: t,
                    url: e,
                    mydns: e
                }
            ],
            tz: [
                1,
                {
                    ac: t,
                    co: t,
                    go: t,
                    hotel: t,
                    info: t,
                    me: t,
                    mil: t,
                    mobi: t,
                    ne: t,
                    or: t,
                    sc: t,
                    tv: t
                }
            ],
            ua: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    in: t,
                    net: t,
                    org: t,
                    cherkassy: t,
                    cherkasy: t,
                    chernigov: t,
                    chernihiv: t,
                    chernivtsi: t,
                    chernovtsy: t,
                    ck: t,
                    cn: t,
                    cr: t,
                    crimea: t,
                    cv: t,
                    dn: t,
                    dnepropetrovsk: t,
                    dnipropetrovsk: t,
                    donetsk: t,
                    dp: t,
                    if: t,
                    "ivano-frankivsk": t,
                    kh: t,
                    kharkiv: t,
                    kharkov: t,
                    kherson: t,
                    khmelnitskiy: t,
                    khmelnytskyi: t,
                    kiev: t,
                    kirovograd: t,
                    km: t,
                    kr: t,
                    kropyvnytskyi: t,
                    krym: t,
                    ks: t,
                    kv: t,
                    kyiv: t,
                    lg: t,
                    lt: t,
                    lugansk: t,
                    luhansk: t,
                    lutsk: t,
                    lv: t,
                    lviv: t,
                    mk: t,
                    mykolaiv: t,
                    nikolaev: t,
                    od: t,
                    odesa: t,
                    odessa: t,
                    pl: t,
                    poltava: t,
                    rivne: t,
                    rovno: t,
                    rv: t,
                    sb: t,
                    sebastopol: t,
                    sevastopol: t,
                    sm: t,
                    sumy: t,
                    te: t,
                    ternopil: t,
                    uz: t,
                    uzhgorod: t,
                    uzhhorod: t,
                    vinnica: t,
                    vinnytsia: t,
                    vn: t,
                    volyn: t,
                    yalta: t,
                    zakarpattia: t,
                    zaporizhzhe: t,
                    zaporizhzhia: t,
                    zhitomir: t,
                    zhytomyr: t,
                    zp: t,
                    zt: t,
                    cc: e,
                    inf: e,
                    ltd: e,
                    cx: e,
                    ie: e,
                    biz: e,
                    co: e,
                    pp: e,
                    v: e
                }
            ],
            ug: [
                1,
                {
                    ac: t,
                    co: t,
                    com: t,
                    edu: t,
                    go: t,
                    gov: t,
                    mil: t,
                    ne: t,
                    or: t,
                    org: t,
                    sc: t,
                    us: t
                }
            ],
            uk: [
                1,
                {
                    ac: t,
                    co: [
                        1,
                        {
                            bytemark: [
                                0,
                                {
                                    dh: e,
                                    vm: e
                                }
                            ],
                            layershift: L,
                            barsy: e,
                            barsyonline: e,
                            retrosnub: Y,
                            "nh-serv": e,
                            "no-ip": e,
                            adimo: e,
                            myspreadshop: e
                        }
                    ],
                    gov: [
                        1,
                        {
                            api: e,
                            campaign: e,
                            service: e
                        }
                    ],
                    ltd: t,
                    me: t,
                    net: t,
                    nhs: t,
                    org: [
                        1,
                        {
                            glug: e,
                            lug: e,
                            lugs: e,
                            affinitylottery: e,
                            raffleentry: e,
                            weeklylottery: e
                        }
                    ],
                    plc: t,
                    police: t,
                    sch: h,
                    conn: e,
                    copro: e,
                    hosp: e,
                    "independent-commission": e,
                    "independent-inquest": e,
                    "independent-inquiry": e,
                    "independent-panel": e,
                    "independent-review": e,
                    "public-inquiry": e,
                    "royal-commission": e,
                    pymnt: e,
                    barsy: e,
                    nimsite: e,
                    oraclegovcloudapps: s
                }
            ],
            us: [
                1,
                {
                    dni: t,
                    isa: t,
                    nsn: t,
                    ak: st,
                    al: st,
                    ar: st,
                    as: st,
                    az: st,
                    ca: st,
                    co: st,
                    ct: st,
                    dc: st,
                    de: [
                        1,
                        {
                            cc: t,
                            lib: e
                        }
                    ],
                    fl: st,
                    ga: st,
                    gu: st,
                    hi: it,
                    ia: st,
                    id: st,
                    il: st,
                    in: st,
                    ks: st,
                    ky: st,
                    la: st,
                    ma: [
                        1,
                        {
                            k12: [
                                1,
                                {
                                    chtr: t,
                                    paroch: t,
                                    pvt: t
                                }
                            ],
                            cc: t,
                            lib: t
                        }
                    ],
                    md: st,
                    me: st,
                    mi: [
                        1,
                        {
                            k12: t,
                            cc: t,
                            lib: t,
                            "ann-arbor": t,
                            cog: t,
                            dst: t,
                            eaton: t,
                            gen: t,
                            mus: t,
                            tec: t,
                            washtenaw: t
                        }
                    ],
                    mn: st,
                    mo: st,
                    ms: st,
                    mt: st,
                    nc: st,
                    nd: it,
                    ne: st,
                    nh: st,
                    nj: st,
                    nm: st,
                    nv: st,
                    ny: st,
                    oh: st,
                    ok: st,
                    or: st,
                    pa: st,
                    pr: st,
                    ri: it,
                    sc: st,
                    sd: it,
                    tn: st,
                    tx: st,
                    ut: st,
                    va: st,
                    vi: st,
                    vt: st,
                    wa: st,
                    wi: st,
                    wv: [
                        1,
                        {
                            cc: t
                        }
                    ],
                    wy: st,
                    cloudns: e,
                    "is-by": e,
                    "land-4-sale": e,
                    "stuff-4-sale": e,
                    heliohost: e,
                    enscaled: [
                        0,
                        {
                            phx: e
                        }
                    ],
                    mircloud: e,
                    ngo: e,
                    golffan: e,
                    noip: e,
                    pointto: e,
                    freeddns: e,
                    srv: [
                        2,
                        {
                            gh: e,
                            gl: e
                        }
                    ],
                    platterp: e,
                    servername: e
                }
            ],
            uy: [
                1,
                {
                    com: t,
                    edu: t,
                    gub: t,
                    mil: t,
                    net: t,
                    org: t
                }
            ],
            uz: [
                1,
                {
                    co: t,
                    com: t,
                    net: t,
                    org: t
                }
            ],
            va: t,
            vc: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    mil: t,
                    net: t,
                    org: t,
                    gv: [
                        2,
                        {
                            d: e
                        }
                    ],
                    "0e": s,
                    mydns: e
                }
            ],
            ve: [
                1,
                {
                    arts: t,
                    bib: t,
                    co: t,
                    com: t,
                    e12: t,
                    edu: t,
                    emprende: t,
                    firm: t,
                    gob: t,
                    gov: t,
                    info: t,
                    int: t,
                    mil: t,
                    net: t,
                    nom: t,
                    org: t,
                    rar: t,
                    rec: t,
                    store: t,
                    tec: t,
                    web: t
                }
            ],
            vg: [
                1,
                {
                    edu: t
                }
            ],
            vi: [
                1,
                {
                    co: t,
                    com: t,
                    k12: t,
                    net: t,
                    org: t
                }
            ],
            vn: [
                1,
                {
                    ac: t,
                    ai: t,
                    biz: t,
                    com: t,
                    edu: t,
                    gov: t,
                    health: t,
                    id: t,
                    info: t,
                    int: t,
                    io: t,
                    name: t,
                    net: t,
                    org: t,
                    pro: t,
                    angiang: t,
                    bacgiang: t,
                    backan: t,
                    baclieu: t,
                    bacninh: t,
                    "baria-vungtau": t,
                    bentre: t,
                    binhdinh: t,
                    binhduong: t,
                    binhphuoc: t,
                    binhthuan: t,
                    camau: t,
                    cantho: t,
                    caobang: t,
                    daklak: t,
                    daknong: t,
                    danang: t,
                    dienbien: t,
                    dongnai: t,
                    dongthap: t,
                    gialai: t,
                    hagiang: t,
                    haiduong: t,
                    haiphong: t,
                    hanam: t,
                    hanoi: t,
                    hatinh: t,
                    haugiang: t,
                    hoabinh: t,
                    hungyen: t,
                    khanhhoa: t,
                    kiengiang: t,
                    kontum: t,
                    laichau: t,
                    lamdong: t,
                    langson: t,
                    laocai: t,
                    longan: t,
                    namdinh: t,
                    nghean: t,
                    ninhbinh: t,
                    ninhthuan: t,
                    phutho: t,
                    phuyen: t,
                    quangbinh: t,
                    quangnam: t,
                    quangngai: t,
                    quangninh: t,
                    quangtri: t,
                    soctrang: t,
                    sonla: t,
                    tayninh: t,
                    thaibinh: t,
                    thainguyen: t,
                    thanhhoa: t,
                    thanhphohochiminh: t,
                    thuathienhue: t,
                    tiengiang: t,
                    travinh: t,
                    tuyenquang: t,
                    vinhlong: t,
                    vinhphuc: t,
                    yenbai: t
                }
            ],
            vu: F,
            wf: [
                1,
                {
                    biz: e,
                    sch: e
                }
            ],
            ws: [
                1,
                {
                    com: t,
                    edu: t,
                    gov: t,
                    net: t,
                    org: t,
                    advisor: s,
                    cloud66: e,
                    dyndns: e,
                    mypets: e
                }
            ],
            yt: [
                1,
                {
                    org: e
                }
            ],
            "xn--mgbaam7a8h": t,
            امارات: t,
            "xn--y9a3aq": t,
            հայ: t,
            "xn--54b7fta0cc": t,
            বাংলা: t,
            "xn--90ae": t,
            бг: t,
            "xn--mgbcpq6gpa1a": t,
            البحرين: t,
            "xn--90ais": t,
            бел: t,
            "xn--fiqs8s": t,
            中国: t,
            "xn--fiqz9s": t,
            中國: t,
            "xn--lgbbat1ad8j": t,
            الجزائر: t,
            "xn--wgbh1c": t,
            مصر: t,
            "xn--e1a4c": t,
            ею: t,
            "xn--qxa6a": t,
            ευ: t,
            "xn--mgbah1a3hjkrd": t,
            موريتانيا: t,
            "xn--node": t,
            გე: t,
            "xn--qxam": t,
            ελ: t,
            "xn--j6w193g": [
                1,
                {
                    "xn--gmqw5a": t,
                    "xn--55qx5d": t,
                    "xn--mxtq1m": t,
                    "xn--wcvs22d": t,
                    "xn--uc0atv": t,
                    "xn--od0alg": t
                }
            ],
            香港: [
                1,
                {
                    個人: t,
                    公司: t,
                    政府: t,
                    教育: t,
                    組織: t,
                    網絡: t
                }
            ],
            "xn--2scrj9c": t,
            ಭಾರತ: t,
            "xn--3hcrj9c": t,
            ଭାରତ: t,
            "xn--45br5cyl": t,
            ভাৰত: t,
            "xn--h2breg3eve": t,
            भारतम्: t,
            "xn--h2brj9c8c": t,
            भारोत: t,
            "xn--mgbgu82a": t,
            ڀارت: t,
            "xn--rvc1e0am3e": t,
            ഭാരതം: t,
            "xn--h2brj9c": t,
            भारत: t,
            "xn--mgbbh1a": t,
            بارت: t,
            "xn--mgbbh1a71e": t,
            بھارت: t,
            "xn--fpcrj9c3d": t,
            భారత్: t,
            "xn--gecrj9c": t,
            ભારત: t,
            "xn--s9brj9c": t,
            ਭਾਰਤ: t,
            "xn--45brj9c": t,
            ভারত: t,
            "xn--xkc2dl3a5ee0h": t,
            இந்தியா: t,
            "xn--mgba3a4f16a": t,
            ایران: t,
            "xn--mgba3a4fra": t,
            ايران: t,
            "xn--mgbtx2b": t,
            عراق: t,
            "xn--mgbayh7gpa": t,
            الاردن: t,
            "xn--3e0b707e": t,
            한국: t,
            "xn--80ao21a": t,
            қаз: t,
            "xn--q7ce6a": t,
            ລາວ: t,
            "xn--fzc2c9e2c": t,
            ලංකා: t,
            "xn--xkc2al3hye2a": t,
            இலங்கை: t,
            "xn--mgbc0a9azcg": t,
            المغرب: t,
            "xn--d1alf": t,
            мкд: t,
            "xn--l1acc": t,
            мон: t,
            "xn--mix891f": t,
            澳門: t,
            "xn--mix082f": t,
            澳门: t,
            "xn--mgbx4cd0ab": t,
            مليسيا: t,
            "xn--mgb9awbf": t,
            عمان: t,
            "xn--mgbai9azgqp6j": t,
            پاکستان: t,
            "xn--mgbai9a5eva00b": t,
            پاكستان: t,
            "xn--ygbi2ammx": t,
            فلسطين: t,
            "xn--90a3ac": [
                1,
                {
                    "xn--80au": t,
                    "xn--90azh": t,
                    "xn--d1at": t,
                    "xn--c1avg": t,
                    "xn--o1ac": t,
                    "xn--o1ach": t
                }
            ],
            срб: [
                1,
                {
                    ак: t,
                    обр: t,
                    од: t,
                    орг: t,
                    пр: t,
                    упр: t
                }
            ],
            "xn--p1ai": t,
            рф: t,
            "xn--wgbl6a": t,
            قطر: t,
            "xn--mgberp4a5d4ar": t,
            السعودية: t,
            "xn--mgberp4a5d4a87g": t,
            السعودیة: t,
            "xn--mgbqly7c0a67fbc": t,
            السعودیۃ: t,
            "xn--mgbqly7cvafr": t,
            السعوديه: t,
            "xn--mgbpl2fh": t,
            سودان: t,
            "xn--yfro4i67o": t,
            新加坡: t,
            "xn--clchc0ea0b2g2a9gcd": t,
            சிங்கப்பூர்: t,
            "xn--ogbpf8fl": t,
            سورية: t,
            "xn--mgbtf8fl": t,
            سوريا: t,
            "xn--o3cw4h": [
                1,
                {
                    "xn--o3cyx2a": t,
                    "xn--12co0c3b4eva": t,
                    "xn--m3ch0j3a": t,
                    "xn--h3cuzk1di": t,
                    "xn--12c1fe0br": t,
                    "xn--12cfi8ixb8l": t
                }
            ],
            ไทย: [
                1,
                {
                    ทหาร: t,
                    ธุรกิจ: t,
                    เน็ต: t,
                    รัฐบาล: t,
                    ศึกษา: t,
                    องค์กร: t
                }
            ],
            "xn--pgbs0dh": t,
            تونس: t,
            "xn--kpry57d": t,
            台灣: t,
            "xn--kprw13d": t,
            台湾: t,
            "xn--nnx388a": t,
            臺灣: t,
            "xn--j1amh": t,
            укр: t,
            "xn--mgb2ddes": t,
            اليمن: t,
            xxx: t,
            ye: n,
            za: [
                0,
                {
                    ac: t,
                    agric: t,
                    alt: t,
                    co: t,
                    edu: t,
                    gov: t,
                    grondar: t,
                    law: t,
                    mil: t,
                    net: t,
                    ngo: t,
                    nic: t,
                    nis: t,
                    nom: t,
                    org: t,
                    school: t,
                    tm: t,
                    web: t
                }
            ],
            zm: [
                1,
                {
                    ac: t,
                    biz: t,
                    co: t,
                    com: t,
                    edu: t,
                    gov: t,
                    info: t,
                    mil: t,
                    net: t,
                    org: t,
                    sch: t
                }
            ],
            zw: [
                1,
                {
                    ac: t,
                    co: t,
                    gov: t,
                    mil: t,
                    org: t
                }
            ],
            aaa: t,
            aarp: t,
            abb: t,
            abbott: t,
            abbvie: t,
            abc: t,
            able: t,
            abogado: t,
            abudhabi: t,
            academy: [
                1,
                {
                    official: e
                }
            ],
            accenture: t,
            accountant: t,
            accountants: t,
            aco: t,
            actor: t,
            ads: t,
            adult: t,
            aeg: t,
            aetna: t,
            afl: t,
            africa: t,
            agakhan: t,
            agency: t,
            aig: t,
            airbus: t,
            airforce: t,
            airtel: t,
            akdn: t,
            alibaba: t,
            alipay: t,
            allfinanz: t,
            allstate: t,
            ally: t,
            alsace: t,
            alstom: t,
            amazon: t,
            americanexpress: t,
            americanfamily: t,
            amex: t,
            amfam: t,
            amica: t,
            amsterdam: t,
            analytics: t,
            android: t,
            anquan: t,
            anz: t,
            aol: t,
            apartments: t,
            app: [
                1,
                {
                    adaptable: e,
                    aiven: e,
                    beget: s,
                    brave: i,
                    clerk: e,
                    clerkstage: e,
                    wnext: e,
                    csb: [
                        2,
                        {
                            preview: e
                        }
                    ],
                    convex: e,
                    deta: e,
                    ondigitalocean: e,
                    easypanel: e,
                    encr: e,
                    evervault: o,
                    expo: [
                        2,
                        {
                            staging: e
                        }
                    ],
                    edgecompute: e,
                    "on-fleek": e,
                    flutterflow: e,
                    e2b: e,
                    framer: e,
                    hosted: s,
                    run: s,
                    web: e,
                    hasura: e,
                    botdash: e,
                    loginline: e,
                    lovable: e,
                    medusajs: e,
                    messerli: e,
                    netfy: e,
                    netlify: e,
                    ngrok: e,
                    "ngrok-free": e,
                    developer: s,
                    noop: e,
                    northflank: s,
                    upsun: s,
                    replit: a,
                    nyat: e,
                    snowflake: [
                        0,
                        {
                            "*": e,
                            privatelink: s
                        }
                    ],
                    streamlit: e,
                    storipress: e,
                    telebit: e,
                    typedream: e,
                    vercel: e,
                    bookonline: e,
                    wdh: e,
                    windsurf: e,
                    zeabur: e,
                    zerops: s
                }
            ],
            apple: t,
            aquarelle: t,
            arab: t,
            aramco: t,
            archi: t,
            army: t,
            art: t,
            arte: t,
            asda: t,
            associates: t,
            athleta: t,
            attorney: t,
            auction: t,
            audi: t,
            audible: t,
            audio: t,
            auspost: t,
            author: t,
            auto: t,
            autos: t,
            aws: [
                1,
                {
                    sagemaker: [
                        0,
                        {
                            "ap-northeast-1": m,
                            "ap-northeast-2": m,
                            "ap-south-1": m,
                            "ap-southeast-1": m,
                            "ap-southeast-2": m,
                            "ca-central-1": f,
                            "eu-central-1": m,
                            "eu-west-1": m,
                            "eu-west-2": m,
                            "us-east-1": f,
                            "us-east-2": f,
                            "us-west-2": f,
                            "af-south-1": l,
                            "ap-east-1": l,
                            "ap-northeast-3": l,
                            "ap-south-2": d,
                            "ap-southeast-3": l,
                            "ap-southeast-4": d,
                            "ca-west-1": [
                                0,
                                {
                                    notebook: e,
                                    "notebook-fips": e
                                }
                            ],
                            "eu-central-2": l,
                            "eu-north-1": l,
                            "eu-south-1": l,
                            "eu-south-2": l,
                            "eu-west-3": l,
                            "il-central-1": l,
                            "me-central-1": l,
                            "me-south-1": l,
                            "sa-east-1": l,
                            "us-gov-east-1": p,
                            "us-gov-west-1": p,
                            "us-west-1": [
                                0,
                                {
                                    notebook: e,
                                    "notebook-fips": e,
                                    studio: e
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
                            "ap-northeast-1": c,
                            "ap-southeast-1": c,
                            "ap-southeast-2": c,
                            "eu-central-1": c,
                            "eu-north-1": c,
                            "eu-west-1": c,
                            "us-east-1": c,
                            "us-east-2": c,
                            "us-west-2": c
                        }
                    ]
                }
            ],
            axa: t,
            azure: t,
            baby: t,
            baidu: t,
            banamex: t,
            band: t,
            bank: t,
            bar: t,
            barcelona: t,
            barclaycard: t,
            barclays: t,
            barefoot: t,
            bargains: t,
            baseball: t,
            basketball: [
                1,
                {
                    aus: e,
                    nz: e
                }
            ],
            bauhaus: t,
            bayern: t,
            bbc: t,
            bbt: t,
            bbva: t,
            bcg: t,
            bcn: t,
            beats: t,
            beauty: t,
            beer: t,
            bentley: t,
            berlin: t,
            best: t,
            bestbuy: t,
            bet: t,
            bharti: t,
            bible: t,
            bid: t,
            bike: t,
            bing: t,
            bingo: t,
            bio: t,
            black: t,
            blackfriday: t,
            blockbuster: t,
            blog: t,
            bloomberg: t,
            blue: t,
            bms: t,
            bmw: t,
            bnpparibas: t,
            boats: t,
            boehringer: t,
            bofa: t,
            bom: t,
            bond: t,
            boo: t,
            book: t,
            booking: t,
            bosch: t,
            bostik: t,
            boston: t,
            bot: t,
            boutique: t,
            box: t,
            bradesco: t,
            bridgestone: t,
            broadway: t,
            broker: t,
            brother: t,
            brussels: t,
            build: [
                1,
                {
                    v0: e,
                    windsurf: e
                }
            ],
            builders: [
                1,
                {
                    cloudsite: e
                }
            ],
            business: g,
            buy: t,
            buzz: t,
            bzh: t,
            cab: t,
            cafe: t,
            cal: t,
            call: t,
            calvinklein: t,
            cam: t,
            camera: t,
            camp: [
                1,
                {
                    emf: [
                        0,
                        {
                            at: e
                        }
                    ]
                }
            ],
            canon: t,
            capetown: t,
            capital: t,
            capitalone: t,
            car: t,
            caravan: t,
            cards: t,
            care: t,
            career: t,
            careers: t,
            cars: t,
            casa: [
                1,
                {
                    nabu: [
                        0,
                        {
                            ui: e
                        }
                    ]
                }
            ],
            case: t,
            cash: t,
            casino: t,
            catering: t,
            catholic: t,
            cba: t,
            cbn: t,
            cbre: t,
            center: t,
            ceo: t,
            cern: t,
            cfa: t,
            cfd: t,
            chanel: t,
            channel: t,
            charity: t,
            chase: t,
            chat: t,
            cheap: t,
            chintai: t,
            christmas: t,
            chrome: t,
            church: t,
            cipriani: t,
            circle: t,
            cisco: t,
            citadel: t,
            citi: t,
            citic: t,
            city: t,
            claims: t,
            cleaning: t,
            click: t,
            clinic: t,
            clinique: t,
            clothing: t,
            cloud: [
                1,
                {
                    convex: e,
                    elementor: e,
                    encoway: [
                        0,
                        {
                            eu: e
                        }
                    ],
                    statics: s,
                    ravendb: e,
                    axarnet: [
                        0,
                        {
                            "es-1": e
                        }
                    ],
                    diadem: e,
                    jelastic: [
                        0,
                        {
                            vip: e
                        }
                    ],
                    jele: e,
                    "jenv-aruba": [
                        0,
                        {
                            aruba: [
                                0,
                                {
                                    eur: [
                                        0,
                                        {
                                            it1: e
                                        }
                                    ]
                                }
                            ],
                            it1: e
                        }
                    ],
                    keliweb: [
                        2,
                        {
                            cs: e
                        }
                    ],
                    oxa: [
                        2,
                        {
                            tn: e,
                            uk: e
                        }
                    ],
                    primetel: [
                        2,
                        {
                            uk: e
                        }
                    ],
                    reclaim: [
                        0,
                        {
                            ca: e,
                            uk: e,
                            us: e
                        }
                    ],
                    trendhosting: [
                        0,
                        {
                            ch: e,
                            de: e
                        }
                    ],
                    jotelulu: e,
                    kuleuven: e,
                    laravel: e,
                    linkyard: e,
                    magentosite: s,
                    matlab: e,
                    observablehq: e,
                    perspecta: e,
                    vapor: e,
                    "on-rancher": s,
                    scw: [
                        0,
                        {
                            baremetal: [
                                0,
                                {
                                    "fr-par-1": e,
                                    "fr-par-2": e,
                                    "nl-ams-1": e
                                }
                            ],
                            "fr-par": [
                                0,
                                {
                                    cockpit: e,
                                    fnc: [
                                        2,
                                        {
                                            functions: e
                                        }
                                    ],
                                    k8s: _,
                                    s3: e,
                                    "s3-website": e,
                                    whm: e
                                }
                            ],
                            instances: [
                                0,
                                {
                                    priv: e,
                                    pub: e
                                }
                            ],
                            k8s: e,
                            "nl-ams": [
                                0,
                                {
                                    cockpit: e,
                                    k8s: _,
                                    s3: e,
                                    "s3-website": e,
                                    whm: e
                                }
                            ],
                            "pl-waw": [
                                0,
                                {
                                    cockpit: e,
                                    k8s: _,
                                    s3: e,
                                    "s3-website": e
                                }
                            ],
                            scalebook: e,
                            smartlabeling: e
                        }
                    ],
                    servebolt: e,
                    onstackit: [
                        0,
                        {
                            runs: e
                        }
                    ],
                    trafficplex: e,
                    "unison-services": e,
                    urown: e,
                    voorloper: e,
                    zap: e
                }
            ],
            club: [
                1,
                {
                    cloudns: e,
                    jele: e,
                    barsy: e
                }
            ],
            clubmed: t,
            coach: t,
            codes: [
                1,
                {
                    owo: s
                }
            ],
            coffee: t,
            college: t,
            cologne: t,
            commbank: t,
            community: [
                1,
                {
                    nog: e,
                    ravendb: e,
                    myforum: e
                }
            ],
            company: t,
            compare: t,
            computer: t,
            comsec: t,
            condos: t,
            construction: t,
            consulting: t,
            contact: t,
            contractors: t,
            cooking: t,
            cool: [
                1,
                {
                    elementor: e,
                    de: e
                }
            ],
            corsica: t,
            country: t,
            coupon: t,
            coupons: t,
            courses: t,
            cpa: t,
            credit: t,
            creditcard: t,
            creditunion: t,
            cricket: t,
            crown: t,
            crs: t,
            cruise: t,
            cruises: t,
            cuisinella: t,
            cymru: t,
            cyou: t,
            dad: t,
            dance: t,
            data: t,
            date: t,
            dating: t,
            datsun: t,
            day: t,
            dclk: t,
            dds: t,
            deal: t,
            dealer: t,
            deals: t,
            degree: t,
            delivery: t,
            dell: t,
            deloitte: t,
            delta: t,
            democrat: t,
            dental: t,
            dentist: t,
            desi: t,
            design: [
                1,
                {
                    graphic: e,
                    bss: e
                }
            ],
            dev: [
                1,
                {
                    "12chars": e,
                    myaddr: e,
                    panel: e,
                    lcl: s,
                    lclstage: s,
                    stg: s,
                    stgstage: s,
                    pages: e,
                    r2: e,
                    workers: e,
                    deno: e,
                    "deno-staging": e,
                    deta: e,
                    evervault: o,
                    fly: e,
                    githubpreview: e,
                    gateway: s,
                    hrsn: [
                        2,
                        {
                            psl: [
                                0,
                                {
                                    sub: e,
                                    wc: [
                                        0,
                                        {
                                            "*": e,
                                            sub: s
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    botdash: e,
                    inbrowser: s,
                    "is-a-good": e,
                    "is-a": e,
                    iserv: e,
                    runcontainers: e,
                    localcert: [
                        0,
                        {
                            user: s
                        }
                    ],
                    loginline: e,
                    barsy: e,
                    mediatech: e,
                    modx: e,
                    ngrok: e,
                    "ngrok-free": e,
                    "is-a-fullstack": e,
                    "is-cool": e,
                    "is-not-a": e,
                    localplayer: e,
                    xmit: e,
                    "platter-app": e,
                    replit: [
                        2,
                        {
                            archer: e,
                            bones: e,
                            canary: e,
                            global: e,
                            hacker: e,
                            id: e,
                            janeway: e,
                            kim: e,
                            kira: e,
                            kirk: e,
                            odo: e,
                            paris: e,
                            picard: e,
                            pike: e,
                            prerelease: e,
                            reed: e,
                            riker: e,
                            sisko: e,
                            spock: e,
                            staging: e,
                            sulu: e,
                            tarpit: e,
                            teams: e,
                            tucker: e,
                            wesley: e,
                            worf: e
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
                    vercel: e,
                    webhare: s
                }
            ],
            dhl: t,
            diamonds: t,
            diet: t,
            digital: [
                1,
                {
                    cloudapps: [
                        2,
                        {
                            london: e
                        }
                    ]
                }
            ],
            direct: [
                1,
                {
                    libp2p: e
                }
            ],
            directory: t,
            discount: t,
            discover: t,
            dish: t,
            diy: t,
            dnp: t,
            docs: t,
            doctor: t,
            dog: t,
            domains: t,
            dot: t,
            download: t,
            drive: t,
            dtv: t,
            dubai: t,
            dunlop: t,
            dupont: t,
            durban: t,
            dvag: t,
            dvr: t,
            earth: t,
            eat: t,
            eco: t,
            edeka: t,
            education: g,
            email: [
                1,
                {
                    crisp: [
                        0,
                        {
                            on: e
                        }
                    ],
                    tawk: H,
                    tawkto: H
                }
            ],
            emerck: t,
            energy: t,
            engineer: t,
            engineering: t,
            enterprises: t,
            epson: t,
            equipment: t,
            ericsson: t,
            erni: t,
            esq: t,
            estate: [
                1,
                {
                    compute: s
                }
            ],
            eurovision: t,
            eus: [
                1,
                {
                    party: K
                }
            ],
            events: [
                1,
                {
                    koobin: e,
                    co: e
                }
            ],
            exchange: t,
            expert: t,
            exposed: t,
            express: t,
            extraspace: t,
            fage: t,
            fail: t,
            fairwinds: t,
            faith: t,
            family: t,
            fan: t,
            fans: t,
            farm: [
                1,
                {
                    storj: e
                }
            ],
            farmers: t,
            fashion: t,
            fast: t,
            fedex: t,
            feedback: t,
            ferrari: t,
            ferrero: t,
            fidelity: t,
            fido: t,
            film: t,
            final: t,
            finance: t,
            financial: g,
            fire: t,
            firestone: t,
            firmdale: t,
            fish: t,
            fishing: t,
            fit: t,
            fitness: t,
            flickr: t,
            flights: t,
            flir: t,
            florist: t,
            flowers: t,
            fly: t,
            foo: t,
            food: t,
            football: t,
            ford: t,
            forex: t,
            forsale: t,
            forum: t,
            foundation: t,
            fox: t,
            free: t,
            fresenius: t,
            frl: t,
            frogans: t,
            frontier: t,
            ftr: t,
            fujitsu: t,
            fun: t,
            fund: t,
            furniture: t,
            futbol: t,
            fyi: t,
            gal: t,
            gallery: t,
            gallo: t,
            gallup: t,
            game: t,
            games: [
                1,
                {
                    pley: e,
                    sheezy: e
                }
            ],
            gap: t,
            garden: t,
            gay: [
                1,
                {
                    pages: e
                }
            ],
            gbiz: t,
            gdn: [
                1,
                {
                    cnpy: e
                }
            ],
            gea: t,
            gent: t,
            genting: t,
            george: t,
            ggee: t,
            gift: t,
            gifts: t,
            gives: t,
            giving: t,
            glass: t,
            gle: t,
            global: [
                1,
                {
                    appwrite: e
                }
            ],
            globo: t,
            gmail: t,
            gmbh: t,
            gmo: t,
            gmx: t,
            godaddy: t,
            gold: t,
            goldpoint: t,
            golf: t,
            goo: t,
            goodyear: t,
            goog: [
                1,
                {
                    cloud: e,
                    translate: e,
                    usercontent: s
                }
            ],
            google: t,
            gop: t,
            got: t,
            grainger: t,
            graphics: t,
            gratis: t,
            green: t,
            gripe: t,
            grocery: t,
            group: [
                1,
                {
                    discourse: e
                }
            ],
            gucci: t,
            guge: t,
            guide: t,
            guitars: t,
            guru: t,
            hair: t,
            hamburg: t,
            hangout: t,
            haus: t,
            hbo: t,
            hdfc: t,
            hdfcbank: t,
            health: [
                1,
                {
                    hra: e
                }
            ],
            healthcare: t,
            help: t,
            helsinki: t,
            here: t,
            hermes: t,
            hiphop: t,
            hisamitsu: t,
            hitachi: t,
            hiv: t,
            hkt: t,
            hockey: t,
            holdings: t,
            holiday: t,
            homedepot: t,
            homegoods: t,
            homes: t,
            homesense: t,
            honda: t,
            horse: t,
            hospital: t,
            host: [
                1,
                {
                    cloudaccess: e,
                    freesite: e,
                    easypanel: e,
                    fastvps: e,
                    myfast: e,
                    tempurl: e,
                    wpmudev: e,
                    jele: e,
                    mircloud: e,
                    wp2: e,
                    half: e
                }
            ],
            hosting: [
                1,
                {
                    opencraft: e
                }
            ],
            hot: t,
            hotels: t,
            hotmail: t,
            house: t,
            how: t,
            hsbc: t,
            hughes: t,
            hyatt: t,
            hyundai: t,
            ibm: t,
            icbc: t,
            ice: t,
            icu: t,
            ieee: t,
            ifm: t,
            ikano: t,
            imamat: t,
            imdb: t,
            immo: t,
            immobilien: t,
            inc: t,
            industries: t,
            infiniti: t,
            ing: t,
            ink: t,
            institute: t,
            insurance: t,
            insure: t,
            international: t,
            intuit: t,
            investments: t,
            ipiranga: t,
            irish: t,
            ismaili: t,
            ist: t,
            istanbul: t,
            itau: t,
            itv: t,
            jaguar: t,
            java: t,
            jcb: t,
            jeep: t,
            jetzt: t,
            jewelry: t,
            jio: t,
            jll: t,
            jmp: t,
            jnj: t,
            joburg: t,
            jot: t,
            joy: t,
            jpmorgan: t,
            jprs: t,
            juegos: t,
            juniper: t,
            kaufen: t,
            kddi: t,
            kerryhotels: t,
            kerryproperties: t,
            kfh: t,
            kia: t,
            kids: t,
            kim: t,
            kindle: t,
            kitchen: t,
            kiwi: t,
            koeln: t,
            komatsu: t,
            kosher: t,
            kpmg: t,
            kpn: t,
            krd: [
                1,
                {
                    co: e,
                    edu: e
                }
            ],
            kred: t,
            kuokgroup: t,
            kyoto: t,
            lacaixa: t,
            lamborghini: t,
            lamer: t,
            lancaster: t,
            land: t,
            landrover: t,
            lanxess: t,
            lasalle: t,
            lat: t,
            latino: t,
            latrobe: t,
            law: t,
            lawyer: t,
            lds: t,
            lease: t,
            leclerc: t,
            lefrak: t,
            legal: t,
            lego: t,
            lexus: t,
            lgbt: t,
            lidl: t,
            life: t,
            lifeinsurance: t,
            lifestyle: t,
            lighting: t,
            like: t,
            lilly: t,
            limited: t,
            limo: t,
            lincoln: t,
            link: [
                1,
                {
                    myfritz: e,
                    cyon: e,
                    dweb: s,
                    inbrowser: s,
                    nftstorage: Z,
                    mypep: e,
                    storacha: Z,
                    w3s: Z
                }
            ],
            live: [
                1,
                {
                    aem: e,
                    hlx: e,
                    ewp: s
                }
            ],
            living: t,
            llc: t,
            llp: t,
            loan: t,
            loans: t,
            locker: t,
            locus: t,
            lol: [
                1,
                {
                    omg: e
                }
            ],
            london: t,
            lotte: t,
            lotto: t,
            love: t,
            lpl: t,
            lplfinancial: t,
            ltd: t,
            ltda: t,
            lundbeck: t,
            luxe: t,
            luxury: t,
            madrid: t,
            maif: t,
            maison: t,
            makeup: t,
            man: t,
            management: t,
            mango: t,
            map: t,
            market: t,
            marketing: t,
            markets: t,
            marriott: t,
            marshalls: t,
            mattel: t,
            mba: t,
            mckinsey: t,
            med: t,
            media: tt,
            meet: t,
            melbourne: t,
            meme: t,
            memorial: t,
            men: t,
            menu: [
                1,
                {
                    barsy: e,
                    barsyonline: e
                }
            ],
            merck: t,
            merckmsd: t,
            miami: t,
            microsoft: t,
            mini: t,
            mint: t,
            mit: t,
            mitsubishi: t,
            mlb: t,
            mls: t,
            mma: t,
            mobile: t,
            moda: t,
            moe: t,
            moi: t,
            mom: [
                1,
                {
                    ind: e
                }
            ],
            monash: t,
            money: t,
            monster: t,
            mormon: t,
            mortgage: t,
            moscow: t,
            moto: t,
            motorcycles: t,
            mov: t,
            movie: t,
            msd: t,
            mtn: t,
            mtr: t,
            music: t,
            nab: t,
            nagoya: t,
            navy: t,
            nba: t,
            nec: t,
            netbank: t,
            netflix: t,
            network: [
                1,
                {
                    alces: s,
                    co: e,
                    arvo: e,
                    azimuth: e,
                    tlon: e
                }
            ],
            neustar: t,
            new: t,
            news: [
                1,
                {
                    noticeable: e
                }
            ],
            next: t,
            nextdirect: t,
            nexus: t,
            nfl: t,
            ngo: t,
            nhk: t,
            nico: t,
            nike: t,
            nikon: t,
            ninja: t,
            nissan: t,
            nissay: t,
            nokia: t,
            norton: t,
            now: t,
            nowruz: t,
            nowtv: t,
            nra: t,
            nrw: t,
            ntt: t,
            nyc: t,
            obi: t,
            observer: t,
            office: t,
            okinawa: t,
            olayan: t,
            olayangroup: t,
            ollo: t,
            omega: t,
            one: [
                1,
                {
                    kin: s,
                    service: e
                }
            ],
            ong: [
                1,
                {
                    obl: e
                }
            ],
            onl: t,
            online: [
                1,
                {
                    eero: e,
                    "eero-stage": e,
                    websitebuilder: e,
                    barsy: e
                }
            ],
            ooo: t,
            open: t,
            oracle: t,
            orange: [
                1,
                {
                    tech: e
                }
            ],
            organic: t,
            origins: t,
            osaka: t,
            otsuka: t,
            ott: t,
            ovh: [
                1,
                {
                    nerdpol: e
                }
            ],
            page: [
                1,
                {
                    aem: e,
                    hlx: e,
                    hlx3: e,
                    translated: e,
                    codeberg: e,
                    heyflow: e,
                    prvcy: e,
                    rocky: e,
                    pdns: e,
                    plesk: e
                }
            ],
            panasonic: t,
            paris: t,
            pars: t,
            partners: t,
            parts: t,
            party: t,
            pay: t,
            pccw: t,
            pet: t,
            pfizer: t,
            pharmacy: t,
            phd: t,
            philips: t,
            phone: t,
            photo: t,
            photography: t,
            photos: tt,
            physio: t,
            pics: t,
            pictet: t,
            pictures: [
                1,
                {
                    1337: e
                }
            ],
            pid: t,
            pin: t,
            ping: t,
            pink: t,
            pioneer: t,
            pizza: [
                1,
                {
                    ngrok: e
                }
            ],
            place: g,
            play: t,
            playstation: t,
            plumbing: t,
            plus: t,
            pnc: t,
            pohl: t,
            poker: t,
            politie: t,
            porn: t,
            pramerica: t,
            praxi: t,
            press: t,
            prime: t,
            prod: t,
            productions: t,
            prof: t,
            progressive: t,
            promo: t,
            properties: t,
            property: t,
            protection: t,
            pru: t,
            prudential: t,
            pub: [
                1,
                {
                    id: s,
                    kin: s,
                    barsy: e
                }
            ],
            pwc: t,
            qpon: t,
            quebec: t,
            quest: t,
            racing: t,
            radio: t,
            read: t,
            realestate: t,
            realtor: t,
            realty: t,
            recipes: t,
            red: t,
            redstone: t,
            redumbrella: t,
            rehab: t,
            reise: t,
            reisen: t,
            reit: t,
            reliance: t,
            ren: t,
            rent: t,
            rentals: t,
            repair: t,
            report: t,
            republican: t,
            rest: t,
            restaurant: t,
            review: t,
            reviews: t,
            rexroth: t,
            rich: t,
            richardli: t,
            ricoh: t,
            ril: t,
            rio: t,
            rip: [
                1,
                {
                    clan: e
                }
            ],
            rocks: [
                1,
                {
                    myddns: e,
                    stackit: e,
                    "lima-city": e,
                    webspace: e
                }
            ],
            rodeo: t,
            rogers: t,
            room: t,
            rsvp: t,
            rugby: t,
            ruhr: t,
            run: [
                1,
                {
                    appwrite: s,
                    development: e,
                    ravendb: e,
                    liara: [
                        2,
                        {
                            iran: e
                        }
                    ],
                    servers: e,
                    build: s,
                    code: s,
                    database: s,
                    migration: s,
                    onporter: e,
                    repl: e,
                    stackit: e,
                    val: [
                        0,
                        {
                            express: e,
                            web: e
                        }
                    ],
                    wix: e
                }
            ],
            rwe: t,
            ryukyu: t,
            saarland: t,
            safe: t,
            safety: t,
            sakura: t,
            sale: t,
            salon: t,
            samsclub: t,
            samsung: t,
            sandvik: t,
            sandvikcoromant: t,
            sanofi: t,
            sap: t,
            sarl: t,
            sas: t,
            save: t,
            saxo: t,
            sbi: t,
            sbs: t,
            scb: t,
            schaeffler: t,
            schmidt: t,
            scholarships: t,
            school: t,
            schule: t,
            schwarz: t,
            science: t,
            scot: [
                1,
                {
                    gov: [
                        2,
                        {
                            service: e
                        }
                    ]
                }
            ],
            search: t,
            seat: t,
            secure: t,
            security: t,
            seek: t,
            select: t,
            sener: t,
            services: [
                1,
                {
                    loginline: e
                }
            ],
            seven: t,
            sew: t,
            sex: t,
            sexy: t,
            sfr: t,
            shangrila: t,
            sharp: t,
            shell: t,
            shia: t,
            shiksha: t,
            shoes: t,
            shop: [
                1,
                {
                    base: e,
                    hoplix: e,
                    barsy: e,
                    barsyonline: e,
                    shopware: e
                }
            ],
            shopping: t,
            shouji: t,
            show: t,
            silk: t,
            sina: t,
            singles: t,
            site: [
                1,
                {
                    square: e,
                    canva: y,
                    cloudera: s,
                    convex: e,
                    cyon: e,
                    fastvps: e,
                    figma: e,
                    heyflow: e,
                    jele: e,
                    jouwweb: e,
                    loginline: e,
                    barsy: e,
                    notion: e,
                    omniwe: e,
                    opensocial: e,
                    madethis: e,
                    platformsh: s,
                    tst: s,
                    byen: e,
                    srht: e,
                    novecore: e,
                    cpanel: e,
                    wpsquared: e
                }
            ],
            ski: t,
            skin: t,
            sky: t,
            skype: t,
            sling: t,
            smart: t,
            smile: t,
            sncf: t,
            soccer: t,
            social: t,
            softbank: t,
            software: t,
            sohu: t,
            solar: t,
            solutions: t,
            song: t,
            sony: t,
            soy: t,
            spa: t,
            space: [
                1,
                {
                    myfast: e,
                    heiyu: e,
                    hf: [
                        2,
                        {
                            static: e
                        }
                    ],
                    "app-ionos": e,
                    project: e,
                    uber: e,
                    xs4all: e
                }
            ],
            sport: t,
            spot: t,
            srl: t,
            stada: t,
            staples: t,
            star: t,
            statebank: t,
            statefarm: t,
            stc: t,
            stcgroup: t,
            stockholm: t,
            storage: t,
            store: [
                1,
                {
                    barsy: e,
                    sellfy: e,
                    shopware: e,
                    storebase: e
                }
            ],
            stream: t,
            studio: t,
            study: t,
            style: t,
            sucks: t,
            supplies: t,
            supply: t,
            support: [
                1,
                {
                    barsy: e
                }
            ],
            surf: t,
            surgery: t,
            suzuki: t,
            swatch: t,
            swiss: t,
            sydney: t,
            systems: [
                1,
                {
                    knightpoint: e
                }
            ],
            tab: t,
            taipei: t,
            talk: t,
            taobao: t,
            target: t,
            tatamotors: t,
            tatar: t,
            tattoo: t,
            tax: t,
            taxi: t,
            tci: t,
            tdk: t,
            team: [
                1,
                {
                    discourse: e,
                    jelastic: e
                }
            ],
            tech: [
                1,
                {
                    cleverapps: e
                }
            ],
            technology: g,
            temasek: t,
            tennis: t,
            teva: t,
            thd: t,
            theater: t,
            theatre: t,
            tiaa: t,
            tickets: t,
            tienda: t,
            tips: t,
            tires: t,
            tirol: t,
            tjmaxx: t,
            tjx: t,
            tkmaxx: t,
            tmall: t,
            today: [
                1,
                {
                    prequalifyme: e
                }
            ],
            tokyo: t,
            tools: [
                1,
                {
                    addr: $,
                    myaddr: e
                }
            ],
            top: [
                1,
                {
                    ntdll: e,
                    wadl: s
                }
            ],
            toray: t,
            toshiba: t,
            total: t,
            tours: t,
            town: t,
            toyota: t,
            toys: t,
            trade: t,
            trading: t,
            training: t,
            travel: t,
            travelers: t,
            travelersinsurance: t,
            trust: t,
            trv: t,
            tube: t,
            tui: t,
            tunes: t,
            tushu: t,
            tvs: t,
            ubank: t,
            ubs: t,
            unicom: t,
            university: t,
            uno: t,
            uol: t,
            ups: t,
            vacations: t,
            vana: t,
            vanguard: t,
            vegas: t,
            ventures: t,
            verisign: t,
            versicherung: t,
            vet: t,
            viajes: t,
            video: t,
            vig: t,
            viking: t,
            villas: t,
            vin: t,
            vip: t,
            virgin: t,
            visa: t,
            vision: t,
            viva: t,
            vivo: t,
            vlaanderen: t,
            vodka: t,
            volvo: t,
            vote: t,
            voting: t,
            voto: t,
            voyage: t,
            wales: t,
            walmart: t,
            walter: t,
            wang: t,
            wanggou: t,
            watch: t,
            watches: t,
            weather: t,
            weatherchannel: t,
            webcam: t,
            weber: t,
            website: tt,
            wed: t,
            wedding: t,
            weibo: t,
            weir: t,
            whoswho: t,
            wien: t,
            wiki: tt,
            williamhill: t,
            win: t,
            windows: t,
            wine: t,
            winners: t,
            wme: t,
            wolterskluwer: t,
            woodside: t,
            work: t,
            works: t,
            world: t,
            wow: t,
            wtc: t,
            wtf: t,
            xbox: t,
            xerox: t,
            xihuan: t,
            xin: t,
            "xn--11b4c3d": t,
            कॉम: t,
            "xn--1ck2e1b": t,
            セール: t,
            "xn--1qqw23a": t,
            佛山: t,
            "xn--30rr7y": t,
            慈善: t,
            "xn--3bst00m": t,
            集团: t,
            "xn--3ds443g": t,
            在线: t,
            "xn--3pxu8k": t,
            点看: t,
            "xn--42c2d9a": t,
            คอม: t,
            "xn--45q11c": t,
            八卦: t,
            "xn--4gbrim": t,
            موقع: t,
            "xn--55qw42g": t,
            公益: t,
            "xn--55qx5d": t,
            公司: t,
            "xn--5su34j936bgsg": t,
            香格里拉: t,
            "xn--5tzm5g": t,
            网站: t,
            "xn--6frz82g": t,
            移动: t,
            "xn--6qq986b3xl": t,
            我爱你: t,
            "xn--80adxhks": t,
            москва: t,
            "xn--80aqecdr1a": t,
            католик: t,
            "xn--80asehdb": t,
            онлайн: t,
            "xn--80aswg": t,
            сайт: t,
            "xn--8y0a063a": t,
            联通: t,
            "xn--9dbq2a": t,
            קום: t,
            "xn--9et52u": t,
            时尚: t,
            "xn--9krt00a": t,
            微博: t,
            "xn--b4w605ferd": t,
            淡马锡: t,
            "xn--bck1b9a5dre4c": t,
            ファッション: t,
            "xn--c1avg": t,
            орг: t,
            "xn--c2br7g": t,
            नेट: t,
            "xn--cck2b3b": t,
            ストア: t,
            "xn--cckwcxetd": t,
            アマゾン: t,
            "xn--cg4bki": t,
            삼성: t,
            "xn--czr694b": t,
            商标: t,
            "xn--czrs0t": t,
            商店: t,
            "xn--czru2d": t,
            商城: t,
            "xn--d1acj3b": t,
            дети: t,
            "xn--eckvdtc9d": t,
            ポイント: t,
            "xn--efvy88h": t,
            新闻: t,
            "xn--fct429k": t,
            家電: t,
            "xn--fhbei": t,
            كوم: t,
            "xn--fiq228c5hs": t,
            中文网: t,
            "xn--fiq64b": t,
            中信: t,
            "xn--fjq720a": t,
            娱乐: t,
            "xn--flw351e": t,
            谷歌: t,
            "xn--fzys8d69uvgm": t,
            電訊盈科: t,
            "xn--g2xx48c": t,
            购物: t,
            "xn--gckr3f0f": t,
            クラウド: t,
            "xn--gk3at1e": t,
            通販: t,
            "xn--hxt814e": t,
            网店: t,
            "xn--i1b6b1a6a2e": t,
            संगठन: t,
            "xn--imr513n": t,
            餐厅: t,
            "xn--io0a7i": t,
            网络: t,
            "xn--j1aef": t,
            ком: t,
            "xn--jlq480n2rg": t,
            亚马逊: t,
            "xn--jvr189m": t,
            食品: t,
            "xn--kcrx77d1x4a": t,
            飞利浦: t,
            "xn--kput3i": t,
            手机: t,
            "xn--mgba3a3ejt": t,
            ارامكو: t,
            "xn--mgba7c0bbn0a": t,
            العليان: t,
            "xn--mgbab2bd": t,
            بازار: t,
            "xn--mgbca7dzdo": t,
            ابوظبي: t,
            "xn--mgbi4ecexp": t,
            كاثوليك: t,
            "xn--mgbt3dhd": t,
            همراه: t,
            "xn--mk1bu44c": t,
            닷컴: t,
            "xn--mxtq1m": t,
            政府: t,
            "xn--ngbc5azd": t,
            شبكة: t,
            "xn--ngbe9e0a": t,
            بيتك: t,
            "xn--ngbrx": t,
            عرب: t,
            "xn--nqv7f": t,
            机构: t,
            "xn--nqv7fs00ema": t,
            组织机构: t,
            "xn--nyqy26a": t,
            健康: t,
            "xn--otu796d": t,
            招聘: t,
            "xn--p1acf": [
                1,
                {
                    "xn--90amc": e,
                    "xn--j1aef": e,
                    "xn--j1ael8b": e,
                    "xn--h1ahn": e,
                    "xn--j1adp": e,
                    "xn--c1avg": e,
                    "xn--80aaa0cvac": e,
                    "xn--h1aliz": e,
                    "xn--90a1af": e,
                    "xn--41a": e
                }
            ],
            рус: [
                1,
                {
                    биз: e,
                    ком: e,
                    крым: e,
                    мир: e,
                    мск: e,
                    орг: e,
                    самара: e,
                    сочи: e,
                    спб: e,
                    я: e
                }
            ],
            "xn--pssy2u": t,
            大拿: t,
            "xn--q9jyb4c": t,
            みんな: t,
            "xn--qcka1pmc": t,
            グーグル: t,
            "xn--rhqv96g": t,
            世界: t,
            "xn--rovu88b": t,
            書籍: t,
            "xn--ses554g": t,
            网址: t,
            "xn--t60b56a": t,
            닷넷: t,
            "xn--tckwe": t,
            コム: t,
            "xn--tiq49xqyj": t,
            天主教: t,
            "xn--unup4y": t,
            游戏: t,
            "xn--vermgensberater-ctb": t,
            vermögensberater: t,
            "xn--vermgensberatung-pwb": t,
            vermögensberatung: t,
            "xn--vhquv": t,
            企业: t,
            "xn--vuq861b": t,
            信息: t,
            "xn--w4r85el8fhu5dnra": t,
            嘉里大酒店: t,
            "xn--w4rs40l": t,
            嘉里: t,
            "xn--xhq521b": t,
            广东: t,
            "xn--zfr164b": t,
            政务: t,
            xyz: [
                1,
                {
                    botdash: e,
                    telebit: s
                }
            ],
            yachts: t,
            yahoo: t,
            yamaxun: t,
            yandex: t,
            yodobashi: t,
            yoga: t,
            yokohama: t,
            you: t,
            youtube: t,
            yun: t,
            zappos: t,
            zara: t,
            zero: t,
            zip: t,
            zone: [
                1,
                {
                    cloud66: e,
                    triton: s,
                    stackit: e,
                    lima: e
                }
            ],
            zuerich: t
        }
    ];
}();
function l(t, e, r, n) {
    let s = null, i = e;
    for(; void 0 !== i && (0 !== (i[0] & n) && (s = {
        index: r + 1,
        isIcann: 1 === i[0],
        isPrivate: 2 === i[0]
    }), -1 !== r);){
        const e = i[1];
        i = Object.prototype.hasOwnProperty.call(e, t[r]) ? e[t[r]] : e["*"], r -= 1;
    }
    return s;
}
function m(t, e, r) {
    var n;
    if (function(t, e, r) {
        if (!e.allowPrivateDomains && t.length > 3) {
            const e = t.length - 1, n = t.charCodeAt(e), s = t.charCodeAt(e - 1), i = t.charCodeAt(e - 2), o = t.charCodeAt(e - 3);
            if (109 === n && 111 === s && 99 === i && 46 === o) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "com", !0;
            if (103 === n && 114 === s && 111 === i && 46 === o) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "org", !0;
            if (117 === n && 100 === s && 101 === i && 46 === o) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "edu", !0;
            if (118 === n && 111 === s && 103 === i && 46 === o) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "gov", !0;
            if (116 === n && 101 === s && 110 === i && 46 === o) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "net", !0;
            if (101 === n && 100 === s && 46 === i) return r.isIcann = !0, r.isPrivate = !1, r.publicSuffix = "de", !0;
        }
        return !1;
    }(t, e, r)) return;
    const s = t.split("."), i = (e.allowPrivateDomains ? 2 : 0) | (e.allowIcannDomains ? 1 : 0), o = l(s, u, s.length - 1, i);
    if (null !== o) return r.isIcann = o.isIcann, r.isPrivate = o.isPrivate, void (r.publicSuffix = s.slice(o.index + 1).join("."));
    const a = l(s, c, s.length - 1, i);
    if (null !== a) return r.isIcann = a.isIcann, r.isPrivate = a.isPrivate, void (r.publicSuffix = s.slice(a.index).join("."));
    r.isIcann = !1, r.isPrivate = !1, r.publicSuffix = null !== (n = s[s.length - 1]) && void 0 !== n ? n : null;
}
const d = {
    domain: null,
    domainWithoutSuffix: null,
    hostname: null,
    isIcann: null,
    isIp: null,
    isPrivate: null,
    publicSuffix: null,
    subdomain: null
};
function f(t, e = {}) {
    return a(t, 5, m, e, {
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
function p(t, e = {}) {
    var r;
    return (r = d).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(t, 0, m, e, d).hostname;
}
function h(t, e = {}) {
    var r;
    return (r = d).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(t, 2, m, e, d).publicSuffix;
}
function g(t, e = {}) {
    var r;
    return (r = d).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(t, 3, m, e, d).domain;
}
function A(t, e = {}) {
    var r;
    return (r = d).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(t, 4, m, e, d).subdomain;
}
function _(t, e = {}) {
    var r;
    return (r = d).domain = null, r.domainWithoutSuffix = null, r.hostname = null, r.isIcann = null, r.isIp = null, r.isPrivate = null, r.publicSuffix = null, r.subdomain = null, a(t, 5, m, e, d).domainWithoutSuffix;
}
