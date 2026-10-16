function $3(e){return e.paths.map(t=>{if(Tv(Ao(t))!==t)throw new Error(`cannot encode message ${e.$typeName} to JSON: lowerCamelCase of path name "${t}" is irreversible`);return Ao(t)}).join(",")}
