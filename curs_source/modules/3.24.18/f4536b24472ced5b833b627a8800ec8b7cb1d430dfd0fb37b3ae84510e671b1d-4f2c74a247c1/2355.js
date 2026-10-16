function M_(e){const t=e.getDefaultValue();return t!==void 0?e.fieldKind=="scalar"&&e.longAsString?t.toString():t:e.fieldKind=="scalar"?on(e.scalar,e.longAsString):e.enum.values[0].number}
