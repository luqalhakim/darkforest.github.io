// Code for Typing Animation
var AutoTyping = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0))
  );
})([
  function (e, t, r) {
    "use strict";
    r.r(t);
    t.default = class {
      constructor(
        e,
        t,
        {
          typeSpeed: r = 150,
          deleteSpeed: n = 150,
          waitBeforeDelete: i = 1e3,
          waitBetweenWords: o = 1e3,
          writeWhole: l = !1,
        } = {}
      ) {
        (this.selector = e),
          (this.text = t),
          (this.typeSpeed = r),
          (this.deleteSpeed = n),
          (this.waitBeforeDelete = i),
          (this.waitBetweenWords = o),
          (this.writeWhole = l),
          (this.el = document.querySelector(e));
      }
      async start() {
        this.el;
        for (let e = 0; e < this.text.length; e++) {
          const t = this.text[e];
          let r = t.split("");
          this.writeWhole && (r = [t]), await this.writeText(r), e == this.text.length - 1 && (e = -1);
        }
      }
      writeText(e) {
        let t = this;
        return new Promise((r) => {
          const n = this.el;
          let i = !1,
            o = setInterval(() => {
              let l = e.shift();
              i && ((i = !1), (l = " " + l)),
                (i = " " == l),
                (n.innerText += l),
                0 == e.length &&
                  (clearInterval(o),
                  setTimeout(() => {
                    let e = setInterval(() => {
                      const i = n.innerText;
                      t.writeWhole ? (n.innerText = "") : (n.innerText = i.substr(0, i.length - 1)),
                        0 == n.innerText.length && (clearInterval(e), setTimeout(() => r(), this.waitBetweenWords));
                    }, this.deleteSpeed);
                  }, this.waitBeforeDelete));
            }, this.typeSpeed);
        });
      }
    };
  },
]).default;
// End of Typing Animation Code

// Code For Scroll Down Button
// $(function () {
//   $("a[href*=#]").on("click", function (e) {
//     e.preventDefault();
//     $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500, "linear");
//   });
// });
// End Code of Scroll Down Button

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
