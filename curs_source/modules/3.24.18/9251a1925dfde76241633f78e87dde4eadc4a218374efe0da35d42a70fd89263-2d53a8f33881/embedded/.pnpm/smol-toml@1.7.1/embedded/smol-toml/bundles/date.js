var DATE_TIME_RE, TomlDate;
export { DATE_TIME_RE, TomlDate };
var __wakaru_init_date_initialized = false;
export function init_date() {
if (__wakaru_init_date_initialized) return;
__wakaru_init_date_initialized = true;
DATE_TIME_RE = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}(?::\d{2}(?:\.\d+)?)?)?(Z|[-+]\d{2}:\d{2})?$/i;
TomlDate = class _TomlDate extends Date {
    #hasDate = false;
    #hasTime = false;
    #offset = null;
    constructor(date4){
        let hasDate = true;
        let hasTime = true;
        let offset = "Z";
        if (typeof date4 === "string") {
            let match2 = date4.match(DATE_TIME_RE);
            if (match2) {
                if (!match2[1]) {
                    hasDate = false;
                    date4 = `0000-01-01T${date4}`;
                }
                hasTime = !!match2[2];
                hasTime && date4[10] === " " && (date4 = date4.replace(" ", "T"));
                if (match2[2] && +match2[2] > 23) {
                    date4 = "";
                } else {
                    offset = match2[3] || null;
                    date4 = date4.toUpperCase();
                    if (!offset && hasTime) date4 += "Z";
                }
            } else {
                date4 = "";
            }
        }
        super(date4);
        if (!isNaN(this.getTime())) {
            this.#hasDate = hasDate;
            this.#hasTime = hasTime;
            this.#offset = offset;
        }
    }
    isDateTime() {
        return this.#hasDate && this.#hasTime;
    }
    isLocal() {
        return !this.#hasDate || !this.#hasTime || !this.#offset;
    }
    isDate() {
        return this.#hasDate && !this.#hasTime;
    }
    isTime() {
        return this.#hasTime && !this.#hasDate;
    }
    isValid() {
        return this.#hasDate || this.#hasTime;
    }
    toISOString() {
        let iso = super.toISOString();
        if (this.isDate()) return iso.slice(0, 10);
        if (this.isTime()) return iso.slice(11, 23);
        if (this.#offset === null) return iso.slice(0, -1);
        if (this.#offset === "Z") return iso;
        let offset = +this.#offset.slice(1, 3) * 60 + +this.#offset.slice(4, 6);
        offset = this.#offset[0] === "-" ? offset : -offset;
        let offsetDate = new Date(this.getTime() - offset * 6e4);
        return offsetDate.toISOString().slice(0, -1) + this.#offset;
    }
    static wrapAsOffsetDateTime(jsDate, offset = "Z") {
        let date4 = new _TomlDate(jsDate);
        date4.#offset = offset;
        return date4;
    }
    static wrapAsLocalDateTime(jsDate) {
        let date4 = new _TomlDate(jsDate);
        date4.#offset = null;
        return date4;
    }
    static wrapAsLocalDate(jsDate) {
        let date4 = new _TomlDate(jsDate);
        date4.#hasTime = false;
        date4.#offset = null;
        return date4;
    }
    static wrapAsLocalTime(jsDate) {
        let date4 = new _TomlDate(jsDate);
        date4.#hasDate = false;
        date4.#offset = null;
        return date4;
    }
};

}
