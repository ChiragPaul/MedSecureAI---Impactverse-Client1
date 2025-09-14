(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/logout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Logout() {
    _s();
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Logout.useEffect": ()=>{
            // Clear user session and localStorage keys
            localStorage.removeItem("userId");
            localStorage.removeItem("role");
            localStorage.removeItem("userName");
            localStorage.removeItem("isLoggedIn");
            // Redirect to home page after 1.2s
            setTimeout({
                "Logout.useEffect": ()=>r.replace("/")
            }["Logout.useEffect"], 1200);
        }
    }["Logout.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl shadow text-center w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold",
                    children: "You have been logged out"
                }, void 0, false, {
                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/logout.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 mt-2",
                    children: "Redirecting to home..."
                }, void 0, false, {
                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/logout.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/logout.js",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/logout.js",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Logout, "QJeeGVIraBj2wQY34J/mf+8Wyhg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Logout;
var _c;
__turbopack_context__.k.register(_c, "Logout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Desktop_MedSecureAI---Impactverse-Client1_frontend_2dfc1991._.js.map