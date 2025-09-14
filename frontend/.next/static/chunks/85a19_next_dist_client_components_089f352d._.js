(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/invariant-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _invarianterror = (()=>{
    const e = new Error("Cannot find module '../../shared/lib/invariant-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
]);

//# sourceMappingURL=85a19_next_dist_client_components_089f352d._.js.map