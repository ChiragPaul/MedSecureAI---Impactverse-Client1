module.exports = [
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is no backslash
 * escaping slashes in the path. Example:
 *  - `foo\/bar\/baz` -> `foo/bar/baz`
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathSep", {
    enumerable: true,
    get: function() {
        return normalizePathSep;
    }
});
function normalizePathSep(path) {
    return path.replace(/\\/g, '/');
} //# sourceMappingURL=normalize-path-sep.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureLeadingSlash", {
    enumerable: true,
    get: function() {
        return ensureLeadingSlash;
    }
});
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : "/" + path;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_SEGMENT_KEY: null,
    PAGE_SEGMENT_KEY: null,
    addSearchParamsIfPageSegment: null,
    isGroupSegment: null,
    isParallelRouteSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_SEGMENT_KEY: function() {
        return DEFAULT_SEGMENT_KEY;
    },
    PAGE_SEGMENT_KEY: function() {
        return PAGE_SEGMENT_KEY;
    },
    addSearchParamsIfPageSegment: function() {
        return addSearchParamsIfPageSegment;
    },
    isGroupSegment: function() {
        return isGroupSegment;
    },
    isParallelRouteSegment: function() {
        return isParallelRouteSegment;
    }
});
function isGroupSegment(segment) {
    // Use array[0] for performant purpose
    return segment[0] === '(' && segment.endsWith(')');
}
function isParallelRouteSegment(segment) {
    return segment.startsWith('@') && segment !== '@children';
}
function addSearchParamsIfPageSegment(segment, searchParams) {
    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
    if (isPageSegment) {
        const stringifiedQuery = JSON.stringify(searchParams);
        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
    }
    return segment;
}
const PAGE_SEGMENT_KEY = '__PAGE__';
const DEFAULT_SEGMENT_KEY = '__DEFAULT__'; //# sourceMappingURL=segment.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    normalizeAppPath: null,
    normalizeRscURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    normalizeAppPath: function() {
        return normalizeAppPath;
    },
    normalizeRscURL: function() {
        return normalizeRscURL;
    }
});
const _ensureleadingslash = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)");
function normalizeAppPath(route) {
    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, _segment.isGroupSegment)(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return pathname + "/" + segment;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/is-app-route-route.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isAppRouteRoute", {
    enumerable: true,
    get: function() {
        return isAppRouteRoute;
    }
});
function isAppRouteRoute(route) {
    return route.endsWith('/route');
} //# sourceMappingURL=is-app-route-route.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/metadata/is-metadata-route.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DEFAULT_METADATA_ROUTE_EXTENSIONS: null,
    STATIC_METADATA_IMAGES: null,
    getExtensionRegexString: null,
    isMetadataPage: null,
    isMetadataRoute: null,
    isMetadataRouteFile: null,
    isStaticMetadataRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DEFAULT_METADATA_ROUTE_EXTENSIONS: function() {
        return DEFAULT_METADATA_ROUTE_EXTENSIONS;
    },
    STATIC_METADATA_IMAGES: function() {
        return STATIC_METADATA_IMAGES;
    },
    getExtensionRegexString: function() {
        return getExtensionRegexString;
    },
    isMetadataPage: function() {
        return isMetadataPage;
    },
    isMetadataRoute: function() {
        return isMetadataRoute;
    },
    isMetadataRouteFile: function() {
        return isMetadataRouteFile;
    },
    isStaticMetadataRoute: function() {
        return isStaticMetadataRoute;
    }
});
const _normalizepathsep = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _isapprouteroute = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/is-app-route-route.js [app-rsc] (ecmascript)");
const STATIC_METADATA_IMAGES = {
    icon: {
        filename: 'icon',
        extensions: [
            'ico',
            'jpg',
            'jpeg',
            'png',
            'svg'
        ]
    },
    apple: {
        filename: 'apple-icon',
        extensions: [
            'jpg',
            'jpeg',
            'png'
        ]
    },
    favicon: {
        filename: 'favicon',
        extensions: [
            'ico'
        ]
    },
    openGraph: {
        filename: 'opengraph-image',
        extensions: [
            'jpg',
            'jpeg',
            'png',
            'gif'
        ]
    },
    twitter: {
        filename: 'twitter-image',
        extensions: [
            'jpg',
            'jpeg',
            'png',
            'gif'
        ]
    }
};
const DEFAULT_METADATA_ROUTE_EXTENSIONS = [
    'js',
    'jsx',
    'ts',
    'tsx'
];
const getExtensionRegexString = (staticExtensions, dynamicExtensions)=>{
    // If there's no possible multi dynamic routes, will not match any <name>[].<ext> files
    if (!dynamicExtensions || dynamicExtensions.length === 0) {
        return `(\\.(?:${staticExtensions.join('|')}))`;
    }
    return `(?:\\.(${staticExtensions.join('|')})|(\\.(${dynamicExtensions.join('|')})))`;
};
function isMetadataRouteFile(appDirRelativePath, pageExtensions, strictlyMatchExtensions) {
    // End with the extension or optional to have the extension
    // When strictlyMatchExtensions is true, it's used for match file path;
    // When strictlyMatchExtensions, the dynamic extension is skipped but
    // static extension is kept, which is usually used for matching route path.
    const trailingMatcher = (strictlyMatchExtensions ? '' : '?') + '$';
    // Match the optional variants like /opengraph-image2, /icon-a102f4.png, etc.
    const variantsMatcher = '\\d?';
    // The -\w{6} is the suffix that normalized from group routes;
    const groupSuffix = strictlyMatchExtensions ? '' : '(-\\w{6})?';
    const suffixMatcher = `${variantsMatcher}${groupSuffix}`;
    const metadataRouteFilesRegex = [
        new RegExp(`^[\\\\/]robots${getExtensionRegexString(pageExtensions.concat('txt'), null)}${trailingMatcher}`),
        new RegExp(`^[\\\\/]manifest${getExtensionRegexString(pageExtensions.concat('webmanifest', 'json'), null)}${trailingMatcher}`),
        new RegExp(`^[\\\\/]favicon\\.ico$`),
        new RegExp(`[\\\\/]sitemap${getExtensionRegexString([
            'xml'
        ], pageExtensions)}${trailingMatcher}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.icon.filename}${suffixMatcher}${getExtensionRegexString(STATIC_METADATA_IMAGES.icon.extensions, pageExtensions)}${trailingMatcher}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.apple.filename}${suffixMatcher}${getExtensionRegexString(STATIC_METADATA_IMAGES.apple.extensions, pageExtensions)}${trailingMatcher}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.openGraph.filename}${suffixMatcher}${getExtensionRegexString(STATIC_METADATA_IMAGES.openGraph.extensions, pageExtensions)}${trailingMatcher}`),
        new RegExp(`[\\\\/]${STATIC_METADATA_IMAGES.twitter.filename}${suffixMatcher}${getExtensionRegexString(STATIC_METADATA_IMAGES.twitter.extensions, pageExtensions)}${trailingMatcher}`)
    ];
    const normalizedAppDirRelativePath = (0, _normalizepathsep.normalizePathSep)(appDirRelativePath);
    const matched = metadataRouteFilesRegex.some((r)=>r.test(normalizedAppDirRelativePath));
    return matched;
}
function isStaticMetadataRoute(route) {
    // extract ext with regex
    const pathname = route.replace(/\/route$/, '');
    const matched = (0, _isapprouteroute.isAppRouteRoute)(route) && isMetadataRouteFile(pathname, [], true) && // These routes can either be built by static or dynamic entrypoints,
    // so we assume they're dynamic
    pathname !== '/robots.txt' && pathname !== '/manifest.webmanifest' && !pathname.endsWith('/sitemap.xml');
    return matched;
}
function isMetadataPage(page) {
    const matched = !(0, _isapprouteroute.isAppRouteRoute)(page) && isMetadataRouteFile(page, [], false);
    return matched;
}
function isMetadataRoute(route) {
    let page = (0, _apppaths.normalizeAppPath)(route).replace(/^\/?app\//, '') // Remove the dynamic route id
    .replace('/[__metadata_id__]', '') // Remove the /route suffix
    .replace(/\/route$/, '');
    if (page[0] !== '/') page = '/' + page;
    const matched = (0, _isapprouteroute.isAppRouteRoute)(route) && isMetadataRouteFile(page, [], false);
    return matched;
} //# sourceMappingURL=is-metadata-route.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/isomorphic/path.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This module is for next.js server internal usage of path module.
 * It will use native path module for nodejs runtime.
 * It will use path-browserify polyfill for edge runtime.
 */ let path;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
}
module.exports = path; //# sourceMappingURL=path.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizeLocalePath", {
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
});
/**
 * A cache of lowercased locales for each list of locales. This is stored as a
 * WeakMap so if the locales are garbage collected, the cache entry will be
 * removed as well.
 */ const cache = new WeakMap();
