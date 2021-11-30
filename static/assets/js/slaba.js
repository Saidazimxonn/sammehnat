/*
 jQuery JavaScript Library v1.11.3
 http://jquery.com/

 Includes Sizzle.js
 http://sizzlejs.com/

 Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2015-04-28T16:19Z
 Sizzle CSS Selector Engine v2.2.0-pre
 http://sizzlejs.com/

 Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 Released under the MIT license
 http://jquery.org/license

 Date: 2014-12-16
 Copyright (c) 2008 Yii Software LLC
 @license http://www.yiiframework.com/license/
 @author Qiang Xue <qiang.xue@gmail.com>
 @since 2.0
 Bootstrap v3.4.1 (https://getbootstrap.com/)
 Copyright 2011-2019 Twitter, Inc.
 Licensed under the MIT license
 jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license  animsition v4.0.1
 A simple and easy jQuery plugin for CSS animated page transitions.
 http://blivesta.github.io/animsition
 License : MIT
 Author : blivesta (http://blivesta.com/)
 WOW - v1.0.1 - 2014-09-03
 Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT  Masonry PACKAGED v3.3.1
 Cascading grid layout library
 http://masonry.desandro.com
 MIT License
 by David DeSandro
 Magnific Popup - v1.0.0 - 2015-01-03
 http://dimsemenov.com/plugins/magnific-popup/
 Copyright (c) 2015 Dmitry Semenov;  imagesLoaded PACKAGED v3.2.0
 JavaScript is all like "You images are done yet or what?"
 MIT License
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, b, m) {
    a instanceof String && (a = String(a));
    for (var l = a.length, k = 0; k < l; k++) {
        var h = a[k];
        if (b.call(m, h, k, a))
            return {
                i: k,
                v: h
            }
    }
    return {
        i: -1,
        v: void 0
    }
}
;
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, m) {
    a != Array.prototype && a != Object.prototype && (a[b] = m.value)
}
;
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
}
;
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, b, m, l) {
    if (b) {
        m = $jscomp.global;
        a = a.split(".");
        for (l = 0; l < a.length - 1; l++) {
            var k = a[l];
            k in m || (m[k] = {});
            m = m[k]
        }
        a = a[a.length - 1];
        l = m[a];
        b = b(l);
        b != l && null != b && $jscomp.defineProperty(m, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
;
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a, m) {
        return $jscomp.findInternal(this, a, m).v
    }
}, "es6", "es3");
$jscomp.arrayIteratorImpl = function(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
}
;
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
}
;
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {}
    ;
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
;
$jscomp.SymbolClass = function(a, b) {
    this.$jscomp$symbol$id_ = a;
    $jscomp.defineProperty(this, "description", {
        configurable: !0,
        writable: !0,
        value: b
    })
}
;
$jscomp.SymbolClass.prototype.toString = function() {
    return this.$jscomp$symbol$id_
}
;
$jscomp.Symbol = function() {
    function a(m) {
        if (this instanceof a)
            throw new TypeError("Symbol is not a constructor");
        return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (m || "") + "_" + b++,m)
    }
    var b = 0;
    return a
}();
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.iterator;
    a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
    "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))
        }
    });
    $jscomp.initSymbolIterator = function() {}
}
;
$jscomp.initSymbolAsyncIterator = function() {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.asyncIterator;
    a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
    $jscomp.initSymbolAsyncIterator = function() {}
}
;
$jscomp.iteratorPrototype = function(a) {
    $jscomp.initSymbolIterator();
    a = {
        next: a
    };
    a[$jscomp.global.Symbol.iterator] = function() {
        return this
    }
    ;
    return a
}
;
$jscomp.iteratorFromArray = function(a, b) {
    $jscomp.initSymbolIterator();
    a instanceof String && (a += "");
    var m = 0
      , l = {
        next: function() {
            if (m < a.length) {
                var k = m++;
                return {
                    value: b(k, a[k]),
                    done: !1
                }
            }
            l.next = function() {
                return {
                    done: !0,
                    value: void 0
                }
            }
            ;
            return l.next()
        }
    };
    l[Symbol.iterator] = function() {
        return l
    }
    ;
    return l
}
;
$jscomp.polyfill("Array.prototype.keys", function(a) {
    return a ? a : function() {
        return $jscomp.iteratorFromArray(this, function(a) {
            return a
        })
    }
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.values", function(a) {
    return a ? a : function() {
        return $jscomp.iteratorFromArray(this, function(a, m) {
            return m
        })
    }
}, "es8", "es3");
(function(a, b) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}
)("undefined" !== typeof window ? window : this, function(a, b) {
    function m(g) {
        var a = "length"in g && g.length
          , t = e.type(g);
        return "function" === t || e.isWindow(g) ? !1 : 1 === g.nodeType && a ? !0 : "array" === t || 0 === a || "number" === typeof a && 0 < a && a - 1 in g
    }
    function l(g, a, t) {
        if (e.isFunction(a))
            return e.grep(g, function(g, p) {
                return !!a.call(g, p, g) !== t
            });
        if (a.nodeType)
            return e.grep(g, function(g) {
                return g === a !== t
            });
        if ("string" === typeof a) {
            if (Va.test(a))
                return e.filter(a, g, t);
            a = e.filter(a, g)
        }
        return e.grep(g, function(g) {
            return 0 <= e.inArray(g, a) !== t
        })
    }
    function k(g, a) {
        do
            g = g[a];
        while (g && 1 !== g.nodeType);return g
    }
    function h(g) {
        var a = Ja[g] = {};
        e.each(g.match(na) || [], function(g, p) {
            a[p] = !0
        });
        return a
    }
    function d() {
        C.addEventListener ? (C.removeEventListener("DOMContentLoaded", f, !1),
        a.removeEventListener("load", f, !1)) : (C.detachEvent("onreadystatechange", f),
        a.detachEvent("onload", f))
    }
    function f() {
        if (C.addEventListener || "load" === event.type || "complete" === C.readyState)
            d(),
            e.ready()
    }
    function q(g, a, t) {
        if (void 0 === t && 1 === g.nodeType)
            if (t = "data-" + a.replace(Gb, "-$1").toLowerCase(),
            t = g.getAttribute(t),
            "string" === typeof t) {
                try {
                    t = "true" === t ? !0 : "false" === t ? !1 : "null" === t ? null : +t + "" === t ? +t : Hb.test(t) ? e.parseJSON(t) : t
                } catch (J) {}
                e.data(g, a, t)
            } else
                t = void 0;
        return t
    }
    function r(g) {
        for (var a in g)
            if (("data" !== a || !e.isEmptyObject(g[a])) && "toJSON" !== a)
                return !1;
        return !0
    }
    function c(g, a, t, c) {
        if (e.acceptData(g)) {
            var p = e.expando
              , b = g.nodeType
              , d = b ? e.cache : g
              , f = b ? g[p] : g[p] && p;
            if (f && d[f] && (c || d[f].data) || void 0 !== t || "string" !== typeof a) {
                f || (f = b ? g[p] = K.pop() || e.guid++ : p);
                d[f] || (d[f] = b ? {} : {
                    toJSON: e.noop
                });
                if ("object" === typeof a || "function" === typeof a)
                    c ? d[f] = e.extend(d[f], a) : d[f].data = e.extend(d[f].data, a);
                g = d[f];
                c || (g.data || (g.data = {}),
                g = g.data);
                void 0 !== t && (g[e.camelCase(a)] = t);
                "string" === typeof a ? (t = g[a],
                null == t && (t = g[e.camelCase(a)])) : t = g;
                return t
            }
        }
    }
    function v(g, a, t) {
        if (e.acceptData(g)) {
            var p, c, b = g.nodeType, d = b ? e.cache : g, f = b ? g[e.expando] : e.expando;
            if (d[f]) {
                if (a && (p = t ? d[f] : d[f].data)) {
                    e.isArray(a) ? a = a.concat(e.map(a, e.camelCase)) : a in p ? a = [a] : (a = e.camelCase(a),
                    a = a in p ? [a] : a.split(" "));
                    for (c = a.length; c--; )
                        delete p[a[c]];
                    if (t ? !r(p) : !e.isEmptyObject(p))
                        return
                }
                if (!t && (delete d[f].data,
                !r(d[f])))
                    return;
                b ? e.cleanData([g], !0) : w.deleteExpando || d != d.window ? delete d[f] : d[f] = null
            }
        }
    }
    function n() {
        return !0
    }
    function u() {
        return !1
    }
    function E() {
        try {
            return C.activeElement
        } catch (g) {}
    }
    function z(g) {
        var a = kb.split("|");
        g = g.createDocumentFragment();
        if (g.createElement)
            for (; a.length; )
                g.createElement(a.pop());
        return g
    }
    function x(g, a) {
        var p, c, b = 0, d = "undefined" !== typeof g.getElementsByTagName ? g.getElementsByTagName(a || "*") : "undefined" !== typeof g.querySelectorAll ? g.querySelectorAll(a || "*") : void 0;
        if (!d)
            for (d = [],
            p = g.childNodes || g; null != (c = p[b]); b++)
                !a || e.nodeName(c, a) ? d.push(c) : e.merge(d, x(c, a));
        return void 0 === a || a && e.nodeName(g, a) ? e.merge([g], d) : d
    }
    function H(g) {
        Wa.test(g.type) && (g.defaultChecked = g.checked)
    }
    function B(g, a) {
        return e.nodeName(g, "table") && e.nodeName(11 !== a.nodeType ? a : a.firstChild, "tr") ? g.getElementsByTagName("tbody")[0] || g.appendChild(g.ownerDocument.createElement("tbody")) : g
    }
    function D(g) {
        g.type = (null !== e.find.attr(g, "type")) + "/" + g.type;
        return g
    }
    function G(g) {
        var a = Ib.exec(g.type);
        a ? g.type = a[1] : g.removeAttribute("type");
        return g
    }
    function N(g, a) {
        for (var p, c = 0; null != (p = g[c]); c++)
            e._data(p, "globalEval", !a || e._data(a[c], "globalEval"))
    }
    function Q(g, a) {
        if (1 === a.nodeType && e.hasData(g)) {
            var p, c;
            var b = e._data(g);
            g = e._data(a, b);
            var d = b.events;
            if (d)
                for (p in delete g.handle,
                g.events = {},
                d)
                    for (b = 0,
                    c = d[p].length; b < c; b++)
                        e.event.add(a, p, d[p][b]);
            g.data && (g.data = e.extend({}, g.data))
        }
    }
    function L(g, p) {
        var c;
        g = e(p.createElement(g)).appendTo(p.body);
        p = a.getDefaultComputedStyle && (c = a.getDefaultComputedStyle(g[0])) ? c.display : e.css(g[0], "display");
        g.detach();
        return p
    }
    function R(g) {
        var a = C
          , c = lb[g];
        c || (c = L(g, a),
        "none" !== c && c || (Fa = (Fa || e("<iframe frameborder='0' width='0' height='0'/>")).appendTo(a.documentElement),
        a = (Fa[0].contentWindow || Fa[0].contentDocument).document,
        a.write(),
        a.close(),
        c = L(g, a),
        Fa.detach()),
        lb[g] = c);
        return c
    }
    function da(g, a) {
        return {
            get: function() {
                var p = g();
                if (null != p)
                    if (p)
                        delete this.get;
                    else
                        return (this.get = a).apply(this, arguments)
            }
        }
    }
    function U(g, a) {
        if (a in g)
            return a;
        for (var p = a.charAt(0).toUpperCase() + a.slice(1), e = a, c = mb.length; c--; )
            if (a = mb[c] + p,
            a in g)
                return a;
        return e
    }
    function la(g, a) {
        for (var p, c, b, d = [], f = 0, h = g.length; f < h; f++)
            c = g[f],
            c.style && (d[f] = e._data(c, "olddisplay"),
            p = c.style.display,
            a ? (d[f] || "none" !== p || (c.style.display = ""),
            "" === c.style.display && Ga(c) && (d[f] = e._data(c, "olddisplay", R(c.nodeName)))) : (b = Ga(c),
            (p && "none" !== p || !b) && e._data(c, "olddisplay", b ? p : e.css(c, "display"))));
        for (f = 0; f < h; f++)
            c = g[f],
            !c.style || a && "none" !== c.style.display && "" !== c.style.display || (c.style.display = a ? d[f] || "" : "none");
        return g
    }
    function O(g, a, e) {
        return (g = Jb.exec(a)) ? Math.max(0, g[1] - (e || 0)) + (g[2] || "px") : a
    }
    function A(g, a, c, b, d) {
        a = c === (b ? "border" : "content") ? 4 : "width" === a ? 1 : 0;
        for (var p = 0; 4 > a; a += 2)
            "margin" === c && (p += e.css(g, c + wa[a], !0, d)),
            b ? ("content" === c && (p -= e.css(g, "padding" + wa[a], !0, d)),
            "margin" !== c && (p -= e.css(g, "border" + wa[a] + "Width", !0, d))) : (p += e.css(g, "padding" + wa[a], !0, d),
            "padding" !== c && (p += e.css(g, "border" + wa[a] + "Width", !0, d)));
        return p
    }
    function F(g, a, c) {
        var p = !0
          , b = "width" === a ? g.offsetWidth : g.offsetHeight
          , d = Aa(g)
          , t = w.boxSizing && "border-box" === e.css(g, "boxSizing", !1, d);
        if (0 >= b || null == b) {
            b = Ba(g, a, d);
            if (0 > b || null == b)
                b = g.style[a];
            if (Ka.test(b))
                return b;
            p = t && (w.boxSizingReliable() || b === g.style[a]);
            b = parseFloat(b) || 0
        }
        return b + A(g, a, c || (t ? "border" : "content"), p, d) + "px"
    }
    function y(g, a, e, c, b) {
        return new y.prototype.init(g,a,e,c,b)
    }
    function M() {
        setTimeout(function() {
            Ca = void 0
        });
        return Ca = e.now()
    }
    function W(g, a) {
        var p = {
            height: g
        }
          , e = 0;
        for (a = a ? 1 : 0; 4 > e; e += 2 - a) {
            var c = wa[e];
            p["margin" + c] = p["padding" + c] = g
        }
        a && (p.opacity = p.width = g);
        return p
    }
    function fa(g, a, e) {
        for (var p, c = (Ha[a] || []).concat(Ha["*"]), b = 0, d = c.length; b < d; b++)
            if (p = c[b].call(e, a, g))
                return p
    }
    function ba(g, a) {
        var p, c;
        for (p in g) {
            var b = e.camelCase(p);
            var d = a[b];
            var f = g[p];
            e.isArray(f) && (d = f[1],
            f = g[p] = f[0]);
            p !== b && (g[b] = f,
            delete g[p]);
            if ((c = e.cssHooks[b]) && "expand"in c)
                for (p in f = c.expand(f),
                delete g[b],
                f)
                    p in g || (g[p] = f[p],
                    a[p] = d);
            else
                a[b] = d
        }
    }
    function ea(g, a, c) {
        var p, b = 0, d = La.length, f = e.Deferred().always(function() {
            delete t.elem
        }), t = function() {
            if (p)
                return !1;
            var a = Ca || M();
            a = Math.max(0, h.startTime + h.duration - a);
            for (var e = 1 - (a / h.duration || 0), c = 0, b = h.tweens.length; c < b; c++)
                h.tweens[c].run(e);
            f.notifyWith(g, [h, e, a]);
            if (1 > e && b)
                return a;
            f.resolveWith(g, [h]);
            return !1
        }, h = f.promise({
            elem: g,
            props: e.extend({}, a),
            opts: e.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: a,
            originalOptions: c,
            startTime: Ca || M(),
            duration: c.duration,
            tweens: [],
            createTween: function(a, p) {
                a = e.Tween(g, h.opts, a, p, h.opts.specialEasing[a] || h.opts.easing);
                h.tweens.push(a);
                return a
            },
            stop: function(a) {
                var e = 0
                  , c = a ? h.tweens.length : 0;
                if (p)
                    return this;
                for (p = !0; e < c; e++)
                    h.tweens[e].run(1);
                a ? f.resolveWith(g, [h, a]) : f.rejectWith(g, [h, a]);
                return this
            }
        });
        c = h.props;
        for (ba(c, h.opts.specialEasing); b < d; b++)
            if (a = La[b].call(h, g, c, h.opts))
                return a;
        e.map(c, fa, h);
        e.isFunction(h.opts.start) && h.opts.start.call(g, h);
        e.fx.timer(e.extend(t, {
            elem: g,
            anim: h,
            queue: h.opts.queue
        }));
        return h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    function X(g) {
        return function(a, c) {
            "string" !== typeof a && (c = a,
            a = "*");
            var p = 0
              , b = a.toLowerCase().match(na) || [];
            if (e.isFunction(c))
                for (; a = b[p++]; )
                    "+" === a.charAt(0) ? (a = a.slice(1) || "*",
                    (g[a] = g[a] || []).unshift(c)) : (g[a] = g[a] || []).push(c)
        }
    }
    function oa(g, a, c, b) {
        function p(t) {
            var h;
            d[t] = !0;
            e.each(g[t] || [], function(g, e) {
                g = e(a, c, b);
                if ("string" === typeof g && !f && !d[g])
                    return a.dataTypes.unshift(g),
                    p(g),
                    !1;
                if (f)
                    return !(h = g)
            });
            return h
        }
        var d = {}
          , f = g === Xa;
        return p(a.dataTypes[0]) || !d["*"] && p("*")
    }
    function ca(g, a) {
        var p, c, b = e.ajaxSettings.flatOptions || {};
        for (c in a)
            void 0 !== a[c] && ((b[c] ? g : p || (p = {}))[c] = a[c]);
        p && e.extend(!0, g, p);
        return g
    }
    function S(g, a, c, b) {
        var p;
        if (e.isArray(a))
            e.each(a, function(a, e) {
                c || Lb.test(g) ? b(g, e) : S(g + "[" + ("object" === typeof e ? a : "") + "]", e, c, b)
            });
        else if (c || "object" !== e.type(a))
            b(g, a);
        else
            for (p in a)
                S(g + "[" + p + "]", a[p], c, b)
    }
    function pa() {
        try {
            return new a.XMLHttpRequest
        } catch (g) {}
    }
    function ha(g) {
        return e.isWindow(g) ? g : 9 === g.nodeType ? g.defaultView || g.parentWindow : !1
    }
    var K = []
      , I = K.slice
      , Z = K.concat
      , aa = K.push
      , V = K.indexOf
      , ia = {}
      , Ya = ia.toString
      , ja = ia.hasOwnProperty
      , w = {}
      , e = function(g, a) {
        return new e.fn.init(g,a)
    }
      , T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , Ma = /^-ms-/
      , Za = /-([\da-z])/gi
      , $a = function(g, a) {
        return a.toUpperCase()
    };
    e.fn = e.prototype = {
        jquery: "1.11.3",
        constructor: e,
        selector: "",
        length: 0,
        toArray: function() {
            return I.call(this)
        },
        get: function(g) {
            return null != g ? 0 > g ? this[g + this.length] : this[g] : I.call(this)
        },
        pushStack: function(g) {
            g = e.merge(this.constructor(), g);
            g.prevObject = this;
            g.context = this.context;
            return g
        },
        each: function(g, a) {
            return e.each(this, g, a)
        },
        map: function(g) {
            return this.pushStack(e.map(this, function(a, e) {
                return g.call(a, e, a)
            }))
        },
        slice: function() {
            return this.pushStack(I.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(g) {
            var a = this.length;
            g = +g + (0 > g ? a : 0);
            return this.pushStack(0 <= g && g < a ? [this[g]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: aa,
        sort: K.sort,
        splice: K.splice
    };
    e.extend = e.fn.extend = function() {
        var g, a, c, b = arguments[0] || {}, d = 1, f = arguments.length, h = !1;
        "boolean" === typeof b && (h = b,
        b = arguments[d] || {},
        d++);
        "object" === typeof b || e.isFunction(b) || (b = {});
        d === f && (b = this,
        d--);
        for (; d < f; d++)
            if (null != (c = arguments[d]))
                for (a in c) {
                    var k = b[a];
                    var q = c[a];
                    b !== q && (h && q && (e.isPlainObject(q) || (g = e.isArray(q))) ? (g ? (g = !1,
                    k = k && e.isArray(k) ? k : []) : k = k && e.isPlainObject(k) ? k : {},
                    b[a] = e.extend(h, k, q)) : void 0 !== q && (b[a] = q))
                }
        return b
    }
    ;
    e.extend({
        expando: "jQuery" + ("1.11.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(g) {
            throw Error(g);
        },
        noop: function() {},
        isFunction: function(g) {
            return "function" === e.type(g)
        },
        isArray: Array.isArray || function(g) {
            return "array" === e.type(g)
        }
        ,
        isWindow: function(g) {
            return null != g && g == g.window
        },
        isNumeric: function(g) {
            return !e.isArray(g) && 0 <= g - parseFloat(g) + 1
        },
        isEmptyObject: function(g) {
            for (var a in g)
                return !1;
            return !0
        },
        isPlainObject: function(g) {
            var a;
            if (!g || "object" !== e.type(g) || g.nodeType || e.isWindow(g))
                return !1;
            try {
                if (g.constructor && !ja.call(g, "constructor") && !ja.call(g.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            if (w.ownLast)
                for (a in g)
                    return ja.call(g, a);
            for (a in g)
                ;
            return void 0 === a || ja.call(g, a)
        },
        type: function(g) {
            return null == g ? g + "" : "object" === typeof g || "function" === typeof g ? ia[Ya.call(g)] || "object" : typeof g
        },
        globalEval: function(g) {
            g && e.trim(g) && (a.execScript || function(g) {
                a.eval.call(a, g)
            }
            )(g)
        },
        camelCase: function(g) {
            return g.replace(Ma, "ms-").replace(Za, $a)
        },
        nodeName: function(g, a) {
            return g.nodeName && g.nodeName.toLowerCase() === a.toLowerCase()
        },
        each: function(g, a, e) {
            var p = 0
              , c = g.length;
            var b = m(g);
            if (e)
                if (b)
                    for (; p < c && (b = a.apply(g[p], e),
                    !1 !== b); p++)
                        ;
                else
                    for (p in g) {
                        if (b = a.apply(g[p], e),
                        !1 === b)
                            break
                    }
            else if (b)
                for (; p < c && (b = a.call(g[p], p, g[p]),
                !1 !== b); p++)
                    ;
            else
                for (p in g)
                    if (b = a.call(g[p], p, g[p]),
                    !1 === b)
                        break;
            return g
        },
        trim: function(g) {
            return null == g ? "" : (g + "").replace(T, "")
        },
        makeArray: function(g, a) {
            a = a || [];
            null != g && (m(Object(g)) ? e.merge(a, "string" === typeof g ? [g] : g) : aa.call(a, g));
            return a
        },
        inArray: function(g, a, e) {
            if (a) {
                if (V)
                    return V.call(a, g, e);
                var p = a.length;
                for (e = e ? 0 > e ? Math.max(0, p + e) : e : 0; e < p; e++)
                    if (e in a && a[e] === g)
                        return e
            }
            return -1
        },
        merge: function(g, a) {
            for (var e = +a.length, p = 0, c = g.length; p < e; )
                g[c++] = a[p++];
            if (e !== e)
                for (; void 0 !== a[p]; )
                    g[c++] = a[p++];
            g.length = c;
            return g
        },
        grep: function(g, a, e) {
            for (var p = [], c = 0, b = g.length, d = !e; c < b; c++)
                e = !a(g[c], c),
                e !== d && p.push(g[c]);
            return p
        },
        map: function(a, e, c) {
            var g = 0
              , p = a.length
              , b = [];
            if (m(a))
                for (; g < p; g++) {
                    var d = e(a[g], g, c);
                    null != d && b.push(d)
                }
            else
                for (g in a)
                    d = e(a[g], g, c),
                    null != d && b.push(d);
            return Z.apply([], b)
        },
        guid: 1,
        proxy: function(a, p) {
            if ("string" === typeof p) {
                var g = a[p];
                p = a;
                a = g
            }
            if (e.isFunction(a)) {
                var c = I.call(arguments, 2);
                g = function() {
                    return a.apply(p || this, c.concat(I.call(arguments)))
                }
                ;
                g.guid = a.guid = a.guid || e.guid++;
                return g
            }
        },
        now: function() {
            return +new Date
        },
        support: w
    });
    e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, e) {
        ia["[object " + e + "]"] = e.toLowerCase()
    });
    var ua = function(a) {
        function g(g, a, e, p) {
            var c, b, d;
            (a ? a.ownerDocument || a : ia) !== w && O(a);
            a = a || w;
            e = e || [];
            var f = a.nodeType;
            if ("string" !== typeof g || !g || 1 !== f && 9 !== f && 11 !== f)
                return e;
            if (!p && Z) {
                if (11 !== f && (c = Da.exec(g)))
                    if (d = c[1])
                        if (9 === f)
                            if ((b = a.getElementById(d)) && b.parentNode) {
                                if (b.id === d)
                                    return e.push(b),
                                    e
                            } else
                                return e;
                        else {
                            if (a.ownerDocument && (b = a.ownerDocument.getElementById(d)) && H(a, b) && b.id === d)
                                return e.push(b),
                                e
                        }
                    else {
                        if (c[2])
                            return D.apply(e, a.getElementsByTagName(g)),
                            e;
                        if ((d = c[3]) && Y.getElementsByClassName)
                            return D.apply(e, a.getElementsByClassName(d)),
                            e
                    }
                if (Y.qsa && (!V || !V.test(g))) {
                    b = c = T;
                    d = a;
                    var h = 1 !== f && g;
                    if (1 === f && "object" !== a.nodeName.toLowerCase()) {
                        f = R(g);
                        (c = a.getAttribute("id")) ? b = c.replace(ab, "\\$&") : a.setAttribute("id", b);
                        b = "[id='" + b + "'] ";
                        for (d = f.length; d--; )
                            f[d] = b + r(f[d]);
                        d = oa.test(g) && n(a.parentNode) || a;
                        h = f.join(",")
                    }
                    if (h)
                        try {
                            return D.apply(e, d.querySelectorAll(h)),
                            e
                        } catch (vc) {} finally {
                            c || a.removeAttribute("id")
                        }
                }
            }
            return da(g.replace(ta, "$1"), a, e, p)
        }
        function e() {
            function a(e, p) {
                g.push(e + " ") > P.cacheLength && delete a[g.shift()];
                return a[e + " "] = p
            }
            var g = [];
            return a
        }
        function c(a) {
            a[T] = !0;
            return a
        }
        function b(a) {
            var g = w.createElement("div");
            try {
                return !!a(g)
            } catch (tc) {
                return !1
            } finally {
                g.parentNode && g.parentNode.removeChild(g)
            }
        }
        function d(a, g) {
            var e = a.split("|");
            for (a = a.length; a--; )
                P.attrHandle[e[a]] = g
        }
        function f(a, g) {
            var e = g && a
              , p = e && 1 === a.nodeType && 1 === g.nodeType && (~g.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (p)
                return p;
            if (e)
                for (; e = e.nextSibling; )
                    if (e === g)
                        return -1;
            return a ? 1 : -1
        }
        function h(a) {
            return function(g) {
                return "input" === g.nodeName.toLowerCase() && g.type === a
            }
        }
        function k(a) {
            return function(g) {
                var e = g.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && g.type === a
            }
        }
        function q(a) {
            return c(function(g) {
                g = +g;
                return c(function(e, p) {
                    for (var c, b = a([], e.length, g), d = b.length; d--; )
                        e[c = b[d]] && (e[c] = !(p[c] = e[c]))
                })
            })
        }
        function n(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }
        function l() {}
        function r(a) {
            for (var g = 0, e = a.length, p = ""; g < e; g++)
                p += a[g].value;
            return p
        }
        function u(a, g, e) {
            var p = g.dir
              , c = e && "parentNode" === p
              , b = Ya++;
            return g.first ? function(g, e, b) {
                for (; g = g[p]; )
                    if (1 === g.nodeType || c)
                        return a(g, e, b)
            }
            : function(g, e, d) {
                var f, h = [K, b];
                if (d)
                    for (; g = g[p]; ) {
                        if ((1 === g.nodeType || c) && a(g, e, d))
                            return !0
                    }
                else
                    for (; g = g[p]; )
                        if (1 === g.nodeType || c) {
                            var t = g[T] || (g[T] = {});
                            if ((f = t[p]) && f[0] === K && f[1] === b)
                                return h[2] = f[2];
                            t[p] = h;
                            if (h[2] = a(g, e, d))
                                return !0
                        }
            }
        }
        function v(g) {
            return 1 < g.length ? function(a, e, p) {
                for (var c = g.length; c--; )
                    if (!g[c](a, e, p))
                        return !1;
                return !0
            }
            : g[0]
        }
        function m(g, a, e, p, c) {
            for (var b, d = [], f = 0, h = g.length, t = null != a; f < h; f++)
                if (b = g[f])
                    if (!e || e(b, p, c))
                        d.push(b),
                        t && a.push(f);
            return d
        }
        function I(a, e, p, b, d, f) {
            b && !b[T] && (b = I(b));
            d && !d[T] && (d = I(d, f));
            return c(function(c, f, h, t) {
                var k, q = [], n = [], l = f.length, r;
                if (!(r = c)) {
                    r = e || "*";
                    for (var J = h.nodeType ? [h] : h, u = [], v = 0, I = J.length; v < I; v++)
                        g(r, J[v], u);
                    r = u
                }
                r = !a || !c && e ? r : m(r, q, a, h, t);
                J = p ? d || (c ? a : l || b) ? [] : f : r;
                p && p(r, J, h, t);
                if (b) {
                    var ka = m(J, n);
                    b(ka, [], h, t);
                    for (h = ka.length; h--; )
                        if (k = ka[h])
                            J[n[h]] = !(r[n[h]] = k)
                }
                if (c) {
                    if (d || a) {
                        if (d) {
                            ka = [];
                            for (h = J.length; h--; )
                                (k = J[h]) && ka.push(r[h] = k);
                            d(null, J = [], ka, t)
                        }
                        for (h = J.length; h--; )
                            (k = J[h]) && -1 < (ka = d ? qa(c, k) : q[h]) && (c[ka] = !(f[ka] = k))
                    }
                } else
                    J = m(J === f ? J.splice(l, J.length) : J),
                    d ? d(null, f, J, t) : D.apply(f, J)
            })
        }
        function E(a) {
            var g, e, p = a.length, c = P.relative[a[0].type];
            var b = c || P.relative[" "];
            for (var d = c ? 1 : 0, f = u(function(a) {
                return a === g
            }, b, !0), h = u(function(a) {
                return -1 < qa(g, a)
            }, b, !0), t = [function(a, e, p) {
                a = !c && (p || e !== aa) || ((g = e).nodeType ? f(a, e, p) : h(a, e, p));
                g = null;
                return a
            }
            ]; d < p; d++)
                if (b = P.relative[a[d].type])
                    t = [u(v(t), b)];
                else {
                    b = P.filter[a[d].type].apply(null, a[d].matches);
                    if (b[T]) {
                        for (e = ++d; e < p && !P.relative[a[e].type]; e++)
                            ;
                        return I(1 < d && v(t), 1 < d && r(a.slice(0, d - 1).concat({
                            value: " " === a[d - 2].type ? "*" : ""
                        })).replace(ta, "$1"), b, d < e && E(a.slice(d, e)), e < p && E(a = a.slice(e)), e < p && r(a))
                    }
                    t.push(b)
                }
            return v(t)
        }
        function A(a, e) {
            var p = 0 < e.length
              , b = 0 < a.length
              , d = function(c, d, f, h, t) {
                var k, q, n, r = 0, l = "0", J = c && [], u = [], v = aa, I = c || b && P.find.TAG("*", t), ka = K += null == v ? 1 : Math.random() || .1, E = I.length;
                for (t && (aa = d !== w && d); l !== E && null != (k = I[l]); l++) {
                    if (b && k) {
                        for (q = 0; n = a[q++]; )
                            if (n(k, d, f)) {
                                h.push(k);
                                break
                            }
                        t && (K = ka)
                    }
                    p && ((k = !n && k) && r--,
                    c && J.push(k))
                }
                r += l;
                if (p && l !== r) {
                    for (q = 0; n = e[q++]; )
                        n(J, u, d, f);
                    if (c) {
                        if (0 < r)
                            for (; l--; )
                                J[l] || u[l] || (u[l] = $a.call(h));
                        u = m(u)
                    }
                    D.apply(h, u);
                    t && !c && 0 < u.length && 1 < r + e.length && g.uniqueSort(h)
                }
                t && (K = ka,
                aa = v);
                return J
            };
            return p ? c(d) : d
        }
        var y, aa, x, z, w, F, Z, V, M, ja, H, T = "sizzle" + 1 * new Date, ia = a.document, K = 0, Ya = 0, G = e(), B = e(), W = e(), C = function(a, g) {
            a === g && (z = !0);
            return 0
        }, ua = {}.hasOwnProperty, sa = [], $a = sa.pop, Za = sa.push, D = sa.push, fa = sa.slice, qa = function(a, g) {
            for (var e = 0, p = a.length; e < p; e++)
                if (a[e] === g)
                    return e;
            return -1
        }, Ma = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), Pa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + Ma + "))|)[\\x20\\t\\r\\n\\f]*\\]", Q = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Pa + ")*)|.*)\\)|)", N = /[\x20\t\r\n\f]+/g, ta = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, ea = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, X = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, Na = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, Va = new RegExp(Q), L = new RegExp("^" + Ma + "$"), ba = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + Pa),
            PSEUDO: new RegExp("^" + Q),
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
        }, na = /^(?:input|select|textarea|button)$/i, bb = /^h\d$/i, ca = /^[^{]+\{\s*\[native \w/, Da = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, oa = /[+~]/, ab = /'|\\/g, ra = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, S = function(a, g, e) {
            a = "0x" + g - 65536;
            return a !== a || e ? g : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
        }, Oa = function() {
            O()
        };
        try {
            D.apply(sa = fa.call(ia.childNodes), ia.childNodes),
            sa[ia.childNodes.length].nodeType
        } catch (sc) {
            D = {
                apply: sa.length ? function(a, g) {
                    Za.apply(a, fa.call(g))
                }
                : function(a, g) {
                    for (var e = a.length, p = 0; a[e++] = g[p++]; )
                        ;
                    a.length = e - 1
                }
            }
        }
        var Y = g.support = {};
        var Ja = g.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        }
        ;
        var O = g.setDocument = function(a) {
            var g = a ? a.ownerDocument || a : ia;
            if (g === w || 9 !== g.nodeType || !g.documentElement)
                return w;
            w = g;
            F = g.documentElement;
            (a = g.defaultView) && a !== a.top && (a.addEventListener ? a.addEventListener("unload", Oa, !1) : a.attachEvent && a.attachEvent("onunload", Oa));
            Z = !Ja(g);
            Y.attributes = b(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            Y.getElementsByTagName = b(function(a) {
                a.appendChild(g.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            Y.getElementsByClassName = ca.test(g.getElementsByClassName);
            Y.getById = b(function(a) {
                F.appendChild(a).id = T;
                return !g.getElementsByName || !g.getElementsByName(T).length
            });
            Y.getById ? (P.find.ID = function(a, g) {
                if ("undefined" !== typeof g.getElementById && Z)
                    return (a = g.getElementById(a)) && a.parentNode ? [a] : []
            }
            ,
            P.filter.ID = function(a) {
                var g = a.replace(ra, S);
                return function(a) {
                    return a.getAttribute("id") === g
                }
            }
            ) : (delete P.find.ID,
            P.filter.ID = function(a) {
                var g = a.replace(ra, S);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === g
                }
            }
            );
            P.find.TAG = Y.getElementsByTagName ? function(a, g) {
                if ("undefined" !== typeof g.getElementsByTagName)
                    return g.getElementsByTagName(a);
                if (Y.qsa)
                    return g.querySelectorAll(a)
            }
            : function(a, g) {
                var e = []
                  , p = 0;
                g = g.getElementsByTagName(a);
                if ("*" === a) {
                    for (; a = g[p++]; )
                        1 === a.nodeType && e.push(a);
                    return e
                }
                return g
            }
            ;
            P.find.CLASS = Y.getElementsByClassName && function(a, g) {
                if (Z)
                    return g.getElementsByClassName(a)
            }
            ;
            M = [];
            V = [];
            if (Y.qsa = ca.test(g.querySelectorAll))
                b(function(a) {
                    F.appendChild(a).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\f]' msallowcapture=''><option selected=''></option></select>";
                    a.querySelectorAll("[msallowcapture^='']").length && V.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                    a.querySelectorAll("[selected]").length || V.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    a.querySelectorAll("[id~=" + T + "-]").length || V.push("~=");
                    a.querySelectorAll(":checked").length || V.push(":checked");
                    a.querySelectorAll("a#" + T + "+*").length || V.push(".#.+[+~]")
                }),
                b(function(a) {
                    var e = g.createElement("input");
                    e.setAttribute("type", "hidden");
                    a.appendChild(e).setAttribute("name", "D");
                    a.querySelectorAll("[name=d]").length && V.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                    a.querySelectorAll(":enabled").length || V.push(":enabled", ":disabled");
                    a.querySelectorAll("*,:x");
                    V.push(",.*:")
                });
            (Y.matchesSelector = ca.test(ja = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && b(function(a) {
                Y.disconnectedMatch = ja.call(a, "div");
                ja.call(a, "[s!='']:x");
                M.push("!=", Q)
            });
            V = V.length && new RegExp(V.join("|"));
            M = M.length && new RegExp(M.join("|"));
            H = (a = ca.test(F.compareDocumentPosition)) || ca.test(F.contains) ? function(a, g) {
                var e = 9 === a.nodeType ? a.documentElement : a;
                g = g && g.parentNode;
                return a === g || !!(g && 1 === g.nodeType && (e.contains ? e.contains(g) : a.compareDocumentPosition && a.compareDocumentPosition(g) & 16))
            }
            : function(a, g) {
                if (g)
                    for (; g = g.parentNode; )
                        if (g === a)
                            return !0;
                return !1
            }
            ;
            C = a ? function(a, e) {
                if (a === e)
                    return z = !0,
                    0;
                var p = !a.compareDocumentPosition - !e.compareDocumentPosition;
                if (p)
                    return p;
                p = (a.ownerDocument || a) === (e.ownerDocument || e) ? a.compareDocumentPosition(e) : 1;
                return p & 1 || !Y.sortDetached && e.compareDocumentPosition(a) === p ? a === g || a.ownerDocument === ia && H(ia, a) ? -1 : e === g || e.ownerDocument === ia && H(ia, e) ? 1 : x ? qa(x, a) - qa(x, e) : 0 : p & 4 ? -1 : 1
            }
            : function(a, e) {
                if (a === e)
                    return z = !0,
                    0;
                var p = 0
                  , c = a.parentNode
                  , b = e.parentNode
                  , d = [a]
                  , h = [e];
                if (!c || !b)
                    return a === g ? -1 : e === g ? 1 : c ? -1 : b ? 1 : x ? qa(x, a) - qa(x, e) : 0;
                if (c === b)
                    return f(a, e);
                for (; a = a.parentNode; )
                    d.unshift(a);
                for (a = e; a = a.parentNode; )
                    h.unshift(a);
                for (; d[p] === h[p]; )
                    p++;
                return p ? f(d[p], h[p]) : d[p] === ia ? -1 : h[p] === ia ? 1 : 0
            }
            ;
            return g
        }
        ;
        g.matches = function(a, e) {
            return g(a, null, null, e)
        }
        ;
        g.matchesSelector = function(a, e) {
            (a.ownerDocument || a) !== w && O(a);
            e = e.replace(Na, "='$1']");
            if (!(!Y.matchesSelector || !Z || M && M.test(e) || V && V.test(e)))
                try {
                    var p = ja.call(a, e);
                    if (p || Y.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return p
                } catch (uc) {}
            return 0 < g(e, w, null, [a]).length
        }
        ;
        g.contains = function(a, g) {
            (a.ownerDocument || a) !== w && O(a);
            return H(a, g)
        }
        ;
        g.attr = function(a, g) {
            (a.ownerDocument || a) !== w && O(a);
            var e = P.attrHandle[g.toLowerCase()];
            e = e && ua.call(P.attrHandle, g.toLowerCase()) ? e(a, g, !Z) : void 0;
            return void 0 !== e ? e : Y.attributes || !Z ? a.getAttribute(g) : (e = a.getAttributeNode(g)) && e.specified ? e.value : null
        }
        ;
        g.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        }
        ;
        g.uniqueSort = function(a) {
            var g, e = [], p = 0, c = 0;
            z = !Y.detectDuplicates;
            x = !Y.sortStable && a.slice(0);
            a.sort(C);
            if (z) {
                for (; g = a[c++]; )
                    g === a[c] && (p = e.push(c));
                for (; p--; )
                    a.splice(e[p], 1)
            }
            x = null;
            return a
        }
        ;
        var U = g.getText = function(a) {
            var g = ""
              , e = 0;
            var p = a.nodeType;
            if (!p)
                for (; p = a[e++]; )
                    g += U(p);
            else if (1 === p || 9 === p || 11 === p) {
                if ("string" === typeof a.textContent)
                    return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)
                    g += U(a)
            } else if (3 === p || 4 === p)
                return a.nodeValue;
            return g
        }
        ;
        var P = g.selectors = {
            cacheLength: 50,
            createPseudo: c,
            match: ba,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(ra, S);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ra, S);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || g.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && g.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var g, e = !a[6] && a[2];
                    if (ba.CHILD.test(a[0]))
                        return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : e && Va.test(e) && (g = R(e, !0)) && (g = e.indexOf(")", e.length - g) - e.length) && (a[0] = a[0].slice(0, g),
                    a[2] = e.slice(0, g));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var g = a.replace(ra, S).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === g
                    }
                },
                CLASS: function(a) {
                    var g = G[a + " "];
                    return g || (g = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"),
                    G(a, function(a) {
                        return g.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    }))
                },
                ATTR: function(a, e, p) {
                    return function(c) {
                        c = g.attr(c, a);
                        if (null == c)
                            return "!=" === e;
                        if (!e)
                            return !0;
                        c += "";
                        return "=" === e ? c === p : "!=" === e ? c !== p : "^=" === e ? p && 0 === c.indexOf(p) : "*=" === e ? p && -1 < c.indexOf(p) : "$=" === e ? p && c.slice(-p.length) === p : "~=" === e ? -1 < (" " + c.replace(N, " ") + " ").indexOf(p) : "|=" === e ? c === p || c.slice(0, p.length + 1) === p + "-" : !1
                    }
                },
                CHILD: function(a, g, e, p, c) {
                    var b = "nth" !== a.slice(0, 3)
                      , d = "last" !== a.slice(-4)
                      , f = "of-type" === g;
                    return 1 === p && 0 === c ? function(a) {
                        return !!a.parentNode
                    }
                    : function(g, e, h) {
                        var t;
                        e = b !== d ? "nextSibling" : "previousSibling";
                        var k = g.parentNode
                          , q = f && g.nodeName.toLowerCase();
                        h = !h && !f;
                        if (k) {
                            if (b) {
                                for (; e; ) {
                                    for (t = g; t = t[e]; )
                                        if (f ? t.nodeName.toLowerCase() === q : 1 === t.nodeType)
                                            return !1;
                                    var n = e = "only" === a && !n && "nextSibling"
                                }
                                return !0
                            }
                            n = [d ? k.firstChild : k.lastChild];
                            if (d && h) {
                                h = k[T] || (k[T] = {});
                                var l = h[a] || [];
                                var r = l[0] === K && l[1];
                                var J = l[0] === K && l[2];
                                for (t = r && k.childNodes[r]; t = ++r && t && t[e] || (J = r = 0) || n.pop(); )
                                    if (1 === t.nodeType && ++J && t === g) {
                                        h[a] = [K, r, J];
                                        break
                                    }
                            } else if (h && (l = (g[T] || (g[T] = {}))[a]) && l[0] === K)
                                J = l[1];
                            else
                                for (; (t = ++r && t && t[e] || (J = r = 0) || n.pop()) && ((f ? t.nodeName.toLowerCase() !== q : 1 !== t.nodeType) || !++J || (h && ((t[T] || (t[T] = {}))[a] = [K, J]),
                                t !== g)); )
                                    ;
                            J -= c;
                            return J === p || 0 === J % p && 0 <= J / p
                        }
                    }
                },
                PSEUDO: function(a, e) {
                    var p = P.pseudos[a] || P.setFilters[a.toLowerCase()] || g.error("unsupported pseudo: " + a);
                    if (p[T])
                        return p(e);
                    if (1 < p.length) {
                        var b = [a, a, "", e];
                        return P.setFilters.hasOwnProperty(a.toLowerCase()) ? c(function(a, g) {
                            for (var c, b = p(a, e), d = b.length; d--; )
                                c = qa(a, b[d]),
                                a[c] = !(g[c] = b[d])
                        }) : function(a) {
                            return p(a, 0, b)
                        }
                    }
                    return p
                }
            },
            pseudos: {
                not: c(function(a) {
                    var g = []
                      , e = []
                      , p = ha(a.replace(ta, "$1"));
                    return p[T] ? c(function(a, g, e, c) {
                        c = p(a, null, c, []);
                        for (var b = a.length; b--; )
                            if (e = c[b])
                                a[b] = !(g[b] = e)
                    }) : function(a, c, b) {
                        g[0] = a;
                        p(g, null, b, e);
                        g[0] = null;
                        return !e.pop()
                    }
                }),
                has: c(function(a) {
                    return function(e) {
                        return 0 < g(a, e).length
                    }
                }),
                contains: c(function(a) {
                    a = a.replace(ra, S);
                    return function(g) {
                        return -1 < (g.textContent || g.innerText || U(g)).indexOf(a)
                    }
                }),
                lang: c(function(a) {
                    L.test(a || "") || g.error("unsupported lang: " + a);
                    a = a.replace(ra, S).toLowerCase();
                    return function(g) {
                        var e;
                        do
                            if (e = Z ? g.lang : g.getAttribute("xml:lang") || g.getAttribute("lang"))
                                return e = e.toLowerCase(),
                                e === a || 0 === e.indexOf(a + "-");
                        while ((g = g.parentNode) && 1 === g.nodeType);return !1
                    }
                }),
                target: function(g) {
                    var e = a.location && a.location.hash;
                    return e && e.slice(1) === g.id
                },
                root: function(a) {
                    return a === F
                },
                focus: function(a) {
                    return a === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 === a.disabled
                },
                checked: function(a) {
                    var g = a.nodeName.toLowerCase();
                    return "input" === g && !!a.checked || "option" === g && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !P.pseudos.empty(a)
                },
                header: function(a) {
                    return bb.test(a.nodeName)
                },
                input: function(a) {
                    return na.test(a.nodeName)
                },
                button: function(a) {
                    var g = a.nodeName.toLowerCase();
                    return "input" === g && "button" === a.type || "button" === g
                },
                text: function(a) {
                    var g;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (g = a.getAttribute("type")) || "text" === g.toLowerCase())
                },
                first: q(function() {
                    return [0]
                }),
                last: q(function(a, g) {
                    return [g - 1]
                }),
                eq: q(function(a, g, e) {
                    return [0 > e ? e + g : e]
                }),
                even: q(function(a, g) {
                    for (var e = 0; e < g; e += 2)
                        a.push(e);
                    return a
                }),
                odd: q(function(a, g) {
                    for (var e = 1; e < g; e += 2)
                        a.push(e);
                    return a
                }),
                lt: q(function(a, g, e) {
                    for (g = 0 > e ? e + g : e; 0 <= --g; )
                        a.push(g);
                    return a
                }),
                gt: q(function(a, g, e) {
                    for (e = 0 > e ? e + g : e; ++e < g; )
                        a.push(e);
                    return a
                })
            }
        };
        P.pseudos.nth = P.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            P.pseudos[y] = h(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            P.pseudos[y] = k(y);
        l.prototype = P.filters = P.pseudos;
        P.setFilters = new l;
        var R = g.tokenize = function(a, e) {
            var p, c, b, d, f;
            if (d = B[a + " "])
                return e ? 0 : d.slice(0);
            d = a;
            var h = [];
            for (f = P.preFilter; d; ) {
                if (!t || (p = ea.exec(d)))
                    p && (d = d.slice(p[0].length) || d),
                    h.push(c = []);
                var t = !1;
                if (p = X.exec(d))
                    t = p.shift(),
                    c.push({
                        value: t,
                        type: p[0].replace(ta, " ")
                    }),
                    d = d.slice(t.length);
                for (b in P.filter)
                    !(p = ba[b].exec(d)) || f[b] && !(p = f[b](p)) || (t = p.shift(),
                    c.push({
                        value: t,
                        type: b,
                        matches: p
                    }),
                    d = d.slice(t.length));
                if (!t)
                    break
            }
            return e ? d.length : d ? g.error(a) : B(a, h).slice(0)
        }
        ;
        var ha = g.compile = function(a, g) {
            var e, p = [], c = [], b = W[a + " "];
            if (!b) {
                g || (g = R(a));
                for (e = g.length; e--; )
                    b = E(g[e]),
                    b[T] ? p.push(b) : c.push(b);
                b = W(a, A(c, p));
                b.selector = a
            }
            return b
        }
        ;
        var da = g.select = function(a, g, e, p) {
            var c, b, d, f = "function" === typeof a && a, h = !p && R(a = f.selector || a);
            e = e || [];
            if (1 === h.length) {
                var t = h[0] = h[0].slice(0);
                if (2 < t.length && "ID" === (b = t[0]).type && Y.getById && 9 === g.nodeType && Z && P.relative[t[1].type]) {
                    g = (P.find.ID(b.matches[0].replace(ra, S), g) || [])[0];
                    if (!g)
                        return e;
                    f && (g = g.parentNode);
                    a = a.slice(t.shift().value.length)
                }
                for (c = ba.needsContext.test(a) ? 0 : t.length; c--; ) {
                    b = t[c];
                    if (P.relative[d = b.type])
                        break;
                    if (d = P.find[d])
                        if (p = d(b.matches[0].replace(ra, S), oa.test(t[0].type) && n(g.parentNode) || g)) {
                            t.splice(c, 1);
                            a = p.length && r(t);
                            if (!a)
                                return D.apply(e, p),
                                e;
                            break
                        }
                }
            }
            (f || ha(a, h))(p, g, !Z, e, oa.test(a) && n(g.parentNode) || g);
            return e
        }
        ;
        Y.sortStable = T.split("").sort(C).join("") === T;
        Y.detectDuplicates = !!z;
        O();
        Y.sortDetached = b(function(a) {
            return a.compareDocumentPosition(w.createElement("div")) & 1
        });
        b(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || d("type|href|height|width", function(a, g, e) {
            if (!e)
                return a.getAttribute(g, "type" === g.toLowerCase() ? 1 : 2)
        });
        Y.attributes && b(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || d("value", function(a, g, e) {
            if (!e && "input" === a.nodeName.toLowerCase())
                return a.defaultValue
        });
        b(function(a) {
            return null == a.getAttribute("disabled")
        }) || d("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, g, e) {
            var p;
            if (!e)
                return !0 === a[g] ? g.toLowerCase() : (p = a.getAttributeNode(g)) && p.specified ? p.value : null
        });
        return g
    }(a);
    e.find = ua;
    e.expr = ua.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.unique = ua.uniqueSort;
    e.text = ua.getText;
    e.isXMLDoc = ua.isXML;
    e.contains = ua.contains;
    var sa = e.expr.match.needsContext
      , Na = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , Va = /^.[^:#\[\.,]*$/;
    e.filter = function(a, p, c) {
        var g = p[0];
        c && (a = ":not(" + a + ")");
        return 1 === p.length && 1 === g.nodeType ? e.find.matchesSelector(g, a) ? [g] : [] : e.find.matches(a, e.grep(p, function(a) {
            return 1 === a.nodeType
        }))
    }
    ;
    e.fn.extend({
        find: function(a) {
            var g, c = [], b = this, d = b.length;
            if ("string" !== typeof a)
                return this.pushStack(e(a).filter(function() {
                    for (g = 0; g < d; g++)
                        if (e.contains(b[g], this))
                            return !0
                }));
            for (g = 0; g < d; g++)
                e.find(a, b[g], c);
            c = this.pushStack(1 < d ? e.unique(c) : c);
            c.selector = this.selector ? this.selector + " " + a : a;
            return c
        },
        filter: function(a) {
            return this.pushStack(l(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(l(this, a || [], !0))
        },
        is: function(a) {
            return !!l(this, "string" === typeof a && sa.test(a) ? e(a) : a || [], !1).length
        }
    });
    var C = a.document
      , Oa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (e.fn.init = function(a, p) {
        if (!a)
            return this;
        if ("string" === typeof a) {
            var g = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : Oa.exec(a);
            if (!g || !g[1] && p)
                return !p || p.jquery ? (p || ta).find(a) : this.constructor(p).find(a);
            if (g[1]) {
                if (p = p instanceof e ? p[0] : p,
                e.merge(this, e.parseHTML(g[1], p && p.nodeType ? p.ownerDocument || p : C, !0)),
                Na.test(g[1]) && e.isPlainObject(p))
                    for (g in p)
                        if (e.isFunction(this[g]))
                            this[g](p[g]);
                        else
                            this.attr(g, p[g])
            } else {
                if ((p = C.getElementById(g[2])) && p.parentNode) {
                    if (p.id !== g[2])
                        return ta.find(a);
                    this.length = 1;
                    this[0] = p
                }
                this.context = C;
                this.selector = a
            }
            return this
        }
        if (a.nodeType)
            return this.context = this[0] = a,
            this.length = 1,
            this;
        if (e.isFunction(a))
            return "undefined" !== typeof ta.ready ? ta.ready(a) : a(e);
        void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context);
        return e.makeArray(a, this)
    }
    ).prototype = e.fn;
    var ta = e(C);
    var ab = /^(?:parents|prev(?:Until|All))/
      , Pa = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    e.extend({
        dir: function(a, p, c) {
            var g = [];
            for (a = a[p]; a && 9 !== a.nodeType && (void 0 === c || 1 !== a.nodeType || !e(a).is(c)); )
                1 === a.nodeType && g.push(a),
                a = a[p];
            return g
        },
        sibling: function(a, e) {
            for (var g = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== e && g.push(a);
            return g
        }
    });
    e.fn.extend({
        has: function(a) {
            var g, c = e(a, this), b = c.length;
            return this.filter(function() {
                for (g = 0; g < b; g++)
                    if (e.contains(this, c[g]))
                        return !0
            })
        },
        closest: function(a, p) {
            for (var g, c = 0, b = this.length, d = [], f = sa.test(a) || "string" !== typeof a ? e(a, p || this.context) : 0; c < b; c++)
                for (g = this[c]; g && g !== p; g = g.parentNode)
                    if (11 > g.nodeType && (f ? -1 < f.index(g) : 1 === g.nodeType && e.find.matchesSelector(g, a))) {
                        d.push(g);
                        break
                    }
            return this.pushStack(1 < d.length ? e.unique(d) : d)
        },
        index: function(a) {
            return a ? "string" === typeof a ? e.inArray(this[0], e(a)) : e.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, p) {
            return this.pushStack(e.unique(e.merge(this.get(), e(a, p))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    e.each({
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return e.dir(a, "parentNode")
        },
        parentsUntil: function(a, p, c) {
            return e.dir(a, "parentNode", c)
        },
        next: function(a) {
            return k(a, "nextSibling")
        },
        prev: function(a) {
            return k(a, "previousSibling")
        },
        nextAll: function(a) {
            return e.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return e.dir(a, "previousSibling")
        },
        nextUntil: function(a, p, c) {
            return e.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, p, c) {
            return e.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return e.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return e.sibling(a.firstChild)
        },
        contents: function(a) {
            return e.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : e.merge([], a.childNodes)
        }
    }, function(a, p) {
        e.fn[a] = function(g, c) {
            var b = e.map(this, p, g);
            "Until" !== a.slice(-5) && (c = g);
            c && "string" === typeof c && (b = e.filter(c, b));
            1 < this.length && (Pa[a] || (b = e.unique(b)),
            ab.test(a) && (b = b.reverse()));
            return this.pushStack(b)
        }
    });
    var na = /\S+/g
      , Ja = {};
    e.Callbacks = function(a) {
        a = "string" === typeof a ? Ja[a] || h(a) : e.extend({}, a);
        var g, c, b, d, f, k, q = [], n = !a.once && [], l = function(e) {
            c = a.memory && e;
            b = !0;
            f = k || 0;
            k = 0;
            d = q.length;
            for (g = !0; q && f < d; f++)
                if (!1 === q[f].apply(e[0], e[1]) && a.stopOnFalse) {
                    c = !1;
                    break
                }
            g = !1;
            q && (n ? n.length && l(n.shift()) : c ? q = [] : r.disable())
        }, r = {
            add: function() {
                if (q) {
                    var p = q.length;
                    (function Mb(g) {
                        e.each(g, function(g, p) {
                            g = e.type(p);
                            "function" === g ? a.unique && r.has(p) || q.push(p) : p && p.length && "string" !== g && Mb(p)
                        })
                    }
                    )(arguments);
                    g ? d = q.length : c && (k = p,
                    l(c))
                }
                return this
            },
            remove: function() {
                q && e.each(arguments, function(a, p) {
                    for (var c; -1 < (c = e.inArray(p, q, c)); )
                        q.splice(c, 1),
                        g && (c <= d && d--,
                        c <= f && f--)
                });
                return this
            },
            has: function(a) {
                return a ? -1 < e.inArray(a, q) : !(!q || !q.length)
            },
            empty: function() {
                q = [];
                d = 0;
                return this
            },
            disable: function() {
                q = n = c = void 0;
                return this
            },
            disabled: function() {
                return !q
            },
            lock: function() {
                n = void 0;
                c || r.disable();
                return this
            },
            locked: function() {
                return !n
            },
            fireWith: function(a, e) {
                !q || b && !n || (e = e || [],
                e = [a, e.slice ? e.slice() : e],
                g ? n.push(e) : l(e));
                return this
            },
            fire: function() {
                r.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!b
            }
        };
        return r
    }
    ;
    e.extend({
        Deferred: function(a) {
            var g = [["resolve", "done", e.Callbacks("once memory"), "resolved"], ["reject", "fail", e.Callbacks("once memory"), "rejected"], ["notify", "progress", e.Callbacks("memory")]]
              , c = "pending"
              , b = {
                state: function() {
                    return c
                },
                always: function() {
                    d.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var a = arguments;
                    return e.Deferred(function(c) {
                        e.each(g, function(g, p) {
                            var f = e.isFunction(a[g]) && a[g];
                            d[p[1]](function() {
                                var a = f && f.apply(this, arguments);
                                if (a && e.isFunction(a.promise))
                                    a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
                                else
                                    c[p[0] + "With"](this === b ? c.promise() : this, f ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? e.extend(a, b) : b
                }
            }
              , d = {};
            b.pipe = b.then;
            e.each(g, function(a, e) {
                var p = e[2]
                  , f = e[3];
                b[e[1]] = p.add;
                f && p.add(function() {
                    c = f
                }, g[a ^ 1][2].disable, g[2][2].lock);
                d[e[0]] = function() {
                    d[e[0] + "With"](this === d ? b : this, arguments);
                    return this
                }
                ;
                d[e[0] + "With"] = p.fireWith
            });
            b.promise(d);
            a && a.call(d, d);
            return d
        },
        when: function(a) {
            var g = 0, c = I.call(arguments), b = c.length, d = 1 !== b || a && e.isFunction(a.promise) ? b : 0, f = 1 === d ? a : e.Deferred(), h = function(a, g, e) {
                return function(c) {
                    g[a] = this;
                    e[a] = 1 < arguments.length ? I.call(arguments) : c;
                    e === q ? f.notifyWith(g, e) : --d || f.resolveWith(g, e)
                }
            }, k;
            if (1 < b) {
                var q = Array(b);
                var n = Array(b);
                for (k = Array(b); g < b; g++)
                    c[g] && e.isFunction(c[g].promise) ? c[g].promise().done(h(g, k, c)).fail(f.reject).progress(h(g, n, q)) : --d
            }
            d || f.resolveWith(k, c);
            return f.promise()
        }
    });
    var Da;
    e.fn.ready = function(a) {
        e.ready.promise().done(a);
        return this
    }
    ;
    e.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? e.readyWait++ : e.ready(!0)
        },
        ready: function(a) {
            if (!0 === a ? !--e.readyWait : !e.isReady) {
                if (!C.body)
                    return setTimeout(e.ready);
                e.isReady = !0;
                !0 !== a && 0 < --e.readyWait || (Da.resolveWith(C, [e]),
                e.fn.triggerHandler && (e(C).triggerHandler("ready"),
                e(C).off("ready")))
            }
        }
    });
    e.ready.promise = function(g) {
        if (!Da)
            if (Da = e.Deferred(),
            "complete" === C.readyState)
                setTimeout(e.ready);
            else if (C.addEventListener)
                C.addEventListener("DOMContentLoaded", f, !1),
                a.addEventListener("load", f, !1);
            else {
                C.attachEvent("onreadystatechange", f);
                a.attachEvent("onload", f);
                var c = !1;
                try {
                    c = null == a.frameElement && C.documentElement
                } catch (t) {}
                c && c.doScroll && function J() {
                    if (!e.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (ka) {
                            return setTimeout(J, 50)
                        }
                        d();
                        e.ready()
                    }
                }()
            }
        return Da.promise(g)
    }
    ;
    for (var Ob in e(w))
        break;
    w.ownLast = "0" !== Ob;
    w.inlineBlockNeedsLayout = !1;
    e(function() {
        var a;
        if ((a = C.getElementsByTagName("body")[0]) && a.style) {
            var e = C.createElement("div");
            var c = C.createElement("div");
            c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
            a.appendChild(c).appendChild(e);
            "undefined" !== typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
            w.inlineBlockNeedsLayout = e = 3 === e.offsetWidth) && (a.style.zoom = 1);
            a.removeChild(c)
        }
    });
    (function() {
        var a = C.createElement("div");
        if (null == w.deleteExpando) {
            w.deleteExpando = !0;
            try {
                delete a.test
            } catch (p) {
                w.deleteExpando = !1
            }
        }
    }
    )();
    e.acceptData = function(a) {
        var g = e.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !g || !0 !== g && a.getAttribute("classid") === g
    }
    ;
    var Hb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Gb = /([A-Z])/g;
    e.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            a = a.nodeType ? e.cache[a[e.expando]] : a[e.expando];
            return !!a && !r(a)
        },
        data: function(a, e, b) {
            return c(a, e, b)
        },
        removeData: function(a, e) {
            return v(a, e)
        },
        _data: function(a, e, b) {
            return c(a, e, b, !0)
        },
        _removeData: function(a, e) {
            return v(a, e, !0)
        }
    });
    e.fn.extend({
        data: function(a, c) {
            var g, p = this[0], b = p && p.attributes;
            if (void 0 === a) {
                if (this.length) {
                    var d = e.data(p);
                    if (1 === p.nodeType && !e._data(p, "parsedAttrs")) {
                        for (g = b.length; g--; )
                            if (b[g]) {
                                var f = b[g].name;
                                0 === f.indexOf("data-") && (f = e.camelCase(f.slice(5)),
                                q(p, f, d[f]))
                            }
                        e._data(p, "parsedAttrs", !0)
                    }
                }
                return d
            }
            return "object" === typeof a ? this.each(function() {
                e.data(this, a)
            }) : 1 < arguments.length ? this.each(function() {
                e.data(this, a, c)
            }) : p ? q(p, a, e.data(p, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                e.removeData(this, a)
            })
        }
    });
    e.extend({
        queue: function(a, c, b) {
            if (a) {
                c = (c || "fx") + "queue";
                var g = e._data(a, c);
                b && (!g || e.isArray(b) ? g = e._data(a, c, e.makeArray(b)) : g.push(b));
                return g || []
            }
        },
        dequeue: function(a, c) {
            c = c || "fx";
            var g = e.queue(a, c)
              , p = g.length
              , b = g.shift()
              , d = e._queueHooks(a, c)
              , f = function() {
                e.dequeue(a, c)
            };
            "inprogress" === b && (b = g.shift(),
            p--);
            b && ("fx" === c && g.unshift("inprogress"),
            delete d.stop,
            b.call(a, f, d));
            !p && d && d.empty.fire()
        },
        _queueHooks: function(a, c) {
            var g = c + "queueHooks";
            return e._data(a, g) || e._data(a, g, {
                empty: e.Callbacks("once memory").add(function() {
                    e._removeData(a, c + "queue");
                    e._removeData(a, g)
                })
            })
        }
    });
    e.fn.extend({
        queue: function(a, c) {
            var g = 2;
            "string" !== typeof a && (c = a,
            a = "fx",
            g--);
            return arguments.length < g ? e.queue(this[0], a) : void 0 === c ? this : this.each(function() {
                var g = e.queue(this, a, c);
                e._queueHooks(this, a);
                "fx" === a && "inprogress" !== g[0] && e.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                e.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            var g, p = 1, b = e.Deferred(), d = this, f = this.length, h = function() {
                --p || b.resolveWith(d, [d])
            };
            "string" !== typeof a && (c = a,
            a = void 0);
            for (a = a || "fx"; f--; )
                (g = e._data(d[f], a + "queueHooks")) && g.empty && (p++,
                g.empty.add(h));
            h();
            return b.promise(c)
        }
    });
    var Qa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , wa = ["Top", "Right", "Bottom", "Left"]
      , Ga = function(a, c) {
        a = c || a;
        return "none" === e.css(a, "display") || !e.contains(a.ownerDocument, a)
    }
      , xa = e.access = function(a, c, b, d, f, h, k) {
        var g = 0
          , p = a.length
          , q = null == b;
        if ("object" === e.type(b))
            for (g in f = !0,
            b)
                e.access(a, c, g, b[g], !0, h, k);
        else if (void 0 !== d && (f = !0,
        e.isFunction(d) || (k = !0),
        q && (k ? (c.call(a, d),
        c = null) : (q = c,
        c = function(a, g, c) {
            return q.call(e(a), c)
        }
        )),
        c))
            for (; g < p; g++)
                c(a[g], b, k ? d : d.call(a[g], g, c(a[g], b)));
        return f ? a : q ? c.call(a) : p ? c(a[0], b) : h
    }
      , Wa = /^(?:checkbox|radio)$/i;
    (function() {
        var a = C.createElement("input")
          , e = C.createElement("div")
          , c = C.createDocumentFragment();
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        w.leadingWhitespace = 3 === e.firstChild.nodeType;
        w.tbody = !e.getElementsByTagName("tbody").length;
        w.htmlSerialize = !!e.getElementsByTagName("link").length;
        w.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML;
        a.type = "checkbox";
        a.checked = !0;
        c.appendChild(a);
        w.appendChecked = a.checked;
        e.innerHTML = "<textarea>x</textarea>";
        w.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
        c.appendChild(e);
        e.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        w.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked;
        w.noCloneEvent = !0;
        e.attachEvent && (e.attachEvent("onclick", function() {
            w.noCloneEvent = !1
        }),
        e.cloneNode(!0).click());
        if (null == w.deleteExpando) {
            w.deleteExpando = !0;
            try {
                delete e.test
            } catch (J) {
                w.deleteExpando = !1
            }
        }
    }
    )();
    (function() {
        var g, e = C.createElement("div");
        for (g in {
            submit: !0,
            change: !0,
            focusin: !0
        }) {
            var c = "on" + g;
            (w[g + "Bubbles"] = c in a) || (e.setAttribute(c, "t"),
            w[g + "Bubbles"] = !1 === e.attributes[c].expando)
        }
    }
    )();
    var qa = /^(?:input|select|textarea)$/i
      , bb = /^key/
      , ra = /^(?:mouse|pointer|contextmenu)|click/
      , ob = /^(?:focusinfocus|focusoutblur)$/
      , pb = /^([^.]*)(?:\.(.+)|)$/;
    e.event = {
        global: {},
        add: function(a, c, b, d, f) {
            var g, p, h, k, q;
            if (p = e._data(a)) {
                if (b.handler) {
                    var t = b;
                    b = t.handler;
                    f = t.selector
                }
                b.guid || (b.guid = e.guid++);
                (g = p.events) || (g = p.events = {});
                (h = p.handle) || (h = p.handle = function(a) {
                    return "undefined" === typeof e || a && e.event.triggered === a.type ? void 0 : e.event.dispatch.apply(h.elem, arguments)
                }
                ,
                h.elem = a);
                c = (c || "").match(na) || [""];
                for (p = c.length; p--; ) {
                    var n = pb.exec(c[p]) || [];
                    var l = k = n[1];
                    var r = (n[2] || "").split(".").sort();
                    l && (n = e.event.special[l] || {},
                    l = (f ? n.delegateType : n.bindType) || l,
                    n = e.event.special[l] || {},
                    k = e.extend({
                        type: l,
                        origType: k,
                        data: d,
                        handler: b,
                        guid: b.guid,
                        selector: f,
                        needsContext: f && e.expr.match.needsContext.test(f),
                        namespace: r.join(".")
                    }, t),
                    (q = g[l]) || (q = g[l] = [],
                    q.delegateCount = 0,
                    n.setup && !1 !== n.setup.call(a, d, r, h) || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))),
                    n.add && (n.add.call(a, k),
                    k.handler.guid || (k.handler.guid = b.guid)),
                    f ? q.splice(q.delegateCount++, 0, k) : q.push(k),
                    e.event.global[l] = !0)
                }
                a = null
            }
        },
        remove: function(a, c, b, d, f) {
            var g, p, h, k, q, n = e.hasData(a) && e._data(a);
            if (n && (k = n.events)) {
                c = (c || "").match(na) || [""];
                for (h = c.length; h--; ) {
                    var t = pb.exec(c[h]) || [];
                    var l = q = t[1];
                    var r = (t[2] || "").split(".").sort();
                    if (l) {
                        var u = e.event.special[l] || {};
                        l = (d ? u.delegateType : u.bindType) || l;
                        var v = k[l] || [];
                        t = t[2] && new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (p = g = v.length; g--; ) {
                            var m = v[g];
                            !f && q !== m.origType || b && b.guid !== m.guid || t && !t.test(m.namespace) || d && d !== m.selector && ("**" !== d || !m.selector) || (v.splice(g, 1),
                            m.selector && v.delegateCount--,
                            u.remove && u.remove.call(a, m))
                        }
                        p && !v.length && (u.teardown && !1 !== u.teardown.call(a, r, n.handle) || e.removeEvent(a, l, n.handle),
                        delete k[l])
                    } else
                        for (l in k)
                            e.event.remove(a, l + c[h], b, d, !0)
                }
                e.isEmptyObject(k) && (delete n.handle,
                e._removeData(a, "events"))
            }
        },
        trigger: function(g, c, b, d) {
            var p, f, h = [b || C], k = ja.call(g, "type") ? g.type : g;
            var q = ja.call(g, "namespace") ? g.namespace.split(".") : [];
            var n = p = b = b || C;
            if (3 !== b.nodeType && 8 !== b.nodeType && !ob.test(k + e.event.triggered)) {
                0 <= k.indexOf(".") && (q = k.split("."),
                k = q.shift(),
                q.sort());
                var l = 0 > k.indexOf(":") && "on" + k;
                g = g[e.expando] ? g : new e.Event(k,"object" === typeof g && g);
                g.isTrigger = d ? 2 : 3;
                g.namespace = q.join(".");
                g.namespace_re = g.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                g.result = void 0;
                g.target || (g.target = b);
                c = null == c ? [g] : e.makeArray(c, [g]);
                q = e.event.special[k] || {};
                if (d || !q.trigger || !1 !== q.trigger.apply(b, c)) {
                    if (!d && !q.noBubble && !e.isWindow(b)) {
                        var t = q.delegateType || k;
                        ob.test(t + k) || (n = n.parentNode);
                        for (; n; n = n.parentNode)
                            h.push(n),
                            p = n;
                        p === (b.ownerDocument || C) && h.push(p.defaultView || p.parentWindow || a)
                    }
                    for (f = 0; (n = h[f++]) && !g.isPropagationStopped(); )
                        g.type = 1 < f ? t : q.bindType || k,
                        (p = (e._data(n, "events") || {})[g.type] && e._data(n, "handle")) && p.apply(n, c),
                        (p = l && n[l]) && p.apply && e.acceptData(n) && (g.result = p.apply(n, c),
                        !1 === g.result && g.preventDefault());
                    g.type = k;
                    if (!(d || g.isDefaultPrevented() || q._default && !1 !== q._default.apply(h.pop(), c)) && e.acceptData(b) && l && b[k] && !e.isWindow(b)) {
                        (p = b[l]) && (b[l] = null);
                        e.event.triggered = k;
                        try {
                            b[k]()
                        } catch (Kb) {}
                        e.event.triggered = void 0;
                        p && (b[l] = p)
                    }
                    return g.result
                }
            }
        },
        dispatch: function(a) {
            a = e.event.fix(a);
            var g, c, b, d = I.call(arguments);
            var f = (e._data(this, "events") || {})[a.type] || [];
            var h = e.event.special[a.type] || {};
            d[0] = a;
            a.delegateTarget = this;
            if (!h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                var k = e.event.handlers.call(this, a, f);
                for (f = 0; (c = k[f++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = c.elem,
                    b = 0; (g = c.handlers[b++]) && !a.isImmediatePropagationStopped(); )
                        if (!a.namespace_re || a.namespace_re.test(g.namespace))
                            a.handleObj = g,
                            a.data = g.data,
                            g = ((e.event.special[g.origType] || {}).handle || g.handler).apply(c.elem, d),
                            void 0 !== g && !1 === (a.result = g) && (a.preventDefault(),
                            a.stopPropagation());
                h.postDispatch && h.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, c) {
            var g, b = [], p = c.delegateCount, d = a.target;
            if (p && d.nodeType && (!a.button || "click" !== a.type))
                for (; d != this; d = d.parentNode || this)
                    if (1 === d.nodeType && (!0 !== d.disabled || "click" !== a.type)) {
                        var f = [];
                        for (g = 0; g < p; g++) {
                            var h = c[g];
                            var k = h.selector + " ";
                            void 0 === f[k] && (f[k] = h.needsContext ? 0 <= e(k, this).index(d) : e.find(k, this, null, [d]).length);
                            f[k] && f.push(h)
                        }
                        f.length && b.push({
                            elem: d,
                            handlers: f
                        })
                    }
            p < c.length && b.push({
                elem: this,
                handlers: c.slice(p)
            });
            return b
        },
        fix: function(a) {
            if (a[e.expando])
                return a;
            var g = a.type;
            var c = a
              , b = this.fixHooks[g];
            b || (this.fixHooks[g] = b = ra.test(g) ? this.mouseHooks : bb.test(g) ? this.keyHooks : {});
            var d = b.props ? this.props.concat(b.props) : this.props;
            a = new e.Event(c);
            for (g = d.length; g--; ) {
                var f = d[g];
                a[f] = c[f]
            }
            a.target || (a.target = c.srcElement || C);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey = !!a.metaKey;
            return b.filter ? b.filter(a, c) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, e) {
                null == a.which && (a.which = null != e.charCode ? e.charCode : e.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, e) {
                var g = e.button
                  , c = e.fromElement;
                if (null == a.pageX && null != e.clientX) {
                    var b = a.target.ownerDocument || C;
                    var p = b.documentElement;
                    b = b.body;
                    a.pageX = e.clientX + (p && p.scrollLeft || b && b.scrollLeft || 0) - (p && p.clientLeft || b && b.clientLeft || 0);
                    a.pageY = e.clientY + (p && p.scrollTop || b && b.scrollTop || 0) - (p && p.clientTop || b && b.clientTop || 0)
                }
                !a.relatedTarget && c && (a.relatedTarget = c === a.target ? e.toElement : c);
                a.which || void 0 === g || (a.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0);
                return a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== E() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (g) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === E() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (e.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                        !1
                },
                _default: function(a) {
                    return e.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, c, b, d) {
            a = e.extend(new e.Event, b, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? e.event.trigger(a, null, c) : e.event.dispatch.call(c, a);
            a.isDefaultPrevented() && b.preventDefault()
        }
    };
    e.removeEvent = C.removeEventListener ? function(a, e, c) {
        a.removeEventListener && a.removeEventListener(e, c, !1)
    }
    : function(a, e, c) {
        e = "on" + e;
        a.detachEvent && ("undefined" === typeof a[e] && (a[e] = null),
        a.detachEvent(e, c))
    }
    ;
    e.Event = function(a, c) {
        if (!(this instanceof e.Event))
            return new e.Event(a,c);
        a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? n : u) : this.type = a;
        c && e.extend(this, c);
        this.timeStamp = a && a.timeStamp || e.now();
        this[e.expando] = !0
    }
    ;
    e.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = n;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = n;
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = n;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, c) {
        e.event.special[a] = {
            delegateType: c,
            bindType: c,
            handle: function(a) {
                var g = a.relatedTarget
                  , b = a.handleObj;
                if (!g || g !== this && !e.contains(this, g)) {
                    a.type = b.origType;
                    var d = b.handler.apply(this, arguments);
                    a.type = c
                }
                return d
            }
        }
    });
    w.submitBubbles || (e.event.special.submit = {
        setup: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.add(this, "click._submit keypress._submit", function(a) {
                a = a.target;
                (a = e.nodeName(a, "input") || e.nodeName(a, "button") ? a.form : void 0) && !e._data(a, "submitBubbles") && (e.event.add(a, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                e._data(a, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && e.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            if (e.nodeName(this, "form"))
                return !1;
            e.event.remove(this, "._submit")
        }
    });
    w.changeBubbles || (e.event.special.change = {
        setup: function() {
            if (qa.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type)
                    e.event.add(this, "propertychange._change", function(a) {
                        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                    }),
                    e.event.add(this, "click._change", function(a) {
                        this._just_changed && !a.isTrigger && (this._just_changed = !1);
                        e.event.simulate("change", this, a, !0)
                    });
                return !1
            }
            e.event.add(this, "beforeactivate._change", function(a) {
                a = a.target;
                qa.test(a.nodeName) && !e._data(a, "changeBubbles") && (e.event.add(a, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || e.event.simulate("change", this.parentNode, a, !0)
                }),
                e._data(a, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var g = a.target;
            if (this !== g || a.isSimulated || a.isTrigger || "radio" !== g.type && "checkbox" !== g.type)
                return a.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            e.event.remove(this, "._change");
            return !qa.test(this.nodeName)
        }
    });
    w.focusinBubbles || e.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, c) {
        var g = function(a) {
            e.event.simulate(c, a.target, e.event.fix(a), !0)
        };
        e.event.special[c] = {
            setup: function() {
                var b = this.ownerDocument || this
                  , d = e._data(b, c);
                d || b.addEventListener(a, g, !0);
                e._data(b, c, (d || 0) + 1)
            },
            teardown: function() {
                var b = this.ownerDocument || this
                  , d = e._data(b, c) - 1;
                d ? e._data(b, c, d) : (b.removeEventListener(a, g, !0),
                e._removeData(b, c))
            }
        }
    });
    e.fn.extend({
        on: function(a, c, b, d, f) {
            var g;
            if ("object" === typeof a) {
                "string" !== typeof c && (b = b || c,
                c = void 0);
                for (g in a)
                    this.on(g, c, b, a[g], f);
                return this
            }
            null == b && null == d ? (d = c,
            b = c = void 0) : null == d && ("string" === typeof c ? (d = b,
            b = void 0) : (d = b,
            b = c,
            c = void 0));
            if (!1 === d)
                d = u;
            else if (!d)
                return this;
            if (1 === f) {
                var p = d;
                d = function(a) {
                    e().off(a);
                    return p.apply(this, arguments)
                }
                ;
                d.guid = p.guid || (p.guid = e.guid++)
            }
            return this.each(function() {
                e.event.add(this, a, d, b, c)
            })
        },
        one: function(a, e, c, b) {
            return this.on(a, e, c, b, 1)
        },
        off: function(a, c, b) {
            if (a && a.preventDefault && a.handleObj) {
                var g = a.handleObj;
                e(a.delegateTarget).off(g.namespace ? g.origType + "." + g.namespace : g.origType, g.selector, g.handler);
                return this
            }
            if ("object" === typeof a) {
                for (g in a)
                    this.off(g, c, a[g]);
                return this
            }
            if (!1 === c || "function" === typeof c)
                b = c,
                c = void 0;
            !1 === b && (b = u);
            return this.each(function() {
                e.event.remove(this, a, b, c)
            })
        },
        trigger: function(a, c) {
            return this.each(function() {
                e.event.trigger(a, c, this)
            })
        },
        triggerHandler: function(a, c) {
            var g = this[0];
            if (g)
                return e.event.trigger(a, c, g, !0)
        }
    });
    var kb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , Pb = / jQuery\d+="(?:null|\d+)"/g
      , qb = new RegExp("<(?:" + kb + ")[\\s/>]","i")
      , cb = /^\s+/
      , rb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , sb = /<([\w:]+)/
      , tb = /<tbody/i
      , Qb = /<|&#?\w+;/
      , Rb = /<(?:script|style|link)/i
      , Sb = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ub = /^$|\/(?:java|ecma)script/i
      , Ib = /^true\/(.*)/
      , Tb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , ma = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: w.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , db = z(C).appendChild(C.createElement("div"));
    ma.optgroup = ma.option;
    ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead;
    ma.th = ma.td;
    e.extend({
        clone: function(a, c, b) {
            var g, d, p = e.contains(a.ownerDocument, a);
            if (w.html5Clone || e.isXMLDoc(a) || !qb.test("<" + a.nodeName + ">"))
                var f = a.cloneNode(!0);
            else
                db.innerHTML = a.outerHTML,
                db.removeChild(f = db.firstChild);
            if (!(w.noCloneEvent && w.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || e.isXMLDoc(a))) {
                var h = x(f);
                var k = x(a);
                for (d = 0; null != (g = k[d]); ++d)
                    if (h[d]) {
                        var q = void 0
                          , n = g
                          , l = h[d];
                        if (1 === l.nodeType) {
                            var r = l.nodeName.toLowerCase();
                            if (!w.noCloneEvent && l[e.expando]) {
                                g = e._data(l);
                                for (q in g.events)
                                    e.removeEvent(l, q, g.handle);
                                l.removeAttribute(e.expando)
                            }
                            if ("script" === r && l.text !== n.text)
                                D(l).text = n.text,
                                G(l);
                            else if ("object" === r)
                                l.parentNode && (l.outerHTML = n.outerHTML),
                                w.html5Clone && n.innerHTML && !e.trim(l.innerHTML) && (l.innerHTML = n.innerHTML);
                            else if ("input" === r && Wa.test(n.type))
                                l.defaultChecked = l.checked = n.checked,
                                l.value !== n.value && (l.value = n.value);
                            else if ("option" === r)
                                l.defaultSelected = l.selected = n.defaultSelected;
                            else if ("input" === r || "textarea" === r)
                                l.defaultValue = n.defaultValue
                        }
                    }
            }
            if (c)
                if (b)
                    for (k = k || x(a),
                    h = h || x(f),
                    d = 0; null != (g = k[d]); d++)
                        Q(g, h[d]);
                else
                    Q(a, f);
            h = x(f, "script");
            0 < h.length && N(h, !p && x(a, "script"));
            return f
        },
        buildFragment: function(a, c, b, d) {
            for (var g, p, f, h, k, q, n = a.length, l = z(c), r = [], t = 0; t < n; t++)
                if ((p = a[t]) || 0 === p)
                    if ("object" === e.type(p))
                        e.merge(r, p.nodeType ? [p] : p);
                    else if (Qb.test(p)) {
                        f = f || l.appendChild(c.createElement("div"));
                        h = (sb.exec(p) || ["", ""])[1].toLowerCase();
                        q = ma[h] || ma._default;
                        f.innerHTML = q[1] + p.replace(rb, "<$1></$2>") + q[2];
                        for (g = q[0]; g--; )
                            f = f.lastChild;
                        !w.leadingWhitespace && cb.test(p) && r.push(c.createTextNode(cb.exec(p)[0]));
                        if (!w.tbody)
                            for (g = (p = "table" !== h || tb.test(p) ? "<table>" !== q[1] || tb.test(p) ? 0 : f : f.firstChild) && p.childNodes.length; g--; )
                                e.nodeName(k = p.childNodes[g], "tbody") && !k.childNodes.length && p.removeChild(k);
                        e.merge(r, f.childNodes);
                        for (f.textContent = ""; f.firstChild; )
                            f.removeChild(f.firstChild);
                        f = l.lastChild
                    } else
                        r.push(c.createTextNode(p));
            f && l.removeChild(f);
            w.appendChecked || e.grep(x(r, "input"), H);
            for (t = 0; p = r[t++]; )
                if (!d || -1 === e.inArray(p, d))
                    if (a = e.contains(p.ownerDocument, p),
                    f = x(l.appendChild(p), "script"),
                    a && N(f),
                    b)
                        for (g = 0; p = f[g++]; )
                            ub.test(p.type || "") && b.push(p);
            return l
        },
        cleanData: function(a, c) {
            for (var g, b, d, p, f = 0, h = e.expando, k = e.cache, q = w.deleteExpando, n = e.event.special; null != (g = a[f]); f++)
                if (c || e.acceptData(g))
                    if (p = (d = g[h]) && k[d]) {
                        if (p.events)
                            for (b in p.events)
                                n[b] ? e.event.remove(g, b) : e.removeEvent(g, b, p.handle);
                        k[d] && (delete k[d],
                        q ? delete g[h] : "undefined" !== typeof g.removeAttribute ? g.removeAttribute(h) : g[h] = null,
                        K.push(d))
                    }
        }
    });
    e.fn.extend({
        text: function(a) {
            return xa(this, function(a) {
                return void 0 === a ? e.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || B(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var g = B(this, a);
                    g.insertBefore(a, g.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, c) {
            for (var g = a ? e.filter(a, this) : this, b = 0; null != (a = g[b]); b++)
                c || 1 !== a.nodeType || e.cleanData(x(a)),
                a.parentNode && (c && e.contains(a.ownerDocument, a) && N(x(a, "script")),
                a.parentNode.removeChild(a));
            return this
        },
        empty: function() {
            for (var a, c = 0; null != (a = this[c]); c++) {
                for (1 === a.nodeType && e.cleanData(x(a, !1)); a.firstChild; )
                    a.removeChild(a.firstChild);
                a.options && e.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, c) {
            a = null == a ? !1 : a;
            c = null == c ? a : c;
            return this.map(function() {
                return e.clone(this, a, c)
            })
        },
        html: function(a) {
            return xa(this, function(a) {
                var g = this[0] || {}
                  , c = 0
                  , b = this.length;
                if (void 0 === a)
                    return 1 === g.nodeType ? g.innerHTML.replace(Pb, "") : void 0;
                if (!("string" !== typeof a || Rb.test(a) || !w.htmlSerialize && qb.test(a) || !w.leadingWhitespace && cb.test(a) || ma[(sb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(rb, "<$1></$2>");
                    try {
                        for (; c < b; c++)
                            g = this[c] || {},
                            1 === g.nodeType && (e.cleanData(x(g, !1)),
                            g.innerHTML = a);
                        g = 0
                    } catch (pc) {}
                }
                g && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            this.domManip(arguments, function(g) {
                a = this.parentNode;
                e.cleanData(x(this));
                a && a.replaceChild(g, this)
            });
            return a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c) {
            a = Z.apply([], a);
            var g, b = 0, d = this.length, p = this, f = d - 1, h = a[0], k = e.isFunction(h);
            if (k || 1 < d && "string" === typeof h && !w.checkClone && Sb.test(h))
                return this.each(function(g) {
                    var e = p.eq(g);
                    k && (a[0] = h.call(this, g, e.html()));
                    e.domManip(a, c)
                });
            if (d) {
                var q = e.buildFragment(a, this[0].ownerDocument, !1, this);
                var n = q.firstChild;
                1 === q.childNodes.length && (q = n);
                if (n) {
                    var l = e.map(x(q, "script"), D);
                    for (g = l.length; b < d; b++)
                        n = q,
                        b !== f && (n = e.clone(n, !0, !0),
                        g && e.merge(l, x(n, "script"))),
                        c.call(this[b], n, b);
                    if (g)
                        for (q = l[l.length - 1].ownerDocument,
                        e.map(l, G),
                        b = 0; b < g; b++)
                            n = l[b],
                            ub.test(n.type || "") && !e._data(n, "globalEval") && e.contains(q, n) && (n.src ? e._evalUrl && e._evalUrl(n.src) : e.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Tb, "")));
                    q = n = null
                }
            }
            return this
        }
    });
    e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, c) {
        e.fn[a] = function(a) {
            for (var g = 0, b = [], d = e(a), p = d.length - 1; g <= p; g++)
                a = g === p ? this : this.clone(!0),
                e(d[g])[c](a),
                aa.apply(b, a.get());
            return this.pushStack(b)
        }
    });
    var Fa, lb = {};
    (function() {
        var a;
        w.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var g;
            if ((g = C.getElementsByTagName("body")[0]) && g.style) {
                var e = C.createElement("div");
                var c = C.createElement("div");
                c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                g.appendChild(c).appendChild(e);
                "undefined" !== typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                e.appendChild(C.createElement("div")).style.width = "5px",
                a = 3 !== e.offsetWidth);
                g.removeChild(c);
                return a
            }
        }
    }
    )();
    var vb = /^margin/
      , Ka = new RegExp("^(" + Qa + ")(?!px)[a-z%]+$","i")
      , Ub = /^(top|right|bottom|left)$/;
    if (a.getComputedStyle) {
        var Aa = function(g) {
            return g.ownerDocument.defaultView.opener ? g.ownerDocument.defaultView.getComputedStyle(g, null) : a.getComputedStyle(g, null)
        };
        var Ba = function(a, c, b) {
            var g = a.style;
            var d = (b = b || Aa(a)) ? b.getPropertyValue(c) || b[c] : void 0;
            if (b && ("" !== d || e.contains(a.ownerDocument, a) || (d = e.style(a, c)),
            Ka.test(d) && vb.test(c))) {
                a = g.width;
                c = g.minWidth;
                var f = g.maxWidth;
                g.minWidth = g.maxWidth = g.width = d;
                d = b.width;
                g.width = a;
                g.minWidth = c;
                g.maxWidth = f
            }
            return void 0 === d ? d : d + ""
        }
    } else
        C.documentElement.currentStyle && (Aa = function(a) {
            return a.currentStyle
        }
        ,
        Ba = function(a, e, c) {
            var g, b, d = a.style;
            var f = (c = c || Aa(a)) ? c[e] : void 0;
            null == f && d && d[e] && (f = d[e]);
            if (Ka.test(f) && !Ub.test(e)) {
                c = d.left;
                if (b = (g = a.runtimeStyle) && g.left)
                    g.left = a.currentStyle.left;
                d.left = "fontSize" === e ? "1em" : f;
                f = d.pixelLeft + "px";
                d.left = c;
                b && (g.left = b)
            }
            return void 0 === f ? f : f + "" || "auto"
        }
        );
    (function() {
        function g() {
            var g;
            if ((g = C.getElementsByTagName("body")[0]) && g.style) {
                var e = C.createElement("div");
                var c = C.createElement("div");
                c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                g.appendChild(c).appendChild(e);
                e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                b = d = !1;
                h = !0;
                if (a.getComputedStyle) {
                    b = "1%" !== (a.getComputedStyle(e, null) || {}).top;
                    d = "4px" === (a.getComputedStyle(e, null) || {
                        width: "4px"
                    }).width;
                    var p = e.appendChild(C.createElement("div"));
                    p.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0";
                    p.style.marginRight = p.style.width = "0";
                    e.style.width = "1px";
                    h = !parseFloat((a.getComputedStyle(p, null) || {}).marginRight);
                    e.removeChild(p)
                }
                e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                p = e.getElementsByTagName("td");
                p[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                if (f = 0 === p[0].offsetHeight)
                    p[0].style.display = "",
                    p[1].style.display = "none",
                    f = 0 === p[0].offsetHeight;
                g.removeChild(c)
            }
        }
        var c, b, d, f, h;
        var k = C.createElement("div");
        k.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        if (c = (c = k.getElementsByTagName("a")[0]) && c.style)
            c.cssText = "float:left;opacity:.5",
            w.opacity = "0.5" === c.opacity,
            w.cssFloat = !!c.cssFloat,
            k.style.backgroundClip = "content-box",
            k.cloneNode(!0).style.backgroundClip = "",
            w.clearCloneStyle = "content-box" === k.style.backgroundClip,
            w.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing,
            e.extend(w, {
                reliableHiddenOffsets: function() {
                    null == f && g();
                    return f
                },
                boxSizingReliable: function() {
                    null == d && g();
                    return d
                },
                pixelPosition: function() {
                    null == b && g();
                    return b
                },
                reliableMarginRight: function() {
                    null == h && g();
                    return h
                }
            })
    }
    )();
    e.swap = function(a, e, c, b) {
        var g, d = {};
        for (g in e)
            d[g] = a.style[g],
            a.style[g] = e[g];
        c = c.apply(a, b || []);
        for (g in e)
            a.style[g] = d[g];
        return c
    }
    ;
    var eb = /alpha\([^)]*\)/i
      , Vb = /opacity\s*=\s*([^)]*)/
      , Wb = /^(none|table(?!-c[ea]).+)/
      , Jb = new RegExp("^(" + Qa + ")(.*)$","i")
      , Xb = new RegExp("^([+-])=(" + Qa + ")","i")
      , Yb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , wb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , mb = ["Webkit", "O", "Moz", "ms"];
    e.extend({
        cssHooks: {
            opacity: {
                get: function(a, e) {
                    if (e)
                        return a = Ba(a, "opacity"),
                        "" === a ? "1" : a
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": w.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, b, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var g, f = e.camelCase(c), p = a.style;
                c = e.cssProps[f] || (e.cssProps[f] = U(p, f));
                var h = e.cssHooks[c] || e.cssHooks[f];
                if (void 0 !== b) {
                    var k = typeof b;
                    "string" === k && (g = Xb.exec(b)) && (b = (g[1] + 1) * g[2] + parseFloat(e.css(a, c)),
                    k = "number");
                    if (null != b && b === b && ("number" !== k || e.cssNumber[f] || (b += "px"),
                    w.clearCloneStyle || "" !== b || 0 !== c.indexOf("background") || (p[c] = "inherit"),
                    !(h && "set"in h) || void 0 !== (b = h.set(a, b, d))))
                        try {
                            p[c] = b
                        } catch (rc) {}
                } else
                    return h && "get"in h && void 0 !== (g = h.get(a, !1, d)) ? g : p[c]
            }
        },
        css: function(a, c, b, d) {
            var g;
            var f = e.camelCase(c);
            c = e.cssProps[f] || (e.cssProps[f] = U(a.style, f));
            (f = e.cssHooks[c] || e.cssHooks[f]) && "get"in f && (g = f.get(a, !0, b));
            void 0 === g && (g = Ba(a, c, d));
            "normal" === g && c in wb && (g = wb[c]);
            return "" === b || b ? (a = parseFloat(g),
            !0 === b || e.isNumeric(a) ? a || 0 : g) : g
        }
    });
    e.each(["height", "width"], function(a, c) {
        e.cssHooks[c] = {
            get: function(a, g, b) {
                if (g)
                    return Wb.test(e.css(a, "display")) && 0 === a.offsetWidth ? e.swap(a, Yb, function() {
                        return F(a, c, b)
                    }) : F(a, c, b)
            },
            set: function(a, g, b) {
                var d = b && Aa(a);
                return O(a, g, b ? A(a, c, b, w.boxSizing && "border-box" === e.css(a, "boxSizing", !1, d), d) : 0)
            }
        }
    });
    w.opacity || (e.cssHooks.opacity = {
        get: function(a, e) {
            return Vb.test((e && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(a, c) {
            var g = a.style;
            a = a.currentStyle;
            var b = e.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : ""
              , d = a && a.filter || g.filter || "";
            g.zoom = 1;
            if ((1 <= c || "" === c) && "" === e.trim(d.replace(eb, "")) && g.removeAttribute && (g.removeAttribute("filter"),
            "" === c || a && !a.filter))
                return;
            g.filter = eb.test(d) ? d.replace(eb, b) : d + " " + b
        }
    });
    e.cssHooks.marginRight = da(w.reliableMarginRight, function(a, c) {
        if (c)
            return e.swap(a, {
                display: "inline-block"
            }, Ba, [a, "marginRight"])
    });
    e.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, c) {
        e.cssHooks[a + c] = {
            expand: function(g) {
                var e = 0
                  , b = {};
                for (g = "string" === typeof g ? g.split(" ") : [g]; 4 > e; e++)
                    b[a + wa[e] + c] = g[e] || g[e - 2] || g[0];
                return b
            }
        };
        vb.test(a) || (e.cssHooks[a + c].set = O)
    });
    e.fn.extend({
        css: function(a, c) {
            return xa(this, function(a, g, c) {
                var b, d = {}, f = 0;
                if (e.isArray(g)) {
                    c = Aa(a);
                    for (b = g.length; f < b; f++)
                        d[g[f]] = e.css(a, g[f], !1, c);
                    return d
                }
                return void 0 !== c ? e.style(a, g, c) : e.css(a, g)
            }, a, c, 1 < arguments.length)
        },
        show: function() {
            return la(this, !0)
        },
        hide: function() {
            return la(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ga(this) ? e(this).show() : e(this).hide()
            })
        }
    });
    e.Tween = y;
    y.prototype = {
        constructor: y,
        init: function(a, c, b, d, f, h) {
            this.elem = a;
            this.prop = b;
            this.easing = f || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = h || (e.cssNumber[b] ? "" : "px")
        },
        cur: function() {
            var a = y.propHooks[this.prop];
            return a && a.get ? a.get(this) : y.propHooks._default.get(this)
        },
        run: function(a) {
            var g, c = y.propHooks[this.prop];
            this.pos = this.options.duration ? g = e.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : g = a;
            this.now = (this.end - this.start) * g + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : y.propHooks._default.set(this);
            return this
        }
    };
    y.prototype.init.prototype = y.prototype;
    y.propHooks = {
        _default: {
            get: function(a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = e.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            },
            set: function(a) {
                if (e.fx.step[a.prop])
                    e.fx.step[a.prop](a);
                else
                    a.elem.style && (null != a.elem.style[e.cssProps[a.prop]] || e.cssHooks[a.prop]) ? e.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    y.propHooks.scrollTop = y.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    e.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    e.fx = y.prototype.init;
    e.fx.step = {};
    var Ca, Ra, Zb = /^(?:toggle|show|hide)$/, xb = new RegExp("^(?:([+-])=|)(" + Qa + ")([a-z%]*)$","i"), $b = /queueHooks$/, La = [function(a, c, b) {
        var g, d = this, f = {}, h = a.style, p = a.nodeType && Ga(a), k = e._data(a, "fxshow");
        if (!b.queue) {
            var q = e._queueHooks(a, "fx");
            if (null == q.unqueued) {
                q.unqueued = 0;
                var n = q.empty.fire;
                q.empty.fire = function() {
                    q.unqueued || n()
                }
            }
            q.unqueued++;
            d.always(function() {
                d.always(function() {
                    q.unqueued--;
                    e.queue(a, "fx").length || q.empty.fire()
                })
            })
        }
        if (1 === a.nodeType && ("height"in c || "width"in c)) {
            b.overflow = [h.overflow, h.overflowX, h.overflowY];
            var l = e.css(a, "display");
            var r = "none" === l ? e._data(a, "olddisplay") || R(a.nodeName) : l;
            "inline" === r && "none" === e.css(a, "float") && (w.inlineBlockNeedsLayout && "inline" !== R(a.nodeName) ? h.zoom = 1 : h.display = "inline-block")
        }
        b.overflow && (h.overflow = "hidden",
        w.shrinkWrapBlocks() || d.always(function() {
            h.overflow = b.overflow[0];
            h.overflowX = b.overflow[1];
            h.overflowY = b.overflow[2]
        }));
        for (g in c)
            if (r = c[g],
            Zb.exec(r)) {
                delete c[g];
                var u = u || "toggle" === r;
                if (r === (p ? "hide" : "show"))
                    if ("show" === r && k && void 0 !== k[g])
                        p = !0;
                    else
                        continue;
                f[g] = k && k[g] || e.style(a, g)
            } else
                l = void 0;
        if (e.isEmptyObject(f))
            "inline" === ("none" === l ? R(a.nodeName) : l) && (h.display = l);
        else
            for (g in k ? "hidden"in k && (p = k.hidden) : k = e._data(a, "fxshow", {}),
            u && (k.hidden = !p),
            p ? e(a).show() : d.done(function() {
                e(a).hide()
            }),
            d.done(function() {
                var g;
                e._removeData(a, "fxshow");
                for (g in f)
                    e.style(a, g, f[g])
            }),
            f)
                c = fa(p ? k[g] : 0, g, d),
                g in k || (k[g] = c.start,
                p && (c.end = c.start,
                c.start = "width" === g || "height" === g ? 1 : 0))
    }
    ], Ha = {
        "*": [function(a, c) {
            var g = this.createTween(a, c)
              , b = g.cur()
              , d = (c = xb.exec(c)) && c[3] || (e.cssNumber[a] ? "" : "px")
              , f = (e.cssNumber[a] || "px" !== d && +b) && xb.exec(e.css(g.elem, a))
              , h = 1
              , p = 20;
            if (f && f[3] !== d) {
                d = d || f[3];
                c = c || [];
                f = +b || 1;
                do
                    h = h || ".5",
                    f /= h,
                    e.style(g.elem, a, f + d);
                while (h !== (h = g.cur() / b) && 1 !== h && --p)
            }
            c && (f = g.start = +f || +b || 0,
            g.unit = d,
            g.end = c[1] ? f + (c[1] + 1) * c[2] : +c[2]);
            return g
        }
        ]
    };
    e.Animation = e.extend(ea, {
        tweener: function(a, c) {
            e.isFunction(a) ? (c = a,
            a = ["*"]) : a = a.split(" ");
            for (var g, b = 0, d = a.length; b < d; b++)
                g = a[b],
                Ha[g] = Ha[g] || [],
                Ha[g].unshift(c)
        },
        prefilter: function(a, e) {
            e ? La.unshift(a) : La.push(a)
        }
    });
    e.speed = function(a, c, b) {
        var g = a && "object" === typeof a ? e.extend({}, a) : {
            complete: b || !b && c || e.isFunction(a) && a,
            duration: a,
            easing: b && c || c && !e.isFunction(c) && c
        };
        g.duration = e.fx.off ? 0 : "number" === typeof g.duration ? g.duration : g.duration in e.fx.speeds ? e.fx.speeds[g.duration] : e.fx.speeds._default;
        if (null == g.queue || !0 === g.queue)
            g.queue = "fx";
        g.old = g.complete;
        g.complete = function() {
            e.isFunction(g.old) && g.old.call(this);
            g.queue && e.dequeue(this, g.queue)
        }
        ;
        return g
    }
    ;
    e.fn.extend({
        fadeTo: function(a, e, c, b) {
            return this.filter(Ga).css("opacity", 0).show().end().animate({
                opacity: e
            }, a, c, b)
        },
        animate: function(a, c, b, d) {
            var g = e.isEmptyObject(a)
              , f = e.speed(c, b, d);
            c = function() {
                var c = ea(this, e.extend({}, a), f);
                (g || e._data(this, "finish")) && c.stop(!0)
            }
            ;
            c.finish = c;
            return g || !1 === f.queue ? this.each(c) : this.queue(f.queue, c)
        },
        stop: function(a, c, b) {
            var g = function(a) {
                var g = a.stop;
                delete a.stop;
                g(b)
            };
            "string" !== typeof a && (b = c,
            c = a,
            a = void 0);
            c && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var c = !0
                  , d = null != a && a + "queueHooks"
                  , f = e.timers
                  , h = e._data(this);
                if (d)
                    h[d] && h[d].stop && g(h[d]);
                else
                    for (d in h)
                        h[d] && h[d].stop && $b.test(d) && g(h[d]);
                for (d = f.length; d--; )
                    f[d].elem !== this || null != a && f[d].queue !== a || (f[d].anim.stop(b),
                    c = !1,
                    f.splice(d, 1));
                !c && b || e.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var g = e._data(this)
                  , c = g[a + "queue"];
                var b = g[a + "queueHooks"];
                var d = e.timers
                  , f = c ? c.length : 0;
                g.finish = !0;
                e.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = d.length; b--; )
                    d[b].elem === this && d[b].queue === a && (d[b].anim.stop(!0),
                    d.splice(b, 1));
                for (b = 0; b < f; b++)
                    c[b] && c[b].finish && c[b].finish.call(this);
                delete g.finish
            })
        }
    });
    e.each(["toggle", "show", "hide"], function(a, c) {
        var g = e.fn[c];
        e.fn[c] = function(a, e, b) {
            return null == a || "boolean" === typeof a ? g.apply(this, arguments) : this.animate(W(c, !0), a, e, b)
        }
    });
    e.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, c) {
        e.fn[a] = function(a, g, e) {
            return this.animate(c, a, g, e)
        }
    });
    e.timers = [];
    e.fx.tick = function() {
        var a = e.timers
          , c = 0;
        for (Ca = e.now(); c < a.length; c++) {
            var b = a[c];
            b() || a[c] !== b || a.splice(c--, 1)
        }
        a.length || e.fx.stop();
        Ca = void 0
    }
    ;
    e.fx.timer = function(a) {
        e.timers.push(a);
        a() ? e.fx.start() : e.timers.pop()
    }
    ;
    e.fx.interval = 13;
    e.fx.start = function() {
        Ra || (Ra = setInterval(e.fx.tick, e.fx.interval))
    }
    ;
    e.fx.stop = function() {
        clearInterval(Ra);
        Ra = null
    }
    ;
    e.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    e.fn.delay = function(a, c) {
        a = e.fx ? e.fx.speeds[a] || a : a;
        return this.queue(c || "fx", function(g, c) {
            var e = setTimeout(g, a);
            c.stop = function() {
                clearTimeout(e)
            }
        })
    }
    ;
    (function() {
        var a = C.createElement("div");
        a.setAttribute("className", "t");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        var c = a.getElementsByTagName("a")[0];
        var e = C.createElement("select");
        var b = e.appendChild(C.createElement("option"));
        var d = a.getElementsByTagName("input")[0];
        c.style.cssText = "top:1px";
        w.getSetAttribute = "t" !== a.className;
        w.style = /top/.test(c.getAttribute("style"));
        w.hrefNormalized = "/a" === c.getAttribute("href");
        w.checkOn = !!d.value;
        w.optSelected = b.selected;
        w.enctype = !!C.createElement("form").enctype;
        e.disabled = !0;
        w.optDisabled = !b.disabled;
        d = C.createElement("input");
        d.setAttribute("value", "");
        w.input = "" === d.getAttribute("value");
        d.value = "t";
        d.setAttribute("type", "radio");
        w.radioValue = "t" === d.value
    }
    )();
    var ac = /\r/g;
    e.fn.extend({
        val: function(a) {
            var g, c, b = this[0];
            if (arguments.length) {
                var d = e.isFunction(a);
                return this.each(function(c) {
                    1 === this.nodeType && (c = d ? a.call(this, c, e(this).val()) : a,
                    null == c ? c = "" : "number" === typeof c ? c += "" : e.isArray(c) && (c = e.map(c, function(a) {
                        return null == a ? "" : a + ""
                    })),
                    g = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()],
                    g && "set"in g && void 0 !== g.set(this, c, "value") || (this.value = c))
                })
            }
            if (b) {
                if ((g = e.valHooks[b.type] || e.valHooks[b.nodeName.toLowerCase()]) && "get"in g && void 0 !== (c = g.get(b, "value")))
                    return c;
                c = b.value;
                return "string" === typeof c ? c.replace(ac, "") : null == c ? "" : c
            }
        }
    });
    e.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var g = e.find.attr(a, "value");
                    return null != g ? g : e.trim(e.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var g, c = a.options, b = a.selectedIndex, d = (a = "select-one" === a.type || 0 > b) ? null : [], f = a ? b + 1 : c.length, h = 0 > b ? f : a ? b : 0; h < f; h++)
                        if (g = c[h],
                        !(!g.selected && h !== b || (w.optDisabled ? g.disabled : null !== g.getAttribute("disabled")) || g.parentNode.disabled && e.nodeName(g.parentNode, "optgroup"))) {
                            g = e(g).val();
                            if (a)
                                return g;
                            d.push(g)
                        }
                    return d
                },
                set: function(a, c) {
                    for (var g, b = a.options, d = e.makeArray(c), f = b.length; f--; )
                        if (c = b[f],
                        0 <= e.inArray(e.valHooks.option.get(c), d))
                            try {
                                c.selected = g = !0
                            } catch (qc) {
                                c.scrollHeight
                            }
                        else
                            c.selected = !1;
                    g || (a.selectedIndex = -1);
                    return b
                }
            }
        }
    });
    e.each(["radio", "checkbox"], function() {
        e.valHooks[this] = {
            set: function(a, c) {
                if (e.isArray(c))
                    return a.checked = 0 <= e.inArray(e(a).val(), c)
            }
        };
        w.checkOn || (e.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var va = e.expr.attrHandle
      , fb = /^(?:checked|selected)$/i
      , ya = w.getSetAttribute
      , Sa = w.input;
    e.fn.extend({
        attr: function(a, c) {
            return xa(this, e.attr, a, c, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                e.removeAttr(this, a)
            })
        }
    });
    e.extend({
        attr: function(a, c, b) {
            var g, d = a.nodeType;
            if (a && 3 !== d && 8 !== d && 2 !== d) {
                if ("undefined" === typeof a.getAttribute)
                    return e.prop(a, c, b);
                if (1 !== d || !e.isXMLDoc(a)) {
                    c = c.toLowerCase();
                    var f = e.attrHooks[c] || (e.expr.match.bool.test(c) ? bc : Ia)
                }
                if (void 0 !== b)
                    if (null === b)
                        e.removeAttr(a, c);
                    else {
                        if (f && "set"in f && void 0 !== (g = f.set(a, b, c)))
                            return g;
                        a.setAttribute(c, b + "");
                        return b
                    }
                else {
                    if (f && "get"in f && null !== (g = f.get(a, c)))
                        return g;
                    g = e.find.attr(a, c);
                    return null == g ? void 0 : g
                }
            }
        },
        removeAttr: function(a, c) {
            var g = 0
              , b = c && c.match(na);
            if (b && 1 === a.nodeType)
                for (; c = b[g++]; ) {
                    var d = e.propFix[c] || c;
                    e.expr.match.bool.test(c) ? Sa && ya || !fb.test(c) ? a[d] = !1 : a[e.camelCase("default-" + c)] = a[d] = !1 : e.attr(a, c, "");
                    a.removeAttribute(ya ? c : d)
                }
        },
        attrHooks: {
            type: {
                set: function(a, c) {
                    if (!w.radioValue && "radio" === c && e.nodeName(a, "input")) {
                        var g = a.value;
                        a.setAttribute("type", c);
                        g && (a.value = g);
                        return c
                    }
                }
            }
        }
    });
    var bc = {
        set: function(a, c, b) {
            !1 === c ? e.removeAttr(a, b) : Sa && ya || !fb.test(b) ? a.setAttribute(!ya && e.propFix[b] || b, b) : a[e.camelCase("default-" + b)] = a[b] = !0;
            return b
        }
    };
    e.each(e.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var g = va[c] || e.find.attr;
        va[c] = Sa && ya || !fb.test(c) ? function(a, c, e) {
            if (!e) {
                var b = va[c];
                va[c] = d;
                var d = null != g(a, c, e) ? c.toLowerCase() : null;
                va[c] = b
            }
            return d
        }
        : function(a, c, g) {
            if (!g)
                return a[e.camelCase("default-" + c)] ? c.toLowerCase() : null
        }
    });
    Sa && ya || (e.attrHooks.value = {
        set: function(a, c, b) {
            if (e.nodeName(a, "input"))
                a.defaultValue = c;
            else
                return Ia && Ia.set(a, c, b)
        }
    });
    if (!ya) {
        var Ia = {
            set: function(a, c, e) {
                var g = a.getAttributeNode(e);
                g || a.setAttributeNode(g = a.ownerDocument.createAttribute(e));
                g.value = c += "";
                if ("value" === e || c === a.getAttribute(e))
                    return c
            }
        };
        va.id = va.name = va.coords = function(a, c, e) {
            var g;
            if (!e)
                return (g = a.getAttributeNode(c)) && "" !== g.value ? g.value : null
        }
        ;
        e.valHooks.button = {
            get: function(a, c) {
                if ((a = a.getAttributeNode(c)) && a.specified)
                    return a.value
            },
            set: Ia.set
        };
        e.attrHooks.contenteditable = {
            set: function(a, c, e) {
                Ia.set(a, "" === c ? !1 : c, e)
            }
        };
        e.each(["width", "height"], function(a, c) {
            e.attrHooks[c] = {
                set: function(a, g) {
                    if ("" === g)
                        return a.setAttribute(c, "auto"),
                        g
                }
            }
        })
    }
    w.style || (e.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, c) {
            return a.style.cssText = c + ""
        }
    });
    var cc = /^(?:input|select|textarea|button|object)$/i
      , dc = /^(?:a|area)$/i;
    e.fn.extend({
        prop: function(a, c) {
            return xa(this, e.prop, a, c, 1 < arguments.length)
        },
        removeProp: function(a) {
            a = e.propFix[a] || a;
            return this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (p) {}
            })
        }
    });
    e.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, b) {
            var g, d = a.nodeType;
            if (a && 3 !== d && 8 !== d && 2 !== d) {
                if (1 !== d || !e.isXMLDoc(a)) {
                    c = e.propFix[c] || c;
                    var f = e.propHooks[c]
                }
                return void 0 !== b ? f && "set"in f && void 0 !== (g = f.set(a, b, c)) ? g : a[c] = b : f && "get"in f && null !== (g = f.get(a, c)) ? g : a[c]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = e.find.attr(a, "tabindex");
                    return c ? parseInt(c, 10) : cc.test(a.nodeName) || dc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    w.hrefNormalized || e.each(["href", "src"], function(a, c) {
        e.propHooks[c] = {
            get: function(a) {
                return a.getAttribute(c, 4)
            }
        }
    });
    w.optSelected || (e.propHooks.selected = {
        get: function(a) {
            if (a = a.parentNode)
                a.selectedIndex,
                a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        e.propFix[this.toLowerCase()] = this
    });
    w.enctype || (e.propFix.enctype = "encoding");
    var gb = /[\t\r\n\f]/g;
    e.fn.extend({
        addClass: function(a) {
            var c, g, b, d = 0, f = this.length;
            var h = "string" === typeof a && a;
            if (e.isFunction(a))
                return this.each(function(c) {
                    e(this).addClass(a.call(this, c, this.className))
                });
            if (h)
                for (h = (a || "").match(na) || []; d < f; d++) {
                    var k = this[d];
                    if (c = 1 === k.nodeType && (k.className ? (" " + k.className + " ").replace(gb, " ") : " ")) {
                        for (b = 0; g = h[b++]; )
                            0 > c.indexOf(" " + g + " ") && (c += g + " ");
                        c = e.trim(c);
                        k.className !== c && (k.className = c)
                    }
                }
            return this
        },
        removeClass: function(a) {
            var c, g, b, d = 0, f = this.length;
            var h = 0 === arguments.length || "string" === typeof a && a;
            if (e.isFunction(a))
                return this.each(function(c) {
                    e(this).removeClass(a.call(this, c, this.className))
                });
            if (h)
                for (h = (a || "").match(na) || []; d < f; d++) {
                    var k = this[d];
                    if (c = 1 === k.nodeType && (k.className ? (" " + k.className + " ").replace(gb, " ") : "")) {
                        for (b = 0; g = h[b++]; )
                            for (; 0 <= c.indexOf(" " + g + " "); )
                                c = c.replace(" " + g + " ", " ");
                        c = a ? e.trim(c) : "";
                        k.className !== c && (k.className = c)
                    }
                }
            return this
        },
        toggleClass: function(a, c) {
            var g = typeof a;
            return "boolean" === typeof c && "string" === g ? c ? this.addClass(a) : this.removeClass(a) : e.isFunction(a) ? this.each(function(g) {
                e(this).toggleClass(a.call(this, g, this.className, c), c)
            }) : this.each(function() {
                if ("string" === g)
                    for (var c, b = 0, d = e(this), f = a.match(na) || []; c = f[b++]; )
                        d.hasClass(c) ? d.removeClass(c) : d.addClass(c);
                else if ("undefined" === g || "boolean" === g)
                    this.className && e._data(this, "__className__", this.className),
                    this.className = this.className || !1 === a ? "" : e._data(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var c = 0, e = this.length; c < e; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(gb, " ").indexOf(a))
                    return !0;
            return !1
        }
    });
    e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, c) {
        e.fn[c] = function(a, e) {
            return 0 < arguments.length ? this.on(c, null, a, e) : this.trigger(c)
        }
    });
    e.fn.extend({
        hover: function(a, c) {
            return this.mouseenter(a).mouseleave(c || a)
        },
        bind: function(a, c, e) {
            return this.on(a, null, c, e)
        },
        unbind: function(a, c) {
            return this.off(a, null, c)
        },
        delegate: function(a, c, e, b) {
            return this.on(c, a, e, b)
        },
        undelegate: function(a, c, e) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(c, a || "**", e)
        }
    });
    var hb = e.now()
      , ib = /\?/
      , ec = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    e.parseJSON = function(c) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(c + "");
        var g, b = null, d = e.trim(c + "");
        return d && !e.trim(d.replace(ec, function(a, c, e, d) {
            g && c && (b = 0);
            if (0 === b)
                return a;
            g = e || c;
            b += !d - !e;
            return ""
        })) ? Function("return " + d)() : e.error("Invalid JSON: " + c)
    }
    ;
    e.parseXML = function(c) {
        if (!c || "string" !== typeof c)
            return null;
        try {
            if (a.DOMParser) {
                var g = new DOMParser;
                var b = g.parseFromString(c, "text/xml")
            } else
                b = new ActiveXObject("Microsoft.XMLDOM"),
                b.async = "false",
                b.loadXML(c)
        } catch (J) {
            b = void 0
        }
        b && b.documentElement && !b.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + c);
        return b
    }
    ;
    var fc = /#.*$/
      , yb = /([?&])_=[^&]*/
      , gc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg
      , hc = /^(?:GET|HEAD)$/
      , ic = /^\/\//
      , zb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Ab = {}
      , Xa = {}
      , Bb = "*/".concat("*");
    try {
        var za = location.href
    } catch (g) {
        za = C.createElement("a"),
        za.href = "",
        za = za.href
    }
    var Ea = zb.exec(za.toLowerCase()) || [];
    e.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: za,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ea[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, c) {
            return c ? ca(ca(a, e.ajaxSettings), c) : ca(e.ajaxSettings, a)
        },
        ajaxPrefilter: X(Ab),
        ajaxTransport: X(Xa),
        ajax: function(a, c) {
            function g(a, c, g, b) {
                var q = c;
                if (2 !== E) {
                    E = 2;
                    f && clearTimeout(f);
                    k = void 0;
                    d = b || "";
                    y.readyState = 0 < a ? 4 : 0;
                    b = 200 <= a && 300 > a || 304 === a;
                    if (g) {
                        var m = n;
                        for (var I = y, A, x, w, z, F = m.contents, Z = m.dataTypes; "*" === Z[0]; )
                            Z.shift(),
                            void 0 === x && (x = m.mimeType || I.getResponseHeader("Content-Type"));
                        if (x)
                            for (z in F)
                                if (F[z] && F[z].test(x)) {
                                    Z.unshift(z);
                                    break
                                }
                        if (Z[0]in g)
                            w = Z[0];
                        else {
                            for (z in g) {
                                if (!Z[0] || m.converters[z + " " + Z[0]]) {
                                    w = z;
                                    break
                                }
                                A || (A = z)
                            }
                            w = w || A
                        }
                        w ? (w !== Z[0] && Z.unshift(w),
                        m = g[w]) : m = void 0
                    }
                    a: {
                        g = n;
                        A = m;
                        x = y;
                        w = b;
                        var t;
                        I = {};
                        F = g.dataTypes.slice();
                        if (F[1])
                            for (M in g.converters)
                                I[M.toLowerCase()] = g.converters[M];
                        for (z = F.shift(); z; ) {
                            g.responseFields[z] && (x[g.responseFields[z]] = A);
                            !V && w && g.dataFilter && (A = g.dataFilter(A, g.dataType));
                            var V = z;
                            if (z = F.shift())
                                if ("*" === z)
                                    z = V;
                                else if ("*" !== V && V !== z) {
                                    var M = I[V + " " + z] || I["* " + z];
                                    if (!M)
                                        for (t in I)
                                            if (m = t.split(" "),
                                            m[1] === z && (M = I[V + " " + m[0]] || I["* " + m[0]])) {
                                                !0 === M ? M = I[t] : !0 !== I[t] && (z = m[0],
                                                F.unshift(m[1]));
                                                break
                                            }
                                    if (!0 !== M)
                                        if (M && g["throws"])
                                            A = M(A);
                                        else
                                            try {
                                                A = M(A)
                                            } catch (Nb) {
                                                m = {
                                                    state: "parsererror",
                                                    error: M ? Nb : "No conversion from " + V + " to " + z
                                                };
                                                break a
                                            }
                                }
                        }
                        m = {
                            state: "success",
                            data: A
                        }
                    }
                    if (b)
                        if (n.ifModified && ((q = y.getResponseHeader("Last-Modified")) && (e.lastModified[aa] = q),
                        (q = y.getResponseHeader("etag")) && (e.etag[aa] = q)),
                        204 === a || "HEAD" === n.type)
                            q = "nocontent";
                        else if (304 === a)
                            q = "notmodified";
                        else {
                            q = m.state;
                            var T = m.data;
                            var ja = m.error;
                            b = !ja
                        }
                    else if (ja = q,
                    a || !q)
                        q = "error",
                        0 > a && (a = 0);
                    y.status = a;
                    y.statusText = (c || q) + "";
                    b ? r.resolveWith(l, [T, q, y]) : r.rejectWith(l, [y, q, ja]);
                    y.statusCode(v);
                    v = void 0;
                    h && p.trigger(b ? "ajaxSuccess" : "ajaxError", [y, n, b ? T : ja]);
                    u.fireWith(l, [y, q]);
                    h && (p.trigger("ajaxComplete", [y, n]),
                    --e.active || e.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (c = a,
            a = void 0);
            c = c || {};
            var b, d, f, h, k, q, n = e.ajaxSetup({}, c), l = n.context || n, p = n.context && (l.nodeType || l.jquery) ? e(l) : e.event, r = e.Deferred(), u = e.Callbacks("once memory"), v = n.statusCode || {}, m = {}, I = {}, E = 0, A = "canceled", y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var c;
                    if (2 === E) {
                        if (!q)
                            for (q = {}; c = gc.exec(d); )
                                q[c[1].toLowerCase()] = c[2];
                        c = q[a.toLowerCase()]
                    }
                    return null == c ? null : c
                },
                getAllResponseHeaders: function() {
                    return 2 === E ? d : null
                },
                setRequestHeader: function(a, c) {
                    var e = a.toLowerCase();
                    E || (a = I[e] = I[e] || a,
                    m[a] = c);
                    return this
                },
                overrideMimeType: function(a) {
                    E || (n.mimeType = a);
                    return this
                },
                statusCode: function(a) {
                    var c;
                    if (a)
                        if (2 > E)
                            for (c in a)
                                v[c] = [v[c], a[c]];
                        else
                            y.always(a[y.status]);
                    return this
                },
                abort: function(a) {
                    a = a || A;
                    k && k.abort(a);
                    g(0, a);
                    return this
                }
            };
            r.promise(y).complete = u.add;
            y.success = y.done;
            y.error = y.fail;
            n.url = ((a || n.url || za) + "").replace(fc, "").replace(ic, Ea[1] + "//");
            n.type = c.method || c.type || n.method || n.type;
            n.dataTypes = e.trim(n.dataType || "*").toLowerCase().match(na) || [""];
            null == n.crossDomain && (a = zb.exec(n.url.toLowerCase()),
            n.crossDomain = !(!a || a[1] === Ea[1] && a[2] === Ea[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Ea[3] || ("http:" === Ea[1] ? "80" : "443"))));
            n.data && n.processData && "string" !== typeof n.data && (n.data = e.param(n.data, n.traditional));
            oa(Ab, n, c, y);
            if (2 === E)
                return y;
            (h = e.event && n.global) && 0 === e.active++ && e.event.trigger("ajaxStart");
            n.type = n.type.toUpperCase();
            n.hasContent = !hc.test(n.type);
            var aa = n.url;
            n.hasContent || (n.data && (aa = n.url += (ib.test(aa) ? "&" : "?") + n.data,
            delete n.data),
            !1 === n.cache && (n.url = yb.test(aa) ? aa.replace(yb, "$1_=" + hb++) : aa + (ib.test(aa) ? "&" : "?") + "_=" + hb++));
            n.ifModified && (e.lastModified[aa] && y.setRequestHeader("If-Modified-Since", e.lastModified[aa]),
            e.etag[aa] && y.setRequestHeader("If-None-Match", e.etag[aa]));
            (n.data && n.hasContent && !1 !== n.contentType || c.contentType) && y.setRequestHeader("Content-Type", n.contentType);
            y.setRequestHeader("Accept", n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", " + Bb + "; q=0.01" : "") : n.accepts["*"]);
            for (b in n.headers)
                y.setRequestHeader(b, n.headers[b]);
            if (n.beforeSend && (!1 === n.beforeSend.call(l, y, n) || 2 === E))
                return y.abort();
            A = "abort";
            for (b in {
                success: 1,
                error: 1,
                complete: 1
            })
                y[b](n[b]);
            if (k = oa(Xa, n, c, y)) {
                y.readyState = 1;
                h && p.trigger("ajaxSend", [y, n]);
                n.async && 0 < n.timeout && (f = setTimeout(function() {
                    y.abort("timeout")
                }, n.timeout));
                try {
                    E = 1,
                    k.send(m, g)
                } catch (nb) {
                    if (2 > E)
                        g(-1, nb);
                    else
                        throw nb;
                }
            } else
                g(-1, "No Transport");
            return y
        },
        getJSON: function(a, c, b) {
            return e.get(a, c, b, "json")
        },
        getScript: function(a, c) {
            return e.get(a, void 0, c, "script")
        }
    });
    e.each(["get", "post"], function(a, c) {
        e[c] = function(a, g, b, d) {
            e.isFunction(g) && (d = d || b,
            b = g,
            g = void 0);
            return e.ajax({
                url: a,
                type: c,
                dataType: d,
                data: g,
                success: b
            })
        }
    });
    e._evalUrl = function(a) {
        return e.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ;
    e.fn.extend({
        wrapAll: function(a) {
            if (e.isFunction(a))
                return this.each(function(c) {
                    e(this).wrapAll(a.call(this, c))
                });
            if (this[0]) {
                var c = e(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; )
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return e.isFunction(a) ? this.each(function(c) {
                e(this).wrapInner(a.call(this, c))
            }) : this.each(function() {
                var c = e(this)
                  , g = c.contents();
                g.length ? g.wrapAll(a) : c.append(a)
            })
        },
        wrap: function(a) {
            var c = e.isFunction(a);
            return this.each(function(g) {
                e(this).wrapAll(c ? a.call(this, g) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                e.nodeName(this, "body") || e(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    e.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !w.reliableHiddenOffsets() && "none" === (a.style && a.style.display || e.css(a, "display"))
    }
    ;
    e.expr.filters.visible = function(a) {
        return !e.expr.filters.hidden(a)
    }
    ;
    var jc = /%20/g
      , Lb = /\[\]$/
      , Cb = /\r?\n/g
      , kc = /^(?:submit|button|image|reset|file)$/i
      , lc = /^(?:input|select|textarea|keygen)/i;
    e.param = function(a, c) {
        var g, b = [], d = function(a, c) {
            c = e.isFunction(c) ? c() : null == c ? "" : c;
            b[b.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c)
        };
        void 0 === c && (c = e.ajaxSettings && e.ajaxSettings.traditional);
        if (e.isArray(a) || a.jquery && !e.isPlainObject(a))
            e.each(a, function() {
                d(this.name, this.value)
            });
        else
            for (g in a)
                S(g, a[g], c, d);
        return b.join("&").replace(jc, "+")
    }
    ;
    e.fn.extend({
        serialize: function() {
            return e.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = e.prop(this, "elements");
                return a ? e.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !e(this).is(":disabled") && lc.test(this.nodeName) && !kc.test(a) && (this.checked || !Wa.test(a))
            }).map(function(a, c) {
                a = e(this).val();
                return null == a ? null : e.isArray(a) ? e.map(a, function(a) {
                    return {
                        name: c.name,
                        value: a.replace(Cb, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: a.replace(Cb, "\r\n")
                }
            }).get()
        }
    });
    e.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && pa()))
            a: {
                try {
                    c = new a.ActiveXObject("Microsoft.XMLHTTP");
                    break a
                } catch (p) {}
                c = void 0
            }
        return c
    }
    : pa;
    var mc = 0
      , Ta = {}
      , Ua = e.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Ta)
            Ta[a](void 0, !0)
    });
    w.cors = !!Ua && "withCredentials"in Ua;
    (Ua = w.ajax = !!Ua) && e.ajaxTransport(function(a) {
        if (!a.crossDomain || w.cors) {
            var c;
            return {
                send: function(b, g) {
                    var d, f = a.xhr(), h = ++mc;
                    f.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields)
                        for (d in a.xhrFields)
                            f[d] = a.xhrFields[d];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                    a.crossDomain || b["X-Requested-With"] || (b["X-Requested-With"] = "XMLHttpRequest");
                    for (d in b)
                        void 0 !== b[d] && f.setRequestHeader(d, b[d] + "");
                    f.send(a.hasContent && a.data || null);
                    c = function(b, d) {
                        if (c && (d || 4 === f.readyState))
                            if (delete Ta[h],
                            c = void 0,
                            f.onreadystatechange = e.noop,
                            d)
                                4 !== f.readyState && f.abort();
                            else {
                                var k = {};
                                var n = f.status;
                                "string" === typeof f.responseText && (k.text = f.responseText);
                                try {
                                    var q = f.statusText
                                } catch (Kb) {
                                    q = ""
                                }
                                n || !a.isLocal || a.crossDomain ? 1223 === n && (n = 204) : n = k.text ? 200 : 404
                            }
                        k && g(n, q, k, f.getAllResponseHeaders())
                    }
                    ;
                    a.async ? 4 === f.readyState ? setTimeout(c) : f.onreadystatechange = Ta[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                e.globalEval(a);
                return a
            }
        }
    });
    e.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    });
    e.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, b = C.head || e("head")[0] || C.documentElement;
            return {
                send: function(e, g) {
                    c = C.createElement("script");
                    c.async = !0;
                    a.scriptCharset && (c.charset = a.scriptCharset);
                    c.src = a.url;
                    c.onload = c.onreadystatechange = function(a, e) {
                        if (e || !c.readyState || /loaded|complete/.test(c.readyState))
                            c.onload = c.onreadystatechange = null,
                            c.parentNode && c.parentNode.removeChild(c),
                            c = null,
                            e || g(200, "success")
                    }
                    ;
                    b.insertBefore(c, b.firstChild)
                },
                abort: function() {
                    if (c)
                        c.onload(void 0, !0)
                }
            }
        }
    });
    var Db = []
      , jb = /(=)\?(?=&|$)|\?\?/;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Db.pop() || e.expando + "_" + hb++;
            this[a] = !0;
            return a
        }
    });
    e.ajaxPrefilter("json jsonp", function(c, b, d) {
        var g, f = !1 !== c.jsonp && (jb.test(c.url) ? "url" : "string" === typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && jb.test(c.data) && "data");
        if (f || "jsonp" === c.dataTypes[0]) {
            var h = c.jsonpCallback = e.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback;
            f ? c[f] = c[f].replace(jb, "$1" + h) : !1 !== c.jsonp && (c.url += (ib.test(c.url) ? "&" : "?") + c.jsonp + "=" + h);
            c.converters["script json"] = function() {
                g || e.error(h + " was not called");
                return g[0]
            }
            ;
            c.dataTypes[0] = "json";
            var k = a[h];
            a[h] = function() {
                g = arguments
            }
            ;
            d.always(function() {
                a[h] = k;
                c[h] && (c.jsonpCallback = b.jsonpCallback,
                Db.push(h));
                g && e.isFunction(k) && k(g[0]);
                g = k = void 0
            });
            return "script"
        }
    });
    e.parseHTML = function(a, c, b) {
        if (!a || "string" !== typeof a)
            return null;
        "boolean" === typeof c && (b = c,
        c = !1);
        c = c || C;
        var g = Na.exec(a);
        b = !b && [];
        if (g)
            return [c.createElement(g[1])];
        g = e.buildFragment([a], c, b);
        b && b.length && e(b).remove();
        return e.merge([], g.childNodes)
    }
    ;
    var Eb = e.fn.load;
    e.fn.load = function(a, c, b) {
        if ("string" !== typeof a && Eb)
            return Eb.apply(this, arguments);
        var g, d, f = this, h = a.indexOf(" ");
        if (0 <= h) {
            var k = e.trim(a.slice(h, a.length));
            a = a.slice(0, h)
        }
        e.isFunction(c) ? (b = c,
        c = void 0) : c && "object" === typeof c && (d = "POST");
        0 < f.length && e.ajax({
            url: a,
            type: d,
            dataType: "html",
            data: c
        }).done(function(a) {
            g = arguments;
            f.html(k ? e("<div>").append(e.parseHTML(a)).find(k) : a)
        }).complete(b && function(a, c) {
            f.each(b, g || [a.responseText, c, a])
        }
        );
        return this
    }
    ;
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, c) {
        e.fn[c] = function(a) {
            return this.on(c, a)
        }
    });
    e.expr.filters.animated = function(a) {
        return e.grep(e.timers, function(c) {
            return a === c.elem
        }).length
    }
    ;
    var Fb = a.document.documentElement;
    e.offset = {
        setOffset: function(a, c, b) {
            var g = e.css(a, "position")
              , d = e(a)
              , f = {};
            "static" === g && (a.style.position = "relative");
            var h = d.offset();
            var k = e.css(a, "top");
            var n = e.css(a, "left");
            ("absolute" === g || "fixed" === g) && -1 < e.inArray("auto", [k, n]) ? (n = d.position(),
            k = n.top,
            n = n.left) : (k = parseFloat(k) || 0,
            n = parseFloat(n) || 0);
            e.isFunction(c) && (c = c.call(a, b, h));
            null != c.top && (f.top = c.top - h.top + k);
            null != c.left && (f.left = c.left - h.left + n);
            "using"in c ? c.using.call(a, f) : d.css(f)
        }
    };
    e.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(c) {
                    e.offset.setOffset(this, a, c)
                });
            var c, b = {
                top: 0,
                left: 0
            }, g = (c = this[0]) && c.ownerDocument;
            if (g) {
                var d = g.documentElement;
                if (!e.contains(d, c))
                    return b;
                "undefined" !== typeof c.getBoundingClientRect && (b = c.getBoundingClientRect());
                c = ha(g);
                return {
                    top: b.top + (c.pageYOffset || d.scrollTop) - (d.clientTop || 0),
                    left: b.left + (c.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a = {
                    top: 0,
                    left: 0
                }
                  , c = this[0];
                if ("fixed" === e.css(c, "position"))
                    var b = c.getBoundingClientRect();
                else {
                    var d = this.offsetParent();
                    b = this.offset();
                    e.nodeName(d[0], "html") || (a = d.offset());
                    a.top += e.css(d[0], "borderTopWidth", !0);
                    a.left += e.css(d[0], "borderLeftWidth", !0)
                }
                return {
                    top: b.top - a.top - e.css(c, "marginTop", !0),
                    left: b.left - a.left - e.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Fb; a && !e.nodeName(a, "html") && "static" === e.css(a, "position"); )
                    a = a.offsetParent;
                return a || Fb
            })
        }
    });
    e.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var b = /Y/.test(c);
        e.fn[a] = function(g) {
            return xa(this, function(a, g, d) {
                var f = ha(a);
                if (void 0 === d)
                    return f ? c in f ? f[c] : f.document.documentElement[g] : a[g];
                f ? f.scrollTo(b ? e(f).scrollLeft() : d, b ? d : e(f).scrollTop()) : a[g] = d
            }, a, g, arguments.length, null)
        }
    });
    e.each(["top", "left"], function(a, c) {
        e.cssHooks[c] = da(w.pixelPosition, function(a, b) {
            if (b)
                return b = Ba(a, c),
                Ka.test(b) ? e(a).position()[c] + "px" : b
        })
    });
    e.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        e.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(b, g) {
            e.fn[g] = function(g, d) {
                var f = arguments.length && (b || "boolean" !== typeof g)
                  , h = b || (!0 === g || !0 === d ? "margin" : "border");
                return xa(this, function(c, b, g) {
                    return e.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (b = c.documentElement,
                    Math.max(c.body["scroll" + a], b["scroll" + a], c.body["offset" + a], b["offset" + a], b["client" + a])) : void 0 === g ? e.css(c, b, h) : e.style(c, b, g, h)
                }, c, f ? g : void 0, f, null)
            }
        })
    });
    e.fn.size = function() {
        return this.length
    }
    ;
    e.fn.andSelf = e.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return e
    });
    var nc = a.jQuery
      , oc = a.$;
    e.noConflict = function(c) {
        a.$ === e && (a.$ = oc);
        c && a.jQuery === e && (a.jQuery = nc);
        return e
    }
    ;
    "undefined" === typeof b && (a.jQuery = a.$ = e);
    return e
});
window.yii = function(a) {
    function b() {
        a.ajaxPrefilter(function(a, b, c) {
            !a.crossDomain && f.getCsrfParam() && c.setRequestHeader("X-CSRF-Token", f.getCsrfToken())
        });
        f.refreshCsrfToken()
    }
    function m() {
        a(document).ajaxComplete(function(a, b) {
            (a = b && b.getResponseHeader("X-Redirect")) && window.location.assign(a)
        })
    }
    function l() {
        var b = {};
        a("script[src]").each(function() {
            var a = d(this.src);
            b[a] = !0
        });
        a.ajaxPrefilter("script", function(a, c, f) {
            if ("jsonp" != a.dataType) {
                a = d(a.url);
                c = !0 === b[a] && !h(a);
                var k = void 0 !== b[a] && !0 === b[a].xhrDone;
                if (c || k)
                    f.abort();
                else {
                    if (void 0 === b[a] || !0 === b[a])
                        b[a] = {
                            xhrList: [],
                            xhrDone: !1
                        };
                    f.done(function(a, c, d) {
                        if (!0 !== b[d.yiiUrl].xhrDone) {
                            b[d.yiiUrl].xhrDone = !0;
                            a = 0;
                            for (c = b[d.yiiUrl].xhrList.length; a < c; a++) {
                                var f = b[d.yiiUrl].xhrList[a];
                                f && f.readyState !== XMLHttpRequest.DONE && f.abort()
                            }
                            b[d.yiiUrl] = !0
                        }
                    }).fail(function(a, c) {
                        if ("abort" !== c) {
                            delete b[a.yiiUrl].xhrList[a.yiiIndex];
                            c = !0;
                            for (var d = 0, f = b[a.yiiUrl].xhrList.length; d < f; d++)
                                b[a.yiiUrl].xhrList[d] && (c = !1);
                            c && delete b[a.yiiUrl]
                        }
                    });
                    f.yiiIndex = b[a].xhrList.length;
                    f.yiiUrl = a;
                    b[a].xhrList[f.yiiIndex] = f
                }
            }
        });
        a(document).ajaxComplete(function() {
            var b = [];
            a("link[rel=stylesheet]").each(function() {
                var c = d(this.href);
                h(c) || (-1 === a.inArray(c, b) ? b.push(c) : a(this).remove())
            })
        })
    }
    function k() {
        var b = function(b) {
            var c = a(this)
              , d = c.data("method")
              , h = c.data("confirm")
              , k = c.data("form");
            if (void 0 === d && void 0 === h && void 0 === k)
                return !0;
            void 0 !== h && !1 !== h && "" !== h ? a.proxy(f.confirm, this)(h, function() {
                f.handleAction(c, b)
            }) : f.handleAction(c, b);
            b.stopImmediatePropagation();
            return !1
        };
        a(document).on("click.yii", f.clickableSelector, b).on("change.yii", f.changeableSelector, b)
    }
    function h(a) {
        for (var b = 0; b < f.reloadableScripts.length; b++) {
            var c = d(f.reloadableScripts[b]);
            if (!0 === (new RegExp("^" + c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&").split("\\*").join(".+") + "$")).test(a))
                return !0
        }
        return !1
    }
    function d(a) {
        return "/" === a.charAt(0) ? f.getBaseCurrentUrl() + a : a
    }
    var f = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function() {
            return a("meta[name=csrf-param]").attr("content")
        },
        getCsrfToken: function() {
            return a("meta[name=csrf-token]").attr("content")
        },
        setCsrfToken: function(b, d) {
            a("meta[name=csrf-param]").attr("content", b);
            a("meta[name=csrf-token]").attr("content", d)
        },
        refreshCsrfToken: function() {
            var b = f.getCsrfToken();
            b && a('form input[name="' + f.getCsrfParam() + '"]').val(b)
        },
        confirm: function(a, b, c) {
            window.confirm(a) ? !b || b() : !c || c()
        },
        handleAction: function(b, d) {
            var c = b.attr("data-form") ? a("#" + b.attr("data-form")) : b.closest("form")
              , h = !b.data("method") && c ? c.attr("method") : b.data("method")
              , k = b.attr("href")
              , q = k && "#" !== k
              , l = b.data("params")
              , r = l && a.isPlainObject(l)
              , m = b.data("pjax");
            m = void 0 !== m && 0 !== m && a.support.pjax;
            var H = {};
            a.each("submit reset elements length name acceptCharset action enctype method target".split(" "), function(a, c) {
                r && l.hasOwnProperty(c) && console.error("Parameter name '" + c + "' conflicts with a same named form property. Please use another name.")
            });
            if (m) {
                var B = b.data("pjax-container");
                void 0 !== B && B.length || (B = b.closest("[data-pjax-container]").attr("id") ? "#" + b.closest("[data-pjax-container]").attr("id") : "");
                B.length || (B = "body");
                H = {
                    container: B,
                    push: !!b.data("pjax-push-state"),
                    replace: !!b.data("pjax-replace-state"),
                    scrollTo: b.data("pjax-scrollto"),
                    pushRedirect: b.data("pjax-push-redirect"),
                    replaceRedirect: b.data("pjax-replace-redirect"),
                    skipOuterContainers: b.data("pjax-skip-outer-containers"),
                    timeout: b.data("pjax-timeout"),
                    originalEvent: d,
                    originalTarget: b
                }
            }
            if (void 0 === h)
                if (q)
                    m ? a.pjax.click(d, H) : window.location.assign(k);
                else {
                    if (b.is(":submit") && c.length) {
                        if (m)
                            c.on("submit", function(c) {
                                a.pjax.submit(c, H)
                            });
                        c.trigger("submit")
                    }
                }
            else {
                var D = !c.length;
                if (D)
                    q || (k = f.getCurrentUrl()),
                    c = a("<form/>", {
                        method: h,
                        action: k
                    }),
                    (d = b.attr("target")) && c.attr("target", d),
                    /(get|post)/i.test(h) || (c.append(a("<input/>", {
                        name: "_method",
                        value: h,
                        type: "hidden"
                    })),
                    h = "post",
                    c.attr("method", h)),
                    /post/i.test(h) && (h = f.getCsrfParam()) && c.append(a("<input/>", {
                        name: h,
                        value: f.getCsrfToken(),
                        type: "hidden"
                    })),
                    c.hide().appendTo("body");
                else {
                    var G = c.attr("method");
                    c.attr("method", h);
                    if (q) {
                        var N = c.attr("action");
                        c.attr("action", k)
                    }
                }
                if (h = c.data("yiiActiveForm"))
                    h.submitObject = b;
                r && a.each(l, function(b, d) {
                    c.append(a("<input/>").attr({
                        name: b,
                        value: d,
                        type: "hidden"
                    }))
                });
                if (m)
                    c.on("submit", function(c) {
                        a.pjax.submit(c, H)
                    });
                c.trigger("submit");
                a.when(c.data("yiiSubmitFinalizePromise")).done(function() {
                    D ? c.remove() : (void 0 !== N && c.attr("action", N),
                    c.attr("method", G),
                    r && a.each(l, function(b) {
                        a('input[name="' + b + '"]', c).remove()
                    }))
                })
            }
        },
        getQueryParams: function(b) {
            var d = b.indexOf("?");
            if (0 > d)
                return {};
            b = a.grep(b.substring(d + 1).split("#")[0].split("&"), function(a) {
                return "" !== a
            });
            d = {};
            for (var c = 0, f = b.length; c < f; c++) {
                var h = b[c].split("=")
                  , k = decodeURIComponent(h[0].replace(/\+/g, "%20"));
                h = decodeURIComponent(h[1].replace(/\+/g, "%20"));
                k.length && (void 0 === d[k] ? d[k] = h || "" : (a.isArray(d[k]) || (d[k] = [d[k]]),
                d[k].push(h || "")))
            }
            return d
        },
        initModule: function(b) {
            if (void 0 === b.isActive || b.isActive)
                a.isFunction(b.init) && b.init(),
                a.each(b, function() {
                    a.isPlainObject(this) && f.initModule(this)
                })
        },
        init: function() {
            b();
            m();
            l();
            k()
        },
        getBaseCurrentUrl: function() {
            return window.location.protocol + "//" + window.location.host
        },
        getCurrentUrl: function() {
            return window.location.href
        }
    };
    return f
}(window.jQuery);
window.jQuery(function() {
    window.yii.initModule(window.yii)
});
if ("undefined" === typeof jQuery)
    throw Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    a = a.fn.jquery.split(" ")[0].split(".");
    if (2 > a[0] && 9 > a[1] || 1 == a[0] && 9 == a[1] && 1 > a[2] || 3 < a[0])
        throw Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery);
+function(a) {
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, k;
        for (k in b)
            if (void 0 !== a.style[k])
                return {
                    end: b[k]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var l = !1
          , k = this;
        a(this).one("bsTransitionEnd", function() {
            l = !0
        });
        setTimeout(function() {
            l || a(k).trigger(a.support.transition.end)
        }, b);
        return this
    }
    ;
    a(function() {
        a.support.transition = b();
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                if (a(b.target).is(this))
                    return b.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery);
+function(a) {
    var b = function(b) {
        a(b).on("click", '[data-dismiss="alert"]', this.close)
    };
    b.VERSION = "3.4.1";
    b.TRANSITION_DURATION = 150;
    b.prototype.close = function(l) {
        function k() {
            f.detach().trigger("closed.bs.alert").remove()
        }
        var h = a(this)
          , d = h.attr("data-target");
        d || (d = (d = h.attr("href")) && d.replace(/.*(?=#[^\s]*$)/, ""));
        d = "#" === d ? [] : d;
        var f = a(document).find(d);
        l && l.preventDefault();
        f.length || (f = h.closest(".alert"));
        f.trigger(l = a.Event("close.bs.alert"));
        l.isDefaultPrevented() || (f.removeClass("in"),
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", k).emulateTransitionEnd(b.TRANSITION_DURATION) : k())
    }
    ;
    var m = a.fn.alert;
    a.fn.alert = function(l) {
        return this.each(function() {
            var k = a(this)
              , h = k.data("bs.alert");
            h || k.data("bs.alert", h = new b(this));
            "string" == typeof l && h[l].call(k)
        })
    }
    ;
    a.fn.alert.Constructor = b;
    a.fn.alert.noConflict = function() {
        a.fn.alert = m;
        return this
    }
    ;
    a(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', b.prototype.close)
}(jQuery);
+function(a) {
    function b(b) {
        return this.each(function() {
            var h = a(this)
              , d = h.data("bs.button")
              , f = "object" == typeof b && b;
            d || h.data("bs.button", d = new m(this,f));
            "toggle" == b ? d.toggle() : b && d.setState(b)
        })
    }
    var m = function(b, h) {
        this.$element = a(b);
        this.options = a.extend({}, m.DEFAULTS, h);
        this.isLoading = !1
    };
    m.VERSION = "3.4.1";
    m.DEFAULTS = {
        loadingText: "loading..."
    };
    m.prototype.setState = function(b) {
        var h = this.$element
          , d = h.is("input") ? "val" : "html"
          , f = h.data();
        b += "Text";
        null == f.resetText && h.data("resetText", h[d]());
        setTimeout(a.proxy(function() {
            h[d](null == f[b] ? this.options[b] : f[b]);
            "loadingText" == b ? (this.isLoading = !0,
            h.addClass("disabled").attr("disabled", "disabled").prop("disabled", !0)) : this.isLoading && (this.isLoading = !1,
            h.removeClass("disabled").removeAttr("disabled").prop("disabled", !1))
        }, this), 0)
    }
    ;
    m.prototype.toggle = function() {
        var a = !0
          , b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var d = this.$element.find("input");
            "radio" == d.prop("type") ? (d.prop("checked") && (a = !1),
            b.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == d.prop("type") && (d.prop("checked") !== this.$element.hasClass("active") && (a = !1),
            this.$element.toggleClass("active"));
            d.prop("checked", this.$element.hasClass("active"));
            a && d.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var l = a.fn.button;
    a.fn.button = b;
    a.fn.button.Constructor = m;
    a.fn.button.noConflict = function() {
        a.fn.button = l;
        return this
    }
    ;
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(k) {
        var h = a(k.target).closest(".btn");
        b.call(h, "toggle");
        a(k.target).is('input[type="radio"], input[type="checkbox"]') || (k.preventDefault(),
        h.is("input,button") ? h.trigger("focus") : h.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery);
+function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , f = d.data("bs.carousel")
              , h = a.extend({}, m.DEFAULTS, d.data(), "object" == typeof b && b)
              , k = "string" == typeof b ? b : h.slide;
            f || d.data("bs.carousel", f = new m(this,h));
            if ("number" == typeof b)
                f.to(b);
            else if (k)
                f[k]();
            else
                h.interval && f.pause().cycle()
        })
    }
    var m = function(b, d) {
        this.$element = a(b);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = d;
        this.$items = this.$active = this.interval = this.sliding = this.paused = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this));
        "hover" != this.options.pause || "ontouchstart"in document.documentElement || this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    m.VERSION = "3.4.1";
    m.TRANSITION_DURATION = 600;
    m.DEFAULTS = {
        interval: 5E3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    m.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    }
    ;
    m.prototype.cycle = function(b) {
        b || (this.paused = !1);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval));
        return this
    }
    ;
    m.prototype.getItemIndex = function(a) {
        this.$items = a.parent().children(".item");
        return this.$items.index(a || this.$active)
    }
    ;
    m.prototype.getItemForDirection = function(a, b) {
        var d = this.getItemIndex(b);
        return ("prev" == a && 0 === d || "next" == a && d == this.$items.length - 1) && !this.options.wrap ? b : this.$items.eq((d + ("prev" == a ? -1 : 1)) % this.$items.length)
    }
    ;
    m.prototype.to = function(a) {
        var b = this
          , f = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(a > this.$items.length - 1 || 0 > a))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                b.to(a)
            }) : f == a ? this.pause().cycle() : this.slide(a > f ? "next" : "prev", this.$items.eq(a))
    }
    ;
    m.prototype.pause = function(b) {
        b || (this.paused = !0);
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0));
        this.interval = clearInterval(this.interval);
        return this
    }
    ;
    m.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ;
    m.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ;
    m.prototype.slide = function(b, d) {
        var f = this.$element.find(".item.active")
          , h = d || this.getItemForDirection(b, f);
        d = this.interval;
        var k = "next" == b ? "left" : "right"
          , c = this;
        if (h.hasClass("active"))
            return this.sliding = !1;
        var l = h[0]
          , n = a.Event("slide.bs.carousel", {
            relatedTarget: l,
            direction: k
        });
        this.$element.trigger(n);
        if (!n.isDefaultPrevented()) {
            this.sliding = !0;
            d && this.pause();
            this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
            (n = a(this.$indicators.children()[this.getItemIndex(h)])) && n.addClass("active"));
            var u = a.Event("slid.bs.carousel", {
                relatedTarget: l,
                direction: k
            });
            a.support.transition && this.$element.hasClass("slide") ? (h.addClass(b),
            "object" === typeof h && h.length && h[0].offsetWidth,
            f.addClass(k),
            h.addClass(k),
            f.one("bsTransitionEnd", function() {
                h.removeClass([b, k].join(" ")).addClass("active");
                f.removeClass(["active", k].join(" "));
                c.sliding = !1;
                setTimeout(function() {
                    c.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(m.TRANSITION_DURATION)) : (f.removeClass("active"),
            h.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(u));
            d && this.cycle();
            return this
        }
    }
    ;
    var l = a.fn.carousel;
    a.fn.carousel = b;
    a.fn.carousel.Constructor = m;
    a.fn.carousel.noConflict = function() {
        a.fn.carousel = l;
        return this
    }
    ;
    var k = function(h) {
        var d = a(this)
          , f = d.attr("href");
        f && (f = f.replace(/.*(?=#[^\s]+$)/, ""));
        f = d.attr("data-target") || f;
        f = a(document).find(f);
        if (f.hasClass("carousel")) {
            var k = a.extend({}, f.data(), d.data());
            if (d = d.attr("data-slide-to"))
                k.interval = !1;
            b.call(f, k);
            d && f.data("bs.carousel").to(d);
            h.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", k).on("click.bs.carousel.data-api", "[data-slide-to]", k);
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var h = a(this);
            b.call(h, h.data())
        })
    })
}(jQuery);
+function(a) {
    function b(b) {
        var d;
        b = b.attr("data-target") || (d = b.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "");
        return a(document).find(b)
    }
    function m(b) {
        return this.each(function() {
            var d = a(this)
              , f = d.data("bs.collapse")
              , h = a.extend({}, l.DEFAULTS, d.data(), "object" == typeof b && b);
            !f && h.toggle && /show|hide/.test(b) && (h.toggle = !1);
            f || d.data("bs.collapse", f = new l(this,h));
            if ("string" == typeof b)
                f[b]()
        })
    }
    var l = function(b, d) {
        this.$element = a(b);
        this.options = a.extend({}, l.DEFAULTS, d);
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    };
    l.VERSION = "3.4.1";
    l.TRANSITION_DURATION = 350;
    l.DEFAULTS = {
        toggle: !0
    };
    l.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ;
    l.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, d = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (d && d.length && (b = d.data("bs.collapse")) && b.transitioning)
                return;
            var f = a.Event("show.bs.collapse");
            this.$element.trigger(f);
            if (!f.isDefaultPrevented()) {
                d && d.length && (m.call(d, "hide"),
                b || d.data("bs.collapse", null));
                var k = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded", !0);
                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0);
                this.transitioning = 1;
                b = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[k]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }
                ;
                if (!a.support.transition)
                    return b.call(this);
                d = a.camelCase(["scroll", k].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(b, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[k](this.$element[0][d])
            }
        }
    }
    ;
    l.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            this.$element.trigger(b);
            if (!b.isDefaultPrevented()) {
                b = this.dimension();
                this.$element[b](this.$element[b]())[0].offsetHeight;
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1);
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1);
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!a.support.transition)
                    return d.call(this);
                this.$element[b](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(l.TRANSITION_DURATION)
            }
        }
    }
    ;
    l.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ;
    l.prototype.getParent = function() {
        return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(h, d) {
            h = a(d);
            this.addAriaAndCollapsedClass(b(h), h)
        }, this)).end()
    }
    ;
    l.prototype.addAriaAndCollapsedClass = function(a, b) {
        var d = a.hasClass("in");
        a.attr("aria-expanded", d);
        b.toggleClass("collapsed", !d).attr("aria-expanded", d)
    }
    ;
    var k = a.fn.collapse;
    a.fn.collapse = m;
    a.fn.collapse.Constructor = l;
    a.fn.collapse.noConflict = function() {
        a.fn.collapse = k;
        return this
    }
    ;
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(h) {
        var d = a(this);
        d.attr("data-target") || h.preventDefault();
        h = b(d);
        d = h.data("bs.collapse") ? "toggle" : d.data();
        m.call(h, d)
    })
}(jQuery);
+function(a) {
    function b(b) {
        var d = b.attr("data-target");
        d || (d = (d = b.attr("href")) && /#[A-Za-z]/.test(d) && d.replace(/.*(?=#[^\s]*$)/, ""));
        return (d = "#" !== d ? a(document).find(d) : null) && d.length ? d : b.parent()
    }
    function m(h) {
        h && 3 === h.which || (a(".dropdown-backdrop").remove(),
        a('[data-toggle="dropdown"]').each(function() {
            var d = a(this)
              , f = b(d)
              , k = {
                relatedTarget: this
            };
            !f.hasClass("open") || h && "click" == h.type && /input|textarea/i.test(h.target.tagName) && a.contains(f[0], h.target) || (f.trigger(h = a.Event("hide.bs.dropdown", k)),
            h.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
            f.removeClass("open").trigger(a.Event("hidden.bs.dropdown", k))))
        }))
    }
    var l = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    l.VERSION = "3.4.1";
    l.prototype.toggle = function(h) {
        var d = a(this);
        if (!d.is(".disabled, :disabled")) {
            var f = b(d);
            h = f.hasClass("open");
            m();
            if (!h) {
                if ("ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length)
                    a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", m);
                var k = {
                    relatedTarget: this
                };
                f.trigger(h = a.Event("show.bs.dropdown", k));
                if (h.isDefaultPrevented())
                    return;
                d.trigger("focus").attr("aria-expanded", "true");
                f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", k))
            }
            return !1
        }
    }
    ;
    l.prototype.keydown = function(h) {
        if (/(38|40|27|32)/.test(h.which) && !/input|textarea/i.test(h.target.tagName)) {
            var d = a(this);
            h.preventDefault();
            h.stopPropagation();
            if (!d.is(".disabled, :disabled")) {
                var f = b(d)
                  , k = f.hasClass("open");
                if (!k && 27 != h.which || k && 27 == h.which)
                    return 27 == h.which && f.find('[data-toggle="dropdown"]').trigger("focus"),
                    d.trigger("click");
                d = f.find(".dropdown-menu li:not(.disabled):visible a");
                d.length && (f = d.index(h.target),
                38 == h.which && 0 < f && f--,
                40 == h.which && f < d.length - 1 && f++,
                ~f || (f = 0),
                d.eq(f).trigger("focus"))
            }
        }
    }
    ;
    var k = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var d = a(this)
              , f = d.data("bs.dropdown");
            f || d.data("bs.dropdown", f = new l(this));
            "string" == typeof b && f[b].call(d)
        })
    }
    ;
    a.fn.dropdown.Constructor = l;
    a.fn.dropdown.noConflict = function() {
        a.fn.dropdown = k;
        return this
    }
    ;
    a(document).on("click.bs.dropdown.data-api", m).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', l.prototype.toggle).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', l.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", l.prototype.keydown)
}(jQuery);
+function(a) {
    function b(b, h) {
        return this.each(function() {
            var d = a(this)
              , f = d.data("bs.modal")
              , k = a.extend({}, m.DEFAULTS, d.data(), "object" == typeof b && b);
            f || d.data("bs.modal", f = new m(this,k));
            if ("string" == typeof b)
                f[b](h);
            else
                k.show && f.show(h)
        })
    }
    var m = function(b, h) {
        this.options = h;
        this.$body = a(document.body);
        this.$element = a(b);
        this.$dialog = this.$element.find(".modal-dialog");
        this.originalBodyPad = this.isShown = this.$backdrop = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom";
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    m.VERSION = "3.4.1";
    m.TRANSITION_DURATION = 300;
    m.BACKDROP_TRANSITION_DURATION = 150;
    m.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    m.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }
    ;
    m.prototype.show = function(b) {
        var h = this
          , d = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(d);
        this.isShown || d.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            h.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(h.$element) && (h.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var d = a.support.transition && h.$element.hasClass("fade");
            h.$element.parent().length || h.$element.appendTo(h.$body);
            h.$element.show().scrollTop(0);
            h.adjustDialog();
            d && h.$element[0].offsetWidth;
            h.$element.addClass("in");
            h.enforceFocus();
            var k = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? h.$dialog.one("bsTransitionEnd", function() {
                h.$element.trigger("focus").trigger(k)
            }).emulateTransitionEnd(m.TRANSITION_DURATION) : h.$element.trigger("focus").trigger(k)
        }))
    }
    ;
    m.prototype.hide = function(b) {
        b && b.preventDefault();
        b = a.Event("hide.bs.modal");
        this.$element.trigger(b);
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(m.TRANSITION_DURATION) : this.hideModal())
    }
    ;
    m.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }
    ;
    m.prototype.escape = function() {
        if (this.isShown && this.options.keyboard)
            this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
                27 == a.which && this.hide()
            }, this));
        else
            this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ;
    m.prototype.resize = function() {
        if (this.isShown)
            a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this));
        else
            a(window).off("resize.bs.modal")
    }
    ;
    m.prototype.hideModal = function() {
        var a = this;
        this.$element.hide();
        this.backdrop(function() {
            a.$body.removeClass("modal-open");
            a.resetAdjustments();
            a.resetScrollbar();
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ;
    m.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    }
    ;
    m.prototype.backdrop = function(b) {
        var h = this
          , d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && d;
            this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + d).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
            }, this));
            f && this.$backdrop[0].offsetWidth;
            this.$backdrop.addClass("in");
            b && (f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(m.BACKDROP_TRANSITION_DURATION) : b())
        } else
            !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
            d = function() {
                h.removeBackdrop();
                b && b()
            }
            ,
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", d).emulateTransitionEnd(m.BACKDROP_TRANSITION_DURATION) : d()) : b && b()
    }
    ;
    m.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ;
    m.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }
    ;
    m.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ;
    m.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        a || (a = document.documentElement.getBoundingClientRect(),
        a = a.right - Math.abs(a.left));
        this.bodyIsOverflowing = document.body.clientWidth < a;
        this.scrollbarWidth = this.measureScrollbar()
    }
    ;
    m.prototype.setScrollbar = function() {
        var b = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var h = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", b + h),
        a(this.fixedContent).each(function(b, f) {
            b = f.style.paddingRight;
            var d = a(f).css("padding-right");
            a(f).data("padding-right", b).css("padding-right", parseFloat(d) + h + "px")
        }))
    }
    ;
    m.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
        a(this.fixedContent).each(function(b, h) {
            b = a(h).data("padding-right");
            a(h).removeData("padding-right");
            h.style.paddingRight = b ? b : ""
        })
    }
    ;
    m.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure";
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        this.$body[0].removeChild(a);
        return b
    }
    ;
    var l = a.fn.modal;
    a.fn.modal = b;
    a.fn.modal.Constructor = m;
    a.fn.modal.noConflict = function() {
        a.fn.modal = l;
        return this
    }
    ;
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(k) {
        var h = a(this)
          , d = h.attr("href")
          , f = h.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")
          , l = a(document).find(f);
        d = l.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, l.data(), h.data());
        h.is("a") && k.preventDefault();
        l.one("show.bs.modal", function(a) {
            if (!a.isDefaultPrevented())
                l.one("hidden.bs.modal", function() {
                    h.is(":visible") && h.trigger("focus")
                })
        });
        b.call(l, d, this)
    })
}(jQuery);
+function(a) {
    function b(b, c) {
        var f = b.nodeName.toLowerCase();
        if (-1 !== a.inArray(f, c))
            return -1 !== a.inArray(f, k) ? !(!b.nodeValue.match(h) && !b.nodeValue.match(d)) : !0;
        b = a(c).filter(function(a, c) {
            return c instanceof RegExp
        });
        c = 0;
        for (var n = b.length; c < n; c++)
            if (f.match(b[c]))
                return !0;
        return !1
    }
    function m(d, c, f) {
        if (0 === d.length)
            return d;
        if (f && "function" === typeof f)
            return f(d);
        if (!document.implementation || !document.implementation.createHTMLDocument)
            return d;
        f = document.implementation.createHTMLDocument("sanitization");
        f.body.innerHTML = d;
        d = a.map(c, function(a, c) {
            return c
        });
        for (var h = a(f.body).find("*"), k = 0, l = h.length; k < l; k++) {
            var q = h[k]
              , r = q.nodeName.toLowerCase();
            if (-1 === a.inArray(r, d))
                q.parentNode.removeChild(q);
            else {
                var m = a.map(q.attributes, function(a) {
                    return a
                });
                r = [].concat(c["*"] || [], c[r] || []);
                for (var v = 0, D = m.length; v < D; v++)
                    b(m[v], r) || q.removeAttribute(m[v].nodeName)
            }
        }
        return f.body.innerHTML
    }
    var l = ["sanitize", "whiteList", "sanitizeFn"]
      , k = "background cite href itemtype longdesc poster src xlink:href".split(" ")
      , h = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi
      , d = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
      , f = function(a, c) {
        this.inState = this.$element = this.hoverState = this.timeout = this.enabled = this.options = this.type = null;
        this.init("tooltip", a, c)
    };
    f.VERSION = "3.4.1";
    f.TRANSITION_DURATION = 150;
    f.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
    };
    f.prototype.init = function(b, c, d) {
        this.enabled = !0;
        this.type = b;
        this.$element = a(c);
        this.options = this.getOptions(d);
        this.$viewport = this.options.viewport && a(document).find(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        };
        if (this.$element[0]instanceof document.constructor && !this.options.selector)
            throw Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        b = this.options.trigger.split(" ");
        for (c = b.length; c--; )
            if (d = b[c],
            "click" == d)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != d) {
                var f = "hover" == d ? "mouseleave" : "focusout";
                this.$element.on(("hover" == d ? "mouseenter" : "focusin") + "." + this.type, this.options.selector, a.proxy(this.enter, this));
                this.$element.on(f + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ;
    f.prototype.getDefaults = function() {
        return f.DEFAULTS
    }
    ;
    f.prototype.getOptions = function(b) {
        var c = this.$element.data(), d;
        for (d in c)
            c.hasOwnProperty(d) && -1 !== a.inArray(d, l) && delete c[d];
        b = a.extend({}, this.getDefaults(), c, b);
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        });
        b.sanitize && (b.template = m(b.template, b.whiteList, b.sanitizeFn));
        return b
    }
    ;
    f.prototype.getDelegateOptions = function() {
        var b = {}
          , c = this.getDefaults();
        this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        });
        return b
    }
    ;
    f.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c));
        b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0);
        if (c.tip().hasClass("in") || "in" == c.hoverState)
            c.hoverState = "in";
        else {
            clearTimeout(c.timeout);
            c.hoverState = "in";
            if (!c.options.delay || !c.options.delay.show)
                return c.show();
            c.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show)
        }
    }
    ;
    f.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a])
                return !0;
        return !1
    }
    ;
    f.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c));
        b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1);
        if (!c.isInStateTrue()) {
            clearTimeout(c.timeout);
            c.hoverState = "out";
            if (!c.options.delay || !c.options.delay.hide)
                return c.hide();
            c.timeout = setTimeout(function() {
                "out" == c.hoverState && c.hide()
            }, c.options.delay.hide)
        }
    }
    ;
    f.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var c = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (!b.isDefaultPrevented() && c) {
                var d = this;
                b = this.tip();
                c = this.getUID(this.type);
                this.setContent();
                b.attr("id", c);
                this.$element.attr("aria-describedby", c);
                this.options.animation && b.addClass("fade");
                c = "function" == typeof this.options.placement ? this.options.placement.call(this, b[0], this.$element[0]) : this.options.placement;
                var h = /\s?auto?\s?/i
                  , k = h.test(c);
                k && (c = c.replace(h, "") || "top");
                b.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(c).data("bs." + this.type, this);
                this.options.container ? b.appendTo(a(document).find(this.options.container)) : b.insertAfter(this.$element);
                this.$element.trigger("inserted.bs." + this.type);
                h = this.getPosition();
                var l = b[0].offsetWidth
                  , q = b[0].offsetHeight;
                if (k) {
                    k = c;
                    var m = this.getPosition(this.$viewport);
                    c = "bottom" == c && h.bottom + q > m.bottom ? "top" : "top" == c && h.top - q < m.top ? "bottom" : "right" == c && h.right + l > m.width ? "left" : "left" == c && h.left - l < m.left ? "right" : c;
                    b.removeClass(k).addClass(c)
                }
                h = this.getCalculatedOffset(c, h, l, q);
                this.applyPlacement(h, c);
                c = function() {
                    var a = d.hoverState;
                    d.$element.trigger("shown.bs." + d.type);
                    d.hoverState = null;
                    "out" == a && d.leave(d)
                }
                ;
                a.support.transition && this.$tip.hasClass("fade") ? b.one("bsTransitionEnd", c).emulateTransitionEnd(f.TRANSITION_DURATION) : c()
            }
        }
    }
    ;
    f.prototype.applyPlacement = function(b, c) {
        var d = this.tip()
          , f = d[0].offsetWidth
          , h = d[0].offsetHeight
          , k = parseInt(d.css("margin-top"), 10)
          , l = parseInt(d.css("margin-left"), 10);
        isNaN(k) && (k = 0);
        isNaN(l) && (l = 0);
        b.top += k;
        b.left += l;
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0);
        d.addClass("in");
        k = d[0].offsetWidth;
        l = d[0].offsetHeight;
        "top" == c && l != h && (b.top = b.top + h - l);
        var q = this.getViewportAdjustedDelta(c, b, k, l);
        q.left ? b.left += q.left : b.top += q.top;
        f = (c = /top|bottom/.test(c)) ? 2 * q.left - f + k : 2 * q.top - h + l;
        h = c ? "offsetWidth" : "offsetHeight";
        d.offset(b);
        this.replaceArrow(f, d[0][h], c)
    }
    ;
    f.prototype.replaceArrow = function(a, c, b) {
        this.arrow().css(b ? "left" : "top", 50 * (1 - a / c) + "%").css(b ? "top" : "left", "")
    }
    ;
    f.prototype.setContent = function() {
        var a = this.tip()
          , c = this.getTitle();
        this.options.html ? (this.options.sanitize && (c = m(c, this.options.whiteList, this.options.sanitizeFn)),
        a.find(".tooltip-inner").html(c)) : a.find(".tooltip-inner").text(c);
        a.removeClass("fade in top bottom left right")
    }
    ;
    f.prototype.hide = function(b) {
        function c() {
            "in" != d.hoverState && h.detach();
            d.$element && d.$element.removeAttr("aria-describedby").trigger("hidden.bs." + d.type);
            b && b()
        }
        var d = this
          , h = a(this.$tip)
          , k = a.Event("hide.bs." + this.type);
        this.$element.trigger(k);
        if (!k.isDefaultPrevented())
            return h.removeClass("in"),
            a.support.transition && h.hasClass("fade") ? h.one("bsTransitionEnd", c).emulateTransitionEnd(f.TRANSITION_DURATION) : c(),
            this.hoverState = null,
            this
    }
    ;
    f.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }
    ;
    f.prototype.hasContent = function() {
        return this.getTitle()
    }
    ;
    f.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0]
          , d = "BODY" == c.tagName
          , f = c.getBoundingClientRect();
        null == f.width && (f = a.extend({}, f, {
            width: f.right - f.left,
            height: f.bottom - f.top
        }));
        c = window.SVGElement && c instanceof window.SVGElement;
        c = d ? {
            top: 0,
            left: 0
        } : c ? null : b.offset();
        b = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        };
        d = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, f, b, d, c)
    }
    ;
    f.prototype.getCalculatedOffset = function(a, c, b, d) {
        return "bottom" == a ? {
            top: c.top + c.height,
            left: c.left + c.width / 2 - b / 2
        } : "top" == a ? {
            top: c.top - d,
            left: c.left + c.width / 2 - b / 2
        } : "left" == a ? {
            top: c.top + c.height / 2 - d / 2,
            left: c.left - b
        } : {
            top: c.top + c.height / 2 - d / 2,
            left: c.left + c.width
        }
    }
    ;
    f.prototype.getViewportAdjustedDelta = function(a, c, b, d) {
        var f = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return f;
        var h = this.options.viewport && this.options.viewport.padding || 0
          , k = this.getPosition(this.$viewport);
        /right|left/.test(a) ? (b = c.top - h - k.scroll,
        c = c.top + h - k.scroll + d,
        b < k.top ? f.top = k.top - b : c > k.top + k.height && (f.top = k.top + k.height - c)) : (d = c.left - h,
        c = c.left + h + b,
        d < k.left ? f.left = k.left - d : c > k.right && (f.left = k.left + k.width - c));
        return f
    }
    ;
    f.prototype.getTitle = function() {
        var a = this.$element
          , c = this.options;
        return a.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(a[0]) : c.title)
    }
    ;
    f.prototype.getUID = function(a) {
        do
            a += ~~(1E6 * Math.random());
        while (document.getElementById(a));return a
    }
    ;
    f.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template),
        1 != this.$tip.length))
            throw Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ;
    f.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ;
    f.prototype.enable = function() {
        this.enabled = !0
    }
    ;
    f.prototype.disable = function() {
        this.enabled = !1
    }
    ;
    f.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ;
    f.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type),
        c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)));
        b ? (c.inState.click = !c.inState.click,
        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }
    ;
    f.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type);
            a.$tip && a.$tip.detach();
            a.$tip = null;
            a.$arrow = null;
            a.$viewport = null;
            a.$element = null
        })
    }
    ;
    f.prototype.sanitizeHtml = function(a) {
        return m(a, this.options.whiteList, this.options.sanitizeFn)
    }
    ;
    var q = a.fn.tooltip;
    a.fn.tooltip = function(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.tooltip")
              , h = "object" == typeof b && b;
            if (d || !/destroy|hide/.test(b))
                if (d || c.data("bs.tooltip", d = new f(this,h)),
                "string" == typeof b)
                    d[b]()
        })
    }
    ;
    a.fn.tooltip.Constructor = f;
    a.fn.tooltip.noConflict = function() {
        a.fn.tooltip = q;
        return this
    }
}(jQuery);
+function(a) {
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw Error("Popover requires tooltip.js");
    b.VERSION = "3.4.1";
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype);
    b.prototype.constructor = b;
    b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }
    ;
    b.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle()
          , h = this.getContent();
        if (this.options.html) {
            var d = typeof h;
            this.options.sanitize && (b = this.sanitizeHtml(b),
            "string" === d && (h = this.sanitizeHtml(h)));
            a.find(".popover-title").html(b);
            a.find(".popover-content").children().detach().end()["string" === d ? "html" : "append"](h)
        } else
            a.find(".popover-title").text(b),
            a.find(".popover-content").children().detach().end().text(h);
        a.removeClass("fade top bottom left right in");
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    }
    ;
    b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ;
    b.prototype.getContent = function() {
        var a = this.$element
          , b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }
    ;
    b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var m = a.fn.popover;
    a.fn.popover = function(l) {
        return this.each(function() {
            var k = a(this)
              , h = k.data("bs.popover")
              , d = "object" == typeof l && l;
            if (h || !/destroy|hide/.test(l))
                if (h || k.data("bs.popover", h = new b(this,d)),
                "string" == typeof l)
                    h[l]()
        })
    }
    ;
    a.fn.popover.Constructor = b;
    a.fn.popover.noConflict = function() {
        a.fn.popover = m;
        return this
    }
}(jQuery);
+function(a) {
    function b(k, h) {
        this.$body = a(document.body);
        this.$scrollElement = a(k).is(document.body) ? a(window) : a(k);
        this.options = a.extend({}, b.DEFAULTS, h);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this));
        this.refresh();
        this.process()
    }
    function m(k) {
        return this.each(function() {
            var h = a(this)
              , d = h.data("bs.scrollspy")
              , f = "object" == typeof k && k;
            d || h.data("bs.scrollspy", d = new b(this,f));
            if ("string" == typeof k)
                d[k]()
        })
    }
    b.VERSION = "3.4.1";
    b.DEFAULTS = {
        offset: 10
    };
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ;
    b.prototype.refresh = function() {
        var b = this
          , h = "offset"
          , d = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        a.isWindow(this.$scrollElement[0]) || (h = "position",
        d = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var b = a(this);
            b = b.data("target") || b.attr("href");
            var k = /^#./.test(b) && a(b);
            return k && k.length && k.is(":visible") && [[k[h]().top + d, b]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]);
            b.targets.push(this[1])
        })
    }
    ;
    b.prototype.process = function() {
        var a = this.$scrollElement.scrollTop() + this.options.offset, b = this.getScrollHeight(), d = this.options.offset + b - this.$scrollElement.height(), f = this.offsets, l = this.targets, m = this.activeTarget, c;
        this.scrollHeight != b && this.refresh();
        if (a >= d)
            return m != (c = l[l.length - 1]) && this.activate(c);
        if (m && a < f[0])
            return this.activeTarget = null,
            this.clear();
        for (c = f.length; c--; )
            m != l[c] && a >= f[c] && (void 0 === f[c + 1] || a < f[c + 1]) && this.activate(l[c])
    }
    ;
    b.prototype.activate = function(b) {
        this.activeTarget = b;
        this.clear();
        b = a(this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]').parents("li").addClass("active");
        b.parent(".dropdown-menu").length && (b = b.closest("li.dropdown").addClass("active"));
        b.trigger("activate.bs.scrollspy")
    }
    ;
    b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var l = a.fn.scrollspy;
    a.fn.scrollspy = m;
    a.fn.scrollspy.Constructor = b;
    a.fn.scrollspy.noConflict = function() {
        a.fn.scrollspy = l;
        return this
    }
    ;
    a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            m.call(b, b.data())
        })
    })
}(jQuery);
+function(a) {
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , f = d.data("bs.tab");
            f || d.data("bs.tab", f = new m(this));
            if ("string" == typeof b)
                f[b]()
        })
    }
    var m = function(b) {
        this.element = a(b)
    };
    m.VERSION = "3.4.1";
    m.TRANSITION_DURATION = 150;
    m.prototype.show = function() {
        var b = this.element
          , d = b.closest("ul:not(.dropdown-menu)")
          , f = b.data("target");
        f || (f = (f = b.attr("href")) && f.replace(/.*(?=#[^\s]*$)/, ""));
        if (!b.parent("li").hasClass("active")) {
            var k = d.find(".active:last a")
              , l = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            })
              , c = a.Event("show.bs.tab", {
                relatedTarget: k[0]
            });
            k.trigger(l);
            b.trigger(c);
            c.isDefaultPrevented() || l.isDefaultPrevented() || (f = a(document).find(f),
            this.activate(b.closest("li"), d),
            this.activate(f, f.parent(), function() {
                k.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: b[0]
                });
                b.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: k[0]
                })
            }))
        }
    }
    ;
    m.prototype.activate = function(b, d, f) {
        function h() {
            k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            c ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade");
            b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            f && f()
        }
        var k = d.find("> .active")
          , c = f && a.support.transition && (k.length && k.hasClass("fade") || !!d.find("> .fade").length);
        k.length && c ? k.one("bsTransitionEnd", h).emulateTransitionEnd(m.TRANSITION_DURATION) : h();
        k.removeClass("in")
    }
    ;
    var l = a.fn.tab;
    a.fn.tab = b;
    a.fn.tab.Constructor = m;
    a.fn.tab.noConflict = function() {
        a.fn.tab = l;
        return this
    }
    ;
    var k = function(h) {
        h.preventDefault();
        b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', k).on("click.bs.tab.data-api", '[data-toggle="pill"]', k)
}(jQuery);
+function(a) {
    function b(b) {
        return this.each(function() {
            var h = a(this)
              , d = h.data("bs.affix")
              , f = "object" == typeof b && b;
            d || h.data("bs.affix", d = new m(this,f));
            if ("string" == typeof b)
                d[b]()
        })
    }
    var m = function(b, h) {
        this.options = a.extend({}, m.DEFAULTS, h);
        this.$target = (this.options.target === m.DEFAULTS.target ? a(this.options.target) : a(document).find(this.options.target)).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this));
        this.$element = a(b);
        this.pinnedOffset = this.unpin = this.affixed = null;
        this.checkPosition()
    };
    m.VERSION = "3.4.1";
    m.RESET = "affix affix-top affix-bottom";
    m.DEFAULTS = {
        offset: 0,
        target: window
    };
    m.prototype.getState = function(a, b, d, f) {
        var h = this.$target.scrollTop()
          , k = this.$element.offset()
          , c = this.$target.height();
        if (null != d && "top" == this.affixed)
            return h < d ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != d ? h + this.unpin <= k.top ? !1 : "bottom" : h + c <= a - f ? !1 : "bottom";
        var l = null == this.affixed;
        k = l ? h : k.top;
        return null != d && h <= d ? "top" : null != f && k + (l ? c : b) >= a - f ? "bottom" : !1
    }
    ;
    m.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(m.RESET).addClass("affix");
        var a = this.$target.scrollTop();
        return this.pinnedOffset = this.$element.offset().top - a
    }
    ;
    m.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ;
    m.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height()
              , h = this.options.offset
              , d = h.top
              , f = h.bottom
              , l = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof h && (f = d = h);
            "function" == typeof d && (d = h.top(this.$element));
            "function" == typeof f && (f = h.bottom(this.$element));
            h = this.getState(l, b, d, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                d = "affix" + (h ? "-" + h : "");
                var r = a.Event(d + ".bs.affix");
                this.$element.trigger(r);
                if (r.isDefaultPrevented())
                    return;
                this.affixed = h;
                this.unpin = "bottom" == h ? this.getPinnedOffset() : null;
                this.$element.removeClass(m.RESET).addClass(d).trigger(d.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: l - b - f
            })
        }
    }
    ;
    var l = a.fn.affix;
    a.fn.affix = b;
    a.fn.affix.Constructor = m;
    a.fn.affix.noConflict = function() {
        a.fn.affix = l;
        return this
    }
    ;
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var k = a(this)
              , h = k.data();
            h.offset = h.offset || {};
            null != h.offsetBottom && (h.offset.bottom = h.offsetBottom);
            null != h.offsetTop && (h.offset.top = h.offsetTop);
            b.call(k, h)
        })
    })
}(jQuery);
void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0);
(function(a, b, m) {
    function l(c) {
        var d = b.console;
        h[c] || (h[c] = !0,
        a.migrateWarnings.push(c),
        d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c),
        a.migrateTrace && d.trace && d.trace()))
    }
    function k(b, c, d, f) {
        if (Object.defineProperty)
            try {
                return Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return l(f),
                        d
                    },
                    set: function(a) {
                        l(f);
                        d = a
                    }
                }),
                m
            } catch (ba) {}
        a._definePropertyBroken = !0;
        b[c] = d
    }
    var h = {};
    a.migrateWarnings = [];
    !a.migrateMute && b.console && b.console.log && b.console.log("JQMIGRATE: Logging is active");
    a.migrateTrace === m && (a.migrateTrace = !0);
    a.migrateReset = function() {
        h = {};
        a.migrateWarnings.length = 0
    }
    ;
    "BackCompat" === document.compatMode && l("jQuery is not compatible with Quirks Mode");
    var d = a("<input/>", {
        size: 1
    }).attr("size") && a.attrFn
      , f = a.attr
      , q = a.attrHooks.value && a.attrHooks.value.get || function() {
        return null
    }
      , r = a.attrHooks.value && a.attrHooks.value.set || function() {
        return m
    }
      , c = /^(?:input|button)$/i
      , v = /^[238]$/
      , n = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
      , u = /^(?:checked|selected)$/i;
    k(a, "attrFn", d || {}, "jQuery.attrFn is deprecated");
    a.attr = function(b, h, k, q) {
        var A = h.toLowerCase()
          , E = b && b.nodeType;
        return q && (4 > f.length && l("jQuery.fn.attr( props, pass ) is deprecated"),
        b && !v.test(E) && (d ? h in d : a.isFunction(a.fn[h]))) ? a(b)[h](k) : ("type" === h && k !== m && c.test(b.nodeName) && b.parentNode && l("Can't change the 'type' of an input or button in IE 6/7/8"),
        !a.attrHooks[A] && n.test(A) && (a.attrHooks[A] = {
            get: function(b, c) {
                var d, f = a.prop(b, c);
                return !0 === f || "boolean" != typeof f && (d = b.getAttributeNode(c)) && !1 !== d.nodeValue ? c.toLowerCase() : m
            },
            set: function(b, c, d) {
                var f;
                return !1 === c ? a.removeAttr(b, d) : (f = a.propFix[d] || d,
                f in b && (b[f] = !0),
                b.setAttribute(d, d.toLowerCase())),
                d
            }
        },
        u.test(A) && l("jQuery.fn.attr('" + A + "') may use property instead of attribute")),
        f.call(a, b, h, k))
    }
    ;
    a.attrHooks.value = {
        get: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? q.apply(this, arguments) : ("input" !== c && "option" !== c && l("jQuery.fn.attr('value') no longer gets properties"),
            b in a ? a.value : null)
        },
        set: function(a, b) {
            var c = (a.nodeName || "").toLowerCase();
            return "button" === c ? r.apply(this, arguments) : ("input" !== c && "option" !== c && l("jQuery.fn.attr('value', val) no longer sets properties"),
            a.value = b,
            m)
        }
    };
    var E, z, x = a.fn.init, H = a.parseJSON, B = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    a.fn.init = function(b, c, d) {
        var f;
        return b && "string" == typeof b && !a.isPlainObject(c) && (f = B.exec(a.trim(b))) && f[0] && ("<" !== b.charAt(0) && l("$(html) HTML strings must start with '<' character"),
        f[3] && l("$(html) HTML text after last tag is ignored"),
        "#" === f[0].charAt(0) && (l("HTML string cannot start with a '#' character"),
        a.error("JQMIGRATE: Invalid selector string (XSS)")),
        c && c.context && (c = c.context),
        a.parseHTML) ? x.call(this, a.parseHTML(f[2], c, !0), c, d) : x.apply(this, arguments)
    }
    ;
    a.fn.init.prototype = a.fn;
    a.parseJSON = function(a) {
        return a || null === a ? H.apply(this, arguments) : (l("jQuery.parseJSON requires a valid JSON string"),
        null)
    }
    ;
    a.uaMatch = function(a) {
        a = a.toLowerCase();
        a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
        return {
            browser: a[1] || "",
            version: a[2] || "0"
        }
    }
    ;
    a.browser || (E = a.uaMatch(navigator.userAgent),
    z = {},
    E.browser && (z[E.browser] = !0,
    z.version = E.version),
    z.chrome ? z.webkit = !0 : z.webkit && (z.safari = !0),
    a.browser = z);
    k(a, "browser", a.browser, "jQuery.browser is deprecated");
    a.sub = function() {
        function b(a, c) {
            return new b.fn.init(a,c)
        }
        a.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, f) {
            return f && f instanceof a && !(f instanceof b) && (f = b(f)),
            a.fn.init.call(this, d, f, c)
        }
        ;
        b.fn.init.prototype = b.fn;
        var c = b(document);
        return l("jQuery.sub() is deprecated"),
        b
    }
    ;
    a.ajaxSetup({
        converters: {
            "text json": a.parseJSON
        }
    });
    var D = a.fn.data;
    a.fn.data = function(b) {
        var c, d, f = this[0];
        return !f || "events" !== b || 1 !== arguments.length || (c = a.data(f, b),
        d = a._data(f, b),
        c !== m && c !== d || d === m) ? D.apply(this, arguments) : (l("Use of jQuery.fn.data('events') is deprecated"),
        d)
    }
    ;
    var G = /\/(java|ecma)script/i
      , N = a.fn.andSelf || a.fn.addBack;
    a.fn.andSelf = function() {
        return l("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
        N.apply(this, arguments)
    }
    ;
    a.clean || (a.clean = function(b, c, d, f) {
        c = c || document;
        c = !c.nodeType && c[0] || c;
        c = c.ownerDocument || c;
        l("jQuery.clean() is deprecated");
        var h, k = [];
        if (a.merge(k, a.buildFragment(b, c).childNodes),
        d) {
            var n = function(a) {
                return !a.type || G.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : d.appendChild(a) : m
            };
            for (b = 0; null != (c = k[b]); b++)
                a.nodeName(c, "script") && n(c) || (d.appendChild(c),
                c.getElementsByTagName !== m && (h = a.grep(a.merge([], c.getElementsByTagName("script")), n),
                k.splice.apply(k, [b + 1, 0].concat(h)),
                b += h.length))
        }
        return k
    }
    );
    var Q = a.event.add
      , L = a.event.remove
      , R = a.event.trigger
      , da = a.fn.toggle
      , U = a.fn.live
      , la = a.fn.die
      , O = /\b(?:ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess)\b/
      , A = /(?:^|\s)hover(\.\S+|)\b/
      , F = function(b) {
        return "string" != typeof b || a.event.special.hover ? b : (A.test(b) && l("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),
        b && b.replace(A, "mouseenter$1 mouseleave$1"))
    };
    a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement");
    a.event.dispatch && k(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated");
    a.event.add = function(a, b, c, d, f) {
        a !== document && O.test(b) && l("AJAX events should be attached to document: " + b);
        Q.call(this, a, F(b || ""), c, d, f)
    }
    ;
    a.event.remove = function(a, b, c, d, f) {
        L.call(this, a, F(b) || "", c, d, f)
    }
    ;
    a.fn.error = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return l("jQuery.fn.error() is deprecated"),
        a.splice(0, 0, "error"),
        arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a),
        this)
    }
    ;
    a.fn.toggle = function(b, c) {
        if (!a.isFunction(b) || !a.isFunction(c))
            return da.apply(this, arguments);
        l("jQuery.fn.toggle(handler, handler...) is deprecated");
        var d = arguments
          , f = b.guid || a.guid++
          , h = 0
          , k = function(c) {
            var f = (a._data(this, "lastToggle" + b.guid) || 0) % h;
            return a._data(this, "lastToggle" + b.guid, f + 1),
            c.preventDefault(),
            d[f].apply(this, arguments) || !1
        };
        for (k.guid = f; d.length > h; )
            d[h++].guid = f;
        return this.click(k)
    }
    ;
    a.fn.live = function(b, c, d) {
        return l("jQuery.fn.live() is deprecated"),
        U ? U.apply(this, arguments) : (a(this.context).on(b, this.selector, c, d),
        this)
    }
    ;
    a.fn.die = function(b, c) {
        return l("jQuery.fn.die() is deprecated"),
        la ? la.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c),
        this)
    }
    ;
    a.event.trigger = function(a, b, c, d) {
        return c || O.test(a) || l("Global events are undocumented and deprecated"),
        R.call(this, a, b, c || document, d)
    }
    ;
    a.each("ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess".split(" "), function(b, c) {
        a.event.special[c] = {
            setup: function() {
                var b = this;
                return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                    a.event.trigger(c, null, b, !0)
                }),
                a._data(this, c, a.guid++)),
                !1
            },
            teardown: function() {
                return this !== document && a.event.remove(document, c + "." + a._data(this, c)),
                !1
            }
        }
    })
}
)(jQuery, window);
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery)
}(function(a) {
    function b(a) {
        return k.raw ? a : encodeURIComponent(a)
    }
    function m(b, d) {
        if (k.raw)
            var f = b;
        else
            a: {
                0 === b.indexOf('"') && (b = b.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    f = (b = decodeURIComponent(b.replace(l, " ")),
                    k.json ? JSON.parse(b) : b);
                    break a
                } catch (q) {}
                f = void 0
            }
        return a.isFunction(d) ? d(f) : f
    }
    var l = /\+/g
      , k = a.cookie = function(h, d, f) {
        if (void 0 !== d && !a.isFunction(d)) {
            if ("number" == typeof (f = a.extend({}, k.defaults, f)).expires) {
                var l = f.expires
                  , r = f.expires = new Date;
                r.setTime(+r + 864E5 * l)
            }
            return document.cookie = [b(h), "=", (c = d,
            b(k.json ? JSON.stringify(c) : String(c))), f.expires ? "; expires=" + f.expires.toUTCString() : "", f.path ? "; path=" + f.path : "", f.domain ? "; domain=" + f.domain : "", f.secure ? "; secure" : ""].join("")
        }
        var c;
        f = h ? void 0 : {};
        c = document.cookie ? document.cookie.split("; ") : [];
        r = 0;
        for (var v = c.length; r < v; r++) {
            var n = c[r].split("=")
              , u = (l = n.shift(),
            k.raw ? l : decodeURIComponent(l));
            n = n.join("=");
            if (h && h === u) {
                f = m(n, d);
                break
            }
            h || void 0 === (n = m(n)) || (f[u] = n)
        }
        return f
    }
    ;
    k.defaults = {};
    a.removeCookie = function(b, d) {
        return void 0 !== a.cookie(b) && (a.cookie(b, "", a.extend({}, d, {
            expires: -1
        })),
        !a.cookie(b))
    }
});
$(document).ready(function(a) {
    var b = a(".js-back-to-top");
    a(window).scroll(function() {
        300 < a(this).scrollTop() ? b.addClass("back-to-top-is-visible") : b.removeClass("back-to-top-is-visible back-to-top-fade-out");
        1200 < a(this).scrollTop() && b.addClass("back-to-top-fade-out")
    });
    b.on("click", function(b) {
        b.preventDefault();
        a("body,html").animate({
            scrollTop: 0
        }, 700)
    })
});
(function() {
    function a() {
        if (!N && document.body) {
            N = !0;
            var a = document.body
              , b = document.documentElement
              , c = window.innerHeight
              , d = a.scrollHeight;
            Q = 0 <= document.compatMode.indexOf("CSS") ? b : a;
            L = a;
            B.keyboardSupport && window.addEventListener("keydown", l, !1);
            if (top != self)
                D = !0;
            else if (d > c && (a.offsetHeight <= c || b.offsetHeight <= c)) {
                var f = document.createElement("div");
                f.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + Q.scrollHeight + "px";
                document.body.appendChild(f);
                var h;
                da = function() {
                    h || (h = setTimeout(function() {
                        f.style.height = "0";
                        f.style.height = Q.scrollHeight + "px";
                        h = null
                    }, 500))
                }
                ;
                setTimeout(da, 10);
                window.addEventListener("resize", da, !1);
                R = new X(da);
                R.observe(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !1
                });
                Q.offsetHeight <= c && (c = document.createElement("div"),
                c.style.clear = "both",
                a.appendChild(c))
            }
            B.fixedBackground || (a.style.backgroundAttachment = "scroll",
            b.style.backgroundAttachment = "scroll")
        }
    }
    function b(a, b, c) {
        v(b, c);
        if (1 != B.accelerationMax) {
            var d = Date.now() - y;
            d < B.accelerationDelta && (d = (1 + 50 / d) / 2,
            1 < d && (d = Math.min(d, B.accelerationMax),
            b *= d,
            c *= d));
            y = Date.now()
        }
        A.push({
            x: b,
            y: c,
            lastX: 0 > b ? .99 : -.99,
            lastY: 0 > c ? .99 : -.99,
            start: Date.now()
        });
        if (!F) {
            var f = a === document.body
              , h = function(d) {
                d = Date.now();
                for (var k = 0, l = 0, e = 0; e < A.length; e++) {
                    var n = A[e]
                      , q = d - n.start
                      , m = q >= B.animationTime
                      , I = m ? 1 : q / B.animationTime;
                    B.pulseAlgorithm && (q = I,
                    1 <= q ? I = 1 : 0 >= q ? I = 0 : (1 == B.pulseNormalize && (B.pulseNormalize /= z(1)),
                    I = z(q)));
                    q = n.x * I - n.lastX >> 0;
                    I = n.y * I - n.lastY >> 0;
                    k += q;
                    l += I;
                    n.lastX += q;
                    n.lastY += I;
                    m && (A.splice(e, 1),
                    e--)
                }
                f ? window.scrollBy(k, l) : (k && (a.scrollLeft += k),
                l && (a.scrollTop += l));
                b || c || (A = []);
                A.length ? ea(h, a, 1E3 / B.frameRate + 1) : F = !1
            };
            ea(h, a, 0);
            F = !0
        }
    }
    function m(d) {
        N || a();
        var k = d.target
          , l = f(k);
        if (!l || d.defaultPrevented || d.ctrlKey || c(L, "embed") || c(k, "embed") && /\.pdf/i.test(k.src) || c(L, "object"))
            return !0;
        k = -d.wheelDeltaX || d.deltaX || 0;
        var q = -d.wheelDeltaY || d.deltaY || 0;
        la && (d.wheelDeltaX && u(d.wheelDeltaX, 120) && (k = d.wheelDeltaX / Math.abs(d.wheelDeltaX) * -120),
        d.wheelDeltaY && u(d.wheelDeltaY, 120) && (q = d.wheelDeltaY / Math.abs(d.wheelDeltaY) * -120));
        k || q || (q = -d.wheelDelta || 0);
        1 === d.deltaMode && (k *= 40,
        q *= 40);
        if (!B.touchpadSupport && n(q))
            return !0;
        1.2 < Math.abs(k) && (k *= B.stepSize / 120);
        1.2 < Math.abs(q) && (q *= B.stepSize / 120);
        b(l, k, q);
        h()
    }
    function l(a) {
        var d = a.target
          , k = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== O.spacebar;
        document.contains(L) || (L = document.activeElement);
        var l = /^(button|submit|radio|checkbox|file|color|image)$/i, n;
        if (!(n = /^(textarea|select|embed|object)$/i.test(d.nodeName) || c(d, "input") && !l.test(d.type) || c(L, "video"))) {
            n = a.target;
            var q = !1;
            if (-1 != document.URL.indexOf("www.youtube.com/watch")) {
                do
                    if (q = n.classList && n.classList.contains("html5-video-controls"))
                        break;
                while (n = n.parentNode)
            }
            n = q
        }
        if (n || d.isContentEditable || a.defaultPrevented || k || (c(d, "button") || c(d, "input") && l.test(d.type)) && a.keyCode === O.spacebar)
            return !0;
        n = d = 0;
        k = f(L);
        l = k.clientHeight;
        k == document.body && (l = window.innerHeight);
        switch (a.keyCode) {
        case O.up:
            n = -B.arrowScroll;
            break;
        case O.down:
            n = B.arrowScroll;
            break;
        case O.spacebar:
            n = a.shiftKey ? 1 : -1;
            n = -n * l * .9;
            break;
        case O.pageup:
            n = .9 * -l;
            break;
        case O.pagedown:
            n = .9 * l;
            break;
        case O.home:
            n = -k.scrollTop;
            break;
        case O.end:
            l = k.scrollHeight - k.scrollTop - l;
            n = 0 < l ? l + 10 : 0;
            break;
        case O.left:
            d = -B.arrowScroll;
            break;
        case O.right:
            d = B.arrowScroll;
            break;
        default:
            return !0
        }
        b(k, d, n);
        a.preventDefault();
        h()
    }
    function k(a) {
        L = a.target
    }
    function h() {
        clearTimeout(fa);
        fa = setInterval(function() {
            W = {}
        }, 1E3)
    }
    function d(a, b) {
        for (var c = a.length; c--; )
            W[M(a[c])] = b;
        return b
    }
    function f(a) {
        var b = []
          , c = document.body
          , f = Q.scrollHeight;
        do {
            var h = W[M(a)];
            if (h)
                return d(b, h);
            b.push(a);
            if (f === a.scrollHeight) {
                if (h = q(Q) && q(c) || r(Q),
                D && Q.clientHeight + 10 < Q.scrollHeight || !D && h)
                    return d(b, oa())
            } else if (a.clientHeight + 10 < a.scrollHeight && r(a))
                return d(b, a)
        } while (a = a.parentElement)
    }
    function q(a) {
        return "hidden" !== getComputedStyle(a, "").getPropertyValue("overflow-y")
    }
    function r(a) {
        a = getComputedStyle(a, "").getPropertyValue("overflow-y");
        return "scroll" === a || "auto" === a
    }
    function c(a, b) {
        return (a.nodeName || "").toLowerCase() === b.toLowerCase()
    }
    function v(a, b) {
        a = 0 < a ? 1 : -1;
        b = 0 < b ? 1 : -1;
        if (G.x !== a || G.y !== b)
            G.x = a,
            G.y = b,
            A = [],
            y = 0
    }
    function n(a) {
        if (a)
            return U.length || (U = [a, a, a]),
            a = Math.abs(a),
            U.push(a),
            U.shift(),
            clearTimeout(ba),
            ba = setTimeout(function() {
                window.localStorage && (localStorage.SS_deltaBuffer = U.join(","))
            }, 1E3),
            !E(120) && !E(100)
    }
    function u(a, b) {
        return Math.floor(a / b) == a / b
    }
    function E(a) {
        return u(U[0], a) && u(U[1], a) && u(U[2], a)
    }
    function z(a) {
        a *= B.pulseScale;
        if (1 > a)
            var b = a - (1 - Math.exp(-a));
        else
            b = Math.exp(-1),
            a = 1 - Math.exp(-(a - 1)),
            b += a * (1 - b);
        return b * B.pulseNormalize
    }
    function x(a) {
        for (var b in a)
            H.hasOwnProperty(b) && (B[b] = a[b])
    }
    var H = {
        frameRate: 150,
        animationTime: 900,
        stepSize: 100,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: !0,
        arrowScroll: 50,
        touchpadSupport: !1,
        fixedBackground: !0,
        excluded: ""
    }, B = H, D = !1, G = {
        x: 0,
        y: 0
    }, N = !1, Q = document.documentElement, L, R, da, U = [], la = /^Mac/.test(navigator.platform), O = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36
    }, A = [], F = !1, y = Date.now(), M = function() {
        var a = 0;
        return function(b) {
            return b.uniqueID || (b.uniqueID = a++)
        }
    }(), W = {}, fa, ba;
    window.localStorage && localStorage.SS_deltaBuffer && (U = localStorage.SS_deltaBuffer.split(","));
    var ea = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a, b, c) {
            window.setTimeout(a, c || 1E3 / 60)
        }
    }()
      , X = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
      , oa = function() {
        var a;
        return function() {
            if (!a) {
                var b = document.createElement("div");
                b.style.cssText = "height:10000px;width:1px;";
                document.body.appendChild(b);
                var c = document.body.scrollTop;
                window.scrollBy(0, 1);
                a = document.body.scrollTop != c ? document.body : document.documentElement;
                window.scrollBy(0, -1);
                document.body.removeChild(b)
            }
            return a
        }
    }()
      , ca = window.navigator.userAgent
      , S = /Edge/.test(ca)
      , pa = /chrome/i.test(ca) && !S;
    S = /safari/i.test(ca) && !S;
    ca = /mobile/i.test(ca);
    pa = (pa || S) && !ca;
    var ha;
    "onwheel"in document.createElement("div") ? ha = "wheel" : "onmousewheel"in document.createElement("div") && (ha = "mousewheel");
    ha && pa && (window.addEventListener(ha, m, !1),
    window.addEventListener("mousedown", k, !1),
    window.addEventListener("load", a, !1));
    x.destroy = function() {
        R && R.disconnect();
        window.removeEventListener(ha, m, !1);
        window.removeEventListener("mousedown", k, !1);
        window.removeEventListener("keydown", l, !1);
        window.removeEventListener("resize", da, !1);
        window.removeEventListener("load", a, !1)
    }
    ;
    window.SmoothScrollOptions && x(window.SmoothScrollOptions);
    "function" === typeof define && define.amd ? define(function() {
        return x
    }) : "object" == typeof exports ? module.exports = x : window.SmoothScroll = x
}
)();
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var c = b || window.event, d = f.call(arguments, 1), h, q = 0, z = 0, x = 0, H = 0, B = 0;
        if (b = a.event.fix(c),
        b.type = "mousewheel",
        "detail"in c && (z = -1 * c.detail),
        "wheelDelta"in c && (z = c.wheelDelta),
        "wheelDeltaY"in c && (z = c.wheelDeltaY),
        "wheelDeltaX"in c && (q = -1 * c.wheelDeltaX),
        "axis"in c && c.axis === c.HORIZONTAL_AXIS && (q = -1 * z,
        z = 0),
        h = 0 === z ? q : z,
        "deltaY"in c && (z = -1 * c.deltaY,
        h = z),
        "deltaX"in c && (q = c.deltaX,
        0 === z && (h = -1 * q)),
        0 !== z || 0 !== q) {
            if (1 === c.deltaMode) {
                var D = a.data(this, "mousewheel-line-height");
                h *= D;
                z *= D;
                q *= D
            } else
                2 === c.deltaMode && (D = a.data(this, "mousewheel-page-height"),
                h *= D,
                z *= D,
                q *= D);
            if (x = Math.max(Math.abs(z), Math.abs(q)),
            (!k || k > x) && (k = x,
            r.settings.adjustOldDeltas && "mousewheel" === c.type && 0 === x % 120 && (k /= 40)),
            r.settings.adjustOldDeltas && "mousewheel" === c.type && 0 === x % 120 && (h /= 40,
            q /= 40,
            z /= 40),
            h = Math[1 <= h ? "floor" : "ceil"](h / k),
            q = Math[1 <= q ? "floor" : "ceil"](q / k),
            z = Math[1 <= z ? "floor" : "ceil"](z / k),
            r.settings.normalizeOffset && this.getBoundingClientRect)
                c = this.getBoundingClientRect(),
                H = b.clientX - c.left,
                B = b.clientY - c.top;
            return b.deltaX = q,
            b.deltaY = z,
            b.deltaFactor = k,
            b.offsetX = H,
            b.offsetY = B,
            b.deltaMode = 0,
            d.unshift(b, h, q, z),
            l && clearTimeout(l),
            l = setTimeout(m, 200),
            (a.event.dispatch || a.event.handle).apply(this, d)
        }
    }
    function m() {
        k = null
    }
    var l, k, h = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], d = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], f = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var q = h.length; q; )
            a.event.fixHooks[h[--q]] = a.event.mouseHooks;
    var r = a.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var c = d.length; c; )
                    this.addEventListener(d[--c], b, !1);
            else
                this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", r.getLineHeight(this));
            a.data(this, "mousewheel-page-height", r.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = d.length; c; )
                    this.removeEventListener(d[--c], b, !1);
            else
                this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height");
            a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            b = a(b);
            var c = b["offsetParent"in a.fn ? "offsetParent" : "parent"]();
            return c.length || (c = a("body")),
            parseInt(c.css("fontSize"), 10) || parseInt(b.css("fontSize"), 10) || 16
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
!function(a) {
    "undefined" != typeof module && module.exports ? module.exports = a : a(jQuery, window, document)
}(function(a) {
    !function(b) {
        var m = "undefined" != typeof module && module.exports
          , l = "https:" == document.location.protocol ? "https:" : "http:";
        "function" == typeof define && define.amd || (m ? require("jquery-mousewheel")(a) : a.event.special.mousewheel || a("head").append(decodeURI("%3Cscript src=" + l + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js%3E%3C/script%3E")));
        b()
    }(function() {
        var b, m = {
            setTop: 0,
            setLeft: 0,
            axis: "y",
            scrollbarPosition: "inside",
            scrollInertia: 950,
            autoDraggerLength: !0,
            alwaysShowScrollbar: 0,
            snapOffset: 0,
            mouseWheel: {
                enable: !0,
                scrollAmount: "auto",
                axis: "y",
                deltaFactor: "auto",
                disableOver: ["select", "option", "keygen", "datalist", "textarea"]
            },
            scrollButtons: {
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            keyboard: {
                enable: !0,
                scrollType: "stepless",
                scrollAmount: "auto"
            },
            contentTouchScroll: 25,
            advanced: {
                autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                updateOnContentResize: !0,
                updateOnImageLoad: !0,
                autoUpdateTimeout: 60
            },
            theme: "light",
            callbacks: {
                onTotalScrollOffset: 0,
                onTotalScrollBackOffset: 0,
                alwaysTriggerOffsets: !0
            }
        }, l = 0, k = {}, h = window.attachEvent && !window.addEventListener ? 1 : 0, d = !1, f = "mCSB_dragger_onDrag mCSB_scrollTools_onDrag mCS_img_loaded mCS_disabled mCS_destroyed mCS_no_scrollbar mCS-autoHide mCS-dir-rtl mCS_no_scrollbar_y mCS_no_scrollbar_x mCS_y_hidden mCS_x_hidden mCSB_draggerContainer mCSB_buttonUp mCSB_buttonDown mCSB_buttonLeft mCSB_buttonRight".split(" "), q = {
            init: function(b) {
                b = a.extend(!0, {}, m, b);
                var d = r.call(this);
                if (b.live) {
                    var h = b.liveSelector || this.selector || ".mCustomScrollbar"
                      , A = a(h);
                    if ("off" === b.live)
                        return void v(h);
                    k[h] = setTimeout(function() {
                        A.mCustomScrollbar(b);
                        "once" === b.live && A.length && v(h)
                    }, 500)
                } else
                    v(h);
                return b.setWidth = b.set_width ? b.set_width : b.setWidth,
                b.setHeight = b.set_height ? b.set_height : b.setHeight,
                b.axis = b.horizontalScroll ? "x" : n(b.axis),
                b.scrollInertia = 0 < b.scrollInertia && 17 > b.scrollInertia ? 17 : b.scrollInertia,
                "object" != typeof b.mouseWheel && 1 == b.mouseWheel && (b.mouseWheel = {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    preventDefault: !1,
                    deltaFactor: "auto",
                    normalizeDelta: !1,
                    invert: !1
                }),
                b.mouseWheel.scrollAmount = b.mouseWheelPixels ? b.mouseWheelPixels : b.mouseWheel.scrollAmount,
                b.mouseWheel.normalizeDelta = b.advanced.normalizeMouseWheelDelta ? b.advanced.normalizeMouseWheelDelta : b.mouseWheel.normalizeDelta,
                b.scrollButtons.scrollType = u(b.scrollButtons.scrollType),
                c(b),
                a(d).each(function() {
                    var d = a(this);
                    if (!d.data("mCS")) {
                        d.data("mCS", {
                            idx: ++l,
                            opt: b,
                            scrollRatio: {
                                y: null,
                                x: null
                            },
                            overflowed: null,
                            contentReset: {
                                y: null,
                                x: null
                            },
                            bindEvents: !1,
                            tweenRunning: !1,
                            sequential: {},
                            langDir: d.css("direction"),
                            cbOffsets: null,
                            trigger: null
                        });
                        var h = d.data("mCS")
                          , k = h.opt
                          , n = d.data("mcs-axis")
                          , e = d.data("mcs-scrollbar-position")
                          , m = d.data("mcs-theme");
                        n && (k.axis = n);
                        e && (k.scrollbarPosition = e);
                        m && (k.theme = m,
                        c(k));
                        n = a(this);
                        k = n.data("mCS");
                        e = k.opt;
                        m = e.autoExpandScrollbar ? " " + f[1] + "_expand" : "";
                        m = ["<div id='mCSB_" + k.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + k.idx + "_scrollbar mCS-" + e.theme + " mCSB_scrollTools_vertical" + m + "'><div class='" + f[12] + "'><div id='mCSB_" + k.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + k.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + k.idx + "_scrollbar mCS-" + e.theme + " mCSB_scrollTools_horizontal" + m + "'><div class='" + f[12] + "'><div id='mCSB_" + k.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"];
                        var u = "yx" === e.axis ? "mCSB_vertical_horizontal" : "x" === e.axis ? "mCSB_horizontal" : "mCSB_vertical";
                        m = "yx" === e.axis ? m[0] + m[1] : "x" === e.axis ? m[1] : m[0];
                        var A = "yx" === e.axis ? "<div id='mCSB_" + k.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : ""
                          , r = e.autoHideScrollbar ? " " + f[6] : ""
                          , I = "x" !== e.axis && "rtl" === k.langDir ? " " + f[7] : "";
                        e.setWidth && n.css("width", e.setWidth);
                        e.setHeight && n.css("height", e.setHeight);
                        e.setLeft = "y" !== e.axis && "rtl" === k.langDir ? "989999px" : e.setLeft;
                        n.addClass("mCustomScrollbar _mCS_" + k.idx + r + I).wrapInner("<div id='mCSB_" + k.idx + "' class='mCustomScrollBox mCS-" + e.theme + " " + u + "'><div id='mCSB_" + k.idx + "_container' class='mCSB_container' style='position:relative; top:" + e.setTop + "; left:" + e.setLeft + ";' dir=" + k.langDir + " /></div>");
                        u = a("#mCSB_" + k.idx);
                        r = a("#mCSB_" + k.idx + "_container");
                        "y" === e.axis || e.advanced.autoExpandHorizontalScroll || r.css("width", E(r.children()));
                        "outside" === e.scrollbarPosition ? ("static" === n.css("position") && n.css("position", "relative"),
                        n.css("overflow", "visible"),
                        u.addClass("mCSB_outside").after(m)) : (u.addClass("mCSB_inside").append(m),
                        r.wrap(A));
                        e = a(this).data("mCS");
                        n = e.opt;
                        e = a(".mCSB_" + e.idx + "_scrollbar:first");
                        m = ha(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "";
                        m = ["<a href='#' class='" + f[13] + "' oncontextmenu='return false;' " + m + " />", "<a href='#' class='" + f[14] + "' oncontextmenu='return false;' " + m + " />", "<a href='#' class='" + f[15] + "' oncontextmenu='return false;' " + m + " />", "<a href='#' class='" + f[16] + "' oncontextmenu='return false;' " + m + " />"];
                        m = ["x" === n.axis ? m[2] : m[0], "x" === n.axis ? m[3] : m[1], m[2], m[3]];
                        n.scrollButtons.enable && e.prepend(m[0]).append(m[1]).next(".mCSB_scrollTools").prepend(m[2]).append(m[3]);
                        k = [a("#mCSB_" + k.idx + "_dragger_vertical"), a("#mCSB_" + k.idx + "_dragger_horizontal")];
                        k[0].css("min-height", k[0].height());
                        k[1].css("min-width", k[1].width());
                        a("#mCSB_" + h.idx + "_container img:not(." + f[2] + ")").addClass(f[2]);
                        q.update.call(null, d)
                    }
                })
            },
            update: function(b, c) {
                b = b || r.call(this);
                return a(b).each(function() {
                    var b = a(this);
                    if (b.data("mCS")) {
                        var d = b.data("mCS")
                          , k = d.opt
                          , n = a("#mCSB_" + d.idx + "_container")
                          , l = [a("#mCSB_" + d.idx + "_dragger_vertical"), a("#mCSB_" + d.idx + "_dragger_horizontal")];
                        if (n.length) {
                            d.tweenRunning && ea(b);
                            b.hasClass(f[3]) && b.removeClass(f[3]);
                            b.hasClass(f[4]) && b.removeClass(f[4]);
                            var q = a(this)
                              , e = q.data("mCS");
                            e = a("#mCSB_" + e.idx);
                            var m = q.css("max-height") || "none"
                              , u = -1 !== m.indexOf("%")
                              , A = q.css("box-sizing");
                            "none" !== m && (m = u ? q.parent().height() * parseInt(m) / 100 : parseInt(m),
                            "border-box" === A && (m -= q.innerHeight() - q.height() + (q.outerHeight() - q.innerHeight())),
                            e.css("max-height", Math.round(m)));
                            e = a(this).data("mCS");
                            q = e.opt;
                            e = a("#mCSB_" + e.idx + "_container");
                            q.advanced.autoExpandHorizontalScroll && "y" !== q.axis && e.css({
                                position: "absolute",
                                width: "auto"
                            }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                width: Math.ceil(e[0].getBoundingClientRect().right + .4) - Math.floor(e[0].getBoundingClientRect().left),
                                position: "relative"
                            }).unwrap();
                            "y" === k.axis || k.advanced.autoExpandHorizontalScroll || n.css("width", E(n.children()));
                            A = a(this).data("mCS");
                            q = a("#mCSB_" + A.idx);
                            m = a("#mCSB_" + A.idx + "_container");
                            e = null == A.overflowed ? m.height() : m.outerHeight(!1);
                            A = null == A.overflowed ? m.width() : m.outerWidth(!1);
                            q = [e > q.height(), A > q.width()];
                            d.overflowed = q;
                            D.call(this);
                            k.autoDraggerLength && (q = a(this).data("mCS"),
                            e = a("#mCSB_" + q.idx),
                            A = a("#mCSB_" + q.idx + "_container"),
                            q = [a("#mCSB_" + q.idx + "_dragger_vertical"), a("#mCSB_" + q.idx + "_dragger_horizontal")],
                            e = [e.height() / A.outerHeight(!1), e.width() / A.outerWidth(!1)],
                            e = [parseInt(q[0].css("min-height")), Math.round(e[0] * q[0].parent().height()), parseInt(q[1].css("min-width")), Math.round(e[1] * q[1].parent().width())],
                            A = h && e[3] < e[2] ? e[2] : e[3],
                            q[0].css({
                                height: h && e[1] < e[0] ? e[0] : e[1],
                                "max-height": q[0].parent().height() - 10
                            }).find(".mCSB_dragger_bar").css({
                                "line-height": e[0] + "px"
                            }),
                            q[1].css({
                                width: A,
                                "max-width": q[1].parent().width() - 10
                            }));
                            q = a(this).data("mCS");
                            A = a("#mCSB_" + q.idx);
                            m = a("#mCSB_" + q.idx + "_container");
                            e = [a("#mCSB_" + q.idx + "_dragger_vertical"), a("#mCSB_" + q.idx + "_dragger_horizontal")];
                            A = [m.outerHeight(!1) - A.height(), m.outerWidth(!1) - A.width()];
                            e = [A[0] / (e[0].parent().height() - e[0].height()), A[1] / (e[1].parent().width() - e[1].width())];
                            q.scrollRatio = {
                                y: e[0],
                                x: e[1]
                            };
                            H.call(this);
                            n = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)];
                            "x" !== k.axis && (d.overflowed[0] ? l[0].height() > l[0].parent().height() ? x.call(this) : (X(b, n[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            }),
                            d.contentReset.y = null) : (x.call(this),
                            "y" === k.axis ? B.call(this) : "yx" === k.axis && d.overflowed[1] && X(b, n[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            })));
                            "y" !== k.axis && (d.overflowed[1] ? l[1].width() > l[1].parent().width() ? x.call(this) : (X(b, n[1].toString(), {
                                dir: "x",
                                dur: 0,
                                overwrite: "none"
                            }),
                            d.contentReset.x = null) : (x.call(this),
                            "x" === k.axis ? B.call(this) : "yx" === k.axis && d.overflowed[0] && X(b, n[0].toString(), {
                                dir: "y",
                                dur: 0,
                                overwrite: "none"
                            })));
                            c && d && (2 === c && k.callbacks.onImageLoad && "function" == typeof k.callbacks.onImageLoad ? k.callbacks.onImageLoad.call(this) : 3 === c && k.callbacks.onSelectorChange && "function" == typeof k.callbacks.onSelectorChange ? k.callbacks.onSelectorChange.call(this) : k.callbacks.onUpdate && "function" == typeof k.callbacks.onUpdate && k.callbacks.onUpdate.call(this));
                            fa.call(this)
                        }
                    }
                })
            },
            scrollTo: function(b, c) {
                if ("undefined" != typeof b && null != b) {
                    var d = r.call(this);
                    return a(d).each(function() {
                        var d = a(this);
                        if (d.data("mCS")) {
                            var f = d.data("mCS")
                              , h = f.opt
                              , k = a.extend(!0, {}, {
                                trigger: "external",
                                scrollInertia: h.scrollInertia,
                                scrollEasing: "mcsEaseInOut",
                                moveDragger: !1,
                                timeout: 60,
                                callbacks: !0,
                                onStart: !0,
                                onUpdate: !0,
                                onComplete: !0
                            }, c)
                              , n = M.call(this, b)
                              , e = 0 < k.scrollInertia && 17 > k.scrollInertia ? 17 : k.scrollInertia;
                            n[0] = W.call(this, n[0], "y");
                            n[1] = W.call(this, n[1], "x");
                            k.moveDragger && (n[0] *= f.scrollRatio.y,
                            n[1] *= f.scrollRatio.x);
                            k.dur = e;
                            setTimeout(function() {
                                null !== n[0] && "undefined" != typeof n[0] && "x" !== h.axis && f.overflowed[0] && (k.dir = "y",
                                k.overwrite = "all",
                                X(d, n[0].toString(), k));
                                null !== n[1] && "undefined" != typeof n[1] && "y" !== h.axis && f.overflowed[1] && (k.dir = "x",
                                k.overwrite = "none",
                                X(d, n[1].toString(), k))
                            }, k.timeout)
                        }
                    })
                }
            },
            stop: function() {
                var b = r.call(this);
                return a(b).each(function() {
                    var b = a(this);
                    b.data("mCS") && ea(b)
                })
            },
            disable: function(b) {
                var c = r.call(this);
                return a(c).each(function() {
                    var c = a(this);
                    c.data("mCS") && (c.data("mCS"),
                    fa.call(this, "remove"),
                    B.call(this),
                    b && x.call(this),
                    D.call(this, !0),
                    c.addClass(f[3]))
                })
            },
            destroy: function() {
                var b = r.call(this);
                return a(b).each(function() {
                    var c = a(this);
                    if (c.data("mCS")) {
                        var d = c.data("mCS")
                          , h = d.opt
                          , k = a("#mCSB_" + d.idx)
                          , n = a("#mCSB_" + d.idx + "_container")
                          , l = a(".mCSB_" + d.idx + "_scrollbar");
                        h.live && v(h.liveSelector || a(b).selector);
                        fa.call(this, "remove");
                        B.call(this);
                        x.call(this);
                        c.removeData("mCS");
                        S(this, "mcs");
                        l.remove();
                        n.find("img." + f[2]).removeClass(f[2]);
                        k.replaceWith(n.contents());
                        c.removeClass("mCustomScrollbar _mCS_" + d.idx + " " + f[6] + " " + f[7] + " " + f[5] + " " + f[3]).addClass(f[4])
                    }
                })
            }
        }, r = function() {
            return "object" != typeof a(this) || 1 > a(this).length ? ".mCustomScrollbar" : this
        }, c = function(b) {
            b.autoDraggerLength = -1 < a.inArray(b.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) ? !1 : b.autoDraggerLength;
            b.autoExpandScrollbar = -1 < a.inArray(b.theme, "rounded-dots rounded-dots-dark 3d 3d-dark 3d-thick 3d-thick-dark inset inset-dark inset-2 inset-2-dark inset-3 inset-3-dark".split(" ")) ? !1 : b.autoExpandScrollbar;
            b.scrollButtons.enable = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? !1 : b.scrollButtons.enable;
            b.autoHideScrollbar = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? !0 : b.autoHideScrollbar;
            b.scrollbarPosition = -1 < a.inArray(b.theme, ["minimal", "minimal-dark"]) ? "outside" : b.scrollbarPosition
        }, v = function(a) {
            k[a] && (clearTimeout(k[a]),
            S(k, a))
        }, n = function(a) {
            return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
        }, u = function(a) {
            return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
        }, E = function(b) {
            return Math.max.apply(Math, b.map(function() {
                return a(this).outerWidth(!0)
            }).get())
        }, z = function(a, b, c) {
            c = c ? f[0] + "_expanded" : "";
            var d = a.closest(".mCSB_scrollTools");
            "active" === b ? (a.toggleClass(f[0] + " " + c),
            d.toggleClass(f[1]),
            a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(f[0]),
            d.removeClass(f[1])) : (a.addClass(f[0]),
            d.addClass(f[1])))
        }, x = function() {
            var b = a(this)
              , c = b.data("mCS")
              , d = c.opt
              , f = a("#mCSB_" + c.idx)
              , h = a("#mCSB_" + c.idx + "_container")
              , k = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
            if (ea(b),
            ("x" !== d.axis && !c.overflowed[0] || "y" === d.axis && c.overflowed[0]) && (k[0].add(h).css("top", 0),
            X(b, "_resetY")),
            "y" !== d.axis && !c.overflowed[1] || "x" === d.axis && c.overflowed[1])
                d = dx = 0,
                "rtl" === c.langDir && (d = f.width() - h.outerWidth(!1),
                dx = Math.abs(d / c.scrollRatio.x)),
                h.css("left", d),
                k[1].css("left", dx),
                X(b, "_resetX")
        }, H = function() {
            function b() {
                h = setTimeout(function() {
                    a.event.special.mousewheel ? (clearTimeout(h),
                    R.call(c[0])) : b()
                }, 100)
            }
            var c = a(this)
              , d = c.data("mCS")
              , f = d.opt;
            if (!d.bindEvents) {
                if (N.call(this),
                f.contentTouchScroll && Q.call(this),
                L.call(this),
                f.mouseWheel.enable) {
                    var h;
                    b()
                }
                U.call(this);
                O.call(this);
                f.advanced.autoScrollOnFocus && la.call(this);
                f.scrollButtons.enable && A.call(this);
                f.keyboard.enable && F.call(this);
                d.bindEvents = !0
            }
        }, B = function() {
            var b = a(this)
              , c = b.data("mCS")
              , d = c.opt
              , h = "mCS_" + c.idx
              , k = ".mCSB_" + c.idx + "_scrollbar";
            k = a("#mCSB_" + c.idx + ",#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper," + k + " ." + f[12] + ",#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal," + k + ">a");
            var n = a("#mCSB_" + c.idx + "_container");
            d.advanced.releaseDraggableSelectors && k.add(a(d.advanced.releaseDraggableSelectors));
            c.bindEvents && (a(document).unbind("." + h),
            k.each(function() {
                a(this).unbind("." + h)
            }),
            clearTimeout(b[0]._focusTimeout),
            S(b[0], "_focusTimeout"),
            clearTimeout(c.sequential.step),
            S(c.sequential, "step"),
            clearTimeout(n[0].onCompleteTimeout),
            S(n[0], "onCompleteTimeout"),
            c.bindEvents = !1)
        }, D = function(b) {
            var c = a(this)
              , d = c.data("mCS")
              , h = d.opt
              , k = a("#mCSB_" + d.idx + "_container_wrapper");
            k = k.length ? k : a("#mCSB_" + d.idx + "_container");
            var n = [a("#mCSB_" + d.idx + "_scrollbar_vertical"), a("#mCSB_" + d.idx + "_scrollbar_horizontal")]
              , l = [n[0].find(".mCSB_dragger"), n[1].find(".mCSB_dragger")];
            "x" !== h.axis && (d.overflowed[0] && !b ? (n[0].add(l[0]).add(n[0].children("a")).css("display", "block"),
            k.removeClass(f[8] + " " + f[10])) : (h.alwaysShowScrollbar ? (2 !== h.alwaysShowScrollbar && l[0].css("display", "none"),
            k.removeClass(f[10])) : (n[0].css("display", "none"),
            k.addClass(f[10])),
            k.addClass(f[8])));
            "y" !== h.axis && (d.overflowed[1] && !b ? (n[1].add(l[1]).add(n[1].children("a")).css("display", "block"),
            k.removeClass(f[9] + " " + f[11])) : (h.alwaysShowScrollbar ? (2 !== h.alwaysShowScrollbar && l[1].css("display", "none"),
            k.removeClass(f[11])) : (n[1].css("display", "none"),
            k.addClass(f[11])),
            k.addClass(f[9])));
            d.overflowed[0] || d.overflowed[1] ? c.removeClass(f[5]) : c.addClass(f[5])
        }, G = function(a) {
            switch (a.type) {
            case "pointerdown":
            case "MSPointerDown":
            case "pointermove":
            case "MSPointerMove":
            case "pointerup":
            case "MSPointerUp":
                return a.target.ownerDocument !== document ? [a.originalEvent.screenY, a.originalEvent.screenX, !1] : [a.originalEvent.pageY, a.originalEvent.pageX, !1];
            case "touchstart":
            case "touchmove":
            case "touchend":
                var b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0]
                  , c = a.originalEvent.touches.length || a.originalEvent.changedTouches.length;
                return a.target.ownerDocument !== document ? [b.screenY, b.screenX, 1 < c] : [b.pageY, b.pageX, 1 < c];
            default:
                return [a.pageY, a.pageX, !1]
            }
        }, N = function() {
            function b(a) {
                var b = A.find("iframe");
                b.length && b.css("pointer-events", a ? "auto" : "none")
            }
            function c(a, b, c, d) {
                if (A[0].idleTimer = 233 > m.scrollInertia ? 250 : 0,
                f.attr("id") === u[1]) {
                    var e = "x";
                    a = (f[0].offsetLeft - b + d) * q.scrollRatio.x
                } else
                    e = "y",
                    a = (f[0].offsetTop - a + c) * q.scrollRatio.y;
                X(l, a.toString(), {
                    dir: e,
                    drag: !0
                })
            }
            var f, k, n, l = a(this), q = l.data("mCS"), m = q.opt, e = "mCS_" + q.idx, u = ["mCSB_" + q.idx + "_dragger_vertical", "mCSB_" + q.idx + "_dragger_horizontal"], A = a("#mCSB_" + q.idx + "_container"), r = a("#" + u[0] + ",#" + u[1]), E = m.advanced.releaseDraggableSelectors ? r.add(a(m.advanced.releaseDraggableSelectors)) : r;
            r.bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function(c) {
                if (c.stopImmediatePropagation(),
                c.preventDefault(),
                !c.which || 1 === c.which) {
                    d = !0;
                    h && (document.onselectstart = function() {
                        return !1
                    }
                    );
                    b(!1);
                    ea(l);
                    f = a(this);
                    var e = f.offset()
                      , q = G(c)[0] - e.top;
                    c = G(c)[1] - e.left;
                    var u = f.height() + e.top;
                    e = f.width() + e.left;
                    u > q && 0 < q && e > c && 0 < c && (k = q,
                    n = c);
                    z(f, "active", m.autoExpandScrollbar)
                }
            }).bind("touchmove." + e, function(a) {
                a.stopImmediatePropagation();
                a.preventDefault();
                var b = f.offset()
                  , d = G(a)[0] - b.top;
                a = G(a)[1] - b.left;
                c(k, n, d, a)
            });
            a(document).bind("mousemove." + e + " pointermove." + e + " MSPointerMove." + e, function(a) {
                if (f) {
                    var b = f.offset()
                      , d = G(a)[0] - b.top;
                    a = G(a)[1] - b.left;
                    k !== d && c(k, n, d, a)
                }
            }).add(E).bind("mouseup." + e + " touchend." + e + " pointerup." + e + " MSPointerUp." + e, function(a) {
                f && (z(f, "active", m.autoExpandScrollbar),
                f = null);
                d = !1;
                h && (document.onselectstart = null);
                b(!0)
            })
        }, Q = function() {
            function c(a) {
                if (!pa(a) || d || G(a)[2])
                    return void (b = 0);
                b = 1;
                H = z = 0;
                M.removeClass("mCS_touch_action");
                var c = Q.offset();
                q = G(a)[0] - c.top;
                m = G(a)[1] - c.left;
                ba = [G(a)[0], G(a)[1]]
            }
            function f(a) {
                if (pa(a) && !d && !G(a)[2] && (a.stopImmediatePropagation(),
                !H || z)) {
                    r = ca();
                    var b = N.offset()
                      , c = G(a)[0] - b.top;
                    b = G(a)[1] - b.left;
                    if (fa.push(c),
                    K.push(b),
                    ba[2] = Math.abs(G(a)[0] - ba[0]),
                    ba[3] = Math.abs(G(a)[1] - ba[1]),
                    B.overflowed[0]) {
                        var e = L[0].parent().height() - L[0].height();
                        e = 0 < q - c && c - q > -(e * B.scrollRatio.y) && (2 * ba[3] < ba[2] || "yx" === D.axis)
                    }
                    if (B.overflowed[1]) {
                        var f = L[1].parent().width() - L[1].width();
                        f = 0 < m - b && b - m > -(f * B.scrollRatio.x) && (2 * ba[2] < ba[3] || "yx" === D.axis)
                    }
                    e || f ? (a.preventDefault(),
                    z = 1) : (H = 1,
                    M.addClass("mCS_touch_action"));
                    x = "yx" === D.axis ? [q - c, m - b] : "x" === D.axis ? [null, m - b] : [q - c, null];
                    Q[0].idleTimer = 250;
                    B.overflowed[0] && l(x[0], S, "mcsLinearOut", "y", "all", !0);
                    B.overflowed[1] && l(x[1], S, "mcsLinearOut", "x", O, !0)
                }
            }
            function h(a) {
                if (!pa(a) || d || G(a)[2])
                    return void (b = 0);
                b = 1;
                a.stopImmediatePropagation();
                ea(M);
                A = ca();
                var c = N.offset();
                e = G(a)[0] - c.top;
                u = G(a)[1] - c.left;
                fa = [];
                K = []
            }
            function k(a) {
                if (pa(a) && !d && !G(a)[2]) {
                    a.stopImmediatePropagation();
                    H = z = 0;
                    E = ca();
                    var b = N.offset()
                      , c = G(a)[0] - b.top;
                    b = G(a)[1] - b.left;
                    if (!(30 < E - r)) {
                        F = 1E3 / (E - A);
                        var f = (a = 2.5 > F) ? [fa[fa.length - 2], K[K.length - 2]] : [0, 0];
                        v = a ? [c - f[0], b - f[1]] : [c - e, b - u];
                        c = [Math.abs(v[0]), Math.abs(v[1])];
                        F = a ? [Math.abs(v[0] / 4), Math.abs(v[1] / 4)] : [F, F];
                        a = [Math.abs(Q[0].offsetTop) - v[0] * n(c[0] / F[0], F[0]), Math.abs(Q[0].offsetLeft) - v[1] * n(c[1] / F[1], F[1])];
                        x = "yx" === D.axis ? [a[0], a[1]] : "x" === D.axis ? [null, a[1]] : [a[0], null];
                        y = [4 * c[0] + D.scrollInertia, 4 * c[1] + D.scrollInertia];
                        a = parseInt(D.contentTouchScroll) || 0;
                        x[0] = c[0] > a ? x[0] : 0;
                        x[1] = c[1] > a ? x[1] : 0;
                        B.overflowed[0] && l(x[0], y[0], "mcsEaseOut", "y", O, !1);
                        B.overflowed[1] && l(x[1], y[1], "mcsEaseOut", "x", O, !1)
                    }
                }
            }
            function n(a, b) {
                var c = [1.5 * b, 2 * b, b / 1.5, b / 2];
                return 90 < a ? 4 < b ? c[0] : c[3] : 60 < a ? 3 < b ? c[3] : c[2] : 30 < a ? 8 < b ? c[1] : 6 < b ? c[0] : 4 < b ? b : c[2] : 8 < b ? b : c[3]
            }
            function l(a, b, c, d, e, f) {
                a && X(M, a.toString(), {
                    dur: b,
                    scrollEasing: c,
                    dir: d,
                    overwrite: e,
                    drag: f
                })
            }
            var q, m, e, u, A, r, E, v, F, x, y, z, H, M = a(this), B = M.data("mCS"), D = B.opt, W = "mCS_" + B.idx, N = a("#mCSB_" + B.idx), Q = a("#mCSB_" + B.idx + "_container"), L = [a("#mCSB_" + B.idx + "_dragger_vertical"), a("#mCSB_" + B.idx + "_dragger_horizontal")], fa = [], K = [], S = 0, O = "yx" === D.axis ? "none" : "all", ba = [], U = Q.find("iframe"), R = ["touchstart." + W + " pointerdown." + W + " MSPointerDown." + W, "touchmove." + W + " pointermove." + W + " MSPointerMove." + W, "touchend." + W + " pointerup." + W + " MSPointerUp." + W];
            Q.bind(R[0], function(a) {
                c(a)
            }).bind(R[1], function(a) {
                f(a)
            });
            N.bind(R[0], function(a) {
                h(a)
            }).bind(R[2], function(a) {
                k(a)
            });
            U.length && U.each(function() {
                a(this).load(function() {
                    da(this) && a(this.contentDocument || this.contentWindow.document).bind(R[0], function(a) {
                        c(a);
                        h(a)
                    }).bind(R[1], function(a) {
                        f(a)
                    }).bind(R[2], function(a) {
                        k(a)
                    })
                })
            })
        }, L = function() {
            function c(a, b, c) {
                l.type = c && f ? "stepped" : "stepless";
                l.scrollAmount = 10;
                y(h, a, b, "mcsLinearOut", c ? 60 : null)
            }
            var f, h = a(this), k = h.data("mCS"), n = k.opt, l = k.sequential, q = "mCS_" + k.idx, m = a("#mCSB_" + k.idx + "_container"), e = m.parent();
            m.bind("mousedown." + q, function(a) {
                b || f || (f = 1,
                d = !0)
            }).add(document).bind("mousemove." + q, function(a) {
                if (!b && f && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                    var d = m.offset()
                      , h = G(a)[0] - d.top + m[0].offsetTop;
                    a = G(a)[1] - d.left + m[0].offsetLeft;
                    0 < h && h < e.height() && 0 < a && a < e.width() ? l.step && c("off", null, "stepped") : ("x" !== n.axis && k.overflowed[0] && (0 > h ? c("on", 38) : h > e.height() && c("on", 40)),
                    "y" !== n.axis && k.overflowed[1] && (0 > a ? c("on", 37) : a > e.width() && c("on", 39)))
                }
            }).bind("mouseup." + q, function(a) {
                b || (f && (f = 0,
                c("off", null)),
                d = !1)
            })
        }, R = function() {
            function b(b, k) {
                ea(c);
                var e = c
                  , q = b.target
                  , m = q.nodeName.toLowerCase();
                e = e.data("mCS").opt.mouseWheel.disableOver;
                var u = ["select", "textarea"];
                if (!(-1 < a.inArray(m, e)) || -1 < a.inArray(m, u) && !a(q).is(":focus")) {
                    m = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : h && 100 > b.deltaFactor ? 100 : b.deltaFactor || 100;
                    if ("x" === f.axis || "x" === f.mouseWheel.axis) {
                        q = "x";
                        m = [Math.round(m * d.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount)];
                        m = "auto" !== f.mouseWheel.scrollAmount ? m[1] : m[0] >= n.width() ? .9 * n.width() : m[0];
                        e = Math.abs(a("#mCSB_" + d.idx + "_container")[0].offsetLeft);
                        u = l[1][0].offsetLeft;
                        var A = l[1].parent().width() - l[1].width();
                        k = b.deltaX || b.deltaY || k
                    } else
                        q = "y",
                        m = [Math.round(m * d.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount)],
                        m = "auto" !== f.mouseWheel.scrollAmount ? m[1] : m[0] >= n.height() ? .9 * n.height() : m[0],
                        e = Math.abs(a("#mCSB_" + d.idx + "_container")[0].offsetTop),
                        u = l[0][0].offsetTop,
                        A = l[0].parent().height() - l[0].height(),
                        k = b.deltaY || k;
                    "y" === q && !d.overflowed[0] || "x" === q && !d.overflowed[1] || ((f.mouseWheel.invert || b.webkitDirectionInvertedFromDevice) && (k = -k),
                    f.mouseWheel.normalizeDelta && (k = 0 > k ? -1 : 1),
                    (0 < k && 0 !== u || 0 > k && u !== A || f.mouseWheel.preventDefault) && (b.stopImmediatePropagation(),
                    b.preventDefault()),
                    X(c, (e - k * m).toString(), {
                        dir: q
                    }))
                }
            }
            if (a(this).data("mCS")) {
                var c = a(this)
                  , d = c.data("mCS")
                  , f = d.opt
                  , k = "mCS_" + d.idx
                  , n = a("#mCSB_" + d.idx)
                  , l = [a("#mCSB_" + d.idx + "_dragger_vertical"), a("#mCSB_" + d.idx + "_dragger_horizontal")]
                  , q = a("#mCSB_" + d.idx + "_container").find("iframe");
                q.length && q.each(function() {
                    a(this).load(function() {
                        da(this) && a(this.contentDocument || this.contentWindow.document).bind("mousewheel." + k, function(a, c) {
                            b(a, c)
                        })
                    })
                });
                n.bind("mousewheel." + k, function(a, c) {
                    b(a, c)
                })
            }
        }, da = function(a) {
            var b = null;
            try {
                b = (a.contentDocument || a.contentWindow.document).body.innerHTML
            } catch (aa) {}
            return null !== b
        }, U = function() {
            var b = a(this)
              , c = b.data("mCS")
              , h = "mCS_" + c.idx
              , k = a("#mCSB_" + c.idx + "_container")
              , n = k.parent();
            a(".mCSB_" + c.idx + "_scrollbar ." + f[12]).bind("touchstart." + h + " pointerdown." + h + " MSPointerDown." + h, function(a) {
                d = !0
            }).bind("touchend." + h + " pointerup." + h + " MSPointerUp." + h, function(a) {
                d = !1
            }).bind("click." + h, function(d) {
                if (a(d.target).hasClass(f[12]) || a(d.target).hasClass("mCSB_draggerRail")) {
                    ea(b);
                    var h = a(this)
                      , l = h.find(".mCSB_dragger");
                    if (0 < h.parent(".mCSB_scrollTools_horizontal").length) {
                        if (!c.overflowed[1])
                            return;
                        h = "x";
                        d = d.pageX > l.offset().left ? -1 : 1;
                        d = Math.abs(k[0].offsetLeft) - .9 * d * n.width()
                    } else {
                        if (!c.overflowed[0])
                            return;
                        h = "y";
                        d = d.pageY > l.offset().top ? -1 : 1;
                        d = Math.abs(k[0].offsetTop) - .9 * d * n.height()
                    }
                    X(b, d.toString(), {
                        dir: h,
                        scrollEasing: "mcsEaseInOut"
                    })
                }
            })
        }, la = function() {
            var b = a(this)
              , c = b.data("mCS")
              , d = c.opt
              , f = "mCS_" + c.idx
              , h = a("#mCSB_" + c.idx + "_container")
              , k = h.parent();
            h.bind("focusin." + f, function(c) {
                var f = a(document.activeElement);
                c = h.find(".mCustomScrollBox").length;
                f.is(d.advanced.autoScrollOnFocus) && (ea(b),
                clearTimeout(b[0]._focusTimeout),
                b[0]._focusTimer = c ? 17 * c : 0,
                b[0]._focusTimeout = setTimeout(function() {
                    var a = [K(f)[0], K(f)[1]]
                      , c = [h[0].offsetTop, h[0].offsetLeft];
                    c = [0 <= c[0] + a[0] && c[0] + a[0] < k.height() - f.outerHeight(!1), 0 <= c[1] + a[1] && c[0] + a[1] < k.width() - f.outerWidth(!1)];
                    var n = "yx" !== d.axis || c[0] || c[1] ? "all" : "none";
                    "x" === d.axis || c[0] || X(b, a[0].toString(), {
                        dir: "y",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: n,
                        dur: 0
                    });
                    "y" === d.axis || c[1] || X(b, a[1].toString(), {
                        dir: "x",
                        scrollEasing: "mcsEaseInOut",
                        overwrite: n,
                        dur: 0
                    })
                }, b[0]._focusTimer))
            })
        }, O = function() {
            var b = a(this).data("mCS")
              , c = "mCS_" + b.idx
              , d = a("#mCSB_" + b.idx + "_container").parent();
            d.bind("scroll." + c, function(c) {
                0 === d.scrollTop() && 0 === d.scrollLeft() || a(".mCSB_" + b.idx + "_scrollbar").css("visibility", "hidden")
            })
        }, A = function() {
            var b = a(this)
              , c = b.data("mCS")
              , f = c.opt
              , h = c.sequential
              , k = "mCS_" + c.idx;
            a(".mCSB_" + c.idx + "_scrollbar>a").bind("mousedown." + k + " touchstart." + k + " pointerdown." + k + " MSPointerDown." + k + " mouseup." + k + " touchend." + k + " pointerup." + k + " MSPointerUp." + k + " mouseout." + k + " pointerout." + k + " MSPointerOut." + k + " click." + k, function(k) {
                function n(a, c) {
                    h.scrollAmount = f.snapAmount || f.scrollButtons.scrollAmount;
                    y(b, a, c)
                }
                if (k.preventDefault(),
                !k.which || 1 === k.which) {
                    var l = a(this).attr("class");
                    switch (h.type = f.scrollButtons.scrollType,
                    k.type) {
                    case "mousedown":
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                        if ("stepped" === h.type)
                            break;
                        d = !0;
                        c.tweenRunning = !1;
                        n("on", l);
                        break;
                    case "mouseup":
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseout":
                    case "pointerout":
                    case "MSPointerOut":
                        if ("stepped" === h.type)
                            break;
                        d = !1;
                        h.dir && n("off", l);
                        break;
                    case "click":
                        "stepped" !== h.type || c.tweenRunning || n("on", l)
                    }
                }
            })
        }, F = function() {
            function b(b) {
                function k(a, b) {
                    h.type = f.keyboard.scrollType;
                    h.scrollAmount = f.snapAmount || f.keyboard.scrollAmount;
                    "stepped" === h.type && d.tweenRunning || y(c, a, b)
                }
                switch (b.type) {
                case "blur":
                    d.tweenRunning && h.dir && k("off", null);
                    break;
                case "keydown":
                case "keyup":
                    var n = b.keyCode ? b.keyCode : b.which
                      , m = "on";
                    if ("x" !== f.axis && (38 === n || 40 === n) || "y" !== f.axis && (37 === n || 39 === n))
                        (38 !== n && 40 !== n || d.overflowed[0]) && (37 !== n && 39 !== n || d.overflowed[1]) && ("keyup" === b.type && (m = "off"),
                        a(document.activeElement).is(q) || (b.preventDefault(),
                        b.stopImmediatePropagation(),
                        k(m, n)));
                    else if (33 === n || 34 === n) {
                        if ((d.overflowed[0] || d.overflowed[1]) && (b.preventDefault(),
                        b.stopImmediatePropagation()),
                        "keyup" === b.type)
                            ea(c),
                            n = 34 === n ? -1 : 1,
                            "x" === f.axis || "yx" === f.axis && d.overflowed[1] && !d.overflowed[0] ? (b = "x",
                            n = Math.abs(l[0].offsetLeft) - .9 * n * e.width()) : (b = "y",
                            n = Math.abs(l[0].offsetTop) - .9 * n * e.height()),
                            X(c, n.toString(), {
                                dir: b,
                                scrollEasing: "mcsEaseInOut"
                            })
                    } else
                        35 !== n && 36 !== n || a(document.activeElement).is(q) || ((d.overflowed[0] || d.overflowed[1]) && (b.preventDefault(),
                        b.stopImmediatePropagation()),
                        "keyup" !== b.type) || ("x" === f.axis || "yx" === f.axis && d.overflowed[1] && !d.overflowed[0] ? (b = "x",
                        n = 35 === n ? Math.abs(e.width() - l.outerWidth(!1)) : 0) : (b = "y",
                        n = 35 === n ? Math.abs(e.height() - l.outerHeight(!1)) : 0),
                        X(c, n.toString(), {
                            dir: b,
                            scrollEasing: "mcsEaseInOut"
                        }))
                }
            }
            var c = a(this)
              , d = c.data("mCS")
              , f = d.opt
              , h = d.sequential
              , k = "mCS_" + d.idx
              , n = a("#mCSB_" + d.idx)
              , l = a("#mCSB_" + d.idx + "_container")
              , e = l.parent()
              , q = "input,textarea,select,datalist,keygen,[contenteditable='true']"
              , m = l.find("iframe")
              , u = ["blur." + k + " keydown." + k + " keyup." + k];
            m.length && m.each(function() {
                a(this).load(function() {
                    da(this) && a(this.contentDocument || this.contentWindow.document).bind(u[0], function(a) {
                        b(a)
                    })
                })
            });
            n.attr("tabindex", "0").bind(u[0], function(a) {
                b(a)
            })
        }, y = function(b, c, d, h, k) {
            function n(a) {
                var c = "stepped" !== e.type
                  , d = k ? k : a ? c ? A / 1.5 : r : 1E3 / 60
                  , f = a ? c ? 7.5 : 40 : 2.5
                  , q = [Math.abs(m[0].offsetTop), Math.abs(m[0].offsetLeft)]
                  , u = [10 < l.scrollRatio.y ? 10 : l.scrollRatio.y, 10 < l.scrollRatio.x ? 10 : l.scrollRatio.x];
                f = "x" === e.dir[0] ? q[1] + e.dir[1] * u[1] * f : q[0] + e.dir[1] * u[0] * f;
                u = "x" === e.dir[0] ? q[1] + e.dir[1] * parseInt(e.scrollAmount) : q[0] + e.dir[1] * parseInt(e.scrollAmount);
                f = "auto" !== e.scrollAmount ? u : f;
                c = h ? h : a ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear";
                return a && 17 > d && (f = "x" === e.dir[0] ? q[1] : q[0]),
                X(b, f.toString(), {
                    dir: e.dir[0],
                    scrollEasing: c,
                    dur: d,
                    onComplete: a ? !0 : !1
                }),
                a ? void (e.dir = !1) : (clearTimeout(e.step),
                void (e.step = setTimeout(function() {
                    n()
                }, d)))
            }
            var l = b.data("mCS")
              , q = l.opt
              , e = l.sequential
              , m = a("#mCSB_" + l.idx + "_container")
              , u = "stepped" === e.type ? !0 : !1
              , A = 26 > q.scrollInertia ? 26 : q.scrollInertia
              , r = 1 > q.scrollInertia ? 17 : q.scrollInertia;
            switch (c) {
            case "on":
                if (e.dir = [d === f[16] || d === f[15] || 39 === d || 37 === d ? "x" : "y", d === f[13] || d === f[15] || 38 === d || 37 === d ? -1 : 1],
                ea(b),
                ha(d) && "stepped" === e.type)
                    break;
                n(u);
                break;
            case "off":
                clearTimeout(e.step),
                S(e, "step"),
                ea(b),
                (u || l.tweenRunning && e.dir) && n(!0)
            }
        }, M = function(b) {
            var c = a(this).data("mCS").opt
              , d = [];
            return "function" == typeof b && (b = b()),
            b instanceof Array ? d = 1 < b.length ? [b[0], b[1]] : "x" === c.axis ? [null, b[0]] : [b[0], null] : (d[0] = b.y ? b.y : b.x || "x" === c.axis ? null : b,
            d[1] = b.x ? b.x : b.y || "y" === c.axis ? null : b),
            "function" == typeof d[0] && (d[0] = d[0]()),
            "function" == typeof d[1] && (d[1] = d[1]()),
            d
        }, W = function(b, c) {
            if (null != b && "undefined" != typeof b) {
                var d = a(this)
                  , f = d.data("mCS")
                  , h = f.opt;
                f = a("#mCSB_" + f.idx + "_container");
                var k = f.parent()
                  , n = typeof b;
                c || (c = "x" === h.axis ? "x" : "y");
                h = "x" === c ? f.outerWidth(!1) : f.outerHeight(!1);
                var l = "x" === c ? f[0].offsetLeft : f[0].offsetTop
                  , e = "x" === c ? "left" : "top";
                switch (n) {
                case "function":
                    return b();
                case "object":
                    b = b.jquery ? b : a(b);
                    if (!b.length)
                        break;
                    return "x" === c ? K(b)[1] : K(b)[0];
                case "string":
                case "number":
                    return ha(b) ? Math.abs(b) : -1 !== b.indexOf("%") ? Math.abs(h * parseInt(b) / 100) : -1 !== b.indexOf("-=") ? Math.abs(l - parseInt(b.split("-=")[1])) : -1 !== b.indexOf("+=") ? (c = l + parseInt(b.split("+=")[1]),
                    0 <= c ? 0 : Math.abs(c)) : -1 !== b.indexOf("px") && ha(b.split("px")[0]) ? Math.abs(b.split("px")[0]) : "top" === b || "left" === b ? 0 : "bottom" === b ? Math.abs(k.height() - f.outerHeight(!1)) : "right" === b ? Math.abs(k.width() - f.outerWidth(!1)) : "first" === b || "last" === b ? (b = f.find(":" + b),
                    "x" === c ? K(b)[1] : K(b)[0]) : a(b).length ? "x" === c ? K(a(b))[1] : K(a(b))[0] : (f.css(e, b),
                    void q.update.call(null, d[0]))
                }
            }
        }, fa = function(b) {
            function c() {
                return clearTimeout(u[0].autoUpdate),
                0 === l.parents("html").length ? void (l = null) : void (u[0].autoUpdate = setTimeout(function() {
                    return e.advanced.updateOnSelectorChange && (A = k(),
                    A !== y) ? (n(3),
                    void (y = A)) : (e.advanced.updateOnContentResize && (r = [u.outerHeight(!1), u.outerWidth(!1), v.height(), v.width(), x()[0], x()[1]],
                    (r[0] !== z[0] || r[1] !== z[1] || r[2] !== z[2] || r[3] !== z[3] || r[4] !== z[4] || r[5] !== z[5]) && (n(r[0] !== z[0] || r[1] !== z[1]),
                    z = r)),
                    e.advanced.updateOnImageLoad && (E = d(),
                    E !== H && (u.find("img").each(function() {
                        h(this)
                    }),
                    H = E)),
                    void ((e.advanced.updateOnSelectorChange || e.advanced.updateOnContentResize || e.advanced.updateOnImageLoad) && c()))
                }, e.advanced.autoUpdateTimeout))
            }
            function d() {
                var a = 0;
                return e.advanced.updateOnImageLoad && (a = u.find("img").length),
                a
            }
            function h(b) {
                if (a(b).hasClass(f[2]))
                    return void n();
                var c = new Image;
                c.onload = function(a, b) {
                    return function() {
                        return b.apply(a, arguments)
                    }
                }(c, function() {
                    this.onload = null;
                    a(b).addClass(f[2]);
                    n(2)
                });
                c.src = b.src
            }
            function k() {
                !0 === e.advanced.updateOnSelectorChange && (e.advanced.updateOnSelectorChange = "*");
                var b = 0
                  , c = u.find(e.advanced.updateOnSelectorChange);
                return e.advanced.updateOnSelectorChange && 0 < c.length && c.each(function() {
                    b += a(this).height() + a(this).width()
                }),
                b
            }
            function n(a) {
                clearTimeout(u[0].autoUpdate);
                q.update.call(null, l[0], a)
            }
            var l = a(this)
              , m = l.data("mCS")
              , e = m.opt
              , u = a("#mCSB_" + m.idx + "_container");
            if (b)
                return clearTimeout(u[0].autoUpdate),
                void S(u[0], "autoUpdate");
            var A, r, E, v = u.parent(), F = [a("#mCSB_" + m.idx + "_scrollbar_vertical"), a("#mCSB_" + m.idx + "_scrollbar_horizontal")], x = function() {
                return [F[0].is(":visible") ? F[0].outerHeight(!0) : 0, F[1].is(":visible") ? F[1].outerWidth(!0) : 0]
            }, y = k(), z = [u.outerHeight(!1), u.outerWidth(!1), v.height(), v.width(), x()[0], x()[1]], H = d();
            c()
        }, ba = function(a, b, c) {
            return Math.round(a / b) * b - c
        }, ea = function(b) {
            b = b.data("mCS");
            a("#mCSB_" + b.idx + "_container,#mCSB_" + b.idx + "_container_wrapper,#mCSB_" + b.idx + "_dragger_vertical,#mCSB_" + b.idx + "_dragger_horizontal").each(function() {
                this._mTween || (this._mTween = {
                    top: {},
                    left: {}
                });
                for (var a = ["top", "left"], b = 0; b < a.length; b++) {
                    var c = a[b];
                    this._mTween[c].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(this._mTween[c].id) : clearTimeout(this._mTween[c].id),
                    this._mTween[c].id = null,
                    this._mTween[c].stop = 1)
                }
            })
        }, X = function(b, c, d) {
            function f(a) {
                return k && n.callbacks[a] && "function" == typeof n.callbacks[a]
            }
            function h() {
                var a = [q[0].offsetTop, q[0].offsetLeft]
                  , c = [r[0].offsetTop, r[0].offsetLeft]
                  , f = [q.outerHeight(!1), q.outerWidth(!1)]
                  , h = [e.height(), e.width()];
                b[0].mcs = {
                    content: q,
                    top: a[0],
                    left: a[1],
                    draggerTop: c[0],
                    draggerLeft: c[1],
                    topPct: Math.round(100 * Math.abs(a[0]) / (Math.abs(f[0]) - h[0])),
                    leftPct: Math.round(100 * Math.abs(a[1]) / (Math.abs(f[1]) - h[1])),
                    direction: d.dir
                }
            }
            var k = b.data("mCS")
              , n = k.opt;
            d = a.extend({
                trigger: "internal",
                dir: "y",
                scrollEasing: "mcsEaseOut",
                drag: !1,
                dur: n.scrollInertia,
                overwrite: "all",
                callbacks: !0,
                onStart: !0,
                onUpdate: !0,
                onComplete: !0
            }, d);
            var l = [d.dur, d.drag ? 0 : d.dur]
              , e = a("#mCSB_" + k.idx)
              , q = a("#mCSB_" + k.idx + "_container")
              , m = q.parent()
              , u = n.callbacks.onTotalScrollOffset ? M.call(b, n.callbacks.onTotalScrollOffset) : [0, 0]
              , A = n.callbacks.onTotalScrollBackOffset ? M.call(b, n.callbacks.onTotalScrollBackOffset) : [0, 0];
            if (k.trigger = d.trigger,
            (0 !== m.scrollTop() || 0 !== m.scrollLeft()) && (a(".mCSB_" + k.idx + "_scrollbar").css("visibility", "visible"),
            m.scrollTop(0).scrollLeft(0)),
            "_resetY" !== c || k.contentReset.y || (f("onOverflowYNone") && n.callbacks.onOverflowYNone.call(b[0]),
            k.contentReset.y = 1),
            "_resetX" !== c || k.contentReset.x || (f("onOverflowXNone") && n.callbacks.onOverflowXNone.call(b[0]),
            k.contentReset.x = 1),
            "_resetY" !== c && "_resetX" !== c) {
                switch (!k.contentReset.y && b[0].mcs || !k.overflowed[0] || (f("onOverflowY") && n.callbacks.onOverflowY.call(b[0]),
                k.contentReset.x = null),
                !k.contentReset.x && b[0].mcs || !k.overflowed[1] || (f("onOverflowX") && n.callbacks.onOverflowX.call(b[0]),
                k.contentReset.x = null),
                n.snapAmount && (c = ba(c, n.snapAmount, n.snapOffset)),
                d.dir) {
                case "x":
                    var r = a("#mCSB_" + k.idx + "_dragger_horizontal")
                      , E = "left"
                      , v = q[0].offsetLeft
                      , F = [e.width() - q.outerWidth(!1), r.parent().width() - r.width()]
                      , x = [c, 0 === c ? 0 : c / k.scrollRatio.x]
                      , y = u[1]
                      , H = A[1]
                      , B = 0 < y ? y / k.scrollRatio.x : 0
                      , G = 0 < H ? H / k.scrollRatio.x : 0;
                    break;
                case "y":
                    r = a("#mCSB_" + k.idx + "_dragger_vertical"),
                    E = "top",
                    v = q[0].offsetTop,
                    F = [e.height() - q.outerHeight(!1), r.parent().height() - r.height()],
                    x = [c, 0 === c ? 0 : c / k.scrollRatio.y],
                    y = u[0],
                    H = A[0],
                    B = 0 < y ? y / k.scrollRatio.y : 0,
                    G = 0 < H ? H / k.scrollRatio.y : 0
                }
                0 > x[1] || 0 === x[0] && 0 === x[1] ? x = [0, 0] : x[1] >= F[1] ? x = [F[0], F[1]] : x[0] = -x[0];
                b[0].mcs || (h(),
                f("onInit") && n.callbacks.onInit.call(b[0]));
                clearTimeout(q[0].onCompleteTimeout);
                !k.tweenRunning && (0 === v && 0 <= x[0] || v === F[0] && x[0] <= F[0]) || (oa(r[0], E, Math.round(x[1]), l[1], d.scrollEasing),
                oa(q[0], E, Math.round(x[0]), l[0], d.scrollEasing, d.overwrite, {
                    onStart: function() {
                        d.callbacks && d.onStart && !k.tweenRunning && (f("onScrollStart") && (h(),
                        n.callbacks.onScrollStart.call(b[0])),
                        k.tweenRunning = !0,
                        z(r),
                        k.cbOffsets = [n.callbacks.alwaysTriggerOffsets || v >= F[0] + y, n.callbacks.alwaysTriggerOffsets || -H >= v])
                    },
                    onUpdate: function() {
                        d.callbacks && d.onUpdate && f("whileScrolling") && (h(),
                        n.callbacks.whileScrolling.call(b[0]))
                    },
                    onComplete: function() {
                        d.callbacks && d.onComplete && ("yx" === n.axis && clearTimeout(q[0].onCompleteTimeout),
                        q[0].onCompleteTimeout = setTimeout(function() {
                            f("onScroll") && (h(),
                            n.callbacks.onScroll.call(b[0]));
                            f("onTotalScroll") && x[1] >= F[1] - B && k.cbOffsets[0] && (h(),
                            n.callbacks.onTotalScroll.call(b[0]));
                            f("onTotalScrollBack") && x[1] <= G && k.cbOffsets[1] && (h(),
                            n.callbacks.onTotalScrollBack.call(b[0]));
                            k.tweenRunning = !1;
                            q[0].idleTimer = 0;
                            z(r, "hide")
                        }, q[0].idleTimer || 0))
                    }
                }))
            }
        }, oa = function(a, b, c, d, f, h, k) {
            function n() {
                y.stop || (v || u.call(),
                v = ca() - E,
                e(),
                v >= y.time && (y.time = v > y.time ? v + q - (v - y.time) : v + q - 1,
                y.time < v + 1 && (y.time = v + 1)),
                y.time < d ? y.id = m(n) : r.call())
            }
            function e() {
                0 < d ? (y.currVal = l(y.time, x, z, d, f),
                F[b] = Math.round(y.currVal) + "px") : F[b] = c + "px";
                A.call()
            }
            function l(a, b, c, d, e) {
                switch (e) {
                case "linear":
                case "mcsLinear":
                    return c * a / d + b;
                case "mcsLinearOut":
                    return a /= d,
                    a--,
                    c * Math.sqrt(1 - a * a) + b;
                case "easeInOutSmooth":
                    return a /= d / 2,
                    1 > a ? c / 2 * a * a + b : (a--,
                    -c / 2 * (a * (a - 2) - 1) + b);
                case "easeInOutStrong":
                    return a /= d / 2,
                    1 > a ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : (a--,
                    c / 2 * (-Math.pow(2, -10 * a) + 2) + b);
                case "easeInOut":
                case "mcsEaseInOut":
                    return a /= d / 2,
                    1 > a ? c / 2 * a * a * a + b : (a -= 2,
                    c / 2 * (a * a * a + 2) + b);
                case "easeOutSmooth":
                    return a /= d,
                    a--,
                    -c * (a * a * a * a - 1) + b;
                case "easeOutStrong":
                    return c * (-Math.pow(2, -10 * a / d) + 1) + b;
                default:
                    return d = (a /= d) * a,
                    e = d * a,
                    b + c * (.499999999999997 * e * d + -2.5 * d * d + 5.5 * e + -6.5 * d + 4 * a)
                }
            }
            a._mTween || (a._mTween = {
                top: {},
                left: {}
            });
            var q, m;
            k = k || {};
            var u = k.onStart || function() {}
              , A = k.onUpdate || function() {}
              , r = k.onComplete || function() {}
              , E = ca()
              , v = 0
              , x = a.offsetTop
              , F = a.style
              , y = a._mTween[b];
            "left" === b && (x = a.offsetLeft);
            var z = c - x;
            y.stop = 0;
            "none" !== h && null != y.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(y.id) : clearTimeout(y.id),
            y.id = null);
            (function() {
                q = 1E3 / 60;
                y.time = v + q;
                m = window.requestAnimationFrame ? window.requestAnimationFrame : function(a) {
                    return e(),
                    setTimeout(a, .01)
                }
                ;
                y.id = m(n)
            }
            )()
        }, ca = function() {
            return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
        }, S = function(a, b) {
            try {
                delete a[b]
            } catch (aa) {
                a[b] = null
            }
        }, pa = function(a) {
            a = a.originalEvent.pointerType;
            return !(a && "touch" !== a && 2 !== a)
        }, ha = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }, K = function(a) {
            var b = a.parents(".mCSB_container");
            return [a.offset().top - b.offset().top, a.offset().left - b.offset().left]
        };
        a.fn.mCustomScrollbar = function(b) {
            return q[b] ? q[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : q.init.apply(this, arguments)
        }
        ;
        a.mCustomScrollbar = function(b) {
            return q[b] ? q[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : q.init.apply(this, arguments)
        }
        ;
        a.mCustomScrollbar.defaults = m;
        window.mCustomScrollbar = !0;
        a(window).load(function() {
            a(".mCustomScrollbar").mCustomScrollbar();
            a.extend(a.expr[":"], {
                mcsInView: a.expr[":"].mcsInView || function(b) {
                    var c, d;
                    b = a(b);
                    var f = b.parents(".mCSB_container");
                    if (f.length)
                        return c = f.parent(),
                        d = [f[0].offsetTop, f[0].offsetLeft],
                        0 <= d[0] + K(b)[0] && d[0] + K(b)[0] < c.height() - b.outerHeight(!1) && 0 <= d[1] + K(b)[1] && d[1] + K(b)[1] < c.width() - b.outerWidth(!1)
                }
                ,
                mcsOverflow: a.expr[":"].mcsOverflow || function(b) {
                    if (b = a(b).data("mCS"))
                        return b.overflowed[0] || b.overflowed[1]
                }
            })
        })
    })
});
(function() {
    var a = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }
      , b = [].indexOf || function(a) {
        for (var b = 0, d = this.length; d > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    var m = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c;
            for (c in b) {
                var d = b[c];
                null == a[c] && (a[c] = d)
            }
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }();
    var l = this.WeakMap || this.MozWeakMap || (l = function() {
        function a() {
            this.keys = [];
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d;
            var f = this.keys;
            var h = c = 0;
            for (d = f.length; d > c; h = ++c)
                if (b = f[h],
                b === a)
                    return this.values[h]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, f;
            var h = this.keys;
            var k = d = 0;
            for (f = h.length; f > d; k = ++d)
                if (c = h[k],
                c === a)
                    return void (this.values[k] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }());
    var k = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (k = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser.");
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }());
    var h = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var f;
            return "float" === b && (b = "styleFloat"),
            d.test(b) && b.replace(d, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (f = a.currentStyle) ? f[b] : void 0) || null
        }
        ,
        this
    }
    ;
    var d = /(\-([a-z]){1})/g;
    this.WOW = function() {
        function d(b) {
            null == b && (b = {});
            this.scrollCallback = a(this.scrollCallback, this);
            this.scrollHandler = a(this.scrollHandler, this);
            this.start = a(this.start, this);
            this.scrolled = !0;
            this.config = this.util().extend(b, this.defaults);
            this.animationNameCache = new l
        }
        return d.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        },
        d.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        d.prototype.start = function() {
            var a;
            if (this.stopped = !1,
            this.boxes = function() {
                var a;
                var b = this.element.querySelectorAll("." + this.config.boxClass);
                var c = [];
                var f = 0;
                for (a = b.length; a > f; f++)
                    d = b[f],
                    c.push(d);
                return c
            }
            .call(this),
            this.all = function() {
                var a;
                var b = this.boxes;
                var c = [];
                var f = 0;
                for (a = b.length; a > f; f++)
                    d = b[f],
                    c.push(d);
                return c
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else {
                    var b = this.boxes;
                    var c = 0;
                    for (a = b.length; a > c; c++) {
                        var d = b[c];
                        this.applyStyle(d, !0)
                    }
                    this.util().addEvent(window, "scroll", this.scrollHandler);
                    this.util().addEvent(window, "resize", this.scrollHandler);
                    this.interval = setInterval(this.scrollCallback, 50)
                }
            return this.config.live ? (new k(function(a) {
                return function(b) {
                    var c, d;
                    var f = [];
                    var h = 0;
                    for (d = b.length; d > h; h++) {
                        var k = b[h];
                        f.push(function() {
                            var a;
                            var b = k.addedNodes || [];
                            var d = [];
                            var f = 0;
                            for (a = b.length; a > f; f++)
                                c = b[f],
                                d.push(this.doSync(c));
                            return d
                        }
                        .call(a))
                    }
                    return f
                }
            }(this))).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        d.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        d.prototype.sync = function() {
            return k.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        d.prototype.doSync = function(a) {
            var d;
            if (!this.stopped && (null == a && (a = this.element),
            1 === a.nodeType)) {
                a = a.parentNode || a;
                var c = a.querySelectorAll("." + this.config.boxClass);
                var f = [];
                var h = 0;
                for (d = c.length; d > h; h++)
                    a = c[h],
                    0 > b.call(this.all, a) ? (this.applyStyle(a, !0),
                    this.boxes.push(a),
                    this.all.push(a),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        d.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = "" + a.className + " " + this.config.animateClass
        }
        ,
        d.prototype.applyStyle = function(a, b) {
            var c, d, f;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            f = a.getAttribute("data-wow-iteration"),
            this.animate(function(h) {
                return function() {
                    return h.customStyle(a, b, d, c, f)
                }
            }(this))
        }
        ,
        d.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        d.prototype.resetStyle = function() {
            var a;
            var b = this.boxes;
            var c = [];
            var d = 0;
            for (a = b.length; a > d; d++) {
                var f = b[d];
                c.push(f.setAttribute("style", "visibility: visible;"))
            }
            return c
        }
        ,
        d.prototype.customStyle = function(a, b, c, d, f) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            f && this.vendorSet(a.style, {
                animationIterationCount: f
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        d.prototype.vendors = ["moz", "webkit"],
        d.prototype.vendorSet = function(a, b) {
            var c, d;
            var f = [];
            for (c in b) {
                var h = b[c];
                a["" + c] = h;
                f.push(function() {
                    var b;
                    var f = this.vendors;
                    var k = [];
                    var n = 0;
                    for (b = f.length; b > n; n++)
                        d = f[n],
                        k.push(a["" + d + c.charAt(0).toUpperCase() + c.substr(1)] = h);
                    return k
                }
                .call(this))
            }
            return f
        }
        ,
        d.prototype.vendorCSS = function(a, b) {
            var c;
            var d = h(a);
            a = d.getPropertyCSSValue(b);
            var f = this.vendors;
            var k = 0;
            for (c = f.length; c > k; k++) {
                var l = f[k];
                a = a || d.getPropertyCSSValue("-" + l + "-" + b)
            }
            return a
        }
        ,
        d.prototype.animationName = function(a) {
            try {
                var b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = h(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        d.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        d.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        d.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        d.prototype.scrollCallback = function() {
            var a;
            if (!(a = !this.scrolled)) {
                this.scrolled = !1;
                var b;
                var c = this.boxes;
                var d = [];
                var f = 0;
                for (b = c.length; b > f; f++)
                    (a = c[f]) && (this.isVisible(a) ? this.show(a) : d.push(a));
                a = (this.boxes = d,
                this.boxes.length || this.config.live)
            }
            return a ? void 0 : this.stop()
        }
        ,
        d.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        d.prototype.isVisible = function(a) {
            var b, c, d, f, h;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            h = window.pageYOffset,
            f = h + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            f >= d && b >= h
        }
        ,
        d.prototype.util = function() {
            return null != this._util ? this._util : this._util = new m
        }
        ,
        d.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        d
    }()
}
).call(this);
!function(a) {
    function b() {}
    function m(a) {
        function h(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            }
            )
        }
        function d(b, d) {
            a.fn[b] = function(c) {
                if ("string" == typeof c) {
                    for (var h = l.call(arguments, 1), k = 0, m = this.length; m > k; k++) {
                        var q = a.data(this[k], b);
                        if (q)
                            if (a.isFunction(q[c]) && "_" !== c.charAt(0)) {
                                if (q = q[c].apply(q, h),
                                void 0 !== q)
                                    return q
                            } else
                                f("no such method '" + c + "' for " + b + " instance");
                        else
                            f("cannot call methods on " + b + " prior to initialization; attempted to call '" + c + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var f = a.data(this, b);
                    f ? (f.option(c),
                    f._init()) : (f = new d(this,c),
                    a.data(this, b, f))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            }
            ;
            return a.bridget = function(a, b) {
                h(b);
                d(a, b)
            }
            ,
            a.bridget
        }
    }
    var l = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], m) : m("object" == typeof exports ? require("jquery") : a.jQuery)
}(window);
(function(a) {
    function b(b) {
        var d = a.event;
        return d.target = d.target || d.srcElement || b,
        d
    }
    var m = document.documentElement
      , l = function() {};
    m.addEventListener ? l = function(a, b, f) {
        a.addEventListener(b, f, !1)
    }
    : m.attachEvent && (l = function(a, d, f) {
        a[d + f] = f.handleEvent ? function() {
            var d = b(a);
            f.handleEvent.call(f, d)
        }
        : function() {
            var d = b(a);
            f.call(a, d)
        }
        ;
        a.attachEvent("on" + d, a[d + f])
    }
    );
    var k = function() {};
    m.removeEventListener ? k = function(a, b, f) {
        a.removeEventListener(b, f, !1)
    }
    : m.detachEvent && (k = function(a, b, f) {
        a.detachEvent("on" + b, a[b + f]);
        try {
            delete a[b + f]
        } catch (q) {
            a[b + f] = void 0
        }
    }
    );
    m = {
        bind: l,
        unbind: k
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", m) : "object" == typeof exports ? module.exports = m : a.eventie = m
}
)(window);
(function() {
    function a() {}
    function b(a, b) {
        for (var d = a.length; d--; )
            if (a[d].listener === b)
                return d;
        return -1
    }
    function m(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var l = a.prototype
      , k = this
      , h = k.EventEmitter;
    l.getListeners = function(a) {
        var b, d = this._getEvents();
        if (a instanceof RegExp) {
            var h = {};
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && (h[b] = d[b])
        } else
            h = d[a] || (d[a] = []);
        return h
    }
    ;
    l.flattenListeners = function(a) {
        var b, d = [];
        for (b = 0; b < a.length; b += 1)
            d.push(a[b].listener);
        return d
    }
    ;
    l.getListenersAsObject = function(a) {
        var b, d = this.getListeners(a);
        return d instanceof Array && (b = {},
        b[a] = d),
        b || d
    }
    ;
    l.addListener = function(a, f) {
        var d;
        a = this.getListenersAsObject(a);
        var h = "object" == typeof f;
        for (d in a)
            a.hasOwnProperty(d) && -1 === b(a[d], f) && a[d].push(h ? f : {
                listener: f,
                once: !1
            });
        return this
    }
    ;
    l.on = m("addListener");
    l.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }
    ;
    l.once = m("addOnceListener");
    l.defineEvent = function(a) {
        return this.getListeners(a),
        this
    }
    ;
    l.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }
    ;
    l.removeListener = function(a, f) {
        var d, h;
        a = this.getListenersAsObject(a);
        for (h in a)
            a.hasOwnProperty(h) && (d = b(a[h], f),
            -1 !== d && a[h].splice(d, 1));
        return this
    }
    ;
    l.off = m("removeListener");
    l.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }
    ;
    l.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }
    ;
    l.manipulateListeners = function(a, b, h) {
        var d, c, f = a ? this.removeListener : this.addListener;
        a = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = h.length; d--; )
                f.call(this, b, h[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (c = b[d]) && ("function" == typeof c ? f.call(this, d, c) : a.call(this, d, c));
        return this
    }
    ;
    l.removeEvent = function(a) {
        var b, d = typeof a, h = this._getEvents();
        if ("string" === d)
            delete h[a];
        else if (a instanceof RegExp)
            for (b in h)
                h.hasOwnProperty(b) && a.test(b) && delete h[b];
        else
            delete this._events;
        return this
    }
    ;
    l.removeAllListeners = m("removeEvent");
    l.emitEvent = function(a, b) {
        var d, f, c = this.getListenersAsObject(a);
        for (f in c)
            if (c.hasOwnProperty(f))
                for (d = c[f].length; d--; ) {
                    var h = c[f][d];
                    !0 === h.once && this.removeListener(a, h.listener);
                    var k = h.listener.apply(this, b || []);
                    k === this._getOnceReturnValue() && this.removeListener(a, h.listener)
                }
        return this
    }
    ;
    l.trigger = m("emitEvent");
    l.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }
    ;
    l.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    }
    ;
    l._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ;
    l._getEvents = function() {
        return this._events || (this._events = {})
    }
    ;
    a.noConflict = function() {
        return k.EventEmitter = h,
        a
    }
    ;
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : k.EventEmitter = a
}
).call(this);
(function(a) {
    function b(a) {
        if (a) {
            if ("string" == typeof l[a])
                return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, d = 0, f = m.length; f > d; d++)
                if (b = m[d] + a,
                "string" == typeof l[b])
                    return b
        }
    }
    var m = ["Webkit", "Moz", "ms", "Ms", "O"]
      , l = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}
)(window);
(function(a) {
    function b(a) {
        var b = parseFloat(a);
        return -1 === a.indexOf("%") && !isNaN(b) && b
    }
    function m() {}
    function l(d) {
        function f() {
            if (!v) {
                v = !0;
                var f = a.getComputedStyle;
                if (l = function() {
                    var a = f ? function(a) {
                        return f(a, null)
                    }
                    : function(a) {
                        return a.currentStyle
                    }
                    ;
                    return function(b) {
                        b = a(b);
                        return b || k("Style returned " + b + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                        b
                    }
                }(),
                m = d("boxSizing")) {
                    var h = document.createElement("div");
                    h.style.width = "200px";
                    h.style.padding = "1px 2px 3px 4px";
                    h.style.borderStyle = "solid";
                    h.style.borderWidth = "1px 2px 3px 4px";
                    h.style[m] = "border-box";
                    var q = document.body || document.documentElement;
                    q.appendChild(h);
                    var r = l(h);
                    c = 200 === b(r.width);
                    q.removeChild(h)
                }
            }
        }
        var l, m, c, v = !1;
        return function(d) {
            if (f(),
            "string" == typeof d && (d = document.querySelector(d)),
            d && "object" == typeof d && d.nodeType) {
                var k = l(d);
                if ("none" === k.display) {
                    var n = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    };
                    k = 0;
                    for (var q = h.length; q > k; k++)
                        n[h[k]] = 0;
                    return n
                }
                n = {};
                n.width = d.offsetWidth;
                n.height = d.offsetHeight;
                q = n.isBorderBox = !(!m || !k[m] || "border-box" !== k[m]);
                for (var v = 0, r = h.length; r > v; v++) {
                    var B = h[v]
                      , D = k[B];
                    var G = d
                      , N = D;
                    if (a.getComputedStyle || -1 === N.indexOf("%"))
                        D = N;
                    else {
                        D = G.style;
                        var Q = D.left
                          , L = G.runtimeStyle
                          , R = L && L.left;
                        D = (R && (L.left = G.currentStyle.left),
                        D.left = N,
                        N = D.pixelLeft,
                        D.left = Q,
                        R && (L.left = R),
                        N)
                    }
                    G = parseFloat(D);
                    n[B] = isNaN(G) ? 0 : G
                }
                d = n.paddingLeft + n.paddingRight;
                v = n.paddingTop + n.paddingBottom;
                r = n.marginLeft + n.marginRight;
                B = n.marginTop + n.marginBottom;
                G = n.borderLeftWidth + n.borderRightWidth;
                N = n.borderTopWidth + n.borderBottomWidth;
                q = q && c;
                D = b(k.width);
                !1 !== D && (n.width = D + (q ? 0 : d + G));
                k = b(k.height);
                return !1 !== k && (n.height = k + (q ? 0 : v + N)),
                n.innerWidth = n.width - (d + G),
                n.innerHeight = n.height - (v + N),
                n.outerWidth = n.width + r,
                n.outerHeight = n.height + B,
                n
            }
        }
    }
    var k = "undefined" == typeof console ? m : function(a) {
        console.error(a)
    }
      , h = "paddingLeft paddingRight paddingTop paddingBottom marginLeft marginRight marginTop marginBottom borderLeftWidth borderRightWidth borderTopWidth borderBottomWidth".split(" ");
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], l) : "object" == typeof exports ? module.exports = l(require("desandro-get-style-property")) : a.getSize = l(a.getStyleProperty)
}
)(window);
(function(a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : d.push(a))
    }
    function m(a) {
        a = "readystatechange" === a.type && "complete" !== h.readyState;
        b.isReady || a || l()
    }
    function l() {
        b.isReady = !0;
        for (var a = 0, h = d.length; h > a; a++)
            (0,
            d[a])()
    }
    function k(d) {
        return "complete" === h.readyState ? l() : (d.bind(h, "DOMContentLoaded", m),
        d.bind(h, "readystatechange", m),
        d.bind(a, "load", m)),
        b
    }
    var h = a.document
      , d = [];
    b.isReady = !1;
    "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], k) : "object" == typeof exports ? module.exports = k(require("eventie")) : a.docReady = k(a.eventie)
}
)(window);
(function(a) {
    function b(a, b) {
        return a[k](b)
    }
    function m(a, b) {
        a.parentNode || document.createDocumentFragment().appendChild(a);
        b = a.parentNode.querySelectorAll(b);
        for (var d = 0, c = b.length; c > d; d++)
            if (b[d] === a)
                return !0;
        return !1
    }
    function l(a, d) {
        a.parentNode || document.createDocumentFragment().appendChild(a);
        return b(a, d)
    }
    var k = function() {
        if (a.matches)
            return "matches";
        if (a.matchesSelector)
            return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], d = 0, h = b.length; h > d; d++) {
            var c = b[d] + "MatchesSelector";
            if (a[c])
                return c
        }
    }();
    if (k) {
        var h = document.createElement("div");
        var d = b(h, "div") ? b : l
    } else
        d = m;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return d
    }) : "object" == typeof exports ? module.exports = d : window.matchesSelector = d
}
)(Element.prototype);
(function(a, b) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(m, l) {
        return b(a, m, l)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}
)(window, function(a, b, m) {
    var l = {
        extend: function(a, b) {
            for (var d in b)
                a[d] = b[d];
            return a
        },
        modulo: function(a, b) {
            return (a % b + b) % b
        }
    }
      , k = Object.prototype.toString;
    l.isArray = function(a) {
        return "[object Array]" == k.call(a)
    }
    ;
    l.makeArray = function(a) {
        var b = [];
        if (l.isArray(a))
            b = a;
        else if (a && "number" == typeof a.length)
            for (var d = 0, h = a.length; h > d; d++)
                b.push(a[d]);
        else
            b.push(a);
        return b
    }
    ;
    l.indexOf = Array.prototype.indexOf ? function(a, b) {
        return a.indexOf(b)
    }
    : function(a, b) {
        for (var d = 0, f = a.length; f > d; d++)
            if (a[d] === b)
                return d;
        return -1
    }
    ;
    l.removeFrom = function(a, b) {
        b = l.indexOf(a, b);
        -1 != b && a.splice(b, 1)
    }
    ;
    l.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
        return a instanceof HTMLElement
    }
    : function(a) {
        return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }
    ;
    l.setText = function() {
        var a;
        return function(b, d) {
            a = a || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText");
            b[a] = d
        }
    }();
    l.getParent = function(a, b) {
        for (; a != document.body; )
            if (a = a.parentNode,
            m(a, b))
                return a
    }
    ;
    l.getQueryElement = function(a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }
    ;
    l.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ;
    l.filterFindElements = function(a, b) {
        a = l.makeArray(a);
        for (var d = [], f = 0, c = a.length; c > f; f++) {
            var h = a[f];
            if (l.isElement(h))
                if (b) {
                    m(h, b) && d.push(h);
                    h = h.querySelectorAll(b);
                    for (var k = 0, u = h.length; u > k; k++)
                        d.push(h[k])
                } else
                    d.push(h)
        }
        return d
    }
    ;
    l.debounceMethod = function(a, b, h) {
        var d = a.prototype[b]
          , c = b + "Timeout";
        a.prototype[b] = function() {
            var a = this[c];
            a && clearTimeout(a);
            var b = arguments
              , f = this;
            this[c] = setTimeout(function() {
                d.apply(f, b);
                delete f[c]
            }, h || 100)
        }
    }
    ;
    l.toDashed = function(a) {
        return a.replace(/(.)([A-Z])/g, function(a, b, d) {
            return b + "-" + d
        }).toLowerCase()
    }
    ;
    var h = a.console;
    return l.htmlInit = function(d, f) {
        b(function() {
            var b = l.toDashed(f)
              , k = document.querySelectorAll(".js-" + b);
            b = "data-" + b + "-options";
            for (var c = 0, m = k.length; m > c; c++) {
                var n = k[c]
                  , u = n.getAttribute(b);
                try {
                    var E = u && JSON.parse(u)
                } catch (x) {
                    h && h.error("Error parsing " + b + " on " + n.nodeName.toLowerCase() + (n.id ? "#" + n.id : "") + ": " + x);
                    continue
                }
                u = new d(n,E);
                var z = a.jQuery;
                z && z.data(n, f, u)
            }
        })
    }
    ,
    l
});
(function(a, b) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(m, l, k, h) {
        return b(a, m, l, k, h)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {},
    a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}
)(window, function(a, b, m, l, k) {
    function h(a, b) {
        a && (this.element = a,
        this.layout = b,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    var d = a.getComputedStyle
      , f = d ? function(a) {
        return d(a, null)
    }
    : function(a) {
        return a.currentStyle
    }
      , q = l("transition");
    a = l("transform");
    a = q && a;
    var r = !!l("perspective")
      , c = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[q]
      , v = ["transform", "transition", "transitionDuration", "transitionProperty"]
      , n = function() {
        for (var a = {}, b = 0, c = v.length; c > b; b++) {
            var d = v[b]
              , f = l(d);
            f && f !== d && (a[d] = f)
        }
        return a
    }();
    k.extend(h.prototype, b.prototype);
    h.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: "absolute"
        })
    }
    ;
    h.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ;
    h.prototype.getSize = function() {
        this.size = m(this.element)
    }
    ;
    h.prototype.css = function(a) {
        var b = this.element.style, c;
        for (c in a)
            b[n[c] || c] = a[c]
    }
    ;
    h.prototype.getPosition = function() {
        var a = f(this.element)
          , b = this.layout.options
          , c = b.isOriginLeft;
        b = b.isOriginTop;
        var d = a[c ? "left" : "right"];
        a = a[b ? "top" : "bottom"];
        var h = parseInt(d, 10)
          , k = parseInt(a, 10)
          , n = this.layout.size;
        h = -1 != d.indexOf("%") ? h / 100 * n.width : h;
        k = -1 != a.indexOf("%") ? k / 100 * n.height : k;
        h = isNaN(h) ? 0 : h;
        k = isNaN(k) ? 0 : k;
        h -= c ? n.paddingLeft : n.paddingRight;
        k -= b ? n.paddingTop : n.paddingBottom;
        this.position.x = h;
        this.position.y = k
    }
    ;
    h.prototype.layoutPosition = function() {
        var a = this.layout.size
          , b = this.layout.options
          , c = {}
          , d = b.isOriginLeft ? "right" : "left";
        c[b.isOriginLeft ? "left" : "right"] = this.getXValue(this.position.x + a[b.isOriginLeft ? "paddingLeft" : "paddingRight"]);
        c[d] = "";
        d = b.isOriginTop ? "bottom" : "top";
        c[b.isOriginTop ? "top" : "bottom"] = this.getYValue(this.position.y + a[b.isOriginTop ? "paddingTop" : "paddingBottom"]);
        c[d] = "";
        this.css(c);
        this.emitEvent("layout", [this])
    }
    ;
    h.prototype.getXValue = function(a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }
    ;
    h.prototype.getYValue = function(a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }
    ;
    h.prototype._transitionTo = function(a, b) {
        this.getPosition();
        var c = this.position.x
          , d = this.position.y
          , f = parseInt(a, 10)
          , h = parseInt(b, 10);
        f = f === this.position.x && h === this.position.y;
        if (this.setPosition(a, b),
        f && !this.isTransitioning)
            return void this.layoutPosition();
        f = {};
        f.transform = this.getTranslate(a - c, b - d);
        this.transition({
            to: f,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ;
    h.prototype.getTranslate = function(a, b) {
        var c = this.layout.options;
        return a = c.isOriginLeft ? a : -a,
        b = c.isOriginTop ? b : -b,
        a = this.getXValue(a),
        b = this.getYValue(b),
        r ? "translate3d(" + a + ", " + b + ", 0)" : "translate(" + a + ", " + b + ")"
    }
    ;
    h.prototype.goTo = function(a, b) {
        this.setPosition(a, b);
        this.layoutPosition()
    }
    ;
    h.prototype.moveTo = a ? h.prototype._transitionTo : h.prototype.goTo;
    h.prototype.setPosition = function(a, b) {
        this.position.x = parseInt(a, 10);
        this.position.y = parseInt(b, 10)
    }
    ;
    h.prototype._nonTransition = function(a) {
        this.css(a.to);
        a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd)
            a.onTransitionEnd[b].call(this)
    }
    ;
    h.prototype._transition = function(a) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(a);
        var b = this._transn, c;
        for (c in a.onTransitionEnd)
            b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to)
            b.ingProperties[c] = !0,
            a.isCleaning && (b.clean[c] = !0);
        a.from && this.css(a.from);
        this.enableTransition(a.to);
        this.css(a.to);
        this.isTransitioning = !0
    }
    ;
    var u = "opacity," + function(a) {
        return a.replace(/([A-Z])/g, function(a) {
            return "-" + a.toLowerCase()
        })
    }(n.transform || "transform");
    h.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: u,
            transitionDuration: this.layout.options.transitionDuration
        }),
        this.element.addEventListener(c, this, !1))
    }
    ;
    h.prototype.transition = h.prototype[q ? "_transition" : "_nonTransition"];
    h.prototype.onwebkitTransitionEnd = function(a) {
        this.ontransitionend(a)
    }
    ;
    h.prototype.onotransitionend = function(a) {
        this.ontransitionend(a)
    }
    ;
    var E = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    h.prototype.ontransitionend = function(a) {
        if (a.target === this.element) {
            var b = this._transn
              , c = E[a.propertyName] || a.propertyName;
            delete b.ingProperties[c];
            a: {
                for (d in b.ingProperties) {
                    var d = !1;
                    break a
                }
                d = !0
            }
            if (d && this.disableTransition(),
            c in b.clean && (this.element.style[a.propertyName] = "",
            delete b.clean[c]),
            c in b.onEnd)
                b.onEnd[c].call(this),
                delete b.onEnd[c];
            this.emitEvent("transitionEnd", [this])
        }
    }
    ;
    h.prototype.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(c, this, !1);
        this.isTransitioning = !1
    }
    ;
    h.prototype._removeStyles = function(a) {
        var b = {}, c;
        for (c in a)
            b[c] = "";
        this.css(b)
    }
    ;
    var z = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return h.prototype.removeTransitionStyles = function() {
        this.css(z)
    }
    ,
    h.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ""
        });
        this.emitEvent("remove", [this])
    }
    ,
    h.prototype.remove = function() {
        if (!q || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function() {
            a.removeElem()
        });
        this.hide()
    }
    ,
    h.prototype.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ""
        });
        var a = this.layout.options
          , b = {}
          , c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd;
        this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }
    ,
    h.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    h.prototype.getHideRevealTransitionEndProperty = function(a) {
        a = this.layout.options[a];
        if (a.opacity)
            return "opacity";
        for (var b in a)
            return b
    }
    ,
    h.prototype.hide = function() {
        this.isHidden = !0;
        this.css({
            display: ""
        });
        var a = this.layout.options
          , b = {}
          , c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd;
        this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }
    ,
    h.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    h.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    h
});
(function(a, b) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(m, l, k, h, d) {
        return b(a, m, l, k, h, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}
)(window, function(a, b, m, l, k, h) {
    function d(a, b) {
        var d = k.getQueryElement(a);
        if (!d)
            return void (f && f.error("Bad element for " + this.constructor.namespace + ": " + (d || a)));
        this.element = d;
        q && (this.$element = q(this.element));
        this.options = k.extend({}, this.constructor.defaults);
        this.option(b);
        a = ++c;
        this.element.outlayerGUID = a;
        v[a] = this;
        this._create();
        this.options.isInitLayout && this.layout()
    }
    var f = a.console
      , q = a.jQuery
      , r = function() {}
      , c = 0
      , v = {};
    return d.namespace = "outlayer",
    d.Item = h,
    d.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    },
    k.extend(d.prototype, m.prototype),
    d.prototype.option = function(a) {
        k.extend(this.options, a)
    }
    ,
    d.prototype._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        k.extend(this.element.style, this.options.containerStyle);
        this.options.isResizeBound && this.bindResize()
    }
    ,
    d.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    d.prototype._itemize = function(a) {
        a = this._filterFindItemElements(a);
        for (var b = this.constructor.Item, c = [], d = 0, f = a.length; f > d; d++) {
            var h = new b(a[d],this);
            c.push(h)
        }
        return c
    }
    ,
    d.prototype._filterFindItemElements = function(a) {
        return k.filterFindElements(a, this.options.itemSelector)
    }
    ,
    d.prototype.getItemElements = function() {
        for (var a = [], b = 0, c = this.items.length; c > b; b++)
            a.push(this.items[b].element);
        return a
    }
    ,
    d.prototype.layout = function() {
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.items, void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited);
        this._isLayoutInited = !0
    }
    ,
    d.prototype._init = d.prototype.layout,
    d.prototype._resetLayout = function() {
        this.getSize()
    }
    ,
    d.prototype.getSize = function() {
        this.size = l(this.element)
    }
    ,
    d.prototype._getMeasurement = function(a, b) {
        var c, d = this.options[a];
        d ? ("string" == typeof d ? c = this.element.querySelector(d) : k.isElement(d) && (c = d),
        this[a] = c ? l(c)[b] : d) : this[a] = 0
    }
    ,
    d.prototype.layoutItems = function(a, b) {
        a = this._getItemsForLayout(a);
        this._layoutItems(a, b);
        this._postLayout()
    }
    ,
    d.prototype._getItemsForLayout = function(a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = a[c];
            f.isIgnored || b.push(f)
        }
        return b
    }
    ,
    d.prototype._layoutItems = function(a, b) {
        if (this._emitCompleteOnItems("layout", a),
        a && a.length) {
            for (var c = [], d = 0, f = a.length; f > d; d++) {
                var h = a[d]
                  , k = this._getItemLayoutPosition(h);
                k.item = h;
                k.isInstant = b || h.isLayoutInstant;
                c.push(k)
            }
            this._processLayoutQueue(c)
        }
    }
    ,
    d.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    d.prototype._processLayoutQueue = function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
    }
    ,
    d.prototype._positionItem = function(a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
    }
    ,
    d.prototype._postLayout = function() {
        this.resizeContainer()
    }
    ,
    d.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0),
            this._setContainerMeasure(a.height, !1))
        }
    }
    ,
    d.prototype._getContainerSize = r,
    d.prototype._setContainerMeasure = function(a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth);
            a = Math.max(a, 0);
            this.element.style[b ? "width" : "height"] = a + "px"
        }
    }
    ,
    d.prototype._emitCompleteOnItems = function(a, b) {
        function c() {
            f.dispatchEvent(a + "Complete", null, [b])
        }
        function d() {
            k++;
            k === h && c()
        }
        var f = this
          , h = b.length;
        if (!b || !h)
            return void c();
        for (var k = 0, l = 0, n = b.length; n > l; l++)
            b[l].once(a, d)
    }
    ,
    d.prototype.dispatchEvent = function(a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d),
        q)
            (this.$element = this.$element || q(this.element),
            b) ? (b = q.Event(b),
            b.type = a,
            this.$element.trigger(b, c)) : this.$element.trigger(a, c)
    }
    ,
    d.prototype.ignore = function(a) {
        (a = this.getItem(a)) && (a.isIgnored = !0)
    }
    ,
    d.prototype.unignore = function(a) {
        (a = this.getItem(a)) && delete a.isIgnored
    }
    ,
    d.prototype.stamp = function(a) {
        if (a = this._find(a)) {
            this.stamps = this.stamps.concat(a);
            for (var b = 0, c = a.length; c > b; b++)
                this.ignore(a[b])
        }
    }
    ,
    d.prototype.unstamp = function(a) {
        if (a = this._find(a))
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                k.removeFrom(this.stamps, d);
                this.unignore(d)
            }
    }
    ,
    d.prototype._find = function(a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)),
        k.makeArray(a)) : void 0
    }
    ,
    d.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var a = 0, b = this.stamps.length; b > a; a++)
                this._manageStamp(this.stamps[a])
        }
    }
    ,
    d.prototype._getBoundingRect = function() {
        var a = this.element.getBoundingClientRect()
          , b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }
    ,
    d.prototype._manageStamp = r,
    d.prototype._getElementOffset = function(a) {
        var b = a.getBoundingClientRect()
          , c = this._boundingRect;
        a = l(a);
        return {
            left: b.left - c.left - a.marginLeft,
            top: b.top - c.top - a.marginTop,
            right: c.right - b.right - a.marginRight,
            bottom: c.bottom - b.bottom - a.marginBottom
        }
    }
    ,
    d.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    d.prototype.bindResize = function() {
        this.isResizeBound || (b.bind(a, "resize", this),
        this.isResizeBound = !0)
    }
    ,
    d.prototype.unbindResize = function() {
        this.isResizeBound && b.unbind(a, "resize", this);
        this.isResizeBound = !1
    }
    ,
    d.prototype.onresize = function() {
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var a = this;
        this.resizeTimeout = setTimeout(function() {
            a.resize();
            delete a.resizeTimeout
        }, 100)
    }
    ,
    d.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    d.prototype.needsResizeLayout = function() {
        var a = l(this.element);
        return this.size && a && a.innerWidth !== this.size.innerWidth
    }
    ,
    d.prototype.addItems = function(a) {
        a = this._itemize(a);
        return a.length && (this.items = this.items.concat(a)),
        a
    }
    ,
    d.prototype.appended = function(a) {
        a = this.addItems(a);
        a.length && (this.layoutItems(a, !0),
        this.reveal(a))
    }
    ,
    d.prototype.prepended = function(a) {
        a = this._itemize(a);
        if (a.length) {
            var b = this.items.slice(0);
            this.items = a.concat(b);
            this._resetLayout();
            this._manageStamps();
            this.layoutItems(a, !0);
            this.reveal(a);
            this.layoutItems(b)
        }
    }
    ,
    d.prototype.reveal = function(a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++)
            a[c].reveal()
    }
    ,
    d.prototype.hide = function(a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++)
            a[c].hide()
    }
    ,
    d.prototype.revealItemElements = function(a) {
        a = this.getItems(a);
        this.reveal(a)
    }
    ,
    d.prototype.hideItemElements = function(a) {
        a = this.getItems(a);
        this.hide(a)
    }
    ,
    d.prototype.getItem = function(a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            if (d.element === a)
                return d
        }
    }
    ,
    d.prototype.getItems = function(a) {
        a = k.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = this.getItem(a[c]);
            f && b.push(f)
        }
        return b
    }
    ,
    d.prototype.remove = function(a) {
        a = this.getItems(a);
        if (this._emitCompleteOnItems("remove", a),
        a && a.length)
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                d.remove();
                k.removeFrom(this.items, d)
            }
    }
    ,
    d.prototype.destroy = function() {
        var a = this.element.style;
        a.height = "";
        a.position = "";
        a.width = "";
        a = 0;
        for (var b = this.items.length; b > a; a++)
            this.items[a].destroy();
        this.unbindResize();
        delete v[this.element.outlayerGUID];
        delete this.element.outlayerGUID;
        q && q.removeData(this.element, this.constructor.namespace)
    }
    ,
    d.data = function(a) {
        return (a = (a = k.getQueryElement(a)) && a.outlayerGUID) && v[a]
    }
    ,
    d.create = function(a, b) {
        function c() {
            d.apply(this, arguments)
        }
        return Object.create ? c.prototype = Object.create(d.prototype) : k.extend(c.prototype, d.prototype),
        c.prototype.constructor = c,
        c.defaults = k.extend({}, d.defaults),
        k.extend(c.defaults, b),
        c.prototype.settings = {},
        c.namespace = a,
        c.data = d.data,
        c.Item = function() {
            h.apply(this, arguments)
        }
        ,
        c.Item.prototype = new h,
        k.htmlInit(c, a),
        q && q.bridget && q.bridget(a, c),
        c
    }
    ,
    d.Item = h,
    d
});
(function(a, b) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}
)(window, function(a, b, m) {
    a = a.create("masonry");
    return a.prototype._resetLayout = function() {
        this.getSize();
        this._getMeasurement("columnWidth", "outerWidth");
        this._getMeasurement("gutter", "outerWidth");
        this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--; )
            this.colYs.push(0);
        this.maxY = 0
    }
    ,
    a.prototype.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var a = this.items[0];
            this.columnWidth = (a = a && a.element) && b(a).outerWidth || this.containerWidth
        }
        a = this.columnWidth += this.gutter;
        var k = this.containerWidth + this.gutter
          , h = a - k % a;
        a = Math[h && 1 > h ? "round" : "floor"](k / a);
        this.cols = Math.max(a, 1)
    }
    ,
    a.prototype.getContainerWidth = function() {
        var a = b(this.options.isFitWidth ? this.element.parentNode : this.element);
        this.containerWidth = a && a.innerWidth
    }
    ,
    a.prototype._getItemLayoutPosition = function(a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth;
        b = Math[b && 1 > b ? "round" : "ceil"](a.size.outerWidth / this.columnWidth);
        b = Math.min(b, this.cols);
        var h = this._getColGroup(b)
          , d = Math.min.apply(Math, h);
        b = m.indexOf(h, d);
        var f = {
            x: this.columnWidth * b,
            y: d
        };
        a = d + a.size.outerHeight;
        h = this.cols + 1 - h.length;
        for (d = 0; h > d; d++)
            this.colYs[b + d] = a;
        return f
    }
    ,
    a.prototype._getColGroup = function(a) {
        if (2 > a)
            return this.colYs;
        for (var b = [], h = this.cols + 1 - a, d = 0; h > d; d++) {
            var f = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, f)
        }
        return b
    }
    ,
    a.prototype._manageStamp = function(a) {
        var k = b(a)
          , h = this._getElementOffset(a);
        a = this.options.isOriginLeft ? h.left : h.right;
        var d = a + k.outerWidth
          , f = Math.floor(a / this.columnWidth);
        f = Math.max(0, f);
        a = Math.floor(d / this.columnWidth);
        a -= d % this.columnWidth ? 0 : 1;
        a = Math.min(this.cols - 1, a);
        k = (this.options.isOriginTop ? h.top : h.bottom) + k.outerHeight;
        for (h = f; a >= h; h++)
            this.colYs[h] = Math.max(k, this.colYs[h])
    }
    ,
    a.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {
            height: this.maxY
        };
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()),
        a
    }
    ,
    a.prototype._getContainerFitWidth = function() {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; )
            a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }
    ,
    a.prototype.needsResizeLayout = function() {
        var a = this.containerWidth;
        return this.getContainerWidth(),
        a !== this.containerWidth
    }
    ,
    a
});
!function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, m, l, k, h, d, f = function() {}, q = !!window.jQuery, r = a(window), c = function(a, c) {
        b.ev.on("mfp" + a + ".mfp", c)
    }, v = function(b, c, d, f) {
        var h = document.createElement("div");
        return h.className = "mfp-" + b,
        d && (h.innerHTML = d),
        f ? c && c.appendChild(h) : (h = a(h),
        c && h.appendTo(c)),
        h
    }, n = function(c, d) {
        b.ev.triggerHandler("mfp" + c, d);
        b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1),
        b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, u = function(c) {
        return c === d && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)),
        d = c),
        b.currTemplate.closeBtn
    }, E = function() {
        a.magnificPopup.instance || (b = new f,
        b.init(),
        a.magnificPopup.instance = b)
    }, z = function() {
        var a = document.createElement("p").style
          , b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return !0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return !0;
        return !1
    };
    f.prototype = {
        constructor: f,
        init: function() {
            var c = navigator.appVersion;
            b.isIE7 = -1 !== c.indexOf("MSIE 7.");
            b.isIE8 = -1 !== c.indexOf("MSIE 8.");
            b.isLowIE = b.isIE7 || b.isIE8;
            b.isAndroid = /android/gi.test(c);
            b.isIOS = /iphone|ipad|ipod/gi.test(c);
            b.supportsTransition = z();
            b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent);
            l = a(document);
            b.popupsCache = {}
        },
        open: function(d) {
            var f;
            if (!1 === d.isObj) {
                b.items = d.items.toArray();
                b.index = 0;
                var k, m = d.items;
                for (f = 0; f < m.length; f++)
                    if (k = m[f],
                    k.parsed && (k = k.el[0]),
                    k === d.el[0]) {
                        b.index = f;
                        break
                    }
            } else
                b.items = a.isArray(d.items) ? d.items : [d.items],
                b.index = d.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [];
            h = "";
            b.ev = d.mainEl && d.mainEl.length ? d.mainEl.eq(0) : l;
            d.key ? (b.popupsCache[d.key] || (b.popupsCache[d.key] = {}),
            b.currTemplate = b.popupsCache[d.key]) : b.currTemplate = {};
            b.st = a.extend(!0, {}, a.magnificPopup.defaults, d);
            b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos;
            b.st.modal && (b.st.closeOnContentClick = !1,
            b.st.closeOnBgClick = !1,
            b.st.showCloseBtn = !1,
            b.st.enableEscapeKey = !1);
            b.bgOverlay || (b.bgOverlay = v("bg").on("click.mfp", function() {
                b.close()
            }),
            b.wrap = v("wrap").attr("tabindex", -1).on("click.mfp", function(a) {
                b._checkIfClose(a.target) && b.close()
            }),
            b.container = v("container", b.wrap));
            b.contentContainer = v("content");
            b.st.preloader && (b.preloader = v("preloader", b.container, b.st.tLoading));
            k = a.magnificPopup.modules;
            for (f = 0; f < k.length; f++)
                m = k[f],
                m = m.charAt(0).toUpperCase() + m.slice(1),
                b["init" + m].call(b);
            n("BeforeOpen");
            b.st.showCloseBtn && (b.st.closeBtnInside ? (c("MarkupParse", function(a, b, c, d) {
                c.close_replaceWith = u(d.type)
            }),
            h += " mfp-close-btn-in") : b.wrap.append(u()));
            b.st.alignTop && (h += " mfp-align-top");
            b.wrap.css(b.fixedContentPos ? {
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            } : {
                top: r.scrollTop(),
                position: "absolute"
            });
            (!1 === b.st.fixedBgPos || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: l.height(),
                position: "absolute"
            });
            b.st.enableEscapeKey && l.on("keyup.mfp", function(a) {
                27 === a.keyCode && b.close()
            });
            r.on("resize.mfp", function() {
                b.updateSize()
            });
            b.st.closeOnContentClick || (h += " mfp-auto-cursor");
            h && b.wrap.addClass(h);
            f = b.wH = r.height();
            k = {};
            b.fixedContentPos && b._hasScrollBar(f) && (m = b._getScrollbarSize()) && (k.marginRight = m);
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : k.overflow = "hidden");
            m = b.st.mainClass;
            return b.isIE7 && (m += " mfp-ie7"),
            m && b._addClassToMFP(m),
            b.updateItemHTML(),
            n("BuildControls"),
            a("html").css(k),
            b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
            b._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                b.content ? (b._addClassToMFP("mfp-ready"),
                b._setFocus()) : b.bgOverlay.addClass("mfp-ready");
                l.on("focusin.mfp", b._onFocusIn)
            }, 16),
            b.isOpen = !0,
            b.updateSize(f),
            n("Open"),
            d
        },
        close: function() {
            b.isOpen && (n("BeforeClose"),
            b.isOpen = !1,
            b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP("mfp-removing"),
            setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            n("Close");
            var c = "mfp-removing mfp-ready ";
            if (b.bgOverlay.detach(),
            b.wrap.detach(),
            b.container.empty(),
            b.st.mainClass && (c += b.st.mainClass + " "),
            b._removeClassFromMFP(c),
            b.fixedContentPos)
                c = {
                    marginRight: ""
                },
                b.isIE7 ? a("body, html").css("overflow", "") : c.overflow = "",
                a("html").css(c);
            l.off("keyup.mfp focusin.mfp");
            b.ev.off(".mfp");
            b.wrap.attr("class", "mfp-wrap").removeAttr("style");
            b.bgOverlay.attr("class", "mfp-bg");
            b.container.attr("class", "mfp-container");
            !b.st.showCloseBtn || b.st.closeBtnInside && !0 !== b.currTemplate[b.currItem.type] || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach();
            b._lastFocusedEl && a(b._lastFocusedEl).focus();
            b.currItem = null;
            b.content = null;
            b.currTemplate = null;
            b.prevHeight = 0;
            n("AfterClose")
        },
        updateSize: function(a) {
            b.isIOS ? (a = document.documentElement.clientWidth / window.innerWidth * window.innerHeight,
            b.wrap.css("height", a),
            b.wH = a) : b.wH = a || r.height();
            b.fixedContentPos || b.wrap.css("height", b.wH);
            n("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach();
            b.content && b.content.detach();
            c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (n("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
            b.currItem = c,
            !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                n("FirstMarkupParse", f);
                b.currTemplate[d] = f ? a(f) : !0
            }
            k && k !== c.type && b.container.removeClass("mfp-" + k + "-holder");
            f = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(f, d);
            c.preloaded = !0;
            n("Change", c);
            k = c.type;
            b.container.prepend(b.contentContainer);
            n("AfterChange")
        },
        appendContent: function(a, c) {
            (b.content = a) ? b.st.showCloseBtn && b.st.closeBtnInside && !0 === b.currTemplate[c] ? b.content.find(".mfp-close").length || b.content.append(u()) : b.content = a : b.content = "";
            n("BeforeAppend");
            b.container.addClass("mfp-" + c + "-holder");
            b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, f = b.items[c];
            if (f.tagName ? f = {
                el: a(f)
            } : (d = f.type,
            f = {
                data: f,
                src: f.src
            }),
            f.el) {
                for (var h = b.types, k = 0; k < h.length; k++)
                    if (f.el.hasClass("mfp-" + h[k])) {
                        d = h[k];
                        break
                    }
                f.src = f.el.attr("data-mfp-src");
                f.src || (f.src = f.el.attr("href"))
            }
            return f.type = d || b.st.type || "inline",
            f.index = c,
            f.parsed = !0,
            b.items[c] = f,
            n("ElementParse", f),
            b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this;
                b._openClick(d, a, c)
            };
            c || (c = {});
            c.mainEl = a;
            c.items ? (c.isObj = !0,
            a.off("click.magnificPopup").on("click.magnificPopup", d)) : (c.isObj = !1,
            c.delegate ? a.off("click.magnificPopup").on("click.magnificPopup", c.delegate, d) : (c.items = a,
            a.off("click.magnificPopup").on("click.magnificPopup", d)))
        },
        _openClick: function(c, d, f) {
            if ((void 0 !== f.midClick ? f.midClick : a.magnificPopup.defaults.midClick) || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
                var h = void 0 !== f.disableOn ? f.disableOn : a.magnificPopup.defaults.disableOn;
                if (h)
                    if (a.isFunction(h)) {
                        if (!h.call(b))
                            return !0
                    } else if (r.width() < h)
                        return !0;
                c.type && (c.preventDefault(),
                b.isOpen && c.stopPropagation());
                f.el = a(c.mfpEl);
                f.delegate && (f.items = d.find(f.delegate));
                b.open(f)
            }
        },
        updateStatus: function(a, c) {
            b.preloader && (m !== a && b.container.removeClass("mfp-s-" + m),
            c || "loading" !== a || (c = b.st.tLoading),
            c = {
                status: a,
                text: c
            },
            n("UpdateStatus", c),
            a = c.status,
            c = c.text,
            b.preloader.html(c),
            b.preloader.find("a").on("click", function(a) {
                a.stopImmediatePropagation()
            }),
            b.container.addClass("mfp-s-" + a),
            m = a)
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass("mfp-prevent-close")) {
                var d = b.st.closeOnContentClick
                  , f = b.st.closeOnBgClick;
                if (d && f || !b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return !0
                } else if (f && a.contains(document, c))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a);
            b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a);
            b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? l.height() : document.body.scrollHeight) > (a || r.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(),
            !1)
        },
        _parseMarkup: function(b, c, d) {
            var f;
            d.data && (c = a.extend(d.data, c));
            n("MarkupParse", [b, c, d]);
            a.each(c, function(a, c) {
                if (void 0 === c || !1 === c)
                    return !0;
                if (f = a.split("_"),
                1 < f.length) {
                    if (a = b.find(".mfp-" + f[0]),
                    0 < a.length) {
                        var d = f[1];
                        "replaceWith" === d ? a[0] !== c[0] && a.replaceWith(c) : "img" === d ? a.is("img") ? a.attr("src", c) : a.replaceWith('<img src="' + c + '" class="' + a.attr("class") + '" />') : a.attr(f[1], c)
                    }
                } else
                    b.find(".mfp-" + a).html(c)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
                document.body.appendChild(a);
                b.scrollbarSize = a.offsetWidth - a.clientWidth;
                document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    };
    a.magnificPopup = {
        instance: null,
        proto: f.prototype,
        modules: [],
        open: function(b, c) {
            return E(),
            b = b ? a.extend(!0, {}, b) : {},
            b.isObj = !0,
            b.index = c || 0,
            this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options);
            a.extend(this.proto, c.proto);
            this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    };
    a.fn.magnificPopup = function(c) {
        E();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var f, h = q ? d.data("magnificPopup") : d[0].magnificPopup, k = parseInt(arguments[1], 10) || 0;
                h.items ? f = h.items[k] : (f = d,
                h.delegate && (f = f.find(h.delegate)),
                f = f.eq(k));
                b._openClick({
                    mfpEl: f
                }, d, h)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c),
            q ? d.data("magnificPopup", c) : d[0].magnificPopup = c,
            b.addGroup(d, c);
        return d
    }
    ;
    var x, H, B, D = function() {
        B && (H.after(B.addClass(x)).detach(),
        B = null)
    };
    a.magnificPopup.registerModule("inline", {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push("inline");
                c("Close.inline", function() {
                    D()
                })
            },
            getInline: function(c, d) {
                if (D(),
                c.src) {
                    d = b.st.inline;
                    var f = a(c.src);
                    if (f.length) {
                        var h = f[0].parentNode;
                        h && h.tagName && (H || (x = d.hiddenClass,
                        H = v(x),
                        x = "mfp-" + x),
                        B = f.after(H).detach().removeClass(x));
                        b.updateStatus("ready")
                    } else
                        b.updateStatus("error", d.tNotFound),
                        f = a("<div>");
                    return c.inlineElement = f,
                    f
                }
                return b.updateStatus("ready"),
                b._parseMarkup(d, {}, c),
                d
            }
        }
    });
    var G, N = function() {
        G && a(document.body).removeClass(G)
    }, Q = function() {
        N();
        b.req && b.req.abort()
    };
    a.magnificPopup.registerModule("ajax", {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push("ajax");
                G = b.st.ajax.cursor;
                c("Close.ajax", Q);
                c("BeforeChange.ajax", Q)
            },
            getAjax: function(c) {
                G && a(document.body).addClass(G);
                b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, f, h) {
                        d = {
                            data: d,
                            xhr: h
                        };
                        n("ParseAjax", d);
                        b.appendContent(a(d.data), "ajax");
                        c.finished = !0;
                        N();
                        b._setFocus();
                        setTimeout(function() {
                            b.wrap.addClass("mfp-ready")
                        }, 16);
                        b.updateStatus("ready");
                        n("AjaxContentAdded")
                    },
                    error: function() {
                        N();
                        c.finished = c.loadError = !0;
                        b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d),
                ""
            }
        }
    });
    var L, R = function(c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var d = b.st.image;
                b.types.push("image");
                c("Open.image", function() {
                    "image" === b.currItem.type && d.cursor && a(document.body).addClass(d.cursor)
                });
                c("Close.image", function() {
                    d.cursor && a(document.body).removeClass(d.cursor);
                    r.off("resize.mfp")
                });
                c("Resize.image", b.resizeImage);
                b.isLowIE && c("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10));
                    a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0,
                L && clearInterval(L),
                a.isCheckingImgSize = !1,
                n("ImageHasSize", a),
                a.imgHidden && (b.content && b.content.removeClass("mfp-loading"),
                a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0
                  , d = a.img[0]
                  , f = function(h) {
                    L && clearInterval(L);
                    L = setInterval(function() {
                        return 0 < d.naturalWidth ? void b._onImageHasSize(a) : (200 < c && clearInterval(L),
                        c++,
                        void (3 === c ? f(10) : 40 === c ? f(50) : 100 === c && f(500)))
                    }, h)
                };
                f(1)
            },
            getImage: function(c, d) {
                var f = 0
                  , h = function() {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("ready")),
                    c.hasSize = !0,
                    c.loaded = !0,
                    n("ImageLoadComplete")) : (f++,
                    200 > f ? setTimeout(h, 100) : k()))
                }
                  , k = function() {
                    c && (c.img.off(".mfploader"),
                    c === b.currItem && (b._onImageHasSize(c),
                    b.updateStatus("error", l.tError.replace("%url%", c.src))),
                    c.hasSize = !0,
                    c.loaded = !0,
                    c.loadError = !0)
                }
                  , l = b.st.image
                  , m = d.find(".mfp-img");
                if (m.length) {
                    var q = document.createElement("img");
                    q.className = "mfp-img";
                    c.el && c.el.find("img").length && (q.alt = c.el.find("img").attr("alt"));
                    c.img = a(q).on("load.mfploader", h).on("error.mfploader", k);
                    q.src = c.src;
                    m.is("img") && (c.img = c.img.clone());
                    q = c.img[0];
                    0 < q.naturalWidth ? c.hasSize = !0 : q.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: R(c),
                    img_replaceWith: c.img
                }, c),
                b.resizeImage(),
                c.hasSize ? (L && clearInterval(L),
                c.loadError ? (d.addClass("mfp-loading"),
                b.updateStatus("error", l.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"),
                b.updateStatus("ready")),
                d) : (b.updateStatus("loading"),
                c.loading = !0,
                c.hasSize || (c.imgHidden = !0,
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
                d)
            }
        }
    });
    var da;
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, d = b.st.zoom;
                if (d.enabled && b.supportsTransition) {
                    var f, h, k = d.duration, l = function(a) {
                        a = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image");
                        var b = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        };
                        return b["-webkit-transition"] = b["-moz-transition"] = b["-o-transition"] = b.transition = "all " + d.duration / 1E3 + "s " + d.easing,
                        a.css(b),
                        a
                    }, m = function() {
                        b.content.css("visibility", "visible")
                    };
                    c("BuildControls.zoom", function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(f),
                            b.content.css("visibility", "hidden"),
                            a = b._getItemToZoom(),
                            !a)
                                return void m();
                            h = l(a);
                            h.css(b._getOffset());
                            b.wrap.append(h);
                            f = setTimeout(function() {
                                h.css(b._getOffset(!0));
                                f = setTimeout(function() {
                                    m();
                                    setTimeout(function() {
                                        h.remove();
                                        a = h = null;
                                        n("ZoomAnimationEnded")
                                    }, 16)
                                }, k)
                            }, 16)
                        }
                    });
                    c("BeforeClose.zoom", function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(f),
                            b.st.removalDelay = k,
                            !a) {
                                if (a = b._getItemToZoom(),
                                !a)
                                    return;
                                h = l(a)
                            }
                            h.css(b._getOffset(!0));
                            b.wrap.append(h);
                            b.content.css("visibility", "hidden");
                            setTimeout(function() {
                                h.css(b._getOffset())
                            }, 16)
                        }
                    });
                    c("Close.zoom", function() {
                        b._allowZoom() && (m(),
                        h && h.remove(),
                        a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                c = d.offset();
                var f = parseInt(d.css("padding-top"), 10)
                  , h = parseInt(d.css("padding-bottom"), 10);
                c.top -= a(window).scrollTop() - f;
                d = {
                    width: d.width(),
                    height: (q ? d.innerHeight() : d[0].offsetHeight) - h - f
                };
                return (void 0 === da && (da = void 0 !== document.createElement("p").style.MozTransform),
                da) ? d["-moz-transform"] = d.transform = "translate(" + c.left + "px," + c.top + "px)" : (d.left = c.left,
                d.top = c.top),
                d
            }
        }
    });
    var U = function(a) {
        if (b.currTemplate.iframe) {
            var c = b.currTemplate.iframe.find("iframe");
            c.length && (a || (c[0].src = "//about:blank"),
            b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule("iframe", {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push("iframe");
                c("BeforeChange", function(a, b, c) {
                    b !== c && ("iframe" === b ? U() : "iframe" === c && U(!0))
                });
                c("Close.iframe", function() {
                    U()
                })
            },
            getIframe: function(c, d) {
                var f = c.src
                  , h = b.st.iframe;
                a.each(h.patterns, function() {
                    return -1 < f.indexOf(this.index) ? (this.id && (f = "string" == typeof this.id ? f.substr(f.lastIndexOf(this.id) + this.id.length, f.length) : this.id.call(this, f)),
                    f = this.src.replace("%id%", f),
                    !1) : void 0
                });
                var k = {};
                return h.srcAction && (k[h.srcAction] = f),
                b._parseMarkup(d, k, c),
                b.updateStatus("ready"),
                d
            }
        }
    });
    var la = function(a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }
      , O = function(a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var d = b.st.gallery
                  , f = !!a.fn.mfpFastClick;
                return b.direction = !0,
                d && d.enabled ? (h += " mfp-gallery",
                c("Open.mfp-gallery", function() {
                    d.navigateByImgClick && b.wrap.on("click.mfp-gallery", ".mfp-img", function() {
                        return 1 < b.items.length ? (b.next(),
                        !1) : void 0
                    });
                    l.on("keydown.mfp-gallery", function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }),
                c("UpdateStatus.mfp-gallery", function(a, c) {
                    c.text && (c.text = O(c.text, b.currItem.index, b.items.length))
                }),
                c("MarkupParse.mfp-gallery", function(a, c, f, h) {
                    a = b.items.length;
                    f.counter = 1 < a ? O(d.tCounter, h.index, a) : ""
                }),
                c("BuildControls.mfp-gallery", function() {
                    if (1 < b.items.length && d.arrows && !b.arrowLeft) {
                        var c = d.arrowMarkup
                          , h = b.arrowLeft = a(c.replace(/%title%/gi, d.tPrev).replace(/%dir%/gi, "left")).addClass("mfp-prevent-close");
                        c = b.arrowRight = a(c.replace(/%title%/gi, d.tNext).replace(/%dir%/gi, "right")).addClass("mfp-prevent-close");
                        var k = f ? "mfpFastClick" : "click";
                        h[k](function() {
                            b.prev()
                        });
                        c[k](function() {
                            b.next()
                        });
                        b.isIE7 && (v("b", h[0], !1, !0),
                        v("a", h[0], !1, !0),
                        v("b", c[0], !1, !0),
                        v("a", c[0], !1, !0));
                        b.container.append(h.add(c))
                    }
                }),
                c("Change.mfp-gallery", function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout);
                    b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages();
                        b._preloadTimeout = null
                    }, 16)
                }),
                void c("Close.mfp-gallery", function() {
                    l.off(".mfp-gallery");
                    b.wrap.off("click.mfp-gallery");
                    b.arrowLeft && f && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick();
                    b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0;
                b.index = la(b.index + 1);
                b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1;
                b.index = la(b.index - 1);
                b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index;
                b.index = a;
                b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a = b.st.gallery.preload;
                var c = Math.min(a[0], b.items.length)
                  , d = Math.min(a[1], b.items.length);
                for (a = 1; a <= (b.direction ? d : c); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? c : d); a++)
                    b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = la(c),
                !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c));
                    n("LazyLoad", d);
                    "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0;
                        d.loadError = !0;
                        n("LazyLoadError", d)
                    }).attr("src", d.src));
                    d.preloaded = !0
                }
            }
        }
    });
    a.magnificPopup.registerModule("retina", {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (1 < window.devicePixelRatio) {
                    var a = b.st.retina
                      , d = a.ratio;
                    d = isNaN(d) ? d() : d;
                    1 < d && (c("ImageHasSize.retina", function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / d,
                            width: "100%"
                        })
                    }),
                    c("ElementParse.retina", function(b, c) {
                        c.src = a.replaceSrc(c, d)
                    }))
                }
            }
        }
    });
    (function() {
        var b = "ontouchstart"in window
          , c = function() {
            r.off("touchmove" + d + " touchend" + d)
        }
          , d = ".mfpFastClick";
        a.fn.mfpFastClick = function(f) {
            return a(this).each(function() {
                var h, k = a(this);
                if (b) {
                    var l, n, m, q, u, v;
                    k.on("touchstart" + d, function(a) {
                        q = !1;
                        v = 1;
                        u = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0];
                        n = u.clientX;
                        m = u.clientY;
                        r.on("touchmove" + d, function(a) {
                            u = a.originalEvent ? a.originalEvent.touches : a.touches;
                            v = u.length;
                            u = u[0];
                            (10 < Math.abs(u.clientX - n) || 10 < Math.abs(u.clientY - m)) && (q = !0,
                            c())
                        }).on("touchend" + d, function(a) {
                            c();
                            q || 1 < v || (h = !0,
                            a.preventDefault(),
                            clearTimeout(l),
                            l = setTimeout(function() {
                                h = !1
                            }, 1E3),
                            f())
                        })
                    })
                }
                k.on("click" + d, function() {
                    h || f()
                })
            })
        }
        ;
        a.fn.destroyMfpFastClick = function() {
            a(this).off("touchstart" + d + " click" + d);
            b && r.off("touchmove" + d + " touchend" + d)
        }
    }
    )();
    E()
});
(function() {
    function a() {}
    function b(a, b) {
        for (var d = a.length; d--; )
            if (a[d].listener === b)
                return d;
        return -1
    }
    function m(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var l = a.prototype
      , k = this
      , h = k.EventEmitter;
    l.getListeners = function(a) {
        var b, d = this._getEvents();
        if ("object" == typeof a) {
            var h = {};
            for (b in d)
                d.hasOwnProperty(b) && a.test(b) && (h[b] = d[b])
        } else
            h = d[a] || (d[a] = []);
        return h
    }
    ;
    l.flattenListeners = function(a) {
        var b, d = [];
        for (b = 0; b < a.length; b += 1)
            d.push(a[b].listener);
        return d
    }
    ;
    l.getListenersAsObject = function(a) {
        var b, d = this.getListeners(a);
        return d instanceof Array && (b = {},
        b[a] = d),
        b || d
    }
    ;
    l.addListener = function(a, f) {
        var d;
        a = this.getListenersAsObject(a);
        var h = "object" == typeof f;
        for (d in a)
            a.hasOwnProperty(d) && -1 === b(a[d], f) && a[d].push(h ? f : {
                listener: f,
                once: !1
            });
        return this
    }
    ;
    l.on = m("addListener");
    l.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }
    ;
    l.once = m("addOnceListener");
    l.defineEvent = function(a) {
        return this.getListeners(a),
        this
    }
    ;
    l.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1)
            this.defineEvent(a[b]);
        return this
    }
    ;
    l.removeListener = function(a, f) {
        var d, h;
        a = this.getListenersAsObject(a);
        for (h in a)
            a.hasOwnProperty(h) && (d = b(a[h], f),
            -1 !== d && a[h].splice(d, 1));
        return this
    }
    ;
    l.off = m("removeListener");
    l.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }
    ;
    l.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }
    ;
    l.manipulateListeners = function(a, b, h) {
        var d, c, f = a ? this.removeListener : this.addListener;
        a = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = h.length; d--; )
                f.call(this, b, h[d]);
        else
            for (d in b)
                b.hasOwnProperty(d) && (c = b[d]) && ("function" == typeof c ? f.call(this, d, c) : a.call(this, d, c));
        return this
    }
    ;
    l.removeEvent = function(a) {
        var b, d = typeof a, h = this._getEvents();
        if ("string" === d)
            delete h[a];
        else if ("object" === d)
            for (b in h)
                h.hasOwnProperty(b) && a.test(b) && delete h[b];
        else
            delete this._events;
        return this
    }
    ;
    l.removeAllListeners = m("removeEvent");
    l.emitEvent = function(a, b) {
        var d, f, c = this.getListenersAsObject(a);
        for (f in c)
            if (c.hasOwnProperty(f))
                for (d = c[f].length; d--; ) {
                    var h = c[f][d];
                    !0 === h.once && this.removeListener(a, h.listener);
                    var k = h.listener.apply(this, b || []);
                    k === this._getOnceReturnValue() && this.removeListener(a, h.listener)
                }
        return this
    }
    ;
    l.trigger = m("emitEvent");
    l.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }
    ;
    l.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a,
        this
    }
    ;
    l._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ;
    l._getEvents = function() {
        return this._events || (this._events = {})
    }
    ;
    a.noConflict = function() {
        return k.EventEmitter = h,
        a
    }
    ;
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}
).call(this);
(function(a) {
    function b(b) {
        var d = a.event;
        return d.target = d.target || d.srcElement || b,
        d
    }
    var m = document.documentElement
      , l = function() {};
    m.addEventListener ? l = function(a, b, f) {
        a.addEventListener(b, f, !1)
    }
    : m.attachEvent && (l = function(a, d, f) {
        a[d + f] = f.handleEvent ? function() {
            var d = b(a);
            f.handleEvent.call(f, d)
        }
        : function() {
            var d = b(a);
            f.call(a, d)
        }
        ;
        a.attachEvent("on" + d, a[d + f])
    }
    );
    var k = function() {};
    m.removeEventListener ? k = function(a, b, f) {
        a.removeEventListener(b, f, !1)
    }
    : m.detachEvent && (k = function(a, b, f) {
        a.detachEvent("on" + b, a[b + f]);
        try {
            delete a[b + f]
        } catch (q) {
            a[b + f] = void 0
        }
    }
    );
    m = {
        bind: l,
        unbind: k
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", m) : a.eventie = m
}
)(this);
(function(a, b) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(m, l) {
        return b(a, m, l)
    }) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
}
)(window, function(a, b, m) {
    function l(a, b) {
        for (var c in b)
            a[c] = b[c];
        return a
    }
    function k(a) {
        var b = [];
        if ("[object Array]" == c.call(a))
            b = a;
        else if ("number" == typeof a.length)
            for (var d = 0; d < a.length; d++)
                b.push(a[d]);
        else
            b.push(a);
        return b
    }
    function h(a, b, c) {
        if (!(this instanceof h))
            return new h(a,b,c);
        "string" == typeof a && (a = document.querySelectorAll(a));
        this.elements = k(a);
        this.options = l({}, this.options);
        "function" == typeof b ? c = b : l(this.options, b);
        c && this.on("always", c);
        this.getImages();
        q && (this.jqDeferred = new q.Deferred);
        var d = this;
        setTimeout(function() {
            d.check()
        })
    }
    function d(a) {
        this.img = a
    }
    function f(a, b) {
        this.url = a;
        this.element = b;
        this.img = new Image
    }
    var q = a.jQuery
      , r = a.console
      , c = Object.prototype.toString;
    h.prototype = new b;
    h.prototype.options = {};
    h.prototype.getImages = function() {
        this.images = [];
        for (var a = 0; a < this.elements.length; a++)
            this.addElementImages(this.elements[a])
    }
    ;
    h.prototype.addElementImages = function(a) {
        "IMG" == a.nodeName && this.addImage(a);
        !0 === this.options.background && this.addElementBackgroundImages(a);
        var b = a.nodeType;
        if (b && v[b]) {
            var c = a.querySelectorAll("img");
            for (b = 0; b < c.length; b++)
                this.addImage(c[b]);
            if ("string" == typeof this.options.background)
                for (a = a.querySelectorAll(this.options.background),
                b = 0; b < a.length; b++)
                    this.addElementBackgroundImages(a[b])
        }
    }
    ;
    var v = {
        1: !0,
        9: !0,
        11: !0
    };
    h.prototype.addElementBackgroundImages = function(a) {
        for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d; )
            (d = d && d[1]) && this.addBackground(d, a),
            d = c.exec(b.backgroundImage)
    }
    ;
    var n = a.getComputedStyle || function(a) {
        return a.currentStyle
    }
    ;
    return h.prototype.addImage = function(a) {
        a = new d(a);
        this.images.push(a)
    }
    ,
    h.prototype.addBackground = function(a, b) {
        a = new f(a,b);
        this.images.push(a)
    }
    ,
    h.prototype.check = function() {
        function a(a, c, d) {
            setTimeout(function() {
                b.progress(a, c, d)
            })
        }
        var b = this;
        if (this.progressedCount = 0,
        this.hasAnyBroken = !1,
        !this.images.length)
            return void this.complete();
        for (var c = 0; c < this.images.length; c++) {
            var d = this.images[c];
            d.once("progress", a);
            d.check()
        }
    }
    ,
    h.prototype.progress = function(a, b, c) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded;
        this.emit("progress", this, a, b);
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a);
        this.progressedCount == this.images.length && this.complete();
        this.options.debug && r && r.log("progress: " + c, a, b)
    }
    ,
    h.prototype.complete = function() {
        var a = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0,
        this.emit(a, this),
        this.emit("always", this),
        this.jqDeferred)
            this.jqDeferred[this.hasAnyBroken ? "reject" : "resolve"](this)
    }
    ,
    d.prototype = new b,
    d.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        m.bind(this.proxyImage, "load", this),
        m.bind(this.proxyImage, "error", this),
        m.bind(this.img, "load", this),
        m.bind(this.img, "error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    d.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    d.prototype.confirm = function(a, b) {
        this.isLoaded = a;
        this.emit("progress", this, this.img, b)
    }
    ,
    d.prototype.handleEvent = function(a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }
    ,
    d.prototype.onload = function() {
        this.confirm(!0, "onload");
        this.unbindEvents()
    }
    ,
    d.prototype.onerror = function() {
        this.confirm(!1, "onerror");
        this.unbindEvents()
    }
    ,
    d.prototype.unbindEvents = function() {
        m.unbind(this.proxyImage, "load", this);
        m.unbind(this.proxyImage, "error", this);
        m.unbind(this.img, "load", this);
        m.unbind(this.img, "error", this)
    }
    ,
    f.prototype = new d,
    f.prototype.check = function() {
        m.bind(this.img, "load", this);
        m.bind(this.img, "error", this);
        this.img.src = this.url;
        this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    f.prototype.unbindEvents = function() {
        m.unbind(this.img, "load", this);
        m.unbind(this.img, "error", this)
    }
    ,
    f.prototype.confirm = function(a, b) {
        this.isLoaded = a;
        this.emit("progress", this, this.element, b)
    }
    ,
    h.makeJQueryPlugin = function(b) {
        (b = b || a.jQuery) && (q = b,
        q.fn.imagesLoaded = function(a, b) {
            return (new h(this,a,b)).jqDeferred.promise(q(this))
        }
        )
    }
    ,
    h.makeJQueryPlugin(),
    h
});
var App = function() {
    var a = function() {
        $(".navbar-toggle").on("click", function(a) {
            $(".toggle-icon").hasClass("is-clicked") ? $(".toggle-icon").removeClass("is-clicked") : $(".toggle-icon").addClass("is-clicked")
        })
    }
      , b = function() {
        $(document).ready(function(a) {
            var b = a(".sidebar-trigger")
              , c = a(".sidebar-content-overlay");
            b.on("click", function(d) {
                d.preventDefault();
                b.toggleClass("is-clicked");
                c.toggleClass("sidebar-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend");
                a(".sidebar-nav").toggleClass("sidebar-menu-is-open");
                a("html").hasClass("no-csstransitions") && a("body").toggleClass("overflow-hidden")
            });
            c.on("click", function(d) {
                a(d.target).is(".sidebar-trigger") || (b.removeClass("is-clicked"),
                c.removeClass("sidebar-menu-is-open").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
                    a("body").removeClass("overflow-hidden")
                }),
                a(".sidebar-nav").removeClass("sidebar-menu-is-open"),
                a("html").hasClass("no-csstransitions") && a("body").removeClass("overflow-hidden"))
            });
            a(window).scroll(function() {
                200 < a(this).scrollTop() && (a(".sidebar-content-overlay, .sidebar-nav").removeClass("sidebar-menu-is-open"),
                a(".sidebar-trigger").removeClass("is-clicked"))
            })
        })
    }
      , m = function() {
        $(".services-v7-collapsed").hide();
        $(".services-v7").on("hover", function() {
            $(this).find(".services-v7-collapsed").slideToggle(300)
        })
    }
      , l = function() {
        $(".work-v1-collapse").hide();
        $(".work-v1").on("hover", function() {
            $(this).find(".work-v1-collapse").slideToggle(400)
        })
    }
      , k = function() {
        $(".topbar-t-dropdown-menu").hide();
        $(".topbar-t-list-item").on("click", function() {
            $(this).find(".topbar-t-dropdown-menu").slideToggle(400)
        })
    }
      , h = function() {
        $(".topbar-t-dropdown-menu").hide();
        $(".topbar-t-shopping-window").on("click", function() {
            $(this).find(".topbar-t-dropdown-menu").slideToggle(400)
        })
    }
      , d = function() {
        $(".topbar-e-dropdown-menu").hide();
        $(".topbar-e-list-item").on("click", function() {
            $(this).find(".topbar-e-dropdown-menu").slideToggle(400)
        })
    }
      , f = function() {
        $(".topbar-e-dropdown-menu").hide();
        $(".topbar-e-shopping-window").on("click", function() {
            $(this).find(".topbar-e-dropdown-menu").slideToggle(400)
        })
    }
      , q = function() {
        $(".footer-toggle-collapse").hide();
        $(".footer-toggle-trigger").on("click", function(a) {
            a.preventDefault();
            $(this).toggleClass("is-open");
            $(".footer-toggle-collapse").slideToggle(500);
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 500)
        })
    }
      , r = function() {
        $(function() {
            $("a[href*=#scroll_]:not([href=#scroll_])").on("click", function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var a = $(this.hash);
                    a = a.length ? a : $("[name=" + this.hash.slice(1) + "]");
                    if (a.length)
                        return $("html,body").animate({
                            scrollTop: a.offset().top - 70
                        }, 1E3),
                        !1
                }
            })
        })
    }
      , c = function() {
        $(".equal-height-ib-bg-img").each(function() {
            $(this).css("background-image", "url(" + $(this).children("img").attr("src") + ")");
            $(this).children("img").hide()
        })
    }
      , v = function() {
        var a = $(window).height();
        var b = $(document.body).hasClass("promo-top-offset") ? $(".fullheight-header-offset").height() : 0;
        $(".fullheight").css("height", a - b);
        $(window).resize(function() {
            var a = $(window).height();
            $(".fullheight").css("height", a - b)
        })
    }
      , n = function() {
        $(".vertical-center-aligned").each(function() {
            $(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2)
        });
        $(window).resize(function() {
            $(".vertical-center-aligned").each(function() {
                $(this).css("padding-top", $(this).parent().height() / 2 - $(this).height() / 2)
            })
        })
    }
      , u = function() {
        $(".theme-toggle-trigger").on("click", function(a) {
            $(this).toggleClass(".theme-toggle-content").hide();
            $(this).toggleClass("is-open").show();
            $(".theme-toggle-content").slideToggle(400)
        })
    }
      , E = function() {
        $(".header-fullscreen-nav-bg-overlay");
        var a = $(".header-fullscreen-nav-close")
          , b = $(".header-fullscreen-nav-trigger")
          , c = $(".header-fullscreen-nav-overlay");
        b.on("click", function() {
            c.removeClass("header-fullscreen-nav-overlay-show");
            c.addClass("header-fullscreen-nav-overlay-show")
        });
        a.on("click", function(a) {
            a.stopPropagation();
            c.removeClass("header-fullscreen-nav-overlay-show")
        })
    }
      , z = function() {
        var a = $(".search-btn");
        a.on("click", function() {
            a.toggleClass("is-clicked");
            $(".search-field").fadeToggle(400)
        })
    }
      , x = function() {
        var a = $(".search-classic-btn");
        a.on("click", function() {
            a.toggleClass("is-clicked");
            $(".search-classic-field").fadeToggle(400)
        })
    }
      , H = function() {
        $(".search-fullscreen-bg-overlay");
        var a = $(".search-fullscreen-close")
          , b = $(".search-fullscreen-trigger")
          , c = $(".search-fullscreen-overlay");
        b.on("click", function() {
            c.removeClass("search-fullscreen-overlay-show");
            c.addClass("search-fullscreen-overlay-show")
        });
        a.on("click", function(a) {
            a.stopPropagation();
            c.removeClass("search-fullscreen-overlay-show")
        })
    }
      , B = function() {
        var a = $(".search-on-header-btn");
        a.on("click", function() {
            a.toggleClass("is-clicked");
            $(".search-on-header-field").fadeToggle(400)
        })
    }
      , D = function() {
        var a = $(".search-push-btn");
        a.on("click", function() {
            a.toggleClass("is-clicked");
            $(".search-push-open").slideToggle(400)
        });
        $(window).scroll(function() {
            1 < $(this).scrollTop() && $(".search-push-open").slideUp();
            a.removeClass("is-clicked")
        })
    };
    return {
        init: function() {
            $(".carousel").carousel({
                interval: 5E3,
                pause: "hover"
            });
            $(".tooltips").tooltip();
            $(".tooltips-show").tooltip("show");
            $(".tooltips-hide").tooltip("hide");
            $(".tooltips-toggle").tooltip("toggle");
            $(".tooltips-destroy").tooltip("destroy");
            $(".popovers").popover();
            $(".popovers-show").popover("show");
            $(".popovers-hide").popover("hide");
            $(".popovers-toggle").popover("toggle");
            $(".popovers-destroy").popover("destroy");
            a();
            b();
            m();
            l();
            k();
            h();
            d();
            f();
            q();
            r();
            c();
            v();
            n();
            u();
            E();
            z();
            x();
            H();
            B();
            D()
        }
    }
}();
$(document).ready(function() {
    App.init()
});
var HeaderSticky = function() {
    var a = function() {
        15 < $(".header-sticky").offset().top && $(".header-sticky").addClass("header-shrink");
        $(window).on("scroll", function() {
            15 < $(".header-sticky").offset().top ? $(".header-sticky").addClass("header-shrink") : $(".header-sticky").removeClass("header-shrink")
        })
    };
    return {
        init: function() {
            a()
        }
    }
}();
$(document).ready(function() {
    HeaderSticky.init()
});
var Scrollbar = function() {
    return {
        init: function() {
            $(".scrollbar").mCustomScrollbar({
                theme: "minimal-dark"
            })
        }
    }
}();
$(document).ready(function() {
    Scrollbar.init()
});
var FormModal = function() {
    var a = function() {
        $(document).ready(function(a) {
            function b() {
                k.addClass("is-selected");
                h.addClass("is-selected");
                d.removeClass("is-selected");
                f.removeClass("is-selected");
                r.addClass("selected");
                c.removeClass("selected")
            }
            function l() {
                k.addClass("is-selected");
                h.removeClass("is-selected");
                d.addClass("is-selected");
                f.removeClass("is-selected");
                c.addClass("selected");
                r.removeClass("selected")
            }
            var k = a(".form-modal")
              , h = k.find("#form-modal-login")
              , d = k.find("#form-modal-signup")
              , f = k.find("#form-modal-reset-password")
              , q = a(".form-modal-switcher")
              , r = q.children(".form-modal-switcher-item").eq(0)
              , c = q.children(".form-modal-switcher-item").eq(1)
              , v = h.find(".form-modal-back-btn");
            h.find(".form-modal-back-btn");
            var n = f.find(".form-modal-back-btn")
              , u = a(".form-modal-nav");
            u.on("click", function(c) {
                a(c.target).is(u) ? a(this).children("ul").toggleClass("is-visible") : (u.children("ul").removeClass("is-visible"),
                k.addClass("is-visible"),
                a(c.target).is(".form-modal-signup") ? l() : b())
            });
            a(".form-modal").on("click", function(b) {
                a(b.target).is(".form-modal-close-form") && k.removeClass("is-visible")
            });
            q.on("click", function(c) {
                c.preventDefault();
                a(c.target).is(r) ? b() : l()
            });
            a(".form-modal-hide-password").on("click", function() {
                var b = a(this)
                  , c = b.prev("input");
                "password" == c.attr("type") ? c.attr("type", "text") : c.attr("type", "password");
                "Hide" == b.text() ? b.text("Show") : b.text("Hide")
            });
            v.on("click", function(a) {
                a.preventDefault();
                h.removeClass("is-selected");
                d.removeClass("is-selected");
                f.addClass("is-selected")
            });
            n.on("click", function(a) {
                a.preventDefault();
                b()
            })
        })
    };
    return {
        init: function() {
            a()
        }
    }
}();
$(document).ready(function() {
    FormModal.init()
});
var Wow = function() {
    return {
        init: function() {
            (new WOW({
                boxClass: "wow",
                offset: 0,
                mobile: !1,
                tablet: !1
            })).init()
        }
    }
}();
$(document).ready(function() {
    Wow.init()
});
var MagnificPopup = function() {
    var a = function() {
        $(document).ready(function() {
            $(".image-popup-vertical-fit").magnificPopup({
                type: "image",
                closeOnContentClick: !0,
                mainClass: "mfp-img-mobile",
                image: {
                    verticalFit: !0
                }
            })
        });
        $(document).ready(function() {
            $(".popup-gallery").magnificPopup({
                delegate: "a.popup-gallery-child",
                type: "image",
                mainClass: "mfp-img-mobile",
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    preload: [0, 1]
                },
                image: {
                    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                }
            })
        });
        $(document).ready(function() {
            $(".popup-multiple-image").magnificPopup({
                type: "image",
                tLoading: "Loading image #%curr%...",
                fixedContentPos: !0,
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                    preload: [0, 1]
                }
            })
        });
        $(document).ready(function() {
            $(".popup-youtube, .popup-vimeo").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !0
            })
        })
    };
    return {
        init: function() {
            a()
        }
    }
}();
$(document).ready(function() {
    MagnificPopup.init()
});
var Masonry = function() {
    var a = function() {
        $(document).ready(function() {
            var a = $(".masonry-grid");
            a.imagesLoaded(function() {
                a.masonry({
                    itemSelector: ".masonry-grid-item",
                    columnWidth: 1,
                    percentPosition: !0,
                    transitionDuration: "0.5s"
                })
            })
        })
    };
    return {
        init: function() {
            a()
        }
    }
}();
$(document).ready(function() {
    Masonry.init()
});
$(".cls-1").on("mousemove", function(a) {
    mouseX = a.pageX;
    mouseY = a.pageY;
    el = $(this);
    el = $(this);
    id = el.attr("data-name");
    $(".district_name").html(id);
    $(".district_name").css({
        top: mouseY - 100,
        left: mouseX + 50
    });
    $(".district_name").show()
});
$(".cls-1").mouseout(function(a) {
    $(".district_name").hide()
});
$(document).on("keydown", function(a) {
    a.ctrlKey && 13 == a.keyCode && (selected = window.getSelection().toString(),
    console.log(selected),
    $("#mistake_to_send").val(selected),
    $("#fake_mistake").val(selected),
    $("#error-sender-modal").modal("show"),
    console.log("Ctrl+Enter!"))
});
function inic_vftvi() {
    1 == parseInt($.cookie("vftvi")) ? ($("body").addClass("vftvi"),
    $("#toogle_site_view").addClass("active"),
    $("#toogle_site_view .turn_on").attr("arria-hidden", !0),
    $("#toogle_site_view .turn_off").attr("arria-hidden", !1),
    document.createStyleSheet ? document.createStyleSheet("vftvi.css") : $("head").append($("<link rel='stylesheet' href='vftvi.css' type='text/css' media='screen' />"))) : ($("body").removeClass("vftvi"),
    $("#toogle_site_view").removeClass("active"),
    $("#toogle_site_view .turn_on").attr("arria-hidden", !1),
    $("#toogle_site_view .turn_off").attr("arria-hidden", !0))
}
$("#toogle_site_view").click(function() {
    $.cookie("vftvi", parseInt($.cookie("vftvi")) ? 0 : 1, {
        expires: 1,
        path: "/"
    });
    inic_vftvi();
    jQuery(window).resize()
});
inic_vftvi();
function inic_vftvi_contrast() {
    1 == parseInt($.cookie("vftvi_contrast")) ? ($("body").addClass("vftvi_contrast"),
    $("#toogle_site_view_contrast").addClass("active"),
    $("#toogle_site_view_contrast .turn_on").attr("arria-hidden", !0),
    $("#toogle_site_view_contrast .turn_off").attr("arria-hidden", !1),
    document.createStyleSheet ? document.createStyleSheet("vftvi_contrast.css") : $("head").append($("<link rel='stylesheet' href='vftvi_contrast.css' type='text/css' media='screen' />"))) : ($("body").removeClass("vftvi_contrast"),
    $("#toogle_site_view_contrast").removeClass("active"),
    $("#toogle_site_view_contrast .turn_on").attr("arria-hidden", !1),
    $("#toogle_site_view_contrast .turn_off").attr("arria-hidden", !0))
}
$("#toogle_site_view_contrast").click(function() {
    $.cookie("vftvi_contrast", parseInt($.cookie("vftvi_contrast")) ? 0 : 1, {
        expires: 1,
        path: "/"
    });
    inic_vftvi_contrast();
    jQuery(window).resize()
});
inic_vftvi_contrast();
var $affectedElements = $("p, div, h1, h2, h3, h4, h5, h6, span, a");
$affectedElements.each(function() {
    var a = $(this);
    a.data("orig-size", a.css("font-size"))
});
$("#font_size_vftvi .ico.p").click(function() {
    changeFontSize(1)
});
$("#font_size_vftvi .ico.m").click(function() {
    changeFontSize(-1)
});
$("#font_size_vftvi .ico.r").click(function() {
    $affectedElements.each(function() {
        var a = $(this);
        a.css("font-size", a.data("orig-size"))
    })
});
function changeFontSize(a) {
    $affectedElements.each(function() {
        var b = $(this);
        b.css("font-size", parseInt(b.css("font-size")) + a)
    })
}
!function(a, b, m, l) {
    function k(b, d) {
        this.settings = null;
        this.options = a.extend({}, k.Defaults, d);
        this.$element = a(b);
        this.drag = a.extend({}, f);
        this.state = a.extend({}, q);
        this.e = a.extend({}, r);
        this._plugins = {};
        this._supress = {};
        this._speed = this._current = null;
        this._coordinates = [];
        this._width = this._breakpoint = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._invalidated = {};
        this._pipe = [];
        a.each(k.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this));
        a.each(k.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    function h(a) {
        if (a.touches !== l)
            return {
                x: a.touches[0].pageX,
                y: a.touches[0].pageY
            };
        if (a.touches === l) {
            if (a.pageX !== l)
                return {
                    x: a.pageX,
                    y: a.pageY
                };
            if (a.pageX === l)
                return {
                    x: a.clientX,
                    y: a.clientY
                }
        }
    }
    function d(a) {
        var b, c, d = m.createElement("div");
        for (b in a)
            if (c = a[b],
            "undefined" != typeof d.style[c])
                return [c, b];
        return [!1]
    }
    var f = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    };
    var q = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    };
    var r = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    };
    k.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    };
    k.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    k.Plugins = {};
    k.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones;
            (this.$stage.children(".cloned").length !== a.length || !this.settings.loop && 0 < a.length) && (this.$stage.children(".cloned").remove(),
            this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b = this._clones, d = this._items, f = this.settings.loop ? b.length - Math.max(2 * this.settings.items, 4) : 0;
            var h = 0;
            for (a = Math.abs(f / 2); a > h; h++)
                0 < f ? (this.$stage.children().eq(d.length + b.length - 1).remove(),
                b.pop(),
                this.$stage.children().eq(0).remove(),
                b.pop()) : (b.push(b.length / 2),
                this.$stage.append(d[b[b.length - 1]].clone().addClass("cloned")),
                b.push(d.length - 1 - (b.length - 1) / 2),
                this.$stage.prepend(d[b[b.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b = this.settings.rtl ? 1 : -1, d = (this.width() / this.settings.items).toFixed(3), f = 0;
            this._coordinates = [];
            var h = 0;
            for (a = this._clones.length + this._items.length; a > h; h++) {
                var k = this._mergers[this.relative(h)];
                k = this.settings.mergeFit && Math.min(k, this.settings.items) || k;
                f += (this.settings.autoWidth ? this._items[this.relative(h)].width() + this.settings.margin : d * k) * b;
                this._coordinates.push(f)
            }
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b;
            var d = (this.width() / this.settings.items).toFixed(3);
            var f = {
                width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                "padding-left": this.settings.stagePadding || "",
                "padding-right": this.settings.stagePadding || ""
            };
            if (this.$stage.css(f),
            f = {
                width: this.settings.autoWidth ? "auto" : d - this.settings.margin
            },
            f[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin,
            !this.settings.autoWidth && 0 < a.grep(this._mergers, function(a) {
                return 1 < a
            }).length)
                for (d = 0,
                b = this._coordinates.length; b > d; d++)
                    f.width = Math.abs(this._coordinates[d]) - Math.abs(this._coordinates[d - 1] || 0) - this.settings.margin,
                    this.$stage.children().eq(d).css(f);
            else
                this.$stage.children().css(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b = this.settings.rtl ? 1 : -1, d = 2 * this.settings.stagePadding, f = this.coordinates(this.current()) + d, h = f + this.width() * b, k = [];
            var l = 0;
            for (a = this._coordinates.length; a > l; l++) {
                var m = this._coordinates[l - 1] || 0;
                var q = Math.abs(this._coordinates[l]) + d * b;
                (this.op(m, "<=", f) && this.op(m, ">", h) || this.op(q, "<", f) && this.op(q, ">", h)) && k.push(l)
            }
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass);
            this.$stage.children(":eq(" + k.join("), :eq(") + ")").addClass(this.settings.activeClass);
            this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass),
            this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }];
    k.prototype.initialize = function() {
        if (this.trigger("initialize"),
        this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl),
        this.browserSupport(),
        this.settings.autoWidth && !0 !== this.state.imagesLoaded) {
            var b, d, f;
            if (b = this.$element.find("img"),
            d = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : l,
            f = this.$element.children(d).width(),
            b.length && 0 >= f)
                return this.preloadAutoWidthImages(b),
                !1
        }
        this.$element.addClass("owl-loading");
        this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this._width = this.$element.width();
        this.refresh();
        this.$element.removeClass("owl-loading").addClass("owl-loaded");
        this.eventsCall();
        this.internalEvents();
        this.addTriggerableEvents();
        this.trigger("initialized")
    }
    ;
    k.prototype.setup = function() {
        var b = this.viewport()
          , d = this.options.responsive
          , f = -1
          , h = null;
        d ? (a.each(d, function(a) {
            b >= a && a > f && (f = Number(a))
        }),
        h = a.extend({}, this.options, d[f]),
        delete h.responsive,
        h.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + f)) : h = a.extend({}, this.options);
        null !== this.settings && this._breakpoint === f || (this.trigger("change", {
            property: {
                name: "settings",
                value: h
            }
        }),
        this._breakpoint = f,
        this.settings = h,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }
    ;
    k.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center);
        this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1);
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ;
    k.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ;
    k.prototype.update = function() {
        for (var b = 0, d = this._pipe.length, f = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), h = {}; d > b; )
            (this._invalidated.all || 0 < a.grep(this._pipe[b].filter, f).length) && this._pipe[b].run(h),
            b++;
        this._invalidated = {}
    }
    ;
    k.prototype.width = function(a) {
        switch (a || k.Width.Default) {
        case k.Width.Inner:
        case k.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ;
    k.prototype.refresh = function() {
        if (0 === this._items.length)
            return !1;
        (new Date).getTime();
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$stage.addClass("owl-refresh");
        this.update();
        this.$stage.removeClass("owl-refresh");
        this.state.orientation = b.orientation;
        this.watchVisibility();
        this.trigger("refreshed")
    }
    ;
    k.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this);
        this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this);
        this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this);
        this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this);
        this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this);
        this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }
    ;
    k.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer);
        this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }
    ;
    k.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(),
        this.invalidate("width"),
        this.refresh(),
        void this.trigger("resized")) : !1
    }
    ;
    k.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }
    ;
    k.prototype.internalEvents = function() {
        var c = b.navigator.msPointerEnabled;
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)),
        this.$stage.on("dragstart", function() {
            return !1
        }),
        this.$stage.get(0).onselectstart = function() {
            return !1
        }
        ) : this.$element.addClass("owl-text-select-on");
        this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this));
        this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1);
        !1 !== this.settings.responsive && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }
    ;
    k.prototype.onDragStart = function(c) {
        var d, f;
        if (d = c.originalEvent || c || b.event,
        3 === d.which || this.state.isTouch)
            return !1;
        if ("mousedown" === d.type && this.$stage.addClass("owl-grab"),
        this.trigger("drag"),
        this.drag.startTime = (new Date).getTime(),
        this.speed(0),
        this.state.isTouch = !0,
        this.state.isScrolling = !1,
        this.state.isSwiping = !1,
        this.drag.distance = 0,
        c = h(d).x,
        f = h(d).y,
        this.drag.offsetX = this.$stage.position().left,
        this.drag.offsetY = this.$stage.position().top,
        this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin),
        this.state.inMotion && this.support3d) {
            var k = this.getTransformProperty();
            this.drag.offsetX = k;
            this.animate(k);
            this.state.inMotion = !0
        } else if (this.state.inMotion && !this.support3d)
            return this.state.inMotion = !1,
            !1;
        this.drag.startX = c - this.drag.offsetX;
        this.drag.startY = f - this.drag.offsetY;
        this.drag.start = c - this.drag.startX;
        this.drag.targetEl = d.target || d.srcElement;
        this.drag.updatedX = this.drag.start;
        "IMG" !== this.drag.targetEl.tagName && "A" !== this.drag.targetEl.tagName || (this.drag.targetEl.draggable = !1);
        a(m).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }
    ;
    k.prototype.onDragMove = function(a) {
        var c, d, f, k, m, q;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event,
        d = h(c).x,
        f = h(c).y,
        this.drag.currentX = d - this.drag.startX,
        this.drag.currentY = f - this.drag.startY,
        this.drag.distance = this.drag.currentX - this.drag.offsetX,
        0 > this.drag.distance ? this.state.direction = this.settings.rtl ? "right" : "left" : 0 < this.drag.distance && (this.state.direction = this.settings.rtl ? "left" : "right"),
        this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (k = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()),
        m = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()),
        q = this.settings.pullDrag ? this.drag.distance / 5 : 0,
        this.drag.currentX = Math.max(Math.min(this.drag.currentX, k + q), m + q)),
        (8 < this.drag.distance || -8 > this.drag.distance) && (c.preventDefault !== l ? c.preventDefault() : c.returnValue = !1,
        this.state.isSwiping = !0),
        this.drag.updatedX = this.drag.currentX,
        (16 < this.drag.currentY || -16 > this.drag.currentY) && !1 === this.state.isSwiping && (this.state.isScrolling = !0,
        this.drag.updatedX = this.drag.start),
        this.animate(this.drag.updatedX)))
    }
    ;
    k.prototype.onDragEnd = function(b) {
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"),
            this.trigger("dragged"),
            this.drag.targetEl.removeAttribute("draggable"),
            this.state.isTouch = !1,
            this.state.isScrolling = !1,
            this.state.isSwiping = !1,
            0 === this.drag.distance && !0 !== this.state.inMotion)
                return this.state.inMotion = !1,
                !1;
            this.drag.endTime = (new Date).getTime();
            b = this.drag.endTime - this.drag.startTime;
            var c = Math.abs(this.drag.distance);
            (3 < c || 300 < b) && this.removeClick(this.drag.targetEl);
            b = this.closest(this.drag.updatedX);
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(b);
            this.invalidate("position");
            this.update();
            this.settings.pullDrag || this.drag.updatedX !== this.coordinates(b) || this.transitionEnd();
            this.drag.distance = 0;
            a(m).off(".owl.dragEvents")
        }
    }
    ;
    k.prototype.removeClick = function(c) {
        this.drag.targetEl = c;
        a(c).on("click.preventClick", this.e._preventClick);
        b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }
    ;
    k.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1;
        b.stopPropagation && b.stopPropagation();
        a(b.target).off("click.preventClick")
    }
    ;
    k.prototype.getTransformProperty = function() {
        var a, d;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"),
        a = a.replace(/matrix(3d)?\(|\)/g, "").split(","),
        d = 16 === a.length,
        !0 !== d ? a[4] : a[12]
    }
    ;
    k.prototype.closest = function(b) {
        var c = -1
          , d = this.width()
          , f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, h) {
            return b > h - 30 && h + 30 > b ? c = a : this.op(b, "<", h) && this.op(b, ">", f[a + 1] || h - d) && (c = "left" === this.state.direction ? a + 1 : a),
            -1 === c
        }, this)),
        this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
        c
    }
    ;
    k.prototype.animate = function(b) {
        this.trigger("translate");
        this.state.inMotion = 0 < this.speed();
        this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1E3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1E3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }
    ;
    k.prototype.current = function(a) {
        if (a === l)
            return this._current;
        if (0 === this._items.length)
            return l;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== l && (a = this.normalize(b.data));
            this._current = a;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ;
    k.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }
    ;
    k.prototype.reset = function(a) {
        a = this.normalize(a);
        a !== l && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ;
    k.prototype.normalize = function(b, d) {
        var c = d ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > c ? l : this._clones.length ? (b % c + c) % c : Math.max(this.minimum(d), Math.min(this.maximum(d), b))
    }
    ;
    k.prototype.relative = function(a) {
        return a = this.normalize(a),
        a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ;
    k.prototype.maximum = function(a) {
        var b, c = 0, d = this.settings;
        if (a)
            return this._items.length - 1;
        if (!d.loop && d.center)
            var f = this._items.length - 1;
        else if (d.loop || d.center)
            if (d.loop || d.center)
                f = this._items.length + d.items;
            else {
                if (!d.autoWidth && !d.merge)
                    throw "Can not detect maximum absolute position.";
                revert = d.rtl ? 1 : -1;
                for (a = this.$stage.width() - this.$element.width(); (b = this.coordinates(c)) && !(b * revert >= a); )
                    f = ++c
            }
        else
            f = this._items.length - d.items;
        return f
    }
    ;
    k.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ;
    k.prototype.items = function(a) {
        return a === l ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ;
    k.prototype.mergers = function(a) {
        return a === l ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ;
    k.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , d = c + this._items.length;
        return b === l ? a.map(this._clones, function(a, b) {
            return 0 === b % 2 ? d + b / 2 : c - (b + 1) / 2
        }) : a.map(this._clones, function(a, f) {
            return a === b ? 0 === f % 2 ? d + f / 2 : c - (f + 1) / 2 : null
        })
    }
    ;
    k.prototype.speed = function(a) {
        return a !== l && (this._speed = a),
        this._speed
    }
    ;
    k.prototype.coordinates = function(b) {
        var c = null;
        return b === l ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0,
        c)
    }
    ;
    k.prototype.duration = function(a, b, d) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(d || this.settings.smartSpeed)
    }
    ;
    k.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var f = c - this.relative(this.current())
              , h = this.current();
            c = this.current();
            var k = this.current() + f
              , l = 0 > c - k ? !0 : !1
              , m = this._clones.length + this._items.length;
            k < this.settings.items && !1 === l ? (h = c + this._items.length,
            this.reset(h)) : k >= m - this.settings.items && !0 === l && (h = c - this._items.length,
            this.reset(h));
            b.clearTimeout(this.e._goToLoop);
            this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), h + f, d));
                this.current(h + f);
                this.update()
            }, this), 30)
        } else
            this.speed(this.duration(this.current(), c, d)),
            this.current(c),
            this.update()
    }
    ;
    k.prototype.next = function(a) {
        a = a || !1;
        this.to(this.relative(this.current()) + 1, a)
    }
    ;
    k.prototype.prev = function(a) {
        a = a || !1;
        this.to(this.relative(this.current()) - 1, a)
    }
    ;
    k.prototype.transitionEnd = function(a) {
        return a !== l && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1,
        void this.trigger("translated"))
    }
    ;
    k.prototype.viewport = function() {
        if (this.options.responsiveBaseElement !== b)
            var c = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth)
            c = b.innerWidth;
        else {
            if (!m.documentElement || !m.documentElement.clientWidth)
                throw "Can not detect viewport width.";
            c = m.documentElement.clientWidth
        }
        return c
    }
    ;
    k.prototype.replace = function(b) {
        this.$stage.empty();
        this._items = [];
        b && (b = b instanceof jQuery ? b : a(b));
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector));
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b);
            this.$stage.append(b);
            this._items.push(b);
            this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    }
    ;
    k.prototype.add = function(a, b) {
        b = b === l ? this._items.length : this.normalize(b, !0);
        this.trigger("add", {
            content: a,
            position: b
        });
        0 === this._items.length || b === this._items.length ? (this.$stage.append(a),
        this._items.push(a),
        this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a),
        this._items.splice(b, 0, a),
        this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1));
        this.invalidate("items");
        this.trigger("added", {
            content: a,
            position: b
        })
    }
    ;
    k.prototype.remove = function(a) {
        a = this.normalize(a, !0);
        a !== l && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ;
    k.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]),
                b.apply(this, [].slice.call(arguments, 1)),
                this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }
    ;
    k.prototype.watchVisibility = function() {
        function c(a) {
            return 0 < a.offsetWidth && 0 < a.offsetHeight
        }
        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"),
            this.refresh(),
            b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"),
        b.clearInterval(this.e._checkVisibile),
        this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }
    ;
    k.prototype.preloadAutoWidthImages = function(b) {
        var c, d;
        var f = 0;
        var h = this;
        b.each(function(k, l) {
            c = a(l);
            d = new Image;
            d.onload = function() {
                f++;
                c.attr("src", d.src);
                c.css("opacity", 1);
                f >= b.length && (h.state.imagesLoaded = !0,
                h.initialize())
            }
            ;
            d.src = c.attr("src") || c.attr("data-src") || c.attr("data-src-retina")
        })
    }
    ;
    k.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass);
        !1 !== this.settings.responsive && a(b).off("resize.owl.carousel");
        this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var c in this._plugins)
            this._plugins[c].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"),
        a(m).off(".owl.dragEvents"),
        this.$stage.get(0).onselectstart = function() {}
        ,
        this.$stage.off("dragstart", function() {
            return !1
        }));
        this.$element.off(".owl");
        this.$stage.children(".cloned").remove();
        this.e = null;
        this.$element.removeData("owlCarousel");
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.unwrap()
    }
    ;
    k.prototype.op = function(a, b, d) {
        var c = this.settings.rtl;
        switch (b) {
        case "<":
            return c ? a > d : d > a;
        case ">":
            return c ? d > a : a > d;
        case ">=":
            return c ? d >= a : a >= d;
        case "<=":
            return c ? a >= d : d >= a
        }
    }
    ;
    k.prototype.on = function(a, b, d, f) {
        a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent && a.attachEvent("on" + b, d)
    }
    ;
    k.prototype.off = function(a, b, d, f) {
        a.removeEventListener ? a.removeEventListener(b, d, f) : a.detachEvent && a.detachEvent("on" + b, d)
    }
    ;
    k.prototype.trigger = function(b, d, f) {
        var c = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , h = a.camelCase(a.grep(["on", b, f], function(a) {
            return a
        }).join("-").toLowerCase())
          , k = a.Event([b, "owl", f || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, c, d));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(k)
        }),
        this.$element.trigger(k),
        this.settings && "function" == typeof this.settings[h] && this.settings[h].apply(this, k)),
        k
    }
    ;
    k.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ;
    k.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ;
    k.prototype.browserSupport = function() {
        if (this.support3d = d(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0],
        this.support3d)
            this.transformVendor = d(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0],
            this.transitionEndVendor = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"][d(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]],
            this.vendorName = this.transformVendor.replace(/Transform/i, ""),
            this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "";
        this.state.orientation = b.orientation
    }
    ;
    a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new k(this,b))
        })
    }
    ;
    a.fn.owlCarousel.Constructor = k
}(window.Zepto || window.jQuery, window, document);
(function(a, b) {
    var m = function(b) {
        this._core = b;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var h = this._core.settings
                      , d = h.center && Math.ceil(h.items / 2) || h.items;
                    h = h.center && -1 * d || 0;
                    b = (b.property && b.property.value || this._core.current()) + h;
                    for (var f = this._core.clones().length, k = a.proxy(function(a, b) {
                        this.load(b)
                    }, this); h++ < d; )
                        this.load(f / 2 + this._core.relative(b)),
                        f && a.each(this._core.clones(this._core.relative(b++)), k)
                }
            }, this)
        };
        this._core.options = a.extend({}, m.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    m.Defaults = {
        lazyLoad: !1
    };
    m.prototype.load = function(l) {
        var k = (l = this._core.$stage.children().eq(l)) && l.find(".owl-lazy");
        !k || -1 < a.inArray(l.get(0), this._loaded) || (k.each(a.proxy(function(h, d) {
            var f, k = a(d), l = 1 < b.devicePixelRatio && k.attr("data-src-retina") || k.attr("data-src");
            this._core.trigger("load", {
                element: k,
                url: l
            }, "lazy");
            k.is("img") ? k.one("load.owl.lazy", a.proxy(function() {
                k.css("opacity", 1);
                this._core.trigger("loaded", {
                    element: k,
                    url: l
                }, "lazy")
            }, this)).attr("src", l) : (f = new Image,
            f.onload = a.proxy(function() {
                k.css({
                    "background-image": "url(" + l + ")",
                    opacity: "1"
                });
                this._core.trigger("loaded", {
                    element: k,
                    url: l
                }, "lazy")
            }, this),
            f.src = l)
        }, this)),
        this._loaded.push(l.get(0)))
    }
    ;
    m.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ;
    a.fn.owlCarousel.Constructor.Plugins.Lazy = m
}
)(window.Zepto || window.jQuery, window, document);
(function(a) {
    var b = function(m) {
        this._core = m;
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        };
        this._core.options = a.extend({}, b.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    };
    b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }
    ;
    b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ;
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}
)(window.Zepto || window.jQuery, window, document);
(function(a, b, m) {
    var l = function(b) {
        this._core = b;
        this._videos = {};
        this._playing = null;
        this._fullscreen = !1;
        this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var d = a(b.content).find(".owl-video");
                d.length && (d.css("display", "none"),
                this.fetch(d, a(b.content)))
            }, this)
        };
        this._core.options = a.extend({}, l.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    l.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    l.prototype.fetch = function(a, b) {
        a.attr("data-vimeo-id");
        var d = a.attr("data-vimeo-id") || a.attr("data-youtube-id")
          , f = a.attr("data-width") || this._core.settings.videoWidth
          , h = a.attr("data-height") || this._core.settings.videoHeight
          , k = a.attr("href");
        if (!k)
            throw Error("Missing video URL.");
        if (d = k.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),
        -1 < d[3].indexOf("youtu"))
            var c = "youtube";
        else {
            if (!(-1 < d[3].indexOf("vimeo")))
                throw Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6];
        this._videos[k] = {
            type: c,
            id: d,
            width: f,
            height: h
        };
        b.attr("data-video", k);
        this.thumbnail(a, this._videos[k])
    }
    ;
    l.prototype.thumbnail = function(b, h) {
        var d, f, k = h.width && h.height ? 'style="width:' + h.width + "px;height:" + h.height + 'px;"' : "", l = b.find("img"), c = "src", m = "", n = this._core.settings, u = function(a) {
            d = n.lazyLoad ? '<div class="owl-video-tn ' + m + '" ' + c + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>';
            b.after(d);
            b.after('<div class="owl-video-play-icon"></div>')
        };
        return b.wrap('<div class="owl-video-wrapper"' + k + "></div>"),
        this._core.settings.lazyLoad && (c = "data-src",
        m = "owl-lazy"),
        l.length ? (u(l.attr(c)),
        l.remove(),
        !1) : void ("youtube" === h.type ? (f = "http://img.youtube.com/vi/" + h.id + "/hqdefault.jpg",
        u(f)) : "vimeo" === h.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + h.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large;
                u(f)
            }
        }))
    }
    ;
    l.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null
    }
    ;
    l.prototype.play = function(b) {
        this._core.trigger("play", null, "video");
        this._playing && this.stop();
        var h;
        b = a(b.target || b.srcElement);
        var d = b.closest("." + this._core.settings.itemClass)
          , f = this._videos[d.attr("data-video")]
          , k = f.width || "100%"
          , l = f.height || this._core.$stage.height();
        "youtube" === f.type ? h = '<iframe width="' + k + '" height="' + l + '" src="http://www.youtube.com/embed/' + f.id + "?autoplay=1&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type && (h = '<iframe src="http://player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + k + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        d.addClass("owl-video-playing");
        this._playing = d;
        h = a('<div style="height:' + l + "px; width:" + k + 'px" class="owl-video-frame">' + h + "</div>");
        b.after(h)
    }
    ;
    l.prototype.isInFullScreen = function() {
        var k = m.fullscreenElement || m.mozFullScreenElement || m.webkitFullscreenElement;
        return k && a(k).parent().hasClass("owl-video-frame") && (this._core.speed(0),
        this._fullscreen = !0),
        k && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1,
        !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation,
        !1) : !0
    }
    ;
    l.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ;
    a.fn.owlCarousel.Constructor.Plugins.Video = l
}
)(window.Zepto || window.jQuery, window, document);
(function(a, b, m, l) {
    var k = function(b) {
        this.core = b;
        this.core.options = a.extend({}, k.Defaults, this.core.options);
        this.swapping = !0;
        this.next = this.previous = l;
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    k.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    k.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, d = a.proxy(this.clear, this), f = this.core.$stage.children().eq(this.previous), k = this.core.$stage.children().eq(this.next), l = this.core.settings.animateIn, c = this.core.settings.animateOut;
            this.core.current() !== this.previous && (c && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            f.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(c).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", d)),
            l && k.addClass("animated owl-animated-in").addClass(l).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", d))
        }
    }
    ;
    k.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.transitionEnd()
    }
    ;
    k.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ;
    a.fn.owlCarousel.Constructor.Plugins.Animate = k
}
)(window.Zepto || window.jQuery, window, document);
(function(a, b, m) {
    var l = function(b) {
        this.core = b;
        this.core.options = a.extend({}, l.Defaults, this.core.options);
        this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, f) {
                this.play(b, f)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    l.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5E3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    };
    l.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval),
        this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }
    ;
    l.prototype.play = function() {
        return !0 === m.hidden || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : !1 === this.core.settings.autoplay ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }
    ;
    l.prototype.stop = function() {
        b.clearInterval(this.interval)
    }
    ;
    l.prototype.pause = function() {
        b.clearInterval(this.interval)
    }
    ;
    l.prototype.destroy = function() {
        var a, h;
        b.clearInterval(this.interval);
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (h in Object.getOwnPropertyNames(this))
            "function" != typeof this[h] && (this[h] = null)
    }
    ;
    a.fn.owlCarousel.Constructor.Plugins.autoplay = l
}
)(window.Zepto || window.jQuery, window, document);
(function(a) {
    var b = function(m) {
        this._core = m;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current()
                      , h = this._core.maximum()
                      , d = this._core.minimum();
                    a.data = a.property.value > h ? b >= h ? d : h : a.property.value < d ? h : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(),
                this._initialized = !0);
                this._core.trigger("refresh", null, "navigation");
                this.update();
                this.draw();
                this._core.trigger("refreshed", null, "navigation")
            }, this)
        };
        this._core.options = a.extend({}, b.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    };
    b.prototype.initialize = function() {
        var b, l = this._core.settings;
        l.dotsData || (this._templates = [a("<div>").addClass(l.dotClass).append(a("<span>")).prop("outerHTML")]);
        l.navContainer && l.dotsContainer || (this._controls.$container = a("<div>").addClass(l.controlsClass).appendTo(this.$element));
        this._controls.$indicators = l.dotsContainer ? a(l.dotsContainer) : a("<div>").hide().addClass(l.dotsClass).appendTo(this._controls.$container);
        this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault();
            this.to(d, l.dotsSpeed)
        }, this));
        var k = l.navContainer ? a(l.navContainer) : a("<div>").addClass(l.navContainerClass).prependTo(this._controls.$container);
        this._controls.$next = a("<" + l.navElement + ">");
        this._controls.$previous = this._controls.$next.clone();
        this._controls.$previous.addClass(l.navClass[0]).html(l.navText[0]).hide().prependTo(k).on("click", a.proxy(function() {
            this.prev(l.navSpeed)
        }, this));
        this._controls.$next.addClass(l.navClass[1]).html(l.navText[1]).hide().appendTo(k).on("click", a.proxy(function() {
            this.next(l.navSpeed)
        }, this));
        for (b in this._overrides)
            this._core[b] = a.proxy(this[b], this)
    }
    ;
    b.prototype.destroy = function() {
        var a, b, k, h;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            this._controls[b].remove();
        for (h in this.overides)
            this._core[h] = this._overrides[h];
        for (k in Object.getOwnPropertyNames(this))
            "function" != typeof this[k] && (this[k] = null)
    }
    ;
    b.prototype.update = function() {
        var a, b;
        var k = this._core.settings;
        var h = this._core.clones().length / 2
          , d = h + this._core.items().length
          , f = k.center || k.autoWidth || k.dotData ? 1 : k.dotsEach || k.items;
        if ("page" !== k.slideBy && (k.slideBy = Math.min(k.slideBy, k.items)),
        k.dots || "page" == k.slideBy)
            for (this._pages = [],
            k = h,
            b = a = 0; d > k; k++)
                (a >= f || 0 === a) && (this._pages.push({
                    start: k - h,
                    end: k - h + f - 1
                }),
                a = 0,
                ++b),
                a += this._core.mergers(this._core.relative(k))
    }
    ;
    b.prototype.draw = function() {
        var b, l = "", k = this._core.settings, h = (this._core.$stage.children(),
        this._core.relative(this._core.current()));
        if (!k.nav || k.loop || k.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= h),
        this._controls.$next.toggleClass("disabled", h >= this._core.maximum())),
        this._controls.$previous.toggle(k.nav),
        this._controls.$next.toggle(k.nav),
        k.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length,
            k.dotData && 0 !== b) {
                for (b = 0; b < this._controls.$indicators.children().length; b++)
                    l += this._templates[this._core.relative(b)];
                this._controls.$indicators.html(l)
            } else
                0 < b ? (l = Array(b + 1).join(this._templates[0]),
                this._controls.$indicators.append(l)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active");
            this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(k.dots)
    }
    ;
    b.prototype.onTrigger = function(b) {
        var l = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: l && (l.center || l.autoWidth || l.dotData ? 1 : l.dotsEach || l.items)
        }
    }
    ;
    b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }
    ;
    b.prototype.getPosition = function(b) {
        var l, k, h = this._core.settings;
        return "page" == h.slideBy ? (l = a.inArray(this.current(), this._pages),
        k = this._pages.length,
        b ? ++l : --l,
        l = this._pages[(l % k + k) % k].start) : (l = this._core.relative(this._core.current()),
        this._core.items(),
        b ? l += h.slideBy : l -= h.slideBy),
        l
    }
    ;
    b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ;
    b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ;
    b.prototype.to = function(b, l, k) {
        var h;
        k ? a.proxy(this._overrides.to, this._core)(b, l) : (h = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % h + h) % h].start, l))
    }
    ;
    a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}
)(window.Zepto || window.jQuery, window, document);
(function(a, b) {
    var m = function(l) {
        this._core = l;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var h = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[h] = b.content
            }, this)
        };
        this._core.options = a.extend({}, m.Defaults, this._core.options);
        this.$element.on(this._handlers);
        a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1)
              , h = this._core.$stage.children();
            h = this._hashes[a] && h.index(this._hashes[a]) || 0;
            return a ? void this._core.to(h, !1, !0) : !1
        }, this))
    };
    m.Defaults = {
        URLhashListener: !1
    };
    m.prototype.destroy = function() {
        var l, k;
        a(b).off("hashchange.owl.navigation");
        for (l in this._handlers)
            this._core.$element.off(l, this._handlers[l]);
        for (k in Object.getOwnPropertyNames(this))
            "function" != typeof this[k] && (this[k] = null)
    }
    ;
    a.fn.owlCarousel.Constructor.Plugins.Hash = m
}
)(window.Zepto || window.jQuery, window, document);
var OwlCarousel = function() {
    var a = function() {
        $(document).ready(function() {
            $(".owl-carousel-testimonials-one-item").owlCarousel({
                items: 1,
                loop: !0,
                dots: !0,
                nav: !1,
                margin: 30,
                autoplay: !0,
                smartSpeed: 450,
                autoplaySpeed: 1E3
            })
        })
    }
      , b = function() {
        $(document).ready(function() {
            var a = $(".owl-carousel-testimonials-three-item");
            a.owlCarousel({
                items: 4,
                loop: !0,
                dots: !1,
                nav: !0,
                navText: ["", ""],
                navContainer: ".owl-controls-testimonials-three-item",
                margin: 30,
                autoplay: !0,
                smartSpeed: 450,
                autoplaySpeed: 1E3,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    550: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 4
                    },
                    1199: {
                        items: 4
                    }
                }
            });
            $(".owl-controls-testimonials-three-item-next").on("click", function() {
                a.trigger("next.owl.carousel")
            });
            $(".owl-controls-testimonials-three-item-prev").on("click", function() {
                a.trigger("prev.owl.carousel", [300])
            })
        })
    }
      , m = function() {
        $(document).ready(function() {
            var a = $(".owl-carousel-team-v1");
            a.owlCarousel({
                items: 3,
                loop: !0,
                dots: !1,
                nav: !0,
                navText: ["", ""],
                navContainer: ".owl-controls-team-v1",
                margin: 30,
                autoplay: !0,
                smartSpeed: 450,
                autoplaySpeed: 1E3,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    550: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1199: {
                        items: 3
                    }
                }
            });
            $(".owl-controls-team-v1-next").on("click", function() {
                a.trigger("next.owl.carousel")
            });
            $(".owl-controls-team-v1-prev").on("click", function() {
                a.trigger("prev.owl.carousel", [300])
            })
        })
    }
      , l = function() {
        $(document).ready(function() {
            $(".owl-carousel-testimonials-v4").owlCarousel({
                items: 1,
                loop: !0,
                dots: !0,
                nav: !1,
                margin: 30,
                autoplay: !0,
                smartSpeed: 450,
                autoplaySpeed: 1E3,
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                dotsContainer: ".owl-nav-testimonials-v4"
            })
        })
    }
      , k = function() {
        $(document).ready(function() {
            $(".owl-carousel-clients-five-item").owlCarousel({
                items: 5,
                loop: !0,
                dots: !1,
                nav: !1,
                margin: 20,
                autoplay: !0,
                smartSpeed: 450,
                autoplaySpeed: 1E3,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    550: {
                        items: 4
                    },
                    768: {
                        items: 5
                    },
                    992: {
                        items: 4
                    },
                    1199: {
                        items: 5
                    }
                }
            })
        })
    }
      , h = function() {
        $(document).ready(function() {
            $(".owl-carousel-clients-six-item").owlCarousel({
                items: 6,
                loop: !0,
                dots: !1,
                nav: !1,
                margin: 20,
                autoplay: !0,
                smartSpeed: 450,
                autoplaySpeed: 1E3,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 3
                    },
                    550: {
                        items: 4
                    },
                    768: {
                        items: 4
                    },
                    992: {
                        items: 5
                    },
                    1199: {
                        items: 6
                    }
                }
            })
        })
    }
      , d = function() {
        $(document).ready(function() {
            $(".owl-carousel-blog-grid-thumb").owlCarousel({
                items: 5,
                loop: !0,
                dots: !1,
                nav: !1,
                autoplay: !0,
                smartSpeed: 450,
                autoplaySpeed: 1E3,
                responsive: {
                    0: {
                        items: 2
                    },
                    480: {
                        items: 2
                    },
                    550: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    992: {
                        items: 4
                    },
                    1199: {
                        items: 5
                    }
                }
            })
        })
    }
      , f = function() {
        $(document).ready(function() {
            $(".owl-carousel-one-item").owlCarousel({
                items: 1,
                loop: !0,
                dots: !0,
                nav: !1,
                smartSpeed: 450
            })
        })
    }
      , q = function() {
        $(document).ready(function() {
            var a = $(".owl-carousel-four-item");
            a.owlCarousel({
                items: 4,
                loop: !0,
                dots: !1,
                nav: !0,
                navText: ["", ""],
                navContainer: ".owl-controls-four-item",
                margin: 20,
                autoplay: !0,
                smartSpeed: 450,
                autoplaySpeed: 1E3,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    550: {
                        items: 1
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 3
                    },
                    1199: {
                        items: 4
                    }
                }
            });
            $(".owl-controls-four-item-next").on("click", function() {
                a.trigger("next.owl.carousel")
            });
            $(".owl-controls-four-item-prev").on("click", function() {
                a.trigger("prev.owl.carousel", [300])
            })
        })
    }
      , r = function() {
        $(document).ready(function() {
            $(".owl-carousel-mockup-slider-v1").owlCarousel({
                items: 1,
                dots: !0,
                nav: !1,
                mouseDrag: !1,
                touchDrag: !1,
                pullDrag: !1,
                smartSpeed: 250,
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                dotsContainer: ".owl-nav-mockup-slider-v1"
            })
        })
    };
    return {
        init: function() {
            a();
            b();
            m();
            l();
            k();
            h();
            d();
            f();
            q();
            r()
        }
    }
}();
$(document).ready(function() {
    OwlCarousel.init()
});
var current_voice_text = !1
  , voice_cache = {}
  , voice_current = !1;
function getSelectedText() {
    var a = "";
    window.getSelection ? a = window.getSelection() : document.getSelection ? a = document.getSelection() : document.selection && (a = document.selection.createRange().text);
    return a
}
function voice_text(a) {
    if (1 == parseInt($.cookie("voice_r")) && (a = a.replace(/\s+/img, " ").replace(/(^\s+)|(\s+$)|/img, ""),
    a.length && current_voice_text != a && (current_voice_text = a,
    current_voice_text == a))) {
        var b = "uz_UZ" == current_lang_tg ? "https://tts.voicetech.yandex.net/tts?speaker=zahar&text=" + a + "&lang=tr_TR&format=mp3&quality=hi&platform=web&application=translate&chunked=0&mock-ranges=1" : "https://tts.voicetech.yandex.net/tts?format=mp3&lang=" + current_lang_tg + "&speaker=oksana&text=" + a;
        console.log(current_lang_tg);
        voice_current && (voice_current.pause(),
        voice_current.currentTime = 0);
        void 0 !== voice_cache[b] ? (voice_current = voice_cache[b].get(0),
        voice_current.play()) : setTimeout(function() {
            voice_cache[b] = $("<audio><source ></source><audio>");
            voice_cache[b].on("loadeddata", function() {
                current_voice_text == a && (voice_current = voice_cache[b].get(0),
                voice_current.play())
            });
            voice_cache[b].find("source").attr("src", b)
        }, 500)
    }
}
function voice_get_text_in_element(a) {
    var b = "";
    if (a.nodeType !== document.ELEMENT_NODE)
        return void 0 === a.nodeType ? b : (b + " " + a.nodeValue).replace(/\s+/img, " ").replace(/(^\s+)|(\s+$)|/img, "");
    if ("true" === a.getAttribute("arria-hidden"))
        return b;
    if (a.getAttribute("title"))
        return a.getAttribute("title");
    if (!(a = a.childNodes).length)
        return b;
    for (var m in a)
        b = (b + " " + voice_get_text_in_element(a[m])).replace(/\s+/img, " ").replace(/(^\s+)|(\s+$)|/img, "");
    return b
}
function voice_element(a) {
    voice_text(voice_get_text_in_element(a.get(0)))
}
function voice_reader_inic() {
    $("a:not(.voice_inic),button:not(.voice_inic),input:not(.voice_inic),select:not(.voice_inic), option:not(.voice_inic), .voice_read:not(.voice_inic)").addClass("voice_inic").on({
        mouseover: function() {
            voice_element($(this))
        }
    })
}
$(window).on({
    load: function() {
        function a() {
            1 == parseInt($.cookie("voice_r")) ? ($("body").addClass("voice_r"),
            $("#toogle_site_reader").addClass("active"),
            $("#toogle_site_reader .turn_on").attr("arria-hidden", !0),
            $("#toogle_site_reader .turn_off").attr("arria-hidden", !1),
            voice_reader_inic()) : ($("body").removeClass("voice_r"),
            $("#toogle_site_reader").removeClass("active"),
            $("#toogle_site_reader .turn_on").attr("arria-hidden", !1),
            $("#toogle_site_reader .turn_off").attr("arria-hidden", !0))
        }
        $("#toogle_site_reader").click(function() {
            $.cookie("voice_r", parseInt($.cookie("voice_r")) ? 0 : 1, {
                expires: 1,
                path: "/"
            });
            voice_reader_inic();
            a()
        });
        a()
    },
    mouseup: function(a) {
        if (1 == parseInt($.cookie("voice_r"))) {
            var b = getSelectedText();
            $("#voce_ico_reader").remove();
            8 > b.toString().length || b.toString() == current_voice_text || (a = $('<div id="voce_ico_reader" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve" width="512px" height="512px"><g><g><path d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003    S232.835,0,149.996,0z M149.303,204.044h-0.002v-0.001c0,3.418-1.95,6.536-5.021,8.03c-1.24,0.602-2.578,0.903-3.909,0.903    c-1.961,0-3.903-0.648-5.506-1.901l-29.289-22.945c-1.354,0.335-2.767,0.537-4.235,0.537h-29.35    c-9.627,0-17.431-7.807-17.431-17.429v-50.837c0-9.625,7.804-17.431,17.431-17.431h29.352c1.707,0,3.348,0.257,4.912,0.711    l28.612-22.424c2.684-2.106,6.344-2.492,9.415-0.999c3.071,1.494,5.021,4.609,5.021,8.027V204.044z M178.616,167.361l-9.788-9.788    c2.256-3.084,3.608-6.87,3.608-10.979c0-4.536-1.631-8.699-4.331-11.936l9.713-9.713c5.177,5.745,8.362,13.323,8.362,21.649    C186.177,154.492,183.331,161.733,178.616,167.361z M191.307,180.054c7.944-8.901,12.781-20.624,12.781-33.46    c0-13.264-5.166-25.334-13.585-34.334l9.716-9.716c10.903,11.495,17.613,26.997,17.613,44.049c0,16.625-6.37,31.792-16.793,43.188    L191.307,180.054z M224.385,212.84l-9.713-9.716c13.793-14.846,22.25-34.715,22.25-56.532c0-22.243-8.797-42.454-23.073-57.393    l9.716-9.713c16.762,17.429,27.098,41.075,27.098,67.106C250.664,172.201,240.663,195.502,224.385,212.84z" fill="#313538"/></g></g></svg></div>').on({
                mousedown: function() {
                    voice_text(b.toString());
                    return !1
                },
                mouseup: function() {
                    return !1
                }
            }).css({
                top: a.pageY,
                left: a.pageX + 30
            }),
            $("body").append(a),
            setTimeout(function() {
                8 > b.toString().length && $("#voce_ico_reader").remove()
            }, 100))
        }
    }
});
