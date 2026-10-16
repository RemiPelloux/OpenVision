var MARKDOWN_FENCE_PATTERN, LIST_ITEM_MARKER_PATTERN, STRUCTURAL_LINE_PATTERN, PROSE_TAG_ATTRIBUTE_PATTERN, WRITER_AUDIT_PATTERNS, FIRST_PERSON_DRAFT_PATTERNS, QUOTED_SPAN_PATTERN, INTERJECTION_LEAD_PATTERN, INTERJECTION_SUBJECT_PATTERN, BARE_ACTUALLY_PATTERN, BARE_ACTUALLY_SUBJECT_PATTERN, TOUR_MECHANICS_PATTERNS, SELF_TALK_PATTERNS, TRAILING_LABEL_PATTERN, ORPHANED_AUDIT_BULLET_PATTERN, TERM_TAG_PATTERN, MIN_RESTART_PARAGRAPH_CHARS;
export { BARE_ACTUALLY_PATTERN, BARE_ACTUALLY_SUBJECT_PATTERN, FIRST_PERSON_DRAFT_PATTERNS, INTERJECTION_LEAD_PATTERN, INTERJECTION_SUBJECT_PATTERN, LIST_ITEM_MARKER_PATTERN, MARKDOWN_FENCE_PATTERN, MIN_RESTART_PARAGRAPH_CHARS, ORPHANED_AUDIT_BULLET_PATTERN, PROSE_TAG_ATTRIBUTE_PATTERN, QUOTED_SPAN_PATTERN, SELF_TALK_PATTERNS, STRUCTURAL_LINE_PATTERN, TERM_TAG_PATTERN, TOUR_MECHANICS_PATTERNS, TRAILING_LABEL_PATTERN, WRITER_AUDIT_PATTERNS };
var __wakaru_init_pr_code_tour_self_audit_notes_initialized = false;
export function init_pr_code_tour_self_audit_notes() {
if (__wakaru_init_pr_code_tour_self_audit_notes_initialized) return;
__wakaru_init_pr_code_tour_self_audit_notes_initialized = true;
"use strict";
MARKDOWN_FENCE_PATTERN = /^(`{3,}|~{3,})/;
LIST_ITEM_MARKER_PATTERN = /^\s*(?:[-*+•]\s|\d+[.)]\s)/;
STRUCTURAL_LINE_PATTERN = /^\s*(?:#{1,6}\s|>|\||<|!\[)/;
PROSE_TAG_ATTRIBUTE_PATTERN = /\b(?:original|modified|defaultCollapsed|path)="[^"]*"/;
WRITER_AUDIT_PATTERNS = [
    /\bI made errors\b/i,
    /\bin my (?:draft|thinking)\b/i,
    /\bI duplicated\b/i,
    /\bI need to fix\b/i,
    /^\s*word (?:count|budget)\s*[-–—:]/i,
    /\bword (?:count|budget)\b.*\b(?:over|under) \d+/i,
    /\breorder (?:the )?pointers\b/i,
    /\bpointers? should match\b/i,
    /\bone path per (?:tour|section)\b/i,
    /\bonly have one tag\b/i,
    /\b(?:two|three|[2-9]|\d{2,}) file-diff tags?\b/i,
    /\bmy (?:draft|thinking|reasoning)\b/i,
    /\bfinal (?:clean )?tour output\b/i,
    /\bfinal clean (?:tour|output|version|copy)\b/i,
    /\bFixing the tour\b/,
    /\bre-?write the (?:entire|whole|full) (?:tour|output)\b/i,
    /\b(?:old|new)(?:Start|Lines)\b/
];
FIRST_PERSON_DRAFT_PATTERNS = [
    /\bI(?:['’](?:ll|ve|m)\s+(?:use|fix|need|have)|\s+(?:cannot|can't|can only|made|used|had|have (?:[Tt]wo|TWO|[Tt]hree|THREE|[Oo]ne|ONE|\d+)|accidentally|incorrectly|should|must|need(?:ed)? to|will use|put|wrote|combined|merged|forgot|missed))\b/,
    /\b[Ll]et me (?:re-?write|redo|fix|reorder|refine|re-?check|check|re-?read|recount|verify|finali[sz]e|produce|output|also fix)\b/
];
QUOTED_SPAN_PATTERN = /“[^”]*”|"[^"\n]*"/g;
INTERJECTION_LEAD_PATTERN = /^\s*(?:(?:Wait|Hmm+|Oops|Hold on|Actually)\s*[-–—,:;!.]|Actually\s+(?:wait\b|wrong\s*[-–—,:;]))/;
INTERJECTION_SUBJECT_PATTERN = /\b(?:tour|prose|draft|files?|(?:hunk|chunk)s?\d*|pointers?)\b/i;
BARE_ACTUALLY_PATTERN = /^\s*Actually\b/;
BARE_ACTUALLY_SUBJECT_PATTERN = /\b(?:tour|prose|draft|(?:hunk|chunk)s?\d*|pointers?)\b/i;
TOUR_MECHANICS_PATTERNS = [
    /\b(?:tags?|anchors?|file-diff)\b/i,
    /\branges?\b/i,
    /\bpaths?\b/i,
    /\bin prose\b/i,
    /\bsections?\b/i,
    /\bcollapsed\b/i
];
SELF_TALK_PATTERNS = [
    /\bFORBIDDEN\b/,
    /\bonly one (?:tag |range )?allowed\b/i,
    /\bwiden (?:the )?(?:\w+ )?range\b/i,
    /\bnot contiguous\b/i,
    /\bif needed\b/i,
    /\bthat's OK\b/i,
    /\ballowed\?/i,
    / [-–—] (?:good|only|optional|not|skip|forbidden|ok)\b/i,
    /(?:^|[.;]\s+)(?:Merge|Remove|Skip|Mention|Widen|Describe|Drop|Move|Split|Anchor)\s/,
    /(?<![\w/.-])[\w-]+\.(?:tsx?|jsx?|mjs|cjs|py|go|rs|java|kt|swift|rb|proto|sql|css|scss|prisma)\b/
];
TRAILING_LABEL_PATTERN = /^\s*[A-Za-z][\w' -]{0,40}:\s*$/;
ORPHANED_AUDIT_BULLET_PATTERN = /^[\w./-]+(?:\s+(?:first|second|third|last|✓|✔))?$/i;
TERM_TAG_PATTERN = /<term(?:\s+[A-Za-z][A-Za-z0-9_-]*\s*=\s*(?:"[^"]*"|'[^']*'))*\s*>|<\/term\s*>/g;
MIN_RESTART_PARAGRAPH_CHARS = 12;

}
