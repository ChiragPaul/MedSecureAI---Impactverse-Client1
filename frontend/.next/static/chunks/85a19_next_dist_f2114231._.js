(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createFetch: null,
    createFromNextReadableStream: null,
    fetchServerResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createFetch: function() {
        return createFetch;
    },
    createFromNextReadableStream: function() {
        return createFromNextReadableStream;
    },
    fetchServerResponse: function() {
        return fetchServerResponse;
    }
});
const _client = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _flightdatahelpers = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
const _setcachebustingsearchparam = (()=>{
    const e = new Error("Cannot find module './set-cache-busting-search-param'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _routeparams = (()=>{
    const e = new Error("Cannot find module '../../route-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const createFromReadableStream = _client.createFromReadableStream;
function doMpaNavigation(url) {
    return {
        flightData: (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(url, location.origin)).toString(),
        canonicalUrl: undefined,
        couldBeIntercepted: false,
        prerendered: false,
        postponed: false,
        staleTime: -1
    };
}
let abortController = new AbortController();
if (typeof window !== 'undefined') {
    // Abort any in-flight requests when the page is unloaded, e.g. due to
    // reloading the page or performing hard navigations. This allows us to ignore
    // what would otherwise be a thrown TypeError when the browser cancels the
    // requests.
    window.addEventListener('pagehide', ()=>{
        abortController.abort();
    });
    // Use a fresh AbortController instance on pageshow, e.g. when navigating back
    // and the JavaScript execution context is restored by the browser.
    window.addEventListener('pageshow', ()=>{
        abortController = new AbortController();
    });
}
async function fetchServerResponse(url, options) {
    const { flightRouterState, nextUrl, prefetchKind } = options;
    const headers = {
        // Enable flight response
        [_approuterheaders.RSC_HEADER]: '1',
        // Provide the current router state
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: (0, _flightdatahelpers.prepareFlightRouterStateForRequest)(flightRouterState, options.isHmrRefresh)
    };
    /**
   * Three cases:
   * - `prefetchKind` is `undefined`, it means it's a normal navigation, so we want to prefetch the page data fully
   * - `prefetchKind` is `full` - we want to prefetch the whole page so same as above
   * - `prefetchKind` is `auto` - if the page is dynamic, prefetch the page data partially, if static prefetch the page data fully
   */ if (prefetchKind === _routerreducertypes.PrefetchKind.AUTO) {
        headers[_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER] = '1';
    }
    if (("TURBOPACK compile-time value", "development") === 'development' && options.isHmrRefresh) {
        headers[_approuterheaders.NEXT_HMR_REFRESH_HEADER] = '1';
    }
    if (nextUrl) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    try {
        var _res_headers_get;
        // When creating a "temporary" prefetch (the "on-demand" prefetch that gets created on navigation, if one doesn't exist)
        // we send the request with a "high" priority as it's in response to a user interaction that could be blocking a transition.
        // Otherwise, all other prefetches are sent with a "low" priority.
        // We use "auto" for in all other cases to match the existing default, as this function is shared outside of prefetching.
        const fetchPriority = prefetchKind ? prefetchKind === _routerreducertypes.PrefetchKind.TEMPORARY ? 'high' : 'low' : 'auto';
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const res = await createFetch(url, headers, fetchPriority, abortController.signal);
        const responseUrl = (0, _routeparams.urlToUrlWithoutFlightMarker)(new URL(res.url));
        const canonicalUrl = res.redirected ? responseUrl : undefined;
        const contentType = res.headers.get('content-type') || '';
        const interception = !!((_res_headers_get = res.headers.get('vary')) == null ? void 0 : _res_headers_get.includes(_approuterheaders.NEXT_URL));
        const postponed = !!res.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER);
        const staleTimeHeaderSeconds = res.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER);
        const staleTime = staleTimeHeaderSeconds !== null ? parseInt(staleTimeHeaderSeconds, 10) * 1000 : -1;
        let isFlightResponse = contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // If fetch returns something different than flight response handle it like a mpa navigation
        // If the fetch was not 200, we also handle it like a mpa navigation
        if (!isFlightResponse || !res.ok || !res.body) {
            // in case the original URL came with a hash, preserve it before redirecting to the new URL
            if (url.hash) {
                responseUrl.hash = url.hash;
            }
            return doMpaNavigation(responseUrl.toString());
        }
        // We may navigate to a page that requires a different Webpack runtime.
        // In prod, every page will have the same Webpack runtime.
        // In dev, the Webpack runtime is minimal for each page.
        // We need to ensure the Webpack runtime is updated before executing client-side JS of the new page.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const flightStream = postponed ? createUnclosingPrefetchStream(res.body) : res.body;
        const response = await createFromNextReadableStream(flightStream);
        if ((0, _appbuildid.getAppBuildId)() !== response.b) {
            return doMpaNavigation(res.url);
        }
        return {
            flightData: (0, _flightdatahelpers.normalizeFlightData)(response.f),
            canonicalUrl: canonicalUrl,
            couldBeIntercepted: interception,
            prerendered: response.S,
            postponed,
            staleTime
        };
    } catch (err) {
        if (!abortController.signal.aborted) {
            console.error("Failed to fetch RSC payload for " + url + ". Falling back to browser navigation.", err);
        }
        // If fetch fails handle it like a mpa navigation
        // TODO-APP: Add a test for the case where a CORS request fails, e.g. external url redirect coming from the response.
        // See https://github.com/vercel/next.js/issues/43605#issuecomment-1451617521 for a reproduction.
        return {
            flightData: url.toString(),
            canonicalUrl: undefined,
            couldBeIntercepted: false,
            prerendered: false,
            postponed: false,
            staleTime: -1
        };
    }
}
async function createFetch(url, headers, fetchPriority, signal) {
    // TODO: In output: "export" mode, the headers do nothing. Omit them (and the
    // cache busting search param) from the request so they're
    // maximally cacheable.
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const fetchOptions = {
        // Backwards compat for older browsers. `same-origin` is the default in modern browsers.
        credentials: 'same-origin',
        headers,
        priority: fetchPriority || undefined,
        signal
    };
    // `fetchUrl` is slightly different from `url` because we add a cache-busting
    // search param to it. This should not leak outside of this function, so we
    // track them separately.
    let fetchUrl = new URL(url);
    (0, _setcachebustingsearchparam.setCacheBustingSearchParam)(fetchUrl, headers);
    let browserResponse = await fetch(fetchUrl, fetchOptions);
    // If the server responds with a redirect (e.g. 307), and the redirected
    // location does not contain the cache busting search param set in the
    // original request, the response is likely invalid — when following the
    // redirect, the browser forwards the request headers, but since the cache
    // busting search param is missing, the server will reject the request due to
    // a mismatch.
    //
    // Ideally, we would be able to intercept the redirect response and perform it
    // manually, instead of letting the browser automatically follow it, but this
    // is not allowed by the fetch API.
    //
    // So instead, we must "replay" the redirect by fetching the new location
    // again, but this time we'll append the cache busting search param to prevent
    // a mismatch.
    //
    // TODO: We can optimize Next.js's built-in middleware APIs by returning a
    // custom status code, to prevent the browser from automatically following it.
    //
    // This does not affect Server Action-based redirects; those are encoded
    // differently, as part of the Flight body. It only affects redirects that
    // occur in a middleware or a third-party proxy.
    let redirected = browserResponse.redirected;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Remove the cache busting search param from the response URL, to prevent it
    // from leaking outside of this function.
    const responseUrl = new URL(browserResponse.url, fetchUrl);
    responseUrl.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    const rscResponse = {
        url: responseUrl.href,
        // This is true if any redirects occurred, either automatically by the
        // browser, or manually by us. So it's different from
        // `browserResponse.redirected`, which only tells us whether the browser
        // followed a redirect, and only for the last response in the chain.
        redirected,
        // These can be copied from the last browser response we received. We
        // intentionally only expose the subset of fields that are actually used
        // elsewhere in the codebase.
        ok: browserResponse.ok,
        headers: browserResponse.headers,
        body: browserResponse.body,
        status: browserResponse.status
    };
    return rscResponse;
}
function createFromNextReadableStream(flightStream) {
    return createFromReadableStream(flightStream, {
        callServer: _appcallserver.callServer,
        findSourceMapURL: _appfindsourcemapurl.findSourceMapURL
    });
}
function createUnclosingPrefetchStream(originalFlightStream) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream.
                return;
            }
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fetch-server-response.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "disableSmoothScrollDuringRouteTransition", {
    enumerable: true,
    get: function() {
        return disableSmoothScrollDuringRouteTransition;
    }
});
const _warnonce = (()=>{
    const e = new Error("Cannot find module '../../utils/warn-once'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
function disableSmoothScrollDuringRouteTransition(fn, options) {
    if (options === void 0) options = {};
    // if only the hash is changed, we don't need to disable smooth scrolling
    // we only care to prevent smooth scrolling when navigating to a new page to avoid jarring UX
    if (options.onlyHashChange) {
        fn();
        return;
    }
    const htmlElement = document.documentElement;
    const hasDataAttribute = htmlElement.dataset.scrollBehavior === 'smooth';
    // Since this is a breaking change, this is temporarily flagged
    // and will be false by default.
    // In the next major (v16), this will be automatically enabled
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        // Old behavior: always manipulate styles, but warn about upcoming change
        // Warn if smooth scrolling is detected but no data attribute is present
        if (("TURBOPACK compile-time value", "development") === 'development' && !hasDataAttribute && getComputedStyle(htmlElement).scrollBehavior === 'smooth') {
            (0, _warnonce.warnOnce)('Detected `scroll-behavior: smooth` on the `<html>` element. In a future version, ' + 'Next.js will no longer automatically disable smooth scrolling during route transitions. ' + 'To prepare for this change, add `data-scroll-behavior="smooth"` to your <html> element. ' + 'Learn more: https://nextjs.org/docs/messages/missing-data-scroll-behavior');
        }
    }
    // Proceed with temporarily disabling smooth scrolling
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    if (!options.dontForceLayout) {
        // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
        // Otherwise it will not pickup the change in scrollBehavior
        // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
        htmlElement.getClientRects();
    }
    fn();
    htmlElement.style.scrollBehavior = existing;
} //# sourceMappingURL=disable-smooth-scroll.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasInterceptionRouteInCurrentTree", {
    enumerable: true,
    get: function() {
        return hasInterceptionRouteInCurrentTree;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-client] (ecmascript)");
function hasInterceptionRouteInCurrentTree(param) {
    let [segment, parallelRoutes] = param;
    // If we have a dynamic segment, it's marked as an interception route by the presence of the `i` suffix.
    if (Array.isArray(segment) && (segment[2] === 'di' || segment[2] === 'ci')) {
        return true;
    }
    // If segment is not an array, apply the existing string-based check
    if (typeof segment === 'string' && (0, _interceptionroutes.isInterceptionRouteAppPath)(segment)) {
        return true;
    }
    // Iterate through parallelRoutes if they exist
    if (parallelRoutes) {
        for(const key in parallelRoutes){
            if (hasInterceptionRouteInCurrentTree(parallelRoutes[key])) {
                return true;
            }
        }
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-interception-route-in-current-tree.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useRouterBFCache", {
    enumerable: true,
    get: function() {
        return useRouterBFCache;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// When the flag is disabled, only track the currently active tree
const MAX_BF_CACHE_ENTRIES = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 1;
function useRouterBFCache(activeTree, activeStateKey) {
    // The currently active entry. The entries form a linked list, sorted in
    // order of most recently active. This allows us to reuse parts of the list
    // without cloning, unless there's a reordering or removal.
    // TODO: Once we start tracking back/forward history at each route level,
    // we should use the history order instead. In other words, when traversing
    // to an existing entry as a result of a popstate event, we should maintain
    // the existing order instead of moving it to the front of the list. I think
    // an initial implementation of this could be to pass an incrementing id
    // to history.pushState/replaceState, then use that here for ordering.
    const [prevActiveEntry, setPrevActiveEntry] = (0, _react.useState)(()=>{
        const initialEntry = {
            tree: activeTree,
            stateKey: activeStateKey,
            next: null
        };
        return initialEntry;
    });
    if (prevActiveEntry.tree === activeTree) {
        // Fast path. The active tree hasn't changed, so we can reuse the
        // existing state.
        return prevActiveEntry;
    }
    // The route tree changed. Note that this doesn't mean that the tree changed
    // *at this level* — the change may be due to a child route. Either way, we
    // need to either add or update the router tree in the bfcache.
    //
    // The rest of the code looks more complicated than it actually is because we
    // can't mutate the state in place; we have to copy-on-write.
    // Create a new entry for the active cache key. This is the head of the new
    // linked list.
    const newActiveEntry = {
        tree: activeTree,
        stateKey: activeStateKey,
        next: null
    };
    // We need to append the old list onto the new list. If the head of the new
    // list was already present in the cache, then we'll need to clone everything
    // that came before it. Then we can reuse the rest.
    let n = 1;
    let oldEntry = prevActiveEntry;
    let clonedEntry = newActiveEntry;
    while(oldEntry !== null && n < MAX_BF_CACHE_ENTRIES){
        if (oldEntry.stateKey === activeStateKey) {
            // Fast path. This entry in the old list that corresponds to the key that
            // is now active. We've already placed a clone of this entry at the front
            // of the new list. We can reuse the rest of the old list without cloning.
            // NOTE: We don't need to worry about eviction in this case because we
            // haven't increased the size of the cache, and we assume the max size
            // is constant across renders. If we were to change it to a dynamic limit,
            // then the implementation would need to account for that.
            clonedEntry.next = oldEntry.next;
            break;
        } else {
            // Clone the entry and append it to the list.
            n++;
            const entry = {
                tree: oldEntry.tree,
                stateKey: oldEntry.stateKey,
                next: null
            };
            clonedEntry.next = entry;
            clonedEntry = entry;
        }
        oldEntry = oldEntry.next;
    }
    setPrevActiveEntry(newActiveEntry);
    return newActiveEntry;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bfcache.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/layout-router.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, /**
 * OuterLayoutRouter handles the current segment as well as <Offscreen> rendering of other segments.
 * It can be rendered next to each other with a different `parallelRouterKey`, allowing for Parallel routes.
 */ "default", {
    enumerable: true,
    get: function() {
        return OuterLayoutRouter;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = (()=>{
    const e = new Error("Cannot find module './router-reducer/router-reducer-types'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _unresolvedthenable = (()=>{
    const e = new Error("Cannot find module './unresolved-thenable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundary = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _disablesmoothscroll = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/disable-smooth-scroll.js [app-client] (ecmascript)");
const _redirectboundary = (()=>{
    const e = new Error("Cannot find module './redirect-boundary'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _errorboundary1 = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
const _createroutercachekey = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/create-router-cache-key.js [app-client] (ecmascript)");
const _hasinterceptionrouteincurrenttree = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/router-reducer/reducers/has-interception-route-in-current-tree.js [app-client] (ecmascript)");
const _useactionqueue = (()=>{
    const e = new Error("Cannot find module './use-action-queue'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
const _bfcache = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/bfcache.js [app-client] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-client] (ecmascript)");
const Activity = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchsegments.matchSegment)(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        {
                            ...treeToRecreate[1],
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                'refetch'
                            ]
                        }
                    ];
                }
                return [
                    treeToRecreate[0],
                    {
                        ...treeToRecreate[1],
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    }
                ];
            }
        }
    }
    return treeToRecreate;
}
const __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _reactdom.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (typeof window === 'undefined') return null;
    // __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode is null during module init.
    // We need to lazily reference it.
    const internal_reactDOMfindDOMNode = __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.findDOMNode;
    return internal_reactDOMfindDOMNode(instance);
}
const rectProperties = [
    'bottom',
    'height',
    'left',
    'right',
    'top',
    'width',
    'x',
    'y'
];
/**
 * Check if a HTMLElement is hidden or fixed/sticky position
 */ function shouldSkipElement(element) {
    // we ignore fixed or sticky positioned elements since they'll likely pass the "in-viewport" check
    // and will result in a situation we bail on scroll because of something like a fixed nav,
    // even though the actual page content is offscreen
    if ([
        'sticky',
        'fixed'
    ].includes(getComputedStyle(element).position)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn('Skipping auto-scroll behavior due to `position: sticky` or `position: fixed` on element:', element);
        }
        return true;
    }
    // Uses `getBoundingClientRect` to check if the element is hidden instead of `offsetParent`
    // because `offsetParent` doesn't consider document/body
    const rect = element.getBoundingClientRect();
    return rectProperties.every((item)=>rect[item] === 0);
}
/**
 * Check if the top corner of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element, viewportHeight) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.top <= viewportHeight;
}
/**
 * Find the DOM node for a hash fragment.
 * If `top` the page has to scroll to the top of the page. This mirrors the browser's behavior.
 * If the hash fragment is an id, the page has to scroll to the element with that id.
 * If the hash fragment is a name, the page has to scroll to the first element with that name.
 */ function getHashFragmentDomNode(hashFragment) {
    // If the hash fragment is `top` the page has to scroll to the top of the page.
    if (hashFragment === 'top') {
        return document.body;
    }
    var _document_getElementById;
    // If the hash fragment is an id, the page has to scroll to the element with that id.
    return (_document_getElementById = document.getElementById(hashFragment)) != null ? _document_getElementById : document.getElementsByName(hashFragment)[0];
}
class InnerScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        this.handlePotentialScroll();
    }
    componentDidUpdate() {
        // Because this property is overwritten in handlePotentialScroll it's fine to always run it when true as it'll be set to false for subsequent renders.
        if (this.props.focusAndScrollRef.apply) {
            this.handlePotentialScroll();
        }
    }
    render() {
        return this.props.children;
    }
    constructor(...args){
        super(...args), this.handlePotentialScroll = ()=>{
            // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
            const { focusAndScrollRef, segmentPath } = this.props;
            if (focusAndScrollRef.apply) {
                // segmentPaths is an array of segment paths that should be scrolled to
                // if the current segment path is not in the array, the scroll is not applied
                // unless the array is empty, in which case the scroll is always applied
                if (focusAndScrollRef.segmentPaths.length !== 0 && !focusAndScrollRef.segmentPaths.some((scrollRefSegmentPath)=>segmentPath.every((segment, index)=>(0, _matchsegments.matchSegment)(segment, scrollRefSegmentPath[index])))) {
                    return;
                }
                let domNode = null;
                const hashFragment = focusAndScrollRef.hashFragment;
                if (hashFragment) {
                    domNode = getHashFragmentDomNode(hashFragment);
                }
                // `findDOMNode` is tricky because it returns just the first child if the component is a fragment.
                // This already caused a bug where the first child was a <link/> in head.
                if (!domNode) {
                    domNode = findDOMNode(this);
                }
                // If there is no DOM node this layout-router level is skipped. It'll be handled higher-up in the tree.
                if (!(domNode instanceof Element)) {
                    return;
                }
                // Verify if the element is a HTMLElement and if we want to consider it for scroll behavior.
                // If the element is skipped, try to select the next sibling and try again.
                while(!(domNode instanceof HTMLElement) || shouldSkipElement(domNode)){
                    if ("TURBOPACK compile-time truthy", 1) {
                        var _domNode_parentElement;
                        if (((_domNode_parentElement = domNode.parentElement) == null ? void 0 : _domNode_parentElement.localName) === 'head') {
                        // TODO: We enter this state when metadata was rendered as part of the page or via Next.js.
                        // This is always a bug in Next.js and caused by React hoisting metadata.
                        // We need to replace `findDOMNode` in favor of Fragment Refs (when available) so that we can skip over metadata.
                        }
                    }
                    // No siblings found that match the criteria are found, so handle scroll higher up in the tree instead.
                    if (domNode.nextElementSibling === null) {
                        return;
                    }
                    domNode = domNode.nextElementSibling;
                }
                // State is mutated to ensure that the focus and scroll is applied only once.
                focusAndScrollRef.apply = false;
                focusAndScrollRef.hashFragment = null;
                focusAndScrollRef.segmentPaths = [];
                (0, _disablesmoothscroll.disableSmoothScrollDuringRouteTransition)(()=>{
                    // In case of hash scroll, we only need to scroll the element into view
                    if (hashFragment) {
                        ;
                        domNode.scrollIntoView();
                        return;
                    }
                    // Store the current viewport height because reading `clientHeight` causes a reflow,
                    // and it won't change during this function.
                    const htmlElement = document.documentElement;
                    const viewportHeight = htmlElement.clientHeight;
                    // If the element's top edge is already in the viewport, exit early.
                    if (topOfElementInViewport(domNode, viewportHeight)) {
                        return;
                    }
                    // Otherwise, try scrolling go the top of the document to be backward compatible with pages
                    // scrollIntoView() called on `<html/>` element scrolls horizontally on chrome and firefox (that shouldn't happen)
                    // We could use it to scroll horizontally following RTL but that also seems to be broken - it will always scroll left
                    // scrollLeft = 0 also seems to ignore RTL and manually checking for RTL is too much hassle so we will scroll just vertically
                    htmlElement.scrollTop = 0;
                    // Scroll to domNode if domNode is not in viewport when scrolled to top of document
                    if (!topOfElementInViewport(domNode, viewportHeight)) {
                        // Scroll into view doesn't scroll horizontally by default when not needed
                        ;
                        domNode.scrollIntoView();
                    }
                }, {
                    // We will force layout by querying domNode position
                    dontForceLayout: true,
                    onlyHashChange: focusAndScrollRef.onlyHashChange
                });
                // Mutate after scrolling so that it can be read by `disableSmoothScrollDuringRouteTransition`
                focusAndScrollRef.onlyHashChange = false;
                // Set focus on the element
                domNode.focus();
            }
        };
    }
}
function ScrollAndFocusHandler(param) {
    let { segmentPath, children } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerScrollAndFocusHandler, {
        segmentPath: segmentPath,
        focusAndScrollRef: context.focusAndScrollRef,
        children: children
    });
}
/**
 * InnerLayoutRouter handles rendering the provided segment based on the cache.
 */ function InnerLayoutRouter(param) {
    let { tree, segmentPath, cacheNode, url } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.GlobalLayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant global layout router not mounted'), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: false,
            configurable: true
        });
    }
    const { tree: fullTree } = context;
    // `rsc` represents the renderable node for this segment.
    // If this segment has a `prefetchRsc`, it's the statically prefetched data.
    // We should use that on initial render instead of `rsc`. Then we'll switch
    // to `rsc` when the dynamic response streams in.
    //
    // If no prefetch data is available, then we go straight to rendering `rsc`.
    const resolvedPrefetchRsc = cacheNode.prefetchRsc !== null ? cacheNode.prefetchRsc : cacheNode.rsc;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    const rsc = (0, _react.useDeferredValue)(cacheNode.rsc, resolvedPrefetchRsc);
    // `rsc` is either a React node or a promise for a React node, except we
    // special case `null` to represent that this segment's data is missing. If
    // it's a promise, we need to unwrap it so we can determine whether or not the
    // data is missing.
    const resolvedRsc = typeof rsc === 'object' && rsc !== null && typeof rsc.then === 'function' ? (0, _react.use)(rsc) : rsc;
    if (!resolvedRsc) {
        // The data for this segment is not available, and there's no pending
        // navigation that will be able to fulfill it. We need to fetch more from
        // the server and patch the cache.
        // Check if there's already a pending request.
        let lazyData = cacheNode.lazyData;
        if (lazyData === null) {
            /**
       * Router state with refetch marker added
       */ // TODO-APP: remove ''
            const refetchTree = walkAddRefetch([
                '',
                ...segmentPath
            ], fullTree);
            const includeNextUrl = (0, _hasinterceptionrouteincurrenttree.hasInterceptionRouteInCurrentTree)(fullTree);
            const navigatedAt = Date.now();
            cacheNode.lazyData = lazyData = (0, _fetchserverresponse.fetchServerResponse)(new URL(url, location.origin), {
                flightRouterState: refetchTree,
                nextUrl: includeNextUrl ? context.nextUrl : null
            }).then((serverResponse)=>{
                (0, _react.startTransition)(()=>{
                    (0, _useactionqueue.dispatchAppRouterAction)({
                        type: _routerreducertypes.ACTION_SERVER_PATCH,
                        previousTree: fullTree,
                        serverResponse,
                        navigatedAt
                    });
                });
                return serverResponse;
            });
            // Suspend while waiting for lazyData to resolve
            (0, _react.use)(lazyData);
        }
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        // A falsey `resolvedRsc` indicates missing data -- we should not commit that branch, and we need to wait for the data to arrive.
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    // If we get to this point, then we know we have something we can render.
    const subtree = /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
        value: {
            parentTree: tree,
            parentCacheNode: cacheNode,
            parentSegmentPath: segmentPath,
            // TODO-APP: overriding of url for parallel routes
            url: url
        },
        children: resolvedRsc
    });
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary(param) {
    let { loading, children } = param;
    // If loading is a promise, unwrap it. This happens in cases where we haven't
    // yet received the loading data from the server — which includes whether or
    // not this layout has a loading component at all.
    //
    // It's OK to suspend here instead of inside the fallback because this
    // promise will resolve simultaneously with the data for the segment itself.
    // So it will never suspend for longer than it would have if we didn't use
    // a Suspense fallback at all.
    let loadingModuleData;
    if (typeof loading === 'object' && loading !== null && typeof loading.then === 'function') {
        const promiseForLoading = loading;
        loadingModuleData = (0, _react.use)(promiseForLoading);
    } else {
        loadingModuleData = loading;
    }
    if (loadingModuleData) {
        const loadingRsc = loadingModuleData[0];
        const loadingStyles = loadingModuleData[1];
        const loadingScripts = loadingModuleData[2];
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
            fallback: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    loadingStyles,
                    loadingScripts,
                    loadingRsc
                ]
            }),
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
function OuterLayoutRouter(param) {
    let { parallelRouterKey, error, errorStyles, errorScripts, templateStyles, templateScripts, template, notFound, forbidden, unauthorized, segmentViewBoundaries } = param;
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    if (!context) {
        throw Object.defineProperty(new Error('invariant expected layout router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: false,
            configurable: true
        });
    }
    const { parentTree, parentCacheNode, parentSegmentPath, url } = context;
    // Get the CacheNode for this segment by reading it from the parent segment's
    // child map.
    const parentParallelRoutes = parentCacheNode.parallelRoutes;
    let segmentMap = parentParallelRoutes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!segmentMap) {
        segmentMap = new Map();
        parentParallelRoutes.set(parallelRouterKey, segmentMap);
    }
    const parentTreeSegment = parentTree[0];
    const segmentPath = parentSegmentPath === null ? // the code. We should clean this up.
    [
        parallelRouterKey
    ] : parentSegmentPath.concat([
        parentTreeSegment,
        parallelRouterKey
    ]);
    // The "state" key of a segment is the one passed to React — it represents the
    // identity of the UI tree. Whenever the state key changes, the tree is
    // recreated and the state is reset. In the App Router model, search params do
    // not cause state to be lost, so two segments with the same segment path but
    // different search params should have the same state key.
    //
    // The "cache" key of a segment, however, *does* include the search params, if
    // it's possible that the segment accessed the search params on the server.
    // (This only applies to page segments; layout segments cannot access search
    // params on the server.)
    const activeTree = parentTree[1][parallelRouterKey];
    const activeSegment = activeTree[0];
    const activeStateKey = (0, _createroutercachekey.createRouterCacheKey)(activeSegment, true) // no search params
    ;
    // At each level of the route tree, not only do we render the currently
    // active segment — we also render the last N segments that were active at
    // this level inside a hidden <Activity> boundary, to preserve their state
    // if or when the user navigates to them again.
    //
    // bfcacheEntry is a linked list of FlightRouterStates.
    let bfcacheEntry = (0, _bfcache.useRouterBFCache)(activeTree, activeStateKey);
    let children = [];
    do {
        const tree = bfcacheEntry.tree;
        const stateKey = bfcacheEntry.stateKey;
        const segment = tree[0];
        const cacheKey = (0, _createroutercachekey.createRouterCacheKey)(segment);
        // Read segment path from the parallel router cache node.
        let cacheNode = segmentMap.get(cacheKey);
        if (cacheNode === undefined) {
            // When data is not available during rendering client-side we need to fetch
            // it from the server.
            const newLazyCacheNode = {
                lazyData: null,
                rsc: null,
                prefetchRsc: null,
                head: null,
                prefetchHead: null,
                parallelRoutes: new Map(),
                loading: null,
                navigatedAt: -1
            };
            // Flight data fetch kicked off during render and put into the cache.
            cacheNode = newLazyCacheNode;
            segmentMap.set(cacheKey, newLazyCacheNode);
        }
        /*
    - Error boundary
      - Only renders error boundary if error component is provided.
      - Rendered for each segment to ensure they have their own error state.
      - When gracefully degrade for bots, skip rendering error boundary.
    - Loading boundary
      - Only renders suspense boundary if loading components is provided.
      - Rendered for each segment to ensure they have their own loading state.
      - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
  */ let segmentBoundaryTriggerNode = null;
        let segmentViewStateNode = null;
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentBoundaryTriggerNode, SegmentViewStateNode } = (()=>{
                const e = new Error("Cannot find module '../../next-devtools/userspace/app/segment-explorer-node'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            const pagePrefix = (0, _apppaths.normalizeAppPath)(url);
            segmentViewStateNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentViewStateNode, {
                page: pagePrefix
            }, pagePrefix);
            segmentBoundaryTriggerNode = /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(SegmentBoundaryTriggerNode, {})
            });
        }
        // TODO: The loading module data for a segment is stored on the parent, then
        // applied to each of that parent segment's parallel route slots. In the
        // simple case where there's only one parallel route (the `children` slot),
        // this is no different from if the loading module data where stored on the
        // child directly. But I'm not sure this actually makes sense when there are
        // multiple parallel routes. It's not a huge issue because you always have
        // the option to define a narrower loading boundary for a particular slot. But
        // this sort of smells like an implementation accident to me.
        const loadingModuleData = parentCacheNode.loading;
        let child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_approutercontextsharedruntime.TemplateContext.Provider, {
            value: /*#__PURE__*/ (0, _jsxruntime.jsxs)(ScrollAndFocusHandler, {
                segmentPath: segmentPath,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
                        errorComponent: error,
                        errorStyles: errorStyles,
                        errorScripts: errorScripts,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(LoadingBoundary, {
                            loading: loadingModuleData,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary1.HTTPAccessFallbackBoundary, {
                                notFound: notFound,
                                forbidden: forbidden,
                                unauthorized: unauthorized,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)(InnerLayoutRouter, {
                                            url: url,
                                            tree: tree,
                                            cacheNode: cacheNode,
                                            segmentPath: segmentPath
                                        }),
                                        segmentBoundaryTriggerNode
                                    ]
                                })
                            })
                        })
                    }),
                    segmentViewStateNode
                ]
            }),
            children: [
                templateStyles,
                templateScripts,
                template
            ]
        }, stateKey);
        if ("TURBOPACK compile-time truthy", 1) {
            const { SegmentStateProvider } = (()=>{
                const e = new Error("Cannot find module '../../next-devtools/userspace/app/segment-explorer-node'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
            child = /*#__PURE__*/ (0, _jsxruntime.jsxs)(SegmentStateProvider, {
                children: [
                    child,
                    segmentViewBoundaries
                ]
            }, stateKey);
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        children.push(child);
        bfcacheEntry = bfcacheEntry.next;
    }while (bfcacheEntry !== null)
    return children;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/client-page.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientPageRoot", {
    enumerable: true,
    get: function() {
        return ClientPageRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function ClientPageRoot(param) {
    let { Component, searchParams, params, promises } = param;
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = (()=>{
            const e = new Error("Cannot find module '../../server/app-render/work-async-storage.external'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        let clientSearchParams;
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling searchParams in a client Page.'), "__NEXT_ERROR_CODE", {
                value: "E564",
                enumerable: false,
                configurable: true
            });
        }
        const { createSearchParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../../server/request/search-params'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        clientSearchParams = createSearchParamsFromClient(searchParams, store);
        const { createParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../../server/request/params'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    } else {
        const { createRenderSearchParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../request/search-params.browser'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const clientSearchParams = createRenderSearchParamsFromClient(searchParams);
        const { createRenderParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../request/params.browser'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            params: clientParams,
            searchParams: clientSearchParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-page.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/client-segment.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClientSegmentRoot", {
    enumerable: true,
    get: function() {
        return ClientSegmentRoot;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/shared/lib/invariant-error.js [app-client] (ecmascript)");
function ClientSegmentRoot(param) {
    let { Component, slots, params, promise } = param;
    if (typeof window === 'undefined') {
        const { workAsyncStorage } = (()=>{
            const e = new Error("Cannot find module '../../server/app-render/work-async-storage.external'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        let clientParams;
        // We are going to instrument the searchParams prop with tracking for the
        // appropriate context. We wrap differently in prerendering vs rendering
        const store = workAsyncStorage.getStore();
        if (!store) {
            throw Object.defineProperty(new _invarianterror.InvariantError('Expected workStore to exist when handling params in a client segment such as a Layout or Template.'), "__NEXT_ERROR_CODE", {
                value: "E600",
                enumerable: false,
                configurable: true
            });
        }
        const { createParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../../server/request/params'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        clientParams = createParamsFromClient(params, store);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    } else {
        const { createRenderParamsFromClient } = (()=>{
            const e = new Error("Cannot find module '../request/params.browser'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        const clientParams = createRenderParamsFromClient(params);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Component, {
            ...slots,
            params: clientParams
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client-segment.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/lib/metadata/generate/icon-mark.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconMark", {
    enumerable: true,
    get: function() {
        return IconMark;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const IconMark = ()=>{
    if (typeof window !== 'undefined') {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
        name: "\xabnxt-icon\xbb"
    });
}; //# sourceMappingURL=icon-mark.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/metadata/async-metadata.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AsyncMetadataOutlet", {
    enumerable: true,
    get: function() {
        return AsyncMetadataOutlet;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function MetadataOutlet(param) {
    let { promise } = param;
    const { error, digest } = (0, _react.use)(promise);
    if (error) {
        if (digest) {
            // The error will lose its original digest after passing from server layer to client layer；
            // We recover the digest property here to override the React created one if original digest exists.
            ;
            error.digest = digest;
        }
        throw error;
    }
    return null;
}
function AsyncMetadataOutlet(param) {
    let { promise } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(MetadataOutlet, {
            promise: promise
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=async-metadata.js.map
}),
]);

//# sourceMappingURL=85a19_next_dist_f2114231._.js.map