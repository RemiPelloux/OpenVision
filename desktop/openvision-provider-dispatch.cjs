'use strict';

const deadlinePolicyKey = Symbol.for('openvision.providerDeadlinePolicy');
const dispatchers = new WeakMap();

function deadlineDispatcher(delegate) {
  let wrapper = dispatchers.get(delegate);
  if (!wrapper) {
    wrapper = { dispatch(request, handler) {
      return delegate.dispatch({ ...request, headersTimeout: 0, bodyTimeout: 0 }, handler);
    } };
    dispatchers.set(delegate, wrapper);
  }
  return wrapper;
}

// Called after the extension host has selected proxy/TLS configuration. Marked
// requests already have application deadlines; other extensions keep theirs.
function withDeadlineDispatch(fetchImpl, getGlobalDispatcher) {
  return (input, options) => {
    if (!options?.[deadlinePolicyKey]) return fetchImpl(input, options);
    const { [deadlinePolicyKey]: _policy, ...request } = options;
    return fetchImpl(input, { ...request, dispatcher: deadlineDispatcher(options.dispatcher ?? getGlobalDispatcher()) });
  };
}

module.exports = { deadlinePolicyKey, withDeadlineDispatch };
