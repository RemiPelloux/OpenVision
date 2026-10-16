import { x } from "./tslib.es6.js";
var Wwl, Gwl;
export { Gwl, Wwl };
var __wakaru_fGg_initialized = false;
export function fGg() {
if (__wakaru_fGg_initialized) return;
__wakaru_fGg_initialized = true;
x(), Wwl = Object.freeze(JSON.parse(`{"displayName":"Dockerfile","name":"docker","patterns":[{"captures":{"1":{"name":"keyword.other.special-method.dockerfile"},"2":{"name":"keyword.other.special-method.dockerfile"}},"match":"^\\\\s*\\\\b(?i:(FROM))\\\\b.*?\\\\b(?i:(AS))\\\\b"},{"captures":{"1":{"name":"keyword.control.dockerfile"},"2":{"name":"keyword.other.special-method.dockerfile"}},"match":"^\\\\s*(?i:(ONBUILD)\\\\s+)?(?i:(ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR))\\\\s"},{"captures":{"1":{"name":"keyword.operator.dockerfile"},"2":{"name":"keyword.other.special-method.dockerfile"}},"match":"^\\\\s*(?i:(ONBUILD)\\\\s+)?(?i:(CMD|ENTRYPOINT))\\\\s"},{"include":"#string-character-escape"},{"begin":"\\"","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.dockerfile"}},"end":"\\"","endCaptures":{"1":{"name":"punctuation.definition.string.end.dockerfile"}},"name":"string.quoted.double.dockerfile","patterns":[{"include":"#string-character-escape"}]},{"begin":"'","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.dockerfile"}},"end":"'","endCaptures":{"1":{"name":"punctuation.definition.string.end.dockerfile"}},"name":"string.quoted.single.dockerfile","patterns":[{"include":"#string-character-escape"}]},{"captures":{"1":{"name":"punctuation.whitespace.comment.leading.dockerfile"},"2":{"name":"comment.line.number-sign.dockerfile"},"3":{"name":"punctuation.definition.comment.dockerfile"}},"match":"^(\\\\s*)((#).*$\\\\n?)"}],"repository":{"string-character-escape":{"match":"\\\\\\\\.","name":"constant.character.escaped.dockerfile"}},"scopeName":"source.dockerfile","aliases":["dockerfile"]}`)), Gwl = [
    Wwl
];

}
