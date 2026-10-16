import { k } from "./proto3.js";
import { bi } from "./protobuf.js";
import { x } from "./tslib.es6.js";
import { hu, x3 } from "./utils_pb.js";
var Cmu, Tmu, Emu, xmu, lBs, Imu, Amu, Rmu, Dmu, Mmu, Pmu, f3i, Lmu, Nmu, Omu, Fmu, Bmu, v3i, Umu, $mu, Hmu, uBs, Wmu, Gmu, Vmu, _3i, jmu, qmu, zmu, b3i, Kmu, dBs, hBs, pBs, mBs, Ymu, Xmu, Zmu, Qmu, Jmu, y3i, egu, Qxn, tgu;
export { $mu, Amu, Bmu, Cmu, Dmu, Emu, Fmu, Gmu, Hmu, Imu, Jmu, Kmu, Lmu, Mmu, Nmu, Omu, Pmu, Qmu, Qxn, Rmu, Tmu, Umu, Vmu, Wmu, Xmu, Ymu, Zmu, _3i, b3i, dBs, egu, f3i, hBs, jmu, lBs, mBs, pBs, qmu, tgu, uBs, v3i, xmu, y3i, zmu };
var __wakaru_ngu_initialized = false;
export function ngu() {
if (__wakaru_ngu_initialized) return;
__wakaru_ngu_initialized = true;
"use strict";
x(), bi(), hu(), Cmu = k.makeMessageType("aiserver.v1.CreateExperimentalIndexRequest", ()=>[
        {
            no: 1,
            name: "files",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "target_dir",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "repo",
            kind: "scalar",
            T: 9
        }
    ]), Tmu = k.makeMessageType("aiserver.v1.CreateExperimentalIndexResponse", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), Emu = k.makeMessageType("aiserver.v1.ListExperimentalIndexFilesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), xmu = k.makeMessageType("aiserver.v1.ListExperimentalIndexFilesResponse", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "files",
            kind: "message",
            T: dBs,
            repeated: !0
        }
    ]), lBs = k.makeMessageType("aiserver.v1.ListenExperimentalIndexRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), Imu = k.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "ready",
            kind: "message",
            T: Amu,
            oneof: "item"
        },
        {
            no: 3,
            name: "register",
            kind: "message",
            T: Rmu,
            oneof: "item"
        },
        {
            no: 4,
            name: "choose",
            kind: "message",
            T: Dmu,
            oneof: "item"
        },
        {
            no: 5,
            name: "summarize",
            kind: "message",
            T: Mmu,
            oneof: "item"
        },
        {
            no: 6,
            name: "error",
            kind: "message",
            T: Pmu,
            oneof: "item"
        }
    ]), Amu = k.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ReadyItem", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: lBs
        }
    ], {
    localName: "ListenExperimentalIndexResponse_ReadyItem"
}), Rmu = k.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.RegisterItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: Lmu
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: f3i
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_RegisterItem"
}), Dmu = k.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ChooseItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: Hmu
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: v3i
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_ChooseItem"
}), Mmu = k.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.SummarizeItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: jmu
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: _3i
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_SummarizeItem"
}), Pmu = k.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ErrorItem", ()=>[
        {
            no: 1,
            name: "message",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "status_code",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "register",
            kind: "message",
            T: f3i,
            oneof: "request"
        },
        {
            no: 4,
            name: "choose",
            kind: "message",
            T: v3i,
            oneof: "request"
        },
        {
            no: 5,
            name: "summarize",
            kind: "message",
            T: _3i,
            oneof: "request"
        },
        {
            no: 6,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_ErrorItem"
}), f3i = k.makeMessageType("aiserver.v1.RegisterFileToIndexRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "root_context_node",
            kind: "message",
            T: pBs
        },
        {
            no: 4,
            name: "content",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Lmu = k.makeMessageType("aiserver.v1.RegisterFileToIndexResponse", ()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "root_context_node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "dependency_resolution_attempts",
            kind: "message",
            T: mBs,
            repeated: !0
        },
        {
            no: 4,
            name: "file_data",
            kind: "message",
            T: dBs
        }
    ]), Nmu = k.makeMessageType("aiserver.v1.SetupIndexDependenciesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "dependency_resolution_results",
            kind: "message",
            T: Ymu,
            repeated: !0
        }
    ]), Omu = k.makeMessageType("aiserver.v1.SetupIndexDependenciesResponse", []), Fmu = k.makeMessageType("aiserver.v1.ComputeIndexTopoSortRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), Bmu = k.makeMessageType("aiserver.v1.ComputeIndexTopoSortResponse", []), v3i = k.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "file",
            kind: "message",
            T: Umu,
            oneof: "request"
        },
        {
            no: 3,
            name: "node",
            kind: "message",
            T: $mu,
            oneof: "request"
        },
        {
            no: 4,
            name: "recompute",
            kind: "scalar",
            T: 8
        }
    ]), Umu = k.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest.FileRequest", ()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChooseCodeReferencesRequest_FileRequest"
}), $mu = k.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest.NodeRequest", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChooseCodeReferencesRequest_NodeRequest"
}), Hmu = k.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: Wmu,
            oneof: "response"
        },
        {
            no: 2,
            name: "node",
            kind: "message",
            T: uBs,
            oneof: "response"
        }
    ]), uBs = k.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse.NodeResponse", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "actions",
            kind: "message",
            T: Qxn,
            repeated: !0
        },
        {
            no: 3,
            name: "skipped",
            kind: "scalar",
            T: 8
        },
        {
            no: 4,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "ChooseCodeReferencesResponse_NodeResponse"
}), Wmu = k.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse.FileResponse", ()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_responses",
            kind: "message",
            T: uBs,
            repeated: !0
        }
    ], {
    localName: "ChooseCodeReferencesResponse_FileResponse"
}), Gmu = k.makeMessageType("aiserver.v1.RegisterCodeReferencesRequest", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "references",
            kind: "message",
            T: Qmu,
            repeated: !0
        }
    ]), Vmu = k.makeMessageType("aiserver.v1.RegisterCodeReferencesResponse", ()=>[
        {
            no: 1,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), _3i = k.makeMessageType("aiserver.v1.SummarizeWithReferencesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "recompute",
            kind: "scalar",
            T: 8
        }
    ]), jmu = k.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: qmu,
            oneof: "response"
        },
        {
            no: 2,
            name: "dependency",
            kind: "message",
            T: zmu,
            oneof: "response"
        },
        {
            no: 3,
            name: "node_id",
            kind: "scalar",
            T: 9
        }
    ]), qmu = k.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse.Success", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SummarizeWithReferencesResponse_Success"
}), zmu = k.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse.Dependency", ()=>[
        {
            no: 2,
            name: "nodes",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "SummarizeWithReferencesResponse_Dependency"
}), b3i = k.makeMessageType("aiserver.v1.RequestReceivedResponse", ()=>[
        {
            no: 1,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ]), Kmu = k.makeMessageType("aiserver.v1.ReflectionData", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ]), dBs = k.makeMessageType("aiserver.v1.IndexFileData", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "stage",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "order",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "nodes",
            kind: "message",
            T: hBs,
            repeated: !0
        }
    ]), hBs = k.makeMessageType("aiserver.v1.IndexFileData.NodeData", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "stage",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "content",
            kind: "scalar",
            T: 9
        },
        {
            no: 4,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "IndexFileData_NodeData"
}), pBs = k.makeMessageType("aiserver.v1.SerializedContextNode", ()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "children",
            kind: "message",
            T: pBs,
            repeated: !0
        },
        {
            no: 5,
            name: "node_snippets",
            kind: "message",
            T: y3i
        }
    ]), mBs = k.makeMessageType("aiserver.v1.URIResolutionAttempt", ()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "node_id",
            kind: "scalar",
            T: 9
        },
        {
            no: 3,
            name: "symbol",
            kind: "message",
            T: Qxn
        }
    ]), Ymu = k.makeMessageType("aiserver.v1.URIResolutionResult", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: mBs
        },
        {
            no: 2,
            name: "resolved_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Xmu = k.makeMessageType("aiserver.v1.ExtractPathsRequest", ()=>[
        {
            no: 1,
            name: "file_code_snippets",
            kind: "message",
            T: y3i
        }
    ]), Zmu = k.makeMessageType("aiserver.v1.ExtractPathsResponse", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "message",
            T: Qxn,
            repeated: !0
        }
    ]), Qmu = k.makeMessageType("aiserver.v1.SymbolActionResults", ()=>[
        {
            no: 1,
            name: "action",
            kind: "message",
            T: Qxn
        },
        {
            no: 2,
            name: "references",
            kind: "message",
            T: Jmu,
            repeated: !0
        }
    ]), Jmu = k.makeMessageType("aiserver.v1.SymbolActionResultReference", ()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: x3
        },
        {
            no: 2,
            name: "reference",
            kind: "message",
            T: y3i
        }
    ]), y3i = k.makeMessageType("aiserver.v1.FileCodeSnippets", ()=>[
        {
            no: 1,
            name: "relative_workspace_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "total_lines",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "snippets",
            kind: "message",
            T: egu,
            repeated: !0
        }
    ]), egu = k.makeMessageType("aiserver.v1.CodeSnippet", ()=>[
        {
            no: 1,
            name: "start_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 2,
            name: "end_line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "lines",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Qxn = k.makeMessageType("aiserver.v1.CodeSymbolWithAction", ()=>[
        {
            no: 1,
            name: "workspace_relative_path",
            kind: "scalar",
            T: 9
        },
        {
            no: 2,
            name: "line_number",
            kind: "scalar",
            T: 5
        },
        {
            no: 3,
            name: "symbol_start_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 4,
            name: "symbol_end_column",
            kind: "scalar",
            T: 5
        },
        {
            no: 5,
            name: "action",
            kind: "enum",
            T: k.getEnumType(tgu)
        },
        {
            no: 6,
            name: "symbol",
            kind: "scalar",
            T: 9
        }
    ]), tgu = k.makeEnum("aiserver.v1.CodeSymbolWithAction.CodeSymbolAction", [
    {
        no: 0,
        name: "CODE_SYMBOL_ACTION_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "CODE_SYMBOL_ACTION_GO_TO_DEFINITION",
        localName: "GO_TO_DEFINITION"
    },
    {
        no: 2,
        name: "CODE_SYMBOL_ACTION_GO_TO_IMPLEMENTATION",
        localName: "GO_TO_IMPLEMENTATION"
    },
    {
        no: 3,
        name: "CODE_SYMBOL_ACTION_REFERENCES",
        localName: "REFERENCES"
    }
]);

}
