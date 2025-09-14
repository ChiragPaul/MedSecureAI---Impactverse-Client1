module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/BrandAnimation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function BrandAnimation({ onClose }) {
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!show) {
            if (onClose) onClose();
        }
    }, [
        show,
        onClose
    ]);
    return show ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.95)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.7s"
        },
        onClick: ()=>setShow(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    color: "#22c55e",
                    fontWeight: "bold",
                    fontSize: "7vw",
                    textShadow: "0 0 64px #22c55e, 0 0 32px #001a66",
                    animation: "zoomInBrand 1.2s cubic-bezier(.4,2,.3,1)"
                },
                children: "MedSecure AI"
            }, void 0, false, {
                fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/BrandAnimation.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomInBrand {
          0% { transform: scale(0.1) translateY(100vh); opacity: 0; }
          60% { transform: scale(1.2) translateY(0); opacity: 1; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/BrandAnimation.js",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/BrandAnimation.js",
        lineNumber: 12,
        columnNumber: 5
    }, this) : null;
}
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NavbarLoggedOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$components$2f$BrandAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/BrandAnimation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function NavbarLoggedOut() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [darkMode, setDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showBrandAnim, setShowBrandAnim] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    const links = [
        {
            href: "/",
            label: "Home"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showBrandAnim && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$components$2f$BrandAnimation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowBrandAnim(false)
            }, void 0, false, {
                fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "bg-night border-b border-brand/20 px-6 py-4 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-brand",
                        style: {
                            fontFamily: "Arial, Helvetica, sans-serif",
                            cursor: "pointer"
                        },
                        onDoubleClick: ()=>setShowBrandAnim(true),
                        children: "MedSecure AI"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black rounded-full px-8 py-2 flex space-x-8 shadow-md",
                            style: {
                                fontFamily: "Arial, Helvetica, sans-serif"
                            },
                            children: links.map((link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `font-bold text-lg flex items-center gap-2 transition navbar-feature-link ${pathname === link.href ? "text-brand border-b-2 border-brand" : "text-gray-100 hover:text-brand"} pb-1`,
                                    style: {
                                        fontFamily: "Arial, Helvetica, sans-serif"
                                    },
                                    children: [
                                        idx === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 10L10 4L17 10",
                                                    stroke: "#00ff88",
                                                    strokeWidth: "2",
                                                    fill: "none"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                                                    lineNumber: 65,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "6",
                                                    y: "10",
                                                    width: "8",
                                                    height: "6",
                                                    fill: "#00ff88"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                                                    lineNumber: 71,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this),
                                        link.label
                                    ]
                                }, link.href, true, {
                                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/log-att/login",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-4 py-2 bg-brand hover:bg-brand-dark rounded-xl shadow-glow transition",
                            style: {
                                fontFamily: "Arial, Helvetica, sans-serif"
                            },
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$components$2f$NavbarLoggedOut$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/components/NavbarLoggedOut.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Home() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const userId = localStorage.getItem("userId");
        if (userId) {
            router.replace("/dashboard");
        }
    }, [
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-night text-white flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$components$2f$NavbarLoggedOut$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-grow flex items-center justify-center px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-brand to-brand/80 bg-clip-text text-transparent",
                            children: "MedSecure AI"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed",
                            children: "Smart medicine management for rural healthcare. We forecast demand accurately and track supply transparently so essential medicines are available when and where they are needed."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push("/log-att/login"),
                                    className: "px-8 py-4 bg-brand hover:bg-brand-dark rounded-xl font-bold text-lg transition shadow-glow",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push("/about-us"),
                                    className: "px-8 py-4 border border-brand/50 hover:bg-brand/10 rounded-xl font-bold text-lg transition",
                                    children: "Learn More"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/page.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__098fcd47._.js.map