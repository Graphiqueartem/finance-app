﻿!(function r(o, i, a) {
    function s(t, e) {
        if (!i[t]) {
            if (!o[t]) {
                var n = "function" == typeof require && require;
                if (!e && n) return n(t, !0);
                if (l) return l(t, !0);
                throw (((n = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND"), n);
            }
            (n = i[t] = { exports: {} }),
                o[t][0].call(
                    n.exports,
                    function (e) {
                        return s(o[t][1][e] || e);
                    },
                    n,
                    n.exports,
                    r,
                    o,
                    i,
                    a
                );
        }
        return i[t].exports;
    }
    for (var l = "function" == typeof require && require, e = 0; e < a.length; e++) s(a[e]);
    return s;
})(
    {
        1: [
            function (e, t, n) {
                "use strict";
                (0, e("@trustpilot/trustbox-micro-framework").microStar)();
            },
            { "@trustpilot/trustbox-micro-framework": 28 },
        ],
        28: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.microStar = void 0);
                e = e("./trustboxes");
                e.microCombo, e.microReviewCount, (n.microStar = e.microStar), e.microTrustScore;
            },
            { "./trustboxes": 30 },
        ],
        2: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.apiCall = void 0);
                var a = r(e("../xhr")),
                    s = e("../queryString"),
                    l = r(e("../rootUri"));
                function r(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                n.apiCall = function (o, i) {
                    return new Promise(function (e, t) {
                        var n = void 0,
                            r = void 0;
                        if (
                            (0 === o.indexOf("/") &&
                                ((n = i || {}),
                                (0, s.getAsObject)().token &&
                                    (n.random = (function (e) {
                                        for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = 0; r < e; r++) t += n.charAt(Math.floor(Math.random() * n.length));
                                        return t;
                                    })(20))),
                            0 === o.indexOf("http"))
                        )
                            r = o.replace(/^https?:/, "https:");
                        else {
                            if (0 !== o.indexOf("/")) return t();
                            r = (0, l.default)() + o;
                        }
                        return (0, a.default)({ url: r, data: n, success: e, error: t });
                    });
                };
            },
            { "../queryString": 16, "../rootUri": 17, "../xhr": 25 },
        ],
        25: [
            function (e, t, n) {
                "use strict";
                function a() {
                    var e = navigator.userAgent.toLowerCase();
                    return -1 !== e.indexOf("msie") && parseInt(e.split("msie")[1]);
                }
                function s(t) {
                    try {
                        return JSON.parse(t.responseText);
                    } catch (e) {
                        return t.responseText;
                    }
                }
                function l() {}
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.default = function (e) {
                        var t,
                            n,
                            r,
                            o,
                            i = { type: e.type || "GET", error: e.error || l, success: e.success || l, data: e.data, url: e.url || "" };
                        "GET" === i.type &&
                            i.data &&
                            ((i.url =
                                i.url +
                                "?" +
                                (function (e) {
                                    var t,
                                        n = [];
                                    for (t in e) e.hasOwnProperty(t) && n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                                    return n.join("&");
                                })(i.data)),
                            delete i.data),
                            a() && a() <= 9
                                ? ((r = i),
                                  (o = new window.XDomainRequest()),
                                  (e = window.location.protocol),
                                  (r.url = r.url.replace(/https?:/, e)),
                                  o.open(r.type, r.url),
                                  (o.onload = function () {
                                      r.success(s(o));
                                  }),
                                  (o.onerror = function () {
                                      r.error(s(o));
                                  }),
                                  setTimeout(function () {
                                      o.send(r.data);
                                  }, 0))
                                : ((t = i),
                                  (n = new (window.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0")).open(t.type, t.url, !0),
                                  n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                                  (n.onreadystatechange = function () {
                                      4 === n.readyState && (200 <= n.status && n.status < 300 ? t.success(s(n)) : t.error(s(n)));
                                  }),
                                  n.send(t.data));
                    });
            },
            {},
        ],
        16: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.getAsObject = void 0);
                var r =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    o = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function (e, t) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    (o = !0), (i = e);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (o) throw i;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    },
                    i = e("./fn");
                function a(e) {
                    var t = ["?", "#"];
                    return (0, i.compose)(
                        i.pairsToObject,
                        function (e) {
                            return e
                                .split("&")
                                .filter(Boolean)
                                .map(function (e) {
                                    var t = e.split("="),
                                        e = o(t, 2),
                                        t = e[0],
                                        e = e[1];
                                    try {
                                        return [decodeURIComponent(t), decodeURIComponent(e)];
                                    } catch (e) {}
                                })
                                .filter(Boolean);
                        },
                        function (e) {
                            return -1 !== t.indexOf(e[0]) ? e.substring(1) : e;
                        }
                    )(e);
                }
                function s() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location,
                        t = a(e.search),
                        e = a(e.hash);
                    return r({}, t, e);
                }
                n.getAsObject = s;
            },
            { "./fn": 12 },
        ],
        17: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.default = function () {
                        var e = "https://widget.trustpilot.com";
                        return 0 === e.indexOf("#") ? "https://widget.tp-staging.com" : e;
                    });
            },
            {},
        ],
        3: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.hasProductReviews = n.hasServiceReviewsMultiFetch = n.hasServiceReviews = n.multiFetchData = n.fetchData = void 0);
                var l = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function (e, t) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    (o = !0), (i = e);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (o) throw i;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    },
                    o =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    i = e("./call"),
                    u = e("../utils"),
                    c = e("../templates/loader"),
                    d = e("../templates/errorFallback"),
                    f = e("../communication"),
                    p = e("../fn");
                function r(e) {
                    return 0 < e.businessEntity.numberOfReviews.total;
                }
                function v(r) {
                    return function (e) {
                        var t = e.businessUnitId,
                            n = e.locale,
                            e = (function (e, t) {
                                var n,
                                    r = {};
                                for (n in e) 0 <= t.indexOf(n) || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
                                return r;
                            })(e, ["businessUnitId", "locale"]),
                            e = (0, p.rejectNullaryValues)(o({ businessUnitId: t, locale: n }, e, { theme: null }));
                        return (0, i.apiCall)(r, e);
                    };
                }
                function m(a) {
                    var s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        l = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : r;
                    return function (e) {
                        var t = e.baseData,
                            n = e.locale,
                            r = e.theme,
                            o = e.hasMoreReviews,
                            i = e.loadMoreReviews,
                            e = l(t);
                        a({ baseData: t, locale: n, hasMoreReviews: o, loadMoreReviews: i });
                        s &&
                            (0, f.setListener)(function (e) {
                                e = e.data;
                                (0, f.isLoadedMessage)(e) && (0, f.sendAPIDataMessage)({ baseData: t, locale: n });
                            }),
                            (0, u.showTrustBox)(r, e),
                            (0, d.removeErrorFallback)();
                    };
                }
                function s(s) {
                    return function (e, t, n, r) {
                        var o = e[Object.keys(e)[0]],
                            i = o.locale,
                            o = o.theme,
                            a = void 0 === o ? "light" : o,
                            o = (0, p.promiseAllObject)((0, p.mapObject)(v(s), e)),
                            e = (0, u.getOnPageReady)(),
                            r = Promise.all([o, e])
                                .then(function (e) {
                                    var t = l(e, 1)[0];
                                    return { baseData: ((e = t), (t = Object.keys(e)), h in e && 1 === t.length ? e[h] : e), locale: i, theme: a };
                                })
                                .then(m(t, n, r))
                                .catch(function (e) {
                                    if (e && e.FallbackLogo) return (0, d.errorFallback)();
                                });
                        (0, c.withLoader)(r);
                    };
                }
                var h = "default_singleFetch_f98ac77b";
                (n.fetchData = function (a) {
                    return function (e, t, n, r) {
                        var o,
                            i,
                            e = ((i = e), (o = h) in (e = {}) ? Object.defineProperty(e, o, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[o] = i), e);
                        s(a)(e, t, n, r);
                    };
                }),
                    (n.multiFetchData = s),
                    (n.hasServiceReviews = r),
                    (n.hasServiceReviewsMultiFetch = function (t) {
                        return Object.keys(t).some(function (e) {
                            return r(t[e]);
                        });
                    }),
                    (n.hasProductReviews = function (e) {
                        var t = e.productReviewsSummary,
                            e = e.importedProductReviewsSummary;
                        return 0 < (t ? t.numberOfReviews.total : 0) + (e ? e.numberOfReviews.total : 0);
                    });
            },
            { "../communication": 10, "../fn": 12, "../templates/errorFallback": 18, "../templates/loader": 19, "../utils": 24, "./call": 2 },
        ],
        24: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }),
                    (n.showTrustBox = n.setTextContent = n.setTextColor = n.setFont = n.setHtmlContent = n.sanitizeHtmlProp = n.sanitizeColor = n.removeElement = n.makeTranslations = n.insertNumberSeparator = n.getOnPageReady = n.addUtmParams = n.addEventListener = void 0);
                var r,
                    a = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function (e, t) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    (o = !0), (i = e);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (o) throw i;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    },
                    o = e("./dom"),
                    i = (e("./models/styleAlignmentPositions"), e("./rootUri")),
                    s = (r = i) && r.__esModule ? r : { default: r };
                function l(t, e, n) {
                    t &&
                        (t.addEventListener
                            ? t.addEventListener(e, n)
                            : t.attachEvent("on" + e, function (e) {
                                  ((e = e || window.event).preventDefault =
                                      e.preventDefault ||
                                      function () {
                                          e.returnValue = !1;
                                      }),
                                      (e.stopPropagation =
                                          e.stopPropagation ||
                                          function () {
                                              e.cancelBubble = !0;
                                          }),
                                      n.call(t, e);
                              }));
                }
                function u(e) {
                    return "string" != typeof e ? e : e.replace(/(<\/?(?:p|b|i|li|ul|a|strong)\/?>)|(?:<\/?.*?\/?>)/gi, "$1");
                }
                function c(t) {
                    return function (e) {
                        return e + (-1 === e.indexOf("?") ? "?" : "&") + "utm_medium=trustbox&utm_source=" + t;
                    };
                }
                function d(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                        e = "#" === e[0] ? parseInt(e.slice(1), 16) : parseInt(e, 16);
                    return "rgba(" + (e >> 16) + "," + ((e >> 8) & 255) + "," + (255 & e) + "," + t + ")";
                }
                (n.addEventListener = l),
                    (n.addUtmParams = c),
                    (n.getOnPageReady = function () {
                        return new Promise(function (e) {
                            function t() {
                                setTimeout(function () {
                                    e();
                                }, 0);
                            }
                            "complete" === document.readyState
                                ? t()
                                : l(window, "load", function () {
                                      t();
                                  });
                        });
                    }),
                    (n.insertNumberSeparator = function (t, e) {
                        try {
                            t.toLocaleString();
                        } catch (e) {
                            return t;
                        }
                        return t.toLocaleString(e || "en-US");
                    }),
                    (n.makeTranslations = function (n, e) {
                        return e
                            ? Object.keys(n).reduce(function (e, t) {
                                  return e.split(t).join(n[t]);
                              }, e)
                            : "";
                    }),
                    (n.removeElement = function (e) {
                        if (e && e.parentNode) return e.parentNode.removeChild(e);
                    }),
                    (n.sanitizeColor = function (e) {
                        return "string" == typeof e && /^#(?:[\da-fA-F]{3}){1,2}$/.test(e) ? e : null;
                    }),
                    (n.sanitizeHtmlProp = function (e) {
                        return (e = "string" == typeof e ? (e = (e = e.replaceAll(">", "")).replaceAll("<", "")).replaceAll('"', "") : e);
                    }),
                    (n.setHtmlContent = function (e, t) {
                        e && (e.innerHTML = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2] ? u(t) : t);
                    }),
                    (n.setFont = function (e) {
                        var t = (0, s.default)(),
                            n = e.replace(/\s/g, "-").toLowerCase(),
                            r = document.createElement("link");
                        (r.rel = "stylesheet"), (r.href = t + "/fonts/" + n + ".css"), document.head.appendChild(r);
                        (r = e.replace(/\+/g, " ")), (e = document.createElement("style"));
                        e.appendChild(document.createTextNode('\n    * {\n      font-family: inherit !important;\n    }\n    body {\n      font-family: "' + r + '", sans-serif !important;\n    }\n    ')), document.head.appendChild(e);
                    }),
                    (n.setTextColor = function (e) {
                        var t = document.createElement("style");
                        t.appendChild(
                            document.createTextNode(
                                "\n      * {\n        color: inherit !important;\n      }\n      body {\n        color: " +
                                    e +
                                    " !important;\n      }\n      .bold-underline {\n        border-bottom-color: " +
                                    e +
                                    " !important;\n      }\n      .bold-underline:hover {\n        border-color: " +
                                    (function (e, t) {
                                        var n = function (e) {
                                                return 255 < e ? 255 : e < 0 ? 0 : e;
                                            },
                                            r = !1;
                                        "#" === e[0] && ((e = e.slice(1)), (r = !0));
                                        var o = parseInt(e, 16);
                                        if (!o) return e;
                                        var i = (o >> 16) + t,
                                            e = ((o >> 8) & 255) + t,
                                            t = (255 & o) + t,
                                            n = [(i = n(i)), (e = n(e)), (t = n(t))].map(function (e) {
                                                return e <= 15 ? "0" + e.toString(16) : e.toString(16);
                                            }),
                                            n = a(n, 3);
                                        return (r ? "#" : "") + (i = n[0]) + (e = n[1]) + (t = n[2]);
                                    })(e, -30) +
                                    " !important;\n      }\n      .secondary-text {\n        color: " +
                                    d(e, 0.6) +
                                    " !important;\n      }\n      .secondary-text-arrow {\n        border-color: " +
                                    d(e, 0.6) +
                                    " transparent transparent transparent !important;\n      }\n      .read-more {\n        color: " +
                                    e +
                                    " !important;\n      }\n    "
                            )
                        ),
                            document.head.appendChild(t);
                    }),
                    (n.setTextContent = function (e, t) {
                        e && ("innerText" in e ? (e.innerText = t) : (e.textContent = t));
                    }),
                    (n.showTrustBox = function (e, t) {
                        var n = document.getElementsByTagName("body")[0],
                            r = document.getElementById("tp-widget-wrapper");
                        (0, o.addClass)(n, e), (0, o.addClass)(r, "visible"), t || (0, o.addClass)(n, "first-reviewer");
                    });
            },
            { "./dom": 11, "./models/styleAlignmentPositions": 15, "./rootUri": 17 },
        ],
        10: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.onPong = n.ping = n.sendAPIDataMessage = n.isLoadedMessage = n.setListener = void 0);
                var r =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    e = e("./utils.js"),
                    o = window.parent,
                    i = [],
                    a = null,
                    s = [];
                function l(e) {
                    a ? ((e.widgetId = a), (e = JSON.stringify(e)), o.postMessage(e, "*")) : i.push(e);
                }
                function u(t) {
                    return function (e) {
                        return l(r({}, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, { message: e, command: "message", name: t }));
                    };
                }
                function c(e) {
                    s.push(e);
                }
                (0, e.addEventListener)(window, "message", function (e) {
                    if ("string" == typeof e.data) {
                        var t = void 0;
                        try {
                            t = { data: JSON.parse(e.data) };
                        } catch (t) {
                            return;
                        }
                        if ("setId" === t.data.command)
                            (a = t.data.widgetId),
                                (function () {
                                    for (; i.length; ) l(i.pop());
                                })();
                        else for (var n = 0; n < s.length; n++) (0, s[n])(t);
                    }
                }),
                    (n.setListener = c),
                    (n.isLoadedMessage = function (e) {
                        return "loaded" === e;
                    }),
                    (n.sendAPIDataMessage = function (e) {
                        u("popup")("API data", e);
                    }),
                    (n.ping = function () {
                        return l({ command: "ping" });
                    }),
                    (n.onPong = function (t) {
                        c(function (e) {
                            "pong" === e.data.command && t(e);
                        });
                    });
            },
            { "./utils.js": 24 },
        ],
        12: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r = function (e, t) {
                        if (Array.isArray(e)) return e;
                        if (Symbol.iterator in Object(e))
                            return (function (e, t) {
                                var n = [],
                                    r = !0,
                                    o = !1,
                                    i = void 0;
                                try {
                                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    (o = !0), (i = e);
                                } finally {
                                    try {
                                        !r && s.return && s.return();
                                    } finally {
                                        if (o) throw i;
                                    }
                                }
                                return n;
                            })(e, t);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    },
                    o =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        };
                function i(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                }
                function a(t) {
                    return function (e) {
                        return e.filter(t);
                    };
                }
                function s(e) {
                    return null == e;
                }
                function l() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function (e) {
                        return t.reduce(function (e, t) {
                            return s(e) ? e : t(e);
                        }, e);
                    };
                }
                function u(e) {
                    return r(e, 1)[0];
                }
                (n.compose = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function (e) {
                        return t.reduceRight(function (e, t) {
                            return t(e);
                        }, e);
                    };
                }),
                    (n.find = function (e) {
                        return l(a(e), u);
                    }),
                    (n.guard = function (n) {
                        return function (e) {
                            return s((t = n)) || !1 === t ? null : e;
                            var t;
                        };
                    }),
                    (n.map = function (t) {
                        return function (e) {
                            return e.map(t);
                        };
                    }),
                    (n.mapObject = function (n, r) {
                        return Object.keys(r).reduce(function (e, t) {
                            return o({}, e, i({}, t, n(r[t])));
                        }, {});
                    }),
                    (n.pairsToObject = function (e) {
                        return e.reduce(function (e, t) {
                            var n = r(t, 2),
                                t = n[0],
                                n = n[1];
                            return o({}, e, i({}, t, n));
                        }, {});
                    }),
                    (n.pipeMaybe = l),
                    (n.promiseAllObject = function (t) {
                        var r = Object.keys(t),
                            e = r.map(function (e) {
                                return t[e];
                            });
                        return Promise.all(e).then(function (e) {
                            return e.reduce(function (e, t, n) {
                                return o({}, e, i({}, r[n], t));
                            }, {});
                        });
                    }),
                    (n.prop = function (e) {
                        return function () {
                            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {})[e];
                        };
                    }),
                    (n.propMaybe = function (t) {
                        return function () {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                            return e[t] || e;
                        };
                    }),
                    (n.rejectNullaryValues = function (n) {
                        return Object.keys(n).reduce(function (e, t) {
                            return o({}, e, s(n[t]) ? {} : i({}, t, n[t]));
                        }, {});
                    });
            },
            {},
        ],
        18: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.removeErrorFallback = n.errorFallback = void 0);
                var r = e("../dom"),
                    o = e("../templating"),
                    i = e("../utils");
                (n.errorFallback = function () {
                    var e = document.getElementById(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-fallback");
                    (0, r.populateElements)([
                        { element: e, string: (0, o.a)({ href: "https://www.trustpilot.com?utm_medium=trustboxfallback", target: "_blank", rel: "noopener noreferrer" }, (0, o.mkElemWithSvgLookup)("logo", "fallback-logo")) },
                    ]);
                }),
                    (n.removeErrorFallback = function () {
                        var e = document.getElementById(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-fallback");
                        (0, i.removeElement)(e);
                    });
            },
            { "../dom": 11, "../templating": 23, "../utils": 24 },
        ],
        19: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.withLoader = void 0);
                var i = e("../dom"),
                    a = e("../utils"),
                    s = e("../templating");
                n.withLoader = function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.loaderElement,
                        r = void 0 === n ? "tp-widget-loader" : n,
                        t = t.delay,
                        o = setTimeout(
                            function () {
                                return (function (e) {
                                    e = document.getElementById(e);
                                    (0, i.populateElements)([{ element: e, string: (0, s.mkElemWithSvgLookup)("logo") }]);
                                })(r);
                            },
                            void 0 === t ? 1e3 : t
                        );
                    return e.finally(function () {
                        var e, t;
                        clearTimeout(o),
                            (e = r),
                            (t = document.getElementById(e)),
                            (0, i.addClass)(t, e + "--loaded"),
                            t &&
                                (t.addEventListener("animationend", function () {
                                    return (0, a.removeElement)(t);
                                }),
                                t.addEventListener("webkitAnimationEnd", function () {
                                    return (0, a.removeElement)(t);
                                }),
                                t.addEventListener("oanimationend", function () {
                                    return (0, a.removeElement)(t);
                                }));
                    });
                };
            },
            { "../dom": 11, "../templating": 23, "../utils": 24 },
        ],
        4: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.fetchServiceReviewData = void 0);
                var o = e("./fetchData"),
                    e = e("./productReviews");
                e.fetchProductData,
                    e.fetchProductReview,
                    o.constructTrustBoxAndComplete,
                    (n.fetchServiceReviewData = function (r) {
                        return function (e, t, n) {
                            (0, o.fetchData)("/trustbox-data/" + r)(e, t, n, o.hasServiceReviews);
                        };
                    });
            },
            { "./fetchData": 3, "./productReviews": 5 },
        ],
        5: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                Object.assign, e("./fetchData"), e("./call");
                var r,
                    o = e("./reviewFetcher");
                (r = o) && r.__esModule;
            },
            { "./call": 2, "./fetchData": 3, "./reviewFetcher": 6 },
        ],
        6: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    o = function (e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e;
                    };
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                var a,
                    s = e("../../fn"),
                    l = e("../call"),
                    u = e("./util"),
                    c = e("./responseProcessor"),
                    d = (a = c) && a.__esModule ? a : { default: a };
                var f = "No reviews available",
                    o =
                        (o(p, [
                            {
                                key: "consumeReviews",
                                value: function (t) {
                                    var n = this;
                                    return function () {
                                        return n
                                            .produceReviews()
                                            .then(function (e) {
                                                return t(r({}, n.wrapArgs, { baseData: n.baseData, reviews: e, hasMoreReviews: n.hasMoreReviews, loadMoreReviews: n.consumeReviews.bind(n) }));
                                            })
                                            .catch(function (e) {
                                                if (e === f) return t(r({}, n.wrapArgs, { baseData: n.baseData, reviews: [], hasMoreReviews: !1, loadMoreReviews: n.consumeReviews.bind(n) }));
                                                throw e;
                                            });
                                    };
                                },
                            },
                            {
                                key: "produceReviews",
                                value: function () {
                                    var n = this;
                                    return 0 === this.reviews.length
                                        ? Promise.reject(f)
                                        : this.reviewsPerPage >= this.reviews.length
                                        ? this._fetchReviews().then(function (e) {
                                              var t = n._makeResponseProcessor(e);
                                              return (
                                                  (n.nextPage = t.getNextPageLinks()),
                                                  (e = n.reviews).push.apply(
                                                      e,
                                                      (function (e) {
                                                          if (Array.isArray(e)) {
                                                              for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                                              return n;
                                                          }
                                                          return Array.from(e);
                                                      })(t.getReviews())
                                                  ),
                                                  n._takeReviews()
                                              );
                                          })
                                        : Promise.resolve(this._takeReviews());
                                },
                            },
                            {
                                key: "_takeReviews",
                                value: function () {
                                    return this.reviews.splice(0, this.reviewsPerPage);
                                },
                            },
                            {
                                key: "_fetchReviews",
                                value: function () {
                                    return (0, s.promiseAllObject)((0, s.mapObject)(l.apiCall, this.nextPage));
                                },
                            },
                            {
                                key: "_makeResponseProcessor",
                                value: function (e) {
                                    return new d.default(e, { includeImportedReviews: this.includeImportedReviews, displayName: this.baseData.businessEntity.displayName });
                                },
                            },
                            {
                                key: "hasMoreReviews",
                                get: function () {
                                    return 0 < this.reviews.length;
                                },
                            },
                        ]),
                        p);
                function p(e) {
                    var t = e.reviewsPerPage,
                        n = e.includeImportedReviews,
                        r = e.baseData,
                        o = (function (e, t) {
                            var n,
                                r = {};
                            for (n in e) 0 <= t.indexOf(n) || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
                            return r;
                        })(e, ["reviewsPerPage", "includeImportedReviews", "baseData"]);
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, p);
                    e = (0, u.getNextPageLinks)(function (e) {
                        return (0, s.pipeMaybe)((0, s.prop)(e), (0, s.prop)("links"), (0, s.prop)("nextPage"));
                    });
                    (this.reviewsPerPage = t), (this.includeImportedReviews = n), (this.baseData = r), (this.nextPage = e(r, n)), (this.wrapArgs = o), (this.reviews = this._makeResponseProcessor(r).getReviews());
                }
                n.default = o;
            },
            { "../../fn": 12, "../call": 2, "./responseProcessor": 7, "./util": 8 },
        ],
        8: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.getNextPageLinks = void 0);
                var o = e("../../fn");
                n.getNextPageLinks = function (r) {
                    return function (e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                            n = r("productReviews")(e),
                            e = (0, o.pipeMaybe)((0, o.guard)(t), r("importedProductReviews"))(e);
                        return (0, o.rejectNullaryValues)({ productReviews: n, importedProductReviews: e });
                    };
                };
            },
            { "../../fn": 12 },
        ],
        7: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    o = function (e, t, n) {
                        return t && i(e.prototype, t), n && i(e, n), e;
                    };
                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                var a = e("../../fn"),
                    s = e("./util");
                function l(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                    return Array.from(e);
                }
                o(u, [
                    {
                        key: "getReviews",
                        value: function () {
                            var t = this,
                                e = this.response,
                                n = e.productReviews,
                                e = e.importedProductReviews,
                                n = (0, a.pipeMaybe)((0, a.propMaybe)("productReviews"), (0, a.propMaybe)("reviews"))(n) || [],
                                e =
                                    (0, a.pipeMaybe)(
                                        (0, a.guard)(this.includeImportedReviews),
                                        (0, a.propMaybe)("importedProductReviews"),
                                        (0, a.propMaybe)("productReviews"),
                                        (0, a.map)(function (e) {
                                            return r({}, e, { verifiedBy: "External" === e.type && e.source ? e.source.name : t.displayName });
                                        })
                                    )(e) || [];
                            return [].concat(l(n), l(e)).sort(function (e, t) {
                                (e = e.createdAt), (t = t.createdAt);
                                return new Date(t) - new Date(e);
                            });
                        },
                    },
                    {
                        key: "getNextPageLinks",
                        value: function () {
                            var e = (0, s.getNextPageLinks)(function (e) {
                                    return (0, a.pipeMaybe)(
                                        (0, a.prop)(e),
                                        (0, a.prop)("links"),
                                        (0, a.find)(function (e) {
                                            return "next-page" === e.rel;
                                        }),
                                        (0, a.prop)("href")
                                    );
                                }),
                                t = (0, s.getNextPageLinks)(function (e) {
                                    return (0, a.pipeMaybe)((0, a.prop)(e), (0, a.prop)(e), (0, a.prop)("links"), (0, a.prop)("nextPage"));
                                })(this.response, this.includeImportedReviews),
                                e = e(this.response, this.includeImportedReviews);
                            return r({}, e, t);
                        },
                    },
                ]),
                    (o = u);
                function u(e, t) {
                    var n = t.includeImportedReviews,
                        t = t.displayName;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, u),
                        (this.response = e),
                        (this.includeImportedReviews = n),
                        (this.displayName = t);
                }
                n.default = o;
            },
            { "../../fn": 12, "./util": 8 },
        ],
        9: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.svgMap = void 0);
                var o = e("../utils");
                function r(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                }
                function i(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                        r = Object.keys(n).reduce(function (e, t) {
                            return (e[t] = (0, o.sanitizeHtmlProp)(n[t])), "color" === t && (e[t] = (0, o.sanitizeColor)(e[t])), e;
                        }, {});
                    return '\n    <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: ' + (e.height / e.width) * 100 + '%;">\n      ' + t(e, r) + "\n    </div>\n  ";
                }
                function a(e, t) {
                    var n,
                        r = t.dimensionId,
                        o = t.color,
                        t = t.rating;
                    return (
                        '\n  <svg role="img" aria-labelledby="scaleRating" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ' +
                        e.width +
                        " " +
                        e.height +
                        '">\n      <g class="tp-stars">\n        ' +
                        ((n = o),
                        m[r].lines.reduce(function (e, t) {
                            return e + '<line x1="' + t.x1 + '" y1="' + t.y1 + '" x2="' + t.x2 + '" y2="' + t.y2 + '" stroke="' + n + '"/>';
                        }, "")) +
                        "\n        " +
                        (function (e, t, n) {
                            if (0 === t) return "";
                            t = m[e].stars[t - 1];
                            return '\n    <rect x="' + t.x + '" y="0.5" width="' + t.w + '" height="' + t.h + '" fill="' + n + '" stroke="' + n + '"/>\n    ' + t.p + "\n  ";
                        })(r, t, o) +
                        "\n      </g>\n  </svg>"
                    );
                }
                function s(e, t) {
                    var n = t.rating,
                        r = t.trustScore,
                        o = t.color;
                    return (
                        '\n    <svg role="img" aria-labelledby="' +
                        (t = "starRating-" + Math.random().toString(36).substring(2)) +
                        '" viewBox="0 0 ' +
                        e.width +
                        " " +
                        e.height +
                        '" xmlns="http://www.w3.org/2000/svg" ' +
                        v +
                        '>\n      <title id="' +
                        t +
                        '" lang="en">' +
                        r +
                        ' out of five star rating on Trustpilot</title>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' +
                        (1 <= n && o ? o : h) +
                        '" d="M0 46.330002h46.375586V0H0z"/>\n          <path class="tp-star__shape" d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' +
                        (2 <= n && o ? o : h) +
                        '" d="M51.24816 46.330002h46.375587V0H51.248161z"/>\n          <path class="tp-star__canvas--half" fill="' +
                        (1.5 <= n && o ? o : h) +
                        '" d="M51.24816 46.330002h23.187793V0H51.248161z"/>\n          <path class="tp-star__shape" d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' +
                        (3 <= n && o ? o : h) +
                        '" d="M102.532209 46.330002h46.375586V0h-46.375586z"/>\n          <path class="tp-star__canvas--half" fill="' +
                        (2.5 <= n && o ? o : h) +
                        '" d="M102.532209 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' +
                        (4 <= n && o ? o : h) +
                        '" d="M153.815458 46.330002h46.375586V0h-46.375586z"/>\n          <path class="tp-star__canvas--half" fill="' +
                        (3.5 <= n && o ? o : h) +
                        '" d="M153.815458 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' +
                        (5 === n && o ? o : h) +
                        '" d="M205.064416 46.330002h46.375587V0h-46.375587z"/>\n          <path class="tp-star__canvas--half" fill="' +
                        (4.5 <= n && o ? o : h) +
                        '" d="M205.064416 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>\n      </g>\n    </svg>\n  '
                    );
                }
                function l(e) {
                    var t = "trustpilotLogo-" + Math.random().toString(36).substring(2);
                    return (
                        '\n    <svg role="img" aria-labelledby="' +
                        t +
                        '" viewBox="0 0 ' +
                        e.width +
                        " " +
                        e.height +
                        '" xmlns="http://www.w3.org/2000/svg" ' +
                        v +
                        '>\n      <title id="' +
                        t +
                        '">Trustpilot</title>\n      <path class="tp-logo__text" d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z" fill="#191919"/>\n      <path class="tp-logo__star" fill="#00B67A" d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"/>\n      <path class="tp-logo__star-notch" fill="#005128" d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"/>\n    </svg>\n  '
                    );
                }
                function u(e) {
                    return (
                        '\n  <svg viewBox="0 0 ' +
                        e.width +
                        " " +
                        e.height +
                        '" xmlns="http://www.w3.org/2000/svg" ' +
                        v +
                        '>\n      <circle class="arrow-slider-circle" cx="12" cy="12" r="11.5" fill="none" stroke="#8C8C8C"/>\n      <path class="arrow-slider-shape" fill="#8C8C8C" d="M10.5088835 12l3.3080582-3.02451041c.2440777-.22315674.2440777-.5849653 0-.80812204-.2440776-.22315673-.6398058-.22315673-.8838834 0L9.18305826 11.595939c-.24407768.2231567-.24407768.5849653 0 .808122l3.75000004 3.4285714c.2440776.2231568.6398058.2231568.8838834 0 .2440777-.2231567.2440777-.5849653 0-.808122L10.5088835 12z"/>\n  </svg>\n'
                    );
                }
                function c(e, t) {
                    return (
                        (t = t.elementColor),
                        '\n<svg viewBox="0 0 ' +
                            e.width +
                            " " +
                            e.height +
                            '" xmlns=“http://www.w3.org/2000/svg“ ' +
                            v +
                            '>\n  <path d="M5.24040526 8.60770645c0 .40275007-.25576387.51300008-.57003092.24825004L.2361338 4.98520583C.0871841 4.86986375 0 4.69208677 0 4.50370575s.0871841-.366158.2361338-.48150008L4.67037434.14470501c.31501709-.26625004.57003092-.15450003.57003092.24825004V2.9992055h.75004069c2.86515541 0 5.31553833 2.3745004 5.91257072 4.93950083a4.3385348 4.3385348 0 0 1 .09375508.5782501c.02250123.20025004-.07500406.24450004-.21826184.10350002 0 0-.0405022-.036-.07500406-.07500001C10.18673699 7.00766398 8.14655579 6.09727666 5.98894586 5.995456h-.75004068l.00150008 2.61225045z" fill="' +
                            (t || "#00B67A") +
                            '" fill-rule="evenodd"/>\n</svg>\n'
                    );
                }
                function d(e) {
                    return (
                        '<svg viewBox="0 0 ' +
                        e.width +
                        " " +
                        e.height +
                        '" fill="none" xmlns="http://www.w3.org/2000/svg ' +
                        v +
                        '">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>\n</svg>\n'
                    );
                }
                function f(e) {
                    return (
                        '<svg viewBox="0 0 ' +
                        e.width +
                        " " +
                        e.height +
                        '" fill="none" xmlns="http://www.w3.org/2000/svg ' +
                        v +
                        '">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>\n</svg>\n'
                    );
                }
                function p(e) {
                    return (
                        '<svg viewBox="0 0 ' +
                        e.width +
                        " " +
                        e.height +
                        '" fill="none" xmlns="http://www.w3.org/2000/svg" ' +
                        v +
                        '>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7056 4.07227L10.6915 1.04706C10.2986 0.65216 9.66093 0.651152 9.26704 1.04303C8.87214 1.43591 8.87113 2.0746 9.26402 2.46749L10.5656 3.77509L3.42415 3.76602H3.41407C1.96242 3.76602 1.15751 4.40169 0.738429 4.93561C0.255887 5.55012 0.0010157 6.38827 8.3031e-06 7.36041C-0.00301388 8.91482 0.819021 11.8151 2.40265 11.8161H2.40365C2.95974 11.8161 3.41105 11.3668 3.41206 10.8107C3.41206 10.3645 3.12293 9.98467 2.72098 9.85069C2.35429 9.40038 1.72568 7.60218 2.15281 6.48901C2.2868 6.14045 2.54268 5.78081 3.41407 5.78081H3.42012L10.5585 5.78988L9.25495 7.0874C8.86005 7.48029 8.85905 8.11898 9.25193 8.51186C9.44837 8.70931 9.70727 8.80904 9.96617 8.80904C10.2231 8.80904 10.4799 8.71032 10.6764 8.51589L13.7046 5.49874H13.7056C14.1116 5.08369 14.0844 4.45206 13.7056 4.07227Z" fill="currentColor"/>\n</svg>\n'
                    );
                }
                var v = 'style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;"',
                    m =
                        (r((e = {}), "80x15", {
                            dimensions: { width: 80, height: 15 },
                            lines: [
                                { x1: 80, y1: 7.5, x2: 0, y2: 7.5 },
                                { x1: 0.5, y1: 3.5, x2: 0.5, y2: 11.5 },
                                { x1: 20.5, y1: 6, x2: 20.5, y2: 9 },
                                { x1: 40.5, y1: 6, x2: 40.5, y2: 9 },
                                { x1: 60.5, y1: 6, x2: 60.5, y2: 9 },
                                { x1: 80, y1: 3.5, x2: 80, y2: 11.5 },
                            ],
                            stars: [
                                {
                                    x: 1.5,
                                    w: 14,
                                    h: 14,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.7613 6.02594H13.7205L10.5316 8.29316L8.55968 9.68372L5.35535 11.9509L6.57238 8.29316L3.36804 6.02594H7.32724L8.54427 2.36816L9.7613 6.02594ZM10.7935 9.14011L8.54429 9.69936L11.7332 11.9817L10.7935 9.14011Z" fill="white"/>',
                                },
                                {
                                    x: 13.5,
                                    w: 14,
                                    h: 14,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 6.02606H25.7208L22.5318 8.29328L20.5599 9.68384L17.3556 11.9511L18.5726 8.29328L15.3683 6.02606H19.3275L20.5445 2.36829L21.7615 6.02606ZM22.7938 9.14034L20.5446 9.69959L23.7335 11.9819L22.7938 9.14034Z" fill="white"/>',
                                },
                                {
                                    x: 13.5,
                                    w: 14,
                                    h: 14,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 6.02606H25.7208L22.5318 8.29328L20.5599 9.68384L17.3556 11.9511L18.5726 8.29328L15.3683 6.02606H19.3275L20.5445 2.36829L21.7615 6.02606ZM22.7938 9.14034L20.5446 9.69959L23.7335 11.9819L22.7938 9.14034Z" fill="white"/>',
                                },
                                {
                                    x: 33.5,
                                    w: 14,
                                    h: 14,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M41.7615 6.02606H45.7208L42.5318 8.29328L40.5599 9.68384L37.3556 11.9511L38.5726 8.29328L35.3683 6.02606H39.3275L40.5445 2.36829L41.7615 6.02606ZM42.7938 9.14034L40.5446 9.69959L43.7335 11.9819L42.7938 9.14034Z" fill="white"/>',
                                },
                                {
                                    x: 64.5,
                                    w: 14,
                                    h: 14,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M72.7615 6.02606H76.7208L73.5318 8.29328L71.5599 9.68384L68.3556 11.9511L69.5726 8.29328L66.3683 6.02606H70.3275L71.5445 2.36829L72.7615 6.02606ZM73.7935 9.14022L71.5443 9.69947L74.7332 11.9818L73.7935 9.14022Z" fill="white"/>',
                                },
                            ],
                        }),
                        r(e, "90x16", {
                            dimensions: { width: 90, height: 16 },
                            lines: [
                                { x1: 90, y1: 8.5, x2: 0, y2: 8.5 },
                                { x1: 0.5, y1: 5, x2: 0.5, y2: 12 },
                                { x1: 23.2185, y1: 7, x2: 23.2185, y2: 10 },
                                { x1: 45.5, y1: 7, x2: 45.5, y2: 10 },
                                { x1: 67.7815, y1: 7, x2: 67.7815, y2: 10 },
                                { x1: 90, y1: 5, x2: 90, y2: 12 },
                            ],
                            stars: [
                                {
                                    x: 1.5,
                                    w: 15,
                                    h: 15,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3454 6.42769H14.5685L11.167 8.84606L9.06363 10.3293L5.64567 12.7477L6.94384 8.84606L3.52588 6.42769H7.74903L9.04719 2.52606L10.3454 6.42769ZM11.4464 9.74948L9.04727 10.346L12.4488 12.7805L11.4464 9.74948Z" fill="white"/>',
                                },
                                {
                                    x: 15.5,
                                    w: 15,
                                    h: 15,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.3456 6.42781H28.5688L25.1672 8.84618L23.0639 10.3294L19.6459 12.7478L20.9441 8.84618L17.5261 6.42781H21.7493L23.0474 2.52618L24.3456 6.42781ZM25.4466 9.74967L23.0475 10.3462L26.449 12.7807L25.4466 9.74967Z" fill="white"/>',
                                },
                                {
                                    x: 37.5,
                                    w: 15,
                                    h: 15,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M46.3456 6.42781H50.5688L47.1672 8.84618L45.0639 10.3294L41.6459 12.7478L42.9441 8.84618L39.5261 6.42781H43.7493L45.0474 2.52618L46.3456 6.42781ZM47.4466 9.74967L45.0475 10.3462L48.449 12.7807L47.4466 9.74967Z" fill="white"/>',
                                },
                                {
                                    x: 60.5,
                                    w: 15,
                                    h: 15,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M69.3456 6.42781H73.5688L70.1672 8.84618L68.0639 10.3294L64.6459 12.7478L65.9441 8.84618L62.5261 6.42781H66.7493L68.0474 2.52618L69.3456 6.42781ZM70.4466 9.74967L68.0475 10.3462L71.449 12.7807L70.4466 9.74967Z" fill="white"/>',
                                },
                                {
                                    x: 73.5,
                                    w: 15,
                                    h: 15,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M82.3456 6.42781H86.5688L83.1672 8.84618L81.0639 10.3294L77.6459 12.7478L78.9441 8.84618L75.5261 6.42781H79.7493L81.0474 2.52618L82.3456 6.42781ZM83.4464 9.74957L81.0473 10.3461L84.4488 12.7806L83.4464 9.74957Z" fill="white"/>',
                                },
                            ],
                        }),
                        r(e, "105x19", {
                            dimensions: { width: 105, height: 19 },
                            lines: [
                                { x1: 105, y1: 10, x2: 0, y2: 10 },
                                { x1: 0.5, y1: 6, x2: 0.5, y2: 14.3125 },
                                { x1: 26.5, y1: 8, x2: 26.5, y2: 12 },
                                { x1: 52.5, y1: 8, x2: 52.5, y2: 12 },
                                { x1: 78.5, y1: 8, x2: 78.5, y2: 12 },
                                { x1: 105, y1: 6, x2: 105, y2: 14.3125 },
                            ],
                            stars: [
                                {
                                    x: 1.5,
                                    w: 18,
                                    h: 19,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0976 7.63288H17.1126L13.0733 10.5047L10.5756 12.2661L6.51676 15.1379L8.05834 10.5047L3.99951 7.63288H9.0145L10.5561 2.99969L12.0976 7.63288ZM13.4051 11.5774L10.5561 12.2858L14.5954 15.1768L13.4051 11.5774Z" fill="white"/>',
                                },
                                {
                                    x: 17.5682,
                                    w: 18,
                                    h: 18,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1661 7.633H33.1811L29.1418 10.5048L26.6441 12.2662L22.5852 15.138L24.1268 10.5048L20.068 7.633H25.083L26.6246 2.99982L28.1661 7.633ZM29.4736 11.5777L26.6246 12.2861L30.6639 15.1771L29.4736 11.5777Z" fill="white"/>',
                                },
                                {
                                    x: 43.5,
                                    w: 18,
                                    h: 18,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M54.0979 7.633H59.1129L55.0736 10.5048L52.5758 12.2662L48.517 15.138L50.0586 10.5048L45.9998 7.633H51.0147L52.5563 2.99982L54.0979 7.633ZM55.4054 11.5777L52.5564 12.2861L56.5957 15.1771L55.4054 11.5777Z" fill="white"/>',
                                },
                                {
                                    x: 69.7046,
                                    w: 18,
                                    h: 18,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M80.3025 7.633H85.3175L81.2782 10.5048L78.7804 12.2662L74.7216 15.138L76.2632 10.5048L72.2043 7.633H77.2193L78.7609 2.99982L80.3025 7.633ZM81.61 11.5777L78.761 12.2861L82.8003 15.1771L81.61 11.5777Z" fill="white"/>',
                                },
                                {
                                    x: 85.7727,
                                    w: 18,
                                    h: 18,
                                    p:
                                        '<path fill-rule="evenodd" clip-rule="evenodd" d="M96.3706 7.633H101.386L97.3463 10.5048L94.8485 12.2662L90.7897 15.138L92.3313 10.5048L88.2725 7.633H93.2874L94.829 2.99982L96.3706 7.633ZM97.6778 11.5776L94.8289 12.286L98.8682 15.177L97.6778 11.5776Z" fill="white"/>',
                                },
                            ],
                        }),
                        e),
                    h = "#dcdce6",
                    g = { width: 251, height: 46 },
                    w = { width: 126, height: 31 },
                    y = { width: 24, height: 24 },
                    b = { width: 12, height: 9 },
                    L = { width: 14, height: 14 },
                    x = { width: 14, height: 14 },
                    _ = { width: 14, height: 12 };
                n.svgMap = {
                    scale: function (e) {
                        return i(m[e.dimensionId].dimensions, a, e);
                    },
                    stars: function (e) {
                        return i(g, s, e);
                    },
                    logo: function () {
                        return i(w, l);
                    },
                    arrowSlider: function () {
                        return i(y, u);
                    },
                    replyArrow: function (e) {
                        return i(b, c, e);
                    },
                    verifiedReview: function (e) {
                        return i(L, d, e);
                    },
                    invitedReview: function (e) {
                        return i(x, f, e);
                    },
                    redirectedReview: function (e) {
                        return i(_, p, e);
                    },
                };
            },
            { "../utils": 24 },
        ],
        11: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.populateElements = n.addClass = void 0);
                var r = e("./utils");
                function o(e, t) {
                    if (e) {
                        e = e.getAttribute("class");
                        return -1 !== (e ? e.split(" ") : "").indexOf(t);
                    }
                    return !1;
                }
                (n.addClass = function (e, t) {
                    var n;
                    e &&
                        ((n = (n = e.getAttribute("class")) ? n.split(" ") : []),
                        o(e, t) ||
                            ((t = []
                                .concat(
                                    (function (e) {
                                        if (Array.isArray(e)) {
                                            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                            return n;
                                        }
                                        return Array.from(e);
                                    })(n),
                                    [t]
                                )
                                .join(" ")),
                            e.setAttribute("class", t)));
                }),
                    (n.populateElements = function (e) {
                        e.forEach(function (e) {
                            var t = e.element,
                                n = e.string,
                                e = e.substitutions;
                            n ? (0, r.setHtmlContent)(t, (0, r.makeTranslations)(void 0 === e ? {} : e, n), !1) : (0, r.removeElement)(t);
                        });
                    });
            },
            { "./utils": 24 },
        ],
        13: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var s =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    l = e("./queryString"),
                    r = e("./utils"),
                    u = o(e("./rootUri")),
                    c = o(e("./xhr"));
                function o(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                function d(e, t) {
                    var n,
                        r = {};
                    for (n in e) 0 <= t.indexOf(n) || (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
                    return r;
                }
                function f(e, t) {
                    var n = t.session,
                        r = t.testId,
                        o = t.sessionExpiry,
                        i = (0, l.getAsObject)(),
                        t = i.group,
                        i = i.businessunitId;
                    t &&
                        o &&
                        ((i = "TrustboxSplitTest_" + i),
                        (t = encodeURIComponent(JSON.stringify({ group: t, session: n, testId: r }))),
                        (n = o),
                        (r = "path=/"),
                        (o = "domain=" + window.location.hostname.replace(/^.*\.([^.]+\.[^.]+)/, "$1")),
                        (document.cookie = [i + "=" + t, r, n, o, "samesite=none", "secure"].join("; ")),
                        (document.cookie = [i + "-legacy=" + t, r, n, o].join("; ")));
                }
                function i(e, t) {
                    f(0, t);
                    var n,
                        r,
                        o,
                        i,
                        a,
                        r =
                            ((n = e),
                            (o = (r = t).anonymousId),
                            r.sessionExpiry,
                            (i = d(r, ["anonymousId", "sessionExpiry"])),
                            (t = (e = (0, l.getAsObject)()).businessunitId),
                            (r = e.templateId),
                            (e = d(e, ["businessunitId", "templateId"])),
                            (a = s({}, e, i, e.group && o ? { userId: o } : { nosettings: 1 }, { businessUnitId: t, widgetId: r })),
                            (r = Object.keys(a)
                                .map(function (e) {
                                    return e + "=" + encodeURIComponent(a[e]);
                                })
                                .join("&")),
                            (0, u.default)() + "/stats/" + n + "?" + r);
                    try {
                        (0, c.default)({ url: r });
                    } catch (e) {}
                }
                var a;
                n.default = {
                    engagement: function (e) {
                        i("TrustboxEngagement", e);
                    },
                    attachImpressionHandler: function () {
                        (0, r.addEventListener)(window, "message", function (e) {
                            if ("string" == typeof e.data) {
                                var t = void 0;
                                try {
                                    t = { data: JSON.parse(e.data) };
                                } catch (t) {
                                    return;
                                }
                                if ("setId" === t.data.command) return (a = t.data.widgetId), void window.parent.postMessage(JSON.stringify({ command: "impression", widgetId: a }), "*");
                                "impression-received" === t.data.command && (delete t.data.command, i("TrustboxImpression", t.data)), "trustbox-in-viewport" === t.data.command && (delete t.data.command, i("TrustboxView", t.data));
                            }
                        });
                    },
                };
            },
            { "./queryString": 16, "./rootUri": 17, "./utils": 24, "./xhr": 25 },
        ],
        14: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r = e("./communication"),
                    o = e("./templates/errorFallback");
                n.default = function (e) {
                    var t = !1;
                    (0, r.onPong)(function () {
                        (t = !0), "function" == typeof e && e();
                    }),
                        (0, r.ping)(),
                        setTimeout(function () {
                            t || (0, o.errorFallback)();
                        }, 500);
                };
            },
            { "./communication": 10, "./templates/errorFallback": 18 },
        ],
        15: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                n.styleAlignmentPositions = ["left", "right"];
            },
            {},
        ],
        23: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.mkElemWithSvgLookup = n.span = n.div = n.a = void 0);
                function i(t) {
                    return Object.keys(t)
                        .map(function (e) {
                            return e + '="' + (0, s.sanitizeHtmlProp)(t[e]) + '"';
                        })
                        .join(" ");
                }
                function r(o) {
                    return function (e) {
                        for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        return "<" + o + " " + i(e) + ">" + ((e = n), [].concat.apply([], e).join("\n")) + "</" + o + ">";
                    };
                }
                var o,
                    a = e("./assets/svg"),
                    s = e("./utils"),
                    l = r("a"),
                    u = r("div"),
                    e = (r("img"), r("label"), r("span"));
                o = "input";
                (n.a = l),
                    (n.div = u),
                    (n.span = e),
                    (n.mkElemWithSvgLookup = function (e) {
                        return u({ class: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "" }, a.svgMap[e](arguments[2]));
                    });
            },
            { "./assets/svg": 9, "./utils": 24 },
        ],
        20: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.populateLogo = n.makeLogo = void 0);
                function r() {
                    return (0, o.mkElemWithSvgLookup)("logo");
                }
                var o = e("../templating"),
                    i = e("../dom");
                (n.makeLogo = r),
                    (n.populateLogo = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-logo",
                            e = "string" == typeof e ? document.getElementById(e) : e;
                        (0, i.populateElements)([{ element: e, string: r() }]);
                    });
            },
            { "../dom": 11, "../templating": 23 },
        ],
        21: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.populateStars = n.makeStars = void 0);
                function i(e) {
                    var t = e.num,
                        n = void 0 === (o = e.trustScore) ? null : o,
                        r = void 0 === (i = e.wrapperClass) ? "" : i,
                        o = e.color,
                        i = Math.floor(t),
                        e = t === i ? "" : " tp-stars--" + i + "--half",
                        o = (0, l.sanitizeColor)(o);
                    return (0, a.div)({ class: r }, (0, a.mkElemWithSvgLookup)("stars", o ? "tp-stars-custom-color" : "tp-stars tp-stars--" + i + e, { rating: t, trustScore: n || t, color: o }));
                }
                var a = e("../templating"),
                    s = e("../dom"),
                    l = e("../utils");
                (n.makeStars = i),
                    (n.populateStars = function (e) {
                        var t = e.businessEntity,
                            n = t.stars,
                            r = t.trustScore,
                            o = t.numberOfReviews.total,
                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "tp-widget-stars",
                            t = (0, l.sanitizeColor)(arguments[2]),
                            e = "string" == typeof e ? document.getElementById(e) : e;
                        (0, s.populateElements)([{ element: e, string: i({ num: o ? n : 0, trustScore: r, color: t }) }]);
                    });
            },
            { "../dom": 11, "../templating": 23, "../utils": 24 },
        ],
        22: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.ORIENTATION = n.makeEmptySummary = void 0);
                var o =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    i = e("../templating"),
                    a = e("./stars"),
                    s = e("./logo"),
                    l = e("../utils");
                function u(e) {
                    return e ? { rel: "nofollow" } : {};
                }
                function c(e) {
                    var t = e.subtitle,
                        n = e.url,
                        r = e.hasLogo,
                        e = e.nofollow,
                        n = [
                            (t = t && (0, l.makeTranslations)({}, t)) && (0, i.span)({ class: "tp-widget-empty-vertical__subtitle" }, t),
                            n && (0, i.a)(o({ class: "tp-widget-empty-vertical__logo", href: n, target: "_blank" }, u(e)), (0, s.makeLogo)()),
                            r && !n && (0, i.span)({ class: "tp-widget-empty-vertical__logo" }, (0, s.makeLogo)()),
                        ].filter(Boolean);
                    return i.div.apply(
                        void 0,
                        [{ class: "tp-widget-empty-vertical__subtitle-wrapper" }].concat(
                            (function (e) {
                                if (Array.isArray(e)) {
                                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                                    return n;
                                }
                                return Array.from(e);
                            })(n)
                        )
                    );
                }
                var d = { HORIZONTAL: "horizontal", VERTICAL: "vertical" };
                (n.makeEmptySummary = function (e) {
                    return e.orientation === d.HORIZONTAL
                        ? ((t = e),
                          (n = e.title),
                          (r = e.url),
                          (t = e.nofollow),
                          (n = (0, l.makeTranslations)({}, n)),
                          (0, i.div)(
                              { class: "tp-widget-empty-horizontal" },
                              (0, i.span)({ class: "tp-widget-empty-horizontal__title" }, n),
                              (0, i.a)(o({ class: "tp-widget-empty-horizontal__logo", href: r, target: "_blank" }, u(t)), (0, s.makeLogo)())
                          ))
                        : ((t = e),
                          (e = (0, l.makeTranslations)({}, t.title)),
                          (t = c(t)),
                          (0, i.div)({ class: "tp-widget-empty-vertical" }, (0, i.span)({ class: "tp-widget-empty-vertical__title" }, e), (0, a.makeStars)({ num: 0, wrapperClass: "tp-widget-empty-vertical__stars" }), t));
                    var t, n, r;
                }),
                    (n.ORIENTATION = d);
            },
            { "../templating": 23, "../utils": 24, "./logo": 20, "./stars": 21 },
        ],
        26: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var m =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n,
                                    r = arguments[t];
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                            }
                            return e;
                        },
                    h = e("@trustpilot/trustbox-framework-vanilla/modules/utils"),
                    g = e("@trustpilot/trustbox-framework-vanilla/modules/queryString"),
                    w = o(e("./elements")),
                    y = e("@trustpilot/trustbox-framework-vanilla/modules/api"),
                    r = o(e("@trustpilot/trustbox-framework-vanilla/modules/impression")),
                    b = o(e("@trustpilot/trustbox-framework-vanilla/modules/init")),
                    L = e("./models");
                function o(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                r.default.attachImpressionHandler();
                function x(e, t) {
                    return (0, h.addUtmParams)(e)(t);
                }
                n.default = function (e) {
                    function t(e) {
                        var t = e.baseData,
                            n = e.locale,
                            e = t.starsString,
                            e = m({}, t.translations, { rating: e });
                        t.settings.customStylesAllowed &&
                            (f && (0, h.setFont)(f), p && (0, h.setTextColor)(p), v && ((r = v), L.widgetStyleAlignment.includes(r) && ((o = "tp-widget-wrapper"), document.getElementById(o).classList.add(o + "--" + r))));
                        var r,
                            o = m({}, t, {
                                styleAlignment: v,
                                strings: e,
                                formatNumber: function (e) {
                                    return (0, h.insertNumberSeparator)(e, n);
                                },
                                elements: (0, w.default)(),
                            });
                        0 === t.businessEntity.numberOfReviews.total
                            ? ((r = x(i, t.links.evaluateUrl)), (e = x(i, t.links.profileUrl)), l(o, r, e))
                            : (a(o),
                              s(o),
                              (function (e, t) {
                                  t = x(e, t);
                                  document.getElementById("profile-link").href = t;
                              })(i, t.links.profileUrl));
                    }
                    var i = e.name,
                        n = e.setup,
                        a = void 0 === n ? function () {} : n,
                        s = e.withReviews,
                        l = e.withoutReviews,
                        n = (0, g.getAsObject)(),
                        r = n.locale,
                        o = n.businessunitId,
                        e = n.theme,
                        u = void 0 === e ? "light" : e,
                        c = n.location,
                        d = n.templateId,
                        f = n.fontFamily,
                        p = n.textColor,
                        v = n.styleAlignment;
                    (0, b.default)(function () {
                        return (0, y.fetchServiceReviewData)(d)({ businessUnitId: o, locale: r, theme: u, location: c }, t);
                    });
                };
            },
            {
                "./elements": 27,
                "./models": 29,
                "@trustpilot/trustbox-framework-vanilla/modules/api": 4,
                "@trustpilot/trustbox-framework-vanilla/modules/impression": 13,
                "@trustpilot/trustbox-framework-vanilla/modules/init": 14,
                "@trustpilot/trustbox-framework-vanilla/modules/queryString": 16,
                "@trustpilot/trustbox-framework-vanilla/modules/utils": 24,
            },
        ],
        29: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                n.widgetStyleAlignment = ["left", "right"];
            },
            {},
        ],
        27: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 });
                var r = function (e, t, n) {
                    return t && o(e.prototype, t), n && o(e, n), e;
                };
                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                var i = e("@trustpilot/trustbox-framework-vanilla/modules/utils");
                function a(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }
                var s =
                    (r(l, [
                        {
                            key: "domElement",
                            value: function () {
                                return (e = this.id), document.getElementById(e);
                                var e;
                            },
                        },
                        {
                            key: "setHtml",
                            value: function (e) {
                                (0, i.setHtmlContent)(this.domElement(), e);
                            },
                        },
                        {
                            key: "setText",
                            value: function (e) {
                                (0, i.setTextContent)(this.domElement(), e);
                            },
                        },
                        {
                            key: "remove",
                            value: function () {
                                (0, i.removeElement)(this.domElement());
                            },
                        },
                    ]),
                    l);
                function l(e) {
                    a(this, l), (this.id = e);
                }
                var u =
                    ((function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                    })(c, s),
                    r(c, [
                        {
                            key: "setHtml",
                            value: function (e) {
                                (0, i.setHtmlContent)(this.domElement(), e, !1);
                            },
                        },
                    ]),
                    c);
                function c() {
                    return (
                        a(this, c),
                        (function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                        })(this, (c.__proto__ || Object.getPrototypeOf(c)).apply(this, arguments))
                    );
                }
                n.default = function () {
                    return { rating: new s("tp-widget-rating"), stars: new s("star-container"), score: new s("trust-score"), translations: new s("translations-main"), wrapper: new u("tp-widget-wrapper") };
                };
            },
            { "@trustpilot/trustbox-framework-vanilla/modules/utils": 24 },
        ],
        30: [
            function (e, t, n) {
                "use strict";
                Object.defineProperty(n, "__esModule", { value: !0 }), (n.microStar = void 0);
                var r,
                    o = e("./constructor"),
                    i = (r = o) && r.__esModule ? r : { default: r },
                    a = (e("@trustpilot/trustbox-framework-vanilla/modules/utils"), e("@trustpilot/trustbox-framework-vanilla/modules/templates/stars")),
                    s = e("@trustpilot/trustbox-framework-vanilla/modules/templates/logo"),
                    l = e("@trustpilot/trustbox-framework-vanilla/modules/templates/summary");
                function u(e, t) {
                    var n = e.elements.wrapper,
                        e = e.strings,
                        t = { orientation: l.ORIENTATION.HORIZONTAL, title: e.firstreviewer, url: t },
                        t = (0, l.makeEmptySummary)(t);
                    n.setHtml(t);
                }
                n.microStar = function () {
                    return (0, i.default)({
                        name: "MicroStar",
                        setup: function (e) {
                            (0, s.populateLogo)(), (0, a.populateStars)(e, "tp-widget-stars");
                        },
                        withReviews: function (e) {
                            var t = e.elements.score,
                                e = e.strings;
                            t.setText(e.rating);
                        },
                        withoutReviews: u,
                    });
                };
            },
            {
                "./constructor": 26,
                "@trustpilot/trustbox-framework-vanilla/modules/templates/logo": 20,
                "@trustpilot/trustbox-framework-vanilla/modules/templates/stars": 21,
                "@trustpilot/trustbox-framework-vanilla/modules/templates/summary": 22,
                "@trustpilot/trustbox-framework-vanilla/modules/utils": 24,
            },
        ],
    },
    {},
    [1]
);

