import { require_HeaderParser } from "./HeaderParser.js";
import { require_PartStream } from "./PartStream.js";
import { require_sbmh } from "../../streamsearch/sbmh.js";
var __wakaru_require_Dicer_cache;
export function require_Dicer() {
if (__wakaru_require_Dicer_cache) return __wakaru_require_Dicer_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_Dicer_cache = module2;
"use strict";
var WritableStream2 = require("node:stream").Writable;
var inherits = require("node:util").inherits;
var StreamSearch = require_sbmh();
var PartStream = require_PartStream();
var HeaderParser = require_HeaderParser();
var DASH = 45;
var B_ONEDASH = Buffer.from("-");
var B_CRLF = Buffer.from("\r\n");
var EMPTY_FN = function() {};
function Dicer(cfg) {
    if (!(this instanceof Dicer)) {
        return new Dicer(cfg);
    }
    WritableStream2.call(this, cfg);
    if (!cfg || !cfg.headerFirst && typeof cfg.boundary !== "string") {
        throw new TypeError("Boundary required");
    }
    if (typeof cfg.boundary === "string") {
        this.setBoundary(cfg.boundary);
    } else {
        this._bparser = void 0;
    }
    this._headerFirst = cfg.headerFirst;
    this._dashes = 0;
    this._parts = 0;
    this._finished = false;
    this._realFinish = false;
    this._isPreamble = true;
    this._justMatched = false;
    this._firstWrite = true;
    this._inHeader = true;
    this._part = void 0;
    this._cb = void 0;
    this._ignoreData = false;
    this._partOpts = {
        highWaterMark: cfg.partHwm
    };
    this._pause = false;
    const self2 = this;
    this._hparser = new HeaderParser(cfg);
    this._hparser.on("header", function(header) {
        self2._inHeader = false;
        self2._part.emit("header", header);
    });
}
inherits(Dicer, WritableStream2);
Dicer.prototype.emit = function(ev) {
    if (ev === "finish" && !this._realFinish) {
        if (!this._finished) {
            const self2 = this;
            process.nextTick(function() {
                self2.emit("error", new Error("Unexpected end of multipart data"));
                if (self2._part && !self2._ignoreData) {
                    const type2 = self2._isPreamble ? "Preamble" : "Part";
                    self2._part.emit("error", new Error(type2 + " terminated early due to unexpected end of multipart data"));
                    self2._part.push(null);
                    process.nextTick(function() {
                        self2._realFinish = true;
                        self2.emit("finish");
                        self2._realFinish = false;
                    });
                    return;
                }
                self2._realFinish = true;
                self2.emit("finish");
                self2._realFinish = false;
            });
        }
    } else {
        WritableStream2.prototype.emit.apply(this, arguments);
    }
};
Dicer.prototype._write = function(data, encoding, cb) {
    if (!this._hparser && !this._bparser) {
        return cb();
    }
    if (this._headerFirst && this._isPreamble) {
        if (!this._part) {
            this._part = new PartStream(this._partOpts);
            if (this.listenerCount("preamble") !== 0) {
                this.emit("preamble", this._part);
            } else {
                this._ignore();
            }
        }
        const r = this._hparser.push(data);
        if (!this._inHeader && r !== void 0 && r < data.length) {
            data = data.slice(r);
        } else {
            return cb();
        }
    }
    if (this._firstWrite) {
        this._bparser.push(B_CRLF);
        this._firstWrite = false;
    }
    this._bparser.push(data);
    if (this._pause) {
        this._cb = cb;
    } else {
        cb();
    }
};
Dicer.prototype.reset = function() {
    this._part = void 0;
    this._bparser = void 0;
    this._hparser = void 0;
};
Dicer.prototype.setBoundary = function(boundary) {
    const self2 = this;
    this._bparser = new StreamSearch("\r\n--" + boundary);
    this._bparser.on("info", function(isMatch, data, start, end) {
        self2._oninfo(isMatch, data, start, end);
    });
};
Dicer.prototype._ignore = function() {
    if (this._part && !this._ignoreData) {
        this._ignoreData = true;
        this._part.on("error", EMPTY_FN);
        this._part.resume();
    }
};
Dicer.prototype._oninfo = function(isMatch, data, start, end) {
    let buf;
    const self2 = this;
    let i = 0;
    let r;
    let shouldWriteMore = true;
    if (!this._part && this._justMatched && data) {
        while(this._dashes < 2 && start + i < end){
            if (data[start + i] === DASH) {
                ++i;
                ++this._dashes;
            } else {
                if (this._dashes) {
                    buf = B_ONEDASH;
                }
                this._dashes = 0;
                break;
            }
        }
        if (this._dashes === 2) {
            if (start + i < end && this.listenerCount("trailer") !== 0) {
                this.emit("trailer", data.slice(start + i, end));
            }
            this.reset();
            this._finished = true;
            if (self2._parts === 0) {
                self2._realFinish = true;
                self2.emit("finish");
                self2._realFinish = false;
            }
        }
        if (this._dashes) {
            return;
        }
    }
    if (this._justMatched) {
        this._justMatched = false;
    }
    if (!this._part) {
        this._part = new PartStream(this._partOpts);
        this._part._read = function(n) {
            self2._unpause();
        };
        if (this._isPreamble && this.listenerCount("preamble") !== 0) {
            this.emit("preamble", this._part);
        } else if (this._isPreamble !== true && this.listenerCount("part") !== 0) {
            this.emit("part", this._part);
        } else {
            this._ignore();
        }
        if (!this._isPreamble) {
            this._inHeader = true;
        }
    }
    if (data && start < end && !this._ignoreData) {
        if (this._isPreamble || !this._inHeader) {
            if (buf) {
                shouldWriteMore = this._part.push(buf);
            }
            shouldWriteMore = this._part.push(data.slice(start, end));
            if (!shouldWriteMore) {
                this._pause = true;
            }
        } else if (!this._isPreamble && this._inHeader) {
            if (buf) {
                this._hparser.push(buf);
            }
            r = this._hparser.push(data.slice(start, end));
            if (!this._inHeader && r !== void 0 && r < end) {
                this._oninfo(false, data, start + r, end);
            }
        }
    }
    if (isMatch) {
        this._hparser.reset();
        if (this._isPreamble) {
            this._isPreamble = false;
        } else {
            if (start !== end) {
                ++this._parts;
                this._part.on("end", function() {
                    if (--self2._parts === 0) {
                        if (self2._finished) {
                            self2._realFinish = true;
                            self2.emit("finish");
                            self2._realFinish = false;
                        } else {
                            self2._unpause();
                        }
                    }
                });
            }
        }
        this._part.push(null);
        this._part = void 0;
        this._ignoreData = false;
        this._justMatched = true;
        this._dashes = 0;
    }
};
Dicer.prototype._unpause = function() {
    if (!this._pause) {
        return;
    }
    this._pause = false;
    if (this._cb) {
        const cb = this._cb;
        this._cb = void 0;
        cb();
    }
};
module2.exports = Dicer;

return module2.exports;
}
