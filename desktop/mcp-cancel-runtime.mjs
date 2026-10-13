export async function callRendererMcpTool(toolName, args, options) {
  const signal = options.abortSignal;
  signal?.throwIfAborted();
  const identifier = await this.requireActiveProcessRegistryKey('call tool');
  signal?.throwIfAborted();
  const token = signal ? {
    get isCancellationRequested() { return signal.aborted; },
    onCancellationRequested(listener) {
      const abort = () => listener();
      signal.addEventListener('abort', abort, { once: true });
      return { dispose: () => signal.removeEventListener('abort', abort) };
    },
  } : undefined;
  try {
    return (await this.toolService.callTool({ identifier, toolName, args,
      toolCallId: options.toolCallId, composerId: options.composerId,
      useLeaseElicitation: options.useLeaseElicitation,
      correlationId: `${identifier}:${crypto.randomUUID()}`,
      callerWindowId: this.windowId, callerWorkspaceId: this.workspaceId,
    }, token)).result;
  } catch (error) {
    if (signal?.aborted) throw new Error('Tool call was cancelled');
    throw error;
  }
}

export async function callProcessMcpTool(request, token) {
  const controller = new AbortController();
  const subscription = token?.onCancellationRequested(() => controller.abort());
  if (token?.isCancellationRequested) controller.abort();
  try {
    controller.signal.throwIfAborted();
    return await this.connectionManager.callTool(request.identifier, request.toolName, request.args, {
      toolCallId: request.toolCallId, useLeaseElicitation: request.useLeaseElicitation,
      correlationId: request.correlationId, callerWindowId: request.callerWindowId,
      callerWorkspaceId: request.callerWorkspaceId, abortSignal: controller.signal,
    });
  } finally { subscription?.dispose(); }
}

// ProxyChannel's generic adapter drops the IPC cancellation token. Preserve it
// on this named operation without changing other services or serializing signals.
export function cancellableMcpToolChannel(service, delegate) {
  return {
    listen: delegate.listen.bind(delegate),
    call(context, command, args, token) {
      return command === 'callTool' ? service.callTool(args[0], token) : delegate.call(context, command, args);
    },
  };
}
