import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { FSConfigRequest, FSConfigResponse, FSGetFileContentsRequest, FSGetFileContentsResponse, FSGetMultiFileContentsRequest, FSGetMultiFileContentsResponse, FSInternalHealthCheckRequest, FSInternalHealthCheckResponse, FSIsEnabledForUserRequest, FSIsEnabledForUserResponse, FSSyncFileRequest, FSSyncFileResponse, FSUploadFileRequest, FSUploadFileResponse, init_filesyncserver_pb } from "./filesyncserver_pb.js";
var FileSyncService;
export { FileSyncService };
var __wakaru_init_filesyncserver_connect_initialized = false;
export function init_filesyncserver_connect() {
if (__wakaru_init_filesyncserver_connect_initialized) return;
__wakaru_init_filesyncserver_connect_initialized = true;
"use strict";
init_filesyncserver_pb();
init_esm2();
FileSyncService = {
    typeName: "aiserver.v1.FileSyncService",
    methods: {
        fSUploadFile: {
            name: "FSUploadFile",
            I: FSUploadFileRequest,
            O: FSUploadFileResponse,
            kind: MethodKind.Unary
        },
        fSSyncFile: {
            name: "FSSyncFile",
            I: FSSyncFileRequest,
            O: FSSyncFileResponse,
            kind: MethodKind.Unary
        },
        fSIsEnabledForUser: {
            name: "FSIsEnabledForUser",
            I: FSIsEnabledForUserRequest,
            O: FSIsEnabledForUserResponse,
            kind: MethodKind.Unary
        },
        fSConfig: {
            name: "FSConfig",
            I: FSConfigRequest,
            O: FSConfigResponse,
            kind: MethodKind.Unary
        },
        fSGetFileContents: {
            name: "FSGetFileContents",
            I: FSGetFileContentsRequest,
            O: FSGetFileContentsResponse,
            kind: MethodKind.Unary
        },
        fSGetMultiFileContents: {
            name: "FSGetMultiFileContents",
            I: FSGetMultiFileContentsRequest,
            O: FSGetMultiFileContentsResponse,
            kind: MethodKind.Unary
        },
        fSInternalSyncFile: {
            name: "FSInternalSyncFile",
            I: FSSyncFileRequest,
            O: FSSyncFileResponse,
            kind: MethodKind.Unary
        },
        fSInternalUploadFile: {
            name: "FSInternalUploadFile",
            I: FSUploadFileRequest,
            O: FSUploadFileResponse,
            kind: MethodKind.Unary
        },
        fSInternalHealthCheck: {
            name: "FSInternalHealthCheck",
            I: FSInternalHealthCheckRequest,
            O: FSInternalHealthCheckResponse,
            kind: MethodKind.Unary
        }
    }
};

}
