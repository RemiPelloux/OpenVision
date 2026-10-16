import assert from 'node:assert/strict';
import { historyCommand } from './verify-review-undo-stack.mjs';

async function state(page) {
  return page.evaluate(async () => {
    const probe = globalThis.__openvisionCreatedReviewProbe;
    const { past, future } = probe.service.undoRedoService.getElements(probe.element.resource);
    const fault = probe.removalFault;
    return { injected: fault.injected, historyCalls: fault.historyCalls,
      removalStep: fault.handler.openvisionRemovalStep,
      snapshotPresent: !!await probe.service.storageService.cursorDiskKVGet(probe.key),
      sameHandler: probe.service.diffHandlers.get(probe.id) === fault.handler,
      reviewPresent: probe.service.diffHandlers.has(probe.id),
      elementInPast: past.includes(probe.element), elementInFuture: future.includes(probe.element) };
  });
}

async function injectFault(page, kind) {
  await page.evaluate(kind => {
    const probe = globalThis.__openvisionCreatedReviewProbe, service = probe.service;
    const handler = service.diffHandlers.get(probe.id);
    const cancel = service.cancelInUndo, dispose = handler.dispose, compile = handler.compileAndFirePartialHistory;
    const fault = probe.removalFault = { handler, enabled: true, injected: 0, historyCalls: 0, historyStacks: [] };
    const fail = () => { fault.injected++; throw new Error(`OpenVision injected review ${kind} failure`); };
    service.cancelInUndo = function(id, ...args) {
      if (kind === 'cancellation' && id === probe.id && fault.enabled) fail();
      return cancel.call(this, id, ...args);
    };
    handler.dispose = function(...args) {
      if (kind === 'handler disposal' && fault.enabled) fail();
      return dispose.apply(this, args);
    };
    handler.compileAndFirePartialHistory = function(...args) {
      fault.historyCalls++;
      if (fault.historyStacks.length < 4) fault.historyStacks.push(new Error('review history probe').stack);
      return compile.apply(this, args);
    };
    fault.restore = () => {
      service.cancelInUndo = cancel; handler.dispose = dispose; handler.compileAndFirePartialHistory = compile;
    };
  }, kind);
}

async function focusAndUndo(page, result) {
  await page.locator('.editor-instance .monaco-editor .inputarea').filter({ visible: true }).first().focus();
  await historyCommand(page, result, 'undo');
}

async function clearNotifications(page) {
  await page.keyboard.press('F1');
  await page.locator('.quick-input-widget').getByRole('textbox', { name: 'input', exact: true })
    .fill('>Notifications: Clear All Notifications');
  await page.locator('.quick-input-list .monaco-list-row').filter({ hasText: 'Clear All Notifications' }).first().click();
  await page.waitForFunction(() => !document.querySelector('.notifications-toasts')?.textContent?.trim());
}

export async function checkNativeReviewRemovalFailures({ page, result }) {
  result.removal = { scope: 'Native keyboard Undo with injected cancellation/handler-disposal failures, followed by retry and Redo; controlled HTTP inference.', cases: [] };
  for (const kind of ['cancellation', 'handler disposal']) {
    await clearNotifications(page);
    await injectFault(page, kind);
    const check = { kind }; result.removal.cases.push(check);
    try {
      await focusAndUndo(page, result);
      await page.waitForFunction(() => globalThis.__openvisionCreatedReviewProbe.removalFault.injected >= 1);
      await page.waitForTimeout(500);
      check.failed = await state(page);
      assert.equal(check.failed.sameHandler, true, 'Failed removal retains its exact handler');
      assert.equal(check.failed.elementInPast, true, 'Failed removal stays retryable in native history');
      assert.equal(check.failed.snapshotPresent, true);
      assert.equal(check.failed.historyCalls, 1, 'Text Undo runs handler cleanup before the review callback');
      assert.equal(check.failed.injected, kind === 'cancellation' ? 1 : 2);
      assert.equal(check.failed.removalStep, kind === 'cancellation' ? 4 : 3);
      check.historyStacks = await page.evaluate(() => globalThis.__openvisionCreatedReviewProbe.removalFault.historyStacks);
      check.notification = await page.locator('.notifications-toasts').innerText();
      assert.match(check.notification, /try Undo again/i);
      await page.screenshot({ path: `${result.directory}/removal-${kind.replaceAll(' ', '-')}.png` });
      await page.evaluate(() => { globalThis.__openvisionCreatedReviewProbe.removalFault.enabled = false; });
      await focusAndUndo(page, result);
      await page.waitForFunction(() => {
        const probe = globalThis.__openvisionCreatedReviewProbe;
        return !probe.service.diffHandlers.has(probe.id) &&
          probe.service.undoRedoService.getElements(probe.element.resource).future.includes(probe.element);
      });
      check.retried = await state(page);
      assert.equal(check.retried.historyCalls, 1, 'Completed partial-history work is not replayed');
      assert.equal(check.retried.removalStep, 4, 'Handler cleanup finishes before its registry ownership is dropped');
      assert.equal(check.retried.snapshotPresent, true);
      await historyCommand(page, result, 'redo');
      await page.waitForFunction(() => {
        const probe = globalThis.__openvisionCreatedReviewProbe;
        return probe.service.diffHandlers.has(probe.id) &&
          probe.service.undoRedoService.getElements(probe.element.resource).past.includes(probe.element);
      });
      check.restored = await state(page);
      assert.equal(check.restored.snapshotPresent, false);
    } finally {
      await page.evaluate(() => { globalThis.__openvisionCreatedReviewProbe.removalFault.restore(); });
    }
  }
}
