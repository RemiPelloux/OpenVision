// Own the public workspace.saveAll operation without changing group-scoped
// editor saves. Native model owners retain save participants/conflict handling.
export async function saveWorkspaceDocuments(includeUntitled, primarySide) {
  const owner = this._textFileService;
  const previous = owner.openvisionWorkspaceSaveQueue ?? Promise.resolve();
  const operation = previous.then(async () => {
    const editors = this._editorService;
    const textFiles = this._textFileService;
    try {
      const models = [...textFiles.files.models,
        ...(includeUntitled ? textFiles.untitled.models : [])];
      const unseen = models.filter(model => model.isDirty() &&
        editors.findEditors(model.resource, { supportSideBySide: primarySide }).length === 0);
      let success = false;
      try { success = (await editors.saveAll({ includeUntitled })).success === true; } catch { /* Save remaining documents. */ }
      for (const model of unseen) {
        if (model.isDisposed()) { success = false; continue; }
        if (!model.isDirty()) continue;
        if (model.isReadonly()) { success = false; continue; }
        try {
          if (!await textFiles.save(model.resource, { reason: 1 })) success = false;
        } catch { success = false; }
      }
      return success;
    } catch { return false; }
  });
  owner.openvisionWorkspaceSaveQueue = operation;
  try { return await operation; }
  finally { if (owner.openvisionWorkspaceSaveQueue === operation) owner.openvisionWorkspaceSaveQueue = undefined; }
}
