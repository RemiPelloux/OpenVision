import { require_charsetgroupprober } from "./charsetgroupprober.js";
import { require_hebrewprober } from "./hebrewprober.js";
import { require_langbulgarianmodel } from "./langbulgarianmodel.js";
import { require_langcyrillicmodel } from "./langcyrillicmodel.js";
import { require_langgreekmodel } from "./langgreekmodel.js";
import { require_langhebrewmodel } from "./langhebrewmodel.js";
import { require_langhungarianmodel } from "./langhungarianmodel.js";
import { require_langthaimodel } from "./langthaimodel.js";
import { require_sbcharsetprober } from "./sbcharsetprober.js";
var __wakaru_require_sbcsgroupprober_cache;
export function require_sbcsgroupprober() {
if (__wakaru_require_sbcsgroupprober_cache) return __wakaru_require_sbcsgroupprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_sbcsgroupprober_cache = module2;
var SingleByteCharSetProber = require_sbcharsetprober();
var CharSetGroupProber = require_charsetgroupprober();
var Win1255HebrewModel = require_langhebrewmodel().Win1255HebrewModel;
var HebrewProber = require_hebrewprober();
var cyrillicModels = require_langcyrillicmodel();
var greekModels = require_langgreekmodel();
var TIS620ThaiModel = require_langthaimodel().TIS620ThaiModel;
var hungarianModels = require_langhungarianmodel();
var bulgarianModels = require_langbulgarianmodel();
function SBCSGroupProber() {
    CharSetGroupProber.apply(this);
    var self2 = this;
    function init() {
        self2._mProbers = [
            new SingleByteCharSetProber(cyrillicModels.Win1251CyrillicModel),
            new SingleByteCharSetProber(cyrillicModels.Koi8rModel),
            new SingleByteCharSetProber(cyrillicModels.Latin5CyrillicModel),
            new SingleByteCharSetProber(cyrillicModels.MacCyrillicModel),
            new SingleByteCharSetProber(cyrillicModels.Ibm866Model),
            new SingleByteCharSetProber(cyrillicModels.Ibm855Model),
            new SingleByteCharSetProber(greekModels.Latin7GreekModel),
            new SingleByteCharSetProber(greekModels.Win1253GreekModel),
            new SingleByteCharSetProber(bulgarianModels.Latin5BulgarianModel),
            new SingleByteCharSetProber(bulgarianModels.Win1251BulgarianModel),
            new SingleByteCharSetProber(hungarianModels.Latin2HungarianModel),
            new SingleByteCharSetProber(hungarianModels.Win1250HungarianModel),
            new SingleByteCharSetProber(TIS620ThaiModel)
        ];
        var hebrewProber = new HebrewProber();
        var logicalHebrewProber = new SingleByteCharSetProber(Win1255HebrewModel, false, hebrewProber);
        var visualHebrewProber = new SingleByteCharSetProber(Win1255HebrewModel, true, hebrewProber);
        hebrewProber.setModelProbers(logicalHebrewProber, visualHebrewProber);
        self2._mProbers.push(hebrewProber, logicalHebrewProber, visualHebrewProber);
        self2._supportedCharsetNames = [];
        for (const prober of self2._mProbers){
            self2._supportedCharsetNames.push(prober.getCharsetName());
        }
        self2.reset();
    }
    this.getSupportedCharsetNames = function() {
        return self2._supportedCharsetNames;
    };
    init();
}
SBCSGroupProber.prototype = new CharSetGroupProber();
module2.exports = SBCSGroupProber;

return module2.exports;
}
