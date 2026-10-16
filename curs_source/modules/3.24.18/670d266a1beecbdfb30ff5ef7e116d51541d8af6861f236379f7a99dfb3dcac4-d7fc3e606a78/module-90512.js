var a = require("./module-52421.js"), n = require("./module-14333.js"), r = require("./module-67676.js");
function o(e, t, i, a, n, r, o) {
    this.startMarker = e, this.tags = t, this.imageSize = i, this.thumbnailOffset = a, this.thumbnailLength = n, this.thumbnailType = r, this.app1Offset = o;
}
function s(e) {
    this.stream = e, this.flags = {
        readBinaryTags: !1,
        resolveTagNames: !0,
        simplifyValues: !0,
        imageSize: !0,
        hidePointers: !0,
        returnTags: !0
    };
}
o.prototype = {
    hasThumbnail: function(e) {
        return !(!this.thumbnailOffset || !this.thumbnailLength) && ("string" != typeof e || ("image/jpeg" === e.toLowerCase().trim() ? 6 === this.thumbnailType : "image/tiff" === e.toLowerCase().trim() && 1 === this.thumbnailType));
    },
    getThumbnailOffset: function() {
        return this.app1Offset + 6 + this.thumbnailOffset;
    },
    getThumbnailLength: function() {
        return this.thumbnailLength;
    },
    getThumbnailBuffer: function() {
        return this._getThumbnailStream().nextBuffer(this.thumbnailLength);
    },
    _getThumbnailStream: function() {
        return this.startMarker.openWithOffset(this.getThumbnailOffset());
    },
    getImageSize: function() {
        return this.imageSize;
    },
    getThumbnailSize: function() {
        var e, t = this._getThumbnailStream();
        return a.parseSections(t, function(t, i) {
            "SOF" === a.getSectionName(t).name && (e = a.getSizeFromSOFSection(i));
        }), e;
    }
}, s.prototype = {
    enableBinaryFields: function(e) {
        return this.flags.readBinaryTags = !!e, this;
    },
    enablePointers: function(e) {
        return this.flags.hidePointers = !e, this;
    },
    enableTagNames: function(e) {
        return this.flags.resolveTagNames = !!e, this;
    },
    enableImageSize: function(e) {
        return this.flags.imageSize = !!e, this;
    },
    enableReturnTags: function(e) {
        return this.flags.returnTags = !!e, this;
    },
    enableSimpleValues: function(e) {
        return this.flags.simplifyValues = !!e, this;
    },
    parse: function() {
        var e, t, s, f, p, m, l, c, u, d = this.stream.mark(), h = d.openWithOffset(0), g = this.flags;
        return g.resolveTagNames && (l = require("./module-4015.js")), g.resolveTagNames ? (e = {}, c = function(t) {
            return e[t.name];
        }, u = function(t, i) {
            e[t.name] = i;
        }) : (e = [], c = function(t) {
            var i;
            for(i = 0; i < e.length; ++i)if (e[i].type === t.type && e[i].section === t.section) return e.value;
        }, u = function(t, i) {
            var a;
            for(a = 0; a < e.length; ++a)if (e[a].type === t.type && e[a].section === t.section) return void (e.value = i);
        }), a.parseSections(h, function(i, o) {
            var c = o.offsetFrom(d);
            225 === i ? n.parseTags(o, function(t, i, a, o) {
                if (g.readBinaryTags || 7 !== o) {
                    if (513 === i) {
                        if (s = a[0], g.hidePointers) return;
                    } else if (514 === i) {
                        if (f = a[0], g.hidePointers) return;
                    } else if (259 === i && (p = a[0], g.hidePointers)) return;
                    if (g.returnTags) if (g.simplifyValues && (a = r.simplifyValue(a, o)), g.resolveTagNames) {
                        var m = (t === n.GPSIFD ? l.gps : l.exif)[i];
                        m || (m = l.exif[i]), e.hasOwnProperty(m) || (e[m] = a);
                    } else e.push({
                        section: t,
                        type: i,
                        value: a
                    });
                }
            }) && (m = c) : g.imageSize && "SOF" === a.getSectionName(i).name && (t = a.getSizeFromSOFSection(o));
        }), g.simplifyValues && (r.castDegreeValues(c, u), r.castDateValues(c, u)), new o(d, e, t, s, f, p, m);
    }
}, module.exports = s;
