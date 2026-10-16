"use strict";
var nd = Object.create;
var rn = Object.defineProperty;
var rd = Object.getOwnPropertyDescriptor;
var id = Object.getOwnPropertyNames;
var od = Object.getPrototypeOf,
  sd = Object.prototype.hasOwnProperty;
var W = (e, t) => () => (e && (t = e((e = 0))), t);
var M = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  Mr = (e, t) => {
    for (var n in t) rn(e, n, { get: t[n], enumerable: !0 });
  },
  is = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of id(t))
        !sd.call(e, i) &&
          i !== n &&
          rn(e, i, { get: () => t[i], enumerable: !(r = rd(t, i)) || r.enumerable });
    return e;
  };
var q = (e, t, n) => (
    (n = e != null ? nd(od(e)) : {}),
    is(t || !e || !e.__esModule ? rn(n, "default", { value: e, enumerable: !0 }) : n, e)
  ),
  os = (e) => is(rn({}, "__esModule", { value: !0 }), e);
var qr,
  Ye,
  Vr = W(() => {
    ((qr = class {
      constructor(t, n, r) {
        (r == null && typeof t == "string" && (r = t.length),
          (this.string = t),
          (this.pos = this.start = n || 0),
          (this.end = r));
      }
      eof() {
        return this.pos >= this.end;
      }
      limit(t, n) {
        return new this.constructor(this.string, t, n);
      }
      peek() {
        return this.string.charCodeAt(this.pos);
      }
      next() {
        if (this.pos < this.string.length) return this.string.charCodeAt(this.pos++);
      }
      eat(t) {
        let n = this.peek(),
          r = typeof t == "function" ? t(n) : n === t;
        return (r && this.next(), r);
      }
      eatWhile(t) {
        let n = this.pos;
        for (; !this.eof() && this.eat(t););
        return this.pos !== n;
      }
      backUp(t) {
        this.pos -= t || 1;
      }
      current() {
        return this.substring(this.start, this.pos);
      }
      substring(t, n) {
        return this.string.slice(t, n);
      }
      error(t) {
        let n = new Error(`${t} at char ${this.pos + 1}`);
        return ((n.originalMessage = t), (n.pos = this.pos), (n.string = this.string), n);
      }
    }),
      (Ye = qr));
  });
function Ze(e) {
  return e === 39 || e === 34;
}
function Fe(e) {
  return e > 47 && e < 58;
}
function on(e, t, n) {
  return ((t = t || 65), (n = n || 90), (e &= -33), e >= t && e <= n);
}
function ls(e) {
  return Fe(e) || on(e);
}
function ad(e) {
  return e === 32 || e === 9 || e === 160;
}
function Oe(e) {
  return ad(e) || e === 10 || e === 13;
}
function $e(e, t, n, r) {
  r = r ? Object.assign({}, as, r) : as;
  let i = e.pos;
  if (e.eat(t)) {
    let o = 1,
      s;
    for (; !e.eof();)
      if (!Hr(e, r))
        if (((s = e.next()), s === t)) o++;
        else if (s === n) {
          if ((o--, !o)) return ((e.start = i), !0);
        } else s === r.escape && e.next();
    if (((e.pos = i), r.throws))
      throw e.error(`Unable to find matching pair for ${String.fromCharCode(t)}`);
  }
  return !1;
}
var ss,
  Hr,
  as,
  Wr = W(() => {
    ((ss = { escape: 92, throws: !1 }),
      (Hr = function (e, t) {
        t = t ? Object.assign({}, ss, t) : ss;
        let n = e.pos,
          r = e.peek();
        if (e.eat(Ze)) {
          for (; !e.eof();)
            switch (e.next()) {
              case r:
                return ((e.start = n), !0);
              case t.escape:
                e.next();
                break;
            }
          if (((e.pos = n), t.throws)) throw e.error("Unable to consume quoted string");
        }
        return !1;
      }));
    as = { escape: 92, throws: !1 };
  });
function ld(e, t) {
  let n = e.pos;
  if (e.eatWhile(t)) return new an(e, n, e.pos);
  e.pos = n;
}
function yd(e) {
  return fs(e) || Re(e, kd);
}
function wd(e) {
  let t = e.pos;
  if (Hr(e)) {
    let n = e.pos,
      r,
      i;
    ((e.pos = t), e.next(), (r = e.start = e.pos), (e.pos = n), e.backUp(1), (i = e.pos));
    let o = Re(e, r, i);
    return ((e.pos = n), o);
  }
  return fs(e) || Sd(e);
}
function kd(e) {
  return e !== ds && !Qr(e) && !Oe(e);
}
function Qr(e) {
  return e === vd || e === bd;
}
function Sd(e) {
  return Re(e, Td);
}
function Td(e) {
  return !isNaN(e) && !Ze(e) && !Oe(e) && !Qr(e);
}
function Od(e) {
  return Re(e, $d);
}
function $d(e) {
  return ls(e) || e === Cd || e === Ad || e === Ed || e === Id;
}
function Gr(e, t) {
  let n = e.pos;
  for (let r = 0; r < t.length; r++) if (!e.eat(t[r])) return ((e.pos = n), !1);
  return ((e.start = n), !0);
}
function hs(e, t, n, r) {
  let i = e.pos;
  if (Gr(e, t)) {
    for (; !e.eof();) {
      if (Gr(e, n)) return !0;
      e.next();
    }
    return r ? !0 : ((e.pos = i), !1);
  }
  return ((e.pos = i), null);
}
function St(e) {
  return e.split("").map((t) => t.charCodeAt(0));
}
function Ud(e, t) {
  t = Object.assign({}, Dd, t);
  let n = typeof e == "string" ? new Ye(e) : e,
    r = new kt(n, "root"),
    i = new Set(t.empty),
    o = t.special.reduce((f, h) => f.set(h, St(`</${h}>`)), new Map()),
    s = (f, h) => f.selfClosing || (!t.xml && i.has(h)),
    a,
    l,
    u,
    c = [r];
  for (; !n.eof();)
    if ((a = Bd(n)))
      if (((u = qd(a)), a.type === "open"))
        ((l = new kt(n, "tag", a)),
          cs(c).addChild(l),
          o.has(u) ? (l.close = Md(n, o.get(u))) : s(a, u) || c.push(l));
      else if (a.type === "close") {
        for (let f = c.length - 1; f > 0; f--)
          if (c[f].name.toLowerCase() === u) {
            ((c[f].close = a), (c = c.slice(0, f)));
            break;
          }
      } else cs(c).addChild(new kt(n, a.type, a));
    else n.next();
  return r;
}
function Bd(e) {
  if (e.peek() === 60) return Ld(e) || zd(e) || ps(e);
}
function Md(e, t) {
  let n = e.pos,
    r;
  for (; !e.eof();) {
    if (Gr(e, t)) return ((e.pos = e.start), ps(e));
    e.next();
  }
  return ((e.pos = n), null);
}
function qd(e) {
  return e.name ? e.name.value.toLowerCase() : `#${e.type}`;
}
function cs(e) {
  return e[e.length - 1];
}
var kt,
  Re,
  an,
  ud,
  cd,
  fd,
  dd,
  pd,
  hd,
  md,
  gd,
  sn,
  fs,
  bd,
  ds,
  vd,
  xd,
  Ed,
  Ad,
  us,
  Cd,
  Nd,
  Pd,
  Id,
  ps,
  Rd,
  _d,
  Ld,
  jd,
  Fd,
  zd,
  Dd,
  Tt,
  Jr = W(() => {
    Vr();
    Wr();
    ((kt = class {
      constructor(t, n, r, i) {
        ((this.stream = t),
          (this.type = n),
          (this.open = r),
          (this.close = i),
          (this.children = []),
          (this.parent = null));
      }
      get name() {
        return this.type === "tag" && this.open
          ? this.open && this.open.name && this.open.name.value
          : "#" + this.type;
      }
      get attributes() {
        return this.open && this.open.attributes;
      }
      get start() {
        return this.open && this.open.start;
      }
      get end() {
        return this.close ? this.close.end : this.open && this.open.end;
      }
      get firstChild() {
        return this.children[0];
      }
      get nextSibling() {
        let t = this.getIndex();
        return t !== -1 ? this.parent.children[t + 1] : null;
      }
      get previousSibling() {
        let t = this.getIndex();
        return t !== -1 ? this.parent.children[t - 1] : null;
      }
      getIndex() {
        return this.parent ? this.parent.children.indexOf(this) : -1;
      }
      addChild(t) {
        return (this.removeChild(t), this.children.push(t), (t.parent = this), this);
      }
      removeChild(t) {
        let n = this.children.indexOf(t);
        return (n !== -1 && (this.children.splice(n, 1), (t.parent = null)), this);
      }
    }),
      (Re = function (e, t, n) {
        return typeof t == "function" ? ld(e, t) : new an(e, t, n);
      }));
    ((an = class {
      constructor(t, n, r) {
        ((this.stream = t),
          (this.start = n ?? t.start),
          (this.end = r ?? t.pos),
          (this._value = null));
      }
      get value() {
        if (this._value === null) {
          let t = this.stream.start,
            n = this.stream.pos;
          ((this.stream.start = this.start),
            (this.stream.pos = this.end),
            (this._value = this.stream.current()),
            (this.stream.start = t),
            (this.stream.pos = n));
        }
        return this._value;
      }
      toString() {
        return this.value;
      }
      valueOf() {
        return `${this.value} [${this.start}; ${this.end}]`;
      }
    }),
      (ud = 60),
      (cd = 62),
      (fd = 91),
      (dd = 93),
      (pd = 40),
      (hd = 41),
      (md = 123),
      (gd = 125),
      (sn = { throws: !0 }),
      (fs = function (e) {
        let t = e.pos;
        if ($e(e, ud, cd, sn) || $e(e, fd, dd, sn) || $e(e, pd, hd, sn) || $e(e, md, gd, sn))
          return Re(e, t);
      }),
      (bd = 47),
      (ds = 61),
      (vd = 62),
      (xd = function (e) {
        let t = [],
          n,
          r,
          i;
        for (; !e.eof();)
          if ((e.eatWhile(Oe), (i = { start: e.pos }), (i.name = yd(e))))
            (e.eat(ds) ? (i.value = wd(e)) : (i.boolean = !0), (i.end = e.pos), t.push(i));
          else {
            if (Qr(e.peek())) break;
            e.next();
          }
        return t;
      }));
    ((Ed = 45),
      (Ad = 46),
      (us = 47),
      (Cd = 58),
      (Nd = 60),
      (Pd = 62),
      (Id = 95),
      (ps = function (e) {
        let t = e.pos;
        if (e.eat(Nd)) {
          let n = { type: e.eat(us) ? "close" : "open" };
          if (
            (n.name = Od(e)) &&
            (n.type !== "close" &&
              ((n.attributes = xd(e)), e.eatWhile(Oe), (n.selfClosing = e.eat(us))),
            e.eat(Pd))
          )
            return Object.assign(Re(e, t), n);
        }
        return ((e.pos = t), null);
      }));
    ((Rd = St("<!--")),
      (_d = St("-->")),
      (Ld = function (e) {
        let t = e.pos;
        if (hs(e, Rd, _d, !0)) {
          let n = Re(e, t);
          return ((n.type = "comment"), n);
        }
        return null;
      }),
      (jd = St("<![CDATA[")),
      (Fd = St("]]>")),
      (zd = function (e) {
        let t = e.pos;
        if (hs(e, jd, Fd, !0)) {
          let n = Re(e, t);
          return ((n.type = "cdata"), n);
        }
        return null;
      }),
      (Dd = {
        xml: !1,
        special: ["script", "style"],
        empty: [
          "img",
          "meta",
          "link",
          "br",
          "base",
          "hr",
          "area",
          "wbr",
          "col",
          "embed",
          "input",
          "param",
          "source",
          "track",
        ],
      }));
    Tt = Ud;
  });
function Vd(e) {
  e = e.slice();
  let t;
  for (; t !== e.length;) ((t = e.length), Zr(e[0]) && e.shift(), Zr(tt(e)) && e.pop());
  return e;
}
function ks(e) {
  return Vd(e, Zr);
}
function Zr(e) {
  let t = e && e.type;
  return t === "whitespace" || t === "comment";
}
function Ss(e, t) {
  let n = e.pos;
  for (let r = 0, i = t.length; r < i; r++) if (!e.eat(t.charCodeAt(r))) return ((e.pos = n), !1);
  return !0;
}
function Kr(e, t) {
  let n = e.pos;
  return e.eat(t) ? ((e.start = n), !0) : !1;
}
function Et(e, t) {
  let n = e.pos;
  return e.eatWhile(t) ? ((e.start = n), !0) : !1;
}
function tt(e) {
  return e[e.length - 1];
}
function ze(e) {
  return e && e.valueOf();
}
function Wd(e) {
  if (Gd(e.peek())) {
    let t = e.pos,
      n = Hd.get(e.next()),
      r = new C(e, "separator", t);
    return (r.property("type", n), r);
  }
}
function Gd(e) {
  return e === Ts || e === Es || e === As || e === et || e === nt;
}
function Xd(e) {
  return e === et || e === nt;
}
function Yd(e, t, n) {
  let r = new C(e, "arguments"),
    i = n ? Cs : Kd,
    o = [];
  for (let s = 0, a = t.length, l; s < a; s++)
    ((l = t[s]), i(l) ? (r.add(gs(e, o) || Zd(e, l.start)), (o.length = 0)) : o.push(l));
  return (o.length && r.add(gs(e, o)), r);
}
function gs(e, t) {
  if (((t = ks(t)), t.length)) {
    let n = new C(e, "argument", t[0].start, tt(t).end);
    for (let r = 0; r < t.length; r++) n.add(t[r]);
    return n;
  }
}
function Zd(e, t) {
  let n = new C(e, "argument", t, t);
  return (n.property("empty", !0), n);
}
function Kd(e) {
  return e.property("type") === "comma";
}
function Cs(e) {
  return e.property("type") === "propertyTerminator";
}
function Se(e) {
  return Ps(e) && new C(e, "ident");
}
function Ps(e) {
  let t = e.pos;
  return (e.eat(Ns), e.eat(Is) ? (e.eatWhile(Os), (e.start = t), !0) : ((e.pos = t), !1));
}
function Is(e) {
  return e === ep || e === Ns || on(e) || e >= 128;
}
function Os(e) {
  return Fe(e) || Is(e);
}
function rt(e, t, n, r, i) {
  let o = e.pos;
  if (e.eat(n)) {
    let s = r(e, o);
    if (s || i) return ((e.start = o), new C(e, t, o).add(s));
  }
  e.pos = o;
}
function ri(e) {
  return rt(e, "at-keyword", tp, Se);
}
function ii(e, t) {
  let n = e.pos;
  if (((t = t || rp), (e.eat($s) || e.eat(Rs)) && e.eat(et))) {
    let r = new C(e, "interpolation", n),
      i = 1,
      o;
    for (; !e.eof();)
      if (e.eat(et)) i++;
      else if (e.eat(nt)) {
        if ((i--, !i)) return ((r.end = e.pos), r);
      } else if ((o = t(e))) r.add(o);
      else break;
  }
  e.pos = n;
}
function np(e) {
  let t = e.pos;
  return (e.eat($s) || e.eat(Rs)) && $e(e, et, nt) ? ((e.start = t), !0) : ((e.pos = t), !1);
}
function rp(e) {
  let t = e.pos;
  for (; !e.eof() && e.peek() !== nt;) At(e) || e.next();
  if (t !== e.pos) return new C(e, "expression", t);
}
function oi(e) {
  return At(e, !0);
}
function At(e, t) {
  let n = e.peek(),
    r,
    i,
    o;
  if (Ze(n)) {
    ((e.start = e.pos), e.next());
    let s = n,
      a = e.pos;
    for (; !e.eof() && ((r = e.pos), !(e.eat(s) || e.eat(bs)));)
      (e.eat(92) ? e.eat(bs) : t && (o = ii(e)) && (i ? i.push(o) : (i = [o])), e.next());
    if (t) {
      let l = new C(e, "string"),
        u = new C(e, "unquoted", a, r);
      return (u.add(i), l.add(u), l.property("quote", s), l);
    }
    return !0;
  }
  return !1;
}
function bs(e) {
  return e === 10 || e === 13;
}
function ip(e) {
  if (_s(e)) {
    let t = new C(e, "comment");
    return (t.property("type", "single-line"), t);
  }
}
function op(e) {
  if (Ls(e)) {
    let t = new C(e, "comment");
    return (t.property("type", "multiline"), t);
  }
}
function sp(e) {
  return _s(e) || Ls(e);
}
function _s(e) {
  let t = e.pos;
  if (e.eat(un) && e.eat(un)) {
    for (e.start = t; !e.eof() && !ap(e.next()););
    return !0;
  }
  return ((e.pos = t), !1);
}
function Ls(e) {
  let t = e.pos;
  if (e.eat(un) && e.eat(vs)) {
    for (; !e.eof() && !(e.next() === vs && e.eat(un)););
    return ((e.start = t), !0);
  }
  return ((e.pos = t), !1);
}
function ap(e) {
  return e === 10 || e === 13;
}
function lp(e) {
  return De(e) && new C(e, "whitespace");
}
function De(e) {
  return Et(e, Oe);
}
function fp(e) {
  let t = e.pos;
  if (e.eat(up)) {
    ln(e);
    let n = Se(e);
    ln(e);
    let r = dp(e);
    ln(e);
    let i = oi(e) || Se(e);
    return (ln(e), e.eat(cp), new C(e, "attribute", t).add(n).add(r).add(i));
  }
}
function ln(e) {
  for (; !e.eof();) if (!De(e) && !sp(e)) return !0;
}
function dp(e) {
  return Et(e, pp) && new C(e, "operator");
}
function pp(e) {
  return e === 126 || e === 124 || e === 94 || e === 36 || e === 42 || e === 61;
}
function ai(e) {
  if (js(e)) return new C(e, "backtick");
}
function js(e) {
  let t = e.pos;
  return $e(e, xs, xs) ? ((e.start = t), !0) : !1;
}
function mp(e) {
  return rt(e, "class", hp, Se);
}
function vp(e) {
  return e === Fs || e === zs || e === Us || e === Ds;
}
function yp(e) {
  return rt(e, "hash", xp, wp, !0);
}
function wp(e) {
  if (kp(e)) return new C(e, "hash-value");
}
function kp(e) {
  return Et(e, Sp);
}
function Sp(e) {
  return Fe(e) || on(e, 65, 70) || e === 95 || e === 45 || e > 128;
}
function Ep(e) {
  return rt(e, "id", Tp, Se);
}
function Cp(e) {
  return rt(e, "important", Ap, Se);
}
function Np(e) {
  if (Pp(e)) {
    let t = e.start,
      n = new C(e, "value"),
      r = Ip(e) ? new C(e, "unit") : null;
    return new C(e, "number", t).add(n).add(r);
  }
}
function Pp(e) {
  let t = e.pos;
  if ((e.eat($p), e.eatWhile(Fe))) {
    e.start = t;
    let n = e.pos;
    return ((e.eat(ys) && e.eatWhile(Fe)) || (e.pos = n), !0);
  } else if (e.eat(ys) && e.eatWhile(Fe)) return ((e.start = t), !0);
  return ((e.pos = t), !1);
}
function Ip(e) {
  return Ps(e) || Op(e);
}
function Op(e) {
  return Kr(e, 37);
}
function $p(e) {
  return e === 45 || e === 43;
}
function Up(e) {
  return Bp(e) && new C(e, "operator");
}
function Bp(e) {
  return Kr(e, Ms) ? (e.eatWhile(Bs), !0) : !!Kr(e, Mp);
}
function Ms(e) {
  return e === Rp || e === zp || e === Bs || e === Dp;
}
function Mp(e) {
  return e === _p || e === Lp || e === jp || e === Fp || Ms(e);
}
function qs(e) {
  return Et(e, Wp);
}
function Wp(e) {
  return !isNaN(e) && !Ze(e) && !Oe(e) && e !== 40 && e !== 41 && e !== 92 && !Gp(e);
}
function Gp(e) {
  return (e >= 0 && e <= 8) || e === 11 || (e >= 14 && e <= 31) || e === 127;
}
function Vs(e) {
  let t = e.pos;
  if (Ss(e, "url(")) {
    De(e);
    let n = oi(e) || Hp(e);
    return (De(e), e.eat(41), new C(e, "url", t).add(n));
  }
  e.pos = t;
}
function Hs(e) {
  let t = e.pos;
  return Ss(e, "url(")
    ? (De(e), At(e) || qs(e), De(e), e.eat(41), (e.start = t), !0)
    : ((e.pos = t), !1);
}
function Qp(e) {
  return rt(e, "variable", Ws, Jp);
}
function Jp(e) {
  if (Xp(e)) return new C(e, "name");
}
function Xp(e) {
  return Et(e, Yp);
}
function Yp(e) {
  return e === Ws || Os(e);
}
function cn(e) {
  let t = Zp(e) || ms(e, cn);
  if (t && t.type === "ident") {
    let n = ms(e, cn);
    if (n) return new C(e, "function", t.start, n.end).add(t).add(n);
  }
  return t || rh(e);
}
function Zp(e) {
  return nh(e) || Vs(e) || Kp(e) || eh(e) || Wd(e);
}
function Kp(e) {
  return ii(e) || ai(e) || Se(e) || ri(e) || mp(e) || Ep(e) || Vp(e) || fp(e) || bp(e);
}
function eh(e) {
  return Vs(e) || oi(e) || ii(e) || ai(e) || Np(e) || yp(e) || th(e) || Cp(e) || Up(e);
}
function th(e) {
  return ai(e) || Qp(e) || ri(e) || Se(e);
}
function nh(e) {
  return si(e) || lp(e);
}
function rh(e) {
  if (((e.start = e.pos), e.next() != null)) return new C(e, "unknown");
}
function ih(e) {
  return li(e, "selector");
}
function oh(e) {
  let t = typeof e == "string" ? new Ye(e) : e,
    n = [];
  for (; !t.eof();) n.push(cn(t));
  let r;
  if (n.length === 1) r = n[0];
  else {
    r = new C(t, "property-name", t.start, t.end);
    for (let i = 0, o = n.length; i < o; i++) r.add(n[i]);
  }
  return r;
}
function sh(e) {
  return li(e);
}
function ah(e) {
  return li(e);
}
function li(e, t) {
  t = t || "item";
  let n = typeof e == "string" ? new Ye(e) : e,
    r = [],
    i = [],
    o = () => {
      let a = ks(i);
      if (a.length) {
        let l = new C(n, t, a[0].start, tt(a).end);
        for (let u = 0; u < a.length; u++) l.add(a[u]);
        r.push(l);
      }
      i.length = 0;
    },
    s;
  for (; !n.eof();)
    if (n.eat(44)) o();
    else if ((s = cn(n))) s.type !== "comment" && i.push(s);
    else throw n.error("Unexpected character");
  return (o(), r);
}
function lh(e, t, n, r) {
  if (!t.length) return null;
  let i = t[0];
  return ((i.end = tt(t).end), new ei(e, i, n, r));
}
function uh(e, t, n, r) {
  if (!t.length) return null;
  let i = 0,
    o,
    s = t[i++];
  return (
    i < t.length
      ? ((o = t[i++]), (o.type = "expression"), (o.end = tt(t).end))
      : (o = new C(e, "expression", s.end, s.end)),
    new ti(e, s, o, n, r)
  );
}
function Xr(e, t, n) {
  if (!t.length) return null;
  let r,
    i,
    o = 0,
    s = t[o++];
  return (
    o < t.length && ((i = t[o++]), (i.type = "value"), (i.end = tt(t).end)),
    s && i && (r = new C(e, "separator", s.end, i.start)),
    new ni(e, s, i, r, n)
  );
}
function mh(e) {
  let t = typeof e == "string" ? new Ye(e) : e,
    n = new Yr(),
    r = n,
    i,
    o,
    s,
    a = [],
    l = () => {
      o && (a.push(o), (o = null));
    };
  for (; !t.eof();)
    if (!De(t)) {
      if ((s = si(t))) {
        n.addComment(s);
        continue;
      }
      if (((t.start = t.pos), t.eatWhile(fh))) a.length || (o ? l() : (o = new C(t, "preparse")));
      else if (t.eat(dh)) (l(), r.add(Xr(t, a, new C(t, "termintator"))), (a.length = 0));
      else if (t.eat(ph))
        (l(),
          a.length > 0 &&
            ((i =
              a[0].type === "at-keyword"
                ? uh(t, a, new C(t, "body-start"))
                : lh(t, a, new C(t, "body-start"))),
            r.add(i),
            (r = i),
            (a.length = 0)));
      else if (t.eat(hh))
        (l(),
          r.add(Xr(t, a)),
          r.type !== "stylesheet" && ((r.contentEndToken = new C(t, "body-end")), (r = r.parent)),
          (a.length = 0));
      else if ((s = ri(t))) (l(), a.push(s));
      else if (Hs(t) || np(t) || js(t) || gh(t, n) || At(t) || t.next())
        ((o = o || new C(t, "preparse")), (o.end = t.pos));
      else throw new Error(`Unexpected end-of-stream at ${t.pos}`);
    }
  for (o && a.push(o), r.add(Xr(t, a)), t.start = t.pos; r && r !== n;)
    ((r.contentEndToken = new C(t, "body-end")), (r = r.parent));
  return n;
}
function gh(e, t) {
  if (e.eat(ws)) {
    let n = 1,
      r;
    for (; !e.eof();)
      if (e.eat(ch)) {
        if ((n--, !n)) break;
      } else if (e.eat(ws)) n++;
      else {
        if (Hs(e) || At(e)) continue;
        if ((r = si(e))) {
          t.addComment(r);
          continue;
        } else e.next();
      }
    return !0;
  }
  return !1;
}
var Ke,
  Yr,
  C,
  Ts,
  Es,
  As,
  et,
  nt,
  Hd,
  Qd,
  Jd,
  ms,
  Ns,
  ep,
  tp,
  $s,
  Rs,
  vs,
  un,
  si,
  up,
  cp,
  xs,
  hp,
  Fs,
  zs,
  Ds,
  Us,
  gp,
  bp,
  xp,
  Tp,
  Ap,
  ys,
  Rp,
  _p,
  Lp,
  jp,
  Fp,
  zp,
  Bs,
  Dp,
  qp,
  Vp,
  Hp,
  Ws,
  ei,
  ti,
  ni,
  ws,
  ch,
  fh,
  dh,
  ph,
  hh,
  ve,
  Ct = W(() => {
    Vr();
    Wr();
    ((Ke = class {
      constructor(t) {
        ((this.type = t), (this.children = []), (this.parent = null));
      }
      get firstChild() {
        return this.children[0];
      }
      get nextSibling() {
        let t = this.index();
        return t !== -1 ? this.parent.children[t + 1] : null;
      }
      get previousSibling() {
        let t = this.index();
        return t !== -1 ? this.parent.children[t - 1] : null;
      }
      index() {
        return this.parent ? this.parent.children.indexOf(this) : -1;
      }
      add(t) {
        return (t && (t.remove(), this.children.push(t), (t.parent = this)), this);
      }
      remove() {
        if (this.parent) {
          let t = this.index();
          t !== -1 && (this.parent.children.splice(t, 1), (this.parent = null));
        }
        return this;
      }
    }),
      (Yr = class extends Ke {
        constructor() {
          (super("stylesheet"), (this.comments = []));
        }
        get start() {
          let t = this.firstChild;
          return t && t.start;
        }
        get end() {
          let t = this.children[this.children.length - 1];
          return t && t.end;
        }
        addComment(t) {
          this.comments.push(t);
        }
      }));
    ((C = class {
      constructor(t, n, r, i) {
        ((this.stream = t),
          (this.start = r ?? t.start),
          (this.end = i ?? t.pos),
          (this.type = n),
          (this._props = null),
          (this._value = null),
          (this._items = null));
      }
      get size() {
        return this._items ? this._items.length : 0;
      }
      get items() {
        return this._items;
      }
      clone(t, n) {
        return new this.constructor(this.stream, this.type, t ?? this.start, n ?? this.end);
      }
      add(t) {
        if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) this.add(t[n]);
        else t && (this._items ? this._items.push(t) : (this._items = [t]));
        return this;
      }
      remove(t) {
        if (this._items) {
          let n = this._items.indexOf(t);
          n !== -1 && this._items.splice(n, 1);
        }
        return this;
      }
      item(t) {
        let n = this.size;
        return this._items && this._items[(n + t) % n];
      }
      limit() {
        return this.stream.limit(this.start, this.end);
      }
      slice(t, n) {
        let r = this.clone(),
          i = this._items && this._items.slice(t, n);
        return (
          i && i.length
            ? ((r.start = i[0].start), (r.end = i[i.length - 1].end), r.add(i))
            : i && (r.start = r.end),
          r
        );
      }
      property(t, n) {
        return (
          typeof n < "u" && (this._props || (this._props = {}), (this._props[t] = n)),
          this._props && this._props[t]
        );
      }
      toString() {
        return `${this.valueOf()} [${this.start}, ${this.end}] (${this.type})`;
      }
      valueOf() {
        return (
          this._value === null && (this._value = this.stream.substring(this.start, this.end)),
          this._value
        );
      }
    }),
      (Ts = 44),
      (Es = 58),
      (As = 59),
      (et = 123),
      (nt = 125),
      (Hd = new Map()
        .set(Ts, "comma")
        .set(Es, "propertyDelimiter")
        .set(As, "propertyTerminator")
        .set(et, "ruleStart")
        .set(nt, "ruleEnd")));
    ((Qd = 40),
      (Jd = 41),
      (ms = function (e, t) {
        if (e.peek() === Qd) {
          let n = e.pos;
          e.next();
          let r = [],
            i,
            o = !1;
          for (; !e.eof() && !(Xd(e.peek()) || e.eat(Jd) || ((i = t(e)), !i));)
            (Cs(i) && (o = !0), r.push(i));
          return ((e.start = n), Yd(e, r, o));
        }
      }));
    ((Ns = 45), (ep = 95));
    tp = 64;
    (($s = 35), (Rs = 64));
    ((vs = 42),
      (un = 47),
      (si = function (e) {
        return ip(e) || op(e);
      }));
    ((up = 91), (cp = 93));
    xs = 96;
    hp = 46;
    ((Fs = 43),
      (zs = 126),
      (Ds = 62),
      (Us = 38),
      (gp = { [Fs]: "adjacentSibling", [zs]: "generalSibling", [Ds]: "child", [Us]: "nesting" }),
      (bp = function (e) {
        if (vp(e.peek())) {
          let t = e.pos,
            n = gp[e.next()],
            r = new C(e, "combinator", t);
          return (r.property("type", n), r);
        }
      }));
    xp = 35;
    Tp = 35;
    Ap = 33;
    ys = 46;
    ((Rp = 33), (_p = 42), (Lp = 43), (jp = 45), (Fp = 47), (zp = 60), (Bs = 61), (Dp = 62));
    ((qp = 58),
      (Vp = function (e) {
        let t = e.pos;
        if (e.eatWhile(qp)) {
          let n = Se(e);
          if (n) return new C(e, "pseudo", t).add(n);
        }
        e.pos = t;
      }),
      (Hp = function (e) {
        return qs(e) && new C(e, "unquoted");
      }));
    Ws = 36;
    ei = class extends Ke {
      constructor(t, n, r, i) {
        (super("rule"),
          (this.stream = t),
          (this.selectorToken = n),
          (this.contentStartToken = r),
          (this.contentEndToken = i || r),
          (this._parsedSelector = null));
      }
      get selector() {
        return ze(this.selectorToken);
      }
      get parsedSelector() {
        return (
          this._parsedSelector || (this._parsedSelector = ih(this.selectorToken.limit())),
          this._parsedSelector
        );
      }
      get start() {
        return this.selectorToken && this.selectorToken.start;
      }
      get end() {
        let t = this.contentEndToken || this.contentStartToken || this.nameToken;
        return t && t.end;
      }
    };
    ti = class extends Ke {
      constructor(t, n, r, i, o) {
        (super("at-rule"),
          (this.stream = t),
          (this.nameToken = n),
          (this.expressionToken = r),
          (this.contentStartToken = i),
          (this.contentEndToken = o || i),
          (this._parsedExpression = null));
      }
      get name() {
        return ze(this.nameToken && this.nameToken.item(0));
      }
      get expression() {
        return ze(this.expressionToken);
      }
      get parsedExpression() {
        return (
          this._parsedExpression || (this._parsedExpression = ah(this.expressionToken.limit())),
          this._parsedExpression
        );
      }
      get start() {
        return this.nameToken && this.nameToken.start;
      }
      get end() {
        let t = this.contentEndToken || this.contentStartToken || this.nameToken;
        return t && t.end;
      }
    };
    ((ni = class extends Ke {
      constructor(t, n, r, i, o) {
        (super("property"),
          (this.stream = t),
          (this.nameToken = n),
          (this.valueToken = r),
          (this._parsedName = null),
          (this._parsedValue = null),
          (this.separatorToken = i),
          (this.terminatorToken = o));
      }
      get name() {
        return ze(this.nameToken);
      }
      get parsedName() {
        return (
          this._parsedName || (this._parsedName = oh(this.nameToken.limit())), this._parsedName
        );
      }
      get value() {
        return ze(this.valueToken);
      }
      get parsedValue() {
        return (
          this._parsedValue || (this._parsedValue = sh(this.valueToken.limit())), this._parsedValue
        );
      }
      get separator() {
        return ze(this.separatorToken);
      }
      get terminator() {
        return ze(this.terminatorToken);
      }
      get start() {
        let t = this.nameToken || this.separatorToken || this.valueToken || this.terminatorToken;
        return t && t.start;
      }
      get end() {
        let t = this.terminatorToken || this.valueToken || this.separatorToken || this.nameToken;
        return t && t.end;
      }
    }),
      (ws = 40),
      (ch = 41),
      (fh = 58),
      (dh = 59),
      (ph = 123),
      (hh = 125));
    ve = mh;
  });
var fn,
  Gs = W(() => {
    "use strict";
    fn = class e {
      constructor(t, n, r) {
        ((this.document = t),
          (this.start = this.pos = n || 0),
          (this._sof = r ? r[0] : 0),
          (this._eof = r ? r[1] : t.getText().length));
      }
      sof() {
        return this.pos <= this._sof;
      }
      eof() {
        return this.pos >= this._eof;
      }
      limit(t, n) {
        return new e(this.document, t, [t, n]);
      }
      peek() {
        return this.eof() ? NaN : this.document.getText().charCodeAt(this.pos);
      }
      next() {
        if (this.eof()) return NaN;
        let t = this.document.getText().charCodeAt(this.pos);
        return (this.pos++, this.eof() && (this.pos = this._eof), t);
      }
      backUp(t) {
        return ((this.pos -= t), this.pos < 0 && (this.pos = 0), this.peek());
      }
      current() {
        return this.substring(this.start, this.pos);
      }
      substring(t, n) {
        return this.document.getText().substring(t, n);
      }
      error(t) {
        return new Error(`${t} at offset ${this.pos}`);
      }
      eat(t) {
        let n = this.peek(),
          r = typeof t == "function" ? t(n) : n === t;
        return (r && this.next(), r);
      }
      eatWhile(t) {
        let n = this.pos;
        for (; !this.eof() && this.eat(t););
        return this.pos !== n;
      }
    };
  });
function ui(e, t) {
  if (e.length <= 1) return e;
  let n = (e.length / 2) | 0,
    r = e.slice(0, n),
    i = e.slice(n);
  (ui(r, t), ui(i, t));
  let o = 0,
    s = 0,
    a = 0;
  for (; o < r.length && s < i.length;) t(r[o], i[s]) <= 0 ? (e[a++] = r[o++]) : (e[a++] = i[s++]);
  for (; o < r.length;) e[a++] = r[o++];
  for (; s < i.length;) e[a++] = i[s++];
  return e;
}
function Qs(e, t, n = 0) {
  let r = t ? [n] : [];
  for (let i = 0; i < e.length; i++) {
    let o = e.charCodeAt(i);
    Js(o) && (o === 13 && i + 1 < e.length && e.charCodeAt(i + 1) === 10 && i++, r.push(n + i + 1));
  }
  return r;
}
function Js(e) {
  return e === 13 || e === 10;
}
function Xs(e) {
  let t = e.start,
    n = e.end;
  return t.line > n.line || (t.line === n.line && t.character > n.character)
    ? { start: n, end: t }
    : e;
}
function bh(e) {
  let t = Xs(e.range);
  return t !== e.range ? { newText: e.newText, range: t } : e;
}
var dn,
  pn,
  Ys = W(() => {
    "use strict";
    dn = class e {
      constructor(t, n, r, i) {
        ((this._uri = t),
          (this._languageId = n),
          (this._version = r),
          (this._content = i),
          (this._lineOffsets = void 0));
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(t) {
        if (t) {
          let n = this.offsetAt(t.start),
            r = this.offsetAt(t.end);
          return this._content.substring(n, r);
        }
        return this._content;
      }
      update(t, n) {
        for (let r of t)
          if (e.isIncremental(r)) {
            let i = Xs(r.range),
              o = this.offsetAt(i.start),
              s = this.offsetAt(i.end);
            this._content =
              this._content.substring(0, o) +
              r.text +
              this._content.substring(s, this._content.length);
            let a = Math.max(i.start.line, 0),
              l = Math.max(i.end.line, 0),
              u = this._lineOffsets,
              c = Qs(r.text, !1, o);
            if (l - a === c.length) for (let h = 0, p = c.length; h < p; h++) u[h + a + 1] = c[h];
            else
              c.length < 1e4
                ? u.splice(a + 1, l - a, ...c)
                : (this._lineOffsets = u = u.slice(0, a + 1).concat(c, u.slice(l + 1)));
            let f = r.text.length - (s - o);
            if (f !== 0) for (let h = a + 1 + c.length, p = u.length; h < p; h++) u[h] = u[h] + f;
          } else if (e.isFull(r)) ((this._content = r.text), (this._lineOffsets = void 0));
          else throw new Error("Unknown change event received");
        this._version = n;
      }
      getLineOffsets() {
        return (
          this._lineOffsets === void 0 && (this._lineOffsets = Qs(this._content, !0)),
          this._lineOffsets
        );
      }
      positionAt(t) {
        t = Math.max(Math.min(t, this._content.length), 0);
        let n = this.getLineOffsets(),
          r = 0,
          i = n.length;
        if (i === 0) return { line: 0, character: t };
        for (; r < i;) {
          let s = Math.floor((r + i) / 2);
          n[s] > t ? (i = s) : (r = s + 1);
        }
        let o = r - 1;
        return ((t = this.ensureBeforeEOL(t, n[o])), { line: o, character: t - n[o] });
      }
      offsetAt(t) {
        let n = this.getLineOffsets();
        if (t.line >= n.length) return this._content.length;
        if (t.line < 0) return 0;
        let r = n[t.line];
        if (t.character <= 0) return r;
        let i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length,
          o = Math.min(r + t.character, i);
        return this.ensureBeforeEOL(o, r);
      }
      getLineRange(t) {
        let n = this.getLineOffsets();
        if (t >= n.length) {
          let s = n.length - 1;
          return {
            start: { line: s, character: 0 },
            end: { line: s, character: this._content.length - n[s] },
          };
        } else if (t < 0)
          return { start: { line: 0, character: 0 }, end: { line: 0, character: 0 } };
        let r = n[t],
          i = t + 1 < n.length ? n[t + 1] : this._content.length,
          o = this.ensureBeforeEOL(i, r);
        return { start: { line: t, character: 0 }, end: { line: t, character: o - r } };
      }
      getEOLCharacters(t) {
        let n = this.getLineOffsets();
        if (t >= n.length) return "";
        if (t < 0) return "";
        let r = t + 1 < n.length ? n[t + 1] : this._content.length,
          i = this.ensureBeforeEOL(r, n[t]);
        return this._content.substring(i, r);
      }
      ensureBeforeEOL(t, n) {
        for (; t > n && Js(this._content.charCodeAt(t - 1));) t--;
        return t;
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
      static isIncremental(t) {
        let n = t;
        return (
          n != null &&
          typeof n.text == "string" &&
          n.range !== void 0 &&
          (n.rangeLength === void 0 || typeof n.rangeLength == "number")
        );
      }
      static isFull(t) {
        let n = t;
        return (
          n != null && typeof n.text == "string" && n.range === void 0 && n.rangeLength === void 0
        );
      }
    };
    (function (e) {
      function t(i, o, s, a) {
        return new dn(i, o, s, a);
      }
      e.create = t;
      function n(i, o, s) {
        if (i instanceof dn) return (i.update(o, s), i);
        throw new Error("TextDocument.update: document must be created by TextDocument.create");
      }
      e.update = n;
      function r(i, o) {
        let s = i.getText(),
          a = ui(o.map(bh), (c, f) => {
            let h = c.range.start.line - f.range.start.line;
            return h === 0 ? c.range.start.character - f.range.start.character : h;
          }),
          l = 0,
          u = [];
        for (let c of a) {
          let f = i.offsetAt(c.range.start);
          if (f < l) throw new Error("Overlapping edit");
          (f > l && u.push(s.substring(l, f)),
            c.newText.length && u.push(c.newText),
            (l = i.offsetAt(c.range.end)));
        }
        return (u.push(s.substr(l)), u.join(""));
      }
      e.applyEdits = r;
    })(pn || (pn = {}));
  });
function R(e, t) {
  let n = e.uri.toString(),
    r = hn.get(n),
    i = e.version;
  if (t && r && i === r.key) return r.value;
  let s = (X(e.languageId) ? ve : Tt)(e.getText());
  return (t && hn.set(n, { key: i, value: s }), s);
}
function Zs(e) {
  let t = e.uri.toString();
  hn.set(t, void 0);
}
function Ks(e) {
  let t = e.uri.toString();
  hn.delete(t);
}
var hn,
  ie = W(() => {
    "use strict";
    Jr();
    Ct();
    Z();
    hn = new Map();
  });
function mn(e, t) {
  t === void 0 && (t = !1);
  var n = e.length,
    r = 0,
    i = "",
    o = 0,
    s = 16,
    a = 0,
    l = 0,
    u = 0,
    c = 0,
    f = 0;
  function h(m, v) {
    for (var g = 0, b = 0; g < m || !v;) {
      var T = e.charCodeAt(r);
      if (T >= 48 && T <= 57) b = b * 16 + T - 48;
      else if (T >= 65 && T <= 70) b = b * 16 + T - 65 + 10;
      else if (T >= 97 && T <= 102) b = b * 16 + T - 97 + 10;
      else break;
      (r++, g++);
    }
    return (g < m && (b = -1), b);
  }
  function p(m) {
    ((r = m), (i = ""), (o = 0), (s = 16), (f = 0));
  }
  function k() {
    var m = r;
    if (e.charCodeAt(r) === 48) r++;
    else for (r++; r < e.length && it(e.charCodeAt(r));) r++;
    if (r < e.length && e.charCodeAt(r) === 46)
      if ((r++, r < e.length && it(e.charCodeAt(r))))
        for (r++; r < e.length && it(e.charCodeAt(r));) r++;
      else return ((f = 3), e.substring(m, r));
    var v = r;
    if (r < e.length && (e.charCodeAt(r) === 69 || e.charCodeAt(r) === 101))
      if (
        (r++,
        ((r < e.length && e.charCodeAt(r) === 43) || e.charCodeAt(r) === 45) && r++,
        r < e.length && it(e.charCodeAt(r)))
      ) {
        for (r++; r < e.length && it(e.charCodeAt(r));) r++;
        v = r;
      } else f = 3;
    return e.substring(m, v);
  }
  function x() {
    for (var m = "", v = r; ;) {
      if (r >= n) {
        ((m += e.substring(v, r)), (f = 2));
        break;
      }
      var g = e.charCodeAt(r);
      if (g === 34) {
        ((m += e.substring(v, r)), r++);
        break;
      }
      if (g === 92) {
        if (((m += e.substring(v, r)), r++, r >= n)) {
          f = 2;
          break;
        }
        var b = e.charCodeAt(r++);
        switch (b) {
          case 34:
            m += '"';
            break;
          case 92:
            m += "\\";
            break;
          case 47:
            m += "/";
            break;
          case 98:
            m += "\b";
            break;
          case 102:
            m += "\f";
            break;
          case 110:
            m += `
`;
            break;
          case 114:
            m += "\r";
            break;
          case 116:
            m += "	";
            break;
          case 117:
            var T = h(4, !0);
            T >= 0 ? (m += String.fromCharCode(T)) : (f = 4);
            break;
          default:
            f = 5;
        }
        v = r;
        continue;
      }
      if (g >= 0 && g <= 31)
        if (Nt(g)) {
          ((m += e.substring(v, r)), (f = 2));
          break;
        } else f = 6;
      r++;
    }
    return m;
  }
  function w() {
    if (((i = ""), (f = 0), (o = r), (l = a), (c = u), r >= n)) return ((o = n), (s = 17));
    var m = e.charCodeAt(r);
    if (ci(m)) {
      do (r++, (i += String.fromCharCode(m)), (m = e.charCodeAt(r)));
      while (ci(m));
      return (s = 15);
    }
    if (Nt(m))
      return (
        r++,
        (i += String.fromCharCode(m)),
        m === 13 &&
          e.charCodeAt(r) === 10 &&
          (r++,
          (i += `
`)),
        a++,
        (u = r),
        (s = 14)
      );
    switch (m) {
      case 123:
        return (r++, (s = 1));
      case 125:
        return (r++, (s = 2));
      case 91:
        return (r++, (s = 3));
      case 93:
        return (r++, (s = 4));
      case 58:
        return (r++, (s = 6));
      case 44:
        return (r++, (s = 5));
      case 34:
        return (r++, (i = x()), (s = 10));
      case 47:
        var v = r - 1;
        if (e.charCodeAt(r + 1) === 47) {
          for (r += 2; r < n && !Nt(e.charCodeAt(r));) r++;
          return ((i = e.substring(v, r)), (s = 12));
        }
        if (e.charCodeAt(r + 1) === 42) {
          r += 2;
          for (var g = n - 1, b = !1; r < g;) {
            var T = e.charCodeAt(r);
            if (T === 42 && e.charCodeAt(r + 1) === 47) {
              ((r += 2), (b = !0));
              break;
            }
            (r++, Nt(T) && (T === 13 && e.charCodeAt(r) === 10 && r++, a++, (u = r)));
          }
          return (b || (r++, (f = 1)), (i = e.substring(v, r)), (s = 13));
        }
        return ((i += String.fromCharCode(m)), r++, (s = 16));
      case 45:
        if (((i += String.fromCharCode(m)), r++, r === n || !it(e.charCodeAt(r)))) return (s = 16);
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return ((i += k()), (s = 11));
      default:
        for (; r < n && S(m);) (r++, (m = e.charCodeAt(r)));
        if (o !== r) {
          switch (((i = e.substring(o, r)), i)) {
            case "true":
              return (s = 8);
            case "false":
              return (s = 9);
            case "null":
              return (s = 7);
          }
          return (s = 16);
        }
        return ((i += String.fromCharCode(m)), r++, (s = 16));
    }
  }
  function S(m) {
    if (ci(m) || Nt(m)) return !1;
    switch (m) {
      case 125:
      case 93:
      case 123:
      case 91:
      case 34:
      case 58:
      case 44:
      case 47:
        return !1;
    }
    return !0;
  }
  function y() {
    var m;
    do m = w();
    while (m >= 12 && m <= 15);
    return m;
  }
  return {
    setPosition: p,
    getPosition: function () {
      return r;
    },
    scan: t ? y : w,
    getToken: function () {
      return s;
    },
    getTokenValue: function () {
      return i;
    },
    getTokenOffset: function () {
      return o;
    },
    getTokenLength: function () {
      return r - o;
    },
    getTokenStartLine: function () {
      return l;
    },
    getTokenStartCharacter: function () {
      return o - c;
    },
    getTokenError: function () {
      return f;
    },
  };
}
function ci(e) {
  return (
    e === 32 ||
    e === 9 ||
    e === 11 ||
    e === 12 ||
    e === 160 ||
    e === 5760 ||
    (e >= 8192 && e <= 8203) ||
    e === 8239 ||
    e === 8287 ||
    e === 12288 ||
    e === 65279
  );
}
function Nt(e) {
  return e === 10 || e === 13 || e === 8232 || e === 8233;
}
function it(e) {
  return e >= 48 && e <= 57;
}
var gn = W(() => {
  "use strict";
});
var fi = W(() => {
  "use strict";
  gn();
});
function ea(e, t, n) {
  (t === void 0 && (t = []), n === void 0 && (n = bn.DEFAULT));
  var r = null,
    i = [],
    o = [];
  function s(l) {
    Array.isArray(i) ? i.push(l) : r !== null && (i[r] = l);
  }
  var a = {
    onObjectBegin: function () {
      var l = {};
      (s(l), o.push(i), (i = l), (r = null));
    },
    onObjectProperty: function (l) {
      r = l;
    },
    onObjectEnd: function () {
      i = o.pop();
    },
    onArrayBegin: function () {
      var l = [];
      (s(l), o.push(i), (i = l), (r = null));
    },
    onArrayEnd: function () {
      i = o.pop();
    },
    onLiteralValue: s,
    onError: function (l, u, c) {
      t.push({ error: l, offset: u, length: c });
    },
  };
  return (ta(e, a, n), i[0]);
}
function ta(e, t, n) {
  n === void 0 && (n = bn.DEFAULT);
  var r = mn(e, !1);
  function i(E) {
    return E
      ? function () {
          return E(
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter(),
          );
        }
      : function () {
          return !0;
        };
  }
  function o(E) {
    return E
      ? function (I) {
          return E(
            I,
            r.getTokenOffset(),
            r.getTokenLength(),
            r.getTokenStartLine(),
            r.getTokenStartCharacter(),
          );
        }
      : function () {
          return !0;
        };
  }
  var s = i(t.onObjectBegin),
    a = o(t.onObjectProperty),
    l = i(t.onObjectEnd),
    u = i(t.onArrayBegin),
    c = i(t.onArrayEnd),
    f = o(t.onLiteralValue),
    h = o(t.onSeparator),
    p = i(t.onComment),
    k = o(t.onError),
    x = n && n.disallowComments,
    w = n && n.allowTrailingComma;
  function S() {
    for (;;) {
      var E = r.scan();
      switch (r.getTokenError()) {
        case 4:
          y(14);
          break;
        case 5:
          y(15);
          break;
        case 3:
          y(13);
          break;
        case 1:
          x || y(11);
          break;
        case 2:
          y(12);
          break;
        case 6:
          y(16);
          break;
      }
      switch (E) {
        case 12:
        case 13:
          x ? y(10) : p();
          break;
        case 16:
          y(1);
          break;
        case 15:
        case 14:
          break;
        default:
          return E;
      }
    }
  }
  function y(E, I, ee) {
    if ((I === void 0 && (I = []), ee === void 0 && (ee = []), k(E), I.length + ee.length > 0))
      for (var F = r.getToken(); F !== 17;) {
        if (I.indexOf(F) !== -1) {
          S();
          break;
        } else if (ee.indexOf(F) !== -1) break;
        F = S();
      }
  }
  function m(E) {
    var I = r.getTokenValue();
    return (E ? f(I) : a(I), S(), !0);
  }
  function v() {
    switch (r.getToken()) {
      case 11:
        var E = r.getTokenValue(),
          I = Number(E);
        (isNaN(I) && (y(2), (I = 0)), f(I));
        break;
      case 7:
        f(null);
        break;
      case 8:
        f(!0);
        break;
      case 9:
        f(!1);
        break;
      default:
        return !1;
    }
    return (S(), !0);
  }
  function g() {
    return r.getToken() !== 10
      ? (y(3, [], [2, 5]), !1)
      : (m(!1), r.getToken() === 6 ? (h(":"), S(), P() || y(4, [], [2, 5])) : y(5, [], [2, 5]), !0);
  }
  function b() {
    (s(), S());
    for (var E = !1; r.getToken() !== 2 && r.getToken() !== 17;) {
      if (r.getToken() === 5) {
        if ((E || y(4, [], []), h(","), S(), r.getToken() === 2 && w)) break;
      } else E && y(6, [], []);
      (g() || y(4, [], [2, 5]), (E = !0));
    }
    return (l(), r.getToken() !== 2 ? y(7, [2], []) : S(), !0);
  }
  function T() {
    (u(), S());
    for (var E = !1; r.getToken() !== 4 && r.getToken() !== 17;) {
      if (r.getToken() === 5) {
        if ((E || y(4, [], []), h(","), S(), r.getToken() === 4 && w)) break;
      } else E && y(6, [], []);
      (P() || y(4, [], [4, 5]), (E = !0));
    }
    return (c(), r.getToken() !== 4 ? y(8, [4], []) : S(), !0);
  }
  function P() {
    switch (r.getToken()) {
      case 3:
        return T();
      case 1:
        return b();
      case 10:
        return m(!0);
      default:
        return v();
    }
  }
  return (
    S(),
    r.getToken() === 17
      ? n.allowEmptyContent
        ? !0
        : (y(4, [], []), !1)
      : P()
        ? (r.getToken() !== 17 && y(9, [], []), !0)
        : (y(4, [], []), !1)
  );
}
var bn,
  di = W(() => {
    "use strict";
    gn();
    (function (e) {
      e.DEFAULT = { allowTrailingComma: !1 };
    })(bn || (bn = {}));
  });
var na = W(() => {
  "use strict";
  fi();
  di();
});
function ia(e) {
  switch (e) {
    case 1:
      return "InvalidSymbol";
    case 2:
      return "InvalidNumberFormat";
    case 3:
      return "PropertyNameExpected";
    case 4:
      return "ValueExpected";
    case 5:
      return "ColonExpected";
    case 6:
      return "CommaExpected";
    case 7:
      return "CloseBraceExpected";
    case 8:
      return "CloseBracketExpected";
    case 9:
      return "EndOfFileExpected";
    case 10:
      return "InvalidCommentToken";
    case 11:
      return "UnexpectedEndOfComment";
    case 12:
      return "UnexpectedEndOfString";
    case 13:
      return "UnexpectedEndOfNumber";
    case 14:
      return "InvalidUnicode";
    case 15:
      return "InvalidEscapeCharacter";
    case 16:
      return "InvalidCharacter";
  }
  return "<unknown ParseErrorCode>";
}
var ra,
  oa = W(() => {
    "use strict";
    fi();
    na();
    gn();
    di();
    ra = ea;
  });
var sa,
  pi,
  aa,
  vn,
  pe,
  V,
  xn,
  la,
  hi,
  ua,
  ca,
  fa,
  da,
  mi,
  pa,
  ha,
  ma,
  yn,
  ot,
  xe,
  wn,
  Ue,
  ga,
  gi,
  bi,
  vi,
  xi,
  yi,
  ba,
  va,
  xa,
  wi,
  ya,
  wa,
  ki,
  Be,
  kn,
  Pt,
  ka,
  Sa,
  Ta,
  Ea,
  Aa,
  It,
  Ot,
  Sn,
  Ca,
  Na,
  Pa,
  Ia,
  Oa,
  $a,
  Ra,
  _a,
  La,
  ja,
  Fa,
  Tn,
  za,
  Si,
  Da,
  Ua,
  Ba,
  Ma,
  qa,
  Va,
  Ha,
  Wa,
  Ga,
  Qa,
  Ja,
  Xa,
  Ti,
  Ei,
  Ya,
  Ai,
  Za,
  Ka,
  el,
  tl,
  nl,
  rl,
  il,
  Ci,
  d,
  ol = W(() => {
    "use strict";
    (function (e) {
      function t(n) {
        return typeof n == "string";
      }
      e.is = t;
    })(sa || (sa = {}));
    (function (e) {
      function t(n) {
        return typeof n == "string";
      }
      e.is = t;
    })(pi || (pi = {}));
    (function (e) {
      ((e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647));
      function t(n) {
        return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
      }
      e.is = t;
    })(aa || (aa = {}));
    (function (e) {
      ((e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647));
      function t(n) {
        return typeof n == "number" && e.MIN_VALUE <= n && n <= e.MAX_VALUE;
      }
      e.is = t;
    })(vn || (vn = {}));
    (function (e) {
      function t(r, i) {
        return (
          r === Number.MAX_VALUE && (r = vn.MAX_VALUE),
          i === Number.MAX_VALUE && (i = vn.MAX_VALUE),
          { line: r, character: i }
        );
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.objectLiteral(i) && d.uinteger(i.line) && d.uinteger(i.character);
      }
      e.is = n;
    })(pe || (pe = {}));
    (function (e) {
      function t(r, i, o, s) {
        if (d.uinteger(r) && d.uinteger(i) && d.uinteger(o) && d.uinteger(s))
          return { start: pe.create(r, i), end: pe.create(o, s) };
        if (pe.is(r) && pe.is(i)) return { start: r, end: i };
        throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${o}, ${s}]`);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.objectLiteral(i) && pe.is(i.start) && pe.is(i.end);
      }
      e.is = n;
    })(V || (V = {}));
    (function (e) {
      function t(r, i) {
        return { uri: r, range: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.objectLiteral(i) && V.is(i.range) && (d.string(i.uri) || d.undefined(i.uri));
      }
      e.is = n;
    })(xn || (xn = {}));
    (function (e) {
      function t(r, i, o, s) {
        return { targetUri: r, targetRange: i, targetSelectionRange: o, originSelectionRange: s };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.objectLiteral(i) &&
          V.is(i.targetRange) &&
          d.string(i.targetUri) &&
          V.is(i.targetSelectionRange) &&
          (V.is(i.originSelectionRange) || d.undefined(i.originSelectionRange))
        );
      }
      e.is = n;
    })(la || (la = {}));
    (function (e) {
      function t(r, i, o, s) {
        return { red: r, green: i, blue: o, alpha: s };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.objectLiteral(i) &&
          d.numberRange(i.red, 0, 1) &&
          d.numberRange(i.green, 0, 1) &&
          d.numberRange(i.blue, 0, 1) &&
          d.numberRange(i.alpha, 0, 1)
        );
      }
      e.is = n;
    })(hi || (hi = {}));
    (function (e) {
      function t(r, i) {
        return { range: r, color: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.objectLiteral(i) && V.is(i.range) && hi.is(i.color);
      }
      e.is = n;
    })(ua || (ua = {}));
    (function (e) {
      function t(r, i, o) {
        return { label: r, textEdit: i, additionalTextEdits: o };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.objectLiteral(i) &&
          d.string(i.label) &&
          (d.undefined(i.textEdit) || xe.is(i)) &&
          (d.undefined(i.additionalTextEdits) || d.typedArray(i.additionalTextEdits, xe.is))
        );
      }
      e.is = n;
    })(ca || (ca = {}));
    (function (e) {
      ((e.Comment = "comment"), (e.Imports = "imports"), (e.Region = "region"));
    })(fa || (fa = {}));
    (function (e) {
      function t(r, i, o, s, a, l) {
        let u = { startLine: r, endLine: i };
        return (
          d.defined(o) && (u.startCharacter = o),
          d.defined(s) && (u.endCharacter = s),
          d.defined(a) && (u.kind = a),
          d.defined(l) && (u.collapsedText = l),
          u
        );
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.objectLiteral(i) &&
          d.uinteger(i.startLine) &&
          d.uinteger(i.startLine) &&
          (d.undefined(i.startCharacter) || d.uinteger(i.startCharacter)) &&
          (d.undefined(i.endCharacter) || d.uinteger(i.endCharacter)) &&
          (d.undefined(i.kind) || d.string(i.kind))
        );
      }
      e.is = n;
    })(da || (da = {}));
    (function (e) {
      function t(r, i) {
        return { location: r, message: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && xn.is(i.location) && d.string(i.message);
      }
      e.is = n;
    })(mi || (mi = {}));
    (function (e) {
      ((e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4));
    })(pa || (pa = {}));
    (function (e) {
      ((e.Unnecessary = 1), (e.Deprecated = 2));
    })(ha || (ha = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return d.objectLiteral(r) && d.string(r.href);
      }
      e.is = t;
    })(ma || (ma = {}));
    (function (e) {
      function t(o, s, a, l, u, c) {
        let f = { range: o, message: s };
        return (
          d.defined(a) && (f.severity = a),
          d.defined(l) && (f.code = l),
          d.defined(u) && (f.source = u),
          d.defined(c) && (f.relatedInformation = c),
          f
        );
      }
      e.create = t;
      function n(o) {
        var s;
        let a = o;
        return (
          d.defined(a) &&
          V.is(a.range) &&
          (d.string(a.message) || Be.is(a.message)) &&
          (d.number(a.severity) || d.undefined(a.severity)) &&
          (d.integer(a.code) || d.string(a.code) || d.undefined(a.code)) &&
          (d.undefined(a.codeDescription) ||
            d.string((s = a.codeDescription) === null || s === void 0 ? void 0 : s.href)) &&
          (d.string(a.source) || d.undefined(a.source)) &&
          (d.undefined(a.relatedInformation) || d.typedArray(a.relatedInformation, mi.is))
        );
      }
      e.is = n;
      function r(o) {
        return d.string(o.message);
      }
      e.is3_17 = r;
      function i(o) {
        if (d.string(o.message)) return o.message;
        if (Be.is(o.message)) return o.message.value;
        throw new Error(`Unknown message type ${typeof o.message}`);
      }
      e.getMessageString = i;
    })(yn || (yn = {}));
    (function (e) {
      function t(r, i, ...o) {
        let s = { title: r, command: i };
        return (d.defined(o) && o.length > 0 && (s.arguments = o), s);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.defined(i) &&
          d.string(i.title) &&
          (i.tooltip === void 0 || d.string(i.tooltip)) &&
          d.string(i.command)
        );
      }
      e.is = n;
    })(ot || (ot = {}));
    (function (e) {
      function t(o, s) {
        return { range: o, newText: s };
      }
      e.replace = t;
      function n(o, s) {
        return { range: { start: o, end: o }, newText: s };
      }
      e.insert = n;
      function r(o) {
        return { range: o, newText: "" };
      }
      e.del = r;
      function i(o) {
        let s = o;
        return d.objectLiteral(s) && d.string(s.newText) && V.is(s.range);
      }
      e.is = i;
    })(xe || (xe = {}));
    (function (e) {
      function t(r, i, o) {
        let s = { label: r };
        return (i !== void 0 && (s.needsConfirmation = i), o !== void 0 && (s.description = o), s);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.objectLiteral(i) &&
          d.string(i.label) &&
          (d.boolean(i.needsConfirmation) || i.needsConfirmation === void 0) &&
          (d.string(i.description) || i.description === void 0)
        );
      }
      e.is = n;
    })(wn || (wn = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return d.string(r);
      }
      e.is = t;
    })(Ue || (Ue = {}));
    (function (e) {
      function t(o, s, a) {
        return { range: o, newText: s, annotationId: a };
      }
      e.replace = t;
      function n(o, s, a) {
        return { range: { start: o, end: o }, newText: s, annotationId: a };
      }
      e.insert = n;
      function r(o, s) {
        return { range: o, newText: "", annotationId: s };
      }
      e.del = r;
      function i(o) {
        let s = o;
        return xe.is(s) && (wn.is(s.annotationId) || Ue.is(s.annotationId));
      }
      e.is = i;
    })(ga || (ga = {}));
    (function (e) {
      function t(r, i) {
        return { textDocument: r, edits: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && wi.is(i.textDocument) && Array.isArray(i.edits);
      }
      e.is = n;
    })(gi || (gi = {}));
    (function (e) {
      function t(r, i, o) {
        let s = { kind: "create", uri: r };
        return (
          i !== void 0 &&
            (i.overwrite !== void 0 || i.ignoreIfExists !== void 0) &&
            (s.options = i),
          o !== void 0 && (s.annotationId = o),
          s
        );
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          i &&
          i.kind === "create" &&
          d.string(i.uri) &&
          (i.options === void 0 ||
            ((i.options.overwrite === void 0 || d.boolean(i.options.overwrite)) &&
              (i.options.ignoreIfExists === void 0 || d.boolean(i.options.ignoreIfExists)))) &&
          (i.annotationId === void 0 || Ue.is(i.annotationId))
        );
      }
      e.is = n;
    })(bi || (bi = {}));
    (function (e) {
      function t(r, i, o, s) {
        let a = { kind: "rename", oldUri: r, newUri: i };
        return (
          o !== void 0 &&
            (o.overwrite !== void 0 || o.ignoreIfExists !== void 0) &&
            (a.options = o),
          s !== void 0 && (a.annotationId = s),
          a
        );
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          i &&
          i.kind === "rename" &&
          d.string(i.oldUri) &&
          d.string(i.newUri) &&
          (i.options === void 0 ||
            ((i.options.overwrite === void 0 || d.boolean(i.options.overwrite)) &&
              (i.options.ignoreIfExists === void 0 || d.boolean(i.options.ignoreIfExists)))) &&
          (i.annotationId === void 0 || Ue.is(i.annotationId))
        );
      }
      e.is = n;
    })(vi || (vi = {}));
    (function (e) {
      function t(r, i, o) {
        let s = { kind: "delete", uri: r };
        return (
          i !== void 0 &&
            (i.recursive !== void 0 || i.ignoreIfNotExists !== void 0) &&
            (s.options = i),
          o !== void 0 && (s.annotationId = o),
          s
        );
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          i &&
          i.kind === "delete" &&
          d.string(i.uri) &&
          (i.options === void 0 ||
            ((i.options.recursive === void 0 || d.boolean(i.options.recursive)) &&
              (i.options.ignoreIfNotExists === void 0 ||
                d.boolean(i.options.ignoreIfNotExists)))) &&
          (i.annotationId === void 0 || Ue.is(i.annotationId))
        );
      }
      e.is = n;
    })(xi || (xi = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return (
          r &&
          (r.changes !== void 0 || r.documentChanges !== void 0) &&
          (r.documentChanges === void 0 ||
            r.documentChanges.every((i) =>
              d.string(i.kind) ? bi.is(i) || vi.is(i) || xi.is(i) : gi.is(i),
            ))
        );
      }
      e.is = t;
    })(yi || (yi = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return (
          d.objectLiteral(r) &&
          V.is(r.range) &&
          Ai.isSnippet(r.snippet) &&
          (r.annotationId === void 0 || wn.is(r.annotationId) || Ue.is(r.annotationId))
        );
      }
      e.is = t;
    })(ba || (ba = {}));
    (function (e) {
      function t(r) {
        return { uri: r };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && d.string(i.uri);
      }
      e.is = n;
    })(va || (va = {}));
    (function (e) {
      function t(r, i) {
        return { uri: r, version: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && d.string(i.uri) && d.integer(i.version);
      }
      e.is = n;
    })(xa || (xa = {}));
    (function (e) {
      function t(r, i) {
        return { uri: r, version: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && d.string(i.uri) && (i.version === null || d.integer(i.version));
      }
      e.is = n;
    })(wi || (wi = {}));
    (function (e) {
      ((e.ABAP = "abap"),
        (e.WindowsBat = "bat"),
        (e.BibTeX = "bibtex"),
        (e.Clojure = "clojure"),
        (e.Coffeescript = "coffeescript"),
        (e.C = "c"),
        (e.CPP = "cpp"),
        (e.CSharp = "csharp"),
        (e.CSS = "css"),
        (e.D = "d"),
        (e.Delphi = "pascal"),
        (e.Diff = "diff"),
        (e.Dart = "dart"),
        (e.Dockerfile = "dockerfile"),
        (e.Elixir = "elixir"),
        (e.Erlang = "erlang"),
        (e.FSharp = "fsharp"),
        (e.GitCommit = "git-commit"),
        (e.GitRebase = "git-rebase"),
        (e.Go = "go"),
        (e.Groovy = "groovy"),
        (e.Handlebars = "handlebars"),
        (e.Haskell = "haskell"),
        (e.HTML = "html"),
        (e.Ini = "ini"),
        (e.Java = "java"),
        (e.JavaScript = "javascript"),
        (e.JavaScriptReact = "javascriptreact"),
        (e.JSON = "json"),
        (e.LaTeX = "latex"),
        (e.Less = "less"),
        (e.Lua = "lua"),
        (e.Makefile = "makefile"),
        (e.Markdown = "markdown"),
        (e.ObjectiveC = "objective-c"),
        (e.ObjectiveCPP = "objective-cpp"),
        (e.Pascal = "pascal"),
        (e.Perl = "perl"),
        (e.Perl6 = "perl6"),
        (e.PHP = "php"),
        (e.Plaintext = "plaintext"),
        (e.Powershell = "powershell"),
        (e.Pug = "jade"),
        (e.Python = "python"),
        (e.R = "r"),
        (e.Razor = "razor"),
        (e.Ruby = "ruby"),
        (e.Rust = "rust"),
        (e.SCSS = "scss"),
        (e.SASS = "sass"),
        (e.Scala = "scala"),
        (e.ShaderLab = "shaderlab"),
        (e.ShellScript = "shellscript"),
        (e.SQL = "sql"),
        (e.Swift = "swift"),
        (e.TypeScript = "typescript"),
        (e.TypeScriptReact = "typescriptreact"),
        (e.TeX = "tex"),
        (e.VisualBasic = "vb"),
        (e.XML = "xml"),
        (e.XSL = "xsl"),
        (e.YAML = "yaml"));
    })(ya || (ya = {}));
    (function (e) {
      function t(r, i, o, s) {
        return { uri: r, languageId: i, version: o, text: s };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.defined(i) &&
          d.string(i.uri) &&
          d.string(i.languageId) &&
          d.integer(i.version) &&
          d.string(i.text)
        );
      }
      e.is = n;
    })(wa || (wa = {}));
    (function (e) {
      ((e.PlainText = "plaintext"), (e.Markdown = "markdown"));
      function t(n) {
        let r = n;
        return r === e.PlainText || r === e.Markdown;
      }
      e.is = t;
    })(ki || (ki = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return d.objectLiteral(n) && ki.is(r.kind) && d.string(r.value);
      }
      e.is = t;
    })(Be || (Be = {}));
    (function (e) {
      ((e.Text = 1),
        (e.Method = 2),
        (e.Function = 3),
        (e.Constructor = 4),
        (e.Field = 5),
        (e.Variable = 6),
        (e.Class = 7),
        (e.Interface = 8),
        (e.Module = 9),
        (e.Property = 10),
        (e.Unit = 11),
        (e.Value = 12),
        (e.Enum = 13),
        (e.Keyword = 14),
        (e.Snippet = 15),
        (e.Color = 16),
        (e.File = 17),
        (e.Reference = 18),
        (e.Folder = 19),
        (e.EnumMember = 20),
        (e.Constant = 21),
        (e.Struct = 22),
        (e.Event = 23),
        (e.Operator = 24),
        (e.TypeParameter = 25));
    })(kn || (kn = {}));
    (function (e) {
      ((e.PlainText = 1), (e.Snippet = 2));
    })(Pt || (Pt = {}));
    (function (e) {
      e.Deprecated = 1;
    })(ka || (ka = {}));
    (function (e) {
      function t(r, i, o) {
        return { newText: r, insert: i, replace: o };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i && d.string(i.newText) && V.is(i.insert) && V.is(i.replace);
      }
      e.is = n;
    })(Sa || (Sa = {}));
    (function (e) {
      ((e.asIs = 1), (e.adjustIndentation = 2));
    })(Ta || (Ta = {}));
    (function (e) {
      ((e.Replace = 1), (e.Merge = 2));
    })(Ea || (Ea = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return (
          r &&
          (d.string(r.detail) || r.detail === void 0) &&
          (d.string(r.description) || r.description === void 0)
        );
      }
      e.is = t;
    })(Aa || (Aa = {}));
    (function (e) {
      function t(n) {
        return { label: n };
      }
      e.create = t;
    })(It || (It = {}));
    (function (e) {
      function t(n, r) {
        return { items: n || [], isIncomplete: !!r };
      }
      e.create = t;
    })(Ot || (Ot = {}));
    (function (e) {
      function t(r) {
        return r.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      e.fromPlainText = t;
      function n(r) {
        let i = r;
        return d.string(i) || (d.objectLiteral(i) && d.string(i.language) && d.string(i.value));
      }
      e.is = n;
    })(Sn || (Sn = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return (
          !!r &&
          d.objectLiteral(r) &&
          (Be.is(r.contents) || Sn.is(r.contents) || d.typedArray(r.contents, Sn.is)) &&
          (n.range === void 0 || V.is(n.range))
        );
      }
      e.is = t;
    })(Ca || (Ca = {}));
    (function (e) {
      function t(n, r) {
        return r ? { label: n, documentation: r } : { label: n };
      }
      e.create = t;
    })(Na || (Na = {}));
    (function (e) {
      function t(n, r, ...i) {
        let o = { label: n };
        return (
          d.defined(r) && (o.documentation = r),
          d.defined(i) ? (o.parameters = i) : (o.parameters = []),
          o
        );
      }
      e.create = t;
    })(Pa || (Pa = {}));
    (function (e) {
      ((e.Text = 1), (e.Read = 2), (e.Write = 3));
    })(Ia || (Ia = {}));
    (function (e) {
      function t(n, r) {
        let i = { range: n };
        return (d.number(r) && (i.kind = r), i);
      }
      e.create = t;
    })(Oa || (Oa = {}));
    (function (e) {
      ((e.File = 1),
        (e.Module = 2),
        (e.Namespace = 3),
        (e.Package = 4),
        (e.Class = 5),
        (e.Method = 6),
        (e.Property = 7),
        (e.Field = 8),
        (e.Constructor = 9),
        (e.Enum = 10),
        (e.Interface = 11),
        (e.Function = 12),
        (e.Variable = 13),
        (e.Constant = 14),
        (e.String = 15),
        (e.Number = 16),
        (e.Boolean = 17),
        (e.Array = 18),
        (e.Object = 19),
        (e.Key = 20),
        (e.Null = 21),
        (e.EnumMember = 22),
        (e.Struct = 23),
        (e.Event = 24),
        (e.Operator = 25),
        (e.TypeParameter = 26));
    })($a || ($a = {}));
    (function (e) {
      e.Deprecated = 1;
    })(Ra || (Ra = {}));
    (function (e) {
      function t(n, r, i, o, s) {
        let a = { name: n, kind: r, location: { uri: o, range: i } };
        return (s && (a.containerName = s), a);
      }
      e.create = t;
    })(_a || (_a = {}));
    (function (e) {
      function t(n, r, i, o) {
        return o !== void 0
          ? { name: n, kind: r, location: { uri: i, range: o } }
          : { name: n, kind: r, location: { uri: i } };
      }
      e.create = t;
    })(La || (La = {}));
    (function (e) {
      function t(r, i, o, s, a, l) {
        let u = { name: r, detail: i, kind: o, range: s, selectionRange: a };
        return (l !== void 0 && (u.children = l), u);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          i &&
          d.string(i.name) &&
          d.number(i.kind) &&
          V.is(i.range) &&
          V.is(i.selectionRange) &&
          (i.detail === void 0 || d.string(i.detail)) &&
          (i.deprecated === void 0 || d.boolean(i.deprecated)) &&
          (i.children === void 0 || Array.isArray(i.children)) &&
          (i.tags === void 0 || Array.isArray(i.tags))
        );
      }
      e.is = n;
    })(ja || (ja = {}));
    (function (e) {
      ((e.Empty = ""),
        (e.QuickFix = "quickfix"),
        (e.Refactor = "refactor"),
        (e.RefactorExtract = "refactor.extract"),
        (e.RefactorInline = "refactor.inline"),
        (e.RefactorMove = "refactor.move"),
        (e.RefactorRewrite = "refactor.rewrite"),
        (e.Source = "source"),
        (e.SourceOrganizeImports = "source.organizeImports"),
        (e.SourceFixAll = "source.fixAll"),
        (e.Notebook = "notebook"));
    })(Fa || (Fa = {}));
    (function (e) {
      ((e.Invoked = 1), (e.Automatic = 2));
    })(Tn || (Tn = {}));
    (function (e) {
      function t(r, i, o) {
        let s = { diagnostics: r };
        return (i != null && (s.only = i), o != null && (s.triggerKind = o), s);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.defined(i) &&
          d.typedArray(i.diagnostics, yn.is) &&
          (i.only === void 0 || d.typedArray(i.only, d.string)) &&
          (i.triggerKind === void 0 ||
            i.triggerKind === Tn.Invoked ||
            i.triggerKind === Tn.Automatic)
        );
      }
      e.is = n;
    })(za || (za = {}));
    (function (e) {
      e.LLMGenerated = 1;
      function t(n) {
        return d.defined(n) && n === e.LLMGenerated;
      }
      e.is = t;
    })(Si || (Si = {}));
    (function (e) {
      function t(r, i, o) {
        let s = { title: r },
          a = !0;
        return (
          typeof i == "string"
            ? ((a = !1), (s.kind = i))
            : ot.is(i)
              ? (s.command = i)
              : (s.edit = i),
          a && o !== void 0 && (s.kind = o),
          s
        );
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          i &&
          d.string(i.title) &&
          (i.diagnostics === void 0 || d.typedArray(i.diagnostics, yn.is)) &&
          (i.kind === void 0 || d.string(i.kind)) &&
          (i.edit !== void 0 || i.command !== void 0) &&
          (i.command === void 0 || ot.is(i.command)) &&
          (i.isPreferred === void 0 || d.boolean(i.isPreferred)) &&
          (i.edit === void 0 || yi.is(i.edit)) &&
          (i.tags === void 0 || d.typedArray(i.tags, Si.is))
        );
      }
      e.is = n;
    })(Da || (Da = {}));
    (function (e) {
      function t(r, i) {
        let o = { range: r };
        return (d.defined(i) && (o.data = i), o);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && V.is(i.range) && (d.undefined(i.command) || ot.is(i.command));
      }
      e.is = n;
    })(Ua || (Ua = {}));
    (function (e) {
      function t(r, i) {
        return { tabSize: r, insertSpaces: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && d.uinteger(i.tabSize) && d.boolean(i.insertSpaces);
      }
      e.is = n;
    })(Ba || (Ba = {}));
    (function (e) {
      function t(r, i, o) {
        return { range: r, target: i, data: o };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && V.is(i.range) && (d.undefined(i.target) || d.string(i.target));
      }
      e.is = n;
    })(Ma || (Ma = {}));
    (function (e) {
      function t(r, i) {
        return { range: r, parent: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.objectLiteral(i) && V.is(i.range) && (i.parent === void 0 || e.is(i.parent));
      }
      e.is = n;
    })(qa || (qa = {}));
    (function (e) {
      ((e.namespace = "namespace"),
        (e.type = "type"),
        (e.class = "class"),
        (e.enum = "enum"),
        (e.interface = "interface"),
        (e.struct = "struct"),
        (e.typeParameter = "typeParameter"),
        (e.parameter = "parameter"),
        (e.variable = "variable"),
        (e.property = "property"),
        (e.enumMember = "enumMember"),
        (e.event = "event"),
        (e.function = "function"),
        (e.method = "method"),
        (e.macro = "macro"),
        (e.keyword = "keyword"),
        (e.modifier = "modifier"),
        (e.comment = "comment"),
        (e.string = "string"),
        (e.number = "number"),
        (e.regexp = "regexp"),
        (e.operator = "operator"),
        (e.decorator = "decorator"),
        (e.label = "label"));
    })(Va || (Va = {}));
    (function (e) {
      ((e.declaration = "declaration"),
        (e.definition = "definition"),
        (e.readonly = "readonly"),
        (e.static = "static"),
        (e.deprecated = "deprecated"),
        (e.abstract = "abstract"),
        (e.async = "async"),
        (e.modification = "modification"),
        (e.documentation = "documentation"),
        (e.defaultLibrary = "defaultLibrary"));
    })(Ha || (Ha = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return (
          d.objectLiteral(r) &&
          (r.resultId === void 0 || typeof r.resultId == "string") &&
          Array.isArray(r.data) &&
          (r.data.length === 0 || typeof r.data[0] == "number")
        );
      }
      e.is = t;
    })(Wa || (Wa = {}));
    (function (e) {
      function t(r, i) {
        return { range: r, text: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i != null && V.is(i.range) && d.string(i.text);
      }
      e.is = n;
    })(Ga || (Ga = {}));
    (function (e) {
      function t(r, i, o) {
        return { range: r, variableName: i, caseSensitiveLookup: o };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          i != null &&
          V.is(i.range) &&
          d.boolean(i.caseSensitiveLookup) &&
          (d.string(i.variableName) || i.variableName === void 0)
        );
      }
      e.is = n;
    })(Qa || (Qa = {}));
    (function (e) {
      function t(r, i) {
        return { range: r, expression: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return i != null && V.is(i.range) && (d.string(i.expression) || i.expression === void 0);
      }
      e.is = n;
    })(Ja || (Ja = {}));
    (function (e) {
      function t(r, i) {
        return { frameId: r, stoppedLocation: i };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return d.defined(i) && V.is(r.stoppedLocation);
      }
      e.is = n;
    })(Xa || (Xa = {}));
    (function (e) {
      ((e.Type = 1), (e.Parameter = 2));
      function t(n) {
        return n === 1 || n === 2;
      }
      e.is = t;
    })(Ti || (Ti = {}));
    (function (e) {
      function t(r) {
        return { value: r };
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          d.objectLiteral(i) &&
          (i.tooltip === void 0 || d.string(i.tooltip) || Be.is(i.tooltip)) &&
          (i.location === void 0 || xn.is(i.location)) &&
          (i.command === void 0 || ot.is(i.command))
        );
      }
      e.is = n;
    })(Ei || (Ei = {}));
    (function (e) {
      function t(r, i, o) {
        let s = { position: r, label: i };
        return (o !== void 0 && (s.kind = o), s);
      }
      e.create = t;
      function n(r) {
        let i = r;
        return (
          (d.objectLiteral(i) &&
            pe.is(i.position) &&
            (d.string(i.label) || d.typedArray(i.label, Ei.is)) &&
            (i.kind === void 0 || Ti.is(i.kind)) &&
            i.textEdits === void 0) ||
          (d.typedArray(i.textEdits, xe.is) &&
            (i.tooltip === void 0 || d.string(i.tooltip) || Be.is(i.tooltip)) &&
            (i.paddingLeft === void 0 || d.boolean(i.paddingLeft)) &&
            (i.paddingRight === void 0 || d.boolean(i.paddingRight)))
        );
      }
      e.is = n;
    })(Ya || (Ya = {}));
    (function (e) {
      function t(r) {
        return { kind: "snippet", value: r };
      }
      e.createSnippet = t;
      function n(r) {
        let i = r;
        return d.objectLiteral(i) && i.kind === "snippet" && d.string(i.value);
      }
      e.isSnippet = n;
    })(Ai || (Ai = {}));
    (function (e) {
      function t(n, r, i, o) {
        return { insertText: n, filterText: r, range: i, command: o };
      }
      e.create = t;
    })(Za || (Za = {}));
    (function (e) {
      function t(n) {
        return { items: n };
      }
      e.create = t;
    })(Ka || (Ka = {}));
    (function (e) {
      ((e.Invoked = 1), (e.Automatic = 2));
    })(el || (el = {}));
    (function (e) {
      function t(n, r) {
        return { range: n, text: r };
      }
      e.create = t;
    })(tl || (tl = {}));
    (function (e) {
      function t(n, r) {
        return { triggerKind: n, selectedCompletionInfo: r };
      }
      e.create = t;
    })(nl || (nl = {}));
    (function (e) {
      function t(n) {
        let r = n;
        return d.objectLiteral(r) && pi.is(r.uri) && d.string(r.name);
      }
      e.is = t;
    })(rl || (rl = {}));
    (function (e) {
      function t(o, s, a, l) {
        return new Ci(o, s, a, l);
      }
      e.create = t;
      function n(o) {
        let s = o;
        return !!(
          d.defined(s) &&
          d.string(s.uri) &&
          (d.undefined(s.languageId) || d.string(s.languageId)) &&
          d.uinteger(s.lineCount) &&
          d.func(s.getText) &&
          d.func(s.positionAt) &&
          d.func(s.offsetAt)
        );
      }
      e.is = n;
      function r(o, s) {
        let a = o.getText(),
          l = i(s, (c, f) => {
            let h = c.range.start.line - f.range.start.line;
            return h === 0 ? c.range.start.character - f.range.start.character : h;
          }),
          u = a.length;
        for (let c = l.length - 1; c >= 0; c--) {
          let f = l[c],
            h = o.offsetAt(f.range.start),
            p = o.offsetAt(f.range.end);
          if (p <= u) a = a.substring(0, h) + f.newText + a.substring(p, a.length);
          else throw new Error("Overlapping edit");
          u = h;
        }
        return a;
      }
      e.applyEdits = r;
      function i(o, s) {
        if (o.length <= 1) return o;
        let a = (o.length / 2) | 0,
          l = o.slice(0, a),
          u = o.slice(a);
        (i(l, s), i(u, s));
        let c = 0,
          f = 0,
          h = 0;
        for (; c < l.length && f < u.length;)
          s(l[c], u[f]) <= 0 ? (o[h++] = l[c++]) : (o[h++] = u[f++]);
        for (; c < l.length;) o[h++] = l[c++];
        for (; f < u.length;) o[h++] = u[f++];
        return o;
      }
    })(il || (il = {}));
    Ci = class {
      constructor(t, n, r, i) {
        ((this._uri = t),
          (this._languageId = n),
          (this._version = r),
          (this._content = i),
          (this._lineOffsets = void 0));
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(t) {
        if (t) {
          let n = this.offsetAt(t.start),
            r = this.offsetAt(t.end);
          return this._content.substring(n, r);
        }
        return this._content;
      }
      update(t, n) {
        ((this._content = t.text), (this._version = n), (this._lineOffsets = void 0));
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          let t = [],
            n = this._content,
            r = !0;
          for (let i = 0; i < n.length; i++) {
            r && (t.push(i), (r = !1));
            let o = n.charAt(i);
            ((r =
              o === "\r" ||
              o ===
                `
`),
              o === "\r" &&
                i + 1 < n.length &&
                n.charAt(i + 1) ===
                  `
` &&
                i++);
          }
          (r && n.length > 0 && t.push(n.length), (this._lineOffsets = t));
        }
        return this._lineOffsets;
      }
      positionAt(t) {
        t = Math.max(Math.min(t, this._content.length), 0);
        let n = this.getLineOffsets(),
          r = 0,
          i = n.length;
        if (i === 0) return pe.create(0, t);
        for (; r < i;) {
          let s = Math.floor((r + i) / 2);
          n[s] > t ? (i = s) : (r = s + 1);
        }
        let o = r - 1;
        return pe.create(o, t - n[o]);
      }
      offsetAt(t) {
        let n = this.getLineOffsets();
        if (t.line >= n.length) return this._content.length;
        if (t.line < 0) return 0;
        let r = n[t.line],
          i = t.line + 1 < n.length ? n[t.line + 1] : this._content.length;
        return Math.max(Math.min(r + t.character, i), r);
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
    };
    (function (e) {
      let t = Object.prototype.toString;
      function n(p) {
        return typeof p < "u";
      }
      e.defined = n;
      function r(p) {
        return typeof p > "u";
      }
      e.undefined = r;
      function i(p) {
        return p === !0 || p === !1;
      }
      e.boolean = i;
      function o(p) {
        return t.call(p) === "[object String]";
      }
      e.string = o;
      function s(p) {
        return t.call(p) === "[object Number]";
      }
      e.number = s;
      function a(p, k, x) {
        return t.call(p) === "[object Number]" && k <= p && p <= x;
      }
      e.numberRange = a;
      function l(p) {
        return t.call(p) === "[object Number]" && -2147483648 <= p && p <= 2147483647;
      }
      e.integer = l;
      function u(p) {
        return t.call(p) === "[object Number]" && 0 <= p && p <= 2147483647;
      }
      e.uinteger = u;
      function c(p) {
        return t.call(p) === "[object Function]";
      }
      e.func = c;
      function f(p) {
        return p !== null && typeof p == "object";
      }
      e.objectLiteral = f;
      function h(p, k) {
        return Array.isArray(p) && p.every(k);
      }
      e.typedArray = h;
    })(d || (d = {}));
  });
function st(e) {
  var t = sl[e];
  if (t !== void 0) return t.exports;
  var n = (sl[e] = { exports: {} });
  return (Ah[e](n, n.exports, st), n.exports);
}
function al(e, t) {
  if (!e.scheme && t)
    throw new Error(
      `[UriError]: Scheme is missing: {scheme: "", authority: "${e.authority}", path: "${e.path}", query: "${e.query}", fragment: "${e.fragment}"}`,
    );
  if (e.scheme && !Ch.test(e.scheme))
    throw new Error("[UriError]: Scheme contains illegal characters.");
  if (e.path) {
    if (e.authority) {
      if (!Nh.test(e.path))
        throw new Error(
          '[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character',
        );
    } else if (Ph.test(e.path))
      throw new Error(
        '[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")',
      );
  }
}
function ll(e, t, n) {
  let r,
    i = -1;
  for (let o = 0; o < e.length; o++) {
    let s = e.charCodeAt(o);
    if (
      (s >= 97 && s <= 122) ||
      (s >= 65 && s <= 90) ||
      (s >= 48 && s <= 57) ||
      s === 45 ||
      s === 46 ||
      s === 95 ||
      s === 126 ||
      (t && s === 47) ||
      (n && s === 91) ||
      (n && s === 93) ||
      (n && s === 58)
    )
      (i !== -1 && ((r += encodeURIComponent(e.substring(i, o))), (i = -1)),
        r !== void 0 && (r += e.charAt(o)));
    else {
      r === void 0 && (r = e.substr(0, o));
      let a = pl[s];
      a !== void 0
        ? (i !== -1 && ((r += encodeURIComponent(e.substring(i, o))), (i = -1)), (r += a))
        : i === -1 && (i = o);
    }
  }
  return (i !== -1 && (r += encodeURIComponent(e.substring(i))), r !== void 0 ? r : e);
}
function Oh(e) {
  let t;
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    r === 35 || r === 63
      ? (t === void 0 && (t = e.substr(0, n)), (t += pl[r]))
      : t !== void 0 && (t += e[n]);
  }
  return t !== void 0 ? t : e;
}
function hl(e, t) {
  let n;
  return (
    (n =
      e.authority && e.path.length > 1 && e.scheme === "file"
        ? `//${e.authority}${e.path}`
        : e.path.charCodeAt(0) === 47 &&
            ((e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90) ||
              (e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122)) &&
            e.path.charCodeAt(2) === 58
          ? t
            ? e.path.substr(1)
            : e.path[1].toLowerCase() + e.path.substr(2)
          : e.path),
    Rt && (n = n.replace(/\//g, "\\")),
    n
  );
}
function Ni(e, t) {
  let n = t ? Oh : ll,
    r = "",
    { scheme: i, authority: o, path: s, query: a, fragment: l } = e;
  if ((i && ((r += i), (r += ":")), (o || i === "file") && ((r += he), (r += he)), o)) {
    let u = o.indexOf("@");
    if (u !== -1) {
      let c = o.substr(0, u);
      ((o = o.substr(u + 1)),
        (u = c.lastIndexOf(":")),
        u === -1
          ? (r += n(c, !1, !1))
          : ((r += n(c.substr(0, u), !1, !1)), (r += ":"), (r += n(c.substr(u + 1), !1, !0))),
        (r += "@"));
    }
    ((o = o.toLowerCase()),
      (u = o.lastIndexOf(":")),
      u === -1 ? (r += n(o, !1, !0)) : ((r += n(o.substr(0, u), !1, !0)), (r += o.substr(u))));
  }
  if (s) {
    if (s.length >= 3 && s.charCodeAt(0) === 47 && s.charCodeAt(2) === 58) {
      let u = s.charCodeAt(1);
      u >= 65 && u <= 90 && (s = `/${String.fromCharCode(u + 32)}:${s.substr(3)}`);
    } else if (s.length >= 2 && s.charCodeAt(1) === 58) {
      let u = s.charCodeAt(0);
      u >= 65 && u <= 90 && (s = `${String.fromCharCode(u + 32)}:${s.substr(2)}`);
    }
    r += n(s, !0, !1);
  }
  return (
    a && ((r += "?"), (r += n(a, !1, !1))), l && ((r += "#"), (r += t ? l : ll(l, !1, !1))), r
  );
}
function ml(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e.length > 3 ? e.substr(0, 3) + ml(e.substr(3)) : e;
  }
}
function En(e) {
  return e.match(ul) ? e.replace(ul, (t) => ml(t)) : e;
}
var Ah,
  sl,
  Rt,
  Ch,
  Nh,
  Ph,
  j,
  he,
  Ih,
  _t,
  dl,
  _e,
  pl,
  ul,
  cl,
  $t,
  An,
  fl,
  gl = W(() => {
    ((Ah = {
      975(e) {
        function t(i) {
          if (typeof i != "string")
            throw new TypeError("Path must be a string. Received " + JSON.stringify(i));
        }
        function n(i, o) {
          for (var s, a = "", l = 0, u = -1, c = 0, f = 0; f <= i.length; ++f) {
            if (f < i.length) s = i.charCodeAt(f);
            else {
              if (s === 47) break;
              s = 47;
            }
            if (s === 47) {
              if (!(u === f - 1 || c === 1))
                if (u !== f - 1 && c === 2) {
                  if (
                    a.length < 2 ||
                    l !== 2 ||
                    a.charCodeAt(a.length - 1) !== 46 ||
                    a.charCodeAt(a.length - 2) !== 46
                  ) {
                    if (a.length > 2) {
                      var h = a.lastIndexOf("/");
                      if (h !== a.length - 1) {
                        (h === -1
                          ? ((a = ""), (l = 0))
                          : (l = (a = a.slice(0, h)).length - 1 - a.lastIndexOf("/")),
                          (u = f),
                          (c = 0));
                        continue;
                      }
                    } else if (a.length === 2 || a.length === 1) {
                      ((a = ""), (l = 0), (u = f), (c = 0));
                      continue;
                    }
                  }
                  o && (a.length > 0 ? (a += "/..") : (a = ".."), (l = 2));
                } else
                  (a.length > 0 ? (a += "/" + i.slice(u + 1, f)) : (a = i.slice(u + 1, f)),
                    (l = f - u - 1));
              ((u = f), (c = 0));
            } else s === 46 && c !== -1 ? ++c : (c = -1);
          }
          return a;
        }
        var r = {
          resolve: function () {
            for (var i, o = "", s = !1, a = arguments.length - 1; a >= -1 && !s; a--) {
              var l;
              (a >= 0 ? (l = arguments[a]) : (i === void 0 && (i = process.cwd()), (l = i)),
                t(l),
                l.length !== 0 && ((o = l + "/" + o), (s = l.charCodeAt(0) === 47)));
            }
            return ((o = n(o, !s)), s ? (o.length > 0 ? "/" + o : "/") : o.length > 0 ? o : ".");
          },
          normalize: function (i) {
            if ((t(i), i.length === 0)) return ".";
            var o = i.charCodeAt(0) === 47,
              s = i.charCodeAt(i.length - 1) === 47;
            return (
              (i = n(i, !o)).length !== 0 || o || (i = "."),
              i.length > 0 && s && (i += "/"),
              o ? "/" + i : i
            );
          },
          isAbsolute: function (i) {
            return (t(i), i.length > 0 && i.charCodeAt(0) === 47);
          },
          join: function () {
            if (arguments.length === 0) return ".";
            for (var i, o = 0; o < arguments.length; ++o) {
              var s = arguments[o];
              (t(s), s.length > 0 && (i === void 0 ? (i = s) : (i += "/" + s)));
            }
            return i === void 0 ? "." : r.normalize(i);
          },
          relative: function (i, o) {
            if ((t(i), t(o), i === o || (i = r.resolve(i)) === (o = r.resolve(o)))) return "";
            for (var s = 1; s < i.length && i.charCodeAt(s) === 47; ++s);
            for (var a = i.length, l = a - s, u = 1; u < o.length && o.charCodeAt(u) === 47; ++u);
            for (var c = o.length - u, f = l < c ? l : c, h = -1, p = 0; p <= f; ++p) {
              if (p === f) {
                if (c > f) {
                  if (o.charCodeAt(u + p) === 47) return o.slice(u + p + 1);
                  if (p === 0) return o.slice(u + p);
                } else l > f && (i.charCodeAt(s + p) === 47 ? (h = p) : p === 0 && (h = 0));
                break;
              }
              var k = i.charCodeAt(s + p);
              if (k !== o.charCodeAt(u + p)) break;
              k === 47 && (h = p);
            }
            var x = "";
            for (p = s + h + 1; p <= a; ++p)
              (p !== a && i.charCodeAt(p) !== 47) || (x.length === 0 ? (x += "..") : (x += "/.."));
            return x.length > 0
              ? x + o.slice(u + h)
              : ((u += h), o.charCodeAt(u) === 47 && ++u, o.slice(u));
          },
          _makeLong: function (i) {
            return i;
          },
          dirname: function (i) {
            if ((t(i), i.length === 0)) return ".";
            for (
              var o = i.charCodeAt(0), s = o === 47, a = -1, l = !0, u = i.length - 1;
              u >= 1;
              --u
            )
              if ((o = i.charCodeAt(u)) === 47) {
                if (!l) {
                  a = u;
                  break;
                }
              } else l = !1;
            return a === -1 ? (s ? "/" : ".") : s && a === 1 ? "//" : i.slice(0, a);
          },
          basename: function (i, o) {
            if (o !== void 0 && typeof o != "string")
              throw new TypeError('"ext" argument must be a string');
            t(i);
            var s,
              a = 0,
              l = -1,
              u = !0;
            if (o !== void 0 && o.length > 0 && o.length <= i.length) {
              if (o.length === i.length && o === i) return "";
              var c = o.length - 1,
                f = -1;
              for (s = i.length - 1; s >= 0; --s) {
                var h = i.charCodeAt(s);
                if (h === 47) {
                  if (!u) {
                    a = s + 1;
                    break;
                  }
                } else
                  (f === -1 && ((u = !1), (f = s + 1)),
                    c >= 0 &&
                      (h === o.charCodeAt(c) ? --c === -1 && (l = s) : ((c = -1), (l = f))));
              }
              return (a === l ? (l = f) : l === -1 && (l = i.length), i.slice(a, l));
            }
            for (s = i.length - 1; s >= 0; --s)
              if (i.charCodeAt(s) === 47) {
                if (!u) {
                  a = s + 1;
                  break;
                }
              } else l === -1 && ((u = !1), (l = s + 1));
            return l === -1 ? "" : i.slice(a, l);
          },
          extname: function (i) {
            t(i);
            for (var o = -1, s = 0, a = -1, l = !0, u = 0, c = i.length - 1; c >= 0; --c) {
              var f = i.charCodeAt(c);
              if (f !== 47)
                (a === -1 && ((l = !1), (a = c + 1)),
                  f === 46 ? (o === -1 ? (o = c) : u !== 1 && (u = 1)) : o !== -1 && (u = -1));
              else if (!l) {
                s = c + 1;
                break;
              }
            }
            return o === -1 || a === -1 || u === 0 || (u === 1 && o === a - 1 && o === s + 1)
              ? ""
              : i.slice(o, a);
          },
          format: function (i) {
            if (i === null || typeof i != "object")
              throw new TypeError(
                'The "pathObject" argument must be of type Object. Received type ' + typeof i,
              );
            return (function (o, s) {
              var a = s.dir || s.root,
                l = s.base || (s.name || "") + (s.ext || "");
              return a ? (a === s.root ? a + l : a + "/" + l) : l;
            })(0, i);
          },
          parse: function (i) {
            t(i);
            var o = { root: "", dir: "", base: "", ext: "", name: "" };
            if (i.length === 0) return o;
            var s,
              a = i.charCodeAt(0),
              l = a === 47;
            l ? ((o.root = "/"), (s = 1)) : (s = 0);
            for (var u = -1, c = 0, f = -1, h = !0, p = i.length - 1, k = 0; p >= s; --p)
              if ((a = i.charCodeAt(p)) !== 47)
                (f === -1 && ((h = !1), (f = p + 1)),
                  a === 46 ? (u === -1 ? (u = p) : k !== 1 && (k = 1)) : u !== -1 && (k = -1));
              else if (!h) {
                c = p + 1;
                break;
              }
            return (
              u === -1 || f === -1 || k === 0 || (k === 1 && u === f - 1 && u === c + 1)
                ? f !== -1 && (o.base = o.name = c === 0 && l ? i.slice(1, f) : i.slice(c, f))
                : (c === 0 && l
                    ? ((o.name = i.slice(1, u)), (o.base = i.slice(1, f)))
                    : ((o.name = i.slice(c, u)), (o.base = i.slice(c, f))),
                  (o.ext = i.slice(u, f))),
              c > 0 ? (o.dir = i.slice(0, c - 1)) : l && (o.dir = "/"),
              o
            );
          },
          sep: "/",
          delimiter: ":",
          win32: null,
          posix: null,
        };
        ((r.posix = r), (e.exports = r));
      },
    }),
      (sl = {}));
    ((st.d = (e, t) => {
      for (var n in t)
        st.o(t, n) && !st.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
      (st.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      typeof process == "object"
        ? (Rt = process.platform === "win32")
        : typeof navigator == "object" && (Rt = navigator.userAgent.indexOf("Windows") >= 0));
    ((Ch = /^\w[\w\d+.-]*$/), (Nh = /^\//), (Ph = /^\/\//));
    ((j = ""),
      (he = "/"),
      (Ih = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/),
      (_t = class e {
        static isUri(t) {
          return (
            t instanceof e ||
            (!!t &&
              typeof t.authority == "string" &&
              typeof t.fragment == "string" &&
              typeof t.path == "string" &&
              typeof t.query == "string" &&
              typeof t.scheme == "string" &&
              typeof t.fsPath == "string" &&
              typeof t.with == "function" &&
              typeof t.toString == "function")
          );
        }
        scheme;
        authority;
        path;
        query;
        fragment;
        constructor(t, n, r, i, o, s = !1) {
          typeof t == "object"
            ? ((this.scheme = t.scheme || j),
              (this.authority = t.authority || j),
              (this.path = t.path || j),
              (this.query = t.query || j),
              (this.fragment = t.fragment || j))
            : ((this.scheme = (function (a, l) {
                return a || l ? a : "file";
              })(t, s)),
              (this.authority = n || j),
              (this.path = (function (a, l) {
                switch (a) {
                  case "https":
                  case "http":
                  case "file":
                    l ? l[0] !== he && (l = he + l) : (l = he);
                }
                return l;
              })(this.scheme, r || j)),
              (this.query = i || j),
              (this.fragment = o || j),
              al(this, s));
        }
        get fsPath() {
          return hl(this, !1);
        }
        with(t) {
          if (!t) return this;
          let { scheme: n, authority: r, path: i, query: o, fragment: s } = t;
          return (
            n === void 0 ? (n = this.scheme) : n === null && (n = j),
            r === void 0 ? (r = this.authority) : r === null && (r = j),
            i === void 0 ? (i = this.path) : i === null && (i = j),
            o === void 0 ? (o = this.query) : o === null && (o = j),
            s === void 0 ? (s = this.fragment) : s === null && (s = j),
            n === this.scheme &&
            r === this.authority &&
            i === this.path &&
            o === this.query &&
            s === this.fragment
              ? this
              : new _e(n, r, i, o, s)
          );
        }
        static parse(t, n = !1) {
          let r = Ih.exec(t);
          return r
            ? new _e(r[2] || j, En(r[4] || j), En(r[5] || j), En(r[7] || j), En(r[9] || j), n)
            : new _e(j, j, j, j, j);
        }
        static file(t) {
          let n = j;
          if ((Rt && (t = t.replace(/\\/g, he)), t[0] === he && t[1] === he)) {
            let r = t.indexOf(he, 2);
            r === -1
              ? ((n = t.substring(2)), (t = he))
              : ((n = t.substring(2, r)), (t = t.substring(r) || he));
          }
          return new _e("file", n, t, j, j);
        }
        static from(t) {
          let n = new _e(t.scheme, t.authority, t.path, t.query, t.fragment);
          return (al(n, !0), n);
        }
        toString(t = !1) {
          return Ni(this, t);
        }
        toJSON() {
          return this;
        }
        static revive(t) {
          if (t) {
            if (t instanceof e) return t;
            {
              let n = new _e(t);
              return (
                (n._formatted = t.external), (n._fsPath = t._sep === dl ? t.fsPath : null), n
              );
            }
          }
          return t;
        }
      }),
      (dl = Rt ? 1 : void 0),
      (_e = class extends _t {
        _formatted = null;
        _fsPath = null;
        get fsPath() {
          return (this._fsPath || (this._fsPath = hl(this, !1)), this._fsPath);
        }
        toString(t = !1) {
          return t
            ? Ni(this, !0)
            : (this._formatted || (this._formatted = Ni(this, !1)), this._formatted);
        }
        toJSON() {
          let t = { $mid: 1 };
          return (
            this._fsPath && ((t.fsPath = this._fsPath), (t._sep = dl)),
            this._formatted && (t.external = this._formatted),
            this.path && (t.path = this.path),
            this.scheme && (t.scheme = this.scheme),
            this.authority && (t.authority = this.authority),
            this.query && (t.query = this.query),
            this.fragment && (t.fragment = this.fragment),
            t
          );
        }
      }),
      (pl = {
        58: "%3A",
        47: "%2F",
        63: "%3F",
        35: "%23",
        91: "%5B",
        93: "%5D",
        64: "%40",
        33: "%21",
        36: "%24",
        38: "%26",
        39: "%27",
        40: "%28",
        41: "%29",
        42: "%2A",
        43: "%2B",
        44: "%2C",
        59: "%3B",
        61: "%3D",
        32: "%20",
      }));
    ul = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
    ((cl = st(975)), ($t = cl.posix || cl), (An = "/"));
    (function (e) {
      ((e.joinPath = function (t, ...n) {
        return t.with({ path: $t.join(t.path, ...n) });
      }),
        (e.resolvePath = function (t, ...n) {
          let r = t.path,
            i = !1;
          r[0] !== An && ((r = An + r), (i = !0));
          let o = $t.resolve(r, ...n);
          return (i && o[0] === An && !t.authority && (o = o.substring(1)), t.with({ path: o }));
        }),
        (e.dirname = function (t) {
          if (t.path.length === 0 || t.path === An) return t;
          let n = $t.dirname(t.path);
          return (n.length === 1 && n.charCodeAt(0) === 46 && (n = ""), t.with({ path: n }));
        }),
        (e.basename = function (t) {
          return $t.basename(t.path);
        }),
        (e.extname = function (t) {
          return $t.extname(t.path);
        }));
    })(fl || (fl = {}));
  });
var bl,
  Pi,
  vl = W(() => {
    ((bl = {
      properties: [
        "additive-symbols",
        "align-content",
        "align-items",
        "justify-items",
        "justify-self",
        "justify-items",
        "align-self",
        "all",
        "alt",
        "animation",
        "animation-delay",
        "animation-direction",
        "animation-duration",
        "animation-fill-mode",
        "animation-iteration-count",
        "animation-name",
        "animation-play-state",
        "animation-timing-function",
        "backface-visibility",
        "background",
        "background-attachment",
        "background-blend-mode",
        "background-clip",
        "background-color",
        "background-image",
        "background-origin",
        "background-position",
        "background-position-x",
        "background-position-y",
        "background-repeat",
        "background-size",
        "behavior",
        "block-size",
        "border",
        "border-block-end",
        "border-block-start",
        "border-block-end-color",
        "border-block-start-color",
        "border-block-end-style",
        "border-block-start-style",
        "border-block-end-width",
        "border-block-start-width",
        "border-bottom",
        "border-bottom-color",
        "border-bottom-left-radius",
        "border-bottom-right-radius",
        "border-bottom-style",
        "border-bottom-width",
        "border-collapse",
        "border-color",
        "border-image",
        "border-image-outset",
        "border-image-repeat",
        "border-image-slice",
        "border-image-source",
        "border-image-width",
        "border-inline-end",
        "border-inline-start",
        "border-inline-end-color",
        "border-inline-start-color",
        "border-inline-end-style",
        "border-inline-start-style",
        "border-inline-end-width",
        "border-inline-start-width",
        "border-left",
        "border-left-color",
        "border-left-style",
        "border-left-width",
        "border-radius",
        "border-right",
        "border-right-color",
        "border-right-style",
        "border-right-width",
        "border-spacing",
        "border-style",
        "border-top",
        "border-top-color",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-top-style",
        "border-top-width",
        "border-width",
        "bottom",
        "box-decoration-break",
        "box-shadow",
        "box-sizing",
        "break-after",
        "break-before",
        "break-inside",
        "caption-side",
        "caret-color",
        "clear",
        "clip",
        "clip-path",
        "clip-rule",
        "color",
        "color-interpolation-filters",
        "column-count",
        "column-fill",
        "column-gap",
        "column-rule",
        "column-rule-color",
        "column-rule-style",
        "column-rule-width",
        "columns",
        "column-span",
        "column-width",
        "contain",
        "content",
        "counter-increment",
        "counter-reset",
        "cursor",
        "direction",
        "display",
        "empty-cells",
        "enable-background",
        "fallback",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "flex",
        "flex-basis",
        "flex-direction",
        "flex-flow",
        "flex-grow",
        "flex-shrink",
        "flex-wrap",
        "float",
        "flood-color",
        "flood-opacity",
        "font",
        "font-family",
        "font-feature-settings",
        "font-kerning",
        "font-language-override",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-synthesis",
        "font-variant",
        "font-variant-alternates",
        "font-variant-caps",
        "font-variant-east-asian",
        "font-variant-ligatures",
        "font-variant-numeric",
        "font-variant-position",
        "font-weight",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "grid-area",
        "grid-auto-columns",
        "grid-auto-flow",
        "grid-auto-rows",
        "grid-column",
        "grid-column-end",
        "grid-column-gap",
        "grid-column-start",
        "grid-gap",
        "grid-row",
        "grid-row-end",
        "grid-row-gap",
        "grid-row-start",
        "grid-template",
        "grid-template-areas",
        "grid-template-columns",
        "grid-template-rows",
        "height",
        "hyphens",
        "image-orientation",
        "image-rendering",
        "ime-mode",
        "inline-size",
        "isolation",
        "justify-content",
        "kerning",
        "left",
        "letter-spacing",
        "lighting-color",
        "line-break",
        "line-height",
        "list-style",
        "list-style-image",
        "list-style-position",
        "list-style-type",
        "margin",
        "margin-block-end",
        "margin-block-start",
        "margin-bottom",
        "margin-inline-end",
        "margin-inline-start",
        "margin-left",
        "margin-right",
        "margin-top",
        "marker",
        "marker-end",
        "marker-mid",
        "marker-start",
        "mask-type",
        "max-block-size",
        "max-height",
        "max-inline-size",
        "max-width",
        "min-block-size",
        "min-height",
        "min-inline-size",
        "min-width",
        "mix-blend-mode",
        "motion",
        "motion-offset",
        "motion-path",
        "motion-rotation",
        "-moz-animation",
        "-moz-animation-delay",
        "-moz-animation-direction",
        "-moz-animation-duration",
        "-moz-animation-iteration-count",
        "-moz-animation-name",
        "-moz-animation-play-state",
        "-moz-animation-timing-function",
        "-moz-appearance",
        "-moz-backface-visibility",
        "-moz-background-clip",
        "-moz-background-inline-policy",
        "-moz-background-origin",
        "-moz-border-bottom-colors",
        "-moz-border-image",
        "-moz-border-left-colors",
        "-moz-border-right-colors",
        "-moz-border-top-colors",
        "-moz-box-align",
        "-moz-box-direction",
        "-moz-box-flex",
        "-moz-box-flexgroup",
        "-moz-box-ordinal-group",
        "-moz-box-orient",
        "-moz-box-pack",
        "-moz-box-sizing",
        "-moz-column-count",
        "-moz-column-gap",
        "-moz-column-rule",
        "-moz-column-rule-color",
        "-moz-column-rule-style",
        "-moz-column-rule-width",
        "-moz-columns",
        "-moz-column-width",
        "-moz-font-feature-settings",
        "-moz-hyphens",
        "-moz-perspective",
        "-moz-perspective-origin",
        "-moz-text-align-last",
        "-moz-text-decoration-color",
        "-moz-text-decoration-line",
        "-moz-text-decoration-style",
        "-moz-text-size-adjust",
        "-moz-transform",
        "-moz-transform-origin",
        "-moz-transition",
        "-moz-transition-delay",
        "-moz-transition-duration",
        "-moz-transition-property",
        "-moz-transition-timing-function",
        "-moz-user-focus",
        "-moz-user-select",
        "-ms-accelerator",
        "-ms-behavior",
        "-ms-block-progression",
        "-ms-content-zoom-chaining",
        "-ms-content-zooming",
        "-ms-content-zoom-limit",
        "-ms-content-zoom-limit-max",
        "-ms-content-zoom-limit-min",
        "-ms-content-zoom-snap",
        "-ms-content-zoom-snap-points",
        "-ms-content-zoom-snap-type",
        "-ms-filter",
        "-ms-flex",
        "-ms-flex-align",
        "-ms-flex-direction",
        "-ms-flex-flow",
        "-ms-flex-item-align",
        "-ms-flex-line-pack",
        "-ms-flex-order",
        "-ms-flex-pack",
        "-ms-flex-wrap",
        "-ms-flow-from",
        "-ms-flow-into",
        "-ms-grid-column",
        "-ms-grid-column-align",
        "-ms-grid-columns",
        "-ms-grid-column-span",
        "-ms-grid-layer",
        "-ms-grid-row",
        "-ms-grid-row-align",
        "-ms-grid-rows",
        "-ms-grid-row-span",
        "-ms-high-contrast-adjust",
        "-ms-hyphenate-limit-chars",
        "-ms-hyphenate-limit-lines",
        "-ms-hyphenate-limit-zone",
        "-ms-hyphens",
        "-ms-ime-mode",
        "-ms-interpolation-mode",
        "-ms-layout-grid",
        "-ms-layout-grid-char",
        "-ms-layout-grid-line",
        "-ms-layout-grid-mode",
        "-ms-layout-grid-type",
        "-ms-line-break",
        "-ms-overflow-style",
        "-ms-perspective",
        "-ms-perspective-origin",
        "-ms-perspective-origin-x",
        "-ms-perspective-origin-y",
        "-ms-progress-appearance",
        "-ms-scrollbar-3dlight-color",
        "-ms-scrollbar-arrow-color",
        "-ms-scrollbar-base-color",
        "-ms-scrollbar-darkshadow-color",
        "-ms-scrollbar-face-color",
        "-ms-scrollbar-highlight-color",
        "-ms-scrollbar-shadow-color",
        "-ms-scrollbar-track-color",
        "-ms-scroll-chaining",
        "-ms-scroll-limit",
        "-ms-scroll-limit-x-max",
        "-ms-scroll-limit-x-min",
        "-ms-scroll-limit-y-max",
        "-ms-scroll-limit-y-min",
        "-ms-scroll-rails",
        "-ms-scroll-snap-points-x",
        "-ms-scroll-snap-points-y",
        "-ms-scroll-snap-type",
        "-ms-scroll-snap-x",
        "-ms-scroll-snap-y",
        "-ms-scroll-translation",
        "-ms-text-align-last",
        "-ms-text-autospace",
        "-ms-text-combine-horizontal",
        "-ms-text-justify",
        "-ms-text-kashida-space",
        "-ms-text-overflow",
        "-ms-text-size-adjust",
        "-ms-text-underline-position",
        "-ms-touch-action",
        "-ms-touch-select",
        "-ms-transform",
        "-ms-transform-origin",
        "-ms-transform-origin-x",
        "-ms-transform-origin-y",
        "-ms-transform-origin-z",
        "-ms-user-select",
        "-ms-word-break",
        "-ms-word-wrap",
        "-ms-wrap-flow",
        "-ms-wrap-margin",
        "-ms-wrap-through",
        "-ms-writing-mode",
        "-ms-zoom",
        "-ms-zoom-animation",
        "nav-down",
        "nav-index",
        "nav-left",
        "nav-right",
        "nav-up",
        "negative",
        "-o-animation",
        "-o-animation-delay",
        "-o-animation-direction",
        "-o-animation-duration",
        "-o-animation-fill-mode",
        "-o-animation-iteration-count",
        "-o-animation-name",
        "-o-animation-play-state",
        "-o-animation-timing-function",
        "object-fit",
        "object-position",
        "-o-border-image",
        "-o-object-fit",
        "-o-object-position",
        "opacity",
        "order",
        "orphans",
        "-o-table-baseline",
        "-o-tab-size",
        "-o-text-overflow",
        "-o-transform",
        "-o-transform-origin",
        "-o-transition",
        "-o-transition-delay",
        "-o-transition-duration",
        "-o-transition-property",
        "-o-transition-timing-function",
        "offset-block-end",
        "offset-block-start",
        "offset-inline-end",
        "offset-inline-start",
        "outline",
        "outline-color",
        "outline-offset",
        "outline-style",
        "outline-width",
        "overflow",
        "overflow-wrap",
        "overflow-x",
        "overflow-y",
        "pad",
        "padding",
        "padding-bottom",
        "padding-block-end",
        "padding-block-start",
        "padding-inline-end",
        "padding-inline-start",
        "padding-left",
        "padding-right",
        "padding-top",
        "page-break-after",
        "page-break-before",
        "page-break-inside",
        "paint-order",
        "perspective",
        "perspective-origin",
        "pointer-events",
        "position",
        "prefix",
        "quotes",
        "range",
        "resize",
        "right",
        "ruby-align",
        "ruby-overhang",
        "ruby-position",
        "ruby-span",
        "scrollbar-3dlight-color",
        "scrollbar-arrow-color",
        "scrollbar-base-color",
        "scrollbar-darkshadow-color",
        "scrollbar-face-color",
        "scrollbar-highlight-color",
        "scrollbar-shadow-color",
        "scrollbar-track-color",
        "scroll-behavior",
        "scroll-snap-coordinate",
        "scroll-snap-destination",
        "scroll-snap-points-x",
        "scroll-snap-points-y",
        "scroll-snap-type",
        "shape-image-threshold",
        "shape-margin",
        "shape-outside",
        "shape-rendering",
        "size",
        "src",
        "stop-color",
        "stop-opacity",
        "stroke",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "suffix",
        "system",
        "symbols",
        "table-layout",
        "tab-size",
        "text-align",
        "text-align-last",
        "text-anchor",
        "text-decoration",
        "text-decoration-color",
        "text-decoration-line",
        "text-decoration-style",
        "text-indent",
        "text-justify",
        "text-orientation",
        "text-overflow",
        "text-rendering",
        "text-shadow",
        "text-transform",
        "text-underline-position",
        "top",
        "touch-action",
        "transform",
        "transform-origin",
        "transform-style",
        "transition",
        "transition-delay",
        "transition-duration",
        "transition-property",
        "transition-timing-function",
        "unicode-bidi",
        "unicode-range",
        "user-select",
        "vertical-align",
        "visibility",
        "-webkit-animation",
        "-webkit-animation-delay",
        "-webkit-animation-direction",
        "-webkit-animation-duration",
        "-webkit-animation-fill-mode",
        "-webkit-animation-iteration-count",
        "-webkit-animation-name",
        "-webkit-animation-play-state",
        "-webkit-animation-timing-function",
        "-webkit-appearance",
        "-webkit-backdrop-filter",
        "-webkit-backface-visibility",
        "-webkit-background-clip",
        "-webkit-background-composite",
        "-webkit-background-origin",
        "-webkit-border-image",
        "-webkit-box-align",
        "-webkit-box-direction",
        "-webkit-box-flex",
        "-webkit-box-flex-group",
        "-webkit-box-ordinal-group",
        "-webkit-box-orient",
        "-webkit-box-pack",
        "-webkit-box-reflect",
        "-webkit-box-sizing",
        "-webkit-break-after",
        "-webkit-break-before",
        "-webkit-break-inside",
        "-webkit-column-break-after",
        "-webkit-column-break-before",
        "-webkit-column-break-inside",
        "-webkit-column-count",
        "-webkit-column-gap",
        "-webkit-column-rule",
        "-webkit-column-rule-color",
        "-webkit-column-rule-style",
        "-webkit-column-rule-width",
        "-webkit-columns",
        "-webkit-column-span",
        "-webkit-column-width",
        "-webkit-filter",
        "-webkit-flow-from",
        "-webkit-flow-into",
        "-webkit-font-feature-settings",
        "-webkit-hyphens",
        "-webkit-line-break",
        "-webkit-margin-bottom-collapse",
        "-webkit-margin-collapse",
        "-webkit-margin-start",
        "-webkit-margin-top-collapse",
        "-webkit-mask-clip",
        "-webkit-mask-image",
        "-webkit-mask-origin",
        "-webkit-mask-repeat",
        "-webkit-mask-size",
        "-webkit-nbsp-mode",
        "-webkit-overflow-scrolling",
        "-webkit-padding-start",
        "-webkit-perspective",
        "-webkit-perspective-origin",
        "-webkit-region-fragment",
        "-webkit-tap-highlight-color",
        "-webkit-text-fill-color",
        "-webkit-text-size-adjust",
        "-webkit-text-stroke",
        "-webkit-text-stroke-color",
        "-webkit-text-stroke-width",
        "-webkit-touch-callout",
        "-webkit-transform",
        "-webkit-transform-origin",
        "-webkit-transform-origin-x",
        "-webkit-transform-origin-y",
        "-webkit-transform-origin-z",
        "-webkit-transform-style",
        "-webkit-transition",
        "-webkit-transition-delay",
        "-webkit-transition-duration",
        "-webkit-transition-property",
        "-webkit-transition-timing-function",
        "-webkit-user-drag",
        "-webkit-user-modify",
        "-webkit-user-select",
        "white-space",
        "widows",
        "width",
        "will-change",
        "word-break",
        "word-spacing",
        "word-wrap",
        "writing-mode",
        "z-index",
        "zoom",
      ],
    }),
      (Pi = {
        tags: [
          "body",
          "head",
          "html",
          "address",
          "blockquote",
          "dd",
          "div",
          "section",
          "article",
          "aside",
          "header",
          "footer",
          "nav",
          "menu",
          "dl",
          "dt",
          "fieldset",
          "form",
          "frame",
          "frameset",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "iframe",
          "noframes",
          "object",
          "ol",
          "p",
          "ul",
          "applet",
          "center",
          "dir",
          "hr",
          "pre",
          "a",
          "abbr",
          "acronym",
          "area",
          "b",
          "base",
          "basefont",
          "bdo",
          "big",
          "br",
          "button",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "del",
          "dfn",
          "em",
          "font",
          "i",
          "img",
          "input",
          "ins",
          "isindex",
          "kbd",
          "label",
          "legend",
          "li",
          "link",
          "map",
          "meta",
          "noscript",
          "optgroup",
          "option",
          "param",
          "q",
          "s",
          "samp",
          "script",
          "select",
          "small",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "title",
          "tr",
          "tt",
          "u",
          "var",
          "canvas",
          "main",
          "figure",
          "plaintext",
          "figcaption",
          "hgroup",
          "details",
          "summary",
          "audio",
          "bdi",
          "data",
          "datalist",
          "dialog",
          "embed",
          "mark",
          "math",
          "meter",
          "output",
          "picture",
          "portal",
          "progress",
          "rp",
          "rt",
          "ruby",
          "search",
          "slot",
          "source",
          "template",
          "time",
          "track",
          "video",
          "wbr",
        ],
      }));
  });
function xl(e) {
  return $h.test(e);
}
function Rh(e) {
  let t = [];
  for (let r of e)
    r.length === 0 ||
      (r.length === 1 && r.charCodeAt(0) === Ii) ||
      (r.length === 2 && r.charCodeAt(0) === Ii && r.charCodeAt(1) === Ii ? t.pop() : t.push(r));
  e.length > 1 && e[e.length - 1].length === 0 && t.push("");
  let n = t.join("/");
  return (e[0].length === 0 && (n = "/" + n), n);
}
function jt(e, ...t) {
  let n = e.path.split("/");
  for (let r of t) n.push(...r.split("/"));
  return e.with({ path: Rh(n) });
}
var Lt,
  $h,
  Ii,
  yl = W(() => {
    (function (e) {
      ((e[(e.Unknown = 0)] = "Unknown"),
        (e[(e.File = 1)] = "File"),
        (e[(e.Directory = 2)] = "Directory"),
        (e[(e.SymbolicLink = 64)] = "SymbolicLink"));
    })(Lt || (Lt = {}));
    (($h = new RegExp("^(/|//|\\\\\\\\|[A-Za-z]:(/|\\\\))")), (Ii = 46));
  });
function me(e) {
  return e > 47 && e < 58;
}
function Fn(e, t, n) {
  return ((t = t || 65), (n = n || 90), (e &= -33), e >= t && e <= n);
}
function Gl(e) {
  return me(e) || zn(e);
}
function zn(e) {
  return e === 95 || Fn(e);
}
function _h(e) {
  return e === 196 || e == 214 || e === 220 || e === 228 || e === 246 || e === 252;
}
function Lh(e) {
  return e === 32 || e === 9 || e === 160;
}
function Vi(e) {
  return Lh(e) || e === 10 || e === 13;
}
function Hi(e) {
  return e === 39 || e === 34;
}
function jh(e) {
  return { tokens: e, start: 0, pos: 0, size: e.length };
}
function je(e) {
  return e.tokens[e.pos];
}
function Wi(e) {
  return e.tokens[e.pos++];
}
function at(e, t = e.start, n = e.pos) {
  return e.tokens.slice(t, n);
}
function Ee(e) {
  return e.pos < e.size;
}
function te(e, t) {
  let n = je(e);
  return n && t(n) ? (e.pos++, !0) : !1;
}
function Gi(e, t, n = je(e)) {
  n && n.start != null && (t += ` at ${n.start}`);
  let r = new Error(t);
  return ((r.pos = n && n.start), r);
}
function Fh(e, t = {}) {
  let n = jh(e),
    r = Ql(n, t);
  if (Ee(n)) throw Gi(n, "Unexpected character");
  return r;
}
function Ql(e, t) {
  let n = { type: "TokenGroup", elements: [] },
    r = n,
    i,
    o = [];
  for (; Ee(e) && (i = Dh(e, t) || zh(e, t));)
    if ((r.elements.push(i), te(e, Kh))) (o.push(r), (r = i));
    else {
      if (te(e, em)) continue;
      if (te(e, Tl))
        do o.length && (r = o.pop());
        while (te(e, Tl));
    }
  return n;
}
function zh(e, t) {
  if (te(e, Yh)) {
    let n = Ql(e, t),
      r = Wi(e);
    return (fe(r, "group", !1) && (n.repeat = Mh(e)), n);
  }
}
function Dh(e, t) {
  let n,
    r = {
      type: "TokenElement",
      name: void 0,
      attributes: void 0,
      value: void 0,
      repeat: void 0,
      selfClose: !1,
      elements: [],
    };
  for (qh(e, t) && (r.name = at(e)); Ee(e);)
    if (((e.start = e.pos), !r.repeat && !Oi(r) && te(e, On))) r.repeat = e.tokens[e.pos - 1];
    else if (!r.value && Jl(e)) r.value = Xl(e);
    else if ((n = wl(e, "id", t) || wl(e, "class", t) || Uh(e)))
      r.attributes
        ? (r.attributes = r.attributes.concat(n))
        : (r.attributes = Array.isArray(n) ? n.slice() : [n]);
    else {
      !Oi(r) &&
        te(e, tm) &&
        ((r.selfClose = !0), !r.repeat && te(e, On) && (r.repeat = e.tokens[e.pos - 1]));
      break;
    }
  return Oi(r) ? void 0 : r;
}
function Uh(e) {
  if (te(e, Qh)) {
    let t = [],
      n;
    for (; Ee(e);)
      if ((n = Bh(e))) t.push(n);
      else {
        if (te(e, Jh)) break;
        if (!te(e, Yl)) throw Gi(e, `Unexpected "${je(e).type}" token`);
      }
    return t;
  }
}
function wl(e, t, n) {
  if (Ae(je(e), t)) {
    e.pos++;
    let r = 1;
    for (; Ae(je(e), t);) (e.pos++, r++);
    let i = { name: [Zh(t)] };
    return (
      r > 1 && (i.multiple = !0),
      n.jsx && Jl(e)
        ? ((i.value = Xl(e)), (i.expression = !0))
        : (i.value = Fi(e) ? at(e) : void 0),
      i
    );
  }
}
function Bh(e) {
  if (kl(e)) return { value: at(e) };
  if (Fi(e, !0)) {
    let t = at(e),
      n;
    return (te(e, Vh) && (kl(e) || Fi(e, !0)) && (n = at(e)), { name: t, value: n });
  }
}
function Mh(e) {
  return On(je(e)) ? e.tokens[e.pos++] : void 0;
}
function kl(e) {
  let t = e.pos,
    n = je(e);
  if (In(n)) {
    for (e.pos++; Ee(e);) if (In(Wi(e), n.single)) return ((e.start = t), !0);
    throw Gi(e, "Unclosed quote", n);
  }
  return !1;
}
function Fi(e, t) {
  let n = e.pos,
    r = { attribute: 0, expression: 0, group: 0 };
  for (; Ee(e);) {
    let i = je(e);
    if (r.expression) fe(i, "expression") && (r[i.context] += i.open ? 1 : -1);
    else {
      if (In(i) || Ae(i) || Yl(i) || On(i)) break;
      if (fe(i)) {
        if (!t) break;
        if (i.open) r[i.context]++;
        else if (r[i.context]) r[i.context]--;
        else break;
      }
    }
    e.pos++;
  }
  return n !== e.pos ? ((e.start = n), !0) : !1;
}
function qh(e, t) {
  let n = e.pos;
  if (t.jsx && te(e, Sl))
    for (; Ee(e);) {
      let { pos: r } = e;
      if (!te(e, Gh) || !te(e, Sl)) {
        e.pos = r;
        break;
      }
    }
  for (; Ee(e) && te(e, Wh););
  return e.pos !== n ? ((e.start = n), !0) : !1;
}
function Jl(e) {
  let t = e.pos;
  if (te(e, Xh)) {
    let n = 0;
    for (; Ee(e);) {
      let r = Wi(e);
      if (fe(r, "expression"))
        if (r.open) n++;
        else if (n) n--;
        else break;
    }
    return ((e.start = t), !0);
  }
  return !1;
}
function Xl(e) {
  let t = e.start,
    n = e.pos;
  return (
    fe(e.tokens[t], "expression", !0) && t++,
    fe(e.tokens[n - 1], "expression", !1) && n--,
    at(e, t, n)
  );
}
function fe(e, t, n) {
  return !!(e && e.type === "Bracket" && (!t || e.context === t) && (n == null || e.open === n));
}
function Ae(e, t) {
  return !!(e && e.type === "Operator" && (!t || e.operator === t));
}
function In(e, t) {
  return !!(e && e.type === "Quote" && (t == null || e.single === t));
}
function Yl(e) {
  return !!(e && e.type === "WhiteSpace");
}
function Vh(e) {
  return Ae(e, "equal");
}
function On(e) {
  return !!(e && e.type === "Repeater");
}
function Hh(e) {
  return e.type === "Literal";
}
function Sl(e) {
  if (Hh(e)) {
    let t = e.value.charCodeAt(0);
    return t >= 65 && t <= 90;
  }
  return !1;
}
function Wh(e) {
  return e.type === "Literal" || e.type === "RepeaterNumber" || e.type === "RepeaterPlaceholder";
}
function Gh(e) {
  return Ae(e, "class");
}
function Qh(e) {
  return fe(e, "attribute", !0);
}
function Jh(e) {
  return fe(e, "attribute", !1);
}
function Xh(e) {
  return fe(e, "expression", !0);
}
function Yh(e) {
  return fe(e, "group", !0);
}
function Zh(e) {
  return { type: "Literal", value: e };
}
function Oi(e) {
  return !e.name && !e.value && !e.attributes;
}
function Kh(e) {
  return Ae(e, "child");
}
function em(e) {
  return Ae(e, "sibling");
}
function Tl(e) {
  return Ae(e, "climb");
}
function tm(e) {
  return Ae(e, "close");
}
function nm(e) {
  return e.eat(N.Escape) ? ((e.start = e.pos), e.eof() || e.pos++, !0) : !1;
}
function rm(e) {
  let t = new Pn(e),
    n = [],
    r = { group: 0, attribute: 0, expression: 0, quote: 0 },
    i = 0,
    o;
  for (; !t.eof();)
    if (((i = t.peek()), (o = im(t, r)), o))
      (n.push(o),
        o.type === "Quote"
          ? (r.quote = i === r.quote ? 0 : i)
          : o.type === "Bracket" && (r[o.context] += o.open ? 1 : -1));
    else throw t.error("Unexpected character");
  return n;
}
function im(e, t) {
  return pm(e, t) || fm(e) || dm(e) || cm(e) || sm(e) || om(e, t) || um(e) || am(e) || lm(e);
}
function om(e, t) {
  let n = e.pos,
    r = t.expression,
    i = "";
  for (; !e.eof();) {
    if (nm(e)) {
      i += e.current();
      continue;
    }
    let o = e.peek();
    if (o === N.Slash && !t.quote && !t.expression && !t.attribute) {
      let s = e.string.charCodeAt(e.pos - 1),
        a = e.string.charCodeAt(e.pos + 1);
      if (me(s) && me(a)) {
        i += e.string[e.pos++];
        continue;
      }
    }
    if (o === t.quote || o === N.Dollar || hm(o, t)) break;
    if (r) {
      if (o === N.CurlyBracketOpen) t.expression++;
      else if (o === N.CurlyBracketClose)
        if (t.expression > r) t.expression--;
        else break;
    } else if (!t.quote && ((!t.attribute && !vm(o)) || mm(o, t) || gm(o, t) || Hi(o) || Zl(o)))
      break;
    i += e.string[e.pos++];
  }
  if (n !== e.pos) return ((e.start = n), { type: "Literal", value: i, start: n, end: e.pos });
}
function sm(e) {
  let t = e.pos;
  if (e.eatWhile(Vi))
    return { type: "WhiteSpace", start: t, end: e.pos, value: e.substring(t, e.pos) };
}
function am(e) {
  let t = e.peek();
  if (Hi(t)) return { type: "Quote", single: t === N.SingleQuote, start: e.pos++, end: e.pos };
}
function lm(e) {
  let t = e.peek(),
    n = Zl(t);
  if (n) return { type: "Bracket", open: bm(t), context: n, start: e.pos++, end: e.pos };
}
function um(e) {
  let t = Kl(e.peek());
  if (t) return { type: "Operator", operator: t, start: e.pos++, end: e.pos };
}
function cm(e) {
  let t = e.pos;
  if (e.eat(N.Asterisk)) {
    e.start = e.pos;
    let n = 1,
      r = !1;
    return (
      e.eatWhile(me) ? (n = Number(e.current())) : (r = !0),
      { type: "Repeater", count: n, value: 0, implicit: r, start: t, end: e.pos }
    );
  }
}
function fm(e) {
  let t = e.pos;
  if (e.eat(N.Dollar) && e.eat(N.Hash))
    return { type: "RepeaterPlaceholder", value: void 0, start: t, end: e.pos };
  e.pos = t;
}
function dm(e) {
  let t = e.pos;
  if (e.eatWhile(N.Dollar)) {
    let n = e.pos - t,
      r = !1,
      i = 1,
      o = 0;
    if (e.eat(N.At)) {
      for (; e.eat(N.Climb);) o++;
      ((r = e.eat(N.Dash)), (e.start = e.pos), e.eatWhile(me) && (i = Number(e.current())));
    }
    return (
      (e.start = t),
      { type: "RepeaterNumber", size: n, reverse: r, base: i, parent: o, start: t, end: e.pos }
    );
  }
}
function pm(e, t) {
  let n = e.pos;
  if ((t.expression || t.attribute) && e.eat(N.Dollar) && e.eat(N.CurlyBracketOpen)) {
    e.start = e.pos;
    let r,
      i = "";
    if (
      (e.eatWhile(me)
        ? ((r = Number(e.current())), (i = e.eat(N.Colon) ? El(e) : ""))
        : Fn(e.peek()) && (i = El(e)),
      e.eat(N.CurlyBracketClose))
    )
      return { type: "Field", index: r, name: i, start: n, end: e.pos };
    throw e.error("Expecting }");
  }
  e.pos = n;
}
function El(e) {
  let t = [];
  for (e.start = e.pos; !e.eof();)
    if (e.eat(N.CurlyBracketOpen)) t.push(e.pos);
    else if (e.eat(N.CurlyBracketClose)) {
      if (!t.length) {
        e.pos--;
        break;
      }
      t.pop();
    } else e.pos++;
  if (t.length) throw ((e.pos = t.pop()), e.error("Expecting }"));
  return e.current();
}
function hm(e, t) {
  let n = Kl(e);
  return !n || t.quote || t.expression ? !1 : !t.attribute || n === "equal";
}
function mm(e, t) {
  return Vi(e) && !t.expression;
}
function gm(e, t) {
  return e === N.Asterisk && !t.attribute && !t.expression;
}
function Zl(e) {
  if (e === N.RoundBracketOpen || e === N.RoundBracketClose) return "group";
  if (e === N.SquareBracketOpen || e === N.SquareBracketClose) return "attribute";
  if (e === N.CurlyBracketOpen || e === N.CurlyBracketClose) return "expression";
}
function Kl(e) {
  return (
    (e === N.Child && "child") ||
    (e === N.Sibling && "sibling") ||
    (e === N.Climb && "climb") ||
    (e === N.Dot && "class") ||
    (e === N.Hash && "id") ||
    (e === N.Slash && "close") ||
    (e === N.Equals && "equal") ||
    void 0
  );
}
function bm(e) {
  return e === N.CurlyBracketOpen || e === N.SquareBracketOpen || e === N.RoundBracketOpen;
}
function vm(e) {
  return Gl(e) || _h(e) || e === N.Dash || e === N.Colon || e === N.Excl;
}
function eu(e, t) {
  if (!Al[e.type]) throw new Error(`Unknown token ${e.type}`);
  return Al[e.type](e, t);
}
function km(e, t = {}) {
  let n = !1,
    r;
  t.text && (Array.isArray(t.text) ? (r = t.text.filter((o) => o.trim())) : (r = t.text));
  let i = {
    type: "Abbreviation",
    children: zi(e, {
      inserted: !1,
      repeaters: [],
      text: t.text,
      cleanText: r,
      repeatGuard: t.maxRepeat || Number.POSITIVE_INFINITY,
      getText(o) {
        var s;
        n = !0;
        let a;
        if (Array.isArray(t.text)) {
          if (o !== void 0 && o >= 0 && o < r.length) return r[o];
          a =
            o !== void 0
              ? t.text[o]
              : t.text.join(`
`);
        } else a = (s = t.text) !== null && s !== void 0 ? s : "";
        return a;
      },
      getVariable(o) {
        let s = t.variables && t.variables[o];
        return s ?? o;
      },
    }),
  };
  if (t.text != null && !n) {
    let o = Qi(ct(i.children));
    if (o) {
      let s = Array.isArray(t.text)
        ? t.text.join(`
`)
        : t.text;
      (ou(o, s), o.name === "a" && t.href && Tm(o, s));
    }
  }
  return i;
}
function tu(e, t) {
  let n = [];
  if (e.repeat) {
    let r = e.repeat,
      i = Object.assign({}, r);
    i.count = i.implicit && Array.isArray(t.text) ? t.cleanText.length : i.count || 1;
    let o;
    t.repeaters.push(i);
    for (let s = 0; s < i.count; s++) {
      if (
        ((i.value = s),
        (e.repeat = i),
        (o = Nl(e) ? zi(e, t) : Cl(e, t)),
        i.implicit && !t.inserted)
      ) {
        let a = ct(o),
          l = a && Qi(a);
        l && ou(l, t.getText(i.value));
      }
      if (((n = n.concat(o)), --t.repeatGuard <= 0)) break;
    }
    (t.repeaters.pop(), (e.repeat = r), i.implicit && (t.inserted = !0));
  } else n = n.concat(Nl(e) ? zi(e, t) : Cl(e, t));
  return n;
}
function Cl(e, t) {
  let n = [],
    r = {
      type: "AbbreviationNode",
      name: e.name && nu(e.name, t),
      value: e.value && ru(e.value, t),
      attributes: void 0,
      children: n,
      repeat: e.repeat && Object.assign({}, e.repeat),
      selfClosing: e.selfClose,
    },
    i = [r];
  for (let o of e.elements) n = n.concat(tu(o, t));
  if (e.attributes) {
    r.attributes = [];
    for (let o of e.attributes) r.attributes.push(Sm(o, t));
  }
  return (
    !r.name && !r.attributes && r.value && !r.value.some(iu) ? (i = i.concat(n)) : (r.children = n),
    i
  );
}
function zi(e, t) {
  let n = [];
  for (let r of e.elements) n = n.concat(tu(r, t));
  return (e.repeat && (n = Em(n, e.repeat)), n);
}
function Sm(e, t) {
  let n = !1,
    r = !1,
    i = e.expression ? "expression" : "raw",
    o,
    s = e.name && nu(e.name, t);
  if ((s && s[0] === "!" && (n = !0), s && s[s.length - 1] === "." && (r = !0), e.value)) {
    let a = e.value.slice();
    if (In(a[0])) {
      let l = a.shift();
      (a.length && ct(a).type === l.type && a.pop(),
        (i = l.single ? "singleQuote" : "doubleQuote"));
    } else
      fe(a[0], "expression", !0) &&
        ((i = "expression"), a.shift(), fe(ct(a), "expression", !1) && a.pop());
    o = ru(a, t);
  }
  return {
    name: r || n ? s.slice(n ? 1 : 0, r ? -1 : void 0) : s,
    value: o,
    boolean: r,
    implied: n,
    valueType: i,
    multiple: e.multiple,
  };
}
function nu(e, t) {
  let n = "";
  for (let r = 0; r < e.length; r++) n += eu(e[r], t);
  return n;
}
function ru(e, t) {
  let n = [],
    r = "";
  for (let i = 0, o; i < e.length; i++)
    ((o = e[i]), iu(o) ? (r && (n.push(r), (r = "")), n.push(o)) : (r += eu(o, t)));
  return (r && n.push(r), n);
}
function Nl(e) {
  return e.type === "TokenGroup";
}
function iu(e) {
  return typeof e == "object" && e.type === "Field" && e.index != null;
}
function ct(e) {
  return e[e.length - 1];
}
function Qi(e) {
  return e.children.length ? Qi(ct(e.children)) : e;
}
function ou(e, t) {
  e.value
    ? typeof ct(e.value) == "string"
      ? (e.value[e.value.length - 1] += t)
      : e.value.push(t)
    : (e.value = [t]);
}
function Tm(e, t) {
  var n;
  let r = "";
  ym.test(t)
    ? ((r = t), !/\w+:/.test(r) && !r.startsWith("//") && (r = `http://${r}`))
    : wm.test(t) && (r = `mailto:${t}`);
  let i = (n = e.attributes) === null || n === void 0 ? void 0 : n.find((o) => o.name === "href");
  i
    ? i.value || (i.value = [r])
    : (e.attributes || (e.attributes = []),
      e.attributes.push({ name: "href", value: [r], valueType: "doubleQuote" }));
}
function Em(e, t) {
  for (let n of e) n.repeat || (n.repeat = Object.assign({}, t));
  return e;
}
function su(e, t) {
  try {
    let n = typeof e == "string" ? rm(e) : e;
    return km(Fh(n, t), t);
  } catch (n) {
    throw (
      n instanceof Ft &&
        typeof e == "string" &&
        (n.message += `
${e}
${"-".repeat(n.pos)}^`),
      n
    );
  }
}
function Am(e, t) {
  let n = 0,
    r,
    i = new Pn(e),
    o = [];
  for (; !i.eof();) {
    if (((r = Cm(i, n === 0 && !t)), !r)) throw i.error("Unexpected character");
    if (r.type === "Bracket" && (!n && r.open && qm(i, o), (n += r.open ? 1 : -1), n < 0))
      throw i.error("Unexpected bracket", r.start);
    (o.push(r), Mm(r) && (r = au(i)) && o.push(r));
  }
  return o;
}
function Cm(e, t) {
  return Nm(e) || _m(e) || Im(e) || $m(e) || Om(e) || Lm(e) || au(e) || Rm(e) || Pm(e, t);
}
function Nm(e) {
  let t = e.pos;
  if (e.eat($.Dollar) && e.eat($.CurlyBracketOpen)) {
    e.start = e.pos;
    let n,
      r = "";
    if (
      (e.eatWhile(me)
        ? ((n = Number(e.current())), (r = e.eat($.Colon) ? Pl(e) : ""))
        : Fn(e.peek()) && (r = Pl(e)),
      e.eat($.CurlyBracketClose))
    )
      return { type: "Field", index: n, name: r, start: t, end: e.pos };
    throw e.error("Expecting }");
  }
  e.pos = t;
}
function Pl(e) {
  let t = [];
  for (e.start = e.pos; !e.eof();)
    if (e.eat($.CurlyBracketOpen)) t.push(e.pos);
    else if (e.eat($.CurlyBracketClose)) {
      if (!t.length) {
        e.pos--;
        break;
      }
      t.pop();
    } else e.pos++;
  if (t.length) throw ((e.pos = t.pop()), e.error("Expecting }"));
  return e.current();
}
function Pm(e, t) {
  let n = e.pos;
  if (
    (e.eat(Fm)
      ? e.eatWhile(n ? Di : Ri)
      : e.eat(zn)
        ? e.eatWhile(t ? Ri : Di)
        : (e.eat($.Dot), e.eatWhile(Ri)),
    n !== e.pos)
  )
    return ((e.start = n), Ji(e, (e.start = n)));
}
function Ji(e, t = e.start, n = e.pos) {
  return { type: "Literal", value: e.substring(t, n), start: t, end: n };
}
function Im(e) {
  let t = e.pos;
  if (jm(e)) {
    e.start = t;
    let n = e.current();
    return (
      (e.start = e.pos),
      e.eat($.Percent) || e.eatWhile(zn),
      {
        type: "NumberValue",
        value: Number(n),
        rawValue: n,
        unit: e.current(),
        start: t,
        end: e.pos,
      }
    );
  }
}
function Om(e) {
  let t = e.peek(),
    n = e.pos,
    r = !1;
  if (Hi(t)) {
    for (e.pos++; !e.eof();)
      if (e.eat(t)) {
        r = !0;
        break;
      } else e.pos++;
    return (
      (e.start = n),
      {
        type: "StringValue",
        value: e.substring(n + 1, e.pos - (r ? 1 : 0)),
        quote: t === $.SingleQuote ? "single" : "double",
        start: n,
        end: e.pos,
      }
    );
  }
}
function $m(e) {
  let t = e.pos;
  if (e.eat($.Hash)) {
    let n = e.pos,
      r = "",
      i = "";
    if (
      (e.eatWhile(Dm)
        ? ((r = e.substring(n, e.pos)), (i = $i(e)))
        : e.eat($.Transparent)
          ? ((r = "0"), (i = $i(e) || "0"))
          : (i = $i(e)),
      r || i || e.eof())
    ) {
      let { r: o, g: s, b: a, a: l } = Bm(r, i);
      return {
        type: "ColorValue",
        r: o,
        g: s,
        b: a,
        a: l,
        raw: e.substring(t + 1, e.pos),
        start: t,
        end: e.pos,
      };
    } else return Ji(e, t);
  }
  e.pos = t;
}
function $i(e) {
  let t = e.pos;
  return e.eat($.Dot) ? ((e.start = t), e.eatWhile(me) ? e.current() : "1") : "";
}
function Rm(e) {
  let t = e.pos;
  if (e.eatWhile(Vi)) return { type: "WhiteSpace", start: t, end: e.pos };
}
function _m(e) {
  let t = e.pos;
  if (e.eat($.Dash) && e.eat($.Dash))
    return (
      (e.start = t),
      e.eatWhile(Di),
      { type: "CustomProperty", value: e.current(), start: t, end: e.pos }
    );
  e.pos = t;
}
function Lm(e) {
  let t = e.peek();
  if (Um(t)) return { type: "Bracket", open: t === $.RoundBracketOpen, start: e.pos++, end: e.pos };
}
function au(e) {
  let t = zm(e.peek());
  if (t) return { type: "Operator", operator: t, start: e.pos++, end: e.pos };
}
function jm(e) {
  let t = e.pos;
  e.eat($.Dash);
  let n = e.pos,
    r = e.eatWhile(me),
    i = e.pos;
  if (e.eat($.Dot)) {
    let o = e.eatWhile(me);
    !r && !o && (e.pos = i);
  }
  return (e.pos === n && (e.pos = t), e.pos !== t);
}
function Fm(e) {
  return e === $.At || e === $.Dollar;
}
function zm(e) {
  return (
    (e === $.Sibling && ue.Sibling) ||
    (e === $.Excl && ue.Important) ||
    (e === $.Comma && ue.ArgumentDelimiter) ||
    (e === $.Colon && ue.PropertyDelimiter) ||
    (e === $.Dash && ue.ValueDelimiter) ||
    void 0
  );
}
function Dm(e) {
  return me(e) || Fn(e, 65, 70);
}
function Di(e) {
  return Gl(e) || e === $.Dash;
}
function Um(e) {
  return e === $.RoundBracketOpen || e === $.RoundBracketClose;
}
function Ri(e) {
  return zn(e) || e === $.Percent || e === $.Slash;
}
function Bm(e, t) {
  let n = "0",
    r = "0",
    i = "0",
    o = Number(t != null && t !== "" ? t : 1);
  if (e === "t") o = 0;
  else
    switch (e.length) {
      case 0:
        break;
      case 1:
        n = r = i = e + e;
        break;
      case 2:
        n = r = i = e;
        break;
      case 3:
        ((n = e[0] + e[0]), (r = e[1] + e[1]), (i = e[2] + e[2]));
        break;
      default:
        ((e += e), (n = e.slice(0, 2)), (r = e.slice(2, 4)), (i = e.slice(4, 6)));
    }
  return { r: parseInt(n, 16), g: parseInt(r, 16), b: parseInt(i, 16), a: o };
}
function Mm(e) {
  return e.type === "ColorValue" || (e.type === "NumberValue" && !e.unit);
}
function qm(e, t) {
  let n = 0,
    r = 0;
  for (; t.length;) {
    let i = Vm(t);
    if (i.type === "Literal" || i.type === "NumberValue")
      ((n = i.start), r || (r = i.end), t.pop());
    else break;
  }
  n !== r && t.push(Ji(e, n, r));
}
function Vm(e) {
  return e[e.length - 1];
}
function Hm(e) {
  return { tokens: e, start: 0, pos: 0, size: e.length };
}
function Dn(e) {
  return e.tokens[e.pos];
}
function Un(e) {
  return e.pos < e.size;
}
function Te(e, t) {
  return t(Dn(e)) ? (e.pos++, !0) : !1;
}
function lu(e, t, n = Dn(e)) {
  n && n.start != null && (t += ` at ${n.start}`);
  let r = new Error(t);
  return ((r.pos = n && n.start), r);
}
function Wm(e, t = {}) {
  let n = Hm(e),
    r = [],
    i;
  for (; Un(n);)
    if ((i = Gm(n, t))) r.push(i);
    else if (!Te(n, Ym)) throw lu(n, "Unexpected token");
  return r;
}
function Gm(e, t) {
  let n,
    r = !1,
    i,
    o = [],
    s = Dn(e),
    a = !!t.value;
  for (!a && Xi(s) && !tg(e) && (e.pos++, (n = s.value), Te(e, du)), a && Te(e, Yi); Un(e);)
    if (Te(e, Km)) r = !0;
    else if ((i = uu(e, a))) o.push(i);
    else if (!Te(e, Zm)) break;
  if (n || o.length || r) return { name: n, value: o, important: r };
}
function uu(e, t) {
  let n = [],
    r,
    i;
  for (; Un(e);)
    if (((r = Dn(e)), eg(r)))
      (e.pos++,
        Xi(r) && (i = Qm(e))
          ? n.push({ type: "FunctionCall", name: r.value, arguments: i })
          : n.push(r));
    else if (du(r) || (t && Yi(r))) e.pos++;
    else break;
  return n.length ? { type: "CSSValue", value: n } : void 0;
}
function Qm(e) {
  let t = e.pos;
  if (Te(e, Jm)) {
    let n = [],
      r;
    for (; Un(e) && !Te(e, Xm);)
      if ((r = uu(e, !0))) n.push(r);
      else if (!Te(e, Yi) && !Te(e, fu)) throw lu(e, "Unexpected token");
    return ((e.start = t), n);
  }
}
function Xi(e) {
  return e && e.type === "Literal";
}
function cu(e, t) {
  return e && e.type === "Bracket" && (t == null || e.open === t);
}
function Jm(e) {
  return cu(e, !0);
}
function Xm(e) {
  return cu(e, !1);
}
function Yi(e) {
  return e && e.type === "WhiteSpace";
}
function zt(e, t) {
  return e && e.type === "Operator" && (!t || e.operator === t);
}
function Ym(e) {
  return zt(e, ue.Sibling);
}
function fu(e) {
  return zt(e, ue.ArgumentDelimiter);
}
function Zm(e) {
  return fu(e);
}
function Km(e) {
  return zt(e, ue.Important);
}
function eg(e) {
  return (
    e.type === "StringValue" ||
    e.type === "ColorValue" ||
    e.type === "NumberValue" ||
    e.type === "Literal" ||
    e.type === "Field" ||
    e.type === "CustomProperty"
  );
}
function du(e) {
  return zt(e, ue.PropertyDelimiter) || zt(e, ue.ValueDelimiter);
}
function tg(e) {
  let t = e.tokens[e.pos],
    n = e.tokens[e.pos + 1];
  return t && n && Xi(t) && n.type === "Bracket";
}
function pu(e, t) {
  try {
    let n = typeof e == "string" ? Am(e, t && t.value) : e;
    return Wm(n, t);
  } catch (n) {
    throw (
      n instanceof Ft &&
        typeof e == "string" &&
        (n.message += `
${e}
${"-".repeat(n.pos)}^`),
      n
    );
  }
}
function ng(e, t) {
  if (!e.attributes) return;
  let n = [],
    r = {};
  for (let i of e.attributes)
    if (i.name) {
      let o = i.name;
      if (o in r) {
        let s = r[o];
        o === "class" ? (s.value = rg(s.value, i.value, " ")) : ig(s, i, t);
      } else n.push((r[o] = Object.assign({}, i)));
    } else n.push(i);
  e.attributes = n;
}
function rg(e, t, n) {
  if (e && t) {
    e.length && n && Il(e, n);
    for (let i of t) Il(e, i);
    return e;
  }
  let r = e || t;
  return r && r.slice();
}
function ig(e, t, n) {
  return (
    (e.name = t.name),
    n.options["output.reverseAttributes"] || (e.value = t.value),
    e.implied || (e.implied = t.implied),
    e.boolean || (e.boolean = t.boolean),
    e.valueType !== "expression" && (e.valueType = t.valueType),
    e
  );
}
function Il(e, t) {
  let n = e.length - 1;
  typeof e[n] == "string" && typeof t == "string" ? (e[n] += t) : e.push(t);
}
function og(e, t, n) {
  let r = [e],
    i = (o) => {
      (t(o, r, n), r.push(o), o.children.forEach(i), r.pop());
    };
  e.children.forEach(i);
}
function hu(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    let r = e.children[n];
    if (t(r)) return r;
    let i = hu(r, t);
    if (i) return i;
  }
}
function sg(e) {
  let t;
  for (; e.children.length;) ((t = e), (e = e.children[e.children.length - 1]));
  return { parent: t, node: e };
}
function mu(e) {
  return e.type === "AbbreviationNode";
}
function ag(e, t) {
  let n = [],
    r = t.options["output.reverseAttributes"],
    { warn: i } = t,
    o = (s) => {
      let a = s.name && t.snippets[s.name];
      if (!a || n.includes(a)) return null;
      let l;
      try {
        l = su(a, t);
      } catch (u) {
        return (i?.(`Unable to parse "${a}" snippet`, u), null);
      }
      (n.push(a), $n(l, o), n.pop());
      for (let u of l.children) {
        if (s.attributes) {
          let c = u.attributes || [],
            f = s.attributes || [];
          u.attributes = r ? f.concat(c) : c.concat(f);
        }
        lg(s, u);
      }
      return l;
    };
  return ($n(e, o), e);
}
function $n(e, t, n) {
  let r = [];
  for (let i of e.children) {
    let o = t(i);
    if (o) {
      r = r.concat(o.children);
      let s = sg(o);
      mu(s.node) && (s.node.children = s.node.children.concat($n(i, t)));
    } else (r.push(i), (i.children = $n(i, t)));
  }
  return (e.children = r);
}
function lg(e, t) {
  (e.selfClosing && (t.selfClosing = !0),
    e.value != null && (t.value = e.value),
    e.repeat && (t.repeat = e.repeat));
}
function gu(e, t = 0) {
  return { options: e, value: "", level: t, offset: 0, line: 0, column: 0 };
}
function Y(e, t) {
  let n = e.options["output.text"];
  xu(e, n(t, e.offset, e.line, e.column));
}
function L(e, t) {
  let n = dg(t);
  for (let r = 0, i = n.length - 1; r <= i; r++) (Y(e, n[r]), r !== i && ye(e, !0));
}
function ye(e, t) {
  let n = e.options["output.baseIndent"],
    r = e.options["output.newline"];
  (Y(e, r + n), e.line++, (e.column = n.length), t && ug(e, t === !0 ? e.level : t));
}
function ug(e, t = e.level) {
  let n = e.options["output.indent"];
  Y(e, n.repeat(Math.max(t, 0)));
}
function Zi(e, t, n) {
  let r = e.options["output.field"];
  xu(e, r(t, n, e.offset, e.line, e.column));
}
function cg(e, t) {
  return yu(e, t.options["output.tagCase"]);
}
function bu(e, t) {
  return yu(e, t.options["output.attributeCase"]);
}
function Rn(e, t, n) {
  return e.valueType === "expression"
    ? n
      ? Ui
      : Bi
    : t.options["output.attributeQuotes"] === "single"
      ? "'"
      : '"';
}
function vu(e, t) {
  return e.boolean || t.options["output.booleanAttributes"].includes((e.name || "").toLowerCase());
}
function fg(e) {
  switch (e.options["output.selfClosingStyle"]) {
    case "xhtml":
      return " /";
    case "xml":
      return "/";
    default:
      return "";
  }
}
function lt(e, t) {
  return typeof e == "string"
    ? t.options.inlineElements.includes(e.toLowerCase())
    : e.name
      ? lt(e.name, t)
      : !!(e.value && !e.attributes);
}
function dg(e) {
  return e.split(/\r\n|\r|\n/g);
}
function xu(e, t) {
  ((e.value += t), (e.offset += t.length), (e.column += t.length));
}
function yu(e, t) {
  return t ? (t === "upper" ? e.toUpperCase() : e.toLowerCase()) : e;
}
function hg(e, t, n) {
  !e.name && e.attributes && wu(e, t, n);
}
function wu(e, t, n) {
  let r = gg(t),
    i = n.context ? n.context.name : "",
    o = mg(r ? r.name : i);
  e.name = pg[o] || (lt(o, n) ? "span" : "div");
}
function mg(e) {
  return (e || "").toLowerCase();
}
function gg(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (mu(n)) return n;
  }
}
function wg(e, t, n) {
  let r;
  if (e.name && (r = e.name.match(yg))) {
    let i = Ol[r[1]] || Ol.latin,
      o = r[2] ? Math.max(1, Number(r[2])) : 30,
      s = r[3] ? Math.max(o, Number(r[3].slice(1))) : o,
      a = Le(o, s),
      l = e.repeat || Ag(t);
    ((e.name = e.attributes = void 0),
      (e.value = [Eg(i, a, !l || l.value === 0)]),
      e.repeat && t.length > 1 && wu(e, t, n));
  }
}
function Le(e, t) {
  return Math.floor(Math.random() * (t - e) + e);
}
function kg(e, t) {
  let n = e.length,
    r = Math.min(n, t),
    i = [];
  for (; i.length < r;) {
    let o = e[Le(0, n)];
    i.includes(o) || i.push(o);
  }
  return i;
}
function Sg(e) {
  return e[Le(0, e.length - 1)];
}
function $l(e, t) {
  return (e.length && (e = [Tg(e[0])].concat(e.slice(1))), e.join(" ") + (t || Sg("?!...")));
}
function Tg(e) {
  return e[0].toUpperCase() + e.slice(1);
}
function Rl(e) {
  if (e.length < 2) return e;
  e = e.slice();
  let t = e.length,
    n = /,$/,
    r = 0;
  t > 3 && t <= 6 ? (r = Le(0, 1)) : t > 6 && t <= 12 ? (r = Le(0, 2)) : (r = Le(1, 4));
  for (let i = 0, o; i < r; i++) ((o = Le(0, t - 2)), n.test(e[o]) || (e[o] += ","));
  return e;
}
function Eg(e, t, n) {
  let r = [],
    i = 0,
    o;
  for (
    n && e.common && ((o = e.common.slice(0, t)), (i += o.length), r.push($l(Rl(o), ".")));
    i < t;
  )
    ((o = kg(e.words, Math.min(Le(2, 30), t - i))), (i += o.length), r.push($l(Rl(o))));
  return r.join(" ");
}
function Ag(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (n.type === "AbbreviationNode" && n.repeat) return n.repeat;
  }
}
function Cg(e) {
  Pg(e.name) &&
    e.attributes &&
    (e.children.length || e.value) &&
    (e.attributes = e.attributes.filter(Ng));
}
function Ng(e) {
  return e.name !== "select";
}
function Pg(e) {
  return e === "xsl:variable" || e === "xsl:with-param";
}
function $g(e, t, n) {
  (Rg(e), _g(e, t, n));
}
function Rg(e) {
  let t = Ki(e),
    n = [];
  for (let r of t.classNames) {
    let i = r.indexOf("_");
    i > 0 && !r.startsWith("-") ? (n.push(r.slice(0, i)), n.push(r.slice(i))) : n.push(r);
  }
  n.length &&
    ((t.classNames = n.filter(Cu)), (t.block = Eu(t.classNames)), Au(e, t.classNames.join(" ")));
}
function _g(e, t, n) {
  let r = Ki(e),
    i = [],
    { options: o } = n,
    s = t.slice(1).concat(e);
  for (let l of r.classNames) {
    let u = "",
      c,
      f = l;
    ((c = l.match(ku)) &&
      ((u = _l(s, c[1].length, n.context) + o["bem.element"] + c[2]),
      i.push(u),
      (l = l.slice(c[0].length))),
      (c = l.match(Su)) &&
        (u || ((u = _l(s, c[1].length)), i.push(u)),
        i.push(`${u}${o["bem.modifier"]}${c[2]}`),
        (l = l.slice(c[0].length))),
      l === f && i.push(f));
  }
  let a = i.filter(Cu);
  a.length && Au(e, a.join(" "));
}
function Ki(e) {
  if (!e._bem) {
    let t = "";
    if (e.attributes) {
      for (let n of e.attributes)
        if (n.name === "class" && n.value) {
          t = jg(n.value);
          break;
        }
    }
    e._bem = Tu(t);
  }
  return e._bem;
}
function Lg(e) {
  return (e._bem || (e._bem = Tu((e.attributes && e.attributes.class) || "")), e._bem);
}
function Tu(e) {
  let t = e ? e.split(/\s+/) : [];
  return { classNames: t, block: Eu(t) };
}
function _l(e, t = 0, n) {
  let i = Math.max(e.length - t, 0);
  do {
    let o = e[i];
    if (o) {
      let s = Ki(o);
      if (s.block) return s.block;
    }
  } while (0 < i--);
  if (n) {
    let o = Lg(n);
    if (o.block) return o.block;
  }
  return "";
}
function Eu(e) {
  return Ll(e, Ig) || Ll(e, Og) || void 0;
}
function Ll(e, t) {
  for (let n of e) {
    if (ku.test(n) || Su.test(n)) break;
    if (t(n)) return n;
  }
}
function Au(e, t) {
  for (let n of e.attributes)
    if (n.name === "class") {
      n.value = [t];
      break;
    }
}
function jg(e) {
  let t = "";
  for (let n of e) t += typeof n == "string" ? n : n.name;
  return t;
}
function Cu(e, t, n) {
  return !!e && n.indexOf(e) === t;
}
function Fg(e) {
  if (e.name === "label") {
    let t = hu(e, (n) => n.name === "input" || n.name === "textarea");
    t &&
      (e.attributes && (e.attributes = e.attributes.filter((n) => !(n.name === "for" && jl(n)))),
      t.attributes && (t.attributes = t.attributes.filter((n) => !(n.name === "id" && jl(n)))));
  }
}
function jl(e) {
  if (!e.value) return !0;
  if (e.value.length === 1) {
    let t = e.value[0];
    if (t && typeof t != "string" && !t.name) return !0;
  }
  return !1;
}
function Nu(e, t, n) {
  let r = (o, s, a) => {
      let { parent: l, current: u } = n;
      ((n.parent = u), (n.current = o), t(o, s, a, n, i), (n.current = u), (n.parent = l));
    },
    i = (o, s, a) => {
      (n.ancestors.push(n.current), r(o, s, a), n.ancestors.pop());
    };
  e.children.forEach(r);
}
function Pu(e) {
  return { current: null, parent: void 0, ancestors: [], config: e, field: 1, out: gu(e.options) };
}
function qe(e) {
  return e ? !e.name && !e.attributes : !1;
}
function Fl(e, t) {
  return e ? lt(e, t) : !1;
}
function Iu(e) {
  return typeof e == "object" && e.type === "Field";
}
function ce(e, t) {
  let { out: n } = t,
    r = -1;
  for (let i of e)
    typeof i == "string"
      ? L(n, i)
      : (Zi(n, t.field + i.index, i.name), i.index > r && (r = i.index));
  r !== -1 && (t.field += r + 1);
}
function zg(e) {
  let t = [],
    n = [];
  for (let r of e)
    if (typeof r == "string") {
      let i = r.split(/\r\n?|\n/g);
      for (n.push(i.shift() || ""); i.length;) (t.push(n), (n = [i.shift() || ""]));
    } else n.push(r);
  return (n.length && t.push(n), t);
}
function Ou(e) {
  return !e.implied || e.valueType !== "raw" || (!!e.value && e.value.length > 0);
}
function zl(e) {
  let t = [],
    n = { pos: 0, text: e },
    r,
    i = n.pos,
    o = n.pos;
  for (; n.pos < n.text.length;)
    ((o = n.pos),
      (r = Dg(n)) ? (i !== n.pos && t.push(e.slice(i, o)), t.push(r), (i = n.pos)) : n.pos++);
  return (i !== n.pos && t.push(e.slice(i)), t);
}
function Dg(e) {
  if (_i(e) === Ve.Start) {
    let t = ++e.pos,
      n = t,
      r = t,
      i = 1;
    for (; e.pos < e.text.length;) {
      let o = _i(e);
      if ($u(o)) {
        for (n = e.pos; Ug(_i(e));) e.pos++;
        r = e.pos;
      } else {
        if (o === Ve.Start) i++;
        else if (o === Ve.End && --i === 0)
          return {
            before: e.text.slice(t, n),
            after: e.text.slice(r, e.pos++),
            name: e.text.slice(n, r),
          };
        e.pos++;
      }
    }
  }
}
function _i(e, t = e.pos) {
  return e.text.charCodeAt(t);
}
function $u(e) {
  return e >= 65 && e <= 90;
}
function Ug(e) {
  return $u(e) || (e > 47 && e < 58) || e === Ve.Underscore || e === Ve.Dash;
}
function Bg(e) {
  let { options: t } = e;
  return {
    enabled: t["comment.enabled"],
    trigger: t["comment.trigger"],
    before: t["comment.before"] ? zl(t["comment.before"]) : void 0,
    after: t["comment.after"] ? zl(t["comment.after"]) : void 0,
  };
}
function Mg(e, t) {
  Ru(e, t) && t.comment.before && _u(e, t.comment.before, t);
}
function qg(e, t) {
  Ru(e, t) && t.comment.after && _u(e, t.comment.after, t);
}
function Ru(e, t) {
  let { comment: n } = t;
  if (!n.enabled || !n.trigger || !e.name || !e.attributes) return !1;
  for (let r of e.attributes) if (r.name && n.trigger.includes(r.name)) return !0;
  return !1;
}
function _u(e, t, n) {
  let r = {},
    { out: i } = n;
  for (let o of e.attributes) o.name && o.value && (r[o.name.toUpperCase()] = o.value);
  for (let o of t)
    typeof o == "string" ? L(i, o) : r[o.name] && (L(i, o.before), ce(r[o.name], n), L(i, o.after));
}
function Lu(e, t) {
  let n = Pu(t);
  return ((n.comment = Bg(t)), Nu(e, Wg, n), n.out.value);
}
function Wg(e, t, n, r, i) {
  let { out: o, config: s } = r,
    a = ju(e, t, n, r),
    l = Qg(r);
  if (((o.level += l), a && ye(o, !0), e.name)) {
    let u = cg(e.name, s);
    if ((Mg(e, r), L(o, `<${u}`), e.attributes)) for (let c of e.attributes) Ou(c) && Gg(c, r);
    if (e.selfClosing && !e.children.length && !e.value) L(o, `${fg(s)}>`);
    else {
      if ((L(o, ">"), !Dl(e, r, i))) {
        if (e.value) {
          let c = e.value.some(Fu) || Jg(e.value, s);
          (c && ye(r.out, ++o.level), ce(e.value, r), c && ye(r.out, --o.level));
        }
        if ((e.children.forEach(i), !e.value && !e.children.length)) {
          let c =
            s.options["output.formatLeafNode"] || s.options["output.formatForce"].includes(e.name);
          (c && ye(r.out, ++o.level), ce(Bn, r), c && ye(r.out, --o.level));
        }
      }
      (L(o, `</${u}>`), qg(e, r));
    }
  } else !Dl(e, r, i) && e.value && (ce(e.value, r), e.children.forEach(i));
  if (a && t === n.length - 1 && r.parent) {
    let u = qe(r.parent) ? 0 : 1;
    ye(o, o.level - u);
  }
  o.level -= l;
}
function Gg(e, t) {
  let { out: n, config: r } = t;
  if (e.name) {
    let i = r.options["markup.attributes"],
      o = r.options["markup.valuePrefix"],
      { name: s, value: a } = e,
      l = Rn(e, r, !0),
      u = Rn(e, r);
    (i && (s = Ul(s, i, e.multiple) || s),
      (s = bu(s, r)),
      r.options["jsx.enabled"] && e.multiple && ((l = Ui), (u = Bi)));
    let c = o ? Ul(e.name, o, e.multiple) : null;
    if (c && a?.length === 1 && typeof a[0] == "string") {
      let f = a[0];
      ((a = [Xg(f) ? `${c}.${f}` : `${c}['${f}']`]),
        r.options["jsx.enabled"] && ((l = Ui), (u = Bi)));
    }
    (vu(e, r) && !a ? r.options["output.compactBoolean"] || (a = [s]) : a || (a = Bn),
      L(n, " " + s),
      a
        ? (L(n, "=" + l), ce(a, t), L(n, u))
        : r.options["output.selfClosingStyle"] !== "html" && L(n, "=" + l + u));
  }
}
function Dl(e, t, n) {
  if (e.value && e.children.length) {
    let r = e.value.findIndex(Iu);
    if (r !== -1) {
      ce(e.value.slice(0, r), t);
      let i = t.out.line,
        o = r + 1;
      return (
        e.children.forEach(n),
        t.out.line !== i && typeof e.value[o] == "string" && L(t.out, e.value[o++].trimLeft()),
        ce(e.value.slice(o), t),
        !0
      );
    }
  }
  return !1;
}
function ju(e, t, n, r) {
  let { config: i, parent: o } = r;
  if (!i.options["output.format"] || (t === 0 && !o) || (o && qe(o) && n.length === 1)) return !1;
  if (
    qe(e) &&
    (qe(n[t - 1]) || qe(n[t + 1]) || e.value.some(Fu) || (e.value.some(Iu) && e.children.length))
  )
    return !0;
  if (lt(e, i)) {
    if (t === 0) {
      for (let s = 0; s < n.length; s++) if (!lt(n[s], i)) return !0;
    } else if (!lt(n[t - 1], i)) return !0;
    if (i.options["output.inlineBreak"]) {
      let s = 1,
        a = t,
        l = t;
      for (; Fl(n[--a], i);) s++;
      for (; Fl(n[++l], i);) s++;
      if (s >= i.options["output.inlineBreak"]) return !0;
    }
    for (let s = 0, a = e.children.length; s < a; s++)
      if (ju(e.children[s], s, e.children, r)) return !0;
    return !1;
  }
  return !0;
}
function Qg(e) {
  let { config: t, parent: n } = e;
  return !n || qe(n) || (n.name && t.options["output.formatSkip"].includes(n.name)) ? 0 : 1;
}
function Fu(e) {
  return typeof e == "string" && /\r|\n/.test(e);
}
function Jg(e, t) {
  if (e.length && typeof e[0] == "string") {
    let n = Vg.exec(e[0]);
    if (n?.length && !t.options.inlineElements.includes(n[1].toLowerCase())) return !0;
  }
  return !1;
}
function Ul(e, t, n) {
  return (n && t[`${e}*`]) || t[e];
}
function Xg(e) {
  return !Hg.has(e) && /^[a-zA-Z_$][\w_$]*$/.test(e);
}
function eo(e, t, n) {
  let r = Pu(t);
  return ((r.options = n || {}), Nu(e, Yg, r), r.out.value);
}
function Yg(e, t, n, r, i) {
  let { out: o, options: s } = r,
    { primary: a, secondary: l } = Zg(e),
    u = r.parent ? 1 : 0;
  ((o.level += u),
    ib(e, t, n, r) && ye(o, !0),
    e.name &&
      (e.name !== "div" || !a.length) &&
      L(o, (s.beforeName || "") + e.name + (s.afterName || "")),
    Kg(a, r),
    eb(l.filter(Ou), r),
    e.selfClosing && !e.value && !e.children.length
      ? r.options.selfClose && L(o, r.options.selfClose)
      : (tb(e, r), e.children.forEach(i)),
    (o.level -= u));
}
function Zg(e) {
  let t = [],
    n = [];
  if (e.attributes) for (let r of e.attributes) nb(r) ? t.push(r) : n.push(r);
  return { primary: t, secondary: n };
}
function Kg(e, t) {
  for (let n of e)
    if (n.value)
      if (n.name === "class") {
        L(t.out, ".");
        let r = n.value.map((i) => (typeof i == "string" ? i.replace(/\s+/g, ".") : i));
        ce(r, t);
      } else (L(t.out, "#"), ce(n.value, t));
}
function eb(e, t) {
  if (e.length) {
    let { out: n, config: r, options: i } = t;
    i.beforeAttribute && L(n, i.beforeAttribute);
    for (let o = 0; o < e.length; o++) {
      let s = e[o];
      (L(n, bu(s.name || "", r)),
        vu(s, r) && !s.value
          ? !r.options["output.compactBoolean"] && i.booleanValue && L(n, "=" + i.booleanValue)
          : (L(n, "=" + Rn(s, r, !0)), ce(s.value || Bn, t), L(n, Rn(s, r))),
        o !== e.length - 1 && i.glueAttribute && L(n, i.glueAttribute));
    }
    i.afterAttribute && L(n, i.afterAttribute);
  }
}
function tb(e, t) {
  if (!e.value && e.children.length) return;
  let n = e.value || Bn,
    r = zg(n),
    { out: i, options: o } = t;
  if (r.length === 1) ((e.name || e.attributes) && Y(i, " "), ce(n, t));
  else {
    let s = [],
      a = 0;
    for (let l of r) {
      let u = rb(l);
      (s.push(u), u > a && (a = u));
    }
    i.level++;
    for (let l = 0; l < r.length; l++)
      (ye(i, !0),
        o.beforeTextLine && Y(i, o.beforeTextLine),
        ce(r[l], t),
        o.afterTextLine && (Y(i, " ".repeat(a - s[l])), Y(i, o.afterTextLine)));
    i.level--;
  }
}
function nb(e) {
  return e.name === "class" || e.name === "id";
}
function rb(e) {
  let t = 0;
  for (let n of e) t += typeof n == "string" ? n.length : n.name.length;
  return t;
}
function ib(e, t, n, r) {
  return !r.parent && t === 0 ? !1 : !qe(e);
}
function ob(e, t) {
  return eo(e, t, {
    beforeName: "%",
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: " ",
    afterTextLine: " |",
    booleanValue: "true",
    selfClose: "/",
  });
}
function sb(e, t) {
  return eo(e, t, {
    beforeAttribute: " ",
    glueAttribute: " ",
    beforeTextLine: "| ",
    selfClose: "/",
  });
}
function ab(e, t) {
  return eo(e, t, {
    beforeAttribute: "(",
    afterAttribute: ")",
    glueAttribute: ", ",
    beforeTextLine: "| ",
    selfClose: t.options["output.selfClosingStyle"] === "xml" ? "/" : "",
  });
}
function to(e, t) {
  let n;
  if (typeof e == "string") {
    let r = Object.assign({}, t);
    (t.options["jsx.enabled"] && (r.jsx = !0),
      t.options["markup.href"] && (r.href = !0),
      (e = su(e, r)),
      (n = t.text),
      (t.text = void 0));
  }
  return ((e = ag(e, t)), og(e, ub, t), (t.text = n ?? t.text), e);
}
function no(e, t) {
  return (lb[t.syntax] || Lu)(e, t);
}
function ub(e, t, n) {
  (hg(e, t, n),
    ng(e, n),
    wg(e, t, n),
    n.syntax === "xsl" && Cg(e),
    n.type === "markup" && Fg(e),
    n.options["bem.enabled"] && $g(e, t, n));
}
function db(e, t) {
  let n = t.match(cb);
  if (n) {
    let r = {},
      i = n[2] ? n[2].split("|").map(mb) : [];
    for (let o of i) for (let s of o) bb(s, r);
    return { type: Ce.Property, key: e, property: n[1], value: i, keywords: r, dependencies: [] };
  }
  return { type: Ce.Raw, key: e, value: t };
}
function pb(e) {
  e = e.slice().sort(hb);
  let t = [],
    n;
  for (let r of e.filter(gb)) {
    for (; t.length;) {
      if (
        ((n = t[t.length - 1]),
        r.property.startsWith(n.property) && r.property.charCodeAt(n.property.length) === 45)
      ) {
        (n.dependencies.push(r), t.push(r));
        break;
      }
      t.pop();
    }
    t.length || t.push(r);
  }
  return e;
}
function hb(e, t) {
  return e.key === t.key ? 0 : e.key < t.key ? -1 : 1;
}
function mb(e) {
  return pu(e.trim(), fb)[0].value;
}
function gb(e) {
  return e.type === Ce.Property;
}
function bb(e, t) {
  for (let n of e.value)
    if (n.type === "Literal") t[n.value] = n;
    else if (n.type === "FunctionCall") t[n.name] = n;
    else if (n.type === "Field") {
      let r = n.name.trim();
      r && (t[r] = { type: "Literal", value: r });
    }
}
function vb(e, t, n = !1) {
  if (((e = e.toLowerCase()), (t = t.toLowerCase()), e === t)) return 1;
  if (!e || !t || e.charCodeAt(0) !== t.charCodeAt(0)) return 0;
  let r = e.length,
    i = t.length;
  if (!n && r > i) return 0;
  let o = Math.min(r, i),
    s = Math.max(r, i),
    a = 1,
    l = 1,
    u = s,
    c = 0,
    f = 0,
    h = !1,
    p = !1;
  for (; a < r;) {
    for (c = e.charCodeAt(a), h = !1, p = !1; l < i;) {
      if (((f = t.charCodeAt(l)), c === f)) {
        ((h = !0), (u += s - (p ? a : l)));
        break;
      }
      ((p = f === 45), l++);
    }
    if (!h) {
      if (!n) return 0;
      break;
    }
    a++;
  }
  let k = a / s,
    x = s - o,
    w = Bl(s) - Bl(x);
  return (u * k) / w;
}
function Bl(e) {
  return (e * (e + 1)) / 2;
}
function zu(e, t) {
  return !e.r && !e.g && !e.b && !e.a ? "transparent" : e.a === 1 ? xb(e, t) : yb(e);
}
function xb(e, t) {
  let n = t && Li(e.r) && Li(e.g) && Li(e.b) ? wb : kb;
  return "#" + n(e.r) + n(e.g) + n(e.b);
}
function yb(e) {
  let t = [e.r, e.g, e.b];
  return (e.a !== 1 && t.push(Du(e.a, 8)), `${t.length === 3 ? "rgb" : "rgba"}(${t.join(", ")})`);
}
function Du(e, t = 4) {
  return e.toFixed(t).replace(/\.?0+$/, "");
}
function Li(e) {
  return !(e % 17);
}
function wb(e) {
  return (e >> 4).toString(16);
}
function kb(e) {
  return Sb(e.toString(16), 2);
}
function Sb(e, t) {
  for (; e.length < t;) e = "0" + e;
  return e;
}
function ro(e, t) {
  var n;
  let r = gu(t.options),
    i = t.options["output.format"];
  ((n = t.context) === null || n === void 0 ? void 0 : n.name) === _n.Section &&
    (e = e.filter((o) => o.snippet));
  for (let o = 0; o < e.length; o++) (i && o !== 0 && ye(r, !0), Tb(e[o], r, t));
  return r.value;
}
function Tb(e, t, n) {
  let r = n.options["stylesheet.json"];
  if (e.name) {
    let i = r ? Cb(e.name) : e.name;
    (L(t, i + n.options["stylesheet.between"]),
      e.value.length ? Eb(e, t, n) : Zi(t, 0, ""),
      r ? Y(t, ",") : (Ml(e, t, !0), Y(t, n.options["stylesheet.after"])));
  } else {
    for (let i of e.value) for (let o of i.value) Bu(o, t, n);
    Ml(e, t, e.value.length > 0);
  }
}
function Eb(e, t, n) {
  let r = n.options["stylesheet.json"],
    i = r ? Ab(e) : null;
  if (i && (!i.unit || i.unit === "px")) Y(t, String(i.value));
  else {
    let o = Nb(n);
    r && Y(t, o);
    for (let s = 0; s < e.value.length; s++) (s !== 0 && Y(t, ", "), Uu(e.value[s], t, n));
    r && Y(t, o);
  }
}
function Ml(e, t, n) {
  e.important && (n && Y(t, " "), Y(t, "!important"));
}
function Uu(e, t, n) {
  for (let r = 0, i = -1; r < e.value.length; r++) {
    let o = e.value[r];
    (r !== 0 && (o.type !== "Field" || o.start !== i) && Y(t, " "), Bu(o, t, n), (i = o.end));
  }
}
function Bu(e, t, n) {
  if (e.type === "ColorValue") Y(t, zu(e, n.options["stylesheet.shortHex"]));
  else if (e.type === "Literal" || e.type === "CustomProperty") L(t, e.value);
  else if (e.type === "NumberValue") L(t, Du(e.value, 4) + e.unit);
  else if (e.type === "StringValue") {
    let r = e.quote === "double" ? '"' : "'";
    L(t, r + e.value + r);
  } else if (e.type === "Field") Zi(t, e.index, e.name);
  else if (e.type === "FunctionCall") {
    Y(t, e.name + "(");
    for (let r = 0; r < e.arguments.length; r++) (r && Y(t, ", "), Uu(e.arguments[r], t, n));
    Y(t, ")");
  }
}
function Ab(e) {
  if (e.value.length === 1) {
    let t = e.value[0];
    if (t.value.length === 1 && t.value[0].type === "NumberValue") return t.value[0];
  }
}
function Cb(e) {
  return e.replace(/\-(\w)/g, (t, n) => n.toUpperCase());
}
function Nb(e) {
  return e.options["stylesheet.jsonDoubleQuotes"] ? '"' : "'";
}
function io(e, t) {
  var n;
  let r =
      ((n = t.cache) === null || n === void 0 ? void 0 : n.stylesheetSnippets) || Pb(t.snippets),
    i = [];
  (t.cache && (t.cache.stylesheetSnippets = r),
    typeof e == "string" && (e = pu(e, { value: Hu(t) })));
  let o = Fb(r, t);
  for (let s of e) {
    let a = Ib(s, o, t);
    a && i.push(a);
  }
  return i;
}
function Pb(e) {
  let t = [];
  for (let n of Object.keys(e)) t.push(db(n, e[n]));
  return pb(t);
}
function Ib(e, t, n) {
  if (!Ob(e, n)) {
    let r = n.options["stylesheet.fuzzySearchMinScore"];
    if (Hu(n)) {
      let i = n.context.name,
        o = t.find((s) => s.type === Ce.Property && s.property === i);
      (Mu(e, n, o, r), (e.snippet = o));
    } else if (e.name) {
      let i = Nn(e.name, t, r, !0);
      if (((e.snippet = i), i)) {
        let o = i.type === Ce.Property ? $b(e, i, n) : Rb(e, i);
        if (o) e = o;
        else if (n.options["stylesheet.strictMatch"]) return null;
      }
    }
  }
  return ((e.name || n.context) && jb(e, n), e);
}
function Ob(e, t) {
  let n = null,
    r = e.value.length === 1 ? e.value[0] : null;
  if (r && r.value.length === 1) {
    let i = r.value[0];
    i.type === "FunctionCall" && i.name === ql && (n = i);
  }
  return n || e.name === ql
    ? (n
        ? (n = Object.assign(Object.assign({}, n), { name: "linear-gradient" }))
        : (n = { type: "FunctionCall", name: "linear-gradient", arguments: [Ln(Me(0, ""))] }),
      t.context || (e.name = "background-image"),
      (e.value = [Ln(n)]),
      !0)
    : !1;
}
function $b(e, t, n) {
  let r = e.name,
    i = Lb(r, t.key);
  if (i) {
    if (e.value.length) return null;
    let o = Mi(i, n, t);
    if (!o) return null;
    e.value.push(Ln(o));
  }
  if (((e.name = t.property), e.value.length)) Mu(e, n, t);
  else if (t.value.length) {
    let o = t.value[0];
    e.value = t.value.length === 1 || o.some(qu) ? o : o.map((s) => Vu(s, n));
  }
  return e;
}
function Mu(e, t, n, r) {
  for (let i of e.value) {
    let o = [];
    for (let s of i.value)
      if (s.type === "Literal") o.push(Mi(s.value, t, n, r) || s);
      else if (s.type === "FunctionCall") {
        let a = Mi(s.name, t, n, r);
        a && a.type === "FunctionCall"
          ? o.push(
              Object.assign(Object.assign({}, a), {
                arguments: s.arguments.concat(a.arguments.slice(s.arguments.length)),
              }),
            )
          : o.push(s);
      } else o.push(s);
    i.value = o;
  }
}
function Rb(e, t) {
  let n = 0,
    r,
    i = /\$\{(\d+)(:[^}]+)?\}/g,
    o = e.value[0],
    s = [];
  for (; (r = i.exec(t.value));)
    (n !== r.index && s.push(ut(t.value.slice(n, r.index))),
      (n = r.index + r[0].length),
      o && o.value.length
        ? s.push(o.value.shift())
        : s.push(Me(Number(r[1]), r[2] ? r[2].slice(1) : "")));
  let a = t.value.slice(n);
  return (a && s.push(ut(a)), (e.name = void 0), (e.value = [Ln(...s)]), e);
}
function Nn(e, t, n = 0, r = !1) {
  let i = null,
    o = 0;
  for (let s of t) {
    let a = vb(e, _b(s), r);
    if (a === 1) return s;
    a && a >= o && ((o = a), (i = s));
  }
  return o >= n ? i : null;
}
function _b(e) {
  return typeof e == "string" ? e : e.key;
}
function Lb(e, t) {
  for (let n = 0, r = 0; n < e.length; n++) {
    if (((r = t.indexOf(e[n], r)), r === -1)) return e.slice(n);
    r++;
  }
  return "";
}
function Mi(e, t, n, r) {
  let i;
  if (n) {
    if ((i = Nn(e, Object.keys(n.keywords), r))) return n.keywords[i];
    for (let o of n.dependencies) if ((i = Nn(e, Object.keys(o.keywords), r))) return o.keywords[i];
  }
  return (i = Nn(e, t.options["stylesheet.keywords"], r)) ? ut(i) : null;
}
function jb(e, t) {
  let n = t.options["stylesheet.unitAliases"],
    r = t.options["stylesheet.unitless"];
  for (let i of e.value)
    for (let o of i.value)
      o.type === "NumberValue" &&
        (o.unit
          ? (o.unit = n[o.unit] || o.unit)
          : o.value !== 0 &&
            !r.includes(e.name) &&
            (o.unit = o.rawValue.includes(".")
              ? t.options["stylesheet.floatUnit"]
              : t.options["stylesheet.intUnit"]));
}
function Ln(...e) {
  return { type: "CSSValue", value: e };
}
function ut(e) {
  return { type: "Literal", value: e };
}
function Me(e, t) {
  return { type: "Field", index: e, name: t };
}
function qu(e) {
  for (let t of e.value)
    if (t.type === "Field" || (t.type === "FunctionCall" && t.arguments.some(qu))) return !0;
  return !1;
}
function Vu(e, t, n = { index: 1 }) {
  let r = [];
  for (let i of e.value)
    switch (i.type) {
      case "ColorValue":
        r.push(Me(n.index++, zu(i, t.options["stylesheet.shortHex"])));
        break;
      case "Literal":
        r.push(Me(n.index++, i.value));
        break;
      case "NumberValue":
        r.push(Me(n.index++, `${i.value}${i.unit}`));
        break;
      case "StringValue":
        let o = i.quote === "single" ? "'" : '"';
        r.push(Me(n.index++, o + i.value + o));
        break;
      case "FunctionCall":
        r.push(Me(n.index++, i.name), ut("("));
        for (let s = 0, a = i.arguments.length; s < a; s++)
          ((r = r.concat(Vu(i.arguments[s], t, n).value)), s !== a - 1 && r.push(ut(", ")));
        r.push(ut(")"));
        break;
      default:
        r.push(i);
    }
  return Object.assign(Object.assign({}, e), { value: r });
}
function Hu(e) {
  return e.context ? e.context.name === _n.Value || !e.context.name.startsWith("@@") : !1;
}
function Fb(e, t) {
  if (t.context) {
    if (t.context.name === _n.Section) return e.filter((n) => n.type === Ce.Raw);
    if (t.context.name === _n.Property) return e.filter((n) => n.type === Ce.Property);
  }
  return e;
}
function Cn(e) {
  let t = {};
  return (
    Object.keys(e).forEach((n) => {
      for (let r of n.split("|")) t[r] = e[n];
    }),
    t
  );
}
function Bt(e = {}, t = {}) {
  let n = e.type || "markup",
    r = e.syntax || qb[n];
  return Object.assign(Object.assign(Object.assign({}, Wu), e), {
    type: n,
    syntax: r,
    variables: ji(n, r, "variables", e, t),
    snippets: ji(n, r, "snippets", e, t),
    options: ji(n, r, "options", e, t),
  });
}
function ji(e, t, n, r, i = {}) {
  let o = Vl[e],
    s = i[e],
    a = Vl[t],
    l = i[t];
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(Object.assign(Object.assign({}, Wu[n]), o && o[n]), a && a[n]),
        s && s[n],
      ),
      l && l[n],
    ),
    r[n],
  );
}
function Gu(e, t = 0) {
  return { text: e, start: t, pos: e.length };
}
function Ne(e) {
  return e.pos === e.start;
}
function Dt(e, t = 0) {
  return e.text.charCodeAt(e.pos - 1 + t);
}
function Hl(e) {
  if (!Ne(e)) return e.text.charCodeAt(--e.pos);
}
function ae(e, t) {
  if (Ne(e)) return !1;
  let n = typeof t == "function" ? t(Dt(e)) : t === Dt(e);
  return (n && e.pos--, !!n);
}
function Qu(e, t) {
  let n = e.pos;
  for (; ae(e, t););
  return e.pos < n;
}
function oo(e) {
  return e === Ut.SingleQuote || e === Ut.DoubleQuote;
}
function Hb(e) {
  let t = e.pos,
    n = Hl(e);
  if (oo(n)) {
    for (; !Ne(e);) if (Hl(e) === n && Dt(e) !== Ut.Escape) return !0;
  }
  return ((e.pos = t), !1);
}
function Wb(e) {
  let t = e.pos;
  if (!ae(e, re.AngleRight)) return !1;
  let n = !1;
  for (ae(e, re.Slash); !Ne(e);) {
    if ((Qu(e, qi), jn(e))) {
      if (ae(e, re.Slash)) {
        n = ae(e, re.AngleLeft);
        break;
      } else if (ae(e, re.AngleLeft)) {
        n = !0;
        break;
      } else {
        if (ae(e, qi)) continue;
        if (ae(e, re.Equals)) {
          if (jn(e)) continue;
          break;
        } else if (Xu(e)) {
          n = !0;
          break;
        }
      }
      break;
    }
    if (!Gb(e)) break;
  }
  return ((e.pos = t), n);
}
function Gb(e) {
  return Qb(e) || Xu(e);
}
function Qb(e) {
  let t = e.pos;
  return Hb(e) && ae(e, re.Equals) && jn(e) ? !0 : ((e.pos = t), !1);
}
function Xu(e) {
  let t = e.pos,
    n = [];
  for (; !Ne(e);) {
    let r = Dt(e);
    if (ev(r)) n.push(r);
    else if (Kb(r)) {
      if (n.pop() !== Ju[r]) break;
    } else if (!Zb(r)) break;
    e.pos--;
  }
  return t !== e.pos && ae(e, re.Equals) && jn(e) ? !0 : ((e.pos = t), !1);
}
function jn(e) {
  return Qu(e, Jb);
}
function Jb(e) {
  return e === re.Colon || e === re.Dash || Xb(e) || Yb(e);
}
function Xb(e) {
  return ((e &= -33), e >= 65 && e <= 90);
}
function Yb(e) {
  return e > 47 && e < 58;
}
function qi(e) {
  return e === re.Space || e === re.Tab;
}
function Zb(e) {
  return !isNaN(e) && e !== re.Equals && !qi(e) && !oo(e);
}
function Kb(e) {
  return e === _.CurlyL || e === _.RoundL || e === _.SquareL;
}
function ev(e) {
  return e === _.CurlyR || e === _.RoundR || e === _.SquareR;
}
function so(e, t = e.length, n = {}) {
  let r = Object.assign(Object.assign({}, nv), n);
  ((t = Math.min(e.length, Math.max(0, t ?? e.length))), r.lookAhead && (t = rv(e, t, r)));
  let i,
    o = iv(e, t, r.prefix || "");
  if (o === -1) return;
  let s = Gu(e, o);
  s.pos = t;
  let a = [];
  for (; !Ne(s);) {
    if (((i = Dt(s)), a.includes(_.CurlyR))) {
      if (i === _.CurlyR) {
        (a.push(i), s.pos--);
        continue;
      }
      if (i !== _.CurlyL) {
        s.pos--;
        continue;
      }
    }
    if (Zu(i, r.type)) a.push(i);
    else if (av(i, r.type)) {
      if (a.pop() !== Ju[i]) break;
    } else if (a.includes(_.SquareR) || a.includes(_.CurlyR)) {
      s.pos--;
      continue;
    } else if (Wb(s) || !sv(i)) break;
    s.pos--;
  }
  if (!a.length && s.pos !== t) {
    let l = e.slice(s.pos, t).replace(/^[*+>^]+/, "");
    return {
      abbreviation: l,
      location: t - l.length,
      start: n.prefix ? o - n.prefix.length : t - l.length,
      end: t,
    };
  }
}
function rv(e, t, n) {
  for (oo(e.charCodeAt(t)) && t++; Zu(e.charCodeAt(t), n.type);) t++;
  return t;
}
function iv(e, t, n) {
  if (!n) return 0;
  let r = Gu(e),
    i = n.split("").map(Yu);
  r.pos = t;
  let o;
  for (; !Ne(r);)
    if (!(Wl(r, _.SquareR, _.SquareL) || Wl(r, _.CurlyR, _.CurlyL))) {
      if (((o = r.pos), ov(r, i))) return o;
      r.pos--;
    }
  return -1;
}
function Wl(e, t, n) {
  let r = e.pos;
  if (ae(e, t))
    for (; !Ne(e);) {
      if (ae(e, n)) return !0;
      e.pos--;
    }
  return ((e.pos = r), !1);
}
function ov(e, t) {
  let n = e.pos,
    r = !1;
  for (let i = t.length - 1; i >= 0 && !Ne(e) && ae(e, t[i]); i--) r = i === 0;
  return (r || (e.pos = n), r);
}
function sv(e) {
  return (e > 64 && e < 91) || (e > 96 && e < 123) || (e > 47 && e < 58) || tv.includes(e);
}
function av(e, t) {
  return e === _.RoundL || (t === "markup" && (e === _.SquareL || e === _.CurlyL));
}
function Zu(e, t) {
  return e === _.RoundR || (t === "markup" && (e === _.SquareR || e === _.CurlyR));
}
function Mt(e, t) {
  let n = Bt(t);
  return n.type === "stylesheet" ? uv(e, n) : lv(e, n);
}
function lv(e, t) {
  return no(to(e, t), t);
}
function uv(e, t) {
  return ro(io(e, t), t);
}
var Pn,
  Ft,
  N,
  xm,
  Al,
  ym,
  wm,
  ue,
  $,
  Ui,
  Bi,
  pg,
  bg,
  vg,
  xg,
  Ol,
  yg,
  ku,
  Su,
  Ig,
  Og,
  Bn,
  Ve,
  Vg,
  Hg,
  lb,
  Ce,
  cb,
  fb,
  _n,
  ql,
  zb,
  Db,
  Ub,
  Bb,
  Mb,
  qb,
  Vb,
  Wu,
  Vl,
  Ut,
  _,
  Ju,
  re,
  Yu,
  tv,
  nv,
  Ku = W(() => {
    ((Pn = class e {
      constructor(t, n, r) {
        (r == null && typeof t == "string" && (r = t.length),
          (this.string = t),
          (this.pos = this.start = n || 0),
          (this.end = r || 0));
      }
      eof() {
        return this.pos >= this.end;
      }
      limit(t, n) {
        return new e(this.string, t, n);
      }
      peek() {
        return this.string.charCodeAt(this.pos);
      }
      next() {
        if (this.pos < this.string.length) return this.string.charCodeAt(this.pos++);
      }
      eat(t) {
        let n = this.peek(),
          r = typeof t == "function" ? t(n) : n === t;
        return (r && this.next(), r);
      }
      eatWhile(t) {
        let n = this.pos;
        for (; !this.eof() && this.eat(t););
        return this.pos !== n;
      }
      backUp(t) {
        this.pos -= t || 1;
      }
      current() {
        return this.substring(this.start, this.pos);
      }
      substring(t, n) {
        return this.string.slice(t, n);
      }
      error(t, n = this.pos) {
        return new Ft(`${t} at ${n + 1}`, n, this.string);
      }
    }),
      (Ft = class extends Error {
        constructor(t, n, r) {
          (super(t), (this.pos = n), (this.string = r));
        }
      }));
    (function (e) {
      ((e[(e.CurlyBracketOpen = 123)] = "CurlyBracketOpen"),
        (e[(e.CurlyBracketClose = 125)] = "CurlyBracketClose"),
        (e[(e.Escape = 92)] = "Escape"),
        (e[(e.Equals = 61)] = "Equals"),
        (e[(e.SquareBracketOpen = 91)] = "SquareBracketOpen"),
        (e[(e.SquareBracketClose = 93)] = "SquareBracketClose"),
        (e[(e.Asterisk = 42)] = "Asterisk"),
        (e[(e.Hash = 35)] = "Hash"),
        (e[(e.Dollar = 36)] = "Dollar"),
        (e[(e.Dash = 45)] = "Dash"),
        (e[(e.Dot = 46)] = "Dot"),
        (e[(e.Slash = 47)] = "Slash"),
        (e[(e.Colon = 58)] = "Colon"),
        (e[(e.Excl = 33)] = "Excl"),
        (e[(e.At = 64)] = "At"),
        (e[(e.Underscore = 95)] = "Underscore"),
        (e[(e.RoundBracketOpen = 40)] = "RoundBracketOpen"),
        (e[(e.RoundBracketClose = 41)] = "RoundBracketClose"),
        (e[(e.Sibling = 43)] = "Sibling"),
        (e[(e.Child = 62)] = "Child"),
        (e[(e.Climb = 94)] = "Climb"),
        (e[(e.SingleQuote = 39)] = "SingleQuote"),
        (e[(e.DoubleQuote = 34)] = "DoubleQuote"));
    })(N || (N = {}));
    ((xm = { child: ">", class: ".", climb: "^", id: "#", equal: "=", close: "/", sibling: "+" }),
      (Al = {
        Literal(e) {
          return e.value;
        },
        Quote(e) {
          return e.single ? "'" : '"';
        },
        Bracket(e) {
          return e.context === "attribute"
            ? e.open
              ? "["
              : "]"
            : e.context === "expression"
              ? e.open
                ? "{"
                : "}"
              : e.open
                ? "("
                : "}";
        },
        Operator(e) {
          return xm[e.operator];
        },
        Field(e, t) {
          return e.index != null
            ? e.name
              ? `\${${e.index}:${e.name}}`
              : `\${${e.index}`
            : e.name
              ? t.getVariable(e.name)
              : "";
        },
        RepeaterPlaceholder(e, t) {
          let n;
          for (let r = t.repeaters.length - 1; r >= 0; r--)
            if (t.repeaters[r].implicit) {
              n = t.repeaters[r];
              break;
            }
          return ((t.inserted = !0), t.getText(n && n.value));
        },
        RepeaterNumber(e, t) {
          let n = 1,
            r = t.repeaters.length - 1,
            i = t.repeaters[r];
          if (
            i &&
            ((n = e.reverse ? e.base + i.count - i.value - 1 : e.base + i.value), e.parent)
          ) {
            let s = Math.max(0, r - e.parent);
            if (s !== r) {
              let a = t.repeaters[s];
              n += i.count * a.value;
            }
          }
          let o = String(n);
          for (; o.length < e.size;) o = "0" + o;
          return o;
        },
        WhiteSpace(e) {
          return e.value;
        },
      }));
    ((ym = /^((https?:|ftp:|file:)?\/\/|(www|ftp)\.)[^ ]*$/),
      (wm = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}$/));
    (function (e) {
      ((e.Sibling = "+"),
        (e.Important = "!"),
        (e.ArgumentDelimiter = ","),
        (e.ValueDelimiter = "-"),
        (e.PropertyDelimiter = ":"));
    })(ue || (ue = {}));
    (function (e) {
      ((e[(e.Hash = 35)] = "Hash"),
        (e[(e.Dollar = 36)] = "Dollar"),
        (e[(e.Dash = 45)] = "Dash"),
        (e[(e.Dot = 46)] = "Dot"),
        (e[(e.Colon = 58)] = "Colon"),
        (e[(e.Comma = 44)] = "Comma"),
        (e[(e.Excl = 33)] = "Excl"),
        (e[(e.At = 64)] = "At"),
        (e[(e.Percent = 37)] = "Percent"),
        (e[(e.Underscore = 95)] = "Underscore"),
        (e[(e.RoundBracketOpen = 40)] = "RoundBracketOpen"),
        (e[(e.RoundBracketClose = 41)] = "RoundBracketClose"),
        (e[(e.CurlyBracketOpen = 123)] = "CurlyBracketOpen"),
        (e[(e.CurlyBracketClose = 125)] = "CurlyBracketClose"),
        (e[(e.Sibling = 43)] = "Sibling"),
        (e[(e.SingleQuote = 39)] = "SingleQuote"),
        (e[(e.DoubleQuote = 34)] = "DoubleQuote"),
        (e[(e.Transparent = 116)] = "Transparent"),
        (e[(e.Slash = 47)] = "Slash"));
    })($ || ($ = {}));
    ((Ui = "{"), (Bi = "}"));
    pg = {
      p: "span",
      ul: "li",
      ol: "li",
      table: "tr",
      tr: "td",
      tbody: "tr",
      thead: "tr",
      tfoot: "tr",
      colgroup: "col",
      select: "option",
      optgroup: "option",
      audio: "source",
      video: "source",
      object: "param",
      map: "area",
    };
    ((bg = {
      common: ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit"],
      words: [
        "exercitationem",
        "perferendis",
        "perspiciatis",
        "laborum",
        "eveniet",
        "sunt",
        "iure",
        "nam",
        "nobis",
        "eum",
        "cum",
        "officiis",
        "excepturi",
        "odio",
        "consectetur",
        "quasi",
        "aut",
        "quisquam",
        "vel",
        "eligendi",
        "itaque",
        "non",
        "odit",
        "tempore",
        "quaerat",
        "dignissimos",
        "facilis",
        "neque",
        "nihil",
        "expedita",
        "vitae",
        "vero",
        "ipsum",
        "nisi",
        "animi",
        "cumque",
        "pariatur",
        "velit",
        "modi",
        "natus",
        "iusto",
        "eaque",
        "sequi",
        "illo",
        "sed",
        "ex",
        "et",
        "voluptatibus",
        "tempora",
        "veritatis",
        "ratione",
        "assumenda",
        "incidunt",
        "nostrum",
        "placeat",
        "aliquid",
        "fuga",
        "provident",
        "praesentium",
        "rem",
        "necessitatibus",
        "suscipit",
        "adipisci",
        "quidem",
        "possimus",
        "voluptas",
        "debitis",
        "sint",
        "accusantium",
        "unde",
        "sapiente",
        "voluptate",
        "qui",
        "aspernatur",
        "laudantium",
        "soluta",
        "amet",
        "quo",
        "aliquam",
        "saepe",
        "culpa",
        "libero",
        "ipsa",
        "dicta",
        "reiciendis",
        "nesciunt",
        "doloribus",
        "autem",
        "impedit",
        "minima",
        "maiores",
        "repudiandae",
        "ipsam",
        "obcaecati",
        "ullam",
        "enim",
        "totam",
        "delectus",
        "ducimus",
        "quis",
        "voluptates",
        "dolores",
        "molestiae",
        "harum",
        "dolorem",
        "quia",
        "voluptatem",
        "molestias",
        "magni",
        "distinctio",
        "omnis",
        "illum",
        "dolorum",
        "voluptatum",
        "ea",
        "quas",
        "quam",
        "corporis",
        "quae",
        "blanditiis",
        "atque",
        "deserunt",
        "laboriosam",
        "earum",
        "consequuntur",
        "hic",
        "cupiditate",
        "quibusdam",
        "accusamus",
        "ut",
        "rerum",
        "error",
        "minus",
        "eius",
        "ab",
        "ad",
        "nemo",
        "fugit",
        "officia",
        "at",
        "in",
        "id",
        "quos",
        "reprehenderit",
        "numquam",
        "iste",
        "fugiat",
        "sit",
        "inventore",
        "beatae",
        "repellendus",
        "magnam",
        "recusandae",
        "quod",
        "explicabo",
        "doloremque",
        "aperiam",
        "consequatur",
        "asperiores",
        "commodi",
        "optio",
        "dolor",
        "labore",
        "temporibus",
        "repellat",
        "veniam",
        "architecto",
        "est",
        "esse",
        "mollitia",
        "nulla",
        "a",
        "similique",
        "eos",
        "alias",
        "dolore",
        "tenetur",
        "deleniti",
        "porro",
        "facere",
        "maxime",
        "corrupti",
      ],
    }),
      (vg = {
        common: [
          "\u0434\u0430\u043B\u0435\u043A\u043E-\u0434\u0430\u043B\u0435\u043A\u043E",
          "\u0437\u0430",
          "\u0441\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u043C\u0438",
          "\u0433\u043E\u0440\u0430\u043C\u0438",
          "\u0432 \u0441\u0442\u0440\u0430\u043D\u0435",
          "\u0433\u043B\u0430\u0441\u043D\u044B\u0445",
          "\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B\u0445",
          "\u0436\u0438\u0432\u0443\u0442",
          "\u0440\u044B\u0431\u043D\u044B\u0435",
          "\u0442\u0435\u043A\u0441\u0442\u044B",
        ],
        words: [
          "\u0432\u0434\u0430\u043B\u0438",
          "\u043E\u0442 \u0432\u0441\u0435\u0445",
          "\u043E\u043D\u0438",
          "\u0431\u0443\u043A\u0432\u0435\u043D\u043D\u044B\u0445",
          "\u0434\u043E\u043C\u0430\u0445",
          "\u043D\u0430 \u0431\u0435\u0440\u0435\u0433\u0443",
          "\u0441\u0435\u043C\u0430\u043D\u0442\u0438\u043A\u0430",
          "\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E",
          "\u044F\u0437\u044B\u043A\u043E\u0432\u043E\u0433\u043E",
          "\u043E\u043A\u0435\u0430\u043D\u0430",
          "\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",
          "\u0440\u0443\u0447\u0435\u0435\u043A",
          "\u0434\u0430\u043B\u044C",
          "\u0436\u0443\u0440\u0447\u0438\u0442",
          "\u043F\u043E \u0432\u0441\u0435\u0439",
          "\u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0438\u0432\u0430\u0435\u0442",
          "\u0435\u0435",
          "\u0432\u0441\u0435\u043C\u0438",
          "\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C\u0438",
          "\u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438",
          "\u044D\u0442\u0430",
          "\u043F\u0430\u0440\u0430\u0434\u0438\u0433\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F",
          "\u0441\u0442\u0440\u0430\u043D\u0430",
          "\u043A\u043E\u0442\u043E\u0440\u043E\u0439",
          "\u0436\u0430\u0440\u0435\u043D\u043D\u044B\u0435",
          "\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
          "\u0437\u0430\u043B\u0435\u0442\u0430\u044E\u0442",
          "\u043F\u0440\u044F\u043C\u043E",
          "\u0440\u043E\u0442",
          "\u0434\u0430\u0436\u0435",
          "\u0432\u0441\u0435\u043C\u043E\u0433\u0443\u0449\u0430\u044F",
          "\u043F\u0443\u043D\u043A\u0442\u0443\u0430\u0446\u0438\u044F",
          "\u043D\u0435",
          "\u0438\u043C\u0435\u0435\u0442",
          "\u0432\u043B\u0430\u0441\u0442\u0438",
          "\u043D\u0430\u0434",
          "\u0440\u044B\u0431\u043D\u044B\u043C\u0438",
          "\u0442\u0435\u043A\u0441\u0442\u0430\u043C\u0438",
          "\u0432\u0435\u0434\u0443\u0449\u0438\u043C\u0438",
          "\u0431\u0435\u0437\u043E\u0440\u0444\u043E\u0433\u0440\u0430\u0444\u0438\u0447\u043D\u044B\u0439",
          "\u043E\u0431\u0440\u0430\u0437",
          "\u0436\u0438\u0437\u043D\u0438",
          "\u043E\u0434\u043D\u0430\u0436\u0434\u044B",
          "\u043E\u0434\u043D\u0430",
          "\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0430\u044F",
          "\u0441\u0442\u0440\u043E\u0447\u043A\u0430",
          "\u0440\u044B\u0431\u043D\u043E\u0433\u043E",
          "\u0442\u0435\u043A\u0441\u0442\u0430",
          "\u0438\u043C\u0435\u043D\u0438",
          "lorem",
          "ipsum",
          "\u0440\u0435\u0448\u0438\u043B\u0430",
          "\u0432\u044B\u0439\u0442\u0438",
          "\u0431\u043E\u043B\u044C\u0448\u043E\u0439",
          "\u043C\u0438\u0440",
          "\u0433\u0440\u0430\u043C\u043C\u0430\u0442\u0438\u043A\u0438",
          "\u0432\u0435\u043B\u0438\u043A\u0438\u0439",
          "\u043E\u043A\u0441\u043C\u043E\u043A\u0441",
          "\u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0436\u0434\u0430\u043B",
          "\u043E",
          "\u0437\u043B\u044B\u0445",
          "\u0437\u0430\u043F\u044F\u0442\u044B\u0445",
          "\u0434\u0438\u043A\u0438\u0445",
          "\u0437\u043D\u0430\u043A\u0430\u0445",
          "\u0432\u043E\u043F\u0440\u043E\u0441\u0430",
          "\u043A\u043E\u0432\u0430\u0440\u043D\u044B\u0445",
          "\u0442\u043E\u0447\u043A\u0430\u0445",
          "\u0437\u0430\u043F\u044F\u0442\u043E\u0439",
          "\u043D\u043E",
          "\u0442\u0435\u043A\u0441\u0442",
          "\u0434\u0430\u043B",
          "\u0441\u0431\u0438\u0442\u044C",
          "\u0441\u0435\u0431\u044F",
          "\u0442\u043E\u043B\u043A\u0443",
          "\u043E\u043D",
          "\u0441\u043E\u0431\u0440\u0430\u043B",
          "\u0441\u0435\u043C\u044C",
          "\u0441\u0432\u043E\u0438\u0445",
          "\u0437\u0430\u0433\u043B\u0430\u0432\u043D\u044B\u0445",
          "\u0431\u0443\u043A\u0432",
          "\u043F\u043E\u0434\u043F\u043E\u044F\u0441\u0430\u043B",
          "\u0438\u043D\u0438\u0446\u0438\u0430\u043B",
          "\u0437\u0430",
          "\u043F\u043E\u044F\u0441",
          "\u043F\u0443\u0441\u0442\u0438\u043B\u0441\u044F",
          "\u0434\u043E\u0440\u043E\u0433\u0443",
          "\u0432\u0437\u043E\u0431\u0440\u0430\u0432\u0448\u0438\u0441\u044C",
          "\u043F\u0435\u0440\u0432\u0443\u044E",
          "\u0432\u0435\u0440\u0448\u0438\u043D\u0443",
          "\u043A\u0443\u0440\u0441\u0438\u0432\u043D\u044B\u0445",
          "\u0433\u043E\u0440",
          "\u0431\u0440\u043E\u0441\u0438\u043B",
          "\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439",
          "\u0432\u0437\u0433\u043B\u044F\u0434",
          "\u043D\u0430\u0437\u0430\u0434",
          "\u0441\u0438\u043B\u0443\u044D\u0442",
          "\u0441\u0432\u043E\u0435\u0433\u043E",
          "\u0440\u043E\u0434\u043D\u043E\u0433\u043E",
          "\u0433\u043E\u0440\u043E\u0434\u0430",
          "\u0431\u0443\u043A\u0432\u043E\u0433\u0440\u0430\u0434",
          "\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          "\u0434\u0435\u0440\u0435\u0432\u043D\u0438",
          "\u0430\u043B\u0444\u0430\u0432\u0438\u0442",
          "\u043F\u043E\u0434\u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
          "\u0441\u0432\u043E\u0435\u0433\u043E",
          "\u043F\u0435\u0440\u0435\u0443\u043B\u043A\u0430",
          "\u0433\u0440\u0443\u0441\u0442\u043D\u044B\u0439",
          "\u0440\u0435\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439",
          "\u0432\u043E\u043F\u0440\u043E\u0441",
          "\u0441\u043A\u0430\u0442\u0438\u043B\u0441\u044F",
          "\u0435\u0433\u043E",
          "\u0449\u0435\u043A\u0435",
          "\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043B",
          "\u0441\u0432\u043E\u0439",
          "\u043F\u0443\u0442\u044C",
          "\u0434\u043E\u0440\u043E\u0433\u0435",
          "\u0432\u0441\u0442\u0440\u0435\u0442\u0438\u043B",
          "\u0440\u0443\u043A\u043E\u043F\u0438\u0441\u044C",
          "\u043E\u043D\u0430",
          "\u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0434\u0438\u043B\u0430",
          "\u043C\u043E\u0435\u0439",
          "\u0432\u0441\u0435",
          "\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F",
          "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E",
          "\u0440\u0430\u0437",
          "\u0435\u0434\u0438\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435",
          "\u0447\u0442\u043E",
          "\u043C\u0435\u043D\u044F",
          "\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",
          "\u044D\u0442\u043E",
          "\u043F\u0440\u0438\u0441\u0442\u0430\u0432\u043A\u0430",
          "\u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0441\u044F",
          "\u0442\u044B",
          "\u043B\u0443\u0447\u0448\u0435",
          "\u0441\u0432\u043E\u044E",
          "\u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0443\u044E",
          "\u0441\u0442\u0440\u0430\u043D\u0443",
          "\u043F\u043E\u0441\u043B\u0443\u0448\u0430\u0432\u0448\u0438\u0441\u044C",
          "\u0440\u0443\u043A\u043E\u043F\u0438\u0441\u0438",
          "\u043D\u0430\u0448",
          "\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u043B",
          "\u0441\u0432\u043E\u0439",
          "\u043F\u0443\u0442\u044C",
          "\u0432\u0441\u043A\u043E\u0440\u0435",
          "\u0435\u043C\u0443",
          "\u043F\u043E\u0432\u0441\u0442\u0440\u0435\u0447\u0430\u043B\u0441\u044F",
          "\u043A\u043E\u0432\u0430\u0440\u043D\u044B\u0439",
          "\u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u044C",
          "\u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0445",
          "\u0442\u0435\u043A\u0441\u0442\u043E\u0432",
          "\u043D\u0430\u043F\u043E\u0438\u0432\u0448\u0438\u0439",
          "\u044F\u0437\u044B\u043A\u043E\u043C",
          "\u0440\u0435\u0447\u044C\u044E",
          "\u0437\u0430\u043C\u0430\u043D\u0438\u0432\u0448\u0438\u0439",
          "\u0441\u0432\u043E\u0435",
          "\u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E",
          "\u043A\u043E\u0442\u043E\u0440\u043E\u0435",
          "\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043B\u043E",
          "\u0441\u043D\u043E\u0432\u0430",
          "\u0441\u043D\u043E\u0432\u0430",
          "\u0441\u0432\u043E\u0438\u0445",
          "\u043F\u0440\u043E\u0435\u043A\u0442\u0430\u0445",
          "\u0435\u0441\u043B\u0438",
          "\u043F\u0435\u0440\u0435\u043F\u0438\u0441\u0430\u043B\u0438",
          "\u0442\u043E",
          "\u0436\u0438\u0432\u0435\u0442",
          "\u0442\u0430\u043C",
          "\u0434\u043E",
          "\u0441\u0438\u0445",
          "\u043F\u043E\u0440",
        ],
      }),
      (xg = {
        common: ["mujer", "uno", "dolor", "m\xE1s", "de", "poder", "mismo", "si"],
        words: [
          "ejercicio",
          "preferencia",
          "perspicacia",
          "laboral",
          "pa\xF1o",
          "suntuoso",
          "molde",
          "namibia",
          "planeador",
          "mirar",
          "dem\xE1s",
          "oficinista",
          "excepci\xF3n",
          "odio",
          "consecuencia",
          "casi",
          "auto",
          "chicharra",
          "velo",
          "elixir",
          "ataque",
          "no",
          "odio",
          "temporal",
          "cu\xF3rum",
          "dign\xEDsimo",
          "facilismo",
          "letra",
          "nihilista",
          "expedici\xF3n",
          "alma",
          "alveolar",
          "aparte",
          "le\xF3n",
          "animal",
          "como",
          "paria",
          "belleza",
          "modo",
          "natividad",
          "justo",
          "ataque",
          "s\xE9quito",
          "pillo",
          "sed",
          "ex",
          "y",
          "voluminoso",
          "temporalidad",
          "verdades",
          "racional",
          "asunci\xF3n",
          "incidente",
          "marejada",
          "placenta",
          "amanecer",
          "fuga",
          "previsor",
          "presentaci\xF3n",
          "lejos",
          "necesariamente",
          "sospechoso",
          "adiposidad",
          "quind\xEDo",
          "p\xF3cima",
          "voluble",
          "d\xE9bito",
          "sinti\xF3",
          "accesorio",
          "falda",
          "sapiencia",
          "volutas",
          "queso",
          "permacultura",
          "laudo",
          "soluciones",
          "entero",
          "pan",
          "litro",
          "tonelada",
          "culpa",
          "libertario",
          "mosca",
          "dictado",
          "reincidente",
          "nascimiento",
          "dolor",
          "escolar",
          "impedimento",
          "m\xEDnima",
          "mayores",
          "repugnante",
          "dulce",
          "obcecado",
          "monta\xF1a",
          "enigma",
          "total",
          "delet\xE9reo",
          "d\xE9cima",
          "c\xE1bala",
          "fotograf\xEDa",
          "dolores",
          "molesto",
          "olvido",
          "paciencia",
          "resiliencia",
          "voluntad",
          "molestias",
          "magn\xEDfico",
          "distinci\xF3n",
          "ovni",
          "marejada",
          "cerro",
          "torre",
          "y",
          "abogada",
          "manantial",
          "corporal",
          "agua",
          "crep\xFAsculo",
          "ataque",
          "desierto",
          "laboriosamente",
          "angustia",
          "afortunado",
          "alma",
          "encefalograma",
          "materialidad",
          "cosas",
          "o",
          "renuncia",
          "error",
          "menos",
          "conejo",
          "abad\xEDa",
          "analfabeto",
          "remo",
          "fugacidad",
          "oficio",
          "en",
          "alm\xE1cigo",
          "vos",
          "pan",
          "represi\xF3n",
          "n\xFAmeros",
          "triste",
          "refugiado",
          "trote",
          "inventor",
          "corchea",
          "repelente",
          "magma",
          "recusado",
          "patr\xF3n",
          "expl\xEDcito",
          "paloma",
          "s\xEDndrome",
          "inmune",
          "autoinmune",
          "comodidad",
          "ley",
          "vietnamita",
          "demonio",
          "tasmania",
          "repeler",
          "ap\xE9ndice",
          "arquitecto",
          "columna",
          "yugo",
          "computador",
          "mula",
          "a",
          "prop\xF3sito",
          "fantas\xEDa",
          "alias",
          "rayo",
          "tenedor",
          "deleznable",
          "ventana",
          "cara",
          "anemia",
          "corrupto",
        ],
      }),
      (Ol = { ru: vg, sp: xg, latin: bg }),
      (yg = /^lorem([a-z]*)(\d*)(-\d*)?$/i));
    ((ku = /^(-+)([a-z0-9]+[a-z0-9-]*)/i),
      (Su = /^(_+)([a-z0-9]+[a-z0-9-_]*)/i),
      (Ig = (e) => /^[a-z]\-/i.test(e)),
      (Og = (e) => /^[a-z]/i.test(e)));
    Bn = [{ type: "Field", index: 0, name: "" }];
    (function (e) {
      ((e[(e.Start = 91)] = "Start"),
        (e[(e.End = 93)] = "End"),
        (e[(e.Underscore = 95)] = "Underscore"),
        (e[(e.Dash = 45)] = "Dash"));
    })(Ve || (Ve = {}));
    ((Vg = /^<([\w\-:]+)[\s>]/),
      (Hg = new Set([
        "for",
        "while",
        "of",
        "async",
        "await",
        "const",
        "let",
        "var",
        "continue",
        "break",
        "debugger",
        "do",
        "export",
        "import",
        "in",
        "instanceof",
        "new",
        "return",
        "switch",
        "this",
        "throw",
        "try",
        "catch",
        "typeof",
        "void",
        "with",
        "yield",
      ])));
    lb = { html: Lu, haml: ob, slim: sb, pug: ab };
    (function (e) {
      ((e.Raw = "Raw"), (e.Property = "Property"));
    })(Ce || (Ce = {}));
    ((cb = /^([a-z-]+)(?:\s*:\s*([^\n\r;]+?);*)?$/), (fb = { value: !0 }));
    _n = { Global: "@@global", Section: "@@section", Property: "@@property", Value: "@@value" };
    ql = "lg";
    ((zb = {
      a: "a[href]",
      "a:blank": "a[href='http://${0}' target='_blank' rel='noopener noreferrer']",
      "a:link": "a[href='http://${0}']",
      "a:mail": "a[href='mailto:${0}']",
      "a:tel": "a[href='tel:+${0}']",
      abbr: "abbr[title]",
      "acr|acronym": "acronym[title]",
      base: "base[href]/",
      basefont: "basefont/",
      br: "br/",
      frame: "frame/",
      hr: "hr/",
      bdo: "bdo[dir]",
      "bdo:r": "bdo[dir=rtl]",
      "bdo:l": "bdo[dir=ltr]",
      col: "col/",
      link: "link[rel=stylesheet href]/",
      "link:css": "link[href='${1:style}.css']",
      "link:print": "link[href='${1:print}.css' media=print]",
      "link:favicon": "link[rel='shortcut icon' type=image/x-icon href='${1:favicon.ico}']",
      "link:mf|link:manifest": "link[rel='manifest' href='${1:manifest.json}']",
      "link:touch": "link[rel=apple-touch-icon href='${1:favicon.png}']",
      "link:rss": "link[rel=alternate type=application/rss+xml title=RSS href='${1:rss.xml}']",
      "link:atom": "link[rel=alternate type=application/atom+xml title=Atom href='${1:atom.xml}']",
      "link:im|link:import": "link[rel=import href='${1:component}.html']",
      meta: "meta/",
      "meta:utf": "meta[http-equiv=Content-Type content='text/html;charset=UTF-8']",
      "meta:vp": "meta[name=viewport content='width=${1:device-width}, initial-scale=${2:1.0}']",
      "meta:compat": "meta[http-equiv=X-UA-Compatible content='${1:IE=7}']",
      "meta:edge": "meta:compat[content='${1:ie=edge}']",
      "meta:redirect": "meta[http-equiv=refresh content='0; url=${1:http://example.com}']",
      "meta:refresh": "meta[http-equiv=refresh content='${1:5}']",
      "meta:kw": "meta[name=keywords content]",
      "meta:desc": "meta[name=description content]",
      style: "style",
      script: "script",
      "script:src": "script[src]",
      "script:module": "script[type=module src]",
      img: "img[src alt]/",
      "img:s|img:srcset": "img[srcset src alt]",
      "img:z|img:sizes": "img[sizes srcset src alt]",
      picture: "picture",
      "src|source": "source/",
      "src:sc|source:src": "source[src type]",
      "src:s|source:srcset": "source[srcset]",
      "src:t|source:type": "source[srcset type='${1:image/}']",
      "src:z|source:sizes": "source[sizes srcset]",
      "src:m|source:media": "source[media='(${1:min-width: })' srcset]",
      "src:mt|source:media:type": "source:media[type='${2:image/}']",
      "src:mz|source:media:sizes": "source:media[sizes srcset]",
      "src:zt|source:sizes:type": "source[sizes srcset type='${1:image/}']",
      iframe: "iframe[src frameborder=0]",
      embed: "embed[src type]/",
      object: "object[data type]",
      param: "param[name value]/",
      map: "map[name]",
      area: "area[shape coords href alt]/",
      "area:d": "area[shape=default]",
      "area:c": "area[shape=circle]",
      "area:r": "area[shape=rect]",
      "area:p": "area[shape=poly]",
      form: "form[action]",
      "form:get": "form[method=get]",
      "form:post": "form[method=post]",
      label: "label[for]",
      input: "input[type=${1:text}]/",
      inp: "input[name=${1} id=${1}]",
      "input:h|input:hidden": "input[type=hidden name]",
      "input:t|input:text": "inp[type=text]",
      "input:search": "inp[type=search]",
      "input:email": "inp[type=email]",
      "input:url": "inp[type=url]",
      "input:p|input:password": "inp[type=password]",
      "input:datetime": "inp[type=datetime]",
      "input:date": "inp[type=date]",
      "input:datetime-local": "inp[type=datetime-local]",
      "input:month": "inp[type=month]",
      "input:week": "inp[type=week]",
      "input:time": "inp[type=time]",
      "input:tel": "inp[type=tel]",
      "input:number": "inp[type=number]",
      "input:color": "inp[type=color]",
      "input:c|input:checkbox": "inp[type=checkbox]",
      "input:r|input:radio": "inp[type=radio]",
      "input:range": "inp[type=range]",
      "input:f|input:file": "inp[type=file]",
      "input:s|input:submit": "input[type=submit value]",
      "input:i|input:image": "input[type=image src alt]",
      "input:b|input:btn|input:button": "input[type=button value]",
      "input:reset": "input:button[type=reset]",
      isindex: "isindex/",
      select: "select[name=${1} id=${1}]",
      "select:d|select:disabled": "select[disabled.]",
      "opt|option": "option[value]",
      textarea: "textarea[name=${1} id=${1}]",
      "tarea:c|textarea:cols": "textarea[name=${1} id=${1} cols=${2:30}]",
      "tarea:r|textarea:rows": "textarea[name=${1} id=${1} rows=${3:10}]",
      "tarea:cr|textarea:cols:rows": "textarea[name=${1} id=${1} cols=${2:30} rows=${3:10}]",
      marquee: "marquee[behavior direction]",
      "menu:c|menu:context": "menu[type=context]",
      "menu:t|menu:toolbar": "menu[type=toolbar]",
      video: "video[src]",
      audio: "audio[src]",
      "html:xml": "html[xmlns=http://www.w3.org/1999/xhtml]",
      keygen: "keygen/",
      command: "command/",
      "btn:s|button:s|button:submit": "button[type=submit]",
      "btn:r|button:r|button:reset": "button[type=reset]",
      "btn:b|button:b|button:button": "button[type=button]",
      "btn:d|button:d|button:disabled": "button[disabled.]",
      "fst:d|fset:d|fieldset:d|fieldset:disabled": "fieldset[disabled.]",
      bq: "blockquote",
      fig: "figure",
      figc: "figcaption",
      pic: "picture",
      ifr: "iframe",
      emb: "embed",
      obj: "object",
      cap: "caption",
      colg: "colgroup",
      fst: "fieldset",
      btn: "button",
      optg: "optgroup",
      tarea: "textarea",
      leg: "legend",
      sect: "section",
      art: "article",
      hdr: "header",
      ftr: "footer",
      adr: "address",
      dlg: "dialog",
      str: "strong",
      prog: "progress",
      mn: "main",
      tem: "template",
      fset: "fieldset",
      datal: "datalist",
      kg: "keygen",
      out: "output",
      det: "details",
      sum: "summary",
      cmd: "command",
      data: "data[value]",
      meter: "meter[value]",
      time: "time[datetime]",
      "ri:d|ri:dpr": "img:s",
      "ri:v|ri:viewport": "img:z",
      "ri:a|ri:art": "pic>src:m+img",
      "ri:t|ri:type": "pic>src:t+img",
      "!!!": "{<!DOCTYPE html>}",
      doc: "html[lang=${lang}]>(head>meta[charset=${charset}]+meta:vp+title{${1:Document}})+body",
      "!|html:5": "!!!+doc",
      c: "{<!-- ${0} -->}",
      "cc:ie": "{<!--[if IE]>${0}<![endif]-->}",
      "cc:noie": "{<!--[if !IE]><!-->${0}<!--<![endif]-->}",
    }),
      (Db = {
        "@f": `@font-face {
	font-family: \${1};
	src: url(\${2});
}`,
        "@ff":
          "@font-face {\n	font-family: '${1:FontName}';\n	src: url('${2:FileName}.eot');\n	src: url('${2:FileName}.eot?#iefix') format('embedded-opentype'),\n		 url('${2:FileName}.woff') format('woff'),\n		 url('${2:FileName}.ttf') format('truetype'),\n		 url('${2:FileName}.svg#${1:FontName}') format('svg');\n	font-style: ${3:normal};\n	font-weight: ${4:normal};\n}",
        "@i|@import": "@import url(${0});",
        "@kf": "@keyframes ${1:identifier} {\n	${2}\n}",
        "@m|@media": "@media ${1:screen} {\n	${0}\n}",
        ac: "align-content:start|end|flex-start|flex-end|center|space-between|space-around|stretch|space-evenly",
        ai: "align-items:start|end|flex-start|flex-end|center|baseline|stretch",
        anim: "animation:${1:name} ${2:duration} ${3:timing-function} ${4:delay} ${5:iteration-count} ${6:direction} ${7:fill-mode}",
        animdel: "animation-delay:time",
        animdir: "animation-direction:normal|reverse|alternate|alternate-reverse",
        animdur: "animation-duration:${1:0}s",
        animfm: "animation-fill-mode:both|forwards|backwards",
        animic: "animation-iteration-count:1|infinite",
        animn: "animation-name",
        animps: "animation-play-state:running|paused",
        animtf:
          "animation-timing-function:linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(${1:0.1}, ${2:0.7}, ${3:1.0}, ${3:0.1})",
        ap: "appearance:none",
        as: "align-self:start|end|auto|flex-start|flex-end|center|baseline|stretch",
        b: "bottom",
        bd: "border:${1:1px} ${2:solid} ${3:#000}",
        bdb: "border-bottom:${1:1px} ${2:solid} ${3:#000}",
        bdbc: "border-bottom-color:${1:#000}",
        bdbi: "border-bottom-image:url(${0})",
        bdbk: "border-break:close",
        bdbli: "border-bottom-left-image:url(${0})|continue",
        bdblrs: "border-bottom-left-radius",
        bdbri: "border-bottom-right-image:url(${0})|continue",
        bdbrrs: "border-bottom-right-radius",
        bdbs: "border-bottom-style",
        bdbw: "border-bottom-width",
        bdc: "border-color:${1:#000}",
        bdci: "border-corner-image:url(${0})|continue",
        bdcl: "border-collapse:collapse|separate",
        bdf: "border-fit:repeat|clip|scale|stretch|overwrite|overflow|space",
        bdi: "border-image:url(${0})",
        bdl: "border-left:${1:1px} ${2:solid} ${3:#000}",
        bdlc: "border-left-color:${1:#000}",
        bdlen: "border-length",
        bdli: "border-left-image:url(${0})",
        bdls: "border-left-style",
        bdlw: "border-left-width",
        bdr: "border-right:${1:1px} ${2:solid} ${3:#000}",
        bdrc: "border-right-color:${1:#000}",
        bdri: "border-right-image:url(${0})",
        bdrs: "border-radius",
        bdrst: "border-right-style",
        bdrw: "border-right-width",
        bds: "border-style:none|hidden|dotted|dashed|solid|double|dot-dash|dot-dot-dash|wave|groove|ridge|inset|outset",
        bdsp: "border-spacing",
        bdt: "border-top:${1:1px} ${2:solid} ${3:#000}",
        bdtc: "border-top-color:${1:#000}",
        bdti: "border-top-image:url(${0})",
        bdtli: "border-top-left-image:url(${0})|continue",
        bdtlrs: "border-top-left-radius",
        bdtri: "border-top-right-image:url(${0})|continue",
        bdtrrs: "border-top-right-radius",
        bdts: "border-top-style",
        bdtw: "border-top-width",
        bdw: "border-width",
        bbs: "border-block-start",
        bbe: "border-block-end",
        bis: "border-inline-start",
        bie: "border-inline-end",
        bfv: "backface-visibility:hidden|visible",
        bg: "background:${1:#000}",
        "bg:n": "background: none",
        bga: "background-attachment:fixed|scroll",
        bgbk: "background-break:bounding-box|each-box|continuous",
        bgc: "background-color:${1:#fff}",
        bgcp: "background-clip:padding-box|border-box|content-box|no-clip",
        bgi: "background-image:url(${0})",
        bgo: "background-origin:padding-box|border-box|content-box",
        bgp: "background-position:${1:0} ${2:0}",
        bgpx: "background-position-x",
        bgpy: "background-position-y",
        bgr: "background-repeat:no-repeat|repeat-x|repeat-y|space|round",
        bgsz: "background-size:contain|cover",
        bs: "block-size",
        bxsh: "box-shadow:${1:inset }${2:hoff} ${3:voff} ${4:blur} ${5:#000}|none",
        bxsz: "box-sizing:border-box|content-box|border-box",
        c: "color:${1:#000}",
        cg: "column-gap",
        cr: "color:rgb(${1:0}, ${2:0}, ${3:0})",
        cra: "color:rgba(${1:0}, ${2:0}, ${3:0}, ${4:.5})",
        cl: "clear:both|left|right|none",
        cm: "/* ${0} */",
        cnt: "content:'${0}'|normal|open-quote|no-open-quote|close-quote|no-close-quote|attr(${0})|counter(${0})|counters(${0})",
        coi: "counter-increment",
        colm: "columns",
        colmc: "column-count",
        colmf: "column-fill",
        colmg: "column-gap",
        colmr: "column-rule",
        colmrc: "column-rule-color",
        colmrs: "column-rule-style",
        colmrw: "column-rule-width",
        colms: "column-span",
        colmw: "column-width",
        cor: "counter-reset",
        cp: "clip:auto|rect(${1:top} ${2:right} ${3:bottom} ${4:left})",
        cps: "caption-side:top|bottom",
        cur: "cursor:pointer|auto|default|crosshair|hand|help|move|pointer|text",
        d: "display:block|none|flex|inline-flex|inline|inline-block|grid|inline-grid|subgrid|list-item|run-in|contents|table|inline-table|table-caption|table-column|table-column-group|table-header-group|table-footer-group|table-row|table-row-group|table-cell|ruby|ruby-base|ruby-base-group|ruby-text|ruby-text-group",
        ec: "empty-cells:show|hide",
        f: "font:${1:1em} ${2:sans-serif}",
        fd: "font-display:auto|block|swap|fallback|optional",
        fef: "font-effect:none|engrave|emboss|outline",
        fem: "font-emphasize",
        femp: "font-emphasize-position:before|after",
        fems: "font-emphasize-style:none|accent|dot|circle|disc",
        ff: "font-family:serif|sans-serif|cursive|fantasy|monospace",
        fft: 'font-family:"Times New Roman", Times, Baskerville, Georgia, serif',
        ffa: 'font-family:Arial, "Helvetica Neue", Helvetica, sans-serif',
        ffv: "font-family:Verdana, Geneva, sans-serif",
        fl: "float:left|right|none",
        fs: "font-style:italic|normal|oblique",
        fsm: "font-smoothing:antialiased|subpixel-antialiased|none",
        fst: "font-stretch:normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded",
        fv: "font-variant:normal|small-caps",
        fvs: "font-variation-settings:normal|inherit|initial|unset",
        fw: "font-weight:normal|bold|bolder|lighter",
        fx: "flex",
        fxb: "flex-basis:fill|max-content|min-content|fit-content|content",
        fxd: "flex-direction:row|row-reverse|column|column-reverse",
        fxf: "flex-flow",
        fxg: "flex-grow",
        fxsh: "flex-shrink",
        fxw: "flex-wrap:nowrap|wrap|wrap-reverse",
        fsz: "font-size",
        fsza: "font-size-adjust",
        g: "gap",
        gtc: "grid-template-columns:repeat(${0})|minmax()",
        gtr: "grid-template-rows:repeat(${0})|minmax()",
        gta: "grid-template-areas",
        gt: "grid-template",
        gg: "grid-gap",
        gcg: "grid-column-gap",
        grg: "grid-row-gap",
        gac: "grid-auto-columns:auto|minmax()",
        gar: "grid-auto-rows:auto|minmax()",
        gaf: "grid-auto-flow:row|column|dense|inherit|initial|unset",
        gd: "grid",
        gc: "grid-column",
        gcs: "grid-column-start",
        gce: "grid-column-end",
        gr: "grid-row",
        grs: "grid-row-start",
        gre: "grid-row-end",
        ga: "grid-area",
        h: "height",
        is: "inline-size",
        jc: "justify-content:start|end|stretch|flex-start|flex-end|center|space-between|space-around|space-evenly",
        ji: "justify-items:start|end|center|stretch",
        js: "justify-self:start|end|center|stretch",
        l: "left",
        lg: "background-image:linear-gradient(${1})",
        lh: "line-height",
        lis: "list-style",
        lisi: "list-style-image",
        lisp: "list-style-position:inside|outside",
        list: "list-style-type:disc|circle|square|decimal|decimal-leading-zero|lower-roman|upper-roman",
        lts: "letter-spacing:normal",
        m: "margin",
        mah: "max-height",
        mar: "max-resolution",
        maw: "max-width",
        mb: "margin-bottom",
        mih: "min-height",
        mir: "min-resolution",
        miw: "min-width",
        ml: "margin-left",
        mr: "margin-right",
        mt: "margin-top",
        mbs: "margin-block-start",
        mbe: "margin-block-end",
        mis: "margin-inline-start",
        mie: "margin-inline-end",
        ol: "outline",
        olc: "outline-color:${1:#000}|invert",
        olo: "outline-offset",
        ols: "outline-style:none|dotted|dashed|solid|double|groove|ridge|inset|outset",
        olw: "outline-width:thin|medium|thick",
        "op|opa": "opacity",
        ord: "order",
        ori: "orientation:landscape|portrait",
        orp: "orphans",
        ov: "overflow:hidden|visible|hidden|scroll|auto",
        ovs: "overflow-style:scrollbar|auto|scrollbar|panner|move|marquee",
        ovx: "overflow-x:hidden|visible|hidden|scroll|auto",
        ovy: "overflow-y:hidden|visible|hidden|scroll|auto",
        p: "padding",
        pb: "padding-bottom",
        pgba: "page-break-after:auto|always|left|right",
        pgbb: "page-break-before:auto|always|left|right",
        pgbi: "page-break-inside:auto|avoid",
        pl: "padding-left",
        pos: "position:relative|absolute|relative|fixed|static",
        pr: "padding-right",
        pt: "padding-top",
        pbs: "padding-block-start",
        pbe: "padding-block-end",
        pis: "padding-inline-start",
        pie: "padding-inline-end",
        spbs: "scroll-padding-block-start",
        spbe: "scroll-padding-block-end",
        spis: "scroll-padding-inline-start",
        spie: "scroll-padding-inline-end",
        q: "quotes",
        qen: "quotes:'\\201C' '\\201D' '\\2018' '\\2019'",
        qru: "quotes:'\\00AB' '\\00BB' '\\201E' '\\201C'",
        r: "right",
        rg: "row-gap",
        rsz: "resize:none|both|horizontal|vertical",
        t: "top",
        ta: "text-align:left|center|right|justify",
        tal: "text-align-last:left|center|right",
        tbl: "table-layout:fixed",
        td: "text-decoration:none|underline|overline|line-through",
        te: "text-emphasis:none|accent|dot|circle|disc|before|after",
        th: "text-height:auto|font-size|text-size|max-size",
        ti: "text-indent",
        tj: "text-justify:auto|inter-word|inter-ideograph|inter-cluster|distribute|kashida|tibetan",
        to: "text-outline:${1:0} ${2:0} ${3:#000}",
        tov: "text-overflow:ellipsis|clip",
        tr: "text-replace",
        trf: "transform:${1}|skewX(${1:angle})|skewY(${1:angle})|scale(${1:x}, ${2:y})|scaleX(${1:x})|scaleY(${1:y})|scaleZ(${1:z})|scale3d(${1:x}, ${2:y}, ${3:z})|rotate(${1:angle})|rotateX(${1:angle})|rotateY(${1:angle})|rotateZ(${1:angle})|translate(${1:x}, ${2:y})|translateX(${1:x})|translateY(${1:y})|translateZ(${1:z})|translate3d(${1:tx}, ${2:ty}, ${3:tz})",
        trfo: "transform-origin",
        trfs: "transform-style:preserve-3d",
        trs: "transition:${1:prop} ${2:time}",
        trsde: "transition-delay:${1:time}",
        trsdu: "transition-duration:${1:time}",
        trsp: "transition-property:${1:prop}",
        trstf: "transition-timing-function:${1:fn}",
        tsh: "text-shadow:${1:hoff} ${2:voff} ${3:blur} ${4:#000}",
        tt: "text-transform:uppercase|lowercase|capitalize|none",
        tw: "text-wrap:none|normal|unrestricted|suppress",
        us: "user-select:none",
        v: "visibility:hidden|visible|collapse",
        va: "vertical-align:top|super|text-top|middle|baseline|bottom|text-bottom|sub",
        "w|wid": "width",
        whs: "white-space:nowrap|pre|pre-wrap|pre-line|normal",
        whsc: "white-space-collapse:normal|keep-all|loose|break-strict|break-all",
        wido: "widows",
        wm: "writing-mode:lr-tb|lr-tb|lr-bt|rl-tb|rl-bt|tb-rl|tb-lr|bt-lr|bt-rl",
        wob: "word-break:normal|keep-all|break-all",
        wos: "word-spacing",
        wow: "word-wrap:none|unrestricted|suppress|break-word|normal",
        z: "z-index",
        zom: "zoom:1",
      }),
      (Ub = {
        "tm|tmatch": "xsl:template[match mode]",
        "tn|tname": "xsl:template[name]",
        call: "xsl:call-template[name]",
        ap: "xsl:apply-templates[select mode]",
        api: "xsl:apply-imports",
        imp: "xsl:import[href]",
        inc: "xsl:include[href]",
        ch: "xsl:choose",
        "wh|xsl:when": "xsl:when[test]",
        ot: "xsl:otherwise",
        if: "xsl:if[test]",
        par: "xsl:param[name]",
        pare: "xsl:param[name select]",
        var: "xsl:variable[name]",
        vare: "xsl:variable[name select]",
        wp: "xsl:with-param[name select]",
        key: "xsl:key[name match use]",
        elem: "xsl:element[name]",
        attr: "xsl:attribute[name]",
        attrs: "xsl:attribute-set[name]",
        cp: "xsl:copy[select]",
        co: "xsl:copy-of[select]",
        val: "xsl:value-of[select]",
        "for|each": "xsl:for-each[select]",
        tex: "xsl:text",
        com: "xsl:comment",
        msg: "xsl:message[terminate=no]",
        fall: "xsl:fallback",
        num: "xsl:number[value]",
        nam: "namespace-alias[stylesheet-prefix result-prefix]",
        pres: "xsl:preserve-space[elements]",
        strip: "xsl:strip-space[elements]",
        proc: "xsl:processing-instruction[name]",
        sort: "xsl:sort[select order]",
        choose: "xsl:choose>xsl:when+xsl:otherwise",
        xsl: `!!!+xsl:stylesheet[version=1.0 xmlns:xsl=http://www.w3.org/1999/XSL/Transform]>{
|}`,
        "!!!": '{<?xml version="1.0" encoding="UTF-8"?>}',
      }),
      (Bb = { "!!!": "{doctype html}" }),
      (Mb = {
        lang: "en",
        locale: "en-US",
        charset: "UTF-8",
        indentation: "	",
        newline: `
`,
      }),
      (qb = { markup: "html", stylesheet: "css" }),
      (Vb = {
        inlineElements: [
          "a",
          "abbr",
          "acronym",
          "applet",
          "b",
          "basefont",
          "bdo",
          "big",
          "br",
          "button",
          "cite",
          "code",
          "del",
          "dfn",
          "em",
          "font",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "map",
          "object",
          "q",
          "s",
          "samp",
          "select",
          "small",
          "span",
          "strike",
          "strong",
          "sub",
          "sup",
          "textarea",
          "tt",
          "u",
          "var",
        ],
        "output.indent": "	",
        "output.baseIndent": "",
        "output.newline": `
`,
        "output.tagCase": "",
        "output.attributeCase": "",
        "output.attributeQuotes": "double",
        "output.format": !0,
        "output.formatLeafNode": !1,
        "output.formatSkip": ["html"],
        "output.formatForce": ["body"],
        "output.inlineBreak": 3,
        "output.compactBoolean": !1,
        "output.booleanAttributes": [
          "contenteditable",
          "seamless",
          "async",
          "autofocus",
          "autoplay",
          "checked",
          "controls",
          "defer",
          "disabled",
          "formnovalidate",
          "hidden",
          "ismap",
          "loop",
          "multiple",
          "muted",
          "novalidate",
          "readonly",
          "required",
          "reversed",
          "selected",
          "typemustmatch",
        ],
        "output.reverseAttributes": !1,
        "output.selfClosingStyle": "html",
        "output.field": (e, t) => t,
        "output.text": (e) => e,
        "markup.href": !0,
        "comment.enabled": !1,
        "comment.trigger": ["id", "class"],
        "comment.before": "",
        "comment.after": `
<!-- /[#ID][.CLASS] -->`,
        "bem.enabled": !1,
        "bem.element": "__",
        "bem.modifier": "_",
        "jsx.enabled": !1,
        "stylesheet.keywords": ["auto", "inherit", "unset", "none"],
        "stylesheet.unitless": [
          "z-index",
          "line-height",
          "opacity",
          "font-weight",
          "zoom",
          "flex",
          "flex-grow",
          "flex-shrink",
        ],
        "stylesheet.shortHex": !0,
        "stylesheet.between": ": ",
        "stylesheet.after": ";",
        "stylesheet.intUnit": "px",
        "stylesheet.floatUnit": "em",
        "stylesheet.unitAliases": { e: "em", p: "%", x: "ex", r: "rem" },
        "stylesheet.json": !1,
        "stylesheet.jsonDoubleQuotes": !1,
        "stylesheet.fuzzySearchMinScore": 0,
        "stylesheet.strictMatch": !1,
      }),
      (Wu = { type: "markup", syntax: "html", variables: Mb, snippets: {}, options: Vb }),
      (Vl = {
        markup: { snippets: Cn(zb) },
        xhtml: { options: { "output.selfClosingStyle": "xhtml" } },
        xml: { options: { "output.selfClosingStyle": "xml" } },
        xsl: { snippets: Cn(Ub), options: { "output.selfClosingStyle": "xml" } },
        jsx: {
          options: {
            "jsx.enabled": !0,
            "markup.attributes": { class: "className", "class*": "styleName", for: "htmlFor" },
            "markup.valuePrefix": { "class*": "styles" },
          },
        },
        vue: { options: { "markup.attributes": { "class*": ":class" } } },
        svelte: { options: { "jsx.enabled": !0 } },
        pug: { snippets: Cn(Bb) },
        stylesheet: { snippets: Cn(Db) },
        sass: { options: { "stylesheet.after": "" } },
        stylus: { options: { "stylesheet.between": " ", "stylesheet.after": "" } },
      }));
    (function (e) {
      ((e[(e.SingleQuote = 39)] = "SingleQuote"),
        (e[(e.DoubleQuote = 34)] = "DoubleQuote"),
        (e[(e.Escape = 92)] = "Escape"));
    })(Ut || (Ut = {}));
    (function (e) {
      ((e[(e.SquareL = 91)] = "SquareL"),
        (e[(e.SquareR = 93)] = "SquareR"),
        (e[(e.RoundL = 40)] = "RoundL"),
        (e[(e.RoundR = 41)] = "RoundR"),
        (e[(e.CurlyL = 123)] = "CurlyL"),
        (e[(e.CurlyR = 125)] = "CurlyR"));
    })(_ || (_ = {}));
    Ju = { [_.SquareL]: _.SquareR, [_.RoundL]: _.RoundR, [_.CurlyL]: _.CurlyR };
    (function (e) {
      ((e[(e.Tab = 9)] = "Tab"),
        (e[(e.Space = 32)] = "Space"),
        (e[(e.Dash = 45)] = "Dash"),
        (e[(e.Slash = 47)] = "Slash"),
        (e[(e.Colon = 58)] = "Colon"),
        (e[(e.Equals = 61)] = "Equals"),
        (e[(e.AngleLeft = 60)] = "AngleLeft"),
        (e[(e.AngleRight = 62)] = "AngleRight"));
    })(re || (re = {}));
    ((Yu = (e) => e.charCodeAt(0)),
      (tv = "#.*:$-_!@%^+>/".split("").map(Yu)),
      (nv = { type: "markup", lookAhead: !0, prefix: "" }));
  });
function ec(e) {
  let t = {};
  return (
    Object.keys(e).forEach((n) => {
      for (let r of n.split("|")) t[r] = e[n];
    }),
    t
  );
}
var qt,
  tc = W(() => {
    qt = {
      markup: ["html", "xml", "xsl", "jsx", "js", "pug", "slim", "haml", "vue"],
      stylesheet: ["css", "sass", "scss", "less", "sss", "stylus"],
    };
  });
var dc = {};
Mr(dc, {
  FileType: () => Lt,
  doComplete: () => mv,
  emmetSnippetField: () => po,
  expandAbbreviation: () => kv,
  extractAbbreviation: () => lc,
  extractAbbreviationFromText: () => vv,
  getDefaultSnippets: () => sc,
  getDefaultSyntax: () => mo,
  getEmmetMode: () => fc,
  getExpandOptions: () => cc,
  getSyntaxType: () => ho,
  isAbbreviationValid: () => uc,
  isStyleSheet: () => ge,
  parseAbbreviation: () => wv,
  updateExtensionsPath: () => Av,
});
function mv(e, t, n, r) {
  var i, o;
  if (r.showExpandedAbbreviation === "never" || !fc(n, r.excludeLanguages)) return;
  let s = ge(n);
  if (!s) {
    if (!Hn.has(n)) {
      let m = Object.assign(Object.assign({}, sc(n)), He[n]);
      Hn.set(n, Object.keys(m));
    }
    co = (i = Hn.get(n)) !== null && i !== void 0 ? i : [];
  }
  let l = lc(e, t, { lookAhead: !s, type: s ? "stylesheet" : "markup" });
  if (!l) return;
  let { abbreviationRange: u, abbreviation: c, filter: f } = l,
    h = oc(e, t).substr(0, t.character);
  if (gv(h) === c && h.endsWith(`<${c}`) && qt.markup.includes(n)) return;
  let k = cc(n, r, f),
    x = "",
    w,
    S = [],
    y = (m, v) => {
      if (uc(m, c)) {
        try {
          ((x = Mt(v, k)), s && "!important".startsWith(v) && (x = "!important"));
        } catch {}
        !x ||
          xv(m, v, x, k.options) ||
          ((w = It.create(v)),
          (w.textEdit = xe.replace(u, Wn(Gn(x)))),
          (w.documentation = fo(x)),
          (w.insertTextFormat = Pt.Snippet),
          (w.detail = dt.t("Emmet Abbreviation")),
          (w.label = c),
          (w.label += f ? "|" + f.replace(",", "|") : ""),
          (S = [w]));
      }
    };
  if (ge(n)) {
    if ((y(n, c), c.length > 4 && bl.properties.find((m) => m.startsWith(c))))
      return Ot.create([], !0);
    if (w && x.length) {
      ((w.textEdit = xe.replace(u, Wn(Gn(x)))),
        (w.documentation = fo(x)),
        (w.label = bv(x)),
        (w.filterText = c));
      let m = ft.has(n) ? ft.get(n) : ft.get("css");
      if (
        ((S = lo(m ?? [], c, c, u, k, "Emmet Custom Snippet", !1)),
        !S.find((v) => {
          var g, b, T;
          return (
            ((g = v.textEdit) === null || g === void 0 ? void 0 : g.newText) &&
            ((b = v.textEdit) === null || b === void 0 ? void 0 : b.newText) ===
              ((T = w?.textEdit) === null || T === void 0 ? void 0 : T.newText)
          );
        }))
      ) {
        let v = new RegExp(
          ".*" +
            c
              .split("")
              .map((g) => (g === "$" || g === "+" ? "\\" + g : g))
              .join(".*") +
            ".*",
          "i",
        );
        (/\d/.test(c) || v.test(w.label)) && S.push(w);
      }
    }
  } else {
    y(n, c);
    let m = c,
      v = c.match(/(>|\+)([\w:-]+)$/);
    if ((v && v.length === 3 && (m = v[2]), n !== "xml")) {
      let g = lo(Vt, m, c, u, k, "Emmet Abbreviation");
      S = S.concat(g);
    }
    if (r.showAbbreviationSuggestions === !0) {
      let g = lo(
        co.filter((b) => !Vt.includes(b)),
        m,
        c,
        u,
        k,
        "Emmet Abbreviation",
      );
      (w &&
        g.length > 0 &&
        m !== c &&
        ((w.sortText = "0" + w.label),
        g.forEach((b) => {
          ((b.filterText = c), (b.sortText = "9" + c));
        })),
        (S = S.concat(g)));
    }
    n === "html" &&
      S.length >= 2 &&
      c.includes(":") &&
      ((o = w?.textEdit) === null || o === void 0 ? void 0 : o.newText) === `<${c}>\${0}</${c}>` &&
      (S = S.filter((g) => g.label !== c));
  }
  return (
    r.showSuggestionsAsSnippets === !0 && S.forEach((m) => (m.kind = kn.Snippet)),
    S.length ? Ot.create(S, !0) : void 0
  );
}
function lo(e, t, n, r, i, o, s = !0) {
  if (!t || !e) return [];
  let a = [];
  return (
    e.forEach((l) => {
      if (!l.startsWith(t.toLowerCase()) || (s && l === t.toLowerCase())) return;
      let u = n + l.substr(t.length),
        c;
      try {
        c = Mt(u, i);
      } catch {}
      if (!c) return;
      let f = It.create(t + l.substr(t.length));
      ((f.documentation = fo(c)),
        (f.detail = o),
        (f.textEdit = xe.replace(r, Wn(Gn(c)))),
        (f.insertTextFormat = Pt.Snippet),
        a.push(f));
    }),
    a
  );
}
function gv(e) {
  if (e) {
    let t = e.match(/[\w,:,-,\.]*$/);
    if (t) return t[0];
  }
}
function fo(e) {
  return e.replace(/([^\\])\$\{\d+\}/g, "$1|").replace(/\$\{\d+:([^\}]+)\}/g, "$1");
}
function bv(e) {
  return e.replace(/([^\\])\$\{\d+\}/g, "$1").replace(/\$\{\d+:([^\}]+)\}/g, "$1");
}
function Wn(e) {
  return e && e.replace(/([^\\])(\$)([^\{])/g, "$1\\$2$3");
}
function Gn(e) {
  if (!e || !e.trim()) return e;
  let t = -1,
    n = [],
    r = !1,
    i = !1,
    o = 0,
    s = e.length;
  try {
    for (; o < s && !r;) {
      if (e[o++] != "$" || e[o++] != "{") continue;
      let a = -1,
        l = -1;
      for (; o < s && /\d/.test(e[o]);) ((a = a < 0 ? o : a), (l = o + 1), o++);
      if (a === -1 || l === -1 || o >= s || (e[o] != "}" && e[o] != ":")) continue;
      let u = e.substring(a, l);
      if (((r = u === "0"), r)) break;
      let c = !1;
      if (e[o++] == ":")
        for (; o < s;) {
          if (e[o] == "}") {
            c = !0;
            break;
          }
          o++;
        }
      Number(u) > Number(t)
        ? ((t = Number(u)), (n = [{ numberStart: a, numberEnd: l }]), (i = !c))
        : Number(u) === t && n.push({ numberStart: a, numberEnd: l });
    }
  } catch {}
  if (i && !r)
    for (let a = 0; a < n.length; a++) {
      let l = n[a].numberStart,
        u = n[a].numberEnd;
      e = e.substr(0, l) + "0" + e.substr(u);
    }
  return e;
}
function oc(e, t) {
  let n = e.offsetAt(t),
    r = e.getText(),
    i = 0,
    o = r.length;
  for (let s = n - 1; s >= 0; s--)
    if (
      r[s] ===
      `
`
    ) {
      i = s + 1;
      break;
    }
  for (let s = n; s < r.length; s++)
    if (
      r[s] ===
      `
`
    ) {
      o = s;
      break;
    }
  return r.substring(i, o);
}
function ge(e) {
  return qt.stylesheet.includes(e);
}
function ho(e) {
  return ge(e) ? "stylesheet" : "markup";
}
function mo(e) {
  return ge(e) ? "css" : "html";
}
function sc(e) {
  let n = { type: ho(e), syntax: e },
    r = Bt(n);
  return e === "xml" ? {} : r.snippets;
}
function ac(e, t) {
  let n;
  for (let r = 0; r < hv; r++)
    if (e.endsWith(`${ao}${Mn}`, t)) ((t -= Mn.length + 1), (n = n ? Mn + "," + n : Mn));
    else if (e.endsWith(`${ao}${Vn}`, t)) ((t -= Vn.length + 1), (n = n ? Vn + "," + n : Vn));
    else if (e.endsWith(`${ao}${qn}`, t)) ((t -= qn.length + 1), (n = n ? qn + "," + n : qn));
    else break;
  return { pos: t, filter: n };
}
function lc(e, t, n) {
  let r = oc(e, t),
    i = r.substr(0, t.character),
    { pos: o, filter: s } = ac(i, t.character),
    a = s ? s.length + 1 : 0,
    l = so(r, o, n);
  return l
    ? {
        abbreviationRange: V.create(
          t.line,
          l.location,
          t.line,
          l.location + l.abbreviation.length + a,
        ),
        abbreviation: l.abbreviation,
        filter: s,
      }
    : void 0;
}
function vv(e, t) {
  if (!e) return;
  let { pos: n, filter: r } = ac(e, e.length),
    i = ge(t) || t === "stylesheet" ? { syntax: "stylesheet", lookAhead: !1 } : { lookAhead: !0 },
    o = so(e, n, i);
  if (o) return { abbreviation: o.abbreviation, filter: r };
}
function uc(e, t) {
  if (!t) return !1;
  if (ge(e)) {
    if (t.includes("#")) {
      if (t.startsWith("#")) return /^#[\d,a-f,A-F]{1,6}$/.test(t);
      if (Vt.includes(t.substring(0, t.indexOf("#")))) return !1;
    }
    return pv.test(t);
  }
  return t.startsWith("!")
    ? !/[^!]/.test(t)
    : (/\(/.test(t) || /\)/.test(t)) &&
        !/\{[^\}\{]*[\(\)]+[^\}\{]*\}(?:[>\+\*\^]|$)/.test(t) &&
        !/\(.*\)[>\+\*\^]/.test(t) &&
        !/\[[^\[\]\(\)]+=".*"\]/.test(t) &&
        !/[>\+\*\^]\(.*\)/.test(t)
      ? !1
      : e === "jsx"
        ? dv.test(t) && nc.test(t)
        : /^{%|{#|{{/.test(t)
          ? !1
          : fv.test(t) && nc.test(t);
}
function xv(e, t, n, r) {
  var i, o;
  if (ge(e) && r) {
    let a = (i = r["stylesheet.between"]) !== null && i !== void 0 ? i : ": ",
      l = (o = r["stylesheet.after"]) !== null && o !== void 0 ? o : ";",
      u = t.indexOf(a[0], Math.max(t.length - a.length, 0));
    u = u >= 0 ? u : t.length;
    let c = t.substring(0, u);
    return n === `${c}${a}\${0}${l}` || n.replace(/\s/g, "") === t.replace(/\s/g, "") + l;
  }
  if (e === "xml" && Vt.some((a) => a.startsWith(t.toLowerCase()))) return !0;
  if (
    Vt.includes(t.toLowerCase()) ||
    co.includes(t) ||
    (/[-,:]/.test(t) && !/--|::/.test(t) && !t.endsWith(":"))
  )
    return !1;
  if (/^\.{2,}$/.test(t)) return !0;
  if (t === ".") return !1;
  let s = t.match(/^([a-z,A-Z,\d]*)\.$/);
  return s
    ? !(s[1] && Pi.tags.includes(s[1]))
    : e === "jsx" && /^([A-Z][A-Za-z0-9]*)+$/.test(t)
      ? !1
      : n.toLowerCase() === `<${t.toLowerCase()}>\${1}</${t.toLowerCase()}>`;
}
function cc(e, t, n) {
  var r, i, o, s, a, l, u, c, f, h;
  ((t = t ?? {}), (t.preferences = (r = t.preferences) !== null && r !== void 0 ? r : {}));
  let p = t.preferences,
    k = ge(e) ? e : "css",
    x = Sv(e, (i = t.syntaxProfiles) !== null && i !== void 0 ? i : {}),
    S = (x && x.filters ? x.filters.split(",") : []).map((Q) => Q.trim()),
    y = (n && n.split(",").some((Q) => Q.trim() === "bem")) || S.includes("bem"),
    m = (n && n.split(",").some((Q) => Q.trim() === "c")) || S.includes("c"),
    v = Ev(e, t.preferences),
    g = (v?.stylesheet && v.stylesheet.unitAliases) || {},
    b = {
      "output.formatSkip": ["html"],
      "output.formatForce": ["body"],
      "output.inlineBreak": 0,
      "output.compactBoolean": !1,
      "output.reverseAttributes": !1,
      "output.field": po,
      "markup.href": !0,
      "comment.enabled": !1,
      "comment.trigger": ["id", "class"],
      "comment.before": "",
      "comment.after": `
<!-- /[#ID][.CLASS] -->`,
      "bem.enabled": !1,
      "bem.element": "__",
      "bem.modifier": "_",
      "jsx.enabled": e === "jsx",
      "stylesheet.shortHex": !0,
      "stylesheet.between": e === "stylus" ? " " : ": ",
      "stylesheet.after": e === "sass" || e === "stylus" ? "" : ";",
      "stylesheet.intUnit": "px",
      "stylesheet.floatUnit": "em",
      "stylesheet.unitAliases": { e: "em", p: "%", x: "ex", r: "rem" },
      "stylesheet.fuzzySearchMinScore": 0.3,
    },
    T = {
      "output.tagCase": x.tagCase,
      "output.attributeCase": x.attributeCase,
      "output.attributeQuotes": x.attributeQuotes,
      "output.format": (o = x.format) !== null && o !== void 0 ? o : !0,
      "output.formatSkip": p["format.noIndentTags"],
      "output.formatForce": p["format.forceIndentationForTags"],
      "output.inlineBreak":
        (s = x.inlineBreak) !== null && s !== void 0 ? s : p["output.inlineBreak"],
      "output.compactBoolean":
        (a = x.compactBooleanAttributes) !== null && a !== void 0
          ? a
          : p["profile.allowCompactBoolean"],
      "output.reverseAttributes": p["output.reverseAttributes"],
      "output.selfClosingStyle":
        (u =
          (l = x.selfClosingStyle) !== null && l !== void 0 ? l : p["output.selfClosingStyle"]) !==
          null && u !== void 0
          ? u
          : yv(e),
      "output.field": po,
      "comment.enabled": m,
      "comment.trigger": p["filter.commentTrigger"],
      "comment.before": p["filter.commentBefore"],
      "comment.after": p["filter.commentAfter"],
      "bem.enabled": y,
      "bem.element": (c = p["bem.elementSeparator"]) !== null && c !== void 0 ? c : "__",
      "bem.modifier": (f = p["bem.modifierSeparator"]) !== null && f !== void 0 ? f : "_",
      "jsx.enabled": e === "jsx",
      "stylesheet.shortHex": p["css.color.short"],
      "stylesheet.between": p[`${k}.valueSeparator`],
      "stylesheet.after": p[`${k}.propertyEnd`],
      "stylesheet.intUnit": p["css.intUnit"],
      "stylesheet.floatUnit": p["css.floatUnit"],
      "stylesheet.unitAliases": g,
      "stylesheet.fuzzySearchMinScore": p["css.fuzzySearchMinScore"],
    };
  if (e === "jsx") {
    let Q = { class: "className", "class*": "styleName", for: "htmlFor" },
      ne = { "class*": "styles" };
    (x["markup.attributes"] &&
      (T["markup.attributes"] = Object.assign(Object.assign({}, Q), x["markup.attributes"])),
      x["markup.valuePrefix"] &&
        (T["markup.valuePrefix"] = Object.assign(Object.assign({}, ne), x["markup.valuePrefix"])));
  }
  if (e === "vue") {
    let Q = { "class*": ":class" },
      ne = { "class*": "$style" };
    (x["markup.attributes"] &&
      (T["markup.attributes"] = Object.assign(Object.assign({}, Q), x["markup.attributes"])),
      x["markup.valuePrefix"] &&
        (T["markup.valuePrefix"] = Object.assign(Object.assign({}, ne), x["markup.valuePrefix"])));
  }
  let P = {};
  [...Object.keys(b), ...Object.keys(T)].forEach((Q) => {
    var ne;
    let ke = Q;
    P[ke] = (ne = T[ke]) !== null && ne !== void 0 ? ne : b[ke];
  });
  let E = Object.assign(
    Object.assign({}, b["stylesheet.unitAliases"]),
    T["stylesheet.unitAliases"],
  );
  P["stylesheet.unitAliases"] = E;
  let I = ho(e),
    ee = Tv(t.variables),
    F = mo(e),
    de = I === "stylesheet" ? ((h = He[e]) !== null && h !== void 0 ? h : He[F]) : He[e];
  return {
    type: I,
    options: P,
    variables: ee,
    snippets: de,
    syntax: e,
    text: void 0,
    maxRepeat: 1e3,
  };
}
function yv(e) {
  switch (e) {
    case "xhtml":
      return "xhtml";
    case "xml":
      return "xml";
    case "xsl":
      return "xml";
    case "jsx":
      return "xhtml";
    default:
      return "html";
  }
}
function wv(e, t) {
  let n = Bt(t);
  return t.type === "stylesheet" ? io(e, n) : to(e, n);
}
function kv(e, t) {
  let n,
    r = Bt(t);
  return (
    t.type === "stylesheet"
      ? typeof e == "string"
        ? (n = Mt(e, r))
        : (n = ro(e, r))
      : typeof e == "string"
        ? (n = Mt(e, r))
        : (n = no(e, r)),
    Wn(Gn(n))
  );
}
function Sv(e, t) {
  t || (t = {});
  let r = Object.assign({}, Qn, t)[e];
  if (!r || typeof r == "string") return r === "xhtml" ? { selfClosingStyle: "xhtml" } : {};
  let i = {};
  for (let o in r)
    switch (o) {
      case "tag_case":
        i.tagCase = r[o] === "lower" || r[o] === "upper" ? r[o] : "";
        break;
      case "attr_case":
        i.attributeCase = r[o] === "lower" || r[o] === "upper" ? r[o] : "";
        break;
      case "attr_quotes":
        i.attributeQuotes = r[o];
        break;
      case "tag_nl":
        i.format = r[o] === !0 || r[o] === !1 ? r[o] : !0;
        break;
      case "inline_break":
        i.inlineBreak = r[o];
        break;
      case "self_closing_tag":
        if (r[o] === !0) {
          i.selfClosingStyle = "xml";
          break;
        }
        if (r[o] === !1) {
          i.selfClosingStyle = "html";
          break;
        }
        i.selfClosingStyle = r[o];
        break;
      case "compact_bool":
        i.compactBooleanAttributes = r[o];
        break;
      default:
        i[o] = r[o];
        break;
    }
  return i;
}
function Tv(e) {
  return e ? Object.assign({}, Ht, e) : Ht;
}
function Ev(e, t) {
  if (!t || typeof t != "object") return {};
  if (!ge(e)) {
    let i = {};
    for (let o in t)
      switch (o) {
        case "filter.commentAfter":
          i.after = t[o];
          break;
        case "filter.commentBefore":
          i.before = t[o];
          break;
        case "filter.commentTrigger":
          i.trigger = t[o];
          break;
        default:
          break;
      }
    return { comment: i };
  }
  let n = typeof t?.["css.fuzzySearchMinScore"] == "number" ? t["css.fuzzySearchMinScore"] : 0.3;
  n > 1 ? (n = 1) : n < 0 && (n = 0);
  let r = { fuzzySearchMinScore: n };
  for (let i in t)
    switch (i) {
      case "css.floatUnit":
        r.floatUnit = t[i];
        break;
      case "css.intUnit":
        r.intUnit = t[i];
        break;
      case "css.unitAliases":
        let o = {};
        (t[i].split(",").forEach((s) => {
          if (!s || !s.trim() || !s.includes(":")) return;
          let a = s.substr(0, s.indexOf(":")),
            l = s.substr(a.length + 1);
          !a.trim() || !l || (o[a.trim()] = l);
        }),
          (r.unitAliases = o));
        break;
      case `${e}.valueSeparator`:
        r.between = t[i];
        break;
      case `${e}.propertyEnd`:
        r.after = t[i];
        break;
      default:
        break;
    }
  return { stylesheet: r };
}
function Av(e, t, n, r) {
  return cv(this, void 0, void 0, function* () {
    if ((uo(), !e.length)) return;
    let i = [];
    for (let o of e) {
      if (typeof o != "string") {
        console.warn("The following emmetExtensionsPath isn't a string: " + JSON.stringify(o));
        continue;
      }
      if (((o = o.trim()), o.length && o[0] === "~")) r && i.push(jt(r, o.substring(1)));
      else if (xl(o)) i.push(_t.file(o));
      else if (n) for (let s of n) i.push(jt(s, o));
    }
    for (let o of i) {
      try {
        if ((yield t.stat(o)).type !== Lt.Directory) continue;
      } catch {
        continue;
      }
      let s = jt(o, "snippets.json"),
        a = jt(o, "syntaxProfiles.json"),
        l;
      typeof globalThis.TextDecoder == "function"
        ? (l = new globalThis.TextDecoder())
        : (l = new ic.TextDecoder());
      let u = "";
      try {
        let f = yield t.readFile(s);
        u = l.decode(f);
      } catch {}
      if (u.length)
        try {
          let f = rc(s, u);
          (f.variables && Cv(f.variables), Pv(f));
        } catch (f) {
          throw (uo(), f);
        }
      let c = "";
      try {
        let f = yield t.readFile(a);
        c = l.decode(f);
      } catch {}
      if (c.length)
        try {
          let f = rc(a, c);
          Nv(f);
        } catch (f) {
          throw (uo(), f);
        }
    }
  });
}
function rc(e, t) {
  let n = [],
    r = ra(t, n);
  if (n.length)
    throw new Error(
      `Found error ${ia(n[0].error)} while parsing the file ${e} at offset ${n[0].offset}`,
    );
  return r;
}
function Cv(e) {
  if (typeof e == "object" && e) Ht = Object.assign({}, Ht, e);
  else
    throw new Error(
      dt.t(
        "Invalid emmet.variables field. See https://code.visualstudio.com/docs/editor/emmet#_emmet-configuration for a valid example.",
      ),
    );
}
function Nv(e) {
  if (typeof e == "object" && e) Qn = Object.assign({}, Qn, e);
  else
    throw new Error(
      dt.t(
        "Invalid syntax profile. See https://code.visualstudio.com/docs/editor/emmet#_emmet-configuration for a valid example.",
      ),
    );
}
function Pv(e) {
  if (typeof e == "object" && e)
    Object.keys(e).forEach((t) => {
      if (!e[t].snippets) return;
      let n = mo(t),
        r = e[t].snippets;
      if (
        (e[n] && e[n].snippets && n !== t && (r = Object.assign({}, e[n].snippets, e[t].snippets)),
        ge(t))
      ) {
        let a = ft.get(t),
          l = Object.assign([], a, Object.keys(r));
        ft.set(t, l);
      } else
        for (let a in r)
          r.hasOwnProperty(a) && r[a].startsWith("<") && r[a].endsWith(">") && (r[a] = `{${r[a]}}`);
      let i = He[t],
        o = ec(r),
        s = Object.assign({}, i, o);
      He[t] = s;
    });
  else
    throw new Error(
      dt.t(
        "Invalid snippets file. See https://code.visualstudio.com/docs/editor/emmet#_using-custom-emmet-snippets for a valid example.",
      ),
    );
}
function uo() {
  ((He = {}), Hn.clear(), ft.clear(), (Qn = {}), (Ht = {}));
}
function fc(e, t = []) {
  if (!(!e || t.includes(e))) {
    if (/\b(typescriptreact|javascriptreact|jsx-tags)\b/.test(e)) return "jsx";
    if (e === "sass-indented") return "sass";
    if (e === "jade") return "pug";
    if (qt.markup.includes(e) || qt.stylesheet.includes(e)) return e;
  }
}
var ic,
  cv,
  dt,
  Hn,
  co,
  ft,
  fv,
  dv,
  pv,
  nc,
  Vt,
  Mn,
  ao,
  qn,
  Vn,
  hv,
  He,
  Ht,
  Qn,
  po,
  pc = W(() => {
    oa();
    ic = require("util");
    ol();
    gl();
    vl();
    yl();
    Ku();
    tc();
    cv = function (e, t, n, r) {
      function i(o) {
        return o instanceof n
          ? o
          : new n(function (s) {
              s(o);
            });
      }
      return new (n || (n = Promise))(function (o, s) {
        function a(c) {
          try {
            u(r.next(c));
          } catch (f) {
            s(f);
          }
        }
        function l(c) {
          try {
            u(r.throw(c));
          } catch (f) {
            s(f);
          }
        }
        function u(c) {
          c.done ? o(c.value) : i(c.value).then(a, l);
        }
        u((r = r.apply(e, t || [])).next());
      });
    };
    try {
      dt = require("vscode").l10n;
    } catch {
      dt = { t: (t) => t };
    }
    ((Hn = new Map()),
      (ft = new Map()),
      (fv = /^[a-z,A-Z,!,(,[,#,\.\{]/),
      (dv = /^[a-z,A-Z,!,(,[,#,\.]/),
      (pv = /^-?[a-z,A-Z,!,@,#]/),
      (nc = /[a-z,A-Z\.]/),
      (Vt = [...Pi.tags, "lorem"]),
      (Mn = "bem"),
      (ao = "|"),
      (qn = "t"),
      (Vn = "c"),
      (hv = 3));
    ((He = {}), (Ht = {}), (Qn = {}), (po = (e, t) => `\${${e}${t ? ":" + t : ""}}`));
  });
function vc(e) {
  bc = e;
}
function We() {
  return (go || (go = (pc(), os(dc))), go);
}
function Xn(e = !1) {
  let t = We(),
    n = U.workspace.getConfiguration("emmet").get("extensionsPath");
  if ((n || (n = []), e || hc !== n)) {
    hc = n;
    let r = U.workspace.workspaceFolders?.length
        ? U.workspace.workspaceFolders.map((o) => o.uri)
        : void 0,
      i = U.workspace.fs;
    t.updateExtensionsPath(n, i, r, bc).catch((o) => {
      Array.isArray(n) && n.length && U.window.showErrorMessage(o.message);
    });
  }
}
function xc() {
  let e = U.workspace.getConfiguration().inspect("emmet.extensionsPath");
  (typeof e?.globalValue == "string"
    ? U.workspace.getConfiguration().update("emmet.extensionsPath", [e.globalValue], !0)
    : e?.globalValue === null &&
      U.workspace.getConfiguration().update("emmet.extensionsPath", [], !0),
    typeof e?.workspaceValue == "string"
      ? U.workspace.getConfiguration().update("emmet.extensionsPath", [e.workspaceValue], !1)
      : e?.workspaceValue === null &&
        U.workspace.getConfiguration().update("emmet.extensionsPath", [], !1),
    typeof e?.workspaceFolderValue == "string"
      ? U.workspace.getConfiguration().update("emmet.extensionsPath", [e.workspaceFolderValue])
      : e?.workspaceFolderValue === null &&
        U.workspace.getConfiguration().update("emmet.extensionsPath", []));
}
function X(e) {
  return ["css", "scss", "sass", "less", "stylus"].includes(e);
}
function G(e = !0) {
  let t = U.window.activeTextEditor;
  return t
    ? !(!e && X(t.document.languageId))
    : (U.window.showInformationMessage("No editor is active"), !1);
}
function ht() {
  let e = { handlebars: "html", php: "html" },
    t = {},
    n = U.workspace.getConfiguration("emmet").get("includeLanguages"),
    r = Object.assign({}, e, n ?? {});
  return (
    Object.keys(r).forEach((i) => {
      typeof r[i] == "string" && Wt[r[i]] && (t[i] = r[i]);
    }),
    t
  );
}
function we(e, t, n) {
  if (!e || n.includes(e)) return;
  (e === "jsx-tags" && (e = "javascriptreact"),
    t[e] && (e = t[e]),
    /\b(typescriptreact|javascriptreact|jsx-tags)\b/.test(e)
      ? (e = "jsx")
      : e === "sass-indented"
        ? (e = "sass")
        : (e === "jade" || e === "pug") && (e = "pug"));
  let r = tr();
  if (r.markup.includes(e) || r.stylesheet.includes(e)) return e;
}
function Yn(e, t) {
  let n = e.languageId === "css",
    r = e.offsetAt(t),
    i = 0,
    o = e.getText().length,
    s = r - 5e3,
    a = s > 0 ? s : i,
    l = new fn(e, r);
  function u(y) {
    let v = e.getText().substring(0, y).lastIndexOf("/*");
    if (v !== -1) return v;
  }
  function c(y) {
    let v = e.getText().substring(y).indexOf("*/");
    if (v !== -1) return ((v += 2 + y), v);
  }
  function f() {
    let y = e.positionAt(l.pos).line;
    if (!n && x !== y) {
      x = y;
      let m = e.lineAt(x).text.indexOf("//");
      m > -1 && (l.pos = e.offsetAt(new U.Position(x, m)));
    }
  }
  function h() {
    !l.sof() && l.peek() === pt && (l.backUp(1) === gc ? (l.pos = u(l.pos) ?? i) : l.next());
  }
  function p() {
    if (l.eat(pt))
      if (l.eat(pt) && !n) {
        let y = e.positionAt(l.pos).line;
        l.pos = e.offsetAt(new U.Position(y + 1, 0));
      } else l.eat(gc) && (l.pos = c(l.pos) ?? o);
  }
  for (; !l.eof() && !l.eat(bo);) l.peek() === pt ? p() : l.next();
  (l.eof() || (o = l.pos), (l.pos = r));
  let k = 1,
    x = t.line,
    w = !1;
  for (; !w && k > 0 && !l.sof();) {
    switch ((f(), l.backUp(1))) {
      case mc:
        k--;
        break;
      case bo:
        n ? (l.next(), (i = l.pos), (w = !0)) : k++;
        break;
      case pt:
        h();
        break;
      default:
        break;
    }
    (t.line - e.positionAt(l.pos).line > 100 || l.pos <= a) && (w = !0);
  }
  ((x = e.positionAt(l.pos).line), (k = 0));
  let S = !1;
  for (; !w && !l.sof() && !S && k >= 0;) {
    f();
    let y = l.backUp(1);
    if (!/\s/.test(String.fromCharCode(y))) {
      switch (y) {
        case pt:
          h();
          break;
        case bo:
          k++;
          break;
        case mc:
          k--;
          break;
        default:
          k || (S = !0);
          break;
      }
      !l.sof() && S && (i = l.pos);
    }
  }
  try {
    let y = " ".repeat(i) + e.getText().substring(i, o);
    return ve(y);
  } catch {
    return;
  }
}
function B(e, t, n) {
  if (!e) return;
  function r(o) {
    if (!o) return;
    let s = o.start,
      a = o.end;
    if ((s < t && a > t) || (n && s <= t && a >= t)) return i(o.children) ?? o;
    if ("close" in o) {
      let l = o;
      if (l.open && !l.close) return i(l.children);
    }
  }
  function i(o) {
    for (let s = 0; s < o.length; s++) {
      let a = r(o[s]);
      if (a) return a;
    }
  }
  return i(e.children);
}
function H(e, t, n, r) {
  let i = B(t, n, r);
  if (i) {
    if (i.name === "script" && i.children.length === 0) {
      let o = Iv(e, i);
      o && (i = H(o, i, n, r) ?? i);
    } else if (i.type === "cdata") {
      let o = Ov(e, i);
      i = H(o, i, n, r) ?? i;
    }
    return i;
  }
}
function Iv(e, t) {
  if (
    t.name === "script" &&
    t.attributes &&
    t.attributes.some((r) => r.name.toString() === "type" && Gt.includes(r.value.toString())) &&
    t.open
  ) {
    let r = " ".repeat(t.open.end),
      i = t.close ? t.close.start : t.end,
      o = r + e.substring(t.open.end, i);
    return (
      Tt(o).children.forEach((a) => {
        (t.children.push(a), (a.parent = t));
      }),
      o
    );
  }
  return "";
}
function Ov(e, t) {
  let i = t.start + "<![CDATA[".length,
    o = t.end - 3,
    a = " ".repeat(i) + e.substring(i, o);
  return (
    Tt(a).children.forEach((u) => {
      (t.children.push(u), (u.parent = t));
    }),
    a
  );
}
function vo(e, t) {
  let n = e;
  return !!(
    (n.open && t > n.open.start && t < n.open.end) ||
    (n.close && t > n.close.start && t < n.close.end)
  );
}
function z(e, t, n) {
  let r = e.positionAt(t),
    i = e.positionAt(n);
  return new U.Selection(r, i);
}
function D(e, t, n) {
  let r = e.positionAt(t),
    i = e.positionAt(n);
  return new U.Range(r, i);
}
function mt(e) {
  if (!e || !e.children || e.children.length === 0 || !e.children.find((t) => t.type !== "comment"))
    return e;
  for (let t = e.children.length - 1; t >= 0; t--)
    if (e.children[t].type !== "comment") return mt(e.children[t]);
}
function Zn(e, t) {
  let n = t === -1,
    r = !1,
    i = !1,
    o,
    s;
  for (; t < e.length - 1;) {
    if ((t++, !n)) {
      e[t] === " " && (n = !0);
      continue;
    }
    if (!(n && !r && e[t] === " ")) {
      if (!r) {
        ((o = t), (r = !0));
        continue;
      }
      if (e[t] === " ") {
        ((s = t), (i = !0));
        break;
      }
    }
  }
  return (r && !i && (s = e.length), [o, s]);
}
function Kn(e, t) {
  let n = t === e.length,
    r = !1,
    i = !1,
    o,
    s;
  for (; t > -1;) {
    if ((t--, !n)) {
      e[t] === " " && (n = !0);
      continue;
    }
    if (!(n && !i && e[t] === " ")) {
      if (!i) {
        ((s = t + 1), (i = !0));
        continue;
      }
      if (e[t] === " ") {
        ((o = t + 1), (r = !0));
        break;
      }
    }
  }
  return (i && !r && (o = 0), [o, s]);
}
function yc(e, t) {
  if (Jn(e, t)) return [e];
  if (!Jn(e.parent, t.parent)) {
    if (t.start < e.start) return [t];
    if (t.start < e.end) return [e];
    for (; e.parent && e.parent.end < t.start;) e = e.parent;
    for (; t.parent && t.parent.start > e.start;) t = t.parent;
  }
  let n = [],
    r = e,
    i = t.end;
  for (; r && i > r.start;) (n.push(r), (r = r.nextSibling));
  return n;
}
function Jn(e, t) {
  return !e && !t ? !0 : !e || !t ? !1 : e.start === t.start && e.end === t.end;
}
function gt(e) {
  let t = U.workspace.getConfiguration("emmet"),
    n = Object.assign({}, t.syntaxProfiles || {}),
    r = Object.assign({}, t.preferences || {});
  return (
    (e === "jsx" || e === "xml" || e === "xsl") &&
      ((n[e] = n[e] || {}),
      typeof n[e] == "object" &&
        !n[e].hasOwnProperty("self_closing_tag") &&
        !n[e].hasOwnProperty("selfClosingStyle") &&
        (n[e] = { ...n[e], selfClosingStyle: e === "jsx" ? "xhtml" : "xml" })),
    {
      preferences: r,
      showExpandedAbbreviation: t.showExpandedAbbreviation,
      showAbbreviationSuggestions: t.showAbbreviationSuggestions,
      syntaxProfiles: n,
      variables: t.variables,
      excludeLanguages: t.excludeLanguages,
      showSuggestionsAsSnippets: t.showSuggestionsAsSnippets,
    }
  );
}
function xo(e, t) {
  for (let n = 0, r = e.size; n < r; n++)
    if (t(e.item(n)) === !1 || xo(e.item(n), t) === !1) return !1;
  return !0;
}
function Qt(e, t) {
  return e.children.find((n) => n.type === "property" && n.name === t);
}
function wc(e, t) {
  let n = e.document,
    r = R(n, !0),
    i = n.offsetAt(t),
    o = B(r, i, !0);
  if (X(e.document.languageId)) return o && o.type === "property" ? o : null;
  let s = o;
  if (s && s.name === "style" && s.open && s.close && s.open.end < i && s.close.start > i) {
    let a = " ".repeat(s.start) + n.getText().substring(s.start, s.end),
      l = ve(a),
      u = B(l, i, !0);
    return u && u.type === "property" ? u : null;
  }
  return null;
}
function er(e, t, n) {
  if (!t) return;
  let r = t;
  if (r && r.open && r.close) {
    let i = e.offsetAt(n);
    if (r.open.end < i && i <= r.close.start && r.name === "style") {
      let o = " ".repeat(r.open.end) + e.getText().substring(r.open.end, r.close.start);
      return ve(o);
    }
  }
}
function kc(e, t) {
  if (!e) return !1;
  let n = e,
    r = (n.attributes || []).findIndex((o) => o.name.toString() === "style");
  if (r === -1) return !1;
  let i = n.attributes[r];
  return t >= i.value.start && t <= i.value.end;
}
function Jt(e) {
  return pn.create(e.uri.toString(), e.languageId, e.version, e.getText());
}
function Sc(e) {
  let t = e.split("/").pop();
  return (t ? t.split("\\").pop() : "") ?? "";
}
function tr() {
  return {
    markup: ["html", "xml", "xsl", "jsx", "js", "pug", "slim", "haml"],
    stylesheet: ["css", "sass", "scss", "less", "sss", "stylus"],
  };
}
var U,
  go,
  hc,
  bc,
  Wt,
  bo,
  mc,
  pt,
  gc,
  Gt,
  Z = W(() => {
    "use strict";
    U = q(require("vscode"));
    Jr();
    Ct();
    Gs();
    Ys();
    ie();
    Wt = {
      html: [
        "!",
        ".",
        "}",
        ":",
        "*",
        "$",
        "]",
        "/",
        ">",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      jade: [
        "!",
        ".",
        "}",
        ":",
        "*",
        "$",
        "]",
        "/",
        ">",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      slim: [
        "!",
        ".",
        "}",
        ":",
        "*",
        "$",
        "]",
        "/",
        ">",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      haml: [
        "!",
        ".",
        "}",
        ":",
        "*",
        "$",
        "]",
        "/",
        ">",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      xml: [".", "}", "*", "$", "]", "/", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      xsl: [
        "!",
        ".",
        "}",
        "*",
        "$",
        "/",
        "]",
        ">",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      css: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      scss: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      sass: [":", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      less: [":", "!", "-", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      stylus: [":", "!", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      javascriptreact: [
        "!",
        ".",
        "}",
        "*",
        "$",
        "]",
        "/",
        ">",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      typescriptreact: [
        "!",
        ".",
        "}",
        "*",
        "$",
        "]",
        "/",
        ">",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
    };
    ((bo = 125), (mc = 123), (pt = 47), (gc = 42));
    Gt = ["text/html", "text/plain", "text/x-template", "text/template", "text/ng-template"];
  });
var nf = M((r1, Fo) => {
  typeof Object.create == "function"
    ? (Fo.exports = function (t, n) {
        n &&
          ((t.super_ = n),
          (t.prototype = Object.create(n.prototype, {
            constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
          })));
      })
    : (Fo.exports = function (t, n) {
        if (n) {
          t.super_ = n;
          var r = function () {};
          ((r.prototype = n.prototype), (t.prototype = new r()), (t.prototype.constructor = t));
        }
      });
});
var rf = M((i1, Do) => {
  try {
    if (((zo = require("util")), typeof zo.inherits != "function")) throw "";
    Do.exports = zo.inherits;
  } catch {
    Do.exports = nf();
  }
  var zo;
});
var sf = M((o1, Bo) => {
  var hx = rf(),
    of = require("events").EventEmitter;
  Bo.exports = le;
  Bo.exports.default = le;
  function le(e) {
    if (!(this instanceof le)) return new le(e);
    (of.call(this),
      (e = e || {}),
      (this.concurrency = e.concurrency || 1 / 0),
      (this.timeout = e.timeout || 0),
      (this.autostart = e.autostart || !1),
      (this.results = e.results || null),
      (this.pending = 0),
      (this.session = 0),
      (this.running = !1),
      (this.jobs = []),
      (this.timers = {}));
  }
  hx(le, of);
  var mx = ["pop", "shift", "indexOf", "lastIndexOf"];
  mx.forEach(function (e) {
    le.prototype[e] = function () {
      return Array.prototype[e].apply(this.jobs, arguments);
    };
  });
  le.prototype.slice = function (e, t) {
    return ((this.jobs = this.jobs.slice(e, t)), this);
  };
  le.prototype.reverse = function () {
    return (this.jobs.reverse(), this);
  };
  var gx = ["push", "unshift", "splice"];
  gx.forEach(function (e) {
    le.prototype[e] = function () {
      var t = Array.prototype[e].apply(this.jobs, arguments);
      return (this.autostart && this.start(), t);
    };
  });
  Object.defineProperty(le.prototype, "length", {
    get: function () {
      return this.pending + this.jobs.length;
    },
  });
  le.prototype.start = function (e) {
    if ((e && vx.call(this, e), (this.running = !0), this.pending >= this.concurrency)) return;
    if (this.jobs.length === 0) {
      this.pending === 0 && Uo.call(this);
      return;
    }
    var t = this,
      n = this.jobs.shift(),
      r = !0,
      i = this.session,
      o = null,
      s = !1,
      a = null,
      l = n.hasOwnProperty("timeout") ? n.timeout : this.timeout;
    function u(f, h) {
      r &&
        t.session === i &&
        ((r = !1),
        t.pending--,
        o !== null && (delete t.timers[o], clearTimeout(o)),
        f
          ? t.emit("error", f, n)
          : s === !1 &&
            (a !== null && (t.results[a] = Array.prototype.slice.call(arguments, 1)),
            t.emit("success", h, n)),
        t.session === i &&
          (t.pending === 0 && t.jobs.length === 0 ? Uo.call(t) : t.running && t.start()));
    }
    (l &&
      ((o = setTimeout(function () {
        ((s = !0), t.listeners("timeout").length > 0 ? t.emit("timeout", u, n) : u());
      }, l)),
      (this.timers[o] = o)),
      this.results && ((a = this.results.length), (this.results[a] = null)),
      this.pending++,
      t.emit("start", n));
    var c = n(u);
    (c &&
      c.then &&
      typeof c.then == "function" &&
      c
        .then(function (f) {
          return u(null, f);
        })
        .catch(function (f) {
          return u(f || !0);
        }),
      this.running && this.jobs.length > 0 && this.start());
  };
  le.prototype.stop = function () {
    this.running = !1;
  };
  le.prototype.end = function (e) {
    (bx.call(this), (this.jobs.length = 0), (this.pending = 0), Uo.call(this, e));
  };
  function bx() {
    for (var e in this.timers) {
      var t = this.timers[e];
      (delete this.timers[e], clearTimeout(t));
    }
  }
  function vx(e) {
    var t = this;
    (this.on("error", n), this.on("end", r));
    function n(i) {
      t.end(i);
    }
    function r(i) {
      (t.removeListener("error", n), t.removeListener("end", r), e(i, this.results));
    }
  }
  function Uo(e) {
    (this.session++, (this.running = !1), this.emit("end", e));
  }
});
var af = M((pr) => {
  "use strict";
  Object.defineProperty(pr, "__esModule", { value: !0 });
  pr.BMP = void 0;
  pr.BMP = {
    validate(e) {
      return e.toString("ascii", 0, 2) === "BM";
    },
    calculate(e) {
      return { height: Math.abs(e.readInt32LE(22)), width: e.readUInt32LE(18) };
    },
  };
});
var Mo = M((hr) => {
  "use strict";
  Object.defineProperty(hr, "__esModule", { value: !0 });
  hr.ICO = void 0;
  var xx = 1,
    yx = 6,
    wx = 16;
  function lf(e, t) {
    let n = e.readUInt8(t);
    return n === 0 ? 256 : n;
  }
  function uf(e, t) {
    let n = yx + t * wx;
    return { height: lf(e, n + 1), width: lf(e, n) };
  }
  hr.ICO = {
    validate(e) {
      let t = e.readUInt16LE(0),
        n = e.readUInt16LE(4);
      return t !== 0 || n === 0 ? !1 : e.readUInt16LE(2) === xx;
    },
    calculate(e) {
      let t = e.readUInt16LE(4),
        n = uf(e, 0);
      if (t === 1) return n;
      let r = [n];
      for (let o = 1; o < t; o += 1) r.push(uf(e, o));
      return { height: n.height, images: r, width: n.width };
    },
  };
});
var cf = M((mr) => {
  "use strict";
  Object.defineProperty(mr, "__esModule", { value: !0 });
  mr.CUR = void 0;
  var kx = Mo(),
    Sx = 2;
  mr.CUR = {
    validate(e) {
      let t = e.readUInt16LE(0),
        n = e.readUInt16LE(4);
      return t !== 0 || n === 0 ? !1 : e.readUInt16LE(2) === Sx;
    },
    calculate(e) {
      return kx.ICO.calculate(e);
    },
  };
});
var ff = M((gr) => {
  "use strict";
  Object.defineProperty(gr, "__esModule", { value: !0 });
  gr.DDS = void 0;
  gr.DDS = {
    validate(e) {
      return e.readUInt32LE(0) === 542327876;
    },
    calculate(e) {
      return { height: e.readUInt32LE(12), width: e.readUInt32LE(16) };
    },
  };
});
var df = M((br) => {
  "use strict";
  Object.defineProperty(br, "__esModule", { value: !0 });
  br.GIF = void 0;
  var Tx = /^GIF8[79]a/;
  br.GIF = {
    validate(e) {
      let t = e.toString("ascii", 0, 6);
      return Tx.test(t);
    },
    calculate(e) {
      return { height: e.readUInt16LE(8), width: e.readUInt16LE(6) };
    },
  };
});
var mf = M((vr) => {
  "use strict";
  Object.defineProperty(vr, "__esModule", { value: !0 });
  vr.ICNS = void 0;
  var Ex = 8,
    Ax = 4,
    Cx = 4,
    Nx = {
      ICON: 32,
      "ICN#": 32,
      "icm#": 16,
      icm4: 16,
      icm8: 16,
      "ics#": 16,
      ics4: 16,
      ics8: 16,
      is32: 16,
      s8mk: 16,
      icp4: 16,
      icl4: 32,
      icl8: 32,
      il32: 32,
      l8mk: 32,
      icp5: 32,
      ic11: 32,
      ich4: 48,
      ich8: 48,
      ih32: 48,
      h8mk: 48,
      icp6: 64,
      ic12: 32,
      it32: 128,
      t8mk: 128,
      ic07: 128,
      ic08: 256,
      ic13: 256,
      ic09: 512,
      ic14: 512,
      ic10: 1024,
    };
  function pf(e, t) {
    let n = t + Cx;
    return [e.toString("ascii", t, n), e.readUInt32BE(n)];
  }
  function hf(e) {
    let t = Nx[e];
    return { width: t, height: t, type: e };
  }
  vr.ICNS = {
    validate(e) {
      return e.toString("ascii", 0, 4) === "icns";
    },
    calculate(e) {
      let t = e.length,
        n = e.readUInt32BE(Ax),
        r = Ex,
        i = pf(e, r),
        o = hf(i[0]);
      if (((r += i[1]), r === n)) return o;
      let s = { height: o.height, images: [o], width: o.width };
      for (; r < n && r < t;) ((i = pf(e, r)), (o = hf(i[0])), (r += i[1]), s.images.push(o));
      return s;
    },
  };
});
var gf = M((xr) => {
  "use strict";
  Object.defineProperty(xr, "__esModule", { value: !0 });
  xr.J2C = void 0;
  xr.J2C = {
    validate(e) {
      return e.toString("hex", 0, 4) === "ff4fff51";
    },
    calculate(e) {
      return { height: e.readUInt32BE(12), width: e.readUInt32BE(8) };
    },
  };
});
var vf = M((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: !0 });
  wr.JP2 = void 0;
  var yr = {
      ftyp: "66747970",
      ihdr: "69686472",
      jp2h: "6a703268",
      jp__: "6a502020",
      rreq: "72726571",
      xml_: "786d6c20",
    },
    Px = (e) => {
      let t = e.readUInt8(0),
        n = 1 + 2 * t,
        i = e.readUInt16BE(n) * (2 + t);
      n = n + 2 + i;
      let s = e.readUInt16BE(n) * (16 + t);
      return n + 2 + s;
    },
    bf = (e) => ({ height: e.readUInt32BE(4), width: e.readUInt32BE(8) });
  wr.JP2 = {
    validate(e) {
      let t = e.toString("hex", 4, 8),
        n = e.readUInt32BE(0);
      if (t !== yr.jp__ || n < 1) return !1;
      let r = n + 4,
        i = e.readUInt32BE(n);
      return e.slice(r, r + i).toString("hex", 0, 4) === yr.ftyp;
    },
    calculate(e) {
      let t = e.readUInt32BE(0),
        n = e.readUInt16BE(t + 2),
        r = t + 4 + n;
      switch (e.toString("hex", r, r + 4)) {
        case yr.rreq:
          return ((r = r + 4 + 4 + Px(e.slice(r + 4))), bf(e.slice(r + 8, r + 24)));
        case yr.jp2h:
          return bf(e.slice(r + 8, r + 24));
        default:
          throw new TypeError("Unsupported header found: " + e.toString("ascii", r, r + 4));
      }
    },
  };
});
var qo = M((kr) => {
  "use strict";
  Object.defineProperty(kr, "__esModule", { value: !0 });
  kr.readUInt = void 0;
  function Ix(e, t, n, r) {
    n = n || 0;
    let i = r ? "BE" : "LE",
      o = "readUInt" + t + i;
    return e[o].call(e, n);
  }
  kr.readUInt = Ix;
});
var yf = M((Sr) => {
  "use strict";
  Object.defineProperty(Sr, "__esModule", { value: !0 });
  Sr.JPG = void 0;
  var en = qo(),
    Ox = "45786966",
    $x = 2,
    Vo = 6,
    Rx = 2,
    _x = "4d4d",
    Lx = "4949",
    xf = 12,
    jx = 2;
  function Fx(e) {
    return e.toString("hex", 2, 6) === Ox;
  }
  function zx(e, t) {
    return { height: e.readUInt16BE(t), width: e.readUInt16BE(t + 2) };
  }
  function Dx(e, t) {
    let r = Vo + 8,
      i = (0, en.readUInt)(e, 16, r, t);
    for (let o = 0; o < i; o++) {
      let s = r + jx + o * xf,
        a = s + xf;
      if (s > e.length) return;
      let l = e.slice(s, a);
      if ((0, en.readUInt)(l, 16, 0, t) === 274)
        return (0, en.readUInt)(l, 16, 2, t) !== 3 || (0, en.readUInt)(l, 32, 4, t) !== 1
          ? void 0
          : (0, en.readUInt)(l, 16, 8, t);
    }
  }
  function Ux(e, t) {
    let n = e.slice($x, t),
      r = n.toString("hex", Vo, Vo + Rx),
      i = r === _x;
    if (i || r === Lx) return Dx(n, i);
  }
  function Bx(e, t) {
    if (t > e.length) throw new TypeError("Corrupt JPG, exceeded buffer limits");
    if (e[t] !== 255) throw new TypeError("Invalid JPG, marker table corrupted");
  }
  Sr.JPG = {
    validate(e) {
      return e.toString("hex", 0, 2) === "ffd8";
    },
    calculate(e) {
      e = e.slice(4);
      let t, n;
      for (; e.length;) {
        let r = e.readUInt16BE(0);
        if (
          (Fx(e) && (t = Ux(e, r)), Bx(e, r), (n = e[r + 1]), n === 192 || n === 193 || n === 194)
        ) {
          let i = zx(e, r + 5);
          return t ? { height: i.height, orientation: t, width: i.width } : i;
        }
        e = e.slice(r + 2);
      }
      throw new TypeError("Invalid JPG, no size found");
    },
  };
});
var wf = M((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  Tr.KTX = void 0;
  var Mx = "KTX 11";
  Tr.KTX = {
    validate(e) {
      return Mx === e.toString("ascii", 1, 7);
    },
    calculate(e) {
      return { height: e.readUInt32LE(40), width: e.readUInt32LE(36) };
    },
  };
});
var Sf = M((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: !0 });
  Er.PNG = void 0;
  var qx = `PNG\r

`,
    Vx = "IHDR",
    kf = "CgBI";
  Er.PNG = {
    validate(e) {
      if (qx === e.toString("ascii", 1, 8)) {
        let t = e.toString("ascii", 12, 16);
        if ((t === kf && (t = e.toString("ascii", 28, 32)), t !== Vx))
          throw new TypeError("Invalid PNG");
        return !0;
      }
      return !1;
    },
    calculate(e) {
      return e.toString("ascii", 12, 16) === kf
        ? { height: e.readUInt32BE(36), width: e.readUInt32BE(32) }
        : { height: e.readUInt32BE(20), width: e.readUInt32BE(16) };
    },
  };
});
var Af = M((Ar) => {
  "use strict";
  Object.defineProperty(Ar, "__esModule", { value: !0 });
  Ar.PNM = void 0;
  var Ef = {
      P1: "pbm/ascii",
      P2: "pgm/ascii",
      P3: "ppm/ascii",
      P4: "pbm",
      P5: "pgm",
      P6: "ppm",
      P7: "pam",
      PF: "pfm",
    },
    Hx = Object.keys(Ef),
    Tf = {
      default: (e) => {
        let t = [];
        for (; e.length > 0;) {
          let n = e.shift();
          if (n[0] !== "#") {
            t = n.split(" ");
            break;
          }
        }
        if (t.length === 2) return { height: parseInt(t[1], 10), width: parseInt(t[0], 10) };
        throw new TypeError("Invalid PNM");
      },
      pam: (e) => {
        let t = {};
        for (; e.length > 0;) {
          let n = e.shift();
          if (n.length > 16 || n.charCodeAt(0) > 128) continue;
          let [r, i] = n.split(" ");
          if ((r && i && (t[r.toLowerCase()] = parseInt(i, 10)), t.height && t.width)) break;
        }
        if (t.height && t.width) return { height: t.height, width: t.width };
        throw new TypeError("Invalid PAM");
      },
    };
  Ar.PNM = {
    validate(e) {
      let t = e.toString("ascii", 0, 2);
      return Hx.includes(t);
    },
    calculate(e) {
      let t = e.toString("ascii", 0, 2),
        n = Ef[t],
        r = e.toString("ascii", 3).split(/[\r\n]+/);
      return (Tf[n] || Tf.default)(r);
    },
  };
});
var Cf = M((Cr) => {
  "use strict";
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  Cr.PSD = void 0;
  Cr.PSD = {
    validate(e) {
      return e.toString("ascii", 0, 4) === "8BPS";
    },
    calculate(e) {
      return { height: e.readUInt32BE(14), width: e.readUInt32BE(18) };
    },
  };
});
var If = M((Ir) => {
  "use strict";
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  Ir.SVG = void 0;
  var Nf = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/,
    Nr = {
      height: /\sheight=(['"])([^%]+?)\1/,
      root: Nf,
      viewbox: /\sviewBox=(['"])(.+?)\1/i,
      width: /\swidth=(['"])([^%]+?)\1/,
    },
    Ho = 2.54,
    Pf = {
      in: 96,
      cm: 96 / Ho,
      em: 16,
      ex: 8,
      m: (96 / Ho) * 100,
      mm: 96 / Ho / 10,
      pc: 96 / 72 / 12,
      pt: 96 / 72,
      px: 1,
    },
    Wx = new RegExp(`^([0-9.]+(?:e\\d+)?)(${Object.keys(Pf).join("|")})?$`);
  function Pr(e) {
    let t = Wx.exec(e);
    if (t) return Math.round(Number(t[1]) * (Pf[t[2]] || 1));
  }
  function Gx(e) {
    let t = e.split(" ");
    return { height: Pr(t[3]), width: Pr(t[2]) };
  }
  function Qx(e) {
    let t = e.match(Nr.width),
      n = e.match(Nr.height),
      r = e.match(Nr.viewbox);
    return { height: n && Pr(n[2]), viewbox: r && Gx(r[2]), width: t && Pr(t[2]) };
  }
  function Jx(e) {
    return { height: e.height, width: e.width };
  }
  function Xx(e, t) {
    let n = t.width / t.height;
    return e.width
      ? { height: Math.floor(e.width / n), width: e.width }
      : e.height
        ? { height: e.height, width: Math.floor(e.height * n) }
        : { height: t.height, width: t.width };
  }
  Ir.SVG = {
    validate(e) {
      let t = String(e);
      return Nf.test(t);
    },
    calculate(e) {
      let t = e.toString("utf8").match(Nr.root);
      if (t) {
        let n = Qx(t[0]);
        if (n.width && n.height) return Jx(n);
        if (n.viewbox) return Xx(n, n.viewbox);
      }
      throw new TypeError("Invalid SVG");
    },
  };
});
var Of = M((Or) => {
  "use strict";
  Object.defineProperty(Or, "__esModule", { value: !0 });
  Or.TGA = void 0;
  Or.TGA = {
    validate(e) {
      return e.readUInt16LE(0) === 0 && e.readUInt16LE(4) === 0;
    },
    calculate(e) {
      return { height: e.readUInt16LE(14), width: e.readUInt16LE(12) };
    },
  };
});
var $f = M((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  Rr.TIFF = void 0;
  var $r = require("fs"),
    wt = qo();
  function Yx(e, t, n) {
    let r = (0, wt.readUInt)(e, 32, 4, n),
      i = 1024,
      o = $r.statSync(t).size;
    r + i > o && (i = o - r - 10);
    let s = Buffer.alloc(i),
      a = $r.openSync(t, "r");
    return ($r.readSync(a, s, 0, i, r), $r.closeSync(a), s.slice(2));
  }
  function Zx(e, t) {
    let n = (0, wt.readUInt)(e, 16, 8, t);
    return ((0, wt.readUInt)(e, 16, 10, t) << 16) + n;
  }
  function Kx(e) {
    if (e.length > 24) return e.slice(12);
  }
  function ey(e, t) {
    let n = {},
      r = e;
    for (; r && r.length;) {
      let i = (0, wt.readUInt)(r, 16, 0, t),
        o = (0, wt.readUInt)(r, 16, 2, t),
        s = (0, wt.readUInt)(r, 32, 4, t);
      if (i === 0) break;
      (s === 1 && (o === 3 || o === 4) && (n[i] = Zx(r, t)), (r = Kx(r)));
    }
    return n;
  }
  function ty(e) {
    let t = e.toString("ascii", 0, 2);
    if (t === "II") return "LE";
    if (t === "MM") return "BE";
  }
  var ny = ["49492a00", "4d4d002a"];
  Rr.TIFF = {
    validate(e) {
      return ny.includes(e.toString("hex", 0, 4));
    },
    calculate(e, t) {
      if (!t) throw new TypeError("Tiff doesn't support buffer");
      let n = ty(e) === "BE",
        r = Yx(e, t, n),
        i = ey(r, n),
        o = i[256],
        s = i[257];
      if (!o || !s) throw new TypeError("Invalid Tiff. Missing tags");
      return { height: s, width: o };
    },
  };
});
var Rf = M((_r) => {
  "use strict";
  Object.defineProperty(_r, "__esModule", { value: !0 });
  _r.WEBP = void 0;
  function ry(e) {
    return { height: 1 + e.readUIntLE(7, 3), width: 1 + e.readUIntLE(4, 3) };
  }
  function iy(e) {
    return {
      height: 1 + (((e[4] & 15) << 10) | (e[3] << 2) | ((e[2] & 192) >> 6)),
      width: 1 + (((e[2] & 63) << 8) | e[1]),
    };
  }
  function oy(e) {
    return { height: e.readInt16LE(8) & 16383, width: e.readInt16LE(6) & 16383 };
  }
  _r.WEBP = {
    validate(e) {
      let t = e.toString("ascii", 0, 4) === "RIFF",
        n = e.toString("ascii", 8, 12) === "WEBP",
        r = e.toString("ascii", 12, 15) === "VP8";
      return t && n && r;
    },
    calculate(e) {
      let t = e.toString("ascii", 12, 16);
      if (((e = e.slice(20, 30)), t === "VP8X")) {
        let r = e[0],
          i = (r & 192) === 0,
          o = (r & 1) === 0;
        if (i && o) return ry(e);
        throw new TypeError("Invalid WebP");
      }
      if (t === "VP8 " && e[0] !== 47) return oy(e);
      let n = e.toString("hex", 3, 6);
      if (t === "VP8L" && n !== "9d012a") return iy(e);
      throw new TypeError("Invalid WebP");
    },
  };
});
var Wo = M((Lr) => {
  "use strict";
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  Lr.typeHandlers = void 0;
  var sy = af(),
    ay = cf(),
    ly = ff(),
    uy = df(),
    cy = mf(),
    fy = Mo(),
    dy = gf(),
    py = vf(),
    hy = yf(),
    my = wf(),
    gy = Sf(),
    by = Af(),
    vy = Cf(),
    xy = If(),
    yy = Of(),
    wy = $f(),
    ky = Rf();
  Lr.typeHandlers = {
    bmp: sy.BMP,
    cur: ay.CUR,
    dds: ly.DDS,
    gif: uy.GIF,
    icns: cy.ICNS,
    ico: fy.ICO,
    j2c: dy.J2C,
    jp2: py.JP2,
    jpg: hy.JPG,
    ktx: my.KTX,
    png: gy.PNG,
    pnm: by.PNM,
    psd: vy.PSD,
    svg: xy.SVG,
    tga: yy.TGA,
    tiff: wy.TIFF,
    webp: ky.WEBP,
  };
});
var Lf = M((jr) => {
  "use strict";
  Object.defineProperty(jr, "__esModule", { value: !0 });
  jr.detector = void 0;
  var Go = Wo(),
    Sy = Object.keys(Go.typeHandlers),
    _f = {
      56: "psd",
      66: "bmp",
      68: "dds",
      71: "gif",
      73: "tiff",
      77: "tiff",
      82: "webp",
      105: "icns",
      137: "png",
      255: "jpg",
    };
  function Ty(e) {
    let t = e[0];
    if (t in _f) {
      let r = _f[t];
      if (r && Go.typeHandlers[r].validate(e)) return r;
    }
    let n = (r) => Go.typeHandlers[r].validate(e);
    return Sy.find(n);
  }
  jr.detector = Ty;
});
var Df = M((se, zf) => {
  "use strict";
  Object.defineProperty(se, "__esModule", { value: !0 });
  se.types = se.setConcurrency = se.disableTypes = se.disableFS = se.imageSize = void 0;
  var tn = require("fs"),
    Ey = require("path"),
    Ay = sf(),
    Jo = Wo(),
    Cy = Lf(),
    jf = 512 * 1024,
    Ff = new Ay.default({ concurrency: 100, autostart: !0 }),
    Fr = { disabledFS: !1, disabledTypes: [] };
  function Qo(e, t) {
    let n = (0, Cy.detector)(e);
    if (typeof n < "u") {
      if (Fr.disabledTypes.indexOf(n) > -1) throw new TypeError("disabled file type: " + n);
      if (n in Jo.typeHandlers) {
        let r = Jo.typeHandlers[n].calculate(e, t);
        if (r !== void 0) return ((r.type = n), r);
      }
    }
    throw new TypeError("unsupported file type: " + n + " (file: " + t + ")");
  }
  async function Ny(e) {
    let t = await tn.promises.open(e, "r");
    try {
      let { size: n } = await t.stat();
      if (n <= 0) throw new Error("Empty file");
      let r = Math.min(n, jf),
        i = Buffer.alloc(r);
      return (await t.read(i, 0, r, 0), i);
    } finally {
      await t.close();
    }
  }
  function Py(e) {
    let t = tn.openSync(e, "r");
    try {
      let { size: n } = tn.fstatSync(t);
      if (n <= 0) throw new Error("Empty file");
      let r = Math.min(n, jf),
        i = Buffer.alloc(r);
      return (tn.readSync(t, i, 0, r, 0), i);
    } finally {
      tn.closeSync(t);
    }
  }
  zf.exports = se = Xo;
  se.default = Xo;
  function Xo(e, t) {
    if (Buffer.isBuffer(e)) return Qo(e);
    if (typeof e != "string" || Fr.disabledFS)
      throw new TypeError("invalid invocation. input should be a Buffer");
    let n = Ey.resolve(e);
    if (typeof t == "function")
      Ff.push(() =>
        Ny(n)
          .then((r) => process.nextTick(t, null, Qo(r, n)))
          .catch(t),
      );
    else {
      let r = Py(n);
      return Qo(r, n);
    }
  }
  se.imageSize = Xo;
  var Iy = (e) => {
    Fr.disabledFS = e;
  };
  se.disableFS = Iy;
  var Oy = (e) => {
    Fr.disabledTypes = e;
  };
  se.disableTypes = Oy;
  var $y = (e) => {
    Ff.concurrency = e;
  };
  se.setConcurrency = $y;
  se.types = Object.keys(Jo.typeHandlers);
});
function Ko(e) {
  return ((e = e.replace(/^file:\/\//, "")), Ry.test(e) ? Ly(e) : _y(e));
}
function _y(e) {
  return new Promise((t, n) => {
    let r = e.match(/^data:.+?;base64,/);
    if (r)
      try {
        let i = Buffer.from(e.slice(r[0].length), "base64");
        return t(Yo("", (0, zr.imageSize)(i)));
      } catch (i) {
        return n(i);
      }
    (0, zr.imageSize)(e, (i, o) => {
      i ? n(i) : t(Yo(Zo.basename(e), o));
    });
  });
}
function Ly(e) {
  return new Promise((t, n) => {
    let r = new Mf.URL(e),
      i = r.protocol === "https:" ? Bf.get : Uf.get;
    if (!r.pathname) return n("Given url doesnt have pathname property");
    let o = r.pathname;
    i(r, (s) => {
      let a = [],
        l = 0,
        u = (f) => {
          try {
            let h = (0, zr.imageSize)(Buffer.concat(f, l));
            (s.removeListener("data", c), s.destroy(), t(Yo(Zo.basename(o), h)));
          } catch {}
        },
        c = (f) => {
          ((l += f.length), a.push(f), u(a));
        };
      s.on("data", c)
        .on("end", () => u(a))
        .once("error", (f) => {
          (s.removeListener("data", c), n(f));
        });
    }).once("error", n);
  });
}
function Yo(e, t) {
  let n = e.match(/@(\d+)x\./),
    r = n ? +n[1] : 1;
  if (!(!t || !t.width || !t.height))
    return {
      realWidth: t.width,
      realHeight: t.height,
      width: Math.floor(t.width / r),
      height: Math.floor(t.height / r),
    };
}
var Zo,
  Uf,
  Bf,
  Mf,
  zr,
  Ry,
  qf = W(() => {
    "use strict";
    ((Zo = q(require("path"))),
      (Uf = q(require("http"))),
      (Bf = q(require("https"))),
      (Mf = require("url")),
      (zr = q(Df())),
      (Ry = /^https?:/));
  });
function es(e, t) {
  return /^\w+:/.test(t)
    ? Promise.resolve(t)
    : ((t = Ie.normalize(t)), Hf.test(t) ? Dy(e, t) : zy(e, t));
}
function zy(e, t) {
  return Wf(Ie.resolve(e, t));
}
function Dy(e, t) {
  return new Promise((n, r) => {
    t = t.replace(Hf, "");
    let i = (o) => {
      Wf(Ie.resolve(o, t)).then(n, () => {
        let s = Ie.dirname(o);
        if (!s || s === o) return r(`Unable to locate absolute file ${t}`);
        i(s);
      });
    };
    i(e);
  });
}
function Wf(e) {
  return new Promise((t, n) => {
    Vf.stat(e, (r, i) => {
      if (r) return n(r);
      if (!i.isFile()) return n(new Error(`${e} is not a file`));
      t(e);
    });
  });
}
var Ie,
  Vf,
  jy,
  Fy,
  Hf,
  Gf = W(() => {
    "use strict";
    ((Ie = q(require("path"))),
      (Vf = q(require("fs"))),
      (jy = /^\/+/),
      (Fy = /^\\+/),
      (Hf = Ie.sep === "/" ? jy : Fy));
  });
var Zf = {};
Mr(Zf, { updateImageSize: () => Uy });
function Uy() {
  if (!G() || !be.window.activeTextEditor) return;
  let e = be.window.activeTextEditor,
    t = Array.from(e.selections)
      .reverse()
      .map((n) => {
        let r = n.isReversed ? n.active : n.anchor;
        return X(e.document.languageId) ? qy(e, r) : By(e, r);
      });
  return Promise.all(t).then((n) =>
    e.edit((r) => {
      n.forEach((i) => {
        i.forEach((o) => {
          r.replace(o.range, o.newText);
        });
      });
    }),
  );
}
function By(e, t) {
  let n = Qf(e, t),
    r = n && Jf(n);
  return r
    ? es(ts.dirname(e.document.fileName), r)
        .then(Ko)
        .then((i) => {
          let o = Qf(e, t);
          return o && Jf(o) === r ? Hy(e, o, i.width, i.height) : [];
        })
        .catch((i) => (console.warn("Error while updating image size:", i), []))
    : My(e, t);
}
function My(e, t) {
  return Yf(e, t, (r) => {
    let i = r.document,
      o = R(i, !0),
      s = i.offsetAt(t),
      a = B(o, s, !0);
    if (a && a.name === "style" && a.open && a.close && a.open.end < s && a.close.start > s) {
      let l = " ".repeat(a.open.end) + i.getText().substring(a.open.end, a.close.start),
        u = ve(l),
        c = B(u, s, !0);
      return c && c.type === "property" ? c : null;
    }
    return null;
  });
}
function qy(e, t) {
  return Yf(e, t, Vy);
}
function Yf(e, t, n) {
  let r = n(e, t),
    i = r && Xf(e, r, t);
  return i
    ? es(ts.dirname(e.document.fileName), i)
        .then(Ko)
        .then((o) => {
          let s = n(e, t);
          return o && s && Xf(e, s, t) === i ? Wy(e, s, o.width, o.height) : [];
        })
        .catch((o) => (console.warn("Error while updating image size:", o), []))
    : Promise.reject(new Error("No valid image source"));
}
function Qf(e, t) {
  let n = e.document,
    r = R(n, !0),
    i = n.offsetAt(t),
    o = B(r, i, !0);
  return o && o.name.toLowerCase() === "img" ? o : null;
}
function Vy(e, t) {
  let n = e.document,
    r = R(n, !0),
    i = n.offsetAt(t),
    o = B(r, i, !0);
  return o && o.type === "property" ? o : null;
}
function Jf(e) {
  let t = Dr(e, "src");
  if (t) return t.value.value;
}
function Xf(e, t, n) {
  if (!t) return;
  let r = Qy(e, t, n);
  if (!r) return;
  let i = r.item(0);
  return (i && i.type === "string" && (i = i.item(0)), i && i.valueOf());
}
function Hy(e, t, n, r) {
  let i = e.document,
    o = Dr(t, "src");
  if (!o) return [];
  let s = Dr(t, "width"),
    a = Dr(t, "height"),
    l = Gy(e, o),
    u = t.attributes[t.attributes.length - 1].end,
    c = [],
    f = "";
  return (
    s
      ? c.push(new be.TextEdit(D(i, s.value.start, s.value.end), String(n)))
      : (f += ` width=${l}${n}${l}`),
    a
      ? c.push(new be.TextEdit(D(i, a.value.start, a.value.end), String(r)))
      : (f += ` height=${l}${r}${l}`),
    f && c.push(new be.TextEdit(D(i, u, u), f)),
    c
  );
}
function Wy(e, t, n, r) {
  let i = e.document,
    o = t.parent,
    s = Qt(o, "width"),
    a = Qt(o, "height"),
    l = t.separator || ": ",
    u = Jy(e, t),
    c = [];
  t.terminatorToken || c.push(new be.TextEdit(D(i, t.end, t.end), ";"));
  let f = "";
  return (
    s
      ? c.push(new be.TextEdit(D(i, s.valueToken.start, s.valueToken.end), `${n}px`))
      : (f += `${u}width${l}${n}px;`),
    a
      ? c.push(new be.TextEdit(D(i, a.valueToken.start, a.valueToken.end), `${r}px`))
      : (f += `${u}height${l}${r}px;`),
    f && c.push(new be.TextEdit(D(i, t.end, t.end), f)),
    c
  );
}
function Dr(e, t) {
  return (
    (t = t.toLowerCase()), e && e.attributes.find((n) => n.name.toString().toLowerCase() === t)
  );
}
function Gy(e, t) {
  let n = t.value ? t.value.end : t.end,
    r = t.end;
  return n === r ? "" : e.document.getText().substring(n, r);
}
function Qy(e, t, n) {
  let r = e.document.offsetAt(n);
  for (let i = 0, o = t.parsedValue.length, s; i < o; i++)
    if (
      (xo(t.parsedValue[i], (a) =>
        a.type === "url" && a.start <= r && a.end >= r ? ((s = a), !1) : !0,
      ),
      s)
    )
      return s;
}
function Jy(e, t) {
  let n;
  return (n = t.previousSibling || t.parent.contentStartToken)
    ? e.document.getText().substring(n.end, t.start)
    : (n = t.nextSibling || t.parent.contentEndToken)
      ? e.document.getText().substring(t.end, n.start)
      : "";
}
var be,
  ts,
  Kf = W(() => {
    "use strict";
    ((be = require("vscode")), (ts = q(require("path"))));
    qf();
    Z();
    Gf();
    Ct();
    ie();
  });
var Yy = {};
Mr(Yy, { activate: () => Xy });
module.exports = os(Yy);
var Ur = q(require("vscode")),
  ed = require("os");
var O = q(require("vscode"));
var J = q(require("vscode"));
var A = q(require("vscode"));
Z();
ie();
var $v = /[\u00a0]*[\d#\-\*\u2022]+\.?/,
  yo = /^#[\da-fA-F]{0,6}$/;
async function Tc(e) {
  if (!G(!1)) return !1;
  let t = A.window.activeTextEditor,
    n = t.document;
  ((e = e || {}), e.language || (e.language = n.languageId));
  let r = Xt(e) || "html",
    i = R(n, !0),
    o = We(),
    s = Array.from(t.selections)
      .sort((g, b) => g.start.compareTo(b.start))
      .map((g) => {
        let b = g;
        {
          let { start: P, end: E } = b,
            I = n.offsetAt(P),
            ee = n.getText(),
            F = H(ee, i, I, !0);
          if (F && vo(F, I)) {
            P = n.positionAt(F.start);
            let ne = n.positionAt(F.end);
            E = ne.isAfter(E) ? ne : E;
          }
          let de = n.offsetAt(E),
            Q = H(ee, i, de, !0);
          if (Q && vo(Q, de)) {
            let ne = n.positionAt(Q.start);
            P = ne.isBefore(P) ? ne : P;
            let ke = n.positionAt(Q.end);
            E = ke.isAfter(E) ? ke : E;
          }
          b = new A.Range(P, E);
        }
        if (!b.isSingleLine && b.end.character === 0) {
          let P = b.end.line - 1;
          b = new A.Range(b.start, n.lineAt(P).range.end);
        }
        b.isEmpty && (b = n.lineAt(b.start).range);
        let T = n.lineAt(b.start);
        return (
          !T.isEmptyOrWhitespace &&
            T.firstNonWhitespaceCharacterIndex > b.start.character &&
            (b = b.with(new A.Position(b.start.line, T.firstNonWhitespaceCharacterIndex))),
          b
        );
      })
      .reduce(
        (g, b) => (
          g.length > 0 && b.intersection(g[g.length - 1]) ? g.push(b.union(g.pop())) : g.push(b),
          g
        ),
        [],
      ),
    a = t.selections;
  t.selections = s.map((g) => new A.Selection(g.start, g.end));
  let l = s.map((g) => {
      let b,
        T = n.getText(g),
        E = n.lineAt(g.start).text.match(/^(\s*)/),
        I = E ? E[1] : "";
      return (
        (b = g.isSingleLine
          ? [T]
          : T.split(
              `
` + I,
            ).map((ee) => ee.trimEnd())),
        (b = b.map((ee) => ee.replace(/(\$\d)/g, "\\$1"))),
        {
          previewRange: g,
          originalRange: g,
          originalContent: T,
          textToWrapInPreview: b,
          baseIndent: I,
        }
      );
    }),
    { tabSize: u, insertSpaces: c } = t.options,
    f = c ? " ".repeat(u) : "	";
  function h() {
    return t.edit(
      (g) => {
        for (let b of l)
          (g.replace(b.previewRange, b.originalContent), (b.previewRange = b.originalRange));
      },
      { undoStopBefore: !1, undoStopAfter: !1 },
    );
  }
  function p(g) {
    let b = new A.Range(0, 0, 0, 0),
      T = new A.Range(0, 0, 0, 0),
      P = 0;
    return t.edit(
      (E) => {
        for (let I = 0; I < l.length; I++) {
          let ee = wo(g[I]) || "";
          if (!ee) break;
          let F = l[I].previewRange,
            de = ee
              .replace(/\$\{[\d]*\}/g, "|")
              .replace(/\$\{[\d]*:([^}]*)\}/g, (Zy, td) => td)
              .replace(/\\\$/g, "$");
          E.replace(F, de);
          let Q = de.split(`
`),
            ne = F.end.line - F.start.line + 1,
            ke = Q.length - ne,
            ns = F.start.line + P,
            nn = F.start.character,
            rs = F.end.line + P + ke,
            Br = Q[Q.length - 1].length;
          (I > 0 && rs === T.end.line
            ? ((nn = T.end.character + (F.start.character - b.end.character)), (Br += nn))
            : I > 0 && ns === T.end.line
              ? (nn = T.end.character + (F.start.character - b.end.character))
              : Q.length === 1 && (Br += F.start.character),
            (b = l[I].previewRange),
            (T = new A.Range(ns, nn, rs, Br)),
            (l[I].previewRange = T),
            (P += ke));
        }
      },
      { undoStopBefore: !1, undoStopAfter: !1 },
    );
  }
  let k = !1;
  async function x(g, b) {
    let P =
      !!g && !!g.trim() && o.isAbbreviationValid(r, g)
        ? o.extractAbbreviationFromText(g, r)
        : void 0;
    if (!P) return (k && ((k = !1), await h()), !1);
    let { abbreviation: E, filter: I } = P;
    if (b) {
      let F = l.map((de) => ({
        syntax: r,
        abbreviation: E,
        rangeToReplace: de.originalRange,
        textToWrap: de.textToWrapInPreview,
        filter: I,
        indent: f,
        baseIndent: de.baseIndent,
      }));
      return ((k = !0), p(F));
    }
    let ee = l.map((F) => ({
      syntax: r,
      abbreviation: E,
      rangeToReplace: F.originalRange,
      textToWrap: F.textToWrapInPreview,
      filter: I,
      indent: f,
    }));
    return (k && ((k = !1), await h()), Ac(t, ee, !1));
  }
  let w = "";
  async function S(g) {
    return (g !== w && ((w = g), await x(g, !0)), "");
  }
  let y = A.l10n.t("Enter Abbreviation"),
    m =
      e && e.abbreviation
        ? e.abbreviation
        : await A.window.showInputBox({ prompt: y, validateInput: S }),
    v = await x(m, !1);
  return (v || (t.selections = a), v);
}
function Ec(e) {
  if (!G() || !A.window.activeTextEditor) return Ge();
  if (
    A.window.activeTextEditor.selections.length === 1 &&
    A.window.activeTextEditor.selection.isEmpty
  ) {
    let f = A.window.activeTextEditor.selection.anchor;
    if (f.character === 0) return Ge();
    let h = f.translate(0, -1),
      p = A.window.activeTextEditor.document.getText(new A.Range(h, f));
    if (p === " " || p === "	") return Ge();
  }
  if (((e = e || {}), !e.language)) e.language = A.window.activeTextEditor.document.languageId;
  else if (
    (A.workspace.getConfiguration("emmet").excludeLanguages
      ? A.workspace.getConfiguration("emmet").excludeLanguages
      : []
    ).includes(A.window.activeTextEditor.document.languageId)
  )
    return Ge();
  let t = Xt(e);
  if (!t) return Ge();
  let n = A.window.activeTextEditor;
  if (
    A.workspace.getConfiguration("emmet").triggerExpansionOnTab === !0 &&
    n.selections.find((f) => !f.isEmpty)
  )
    return Ge();
  let r = [],
    i,
    o = !0,
    s = We(),
    a = (f, h, p, k) => {
      p = f.validatePosition(p);
      let x = h,
        w = f.getText(x);
      if (!x.isEmpty) {
        let T = s.extractAbbreviationFromText(w, k);
        return T ? [x, T.abbreviation, T.filter] : [null, "", ""];
      }
      let y = n.document.lineAt(p.line).text.substr(0, p.character);
      if (k === "html") {
        let T = y.match(/<(\w+)$/);
        if (T)
          return ((w = T[1]), (x = new A.Range(p.translate(0, -(w.length + 1)), p)), [x, w, ""]);
      }
      let m = s.extractAbbreviation(Jt(n.document), p, { lookAhead: !1 });
      if (!m) return [null, "", ""];
      let { abbreviationRange: v, abbreviation: g, filter: b } = m;
      return [new A.Range(v.start.line, v.start.character, v.end.line, v.end.character), g, b];
    },
    l = n.selections.slice(0);
  l.sort((f, h) => {
    let p = f.isReversed ? f.anchor : f.active,
      k = h.isReversed ? h.anchor : h.active;
    return p.compareTo(k) * -1;
  });
  let u;
  function c() {
    if (u) return u;
    let f = A.workspace.getConfiguration("emmet").optimizeStylesheetParsing === !0;
    return (
      n.selections.length === 1 && X(n.document.languageId) && f && n.document.lineCount > 1e3
        ? (u = Yn(n.document, n.selection.isReversed ? n.selection.anchor : n.selection.active))
        : (u = R(n.document, !0)),
      u
    );
  }
  return (
    l.forEach((f) => {
      let h = f.isReversed ? f.anchor : f.active,
        [p, k, x] = a(n.document, f, h, t);
      if (!p || !s.isAbbreviationValid(t, k) || (X(t) && k.endsWith(":"))) return;
      let w = n.document.offsetAt(h),
        S = B(c(), w, !0),
        y = !0,
        m = t;
      if (n.document.languageId === "html")
        if (kc(S, w)) ((m = "css"), (y = !1));
        else {
          let v = er(n.document, S, h);
          v && ((S = B(v, w, !0)), (m = "css"));
        }
      (y && !ko(n.document, c(), S, m, w, p)) ||
        (i ? o && i !== k && (o = !1) : (i = k),
        r.push({ syntax: m, abbreviation: k, rangeToReplace: p, filter: x }));
    }),
    Ac(n, r, o).then((f) => (f ? Promise.resolve(void 0) : Ge()))
  );
}
function Ge() {
  return A.workspace.getConfiguration("emmet").triggerExpansionOnTab === !0
    ? A.commands.executeCommand("tab")
    : Promise.resolve(!0);
}
function ko(e, t, n, r, i, o) {
  if (X(r)) {
    let S = t;
    if (S && (S.comments || []).some((v) => i >= v.start && i <= v.end)) return !1;
    if (!n) return !0;
    let y = e.getText(new A.Range(o.start.line, o.start.character, o.end.line, o.end.character));
    if (y.startsWith("@")) return !0;
    if (r !== "sass" && r !== "stylus" && n.type === "property") {
      if (n.parent && n.parent.type !== "rule" && n.parent.type !== "at-rule") return !1;
      let v = n;
      if (
        (v.terminatorToken &&
          v.separator &&
          i >= v.separatorToken.end &&
          i <= v.terminatorToken.start &&
          !y.includes(":")) ||
        (!v.terminatorToken && v.separator && i >= v.separatorToken.end && !y.includes(":"))
      )
        return yo.test(y) || y === "!";
      if (yo.test(y) || y === "!") return !1;
    }
    if (n.type !== "rule" && n.type !== "at-rule") return !0;
    let m = n;
    if (i > m.contentStartToken.end) return !0;
    if (m.parent && (m.parent.type === "rule" || m.parent.type === "at-rule") && m.selectorToken) {
      let v = e.positionAt(i),
        g = e.positionAt(m.selectorToken.start),
        b = e.positionAt(m.selectorToken.end);
      if (v.line !== b.line && g.character === o.start.character && g.line === o.start.line)
        return !0;
    }
    return !1;
  }
  let s = "<",
    a = ">",
    l = "\\",
    u = "?",
    c = n,
    f = 0;
  if (c) {
    if (c.name === "script") {
      let y = (c.attributes || []).filter((g) => g.name.toString() === "type")[0],
        m = y ? y.value.toString() : "";
      return Gt.includes(m)
        ? !0
        : !m || m === "application/javascript" || m === "text/javascript"
          ? !!Xt({ language: "javascript" })
          : !1;
    }
    if (!c.open || !c.close || !(c.open.end <= i && i <= c.close.start)) return !1;
    f = c.open.end;
    let S = c.firstChild;
    for (; S && !(S.end > i);) ((f = S.end), (S = S.nextSibling));
  }
  let h = e.positionAt(f),
    p = e.getText(new A.Range(h.line, h.character, o.start.line, o.start.character));
  if ((p.length > 500 && (p = p.substr(p.length - 500)), !p.trim())) return !0;
  let k = !0,
    x = !1,
    w = p.length - 1;
  if (p[w] === s) return !1;
  for (; w >= 0;) {
    let S = p[w];
    if ((w--, !x && /\s/.test(S))) {
      x = !0;
      continue;
    }
    if (S === u && p[w] === s) {
      w--;
      continue;
    }
    if (/\s/.test(S) && p[w] === s) {
      w--;
      continue;
    }
    if (!(S !== s && S !== a)) {
      if (w >= 0 && p[w] === l) {
        w--;
        continue;
      }
      if (S === a) {
        if (w >= 0 && p[w] === "=") continue;
        break;
      }
      if (S === s) {
        k = !x;
        break;
      }
    }
  }
  return k;
}
async function Ac(e, t, n) {
  if (!t || t.length === 0) return !1;
  let r = 0;
  if (!n) {
    t.sort((a, l) => l.rangeToReplace.start.compareTo(a.rangeToReplace.start));
    for (let a of t) {
      let l = wo(a);
      l &&
        (await e.insertSnippet(new A.SnippetString(l), a.rangeToReplace, {
          undoStopBefore: !1,
          undoStopAfter: !1,
        }),
        r++);
    }
    return r > 0;
  }
  let i = t[0],
    o = wo(i),
    s = t.map((a) => a.rangeToReplace);
  return o ? e.insertSnippet(new A.SnippetString(o), s) : !1;
}
function wo(e) {
  let t = We(),
    n = t.getExpandOptions(e.syntax, gt(e.syntax), e.filter);
  e.textToWrap &&
    ((e.textToWrap = e.textToWrap.map((i) => i.replace(/\$\{/g, "\\${"))),
    e.filter &&
      e.filter.includes("t") &&
      (e.textToWrap = e.textToWrap.map((i) => i.replace($v, "").trim())),
    (n.text = e.textToWrap),
    n.options &&
      (e.rangeToReplace.isSingleLine || (n.options["output.inlineBreak"] = 1),
      e.indent && (n.options["output.indent"] = e.indent),
      e.baseIndent && (n.options["output.baseIndent"] = e.baseIndent)));
  let r;
  try {
    r = t.expandAbbreviation(e.abbreviation, n);
  } catch {
    A.window.showErrorMessage("Failed to expand abbreviation");
  }
  return r;
}
function Xt(e) {
  let t = ht(),
    n = e.language,
    r = e.parentMode,
    i = A.workspace.getConfiguration("emmet").excludeLanguages
      ? A.workspace.getConfiguration("emmet").excludeLanguages
      : [];
  if (i.includes(n)) return;
  let o = we(t[n] ?? n, t, i);
  return (o || (o = we(t[r] ?? r, t, i)), o);
}
Z();
ie();
var nr = class {
  provideCompletionItems(t, n, r, i) {
    let o = this.provideCompletionItemsInternal(t, n, i);
    if (!o) {
      this.lastCompletionType = void 0;
      return;
    }
    return o.then((s) => {
      if (!s || !s.items.length) return ((this.lastCompletionType = void 0), s);
      let a = s.items[0],
        l = a.documentation ? a.documentation.toString() : "";
      return (
        l.startsWith("<")
          ? (this.lastCompletionType = "html")
          : l.indexOf(":") > 0 && l.endsWith(";")
            ? (this.lastCompletionType = "css")
            : (this.lastCompletionType = void 0),
        s
      );
    });
  }
  provideCompletionItemsInternal(t, n, r) {
    let i = J.workspace.getConfiguration("emmet"),
      o = i.excludeLanguages ? i.excludeLanguages : [];
    if (o.includes(t.languageId)) return;
    let s = ht(),
      a = !!s[t.languageId],
      l = we(a ? s[t.languageId] : t.languageId, s, o);
    if (
      !l ||
      i.showExpandedAbbreviation === "never" ||
      ((a || l === "jsx") && i.showExpandedAbbreviation !== "always")
    )
      return;
    let u = l,
      c = u === "html" || u === "jsx" || u === "xml",
      f,
      h,
      p = Jt(t);
    n = t.validatePosition(n);
    let k = new J.Range(n.line, 0, n.line, n.character);
    if (t.getText(k).trimStart().startsWith("//")) return;
    let x = We();
    if (u === "html") {
      if (r.triggerKind === J.CompletionTriggerKind.TriggerForIncompleteCompletions)
        switch (this.lastCompletionType) {
          case "html":
            c = !1;
            break;
          case "css":
            ((c = !1), (u = "css"));
            break;
          default:
            break;
        }
      if (c) {
        let v = t.offsetAt(n),
          g = R(t, !0),
          b = H(t.getText(), g, v, !1);
        if (b)
          if (b.name === "script") {
            let T = b.attributes.find((P) => P.name.toString() === "type");
            if (T) {
              let P = T.value.toString();
              if (P === "application/javascript" || P === "text/javascript")
                if (Xt({ language: "javascript" })) c = !1;
                else return;
              else Gt.includes(P) && (c = !1);
            } else return;
          } else if (b.name === "style") ((u = "css"), (c = !1));
          else {
            let T = b.attributes.find((P) => P.name.toString() === "style");
            T && T.value.start <= v && v <= T.value.end && ((u = "css"), (c = !1));
          }
      }
    }
    let w = X(u) ? { lookAhead: !1, syntax: "stylesheet" } : { lookAhead: !0, syntax: "markup" },
      S = x.extractAbbreviation(p, n, w);
    if (!S || !x.isAbbreviationValid(u, S.abbreviation)) return;
    let y = t.offsetAt(n);
    if (
      X(t.languageId) &&
      r.triggerKind !== J.CompletionTriggerKind.TriggerForIncompleteCompletions
    ) {
      if (
        ((c = !0),
        (f =
          J.workspace.getConfiguration("emmet").optimizeStylesheetParsing === !0 &&
          t.lineCount > 1e3
            ? Yn(t, n)
            : R(t, !0)),
        !f)
      )
        return;
      h = B(f, y, !0);
    }
    if (
      !X(t.languageId) &&
      X(u) &&
      r.triggerKind !== J.CompletionTriggerKind.TriggerForIncompleteCompletions
    ) {
      if (((c = !0), (f = R(t, !0)), !f)) return;
      let v = B(f, y, !0),
        g = er(t, v, n);
      h = B(g, y, !0);
    }
    if (c && !ko(t, f, h, u, y, Rv(S.abbreviationRange))) return;
    let m = Promise.resolve(!1);
    if (
      !X(u) &&
      (t.languageId === "javascript" ||
        t.languageId === "javascriptreact" ||
        t.languageId === "typescript" ||
        t.languageId === "typescriptreact")
    ) {
      let v = S.abbreviation;
      v.startsWith("this.") || /\[[^\]=]*\]/.test(v)
        ? (m = Promise.resolve(!0))
        : (m = J.commands
            .executeCommand("_executeDocumentSymbolNames", t.uri)
            .then(
              (g) => !!g && g.some((b) => v === b || (v.startsWith(b + ".") && !/>|\*|\+/.test(v))),
            ));
    }
    return m.then((v) => {
      if (v) return;
      let g = gt(u),
        b = x.doComplete(Jt(t), n, u, g),
        T = [];
      return (
        b &&
          b.items &&
          b.items.forEach((P) => {
            let E = new J.CompletionItem(P.label);
            ((E.documentation = P.documentation),
              (E.detail = P.detail),
              (E.insertText = new J.SnippetString(P.textEdit.newText)));
            let I = P.textEdit.range;
            ((E.range = new J.Range(I.start.line, I.start.character, I.end.line, I.end.character)),
              (E.filterText = P.filterText),
              (E.sortText = P.sortText),
              i.showSuggestionsAsSnippets === !0 && (E.kind = J.CompletionItemKind.Snippet),
              T.push(E));
          }),
        new J.CompletionList(T, !0)
      );
    });
  }
};
function Rv(e) {
  return new J.Range(e.start.line, e.start.character, e.end.line, e.end.character);
}
var Pe = q(require("vscode"));
ie();
Z();
function Nc() {
  if (!G(!1) || !Pe.window.activeTextEditor) return;
  let e = Pe.window.activeTextEditor,
    t = e.document,
    n = R(t, !0);
  if (!n) return;
  let r = Array.from(e.selections)
    .reverse()
    .reduce((i, o) => i.concat(_v(e.document, n, o)), []);
  return e.edit((i) => {
    r.forEach((o) => {
      i.delete(o);
    });
  });
}
function _v(e, t, n) {
  let r = e.offsetAt(n.start),
    i = H(e.getText(), t, r, !0);
  if (!i) return [];
  let o;
  i.open && (o = D(e, i.open.start, i.open.end));
  let s;
  if ((i.close && (s = D(e, i.close.start, i.close.end)), o && s)) {
    let l = new Pe.Range(o.end.line, o.end.character, s.start.line, s.start.character),
      u = new Pe.Range(o.start.line, o.start.character, s.end.line, s.end.character);
    if (e.getText(l).trim() === "" && i.name !== "pre") return [u];
  }
  let a = [];
  if (o && (a.push(o), s)) {
    let l = Lv(e, o, s),
      u,
      c;
    for (let f = o.start.line + 1; f < s.start.line; f++)
      e.lineAt(f).isEmptyOrWhitespace ||
        (a.push(new Pe.Range(f, 0, f, l)), u === void 0 && (u = f), (c = f));
    (Cc(e, s) && c
      ? a.push(new Pe.Range(c, e.lineAt(c).range.end.character, s.end.line, s.end.character))
      : a.push(s),
      Cc(e, o) &&
        u &&
        ((a[1] = new Pe.Range(
          o.start.line,
          o.start.character,
          u,
          e.lineAt(u).firstNonWhitespaceCharacterIndex,
        )),
        a.shift()));
  }
  return a;
}
function Cc(e, t) {
  if (t.start.line === t.end.line) {
    let n = e.lineAt(t.start).text,
      r = e.getText(t);
    if (n.trim() === r) return !0;
  }
  return !1;
}
function Lv(e, t, n) {
  let r = t.start.line,
    i = n.start.line,
    o = e.lineAt(r).firstNonWhitespaceCharacterIndex,
    s = e.lineAt(i).firstNonWhitespaceCharacterIndex,
    a;
  for (let u = r + 1; u < i; u++) {
    let c = e.lineAt(u);
    if (!c.isEmptyOrWhitespace) {
      let f = c.firstNonWhitespaceCharacterIndex;
      a = a ? Math.min(a, f) : f;
    }
  }
  let l = 0;
  return (a && (a < o || a < s ? (l = 0) : (l = Math.min(a - o, a - s))), l);
}
var Qe = q(require("vscode"));
Z();
ie();
async function So(e) {
  if (!G(!1) || !Qe.window.activeTextEditor) return;
  let t = Qe.window.activeTextEditor,
    n = t.document,
    r = R(n, !0);
  if (!r) return;
  let i = t.selections.reduceRight((a, l) => a.concat(Fv(n, l, r)), []);
  if (!i.length) return;
  let o = i[0].name,
    s = i.every((a) => a.name === o);
  return e === void 0 &&
    ((e = await Qe.window.showInputBox({ prompt: "Enter Tag", value: s ? o : void 0 })), !e)
    ? !1
    : t.edit((a) => {
        i.forEach((l) => {
          a.replace(l.range, e);
        });
      });
}
function jv(e, t) {
  let n = [];
  if (e.open) {
    let r = t.positionAt(e.open.start);
    n.push({
      name: e.name,
      range: new Qe.Range(r.translate(0, 1), r.translate(0, 1).translate(0, e.name.length)),
    });
  }
  if (e.close) {
    let r = t.positionAt(e.close.start),
      i = t.positionAt(e.close.end);
    n.push({ name: e.name, range: new Qe.Range(r.translate(0, 2), i.translate(0, -1)) });
  }
  return n;
}
function Fv(e, t, n) {
  let r = e.getText(),
    i = e.offsetAt(t.start),
    o = H(r, n, i, !0);
  return o ? jv(o, e) : [];
}
var To = q(require("vscode"));
Z();
ie();
function Pc() {
  if (!G(!1) || !To.window.activeTextEditor) return;
  let e = To.window.activeTextEditor,
    t = e.document,
    n = R(t, !0);
  if (!n) return;
  let r = [];
  (e.selections.forEach((i) => {
    let o = zv(t, n, i.start);
    o && r.push(o);
  }),
    r.length && ((e.selections = r), e.revealRange(e.selections[r.length - 1])));
}
function zv(e, t, n) {
  let r = e.offsetAt(n),
    i = H(e.getText(), t, r, !0);
  if (!i || !i.open || !i.close || (r > i.open.end && r < i.close.start)) return;
  let o = r <= i.open.end ? i.close.start + 2 : i.start + 1;
  return z(e, o, o);
}
var Eo = q(require("vscode"));
Z();
ie();
var rr = [],
  Ic = [];
function $c() {
  _c(!0);
}
function Rc() {
  _c(!1);
}
function _c(e) {
  if (!G(!1) || !Eo.window.activeTextEditor) return;
  let t = Eo.window.activeTextEditor,
    n = t.document,
    r = R(n, !0);
  if (!r) return;
  let i = e ? Dv : Uv,
    o = t.selections.map((s) => i(n, r, s));
  (Oc(Ic, t.selections)
    ? e
      ? Oc(t.selections, o) || rr.push(t.selections)
      : rr.length && (o = rr.pop())
    : (rr = e ? [t.selections] : []),
    (t.selections = o),
    (Ic = t.selections));
}
function Dv(e, t, n) {
  let r = e.offsetAt(n.start),
    i = H(e.getText(), t, r, !1);
  if (!i) return n;
  if (!i.open || !i.close) return z(e, i.start, i.end);
  let o, s;
  return (
    i.close.start <= r && i.close.end > r
      ? ((o = z(e, i.close.start, i.open.end)), (s = z(e, i.close.end, i.open.start)))
      : ((o = z(e, i.open.end, i.close.start)), (s = z(e, i.open.start, i.close.end))),
    o.contains(n) && !o.isEqual(n) ? o : s.contains(n) && !s.isEqual(n) ? s : n
  );
}
function Uv(e, t, n) {
  let r = e.offsetAt(n.start),
    i = H(e.getText(), t, r, !0);
  if (!i) return n;
  let o = e.offsetAt(n.start),
    s = e.offsetAt(n.end);
  if (i.open && i.close) {
    let l = o === i.start && s === i.end,
      u = o > i.open.start && o < i.open.end,
      c = o > i.close.start && o < i.close.end;
    if (l || u || c) return z(e, i.open.end, i.close.start);
  }
  if (!i.firstChild) return n;
  let a = i.firstChild;
  return o === a.start && s === a.end && a.open && a.close
    ? z(e, a.open.end, a.close.start)
    : z(e, a.start, a.end);
}
function Oc(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (!e[n].isEqual(t[n])) return !1;
  return !0;
}
var Yt = q(require("vscode"));
Z();
ie();
function Lc() {
  if (!G(!1) || !Yt.window.activeTextEditor) return;
  let e = Yt.window.activeTextEditor,
    t = e.document,
    n = R(e.document, !0);
  if (n)
    return e.edit((r) => {
      Array.from(e.selections)
        .reverse()
        .forEach((i) => {
          let o = t.getText(),
            s = t.offsetAt(i.start),
            a = H(o, n, s, !0);
          if (a) {
            let l = Bv(t, a);
            r.replace(l.range, l.newText);
          }
        });
    });
}
function Bv(e, t) {
  let n, r;
  if (!t.open || !t.close) {
    let o = e
        .getText()
        .substring(t.start, t.end)
        .match(/(\s*\/)?>$/),
      s = t.end,
      a = o ? s - o[0].length : s;
    ((n = D(e, a, s)), (r = `></${t.name}>`));
  } else {
    let i = t.open.end - 1,
      o = t.end;
    ((n = D(e, i, o)), (r = "/>"));
    let s = we(e.languageId, {}, []) ?? "",
      a = gt(s);
    s &&
      a.syntaxProfiles[s] &&
      (a.syntaxProfiles[s].selfClosingStyle === "xhtml" ||
        a.syntaxProfiles[s].self_closing_tag === "xhtml") &&
      (r = " " + r);
  }
  return new Yt.TextEdit(n, r);
}
var Zt = q(require("vscode"));
Z();
ie();
function jc() {
  if (!G(!1) || !Zt.window.activeTextEditor) return;
  let e = Zt.window.activeTextEditor,
    t = R(e.document, !0);
  if (t)
    return e.edit((n) => {
      Array.from(e.selections)
        .reverse()
        .forEach((r) => {
          let i = Mv(e.document, r, t);
          i && n.replace(i.range, i.newText);
        });
    });
}
function Mv(e, t, n) {
  let r,
    i,
    o = e.offsetAt(t.start),
    s = e.offsetAt(t.end);
  if ((t.isEmpty ? (r = i = B(n, o, !0)) : ((r = B(n, o, !0)), (i = B(n, s, !0))), !r || !i))
    return;
  let a = e.positionAt(r.start),
    l = a.line,
    u = a.character,
    f = e.positionAt(i.end).line;
  if (l === f) return;
  let h = D(e, r.start, i.end),
    p = e.lineAt(l).text.substr(u);
  for (let k = l + 1; k <= f; k++) p += e.lineAt(k).text.trim();
  return new Zt.TextEdit(h, p);
}
var K = q(require("vscode"));
Z();
Ct();
ie();
var ir, or, sr, ar;
function Fc() {
  if (!G() || !K.window.activeTextEditor) return;
  Vv();
  let e = K.window.activeTextEditor,
    t = R(e.document, !0);
  if (t)
    return e.edit((n) => {
      let r = [];
      (Array.from(e.selections)
        .reverse()
        .forEach((o) => {
          let s = X(e.document.languageId) ? Dc(e.document, o, t) : qv(e.document, o, t);
          s.length > 0 && r.push(s);
        }),
        r.sort((o, s) => {
          let a = o[0].range.start.line - s[0].range.start.line;
          return a === 0 ? o[0].range.start.character - s[0].range.start.character : a;
        }));
      let i = new K.Position(0, 0);
      for (let o of r)
        o[0].range.end.isAfterOrEqual(i) &&
          o.forEach((s) => {
            (n.replace(s.range, s.newText), (i = s.range.end));
          });
    });
}
function qv(e, t, n) {
  let r = t.isReversed ? t.active : t.anchor,
    i = t.isReversed ? t.anchor : t.active,
    o = e.offsetAt(r),
    s = e.offsetAt(i),
    a = e.getText(),
    l = H(a, n, o, !0),
    u = H(a, n, s, !0);
  if (!l || !u) return [];
  if (Jn(l, u) && l.name === "style" && l.open && l.close && l.open.end < o && l.close.start > s) {
    let h = " ".repeat(l.open.end) + a.substring(l.open.end, l.close.start),
      p = ve(h);
    return Dc(e, t, p);
  }
  let c = yc(l, u),
    f = [];
  return (
    c.forEach((h) => {
      f = f.concat(zc(h, e));
    }),
    l.type === "comment" ||
      (f.push(new K.TextEdit(D(e, c[0].start, c[0].start), sr)),
      f.push(new K.TextEdit(D(e, c[c.length - 1].end, c[c.length - 1].end), ar))),
    f
  );
}
function zc(e, t) {
  let n = [];
  return e.type === "comment"
    ? (n.push(new K.TextEdit(D(t, e.start, e.start + sr.length), "")),
      n.push(new K.TextEdit(D(t, e.end - ar.length, e.end), "")),
      n)
    : (e.children.forEach((r) => {
        n = n.concat(zc(r, t));
      }),
      n);
}
function Dc(e, t, n) {
  let r = t.isReversed ? t.active : t.anchor,
    i = t.isReversed ? t.anchor : t.active,
    o = e.offsetAt(r),
    s = e.offsetAt(i),
    a = B(n, o, !0),
    l = B(n, s, !0);
  t.isEmpty
    ? a && ((o = a.start), (s = a.end), (t = z(e, o, s)))
    : ((o = Hv(a, o, n)), (s = Wv(l, s, n)), (t = z(e, o, s)));
  let u = [],
    c = [];
  return (
    n.comments.forEach((f) => {
      let h = D(e, f.start, f.end);
      t.intersection(h) &&
        (u.push(h),
        c.push(new K.TextEdit(D(e, f.start, f.start + ir.length), "")),
        c.push(new K.TextEdit(D(e, f.end - or.length, f.end), "")));
    }),
    c.length > 0
      ? c
      : [
          new K.TextEdit(new K.Range(t.start, t.start), ir),
          new K.TextEdit(new K.Range(t.end, t.end), or),
        ]
  );
}
function Vv() {
  K.workspace.getConfiguration("editor.comments").get("insertSpace")
    ? ((ir = "/* "), (or = " */"), (sr = "<!-- "), (ar = " -->"))
    : ((ir = "/*"), (or = "*/"), (sr = "<!--"), (ar = "-->"));
}
function Hv(e, t, n) {
  for (let o of n.comments) if (o.start <= t && t <= o.end) return t;
  if (!e) return t;
  if (e.type === "property") return e.start;
  let r = e;
  if (t < r.contentStartToken.end || !r.firstChild) return r.start;
  if (t < r.firstChild.start) return t;
  let i = r.firstChild;
  for (; i.nextSibling && t > i.end;) i = i.nextSibling;
  return i.start;
}
function Wv(e, t, n) {
  for (let o of n.comments) if (o.start <= t && t <= o.end) return t;
  if (!e) return t;
  if (e.type === "property") return e.end;
  let r = e;
  if (t === r.contentEndToken.end || !r.firstChild) return r.end;
  if (t > r.children[r.children.length - 1].end) return t;
  let i = r.children[r.children.length - 1];
  for (; i.previousSibling && t < i.start;) i = i.previousSibling;
  return i.end;
}
var bt = q(require("vscode"));
Z();
function Ao(e) {
  if (!G() || !bt.window.activeTextEditor) return;
  let t = bt.window.activeTextEditor,
    n = [];
  (t.selections.forEach((r) => {
    let i = e === "next" ? Gv(r, t) : Qv(r, t);
    n.push(i);
  }),
    (t.selections = n),
    t.revealRange(t.selections[t.selections.length - 1]));
}
function Gv(e, t) {
  for (let n = e.anchor.line; n < t.document.lineCount; n++) {
    let r = Uc(n, t, e.anchor, "next");
    if (r) return r;
  }
  return e;
}
function Qv(e, t) {
  for (let n = e.anchor.line; n >= 0; n--) {
    let r = Uc(n, t, e.anchor, "prev");
    if (r) return r;
  }
  return e;
}
function Uc(e, t, n, r) {
  let i = t.document.lineAt(e),
    o = i.text;
  if (e !== n.line && i.isEmptyOrWhitespace && o.length)
    return new bt.Selection(e, o.length, e, o.length);
  e === n.line && r === "prev" && (o = o.substr(0, n.character));
  let s = r === "next" ? o.indexOf('""', e === n.line ? n.character : 0) : o.lastIndexOf('""'),
    a = r === "next" ? o.indexOf("><", e === n.line ? n.character : 0) : o.lastIndexOf("><"),
    l = -1;
  if (
    (s > -1 && a > -1
      ? (l = r === "next" ? Math.min(s, a) : Math.max(s, a))
      : s > -1
        ? (l = s)
        : (l = a),
    l > -1)
  )
    return new bt.Selection(e, l + 1, e, l + 1);
}
var No = q(require("vscode"));
Z();
Z();
function Bc(e, t, n, r) {
  let i = e.offsetAt(n),
    o = H(e.getText(), r, i, !1),
    s;
  if (o) {
    if (o.type !== "comment") {
      if (o.open && i <= o.open.start + o.name.length) return Co(e, o);
      if (o.open && i < o.open.end) {
        let a = e.offsetAt(t),
          l = Jv(e, a, i, o);
        if (l) return l;
      }
      for (s = o.firstChild; s && (i >= s.end || s.type === "comment");) s = s.nextSibling;
    }
    for (; !s && o;)
      o.nextSibling
        ? o.nextSibling.type !== "comment"
          ? (s = o.nextSibling)
          : (o = o.nextSibling)
        : (o = o.parent);
    return s && Co(e, s);
  }
}
function Mc(e, t, n, r) {
  let i = e.offsetAt(t),
    o = H(e.getText(), r, i, !1),
    s;
  if (!o) return;
  let a = e.offsetAt(n);
  if (o.open && o.type !== "comment" && i - 1 > o.open.start)
    if (i < o.open.end || !o.firstChild || a <= o.firstChild.start) s = o;
    else {
      s = o.firstChild;
      let u;
      for (; s.nextSibling && i >= s.nextSibling.end;)
        (s && s.type !== "comment" && (u = s), (s = s.nextSibling));
      s = mt(s && s.type !== "comment" ? s : u);
    }
  for (; !s && o;)
    o.previousSibling
      ? o.previousSibling.type !== "comment"
        ? (s = mt(o.previousSibling))
        : (o = o.previousSibling)
      : (s = o.parent);
  if (!s) return;
  let l = Xv(e, i, a, s);
  return l || Co(e, s);
}
function Co(e, t) {
  if (t && t.open) {
    let n = t.open.start + 1,
      r = n + t.name.length;
    return z(e, n, r);
  }
}
function Jv(e, t, n, r) {
  if (!(!r.attributes || r.attributes.length === 0 || r.type === "comment"))
    for (let i of r.attributes) {
      if (n < i.start) return z(e, i.start, i.end);
      if (!i.value || i.value.start === i.value.end) continue;
      if ((t === i.start && n === i.end) || n < i.value.start)
        return z(e, i.value.start, i.value.end);
      if (!i.value.toString().includes(" ")) continue;
      let o;
      if ((t === i.value.start && n === i.value.end && (o = -1), o === void 0 && n < i.end)) {
        let s = e.positionAt(n).character,
          a = e.positionAt(i.value.start).character;
        o = s - a - 1;
      }
      if (o !== void 0) {
        let [s, a] = Zn(i.value.toString(), o);
        if (s === void 0 || a === void 0) return;
        if (s >= 0 && a >= 0) {
          let l = i.value.start + s,
            u = i.value.start + a;
          return z(e, l, u);
        }
      }
    }
}
function Xv(e, t, n, r) {
  if (!(!r.attributes || r.attributes.length === 0 || r.type === "comment"))
    for (let i = r.attributes.length - 1; i >= 0; i--) {
      let o = r.attributes[i];
      if (t <= o.start) continue;
      if (!o.value || o.value.start === o.value.end || t < o.value.start)
        return z(e, o.start, o.end);
      if (t === o.value.start)
        return n >= o.value.end ? z(e, o.start, o.end) : z(e, o.value.start, o.value.end);
      let s = e.positionAt(t).character,
        a = e.positionAt(o.value.start).character,
        l = t > o.value.end ? o.value.toString().length : s - a,
        [u, c] = Kn(o.value.toString(), l);
      if (u === void 0 || c === void 0) return;
      if (u >= 0 && c >= 0) {
        let f = o.value.start + u,
          h = o.value.start + c;
        return z(e, f, h);
      }
    }
}
var qc = q(require("vscode"));
Z();
function Vc(e, t, n, r) {
  let i = e.offsetAt(t),
    o = e.offsetAt(n),
    s = B(r, o, !0);
  if ((s || (s = r), !s)) return;
  if (s.type === "property" && i === s.start && o === s.end) return ur(e, s, i, o, !0, "next");
  if (s.type === "property" && i >= s.valueToken.start && o <= s.valueToken.end) {
    let l = ur(e, s, i, o, !1, "next");
    if (l) return l;
  }
  if (
    (s.type === "rule" && o < s.selectorToken.end) ||
    (s.type === "property" && o < s.valueToken.end)
  )
    return lr(e, s);
  let a = s.firstChild;
  for (; a && o >= a.end;) a = a.nextSibling;
  for (; !a && s;) ((a = s.nextSibling), (s = s.parent));
  return a ? lr(e, a) : void 0;
}
function Hc(e, t, n, r) {
  let i = e.offsetAt(t),
    o = e.offsetAt(n),
    s = B(r, i, !1);
  if ((s || (s = r), !s)) return;
  if (s.type === "property" && i === s.valueToken.start && o === s.valueToken.end) return lr(e, s);
  if (s.type === "property" && i >= s.valueToken.start && o <= s.valueToken.end) {
    let l = ur(e, s, i, o, !1, "prev");
    if (l) return l;
  }
  if (s.type === "property" || !s.firstChild || (s.type === "rule" && i <= s.firstChild.start))
    return lr(e, s);
  let a = s.firstChild;
  for (; a.nextSibling && i >= a.nextSibling.end;) a = a.nextSibling;
  return ((a = mt(a)), ur(e, a, i, o, !1, "prev"));
}
function lr(e, t) {
  if (!t) return;
  let n = t.type === "rule" ? t.selectorToken : t;
  return z(e, n.start, n.end);
}
function ur(e, t, n, r, i, o) {
  if (!t || t.type !== "property") return;
  let s = t,
    a = s.valueToken.stream.substring(s.valueToken.start, s.valueToken.end);
  if (((i = i || (o === "prev" && n === s.valueToken.start && r < s.valueToken.end)), i))
    return z(e, s.valueToken.start, s.valueToken.end);
  let l = -1;
  if (o === "prev") {
    if (n === s.valueToken.start) return;
    let k = e.positionAt(n).character,
      x = e.positionAt(s.valueToken.start).character;
    l = n > s.valueToken.end ? a.length : k - x;
  } else if (o === "next") {
    if (r === s.valueToken.end && (n > s.valueToken.start || !a.includes(" "))) return;
    let k = e.positionAt(r).character,
      x = e.positionAt(s.valueToken.start).character;
    l = r === s.valueToken.end ? -1 : k - x - 1;
  }
  let [u, c] = o === "prev" ? Kn(a, l) : Zn(a, l);
  if (!u && !c) return;
  let f = e.positionAt(s.valueToken.start),
    h = f.translate(0, u),
    p = f.translate(0, c);
  return new qc.Selection(h, p);
}
ie();
function Po(e) {
  if (!G() || !No.window.activeTextEditor) return;
  let t = No.window.activeTextEditor,
    n = t.document,
    r = R(n, !0);
  if (!r) return;
  let i = [];
  (t.selections.forEach((o) => {
    let s = o.isReversed ? o.active : o.anchor,
      a = o.isReversed ? o.anchor : o.active,
      l;
    (X(t.document.languageId)
      ? (l = e === "next" ? Vc(n, s, a, r) : Hc(n, s, a, r))
      : (l = e === "next" ? Bc(n, s, a, r) : Mc(n, s, a, r)),
      i.push(l || o));
  }),
    (t.selections = i),
    t.revealRange(t.selections[t.selections.length - 1]));
}
var oe = q(require("vscode"));
function vt(e) {
  return e > 47 && e < 58;
}
function Oo(e) {
  return e === 32 || e === 9 || e === 160;
}
function fr(e) {
  return Oo(e) || e === 10 || e === 13;
}
var cr = class e {
    constructor(t, n, r) {
      (r == null && typeof t == "string" && (r = t.length),
        (this.string = t),
        (this.pos = this.start = n || 0),
        (this.end = r || 0));
    }
    eof() {
      return this.pos >= this.end;
    }
    limit(t, n) {
      return new e(this.string, t, n);
    }
    peek() {
      return this.string.charCodeAt(this.pos);
    }
    next() {
      if (this.pos < this.string.length) return this.string.charCodeAt(this.pos++);
    }
    eat(t) {
      let n = this.peek(),
        r = typeof t == "function" ? t(n) : n === t;
      return (r && this.next(), r);
    }
    eatWhile(t) {
      let n = this.pos;
      for (; !this.eof() && this.eat(t););
      return this.pos !== n;
    }
    backUp(t) {
      this.pos -= t || 1;
    }
    current() {
      return this.substring(this.start, this.pos);
    }
    substring(t, n) {
      return this.string.slice(t, n);
    }
    error(t, n = this.pos) {
      return new Io(`${t} at ${n + 1}`, n, this.string);
    }
  },
  Io = class extends Error {
    constructor(t, n, r) {
      (super(t), (this.pos = n), (this.string = r));
    }
  };
var Yv = dr("null", 0);
function Zv(e) {
  let t = typeof e == "string" ? new cr(e) : e,
    n,
    r = 0,
    i = 21,
    o = [];
  for (; !t.eof();)
    (t.eatWhile(Oo),
      (t.start = t.pos),
      Kv(t)
        ? ((i & 1) === 0 && Je("Unexpected number", t), o.push(tx(t.current())), (i = 10))
        : Qc(t.peek())
          ? ((n = t.next()),
            Wc(n) && i & 16
              ? (Gc(n) && o.push(nx(n, r)), (i = 21))
              : ((i & 2) === 0 && Je("Unexpected operator", t), o.push(rx(n, r)), (i = 21)))
          : t.eat(40)
            ? ((i & 4) === 0 && Je('Unexpected "("', t), (r += 10), (i = 53))
            : t.eat(41)
              ? ((r -= 10),
                i & 32 ? o.push(Yv) : (i & 8) === 0 && Je('Unexpected ")"', t),
                (i = 14))
              : Je("Unknown character", t));
  (r < 0 || r >= 10) && Je('Unmatched "()"', t);
  let s = ex(o);
  return (s === null && Je("Parity", t), s);
}
function Kv(e) {
  let t = e.pos;
  return (e.eat(46) && e.eatWhile(vt)) || (e.eatWhile(vt) && (!e.eat(46) || e.eatWhile(vt)))
    ? !0
    : ((e.pos = t), !1);
}
function ex(e) {
  let t = [],
    n = [],
    r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    if (o.type === "num") n.push(o);
    else {
      for (r += o.type === "op1" ? 1 : 2; t.length && o.priority <= t[t.length - 1].priority;)
        n.push(t.pop());
      t.push(o);
    }
  }
  return r + 1 === n.length + t.length ? n.concat(t.reverse()) : null;
}
function tx(e, t) {
  return dr("num", parseFloat(e), t);
}
function nx(e, t = 0) {
  return (e === 45 && (t += 2), dr("op1", e, t));
}
function rx(e, t = 0) {
  return (e === 42 ? (t += 1) : (e === 47 || e === 92) && (t += 2), dr("op2", e, t));
}
function Je(e, t) {
  throw (t && (e += ` at column ${t.pos} of expression`), new Error(e));
}
function Wc(e) {
  return ix(e) || Gc(e);
}
function ix(e) {
  return e === 43;
}
function Gc(e) {
  return e === 45;
}
function Qc(e) {
  return e === 43 || e === 45 || e === 42 || e === 47 || e === 92;
}
function dr(e, t, n = 0) {
  return { type: e, value: t, priority: n };
}
var ox = { lookAhead: !0, whitespace: !0 };
function Jc(e, t = e.length, n) {
  let r = Object.assign(Object.assign({}, ox), n),
    i = { text: e, pos: t },
    o;
  if (r.lookAhead && $o(i) === 41) {
    i.pos++;
    let l = e.length;
    for (; i.pos < l && ((o = $o(i)), !(o !== 41 && !(r.whitespace && fr(o))));) i.pos++;
  }
  let s = i.pos,
    a = 0;
  for (; i.pos >= 0;)
    if (!sx(i)) {
      if (((o = Ro(i)), o === 41)) a++;
      else if (o === 40) {
        if (!a) break;
        a--;
      } else if (!((r.whitespace && fr(o)) || Wc(o) || Qc(o))) break;
      i.pos--;
    }
  if (i.pos !== s && !a) {
    for (; fr($o(i));) i.pos++;
    return [i.pos, s];
  }
  return null;
}
function sx(e) {
  if (vt(Ro(e))) {
    e.pos--;
    let t = !1,
      n;
    for (; e.pos >= 0;) {
      if (((n = Ro(e)), n === 46)) {
        if (t) break;
        t = !0;
      } else if (!vt(n)) break;
      e.pos--;
    }
    return !0;
  }
  return !1;
}
function Ro(e) {
  return e.text.charCodeAt(e.pos - 1);
}
function $o(e) {
  return e.text.charCodeAt(e.pos);
}
var ax = { 45: (e) => -e },
  lx = {
    43: (e, t) => e + t,
    45: (e, t) => e - t,
    42: (e, t) => e * t,
    47: (e, t) => e / t,
    92: (e, t) => Math.floor(e / t),
  };
function ux(e) {
  if ((Array.isArray(e) || (e = Zv(e)), !e || !e.length)) return null;
  let t = [],
    n,
    r,
    i;
  for (let o = 0, s = e.length; o < s; o++) {
    let a = e[o];
    if (a.type === "num") t.push(a.value);
    else if (a.type === "op2") ((r = t.pop()), (n = t.pop()), (i = lx[a.value]), t.push(i(n, r)));
    else if (a.type === "op1") ((n = t.pop()), (i = ax[a.value]), t.push(i(n)));
    else throw new Error("Invalid expression");
  }
  if (t.length > 1) throw new Error("Invalid Expression (parity)");
  return t[0];
}
var _o = ux;
function Xc() {
  if (!oe.window.activeTextEditor)
    return (oe.window.showInformationMessage("No editor is active"), Promise.resolve(!1));
  let e = oe.window.activeTextEditor;
  return e.edit((t) => {
    e.selections.forEach((n) => {
      let r = n.isReversed ? n.active : n.anchor,
        i = n.isReversed ? n.anchor : n.active,
        o = e.document.getText(new oe.Range(r, i));
      try {
        if (o) {
          let s = String(_o(o));
          t.replace(new oe.Range(r, i), s);
        } else {
          let s = e.document.getText(new oe.Range(new oe.Position(n.end.line, 0), i)),
            a = Jc(s);
          if (!a) throw new Error("Invalid extracted indices");
          let l = String(_o(s.substr(a[0], a[1]))),
            u = new oe.Range(new oe.Position(n.end.line, a[0]), new oe.Position(n.end.line, a[1]));
          t.replace(u, l);
        }
      } catch (s) {
        (oe.window.showErrorMessage("Could not evaluate expression"),
          console.warn("Math evaluation error", s));
      }
    });
  });
}
var xt = q(require("vscode")),
  Lo = /[0-9]/;
function Xe(e) {
  if (!xt.window.activeTextEditor) {
    xt.window.showInformationMessage("No editor is active");
    return;
  }
  let t = xt.window.activeTextEditor;
  return t.edit((n) => {
    t.selections.forEach((r) => {
      let i = fx(t.document, r.isReversed ? r.anchor : r.active);
      if (!i) return;
      let o = t.document.getText(i);
      Yc(o) && n.replace(i, cx(o, e));
    });
  });
}
function cx(e, t) {
  let n,
    r = (n = e.match(/\.(\d+)$/)) ? n[1].length : 1,
    i = String((parseFloat(e) + t).toFixed(r)).replace(/\.0+$/, "");
  return (
    (n = e.match(/^\-?(0\d+)/)) &&
      (i = i.replace(
        /^(\-?)(\d+)/,
        (o, s, a) => s + "0".repeat(Math.max(0, (n ? n[1].length : 0) - a.length)) + a,
      )),
    /^\-?\./.test(e) && (i = i.replace(/^(\-?)0+/, "$1")),
    i
  );
}
function fx(e, t) {
  let n = e.lineAt(t.line).text,
    r = t.character,
    i = t.character,
    o = !1,
    s = !1,
    a;
  for (; r > 0;)
    if (((a = n[--r]), a === "-")) {
      s = !0;
      break;
    } else if (a === "." && !o) o = !0;
    else if (!Lo.test(a)) {
      r++;
      break;
    }
  for (n[i] === "-" && !s && i++; i < n.length;)
    if (((a = n[i++]), a === "." && !o && Lo.test(n[i]))) o = !0;
    else if (!Lo.test(a)) {
      i--;
      break;
    }
  if (r !== i && Yc(n.slice(r, i))) return new xt.Range(t.line, r, t.line, i);
}
function Yc(e) {
  return e ? !isNaN(parseFloat(e)) : !1;
}
Z();
var jo = require("vscode");
Z();
var Zc = ["-webkit-", "-moz-", "-ms-", "-o-", ""];
function Kc() {
  let e = jo.window.activeTextEditor;
  if (!e) {
    jo.window.showInformationMessage("No editor is active.");
    return;
  }
  let t = wc(e, e.selection.active);
  if (t) return dx(e, t);
}
function dx(e, t) {
  let n = t.parent,
    r = "";
  for (let s of Zc)
    if (t.name.startsWith(s)) {
      r = s;
      break;
    }
  let i = t.name.substr(r.length),
    o = t.value;
  return e.edit((s) => {
    Zc.forEach((a) => {
      if (a === r) return;
      let l = Qt(n, a + i);
      if (l) {
        let u = D(e.document, l.valueToken.start, l.valueToken.end);
        s.replace(u, o);
      }
    });
  });
}
ie();
function tf(e) {
  (xc(),
    ef(e),
    Xn(),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.wrapWithAbbreviation", (t) => {
        Tc(t);
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("emmet.expandAbbreviation", (t) => {
        Ec(t);
      }),
    ),
    e.subscriptions.push(O.commands.registerCommand("editor.emmet.action.removeTag", () => Nc())),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.updateTag", (t) =>
        t && typeof t == "string" ? So(t) : So(void 0),
      ),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.matchTag", () => {
        Pc();
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.balanceOut", () => {
        $c();
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.balanceIn", () => {
        Rc();
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.splitJoinTag", () => Lc()),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.mergeLines", () => {
        jc();
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.toggleComment", () => {
        Fc();
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.nextEditPoint", () => {
        Ao("next");
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.prevEditPoint", () => {
        Ao("prev");
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.selectNextItem", () => {
        Po("next");
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.selectPrevItem", () => {
        Po("prev");
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.evaluateMathExpression", () => {
        Xc();
      }),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.incrementNumberByOneTenth", () => Xe(0.1)),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.incrementNumberByOne", () => Xe(1)),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.incrementNumberByTen", () => Xe(10)),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.decrementNumberByOneTenth", () => Xe(-0.1)),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.decrementNumberByOne", () => Xe(-1)),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.decrementNumberByTen", () => Xe(-10)),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("editor.emmet.action.reflectCSSValue", () => Kc()),
    ),
    e.subscriptions.push(
      O.commands.registerCommand("workbench.action.showEmmetCommands", () => {
        O.commands.executeCommand("workbench.action.quickOpen", ">Emmet: ");
      }),
    ),
    e.subscriptions.push(
      O.workspace.onDidChangeConfiguration((t) => {
        ((t.affectsConfiguration("emmet.includeLanguages") ||
          t.affectsConfiguration("emmet.useInlineCompletions")) &&
          ef(e),
          t.affectsConfiguration("emmet.extensionsPath") && Xn());
      }),
    ),
    e.subscriptions.push(
      O.workspace.onDidSaveTextDocument((t) => {
        let n = Sc(t.fileName);
        n.startsWith("snippets") && n.endsWith(".json") && Xn(!0);
      }),
    ),
    e.subscriptions.push(
      O.workspace.onDidOpenTextDocument((t) => {
        let n = we(t.languageId, {}, []) ?? "",
          r = tr();
        (r.markup.includes(n) || r.stylesheet.includes(n)) && Zs(t);
      }),
    ),
    e.subscriptions.push(
      O.workspace.onDidCloseTextDocument((t) => {
        let n = we(t.languageId, {}, []) ?? "",
          r = tr();
        (r.markup.includes(n) || r.stylesheet.includes(n)) && Ks(t);
      }),
    ));
}
var yt = new Map(),
  Kt = [];
function ef(e) {
  px();
  let t = new nr(),
    n = {
      async provideInlineCompletionItems(o, s, a, l) {
        let u = await t.provideCompletionItems(o, s, l, {
          triggerCharacter: void 0,
          triggerKind: O.CompletionTriggerKind.Invoke,
        });
        if (!u) return;
        let c = u.items[0];
        if (!c) return;
        let f = c.range;
        if (o.getText(f) === c.label)
          return [{ insertText: c.insertText, filterText: c.label, range: f }];
      },
    },
    r = O.workspace.getConfiguration("emmet").get("useInlineCompletions"),
    i = ht();
  (Object.keys(i).forEach((o) => {
    if (yt.has(o) && yt.get(o) === i[o]) return;
    if (r) {
      let a = O.languages.registerInlineCompletionItemProvider({ language: o, scheme: "*" }, n);
      Kt.push(a);
    }
    let s = O.languages.registerCompletionItemProvider(
      { language: o, scheme: "*" },
      t,
      ...Wt[i[o]],
    );
    (Kt.push(s), yt.set(o, i[o]));
  }),
    Object.keys(Wt).forEach((o) => {
      if (!yt.has(o)) {
        if (r) {
          let a = O.languages.registerInlineCompletionItemProvider({ language: o, scheme: "*" }, n);
          Kt.push(a);
        }
        let s = O.languages.registerCompletionItemProvider(
          { language: o, scheme: "*" },
          t,
          ...Wt[o],
        );
        (Kt.push(s), yt.set(o, o));
      }
    }));
}
function px() {
  yt.clear();
  let e;
  for (; (e = Kt.pop());) e.dispose();
}
Z();
function Xy(e) {
  (e.subscriptions.push(
    Ur.commands.registerCommand("editor.emmet.action.updateImageSize", () =>
      Promise.resolve()
        .then(() => (Kf(), Zf))
        .then((t) => t.updateImageSize()),
    ),
  ),
    vc(Ur.Uri.file((0, ed.homedir)())),
    tf(e));
}
0 && (module.exports = { activate });
//# sourceMappingURL=emmetNodeMain.js.map
