var charset, escapedSequences;
export { charset, escapedSequences };
var __wakaru_init_utf_8_initialized = false;
export function init_utf_8() {
if (__wakaru_init_utf_8_initialized) return;
__wakaru_init_utf_8_initialized = true;
(function(charset2) {
    charset2[charset2["BACKSPACE"] = 8] = "BACKSPACE";
    charset2[charset2["FORM_FEED"] = 12] = "FORM_FEED";
    charset2[charset2["NEWLINE"] = 10] = "NEWLINE";
    charset2[charset2["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
    charset2[charset2["TAB"] = 9] = "TAB";
    charset2[charset2["SPACE"] = 32] = "SPACE";
    charset2[charset2["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
    charset2[charset2["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
    charset2[charset2["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
    charset2[charset2["DOLLAR_SIGN"] = 36] = "DOLLAR_SIGN";
    charset2[charset2["PERCENT_SIGN"] = 37] = "PERCENT_SIGN";
    charset2[charset2["AMPERSAND"] = 38] = "AMPERSAND";
    charset2[charset2["APOSTROPHE"] = 39] = "APOSTROPHE";
    charset2[charset2["LEFT_PARENTHESIS"] = 40] = "LEFT_PARENTHESIS";
    charset2[charset2["RIGHT_PARENTHESIS"] = 41] = "RIGHT_PARENTHESIS";
    charset2[charset2["ASTERISK"] = 42] = "ASTERISK";
    charset2[charset2["PLUS_SIGN"] = 43] = "PLUS_SIGN";
    charset2[charset2["COMMA"] = 44] = "COMMA";
    charset2[charset2["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
    charset2[charset2["FULL_STOP"] = 46] = "FULL_STOP";
    charset2[charset2["SOLIDUS"] = 47] = "SOLIDUS";
    charset2[charset2["DIGIT_ZERO"] = 48] = "DIGIT_ZERO";
    charset2[charset2["DIGIT_ONE"] = 49] = "DIGIT_ONE";
    charset2[charset2["DIGIT_TWO"] = 50] = "DIGIT_TWO";
    charset2[charset2["DIGIT_THREE"] = 51] = "DIGIT_THREE";
    charset2[charset2["DIGIT_FOUR"] = 52] = "DIGIT_FOUR";
    charset2[charset2["DIGIT_FIVE"] = 53] = "DIGIT_FIVE";
    charset2[charset2["DIGIT_SIX"] = 54] = "DIGIT_SIX";
    charset2[charset2["DIGIT_SEVEN"] = 55] = "DIGIT_SEVEN";
    charset2[charset2["DIGIT_EIGHT"] = 56] = "DIGIT_EIGHT";
    charset2[charset2["DIGIT_NINE"] = 57] = "DIGIT_NINE";
    charset2[charset2["COLON"] = 58] = "COLON";
    charset2[charset2["SEMICOLON"] = 59] = "SEMICOLON";
    charset2[charset2["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
    charset2[charset2["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
    charset2[charset2["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
    charset2[charset2["QUESTION_MARK"] = 63] = "QUESTION_MARK";
    charset2[charset2["COMMERCIAL_AT"] = 64] = "COMMERCIAL_AT";
    charset2[charset2["LATIN_CAPITAL_LETTER_A"] = 65] = "LATIN_CAPITAL_LETTER_A";
    charset2[charset2["LATIN_CAPITAL_LETTER_B"] = 66] = "LATIN_CAPITAL_LETTER_B";
    charset2[charset2["LATIN_CAPITAL_LETTER_C"] = 67] = "LATIN_CAPITAL_LETTER_C";
    charset2[charset2["LATIN_CAPITAL_LETTER_D"] = 68] = "LATIN_CAPITAL_LETTER_D";
    charset2[charset2["LATIN_CAPITAL_LETTER_E"] = 69] = "LATIN_CAPITAL_LETTER_E";
    charset2[charset2["LATIN_CAPITAL_LETTER_F"] = 70] = "LATIN_CAPITAL_LETTER_F";
    charset2[charset2["LATIN_CAPITAL_LETTER_G"] = 71] = "LATIN_CAPITAL_LETTER_G";
    charset2[charset2["LATIN_CAPITAL_LETTER_H"] = 72] = "LATIN_CAPITAL_LETTER_H";
    charset2[charset2["LATIN_CAPITAL_LETTER_I"] = 73] = "LATIN_CAPITAL_LETTER_I";
    charset2[charset2["LATIN_CAPITAL_LETTER_J"] = 74] = "LATIN_CAPITAL_LETTER_J";
    charset2[charset2["LATIN_CAPITAL_LETTER_K"] = 75] = "LATIN_CAPITAL_LETTER_K";
    charset2[charset2["LATIN_CAPITAL_LETTER_L"] = 76] = "LATIN_CAPITAL_LETTER_L";
    charset2[charset2["LATIN_CAPITAL_LETTER_M"] = 77] = "LATIN_CAPITAL_LETTER_M";
    charset2[charset2["LATIN_CAPITAL_LETTER_N"] = 78] = "LATIN_CAPITAL_LETTER_N";
    charset2[charset2["LATIN_CAPITAL_LETTER_O"] = 79] = "LATIN_CAPITAL_LETTER_O";
    charset2[charset2["LATIN_CAPITAL_LETTER_P"] = 80] = "LATIN_CAPITAL_LETTER_P";
    charset2[charset2["LATIN_CAPITAL_LETTER_Q"] = 81] = "LATIN_CAPITAL_LETTER_Q";
    charset2[charset2["LATIN_CAPITAL_LETTER_R"] = 82] = "LATIN_CAPITAL_LETTER_R";
    charset2[charset2["LATIN_CAPITAL_LETTER_S"] = 83] = "LATIN_CAPITAL_LETTER_S";
    charset2[charset2["LATIN_CAPITAL_LETTER_T"] = 84] = "LATIN_CAPITAL_LETTER_T";
    charset2[charset2["LATIN_CAPITAL_LETTER_U"] = 85] = "LATIN_CAPITAL_LETTER_U";
    charset2[charset2["LATIN_CAPITAL_LETTER_V"] = 86] = "LATIN_CAPITAL_LETTER_V";
    charset2[charset2["LATIN_CAPITAL_LETTER_W"] = 87] = "LATIN_CAPITAL_LETTER_W";
    charset2[charset2["LATIN_CAPITAL_LETTER_X"] = 88] = "LATIN_CAPITAL_LETTER_X";
    charset2[charset2["LATIN_CAPITAL_LETTER_Y"] = 89] = "LATIN_CAPITAL_LETTER_Y";
    charset2[charset2["LATIN_CAPITAL_LETTER_Z"] = 90] = "LATIN_CAPITAL_LETTER_Z";
    charset2[charset2["LEFT_SQUARE_BRACKET"] = 91] = "LEFT_SQUARE_BRACKET";
    charset2[charset2["REVERSE_SOLIDUS"] = 92] = "REVERSE_SOLIDUS";
    charset2[charset2["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
    charset2[charset2["CIRCUMFLEX_ACCENT"] = 94] = "CIRCUMFLEX_ACCENT";
    charset2[charset2["LOW_LINE"] = 95] = "LOW_LINE";
    charset2[charset2["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
    charset2[charset2["LATIN_SMALL_LETTER_A"] = 97] = "LATIN_SMALL_LETTER_A";
    charset2[charset2["LATIN_SMALL_LETTER_B"] = 98] = "LATIN_SMALL_LETTER_B";
    charset2[charset2["LATIN_SMALL_LETTER_C"] = 99] = "LATIN_SMALL_LETTER_C";
    charset2[charset2["LATIN_SMALL_LETTER_D"] = 100] = "LATIN_SMALL_LETTER_D";
    charset2[charset2["LATIN_SMALL_LETTER_E"] = 101] = "LATIN_SMALL_LETTER_E";
    charset2[charset2["LATIN_SMALL_LETTER_F"] = 102] = "LATIN_SMALL_LETTER_F";
    charset2[charset2["LATIN_SMALL_LETTER_G"] = 103] = "LATIN_SMALL_LETTER_G";
    charset2[charset2["LATIN_SMALL_LETTER_H"] = 104] = "LATIN_SMALL_LETTER_H";
    charset2[charset2["LATIN_SMALL_LETTER_I"] = 105] = "LATIN_SMALL_LETTER_I";
    charset2[charset2["LATIN_SMALL_LETTER_J"] = 106] = "LATIN_SMALL_LETTER_J";
    charset2[charset2["LATIN_SMALL_LETTER_K"] = 107] = "LATIN_SMALL_LETTER_K";
    charset2[charset2["LATIN_SMALL_LETTER_L"] = 108] = "LATIN_SMALL_LETTER_L";
    charset2[charset2["LATIN_SMALL_LETTER_M"] = 109] = "LATIN_SMALL_LETTER_M";
    charset2[charset2["LATIN_SMALL_LETTER_N"] = 110] = "LATIN_SMALL_LETTER_N";
    charset2[charset2["LATIN_SMALL_LETTER_O"] = 111] = "LATIN_SMALL_LETTER_O";
    charset2[charset2["LATIN_SMALL_LETTER_P"] = 112] = "LATIN_SMALL_LETTER_P";
    charset2[charset2["LATIN_SMALL_LETTER_Q"] = 113] = "LATIN_SMALL_LETTER_Q";
    charset2[charset2["LATIN_SMALL_LETTER_R"] = 114] = "LATIN_SMALL_LETTER_R";
    charset2[charset2["LATIN_SMALL_LETTER_S"] = 115] = "LATIN_SMALL_LETTER_S";
    charset2[charset2["LATIN_SMALL_LETTER_T"] = 116] = "LATIN_SMALL_LETTER_T";
    charset2[charset2["LATIN_SMALL_LETTER_U"] = 117] = "LATIN_SMALL_LETTER_U";
    charset2[charset2["LATIN_SMALL_LETTER_V"] = 118] = "LATIN_SMALL_LETTER_V";
    charset2[charset2["LATIN_SMALL_LETTER_W"] = 119] = "LATIN_SMALL_LETTER_W";
    charset2[charset2["LATIN_SMALL_LETTER_X"] = 120] = "LATIN_SMALL_LETTER_X";
    charset2[charset2["LATIN_SMALL_LETTER_Y"] = 121] = "LATIN_SMALL_LETTER_Y";
    charset2[charset2["LATIN_SMALL_LETTER_Z"] = 122] = "LATIN_SMALL_LETTER_Z";
    charset2[charset2["LEFT_CURLY_BRACKET"] = 123] = "LEFT_CURLY_BRACKET";
    charset2[charset2["VERTICAL_LINE"] = 124] = "VERTICAL_LINE";
    charset2[charset2["RIGHT_CURLY_BRACKET"] = 125] = "RIGHT_CURLY_BRACKET";
    charset2[charset2["TILDE"] = 126] = "TILDE";
})(charset || (charset = {}));
escapedSequences = {
    [charset.QUOTATION_MARK]: charset.QUOTATION_MARK,
    [charset.REVERSE_SOLIDUS]: charset.REVERSE_SOLIDUS,
    [charset.SOLIDUS]: charset.SOLIDUS,
    [charset.LATIN_SMALL_LETTER_B]: charset.BACKSPACE,
    [charset.LATIN_SMALL_LETTER_F]: charset.FORM_FEED,
    [charset.LATIN_SMALL_LETTER_N]: charset.NEWLINE,
    [charset.LATIN_SMALL_LETTER_R]: charset.CARRIAGE_RETURN,
    [charset.LATIN_SMALL_LETTER_T]: charset.TAB
};

}
