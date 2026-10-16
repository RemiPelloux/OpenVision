import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { MethodKind } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/service-type.js";
import { GetDocRequest, GetPagesRequest, MarkAsPublicRequest, NewDocumentationRequest, Pages, ProtoDoc, RescrapeDocsRequest, RescrapeDocsRequestV2, RescrapeDocsResponse, UploadDocumentationRequest, UploadResponse, UploadedStatus, UploadedStatusRequest, UpsertDocsRequest, UpsertDocsResponse, init_uploadserver_pb } from "./uploadserver_pb.js";
var UploadService;
export { UploadService };
var __wakaru_init_uploadserver_connect_initialized = false;
export function init_uploadserver_connect() {
if (__wakaru_init_uploadserver_connect_initialized) return;
__wakaru_init_uploadserver_connect_initialized = true;
"use strict";
init_uploadserver_pb();
init_esm2();
UploadService = {
    typeName: "aiserver.v1.UploadService",
    methods: {
        uploadDocumentation: {
            name: "UploadDocumentation",
            I: NewDocumentationRequest,
            O: UploadResponse,
            kind: MethodKind.Unary
        },
        uploadDocumentationStatus: {
            name: "UploadDocumentationStatus",
            I: UploadDocumentationRequest,
            O: UploadedStatus,
            kind: MethodKind.Unary
        },
        markAsPublic: {
            name: "MarkAsPublic",
            I: MarkAsPublicRequest,
            O: UploadedStatus,
            kind: MethodKind.Unary
        },
        uploadStatus: {
            name: "UploadStatus",
            I: UploadedStatusRequest,
            O: UploadedStatus,
            kind: MethodKind.Unary
        },
        getPages: {
            name: "GetPages",
            I: GetPagesRequest,
            O: Pages,
            kind: MethodKind.Unary
        },
        getDoc: {
            name: "GetDoc",
            I: GetDocRequest,
            O: ProtoDoc,
            kind: MethodKind.Unary
        },
        rescrapeDocs: {
            name: "RescrapeDocs",
            I: RescrapeDocsRequest,
            O: RescrapeDocsResponse,
            kind: MethodKind.Unary
        },
        rescrapeDocsV2: {
            name: "RescrapeDocsV2",
            I: RescrapeDocsRequestV2,
            O: RescrapeDocsResponse,
            kind: MethodKind.Unary
        },
        upsertAllDocs: {
            name: "UpsertAllDocs",
            I: UpsertDocsRequest,
            O: UpsertDocsResponse,
            kind: MethodKind.Unary
        }
    }
};

}
