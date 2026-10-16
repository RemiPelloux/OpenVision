import { require_bitmapper } from "./bitmapper.js";
import { require_filter_parse_sync } from "./filter-parse-sync.js";
import { require_format_normaliser } from "./format-normaliser.js";
import { require_parser2 } from "./parser.js";
import { require_sync_inflate } from "./sync-inflate.js";
import { require_sync_reader } from "./sync-reader.js";
var __wakaru_require_parser_sync_cache;
export function require_parser_sync() {
if (__wakaru_require_parser_sync_cache) return __wakaru_require_parser_sync_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_parser_sync_cache = module2;
"use strict";
var hasSyncZlib = true;
var zlib2 = require("zlib");
var inflateSync = require_sync_inflate();
if (!zlib2.deflateSync) {
    hasSyncZlib = false;
}
var SyncReader = require_sync_reader();
var FilterSync = require_filter_parse_sync();
var Parser5 = require_parser2();
var bitmapper = require_bitmapper();
var formatNormaliser = require_format_normaliser();
module2.exports = function(buffer, options2) {
    if (!hasSyncZlib) {
        throw new Error("To use the sync capability of this library in old node versions, please pin pngjs to v2.3.0");
    }
    let err;
    function handleError(_err_) {
        err = _err_;
    }
    let metaData;
    function handleMetaData(_metaData_) {
        metaData = _metaData_;
    }
    function handleTransColor(transColor) {
        metaData.transColor = transColor;
    }
    function handlePalette(palette2) {
        metaData.palette = palette2;
    }
    function handleSimpleTransparency() {
        metaData.alpha = true;
    }
    let gamma;
    function handleGamma(_gamma_) {
        gamma = _gamma_;
    }
    let inflateDataList = [];
    function handleInflateData(inflatedData2) {
        inflateDataList.push(inflatedData2);
    }
    let reader = new SyncReader(buffer);
    let parser = new Parser5(options2, {
        read: reader.read.bind(reader),
        error: handleError,
        metadata: handleMetaData,
        gamma: handleGamma,
        palette: handlePalette,
        transColor: handleTransColor,
        inflateData: handleInflateData,
        simpleTransparency: handleSimpleTransparency
    });
    parser.start();
    reader.process();
    if (err) {
        throw err;
    }
    let inflateData = Buffer.concat(inflateDataList);
    inflateDataList.length = 0;
    let inflatedData;
    if (metaData.interlace) {
        inflatedData = zlib2.inflateSync(inflateData);
    } else {
        let rowSize = (metaData.width * metaData.bpp * metaData.depth + 7 >> 3) + 1;
        let imageSize = rowSize * metaData.height;
        inflatedData = inflateSync(inflateData, {
            chunkSize: imageSize,
            maxLength: imageSize
        });
    }
    inflateData = null;
    if (!inflatedData || !inflatedData.length) {
        throw new Error("bad png - invalid inflate data response");
    }
    let unfilteredData = FilterSync.process(inflatedData, metaData);
    inflateData = null;
    let bitmapData = bitmapper.dataToBitMap(unfilteredData, metaData);
    unfilteredData = null;
    let normalisedBitmapData = formatNormaliser(bitmapData, metaData, options2.skipRescale);
    metaData.data = normalisedBitmapData;
    metaData.gamma = gamma || 0;
    return metaData;
};

return module2.exports;
}
