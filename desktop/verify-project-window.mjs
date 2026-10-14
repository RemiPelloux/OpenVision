import assert from 'node:assert/strict';

export async function changeProjectInSameWindow(app, page, action) {
  const window = await app.browserWindow(page), id = await window.evaluate(window => window.id);
  const count = app.windows().length;
  let created = 0;
  const onWindow = () => { created++; };
  app.on('window', onWindow);
  try {
    const navigated = page.waitForNavigation({ waitUntil: 'domcontentloaded', timeout: 60000 });
    // Observe rejections even if clicking itself fails before navigation starts.
    navigated.catch(() => {});
    await action(); await navigated;
    await page.locator('.openvision-project-home-button').waitFor({ timeout: 60000 });
    assert.equal(await (await app.browserWindow(page)).evaluate(window => window.id), id);
    assert.equal(app.windows().length, count);
    assert.equal(created, 0, 'Opening a project must not create another native window');
    return { nativeWindowId: id, windowsCreated: created, windowCount: count };
  } finally { app.removeListener('window', onWindow); }
}
