import { PDFDateString, init_pdf } from "../../../../../../../../pdf_exports.js";
var XMP_DATE_PROPERTIES, InfoResult;
export { InfoResult, XMP_DATE_PROPERTIES };
var __wakaru_init_InfoResult_initialized = false;
export function init_InfoResult() {
if (__wakaru_init_InfoResult_initialized) return;
__wakaru_init_InfoResult_initialized = true;
init_pdf();
XMP_DATE_PROPERTIES = [
    "xmp:createdate",
    "xmp:modifydate",
    "xmp:metadatadate",
    "xap:createdate",
    "xap:modifydate",
    "xap:metadatadate"
];
InfoResult = class {
    total;
    info;
    metadata;
    fingerprints;
    permission;
    outline;
    pages = [];
    getDateNode() {
        const result = {};
        const CreationDate = this.info?.CreationDate;
        if (CreationDate) {
            result.CreationDate = PDFDateString.toDateObject(CreationDate);
        }
        const ModDate = this.info?.ModDate;
        if (ModDate) {
            result.ModDate = PDFDateString.toDateObject(ModDate);
        }
        if (!this.metadata) {
            return result;
        }
        for (const prop of XMP_DATE_PROPERTIES){
            const value = this.metadata?.get(prop);
            const date4 = this.parseISODateString(value);
            switch(prop){
                case XMP_DATE_PROPERTIES[0]:
                    result.XmpCreateDate = date4;
                    break;
                case XMP_DATE_PROPERTIES[1]:
                    result.XmpModifyDate = date4;
                    break;
                case XMP_DATE_PROPERTIES[2]:
                    result.XmpMetadataDate = date4;
                    break;
                case XMP_DATE_PROPERTIES[3]:
                    result.XapCreateDate = date4;
                    break;
                case XMP_DATE_PROPERTIES[4]:
                    result.XapModifyDate = date4;
                    break;
                case XMP_DATE_PROPERTIES[5]:
                    result.XapMetadataDate = date4;
                    break;
            }
        }
        return result;
    }
    parseISODateString(isoDateString) {
        if (!isoDateString) return void 0;
        const parsedDate = Date.parse(isoDateString);
        if (!Number.isNaN(parsedDate)) {
            return new Date(parsedDate);
        }
        return void 0;
    }
    constructor(total){
        this.total = total;
    }
};

}
