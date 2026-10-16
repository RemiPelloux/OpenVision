import { Tokenizer, init_tokenizer } from "./tokenizer.js";
import { TokenParser, init_tokenparser } from "./tokenparser.js";
var JSONParser;
export { JSONParser };
var __wakaru_init_jsonparser_initialized = false;
export function init_jsonparser() {
if (__wakaru_init_jsonparser_initialized) return;
__wakaru_init_jsonparser_initialized = true;
init_tokenizer();
init_tokenparser();
JSONParser = class {
    constructor(opts = {}){
        this.tokenizer = new Tokenizer(opts);
        this.tokenParser = new TokenParser(opts);
        this.tokenizer.onToken = this.tokenParser.write.bind(this.tokenParser);
        this.tokenizer.onEnd = ()=>{
            if (!this.tokenParser.isEnded) this.tokenParser.end();
        };
        this.tokenParser.onError = this.tokenizer.error.bind(this.tokenizer);
        this.tokenParser.onEnd = ()=>{
            if (!this.tokenizer.isEnded) this.tokenizer.end();
        };
    }
    get isEnded() {
        return this.tokenizer.isEnded && this.tokenParser.isEnded;
    }
    write(input) {
        this.tokenizer.write(input);
    }
    end() {
        this.tokenizer.end();
    }
    set onToken(cb) {
        this.tokenizer.onToken = (parsedToken)=>{
            cb(parsedToken);
            this.tokenParser.write(parsedToken);
        };
    }
    set onValue(cb) {
        this.tokenParser.onValue = cb;
    }
    set onError(cb) {
        this.tokenizer.onError = cb;
    }
    set onEnd(cb) {
        this.tokenParser.onEnd = ()=>{
            if (!this.tokenizer.isEnded) this.tokenizer.end();
            cb.call(this.tokenParser);
        };
    }
};

}
