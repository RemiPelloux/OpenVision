import { __toESM } from "../../agent-host/dist/storage/sqlite-store.js";
var import_node_child_process2, path9, GeneratedFileChecker;
export { GeneratedFileChecker, import_node_child_process2, path9 };
var __wakaru_init_generated_file_detection_initialized = false;
export function init_generated_file_detection() {
if (__wakaru_init_generated_file_detection_initialized) return;
__wakaru_init_generated_file_detection_initialized = true;
"use strict";
import_node_child_process2 = require("node:child_process");
path9 = __toESM(require("node:path"), 1);
GeneratedFileChecker = class {
    constructor(filePath, getContent){
        this.name = filePath;
        this.extname = path9.extname(filePath).toLowerCase();
        this.getContent = getContent;
    }
    get lines() {
        if (this.cachedLines === void 0) {
            const content = this.getContent?.();
            this.cachedLines = content ? content.split("\n") : [];
        }
        return this.cachedLines;
    }
    get data() {
        return this.getContent?.();
    }
    isGeneratedByPath() {
        return this.xcodeFile() || this.intellijFile() || this.cocoapods() || this.carthageBuild() || this.generatedGraphqlRelay() || this.generatedNetDesignerFile() || this.generatedNetSpecflowFeatureFile() || this.composerLock() || this.cargoLock() || this.cargoOrig() || this.denoLock() || this.flakeLock() || this.bazelLock() || this.nodeModules() || this.goVendor() || this.goLock() || this.packageResolved() || this.poetryLock() || this.pdmLock() || this.uvLock() || this.pixiLock() || this.esyLock() || this.npmShrinkwrapOrPackageLock() || this.pnpmLock() || this.bunLock() || this.terraformLock() || this.generatedYarnPlugnplay() || this.godeps() || this.generatedByZephir() || this.htmlcov() || this.gradleWrapper() || this.mavenWrapper() || this.pipenvLock() || this.generatedPascalTlb() || this.generatedSqlxQuery() || this.sourceMapByName();
    }
    isGeneratedByContent() {
        if (!this.getContent) {
            return false;
        }
        return this.minifiedFiles() || this.hasSourceMap() || this.sourceMap() || this.compiledCoffeescript() || this.generatedParser() || this.generatedNetDocfile() || this.generatedPostscript() || this.compiledCythonFile() || this.generatedGo() || this.generatedProtocolBufferFromGo() || this.generatedProtocolBuffer() || this.generatedJavascriptProtocolBuffer() || this.generatedTypescriptProtocolBuffer() || this.generatedApacheThrift() || this.generatedJniHeader() || this.vcrCassette() || this.generatedAntlr() || this.generatedModule() || this.generatedUnity3dMeta() || this.generatedRacc() || this.generatedJflex() || this.generatedGrammarkit() || this.generatedRoxygen2() || this.generatedHtml() || this.generatedJison() || this.generatedGrpcCpp() || this.generatedDart() || this.generatedPerlPpportHeader() || this.generatedGamemakerstudio() || this.generatedGimp() || this.generatedVisualstudio6() || this.generatedHaxe() || this.generatedJooq() || this.generatedSorbetRbi() || this.generatedMysqlViewDefinitionFormat();
    }
    xcodeFile() {
        return [
            ".nib",
            ".xcworkspacedata",
            ".xcuserstate"
        ].includes(this.extname);
    }
    intellijFile() {
        return /(?:^|\/)\.idea\//.test(this.name);
    }
    cocoapods() {
        return /(^Pods|\/Pods)\//.test(this.name);
    }
    carthageBuild() {
        return /(^|\/)Carthage\/Build\//.test(this.name);
    }
    generatedGraphqlRelay() {
        return /__generated__\//.test(this.name);
    }
    generatedNetDesignerFile() {
        return /\.designer\.(cs|vb)$/i.test(this.name);
    }
    generatedNetSpecflowFeatureFile() {
        return /\.feature\.cs$/i.test(this.name);
    }
    composerLock() {
        return /composer\.lock/.test(this.name);
    }
    cargoLock() {
        return /Cargo\.lock/.test(this.name);
    }
    cargoOrig() {
        return /Cargo\.toml\.orig/.test(this.name);
    }
    denoLock() {
        return /deno\.lock/.test(this.name);
    }
    flakeLock() {
        return /(^|\/)flake\.lock$/.test(this.name);
    }
    bazelLock() {
        return /(^|\/)MODULE\.bazel\.lock$/.test(this.name);
    }
    nodeModules() {
        return /node_modules\//.test(this.name);
    }
    goVendor() {
        return /vendor\/((?!-)[-0-9A-Za-z]+(?<!-)\.)+(com|edu|gov|in|me|net|org|fm|io)/.test(this.name);
    }
    goLock() {
        return /(Gopkg|glide)\.lock/.test(this.name);
    }
    packageResolved() {
        return /Package\.resolved/.test(this.name);
    }
    poetryLock() {
        return /poetry\.lock/.test(this.name);
    }
    pdmLock() {
        return /pdm\.lock/.test(this.name);
    }
    uvLock() {
        return /uv\.lock/.test(this.name);
    }
    pixiLock() {
        return /pixi\.lock/.test(this.name);
    }
    esyLock() {
        return /(^|\/)(\w+\.)?esy\.lock$/.test(this.name);
    }
    npmShrinkwrapOrPackageLock() {
        return /npm-shrinkwrap\.json/.test(this.name) || /package-lock\.json/.test(this.name);
    }
    pnpmLock() {
        return /pnpm-lock\.yaml/.test(this.name);
    }
    bunLock() {
        return /(?:^|\/)bun\.lockb?$/.test(this.name);
    }
    terraformLock() {
        return /(?:^|\/)\.terraform\.lock\.hcl$/.test(this.name);
    }
    generatedYarnPlugnplay() {
        return /(^|\/)\.pnp\..*$/.test(this.name);
    }
    godeps() {
        return /Godeps\//.test(this.name);
    }
    generatedByZephir() {
        return /\.zep\.(c|h|php)$/.test(this.name);
    }
    htmlcov() {
        return /(?:^|\/)htmlcov\//.test(this.name);
    }
    gradleWrapper() {
        return /(?:^|\/)gradlew(?:\.bat)?$/i.test(this.name);
    }
    mavenWrapper() {
        return /(?:^|\/)mvnw(?:\.cmd)?$/i.test(this.name);
    }
    pipenvLock() {
        return /Pipfile\.lock/.test(this.name);
    }
    generatedPascalTlb() {
        return /_tlb\.pas$/i.test(this.name);
    }
    generatedSqlxQuery() {
        return /(?:^|\/)\.sqlx\/query-[a-f\d]{64}\.json$/.test(this.name);
    }
    sourceMapByName() {
        return /\.(css|js)\.map$/i.test(this.name);
    }
    maybeMinified() {
        return [
            ".js",
            ".css"
        ].includes(this.extname);
    }
    minifiedFiles() {
        if (!this.maybeMinified() || this.lines.length === 0) {
            return false;
        }
        const totalLength = this.lines.reduce((sum, line)=>sum + line.length, 0);
        return totalLength / this.lines.length > 110;
    }
    hasSourceMap() {
        if (!this.maybeMinified()) {
            return false;
        }
        const lastTwo = this.lines.slice(-2);
        return lastTwo.some((line)=>/^\/[*/][#@] source(?:Mapping)?URL|sourceURL=/.test(line));
    }
    sourceMap() {
        if (this.extname !== ".map") {
            return false;
        }
        if (/\.(css|js)\.map$/i.test(this.name)) {
            return true;
        }
        const firstLine = this.lines[0] || "";
        return /^{"version":\d+,/.test(firstLine) || /^\/\*\* Begin line maps\. \*\*\/{/.test(firstLine);
    }
    compiledCoffeescript() {
        if (this.extname !== ".js") {
            return false;
        }
        const firstLine = this.lines[0] || "";
        if (/^\/\/ Generated by /.test(firstLine)) {
            return true;
        }
        if (firstLine === "(function() {" && (this.lines[this.lines.length - 2] || "") === "}).call(this);" && (this.lines[this.lines.length - 1] || "") === "") {
            let score = 0;
            for (const line of this.lines){
                if (/var /.test(line)) {
                    const tempVarMatches = line.match(/_fn|_i|_len|_ref|_results/g);
                    score += (tempVarMatches?.length || 0) * 1;
                    const coffeeMatches = line.match(/__bind|__extends|__hasProp|__indexOf|__slice/g);
                    score += (coffeeMatches?.length || 0) * 3;
                }
            }
            return score >= 3;
        }
        return false;
    }
    generatedNetDocfile() {
        if (this.extname !== ".xml") {
            return false;
        }
        if (this.lines.length <= 3) {
            return false;
        }
        return (this.lines[1] || "").includes("<doc>") && (this.lines[2] || "").includes("<assembly>") && (this.lines[this.lines.length - 2] || "").includes("</doc>");
    }
    generatedParser() {
        if (this.extname !== ".js") {
            return false;
        }
        const headerText = this.lines.slice(0, 5).join("");
        return /^(?:[^/]|\/[^*])*\/\*(?:[^*]|\*[^/])*Generated by PEG\.js/.test(headerText);
    }
    generatedPostscript() {
        if (![
            ".ps",
            ".eps",
            ".pfa"
        ].includes(this.extname)) {
            return false;
        }
        const content = this.data;
        if (!content) {
            return false;
        }
        if (/^\s*(?:currentfile eexec\s+|\/sfnts\s+\[\s<)/.test(content)) {
            return true;
        }
        const creatorLine = this.lines.slice(0, 10).find((line)=>/^%%Creator: /.test(line));
        if (!creatorLine) {
            return false;
        }
        if (/[0-9]|draw|mpage|ImageMagick|inkscape|MATLAB/.test(creatorLine) || /PCBNEW|pnmtops|\(Unknown\)|Serif Affinity|Filterimage -tops/.test(creatorLine)) {
            return true;
        }
        if (creatorLine.includes("EAGLE")) {
            return this.lines.slice(0, 5).some((line)=>/^%%Title: EAGLE Drawing /.test(line));
        }
        return false;
    }
    generatedGo() {
        if (this.extname !== ".go") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return this.lines.slice(0, 40).some((line)=>/^\/\/ Code generated .*/.test(line));
    }
    generatedProtocolBufferFromGo() {
        if (this.extname !== ".proto") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return this.lines.slice(0, 20).some((line)=>line.includes("This file was autogenerated by go-to-protobuf"));
    }
    generatedProtocolBuffer() {
        const extensions = [
            ".py",
            ".java",
            ".h",
            ".cc",
            ".cpp",
            ".m",
            ".rb",
            ".php"
        ];
        if (!extensions.includes(this.extname)) {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return this.lines.slice(0, 3).some((line)=>line.includes("Generated by the protocol buffer compiler.  DO NOT EDIT!"));
    }
    generatedJavascriptProtocolBuffer() {
        if (this.extname !== ".js") {
            return false;
        }
        if (this.lines.length <= 6) {
            return false;
        }
        return (this.lines[5] || "").includes("GENERATED CODE -- DO NOT EDIT!");
    }
    generatedTypescriptProtocolBuffer() {
        if (this.extname !== ".ts") {
            return false;
        }
        if (this.lines.length <= 4) {
            return false;
        }
        return (this.lines[0] || "").includes("Code generated by protoc-gen-ts_proto. DO NOT EDIT.");
    }
    generatedApacheThrift() {
        const extensions = [
            ".rb",
            ".py",
            ".go",
            ".js",
            ".m",
            ".java",
            ".h",
            ".cc",
            ".cpp",
            ".php"
        ];
        if (!extensions.includes(this.extname)) {
            return false;
        }
        return this.lines.slice(0, 6).some((line)=>line.includes("Autogenerated by Thrift Compiler"));
    }
    generatedJniHeader() {
        if (this.extname !== ".h") {
            return false;
        }
        if (this.lines.length <= 2) {
            return false;
        }
        return (this.lines[0] || "").includes("/* DO NOT EDIT THIS FILE - it is machine generated */") && (this.lines[1] || "").includes("#include <jni.h>");
    }
    vcrCassette() {
        if (this.extname !== ".yml") {
            return false;
        }
        if (this.lines.length <= 2) {
            return false;
        }
        return (this.lines[this.lines.length - 2] || "").includes("recorded_with: VCR");
    }
    generatedAntlr() {
        if (this.extname !== ".g") {
            return false;
        }
        if (this.lines.length <= 2) {
            return false;
        }
        return (this.lines[1] || "").includes("generated by Xtest");
    }
    compiledCythonFile() {
        if (![
            ".c",
            ".cpp"
        ].includes(this.extname)) {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return (this.lines[0] || "").includes("Generated by Cython");
    }
    generatedModule() {
        if (this.extname !== ".mod") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        const firstLine = this.lines[0] || "";
        return firstLine.includes("PCBNEW-LibModule-V") || firstLine.includes("GFORTRAN module version '");
    }
    generatedUnity3dMeta() {
        if (this.extname !== ".meta") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return (this.lines[0] || "").includes("fileFormatVersion: ");
    }
    generatedRacc() {
        if (this.extname !== ".rb") {
            return false;
        }
        if (this.lines.length <= 2) {
            return false;
        }
        return (this.lines[2] || "").startsWith("# This file is automatically generated by Racc");
    }
    generatedJflex() {
        if (this.extname !== ".java") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return (this.lines[0] || "").startsWith("/* The following code was generated by JFlex ");
    }
    generatedGrammarkit() {
        if (this.extname !== ".java") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return (this.lines[0] || "").startsWith("// This is a generated file. Not intended for manual editing.");
    }
    generatedRoxygen2() {
        if (this.extname !== ".rd") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return (this.lines[0] || "").includes("% Generated by roxygen2: do not edit by hand");
    }
    generatedHtml() {
        if (![
            ".html",
            ".htm",
            ".xhtml"
        ].includes(this.extname)) {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        if (this.lines.slice(0, 2).some((line)=>/<!-- Generated by pkgdown: do not edit by hand -->/.test(line))) {
            return true;
        }
        if (this.lines.length > 2 && (this.lines[2] || "").startsWith("<!-- This is an automatically generated file.")) {
            return true;
        }
        if (this.lines.slice(0, 31).some((line)=>/<!--\s+Generated by Doxygen\s+[.0-9]+\s*-->/i.test(line))) {
            return true;
        }
        const headerText = this.lines.slice(0, 31).join(" ");
        const metaMatches = headerText.match(/<meta(\s+[^>]+)>/gi);
        if (!metaMatches) {
            return false;
        }
        for (const match2 of metaMatches){
            const attrs = this.extractHtmlMeta(match2);
            if (attrs.name?.toLowerCase() === "generator" && (attrs.content || attrs.value)) {
                const cv = attrs.content || attrs.value || "";
                if (/^(org\s+mode|j?latex2html|groff|makeinfo|texi2html|ronn)\b/i.test(cv)) {
                    return true;
                }
            }
        }
        return false;
    }
    extractHtmlMeta(metaTag) {
        const attrs = {};
        const attrRegex = /(?<=^|\s)(name|content|value)\s*=\s*("[^"]+"|'[^']+'|[^\s"']+)/gi;
        const matches = metaTag.matchAll(attrRegex);
        for (const match2 of matches){
            const key = match2[1].toLowerCase();
            let val = match2[2];
            if (val.startsWith('"') && val.endsWith('"') || val.startsWith("'") && val.endsWith("'")) {
                val = val.slice(1, -1);
            }
            attrs[key] = val;
        }
        return attrs;
    }
    generatedJison() {
        if (this.extname !== ".js") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        const firstLine = this.lines[0] || "";
        return firstLine.startsWith("/* parser generated by jison ") || firstLine.startsWith("/* generated by jison-lex ");
    }
    generatedGrpcCpp() {
        if (![
            ".cpp",
            ".hpp",
            ".h",
            ".cc"
        ].includes(this.extname)) {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return (this.lines[0] || "").startsWith("// Generated by the gRPC");
    }
    generatedDart() {
        if (this.extname !== ".dart") {
            return false;
        }
        if (this.lines.length <= 1) {
            return false;
        }
        return this.lines.slice(0, 3).some((line)=>/generated code\W{2,3}do not modify/i.test(line));
    }
    generatedPerlPpportHeader() {
        if (!/ppport\.h$/.test(this.name)) {
            return false;
        }
        if (this.lines.length <= 10) {
            return false;
        }
        return (this.lines[8] || "").includes("Automatically created by Devel::PPPort");
    }
    generatedGamemakerstudio() {
        if (![
            ".yy",
            ".yyp"
        ].includes(this.extname)) {
            return false;
        }
        if (this.lines.length <= 3) {
            return false;
        }
        const headerText = this.lines.slice(0, 3).join("");
        return /^\s*[{[]/.test(headerText) || /^\d\.\d\.\d.+\|\{/.test(this.lines[0] || "");
    }
    generatedGimp() {
        if (![
            ".c",
            ".h"
        ].includes(this.extname)) {
            return false;
        }
        if (this.lines.length === 0) {
            return false;
        }
        const firstLine = this.lines[0] || "";
        return /^\/\* GIMP [a-zA-Z0-9- ]+ C-Source image dump \(.+?\.c\) \*\//.test(firstLine) || /^\/\* {2}GIMP header image file format \([a-zA-Z0-9- ]+\): .+?\.h {2}\*\//.test(firstLine);
    }
    generatedVisualstudio6() {
        if (this.extname !== ".dsp") {
            return false;
        }
        return this.lines.slice(0, 3).some((line)=>line.includes("# Microsoft Developer Studio Generated Build File"));
    }
    generatedHaxe() {
        const extensions = [
            ".js",
            ".py",
            ".lua",
            ".cpp",
            ".h",
            ".java",
            ".cs",
            ".php"
        ];
        if (!extensions.includes(this.extname)) {
            return false;
        }
        return this.lines.slice(0, 3).some((line)=>line.includes("Generated by Haxe"));
    }
    generatedJooq() {
        if (this.extname !== ".java") {
            return false;
        }
        return this.lines.slice(0, 2).some((line)=>line.includes("This file is generated by jOOQ."));
    }
    generatedSorbetRbi() {
        if (this.extname !== ".rbi") {
            return false;
        }
        if (this.lines.length < 5) {
            return false;
        }
        return /^# typed:/.test(this.lines[0] || "") && (this.lines[2] || "").includes("DO NOT EDIT MANUALLY") && /^# Please (run|instead update this file by running) `bin\/tapioca/.test(this.lines[4] || "");
    }
    generatedMysqlViewDefinitionFormat() {
        if (this.extname !== ".frm") {
            return false;
        }
        return (this.lines[0] || "").includes("TYPE=VIEW");
    }
};

}
