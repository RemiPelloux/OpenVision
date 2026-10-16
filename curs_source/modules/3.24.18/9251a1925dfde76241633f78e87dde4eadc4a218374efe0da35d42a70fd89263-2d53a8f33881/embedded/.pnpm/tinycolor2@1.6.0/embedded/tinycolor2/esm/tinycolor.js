import { _analogous, _brighten, _complement, _darken, _desaturate, _greyscale, _lighten, _monochromatic, _saturate, _spin, _splitcomplement, _typeof, bound01, boundAlpha, convertToPercentage, flip, polyad, rgbToHex, rgbToHsl, rgbToHsv, rgbaToArgbHex, rgbaToHex, tinycolor, validateWCAG2Parms } from "../../../../../../dist_exports2.js";
var trimLeft, trimRight, names, hexNames, matchers;
export { hexNames, matchers, names, trimLeft, trimRight };
var __wakaru_init_tinycolor_initialized = false;
export function init_tinycolor() {
if (__wakaru_init_tinycolor_initialized) return;
__wakaru_init_tinycolor_initialized = true;
trimLeft = /^\s+/;
trimRight = /\s+$/;
tinycolor.prototype = {
    isDark: function isDark() {
        return this.getBrightness() < 128;
    },
    isLight: function isLight() {
        return !this.isDark();
    },
    isValid: function isValid2() {
        return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
        return this._originalInput;
    },
    getFormat: function getFormat() {
        return this._format;
    },
    getAlpha: function getAlpha() {
        return this._a;
    },
    getBrightness: function getBrightness() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
    },
    getLuminance: function getLuminance() {
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R2, G2, B2;
        RsRGB = rgb.r / 255;
        GsRGB = rgb.g / 255;
        BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) R2 = RsRGB / 12.92;
        else R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        if (GsRGB <= 0.03928) G2 = GsRGB / 12.92;
        else G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        if (BsRGB <= 0.03928) B2 = BsRGB / 12.92;
        else B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
    },
    setAlpha: function setAlpha(value) {
        this._a = boundAlpha(value);
        this._roundA = Math.round(100 * this._a) / 100;
        return this;
    },
    toHsv: function toHsv() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return {
            h: hsv.h * 360,
            s: hsv.s,
            v: hsv.v,
            a: this._a
        };
    },
    toHsvString: function toHsvString() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = Math.round(hsv.h * 360), s3 = Math.round(hsv.s * 100), v2 = Math.round(hsv.v * 100);
        return this._a == 1 ? "hsv(" + h + ", " + s3 + "%, " + v2 + "%)" : "hsva(" + h + ", " + s3 + "%, " + v2 + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return {
            h: hsl.h * 360,
            s: hsl.s,
            l: hsl.l,
            a: this._a
        };
    },
    toHslString: function toHslString() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = Math.round(hsl.h * 360), s3 = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
        return this._a == 1 ? "hsl(" + h + ", " + s3 + "%, " + l + "%)" : "hsla(" + h + ", " + s3 + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex2(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
        return "#" + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
        return "#" + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
        return {
            r: Math.round(this._r),
            g: Math.round(this._g),
            b: Math.round(this._b),
            a: this._a
        };
    },
    toRgbString: function toRgbString() {
        return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
        return {
            r: Math.round(bound01(this._r, 255) * 100) + "%",
            g: Math.round(bound01(this._g, 255) * 100) + "%",
            b: Math.round(bound01(this._b, 255) * 100) + "%",
            a: this._a
        };
    },
    toPercentageRgbString: function toPercentageRgbString() {
        return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
        if (this._a === 0) {
            return "transparent";
        }
        if (this._a < 1) {
            return false;
        }
        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
        var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";
        if (secondColor) {
            var s3 = tinycolor(secondColor);
            secondHex8String = "#" + rgbaToArgbHex(s3._r, s3._g, s3._b, s3._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format2) {
        var formatSet = !!format2;
        format2 = format2 || this._format;
        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format2 === "hex" || format2 === "hex6" || format2 === "hex3" || format2 === "hex4" || format2 === "hex8" || format2 === "name");
        if (needsAlphaFormat) {
            if (format2 === "name" && this._a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format2 === "rgb") {
            formattedString = this.toRgbString();
        }
        if (format2 === "prgb") {
            formattedString = this.toPercentageRgbString();
        }
        if (format2 === "hex" || format2 === "hex6") {
            formattedString = this.toHexString();
        }
        if (format2 === "hex3") {
            formattedString = this.toHexString(true);
        }
        if (format2 === "hex4") {
            formattedString = this.toHex8String(true);
        }
        if (format2 === "hex8") {
            formattedString = this.toHex8String();
        }
        if (format2 === "name") {
            formattedString = this.toName();
        }
        if (format2 === "hsl") {
            formattedString = this.toHslString();
        }
        if (format2 === "hsv") {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    },
    clone: function clone() {
        return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
        var color = fn.apply(null, [
            this
        ].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
    },
    lighten: function lighten() {
        return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
        return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
        return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
        return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
        return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
        return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
        return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
        return fn.apply(null, [
            this
        ].concat([].slice.call(args)));
    },
    analogous: function analogous() {
        return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
        return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
        return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
        return this._applyCombination(_splitcomplement, arguments);
    },
    triad: function triad() {
        return this._applyCombination(polyad, [
            3
        ]);
    },
    tetrad: function tetrad() {
        return this._applyCombination(polyad, [
            4
        ]);
    }
};
tinycolor.fromRatio = function(color, opts) {
    if (_typeof(color) == "object") {
        var newColor = {};
        for(var i in color){
            if (color.hasOwnProperty(i)) {
                if (i === "a") {
                    newColor[i] = color[i];
                } else {
                    newColor[i] = convertToPercentage(color[i]);
                }
            }
        }
        color = newColor;
    }
    return tinycolor(color, opts);
};
tinycolor.equals = function(color1, color2) {
    if (!color1 || !color2) return false;
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
    return tinycolor.fromRatio({
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    });
};
tinycolor.mix = function(color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p2 = amount / 100;
    var rgba = {
        r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
        g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
        b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
        a: (rgb2.a - rgb1.a) * p2 + rgb1.a
    };
    return tinycolor(rgba);
};
tinycolor.readability = function(color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);
    switch(wcag2Parms.level + wcag2Parms.size){
        case "AAsmall":
        case "AAAlarge":
            out = readability >= 4.5;
            break;
        case "AAlarge":
            out = readability >= 3;
            break;
        case "AAAsmall":
            out = readability >= 7;
            break;
    }
    return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;
    for(var i = 0; i < colorList.length; i++){
        readability = tinycolor.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
            bestScore = readability;
            bestColor = tinycolor(colorList[i]);
        }
    }
    if (tinycolor.isReadable(baseColor, bestColor, {
        level,
        size
    }) || !includeFallbackColors) {
        return bestColor;
    } else {
        args.includeFallbackColors = false;
        return tinycolor.mostReadable(baseColor, [
            "#fff",
            "#000"
        ], args);
    }
};
names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};
hexNames = tinycolor.hexNames = flip(names);
matchers = (function() {
    var CSS_INTEGER = "[-\\+]?\\d+%?";
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
})();

}
