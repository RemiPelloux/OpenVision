import { x } from "./proto3.js";
import { hr } from "./protobuf.js";
import { E } from "./tslib.es6.js";
import { Hu, m7 } from "./utils_pb.js";
var Cpd, Tpd, Epd, Ipd, WDo, xpd, Apd, Rpd, Ppd, Mpd, Dpd, Gbr, Npd, Lpd, Opd, Fpd, Bpd, qbr, Upd, jpd, $pd, GDo, Hpd, Wpd, Gpd, zbr, qpd, zpd, Vpd, Vbr, Kpd, qDo, zDo, VDo, KDo, Ypd, Xpd, Zpd, Qpd, Jpd, Kbr, emd, Vei, tmd;
export { $pd, Apd, Bpd, Cpd, Dpd, Epd, Fpd, GDo, Gbr, Gpd, Hpd, Ipd, Jpd, KDo, Kbr, Kpd, Lpd, Mpd, Npd, Opd, Ppd, Qpd, Rpd, Tpd, Upd, VDo, Vbr, Vei, Vpd, WDo, Wpd, Xpd, Ypd, Zpd, emd, jpd, qDo, qbr, qpd, tmd, xpd, zDo, zbr, zpd };
var __wakaru_nmd_initialized = false;
export function nmd() {
if (__wakaru_nmd_initialized) return;
__wakaru_nmd_initialized = true;
"use strict";
E(), hr(), Hu(), Cpd = x.makeMessageType("aiserver.v1.CreateExperimentalIndexRequest", ()=>[
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
    ]), Tpd = x.makeMessageType("aiserver.v1.CreateExperimentalIndexResponse", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), Epd = x.makeMessageType("aiserver.v1.ListExperimentalIndexFilesRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), Ipd = x.makeMessageType("aiserver.v1.ListExperimentalIndexFilesResponse", ()=>[
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
            T: qDo,
            repeated: !0
        }
    ]), WDo = x.makeMessageType("aiserver.v1.ListenExperimentalIndexRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), xpd = x.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse", ()=>[
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
            T: Apd,
            oneof: "item"
        },
        {
            no: 3,
            name: "register",
            kind: "message",
            T: Rpd,
            oneof: "item"
        },
        {
            no: 4,
            name: "choose",
            kind: "message",
            T: Ppd,
            oneof: "item"
        },
        {
            no: 5,
            name: "summarize",
            kind: "message",
            T: Mpd,
            oneof: "item"
        },
        {
            no: 6,
            name: "error",
            kind: "message",
            T: Dpd,
            oneof: "item"
        }
    ]), Apd = x.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ReadyItem", ()=>[
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
            T: WDo
        }
    ], {
    localName: "ListenExperimentalIndexResponse_ReadyItem"
}), Rpd = x.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.RegisterItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: Npd
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: Gbr
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_RegisterItem"
}), Ppd = x.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ChooseItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: $pd
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: qbr
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_ChooseItem"
}), Mpd = x.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.SummarizeItem", ()=>[
        {
            no: 1,
            name: "response",
            kind: "message",
            T: qpd
        },
        {
            no: 2,
            name: "request",
            kind: "message",
            T: zbr
        },
        {
            no: 3,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ListenExperimentalIndexResponse_SummarizeItem"
}), Dpd = x.makeMessageType("aiserver.v1.ListenExperimentalIndexResponse.ErrorItem", ()=>[
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
            T: Gbr,
            oneof: "request"
        },
        {
            no: 4,
            name: "choose",
            kind: "message",
            T: qbr,
            oneof: "request"
        },
        {
            no: 5,
            name: "summarize",
            kind: "message",
            T: zbr,
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
}), Gbr = x.makeMessageType("aiserver.v1.RegisterFileToIndexRequest", ()=>[
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
            T: VDo
        },
        {
            no: 4,
            name: "content",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Npd = x.makeMessageType("aiserver.v1.RegisterFileToIndexResponse", ()=>[
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
            T: KDo,
            repeated: !0
        },
        {
            no: 4,
            name: "file_data",
            kind: "message",
            T: qDo
        }
    ]), Lpd = x.makeMessageType("aiserver.v1.SetupIndexDependenciesRequest", ()=>[
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
            T: Ypd,
            repeated: !0
        }
    ]), Opd = x.makeMessageType("aiserver.v1.SetupIndexDependenciesResponse", []), Fpd = x.makeMessageType("aiserver.v1.ComputeIndexTopoSortRequest", ()=>[
        {
            no: 1,
            name: "index_id",
            kind: "scalar",
            T: 9
        }
    ]), Bpd = x.makeMessageType("aiserver.v1.ComputeIndexTopoSortResponse", []), qbr = x.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest", ()=>[
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
            T: Upd,
            oneof: "request"
        },
        {
            no: 3,
            name: "node",
            kind: "message",
            T: jpd,
            oneof: "request"
        },
        {
            no: 4,
            name: "recompute",
            kind: "scalar",
            T: 8
        }
    ]), Upd = x.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest.FileRequest", ()=>[
        {
            no: 1,
            name: "file_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChooseCodeReferencesRequest_FileRequest"
}), jpd = x.makeMessageType("aiserver.v1.ChooseCodeReferencesRequest.NodeRequest", ()=>[
        {
            no: 1,
            name: "node_id",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "ChooseCodeReferencesRequest_NodeRequest"
}), $pd = x.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse", ()=>[
        {
            no: 1,
            name: "file",
            kind: "message",
            T: Hpd,
            oneof: "response"
        },
        {
            no: 2,
            name: "node",
            kind: "message",
            T: GDo,
            oneof: "response"
        }
    ]), GDo = x.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse.NodeResponse", ()=>[
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
            T: Vei,
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
}), Hpd = x.makeMessageType("aiserver.v1.ChooseCodeReferencesResponse.FileResponse", ()=>[
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
            T: GDo,
            repeated: !0
        }
    ], {
    localName: "ChooseCodeReferencesResponse_FileResponse"
}), Wpd = x.makeMessageType("aiserver.v1.RegisterCodeReferencesRequest", ()=>[
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
            T: Qpd,
            repeated: !0
        }
    ]), Gpd = x.makeMessageType("aiserver.v1.RegisterCodeReferencesResponse", ()=>[
        {
            no: 1,
            name: "dependencies",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), zbr = x.makeMessageType("aiserver.v1.SummarizeWithReferencesRequest", ()=>[
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
    ]), qpd = x.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse", ()=>[
        {
            no: 1,
            name: "success",
            kind: "message",
            T: zpd,
            oneof: "response"
        },
        {
            no: 2,
            name: "dependency",
            kind: "message",
            T: Vpd,
            oneof: "response"
        },
        {
            no: 3,
            name: "node_id",
            kind: "scalar",
            T: 9
        }
    ]), zpd = x.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse.Success", ()=>[
        {
            no: 1,
            name: "summary",
            kind: "scalar",
            T: 9
        }
    ], {
    localName: "SummarizeWithReferencesResponse_Success"
}), Vpd = x.makeMessageType("aiserver.v1.SummarizeWithReferencesResponse.Dependency", ()=>[
        {
            no: 2,
            name: "nodes",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ], {
    localName: "SummarizeWithReferencesResponse_Dependency"
}), Vbr = x.makeMessageType("aiserver.v1.RequestReceivedResponse", ()=>[
        {
            no: 1,
            name: "req_uuid",
            kind: "scalar",
            T: 9
        }
    ]), Kpd = x.makeMessageType("aiserver.v1.ReflectionData", ()=>[
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
    ]), qDo = x.makeMessageType("aiserver.v1.IndexFileData", ()=>[
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
            T: zDo,
            repeated: !0
        }
    ]), zDo = x.makeMessageType("aiserver.v1.IndexFileData.NodeData", ()=>[
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
}), VDo = x.makeMessageType("aiserver.v1.SerializedContextNode", ()=>[
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
            T: VDo,
            repeated: !0
        },
        {
            no: 5,
            name: "node_snippets",
            kind: "message",
            T: Kbr
        }
    ]), KDo = x.makeMessageType("aiserver.v1.URIResolutionAttempt", ()=>[
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
            T: Vei
        }
    ]), Ypd = x.makeMessageType("aiserver.v1.URIResolutionResult", ()=>[
        {
            no: 1,
            name: "request",
            kind: "message",
            T: KDo
        },
        {
            no: 2,
            name: "resolved_paths",
            kind: "scalar",
            T: 9,
            repeated: !0
        }
    ]), Xpd = x.makeMessageType("aiserver.v1.ExtractPathsRequest", ()=>[
        {
            no: 1,
            name: "file_code_snippets",
            kind: "message",
            T: Kbr
        }
    ]), Zpd = x.makeMessageType("aiserver.v1.ExtractPathsResponse", ()=>[
        {
            no: 1,
            name: "paths",
            kind: "message",
            T: Vei,
            repeated: !0
        }
    ]), Qpd = x.makeMessageType("aiserver.v1.SymbolActionResults", ()=>[
        {
            no: 1,
            name: "action",
            kind: "message",
            T: Vei
        },
        {
            no: 2,
            name: "references",
            kind: "message",
            T: Jpd,
            repeated: !0
        }
    ]), Jpd = x.makeMessageType("aiserver.v1.SymbolActionResultReference", ()=>[
        {
            no: 1,
            name: "range",
            kind: "message",
            T: m7
        },
        {
            no: 2,
            name: "reference",
            kind: "message",
            T: Kbr
        }
    ]), Kbr = x.makeMessageType("aiserver.v1.FileCodeSnippets", ()=>[
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
            T: emd,
            repeated: !0
        }
    ]), emd = x.makeMessageType("aiserver.v1.CodeSnippet", ()=>[
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
    ]), Vei = x.makeMessageType("aiserver.v1.CodeSymbolWithAction", ()=>[
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
            T: x.getEnumType(tmd)
        },
        {
            no: 6,
            name: "symbol",
            kind: "scalar",
            T: 9
        }
    ]), tmd = x.makeEnum("aiserver.v1.CodeSymbolWithAction.CodeSymbolAction", [
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
