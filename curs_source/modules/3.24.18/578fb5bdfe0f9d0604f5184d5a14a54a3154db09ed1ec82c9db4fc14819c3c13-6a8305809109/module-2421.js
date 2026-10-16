module.exports = {
    parseSections: function(e, t) {
        var i, a;
        for(e.setBigEndian(!0); e.remainingLength() > 0 && 218 !== a;){
            if (255 !== e.nextUInt8()) throw new Error("Invalid JPEG section offset");
            i = (a = e.nextUInt8()) >= 208 && a <= 217 || 218 === a ? 0 : e.nextUInt16() - 2, t(a, e.branch(0, i)), e.skip(i);
        }
    },
    getSizeFromSOFSection: function(e) {
        return e.skip(1), {
            height: e.nextUInt16(),
            width: e.nextUInt16()
        };
    },
    getSectionName: function(e) {
        var t, i;
        switch(e){
            case 216:
                t = "SOI";
                break;
            case 196:
                t = "DHT";
                break;
            case 219:
                t = "DQT";
                break;
            case 221:
                t = "DRI";
                break;
            case 218:
                t = "SOS";
                break;
            case 254:
                t = "COM";
                break;
            case 217:
                t = "EOI";
                break;
            default:
                e >= 224 && e <= 239 ? (t = "APP", i = e - 224) : e >= 192 && e <= 207 && 196 !== e && 200 !== e && 204 !== e ? (t = "SOF", i = e - 192) : e >= 208 && e <= 215 && (t = "RST", i = e - 208);
        }
        var a = {
            name: t
        };
        return "number" == typeof i && (a.index = i), a;
    }
};
