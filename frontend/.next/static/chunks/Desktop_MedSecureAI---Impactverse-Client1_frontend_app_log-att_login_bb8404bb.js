(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/router.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Login() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("chemist"); // dropdown
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    role
                })
            });
            const data = await res.json();
            setLoading(false);
            if (data.success) {
                // Save userId and role
                localStorage.setItem("userId", data.user._id);
                localStorage.setItem("role", data.user.role);
                r.push("/dashboard"); // redirect to dashboard
            } else {
                alert(data.message);
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
            alert("Login failed");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleLogin,
            className: "bg-white p-6 rounded-xl shadow space-y-4 w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold text-center",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "Email",
                    value: email,
                    onChange: (e)=>setEmail(e.target.value),
                    className: "w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value),
                    className: "w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: role,
                    onChange: (e)=>setRole(e.target.value),
                    className: "w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "chemist",
                            children: "Chemist"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "supplier",
                            children: "Supplier"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: loading,
                    className: "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
                    children: loading ? "Logging in..." : "Login"
                }, void 0, false, {
                    fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/app/log-att/login.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(Login, "NSVyRVjnx/3SwVjOdyCFhLT/szg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Login;
var _c;
__turbopack_context__.k.register(_c, "Login");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_MedSecureAI---Impactverse-Client1_frontend_app_log-att_login_bb8404bb.js.map