function normalizeLocalePath(pathname, locales) {
    // If locales is undefined, return the pathname as is.
    if (!locales) return {
        pathname
    };
    // Get the cached lowercased locales or create a new cache entry.
    let lowercasedLocales = cache.get(locales);
    if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale)=>locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
    }
    let detectedLocale;
    // The first segment will be empty, because it has a leading `/`. If
    // there is no further segment, there is no locale (or it's the default).
    const segments = pathname.split('/', 2);
    // If there's no second segment (ie, the pathname is just `/`), there's no
    // locale.
    if (!segments[1]) return {
        pathname
    };
    // The second segment will contain the locale part if any.
    const segment = segments[1].toLowerCase();
    // See if the segment matches one of the locales. If it doesn't, there is
    // no locale (or it's the default).
    const index = lowercasedLocales.indexOf(segment);
    if (index < 0) return {
        pathname
    };
    // Return the case-sensitive locale.
    detectedLocale = locales[index];
    // Remove the `/${locale}` part of the pathname.
    pathname = pathname.slice(detectedLocale.length + 1) || '/';
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/path-to-regexp") + "/";
    var e = {};
    (()=>{
        var n = e;
        Object.defineProperty(n, "__esModule", {
            value: true
        });
        n.pathToRegexp = n.tokensToRegexp = n.regexpToFunction = n.match = n.tokensToFunction = n.compile = n.parse = void 0;
        function lexer(e) {
            var n = [];
            var r = 0;
            while(r < e.length){
                var t = e[r];
                if (t === "*" || t === "+" || t === "?") {
                    n.push({
                        type: "MODIFIER",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "\\") {
                    n.push({
                        type: "ESCAPED_CHAR",
                        index: r++,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "{") {
                    n.push({
                        type: "OPEN",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === "}") {
                    n.push({
                        type: "CLOSE",
                        index: r,
                        value: e[r++]
                    });
                    continue;
                }
                if (t === ":") {
                    var a = "";
                    var i = r + 1;
                    while(i < e.length){
                        var o = e.charCodeAt(i);
                        if (o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 || o === 95) {
                            a += e[i++];
                            continue;
                        }
                        break;
                    }
                    if (!a) throw new TypeError("Missing parameter name at ".concat(r));
                    n.push({
                        type: "NAME",
                        index: r,
                        value: a
                    });
                    r = i;
                    continue;
                }
                if (t === "(") {
                    var c = 1;
                    var f = "";
                    var i = r + 1;
                    if (e[i] === "?") {
                        throw new TypeError('Pattern cannot start with "?" at '.concat(i));
                    }
                    while(i < e.length){
                        if (e[i] === "\\") {
                            f += e[i++] + e[i++];
                            continue;
                        }
                        if (e[i] === ")") {
                            c--;
                            if (c === 0) {
                                i++;
                                break;
                            }
                        } else if (e[i] === "(") {
                            c++;
                            if (e[i + 1] !== "?") {
                                throw new TypeError("Capturing groups are not allowed at ".concat(i));
                            }
                        }
                        f += e[i++];
                    }
                    if (c) throw new TypeError("Unbalanced pattern at ".concat(r));
                    if (!f) throw new TypeError("Missing pattern at ".concat(r));
                    n.push({
                        type: "PATTERN",
                        index: r,
                        value: f
                    });
                    r = i;
                    continue;
                }
                n.push({
                    type: "CHAR",
                    index: r,
                    value: e[r++]
                });
            }
            n.push({
                type: "END",
                index: r,
                value: ""
            });
            return n;
        }
        function parse(e, n) {
            if (n === void 0) {
                n = {};
            }
            var r = lexer(e);
            var t = n.prefixes, a = t === void 0 ? "./" : t, i = n.delimiter, o = i === void 0 ? "/#?" : i;
            var c = [];
            var f = 0;
            var u = 0;
            var p = "";
            var tryConsume = function(e) {
                if (u < r.length && r[u].type === e) return r[u++].value;
            };
            var mustConsume = function(e) {
                var n = tryConsume(e);
                if (n !== undefined) return n;
                var t = r[u], a = t.type, i = t.index;
                throw new TypeError("Unexpected ".concat(a, " at ").concat(i, ", expected ").concat(e));
            };
            var consumeText = function() {
                var e = "";
                var n;
                while(n = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")){
                    e += n;
                }
                return e;
            };
            var isSafe = function(e) {
                for(var n = 0, r = o; n < r.length; n++){
                    var t = r[n];
                    if (e.indexOf(t) > -1) return true;
                }
                return false;
            };
            var safePattern = function(e) {
                var n = c[c.length - 1];
                var r = e || (n && typeof n === "string" ? n : "");
                if (n && !r) {
                    throw new TypeError('Must have text between two parameters, missing text after "'.concat(n.name, '"'));
                }
                if (!r || isSafe(r)) return "[^".concat(escapeString(o), "]+?");
                return "(?:(?!".concat(escapeString(r), ")[^").concat(escapeString(o), "])+?");
            };
            while(u < r.length){
                var v = tryConsume("CHAR");
                var s = tryConsume("NAME");
                var d = tryConsume("PATTERN");
                if (s || d) {
                    var g = v || "";
                    if (a.indexOf(g) === -1) {
                        p += g;
                        g = "";
                    }
                    if (p) {
                        c.push(p);
                        p = "";
                    }
                    c.push({
                        name: s || f++,
                        prefix: g,
                        suffix: "",
                        pattern: d || safePattern(g),
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                var x = v || tryConsume("ESCAPED_CHAR");
                if (x) {
                    p += x;
                    continue;
                }
                if (p) {
                    c.push(p);
                    p = "";
                }
                var h = tryConsume("OPEN");
                if (h) {
                    var g = consumeText();
                    var l = tryConsume("NAME") || "";
                    var m = tryConsume("PATTERN") || "";
                    var T = consumeText();
                    mustConsume("CLOSE");
                    c.push({
                        name: l || (m ? f++ : ""),
                        pattern: l && !m ? safePattern(g) : m,
                        prefix: g,
                        suffix: T,
                        modifier: tryConsume("MODIFIER") || ""
                    });
                    continue;
                }
                mustConsume("END");
            }
            return c;
        }
        n.parse = parse;
        function compile(e, n) {
            return tokensToFunction(parse(e, n), n);
        }
        n.compile = compile;
        function tokensToFunction(e, n) {
            if (n === void 0) {
                n = {};
            }
            var r = flags(n);
            var t = n.encode, a = t === void 0 ? function(e) {
                return e;
            } : t, i = n.validate, o = i === void 0 ? true : i;
            var c = e.map(function(e) {
                if (typeof e === "object") {
                    return new RegExp("^(?:".concat(e.pattern, ")$"), r);
                }
            });
            return function(n) {
                var r = "";
                for(var t = 0; t < e.length; t++){
                    var i = e[t];
                    if (typeof i === "string") {
                        r += i;
                        continue;
                    }
                    var f = n ? n[i.name] : undefined;
                    var u = i.modifier === "?" || i.modifier === "*";
                    var p = i.modifier === "*" || i.modifier === "+";
                    if (Array.isArray(f)) {
                        if (!p) {
                            throw new TypeError('Expected "'.concat(i.name, '" to not repeat, but got an array'));
                        }
                        if (f.length === 0) {
                            if (u) continue;
                            throw new TypeError('Expected "'.concat(i.name, '" to not be empty'));
                        }
                        for(var v = 0; v < f.length; v++){
                            var s = a(f[v], i);
                            if (o && !c[t].test(s)) {
                                throw new TypeError('Expected all "'.concat(i.name, '" to match "').concat(i.pattern, '", but got "').concat(s, '"'));
                            }
                            r += i.prefix + s + i.suffix;
                        }
                        continue;
                    }
                    if (typeof f === "string" || typeof f === "number") {
                        var s = a(String(f), i);
                        if (o && !c[t].test(s)) {
                            throw new TypeError('Expected "'.concat(i.name, '" to match "').concat(i.pattern, '", but got "').concat(s, '"'));
                        }
                        r += i.prefix + s + i.suffix;
                        continue;
                    }
                    if (u) continue;
                    var d = p ? "an array" : "a string";
                    throw new TypeError('Expected "'.concat(i.name, '" to be ').concat(d));
                }
                return r;
            };
        }
        n.tokensToFunction = tokensToFunction;
        function match(e, n) {
            var r = [];
            var t = pathToRegexp(e, r, n);
            return regexpToFunction(t, r, n);
        }
        n.match = match;
        function regexpToFunction(e, n, r) {
            if (r === void 0) {
                r = {};
            }
            var t = r.decode, a = t === void 0 ? function(e) {
                return e;
            } : t;
            return function(r) {
                var t = e.exec(r);
                if (!t) return false;
                var i = t[0], o = t.index;
                var c = Object.create(null);
                var _loop_1 = function(e) {
                    if (t[e] === undefined) return "continue";
                    var r = n[e - 1];
                    if (r.modifier === "*" || r.modifier === "+") {
                        c[r.name] = t[e].split(r.prefix + r.suffix).map(function(e) {
                            return a(e, r);
                        });
                    } else {
                        c[r.name] = a(t[e], r);
                    }
                };
                for(var f = 1; f < t.length; f++){
                    _loop_1(f);
                }
                return {
                    path: i,
                    index: o,
                    params: c
                };
            };
        }
        n.regexpToFunction = regexpToFunction;
        function escapeString(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        }
        function flags(e) {
            return e && e.sensitive ? "" : "i";
        }
        function regexpToRegexp(e, n) {
            if (!n) return e;
            var r = /\((?:\?<(.*?)>)?(?!\?)/g;
            var t = 0;
            var a = r.exec(e.source);
            while(a){
                n.push({
                    name: a[1] || t++,
                    prefix: "",
                    suffix: "",
                    modifier: "",
                    pattern: ""
                });
                a = r.exec(e.source);
            }
            return e;
        }
        function arrayToRegexp(e, n, r) {
            var t = e.map(function(e) {
                return pathToRegexp(e, n, r).source;
            });
            return new RegExp("(?:".concat(t.join("|"), ")"), flags(r));
        }
        function stringToRegexp(e, n, r) {
            return tokensToRegexp(parse(e, r), n, r);
        }
        function tokensToRegexp(e, n, r) {
            if (r === void 0) {
                r = {};
            }
            var t = r.strict, a = t === void 0 ? false : t, i = r.start, o = i === void 0 ? true : i, c = r.end, f = c === void 0 ? true : c, u = r.encode, p = u === void 0 ? function(e) {
                return e;
            } : u, v = r.delimiter, s = v === void 0 ? "/#?" : v, d = r.endsWith, g = d === void 0 ? "" : d;
            var x = "[".concat(escapeString(g), "]|$");
            var h = "[".concat(escapeString(s), "]");
            var l = o ? "^" : "";
            for(var m = 0, T = e; m < T.length; m++){
                var E = T[m];
                if (typeof E === "string") {
                    l += escapeString(p(E));
                } else {
                    var w = escapeString(p(E.prefix));
                    var y = escapeString(p(E.suffix));
                    if (E.pattern) {
                        if (n) n.push(E);
                        if (w || y) {
                            if (E.modifier === "+" || E.modifier === "*") {
                                var R = E.modifier === "*" ? "?" : "";
                                l += "(?:".concat(w, "((?:").concat(E.pattern, ")(?:").concat(y).concat(w, "(?:").concat(E.pattern, "))*)").concat(y, ")").concat(R);
                            } else {
                                l += "(?:".concat(w, "(").concat(E.pattern, ")").concat(y, ")").concat(E.modifier);
                            }
                        } else {
                            if (E.modifier === "+" || E.modifier === "*") {
                                throw new TypeError('Can not repeat "'.concat(E.name, '" without a prefix and suffix'));
                            }
                            l += "(".concat(E.pattern, ")").concat(E.modifier);
                        }
                    } else {
                        l += "(?:".concat(w).concat(y, ")").concat(E.modifier);
                    }
                }
            }
            if (f) {
                if (!a) l += "".concat(h, "?");
                l += !r.endsWith ? "$" : "(?=".concat(x, ")");
            } else {
                var A = e[e.length - 1];
                var _ = typeof A === "string" ? h.indexOf(A[A.length - 1]) > -1 : A === undefined;
                if (!a) {
                    l += "(?:".concat(h, "(?=").concat(x, "))?");
                }
                if (!_) {
                    l += "(?=".concat(h, "|").concat(x, ")");
                }
            }
            return new RegExp(l, flags(r));
        }
        n.tokensToRegexp = tokensToRegexp;
        function pathToRegexp(e, n, r) {
            if (e instanceof RegExp) return regexpToRegexp(e, n);
            if (Array.isArray(e)) return arrayToRegexp(e, n, r);
            return stringToRegexp(e, n, r);
        }
        n.pathToRegexp = pathToRegexp;
    })();
    module.exports = e;
})();
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/path-match.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getPathMatch", {
    enumerable: true,
    get: function() {
        return getPathMatch;
    }
});
const _pathtoregexp = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
function getPathMatch(path, options) {
    const keys = [];
    const regexp = (0, _pathtoregexp.pathToRegexp)(path, keys, {
        delimiter: '/',
        sensitive: typeof (options == null ? void 0 : options.sensitive) === 'boolean' ? options.sensitive : false,
        strict: options == null ? void 0 : options.strict
    });
    const matcher = (0, _pathtoregexp.regexpToFunction)((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
    /**
   * A matcher function that will check if a given pathname matches the path
   * given in the builder function. When the path does not match it will return
   * `false` but if it does it will return an object with the matched params
   * merged with the params provided in the second argument.
   */ return (pathname, params)=>{
        // If no pathname is provided it's not a match.
        if (typeof pathname !== 'string') return false;
        const match = matcher(pathname);
        // If the path did not match `false` will be returned.
        if (!match) return false;
        /**
     * If unnamed params are not allowed they must be removed from
     * the matched parameters. path-to-regexp uses "string" for named and
     * "number" for unnamed parameters.
     */ if (options == null ? void 0 : options.removeUnnamedParams) {
            for (const key of keys){
                if (typeof key.name === 'number') {
                    delete match.params[key.name];
                }
            }
        }
        return {
            ...params,
            ...match.params
        };
    };
} //# sourceMappingURL=path-match.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_SUFFIX: null,
    APP_DIR_ALIAS: null,
    CACHE_ONE_YEAR: null,
    DOT_NEXT_ALIAS: null,
    ESLINT_DEFAULT_DIRS: null,
    GSP_NO_RETURNED_VALUE: null,
    GSSP_COMPONENT_MEMBER_ERROR: null,
    GSSP_NO_RETURNED_VALUE: null,
    HTML_CONTENT_TYPE_HEADER: null,
    INFINITE_CACHE: null,
    INSTRUMENTATION_HOOK_FILENAME: null,
    JSON_CONTENT_TYPE_HEADER: null,
    MATCHED_PATH_HEADER: null,
    MIDDLEWARE_FILENAME: null,
    MIDDLEWARE_LOCATION_REGEXP: null,
    NEXT_BODY_SUFFIX: null,
    NEXT_CACHE_IMPLICIT_TAG_ID: null,
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: null,
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: null,
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: null,
    NEXT_CACHE_TAGS_HEADER: null,
    NEXT_CACHE_TAG_MAX_ITEMS: null,
    NEXT_CACHE_TAG_MAX_LENGTH: null,
    NEXT_DATA_SUFFIX: null,
    NEXT_INTERCEPTION_MARKER_PREFIX: null,
    NEXT_META_SUFFIX: null,
    NEXT_QUERY_PARAM_PREFIX: null,
    NEXT_RESUME_HEADER: null,
    NON_STANDARD_NODE_ENV: null,
    PAGES_DIR_ALIAS: null,
    PRERENDER_REVALIDATE_HEADER: null,
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: null,
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: null,
    ROOT_DIR_ALIAS: null,
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: null,
    RSC_ACTION_ENCRYPTION_ALIAS: null,
    RSC_ACTION_PROXY_ALIAS: null,
    RSC_ACTION_VALIDATE_ALIAS: null,
    RSC_CACHE_WRAPPER_ALIAS: null,
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: null,
    RSC_MOD_REF_PROXY_ALIAS: null,
    RSC_PREFETCH_SUFFIX: null,
    RSC_SEGMENTS_DIR_SUFFIX: null,
    RSC_SEGMENT_SUFFIX: null,
    RSC_SUFFIX: null,
    SERVER_PROPS_EXPORT_ERROR: null,
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: null,
    SERVER_PROPS_SSG_CONFLICT: null,
    SERVER_RUNTIME: null,
    SSG_FALLBACK_EXPORT_ERROR: null,
    SSG_GET_INITIAL_PROPS_CONFLICT: null,
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: null,
    TEXT_PLAIN_CONTENT_TYPE_HEADER: null,
    UNSTABLE_REVALIDATE_RENAME_ERROR: null,
    WEBPACK_LAYERS: null,
    WEBPACK_RESOURCE_QUERIES: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
    },
    APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
    },
    CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
    },
    DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
    },
    ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
    },
    GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
    },
    GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
    },
    GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
    },
    HTML_CONTENT_TYPE_HEADER: function() {
        return HTML_CONTENT_TYPE_HEADER;
    },
    INFINITE_CACHE: function() {
        return INFINITE_CACHE;
    },
    INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
    },
    JSON_CONTENT_TYPE_HEADER: function() {
        return JSON_CONTENT_TYPE_HEADER;
    },
    MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
    },
    MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
    },
    MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
    },
    NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
    },
    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
    },
    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
    },
    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
    },
    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
    },
    NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
    },
    NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
    },
    NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
    },
    NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
    },
    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
    },
    NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
    },
    NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
    },
    NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
    },
    NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
    },
    PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
    },
    PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
    },
    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
    },
    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
    },
    ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
    },
    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
    },
    RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
    },
    RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
    },
    RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
    },
    RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
    },
    RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
    },
    RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
    },
    RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
    },
    RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
    },
    RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
    },
    RSC_SUFFIX: function() {
        return RSC_SUFFIX;
    },
    SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
    },
    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
    },
    SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
    },
    SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
    },
    SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
    },
    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
    },
    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
    },
    TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return TEXT_PLAIN_CONTENT_TYPE_HEADER;
    },
    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
    },
    WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
    },
    WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
    }
});
const TEXT_PLAIN_CONTENT_TYPE_HEADER = 'text/plain';
const HTML_CONTENT_TYPE_HEADER = 'text/html; charset=utf-8';
const JSON_CONTENT_TYPE_HEADER = 'application/json; charset=utf-8';
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 128;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = 'private-next-rsc-track-dynamic-import';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The Node.js bundle layer for the API routes.
   */ apiNode: 'api-node',
    /**
   * The Edge Lite bundle layer for the API routes.
   */ apiEdge: 'api-edge',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser',
    /**
   * The browser client bundle layer for Pages directory.
   */ pagesDirBrowser: 'pages-dir-browser',
    /**
   * The Edge Lite bundle layer for Pages directory.
   */ pagesDirEdge: 'pages-dir-edge',
    /**
   * The Node.js bundle layer for Pages directory.
   */ pagesDirNode: 'pages-dir-node'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.apiNode,
            WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
}; //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    INTERCEPTION_ROUTE_MARKERS: null,
    extractInterceptionRouteInformation: null,
    isInterceptionRouteAppPath: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    INTERCEPTION_ROUTE_MARKERS: function() {
        return INTERCEPTION_ROUTE_MARKERS;
    },
    extractInterceptionRouteInformation: function() {
        return extractInterceptionRouteInformation;
    },
    isInterceptionRouteAppPath: function() {
        return isInterceptionRouteAppPath;
    }
});
const _apppaths = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute, marker, interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = "/" + interceptedRoute;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/escape-regexp.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// regexp is based on https://github.com/sindresorhus/escape-string-regexp
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "escapeStringRegexp", {
    enumerable: true,
    get: function() {
        return escapeStringRegexp;
    }
});
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    PARAMETER_PATTERN: null,
    getDynamicParam: null,
    parseMatchedParameter: null,
    parseParameter: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PARAMETER_PATTERN: function() {
        return PARAMETER_PATTERN;
    },
    getDynamicParam: function() {
        return getDynamicParam;
    },
    parseMatchedParameter: function() {
        return parseMatchedParameter;
    },
    parseParameter: function() {
        return parseParameter;
    }
});
function getDynamicParam(params, segmentKey, dynamicParamType, pagePath, fallbackRouteParams) {
    let value = params[segmentKey];
    if (fallbackRouteParams && fallbackRouteParams.has(segmentKey)) {
        value = fallbackRouteParams.get(segmentKey);
    } else if (Array.isArray(value)) {
        value = value.map((i)=>encodeURIComponent(i));
    } else if (typeof value === 'string') {
        value = encodeURIComponent(value);
    }
    if (!value) {
        const isCatchall = dynamicParamType === 'c';
        const isOptionalCatchall = dynamicParamType === 'oc';
        if (isCatchall || isOptionalCatchall) {
            // handle the case where an optional catchall does not have a value,
            // e.g. `/dashboard/[[...slug]]` when requesting `/dashboard`
            if (isOptionalCatchall) {
                return {
                    param: segmentKey,
                    value: null,
                    type: dynamicParamType,
                    treeSegment: [
                        segmentKey,
                        '',
                        dynamicParamType
                    ]
                };
            }
            // handle the case where a catchall or optional catchall does not have a value,
            // e.g. `/foo/bar/hello` and `@slot/[...catchall]` or `@slot/[[...catchall]]` is matched
            value = pagePath.split('/') // remove the first empty string
            .slice(1) // replace any dynamic params with the actual values
            .flatMap((pathSegment)=>{
                const param = parseParameter(pathSegment);
                var _params_param_key;
                // if the segment matches a param, return the param value
                // otherwise, it's a static segment, so just return that
                return (_params_param_key = params[param.key]) != null ? _params_param_key : param.key;
            });
            return {
                param: segmentKey,
                value,
                type: dynamicParamType,
                // This value always has to be a string.
                treeSegment: [
                    segmentKey,
                    value.join('/'),
                    dynamicParamType
                ]
            };
        }
    }
    return {
        param: segmentKey,
        // The value that is passed to user code.
        value: value,
        // The value that is rendered in the router tree.
        treeSegment: [
            segmentKey,
            Array.isArray(value) ? value.join('/') : value,
            dynamicParamType
        ],
        type: dynamicParamType
    };
}
const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[2]);
}
function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
} //# sourceMappingURL=get-dynamic-param.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getNamedMiddlewareRegex: null,
    getNamedRouteRegex: null,
    getRouteRegex: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getNamedMiddlewareRegex: function() {
        return getNamedMiddlewareRegex;
    },
    getNamedRouteRegex: function() {
        return getNamedRouteRegex;
    },
    getRouteRegex: function() {
        return getRouteRegex;
    }
});
const _constants = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
const _escaperegexp = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
const _removetrailingslash = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
const _getdynamicparam = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)");
function getParametrizedRoute(route, includeSuffix, includePrefix) {
    const groups = {};
    let groupIndex = 1;
    const segments = [];
    for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/')){
        const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        const paramMatches = segment.match(_getdynamicparam.PARAMETER_PATTERN) // Check for parameters
        ;
        if (markerMatch && paramMatches && paramMatches[2]) {
            const { key, optional, repeat } = (0, _getdynamicparam.parseMatchedParameter)(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)");
        } else if (paramMatches && paramMatches[2]) {
            const { key, repeat, optional } = (0, _getdynamicparam.parseMatchedParameter)(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            if (includePrefix && paramMatches[1]) {
                segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
            }
            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
    }
    return {
        parameterizedRoute: segments.join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute, param) {
    let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
    let re = parameterizedRoute;
    if (!excludeOptionalTrailingSlash) {
        re += '(?:/)?';
    }
    return {
        re: new RegExp("^" + re + "$"),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment(param) {
    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
    const { key, optional, repeat } = (0, _getdynamicparam.parseMatchedParameter)(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = "" + keyPrefix + cleanedKey;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    const duplicateKey = cleanedKey in routeKeys;
    if (keyPrefix) {
        routeKeys[cleanedKey] = "" + keyPrefix + key;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : '';
    let pattern;
    if (duplicateKey && backreferenceDuplicateKeys) {
        // Use a backreference to the key to ensure that the key is the same value
        // in each of the placeholders.
        pattern = "\\k<" + cleanedKey + ">";
    } else if (repeat) {
        pattern = "(?<" + cleanedKey + ">.+?)";
    } else {
        pattern = "(?<" + cleanedKey + ">[^/]+?)";
    }
    return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
}
function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    const segments = [];
    for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/')){
        const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
        const paramMatches = segment.match(_getdynamicparam.PARAMETER_PATTERN) // Check for parameters
        ;
        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
            // If there's an interception marker, add it to the segments.
            segments.push(getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker: paramMatches[1],
                segment: paramMatches[2],
                routeKeys,
                keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : undefined,
                backreferenceDuplicateKeys
            }));
        } else if (paramMatches && paramMatches[2]) {
            // If there's a prefix, add it to the segments if it's enabled.
            if (includePrefix && paramMatches[1]) {
                segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
            }
            let s = getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : undefined,
                backreferenceDuplicateKeys
            });
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
        }
    }
    return {
        namedParameterizedRoute: segments.join(''),
        routeKeys
    };
}
function getNamedRouteRegex(normalizedRoute, options) {
    var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
    let namedRegex = result.namedParameterizedRoute;
    if (!options.excludeOptionalTrailingSlash) {
        namedRegex += '(?:/)?';
    }
    return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: "^" + namedRegex + "$",
        routeKeys: result.routeKeys
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: "^/" + catchAllRegex + "$"
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
    };
} //# sourceMappingURL=route-regex.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasAdjacentParameterIssues: null,
    normalizeAdjacentParameters: null,
    normalizeTokensForRegexp: null,
    stripParameterSeparators: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasAdjacentParameterIssues: function() {
        return hasAdjacentParameterIssues;
    },
    normalizeAdjacentParameters: function() {
        return normalizeAdjacentParameters;
    },
    normalizeTokensForRegexp: function() {
        return normalizeTokensForRegexp;
    },
    stripParameterSeparators: function() {
        return stripParameterSeparators;
    }
});
/**
 * Route pattern normalization utilities for path-to-regexp compatibility.
 *
 * path-to-regexp 6.3.0+ introduced stricter validation that rejects certain
 * patterns commonly used in Next.js interception routes. This module provides
 * normalization functions to make Next.js route patterns compatible with the
 * updated library while preserving all functionality.
 */ /**
 * Internal separator used to normalize adjacent parameter patterns.
 * This unique marker is inserted between adjacent parameters and stripped out
 * during parameter extraction to avoid conflicts with real URL content.
 */ const PARAM_SEPARATOR = '_NEXTSEP_';
