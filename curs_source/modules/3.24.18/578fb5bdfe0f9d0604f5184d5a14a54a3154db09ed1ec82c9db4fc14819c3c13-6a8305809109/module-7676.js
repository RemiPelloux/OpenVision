var a = require("./module-4333.js"), n = require("./module-8231.js"), r = [
    {
        section: a.GPSIFD,
        type: 2,
        name: "GPSLatitude",
        refType: 1,
        refName: "GPSLatitudeRef",
        posVal: "N"
    },
    {
        section: a.GPSIFD,
        type: 4,
        name: "GPSLongitude",
        refType: 3,
        refName: "GPSLongitudeRef",
        posVal: "E"
    }
], o = [
    {
        section: a.SubIFD,
        type: 306,
        name: "ModifyDate"
    },
    {
        section: a.SubIFD,
        type: 36867,
        name: "DateTimeOriginal"
    },
    {
        section: a.SubIFD,
        type: 36868,
        name: "CreateDate"
    },
    {
        section: a.SubIFD,
        type: 306,
        name: "ModifyDate"
    }
];
module.exports = {
    castDegreeValues: function(e, t) {
        r.forEach(function(i) {
            var a = e(i);
            if (a) {
                var n = e({
                    section: i.section,
                    type: i.refType,
                    name: i.refName
                }) === i.posVal ? 1 : -1, r = (a[0] + a[1] / 60 + a[2] / 3600) * n;
                t(i, r);
            }
        });
    },
    castDateValues: function(e, t) {
        o.forEach(function(i) {
            var a = e(i);
            if (a) {
                var r = n.parseExifDate(a);
                void 0 !== r && t(i, r);
            }
        });
    },
    simplifyValue: function(e, t) {
        return Array.isArray(e) && 1 === (e = e.map(function(e) {
            return 10 === t || 5 === t ? e[0] / e[1] : e;
        })).length && (e = e[0]), e;
    }
};
