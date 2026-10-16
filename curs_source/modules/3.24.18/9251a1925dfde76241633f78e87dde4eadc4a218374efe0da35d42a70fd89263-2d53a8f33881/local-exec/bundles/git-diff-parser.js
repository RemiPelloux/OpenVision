var parseDiff, fileNameDiffRegex, gitFileHeaderRegex, parseFiles, qoutedFileNameRegex, parseOldOrNewFile, leftTrimChars, timeStampRegex, removeTimeStamp, formTrimmingString, makeString;
export { fileNameDiffRegex, formTrimmingString, gitFileHeaderRegex, leftTrimChars, makeString, parseDiff, parseFiles, parseOldOrNewFile, qoutedFileNameRegex, removeTimeStamp, timeStampRegex };
var __wakaru_init_git_diff_parser_initialized = false;
export function init_git_diff_parser() {
if (__wakaru_init_git_diff_parser_initialized) return;
__wakaru_init_git_diff_parser_initialized = true;
"use strict";
parseDiff = (input)=>{
    if (!input) return [];
    if (typeof input !== "string" || input.match(/^\s+$/)) return [];
    const lines2 = input.split("\n");
    if (lines2.length === 0) return [];
    const files = [];
    let currentFile = null;
    let currentChunk = null;
    let deletedLineCounter = 0;
    let addedLineCounter = 0;
    let currentFileChanges = null;
    const normal = (line)=>{
        currentChunk?.changes.push({
            type: "normal",
            normal: true,
            ln1: deletedLineCounter++,
            ln2: addedLineCounter++,
            content: line
        });
        currentFileChanges.oldLines--;
        currentFileChanges.newLines--;
    };
    const start = (line)=>{
        const [fromFileName, toFileName] = parseFiles(line) ?? [];
        currentFile = {
            chunks: [],
            deletions: 0,
            additions: 0,
            from: fromFileName,
            to: toFileName
        };
        files.push(currentFile);
    };
    const restart = ()=>{
        if (!currentFile || currentFile.chunks.length) start();
    };
    const newFile = (_2, match2)=>{
        restart();
        currentFile.new = true;
        currentFile.newMode = match2[1];
        currentFile.from = "/dev/null";
    };
    const deletedFile = (_2, match2)=>{
        restart();
        currentFile.deleted = true;
        currentFile.oldMode = match2[1];
        currentFile.to = "/dev/null";
    };
    const oldMode = (_2, match2)=>{
        restart();
        currentFile.oldMode = match2[1];
    };
    const newMode = (_2, match2)=>{
        restart();
        currentFile.newMode = match2[1];
    };
    const index = (line, match2)=>{
        restart();
        currentFile.index = line.split(" ").slice(1);
        if (match2[1]) {
            currentFile.oldMode = currentFile.newMode = match2[1].trim();
        }
    };
    const fromFile = (line)=>{
        restart();
        currentFile.from = parseOldOrNewFile(line);
    };
    const toFile = (line)=>{
        restart();
        currentFile.to = parseOldOrNewFile(line);
    };
    const toNumOfLines = (number4)=>+(number4 || 1);
    const chunk = (line, match2)=>{
        if (!currentFile) {
            start(line);
        }
        const [oldStart, oldNumLines, newStart, newNumLines] = match2.slice(1);
        deletedLineCounter = +oldStart;
        addedLineCounter = +newStart;
        currentChunk = {
            content: line,
            changes: [],
            oldStart: +oldStart,
            oldLines: toNumOfLines(oldNumLines),
            newStart: +newStart,
            newLines: toNumOfLines(newNumLines)
        };
        currentFileChanges = {
            oldLines: toNumOfLines(oldNumLines),
            newLines: toNumOfLines(newNumLines)
        };
        currentFile.chunks.push(currentChunk);
    };
    const del = (line)=>{
        if (!currentChunk) return;
        currentChunk.changes.push({
            type: "del",
            del: true,
            ln: deletedLineCounter++,
            content: line
        });
        currentFile.deletions++;
        currentFileChanges.oldLines--;
    };
    const add2 = (line)=>{
        if (!currentChunk) return;
        currentChunk.changes.push({
            type: "add",
            add: true,
            ln: addedLineCounter++,
            content: line
        });
        currentFile.additions++;
        currentFileChanges.newLines--;
    };
    const eof = (line)=>{
        if (!currentChunk) return;
        const [mostRecentChange] = currentChunk.changes.slice(-1);
        currentChunk.changes.push({
            type: mostRecentChange.type,
            [mostRecentChange.type]: true,
            ln1: mostRecentChange.ln1,
            ln2: mostRecentChange.ln2,
            ln: mostRecentChange.ln,
            content: line
        });
    };
    const schemaHeaders = [
        [
            /^diff\s/,
            start
        ],
        [
            /^new file mode (\d+)$/,
            newFile
        ],
        [
            /^deleted file mode (\d+)$/,
            deletedFile
        ],
        [
            /^old mode (\d+)$/,
            oldMode
        ],
        [
            /^new mode (\d+)$/,
            newMode
        ],
        [
            /^index\s[\da-zA-Z]+\.\.[\da-zA-Z]+(\s(\d+))?$/,
            index
        ],
        [
            /^---\s/,
            fromFile
        ],
        [
            /^\+\+\+\s/,
            toFile
        ],
        [
            /^@@\s+-(\d+),?(\d+)?\s+\+(\d+),?(\d+)?\s@@/,
            chunk
        ],
        [
            /^\\ No newline at end of file$/,
            eof
        ]
    ];
    const schemaContent = [
        [
            /^\\ No newline at end of file$/,
            eof
        ],
        [
            /^-/,
            del
        ],
        [
            /^\+/,
            add2
        ],
        [
            /^\s+/,
            normal
        ]
    ];
    const parseContentLine = (line)=>{
        for (const [pattern, handler] of schemaContent){
            const match2 = line.match(pattern);
            if (match2) {
                handler(line, match2);
                break;
            }
        }
        if (currentFileChanges.oldLines === 0 && currentFileChanges.newLines === 0) {
            currentFileChanges = null;
        }
    };
    const parseHeaderLine = (line)=>{
        for (const [pattern, handler] of schemaHeaders){
            const match2 = line.match(pattern);
            if (match2) {
                handler(line, match2);
                break;
            }
        }
    };
    const parseLine = (line)=>{
        if (currentFileChanges) {
            parseContentLine(line);
        } else {
            parseHeaderLine(line);
        }
        return;
    };
    for (const line of lines2)parseLine(line);
    return files;
};
fileNameDiffRegex = /(a|i|w|c|o|1|2)\/.*(?=["']? ["']?(b|i|w|c|o|1|2)\/)|(b|i|w|c|o|1|2)\/.*$/g;
gitFileHeaderRegex = /^(a|b|i|w|c|o|1|2)\//;
parseFiles = (line)=>{
    const fileNames = line?.match(fileNameDiffRegex);
    return fileNames?.map((fileName)=>fileName.replace(gitFileHeaderRegex, "").replace(/("|')$/, ""));
};
qoutedFileNameRegex = /^\\?['"]|\\?['"]$/g;
parseOldOrNewFile = (line)=>{
    let fileName = leftTrimChars(line, "-+").trim();
    fileName = removeTimeStamp(fileName);
    return fileName.replace(qoutedFileNameRegex, "").replace(gitFileHeaderRegex, "");
};
leftTrimChars = (string5, trimmingChars)=>{
    string5 = makeString(string5);
    if (!trimmingChars && String.prototype.trimLeft) return string5.trimLeft();
    const trimmingString = formTrimmingString(trimmingChars);
    return string5.replace(new RegExp(`^${trimmingString}+`), "");
};
timeStampRegex = /\t.*|\d{4}-\d\d-\d\d\s\d\d:\d\d:\d\d(.\d+)?\s(\+|-)\d\d\d\d/;
removeTimeStamp = (string5)=>{
    const timeStamp = timeStampRegex.exec(string5);
    if (timeStamp) {
        string5 = string5.substring(0, timeStamp.index).trim();
    }
    return string5;
};
formTrimmingString = (trimmingChars)=>{
    if (trimmingChars === null || trimmingChars === void 0) return "\\s";
    else if (trimmingChars instanceof RegExp) return trimmingChars.source;
    return `[${makeString(trimmingChars).replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")}]`;
};
makeString = (itemToConvert)=>`${itemToConvert ?? ""}`;

}
