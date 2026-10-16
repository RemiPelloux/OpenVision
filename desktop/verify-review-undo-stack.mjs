import assert from 'node:assert/strict';

async function historyState(page) {
  return page.evaluate(async () => {
    const probe = globalThis.__openvisionCreatedReviewProbe;
    const { past, future } = probe.service.undoRedoService.getElements(probe.element.resource);
    return {
      injected: probe.fault.injected,
      readInjected: probe.fault.readInjected,
      snapshotPresent: !!await probe.service.storageService.cursorDiskKVGet(probe.key),
      reviewPresent: probe.service.diffHandlers.has(probe.id),
      elementInPast: past.includes(probe.element),
      elementInFuture: future.includes(probe.element),
      past: past.map(element => element.label),
      future: future.map(element => element.label),
    };
  });
}

export async function checkNativeReviewUndoFailure({ page, result }) {
  result.undoStack = { scope: 'Native editor keyboard Undo through the mounted UndoRedoService; snapshot-service write rejection is injected, not physical I/O failure.' };
  await page.evaluate(() => {
    const probe = globalThis.__openvisionCreatedReviewProbe;
    const storage = probe.service.storageService, write = storage.cursorDiskKVSet;
    const read = probe.service.getStoredInlineDiff;
    probe.fault = { injected: 0, readInjected: 0, enabled: true, readEnabled: false,
      restore: () => { storage.cursorDiskKVSet = write; probe.service.getStoredInlineDiff = read; } };
    storage.cursorDiskKVSet = function(key, ...args) {
      if (key === probe.key && probe.fault.enabled) {
        probe.fault.injected++;
        return Promise.reject(new Error('OpenVision injected review snapshot write failure'));
      }
      return write.call(this, key, ...args);
    };
    probe.service.getStoredInlineDiff = function(key, ...args) {
      if (key === probe.key && probe.fault.readEnabled) {
        probe.fault.readInjected++;
        return Promise.reject(new Error('OpenVision injected review snapshot read failure'));
      }
      return read.call(this, key, ...args);
    };
  });
  try {
    result.undoStack.before = await historyState(page);
    assert.equal(result.undoStack.before.elementInPast, true, 'Created review must be in real editor history');
    await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
    for (let step = 0; step < 4; step++) {
      await page.keyboard.press('ControlOrMeta+z');
      await page.waitForTimeout(750);
      if ((await historyState(page)).injected) break;
    }
    result.undoStack.afterFailure = await historyState(page);
    result.undoStack.notification = await page.locator('.notifications-toasts').innerText().catch(() => '');
    await page.screenshot({ path: result.directory + '/undo-stack-failure.png' });
    assert.equal(result.undoStack.afterFailure.injected, 1, 'Keyboard Undo must reach the injected write boundary');
    assert.equal(result.undoStack.afterFailure.reviewPresent, true, 'Failed Undo must retain the live review');
    assert.equal(result.undoStack.afterFailure.elementInPast, true, 'Failed Undo must remain retryable in past history');
    assert.match(result.undoStack.notification, /undo.*try again|try.*undo again/i, 'Undo failure must show useful retry guidance');
    await page.evaluate(() => { globalThis.__openvisionCreatedReviewProbe.fault.enabled = false; });
    await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
    await page.keyboard.press('ControlOrMeta+z');
    await page.waitForFunction(() => {
      const probe = globalThis.__openvisionCreatedReviewProbe;
      return !probe.service.diffHandlers.has(probe.id);
    });
    result.undoStack.afterRetry = await historyState(page);
    assert.equal(result.undoStack.afterRetry.elementInFuture, true);
    await page.evaluate(() => { globalThis.__openvisionCreatedReviewProbe.fault.readEnabled = true; });
    await page.keyboard.press('ControlOrMeta+Shift+z');
    await page.waitForFunction(() => globalThis.__openvisionCreatedReviewProbe.fault.readInjected === 1);
    await page.waitForTimeout(750);
    result.undoStack.afterRedoFailure = await historyState(page);
    assert.equal(result.undoStack.afterRedoFailure.reviewPresent, false);
    assert.equal(result.undoStack.afterRedoFailure.elementInFuture, true);
    assert.equal(result.undoStack.afterRedoFailure.snapshotPresent, true);
    result.undoStack.redoNotification = await page.locator('.notifications-toasts').innerText();
    assert.match(result.undoStack.redoNotification, /try Redo again/i);
    await page.evaluate(() => { globalThis.__openvisionCreatedReviewProbe.fault.readEnabled = false; });
    await page.keyboard.press('ControlOrMeta+Shift+z');
    await page.waitForFunction(() => {
      const probe = globalThis.__openvisionCreatedReviewProbe;
      return probe.service.diffHandlers.has(probe.id);
    });
    result.undoStack.afterRedo = await historyState(page);
    assert.equal(result.undoStack.afterRedo.elementInPast, true);
  } finally {
    await page.evaluate(() => { globalThis.__openvisionCreatedReviewProbe.fault.restore(); });
  }
}
