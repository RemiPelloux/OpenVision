var e = function() {
    this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32;
}, r = -1;
e.Diff = function(t, e) {
    return [
        t,
        e
    ];
}, e.prototype.diff_main = function(t, r, n, s) {
    void 0 === s && (s = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
    var i = s;
    if (null == t || null == r) throw new Error("Null input. (diff_main)");
    if (t == r) return t ? [
        new e.Diff(0, t)
    ] : [];
    void 0 === n && (n = !0);
    var o = n, a = this.diff_commonPrefix(t, r), u = t.substring(0, a);
    t = t.substring(a), r = r.substring(a), a = this.diff_commonSuffix(t, r);
    var c = t.substring(t.length - a);
    t = t.substring(0, t.length - a), r = r.substring(0, r.length - a);
    var l = this.diff_compute_(t, r, o, i);
    return u && l.unshift(new e.Diff(0, u)), c && l.push(new e.Diff(0, c)), this.diff_cleanupMerge(l), l;
}, e.prototype.diff_compute_ = function(t, n, s, i) {
    var o;
    if (!t) return [
        new e.Diff(1, n)
    ];
    if (!n) return [
        new e.Diff(r, t)
    ];
    var a = t.length > n.length ? t : n, u = t.length > n.length ? n : t, c = a.indexOf(u);
    if (-1 != c) return o = [
        new e.Diff(1, a.substring(0, c)),
        new e.Diff(0, u),
        new e.Diff(1, a.substring(c + u.length))
    ], t.length > n.length && (o[0][0] = o[2][0] = r), o;
    if (1 == u.length) return [
        new e.Diff(r, t),
        new e.Diff(1, n)
    ];
    var l = this.diff_halfMatch_(t, n);
    if (l) {
        var m = l[0], d = l[1], f = l[2], p = l[3], h = l[4], g = this.diff_main(m, f, s, i), A = this.diff_main(d, p, s, i);
        return g.concat([
            new e.Diff(0, h)
        ], A);
    }
    return s && t.length > 100 && n.length > 100 ? this.diff_lineMode_(t, n, i) : this.diff_bisect_(t, n, i);
}, e.prototype.diff_lineMode_ = function(t, n, s) {
    var i = this.diff_linesToChars_(t, n);
    t = i.chars1, n = i.chars2;
    var o = i.lineArray, a = this.diff_main(t, n, !1, s);
    this.diff_charsToLines_(a, o), this.diff_cleanupSemantic(a), a.push(new e.Diff(0, ""));
    for(var u = 0, c = 0, l = 0, m = "", d = ""; u < a.length;){
        switch(a[u][0]){
            case 1:
                l++, d += a[u][1];
                break;
            case r:
                c++, m += a[u][1];
                break;
            case 0:
                if (c >= 1 && l >= 1) {
                    a.splice(u - c - l, c + l), u = u - c - l;
                    for(var f = this.diff_main(m, d, !1, s), p = f.length - 1; p >= 0; p--)a.splice(u, 0, f[p]);
                    u += f.length;
                }
                l = 0, c = 0, m = "", d = "";
        }
        u++;
    }
    return a.pop(), a;
}, e.prototype.diff_bisect_ = function(t, n, s) {
    for(var i = t.length, o = n.length, a = Math.ceil((i + o) / 2), u = a, c = 2 * a, l = new Array(c), m = new Array(c), d = 0; d < c; d++)l[d] = -1, m[d] = -1;
    l[u + 1] = 0, m[u + 1] = 0;
    for(var f = i - o, p = f % 2 != 0, h = 0, g = 0, A = 0, _ = 0, y = 0; y < a && !((new Date).getTime() > s); y++){
        for(var w = -y + h; w <= y - g; w += 2){
            for(var S = u + w, J = (b = w == -y || w != y && l[S - 1] < l[S + 1] ? l[S + 1] : l[S - 1] + 1) - w; b < i && J < o && t.charAt(b) == n.charAt(J);)b++, J++;
            if (l[S] = b, b > i) g += 2;
            else if (J > o) h += 2;
            else if (p) {
                if ((I = u + f - w) >= 0 && I < c && -1 != m[I]) {
                    if (b >= (E = i - m[I])) return this.diff_bisectSplit_(t, n, b, J, s);
                }
            }
        }
        for(var B = -y + A; B <= y - _; B += 2){
            for(var E, I = u + B, C = (E = B == -y || B != y && m[I - 1] < m[I + 1] ? m[I + 1] : m[I - 1] + 1) - B; E < i && C < o && t.charAt(i - E - 1) == n.charAt(o - C - 1);)E++, C++;
            if (m[I] = E, E > i) _ += 2;
            else if (C > o) A += 2;
            else if (!p) {
                if ((S = u + f - B) >= 0 && S < c && -1 != l[S]) {
                    var b;
                    J = u + (b = l[S]) - S;
                    if (b >= (E = i - E)) return this.diff_bisectSplit_(t, n, b, J, s);
                }
            }
        }
    }
    return [
        new e.Diff(r, t),
        new e.Diff(1, n)
    ];
}, e.prototype.diff_bisectSplit_ = function(t, e, r, n, s) {
    var i = t.substring(0, r), o = e.substring(0, n), a = t.substring(r), u = e.substring(n), c = this.diff_main(i, o, !1, s), l = this.diff_main(a, u, !1, s);
    return c.concat(l);
}, e.prototype.diff_linesToChars_ = function(t, e) {
    var r = [], n = {};
    function s(t) {
        for(var e = "", s = 0, o = -1, a = r.length; o < t.length - 1;){
            -1 == (o = t.indexOf("\n", s)) && (o = t.length - 1);
            var u = t.substring(s, o + 1);
            (n.hasOwnProperty ? n.hasOwnProperty(u) : void 0 !== n[u]) ? e += String.fromCharCode(n[u]) : (a == i && (u = t.substring(s), o = t.length), e += String.fromCharCode(a), n[u] = a, r[a++] = u), s = o + 1;
        }
        return e;
    }
    r[0] = "";
    var i = 4e4, o = s(t);
    return i = 65535, {
        chars1: o,
        chars2: s(e),
        lineArray: r
    };
}, e.prototype.diff_charsToLines_ = function(t, e) {
    for(var r = 0; r < t.length; r++){
        for(var n = t[r][1], s = [], i = 0; i < n.length; i++)s[i] = e[n.charCodeAt(i)];
        t[r][1] = s.join("");
    }
}, e.prototype.diff_commonPrefix = function(t, e) {
    if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
    for(var r = 0, n = Math.min(t.length, e.length), s = n, i = 0; r < s;)t.substring(i, s) == e.substring(i, s) ? i = r = s : n = s, s = Math.floor((n - r) / 2 + r);
    return s;
}, e.prototype.diff_commonSuffix = function(t, e) {
    if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
    for(var r = 0, n = Math.min(t.length, e.length), s = n, i = 0; r < s;)t.substring(t.length - s, t.length - i) == e.substring(e.length - s, e.length - i) ? i = r = s : n = s, s = Math.floor((n - r) / 2 + r);
    return s;
}, e.prototype.diff_commonOverlap_ = function(t, e) {
    var r = t.length, n = e.length;
    if (0 == r || 0 == n) return 0;
    r > n ? t = t.substring(r - n) : r < n && (e = e.substring(0, r));
    var s = Math.min(r, n);
    if (t == e) return s;
    for(var i = 0, o = 1;;){
        var a = t.substring(s - o), u = e.indexOf(a);
        if (-1 == u) return i;
        o += u, 0 != u && t.substring(s - o) != e.substring(0, o) || (i = o, o++);
    }
}, e.prototype.diff_halfMatch_ = function(t, e) {
    if (this.Diff_Timeout <= 0) return null;
    var r = t.length > e.length ? t : e, n = t.length > e.length ? e : t;
    if (r.length < 4 || 2 * n.length < r.length) return null;
    var s = this;
    function i(t, e, r) {
        for(var n, i, o, a, u = t.substring(r, r + Math.floor(t.length / 4)), c = -1, l = ""; -1 != (c = e.indexOf(u, c + 1));){
            var m = s.diff_commonPrefix(t.substring(r), e.substring(c)), d = s.diff_commonSuffix(t.substring(0, r), e.substring(0, c));
            l.length < d + m && (l = e.substring(c - d, c) + e.substring(c, c + m), n = t.substring(0, r - d), i = t.substring(r + m), o = e.substring(0, c - d), a = e.substring(c + m));
        }
        return 2 * l.length >= t.length ? [
            n,
            i,
            o,
            a,
            l
        ] : null;
    }
    var o, a, u, c, l, m = i(r, n, Math.ceil(r.length / 4)), d = i(r, n, Math.ceil(r.length / 2));
    return m || d ? (o = d ? m && m[4].length > d[4].length ? m : d : m, t.length > e.length ? (a = o[0], u = o[1], c = o[2], l = o[3]) : (c = o[0], l = o[1], a = o[2], u = o[3]), [
        a,
        u,
        c,
        l,
        o[4]
    ]) : null;
}, e.prototype.diff_cleanupSemantic = function(t) {
    for(var n = !1, s = [], i = 0, o = null, a = 0, u = 0, c = 0, l = 0, m = 0; a < t.length;)0 == t[a][0] ? (s[i++] = a, u = l, c = m, l = 0, m = 0, o = t[a][1]) : (1 == t[a][0] ? l += t[a][1].length : m += t[a][1].length, o && o.length <= Math.max(u, c) && o.length <= Math.max(l, m) && (t.splice(s[i - 1], 0, new e.Diff(r, o)), t[s[i - 1] + 1][0] = 1, i--, a = --i > 0 ? s[i - 1] : -1, u = 0, c = 0, l = 0, m = 0, o = null, n = !0)), a++;
    for(n && this.diff_cleanupMerge(t), this.diff_cleanupSemanticLossless(t), a = 1; a < t.length;){
        if (t[a - 1][0] == r && 1 == t[a][0]) {
            var d = t[a - 1][1], f = t[a][1], p = this.diff_commonOverlap_(d, f), h = this.diff_commonOverlap_(f, d);
            p >= h ? (p >= d.length / 2 || p >= f.length / 2) && (t.splice(a, 0, new e.Diff(0, f.substring(0, p))), t[a - 1][1] = d.substring(0, d.length - p), t[a + 1][1] = f.substring(p), a++) : (h >= d.length / 2 || h >= f.length / 2) && (t.splice(a, 0, new e.Diff(0, d.substring(0, h))), t[a - 1][0] = 1, t[a - 1][1] = f.substring(0, f.length - h), t[a + 1][0] = r, t[a + 1][1] = d.substring(h), a++), a++;
        }
        a++;
    }
}, e.prototype.diff_cleanupSemanticLossless = function(t) {
    function r(t, r) {
        if (!t || !r) return 6;
        var n = t.charAt(t.length - 1), s = r.charAt(0), i = n.match(e.nonAlphaNumericRegex_), o = s.match(e.nonAlphaNumericRegex_), a = i && n.match(e.whitespaceRegex_), u = o && s.match(e.whitespaceRegex_), c = a && n.match(e.linebreakRegex_), l = u && s.match(e.linebreakRegex_), m = c && t.match(e.blanklineEndRegex_), d = l && r.match(e.blanklineStartRegex_);
        return m || d ? 5 : c || l ? 4 : i && !a && u ? 3 : a || u ? 2 : i || o ? 1 : 0;
    }
    for(var n = 1; n < t.length - 1;){
        if (0 == t[n - 1][0] && 0 == t[n + 1][0]) {
            var s = t[n - 1][1], i = t[n][1], o = t[n + 1][1], a = this.diff_commonSuffix(s, i);
            if (a) {
                var u = i.substring(i.length - a);
                s = s.substring(0, s.length - a), i = u + i.substring(0, i.length - a), o = u + o;
            }
            for(var c = s, l = i, m = o, d = r(s, i) + r(i, o); i.charAt(0) === o.charAt(0);){
                s += i.charAt(0), i = i.substring(1) + o.charAt(0), o = o.substring(1);
                var f = r(s, i) + r(i, o);
                f >= d && (d = f, c = s, l = i, m = o);
            }
            t[n - 1][1] != c && (c ? t[n - 1][1] = c : (t.splice(n - 1, 1), n--), t[n][1] = l, m ? t[n + 1][1] = m : (t.splice(n + 1, 1), n--));
        }
        n++;
    }
}, e.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, e.whitespaceRegex_ = /\s/, e.linebreakRegex_ = /[\r\n]/, e.blanklineEndRegex_ = /\n\r?\n$/, e.blanklineStartRegex_ = /^\r?\n\r?\n/, e.prototype.diff_cleanupEfficiency = function(t) {
    for(var n = !1, s = [], i = 0, o = null, a = 0, u = !1, c = !1, l = !1, m = !1; a < t.length;)0 == t[a][0] ? (t[a][1].length < this.Diff_EditCost && (l || m) ? (s[i++] = a, u = l, c = m, o = t[a][1]) : (i = 0, o = null), l = m = !1) : (t[a][0] == r ? m = !0 : l = !0, o && (u && c && l && m || o.length < this.Diff_EditCost / 2 && u + c + l + m == 3) && (t.splice(s[i - 1], 0, new e.Diff(r, o)), t[s[i - 1] + 1][0] = 1, i--, o = null, u && c ? (l = m = !0, i = 0) : (a = --i > 0 ? s[i - 1] : -1, l = m = !1), n = !0)), a++;
    n && this.diff_cleanupMerge(t);
}, e.prototype.diff_cleanupMerge = function(t) {
    t.push(new e.Diff(0, ""));
    for(var n, s = 0, i = 0, o = 0, a = "", u = ""; s < t.length;)switch(t[s][0]){
        case 1:
            o++, u += t[s][1], s++;
            break;
        case r:
            i++, a += t[s][1], s++;
            break;
        case 0:
            i + o > 1 ? (0 !== i && 0 !== o && (0 !== (n = this.diff_commonPrefix(u, a)) && (s - i - o > 0 && 0 == t[s - i - o - 1][0] ? t[s - i - o - 1][1] += u.substring(0, n) : (t.splice(0, 0, new e.Diff(0, u.substring(0, n))), s++), u = u.substring(n), a = a.substring(n)), 0 !== (n = this.diff_commonSuffix(u, a)) && (t[s][1] = u.substring(u.length - n) + t[s][1], u = u.substring(0, u.length - n), a = a.substring(0, a.length - n))), s -= i + o, t.splice(s, i + o), a.length && (t.splice(s, 0, new e.Diff(r, a)), s++), u.length && (t.splice(s, 0, new e.Diff(1, u)), s++), s++) : 0 !== s && 0 == t[s - 1][0] ? (t[s - 1][1] += t[s][1], t.splice(s, 1)) : s++, o = 0, i = 0, a = "", u = "";
    }
    "" === t[t.length - 1][1] && t.pop();
    var c = !1;
    for(s = 1; s < t.length - 1;)0 == t[s - 1][0] && 0 == t[s + 1][0] && (t[s][1].substring(t[s][1].length - t[s - 1][1].length) == t[s - 1][1] ? (t[s][1] = t[s - 1][1] + t[s][1].substring(0, t[s][1].length - t[s - 1][1].length), t[s + 1][1] = t[s - 1][1] + t[s + 1][1], t.splice(s - 1, 1), c = !0) : t[s][1].substring(0, t[s + 1][1].length) == t[s + 1][1] && (t[s - 1][1] += t[s + 1][1], t[s][1] = t[s][1].substring(t[s + 1][1].length) + t[s + 1][1], t.splice(s + 1, 1), c = !0)), s++;
    c && this.diff_cleanupMerge(t);
}, e.prototype.diff_xIndex = function(t, e) {
    var n, s = 0, i = 0, o = 0, a = 0;
    for(n = 0; n < t.length && (1 !== t[n][0] && (s += t[n][1].length), t[n][0] !== r && (i += t[n][1].length), !(s > e)); n++)o = s, a = i;
    return t.length != n && t[n][0] === r ? a : a + (e - o);
}, e.prototype.diff_prettyHtml = function(t) {
    for(var e = [], n = /&/g, s = /</g, i = />/g, o = /\n/g, a = 0; a < t.length; a++){
        var u = t[a][0], c = t[a][1].replace(n, "&amp;").replace(s, "&lt;").replace(i, "&gt;").replace(o, "&para;<br>");
        switch(u){
            case 1:
                e[a] = '<ins style="background:#e6ffe6;">' + c + "</ins>";
                break;
            case r:
                e[a] = '<del style="background:#ffe6e6;">' + c + "</del>";
                break;
            case 0:
                e[a] = "<span>" + c + "</span>";
        }
    }
    return e.join("");
}, e.prototype.diff_text1 = function(t) {
    for(var e = [], r = 0; r < t.length; r++)1 !== t[r][0] && (e[r] = t[r][1]);
    return e.join("");
}, e.prototype.diff_text2 = function(t) {
    for(var e = [], n = 0; n < t.length; n++)t[n][0] !== r && (e[n] = t[n][1]);
    return e.join("");
}, e.prototype.diff_levenshtein = function(t) {
    for(var e = 0, n = 0, s = 0, i = 0; i < t.length; i++){
        var o = t[i][0], a = t[i][1];
        switch(o){
            case 1:
                n += a.length;
                break;
            case r:
                s += a.length;
                break;
            case 0:
                e += Math.max(n, s), n = 0, s = 0;
        }
    }
    return e += Math.max(n, s);
}, e.prototype.diff_toDelta = function(t) {
    for(var e = [], n = 0; n < t.length; n++)switch(t[n][0]){
        case 1:
            e[n] = "+" + encodeURI(t[n][1]);
            break;
        case r:
            e[n] = "-" + t[n][1].length;
            break;
        case 0:
            e[n] = "=" + t[n][1].length;
    }
    return e.join("\t").replace(/%20/g, " ");
}, e.prototype.diff_fromDelta = function(t, n) {
    for(var s = [], i = 0, o = 0, a = n.split(/\t/g), u = 0; u < a.length; u++){
        var c = a[u].substring(1);
        switch(a[u].charAt(0)){
            case "+":
                try {
                    s[i++] = new e.Diff(1, decodeURI(c));
                } catch (t) {
                    throw new Error("Illegal escape in diff_fromDelta: " + c);
                }
                break;
            case "-":
            case "=":
                var l = parseInt(c, 10);
                if (isNaN(l) || l < 0) throw new Error("Invalid number in diff_fromDelta: " + c);
                var m = t.substring(o, o += l);
                "=" == a[u].charAt(0) ? s[i++] = new e.Diff(0, m) : s[i++] = new e.Diff(r, m);
                break;
            default:
                if (a[u]) throw new Error("Invalid diff operation in diff_fromDelta: " + a[u]);
        }
    }
    if (o != t.length) throw new Error("Delta length (" + o + ") does not equal source text length (" + t.length + ").");
    return s;
}, e.prototype.match_main = function(t, e, r) {
    if (null == t || null == e || null == r) throw new Error("Null input. (match_main)");
    return r = Math.max(0, Math.min(r, t.length)), t == e ? 0 : t.length ? t.substring(r, r + e.length) == e ? r : this.match_bitap_(t, e, r) : -1;
}, e.prototype.match_bitap_ = function(t, e, r) {
    if (e.length > this.Match_MaxBits) throw new Error("Pattern too long for this browser.");
    var n = this.match_alphabet_(e), s = this;
    function i(t, n) {
        var i = t / e.length, o = Math.abs(r - n);
        return s.Match_Distance ? i + o / s.Match_Distance : o ? 1 : i;
    }
    var o = this.Match_Threshold, a = t.indexOf(e, r);
    -1 != a && (o = Math.min(i(0, a), o), -1 != (a = t.lastIndexOf(e, r + e.length)) && (o = Math.min(i(0, a), o)));
    var u, c, l = 1 << e.length - 1;
    a = -1;
    for(var m, d = e.length + t.length, f = 0; f < e.length; f++){
        for(u = 0, c = d; u < c;)i(f, r + c) <= o ? u = c : d = c, c = Math.floor((d - u) / 2 + u);
        d = c;
        var p = Math.max(1, r - c + 1), h = Math.min(r + c, t.length) + e.length, g = Array(h + 2);
        g[h + 1] = (1 << f) - 1;
        for(var A = h; A >= p; A--){
            var _ = n[t.charAt(A - 1)];
            if (g[A] = 0 === f ? (g[A + 1] << 1 | 1) & _ : (g[A + 1] << 1 | 1) & _ | (m[A + 1] | m[A]) << 1 | 1 | m[A + 1], g[A] & l) {
                var y = i(f, A - 1);
                if (y <= o) {
                    if (o = y, !((a = A - 1) > r)) break;
                    p = Math.max(1, 2 * r - a);
                }
            }
        }
        if (i(f + 1, r) > o) break;
        m = g;
    }
    return a;
}, e.prototype.match_alphabet_ = function(t) {
    for(var e = {}, r = 0; r < t.length; r++)e[t.charAt(r)] = 0;
    for(r = 0; r < t.length; r++)e[t.charAt(r)] |= 1 << t.length - r - 1;
    return e;
}, e.prototype.patch_addContext_ = function(t, r) {
    if (0 != r.length) {
        if (null === t.start2) throw Error("patch not initialized");
        for(var n = r.substring(t.start2, t.start2 + t.length1), s = 0; r.indexOf(n) != r.lastIndexOf(n) && n.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;)s += this.Patch_Margin, n = r.substring(t.start2 - s, t.start2 + t.length1 + s);
        s += this.Patch_Margin;
        var i = r.substring(t.start2 - s, t.start2);
        i && t.diffs.unshift(new e.Diff(0, i));
        var o = r.substring(t.start2 + t.length1, t.start2 + t.length1 + s);
        o && t.diffs.push(new e.Diff(0, o)), t.start1 -= i.length, t.start2 -= i.length, t.length1 += i.length + o.length, t.length2 += i.length + o.length;
    }
}, e.prototype.patch_make = function(t, n, s) {
    var i, o;
    if ("string" == typeof t && "string" == typeof n && void 0 === s) i = t, (o = this.diff_main(i, n, !0)).length > 2 && (this.diff_cleanupSemantic(o), this.diff_cleanupEfficiency(o));
    else if (t && "object" == typeof t && void 0 === n && void 0 === s) o = t, i = this.diff_text1(o);
    else if ("string" == typeof t && n && "object" == typeof n && void 0 === s) i = t, o = n;
    else {
        if ("string" != typeof t || "string" != typeof n || !s || "object" != typeof s) throw new Error("Unknown call format to patch_make.");
        i = t, o = s;
    }
    if (0 === o.length) return [];
    for(var a = [], u = new e.patch_obj, c = 0, l = 0, m = 0, d = i, f = i, p = 0; p < o.length; p++){
        var h = o[p][0], g = o[p][1];
        switch(c || 0 === h || (u.start1 = l, u.start2 = m), h){
            case 1:
                u.diffs[c++] = o[p], u.length2 += g.length, f = f.substring(0, m) + g + f.substring(m);
                break;
            case r:
                u.length1 += g.length, u.diffs[c++] = o[p], f = f.substring(0, m) + f.substring(m + g.length);
                break;
            case 0:
                g.length <= 2 * this.Patch_Margin && c && o.length != p + 1 ? (u.diffs[c++] = o[p], u.length1 += g.length, u.length2 += g.length) : g.length >= 2 * this.Patch_Margin && c && (this.patch_addContext_(u, d), a.push(u), u = new e.patch_obj, c = 0, d = f, l = m);
        }
        1 !== h && (l += g.length), h !== r && (m += g.length);
    }
    return c && (this.patch_addContext_(u, d), a.push(u)), a;
}, e.prototype.patch_deepCopy = function(t) {
    for(var r = [], n = 0; n < t.length; n++){
        var s = t[n], i = new e.patch_obj;
        i.diffs = [];
        for(var o = 0; o < s.diffs.length; o++)i.diffs[o] = new e.Diff(s.diffs[o][0], s.diffs[o][1]);
        i.start1 = s.start1, i.start2 = s.start2, i.length1 = s.length1, i.length2 = s.length2, r[n] = i;
    }
    return r;
}, e.prototype.patch_apply = function(t, e) {
    if (0 == t.length) return [
        e,
        []
    ];
    t = this.patch_deepCopy(t);
    var n = this.patch_addPadding(t);
    e = n + e + n, this.patch_splitMax(t);
    for(var s = 0, i = [], o = 0; o < t.length; o++){
        var a, u, c = t[o].start2 + s, l = this.diff_text1(t[o].diffs), m = -1;
        if (l.length > this.Match_MaxBits ? -1 != (a = this.match_main(e, l.substring(0, this.Match_MaxBits), c)) && (-1 == (m = this.match_main(e, l.substring(l.length - this.Match_MaxBits), c + l.length - this.Match_MaxBits)) || a >= m) && (a = -1) : a = this.match_main(e, l, c), -1 == a) i[o] = !1, s -= t[o].length2 - t[o].length1;
        else if (i[o] = !0, s = a - c, l == (u = -1 == m ? e.substring(a, a + l.length) : e.substring(a, m + this.Match_MaxBits))) e = e.substring(0, a) + this.diff_text2(t[o].diffs) + e.substring(a + l.length);
        else {
            var d = this.diff_main(l, u, !1);
            if (l.length > this.Match_MaxBits && this.diff_levenshtein(d) / l.length > this.Patch_DeleteThreshold) i[o] = !1;
            else {
                this.diff_cleanupSemanticLossless(d);
                for(var f, p = 0, h = 0; h < t[o].diffs.length; h++){
                    var g = t[o].diffs[h];
                    0 !== g[0] && (f = this.diff_xIndex(d, p)), 1 === g[0] ? e = e.substring(0, a + f) + g[1] + e.substring(a + f) : g[0] === r && (e = e.substring(0, a + f) + e.substring(a + this.diff_xIndex(d, p + g[1].length))), g[0] !== r && (p += g[1].length);
                }
            }
        }
    }
    return [
        e = e.substring(n.length, e.length - n.length),
        i
    ];
}, e.prototype.patch_addPadding = function(t) {
    for(var r = this.Patch_Margin, n = "", s = 1; s <= r; s++)n += String.fromCharCode(s);
    for(s = 0; s < t.length; s++)t[s].start1 += r, t[s].start2 += r;
    var i = t[0], o = i.diffs;
    if (0 == o.length || 0 != o[0][0]) o.unshift(new e.Diff(0, n)), i.start1 -= r, i.start2 -= r, i.length1 += r, i.length2 += r;
    else if (r > o[0][1].length) {
        var a = r - o[0][1].length;
        o[0][1] = n.substring(o[0][1].length) + o[0][1], i.start1 -= a, i.start2 -= a, i.length1 += a, i.length2 += a;
    }
    if (0 == (o = (i = t[t.length - 1]).diffs).length || 0 != o[o.length - 1][0]) o.push(new e.Diff(0, n)), i.length1 += r, i.length2 += r;
    else if (r > o[o.length - 1][1].length) {
        a = r - o[o.length - 1][1].length;
        o[o.length - 1][1] += n.substring(0, a), i.length1 += a, i.length2 += a;
    }
    return n;
}, e.prototype.patch_splitMax = function(t) {
    for(var n = this.Match_MaxBits, s = 0; s < t.length; s++)if (!(t[s].length1 <= n)) {
        var i = t[s];
        t.splice(s--, 1);
        for(var o = i.start1, a = i.start2, u = ""; 0 !== i.diffs.length;){
            var c = new e.patch_obj, l = !0;
            for(c.start1 = o - u.length, c.start2 = a - u.length, "" !== u && (c.length1 = c.length2 = u.length, c.diffs.push(new e.Diff(0, u))); 0 !== i.diffs.length && c.length1 < n - this.Patch_Margin;){
                var m = i.diffs[0][0], d = i.diffs[0][1];
                1 === m ? (c.length2 += d.length, a += d.length, c.diffs.push(i.diffs.shift()), l = !1) : m === r && 1 == c.diffs.length && 0 == c.diffs[0][0] && d.length > 2 * n ? (c.length1 += d.length, o += d.length, l = !1, c.diffs.push(new e.Diff(m, d)), i.diffs.shift()) : (d = d.substring(0, n - c.length1 - this.Patch_Margin), c.length1 += d.length, o += d.length, 0 === m ? (c.length2 += d.length, a += d.length) : l = !1, c.diffs.push(new e.Diff(m, d)), d == i.diffs[0][1] ? i.diffs.shift() : i.diffs[0][1] = i.diffs[0][1].substring(d.length));
            }
            u = (u = this.diff_text2(c.diffs)).substring(u.length - this.Patch_Margin);
            var f = this.diff_text1(i.diffs).substring(0, this.Patch_Margin);
            "" !== f && (c.length1 += f.length, c.length2 += f.length, 0 !== c.diffs.length && 0 === c.diffs[c.diffs.length - 1][0] ? c.diffs[c.diffs.length - 1][1] += f : c.diffs.push(new e.Diff(0, f))), l || t.splice(++s, 0, c);
        }
    }
}, e.prototype.patch_toText = function(t) {
    for(var e = [], r = 0; r < t.length; r++)e[r] = t[r];
    return e.join("");
}, e.prototype.patch_fromText = function(t) {
    var n = [];
    if (!t) return n;
    for(var s = t.split("\n"), i = 0, o = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; i < s.length;){
        var a = s[i].match(o);
        if (!a) throw new Error("Invalid patch string: " + s[i]);
        var u = new e.patch_obj;
        for(n.push(u), u.start1 = parseInt(a[1], 10), "" === a[2] ? (u.start1--, u.length1 = 1) : "0" == a[2] ? u.length1 = 0 : (u.start1--, u.length1 = parseInt(a[2], 10)), u.start2 = parseInt(a[3], 10), "" === a[4] ? (u.start2--, u.length2 = 1) : "0" == a[4] ? u.length2 = 0 : (u.start2--, u.length2 = parseInt(a[4], 10)), i++; i < s.length;){
            var c = s[i].charAt(0);
            try {
                var l = decodeURI(s[i].substring(1));
            } catch (t) {
                throw new Error("Illegal escape in patch_fromText: " + l);
            }
            if ("-" == c) u.diffs.push(new e.Diff(r, l));
            else if ("+" == c) u.diffs.push(new e.Diff(1, l));
            else if (" " == c) u.diffs.push(new e.Diff(0, l));
            else {
                if ("@" == c) break;
                if ("" !== c) throw new Error('Invalid patch mode "' + c + '" in: ' + l);
            }
            i++;
        }
    }
    return n;
}, (e.patch_obj = function() {
    this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0;
}).prototype.toString = function() {
    for(var t, e = [
        "@@ -" + (0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1) + " +" + (0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2) + " @@\n"
    ], n = 0; n < this.diffs.length; n++){
        switch(this.diffs[n][0]){
            case 1:
                t = "+";
                break;
            case r:
                t = "-";
                break;
            case 0:
                t = " ";
        }
        e[n + 1] = t + encodeURI(this.diffs[n][1]) + "\n";
    }
    return e.join("").replace(/%20/g, " ");
}, module.exports = e, module.exports.diff_match_patch = e, module.exports.DIFF_DELETE = r, module.exports.DIFF_INSERT = 1, module.exports.DIFF_EQUAL = 0;
