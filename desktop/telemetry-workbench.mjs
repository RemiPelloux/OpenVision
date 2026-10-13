import { parseExpressionAt } from '../tooling/dependencies.mjs';

const prefix = '/* OpenVision disabled telemetry owner: ';
const inertEvent = '() => ({ dispose() {} })';
const specs = [
  {
    id: 'window-analytics', anchor: '"windowAnalyticsService"', next: true,
    methods: 'setMachineClientContext getMachineClientContext recordLocalEvent enqueueEvent flushAll getWindowFlushContext getAnalyticsDirectory',
    initialize: 'this.eventQueue = []; this.analyticsOutputChannelLoaded = false;',
  },
  {
    id: 'analytics', anchor: 'this.windowAnalyticsService =',
    methods: 'flushAuthFlowEvent getGitAttributes setClientContext trackEvent trackRawEvent flushAll resolveContextForFlush shouldSendEventOnFlush analyticsEnabled gitTelemetryAllowedInAnalytics privacyModeAllowsGitTelemetryInAnalytics',
    initialize: `this.onEvent = ${inertEvent};`,
    returns: { shouldSendEventOnFlush: 'false', analyticsEnabled: 'false', gitTelemetryAllowedInAnalytics: 'false', privacyModeAllowsGitTelemetryInAnalytics: 'false' },
  },
  {
    id: 'window-metrics', anchor: 'this._smokeTestDistributionTap =',
    methods: '_computeLayoutTag _syncLayoutTag _pollRPCStats _getStampedCommonTags _stampTags _stampedTagsAndKey getCommonTags _shouldStoreMetric _emitBatchedMetrics _flushCounterBuffer _flushGaugeBuffer _flushDistributionBuffer _scheduleOverflowFlush _scheduleIdleFlush _flushAggregatedToProvider recordIncrement recordDistribution recordDistributionSamples _recordSmokeTestSample getDistributionValuesForSmokeTest recordGauge registerMetricsProvider unregisterMetricsProvider setMetricsConfig setIsDevUser dispose',
    returns: { getCommonTags: '{}', getDistributionValuesForSmokeTest: '[]', _shouldStoreMetric: 'false' },
  },
  {
    id: 'metrics', anchor: 'this._ownsWindowProvider =',
    methods: 'increment distribution gauge distributionSamples registerMetricsProvider unregisterMetricsProvider setMetricsConfig setIsDevUser getCommonTags getDistributionValuesForSmokeTest',
    returns: { getCommonTags: '{}', getDistributionValuesForSmokeTest: '[]' },
  },
  {
    id: 'continuous-profiling', anchor: 'ContinuousProfilingService: Starting initialization in renderer process',
    methods: '_updateServerConfig captureProfile captureEmergencyProfile getOrphanedEmergencyProfiles _convertServerProfileConfig setProfileSchedules setIsPrivacyMode _handleProfileStatusUpdate _uploadProfileFile _scheduleProfiles _createTimerForSchedule _captureScheduledProfile setProfileConfigs getIsPrivacyMode getActiveProfiles getScheduledProfiles dispose',
    initialize: `this.onProfileCaptureStatusChange = ${inertEvent}; this._isPrivacyMode = true;`,
    returns: { captureProfile: '""', captureEmergencyProfile: 'null', getOrphanedEmergencyProfiles: '[]', getIsPrivacyMode: 'true', getActiveProfiles: '0', getScheduledProfiles: '0' },
  },
  {
    id: 'memory-monitor', anchor: '[MemoryMonitor] Found',
    methods: '_getMemoryMonitorConfig _stopMonitoring _startStopMonitoring _recordRendererExposure _getMemoryUsage _getHeapStatistics _getHeapUsagePercent _checkMemoryUsage _getEmergencyProfilingConfig _checkEmergencyProfiling _triggerEmergencyProfile _uploadEmergencyProfile _uploadOrphanedEmergencyProfiles _showSnapshotPrompt _captureSnapshotToDisk _uploadSavedSnapshot _showRevealNotification _captureAndUploadSnapshot _captureUserSnapshot _triggerManualSnapshot dispose',
  },
  {
    id: 'performance-events', anchor: '"performanceEventService"', next: true,
    methods: '_handleConfigChange _handlePrivacyModeChange startTracking stopTracking _startFlushInterval startListening stopListening flushEvents _drainFlushes _flushOnce _requeueEvents isTrackingEnabled _shouldTrackEvents _readPolicy _boundedNumber _trimEventBuffer _sanitizeScriptField _findFastestBufferedEventIndex _getWindowType _getConnectionType _getReleaseTrackTag _buildPlatformTags _setupLongAnimationFrameObserver _addMetric _collectSystemMetadata _trackEventMetrics _collectMemoryMetrics _sendEventsToBackend _fitBatch _createSubmitRequest _convertToProtoEvent _convertToProtoMetadata dispose',
    initialize: 'this._isTracking = false;',
    returns: { flushEvents: 'Promise.resolve()', isTrackingEnabled: 'false', _shouldTrackEvents: 'false', _sendEventsToBackend: '[]' },
  },
  {
    id: 'edit-history', anchor: 'this.changeTooBigTimestampsByModelId =',
    methods: 'registerCppTelemProvider getCurrentSessionId flushAll filterOldTimestamps _noStorageMode _trackerShouldExit _turnOnTelem pollTelemEnabled _resetTTrackerShouldExit _updateTelemTurnedOnStateMachine setTelemEnabled canWeTrackTelem startRecordingTerminalEvents startRecordingBrowserEvents startRecordingNtpEvents onStartupChangeWatcher processModelChangeTelemetry _updatedSettingsSoUpdateTimer _weAreNoteGoingToTrackTelemBecauseSomethingBadMightHappen _updateCanWeTrackTelem processModelWillEnd recordCppSessionEvent recordCppSessionEventWithPerfProvided isModelTooBig markModelAsTooBig setModelTooBig isModelTooBigFullCheck',
    initialize: `this.telemEnabled = false; this.onDidChangeCppSessionId = ${inertEvent}; this.onDidChangeCppTelemEnabled = ${inertEvent};`,
    returns: { getCurrentSessionId: '""', _noStorageMode: 'true', _trackerShouldExit: 'true', _turnOnTelem: 'false', canWeTrackTelem: 'false', isModelTooBig: 'false', isModelTooBigFullCheck: 'false', _weAreNoteGoingToTrackTelemBecauseSomethingBadMightHappen: 'true' },
  },
  {
    id: 'client-log-upload', anchor: 'this.clientLoggerClient =',
    methods: 'getDebuggingDataUploadUrl logWhenTabTurnsOff',
    returns: { getDebuggingDataUploadUrl: '({ url: "" })', logWhenTabTurnsOff: '{}' },
  },
  {
    id: 'tracing-configuration', anchor: '.setSessionReplayConfig({ replaysSessionSampleRate:',
    methods: '',
  },
  {
    id: 'cpu-monitor', anchor: '[CpuMonitor] Not starting monitor',
    methods: '_isDevUser _isUserActiveInWindow _isMonitoringEligible _stopMonitoring _startStopMonitoring _isGateEnabled _getMonitorConfig _recordReading _checkCpuUsage _showSnapshotPrompt _collectProcessSnapshotData _buildProcessSnapshotJson _captureSnapshotToDisk _uploadSavedSnapshot _showRevealNotification _captureAndUploadSnapshot _triggerManualSnapshot dispose',
    returns: { _isMonitoringEligible: 'false', _isGateEnabled: 'false' },
  },
];

