"use strict";
! function() { const e = document.querySelectorAll(".phone-mask"),
        t = document.querySelector(".credit-card-mask"),
        n = document.querySelector(".expiry-date-mask"),
        c = document.querySelector(".cvv-code-mask"),
        o = document.querySelectorAll(".dob-picker");
    e && e.forEach((function(e) { new Cleave(e, { phone: !0, phoneRegionCode: "US" }) })), t && new Cleave(t, { creditCard: !0, onCreditCardTypeChanged: function(e) { document.querySelector(".card-type").innerHTML = "" != e && "unknown" != e ? '<img src="' + assetsPath + "img/icons/payments/" + e + '-cc.png" height="28"/>' : "" } }), n && new Cleave(n, { date: !0, delimiter: "/", datePattern: ["m", "y"] }), c && new Cleave(c, { numeral: !0, numeralPositiveOnly: !0 }), o && o.forEach((function(e) { e.flatpickr({ monthSelectorType: "static" }) })) }(), $((function() { var e; const t = $(".sticky-element");
    window.Helpers.initCustomOptionCheck(), e = Helpers.isNavbarFixed() ? $(".layout-navbar").height() + 7 : 0, t.length && t.sticky({ topSpacing: e, zIndex: 9 }); var n = $(".select2");
    n.length && n.each((function() { var e = $(this);
        e.wrap('<div class="position-relative"></div>').select2({ placeholder: "Please select an item", dropdownParent: e.parent() }) })) }));