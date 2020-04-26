function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loans-loans-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoansLoanListLoanListFilterSettingsLoanListFilterSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-divider class=\"tgi-mat-divider\"></mat-divider>\r\n  <mat-toolbar class=\"tgi-mat-toolbar-first\">\r\n\r\n    <mat-button-toggle class=\"tgi-button-toggle\" [checked]=\"false\" \r\n                        (change)=\"onToggleBtnChange($event);\">\r\n      <mat-icon>filter_list</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\"></mat-divider>\r\n    <!-- <div style=\"margin:0 20px;border-left:1px solid whitesmoke;padding:0 20px;border-right: 1px solid whitesmoke;\"> -->\r\n      <mat-form-field class=\"tgi-form-field-view\">\r\n        <mat-label>View</mat-label>\r\n        <mat-select [(value)]=\"selectedView\">\r\n          <mat-option value=\"all\">All</mat-option>\r\n          <mat-option value=\"closed\">Closed</mat-option>\r\n          <mat-option value=\"available\">Approved / Pending Get Fund</mat-option>\r\n          <mat-option value=\"in process\">Approved / Pending Funds Disbursal</mat-option>\r\n          <mat-option value=\"active\">Approved / Funds Disbursed</mat-option>\r\n          <mat-option value=\"inarrears\">In-Arrears</mat-option>\r\n          <mat-option value=\"denied\">Denied</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    <!-- </div>  -->\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\">\"></mat-divider>\r\n      \r\n    <!-- <div style=\"margin-right: 20px; padding:20px 20px 0 0;\"> -->\r\n      <div>{{renderLoanArr?.length}} Loans</div>\r\n    <!-- </div> -->\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\">></mat-divider>\r\n\r\n    <span class=\"nav-spacer\"></span>\r\n\r\n    <mat-form-field class=\"find-full-width\" appearance=\"outline\" floatLabel=\"auto\">\r\n      <input matInput placeholder=\"Find\">\r\n      <!-- <mat-label>Find</mat-label>  -->\r\n      <mat-icon matPrefix>search</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <button mat-icon-button class=\"tgi-button-icon\">\r\n      <mat-icon class=\"tgi-icon-download-size\" aria-hidden=\"false\" aria-label=\"Download\">cloud_download</mat-icon>\r\n      <!--  <img class=\"tgi-icon-download-size\" src=\"../assets/icons/cloud_download-24px.svg\"  alt=\"Download\" title=\"Download\"> -->\r\n    </button>\r\n    <!--\r\n    <button mat-icon-button class=\"tgi-button-img\" (click)=\"clickShare()\">\r\n      <mat-icon>share</mat-icon>\r\n    </button>\r\n-->\r\n    <mat-button-toggle class=\"tgi-button-toggle\" [checked]=\"false\" (change)=\"onToggleBtnChangeShare($event);\">\r\n\r\n      <mat-icon>share</mat-icon>\r\n    </mat-button-toggle>\r\n\r\n  </mat-toolbar>\r\n  \r\n  <mat-divider class=\"tgi-mat-divider\"></mat-divider>\r\n\r\n  <mat-toolbar class=\"tgi-mat-toolbar-two\" *ngIf=\"isViewTwoPanel\">\r\n\r\n    <ng-container *ngIf=\"isFilterUse\">\r\n\r\n      <mat-form-field *ngIf=\"officerList\" class=\"tgi-officer-form-field\">\r\n        <mat-label>Credit Officer</mat-label>\r\n        <mat-select multiple>          \r\n          <mat-option *ngFor=\"let officer of officerList\" [value]=\"officer\">{{officer}}</mat-option>\r\n        </mat-select>      \r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"tgi-city-mat-form-field\" *ngIf=\"cityList\">\r\n        <mat-label>City</mat-label>\r\n        <mat-select multiple>\r\n          <mat-option *ngFor=\"let city of cityList\" [value]=\"city\">{{city}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </ng-container>\r\n\r\n    <span class=\"nav-spacer\"></span>\r\n\r\n    <ng-container *ngIf=\"isShareUse\">\r\n      <button mat-raised-button>\r\n        Email\r\n      </button>\r\n\r\n      <button mat-raised-button class=\"tgi-button-print\">\r\n        Print\r\n      </button>\r\n\r\n    </ng-container>\r\n\r\n  </mat-toolbar>\r\n  <mat-divider class=\"tgi-mat-divider\"></mat-divider>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-list.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-list.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoansLoanListLoanListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"(currentUser$ | async) as ut\"></ng-container>\n<ng-container *ngIf=\"(currentLoans$ | async) as loans\">\n\n  <!-- <div>\n    {{loans | json}}\n  </div> -->\n\n  <app-loan-list-filter-settings [data-source]=\"loans\"\n                        (loan-view-change)=\"loanViewChanged($event)\"\n                        [render-data]=\"renderLoanArr\">\n  </app-loan-list-filter-settings>\n\n  <app-loan-table [data-source]=\"loans\"\n                    [loan-view]=\"loanView\"\n                    (render-loans)=\"renderLoansChanged($event)\">\n  </app-loan-table>\n\n</ng-container>\n\n<ng-container *ngIf=\"(isLoansChanged$ | async) as r\">\n  <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n    <div class=\"spinner-container\">\n      <span>LOADING LOANS</span>\n      <mat-spinner diameter=\"30\"></mat-spinner>\n    </div>\n  </ng-container>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-table/loan-table.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-table/loan-table.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoansLoanListLoanTableLoanTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"(renderLoanList$ | async) as renderLoans\"></ng-container>\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"productName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Product</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.productName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"loanId\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Loan #</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.loanId}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.firstName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.lastName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"clientState\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Client State</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.clientState}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"loanAmount\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Loan Amount</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.loanAmount}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"totalBalance\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Total Balance</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.totalBalance}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"disbursementDate\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Disbursement Date</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.disbursementDate}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"creditOfficer\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Credit Officer</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.creditOfficer}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lastModified\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Modified</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.lastModified}} </td>\n  </ng-container>\n\n<!-- // ??? makarov -->\n  <ng-container matColumnDef=\"loanStatus\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Loan Status</th>\n    <td mat-cell *matCellDef=\"let loan\"> {{loan.loanStatus}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let loan; columns: displayedColumns;\" class=\"loan-row\"\n    [class.selected-loan-row]=\"selectedLoan === loan\" (click)=\"onTblRowClick(loan)\">\n\n  </tr>\n\n</table>";
    /***/
  },

  /***/
  "./src/app/loans/loan-list.service.ts":
  /*!********************************************!*\
    !*** ./src/app/loans/loan-list.service.ts ***!
    \********************************************/

  /*! exports provided: LoanListService */

  /***/
  function srcAppLoansLoanListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanListService", function () {
      return LoanListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _loan_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loan.interface */
    "./src/app/loans/loan.interface.ts");
    /* harmony import */


    var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/model/entity-state.interface */
    "./src/app/shared/model/entity-state.interface.ts");
    /* harmony import */


    var _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/services/server-status.service */
    "./src/app/shared/services/server-status.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var LoanListService =
    /*#__PURE__*/
    function () {
      function LoanListService(http, serverStatusSrv) {
        var _this = this;

        _classCallCheck(this, LoanListService);

        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.curLoanListSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curLoanList$ = this.curLoanListSub$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_loan_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curLoanList = _loan_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanList"];
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curLoanList$.subscribe(function (loans) {
          _this.curLoanList = loans;
        });
      } // ------------------------------------------------------------


      _createClass(LoanListService, [{
        key: "isWrongLoanList",
        value: function isWrongLoanList(loans) {
          if (!loans) {
            throw new Error('Parameter [loans] is null');
          }

          if (loans === _loan_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanList"]) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "isLoanListNotEmpty",
        value: function isLoanListNotEmpty(loans) {
          if (!loans) {
            throw new Error('Parameter [loans] is null');
          }

          if (loans === _loan_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanList"]) {
            return false;
          } else {
            return true;
          }
        }
      }, {
        key: "isLoanListEmpty",
        value: function isLoanListEmpty() {
          return !this.isLoanListNotEmpty(this.curLoanList);
        }
      }, {
        key: "clearLoanList",
        value: function clearLoanList() {
          if (!this.isLoanListEmpty()) {
            this.curLoanListSub$.next(_loan_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanList"]);
          }
        } // ------------------------------------------------------------

      }, {
        key: "loadLoanList",
        value: function loadLoanList(stateService) {
          var _this2 = this;

          // console.log('SYNC ENTER LoanListService.loadLoanList() %O', stateService);
          if (stateService) {
            var isClentsChangedEnter = {
              op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
              isEnd: false,
              opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isClentsChangedEnter);
          }

          this.http.get("".concat(this.apiUrl, "/loans"), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]() // .set("Content-Type", "application/json")
            .set("Accept", "application/json")
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (loans) {
            // console.log('\tASYNC PIPE LoanListService.loadLoanList().map(ANY): %O', loans);
            if (_this2.isWrongLoanList(loans)) {
              return null;
            }

            if (!Array.isArray(loans) || loans.length === 0) {
              return null;
            }

            var curLoanList = loans.map(function (item) {
              var loan = {
                productName: item.productName,
                loanId: item.id.toString(),
                firstName: item.client.profile.firstName,
                lastName: item.client.profile.lastName,
                clientState: item.client.status,
                clientId: item.client.id,
                loanAmount: item.loanAmount,
                totalBalance: item.totalBalance,
                disbursementDate: item.disbursementDate,
                creditOfficer: item.creditOfficer,
                lastModified: item.disbursementDate,
                loanStatus: item.status // ??? makarov

              };
              return loan;
            });
            return {
              token: 'OK',
              loans: curLoanList
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            // console.log('\tASYNC PIPE LoanListService.loadLoanList().catchError() #2: %O', err);
            var msg;
            var isLoansChangedError = null;

            if (stateService) {
              isLoansChangedError = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                isEnd: true,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR
              };
            }

            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
              // Server error 
              var status = err.status;

              if (status === 0) {
                msg = "SERVER ERROR: HTTP failure response for ".concat(err.url);
              } else if (status > 0 && status < 600) {
                msg = "SERVER ERROR: ".concat(status, " - ").concat(_this2.serverStatusSrv.getStatusText(status.toString()));
              }

              isLoansChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
              isLoansChangedError.message = msg;
            } else {
              // Loan error
              msg = err.message ? err.message : err.toString();
              ;
              isLoansChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
              isLoansChangedError.message = "CLIENT ERROR: ".concat(msg);
            }

            if (stateService) {
              stateService.next(isLoansChangedError);
            }

            _this2.clearLoanList();

            _this2.onDestroySub$.next(true);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
              token: 'ERROR',
              loans: null
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe(function (rezObj) {
            // console.log(`\tSUBSCRIBE: LoanListService.loadLoanList().subscribe(NEXT): rezObj: %O`, rezObj);
            // if (rezObj.token === 'ERROR') {
            //   if (stateService) {
            //     const isLoansChangedError: IsEntityChangedInterface = {
            //       op: EntityStateEnum.LOAD,
            //       isEnd: true,
            //       opResult: EntityChangeResultEnum.ERROR,
            //     };
            //     stateService.next(isLoansChangedError);
            //   }
            //   this.clearLoanList();
            // } else
            if (rezObj.token === 'OK') {
              _this2.curLoanListSub$.next(rezObj.loans); // BEFOR stateService.next()!


              if (stateService) {
                var isLoansChangedExit = {
                  op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                  isEnd: true,
                  opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS
                };
                stateService.next(isLoansChangedExit);
              } // this.curLoanListSub$.next(rezObj.loans);

            }
          } // , err => console.log(`\tSUBSCRIBE: LoanListService.loadLoanList().subscribe(ERROR): %O`, err)
          // , () => console.log(`\tSUBSCRIBE: LoanListService.loadLoanList().subscribe(COMPLETE)`)
          );
        }
      }]);

      return LoanListService;
    }();

    LoanListService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__["ServerStatusService"]
      }];
    };

    LoanListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoanListService);
    /***/
  },

  /***/
  "./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoansLoanListLoanListFilterSettingsLoanListFilterSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-spacer {\n  flex: 1 1 auto;\n}\n\n.find-full-width {\n  width: 20%;\n  margin-right: 20px;\n}\n\ndiv.mat-form-field-wrapper > div.mat-form-field-wrapper {\n  margin-left: 20px;\n}\n\n.tgi-city-mat-form-field {\n  padding-left: 32px;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h1 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h2 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h3 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h4 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h5 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h6 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h1 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h2 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h3 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h4 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h5 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h6 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n/*\n.tgi-mat-toolbar-first {\n\n}\n.tgi-mat-toolbar-two {\n\n}\n*/\n\n::ng-deep .find-full-width .mat-form-field-infix {\n  /* padding: .5em 0; */\n  padding: 0.3em 0 0.4em 0;\n}\n\n.tgi-button-print {\n  margin-left: 50px;\n}\n\n.tgi-mat-divider {\n  padding: 1px 0 1px 0;\n}\n\n.tgi-mat-divider-vertical {\n  height: 100%;\n  margin: 0 20px;\n  /*  border: 1px;  */\n}\n\n::ng-deep .tgi-mat-divider-vertical.mat-divider.mat-divider-vertical {\n  border-right-width: 2px;\n}\n\n.tgi-form-field-view {\n  min-width: 250px;\n}\n\n.tgi-officer-form-field {\n  padding-left: 32px;\n  max-width: 250px;\n}\n\n.tgi-city-mat-form-field {\n  padding-left: 32px;\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvbG9hbnMvbG9hbi1saXN0L2xvYW4tbGlzdC1maWx0ZXItc2V0dGluZ3MvbG9hbi1saXN0LWZpbHRlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9hbnMvbG9hbi1saXN0L2xvYW4tbGlzdC1maWx0ZXItc2V0dGluZ3MvbG9hbi1saXN0LWZpbHRlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENFO0VBQ0UsaUJBQUE7QUNFSjs7QURDRTtFQUNFLGtCQUFBO0FDRUo7O0FERUE7RUFDRSx3REFBQTtBQ0NGOztBRENBO0VBQ0Usd0RBQUE7QUNFRjs7QURBQTtFQUNFLHdEQUFBO0FDR0Y7O0FEREE7RUFDRSx3REFBQTtBQ0lGOztBREZBO0VBQ0Usd0RBQUE7QUNLRjs7QURIQTtFQUNFLHdEQUFBO0FDTUY7O0FESkE7RUFDRSx3REFBQTtBQ09GOztBREpBO0VBQ0Usd0RBQUE7QUNPRjs7QURMQTtFQUNFLHdEQUFBO0FDUUY7O0FETkE7RUFDRSx3REFBQTtBQ1NGOztBRFBBO0VBQ0Usd0RBQUE7QUNVRjs7QURSQTtFQUNFLHdEQUFBO0FDV0Y7O0FEVEE7RUFDRSx3REFBQTtBQ1lGOztBRFZBO0VBQ0Usd0RBQUE7QUNhRjs7QURYQTs7Ozs7OztDQUFBOztBQVFBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtBQ2NGOztBRFhBO0VBQ0UsaUJBQUE7QUNjRjs7QURYQTtFQUNFLG9CQUFBO0FDY0Y7O0FEWEE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDY0Y7O0FEWEE7RUFDRSx1QkFBQTtBQ2NGOztBRFhBO0VBQ0UsZ0JBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNjRiIsImZpbGUiOiJzcmMvYXBwL2xvYW5zL2xvYW4tbGlzdC9sb2FuLWxpc3QtZmlsdGVyLXNldHRpbmdzL2xvYW4tbGlzdC1maWx0ZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLmZpbmQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC50Z2ktY2l0eS1tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgfVxyXG5cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgxIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgyIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDMge1xyXG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IFxyXG59XHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoNCB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGg1IHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDYge1xyXG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IFxyXG59XHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGgxIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoMiB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoMyB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNCB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNSB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNiB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuLypcclxuLnRnaS1tYXQtdG9vbGJhci1maXJzdCB7XHJcblxyXG59XHJcbi50Z2ktbWF0LXRvb2xiYXItdHdvIHtcclxuXHJcbn1cclxuKi9cclxuOjpuZy1kZWVwIC5maW5kLWZ1bGwtd2lkdGggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAvKiBwYWRkaW5nOiAuNWVtIDA7ICovXHJcbiAgcGFkZGluZzogMC4zZW0gMCAwLjRlbSAwO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1wcmludCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWRpdmlkZXIge1xyXG4gIHBhZGRpbmc6IDFweCAwIDFweCAwO1xyXG59XHJcblxyXG4udGdpLW1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcclxuICBoZWlnaHQ6ICAxMDAlOyBcclxuICBtYXJnaW46IDAgMjBweDtcclxuICAvKiAgYm9yZGVyOiAxcHg7ICAqL1xyXG59XHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LWRpdmlkZXItdmVydGljYWwubWF0LWRpdmlkZXIubWF0LWRpdmlkZXItdmVydGljYWwge1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xyXG59XHJcblxyXG4udGdpLWZvcm0tZmllbGQtdmlldyB7XHJcbiAgbWluLXdpZHRoOiAyNTBweDsgXHJcbn1cclxuXHJcbi50Z2ktb2ZmaWNlci1mb3JtLWZpZWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLnRnaS1jaXR5LW1hdC1mb3JtLWZpZWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDsgXHJcbn1cclxuIiwiLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmZpbmQtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGdpLWNpdHktbWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDEge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoMiB7XG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgzIHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDQge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoNSB7XG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGg2IHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGgxIHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGgyIHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGgzIHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGg0IHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGg1IHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGg2IHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLypcbi50Z2ktbWF0LXRvb2xiYXItZmlyc3Qge1xuXG59XG4udGdpLW1hdC10b29sYmFyLXR3byB7XG5cbn1cbiovXG46Om5nLWRlZXAgLmZpbmQtZnVsbC13aWR0aCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAvKiBwYWRkaW5nOiAuNWVtIDA7ICovXG4gIHBhZGRpbmc6IDAuM2VtIDAgMC40ZW0gMDtcbn1cblxuLnRnaS1idXR0b24tcHJpbnQge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLnRnaS1tYXQtZGl2aWRlciB7XG4gIHBhZGRpbmc6IDFweCAwIDFweCAwO1xufVxuXG4udGdpLW1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgMjBweDtcbiAgLyogIGJvcmRlcjogMXB4OyAgKi9cbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWRpdmlkZXItdmVydGljYWwubWF0LWRpdmlkZXIubWF0LWRpdmlkZXItdmVydGljYWwge1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDJweDtcbn1cblxuLnRnaS1mb3JtLWZpZWxkLXZpZXcge1xuICBtaW4td2lkdGg6IDI1MHB4O1xufVxuXG4udGdpLW9mZmljZXItZm9ybS1maWVsZCB7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuLnRnaS1jaXR5LW1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: LoanListFilterSettingsComponent */

  /***/
  function srcAppLoansLoanListLoanListFilterSettingsLoanListFilterSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanListFilterSettingsComponent", function () {
      return LoanListFilterSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__); // import { CREDIT_OFFICER_LIST } from '../loan-list/loan-table/mock-data';


    var LoanListFilterSettingsComponent =
    /*#__PURE__*/
    function () {
      function LoanListFilterSettingsComponent() {
        _classCallCheck(this, LoanListFilterSettingsComponent);

        this.loanViewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._renderLoanArr = null; // public OfficerList = CREDIT_OFFICER_LIST;

        this.officerList = [];
        this.cityList = [];
        this._selView = 'all';
        this.isFilterUse = false;
        this.isShareUse = false;
        this.isViewTwoPanel = false;
      }

      _createClass(LoanListFilterSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedView = 'in process';
        }
      }, {
        key: "onToggleBtnChange",
        value: function onToggleBtnChange(e) {
          this.isFilterUse = !this.isFilterUse;

          if (this.isFilterUse) {
            if (!this.isViewTwoPanel) {
              this.isViewTwoPanel = true;
            } else {// this.isViewTwoPanel = true;
            }
          }

          if (!this.isFilterUse) {
            if (!this.isShareUse) {
              this.isViewTwoPanel = false;
            }
          } // console.log('FilterSettingsComponent.onToggleBtnChange(event) isFilterUse -> %O', this.isFilterUse);
          // console.log('FilterSettingsComponent.onToggleBtnChange(event) isShareUse -> %O', this.isShareUse);
          // console.log('FilterSettingsComponent.onToggleBtnChange(event) isViewTwoPanel  1 -> %O', this.isViewTwoPanel);

        }
      }, {
        key: "onToggleBtnChangeShare",
        value: function onToggleBtnChangeShare(e) {
          this.isShareUse = !this.isShareUse;

          if (this.isShareUse) {
            if (!this.isViewTwoPanel) {
              this.isViewTwoPanel = true;
            } else {// this.isViewTwoPanel = true;
            }
          }

          if (!this.isShareUse) {
            if (!this.isFilterUse) {
              this.isViewTwoPanel = false;
            }
          } // console.log('FilterSettingsComponent.onToggleBtnChange(event) isFilterUse -> %O', this.isFilterUse);
          // console.log('FilterSettingsComponent.onToggleBtnChange(event) isShareUse -> %O', this.isShareUse);
          // console.log('FilterSettingsComponent.onToggleBtnChange(event) isViewTwoPanel  1 -> %O', this.isViewTwoPanel);

        }
      }, {
        key: "renderLoanArr",
        get: function get() {
          return this._renderLoanArr;
        },
        set: function set(val) {
          this._renderLoanArr = val;
          this.officerList = lodash__WEBPACK_IMPORTED_MODULE_2__["uniqBy"](val, 'creditOfficer').map(function (item) {
            return item.creditOfficer;
          }); // this.cityList = _.uniqBy(val, 'city')
          //                   .map(item => item.city);

          var arr = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](val, 'city').map(function (item) {
            return item.city;
          });
          this.cityList = lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"](arr);
        }
      }, {
        key: "selectedView",
        get: function get() {
          return this._selView;
        },
        set: function set(val) {
          // console.log('FilterSettingsComponent.selectedView(val) val=%s', val);
          this._selView = val;

          if (val === 'all') {
            val = '';
          }

          this.loanViewChange.emit(val);
        }
      }]);

      return LoanListFilterSettingsComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')], LoanListFilterSettingsComponent.prototype, "loanArr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('loan-view-change')], LoanListFilterSettingsComponent.prototype, "loanViewChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('render-data')], LoanListFilterSettingsComponent.prototype, "renderLoanArr", null);
    LoanListFilterSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loan-list-filter-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loan-list-filter-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loan-list-filter-settings.component.scss */
      "./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.scss")).default]
    })], LoanListFilterSettingsComponent);
    /***/
  },

  /***/
  "./src/app/loans/loan-list/loan-list.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/loans/loan-list/loan-list.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoansLoanListLoanListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/*  left part */\n.nav-spacer {\n  flex: 1 1 auto;\n}\n/*\n.tgi-icon {\n    padding: 0 14px;\n  }\n  */\n/*\n::ng-deep  mat-button-toggle.tgi-button-toggle  .mat-button-toggle-label-content {\n    line-height: 48px;\n  }\n*/\n.tgi-icon-size {\n  height: 28px;\n}\n/*  right part */\n/* find */\n.find-form {\n  min-width: 150px;\n  max-width: 300px;\n  width: 100%;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n/*\n::ng-deep mat-toolbar.find-menu {\n  background-color: grey;\n}\n*/\n::ng-deep mat-form-field.find-full-width > div.mat-form-field-wrapper {\n  margin: 0;\n  padding: 0;\n  /* background-color: lightgray; */\n}\n.find-full-width {\n  width: 100%;\n}\n.menu-group {\n  padding-left: 10px;\n  background-color: lightgray;\n  border: 0px solid black;\n}\n.tgi-client-num {\n  padding-left: 14px;\n}\n/* icon buttons */\n.tgi-icon-download-size {\n  /* height: 38px; */\n  vertical-align: middle;\n}\n.tgi-icon-share-size {\n  height: 28px;\n}\n.toolbar-icon {\n  text-decoration: none;\n  display: flex;\n  /* color: #fff; */\n  /* padding-left: 25px; */\n  width: 50px;\n}\n.sidenav-icon {\n  text-decoration: none;\n  padding: 0 10px;\n}\n.tgi-button-icon {\n  display: flex;\n  text-decoration: none;\n}\n.tgi-button-img {\n  display: flex;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvbG9hbnMvbG9hbi1saXN0L2xvYW4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9hbnMvbG9hbi1saXN0L2xvYW4tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFBO0FBRUE7RUFDSSxjQUFBO0FDQUo7QURFRTs7OztHQUFBO0FBS0E7Ozs7Q0FBQTtBQU1BO0VBQ0ksWUFBQTtBQ0FOO0FES0UsZ0JBQUE7QUFFQSxTQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSko7QURNRTs7OztDQUFBO0FBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDSEo7QURLRTtFQUNFLFdBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDRko7QURJRTtFQUNFLGtCQUFBO0FDREo7QURHRSxpQkFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQ0RKO0FER0U7RUFDRSxZQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xvYW5zL2xvYW4tbGlzdC9sb2FuLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgbGVmdCBwYXJ0ICovXHJcblxyXG4ubmF2LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLypcclxuICAudGdpLWljb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICB9XHJcbiAgICAqL1xyXG4gIC8qXHJcbiAgOjpuZy1kZWVwICBtYXQtYnV0dG9uLXRvZ2dsZS50Z2ktYnV0dG9uLXRvZ2dsZSAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAqL1xyXG4gIFxyXG4gIC50Z2ktaWNvbi1zaXplIHtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qICByaWdodCBwYXJ0ICovXHJcbiAgXHJcbiAgLyogZmluZCAqL1xyXG4gIFxyXG4gIC5maW5kLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAvKlxyXG4gIDo6bmctZGVlcCBtYXQtdG9vbGJhci5maW5kLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICB9XHJcbiAgKi9cclxuICA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQuZmluZC1mdWxsLXdpZHRoID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgKi9cclxuICB9XHJcbiAgLmZpbmQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtZ3JvdXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgfSBcclxuICAudGdpLWNsaWVudC1udW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIH1cclxuICAvKiBpY29uIGJ1dHRvbnMgKi9cclxuICBcclxuICAudGdpLWljb24tZG93bmxvYWQtc2l6ZSB7XHJcbiAgICAvKiBoZWlnaHQ6IDM4cHg7ICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAudGdpLWljb24tc2hhcmUtc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgXHJcbiAgfVxyXG4gIC50b29sYmFyLWljb24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyNXB4OyAqL1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfSBcclxuICBcclxuICAuc2lkZW5hdi1pY29uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRnaS1idXR0b24taWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGdpLWJ1dHRvbi1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgIiwiLyogIGxlZnQgcGFydCAqL1xuLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLypcbi50Z2ktaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICB9XG4gICovXG4vKlxuOjpuZy1kZWVwICBtYXQtYnV0dG9uLXRvZ2dsZS50Z2ktYnV0dG9uLXRvZ2dsZSAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB9XG4qL1xuLnRnaS1pY29uLXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi8qICByaWdodCBwYXJ0ICovXG4vKiBmaW5kICovXG4uZmluZC1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKlxuOjpuZy1kZWVwIG1hdC10b29sYmFyLmZpbmQtbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4qL1xuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLmZpbmQtZnVsbC13aWR0aCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICovXG59XG5cbi5maW5kLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtZ3JvdXAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XG59XG5cbi50Z2ktY2xpZW50LW51bSB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbn1cblxuLyogaWNvbiBidXR0b25zICovXG4udGdpLWljb24tZG93bmxvYWQtc2l6ZSB7XG4gIC8qIGhlaWdodDogMzhweDsgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnRnaS1pY29uLXNoYXJlLXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi50b29sYmFyLWljb24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICAvKiBwYWRkaW5nLWxlZnQ6IDI1cHg7ICovXG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uc2lkZW5hdi1pY29uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50Z2ktYnV0dG9uLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/loans/loan-list/loan-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/loans/loan-list/loan-list.component.ts ***!
    \********************************************************/

  /*! exports provided: LoanListComponent */

  /***/
  function srcAppLoansLoanListLoanListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanListComponent", function () {
      return LoanListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/model/entity-state.interface */
    "./src/app/shared/model/entity-state.interface.ts");
    /* harmony import */


    var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/services/entity-state.service */
    "./src/app/shared/services/entity-state.service.ts");
    /* harmony import */


    var _auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../auth/user.service */
    "./src/app/auth/user.service.ts");
    /* harmony import */


    var _loan_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../loan-list.service */
    "./src/app/loans/loan-list.service.ts");

    var LoanListComponent =
    /*#__PURE__*/
    function () {
      function LoanListComponent(router, userSrv, loansSrv, loansStateSrv, snackBarSrv) {
        _classCallCheck(this, LoanListComponent);

        this.router = router;
        this.userSrv = userSrv;
        this.loansSrv = loansSrv;
        this.loansStateSrv = loansStateSrv;
        this.snackBarSrv = snackBarSrv; // @ViewChild(LoanTableComponent, {static: false}) loanTableCmp: LoanTableComponent;

        this.currentUser$ = null;
        this.currentLoans$ = null; // public curLoanList$: Observable<LoanInterface[]> = null;
        // --------------------------------------------------------------

        this.simpleSnackBarRef = null;
        this.isLoansChanged$ = null; // --------------------------------------------------------------

        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isFilter = false; // netesa

        this._loanView = '';
        this._renderLoanArr = null;
        loansStateSrv.context = "LoanListComponent";
      }

      _createClass(LoanListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.currentUser$ = this.userSrv.curUser$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) {
            // console.log(`\tPIPE: LoanListComponent.OnInit() tap currentUser$:%O`, user);
            if (_this3.userSrv.isAnonymUser(user)) {
              _this3.onDestroySub$.next(true); // befor!


              _this3.loansSrv.clearLoanList(); // this.onDestroySub$.next(true);

            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$));
          this.currentLoans$ = this.loansSrv.curLoanList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (loans) {
            // console.log(`\tPIPE: LoanListComponent.OnInit() tap currentLoans$:%O`, loans,);
            if (_this3.loansSrv.isWrongLoanList(loans)) {
              if (_this3.userSrv.isCurUserAuth()) {
                _this3.loansSrv.loadLoanList(_this3.loansStateSrv); // setTimeout(() => {
                //   this.loansSrv.loadLoanList(this.loansStateSrv);
                // }, 1200);

              }
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (loans) {
            // console.log(`\tPIPE: LoanListComponent.OnInit() map currentLoans$:%O`, loans,);
            if (_this3.loansSrv.isWrongLoanList(loans)) {
              return null;
            }

            if (!Array.isArray(loans) || loans.length === 0) {
              return null;
            }

            return loans;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$));
          this.isLoansChanged$ = this.loansStateSrv.isEntityChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) {
            // console.log(`\tPIPE: LoanListComponent.OnInit() IsEntityChangedInterface:%O`, r,);
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].NOSET) {
              if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET) {
                if (_this3.simpleSnackBarRef != null) {
                  _this3.simpleSnackBarRef.dismiss();

                  _this3.simpleSnackBarRef = null;
                }

                return {
                  op: 'NOSET',
                  isEnd: false,
                  opResult: 'NOSET'
                };
              }
            } else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD) {
              if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET) {
                if (_this3.simpleSnackBarRef != null) {
                  _this3.simpleSnackBarRef.dismiss();

                  _this3.simpleSnackBarRef = null;
                }

                return {
                  op: 'LOAD',
                  isEnd: false,
                  opResult: 'NOSET'
                };
              } else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR) {
                _this3.simpleSnackBarRef = _this3.snackBarSrv.open("".concat(r.message), 'X', {
                  duration: 0,
                  panelClass: 'mat-snack-bar-container_err'
                });
                return {
                  op: 'LOAD',
                  isEnd: true,
                  opResult: 'ERROR'
                };
              } else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS) {
                // if (this.loanTableCmp) {
                //   this.loanTableCmp.dataSource.data = this.loansSrv.curLoanList; // OK
                //   // console.log(`\tPIPE: LoanListComponent.OnInit() LoanTableCmp:%O loansSrv.curLoanList:%O`,
                //   //               this.loanTableCmp, this.loansSrv.curLoanList);
                // }
                return {
                  op: 'LOAD',
                  isEnd: true,
                  opResult: 'SUCCESS'
                };
              }
            }
            /*
            else if (r.op === EntityStateEnum.DELETE) {
            if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
              if (this.simpleSnackBarRef != null) {
                this.simpleSnackBarRef.dismiss();
                this.simpleSnackBarRef = null;
              }
              return {op: 'DELETE', isEnd: false, opResult: 'NOSET'};
            } else if (!r.isEnd && r.opResult === EntityChangeResultEnum.ERROR) { // Error
              this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`,
                'X', {
                duration: 0,
                panelClass: 'mat-snack-bar-container_err'
              });
              return {op: 'DELETE', isEnd: true, opResult: 'ERROR'};
            } else if (r.isEnd && r.opResult === EntityChangeResultEnum.SUCCESS) {
              this.simpleSnackBarRef =
                this.snackBarSrv.open(`Selected Loan has been deleted!`,
                'X', {
                duration: 0,
                panelClass: 'mat-snack-bar-container_info'
              });
              return {op: 'DELETE', isEnd: true, opResult: 'SUCCESS'};
            }
            } */

          })); // ngOnInit       
        }
      }, {
        key: "buttonToggleChange",
        value: function buttonToggleChange(ev) {// console.log('buttonToggleChange ev -> %O', ev);
        }
      }, {
        key: "filter",
        value: function filter() {
          this.isFilter = !this.isFilter;
        }
      }, {
        key: "loanViewChanged",
        value: function loanViewChanged(ev) {
          // console.log('LoanListComponent.loanViewChanged(ev) view=%s', ev);
          this.loanView = ev;
        }
      }, {
        key: "renderLoansChanged",
        value: function renderLoansChanged(ev) {
          // console.log('LoanListComponent.renderLoansChanged(ev) loanArr=%O', ev);
          this.renderLoanArr = ev;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // this.loansSrv.clearLoanList(); // auto loaded
          if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
          }
        }
      }, {
        key: "loanView",
        get: function get() {
          return this._loanView;
        },
        set: function set(val) {
          // console.log('LoanListComponent.loanView(val) val=%s', val);
          this._loanView = val;
        }
      }, {
        key: "renderLoanArr",
        get: function get() {
          return this._renderLoanArr;
        },
        set: function set(val) {
          this._renderLoanArr = val;
        }
      }]);

      return LoanListComponent;
    }();

    LoanListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }, {
        type: _loan_list_service__WEBPACK_IMPORTED_MODULE_9__["LoanListService"]
      }, {
        type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    LoanListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loan-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loan-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-list.component.html")).default,
      providers: [_shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"]],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loan-list.component.scss */
      "./src/app/loans/loan-list/loan-list.component.scss")).default]
    })], LoanListComponent);
    /***/
  },

  /***/
  "./src/app/loans/loan-list/loan-table/loan-table.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/loans/loan-list/loan-table/loan-table.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoansLoanListLoanTableLoanTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.loan-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.loan-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.loan-row td {\n  border-bottom-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvbG9hbnMvbG9hbi1saXN0L2xvYW4tdGFibGUvbG9hbi10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9hbnMvbG9hbi1saXN0L2xvYW4tdGFibGUvbG9hbi10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxtQkFBQTtBQ0NKOztBREVFO0VBQ0Usc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xvYW5zL2xvYW4tbGlzdC9sb2FuLXRhYmxlL2xvYW4tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICB0ci5sb2FuLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzc3NztcclxuICB9XHJcbiAgXHJcbiAgdHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gIH1cclxuICBcclxuICAubG9hbi1yb3cgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICB9XHJcbiBcclxuICAiLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50ci5sb2FuLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xufVxuXG50ci5sb2FuLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmxvYW4tcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/loans/loan-list/loan-table/loan-table.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/loans/loan-list/loan-table/loan-table.component.ts ***!
    \********************************************************************/

  /*! exports provided: LoanTableComponent */

  /***/
  function srcAppLoansLoanListLoanTableLoanTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanTableComponent", function () {
      return LoanTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js"); // import { EntityStateService } from '../../../shared/services/entity-state.service';
    // import { UserService } from '../../../auth/user.service';
    // import { LoanListService } from '../../loan-list.service';
    // import { LOAN_DATA } from './mock-data';


    var LoanTableComponent =
    /*#__PURE__*/
    function () {
      function LoanTableComponent(router, route) {
        _classCallCheck(this, LoanTableComponent);

        this.router = router;
        this.route = route;
        this.currentUser$ = null;
        this.currentLoans$ = null;
        this.isLoansChanged$ = null;
        this.displayedColumns = ['productName', 'loanId', 'firstName', 'lastName', 'clientState', 'loanAmount', 'totalBalance', 'disbursementDate', 'creditOfficer', 'lastModified', 'loanStatus' // // ??? makarov
        ];
        this._loanView = '';
        this.renderLoanList$ = null;
        this.renderLoanListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](); // this.dataSource.sort = this.sort;

        this.dataSource.filterPredicate = function (data, filter) {
          // console.log('LoanTableComponent dataSource.filterPredicate() data=%O filter=%s',
          //               data, filter);
          var dataStr = data.loanStatus.toLowerCase().trim();
          return dataStr.indexOf(filter) != -1;
        };
      }

      _createClass(LoanTableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.dataSource.data = this.loanArr;
          this.dataSource.sort = this.sort;
          var sortState = {
            active: 'loanId',
            direction: 'desc'
          };
          this.sort.active = sortState.active;
          this.sort.direction = sortState.direction;
          this.sort.sortChange.emit(sortState);
          this.renderLoanList$ = this.dataSource.connect().asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loans) {
            // console.log('\tPIPE: LoanTableComponent.OnInit() renderLoanList:%O', loans);
            _this4.renderLoanListChange.emit(loans);
          }));
        }
      }, {
        key: "onTblRowClick",
        value: function onTblRowClick(loan) {
          // console.log(`\tPIPE: LoanTableComponent.OnInit() clicked Loan:%O`, loan);
          // this.router.navigate([`/loans`, loan.loanId, 'overview']);
          // this.router.navigate([loan.loanId, 'loans'], {relativeTo: this.route});
          this.router.navigate(["/clients", loan.clientId, 'loans']);
        }
      }, {
        key: "loanView",
        get: function get() {
          return this._loanView;
        },
        set: function set(val) {
          // console.log('LoanTableComponent.loanView(val) val=%s', val);
          this._loanView = val;
          this.dataSource.filter = val;
        }
      }]);

      return LoanTableComponent;
    }();

    LoanTableComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')], LoanTableComponent.prototype, "loanArr", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('loan-view')], LoanTableComponent.prototype, "loanView", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], {
      static: true
    })], LoanTableComponent.prototype, "matTbl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      static: true
    })], LoanTableComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('render-loans')], LoanTableComponent.prototype, "renderLoanListChange", void 0);
    LoanTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loan-table',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loan-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loans/loan-list/loan-table/loan-table.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loan-table.component.scss */
      "./src/app/loans/loan-list/loan-table/loan-table.component.scss")).default]
    })], LoanTableComponent);
    /***/
  },

  /***/
  "./src/app/loans/loan.interface.ts":
  /*!*****************************************!*\
    !*** ./src/app/loans/loan.interface.ts ***!
    \*****************************************/

  /*! exports provided: WrongLoan, WrongLoanList */

  /***/
  function srcAppLoansLoanInterfaceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrongLoan", function () {
      return WrongLoan;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WrongLoanList", function () {
      return WrongLoanList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var WrongLoan = {
      productName: '000000',
      loanId: '000000',
      firstName: 'WRONG',
      lastName: 'WRONG'
    };
    var WrongLoanList = [WrongLoan];
    /***/
  },

  /***/
  "./src/app/loans/loans-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/loans/loans-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoansRoutingModule */

  /***/
  function srcAppLoansLoansRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoansRoutingModule", function () {
      return LoansRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/guard/auth.guard */
    "./src/app/shared/guard/auth.guard.ts");
    /* harmony import */


    var _loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loan-list/loan-list.component */
    "./src/app/loans/loan-list/loan-list.component.ts");

    var routes = [{
      path: '',
      component: _loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_5__["LoanListComponent"],
      canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];

    var LoansRoutingModule = function LoansRoutingModule() {
      _classCallCheck(this, LoansRoutingModule);
    };

    LoansRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], LoansRoutingModule);
    /***/
  },

  /***/
  "./src/app/loans/loans.module.ts":
  /*!***************************************!*\
    !*** ./src/app/loans/loans.module.ts ***!
    \***************************************/

  /*! exports provided: LoansModule */

  /***/
  function srcAppLoansLoansModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoansModule", function () {
      return LoansModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_ng_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/ng-material.module */
    "./src/app/shared/ng-material.module.ts");
    /* harmony import */


    var _loans_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./loans-routing.module */
    "./src/app/loans/loans-routing.module.ts");
    /* harmony import */


    var _loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./loan-list/loan-list.component */
    "./src/app/loans/loan-list/loan-list.component.ts");
    /* harmony import */


    var _loan_list_loan_list_filter_settings_loan_list_filter_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./loan-list/loan-list-filter-settings/loan-list-filter-settings.component */
    "./src/app/loans/loan-list/loan-list-filter-settings/loan-list-filter-settings.component.ts");
    /* harmony import */


    var _loan_list_loan_table_loan_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./loan-list/loan-table/loan-table.component */
    "./src/app/loans/loan-list/loan-table/loan-table.component.ts"); // import { FormsModule } from '@angular/forms';
    // import { MatRadioModule } from '@angular/material/radio';


    var LoansModule = function LoansModule() {
      _classCallCheck(this, LoansModule);
    };

    LoansModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_loan_list_loan_list_component__WEBPACK_IMPORTED_MODULE_5__["LoanListComponent"], _loan_list_loan_list_filter_settings_loan_list_filter_settings_component__WEBPACK_IMPORTED_MODULE_6__["LoanListFilterSettingsComponent"], _loan_list_loan_table_loan_table_component__WEBPACK_IMPORTED_MODULE_7__["LoanTableComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], // FormsModule,
      // MatRadioModule,
      _shared_ng_material_module__WEBPACK_IMPORTED_MODULE_3__["NgMaterialModule"], _loans_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoansRoutingModule"]]
    })], LoansModule);
    /***/
  }
}]);
//# sourceMappingURL=loans-loans-module-es5.js.map