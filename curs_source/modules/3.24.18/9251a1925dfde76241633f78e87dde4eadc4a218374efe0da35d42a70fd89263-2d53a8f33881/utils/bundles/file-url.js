var FileURL, fileUrlUtils;
export { FileURL, fileUrlUtils };
var __wakaru_init_file_url_initialized = false;
export function init_file_url() {
if (__wakaru_init_file_url_initialized) return;
__wakaru_init_file_url_initialized = true;
"use strict";
FileURL = class _FileURL {
    constructor(pathOrUrl){
        if (pathOrUrl.startsWith("file://")) {
            if (!this.isValidFileUrl(pathOrUrl)) {
                throw new Error(`Invalid file URL: ${pathOrUrl}`);
            }
            this.urlString = pathOrUrl;
        } else {
            const absolutePath = this.resolvePath(pathOrUrl);
            this.urlString = this.pathToFileUrl(absolutePath);
        }
    }
    isValidFileUrl(str3) {
        try {
            const url2 = new URL(str3);
            return url2.protocol === "file:";
        } catch  {
            return false;
        }
    }
    resolvePath(path64) {
        if (path64.includes("\\")) {
            path64 = path64.replace(/\\/g, "/");
        }
        if (/^[a-zA-Z]:\//.test(path64) || /^\//.test(path64)) {
            return path64;
        }
        const parts = path64.split("/");
        const resolved = [];
        for(let i = 0; i < parts.length; i++){
            const part = parts[i];
            if (part === "..") {
                resolved.pop();
            } else if (part !== "." && part !== "") {
                resolved.push(part);
            }
        }
        if (resolved.length === 0) {
            return ".";
        }
        return `/${resolved.join("/")}`;
    }
    pathToFileUrl(filePath) {
        if (/^[a-zA-Z]:\//.test(filePath)) {
            const drive = filePath.charAt(0).toLowerCase();
            const path64 = filePath.substring(2).replace(/\\/g, "/");
            return `file:///${drive}:${path64}`;
        }
        if (!filePath.startsWith("/")) {
            filePath = `/${filePath}`;
        }
        const encodedPath = encodeURIComponent(filePath).replace(/%2F/g, "/");
        return `file://${encodedPath}`;
    }
    fileUrlToPath(urlString) {
        try {
            const url2 = new URL(urlString);
            if (url2.pathname.startsWith("/") && /^\/[a-zA-Z]:\//.test(url2.pathname)) {
                const drive = url2.pathname[1].toUpperCase();
                const pathPart = url2.pathname.substring(3);
                return `${drive}:${pathPart}`;
            }
            const path64 = decodeURIComponent(url2.pathname);
            return path64;
        } catch  {
            throw new Error(`Invalid file URL format: ${urlString}`);
        }
    }
    get fsPath() {
        return this.toPath();
    }
    static fromPath(filePath) {
        return new _FileURL(filePath);
    }
    static fromUrl(fileUrl) {
        if (!fileUrl.startsWith("file://")) {
            throw new Error(`Expected file:// URL, got: ${fileUrl}`);
        }
        return new _FileURL(fileUrl);
    }
    static fromString(str3) {
        return new _FileURL(str3);
    }
    toPath() {
        return this.fileUrlToPath(this.urlString);
    }
    toString() {
        return this.urlString;
    }
    serialize() {
        return this.toString();
    }
    toURL() {
        try {
            return new URL(this.urlString);
        } catch  {
            throw new Error(`Invalid URL format: ${this.urlString}`);
        }
    }
    getFilename() {
        const path64 = this.toPath();
        const pathSeparator = path64.includes("\\") ? "\\" : "/";
        return path64.split(pathSeparator).pop() || "";
    }
    getDirectory() {
        const path64 = this.toPath();
        const pathSeparator = path64.includes("\\") ? "\\" : "/";
        const lastSeparatorIndex = path64.lastIndexOf(pathSeparator);
        if (lastSeparatorIndex === -1) {
            return path64;
        }
        return path64.substring(0, lastSeparatorIndex);
    }
    equals(other) {
        return this.urlString === other.urlString;
    }
    toJSON() {
        return this.toString();
    }
};
fileUrlUtils = {
    isFileUrl (str3) {
        return str3.startsWith("file://");
    },
    pathToUrl (filePath) {
        return new FileURL(filePath).toString();
    },
    urlToPath (fileUrl) {
        return new FileURL(fileUrl).toPath();
    }
};

}
