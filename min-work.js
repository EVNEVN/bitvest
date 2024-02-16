///(function() {
    function e(e, t, a) {
        return a === void 0 || 0 === +a ? Math[e](t) : (t = +t, a = +a, isNaN(t) || "number" != typeof a || 0 !== a % 1 ? 0 / 0 : (t = ("" + t).split("e"), t = Math[e](+(t[0] + "e" + (t[1] ? +t[1] - a : -a))), t = ("" + t).split("e"), +(t[0] + "e" + (t[1] ? +t[1] + a : a))))
    }

    function t(e) {
        e *= 1e8, e = Math.round(e);
        var t = Is.length,
            a = {};
        for (_a = t; _a >= 0; _a--)
            for (a[Is[_a] + ""] = 0; e >= Is[_a];) a[Is[_a] + ""] += 1, e -= Is[_a];
        return a
    }

    function a(e) {
        var t = Is.length,
            a = "";
        for (_a = 0; t > _a; _a++)
            for (var s = e[Is[_a]], i = 0; s > i;) i++, a += "<div data-chip='" + Math.round10(Is[_a] / 1e8, -8).toFixed(8) + "' data-value='" + qs[_a] + "' class='chip'></div>";
        return a
    }

    function s() {
        if (!_s && !us) {
            var e = !1,
                t = 0,
                a = 1,
                s = 8;
            "tokens" == bs && (a *= 1e8, s = 0);
            for (item in roulette_bet) {
                var i = roulette.max_bet(),
                    n = roulette_bet[item] * a,
                    o = $("[data-target='" + item + "']").data("side");
                "outside" == o && n >= i.outside ? (e = !0, t += roulette.max_bet().outside) : "inside" == o && n >= i.inside ? (e = !0, t += roulette.max_bet().inside) : t += n
            }
            var l = St(t, s);
            e && (l = "~" + l), $(".roulette_bet").html(l)
        }
    }

    function i(e) {
        var t = roulette_bet,
            a = gs;
        ks = !1, roulette_bet = e, gs = 0;
        for (item in roulette_bet) $("[data-target='" + item + "']").click();
        ks = !0, gs = a, roulette_bet = t
    }

    function n() {
        $("[data-target]").each(function() {
            var e = $(this),
                t = parseInt(e.position().left + parseInt(e.css("marginLeft")) + parseInt(e.css("paddingLeft")) / 2 + e.width() / 2) - 17 - 7,
                a = parseInt(e.position().top + parseInt(e.css("marginTop")) + parseInt(e.css("paddingTop")) / 2 + e.height() / 2) - 17;
            ("street" == e.data("type") || "line" == e.data("type") || "split" == e.data("type") || "corner" == e.data("type") || "triple" == e.data("type") || "quad" == e.data("type") || "double" == e.data("type")) && (t += 92, a += 12), e.hasClass("double") && "split" == e.data("type") ? a += 25 : "split" == e.data("type"), e.hasClass("dh") && "double" == e.data("type") && (a += 25, t -= 3), "custom" != e.data("target") && $(".board").append("<div style='left:" + t + "px;top:" + a + "px' class='chip_cont' data-bet='0' data-receive='" + e.data("target") + "'> </div>")
        })
    }

    function o(e) {
        var t = 0,
            a = [],
            s = 1;
        "tokens" == bs && (s = 1e8);
        for (item in e) e[item] > 0 && (a[t] = {}, a[t].quantity = e[item] * s, a[t].type = $("[data-target='" + item + "']").data("type"), a[t].numbers = item.split(","), t++);
        return JSON.stringify(a)
    }

    function l(e) {
        return _s ? ($(".roulette .repeat").click(), _s = !1, void 0) : (ys = roulette_bet, $("[data-receive]").removeClass("active"), us || (us = !0, user_seed = $(".player-seed").val(), sub = {
            token: Za,
            secret: es,
            bet: e,
            user_seed: user_seed,
            currency: bs,
            act: "play_roulette",
            v: ver
        }, $.post("action.php", sub, function(e) {
            e.success ? c(e.game_result.number, function() {
                us = !1, _s = !0, et(e.data, "html", e), _t(e.server_seed, e.server_hash, e.result, e.player_seed), u(e.game_result.number);
                var t = {},
                    a = 1,
                    s = e.game_result;
                "tokens" == bs && (a = 1e-8), xt(["all", "self"], ["roulette", wa, bs, (s.total_bet * a).toFixed(8), 1, (s.win * a).toFixed(8), e.game_id, "roulette", "self", xa, Ma, null, null, null, !1, 0]);
                for (item in e.details) {
                    var n = e.details[item].numbers.join(",");
                    t[n] = e.details[item].win * a
                }
                i(t);
                var o = 8;
                "tokens" == bs && (o = 0), $(".roulette_bet").html(St(e.game_result.total_bet, o)), $(".roulette_won").html(St(e.game_result.win, o))
            }) : (us = !1, Lt(), alert(e.msg))
        }).fail(function() {
            za = !0, setTimeout(function() {
                us = !1, l(e)
            }, 100)
        })), void 0)
    }

    function r(e) {
        var t = e.css("transform");
        if ("none" !== t) var a = t.split("(")[1].split(")")[0].split(","),
            s = a[0],
            i = a[1],
            n = Math.round(Math.atan2(i, s) * (180 / Math.PI));
        else var n = 0;
        return 0 > n ? n += 360 : n
    }

    function c(e, t) {
        var a, s = parseInt(7 * Math.random()) + 10;
        if (a = 8550 / Xa, Xa > 8) {
            a = 0, $obj = $(".wheel .inner");
            var i = $obj.data("rots");
            $obj.css("transform", "rotate(" + (+Ps[e] - 360 * s - 360 * i) + "deg)"), $obj.data("rots", s + i), $(".roulette .ball").css("transform", "translate(0px,60px)")
        } else {
            $obj = $(".wheel .inner");
            var i = $obj.data("rots");
            $(".right").addClass("spinning"), $obj.css("transform", "rotate(" + (+Ps[e] - 360 * s - 360 * i) + "deg)"), $obj.data("rots", s + i), d(e)
        }
        return setTimeout(function() {
            t(), $(".right").removeClass("spinning")
        }, a)
    }

    function d(e) {
        "undefined" != typeof snap_to_wheel && clearInterval(snap_to_wheel), $(".roulette .ball").attr("style", ""), setTimeout(function() {
            $(".roulette .ball").removeClass("stopped")
        }, 25), setTimeout(function() {
            $(".roulette .ball").css("transform", "rotate(1810deg)")
        }, 50), setTimeout(function() {
            $(".roulette .ball").addClass("stopping"), $(".roulette .ball").css("transform", "rotate(2080deg) translate(-14px,1px)")
        }, 3200 / Xa + 50), setTimeout(function() {
            $(".roulette .ball").css("transform", "rotate(1920deg) translate(22px,16px)")
        }, 4100 / Xa + 50), setTimeout(function() {
            $(".roulette .ball").css("transform", "rotate(2560deg) translate(0,70px)")
        }, 5e3 / Xa + 50), setTimeout(function() {
            $(".roulette .ball").css("transform", "rotate(2260deg) translate(0px,60px)"), snap_to_wheel = setInterval(function() {
                var t = (r($(".wheel .inner")) - Ps[e]) % 360,
                    a = r($(".wheel .inner")),
                    s = r($(".roulette .ball"));
                if (s >= t) var i = 1;
                1 == i && ($(".roulette .ball").addClass("stopped"), $(".roulette .ball").removeClass("stopping"), $(".roulette .ball").css("transform", "rotate(" + (-1 + a - Ps[e]) + "deg) translate(0px,60px)"))
            }, 7)
        }, 6e3 / Xa + 50), setTimeout(function() {
            clearInterval(snap_to_wheel)
        }, 8500)
    }

    function u(e) {
        $("[data-cell]").removeClass("hit"), $("[data-cell='" + e + "']").addClass("hit");
        for (var t = 15; t > 1; t--) $(".bet-history .cell:nth-child(" + t + ")").html($(".bet-history .cell:nth-child(" + (t - 1) + ")").html()), $(".bet-history .cell:nth-child(" + t + ")").attr("class", $(".bet-history .cell:nth-child(" + (t - 1) + ")").attr("class"));
        $(".bet-history .cell:nth-child(1)").html(e), $(".bet-history .cell:nth-child(1)").attr("class", "cell " + js[e])
    }

    function p(e, t) {
        if ("bitdrop" == t) {
            for (var a = 0, s = 0, i = 0; 17 > i; i++) {
                var n = i;
                n > 8 && (n -= 2 * (i - 8)), s += ms[n] * e[i], a += ms[n]
            }
            return s / a
        }
        if ("bitspin" == t) {
            for (var s = 0, i = 0; 16 > i; i++) s += parseFloat(e[i]);
            return 0 == s ? 0 : s / 16
        }
        if ("slot" == t) {
            var o = 1073741824,
                l = [0, 0, 0, 0, 0, 0];
            l[3] = Math.max.apply(Math, [e[0], e[3], e[6], e[9], e[12], e[15], e[18], e[21]]), l[4] = Math.max.apply(Math, [e[1], e[4], e[7], e[10], e[13], e[16], e[19], e[22]]), l[5] = Math.max.apply(Math, [e[2], e[5], e[8], e[11], e[14], e[17], e[20], e[23]]);
            var s = 0;
            return s += 16 * l[5], s += 32 * Math.max(e[5], l[4]), s += 96 * Math.max(e[8], l[4]), s += 128 * Math.max(e[11], l[4]), s += 144 * Math.max(e[14], l[4]), s += 160 * Math.max(e[18], l[4]), s += 208 * Math.max(e[20], l[4]), s += 240 * Math.max(e[23], l[4]), s += 16 * Math.max(e[2], l[3]), s += 1008 * Math.max(e[1], l[3]), s += 144 * Math.max(e[5], l[3]), s += 2928 * Math.max(e[4], l[3]), s += 784 * Math.max(e[8], l[3]), s += 6384 * Math.max(e[7], l[3]), s += 1152 * Math.max(e[11], l[3]), s += 7040 * Math.max(e[10], l[3]), s += 1440 * Math.max(e[14], l[3]), s += 7776 * Math.max(e[13], l[3]), s += 1760 * Math.max(e[17], l[3]), s += 8480 * Math.max(e[16], l[3]), s += 2688 * Math.max(e[20], l[3]), s += 9600 * Math.max(e[19], l[3]), s += 3328 * Math.max(e[23], l[3]), s += 9984 * Math.max(e[22], l[3]), s += 32 * e[2], s += 2016 * e[1], s += 63488 * e[0], s += 384 * e[5], s += 7808 * e[4], s += 122880 * e[3], s += 1344 * e[8], s += 10944 * e[7], s += 86016 * e[6], s += 5184 * e[11], s += 31680 * e[10], s += 225280 * e[9], s += 6400 * e[14], s += 34560 * e[13], s += 221184 * e[12], s += 9680 * e[17], s += 46640 * e[16], s += 271360 * e[15], s += 17472 * e[20], s += 62400 * e[19], s += 313344 * e[18], s += 26880 * e[23], s += 80640 * e[22], s += 384e3 * e[21], s += 64 * e[2], s += 4032 * e[1], s += 126976 * e[0], s += 1440 * e[5], s += 29280 * e[4], s += 460800 * e[3], s += 11200 * e[8], s += 91200 * e[7], s += 716800 * e[6], s += 25920 * e[11], s += 158400 * e[10], s += 1126400 * e[9], s += 32e3 * e[14], s += 172800 * e[13], s += 1105920 * e[12], s += 46464 * e[17], s += 223872 * e[16], s += 1302528 * e[15], s += 101920 * e[20], s += 364e3 * e[19], s += 1827840 * e[18], s += 167552 * e[23], s += 502656 * e[22], s += 2393600 * e[21], s += 64 * e[2], s += 4032 * e[1], s += 126976 * e[0], s += 2520 * e[5], s += 51240 * e[4], s += 806400 * e[3], s += 23520 * e[8], s += 191520 * e[7], s += 1505280 * e[6], s += 64800 * e[11], s += 396e3 * e[10], s += 2816e3 * e[9], s += 7e4 * e[14], s += 378e3 * e[13], s += 2419200 * e[12], s += 116160 * e[17], s += 559680 * e[16], s += 3256320 * e[15], s += 336336 * e[20], s += 1201200 * e[19], s += 6031872 * e[18], s += 594048 * e[23], s += 1782144 * e[22], s += 8486400 * e[21], s / o
        }
    }

    function m(e, t) {
        if ("bitdrop" == t) {
            var a = v(e) / 2,
                s = 1,
                i = Math.max.apply(Math, e);
            return 10 > i && (s = 10 / i, s > 5 / 3 && (s = 5 / 3)), .012 * (qa[bs].plinko / Math.max(i, 27 * a, 10)) * f(e) * s
        }
        if ("bitspin" == t) {
            if (0 == Math.max(Math.max.apply(Math, e))) return 0;
            var i = Math.max(Math.max.apply(Math, e), 1.01),
                n = 85e-5 * (qa[bs][t] / Math.pow(i - 1, .475));
            return i > 10 ? n *= .8 - .2 * ((i - 15.72) / 5.72) : 1.05 >= i && i >= 1.01 && (n = 175e-6 * (qa[bs][t] / (i - 1))), .8 * n
        }
        if ("slot" == t) {
            var i = Math.max.apply(Math, e),
                o = 999 / i,
                l = Math.log(o) / Math.log(5) + 1,
                l = Math.min(15, l);
            return 50 > i && (l *= 1.5), 250 > i && (l *= 2), .8 * .4 * 2e-5 * qa[bs][t] * l
        }
        if ("dice" == t) return qa[bs][t] / 1200 / e;
        if ("keno" == t) {
            var i = Math.max(Math.max.apply(Math, e), 1),
                r = 1;
            return 7 == e.length ? r = 1.5 : 8 == e.length ? r = 2 : 9 == e.length ? r = 3 : 10 == e.length ? r = 4 : 11 == e.length && (r = 5), 3 == e.length && (i = Math.max(i, 12)), 4 == e.length && (i = Math.max(i, 25)), 5 == e.length && (i = Math.max(i, 50)), qa[bs][t] / 600 / i * r
        }
    }

    function h(e) {
        for (var t = 0, a = p(e, "bitdrop"), s = 0; 17 > s; s++) {
            var i = s;
            i > 8 && (i -= 2 * (s - 8)), t += Math.pow(e[s] - a, 2) * ms[i]
        }
        return t /= 65536, Math.max(Math.pow(t, .5), .55)
    }

    function v(e) {
        return Math.min(Math.max.apply(Math, e), 10) * Math.pow(h(e), 1)
    }

    function f(e) {
        if (4 >= Math.max.apply(Math, e)) {
            for (var t = 0, a = 0, s = 5; 12 > s; s++) 1 > e[s] && (t += parseFloat(e[s]), a++);
            var i = Math.max.apply(Math, e),
                n = 1 + .25 * (i - 2);
            return n = Math.max(Math.min(n, 1.75), 1), 1 - t / a / n
        }
        return 1
    }

    function b(e, t) {
        var a = 100 * p(e, t),
            s = 98.3;
        ("bitspin" == t || "slot" == t) && (s = 98.25), a > s ? $("." + t + " .rtp").addClass("invalid") : $("." + t + " .rtp").removeClass("invalid"), $("." + t + " .rtp").html(a.toFixed(4) + "%");
        var i = 5;
        qa[bs][t] > 1e3 && (i = 4), qa[bs][t] > 1e4 && (i = 1), qa[bs][t] > 1e5 && (i = 0), $("." + t + " .prizes.purple").find(".max-bet").html(m(e, t).toFixed(i)), $("." + t + " .custom").find(".max-bet").html(m(e, t).toFixed(i)), "bitdrop" == t ? prize.purple = e : "bitspin" == t ? prize_bitspin.purple = e : "slot" == t && (prize_slot.purple = e)
    }

    function g(e, t, a) {
        var s = 300 / Xa,
            i = (1200 / Math.pow(e.path.length, .66) + 80) / Xa,
            n = parseFloat($(".balance").html()),
            o = n - e.total_bet;
        return $.each(e.path, function(a, n) {
            var l = 0,
                r = n.split("");
            C("#ball_" + a, !0, i * a), $.each(r, function(e, t) {
                0 == t ? l -= 19 : l += 19, _("#ball_" + a, l, 31 * (e + 1) + 3 + 3, s * e + i * a)
            }), yt(o += e.win[a], 16 * s + i * a), _("#ball_" + a, l, 524 + 25 * t, 16 * s + i * a), k("#ball_" + a, 17 * s + i * a, 180), k("#ball_" + a, 17 * s + 400 / Xa + i * a, 360), C("#ball_" + a, !1, 18 * s + 150 / Xa + i * a), w("#ball_" + a, 19 * s + 150 / Xa + i * a), _("#ball_" + a, 0, 0, 20 * s + 150 / Xa + i * a)
        }), setTimeout(function() {
            a()
        }, 18 * s + 150 + i * e.path.length)
    }

    function _(e, t, a, s) {
        setTimeout(function() {
            var s = $(e).data("x");
            $(e).css("transform", "translate(" + (s - (s - t) / 1.08) + "px," + (a - 25) + "px)").data("x", t), $(e).data("old", "translate(" + (s - (s - t) / 1.08) + "px," + (a - 25) + "px)").data("x", t)
        }, s), setTimeout(function() {
            var s = $(e).data("x");
            $(e).css("transform", "translate(" + (s - (s - t) / 1.06) + "px," + (a - 13) + "px)").data("x", t)
        }, s + 100 / Xa), setTimeout(function() {
            $(e).css("transform", "translate(" + t + "px," + (a - 0) + "px)").data("x", t), $(e).data("old", "translate(" + t + "px," + (a - 0) + "px)").data("x", t)
        }, s + 175 / Xa)
    }

    function k(e, t, a) {
        setTimeout(function() {
            var t = $(e).data("old");
            $(e).addClass("slow"), $(e).css("transform", t + " rotateY(" + a + "deg) scale(1.5)")
        }, t)
    }

    function w(e, t) {
        setTimeout(function() {
            $(e).removeClass("slow"), $(e).css("transform", $(e).data("old"))
        }, t)
    }

    function C(e, t, a) {
        setTimeout(function() {
            t ? $(e).css("opacity", 1) : $(e).css("opacity", 0)
        }, a)
    }

    function M(e, t) {
        if (null != t) {
            var a = $("." + e);
            t = JSON.parse(t), $(a).data("prize", t.row);
            var s = "<div>" + ut(t.name) + " - <b>" + t.value + "</b></div><div class='prizes blue text-0'>";
            t = t.row.split(",");
            for (var i = 0; 17 > i; i++) s += "<div class='side-prize prize'>" + ut(t[i]) + "</div>";
            s += "<div class='side-prize prize'>Play</div></div>", $(a).html(s)
        }
    }

    function T(e) {
        var t = localStorage.getItem("rows");
        t = null !== t ? JSON.parse(localStorage.getItem("rows")) : [], t.push(e), localStorage.setItem("rows", JSON.stringify(t)), z()
    }

    function R(e) {
        var t = localStorage.getItem("rows");
        t = null !== t ? JSON.parse(localStorage.getItem("rows")) : [], t.splice(e, 1), $("#row_" + e).remove(), localStorage.setItem("rows", JSON.stringify(t)), z()
    }

    function F(e, t) {
        for (var a = ut(e.join(",")), s = '<tr id="row_id"><td class="center"><div data-prize="' + a + '" class="prizes blue small">', i = 0; 17 > i; i++) s += '<div data-multiple="' + ut(e[i]) + '" class="prize small">' + ut(e[i]) + "</div>";
        s += '<div class="prize small">---</div></div>', s += '<div class="my-row-details">    <button data-prize="' + a + '" class="green small"><i class="icon-check"></i> Play</button>     <button data-prize-share="' + a + '" class="blue small share"><i class="icon-open"></i> Share</button>     <button data-id="' + t + '" class="red small remove-row"><i class="icon-x"></i> Delete</button>     </div>    </td></tr>', $("#row-container").append(s)
    }

    function z() {
        var e = localStorage.getItem("rows");
        e = null !== e ? JSON.parse(localStorage.getItem("rows")) : [], $("#row-container").html("");
        for (var t = 0; e.length > t; t++) F(e[t], t)
    }

    function N(e) {
        for (var t = $(".bitspin .wheel-prizes"), a = 1; 16 >= a; a++) {
            var s = parseFloat(e[a - 1]);
            0 == s ? s = "-" : s += "x", t.find("div:nth-child(" + a + ") p").html(s)
        }
    }

    function S(e) {
        if (!us) {
            us = !0;
            var t = "" + e;
            bet = $("#bitspin_bet").val(), user_seed = $(".player-seed").val(), sub = {
                prizes: t,
                token: Za,
                secret: es,
                bet: bet,
                user_seed: user_seed,
                currency: bs,
                act: "play_bitspin",
                v: ver
            }, $.post("action.php", sub, function(t) {
                t.success ? I(t.game_result, function() {
                    us = !1, et(t.data, "html", t), _t(t.server_seed, t.server_hash, t.result, t.player_seed);
                    var a = 1,
                        s = t.game_result;
                    "tokens" == bs && (a = 1e-8);
                    var i = "purple";
                    "15,0,0,0,0.11,0,0,0,0.5,0,0,0,0.11,0,0,0" == e ? i = "red" : "7,0,0.11,0,0.5,0,0.25,0,7,0,0.25,0,0.5,0,0.11,0" == e ? i = "orange" : "5,0.1,1.2,0.1,1.2,0.1,2,0.07,2,0.05,1.2,0.1,1.2,0.1,1.2,0.1" == e ? i = "green" : "3,0,2,0,1,0,2,0,3,0,2,0,1,0,1.72,0" == e ? i = "teal" : "2,0,3,0,4,0,5,0,1,0,0.2,0,0.32,0,0.2,0" == e && (i = "blue"), xt(["all", "self"], ["bitspin", wa, bs, (s.total_bet * a).toFixed(8), 1, (s.win * a).toFixed(8), t.game_id, i, "self", xa, Ma, null, null, null, !1, 0]), setTimeout(function() {
                        Dt(t.game_result)
                    }, 150)
                }) : (us = !1, "bet rate limit exceeded" == t.msg && Ss.status.active ? (za = !0, setTimeout(function() {
                    Ss.status.active && S(e)
                }, 250)) : (Lt(), alert(t.msg)))
            }).fail(function() {
                za = !0, setTimeout(function() {
                    us = !1, S(e)
                }, 100)
            })
        }
    }

    function I(e, t) {
        var a = 2250 / Xa;
        return Cs = -12.25 + 22.5 * -e.wedge + 9 * Math.random() - 9 * Math.random() - Cs % 360 + 1080 + Cs, $(".bitspin #wheel").css("transform", "rotate(" + Cs + "deg)"), setTimeout(function() {
            t()
        }, a)
    }

    function q(e) {
        1 != e && us || ($(".keno-cell").removeClass("hit marked"), $(".bottom-half, .top-half").removeClass("marked"), Ls = 0, j())
    }

    function j() {
        if ("spot" == Os) var e = Bs.spot[As][Ls];
        else var e = Bs.tb[As];
        for (var t = 0; 11 > t; t++) {
            var a = St(e[t]);
            0 == a && (a = '<span style="opacity:0.4">--</span>'), $(".keno .ui-paytable [data-prize='" + t + "']").html(a)
        }
        $(".keno-marked").html(Ls), Es = [], $(".keno-cell.marked").each(function() {
            Es.push($(this).data("cell"))
        }), Ds = $(".hit-ball.marked").length, $(".keno-hit").html(Ds), $(".ui-paytable .row").removeClass("hit"), "spot" == Os ? $(".row[data-hits='" + Ds + "']").addClass("hit") : (7 >= Ds && $(".row[data-hits='" + Ds + "']").addClass("hit"), Ds >= 12 && $(".row[data-tbhits='" + Ds + "']").addClass("hit"));
        var s = m(e, "keno");
        $(".keno .max-bet").html(ua(s, 8, 10));
        var i = Math.max(Math.max.apply(Math, e), 1) * s;
        $(".keno .max-win").html(ua(i, 8, 10))
    }

    function P(e) {
        0 == $(".hit-ball").length && $(".keno-cell.hit").removeClass("hit");
        var t = "",
            a = "keno_draw";
        "spot" == Os ? -1 !== Es.indexOf(e) && (a = "keno_catch", t = " marked") : ("TOP" == Ls && 40 >= e && (a = "keno_catch", t = " marked"), "BOT" == Ls && e >= 41 && (a = "keno_catch", t = " marked")), $(".ui-hits").append("<div class='hit-ball" + t + "'>" + e + "</div>"), $(".keno-cell[data-cell='" + e + "']").addClass("hit"), 8 >= Xa && (sound.keno_draw.pause(), sound.keno_catch.pause(), sound.keno_draw.currentTime = 0, sound.keno_catch.currentTime = 0, sound[a].play()), j()
    }

    function B(e) {
        $(".keno-won").html(ua(e, 8, 12))
    }

    function O() {
        if (!us) {
            sound.keno_ui.pause(), sound.keno_ui.currentTime = 0, sound.keno_ui.play(), sound.jackpot.pause(), sound.jackpot.currentTime = 0, sound.low_jackpot.pause(), sound.low_jackpot.currentTime = 0, $(".keno-container").addClass("playing"), us = !0;
            var e = $(".keno-payline").val(),
                t = [];
            if (Js = Os, "spot" == Os) {
                if ($(".keno-cell.marked").each(function() {
                        t.push($(this).data("cell"))
                    }), Ks = t, 0 == $(".keno-cell.marked").length) return ca("You must mark at least 1 tile", "text", "Invalid Bet!", "OK"), $(".keno-container").removeClass("playing"), us = !1, void 0
            } else {
                if ("TOP" != Ls && "BOT" != Ls) return ca("You must mark the top or bottom half", "text", "Invalid Bet!", "OK"), $(".keno-container").removeClass("playing"), us = !1, void 0;
                t = Ls, Ks = Ls
            }
            bet = $("#keno_bet").val(), user_seed = $(".player-seed").val(), sub = {
                marked: JSON.stringify(t),
                paytable: e,
                mode: Os,
                token: Za,
                secret: es,
                bet: bet,
                user_seed: user_seed,
                currency: bs,
                act: "play_keno",
                v: ver
            }, $.post("action.php", sub, function(a) {
                a.success ? ($(".ui-hits").html(""), D(a.game_result, function() {
                    $(".keno-container").removeClass("playing"), us = !1, et(a.data, "html", a), _t(a.server_seed, a.server_hash, a.result, a.player_seed), A(a.game_result, Os, e, t);
                    var s = 1,
                        i = a.game_result;
                    "tokens" == bs && (s = 1e-8), xt(["all", "self"], ["keno", wa, bs, (i.total_bet * s).toFixed(8), 1, (i.win * s).toFixed(8), a.game_id, e, "self", xa, Ma, Os, t, a.game_result.hit_count, !1, 0]), setTimeout(function() {
                        Dt(a.game_result)
                    }, 150)
                })) : ($(".keno-container").removeClass("playing"), us = !1, "bet rate limit exceeded" == a.msg && Ss.status.active ? (za = !0, setTimeout(function() {
                    Ss.status.active && O()
                }, 250)) : (Lt(), alert(a.msg)))
            }).fail(function() {
                za = !0, setTimeout(function() {
                    $(".keno-container").removeClass("playing"), us = !1, O()
                }, 100)
            })
        }
    }

    function A(e, t, a, s) {
        for (var i = 0; 5 >= i; i++) sound.keno_win[i].currentTime = 0, sound.keno_win[i].pause();
        var n = s.length,
            o = e.hit_count,
            l = 0;
        if ("spot" == t) var r = Bs[t][a][n];
        if ("tb" == t) var r = Bs[t][a];
        "spot" == t ? l = r[o] : o >= 8 && 11 >= o ? l = 0 : (o >= 12 && (o = 20 - o), l = r[o]);
        var c = Math.max.apply(Math, r);
        l == c && l >= 2500 ? (sound.jackpot.play(), setTimeout(function() {
            sound.jackpot.pause(), sound.jackpot.currentTime = 0
        }, 12e3)) : l >= c / 4 && l >= 750 ? (sound.low_jackpot.play(), setTimeout(function() {
            sound.low_jackpot.pause(), sound.low_jackpot.currentTime = 0
        }, 9e3)) : l >= c / 25 && l >= 50 ? sound.keno_win[5].play() : l >= c / 100 && l >= 25 ? sound.keno_win[4].play() : l >= c / 400 && l >= 10 ? sound.keno_win[3].play() : l >= c / 3125 && l >= 4 ? sound.keno_win[2].play() : l >= c / 7500 && l >= 2 ? sound.keno_win[1].play() : l >= 1 && sound.keno_win[0].play()
    }

    function D(e, t) {
        var a = e.hits;
        if ($.each(a, function(t, a) {
                8 >= Xa ? (setTimeout(function() {
                    P(a)
                }, 180 * t / Xa), 0 == t && setTimeout(function() {
                    B(e.win)
                }, 3600 / Xa)) : (P(a), B(e.win))
            }), 8 >= Xa) var s = 3600 / Xa;
        else var s = 0;
        return setTimeout(function() {
            t()
        }, s)
    }

    function L(e) {
        if (!us && !$(document.body).hasClass("big-win")) {
            W(), us = !0;
            var t = {};
            t.main = $("#slot_bet").val(), t.lines = $("#slot_lines").val(), user_seed = $(".player-seed").val(), sub = {
                token: Za,
                secret: es,
                bet: t,
                user_seed: user_seed,
                currency: bs,
                act: "play_slot",
                v: ver,
                prizes: e
            }, 0 == t.lines && (t.lines = 1), $.post("action.php", sub, function(a) {
                a.success ? E(a.game_result, t.lines, bs, function() {
                    us = !1, et(a.data, "html", a), _t(a.server_seed, a.server_hash, a.result, a.player_seed), $(".game-reels").addClass("instant").removeClass("spin-animate"), K(0), sound.spin.pause(), sound.spin.currentTime = 0;
                    var s = 1,
                        i = a.game_result;
                    "tokens" == bs && (s = 1e-8);
                    var n = "purple";
                    "100,200,999,0,200,500,0,200,200,0,200,200,0,150,150,0,125,150,0,100,125,9,67,96" == e ? n = "red" : "64,99,999,50,150,500,40,100,200,25,80,175,20,50,150,15,35,120,12,25,100,10,20,75" == e ? n = "orange" : "3,9,99,100,200,500,100,200,200,90,180,200,2,4,8,2,4,8,2,4,8,2,4,8" == e ? n = "green" : "7,14,28,8,16,32,9,18,27,10,20,30,11,22,33,12,24,36,13,26,39,36,73,85" == e ? n = "teal" : "100,200,512,64,128,256,32,64,128,16,32,64,8,16,32,4,8,16,2,4,8,33,74,100" == e && (n = "blue"), xt(["all", "self"], ["slot", wa, bs, (i.total_bet / t.lines * s).toFixed(8), t.lines, (i.win * s).toFixed(8), a.game_id, n, "self", xa, Ma, null, null, null, !1, 0]), setTimeout(function() {
                        Dt(a.game_result)
                    }, 150)
                }) : (us = !1, "bet rate limit exceeded" == a.msg && Ss.status.active ? (za = !0, setTimeout(function() {
                    Ss.status.active && L(e)
                }, 250)) : (Lt(), alert(a.msg)))
            }).fail(function() {
                za = !0, setTimeout(function() {
                    us = !1, L(e)
                }, 100)
            })
        }
    }

    function E(e, t, a, s) {
        sound.spin.play();
        for (var i = !1, n = e.delay[4], o = e.delay, l = e.glow, r = (7.3 + 1.5 * n * (n / 5 + 1)) * (1e3 / Xa), c = [], d = 0; 5 > d; d++) c[d] = (4 + .825 * d + 1.5 * o[d] * (o[d] / 5 + 1)) * (1e3 / Xa);
        for (var d = 0; 5 > d; d++) 1 == l[d] ? J(d, c[d]) : K(c[d]);
        var u = r + 50;
        "tokens" == a && (e.line_bet *= 1e8, e.line_bet = Math.floor(e.line_bet));
        for (var d = 0; e.payout.length > d; d++)
            if (e.payout[d] > 0) {
                if ("tokens" != a) var p = ua(e.line_bet, 8, 9),
                    m = ua(e.payout[d], 8, 9);
                else var p = e.line_bet.toFixed(0),
                    m = e.payout[d].toFixed(0);
                var h = "Line " + (d + 1) + " Pays: " + Math.floor(e.payout[d] / e.line_bet) + " x " + p + " (" + m + ")";
                G(d, e.depth[d], h, u), u += 2150
            }
        "tokens" != a ? G(0, 0, "Total Win: " + ua(e.win, 8, 9), u) : G(0, 0, "Total Win: " + e.win.toFixed(0), u), $(".overlay-icon").each(function() {
            var t = $(this).data("x"),
                a = $(this).data("y"),
                s = (e.reels[t] + a) % 64,
                i = Ms[t][s],
                n = Rs[i];
            $(this).attr("data-icon", n)
        }), $(".game-reels").removeClass("instant").addClass("spin-animate");
        for (var d = 0; 5 > d; d++) $(".reel-" + d + " .win-reel").attr("data-position", e.reels[d]), $(".reel-" + d).attr("data-delay", e.delay[d]);
        if (e.win > 0) {
            var v = sound.win[0],
                f = Math.max.apply(Math, e.payout);
            e.win > e.total_bet && (v = sound.win[1]), e.win > 2.5 * e.total_bet && (v = sound.win[2]), e.win > 5 * e.total_bet && (v = sound.win[3]), "normal" == Ja ? (f > 200 * e.line_bet || e.win > 18 * e.total_bet && t >= 15 || e.win > 16 * e.total_bet && t >= 20) && (i = !0, v = sound.low_jackpot) : "high" == Ja && (f > 300 * e.line_bet || e.win > 27 * e.total_bet && t >= 15 || e.win > 24 * e.total_bet && t >= 20) && (i = !0, v = sound.low_jackpot), (f > 350 * e.line_bet || e.win > 27 * e.total_bet && t >= 15 || e.win > 24 * e.total_bet && t >= 20) && "off" != Ja && (v = sound.jackpot), H(v, r)
        }
        return i && U(e.win, r), setTimeout(function() {
            s()
        }, r + 50)
    }

    function U(e, t) {
        "tokens" == bs ? $(".bin-win-quantity").html(St(e, 0)) : $(".bin-win-quantity").html(ua(e, 8, 12)), setTimeout(function() {
            $(document.body).addClass("big-win")
        }, t), setTimeout(function() {
            $(document.body).removeClass("big-win"), sound.jackpot.pause(), sound.jackpot.currentTime = 0, sound.low_jackpot.pause(), sound.low_jackpot.currentTime = 0
        }, t + 15e3)
    }

    function H(e, t) {
        setTimeout(function() {
            e.play()
        }, t)
    }

    function K(e) {
        setTimeout(function() {
            $(".reels.overlay div").removeClass("glow")
        }, e)
    }

    function J(e, t) {
        setTimeout(function() {
            $(".overlay-" + e).addClass("glow"), 99 > Xa && sound.stop[e].play()
        }, t)
    }

    function Y(e, t, a, s) {
        Fs[Ns++] = setTimeout(function() {
            $("#icon_" + e + "_" + t).addClass("glow-icon"), $(".slot .win-container").html(a)
        }, s), V(e, t, s + 2100)
    }

    function G(e, t, a, s) {
        for (var i = 0; t > i;) {
            var n = Ts[e][i];
            Y(i, n, a, s), i++
        }
        0 == t && Y(-1, 0, a, s)
    }

    function V(e, t, a) {
        zs[Ns++] = setTimeout(function() {
            $("#icon_" + e + "_" + t).removeClass("glow-icon")
        }, a)
    }

    function W() {
        for (id in Fs) clearTimeout(Fs[id]), delete Fs[id];
        for (id in zs) clearTimeout(zs[id]), delete zs[id];
        for (x = 0; 5 > x; x++)
            for (y = 0; 3 > y; y++) $("#icon_" + x + "_" + y).removeClass("glow-icon")
    }

    function X() {
        $(".hkey").tooltip("hide"), $(".hkey:not(.hiding):not(.hiding *)").tooltip("show")
    }

    function Q(e) {
        jQuery(".captcha-move-container > .captcha-move-cont").detach().appendTo("." + e), $(".captcha-move-container").removeClass("captcha-move-container"), $("." + e).addClass("captcha-move-container")
    }

    function Z() {
        var e = $("#recaptcha_bonus_field").val(),
            t = $("#faucet-type").val(),
            a = grecaptcha.getResponse(),
            s = "#338833";
        $.post("/validate.php", {
            recaptcha_bonus_field: e,
            recaptcha_response_field: a,
            fp: fp,
            full_fp: full_fp,
            color: t
        }, function(e) {
            grecaptcha.reset(), e.success || (s = "#aa3333"), $("#captchaMessage").css("color", s).html(e.msg + "<div class='nudge'></div>").fadeOut(50, function() {
                $(this).fadeIn(50)
            }), et(e.data), e.success && $("#recaptcha_bonus_field").val("")
        })
    }

    function et(e, t, a) {
        if (void 0 !== e) {
            if (a["last-user-seed"] !== void 0 && null != a["last-user-seed"] && $(".player-seed").val(a["last-user-seed"]), e["current-user-seed"] !== void 0 && null != e["current-user-seed"] && $(".player-seed").val(e["current-user-seed"]), e["fee-warning"] !== void 0 && e["fee-warning"] === !0 ? $(".fee-warning-container").show() : e["fee-warning"] !== void 0 && $(".fee-warning-container").hide(), e["api-enabled"] !== void 0 && (e["api-enabled"] ? ($(".api").addClass("inactive"), $(".api[data-api='1']").removeClass("inactive")) : ($(".api").addClass("inactive"), $(".api[data-api='0']").removeClass("inactive"))), e["mystats-private"] !== void 0 && (e["mystats-private"] ? ($(".mystats").addClass("inactive"), $(".mystats[data-mystats='0']").removeClass("inactive")) : ($(".mystats").addClass("inactive"), $(".mystats[data-mystats='1']").removeClass("inactive"))), e["status-override"] !== void 0 && ($(".online-status").addClass("inactive"), $(".online-status[data-online-status='" + e["status-override"] + "']").removeClass("inactive")), e["accept-pm-setting"] !== void 0 && ($(".pm-setting").addClass("inactive"), $(".pm-setting[data-pm-setting='" + e["accept-pm-setting"] + "']").removeClass("inactive")), e["divest-lock"] !== void 0 && (e["divest-lock"].locked ? $(".investlock").html("Locked: " + e["divest-lock"].lock_str).prop("disabled", !0).removeClass("blue").addClass("red") : $(".investlock").html("Enable Lock").prop("disabled", !1).removeClass("red").addClass("blue")), e["self-type"] !== void 0) {
                Ca = e["self-type"];
                var i = "";
                "submod" == Ca && (i = "permission-submod"), ("mod" == Ca || "highmod" == Ca || "supermod" == Ca || "chiefmod" == Ca || "viceadmin" == Ca) && (i = "permission-submod permission-mod"), "admin" == Ca && (i = "permission-submod permission-mod permission-admin"), Gt(i)
            }
            if (e["self-rank"] !== void 0 && (xa = e["self-rank"]), e["self-bet-rank"] !== void 0 && (Ma = e["self-bet-rank"], $("[data-require-level]").each(function() {
                    var e = $(this).data("require-level"),
                        t = $(this).data("level-action");
                    Ma >= e ? "disable" == t && $(this).removeClass("disabled") : "disable" == t && $(this).addClass("disabled")
                })), e["self-quest-diff"] !== void 0 && (self_quest_diff = e["self-quest-diff"], $("[data-require-diff]").each(function() {
                    var e = $(this).data("require-diff");
                    self_quest_diff == e ? $(this).removeClass("hidden") : $(this).addClass("hidden")
                })), e["self-username"] !== void 0 && (wa = e["self-username"]), e.chatrooms !== void 0 && Kt(e.chatrooms), e.session_token !== void 0 && (Za = e.session_token), e.exchange_rates !== void 0 && (exchange_rate = e.exchange_rates, $("#exchange-tokens").change()), e.friend_list !== void 0) {
                var n = 0,
                    o = 0,
                    l = 0,
                    r = 0,
                    c = 0;
                pa(), $.each(e.friend_list, function(e, t) {
                    ma(t.state, t.username, t.status), "active" == t.status && (o++, n++), ("away" == t.status || "busy" == t.status) && n++, "away" == t.status && c++, "busy" == t.status && r++, "pending" == t.status && "incoming" == t.state && l++
                }), mt(l), $(".friend-online-count").html(n), $(".friend-away-count").html(c), $(".friend-busy-count").html(r), $(".friend-active-count").html(o)
            }
            if (!us || za) {
                if (a === void 0 && (a = {}), $.each(e, function(e, a) {
                        var s = $("." + e);
                        t !== void 0 || "html" == t ? s.html() != a && s.html(a) : s.val() != a && s.val(a)
                    }), e["global-invest-margin"] !== void 0) {
                    var d = {
                        bitcoins: 0,
                        ethers: 0,
                        litecoins: 0,
                        bcash: 0,
                        dogecoins: 0,
                        tokens: 20
                    };
                    if ($.each(["bitcoins", "ethers", "litecoins", "bcash", "dogecoins"], function(t, a) {
                            $.each(e["global-invest-margin"][a], function(e, t) {
                                qa[a][e] = parseFloat(t.replace(/,/g, "")), d[a] += qa[a][e]
                            }), d[a] /= 6, d[a] = ua(d[a], 8, 13), $(".average-bankroll-" + a).html(d[a])
                        }), "bitdrop" == ja)
                        for (var u = 0; 6 > u; u++) $(".bitdrop .max-bet." + hs[u]).html(ua(m(prize[hs[u]], "bitdrop"), 6, 6));
                    if ("bitspin" == ja)
                        for (var u = 0; 6 > u; u++) $(".bitspin .max-bet." + hs[u]).html(ua(m(prize_bitspin[hs[u]], "bitspin"), 6, 6));
                    if ("slot" == ja)
                        for (var u = 0; 6 > u; u++) $(".slot .max-bet." + hs[u]).html(ua(m(prize_slot[hs[u]], "slot"), 6, 6));
                    "dice" == ja && $(".dice .max-win").html(ua(m(1, "dice"), 8, 10)), "keno" == ja && j(), "roulette" == ja && ($(".inner_limit").html(ua(roulette.max_bet().inside, 6, 6)), $(".outer_limit").html(ua(roulette.max_bet().outside, 6, 6)))
                } else if (cs) {
                    if (cs = !1, "bitdrop" == ja)
                        for (var u = 0; 6 > u; u++) $(".bitdrop .max-bet." + hs[u]).html(ua(m(prize[hs[u]], "bitdrop"), 6, 6));
                    if ("bitspin" == ja)
                        for (var u = 0; 6 > u; u++) $(".bitspin .max-bet." + hs[u]).html(ua(m(prize_bitspin[hs[u]], "bitspin"), 6, 6));
                    if ("slot" == ja)
                        for (var u = 0; 6 > u; u++) $(".slot .max-bet." + hs[u]).html(ua(m(prize_slot[hs[u]], "slot"), 6, 6));
                    "dice" == ja && $(".dice .max-win").html(ua(m(1, "dice"), 8, 10)), "keno" == ja && j(), "roulette" == ja && ($(".inner_limit").html(ua(roulette.max_bet().inside, 6, 6)), $(".outer_limit").html(ua(roulette.max_bet().outside, 6, 6)))
                }(e["self-user-id"] > 0 && $(document.body).hasClass("logged-out") || a.tfa !== void 0) && (Tt(), $(document.body).removeClass("logged-out").addClass("logged-in"), $(".chat-2 .chat-container").html(""), $(".chat-3 .chat-container").html(""), $("#min-level").val(Ga), $("#min-bet").val(Va), $("#min-win").val(Wa), $("#volume").val(Qa).change(), $("#game-speed").val(Xa).change(), $s = -1, e.hash !== void 0 && "" != e.hash && $(".server-hash").val(e.hash), e.server_hash !== void 0 && "" != e.server_hash && $(".server-hash").val(e.server_hash), a.hash !== void 0 && "" != a.hash && $(".server-hash").val(a.hash), a.server_hash !== void 0 && "" != a.server_hash && $(".server-hash").val(a.server_hash), void 0 !== a.tfa && (lt(".tfa-qr", "otpauth://totp/" + e["self-username"] + "@bitvest?secret=" + a.tfa["tfa-key"]), $(".tfa-key-text").html(a.tfa["tfa-key"]), a.account !== void 0 && (lt(".address-qr", "bitcoin:" + a.account.address), lt(".address-qr-eth", "ethereum:" + a.account.address_eth), lt(".address-qr-ltc", "litecoin:" + a.account.address_ltc), lt(".address-qr-bch", "bitcoincash:" + a.account.address_bch), lt(".address-qr-doge", "dogecoin:" + a.account.address_doge), $(".deposit-address").html(a.account.address), $(".deposit-address-link").attr("href", "bitcoin:" + a.account.address), $(".deposit-address-eth").html(a.account.address_eth), $(".deposit-address-link-eth").attr("href", "ethereum:" + a.account.address_eth), $(".deposit-address-ltc").html(a.account.address_ltc), $(".deposit-address-link-ltc").attr("href", "litecoin:" + a.account.address_ltc), $(".deposit-address-bch").html(a.account.address_bch), $(".deposit-address-link-bch").attr("href", "bitcoincash:" + a.account.address_bch), $(".deposit-address-doge").html(a.account.address_doge), $(".deposit-address-link-doge").attr("href", "dogecoin:" + a.account.address_doge), $(".shapeshift-link").attr("href", "https://shapeshift.io/shifty.html?destination=" + a.account.address + "&output=BTC"), "full" == a.account.type && $(document.body).addClass("account-full").removeClass("account-temp"), a.account.secret !== void 0 && (es = a.account.secret, $(".secret-code").html(es))), a.tfa.enabled && $(document.body).addClass("tfa-enabled").removeClass("tfa-disabled"), a.tfa.enabled || $(document.body).addClass("tfa-disabled").removeClass("tfa-enabled")), e["self-user-id"] > 0 && $(".tab[data-tab='chat']").click()), e !== void 0 && e["deposit-address-eth"] !== void 0 && (lt(".address-qr-eth", "ethereum:" + e["deposit-address-eth"]), $(".deposit-address-eth").html(e["deposit-address-eth"]), $(".deposit-address-link-eth").attr("href", "ethereum:" + e["deposit-address-eth"])), a.tip !== void 0 && "undefined" !== a.tip.enabled && (a.tip.enabled && $(document.body).addClass("tip-enabled").removeClass("tip-disabled"), a.tip.enabled || $(document.body).addClass("tip-disabled").removeClass("tip-enabled")), s()
            }
            for (var u = 1; 5 >= u; u++) e["quest-" + u + "-complete"] !== void 0 && (e["quest-" + u + "-complete"] ? $(".quest-" + u).removeClass("incomplete").addClass("complete") : $(".quest-" + u).removeClass("complete").addClass("incomplete")), e["quest-" + u + "-expired"] !== void 0 && (e["quest-" + u + "-expired"] ? $(".quest-" + u).addClass("expired") : $(".quest-" + u).removeClass("expired"));
            if (e["quest-complete-count"] !== void 0 && $(".quest-badge").attr("data-progress", e["quest-complete-count"]), a.chat !== void 0 && (a.chat.msg !== void 0 && null != a.chat.msg && $.each(a.chat.msg, function(e, t) {
                    var a = !1,
                        s = "";
                    t.to !== void 0 && "" != t.to && null != t.to && (s = t.to.split(","), s = s.length > 1 && t.user.toLowerCase() != wa.toLowerCase() ? "From: " + t.user + ", To: " + s.join(", ").slice(0, -2) : s.length > 1 && t.user.toLowerCase() == wa.toLowerCase() ? "To: " + s.join(", ").slice(0, -2) : "From: " + t.user, a = {
                        pm: !0,
                        isread: t.isread
                    }), (t.user.toLowerCase() != wa.toLowerCase() && t.id > chat_id || 0 == $s) && nt(t.msg, t.user, t.admin, t.rank, t.id, a, !1, s, t.identity, t.room, t.bet_rank, t.notice), chat_id = Math.max(t.id, chat_id)
                }), a.chat.delete !== void 0 && null != a.chat.delete && $.each(a.chat.delete, function(e, t) {
                    $("#chat_" + t).remove()
                }), a.chat.max_id > 0 && (chat_id = a.chat.max_id)), (!us || Ss.status.active || za) && a.game !== void 0 && (game_id = a.game.max_id, a.game.data !== void 0 && null != a.game.data)) {
                var p = 0;
                $.each(a.game.data, function(e, t) {
                    if ((t.id > ls[t.game] || t.username == wa) && (0 == $s || t.username != wa)) {
                        var s = e * (ka / a.game.data.length);
                        rs && (s = parseInt(ka / 2)), p++, $s > 0 || t.username != wa ? (!rs || 3 >= p || t.username == wa) && $a.push([t.game, t.username, t.currency, t.bet, t.bits, t.won, t.id, t.color, t.owner, t.rank, t.bet_rank, t.target, t.roll, t.side]) : $a.push([t.game, t.username, t.currency, t.bet, t.bits, t.won, t.id, t.color, t.owner, t.rank, t.bet_rank, t.target, t.roll, t.side]), ls[t.game] = Math.max(ls[t.game], t.id)
                    }
                })
            }
            ha(), null == e["self-user-id"] && $(document.body).hasClass("logged-in") && $(document.body).removeClass("logged-in").addClass("logged-out"), a.invest !== void 0 && ($.each(a.invest.active, function(e, t) {
                ct(t.real, t.margin, t.commission, t.profit, t.start, t.id, t.coin)
            }), $.each(a.invest.complete, function(e, t) {
                dt(t.initial, t.final, t.commission, t.profit, t.start, t.end, t.coin)
            })), e.rows !== void 0 && $.each(e.rows, function(e, t) {
                M(e, t)
            }), za = !1
        }
    }

    function tt() {
        var e = new Date;
        e.getTime();
        var t = e.getTime();
        t >= Gs + ka && (at(), Gs = t)
    }

    function at() {
        if (!Vs) {
            if (ss) return setTimeout(function() {
                at()
            }, 25), void 0;
            Vs = !0, $s++, $.post("update.php", {
                m: os,
                c: chat_id,
                g: game_id,
                u: $s,
                k: ws,
                v: ver
            }, function(e) {
                if ("object" == typeof e) {
                    ka = parseInt(e.update_interval), et(e.data, "html", e);
                    var t = 0;
                    ta() > 120 && (t = .5), ta() > 900 && (t = 1), ta() > 3600 && (t = 2)
                }
                Vs = !1
            }).fail(function() {
                Vs = !1
            })
        }
    }

    function st(e, t) {
        var a = e.serializeArray();
        t !== void 0 && a.push(t);
        var s;
        if (e.data("hascaptcha") && a.push({
                name: "recaptcha_response_field",
                value: grecaptcha.getResponse()
            }), a.push({
                name: "token",
                value: Za
            }), a.push({
                name: "c",
                value: chat_id
            }), 1 == e.data("fp") && (a.push({
                name: "fp",
                value: fp
            }), a.push({
                name: "full_fp",
                value: full_fp
            })), 1 == e.data("req_confirm") && !confirm(e.data("confirm_question"), function() {
                return !0
            })) return !1;
        if ("" != es && a.push({
                name: "secret",
                value: es
            }), 1 == e.data("chat")) {
            a.push({
                name: "fp",
                value: fp
            });
            var i = e.find(".chat-message-box").val();
            if ("" == i) return alert("Message cannot be blank"), void 0;
            if ("/" == i.charAt(0) || "-" == i.charAt(0)) {
                var n = e.find(".chat-message-box").val();
                if (n = n.substr(1, n.length - 1), n = n.split(" "), "pm" == n[0] || "to" == n[0] || "w" == n[0] || "msg" == n[0]) {
                    if (n[2] !== void 0) {
                        i = n.slice(2, n.length).join(" ");
                        var o = n[1].split(",").join(", ");
                        n.splice(2, n.length - 2), s = nt(i, wa, void 0, void 0, void 0, {
                            pm: !0,
                            isread: !0
                        }, !0, "To: " + o)
                    }
                } else n.splice(1, n.length - 1);
                e.find(".chat-message-box").val("/" + n.join(" ") + " ")
            } else s = nt(i, wa), e.find(".chat-message-box").val("")
        }
        $.post(e.prop("action"), $.param(a), function(t) {
            if (ws = Math.random().toString(32).substring(7), t["self-type"] !== void 0) {
                Ca = t["self-type"];
                var a = "";
                "submod" == Ca && (a = "permission-submod"), ("mod" == Ca || "highmod" == Ca || "supermod" == Ca || "chiefmod" == Ca || "viceadmin" == Ca) && (a = "permission-submod permission-mod"), "admin" == Ca && (a = "permission-submod permission-mod permission-admin"), Gt(a)
            }
            if (t["self-bet-rank"] !== void 0 && (Ma = t["self-bet-rank"]), 1 == e.data("key") && rt(t.api.key, t.api.secret), "action.php" == e.prop("action") && "withdraw" == e.find('input[name="act"]').val() && Tt(), -1 == t.success && ($(document.body).addClass("tfa-enabled").removeClass("tfa-disabled"), e.find('input[name="tfa"]').focus()), t["login-captcha-required"] !== void 0 && 1 == t["login-captcha-required"] ? (Q("login-captcha"), $("#newCaptcha").click(), $("#recaptcha_response_field").focus()) : Q("faucet-captcha"), t.data !== void 0 && et(t.data, "html", t), e.find(".return").html(t.msg).addClass(t.success ? "success" : "error").removeClass(t.success ? "error" : "success").fadeOut(50).fadeIn(50), t.success || 0 != e.find(".return").length || (Array.isArray(t.msg) ? ca(t.msg[0], "html", t.msg[1], t.msg[2], t.msg[3]) : ca(t.msg)), t.success && -1 != t.success && e.find('input[type="password"]').val(""), 1 == e.data("chat")) {
                if (!t.success) return $("#chat_" + s).remove(), void 0;
                $(".inline-mod[data-id='" + s + "']").attr("data-id", t.id), $("#chat_" + s).attr("id", "chat_" + t.id)
            }
            return !1
        })
    }

    function it(e) {
        return e.replace(/[^a-zA-Z0-9 ,.\/<>?;:\"'`!@#$%\^\&\*\(\)\[\]\{\}_+=|\\\-~]/, "")
    }

    function nt(e, t, a, s, i, n, o, l, r, c, d, u) {
        $(".msg:nth-last-child(200)").remove();
        var p = "",
            m = "",
            h = "";
        n === void 0 && (n = {
            pm: !1,
            isread: !0
        }), t == wa && (p = "", Ma > 0 && (p = 'data-level="' + Ma + '" ')), d !== void 0 && d > 0 && (p = 'data-level="' + d + '" '), i === void 0 && (i = Math.random().toString(36).substr(2, 7)), u === void 0 && (u = !1), 1 != $(".active[data-tab='chat']").length || "all" != Ka && !Sa ? (!n.pm && $s > 0 && vs++, !n.isread && n.pm && (fs++, Na || (Na = !0, $(".chat-3 .chat-container").append("<div class='infobox unread-notice'>New Messages</div>")))) : (fs = 0, !n.isread && n.pm && ("undefined" != typeof pm_mark && clearTimeout(pm_mark), pm_mark = setTimeout(function() {
            $.post("read_pms.php")
        }, 250))), 1 == $(".active[data-tab='chat']").length && (vs = 0), pt(vs), ht(fs), c === void 0 && (c = Ta);
        var v = $(".chat-" + c + " .chat-container"),
            f = !0;
        n !== void 0 && !n && $s > 0 && $(".channel[data-channel='" + c + "']").addClass("unread");
        var b = "",
            g = "";
        if (t == wa && (b = "self"), t == wa && "submod" == Ca && (b = "submod"), t == wa && "superuser" == Ca && (b = "superuser"), t == wa && "mod" == Ca && (b = "mod"), t == wa && "highmod" == Ca && (b = "highmod"), t == wa && "supermod" == Ca && (b = "supermod"), t == wa && "chiefmod" == Ca && (b = "chiefmod"), t == wa && "viceadmin" == Ca && (b = "viceadmin"), t == wa && "admin" == Ca && (b = "admin"), "admin" == Ca || "mod" == Ca || "highmod" == Ca || "supermod" == Ca || "chiefmod" == Ca || "viceadmin" == Ca) {
            if ("undefined" != r && "" != r && null != r) var _ = ["#" + r.substr(0, 6), "#" + r.substr(6, 6), "#" + r.substr(12, 6), "#" + r.substr(18, 6)];
            else _ = ["#ffffff", "#ffffff", "#ffffff", "#ffffff"];
            for (var k = "", y = 0; 4 > y; y++) k += '<div class="ip-badge" style="background:' + _[y] + '"></div>';
            g = '<div class="permission-mod"><div class="badges">' + k + '</div><div class="inline-mod" data-id="' + i + '"><b data-act="del_chat" class="rate-button delete"></b><b data-act="minus_chat" class="rate-button minus"></b><b data-act="plus_chat" class="rate-button plus"></b></div></div>'
        }
        s !== void 0 && (1 == s && (b = "superuser"), 2 == s && (b = "submod"), 3 == s && (b = "mod"), 4 == s && (b = "highmod"), 5 == s && (b = "supermod"), 6 == s && (b = "chiefmod"), 7 == s && (b = "viceadmin"), 8 == s && (b = "admin")), a !== void 0 && a && (b = "admin"), n !== void 0 && n.pm && (b += " pm", v = "all" == Ka ? $(".chat-container") : $(".chat-3 .chat-container"), 0 == $s && (v = $(".chat-3 .chat-container")), m = "<span class='pm-body'>", h = "</span>", Bt(l, e));
        var w = t;
        return e = it(ot(ut(e))), u && (e = "<b class='" + b + " no-flag'>" + e + "<b>"), o !== void 0 && o && (b += " self"), $(v).prop("scrollHeight") - $(v).height() - $(v).scrollTop() > 22 && (f = !1), l !== void 0 && "" != l && (t = l), $(v).append("<div id='chat_" + i + "' class='msg'>" + g + "<a href='#user," + ut(w) + "'><b " + p + "data-name='" + ut(w) + "' class='" + b + "'>" + ut(t) + ":</b></a> " + m + e + h + "</div>"), f && $(v).scrollTop(999999), i
    }

    function ot(e) {
        var t = {
            "game:": "plinko",
            "plinko:": "plinko",
            "bitdrop:": "plinko",
            "roulette:": "roulette",
            "roul:": "roulette",
            "dice:": "dice",
            "keno:": "keno",
            "bitspin:": "bitspin",
            "wheel:": "bitspin",
            "slot:": "slot"
        };
        for (var a in t) {
            var s = e.toLowerCase().indexOf(a),
                i = a.length,
                n = /[^0-9,]/.exec(e.substring(s + i, e.length).toLowerCase());
            null == n && (n = {
                index: e.substring(s + i, e.length).length
            }), -1 != s && (e = e.substring(0, s) + '<a href="#result,' + t[a] + "," + e.substr(s + i, n.index) + '">' + a + e.substr(s + i, n.index) + "</a>" + e.substring(n.index + s + i, e.length))
        }
        return e
    }

    function lt(e, t) {
        var a = $(e).data("size");
        "" != t ? $(e).attr("src", "//chart.googleapis.com//chart?cht=qr&chs=" + a + "x" + a + "&chl=" + t + "&chld=H|0") : $(e).removeAttr("src")
    }

    function rt(e, t) {
        $(".active-keys").append("<tr><td>" + e + "<div data-toggle='tooltip' title='This will be hidden when you leave the page'>Secret: <small>" + t + "</small></div><td><form action='action.php'><input type='hidden' name='r_key' value='" + e + "'><input type='hidden' name='act' value='remove_key'><button class='red remove-key submit' data-key='" + e + "'><i class='icon-x'></i></button></form>"), $('[data-toggle="tooltip"]').each(function() {
            $(this).tooltip({
                container: "body",
                html: !0,
                title: $(this).attr("tooltip-title"),
                "data-original-title": $(this).attr("tooltip-title")
            }).tooltip("fixTitle")
        })
    }

    function ct(e, t, a, s, i, n, o) {
        o === void 0 && (o = "BTC"), $(".active-investment-container").prepend("<tr data-id='" + n + "' id='invest_" + n + "'><td><span class='name'>Real Value:</span><span class='value'><span class='invest_" + n + "_real'>" + ua(parseFloat(e), 8, 12) + "</span> <span class='invest_" + n + "_coin'></span></span><br><div style='height:41px'><span class='name'>Margins:</span><span class='value'><span class='invest_" + n + "_current'>" + "Plinko " + t.plinko + ", Dice " + t.dice + "</span><br>" + "Slot " + t.slot + ", Roulette " + t.roulette + "<br>Bitspin " + t.bitspin + ", Keno " + t.keno + "</span></div></span><br><span class='name'>Commission:</span><span class='value'><span class='invest_" + n + "_commission'>" + ua(parseFloat(a), 8, 12) + "</span> <span class='invest_" + n + "_coin'></span></span><br><span class='name'>Profit:</span><span class='value'><span class='invest_" + n + "_profit'>" + ua(parseFloat(s), 8, 12) + "</span> <span class='invest_" + n + "_coin'></span></span><br><span class='name'>Started:</span><span class='value'>" + i + "</span>&nbsp;<td><div class='divest-container' data-divest-id='" + n + "'><button style='position:relative;top:54px;' class='side-button blue divest-action'>Divest</button></div>")
    }

    function dt(e, t, a, s, i, n, o) {
        o === void 0 && (o = "BTC"), $(".complete-investment-container").prepend("<tr><td><span class='name'>Initial Value:</span><span class='value'>" + ua(parseFloat(e), 8, 12) + " " + o + "</span><br><span class='name'>Final Value:</span><span class='value'>" + ua(parseFloat(t), 8, 12) + " " + o + "</span><br><span class='name'>Commission:</span><span class='value'>" + ua(parseFloat(a), 8, 12) + " " + o + "</span><br><span class='name'>Profit:</span><span class='value'>" + ua(parseFloat(s), 8, 12) + " " + o + "</span><br><span class='name'>Started:</span><span class='value'>" + i + "</span><br><span class='name'>Ended:</span><span class='value'>" + n + "</span>&nbsp;")
    }

    function ut(e) {
        return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }

    function pt(e) {
        $(".tab.active[data-tab='chat']").length > 0 && (e = 0), e > 99 && (e = 99), 0 == e ? $("#chat-count").html("") : $("#chat-count").html("(" + e + ")")
    }

    function mt(e) {
        e > 99 && (e = 99), 0 == e ? $(".friend-pending-count").html("") : $(".friend-pending-count").html("[+" + e + "]")
    }

    function ht(e) {
        $(".tab.active[data-tab='chat']").length > 0 && e > 0 && ("all" == Ka || Sa) && (e = 0), e > 99 && (e = 99), 0 == e ? ($("#pm-count").html(""), $(".unread_pm").removeClass("unread_pm")) : ($("#pm-count").html("[" + e + "]"), $("[data-tab='chat']").addClass("unread_pm"), $("[data-channel='3']").addClass("unread"))
    }

    function vt(e) {
        $(".tab[data-tab='funding']").click(), window.location.href = "#tip-section", $("#tip-username").val(ut(e)), $("#tip-quantity").focus(), $("#tip_rainbot").prop("checked", !1), "rainbot" == e.toLowerCase() && ($("#tip-username").val(""), $("#tip_rainbot").prop("checked", !0)), window.location.hash = ""
    }

    function ft(e, t) {
        $(".result-preview").addClass("visible"), $(".user-preview").removeClass("visible");
        var a = "results?query=" + t + "&game=" + e;
        $(".game-result-link").attr("href", a), $.post("fetch_result.php", {
            game: e,
            id: t
        }, function(e) {
            $.each(e, function(e, t) {
                $("." + e).html(t)
            })
        })
    }

    function $t(e) {
        e = ut(e), $(".user-preview").addClass("visible"), $(".result-preview").removeClass("visible"), $(".user-pm-link").attr("href", "#pm_to," + e), $.post("fetch_user.php", {
            user: e
        }, function(e) {
            $.each(e, function(e, t) {
                $("." + e).html(t), "user-super" == e ? t ? $(".user-name").addClass("superuser") : $(".user-name").removeClass("superuser") : "user-level" == e && $(".user-name").attr("data-level", t)
            }), $(".user-name").hasClass("superuser") || $(".user-name").attr("data-level", null)
        })
    }

    function bt(e) {
        e = ut(e), $(".user-preview, .result-preview").removeClass("visible"), $(".chat-" + Ta + " .chat-input input[name='message']").val("/pm " + e + " ").focus()
    }

    function gt(e, t) {
        if (!us) {
            us = !0;
            var a = "" + prize[e],
                s = $("#bet").val(),
                i = $("#bits").val(),
                n = $(".player-seed").val(),
                o = {
                    prizes: a,
                    token: Za,
                    secret: es,
                    bet: s,
                    bits: i,
                    user_seed: n,
                    currency: bs,
                    act: "play",
                    v: ver
                };
            0 == i && (i = 1), $.post("action.php", o, function(a) {
                a.success ? g(a.game_result, t, function() {
                    us = !1, et(a.data, "html", a), _t(a.server_seed, a.server_hash, a.result, a.player_seed), C("#ball_0", !0, 0);
                    var e = 1,
                        s = a.game_result;
                    "tokens" == bs && (e = 1e-8);
                    var n = "red";
                    1 == t ? n = "orange" : 2 == t ? n = "green" : 3 == t ? n = "teal" : 4 == t ? n = "blue" : 5 == t && (n = "purple"), xt(["all", "self"], ["plinko", wa, bs, (s.total_bet / i * e).toFixed(8), i, (na(s.win) * e).toFixed(8), a.game_id, n, "self", xa, Ma, null, null, null, !1, 0]), setTimeout(function() {
                        Dt(a.game_result)
                    }, 150)
                }) : (us = !1, "bet rate limit exceeded" == a.msg && Ss.status.active ? (za = !0, setTimeout(function() {
                    Ss.status.active && gt(e, t)
                }, 250)) : (Lt(), alert(a.msg)))
            }).fail(function() {
                za = !0, setTimeout(function() {
                    us = !1, gt(e, t)
                }, 100)
            })
        }
    }

    function _t(e, t, a, s) {
        $(".last-player-seed").val(s), $(".last-server-hash").val($(".server-hash").val()), $(".last-game-result").val(a), $(".server-hash").val(t)
    }

    function kt(e) {
        $(".server-hash").val(e)
    }

    function yt(e, t) {
        setTimeout(function() {
            $(".balance").html(e.toFixed(8))
        }, t)
    }

    function wt(e, t, a, s) {
        var i = "positive";
        return 0 > e && (i = "negative"), 0 == e && (i = "neutral"), a !== void 0 && (i = i + " " + a), s === void 0 && (s = !1), s ? "<span class='" + i + "'>" + St(e, t) + "</span>" : "<span class='" + i + "'>" + ua(e, t, t + 3) + "</span>"
    }

    function Ct() {
        var e = parseFloat($("#invest-quantity").val()),
            t = parseFloat($("#invest-multiplier").val());
        (isNaN(t) || "" == t || 0 == t) && (t = 1), (isNaN(e) || "" == e || 0 == e) && (e = 0), .25 > t && (t = .25), t > 5 && (t = 5), 0 > e && (e = 0), e > 1e3 && (e = 1e3)
    }

    function xt(e, t) {
        Mt.apply(null, t), e.forEach(function(e) {
            result_store[e].push(t), result_store[e].length >= 380 && result_store[e].shift()
        })
    }

    function Mt(e, t, a, s, i, n, o, l, r, c, d, u, p, m, h, v) {
        if (Ia++, (a === void 0 || "tokens" == a.toLowerCase() || "tok" == a.toLowerCase()) && (a = "btc"), a = a.toLowerCase(), ("ether" == a || "ethers" == a) && (a = "eth"), ("litecoin" == a || "litecoins" == a) && (a = "ltc"), ("bitcoin" == a || "bitcoins" == a) && (a = "btc"), ("dogecoin" == a || "dogecoins" == a) && (a = "doge"), ("bcash" == a || "bitcoin cash" == a) && (a = "bch"), h && (r += " self_only "), "all" == fa || -1 !== r.indexOf(fa)) {
            t == wa && (ba = {
                cur: a.toUpperCase(),
                won: n,
                bet: s,
                game: e,
                game_name: e.substr(0, 1).toUpperCase() + e.substr(1),
                id: o
            });
            var f = s,
                b = n;
            if ("btc" != a && (f /= exchange_rate[a.toUpperCase()], b /= exchange_rate[a.toUpperCase()]), f >= Va || f * i >= Va || Wa > 0 && b >= Wa || Ga > 0 && d + 1 >= Ga || "self" == fa) {
                v === void 0 && (v = 0);
                var g = function() {
                    var h = "user";
                    1 == c && (h = "superuser"), 2 == c && (h = "submod"), 3 == c && (h = "mod"), 4 == c && (h = "highmod"), 5 == c && (h = "supermod"), 6 == c && (h = "chiefmod"), 7 == c && (h = "viceadmin"), 8 == c && (h = "admin");
                    var v = "";
                    d > 0 && (v = ' data-level="' + d + '" '), $(".result-row:nth-child(n+38)").remove();
                    var f = "odd";
                    if (0 == Ia % 2 && (f = "even"), "plinko" == e && $("#results-container").prepend("<div class='" + f + " result-row " + r + "'><div class='result-cell'><div class='flag-container'><div class='row " + r + "'></div><div class='row " + l + "'></div></div><i class='cur-" + a + "'></i><a class='game_id' href='#result," + ut(e) + "," + o + "'>" + St(o) + "</a></div><div class='result-cell'><b " + v + " class='" + h + "'><a href='#user," + ut(t) + "'>" + ut(t) + "</a></b></div><div class='result-cell'>" + ua(s) + " x " + i + "</div><div class='result-cell'>" + ua(i * s) + "</div><div class='result-cell'>" + ua(n) + "</div><div class='result-cell'>" + wt(n - s * i, 8, "bold") + "</div></div>"), "slot" == e && $("#results-container").prepend("<div class='" + f + " result-row " + r + "'><div class='result-cell'><div class='flag-container'><div class='row " + r + "'></div><div class='row slot-icon " + l + "'></div></div><i class='cur-" + a + "'></i><a class='game_id' href='#result," + ut(e) + "," + o + "'>" + St(o) + "</a></div><div class='result-cell'><b " + v + " class='" + h + "'><a href='#user," + ut(t) + "'>" + ut(t) + "</a></b></div><div class='result-cell'>" + ua(s) + " x " + i + "</div><div class='result-cell'>" + ua(i * s) + "</div><div class='result-cell'>" + ua(n) + "</div><div class='result-cell'>" + wt(n - s * i, 8, "bold") + "</div></div>"), "roulette" == e && $("#results-container").prepend("<div class='" + f + " result-row " + r + "'><div class='result-cell'><div class='flag-container'><div class='row " + r + "'></div><div class='row " + l + "'></div></div><i class='cur-" + a + "'></i><a class='game_id' href='#result," + ut(e) + "," + o + "'>" + St(o) + "</a></div><div class='result-cell'><b " + v + " class='" + h + "'><a href='#user," + ut(t) + "'>" + ut(t) + "</a></b></div><div class='result-cell'>" + ua(s) + "</div><div class='result-cell'>" + ua(s) + "</div><div class='result-cell'>" + ua(n) + "</div><div class='result-cell'>" + wt(n - s, 8, "bold") + "</div></div>"), "bitspin" == e && $("#results-container").prepend("<div class='" + f + " result-row " + r + "'><div class='result-cell'><div class='flag-container'><div class='row " + r + "'></div><div class='row bs-icon " + l + "'></div></div><i class='cur-" + a + "'></i><a class='game_id' href='#result," + ut(e) + "," + o + "'>" + St(o) + "</a></div><div class='result-cell'><b " + v + " class='" + h + "'><a href='#user," + ut(t) + "'>" + ut(t) + "</a></b></div><div class='result-cell'>" + ua(s) + "</div><div class='result-cell'>" + ua(s) + "</div><div class='result-cell'>" + ua(n) + "</div><div class='result-cell'>" + wt(n - s, 8, "bold") + "</div></div>"), "dice" == e) {
                        var b = "negative";
                        n == s && (b = "neutral"), n > 0 && (b = "positive");
                        var g = p.split("."),
                            _ = g[0] + ".<u>" + g[1].substr(0, 2) + "</u><u>" + g[1].substr(2, 2) + "</u>";
                        g = u.split(".");
                        var k = g[0] + ".<u>" + g[1].substr(0, 2) + "</u><u>" + g[1].substr(2, 2) + "</u>",
                            y = "&le;";
                        "high" == m && (y = "&ge;"), bet_display = " <span class='" + b + " bold'><span class='roll-display'>" + _ + "</span> " + y + " <span class='roll-display'>" + k + "</span></span>", $("#results-container").prepend("<div class='" + f + " result-row " + r + "'><div class='result-cell'><div class='flag-container'><div class='row " + r + "'></div><div class='row dice " + l + "'></div></div><i class='cur-" + a + "'></i><a class='game_id' href='#result," + ut(e) + "," + o + "'>" + St(o) + "</a></div><div class='result-cell'><b " + v + " class='" + h + "'><a href='#user," + ut(t) + "'>" + ut(t) + "</a></b></div><div class='result-cell'>" + bet_display + "</div><div class='result-cell'>" + ua(s) + "</div><div class='result-cell'>" + ua(n) + "</div><div class='result-cell'>" + wt(n - s, 8, "bold") + "</div></div>")
                    }
                    if ("keno" == e) {
                        var b = "negative";
                        n > 0 && (b = "positive"), n == s && (b = "neutral");
                        var _ = "X Marked",
                            w = m;
                        "spot" == u ? marked = " / " + p.length : ("TOP" == p && (_ = "<i class='icon-down keno-up'></i>"), "BOT" == p && (_ = "<i class='icon-down keno-down'></i>"), marked = " / 20" + _);
                        var C = "Hit: " + w + marked;
                        bet_display = " <span class='" + b + " bold'>" + C + "</span>", $("#results-container").prepend("<div class='" + f + " result-row " + r + "'><div class='result-cell'><div class='flag-container'><div class='row " + r + "'></div><div class='row keno " + l + "'></div></div><i class='cur-" + a + "'></i><a class='game_id' href='#result," + ut(e) + "," + o + "'>" + St(o) + "</a></div><div class='result-cell'><b " + v + " class='" + h + "'><a href='#user," + ut(t) + "'>" + ut(t) + "</a></b></div><div class='result-cell'>" + bet_display + "</div><div class='result-cell'>" + ua(s) + "</div><div class='result-cell'>" + ua(n) + "</div><div class='result-cell'>" + wt(n - s, 8, "bold") + "</div></div>")
                    }
                };
                v >= 0 ? setTimeout(g, v) : g()
            }
        }
    }

    function Tt() {
        $.post("tx_hist.php", function(e) {
            $("#tx_hist_container").html(e)
        })
    }

    function Rt(e) {
        var t = $(e).find(".user_seed").val(),
            a = $(e).find(".server_seed").val(),
            s = $(e).find(".result").val(),
            i = 0;
        if ("plinko" == proof_game)
            for (var n = $(e).data("bits"), o = $(e).data("id"), l = zt(s, n), r = 0; 17 > r; r++) {
                $("#hits_" + o + " span:nth-child(" + (r + 2) + ")").html(l[r] > 0 ? l[r] : "&nbsp;");
                var c = parseFloat($("#prizes_" + o + " span:nth-child(" + (r + 2) + ")").html());
                $("#payout_" + o + " span:nth-child(" + (r + 2) + ")").html(l[r] > 0 && c > 0 ? Nt((l[r] * c).toFixed(3)) : "&nbsp;")
            } else if ("roulette" == proof_game) {
                var d = $(e).find(".game_id").val(),
                    r = 0,
                    u = "";
                if (2862741 > d)
                    for (; i > 221 || 0 == r;) u = s.substr(1 * r, 2), i = parseInt(u, 16), r++;
                else
                    for (; i > 221 || 0 == r;) u = s.substr(2 * r, 2), i = parseInt(u, 16), r++;
                i %= 37
            } else if ("bitspin" == proof_game) {
            var p = s.substr(0, 1);
            i = parseInt(p, 16) + 1
        } else if ("slot" == proof_game)
            for (var m = [], r = 0; 5 > r; r++) m[r] = parseInt(s.substr(2 * r, 2), 16) % 64;
        else if ("dice" == proof_game) {
            for (var r = 0, h = 9999999; h > 999999 || 0 == r;) h = parseInt(s.substr(5 * r, 5), 16), r++;
            h /= 1e4, h = h.toFixed(4)
        } else if ("keno" == proof_game)
            for (var r = 0, v = []; 20 > v.length;) {
                var f = parseInt(s.substr(2 * r, 2), 16);
                240 > f && (f = f % 80 + 1, -1 === $.inArray(f, v) && v.push(f)), r++
            }
        var b = $(e).find(".proof_version").val(),
            g = $(e).find(".server_seed_type").val();
        if (1 == b && "" + CryptoJS.SHA512(a + "|" + t) == s || 2 == b && "" + CryptoJS.HmacSHA512(a, t) == s || 2 == b && "hash" == g) {
            var _ = "Valid Proof";
            "hash" == g && (_ = "Request new server seed to validate"), "plinko" == proof_game ? $(e).find(".validation_result").val(_ + "!") : "roulette" == proof_game ? $(e).find(".validation_result").val(_ + " - Expected result: " + i) : "bitspin" == proof_game ? $(e).find(".validation_result").val(_ + " - Expected result: Wedge #" + i) : "slot" == proof_game ? $(e).find(".validation_result").val(_ + " - Stop positions: " + ("" + m)) : "dice" == proof_game ? $(e).find(".validation_result").val(_ + " - Expected Roll: " + h) : "keno" == proof_game && $(e).find(".validation_result").val(_ + " - Expected Hits: " + ("" + v))
        } else $(e).find(".validation_result").val("Invalid Proof!")
    }

    function Ft(e) {
        for (var t = [], a = 0; 32 > a; a++) t[a] = parseInt((e + "").substr(4 * a, 4), 16).toString(2);
        return t
    }

    function zt(e, t) {
        for (var a = Ft(e), s = [], i = 0; 17 > i; i++) s[i] = 0;
        for (i = 0; t > i; i++) {
            var n = a[i].split("1").length - 1;
            s[n] += 1
        }
        return s
    }

    function Nt(e) {
        return e.replace(/^0/, "").replace(/0+$/, "").replace(/\.$/, "")
    }

    function St(e, t, a, s) {
        e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
        var i = isFinite(+e) ? +e : 0,
            n = isFinite(+t) ? Math.abs(t) : 0,
            o = s === void 0 ? "," : s,
            l = a === void 0 ? "." : a,
            r = "",
            c = function(e, t) {
                var a = Math.pow(10, t);
                return "" + (Math.round(e * a) / a).toFixed(t)
            };
        return r = (n ? c(i, n) : "" + Math.round(i)).split("."), r[0].length > 3 && (r[0] = r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, o)), n > (r[1] || "").length && (r[1] = r[1] || "", r[1] += Array(n - r[1].length + 1).join("0")), r.join(l)
    }

    function It() {
        var e = new Uint32Array(16);
        if (window.crypto !== void 0 && "function" == typeof window.crypto.getRandomValues) {
            window.crypto.getRandomValues(e);
            for (var t = "", a = 0; e.length > a; a++) t += e[a] + "-" + "";
            return "" + CryptoJS.SHA256(t)
        }
        return "" + CryptoJS.SHA256(Math.random() + "")
    }

    function qt() {
        for (var e = 0; 3 >= e; e++) sound.win[e].volume = Qa / 100;
        for (var e = 0; 4 >= e; e++) sound.stop[e].volume = Qa / 100;
        for (var e = 0; 5 >= e; e++) sound.keno_win[e].volume = Qa / 100;
        sound.jackpot.volume = Qa / 100, sound.low_jackpot.volume = Qa / 100, sound.spin.volume = Qa / 100, sound.keno_catch.volume = Qa / 100, sound.keno_draw.volume = Qa / 100, sound.keno_ui.volume = Qa / 100
    }

    function jt() {
        var e = document.styleSheets[0];
        e.addRule ? (e.addRule(".bitdrop .ball", "transition: transform linear " + .15 / Xa + "s, opacity linear " + .175 / Xa + "s"), e.addRule(".bitdrop .ball.slow", "transition: transform linear " + .4 / Xa + "s, opacity linear " + .175 / Xa + "s"), e.addRule(".game.roulette .ui .right .ball", "transition: transform ease-out " + 5 / Xa + "s"), e.addRule(".game.roulette .ui .right .ball.stopping", "transition: transform ease-out " + 1.3 / Xa + "s"), e.addRule(".game.roulette .ui .right:not(.spinning) .ball", "transition:top " + .75 / Xa + "s ease-out, left " + .75 / Xa + "s ease-out"), e.addRule(".game.roulette .ui .right:not(.spinning) .ball .img", "transition:left " + .3 / Xa + "s ease-out " + .45 / Xa + "s !important"), e.addRule(".game.roulette .ui .right", "transition: width " + .75 / Xa + "s ease-in-out, height " + .75 / Xa + "s ease-in-out, background-size " + .75 / Xa + "s ease-in-out, bottom " + .75 / Xa + "s ease-in-out, right " + .75 / Xa + "s ease-in-out"), e.addRule(".game.roulette .ui .right .wheel", "transition: width " + .75 / Xa + "s ease-in-out, height " + .75 / Xa + "s ease-in-out, background-size " + .75 / Xa + "s ease-in-out, bottom " + .75 / Xa + "s ease-in-out, right " + .75 / Xa + "s ease-in-out"), e.addRule(".game.roulette .ui .right .wheel .inner", "transition:transform " + 8 / Xa + "s cubic-bezier(0.39, 0.07, 0.15, 1), transform-origin " + .75 / Xa + "s ease-in-out, width " + .75 / Xa + "s ease-in-out, height " + .75 / Xa + "s ease-in-out, background-size " + .75 / Xa + "s ease-in-out, bottom " + .75 / Xa + "s ease-in-out, right " + .75 / Xa + "s ease-in-out"), e.addRule(".bitspin #wheel", "transition: transform " + 2.25 / Xa + "s cubic-bezier(0.255, -0.175, 0.000, 1.000)"), e.addRule(".slot .slot-container .reels .win-reel.delay", "transition: background-position 0s linear " + 1 / Xa + "s"), e.addRule(".slot .slot-container .reels .reel-0", "transition: transform " + 4 / Xa + "s ease-out " + 0 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='1']", "transition: transform " + 5.8 / Xa + "s ease-out " + 0 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='2']", "transition: transform " + 8.2 / Xa + "s ease-out " + 0 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='3']", "transition: transform " + 11.2 / Xa + "s ease-out " + 0 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='4']", "transition: transform " + 14.8 / Xa + "s ease-out " + 0 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='5']", "transition: transform " + 19 / Xa + "s ease-out " + 0 / Xa + "s"), e.addRule(".slot .slot-container .reels .reel-1", "transition: transform " + 4.75 / Xa + "s ease-out " + .075 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='1']", "transition: transform " + 6.55 / Xa + "s ease-out " + .075 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='2']", "transition: transform " + 8.95 / Xa + "s ease-out " + .075 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='3']", "transition: transform " + 11.95 / Xa + "s ease-out " + .075 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='4']", "transition: transform " + 15.55 / Xa + "s ease-out " + .075 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='5']", "transition: transform " + 19.75 / Xa + "s ease-out " + .075 / Xa + "s"), e.addRule(".slot .slot-container .reels .reel-2", "transition: transform " + 5.5 / Xa + "s ease-out " + .15 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='1']", "transition: transform " + 7.3 / Xa + "s ease-out " + .15 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='2']", "transition: transform " + 9.7 / Xa + "s ease-out " + .15 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='3']", "transition: transform " + 12.7 / Xa + "s ease-out " + .15 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='4']", "transition: transform " + 16.3 / Xa + "s ease-out " + .15 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='5']", "transition: transform " + 20.5 / Xa + "s ease-out " + .15 / Xa + "s"), e.addRule(".slot .slot-container .reels .reel-3", "transition: transform " + 6.25 / Xa + "s ease-out " + .225 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='1']", "transition: transform " + 8.05 / Xa + "s ease-out " + .225 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='2']", "transition: transform " + 10.45 / Xa + "s ease-out " + .225 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='3']", "transition: transform " + 13.45 / Xa + "s ease-out " + .225 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='4']", "transition: transform " + 17.05 / Xa + "s ease-out " + .225 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='5']", "transition: transform " + 21.25 / Xa + "s ease-out " + .225 / Xa + "s"), e.addRule(".slot .slot-container .reels .reel-4", "transition: transform " + 7 / Xa + "s ease-out " + .3 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='1']", "transition: transform " + 8.8 / Xa + "s ease-out " + .3 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='2']", "transition: transform " + 11.2 / Xa + "s ease-out " + .3 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='3']", "transition: transform " + 14.2 / Xa + "s ease-out " + .3 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='4']", "transition: transform " + 17.8 / Xa + "s ease-out " + .3 / Xa + "s"), e.addRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='5']", "transition: transform " + 22 / Xa + "s ease-out " + .3 / Xa + "s")) : e.insertRule && (e.insertRule(".bitdrop .ball{transition: transform linear " + .15 / Xa + "s, opacity linear " + .175 / Xa + "s}", e.cssRules.length), e.insertRule(".bitdrop .ball.slow{transition: transform linear " + .4 / Xa + "s, opacity linear " + .175 / Xa + "s}", e.cssRules.length), e.insertRule(".game.roulette .ui .right .ball{transition: transform ease-out " + 5 / Xa + "s}", e.cssRules.length), e.insertRule(".game.roulette .ui .right .ball.stopping{transition: transform ease-out " + 1.3 / Xa + "s}", e.cssRules.length), e.insertRule(".game.roulette .ui .right:not(.spinning) .ball{transition:top " + .75 / Xa + "s ease-out, left " + .75 / Xa + "s ease-out}", e.cssRules.length), e.insertRule(".game.roulette .ui .right:not(.spinning) .ball .img{transition:left " + .3 / Xa + "s ease-out " + .45 / Xa + "s !important}", e.cssRules.length), e.insertRule(".game.roulette .ui .right{transition: width " + .75 / Xa + "s ease-in-out, height " + .75 / Xa + "s ease-in-out, background-size " + .75 / Xa + "s ease-in-out, bottom " + .75 / Xa + "s ease-in-out, right " + .75 / Xa + "s ease-in-out}", e.cssRules.length), e.insertRule(".game.roulette .ui .right .wheel{transition: width " + .75 / Xa + "s ease-in-out, height " + .75 / Xa + "s ease-in-out, background-size " + .75 / Xa + "s ease-in-out, bottom " + .75 / Xa + "s ease-in-out, right " + .75 / Xa + "s ease-in-out}", e.cssRules.length), e.insertRule(".game.roulette .ui .right .wheel .inner{transition:transform " + 8 / Xa + "s cubic-bezier(0.39, 0.07, 0.15, 1), transform-origin " + .75 / Xa + "s ease-in-out, width " + .75 / Xa + "s ease-in-out, height " + .75 / Xa + "s ease-in-out, background-size " + .75 / Xa + "s ease-in-out, bottom " + .75 / Xa + "s ease-in-out, right " + .75 / Xa + "s ease-in-out}", e.cssRules.length), e.insertRule(".bitspin #wheel{transition: transform " + 2.25 / Xa + "s cubic-bezier(0.255, -0.175, 0.000, 1.000)}", e.cssRules.length), e.insertRule(".slot .slot-container .reels .win-reel.delay{transition: background-position 0s linear " + 1 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels .reel-0{transition: transform " + 4 / Xa + "s ease-out " + 0 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='1']{transition: transform " + 5.8 / Xa + "s ease-out " + 0 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='2']{transition: transform " + 8.2 / Xa + "s ease-out " + 0 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='3']{transition: transform " + 11.2 / Xa + "s ease-out " + 0 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='4']{transition: transform " + 14.8 / Xa + "s ease-out " + 0 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-0[data-delay='5']{transition: transform " + 19 / Xa + "s ease-out " + 0 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels .reel-1{transition: transform " + 4.75 / Xa + "s ease-out " + .075 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='1']{transition: transform " + 6.55 / Xa + "s ease-out " + .075 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='2']{transition: transform " + 8.95 / Xa + "s ease-out " + .075 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='3']{transition: transform " + 11.95 / Xa + "s ease-out " + .075 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='4']{transition: transform " + 15.55 / Xa + "s ease-out " + .075 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-1[data-delay='5']{transition: transform " + 19.75 / Xa + "s ease-out " + .075 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels .reel-2{transition: transform " + 5.5 / Xa + "s ease-out " + .15 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='1']{transition: transform " + 7.3 / Xa + "s ease-out " + .15 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='2']{transition: transform " + 9.7 / Xa + "s ease-out " + .15 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='3']{transition: transform " + 12.7 / Xa + "s ease-out " + .15 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='4']{transition: transform " + 16.3 / Xa + "s ease-out " + .15 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-2[data-delay='5']{transition: transform " + 20.5 / Xa + "s ease-out " + .15 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels .reel-3{transition: transform " + 6.25 / Xa + "s ease-out " + .225 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='1']{transition: transform " + 8.05 / Xa + "s ease-out " + .225 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='2']{transition: transform " + 10.45 / Xa + "s ease-out " + .225 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='3']{transition: transform " + 13.45 / Xa + "s ease-out " + .225 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='4']{transition: transform " + 17.05 / Xa + "s ease-out " + .225 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-3[data-delay='5']{transition: transform " + 21.25 / Xa + "s ease-out " + .225 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels .reel-4{transition: transform " + 7 / Xa + "s ease-out " + .3 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='1']{transition: transform " + 8.8 / Xa + "s ease-out " + .3 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='2']{transition: transform " + 11.2 / Xa + "s ease-out " + .3 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='3']{transition: transform " + 14.2 / Xa + "s ease-out " + .3 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='4']{transition: transform " + 17.8 / Xa + "s ease-out " + .3 / Xa + "s}", e.cssRules.length), e.insertRule(".slot .slot-container .reels.spin-animate .reel-4[data-delay='5']{transition: transform " + 22 / Xa + "s ease-out " + .3 / Xa + "s}", e.cssRules.length))
    }

    function Pt() {
        window.Notification && "granted" !== Notification.permission && Notification.requestPermission(function(e) {
            Notification.permission !== e && (Notification.permission = e)
        })
    }

    function Bt(e, t) {
        Aa && !ns && (window.Notification && "granted" === Notification.permission ? new Notification(e, {
            body: t,
            tag: "noti",
            icon: "/favicon.ico"
        }) : window.Notification && "denied" !== Notification.permission && Notification.requestPermission(function(a) {
            "granted" === a && new Notification(e, {
                body: t,
                tag: "noti",
                icon: "/favicon.ico"
            })
        }))
    }

    function Ot() {
        var e = localStorage.getItem("collapse");
        null !== e && (e = JSON.parse(e), $(".sidebar-table.collapse.hidden th").each(function() {
            var t = ("" + CryptoJS.SHA256($(this).html())).substr(0, 16);
            void 0 === e[t] || e[t] || $(this).click()
        }), $(".sidebar-table.collapse:not(.hidden) th").each(function() {
            var t = ("" + CryptoJS.SHA256($(this).html())).substr(0, 16);
            e[t] !== void 0 && e[t] && $(this).click()
        }))
    }

    function At() {
        var e = 8;
        "tokens" == bs && (e = 0), $(".auto_bet .total_bet").html(ua(Ss.results.bet, e)), $(".auto_bet .total_won").html(ua(Ss.results.won, e)), $(".auto_bet .total_profit").html(wt(Ss.results.won - Ss.results.bet, e, void 0, !1)), $(".auto_bet .largest_win").html(ua(Ss.results.largest_win, e)), $(".auto_bet .largest_bet").html(ua(Ss.results.largest_bet, e)), $(".auto_bet .total_plays").html(ua(Ss.results.plays, 0))
    }

    function Dt(e) {
        if (us || $(document.body).hasClass("big-win")) return setTimeout(function() {
            Dt(e)
        }, 100), void 0;
        var t = 8;
        if ("tokens" == bs && (t = 0), Ss.status.last_bet = e.total_bet / e.multiplier, Ss.status.active) {
            e.total_won = e.win, Array.isArray(e.total_won) && (e.total_won = e.win.reduce(Ht, 0));
            var a, s = !1,
                i = Ss.settings.max,
                n = Ss.settings.start;
            if ((0 == i || "" == i) && (i = !1), ("profit" == Ss.settings.win_def && e.total_won >= e.total_bet || "hit" == Ss.settings.win_def && e.total_won > 0) && (s = !0), a = s ? 0 == Ss.settings.win ? n : Math.round10(Ss.status.last_bet * Ss.settings.win, -t) : 0 == Ss.settings.loss ? n : Math.round10(Ss.status.last_bet * Ss.settings.loss, -t), i !== !1 && a > i && (a = "cap" == Ss.settings.max_def ? i : n), Ss.results.bet += e.total_bet, Ss.results.won += e.total_won, Ss.results.profit += e.total_won - e.total_bet, Ss.results.largest_win = Math.max(e.total_won, Ss.results.largest_win), Ss.results.largest_bet = Math.max(e.total_bet, Ss.results.largest_bet), Ss.results.plays++, At(), Ss.results.plays >= Ss.settings.games && Ss.settings.games > 0) return Lt(), void 0;
            var o = $(".game.active").data("game"),
                l = Ss.settings.row;
            Ut(o, l, a, Ss.settings.bits)
        }
    }

    function Lt() {
        Ss.status.large_bet = !1, Ss.results.bet = 0, Ss.results.won = 0, Ss.results.profit = 0, Ss.results.largest_win = 0, Ss.results.largest_bet = 0, Ss.results.plays = 0, Ss.status.active = !1, $(".auto-input").prop("disabled", !1), $("#auto-start-button").html("Start").prop("disabled", !1), $(".game input").prop("disabled", !1), $(".game button").prop("disabled", !1), $(".game").css("pointer-events", "auto")
    }

    function Et() {
        if (!us) {
            $(".game input").prop("disabled", !0), $(".game button").prop("disabled", !0), $(".game").css("pointer-events", "none"), $(".game[data-game='dice'] .ui-bottom .range-container input").prop("disabled", !1).css("pointer-events", "all"), $(".auto-input").prop("disabled", !0), Ss.settings.start = parseFloat($("#auto-start").val()) || 0, Ss.settings.max = parseFloat($("#auto-max").val()) || 0, Ss.settings.bits = parseFloat($("#auto-bits").val()) || 0, Ss.settings.loss = parseFloat($("#auto-loss").val()) || 0, Ss.settings.win = parseFloat($("#auto-win").val()) || 0, Ss.settings.games = parseFloat($("#auto-games").val()) || 0, Ss.settings.row = $("#auto-row").val(), Ss.settings.win_def = $("#auto-win_def").val(), Ss.settings.max_def = $("#auto-max_def").val(), Ss.status.active = !0, $("#auto-start-button").html("Running!").prop("disabled", !0);
            var e = $(".game.active").data("game");
            if ((Ss.settings.start >= 1 && "bitcoins" == bs || Ss.settings.start >= 1 && "ethers" == bs || Ss.settings.start >= 25 && "litecoins" == bs || Ss.settings.start >= 1 && "bcash" == bs || Ss.settings.start >= 1e4 && "dogecoins" == bs) && !Ss.status.large_bet) {
                if (!confirm("High bet warning!\n\nYou've chosen a very high starting bet, are you sure you didn't mean to use tokens?\n\nPress OK to start betting, or Cancel to stop.")) return Lt(), void 0;
                Ss.status.large_bet = !0
            }
            Ut(e, Ss.settings.row, Ss.settings.start, Ss.settings.bits)
        }
    }

    function Ut(e, t, a, s) {
        var i = "spin";
        "keno" == e ? ($(".game." + e + " .game_bet").val(a), $(".game." + e + " .game_multiplier").val(s), $(".keno-payline").val(t).change(), $(".keno .play-keno").click()) : ("bitdrop" == e && (i = "play"), $(".game." + e + " .game_bet").val(a), $(".game." + e + " .game_multiplier").val(s), "dice" != e ? $(".game." + e + " ." + i + "." + t).click() : $(".dice-bet-button." + t).click())
    }

    function Ht(e, t) {
        return e + t
    }

    function Kt(e) {
        var t = e.toString(2),
            a = t.split(1).length - 1,
            s = 100 / a;
        e != Fa && ($(".chat_rooms").html(""), 4 >= a ? (1 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="0"><i class="icon-star-empty"></i> VIP</div>'), 2 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="1"><i class="icon-chat"></i> General</div>'), 16 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="4"><i class="icon-users"></i> Event</div>'), 4 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="2"><i class="icon-star"></i> Family</div>'), 8 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="3"><i class="icon-account"></i> Inbox</div>')) : (1 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="0"><i class="icon-star-empty"></i> VIP</div>'), 2 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="1"><i class="icon-chat"></i> Gen</div>'), 16 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="4"><i class="icon-users"></i> Evnt</div>'), 4 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="2"><i class="icon-star"></i> Fam</div>'), 8 & e && $(".chat_rooms").append('<div style="width:' + s + '%" class="channel" data-channel="3"><i class="icon-account"></i> PM</div>')), $("[data-channel='" + Ta + "']").click()), Fa = e
    }

    function Jt(e) {
        for (var t = window.location.search.substring(1), a = t.split("&"), s = 0; a.length > s; s++) {
            var i = a[s].split("=");
            if (i[0] == e) return i[1]
        }
    }

    function Yt(e) {
        for (var t = e + "=", a = document.cookie.split(";"), s = 0; a.length > s; s++) {
            for (var i = a[s];
                " " == i.charAt(0);) i = i.substring(1);
            if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
        }
        return ""
    }

    function Gt(e) {
        $(document.body).removeClass("permission-submod permission-mod permission-admin").addClass(e)
    }

    function Vt(e) {
        Wt(1 / (e / 100 / .99))
    }

    function Wt(e) {
        var t = 1 / (.01 * (e / .99));
        Xt(t - 1e-4, "low"), Xt(100 - t, "high")
    }

    function Xt(e, t) {
        if (void 0 === t) return $("#dice_multiplier").val(""), $("#dice_chance").val(""), Xt(e, "high"), Xt(e, "low"), void 0;
        e = Math.floor10(e, -4), e >= 100 && (e = 99.9999), 0 >= e && (e = 0), target_str = Math.max(parseFloat(e), 0), target_str = target_str.toFixed(4);
        var a = target_str.split("."),
            s = a[0] + ".<u>" + a[1].substr(0, 2) + "</u><u>" + a[1].substr(2, 2) + "</u>";
        $("." + t + " .dice-target").html(s);
        var i = .99 * (100 / (100 - parseFloat(e))),
            n = .99 * (100 / (parseFloat(e) + 1e-4));
        $(".play-dice." + t).data("target", e), "high" == t && $(".play-dice." + t).data("multiplier", i), "low" == t && $(".play-dice." + t).data("multiplier", n);
        var o = parseFloat($("#dice_bet").val());
        isNaN(o) && (o = 0), o = Math.max(0, o), o = Math.min(1e8, o);
        var l = 8;
        "tokens" == bs && (l = 3), "high" == t && $(".dice-profit.high").html((i * o).toFixed(l)), "low" == t && $(".dice-profit.low").html((n * o).toFixed(l)), 1.002 >= n && "low" == t ? $(".dice-bet-button.low").addClass("disabled") : "low" == t && $(".dice-bet-button.low").removeClass("disabled"), 1.002 >= i && "high" == t ? $(".dice-bet-button.high").addClass("disabled") : "high" == t && $(".dice-bet-button.high").removeClass("disabled"), "high" == t ? (l = 3, 1.05 >= i ? l = 6 : 1.1 >= i ? l = 5 : 2 >= i && (l = 4), i >= 100 && (l = 2), i >= 1e3 && (l = 1), i >= 1e4 && (l = 0), $(".dice-multiplier.high").html(i.toFixed(l) + "x")) : "low" == t && (l = 3, 1.05 >= n ? l = 6 : 1.1 >= n ? l = 5 : 2 >= n && (l = 4), n >= 100 && (l = 2), n >= 1e3 && (l = 1), n >= 1e4 && (l = 0), $(".dice-multiplier.low").html(n.toFixed(l) + "x"))
    }

    function Qt(e) {
        $(".dice-bet-button").each(function() {
            var t = e * parseFloat($(this).data("multiplier")),
                a = 8;
            "tokens" == bs && (a = 3), $(this).find(".dice-profit").html(t.toFixed(a))
        })
    }

    function Zt(e) {
        e = parseFloat(e);
        var t = 96 * (e / 100) + 2;
        $(".win-indicator").css("left", "calc(" + t + "% - 40px)");
        var a = e.toFixed(4),
            s = a.split("."),
            i = s[0] + ".<u>" + s[1].substr(0, 2) + "</u><u>" + s[1].substr(2, 2) + "</u>";
        $(".winning-roll.roll-display").html(i)
    }

    function ea() {
        return Math.floor(Date.now() / 1e3)
    }

    function ta() {
        return ea() - ya
    }

    function aa(e) {
        Qs = e.touches[0].clientX, Zs = e.touches[0].clientY
    }

    function sa(e) {
        if (Ea && Qs && Zs) {
            var t = e.touches[0].clientX,
                a = e.touches[0].clientY,
                s = Qs - t,
                i = Zs - a;
            Math.abs(s) > Math.abs(i) && (s > 0 ? ($(".tab-container").removeClass("active"), $(".side-tabs").removeClass("active")) : $(".tab-container").addClass("active")), Qs = null, Zs = null
        }
    }

    function ia(e) {
        (Da || confirm("Press OK to select the maximum bet.\rNote: This warning may be disabled on your account tab.")) && e()
    }

    function na(e) {
        val = 0, len = e.length;
        for (var t = 0; len > t; t++) val += parseFloat(e[t]);
        return val
    }

    function oa(e) {
        if ("bitcoins" == e) var t = $(".balance").html().replace(",", "").replace(",", "");
        if ("ethers" == e) var t = $(".balance-ether").html().replace(",", "").replace(",", "");
        if ("litecoins" == e) var t = $(".balance-litecoin").html().replace(",", "").replace(",", "");
        if ("bcash" == e) var t = $(".balance-bcash").html().replace(",", "").replace(",", "");
        if ("dogecoins" == e) var t = $(".balance-dogecoin").html().replace(",", "").replace(",", "");
        return parseFloat(t)
    }

    function la(e, t) {
        if (e === void 0 || null === e) return "";
        var a = t || t === void 0 ? "<br />" : "<br>";
        return (e + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + a + "$2")
    }

    function ra(e, t) {
        $(".tab[data-tab='funding']").click(), ca(t.html, "html", "Welcome To Bitvest!", "Close")
    }

    function ca(e, t, a, s) {
        (t === void 0 || "" == t) && (t = "text"), (a === void 0 || "" == a) && (a = "Info"), (s === void 0 || "" == s) && (s = "OK"), $("#modal-back").fadeIn(60), $("#info-box .info-title-content").html(a), $("#info-box .info-ok").html(s), $(".info-ok").focus(), "text" == t ? ($(".info-content").removeClass("nopad"), $("#info-box .info-content").html(la(e))) : "html" == t && ($(".info-content").addClass("nopad"), $("#info-box .info-content").html(e))
    }

    function da() {
        $("#modal-back").fadeOut(60, function() {
            $("#info-box .info-content").html("Loading...")
        })
    }

    function ua(e, t, a) {
        t === void 0 && (t = 8), a === void 0 && (a = 11);
        var s = St(Math.abs(e), 0).length;
        return a >= s + t + 1 ? St(e, t) : s + 2 >= a ? St(e, 0) : s + t + 1 > a ? St(e, a - s - 1) : St(e, t)
    }

    function pa() {
        $("#incoming_friends").html(""), $("#pending_friends").html(""), $("#accepted_friends").html("")
    }

    function ma(e, t, a) {
        "accepted" == e && $("#accepted_friends").append("<div class='" + a + "'>         <div class='friend'><b>" + t + "</b></div>         <div class='actions'>             <div data-action='chat' data-username='" + t + "' class='action'><i class='icon-chat'></i></div>             <div data-action='tip' data-username='" + t + "' class='action'><i class='icon-btc'></i></div>             <div data-action='remove' data-username='" + t + "' class='action'><i class='icon-friend-remove'></i></div>         </div>         </div>"), "pending" == e && $("#pending_friends").append("<div class='pending'>         <div class='friend'><b>" + t + "</b></div>         <div class='actions actions-2'>             <div data-action='chat' data-username='" + t + "' class='action'><i class='icon-chat'></i></div>             <div data-action='remove' data-username='" + t + "' class='action'><i class='icon-friend-remove'></i></div>         </div>         </div>"), "incoming" == e && $("#incoming_friends").append("<div class='pending'>         <div class='friend'><b>" + t + "</b></div>         <div class='actions'>             <div data-action='chat' data-username='" + t + "' class='action'><i class='icon-chat'></i></div>             <div data-action='accept' data-username='" + t + "' class='action'><i class='icon-friend-add'></i></div>             <div data-action='remove' data-username='" + t + "' class='action'><i class='icon-friend-remove'></i></div>         </div>         </div>")
    }

    function ha() {
        var e = ka / $a.length,
            t = 0;
        $a.forEach(function(a) {
            var s = a[8].split(" "),
                i = 1;
            result_store.all.push(a), result_store.all.length >= 380 && result_store.all.shift(), s.forEach(function(e) {
                "" != e && (result_store[e].push(a), result_store[e].length >= 380 && result_store[e].shift()), "self" == e && (i = -1)
            }), 1 != $s && Mt(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], !1, e * t * i), t++
        }), $a = []
    }

    function va(e) {
        $(".result-row").addClass("remove-next"), result_store[e].forEach(function(e) {
            Mt(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], !1, -1)
        }), $(".remove-next").remove()
    }
    var fa = "all",
        $a = [],
        ba = {
            cur: "BTC",
            won: "0",
            bet: "0",
            game: "plinko",
            game_name: "Plinko",
            id: 0
        };
    if (exchange_rate = {
            BTC: .95,
            ETH: 1,
            LTC: 1,
            BCH: 1,
            DOGE: 1
        }, game)
        for (var ga = [{
                value: "/pm ",
                label: "/PM <username> <message>",
                desc: "Send <username> a <message>"
            }, {
                value: "/ignore ",
                label: "/Ignore <username> ",
                desc: "Stop seeing chat from <username>"
            }, {
                value: "/unignore ",
                label: "/Unignore <username> ",
                desc: "Start seeing chat from <username>"
            }, {
                value: "!rules ",
                label: "!Rules",
                desc: "Posts the chat rules"
            }, {
                value: "!rain ",
                label: "!Rain",
                desc: "Lets users know how rain works"
            }, {
                value: "!tokens ",
                label: "!Tokens",
                desc: "Lets users know about tokens"
            }, {
                value: "!flip ",
                label: "!Flip",
                desc: "Have GameBot flip a coin"
            }, {
                value: "!roll ",
                label: "!Roll <n>",
                desc: "Have GameBot roll an <n> sided die"
            }], _a = 0; 4 >= _a; _a++) $("[data-chatroom='" + _a + "'].chat-message").on("keydown", function(e) {
            return e.keyCode !== $.ui.keyCode.TAB && e.keyCode !== $.ui.keyCode.ENTER || !$(this).autocomplete("instance").menu.active ? void 0 : (e.preventDefault(), !1)
        }).autocomplete({
            delay: 0,
            minLength: 1,
            autoFocus: !0,
            source: function(e, t) {
                var a = $.map(ga, function(t) {
                    return t.value.startsWith(e.term) ? t : null
                });
                t(a)
            },
            select: function(e, t) {
                return $(".chat-message").val(t.item.value), !1
            }
        }).autocomplete("instance")._renderItem = function(e, t) {
            return $("<li>").append("<div><b>" + ut(t.label) + "</b><br>" + ut(t.desc) + "</div>").appendTo(e)
        };
    Math.round10 || (Math.round10 = function(t, a) {
        return e("round", t, a)
    }), Math.floor10 || (Math.floor10 = function(t, a) {
        return e("floor", t, a)
    }), Math.ceil10 || (Math.ceil10 = function(t, a) {
        return e("ceil", t, a)
    });
    var ka = 2e3,
        ya = ea(),
        wa = "",
        Ca = "",
        xa = 0,
        Ma = 0,
        Ta = 1,
        Ra = !1,
        Fa = 2,
        za = !1,
        Na = !1,
        Sa = !1,
        Ia = 0,
        qa = {
            bitcoins: {
                plinko: 0,
                dice: 0,
                roulette: 0,
                bitspin: 0,
                slot: 0,
                keno: 0
            },
            ethers: {
                plinko: 0,
                dice: 0,
                roulette: 0,
                bitspin: 0,
                slot: 0,
                keno: 0
            },
            litecoins: {
                plinko: 0,
                dice: 0,
                roulette: 0,
                bitspin: 0,
                slot: 0,
                keno: 0
            },
            bcash: {
                plinko: 0,
                dice: 0,
                roulette: 0,
                bitspin: 0,
                slot: 0,
                keno: 0
            },
            dogecoins: {
                plinko: 0,
                dice: 0,
                roulette: 0,
                bitspin: 0,
                slot: 0,
                keno: 0
            },
            tokens: {
                plinko: 1e10,
                dice: 3e9,
                roulette: 2e10,
                bitspin: 1e10,
                slot: 1e10,
                keno: 2e10
            }
        },
        ja = "bitdrop";
    "" != Yt("selected_game") && (ja = Yt("selected_game"));
    var Pa = 0;
    "1" == Yt("hotkey") && (Pa = 1);
    var Ba = 0;
    "1" == Yt("mtools") && (Ba = 1);
    var Oa = 0;
    "1" == Yt("theme") && (Oa = 1);
    var Aa = 0;
    "1" == Yt("notifications") && (Aa = 1);
    var Da = 0;
    "1" == Yt("allowmax") && (Da = 1);
    var La = 1;
    "0" == Yt("showsocial") && (La = 0);
    var Ea = 1;
    "0" == Yt("mobileslide") && (Ea = 0);
    var Ua = 1;
    "0" == Yt("show_split_notice") && (Ua = 0), 1 == Ua && $(".site-alert").css("display", "block");
    var Ha = 0,
        Ka = "inbox";
    "1" == Yt("inbox_channel") && (Ha = 1, Ka = "all");
    var Ja = "normal",
        Ya = 0;
    "1" == Yt("bigwinlevel") ? (Ja = "high", Ya = 1) : "2" == Yt("bigwinlevel") && (Ja = "off", Ya = 2);
    var Ga = Math.floor(Yt("min_level")),
        Va = 1e-6,
        Wa = 1e-6;
    "" != Yt("min_bet") && (Va = Math.round10(parseFloat(Yt("min_bet")) + 0, -8)), "" != Yt("min_win") && (Wa = Math.round10(parseFloat(Yt("min_win")) + 0, -8));
    var Xa = 1,
        Qa = 50;
    "" != Yt("game_speed") && (Xa = Math.round10(parseFloat(Yt("game_speed")) + 0, -2)), "" != Yt("volume") && (Qa = Math.round10(parseInt(Yt("volume")) + 0, 0));
    var Za = null,
        es = null,
        ts = 0;
    ts = "" == Yt("reg") ? 0 : Yt("reg");
    var as = Jt("r"),
        ss = !0,
        is = "";
    setTimeout(function() {
        $(".theme[data-theme='" + Oa + "']").click(), $(".game-select[data-game='" + ja + "']").click(), $(".auto-table").attr("data-game", ja), $(".inbox_channel[data-inbox_channel='" + Ha + "']").click(), $(".notifications[data-notifications='" + Aa + "']").click(), $(".mtools[data-mtools='" + Ba + "']").click(), $(".hotkey[data-hotkey='" + Pa + "']").click(), $(".allowmax[data-allowmax='" + Da + "']").click(), $(".bigwinlevel[data-bigwinlevel='" + Ya + "']").click(), $(".social-setting[data-social-setting='" + La + "']").click(), $(".slide-setting[data-slide-setting='" + Ea + "']").click(), $("#min-level").val(Ga), $("#min-bet").val(Va), $("#min-win").val(Wa), $("#volume").val(Qa).change(), $("#game-speed").val(Xa).change(), ds = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), 932 == ds && (rs = !0), $("#exchange-tokens").val(5e5).change()
    }, 1), setTimeout(function() {
        $(".big-win-overlay").removeAttr("style")
    }, 2e3), "" != Jt("s") || "" != Yt("secret") ? (es = "" != Jt("s") ? Jt("s") : Yt("secret"), $.post("login.php", {
        s: es,
        type: "secret"
    }, function(e) {
        et(e.data, "html", e), ss = !1
    })) : $.post("login.php", {
        type: "load"
    }, function(e) {
        et(e.data, "html", e), ss = !1
    });
    var ns = !0;
    window.onfocus = function() {
        ns = !0
    }, window.onblur = function() {
        ns = !1
    }, ver = 101;
    var os = chat_id - 100,
        ls = {};
    ls.plinko = game_id[0], ls.roulette = game_id[1], ls.bitspin = game_id[2], ls.slot = game_id[3], ls.dice = game_id[4], ls.keno = game_id[5];
    var rs = !1,
        cs = !1,
        ds = null,
        us = !1,
        ps = [1250, 200, 50, 20, 1250, 1250, 1250, 1250, 1250, 1250, 1250, 1250, 1250, 20, 50, 200, 1250],
        ms = [1, 16, 120, 560, 1820, 4368, 8008, 11440, 12870],
        hs = ["red", "orange", "green", "teal", "blue", "purple"],
        vs = 0,
        fs = 0,
        $s = -1,
        bs = "bitcoins",
        gs = 1e-8,
        _s = !1,
        ks = !1,
        ys = {},
        ws = Math.random().toString(32).substring(7);
    Qa === void 0 && (Qa = 50);
    var Cs = 0,
        xs = [100, 200, 999, 100, 200, 500, 100, 200, 200, 100, 200, 200, 100, 150, 150, 100, 125, 150, 75, 100, 125, 50, 75, 100],
        Ms = [
            [0, 3, 7, 8, 8, 0, 7, 8, 8, 7, 0, 6, 4, 6, 7, 2, 5, 8, 5, 8, 2, 4, 4, 6, 4, 0, 8, 7, 8, 5, 1, 4, 8, 5, 6, 1, 5, 6, 7, 8, 2, 7, 3, 3, 7, 2, 8, 3, 6, 3, 2, 7, 5, 7, 7, 8, 6, 6, 3, 5, 4, 3, 4, 4],
            [0, 8, 5, 6, 4, 8, 0, 5, 7, 4, 4, 7, 1, 3, 4, 4, 3, 5, 1, 8, 3, 4, 7, 8, 2, 5, 7, 7, 7, 6, 2, 8, 3, 8, 3, 6, 2, 6, 3, 8, 5, 3, 2, 7, 3, 4, 6, 3, 2, 4, 6, 8, 5, 8, 5, 7, 6, 7, 3, 7, 6, 8, 8, 5],
            [0, 8, 5, 5, 8, 7, 6, 0, 7, 6, 7, 7, 3, 8, 1, 6, 8, 7, 8, 6, 8, 1, 4, 8, 7, 4, 4, 6, 2, 8, 6, 4, 4, 5, 7, 2, 7, 6, 8, 5, 8, 7, 2, 5, 6, 4, 7, 8, 8, 2, 8, 4, 6, 7, 7, 5, 4, 3, 5, 5, 8, 8, 6, 3],
            [0, 3, 7, 6, 5, 3, 4, 8, 3, 3, 6, 5, 1, 6, 3, 6, 6, 8, 8, 4, 5, 7, 7, 8, 2, 5, 6, 4, 7, 7, 6, 3, 8, 5, 7, 6, 2, 4, 8, 7, 6, 8, 8, 4, 8, 5, 7, 3, 2, 8, 8, 6, 4, 7, 4, 8, 7, 5, 8, 5, 4, 7, 5, 7],
            [0, 3, 7, 6, 4, 4, 8, 7, 3, 8, 8, 6, 7, 4, 4, 5, 6, 5, 6, 3, 2, 4, 8, 4, 8, 5, 4, 7, 7, 8, 7, 7, 6, 8, 5, 8, 7, 5, 7, 5, 2, 7, 6, 6, 8, 5, 5, 6, 7, 7, 3, 8, 8, 3, 4, 3, 5, 8, 8, 6, 6, 8, 8, 7]
        ],
        Ts = [
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2],
            [0, 1, 2, 1, 0],
            [2, 1, 0, 1, 2],
            [0, 0, 1, 2, 2],
            [2, 2, 1, 0, 0],
            [1, 0, 0, 0, 1],
            [2, 1, 1, 1, 2],
            [1, 0, 1, 2, 1],
            [1, 2, 1, 0, 1],
            [0, 1, 0, 1, 0],
            [2, 1, 2, 1, 2],
            [1, 1, 0, 1, 1],
            [1, 1, 2, 1, 1],
            [0, 2, 0, 2, 0],
            [2, 0, 2, 0, 2],
            [1, 0, 2, 0, 1],
            [0, 1, 1, 1, 0],
            [1, 2, 2, 2, 1]
        ],
        Rs = ["wild", "jackpot", "btc", "eth", "ltc", "xrp", "doge", "dash", "ppc"],
        Fs = [],
        zs = [],
        Ns = 0;
    sound = {}, sound.win = [];
    for (var _a = 0; 3 >= _a; _a++) sound.win[_a] = new Audio("/sound/win" + _a + ".m4a");
    sound.stop = [];
    for (var _a = 0; 4 >= _a; _a++) sound.stop[_a] = new Audio("/sound/stop" + _a + ".m4a");
    sound.keno_win = [];
    for (var _a = 0; 5 >= _a; _a++) sound.keno_win[_a] = new Audio("/sound/keno_win_" + _a + ".m4a");
    sound.low_jackpot = new Audio("/sound/low_jackpot.m4a"), sound.jackpot = new Audio("/sound/jackpot.m4a"), sound.spin = new Audio("/sound/spinning.m4a"), sound.spin.loop = !0, sound.low_jackpot.loop = !0, sound.jackpot.loop = !0, sound.keno_catch = new Audio("/sound/hit.m4a"), sound.keno_draw = new Audio("/sound/draw.m4a"), sound.keno_ui = new Audio("/sound/keno_draw.m4a"), sound.keno_catch.loop = !1, sound.keno_draw.loop = !1, sound.keno_ui.loop = !1;
    var Ss = {
        status: {
            active: !1,
            last_bet: 0,
            large_bet: !1
        },
        settings: {
            start: 0,
            max: 0,
            bits: 1,
            row: 0,
            loss: 0,
            win: 0,
            games: 0,
            win_def: "profit",
            max_def: "cap"
        },
        results: {
            bet: 0,
            won: 0,
            profit: 0,
            largest_win: 0,
            largest_bet: 0,
            plays: 0
        }
    };
    $(function() {
        if (window.location.hash) {
            var e = window.location.hash;
            window.location.hash = "", window.location.hash = e
        }
        z(), Ot(), $(".bitspin .prizes.purple").click(), $(".slot .prizes.purple").click(), $('[data-toggle="tooltip"]').each(function() {
            $(this).tooltip({
                container: "body",
                html: !0,
                title: $(this).attr("tooltip-title"),
                "data-original-title": $(this).attr("tooltip-title")
            }).tooltip("fixTitle")
        }), $(".bitdrop input.prize").trigger("change"), jt(), qt()
    }), roulette = {}, roulette.max_bet = function() {
        return max_win = 425, {
            outside: Number((qa[bs].roulette / (7 * max_win)).toFixed(8)),
            inside: Number((qa[bs].roulette / (4.666 * 36 * max_win)).toFixed(8))
        }
    }, roulette.payouts = {
        straight: 36,
        split: 18,
        street: 12,
        corner: 9,
        line: 6,
        dozen: 3,
        column: 3,
        color: 2,
        type: 2,
        highlow: 2
    };
    var Is = [1, 5, 10, 50, 100, 500, 1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7, 1e9],
        qs = ["1", "5", "10", "50", "100", "500", "1K", "5K", "10K", "50K", "100K", "500K", ".01B", ".05B", ".10B", "MAX"],
        js = ["green", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red", "red", "black", "red", "black", "red", "black", "red", "black", "red", "black", "black", "red", "black", "red", "black", "red", "black", "red"];
    roulette_bet = {}, $(document.body).on("click contextmenu", ".board [data-target]", function(e) {
        ks && _s && (_s = !1, $(".roulette .clear").click());
        var i = $(this).data("target") + "",
            n = $('[data-receive="' + i + '"]');
        return void 0 === roulette_bet[i] && (roulette_bet[i] = 0), "contextmenu" == e.type ? (e.preventDefault(), roulette_bet[i] -= gs) : roulette_bet[i] += gs, roulette_bet[i] = Math.round10(roulette_bet[i], -8), 0 >= roulette_bet[i] ? (roulette_bet[i] = 0, n.attr("data-bet", "0"), n.html(""), s(), void 0) : ($("[data-receive='" + i + "']").addClass("active"), roulette_bet[i] >= 10 ? (n.html(a(t(1))), roulette_bet[i] = 10, n.attr("data-bet", "MAX BET"), s(), void 0) : (s(), n.html(a(t(roulette_bet[i]))), n.attr("data-bet", roulette_bet[i].toFixed(8)), void 0))
    }), $(".roulette .clear").on("click", function() {
        _s = !1;
        var e = gs;
        gs = -10;
        for (item in roulette_bet) $("[data-target='" + item + "']").click();
        gs = e, $("[data-receive]").removeClass("active")
    }), $(".roulette .double-bet").on("click", function() {
        _s && (roulette_bet = ys, _s = !1);
        var e = gs;
        gs = 0;
        for (item in roulette_bet) roulette_bet[item] *= 2, roulette_bet[item] > 10 && (roulette_bet[item] = 10), $("[data-target='" + item + "']").click();
        gs = e
    }), $(".roulette .repeat").on("click", function() {
        _s = !1;
        var e = gs;
        roulette_bet = ys, gs = 0;
        for (item in roulette_bet) roulette_bet[item] > 10 && (roulette_bet[item] = 10), $("[data-target='" + item + "']").click();
        gs = e
    }), $(".roulette .double-bet").on("mouseleave", function() {
        $("[data-receive]").removeClass("active")
    }), $(".board [data-target]").on("mouseenter mouseleave", function(e) {
        var t = ($(this).data("target") + "").split(","),
            a = t.length;
        if ("mouseenter" == e.type) {
            for (var s = 0; a > s; s++) $("[data-cell='" + t[s] + "']").addClass("hover");
            roulette_bet[$(this).data("target") + ""] > 0 && $("[data-receive='" + $(this).data("target") + "']").addClass("active")
        } else {
            for (var s = 0; a > s; s++) $("[data-cell='" + t[s] + "']").removeClass("hover");
            $("[data-receive='" + $(this).data("target") + "']").removeClass("active")
        }
    }), $(".chips .chip").click(function() {
        $(".chips .chip").removeClass("selected"), $(this).addClass("selected"), gs = parseFloat($(this).data("chip"))
    }), $(".roulette .spin").click(function() {
        l(o(roulette_bet))
    });
    var Ps = {
        5: 0,
        24: -9.7297297297297,
        16: -19.459459459459,
        33: -29.189189189189,
        1: -38.918918918919,
        20: -48.648648648649,
        14: -58.378378378378,
        31: -68.108108108108,
        9: -77.837837837838,
        22: -87.567567567568,
        18: -97.297297297297,
        29: -107.02702702703,
        7: -116.75675675676,
        28: -126.48648648649,
        12: -136.21621621622,
        35: -145.94594594595,
        3: -155.67567567568,
        26: -165.40540540541,
        0: -175.13513513514,
        32: -184.86486486486,
        15: -194.59459459459,
        19: -204.32432432432,
        4: -214.05405405405,
        21: -223.78378378378,
        2: -233.51351351351,
        25: -243.24324324324,
        17: -252.97297297297,
        34: -262.7027027027,
        6: -272.43243243243,
        27: -282.16216216216,
        13: -291.89189189189,
        36: -301.62162162162,
        11: -311.35135135135,
        30: -321.08108108108,
        8: -330.81081081081,
        23: -340.54054054054,
        10: -350.27027027027
    };
    $(document.body).on("click", ".bitdrop [data-prize], .my_rows [data-prize]", function() {
        for (var e = $(this).data("prize").split(","), t = 0; 17 > t; t++) $(".bitdrop input.prize:nth-child(" + (t + 1) + ")").val(e[t]), $(".bitdrop .prizes.purple").find(".prize:nth-child(" + (t + 2) + ")").html(e[t]);
        b(e, "bitdrop")
    }), $(".bitdrop input.prize").on("keyup change", function(e) {
        var t = [];
        if ($(".bitdrop input.prize").each(function() {
                var e = Math.min(ps[t.length], $(this).val());
                e = Math.max(0, e), e > 100 ? e = Math.floor(e) : e > 10 ? e = Math.floor(10 * e + .05) / 10 : 10 > e && (e = Math.floor(100 * e + .005) / 100), t.push(e)
            }), "change" == e.type) {
            var a = Math.min(ps[$(this).index()], $(this).val());
            a = Math.max(0, a), a > 100 ? a = Math.floor(a + .5) : a > 10 ? a = Math.floor(10 * a + .05) / 10 : 10 > a && (a = Math.floor(100 * a + .005) / 100), $(this).val(a)
        }
        if (b(t, "bitdrop"), .983 >= p(t, "bitdrop")) {
            var s = 0;
            $(".bitdrop .prizes.purple").find(".prize:not(:first-child):not(.side-prize)").each(function() {
                $(this).html(t[s]), s++
            })
        }
    }), $(".bitdrop .mirror").click(function() {
        var e = 0,
            t = "left" == $(this).data("mirror");
        t || (t = -1, e = 16);
        for (var a = e; 1 != t ? a > 8 : 8 > a; a += t) {
            var s = $(".bitdrop .prizes.purple"),
                i = $(s).find("input:nth-child(" + (a + 1) + ")").val();
            $(s).find("input:nth-child(" + (17 - a) + ")").val(i), $(".bitdrop input.prize:first-child").trigger("keyup")
        }
    }), $(".bitdrop .clear").click(function() {
        $(".bitdrop input.prize").val("0"), $(".bitdrop input.prize:first-child").trigger("keyup")
    }), $(".bitdrop .save").click(function() {
        var e = [];
        $(".bitdrop input.prize").each(function() {
            e.push($(this).val())
        }), T(e), alert("Row saved! You may view it in 'My Rows'")
    }), $(document.body).on("click", ".tab-container .share", function() {
        prompt("This URL will load your custom row!", window.location.origin + "?custom=" + $(this).data("prize-share"))
    }), $(".bitdrop .close").click(function() {
        $(".bitdrop .expander").addClass("hiding"), $(".bitdrop .expand").removeClass("hiding")
    }), $(".bitdrop .expand").click(function() {
        $(".bitdrop .expand").addClass("hiding"), $(".bitdrop ." + $(this).data("target")).removeClass("hiding")
    }), $(".bitdrop .play").on("click", function() {
        us || $(".bitdrop .ball").removeClass("red").removeClass("green").removeClass("teal").removeClass("blue").removeClass("purple").addClass($(this).data("color")), gt($(this).data("color"), $(this).data("rownum"))
    }), $(".bitdrop .bet-max").click(function() {
        ia(function() {
            var e = Math.max(parseInt($("#bits").val()), 1);
            if (isNaN(e) && (e = 1), "tokens" != bs) var t = (oa(bs) / e - 4.99e-9).toFixed(8);
            else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", "")) / e);
            $("#bet").val(t)
        })
    }), $(document.body).on("click", ".remove-row", function() {
        R($(this).data("id"))
    }), $(document.body).on("click", ".bitspin .share", function() {
        var e = [];
        $(".bitspin input.prize").each(function() {
            e.push($(this).val())
        }), prompt("This URL will load your custom wheel!", window.location.origin + "?custom_bitspin=" + ("" + e))
    }), $(document.body).on("click", ".bitspin [data-prize]", function() {
        for (var e = $(this).data("prize").split(","), t = 0; 16 > t; t++) $(".bitspin input.prize:nth-child(" + (t + 1) + ")").val(e[t]), $(".bitspin .prizes.purple").find(".prize:nth-child(" + (t + 2) + ")").html(e[t]);
        b(e, "bitspin"), N(e)
    }), $(".bitspin input.prize").on("keyup change", function(e) {
        var t = [];
        if ($(".bitspin input.prize").each(function() {
                var e = Math.min(ps[t.length], $(this).val());
                e = Math.max(0, e), e > 100 ? e = Math.floor(e) : e > 10 ? e = Math.floor(10 * e + .05) / 10 : 10 > e && (e = Math.floor(100 * e + .005) / 100), t.push(e)
            }), "change" == e.type) {
            var a = Math.min(ps[$(this).index()], $(this).val());
            a = Math.max(0, a), a > 100 ? a = Math.floor(a + .5) : a > 10 ? a = Math.floor(10 * a + .05) / 10 : 10 > a && (a = Math.floor(100 * a + .005) / 100), $(this).val(a)
        }
        if (b(t, "bitspin"), .9825 >= p(t, "bitspin")) {
            var s = 0;
            $(".bitspin .prizes.purple").find(".prize:not(:first-child):not(.side-prize)").each(function() {
                $(this).html(t[s]), s++
            }), N(t)
        }
    }), $(".bitspin .close").click(function() {
        $(".bitspin .expander").addClass("hiding"), $(".bitspin .expand").removeClass("hiding")
    }), $(".bitspin .expand").click(function() {
        $(".bitspin .expand").addClass("hiding"), $(".bitspin ." + $(this).data("target")).removeClass("hiding")
    }), $(".bitspin .mirror").click(function() {
        var e = 0,
            t = "left" == $(this).data("mirror");
        t || (t = -1, e = 16);
        for (var a = e; 1 != t ? a >= 8 : 8 >= a; a += t) {
            var s = $(".bitspin .prizes.purple"),
                i = $(s).find("input:nth-child(" + (a + 1) + ")").val();
            $(s).find("input:nth-child(" + (16 - a) + ")").val(i), $(".bitspin input.prize:first-child").trigger("keyup")
        }
    }), $(".bitspin .clear").click(function() {
        $(".bitspin input.prize").val("0"), $(".bitspin input.prize:first-child").trigger("keyup")
    }), $(".bitspin .bet-max").click(function() {
        ia(function() {
            var e = oa(bs);
            if ("tokens" != bs) var t = e.toFixed(8);
            else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", ""))).toFixed(0);
            $("#bitspin_bet").val(t)
        })
    }), $(".bitspin .double").click(function() {
        var e = oa(bs);
        if ("tokens" != bs) var t = e;
        else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", "")));
        var a = 2 * parseFloat($("#bitspin_bet").val());
        !isNaN(a) && 0 != a || "tokens" == bs ? (isNaN(a) || 0 == a) && (a = 1) : a = 1e-8, a > t && (a = t), a = "tokens" != bs ? a.toFixed(8) : a.toFixed(0), $("#bitspin_bet").val(a)
    }), $(".bitspin .half").click(function() {
        var e = oa(bs);
        if ("tokens" != bs) var t = e;
        else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", "")));
        var a = parseFloat($("#bitspin_bet").val()) / 2;
        !isNaN(a) && 0 != a || "tokens" == bs ? (isNaN(a) || 0 == a) && (a = 1) : a = 1e-8, a > t && (a = t), a = "tokens" != bs ? a.toFixed(8) : a.toFixed(0), $("#bitspin_bet").val(a)
    }), $(".bitspin .spin").click(function() {
        if (!us) {
            var e = $(this).data("rownum"),
                t = prize_bitspin[hs[e]];
            N(t), S(t)
        }
    }), $(".bitspin .spin").on("mouseenter", function() {
        if (!us) {
            var e = $(this).data("rownum"),
                t = prize_bitspin[hs[e]];
            N(t)
        }
    });
    var Bs = {
            spot: {
                red: {
                    0: [0],
                    1: [0, 3],
                    2: [0, 0, 16],
                    3: [0, 0, 1, 60],
                    4: [0, 0, 1, 7, 152],
                    5: [0, 0, 0, 2, 14, 1e3],
                    6: [0, 0, 0, 2, 5, 135, 1250],
                    7: [0, 0, 0, 0, 2, 26, 634, 7777],
                    8: [0, 0, 0, 0, 1, 4, 156, 2590, 1e4],
                    9: [0, 0, 0, 0, 0, 6, 53, 530, 5e3, 1e4],
                    10: [0, 0, 0, 0, 0, 0, 20, 207, 2690, 8888, 10008]
                },
                orange: {
                    0: [0],
                    1: [0, 3],
                    2: [0, 0, 16],
                    3: [0, 0, 2, 50],
                    4: [0, 0, 2, 4, 125],
                    5: [0, 0, 0, 3, 13, 890],
                    6: [0, 0, 0, 3, 5, 93, 1250],
                    7: [0, 0, 0, 1, 2, 23, 439, 7520],
                    8: [0, 0, 0, 0, 1, 11, 107, 2514, 1e4],
                    9: [0, 0, 0, 0, 1, 5, 40, 518, 5e3, 1e4],
                    10: [0, 0, 0, 0, 0, 3, 30, 165, 1379, 5e3, 1e4]
                },
                green: {
                    0: [0],
                    1: [0, 3],
                    2: [0, 1, 10],
                    3: [0, 0, 3, 40],
                    4: [0, 0, 2, 5, 111],
                    5: [0, 0, 0, 3, 14, 871],
                    6: [0, 0, 0, 3, 6, 84, 1250],
                    7: [0, 0, 0, 1, 3, 23, 403, 6463],
                    8: [0, 0, 0, 0, 2, 13, 105, 1807, 1e4],
                    9: [0, 0, 0, 0, 1, 7, 43, 379, 5e3, 1e4],
                    10: [0, 0, 0, 0, 0, 5, 25, 147, 1257, 5e3, 1e4]
                },
                teal: {
                    0: [0],
                    1: [0, 3],
                    2: [0, 2, 3],
                    3: [0, 0, 4, 30],
                    4: [0, 1, 1, 3, 67],
                    5: [0, 0, 1, 3, 11, 508],
                    6: [0, 0, 0, 3, 7, 85, 1012],
                    7: [0, 0, 1, 1, 2, 16, 159, 5e3],
                    8: [0, 0, 0, 1, 2, 13, 75, 979, 7500],
                    9: [0, 0, 0, 1, 2, 5, 20, 213, 3007, 1e4],
                    10: [0, 0, 0, 1, 2, 3, 6, 52, 704, 2888, 8888]
                },
                blue: {
                    0: [0],
                    1: [0, 3],
                    2: [1, 0, 7],
                    3: [0, 1, 2, 19],
                    4: [2, 0, 1, 1, 36],
                    5: [2, 0, 0, 2, 3, 503],
                    6: [3, 0, 0, 2, 3, 13, 757],
                    7: [4, 0, 0, 1, 3, 10, 80, 826],
                    8: [4, 0, 0, 1, 2, 7, 30, 249, 2999],
                    9: [3, 0, 0, 1, 2, 3, 14, 118, 2017, 5500],
                    10: [8, 0, 0, 0, 1, 3, 14, 46, 498, 2e3, 4e3]
                }
            },
            tb: {
                red: [12500, 7777, 2783, 477, 31, 17, 2, 1, 0, 0, 0],
                orange: [12500, 5e3, 507, 252, 34, 12, 3, 2, 1, 0, 0],
                green: [12500, 5e3, 330, 125, 36, 13, 4, 2, 1, 0, 0],
                teal: [1e4, 4e3, 307, 74, 25, 14, 5, 2, 1, 0, 0],
                blue: [5e3, 2e3, 143, 25, 18, 10, 5, 2, 2, 0, 0]
            }
        },
        Os = "spot",
        As = "green",
        Ds = 0,
        Ls = 0,
        Es = [],
        Us = !0,
        Hs = !1,
        Ks = [],
        Js = "spot";
    if (j(), $(".keno .bet-max").click(function() {
            ia(function() {
                var e = oa(bs);
                if ("tokens" != bs) var t = e.toFixed(8);
                else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", ""))).toFixed(0);
                $("#keno_bet").val(t)
            })
        }), $(".keno .keno-double").click(function() {
            var e = oa(bs);
            if ("tokens" != bs) var t = e;
            else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", "")));
            var a = 2 * parseFloat($("#keno_bet").val());
            !isNaN(a) && 0 != a || "tokens" == bs ? (isNaN(a) || 0 == a) && (a = 1) : a = 1e-8, a > t && (a = t), a = "tokens" != bs ? a.toFixed(8) : a.toFixed(0), $("#keno_bet").val(a).change()
        }), $(".keno .keno-half").click(function() {
            var e = oa(bs);
            if ("tokens" != bs) var t = e;
            else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", "")));
            var a = parseFloat($("#keno_bet").val()) / 2;
            !isNaN(a) && 0 != a || "tokens" == bs ? (isNaN(a) || 0 == a) && (a = 1) : a = 1e-8, a > t && (a = t), a = "tokens" != bs ? a.toFixed(8) : a.toFixed(0), $("#keno_bet").val(a).change()
        }), $(".keno-repeat").click(function() {
            us || (sound.keno_ui.pause(), sound.keno_ui.currentTime = 0, sound.keno_ui.play(), $(".keno-cell").removeClass("hit marked"), $(".bottom-half, .top-half").removeClass("marked"), $(".keno-mode-select[data-mode='" + Js + "']").click(), "spot" == Os ? (Ks.forEach(function(e) {
                $(".keno-cell[data-cell='" + e + "']").addClass("marked")
            }), Ls = $(".keno-cell.marked").length) : ("TOP" == Ks ? $(".top-half").addClass("marked") : "BOT" == Ks && $(".bottom-half").addClass("marked"), Ls = Ks), j())
        }), $(".play-keno").click(function() {
            Hs = !1, O()
        }), $(".keno-payline").change(function() {
            As = $(this).val(), j()
        }), $(".keno-mode-select").click(function() {
            us || ($(".keno-mode-select").removeClass("selected"), $(this).addClass("selected"), Os = $(this).data("mode"), $(".ui-playarea").removeClass("mode-spot mode-tb"), $(".ui-paytable").removeClass("mode-spot mode-tb"), $(".ui-playarea").addClass("mode-" + $(this).data("mode")), $(".ui-paytable").addClass("mode-" + $(this).data("mode")), q(), j())
        }), $(".top-half, .bottom-half").click(function() {
            us || "tb" == Os && (q(), $(this).addClass("marked"), Ls = "top" == $(this).data("side") ? "TOP" : "BOT", j(), sound.keno_ui.pause(), sound.keno_ui.currentTime = 0, sound.keno_ui.play())
        }), $(".keno-clear").click(function() {
            us || q()
        }), $(".keno-cell:not(.break)").mousedown(function(e) {
            if (!us && 0 == e.button) {
                var t = $(this).hasClass("marked");
                Us = t, Hs = !0, t ? ($(this).removeClass("marked"), Ls--) : 10 > Ls && ($(this).addClass("marked"), sound.keno_ui.pause(), sound.keno_ui.currentTime = 0, sound.keno_ui.play(), Ls++), j()
            }
        }), $(".keno-cell").mouseup(function() {
            Hs = !1
        }), $(".ui-playarea").mouseleave(function() {
            Hs = !1
        }), $(".keno-cell:not(.break)").mouseenter(function() {
            if (!us && Hs) {
                var e = Us;
                e && $(this).hasClass("marked") ? ($(this).removeClass("marked"), Ls--) : !e && 10 > Ls && !$(this).hasClass("marked") && ($(this).addClass("marked"), Ls++, sound.keno_ui.pause(), sound.keno_ui.currentTime = 0, sound.keno_ui.play()), j()
            }
        }), $(document.body).on("click", ".slot .share", function() {
            var e = [];
            $(".slot input.prize").each(function() {
                e.push($(this).val())
            }), prompt("This URL will load your custom paytable!", window.location.origin + "?custom_slot=" + ("" + e))
        }), $(".slot .spin").click(function() {
            if (!us) {
                var e = $(this).data("rownum"),
                    t = "" + prize_slot[hs[e]];
                L(t)
            }
        }), $(".slot .close").click(function() {
            $(".slot .expander").addClass("hiding"), $(".slot .expand").removeClass("hiding")
        }), $(".slot .expand").click(function() {
            $(".slot .expand").addClass("hiding"), $(".slot ." + $(this).data("target")).removeClass("hiding")
        }), $(".slot .clear").click(function() {
            $(".slot input.prize").val("0"), $(".slot input.prize:first-child").trigger("keyup")
        }), $(document.body).on("click", ".slot [data-prize]", function() {
            for (var e = $(this).data("prize").split(","), t = 0; 24 > t; t++) $(".slot input.prize:nth-child(" + (t + 1) + ")").val(e[t]), $(".slot .prizes.purple").find(".prize:nth-child(" + (t + 2) + ")").html(e[t]);
            b(e, "slot")
        }), $(".slot input.prize").on("keyup change", function(e) {
            var t = [];
            if ($(".slot input.prize").each(function() {
                    var e = Math.min(xs[t.length], $(this).val());
                    e = Math.max(0, e), e = Math.floor(e), t.push(e)
                }), "change" == e.type) {
                var a = Math.min(xs[$(this).index()], $(this).val());
                a = Math.max(0, a), a = Math.floor(a), $(this).val(a)
            }
            if (b(t, "slot"), .9825 >= p(t, "slot")) {
                var s = 0;
                $(".slot .prizes.purple").find(".prize:not(:first-child):not(.side-prize)").each(function() {
                    $(this).html(t[s]), s++
                })
            }
        }), $(".slot .bet-max").click(function() {
            ia(function() {
                var e = Math.max(parseInt($("#slot_lines").val()), 1);
                isNaN(e) && (e = 1);
                var t = oa(bs);
                if ("tokens" != bs) var a = (t / e - 4.99e-9).toFixed(8);
                else var a = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", "")) / e).toFixed(0);
                $("#slot_bet").val(a)
            })
        }), game && ($(document).keydown(function(e) {
            if (27 == e.keyCode && da(), e.altKey && e.ctrlKey && (Ba ? $(document.body).addClass("permission-hide") : $(document.body).removeClass("permission-hide"), e.preventDefault()), Pa && 0 == $("input:focus:not([readonly])").length)
                if (16 == e.keyCode) $(".hkey:not(.hiding):not(.hiding *)").tooltip("show");
                else if (e.shiftKey) {
                var t = $(".k" + e.keyCode + ":not(.hiding):not(.hiding *)");
                if ($(t).click(), X(), $(t).length > 0) return e.preventDefault(), !1
            }
        }), $(document).keyup(function(e) {
            16 == e.keyCode && $(".hkey").tooltip("hide"), 18 != e.keyCode && 17 != e.keyCode || e.altKey && e.ctrlKey || (e.preventDefault(), Ba ? $(document.body).removeClass("permission-hide") : $(document.body).addClass("permission-hide"))
        })), $(window).blur(function() {
            $(".hkey").tooltip("hide")
        }), $(".tab").click(function() {
            var e = $(this).data("tab");
            if ("" != e) {
                if ($(this).hasClass("active")) return $(".tab").removeClass("active").popover("hide"), $(document.body).addClass("hide-sidebar"), void 0;
                $(document.body).removeClass("hide-sidebar"), $(".tab").removeClass("active").popover("hide"), $(this).addClass("active"), $(".section").addClass("closed"), $(".section." + e).removeClass("closed"), $(".tab-container").removeClass("closed"), "faucet" == e ? Q("faucet-captcha") : "chat" == e ? (rs || $(".chat-message").focus(), $(".chat-container").scrollTop(999999), fs > 0 && ("all" == Ka || "inbox" == Ka && Sa) && ($.post("read_pms.php"), ht(0), fs = 0), vs = 0, pt(0)) : "account" == e && $(document.body).hasClass("logged-out") && $(".section." + e).find("[name='username']").focus()
            }
        }), $("#recaptcha_response_field").on("keydown", function(e) {
            13 == e.keyCode && Z()
        }), $("#submitCaptcha").on("click", function() {
            Z()
        }), $(".close-sidebar").click(function() {
            $(".tab-container").addClass("closed"), $(".tab").removeClass("active")
        }), game) {
        var Ys = new Date;
        Ys.getTime();
        var Gs = 0,
            Vs = !1;
        setInterval(function() {
            tt()
        }, 25), at()
    }
    $(function() {
        game && ($("[tooltip-new]").each(function() {
            $(this).tooltip({
                placement: $(this).attr("data-placement"),
                container: "body",
                title: $(this).attr("tooltip-title")
            }).tooltip("show")
        }), "" == $(".player-seed").val() && $(".player-seed").val(It()), 0 == ts && "" == Jt("s") && "" == Yt("secret") && (window.location.hash = "account-create", setTimeout(function() {
            $("[popover-instant]").each(function() {
                $(this).popover({
                    placement: $(this).attr("data-placement"),
                    container: "body",
                    content: $(this).attr("popover-content"),
                    title: $(this).attr("popover-title")
                }).popover("show")
            })
        }, 100)))
    }), $(".randomize").click(function() {
        $(".player-seed").val(It())
    }), $(".sign-out").click(function() {
        ($(document.body).hasClass("account-full") || confirm("This is a temporary account!\r\nIf you have not saved your secret URL, you will not be able to sign in to this account again!\r\nPlease OK to continue, or Cancel to remain signed in.")) && $.post("logout.php", function(e) {
            et(e), es = "", $(document.body).addClass("logged-out").removeClass("logged-in"), $("input:not([type='hidden'])").val(""), lt(".tfa-qr", ""), lt(".address-qr", ""), $(".tfa-key-text").html(""), $(".active-investment-container").html(""), $(".complete-investment-container").html(""), $(".deposit-address").html("Please Sign In"), $(".chat-2 .chat-container").html(""), $(".chat-3 .chat-container").html(""), $(".randomize").click()
        })
    }), $(document.body).on("click", "form[action]:not([method='get']) .submit", function(e) {
        return e.isPropagationStopped() || st($(this).parent()), e.stopPropagation(), !1
    }), $(document.body).on("keydown", "form[action]:not([method='get'])", function(e) {
        return 13 != e.keyCode || e.isPropagationStopped() ? void 0 : (st($(this)), !1)
    }), $("#ticketsubmit").on("click", function(e) {
        e.stopPropagation(), st($(this).parent().parent().parent().parent().parent())
    }), $("#closeticket").on("click", function(e) {
        e.stopPropagation(), st($(this).parent(), {
            name: "close_ticket",
            value: "1"
        })
    }), $(document.body).on("click", ".channel", function() {
        var e = $(this).data("channel");
        $(".channel.active").removeClass("unread").removeClass("active"), $(this).addClass("active").removeClass("unread"), $(".chat-section").addClass("inactive"), $(".chat-section.chat-" + e).removeClass("inactive"), Ta = e, $(".chat-container").scrollTop(999999), 1 == $(".channel.active[data-channel='3']").length ? (Sa = !0, "inbox" == Ka && fs > 0 && $.post("read_pms.php"), ht(0), fs = 0) : (Sa && ($(".infobox.unread-notice").remove(), Na = !1), Sa = !1)
    }), $(".chat-container").on("click", ".rate-button", function(e) {
        var t = $(this).data("act"),
            a = "deleting";
        if ("plus_chat" == t && (a = "+ing"), "minus_chat" == t && (a = "-ing"), e.shiftKey || confirm("Confirm " + a + ' "' + $(this).parent().parent().parent().text() + '"?\nShift-click to bypass confirmation.')) {
            var s = [],
                i = $(this).parent().data("id");
            s.push({
                name: "token",
                value: Za
            }), s.push({
                name: "c",
                value: chat_id
            }), s.push({
                name: "act",
                value: t
            }), s.push({
                name: "id",
                value: i
            }), $.post("action.php", $.param(s), function(e) {
                void 0 === e.success || e.success || ca(e.msg)
            })
        }
    }), $(document.body).click(function() {
        $("span.success:not(.sticky), span.error:not(.sticky), #captchaMessage").fadeOut(100)
    }), $(".create-account").click(function() {
        $.post("create.php", {
            r: as
        }, function(e) {
            et(e.data, "html", e), $(".server-hash").val(e.hash), $(document.body).addClass("account-temp").removeClass("account-full"), Tt(), ra(e.data, e)
        })
    }), $(".create-key").click(function() {}), $(".active-investment-container").on("click", "button.divest-action", function() {
        var e = $(this).parent().data("divest-id"),
            t = {
                act: "divest",
                id: e,
                token: Za
            },
            a = $(this);
        "" != es && (t.secret = es), $.post("action.php", t, function(e) {
            e.success ? (a.parent().parent().parent().remove(), et(e.data, "html", e)) : alert(e.msg)
        })
    }), $(".show-complete").click(function() {
        $(".invest-table-complete").removeClass("hide"), $(this).remove()
    }), $(window).on("hashchange", function() {
        var e = window.location.hash;
        if ("#account-create" == e) $(".tab[data-tab='account']").hasClass("active") || $(".tab[data-tab='account']").click(), $(".create-account").click(), window.location.hash = "create";
        else if ("#account" == e) $(".tab[data-tab='account']").click(), $(".tab-container").addClass("active"), window.location.hash = "acc";
        else if ("#funds" == e) $(".tab[data-tab='funding']").click(), $(".tab-container").addClass("active"), window.location.hash = "fund";
        else if ("#result" == e.substr(0, 7)) {
            window.location.hash = "";
            var t = e.split(","),
                a = t[1],
                s = t[2];
            if (t.length >= 3 && (t = t.splice(2, t.length), s = t.join("")), $(".tab[data-tab='chat']").hasClass("active") || $(".tab[data-tab='chat']").click().addClass("active"), s === void 0 || 0 >= s) return;
            ft(a, s)
        } else if ("#user" == e.substr(0, 5)) {
            window.location.hash = "";
            var i = e.split(",");
            if ($(".tab[data-tab='chat']").hasClass("active") || $(".tab[data-tab='chat']").click().addClass("active"), i[1] === void 0 || "" == i[1]) return;
            $t(i[1])
        } else if ("#pm_to" == e.substr(0, 6)) {
            window.location.hash = "";
            var i = e.split(",");
            if (i[1] === void 0 || "" == i[1]) return;
            bt(i[1])
        } else if ("#tip_to" == e.substr(0, 7)) {
            window.location.hash = "";
            var i = e.split(",");
            if (i[1] === void 0 || "" == i[1]) return;
            vt(i[1])
        } else if ("#faucet" == e.substr(0, 7)) {
            window.location.hash = "";
            var n = e.split(",");
            if (n[1] === void 0) return;
            $("#recaptcha_bonus_field").val(n[1]), $(".tab[data-tab='faucet']").click(), $(".tab-container").addClass("active")
        }
    }), $("#invest-quantity").on("change keyup", function() {
        Ct()
    }), $("#invest-multiplier").on("change keyup", function() {
        Ct()
    }), $(".bet-select .filter").click(function() {
        fa = $(this).data("filter"), $(".bet-select .filter").removeClass("active"), $(this).addClass("active"), va(fa)
    }), $(document.body).on("click", function() {
        $(".contextMenu").css("display", "none")
    }), $(".chat-container").on("contextmenu", ".msg b", function(e) {
        e.preventDefault();
        var t = $(this).data("name"),
            a = $(".contextMenu");
        $(a).find(".title").html(t);
        var s = e.pageY;
        s > $(window).height() - 400 && (s = $(window).height() - 400), $(a).css("left", e.pageX + "px").css("top", s + "px").css("display", "block")
    }), $(document.body).on("click", ".contextMenu", function(e) {
        e.stopPropagation()
    }), $(document.body).on("click", ".contextMenu .item", function() {
        var e = $(".contextMenu .title").html(),
            t = $(this).data("instant"),
            a = $(this).data("act");
        t ? ($("#nullChat input[name='message']").val("/" + a + " " + e + " "), st($("#nullChat"))) : $(".chat-" + Ta + " .chat-input input[name='message']").val("/" + a + " " + e + " ").focus(), $(".contextMenu").css("display", "none")
    }), $(".validate").click(function() {
        Rt($(this).parent().parent())
    }), $(".validation").keydown(function(e) {
        13 == e.keyCode && Rt($(this))
    }), $(".advanced").click(function() {
        $(document.body).toggleClass("normal")
    }), $(document.body).on("click", ".remove-key", function() {
        $(this).parent().parent().parent().remove()
    }), $("#game-speed").on("input change", function(e) {
        try {
            Xa = Number($(this).val()), Xa > 8 && (Xa = 999);
            var t = Xa.toFixed(2),
                a = new Date;
            a.setTime(a.getTime() + 31536e6), $("#game-speed-label").html(t + "x"), "change" == e.type && jt(), document.cookie = "game_speed=" + t + ";expires=" + a.toUTCString()
        } catch (s) {}
    }), $("#volume").on("input change", function(e) {
        try {
            Qa = Number($(this).val()), Qa > 100 && (Qa = 100);
            var t = Qa.toFixed(0),
                a = new Date;
            a.setTime(a.getTime() + 31536e6), $("#volume-label").html(t + "%"), "change" == e.type && qt(), document.cookie = "volume=" + t + ";expires=" + a.toUTCString()
        } catch (s) {}
    }), $("#exchange-tokens").on("input change", function() {
        try {
            var e = 1,
                t = Number($(this).val()),
                a = Math.floor(t / 1e3) + "K";
            t >= 1e6 && (a = Math.floor(t / 1e6) + "M"), t >= 1e6 ? ($(".exchange-button").removeClass("red orange teal blue purple").addClass("green"), e = 1.1) : t >= 75e4 ? ($(".exchange-button").removeClass("red orange green blue purple").addClass("teal"), e = 1.04) : t >= 5e5 ? ($(".exchange-button").removeClass("red orange green teal purple").addClass("blue"), e = 1) : t >= 25e4 ? ($(".exchange-button").removeClass("red orange green teal blue").addClass("purple"), e = .96) : t >= 1e5 ? ($(".exchange-button").removeClass("orange green teal blue purple").addClass("red"), e = .6) : ($(".exchange-button").removeClass("red green teal blue purple").addClass("orange"), e = .18333);
            var s = " +" + (100 * e / .18333 - 100).toFixed(0) + "%";
            $("#exchange-tokens-label").html(a + " <small>" + s + "</small>"), $(".exchange-button").each(function() {
                var a = exchange_rate[$(this).data("exchange")] * t * e / 1e8;
                value_format = 1e-4 > a ? "<d>" + (1e8 * a).toFixed(0) + "<small>SAT</small> " + $(this).data("exchange") + "</d>" : .0011 > a ? "<small>" + a.toFixed(5).substr(1) + $(this).data("exchange") + "</small>" : .011 > a ? a.toFixed(4).substr(1) + $(this).data("exchange") : 1 > a ? a.toFixed(3).substr(1) + $(this).data("exchange") : 10 > a ? a.toFixed(3) + $(this).data("exchange") : 1e3 > a ? a.toFixed(0) + $(this).data("exchange") : 5e3 > a ? "<span style='letter-spacing:-0.04em'>" + (a / 1e3).toFixed(1) + "K" + $(this).data("exchange") + "</span>" : "<span style='letter-spacing:-0.05em'>" + (a / 1e3).toFixed(0) + "K" + $(this).data("exchange") + "</span>", $(this).html(value_format), $(this).data("quantity", a), $(this).data("tokens", t)
            })
        } catch (i) {}
    }), $(".exchange-button").click(function() {
        if (confirm("Exchange " + St($(this).data("tokens")) + " tokens for " + $(this).data("quantity").toFixed(8) + " " + $(this).data("exchange") + "?")) {
            var e = {
                act: "trade",
                quantity: $(this).data("tokens"),
                currency: $(this).data("exchange").toLowerCase(),
                token: Za
            };
            "" != es && (e.secret = es), $.post("action.php", e, function(e) {
                e.success ? alert(e.msg) : alert(e.msg)
            })
        }
    }), $("#min-bet").on("input change", function() {
        Va = Number($(this).val());
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "min_bet=" + Va + ";expires=" + e.toUTCString(), va(fa)
    }), $("#min-win").on("input change", function() {
        Wa = Number($(this).val());
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "min_win=" + Wa + ";expires=" + e.toUTCString(), va(fa)
    }), $("#min-level").on("input change", function() {
        Ga = Number($(this).val());
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "min_level=" + Ga + ";expires=" + e.toUTCString(), va(fa)
    }), $(".currency").click(function() {
        us || Ss.status.active || ($(".game_bet").val(""), ws = Math.random().toString(32).substring(7), bs = $(this).data("currency"), $(".currency:not([data-currency='" + bs + "'])").addClass("inactive"), $(".currency[data-currency='" + bs + "']").removeClass("inactive"), $(document.body).removeClass("bitcoins").removeClass("tokens").removeClass("litecoins").removeClass("ethers").removeClass("dogecoins").removeClass("bcash"), $(document.body).addClass(bs), $.post("update.php", {
            m: os,
            c: chat_id,
            g: game_id,
            u: $s,
            k: ws
        }, function(e) {
            et(e.data, "html", e)
        }), "bitcoins" == bs ? ($(".cur-name").html("BTC"), $(".roulette-cur").html("<i class='icon-btc'></i>")) : "ethers" == bs ? ($(".cur-name").html("ETH"), $(".roulette-cur").html(" ETH")) : "litecoins" == bs ? ($(".cur-name").html("LTC"), $(".roulette-cur").html(" LTC")) : "bcash" == bs ? ($(".cur-name").html("BCH"), $(".roulette-cur").html(" BCH")) : "dogecoins" == bs ? ($(".cur-name").html("DOGE"), $(".roulette-cur").html(" DOGE")) : ($(".cur-name").html("T."), $(".roulette-cur").html(" T.")), $("#dice_bet").change(), j(), "bitcoins" == bs ? $("#bet, #bitspin_bet, #slot_bet, #dice_bet, #keno_bet").prop("placeholder", "Bet (BTC)") : "ethers" == bs ? $("#bet, #bitspin_bet, #slot_bet, #dice_bet, #keno_bet").prop("placeholder", "Bet (ETH)") : "litecoins" == bs ? $("#bet, #bitspin_bet, #slot_bet, #dice_bet, #keno_bet").prop("placeholder", "Bet (LTC)") : "dogecoins" == bs ? $("#bet, #bitspin_bet, #slot_bet, #dice_bet, #keno_bet").prop("placeholder", "Bet (DOGE)") : "bcash" == bs ? $("#bet, #bitspin_bet, #slot_bet, #dice_bet, #keno_bet").prop("placeholder", "Bet (BCH)") : $("#bet, #bitspin_bet, #slot_bet, #dice_bet, #keno_bet").prop("placeholder", "Bet (TOK)"))
    }), $(".hotkey").click(function() {
        Pa = Boolean($(this).data("hotkey")), $(".hotkey").addClass("inactive"), $(this).removeClass("inactive");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "hotkey=" + (Number(Pa) + "") + ";expires=" + e.toUTCString()
    }), $(".allowmax").click(function() {
        Da = Boolean($(this).data("allowmax")), $(".allowmax").addClass("inactive"), $(this).removeClass("inactive");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "allowmax=" + (Number(Da) + "") + ";expires=" + e.toUTCString()
    }), $(".inbox_channel").click(function() {
        Ha = parseInt($(this).data("inbox_channel")), Ka = "inbox", 1 === Ha && (Ka = "all"), $(".inbox_channel").addClass("inactive"), $(this).removeClass("inactive");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "inbox_channel=" + (Ha + "") + ";expires=" + e.toUTCString()
    }), $(".mtools").click(function() {
        Ba = Boolean($(this).data("mtools")), $(".mtools").addClass("inactive"), $(this).removeClass("inactive"), Ba ? $(document.body).removeClass("permission-hide") : $(document.body).addClass("permission-hide");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "mtools=" + (Number(Ba) + "") + ";expires=" + e.toUTCString()
    }), $(".bigwinlevel").click(function() {
        Ya = parseInt($(this).data("bigwinlevel")), Ja = "normal", 1 == Ya && (Ja = "high"), 2 == Ya && (Ja = "off"), $(".bigwinlevel").addClass("inactive"), $(this).removeClass("inactive");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "bigwinlevel=" + (Ya + "") + ";expires=" + e.toUTCString()
    }), $(".api").click(function() {
        api = Boolean($(this).data("api")), $(".api").addClass("inactive"), $(this).removeClass("inactive");
        var e = "enable_api";
        api || (e = "disable_api");
        var t = {
            act: e,
            token: Za
        };
        "" != es && (t.secret = es), $.post("action.php", t, function(e) {
            e.success ? e.api_enabled ? $(".api-key").html(e.api_key) : $(".api-key").html("API Disabled") : alert(e.msg)
        })
    }), $(".mystats").click(function() {
        mystats = Boolean($(this).data("mystats")), $(".mystats").addClass("inactive"), $(this).removeClass("inactive");
        var e = "enable_mystats";
        mystats || (e = "disable_mystats");
        var t = {
            act: e,
            token: Za
        };
        "" != es && (t.secret = es), $.post("action.php", t, function(e) {
            e.success || alert(e.msg)
        })
    }), $(".online-status").click(function() {
        online_status = $(this).data("online-status"), $(".online-status").addClass("inactive"), $(this).removeClass("inactive");
        var e = "online_status",
            t = {
                act: e,
                token: Za,
                status: online_status
            };
        "" != es && (t.secret = es), $.post("action.php", t, function(e) {
            e.success || alert(e.msg)
        })
    }), $(".pm-setting").click(function() {
        accept_pms = $(this).data("pm-setting"), $(".pm-setting").addClass("inactive"), $(this).removeClass("inactive");
        var e = "accept_pms",
            t = {
                act: e,
                token: Za,
                accept: accept_pms
            };
        "" != es && (t.secret = es), $.post("action.php", t, function(e) {
            e.success || alert(e.msg)
        })
    }), $(".social-setting").click(function() {
        La = parseInt($(this).data("social-setting")), $(".social-setting").addClass("inactive"), $(this).removeClass("inactive"), La ? $(document.body).addClass("show-social").removeClass("hide-social") : $(document.body).addClass("hide-social").removeClass("show-social");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "showsocial=" + parseInt(La) + ";expires=" + e.toUTCString()
    }), $(".slide-setting").click(function() {
        Ea = parseInt($(this).data("slide-setting")), $(".slide-setting").addClass("inactive"), $(this).removeClass("inactive");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "mobileslide=" + parseInt(Ea) + ";expires=" + e.toUTCString()
    }), $(".investlock").click(function() {
        if (confirm("Locking your investments cannot be reversed until the time specified.\nPress OK to confirm investment lock.")) {
            duration = parseInt($("#locktime").val());
            var e = {
                act: "lock_invest",
                duration: duration,
                token: Za
            };
            "" != es && (e.secret = es), $.post("action.php", e, function(e) {
                e.success ? $(".investlock").html("Locked: " + duration + " day" + (duration > 1 ? "s" : "")).prop("disabled", !0).removeClass("blue").addClass("red") : alert(e.msg)
            })
        }
    }), $(".theme").click(function() {
        Oa = Boolean($(this).data("theme")), $(".theme").addClass("inactive"), $(this).removeClass("inactive");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "theme=" + (Number(Oa) + "") + ";expires=" + e.toUTCString(), Oa ? ($(document.body).removeClass("light").addClass("dark"), $("meta[name='theme-color']").attr("content", "#181D22")) : ($(document.body).removeClass("dark").addClass("light"), $("meta[name='theme-color']").attr("content", "#4060BC"))
    }), $(".notifications").click(function() {
        Aa = Boolean($(this).data("notifications")), $(".notifications").addClass("inactive"), $(this).removeClass("inactive");
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "notifications=" + (Number(Aa) + "") + ";expires=" + e.toUTCString(), Aa && Pt()
    }), $(document.body).on("click", ".game-select", function() {
        if (!us && !Ss.status.active) {
            ja = $(this).data("game"), cs = !0, $(".game-select").addClass("inactive"), $(".game").removeClass("active"), $(".game." + ja).addClass("active"), "dice" == ja ? ($("#auto-row option").prop("hidden", !0), $("#auto-row .dice-only").prop("hidden", !1), $("#auto-row option").prop("selected", !1), $("#auto-row option.high").prop("selected", !0)) : "keno" == ja ? ($("#auto-row option").prop("hidden", !1), $("#auto-row .dice-only, #auto-row .hide-keno").prop("hidden", !0), $("#auto-row option").prop("selected", !1), $("#auto-row option.red").prop("selected", !0)) : ($("#auto-row option").prop("hidden", !1), $("#auto-row .dice-only").prop("hidden", !0), $("#auto-row option").prop("selected", !1), $("#auto-row option.red").prop("selected", !0)), "roulette" == ja && (Ra || (n(), Ra = !0)), $("[data-game='" + $(this).data("game") + "']").removeClass("inactive"), $(".auto-table").attr("data-game", $(this).data("game"));
            var e = new Date;
            e.setTime(e.getTime() + 31536e6), document.cookie = "selected_game=" + ja + ";expires=" + e.toUTCString()
        }
    }), $(".sidebar-table.collapse th").click(function() {
        var e = $(this).parent().parent().parent();
        e.toggleClass("hidden");
        var t = e.hasClass("hidden"),
            a = ("" + CryptoJS.SHA256($(this).html())).substr(0, 16),
            s = localStorage.getItem("collapse");
        s = null !== s ? JSON.parse(s) : {}, s[a] = t, localStorage.setItem("collapse", JSON.stringify(s))
    }), $("#auto-start-button").click(function() {
        Et()
    }), $("#auto-stop-button").click(function() {
        Lt()
    }), $(".dice input[type='range']").on("change update input", function() {
        var e = $(this);
        width = e.width(), newPoint = (e.val() - e.attr("min")) / (e.attr("max") - e.attr("min")), offset = .57, 0 > newPoint ? newPlace = 0 : newPoint > 1 ? newPlace = width : (newPlace = width * newPoint + offset, offset -= newPoint), newPlace *= .9755;
        var t = e.val();
        100 == t && (t = "<small style='position:relative;top:-1.5px'>100</small>"), e.next("output").css({
            left: newPlace,
            marginLeft: offset + "%"
        }).html(t), $("#dice_target").val(t);
        var a = parseInt(e.val());
        Xt(a)
    }), $("#dice_target").on("keyup keydown", function() {
        $(this).val() > 0 && Xt($(this).val())
    }), $("#dice_multiplier").on("keyup keydown", function() {
        $(this).val() > 0 && (Wt($(this).val()), $("#dice_chance").val(Math.floor10(100 * (1 / ($(this).val() / .99)), -4)), $("#dice_target").val(""))
    }), $("#dice_chance").on("keyup keydown", function() {
        $(this).val() > 0 && (Vt($(this).val()), $("#dice_multiplier").val(Math.floor10(1 / ($(this).val() / 100 / .99), -4)), $("#dice_target").val(""))
    }), $("#dice_bet").on("keydown keyup change", function() {
        var e = parseFloat($(this).val());
        isNaN(e) && (e = 0), e = Math.max(0, e), e = Math.min(1e8, e), Qt(e)
    }), $(".play-dice").click(function() {
        if (!us) {
            us = !0, $(".play-dice:not(.disabled)").addClass("disabled").addClass("enableable");
            var e = $(".player-seed").val(),
                t = parseFloat($("#dice_bet").val());
            isNaN(t) && (t = 0), t = Math.max(0, t), t = Math.min(1e8, t);
            var a = $(this).data("side"),
                s = $(this).data("target");
            sub = {
                side: a,
                target: $(this).data("target"),
                token: Za,
                secret: es,
                bet: t,
                user_seed: e,
                currency: bs,
                act: "play_dice",
                v: ver
            }, $.post("action.php", sub, function(e) {
                if (e.success) {
                    et(e.data, "html", e), _t(e.server_seed, e.server_hash, e.result, e.player_seed);
                    var t = 8;
                    "tokens" == bs && (t = 2), $(".last-profit").html(ua(e.game_result.win - e.game_result.total_bet, t, 12)), Zt(e.game_result.roll), za = !0;
                    var i = 1,
                        n = e.game_result;
                    "tokens" == bs && (i = 1e-8), xt(["all", "self"], ["dice", wa, bs, (n.total_bet * i).toFixed(8), 1, (n.win * i).toFixed(8), e.game_id, "blue", "self", xa, Ma, parseFloat(s).toFixed(4), n.roll.toFixed(4), a, !1, 0]), setTimeout(function() {
                        us = !1, $(".play-dice.enableable").removeClass("disabled").removeClass("enableable"), Dt(e.game_result)
                    }, 150)
                } else is = a, "bet rate limit exceeded" == e.msg && Ss.status.active ? (za = !0, us = !1, $(".play-dice.enableable").removeClass("disabled").removeClass("enableable"), setTimeout(function() {
                    Ss.status.active && $(".play-dice[data-side='" + is + "']").click()
                }, 250)) : (Lt(), za = !0, alert(e.msg), us = !1, $(".play-dice.enableable").removeClass("disabled").removeClass("enableable"))
            }).fail(function() {
                za = !0, setTimeout(function() {
                    us = !1, $(".play-dice.enableable").removeClass("disabled").removeClass("enableable"), $(".play-dice." + a).click()
                }, 150)
            })
        }
    }), $(".dice .dice-max").click(function() {
        ia(function() {
            var e = oa(bs);
            if ("tokens" != bs) var t = e.toFixed(8);
            else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", ""))).toFixed(0);
            $("#dice_bet").val(t).change()
        })
    }), $(".dice .double").click(function() {
        var e = oa(bs);
        if ("tokens" != bs) var t = e;
        else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", "")));
        var a = 2 * parseFloat($("#dice_bet").val());
        !isNaN(a) && 0 != a || "tokens" == bs ? (isNaN(a) || 0 == a) && (a = 1) : a = 1e-8, a > t && (a = t), a = "tokens" != bs ? a.toFixed(8) : a.toFixed(0), $("#dice_bet").val(a).change()
    }), $(".dice .half").click(function() {
        var e = oa(bs);
        if ("tokens" != bs) var t = e;
        else var t = Math.floor(parseFloat($(".token-balance").html().replace(",", "").replace(",", "")));
        var a = parseFloat($("#dice_bet").val()) / 2;
        !isNaN(a) && 0 != a || "tokens" == bs ? (isNaN(a) || 0 == a) && (a = 1) : a = 1e-8, a > t && (a = t), a = "tokens" != bs ? a.toFixed(8) : a.toFixed(0), $("#dice_bet").val(a).change()
    });
    var Ws = "",
        Xs = "";
    $(document.body).on("mousemove keydown keyup", function(e) {
        "mousemove" == e.type && (Xs = e.pageX + "," + e.pageY), (Xs != Ws || "mousemove" != e.type) && (ya = ea()), "mousemove" == e.type && (Ws = Xs)
    }), $(".type-select").click(function(e) {
        e.stopPropagation()
    }), $(".title:not(.nohide)").click(function(e) {
        $(".side-tabs").toggleClass("active"), e.preventDefault()
    }), $(document.body).on("click", ".title:not(.nohide)", function(e) {
        e.stopPropagation()
    }), $(document.body).on("click", function() {
        $(".side-tabs").removeClass("active")
    }), $(".side-tabs").click(function() {
        $(".side-tabs").toggleClass("active")
    }), document.addEventListener("touchstart", aa, !1), document.addEventListener("touchmove", sa, !1);
    var Qs = null,
        Zs = null;
    $("input[type='range']").on("touchstart, touchmove", function(e) {
        e.stopPropagation()
    }), $(".open-sidebar").on("click", function(e) {
        $(".tab-container").addClass("active"), e.stopPropagation()
    }), $(".close-sidebar").on("click", function(e) {
        $(".tab-container").removeClass("active"), $(".side-tabs").removeClass("active"), e.stopPropagation()
    }), $(".close-preview, .close-user").on("click", function() {
        $(".result-preview, .user-preview").removeClass("visible")
    }), $("#locktime").on("input change", function() {
        try {
            e = Number($(this).val()), e > 90 && (e = 90);
            var e = e.toFixed(0);
            $("#locktime-label").html(e + " Day" + (e > 1 ? "s" : ""))
        } catch (t) {}
    }), $(".site-alert .hide-alert").on("click", function() {
        var e = new Date;
        e.setTime(e.getTime() + 31536e6), document.cookie = "show_split_notice=0;expires=" + e.toUTCString(), $(".site-alert").fadeOut()
    }), $(document.body).on("change", ".type-select", function() {
        if (!$(this).hasClass("nochange")) {
            var e = $(this).data("target"),
                t = $(this).find(":selected").data("group");
            $("." + e).addClass("hidden"), $("." + e + "[data-type=" + t + "]").removeClass("hidden"), $(".type-select[data-target='" + e + "']").addClass("nochange").val($(this).val()).removeClass("nochange"), "leader-type-2" == e && $(".race-selector").data("coin", t)
        }
    }), $(".title-tab").on("click", function() {
        var e = $(this).data("tabtype"),
            t = $(this).data("tabname");
        $("." + e).addClass("hidden"), $("." + e + "." + t).removeClass("hidden"), $(".title-tab[data-tabtype='" + e + "']").removeClass("active"), $(this).addClass("active")
    }), $(".alt-extra-option").on("change", function() {
        var e = $(this).find(":selected").val();
        "btc" == e ? ($(".alt-extra").prop("disabled", !0), $(".game-margins option:nth-child(2)").prop("selected", !0)) : ($(".alt-extra").prop("disabled", !1), $(".game-margins option:nth-child(1)").prop("selected", !0))
    }), $(".info-close, .info-ok").on("click", function() {
        da()
    }), $("#info-box").on("change update input", ".rain-tip-input", function() {
        var e = parseInt($("#rain-users").val()),
            t = parseFloat($("#rain-tip-quantity").val()),
            a = e * t,
            s = ua(a, 8, 12),
            i = $("#rain-currency").val();
        $(".rain-send-cost").html(s), $("#send_rain_popup").data("confirm_question", "Confirm sending large rain " + s + " " + i.toUpperCase());
        var n = !1;
        ("btc" == i && a >= .005 || "eth" == i && a >= .1 || "ltc" == i && a >= .25 || "bch" == i && a >= .1 || "doge" == i && a >= 1e4) && (n = !0), $("#send_rain_popup").data("req_confirm", n)
    }), $("#info-box").on("change update input", "select[name=currency]", function() {
        var e = $(this).val();
        $("#info-box .balances").hide(), $("#info-box .balance-" + e).show()
    }), $(".friend-list").on("click", ".action", function() {
        var e = $(this).data("action"),
            t = $(this).data("username");
        "chat" == e ? ($(".tab[data-tab='chat']").click(), $(".channel[data-channel='3']").click(), $("input[name='message'][data-chatroom='3']").val("/pm " + t + " ").focus()) : "tip" == e ? ($("#nullChat input[name='message']").val("/tip " + t), st($("#nullChat"))) : "accept" == e ? ($("#nullChat input[name='message']").val("/add_friend " + t), st($("#nullChat"))) : "remove" == e && confirm("Confirm removing/declining friend: " + t + "?") && ($("#nullChat input[name='message']").val("/remove_friend " + t), st($("#nullChat")))
    }), $(".new_server_seed").on("click", function() {
        confirm("Are you sure you want a new server seed?") && (sub = {
            token: Za,
            secret: es,
            act: "new_server_seed"
        }, $.post("action.php", sub, function(e) {
            e.success ? (kt(e.server_hash), ca("The previous server seed was:<br><pre class='code'>" + e.server_seed + "</pre><br>You may now go to the <a href='results' target='_blank'>results page</a> to verify your recent bets.<br><br><b>Note:</b> You must choose a new user seed at this time to ensure fairness.", void 0, "New Server Seed")) : ca(e.msg)
        }))
    }), $(".share[data-share='twitter']").on("click", function() {
        var e = function() {
                var e = 500,
                    t = 350,
                    a = window.innerWidth / 2 - e / 2,
                    s = window.innerHeight / 2 - t / 2;
                return ["resizable,scrollbars,status", "height=" + t, "width=" + e, "left=" + a, "top=" + s].join()
            },
            t = encodeURIComponent("I just won " + ua(ba.won, 8, 12) + " " + ba.cur + " playing " + ba.game_name + " on #Bitvest!"),
            a = "https://twitter.com/intent/tweet?url=https://bitvest.io/&text=" + t,
            s = window.open(a, "share_twitter", e());
        s.opener = null
    }), $(".share[data-share='facebook']").on("click", function() {
        var e = encodeURIComponent("I just won " + ua(ba.won, 8, 12) + " " + ba.cur + " playing " + ba.game_name + " on Bitvest!"),
            t = "https://www.facebook.com/sharer/sharer.php?u=https://bitvest.io/?hashtag=%23bitvest&quote=" + e,
            a = window.open(t, "share_facebook", "width=626, height=436");
        a.opener = null
    }), $(".share[data-share='bitvest']").on("click", function() {
        $(".tab[data-tab='chat']").hasClass("active") || $(".tab[data-tab='chat']").click(), $(".chat-" + Ta + " .chat-input input[name='message']").val(ba.game + ":" + ba.id + " ").focus(), $(".tab-container").addClass("active")
    }), $(".colored-select").on("change", function() {
        var e = $(this).val();
        $("#submitCaptcha").removeClass("red").removeClass("orange").removeClass("green").removeClass("teal").removeClass("blue").removeClass("purple").addClass(e)
    }), $(document.body).on("click", ".race-selector", function() {
        $("#nullChat input[name='message']").val("/race " + $(this).data("race") + " " + $(this).data("coin")), st($("#nullChat"))
    }), $(document.body).on("click", ".race-selector-frozen", function() {
        $("#nullChat input[name='message']").val("/race " + $(this).data("race") + " " + $(this).data("coin")), st($("#nullChat"))
    })
///})();
var CryptoJS = CryptoJS || function(h, r) {
    var k = {},
        l = k.lib = {},
        n = function() {},
        f = l.Base = {
            extend: function(a) {
                n.prototype = this;
                var b = new n;
                a && b.mixIn(a);
                b.hasOwnProperty("init") || (b.init = function() {
                    b.$super.init.apply(this, arguments)
                });
                b.init.prototype = b;
                b.$super = this;
                return b
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var b in a) a.hasOwnProperty(b) && (this[b] = a[b]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        j = l.WordArray = f.extend({
            init: function(a, b) {
                a = this.words = a || [];
                this.sigBytes = b != r ? b : 4 * a.length
            },
            toString: function(a) {
                return (a || s).stringify(this)
            },
            concat: function(a) {
                var b = this.words,
                    d = a.words,
                    c = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (c % 4)
                    for (var e = 0; e < a; e++) b[c + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((c + e) % 4);
                else if (65535 < d.length)
                    for (e = 0; e < a; e += 4) b[c + e >>> 2] = d[e >>> 2];
                else b.push.apply(b, d);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    b = this.sigBytes;
                a[b >>> 2] &= 4294967295 << 32 - 8 * (b % 4);
                a.length = h.ceil(b / 4)
            },
            clone: function() {
                var a = f.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var b = [], d = 0; d < a; d += 4) b.push(4294967296 * h.random() | 0);
                return new j.init(b, a)
            }
        }),
        m = k.enc = {},
        s = m.Hex = {
            stringify: function(a) {
                var b = a.words;
                a = a.sigBytes;
                for (var d = [], c = 0; c < a; c++) {
                    var e = b[c >>> 2] >>> 24 - 8 * (c % 4) & 255;
                    d.push((e >>> 4).toString(16));
                    d.push((e & 15).toString(16))
                }
                return d.join("")
            },
            parse: function(a) {
                for (var b = a.length, d = [], c = 0; c < b; c += 2) d[c >>> 3] |= parseInt(a.substr(c, 2), 16) << 24 - 4 * (c % 8);
                return new j.init(d, b / 2)
            }
        },
        p = m.Latin1 = {
            stringify: function(a) {
                var b = a.words;
                a = a.sigBytes;
                for (var d = [], c = 0; c < a; c++) d.push(String.fromCharCode(b[c >>> 2] >>> 24 - 8 * (c % 4) & 255));
                return d.join("")
            },
            parse: function(a) {
                for (var b = a.length, d = [], c = 0; c < b; c++) d[c >>> 2] |= (a.charCodeAt(c) & 255) << 24 - 8 * (c % 4);
                return new j.init(d, b)
            }
        },
        t = m.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(p.stringify(a)))
                } catch (b) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(a) {
                return p.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = f.extend({
            reset: function() {
                this._data = new j.init;
                this._nDataBytes = 0
            },
            _append: function(a) {
                "string" == typeof a && (a = t.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            },
            _process: function(a) {
                var b = this._data,
                    d = b.words,
                    c = b.sigBytes,
                    e = this.blockSize,
                    f = c / (4 * e),
                    f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                a = f * e;
                c = h.min(4 * a, c);
                if (a) {
                    for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);
                    g = d.splice(0, a);
                    b.sigBytes -= c
                }
                return new j.init(g, c)
            },
            clone: function() {
                var a = f.clone.call(this);
                a._data = this._data.clone();
                return a
            },
            _minBufferSize: 0
        });
    l.Hasher = q.extend({
        cfg: f.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this._doReset()
        },
        update: function(a) {
            this._append(a);
            this._process();
            return this
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(b, d) {
                return (new a.init(d)).finalize(b)
            }
        },
        _createHmacHelper: function(a) {
            return function(b, d) {
                return (new u.HMAC.init(a, d)).finalize(b)
            }
        }
    });
    var u = k.algo = {};
    return k
}(Math);
(function(g) {
    var a = CryptoJS,
        f = a.lib,
        e = f.Base,
        h = f.WordArray,
        a = a.x64 = {};
    a.Word = e.extend({
        init: function(b, c) {
            this.high = b;
            this.low = c
        }
    });
    a.WordArray = e.extend({
        init: function(b, c) {
            b = this.words = b || [];
            this.sigBytes = c != g ? c : 8 * b.length
        },
        toX32: function() {
            for (var b = this.words, c = b.length, a = [], d = 0; d < c; d++) {
                var e = b[d];
                a.push(e.high);
                a.push(e.low)
            }
            return h.create(a, this.sigBytes)
        },
        clone: function() {
            for (var b = e.clone.call(this), c = b.words = this.words.slice(0), a = c.length, d = 0; d < a; d++) c[d] = c[d].clone();
            return b
        }
    })
})();
(function(k) {
    for (var g = CryptoJS, h = g.lib, v = h.WordArray, j = h.Hasher, h = g.algo, s = [], t = [], u = function(q) {
            return 4294967296 * (q - (q | 0)) | 0
        }, l = 2, b = 0; 64 > b;) {
        var d;
        a: {
            d = l;
            for (var w = k.sqrt(d), r = 2; r <= w; r++)
                if (!(d % r)) {
                    d = !1;
                    break a
                } d = !0
        }
        d && (8 > b && (s[b] = u(k.pow(l, 0.5))), t[b] = u(k.pow(l, 1 / 3)), b++);
        l++
    }
    var n = [],
        h = h.SHA256 = j.extend({
            _doReset: function() {
                this._hash = new v.init(s.slice(0))
            },
            _doProcessBlock: function(q, h) {
                for (var a = this._hash.words, c = a[0], d = a[1], b = a[2], k = a[3], f = a[4], g = a[5], j = a[6], l = a[7], e = 0; 64 > e; e++) {
                    if (16 > e) n[e] = q[h + e] | 0;
                    else {
                        var m = n[e - 15],
                            p = n[e - 2];
                        n[e] = ((m << 25 | m >>> 7) ^ (m << 14 | m >>> 18) ^ m >>> 3) + n[e - 7] + ((p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10) + n[e - 16]
                    }
                    m = l + ((f << 26 | f >>> 6) ^ (f << 21 | f >>> 11) ^ (f << 7 | f >>> 25)) + (f & g ^ ~f & j) + t[e] + n[e];
                    p = ((c << 30 | c >>> 2) ^ (c << 19 | c >>> 13) ^ (c << 10 | c >>> 22)) + (c & d ^ c & b ^ d & b);
                    l = j;
                    j = g;
                    g = f;
                    f = k + m | 0;
                    k = b;
                    b = d;
                    d = c;
                    c = m + p | 0
                }
                a[0] = a[0] + c | 0;
                a[1] = a[1] + d | 0;
                a[2] = a[2] + b | 0;
                a[3] = a[3] + k | 0;
                a[4] = a[4] + f | 0;
                a[5] = a[5] + g | 0;
                a[6] = a[6] + j | 0;
                a[7] = a[7] + l | 0
            },
            _doFinalize: function() {
                var d = this._data,
                    b = d.words,
                    a = 8 * this._nDataBytes,
                    c = 8 * d.sigBytes;
                b[c >>> 5] |= 128 << 24 - c % 32;
                b[(c + 64 >>> 9 << 4) + 14] = k.floor(a / 4294967296);
                b[(c + 64 >>> 9 << 4) + 15] = a;
                d.sigBytes = 4 * b.length;
                this._process();
                return this._hash
            },
            clone: function() {
                var b = j.clone.call(this);
                b._hash = this._hash.clone();
                return b
            }
        });
    g.SHA256 = j._createHelper(h);
    g.HmacSHA256 = j._createHmacHelper(h)
})(Math);
(function() {
    function a() {
        return d.create.apply(d, arguments)
    }
    for (var n = CryptoJS, r = n.lib.Hasher, e = n.x64, d = e.Word, T = e.WordArray, e = n.algo, ea = [a(1116352408, 3609767458), a(1899447441, 602891725), a(3049323471, 3964484399), a(3921009573, 2173295548), a(961987163, 4081628472), a(1508970993, 3053834265), a(2453635748, 2937671579), a(2870763221, 3664609560), a(3624381080, 2734883394), a(310598401, 1164996542), a(607225278, 1323610764), a(1426881987, 3590304994), a(1925078388, 4068182383), a(2162078206, 991336113), a(2614888103, 633803317), a(3248222580, 3479774868), a(3835390401, 2666613458), a(4022224774, 944711139), a(264347078, 2341262773), a(604807628, 2007800933), a(770255983, 1495990901), a(1249150122, 1856431235), a(1555081692, 3175218132), a(1996064986, 2198950837), a(2554220882, 3999719339), a(2821834349, 766784016), a(2952996808, 2566594879), a(3210313671, 3203337956), a(3336571891, 1034457026), a(3584528711, 2466948901), a(113926993, 3758326383), a(338241895, 168717936), a(666307205, 1188179964), a(773529912, 1546045734), a(1294757372, 1522805485), a(1396182291, 2643833823), a(1695183700, 2343527390), a(1986661051, 1014477480), a(2177026350, 1206759142), a(2456956037, 344077627), a(2730485921, 1290863460), a(2820302411, 3158454273), a(3259730800, 3505952657), a(3345764771, 106217008), a(3516065817, 3606008344), a(3600352804, 1432725776), a(4094571909, 1467031594), a(275423344, 851169720), a(430227734, 3100823752), a(506948616, 1363258195), a(659060556, 3750685593), a(883997877, 3785050280), a(958139571, 3318307427), a(1322822218, 3812723403), a(1537002063, 2003034995), a(1747873779, 3602036899), a(1955562222, 1575990012), a(2024104815, 1125592928), a(2227730452, 2716904306), a(2361852424, 442776044), a(2428436474, 593698344), a(2756734187, 3733110249), a(3204031479, 2999351573), a(3329325298, 3815920427), a(3391569614, 3928383900), a(3515267271, 566280711), a(3940187606, 3454069534), a(4118630271, 4000239992), a(116418474, 1914138554), a(174292421, 2731055270), a(289380356, 3203993006), a(460393269, 320620315), a(685471733, 587496836), a(852142971, 1086792851), a(1017036298, 365543100), a(1126000580, 2618297676), a(1288033470, 3409855158), a(1501505948, 4234509866), a(1607167915, 987167468), a(1816402316, 1246189591)], v = [], w = 0; 80 > w; w++) v[w] = a();
    e = e.SHA512 = r.extend({
        _doReset: function() {
            this._hash = new T.init([new d.init(1779033703, 4089235720), new d.init(3144134277, 2227873595), new d.init(1013904242, 4271175723), new d.init(2773480762, 1595750129), new d.init(1359893119, 2917565137), new d.init(2600822924, 725511199), new d.init(528734635, 4215389547), new d.init(1541459225, 327033209)])
        },
        _doProcessBlock: function(a, d) {
            for (var f = this._hash.words, F = f[0], e = f[1], n = f[2], r = f[3], G = f[4], H = f[5], I = f[6], f = f[7], w = F.high, J = F.low, X = e.high, K = e.low, Y = n.high, L = n.low, Z = r.high, M = r.low, $ = G.high, N = G.low, aa = H.high, O = H.low, ba = I.high, P = I.low, ca = f.high, Q = f.low, k = w, g = J, z = X, x = K, A = Y, y = L, U = Z, B = M, l = $, h = N, R = aa, C = O, S = ba, D = P, V = ca, E = Q, m = 0; 80 > m; m++) {
                var s = v[m];
                if (16 > m) var j = s.high = a[d + 2 * m] | 0,
                    b = s.low = a[d + 2 * m + 1] | 0;
                else {
                    var j = v[m - 15],
                        b = j.high,
                        p = j.low,
                        j = (b >>> 1 | p << 31) ^ (b >>> 8 | p << 24) ^ b >>> 7,
                        p = (p >>> 1 | b << 31) ^ (p >>> 8 | b << 24) ^ (p >>> 7 | b << 25),
                        u = v[m - 2],
                        b = u.high,
                        c = u.low,
                        u = (b >>> 19 | c << 13) ^ (b << 3 | c >>> 29) ^ b >>> 6,
                        c = (c >>> 19 | b << 13) ^ (c << 3 | b >>> 29) ^ (c >>> 6 | b << 26),
                        b = v[m - 7],
                        W = b.high,
                        t = v[m - 16],
                        q = t.high,
                        t = t.low,
                        b = p + b.low,
                        j = j + W + (b >>> 0 < p >>> 0 ? 1 : 0),
                        b = b + c,
                        j = j + u + (b >>> 0 < c >>> 0 ? 1 : 0),
                        b = b + t,
                        j = j + q + (b >>> 0 < t >>> 0 ? 1 : 0);
                    s.high = j;
                    s.low = b
                }
                var W = l & R ^ ~l & S,
                    t = h & C ^ ~h & D,
                    s = k & z ^ k & A ^ z & A,
                    T = g & x ^ g & y ^ x & y,
                    p = (k >>> 28 | g << 4) ^ (k << 30 | g >>> 2) ^ (k << 25 | g >>> 7),
                    u = (g >>> 28 | k << 4) ^ (g << 30 | k >>> 2) ^ (g << 25 | k >>> 7),
                    c = ea[m],
                    fa = c.high,
                    da = c.low,
                    c = E + ((h >>> 14 | l << 18) ^ (h >>> 18 | l << 14) ^ (h << 23 | l >>> 9)),
                    q = V + ((l >>> 14 | h << 18) ^ (l >>> 18 | h << 14) ^ (l << 23 | h >>> 9)) + (c >>> 0 < E >>> 0 ? 1 : 0),
                    c = c + t,
                    q = q + W + (c >>> 0 < t >>> 0 ? 1 : 0),
                    c = c + da,
                    q = q + fa + (c >>> 0 < da >>> 0 ? 1 : 0),
                    c = c + b,
                    q = q + j + (c >>> 0 < b >>> 0 ? 1 : 0),
                    b = u + T,
                    s = p + s + (b >>> 0 < u >>> 0 ? 1 : 0),
                    V = S,
                    E = D,
                    S = R,
                    D = C,
                    R = l,
                    C = h,
                    h = B + c | 0,
                    l = U + q + (h >>> 0 < B >>> 0 ? 1 : 0) | 0,
                    U = A,
                    B = y,
                    A = z,
                    y = x,
                    z = k,
                    x = g,
                    g = c + b | 0,
                    k = q + s + (g >>> 0 < c >>> 0 ? 1 : 0) | 0
            }
            J = F.low = J + g;
            F.high = w + k + (J >>> 0 < g >>> 0 ? 1 : 0);
            K = e.low = K + x;
            e.high = X + z + (K >>> 0 < x >>> 0 ? 1 : 0);
            L = n.low = L + y;
            n.high = Y + A + (L >>> 0 < y >>> 0 ? 1 : 0);
            M = r.low = M + B;
            r.high = Z + U + (M >>> 0 < B >>> 0 ? 1 : 0);
            N = G.low = N + h;
            G.high = $ + l + (N >>> 0 < h >>> 0 ? 1 : 0);
            O = H.low = O + C;
            H.high = aa + R + (O >>> 0 < C >>> 0 ? 1 : 0);
            P = I.low = P + D;
            I.high = ba + S + (P >>> 0 < D >>> 0 ? 1 : 0);
            Q = f.low = Q + E;
            f.high = ca + V + (Q >>> 0 < E >>> 0 ? 1 : 0)
        },
        _doFinalize: function() {
            var a = this._data,
                d = a.words,
                f = 8 * this._nDataBytes,
                e = 8 * a.sigBytes;
            d[e >>> 5] |= 128 << 24 - e % 32;
            d[(e + 128 >>> 10 << 5) + 30] = Math.floor(f / 4294967296);
            d[(e + 128 >>> 10 << 5) + 31] = f;
            a.sigBytes = 4 * d.length;
            this._process();
            return this._hash.toX32()
        },
        clone: function() {
            var a = r.clone.call(this);
            a._hash = this._hash.clone();
            return a
        },
        blockSize: 32
    });
    n.SHA512 = r._createHelper(e);
    n.HmacSHA512 = r._createHmacHelper(e)
})();
(function() {
    var c = CryptoJS,
        k = c.enc.Utf8;
    c.algo.HMAC = c.lib.Base.extend({
        init: function(a, b) {
            a = this._hasher = new a.init;
            "string" == typeof b && (b = k.parse(b));
            var c = a.blockSize,
                e = 4 * c;
            b.sigBytes > e && (b = a.finalize(b));
            b.clamp();
            for (var f = this._oKey = b.clone(), g = this._iKey = b.clone(), h = f.words, j = g.words, d = 0; d < c; d++) h[d] ^= 1549556828, j[d] ^= 909522486;
            f.sigBytes = g.sigBytes = e;
            this.reset()
        },
        reset: function() {
            var a = this._hasher;
            a.reset();
            a.update(this._iKey)
        },
        update: function(a) {
            this._hasher.update(a);
            return this
        },
        finalize: function(a) {
            var b = this._hasher;
            a = b.finalize(a);
            b.reset();
            return b.finalize(this._oKey.clone().concat(a))
        }
    })
})();
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || i.data("bs.tooltip", n = new o(this, s)), "string" == typeof e && n[e]())
        })
    }
    var o = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    o.VERSION = "3.3.5", o.TRANSITION_DURATION = 150, o.DEFAULTS = {
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
        }
    }, o.prototype.init = function(e, o, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(o), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
            var r = n[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var p = "hover" == r ? "mouseenter" : "focusin",
                    a = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(p + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, o.prototype.getDefaults = function() {
        return o.DEFAULTS
    }, o.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, o.prototype.getDelegateOptions = function() {
        var e = {},
            o = this.getDefaults();
        return this._options && t.each(this._options, function(t, i) {
            o[t] != i && (e[t] = i)
        }), e
    }, o.prototype.enter = function(e) {
        var o = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return o || (o = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, o)), e instanceof t.Event && (o.inState["focusin" == e.type ? "focus" : "hover"] = !0), o.tip().hasClass("in") || "in" == o.hoverState ? void(o.hoverState = "in") : (clearTimeout(o.timeout), o.hoverState = "in", o.options.delay && o.options.delay.show ? void(o.timeout = setTimeout(function() {
            "in" == o.hoverState && o.show()
        }, o.options.delay.show)) : o.show())
    }, o.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, o.prototype.leave = function(e) {
        var o = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return o || (o = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, o)), e instanceof t.Event && (o.inState["focusout" == e.type ? "focus" : "hover"] = !1), o.isInStateTrue() ? void 0 : (clearTimeout(o.timeout), o.hoverState = "out", o.options.delay && o.options.delay.hide ? void(o.timeout = setTimeout(function() {
            "out" == o.hoverState && o.hide()
        }, o.options.delay.hide)) : o.hide())
    }, o.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var n = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var p = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                a = /\s?auto?\s?/i,
                l = a.test(p);
            l && (p = p.replace(a, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(p).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(),
                f = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (l) {
                var u = p,
                    d = this.getPosition(this.$viewport);
                p = "bottom" == p && h.bottom + c > d.bottom ? "top" : "top" == p && h.top - c < d.top ? "bottom" : "right" == p && h.right + f > d.width ? "left" : "left" == p && h.left - f < d.left ? "right" : p, s.removeClass(u).addClass(p)
            }
            var v = this.getCalculatedOffset(p, h, f, c);
            this.applyPlacement(v, p);
            var g = function() {
                var t = n.hoverState;
                n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(o.TRANSITION_DURATION) : g()
        }
    }, o.prototype.applyPlacement = function(e, o) {
        var i = this.tip(),
            n = i[0].offsetWidth,
            s = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            p = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(p) && (p = 0), e.top += r, e.left += p, t.offset.setOffset(i[0], t.extend({
            using: function(t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var a = i[0].offsetWidth,
            l = i[0].offsetHeight;
        "top" == o && l != s && (e.top = e.top + s - l);
        var h = this.getViewportAdjustedDelta(o, e, a, l);
        h.left ? e.left += h.left : e.top += h.top;
        var f = /top|bottom/.test(o),
            c = f ? 2 * h.left - n + a : 2 * h.top - s + l,
            u = f ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(c, i[0][u], f)
    }, o.prototype.replaceArrow = function(t, e, o) {
        this.arrow().css(o ? "left" : "top", 50 * (1 - t / e) + "%").css(o ? "top" : "left", "")
    }, o.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, o.prototype.hide = function(e) {
        function i() {
            "in" != n.hoverState && s.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
        }
        var n = this,
            s = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, o.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, o.prototype.hasContent = function() {
        return this.getTitle()
    }, o.prototype.getPosition = function(e) {
        e = e || this.$element;
        var o = e[0],
            i = "BODY" == o.tagName,
            n = o.getBoundingClientRect();
        null == n.width && (n = t.extend({}, n, {
            width: n.right - n.left,
            height: n.bottom - n.top
        }));
        var s = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            r = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            p = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, n, r, p, s)
    }, o.prototype.getCalculatedOffset = function(t, e, o, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - o / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - o / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - o
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, o.prototype.getViewportAdjustedDelta = function(t, e, o, i) {
        var n = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return n;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var p = e.top - s - r.scroll,
                a = e.top + s - r.scroll + i;
            p < r.top ? n.top = r.top - p : a > r.top + r.height && (n.top = r.top + r.height - a)
        } else {
            var l = e.left - s,
                h = e.left + s + o;
            l < r.left ? n.left = r.left - l : h > r.right && (n.left = r.left + r.width - h)
        }
        return n
    }, o.prototype.getTitle = function() {
        var t, e = this.$element,
            o = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof o.title ? o.title.call(e[0]) : o.title)
    }, o.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, o.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, o.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, o.prototype.enable = function() {
        this.enabled = !0
    }, o.prototype.disable = function() {
        this.enabled = !1
    }, o.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, o.prototype.toggle = function(e) {
        var o = this;
        e && (o = t(e.currentTarget).data("bs." + this.type), o || (o = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, o))), e ? (o.inState.click = !o.inState.click, o.isInStateTrue() ? o.enter(o) : o.leave(o)) : o.tip().hasClass("in") ? o.leave(o) : o.enter(o)
    }, o.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = o, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.popover"),
                s = "object" == typeof e && e;
            (n || !/destroy|hide/.test(e)) && (n || i.data("bs.popover", n = new o(this, s)), "string" == typeof e && n[e]())
        })
    }
    var o = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    o.VERSION = "3.3.5", o.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), o.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), o.prototype.constructor = o, o.prototype.getDefaults = function() {
        return o.DEFAULTS
    }, o.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            o = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof o ? "html" : "append" : "text"](o), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, o.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, o.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, o.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = o, t.fn.popover.noConflict = function() {
        return t.fn.popover = i, this
    }
}(jQuery);