function owner(text, spec) {
  const marker = `${prefix}${spec.id} */`;
  const patched = text.includes(marker);
  const anchor = patched ? marker : spec.anchor;
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1)
    throw new Error(`Telemetry ${spec.id} owner missing or ambiguous`);
  const start = spec.next && !patched ? text.indexOf('class ', index) : text.lastIndexOf('class ', index);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'ClassExpression' || (node.end < index && !spec.next))
    throw new Error(`Telemetry ${spec.id} class boundary changed`);
  const members = node.body.body;
  const names = members.map(item => item.key?.name).join(' ');
  if (names !== `constructor ${spec.methods}`.trim() || members.some(item => item.type !== 'MethodDefinition' || item.static))
    throw new Error(`Telemetry ${spec.id} method contract changed: ${names}`);
  return { node, marker, patched };
}

function inertBody(member, spec, node, marker) {
  const name = member.key.name;
  if (name === 'constructor')
    return `{ ${marker} ${node.superClass ? 'super(); ' : ''}${spec.initialize ?? ''} }`;
  if (name === 'dispose') return '{ super.dispose(); }';
  if (spec.id === 'edit-history' && ['recordCppSessionEvent', 'recordCppSessionEventWithPerfProvided'].includes(name)) {
    const argument = member.value.params[name === 'recordCppSessionEvent' ? 1 : 2];
    const parameter = argument?.type === 'AssignmentPattern' ? argument.left : argument;
    if (parameter?.type !== 'Identifier') throw new Error('Edit telemetry resource ownership contract changed');
    return `{ ${parameter.name}?.dispose?.(); }`;
  }
  const result = spec.returns?.[name];
  return result ? `{ return ${result}; }` : '{}';
}

// Each owner is replaced at its producing boundary: no listeners, queues, timers,
// identifiers, feature-gate exposure checks, provider creation, or upload remain.
export function customizeWorkbenchTelemetry(text) {
  const patches = [];
  for (const spec of specs) {
    const { node, marker, patched } = owner(text, spec);
    for (const member of node.body.body) {
      const body = member.value.body;
      const replacement = inertBody(member, spec, node, marker);
      if (text.slice(body.start, body.end) === replacement) continue;
      if (patched) throw new Error(`Disabled telemetry owner ${spec.id} was modified`);
      patches.push({ start: body.start, end: body.end, text: replacement, reason: `Disable ${spec.id}.${member.key.name}` });
    }
  }
  for (const patch of patches.sort((left, right) => right.start - left.start))
    text = text.slice(0, patch.start) + patch.text + text.slice(patch.end);
  return { text, patches };
}
