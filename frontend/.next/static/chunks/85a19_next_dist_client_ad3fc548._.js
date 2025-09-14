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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This module can be shared between both pages router and app router
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRecoverableError: null,
    onRecoverableError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRecoverableError: function() {
        return isRecoverableError;
    },
    onRecoverableError: function() {
        return onRecoverableError;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
const _reportglobalerror = (()=>{
    const e = new Error("Cannot find module './report-global-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const recoverableErrors = new WeakSet();
function isRecoverableError(error) {
    return recoverableErrors.has(error);
}
const onRecoverableError = (error)=>{
    // x-ref: https://github.com/facebook/react/pull/28736
    let cause = (0, _iserror.default)(error) && 'cause' in error ? error.cause : error;
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(cause)) return;
    if ("TURBOPACK compile-time truthy", 1) {
        const { decorateDevError } = (()=>{
            const e = new Error("Cannot find module '../../next-devtools/userspace/app/errors/stitched-error'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const causeError = decorateDevError(cause);
        recoverableErrors.add(causeError);
        cause = causeError;
    }
    (0, _reportglobalerror.reportGlobalError)(cause);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-recoverable-error.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _redirecterror = (()=>{
    const e = new Error("Cannot find module './redirect-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/lib/console.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatConsoleArgs: null,
    parseConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatConsoleArgs: function() {
        return formatConsoleArgs;
    },
    parseConsoleArgs: function() {
        return parseConsoleArgs;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
function formatObject(arg, depth) {
    switch(typeof arg){
        case 'object':
            if (arg === null) {
                return 'null';
            } else if (Array.isArray(arg)) {
                let result = '[';
                if (depth < 1) {
                    for(let i = 0; i < arg.length; i++){
                        if (result !== '[') {
                            result += ',';
                        }
                        if (Object.prototype.hasOwnProperty.call(arg, i)) {
                            result += formatObject(arg[i], depth + 1);
                        }
                    }
                } else {
                    result += arg.length > 0 ? '...' : '';
                }
                result += ']';
                return result;
            } else if (arg instanceof Error) {
                return arg + '';
            } else {
                const keys = Object.keys(arg);
                let result = '{';
                if (depth < 1) {
                    for(let i = 0; i < keys.length; i++){
                        const key = keys[i];
                        const desc = Object.getOwnPropertyDescriptor(arg, 'key');
                        if (desc && !desc.get && !desc.set) {
                            const jsonKey = JSON.stringify(key);
                            if (jsonKey !== '"' + key + '"') {
                                result += jsonKey + ': ';
                            } else {
                                result += key + ': ';
                            }
                            result += formatObject(desc.value, depth + 1);
                        }
                    }
                } else {
                    result += keys.length > 0 ? '...' : '';
                }
                result += '}';
                return result;
            }
        case 'string':
            return JSON.stringify(arg);
        case 'number':
        case 'bigint':
        case 'boolean':
        case 'symbol':
        case 'undefined':
        case 'function':
        default:
            return String(arg);
    }
}
function formatConsoleArgs(args) {
    let message;
    let idx;
    if (typeof args[0] === 'string') {
        message = args[0];
        idx = 1;
    } else {
        message = '';
        idx = 0;
    }
    let result = '';
    let startQuote = false;
    for(let i = 0; i < message.length; ++i){
        const char = message[i];
        if (char !== '%' || i === message.length - 1 || idx >= args.length) {
            result += char;
            continue;
        }
        const code = message[++i];
        switch(code){
            case 'c':
                {
                    // TODO: We should colorize with HTML instead of turning into a string.
                    // Ignore for now.
                    result = startQuote ? "" + result + "]" : "[" + result;
                    startQuote = !startQuote;
                    idx++;
                    break;
                }
            case 'O':
            case 'o':
                {
                    result += formatObject(args[idx++], 0);
                    break;
                }
            case 'd':
            case 'i':
                {
                    result += parseInt(args[idx++], 10);
                    break;
                }
            case 'f':
                {
                    result += parseFloat(args[idx++]);
                    break;
                }
            case 's':
                {
                    result += String(args[idx++]);
                    break;
                }
            default:
                result += '%' + code;
        }
    }
    for(; idx < args.length; idx++){
        result += (idx > 0 ? ' ' : '') + formatObject(args[idx], 0);
    }
    return result;
}
function parseConsoleArgs(args) {
    // See
    // https://github.com/facebook/react/blob/65a56d0e99261481c721334a3ec4561d173594cd/packages/react-devtools-shared/src/backend/flight/renderer.js#L88-L93
    //
    // Logs replayed from the server look like this:
    // [
    //   "%c%s%c%o\n\n%s\n\n%s\n",
    //   "background: #e6e6e6; ...",
    //   " Server ", // can also be e.g. " Prerender "
    //   "",
    //   Error,
    //   "The above error occurred in the <Page> component.",
    //   ...
    // ]
    if (args.length > 3 && typeof args[0] === 'string' && args[0].startsWith('%c%s%c') && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string') {
        const environmentName = args[2];
        const maybeError = args[4];
        return {
            environmentName: environmentName.trim(),
            error: (0, _iserror.default)(maybeError) ? maybeError : null
        };
    }
    return {
        environmentName: null,
        error: null
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// imports polyfill from `@next/polyfill-module` after build.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/build/polyfills/polyfill-module.js [app-client] (ecmascript)");
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useUntrackedPathname", {
    enumerable: true,
    get: function() {
        return useUntrackedPathname;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
/**
 * This checks to see if the current render has any unknown route parameters.
 * It's used to trigger a different render path in the error boundary.
 *
 * @returns true if there are any unknown route parameters, false otherwise
 */ function hasFallbackRouteParams() {
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { workUnitAsyncStorage } = (()=>{
            const e = new Error("Cannot find module '../../server/app-render/work-unit-async-storage.external'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const workUnitStore = workUnitAsyncStorage.getStore();
        if (!workUnitStore) return false;
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-client':
            case 'prerender-ppr':
                const fallbackParams = workUnitStore.fallbackRouteParams;
                return fallbackParams ? fallbackParams.size > 0 : false;
            case 'prerender-legacy':
            case 'request':
            case 'prerender-runtime':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
        return false;
    }
    return false;
}
function useUntrackedPathname() {
    // If there are any unknown route parameters we would typically throw
    // an error, but this internal method allows us to return a null value instead
    // for components that do not propagate the pathname to the static shell (like
    // the error boundary).
    if (hasFallbackRouteParams()) {
        return null;
    }
    // This shouldn't cause any issues related to conditional rendering because
    // the environment will be consistent for the render.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation-untracked.js.map
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleHardNavError: null,
    useNavFailureHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleHardNavError: function() {
        return handleHardNavError;
    },
    useNavFailureHandler: function() {
        return useNavFailureHandler;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function handleHardNavError(error) {
    if (error && typeof window !== 'undefined' && window.next.__pendingUrl && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== (0, _createhreffromurl.createHrefFromUrl)(window.next.__pendingUrl)) {
        console.error("Error occurred during navigation, falling back to hard navigation", error);
        window.location.href = window.next.__pendingUrl.toString();
        return true;
    }
    return false;
}
function useNavFailureHandler() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nav-failure-handler.js.map
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
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _navfailurehandler = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
const _handleisrerror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/handle-isr-error.js [app-client] (ecmascript)");
const _isbot = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
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
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
const _isnextroutererror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _reportglobalerror = (()=>{
    const e = new Error("Cannot find module './report-global-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundary = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _globalerror = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-client] (ecmascript)"));
const devToolErrorMod = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/errors/index.js [app-client] (ecmascript)") : "TURBOPACK unreachable";
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
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = (()=>{
    const e = new Error("Cannot find module '../shared/lib/router/utils/remove-trailing-slash'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _parsepath = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/parse-path.js [app-client] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || ("TURBOPACK compile-time value", void 0)) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
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
const _normalizetrailingslash = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/normalize-trailing-slash.js [app-client] (ecmascript)");
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
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
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
const _pathhasprefix = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [app-client] (ecmascript)");
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "matchSegment", {
    enumerable: true,
    get: function() {
        return matchSegment;
    }
});
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map
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
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
const _segment = (()=>{
    const e = new Error("Cannot find module '../../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _matchsegments = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    IDLE_LINK_STATUS: null,
    PENDING_LINK_STATUS: null,
    mountFormInstance: null,
    mountLinkInstance: null,
    onLinkVisibilityChanged: null,
    onNavigationIntent: null,
    pingVisibleLinks: null,
    setLinkForCurrentNavigation: null,
    unmountLinkForCurrentNavigation: null,
    unmountPrefetchableInstance: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    IDLE_LINK_STATUS: function() {
        return IDLE_LINK_STATUS;
    },
    PENDING_LINK_STATUS: function() {
        return PENDING_LINK_STATUS;
    },
    mountFormInstance: function() {
        return mountFormInstance;
    },
    mountLinkInstance: function() {
        return mountLinkInstance;
    },
    onLinkVisibilityChanged: function() {
        return onLinkVisibilityChanged;
    },
    onNavigationIntent: function() {
        return onNavigationIntent;
    },
    pingVisibleLinks: function() {
        return pingVisibleLinks;
    },
    setLinkForCurrentNavigation: function() {
        return setLinkForCurrentNavigation;
    },
    unmountLinkForCurrentNavigation: function() {
        return unmountLinkForCurrentNavigation;
    },
    unmountPrefetchableInstance: function() {
        return unmountPrefetchableInstance;
    }
});
const _approuterinstance = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _approuter = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _segmentcache = (()=>{
    const e = new Error("Cannot find module './segment-cache'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _invarianterror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
// Tracks the most recently navigated link instance. When null, indicates
// the current navigation was not initiated by a link click.
let linkForMostRecentNavigation = null;
const PENDING_LINK_STATUS = {
    pending: true
};
const IDLE_LINK_STATUS = {
    pending: false
};
function setLinkForCurrentNavigation(link) {
    (0, _react.startTransition)(()=>{
        linkForMostRecentNavigation == null ? void 0 : linkForMostRecentNavigation.setOptimisticLinkStatus(IDLE_LINK_STATUS);
        link == null ? void 0 : link.setOptimisticLinkStatus(PENDING_LINK_STATUS);
        linkForMostRecentNavigation = link;
    });
}
function unmountLinkForCurrentNavigation(link) {
    if (linkForMostRecentNavigation === link) {
        linkForMostRecentNavigation = null;
    }
}
// Use a WeakMap to associate a Link instance with its DOM element. This is
// used by the IntersectionObserver to track the link's visibility.
const prefetchable = typeof WeakMap === 'function' ? new WeakMap() : new Map();
// A Set of the currently visible links. We re-prefetch visible links after a
// cache invalidation, or when the current URL changes. It's a separate data
// structure from the WeakMap above because only the visible links need to
// be enumerated.
const prefetchableAndVisible = new Set();
// A single IntersectionObserver instance shared by all <Link> components.
const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver(handleIntersect, {
    rootMargin: '200px'
}) : null;
function observeVisibility(element, instance) {
    const existingInstance = prefetchable.get(element);
    if (existingInstance !== undefined) {
        // This shouldn't happen because each <Link> component should have its own
        // anchor tag instance, but it's defensive coding to avoid a memory leak in
        // case there's a logical error somewhere else.
        unmountPrefetchableInstance(element);
    }
    // Only track prefetchable links that have a valid prefetch URL
    prefetchable.set(element, instance);
    if (observer !== null) {
        observer.observe(element);
    }
}
function coercePrefetchableUrl(href) {
    try {
        return (0, _approuter.createPrefetchURL)(href);
    } catch (e) {
        // createPrefetchURL sometimes throws an error if an invalid URL is
        // provided, though I'm not sure if it's actually necessary.
        // TODO: Consider removing the throw from the inner function, or change it
        // to reportError. Or maybe the error isn't even necessary for automatic
        // prefetches, just navigations.
        const reportErrorFn = typeof reportError === 'function' ? reportError : console.error;
        reportErrorFn("Cannot prefetch '" + href + "' because it cannot be converted to a URL.");
        return null;
    }
}
function mountLinkInstance(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus) {
    if (prefetchEnabled) {
        const prefetchURL = coercePrefetchableUrl(href);
        if (prefetchURL !== null) {
            const instance = {
                router,
                fetchStrategy,
                isVisible: false,
                prefetchTask: null,
                prefetchHref: prefetchURL.href,
                setOptimisticLinkStatus
            };
            // We only observe the link's visibility if it's prefetchable. For
            // example, this excludes links to external URLs.
            observeVisibility(element, instance);
            return instance;
        }
    }
    // If the link is not prefetchable, we still create an instance so we can
    // track its optimistic state (i.e. useLinkStatus).
    const instance = {
        router,
        fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: null,
        setOptimisticLinkStatus
    };
    return instance;
}
function mountFormInstance(element, href, router, fetchStrategy) {
    const prefetchURL = coercePrefetchableUrl(href);
    if (prefetchURL === null) {
        // This href is not prefetchable, so we don't track it.
        // TODO: We currently observe/unobserve a form every time its href changes.
        // For Links, this isn't a big deal because the href doesn't usually change,
        // but for forms it's extremely common. We should optimize this.
        return;
    }
    const instance = {
        router,
        fetchStrategy,
        isVisible: false,
        prefetchTask: null,
        prefetchHref: prefetchURL.href,
        setOptimisticLinkStatus: null
    };
    observeVisibility(element, instance);
}
function unmountPrefetchableInstance(element) {
    const instance = prefetchable.get(element);
    if (instance !== undefined) {
        prefetchable.delete(element);
        prefetchableAndVisible.delete(instance);
        const prefetchTask = instance.prefetchTask;
        if (prefetchTask !== null) {
            (0, _segmentcache.cancelPrefetchTask)(prefetchTask);
        }
    }
    if (observer !== null) {
        observer.unobserve(element);
    }
}
function handleIntersect(entries) {
    for (const entry of entries){
        // Some extremely old browsers or polyfills don't reliably support
        // isIntersecting so we check intersectionRatio instead. (Do we care? Not
        // really. But whatever this is fine.)
        const isVisible = entry.intersectionRatio > 0;
        onLinkVisibilityChanged(entry.target, isVisible);
    }
}
function onLinkVisibilityChanged(element, isVisible) {
    if ("TURBOPACK compile-time truthy", 1) {
        // Prefetching on viewport is disabled in development for performance
        // reasons, because it requires compiling the target page.
        // TODO: Investigate re-enabling this.
        return;
    }
    //TURBOPACK unreachable
    ;
    const instance = undefined;
}
function onNavigationIntent(element, unstable_upgradeToDynamicPrefetch) {
    const instance = prefetchable.get(element);
    if (instance === undefined) {
        return;
    }
    // Prefetch the link on hover/touchstart.
    if (instance !== undefined) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        rescheduleLinkPrefetch(instance, _segmentcache.PrefetchPriority.Intent);
    }
}
function rescheduleLinkPrefetch(instance, priority) {
    const existingPrefetchTask = instance.prefetchTask;
    if (!instance.isVisible) {
        // Cancel any in-progress prefetch task. (If it already finished then this
        // is a no-op.)
        if (existingPrefetchTask !== null) {
            (0, _segmentcache.cancelPrefetchTask)(existingPrefetchTask);
        }
        // We don't need to reset the prefetchTask to null upon cancellation; an
        // old task object can be rescheduled with reschedulePrefetchTask. This is a
        // micro-optimization but also makes the code simpler (don't need to
        // worry about whether an old task object is stale).
        return;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        // The old prefetch implementation does not have different priority levels.
        // Just schedule a new prefetch task.
        prefetchWithOldCacheImplementation(instance);
        return;
    }
    //TURBOPACK unreachable
    ;
    const appRouterState = undefined;
}
function pingVisibleLinks(nextUrl, tree) {
    // For each currently visible link, cancel the existing prefetch task (if it
    // exists) and schedule a new one. This is effectively the same as if all the
    // visible links left and then re-entered the viewport.
    //
    // This is called when the Next-Url or the base tree changes, since those
    // may affect the result of a prefetch task. It's also called after a
    // cache invalidation.
    for (const instance of prefetchableAndVisible){
        const task = instance.prefetchTask;
        if (task !== null && !(0, _segmentcache.isPrefetchTaskDirty)(task, nextUrl, tree)) {
            continue;
        }
        // Something changed. Cancel the existing prefetch task and schedule a
        // new one.
        if (task !== null) {
            (0, _segmentcache.cancelPrefetchTask)(task);
        }
        const cacheKey = (0, _segmentcache.createCacheKey)(instance.prefetchHref, nextUrl);
        instance.prefetchTask = (0, _segmentcache.schedulePrefetchTask)(cacheKey, tree, instance.fetchStrategy, _segmentcache.PrefetchPriority.Default, null);
    }
}
function prefetchWithOldCacheImplementation(instance) {
    // This is the path used when the Segment Cache is not enabled.
    if (typeof window === 'undefined') {
        return;
    }
    const doPrefetch = async ()=>{
        // note that `appRouter.prefetch()` is currently sync,
        // so we have to wrap this call in an async function to be able to catch() errors below.
        let prefetchKind;
        switch(instance.fetchStrategy){
            case _segmentcache.FetchStrategy.PPR:
                {
                    prefetchKind = _routerreducertypes.PrefetchKind.AUTO;
                    break;
                }
            case _segmentcache.FetchStrategy.Full:
                {
                    prefetchKind = _routerreducertypes.PrefetchKind.FULL;
                    break;
                }
            case _segmentcache.FetchStrategy.PPRRuntime:
                {
                    // We can only get here if Client Segment Cache is off, and in that case
                    // it shouldn't be possible for a link to request a runtime prefetch.
                    throw Object.defineProperty(new _invarianterror.InvariantError('FetchStrategy.PPRRuntime should never be used when `experimental.clientSegmentCache` is disabled'), "__NEXT_ERROR_CODE", {
                        value: "E772",
                        enumerable: false,
                        configurable: true
                    });
                }
            default:
                {
                    instance.fetchStrategy;
                    // Unreachable, but otherwise typescript will consider the variable unassigned
                    prefetchKind = undefined;
                }
        }
        return instance.router.prefetch(instance.prefetchHref, {
            kind: prefetchKind
        });
    };
    // Prefetch the page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    doPrefetch().catch((err)=>{
        if (("TURBOPACK compile-time value", "development") !== 'production') {
            // rethrow to show invalid URL errors
            throw err;
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=links.js.map
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
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _httpaccessfallback = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
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
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSegmentValue", {
    enumerable: true,
    get: function() {
        return getSegmentValue;
    }
});
function getSegmentValue(segment) {
    return Array.isArray(segment) ? segment[1] : segment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-segment-value.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
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
const _notfound = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)");
const _unauthorized = (()=>{
    const e = new Error("Cannot find module './unauthorized'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _unstablerethrow = (()=>{
    const e = new Error("Cannot find module './unstable-rethrow'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _workasyncstorageexternal = (()=>{
    const e = new Error("Cannot find module '../../server/app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _workunitasyncstorageexternal = (()=>{
    const e = new Error("Cannot find module '../../server/app-render/work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function bailoutToClientRendering(reason) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore == null ? void 0 : workStore.forceStatic) return;
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender':
            case 'prerender-runtime':
            case 'prerender-client':
            case 'prerender-ppr':
            case 'prerender-legacy':
                throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
                    value: "E394",
                    enumerable: false,
                    configurable: true
                });
            case 'request':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return _unrecognizedactionerror.unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _getsegmentvalue = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-client] (ecmascript)");
const _segment = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/segment'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _navigationreactserver = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)");
const _serverinsertedhtmlsharedruntime = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/server-inserted-html.shared-runtime'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _unrecognizedactionerror = (()=>{
    const e = new Error("Cannot find module './unrecognized-action-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const useDynamicRouteParams = typeof window === 'undefined' ? __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)").useDynamicRouteParams : undefined;
function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-client] (ecmascript)");
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering('useSearchParams()');
    }
    return readonlySearchParams;
}
function usePathname() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false,
            configurable: true
        });
    }
    return router;
}
function useParams() {
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_ACTION_NOT_FOUND_HEADER: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HASH_COOKIE: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_REWRITTEN_PATH_HEADER: null,
    NEXT_REWRITTEN_QUERY_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
    },
    NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'rsc';
const ACTION_HEADER = 'next-action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'next-router-state-tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'next-router-prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'next-router-segment-prefetch';
const NEXT_HMR_REFRESH_HEADER = 'next-hmr-refresh';
const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
const NEXT_URL = 'next-url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
const NEXT_ACTION_NOT_FOUND_HEADER = 'x-nextjs-action-not-found';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/// <reference types="webpack/module.d.ts" />
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    waitForWebpackRuntimeHotUpdate: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return HotReload;
    },
    waitForWebpackRuntimeHotUpdate: function() {
        return waitForWebpackRuntimeHotUpdate;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/strip-ansi/index.js [app-client] (ecmascript)"));
const _formatwebpackmessages = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/format-webpack-messages.js [app-client] (ecmascript)"));
const _navigation = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const _shared = (()=>{
    const e = new Error("Cannot find module '../shared'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _nextdevtools = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/next-devtools/index.js [app-client] (ecmascript)");
const _replayssronlyerrors = (()=>{
    const e = new Error("Cannot find module '../../../../next-devtools/userspace/app/errors/replay-ssr-only-errors'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _appdevoverlayerrorboundary = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/next-devtools/userspace/app/app-dev-overlay-error-boundary.js [app-client] (ecmascript)");
const _useerrorhandler = (()=>{
    const e = new Error("Cannot find module '../../../../next-devtools/userspace/app/errors/use-error-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _runtimeerrorhandler = (()=>{
    const e = new Error("Cannot find module '../../runtime-error-handler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _usewebsocket = (()=>{
    const e = new Error("Cannot find module './use-websocket'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _hotreloadertypes = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/server/dev/hot-reloader-types.js [app-client] (ecmascript)");
const _navigationuntracked = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _reporthmrlatency = /*#__PURE__*/ _interop_require_default._((()=>{
    const e = new Error("Cannot find module '../../report-hmr-latency'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})());
const _turbopackhotreloadercommon = (()=>{
    const e = new Error("Cannot find module '../turbopack-hot-reloader-common'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _useforwardconsolelog = (()=>{
    const e = new Error("Cannot find module '../../../../next-devtools/userspace/app/errors/use-forward-console-log'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
let mostRecentCompilationHash = null;
let __nextDevClientId = Math.round(Math.random() * 100 + Date.now());
let reloading = false;
let webpackStartMsSinceEpoch = null;
const turbopackHmr = ("TURBOPACK compile-time truthy", 1) ? new _turbopackhotreloadercommon.TurbopackHmr() : "TURBOPACK unreachable";
let pendingHotUpdateWebpack = Promise.resolve();
let resolvePendingHotUpdateWebpack = ()=>{};
function setPendingHotUpdateWebpack() {
    pendingHotUpdateWebpack = new Promise((resolve)=>{
        resolvePendingHotUpdateWebpack = ()=>{
            resolve();
        };
    });
}
function waitForWebpackRuntimeHotUpdate() {
    return pendingHotUpdateWebpack;
}
// There is a newer version of the code available.
function handleAvailableHash(hash) {
    // Update last known compilation hash.
    mostRecentCompilationHash = hash;
}
/**
 * Is there a newer version of this code available?
 * For webpack: Check if the hash changed compared to __webpack_hash__
 * For Turbopack: Always true because it doesn't have __webpack_hash__
 */ function isUpdateAvailable() {
    if ("TURBOPACK compile-time truthy", 1) {
        return true;
    }
    //TURBOPACK unreachable
    ;
}
// Webpack disallows updates in other states.
function canApplyUpdates() {
    return module.hot.status() === 'idle';
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === 'idle') {
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        module.hot.addStatusHandler(handler);
    }
}
function performFullReload(err, sendMessage) {
    const stackTrace = err && (err.stack && err.stack.split('\n').slice(0, 5).join('\n') || err.message || err + '');
    sendMessage(JSON.stringify({
        event: 'client-full-reload',
        stackTrace,
        hadRuntimeError: !!_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError,
        dependencyChain: err ? err.dependencyChain : undefined
    }));
    if (reloading) return;
    reloading = true;
    window.location.reload();
}
// Attempt to update code on the fly, fall back to a hard reload.
function tryApplyUpdatesWebpack(sendMessage) {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        resolvePendingHotUpdateWebpack();
        _nextdevtools.dispatcher.onBuildOk();
        (0, _reporthmrlatency.default)(sendMessage, [], webpackStartMsSinceEpoch, Date.now());
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || updatedModules == null) {
            if (err) {
                console.warn(_shared.REACT_REFRESH_FULL_RELOAD);
            } else if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
            }
            performFullReload(err, sendMessage);
            return;
        }
        _nextdevtools.dispatcher.onBuildOk();
        if (isUpdateAvailable()) {
            // While we were updating, there was a new update! Do it again.
            tryApplyUpdatesWebpack(sendMessage);
            return;
        }
        _nextdevtools.dispatcher.onRefresh();
        resolvePendingHotUpdateWebpack();
        (0, _reporthmrlatency.default)(sendMessage, updatedModules, webpackStartMsSinceEpoch, Date.now());
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    // https://webpack.js.org/api/hot-module-replacement/#check
    module.hot.check(/* autoApply */ false).then((updatedModules)=>{
        if (updatedModules == null) {
            return null;
        }
        // We should always handle an update, even if updatedModules is empty (but
        // non-null) for any reason. That's what webpack would normally do:
        // https://github.com/webpack/webpack/blob/3aa6b6bc3a64/lib/hmr/HotModuleReplacement.runtime.js#L296-L298
        _nextdevtools.dispatcher.onBeforeRefresh();
        // https://webpack.js.org/api/hot-module-replacement/#apply
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
/** Handles messages from the server for the App Router. */ function processMessage(obj, sendMessage, processTurbopackMessage, router, appIsrManifestRef, pathnameRef) {
    if (!('action' in obj)) {
        return;
    }
    function handleErrors(errors) {
        // "Massage" webpack messages.
        const formatted = (0, _formatwebpackmessages.default)({
            errors: errors,
            warnings: []
        });
        // Only show the first error.
        _nextdevtools.dispatcher.onBuildError(formatted.errors[0]);
        // Also log them to the console.
        for(let i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
        // Do not attempt to reload now.
        // We will reload on next success instead.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    function handleHotUpdate() {
        if ("TURBOPACK compile-time truthy", 1) {
            const hmrUpdate = turbopackHmr.onBuilt();
            if (hmrUpdate != null) {
                (0, _reporthmrlatency.default)(sendMessage, [
                    ...hmrUpdate.updatedModules
                ], hmrUpdate.startMsSinceEpoch, hmrUpdate.endMsSinceEpoch, hmrUpdate.hasUpdates);
            }
            _nextdevtools.dispatcher.onBuildOk();
        } else //TURBOPACK unreachable
        ;
    }
    switch(obj.action){
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.ISR_MANIFEST:
            {
                if ("TURBOPACK compile-time truthy", 1) {
                    if (appIsrManifestRef) {
                        appIsrManifestRef.current = obj.data;
                        // handle initial status on receiving manifest
                        // navigation is handled in useEffect for pathname changes
                        // as we'll receive the updated manifest before usePathname
                        // triggers for new value
                        if (pathnameRef.current in obj.data) {
                            _nextdevtools.dispatcher.onStaticIndicator(true);
                        } else {
                            _nextdevtools.dispatcher.onStaticIndicator(false);
                        }
                    }
                }
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
            {
                _nextdevtools.dispatcher.buildingIndicatorShow();
                if ("TURBOPACK compile-time truthy", 1) {
                    turbopackHmr.onBuilding();
                } else //TURBOPACK unreachable
                ;
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
            {
                _nextdevtools.dispatcher.buildingIndicatorHide();
                if (obj.hash) {
                    handleAvailableHash(obj.hash);
                }
                const { errors, warnings } = obj;
                // Is undefined when it's a 'built' event
                if ('versionInfo' in obj) _nextdevtools.dispatcher.onVersionInfo(obj.versionInfo);
                if ('debug' in obj && obj.debug) _nextdevtools.dispatcher.onDebugInfo(obj.debug);
                if ('devIndicator' in obj) _nextdevtools.dispatcher.onDevIndicator(obj.devIndicator);
                if ('devToolsConfig' in obj) _nextdevtools.dispatcher.onDevToolsConfig(obj.devToolsConfig);
                const hasErrors = Boolean(errors && errors.length);
                // Compilation with errors (e.g. syntax error or missing modules).
                if (hasErrors) {
                    sendMessage(JSON.stringify({
                        event: 'client-error',
                        errorCount: errors.length,
                        clientId: __nextDevClientId
                    }));
                    handleErrors(errors);
                    return;
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    sendMessage(JSON.stringify({
                        event: 'client-warning',
                        warningCount: warnings.length,
                        clientId: __nextDevClientId
                    }));
                    // Print warnings to the console.
                    const formattedMessages = (0, _formatwebpackmessages.default)({
                        warnings: warnings,
                        errors: []
                    });
                    for(let i = 0; i < formattedMessages.warnings.length; i++){
                        if (i === 5) {
                            console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
                            break;
                        }
                        console.warn((0, _stripansi.default)(formattedMessages.warnings[i]));
                    }
                // No early return here as we need to apply modules in the same way between warnings only and compiles without warnings
                }
                sendMessage(JSON.stringify({
                    event: 'client-success',
                    clientId: __nextDevClientId
                }));
                if (obj.action === _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT) {
                    handleHotUpdate();
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED:
            {
                processTurbopackMessage({
                    type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED,
                    data: {
                        sessionId: obj.data.sessionId
                    }
                });
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE:
            {
                turbopackHmr.onTurbopackMessage(obj);
                _nextdevtools.dispatcher.onBeforeRefresh();
                processTurbopackMessage({
                    type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE,
                    data: obj.data
                });
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                    performFullReload(null, sendMessage);
                }
                _nextdevtools.dispatcher.onRefresh();
                break;
            }
        // TODO-APP: make server component change more granular
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_COMPONENT_CHANGES:
            {
                turbopackHmr == null ? void 0 : turbopackHmr.onServerComponentChanges();
                sendMessage(JSON.stringify({
                    event: 'server-component-reload-page',
                    clientId: __nextDevClientId,
                    hash: obj.hash
                }));
                // Store the latest hash in a session cookie so that it's sent back to the
                // server with any subsequent requests.
                document.cookie = _approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE + "=" + obj.hash + ";path=/";
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || document.documentElement.id === '__next_error__') {
                    if (reloading) return;
                    reloading = true;
                    return window.location.reload();
                }
                (0, _react.startTransition)(()=>{
                    router.hmrRefresh();
                    _nextdevtools.dispatcher.onRefresh();
                });
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.RELOAD_PAGE:
            {
                turbopackHmr == null ? void 0 : turbopackHmr.onReloadPage();
                sendMessage(JSON.stringify({
                    event: 'client-reload-page',
                    clientId: __nextDevClientId
                }));
                if (reloading) return;
                reloading = true;
                return window.location.reload();
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.ADDED_PAGE:
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.REMOVED_PAGE:
            {
                turbopackHmr == null ? void 0 : turbopackHmr.onPageAddRemove();
                // TODO-APP: potentially only refresh if the currently viewed page was added/removed.
                return router.hmrRefresh();
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
            {
                const { errorJSON } = obj;
                if (errorJSON) {
                    const { message, stack } = JSON.parse(errorJSON);
                    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                        value: "E394",
                        enumerable: false,
                        configurable: true
                    });
                    error.stack = stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.DEV_PAGES_MANIFEST_UPDATE:
            {
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.DEVTOOLS_CONFIG:
            {
                _nextdevtools.dispatcher.onDevToolsConfig(obj.data);
                return;
            }
        default:
            {
                obj;
            }
    }
}
function HotReload(param) {
    let { assetPrefix, children, globalError } = param;
    (0, _useerrorhandler.useErrorHandler)(_nextdevtools.dispatcher.onUnhandledError, _nextdevtools.dispatcher.onUnhandledRejection);
    const webSocketRef = (0, _usewebsocket.useWebsocket)(assetPrefix);
    (0, _usewebsocket.useWebsocketPing)(webSocketRef);
    const sendMessage = (0, _usewebsocket.useSendMessage)(webSocketRef);
    (0, _useforwardconsolelog.useForwardConsoleLog)(webSocketRef);
    const processTurbopackMessage = (0, _usewebsocket.useTurbopack)(sendMessage, (err)=>performFullReload(err, sendMessage));
    const router = (0, _navigation.useRouter)();
    // We don't want access of the pathname for the dev tools to trigger a dynamic
    // access (as the dev overlay will never be present in production).
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    const appIsrManifestRef = (0, _react.useRef)({});
    const pathnameRef = (0, _react.useRef)(pathname);
    if ("TURBOPACK compile-time truthy", 1) {
        // this conditional is only for dead-code elimination which
        // isn't a runtime conditional only build-time so ignore hooks rule
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(()=>{
            pathnameRef.current = pathname;
            const appIsrManifest = appIsrManifestRef.current;
            if (appIsrManifest) {
                if (pathname && pathname in appIsrManifest) {
                    try {
                        _nextdevtools.dispatcher.onStaticIndicator(true);
                    } catch (reason) {
                        let message = '';
                        if (reason instanceof DOMException) {
                            var _reason_stack;
                            // Most likely a SecurityError, because of an unavailable localStorage
                            message = (_reason_stack = reason.stack) != null ? _reason_stack : reason.message;
                        } else if (reason instanceof Error) {
                            var _reason_stack1;
                            message = 'Error: ' + reason.message + '\n' + ((_reason_stack1 = reason.stack) != null ? _reason_stack1 : '');
                        } else {
                            message = 'Unexpected Exception: ' + reason;
                        }
                        console.warn('[HMR] ' + message);
                    }
                } else {
                    _nextdevtools.dispatcher.onStaticIndicator(false);
                }
            }
        }, [
            pathname
        ]);
    }
    (0, _react.useEffect)(()=>{
        const websocket = webSocketRef.current;
        if (!websocket) return;
        const handler = (event)=>{
            try {
                const obj = JSON.parse(event.data);
                processMessage(obj, sendMessage, processTurbopackMessage, router, appIsrManifestRef, pathnameRef);
            } catch (err) {
                (0, _shared.reportInvalidHmrMessage)(event, err);
            }
        };
        websocket.addEventListener('message', handler);
        return ()=>websocket.removeEventListener('message', handler);
    }, [
        sendMessage,
        router,
        webSocketRef,
        processTurbopackMessage,
        appIsrManifestRef
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_appdevoverlayerrorboundary.AppDevOverlayErrorBoundary, {
        globalError: globalError,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_replayssronlyerrors.ReplaySsrOnlyErrors, {
                onBlockingError: _nextdevtools.dispatcher.openErrorOverlay
            }),
            children
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-reloader-app.js.map
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
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _createhreffromurl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _useactionqueue = (()=>{
    const e = new Error("Cannot find module './use-action-queue'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _isbot = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
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
const _navfailurehandler = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
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
const _links = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
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
        const HotReloader = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/dev/hot-reloader/app/hot-reloader-app.js [app-client] (ecmascript)").default;
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
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _isthenable = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
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
const _links = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
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
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-globals.js [app-client] (ecmascript)");
const _client = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _client1 = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _onrecoverableerror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)");
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
const _onrecoverableerror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/react-client-callbacks/on-recoverable-error.js [app-client] (ecmascript)");
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
            const { renderAppDevOverlay } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/next-devtools/index.js [app-client] (ecmascript)");
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

//# sourceMappingURL=85a19_next_dist_client_ad3fc548._.js.map