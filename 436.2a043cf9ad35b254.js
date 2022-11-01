"use strict";
(self.webpackChunk_1inch = self.webpackChunk_1inch || []).push([
  [436],
  {
    33246: (Qe, ae, i) => {
      i.d(ae, { f: () => de });
      var _ = i(90813),
        Q = i(33646),
        re = i(94748),
        L = i(71909),
        N = i(76327),
        B = i(17114),
        Z = i(77724),
        ie = i(64736),
        e = i(83358),
        oe = i(67701),
        z = i(57817),
        q = i(55468),
        le = i(16289),
        Y = i(52611),
        h = i(51109),
        U = i(41912),
        y = i(42462),
        E = i(93130),
        pe = i(68534),
        ge = i(95707),
        ee = i(24124),
        se = i(60358),
        me = i(37847),
        ce = i(98066),
        ue = i(56747),
        he = i(69064),
        fe = i(36477),
        ve = i(1146),
        _e = i(68043),
        O = i(83140),
        b = (() => {
          return (
            ((S = b || (b = {}))[(S.tokenSwap = 0)] = "tokenSwap"),
            (S[(S.limitOrder = 1)] = "limitOrder"),
            b
          );
          var S;
        })();
      let de = (() => {
        class S {
          constructor(u, f, l, v, M, g, I, A, $, te, X, J, Ce, xe) {
            (this.contractAddressQuery = u),
              (this.transactionsCountService = f),
              (this.walletConnectionQuery = l),
              (this.web3ProvidersService = v),
              (this.tokenAllowanceService = M),
              (this.activeConnectionQuery = g),
              (this.transactionHistoryService = I),
              (this.approveService = A),
              (this.txStatusDialogService = $),
              (this.acceptTermsService = te),
              (this.swapSettingsQuery = X),
              (this.tokenBalanceQuery = J),
              (this.createPendingTxService = Ce),
              (this.orderApproveCheckerService = xe);
          }
          approveInfinitySwapTransaction$(u) {
            return this.acceptTermsService
              .checkTermsAccepting()
              .pipe((0, N.w)(() => this.approveTxForMaxAmount(b.tokenSwap, u)));
          }
          approveLimitOrderTransaction$(u) {
            return this.acceptTermsService.checkTermsAccepting().pipe(
              (0, N.w)(() =>
                this.orderApproveCheckerService.checkUnapprovedBadPriceOrders(u)
              ),
              (0, N.w)(() => this.approveTxForMaxAmount(b.limitOrder, u))
            );
          }
          contractApproveTransaction(
            {
              txType: u,
              txSubType: f,
              contractAddress: l,
              spenderAddress: v,
              amount: M,
              meta: g,
            },
            I = !0
          ) {
            let A = null;
            return (
              I &&
                (A = this.txStatusDialogService.open({ status: z._.pending })),
              (0, Q.D)({
                hash: this.approveService.approve(l, v, M),
                nonce:
                  this.transactionsCountService.getCurrentWalletTransactionsCount(),
              }).pipe(
                (0, B.K)(
                  ($) => (
                    O.error($),
                    I ? (null == A || A.close(), re.C) : (0, L._)(() => $)
                  )
                ),
                (0, Z.b)(({ hash: $, nonce: te }) => {
                  const X = this.createPendingTxService.getPendingTxFactory({
                    type: u,
                    subType: f,
                    amount: M.toString(),
                    meta: g,
                  })($, te);
                  this.transactionHistoryService.addHistoryItem(X),
                    I &&
                      this.txStatusDialogService.changeTo({
                        status: z._.success,
                        link: this.txStatusDialogService.txStatusDialogLink($),
                      });
                }),
                (0, ie.U)(({ hash: $ }) => $),
                (0, e.q)(1)
              )
            );
          }
          approveTxForMaxAmount(u, f) {
            return this.tokenApproveTransaction(u, f, Y.zL).pipe(
              (0, B.K)((l) =>
                l instanceof le.fl
                  ? this.tokenBalanceQuery
                      .getBalanceOnce$(f)
                      .pipe(
                        (0, N.w)((v) => this.tokenApproveTransaction(u, f, v))
                      )
                  : (0, L._)(() => l)
              )
            );
          }
          tokenApproveTransaction(u, f, l) {
            const v = this.contractAddressQuery.getContractAddress(
                (function T(S, P = !1) {
                  switch (S) {
                    case b.limitOrder:
                      return q.a4.limitOrder;
                    case b.tokenSwap:
                      return P ? q.a4.tokenSwapV4 : q.a4.tokenSwapV3;
                  }
                  throw new Error("unknown approve contract type");
                })(u, this.swapSettingsQuery.enableSwapRouterV4)
              ),
              M = this.txStatusDialogService.open({ status: z._.pending });
            return (0, Q.D)({
              hash: this.approveService.approve(f.address, v, l),
              nonce:
                this.transactionsCountService.getCurrentWalletTransactionsCount(),
            }).pipe(
              (0, B.K)((g) => (O.error(g), M.close(), (0, L._)(() => g))),
              (0, Z.b)(({ hash: g, nonce: I }) => {
                this.walletConnectionQuery.isCurrentWalletGnosis ||
                  this.addTxToHistory({
                    approveType: u,
                    amount: l,
                    hash: g,
                    nonce: I,
                    sourceToken: f,
                    spenderAddress: v,
                  }),
                  this.txStatusDialogService.changeTo({
                    status: z._.approveSuccess,
                    metaInfo: { token: f.symbol },
                    link: this.txStatusDialogService.txStatusDialogLink(g),
                  }),
                  this.watchForPriorityAllowance(f, v, l, g);
              }),
              (0, ie.U)(({ hash: g }) => g),
              (0, e.q)(1)
            );
          }
          addTxToHistory({
            approveType: u,
            amount: f,
            hash: l,
            nonce: v,
            sourceToken: M,
            spenderAddress: g,
          }) {
            const I = (function j(S) {
                switch (S) {
                  case b.limitOrder:
                    return oe.E.approveLimitOrder;
                  case b.tokenSwap:
                    return oe.E.approve;
                }
                throw new Error("unknown approve history type");
              })(u),
              A = this.createPendingTxService.getPendingTxFactory({
                type: "authorize",
                subType: I,
                amount: f.toString(),
                meta: {
                  tradeApproveToken: M,
                  tradeApproveContract: g,
                  asset: M,
                },
              })(l, v);
            this.transactionHistoryService.addHistoryItem(A);
          }
          watchForPriorityAllowance(u, f, l, v) {
            const M = this.web3ProvidersService.defaultEtherProviderOnce().pipe(
              (0, N.w)((g) => g.waitForTransaction(v)),
              (0, Z.b)((g) => {
                1 === (null == g ? void 0 : g.status) &&
                  this.tokenAllowanceService.setPriorityAllowance(
                    u.address,
                    f,
                    l.toString()
                  );
              }),
              (0, e.q)(1)
            );
            (0, _.O)(M, "watchForPriorityAllowance$");
          }
        }
        return (
          (S.ɵfac = function (u) {
            return new (u || S)(
              h.ɵɵinject(U.O),
              h.ɵɵinject(y.K),
              h.ɵɵinject(E.r),
              h.ɵɵinject(pe.v),
              h.ɵɵinject(ge.a),
              h.ɵɵinject(ee.r),
              h.ɵɵinject(se.d),
              h.ɵɵinject(me.Z),
              h.ɵɵinject(ce.i),
              h.ɵɵinject(ue.N),
              h.ɵɵinject(he.G),
              h.ɵɵinject(fe.n4),
              h.ɵɵinject(ve.B),
              h.ɵɵinject(_e.I)
            );
          }),
          (S.ɵprov = h.ɵɵdefineInjectable({
            token: S,
            factory: S.ɵfac,
            providedIn: "root",
          })),
          S
        );
      })();
    },
    78709: (Qe, ae, i) => {
      i.r(ae), i.d(ae, { FarmingModule: () => qt });
      var _ = i(38143),
        Q = i(31777),
        re = i(92872),
        L = i(77065),
        N = i(54510),
        B = i(12725),
        Z = i(16944),
        ie = i(46773),
        e = i(51109);
      let oe = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({ imports: [_.ez] })),
          n
        );
      })();
      var z = i(99759),
        q = i(64925),
        le = i(76027),
        Y = i(64736),
        h = i(76327),
        U = i(93475),
        y = i(8713),
        E = i(67612),
        pe = i(70167),
        ge = i(93587),
        ee = i(76006),
        se = i(24124),
        me = i(66110);
      let ce = (() => {
        class n {
          transform(t) {
            return "active" === t
              ? "dao.farming-status-active"
              : "soon" === t
              ? "dao.farming-status-soon"
              : "ended" === t
              ? "dao.farming-status-ended"
              : "";
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵpipe = e.ɵɵdefinePipe({
            name: "farmingFilter",
            type: n,
            pure: !0,
          })),
          n
        );
      })();
      function ue(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "span", 4),
            e.ɵɵlistener("click", function () {
              const s = e.ɵɵrestoreView(t).$implicit,
                d = e.ɵɵnextContext();
              return e.ɵɵresetView(d.onSelectFilter(s));
            }),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "transloco"),
            e.ɵɵpipe(3, "farmingFilter"),
            e.ɵɵelementEnd();
        }
        if (2 & n) {
          const t = a.$implicit,
            r = e.ɵɵnextContext();
          e.ɵɵattributeInterpolate1("data-id", "farming-page.", t, "-tab"),
            e.ɵɵproperty(
              "ngClass",
              r.selectedFilter === t && "tab-label-active text-current"
            ),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind1(2, 3, e.ɵɵpipeBind1(3, 5, t)),
              " "
            );
        }
      }
      function he(n, a) {
        1 & n && e.ɵɵelement(0, "app-lp-version-switch", 5);
      }
      let fe = (() => {
        class n {
          constructor(t) {
            (this.activeConnectionQuery = t),
              (this.onSelect = new e.EventEmitter()),
              (this.isEthereumTypeNetwork$ =
                this.activeConnectionQuery.isEthereumMainnet$);
          }
          onSelectFilter(t) {
            this.onSelect.emit(t);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(e.ɵɵdirectiveInject(se.r));
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-farming-filters"]],
            inputs: { selectedFilter: "selectedFilter", filters: "filters" },
            outputs: { onSelect: "onSelect" },
            decls: 5,
            vars: 4,
            consts: [
              [
                1,
                "d-flex",
                "justify-content-between",
                "mb-32",
                "align-items-center",
              ],
              [1, "tab-wrap"],
              [
                "class",
                "mr-40 text-gray tab-label tab-label-enabled",
                3,
                "ngClass",
                "click",
                4,
                "ngFor",
                "ngForOf",
              ],
              ["data-id", "farming-page.version-switch", 4, "ngIf"],
              [
                1,
                "mr-40",
                "text-gray",
                "tab-label",
                "tab-label-enabled",
                3,
                "ngClass",
                "click",
              ],
              ["data-id", "farming-page.version-switch"],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "div", 1),
                e.ɵɵtemplate(2, ue, 4, 7, "span", 2),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(3, he, 1, 0, "app-lp-version-switch", 3),
                e.ɵɵpipe(4, "async"),
                e.ɵɵelementEnd()),
                2 & t &&
                  (e.ɵɵadvance(2),
                  e.ɵɵproperty("ngForOf", r.filters),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty(
                    "ngIf",
                    e.ɵɵpipeBind1(4, 2, r.isEthereumTypeNetwork$)
                  ));
            },
            dependencies: [_.mk, _.sg, _.O5, me.q, _.Ov, B.Ot, ce],
            styles: [
              "[_nghost-%COMP%]{display:block}@media (max-width: 480px){[_nghost-%COMP%]{display:grid}}.tab-wrap[_ngcontent-%COMP%]{position:relative}.sub-info[_ngcontent-%COMP%]{position:absolute;display:block;width:100vh;bottom:-26px;font-size:12px}@media (max-width: 480px){.sub-info[_ngcontent-%COMP%]{bottom:-38px;width:320px;height:24px}}.sub-info-link[_ngcontent-%COMP%]{color:var(--1inch-common-text-03)}.sub-info-link[_ngcontent-%COMP%]:hover{cursor:pointer}.tab-label[_ngcontent-%COMP%]{text-transform:capitalize}",
            ],
          })),
          n
        );
      })();
      var ve = i(48163),
        _e = i(33643),
        O = i(71426),
        b = i(47384),
        j = i(53886),
        T = i(3012),
        de = i(79296),
        S = i(29647),
        P = i(77724),
        u = i(68751),
        f = i(5327),
        l = i(76219),
        v = i(82868),
        M = i(90813),
        g = i(95605),
        I = i(95021),
        A = i(83358),
        $ = i(30137),
        te = i(52611),
        X = i(20654),
        J = i(20049),
        Ce = i(52275),
        xe = i(35878),
        Ue = i(69682),
        je = i(67701),
        We = i(58913);
      let ke = (() => {
          class n extends Ce.AE {
            constructor(t, r, o) {
              super(t),
                (this.store = t),
                (this.farmingQuery = r),
                (this.transactionHistoryQuery = o),
                (this.hasPendingApproveFarming$ = this.transactionHistoryQuery
                  .pendingTransactionsByType(je.E.approveFarming)
                  .pipe(
                    (0, Y.U)((s) => s.length),
                    (0, xe.x)(),
                    (0, Ue.d)({ refCount: !0, bufferSize: 1 })
                  )),
                (this.yourBalanceOrStaked$ = this.select(
                  "yourBalanceOrStaked"
                ).pipe((0, u.h)((s) => null !== s))),
                (this.yourStakedOrBalance$ = this.select(
                  "yourStakedOrBalance"
                ).pipe((0, u.h)((s) => null !== s))),
                (this.selectedValueUI$ = this.select("selectedValue").pipe(
                  (0, u.h)((s) => null !== s),
                  (0, Y.U)((s) => (0, b.formatUnits)(s, 18))
                )),
                (this.selectedValueFiatUI$ = (0, j.a)([
                  this.farmingQuery.selectAll(),
                  this.select(["poolAddress", "selectedValue"]),
                ]).pipe(
                  (0, Y.U)(([s, d]) => {
                    var p;
                    const { poolAddress: C, selectedValue: m } = d,
                      x =
                        null === (p = s.find((k) => k.poolAddress === C)) ||
                        void 0 === p
                          ? void 0
                          : p.lpTokenPrices;
                    if (!x) return "0";
                    const w = +x;
                    return (+(0, b.formatUnits)(m, 18) * w).toFixed(2);
                  })
                ));
            }
            get buttonState() {
              return this.getValue().buttonState;
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(
                e.ɵɵinject(y.i7),
                e.ɵɵinject(E.c5),
                e.ɵɵinject(We.x)
              );
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })(),
        Ve = (() => {
          class n {
            constructor(t) {
              this.actionDepositStore = t;
            }
          }
          return (
            (n.ɵfac = function (t) {
              return new (t || n)(e.ɵɵinject(y.i7));
            }),
            (n.ɵprov = e.ɵɵdefineInjectable({ token: n, factory: n.ɵfac })),
            n
          );
        })();
      var De = i(93130),
        Ee = i(48688),
        Oe = i(36565),
        Me = i(20803),
        Ie = i(83389),
        we = i(80135);
      const Re = ["depositInput"];
      function Ke(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"), e.ɵɵtext(1), e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate2(
              "1LP-",
              null == t ? null : t.token1,
              "-",
              null == t ? null : t.token2,
              ""
            );
        }
      }
      function Ne(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span", 28),
            e.ɵɵtemplate(1, Ke, 2, 2, "span", 29),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "number"),
            e.ɵɵpipe(4, "async"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.showBalanceTokenName),
            e.ɵɵadvance(1),
            e.ɵɵtextInterpolate2(
              " ",
              t.topInputText,
              ": ",
              e.ɵɵpipeBind1(
                3,
                3,
                e.ɵɵpipeBind1(4, 5, t.actionDepositQuery.yourBalanceOrStaked$)
              ),
              " "
            );
        }
      }
      function Ye(n, a) {
        1 & n && e.ɵɵelement(0, "img", 35);
      }
      function He(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 30),
            e.ɵɵelement(1, "img", 31)(2, "img", 32),
            e.ɵɵelementStart(3, "span", 33),
            e.ɵɵtext(4),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(5, Ye, 1, 0, "img", 34),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = a.ngIf,
            r = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵpropertyInterpolate1(
              "src",
              "assets/images/farming-tokens/without-border/",
              null == t ? null : t.token1.toLocaleLowerCase(),
              ".png",
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(1),
            e.ɵɵpropertyInterpolate1(
              "src",
              "assets/images/farming-tokens/without-border/",
              null == t ? null : t.token2.toLocaleLowerCase(),
              ".png",
              e.ɵɵsanitizeUrl
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate2(
              "",
              null == t ? null : t.token1,
              "-",
              null == t ? null : t.token2,
              ""
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", r.showLock);
        }
      }
      function ze(n, a) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "span", 38),
          e.ɵɵtext(2, "Approving..."),
          e.ɵɵelementEnd(),
          e.ɵɵelement(3, "img", 39),
          e.ɵɵelementContainerEnd());
      }
      const Te = function (n) {
        return { sourceToken: n };
      };
      function Xe(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 40),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelement(4, "tooltip", 41),
            e.ɵɵpipe(5, "transloco"),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                3,
                2,
                "limitOrderBox.allow-1inch-to-use",
                e.ɵɵpureFunction1(
                  8,
                  Te,
                  "1LP-" +
                    (null == t ? null : t.token1) +
                    "-" +
                    (null == t ? null : t.token2)
                )
              ),
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind2(
                5,
                5,
                "swapBox.to-continue",
                e.ɵɵpureFunction1(
                  10,
                  Te,
                  "1LP-" +
                    (null == t ? null : t.token1) +
                    "-" +
                    (null == t ? null : t.token2)
                )
              )
            );
        }
      }
      function Je(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementStart(0, "div")(1, "app-button", 37),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const o = e.ɵɵnextContext(2);
              return e.ɵɵresetView(o.infinityUnlock());
            }),
            e.ɵɵpipe(2, "async"),
            e.ɵɵtemplate(3, ze, 4, 0, "ng-container", 29),
            e.ɵɵpipe(4, "async"),
            e.ɵɵtemplate(5, Xe, 6, 12, "ng-container", 29),
            e.ɵɵpipe(6, "async"),
            e.ɵɵelementEnd()();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(2);
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
      function Ge(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 36),
            e.ɵɵtemplate(1, Je, 7, 9, "div", 29),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵproperty("ngIf", t.dataFromPool);
        }
      }
      function Ze(n, a) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "app-button", 42),
          e.ɵɵelement(2, "img", 43),
          e.ɵɵelementStart(3, "span", 44),
          e.ɵɵtext(4, "Connect wallet"),
          e.ɵɵelementEnd()(),
          e.ɵɵelementContainerEnd());
      }
      function qe(n, a) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵelementStart(1, "div", 45)(2, "app-button", 46),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(3, "svg", 47),
          e.ɵɵelement(4, "use", 48),
          e.ɵɵelementEnd(),
          e.ɵɵnamespaceHTML(),
          e.ɵɵelementStart(5, "span", 49),
          e.ɵɵtext(6, "Insufficient balance"),
          e.ɵɵelementEnd()()(),
          e.ɵɵelementContainerEnd()),
          2 & n && (e.ɵɵadvance(2), e.ɵɵproperty("disabled", !0));
      }
      function et(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-button", 50),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const o = e.ɵɵnextContext();
              return e.ɵɵresetView(o.action());
            }),
            e.ɵɵelementStart(2, "span", 51),
            e.ɵɵtext(3),
            e.ɵɵelementEnd()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("color", t.buttonColor)(
              "disabled",
              t.isActionButtonDisabled
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate(t.buttonText);
        }
      }
      let tt = (() => {
        class n {
          constructor(t, r, o, s, d, p, C, m, x) {
            (this.dataFromPool = t),
              (this.actionDepositQuery = r),
              (this.walletConnectionQuery = o),
              (this.farmingService = s),
              (this.farmingTransactionService = d),
              (this.farmingQuery = p),
              (this.gasPriceQuery = C),
              (this.pricesQuery = m),
              (this.actionDepositStore = x),
              (this.showApproveProgress$ =
                this.actionDepositQuery.hasPendingApproveFarming$),
              (this.showLock = !1),
              (this.earnedPerDay = ""),
              (this.earnedPerDayFiat = ""),
              (this.earnedPerMonth = ""),
              (this.earnedPerMonthFiat = ""),
              (this.earnedPerYear = ""),
              (this.earnedPerYearFiat = ""),
              (this.buttonText = ""),
              (this.bottomText = ""),
              (this.topInputText = ""),
              (this.headerText = ""),
              (this.buttonColor = "accentBlue"),
              (this.showBalanceTokenName = !1),
              (this.subscription = new de.w0()),
              (this.amountControl = new Q.UntypedFormControl("", [
                Q.Validators.required,
              ])),
              t.action === y.u9.deposit
                ? this.setTextForDepositDialog()
                : this.setTextForWithdrawDialog(),
              this.actionDepositStore.update({
                action: t.action,
                poolAddress: t.poolAddress,
                farmingAddress: t.farmingAddress,
              });
            const w = this.actionDepositQuery
                .select([
                  "earnedPerDay",
                  "earnedPerDayFiat",
                  "earnedPerMonth",
                  "earnedPerMonthFiat",
                  "earnedPerYear",
                  "earnedPerYearFiat",
                ])
                .pipe(
                  (0, P.b)(() => {
                    const c = this.actionDepositQuery.getValue();
                    (this.earnedPerDay = (+c.earnedPerDay).toFixed(6)),
                      (this.earnedPerDayFiat = c.earnedPerDayFiat),
                      (this.earnedPerMonth = (+c.earnedPerMonth).toFixed(6)),
                      (this.earnedPerMonthFiat = c.earnedPerMonthFiat),
                      (this.earnedPerYear = (+c.earnedPerYear).toFixed(6)),
                      (this.earnedPerYearFiat = c.earnedPerYearFiat);
                  })
                ),
              F = this.getWalletLogicPipeline(),
              k = this.getButtonAndStakedPipeline(),
              V = this.getButtonStatePipeline(),
              be = this.getEarnedPeriodPipeline();
            this.subscription.add(
              F.subscribe({ error: (c) => (0, v.eK)(c, "av0078") })
            ),
              this.subscription.add(
                V.subscribe({ error: (c) => (0, v.eK)(c, "av0079") })
              ),
              this.subscription.add(
                k.subscribe({ error: (c) => (0, v.eK)(c, "av0080") })
              ),
              this.subscription.add(
                be.subscribe({ error: (c) => (0, v.eK)(c, "av0081") })
              ),
              this.subscription.add(
                w.subscribe({ error: (c) => (0, v.eK)(c, "av0082") })
              );
          }
          get depositInput() {
            return this.inputElementRef.nativeElement;
          }
          setTextForDepositDialog() {
            (this.buttonText = "Deposit"),
              (this.buttonColor = "red"),
              (this.bottomText = "You Staked"),
              (this.topInputText = "Balance"),
              (this.headerText = "Deposit"),
              (this.buttonColor = "accentBlue"),
              (this.showBalanceTokenName = !0);
          }
          setTextForWithdrawDialog() {
            (this.buttonText = "Withdraw"),
              (this.buttonColor = "red"),
              (this.bottomText = "Your Balance"),
              (this.topInputText = "Staked amount"),
              (this.headerText = "Withdraw"),
              (this.showBalanceTokenName = !1);
          }
          ngOnDestroy() {
            this.actionDepositStore.destroy(), this.subscription.unsubscribe();
          }
          handleInput(t) {
            var r, o, s;
            let d =
              null ===
                (o =
                  null === (r = this.depositInput) || void 0 === r
                    ? void 0
                    : r.value) || void 0 === o
                ? void 0
                : o.toString();
            try {
              if (d) {
                (d =
                  null === (s = null == d ? void 0 : d.toString()) ||
                  void 0 === s
                    ? void 0
                    : s.replace(",", ".")),
                  d.length >= 2 &&
                    "0" === d[0] &&
                    "." !== d[1] &&
                    (d = d.slice(1, d.length));
                const p = (0, $.Pz)(d, 18);
                p &&
                  (this.amountControl.setValue(d),
                  this.actionDepositStore.update({
                    selectedValue: p.toString(),
                  }));
              }
            } catch (p) {
              this.amountControl.setValue("0"),
                this.actionDepositStore.update({ selectedValue: "0" });
            }
          }
          infinityUnlock() {
            this.farmingTransactionService.approveToFarmingContract(
              te.zL,
              this.dataFromPool.poolAddress,
              this.dataFromPool.farmingAddress
            );
          }
          action() {
            const { action: t } = this.actionDepositQuery.getValue();
            t !== y.u9.deposit ? this.withdraw() : this.deposit();
          }
          deposit() {
            const t = this.actionDepositQuery.selectedValueFiatUI$.pipe(
              (0, A.q)(1),
              (0, P.b)((r) => {
                const {
                  farmingAddress: o,
                  selectedValue: s,
                  poolAddress: d,
                } = this.actionDepositQuery.getValue();
                this.farmingTransactionService.stake(O.O$.from(s), o, {
                  selectedValueFiat: r,
                  selectedValue: s,
                  poolAddress: d,
                });
              })
            );
            (0, M.O)(t, "deposit$");
          }
          withdraw() {
            const t = (0, j.a)([
              this.actionDepositQuery.selectedValueFiatUI$,
              this.actionDepositQuery.yourBalanceOrStaked$,
            ]).pipe(
              (0, A.q)(1),
              (0, P.b)(([r, o]) => {
                const {
                  farmingAddress: s,
                  selectedValue: d,
                  poolAddress: p,
                } = this.actionDepositQuery.getValue();
                this.farmingTransactionService.withdraw(O.O$.from(d), s, {
                  selectedValueFiat: r,
                  totalStakedInFarming: o,
                  selectedValue: d,
                  poolAddress: p,
                });
              })
            );
            (0, M.O)(t, "withdraw$");
          }
          setMaxValue() {
            const t = this.actionDepositQuery.getValue();
            !t ||
              this.farmingQuery
                .selectEntity(t.farmingAddress)
                .pipe(
                  (0, I.BX)(),
                  (0, P.b)((r) => {
                    const { poolStaked: o, poolBalance: s } = r;
                    t.action === y.u9.deposit
                      ? (this.actionDepositStore.update({ selectedValue: s }),
                        this.amountControl.setValue((0, b.formatUnits)(s, 18)))
                      : (this.actionDepositStore.update({ selectedValue: o }),
                        this.amountControl.setValue((0, b.formatUnits)(o, 18)));
                  }),
                  (0, A.q)(1)
                )
                .subscribe({ error: (r) => (0, v.eK)(r, "av0087") });
          }
          handlePaste(t) {
            return (0, X.nX)(t, 18);
          }
          onlyNumberDotOrCommaKey(t) {
            var r, o;
            let s =
              null ===
                (o =
                  null === (r = this.depositInput) || void 0 === r
                    ? void 0
                    : r.value) || void 0 === o
                ? void 0
                : o.toString();
            s = s.toString().replace(",", ".");
            const d = s.includes(".");
            return (
              !(
                (("." === t.key || "," === t.key) && d) ||
                (1 === s.length && "." === s[0])
              ) && (0, X.dy)(t, this.depositInput, 18)
            );
          }
          getWalletLogicPipeline() {
            return this.walletConnectionQuery.connectedWalletAddress$.pipe(
              (0, P.b)((t) => {
                t ||
                  this.actionDepositStore.update({
                    buttonState: y.rV.walletDisconnected,
                  });
              }),
              (0, u.h)((t) => !!t)
            );
          }
          getButtonAndStakedPipeline() {
            const t = this.actionDepositQuery.getValue(),
              { action: r } = (0, J.Bv)(t);
            return this.farmingQuery.selectEntity(t.farmingAddress).pipe(
              (0, I.BX)(),
              (0, P.b)((o) => {
                const { poolBalance: s, poolStaked: d } = o;
                if (!d || !s) return;
                const p = O.O$.from(d),
                  C = O.O$.from(s);
                if (p.lt(U.Y) || C.lt(U.Y)) return;
                const m = (0, b.formatUnits)(p, 18),
                  x = (0, b.formatUnits)(C, 18);
                this.actionDepositStore.update({
                  yourStakedOrBalance: r === y.u9.deposit ? m : x,
                  yourBalanceOrStaked: r === y.u9.deposit ? x : m,
                });
              })
            );
          }
          getButtonStatePipeline() {
            const t = this.actionDepositQuery.getValue(),
              { farmAddress: r, action: o } = (0, J.Bv)(t);
            return (0, j.a)([
              this.farmingQuery.selectEntity(r),
              this.actionDepositQuery.select("selectedValue"),
            ]).pipe(
              (0, u.h)((s) => !!s[0]),
              (0, P.b)(([s, d]) => {
                const { poolBalance: p, poolStaked: C, allowance: m } = s,
                  x = O.O$.from(d);
                if (!p || !C || !m) return;
                const w = O.O$.from(C),
                  F = O.O$.from(p),
                  k = O.O$.from(m);
                if (
                  ((this.isActionButtonDisabled = x.eq(U.Y)),
                  x.gt(F) && o === y.u9.deposit)
                )
                  this.actionDepositStore.update({
                    buttonState: y.rV.notEnoughBalance,
                  });
                else {
                  if (!x.gt(w) || o !== y.u9.withdraw)
                    return x.gt(k) && o === y.u9.deposit
                      ? ((this.showLock = !0),
                        void (this.isActionButtonDisabled = !0))
                      : void this.actionDepositStore.update({
                          buttonState: y.rV.ok,
                        });
                  this.actionDepositStore.update({
                    buttonState: y.rV.notEnoughBalance,
                  });
                }
              })
            );
          }
          getEarnedPeriodPipeline() {
            const t = this.actionDepositQuery.getValue(),
              { action: r } = (0, J.Bv)(t);
            return (0, j.a)([
              this.farmingQuery.selectEntity(t.farmingAddress),
              this.pricesQuery.selectTokenUsdPrice(g.sx),
              this.actionDepositQuery.select("selectedValue"),
            ]).pipe(
              (0, u.h)((o) => !!o[0]),
              (0, P.b)(
                ([{ poolStaked: o, rewardRate: s, totalStaked: d }, p, C]) => {
                  if (!s || !d || !o) return;
                  const m = O.O$.from(C),
                    x = O.O$.from(s),
                    w = O.O$.from(d),
                    F = O.O$.from(o);
                  if (x.gte(U.Y) && w.gt(0) && r) {
                    const k = (0, J.Nv)(F, m, x, w, +p, r);
                    this.actionDepositStore.update(k);
                  }
                }
              )
            );
          }
          submitValue(t) {
            this.handleInput(t);
          }
        }
        return (
          (n.ɵfac = function (t) {
            return new (t || n)(
              e.ɵɵdirectiveInject(L.WI),
              e.ɵɵdirectiveInject(ke),
              e.ɵɵdirectiveInject(De.r),
              e.ɵɵdirectiveInject(Ee.L),
              e.ɵɵdirectiveInject(ee.M),
              e.ɵɵdirectiveInject(E.c5),
              e.ɵɵdirectiveInject(Oe.j),
              e.ɵɵdirectiveInject(Me.u),
              e.ɵɵdirectiveInject(y.i7)
            );
          }),
          (n.ɵcmp = e.ɵɵdefineComponent({
            type: n,
            selectors: [["app-deposit-dialog"]],
            viewQuery: function (t, r) {
              if ((1 & t && e.ɵɵviewQuery(Re, 5), 2 & t)) {
                let o;
                e.ɵɵqueryRefresh((o = e.ɵɵloadQuery())) &&
                  (r.inputElementRef = o.first);
              }
            },
            features: [e.ɵɵProvidersFeature([y.i7, Ve, ke])],
            decls: 73,
            vars: 47,
            consts: [
              ["mat-dialog-content", "", 1, "action-dialog"],
              [1, "mb-16"],
              ["mat-dialog-actions", "", 1, "fix-mat-dialog-close"],
              [
                "mat-icon-button",
                "",
                "mat-dialog-close",
                "",
                1,
                "icon-button-gray",
              ],
              ["width", "24", "height", "24"],
              [0, "xlink", "href", "assets/images/icons/cross.svg#cross"],
              [1, "field-header", 3, "click"],
              ["transloco", "field.amount", 1, "text-gray"],
              ["class", "text-gray balance-value", 4, "ngIf"],
              [1, "field", "mb-32"],
              [1, "field-row"],
              ["transloco", "actionDialog.pool-token", 1, "text-gray"],
              ["class", "stake-card-tokens", 4, "ngIf"],
              [
                "placeholder",
                "0",
                "inputmode",
                "decimal",
                "autocomplete",
                "off",
                1,
                "field-input",
                "deposit-input",
                3,
                "formControl",
                "input",
                "keypress",
                "paste",
                "keyup",
              ],
              ["depositInput", ""],
              [1, "deposit-dialog-you-staked", "gray-border"],
              [1, "deposit-dialog-grid", "gray-border"],
              [
                "transloco",
                "actionDialog.daily-earnings",
                1,
                "mr-8",
                "fs-14",
                "stats-text",
              ],
              [1, "deposit-dialog-tooltip", 3, "tooltip"],
              [1, "fs-14"],
              [1, "fs-14", "text-right"],
              [
                "transloco",
                "actionDialog.monthly-earnings",
                1,
                "mr-8",
                "fs-14",
                "stats-text",
              ],
              [1, "deposit-dialog-grid", "deposit-dialog-grid-last", "mb-32"],
              [
                "transloco",
                "actionDialog.yearly-earnings",
                1,
                "mr-8",
                "fs-14",
                "stats-text",
              ],
              [1, "button-wrap"],
              ["class", "mb-12", 4, "ngIf"],
              [3, "ngSwitch"],
              [4, "ngSwitchCase"],
              [1, "text-gray", "balance-value"],
              [4, "ngIf"],
              [1, "stake-card-tokens"],
              [1, "stake-card-token-image", "left-token", 3, "src"],
              [1, "stake-card-token-image", 3, "src"],
              [1, "ml-8"],
              [
                "class",
                "lock-icon ml-8",
                "src",
                "assets/images/icons/lock.svg",
                "alt",
                "",
                4,
                "ngIf",
              ],
              [
                "src",
                "assets/images/icons/lock.svg",
                "alt",
                "",
                1,
                "lock-icon",
                "ml-8",
              ],
              [1, "mb-12"],
              [
                "color",
                "accentBlue",
                "fullWidth",
                "true",
                1,
                "token-swap-button",
                3,
                "disabled",
                "clicked",
              ],
              ["transloco", "button.approving", 1, "token-swap-button__title"],
              [
                "src",
                "assets/images/loader_blue.svg",
                "alt",
                "",
                1,
                "approving-img",
              ],
              [1, "allow-button-text"],
              [
                "data-id",
                "synth-token-locked-icon",
                "contentType",
                "question",
                "iconColor",
                "white",
                1,
                "deposit-dialog-tooltip",
                3,
                "tooltip",
              ],
              ["walletConnect", "", "color", "accentBlue", "fullWidth", "true"],
              ["src", "/src/assets/images/icons/connect.svg", 1, "mr-2"],
              [
                "transloco",
                "button.connect-wallet2",
                1,
                "deposit-text",
                "fs-16",
              ],
              [1, "d-flex", "justify-content-center"],
              ["color", "accentBlue", "fullWidth", "true", 3, "disabled"],
              ["width", "24", "height", "24", 1, "mr-2"],
              [0, "xlink", "href", "assets/images/icons/magic.svg#magic"],
              [
                "transloco",
                "button.insufficient-balance",
                1,
                "deposit-text",
                "fs-16",
              ],
              ["fullWidth", "true", 3, "color", "disabled", "clicked"],
              [1, "deposit-text", "fs-16"],
            ],
            template: function (t, r) {
              1 & t &&
                (e.ɵɵelementStart(0, "div", 0)(1, "h1", 1),
                e.ɵɵtext(2),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(3, "div", 2)(4, "button", 3),
                e.ɵɵnamespaceSVG(),
                e.ɵɵelementStart(5, "svg", 4),
                e.ɵɵelement(6, "use", 5),
                e.ɵɵelementEnd()()(),
                e.ɵɵnamespaceHTML(),
                e.ɵɵelementStart(7, "div", 6),
                e.ɵɵlistener("click", function () {
                  return r.setMaxValue();
                }),
                e.ɵɵelementStart(8, "h4", 7),
                e.ɵɵtext(9, "Amount"),
                e.ɵɵelementEnd(),
                e.ɵɵtemplate(10, Ne, 5, 7, "span", 8),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(11, "div", 9)(12, "div")(13, "div", 10)(
                  14,
                  "span",
                  11
                ),
                e.ɵɵtext(15, "Pool Token"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(16, "p"),
                e.ɵɵtext(17),
                e.ɵɵpipe(18, "currency"),
                e.ɵɵpipe(19, "async"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(20, "div", 10),
                e.ɵɵtemplate(21, He, 6, 5, "div", 12),
                e.ɵɵelementStart(22, "input", 13, 14),
                e.ɵɵlistener("input", function (s) {
                  return r.handleInput(s);
                })("keypress", function (s) {
                  return r.onlyNumberDotOrCommaKey(s);
                })("paste", function (s) {
                  return r.handlePaste(s);
                })("keyup", function (s) {
                  return r.submitValue(s);
                }),
                e.ɵɵelementEnd()()()(),
                e.ɵɵelementStart(24, "div", 15)(25, "span"),
                e.ɵɵtext(26),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(27, "span"),
                e.ɵɵtext(28),
                e.ɵɵpipe(29, "number"),
                e.ɵɵpipe(30, "async"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(31, "div", 16)(32, "span")(33, "span", 17),
                e.ɵɵtext(34, "Daily Earnings"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(35, "tooltip", 18),
                e.ɵɵpipe(36, "transloco"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(37, "span", 19),
                e.ɵɵtext(38),
                e.ɵɵpipe(39, "number"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(40, "span", 20),
                e.ɵɵtext(41),
                e.ɵɵpipe(42, "currency"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(43, "div", 16)(44, "span")(45, "span", 21),
                e.ɵɵtext(46, "Monthly Earnings"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(47, "tooltip", 18),
                e.ɵɵpipe(48, "transloco"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(49, "span", 19),
                e.ɵɵtext(50),
                e.ɵɵpipe(51, "number"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(52, "span", 20),
                e.ɵɵtext(53),
                e.ɵɵpipe(54, "currency"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(55, "div", 22)(56, "span")(57, "span", 23),
                e.ɵɵtext(58, "Yearly Earnings"),
                e.ɵɵelementEnd(),
                e.ɵɵelement(59, "tooltip", 18),
                e.ɵɵpipe(60, "transloco"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(61, "span", 19),
                e.ɵɵtext(62),
                e.ɵɵpipe(63, "number"),
                e.ɵɵelementEnd(),
                e.ɵɵelementStart(64, "span", 20),
                e.ɵɵtext(65),
                e.ɵɵpipe(66, "currency"),
                e.ɵɵelementEnd()(),
                e.ɵɵelementStart(67, "div", 24),
                e.ɵɵtemplate(68, Ge, 2, 1, "div", 25),
                e.ɵɵelementContainerStart(69, 26),
                e.ɵɵtemplate(70, Ze, 5, 0, "ng-container", 27),
                e.ɵɵtemplate(71, qe, 7, 1, "ng-container", 27),
                e.ɵɵtemplate(72, et, 4, 3, "ng-container", 27),
                e.ɵɵelementContainerEnd(),
                e.ɵɵelementEnd()()),
                2 & t &&
                  (e.ɵɵadvance(2),
                  e.ɵɵtextInterpolate(r.headerText),
                  e.ɵɵadvance(8),
                  e.ɵɵproperty("ngIf", r.dataFromPool),
                  e.ɵɵadvance(7),
                  e.ɵɵtextInterpolate(
                    "\u2248 " +
                      e.ɵɵpipeBind1(
                        18,
                        21,
                        e.ɵɵpipeBind1(
                          19,
                          23,
                          r.actionDepositQuery.selectedValueFiatUI$
                        )
                      )
                  ),
                  e.ɵɵadvance(4),
                  e.ɵɵproperty("ngIf", r.dataFromPool),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("formControl", r.amountControl),
                  e.ɵɵadvance(4),
                  e.ɵɵtextInterpolate(r.bottomText),
                  e.ɵɵadvance(2),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(
                      29,
                      25,
                      e.ɵɵpipeBind1(
                        30,
                        27,
                        r.actionDepositQuery.yourStakedOrBalance$
                      )
                    )
                  ),
                  e.ɵɵadvance(7),
                  e.ɵɵproperty(
                    "tooltip",
                    e.ɵɵpipeBind1(
                      36,
                      29,
                      "actionDialog.estimated-daily-earnings"
                    )
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate1(
                    "",
                    e.ɵɵpipeBind1(39, 31, r.earnedPerDay),
                    " 1INCH"
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(42, 33, r.earnedPerDayFiat)
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵproperty(
                    "tooltip",
                    e.ɵɵpipeBind1(
                      48,
                      35,
                      "actionDialog.estimated-monthly-earnings"
                    )
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate1(
                    "",
                    e.ɵɵpipeBind1(51, 37, r.earnedPerMonth),
                    " 1INCH"
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(54, 39, r.earnedPerMonthFiat)
                  ),
                  e.ɵɵadvance(6),
                  e.ɵɵproperty(
                    "tooltip",
                    e.ɵɵpipeBind1(
                      60,
                      41,
                      "actionDialog.estimated-yearly-earnings"
                    )
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate1(
                    "",
                    e.ɵɵpipeBind1(63, 43, r.earnedPerYear),
                    " 1INCH"
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵtextInterpolate(
                    e.ɵɵpipeBind1(66, 45, r.earnedPerYearFiat)
                  ),
                  e.ɵɵadvance(3),
                  e.ɵɵproperty("ngIf", r.showLock),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitch", r.actionDepositQuery.buttonState),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", "wallet_disconnected"),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", "not_enough_balance"),
                  e.ɵɵadvance(1),
                  e.ɵɵproperty("ngSwitchCase", "ok"));
            },
            dependencies: [
              _.O5,
              _.RF,
              _.n9,
              B.KI,
              Ie.r,
              L.ZT,
              L.xY,
              L.H8,
              re.lW,
              Q.DefaultValueAccessor,
              Q.NgControlStatus,
              Q.FormControlDirective,
              we.K,
              _.Ov,
              _.JJ,
              _.H9,
              B.Ot,
            ],
            styles: [
              ".action-dialog[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;padding:16px!important;width:420px!important;border-radius:24px;background-color:var(--1inch-bg-02);width:480px!important}@media (max-width: 520px){.action-dialog[_ngcontent-%COMP%]{width:100%!important}}@media (max-width: 500px){.action-dialog[_ngcontent-%COMP%]{width:auto!important}}.field[_ngcontent-%COMP%]{margin:0 -3px}.deposit-dialog-you-staked[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px solid;padding-bottom:16px;margin-bottom:16px}.deposit-dialog-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:2fr 1fr 1fr;border-bottom:1px solid;margin-bottom:16px;padding-bottom:16px}.deposit-dialog-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap}@media (max-width: 480px){.deposit-dialog-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px!important}}.deposit-dialog-grid-last[_ngcontent-%COMP%]{border-bottom:none}.deposit-input[_ngcontent-%COMP%]{width:100%;height:100%;background:transparent;border:none;padding-left:8px}.stake-card-tokens[_ngcontent-%COMP%]{display:flex;align-items:center}.stake-card-tokens[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap}.stake-card-tokens[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:28px}.stake-card-tokens[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:first-child{margin-right:-6px;z-index:10}.stake-card-tokens[_ngcontent-%COMP%]   .lock-icon[_ngcontent-%COMP%]{width:16px}.field-grid[_ngcontent-%COMP%]{display:grid;align-items:center;grid-template-columns:calc(100% - 58px) 50px;grid-column-gap:8px}.balance-value[_ngcontent-%COMP%]:hover{cursor:pointer;color:var(--1inch-common-btn-bg-01)}.button-wrap[_ngcontent-%COMP%]{width:100%;margin:0 auto}.approving-img[_ngcontent-%COMP%]{width:16px;height:16px;margin-left:4px}.allow-button-text[_ngcontent-%COMP%]{white-space:break-spaces;line-height:22px}.deposit-dialog-tooltip[_ngcontent-%COMP%]{margin-left:4px}.stats-text[_ngcontent-%COMP%], .token-swap-button__title[_ngcontent-%COMP%]{color:var(--1inch-text-01)}",
            ],
            changeDetection: 0,
          })),
          n
        );
      })();
      var nt = i(5e3),
        at = i(26960),
        rt = i(56747);
      function it(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"), e.ɵɵtext(1, "0%"), e.ɵɵelementEnd());
      }
      function ot(n, a) {
        if ((1 & n && (e.ɵɵtext(0), e.ɵɵpipe(1, "number")), 2 & n)) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵtextInterpolate1(
            " ",
            e.ɵɵpipeBind2(1, 1, t.apy + t.extraApy, "1.1-2"),
            "% "
          );
        }
      }
      function st(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵelement(1, "tooltip", 21),
            e.ɵɵtemplate(
              2,
              ot,
              2,
              4,
              "ng-template",
              null,
              22,
              e.ɵɵtemplateRefExtractor
            ),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵreference(3),
            r = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("tooltip", r.getTooltipContent(r.cardData))(
              "customElement",
              t
            );
        }
      }
      const Ae = function (n) {
        return { symbol: n };
      };
      function ct(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 23),
            e.ɵɵtext(2, "Deposit"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(3),
            e.ɵɵelementStart(4, "span"),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              " ",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              " "
            ),
            e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                6,
                3,
                "stakeCard.earn-double-tokens",
                e.ɵɵpureFunction1(6, Ae, t.getSecondTokenSymbol(t.cardData))
              ),
              " "
            );
        }
      }
      function dt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "span", 23),
            e.ɵɵtext(2, "Deposit"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(3),
            e.ɵɵelementStart(4, "span", 24),
            e.ɵɵtext(5, "and earn"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(6, " 1INCH "),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              " ",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              " "
            );
        }
      }
      function lt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p"),
            e.ɵɵtemplate(1, ct, 7, 8, "ng-container", 7),
            e.ɵɵtemplate(2, dt, 7, 2, "ng-container", 7),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.cardData.hasRewardInSecondToken),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", !t.cardData.hasRewardInSecondToken);
        }
      }
      function pt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p")(1, "span", 23),
            e.ɵɵtext(2, "Deposit"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(3),
            e.ɵɵelementStart(4, "span", 25),
            e.ɵɵtext(5, "and earn"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(6, " OPIUM "),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              " ",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              " "
            );
        }
      }
      function gt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p")(1, "span", 23),
            e.ɵɵtext(2, "Deposit"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(3),
            e.ɵɵelementStart(4, "span", 25),
            e.ɵɵtext(5, "and earn"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(6, " ARCx "),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              " ",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              " "
            );
        }
      }
      function mt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p")(1, "span", 23),
            e.ɵɵtext(2, "Deposit"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(3),
            e.ɵɵelementStart(4, "span", 25),
            e.ɵɵtext(5, "and earn"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(6, " BLES "),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              " ",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              " "
            );
        }
      }
      function ut(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "p")(1, "span", 23),
            e.ɵɵtext(2, "Deposit"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(3),
            e.ɵɵelementStart(4, "span", 25),
            e.ɵɵtext(5, "and earn"),
            e.ɵɵelementEnd(),
            e.ɵɵtext(6, " SWISE "),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate2(
              " ",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              " "
            );
        }
      }
      const Fe = function () {
        return { symbol: "OPIUM" };
      };
      function ht(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "dao.farming-for-only",
                e.ɵɵpureFunction0(4, Fe)
              ),
              " "
            ));
      }
      const ft = function () {
        return { symbol: "ARCx" };
      };
      function vt(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "dao.farming-for-only",
                e.ɵɵpureFunction0(4, ft)
              ),
              " "
            ));
      }
      const ye = function () {
        return { symbol: "BLES" };
      };
      function _t(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "dao.farming-for-only",
                e.ɵɵpureFunction0(4, ye)
              ),
              " "
            ));
      }
      const Ct = function () {
        return { symbol: "SWISE" };
      };
      function xt(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "dao.farming-for-only",
                e.ɵɵpureFunction0(4, Ct)
              ),
              " "
            ));
      }
      const Be = function () {
        return { symbol: "LDO" };
      };
      function yt(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "dao.farming-for-only",
                e.ɵɵpureFunction0(4, Be)
              ),
              " "
            ));
      }
      function bt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, ht, 3, 5, "span", 7),
            e.ɵɵtemplate(2, vt, 3, 5, "span", 7),
            e.ɵɵtemplate(3, _t, 3, 5, "span", 7),
            e.ɵɵtemplate(4, xt, 3, 5, "span", 7),
            e.ɵɵtemplate(5, yt, 3, 5, "span", 7),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              t.isEthOpiumFarming(t.cardData.poolAddress) ||
                t.is1inchOpiumFarming(t.cardData.poolAddress)
            ),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.isARCxFarming(t.cardData.poolAddress)),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.isEthBlesFarming(t.cardData.poolAddress)),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.is1inchSwiseFarming(t.cardData.poolAddress)),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.isDaiStethFarming(t.cardData.poolAddress));
        }
      }
      function St(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵtextInterpolate1(" ", t.countDown, " ");
        }
      }
      function Pt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 26)(1, "span", 27),
            e.ɵɵtext(2, "Start date"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "span", 6),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(4), e.ɵɵtextInterpolate(t.cardData.startDate);
        }
      }
      function kt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 26)(1, "span", 28),
            e.ɵɵtext(2, "End date"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "span", 6),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(4), e.ɵɵtextInterpolate(t.cardData.endDate);
        }
      }
      function Dt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 26)(1, "span", 29),
            e.ɵɵtext(2, "Ended at"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "span", 6),
            e.ɵɵtext(4),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext().ngIf;
          e.ɵɵadvance(4), e.ɵɵtextInterpolate(t);
        }
      }
      function Et(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtemplate(1, Dt, 5, 1, "div", 12),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = a.ngIf,
            r = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t && "ended" === r.cardData.state);
        }
      }
      function Ot(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span", 30),
          e.ɵɵtext(1, " 1INCH reward "),
          e.ɵɵelementEnd());
      }
      function Mt(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span", 31),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "dao.farming-reward",
                e.ɵɵpureFunction0(4, ye)
              ),
              " "
            ));
      }
      function It(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "currency"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1), e.ɵɵtextInterpolate(e.ɵɵpipeBind1(2, 1, t.earned));
        }
      }
      function wt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "span"),
            e.ɵɵtext(1),
            e.ɵɵpipe(2, "currency"),
            e.ɵɵelementEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind1(2, 1, t.earnedExtra));
        }
      }
      const $e = function (n) {
        return { token: n };
      };
      function Tt(n, a) {
        if (
          (1 & n && (e.ɵɵelement(0, "tooltip", 32), e.ɵɵpipe(1, "transloco")),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty(
            "tooltip",
            e.ɵɵpipeBind2(
              1,
              1,
              "stakeCards.program-is-ended",
              e.ɵɵpureFunction1(4, $e, t.cardData.token2)
            )
          );
        }
      }
      function At(n, a) {
        if (
          (1 & n && (e.ɵɵelement(0, "tooltip", 32), e.ɵɵpipe(1, "transloco")),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵproperty(
            "tooltip",
            e.ɵɵpipeBind2(
              1,
              1,
              "stakeCards.program-is-ended-short",
              e.ɵɵpureFunction1(4, $e, t.cardData.token2)
            )
          );
        }
      }
      function Ft(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 33)(1, "span", 34),
            e.ɵɵtext(2),
            e.ɵɵpipe(3, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(4, "span", 6),
            e.ɵɵtext(5),
            e.ɵɵpipe(6, "currency"),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                3,
                2,
                "dao.farming-reward",
                e.ɵɵpureFunction1(7, Ae, t.getSecondTokenSymbol(t.cardData))
              ),
              " "
            ),
            e.ɵɵadvance(3),
            e.ɵɵtextInterpolate(e.ɵɵpipeBind1(6, 5, t.earnedExtra));
        }
      }
      function Bt(n, a) {
        1 & n && (e.ɵɵelement(0, "tooltip", 32), e.ɵɵpipe(1, "transloco")),
          2 & n &&
            e.ɵɵproperty(
              "tooltip",
              e.ɵɵpipeBind1(1, 1, "stakeCards.opium-reward-separate")
            );
      }
      function $t(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 33)(1, "p")(2, "span", 34),
            e.ɵɵtext(3),
            e.ɵɵpipe(4, "transloco"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "span", 31),
            e.ɵɵtext(6, "( "),
            e.ɵɵelementStart(7, "a", 35),
            e.ɵɵtext(8, " Learn More "),
            e.ɵɵelementEnd(),
            e.ɵɵtext(9, " )"),
            e.ɵɵelementEnd()(),
            e.ɵɵelementStart(10, "span")(11, "span", 6),
            e.ɵɵtext(12),
            e.ɵɵpipe(13, "currency"),
            e.ɵɵpipe(14, "async"),
            e.ɵɵelementEnd(),
            e.ɵɵtemplate(15, Bt, 2, 3, "tooltip", 18),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(3),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                4,
                3,
                "dao.farming-reward",
                e.ɵɵpureFunction0(10, Fe)
              ),
              " "
            ),
            e.ɵɵadvance(9),
            e.ɵɵtextInterpolate(
              e.ɵɵpipeBind1(13, 6, e.ɵɵpipeBind1(14, 8, t.opiumReward$))
            ),
            e.ɵɵadvance(3),
            e.ɵɵproperty("ngIf", t.isEthOpiumFarming(t.cardData.poolAddress));
        }
      }
      function Lt(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "div", 33)(1, "span", 31),
          e.ɵɵtext(2),
          e.ɵɵpipe(3, "transloco"),
          e.ɵɵelementEnd(),
          e.ɵɵelementStart(4, "a", 36),
          e.ɵɵtext(5, " Learn More "),
          e.ɵɵelementEnd()()),
          2 & n &&
            (e.ɵɵadvance(2),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                3,
                1,
                "dao.farming-reward",
                e.ɵɵpureFunction0(4, Be)
              ),
              " "
            ));
      }
      function Qt(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "div", 37)(1, "app-button", 38)(2, "span", 39),
          e.ɵɵtext(3, "Connect wallet"),
          e.ɵɵelementEnd()()());
      }
      function Ut(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "span"),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "dao.farming-reward",
                e.ɵɵpureFunction0(4, ye)
              ),
              " "
            ));
      }
      function jt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementContainerStart(0),
            e.ɵɵtext(1),
            e.ɵɵelementContainerEnd()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext(3);
          e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " 1INCH and ",
              t.getSecondTokenSymbol(t.cardData),
              " reward "
            );
        }
      }
      const Wt = function () {
        return { symbol: "1INCH" };
      };
      function Vt(n, a) {
        1 & n &&
          (e.ɵɵelementContainerStart(0),
          e.ɵɵtext(1),
          e.ɵɵpipe(2, "transloco"),
          e.ɵɵelementContainerEnd()),
          2 & n &&
            (e.ɵɵadvance(1),
            e.ɵɵtextInterpolate1(
              " ",
              e.ɵɵpipeBind2(
                2,
                1,
                "dao.farming-reward",
                e.ɵɵpureFunction0(4, Wt)
              ),
              " "
            ));
      }
      function Rt(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "div")(2, "app-button", 42),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const o = e.ɵɵnextContext(2);
              return e.ɵɵresetView(o.openActionDialog("deposit"));
            }),
            e.ɵɵelementStart(3, "div", 43)(4, "p", 44),
            e.ɵɵtext(5, "Deposit"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(6, "p", 45),
            e.ɵɵtext(7),
            e.ɵɵelementEnd()()()(),
            e.ɵɵelementStart(8, "app-button", 46),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const o = e.ɵɵnextContext(2);
              return e.ɵɵresetView(o.claim());
            }),
            e.ɵɵelementStart(9, "div", 43)(10, "p", 47),
            e.ɵɵtext(11, "Claim"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(12, "p", 45),
            e.ɵɵtemplate(13, Ut, 3, 5, "span", 7),
            e.ɵɵtemplate(14, jt, 2, 1, "ng-container", 7),
            e.ɵɵtemplate(15, Vt, 3, 5, "ng-container", 7),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(2),
            e.ɵɵattributeInterpolate2(
              "data-id",
              "farming-page.card-",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              ".deposit-button"
            ),
            e.ɵɵproperty("disabled", "ended" === t.cardData.state),
            e.ɵɵadvance(5),
            e.ɵɵtextInterpolate2(
              "1LP-",
              t.cardData.token1,
              " -",
              t.cardData.token2,
              ""
            ),
            e.ɵɵadvance(1),
            e.ɵɵattributeInterpolate2(
              "data-id",
              "farming-page.card-",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              ".claim-button"
            ),
            e.ɵɵproperty("disabled", t.isClaimDisabled),
            e.ɵɵadvance(5),
            e.ɵɵproperty("ngIf", t.isEthBlesFarming(t.cardData.poolAddress)),
            e.ɵɵadvance(1),
            e.ɵɵproperty("ngIf", t.cardData.hasRewardInSecondToken),
            e.ɵɵadvance(1),
            e.ɵɵproperty(
              "ngIf",
              !t.cardData.hasRewardInSecondToken &&
                !t.isEthBlesFarming(t.cardData.poolAddress)
            );
        }
      }
      function Kt(n, a) {
        if (1 & n) {
          const t = e.ɵɵgetCurrentView();
          e.ɵɵelementContainerStart(0),
            e.ɵɵelementStart(1, "app-button", 48),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const o = e.ɵɵnextContext(2);
              return e.ɵɵresetView(o.openActionDialog("withdraw"));
            }),
            e.ɵɵelementStart(2, "div", 43)(3, "p", 49),
            e.ɵɵtext(4, "Withdraw"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(5, "p", 45),
            e.ɵɵtext(6),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementStart(7, "app-button", 50),
            e.ɵɵlistener("clicked", function () {
              e.ɵɵrestoreView(t);
              const o = e.ɵɵnextContext(2);
              return e.ɵɵresetView(o.exit());
            }),
            e.ɵɵelementStart(8, "div", 43)(9, "p", 51),
            e.ɵɵtext(10, "Exit"),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(11, "p", 45),
            e.ɵɵtext(12, "Withdraw and claim"),
            e.ɵɵelementEnd()()(),
            e.ɵɵelementContainerEnd();
        }
        if (2 & n) {
          const t = e.ɵɵnextContext(2);
          e.ɵɵadvance(1),
            e.ɵɵattributeInterpolate2(
              "data-id",
              "farming-page.card-",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              ".withdraw-button"
            ),
            e.ɵɵproperty("disabled", t.isWithdrawDisabled),
            e.ɵɵadvance(5),
            e.ɵɵtextInterpolate2(
              "1LP-",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              ""
            ),
            e.ɵɵadvance(1),
            e.ɵɵattributeInterpolate2(
              "data-id",
              "farming-page.card-",
              t.cardData.token1,
              "-",
              t.cardData.token2,
              ".exit-button"
            ),
            e.ɵɵproperty("disabled", t.isWithdrawDisabled);
        }
      }
      function Nt(n, a) {
        if (
          (1 & n &&
            (e.ɵɵelementStart(0, "div", 37)(1, "div", 40),
            e.ɵɵtemplate(2, Rt, 16, 11, "ng-container", 7),
            e.ɵɵelementEnd(),
            e.ɵɵelementStart(3, "div", 41),
            e.ɵɵtemplate(4, Kt, 13, 8, "ng-container", 7),
            e.ɵɵelementEnd()()),
          2 & n)
        ) {
          const t = e.ɵɵnextContext();
          e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", t.walletConnected),
            e.ɵɵadvance(2),
            e.ɵɵproperty("ngIf", t.walletConnected);
        }
      }
      const Yt = function (n, a, t, r) {
          return {
            "status-card-active": n,
            "status-card-soon": a,
            "bg-gray": t,
            "status-card-ended": r,
          };
        },
        Ht = {
          0: "Jan",
          1: "Feb",
          2: "Mar",
          3: "Apr",
          4: "May",
          5: "Jun",
          6: "Jul",
          7: "Aug",
          8: "Sep",
          9: "Oct",
          10: "Nov",
          11: "Dec",
        };
      class G {
        constructor(a, t, r, o, s, d, p, C, m, x, w) {
          (this.matDialogService = a),
            (this.walletConnectionQuery = t),
            (this.farmingService = r),
            (this.farmingTransactionService = o),
            (this.farmingQuery = s),
            (this.pricesQuery = d),
            (this.gasPriceQuery = p),
            (this.activeConnectionQuery = C),
            (this.farmingApi = m),
            (this.chainExplorerService = x),
            (this.acceptTermsService = w),
            (this.yourStaked = 0),
            (this.totalStaked = 0),
            (this.apy = 0),
            (this.extraApy = 0),
            (this.earned = 0),
            (this.earnedExtra = 0),
            (this.isWithdrawDisabled = !0),
            (this.isClaimDisabled = !0),
            (this.walletConnected = !1),
            (this.countDown = ""),
            (this.opiumReward$ = (0, j.a)([
              this.activeConnectionQuery.currentChainId$,
              this.walletConnectionQuery.connectedWalletAddress$,
            ]).pipe(
              (0, h.w)(([k, V]) =>
                k !== f.$L.etherumMainnet && V
                  ? this.farmingApi.getOpiumReward(V)
                  : (0, T.of)(0)
              )
            )),
            (this.subscription = new de.w0());
          const F = this.walletConnectionQuery.connectedWalletAddress$.pipe(
            (0, P.b)((k) => {
              this.walletConnected = !!k;
            }),
            (0, u.h)((k) => !!k)
          );
          this.subscription.add(
            F.subscribe({ error: (k) => (0, v.eK)(k, "av0063") })
          );
        }
        getIconName(a, t) {
          return t
            ? a.icon1 || a.token1.toLocaleLowerCase()
            : a.icon2 || a.token2.toLocaleLowerCase();
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        ngOnInit() {
          const a = this.pricesQuery.selectTokenUsdPrice(g.sx),
            t = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? this.pricesQuery.selectTokenUsdPrice(g.YA)
                  : (0, T.of)(0)
              )
            ),
            r = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? (0, T.of)(0)
                  : this.pricesQuery.selectTokenUsdPrice(g.Bx)
              )
            ),
            o = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? this.pricesQuery.selectTokenUsdPrice(g.EW)
                  : (0, T.of)(0)
              )
            ),
            s = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? this.pricesQuery.selectTokenUsdPrice(g.nd)
                  : (0, T.of)(0)
              )
            ),
            d = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? this.pricesQuery.selectTokenUsdPrice(g.Di)
                  : (0, T.of)(0)
              )
            ),
            p = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? this.pricesQuery.selectTokenUsdPrice(g.M2)
                  : (0, T.of)(0)
              )
            ),
            C = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? this.pricesQuery.selectTokenUsdPrice(g.zs)
                  : (0, T.of)(0)
              )
            ),
            m = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? this.pricesQuery.selectTokenUsdPrice(g.B$)
                  : (0, T.of)(0)
              )
            ),
            x = this.activeConnectionQuery.currentChainId$.pipe(
              (0, h.w)((c) =>
                c === f.$L.etherumMainnet
                  ? this.pricesQuery.selectTokenUsdPrice(g.cA)
                  : (0, T.of)(0)
              )
            ),
            w = (0, j.a)([t, r, o, s, d, p, C, m, x]),
            F = (0, j.a)([
              this.farmingQuery
                .selectEntity(this.cardData.farmingAddress)
                .pipe((0, I.BX)()),
              a,
              w,
            ]).pipe(
              (0, P.b)(([c, R, K]) => {
                const [H, ne, Se, Pe, en, tn, nn, an, rn] = K,
                  {
                    yourStake: on,
                    yourStakeUsd: sn,
                    oneInchEarned: Le,
                  } = (0, E.tX)(c),
                  W = this.cardData.farmingAddress;
                if (W === l.ih) {
                  const D = (0, E.$X)(c, 9);
                  this.earnedExtra = D * H;
                }
                if (W === l.jJ) {
                  const D = (0, E.$X)(c, 8);
                  this.earnedExtra = D * ne;
                }
                if (W === l.hD) {
                  const D = (0, E.$X)(c, 18);
                  this.earnedExtra = D * Se;
                }
                if (W === l.iY) {
                  const D = (0, E.$X)(c, 18);
                  this.earnedExtra = D * Pe;
                }
                if (W === l.$L) {
                  const D = (0, E.$X)(c, 8);
                  this.earnedExtra = D * en;
                }
                if (W === l.xh) {
                  const D = (0, E.$X)(c, 18);
                  this.earnedExtra = D * tn;
                }
                if (W === l.gf) {
                  const D = (0, E.$X)(c, 18);
                  this.earnedExtra = D * nn;
                }
                if (W === l.D_) {
                  const D = (0, E.$X)(c, 18);
                  this.earnedExtra = D * an;
                }
                if (W === l.Is) {
                  const D = (0, E.$X)(c, 18);
                  this.earnedExtra = D * rn;
                }
                (this.yourStaked = sn),
                  (this.earned = Le * R),
                  (this.isWithdrawDisabled = 0 === on),
                  (this.isClaimDisabled = 0 === Le && 0 === this.earnedExtra);
              })
            ),
            k = this.farmingQuery
              .selectEntity(this.cardData.farmingAddress)
              .pipe(
                (0, I.BX)(),
                (0, P.b)((c) => {
                  const { totalStaked: R, lpTokenPrices: K } = c;
                  if (!R || !K) return;
                  (this.apy = 100 * c.apy), (this.extraApy = c.extraApy);
                  const H = O.O$.from(R),
                    ne = +(0, b.formatUnits)(H, 18);
                  this.totalStaked = +K * ne;
                })
              );
          this.subscription.add(
            F.subscribe({ error: (c) => (0, v.eK)(c, "lc0009") })
          ),
            this.subscription.add(
              k.subscribe({ error: (c) => (0, v.eK)(c, "lc0010") })
            );
          let V = new Date().getTime();
          if (!this.cardData.startTime || this.cardData.startTime - V < 0)
            return;
          const be = (0, S.F)(1e3).pipe(
            (0, P.b)(() => {
              V = new Date().getTime();
              const c = this.cardData.startTime - V;
              if (c <= 0)
                return (
                  (this.cardData.state = "active"), void (this.countDown = "")
                );
              const R = Math.floor(c / 36e5),
                K = Math.floor((c % 36e5) / 6e4),
                H = Math.floor((c % 6e4) / 1e3);
              this.countDown = `${R < 10 ? "0" + R : R}:${
                K < 10 ? "0" + K : K
              }:${H < 10 ? "0" + H : H}`;
            })
          );
          this.subscription.add(
            be.subscribe({ error: (c) => (0, v.eK)(c, "lc0011") })
          );
        }
        openActionDialog(a) {
          const t = this.cardData;
          t.action = a;
          const o = (
            "deposit" === t.action
              ? this.acceptTermsService.checkTermsAccepting()
              : (0, T.of)(void 0)
          ).pipe(
            (0, P.b)(() => {
              this.matDialogService.open(tt, { data: t, restoreFocus: !1 });
            })
          );
          (0, M.O)(o, "farmingDeposit$");
        }
        claim() {
          l.b3.includes(this.cardData.farmingAddress) ||
          this.cardData.farmingAddress === l.K ||
          this.cardData.farmingAddress === l.ih ||
          this.cardData.farmingAddress === l.jJ ||
          this.cardData.farmingAddress === l.hD ||
          this.cardData.farmingAddress === l.iY ||
          this.cardData.farmingAddress === l.$L ||
          this.cardData.farmingAddress === l.xh ||
          this.cardData.farmingAddress === l.gf ||
          this.cardData.farmingAddress === l.D_ ||
          this.cardData.farmingAddress === l.Is
            ? this.farmingTransactionService.geMultiFarmingReward(
                this.cardData.farmingAddress
              )
            : this.farmingTransactionService.getReward(
                this.cardData.farmingAddress
              );
        }
        exit() {
          this.farmingTransactionService.exit(this.cardData.farmingAddress);
        }
        isEthOpiumFarming(a) {
          return a === l.ER;
        }
        is1inchOpiumFarming(a) {
          return a === l.bu;
        }
        isARCxFarming(a) {
          return a === l.pA;
        }
        isLDOFarming(a) {
          return a === l.wC;
        }
        isEthBlesFarming(a) {
          return a === l.u7;
        }
        is1inchSwiseFarming(a) {
          return a === l.qS;
        }
        isDaiStethFarming(a) {
          return a === l.X5;
        }
        without1INCHFarming(a) {
          return (
            this.isEthOpiumFarming(a) ||
            this.isARCxFarming(a) ||
            this.isEthBlesFarming(a) ||
            this.is1inchSwiseFarming(a) ||
            this.is1inchOpiumFarming(a) ||
            this.isDaiStethFarming(a)
          );
        }
        formatEndDate(a) {
          if (a.endDate) return a.endDate;
          if (a.endTime) {
            const t = new Date(a.endTime),
              r = t.getUTCDate(),
              o = Ht[t.getUTCMonth()],
              s = t.getFullYear();
            let d = t.getUTCHours().toString(),
              p = t.getUTCMinutes().toString();
            return (
              (d = d.length < 2 ? "0" + d : d),
              (p = p.length < 2 ? "0" + p : p),
              `${r} ${o} ${s} ${d}:${p} UTC`
            );
          }
          return "";
        }
        getTooltipContent(a) {
          const { poolAddress: t } = this.cardData;
          if (t === l.u7)
            return `${this.extraApy.toFixed(2)}% - BLES Farming APY`;
          let r = `${this.apy.toFixed(2)}% - 1INCH Farming APY`;
          return (
            this.isEthOpiumFarming(t) &&
              (r = `${r}\n                ${this.extraApy.toFixed(
                2
              )}% - OPIUM Farming APY`),
            a.hasRewardInSecondToken &&
              (r = `${r}\n                ${this.extraApy.toFixed(
                2
              )}% - ${this.getSecondTokenSymbol(a)} Farming APY`),
            r
          );
        }
        openOnEtherscan(a) {
          this.chainExplorerService.openAddressLink(a);
        }
        getSecondTokenSymbol(a) {
          return a.farmingAddress === l.Is ? "LDO" : a.token2;
        }
      }
      function zt(n, a) {
        1 & n && e.ɵɵelement(0, "app-stake-card", 6),
          2 & n && e.ɵɵproperty("cardData", a.$implicit);
      }
      function Xt(n, a) {
        1 & n &&
          (e.ɵɵelementStart(0, "div", 7),
          e.ɵɵnamespaceSVG(),
          e.ɵɵelementStart(1, "svg", 8),
          e.ɵɵelement(2, "use", 9),
          e.ɵɵelementEnd()());
      }
      (G.ɵfac = function (a) {
        return new (a || G)(
          e.ɵɵdirectiveInject(L.uw),
          e.ɵɵdirectiveInject(De.r),
          e.ɵɵdirectiveInject(Ee.L),
          e.ɵɵdirectiveInject(ee.M),
          e.ɵɵdirectiveInject(E.c5),
          e.ɵɵdirectiveInject(Me.u),
          e.ɵɵdirectiveInject(Oe.j),
          e.ɵɵdirectiveInject(se.r),
          e.ɵɵdirectiveInject(nt.L),
          e.ɵɵdirectiveInject(at.o),
          e.ɵɵdirectiveInject(rt.N)
        );
      }),
        (G.ɵcmp = e.ɵɵdefineComponent({
          type: G,
          selectors: [["app-stake-card"]],
          inputs: { cardData: "cardData" },
          decls: 52,
          vars: 50,
          consts: [
            [1, "stake-card", "sub-card", "text-center"],
            [1, "gradient"],
            [1, "d-flex", "justify-content-between", "mb-8"],
            ["transloco", "stakeCard.total-staked2", 1, "fs-14"],
            ["transloco", "stake.apy", 1, "fs-14"],
            [1, "d-flex", "justify-content-between"],
            [1, "fs-14"],
            [4, "ngIf"],
            [1, "stake-card-tokens", "mb-20", 3, "click"],
            ["alt", "", 1, "stake-card-token-image", "left-token", 3, "src"],
            ["alt", "", 1, "stake-card-token-image", 3, "src"],
            [1, "fs-12", "status-card", 3, "ngClass"],
            ["class", "d-flex justify-content-between mb-12", 4, "ngIf"],
            [1, "d-flex", "justify-content-between", "mb-12", "mt-20"],
            ["transloco", "stakeCard.your-stake", 1, "fs-14", "text-gray"],
            [
              "class",
              "fs-14 text-gray",
              "transloco",
              "stakeCard.1-inch-reward",
              4,
              "ngIf",
            ],
            ["class", "fs-14 text-gray", 4, "ngIf"],
            [1, "fs-14", "d-flex", "align-items-center"],
            ["direction", "top", 3, "tooltip", 4, "ngIf"],
            ["class", "mt-12 d-flex justify-content-between", 4, "ngIf"],
            ["class", "mt-20", 4, "ngIf"],
            ["contentType", "custom", 3, "tooltip", "customElement"],
            ["tooltipElement", ""],
            ["transloco", "stakeCard.deposit"],
            ["transloco", "stakeCard.and-earn"],
            ["transloco", "stakeCard.and-earn-1inch"],
            [1, "d-flex", "justify-content-between", "mb-12"],
            ["transloco", "stakeCard.start-date", 1, "fs-14", "text-gray"],
            ["transloco", "stakeCard.end-date", 1, "fs-14", "text-gray"],
            ["transloco", "stakeCard.ended-at", 1, "fs-14", "text-gray"],
            ["transloco", "stakeCard.1-inch-reward", 1, "fs-14", "text-gray"],
            [1, "fs-14", "text-gray"],
            ["direction", "top", 3, "tooltip"],
            [1, "mt-12", "d-flex", "justify-content-between"],
            [1, "fs-14", "text-gray", "mr-4"],
            [
              "href",
              "https://opium.finance/mining",
              "target",
              "_blank",
              "rel",
              "noopener noreferrer",
              1,
              "fs-14",
            ],
            [
              "href",
              "https://blog.lido.fi/guide-to-1inch-quadro-farming/",
              "target",
              "_blank",
              "rel",
              "noopener noreferrer",
              1,
              "fs-14",
            ],
            [1, "mt-20"],
            ["walletConnect", "", "color", "accentBlue", "fullWidth", "true"],
            ["transloco", "button.connect-wallet2", 1, "deposit-text", "fs-16"],
            [1, "stake-card-buttons-grid", "mb-16"],
            [1, "stake-card-buttons-grid"],
            [
              "color",
              "accentBlue",
              "fullWidth",
              "true",
              "notFixedHeight",
              "true",
              3,
              "disabled",
              "clicked",
            ],
            [1, "mt-12", "mb-12"],
            [
              "transloco",
              "stakeCard.deposit",
              1,
              "stake-card-button-text",
              "fs-16",
              "mb-4",
            ],
            [1, "stake-card-button-small-text", "fs-12"],
            [
              "color",
              "green",
              "fullWidth",
              "true",
              "notFixedHeight",
              "true",
              3,
              "disabled",
              "clicked",
            ],
            [
              "transloco",
              "stake.claim",
              1,
              "stake-card-button-text",
              "fs-16",
              "mb-4",
            ],
            [
              "color",
              "yellow",
              "fullWidth",
              "true",
              "notFixedHeight",
              "true",
              3,
              "disabled",
              "clicked",
            ],
            [
              "transloco",
              "stakeCard.withdraw",
              1,
              "stake-card-button-text",
              "fs-16",
              "mb-4",
            ],
            [
              "color",
              "red",
              "fullWidth",
              "true",
              "notFixedHeight",
              "true",
              3,
              "disabled",
              "clicked",
            ],
            [
              "transloco",
              "stakeCard.exit",
              1,
              "stake-card-button-text",
              "fs-16",
              "mb-4",
            ],
          ],
          template: function (a, t) {
            1 & a &&
              (e.ɵɵelementStart(0, "div", 0)(1, "div")(2, "div")(3, "div", 1)(
                4,
                "div",
                2
              )(5, "span", 3),
              e.ɵɵtext(6, "Total staked"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(7, "span")(8, "span", 4),
              e.ɵɵtext(9, "Farming APY"),
              e.ɵɵelementEnd()()(),
              e.ɵɵelementStart(10, "div", 5)(11, "span", 6),
              e.ɵɵtext(12),
              e.ɵɵpipe(13, "currency"),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(14, it, 2, 0, "span", 7),
              e.ɵɵtemplate(15, st, 4, 2, "span", 7),
              e.ɵɵelementEnd()()(),
              e.ɵɵelementStart(16, "div", 8),
              e.ɵɵlistener("click", function () {
                return t.openOnEtherscan(t.cardData.farmingAddress);
              }),
              e.ɵɵelement(17, "img", 9)(18, "img", 10),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(19, lt, 3, 2, "p", 7),
              e.ɵɵtemplate(20, pt, 7, 2, "p", 7),
              e.ɵɵtemplate(21, gt, 7, 2, "p", 7),
              e.ɵɵtemplate(22, mt, 7, 2, "p", 7),
              e.ɵɵtemplate(23, ut, 7, 2, "p", 7),
              e.ɵɵelementStart(24, "span", 11),
              e.ɵɵtext(25),
              e.ɵɵpipe(26, "transloco"),
              e.ɵɵpipe(27, "farmingFilter"),
              e.ɵɵtemplate(28, bt, 6, 5, "ng-container", 7),
              e.ɵɵtemplate(29, St, 2, 1, "ng-container", 7),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(30, Pt, 5, 1, "div", 12),
              e.ɵɵtemplate(31, kt, 5, 1, "div", 12),
              e.ɵɵtemplate(32, Et, 2, 1, "ng-container", 7),
              e.ɵɵelementStart(33, "div", 13)(34, "span", 14),
              e.ɵɵtext(35, "Your stake"),
              e.ɵɵelementEnd(),
              e.ɵɵelementStart(36, "span", 6),
              e.ɵɵtext(37),
              e.ɵɵpipe(38, "currency"),
              e.ɵɵelementEnd()(),
              e.ɵɵelementStart(39, "div", 5),
              e.ɵɵtemplate(40, Ot, 2, 0, "span", 15),
              e.ɵɵtemplate(41, Mt, 3, 5, "span", 16),
              e.ɵɵelementStart(42, "span", 17),
              e.ɵɵtemplate(43, It, 3, 3, "span", 7),
              e.ɵɵtemplate(44, wt, 3, 3, "span", 7),
              e.ɵɵtemplate(45, Tt, 2, 6, "tooltip", 18),
              e.ɵɵtemplate(46, At, 2, 6, "tooltip", 18),
              e.ɵɵelementEnd()(),
              e.ɵɵtemplate(47, Ft, 7, 9, "div", 19),
              e.ɵɵtemplate(48, $t, 16, 11, "div", 19),
              e.ɵɵtemplate(49, Lt, 6, 5, "div", 19),
              e.ɵɵelementEnd(),
              e.ɵɵtemplate(50, Qt, 4, 0, "div", 20),
              e.ɵɵtemplate(51, Nt, 5, 2, "div", 20),
              e.ɵɵelementEnd()),
              2 & a &&
                (e.ɵɵattribute(
                  "data-id",
                  "farm-card-" + t.cardData.token1 + "-" + t.cardData.token2
                ),
                e.ɵɵadvance(2),
                e.ɵɵclassMapInterpolate2(
                  "stake-header\n        header-",
                  t.cardData.token1.toLocaleLowerCase(),
                  "-",
                  t.cardData.token2.toLocaleLowerCase(),
                  ""
                ),
                e.ɵɵadvance(10),
                e.ɵɵtextInterpolate(
                  e.ɵɵpipeBind4(13, 34, t.totalStaked, "USD", "symbol", "1.0-0")
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty("ngIf", "ended" === t.cardData.state),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", "ended" !== t.cardData.state),
                e.ɵɵadvance(2),
                e.ɵɵpropertyInterpolate1(
                  "src",
                  "assets/images/farming-tokens/",
                  t.getIconName(t.cardData, !0),
                  ".png",
                  e.ɵɵsanitizeUrl
                ),
                e.ɵɵadvance(1),
                e.ɵɵpropertyInterpolate1(
                  "src",
                  "assets/images/farming-tokens/",
                  t.getIconName(t.cardData),
                  ".png",
                  e.ɵɵsanitizeUrl
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  !t.without1INCHFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  t.isEthOpiumFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", t.isARCxFarming(t.cardData.poolAddress)),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  t.isEthBlesFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  t.is1inchSwiseFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngClass",
                  e.ɵɵpureFunction4(
                    45,
                    Yt,
                    "active" === t.cardData.state,
                    "soon" === t.cardData.state,
                    "soon" === t.cardData.state,
                    "ended" === t.cardData.state
                  )
                ),
                e.ɵɵadvance(1),
                e.ɵɵtextInterpolate1(
                  " ",
                  e.ɵɵpipeBind1(
                    26,
                    39,
                    "soon" === t.cardData.state
                      ? "dao.farming-status-start-in"
                      : e.ɵɵpipeBind1(27, 41, t.cardData.state)
                  ),
                  " "
                ),
                e.ɵɵadvance(3),
                e.ɵɵproperty("ngIf", "active" === t.cardData.state),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", t.countDown),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", "ended" !== t.cardData.state),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  "ended" !== t.cardData.state && t.cardData.endDate
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", t.formatEndDate(t.cardData)),
                e.ɵɵadvance(5),
                e.ɵɵtextInterpolate(e.ɵɵpipeBind1(38, 43, t.yourStaked)),
                e.ɵɵadvance(3),
                e.ɵɵproperty(
                  "ngIf",
                  !t.isEthBlesFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  t.isEthBlesFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(2),
                e.ɵɵproperty(
                  "ngIf",
                  !t.isEthBlesFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  t.isEthBlesFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  t.isEthOpiumFarming(t.cardData.poolAddress) ||
                    t.isARCxFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  t.is1inchSwiseFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", t.cardData.hasRewardInSecondToken),
                e.ɵɵadvance(1),
                e.ɵɵproperty(
                  "ngIf",
                  t.isEthOpiumFarming(t.cardData.poolAddress)
                ),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", t.isLDOFarming(t.cardData.poolAddress)),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", !t.walletConnected),
                e.ɵɵadvance(1),
                e.ɵɵproperty("ngIf", t.walletConnected));
          },
          dependencies: [
            _.mk,
            _.O5,
            B.KI,
            Ie.r,
            we.K,
            _.Ov,
            _.JJ,
            _.H9,
            B.Ot,
            ce,
          ],
          styles: [
            '.stake-card[_ngcontent-%COMP%]{border:1px solid;padding:16px;border-radius:20px;height:100%;display:flex;flex-direction:column;justify-content:space-between}.gradient[_ngcontent-%COMP%]{border-radius:8px 8px 0 0;padding:16px}.stake-card-token-image[_ngcontent-%COMP%]{width:48px;height:48px;z-index:10;position:relative;cursor:pointer}.status-card[_ngcontent-%COMP%]{display:inline-block;padding:8px 12px;border-radius:20px;margin:16px auto;text-transform:capitalize}.status-card-active[_ngcontent-%COMP%]{background:var(--1inch__background__success);color:var(--1inch__text-and-icons__approve)}.status-card-soon[_ngcontent-%COMP%]{color:var(--1inch-common-text-03)}.status-card-ended[_ngcontent-%COMP%]{background:var(--1inch-btn-bg-03);color:var(--1inch__ui-02)}.left-token[_ngcontent-%COMP%]{margin-right:-12px;z-index:20;position:relative}.stake-card-tokens[_ngcontent-%COMP%]{margin-top:-24px}.stake-card-buttons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:16px}.deposit-border[_ngcontent-%COMP%]{border-radius:12px}.stake-card-button-text[_ngcontent-%COMP%]{line-height:16px}.stake-card-button-small-text[_ngcontent-%COMP%]{line-height:16px;opacity:.7}.stake-header[_ngcontent-%COMP%]{position:relative;border-radius:6px 6px 0 0;background:var(--1inch-bg-02)}.stake-header[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{content:"";position:absolute;top:-1px;bottom:-1px;left:-1px;right:-1px;border-radius:8px 8px 0 0;z-index:-1}.header-eth-torn[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(68,241,166,.2) 0%,rgba(98,126,234,.2) 100%)}.header-eth-torn[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(298.94deg,rgba(68,241,166,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-eth[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(98,126,234,.2) 0%,rgba(85,153,255,.2) 100%)}.header-1inch-eth[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#5599ff 0%,#627eea 100%)}.header-1inch-dai[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(250,182,44,.2) 0%,rgba(85,153,255,.2) 100%)}.header-1inch-dai[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#fab62c 0%,#5599ff 100%)}.header-1inch-wbtc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(240,146,66,.2) 0%,rgba(85,153,255,.2) 100%)}.header-1inch-wbtc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#f09242 0%,#5599ff 100%)}.header-1inch-usdc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(39,117,202,.2) 0%,rgba(85,153,255,.2) 100%)}.header-1inch-usdc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#627eea 0%,#5599ff 100%)}.header-1inch-usdt[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(69,191,125,.2) 0%,rgba(85,153,255,.2) 100%)}.header-1inch-usdt[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#45bf7d 0%,#5599ff 100%)}.header-1inch-yfi[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(98,126,234,.2) 0%,rgba(85,153,255,.2) 100%)}.header-1inch-yfi[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#627eea 0%,#5599ff 100%)}.header-dai-steth[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(68,163,248,.2) 0%,rgba(250,182,44,.2) 100%)}.header-dai-steth[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#44a3f8 0%,#fab62c 100%)}.header-eth-dai[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(250,182,44,.2) 0%,rgba(85,153,255,.2) 100%)}.header-eth-dai[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#fab62c 0%,#5599ff 100%)}.header-eth-usdc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(39,117,202,.2) 0%,rgba(85,153,255,.2) 100%)}.header-eth-usdc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#627eea 0%,#5599ff 100%)}.header-eth-usdt[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(69,191,125,.2) 0%,rgba(85,153,255,.2) 100%)}.header-eth-usdt[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#45bf7d 0%,#5599ff 100%)}.header-eth-wbtc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(240,146,66,.2) 0%,rgba(85,153,255,.2) 100%)}.header-eth-wbtc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#f09242 0%,#5599ff 100%)}.header-eth-opium[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(248,59,119,.2) 0%,rgba(85,153,255,.2) 100%)}.header-eth-opium[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#f83b77 0%,#5599ff 100%)}.header-steth-ldo[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(255,121,110,.2) 0%,rgba(68,163,248,.2) 100%)}.header-steth-ldo[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#ff796e 0%,#44a3f8 100%)}.header-1inch-vsp[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(128,96,255,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-vsp[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#8060ff 0%,#5599ff 100%)}.header-1inch-arcx[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#4A3556 0%,#627EEA 100%)}.header-1inch-arcx[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(74,53,86,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-ichi[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#016AEB 0%,#627EEA 100%)}.header-1inch-ichi[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(1,106,235,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-opium[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(300.3deg,rgba(248,59,119,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-opium[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#f83b77 0%,#627EEA 100%)}.header-1inch-rendgb[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(79,88,123,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-rendgb[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#4F587B 0%,#627EEA 100%)}.header-1inch-swise[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(79,88,123,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-swise[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#697296 0%,#627EEA 100%)}.header-1inch-wxt[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(122,236,100,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-wxt[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#7AEC64 0%,#627EEA 100%)}.header-eth-bles[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(234,64,247,.2) 0%,rgba(98,126,234,.2) 100%)}.header-eth-bles[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#EA40F7 0%,#627EEA 100%)}.header-1inch-bnb[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(240,185,11,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-bnb[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#f0b90b 0%,#5599ff 100%)}.header-1inch-renbtc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]{background:linear-gradient(298.94deg,rgba(135,136,140,.2) 0%,rgba(98,126,234,.2) 100%)}.header-1inch-renbtc[_ngcontent-%COMP%]   .gradient[_ngcontent-%COMP%]:before{background:linear-gradient(300.3deg,#87888C 0%,#5599ff 100%)}',
          ],
        })),
        (0, ve.__decorate)([_e.UM], G.prototype, "getIconName", null);
      const Jt = {
          total: U.Y,
          APY: "-",
          yourStake: U.Y,
          reward: U.Y,
          action: y.u9.deposit,
        },
        Zt = [
          {
            path: "",
            canActivateChild: [z.G],
            children: [
              {
                path: "",
                pathMatch: "full",
                component: (() => {
                  class n {
                    constructor(t, r, o, s) {
                      (this.farmingQuery = t),
                        (this.webAnalyticsService = r),
                        (this.farmingPoolsService = o),
                        (this.farmingTransactionService = s),
                        (this.farmingStateFilter$ = new le.X("active")),
                        (this.filters$ = this.farmingPoolsService
                          .getFarmingPools()
                          .pipe(
                            (0, Y.U)((d) => {
                              const p = [];
                              return (
                                d.forEach((C) => {
                                  const m =
                                    "soon" === C.state ? "active" : C.state;
                                  !p.includes(m) && p.push(m);
                                }),
                                p.sort((C, m) => (C > m ? 1 : C < m ? -1 : 0)),
                                this.setFarmingPoolsFilter(p[0]),
                                p
                              );
                            })
                          )),
                        (this.cards$ = this.farmingStateFilter$.pipe(
                          (0, h.w)((d) =>
                            this.farmingPoolsService.getFarmingPools().pipe(
                              (0, Y.U)((p) =>
                                p
                                  .map((m) =>
                                    Object.assign(Object.assign({}, m), Jt)
                                  )
                                  .filter((m) =>
                                    "active" === d
                                      ? "active" === m.state ||
                                        "soon" === m.state
                                      : m.state === d
                                  )
                                  .map((m) => {
                                    const x = new Date().getTime();
                                    return "soon" === m.state &&
                                      x >= m.startTime
                                      ? Object.assign(Object.assign({}, m), {
                                          state: "active",
                                        })
                                      : m;
                                  })
                              )
                            )
                          )
                        )),
                        this.farmingTransactionService.startPipelines();
                    }
                    setFarmingPoolsFilter(t) {
                      this.farmingStateFilter$.next(t);
                    }
                    ngOnInit() {
                      this.webAnalyticsService.pageView(
                        "/dao/farming",
                        "DAO / Liquidity Farming"
                      );
                    }
                  }
                  return (
                    (n.ɵfac = function (t) {
                      return new (t || n)(
                        e.ɵɵdirectiveInject(E.c5),
                        e.ɵɵdirectiveInject(pe.y),
                        e.ɵɵdirectiveInject(ge.R),
                        e.ɵɵdirectiveInject(ee.M)
                      );
                    }),
                    (n.ɵcmp = e.ɵɵdefineComponent({
                      type: n,
                      selectors: [["app-stake-page"]],
                      decls: 11,
                      vars: 12,
                      consts: [
                        [1, "d-flex", "justify-content-between", "mb-32"],
                        ["transloco", "dao.farming", 1, "mr-20"],
                        [
                          1,
                          "mb-32",
                          3,
                          "filters",
                          "selectedFilter",
                          "onSelect",
                        ],
                        [1, "farming-content", "mt-16"],
                        [3, "cardData", 4, "ngFor", "ngForOf"],
                        ["class", "coming-soon-wrap", 4, "ngIf"],
                        [3, "cardData"],
                        [1, "coming-soon-wrap"],
                        [
                          "width",
                          "240",
                          "height",
                          "160",
                          1,
                          "mb-16",
                          "text-gray",
                        ],
                        [
                          0,
                          "xlink",
                          "href",
                          "assets/images/coming-soon-dashboard.svg#coming-soon-dashboard",
                        ],
                      ],
                      template: function (t, r) {
                        if (
                          (1 & t &&
                            (e.ɵɵelementStart(0, "div", 0)(1, "h1", 1),
                            e.ɵɵtext(2, "Farming"),
                            e.ɵɵelementEnd()(),
                            e.ɵɵelementStart(3, "app-farming-filters", 2),
                            e.ɵɵlistener("onSelect", function (s) {
                              return r.setFarmingPoolsFilter(s);
                            }),
                            e.ɵɵpipe(4, "async"),
                            e.ɵɵpipe(5, "async"),
                            e.ɵɵelementEnd(),
                            e.ɵɵelementStart(6, "div", 3),
                            e.ɵɵtemplate(7, zt, 1, 1, "app-stake-card", 4),
                            e.ɵɵpipe(8, "async"),
                            e.ɵɵelementEnd(),
                            e.ɵɵtemplate(9, Xt, 3, 0, "div", 5),
                            e.ɵɵpipe(10, "async")),
                          2 & t)
                        ) {
                          let o;
                          e.ɵɵadvance(3),
                            e.ɵɵproperty(
                              "filters",
                              e.ɵɵpipeBind1(4, 4, r.filters$)
                            )(
                              "selectedFilter",
                              e.ɵɵpipeBind1(5, 6, r.farmingStateFilter$)
                            ),
                            e.ɵɵadvance(4),
                            e.ɵɵproperty(
                              "ngForOf",
                              e.ɵɵpipeBind1(8, 8, r.cards$)
                            ),
                            e.ɵɵadvance(2),
                            e.ɵɵproperty(
                              "ngIf",
                              !(
                                null != (o = e.ɵɵpipeBind1(10, 10, r.cards$)) &&
                                o.length
                              )
                            );
                        }
                      },
                      dependencies: [_.sg, _.O5, B.KI, fe, G, _.Ov],
                      styles: [
                        "[_nghost-%COMP%]{display:flex;flex-direction:column;max-width:1180px;margin:0 auto}.farming-content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:40px}@media (max-width: 920px){.farming-content[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}@media (max-width: 700px){.farming-content[_ngcontent-%COMP%]{grid-template-columns:1fr}}.coming-soon-wrap[_ngcontent-%COMP%]{display:flex;justify-content:center;height:70vh;align-items:center;flex-direction:column}.coming-soon-wrap[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{max-width:100%;opacity:.3}",
                      ],
                      changeDetection: 0,
                    })),
                    n
                  );
                })(),
              },
            ],
          },
        ];
      let qt = (() => {
        class n {}
        return (
          (n.ɵfac = function (t) {
            return new (t || n)();
          }),
          (n.ɵmod = e.ɵɵdefineNgModule({ type: n })),
          (n.ɵinj = e.ɵɵdefineInjector({
            imports: [
              N.Bz.forChild(Zt),
              _.ez,
              B.y4,
              oe,
              q.h,
              ie.H,
              L.Is,
              re.ot,
              Q.ReactiveFormsModule,
              Z.z,
            ],
          })),
          n
        );
      })();
    },
  },
]);