function hasAdjacentParameterIssues(route) {
    if (typeof route !== 'string') return false;
    // Check for interception route markers followed immediately by parameters
    // Pattern: /(.):param, /(..):param, /(...):param, /(.)(.):param etc.
    // These patterns cause "Must have text between two parameters" errors
    if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
    }
    // Check for basic adjacent parameters without separators
    // Pattern: :param1:param2 (but not :param* or other URL patterns)
    if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
    }
    return false;
}
function normalizeAdjacentParameters(route) {
    let normalized = route;
    // Handle interception route patterns: (.):param -> (.)_NEXTSEP_:param
    normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
    // Handle other adjacent parameter patterns: :param1:param2 -> :param1_NEXTSEP_:param2
    normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
    return normalized;
}
function normalizeTokensForRegexp(tokens) {
    return tokens.map((token)=>{
        // Token union type: Token = string | TokenObject
        // Literal path segments are strings, parameters/wildcards are objects
        if (typeof token === 'object' && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        'modifier' in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === '*' || token.modifier === '+') && // Token objects can have different shapes depending on route pattern
        'prefix' in token && 'suffix' in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === '' && token.suffix === '') {
            // Add minimal prefix to satisfy path-to-regexp validation
            // We use '/' as it's the most common path delimiter and won't break route matching
            // The prefix gets used in regex generation but doesn't affect parameter extraction
            return {
                ...token,
                prefix: '/'
            };
        }
        return token;
    });
}
function stripParameterSeparators(params) {
    const cleaned = {};
    for (const [key, value] of Object.entries(params)){
        if (typeof value === 'string') {
            // Remove the separator if it appears at the start of parameter values
            cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), '');
        } else if (Array.isArray(value)) {
            // Handle array parameters (from repeated route segments)
            cleaned[key] = value.map((item)=>typeof item === 'string' ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), '') : item);
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
} //# sourceMappingURL=route-pattern-normalizer.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Client-safe utilities for route matching that don't import server-side
 * utilities to avoid bundling issues with Turbopack
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    safeCompile: null,
    safePathToRegexp: null,
    safeRegexpToFunction: null,
    safeRouteMatcher: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    safeCompile: function() {
        return safeCompile;
    },
    safePathToRegexp: function() {
        return safePathToRegexp;
    },
    safeRegexpToFunction: function() {
        return safeRegexpToFunction;
    },
    safeRouteMatcher: function() {
        return safeRouteMatcher;
    }
});
const _pathtoregexp = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
const _routepatternnormalizer = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)");
function safePathToRegexp(route, keys, options) {
    if (typeof route !== 'string') {
        return (0, _pathtoregexp.pathToRegexp)(route, keys, options);
    }
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, _routepatternnormalizer.hasAdjacentParameterIssues)(route);
    const routeToUse = needsNormalization ? (0, _routepatternnormalizer.normalizeAdjacentParameters)(route) : route;
    try {
        return (0, _pathtoregexp.pathToRegexp)(routeToUse, keys, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, _routepatternnormalizer.normalizeAdjacentParameters)(route);
                return (0, _pathtoregexp.pathToRegexp)(normalizedRoute, keys, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeCompile(route, options) {
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, _routepatternnormalizer.hasAdjacentParameterIssues)(route);
    const routeToUse = needsNormalization ? (0, _routepatternnormalizer.normalizeAdjacentParameters)(route) : route;
    try {
        return (0, _pathtoregexp.compile)(routeToUse, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, _routepatternnormalizer.normalizeAdjacentParameters)(route);
                return (0, _pathtoregexp.compile)(normalizedRoute, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeRegexpToFunction(regexp, keys) {
    const originalMatcher = (0, _pathtoregexp.regexpToFunction)(regexp, keys || []);
    return (pathname)=>{
        const result = originalMatcher(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return {
            ...result,
            params: (0, _routepatternnormalizer.stripParameterSeparators)(result.params)
        };
    };
}
function safeRouteMatcher(matcherFn) {
    return (pathname)=>{
        const result = matcherFn(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return (0, _routepatternnormalizer.stripParameterSeparators)(result);
    };
} //# sourceMappingURL=route-match-utils.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRouteMatcher", {
    enumerable: true,
    get: function() {
        return getRouteMatcher;
    }
});
const _utils = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/utils.js [app-rsc] (ecmascript)");
const _routematchutils = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)");
function getRouteMatcher(param) {
    let { re, groups } = param;
    const rawMatcher = (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch (e) {
                throw Object.defineProperty(new _utils.DecodeError('failed to decode param'), "__NEXT_ERROR_CODE", {
                    value: "E528",
                    enumerable: false,
                    configurable: true
                });
            }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)){
            const match = routeMatch[group.pos];
            if (match !== undefined) {
                if (group.repeat) {
                    params[key] = match.split('/').map((entry)=>decode(entry));
                } else {
                    params[key] = decode(match);
                }
            }
        }
        return params;
    };
    // Wrap with safe matcher to handle parameter cleaning
    return (0, _routematchutils.safeRouteMatcher)(rawMatcher);
} //# sourceMappingURL=route-matcher.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseRelativeUrl", {
    enumerable: true,
    get: function() {
        return parseRelativeUrl;
    }
});
const _utils = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/utils.js [app-rsc] (ecmascript)");
const _querystring = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-rsc] (ecmascript)");
function parseRelativeUrl(url, base, parseQuery) {
    if (parseQuery === void 0) parseQuery = true;
    const globalBase = new URL(("TURBOPACK compile-time truthy", 1) ? 'http://n' : "TURBOPACK unreachable");
    const resolvedBase = base ? new URL(base, globalBase) : url.startsWith('.') ? new URL(("TURBOPACK compile-time truthy", 1) ? 'http://n' : "TURBOPACK unreachable") : globalBase;
    const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
    if (origin !== globalBase.origin) {
        throw Object.defineProperty(new Error("invariant: invalid relative URL, router received " + url), "__NEXT_ERROR_CODE", {
            value: "E159",
            enumerable: false,
            configurable: true
        });
    }
    return {
        pathname,
        query: parseQuery ? (0, _querystring.searchParamsToUrlQuery)(searchParams) : undefined,
        search,
        hash,
        href: href.slice(origin.length),
        // We don't know for relative URLs at this point since we set a custom, internal
        // base that isn't surfaced to users.
        slashes: undefined
    };
} //# sourceMappingURL=parse-relative-url.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/parse-url.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseUrl", {
    enumerable: true,
    get: function() {
        return parseUrl;
    }
});
const _querystring = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-rsc] (ecmascript)");
const _parserelativeurl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [app-rsc] (ecmascript)");
function parseUrl(url) {
    if (url.startsWith('/')) {
        return (0, _parserelativeurl.parseRelativeUrl)(url);
    }
    const parsedURL = new URL(url);
    return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring.searchParamsToUrlQuery)(parsedURL.searchParams),
        search: parsedURL.search,
        slashes: parsedURL.href.slice(parsedURL.protocol.length, parsedURL.protocol.length + 2) === '//'
    };
} //# sourceMappingURL=parse-url.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/cookie") + "/";
    var e = {};
    (()=>{
        var r = e;
        /*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e, r) {
            if (typeof e !== "string") {
                throw new TypeError("argument str must be a string");
            }
            var t = {};
            var n = r || {};
            var o = e.split(a);
            var s = n.decode || i;
            for(var p = 0; p < o.length; p++){
                var f = o[p];
                var u = f.indexOf("=");
                if (u < 0) {
                    continue;
                }
                var v = f.substr(0, u).trim();
                var c = f.substr(++u, f.length).trim();
                if ('"' == c[0]) {
                    c = c.slice(1, -1);
                }
                if (undefined == t[v]) {
                    t[v] = tryDecode(c, s);
                }
            }
            return t;
        }
        function serialize(e, r, i) {
            var a = i || {};
            var o = a.encode || t;
            if (typeof o !== "function") {
                throw new TypeError("option encode is invalid");
            }
            if (!n.test(e)) {
                throw new TypeError("argument name is invalid");
            }
            var s = o(r);
            if (s && !n.test(s)) {
                throw new TypeError("argument val is invalid");
            }
            var p = e + "=" + s;
            if (null != a.maxAge) {
                var f = a.maxAge - 0;
                if (isNaN(f) || !isFinite(f)) {
                    throw new TypeError("option maxAge is invalid");
                }
                p += "; Max-Age=" + Math.floor(f);
            }
            if (a.domain) {
                if (!n.test(a.domain)) {
                    throw new TypeError("option domain is invalid");
                }
                p += "; Domain=" + a.domain;
            }
            if (a.path) {
                if (!n.test(a.path)) {
                    throw new TypeError("option path is invalid");
                }
                p += "; Path=" + a.path;
            }
            if (a.expires) {
                if (typeof a.expires.toUTCString !== "function") {
                    throw new TypeError("option expires is invalid");
                }
                p += "; Expires=" + a.expires.toUTCString();
            }
            if (a.httpOnly) {
                p += "; HttpOnly";
            }
            if (a.secure) {
                p += "; Secure";
            }
            if (a.sameSite) {
                var u = typeof a.sameSite === "string" ? a.sameSite.toLowerCase() : a.sameSite;
                switch(u){
                    case true:
                        p += "; SameSite=Strict";
                        break;
                    case "lax":
                        p += "; SameSite=Lax";
                        break;
                    case "strict":
                        p += "; SameSite=Strict";
                        break;
                    case "none":
                        p += "; SameSite=None";
                        break;
                    default:
                        throw new TypeError("option sameSite is invalid");
                }
            }
            return p;
        }
        function tryDecode(e, r) {
            try {
                return r(e);
            } catch (r) {
                return e;
            }
        }
    })();
    module.exports = e;
})();
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCookieParser", {
    enumerable: true,
    get: function() {
        return getCookieParser;
    }
});
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/prepare-destination.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    compileNonPath: null,
    matchHas: null,
    parseDestination: null,
    prepareDestination: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    compileNonPath: function() {
        return compileNonPath;
    },
    matchHas: function() {
        return matchHas;
    },
    parseDestination: function() {
        return parseDestination;
    },
    prepareDestination: function() {
        return prepareDestination;
    }
});
const _escaperegexp = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
const _parseurl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/parse-url.js [app-rsc] (ecmascript)");
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
const _getcookieparser = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
const _routematchutils = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)");
/**
 * Ensure only a-zA-Z are used for param names for proper interpolating
 * with path-to-regexp
 */ function getSafeParamName(paramName) {
    let newParamName = '';
    for(let i = 0; i < paramName.length; i++){
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || // A-Z
        charCode > 96 && charCode < 123 // a-z
        ) {
            newParamName += paramName[i];
        }
    }
    return newParamName;
}
function escapeSegment(str, segmentName) {
    return str.replace(new RegExp(":" + (0, _escaperegexp.escapeStringRegexp)(segmentName), 'g'), "__ESC_COLON_" + segmentName);
}
function unescapeSegments(str) {
    return str.replace(/__ESC_COLON_/gi, ':');
}
function matchHas(req, query, has, missing) {
    if (has === void 0) has = [];
    if (missing === void 0) missing = [];
    const params = {};
    const hasMatch = (hasItem)=>{
        let value;
        let key = hasItem.key;
        switch(hasItem.type){
            case 'header':
                {
                    key = key.toLowerCase();
                    value = req.headers[key];
                    break;
                }
            case 'cookie':
                {
                    if ('cookies' in req) {
                        value = req.cookies[hasItem.key];
                    } else {
                        const cookies = (0, _getcookieparser.getCookieParser)(req.headers)();
                        value = cookies[hasItem.key];
                    }
                    break;
                }
            case 'query':
                {
                    value = query[key];
                    break;
                }
            case 'host':
                {
                    const { host } = (req == null ? void 0 : req.headers) || {};
                    // remove port from host if present
                    const hostname = host == null ? void 0 : host.split(':', 1)[0].toLowerCase();
                    value = hostname;
                    break;
                }
            default:
                {
                    break;
                }
        }
        if (!hasItem.value && value) {
            params[getSafeParamName(key)] = value;
            return true;
        } else if (value) {
            const matcher = new RegExp("^" + hasItem.value + "$");
            const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
            if (matches) {
                if (Array.isArray(matches)) {
                    if (matches.groups) {
                        Object.keys(matches.groups).forEach((groupKey)=>{
                            params[groupKey] = matches.groups[groupKey];
                        });
                    } else if (hasItem.type === 'host' && matches[0]) {
                        params.host = matches[0];
                    }
                }
                return true;
            }
        }
        return false;
    };
    const allMatch = has.every((item)=>hasMatch(item)) && !missing.some((item)=>hasMatch(item));
    if (allMatch) {
        return params;
    }
    return false;
}
function compileNonPath(value, params) {
    if (!value.includes(':')) {
        return value;
    }
    for (const key of Object.keys(params)){
        if (value.includes(":" + key)) {
            value = value.replace(new RegExp(":" + key + "\\*", 'g'), ":" + key + "--ESCAPED_PARAM_ASTERISKS").replace(new RegExp(":" + key + "\\?", 'g'), ":" + key + "--ESCAPED_PARAM_QUESTION").replace(new RegExp(":" + key + "\\+", 'g'), ":" + key + "--ESCAPED_PARAM_PLUS").replace(new RegExp(":" + key + "(?!\\w)", 'g'), "--ESCAPED_PARAM_COLON" + key);
        }
    }
    value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*');
    // the value needs to start with a forward-slash to be compiled
    // correctly
    return (0, _routematchutils.safeCompile)("/" + value, {
        validate: false
    })(params).slice(1);
}
function parseDestination(args) {
    let escaped = args.destination;
    for (const param of Object.keys({
        ...args.params,
        ...args.query
    })){
        if (!param) continue;
        escaped = escapeSegment(escaped, param);
    }
    const parsed = (0, _parseurl.parseUrl)(escaped);
    let pathname = parsed.pathname;
    if (pathname) {
        pathname = unescapeSegments(pathname);
    }
    let href = parsed.href;
    if (href) {
        href = unescapeSegments(href);
    }
    let hostname = parsed.hostname;
    if (hostname) {
        hostname = unescapeSegments(hostname);
    }
    let hash = parsed.hash;
    if (hash) {
        hash = unescapeSegments(hash);
    }
    let search = parsed.search;
    if (search) {
        search = unescapeSegments(search);
    }
    return {
        ...parsed,
        pathname,
        hostname,
        href,
        hash,
        search
    };
}
function prepareDestination(args) {
    const parsedDestination = parseDestination(args);
    const { hostname: destHostname, query: destQuery, search: destSearch } = parsedDestination;
    // The following code assumes that the pathname here includes the hash if it's
    // present.
    let destPath = parsedDestination.pathname;
    if (parsedDestination.hash) {
        destPath = "" + destPath + parsedDestination.hash;
    }
    const destParams = [];
    const destPathParamKeys = [];
    (0, _routematchutils.safePathToRegexp)(destPath, destPathParamKeys);
    for (const key of destPathParamKeys){
        destParams.push(key.name);
    }
    if (destHostname) {
        const destHostnameParamKeys = [];
        (0, _routematchutils.safePathToRegexp)(destHostname, destHostnameParamKeys);
        for (const key of destHostnameParamKeys){
            destParams.push(key.name);
        }
    }
    const destPathCompiler = (0, _routematchutils.safeCompile)(destPath, // have already validated before we got to this point and validating
    // breaks compiling destinations with named pattern params from the source
    // e.g. /something:hello(.*) -> /another/:hello is broken with validation
    // since compile validation is meant for reversing and not for inserting
    // params from a separate path-regex into another
    {
        validate: false
    });
    let destHostnameCompiler;
    if (destHostname) {
        destHostnameCompiler = (0, _routematchutils.safeCompile)(destHostname, {
            validate: false
        });
    }
    // update any params in query values
    for (const [key, strOrArray] of Object.entries(destQuery)){
        // the value needs to start with a forward-slash to be compiled
        // correctly
        if (Array.isArray(strOrArray)) {
            destQuery[key] = strOrArray.map((value)=>compileNonPath(unescapeSegments(value), args.params));
        } else if (typeof strOrArray === 'string') {
            destQuery[key] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
    }
    // add path params to query if it's not a redirect and not
    // already defined in destination query or path
    let paramKeys = Object.keys(args.params).filter((name)=>name !== 'nextInternalLocale');
    if (args.appendParamsToQuery && !paramKeys.some((key)=>destParams.includes(key))) {
        for (const key of paramKeys){
            if (!(key in destQuery)) {
                destQuery[key] = args.params[key];
            }
        }
    }
    let newUrl;
    // The compiler also that the interception route marker is an unnamed param, hence '0',
    // so we need to add it to the params object.
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(destPath)) {
        for (const segment of destPath.split('/')){
            const marker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
            if (marker) {
                if (marker === '(..)(..)') {
                    args.params['0'] = '(..)';
                    args.params['1'] = '(..)';
                } else {
                    args.params['0'] = marker;
                }
                break;
            }
        }
    }
    try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split('#', 2);
        if (destHostnameCompiler) {
            parsedDestination.hostname = destHostnameCompiler(args.params);
        }
        parsedDestination.pathname = pathname;
        parsedDestination.hash = "" + (hash ? '#' : '') + (hash || '');
        parsedDestination.search = destSearch ? compileNonPath(destSearch, args.params) : '';
    } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
            throw Object.defineProperty(new Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match"), "__NEXT_ERROR_CODE", {
                value: "E329",
                enumerable: false,
                configurable: true
            });
        }
        throw err;
    }
    // Query merge order lowest priority to highest
    // 1. initial URL query values
    // 2. path segment values
    // 3. destination specified query values
    parsedDestination.query = {
        ...args.query,
        ...parsedDestination.query
    };
    return {
        newUrl,
        destQuery,
        parsedDestination
    };
} //# sourceMappingURL=prepare-destination.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/web/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fromNodeOutgoingHttpHeaders: null,
    normalizeNextQueryParam: null,
    splitCookiesString: null,
    toNodeOutgoingHttpHeaders: null,
    validateURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fromNodeOutgoingHttpHeaders: function() {
        return fromNodeOutgoingHttpHeaders;
    },
    normalizeNextQueryParam: function() {
        return normalizeNextQueryParam;
    },
    splitCookiesString: function() {
        return splitCookiesString;
    },
    toNodeOutgoingHttpHeaders: function() {
        return toNodeOutgoingHttpHeaders;
    },
    validateURL: function() {
        return validateURL;
    }
});
const _constants = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        }), "__NEXT_ERROR_CODE", {
            value: "E61",
            enumerable: false,
            configurable: true
        });
    }
}
function normalizeNextQueryParam(key) {
    const prefixes = [
        _constants.NEXT_QUERY_PARAM_PREFIX,
        _constants.NEXT_INTERCEPTION_MARKER_PREFIX
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            return key.substring(prefix.length);
        }
    }
    return null;
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/lib/decode-query-path-parameter.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Decodes a query path parameter.
 *
 * @param value - The value to decode.
 * @returns The decoded value.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "decodeQueryPathParameter", {
    enumerable: true,
    get: function() {
        return decodeQueryPathParameter;
    }
});
function decodeQueryPathParameter(value) {
    // When deployed to Vercel, the value may be encoded, so this attempts to
    // decode it and returns the original value if it fails.
    try {
        return decodeURIComponent(value);
    } catch  {
        return value;
    }
} //# sourceMappingURL=decode-query-path-parameter.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/client/components/app-router-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/url.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isFullStringUrl: null,
    parseReqUrl: null,
    parseUrl: null,
    stripNextRscUnionQuery: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isFullStringUrl: function() {
        return isFullStringUrl;
    },
    parseReqUrl: function() {
        return parseReqUrl;
    },
    parseUrl: function() {
        return parseUrl;
    },
    stripNextRscUnionQuery: function() {
        return stripNextRscUnionQuery;
    }
});
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/client/components/app-router-headers.js [app-rsc] (ecmascript)");
const DUMMY_ORIGIN = 'http://n';
function isFullStringUrl(url) {
    return /https?:\/\//.test(url);
}
function parseUrl(url) {
    let parsed = undefined;
    try {
        parsed = new URL(url, DUMMY_ORIGIN);
    } catch  {}
    return parsed;
}
function parseReqUrl(url) {
    const parsedUrl = parseUrl(url);
    if (!parsedUrl) {
        return;
    }
    const query = {};
    for (const key of parsedUrl.searchParams.keys()){
        const values = parsedUrl.searchParams.getAll(key);
        query[key] = values.length > 1 ? values : values[0];
    }
    const legacyUrl = {
        query,
        hash: parsedUrl.hash,
        search: parsedUrl.search,
        path: parsedUrl.pathname,
        pathname: parsedUrl.pathname,
        href: `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`,
        host: '',
        hostname: '',
        auth: '',
        protocol: '',
        slashes: null,
        port: ''
    };
    return legacyUrl;
}
function stripNextRscUnionQuery(relativeUrl) {
    const urlInstance = new URL(relativeUrl, DUMMY_ORIGIN);
    urlInstance.searchParams.delete(_approuterheaders.NEXT_RSC_UNION_QUERY);
    return urlInstance.pathname + urlInstance.search;
} //# sourceMappingURL=url.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-rsc] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/superstruct/index.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    var e = {
        318: function(e, t) {
            (function(e, n) {
                ("TURBOPACK compile-time truthy", 1) ? n(t) : "TURBOPACK unreachable";
            })(this, function(e) {
                "use strict";
                class StructError extends TypeError {
                    constructor(e, t){
                        let n;
                        const { message: r, explanation: i, ...c } = e;
                        const { path: o } = e;
                        const a = o.length === 0 ? r : `At path: ${o.join(".")} -- ${r}`;
                        super(i ?? a);
                        if (i != null) this.cause = a;
                        Object.assign(this, c);
                        this.name = this.constructor.name;
                        this.failures = ()=>n ?? (n = [
                                e,
                                ...t()
                            ]);
                    }
                }
                function isIterable(e) {
                    return isObject(e) && typeof e[Symbol.iterator] === "function";
                }
                function isObject(e) {
                    return typeof e === "object" && e != null;
                }
                function isPlainObject(e) {
                    if (Object.prototype.toString.call(e) !== "[object Object]") {
                        return false;
                    }
                    const t = Object.getPrototypeOf(e);
                    return t === null || t === Object.prototype;
                }
                function print(e) {
                    if (typeof e === "symbol") {
                        return e.toString();
                    }
                    return typeof e === "string" ? JSON.stringify(e) : `${e}`;
                }
                function shiftIterator(e) {
                    const { done: t, value: n } = e.next();
                    return t ? undefined : n;
                }
                function toFailure(e, t, n, r) {
                    if (e === true) {
                        return;
                    } else if (e === false) {
                        e = {};
                    } else if (typeof e === "string") {
                        e = {
                            message: e
                        };
                    }
                    const { path: i, branch: c } = t;
                    const { type: o } = n;
                    const { refinement: a, message: s = `Expected a value of type \`${o}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${print(r)}\`` } = e;
                    return {
                        value: r,
                        type: o,
                        refinement: a,
                        key: i[i.length - 1],
                        path: i,
                        branch: c,
                        ...e,
                        message: s
                    };
                }
                function* toFailures(e, t, n, r) {
                    if (!isIterable(e)) {
                        e = [
                            e
                        ];
                    }
                    for (const i of e){
                        const e = toFailure(i, t, n, r);
                        if (e) {
                            yield e;
                        }
                    }
                }
                function* run(e, t, n = {}) {
                    const { path: r = [], branch: i = [
                        e
                    ], coerce: c = false, mask: o = false } = n;
                    const a = {
                        path: r,
                        branch: i
                    };
                    if (c) {
                        e = t.coercer(e, a);
                        if (o && t.type !== "type" && isObject(t.schema) && isObject(e) && !Array.isArray(e)) {
                            for(const n in e){
                                if (t.schema[n] === undefined) {
                                    delete e[n];
                                }
                            }
                        }
                    }
                    let s = "valid";
                    for (const r of t.validator(e, a)){
                        r.explanation = n.message;
                        s = "not_valid";
                        yield [
                            r,
                            undefined
                        ];
                    }
                    for (let [u, f, l] of t.entries(e, a)){
                        const t = run(f, l, {
                            path: u === undefined ? r : [
                                ...r,
                                u
                            ],
                            branch: u === undefined ? i : [
                                ...i,
                                f
                            ],
                            coerce: c,
                            mask: o,
                            message: n.message
                        });
                        for (const n of t){
                            if (n[0]) {
                                s = n[0].refinement != null ? "not_refined" : "not_valid";
                                yield [
                                    n[0],
                                    undefined
                                ];
                            } else if (c) {
                                f = n[1];
                                if (u === undefined) {
                                    e = f;
                                } else if (e instanceof Map) {
                                    e.set(u, f);
                                } else if (e instanceof Set) {
                                    e.add(f);
                                } else if (isObject(e)) {
                                    if (f !== undefined || u in e) e[u] = f;
                                }
                            }
                        }
                    }
                    if (s !== "not_valid") {
                        for (const r of t.refiner(e, a)){
                            r.explanation = n.message;
                            s = "not_refined";
                            yield [
                                r,
                                undefined
                            ];
                        }
                    }
                    if (s === "valid") {
                        yield [
                            undefined,
                            e
                        ];
                    }
                }
                class Struct {
                    constructor(e){
                        const { type: t, schema: n, validator: r, refiner: i, coercer: c = (e)=>e, entries: o = function*() {} } = e;
                        this.type = t;
                        this.schema = n;
                        this.entries = o;
                        this.coercer = c;
                        if (r) {
                            this.validator = (e, t)=>{
                                const n = r(e, t);
                                return toFailures(n, t, this, e);
                            };
                        } else {
                            this.validator = ()=>[];
                        }
                        if (i) {
                            this.refiner = (e, t)=>{
                                const n = i(e, t);
                                return toFailures(n, t, this, e);
                            };
                        } else {
                            this.refiner = ()=>[];
                        }
                    }
                    assert(e, t) {
                        return assert(e, this, t);
                    }
                    create(e, t) {
                        return create(e, this, t);
                    }
                    is(e) {
                        return is(e, this);
                    }
                    mask(e, t) {
                        return mask(e, this, t);
                    }
                    validate(e, t = {}) {
                        return validate(e, this, t);
                    }
                }
                function assert(e, t, n) {
                    const r = validate(e, t, {
                        message: n
                    });
                    if (r[0]) {
                        throw r[0];
                    }
                }
                function create(e, t, n) {
                    const r = validate(e, t, {
                        coerce: true,
                        message: n
                    });
                    if (r[0]) {
                        throw r[0];
                    } else {
                        return r[1];
                    }
                }
                function mask(e, t, n) {
                    const r = validate(e, t, {
                        coerce: true,
                        mask: true,
                        message: n
                    });
                    if (r[0]) {
                        throw r[0];
                    } else {
                        return r[1];
                    }
                }
                function is(e, t) {
                    const n = validate(e, t);
                    return !n[0];
                }
                function validate(e, t, n = {}) {
                    const r = run(e, t, n);
                    const i = shiftIterator(r);
                    if (i[0]) {
                        const e = new StructError(i[0], function*() {
                            for (const e of r){
                                if (e[0]) {
                                    yield e[0];
                                }
                            }
                        });
                        return [
                            e,
                            undefined
                        ];
                    } else {
                        const e = i[1];
                        return [
                            undefined,
                            e
                        ];
                    }
                }
                function assign(...e) {
                    const t = e[0].type === "type";
                    const n = e.map((e)=>e.schema);
                    const r = Object.assign({}, ...n);
                    return t ? type(r) : object(r);
                }
                function define(e, t) {
                    return new Struct({
                        type: e,
                        schema: null,
                        validator: t
                    });
                }
                function deprecated(e, t) {
                    return new Struct({
                        ...e,
                        refiner: (t, n)=>t === undefined || e.refiner(t, n),
                        validator (n, r) {
                            if (n === undefined) {
                                return true;
                            } else {
                                t(n, r);
                                return e.validator(n, r);
                            }
                        }
                    });
                }
                function dynamic(e) {
                    return new Struct({
                        type: "dynamic",
                        schema: null,
                        *entries (t, n) {
                            const r = e(t, n);
                            yield* r.entries(t, n);
                        },
                        validator (t, n) {
                            const r = e(t, n);
                            return r.validator(t, n);
                        },
                        coercer (t, n) {
                            const r = e(t, n);
                            return r.coercer(t, n);
                        },
                        refiner (t, n) {
                            const r = e(t, n);
                            return r.refiner(t, n);
                        }
                    });
                }
                function lazy(e) {
                    let t;
                    return new Struct({
                        type: "lazy",
                        schema: null,
                        *entries (n, r) {
                            t ?? (t = e());
                            yield* t.entries(n, r);
                        },
                        validator (n, r) {
                            t ?? (t = e());
                            return t.validator(n, r);
                        },
                        coercer (n, r) {
                            t ?? (t = e());
                            return t.coercer(n, r);
                        },
                        refiner (n, r) {
                            t ?? (t = e());
                            return t.refiner(n, r);
                        }
                    });
                }
                function omit(e, t) {
                    const { schema: n } = e;
                    const r = {
                        ...n
                    };
                    for (const e of t){
                        delete r[e];
                    }
                    switch(e.type){
                        case "type":
                            return type(r);
                        default:
                            return object(r);
                    }
                }
                function partial(e) {
                    const t = e instanceof Struct ? {
                        ...e.schema
                    } : {
                        ...e
                    };
                    for(const e in t){
                        t[e] = optional(t[e]);
                    }
                    return object(t);
                }
                function pick(e, t) {
                    const { schema: n } = e;
                    const r = {};
                    for (const e of t){
                        r[e] = n[e];
                    }
                    return object(r);
                }
                function struct(e, t) {
                    console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`.");
                    return define(e, t);
                }
                function any() {
                    return define("any", ()=>true);
                }
                function array(e) {
                    return new Struct({
                        type: "array",
                        schema: e,
                        *entries (t) {
                            if (e && Array.isArray(t)) {
                                for (const [n, r] of t.entries()){
                                    yield [
                                        n,
                                        r,
                                        e
                                    ];
                                }
                            }
                        },
                        coercer (e) {
                            return Array.isArray(e) ? e.slice() : e;
                        },
                        validator (e) {
                            return Array.isArray(e) || `Expected an array value, but received: ${print(e)}`;
                        }
                    });
                }
                function bigint() {
                    return define("bigint", (e)=>typeof e === "bigint");
                }
                function boolean() {
                    return define("boolean", (e)=>typeof e === "boolean");
                }
                function date() {
                    return define("date", (e)=>e instanceof Date && !isNaN(e.getTime()) || `Expected a valid \`Date\` object, but received: ${print(e)}`);
                }
                function enums(e) {
                    const t = {};
                    const n = e.map((e)=>print(e)).join();
                    for (const n of e){
                        t[n] = n;
                    }
                    return new Struct({
                        type: "enums",
                        schema: t,
                        validator (t) {
                            return e.includes(t) || `Expected one of \`${n}\`, but received: ${print(t)}`;
                        }
                    });
                }
                function func() {
                    return define("func", (e)=>typeof e === "function" || `Expected a function, but received: ${print(e)}`);
                }
                function instance(e) {
                    return define("instance", (t)=>t instanceof e || `Expected a \`${e.name}\` instance, but received: ${print(t)}`);
                }
                function integer() {
                    return define("integer", (e)=>typeof e === "number" && !isNaN(e) && Number.isInteger(e) || `Expected an integer, but received: ${print(e)}`);
                }
                function intersection(e) {
                    return new Struct({
                        type: "intersection",
                        schema: null,
                        *entries (t, n) {
                            for (const r of e){
                                yield* r.entries(t, n);
                            }
                        },
                        *validator (t, n) {
                            for (const r of e){
                                yield* r.validator(t, n);
                            }
                        },
                        *refiner (t, n) {
                            for (const r of e){
                                yield* r.refiner(t, n);
                            }
                        }
                    });
                }
                function literal(e) {
                    const t = print(e);
                    const n = typeof e;
                    return new Struct({
                        type: "literal",
                        schema: n === "string" || n === "number" || n === "boolean" ? e : null,
                        validator (n) {
                            return n === e || `Expected the literal \`${t}\`, but received: ${print(n)}`;
                        }
                    });
                }
                function map(e, t) {
                    return new Struct({
                        type: "map",
                        schema: null,
                        *entries (n) {
                            if (e && t && n instanceof Map) {
                                for (const [r, i] of n.entries()){
                                    yield [
                                        r,
                                        r,
                                        e
                                    ];
                                    yield [
                                        r,
                                        i,
                                        t
                                    ];
                                }
                            }
                        },
                        coercer (e) {
                            return e instanceof Map ? new Map(e) : e;
                        },
                        validator (e) {
                            return e instanceof Map || `Expected a \`Map\` object, but received: ${print(e)}`;
                        }
                    });
                }
                function never() {
                    return define("never", ()=>false);
                }
                function nullable(e) {
                    return new Struct({
                        ...e,
                        validator: (t, n)=>t === null || e.validator(t, n),
                        refiner: (t, n)=>t === null || e.refiner(t, n)
                    });
                }
                function number() {
                    return define("number", (e)=>typeof e === "number" && !isNaN(e) || `Expected a number, but received: ${print(e)}`);
                }
                function object(e) {
                    const t = e ? Object.keys(e) : [];
                    const n = never();
                    return new Struct({
                        type: "object",
                        schema: e ? e : null,
                        *entries (r) {
                            if (e && isObject(r)) {
                                const i = new Set(Object.keys(r));
                                for (const n of t){
                                    i.delete(n);
                                    yield [
                                        n,
                                        r[n],
                                        e[n]
                                    ];
                                }
                                for (const e of i){
                                    yield [
                                        e,
                                        r[e],
                                        n
                                    ];
                                }
                            }
                        },
                        validator (e) {
                            return isObject(e) || `Expected an object, but received: ${print(e)}`;
                        },
                        coercer (e) {
                            return isObject(e) ? {
                                ...e
                            } : e;
                        }
                    });
                }
                function optional(e) {
                    return new Struct({
                        ...e,
                        validator: (t, n)=>t === undefined || e.validator(t, n),
                        refiner: (t, n)=>t === undefined || e.refiner(t, n)
                    });
                }
                function record(e, t) {
                    return new Struct({
                        type: "record",
                        schema: null,
                        *entries (n) {
                            if (isObject(n)) {
                                for(const r in n){
                                    const i = n[r];
                                    yield [
                                        r,
                                        r,
                                        e
                                    ];
                                    yield [
                                        r,
                                        i,
                                        t
                                    ];
                                }
                            }
                        },
                        validator (e) {
                            return isObject(e) || `Expected an object, but received: ${print(e)}`;
                        }
                    });
                }
                function regexp() {
                    return define("regexp", (e)=>e instanceof RegExp);
                }
                function set(e) {
                    return new Struct({
                        type: "set",
                        schema: null,
                        *entries (t) {
                            if (e && t instanceof Set) {
                                for (const n of t){
                                    yield [
                                        n,
                                        n,
                                        e
                                    ];
                                }
                            }
                        },
                        coercer (e) {
                            return e instanceof Set ? new Set(e) : e;
                        },
                        validator (e) {
                            return e instanceof Set || `Expected a \`Set\` object, but received: ${print(e)}`;
                        }
                    });
                }
                function string() {
                    return define("string", (e)=>typeof e === "string" || `Expected a string, but received: ${print(e)}`);
                }
                function tuple(e) {
                    const t = never();
                    return new Struct({
                        type: "tuple",
                        schema: null,
                        *entries (n) {
                            if (Array.isArray(n)) {
                                const r = Math.max(e.length, n.length);
                                for(let i = 0; i < r; i++){
                                    yield [
                                        i,
                                        n[i],
                                        e[i] || t
                                    ];
                                }
                            }
                        },
                        validator (e) {
                            return Array.isArray(e) || `Expected an array, but received: ${print(e)}`;
                        }
                    });
                }
                function type(e) {
                    const t = Object.keys(e);
                    return new Struct({
                        type: "type",
                        schema: e,
                        *entries (n) {
                            if (isObject(n)) {
                                for (const r of t){
                                    yield [
                                        r,
                                        n[r],
                                        e[r]
                                    ];
                                }
                            }
                        },
                        validator (e) {
                            return isObject(e) || `Expected an object, but received: ${print(e)}`;
                        },
                        coercer (e) {
                            return isObject(e) ? {
                                ...e
                            } : e;
                        }
                    });
                }
                function union(e) {
                    const t = e.map((e)=>e.type).join(" | ");
                    return new Struct({
                        type: "union",
                        schema: null,
                        coercer (t) {
                            for (const n of e){
                                const [e, r] = n.validate(t, {
                                    coerce: true
                                });
                                if (!e) {
                                    return r;
                                }
                            }
                            return t;
                        },
                        validator (n, r) {
                            const i = [];
                            for (const t of e){
                                const [...e] = run(n, t, r);
                                const [c] = e;
                                if (!c[0]) {
                                    return [];
                                } else {
                                    for (const [t] of e){
                                        if (t) {
                                            i.push(t);
                                        }
                                    }
                                }
                            }
                            return [
                                `Expected the value to satisfy a union of \`${t}\`, but received: ${print(n)}`,
                                ...i
                            ];
                        }
                    });
                }
                function unknown() {
                    return define("unknown", ()=>true);
                }
                function coerce(e, t, n) {
                    return new Struct({
                        ...e,
                        coercer: (r, i)=>is(r, t) ? e.coercer(n(r, i), i) : e.coercer(r, i)
                    });
                }
                function defaulted(e, t, n = {}) {
                    return coerce(e, unknown(), (e)=>{
                        const r = typeof t === "function" ? t() : t;
                        if (e === undefined) {
                            return r;
                        }
                        if (!n.strict && isPlainObject(e) && isPlainObject(r)) {
                            const t = {
                                ...e
                            };
                            let n = false;
                            for(const e in r){
                                if (t[e] === undefined) {
                                    t[e] = r[e];
                                    n = true;
                                }
                            }
                            if (n) {
                                return t;
                            }
                        }
                        return e;
                    });
                }
                function trimmed(e) {
                    return coerce(e, string(), (e)=>e.trim());
                }
                function empty(e) {
                    return refine(e, "empty", (t)=>{
                        const n = getSize(t);
                        return n === 0 || `Expected an empty ${e.type} but received one with a size of \`${n}\``;
                    });
                }
                function getSize(e) {
                    if (e instanceof Map || e instanceof Set) {
                        return e.size;
                    } else {
                        return e.length;
                    }
                }
                function max(e, t, n = {}) {
                    const { exclusive: r } = n;
                    return refine(e, "max", (n)=>r ? n < t : n <= t || `Expected a ${e.type} less than ${r ? "" : "or equal to "}${t} but received \`${n}\``);
                }
                function min(e, t, n = {}) {
                    const { exclusive: r } = n;
                    return refine(e, "min", (n)=>r ? n > t : n >= t || `Expected a ${e.type} greater than ${r ? "" : "or equal to "}${t} but received \`${n}\``);
                }
                function nonempty(e) {
                    return refine(e, "nonempty", (t)=>{
                        const n = getSize(t);
                        return n > 0 || `Expected a nonempty ${e.type} but received an empty one`;
                    });
                }
                function pattern(e, t) {
                    return refine(e, "pattern", (n)=>t.test(n) || `Expected a ${e.type} matching \`/${t.source}/\` but received "${n}"`);
                }
                function size(e, t, n = t) {
                    const r = `Expected a ${e.type}`;
                    const i = t === n ? `of \`${t}\`` : `between \`${t}\` and \`${n}\``;
                    return refine(e, "size", (e)=>{
                        if (typeof e === "number" || e instanceof Date) {
                            return t <= e && e <= n || `${r} ${i} but received \`${e}\``;
                        } else if (e instanceof Map || e instanceof Set) {
                            const { size: c } = e;
                            return t <= c && c <= n || `${r} with a size ${i} but received one with a size of \`${c}\``;
                        } else {
                            const { length: c } = e;
                            return t <= c && c <= n || `${r} with a length ${i} but received one with a length of \`${c}\``;
                        }
                    });
                }
                function refine(e, t, n) {
                    return new Struct({
                        ...e,
                        *refiner (r, i) {
                            yield* e.refiner(r, i);
                            const c = n(r, i);
                            const o = toFailures(c, i, e, r);
                            for (const e of o){
                                yield {
                                    ...e,
                                    refinement: t
                                };
                            }
                        }
                    });
                }
                e.Struct = Struct;
                e.StructError = StructError;
                e.any = any;
                e.array = array;
                e.assert = assert;
                e.assign = assign;
                e.bigint = bigint;
                e.boolean = boolean;
                e.coerce = coerce;
                e.create = create;
                e.date = date;
                e.defaulted = defaulted;
                e.define = define;
                e.deprecated = deprecated;
                e.dynamic = dynamic;
                e.empty = empty;
                e.enums = enums;
                e.func = func;
                e.instance = instance;
                e.integer = integer;
                e.intersection = intersection;
                e.is = is;
                e.lazy = lazy;
                e.literal = literal;
                e.map = map;
                e.mask = mask;
                e.max = max;
                e.min = min;
                e.never = never;
                e.nonempty = nonempty;
                e.nullable = nullable;
                e.number = number;
                e.object = object;
                e.omit = omit;
                e.optional = optional;
                e.partial = partial;
                e.pattern = pattern;
                e.pick = pick;
                e.record = record;
                e.refine = refine;
                e.regexp = regexp;
                e.set = set;
                e.size = size;
                e.string = string;
                e.struct = struct;
                e.trimmed = trimmed;
                e.tuple = tuple;
                e.type = type;
                e.union = union;
                e.unknown = unknown;
                e.validate = validate;
            });
        }
    };
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/superstruct") + "/";
    var t = {};
    e[318](0, t);
    module.exports = t;
})();
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/app-render/types.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HasLoadingBoundary: null,
    flightRouterStateSchema: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HasLoadingBoundary: function() {
        return HasLoadingBoundary;
    },
    flightRouterStateSchema: function() {
        return flightRouterStateSchema;
    }
});
const _superstruct = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/superstruct/index.cjs [app-rsc] (ecmascript)"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const dynamicParamTypesSchema = _superstruct.default.enums([
    'c',
    'ci',
    'oc',
    'd',
    'di'
]);
const segmentSchema = _superstruct.default.union([
    _superstruct.default.string(),
    _superstruct.default.tuple([
        // Param name
        _superstruct.default.string(),
        // Param cache key (almost the same as the value, but arrays are
        // concatenated into strings)
        // TODO: We should change this to just be the value. Currently we convert
        // it back to a value when passing to useParams. It only needs to be
        // a string when converted to a a cache key, but that doesn't mean we
        // need to store it as that representation.
        _superstruct.default.string(),
        // Dynamic param type
        dynamicParamTypesSchema
    ])
]);
const flightRouterStateSchema = _superstruct.default.tuple([
    segmentSchema,
    _superstruct.default.record(_superstruct.default.string(), _superstruct.default.lazy(()=>flightRouterStateSchema)),
    _superstruct.default.optional(_superstruct.default.nullable(_superstruct.default.string())),
    _superstruct.default.optional(_superstruct.default.nullable(_superstruct.default.union([
        _superstruct.default.literal('refetch'),
        _superstruct.default.literal('refresh'),
        _superstruct.default.literal('inside-shared-layout'),
        _superstruct.default.literal('metadata-only')
    ]))),
    _superstruct.default.optional(_superstruct.default.boolean())
]);
var HasLoadingBoundary = /*#__PURE__*/ function(HasLoadingBoundary) {
    // There is a loading boundary in this particular segment
    HasLoadingBoundary[HasLoadingBoundary["SegmentHasLoadingBoundary"] = 1] = "SegmentHasLoadingBoundary";
    // There is a loading boundary somewhere in the subtree (but not in
    // this segment)
    HasLoadingBoundary[HasLoadingBoundary["SubtreeHasLoadingBoundary"] = 2] = "SubtreeHasLoadingBoundary";
    // There is no loading boundary in this segment or any of its descendants
    HasLoadingBoundary[HasLoadingBoundary["SubtreeHasNoLoadingBoundary"] = 3] = "SubtreeHasNoLoadingBoundary";
    return HasLoadingBoundary;
}({}); //# sourceMappingURL=types.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/app-render/parse-and-validate-flight-router-state.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseAndValidateFlightRouterState", {
    enumerable: true,
    get: function() {
        return parseAndValidateFlightRouterState;
    }
});
const _types = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/app-render/types.js [app-rsc] (ecmascript)");
const _superstruct = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/superstruct/index.cjs [app-rsc] (ecmascript)");
function parseAndValidateFlightRouterState(stateHeader) {
    if (typeof stateHeader === 'undefined') {
        return undefined;
    }
    if (Array.isArray(stateHeader)) {
        throw Object.defineProperty(new Error('Multiple router state headers were sent. This is not allowed.'), "__NEXT_ERROR_CODE", {
            value: "E418",
            enumerable: false,
            configurable: true
        });
    }
    // We limit the size of the router state header to ~40kb. This is to prevent
    // a malicious user from sending a very large header and slowing down the
    // resolving of the router state.
    // This is around 2,000 nested or parallel route segment states:
    // '{"children":["",{}]}'.length === 20.
    if (stateHeader.length > 20 * 2000) {
        throw Object.defineProperty(new Error('The router state header was too large.'), "__NEXT_ERROR_CODE", {
            value: "E142",
            enumerable: false,
            configurable: true
        });
    }
    try {
        const state = JSON.parse(decodeURIComponent(stateHeader));
        (0, _superstruct.assert)(state, _types.flightRouterStateSchema);
        return state;
    } catch  {
        throw Object.defineProperty(new Error('The router state header was sent but could not be parsed.'), "__NEXT_ERROR_CODE", {
            value: "E10",
            enumerable: false,
            configurable: true
        });
    }
} //# sourceMappingURL=parse-and-validate-flight-router-state.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/generate-interception-routes-rewrites.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    generateInterceptionRoutesRewrites: null,
    isInterceptionRouteRewrite: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    generateInterceptionRoutesRewrites: function() {
        return generateInterceptionRoutesRewrites;
    },
    isInterceptionRouteRewrite: function() {
        return isInterceptionRouteRewrite;
    }
});
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/client/components/app-router-headers.js [app-rsc] (ecmascript)");
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
const _routematchutils = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)");
// a function that converts normalised paths (e.g. /foo/[bar]/[baz]) to the format expected by pathToRegexp (e.g. /foo/:bar/:baz)
function toPathToRegexpPath(path) {
    return path.replace(/\[\[?([^\]]+)\]\]?/g, (_, capture)=>{
        // path-to-regexp only supports word characters, so we replace any non-word characters with underscores
        const paramName = capture.replace(/\W+/g, '_');
        // handle catch-all segments (e.g. /foo/bar/[...baz] or /foo/bar/[[...baz]])
        if (capture.startsWith('...')) {
            return `:${capture.slice(3)}*`;
        }
        return ':' + paramName;
    });
}
function generateInterceptionRoutesRewrites(appPaths, basePath = '') {
    const rewrites = [];
    for (const appPath of appPaths){
        if ((0, _interceptionroutes.isInterceptionRouteAppPath)(appPath)) {
            const { interceptingRoute, interceptedRoute } = (0, _interceptionroutes.extractInterceptionRouteInformation)(appPath);
            const normalizedInterceptingRoute = `${interceptingRoute !== '/' ? toPathToRegexpPath(interceptingRoute) : ''}/(.*)?`;
            const normalizedInterceptedRoute = toPathToRegexpPath(interceptedRoute);
            const normalizedAppPath = toPathToRegexpPath(appPath);
            // pathToRegexp returns a regex that matches the path, but we need to
            // convert it to a string that can be used in a header value
            // to the format that Next/the proxy expects
            let interceptingRouteRegex = (0, _routematchutils.safePathToRegexp)(normalizedInterceptingRoute).toString().slice(2, -3);
            rewrites.push({
                source: `${basePath}${normalizedInterceptedRoute}`,
                destination: `${basePath}${normalizedAppPath}`,
                has: [
                    {
                        type: 'header',
                        key: _approuterheaders.NEXT_URL,
                        value: interceptingRouteRegex
                    }
                ]
            });
        }
    }
    return rewrites;
}
function isInterceptionRouteRewrite(route) {
    var _route_has_, _route_has;
    // When we generate interception rewrites in the above implementation, we always do so with only a single `has` condition.
    return ((_route_has = route.has) == null ? void 0 : (_route_has_ = _route_has[0]) == null ? void 0 : _route_has_.key) === _approuterheaders.NEXT_URL;
} //# sourceMappingURL=generate-interception-routes-rewrites.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/client/components/match-segments.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _interceptionroutes = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)");
const _matchsegments = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/client/components/match-segments.js [app-rsc] (ecmascript)");
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/server-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getPreviouslyRevalidatedTags: null,
    getServerUtils: null,
    interpolateDynamicPath: null,
    normalizeCdnUrl: null,
    normalizeDynamicRouteParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getPreviouslyRevalidatedTags: function() {
        return getPreviouslyRevalidatedTags;
    },
    getServerUtils: function() {
        return getServerUtils;
    },
    interpolateDynamicPath: function() {
        return interpolateDynamicPath;
    },
    normalizeCdnUrl: function() {
        return normalizeCdnUrl;
    },
    normalizeDynamicRouteParams: function() {
        return normalizeDynamicRouteParams;
    }
});
const _normalizelocalepath = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [app-rsc] (ecmascript)");
const _pathmatch = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/path-match.js [app-rsc] (ecmascript)");
const _routeregex = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
const _routematcher = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)");
const _preparedestination = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/prepare-destination.js [app-rsc] (ecmascript)");
const _removetrailingslash = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/web/utils.js [app-rsc] (ecmascript)");
const _decodequerypathparameter = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/lib/decode-query-path-parameter.js [app-rsc] (ecmascript)");
const _url = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/url.js [app-rsc] (ecmascript)");
const _formaturl = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-rsc] (ecmascript)");
const _parseandvalidateflightrouterstate = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/app-render/parse-and-validate-flight-router-state.js [app-rsc] (ecmascript)");
const _generateinterceptionroutesrewrites = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/generate-interception-routes-rewrites.js [app-rsc] (ecmascript)");
const _approuterheaders = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/client/components/app-router-headers.js [app-rsc] (ecmascript)");
const _computechangedpath = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-rsc] (ecmascript)");
function filterInternalQuery(query, paramKeys) {
    // this is used to pass query information in rewrites
    // but should not be exposed in final query
    delete query['nextInternalLocale'];
    for(const key in query){
        const isNextQueryPrefix = key !== _constants.NEXT_QUERY_PARAM_PREFIX && key.startsWith(_constants.NEXT_QUERY_PARAM_PREFIX);
        const isNextInterceptionMarkerPrefix = key !== _constants.NEXT_INTERCEPTION_MARKER_PREFIX && key.startsWith(_constants.NEXT_INTERCEPTION_MARKER_PREFIX);
        if (isNextQueryPrefix || isNextInterceptionMarkerPrefix || paramKeys.includes(key)) {
            delete query[key];
        }
    }
}
function normalizeCdnUrl(req, paramKeys) {
    // make sure to normalize req.url from CDNs to strip dynamic and rewrite
    // params from the query which are added during routing
    const _parsedUrl = (0, _url.parseReqUrl)(req.url);
    // we can't normalize if we can't parse
    if (!_parsedUrl) {
        return req.url;
    }
    delete _parsedUrl.search;
    filterInternalQuery(_parsedUrl.query, paramKeys);
    req.url = (0, _formaturl.formatUrl)(_parsedUrl);
}
function interpolateDynamicPath(pathname, params, defaultRouteRegex) {
    if (!defaultRouteRegex) return pathname;
    for (const param of Object.keys(defaultRouteRegex.groups)){
        const { optional, repeat } = defaultRouteRegex.groups[param];
        let builtParam = `[${repeat ? '...' : ''}${param}]`;
        if (optional) {
            builtParam = `[${builtParam}]`;
        }
        let paramValue;
        const value = params[param];
        if (Array.isArray(value)) {
            paramValue = value.map((v)=>v && encodeURIComponent(v)).join('/');
        } else if (value) {
            paramValue = encodeURIComponent(value);
        } else {
            paramValue = '';
        }
        if (paramValue || optional) {
            pathname = pathname.replaceAll(builtParam, paramValue);
        }
    }
    return pathname;
}
function normalizeDynamicRouteParams(query, defaultRouteRegex, defaultRouteMatches, ignoreMissingOptional) {
    let hasValidParams = true;
    let params = {};
    for (const key of Object.keys(defaultRouteRegex.groups)){
        let value = query[key];
        if (typeof value === 'string') {
            value = (0, _apppaths.normalizeRscURL)(value);
        } else if (Array.isArray(value)) {
            value = value.map(_apppaths.normalizeRscURL);
        }
        // if the value matches the default value we can't rely
        // on the parsed params, this is used to signal if we need
        // to parse x-now-route-matches or not
        const defaultValue = defaultRouteMatches[key];
        const isOptional = defaultRouteRegex.groups[key].optional;
        const isDefaultValue = Array.isArray(defaultValue) ? defaultValue.some((defaultVal)=>{
            return Array.isArray(value) ? value.some((val)=>val.includes(defaultVal)) : value == null ? void 0 : value.includes(defaultVal);
        }) : value == null ? void 0 : value.includes(defaultValue);
        if (isDefaultValue || typeof value === 'undefined' && !(isOptional && ignoreMissingOptional)) {
            return {
                params: {},
                hasValidParams: false
            };
        }
        // non-provided optional values should be undefined so normalize
        // them to undefined
        if (isOptional && (!value || Array.isArray(value) && value.length === 1 && // fallback optional catch-all SSG pages have
        // [[...paramName]] for the root path on Vercel
        (value[0] === 'index' || value[0] === `[[...${key}]]`))) {
            value = undefined;
            delete query[key];
        }
        // query values from the proxy aren't already split into arrays
        // so make sure to normalize catch-all values
        if (value && typeof value === 'string' && defaultRouteRegex.groups[key].repeat) {
            value = value.split('/');
        }
        if (value) {
            params[key] = value;
        }
    }
    return {
        params,
        hasValidParams
    };
}
function getServerUtils({ page, i18n, basePath, rewrites, pageIsDynamic, trailingSlash, caseSensitive }) {
    let defaultRouteRegex;
    let dynamicRouteMatcher;
    let defaultRouteMatches;
    if (pageIsDynamic) {
        defaultRouteRegex = (0, _routeregex.getNamedRouteRegex)(page, {
            prefixRouteKeys: false
        });
        dynamicRouteMatcher = (0, _routematcher.getRouteMatcher)(defaultRouteRegex);
        defaultRouteMatches = dynamicRouteMatcher(page);
    }
    function handleRewrites(req, parsedUrl) {
        const rewriteParams = {};
        let fsPathname = parsedUrl.pathname;
        const matchesPage = ()=>{
            const fsPathnameNoSlash = (0, _removetrailingslash.removeTrailingSlash)(fsPathname || '');
            return fsPathnameNoSlash === (0, _removetrailingslash.removeTrailingSlash)(page) || (dynamicRouteMatcher == null ? void 0 : dynamicRouteMatcher(fsPathnameNoSlash));
        };
        const checkRewrite = (rewrite)=>{
            const matcher = (0, _pathmatch.getPathMatch)(rewrite.source + (trailingSlash ? '(/)?' : ''), {
                removeUnnamedParams: true,
                strict: true,
                sensitive: !!caseSensitive
            });
            if (!parsedUrl.pathname) return false;
            let params = matcher(parsedUrl.pathname);
            if ((rewrite.has || rewrite.missing) && params) {
                const hasParams = (0, _preparedestination.matchHas)(req, parsedUrl.query, rewrite.has, rewrite.missing);
                if (hasParams) {
                    Object.assign(params, hasParams);
                } else {
                    params = false;
                }
            }
            if (params) {
                try {
                    // An interception rewrite might reference a dynamic param for a route the user
                    // is currently on, which wouldn't be extractable from the matched route params.
                    // This attempts to extract the dynamic params from the provided router state.
                    if ((0, _generateinterceptionroutesrewrites.isInterceptionRouteRewrite)(rewrite)) {
                        const stateHeader = req.headers[_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER];
                        if (stateHeader) {
                            params = {
                                ...(0, _computechangedpath.getSelectedParams)((0, _parseandvalidateflightrouterstate.parseAndValidateFlightRouterState)(stateHeader)),
                                ...params
                            };
                        }
                    }
                } catch (err) {
                // this is a no-op -- we couldn't extract dynamic params from the provided router state,
                // so we'll just use the params from the route matcher
                }
                const { parsedDestination, destQuery } = (0, _preparedestination.prepareDestination)({
                    appendParamsToQuery: true,
                    destination: rewrite.destination,
                    params: params,
                    query: parsedUrl.query
                });
                // if the rewrite destination is external break rewrite chain
                if (parsedDestination.protocol) {
                    return true;
                }
                Object.assign(rewriteParams, destQuery, params);
                Object.assign(parsedUrl.query, parsedDestination.query);
                delete parsedDestination.query;
                // for each property in parsedUrl.query, if the value is parametrized (eg :foo), look up the value
                // in rewriteParams and replace the parametrized value with the actual value
                // this is used when the rewrite destination does not contain the original source param
                // and so the value is still parametrized and needs to be replaced with the actual rewrite param
                Object.entries(parsedUrl.query).forEach(([key, value])=>{
                    if (value && typeof value === 'string' && value.startsWith(':')) {
                        const paramName = value.slice(1);
                        const actualValue = rewriteParams[paramName];
                        if (actualValue) {
                            parsedUrl.query[key] = actualValue;
                        }
                    }
                });
                Object.assign(parsedUrl, parsedDestination);
                fsPathname = parsedUrl.pathname;
                if (!fsPathname) return false;
                if (basePath) {
                    fsPathname = fsPathname.replace(new RegExp(`^${basePath}`), '') || '/';
                }
                if (i18n) {
                    const result = (0, _normalizelocalepath.normalizeLocalePath)(fsPathname, i18n.locales);
                    fsPathname = result.pathname;
                    parsedUrl.query.nextInternalLocale = result.detectedLocale || params.nextInternalLocale;
                }
                if (fsPathname === page) {
                    return true;
                }
                if (pageIsDynamic && dynamicRouteMatcher) {
                    const dynamicParams = dynamicRouteMatcher(fsPathname);
                    if (dynamicParams) {
                        parsedUrl.query = {
                            ...parsedUrl.query,
                            ...dynamicParams
                        };
                        return true;
                    }
                }
            }
            return false;
        };
        for (const rewrite of rewrites.beforeFiles || []){
            checkRewrite(rewrite);
        }
        if (fsPathname !== page) {
            let finished = false;
            for (const rewrite of rewrites.afterFiles || []){
                finished = checkRewrite(rewrite);
                if (finished) break;
            }
            if (!finished && !matchesPage()) {
                for (const rewrite of rewrites.fallback || []){
                    finished = checkRewrite(rewrite);
                    if (finished) break;
                }
            }
        }
        return rewriteParams;
    }
    function getParamsFromRouteMatches(routeMatchesHeader) {
        // If we don't have a default route regex, we can't get params from route
        // matches
        if (!defaultRouteRegex) return null;
        const { groups, routeKeys } = defaultRouteRegex;
        const matcher = (0, _routematcher.getRouteMatcher)({
            re: {
                // Simulate a RegExp match from the \`req.url\` input
                exec: (str)=>{
                    // Normalize all the prefixed query params.
                    const obj = Object.fromEntries(new URLSearchParams(str));
                    for (const [key, value] of Object.entries(obj)){
                        const normalizedKey = (0, _utils.normalizeNextQueryParam)(key);
                        if (!normalizedKey) continue;
                        obj[normalizedKey] = value;
                        delete obj[key];
                    }
                    // Use all the named route keys.
                    const result = {};
                    for (const keyName of Object.keys(routeKeys)){
                        const paramName = routeKeys[keyName];
                        // If this param name is not a valid parameter name, then skip it.
                        if (!paramName) continue;
                        const group = groups[paramName];
                        const value = obj[keyName];
                        // When we're missing a required param, we can't match the route.
                        if (!group.optional && !value) return null;
                        result[group.pos] = value;
                    }
                    return result;
                }
            },
            groups
        });
        const routeMatches = matcher(routeMatchesHeader);
        if (!routeMatches) return null;
        return routeMatches;
    }
    function normalizeQueryParams(query, routeParamKeys) {
        // this is used to pass query information in rewrites
        // but should not be exposed in final query
        delete query['nextInternalLocale'];
        for (const [key, value] of Object.entries(query)){
            const normalizedKey = (0, _utils.normalizeNextQueryParam)(key);
            if (!normalizedKey) continue;
            // Remove the prefixed key from the query params because we want
            // to consume it for the dynamic route matcher.
            delete query[key];
            routeParamKeys.add(normalizedKey);
            if (typeof value === 'undefined') continue;
            query[normalizedKey] = Array.isArray(value) ? value.map((v)=>(0, _decodequerypathparameter.decodeQueryPathParameter)(v)) : (0, _decodequerypathparameter.decodeQueryPathParameter)(value);
        }
    }
    return {
        handleRewrites,
        defaultRouteRegex,
        dynamicRouteMatcher,
        defaultRouteMatches,
        normalizeQueryParams,
        getParamsFromRouteMatches,
        /**
     * Normalize dynamic route params.
     *
     * @param query - The query params to normalize.
     * @param ignoreMissingOptional - Whether to ignore missing optional params.
     * @returns The normalized params and whether they are valid.
     */ normalizeDynamicRouteParams: (query, ignoreMissingOptional)=>{
            if (!defaultRouteRegex || !defaultRouteMatches) {
                return {
                    params: {},
                    hasValidParams: false
                };
            }
            return normalizeDynamicRouteParams(query, defaultRouteRegex, defaultRouteMatches, ignoreMissingOptional);
        },
        normalizeCdnUrl: (req, paramKeys)=>normalizeCdnUrl(req, paramKeys),
        interpolateDynamicPath: (pathname, params)=>interpolateDynamicPath(pathname, params, defaultRouteRegex),
        filterInternalQuery: (query, paramKeys)=>filterInternalQuery(query, paramKeys)
    };
}
function getPreviouslyRevalidatedTags(headers, previewModeId) {
    return typeof headers[_constants.NEXT_CACHE_REVALIDATED_TAGS_HEADER] === 'string' && headers[_constants.NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER] === previewModeId ? headers[_constants.NEXT_CACHE_REVALIDATED_TAGS_HEADER].split(',') : [];
} //# sourceMappingURL=server-utils.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/hash.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// http://www.cse.yorku.ca/~oz/hash.html
// More specifically, 32-bit hash via djbxor
// (ref: https://gist.github.com/eplawless/52813b1d8ad9af510d85?permalink_comment_id=3367765#gistcomment-3367765)
// This is due to number type differences between rust for turbopack to js number types,
// where rust does not have easy way to repreesnt js's 53-bit float number type for the matching
// overflow behavior. This is more `correct` in terms of having canonical hash across different runtime / implementation
// as can gaurantee determinstic output from 32bit hash.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    djb2Hash: null,
    hexHash: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    djb2Hash: function() {
        return djb2Hash;
    },
    hexHash: function() {
        return hexHash;
    }
});
function djb2Hash(str) {
    let hash = 5381;
    for(let i = 0; i < str.length; i++){
        const char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char & 0xffffffff;
    }
    return hash >>> 0;
}
function hexHash(str) {
    return djb2Hash(str).toString(36).slice(0, 5);
} //# sourceMappingURL=hash.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fillMetadataSegment: null,
    normalizeMetadataPageToRoute: null,
    normalizeMetadataRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fillMetadataSegment: function() {
        return fillMetadataSegment;
    },
    normalizeMetadataPageToRoute: function() {
        return normalizeMetadataPageToRoute;
    },
    normalizeMetadataRoute: function() {
        return normalizeMetadataRoute;
    }
});
const _ismetadataroute = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/lib/metadata/is-metadata-route.js [app-rsc] (ecmascript)");
const _path = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/isomorphic/path.js [app-rsc] (ecmascript)"));
const _serverutils = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/server-utils.js [app-rsc] (ecmascript)");
const _routeregex = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
const _hash = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/hash.js [app-rsc] (ecmascript)");
const _apppaths = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
const _normalizepathsep = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js [app-rsc] (ecmascript)");
const _segment = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/shared/lib/segment.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/*
 * If there's special convention like (...) or @ in the page path,
 * Give it a unique hash suffix to avoid conflicts
 *
 * e.g.
 * /opengraph-image -> /opengraph-image
 * /(post)/opengraph-image.tsx -> /opengraph-image-[0-9a-z]{6}
 *
 * Sitemap is an exception, it should not have a suffix.
 * Each sitemap contains all the urls of sub routes, we don't have the case of duplicates `/(group)/sitemap.[ext]` and `/sitemap.[ext]` since they should be the same.
 * Hence we always normalize the urls for sitemap and do not append hash suffix, and ensure user-land only contains one sitemap per pathname.
 *
 * /sitemap -> /sitemap
 * /(post)/sitemap -> /sitemap
 */ function getMetadataRouteSuffix(page) {
    // Remove the last segment and get the parent pathname
    // e.g. /parent/a/b/c -> /parent/a/b
    // e.g. /parent/opengraph-image -> /parent
    const parentPathname = _path.default.dirname(page);
    // Only apply suffix to metadata routes except for sitemaps
    if (page.endsWith('/sitemap')) {
        return '';
    }
    // Calculate the hash suffix based on the parent path
    let suffix = '';
    // Check if there's any special characters in the parent pathname.
    const segments = parentPathname.split('/');
    if (segments.some((seg)=>(0, _segment.isGroupSegment)(seg) || (0, _segment.isParallelRouteSegment)(seg))) {
        // Hash the parent path to get a unique suffix
        suffix = (0, _hash.djb2Hash)(parentPathname).toString(36).slice(0, 6);
    }
    return suffix;
}
function fillMetadataSegment(segment, params, lastSegment) {
    const pathname = (0, _apppaths.normalizeAppPath)(segment);
    const routeRegex = (0, _routeregex.getNamedRouteRegex)(pathname, {
        prefixRouteKeys: false
    });
    const route = (0, _serverutils.interpolateDynamicPath)(pathname, params, routeRegex);
    const { name, ext } = _path.default.parse(lastSegment);
    const pagePath = _path.default.posix.join(segment, name);
    const suffix = getMetadataRouteSuffix(pagePath);
    const routeSuffix = suffix ? `-${suffix}` : '';
    return (0, _normalizepathsep.normalizePathSep)(_path.default.join(route, `${name}${routeSuffix}${ext}`));
}
function normalizeMetadataRoute(page) {
    if (!(0, _ismetadataroute.isMetadataPage)(page)) {
        return page;
    }
    let route = page;
    let suffix = '';
    if (page === '/robots') {
        route += '.txt';
    } else if (page === '/manifest') {
        route += '.webmanifest';
    } else {
        suffix = getMetadataRouteSuffix(page);
    }
    // Support both /<metadata-route.ext> and custom routes /<metadata-route>/route.ts.
    // If it's a metadata file route, we need to append /[id]/route to the page.
    if (!route.endsWith('/route')) {
        const { dir, name: baseName, ext } = _path.default.parse(route);
        route = _path.default.posix.join(dir, `${baseName}${suffix ? `-${suffix}` : ''}${ext}`, 'route');
    }
    return route;
}
function normalizeMetadataPageToRoute(page, isDynamic) {
    const isRoute = page.endsWith('/route');
    const routePagePath = isRoute ? page.slice(0, -'/route'.length) : page;
    const metadataRouteExtension = routePagePath.endsWith('/sitemap') ? '.xml' : '';
    const mapped = isDynamic ? `${routePagePath}/[__metadata_id__]` : `${routePagePath}${metadataRouteExtension}`;
    return mapped + (isRoute ? '/route' : '');
} //# sourceMappingURL=get-metadata-route.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RouteKind",
    ()=>RouteKind
]);
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactServerDOMTurbopackServer; //# sourceMappingURL=react-server-dom-turbopack-server.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactServerDOMTurbopackStatic; //# sourceMappingURL=react-server-dom-turbopack-static.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].React; //# sourceMappingURL=react.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js <module evaluation>"));
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js"));
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js <module evaluation>"));
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js"));
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js <module evaluation>"));
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js"));
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js <module evaluation>"));
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js"));
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxRuntime; //# sourceMappingURL=react-jsx-runtime.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.node.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = (()=>{
        const e = new Error("Cannot find module './cjs/react-server-dom-turbopack-client.node.development.js'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
}
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/string-hash/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        328: (e)=>{
            function hash(e) {
                var r = 5381, _ = e.length;
                while(_){
                    r = r * 33 ^ e.charCodeAt(--_);
                }
                return r >>> 0;
            }
            e.exports = hash;
        }
    };
    var r = {};
    function __nccwpck_require__(_) {
        var a = r[_];
        if (a !== undefined) {
            return a.exports;
        }
        var t = r[_] = {
            exports: {}
        };
        var i = true;
        try {
            e[_](t, t.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[_];
        }
        return t.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/string-hash") + "/";
    var _ = __nccwpck_require__(328);
    module.exports = _;
})();
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/format-server-error.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatServerError",
    ()=>formatServerError,
    "getStackWithoutErrorMessage",
    ()=>getStackWithoutErrorMessage
]);
const invalidServerComponentReactHooks = [
    'useDeferredValue',
    'useEffect',
    'useImperativeHandle',
    'useInsertionEffect',
    'useLayoutEffect',
    'useReducer',
    'useRef',
    'useState',
    'useSyncExternalStore',
    'useTransition',
    'experimental_useOptimistic',
    'useOptimistic'
];
function setMessage(error, message) {
    error.message = message;
    if (error.stack) {
        const lines = error.stack.split('\n');
        lines[0] = message;
        error.stack = lines.join('\n');
    }
}
function getStackWithoutErrorMessage(error) {
    const stack = error.stack;
    if (!stack) return '';
    return stack.replace(/^[^\n]*\n/, '');
}
function formatServerError(error) {
    if (typeof (error == null ? void 0 : error.message) !== 'string') return;
    if (error.message.includes('Class extends value undefined is not a constructor or null')) {
        const addedMessage = 'This might be caused by a React Class Component being rendered in a Server Component, React Class Components only works in Client Components. Read more: https://nextjs.org/docs/messages/class-component-in-server-component';
        // If this error instance already has the message, don't add it again
        if (error.message.includes(addedMessage)) return;
        setMessage(error, `${error.message}

${addedMessage}`);
        return;
    }
    if (error.message.includes('createContext is not a function')) {
        setMessage(error, 'createContext only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/context-in-server-component');
        return;
    }
    for (const clientHook of invalidServerComponentReactHooks){
        const regex = new RegExp(`\\b${clientHook}\\b.*is not a function`);
        if (regex.test(error.message)) {
            setMessage(error, `${clientHook} only works in Client Components. Add the "use client" directive at the top of the file to use it. Read more: https://nextjs.org/docs/messages/react-client-hook-in-server-component`);
            return;
        }
    }
} //# sourceMappingURL=format-server-error.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
__turbopack_context__.s([
    "BailoutToCSRError",
    ()=>BailoutToCSRError,
    "isBailoutToCSRError",
    ()=>isBailoutToCSRError
]);
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
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHangingPromiseRejectionError",
    ()=>isHangingPromiseRejectionError,
    "makeDevtoolsIOAwarePromise",
    ()=>makeDevtoolsIOAwarePromise,
    "makeHangingPromise",
    ()=>makeHangingPromise
]);
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying) {
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "METADATA_BOUNDARY_NAME",
    ()=>METADATA_BOUNDARY_NAME,
    "OUTLET_BOUNDARY_NAME",
    ()=>OUTLET_BOUNDARY_NAME,
    "ROOT_LAYOUT_BOUNDARY_NAME",
    ()=>ROOT_LAYOUT_BOUNDARY_NAME,
    "VIEWPORT_BOUNDARY_NAME",
    ()=>VIEWPORT_BOUNDARY_NAME
]);
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly
__turbopack_context__.s([
    "Postpone",
    ()=>Postpone,
    "PreludeState",
    ()=>PreludeState,
    "abortAndThrowOnSynchronousRequestDataAccess",
    ()=>abortAndThrowOnSynchronousRequestDataAccess,
    "abortOnSynchronousPlatformIOAccess",
    ()=>abortOnSynchronousPlatformIOAccess,
    "accessedDynamicData",
    ()=>accessedDynamicData,
    "annotateDynamicAccess",
    ()=>annotateDynamicAccess,
    "consumeDynamicAccess",
    ()=>consumeDynamicAccess,
    "createDynamicTrackingState",
    ()=>createDynamicTrackingState,
    "createDynamicValidationState",
    ()=>createDynamicValidationState,
    "createHangingInputAbortSignal",
    ()=>createHangingInputAbortSignal,
    "createRenderInBrowserAbortSignal",
    ()=>createRenderInBrowserAbortSignal,
    "delayUntilRuntimeStage",
    ()=>delayUntilRuntimeStage,
    "formatDynamicAPIAccesses",
    ()=>formatDynamicAPIAccesses,
    "getFirstDynamicReason",
    ()=>getFirstDynamicReason,
    "isDynamicPostpone",
    ()=>isDynamicPostpone,
    "isPrerenderInterruptedError",
    ()=>isPrerenderInterruptedError,
    "logDisallowedDynamicError",
    ()=>logDisallowedDynamicError,
    "markCurrentScopeAsDynamic",
    ()=>markCurrentScopeAsDynamic,
    "postponeWithTracking",
    ()=>postponeWithTracking,
    "throwIfDisallowedDynamic",
    ()=>throwIfDisallowedDynamic,
    "throwToInterruptStaticGeneration",
    ()=>throwToInterruptStaticGeneration,
    "trackAllowedDynamicAccess",
    ()=>trackAllowedDynamicAccess,
    "trackDynamicDataInDynamicRender",
    ()=>trackDynamicDataInDynamicRender,
    "trackSynchronousPlatformIOAccessInDev",
    ()=>trackSynchronousPlatformIOAccessInDev,
    "trackSynchronousRequestDataAccessInDev",
    ()=>trackSynchronousRequestDataAccessInDev,
    "useDynamicRouteParams",
    ()=>useDynamicRouteParams,
    "warnOnSyncDynamicError",
    ()=>warnOnSyncDynamicError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../client/components/hooks-server-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../client/components/static-generation-bailout'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-constants.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/scheduler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../shared/lib/invariant-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
;
const hasPostpone = typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function warnOnSyncDynamicError(dynamicTracking) {
    if (dynamicTracking.syncDynamicErrorWithStack) {
        // the server did something sync dynamic, likely
        // leading to an early termination of the prerender.
        console.error(dynamicTracking.syncDynamicErrorWithStack);
    }
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BailoutToCSRError"]('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = getRuntimeStagePromise(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>scheduleOnNextTick(()=>controller.abort()));
                } else {
                    scheduleOnNextTick(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = workAsyncStorage.getStore();
    const workUnitStore = workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROOT_LAYOUT_BOUNDARY_NAME"]} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["METADATA_BOUNDARY_NAME"]}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VIEWPORT_BOUNDARY_NAME"]}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OUTLET_BOUNDARY_NAME"]}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].captureOwnerStack ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        if (serverDynamic.syncDynamicErrorWithStack) {
            // There is no shell and the server did something sync dynamic likely
            // leading to an early termination of the prerender before the shell
            // could be completed. We terminate the build/validating render.
            logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
            throw new StaticGenBailoutError();
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new StaticGenBailoutError();
        }
    }
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/error-telemetry-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDigestWithErrorCode",
    ()=>createDigestWithErrorCode,
    "extractNextErrorCode",
    ()=>extractNextErrorCode
]);
const ERROR_CODE_DELIMITER = '@';
const createDigestWithErrorCode = (thrownValue, originalDigest)=>{
    if (typeof thrownValue === 'object' && thrownValue !== null && '__NEXT_ERROR_CODE' in thrownValue) {
        return `${originalDigest}${ERROR_CODE_DELIMITER}${thrownValue.__NEXT_ERROR_CODE}`;
    }
    return originalDigest;
};
const extractNextErrorCode = (error)=>{
    if (typeof error === 'object' && error !== null && '__NEXT_ERROR_CODE' in error && typeof error.__NEXT_ERROR_CODE === 'string') {
        return error.__NEXT_ERROR_CODE;
    }
    if (typeof error === 'object' && error !== null && 'digest' in error && typeof error.digest === 'string') {
        const segments = error.digest.split(ERROR_CODE_DELIMITER);
        const errorCode = segments.find((segment)=>segment.startsWith('E'));
        return errorCode;
    }
    return undefined;
}; //# sourceMappingURL=error-telemetry-utils.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/create-error-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFlightReactServerErrorHandler",
    ()=>createFlightReactServerErrorHandler,
    "createHTMLErrorHandler",
    ()=>createHTMLErrorHandler,
    "createHTMLReactServerErrorHandler",
    ()=>createHTMLReactServerErrorHandler,
    "getDigestForWellKnownError",
    ()=>getDigestForWellKnownError,
    "isUserLandError",
    ()=>isUserLandError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/compiled/string-hash/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/format-server-error.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/trace/tracer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../pipe-readable'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../client/components/hooks-server-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../client/components/is-next-router-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/is-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/error-telemetry-utils.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './react-large-shell-error'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
