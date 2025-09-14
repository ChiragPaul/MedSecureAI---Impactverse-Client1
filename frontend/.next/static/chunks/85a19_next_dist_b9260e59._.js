(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Before starting the Next.js runtime and requiring any module, we need to make
 * sure the following scripts are executed in the correct order:
 * - Polyfills
 * - next/script with `beforeInteractive` strategy
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "appBootstrap", {
    enumerable: true,
    get: function() {
        return appBootstrap;
    }
});
const _setattributesfromprops = (()=>{
    const e = new Error("Cannot find module './set-attributes-from-props'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const version = "15.5.2";
window.next = {
    version,
    appDir: true
};
function loadScriptsInSequence(scripts, hydrate) {
    if (!scripts || !scripts.length) {
        return hydrate();
    }
    return scripts.reduce((promise, param)=>{
        let [src, props] = param;
        return promise.then(()=>{
            return new Promise((resolve, reject)=>{
                const el = document.createElement('script');
                if (props) {
                    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
                }
                if (src) {
                    el.src = src;
                    el.onload = ()=>resolve();
                    el.onerror = reject;
                } else if (props) {
                    el.innerHTML = props.children;
                    setTimeout(resolve);
                }
                document.head.appendChild(el);
            });
        });
    }, Promise.resolve()).catch((err)=>{
        console.error(err);
    // Still try to hydrate even if there's an error.
    }).then(()=>{
        hydrate();
    });
}
function appBootstrap(hydrate) {
    loadScriptsInSequence(self.__next_s, ()=>{
        // If the static shell is being debugged, skip hydration if the
        // `__nextppronly` query is present. This is only enabled when the
        // environment variable `__NEXT_EXPERIMENTAL_STATIC_SHELL_DEBUGGING` is
        // set to `1`. Otherwise the following is optimized out.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        hydrate();
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-bootstrap.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/error-source.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    decorateServerError: null,
    getErrorSource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    decorateServerError: function() {
        return decorateServerError;
    },
    getErrorSource: function() {
        return getErrorSource;
    }
});
const symbolError = Symbol.for('NextjsError');
function getErrorSource(error) {
    return error[symbolError] || null;
}
function decorateServerError(error, type) {
    Object.defineProperty(error, symbolError, {
        writable: false,
        enumerable: false,
        configurable: false,
        value: type
    });
} //# sourceMappingURL=error-source.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/shared/forward-logs-shared.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    UNDEFINED_MARKER: null,
    patchConsoleMethod: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    UNDEFINED_MARKER: function() {
        return UNDEFINED_MARKER;
    },
    patchConsoleMethod: function() {
        return patchConsoleMethod;
    }
});
const UNDEFINED_MARKER = '__next_tagged_undefined';
function patchConsoleMethod(methodName, wrapper) {
    const descriptor = Object.getOwnPropertyDescriptor(console, methodName);
    if (descriptor && (descriptor.configurable || descriptor.writable) && typeof descriptor.value === 'function') {
        const originalMethod = descriptor.value;
        const originalName = Object.getOwnPropertyDescriptor(originalMethod, 'name');
        const wrapperMethod = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            wrapper(methodName, ...args);
            originalMethod.apply(this, args);
        };
        if (originalName) {
            Object.defineProperty(wrapperMethod, 'name', originalName);
        }
        Object.defineProperty(console, methodName, {
            value: wrapperMethod
        });
        return ()=>{
            Object.defineProperty(console, methodName, {
                value: originalMethod,
                writable: descriptor.writable,
                configurable: descriptor.configurable
            });
        };
    }
    return ()=>{};
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forward-logs-shared.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PROMISE_MARKER: null,
    UNAVAILABLE_MARKER: null,
    forwardErrorLog: null,
    forwardUnhandledError: null,
    initializeDebugLogForwarding: null,
    isTerminalLoggingEnabled: null,
    logQueue: null,
    logStringify: null,
    logUnhandledRejection: null,
    preLogSerializationClone: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PROMISE_MARKER: function() {
        return PROMISE_MARKER;
    },
    UNAVAILABLE_MARKER: function() {
        return UNAVAILABLE_MARKER;
    },
    forwardErrorLog: function() {
        return forwardErrorLog;
    },
    forwardUnhandledError: function() {
        return forwardUnhandledError;
    },
    initializeDebugLogForwarding: function() {
        return initializeDebugLogForwarding;
    },
    isTerminalLoggingEnabled: function() {
        return isTerminalLoggingEnabled;
    },
    logQueue: function() {
        return logQueue;
    },
    logStringify: function() {
        return logStringify;
    },
    logUnhandledRejection: function() {
        return logUnhandledRejection;
    },
    preLogSerializationClone: function() {
        return preLogSerializationClone;
    }
});
const _safestablestringify = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/safe-stable-stringify/index.js [app-client] (ecmascript)");
const _stitchederror = (()=>{
    const e = new Error("Cannot find module './errors/stitched-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorsource = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/error-source.js [app-client] (ecmascript)");
const _terminalloggingconfig = (()=>{
    const e = new Error("Cannot find module './terminal-logging-config'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _forwardlogsshared = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/shared/forward-logs-shared.js [app-client] (ecmascript)");
const terminalLoggingConfig = (0, _terminalloggingconfig.getTerminalLoggingConfig)();
const PROMISE_MARKER = 'Promise {}';
const UNAVAILABLE_MARKER = '[Unable to view]';
const maximumDepth = typeof terminalLoggingConfig === 'object' && terminalLoggingConfig.depthLimit ? terminalLoggingConfig.depthLimit : 5;
const maximumBreadth = typeof terminalLoggingConfig === 'object' && terminalLoggingConfig.edgeLimit ? terminalLoggingConfig.edgeLimit : 100;
const stringify = (0, _safestablestringify.configure)({
    maximumDepth,
    maximumBreadth
});
const isTerminalLoggingEnabled = (0, _terminalloggingconfig.getIsTerminalLoggingEnabled)();
const methods = [
    'log',
    'info',
    'warn',
    'debug',
    'table',
    'assert',
    'dir',
    'dirxml',
    'group',
    'groupCollapsed',
    'groupEnd',
    'trace'
];
function preLogSerializationClone(value, seen) {
    if (seen === void 0) seen = new WeakMap();
    if (value === undefined) return _forwardlogsshared.UNDEFINED_MARKER;
    if (value === null || typeof value !== 'object') return value;
    if (seen.has(value)) return seen.get(value);
    try {
        Object.keys(value);
    } catch (e) {
        return UNAVAILABLE_MARKER;
    }
    try {
        if (typeof value.then === 'function') return PROMISE_MARKER;
    } catch (e) {
        return UNAVAILABLE_MARKER;
    }
    if (Array.isArray(value)) {
        const out = [];
        seen.set(value, out);
        for (const item of value){
            try {
                out.push(preLogSerializationClone(item, seen));
            } catch (e) {
                out.push(UNAVAILABLE_MARKER);
            }
        }
        return out;
    }
    const proto = Object.getPrototypeOf(value);
    if (proto === Object.prototype || proto === null) {
        const out = {};
        seen.set(value, out);
        for (const key of Object.keys(value)){
            try {
                out[key] = preLogSerializationClone(value[key], seen);
            } catch (e) {
                out[key] = UNAVAILABLE_MARKER;
            }
        }
        return out;
    }
    return Object.prototype.toString.call(value);
}
const logStringify = (data)=>{
    try {
        const result = stringify(data);
        return result != null ? result : '"' + UNAVAILABLE_MARKER + '"';
    } catch (e) {
        return '"' + UNAVAILABLE_MARKER + '"';
    }
};
const afterThisFrame = (cb)=>{
    let timeout;
    const rafId = requestAnimationFrame(()=>{
        timeout = setTimeout(()=>{
            cb();
        });
    });
    return ()=>{
        cancelAnimationFrame(rafId);
        clearTimeout(timeout);
    };
};
let isPatched = false;
const serializeEntries = (entries)=>entries.map((clientEntry)=>{
        switch(clientEntry.kind){
            case 'any-logged-error':
            case 'console':
                {
                    return {
                        ...clientEntry,
                        args: clientEntry.args.map(stringifyUserArg)
                    };
                }
            case 'formatted-error':
                {
                    return clientEntry;
                }
            default:
                {
                    return null;
                }
        }
    });
const logQueue = {
    entries: [],
    flushScheduled: false,
    cancelFlush: null,
    socket: null,
    sourceType: undefined,
    router: null,
    scheduleLogSend: (entry)=>{
        logQueue.entries.push(entry);
        if (logQueue.flushScheduled) {
            return;
        }
        // safe to deref and use in setTimeout closure since we cancel on new socket
        const socket = logQueue.socket;
        if (!socket) {
            return;
        }
        // we probably dont need this
        logQueue.flushScheduled = true;
        // non blocking log flush, runs at most once per frame
        logQueue.cancelFlush = afterThisFrame(()=>{
            logQueue.flushScheduled = false;
            // just incase
            try {
                const payload = JSON.stringify({
                    event: 'browser-logs',
                    entries: serializeEntries(logQueue.entries),
                    router: logQueue.router,
                    // needed for source mapping, we just assign the sourceType from the last error for the whole batch
                    sourceType: logQueue.sourceType
                });
                socket.send(payload);
                logQueue.entries = [];
                logQueue.sourceType = undefined;
            } catch (e) {
            // error (make sure u don't infinite loop)
            /* noop */ }
        });
    },
    onSocketReady: (socket)=>{
        if (socket.readyState !== WebSocket.OPEN) {
            // invariant
            return;
        }
        // incase an existing timeout was going to run with a stale socket
        logQueue.cancelFlush == null ? void 0 : logQueue.cancelFlush.call(logQueue);
        logQueue.socket = socket;
        try {
            const payload = JSON.stringify({
                event: 'browser-logs',
                entries: serializeEntries(logQueue.entries),
                router: logQueue.router,
                sourceType: logQueue.sourceType
            });
            socket.send(payload);
            logQueue.entries = [];
            logQueue.sourceType = undefined;
        } catch (e) {
        /** noop just incase */ }
    }
};
const stringifyUserArg = (arg)=>{
    if (arg.kind !== 'arg') {
        return arg;
    }
    return {
        ...arg,
        data: logStringify(arg.data)
    };
};
const createErrorArg = (error)=>{
    const stack = stackWithOwners(error);
    return {
        kind: 'formatted-error-arg',
        prefix: error.message ? error.name + ": " + error.message : "" + error.name,
        stack
    };
};
const createLogEntry = (level, args)=>{
    // do not abstract this, it implicitly relies on which functions call it. forcing the inlined implementation makes you think about callers
    // error capture stack trace maybe
    const stack = stackWithOwners(new Error());
    const stackLines = stack == null ? void 0 : stack.split('\n');
    const cleanStack = stackLines == null ? void 0 : stackLines.slice(3).join('\n') // this is probably ignored anyways
    ;
    const entry = {
        kind: 'console',
        consoleMethodStack: cleanStack != null ? cleanStack : null,
        method: level,
        args: args.map((arg)=>{
            if (arg instanceof Error) {
                return createErrorArg(arg);
            }
            return {
                kind: 'arg',
                data: preLogSerializationClone(arg)
            };
        })
    };
    logQueue.scheduleLogSend(entry);
};
const forwardErrorLog = (args)=>{
    const errorObjects = args.filter((arg)=>arg instanceof Error);
    const first = errorObjects.at(0);
    if (first) {
        const source = (0, _errorsource.getErrorSource)(first);
        if (source) {
            logQueue.sourceType = source;
        }
    }
    /**
   * browser shows stack regardless of type of data passed to console.error, so we should do the same
   *
   * do not abstract this, it implicitly relies on which functions call it. forcing the inlined implementation makes you think about callers
   */ const stack = stackWithOwners(new Error());
    const stackLines = stack == null ? void 0 : stack.split('\n');
    const cleanStack = stackLines == null ? void 0 : stackLines.slice(3).join('\n');
    const entry = {
        kind: 'any-logged-error',
        method: 'error',
        consoleErrorStack: cleanStack != null ? cleanStack : '',
        args: args.map((arg)=>{
            if (arg instanceof Error) {
                return createErrorArg(arg);
            }
            return {
                kind: 'arg',
                data: preLogSerializationClone(arg)
            };
        })
    };
    logQueue.scheduleLogSend(entry);
};
const createUncaughtErrorEntry = (errorName, errorMessage, fullStack)=>{
    const entry = {
        kind: 'formatted-error',
        prefix: "Uncaught " + errorName + ": " + errorMessage,
        stack: fullStack,
        method: 'error'
    };
    logQueue.scheduleLogSend(entry);
};
const stackWithOwners = (error)=>{
    let ownerStack = '';
    (0, _stitchederror.setOwnerStackIfAvailable)(error);
    ownerStack = (0, _stitchederror.getOwnerStack)(error) || '';
    const stack = (error.stack || '') + ownerStack;
    return stack;
};
function logUnhandledRejection(reason) {
    if (reason instanceof Error) {
        createUnhandledRejectionErrorEntry(reason, stackWithOwners(reason));
        return;
    }
    createUnhandledRejectionNonErrorEntry(reason);
}
const createUnhandledRejectionErrorEntry = (error, fullStack)=>{
    const source = (0, _errorsource.getErrorSource)(error);
    if (source) {
        logQueue.sourceType = source;
    }
    const entry = {
        kind: 'formatted-error',
        prefix: "⨯ unhandledRejection: " + error.name + ": " + error.message,
        stack: fullStack,
        method: 'error'
    };
    logQueue.scheduleLogSend(entry);
};
const createUnhandledRejectionNonErrorEntry = (reason)=>{
    const entry = {
        kind: 'any-logged-error',
        // we can't access the stack since the event is dispatched async and creating an inline error would be meaningless
        consoleErrorStack: '',
        method: 'error',
        args: [
            {
                kind: 'arg',
                data: "⨯ unhandledRejection:",
                isRejectionMessage: true
            },
            {
                kind: 'arg',
                data: preLogSerializationClone(reason)
            }
        ]
    };
    logQueue.scheduleLogSend(entry);
};
const isHMR = (args)=>{
    const firstArg = args[0];
    if (typeof firstArg !== 'string') {
        return false;
    }
    if (firstArg.startsWith('[Fast Refresh]')) {
        return true;
    }
    if (firstArg.startsWith('[HMR]')) {
        return true;
    }
    return false;
};
const isIgnoredLog = (args)=>{
    if (args.length < 3) {
        return false;
    }
    const [format, styles, label] = args;
    if (typeof format !== 'string' || typeof styles !== 'string' || typeof label !== 'string') {
        return false;
    }
    // kinda hacky, we should define a common format for these strings so we can safely ignore
    return format.startsWith('%c%s%c') && styles.includes('background:');
};
function forwardUnhandledError(error) {
    createUncaughtErrorEntry(error.name, error.message, stackWithOwners(error));
}
const initializeDebugLogForwarding = (router)=>{
    // probably don't need this
    if (isPatched) {
        return;
    }
    // TODO(rob): why does this break rendering on server, important to know incase the same bug appears in browser
    if (typeof window === 'undefined') {
        return;
    }
    // better to be safe than sorry
    try {
        methods.forEach((method)=>(0, _forwardlogsshared.patchConsoleMethod)(method, function(_) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                if (isHMR(args)) {
                    return;
                }
                if (isIgnoredLog(args)) {
                    return;
                }
                createLogEntry(method, args);
            }));
    } catch (e) {}
    logQueue.router = router;
    isPatched = true;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forward-logs.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-setup.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const _interceptconsoleerror = (()=>{
    const e = new Error("Cannot find module './errors/intercept-console-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _useerrorhandler = (()=>{
    const e = new Error("Cannot find module './errors/use-error-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _forwardlogs = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/forward-logs.js [app-client] (ecmascript)");
(0, _useerrorhandler.handleGlobalErrors)();
(0, _interceptconsoleerror.patchConsoleError)();
if (_forwardlogs.isTerminalLoggingEnabled) {
    (0, _forwardlogs.initializeDebugLogForwarding)('app');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dev-overlay-setup.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// imports polyfill from `@next/polyfill-module` after build.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
(()=>{
    const e = new Error("Cannot find module '../build/polyfills/polyfill-module'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// Only setup devtools in development
if ("TURBOPACK compile-time truthy", 1) {
    __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-setup.js [app-client] (ecmascript)");
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-globals.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
        return;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // This branch is unreachable because this function is only called
        // in production, but the condition is true only in development.
        // Therefore if the branch is still here, dead code elimination wasn't
        // properly applied.
        // Don't change the message. React DevTools relies on it. Also make sure
        // this message doesn't occur elsewhere in this function, or it will cause
        // a false positive.
        throw new Error('^_^');
    }
    try {
        // Verify that the code above has been dead code eliminated (DCE'd).
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
        // DevTools shouldn't crash React, no matter what.
        // We should still report in case we break this code.
        console.error(err);
    }
}
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = (()=>{
        const e = new Error("Cannot find module './cjs/react-dom-client.development.js'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
}
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = (()=>{
        const e = new Error("Cannot find module './cjs/react-server-dom-turbopack-client.browser.development.js'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
}
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.browser.js [app-client] (ecmascript)");
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HeadManagerContext", {
    enumerable: true,
    get: function() {
        return HeadManagerContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const HeadManagerContext = _react.default.createContext({});
if ("TURBOPACK compile-time truthy", 1) {
    HeadManagerContext.displayName = 'HeadManagerContext';
} //# sourceMappingURL=head-manager-context.shared-runtime.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HandleISRError", {
    enumerable: true,
    get: function() {
        return HandleISRError;
    }
});
const workAsyncStorage = typeof window === 'undefined' ? (()=>{
    const e = new Error("Cannot find module '../../server/app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})().workAsyncStorage : undefined;
function HandleISRError(param) {
    let { error } = param;
    if (workAsyncStorage) {
        const store = workAsyncStorage.getStore();
        if ((store == null ? void 0 : store.isRevalidate) || (store == null ? void 0 : store.isStaticGeneration)) {
            console.error(error);
            throw error;
        }
    }
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-isr-error.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorBoundary: null,
    ErrorBoundaryHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundary: function() {
        return ErrorBoundary;
    },
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = (()=>{
    const e = new Error("Cannot find module './navigation-untracked'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _isnextroutererror = (()=>{
    const e = new Error("Cannot find module './is-next-router-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _navfailurehandler = (()=>{
    const e = new Error("Cannot find module './nav-failure-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _handleisrerror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const _isbot = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/router/utils/is-bot'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const isBotUserAgent = typeof window !== 'undefined' && (0, _isbot.isBot)(window.navigator.userAgent);
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            // Re-throw if an expected internal Next.js router error occurs
            // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
            throw error;
        }
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { error } = state;
        // if we encounter an error while
        // a navigation is pending we shouldn't render
        // the error boundary and instead should fallback
        // to a hard navigation to attempt recovering
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        //When it's bot request, segment level error boundary will keep rendering the children,
        // the final error will be caught by the root error boundary and determine wether need to apply graceful degrade.
        if (this.state.error && !isBotUserAgent) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_handleisrerror.HandleISRError, {
                        error: this.state.error
                    }),
                    this.props.errorStyles,
                    this.props.errorScripts,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.errorComponent, {
                        error: this.state.error,
                        reset: this.reset
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props), this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, errorScripts, children } = param;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these errors can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    if (errorComponent) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, // supplied custom global error signatures.
"default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _handleisrerror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '28px',
        margin: '0 8px'
    }
};
function DefaultGlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_handleisrerror.HandleISRError, {
                        error: error
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: styles.error,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("h2", {
                                    style: styles.text,
                                    children: [
                                        "Application error: a ",
                                        digest ? 'server' : 'client',
                                        "-side exception has occurred while loading ",
                                        window.location.hostname,
                                        " (see the",
                                        ' ',
                                        digest ? 'server logs' : 'browser console',
                                        " for more information)."
                                    ]
                                }),
                                digest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: styles.text,
                                    children: "Digest: " + digest
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const _default = DefaultGlobalError;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=global-error.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppDevOverlayErrorBoundary", {
    enumerable: true,
    get: function() {
        return AppDevOverlayErrorBoundary;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _nextdevtools = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/next-devtools/index.js [app-client] (ecmascript)");
const _runtimeerrorhandler = (()=>{
    const e = new Error("Cannot find module '../../../client/dev/runtime-error-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundary = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const _segmentexplorernode = (()=>{
    const e = new Error("Cannot find module './segment-explorer-node'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function ErroredHtml(param) {
    let { globalError: [GlobalError, globalErrorStyles], error } = param;
    if (!error) {
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("body", {})
            ]
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_errorboundary.ErrorBoundary, {
        errorComponent: _globalerror.default,
        children: [
            globalErrorStyles,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(GlobalError, {
                error: error
            })
        ]
    });
}
class AppDevOverlayErrorBoundary extends _react.PureComponent {
    static getDerivedStateFromError(error) {
        _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError = true;
        return {
            reactError: error
        };
    }
    componentDidCatch(err) {
        if (("TURBOPACK compile-time value", "development") === 'development' && err.message === _segmentexplorernode.SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE) {
            return;
        }
        _nextdevtools.dispatcher.openErrorOverlay();
    }
    render() {
        const { children, globalError } = this.props;
        const { reactError } = this.state;
        const fallback = /*#__PURE__*/ (0, _jsxruntime.jsx)(ErroredHtml, {
            globalError: globalError,
            error: reactError
        });
        return reactError !== null ? fallback : children;
    }
    constructor(...args){
        super(...args), this.state = {
            reactError: null
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-dev-overlay-error-boundary.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file is only used in app router due to the specific error state handling.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    onCaughtError: null,
    onUncaughtError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    onCaughtError: function() {
        return onCaughtError;
    },
    onUncaughtError: function() {
        return onUncaughtError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _isnextroutererror = (()=>{
    const e = new Error("Cannot find module '../components/is-next-router-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _bailouttocsr = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _reportglobalerror = (()=>{
    const e = new Error("Cannot find module './report-global-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundary = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const devToolErrorMod = ("TURBOPACK compile-time truthy", 1) ? (()=>{
    const e = new Error("Cannot find module '../../next-devtools/userspace/app/errors'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})() : "TURBOPACK unreachable";
function onCaughtError(thrownValue, errorInfo) {
    var _errorInfo_errorBoundary;
    const errorBoundaryComponent = (_errorInfo_errorBoundary = errorInfo.errorBoundary) == null ? void 0 : _errorInfo_errorBoundary.constructor;
    let isImplicitErrorBoundary;
    if ("TURBOPACK compile-time truthy", 1) {
        const { AppDevOverlayErrorBoundary } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
        isImplicitErrorBoundary = errorBoundaryComponent === AppDevOverlayErrorBoundary;
    }
    isImplicitErrorBoundary = isImplicitErrorBoundary || errorBoundaryComponent === _errorboundary.ErrorBoundaryHandler && errorInfo.errorBoundary.props.errorComponent === _globalerror.default;
    // Skip the segment explorer triggered error
    if ("TURBOPACK compile-time truthy", 1) {
        const { SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE } = (()=>{
            const e = new Error("Cannot find module '../../next-devtools/userspace/app/segment-explorer-node'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        if (thrownValue instanceof Error && thrownValue.message === SEGMENT_EXPLORER_SIMULATED_ERROR_MESSAGE) {
            return;
        }
    }
    if (isImplicitErrorBoundary) {
        // We don't consider errors caught unless they're caught by an explicit error
        // boundary. The built-in ones are considered implicit.
        // This mimics how the same app would behave without Next.js.
        return onUncaughtError(thrownValue);
    }
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(thrownValue) || (0, _isnextroutererror.isNextRouterError)(thrownValue)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        var _errorInfo_componentStack;
        const errorBoundaryName = (errorBoundaryComponent == null ? void 0 : errorBoundaryComponent.displayName) || (errorBoundaryComponent == null ? void 0 : errorBoundaryComponent.name) || 'Unknown';
        const componentThatErroredFrame = errorInfo == null ? void 0 : (_errorInfo_componentStack = errorInfo.componentStack) == null ? void 0 : _errorInfo_componentStack.split('\n')[1];
        var // example 1: at Page (http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1)
        // example 2: Page@http://localhost:3000/_next/static/chunks/pages/index.js?ts=1631600000000:2:1
        _componentThatErroredFrame_match;
        // Match chrome or safari stack trace
        const matches = (_componentThatErroredFrame_match = componentThatErroredFrame == null ? void 0 : componentThatErroredFrame.match(/\s+at (\w+)\s+|(\w+)@/)) != null ? _componentThatErroredFrame_match : [];
        const componentThatErroredName = matches[1] || matches[2] || 'Unknown';
        // Create error location with errored component and error boundary, to match the behavior of default React onCaughtError handler.
        const errorBoundaryMessage = "It was handled by the <" + errorBoundaryName + "> error boundary.";
        const componentErrorMessage = ("TURBOPACK compile-time truthy", 1) ? "The above error occurred in the <" + componentThatErroredName + "> component." : "TURBOPACK unreachable";
        const errorLocation = componentErrorMessage + " " + errorBoundaryMessage;
        const error = devToolErrorMod.decorateDevError(thrownValue);
        // Log and report the error with location but without modifying the error stack
        devToolErrorMod.originConsoleError('%o\n\n%s', thrownValue, errorLocation);
        devToolErrorMod.handleClientError(error);
    } else //TURBOPACK unreachable
    ;
}
function onUncaughtError(thrownValue) {
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(thrownValue) || (0, _isnextroutererror.isNextRouterError)(thrownValue)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        const error = devToolErrorMod.decorateDevError(thrownValue);
        // TODO: Add an adendum to the overlay telling people about custom error boundaries.
        (0, _reportglobalerror.reportGlobalError)(error);
    } else //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary-callbacks.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "callServer", {
    enumerable: true,
    get: function() {
        return callServer;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './components/router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _useactionqueue = (()=>{
    const e = new Error("Cannot find module './components/use-action-queue'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
async function callServer(actionId, actionArgs) {
    return new Promise((resolve, reject)=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_SERVER_ACTION,
                actionId,
                actionArgs,
                resolve,
                reject
            });
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-call-server.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findSourceMapURL", {
    enumerable: true,
    get: function() {
        return findSourceMapURL;
    }
});
const basePath = ("TURBOPACK compile-time value", "") || '';
const pathname = "" + basePath + "/__nextjs_source-map";
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? function findSourceMapURL(filename) {
    if (filename === '') {
        return null;
    }
    if (filename.startsWith(document.location.origin) && filename.includes('/_next/static')) {
        // This is a request for a client chunk. This can only happen when
        // using Turbopack. In this case, since we control how those source
        // maps are generated, we can safely assume that the sourceMappingURL
        // is relative to the filename, with an added `.map` extension. The
        // browser can just request this file, and it gets served through the
        // normal dev server, without the need to route this through
        // the `/__nextjs_source-map` dev middleware.
        return "" + filename + ".map";
    }
    const url = new URL(pathname, document.location.origin);
    url.searchParams.set('filename', filename);
    return url.href;
} : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-find-source-map-url.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = (()=>{
    const e = new Error("Cannot find module './parse-path'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [app-client] (ecmascript)");
const _normalizetrailingslash = (()=>{
    const e = new Error("Cannot find module './normalize-trailing-slash'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    AppRouterContext: null,
    GlobalLayoutRouterContext: null,
    LayoutRouterContext: null,
    MissingSlotContext: null,
    TemplateContext: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    AppRouterContext: function() {
        return AppRouterContext;
    },
    GlobalLayoutRouterContext: function() {
        return GlobalLayoutRouterContext;
    },
    LayoutRouterContext: function() {
        return LayoutRouterContext;
    },
    MissingSlotContext: function() {
        return MissingSlotContext;
    },
    TemplateContext: function() {
        return TemplateContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const AppRouterContext = _react.default.createContext(null);
const LayoutRouterContext = _react.default.createContext(null);
const GlobalLayoutRouterContext = _react.default.createContext(null);
const TemplateContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    AppRouterContext.displayName = 'AppRouterContext';
    LayoutRouterContext.displayName = 'LayoutRouterContext';
    GlobalLayoutRouterContext.displayName = 'GlobalLayoutRouterContext';
    TemplateContext.displayName = 'TemplateContext';
}
const MissingSlotContext = _react.default.createContext(new Set()); //# sourceMappingURL=app-router-context.shared-runtime.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createHrefFromUrl", {
    enumerable: true,
    get: function() {
        return createHrefFromUrl;
    }
});
function createHrefFromUrl(url, includeHash) {
    if (includeHash === void 0) includeHash = true;
    return url.pathname + url.search + (includeHash ? url.hash : '');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-href-from-url.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const ANNOUNCER_TYPE = 'next-route-announcer';
const ANNOUNCER_ID = '__next-route-announcer__';
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = 'position:absolute';
        const announcer = document.createElement('div');
        announcer.ariaLive = 'assertive';
        announcer.id = ANNOUNCER_ID;
        announcer.role = 'alert';
        announcer.style.cssText = 'position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal';
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)('');
    const previousTitle = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>{
        let currentTitle = '';
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector('h1');
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || '';
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createRouterCacheKey", {
    enumerable: true,
    get: function() {
        return createRouterCacheKey;
    }
});
const _segment = (()=>{
    const e = new Error("Cannot find module '../../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function createRouterCacheKey(segment, withoutSearchParameters) {
    if (withoutSearchParameters === void 0) withoutSearchParameters = false;
    // if the segment is an array, it means it's a dynamic segment
    // for example, ['lang', 'en', 'd']. We need to convert it to a string to store it as a cache node key.
    if (Array.isArray(segment)) {
        return segment[0] + "|" + segment[1] + "|" + segment[2];
    }
    // Page segments might have search parameters, ie __PAGE__?foo=bar
    // When `withoutSearchParameters` is true, we only want to return the page segment
    if (withoutSearchParameters && segment.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-router-cache-key.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findHeadInCache", {
    enumerable: true,
    get: function() {
        return findHeadInCache;
    }
});
const _segment = (()=>{
    const e = new Error("Cannot find module '../../../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _createroutercachekey = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
function findHeadInCache(cache, parallelRoutes) {
    return findHeadInCacheImpl(cache, parallelRoutes, '', '');
}
function findHeadInCacheImpl(cache, parallelRoutes, keyPrefix, keyPrefixWithoutSearchParams) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        // Returns the entire Cache Node of the segment whose head we will render.
        return [
            cache,
            keyPrefix,
            keyPrefixWithoutSearchParams
        ];
    }
    // First try the 'children' parallel route if it exists
    // when starting from the "root", this corresponds with the main page component
    const parallelRoutesKeys = Object.keys(parallelRoutes).filter((key)=>key !== 'children');
    // if we are at the root, we need to check the children slot first
    if ('children' in parallelRoutes) {
        parallelRoutesKeys.unshift('children');
    }
    for (const key of parallelRoutesKeys){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        // If the parallel is not matched and using the default segment,
        // skip searching the head from it.
        if (segment === _segment.DEFAULT_SEGMENT_KEY) {
            continue;
        }
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        const cacheKeyWithoutSearchParams = (0, _createroutercachekey.createRouterCacheKey)(segment, true);
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCacheImpl(cacheNode, childParallelRoutes, keyPrefix + '/' + cacheKey, keyPrefix + '/' + cacheKeyWithoutSearchParams);
        if (item) {
            return item;
        }
    }
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=find-head-in-cache.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = (()=>{
    const e = new Error("Cannot find module '../shared/lib/router/utils/path-has-prefix'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    computeChangedPath: null,
    extractPathFromFlightRouterState: null,
    getSelectedParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    computeChangedPath: function() {
        return computeChangedPath;
    },
    extractPathFromFlightRouterState: function() {
        return extractPathFromFlightRouterState;
    },
    getSelectedParams: function() {
        return getSelectedParams;
    }
});
const _interceptionroutes = (()=>{
    const e = new Error("Cannot find module '../../../shared/lib/router/utils/interception-routes'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _segment = (()=>{
    const e = new Error("Cannot find module '../../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _matchsegments = (()=>{
    const e = new Error("Cannot find module '../match-segments'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const removeLeadingSlash = (segment)=>{
    return segment[0] === '/' ? segment.slice(1) : segment;
};
const segmentToPathname = (segment)=>{
    if (typeof segment === 'string') {
        // 'children' is not a valid path -- it's technically a parallel route that corresponds with the current segment's page
        // if we don't skip it, then the computed pathname might be something like `/children` which doesn't make sense.
        if (segment === 'children') return '';
        return segment;
    }
    return segment[1];
};
function normalizeSegments(segments) {
    return segments.reduce((acc, segment)=>{
        segment = removeLeadingSlash(segment);
        if (segment === '' || (0, _segment.isGroupSegment)(segment)) {
            return acc;
        }
        return acc + "/" + segment;
    }, '') || '/';
}
function extractPathFromFlightRouterState(flightRouterState) {
    const segment = Array.isArray(flightRouterState[0]) ? flightRouterState[0][1] : flightRouterState[0];
    if (segment === _segment.DEFAULT_SEGMENT_KEY || _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m))) return undefined;
    if (segment.startsWith(_segment.PAGE_SEGMENT_KEY)) return '';
    const segments = [
        segmentToPathname(segment)
    ];
    var _flightRouterState_;
    const parallelRoutes = (_flightRouterState_ = flightRouterState[1]) != null ? _flightRouterState_ : {};
    const childrenPath = parallelRoutes.children ? extractPathFromFlightRouterState(parallelRoutes.children) : undefined;
    if (childrenPath !== undefined) {
        segments.push(childrenPath);
    } else {
        for (const [key, value] of Object.entries(parallelRoutes)){
            if (key === 'children') continue;
            const childPath = extractPathFromFlightRouterState(value);
            if (childPath !== undefined) {
                segments.push(childPath);
            }
        }
    }
    return normalizeSegments(segments);
}
function computeChangedPathImpl(treeA, treeB) {
    const [segmentA, parallelRoutesA] = treeA;
    const [segmentB, parallelRoutesB] = treeB;
    const normalizedSegmentA = segmentToPathname(segmentA);
    const normalizedSegmentB = segmentToPathname(segmentB);
    if (_interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>normalizedSegmentA.startsWith(m) || normalizedSegmentB.startsWith(m))) {
        return '';
    }
    if (!(0, _matchsegments.matchSegment)(segmentA, segmentB)) {
        var _extractPathFromFlightRouterState;
        // once we find where the tree changed, we compute the rest of the path by traversing the tree
        return (_extractPathFromFlightRouterState = extractPathFromFlightRouterState(treeB)) != null ? _extractPathFromFlightRouterState : '';
    }
    for(const parallelRouterKey in parallelRoutesA){
        if (parallelRoutesB[parallelRouterKey]) {
            const changedPath = computeChangedPathImpl(parallelRoutesA[parallelRouterKey], parallelRoutesB[parallelRouterKey]);
            if (changedPath !== null) {
                return segmentToPathname(segmentB) + "/" + changedPath;
            }
        }
    }
    return null;
}
function computeChangedPath(treeA, treeB) {
    const changedPath = computeChangedPathImpl(treeA, treeB);
    if (changedPath == null || changedPath === '/') {
        return changedPath;
    }
    // lightweight normalization to remove route groups
    return normalizeSegments(changedPath.split('/'));
}
function getSelectedParams(currentTree, params) {
    if (params === void 0) params = {};
    const parallelRoutes = currentTree[1];
    for (const parallelRoute of Object.values(parallelRoutes)){
        const segment = parallelRoute[0];
        const isDynamicParameter = Array.isArray(segment);
        const segmentValue = isDynamicParameter ? segment[1] : segment;
        if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) continue;
        // Ensure catchAll and optional catchall are turned into an array
        const isCatchAll = isDynamicParameter && (segment[2] === 'c' || segment[2] === 'oc');
        if (isCatchAll) {
            params[segment[0]] = segment[1].split('/');
        } else if (isDynamicParameter) {
            params[segment[0]] = segment[1];
        }
        params = getSelectedParams(parallelRoute, params);
    }
    return params;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=compute-changed-path.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/lib/framework/boundary-constants.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MetadataBoundary: null,
    OutletBoundary: null,
    RootLayoutBoundary: null,
    ViewportBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MetadataBoundary: function() {
        return MetadataBoundary;
    },
    OutletBoundary: function() {
        return OutletBoundary;
    },
    RootLayoutBoundary: function() {
        return RootLayoutBoundary;
    },
    ViewportBoundary: function() {
        return ViewportBoundary;
    }
});
const _boundaryconstants = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/lib/framework/boundary-constants.js [app-client] (ecmascript)");
// We use a namespace object to allow us to recover the name of the function
// at runtime even when production bundling/minification is used.
const NameSpace = {
    [_boundaryconstants.METADATA_BOUNDARY_NAME]: function(param) {
        let { children } = param;
        return children;
    },
    [_boundaryconstants.VIEWPORT_BOUNDARY_NAME]: function(param) {
        let { children } = param;
        return children;
    },
    [_boundaryconstants.OUTLET_BOUNDARY_NAME]: function(param) {
        let { children } = param;
        return children;
    },
    [_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME]: function(param) {
        let { children } = param;
        return children;
    }
};
const MetadataBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.METADATA_BOUNDARY_NAME.slice(0)];
const ViewportBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.VIEWPORT_BOUNDARY_NAME.slice(0)];
const OutletBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.OUTLET_BOUNDARY_NAME.slice(0)];
const RootLayoutBoundary = // so it retains the name inferred from the namespace object
NameSpace[_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME.slice(0)]; //# sourceMappingURL=boundary-components.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HTTPAccessFallbackBoundary", {
    enumerable: true,
    get: function() {
        return HTTPAccessFallbackBoundary;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = (()=>{
    const e = new Error("Cannot find module '../navigation-untracked'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _httpaccessfallback = (()=>{
    const e = new Error("Cannot find module './http-access-fallback'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _warnonce = (()=>{
    const e = new Error("Cannot find module '../../../shared/lib/utils/warn-once'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
class HTTPAccessFallbackErrorBoundary extends _react.default.Component {
    componentDidCatch() {
        if (("TURBOPACK compile-time value", "development") === 'development' && this.props.missingSlots && this.props.missingSlots.size > 0 && // A missing children slot is the typical not-found case, so no need to warn
        !this.props.missingSlots.has('children')) {
            let warningMessage = 'No default component was found for a parallel route rendered on this page. Falling back to nearest NotFound boundary.\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs\n\n';
            const formattedSlots = Array.from(this.props.missingSlots).sort((a, b)=>a.localeCompare(b)).map((slot)=>"@" + slot).join(', ');
            warningMessage += 'Missing slots: ' + formattedSlots;
            (0, _warnonce.warnOnce)(warningMessage);
        }
    }
    static getDerivedStateFromError(error) {
        if ((0, _httpaccessfallback.isHTTPAccessFallbackError)(error)) {
            const httpStatus = (0, _httpaccessfallback.getAccessFallbackHTTPStatus)(error);
            return {
                triggeredStatus: httpStatus
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.triggeredStatus) {
            return {
                triggeredStatus: undefined,
                previousPathname: props.pathname
            };
        }
        return {
            triggeredStatus: state.triggeredStatus,
            previousPathname: props.pathname
        };
    }
    render() {
        const { notFound, forbidden, unauthorized, children } = this.props;
        const { triggeredStatus } = this.state;
        const errorComponents = {
            [_httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND]: notFound,
            [_httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN]: forbidden,
            [_httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED]: unauthorized
        };
        if (triggeredStatus) {
            const isNotFound = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND && notFound;
            const isForbidden = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN && forbidden;
            const isUnauthorized = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED && unauthorized;
            // If there's no matched boundary in this layer, keep throwing the error by rendering the children
            if (!(isNotFound || isForbidden || isUnauthorized)) {
                return children;
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }),
                    ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "boundary-next-error",
                        content: (0, _httpaccessfallback.getAccessFallbackErrorTypeByStatus)(triggeredStatus)
                    }),
                    errorComponents[triggeredStatus]
                ]
            });
        }
        return children;
    }
    constructor(props){
        super(props);
        this.state = {
            triggeredStatus: undefined,
            previousPathname: props.pathname
        };
    }
}
function HTTPAccessFallbackBoundary(param) {
    let { notFound, forbidden, unauthorized, children } = param;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these error can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    const missingSlots = (0, _react.useContext)(_approutercontextsharedruntime.MissingSlotContext);
    const hasErrorFallback = !!(notFound || forbidden || unauthorized);
    if (hasErrorFallback) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(HTTPAccessFallbackErrorBoundary, {
            pathname: pathname,
            notFound: notFound,
            forbidden: forbidden,
            unauthorized: unauthorized,
            missingSlots: missingSlots,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DevRootHTTPAccessFallbackBoundary: null,
    bailOnRootNotFound: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DevRootHTTPAccessFallbackBoundary: function() {
        return DevRootHTTPAccessFallbackBoundary;
    },
    bailOnRootNotFound: function() {
        return bailOnRootNotFound;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _errorboundary = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
function bailOnRootNotFound() {
    throw Object.defineProperty(new Error('notFound() is not allowed to use in root layout'), "__NEXT_ERROR_CODE", {
        value: "E192",
        enumerable: false,
        configurable: true
    });
}
function NotAllowedRootHTTPFallbackError() {
    bailOnRootNotFound();
    return null;
}
function DevRootHTTPAccessFallbackBoundary(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.HTTPAccessFallbackBoundary, {
        notFound: /*#__PURE__*/ (0, _jsxruntime.jsx)(NotAllowedRootHTTPFallbackError, {}),
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-root-http-access-fallback-boundary.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createEmptyCacheNode: null,
    createPrefetchURL: null,
    default: null,
    isExternalURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createEmptyCacheNode: function() {
        return createEmptyCacheNode;
    },
    createPrefetchURL: function() {
        return createPrefetchURL;
    },
    default: function() {
        return AppRouter;
    },
    isExternalURL: function() {
        return isExternalURL;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/hooks-client-context.shared-runtime'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _useactionqueue = (()=>{
    const e = new Error("Cannot find module './use-action-queue'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _isbot = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/router/utils/is-bot'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _addbasepath = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _approuterannouncer = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)");
const _redirectboundary = (()=>{
    const e = new Error("Cannot find module './redirect-boundary'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _findheadincache = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)");
const _unresolvedthenable = (()=>{
    const e = new Error("Cannot find module './unresolved-thenable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _removebasepath = (()=>{
    const e = new Error("Cannot find module '../remove-base-path'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _hasbasepath = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _navfailurehandler = (()=>{
    const e = new Error("Cannot find module './nav-failure-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _approuterinstance = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _redirect = (()=>{
    const e = new Error("Cannot find module './redirect'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _redirecterror = (()=>{
    const e = new Error("Cannot find module './redirect-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _links = (()=>{
    const e = new Error("Cannot find module './links'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _rooterrorboundary = /*#__PURE__*/ _interop_require_default._((()=>{
    const e = new Error("Cannot find module './errors/root-error-boundary'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const _boundarycomponents = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/lib/framework/boundary-components.js [app-client] (ecmascript)");
const globalMutable = {};
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function createPrefetchURL(href) {
    // Don't prefetch for bots as they don't navigate.
    if ((0, _isbot.isBot)(window.navigator.userAgent)) {
        return null;
    }
    let url;
    try {
        url = new URL((0, _addbasepath.addBasePath)(href), window.location.href);
    } catch (_) {
        // TODO: Does this need to throw or can we just console.error instead? Does
        // anyone rely on this throwing? (Seems unlikely.)
        throw Object.defineProperty(new Error("Cannot prefetch '" + href + "' because it cannot be converted to a URL."), "__NEXT_ERROR_CODE", {
            value: "E234",
            enumerable: false,
            configurable: true
        });
    }
    // Don't prefetch during development (improves compilation performance)
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function HistoryUpdater(param) {
    let { appRouterState } = param;
    (0, _react.useInsertionEffect)(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const { tree, pushRef, canonicalUrl } = appRouterState;
        const historyState = {
            ...pushRef.preserveCustomHistoryState ? window.history.state : {},
            // Identifier is shortened intentionally.
            // __NA is used to identify if the history entry can be handled by the app-router.
            // __N is used to identify if the history entry can be handled by the old router.
            __NA: true,
            __PRIVATE_NEXTJS_INTERNALS_TREE: tree
        };
        if (pushRef.pendingPush && // Skip pushing an additional history entry if the canonicalUrl is the same as the current url.
        // This mirrors the browser behavior for normal navigation.
        (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, '', canonicalUrl);
        } else {
            window.history.replaceState(historyState, '', canonicalUrl);
        }
    }, [
        appRouterState
    ]);
    (0, _react.useEffect)(()=>{
        // The Next-Url and the base tree may affect the result of a prefetch
        // task. Re-prefetch all visible links with the updated values. In most
        // cases, this will not result in any new network requests, only if
        // the prefetch result actually varies on one of these inputs.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        appRouterState.nextUrl,
        appRouterState.tree
    ]);
    return null;
}
function createEmptyCacheNode() {
    return {
        lazyData: null,
        rsc: null,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        parallelRoutes: new Map(),
        loading: null,
        navigatedAt: -1
    };
}
function copyNextJsInternalHistoryState(data) {
    if (data == null) data = {};
    const currentState = window.history.state;
    const __NA = currentState == null ? void 0 : currentState.__NA;
    if (__NA) {
        data.__NA = __NA;
    }
    const __PRIVATE_NEXTJS_INTERNALS_TREE = currentState == null ? void 0 : currentState.__PRIVATE_NEXTJS_INTERNALS_TREE;
    if (__PRIVATE_NEXTJS_INTERNALS_TREE) {
        data.__PRIVATE_NEXTJS_INTERNALS_TREE = __PRIVATE_NEXTJS_INTERNALS_TREE;
    }
    return data;
}
function Head(param) {
    let { headCacheNode } = param;
    // If this segment has a `prefetchHead`, it's the statically prefetched data.
    // We should use that on initial render instead of `head`. Then we'll switch
    // to `head` when the dynamic response streams in.
    const head = headCacheNode !== null ? headCacheNode.head : null;
    const prefetchHead = headCacheNode !== null ? headCacheNode.prefetchHead : null;
    // If no prefetch data is available, then we go straight to rendering `head`.
    const resolvedPrefetchRsc = prefetchHead !== null ? prefetchHead : head;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    return (0, _react.useDeferredValue)(head, resolvedPrefetchRsc);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { actionQueue, assetPrefix, globalError } = param;
    const state = (0, _useactionqueue.useActionQueue)(actionQueue);
    const { canonicalUrl } = state;
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl, typeof window === 'undefined' ? 'http://n' : window.location.href);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { cache, prefetchCache, tree } = state;
        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(()=>{
            // Add `window.nd` for debugging purposes.
            // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
            // @ts-ignore this is for debugging
            window.nd = {
                router: _approuterinstance.publicAppRouterInstance,
                cache,
                prefetchCache,
                tree
            };
        }, [
            cache,
            prefetchCache,
            tree
        ]);
    }
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE)) {
                return;
            }
            // Clear the pendingMpaPath value so that a subsequent MPA navigation to the same URL can be triggered.
            // This is necessary because if the browser restored from bfcache, the pendingMpaPath would still be set to the value
            // of the last MPA navigation.
            globalMutable.pendingMpaPath = undefined;
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
            });
        }
        window.addEventListener('pageshow', handlePageShow);
        return ()=>{
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, []);
    (0, _react.useEffect)(()=>{
        // Ensure that any redirect errors that bubble up outside of the RedirectBoundary
        // are caught and handled by the router.
        function handleUnhandledRedirect(event) {
            const error = 'reason' in event ? event.reason : event.error;
            if ((0, _redirecterror.isRedirectError)(error)) {
                event.preventDefault();
                const url = (0, _redirect.getURLFromRedirectError)(error);
                const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
                // TODO: This should access the router methods directly, rather than
                // go through the public interface.
                if (redirectType === _redirecterror.RedirectType.push) {
                    _approuterinstance.publicAppRouterInstance.push(url, {});
                } else {
                    _approuterinstance.publicAppRouterInstance.replace(url, {});
                }
            }
        }
        window.addEventListener('error', handleUnhandledRedirect);
        window.addEventListener('unhandledrejection', handleUnhandledRedirect);
        return ()=>{
            window.removeEventListener('error', handleUnhandledRedirect);
            window.removeEventListener('unhandledrejection', handleUnhandledRedirect);
        };
    }, []);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    const { pushRef } = state;
    if (pushRef.mpaNavigation) {
        // if there's a re-render, we don't want to trigger another redirect if one is already in flight to the same URL
        if (globalMutable.pendingMpaPath !== canonicalUrl) {
            const location = window.location;
            if (pushRef.pendingPush) {
                location.assign(canonicalUrl);
            } else {
                location.replace(canonicalUrl);
            }
            globalMutable.pendingMpaPath = canonicalUrl;
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        // NOTE: This is intentionally using `throw` instead of `use` because we're
        // inside an externally mutable condition (pushRef.mpaNavigation), which
        // violates the rules of hooks.
        throw _unresolvedthenable.unresolvedThenable;
    }
    (0, _react.useEffect)(()=>{
        const originalPushState = window.history.pushState.bind(window.history);
        const originalReplaceState = window.history.replaceState.bind(window.history);
        // Ensure the canonical URL in the Next.js Router is updated when the URL is changed so that `usePathname` and `useSearchParams` hold the pushed values.
        const applyUrlFromHistoryPushReplace = (url)=>{
            var _window_history_state;
            const href = window.location.href;
            const tree = (_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE;
            (0, _react.startTransition)(()=>{
                (0, _useactionqueue.dispatchAppRouterAction)({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(url != null ? url : href, href),
                    tree
                });
            });
        };
        /**
     * Patch pushState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.pushState = function pushState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalPushState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalPushState(data, _unused, url);
        };
        /**
     * Patch replaceState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.replaceState = function replaceState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalReplaceState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalReplaceState(data, _unused, url);
        };
        /**
     * Handle popstate event, this is used to handle back/forward in the browser.
     * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
     * That case can happen when the old router injected the history entry.
     */ const onPopState = (event)=>{
            if (!event.state) {
                // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
                return;
            }
            // This case happens when the history entry was pushed by the `pages` router.
            if (!event.state.__NA) {
                window.location.reload();
                return;
            }
            // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
            // Without startTransition works if the cache is there for this path
            (0, _react.startTransition)(()=>{
                (0, _approuterinstance.dispatchTraverseAction)(window.location.href, event.state.__PRIVATE_NEXTJS_INTERNALS_TREE);
            });
        };
        // Register popstate event to call onPopstate.
        window.addEventListener('popstate', onPopState);
        return ()=>{
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener('popstate', onPopState);
        };
    }, []);
    const { cache, tree, nextUrl, focusAndScrollRef } = state;
    const matchingHead = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    // Add memoized pathParams for useParams.
    const pathParams = (0, _react.useMemo)(()=>{
        return (0, _computechangedpath.getSelectedParams)(tree);
    }, [
        tree
    ]);
    const layoutRouterContext = (0, _react.useMemo)(()=>{
        return {
            parentTree: tree,
            parentCacheNode: cache,
            parentSegmentPath: null,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        };
    }, [
        tree,
        cache,
        canonicalUrl
    ]);
    const globalLayoutRouterContext = (0, _react.useMemo)(()=>{
        return {
            tree,
            focusAndScrollRef,
            nextUrl
        };
    }, [
        tree,
        focusAndScrollRef,
        nextUrl
    ]);
    let head;
    if (matchingHead !== null) {
        // The head is wrapped in an extra component so we can use
        // `useDeferredValue` to swap between the prefetched and final versions of
        // the head. (This is what LayoutRouter does for segment data, too.)
        //
        // The `key` is used to remount the component whenever the head moves to
        // a different segment.
        const [headCacheNode, headKey, headKeyWithoutSearchParams] = matchingHead;
        head = /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
            headCacheNode: headCacheNode
        }, typeof window === 'undefined' ? headKeyWithoutSearchParams : headKey);
    } else {
        head = null;
    }
    let content = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
        children: [
            head,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_boundarycomponents.RootLayoutBoundary, {
                children: cache.rsc
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuterannouncer.AppRouterAnnouncer, {
                tree: tree
            })
        ]
    });
    if ("TURBOPACK compile-time truthy", 1) {
        // In development, we apply few error boundaries and hot-reloader:
        // - DevRootHTTPAccessFallbackBoundary: avoid using navigation API like notFound() in root layout
        // - HotReloader:
        //  - hot-reload the app when the code changes
        //  - render dev overlay
        //  - catch runtime errors and display global-error when necessary
        if (typeof window !== 'undefined') {
            const { DevRootHTTPAccessFallbackBoundary } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)");
            content = /*#__PURE__*/ (0, _jsxruntime.jsx)(DevRootHTTPAccessFallbackBoundary, {
                children: content
            });
        }
        const HotReloader = (()=>{
            const e = new Error("Cannot find module '../dev/hot-reloader/app/hot-reloader-app'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })().default;
        content = /*#__PURE__*/ (0, _jsxruntime.jsx)(HotReloader, {
            assetPrefix: assetPrefix,
            globalError: globalError,
            children: content
        });
    } else //TURBOPACK unreachable
    ;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(HistoryUpdater, {
                appRouterState: state
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(RuntimeStyles, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                value: pathParams,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
                    value: pathname,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                        value: searchParams,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.GlobalLayoutRouterContext.Provider, {
                            value: globalLayoutRouterContext,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
                                value: _approuterinstance.publicAppRouterInstance,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
                                    value: layoutRouterContext,
                                    children: content
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
function AppRouter(param) {
    let { actionQueue, globalErrorState, assetPrefix } = param;
    (0, _navfailurehandler.useNavFailureHandler)();
    const router = /*#__PURE__*/ (0, _jsxruntime.jsx)(Router, {
        actionQueue: actionQueue,
        assetPrefix: assetPrefix,
        globalError: globalErrorState
    });
    // At the very top level, use the default GlobalError component as the final fallback.
    // When the app router itself fails, which means the framework itself fails, we show the default error.
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_rooterrorboundary.default, {
        errorComponent: _globalerror.default,
        children: router
    });
}
const runtimeStyles = new Set();
let runtimeStyleChanged = new Set();
globalThis._N_E_STYLE_LOAD = function(href) {
    let len = runtimeStyles.size;
    runtimeStyles.add(href);
    if (runtimeStyles.size !== len) {
        runtimeStyleChanged.forEach((cb)=>cb());
    }
    // TODO figure out how to get a promise here
    // But maybe it's not necessary as react would block rendering until it's loaded
    return Promise.resolve();
};
function RuntimeStyles() {
    const [, forceUpdate] = _react.default.useState(0);
    const renderedStylesSize = runtimeStyles.size;
    (0, _react.useEffect)(()=>{
        const changed = ()=>forceUpdate((c)=>c + 1);
        runtimeStyleChanged.add(changed);
        if (renderedStylesSize !== runtimeStyles.size) {
            changed();
        }
        return ()=>{
            runtimeStyleChanged.delete(changed);
        };
    }, [
        renderedStylesSize,
        forceUpdate
    ]);
    const dplId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : '';
    return [
        ...runtimeStyles
    ].map((href, i)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "stylesheet",
            href: "" + href + dplId,
            // @ts-ignore
            precedence: "next"
        }, i));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createMutableActionQueue: null,
    dispatchNavigateAction: null,
    dispatchTraverseAction: null,
    getCurrentAppRouterState: null,
    publicAppRouterInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createMutableActionQueue: function() {
        return createMutableActionQueue;
    },
    dispatchNavigateAction: function() {
        return dispatchNavigateAction;
    },
    dispatchTraverseAction: function() {
        return dispatchTraverseAction;
    },
    getCurrentAppRouterState: function() {
        return getCurrentAppRouterState;
    },
    publicAppRouterInstance: function() {
        return publicAppRouterInstance;
    }
});
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _routerreducer = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _isthenable = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/is-thenable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _segmentcache = (()=>{
    const e = new Error("Cannot find module './segment-cache'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _useactionqueue = (()=>{
    const e = new Error("Cannot find module './use-action-queue'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _addbasepath = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _prefetchreducer = (()=>{
    const e = new Error("Cannot find module './router-reducer/reducers/prefetch-reducer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _links = (()=>{
    const e = new Error("Cannot find module './links'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function runRemainingActions(actionQueue, setState) {
    if (actionQueue.pending !== null) {
        actionQueue.pending = actionQueue.pending.next;
        if (actionQueue.pending !== null) {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            runAction({
                actionQueue,
                action: actionQueue.pending,
                setState
            });
        } else {
            // No more actions are pending, check if a refresh is needed
            if (actionQueue.needsRefresh) {
                actionQueue.needsRefresh = false;
                actionQueue.dispatch({
                    type: _routerreducertypes.ACTION_REFRESH,
                    origin: window.location.origin
                }, setState);
            }
        }
    }
}
async function runAction(param) {
    let { actionQueue, action, setState } = param;
    const prevState = actionQueue.state;
    actionQueue.pending = action;
    const payload = action.payload;
    const actionResult = actionQueue.action(prevState, payload);
    function handleResult(nextState) {
        // if we discarded this action, the state should also be discarded
        if (action.discarded) {
            return;
        }
        actionQueue.state = nextState;
        runRemainingActions(actionQueue, setState);
        action.resolve(nextState);
    }
    // if the action is a promise, set up a callback to resolve it
    if ((0, _isthenable.isThenable)(actionResult)) {
        actionResult.then(handleResult, (err)=>{
            runRemainingActions(actionQueue, setState);
            action.reject(err);
        });
    } else {
        handleResult(actionResult);
    }
}
function dispatchAction(actionQueue, payload, setState) {
    let resolvers = {
        resolve: setState,
        reject: ()=>{}
    };
    // most of the action types are async with the exception of restore
    // it's important that restore is handled quickly since it's fired on the popstate event
    // and we don't want to add any delay on a back/forward nav
    // this only creates a promise for the async actions
    if (payload.type !== _routerreducertypes.ACTION_RESTORE) {
        // Create the promise and assign the resolvers to the object.
        const deferredPromise = new Promise((resolve, reject)=>{
            resolvers = {
                resolve,
                reject
            };
        });
        (0, _react.startTransition)(()=>{
            // we immediately notify React of the pending promise -- the resolver is attached to the action node
            // and will be called when the associated action promise resolves
            setState(deferredPromise);
        });
    }
    const newAction = {
        payload,
        next: null,
        resolve: resolvers.resolve,
        reject: resolvers.reject
    };
    // Check if the queue is empty
    if (actionQueue.pending === null) {
        // The queue is empty, so add the action and start it immediately
        // Mark this action as the last in the queue
        actionQueue.last = newAction;
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else if (payload.type === _routerreducertypes.ACTION_NAVIGATE || payload.type === _routerreducertypes.ACTION_RESTORE) {
        // Navigations (including back/forward) take priority over any pending actions.
        // Mark the pending action as discarded (so the state is never applied) and start the navigation action immediately.
        actionQueue.pending.discarded = true;
        // The rest of the current queue should still execute after this navigation.
        // (Note that it can't contain any earlier navigations, because we always put those into `actionQueue.pending` by calling `runAction`)
        newAction.next = actionQueue.pending.next;
        // if the pending action was a server action, mark the queue as needing a refresh once events are processed
        if (actionQueue.pending.payload.type === _routerreducertypes.ACTION_SERVER_ACTION) {
            actionQueue.needsRefresh = true;
        }
        runAction({
            actionQueue,
            action: newAction,
            setState
        });
    } else {
        // The queue is not empty, so add the action to the end of the queue
        // It will be started by runRemainingActions after the previous action finishes
        if (actionQueue.last !== null) {
            actionQueue.last.next = newAction;
        }
        actionQueue.last = newAction;
    }
}
let globalActionQueue = null;
function createMutableActionQueue(initialState, instrumentationHooks) {
    const actionQueue = {
        state: initialState,
        dispatch: (payload, setState)=>dispatchAction(actionQueue, payload, setState),
        action: async (state, action)=>{
            const result = (0, _routerreducer.reducer)(state, action);
            return result;
        },
        pending: null,
        last: null,
        onRouterTransitionStart: instrumentationHooks !== null && typeof instrumentationHooks.onRouterTransitionStart === 'function' ? instrumentationHooks.onRouterTransitionStart : null
    };
    if (typeof window !== 'undefined') {
        // The action queue is lazily created on hydration, but after that point
        // it doesn't change. So we can store it in a global rather than pass
        // it around everywhere via props/context.
        if (globalActionQueue !== null) {
            throw Object.defineProperty(new Error('Internal Next.js Error: createMutableActionQueue was called more ' + 'than once'), "__NEXT_ERROR_CODE", {
                value: "E624",
                enumerable: false,
                configurable: true
            });
        }
        globalActionQueue = actionQueue;
    }
    return actionQueue;
}
function getCurrentAppRouterState() {
    return globalActionQueue !== null ? globalActionQueue.state : null;
}
function getAppRouterActionQueue() {
    if (globalActionQueue === null) {
        throw Object.defineProperty(new Error('Internal Next.js error: Router action dispatched before initialization.'), "__NEXT_ERROR_CODE", {
            value: "E668",
            enumerable: false,
            configurable: true
        });
    }
    return globalActionQueue;
}
function getProfilingHookForOnNavigationStart() {
    if (globalActionQueue !== null) {
        return globalActionQueue.onRouterTransitionStart;
    }
    return null;
}
function dispatchNavigateAction(href, navigateType, shouldScroll, linkInstanceRef) {
    // TODO: This stuff could just go into the reducer. Leaving as-is for now
    // since we're about to rewrite all the router reducer stuff anyway.
    const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    (0, _links.setLinkForCurrentNavigation)(linkInstanceRef);
    const onRouterTransitionStart = getProfilingHookForOnNavigationStart();
    if (onRouterTransitionStart !== null) {
        onRouterTransitionStart(href, navigateType);
    }
    (0, _useactionqueue.dispatchAppRouterAction)({
        type: _routerreducertypes.ACTION_NAVIGATE,
        url,
        isExternalUrl: (0, _approuter.isExternalURL)(url),
        locationSearch: location.search,
        shouldScroll,
        navigateType,
        allowAliasing: true
    });
}
function dispatchTraverseAction(href, tree) {
    const onRouterTransitionStart = getProfilingHookForOnNavigationStart();
    if (onRouterTransitionStart !== null) {
        onRouterTransitionStart(href, 'traverse');
    }
    (0, _useactionqueue.dispatchAppRouterAction)({
        type: _routerreducertypes.ACTION_RESTORE,
        url: new URL(href),
        tree
    });
}
const publicAppRouterInstance = {
    back: ()=>window.history.back(),
    forward: ()=>window.history.forward(),
    prefetch: ("TURBOPACK compile-time falsy", 0) ? // cache. So we don't need to dispatch an action.
    "TURBOPACK unreachable" : (href, options)=>{
        // Use the old prefetch implementation.
        const actionQueue = getAppRouterActionQueue();
        const url = (0, _approuter.createPrefetchURL)(href);
        if (url !== null) {
            var _options_kind;
            // The prefetch reducer doesn't actually update any state or
            // trigger a rerender. It just writes to a mutable cache. So we
            // shouldn't bother calling setState/dispatch; we can just re-run
            // the reducer directly using the current state.
            // TODO: Refactor this away from a "reducer" so it's
            // less confusing.
            (0, _prefetchreducer.prefetchReducer)(actionQueue.state, {
                type: _routerreducertypes.ACTION_PREFETCH,
                url,
                kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
            });
        }
    },
    replace: (href, options)=>{
        (0, _react.startTransition)(()=>{
            var _options_scroll;
            dispatchNavigateAction(href, 'replace', (_options_scroll = options == null ? void 0 : options.scroll) != null ? _options_scroll : true, null);
        });
    },
    push: (href, options)=>{
        (0, _react.startTransition)(()=>{
            var _options_scroll;
            dispatchNavigateAction(href, 'push', (_options_scroll = options == null ? void 0 : options.scroll) != null ? _options_scroll : true, null);
        });
    },
    refresh: ()=>{
        (0, _react.startTransition)(()=>{
            (0, _useactionqueue.dispatchAppRouterAction)({
                type: _routerreducertypes.ACTION_REFRESH,
                origin: window.location.origin
            });
        });
    },
    hmrRefresh: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            (0, _react.startTransition)(()=>{
                (0, _useactionqueue.dispatchAppRouterAction)({
                    type: _routerreducertypes.ACTION_HMR_REFRESH,
                    origin: window.location.origin
                });
            });
        }
    }
};
// Exists for debugging purposes. Don't use in application code.
if (typeof window !== 'undefined' && window.next) {
    window.next.router = publicAppRouterInstance;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-instance.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "fillLazyItemsTillLeafWithHead", {
    enumerable: true,
    get: function() {
        return fillLazyItemsTillLeafWithHead;
    }
});
const _createroutercachekey = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function fillLazyItemsTillLeafWithHead(navigatedAt, newCache, existingCache, routerState, cacheNodeSeedData, head, prefetchEntry) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of rsc.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segmentForParallelRoute);
        // TODO: We should traverse the cacheNodeSeedData tree instead of the router
        // state tree. Ideally, they would always be the same shape, but because of
        // the loading.js pattern, cacheNodeSeedData sometimes only represents a
        // partial tree. That's why this node is sometimes null. Once PPR lands,
        // loading.js will no longer have special behavior and we can traverse the
        // data tree instead.
        //
        // We should also consider merging the router state tree and the data tree
        // in the response format, so that we don't have to send the keys twice.
        // Then the client can convert them into separate representations.
        const parallelSeedData = cacheNodeSeedData !== null && cacheNodeSeedData[2][key] !== undefined ? cacheNodeSeedData[2][key] : null;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                const hasReusablePrefetch = (prefetchEntry == null ? void 0 : prefetchEntry.kind) === 'auto' && prefetchEntry.status === _routerreducertypes.PrefetchCacheEntryStatus.reusable;
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                const existingCacheNode = parallelRouteCacheNode.get(cacheKey);
                let newCacheNode;
                if (parallelSeedData !== null) {
                    // New data was sent from the server.
                    const seedNode = parallelSeedData[1];
                    const loading = parallelSeedData[3];
                    newCacheNode = {
                        lazyData: null,
                        rsc: seedNode,
                        // This is a PPR-only field. When PPR is enabled, we shouldn't hit
                        // this path during a navigation, but until PPR is fully implemented
                        // yet it's possible the existing node does have a non-null
                        // `prefetchRsc`. As an incremental step, we'll just de-opt to the
                        // old behavior — no PPR value.
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        loading,
                        parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes),
                        navigatedAt
                    };
                } else if (hasReusablePrefetch && existingCacheNode) {
                    // No new data was sent from the server, but the existing cache node
                    // was prefetched, so we should reuse that.
                    newCacheNode = {
                        lazyData: existingCacheNode.lazyData,
                        rsc: existingCacheNode.rsc,
                        // This is a PPR-only field. Unlike the previous branch, since we're
                        // just cloning the existing cache node, we might as well keep the
                        // PPR value, if it exists.
                        prefetchRsc: existingCacheNode.prefetchRsc,
                        head: existingCacheNode.head,
                        prefetchHead: existingCacheNode.prefetchHead,
                        parallelRoutes: new Map(existingCacheNode.parallelRoutes),
                        loading: existingCacheNode.loading
                    };
                } else {
                    // No data available for this node. This will trigger a lazy fetch
                    // during render.
                    newCacheNode = {
                        lazyData: null,
                        rsc: null,
                        prefetchRsc: null,
                        head: null,
                        prefetchHead: null,
                        parallelRoutes: new Map(existingCacheNode == null ? void 0 : existingCacheNode.parallelRoutes),
                        loading: null,
                        navigatedAt
                    };
                }
                // Overrides the cache key with the new cache node.
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                // Traverse deeper to apply the head / fill lazy items till the head.
                fillLazyItemsTillLeafWithHead(navigatedAt, newCacheNode, existingCacheNode, parallelRouteState, parallelSeedData ? parallelSeedData : null, head, prefetchEntry);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        let newCacheNode;
        if (parallelSeedData !== null) {
            // New data was sent from the server.
            const seedNode = parallelSeedData[1];
            const loading = parallelSeedData[3];
            newCacheNode = {
                lazyData: null,
                rsc: seedNode,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading,
                navigatedAt
            };
        } else {
            // No data available for this node. This will trigger a lazy fetch
            // during render.
            newCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt
            };
        }
        const existingParallelRoutes = newCache.parallelRoutes.get(key);
        if (existingParallelRoutes) {
            existingParallelRoutes.set(cacheKey, newCacheNode);
        } else {
            newCache.parallelRoutes.set(key, new Map([
                [
                    cacheKey,
                    newCacheNode
                ]
            ]));
        }
        fillLazyItemsTillLeafWithHead(navigatedAt, newCacheNode, undefined, parallelRouteState, parallelSeedData, head, prefetchEntry);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fill-lazy-items-till-leaf-with-head.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFlightDataPartsFromPath: null,
    getNextFlightSegmentPath: null,
    normalizeFlightData: null,
    prepareFlightRouterStateForRequest: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFlightDataPartsFromPath: function() {
        return getFlightDataPartsFromPath;
    },
    getNextFlightSegmentPath: function() {
        return getNextFlightSegmentPath;
    },
    normalizeFlightData: function() {
        return normalizeFlightData;
    },
    prepareFlightRouterStateForRequest: function() {
        return prepareFlightRouterStateForRequest;
    }
});
const _segment = (()=>{
    const e = new Error("Cannot find module '../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function getFlightDataPartsFromPath(flightDataPath) {
    // Pick the last 4 items from the `FlightDataPath` to get the [tree, seedData, viewport, isHeadPartial].
    const flightDataPathLength = 4;
    // tree, seedData, and head are *always* the last three items in the `FlightDataPath`.
    const [tree, seedData, head, isHeadPartial] = flightDataPath.slice(-flightDataPathLength);
    // The `FlightSegmentPath` is everything except the last three items. For a root render, it won't be present.
    const segmentPath = flightDataPath.slice(0, -flightDataPathLength);
    var _segmentPath_;
    return {
        // TODO: Unify these two segment path helpers. We are inconsistently pushing an empty segment ("")
        // to the start of the segment path in some places which makes it hard to use solely the segment path.
        // Look for "// TODO-APP: remove ''" in the codebase.
        pathToSegment: segmentPath.slice(0, -1),
        segmentPath,
        // if the `FlightDataPath` corresponds with the root, there'll be no segment path,
        // in which case we default to ''.
        segment: (_segmentPath_ = segmentPath[segmentPath.length - 1]) != null ? _segmentPath_ : '',
        tree,
        seedData,
        head,
        isHeadPartial,
        isRootRender: flightDataPath.length === flightDataPathLength
    };
}
function getNextFlightSegmentPath(flightSegmentPath) {
    // Since `FlightSegmentPath` is a repeated tuple of `Segment` and `ParallelRouteKey`, we slice off two items
    // to get the next segment path.
    return flightSegmentPath.slice(2);
}
function normalizeFlightData(flightData) {
    // FlightData can be a string when the server didn't respond with a proper flight response,
    // or when a redirect happens, to signal to the client that it needs to perform an MPA navigation.
    if (typeof flightData === 'string') {
        return flightData;
    }
    return flightData.map((flightDataPath)=>getFlightDataPartsFromPath(flightDataPath));
}
function prepareFlightRouterStateForRequest(flightRouterState, isHmrRefresh) {
    // HMR requests need the complete, unmodified state for proper functionality
    if (isHmrRefresh) {
        return encodeURIComponent(JSON.stringify(flightRouterState));
    }
    return encodeURIComponent(JSON.stringify(stripClientOnlyDataFromFlightRouterState(flightRouterState)));
}
/**
 * Recursively strips client-only data from FlightRouterState while preserving
 * server-needed information for proper rendering decisions.
 */ function stripClientOnlyDataFromFlightRouterState(flightRouterState) {
    const [segment, parallelRoutes, _url, refreshMarker, isRootLayout, hasLoadingBoundary] = flightRouterState;
    // __PAGE__ segments are always fetched from the server, so there's
    // no need to send them up
    const cleanedSegment = stripSearchParamsFromPageSegment(segment);
    // Recursively process parallel routes
    const cleanedParallelRoutes = {};
    for (const [key, childState] of Object.entries(parallelRoutes)){
        cleanedParallelRoutes[key] = stripClientOnlyDataFromFlightRouterState(childState);
    }
    const result = [
        cleanedSegment,
        cleanedParallelRoutes,
        null,
        shouldPreserveRefreshMarker(refreshMarker) ? refreshMarker : null
    ];
    // Append optional fields if present
    if (isRootLayout !== undefined) {
        result[4] = isRootLayout;
    }
    if (hasLoadingBoundary !== undefined) {
        result[5] = hasLoadingBoundary;
    }
    return result;
}
/**
 * Strips search parameters from __PAGE__ segments to prevent sensitive
 * client-side data from being sent to the server.
 */ function stripSearchParamsFromPageSegment(segment) {
    if (typeof segment === 'string' && segment.startsWith(_segment.PAGE_SEGMENT_KEY + '?')) {
        return _segment.PAGE_SEGMENT_KEY;
    }
    return segment;
}
/**
 * Determines whether the refresh marker should be sent to the server
 * Client-only markers like 'refresh' are stripped, while server-needed markers
 * like 'refetch' and 'inside-shared-layout' are preserved.
 */ function shouldPreserveRefreshMarker(refreshMarker) {
    return Boolean(refreshMarker && refreshMarker !== 'refresh');
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=flight-data-helpers.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createInitialRouterState", {
    enumerable: true,
    get: function() {
        return createInitialRouterState;
    }
});
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _filllazyitemstillleafwithhead = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/fill-lazy-items-till-leaf-with-head.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _prefetchcacheutils = (()=>{
    const e = new Error("Cannot find module './prefetch-cache-utils'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _refetchinactiveparallelsegments = (()=>{
    const e = new Error("Cannot find module './refetch-inactive-parallel-segments'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _flightdatahelpers = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
function createInitialRouterState(param) {
    let { navigatedAt, initialFlightData, initialCanonicalUrlParts, initialParallelRoutes, location, couldBeIntercepted, postponed, prerendered } = param;
    // When initialized on the server, the canonical URL is provided as an array of parts.
    // This is to ensure that when the RSC payload streamed to the client, crawlers don't interpret it
    // as a URL that should be crawled.
    const initialCanonicalUrl = initialCanonicalUrlParts.join('/');
    const normalizedFlightData = (0, _flightdatahelpers.getFlightDataPartsFromPath)(initialFlightData[0]);
    const { tree: initialTree, seedData: initialSeedData, head: initialHead } = normalizedFlightData;
    // For the SSR render, seed data should always be available (we only send back a `null` response
    // in the case of a `loading` segment, pre-PPR.)
    const rsc = initialSeedData == null ? void 0 : initialSeedData[1];
    var _initialSeedData_;
    const loading = (_initialSeedData_ = initialSeedData == null ? void 0 : initialSeedData[3]) != null ? _initialSeedData_ : null;
    const cache = {
        lazyData: null,
        rsc,
        prefetchRsc: null,
        head: null,
        prefetchHead: null,
        // The cache gets seeded during the first render. `initialParallelRoutes` ensures the cache from the first render is there during the second render.
        parallelRoutes: initialParallelRoutes,
        loading,
        navigatedAt
    };
    const canonicalUrl = // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
    location ? (0, _createhreffromurl.createHrefFromUrl)(location) : initialCanonicalUrl;
    (0, _refetchinactiveparallelsegments.addRefreshMarkerToActiveParallelSegments)(initialTree, canonicalUrl);
    const prefetchCache = new Map();
    // When the cache hasn't been seeded yet we fill the cache with the head.
    if (initialParallelRoutes === null || initialParallelRoutes.size === 0) {
        (0, _filllazyitemstillleafwithhead.fillLazyItemsTillLeafWithHead)(navigatedAt, cache, undefined, initialTree, initialSeedData, initialHead, undefined);
    }
    var _ref;
    const initialState = {
        tree: initialTree,
        cache,
        prefetchCache,
        pushRef: {
            pendingPush: false,
            mpaNavigation: false,
            // First render needs to preserve the previous window.history.state
            // to avoid it being overwritten on navigation back/forward with MPA Navigation.
            preserveCustomHistoryState: true
        },
        focusAndScrollRef: {
            apply: false,
            onlyHashChange: false,
            hashFragment: null,
            segmentPaths: []
        },
        canonicalUrl,
        nextUrl: (_ref = (0, _computechangedpath.extractPathFromFlightRouterState)(initialTree) || (location == null ? void 0 : location.pathname)) != null ? _ref : null
    };
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return initialState;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=create-initial-router-state.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This gets assigned as a side-effect during app initialization. Because it
// represents the build used to create the JS bundle, it should never change
// after being set, so we store it in a global variable.
//
// When performing RSC requests, if the incoming data has a different build ID,
// we perform an MPA navigation/refresh to load the updated build and ensure
// that the client and server in sync.
// Starts as an empty string. In practice, because setAppBuildId is called
// during initialization before hydration starts, this will always get
// reassigned to the actual build ID before it's ever needed by a navigation.
// If for some reasons it didn't, due to a bug or race condition, then on
// navigation the build comparision would fail and trigger an MPA navigation.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getAppBuildId: null,
    setAppBuildId: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getAppBuildId: function() {
        return getAppBuildId;
    },
    setAppBuildId: function() {
        return setAppBuildId;
    }
});
let globalBuildId = '';
function setAppBuildId(buildId) {
    globalBuildId = buildId;
}
function getAppBuildId() {
    return globalBuildId;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-build-id.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/client-entry.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RootLevelDevOverlayElement", {
    enumerable: true,
    get: function() {
        return RootLevelDevOverlayElement;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const _appdevoverlayerrorboundary = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
function RootLevelDevOverlayElement(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_appdevoverlayerrorboundary.AppDevOverlayErrorBoundary, {
        globalError: [
            _globalerror.default,
            null
        ],
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-entry.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "linkGc", {
    enumerable: true,
    get: function() {
        return linkGc;
    }
});
function linkGc() {
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        const callback = (mutationList)=>{
            for (const mutation of mutationList){
                if (mutation.type === 'childList') {
                    for (const node of mutation.addedNodes){
                        if ('tagName' in node && node.tagName === 'LINK') {
                            var _link_dataset_precedence;
                            const link = node;
                            if ((_link_dataset_precedence = link.dataset.precedence) == null ? void 0 : _link_dataset_precedence.startsWith('next')) {
                                const href = link.getAttribute('href');
                                if (href) {
                                    const [resource, version] = href.split('?v=', 2);
                                    if (version) {
                                        const currentOrigin = window.location.origin;
                                        const allLinks = [
                                            ...document.querySelectorAll('link[href^="' + resource + '"]'),
                                            // It's possible that the resource is a full URL or only pathname,
                                            // so we need to remove the alternative href as well.
                                            ...document.querySelectorAll('link[href^="' + (resource.startsWith(currentOrigin) ? resource.slice(currentOrigin.length) : currentOrigin + resource) + '"]')
                                        ];
                                        for (const otherLink of allLinks){
                                            var _otherLink_dataset_precedence;
                                            if ((_otherLink_dataset_precedence = otherLink.dataset.precedence) == null ? void 0 : _otherLink_dataset_precedence.startsWith('next')) {
                                                const otherHref = otherLink.getAttribute('href');
                                                if (otherHref) {
                                                    const [, otherVersion] = otherHref.split('?v=', 2);
                                                    if (!otherVersion || +otherVersion < +version) {
                                                        // Delay the removal of the stylesheet to avoid FOUC
                                                        // caused by `@font-face` rules, as they seem to be
                                                        // a couple of ticks delayed between the old and new
                                                        // styles being swapped even if the font is cached.
                                                        setTimeout(()=>{
                                                            otherLink.remove();
                                                        }, 5);
                                                        const preloadLink = document.querySelector('link[rel="preload"][as="style"][href="' + otherHref + '"]');
                                                        if (preloadLink) {
                                                            preloadLink.remove();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);
        observer.observe(document.head, {
            childList: true
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-link-gc.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hydrate", {
    enumerable: true,
    get: function() {
        return hydrate;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)");
const _client = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _client1 = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _onrecoverableerror = (()=>{
    const e = new Error("Cannot find module './react-client-callbacks/on-recoverable-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundarycallbacks = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/react-client-callbacks/error-boundary-callbacks.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _approuter = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)"));
const _createinitialrouterstate = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-initial-router-state.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
/// <reference types="react-dom/experimental" />
const createFromReadableStream = _client1.createFromReadableStream;
const appElement = document;
const encoder = new TextEncoder();
let initialServerDataBuffer = undefined;
let initialServerDataWriter = undefined;
let initialServerDataLoaded = false;
let initialServerDataFlushed = false;
let initialFormStateData = null;
function nextServerDataCallback(seg) {
    if (seg[0] === 0) {
        initialServerDataBuffer = [];
    } else if (seg[0] === 1) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false,
            configurable: true
        });
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(encoder.encode(seg[1]));
        } else {
            initialServerDataBuffer.push(seg[1]);
        }
    } else if (seg[0] === 2) {
        initialFormStateData = seg[1];
    } else if (seg[0] === 3) {
        if (!initialServerDataBuffer) throw Object.defineProperty(new Error('Unexpected server data: missing bootstrap script.'), "__NEXT_ERROR_CODE", {
            value: "E18",
            enumerable: false,
            configurable: true
        });
        // Decode the base64 string back to binary data.
        const binaryString = atob(seg[1]);
        const decodedChunk = new Uint8Array(binaryString.length);
        for(var i = 0; i < binaryString.length; i++){
            decodedChunk[i] = binaryString.charCodeAt(i);
        }
        if (initialServerDataWriter) {
            initialServerDataWriter.enqueue(decodedChunk);
        } else {
            initialServerDataBuffer.push(decodedChunk);
        }
    }
}
function isStreamErrorOrUnfinished(ctr) {
    // If `desiredSize` is null, it means the stream is closed or errored. If it is lower than 0, the stream is still unfinished.
    return ctr.desiredSize === null || ctr.desiredSize < 0;
}
// There might be race conditions between `nextServerDataRegisterWriter` and
// `DOMContentLoaded`. The former will be called when React starts to hydrate
// the root, the latter will be called when the DOM is fully loaded.
// For streaming, the former is called first due to partial hydration.
// For non-streaming, the latter can be called first.
// Hence, we use two variables `initialServerDataLoaded` and
// `initialServerDataFlushed` to make sure the writer will be closed and
// `initialServerDataBuffer` will be cleared in the right time.
function nextServerDataRegisterWriter(ctr) {
    if (initialServerDataBuffer) {
        initialServerDataBuffer.forEach((val)=>{
            ctr.enqueue(typeof val === 'string' ? encoder.encode(val) : val);
        });
        if (initialServerDataLoaded && !initialServerDataFlushed) {
            if (isStreamErrorOrUnfinished(ctr)) {
                ctr.error(Object.defineProperty(new Error('The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.'), "__NEXT_ERROR_CODE", {
                    value: "E117",
                    enumerable: false,
                    configurable: true
                }));
            } else {
                ctr.close();
            }
            initialServerDataFlushed = true;
            initialServerDataBuffer = undefined;
        }
    }
    initialServerDataWriter = ctr;
}
// When `DOMContentLoaded`, we can close all pending writers to finish hydration.
const DOMContentLoaded = function() {
    if (initialServerDataWriter && !initialServerDataFlushed) {
        initialServerDataWriter.close();
        initialServerDataFlushed = true;
        initialServerDataBuffer = undefined;
    }
    initialServerDataLoaded = true;
};
// It's possible that the DOM is already loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);
} else {
    // Delayed in marco task to ensure it's executed later than hydration
    setTimeout(DOMContentLoaded);
}
const nextServerDataLoadingGlobal = self.__next_f = self.__next_f || [];
nextServerDataLoadingGlobal.forEach(nextServerDataCallback);
nextServerDataLoadingGlobal.push = nextServerDataCallback;
const readable = new ReadableStream({
    start (controller) {
        nextServerDataRegisterWriter(controller);
    }
});
const initialServerResponse = createFromReadableStream(readable, {
    callServer: _appcallserver.callServer,
    findSourceMapURL: _appfindsourcemapurl.findSourceMapURL
});
function ServerRoot(param) {
    let { pendingActionQueue } = param;
    const initialRSCPayload = (0, _react.use)(initialServerResponse);
    const actionQueue = (0, _react.use)(pendingActionQueue);
    const router = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuter.default, {
        actionQueue: actionQueue,
        globalErrorState: initialRSCPayload.G,
        assetPrefix: initialRSCPayload.p
    });
    if (("TURBOPACK compile-time value", "development") === 'development' && initialRSCPayload.m) {
        // We provide missing slot information in a context provider only during development
        // as we log some additional information about the missing slots in the console.
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.MissingSlotContext, {
            value: initialRSCPayload.m,
            children: router
        });
    }
    return router;
}
const StrictModeIfEnabled = ("TURBOPACK compile-time truthy", 1) ? _react.default.StrictMode : "TURBOPACK unreachable";
function Root(param) {
    let { children } = param;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return children;
}
function onDefaultTransitionIndicator() {
    // TODO: Compose default with user-configureable (e.g. nprogress)
    // TODO: Use React's default once we figure out hanging indicators: https://codesandbox.io/p/sandbox/charming-moon-hktkp6?file=%2Fsrc%2Findex.js%3A106%2C30
    return ()=>{};
}
const reactRootOptions = {
    onDefaultTransitionIndicator: onDefaultTransitionIndicator,
    onRecoverableError: _onrecoverableerror.onRecoverableError,
    onCaughtError: _errorboundarycallbacks.onCaughtError,
    onUncaughtError: _errorboundarycallbacks.onUncaughtError
};
function hydrate(instrumentationHooks) {
    // React overrides `.then` and doesn't return a new promise chain,
    // so we wrap the action queue in a promise to ensure that its value
    // is defined when the promise resolves.
    // https://github.com/facebook/react/blob/163365a07872337e04826c4f501565d43dbd2fd4/packages/react-client/src/ReactFlightClient.js#L189-L190
    const pendingActionQueue = new Promise((resolve, reject)=>{
        initialServerResponse.then((initialRSCPayload)=>{
            // setAppBuildId should be called only once, during JS initialization
            // and before any components have hydrated.
            (0, _appbuildid.setAppBuildId)(initialRSCPayload.b);
            const initialTimestamp = Date.now();
            resolve((0, _approuterinstance.createMutableActionQueue)((0, _createinitialrouterstate.createInitialRouterState)({
                navigatedAt: initialTimestamp,
                initialFlightData: initialRSCPayload.f,
                initialCanonicalUrlParts: initialRSCPayload.c,
                initialParallelRoutes: new Map(),
                location: window.location,
                couldBeIntercepted: initialRSCPayload.i,
                postponed: initialRSCPayload.s,
                prerendered: initialRSCPayload.S
            }), instrumentationHooks));
        }, (err)=>reject(err));
    });
    const reactEl = /*#__PURE__*/ (0, _jsxruntime.jsx)(StrictModeIfEnabled, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
            value: {
                appDir: true
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ServerRoot, {
                    pendingActionQueue: pendingActionQueue
                })
            })
        })
    });
    if (document.documentElement.id === '__next_error__') {
        let element = reactEl;
        // Server rendering failed, fall back to client-side rendering
        if ("TURBOPACK compile-time truthy", 1) {
            const { RootLevelDevOverlayElement } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/client-entry.js [app-client] (ecmascript)");
            // Note this won't cause hydration mismatch because we are doing CSR w/o hydration
            element = /*#__PURE__*/ (0, _jsxruntime.jsx)(RootLevelDevOverlayElement, {
                children: element
            });
        }
        _client.default.createRoot(appElement, reactRootOptions).render(element);
    } else {
        _react.default.startTransition(()=>{
            _client.default.hydrateRoot(appElement, reactEl, {
                ...reactRootOptions,
                formState: initialFormStateData
            });
        });
    }
    // TODO-APP: Remove this logic when Float has GC built-in in development.
    if ("TURBOPACK compile-time truthy", 1) {
        const { linkGc } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-link-gc.js [app-client] (ecmascript)");
        linkGc();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-index.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-next-turbopack.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _appbootstrap = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-bootstrap.js [app-client] (ecmascript)");
const _onrecoverableerror = (()=>{
    const e = new Error("Cannot find module './react-client-callbacks/on-recoverable-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
window.next.turbopack = true;
self.__webpack_hash__ = '';
// eslint-disable-next-line @next/internal/typechecked-require
const instrumentationHooks = (()=>{
    const e = new Error("Cannot find module '../lib/require-instrumentation-client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(0, _appbootstrap.appBootstrap)(()=>{
    const { hydrate } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-index.js [app-client] (ecmascript)");
    try {
        hydrate(instrumentationHooks);
    } finally{
        if ("TURBOPACK compile-time truthy", 1) {
            const { getOwnerStack } = (()=>{
                const e = new Error("Cannot find module '../next-devtools/userspace/app/errors/stitched-error'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            const { renderAppDevOverlay } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/next-devtools/index.js [app-client] (ecmascript)");
            renderAppDevOverlay(getOwnerStack, _onrecoverableerror.isRecoverableError);
        }
    }
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-next-turbopack.js.map
}),
]);

//# sourceMappingURL=85a19_next_dist_b9260e59._.js.map