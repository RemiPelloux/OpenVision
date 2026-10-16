function Pp(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===Np?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}
