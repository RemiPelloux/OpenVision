import { require_exif_tags } from "./exif-tags.js";
import { require_exif } from "./exif.js";
import { require_jpeg } from "./jpeg.js";
import { require_simplify } from "./simplify.js";
var __wakaru_require_parser_cache;
export function require_parser() {
if (__wakaru_require_parser_cache) return __wakaru_require_parser_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_parser_cache = module2;
var jpeg2 = require_jpeg();
var exif = require_exif();
var simplify = require_simplify();
function ExifResult(startMarker, tags, imageSize, thumbnailOffset, thumbnailLength, thumbnailType, app1Offset) {
    this.startMarker = startMarker;
    this.tags = tags;
    this.imageSize = imageSize;
    this.thumbnailOffset = thumbnailOffset;
    this.thumbnailLength = thumbnailLength;
    this.thumbnailType = thumbnailType;
    this.app1Offset = app1Offset;
}
ExifResult.prototype = {
    hasThumbnail: function(mime2) {
        if (!this.thumbnailOffset || !this.thumbnailLength) {
            return false;
        }
        if (typeof mime2 !== "string") {
            return true;
        }
        if (mime2.toLowerCase().trim() === "image/jpeg") {
            return this.thumbnailType === 6;
        }
        if (mime2.toLowerCase().trim() === "image/tiff") {
            return this.thumbnailType === 1;
        }
        return false;
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
        var stream3 = this._getThumbnailStream(), size;
        jpeg2.parseSections(stream3, function(sectionType, sectionStream) {
            if (jpeg2.getSectionName(sectionType).name === "SOF") {
                size = jpeg2.getSizeFromSOFSection(sectionStream);
            }
        });
        return size;
    }
};
function Parser5(stream3) {
    this.stream = stream3;
    this.flags = {
        readBinaryTags: false,
        resolveTagNames: true,
        simplifyValues: true,
        imageSize: true,
        hidePointers: true,
        returnTags: true
    };
}
Parser5.prototype = {
    enableBinaryFields: function(enable) {
        this.flags.readBinaryTags = !!enable;
        return this;
    },
    enablePointers: function(enable) {
        this.flags.hidePointers = !enable;
        return this;
    },
    enableTagNames: function(enable) {
        this.flags.resolveTagNames = !!enable;
        return this;
    },
    enableImageSize: function(enable) {
        this.flags.imageSize = !!enable;
        return this;
    },
    enableReturnTags: function(enable) {
        this.flags.returnTags = !!enable;
        return this;
    },
    enableSimpleValues: function(enable) {
        this.flags.simplifyValues = !!enable;
        return this;
    },
    parse: function() {
        var start = this.stream.mark(), stream3 = start.openWithOffset(0), flags = this.flags, tags, imageSize, thumbnailOffset, thumbnailLength, thumbnailType, app1Offset, tagNames, getTagValue, setTagValue;
        if (flags.resolveTagNames) {
            tagNames = require_exif_tags();
        }
        if (flags.resolveTagNames) {
            tags = {};
            getTagValue = function(t) {
                return tags[t.name];
            };
            setTagValue = function(t, value) {
                tags[t.name] = value;
            };
        } else {
            tags = [];
            getTagValue = function(t) {
                var i;
                for(i = 0; i < tags.length; ++i){
                    if (tags[i].type === t.type && tags[i].section === t.section) {
                        return tags.value;
                    }
                }
            };
            setTagValue = function(t, value) {
                var i;
                for(i = 0; i < tags.length; ++i){
                    if (tags[i].type === t.type && tags[i].section === t.section) {
                        tags.value = value;
                        return;
                    }
                }
            };
        }
        jpeg2.parseSections(stream3, function(sectionType, sectionStream) {
            var validExifHeaders, sectionOffset = sectionStream.offsetFrom(start);
            if (sectionType === 225) {
                validExifHeaders = exif.parseTags(sectionStream, function(ifdSection, tagType, value, format2) {
                    if (!flags.readBinaryTags && format2 === 7) {
                        return;
                    }
                    if (tagType === 513) {
                        thumbnailOffset = value[0];
                        if (flags.hidePointers) {
                            return;
                        }
                    } else if (tagType === 514) {
                        thumbnailLength = value[0];
                        if (flags.hidePointers) {
                            return;
                        }
                    } else if (tagType === 259) {
                        thumbnailType = value[0];
                        if (flags.hidePointers) {
                            return;
                        }
                    }
                    if (!flags.returnTags) {
                        return;
                    }
                    if (flags.simplifyValues) {
                        value = simplify.simplifyValue(value, format2);
                    }
                    if (flags.resolveTagNames) {
                        var sectionTagNames = ifdSection === exif.GPSIFD ? tagNames.gps : tagNames.exif;
                        var name17 = sectionTagNames[tagType];
                        if (!name17) {
                            name17 = tagNames.exif[tagType];
                        }
                        if (!tags.hasOwnProperty(name17)) {
                            tags[name17] = value;
                        }
                    } else {
                        tags.push({
                            section: ifdSection,
                            type: tagType,
                            value
                        });
                    }
                });
                if (validExifHeaders) {
                    app1Offset = sectionOffset;
                }
            } else if (flags.imageSize && jpeg2.getSectionName(sectionType).name === "SOF") {
                imageSize = jpeg2.getSizeFromSOFSection(sectionStream);
            }
        });
        if (flags.simplifyValues) {
            simplify.castDegreeValues(getTagValue, setTagValue);
            simplify.castDateValues(getTagValue, setTagValue);
        }
        return new ExifResult(start, tags, imageSize, thumbnailOffset, thumbnailLength, thumbnailType, app1Offset);
    }
};
module2.exports = Parser5;

return module2.exports;
}