// document.addEventListener('click', function(event) {
//     if (event.target && event.target.id === 'get__quote') {
//         event.preventDefault(); // Prevent default action of link
//         // Your click event code here
//         // alert('Button clicked!');
//         document.getElementById('final__step').innerHTML = "Thank you for applying. Check your email now for what happens next.";
//     }



// });

// function highlightBox(element) {
//     // Remove highlight from all boxes
//     document.querySelectorAll('.box').forEach(function(box) {
//         box.classList.remove('highlight');
//     });
//     // Highlight the clicked box
//     element.classList.add('highlight');
// }

// // Event delegation for dynamically generated elements
// document.addEventListener('click', function(event) {
//     console.log(event.target.classList)
//     if (event.target.classList.contains('box')) {
//         // Call highlightBox function when a box is clicked
//         highlightBox(event.target);
//     }
// });
//# sourceMappingURL=main.js.map

jQuery(document).ready(function($) {
    // Find the parent headers with the specified attribute
    var headers = $('header[data-v-570b1ee6]');
    // Loop through each header
    headers.each(function() {
        // Find the first parent of .secure within this header
        var firstParent = $(this).find('.secure').first().parent();

        // Create the link element
        var link = $('<a>').attr({
            href: 'https://carfinanced.co.uk/',
            target: ''
        });

        // Create and append the logo element within the link
        var logo = $('<img>').attr({
            src: 'https://carfinanced.co.uk/wp-content/uploads/2022/09/car_finance-1.png',
            alt: 'Secure Logo'
        }).css('height', '35px');
        link.append(logo);

        // Prepend the link to the parent element
        firstParent.prepend(link);
    });
});