;
;
function getDigestForWellKnownError(error) {
    // If we're bailing out to CSR, we don't need to log the error.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBailoutToCSRError"])(error)) return error.digest;
    // If this is a navigation error, we don't need to log the error.
    if (isNextRouterError(error)) return error.digest;
    // If this error occurs, we know that we should be stopping the static
    // render. This is only thrown in static generation when PPR is not enabled,
    // which causes the whole page to be marked as dynamic. We don't need to
    // tell the user about this error, as it's not actionable.
    if (isDynamicServerError(error)) return error.digest;
    // If this is a prerender interrupted error, we don't need to log the error.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPrerenderInterruptedError"])(error)) return error.digest;
    return undefined;
}
function createFlightReactServerErrorHandler(shouldFormatError, onReactServerRenderError) {
    return (thrownValue)=>{
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if (isAbortError(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        if (isReactLargeShellError(thrownValue)) {
            // TODO: Aggregate
            console.error(thrownValue);
            return undefined;
        }
        const err = getProperError(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (!err.digest) {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            err.digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(err.message + err.stack || '').toString();
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatServerError"])(err);
        }
        // Record exception in an active span, if available.
        const span = getTracer().getActiveScopeSpan();
        if (span) {
            span.recordException(err);
            span.setAttribute('error.type', err.name);
            span.setStatus({
                code: SpanStatusCode.ERROR,
                message: err.message
            });
        }
        onReactServerRenderError(err);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigestWithErrorCode"])(thrownValue, err.digest);
    };
}
function createHTMLReactServerErrorHandler(shouldFormatError, isNextExport, reactServerErrors, silenceLogger, onReactServerRenderError) {
    return (thrownValue)=>{
        var _err_message;
        if (typeof thrownValue === 'string') {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(thrownValue).toString();
        }
        // If the response was closed, we don't need to log the error.
        if (isAbortError(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        if (isReactLargeShellError(thrownValue)) {
            // TODO: Aggregate
            console.error(thrownValue);
            return undefined;
        }
        const err = getProperError(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (!err.digest) {
            // TODO-APP: look at using webcrypto instead. Requires a promise to be awaited.
            err.digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(err.message + (err.stack || '')).toString();
        }
        // @TODO by putting this here and not at the top it is possible that
        // we don't error the build in places we actually expect to
        if (!reactServerErrors.has(err.digest)) {
            reactServerErrors.set(err.digest, err);
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatServerError"])(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception in an active span, if available.
            const span = getTracer().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setAttribute('error.type', err.name);
                span.setStatus({
                    code: SpanStatusCode.ERROR,
                    message: err.message
                });
            }
            if (!silenceLogger) {
                onReactServerRenderError == null ? void 0 : onReactServerRenderError(err);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigestWithErrorCode"])(thrownValue, err.digest);
    };
}
function createHTMLErrorHandler(shouldFormatError, isNextExport, reactServerErrors, allCapturedErrors, silenceLogger, onHTMLRenderSSRError) {
    return (thrownValue, errorInfo)=>{
        var _err_message;
        if (isReactLargeShellError(thrownValue)) {
            // TODO: Aggregate
            console.error(thrownValue);
            return undefined;
        }
        let isSSRError = true;
        allCapturedErrors.push(thrownValue);
        // If the response was closed, we don't need to log the error.
        if (isAbortError(thrownValue)) return;
        const digest = getDigestForWellKnownError(thrownValue);
        if (digest) {
            return digest;
        }
        const err = getProperError(thrownValue);
        // If the error already has a digest, respect the original digest,
        // so it won't get re-generated into another new error.
        if (err.digest) {
            if (reactServerErrors.has(err.digest)) {
                // This error is likely an obfuscated error from react-server.
                // We recover the original error here.
                thrownValue = reactServerErrors.get(err.digest);
                isSSRError = false;
            } else {
            // The error is not from react-server but has a digest
            // from other means so we don't need to produce a new one
            }
        } else {
            err.digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$string$2d$hash$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(err.message + ((errorInfo == null ? void 0 : errorInfo.componentStack) || err.stack || '')).toString();
        }
        // Format server errors in development to add more helpful error messages
        if (shouldFormatError) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$format$2d$server$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatServerError"])(err);
        }
        // Don't log the suppressed error during export
        if (!(isNextExport && (err == null ? void 0 : (_err_message = err.message) == null ? void 0 : _err_message.includes('The specific message is omitted in production builds to avoid leaking sensitive details.')))) {
            // Record exception in an active span, if available.
            const span = getTracer().getActiveScopeSpan();
            if (span) {
                span.recordException(err);
                span.setAttribute('error.type', err.name);
                span.setStatus({
                    code: SpanStatusCode.ERROR,
                    message: err.message
                });
            }
            if (!silenceLogger && // HTML errors contain RSC errors as well, filter them out before reporting
            isSSRError) {
                onHTMLRenderSSRError(err, errorInfo);
            }
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$error$2d$telemetry$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDigestWithErrorCode"])(thrownValue, err.digest);
    };
}
function isUserLandError(err) {
    return !isAbortError(err) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$lazy$2d$dynamic$2f$bailout$2d$to$2d$csr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBailoutToCSRError"])(err) && !isNextRouterError(err);
} //# sourceMappingURL=create-error-handler.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectSegmentData",
    ()=>collectSegmentData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/compiled/react-server-dom-turbopack/client.node.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../stream-utils/node-web-streams-helper'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../lib/scheduler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../shared/lib/segment-cache/segment-value-encoding'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$create$2d$error$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/create-error-handler.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const filterStackFrame = ("TURBOPACK compile-time truthy", 1) ? (()=>{
    const e = new Error("Cannot find module '../lib/source-maps'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})().filterStackFrameDEV : "TURBOPACK unreachable";
const findSourceMapURL = ("TURBOPACK compile-time truthy", 1) ? (()=>{
    const e = new Error("Cannot find module '../lib/source-maps'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})().findSourceMapURLDEV : "TURBOPACK unreachable";
function onSegmentPrerenderError(error) {
    const digest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$create$2d$error$2d$handler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDigestForWellKnownError"])(error);
    if (digest) {
        return digest;
    }
// We don't need to log the errors because we would have already done that
// when generating the original Flight stream for the whole page.
}
async function collectSegmentData(isClientParamParsingEnabled, fullPageDataBuffer, staleTime, clientModules, serverConsumerManifest) {
    // Traverse the router tree and generate a prefetch response for each segment.
    // A mutable map to collect the results as we traverse the route tree.
    const resultMap = new Map();
    // Before we start, warm up the module cache by decoding the page data once.
    // Then we can assume that any remaining async tasks that occur the next time
    // are due to hanging promises caused by dynamic data access. Note we only
    // have to do this once per page, not per individual segment.
    //
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFromReadableStream"])(streamFromBuffer(fullPageDataBuffer), {
            findSourceMapURL,
            serverConsumerManifest
        });
        await waitAtLeastOneReactRenderTask();
    } catch  {}
    // Create an abort controller that we'll use to stop the stream.
    const abortController = new AbortController();
    const onCompletedProcessingRouteTree = async ()=>{
        // Since all we're doing is decoding and re-encoding a cached prerender, if
        // serializing the stream takes longer than a microtask, it must because of
        // hanging promises caused by dynamic data.
        await waitAtLeastOneReactRenderTask();
        abortController.abort();
    };
    // Generate a stream for the route tree prefetch. While we're walking the
    // tree, we'll also spawn additional tasks to generate the segment prefetches.
    // The promises for these tasks are pushed to a mutable array that we will
    // await once the route tree is fully rendered.
    const segmentTasks = [];
    const { prelude: treeStream } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_prerender"])(// we need to use a component so that when we decode the original stream
    // inside of it, the side effects are transferred to the new stream.
    // @ts-expect-error
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(PrefetchTreeData, {
        isClientParamParsingEnabled: isClientParamParsingEnabled,
        fullPageDataBuffer: fullPageDataBuffer,
        serverConsumerManifest: serverConsumerManifest,
        clientModules: clientModules,
        staleTime: staleTime,
        segmentTasks: segmentTasks,
        onCompletedProcessingRouteTree: onCompletedProcessingRouteTree
    }), clientModules, {
        filterStackFrame,
        signal: abortController.signal,
        onError: onSegmentPrerenderError
    });
    // Write the route tree to a special `/_tree` segment.
    const treeBuffer = await streamToBuffer(treeStream);
    resultMap.set('/_tree', treeBuffer);
    // Now that we've finished rendering the route tree, all the segment tasks
    // should have been spawned. Await them in parallel and write the segment
    // prefetches to the result map.
    for (const [segmentPath, buffer] of (await Promise.all(segmentTasks))){
        resultMap.set(segmentPath, buffer);
    }
    return resultMap;
}
async function PrefetchTreeData({ isClientParamParsingEnabled, fullPageDataBuffer, serverConsumerManifest, clientModules, staleTime, segmentTasks, onCompletedProcessingRouteTree }) {
    // We're currently rendering a Flight response for the route tree prefetch.
    // Inside this component, decode the Flight stream for the whole page. This is
    // a hack to transfer the side effects from the original Flight stream (e.g.
    // Float preloads) onto the Flight stream for the tree prefetch.
    // TODO: React needs a better way to do this. Needed for Server Actions, too.
    const initialRSCPayload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$server$2d$dom$2d$turbopack$2f$client$2e$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFromReadableStream"])(createUnclosingPrefetchStream(streamFromBuffer(fullPageDataBuffer)), {
        findSourceMapURL,
        serverConsumerManifest
    });
    const buildId = initialRSCPayload.b;
    // FlightDataPath is an unsound type, hence the additional checks.
    const flightDataPaths = initialRSCPayload.f;
    if (flightDataPaths.length !== 1 && flightDataPaths[0].length !== 3) {
        console.error('Internal Next.js error: InitialRSCPayload does not match the expected ' + 'shape for a prerendered page during segment prefetch generation.');
        return null;
    }
    const flightRouterState = flightDataPaths[0][0];
    const seedData = flightDataPaths[0][1];
    const head = flightDataPaths[0][2];
    // Compute the route metadata tree by traversing the FlightRouterState. As we
    // walk the tree, we will also spawn a task to produce a prefetch response for
    // each segment.
    const tree = collectSegmentDataImpl(isClientParamParsingEnabled, flightRouterState, buildId, seedData, clientModules, ROOT_SEGMENT_REQUEST_KEY, segmentTasks);
    const isHeadPartial = await isPartialRSCData(head, clientModules);
    // Notify the abort controller that we're done processing the route tree.
    // Anything async that happens after this point must be due to hanging
    // promises in the original stream.
    onCompletedProcessingRouteTree();
    // Render the route tree to a special `/_tree` segment.
    const treePrefetch = {
        buildId,
        tree,
        head,
        isHeadPartial,
        staleTime
    };
    return treePrefetch;
}
function collectSegmentDataImpl(isClientParamParsingEnabled, route, buildId, seedData, clientModules, requestKey, segmentTasks) {
    // Metadata about the segment. Sent as part of the tree prefetch. Null if
    // there are no children.
    let slotMetadata = null;
    const children = route[1];
    const seedDataChildren = seedData !== null ? seedData[2] : null;
    for(const parallelRouteKey in children){
        const childRoute = children[parallelRouteKey];
        const childSegment = childRoute[0];
        const childSeedData = seedDataChildren !== null ? seedDataChildren[parallelRouteKey] : null;
        const childRequestKey = appendSegmentRequestKeyPart(requestKey, parallelRouteKey, createSegmentRequestKeyPart(childSegment));
        const childTree = collectSegmentDataImpl(isClientParamParsingEnabled, childRoute, buildId, childSeedData, clientModules, childRequestKey, segmentTasks);
        if (slotMetadata === null) {
            slotMetadata = {};
        }
        slotMetadata[parallelRouteKey] = childTree;
    }
    if (seedData !== null) {
        // Spawn a task to write the segment data to a new Flight stream.
        segmentTasks.push(// current task to escape the current rendering context.
        waitAtLeastOneReactRenderTask().then(()=>renderSegmentPrefetch(buildId, seedData, requestKey, clientModules)));
    } else {
    // This segment does not have any seed data. Skip generating a prefetch
    // response for it. We'll still include it in the route tree, though.
    // TODO: We should encode in the route tree whether a segment is missing
    // so we don't attempt to fetch it for no reason. As of now this shouldn't
    // ever happen in practice, though.
    }
    const segment = route[0];
    let name;
    let paramType = null;
    let paramKey = null;
    if (typeof segment === 'string') {
        name = segment;
        paramKey = segment;
        paramType = null;
    } else {
        name = segment[0];
        paramKey = segment[1];
        paramType = segment[2];
    }
    // Metadata about the segment. Sent to the client as part of the
    // tree prefetch.
    return {
        name,
        paramType,
        // This value is ommitted from the prefetch response when clientParamParsing
        // is enabled. The flag only exists while we're testing the feature, in
        // case there's a bug and we need to revert.
        // TODO: Remove once clientParamParsing is enabled everywhere.
        paramKey: isClientParamParsingEnabled ? null : paramKey,
        slots: slotMetadata,
        isRootLayout: route[4] === true
    };
}
async function renderSegmentPrefetch(buildId, seedData, requestKey, clientModules) {
    // Render the segment data to a stream.
    // In the future, this is where we can include additional metadata, like the
    // stale time and cache tags.
    const rsc = seedData[1];
    const loading = seedData[3];
    const segmentPrefetch = {
        buildId,
        rsc,
        loading,
        isPartial: await isPartialRSCData(rsc, clientModules)
    };
    // Since all we're doing is decoding and re-encoding a cached prerender, if
    // it takes longer than a microtask, it must because of hanging promises
    // caused by dynamic data. Abort the stream at the end of the current task.
    const abortController = new AbortController();
    waitAtLeastOneReactRenderTask().then(()=>abortController.abort());
    const { prelude: segmentStream } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_prerender"])(segmentPrefetch, clientModules, {
        filterStackFrame,
        signal: abortController.signal,
        onError: onSegmentPrerenderError
    });
    const segmentBuffer = await streamToBuffer(segmentStream);
    if (requestKey === ROOT_SEGMENT_REQUEST_KEY) {
        return [
            '/_index',
            segmentBuffer
        ];
    } else {
        return [
            requestKey,
            segmentBuffer
        ];
    }
}
async function isPartialRSCData(rsc, clientModules) {
    // We can determine if a segment contains only partial data if it takes longer
    // than a task to encode, because dynamic data is encoded as an infinite
    // promise. We must do this in a separate Flight prerender from the one that
    // actually generates the prefetch stream because we need to include
    // `isPartial` in the stream itself.
    let isPartial = false;
    const abortController = new AbortController();
    waitAtLeastOneReactRenderTask().then(()=>{
        // If we haven't yet finished the outer task, then it must be because we
        // accessed dynamic data.
        isPartial = true;
        abortController.abort();
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_prerender"])(rsc, clientModules, {
        filterStackFrame,
        signal: abortController.signal,
        onError () {},
        onPostpone () {
            // If something postponed, i.e. when Cache Components is not enabled, we can
            // infer that the RSC data is partial.
            isPartial = true;
        }
    });
    return isPartial;
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
} //# sourceMappingURL=collect-segment-data.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line import/no-extraneous-dependencies
__turbopack_context__.s([
    "SegmentViewNode",
    ()=>SegmentViewNode,
    "SegmentViewStateNode",
    ()=>SegmentViewStateNode,
    "patchFetch",
    ()=>patchFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static.js [app-rsc] (ecmascript)");
// eslint-disable-next-line import/no-extraneous-dependencies
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../client/components/layout-router'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../client/components/render-from-template-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../request/search-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../request/params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../client/components/hooks-server-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/metadata/metadata'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './rsc/preloads'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './rsc/postpone'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './rsc/taint'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/patch-fetch'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
let SegmentViewNode = ()=>null;
let SegmentViewStateNode = ()=>null;
if ("TURBOPACK compile-time truthy", 1) {
    const mod = (()=>{
        const e = new Error("Cannot find module '../../next-devtools/userspace/app/segment-explorer-node'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })();
    SegmentViewNode = mod.SegmentViewNode;
    SegmentViewStateNode = mod.SegmentViewStateNode;
}
// hot-reloader modules are not bundled so we need to inject `__next__clear_chunk_cache__`
// into globalThis from this file which is bundled.
if ("TURBOPACK compile-time truthy", 1) {
    globalThis.__next__clear_chunk_cache__ = /*TURBOPACK member replacement*/ __turbopack_context__.C;
} else //TURBOPACK unreachable
;
function patchFetch() {
    return _patchFetch({
        workAsyncStorage,
        workUnitAsyncStorage
    });
}
;
 //# sourceMappingURL=entry-base.js.map
}),
"[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClientSegmentRoot"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTTPAccessFallbackBoundary"],
    "MetadataBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MetadataBoundary"],
    "OutletBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["OutletBoundary"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SegmentViewStateNode"],
    "ViewportBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewportBoundary"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectSegmentData"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decodeReply"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["patchFetch"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unstable_prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderToReadableStream"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$static$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-static.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../client/components/layout-router'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../client/components/render-from-template-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../app-render/work-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './work-unit-async-storage.external'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$action$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$page$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-page.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$client$2d$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/client-segment.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../request/search-params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../request/params'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../client/components/hooks-server-context'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$http$2d$access$2d$fallback$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/client/components/http-access-fallback/error-boundary.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../lib/metadata/metadata'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$framework$2f$boundary$2d$components$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/lib/framework/boundary-components.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './rsc/preloads'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './rsc/postpone'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './rsc/taint'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$MedSecureAI$2d2d2d$Impactverse$2d$Client1$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$collect$2d$segment$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/MedSecureAI---Impactverse-Client1/frontend/node_modules/next/dist/esm/server/app-render/collect-segment-data.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_MedSecureAI---Impactverse-Client1_400d4a7c._.js.map