var J2r, Q2r;
export { J2r, Q2r };
var __wakaru_y6i_initialized = false;
export function y6i() {
if (__wakaru_y6i_initialized) return;
__wakaru_y6i_initialized = true;
J2r = Object.freeze(JSON.parse(`{"displayName":"INI","name":"ini","patterns":[{"begin":"(^[\\\\t ]+)?(?=#)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ini"}},"end":"(?!\\\\G)","patterns":[{"begin":"#","beginCaptures":{"0":{"name":"punctuation.definition.comment.ini"}},"end":"\\\\n","name":"comment.line.number-sign.ini"}]},{"begin":"(^[\\\\t ]+)?(?=;)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ini"}},"end":"(?!\\\\G)","patterns":[{"begin":";","beginCaptures":{"0":{"name":"punctuation.definition.comment.ini"}},"end":"\\\\n","name":"comment.line.semicolon.ini"}]},{"captures":{"1":{"name":"keyword.other.definition.ini"},"2":{"name":"punctuation.separator.key-value.ini"}},"match":"\\\\b([-.0-9A-Z_a-z]+)\\\\b\\\\s*(=)"},{"captures":{"1":{"name":"punctuation.definition.entity.ini"},"3":{"name":"punctuation.definition.entity.ini"}},"match":"^(\\\\[)(.*?)(])","name":"entity.name.section.group-title.ini"},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ini"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.ini"}},"name":"string.quoted.single.ini","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.ini"}]},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ini"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.ini"}},"name":"string.quoted.double.ini"}],"scopeName":"source.ini","aliases":["properties"]}`)), Q2r = [
    J2r
];

}
