function yv(e){switch(e.kind.case){case"structValue":return Fm(e.kind.value);case"listValue":return e.kind.value.values.map(yv);case"nullValue":case void 0:return null;default:return e.kind.value}}
