!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "94602a47-f4ed-5817-a5da-ba1d1c3ae883"));
  } catch (e) {}
})();
import { require_react as t } from "../chunk-ORS33AAG.js";
const e = t();
export const Children = e.Children,
  Component = e.Component,
  Fragment = e.Fragment,
  Profiler = e.Profiler,
  PureComponent = e.PureComponent,
  StrictMode = e.StrictMode,
  Suspense = e.Suspense,
  SuspenseList = e.SuspenseList,
  ViewTransition = e.ViewTransition,
  addTransitionType = e.addTransitionType,
  cloneElement = e.cloneElement,
  createContext = e.createContext,
  createElement = e.createElement,
  createFactory = e.createFactory,
  createRef = e.createRef,
  forwardRef = e.forwardRef,
  isValidElement = e.isValidElement,
  lazy = e.lazy,
  memo = e.memo,
  startTransition = e.startTransition,
  use = e.use,
  useActionState = e.useActionState,
  useCallback = e.useCallback,
  useContext = e.useContext,
  useDebugValue = e.useDebugValue,
  useDeferredValue = e.useDeferredValue,
  useEffect = e.useEffect,
  useEffectEvent = e.useEffectEvent,
  useId = e.useId,
  useImperativeHandle = e.useImperativeHandle,
  useInsertionEffect = e.useInsertionEffect,
  useLayoutEffect = e.useLayoutEffect,
  useMemo = e.useMemo,
  useOptimistic = e.useOptimistic,
  useReducer = e.useReducer,
  useRef = e.useRef,
  useState = e.useState,
  useSyncExternalStore = e.useSyncExternalStore,
  useTransition = e.useTransition,
  version = e.version;
export default e;

//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/core/vs/workbench/react-runtime/react/esm-index-production.js.map

//# debugId=94602a47-f4ed-5817-a5da-ba1d1c3ae883
