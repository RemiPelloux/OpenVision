import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createMcpServerFixture } from './verify-mcp-server.mjs';
import { createMcpStdioFixture } from './verify-mcp-stdio.mjs';

export async function createAgentMcpFixture({ directory, profile, stdio = false }) {
  const transport = await (stdio ? createMcpStdioFixture() : createMcpServerFixture());
  const results = { transport: transport.kind, transportRequests: transport.requests, errors: transport.errors,
    connections: transport.connections, cancellations: transport.cancellations, continuations: [], processSamples: [] };
  function verifyRequests() {
    assert.ok(transport.requests.every(request => stdio ? request.fixtureControlAuthenticated : request.authorized));
    assert.deepEqual(transport.errors, []);
  }
  const callCount = () => transport.requests.filter(request => request.method === 'tools/call').length;
  async function sample(app, label) {
    const metrics = await app.evaluate(({ app }) => app.getAppMetrics());
    const processes = metrics.filter(metric => metric.name?.startsWith('mcp-process-'));
    results.processSamples.push({ label, processes }); return processes;
  }
  async function submit(page, mode) {
    const input = page.locator('.aislash-editor-input[contenteditable=true]').filter({ visible: true }).first();
    await input.fill(mode === 'discover' ? 'List the tools from user-openvision-verify.' :
      `Propose calling memory_probe on user-openvision-verify in ${mode} mode. Wait for my approval.`);
    await input.press('Enter');
  }
  async function finish(page, mode) {
    await page.getByText(`OpenVision MCP ${mode} finished.`, { exact: true }).first().waitFor({ timeout: 45000 });
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
    const content = results.continuations.find(result => result.mode === mode)?.content;
    assert.ok(content, `Missing native MCP ${mode} continuation`);
    return JSON.stringify(content);
  }
  async function approveGate(page, mode, setPhase) {
    const before = callCount(); setPhase(`mcp-${mode}`); await submit(page, mode);
    await page.getByText('Pending approval', { exact: true }).filter({ visible: true }).waitFor({ timeout: 30000 });
    assert.equal(callCount(), before, 'MCP calls must wait for genuine approval');
    await page.screenshot({ path: join(directory, `mcp-${mode}-approval.png`) });
    const approval = page.locator('[data-tool-approval-gate]').filter({ visible: true });
    const action = approval.getByRole('button', { name: mode === 'deny' ? 'Skip' : /^Run(?:\s|$)/ });
    assert.equal(await action.count(), 1, 'Select the active MCP approval button, not transcript text');
    await action.click();
    return before;
  }
  async function approve(page, mode, setPhase) {
    const before = await approveGate(page, mode, setPhase);
    const content = await finish(page, mode);
    assert.equal(callCount(), before + (mode === 'deny' ? 0 : 1));
    if (mode !== 'deny') assert.ok(content.includes(transport.marker), 'Real MCP output must reach the model continuation');
  }
  async function verifyCancellation(page, setPhase) {
    const before = await approveGate(page, 'slow', setPhase);
    const startedDeadline = Date.now() + 10000;
    while (callCount() === before && Date.now() < startedDeadline) await page.waitForTimeout(50);
    assert.equal(callCount(), before + 1, 'The real MCP server must begin the slow call before Stop');
    const request = transport.requests.findLast(request => request.method === 'tools/call');
    assert.equal(request.params.arguments.mode, 'slow');
    const cancelled = () => transport.cancellations.some(event => event.requestId === request.id && event.instance === request.instance);
    const started = performance.now();
    await page.locator('.stop-button').filter({ visible: true }).first().click();
    const deadline = Date.now() + 10000;
    while (!cancelled() && Date.now() < deadline) await page.waitForTimeout(25);
    assert.ok(cancelled(), 'Stop must reach the real MCP transport');
    results.stopMs = Math.round(performance.now() - started);
    await page.locator('.stop-button').filter({ visible: true }).waitFor({ state: 'hidden' });
    assert.ok(results.stopMs < 1000, 'MCP Stop must meet the one-second cancellation budget');
    results.upstreamCancellation = true;
  }
  return {
    results, dispose: () => transport.dispose(),
    async verifyShutdown() { if (transport.verifyExited) { await transport.verifyExited(); results.nativeChildCleanup = true; } },
    respond(payload, event, mode) {
      const id = `call_openvision_mcp_${mode}`;
      const output = payload.messages?.find(message => message.role === 'tool' && message.tool_call_id === id);
      if (output) {
        results.continuations.push({ mode, content: output.content });
        event({ role: 'assistant', content: `OpenVision MCP ${mode} finished.` }); event({}, 'stop'); return;
      }
      const name = mode === 'discover' ? 'GetMcpTools' : 'CallMcpTool';
      if (!payload.tools?.some(tool => tool.function?.name === name)) {
        results.errors.push(`${name} must be advertised`);
        event({ role: 'assistant', content: `OpenVision MCP ${mode} finished.` }); event({}, 'stop'); return;
      }
      const args = mode === 'discover' ? { server: 'user-openvision-verify' } :
        { server: 'user-openvision-verify', toolName: 'memory_probe',
          description: `OpenVision MCP ${mode} probe`, arguments: mode === 'slow' ? { mode: 'slow' } : {} };
      event({ role: 'assistant', tool_calls: [{ index: 0, id, type: 'function',
        function: { name, arguments: JSON.stringify(args) } }] }); event({}, 'tool_calls');
    },
    async verify(page, app, setPhase) {
      assert.equal((await sample(app, 'before-configuration')).length, 0, 'No idle MCP utility before configuration');
      await writeFile(join(profile, 'User/mcp.json'), JSON.stringify({ mcpServers: {
        'openvision-verify': transport.configuration,
      } }, null, 2));
      const deadline = Date.now() + 45000;
      while (!transport.requests.some(request => request.method === 'tools/list') && Date.now() < deadline)
        await page.waitForTimeout(250);
      await writeFile(join(directory, 'mcp-connected-ui.txt'), await page.locator('body').innerText());
      assert.ok(transport.requests.some(request => request.method === 'tools/list'), 'Native config watcher must discover the MCP tool');
      // Legacy discovery can finish before asynchronous OAuth migration hands routing to the utility.
      const routingDeadline = Date.now() + 15000;
      while (!await app.evaluate(({ app }) => app.getAppMetrics().some(metric => metric.name?.startsWith('mcp-process-'))) &&
          Date.now() < routingDeadline) await page.waitForTimeout(250);
      assert.equal((await sample(app, 'after-configuration')).length, 1, 'One shared MCP utility serves real demand');
      const handoffDeadline = Date.now() + 30000;
      // STDIO's legacy handshake can be canceled before it ever lists tools.
      const expectedDiscoveries = stdio ? 1 : 2;
      while (transport.requests.filter(request => request.method === 'tools/list').length < expectedDiscoveries && Date.now() < handoffDeadline)
        await page.waitForTimeout(250);
      assert.ok(transport.requests.filter(request => request.method === 'tools/list').length >= expectedDiscoveries,
        'Shared transport must finish discovery after replacing the initial legacy client');
      await transport.verifyOneActiveChild?.();
      setPhase('mcp-discover'); await submit(page, 'discover');
      assert.match(await finish(page, 'discover'), /memory_probe/);
      for (const mode of ['deny', 'allow']) await approve(page, mode, setPhase);
      await verifyCancellation(page, setPhase);
      await approve(page, 'after-stop', setPhase);
      verifyRequests();
      results.lateConfiguration = true;
      results.toolListsBeforeRestart = transport.requests.filter(request => request.method === 'tools/list').length;
    },
    async verifyRestart(page, app, setPhase) {
      const deadline = Date.now() + 30000;
      while (transport.requests.filter(request => request.method === 'tools/list').length <= results.toolListsBeforeRestart &&
          Date.now() < deadline) await page.waitForTimeout(250);
      assert.ok(transport.requests.filter(request => request.method === 'tools/list').length > results.toolListsBeforeRestart,
        'Saved MCP configuration must reconnect after a full app restart');
      assert.equal((await sample(app, 'configured-restart')).length, 1);
      await transport.verifyOneActiveChild?.();
      await approve(page, 'restart', setPhase);
      verifyRequests();
      results.configuredRestart = true; results.success = true;
    },
  };
}
