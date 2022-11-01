"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [8779],
  {
    8779: (_e, N, a) => {
      a.r(N), a.d(N, { DaoModule: () => Uo }), a(40526);
      var e = a(51109),
        M = a(31065),
        E = a(79296),
        I = (a(67605), a(64658), a(1753), a(3012)),
        g = (a(15810), a(44168), a(38143)),
        T = a(642),
        z = a(57015),
        y = (a(94288), a(85602), a(31777)),
        S = a(37551),
        B = a(12733),
        C = a(76327),
        x = (a(83358), a(68751), a(64736)),
        re = a(77724);
      a(30459), a(96142);
      const it = {
        provide: new e.InjectionToken("mat-autocomplete-scroll-strategy"),
        deps: [T.aV],
        useFactory: function ot(n) {
          return () => n.scrollStrategies.reposition();
        },
      };
      let ct = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            providers: [it],
            imports: [T.U8, M.Ng, M.BQ, g.ez, z.ZD, M.Ng, M.BQ],
          })),
          n
        );
      })();
      var lt = a(63287),
        Ie = a(77370),
        pt = a(83156),
        H = a(54510),
        xe = a(74578),
        Ve = a(85125),
        Ce = a(55468),
        se = a(39700),
        ee = a(93130),
        ce = a(58589),
        de = a(3757),
        ge = a(50864),
        le = a(27876),
        dt = a(25245),
        pe = a(24124),
        ye = a(70167),
        D = a(12725),
        te = a(69682),
        L = a(30137),
        me = a(73836),
        ne = a(95021),
        f = a(93617),
        Be = a(19298),
        De = a(41912),
        $e = a(80135);
      let mt = (() => {
        class n {
          convertToCircleStrokeParams(t) {
            return 226 * t + ", 452";
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-circle-diagram"]],
            inputs: { shares: "shares" },
            decls: 6,
            vars: 4,
            consts: [
              [
                "xmlns",
                "http://www.w3.org/2000/svg",
                "width",
                "160",
                "height",
                "80",
                "viewBox",
                "0 0 160 80",
                1,
                "token-circle",
              ],
              [
                "cx",
                "80",
                "cy",
                "80",
                "r",
                "72",
                "fill",
                "none",
                "stroke",
                "rgba(136, 163, 200, 0.2)",
                "stroke-width",
                "14",
                "stroke-dasharray",
                "3, 5",
                "transform",
                "rotate(180 80 80)",
              ],
              ["id", "myMask"],
              [
                "cx",
                "80",
                "cy",
                "80",
                "r",
                "72",
                "fill",
                "none",
                "stroke",
                "#fff",
                "stroke-width",
                "14",
                "stroke-dasharray",
                "3, 5",
                "transform",
                "rotate(182 80 80)",
              ],
              [
                "cx",
                "80",
                "cy",
                "80",
                "r",
                "72",
                "fill",
                "none",
                "stroke-width",
                "14",
                "stroke-dashoffset",
                "0",
                "transform",
                "rotate(180 80 80)",
                "mask",
                "url(#myMask)",
              ],
            ],
            template: function (t, o) {
              1 & t &&
                (e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(0, "svg", 0),
                e.ɵɵelement(1, "circle", 1),
                e.ɵɵelementStart(2, "mask", 2),
                e.ɵɵelement(3, "circle", 3),
                e.ɵɵelementEnd(),
                e.ɵɵelement(4, "circle", 4)(5, "circle", 4),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(4),
                  e.ɵɵattribute(
                    "stroke-dasharray",
                    o.convertToCircleStrokeParams(1)
                  )("stroke", o.shares.color2),
                  e.ɵɵadvance(1),
                  e.ɵɵattribute(
                    "stroke-dasharray",
                    o.convertToCircleStrokeParams(
                      (1 / (o.shares.share1 + o.shares.share2)) *
                        o.shares.share1
                    )
                  )("stroke", o.shares.color1));
            },
            styles: [
              "[_nghost-%COMP%]{display:block}@media (max-width: 480px){.token-circle[_ngcontent-%COMP%]{width:140px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      function ut(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "percent"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().ngIf;
          let o;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(
              null == (o = e.ɵɵpipeBind1(2, 1, t.referrer))
                ? null
                : o.replace("%", "")
            );
        }
      }
      function ht(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "percent"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().ngIf;
          let o;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(
              null == (o = e.ɵɵpipeBind1(2, 1, t.governance))
                ? null
                : o.replace("%", "")
            );
        }
      }
      function vt(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "p", 5),
            e.ɵɵelement(4, "tooltip", 6),
            e.ɵɵpipe(5, "transloco"),
            e.ɵɵelementStart(6, "span"),
            e.ɵɵtext(7, " / "),
            e.ɵɵelementEnd(),
            e.ɵɵelement(8, "tooltip", 6),
            e.ɵɵpipe(9, "transloco"),
            e.ɵɵtemplate(
              10,
              ut,
              3,
              3,
              "ng-template",
              null,
              7,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵtemplate(
              12,
              ht,
              3,
              3,
              "ng-template",
              null,
              8,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()(),
            e.ɵɵelement(14, "app-circle-diagram", 9),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(15, "div", 10)(16, "div")(17, "div", 11),
            e.ɵɵtext(18),
            e.ɵɵpipe(19, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(20, "p", 12),
            e.ɵɵtext(21),
            e.ɵɵpipe(22, "percent"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(23, "div")(24, "div", 11),
            e.ɵɵtext(25),
            e.ɵɵpipe(26, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(27, "p", 13),
            e.ɵɵtext(28),
            e.ɵɵpipe(29, "percent"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(30, "div")(31, "p", 14),
            e.ɵɵtext(32, "Total votes"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(33, "p", 15),
            e.ɵɵtext(34),
            e.ɵɵpipe(35, "number"),
            e.ɵɵpipe(36, "async"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(37, "div")(38, "p", 16),
            e.ɵɵtext(39, "Your votes"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(40, "p", 17),
            e.ɵɵtext(41),
            e.ɵɵpipe(42, "number"),
            e.ɵɵpipe(43, "async"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(44, "div")(45, "p", 18),
            e.ɵɵtext(46, "Addresses"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(47, "p", 19),
            e.ɵɵtext(48),
            e.ɵɵpipe(49, "number"),
            e.ɵɵpipe(50, "async"),
            e.ɵɵelementEnd()(),
            e.ɵɵelement(51, "div"),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = i.ngIf,
            o = e.ɵɵreference(11),
            r = e.ɵɵreference(13),
            c = e.ɵɵnextContext();
          e.ɵɵadvance(4),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(5, 16, "aggregationVotingItem.referrer")
            )("customElement", o),
            e.ɵɵadvance(4),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(9, 18, "aggregationVotingItem.treasury")
            )("customElement", r),
            e.ɵɵadvance(6),
            e.ɵɵproperty("shares", t),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(19, 20, "aggregationVotingItem.referrer"),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵstyleProp("color", t.color1),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(22, 22, t.referrer, "1.0-2"),
              " "
            ),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(26, 25, "aggregationVotingItem.treasury"),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵstyleProp("color", t.color2),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(29, 27, t.governance, "1.0-2"),
              " "
            ),
            e.ɵɵadvance(6),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(35, 30, e.ɵɵpipeBind1(36, 32, c.totalVotes$))
            ),
            e.ɵɵadvance(7),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(42, 34, e.ɵɵpipeBind1(43, 36, c.userBalance$))
            ),
            e.ɵɵadvance(7),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(49, 38, e.ɵɵpipeBind1(50, 40, c.addressesCount$))
            );
        }
      }
      let _t = (() => {
        class n {
          constructor(t, o, r, c) {
            (this.governanceQuery = t),
              (this.governanceApiService = o),
              (this.walletConnectionQuery = r),
              (this.contractAddressService = c),
              (this.colors = Be.D),
              (this.votes$ = this.takeVotes().pipe(
                (0, ne.EB)(0, me.N.refreshTime.graphData),
                (0, ne.i4)({ addresses: 0, totalVotes: 0 }),
                (0, te.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.totalVotes$ = this.votes$.pipe(
                (0, x.U)(({ totalVotes: p }) => p)
              )),
              (this.addressesCount$ = this.votes$.pipe(
                (0, x.U)(({ addresses: p }) => p)
              )),
              (this.userBalance$ =
                this.walletConnectionQuery.isWalletConnected$.pipe(
                  (0, ne.EB)(0, me.N.refreshTime.graphData),
                  (0, C.w)((p) => (p ? this.getUserVotes() : (0, I.of)(0))),
                  (0, ne.i4)(0),
                  (0, te.d)({ refCount: !0, bufferSize: 1 })
                )),
              (this.exchangeShares$ =
                this.governanceQuery.getExchangeDetailsShares$.pipe(
                  (0, x.U)((p) => {
                    const { referrer: l, governance: d } = p;
                    return {
                      referrer: l,
                      share1: l,
                      color1: "#23C68B",
                      governance: d,
                      share2: d,
                      color2: "#3181FA",
                    };
                  })
                ));
          }
          getUserVotes() {
            return this.walletConnectionQuery.connectedWalletAddress$.pipe(
              (0, ne.BX)(),
              (0, C.w)((t) => this.governanceApiService.getUser$(t)),
              (0, x.U)((t) => t[f.y.leftoverReferralShare + "VoteAmount"]),
              (0, x.U)((t) => +(0, L.kg)(t, 18, 4))
            );
          }
          takeVotes() {
            return this.contractAddressService
              .getContractAddressOnce(Ce.a4.exchangeGovernance)
              .pipe(
                (0, C.w)((t) =>
                  this.governanceApiService.getParamData$(
                    t,
                    f.y.leftoverReferralShare
                  )
                ),
                (0, x.U)((t) => ({
                  addresses: +t.totalVoters,
                  totalVotes: +(0, L.kg)(t.totalVotes, 18, 4),
                }))
              );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(le.R),
              e.ɵɵdirectiveInject(ce.rU),
              e.ɵɵdirectiveInject(ee.r),
              e.ɵɵdirectiveInject(De.O)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-aggregation-voting-item"]],
            decls: 3,
            vars: 3,
            consts: [
              [1, "gray-border", "voting-item"],
              ["class", "voting-item-content", 4, "ngIf"],
              [1, "voting-item-content"],
              [1, "current-result-wrap"],
              [1, "text-wrap"],
              [1, "distribution-info"],
              [
                "contentType",
                "custom",
                1,
                "distribution-info-tooltip",
                3,
                "tooltip",
                "customElement",
              ],
              ["referrer", ""],
              ["governance", ""],
              [1, "radial-gauge", 3, "shares"],
              [1, "voting-grid"],
              [1, "text-gray", "mb-8", "voting-line-title", "with-tooltip"],
              [1, "col-val"],
              [1, "mb-4", "col-val"],
              [
                "transloco",
                "votingItem.total-votes",
                1,
                "text-gray",
                "mb-8",
                "voting-line-title",
              ],
              ["data-id", "aggregation.total-votes", 1, "col-val"],
              [
                "transloco",
                "votingItem.your-votes",
                1,
                "text-gray",
                "mb-8",
                "voting-line-title",
              ],
              ["data-id", "aggregation.your-votes", 1, "col-val"],
              [
                "transloco",
                "aggregationVotingItem.addresses",
                1,
                "text-gray",
                "mb-8",
                "voting-line-title",
              ],
              ["data-id", "aggregation.addresses", 1, "col-val"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0),
                e.ɵɵtemplate(1, vt, 52, 42, "div", 1),
                e.ɵɵpipe(2, "async"),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 1, o.exchangeShares$)));
            },
            dependencies: [g.O5, D.KI, $e.K, mt, g.Ov, g.JJ, g.Zx, D.Ot],
            styles: [
              ".voting-item[_ngcontent-%COMP%]{border:1px solid;border-radius:20px;padding:16px;text-align:center}@media (min-width: 1300px){.voting-item[_ngcontent-%COMP%]{padding:24px}}.current-result-wrap[_ngcontent-%COMP%]{height:80px;position:relative;align-items:center;display:flex;flex-direction:column;justify-content:flex-end}.current-result-wrap[_ngcontent-%COMP%]   .radial-gauge[_ngcontent-%COMP%]{position:absolute;bottom:0}.text-wrap[_ngcontent-%COMP%]{height:70px;display:flex;justify-content:flex-end;flex-direction:column;font-size:24px}.voting-item-percents-time[_ngcontent-%COMP%]{font-size:24px;font-weight:300;text-align:center;white-space:nowrap}.voting-item-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:150px 1fr;grid-gap:16px;align-items:center}@media (max-width: 1300px){.voting-item-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}}@media (max-width: 940px){.voting-item-content[_ngcontent-%COMP%]{display:grid}}@media (max-width: 600px){.voting-item-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}}.voting-column-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:24px;align-items:center}@media (max-width: 1300px){.voting-column-wrap[_ngcontent-%COMP%]{display:block}}@media (max-width: 940px){.voting-column-wrap[_ngcontent-%COMP%]{display:grid}}@media (max-width: 600px){.voting-column-wrap[_ngcontent-%COMP%]{display:block}}.voting-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr;grid-auto-flow:column;grid-column-gap:4px;grid-row-gap:8px;align-items:center;width:100%}@media (max-width: 500px){.voting-grid[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;grid-auto-flow:row}}.voting-line[_ngcontent-%COMP%]{display:block;margin:0 auto;width:18px;height:6px;border-radius:3px}@media (max-width: 1300px){.voting-line[_ngcontent-%COMP%]{display:none}}@media (max-width: 939px){.voting-line[_ngcontent-%COMP%]{display:block}}@media (max-width: 600px){.voting-line[_ngcontent-%COMP%]{display:none}}.voting-line-title[_ngcontent-%COMP%]{font-size:13px;text-align:center}.voting-line-title.with-tooltip[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.current-result-wrap[_ngcontent-%COMP%]{height:80px;margin-bottom:0;justify-content:center}.button-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-start}@media (max-width: 1300px){.button-wrap[_ngcontent-%COMP%]{justify-content:center;order:1}}@media (max-width: 939px){.button-wrap[_ngcontent-%COMP%]{justify-content:flex-start;order:inherit}}@media (max-width: 600px){.button-wrap[_ngcontent-%COMP%]{justify-content:center;order:1}}.voting-title[_ngcontent-%COMP%]{text-align:left;font-weight:700}@media (max-width: 1300px){.voting-title[_ngcontent-%COMP%]{text-align:center}}@media (max-width: 939px){.voting-title[_ngcontent-%COMP%]{text-align:left}}@media (max-width: 600px){.voting-title[_ngcontent-%COMP%]{text-align:center}}.distribution-info[_ngcontent-%COMP%]{z-index:10;font-size:24px}.voting-accordion[_ngcontent-%COMP%]{text-align:left}.voting-accordion-item[_ngcontent-%COMP%]{padding:12px 46px 12px 16px;border-radius:12px;line-height:24px;position:relative}.voting-accordion-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-weight:700}.voting-accordion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.voting-accordion-item-arrow[_ngcontent-%COMP%]{position:absolute;right:12px;top:4px}.voting-accordion-item-open[_ngcontent-%COMP%]   .voting-accordion-item-arrow[_ngcontent-%COMP%]{transform:rotate(90deg);top:8px}.col-val[_ngcontent-%COMP%]{font-size:20px}.distribution-info-tooltip[_ngcontent-%COMP%]{margin-left:0}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var w = a(71426),
        Se = a(76027),
        j = a(53886),
        Y = a(47384);
      function Re(n, i) {
        if (!i || !n) return 0;
        const t = ((n / i) * 100).toFixed(2);
        return +(0, L.sk)(t, 2);
      }
      var Ct = a(4069),
        yt = a(66654);
      function Pt(n, i) {
        1 & n &&
          (e.ɵɵnamespaceSVG(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(0, "span", 22),
          e.ɵɵtext(1, "You"),
          e.ɵɵelementEnd());
      }
      function Ot(n, i) {
        1 & n &&
          (e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(0, "svg", 23),
          e.ɵɵelement(1, "use", 24),
          e.ɵɵelementEnd());
      }
      function St(n, i) {
        1 & n &&
          (e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(0, "svg", 23),
          e.ɵɵelement(1, "use", 24),
          e.ɵɵelementEnd());
      }
      const wt = function () {
          return { width: 125 };
        },
        Mt = function (n, i) {
          return {
            "change-position-positive": n,
            "change-position-negative": i,
          };
        };
      function bt(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 11),
            e.ɵɵtext(2),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "div", 12),
            e.ɵɵelement(4, "img", 13),
            e.ɵɵelementStart(5, "a", 14),
            e.ɵɵpipe(6, "async"),
            e.ɵɵpipe(7, "chainExplorerAddressLink"),
            e.ɵɵelementStart(8, "span"),
            e.ɵɵtext(9),
            e.ɵɵpipe(10, "prettyHash"),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(11, "svg", 15),
            e.ɵɵelement(12, "use", 16),
            e.ɵɵelementEnd()(),
            e.ɵɵtemplate(13, Pt, 2, 0, "span", 17),
            e.ɵɵpipe(14, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(15, "div", 18),
            e.ɵɵtemplate(16, Ot, 2, 0, "svg", 19),
            e.ɵɵtemplate(17, St, 2, 0, "svg", 19),
            e.ɵɵelementStart(18, "span"),
            e.ɵɵtext(19),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(20, "p", 20)(21, "span"),
            e.ɵɵtext(22),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(23, "span"),
            e.ɵɵtext(24),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(25, "span", 21),
            e.ɵɵtext(26),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = i.$implicit,
            o = e.ɵɵnextContext(2);
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(t.number),
            e.ɵɵadvance(3),
            e.ɵɵattributeInterpolate1(
              "data-id",
              "top-",
              t.number,
              "-address-link"
            ),
            e.ɵɵproperty(
              "href",
              e.ɵɵpipeBind1(6, 12, e.ɵɵpipeBind1(7, 14, t.address)),
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(4),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(10, 16, t.address, e.ɵɵpureFunction0(21, wt))
            ),
            e.ɵɵadvance(4),
            e.ɵɵproperty(
              "ngIf",
              e.ɵɵpipeBind1(14, 19, o.walletAddress$) === t.address
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngClass",
              e.ɵɵpureFunction2(
                22,
                Mt,
                t.changeOfPosition > 0,
                t.changeOfPosition < 0
              )
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.changeOfPosition > 0),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.changeOfPosition < 0),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(
              t.changeOfPosition < 0
                ? -1 * t.changeOfPosition
                : t.changeOfPosition
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1("", t.referral, "%"),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1("", t.governance, "%"),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1("", t.votingPower, "%");
        }
      }
      const kt = function () {
        return [5, 10, 25, 100];
      };
      function At(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "mat-paginator", 26),
            e.ɵɵlistener("page", function (r) {
              e.ɵɵrestoreView(t);
              const c = e.ɵɵnextContext(3);
              return e.ɵɵresetView(c.onPageSelect(r));
            }),
            e.ɵɵpipe(1, "async"),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext().tuiLet,
            o = e.ɵɵnextContext(2);
          let r;
          e.ɵɵproperty("length", t)(
            "pageSize",
            null == (r = e.ɵɵpipeBind1(1, 3, o.pagination$)) ? null : r.pageSize
          )("pageSizeOptions", e.ɵɵpureFunction0(5, kt));
        }
      }
      function Et(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, At, 2, 6, "mat-paginator", 25),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = i.tuiLet;
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", t);
        }
      }
      function Tt(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div", 1)(2, "span", 2),
            e.ɵɵtext(3, "Top addresses by voting power"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "div", 3),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "async"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(7, "div", 4)(8, "span"),
            e.ɵɵtext(9, "\u2116"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(10, "span", 5),
            e.ɵɵtext(11, "Address"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(12, "span"),
            e.ɵɵelementStart(13, "span", 6),
            e.ɵɵtext(14, "Votes"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(15, "span", 7),
            e.ɵɵtext(16, "Voting power"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(17, "div", 8),
            e.ɵɵtemplate(18, bt, 27, 25, "ng-container", 9),
            e.ɵɵpipe(19, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(20, Et, 2, 1, "ng-container", 10),
            e.ɵɵpipe(21, "async"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          let o, r;
          e.ɵɵadvance(5),
            e.ɵɵtextInterpolate(
              null !==
                (o =
                  null == (o = e.ɵɵpipeBind1(6, 4, t.addresses$))
                    ? null
                    : o.length) && void 0 !== o
                ? o
                : 0
            ),
            e.ɵɵadvance(13),
            e.ɵɵproperty(
              "ngForOf",
              e.ɵɵpipeBind1(19, 6, t.paginatedAddresses$)
            )("ngForTrackBy", t.trackByTopAddresses),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "tuiLet",
              null !==
                (r =
                  null == (r = e.ɵɵpipeBind1(21, 8, t.addresses$))
                    ? null
                    : r.length) && void 0 !== r
                ? r
                : 0
            );
        }
      }
      let It = (() => {
        class n {
          constructor(t, o, r) {
            (this.governanceApiService = t),
              (this.governanceService = o),
              (this.walletQuery = r),
              (this.addresses$ = this.getTopAddresses()),
              (this.pagination$ = new Se.X({ pageSize: 10, pageIndex: 0 })),
              (this.paginatedAddresses$ = this.addresses$.pipe(
                (0, C.w)((c) =>
                  this.pagination$.pipe(
                    (0, x.U)(({ pageIndex: p, pageSize: l }) => {
                      const d = p * l;
                      return c.slice(d, d + l);
                    })
                  )
                )
              )),
              (this.walletAddress$ = this.walletQuery.connectedWalletAddress$);
          }
          trackByTopAddresses(t, o) {
            return o.number;
          }
          onPageSelect(t) {
            const { pageIndex: o, pageSize: r } = t;
            this.pagination$.next({
              pageIndex: null != o ? o : 0,
              pageSize: null != r ? r : 0,
            });
          }
          getTopAddresses() {
            return (0, j.a)([
              this.governanceApiService.getUsers$(),
              this.governanceApiService.getUsers$(ce.pH.week),
              this.governanceApiService.getOldUsers$(),
              this.governanceApiService.getGovernanceDetails(),
            ]).pipe(
              (0, ne.EB)(0, me.N.refreshTime.graphData),
              (0, x.U)(([t, o, r, c]) =>
                (function ft(n, i, t) {
                  return n.map((o, r) => {
                    const c = i.findIndex((d) => d.id === o.id),
                      { referral: p, governance: l } = (function xt(n) {
                        const {
                            leftoverReferralShareVoteAmount: i,
                            leftoverGovernanceShareVoteAmount: t,
                          } = n,
                          o = w.O$.from(null != i ? i : "0"),
                          r = w.O$.from(null != t ? t : "0"),
                          c = +(0, Y.formatUnits)(o.add(r), 18),
                          p = +(0, Y.formatUnits)(o.mul(100), 18) / c,
                          l = +(0, Y.formatUnits)(r.mul(100), 18) / c;
                        return {
                          referral: isNaN(p) ? "0" : Number(p).toFixed(0),
                          governance: isNaN(l) ? "0" : Number(l).toFixed(0),
                        };
                      })(o);
                    return -1 === c || c === r
                      ? {
                          address: o.id,
                          number: r + 1,
                          votingPower: Re(
                            +o.currentStake,
                            +(null == t ? void 0 : t.toString())
                          ),
                          referral: p,
                          governance: l,
                        }
                      : {
                          address: o.id,
                          changeOfPosition: c - r,
                          number: r + 1,
                          votingPower: Re(
                            +o.currentStake,
                            +(null == t ? void 0 : t.toString())
                          ),
                          referral: p,
                          governance: l,
                        };
                  });
                })(
                  (t = t.concat(r))
                    .filter(
                      (l, d, u) => u.findIndex((O) => O.id === l.id) === d
                    )
                    .sort((l, d) =>
                      +d.currentStake > +l.currentStake ? 1 : -1
                    ),
                  o,
                  w.O$.from(c.totalSupply)
                )
              ),
              (0, ne.i4)([]),
              (0, te.d)({ refCount: !0, bufferSize: 1 })
            );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(ce.rU),
              e.ɵɵdirectiveInject(de.n),
              e.ɵɵdirectiveInject(ee.r)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-top-addresses"]],
            decls: 2,
            vars: 3,
            consts: [
              [4, "ngIf"],
              [1, "top-addresses-header"],
              ["transloco", "topAddresses.by-voting-power"],
              [1, "address-count"],
              [1, "top-addresses-table-header", "top-addresses-grid"],
              ["transloco", "governance.address"],
              [
                "transloco",
                "governance.votes",
                1,
                "right-align",
                "vote-column",
              ],
              ["transloco", "governance.voting-power-new", 1, "right-align"],
              [1, "top-addresses-grid"],
              [4, "ngFor", "ngForOf", "ngForTrackBy"],
              [4, "tuiLet"],
              [1, "top-addresses-counter"],
              [1, "top-addresses-address-wrap"],
              ["src", "assets/images/wallet-logo-new.svg", "alt", ""],
              ["target", "_blank", 1, "top-addresses-address-link", 3, "href"],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-link.svg#arrow-link",
              ],
              [
                "class",
                "you-label",
                "transloco",
                "topAddresses.you",
                4,
                "ngIf",
              ],
              [1, "change-position", 3, "ngClass"],
              [
                "width",
                "12",
                "height",
                "8",
                "class",
                "change-position-arrow",
                4,
                "ngIf",
              ],
              [1, "right-align", "vote-column"],
              [1, "right-align"],
              ["transloco", "topAddresses.you", 1, "you-label"],
              ["width", "12", "height", "8", 1, "change-position-arrow"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow-down.svg#arrow-down",
              ],
              [
                "class",
                "top-addresses-paginator",
                3,
                "length",
                "pageSize",
                "pageSizeOptions",
                "page",
                4,
                "ngIf",
              ],
              [
                1,
                "top-addresses-paginator",
                3,
                "length",
                "pageSize",
                "pageSizeOptions",
                "page",
              ],
            ],
            template: function (t, o) {
              if (
                (1 & t &&
                  (e.ɵɵtemplate(0, Tt, 22, 10, "ng-container", 0),
                  e.ɵɵpipe(1, "async")),
                2 & t)
              ) {
                let r;
                e.ɵɵproperty(
                  "ngIf",
                  null == (r = e.ɵɵpipeBind1(1, 1, o.addresses$))
                    ? null
                    : r.length
                );
              }
            },
            dependencies: [
              g.mk,
              g.sg,
              g.O5,
              D.KI,
              Ie.NW,
              xe.Ls,
              g.Ov,
              Ct.V,
              yt.E,
            ],
            styles: [
              ".top-addresses-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:24px 2fr 1fr 1fr;grid-gap:26px 8px;align-items:center;font-size:16px;line-height:26px}.top-addresses-table-header[_ngcontent-%COMP%]{font-size:13px;line-height:15px;margin-bottom:32px;color:var(--1inch__ui-02)}.right-align[_ngcontent-%COMP%]{text-align:right}.vote-column[_ngcontent-%COMP%]{display:none}.vote-column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{margin-right:4px;color:var(--1inch__text-and-icons__approve)}.vote-column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-of-type{color:var(--1inch-common-text-03)}.top-addresses-header[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:20px;line-height:24px;font-weight:500;margin-bottom:24px}.top-addresses-header[_ngcontent-%COMP%]   .address-count[_ngcontent-%COMP%]{border-radius:10px;padding:0 6px;font-size:13px;margin-left:16px;background-color:var(--1inch-btn-bg-01);color:var(--1inch-text-01)}.top-addresses-counter[_ngcontent-%COMP%]{color:var(--1inch__ui-02)}.change-position-counter[_ngcontent-%COMP%]{font-size:13px}.change-position[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:4px 10px;border-radius:20px;width:-moz-fit-content;width:fit-content;min-width:44px}.change-position-positive[_ngcontent-%COMP%]{background:var(--1inch__background__success);color:var(--1inch__text-and-icons__approve)}.change-position-positive[_ngcontent-%COMP%]   .change-position-arrow[_ngcontent-%COMP%]{margin-right:4px;color:var(--1inch__text-and-icons__approve)}.change-position-negative[_ngcontent-%COMP%]{background:var(--1inch-common-bg-12);color:var(--1inch__text-and-icons__error)}.change-position-negative[_ngcontent-%COMP%]   .change-position-arrow[_ngcontent-%COMP%]{margin-right:4px;color:var(--1inch__text-and-icons__error)}.you-label[_ngcontent-%COMP%]{margin-left:20px;padding:4px 16px;border-radius:16px;background:rgba(35,198,139,.5)}.top-addresses-paginator[_ngcontent-%COMP%]{margin-top:16px}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-container{font-size:14px;justify-content:space-between;padding:0}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size{align-items:center}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:1px 0 0 12px;width:48px}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:14px}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin:2px 20px 0 0}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-icon-button{color:var(--1inch__ui-02)}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-label{margin-left:0}@media (max-width: 520px){.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-container{padding:0}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-range-label{margin-right:8px}}@media (max-width: 418px){.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-range-actions button{width:25px}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-container, .top-addresses-paginator[_ngcontent-%COMP%]     .mat-select-trigger{font-size:12px}.top-addresses-paginator[_ngcontent-%COMP%]     .mat-paginator-page-size-select{margin:2px 0 0 4px;width:40px}}.top-addresses-address-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.top-addresses-address-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:32px;height:32px;margin-right:16px}.top-addresses-address-link[_ngcontent-%COMP%]{display:flex;align-items:center;text-decoration:none;font-family:Roboto Mono,monospace;color:var(--1inch-text-01)}.top-addresses-address-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:-2px 0 0 8px;color:var(--1inch__ui-02)}@media (min-width: 480px){.vote-column[_ngcontent-%COMP%]{display:inline-block}.top-addresses-grid[_ngcontent-%COMP%]{grid-template-columns:24px 4fr 1fr 1fr 1fr}.top-addresses-header[_ngcontent-%COMP%]{font-size:24px;line-height:28px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Le = a(33747),
        Vt = a(55231),
        Bt = a(93475),
        we = a(90813),
        Me = a(67701),
        X = a(42163),
        Dt = a(58913),
        $t = a(36565),
        Ft = a(77065),
        je = a(52611),
        We = a(83389),
        Ue = a(78612),
        ze = a(83140);
      function Rt(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "div", 21)(2, "app-button", 22),
          e.ɵɵelement(3, "img", 23),
          e.ɵɵelementStart(4, "span", 24),
          e.ɵɵtext(5, "Connect wallet"),
          e.ɵɵelementEnd()()(),
          e.ɵɵelementContainerEnd());
      }
      function Lt(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-button", 26),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.notify());
            }),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(2, "svg", 27),
            e.ɵɵelement(3, "use", 28),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(4, "span", 29),
            e.ɵɵtext(5, "Migrate Module"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
      }
      function jt(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "app-button", 30)(2, "span", 31),
          e.ɵɵtext(3, "Pending..."),
          e.ɵɵelementEnd()(),
          e.ɵɵelementContainerEnd()),
          2 & n && (e.ɵɵadvance(1), e.ɵɵproperty("disabled", !0));
      }
      function Wt(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Lt, 6, 0, "ng-container", 25),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, jt, 4, 1, "ng-container", 25),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !e.ɵɵpipeBind1(2, 2, t.hasPendingVoteTx$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(4, 4, t.hasPendingVoteTx$));
        }
      }
      function Ut(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "app-button", 32),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(2, "svg", 27),
          e.ɵɵelement(3, "use", 28),
          e.ɵɵelementEnd(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(4, "span", 33),
          e.ɵɵtext(5, "Insufficient balance"),
          e.ɵɵelementEnd()(),
          e.ɵɵelementContainerEnd()),
          2 & n && (e.ɵɵadvance(1), e.ɵɵproperty("disabled", !0));
      }
      function zt(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "app-button", 30)(2, "span", 31),
          e.ɵɵtext(3, "Pending..."),
          e.ɵɵelementEnd()(),
          e.ɵɵelementContainerEnd()),
          2 & n && (e.ɵɵadvance(1), e.ɵɵproperty("disabled", !0));
      }
      function Nt(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 36)(1, "app-button", 37),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.vote());
            }),
            e.ɵɵelementStart(2, "span", 38),
            e.ɵɵtext(3, "Vote"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(4, "app-button", 39),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(2);
              return e.ɵɵresetView(r.removeVote());
            }),
            e.ɵɵelementStart(5, "span", 40),
            e.ɵɵtext(6, "Remove votes"),
            e.ɵɵelementEnd()()();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("disabled", t.form.invalid),
            e.ɵɵadvance(3),
            e.ɵɵproperty("disabled", t.form.invalid);
        }
      }
      function Ht(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, zt, 4, 1, "ng-container", 34),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(
              3,
              Nt,
              7,
              2,
              "ng-template",
              null,
              35,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵreference(4),
            o = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(2, 2, o.hasPendingVoteTx$))(
              "ngIfElse",
              t
            );
        }
      }
      function Gt(n, i) {
        1 & n &&
          (e.ɵɵelementStart(0, "div", 41),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(1, "svg", 42),
          e.ɵɵelement(2, "use", 43),
          e.ɵɵelementEnd(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(3, "p", 44),
          e.ɵɵtext(4, " Sum of Referrer and Treasury should be exactly 100%"),
          e.ɵɵelementEnd()());
      }
      const Qt = function (n) {
        return { value: n };
      };
      function Kt(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 45),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(1, "svg", 46),
            e.ɵɵelement(2, "use", 43),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(3, "div", 47)(4, "p", 48),
            e.ɵɵtext(
              5,
              " Lowering the referrer reward may limit the growth of the user base and trading volume."
            ),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(6, "p", 49),
            e.ɵɵtext(
              7,
              " Consequently, this will limit the spread surplus generated. "
            ),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(8, "p", 50),
            e.ɵɵtext(9),
            e.ɵɵpipe(10, "transloco"),
            e.ɵɵelementEnd()()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(9),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(
                10,
                1,
                "aggregationProtocolVote.it-is-recommended2",
                e.ɵɵpureFunction1(4, Qt, t.recommendedReferrerReward)
              )
            );
        }
      }
      const Yt = function (n, i) {
        return {
          "field-simple-input-warning": n,
          "field-simple-input-error": i,
        };
      };
      var oe = (() => {
        return (
          ((n = oe || (oe = {})).walletDisconnected = "wallet_disconnected"),
          (n.notEnoughBalance = "not_enough_balance"),
          (n.needNotify = "need_notify"),
          (n.vote = "vote"),
          oe
        );
        var n;
      })();
      function Ne() {
        return [
          y.Validators.min(0),
          y.Validators.max(100),
          y.Validators.required,
          y.Validators.pattern(/^[.\d]+$/),
        ];
      }
      const Xt = (n) => {
        var i, t;
        const o =
            null === (i = n.get("referrerAmount")) || void 0 === i
              ? void 0
              : i.value,
          r =
            null === (t = n.get("governanceAmount")) || void 0 === t
              ? void 0
              : t.value;
        return parseFloat(o) + parseFloat(r) === 100
          ? null
          : { oneHundredInTotal: !0 };
      };
      let Jt = (() => {
        class n {
          constructor(t, o, r, c, p, l, d, u, O, h, Q, _, A, ae, he) {
            (this.destroy$ = t),
              (this.fb = o),
              (this.transactionHistoryQuery = r),
              (this.governanceQuery = c),
              (this.walletConnectionQuery = p),
              (this.route = l),
              (this.governanceApiService = d),
              (this.governanceTransactionService = u),
              (this.governanceService = O),
              (this.gasPriceQuery = h),
              (this.matDialogService = Q),
              (this.router = _),
              (this.erc20Helper = A),
              (this.webAnalyticsService = ae),
              (this.contractAddressService = he),
              (this.form = this.fb.group(
                {
                  referrerAmount: new y.UntypedFormControl(20, Ne()),
                  governanceAmount: new y.UntypedFormControl(80, Ne()),
                },
                { validators: Xt }
              )),
              (this.needToNotify$ = this.governanceQuery.needToNotifyExchange$),
              (this.recommendedReferrerReward = me.N.recommendedReferrerReward),
              (this.governanceContract$ =
                this.contractAddressService.getContractAddressOnce(
                  Ce.a4.exchangeGovernance
                )),
              (this.votingBalanceRaw$ = (0, j.a)([
                this.walletConnectionQuery.connectedWalletAddress$,
                this.governanceContract$,
              ]).pipe(
                (0, C.w)(([ve, be]) => this.getStakedAmount(be, ve)),
                (0, te.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.buttonState$ = (0, j.a)([
                this.walletConnectionQuery.isWalletConnected$,
                this.votingBalanceRaw$,
                this.needToNotify$,
              ]).pipe(
                (0, x.U)(([ve, be, zo]) =>
                  ve
                    ? zo
                      ? oe.needNotify
                      : w.O$.from(be).lte(0)
                      ? oe.notEnoughBalance
                      : oe.vote
                    : (this.governanceService.setState(X.Y.walletDisconnected),
                      oe.walletDisconnected)
                )
              )),
              (this.hasPendingVoteTx$ = this.transactionHistoryQuery
                .pendingTransactionsByType([
                  Me.E.notifyGovernance,
                  Me.E.leftoverVoteGovernance,
                  Me.E.discardLeftoverVoteGovernance,
                ])
                .pipe(
                  (0, x.U)((ve) => ve.length > 0),
                  (0, te.d)({ refCount: !0, bufferSize: 1 })
                ));
          }
          get referrerAmount() {
            return this.form.get("referrerAmount");
          }
          get governanceAmount() {
            return this.form.get("governanceAmount");
          }
          get isReferrerAmountLow() {
            try {
              return (
                parseFloat(this.referrerAmount.value) <
                this.recommendedReferrerReward
              );
            } catch (t) {
              ze.error(t);
            }
            return !1;
          }
          ngOnInit() {
            const t = this.referrerAmount.valueChanges
              .pipe((0, B.O)([this.referrerAmount.value]))
              .pipe(
                (0, re.b)((o) => {
                  if (this.referrerAmount.valid)
                    try {
                      const c = 100 - parseFloat(o);
                      c >= 0 && this.governanceAmount.setValue(c);
                    } catch (r) {
                      ze.error(r);
                    }
                }),
                (0, Vt.R)(this.destroy$)
              );
            (0, we.O)(t, "referrerAmount$");
          }
          reset() {
            this.form.reset({ referrerAmount: 20, governanceAmount: 80 });
          }
          notify() {
            this.governanceTransactionService.notify();
          }
          removeVote() {
            this.governanceTransactionService.discardLeftoverShareVote();
          }
          vote() {
            const t = this.governanceAmount.value.toString(),
              o = (0, L.bl)(t, 16);
            this.governanceTransactionService.leftoverShareVote(o);
          }
          getStakedAmount(t, o) {
            return o
              ? this.governanceTransactionService.getStakedAmount$(t, o, !1)
              : (0, I.of)(Bt.Y);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(Le.a3, 2),
              e.ɵɵdirectiveInject(y.UntypedFormBuilder),
              e.ɵɵdirectiveInject(Dt.x),
              e.ɵɵdirectiveInject(le.R),
              e.ɵɵdirectiveInject(ee.r),
              e.ɵɵdirectiveInject(H.gz),
              e.ɵɵdirectiveInject(ce.rU),
              e.ɵɵdirectiveInject(ge.h),
              e.ɵɵdirectiveInject(de.n),
              e.ɵɵdirectiveInject($t.j),
              e.ɵɵdirectiveInject(Ft.uw),
              e.ɵɵdirectiveInject(H.F0),
              e.ɵɵdirectiveInject(je.ZU),
              e.ɵɵdirectiveInject(ye.y),
              e.ɵɵdirectiveInject(De.O)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["aggregation-protocol-vote"]],
            features: [e.ɵɵProvidersFeature([Le.a3])],
            decls: 36,
            vars: 20,
            consts: [
              [1, "card", "voting-card", 3, "formGroup"],
              [1, "aggregation-protocol-header"],
              [
                "transloco",
                "votePageAggregation.voting",
                1,
                "aggregation-protocol-title",
              ],
              [
                "data-id",
                "aggregation-protocol.Reward Distribution.reset-button",
                1,
                "text-blue",
                "link-button",
                3,
                "click",
              ],
              ["transloco", "button.reset"],
              [1, "referer-container"],
              [
                "transloco",
                "aggregationVotingItem.referrer",
                1,
                "text-gray",
                "field-header",
              ],
              [1, "vote-input-wrap"],
              [
                "data-id",
                "aggregation-protocol.Reward Distribution.referrer-input",
                "inputmode",
                "decimal",
                "type",
                "number",
                "formControlName",
                "referrerAmount",
                "autocomplete",
                "off",
                1,
                "field",
                "field-simple",
                "vote-custom-input",
                3,
                "placeholder",
                "ngClass",
              ],
              [1, "text-gray", "vote-custom-input-units"],
              [1, "icon-separator-container"],
              [1, "icon-separator"],
              ["width", "16", "height", "18"],
              [0, "xlink", "href", "assets/images/icons/link.svg#link"],
              [1, "treasury-container", "mb-16"],
              [
                "transloco",
                "aggregationVotingItem.treasury",
                1,
                "text-gray",
                "field-header",
              ],
              [
                "data-id",
                "aggregation-protocol.Reward Distribution.governance-input",
                "disabled",
                "",
                "inputmode",
                "decimal",
                "formControlName",
                "governanceAmount",
                "autocomplete",
                "off",
                1,
                "field",
                "field-simple",
                "vote-custom-input",
                "input-text-gray",
                3,
                "placeholder",
              ],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              ["class", "mt-16 warning-box warning-box-red", 4, "ngIf"],
              ["class", "warning-box warning-box-yellow mt-16", 4, "ngIf"],
              [1, "d-flex", "justify-content-center"],
              [
                "walletConnect",
                "",
                "data-id",
                "aggregation-protocol.Reward Distribution.connect-wallet-button",
                "color",
                "blue",
                "fullWidth",
                "true",
                1,
                "token-swap-button",
              ],
              ["src", "assets/images/icons/connect.svg", "alt", "", 1, "mr-2"],
              ["transloco", "button.connect-wallet2"],
              [4, "ngIf"],
              [
                "data-id",
                "aggregation-protocol.Reward Distribution.migrate-module-button",
                "fullWidth",
                "true",
                "color",
                "blue",
                1,
                "token-swap-button",
                3,
                "clicked",
              ],
              ["width", "24", "height", "24", 1, "mr-2"],
              [0, "xlink", "href", "assets/images/icons/magic.svg#magic"],
              ["transloco", "votePageAggregation.migrate-module"],
              ["color", "accentBlue", "fullWidth", "true", 3, "disabled"],
              ["transloco", "votePageAggregation.pending"],
              [
                "color",
                "blue",
                "fullWidth",
                "true",
                1,
                "token-swap-button",
                3,
                "disabled",
              ],
              ["transloco", "button.insufficient-balance"],
              [4, "ngIf", "ngIfElse"],
              ["noPendingTx", ""],
              [1, "voting-buttons-two-column"],
              [
                "data-id",
                "aggregation-protocol.Reward Distribution.vote-button",
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                1,
                "mb-12",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "votePageAggregation.vote"],
              [
                "data-id",
                "aggregation-protocol.Reward Distribution.remove-votes-button",
                "color",
                "blue",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "votePageAggregation.remove-votes2"],
              [1, "mt-16", "warning-box", "warning-box-red"],
              ["width", "20", "height", "18"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/attention_2.svg#attention",
              ],
              [
                "transloco",
                "aggregationProtocolVote.sum-of-referrer-and-treasury",
              ],
              [1, "warning-box", "warning-box-yellow", "mt-16"],
              ["width", "20", "height", "18", 1, "warning-icon"],
              [1, "text-yellow"],
              [
                "transloco",
                "aggregationProtocolVote.lowering-the-referral-reward2",
              ],
              [
                "transloco",
                "aggregationProtocolVote.limit-the-spread-surplus2",
                1,
                "mt-2",
              ],
              [1, "mt-2"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "span", 2),
                e.ɵɵtext(3, "Voting"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(4, "span", 3),
                e.ɵɵlistener("click", function () {
                  return o.reset();
                }),
                e.ɵɵelementStart(5, "span", 4),
                e.ɵɵtext(6, "Reset"),
                e.ɵɵelementEnd()()(),
                e.ɵɵelementStart(7, "div")(8, "div", 5)(9, "span", 6),
                e.ɵɵtext(10, "Referrer"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(11, "div", 7),
                e.ɵɵelement(12, "input", 8),
                e.ɵɵpipe(13, "transloco"),
                e.ɵɵelementStart(14, "span", 9),
                e.ɵɵtext(15, "%"),
                e.ɵɵelementEnd()()(),
                e.ɵɵelementStart(16, "div", 10)(17, "div", 11),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(18, "svg", 12),
                e.ɵɵelement(19, "use", 13),
                e.ɵɵelementEnd()()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(20, "div", 14)(21, "span", 15),
                e.ɵɵtext(22, "Treasury"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(23, "div", 7),
                e.ɵɵelement(24, "input", 16),
                e.ɵɵpipe(25, "transloco"),
                e.ɵɵelementStart(26, "span", 9),
                e.ɵɵtext(27, "%"),
                e.ɵɵelementEnd()()()(),
                e.ɵɵelementContainerStart(28, 17),
                e.ɵɵpipe(29, "async"),
                e.ɵɵtemplate(30, Rt, 6, 0, "ng-container", 18),
                e.ɵɵtemplate(31, Wt, 5, 6, "ng-container", 18),
                e.ɵɵtemplate(32, Ut, 6, 1, "ng-container", 18),
                e.ɵɵtemplate(33, Ht, 5, 4, "ng-container", 18),
                e.ɵɵtemplate(34, Gt, 5, 0, "div", 19),
                e.ɵɵtemplate(35, Kt, 11, 6, "div", 20),
                e.ɵɵelementContainerEnd(),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵproperty("formGroup", o.form),
                  e.ɵɵadvance(12),
                  e.ɵɵpropertyInterpolate(
                    "placeholder",
                    e.ɵɵpipeBind1(13, 11, "votePageAggregation.referrer-reward")
                  ),
                  e.ɵɵproperty(
                    "ngClass",
                    e.ɵɵpureFunction2(
                      17,
                      Yt,
                      o.isReferrerAmountLow,
                      null == o.referrerAmount ? null : o.referrerAmount.invalid
                    )
                  ),
                  e.ɵɵadvance(12),
                  e.ɵɵpropertyInterpolate(
                    "placeholder",
                    e.ɵɵpipeBind1(25, 13, "advancedSettings.custom")
                  ),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty(
                    "ngSwitch",
                    e.ɵɵpipeBind1(29, 15, o.buttonState$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngSwitchCase", "wallet_disconnected"),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", "need_notify"),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", "not_enough_balance"),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", "vote"),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", o.form.invalid),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", o.isReferrerAmountLow));
            },
            dependencies: [
              g.mk,
              g.O5,
              g.RF,
              g.n9,
              D.KI,
              y.DefaultValueAccessor,
              y.NumberValueAccessor,
              y.NgControlStatus,
              y.NgControlStatusGroup,
              y.FormGroupDirective,
              y.FormControlName,
              We.r,
              Ue.M,
              g.Ov,
              D.Ot,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block}.vote-info[_ngcontent-%COMP%]{padding:16px;border-radius:16px;border:1px solid rgba(85,153,255,.2);display:flex;justify-content:center;align-items:center;flex-direction:column}@media (min-width: 480px){.vote-info[_ngcontent-%COMP%]{flex-direction:row}}@media (min-width: 940px){.vote-info[_ngcontent-%COMP%]{flex-direction:column}}@media (min-width: 1200px){.vote-info[_ngcontent-%COMP%]{flex-direction:row}}.votes-block[_ngcontent-%COMP%]{width:100%;margin-top:16px}@media (min-width: 480px){.votes-block[_ngcontent-%COMP%]{margin-top:0;margin-left:40px}}@media (min-width: 700px){.votes-block[_ngcontent-%COMP%]{display:flex}}@media (min-width: 940px){.votes-block[_ngcontent-%COMP%]{margin-top:16px;margin-left:0;display:block}}@media (min-width: 1300px){.votes-block[_ngcontent-%COMP%]{display:flex;margin-top:0;margin-left:40px}}.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between;margin-bottom:16px;font-size:12px}.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}@media (min-width: 375px){.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:16px}}@media (min-width: 700px){.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;margin-bottom:0}}@media (min-width: 940px){.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between;margin-bottom:16px}.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}}@media (min-width: 1300px){.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;margin-bottom:0}}@media (min-width: 700px){.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .votes-block-value[_ngcontent-%COMP%]{margin-top:8px;font-size:20px}}@media (min-width: 940px){.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .votes-block-value[_ngcontent-%COMP%]{margin-top:0;font-size:16px}}@media (min-width: 1300px){.votes-block[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .votes-block-value[_ngcontent-%COMP%]{margin-top:8px;font-size:20px}}.vote-info-radial-gauge[_ngcontent-%COMP%]{height:70px;position:relative;align-items:center;display:flex;flex-direction:column;justify-content:flex-end;margin:0 40px}.vote-info-radial-gauge[_ngcontent-%COMP%]   .radial-gauge[_ngcontent-%COMP%]{position:absolute;bottom:0}.current-result[_ngcontent-%COMP%]{white-space:nowrap}.voting-item-percents-time[_ngcontent-%COMP%]{font-size:24px;font-weight:300;text-align:center;white-space:nowrap}.vote-info-text[_ngcontent-%COMP%]{line-height:30px}.voting-info[_ngcontent-%COMP%]{padding:16px 8px;border-radius:16px;border:1px solid}.voting-buttons-one-column[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-column-gap:16px}.voting-buttons-two-column[_ngcontent-%COMP%]{display:flex;flex-direction:column}.vote-input-wrap[_ngcontent-%COMP%]{position:relative}.vote-input-wrap-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}.referer-container[_ngcontent-%COMP%]{background-color:var(--1inch-bg-01);border-radius:16px;padding:15px;border:1px solid var(--1inch-bg-01)}.treasury-container[_ngcontent-%COMP%]{border-radius:16px;padding:15px;position:relative;border:1px solid var(--1inch-border-01)}.treasury-container[_ngcontent-%COMP%]   .vote-custom-input[_ngcontent-%COMP%]{background-color:inherit!important}.vote-custom-input[_ngcontent-%COMP%]{width:100%;padding-right:44px;border:none;font-size:20px}.vote-custom-input-units[_ngcontent-%COMP%]{position:absolute;right:16px;top:12px}.vote-default-slider[_ngcontent-%COMP%]{width:100%}.slider-limits[_ngcontent-%COMP%]{position:absolute;bottom:0;left:8px;right:8px;display:flex;justify-content:space-between}.voting-card[_ngcontent-%COMP%]{border-radius:24px;margin-bottom:16px;padding:16px!important;background:var(--1inch-bg-02)}.voting-card[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{display:flex;height:48px;min-width:100%}@media (max-width: 418px){.voting-card[_ngcontent-%COMP%]{margin:0 -16px 16px}}.aggregation-protocol-header[_ngcontent-%COMP%]{margin:0 8px 14px;display:flex;justify-content:space-between;align-items:center}.aggregation-protocol-title[_ngcontent-%COMP%]{font-size:16px;line-height:26px;font-weight:500}.field-header-fix[_ngcontent-%COMP%]{align-items:flex-end}.vote-value[_ngcontent-%COMP%]{font-size:24px}@media (max-width: 400px){.vote-value[_ngcontent-%COMP%]{font-size:20px}}.voting-balance-row[_ngcontent-%COMP%]{padding:8px;border-radius:10px}.clicked-row[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.clicked-row[_ngcontent-%COMP%]:hover{cursor:pointer}.selected-voting-balance[_ngcontent-%COMP%]{color:var(--1inch-common-text-03)!important}.warning-box[_ngcontent-%COMP%]{display:grid;grid-column-gap:16px;grid-template-columns:20px 1fr;align-items:center}.icon-separator-container[_ngcontent-%COMP%]{position:relative;height:8px;text-align:center}.icon-separator-container[_ngcontent-%COMP%]   .icon-separator[_ngcontent-%COMP%]{position:absolute;left:calc(50% - 12px);top:calc(50% - 12px);width:24px;height:24px;align-items:center;line-height:24px;border-radius:50%;background-color:var(--1inch-btn-bg-03);z-index:10}.icon-separator-container[_ngcontent-%COMP%]   .icon-separator[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch-text-01)}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Zt = a(24608);
      function qt(n, i) {
        1 & n && e.ɵɵelementContainer(0);
      }
      function en(n, i) {
        if ((1 & n && e.ɵɵelement(0, "voting-stats", 13), 2 & n)) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty("contractName", t.votingContractName);
        }
      }
      function tn(n, i) {
        1 & n && e.ɵɵelementContainer(0);
      }
      function nn(n, i) {
        1 & n &&
          (e.ɵɵelementStart(0, "p", 14)(1, "span", 15),
          e.ɵɵtext(
            2,
            "The Swap Surplus is the difference between the swap price at the time of the quote and that at the time that the transaction is mined. It occurs in swap transactions when the executed price is slightly better than the price quoted."
          ),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(3, "span"),
          e.ɵɵtext(4, "\xa0"),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(5, "a", 16),
          e.ɵɵtext(6, "Read more"),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(7, "span"),
          e.ɵɵtext(8, "."),
          e.ɵɵelementEnd()(),
          e.ɵɵelementStart(9, "p", 17)(10, "span", 18),
          e.ɵɵtext(
            11,
            " 1inch Network DAO have full governance and total control over the Swap Surplus distribution. Through Instant Governance, any 1INCH staker can directly vote on the distribution of the Swap Surplus on "
          ),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(12, "span"),
          e.ɵɵtext(13, "\xa0"),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(14, "a", 19),
          e.ɵɵtext(15, "app.1inch.io"),
          e.ɵɵelementEnd()(),
          e.ɵɵelementStart(16, "p", 20),
          e.ɵɵtext(
            17,
            " This reward will be paid to referrers, and its size will be decided by the DAO. All proceeds from referral rewards will be aggregated and converted into 1INCH tokens. Referrers can subsequently claim their share of 1INCH tokens for all the pools in one gas-efficient claim transaction. "
          ),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(18, "p", 21),
          e.ɵɵtext(
            19,
            " Votes are counted, and a parameter\u2019s value is changed gradually during decay time after voting. LP\u2019s can change Default values separately for each pool. They are determined by liquidity providers using a similar voting system. You can vote or change your vote at any time. "
          ),
          e.ɵɵelementEnd());
      }
      let on = (() => {
        class n {
          constructor(t, o, r, c, p, l, d, u, O, h, Q) {
            (this.walletConnectionQuery = t),
              (this.governanceApiService = o),
              (this.governanceService = r),
              (this.governanceTransactionService = c),
              (this.governanceQuery = p),
              (this.multiCallService = l),
              (this.activatedRoute = d),
              (this.activeConnectionQuery = u),
              (this.router = O),
              (this.webAnalyticsService = h),
              (this.currentSpenderService = Q),
              (this.votingContractName = Ce.a4.exchangeGovernance),
              (this.isWalletConnected$ =
                this.walletConnectionQuery.isWalletConnected$),
              c.startPipelines();
          }
          ngOnInit() {
            this.webAnalyticsService.pageView(
              "/dao/governance",
              "DAO / Governance"
            ),
              this.currentSpenderService.setCurrentSpenderType(
                se.F.aggregationProtocol
              );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(ee.r),
              e.ɵɵdirectiveInject(ce.rU),
              e.ɵɵdirectiveInject(de.n),
              e.ɵɵdirectiveInject(ge.h),
              e.ɵɵdirectiveInject(le.R),
              e.ɵɵdirectiveInject(dt.Y),
              e.ɵɵdirectiveInject(H.gz),
              e.ɵɵdirectiveInject(pe.r),
              e.ɵɵdirectiveInject(H.F0),
              e.ɵɵdirectiveInject(ye.y),
              e.ɵɵdirectiveInject(se.q)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-governance-page"]],
            decls: 20,
            vars: 5,
            consts: [
              ["transloco", "aggregationProtocol.title", 1, "page-header"],
              [1, "aggregation-protocol-page"],
              [1, "column-1"],
              [1, "mb-40", "votings-wrap"],
              [2, "grid-column-start", "1", "grid-column-end", "4"],
              [1, "mobile-hidden", "mb-40"],
              [4, "ngTemplateOutlet"],
              [1, "mb-40"],
              [1, "column-2"],
              [1, "governance-card"],
              [3, "contractName", 4, "ngIf"],
              [1, "governance-page-header", "mt-16", "mb-16", "desktop-hidden"],
              ["aggregationText", ""],
              [3, "contractName"],
              [1, "text-gray", "governance-text"],
              ["transloco", "aggregationPage.text1-2"],
              [
                "href",
                "https://help.1inch.io/en/articles/5583703-what-is-a-swap-surplus-and-where-does-it-end-up-when-my-swap-is-completed",
                "target",
                "_blank",
                "transloco",
                "infoBlocks.read-more",
              ],
              [1, "text-gray", "mb-16", "governance-text"],
              ["transloco", "aggregationPage.text2-2"],
              ["href", "https://app.1inch.io/", "target", "_blank"],
              [
                "transloco",
                "aggregationProtocol.this-reward-will-be-paid",
                1,
                "text-gray",
                "mb-16",
                "governance-text",
              ],
              [
                "transloco",
                "aggregationProtocol.votes-are-counted2",
                1,
                "text-gray",
                "mb-16",
                "governance-text",
              ],
            ],
            template: function (t, o) {
              if (
                (1 & t &&
                  (e.ɵɵelementStart(0, "h1", 0),
                  e.ɵɵtext(1, "Aggregation protocol governance"),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(2, "div", 1)(3, "div", 2)(4, "div", 3)(
                    5,
                    "div",
                    4
                  ),
                  e.ɵɵelement(6, "app-aggregation-voting-item"),
                  e.ɵɵelementEnd()(),
                  e.ɵɵelementStart(7, "div", 5),
                  e.ɵɵtemplate(8, qt, 1, 0, "ng-container", 6),
                  e.ɵɵelementEnd(),
                  e.ɵɵelementStart(9, "div", 7),
                  e.ɵɵelement(10, "app-top-addresses"),
                  e.ɵɵelementEnd()(),
                  e.ɵɵelementStart(11, "div", 8)(12, "div", 9),
                  e.ɵɵelement(13, "aggregation-protocol-vote"),
                  e.ɵɵelementEnd(),
                  e.ɵɵtemplate(14, en, 1, 1, "voting-stats", 10),
                  e.ɵɵpipe(15, "async"),
                  e.ɵɵelementStart(16, "div", 11),
                  e.ɵɵtemplate(17, tn, 1, 0, "ng-container", 6),
                  e.ɵɵelementEnd()()(),
                  e.ɵɵtemplate(
                    18,
                    nn,
                    20,
                    0,
                    "ng-template",
                    null,
                    12,
                    e.ɵɵtemplateRefExtractor
                  )),
                2 & t)
              ) {
                const r = e.ɵɵreference(19);
                e.ɵɵadvance(8),
                  e.ɵɵproperty("ngTemplateOutlet", r),
                  e.ɵɵadvance(6),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(15, 3, o.isWalletConnected$)
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("ngTemplateOutlet", r);
              }
            },
            dependencies: [g.O5, g.tP, D.KI, _t, It, Jt, Zt.E, g.Ov],
            styles: [
              "[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:1180px;margin:0 auto}@media (max-width: 520px){[_nghost-%COMP%]{margin-top:-20px}}@media (max-width: 418px){[_nghost-%COMP%]{margin-top:0}}.aggregation-protocol-page[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 400px;grid-column-gap:40px}@media (max-width: 940px){.aggregation-protocol-page[_ngcontent-%COMP%]{display:flex;flex-direction:column}}.page-header[_ngcontent-%COMP%]{font-size:20px;margin-bottom:18px}@media (min-width: 940px){.page-header[_ngcontent-%COMP%]{font-size:32px;margin-bottom:32px}}.governance-text[_ngcontent-%COMP%]{font-size:16px;line-height:26px;margin-top:16px}.governance-text[_ngcontent-%COMP%]:first-child{margin-top:0}.votings-wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;grid-gap:16px}.voting-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{margin-bottom:16px}.voting-stats[_ngcontent-%COMP%]   .voting-stat-value[_ngcontent-%COMP%]{display:flex;align-items:center}.voting-stats[_ngcontent-%COMP%]   .voting-stat-value[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-right:8px}.settings-button[_ngcontent-%COMP%]{position:absolute;right:16px;top:9px;z-index:10}.column-2[_ngcontent-%COMP%]{order:-1;flex-direction:column}.column-1[_ngcontent-%COMP%]{margin-top:16px}.governance-card[_ngcontent-%COMP%]{max-width:480px;margin:0 auto;border-radius:20px;border:none;padding:0;background:var(--1inch-bg-02)}.governance-card-content[_ngcontent-%COMP%]{padding:32px;position:relative}@media (min-width: 480px){.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}.voting-stats[_ngcontent-%COMP%]{padding:16px;border-radius:20px;border:1px solid rgba(85,153,255,.2);display:grid;grid-template-columns:2fr 1fr 2fr}.voting-stats[_ngcontent-%COMP%]   .voting-stat-value[_ngcontent-%COMP%]{display:block}.voting-stats[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{margin-bottom:0}.voting-stats[_ngcontent-%COMP%]   .voting-stat-value-umount[_ngcontent-%COMP%]{margin-bottom:16px}.settings-button[_ngcontent-%COMP%]{top:20px}}@media (max-width: 520px){.stake-tabs[_ngcontent-%COMP%]{margin-top:4px}}@media (min-width: 720px){.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}.settings-button[_ngcontent-%COMP%]{right:32px}}@media (min-width: 940px){.column-1[_ngcontent-%COMP%]{margin-top:0}.column-2[_ngcontent-%COMP%]{order:1;display:block}.column-2[_ngcontent-%COMP%]   .voting-stats[_ngcontent-%COMP%]{order:2}.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (min-width: 1024px){.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (min-width: 1100px){.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (min-width: 1300px){.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}}@media (max-width: 520px){.governance-card-content[_ngcontent-%COMP%]{padding:16px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var an = a(52260),
        rn = a(30606),
        Qe = a(17114),
        ie = a(58789);
      function sn(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "span", 2),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.showText());
            }),
            e.ɵɵtext(1, "More"),
            e.ɵɵelementEnd();
        }
      }
      const cn = ["*"];
      let ln = (() => {
        class n {
          constructor() {
            this.isVisibleText = !1;
          }
          showText() {
            const t = document.getElementsByClassName("collapsible-text-wrap");
            t &&
              Array.from(t).forEach((o) => {
                o.style.height = "auto";
              }),
              (this.isVisibleText = !0);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-collapsible-text"]],
            ngContentSelectors: cn,
            decls: 3,
            vars: 2,
            consts: [
              [1, "collapsible-text-wrap", 3, "ngClass"],
              [
                "class",
                "mt-16 text-blue more-link",
                "transloco",
                "aggregationPage.more",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "transloco",
                "aggregationPage.more",
                1,
                "mt-16",
                "text-blue",
                "more-link",
                3,
                "click",
              ],
            ],
            template: function (t, o) {
              1 & t &&
                (e.ɵɵprojectionDef(),
                e.ɵɵelementStart(0, "div", 0),
                e.ɵɵprojection(1),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(2, sn, 2, 0, "span", 1)),
                2 & t &&
                  (e.ɵɵproperty("ngClass", !o.isVisibleText && "short-text"),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngIf", !o.isVisibleText));
            },
            dependencies: [g.mk, g.O5, D.KI],
            styles: [
              '.more-link[_ngcontent-%COMP%]{display:block;cursor:pointer}.collapsible-text-wrap[_ngcontent-%COMP%]{overflow:hidden;transition:5s;height:84px}.short-text[_ngcontent-%COMP%]{position:relative}.short-text[_ngcontent-%COMP%]:after{content:" ";position:absolute;bottom:-10px;width:100%;height:40px}',
            ],
          })),
          n
        );
      })();
      var pn = a(13355),
        dn = a(83140);
      function gn(n, i) {
        if ((1 & n && e.ɵɵelement(0, "app-voting-item", 7), 2 & n)) {
          const t = i.$implicit,
            o = i.index,
            r = e.ɵɵnextContext();
          e.ɵɵproperty("data", t)("color", r.colors[o]);
        }
      }
      const mn = {
        defaultDecayPeriodHasVote: !1,
        defaultSlippageFeeHasVote: !1,
        defaultSwapFeeHasVote: !1,
        governanceShareHasVote: !1,
        referralShareHasVote: !1,
        leftoverShareHasVote: !1,
        defaultDecayPeriodVoteAmount: "0",
        defaultSlippageFeeVoteAmount: "0",
        defaultSwapFeeVoteAmount: "0",
        governanceShareVoteAmount: "0",
        referralShareVoteAmount: "0",
        leftoverShareVoteAmount: "0",
      };
      function ue(n, i) {
        const t = n || i.toString();
        return +(0, L.kg)(t, 18, 4);
      }
      let un = (() => {
        class n {
          constructor(t, o, r, c, p, l, d, u) {
            (this.walletConnectionQuery = t),
              (this.governanceApiService = o),
              (this.governanceTransactionService = r),
              (this.governanceQuery = c),
              (this.activatedRoute = p),
              (this.activeConnectionQuery = l),
              (this.webAnalyticsService = d),
              (this.currentSpenderService = u),
              (this.colors = Be.D),
              (this.selectedAction = ""),
              (this.liquidityProtocolCards$ =
                this.governanceQuery.currentChainVoteOnFactoryCards$.pipe(
                  (0, C.w)((O) =>
                    this.updateVotePagesWithGovernanceDetails(O).pipe(
                      (0, B.O)(O)
                    )
                  ),
                  (0, Qe.K)((O) => (dn.error(O), (0, I.of)([])))
                )),
              (this.subscription = new E.w0());
          }
          ngOnInit() {
            this.governanceTransactionService.startPipelines(),
              this.webAnalyticsService.pageView(
                "/dao/liquidity-protocol",
                "DAO / Governance"
              ),
              this.currentSpenderService.setCurrentSpenderType(
                se.F.liquidityProtocol
              );
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          voteItemTrackBy(t, o) {
            return o.id;
          }
          getUser$() {
            return this.walletConnectionQuery.connectedWalletAddress$.pipe(
              (0, C.w)((t) =>
                t ? this.governanceApiService.getUser$(t) : (0, I.of)(mn)
              )
            );
          }
          updateVotePagesWithGovernanceDetails(t) {
            return (0, rn.H)(0, me.N.refreshTime.graphData).pipe(
              (0, C.w)(() =>
                (0, j.a)([
                  this.governanceApiService.getGovernanceDetails(),
                  this.activeConnectionQuery.currentChainId$,
                ])
              ),
              (0, C.w)(([o, r]) => {
                const c = this.addGovernanceValues(t, o, r);
                return this.takeFactoryStats(c, o);
              })
            );
          }
          takeFactoryStats(t, o) {
            return (0, j.a)([
              this.governanceApiService.getFactoryParamsStat$(),
              this.getUser$(),
            ]).pipe(
              (0, x.U)(([r, c]) =>
                this.addFactoryStatsData(t, r, w.O$.from(o.totalSupply), c)
              ),
              (0, B.O)(t)
            );
          }
          addGovernanceValues(t, o, r) {
            const c = (0, ie.mm)(r),
              p = (0, ie.tp)(
                f.y.defaultSwapFee,
                +o[f.y.defaultSwapFee].toString(),
                c
              ),
              l = (0, ie.tp)(
                f.y.defaultDecayPeriod,
                +o[f.y.defaultDecayPeriod].toString(),
                c
              ),
              d = (0, ie.tp)(
                f.y.defaultSlippageFee,
                +o[f.y.defaultSlippageFee].toString(),
                c
              ),
              u = (0, ie.tp)(
                f.y.referralShare,
                +o[f.y.referralShare].toString(),
                c
              ),
              O = (0, ie.tp)(
                f.y.governanceShare,
                +o[f.y.governanceShare].toString(),
                c
              );
            return [
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.defaultSwapFee)
                ),
                {
                  currentValue: `${p.percent}%`,
                  value: p.percentFromMax,
                  virtualDetails: o.virtualDefaultFee,
                  totalSupply: w.O$.from(o.totalSupply),
                  rawValueOld: w.O$.from(o[f.y.defaultSwapFee]),
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.defaultDecayPeriod)
                ),
                {
                  currentValue: (0, ie.X4)(
                    f.y.defaultDecayPeriod,
                    `${l.percent}`
                  ),
                  value: l.percentFromMax,
                  virtualDetails: o.virtualDefaultDecayPeriod,
                  totalSupply: w.O$.from(o.totalSupply),
                  rawValueOld: w.O$.from(o[f.y.defaultDecayPeriod]),
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.referralShare)
                ),
                {
                  currentValue: `${u.percent}%`,
                  value: u.percentFromMax,
                  virtualDetails: o.virtualReferralShare,
                  totalSupply: w.O$.from(o.totalSupply),
                  rawValueOld: w.O$.from(o[f.y.referralShare]),
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.governanceShare)
                ),
                {
                  currentValue: `${O.percent}%`,
                  value: O.percentFromMax,
                  virtualDetails: o.virtualGovernanceShare,
                  totalSupply: w.O$.from(o.totalSupply),
                  rawValueOld: w.O$.from(o[f.y.governanceShare]),
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.defaultSlippageFee)
                ),
                {
                  currentValue: `${d.percent}%`,
                  value: d.percentFromMax,
                  virtualDetails: o.virtualDefaultSlippageFee,
                  totalSupply: w.O$.from(o.totalSupply),
                  rawValueOld: w.O$.from(o[f.y.defaultSlippageFee]),
                }
              ),
            ];
          }
          addFactoryStatsData(t, o, r, c) {
            var p, l, d, u, O;
            return [
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.defaultSwapFee)
                ),
                {
                  totalVotes: ue(
                    null === (p = null == o ? void 0 : o.defaultSwapFee) ||
                      void 0 === p
                      ? void 0
                      : p.totalVotes,
                    r
                  ),
                  addresses: +o.defaultSwapFee.totalVoters,
                  yourVotes: +(0, L.kg)(c.defaultSwapFeeVoteAmount, 18, 4),
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.defaultDecayPeriod)
                ),
                {
                  totalVotes: ue(
                    null === (l = null == o ? void 0 : o.defaultDecayPeriod) ||
                      void 0 === l
                      ? void 0
                      : l.totalVotes,
                    r
                  ),
                  addresses: +o.defaultDecayPeriod.totalVoters,
                  yourVotes: +(0, L.kg)(c.defaultDecayPeriodVoteAmount, 18, 4),
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.referralShare)
                ),
                {
                  totalVotes: ue(
                    null === (d = null == o ? void 0 : o.referralShare) ||
                      void 0 === d
                      ? void 0
                      : d.totalVotes,
                    r
                  ),
                  addresses: +o.referralShare.totalVoters,
                  yourVotes: +(0, L.kg)(c.referralShareVoteAmount, 18, 4),
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.governanceShare)
                ),
                {
                  totalVotes: ue(
                    null === (u = null == o ? void 0 : o.governanceShare) ||
                      void 0 === u
                      ? void 0
                      : u.totalVotes,
                    r
                  ),
                  addresses: +o.governanceShare.totalVoters,
                  yourVotes: +(0, L.kg)(c.governanceShareVoteAmount, 18, 4),
                }
              ),
              Object.assign(
                Object.assign(
                  {},
                  t.find((h) => h.id === f.y.defaultSlippageFee)
                ),
                {
                  totalVotes: ue(
                    null === (O = null == o ? void 0 : o.defaultSlippageFee) ||
                      void 0 === O
                      ? void 0
                      : O.totalVotes,
                    r
                  ),
                  addresses: +o.defaultSlippageFee.totalVoters,
                  yourVotes: +(0, L.kg)(c.defaultSlippageFeeVoteAmount, 18, 4),
                }
              ),
            ];
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(ee.r),
              e.ɵɵdirectiveInject(ce.rU),
              e.ɵɵdirectiveInject(ge.h),
              e.ɵɵdirectiveInject(le.R),
              e.ɵɵdirectiveInject(H.gz),
              e.ɵɵdirectiveInject(pe.r),
              e.ɵɵdirectiveInject(ye.y),
              e.ɵɵdirectiveInject(se.q)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["liquidity-protocol"]],
            decls: 11,
            vars: 4,
            consts: [
              ["transloco", "liquidityProtocol.page-title", 1, "page-header"],
              [1, "about-text"],
              [1, "about-text__mobile"],
              ["transloco", "governancePage.liquidity-protocol-text2"],
              [
                "transloco",
                "governancePage.liquidity-protocol-text2",
                1,
                "about-text__desktop",
              ],
              [1, "votings-wrap"],
              [3, "data", "color", 4, "ngFor", "ngForOf", "ngForTrackBy"],
              [3, "data", "color"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.ɵɵelementStart(0, "h1", 0),
                e.ɵɵtext(1, "Liquidity protocol governance"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(2, "div", 1)(3, "app-collapsible-text", 2)(
                  4,
                  "p",
                  3
                ),
                e.ɵɵtext(
                  5,
                  " Instant Governance is a community tool for setting optimal pool configuration parameters. Each liquidity provider can vote on parameter values using their staked LP tokens. Pool governance enables the configuration of parameters that are specific to each pool. Users can vote to change 1inch\u2019s core parameters. The weight of a vote depends on the amount of 1INCH tokens staked by a user. Parameters with default prefixes are used as default vote results for liquidity providers who do not participate in pool governance. If a user has not voted, the calculation takes into account the parameter\u2019s default value multiplied by the user's vote\u2019s weight."
                ),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(6, "p", 4),
                e.ɵɵtext(
                  7,
                  " Instant Governance is a community tool for setting optimal pool configuration parameters. Each liquidity provider can vote on parameter values using their staked LP tokens. Pool governance enables the configuration of parameters that are specific to each pool. Users can vote to change 1inch\u2019s core parameters. The weight of a vote depends on the amount of 1INCH tokens staked by a user. Parameters with default prefixes are used as default vote results for liquidity providers who do not participate in pool governance. If a user has not voted, the calculation takes into account the parameter\u2019s default value multiplied by the user's vote\u2019s weight."
                ),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(8, "div", 5),
                e.ɵɵtemplate(9, gn, 1, 2, "app-voting-item", 6),
                e.ɵɵpipe(10, "async"),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(9),
                  e.ɵɵproperty(
                    "ngForOf",
                    e.ɵɵpipeBind1(10, 2, o.liquidityProtocolCards$)
                  )("ngForTrackBy", o.voteItemTrackBy));
            },
            dependencies: [g.sg, D.KI, ln, pn.w, g.Ov],
            styles: [
              "[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:1180px;margin:0 auto}@media (max-width: 520px){[_nghost-%COMP%]{margin-top:-20px}}@media (max-width: 418px){[_nghost-%COMP%]{margin-top:0}}.page-header[_ngcontent-%COMP%]{font-size:20px;margin-bottom:18px}@media (min-width: 940px){.page-header[_ngcontent-%COMP%]{font-size:32px;margin-bottom:32px}}.about-text[_ngcontent-%COMP%]{font-size:16px;line-height:26px;margin-bottom:18px;color:var(--1inch__ui-02)}@media (min-width: 940px){.about-text[_ngcontent-%COMP%]{margin-bottom:48px}}.votings-wrap[_ngcontent-%COMP%]{display:grid;grid-gap:16px;margin-bottom:40px}.about-text__desktop[_ngcontent-%COMP%]{display:none}@media (min-width: 480px){.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (min-width: 720px){.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}.about-text__mobile[_ngcontent-%COMP%]{display:none}.about-text__desktop[_ngcontent-%COMP%]{display:block}}@media (min-width: 940px){.votings-wrap[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Ke = a(48163),
        Ye = a(95605),
        hn = a(20803),
        vn = a(52292),
        _n = a(97093),
        fn = a(35804),
        xn = a(75392),
        Cn = a(30422),
        yn = a(25541),
        Pn = a(92110),
        On = a(15927),
        Sn = a(29889);
      function wn(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "span", 21),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(3);
              return e.ɵɵresetView(r.selectPartOfToken(100, !0));
            }),
            e.ɵɵelementStart(1, "span", 22),
            e.ɵɵtext(2, "Balance"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(3, " : "),
            e.ɵɵelement(4, "token-amount", 23),
            e.ɵɵpipe(5, "async"),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(4),
            e.ɵɵproperty("value", e.ɵɵpipeBind1(5, 2, t.oneInchTokenBalance$))(
              "decimals",
              t.token.decimals
            );
        }
      }
      function Mn(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "span", 24),
            e.ɵɵlistener("click", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext(3);
              return e.ɵɵresetView(r.selectPartOfToken(100, !1));
            }),
            e.ɵɵelementStart(1, "span", 25),
            e.ɵɵtext(2, "Staked"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(3, " : "),
            e.ɵɵelement(4, "token-amount", 23),
            e.ɵɵpipe(5, "async"),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(4),
            e.ɵɵproperty("value", e.ɵɵpipeBind1(5, 2, t.stakedAmount$))(
              "decimals",
              t.token.decimals
            );
        }
      }
      function bn(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, wn, 6, 4, "span", 19),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, Mn, 6, 4, "span", 20),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              "stake" === e.ɵɵpipeBind1(2, 2, t.stakeAction$)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "ngIf",
              "unstake" === e.ɵɵpipeBind1(4, 4, t.stakeAction$)
            );
        }
      }
      function kn(n, i) {
        1 & n && e.ɵɵelement(0, "img", 26);
      }
      function An(n, i) {
        if ((1 & n && e.ɵɵelement(0, "set-max-tooltip", 27), 2 & n)) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵproperty(
            "amount",
            null == t.tokenAmountControl ? null : t.tokenAmountControl.value
          )("token", t.token);
        }
      }
      function En(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "button", 30),
            e.ɵɵlistener("click", function () {
              const c = e.ɵɵrestoreView(t).$implicit,
                p = e.ɵɵnextContext().tuiLet,
                l = e.ɵɵnextContext(2);
              return e.ɵɵresetView(l.selectPartOfToken(c, "stake" === p));
            }),
            e.ɵɵtext(1),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = i.$implicit,
            o = e.ɵɵnextContext().tuiLet,
            r = e.ɵɵnextContext().tuiLet;
          e.ɵɵclassProp("disabled", "wallet_disconnected" === r),
            e.ɵɵpropertyInterpolate("id", o + "-tab.percent-button." + t),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1("", t, "% ");
        }
      }
      function Tn(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 28),
            e.ɵɵtemplate(1, En, 2, 4, "button", 29),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", t.percents);
        }
      }
      function In(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div")(1, "div", 7)(2, "div")(3, "div", 8)(
              4,
              "span",
              9
            ),
            e.ɵɵtext(5, "Amount"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(6, bn, 5, 6, "ng-container", 10),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(7, "div", 8)(8, "div", 11),
            e.ɵɵelement(9, "img", 12),
            e.ɵɵelementStart(10, "span"),
            e.ɵɵtext(11, "1INCH"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(12, kn, 1, 0, "img", 13),
            e.ɵɵpipe(13, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(14, "amount-input", 14),
            e.ɵɵpipe(15, "async"),
            e.ɵɵtemplate(16, An, 1, 2, "set-max-tooltip", 15),
            e.ɵɵpipe(17, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(18, "div", 8)(19, "span", 16),
            e.ɵɵtext(20, "1INCH Token"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(21, "span", 17),
            e.ɵɵtext(22),
            e.ɵɵpipe(23, "currency"),
            e.ɵɵpipe(24, "async"),
            e.ɵɵelementEnd()()(),
            e.ɵɵtemplate(25, Tn, 2, 1, "div", 18),
            e.ɵɵpipe(26, "async"),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = i.tuiLet,
            o = e.ɵɵnextContext();
          e.ɵɵadvance(6),
            e.ɵɵproperty("ngIf", "wallet_disconnected" !== t),
            e.ɵɵadvance(6),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(13, 8, o.showLock$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("readOnly", "wallet_disconnected" === t)(
              "precision",
              e.ɵɵpipeBind1(15, 10, o.precision$)
            )("formControl", o.tokenAmountControl),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(17, 12, o.isSetTo100$)),
            e.ɵɵadvance(6),
            e.ɵɵtextInterpolate1(
              "~",
              e.ɵɵpipeBind1(23, 14, e.ɵɵpipeBind1(24, 16, o.usdAmount$)),
              ""
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(26, 18, o.stakeAction$));
        }
      }
      function Vn(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelement(1, "transaction-cost", 39),
            e.ɵɵpipe(2, "async"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = i.tuiLet,
            o = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵproperty("txFeeAmount", t)(
              "gasPreview",
              e.ɵɵpipeBind1(2, 2, o.currentGasPricePreview$)
            );
        }
      }
      function Bn(n, i) {
        1 & n && e.ɵɵelement(0, "gas-price-widget", 41);
      }
      const Dn = function () {
        return { contextId: "stake", widgetId: "gas-price" };
      };
      function $n(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtemplate(1, Bn, 1, 0, "gas-price-widget", 40),
          e.ɵɵelementContainerEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵproperty("isSettingWidgetVisible", e.ɵɵpureFunction0(1, Dn)));
      }
      function Fn(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 31)(1, "div", 32)(2, "span", 33),
            e.ɵɵtext(3, "Voting balance"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "div", 34)(5, "span"),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "number"),
            e.ɵɵpipe(8, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(9, "svg", 35),
            e.ɵɵelement(10, "use", 36),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(11, "span", 37),
            e.ɵɵtext(12),
            e.ɵɵpipe(13, "number"),
            e.ɵɵpipe(14, "async"),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(15, "div", 32)(16, "span", 38),
            e.ɵɵtext(17, "Voting power"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(18, "div", 34)(19, "span"),
            e.ɵɵtext(20),
            e.ɵɵpipe(21, "percent"),
            e.ɵɵpipe(22, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(23, "svg", 35),
            e.ɵɵelement(24, "use", 36),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(25, "span", 37),
            e.ɵɵtext(26),
            e.ɵɵpipe(27, "percent"),
            e.ɵɵpipe(28, "async"),
            e.ɵɵelementEnd()()(),
            e.ɵɵtemplate(29, Vn, 3, 4, "ng-container", 0),
            e.ɵɵpipe(30, "async"),
            e.ɵɵtemplate(31, $n, 2, 2, "ng-container", 10),
            e.ɵɵpipe(32, "async"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(6),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(
                7,
                6,
                e.ɵɵpipeBind1(8, 9, t.votingBalance$),
                "1.0-3"
              )
            ),
            e.ɵɵadvance(6),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(
                13,
                11,
                e.ɵɵpipeBind1(14, 14, t.projectedVotingBalance$),
                "1.0-3"
              )
            ),
            e.ɵɵadvance(8),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(
                21,
                16,
                e.ɵɵpipeBind1(22, 19, t.votingPower$),
                "1.1-4"
              )
            ),
            e.ɵɵadvance(6),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind2(
                27,
                21,
                e.ɵɵpipeBind1(28, 24, t.projectedVotingPower$),
                "1.1-4"
              )
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(30, 26, t.txFeeAmount$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(32, 28, t.txFeeAmount$));
        }
      }
      function Rn(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "span", 44),
          e.ɵɵtext(2, "Approving..."),
          e.ɵɵelementEnd(),
          e.ɵɵelement(3, "img", 45),
          e.ɵɵelementContainerEnd());
      }
      const Ln = function () {
        return { sourceToken: "1INCH" };
      };
      function jn(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "span", 46),
          e.ɵɵtext(2, "Give permission to stake 1INCH"),
          e.ɵɵelementEnd(),
          e.ɵɵelement(3, "tooltip", 47),
          e.ɵɵpipe(4, "transloco"),
          e.ɵɵelementContainerEnd()),
          2 & n &&
            (e.ɵɵadvance(3),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind2(
                4,
                1,
                "swapBox.to-continue",
                e.ɵɵpureFunction0(4, Ln)
              )
            ));
      }
      function Wn(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div", 42)(1, "app-button", 43),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.infinityUnlock());
            }),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, Rn, 4, 0, "ng-container", 10),
            e.ɵɵpipe(4, "async"),
            e.ɵɵtemplate(5, jn, 5, 5, "ng-container", 10),
            e.ɵɵpipe(6, "async"),
            e.ɵɵelementEnd()();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "disabled",
              !!e.ɵɵpipeBind1(2, 3, t.showApproveProgress$)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(4, 5, t.showApproveProgress$)),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", !e.ɵɵpipeBind1(6, 7, t.showApproveProgress$));
        }
      }
      function Un(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "app-button", 48),
          e.ɵɵelement(2, "img", 49),
          e.ɵɵelementStart(3, "span", 50),
          e.ɵɵtext(4, "Connect wallet"),
          e.ɵɵelementEnd()(),
          e.ɵɵelementContainerEnd());
      }
      function zn(n, i) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "app-button", 51),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(2, "svg", 52),
          e.ɵɵelement(3, "use", 53),
          e.ɵɵelementEnd(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(4, "span", 54),
          e.ɵɵtext(5, "Insufficient balance"),
          e.ɵɵelementEnd()(),
          e.ɵɵelementContainerEnd()),
          2 & n && (e.ɵɵadvance(1), e.ɵɵproperty("disabled", !0));
      }
      function Nn(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-button", 55),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.stake());
            }),
            e.ɵɵpipe(2, "async"),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(3, "svg", 56),
            e.ɵɵelement(4, "use", 57),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(5, "span", 58),
            e.ɵɵtext(6, "Stake Token"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "disabled",
              0 == +t.tokenAmountControl.value ||
                e.ɵɵpipeBind1(2, 1, t.showLock$)
            );
        }
      }
      function Hn(n, i) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-button", 59),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const r = e.ɵɵnextContext();
              return e.ɵɵresetView(r.unStake());
            }),
            e.ɵɵnamespaceSVG(),
            e.ɵɵelementStart(2, "svg", 56),
            e.ɵɵelement(3, "use", 57),
            e.ɵɵelementEnd(),
            e.ɵɵnamespaceHTML(),
            e.ɵɵelementStart(4, "span", 60),
            e.ɵɵtext(5, "Unstake Token"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("disabled", 0 == +t.tokenAmountControl.value);
        }
      }
      function Gn(n, i) {
        1 & n && e.ɵɵelementContainer(0);
      }
      var F = (() => {
        return (
          ((n = F || (F = {})).Stake = "stake"), (n.UnStake = "unstake"), F
        );
        var n;
      })();
      let Qn = (() => {
        class n {
          constructor(t, o, r, c, p, l, d, u, O, h) {
            (this.walletQuery = t),
              (this.pricesQuery = o),
              (this.governanceQuery = r),
              (this.governanceService = c),
              (this.governanceTransactionService = p),
              (this.walletConnectionQuery = l),
              (this.votingStatsService = d),
              (this.txFeeService = u),
              (this.txAmountService = O),
              (this.activeConnectionQuery = h),
              (this.token = Ye.UU),
              (this.tokenAmountControl = new y.UntypedFormControl()),
              (this.percents = [25, 50, 75, 100]),
              (this.oneInchTokenBalance$ =
                this.governanceQuery.oneInchTokenBalance$),
              (this.buttonState$ = (0, j.a)([
                this.walletQuery.connectedWalletAddress$,
                this.activeConnectionQuery.currentChainId$,
              ]).pipe(
                (0, C.w)(([_]) =>
                  _
                    ? (0, j.a)([
                        this.governanceQuery.isEnoughBalanceForStake$,
                        this.governanceQuery.isEnoughBalanceForUnStake$,
                        this.stakeAction$,
                      ]).pipe(
                        (0, x.U)(([A, ae, he]) =>
                          he === F.UnStake
                            ? ae
                              ? X.Y.unStake
                              : X.Y.notEnoughBalance
                            : A
                            ? X.Y.stake
                            : X.Y.notEnoughBalance
                        )
                      )
                    : (this.governanceService.setState(X.Y.walletDisconnected),
                      (0, I.of)(X.Y.walletDisconnected))
                )
              )),
              (this.stakeAction$ = new Se.X(F.Stake)),
              (this.isSetTo100$ = this.governanceQuery.isSetTo100$),
              (this.showApproveProgress$ =
                this.governanceQuery.hasPendingApproveGovernance$),
              (this.showLock$ = (0, j.a)([
                this.stakeAction$,
                this.governanceQuery.isOneInchTokenApprovedForStaking$,
                this.walletQuery.connectedWalletAddress$,
              ]).pipe(
                (0, x.U)(([_, A, ae]) => !(_ === F.UnStake || !ae || A)),
                (0, te.d)({ refCount: !0, bufferSize: 1 })
              )),
              (this.stakedAmount$ =
                this.governanceQuery.select("userStakedWei")),
              (this.usdAmount$ = (0, j.a)([
                this.pricesQuery.selectTokenUsdPrice(Ye.UU.address),
                this.governanceQuery.select("userInputWei"),
              ]).pipe((0, x.U)(([_, A]) => _ * +(0, Y.formatUnits)(A, 18)))),
              (this.precision$ = new Se.X(4)),
              (this.isWalletConnected$ =
                this.walletConnectionQuery.isWalletConnected$),
              (this.StateType = X.Y),
              (this.votingStatsContract = Ce.a4.mooniswapFactoryV_1_1),
              (this.votingStats$ = this.votingStatsService
                .getVotingStats(this.votingStatsContract)
                .pipe((0, te.d)({ refCount: !0, bufferSize: 1 }))),
              (this.votingBalance$ = this.votingStats$.pipe(
                (0, x.U)(({ votingBalance: _ }) => _)
              )),
              (this.votingPower$ = this.votingStats$.pipe(
                (0, x.U)(({ votingPower: _ }) => _)
              )),
              (this.projectedVotingBalance$ = (0, j.a)([
                this.votingBalance$,
                this.governanceQuery.select("userInputWei"),
                this.stakeAction$,
              ]).pipe(
                (0, x.U)(([_, A, ae]) => {
                  const he =
                    ae === F.Stake
                      ? _ + +(0, Y.formatUnits)(A, 18)
                      : _ - +(0, Y.formatUnits)(A, 18);
                  return Math.max(he, 0);
                })
              )),
              (this.projectedVotingPower$ = this.projectedVotingBalance$.pipe(
                (0, C.w)((_) =>
                  this.votingStatsService.countVotingPower(
                    this.votingStatsContract,
                    (0, Y.parseUnits)(_.toString(), 18)
                  )
                ),
                (0, x.U)((_) => Math.min(_, 1))
              )),
              (this.txFeeAmount$ = this.stakeAction$.pipe(
                (0, C.w)((_) =>
                  _ === F.Stake
                    ? this.txAmountService.stakeTxFeeAmount$
                    : this.txAmountService.unstakeTxFeeAmount$
                )
              )),
              (this.currentGasPricePreview$ = this.stakeAction$.pipe(
                (0, C.w)((_) =>
                  _ === F.Stake
                    ? this.txAmountService.stakeGasLimit$.pipe(
                        (0, C.w)((A) =>
                          this.txFeeService.getGasFeePreview(
                            A.toString() || "0"
                          )
                        )
                      )
                    : this.txAmountService.unstakeGasLimit$.pipe(
                        (0, C.w)((A) =>
                          this.txFeeService.getGasFeePreview(
                            A.toString() || "0"
                          )
                        )
                      )
                )
              )),
              (this.subscription = new E.w0()),
              this.governanceTransactionService.startPipelines();
            const Q = this.tokenAmountControl.valueChanges.pipe(
              (0, re.b)((_) => {
                this.precision$.next(18),
                  this.governanceService.onUserEnterStakeAmount(
                    (_ || 0).toString()
                  );
              })
            );
            (0, we.O)(
              Q,
              "StakeTokenWrapComponent: inputValue$",
              this.subscription
            );
          }
          set stakeAction(t) {
            this.stakeAction$.next(t);
          }
          get stakeAction() {
            return this.stakeAction$.getValue();
          }
          ngOnInit() {
            this.initInputValue();
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          unStake() {
            const { userInputWei: t, userStakedWei: o } =
              this.governanceQuery.getValue();
            this.governanceTransactionService.unStake(w.O$.from(t), {
              unstaking: t,
              alreadyStaked: o,
            });
          }
          stake() {
            const { userInputWei: t, userStakedWei: o } =
              this.governanceQuery.getValue();
            this.governanceTransactionService.stake(w.O$.from(t), {
              staking: t,
              alreadyStaked: o,
            });
          }
          infinityUnlock() {
            this.governanceTransactionService.approveToGovernanceContract(
              je.zL
            );
          }
          selectPartOfToken(t, o) {
            this.precision$.next(4),
              this.governanceService.updateInputAmount(t, o);
          }
          initInputValue() {
            const t = this.governanceQuery.select("userInputWei").pipe(
              (0, re.b)((o) => {
                this.tokenAmountControl.setValue((0, Y.formatUnits)(o, 18), {
                  emitEvent: !1,
                });
              })
            );
            (0, we.O)(
              t,
              "StakeTokenWrapComponent: initValue$",
              this.subscription
            );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(ee.r),
              e.ɵɵdirectiveInject(hn.u),
              e.ɵɵdirectiveInject(le.R),
              e.ɵɵdirectiveInject(de.n),
              e.ɵɵdirectiveInject(ge.h),
              e.ɵɵdirectiveInject(ee.r),
              e.ɵɵdirectiveInject(vn.h),
              e.ɵɵdirectiveInject(_n.V),
              e.ɵɵdirectiveInject(fn.L),
              e.ɵɵdirectiveInject(pe.r)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-stake-token-wrap"]],
            inputs: { stakeAction: "stakeAction" },
            decls: 14,
            vars: 16,
            consts: [
              [4, "tuiLet"],
              ["class", "voting-info", 4, "ngIf"],
              [1, "buttons-wrap"],
              ["class", "mb-12", 4, "ngIf"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [4, "ngSwitchDefault"],
              [1, "stake-token-field"],
              [1, "stake-token-field-row"],
              ["transloco", "field.amount"],
              [4, "ngIf"],
              [1, "stake-token-icon-wrap"],
              ["src", "assets/images/icon.png", "alt", "", 1, "token-img"],
              [
                "data-id",
                "1inch-lock-icon",
                "src",
                "assets/images/icons/lock.svg",
                "alt",
                "",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "stake-unstake-block.token-input",
                1,
                "stake-token-input",
                3,
                "readOnly",
                "precision",
                "formControl",
              ],
              [3, "amount", "token", 4, "ngIf"],
              ["transloco", "stakeTokenWrap.1-inch-token", 1, "ellipsis"],
              [1, "ellipsis"],
              ["class", "percent-buttons-wrap", 4, "tuiLet"],
              [
                "data-id",
                "stake-tab.balance-set-max",
                "class",
                "hoverable",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "unstake-tab.staked-amount-set-max",
                "class",
                "hoverable",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "stake-tab.balance-set-max",
                1,
                "hoverable",
                3,
                "click",
              ],
              ["transloco", "field.balance"],
              [3, "value", "decimals"],
              [
                "data-id",
                "unstake-tab.staked-amount-set-max",
                1,
                "hoverable",
                3,
                "click",
              ],
              ["transloco", "stakingPage.staked"],
              [
                "data-id",
                "1inch-lock-icon",
                "src",
                "assets/images/icons/lock.svg",
                "alt",
                "",
              ],
              [3, "amount", "token"],
              [1, "percent-buttons-wrap"],
              [
                "class",
                "blank-button percent-button",
                3,
                "id",
                "disabled",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "blank-button", "percent-button", 3, "id", "click"],
              [1, "voting-info"],
              [1, "voting-stat"],
              ["transloco", "governance.voting-balance-new"],
              [1, "voting-value-wrap"],
              ["width", "16", "height", "16"],
              [
                0,
                "xlink",
                "href",
                "assets/images/icons/arrow_left.svg#arrow_left",
              ],
              [1, "voting-value"],
              ["transloco", "governance.voting-power-new"],
              [
                "contextId",
                "stake",
                1,
                "voting-stat",
                3,
                "txFeeAmount",
                "gasPreview",
              ],
              ["class", "gas-price-widget", 4, "isSettingWidgetVisible"],
              [1, "gas-price-widget"],
              [1, "mb-12"],
              [
                "data-id",
                "stake-unstake-block.unlock-button",
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "button.approving", 1, "approving-title"],
              [
                "src",
                "/assets/images/loader_blue.svg",
                "alt",
                "",
                1,
                "approving-img",
              ],
              ["transloco", "dao.give-permission"],
              [
                "contentType",
                "question",
                "iconColor",
                "white",
                "data-id",
                "synth-token-locked-icon",
                1,
                "stake-button-tooltip",
                3,
                "tooltip",
              ],
              [
                "walletConnect",
                "",
                "data-id",
                "stake-unstake-block.connect-wallet-button",
                "color",
                "blue",
                "fullWidth",
                "true",
                1,
                "connect-wallet-button",
              ],
              ["src", "assets/images/icons/connect.svg", 1, "mr-2"],
              ["transloco", "button.connect-wallet2"],
              ["color", "accentBlue", "fullWidth", "true", 3, "disabled"],
              ["width", "24", "height", "24", 1, "mr-2"],
              [0, "xlink", "href", "assets/images/icons/magic.svg#magic"],
              ["transloco", "button.insufficient-balance"],
              [
                "data-id",
                "stake-unstake-block.stake-button",
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
              ],
              ["width", "25", "height", "24", 1, "mr-8"],
              [0, "xlink", "href", "assets/images/icons/seif.svg#seif"],
              ["transloco", "dao.stake-token"],
              [
                "data-id",
                "stake-unstake-block.unstake-button",
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "dao.unstake-token"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.ɵɵtemplate(0, In, 27, 20, "div", 0),
                e.ɵɵpipe(1, "async"),
                e.ɵɵtemplate(2, Fn, 33, 30, "div", 1),
                e.ɵɵpipe(3, "async"),
                e.ɵɵelementStart(4, "div", 2),
                e.ɵɵtemplate(5, Wn, 7, 9, "div", 3),
                e.ɵɵpipe(6, "async"),
                e.ɵɵelementContainerStart(7, 4),
                e.ɵɵpipe(8, "async"),
                e.ɵɵtemplate(9, Un, 5, 0, "ng-container", 5),
                e.ɵɵtemplate(10, zn, 6, 1, "ng-container", 5),
                e.ɵɵtemplate(11, Nn, 7, 3, "ng-container", 5),
                e.ɵɵtemplate(12, Hn, 6, 1, "ng-container", 5),
                e.ɵɵtemplate(13, Gn, 1, 0, "ng-container", 6),
                e.ɵɵelementContainerEnd(),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵproperty("tuiLet", e.ɵɵpipeBind1(1, 8, o.buttonState$)),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(3, 10, o.isWalletConnected$)
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("ngIf", e.ɵɵpipeBind1(6, 12, o.showLock$)),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty(
                    "ngSwitch",
                    e.ɵɵpipeBind1(8, 14, o.buttonState$)
                  ),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngSwitchCase", o.StateType.walletDisconnected),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", o.StateType.notEnoughBalance),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", o.StateType.stake),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", o.StateType.unStake));
            },
            dependencies: [
              g.sg,
              g.O5,
              g.RF,
              g.n9,
              g.ED,
              D.KI,
              $e.K,
              y.NgControlStatus,
              y.FormControlDirective,
              We.r,
              Ue.M,
              xn.l,
              xe.Ls,
              Cn.C,
              yn.o,
              Pn.z,
              On.$,
              Sn.O,
              g.Ov,
              g.JJ,
              g.Zx,
              g.H9,
              D.Ot,
            ],
            styles: [
              ".stake-token-field[_ngcontent-%COMP%]{padding:12px 16px;border-radius:16px;margin-bottom:24px;background:var(--1inch-bg-07)}.stake-token-field-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;margin-bottom:8px}.stake-token-field-row[_ngcontent-%COMP%]:nth-of-type(1), .stake-token-field-row[_ngcontent-%COMP%]:nth-of-type(3){font-size:13px;line-height:16px;color:var(--1inch__ui-02)}.stake-token-field-row[_ngcontent-%COMP%]:nth-of-type(1)   .hoverable[_ngcontent-%COMP%]:hover, .stake-token-field-row[_ngcontent-%COMP%]:nth-of-type(3)   .hoverable[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--1inch-common-btn-bg-01)}.stake-token-field-row[_ngcontent-%COMP%]:nth-of-type(2){font-size:20px;line-height:23px;letter-spacing:.3px;padding:2px 0}.stake-token-icon-wrap[_ngcontent-%COMP%]{display:flex;align-items:center;margin-right:16px}.stake-token-icon-wrap[_ngcontent-%COMP%]   .token-img[_ngcontent-%COMP%]{width:24px;height:24px}.stake-token-icon-wrap[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 8px}.stake-token-input[_ngcontent-%COMP%]{width:65%}.percent-buttons-wrap[_ngcontent-%COMP%]{display:grid;grid-column-gap:8px;grid-template-columns:repeat(4,1fr);margin-top:16px}.percent-button[_ngcontent-%COMP%]{border-radius:8px;padding:8px 0;font-weight:500;font-size:13px;line-height:16px;color:var(--1inch-text-13);background:var(--1inch-bg-14)}.percent-button[_ngcontent-%COMP%]:hover{background:var(--1inch-bg-25);color:var(--1inch-text-11)}.percent-button.disabled[_ngcontent-%COMP%]{pointer-events:none}.governance-favorite-settings[_ngcontent-%COMP%]{margin:24px 0 0}.buttons-wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.buttons-wrap[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]{height:48px;display:flex}.connect-wallet-button[_ngcontent-%COMP%]{width:100%;justify-content:center;display:flex}.approving-title[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.approving-img[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:4px}.stake-button-tooltip[_ngcontent-%COMP%]{margin-top:-2px}.voting-info[_ngcontent-%COMP%]{margin:24px 0}.voting-stat[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;padding:0 8px;font-size:13px;line-height:15px;color:var(--1inch__ui-02)}.voting-value-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.voting-value-wrap[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:0 8px;transform:rotate(180deg)}.voting-value-wrap[_ngcontent-%COMP%]   .voting-value[_ngcontent-%COMP%]{color:var(--1inch__ui-01)}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var Kn = a(74217),
        Xe = a(5945),
        Je = a(32594),
        Yn = a(79714);
      function Xn(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 39),
            e.ɵɵelement(1, "div")(2, "div", 46),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().$implicit,
            o = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty(
              "innerHTML",
              o.getHiddenBlock(t.hiddenBlockId),
              e.ɵɵsanitizeHtml
            );
        }
      }
      function Jn(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "tui-accordion-item", 38)(1, "div", 39),
            e.ɵɵelement(2, "img", 40)(3, "img", 41),
            e.ɵɵelementStart(4, "div", 42)(5, "p", 43),
            e.ɵɵtext(6),
            e.ɵɵpipe(7, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(8, "p", 44),
            e.ɵɵtext(9),
            e.ɵɵpipe(10, "transloco"),
            e.ɵɵelementEnd()()(),
            e.ɵɵtemplate(11, Xn, 3, 1, "ng-template", 45),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = i.$implicit;
          e.ɵɵproperty("noPadding", !0),
            e.ɵɵadvance(2),
            e.ɵɵpropertyInterpolate1(
              "src",
              "assets/images/",
              t.image,
              ".png",
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(1),
            e.ɵɵpropertyInterpolate1(
              "src",
              "assets/images/",
              t.image,
              "-light.png",
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind1(7, 5, t.title)),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind1(10, 7, t.shownText));
        }
      }
      function Zn(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span", 47),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "percentDifference"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = i.tuiLet;
          e.ɵɵclassProp("green", t >= 0)("red", t < 0),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" ", e.ɵɵpipeBind1(2, 5, t), " ");
        }
      }
      function qn(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span", 47),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "percentDifference"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = i.tuiLet;
          e.ɵɵclassProp("green", t >= 0)("red", t < 0),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(" ", e.ɵɵpipeBind1(2, 5, t), " ");
        }
      }
      const eo = function () {
          return { percent: 10, amount: "1-100" };
        },
        to = function () {
          return { percent: 25, amount: "100+" };
        },
        no = function () {
          return { percent: 50, amount: "1000" };
        },
        oo = function () {
          return { percent: 75, amount: "10,000" };
        },
        io = function () {
          return { percent: 95, amount: "100,000" };
        },
        ao = [
          {
            title: "stakingPage.gas-refund",
            shownText: "stakingPage.gas-refund-shown2",
            hiddenBlockId: "gasRefund",
            image: "gas-refund",
            imageLight: "gas-refund-light",
          },
          {
            title: "stakingPage.instant-governance",
            shownText: "stakingPage.instant-governance-shown",
            hiddenBlockId: "instantGovernance",
            image: "instant-governance",
            imageLight: "instant-governance-light",
          },
          {
            title: "stakingPage.dao-governance",
            shownText: "stakingPage.dao-governance-shown",
            hiddenBlockId: "daoGovernance",
            image: "dao-governance",
            imageLight: "dao-governance-light",
          },
        ];
      let ro = (() => {
        class n {
          constructor(t, o, r, c, p, l, d) {
            (this.router = t),
              (this.activeConnectionQuery = o),
              (this.governanceQuery = r),
              (this.activatedRoute = c),
              (this.governanceService = p),
              (this.votingStatsService = l),
              (this.currentSpenderService = d),
              (this.selectedAction$ = this.activatedRoute.queryParamMap.pipe(
                (0, x.U)((u) => (u.has("action") ? u.get("action") : F.Stake))
              )),
              (this.selectedActionIndex$ = this.selectedAction$.pipe(
                (0, x.U)((u) => (u === F.Stake ? 0 : 1))
              )),
              (this.votingAddresses$ =
                this.votingStatsService.votingAddresses$),
              (this.votersPercentChange$ =
                this.votingStatsService.votersPercentChange$),
              (this.stackedTokens$ =
                this.votingStatsService.stackedTokens$.pipe(
                  (0, x.U)((u) => u / 1e3)
                )),
              (this.stakedPercentChange$ =
                this.votingStatsService.stakedPercentChange$),
              (this.infoItems = ao),
              this.currentSpenderService.setCurrentSpenderType(se.F.staking);
          }
          getHiddenBlock(t) {
            var o;
            return null === (o = document.getElementById(t)) || void 0 === o
              ? void 0
              : o.outerHTML;
          }
          changeTab(t) {
            return (0, Ke.__awaiter)(this, void 0, void 0, function* () {
              yield this.navigateByAction(t ? F.Stake : F.UnStake);
            });
          }
          navigateByAction(t) {
            return (0, Ke.__awaiter)(this, void 0, void 0, function* () {
              const o = t ? { action: t } : {},
                c = this.activeConnectionQuery.currentChainId;
              yield this.router.navigate([`${c}//dao/staking`], {
                queryParams: o,
                queryParamsHandling: "merge",
              });
            });
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(H.F0),
              e.ɵɵdirectiveInject(pe.r),
              e.ɵɵdirectiveInject(le.R),
              e.ɵɵdirectiveInject(H.gz),
              e.ɵɵdirectiveInject(de.n),
              e.ɵɵdirectiveInject(Kn.P),
              e.ɵɵdirectiveInject(se.q)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["staking-page"]],
            decls: 140,
            vars: 48,
            consts: [
              ["transloco", "navigation.staking", 1, "staking-header"],
              [1, "staking-page-content"],
              ["transloco", "stakingPage.intro1", 1, "staking-text"],
              [
                "transloco",
                "stakingPage.how-do-benefit",
                1,
                "staking-subheader",
              ],
              [
                "class",
                "staking-accordion",
                3,
                "noPadding",
                4,
                "ngFor",
                "ngForOf",
              ],
              [1, "staking-card"],
              [
                "data-id",
                "stake-unstake-block",
                1,
                "staking-page-tabs",
                3,
                "activeItemIndex",
              ],
              ["tuiTab", "", 1, "staking-page-tab", 3, "click"],
              ["transloco", "dao.stake"],
              ["transloco", "stakingPage.unstake"],
              [3, "stakeAction"],
              [1, "voting-stats"],
              [
                "transloco",
                "stakingPage.voting-addresses",
                1,
                "voting-stat-subtitle",
              ],
              [1, "voting-stat-value"],
              [
                "class",
                "voting-stat-difference",
                3,
                "green",
                "red",
                4,
                "tuiLet",
              ],
              [
                "transloco",
                "stakingPage.total-delegated",
                1,
                "voting-stat-subtitle",
              ],
              ["id", "gasRefund", 1, "staking-accordion-expanded-content"],
              ["transloco", ""],
              ["transloco", "stakingPage.gas-refund-hidden-2-1"],
              [
                "href",
                "https://blog.1inch.io/the-1inch-foundation-extends-the-gas-refund-program-c4b1f1970468",
                "rel",
                "noopener noreferrer",
                "target",
                "_blank",
                "transloco",
                "stakingPage.gas-refund-hidden-3",
              ],
              ["transloco", "stakingPage.gas-refund-hidden-4-1"],
              [1, "dot"],
              ["transloco", "stakingPage.gas-refund-hidden-5-1"],
              [
                "id",
                "instantGovernance",
                1,
                "staking-accordion-expanded-content",
              ],
              ["transloco", "stakingPage.instant-governance-hidden-1"],
              ["transloco", "stakingPage.instant-governance-hidden-2"],
              [
                "routerLink",
                "../aggregation-protocol",
                "transloco",
                "governancePage.aggregation-protocol",
              ],
              ["transloco", "stakingPage.instant-governance-hidden-3"],
              [
                "routerLink",
                "../liquidity-protocol",
                "transloco",
                "governancePage.liquidity-protocol",
              ],
              ["transloco", "stakingPage.instant-governance-hidden-4"],
              ["transloco", "stakingPage.instant-governance-hidden-5"],
              ["transloco", "stakingPage.instant-governance-hidden-6"],
              ["id", "daoGovernance", 1, "staking-accordion-expanded-content"],
              ["transloco", "stakingPage.dao-governance-hidden-1"],
              [
                "href",
                "#",
                "transloco",
                "stakingPage.dao-governance-hidden-2",
                "rel",
                "noopener noreferrer",
                "target",
                "_blank",
              ],
              ["transloco", "stakingPage.dao-governance-hidden-3"],
              [
                "href",
                "#",
                "transloco",
                "stakingPage.dao-governance-hidden-4",
                "rel",
                "noopener noreferrer",
                "target",
                "_blank",
              ],
              ["transloco", "stakingPage.dao-governance-hidden-5"],
              [1, "staking-accordion", 3, "noPadding"],
              [1, "staking-accordion-content"],
              ["alt", "", 1, "dark-theme-image", 3, "src"],
              ["alt", "", 1, "light-theme-image", 3, "src"],
              [1, "staking-accordion-collapsed"],
              [1, "staking-accordion-title"],
              [1, "staking-text"],
              ["tuiAccordionItemContent", ""],
              [1, "staking-text", "staking-accordion-expanded", 3, "innerHTML"],
              [1, "voting-stat-difference"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.ɵɵelementStart(0, "p", 0),
                e.ɵɵtext(1, "Staking"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(2, "div", 1)(3, "div")(4, "p", 2),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(6, "p", 3),
                e.ɵɵtext(7, "How do I benefit from stakingS?"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(8, Jn, 12, 9, "tui-accordion-item", 4),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(9, "div")(10, "div", 5)(11, "tui-tabs", 6),
                e.ɵɵpipe(12, "async"),
                e.ɵɵelementStart(13, "button", 7),
                e.ɵɵlistener("click", function () {
                  return o.changeTab(!0);
                }),
                e.ɵɵelementStart(14, "span", 8),
                e.ɵɵtext(15, "Stake"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(16, "button", 7),
                e.ɵɵlistener("click", function () {
                  return o.changeTab(!1);
                }),
                e.ɵɵelementStart(17, "span", 9),
                e.ɵɵtext(18, "Unstake"),
                e.ɵɵelementEnd()()(),
                e.ɵɵelement(19, "app-stake-token-wrap", 10),
                e.ɵɵpipe(20, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(21, "div", 11)(22, "div")(23, "p", 12),
                e.ɵɵtext(24, "Voting addresses"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(25, "div")(26, "span", 13),
                e.ɵɵtext(27),
                e.ɵɵpipe(28, "number"),
                e.ɵɵpipe(29, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(30, Zn, 3, 7, "span", 14),
                e.ɵɵpipe(31, "async"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(32, "div")(33, "p", 15),
                e.ɵɵtext(34, "Total delegated"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(35, "div")(36, "span", 13),
                e.ɵɵtext(37),
                e.ɵɵpipe(38, "number"),
                e.ɵɵpipe(39, "async"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(40, qn, 3, 7, "span", 14),
                e.ɵɵpipe(41, "async"),
                e.ɵɵelementEnd()()()()(),
                e.ɵɵelementStart(42, "div", 16)(43, "p", 17),
                e.ɵɵtext(
                  44,
                  "Under this program, 1INCH tokens are distributed as gas refund to Ethereum users who stake 1INCH tokens through the 1inch dApp."
                ),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(45, "div")(46, "span", 18),
                e.ɵɵtext(
                  47,
                  "Initially, the idea of Gas Refund program was proposed by 1inch community members through the 1inch Network\u2019s governance forum. The proposal is described in detail in this Medium article.\n"
                ),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(48, "span"),
                e.ɵɵtext(49, "\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(50, "a", 19),
                e.ɵɵtext(51, "Medium article"),
                e.ɵɵelementEnd(),
                e.ɵɵtext(52, ". "),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(53, "p", 20),
                e.ɵɵtext(
                  54,
                  "Distribution happens at the end of each month. To be eligible for gas refunds (10% or more), a 1inch user needs to stake $1INCH for the entire period between their first swap and till the end of a calendar month. The refund amount depends on the amount of staked 1INCH tokens:"
                ),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(55, "div")(56, "p")(57, "span", 21),
                e.ɵɵtext(58, "\u2022"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(59, "span", 22),
                e.ɵɵtext(
                  60,
                  "users staking zero 1INCH receive a 5% gas refund;"
                ),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(61, "p")(62, "span", 21),
                e.ɵɵtext(63, "\u2022"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(64, "span"),
                e.ɵɵtext(65),
                e.ɵɵpipe(66, "transloco"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(67, "p")(68, "span", 21),
                e.ɵɵtext(69, "\u2022"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(70, "span"),
                e.ɵɵtext(71),
                e.ɵɵpipe(72, "transloco"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(73, "p")(74, "span", 21),
                e.ɵɵtext(75, "\u2022"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(76, "span"),
                e.ɵɵtext(77),
                e.ɵɵpipe(78, "transloco"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(79, "p")(80, "span", 21),
                e.ɵɵtext(81, "\u2022"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(82, "span"),
                e.ɵɵtext(83),
                e.ɵɵpipe(84, "transloco"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(85, "p")(86, "span", 21),
                e.ɵɵtext(87, "\u2022"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(88, "span"),
                e.ɵɵtext(89),
                e.ɵɵpipe(90, "transloco"),
                e.ɵɵelementEnd()()()(),
                e.ɵɵelementStart(91, "div", 23)(92, "p", 24),
                e.ɵɵtext(
                  93,
                  "Users who stake their 1INCH tokens can vote directly on major protocol parameters of the 1inch Liquidity Protocol and 1inch Aggregation Protocol via instant governance, which literally has an immediate effect."
                ),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(94, "div")(95, "span", 25),
                e.ɵɵtext(96, "On the"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(97, "span"),
                e.ɵɵtext(98, "\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(99, "a", 26),
                e.ɵɵtext(100, "Aggregation Protocol"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(101, "span"),
                e.ɵɵtext(102, ",\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(103, "span", 27),
                e.ɵɵtext(
                  104,
                  "a staker can vote for referral reward distribution between the Treasury and the referrers."
                ),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(105, "div")(106, "span", 25),
                e.ɵɵtext(107, "On the"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(108, "span"),
                e.ɵɵtext(109, "\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(110, "a", 28),
                e.ɵɵtext(111, "Liquidity Protocol"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(112, "span"),
                e.ɵɵtext(113, ",\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(114, "span", 29),
                e.ɵɵtext(
                  115,
                  "factory governance and pool governance are determined by voting."
                ),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(116, "p", 30),
                e.ɵɵtext(
                  117,
                  " Factory governance is responsible for parameters shared by all pools, such as the default swap fee, the default price impact fee, the default decay period, the referral reward and the governance reward. These parameters are regulated by voting with 1INCH tokens. "
                ),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(118, "p", 31),
                e.ɵɵtext(
                  119,
                  " Pool governance will include the configuration of parameters that are specific to each pool, such as the swap fee, the price impact fee and the decay period. Pool governance is done with LP tokens which are granted to liquidity contributors. The 1INCH token is not used in pool governance. "
                ),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(120, "div", 32)(121, "div")(122, "span", 33),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(124, "span"),
                e.ɵɵtext(125, "\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(126, "a", 34),
                e.ɵɵtext(127, "1inch forum"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(128, "span"),
                e.ɵɵtext(129, "\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(130, "span", 35),
                e.ɵɵtext(131, "to view discussions or read"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(132, "span"),
                e.ɵɵtext(133, "\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(134, "a", 36),
                e.ɵɵtext(135, "documentation"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(136, "span"),
                e.ɵɵtext(137, "\xa0"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(138, "span", 37),
                e.ɵɵtext(139, "to learn more."),
                e.ɵɵelementEnd()()()),
                2 & t &&
                  (e.ɵɵadvance(8),
                  e.ɵɵproperty("ngForOf", o.infoItems),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty(
                    "activeItemIndex",
                    e.ɵɵpipeBind1(12, 12, o.selectedActionIndex$)
                  ),
                  e.ɵɵadvance(8),
                  e.ɵɵproperty(
                    "stakeAction",
                    e.ɵɵpipeBind1(20, 14, o.selectedAction$)
                  ),
                  e.ɵɵadvance(8),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(
                      28,
                      16,
                      e.ɵɵpipeBind1(29, 18, o.votingAddresses$)
                    )
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty(
                    "tuiLet",
                    e.ɵɵpipeBind1(31, 20, o.votersPercentChange$)
                  ),
                  e.ɵɵadvance(7),
                  e.ɵɵtextInterpolate1(
                    "",
                    e.ɵɵpipeBind1(
                      38,
                      22,
                      e.ɵɵpipeBind1(39, 24, o.stackedTokens$)
                    ),
                    " K"
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty(
                    "tuiLet",
                    e.ɵɵpipeBind1(41, 26, o.stakedPercentChange$)
                  ),
                  e.ɵɵadvance(25),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind2(
                      66,
                      28,
                      "stakingPage.gas-refund-hidden-7",
                      e.ɵɵpureFunction0(43, eo)
                    )
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind2(
                      72,
                      31,
                      "stakingPage.gas-refund-hidden-8",
                      e.ɵɵpureFunction0(44, to)
                    )
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind2(
                      78,
                      34,
                      "stakingPage.gas-refund-hidden-8",
                      e.ɵɵpureFunction0(45, no)
                    )
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind2(
                      84,
                      37,
                      "stakingPage.gas-refund-hidden-8",
                      e.ɵɵpureFunction0(46, oo)
                    )
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind2(
                      90,
                      40,
                      "stakingPage.gas-refund-hidden-8",
                      e.ɵɵpureFunction0(47, io)
                    )
                  ));
            },
            dependencies: [
              g.sg,
              D.KI,
              H.yS,
              xe.Ls,
              Xe.H9,
              Xe.yu,
              Je.Kc,
              Je.dv,
              Qn,
              g.Ov,
              g.JJ,
              D.Ot,
              Yn.h,
            ],
            styles: [
              "[_nghost-%COMP%]{display:block;max-width:1180px;margin:-10px auto 0}.staking-page-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:calc(100% - 440px) 400px;grid-column-gap:40px}.staking-header[_ngcontent-%COMP%]{font-weight:700;font-size:32px;line-height:38px;margin-bottom:24px;color:var(--1inch__ui-01)}.staking-subheader[_ngcontent-%COMP%]{font-weight:500;font-size:24px;line-height:28px;margin:40px 0 24px;color:var(--1inch__ui-01)}.staking-text[_ngcontent-%COMP%]{font-size:16px;line-height:26px;color:var(--1inch__ui-02)}.staking-accordion[_ngcontent-%COMP%]{padding:24px;border-radius:16px;margin-bottom:16px;border:1px solid var(--1inch-border-10)}.staking-accordion[_ngcontent-%COMP%]     .header, .staking-accordion[_ngcontent-%COMP%]     .content{padding:0;align-items:start}.staking-accordion[_ngcontent-%COMP%]     .icon{margin-top:3px;color:var(--1inch__ui-02)}.staking-accordion[_ngcontent-%COMP%]     .title{white-space:unset}.staking-accordion[_ngcontent-%COMP%]:hover{border:1px solid var(--1inch-border-13)}.staking-accordion[_ngcontent-%COMP%]:hover  .icon{color:var(--1inch__ui-01)}.staking-accordion-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:64px 1fr;grid-column-gap:32px}.staking-accordion-content[_ngcontent-%COMP%]   .dark-theme-image[_ngcontent-%COMP%]{display:block}.staking-accordion-content[_ngcontent-%COMP%]   .light-theme-image[_ngcontent-%COMP%]{display:none}.staking-accordion-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:64px;height:64px}.light-theme[_nghost-%COMP%]   .staking-accordion-content[_ngcontent-%COMP%]   .dark-theme-image[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .staking-accordion-content[_ngcontent-%COMP%]   .dark-theme-image[_ngcontent-%COMP%]{display:none}.light-theme[_nghost-%COMP%]   .staking-accordion-content[_ngcontent-%COMP%]   .light-theme-image[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .staking-accordion-content[_ngcontent-%COMP%]   .light-theme-image[_ngcontent-%COMP%]{display:block}.staking-accordion-title[_ngcontent-%COMP%]{font-weight:500;font-size:20px;line-height:24px;margin-bottom:8px;color:var(--1inch__ui-01)}.staking-accordion-collapsed[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.staking-accordion-expanded[_ngcontent-%COMP%]     .staking-accordion-expanded-content>div, .staking-accordion-expanded[_ngcontent-%COMP%]     .staking-accordion-expanded-content>p{margin-top:16px}.staking-accordion-expanded[_ngcontent-%COMP%]     .staking-accordion-expanded-content a{display:inline-block;text-decoration:none}.staking-accordion-expanded[_ngcontent-%COMP%]     .staking-accordion-expanded-content .dot{margin:0 8px 0 4px}.staking-accordion-expanded-content[_ngcontent-%COMP%]{position:absolute;z-index:-100;opacity:0}.voting-stats[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:8px;margin-top:16px;padding:16px;border-radius:12px;border:1px solid var(--1inch-border-12)}.voting-stat-subtitle[_ngcontent-%COMP%]{font-size:13px;line-height:16px;margin-bottom:8px;color:var(--1inch__ui-02)}.voting-stat-value[_ngcontent-%COMP%]{font-size:20px;line-height:24px;letter-spacing:.3px;margin-right:8px}.voting-stat-difference[_ngcontent-%COMP%]{font-size:13px;line-height:16px}.voting-stat-difference.green[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__approve)}.voting-stat-difference.red[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__error)}.settings-button[_ngcontent-%COMP%]{position:absolute;right:16px;top:16px;z-index:10;color:var(--1inch__ui-01)}.staking-card[_ngcontent-%COMP%]{max-width:400px;margin:0 auto 16px;border-radius:24px;padding:18px 16px;position:relative;background:var(--1inch-bg-02)}.staking-page-tabs[_ngcontent-%COMP%]{margin:0 8px 14px}.staking-page-tabs[_ngcontent-%COMP%]     tui-underline{display:none}.staking-page-tab[_ngcontent-%COMP%]{font-size:16px;line-height:20px;text-decoration:none;font-weight:500;color:var(--1inch__ui-02);margin:0 24px 0 0;padding-bottom:4px;cursor:pointer}.staking-page-tab[_ngcontent-%COMP%]:hover, .staking-page-tab[_ngcontent-%COMP%]:focus{color:var(--1inch-common-text-03)}.staking-page-tab[_ngcontent-%COMP%]:last-child{margin-right:0!important}@media (max-width: 360px){.staking-page-tab[_ngcontent-%COMP%]{margin-right:16px}}.staking-page-tab_active[_ngcontent-%COMP%]{color:var(--1inch__ui-01)}.pinned-settings[_ngcontent-%COMP%]     .advanced-setting{margin-top:24px}@media (max-width: 875px){[_nghost-%COMP%]{margin-top:0;max-width:480px}.staking-page-content[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse}.staking-card[_ngcontent-%COMP%]{max-width:100%}.voting-stats[_ngcontent-%COMP%]{margin-bottom:32px}}@media (max-width: 520px){[_nghost-%COMP%]{margin-top:-20px}.staking-header[_ngcontent-%COMP%]{font-weight:500;font-size:20px;line-height:24px;margin-bottom:16px}.staking-card[_ngcontent-%COMP%]{max-width:unset}.voting-stat-subtitle[_ngcontent-%COMP%]{margin-bottom:4px}.voting-stat-value[_ngcontent-%COMP%]{font-size:16px;line-height:26px;letter-spacing:0;margin-right:4px}.voting-stats[_ngcontent-%COMP%]{margin-bottom:24px}.staking-subheader[_ngcontent-%COMP%]{font-size:20px;line-height:24px;margin:24px 0 16px}.staking-accordion[_ngcontent-%COMP%]{padding:16px}.staking-accordion[_ngcontent-%COMP%]     .icon{margin:auto}.staking-accordion-content[_ngcontent-%COMP%]{display:block}.staking-accordion-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:48px;height:48px}.staking-accordion-title[_ngcontent-%COMP%]{margin-top:16px}.staking-accordion-expanded[_ngcontent-%COMP%]     .staking-accordion-expanded-content>div, .staking-accordion-expanded[_ngcontent-%COMP%]     .staking-accordion-expanded-content>p{margin-top:12px}}@media (max-width: 418px){[_nghost-%COMP%]{margin-top:0}.staking-card[_ngcontent-%COMP%]{margin:0 -16px 16px}}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var so = a(9395),
        co = a(53686),
        lo = a(64074),
        po = a(99759),
        go = a(65687),
        mo = a(26341),
        uo = a(35950),
        Ze = a(43676),
        qe = a(5372),
        ho = a(27612);
      let et = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({})),
          n
        );
      })();
      var vo = a(78336);
      let _o = (() => {
        class n {
          constructor(t, o) {
            (this.http = t), (this.activeConnectionQuery = o);
          }
          fetchChartsDataV1_1() {
            return (0, j.a)([
              this.activeConnectionQuery.getApiEndpointOnce(
                "liquidityProtocolGraphApiEndpoint"
              ),
              this.activeConnectionQuery.getApiEndpointOnce(
                "governanceGraphApiEndpoint"
              ),
            ]).pipe((0, C.w)((t) => this.fetchChartsData(t[0], t[1])));
          }
          fetchChartsData(t, o) {
            const c = `${t}/stats`,
              p = `${o}/rewards`;
            return (0, j.a)([
              this.http.get(`${t}/analytics`),
              this.http.get(c),
              this.http.get(p),
            ]).pipe(
              (0, x.U)(([l, d, u]) =>
                (function fo(n, i, t) {
                  var o;
                  n = n.sort((l, d) => (l.date > d.date ? 1 : -1));
                  const r = Object.values(i)
                    .flat(2)
                    .sort((l, d) =>
                      l.timestamp > d.timestamp
                        ? 1
                        : l.timestamp < d.timestamp
                        ? -1
                        : 0
                    );
                  for (let l = 1; l <= n.length; l++) {
                    const d =
                        (null === (o = null == n ? void 0 : n[l]) ||
                        void 0 === o
                          ? void 0
                          : o.date) || 99999999999,
                      u = n[l - 1].date,
                      O = r
                        .filter((h) => h.timestamp < d && h.timestamp >= u)
                        .reduce((h, Q) => h + +Q.earnings, 0);
                    n[l - 1].earnings = O.toString();
                  }
                  const c = [];
                  for (const l of t.governanceRewards) {
                    const d = c.length - 1;
                    d >= 0 && c[d].timestamp === l.timestamp
                      ? (c[d].amount = w.O$.from(c[d].amount)
                          .add(l.amount)
                          .toString())
                      : c.push(l);
                  }
                  const p = [];
                  for (const l of t.referralRewards) {
                    const d = p.length - 1;
                    d >= 0 && p[d].timestamp === l.timestamp
                      ? (p[d].amount = w.O$.from(p[d].amount)
                          .add(l.amount)
                          .toString())
                      : p.push(l);
                  }
                  return {
                    analytics: n,
                    rewards: {
                      governanceRewards: c,
                      referralRewards: p,
                      totalEarnings: t.totalEarnings,
                    },
                  };
                })(l, d, u)
              )
            );
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵinject(vo.eN), e.ɵɵinject(pe.r));
          }),
          (n.ɵprov = e.ɵɵdefineInjectable({
            token: n,
            factory: n.ɵfac,
            providedIn: et,
          })),
          n
        );
      })();
      var xo = a(68435),
        tt = a(54266),
        Co = a(83140);
      function yo(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p", 18),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "currency"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind4(2, 1, t.totalLiquidity, "USD", "symbol", "1.0-0"),
              " "
            );
        }
      }
      function Po(n, i) {
        1 & n && e.ɵɵelement(0, "p", 19);
      }
      function Oo(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p", 20),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "currency"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind4(2, 1, t.totalVolume, "USD", "symbol", "1.0-0"),
              " "
            );
        }
      }
      function So(n, i) {
        1 & n && e.ɵɵelement(0, "p", 19);
      }
      function wo(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p", 21),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "number"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(2, 1, t.totalReferrerReward, "1.0-0"),
              " 1INCH "
            );
        }
      }
      function Mo(n, i) {
        1 & n && e.ɵɵelement(0, "p", 19);
      }
      function bo(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p", 22),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "number"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(2, 1, t.totalGovernanceReward, "1.0-0"),
              " 1INCH "
            );
        }
      }
      function ko(n, i) {
        1 & n && e.ɵɵelement(0, "p", 19);
      }
      function Ao(n, i) {
        1 & n && e.ɵɵelementContainer(0);
      }
      const nt = function (n, i) {
        return { data: n, item: i };
      };
      function Eo(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div"),
            e.ɵɵelement(1, "p", 23),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵtemplate(3, Ao, 1, 0, "ng-container", 24),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = i.$implicit,
            o = e.ɵɵnextContext(),
            r = e.ɵɵreference(25);
          e.ɵɵattribute("data-id", "analytics-charts-" + t),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "innerText",
              e.ɵɵpipeBind1(2, 4, "analyticsPage." + t)
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngTemplateOutlet", r)(
              "ngTemplateOutletContext",
              e.ɵɵpureFunction2(8, nt, e.ɵɵpipeBind1(4, 6, o.chartsData$), t)
            );
        }
      }
      function To(n, i) {
        1 & n && e.ɵɵelementContainer(0);
      }
      function Io(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "mat-tab", 26),
            e.ɵɵpipe(1, "transloco"),
            e.ɵɵtemplate(2, To, 1, 0, "ng-container", 24),
            e.ɵɵpipe(3, "async"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = i.$implicit,
            o = e.ɵɵnextContext(2),
            r = e.ɵɵreference(25);
          e.ɵɵproperty("label", e.ɵɵpipeBind1(1, 3, "tokenClaim." + t + "-2")),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngTemplateOutlet", r)(
              "ngTemplateOutletContext",
              e.ɵɵpureFunction2(7, nt, e.ɵɵpipeBind1(3, 5, o.chartsData$), t)
            );
        }
      }
      function Vo(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "mat-tab-group"),
            e.ɵɵtemplate(1, Io, 4, 10, "mat-tab", 25),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("ngForOf", t.tabsCharts);
        }
      }
      function Bo(n, i) {
        1 & n && e.ɵɵelement(0, "img", 29);
      }
      function Do(n, i) {
        if ((1 & n && e.ɵɵelement(0, "canvas", 33), 2 & n)) {
          const t = e.ɵɵnextContext(2),
            o = t.data,
            r = t.item;
          e.ɵɵproperty("data", o[r].chartData)("options", o[r].options)(
            "plugins",
            o[r].plugins
          )("type", o[r].type);
        }
      }
      function $o(n, i) {
        1 & n &&
          (e.ɵɵelementStart(0, "div", 34),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(1, "svg", 35),
          e.ɵɵelement(2, "use", 36),
          e.ɵɵelementEnd(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(3, "span", 37),
          e.ɵɵtext(4, "There is not enough data yet. Try later"),
          e.ɵɵelementEnd()());
      }
      function Fo(n, i) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 30),
            e.ɵɵtemplate(1, Do, 1, 4, "canvas", 31),
            e.ɵɵtemplate(2, $o, 5, 0, "div", 32),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().data;
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !t.empty),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.empty);
        }
      }
      function Ro(n, i) {
        if (
          (1 & n &&
            (e.ɵɵtemplate(0, Bo, 1, 0, "img", 27),
            e.ɵɵtemplate(1, Fo, 3, 2, "div", 28)),
          2 & n)
        ) {
          const t = i.data;
          e.ɵɵproperty("ngIf", !t), e.ɵɵadvance(1), e.ɵɵproperty("ngIf", t);
        }
      }
      qe.kL.registry.plugins.get("annotation") || qe.kL.register(ho.Z);
      let jo = (() => {
        class n {
          constructor(t, o, r, c) {
            (this.analyticsChartService = t),
              (this.webAnalyticsService = o),
              (this.activeConnectionQuery = r),
              (this.globalSettingsQuery = c),
              (this.charts = ["liquidity", "volume", "earning"]),
              (this.tabsCharts = ["governance-reward", "referral-reward"]),
              (this.chartsInfo = {}),
              (this.chartsData$ =
                this.activeConnectionQuery.currentChainId$.pipe(
                  (0, C.w)(() =>
                    this.analyticsChartService.fetchChartsDataV1_1()
                  ),
                  (0, x.U)((p) => {
                    let l = p.analytics;
                    if (l.length < Ze.Cw) return !0;
                    (l = l
                      .sort((d, u) => (d.date > u.date ? 1 : -1))
                      .filter((d) => Date.now() - 1e3 * d.date <= 10368e6)),
                      (this.chartsInfo.volume = this.mergeChartItems(
                        l,
                        "dailyVolumeUSD"
                      )),
                      (this.totalVolume = this.chartsInfo.volume.reduce(
                        (d, u) => d + +u.value,
                        0
                      )),
                      (this.chartsInfo.liquidity = this.mergeChartItems(
                        l,
                        "totalLiquidityUSD"
                      )),
                      (this.totalLiquidity =
                        this.chartsInfo.liquidity.length > 0
                          ? this.chartsInfo.liquidity[
                              this.chartsInfo.liquidity.length - 1
                            ].value
                          : 0),
                      (this.chartsInfo.earning = this.mergeChartItems(
                        l,
                        "earnings"
                      )),
                      (this.totalGovernanceReward = +(0, L.kg)(
                        p.rewards.totalEarnings.governance,
                        18
                      )),
                      (this.totalReferrerReward = +(0, L.kg)(
                        p.rewards.totalEarnings.referral,
                        18
                      ));
                  }),
                  (0, C.w)((p) =>
                    p
                      ? (0, I.of)({ empty: !0 })
                      : this.globalSettingsQuery.select(["themeMode"]).pipe(
                          (0, x.U)(({ themeMode: l }) => {
                            const d = {};
                            for (const u of this.charts)
                              d[u] = (0, Ze.Ej)(
                                this.chartsInfo[u],
                                "liquidity" === u,
                                l
                              );
                            return d;
                          })
                        )
                  ),
                  (0, Qe.K)((p) => (Co.error(p), (0, I.of)({ empty: !0 })))
                ));
          }
          ngOnInit() {
            this.webAnalyticsService.pageView(
              "/dao/analytics",
              "DAO / Analytics"
            );
          }
          mergeChartItems(t, o) {
            return t.reduce((r, c) => {
              const p = r.findIndex((d) => d.time === c.date),
                l = +(+c[o]).toFixed(2);
              return -1 === p
                ? (r.push({ time: c.date, value: l }), r)
                : ((r[p].value += l), r);
            }, []);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(_o),
              e.ɵɵdirectiveInject(ye.y),
              e.ɵɵdirectiveInject(pe.r),
              e.ɵɵdirectiveInject(xo.J)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-analytics-page"]],
            decls: 26,
            vars: 10,
            consts: [
              [1, "analytics-cards"],
              ["data-id", "analytics-total-liquidity", 1, "analytics-card"],
              ["transloco", "dao.total-liquidity2", 1, "analytics-card-title"],
              [
                "class",
                "analytics-card-amount",
                "data-id",
                "analytics-total-liquidity-value",
                4,
                "ngIf",
              ],
              [
                "class",
                "analytics-card-amount",
                "transloco",
                "dao.collecting-data",
                4,
                "ngIf",
              ],
              ["data-id", "analytics-total-volume", 1, "analytics-card"],
              [
                "transloco",
                "analyticsPage.total-volume2",
                1,
                "analytics-card-title",
              ],
              [
                "class",
                "analytics-card-amount",
                "data-id",
                "analytics-total-volume-value",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "analytics-total-referrer-rewards",
                1,
                "analytics-card",
              ],
              [
                "transloco",
                "analyticsPage.total-referrer-rewards",
                1,
                "analytics-card-title",
              ],
              [
                "class",
                "analytics-card-amount",
                "data-id",
                "analytics-total-referrer-rewards-value",
                4,
                "ngIf",
              ],
              [
                "data-id",
                "analytics-total-governance-reward",
                1,
                "analytics-card",
              ],
              [
                "transloco",
                "dao.total-governance-reward2",
                1,
                "analytics-card-title",
              ],
              [
                "class",
                "analytics-card-amount",
                "data-id",
                "analytics-total-governance-reward-value",
                4,
                "ngIf",
              ],
              ["data-id", "analytics-charts", 1, "analytics-charts"],
              [4, "ngFor", "ngForOf"],
              [4, "ngIf"],
              ["chartWrap", ""],
              [
                "data-id",
                "analytics-total-liquidity-value",
                1,
                "analytics-card-amount",
              ],
              ["transloco", "dao.collecting-data", 1, "analytics-card-amount"],
              [
                "data-id",
                "analytics-total-volume-value",
                1,
                "analytics-card-amount",
              ],
              [
                "data-id",
                "analytics-total-referrer-rewards-value",
                1,
                "analytics-card-amount",
              ],
              [
                "data-id",
                "analytics-total-governance-reward-value",
                1,
                "analytics-card-amount",
              ],
              [1, "analytics-chart-title", 3, "innerText"],
              [4, "ngTemplateOutlet", "ngTemplateOutletContext"],
              [3, "label", 4, "ngFor", "ngForOf"],
              [3, "label"],
              [
                "class",
                "analytics-skeleton",
                "src",
                "assets/images/chart-plug-animate.svg",
                "alt",
                "",
                4,
                "ngIf",
              ],
              ["class", "analytics-chart", 4, "ngIf"],
              [
                "src",
                "assets/images/chart-plug-animate.svg",
                "alt",
                "",
                1,
                "analytics-skeleton",
              ],
              [1, "analytics-chart"],
              [
                "baseChart",
                "",
                3,
                "data",
                "options",
                "plugins",
                "type",
                4,
                "ngIf",
              ],
              ["class", "analytics-warning", 4, "ngIf"],
              ["baseChart", "", 3, "data", "options", "plugins", "type"],
              [1, "analytics-warning"],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/graphic.svg#graphic"],
              ["transloco", "analyticsCharts.not-data-yet"],
            ],
            template: function (t, o) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "p", 2),
                e.ɵɵtext(3, "Total liquidity"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(4, yo, 3, 6, "p", 3),
                e.ɵɵtemplate(5, Po, 1, 0, "p", 4),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(6, "div", 5)(7, "p", 6),
                e.ɵɵtext(8, "Total volume"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(9, Oo, 3, 6, "p", 7),
                e.ɵɵtemplate(10, So, 1, 0, "p", 4),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(11, "div", 8)(12, "p", 9),
                e.ɵɵtext(13, "Total Referrer rewards"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(14, wo, 3, 4, "p", 10),
                e.ɵɵtemplate(15, Mo, 1, 0, "p", 4),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(16, "div", 11)(17, "p", 12),
                e.ɵɵtext(18, "Total governance reward"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(19, bo, 3, 4, "p", 13),
                e.ɵɵtemplate(20, ko, 1, 0, "p", 4),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(21, "div", 14),
                e.ɵɵtemplate(22, Eo, 5, 11, "div", 15),
                e.ɵɵtemplate(23, Vo, 2, 1, "mat-tab-group", 16),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(
                  24,
                  Ro,
                  2,
                  2,
                  "ng-template",
                  null,
                  17,
                  e.ɵɵtemplateRefExtractor
                )),
                2 & t &&
                  (e.ɵɵadvance(4),
                  e.ɵɵproperty("ngIf", o.totalLiquidity > 0),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", !o.totalLiquidity),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("ngIf", o.totalVolume > 0),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", !o.totalVolume),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("ngIf", o.totalReferrerReward > 0),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", !o.totalReferrerReward),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("ngIf", o.totalGovernanceReward > 0),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", !o.totalGovernanceReward),
                  e.ɵɵadvance(2),
                  e.ɵɵproperty("ngForOf", o.charts),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngIf", !1));
            },
            dependencies: [
              g.sg,
              g.O5,
              g.tP,
              D.KI,
              tt.SP,
              tt.uX,
              Ve.jh,
              g.Ov,
              g.JJ,
              g.H9,
              D.Ot,
            ],
            styles: [
              ".analytics-cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:16px}@media (min-width: 1024px){.analytics-cards[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr 1fr 1fr}}.analytics-card[_ngcontent-%COMP%]{border:1px solid var(--1inch-border-03);border-radius:12px;text-align:center;padding:18px 0}@media (min-width: 1024px){.analytics-card[_ngcontent-%COMP%]{font-size:24px}}.analytics-card-title[_ngcontent-%COMP%]{font-size:12px;line-height:16px;margin-bottom:10px;color:var(--1inch__ui-02)}.analytics-card-amount[_ngcontent-%COMP%]{font-size:16px}@media (min-width: 1024px){.analytics-card-amount[_ngcontent-%COMP%]{font-size:20px}}.analytics-charts[_ngcontent-%COMP%]{display:block;margin:40px 0;text-transform:capitalize}@media (min-width: 1150px){.analytics-charts[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:40px;grid-row-gap:40px}}.analytics-chart-title[_ngcontent-%COMP%]{margin-bottom:-12px}.analytics-chart[_ngcontent-%COMP%], .analytics-skeleton[_ngcontent-%COMP%]{height:400px;width:100%}@media (max-width: 1150px){.analytics-chart[_ngcontent-%COMP%]{padding:0 12px;margin-bottom:40px}}.analytics-warning[_ngcontent-%COMP%]{height:calc(100% - 24px);display:flex;align-items:center;justify-content:center;border-radius:12px;border:1px solid;margin-top:24px;padding:16px;text-align:center;line-height:18px;color:var(--1inch__text-and-icons__warning)}.analytics-warning[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:8px}",
            ],
          })),
          n
        );
      })();
      const Wo = [
        {
          path: "",
          component: (() => {
            class n {
              constructor(t) {
                this.governanceTransactionService = t;
              }
              ngOnDestroy() {
                this.governanceTransactionService.stopPipelines();
              }
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)(e.ɵɵdirectiveInject(ge.h));
              }),
              (n.ɵcmp = e.ɵɵdefineComponent({
                type: n,
                selectors: [["app-dao"]],
                decls: 1,
                vars: 0,
                template: function (t, o) {
                  1 & t && e.ɵɵelement(0, "router-outlet");
                },
                dependencies: [H.lC],
                styles: [
                  ".liquidity-protocol-page[_ngcontent-%COMP%]{display:grid;grid-template-columns:140px 1fr;grid-column-gap:40px;min-height:calc(100vh - 100px)}@media (max-width: 1140px){.liquidity-protocol-page[_ngcontent-%COMP%]{grid-template-columns:40px 1fr}}.lp-menu-item[_ngcontent-%COMP%]{text-decoration:none;display:flex;align-items:center;margin-bottom:40px;color:var(--1inch__ui-02)}.lp-menu-item[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-right:12px}.lp-menu-item[_ngcontent-%COMP%]:hover{color:var(--1inch-common-text-03)}@media (max-width: 1140px){.lp-menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}.lp-menu-item-active[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.lp-menu-item-active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch-common-text-03)}.lp-menu-item-active-green[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{color:var(--1inch__text-and-icons__approve)}.liquidity-protocol-menu[_ngcontent-%COMP%]{padding-top:4px}@media (max-width: 1024px){.liquidity-protocol-menu[_ngcontent-%COMP%]{display:none}.liquidity-protocol-page[_ngcontent-%COMP%]{display:block}}",
                ],
                changeDetection: 0,
              })),
              n
            );
          })(),
          canActivateChild: [po.G],
          children: [
            { path: "staking", component: ro },
            { path: "liquidity-protocol", component: un },
            {
              path: "aggregation-protocol",
              component: on,
              data: { showAggregation: !0 },
            },
            { path: "vote/:votingFor", component: so.V },
            { path: "analytics", component: jo },
            { path: "", pathMatch: "full", redirectTo: "governance" },
          ],
        },
      ];
      let Uo = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            imports: [
              go.m,
              H.Bz.forChild(Wo),
              et,
              lt.Hi,
              ct,
              S.lN,
              Ie.TU,
              pt.JX,
              mo.Q,
              an.n,
              co.u,
              uo.S,
              lo.M,
              Ve.vQ,
              xe.WD,
            ],
          })),
          n
        );
      })();
    },
    92110: (_e, N, a) => {
      a.d(N, { z: () => M });
      var s = a(51109),
        e = a(52126);
      let M = (() => {
        class E {}
        return (
          (E.ɵfac = function (P) {
            return new (P || E)();
          }),
          (E.ɵcmp = s.ɵɵdefineComponent({
            type: E,
            selectors: [["gas-price-widget"]],
            decls: 1,
            vars: 2,
            consts: [
              [
                "domain",
                "classic-swap-embed-gas-price",
                3,
                "compactMode",
                "showTitles",
              ],
            ],
            template: function (P, U) {
              1 & P && s.ɵɵelement(0, "swap-settings", 0),
                2 & P && s.ɵɵproperty("compactMode", !0)("showTitles", !1);
            },
            dependencies: [e.W],
            styles: ["[_nghost-%COMP%]{display:block}"],
            changeDetection: 0,
          })),
          E
        );
      })();
    },
    15927: (_e, N, a) => {
      a.d(N, { $: () => I });
      var s = a(33747),
        e = a(35878),
        M = a(77724),
        E = a(55231),
        W = a(90813),
        P = a(51109),
        U = a(19333);
      let I = (() => {
        class $ {
          constructor(g, T, z, b, V) {
            (this.destroy$ = g),
              (this.element = T),
              (this.templateRef = z),
              (this.viewContainer = b),
              (this.settingToggleQuery = V);
          }
          set isSettingWidgetVisible(g) {
            const { contextId: T, widgetId: z } = g;
            (this.contextId = T), (this.widgetId = z);
          }
          get isViewCreated() {
            return null !== this.viewContainer.get(0);
          }
          ngOnInit() {
            const g = this.settingToggleQuery
              .isWidgetOpened$(this.contextId, this.widgetId)
              .pipe(
                (0, e.x)(),
                (0, M.b)((T) => {
                  !T || this.isViewCreated
                    ? T || !this.isViewCreated || this.viewContainer.clear()
                    : this.viewContainer.createEmbeddedView(this.templateRef);
                }),
                (0, E.R)(this.destroy$)
              );
            (0, W.O)(g, "isWidgetVisible$");
          }
        }
        return (
          ($.ɵfac = function (g) {
            return new (g || $)(
              P.ɵɵdirectiveInject(s.a3, 2),
              P.ɵɵdirectiveInject(P.ElementRef),
              P.ɵɵdirectiveInject(P.TemplateRef),
              P.ɵɵdirectiveInject(P.ViewContainerRef),
              P.ɵɵdirectiveInject(U.k)
            );
          }),
          ($.ɵdir = P.ɵɵdefineDirective({
            type: $,
            selectors: [["", "isSettingWidgetVisible", ""]],
            inputs: { isSettingWidgetVisible: "isSettingWidgetVisible" },
            features: [P.ɵɵProvidersFeature([s.a3])],
          })),
          $
        );
      })();
    },
    63582: (_e, N, a) => {
      a.d(N, { z: () => b });
      var s = a(51109),
        e = a(90813),
        M = a(33747),
        E = a(76027),
        W = a(35878),
        P = a(77724),
        U = a(55231),
        I = a(74578),
        $ = a(19333),
        J = a(86732),
        g = a(12725),
        T = a(38143);
      function z(V, y) {
        if (1 & V) {
          const S = s.ɵɵgetCurrentView();
          s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "button", 1),
            s.ɵɵlistener("click", function () {
              const Z = s.ɵɵrestoreView(S).tuiLet,
                q = s.ɵɵnextContext();
              return s.ɵɵresetView(q.clickEdit(!Z));
            }),
            s.ɵɵelementEnd(),
            s.ɵɵelementContainerEnd();
        }
        if (2 & V) {
          const S = y.tuiLet;
          s.ɵɵadvance(1),
            s.ɵɵproperty(
              "transloco",
              S ? "transactionCost.hide-title" : "common.edit"
            );
        }
      }
      let b = (() => {
        class V {
          constructor(S, B, C) {
            (this.destroy$ = S),
              (this.settingToggleQuery = B),
              (this.settingToggleService = C),
              (this.customToggleFlow = !1),
              (this.toggleClick = new s.EventEmitter()),
              (this.isWidgetOpened$ = new E.X(!1));
          }
          ngOnInit() {
            const S = this.settingToggleQuery
              .isWidgetOpened$(this.contextId, this.widgetId)
              .pipe(
                (0, W.x)(),
                (0, P.b)((B) => {
                  this.isWidgetOpened$.next(B);
                }),
                (0, U.R)(this.destroy$)
              );
            (0, e.O)(S, "isWidgetOpened$");
          }
          clickEdit(S) {
            this.settingToggleService.changeIsWidgetOpened({
              isOpened: S,
              contextId: this.contextId,
              widgetId: this.widgetId,
            }),
              this.customToggleFlow && this.toggleClick.emit(S);
          }
        }
        return (
          (V.ɵfac = function (S) {
            return new (S || V)(
              s.ɵɵdirectiveInject(M.a3, 2),
              s.ɵɵdirectiveInject($.k),
              s.ɵɵdirectiveInject(J.d)
            );
          }),
          (V.ɵcmp = s.ɵɵdefineComponent({
            type: V,
            selectors: [["setting-toggle"]],
            inputs: {
              contextId: "contextId",
              widgetId: "widgetId",
              customToggleFlow: "customToggleFlow",
            },
            outputs: { toggleClick: "toggleClick" },
            features: [s.ɵɵProvidersFeature([M.a3])],
            decls: 2,
            vars: 3,
            consts: [
              [4, "tuiLet"],
              [1, "edit-button", "blank-button", 3, "transloco", "click"],
            ],
            template: function (S, B) {
              1 & S &&
                (s.ɵɵtemplate(0, z, 2, 1, "ng-container", 0),
                s.ɵɵpipe(1, "async")),
                2 & S &&
                  s.ɵɵproperty(
                    "tuiLet",
                    s.ɵɵpipeBind1(1, 1, B.isWidgetOpened$)
                  );
            },
            dependencies: [I.Ls, g.KI, T.Ov],
            styles: [
              "[_nghost-%COMP%]{display:block}.edit-button[_ngcontent-%COMP%]{font-size:13px;color:var(--1inch-common-text-03)}.edit-button[_ngcontent-%COMP%]:hover{opacity:.75;transition:.2s}",
            ],
          })),
          V
        );
      })();
    },
    25541: (_e, N, a) => {
      a.d(N, { o: () => Ee });
      var s = a(51109),
        e = a(18992),
        M = a(52126),
        E = a(29737),
        W = a(76027),
        P = a(64736),
        U = a(68751),
        I = a(76327),
        $ = a(24124),
        J = a(36063),
        g = a(36565),
        T = a(86732),
        z = a(38143),
        b = a(38964),
        V = a(33904),
        y = a(74578),
        S = a(63582),
        B = a(12725),
        C = a(80135);
      function Z(v, R) {
        if (
          (1 & v &&
            (s.ɵɵelement(0, "gas-refund-value", 6), s.ɵɵpipe(1, "async")),
          2 & v)
        ) {
          const m = s.ɵɵnextContext();
          s.ɵɵproperty(
            "refundPercent",
            s.ɵɵpipeBind1(1, 1, m.gasRefundPercent$)
          );
        }
      }
      function q(v, R) {
        if (
          (1 & v &&
            (s.ɵɵnamespaceSVG(),
            s.ɵɵelementStart(0, "svg", 13),
            s.ɵɵelement(1, "use"),
            s.ɵɵelementEnd()),
          2 & v)
        ) {
          const m = s.ɵɵnextContext(5);
          s.ɵɵadvance(1),
            s.ɵɵattribute(
              "href",
              "assets/images/icons/" +
                m.gasPreview.icon +
                ".svg#" +
                m.gasPreview.icon,
              null,
              "xlink"
            );
        }
      }
      function x(v, R) {
        if (
          (1 & v &&
            (s.ɵɵelementStart(0, "div", 10),
            s.ɵɵtemplate(1, q, 2, 1, "svg", 11),
            s.ɵɵelementStart(2, "span", 12),
            s.ɵɵtext(3),
            s.ɵɵpipe(4, "transloco"),
            s.ɵɵelementEnd()()),
          2 & v)
        ) {
          const m = s.ɵɵnextContext(4);
          s.ɵɵadvance(1),
            s.ɵɵproperty("ngIf", m.gasPreview.icon),
            s.ɵɵadvance(2),
            s.ɵɵtextInterpolate(s.ɵɵpipeBind1(4, 2, m.gasPreview.title));
        }
      }
      function re(v, R) {
        if (1 & v) {
          const m = s.ɵɵgetCurrentView();
          s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "tooltip", 8),
            s.ɵɵlistener("click", function () {
              s.ɵɵrestoreView(m);
              const G = s.ɵɵnextContext(3);
              return s.ɵɵresetView(G.toggleGasSettings());
            }),
            s.ɵɵelementEnd(),
            s.ɵɵtemplate(
              2,
              x,
              5,
              4,
              "ng-template",
              null,
              9,
              s.ɵɵtemplateRefExtractor
            ),
            s.ɵɵelementContainerEnd();
        }
        if (2 & v) {
          const m = s.ɵɵreference(3),
            k = s.ɵɵnextContext(3);
          s.ɵɵadvance(1),
            s.ɵɵproperty("tooltip", k.gasPreview.tooltip)("customElement", m)(
              "clickableElement",
              !0
            );
        }
      }
      function Pe(v, R) {
        if (1 & v) {
          const m = s.ɵɵgetCurrentView();
          s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "setting-toggle", 7),
            s.ɵɵlistener("toggleClick", function (G) {
              s.ɵɵrestoreView(m);
              const fe = s.ɵɵnextContext(2);
              return s.ɵɵresetView(fe.emitToggleClick(G));
            }),
            s.ɵɵelementEnd(),
            s.ɵɵtemplate(2, re, 4, 3, "ng-container", 4),
            s.ɵɵelementContainerEnd();
        }
        if (2 & v) {
          const m = s.ɵɵnextContext(2);
          s.ɵɵadvance(1),
            s.ɵɵproperty("contextId", m.contextId)(
              "customToggleFlow",
              m.customToggleFlow
            ),
            s.ɵɵadvance(1),
            s.ɵɵproperty("ngIf", m.gasPreview);
        }
      }
      function Oe(v, R) {
        if (
          (1 & v &&
            (s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "span", 14),
            s.ɵɵtext(2),
            s.ɵɵpipe(3, "async"),
            s.ɵɵelementEnd(),
            s.ɵɵelementContainerEnd()),
          2 & v)
        ) {
          const m = s.ɵɵnextContext(2);
          s.ɵɵadvance(2),
            s.ɵɵtextInterpolate(s.ɵɵpipeBind1(3, 1, m.currentGasPriceGwei$));
        }
      }
      function ke(v, R) {
        if (
          (1 & v &&
            (s.ɵɵelementContainerStart(0),
            s.ɵɵtemplate(1, Pe, 3, 3, "ng-container", 4),
            s.ɵɵpipe(2, "async"),
            s.ɵɵtemplate(3, Oe, 4, 3, "ng-container", 4),
            s.ɵɵpipe(4, "async"),
            s.ɵɵelementContainerEnd()),
          2 & v)
        ) {
          const m = s.ɵɵnextContext();
          s.ɵɵadvance(1),
            s.ɵɵproperty(
              "ngIf",
              s.ɵɵpipeBind1(2, 2, m.isSettingToggleAvailable$)
            ),
            s.ɵɵadvance(2),
            s.ɵɵproperty(
              "ngIf",
              !s.ɵɵpipeBind1(4, 4, m.isSettingToggleAvailable$)
            );
        }
      }
      function Ae(v, R) {
        if (1 & v) {
          const m = s.ɵɵgetCurrentView();
          s.ɵɵelementContainerStart(0),
            s.ɵɵelementStart(1, "usd-token-price", 15),
            s.ɵɵlistener("click", function () {
              s.ɵɵrestoreView(m);
              const G = s.ɵɵnextContext();
              return s.ɵɵresetView(G.handlePriceClick());
            }),
            s.ɵɵpipe(2, "async"),
            s.ɵɵpipe(3, "async"),
            s.ɵɵelementEnd(),
            s.ɵɵelementContainerEnd();
        }
        if (2 & v) {
          const m = R.tuiLet,
            k = s.ɵɵnextContext();
          s.ɵɵadvance(1),
            s.ɵɵclassProp("skeleton-host", k.loading),
            s.ɵɵproperty("showTokenAmount", m)("showUsdAmount", !m)(
              "amount",
              s.ɵɵpipeBind1(2, 6, k.currentTxFeeAmount$)
            )("token", s.ɵɵpipeBind1(3, 8, k.feeToken$));
        }
      }
      let Ee = (() => {
        class v {
          constructor(m, k, G, fe) {
            (this.activeConnectionQuery = m),
              (this.gasRefundService = k),
              (this.gasPriceQuery = G),
              (this.settingToggleService = fe),
              (this.loading = !1),
              (this.isEditEnable = !0),
              (this.customToggleFlow = !1),
              (this.toggleClick = new s.EventEmitter()),
              (this.currentTxFeeAmount$ = new W.X(0)),
              (this.feeToken$ = this.activeConnectionQuery.currentNativeToken$),
              (this.showTokenAmount$ = new W.X(!1)),
              (this.isSettingToggleAvailable$ =
                this.activeConnectionQuery.currentChainId$.pipe(
                  (0, P.U)((K) => !M.o.includes(K))
                )),
              (this.currentGasPriceGwei$ = this.isSettingToggleAvailable$.pipe(
                (0, U.h)((K) => !K),
                (0, I.w)(() =>
                  this.gasPriceQuery.currentGasPrice$.pipe(
                    (0, P.U)(
                      (K) =>
                        +(0, e.aY)(K).toFixed(3) +
                        " " +
                        this.activeConnectionQuery.currentChainGasUnitName
                    )
                  )
                )
              )),
              (this.gasRefundPercent$ =
                this.gasRefundService.gasRefundPercent$),
              (this.isGasRefundVisible$ = this.gasRefundPercent$.pipe(
                (0, P.U)((K) => null !== K)
              ));
          }
          set txFeeAmount(m) {
            (0, E.kKJ)(m) || this.currentTxFeeAmount$.next(m);
          }
          handlePriceClick() {
            this.showTokenAmount$.next(!this.showTokenAmount$.value);
          }
          toggleGasSettings() {
            this.settingToggleService.toggleIsWidgetOpened(
              this.contextId,
              "gas-price"
            );
          }
          emitToggleClick(m) {
            this.customToggleFlow && this.toggleClick.emit(m);
          }
        }
        return (
          (v.ɵfac = function (m) {
            return new (m || v)(
              s.ɵɵdirectiveInject($.r),
              s.ɵɵdirectiveInject(J.U),
              s.ɵɵdirectiveInject(g.j),
              s.ɵɵdirectiveInject(T.d)
            );
          }),
          (v.ɵcmp = s.ɵɵdefineComponent({
            type: v,
            selectors: [["transaction-cost"]],
            inputs: {
              txFeeAmount: "txFeeAmount",
              contextId: "contextId",
              loading: "loading",
              isEditEnable: "isEditEnable",
              customToggleFlow: "customToggleFlow",
              gasPreview: "gasPreview",
            },
            outputs: { toggleClick: "toggleClick" },
            decls: 9,
            vars: 7,
            consts: [
              [1, "transaction-cost-title-wrap"],
              ["transloco", "swapBox.tx-cost"],
              [
                "class",
                "gas-refund-tooltip",
                "data-id",
                "info-gas-refund-value",
                3,
                "refundPercent",
                4,
                "ngIf",
              ],
              [1, "transaction-cost-value-wrap"],
              [4, "ngIf"],
              [4, "tuiLet"],
              [
                "data-id",
                "info-gas-refund-value",
                1,
                "gas-refund-tooltip",
                3,
                "refundPercent",
              ],
              [
                "widgetId",
                "gas-price",
                1,
                "edit-gas-price",
                3,
                "contextId",
                "customToggleFlow",
                "toggleClick",
              ],
              [
                "direction",
                "top",
                "contentType",
                "custom",
                1,
                "gas-preset-preview",
                3,
                "tooltip",
                "customElement",
                "clickableElement",
                "click",
              ],
              ["gas_preview", ""],
              [1, "gas-preset-preview-wrap"],
              [
                "width",
                "16",
                "height",
                "16",
                "class",
                "gas-preset-preview-icon",
                4,
                "ngIf",
              ],
              [1, "gas-preset-preview-title"],
              ["width", "16", "height", "16", 1, "gas-preset-preview-icon"],
              [1, "constant-gas-value"],
              [
                "data-id",
                "info-transaction-cost-usd-price",
                1,
                "token-price",
                3,
                "showTokenAmount",
                "showUsdAmount",
                "amount",
                "token",
                "click",
              ],
            ],
            template: function (m, k) {
              1 & m &&
                (s.ɵɵelementStart(0, "div", 0)(1, "span", 1),
                s.ɵɵtext(2, "Tx cost"),
                s.ɵɵelementEnd(),
                s.ɵɵtemplate(3, Z, 2, 3, "gas-refund-value", 2),
                s.ɵɵpipe(4, "async"),
                s.ɵɵelementEnd(),
                s.ɵɵelementStart(5, "div", 3),
                s.ɵɵtemplate(6, ke, 5, 6, "ng-container", 4),
                s.ɵɵtemplate(7, Ae, 4, 10, "ng-container", 5),
                s.ɵɵpipe(8, "async"),
                s.ɵɵelementEnd()),
                2 & m &&
                  (s.ɵɵadvance(3),
                  s.ɵɵproperty(
                    "ngIf",
                    s.ɵɵpipeBind1(4, 3, k.isGasRefundVisible$)
                  ),
                  s.ɵɵadvance(3),
                  s.ɵɵproperty("ngIf", k.isEditEnable),
                  s.ɵɵadvance(1),
                  s.ɵɵproperty(
                    "tuiLet",
                    s.ɵɵpipeBind1(8, 5, k.showTokenAmount$)
                  ));
            },
            dependencies: [z.O5, b.C, V.C, y.Ls, S.z, B.KI, C.K, z.Ov, B.Ot],
            styles: [
              "[_nghost-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;height:16px}.transaction-cost-title-wrap[_ngcontent-%COMP%]{display:flex;color:var(--1inch__ui-02)}.transaction-cost-gas-refund[_ngcontent-%COMP%]{margin-left:0;margin-top:-1px}.transaction-cost-value-wrap[_ngcontent-%COMP%]{display:flex;align-items:center}.edit-gas-price[_ngcontent-%COMP%]{margin-right:8px}.token-price[_ngcontent-%COMP%]{cursor:pointer}.token-price[_ngcontent-%COMP%]     span{color:var(--1inch-text-01)!important}.gas-preset-preview[_ngcontent-%COMP%]{margin-left:0;cursor:pointer}.gas-preset-preview[_ngcontent-%COMP%]:hover   .gas-preset-preview-icon[_ngcontent-%COMP%], .gas-preset-preview[_ngcontent-%COMP%]:hover   .gas-preset-preview-title[_ngcontent-%COMP%]{color:var(--1inch-text-01)}.gas-preset-preview-icon[_ngcontent-%COMP%]{margin-right:4px;color:var(--1inch__ui-02)}.gas-preset-preview-title[_ngcontent-%COMP%]{line-height:16px;margin-right:8px;color:var(--1inch__ui-02)}.constant-gas-value[_ngcontent-%COMP%]{margin-right:8px;color:var(--1inch__ui-02)}.gas-refund-tooltip[_ngcontent-%COMP%]{margin-top:-1px}.skeleton-host[_ngcontent-%COMP%]{height:16px}.gas-preset-preview-wrap[_ngcontent-%COMP%]{display:flex}",
            ],
            changeDetection: 0,
          })),
          v
        );
      })();
    },
  },
]);
