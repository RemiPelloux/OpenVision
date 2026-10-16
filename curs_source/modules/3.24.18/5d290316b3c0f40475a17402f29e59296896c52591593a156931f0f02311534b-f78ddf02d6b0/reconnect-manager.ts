import { Gi } from "./error-message-utils.ts";
import { Be } from "./index.ts";
import { h } from "./tslib.es6.js";
var Yi, K_, q_, Xi, j_, V_, an, Ll, Y_, X_;
export { K_, Ll, V_, X_, Xi, Y_, Yi, an, j_, q_ };
var __wakaru_cn_initialized = false;
export function cn() {
if (__wakaru_cn_initialized) return;
__wakaru_cn_initialized = true;
"use strict";
h(), Be(), Gi(), Yi = new Set([
    "EAI_AGAIN",
    "ECONNABORTED",
    "ECONNREFUSED",
    "ECONNRESET",
    "EHOSTUNREACH",
    "ENETDOWN",
    "ENETUNREACH",
    "ENOTFOUND",
    "EPIPE",
    "ETIMEDOUT",
    "EADDRNOTAVAIL",
    "UND_ERR_CONNECT_TIMEOUT"
]), K_ = /net::ERR_(?:NETWORK_CHANGED|NETWORK_IO_SUSPENDED|INTERNET_DISCONNECTED|CONNECTION_(?:RESET|CLOSED|ABORTED|FAILED|REFUSED|TIMED_OUT)|TIMED_OUT|ABORTED|NAME_NOT_RESOLVED|NAME_RESOLUTION_FAILED|DNS_TIMED_OUT|SOCKET_NOT_CONNECTED|ADDRESS_UNREACHABLE|TUNNEL_CONNECTION_FAILED|EMPTY_RESPONSE|HTTP2_(?:PROTOCOL_ERROR|PING_FAILED)|QUIC_PROTOCOL_ERROR)\b/, q_ = /net::ERR_(?:CERT_[A-Z_]+|SSL_[A-Z_]+|BAD_SSL_[A-Z_]+|BLOCKED_BY_[A-Z_]+|DISALLOWED_URL_SCHEME|UNKNOWN_URL_SCHEME|INVALID_[A-Z_]+|ACCESS_DENIED|NETWORK_ACCESS_DENIED|PROXY_AUTH_[A-Z_]+|INSUFFICIENT_RESOURCES|OUT_OF_MEMORY)\b/, Xi = [
    /fetch failed/i,
    /network error/i,
    /socket hang up/i,
    /client network socket disconnected/i,
    /connection (?:timed out|timeout|closed|terminated)/i,
    /request timed out/i,
    K_
], j_ = new Set([
    "ECONNRESET",
    "EPIPE"
]), V_ = [
    /socket hang up/i,
    /client network socket disconnected/i,
    /connection (?:closed|terminated)/i,
    /ERR_STREAM_PREMATURE_CLOSE/i,
    /premature close/i,
    /net::ERR_(?:NETWORK_CHANGED|NETWORK_IO_SUSPENDED|CONNECTION_(?:RESET|CLOSED|ABORTED)|HTTP2_(?:PROTOCOL_ERROR|PING_FAILED)|QUIC_PROTOCOL_ERROR|EMPTY_RESPONSE)\b/
], an = new Set([
    429,
    502,
    503,
    504
]), Ll = 8192, Y_ = new Set([
    "ENOENT",
    "EACCES",
    "ENOTDIR",
    "EPERM"
]), X_ = [
    /cannot find module/i,
    /module not found/i,
    /syntaxerror/i,
    /command not found/i,
    /is not recognized as an internal or external command/i,
    /no such file or directory/i,
    /err_module_not_found/i
];

}
