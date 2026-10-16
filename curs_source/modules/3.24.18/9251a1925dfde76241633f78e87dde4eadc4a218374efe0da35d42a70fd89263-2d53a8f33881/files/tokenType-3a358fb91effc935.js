var TokenType, tokenType_default;
export { TokenType, tokenType_default };
var __wakaru_init_tokenType_initialized = false;
export function init_tokenType() {
if (__wakaru_init_tokenType_initialized) return;
__wakaru_init_tokenType_initialized = true;
(function(TokenType2) {
    TokenType2[TokenType2["LEFT_BRACE"] = 0] = "LEFT_BRACE";
    TokenType2[TokenType2["RIGHT_BRACE"] = 1] = "RIGHT_BRACE";
    TokenType2[TokenType2["LEFT_BRACKET"] = 2] = "LEFT_BRACKET";
    TokenType2[TokenType2["RIGHT_BRACKET"] = 3] = "RIGHT_BRACKET";
    TokenType2[TokenType2["COLON"] = 4] = "COLON";
    TokenType2[TokenType2["COMMA"] = 5] = "COMMA";
    TokenType2[TokenType2["TRUE"] = 6] = "TRUE";
    TokenType2[TokenType2["FALSE"] = 7] = "FALSE";
    TokenType2[TokenType2["NULL"] = 8] = "NULL";
    TokenType2[TokenType2["STRING"] = 9] = "STRING";
    TokenType2[TokenType2["NUMBER"] = 10] = "NUMBER";
    TokenType2[TokenType2["SEPARATOR"] = 11] = "SEPARATOR";
})(TokenType || (TokenType = {}));
tokenType_default = TokenType;

}
