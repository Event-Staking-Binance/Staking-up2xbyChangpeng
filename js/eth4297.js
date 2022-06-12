/*! For license information please see app.min.js.LICENSE.txt */
(() => {
    "use strict";
    var e = e || {};
    e.STATIC = e.STATIC || {}, e.STATIC.TYPE = {
        TRADE: "0",
        FEEDNEWS: "1",
        CURRENT: "2",
        LOADCOMPLATE: "3",
        COINPAIRS: "4",
        CURRENTAGG: "5",
        TOPLIST: "6",
        TOPLISTCHANGE: "7",
        ORDERBOOK: "8",
        FULLORDERBOOK: "9",
        ACTIVATION: "10",
        TRADECATCHUP: "100",
        NEWSCATCHUP: "101",
        TRADECATCHUPCOMPLETE: "300",
        NEWSCATCHUPCOMPLETE: "301"
    }, e.STATIC.CURRENCY = e.STATIC.CURRENCY || {}, e.STATIC.CURRENCY.SYMBOL = {
        BTC: "Ƀ",
        LTC: "Ł",
        DAO: "Ð",
        USD: "$",
        CNY: "¥",
        EUR: "€",
        GBP: "£",
        JPY: "¥",
        PLN: "zł",
        RUB: "₽",
        ETH: "Ξ",
        GOLD: "Gold g",
        INR: "₹",
        BRL: "R$"
    }, e.STATIC.CURRENCY.getSymbol = function (t) {
        return e.STATIC.CURRENCY.SYMBOL[t] || t
    }, e.STATIC.UTIL = {
        exchangeNameMapping: {
            CCCAGG: "CryptoCompare Index",
            BTCChina: "BTCC"
        },
        isMobile: function (e) {
            return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)))
        },
        convertToMB: function (e) {
            return (parseInt(e, 10) / 1024 / 1024).toFixed(2) + " MB"
        },
        getNameForExchange: function (e) {
            return this.exchangeNameMapping.hasOwnProperty(e) ? this.exchangeNameMapping[e] : e
        },
        noExponents: function (e) {
            var t = String(e).split(/[eE]/);
            if (1 == t.length) return t[0];
            var o = "",
                r = e < 0 ? "-" : "",
                n = t[0].replace(".", ""),
                i = Number(t[1]) + 1;
            if (i < 0) {
                for (o = r + "0."; i++;) o += "0";
                return o + n.replace(/^\-/, "")
            }
            for (i -= n.length; i--;) o += "0";
            return n + o
        },
        reduceFloatVal: function (e) {
            return (e = parseFloat(e)) > 1 ? e = Math.round(100 * e) / 100 : e >= 1e-5 ? parseFloat(e.toPrecision(4)) : e >= 1e-6 ? parseFloat(e.toPrecision(3)) : e >= 1e-7 ? parseFloat(e.toPrecision(2)) : parseFloat(e.toPrecision(1))
        },
        reduceReal: function (e) {
            return e = parseFloat(e), parseFloat(e.toFixed(8))
        },
        convertCurrentKeyToAll: function (t) {
            var o = t.split("~");
            return o[0] = e.STATIC.TYPE.CURRENTAGG, o[1] = "CCCAGG", o.join("~")
        },
        convertCurrentKeyToTrade: function (t) {
            var o = t.split("~");
            return o[0] = e.STATIC.TYPE.TRADE, o.join("~")
        },
        convertValueToDisplay: function (e, t, o, r, n) {
            var i = "",
                a = 1;
            t = parseFloat(t);
            var l = Math.abs(t),
                s = 2,
                c = 2,
                u = 4;
            return !0 === n && (s = 2, c = 0, u = 4), "8decimals" == r && (s = 4, c = 8, u = 8, t < 1e-4 && t >= 1e-5 && (u = 4), t < .001 && t >= 1e-4 && (u = 5), t < .01 && t >= .001 && (u = 6), t < .1 && t >= .01 && (u = 7)), "" != e && (i = e + " "), t < 0 && (a = -1), 0 == t ? i + "0" : (t < 1e-5 && t >= 1e-6 && u > 3 && (u = 3), t < 1e-6 && t >= 1e-7 && u > 2 && (u = 2), t < 1e-7 && u > 1 && (u = 1), "short" == r || "8decimals" == r ? l > 1e10 ? i + o(a * (l /= 1e9), s) + " B" : l > 1e7 ? i + o(a * (l /= 1e6), s) + " M" : l > 1e4 ? i + o(a * (l /= 1e3), s) + " K" : "8decimals" == r && l >= 100 ? i + o(a * l, s) : l >= 1 ? i + o(a * l, c) : i + (a * l).toPrecision(u) : l >= 1 ? i + o(a * l, c) : i + this.noExponents((a * l).toPrecision(u)))
        }
    }, e.TRADE = e.TRADE || {}, e.TRADE.FLAGS = {
        SELL: 1,
        BUY: 2,
        UNKNOWN: 4
    }, e.TRADE.FIELDS = {
        T: 0,
        M: 0,
        FSYM: 0,
        TSYM: 0,
        F: 0,
        ID: 1,
        TS: 2,
        Q: 4,
        P: 8,
        TOTAL: 16
    }, e.TRADE.DISPLAY = e.TRADE.DISPLAY || {}, e.TRADE.DISPLAY.FIELDS = {
        T: {
            Show: !1
        },
        M: {
            Show: !0,
            Filter: "Market"
        },
        FSYM: {
            Show: !0,
            Filter: "CurrencySymbol"
        },
        TSYM: {
            Show: !0,
            Filter: "CurrencySymbol"
        },
        F: {
            Show: !0,
            Filter: "TradeFlag"
        },
        ID: {
            Show: !0,
            Filter: "Text"
        },
        TS: {
            Show: !0,
            Filter: "Date",
            Format: "yyyy MMMM dd HH:mm:ss"
        },
        Q: {
            Show: !0,
            Filter: "Number",
            Symbol: "FSYM"
        },
        P: {
            Show: !0,
            Filter: "Number",
            Symbol: "TSYM"
        },
        TOTAL: {
            Show: !0,
            Filter: "Number",
            Symbol: "TSYM"
        }
    }, e.TRADE.pack = function (e) {
        var t = 0,
            o = "";
        for (var r in e) o += "~" + e[r], t |= this.FIELDS[r];
        return o.substr(1) + "~" + t.toString(16)
    }, e.TRADE.unpack = function (e) {
        var t = e.split("~"),
            o = t[t.length - 1],
            r = parseInt(o, 16),
            n = {},
            i = 0;
        for (var a in this.FIELDS) (0 === this.FIELDS[a] || r & this.FIELDS[a]) && (n[a] = t[i], i++);
        return n
    }, e.TRADE.getKey = function (e) {
        return e.T + "~" + e.M + "~" + e.FSYM + "~" + e.TSYM
    }, e.CURRENT = e.CURRENT || {}, e.CURRENT.FLAGS = {
        PRICEUP: 1,
        PRICEDOWN: 2,
        PRICEUNCHANGED: 4,
        BIDUP: 8,
        BIDDOWN: 16,
        BIDUNCHANGED: 32,
        OFFERUP: 64,
        OFFERDOWN: 128,
        OFFERUNCHANGED: 256,
        AVGUP: 512,
        AVGDOWN: 1024,
        AVGUNCHANGED: 2048
    }, e.CURRENT.FIELDS = {
        TYPE: 0,
        MARKET: 0,
        FROMSYMBOL: 0,
        TOSYMBOL: 0,
        FLAGS: 0,
        PRICE: 1,
        BID: 2,
        OFFER: 4,
        LASTUPDATE: 8,
        AVG: 16,
        LASTVOLUME: 32,
        LASTVOLUMETO: 64,
        LASTTRADEID: 128,
        VOLUMEHOUR: 256,
        VOLUMEHOURTO: 512,
        VOLUME24HOUR: 1024,
        VOLUME24HOURTO: 2048,
        OPENHOUR: 4096,
        HIGHHOUR: 8192,
        LOWHOUR: 16384,
        OPEN24HOUR: 32768,
        HIGH24HOUR: 65536,
        LOW24HOUR: 131072,
        LASTMARKET: 262144
    }, e.CURRENT.DISPLAY = e.CURRENT.DISPLAY || {}, e.CURRENT.DISPLAY.FIELDS = {
        TYPE: {
            Show: !1
        },
        MARKET: {
            Show: !0,
            Filter: "Market"
        },
        FROMSYMBOL: {
            Show: !1
        },
        TOSYMBOL: {
            Show: !1
        },
        FLAGS: {
            Show: !1
        },
        PRICE: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        BID: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        OFFER: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LASTUPDATE: {
            Show: !0,
            Filter: "Date",
            Format: "yyyy MMMM dd HH:mm:ss"
        },
        AVG: {
            Show: !0,
            " Filter": "Number",
            Symbol: "TOSYMBOL"
        },
        LASTVOLUME: {
            Show: !0,
            Filter: "Number",
            Symbol: "FROMSYMBOL"
        },
        LASTVOLUMETO: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LASTTRADEID: {
            Show: !0,
            Filter: "String"
        },
        VOLUMEHOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "FROMSYMBOL"
        },
        VOLUMEHOURTO: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        VOLUME24HOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "FROMSYMBOL"
        },
        VOLUME24HOURTO: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        OPENHOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        HIGHHOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LOWHOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        OPEN24HOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        HIGH24HOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LOW24HOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LASTMARKET: {
            Show: !0,
            Filter: "String"
        }
    }, e.CURRENT.pack = function (e) {
        var t = 0,
            o = "";
        for (var r in this.FIELDS) e.hasOwnProperty(r) && (o += "~" + e[r], t |= this.FIELDS[r]);
        return o.substr(1) + "~" + t.toString(16)
    }, e.CURRENT.unpack = function (e) {
        var t = e.split("~"),
            o = t[t.length - 1],
            r = parseInt(o, 16),
            n = {},
            i = 0;
        for (var a in this.FIELDS) 0 === this.FIELDS[a] ? (n[a] = t[i], i++) : r & this.FIELDS[a] && (n[a] = "LASTMARKET" === a ? t[i] : parseFloat(t[i]), i++);
        return n
    }, e.CURRENT.getKey = function (e) {
        return e.TYPE + "~" + e.MARKET + "~" + e.FROMSYMBOL + "~" + e.TOSYMBOL
    }, e.CURRENT.getKeyFromStreamerData = function (e) {
        var t = e.split("~");
        return t[0] + "~" + t[1] + "~" + t[2] + "~" + t[3]
    }, e.noExponents = function (e) {
        var t = String(e).split(/[eE]/);
        if (1 == t.length) return t[0];
        var o = "",
            r = e < 0 ? "-" : "",
            n = t[0].replace(".", ""),
            i = Number(t[1]) + 1;
        if (i < 0) {
            for (o = r + "0."; i++;) o += "0";
            return o + n.replace(/^\-/, "")
        }
        for (i -= n.length; i--;) o += "0";
        return n + o
    }, e.filterNumberFunctionPolyfill = function (e, t) {
        var o = Math.pow(10, t),
            r = (Math.round(e * o) / o).toString().split(".");
        return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "), r.join(".")
    }, e.convertValueToDisplay = function (t, o, r, n) {
        var i = "",
            a = 1;
        o = parseFloat(o);
        var l = Math.abs(o),
            s = 2,
            c = 2,
            u = 3;
        return !0 === n && (s = 2, c = 0, u = 3), "" != t && (i = t + " "), o < 0 && (a = -1), 0 == o ? i + "0" : (o < 1e-5 && o >= 1e-6 && u > 3 && (u = 3), o < 1e-6 && o >= 1e-7 && u > 2 && (u = 2), o < 1e-7 && o >= 1e-8 && u > 1 && (u = 1), "short" == r ? l > 1e10 ? (l /= 1e9, i + e.filterNumberFunctionPolyfill(a * l, s) + " B") : l > 1e7 ? (l /= 1e6, i + e.filterNumberFunctionPolyfill(a * l, s) + " M") : l > 1e4 ? (l /= 1e3, i + e.filterNumberFunctionPolyfill(a * l, s) + " K") : l >= 1 ? i + e.filterNumberFunctionPolyfill(a * l, c) : i + (a * l).toPrecision(u) : l >= 1 ? i + e.filterNumberFunctionPolyfill(a * l, c) : i + e.noExponents((a * l).toPrecision(u)))
    };
    var t = function (e) {
        this.init(e)
    };
    t.prototype = {
        currentPrice: {},
        config: {
            socket_url: "https://streamer.cryptocompare.com/",
            tsym: "USD",
            display_mode: "index",
            coins: "",
            courses: {
                usdrur: 0,
                usdeur: 0
            },
            currency_codes: {
                rur: "&#8381;",
                eur: "&#8364;"
            }
        },
        init: function (t) {
            if ($.extend(this.config, t), void 0 === e) return !1;
            if (!this.config.coins.length) return !1;
            for (var o = [], r = this.config.coins.split(","), n = 0, i = r.length; n < i; n++) o.push("5~CCCAGG~" + r[n] + "~" + this.config.tsym);
            var a = this,
                l = io.connect(this.config.socket_url);
            l.emit("SubAdd", {
                subs: o
            }), l.on("m", (function (t) {
                t.substring(0, t.indexOf("~")) == e.STATIC.TYPE.CURRENTAGG && a.dataUnpack(e.CURRENT.unpack(t))
            }))
        },
        dataUnpack: function (e) {
            var t = e.FROMSYMBOL + e.TOSYMBOL;
            if (this.currentPrice.hasOwnProperty(t) || (this.currentPrice[t] = {}), null == e.FLAGS) return !1;
            for (var o in e) this.currentPrice[t][o] = e[o];
            this.currentPrice[t].CHANGE24HOUR = (this.currentPrice[t].PRICE - this.currentPrice[t].OPEN24HOUR).toFixed(2), this.currentPrice[t].CHANGE24HOURPCT = (this.currentPrice[t].CHANGE24HOUR / this.currentPrice[t].OPEN24HOUR * 100).toFixed(2), this.displayData(this.currentPrice[t])
        },
        displayData: function (t) {
            var o = t.FROMSYMBOL,
                r = parseInt(t.FLAGS),
                n = "";
            if ("index" !== this.config.display_mode) return !1;
            {
                for (var i in t) {
                    n = "CHANGE24HOUR" == i || "CHANGE24HOURPCT" == i ? this.getSign(t[i]) + e.convertValueToDisplay("", t[i]) + ("CHANGE24HOUR" == i ? " $" : " %") : "PRICE" == i ? e.convertValueToDisplay("", t[i]) + " $" : "VOLUME24HOURTO" == i ? e.convertValueToDisplay("", t[i].toFixed(0)) + "$" : e.convertValueToDisplay("", t[i]);
                    let r = document.querySelector("[data-coin=" + i + "_" + o + "]");
                    r && (r.textContent = n)
                }
                let a = document.querySelector("[data-coin=PRICE_" + o + "]"),
                    l = document.querySelector(".coin_row_" + o);
                a && a.classList.remove("up", "down"), l && l.classList.remove("row_up", "row_down", "row_unchange"), 1 == r ? (a && a.classList.add("up"), l && l.classList.add("row_up")) : 2 == r && (a && a.classList.add("down"), l && l.classList.add("row_down")), setTimeout((function () {
                    l && l.classList.remove("row_up", "row_down", "row_unchange")
                }), 1e3);
                let s = document.querySelector("[data-coin=trend_" + o + "]");
                s && s.classList.remove("triangle_up", "triangle_down");
                let c = document.querySelector("[data-coin=CHANGE24HOURPCT_" + o + "]");
                c && c.classList.remove("up", "down"), t.PRICE > t.OPEN24HOUR ? (s && s.classList.add("triangle_up"), c && c.classList.add("up")) : t.PRICE < t.OPEN24HOUR && (s && s.classList.add("triangle_down"), c && c.classList.add("down"));
                let u = document.querySelector(".price_rur_" + o),
                    d = document.querySelector(".price_eur_" + o);
                u && (u.textContent = e.convertValueToDisplay("", (t.PRICE * this.config.courses.usdrur).toFixed(2)) + " " + this.config.currency_codes.rur), d && (d.textContent = e.convertValueToDisplay("", (t.PRICE * this.config.courses.usdeur).toFixed(2)) + " " + this.config.currency_codes.eur)
            }
        },
        getSign: function (e) {
            return e > 0 ? "+" : ""
        }
    }, new t({
        coins: "BTC,ETH,LTC,DASH"
    });
    let o = {
        Android: function () {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function () {
            return o.Android() || o.BlackBerry() || o.iOS() || o.Opera() || o.Windows()
        }
    };
    let r = (e, t = 500) => {
            e.classList.contains("_slide") || (e.classList.add("_slide"), e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = e.offsetHeight + "px", e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout((() => {
                e.hidden = !0, e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide")
            }), t))
        },
        n = (e, t = 500) => {
            if (!e.classList.contains("_slide")) {
                e.classList.add("_slide"), e.hidden && (e.hidden = !1);
                let o = e.offsetHeight;
                e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = t + "ms", e.style.height = o + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout((() => {
                    e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property"), e.classList.remove("_slide")
                }), t)
            }
        },
        i = !0,
        a = (e = 500) => {
            let t = document.querySelector("body");
            if (i) {
                let o = document.querySelectorAll("._lp");
                setTimeout((() => {
                    for (let e = 0; e < o.length; e++) {
                        o[e].style.paddingRight = "0px"
                    }
                    t.style.paddingRight = "0px", document.documentElement.classList.remove("lock")
                }), e), i = !1, setTimeout((function () {
                    i = !0
                }), e)
            }
        },
        l = (e = 500) => {
            let t = document.querySelector("body");
            if (i) {
                let o = document.querySelectorAll("._lp");
                for (let e = 0; e < o.length; e++) {
                    o[e].style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px"
                }
                t.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px", document.documentElement.classList.add("lock"), i = !1, setTimeout((function () {
                    i = !0
                }), e)
            }
        };
    let s = {
        getErrors(e) {
            let t = 0,
                o = e.querySelectorAll("*[data-required]");
            return o.length && o.forEach((e => {
                null !== e.offsetParent && (t += this.validateInput(e))
            })), t
        },
        validateInput(e) {
            let t = 0;
            if ("email" === e.dataset.required) e.value = e.value.replace(" ", ""), this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e);
            else if ("checkbox" !== e.type || e.checked) {
                let o = e.value.substr(0, 2);
                console.log(o), "" == e.value && 42 != e.value.length || "0x" != o && "bn" != o ? (this.addError(e), t++) : this.removeError(e)
            } else this.addError(e), t++;
            return t
        },
        addError(e) {
            e.classList.add("_error"), e.parentElement.classList.add("_error");
            let t = e.parentElement.querySelector(".form__error");
            t && e.parentElement.removeChild(t), e.hasAttribute("data-error") && e.getAttribute("data-error") && e.parentElement.insertAdjacentHTML("beforeend", '<div class="form__error">' + e.getAttribute("data-error") + "</div>")
        },
        removeError(e) {
            e.classList.remove("_error"), e.parentElement.classList.remove("_error"), e.parentElement.querySelector(".form__error") && e.parentElement.removeChild(e.parentElement.querySelector(".form__error"))
        },
        emailTest: e => !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)
    };
    $((function () {
        $("#chat-head").click((function () {
            $("#chat-body").toggleClass("chat-active"), $(".chat").toggleClass("active")
        }))
    })), $((function () {
        $("#chat-close").click((function () {
            $("#chat-body").toggleClass("chat-active")
        }))
    }));
    let c = ["Never seen anyrhing like that, but lucky it worked! Thanks.", "Got 0.78 eth THANK YOU VITALIK", "NEVER DOUBT VITAL", "HI!", "I GOT FUCKING 3.7 OMG", "IM IN!!", "this is insane +4.0", "VERY NICE GUYS", "Recieved 97 000 bucks in eth OMG VITALIK BUTERIN I LOVE YOU!", "awesome offer can I use it 1 more time? I shouldve sent more...", "GOT 10", "wtf it worked", "May the God be with you.", "I was doubting for a long time if I should send here my 4 eth, but it actually worked for me so I got 8 eth now thanks to ethereum.", "OH SHIT IT WORKS!!!!!!!", "thanks for 30 eth. fine here!", "OH FUCK I GOT THE RETURM ! THANKS", "Gracias papi", "9.34 eth", "crypto is a bubble...", "8 eth ON MY WALLET", "This is going to change my life!", "+240k", "HERE I AM, GOT $450k FUCKING INSANE THING!!!!!!", "VITALIK WE LOVE YOU!!!", "got 21 bits on my wallet now :)", "You better be fast guys!", "Vitalik never dissapoints!!", "+12.44", "I sold all by eth a day ago ;(", "GOTTA BUY A BRAND NEW CHEVY!! 18 thousand bucks", "+78K$. this is an actual nonsence", "GENEROUS PRESENT!", "I was lucky to get my $200,000.", "I CANT IMAGINE WHAT WILL HAPPEN WITH THE PRICE", "GOD BLESSF YOU !", "Hell yeah got my 250,000,000 doubled! ", "wish i hsd more money to send... +1 of eth", "ONE TIME OPPORTUNITY ", "4.32 eth", "OHHHH COME HERE $$$$$$", "Thank you Vitalik Buterin! From me and my son.", "7.8 eth !", "eth INU TO 100k$", "BIG PUMP IS COMING", "Thank you for everything.", "WHAAAAAAT??", "3 eth", "got 30eth, not too much but thank you!", "I recieved 1.5 eth as well. This is a fine investment.", "Buterin CRYPTOKING!", "THANKS FOR THE NEW CAR", "God Bless Vitalik Buterin!", "9.83 ye", "OH YES!", "+4.18", "eth TO THE MOON", "WOW", "+38.4K!!!!", "does it doubles the amount you send?", "Ill take my chances", "can I have more?", "I AM HAPPY", "OH YESSS 311KK", "THANKS!", "+ 25eth", "HOW IS THIS POSSIBLE?", "Hello everyone!", "WHAT", "BUTERIN IS THE BEST", "How much left??????", "it took a couple of minutes but I got $13,000 ", "Really?", "BUTERIN IS THE KING!", "SpaceX launch soon?", "+ 20K bucks", "omg this is real!", "+13K", "I LOVE YOU VITALIK", "THATS GOOD!", "Got some!", "HEYYY", "MY GOD", "2eth? yeah", "how you doing guys? xD", "WOOOOOOOOW!!", "How can I contact Vitalik?", "Unbeliveable charity!", "GOT 7.27!!!!!!!!", "Thats greatful!", "Changed my mind on eth. THANK YOU!", "5.34", "eth GOES 1mil$", "thanks much !!!!", "I want to participate again!!!!!!!!", "just recieved 41.9 eth", "Please give me some more!", "Very good.", "I CANT BELIEVE IT", "i actually got 5.64 eth back what the fuck?", "Tell your friends!", "+ 3.8", 'THAT"S BEAUTIFUL!', "GOT $200k OMG", "Too good!", "eth 4 LIFE", "I will remember this moment forever! Recieved 450,000", "Thank god Im on time", "THIS IS SICK!", "this is magic", "20,00 eth !!!", "Hi everyone :)", "HYPE!", "I love you Vitalik Buterin!!", "I bless you eth!!", "+ eth 10.8", "thanks for letting me participate!", 'Should"ve deposited more....', "Hello!", "thanks for 22.4", "42.8 I CANT BELIVE MY EYES!!!!", "Im not gonna work again just trading :D", "OOOOMMMGG!!!!!!!!!!!!!!!!!", "Glad I figured all out! Now I got some money to invest.", "Thank god.", "LETS GO GUYS", "ETH $10k SOON", "+ 40.3 eth !", "Chill out", "I got 20.0 eth", "GOOD LUCK EVERYONE! I gotr my cut already", "SO HAPPY!", "omg recieved 400k backl!!!!!", "recieived some eth thanks", "Who else if not vitalik could help us ", "Vitalik Buterin!!", "+ 35.3874 eth", "YEAH BITCH", "Im very thankful", "NEW eth ATH COMING", "Perfect", "WE LOVE YOU VITALIK", "HI", "I WISH I HAD MORE eth TO SEND", "+54.2", "Thats for real", "IT IS ACTUAL", "AWESOME", "7.4288", "eth GOES 100k$", "eth ROCKET"];
    let u = document.querySelector(".chat__iduser");

    function d(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }

    let m = document.getElementById("chat-body"),
        h = (setInterval((() => {
            let e = "1" + function (e) {
                    for (var t = "", o = "abcdefghijklmnopqrstuvwxyz0123456789", r = o.length, n = 0; n < e; n++) t += o.charAt(Math.floor(Math.random() * r));
                    return t
                }(7) + "...",
                t = c[Math.floor(Math.random() * c.length)],
                o = document.createElement("div"),
                r = d(1, 20);
            o.className = "mess", o.setAttribute("style", "--bg:url(../img/avatar/avatar" + r + ".jpg)"), console.log("--bg:url(../img/avatar/avatar" + r + ".jpg)"), o.innerHTML = `<div class='msg'><p class="nickname">${e}</p><p class="msg-text">${t}</p></div>`, m.appendChild(o), $("#chat-body").scrollTop($("#chat-body")[0].scrollHeight), u.innerHTML = d(220, 300)
        }), 4e3), document.querySelector(".chat__btn")),
        p = document.querySelector(".chat__item input");
    h && h.addEventListener("click", (function () {
        if (p.value.length > 0) {
            let e = document.createElement("div");
            e.className = "mess color";
            const t = Math.floor(16777215 * Math.random()).toString(16);
            e.setAttribute("style", "--color:#" + t), e.innerHTML = `<div  class='msg '><p class="nickname">You</p><p class="msg-text">${p.value}</p></div>`, m.appendChild(e), $("#chat-body").scrollTop($("#chat-body")[0].scrollHeight), p.value = ""
        }
    }));
    var S, f;
    window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
        var t, o = (this.document || this.ownerDocument).querySelectorAll(e),
            r = this;
        do {
            for (t = o.length; 0 <= --t && o.item(t) !== r;) ;
        } while (t < 0 && (r = r.parentElement));
        return r
    }),
        function () {
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var o = document.createEvent("CustomEvent");
                return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
            }

            "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
        }(),
        function () {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], o = 0; o < t.length && !window.requestAnimationFrame; ++o) window.requestAnimationFrame = window[t[o] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[o] + "CancelAnimationFrame"] || window[t[o] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function (t, o) {
                var r = (new Date).getTime(),
                    n = Math.max(0, 16 - (r - e)),
                    i = window.setTimeout((function () {
                        t(r + n)
                    }), n);
                return e = r + n, i
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
                clearTimeout(e)
            })
        }(), S = "undefined" != typeof global ? global : "undefined" != typeof window ? window : void 0, f = function (e) {
        var t = {
                ignore: "[data-scroll-ignore]",
                header: null,
                topOnEmptyHash: !0,
                speed: 500,
                speedAsDuration: !1,
                durationMax: null,
                durationMin: null,
                clip: !0,
                offset: 0,
                easing: "easeInOutCubic",
                customEasing: null,
                updateURL: !0,
                popstate: !0,
                emitEvents: !0
            },
            o = function () {
                var e = {};
                return Array.prototype.forEach.call(arguments, (function (t) {
                    for (var o in t) {
                        if (!t.hasOwnProperty(o)) return;
                        e[o] = t[o]
                    }
                })), e
            },
            r = function (e) {
                "#" === e.charAt(0) && (e = e.substr(1));
                for (var t, o = String(e), r = o.length, n = -1, i = "", a = o.charCodeAt(0); ++n < r;) {
                    if (0 === (t = o.charCodeAt(n))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                    i += 1 <= t && t <= 31 || 127 == t || 0 === n && 48 <= t && t <= 57 || 1 === n && 48 <= t && t <= 57 && 45 === a ? "\\" + t.toString(16) + " " : 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? o.charAt(n) : "\\" + o.charAt(n)
                }
                return "#" + i
            },
            n = function () {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
            },
            i = function (t, o, r, n) {
                if (o.emitEvents && "function" == typeof e.CustomEvent) {
                    var i = new CustomEvent(t, {
                        bubbles: !0,
                        detail: {
                            anchor: r,
                            toggle: n
                        }
                    });
                    document.dispatchEvent(i)
                }
            };
        return function (a, l) {
            var s, c, u, d, m = {
                    cancelScroll: function (e) {
                        cancelAnimationFrame(d), d = null, e || i("scrollCancel", s)
                    },
                    animateScroll: function (r, a, l) {
                        m.cancelScroll();
                        var c = o(s || t, l || {}),
                            h = "[object Number]" === Object.prototype.toString.call(r),
                            p = h || !r.tagName ? null : r;
                        if (h || p) {
                            var S = e.pageYOffset;
                            c.header && !u && (u = document.querySelector(c.header));
                            var f, E, T, y, g, v, O, b, A = function (t) {
                                    return t ? (o = t, parseInt(e.getComputedStyle(o).height, 10) + t.offsetTop) : 0;
                                    var o
                                }(u),
                                L = h ? r : function (t, o, r, i) {
                                    var a = 0;
                                    if (t.offsetParent)
                                        for (; a += t.offsetTop, t = t.offsetParent;) ;
                                    return a = Math.max(a - o - r, 0), i && (a = Math.min(a, n() - e.innerHeight)), a
                                }(p, A, parseInt("function" == typeof c.offset ? c.offset(r, a) : c.offset, 10), c.clip),
                                R = L - S,
                                w = n(),
                                C = 0,
                                I = (f = R, T = (E = c).speedAsDuration ? E.speed : Math.abs(f / 1e3 * E.speed), E.durationMax && T > E.durationMax ? E.durationMax : E.durationMin && T < E.durationMin ? E.durationMin : parseInt(T, 10)),
                                M = function (t) {
                                    var o, n, l;
                                    y || (y = t), C += t - y, v = S + R * (n = g = 1 < (g = 0 === I ? 0 : C / I) ? 1 : g, "easeInQuad" === (o = c).easing && (l = n * n), "easeOutQuad" === o.easing && (l = n * (2 - n)), "easeInOutQuad" === o.easing && (l = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), "easeInCubic" === o.easing && (l = n * n * n), "easeOutCubic" === o.easing && (l = --n * n * n + 1), "easeInOutCubic" === o.easing && (l = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), "easeInQuart" === o.easing && (l = n * n * n * n), "easeOutQuart" === o.easing && (l = 1 - --n * n * n * n), "easeInOutQuart" === o.easing && (l = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), "easeInQuint" === o.easing && (l = n * n * n * n * n), "easeOutQuint" === o.easing && (l = 1 + --n * n * n * n * n), "easeInOutQuint" === o.easing && (l = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), o.customEasing && (l = o.customEasing(n)), l || n), e.scrollTo(0, Math.floor(v)),
                                    function (t, o) {
                                        var n, l, s, u = e.pageYOffset;
                                        if (t == o || u == o || (S < o && e.innerHeight + u) >= w) return m.cancelScroll(!0), l = o, s = h, 0 === (n = r) && document.body.focus(), s || (n.focus(), document.activeElement !== n && (n.setAttribute("tabindex", "-1"), n.focus(), n.style.outline = "none"), e.scrollTo(0, l)), i("scrollStop", c, r, a), !(d = y = null)
                                    }(v, L) || (d = e.requestAnimationFrame(M), y = t)
                                };
                            0 === e.pageYOffset && e.scrollTo(0, 0), O = r, b = c, h || history.pushState && b.updateURL && history.pushState({
                                smoothScroll: JSON.stringify(b),
                                anchor: O.id
                            }, document.title, O === document.documentElement ? "#top" : "#" + O.id), "matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches ? e.scrollTo(0, Math.floor(L)) : (i("scrollStart", c, r, a), m.cancelScroll(!0), e.requestAnimationFrame(M))
                        }
                    }
                },
                h = function (t) {
                    if (!t.defaultPrevented && !(0 !== t.button || t.metaKey || t.ctrlKey || t.shiftKey) && "closest" in t.target && (c = t.target.closest(a)) && "a" === c.tagName.toLowerCase() && !t.target.closest(s.ignore) && c.hostname === e.location.hostname && c.pathname === e.location.pathname && /#/.test(c.href)) {
                        var o, n;
                        try {
                            o = r(decodeURIComponent(c.hash))
                        } catch (t) {
                            o = r(c.hash)
                        }
                        if ("#" === o) {
                            if (!s.topOnEmptyHash) return;
                            n = document.documentElement
                        } else n = document.querySelector(o);
                        (n = n || "#top" !== o ? n : document.documentElement) && (t.preventDefault(), function (t) {
                            if (history.replaceState && t.updateURL && !history.state) {
                                var o = e.location.hash;
                                o = o || "", history.replaceState({
                                    smoothScroll: JSON.stringify(t),
                                    anchor: o || e.pageYOffset
                                }, document.title, o || e.location.href)
                            }
                        }(s), m.animateScroll(n, c))
                    }
                },
                p = function (e) {
                    if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(s)) {
                        var t = history.state.anchor;
                        "string" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || m.animateScroll(t, null, {
                            updateURL: !1
                        })
                    }
                };
            return m.destroy = function () {
                s && (document.removeEventListener("click", h, !1), e.removeEventListener("popstate", p, !1), m.cancelScroll(), d = u = c = s = null)
            },
                function () {
                    if (!("querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                    m.destroy(), s = o(t, l || {}), u = s.header ? document.querySelector(s.header) : null, document.addEventListener("click", h, !1), s.updateURL && s.popstate && e.addEventListener("popstate", p, !1)
                }(), m
        }
    }, "function" == typeof define && define.amd ? define([], (function () {
        return f(S)
    })) : "object" == typeof exports ? module.exports = f(S) : S.SmoothScroll = f(S);
    var E = E || {};
    E.STATIC = E.STATIC || {}, E.STATIC.TYPE = {
        TRADE: "0",
        FEEDNEWS: "1",
        CURRENT: "2",
        LOADCOMPLATE: "3",
        COINPAIRS: "4",
        CURRENTAGG: "5",
        TOPLIST: "6",
        TOPLISTCHANGE: "7",
        ORDERBOOK: "8",
        FULLORDERBOOK: "9",
        ACTIVATION: "10",
        TRADECATCHUP: "100",
        NEWSCATCHUP: "101",
        TRADECATCHUPCOMPLETE: "300",
        NEWSCATCHUPCOMPLETE: "301"
    }, E.STATIC.CURRENCY = E.STATIC.CURRENCY || {}, E.STATIC.CURRENCY.SYMBOL = {
        BTC: "Ƀ",
        LTC: "Ł",
        DAO: "Ð",
        USD: "$",
        CNY: "¥",
        EUR: "€",
        GBP: "£",
        JPY: "¥",
        PLN: "zł",
        RUB: "₽",
        ETH: "Ξ",
        GOLD: "Gold g",
        INR: "₹",
        BRL: "R$"
    }, E.STATIC.CURRENCY.getSymbol = function (e) {
        return E.STATIC.CURRENCY.SYMBOL[e] || e
    }, E.STATIC.UTIL = {
        exchangeNameMapping: {
            CCCAGG: "CryptoCompare Index",
            BTCChina: "BTCC"
        },
        isMobile: function (e) {
            return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)))
        },
        convertToMB: function (e) {
            return (parseInt(e, 10) / 1024 / 1024).toFixed(2) + " MB"
        },
        getNameForExchange: function (e) {
            return this.exchangeNameMapping.hasOwnProperty(e) ? this.exchangeNameMapping[e] : e
        },
        noExponents: function (e) {
            var t = String(e).split(/[eE]/);
            if (1 == t.length) return t[0];
            var o = "",
                r = e < 0 ? "-" : "",
                n = t[0].replace(".", ""),
                i = Number(t[1]) + 1;
            if (i < 0) {
                for (o = r + "0."; i++;) o += "0";
                return o + n.replace(/^\-/, "")
            }
            for (i -= n.length; i--;) o += "0";
            return n + o
        },
        reduceFloatVal: function (e) {
            return (e = parseFloat(e)) > 1 ? e = Math.round(100 * e) / 100 : e >= 1e-5 ? parseFloat(e.toPrecision(4)) : e >= 1e-6 ? parseFloat(e.toPrecision(3)) : e >= 1e-7 ? parseFloat(e.toPrecision(2)) : parseFloat(e.toPrecision(1))
        },
        reduceReal: function (e) {
            return e = parseFloat(e), parseFloat(e.toFixed(8))
        },
        convertCurrentKeyToAll: function (e) {
            var t = e.split("~");
            return t[0] = E.STATIC.TYPE.CURRENTAGG, t[1] = "CCCAGG", t.join("~")
        },
        convertCurrentKeyToTrade: function (e) {
            var t = e.split("~");
            return t[0] = E.STATIC.TYPE.TRADE, t.join("~")
        },
        convertValueToDisplay: function (e, t, o, r, n) {
            var i = "",
                a = 1;
            t = parseFloat(t);
            var l = Math.abs(t),
                s = 2,
                c = 2,
                u = 4;
            return !0 === n && (s = 2, c = 0, u = 4), "8decimals" == r && (s = 4, c = 8, u = 8, t < 1e-4 && t >= 1e-5 && (u = 4), t < .001 && t >= 1e-4 && (u = 5), t < .01 && t >= .001 && (u = 6), t < .1 && t >= .01 && (u = 7)), "" != e && (i = e + " "), t < 0 && (a = -1), 0 == t ? i + "0" : (t < 1e-5 && t >= 1e-6 && u > 3 && (u = 3), t < 1e-6 && t >= 1e-7 && u > 2 && (u = 2), t < 1e-7 && u > 1 && (u = 1), "short" == r || "8decimals" == r ? l > 1e10 ? i + o(a * (l /= 1e9), s) + " B" : l > 1e7 ? i + o(a * (l /= 1e6), s) + " M" : l > 1e4 ? i + o(a * (l /= 1e3), s) + " K" : "8decimals" == r && l >= 100 ? i + o(a * l, s) : l >= 1 ? i + o(a * l, c) : i + (a * l).toPrecision(u) : l >= 1 ? i + o(a * l, c) : i + this.noExponents((a * l).toPrecision(u)))
        }
    }, E.TRADE = E.TRADE || {}, E.TRADE.FLAGS = {
        SELL: 1,
        BUY: 2,
        UNKNOWN: 4
    }, E.TRADE.FIELDS = {
        T: 0,
        M: 0,
        FSYM: 0,
        TSYM: 0,
        F: 0,
        ID: 1,
        TS: 2,
        Q: 4,
        P: 8,
        TOTAL: 16
    }, E.TRADE.DISPLAY = E.TRADE.DISPLAY || {}, E.TRADE.DISPLAY.FIELDS = {
        T: {
            Show: !1
        },
        M: {
            Show: !0,
            Filter: "Market"
        },
        FSYM: {
            Show: !0,
            Filter: "CurrencySymbol"
        },
        TSYM: {
            Show: !0,
            Filter: "CurrencySymbol"
        },
        F: {
            Show: !0,
            Filter: "TradeFlag"
        },
        ID: {
            Show: !0,
            Filter: "Text"
        },
        TS: {
            Show: !0,
            Filter: "Date",
            Format: "yyyy MMMM dd HH:mm:ss"
        },
        Q: {
            Show: !0,
            Filter: "Number",
            Symbol: "FSYM"
        },
        P: {
            Show: !0,
            Filter: "Number",
            Symbol: "TSYM"
        },
        TOTAL: {
            Show: !0,
            Filter: "Number",
            Symbol: "TSYM"
        }
    }, E.TRADE.pack = function (e) {
        var t = 0,
            o = "";
        for (var r in e) o += "~" + e[r], t |= this.FIELDS[r];
        return o.substr(1) + "~" + t.toString(16)
    }, E.TRADE.unpack = function (e) {
        var t = e.split("~"),
            o = t[t.length - 1],
            r = parseInt(o, 16),
            n = {},
            i = 0;
        for (var a in this.FIELDS) (0 === this.FIELDS[a] || r & this.FIELDS[a]) && (n[a] = t[i], i++);
        return n
    }, E.TRADE.getKey = function (e) {
        return e.T + "~" + e.M + "~" + e.FSYM + "~" + e.TSYM
    }, E.CURRENT = E.CURRENT || {}, E.CURRENT.FLAGS = {
        PRICEUP: 1,
        PRICEDOWN: 2,
        PRICEUNCHANGED: 4,
        BIDUP: 8,
        BIDDOWN: 16,
        BIDUNCHANGED: 32,
        OFFERUP: 64,
        OFFERDOWN: 128,
        OFFERUNCHANGED: 256,
        AVGUP: 512,
        AVGDOWN: 1024,
        AVGUNCHANGED: 2048
    }, E.CURRENT.FIELDS = {
        TYPE: 0,
        MARKET: 0,
        FROMSYMBOL: 0,
        TOSYMBOL: 0,
        FLAGS: 0,
        PRICE: 1,
        BID: 2,
        OFFER: 4,
        LASTUPDATE: 8,
        AVG: 16,
        LASTVOLUME: 32,
        LASTVOLUMETO: 64,
        LASTTRADEID: 128,
        VOLUMEHOUR: 256,
        VOLUMEHOURTO: 512,
        VOLUME24HOUR: 1024,
        VOLUME24HOURTO: 2048,
        OPENHOUR: 4096,
        HIGHHOUR: 8192,
        LOWHOUR: 16384,
        OPEN24HOUR: 32768,
        HIGH24HOUR: 65536,
        LOW24HOUR: 131072,
        LASTMARKET: 262144
    }, E.CURRENT.DISPLAY = E.CURRENT.DISPLAY || {}, E.CURRENT.DISPLAY.FIELDS = {
        TYPE: {
            Show: !1
        },
        MARKET: {
            Show: !0,
            Filter: "Market"
        },
        FROMSYMBOL: {
            Show: !1
        },
        TOSYMBOL: {
            Show: !1
        },
        FLAGS: {
            Show: !1
        },
        PRICE: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        BID: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        OFFER: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LASTUPDATE: {
            Show: !0,
            Filter: "Date",
            Format: "yyyy MMMM dd HH:mm:ss"
        },
        AVG: {
            Show: !0,
            " Filter": "Number",
            Symbol: "TOSYMBOL"
        },
        LASTVOLUME: {
            Show: !0,
            Filter: "Number",
            Symbol: "FROMSYMBOL"
        },
        LASTVOLUMETO: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LASTTRADEID: {
            Show: !0,
            Filter: "String"
        },
        VOLUMEHOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "FROMSYMBOL"
        },
        VOLUMEHOURTO: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        VOLUME24HOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "FROMSYMBOL"
        },
        VOLUME24HOURTO: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        OPENHOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        HIGHHOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LOWHOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        OPEN24HOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        HIGH24HOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LOW24HOUR: {
            Show: !0,
            Filter: "Number",
            Symbol: "TOSYMBOL"
        },
        LASTMARKET: {
            Show: !0,
            Filter: "String"
        }
    }, E.CURRENT.pack = function (e) {
        var t = 0,
            o = "";
        for (var r in this.FIELDS) e.hasOwnProperty(r) && (o += "~" + e[r], t |= this.FIELDS[r]);
        return o.substr(1) + "~" + t.toString(16)
    }, E.CURRENT.unpack = function (e) {
        var t = e.split("~"),
            o = t[t.length - 1],
            r = parseInt(o, 16),
            n = {},
            i = 0;
        for (var a in this.FIELDS) 0 === this.FIELDS[a] ? (n[a] = t[i], i++) : r & this.FIELDS[a] && (n[a] = "LASTMARKET" === a ? t[i] : parseFloat(t[i]), i++);
        return n
    }, E.CURRENT.getKey = function (e) {
        return e.TYPE + "~" + e.MARKET + "~" + e.FROMSYMBOL + "~" + e.TOSYMBOL
    }, E.CURRENT.getKeyFromStreamerData = function (e) {
        var t = e.split("~");
        return t[0] + "~" + t[1] + "~" + t[2] + "~" + t[3]
    }, E.noExponents = function (e) {
        var t = String(e).split(/[eE]/);
        if (1 == t.length) return t[0];
        var o = "",
            r = e < 0 ? "-" : "",
            n = t[0].replace(".", ""),
            i = Number(t[1]) + 1;
        if (i < 0) {
            for (o = r + "0."; i++;) o += "0";
            return o + n.replace(/^\-/, "")
        }
        for (i -= n.length; i--;) o += "0";
        return n + o
    }, E.filterNumberFunctionPolyfill = function (e, t) {
        var o = Math.pow(10, t),
            r = (Math.round(e * o) / o).toString().split(".");
        return r[0] = r[0].replace(/\B(?=(\d{3})+(?!\d))/g, " "), r.join(".")
    }, E.convertValueToDisplay = function (e, t, o, r) {
        var n = "",
            i = 1;
        t = parseFloat(t);
        var a = Math.abs(t),
            l = 2,
            s = 2,
            c = 3;
        return !0 === r && (l = 2, s = 0, c = 3), "" != e && (n = e + " "), t < 0 && (i = -1), 0 == t ? n + "0" : (t < 1e-5 && t >= 1e-6 && c > 3 && (c = 3), t < 1e-6 && t >= 1e-7 && c > 2 && (c = 2), t < 1e-7 && t >= 1e-8 && c > 1 && (c = 1), "short" == o ? a > 1e10 ? (a /= 1e9, n + E.filterNumberFunctionPolyfill(i * a, l) + " B") : a > 1e7 ? (a /= 1e6, n + E.filterNumberFunctionPolyfill(i * a, l) + " M") : a > 1e4 ? (a /= 1e3, n + E.filterNumberFunctionPolyfill(i * a, l) + " K") : a >= 1 ? n + E.filterNumberFunctionPolyfill(i * a, s) : n + (i * a).toPrecision(c) : a >= 1 ? n + E.filterNumberFunctionPolyfill(i * a, s) : n + E.noExponents((i * a).toPrecision(c)))
    };
    var T = function (e) {
        this.init(e)
    };
    T.prototype = {
        currentPrice: {},
        config: {
            socket_url: "https://streamer.cryptocompare.com/",
            tsym: "USD",
            display_mode: "index",
            coins: "",
            courses: {
                usdrur: 0,
                usdeur: 0
            },
            currency_codes: {
                rur: "&#8381;",
                eur: "&#8364;"
            }
        },
        init: function (e) {
            if (function (e) {
                e = e || {};
                for (var t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var o in arguments[t]) arguments[t].hasOwnProperty(o) && (e[o] = arguments[t][o])
            }(this.config, e), void 0 === E) return !1;
            if (!this.config.coins.length) return !1;
            for (var t = [], o = this.config.coins.split(","), r = 0, n = o.length; r < n; r++) t.push("5~CCCAGG~" + o[r] + "~" + this.config.tsym);
            var i = this,
                a = io.connect(this.config.socket_url);
            a.emit("SubAdd", {
                subs: t
            }), a.on("m", (function (e) {
                e.substring(0, e.indexOf("~")) == E.STATIC.TYPE.CURRENTAGG && i.dataUnpack(E.CURRENT.unpack(e))
            }))
        },
        dataUnpack: function (e) {
            var t = e.FROMSYMBOL + e.TOSYMBOL;
            if (this.currentPrice.hasOwnProperty(t) || (this.currentPrice[t] = {}), null == e.FLAGS) return !1;
            for (var o in e) this.currentPrice[t][o] = e[o];
            this.currentPrice[t].CHANGE24HOUR = (this.currentPrice[t].PRICE - this.currentPrice[t].OPEN24HOUR).toFixed(2), this.currentPrice[t].CHANGE24HOURPCT = (this.currentPrice[t].CHANGE24HOUR / this.currentPrice[t].OPEN24HOUR * 100).toFixed(2), this.displayData(this.currentPrice[t])
        },
        displayData: function (e) {
            var t = e.FROMSYMBOL,
                o = parseInt(e.FLAGS),
                r = "";
            if ("index" !== this.config.display_mode) return !1;
            {
                for (var n in e) {
                    r = "CHANGE24HOUR" == n || "CHANGE24HOURPCT" == n ? this.getSign(e[n]) + E.convertValueToDisplay("", e[n]) + ("CHANGE24HOUR" == n ? " $" : " %") : "PRICE" == n ? E.convertValueToDisplay("", e[n]) + " $" : "VOLUME24HOURTO" == n ? E.convertValueToDisplay("", e[n].toFixed(0)) + "$" : E.convertValueToDisplay("", e[n]);
                    let o = document.querySelector("[data-coin=" + n + "_" + t + "]");
                    o && (o.textContent = r)
                }
                let i = document.querySelector("[data-coin=PRICE_" + t + "]"),
                    a = document.querySelector(".coin_row_" + t);
                i && i.classList.remove("up", "down"), a && a.classList.remove("row_up", "row_down", "row_unchange"), 1 == o ? (i && i.classList.add("up"), a && a.classList.add("row_up")) : 2 == o && (i && i.classList.add("down"), a && a.classList.add("row_down")), setTimeout((function () {
                    a && a.classList.remove("row_up", "row_down", "row_unchange")
                }), 1e3);
                let l = document.querySelector("[data-coin=trend_" + t + "]");
                l && l.classList.remove("triangle_up", "triangle_down");
                let s = document.querySelector("[data-coin=CHANGE24HOURPCT_" + t + "]");
                s && s.classList.remove("up", "down"), e.PRICE > e.OPEN24HOUR ? (l && l.classList.add("triangle_up"), s && s.classList.add("up")) : e.PRICE < e.OPEN24HOUR && (l && l.classList.add("triangle_down"), s && s.classList.add("down"));
                let c = document.querySelector(".price_rur_" + t),
                    u = document.querySelector(".price_eur_" + t);
                c && (c.textContent = E.convertValueToDisplay("", (e.PRICE * this.config.courses.usdrur).toFixed(2)) + " " + this.config.currency_codes.rur), u && (u.textContent = E.convertValueToDisplay("", (e.PRICE * this.config.courses.usdeur).toFixed(2)) + " " + this.config.currency_codes.eur)
            }
        },
        getSign: function (e) {
            return e > 0 ? "+" : ""
        }
    }, new T({
        coins: "BTC,BNB,XRP,XLM,DOGE,ARDR"
    });
    const y = e => {
        const t = document.createElement("textarea");
        t.value = e;
        let o = document.querySelector(".toast");
        o.classList.add("active"), setTimeout((() => {
            o.classList.remove("active")
        }), 4e3), t.setAttribute("readonly", ""), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t);
        const r = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
        t.select(), document.execCommand("copy"), document.body.removeChild(t), r && (document.getSelection().removeAllRanges(), document.getSelection().addRange(r))
    };

    function g(e, t, o, r) {
        var n = e,
            i = o - t,
            a = Math.abs(Math.floor(r / i));
        a = Math.max(a, 50);
        var l, s = (new Date).getTime() + r;

        function c() {
            var e = (new Date).getTime(),
                t = Math.max((s - e) / r, 0),
                a = Math.round(o - t * i);
            n.innerHTML = a.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 "), a == o && clearInterval(l)
        }

        l = setInterval(c, a), c(), e.classList.add("_done")
    }
    let v = document.querySelector(".bnb__copy1");
    v && v.addEventListener("click", (function () {
        let e = document.querySelector(".bnb__copy1 span").innerHTML;
        y(e)
    }));
    let O = document.querySelector(".bnb__copy2");
    O && O.addEventListener("click", (function () {
        let e = document.querySelector(".bnb__copy2 span").innerHTML;
        y(e)
    }));
    let b = document.querySelector(".transaction__copy");
    b && b.addEventListener("click", (function () {
        let e = document.querySelector(".transaction__copy span").innerHTML;
        y(e)
    }));
    let A = document.querySelector(".bnb__ost-value"),
        L = document.querySelector(".progress1 .circle");
    // количество прoцентов
    const R = 3e3;
    localStorage.setItem("procent", 251e1), A.innerHTML = localStorage.getItem("procent").toLocaleString("en-EN");
    let w = Math.round(localStorage.getItem("procent") / R * 100) + ",100";
    L.setAttribute("stroke-dasharray", w);
    let C = document.querySelector(".bnb__pr");
    C.innerHTML = Math.round(localStorage.getItem("procent") / R * 100) + "%";
    let I = 0,
        M = localStorage.getItem("procent");
    !function e() {
        setTimeout((function () {
            let t = (o = 21, r = 1e1, Math.floor(Math.random() * (r - o + 1)) + o);
            var o, r;
            let n = M - t;
            if (n < M && n > 0) {
                g(A, M, M - t, 20);
                let e = Math.round(n / R * 100) + ",100";
                L.setAttribute("stroke-dasharray", e), M = n, localStorage.setItem("procent", n), C.innerHTML = Math.round(localStorage.getItem("procent") / R * 100) + "%"
            } else M = 2512, L.setAttribute("stroke-dasharray", "60,100"), localStorage.setItem("procent", 2512);
            I++, I < 30 && e()
        }), 5e3)
    }();
    let N = document.querySelector(".left-faq__input1"),
        F = document.querySelector(".left-faq__input2");
    N && F && N.addEventListener("input", (function () {
        parseFloat(N.value) ? F.value = 2 * parseFloat(N.value) : F.value = 0
    }));

    function P(e, t) {
        let o = e + Math.random() * (t - e);
        return Math.round(o)
    }

    function U() {
        let e = [1, .1, .01];
        return e[Math.floor(Math.random() * e.length)]
    }

    function H(e) {
        for (var t = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", r = o.length, n = 0; n < e; n++) t += o.charAt(Math.floor(Math.random() * r));
        return t + "..."
    }
    let address = document.querySelector(".transaction__copy span").innerHTML;
    function D() {
        0;
        var e = '<div class="item" style="display:none"><div class="top"><div class="data"><div style="" class="data-item">{t1}</div><div style="display: none" class="data-item">{t2}</div><div class="data-item" id="btcstr">{t4}</div><div class="data-item">{t5}</div><div class="data-item">{t6}</div><div class="data-item">{t3}</div><div class="data-item">{t7}</div><div style="display: none" class="data-item">{t8}</div></div></div><div class="bottom"><div class="data"><div style="" class="data-item">{b1}</div><div style="display: none" class="data-item">{b2}</div><div class="data-item">{b4}</div><div class="data-item">{b5}</div><div class="data-item" id="btcstr">{b6}</div><div class="data-item">{b3}</div><div class="data-item">{b7}</div><div style="display:none"; class="data-item">{b8}</div></div></div></div>';
        let t = H(10),
            o = "616" + P(1, 9) + P(1, 9) + P(1, 9),
            r = function () {
                for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = t.length, r = 0; r < 8; r++) e += t.charAt(Math.floor(Math.random() * o));
                return "0x" + e
            }() + "...",
            // тут изменить адрес
            n = address.substr(0, 10),
            i = function (e, t) {
                let o;
                return o = Math.random() * (t - e) + e, o.toFixed(2)
            }(0.1, 10),
            a = i + " ETH",
            l = (.009 * Math.random() * U() + 1e-4 * U()).toFixed(6),
            s = H(10),
            c = "616" + P(1, 9) + P(1, 9) + P(1, 9),
            u = n.slice(0, 10) + "...",
            d = r,
            m = 2 * i + " ETH",
            h = (.009 * Math.random() * U() + 1e-4 * U()).toFixed(8);
        e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = e.replace("{t1}", s)).replace("{t2}", c)).replace("{t3}", "right now")).replace("{t4}", u)).replace("{t5}", "OUT")).replace("{t6}", d)).replace("{t7}", m)).replace("{t8}", h)).replace("{b1}", t)).replace("{b2}", o)).replace("{b3}", "right now")).replace("{b4}", r)).replace("{b5}", "IN")).replace("{b6}", u)).replace("{b7}", a)).replace("{b8}", l);
        var p = $(e).prependTo(".table-body");
        $(".item").each((function () {
            var e = $(this).index();
            e > 0 && ($(this).find(".top .data div").eq(5).html(e + " min"), $(this).find(".bottom .data div").eq(5).html(e + " min"))
        })), setTimeout((function () {
            p.find(".top").fadeIn(), p.find(".bottom .data div").eq(5).html("right now"), $(".item").slideDown()
        }), 2e3)
    }

    D(), setInterval((function () {
        D()
    }), 15500);
    let _ = document.querySelectorAll("._tabs");
    for (let e = 0; e < _.length; e++) {
        let t = _[e],
            o = t.querySelectorAll("._tabs-item"),
            r = t.querySelectorAll("._tabs-block");
        for (let e = 0; e < o.length; e++) {
            let t = o[e];
            t.addEventListener("click", (function (n) {
                for (let e = 0; e < o.length; e++) {
                    o[e].classList.remove("_active"), r[e].classList.remove("_active")
                }
                t.classList.add("_active"), r[e].classList.add("_active"), n.preventDefault()
            }))
        }
    }

    function k(e, t) {
        if (e.fireEvent) e.fireEvent("on" + t);
        else {
            var o = document.createEvent("Events");
            o.initEvent(t, !0, !1), e.dispatchEvent(o)
        }
    }

    let B = document.querySelectorAll(".tabs__title"),
        Y = document.querySelector(".steps__body");
    document.querySelectorAll(".steps__btn1");
    Y && Y.addEventListener("click", (function (e) {
        if (e.target.closest(".steps__btn1")) {
            let e;
            for (let t = 0; t < B.length; t++) B[t].classList.contains("_active") && (e = t);
            B[e].classList.add("fill"), e != B.length - 1 && k(B[e + 1], "click")
        }
    }));
    let G = document.querySelector(".two__items");
    G && G.addEventListener("click", (function (e) {
        if (e.target.closest(".two__item")) {
            B[1].classList.add("fill");
            let t = e.target.closest(".two__item").getAttribute("data-block");
            if (0 != t) {
                k(B[2], "click");
                let e = document.querySelectorAll(".th");
                e.forEach((o => {
                    o.getAttribute("data-id") == t && (!function (e, t) {
                        for (var o = 0; o < e.length; o++) e[o].classList.remove(t)
                    }(e, "active"), o.classList.add("active"))
                }))
            } else 0 == t && (B[2].classList.add("fill"), k(B[3], "click"))
        }
    }));
    document.querySelectorAll(".two__item");
    !function (e) {
        let t = new Image;
        t.onload = t.onerror = function () {
            e(2 == t.height)
        }, t.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
    }((function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t)
    })), o.any() && document.documentElement.classList.add("touch"), window.addEventListener("load", (function () {
        setTimeout((function () {
            document.documentElement.classList.add("loaded")
        }), 0)
    })),
        function () {
            let e = document.querySelector(".icon-menu");
            e && e.addEventListener("click", (function (e) {
                i && (((e = 500) => {
                    document.documentElement.classList.contains("lock") ? a(e) : l(e)
                })(), document.documentElement.classList.toggle("menu-open"))
            }))
        }(),
        function () {
            const e = document.querySelectorAll("[data-spollers]");
            if (e.length > 0) {
                const t = Array.from(e).filter((function (e, t, o) {
                    return !e.dataset.spollers.split(",")[0]
                }));
                t.length > 0 && i(t);
                const o = Array.from(e).filter((function (e, t, o) {
                    return e.dataset.spollers.split(",")[0]
                }));
                if (o.length > 0) {
                    const e = [];
                    o.forEach((t => {
                        const o = {},
                            r = t.dataset.spollers.split(",");
                        o.value = r[0], o.type = r[1] ? r[1].trim() : "max", o.item = t, e.push(o)
                    }));
                    let t = e.map((function (e) {
                        return "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
                    }));
                    t = t.filter((function (e, t, o) {
                        return o.indexOf(e) === t
                    })), t.forEach((t => {
                        const o = t.split(","),
                            r = o[1],
                            n = o[2],
                            a = window.matchMedia(o[0]),
                            l = e.filter((function (e) {
                                if (e.value === r && e.type === n) return !0
                            }));
                        a.addEventListener("change", (function () {
                            i(l, a)
                        })), i(l, a)
                    }))
                }

                function i(e, t = !1) {
                    e.forEach((e => {
                        e = t ? e.item : e, t.matches || !t ? (e.classList.add("_spoller-init"), a(e), e.addEventListener("click", l)) : (e.classList.remove("_spoller-init"), a(e, !1), e.removeEventListener("click", l))
                    }))
                }

                function a(e, t = !0) {
                    const o = e.querySelectorAll("[data-spoller]");
                    o.length > 0 && o.forEach((e => {
                        t ? (e.removeAttribute("tabindex"), e.classList.contains("_spoller-active") || (e.nextElementSibling.hidden = !0)) : (e.setAttribute("tabindex", "-1"), e.nextElementSibling.hidden = !1)
                    }))
                }

                function l(e) {
                    const t = e.target;
                    if (t.hasAttribute("data-spoller") || t.closest("[data-spoller]")) {
                        const o = t.hasAttribute("data-spoller") ? t : t.closest("[data-spoller]"),
                            i = o.closest("[data-spollers]"),
                            a = !!i.hasAttribute("data-one-spoller");
                        i.querySelectorAll("._slide").length || (a && !o.classList.contains("_spoller-active") && s(i), o.classList.toggle("_spoller-active"), ((e, t = 500) => {
                            e.hidden ? n(e, t) : r(e, t)
                        })(o.nextElementSibling, 500)), e.preventDefault()
                    }
                }

                function s(e) {
                    const t = e.querySelector("[data-spoller]._spoller-active");
                    t && (t.classList.remove("_spoller-active"), r(t.nextElementSibling, 500))
                }
            }
        }(),
        function () {
            const e = document.querySelectorAll("[data-tabs]");
            let t = [];
            if (e.length > 0) {
                const r = location.hash.replace("#", "");
                r.startsWith("tab-") && (t = r.replace("tab-", "").split("-")), e.forEach(((e, o) => {
                    e.classList.add("_tab-init"), e.setAttribute("data-tabs-index", o), e.addEventListener("click", i),
                        function (e) {
                            const o = e.querySelectorAll("[data-tabs-titles]>*"),
                                r = e.querySelectorAll("[data-tabs-body]>*"),
                                n = e.dataset.tabsIndex,
                                i = t[0] == n;
                            if (i) {
                                e.querySelector("[data-tabs-titles]>._tab-active").classList.remove("_tab-active")
                            }
                            r.length > 0 && r.forEach(((e, r) => {
                                o[r].setAttribute("data-tabs-title", ""), e.setAttribute("data-tabs-item", ""), i && r == t[1] && o[r].classList.add("_tab-active"), e.hidden = !o[r].classList.contains("_tab-active")
                            }))
                        }(e)
                }));
                const n = Array.from(e).filter((function (e, t, o) {
                    return e.dataset.tabs
                }));
                n.length > 0 && function (e) {
                    const t = [];
                    e.forEach((e => {
                        const o = e.dataset.tabs,
                            r = {};
                        r.value = o, r.item = e, t.push(r)
                    }));
                    let r = t.map((function (e) {
                        return `(max-width:${e.value}px),${e.value}`
                    }));
                    r = r.filter((function (e, t, o) {
                        return o.indexOf(e) === t
                    })), r.forEach((e => {
                        const r = e.split(","),
                            n = window.matchMedia(r[0]),
                            i = r[1],
                            a = t.filter((function (e) {
                                if (e.value === i) return !0
                            }));
                        n.addEventListener("change", (function () {
                            o(a, n)
                        })), o(a, n)
                    }))
                }(n)
            }

            function o(e, t) {
                e.forEach((e => {
                    const o = (e = e.item).querySelector("[data-tabs-titles]"),
                        r = e.querySelectorAll("[data-tabs-title]"),
                        n = e.querySelector("[data-tabs-body]");
                    e.querySelectorAll("[data-tabs-item]").forEach(((i, a) => {
                        t.matches ? (n.append(r[a]), n.append(i), e.classList.add("_tab-spoller")) : (o.append(r[a]), e.classList.remove("_tab-spoller"))
                    }))
                }))
            }

            function i(e) {
                const t = e.target;
                if (t.closest("[data-tabs-title]") || t.hasAttribute("[data-tabs-title]")) {
                    const o = t,
                        i = o.closest("[data-tabs]");
                    if (!o.classList.contains("_tab-active") && !i.querySelectorAll("._slide").length) {
                        const e = i.querySelector("[data-tabs-title]._tab-active");
                        e && e.classList.remove("_tab-active"), o.classList.add("_tab-active"),
                            function (e) {
                                const t = e.querySelectorAll("[data-tabs-title]"),
                                    o = e.querySelectorAll("[data-tabs-item]"),
                                    i = e.dataset.tabsIndex,
                                    a = function (e) {
                                        if (e.hasAttribute("data-tabs-animate")) return e.dataset.tabsAnimate > 0 ? e.dataset.tabsAnimate : 500
                                    }(e);
                                o.length > 0 && o.forEach(((e, o) => {
                                    t[o].classList.contains("_tab-active") ? (a ? n(e, a) : e.hidden = !1, location.hash = `tab-${i}-${o}`) : a ? r(e, a) : e.hidden = !0
                                }))
                            }(i)
                    }
                    e.preventDefault()
                }
            }
        }(),
        function () {
            const e = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            e.length && e.forEach((e => {
                e.dataset.placeholder = e.placeholder
            })), document.body.addEventListener("focusin", (function (e) {
                const t = e.target;
                "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || (t.dataset.placeholder && (t.placeholder = ""), t.classList.add("_focus"), t.parentElement.classList.add("_focus"), s.removeError(t))
            })), document.body.addEventListener("focusout", (function (e) {
                const t = e.target;
                "INPUT" !== t.tagName && "TEXTAREA" !== t.tagName || (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder), t.classList.remove("_focus"), t.parentElement.classList.remove("_focus"), t.hasAttribute("data-validate") && s.validateInput(t))
            }))
        }(),
        function (e) {
            const t = document.forms;
            if (t.length)
                for (const e of t) e.addEventListener("submit", r);
            let o = document.querySelector(".form__load");

            async function r(t) {
                const r = t.target;
                if (0 === (e ? s.getErrors(r) : 0)) {
                    const e = r.getAttribute("data-message");
                    r.hasAttribute("data-ajax");
                    t.preventDefault(), o.classList.add("active"), setTimeout((() => {
                        let e = document.querySelector(".form__title.none"),
                            t = document.querySelector(".form__subtitle.none"),
                            n = document.querySelector(".form__title.active"),
                            i = document.querySelector(".form__subtitle.active");
                        e.classList.remove("none"), t.classList.remove("none"), n.classList.add("none"), i.classList.add("none"),
                            function (e) {
                                let t = e.querySelectorAll("input,textarea");
                                for (let e = 0; e < t.length; e++) {
                                    const o = t[e];
                                    o.parentElement.classList.remove("_focus"), o.classList.remove("_focus"), o.value = o.dataset.placeholder
                                }
                                let o = e.querySelectorAll(".checkbox__input");
                                if (o.length > 0)
                                    for (let e = 0; e < o.length; e++) o[e].checked = !1;
                                let r = e.querySelectorAll("select");
                                if (r.length > 0)
                                    for (let e = 0; e < r.length; e++) {
                                        const t = r[e],
                                            o = t.getAttribute("data-default");
                                        t.value = o, select_item(t)
                                    }
                            }(r), o.classList.remove("active")
                    }), 4e3), r.hasAttribute("data-test") && (t.preventDefault(), e && popupItem.open(`#${e}`), s.formClean(r))
                } else {
                    const e = r.querySelector("._error");
                    e && r.hasAttribute("data-goto-error") && gotoBlock(e, 1e3, 50), t.preventDefault()
                }
            }
        }(!0), document.addEventListener("click", (function (e) {
        const t = e.target;
        if (t.closest("[data-goto]")) {
            const o = t.closest("[data-goto]"),
                r = !!o.hasAttribute("data-goto-header"),
                n = o.dataset.gotoSpeed ? o.dataset.gotoSpeed : "500";
            ((e, t = !1, o = 500, r = 0) => {
                let n = "";
                t && (n = "header.header");
                let i = {
                    speedAsDuration: !0,
                    speed: o,
                    header: n,
                    offset: r,
                    easing: "easeOutQuad"
                };
                const a = document.querySelector(e);
                a ? (new SmoothScroll).animateScroll(a, "", i) : console.log(`[gotoBlock] - Такого блока нет: ${e}`)
            })(`#${o.dataset.goto}`, r, n), document.querySelector(".menu-open") && document.querySelector(".menu-open").classList.remove("menu-open"), e.preventDefault()
        }
    }))
})();
