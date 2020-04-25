(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"themeString$ | async as themeString\">\n<div [className]=\"themeString\">\n\n\n<ng-container *ngIf=\"(currentUser$ | async) as curUser\">\n  <ng-container *ngIf=\"isSmallScreen$ | async as isSmallScreen\">\n\n\n    <!-- <div [className]=\"themeString\"> -->\n    <mat-sidenav-container fullscreen >\n      <mat-sidenav-content>\n        <mat-toolbar  color=\"primary\">\n          <img [src]=\"location.prepareExternalUrl('assets/img/TGI-logo.png')\" height=\"56\" alt=\"TGI Brooks Capital\" title=\"TGI Brooks Capital\">\n          <!-- <ng-container *ngIf=\"header$ | async as header\">\n            <span class=\"page-title\">{{ header.title }}</span>\n          </ng-container> -->\n          \n          <span class=\"nav-spacer\"></span>\n\n          <!-- <a mat-button *ngIf=\"isSmallScreen.matches\" target=\"_blank\"\n              href=\"https://github.com/sergeynetesa/project-mgr-mysql\"\n              aria-label=\"GitHub Repository\">\n            <img class=\"docs-github-logo\"\n              src=\"../assets/img/homepage/github-circle-white-transparent.svg\"\n              alt=\"angular\">\n          </a>\n          <a mat-button *ngIf=\"!isSmallScreen.matches\" target=\"_blank\"\n            href=\"https://github.com/sergeynetesa/project-mgr-mysql\"\n            aria-label=\"GitHub Repository\">\n            <img class=\"docs-angular-logo\"\n                  src=\"../assets/img/homepage/github-circle-white-transparent.svg\"\n                  alt=\"angular\">\n            GitHub\n          </a> -->\n          <div>\n            <button mat-button [matMenuTriggerFor]=\"menu\">              \n              <mat-icon aria-hidden=\"false\">\n                format_color_fill\n              </mat-icon> \n              Theme     \n            </button>\n            <mat-menu #menu=\"matMenu\" >\n              <button mat-menu-item (click)=\"changeTheme('dark-theme')\">Dark</button>\n              <button mat-menu-item (click)=\"changeTheme('light-theme')\">Light</button>\n              <button mat-menu-item (click)=\"changeTheme('custom-theme')\">Custom Fun</button> <!--  -->\n            </mat-menu>\n          </div>\n\n          <ng-container *ngIf=\"userSrv.isCurUserAuth()\">          \n            <!-- <a mat-button aria-label=\"Settings\">          \n              Settings\n              <i class=\"material-icons\">settings_applications</i>\n            </a> -->\n            <button mat-button *ngIf=\"!isSmallScreen.matches\"\n                      class=\"topnav-icon\" \n                      [matMenuTriggerFor]=\"settingsMenu\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Logout\">settings_applications</mat-icon>\n              Settings\n            </button>\n            <button mat-button *ngIf=\"isSmallScreen.matches\"\n                      class=\"topnav-icon\" \n                      [matMenuTriggerFor]=\"settingsMenu\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Logout\">settings_applications</mat-icon>\n            </button>\n            <mat-menu #settingsMenu=\"matMenu\"> \n              <div class=\"menu-group\">user settings</div>\n              <button mat-menu-item>Manage Users</button>\n              <div class=\"menu-group\">app settings</div>            \n              <button mat-menu-item>Product</button>\n              <button mat-menu-item>Workflow</button>\n              <button mat-menu-item>Fees</button>\n              <div class=\"menu-group\">my settings</div>\n              <button mat-menu-item>My Account</button>\n              <button mat-menu-item>Logout</button>\n            </mat-menu>\n\n            <button mat-button *ngIf=\"!isSmallScreen.matches\"\n                      class=\"topnav-icon\" \n                      (click)=\"logout()\">\n              <mat-icon aria-hidden=\"false\" aria-label=\"Logout\">exit_to_app</mat-icon>\n              Logout\n            </button>\n              <button mat-button *ngIf=\"isSmallScreen.matches\" \n                      class=\"topnav-icon\" (click)=\"logout()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"Logout\">exit_to_app</mat-icon>    \n              </button>\n          </ng-container>\n        </mat-toolbar>\n        \n        <mat-toolbar class=\"search-menu\" *ngIf=\"userSrv.isCurUserAuth()\">\n\n          <div class=\"flex-container-left\">\n\n            <!-- <div class=\"flex-row\"> \n              <div class=\"flex-item\">\n                <button mat-button routerLink=\"/home\" routerLinkActive=\"active-page\"><mat-icon>home</mat-icon>&nbsp;Home</button>\n              </div>\n            </div> -->\n\n            <div class=\"flex-row\"> \n              <div class=\"flex-item\">\n                <button mat-icon-button routerLink=\"/home\" routerLinkActive=\"active-page\"><mat-icon>home</mat-icon></button>\n                <button mat-button [matMenuTriggerFor]=\"clientsMenu\">Clients</button>\n                <mat-menu #clientsMenu=\"matMenu\">\n                  <button mat-menu-item routerLink=\"/clients\" routerLinkActive=\"active-page\">All Clients</button>\n                </mat-menu>\n              </div>\n            </div>\n                \n                <div class=\"flex-row\">            \n                  <div class=\"flex-item\">           \n                    <button mat-button [matMenuTriggerFor]=\"loanApplicationsMenu\">Loan Applications</button>\n                    <mat-menu #loanApplicationsMenu=\"matMenu\">\n                      <button mat-menu-item routerLink=\"/loanapplications\" routerLinkActive=\"active-page\">All Loan Applications</button>\n                    </mat-menu>\n                  </div>\n                </div>\n                \n                <div class=\"flex-row\">     \n                <div class=\"flex-item\"> \n                  <button mat-button [matMenuTriggerFor]=\"disbursedLoansMenu\">Loans</button>\n                  <mat-menu #disbursedLoansMenu=\"matMenu\">\n                    <button mat-menu-item routerLink=\"/loans\" routerLinkActive=\"active-page\">All Loans</button>\n                  </mat-menu>\n                </div>\n                </div>\n        </div>\n<!--  --> \n          <span class=\"nav-spacer\"></span>\n        \n    <div class=\"flex-container-right\" >\n      <div class=\"flex-row\"> \n        <div class=\"flex-item\">\n\n              <form class=\"search-form\">\n                <mat-form-field class=\"search-full-width\" \n                                appearance=\"outline\" \n                                floatLabel=\"auto\">\n                  <input  matInput \n                          placeholder=\"Search\"                    \n                  >\n                  <!-- <mat-label>Search</mat-label>  -->\n                  <mat-icon matPrefix>search</mat-icon> \n                </mat-form-field>\n              </form>\n            </div>\n          </div>\n          \n          <div class=\"flex-row\" >              \n            <div class=\"flex-item\"> \n              <button mat-icon-button class=\"topnav-icon\"\n                      [matMenuTriggerFor]=\"createMenu\">\n                    <mat-icon aria-hidden=\"false\" aria-label=\"Logout\">add</mat-icon>    \n              </button>\n              <mat-menu #createMenu=\"matMenu\"> \n                <div class=\"menu-group\">Create</div>\n                <button mat-menu-item>Client</button>\n                <button mat-menu-item>Company</button>\n                <button mat-menu-item>Loan</button>\n                <button mat-menu-item>Deposit</button>\n              </mat-menu>\n            </div>\n          </div>\n          \n          <div class=\"flex-row\">              \n            <div class=\"flex-item\"> \n              <button mat-icon-button class=\"topnav-icon\"\n                        [matMenuTriggerFor]=\"toolsMenu\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"Logout\">apps</mat-icon>    \n              </button>\n              <mat-menu #toolsMenu=\"matMenu\"> \n                <div class=\"menu-group\">Tools</div>\n                <button mat-menu-item>Calculator</button>\n              </mat-menu>\n\n           </div>\n          </div>\n        </div>\n      </mat-toolbar>\n        <div class=\"mat-typography page-wrapper\">\n          <router-outlet></router-outlet>\n        </div>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n    <ng-template *ngIf=\"!isSmallScreen\">\n      Loading stuff...\n    </ng-template>\n  \n      <!-- </div>     -->\n    </ng-container>\n  </ng-container>\n\n</div>\n</ng-container> \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Auth home</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"currentUser$ | async as u\">\n<ng-container *ngIf=\"isUserChanged$ | async as r\">\n\n<div class=\"loging-page\">\n\n  <mat-card class=\"loging-card\">\n    <mat-card-content style=\"width: 100%;\" >\n\n      <div class=\"login-content\">\n\n        <!-- loging left part -->\n        <div class=\"loging-left-part\">\n\n          <div class=\"login-left-content\">\n            <form (ngSubmit)=\"onLoginSubmit(loginFG)\" [formGroup]=\"loginFG\" >\n              <mat-card-header >\n                <mat-card-title class=\"text-color\">LOGIN</mat-card-title>\n              </mat-card-header>\n              <mat-card-content>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <!-- 'legacy' | 'standard' | 'fill' | 'outline'; -->\n                    <mat-form-field class=\"full-width\" appearance=\"fill\" floatLabel=\"auto\">\n                      <input matInput type=\"text\" \n                              placeholder=\"Enter email\" \n                              formControlName=\"login_email\" \n                              #email_login>\n                    </mat-form-field>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field class=\"full-width\" appearance=\"fill\" floatLabel=\"auto\">\n                      <input matInput type=\"password\" \n                              placeholder=\"Enter Password\"\n                              formControlName=\"login_pwd\" \n                              #pwd_login>\n                      <!-- <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                                                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                            </button> -->\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <mat-card-actions>\n                  <div class=\"row\">\n                    <div class=\"action-login-1\">\n                      <button mat-raised-button color=\"accent\" [disabled]=\"loginFG.invalid\">\n                        LOGIN\n                      </button>\n                    </div>\n                    <div class=\"action-login-2\">\n                      <mat-label class=\"text-color\">New to TGI Capti Loans?</mat-label>\n                      <!-- <mat-label class=\"label-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n                        <a routerLink=\"/signup\">Sing Up</a></mat-label> -->\n                        <a mat-button routerLink=\"/signup\">Sing Up</a>\n                    </div>\n                  </div>\n                </mat-card-actions>\n                <div class=\"row action-login-3\">\n                  <div class=\"col\">\n                    <!-- <mat-label routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"text-color\"\n                        routerLink=\"/forgotpassword\">Forgot your password?</a></mat-label> -->\n                        <a mat-button routerLink=\"/signup\">Forgot your password?</a>\n                  </div>\n                </div>\n              </mat-card-content>\n            </form>\n \n          </div>\n \n        </div>\n        <!-- loging left part end-->\n\n        <!-- loging right part -->\n        <div class=\"loging-right-part\" [style.background]=\"'#13A878'\">\n\n          <div class=\"loging-right-context\">\n            <div class=\"row-right\">\n              <div class=\"col-icon\">\n                <mat-icon matPrefix>local_shipping</mat-icon>\n              </div>\n              <div class=\"col-text\">\n                <div class=\"row\">\n                  <mat-label>Lorem ipsum dolor</mat-label>\n                </div>\n                <div class=\"row\">\n                  <mat-label>Nulla nec facilisis eleifend. one</mat-label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row-right\">\n              <div class=\"col-icon\">\n                <mat-icon matPrefix>person</mat-icon>\n              </div>\n              <div class=\"col-text\">\n                <div class=\"row\">\n                  <mat-label>Lorem ipsum dolor</mat-label>\n                </div>\n                <div class=\"row\">\n                  <mat-label>Nulla nec facilisis eleifend. two</mat-label>\n                </div>\n              </div>\n            </div>\n            <div class=\"row-right\">\n              <div class=\"col-icon\">\n                <mat-icon matPrefix>system_update</mat-icon>\n              </div>\n              <div class=\"col-text\">\n                <div class=\"row\">\n                  <mat-label>Lorem ipsum dolor</mat-label>\n                </div>\n                <div class=\"row\">\n                  <mat-label>Nulla nec facilisis eleifend. three</mat-label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- loging right part end -->\n      </div>\n\n    </mat-card-content>\n  </mat-card>\n\n</div>\n</ng-container>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tgi-body-component\">\n\n  <ng-container *ngIf=\"(activatedRouteParentParams$ | async ) as prodId\"></ng-container>\n  <ng-container *ngIf=\"(currentUser$ | async )\"></ng-container>\n  <ng-container *ngIf=\"(currentLoanProduct$ | async) as loanProduct\">\n\n    <div class=\"flex-container\">\n\n      <div class=\"flex-column-left\">\n\n        <div class=\"flex-item  tgi-mat-card-left\">\n          <mat-card>\n            <mat-card-header>\n              Loan Application Information\n            </mat-card-header>\n          </mat-card>\n\n          <app-business-loan-app-detail>\n          </app-business-loan-app-detail>\n\n        </div>\n      </div>\n\n      <div class=\"flex-column-right\">\n        <div class=\"flex-item\">\n          <app-loan-app-params [data-source]=\"loanProduct\" \n                              (current-amortiz-type)=\"onCurrentAmortizType($event)\"\n                              [loan-params-prepare]=\"isPrepareLoanParams\"\n                              (loan-params-get)=\"loanParamsGet($event)\" \n                              >\n          </app-loan-app-params>\n        </div>\n\n        <div class=\"flex-item\">\n          <app-loan-app-fees [data-source]=\"loanProduct\"\n                            [fees-params-prepare]=\"isPrepareFeesParams\"\n                            (fees-params-get)=\"feesParamsGet($event)\"\n          >\n          </app-loan-app-fees>\n        </div>\n\n        <div class=\"flex-item\">\n          <app-loan-credit-line-options  [data-source]=\"loanProduct\" \n                        [credit-line-params-prepare]=\"isPrepareCreditLinesParams\"\n                        (credit-line-params-get)=\"creditLineParamsGet($event)\"\n          >\n          </app-loan-credit-line-options>\n        </div>\n\n        <div class=\"flex-item\">\n              <mat-card class=\"tgi-mat-card-buisnesss-approve\">\n                  <mat-card-header>\n              \n                        <mat-card-subtitle class=\"tgi-button-approve-loan\">\n                          <button mat-raised-button color=\"accent\"  \n                                  (click)=\"onApproveLoanOk(loanProduct)\">\n                                  Approve Loan\n                          </button>\n                          <button mat-raised-button color=\"accent\" \n                                  class=\"tgi-button-approve-loan-cancel\" \n                                  (click)=\"onApproveLoanCancel(loanProduct)\">\n                                  Cancel\n                          </button>\n                        </mat-card-subtitle>\n                        \n                  </mat-card-header>\n              </mat-card>\n        </div>\n        <!--  -->\n        <div class=\"flex-item\">\n\n          <app-amortization-schedule (askDataSendTokenTimeInMs)=\"dataForAmortizationScheduleGet($event)\" \n                                      [dataForAmortizationSchedule]=\"dataForAmortizationSchedule\" \n                                      [amortizationTypes]=\"loanProduct.amortizationTypes\" \n                                      [currentAmortizType]=\"currentAmortizType\">\n            </app-amortization-schedule>\n        </div>\n\n      </div>\n    </div>\n\n  </ng-container>\n\n  <ng-container *ngIf=\"(isLoanProductChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n      <div class=\"spinner-container\">\n        <span>LOADING LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>\n  \n  <ng-container *ngIf=\"(isLoanAppChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'UPDATE')\">\n      <div class=\"spinner-container\">\n        <span>APPROVE BUSINESS LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tgi-body-component\">\n\n  <ng-container *ngIf=\"(activatedRouteParentParams$ | async ) as prodId\"></ng-container>  \n  <ng-container *ngIf=\"(currentUser$ | async )\"></ng-container>\n\n  <ng-container *ngIf=\"(currentLoanProduct$ | async) as loanProduct\">\n\n      <div class=\"flex-container\">\n\n        <div class=\"flex-column-left\">\n\n          <div class=\"flex-item  tgi-mat-card-left\">\n\n            <mat-card>\n              <mat-card-header>\n                Loan Application Information\n              </mat-card-header>\n            </mat-card>\n\n            <app-personal-loan-app-detail>\n            </app-personal-loan-app-detail>\n\n\n          </div>\n        </div>\n        \n        <div class=\"flex-column-right\">\n\n          <div class=\"flex-item\">   \n            <app-loan-app-params [data-source]=\"loanProduct\" \n                        (current-amortiz-type)=\"onCurrentAmortizType($event)\"\n                        [loan-params-prepare]=\"isPrepareLoanParams\"\n                        (loan-params-get)=\"loanParamsGet($event)\"                           \n                        >\n            </app-loan-app-params>                                 \n          </div>\n\n          <div class=\"flex-item\">   \n            <app-loan-app-fees [data-source]=\"loanProduct\"\n                        [fees-params-prepare]=\"isPrepareFeesParams\"\n                        (fees-params-get)=\"feesParamsGet($event)\"\n            >\n\n            </app-loan-app-fees> \n          </div>\n\n          <div class=\"flex-item\">  \n            \n              <mat-card class=\"tgi-mat-card-personal-approve\">\n                <mat-card-header>\n\n                      <mat-card-subtitle class=\"tgi-button-approve-loan\">\n                        <button mat-raised-button color=\"accent\"\n                                (click)=\"onApproveLoanOk(loanProduct)\">\n                                Approve Loan\n                        </button>\n                        <button mat-raised-button color=\"accent\"\n                                class=\"tgi-button-approve-loan-cancel\"\n                                (click)=\"onApproveLoanCancel(loanProduct)\">\n                                Cancel\n                        </button>\n                      </mat-card-subtitle>\n                      \n                </mat-card-header>\n              </mat-card>\n\n          </div>\n\n           <div class=\"flex-item\">\n\n            <app-amortization-schedule (askDataSendTokenTimeInMs)=\"dataForAmortizationScheduleGet($event)\" \n                       [dataForAmortizationSchedule]=\"dataForAmortizationSchedule\" \n                       [amortizationTypes]=\"loanProduct.amortizationTypes\"\n                       [currentAmortizType]=\"currentAmortizType\">\n            </app-amortization-schedule>\n\n          </div> \n\n        </div>      \n      </div>\n\n  </ng-container>\n\n  <ng-container *ngIf=\"(isLoanProductChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n      <div class=\"spinner-container\">\n        <span>LOADING LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>\n  \n  <ng-container *ngIf=\"(isLoanAppChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'UPDATE')\">\n      <div class=\"spinner-container\">\n        <span>APPROVE PERSONAL LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/home/home.component */ "./src/app/auth/home/home.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");







const routes = [
    {
        path: 'login',
        component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'home',
        component: _auth_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'clients',
        loadChildren: () => Promise.all(/*! import() | clients-clients-module */[__webpack_require__.e("default~clients-clients-module~loanapplications-loanapplications-module~loans-loans-module"), __webpack_require__.e("clients-clients-module")]).then(__webpack_require__.bind(null, /*! ./clients/clients.module */ "./src/app/clients/clients.module.ts")).then(mod => mod.ClientsModule),
        canLoad: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'loanapplications',
        loadChildren: () => Promise.all(/*! import() | loanapplications-loanapplications-module */[__webpack_require__.e("default~clients-clients-module~loanapplications-loanapplications-module~loans-loans-module"), __webpack_require__.e("loanapplications-loanapplications-module")]).then(__webpack_require__.bind(null, /*! ./loanapplications/loanapplications.module */ "./src/app/loanapplications/loanapplications.module.ts")).then(mod => mod.LoanApplicationsModule),
        canLoad: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'loans',
        loadChildren: () => Promise.all(/*! import() | loans-loans-module */[__webpack_require__.e("default~clients-clients-module~loanapplications-loanapplications-module~loans-loans-module"), __webpack_require__.e("loans-loans-module")]).then(__webpack_require__.bind(null, /*! ./loans/loans.module */ "./src/app/loans/loans.module.ts")).then(mod => mod.LoansModule),
        canLoad: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: '**',
        component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes
            // ,{preloadingStrategy: NoPreloading, enableTracing: false, useHash: true}
            // ,{ enableTracing: true, useHash: true }
            // , {preloadingStrategy: PreloadAllModules}
            // , { preloadingStrategy: NoPreloading, useHash: true }
            , { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["NoPreloading"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\nmat-nav-list {\n  padding-top: 0;\n  a {\n    border-bottom: 1px solid #f3f3f3;\n    &.active-page {\n      background: rgba(#ff4081, 0.6) !important;;\n      color: white !important;;\n    }\n  }\n}\n*/\n.mat-sidenav-container {\n  flex: 1 1 auto;\n  height: 100%;\n}\n.page-wrapper {\n  padding: 0px 5px;\n  /* 0 0px; */\n}\n/* background-color */\n.light-theme .page-wrapper {\n  background-color: #E2E2E2;\n  /* #F2F2F2  #E0E2E2; */\n  /* #D0E5D8; */\n}\n.page-title {\n  padding-left: 16px;\n}\n/*\n.page-list-sidenav {\n  width: 220px;\n  box-shadow: 3px 0 6px rgba(0, 0, 0, 0.24);\n}\n*/\n.sidenav-toggle {\n  position: fixed;\n  right: 20px;\n  bottom: 10px;\n  z-index: 4;\n}\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  /* color: #fff; */\n  padding-left: 5px;\n}\n.sidenav-icon {\n  text-decoration: none;\n  padding: 0 10px;\n}\n.nav-spacer {\n  flex: 1 1 auto;\n}\n.nav-icon {\n  height: 26px;\n  margin: 0 4px 0 0;\n  vertical-align: middle;\n}\n.nav-icon-small {\n  height: 21px;\n  margin: 0 7px 2px 0;\n  vertical-align: middle;\n}\n.docs-angular-logo {\n  height: 26px;\n  margin: 0 4px 3px 0;\n  vertical-align: middle;\n}\n.docs-github-logo {\n  height: 24px;\n  margin: 0 7px 2px 0;\n  vertical-align: middle;\n}\n.search-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n/*\n::ng-deep mat-toolbar.search-menu {\n  background-color: grey;\n}\n*/\n::ng-deep .mat-form-field.search-full-width > div.mat-form-field-wrapper {\n  margin: 0;\n  padding: 0;\n  /* background-color: lightgray; */\n}\n.search-full-width {\n  width: 100%;\n}\n.menu-group {\n  padding-left: 10px;\n  background-color: lightgray;\n  border: 0px solid black;\n}\n::ng-deep .search-menu.mat-toolbar-row, .mat-toolbar-single-row {\n  /* height: 64px; */\n  height: auto;\n  min-height: 64px;\n}\n.flex-container-left {\n  /*\n  height: 100%;\n  padding: 0;\n  margin: 0;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  */\n  /* flex-wrap: wrap; */\n  /* justify-content: center; */\n  /* vertical-align: middle; */\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  /*   \n  align-items: center;\n  white-space: nowrap;\n  */\n  padding-left: 20px;\n  padding-right: 20px;\n  /* border: 1px solid blue;  */\n}\n.flex-row {\n  flex-direction: row;\n  display: flex;\n}\n.flex-item {\n  padding-left: 0px;\n  margin-left: 0px;\n}\n.flex-item button {\n  padding-left: 20px;\n  margin-left: 0px;\n}\n.flex-container-right {\n  min-width: 350px;\n  max-width: 500px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-self: right;\n  /*   \n  align-items: center;\n  white-space: nowrap;\n  */\n  padding-left: 20px;\n  padding-right: 20px;\n  /* border: 1px solid red;  */\n}\n::ng-deep .search-full-width .mat-form-field-infix {\n  /* padding: .5em 0; */\n  width: 250px;\n  padding: 0.3em 0 0.4em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0NBQUE7QUFZQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0VBQW1CLFdBQUE7QUNFckI7QURDQSxxQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFBMkIsc0JBQUE7RUFBd0IsYUFBQTtBQ0lyRDtBREZBO0VBQ0Usa0JBQUE7QUNLRjtBREhBOzs7OztDQUFBO0FBTUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDTUY7QURIQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNNRjtBREhBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FDTUY7QURIQTtFQUNFLGNBQUE7QUNNRjtBREpBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNPRjtBRExBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNRRjtBRE5BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNTRjtBRFBBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNVRjtBRFJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1dGO0FEVEE7Ozs7Q0FBQTtBQUtBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQ1lGO0FEVkE7RUFDRSxXQUFBO0FDYUY7QURWQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ2FGO0FEVkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2FGO0FEVkE7RUFDRTs7Ozs7Ozs7R0FBQTtFQVNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUVBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFFQTs7O0dBQUE7RUFJQSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsNkJBQUE7QUNVRjtBRFJBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDV0Y7QURUQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNZRjtBRFRBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ1lGO0FEVEE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0E7OztHQUFBO0VBSUEsa0JBQUE7RUFDQSxtQkFBQTtFQUVBLDRCQUFBO0FDVUY7QURQQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDVUYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxubWF0LW5hdi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGEge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmM2YzO1xuICAgICYuYWN0aXZlLXBhZ2Uge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgjZmY0MDgxLCAwLjYpICFpbXBvcnRhbnQ7O1xuICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7O1xuICAgIH1cbiAgfVxufVxuKi9cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucGFnZS13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4IDVweDsgIC8qIDAgMHB4OyAqL1xufVxuXG4vKiBiYWNrZ3JvdW5kLWNvbG9yICovXG4ubGlnaHQtdGhlbWUgLnBhZ2Utd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFMkUyRTI7IC8qICNGMkYyRjIgICNFMEUyRTI7ICovIC8qICNEMEU1RDg7ICovXG59XG4ucGFnZS10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi8qXG4ucGFnZS1saXN0LXNpZGVuYXYge1xuICB3aWR0aDogMjIwcHg7XG4gIGJveC1zaGFkb3c6IDNweCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuKi9cbi5zaWRlbmF2LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgei1pbmRleDogNDtcbn1cblxuLnRvcG5hdi1pY29uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59IFxuXG4uc2lkZW5hdi1pY29uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ubmF2LWljb24ge1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbjogMCA0cHggMCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm5hdi1pY29uLXNtYWxsIHtcbiAgaGVpZ2h0OiAyMXB4O1xuICBtYXJnaW46IDAgN3B4IDJweCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRvY3MtYW5ndWxhci1sb2dvIHtcbiAgaGVpZ2h0OiAyNnB4O1xuICBtYXJnaW46IDAgNHB4IDNweCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRvY3MtZ2l0aHViLWxvZ28ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMCA3cHggMnB4IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uc2VhcmNoLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLypcbjo6bmctZGVlcCBtYXQtdG9vbGJhci5zZWFyY2gtbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4qL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5zZWFyY2gtZnVsbC13aWR0aCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICovXG59XG4uc2VhcmNoLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtZ3JvdXAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XG59IFxuXG46Om5nLWRlZXAgLnNlYXJjaC1tZW51Lm1hdC10b29sYmFyLXJvdywgLm1hdC10b29sYmFyLXNpbmdsZS1yb3cge1xuICAvKiBoZWlnaHQ6IDY0cHg7ICovXG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogNjRweDtcbn1cblxuLmZsZXgtY29udGFpbmVyLWxlZnQgIHtcbiAgLypcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgKi9cbiAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuIFxuICAvKiAgIFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAqL1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG59XG4uZmxleC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmxleC1pdGVtIGJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyLXJpZ2h0IHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1zZWxmOiByaWdodDtcbiAgLyogICBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgKi9cbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbjo6bmctZGVlcCAuc2VhcmNoLWZ1bGwtd2lkdGggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgLyogcGFkZGluZzogLjVlbSAwOyAqL1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDAuM2VtIDAgMC40ZW0gMDtcbn1cbiIsIi8qXG5tYXQtbmF2LWxpc3Qge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2YzZjM7XG4gICAgJi5hY3RpdmUtcGFnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCNmZjQwODEsIDAuNikgIWltcG9ydGFudDs7XG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDs7XG4gICAgfVxuICB9XG59XG4qL1xuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICAvKiAwIDBweDsgKi9cbn1cblxuLyogYmFja2dyb3VuZC1jb2xvciAqL1xuLmxpZ2h0LXRoZW1lIC5wYWdlLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTJFMkUyO1xuICAvKiAjRjJGMkYyICAjRTBFMkUyOyAqL1xuICAvKiAjRDBFNUQ4OyAqL1xufVxuXG4ucGFnZS10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLypcbi5wYWdlLWxpc3Qtc2lkZW5hdiB7XG4gIHdpZHRoOiAyMjBweDtcbiAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4qL1xuLnNpZGVuYXYtdG9nZ2xlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAxMHB4O1xuICB6LWluZGV4OiA0O1xufVxuXG4udG9wbmF2LWljb24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLnNpZGVuYXYtaWNvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuXG4ubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubmF2LWljb24ge1xuICBoZWlnaHQ6IDI2cHg7XG4gIG1hcmdpbjogMCA0cHggMCAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubmF2LWljb24tc21hbGwge1xuICBoZWlnaHQ6IDIxcHg7XG4gIG1hcmdpbjogMCA3cHggMnB4IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kb2NzLWFuZ3VsYXItbG9nbyB7XG4gIGhlaWdodDogMjZweDtcbiAgbWFyZ2luOiAwIDRweCAzcHggMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRvY3MtZ2l0aHViLWxvZ28ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMCA3cHggMnB4IDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zZWFyY2gtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLypcbjo6bmctZGVlcCBtYXQtdG9vbGJhci5zZWFyY2gtbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4qL1xuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5zZWFyY2gtZnVsbC13aWR0aCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICovXG59XG5cbi5zZWFyY2gtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWVudS1ncm91cCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBib3JkZXI6IDBweCBzb2xpZCBibGFjaztcbn1cblxuOjpuZy1kZWVwIC5zZWFyY2gtbWVudS5tYXQtdG9vbGJhci1yb3csIC5tYXQtdG9vbGJhci1zaW5nbGUtcm93IHtcbiAgLyogaGVpZ2h0OiA2NHB4OyAqL1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lci1sZWZ0IHtcbiAgLypcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbW96LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgKi9cbiAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cbiAgLyogdmVydGljYWwtYWxpZ246IG1pZGRsZTsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAvKiAgIFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAqL1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xufVxuXG4uZmxleC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZmxleC1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5mbGV4LWl0ZW0gYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZmxleC1jb250YWluZXItcmlnaHQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLXNlbGY6IHJpZ2h0O1xuICAvKiAgIFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAqL1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbjo6bmctZGVlcCAuc2VhcmNoLWZ1bGwtd2lkdGggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgLyogcGFkZGluZzogLjVlbSAwOyAqL1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDAuM2VtIDAgMC40ZW0gMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _shared_services_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/screen.service */ "./src/app/shared/services/screen.service.ts");
/* harmony import */ var _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/theme.service */ "./src/app/shared/services/theme.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");






// import { PAGE_ROUTES, PageRoutes, PageRoute } from './pages/pages.routes';




let AppComponent = class AppComponent {
    // @HostListener('window:beforeunload', ['$event'])
    // onReload(e: BeforeUnloadEvent) {
    //   e.preventDefault();
    //   e.returnValue = false;
    //
    //   console.log('AppComponent onReload() reload event => %O', e);
    //
    //   this.dataRefreshSrv.setRefreshCmd('data');
    // }
    constructor(location, router, userSrv, screenSrv, themeService, 
    // private dataRefreshSrv: DataRefreshService,
    tokenStorageSrv // netesa +    
    ) {
        this.location = location;
        this.router = router;
        this.userSrv = userSrv;
        this.screenSrv = screenSrv;
        this.themeService = themeService;
        this.tokenStorageSrv = tokenStorageSrv;
        this.currentUser$ = null; // netesa +
        console.log('* AppComponent.constructor()');
    }
    ngOnInit() {
        console.log('* AppComponent.ngOnInit()');
        // console.log('AppComponent.ngOnInit() location.path=%O', 
        //     this.location.prepareExternalUrl('assets/img/TGI-logo.png'));
        const userInSession = this.tokenStorageSrv.getUser();
        if (userInSession) {
            this.userSrv.pushUser(userInSession);
        }
        this.currentUser$ = this.userSrv.curUser$ // netesa +
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((user) => {
            console.log(`\tPIPE: AppComponent.OnInit() currentUser$:%O`, user);
        }));
        this.isSmallScreen$ = this.screenSrv.isSmallScreen$;
        this.themeString$ = this.themeService.currentTheme
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((theme) => {
            // console.log('AppComponent ngOnInit() theme  => %O', theme);    
        }));
        // this.themeService.currentTheme.subscribe(theme => {
        //   console.log('AppComponent ngOnInit() APP module theme  => %O', theme);
        //   this.themeString = theme;
        // });
    }
    changeTheme(theme) {
        // console.log('AppComponent changeTheme() theme => %O', theme);  
        this.themeService.setTheme(theme);
    }
    logout() {
        this.tokenStorageSrv.signOut(); // netesa +
        this.userSrv.logoutUser();
        this.router.navigateByUrl('/');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _shared_services_screen_service__WEBPACK_IMPORTED_MODULE_7__["ScreenService"] },
    { type: _shared_services_theme_service__WEBPACK_IMPORTED_MODULE_8__["ThemeService"] },
    { type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"] // netesa +    
     }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('growInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'scale3d(.3, .3, .3)'
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(`150ms ease-in`)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(`150ms ease-out`, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0,
                        transform: 'scale3d(.3, .3, .3)'
                    }))
                ])
            ])
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PathLocationStrategy"] }],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_ng_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/ng-material.module */ "./src/app/shared/ng-material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/interceptor/jwt.interceptor */ "./src/app/shared/interceptor/jwt.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _auth_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/home/home.component */ "./src/app/auth/home/home.component.ts");
/* harmony import */ var _clients_client_detail_fund_buisness_loan_fund_buisness_loan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clients/client-detail/fund-buisness-loan/fund-buisness-loan.component */ "./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.ts");
/* harmony import */ var _clients_client_detail_fund_personal_loan_fund_personal_loan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./clients/client-detail/fund-personal-loan/fund-personal-loan.component */ "./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







// import { Router } from '@angular/router';









// import { ClientsModule } from './clients/clients.module'; 

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
            _auth_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _clients_client_detail_fund_buisness_loan_fund_buisness_loan_component__WEBPACK_IMPORTED_MODULE_14__["FundBuisnessLoanComponent"],
            _clients_client_detail_fund_personal_loan_fund_personal_loan_component__WEBPACK_IMPORTED_MODULE_15__["FundPersonalLoanComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _shared_ng_material_module__WEBPACK_IMPORTED_MODULE_7__["NgMaterialModule"],
            // ClientsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].appBaseHref },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _shared_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__["JwtInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/auth/home/home.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/auth/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loging-page {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/*\n.text-color {\n   color: white;\n}\n*/\n\n.loging-card {\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-content {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* loging left part */\n\n.loging-left-part {\n  min-width: 360px;\n  width: 60%;\n  /* background-color: #151920;  */\n  /* #151920;   grey; #151920; */\n}\n\n.login-left-content {\n  margin: 40px;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.action-login-1 {\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.action-login-2 {\n  margin-top: 8px;\n}\n\n.action-login-3 {\n  margin-top: 8px;\n  text-align: left;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.label-link {\n  margin-left: 10px;\n}\n\n/* loging right part */\n\n.loging-right-part {\n  min-width: 360px;\n  width: 40%;\n  /* background-color: #13A878; */\n  display: flex;\n  align-items: center;\n  justify-content: right;\n  padding: 60px 0 40px 0;\n}\n\n.loging-right-context {\n  margin-left: 30px;\n}\n\n.col-icon {\n  margin-right: 20px;\n}\n\n.col-text {\n  margin-right: 30px;\n}\n\n.row-right {\n  display: flex;\n  flex-direction: row;\n  margin-left: 0px;\n  margin-bottom: 30px;\n}\n\n/* \n  ::ng-deep .full-width  .mat-form-field-flex {\n   background-color: white;\n  }\n*/\n\n@media (max-width: 1150px) {\n  .loging-left-part {\n    width: 100%;\n  }\n\n  /* */\n  .loging-right-part {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVDOzs7O0NBQUE7O0FBS0E7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDTDs7QURFQztFQUNJLGFBQUE7RUFDQSxlQUFBO0FDQ0w7O0FER0cscUJBQUE7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtFQUFpQyw4QkFBQTtBQ0F0Qzs7QURHRztFQUNFLFlBQUE7QUNBTDs7QURFRztFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NMOztBREVHO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FDQ0w7O0FERUc7RUFDRyxnQkFBQTtFQUNBLGlCQUFBO0FDQ047O0FEQ0c7RUFDRSxlQUFBO0FDRUw7O0FEQUU7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7QUNHTDs7QURBRztFQUNFLFdBQUE7QUNHTDs7QURBRztFQUNFLGlCQUFBO0FDR0w7O0FEQUcsc0JBQUE7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNFTDs7QURHRztFQUNJLGlCQUFBO0FDQVA7O0FER0M7RUFDSSxrQkFBQTtBQ0FMOztBREdHO0VBQ0Usa0JBQUE7QUNBTDs7QURHRztFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBTDs7QURFQzs7OztDQUFBOztBQUtBO0VBQ0U7SUFDSSxXQUFBO0VDQ0w7O0VEQ0MsSUFBQTtFQUNBO0lBQ0csV0FBQTtFQ0VKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luZy1wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgICAgXHJcbiAgIH1cclxuIC8qXHJcbiAudGV4dC1jb2xvciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiB9XHJcbiAqL1xyXG4gLmxvZ2luZy1jYXJkIHtcclxuICAgICB3aWR0aDogODAlOyAgICBcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcbiBcclxuIC5sb2dpbi1jb250ZW50IHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgfVxyXG4gXHJcbiAgIFxyXG4gICAvKiBsb2dpbmcgbGVmdCBwYXJ0ICovXHJcbiBcclxuICAgLmxvZ2luZy1sZWZ0LXBhcnQge1xyXG4gICAgIG1pbi13aWR0aDogMzYwcHg7IFxyXG4gICAgIHdpZHRoOiA2MCU7IFxyXG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxNTE5MjA7ICAqLy8qICMxNTE5MjA7ICAgZ3JleTsgIzE1MTkyMDsgKi9cclxuICAgfVxyXG4gXHJcbiAgIC5sb2dpbi1sZWZ0LWNvbnRlbnQge1xyXG4gICAgIG1hcmdpbjogNDBweDtcclxuICAgfVxyXG4gICAucm93IHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jb2wge1xyXG4gICAgIGZsZXg6IDE7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICB9XHJcbiBcclxuICAgLmFjdGlvbi1sb2dpbi0xIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDsgXHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4OyBcclxuICAgfVxyXG4gICAuYWN0aW9uLWxvZ2luLTIge1xyXG4gICAgIG1hcmdpbi10b3A6IDhweDsgXHJcbiAgfVxyXG4gIC5hY3Rpb24tbG9naW4tMyB7XHJcbiAgICAgbWFyZ2luLXRvcDogOHB4OyBcclxuICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuIFxyXG4gICAuZnVsbC13aWR0aCB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5sYWJlbC1saW5rIHtcclxuICAgICBtYXJnaW4tbGVmdDogMTBweDsgXHJcbiAgIH0gXHJcbiBcclxuICAgLyogbG9naW5nIHJpZ2h0IHBhcnQgKi9cclxuXHJcbiAgIC5sb2dpbmctcmlnaHQtcGFydCB7XHJcbiAgICAgbWluLXdpZHRoOiAzNjBweDtcclxuICAgICB3aWR0aDogNDAlO1xyXG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxM0E4Nzg7ICovXHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICAgcGFkZGluZzogNjBweCAwIDQwcHggMDtcclxuICAgfVxyXG4gXHJcbiBcclxuIFxyXG4gICAubG9naW5nLXJpZ2h0LWNvbnRleHQge1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgIH1cclxuIFxyXG4gLmNvbC1pY29uIHtcclxuICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jb2wtdGV4dCB7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4gICAucm93LXJpZ2h0IHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDBweDsgXHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXHJcbiAgIH1cclxuIC8qIFxyXG4gIDo6bmctZGVlcCAuZnVsbC13aWR0aCAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiovICBcclxuIEBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcclxuICAgLmxvZ2luZy1sZWZ0LXBhcnQge1xyXG4gICAgICAgd2lkdGg6MTAwJTsgICAgICBcclxuICAgfVxyXG4gICAvKiAqL1xyXG4gICAubG9naW5nLXJpZ2h0LXBhcnR7XHJcbiAgICAgIHdpZHRoOjEwMCU7ICBcclxuICAgfVxyXG4gICBcclxuIH0iLCIubG9naW5nLXBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qXG4udGV4dC1jb2xvciB7XG4gICBjb2xvcjogd2hpdGU7XG59XG4qL1xuLmxvZ2luZy1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4vKiBsb2dpbmcgbGVmdCBwYXJ0ICovXG4ubG9naW5nLWxlZnQtcGFydCB7XG4gIG1pbi13aWR0aDogMzYwcHg7XG4gIHdpZHRoOiA2MCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMxNTE5MjA7ICAqL1xuICAvKiAjMTUxOTIwOyAgIGdyZXk7ICMxNTE5MjA7ICovXG59XG5cbi5sb2dpbi1sZWZ0LWNvbnRlbnQge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29sIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYWN0aW9uLWxvZ2luLTEge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmFjdGlvbi1sb2dpbi0yIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uYWN0aW9uLWxvZ2luLTMge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYWJlbC1saW5rIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qIGxvZ2luZyByaWdodCBwYXJ0ICovXG4ubG9naW5nLXJpZ2h0LXBhcnQge1xuICBtaW4td2lkdGg6IDM2MHB4O1xuICB3aWR0aDogNDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTNBODc4OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA2MHB4IDAgNDBweCAwO1xufVxuXG4ubG9naW5nLXJpZ2h0LWNvbnRleHQge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLmNvbC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29sLXRleHQge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5yb3ctcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4vKiBcbiAgOjpuZy1kZWVwIC5mdWxsLXdpZHRoICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTUwcHgpIHtcbiAgLmxvZ2luZy1sZWZ0LXBhcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLyogKi9cbiAgLmxvZ2luZy1yaWdodC1wYXJ0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user.interface */ "./src/app/auth/user.interface.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _user_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-state.service */ "./src/app/auth/user-state.service.ts");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../token-storage.service */ "./src/app/auth/token-storage.service.ts");











// import { CustomValidators } from '../custom-validators';
let LoginComponent = class LoginComponent {
    constructor(route, router, fb, userSrv, userStateSrv, snackBarSrv, tokenStorageSrv // netesa +    
    ) {
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.userSrv = userSrv;
        this.userStateSrv = userStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.tokenStorageSrv = tokenStorageSrv;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isUserChanged$ = null;
        userSrv.logoutUser();
    }
    ngOnInit() {
        // console.log('LoginComponent ngOnInit()');
        this.returnUrl = '/clients';
        this.loginFG = this.fb.group({
            login_email: ['', {
                    validators: [
                    // Validators.required,
                    // Validators.email 
                    ], updateOn: 'change'
                }
            ],
            login_pwd: ['', {
                    validators: [
                    // Validators.required
                    ], updateOn: 'change'
                }
            ]
        });
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((user) => {
            if (typeof user.token === 'string' && user.token.length === 0) {
                const loginNameFC = this.loginFG.get('login_name');
                // loginNameFC.reset(null, {onlySelf: true, emitEvent: false}); // ~
                if (loginNameFC) {
                    loginNameFC.reset();
                    loginNameFC.setErrors(null);
                }
                const loginEmailFC = this.loginFG.get('login_email');
                if (loginEmailFC) {
                    loginEmailFC.reset();
                    loginEmailFC.setErrors(null);
                }
            }
        }));
        this.isUserChanged$ = this.userStateSrv.isUserChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((r) => {
            if (r.op === _user_interface__WEBPACK_IMPORTED_MODULE_6__["UserStateEnum"].LOGIN) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].SUCCESS) {
                    this.tokenStorageSrv.saveUser(r.userWithToken); // netesa +
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`User: '${r.userWithToken.user.name}' is logged in`, '', {
                            duration: 1000,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    this.simpleSnackBarRef.afterDismissed()
                        .subscribe((res) => {
                        // if (res.dismissedByAction) {
                        //   this.router.navigate([this.returnUrl]);
                        // }
                        this.router.navigateByUrl(this.returnUrl);
                    });
                }
            }
        }));
    }
    onLoginSubmit({ value, valid }) {
        /*  if (valid) { */
        // !!! comment for github
        //  value.login_email = 'testuser';
        //  value.login_pwd = 'testuserpassword';
        const u = { userName: value.login_email, password: value.login_pwd };
        // console.log('LoginComponent onLoginSubmit u -> %O', u);
        this.userSrv.loginUser(u, this.userStateSrv);
        // }
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _user_state_service__WEBPACK_IMPORTED_MODULE_8__["UserStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_10__["TokenStorageService"] // netesa +    
     }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        providers: [
            _user_state_service__WEBPACK_IMPORTED_MODULE_8__["UserStateService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/token-storage.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/token-storage.service.ts ***!
  \***********************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// const TOKEN_KEY = 'auth-token';  // netesa -
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    // netesa -
    // public saveToken(token: string) {
    //   window.sessionStorage.removeItem(TOKEN_KEY);
    //   window.sessionStorage.setItem(TOKEN_KEY, token);
    // }
    // public getToken(): string {
    //   return sessionStorage.getItem(TOKEN_KEY);
    // }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        let userInSession = sessionStorage.getItem(USER_KEY);
        if (userInSession === null)
            return null; // netesa - WrongUserWithJWT;
        return JSON.parse(userInSession);
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "./src/app/auth/user-state.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/user-state.service.ts ***!
  \********************************************/
/*! exports provided: UserStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStateService", function() { return UserStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.interface */ "./src/app/auth/user.interface.ts");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");





let UserStateService = class UserStateService {
    constructor() {
        this.isUserChangedInit = {
            op: _user_interface__WEBPACK_IMPORTED_MODULE_3__["UserStateEnum"].NOSET,
            isEnd: false,
            opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_4__["EntityChangeResultEnum"].NOSET,
            userWithToken: _user_interface__WEBPACK_IMPORTED_MODULE_3__["WrongUserWithJWT"]
        };
        this.isUserChangedSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.isUserChangedInit);
        this.isUserChanged$ = this.isUserChangedSub$.asObservable();
        this.isUserChangedValue = this.isUserChangedSub$.value;
        this.context = 'N/A';
    }
    reset() {
        this.isUserChangedSub$.next(this.isUserChangedInit);
    }
    complete() {
        this.isUserChangedSub$.complete();
    }
    next(userChangedState) {
        if (userChangedState) {
            this.isUserChangedSub$.next(userChangedState);
        }
        else {
            this.isUserChangedSub$.next(this.isUserChangedInit);
        }
    }
};
UserStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserStateService);



/***/ }),

/***/ "./src/app/auth/user.interface.ts":
/*!****************************************!*\
  !*** ./src/app/auth/user.interface.ts ***!
  \****************************************/
/*! exports provided: WrongUser, WrongUserWithJWT, UserStateEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongUser", function() { return WrongUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongUserWithJWT", function() { return WrongUserWithJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStateEnum", function() { return UserStateEnum; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const WrongUser = {
    id: -1,
    name: 'Wrong',
    email: 'Wrong',
    role: 'Wrong',
};
const WrongUserWithJWT = {
    token: '',
    user: null
};
var UserStateEnum;
(function (UserStateEnum) {
    UserStateEnum["NOSET"] = "NOSET";
    // ADD = 'ADD',
    // UPDATE = 'UPDATE',
    // DELETE = 'DELETE',
    UserStateEnum["SIGNUP"] = "SIGNUP";
    UserStateEnum["LOGIN"] = "LOGIN";
})(UserStateEnum || (UserStateEnum = {}));


/***/ }),

/***/ "./src/app/auth/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.interface */ "./src/app/auth/user.interface.ts");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_jwt_decoder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/jwt-decoder.service */ "./src/app/shared/services/jwt-decoder.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/services/server-status.service */ "./src/app/shared/services/server-status.service.ts");










// import {TokenStorageService} from "./token-storage.service"; // netesa -
let UserService = class UserService {
    constructor(http, serverStatusSrv, JwtDecoderSrv) {
        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.JwtDecoderSrv = JwtDecoderSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiAuthUrl;
        this.curUserSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curUser$ = this.curUserSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_user_interface__WEBPACK_IMPORTED_MODULE_5__["WrongUserWithJWT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curUserWithToken = _user_interface__WEBPACK_IMPORTED_MODULE_5__["WrongUserWithJWT"];
        // public curUserWithToken: UserWithTokenInterface = this.tss.getUser(); // netesa -
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curUser$
            .subscribe(user => {
            this.curUserWithToken = user;
            // if (user.token != "") {   // netesa -
            //     tss.saveUser(user);
            // } else {
            //     this.curUserWithToken = tss.getUser();
            // }
        });
    }
    isCurUserAuth() {
        if (this.curUserWithToken.token.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }
    isCurUserAnonym() {
        if (this.curUserWithToken === _user_interface__WEBPACK_IMPORTED_MODULE_5__["WrongUserWithJWT"]) {
            return true;
        }
        else {
            return false;
        }
    }
    isAnonymUser(user) {
        if (!user) {
            throw new Error('Parameter [user] is null');
        }
        else if (user === _user_interface__WEBPACK_IMPORTED_MODULE_5__["WrongUserWithJWT"]) {
            return true;
        }
        return false;
    }
    isWrongUser(user) {
        if (!user) {
            throw new Error('Parameter [user] is null');
        }
        else if (user === _user_interface__WEBPACK_IMPORTED_MODULE_5__["WrongUser"]) {
            return true;
        }
        return false;
    }
    // public signupUser(userInfo: UserInterface, stateService: UserStateService): void {
    //   if (stateService) {
    //     const isUserChangedEnter: IsUserChangedInterface = {
    //       op: UserStateEnum.SIGNUP,
    //       isEnd: false,
    //       opResult: ChangeResultEnum.NOSET,
    //       userWithToken: this.curUserWithToken
    //     };
    //     stateService.next(isUserChangedEnter);
    //   }
    //   this.http.post<UserInterface>(`${this.apiUrl}/auth/signup`, userInfo)
    //   .pipe(
    //     catchError((err: any): any => {
    //       let msg: string;
    //       let isUserChangedError: IsUserChangedInterface = null;
    //       if (stateService) {
    //         isUserChangedError = {
    //           op: UserStateEnum.SIGNUP,
    //           isEnd: true,
    //           opResult: ChangeResultEnum.ERROR,
    //           userWithToken: this.curUserWithToken
    //         };
    //       }
    //       if (err instanceof HttpErrorResponse) {
    //         const status = err.status;
    //         if (status >= 500) {
    //           msg = err.error ? (err.error.error ? err.error.error.message : err.message) : err.message;
    //           isUserChangedError.messageType = EntityMessageTypeEnum.ERROR;
    //           isUserChangedError.message = msg;
    //         } else {
    //           msg = err.statusText;
    //           isUserChangedError.messageType = EntityMessageTypeEnum.ERROR;
    //           isUserChangedError.message = msg;
    //         }
    //       } else {
    //         msg = 'UNKNOWN ERROR';
    //         isUserChangedError.messageType = EntityMessageTypeEnum.ERROR;
    //         isUserChangedError.message = msg;
    //       }
    //       if (stateService) {
    //         stateService.next(isUserChangedError);
    //       }
    //       this.onDestroySub$.next(true);
    //       return of('ERROR');
    //     }),
    //     takeUntil(this.onDestroySub$)
    //   ).subscribe(
    //     (userWithToken: UserWithTokenInterface) => {
    //       if (stateService) {
    //         const isUserChangedExit: IsUserChangedInterface = {
    //           op: UserStateEnum.SIGNUP,
    //           isEnd: true,
    //           opResult: ChangeResultEnum.SUCCESS,
    //           userWithToken
    //         };
    //         stateService.next(isUserChangedExit);
    //       }
    //       this.curUserSub$.next(userWithToken);
    //     }
    //   );
    // }
    loginUser(userInfo, stateService) {
        if (this.curUserWithToken.token.length !== 0) {
            this.curUserSub$.next(_user_interface__WEBPACK_IMPORTED_MODULE_5__["WrongUserWithJWT"]);
        }
        if (stateService) {
            const isUserChangedEnter = {
                op: _user_interface__WEBPACK_IMPORTED_MODULE_5__["UserStateEnum"].LOGIN,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET,
                userWithToken: this.curUserWithToken
            };
            stateService.next(isUserChangedEnter);
        }
        this.http.post(`${this.apiUrl}`, userInfo)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log('\tPIPE: UserService.loginUser().http.post().pipe().catchError(ANY): %O', err);
            let msg;
            let isUserChangedError = null;
            if (stateService) {
                isUserChangedError = {
                    op: _user_interface__WEBPACK_IMPORTED_MODULE_5__["UserStateEnum"].LOGIN,
                    isEnd: true,
                    opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR,
                    userWithToken: this.curUserWithToken
                };
            }
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const status = err.status;
                if (status === 0) {
                    msg = `HTTP failure response for ${err.url}`;
                }
                else if (status > 0 && status < 600) {
                    msg = `${status} - ${this.serverStatusSrv.getStatusText(status.toString())}`;
                }
                else {
                    msg = 'UNKNOWN ERROR';
                }
                isUserChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                isUserChangedError.message = msg;
            }
            if (stateService) {
                stateService.next(isUserChangedError);
            }
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('ERROR');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((userToken) => {
            // console.log(`\tSUBSCRIBE: UserService.loginUser().NEXT: user Token: %O`, userToken);
            let jwtPayload = this.JwtDecoderSrv.decodeJwtPayload(userToken.token);
            // console.log(`\tSUBSCRIBE: UserService.loginUser().NEXT: JWT Payload: %O`, jwtPayload);
            const aUser = {
                id: -1,
                name: userInfo.userName,
                email: userInfo.userName,
                role: 'Wrong'
            };
            if (jwtPayload != null) {
                try {
                    // aUser.id = jwtPayload.userId.xren; // WRONG
                    aUser.name = jwtPayload.sub;
                    aUser.role = jwtPayload.auth;
                }
                catch (ex) {
                    // console.log(`\tSUBSCRIBE: UserService.loginUser().NEXT: JWT Payload Decode Error: %O`, ex);
                    let isUserChangedError = null;
                    if (stateService) {
                        isUserChangedError = {
                            op: _user_interface__WEBPACK_IMPORTED_MODULE_5__["UserStateEnum"].LOGIN,
                            isEnd: true,
                            opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR,
                            userWithToken: this.curUserWithToken,
                            messageType: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR,
                            message: 'Wrong JWT Payload'
                        };
                        stateService.next(isUserChangedError);
                    }
                    return;
                } // catch
            }
            const userWithToken = {
                token: userToken.token,
                user: aUser
            };
            // console.log(`\tSUBSCRIBE: UserService.loginUser().NEXT: user Token: %O`, userWithToken);
            if (stateService) {
                const isUserChangedExit = {
                    op: _user_interface__WEBPACK_IMPORTED_MODULE_5__["UserStateEnum"].LOGIN,
                    isEnd: true,
                    opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS,
                    userWithToken
                };
                stateService.next(isUserChangedExit);
            }
            this.curUserSub$.next(userWithToken);
        });
    }
    // netesa +
    pushUser(user) {
        this.curUserSub$.next(user);
    }
    logoutUser() {
        if (this.curUserWithToken !== _user_interface__WEBPACK_IMPORTED_MODULE_5__["WrongUserWithJWT"]) {
            // this.tss.signOut();   // netesa -
            this.curUserSub$.next(_user_interface__WEBPACK_IMPORTED_MODULE_5__["WrongUserWithJWT"]);
        }
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_9__["ServerStatusService"] },
    { type: _shared_services_jwt_decoder_service__WEBPACK_IMPORTED_MODULE_7__["JwtDecoderService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail.interface.ts":
/*!******************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail.interface.ts ***!
  \******************************************************************/
/*! exports provided: WrongClientDetail, WrongClientDetailOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongClientDetail", function() { return WrongClientDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongClientDetailOverview", function() { return WrongClientDetailOverview; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const WrongClientDetail = {
    id: 0,
    profile: {
        firstName: 'WRONG',
        lastName: 'WRONG'
    }
};
const WrongClientDetailOverview = {
    id: 0,
    profile: {
        firstName: 'WRONG',
        lastName: 'WRONG'
    }
};
// ------------------
/*
    financials?: ClientDetailFinancialsInterface;
    documemts?: ClientDetailDocumemtsInterface;
    loans?: ClientDetailLoansInterface;
*/
/*
export interface ClientDetailFinancialsInterface {
    clientId: string;
}


export interface ClientDetailDocumemtsInterface {
    clientId: string;
}

*/


/***/ }),

/***/ "./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  /* margin-bottom: 10px; */\n  width: 100%;\n}\n\n/*  approve  buttons */\n\n::ng-deep .tgi-mat-card-buisnesss-approve.mat-card {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.tgi-button-approve-loan {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n::ng-deep .tgi-mat-card-buisnesss-approve .mat-card-header-text {\n  width: 100%;\n}\n\n.tgi-button-approve-loan-cancel {\n  margin-left: 20px;\n  margin-right: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Z1bmQtYnVpc25lc3MtbG9hbi9mdW5kLWJ1aXNuZXNzLWxvYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9mdW5kLWJ1aXNuZXNzLWxvYW4vZnVuZC1idWlzbmVzcy1sb2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ0RKOztBRElFO0VBRUUsYUFBQTtFQUVBLDZCQUFBO0FDSEo7O0FES0U7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFFQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQ05KOztBRFNFO0VBRUUsNkJBQUE7RUFDQyxXQUFBO0FDUEw7O0FEVUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEU0U7RUFDQyx5QkFBQTtFQUNDLFdBQUE7QUNOSjs7QURTRSxzQkFBQTs7QUFDRjtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ05GOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7QUNQRjs7QURVQTtFQUNFLFdBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9mdW5kLWJ1aXNuZXNzLWxvYW4vZnVuZC1idWlzbmVzcy1sb2FuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRnaS1ib2R5LWNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDsgXHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7IFxyXG4gIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtY29sdW1uLWxlZnQge1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xyXG4gIH1cclxuICAuZmxleC1jb2x1bW4tcmlnaHQge1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgZmxleC13cmFwOiB3cmFwOyBcclxuICBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgXHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWl0ZW0ge1xyXG4gIFxyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXHJcbiAgICAgd2lkdGg6IDEwMCU7IFxyXG4gIH1cclxuICBcclxuICAudGdpLW1hdC1jYXJkLWxlZnQge1xyXG4gICAgbWluLXdpZHRoOiAzNTBweDsgXHJcbiAgICAvKiB3aWR0aDogYXV0bzsgICovXHJcbiAgfVxyXG4gIDo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICB9XHJcbiAgICBcclxuICAvKiAgYXBwcm92ZSAgYnV0dG9ucyAqL1xyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1idWlzbmVzc3MtYXBwcm92ZS5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMTAwJTsgXHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1idWlzbmVzc3MtYXBwcm92ZSAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1hcHByb3ZlLWxvYW4tY2FuY2VsIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XHJcbn0iLCIudGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgLyogd2lkdGg6IGF1dG87ICAqL1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiAgYXBwcm92ZSAgYnV0dG9ucyAqL1xuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtYnVpc25lc3NzLWFwcHJvdmUubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1idWlzbmVzc3MtYXBwcm92ZSAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuLWNhbmNlbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FundBuisnessLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundBuisnessLoanComponent", function() { return FundBuisnessLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");
/* harmony import */ var _services_loan_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/loan-product.service */ "./src/app/clients/client-detail/services/loan-product.service.ts");
/* harmony import */ var _shared_services_entity_update_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../shared/services/entity-update.service */ "./src/app/shared/services/entity-update.service.ts");











// -----------
let FundBuisnessLoanComponent = class FundBuisnessLoanComponent {
    constructor(activatedRoute, router, userSrv, clientDetailSrv, loanProductSrv, loanProductStateSrv, loanAppUpdateSrv, loanAppStateSrv, snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userSrv = userSrv;
        this.clientDetailSrv = clientDetailSrv;
        this.loanProductSrv = loanProductSrv;
        this.loanProductStateSrv = loanProductStateSrv;
        this.loanAppUpdateSrv = loanAppUpdateSrv;
        this.loanAppStateSrv = loanAppStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.currentUser$ = null;
        this.currentLoanProduct$ = null;
        this.activatedRouteParentParams$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isLoanProductChanged$ = null;
        this.isLoanAppChanged$ = null;
        this._curAmortizType = 0;
        this._isPrepareParams = 0;
        this._isPrepareFeesParams = 0;
        this._isPrepareCreditLinesParams = 0;
        this.businessLoanAppObj = {
            loanApplicationId: 0,
            productId: 0,
            amortizationType: '',
            loanAmount: 0,
            interestRate: 0,
            disbursementDate: '1900-01-01',
            firstDisbursementDate: '1900-01-01',
            fixedRepaymentDate: false,
            term: 0,
            penaltyRate: 0,
            fees: null,
            installment: 0,
            revolvingCreditLine: false,
            drawnDownFixed: false,
            creditLineValueUtil: '1900-01-01'
        };
        this.dataForAmortizationSchedule = {};
        loanProductStateSrv.context = 'Business Loan Product Load';
        loanAppStateSrv.context = 'Business Loan App Update Srv';
    }
    get currentAmortizType() {
        return this._curAmortizType;
    }
    set currentAmortizType(val) {
        this._curAmortizType = val;
        //  this.currentAmortizType.emit(val);
    }
    get isPrepareLoanParams() {
        return this._isPrepareParams;
    }
    set isPrepareLoanParams(val) {
        this._isPrepareParams = val;
    }
    get isPrepareFeesParams() {
        return this._isPrepareFeesParams;
    }
    set isPrepareFeesParams(val) {
        this._isPrepareFeesParams = val;
    }
    get isPrepareCreditLinesParams() {
        return this._isPrepareCreditLinesParams;
    }
    set isPrepareCreditLinesParams(val) {
        this._isPrepareCreditLinesParams = val;
    }
    ngOnInit() {
        // console.log('ApproveBuisnessLoanAppComponent.ngOnInit() loanProductStateSrv=%o loanAppStateSrv=%O',
        //           this.loanProductStateSrv, this.loanAppStateSrv );
        this.clientId = this.clientDetailSrv.curClientDetail.id;
        this.isPrepareLoanParams = 0;
        this.isPrepareFeesParams = 0;
        this.isPrepareCreditLinesParams = 0;
        this.activatedRouteParentParams$ = this.activatedRoute.params
            .pipe(
        // tap ((pm: Params) => {
        //   console.log('ApproveBuisnessLoanAppComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', pm);
        // }),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((pm) => pm.prodId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((prodId) => {
            console.log('ApproveBuisnessLoanAppComponent activatedRouteParentParams$ activatedRoute.params.prodId -> %s', prodId);
            this.productId = prodId;
            this.loanProductSrv.loadLoanProduct(+prodId, this.loanProductStateSrv);
        }));
        // --------------------- 
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                this.loanProductSrv.clearCurLoanProduct();
            }
        }));
        // ---------------------
        this.currentLoanProduct$ = this.loanProductSrv.curLoanProduct$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((product) => {
            if (this.loanProductSrv.isLoanProductWrong(product)) {
                return null;
            }
            return product;
        }));
        // ---------------------
        this.isLoanProductChanged$ = this.loanProductStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            // console.log(`\tPIPE: ApproveBuisnessLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'LOAD', isEnd: false, opResult: 'NOSET' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR) {
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].DELETE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'DELETE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Client has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
        this.isLoanAppChanged$ = this.loanAppStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            // console.log(`\tPIPE: ApproveBuisnessLoanAppComponent.OnInit() loanAppStateSrv.IsEntityChangedInterface:%O`, r,);
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].UPDATE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'UPDATE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'UPDATE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`BUSINESS: ${r.message}`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    this.simpleSnackBarRef.afterDismissed()
                        .subscribe((res) => {
                        // if (res.dismissedByAction) {
                        //   this.router.navigate([this.returnUrl]);
                        // }
                        this.router.navigateByUrl(`/clients/${this.clientDetailSrv.curClientDetail.id}/overview`);
                    });
                    return { op: 'UPDATE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
        // end OnInit
    }
    onCurrentAmortizType(ev) {
        // console.log('ApproveBuisnessLoanAppComponent.onCurrentAmortizType(ev) view = %s', ev);
        this.currentAmortizType = ev;
    }
    loanParamsGet(ev) {
        // console.log('ApproveBuisnessLoanAppComponent.loanParamsGet() loanParams= %O', ev);
        this.personalLoanAppObjFill(ev);
        // makarov  ???
        this.dataForAmortizationSchedule = {
            productId: this.businessLoanAppObj.productId,
            currentAmortizType: this.businessLoanAppObj.amortizationType,
            askDataSendTokenTimeInMs: this.askDataSendTokenTimeInMs,
            params: {
                loanAmount: this.businessLoanAppObj.loanAmount,
                interestRate: this.businessLoanAppObj.interestRate,
                startDate: this.businessLoanAppObj.disbursementDate,
                term: this.businessLoanAppObj.term,
                firstRepaymentDate: this.businessLoanAppObj.firstDisbursementDate // "2019-12-31"
            }
        };
        console.log('ApprovePersonalLoanAppComponent.feesParamsGet() dataForAmortizationSchedule -> %O', this.dataForAmortizationSchedule);
        this.isPrepareLoanParams = 0;
        // console.log('ApproveBuisnessLoanAppComponent.loanParamsGet() businessLoanAppObj= %O', 
        //     this.businessLoanAppObj);
    }
    feesParamsGet(ev) {
        // console.log('ApproveBuisnessLoanAppComponent.feesParamsGet() feesParams= %O', ev);
        this.businessLoanAppObjByFeesFill(ev);
        // console.log('ApproveBuisnessLoanAppComponent.feesParamsGet() businessLoanAppObj= %O', 
        //     this.businessLoanAppObj);
        this.isPrepareFeesParams = 0;
    }
    creditLineParamsGet(ev) {
        // console.log('ApproveBuisnessLoanAppComponent.creditLineParamsGet() loanParams= %O', ev);
        this.businessLoanAppObjByCreditLineFill(ev);
        this.isPrepareCreditLinesParams = 0;
        console.log('ApproveBuisnessLoanAppComponent.creditLineParamsGet() businessLoanAppObj= %O', this.businessLoanAppObj);
    }
    fetchBuisnessLoanAppInfo(clientData) {
        if (clientData && clientData.loanApplications &&
            Array.isArray(clientData.loanApplications) &&
            clientData.loanApplications.length > 0) {
            const personalLoanApp = clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'active' &&
                    loan.type.toLocaleLowerCase() === 'business';
            });
            return personalLoanApp;
            // console.log('ApproveBuisnessLoanAppComponent.fetchPersonalLoanInfo() %O', this.personalLoan);
            // if (this.personalLoan != undefined) {
            // }
        }
    }
    fetchLoanProductAmortizTypes(productData) {
        if (productData && productData.amortizationTypes &&
            Array.isArray(productData.amortizationTypes) &&
            productData.amortizationTypes.length > 0) {
            return productData.amortizationTypes;
        }
        return;
    }
    personalLoanAppObjFill(ev) {
        const personalLoanApp = this.fetchBuisnessLoanAppInfo(this.clientDetailSrv.curClientDetail);
        if (!personalLoanApp) {
            throw new Error('Active Personal Loan App has not found.');
        }
        this.businessLoanAppObj.loanApplicationId = personalLoanApp.id;
        this.businessLoanAppObj.productId = personalLoanApp.productId;
        const loanProductAmortizTypes = this.fetchLoanProductAmortizTypes(this.loanProductSrv.curLoanProduct);
        if (!loanProductAmortizTypes) {
            throw new Error('Loan Product Amortization Types has not found.');
        }
        this.businessLoanAppObj.amortizationType = loanProductAmortizTypes[ev.amortType];
        this.businessLoanAppObj.loanAmount = +ev.loanAmount;
        if (ev.amortType === 2) {
            this.businessLoanAppObj.interestRate = +ev.interestRate2;
        }
        else {
            this.businessLoanAppObj.interestRate = +ev.interestRate;
        }
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        this.businessLoanAppObj.disbursementDate = (new Date(ev.disbursDate)).toLocaleDateString('en-CA', options);
        this.businessLoanAppObj.firstDisbursementDate = (new Date(ev.firstDisbursDate)).toLocaleDateString('en-CA', options);
        this.businessLoanAppObj.fixedRepaymentDate = ev.isFixedRepaymentDate;
        this.businessLoanAppObj.term = ev.term;
        this.businessLoanAppObj.penaltyRate = this.loanProductSrv.curLoanProduct.defaultPenaltyRate;
        this.businessLoanAppObj.fees = null;
        this.businessLoanAppObj.installment = +ev.installment;
        // this.businessLoanAppObj.drawnDownFixed = (this.loanProductSrv.curLoanProduct as any).drawnDownFixed;
    }
    businessLoanAppObjByFeesFill(ev) {
        let feesArr = [];
        if (ev && Array.isArray(ev) && ev.length > 0) {
            for (var i = 0; i < ev.length; i++) {
                feesArr.push({
                    value: +ev[i].value,
                    feeId: 0,
                    feeType: ev[i].type,
                    tax: +ev[i].tax,
                    feeHandling: ''
                });
            }
            this.businessLoanAppObj.fees = feesArr;
        }
    }
    businessLoanAppObjByCreditLineFill(ev) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        this.businessLoanAppObj.revolvingCreditLine = ev.revolvingCreditLine;
        this.businessLoanAppObj.drawnDownFixed = ev.drawnDownFixed;
        this.businessLoanAppObj.creditLineValueUtil = (new Date(ev.creditLineValueUtil)).toLocaleDateString('en-CA', options);
    }
    onApproveLoanOk(loanProduct) {
        console.log('ApproveBuisnessLoanAppComponent.onApproveLoanOk()  loanProduct -> %O', loanProduct);
        this.isPrepareLoanParams = 1;
        this.isPrepareFeesParams = 1;
        this.isPrepareCreditLinesParams = 1;
        this.loanAppUpdateSrv.approveLoanApp(this.clientId, this.businessLoanAppObj, this.loanAppStateSrv);
    }
    onApproveLoanCancel(loanProduct) {
        // console.log('ApproveBuisnessLoanAppComponent.onApproveLoanCancel()   loanProduct -> %O', loanProduct);
        this.router.navigateByUrl(`/clients/${this.clientDetailSrv.curClientDetail.id}/overview`);
    }
    dataForAmortizationScheduleGet(ev) {
        if (ev === 0) {
            console.log('ApprovePersonalLoanAppComponent.dataForamortizationScheduleGet() ev === 0  ev -> %O', ev);
            return;
        }
        console.log('ApprovePersonalLoanAppComponent.dataForamortizationScheduleGet()  ev -> %O', ev);
        this.askDataSendTokenTimeInMs = ev;
        this.isPrepareLoanParams = 1;
    }
    ngOnDestroy() {
        this.loanProductSrv.clearCurLoanProduct(); // auto loaded
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
FundBuisnessLoanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__["ClientDetailService"] },
    { type: _services_loan_product_service__WEBPACK_IMPORTED_MODULE_9__["LoanProductService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _shared_services_entity_update_service__WEBPACK_IMPORTED_MODULE_10__["EntityUpdateService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['LOAN_APP_STATE_SERVICE',] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
FundBuisnessLoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fund-buisness-loan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fund-buisness-loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"],
            { provide: 'LOAN_APP_STATE_SERVICE', useClass: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] }
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fund-buisness-loan.component.scss */ "./src/app/clients/client-detail/fund-buisness-loan/fund-buisness-loan.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('LOAN_APP_STATE_SERVICE'))
], FundBuisnessLoanComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------------- */\n.tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n::ng-deep .tgi-mat-card-right.mat-card {\n  /* margin-bottom: 0px; */\n  width: 100%;\n}\n/*  approve  buttons */\n::ng-deep .tgi-mat-card-personal-approve.mat-card {\n  margin-bottom: 10px;\n  width: 100%;\n}\n.tgi-button-approve-loan {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n}\n::ng-deep .tgi-mat-card-personal-approve .mat-card-header-text {\n  width: 100%;\n}\n.tgi-button-approve-loan-cancel {\n  margin-left: 20px;\n  margin-right: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Z1bmQtcGVyc29uYWwtbG9hbi9mdW5kLXBlcnNvbmFsLWxvYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9mdW5kLXBlcnNvbmFsLWxvYW4vZnVuZC1wZXJzb25hbC1sb2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLHNCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNIRjtBRE1BO0VBRUUsYUFBQTtFQUVBLDZCQUFBO0FDTEY7QURPQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FDUkY7QURXQTtFQUVFLDZCQUFBO0VBQ0MsV0FBQTtBQ1RIO0FEWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDVEY7QURZQTtFQUNDLHdCQUFBO0VBQ0MsV0FBQTtBQ1RGO0FEWUEsc0JBQUE7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ1ZGO0FEYUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtBQ1hGO0FEY0E7RUFDRSxXQUFBO0FDWEY7QURjQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9mdW5kLXBlcnNvbmFsLWxvYW4vZnVuZC1wZXJzb25hbC1sb2FuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4udGdpLWJvZHktY29tcG9uZW50IHtcclxuICBwYWRkaW5nLXRvcDogMzJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IFxyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7IFxyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uLWxlZnQge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG4uZmxleC1jb2x1bW4tcmlnaHQge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gIGZsZXgtd3JhcDogd3JhcDsgXHJcblxyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcblxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xyXG4gICB3aWR0aDogMTAwJTsgXHJcbn1cclxuXHJcbi50Z2ktbWF0LWNhcmQtbGVmdCB7XHJcbiAgbWluLXdpZHRoOiAzNTBweDsgXHJcbiAgLyogd2lkdGg6IGF1dG87ICAqL1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XHJcbiAvKiBtYXJnaW4tYm90dG9tOiAwcHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7IFxyXG59XHJcblxyXG4vKiAgYXBwcm92ZSAgYnV0dG9ucyAqL1xyXG5cclxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcGVyc29uYWwtYXBwcm92ZS5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMTAwJTsgXHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1wZXJzb25hbC1hcHByb3ZlIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbi1jYW5jZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNjRweDtcclxufSIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tICovXG4udGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgLyogd2lkdGg6IGF1dG87ICAqL1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIC8qIG1hcmdpbi1ib3R0b206IDBweDsgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qICBhcHByb3ZlICBidXR0b25zICovXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1wZXJzb25hbC1hcHByb3ZlLm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcGVyc29uYWwtYXBwcm92ZSAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuLWNhbmNlbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FundPersonalLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundPersonalLoanComponent", function() { return FundPersonalLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");
/* harmony import */ var _services_loan_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/loan-product.service */ "./src/app/clients/client-detail/services/loan-product.service.ts");
/* harmony import */ var _shared_services_entity_update_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../../shared/services/entity-update.service */ "./src/app/shared/services/entity-update.service.ts");











// -----------
let FundPersonalLoanComponent = class FundPersonalLoanComponent {
    constructor(activatedRoute, router, route, userSrv, clientDetailSrv, loanProductSrv, loanProductStateSrv, loanAppUpdateSrv, loanAppStateSrv, snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.route = route;
        this.userSrv = userSrv;
        this.clientDetailSrv = clientDetailSrv;
        this.loanProductSrv = loanProductSrv;
        this.loanProductStateSrv = loanProductStateSrv;
        this.loanAppUpdateSrv = loanAppUpdateSrv;
        this.loanAppStateSrv = loanAppStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.currentUser$ = null;
        this.currentLoanProduct$ = null;
        this.activatedRouteParentParams$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isLoanProductChanged$ = null;
        this.isLoanAppChanged$ = null;
        this._curAmortizType = 0;
        this.currentAmortizTypeName = '';
        this._isPrepareParams = 0;
        this._isPrepareFeesParams = 0;
        this.personalLoanAppObj = {
            loanApplicationId: 0,
            productId: 0,
            amortizationType: '',
            loanAmount: 0,
            interestRate: 0,
            disbursementDate: '1900-01-01',
            firstDisbursementDate: '1900-01-01',
            fixedRepaymentDate: false,
            term: 0,
            penaltyRate: 0,
            fees: null,
            installment: 0,
            drawnDownFixed: false
        };
        this.dataForAmortizationSchedule = {};
        loanProductStateSrv.context = 'Personal Loan Product Load';
        loanAppStateSrv.context = 'Personal Loan App Update Srv';
    }
    get currentAmortizType() {
        return this._curAmortizType;
    }
    set currentAmortizType(val) {
        this._curAmortizType = val;
        //  this.currentAmortizType.emit(val);
    }
    get isPrepareLoanParams() {
        return this._isPrepareParams;
    }
    set isPrepareLoanParams(val) {
        this._isPrepareParams = val;
    }
    get isPrepareFeesParams() {
        return this._isPrepareFeesParams;
    }
    set isPrepareFeesParams(val) {
        this._isPrepareFeesParams = val;
    }
    ngOnInit() {
        this.clientId = this.clientDetailSrv.curClientDetail.id;
        // this.personalLoanAppObj.loanApplicationId = this.clientDetailSrv.curClientDetail.id
        this.isPrepareLoanParams = 0;
        this.isPrepareFeesParams = 0;
        this.activatedRouteParentParams$ = this.activatedRoute.params
            .pipe(
        // tap ((pm: Params) => {
        //   console.log('ApprovePersonalLoanAppComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', pm);
        // }),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((pm) => pm.prodId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((prodId) => {
            // console.log('ApprovePersonalLoanAppComponent activatedRouteParentParams$ activatedRoute.params.prodId -> %s', prodId);
            this.productId = prodId;
            this.loanProductSrv.loadLoanProduct(+prodId, this.loanProductStateSrv);
        }));
        // ---------------------
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                this.loanProductSrv.clearCurLoanProduct();
            }
        }));
        // ---------------------
        this.currentLoanProduct$ = this.loanProductSrv.curLoanProduct$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((product) => {
            if (this.loanProductSrv.isLoanProductWrong(product)) {
                return null;
            }
            return product;
        }));
        // ---------------------  
        this.isLoanProductChanged$ = this.loanProductStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            // console.log(`\tPIPE: ApprovePersonalLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'LOAD', isEnd: false, opResult: 'NOSET' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR) {
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].DELETE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'DELETE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Client has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
        this.isLoanAppChanged$ = this.loanAppStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            // console.log(`\tPIPE: ApprovePersonalLoanAppComponent.OnInit() loanAppStateSrv.IsEntityChangedInterface:%O`, r,);
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].UPDATE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'UPDATE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'UPDATE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`PERSONAL: ${r.message}`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'UPDATE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
        // eom OnInit
    }
    onCurrentAmortizType(ev) {
        console.log('ApprovePersonalLoanAppComponent.onCurrentAmortizType(ev) view = %s', ev);
        this.currentAmortizType = ev;
        this.personalLoanAppObj.amortizationType;
    }
    onApproveLoanOk(loanProduct) {
        console.log('ApprovePersonalLoanAppComponent.onApproveLoanOk()  loanProduct -> %O', loanProduct);
        console.log('ApprovePersonalLoanAppComponent.onApproveLoanOk()  personalLoanAppObj -> %O', this.personalLoanAppObj);
        this.isPrepareLoanParams = 1;
        this.isPrepareFeesParams = 1;
        this.loanAppUpdateSrv.approveLoanApp(this.clientId, this.personalLoanAppObj, this.loanAppStateSrv);
        this.router.navigateByUrl(`/clients/${this.clientDetailSrv.curClientDetail.id}/overview`);
    }
    loanParamsGet(ev) {
        // console.log('ApprovePersonalLoanAppComponent.loanParamsGet() loanParams= %O', ev);
        this.personalLoanAppObjFill(ev);
        // makarov  ???
        this.dataForAmortizationSchedule = {
            productId: this.personalLoanAppObj.productId,
            currentAmortizType: this.personalLoanAppObj.amortizationType,
            askDataSendTokenTimeInMs: this.askDataSendTokenTimeInMs,
            params: {
                loanAmount: this.personalLoanAppObj.loanAmount,
                interestRate: this.personalLoanAppObj.interestRate,
                startDate: this.personalLoanAppObj.disbursementDate,
                term: this.personalLoanAppObj.term,
                firstRepaymentDate: this.personalLoanAppObj.firstDisbursementDate // "2019-12-31"
            }
        };
        console.log('ApprovePersonalLoanAppComponent.feesParamsGet() dataForAmortizationSchedule -> %O', this.dataForAmortizationSchedule);
        this.isPrepareLoanParams = 0;
        // console.log('ApprovePersonalLoanAppComponent.loanParamsGet() personalLoanAppObj= %O', 
        //     this.personalLoanAppObj);
    }
    feesParamsGet(ev) {
        console.log('ApprovePersonalLoanAppComponent.feesParamsGet() feesParams= %O', ev);
        this.personalLoanAppObjByFeesFill(ev);
        console.log('ApprovePersonalLoanAppComponent.feesParamsGet() personalLoanAppObj= %O', this.personalLoanAppObj);
        this.isPrepareFeesParams = 0;
    }
    fetchPersonalLoanAppInfo(clientData) {
        if (clientData && clientData.loanApplications &&
            Array.isArray(clientData.loanApplications) &&
            clientData.loanApplications.length > 0) {
            const personalLoanApp = clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'requested' &&
                    loan.type.toLocaleLowerCase() === 'personal';
            });
            return personalLoanApp;
            // console.log('PersonalLoanAppComponent.fetchPersonalLoanInfo() %O', this.personalLoan);
            // if (this.personalLoan != undefined) {
            // }
        }
    }
    fetchLoanProductAmortizTypes(productData) {
        if (productData && productData.amortizationTypes &&
            Array.isArray(productData.amortizationTypes) &&
            productData.amortizationTypes.length > 0) {
            return productData.amortizationTypes;
        }
        return;
    }
    personalLoanAppObjFill(ev) {
        const personalLoanApp = this.fetchPersonalLoanAppInfo(this.clientDetailSrv.curClientDetail);
        if (!personalLoanApp) {
            throw new Error('Active Personal Loan App has not found.');
        }
        this.personalLoanAppObj.loanApplicationId = personalLoanApp.id;
        this.personalLoanAppObj.productId = personalLoanApp.productId;
        console.log('ApprovePersonalLoanAppComponent.loan application id %O', this.personalLoanAppObj.loanApplicationId);
        console.log('ApprovePersonalLoanAppComponent.loan amount %O', this.personalLoanAppObj.loanAmount);
        const loanProductAmortizTypes = this.fetchLoanProductAmortizTypes(this.loanProductSrv.curLoanProduct);
        if (!loanProductAmortizTypes) {
            throw new Error('Loan Product Amortization Types has not found.');
        }
        this.personalLoanAppObj.amortizationType = loanProductAmortizTypes[ev.amortType];
        this.personalLoanAppObj.loanAmount = +ev.loanAmount;
        // this.personalLoanAppObj.loanAmount = personalLoanApp.loanAmount;
        if (ev.amortType === 2) {
            this.personalLoanAppObj.interestRate = +ev.interestRate2;
        }
        else {
            this.personalLoanAppObj.interestRate = +ev.interestRate;
        }
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        this.personalLoanAppObj.disbursementDate = (new Date(ev.disbursDate)).toLocaleDateString('en-CA', options);
        this.personalLoanAppObj.firstDisbursementDate = (new Date(ev.firstDisbursDate)).toLocaleDateString('en-CA', options);
        this.personalLoanAppObj.fixedRepaymentDate = ev.isFixedRepaymentDate;
        this.personalLoanAppObj.term = ev.term;
        this.personalLoanAppObj.penaltyRate = this.loanProductSrv.curLoanProduct.defaultPenaltyRate;
        this.personalLoanAppObj.fees = null;
        this.personalLoanAppObj.installment = +ev.installment;
        this.personalLoanAppObj.drawnDownFixed = this.loanProductSrv.curLoanProduct.drawnDownFixed;
    }
    personalLoanAppObjByFeesFill(ev) {
        let feesArr = [];
        if (ev && Array.isArray(ev) && ev.length > 0) {
            for (var i = 0; i < ev.length; i++) {
                feesArr.push({
                    value: +ev[i].value,
                    feeId: 0,
                    feeType: ev[i].type,
                    tax: +ev[i].tax,
                    feeHandling: ''
                });
            }
            this.personalLoanAppObj.fees = feesArr;
        }
    }
    onApproveLoanCancel(loanProduct) {
        // console.log('ApprovePersonalLoanAppComponent.onApproveLoanCancel()  loanProduct -> %O', loanProduct);
        this.router.navigate([this.clientDetailSrv.curClientDetail.id, 'overview'], { relativeTo: this.route });
        //this.router.navigateByUrl(`/clients/${this.clientDetailSrv.curClientDetail.id}/overview`);
    }
    dataForAmortizationScheduleGet(ev) {
        if (ev === 0) {
            console.log('ApprovePersonalLoanAppComponent.dataForamortizationScheduleGet() ev === 0  ev -> %O', ev);
            return;
        }
        console.log('ApprovePersonalLoanAppComponent.dataForamortizationScheduleGet()  ev -> %O', ev);
        this.askDataSendTokenTimeInMs = ev;
        this.isPrepareLoanParams = 1;
    }
    ngOnDestroy() {
        this.loanProductSrv.clearCurLoanProduct(); // auto loaded
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
FundPersonalLoanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__["ClientDetailService"] },
    { type: _services_loan_product_service__WEBPACK_IMPORTED_MODULE_9__["LoanProductService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _shared_services_entity_update_service__WEBPACK_IMPORTED_MODULE_10__["EntityUpdateService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['LOAN_APP_STATE_SERVICE',] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
FundPersonalLoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fund-personal-loan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fund-personal-loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"],
            { provide: 'LOAN_APP_STATE_SERVICE', useClass: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] }
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fund-personal-loan.component.scss */ "./src/app/clients/client-detail/fund-personal-loan/fund-personal-loan.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('LOAN_APP_STATE_SERVICE'))
], FundPersonalLoanComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/loan-product.interface.ts":
/*!*****************************************************************!*\
  !*** ./src/app/clients/client-detail/loan-product.interface.ts ***!
  \*****************************************************************/
/*! exports provided: WrongLoanProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongLoanProduct", function() { return WrongLoanProduct; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const WrongLoanProduct = {
    productId: -1,
    productName: 'WRONG',
};


/***/ }),

/***/ "./src/app/clients/client-detail/services/client-detail.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/clients/client-detail/services/client-detail.service.ts ***!
  \*************************************************************************/
/*! exports provided: ClientDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailService", function() { return ClientDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _client_detail_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-detail.interface */ "./src/app/clients/client-detail/client-detail.interface.ts");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let ClientDetailService = class ClientDetailService {
    /*
     fakeProfile_1: ClientDetailProfileInterface = {
      id: 1,
      emailAddress: "test7@acme.com",
      auditInfo: {
          createdBy: "test",
          createdDate: "2019-12-24T00:00:00.000+0000",
          lastModifiedBy: "test",
          lastModifiedDate: "2019-12-24T00:00:00.000+0000"
      },
      addresses: [
          {
              id: 1,
              addressTypes: [
                  "Home",
                  "Mailing"
              ],
              addressLine1: "1111 Street 1",
              addressLine2: "Apt 24",
              city: "Dallas",
              state: "Texas",
              postalCode: "111111",
              ownershipType: "Rent",
              country: "United States",
              yearsAtAddress: 2,
              validFrom: null,
              validTo: null
          }
      ],
      firstName: "John",
      lastName: "Smith",
      middleName: "",
      gender: "Male",
      dateOfBirth: "2001-10-23",
      maritalStatus: "Single",
      workPhoneNumber: "1111111111",
      mobilePhoneNumber: "1111111111",
      homePhoneNumber: "1111111111",
      city: null
     };
  
    fakeClientDetail_01: ClientDetailInterface = {
      clientId: 1,
      status: "Active",
  
      profile: this.fakeProfile_1,
      
      loanOfficer: 'Olumide Adebowale',
  
      profileImage: 'https://avatars0.githubusercontent.com/u/47750745?s=400&v=4'
  };
  
  */
    constructor(http) {
        this.http = http;
        this.profileImage = 'https://avatars0.githubusercontent.com/u/47750745?s=400&v=4'; // ????
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.curClientDetailSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curClientDetail$ = this.curClientDetailSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_client_detail_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientDetail"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curClientDetail = _client_detail_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientDetail"];
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curClientDetail$.subscribe(client => {
            this.curClientDetail = client; // WrongClientDetail
        });
    }
    // ------------------------------------------------------------
    isClientDetailNotEmpty(client) {
        if (!client) {
            throw new Error('Parameter client detail is null');
        }
        if (client === _client_detail_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientDetail"]) {
            return false;
        }
        else {
            return true;
        }
    }
    // ---
    isClientDetailEmpty() {
        return !this.isClientDetailNotEmpty(this.curClientDetail);
    }
    // ---
    clearClientDetail() {
        if (!this.isClientDetailEmpty()) {
            this.curClientDetailSub$.next(_client_detail_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientDetail"]);
        }
    }
    // ------------------------------------------------------------
    loadClientDetail(stateService, clientIdNew) {
        console.log(' ClientDetailService loadClientDetail() clientIdNew -> %o', clientIdNew);
        if (!clientIdNew) { // ???
            return;
        }
        if (stateService) {
            const isClentsChangedEnter = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isClentsChangedEnter);
        }
        this.http.get(`${this.apiUrl}/clients/${clientIdNew}?detail=true`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                // .set("Content-Type", "application/json") // netesa
                .set("Accept", "application/json")
        })
            .pipe(
        // delay(1200), // netesa
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            let retMsg = 'ERROR';
            let msg;
            let isClientChangedError = null;
            if (stateService) {
                isClientChangedError = {
                    op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                    isEnd: true,
                    opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR,
                };
            }
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const status = err.status;
                if (status === 401) {
                    retMsg = 'JWT_EXPIRED';
                    msg = 'Authentication has been expired!';
                    isClientChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                    isClientChangedError.message = msg;
                }
                else if (status >= 500) {
                    msg = err.error ? (err.error.error ? err.error.error.message : err.message) : err.message;
                    isClientChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                    isClientChangedError.message = msg;
                }
                else {
                    retMsg = 'ERROR';
                    msg = err.statusText;
                    isClientChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                    isClientChangedError.message = msg;
                }
            }
            else {
                retMsg = 'ERROR';
                msg = 'UNKNOWN ERROR';
                isClientChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                isClientChangedError.message = msg;
            }
            if (stateService) {
                stateService.next(isClientChangedError);
            }
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('ERROR');
        }), 
        //                    delay(3000),  // todo  mak delay test snipper !!!,
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((p) => {
            let retObj;
            let retMsg;
            if (typeof p === 'object') {
                retObj = p;
                retMsg = 'OK';
            }
            return { token: 'OK', client: retObj };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            // console.log(`\tSUBSCRIBE: ClientListService.loadClientList().subscribe(NEXT): rezObj: %O`, rezObj);
            if (rezObj.token === 'ERROR') {
                if (stateService) {
                    const isClientChangedError = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR,
                    };
                    stateService.next(isClientChangedError);
                }
                // this.clearClientList();
            }
            else if (rezObj.token === 'OK') {
                if (stateService) {
                    this.curClientDetailSub$.next(rezObj.client); // BEFOR stateService.next()!
                    // this.curClientDetailSub$.next(Object.assign(rezObj.client, {profileImage: this.profileImage})); // BEFOR stateService.next()!
                    const isClientChangedExit = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS
                    };
                    stateService.next(isClientChangedExit);
                }
                // this.curClientDetailSub$.next(rezObj.client); 
            }
        });
    }
};
ClientDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClientDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientDetailService);



/***/ }),

/***/ "./src/app/clients/client-detail/services/loan-product.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/clients/client-detail/services/loan-product.service.ts ***!
  \************************************************************************/
/*! exports provided: LoanProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanProductService", function() { return LoanProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loan_product_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loan-product.interface */ "./src/app/clients/client-detail/loan-product.interface.ts");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/server-status.service */ "./src/app/shared/services/server-status.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let LoanProductService = class LoanProductService {
    constructor(http, serverStatusSrv) {
        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.curLoanProductSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curLoanProduct$ = this.curLoanProductSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_loan_product_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanProduct"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curLoanProduct = _loan_product_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanProduct"];
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curLoanProduct$.subscribe(product => {
            this.curLoanProduct = product;
        });
    }
    // ------------------------------------------------------------
    isLoanProductWrong(product) {
        if (!product) {
            throw new Error('Parameter [product] is null');
        }
        if (product === _loan_product_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanProduct"]) {
            return true;
        }
        else {
            return false;
        }
    }
    isCurLoanProductCorrect() {
        return !this.isLoanProductWrong(this.curLoanProduct);
    }
    isCurLoanProductWrong() {
        return this.isLoanProductWrong(this.curLoanProduct);
    }
    clearCurLoanProduct() {
        if (this.isCurLoanProductCorrect()) {
            this.curLoanProductSub$.next(_loan_product_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanProduct"]);
        }
    }
    isLoanProductNotFound(product) {
        if (!product) {
            throw new Error('Parameter [product] is null');
        }
        if (!product.productId || !product.productName) {
            throw new Error('Parameter [product] has no [productId] or [productName] fields.');
        }
        else if (product.productId === 0 && product.productName == null) {
            return true;
        }
        else {
            return false;
        }
    }
    // ------------------------------------------------------------
    loadLoanProduct(prodId, stateService) {
        // console.log('SYNC ENTER LoanProductService.loadLoanProduct() %O', stateService);
        if (stateService) {
            const isLoanProductChangedEnter = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isLoanProductChangedEnter);
        }
        this.http.get(`${this.apiUrl}/products/${prodId}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set("Accept", "application/json")
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((product) => {
            // console.log('\tASYNC PIPE LoanProductService.loadLoanProduct().map(ANY): %O', product);
            if (this.isLoanProductNotFound(product)) {
                throw new Error(`Loan Product with [productId] = ${prodId} has not found.`);
            }
            return { token: 'OK', product };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            // console.log('\tASYNC PIPE LoanProductService.loadLoanProduct().catchError() #2: %O', err);
            let msg;
            let isLoanProductChangedError = null;
            if (stateService) {
                isLoanProductChangedError = {
                    op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                    isEnd: true,
                    opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR,
                };
            }
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                // Server error 
                const status = err.status;
                if (status === 0) {
                    msg = `SERVER ERROR: HTTP failure response for ${err.url}`;
                }
                else if (status > 0 && status < 600) {
                    msg = `SERVER ERROR: ${status} - ${this.serverStatusSrv.getStatusText(status.toString())}`;
                }
                isLoanProductChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                isLoanProductChangedError.message = msg;
            }
            else {
                // Client error 
                msg = err.message ? err.message : err.toString();
                ;
                isLoanProductChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                isLoanProductChangedError.message = `CLIENT ERROR: ${msg}`;
            }
            if (stateService) {
                stateService.next(isLoanProductChangedError);
            }
            this.clearCurLoanProduct();
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ token: 'ERROR', product: null });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            // console.log(`\tSUBSCRIBE: LoanProductService.loadLoanProduct().subscribe(NEXT): rezObj: %O`, rezObj);
            if (rezObj.token === 'OK') {
                this.curLoanProductSub$.next(rezObj.product); // BEFOR stateService.next()!
                if (stateService) {
                    const isLoanProductChangedExit = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS
                    };
                    stateService.next(isLoanProductChangedExit);
                }
            }
        }
        // , err => console.log(`\tSUBSCRIBE: ClientListService.loadClientList().subscribe(ERROR): %O`, err)
        // , () => console.log(`\tSUBSCRIBE: ClientListService.loadClientList().subscribe(COMPLETE)`)    
        );
    }
};
LoanProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__["ServerStatusService"] }
];
LoanProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoanProductService);



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <h1>Page Not Found!</h1>
  `
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, userSrv) {
        this.router = router;
        this.userSrv = userSrv;
    }
    canActivate(route, state) {
        const curUser = this.userSrv.curUserWithToken;
        // console.log('ENTER AuthGuard.canActivate(): curUser: %O curUrl: %s', curUser, state.url);
        // const msg = `ENTER AuthGuard.canActivate(): User: ${curUser.user} Url:${state.url} `
        // localStorage.setItem(`AuthGuard - ${Date.now()}`, msg);
        if (curUser.token.length !== 0) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        this.router.navigateByUrl('/login');
        return false;
    }
    canLoad(route) {
        let url = `/${route.path}`;
        const curUser = this.userSrv.curUserWithToken;
        // console.log('ENTER AuthGuard.canLoad(): curUser: %O curUrl: %s', curUser, url);
        if (curUser.token.length !== 0) {
            // authorised so return true
            // console.log('EXIT AuthGuard.canLoad(): curUser: %O curUrl: %s TRUE', curUser, url);
            return true;
        }
        // not logged in so redirect to login page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        // console.log('EXIT AuthGuard.canLoad(): curUser: %O curUrl: %s FALSE', curUser, url);
        this.router.navigateByUrl('/login');
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/interceptor/jwt.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/interceptor/jwt.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let JwtInterceptor = class JwtInterceptor {
    constructor(http, userSrv) {
        this.http = http;
        this.userSrv = userSrv;
        this.authPref = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].authPrefix;
    }
    intercept(request, next) {
        // console.log(`ENTER JwtInterceptor.intercept() Befor-URL: ${request.method} ${request.url} request.headers: %O`, request.headers);
        // const msg = `ENTER JwtInterceptor: Befor-URL: ${request.method} ${request.url} ${JSON.stringify(request.headers)}`;
        // localStorage.setItem(`JwtInterceptor - ${Date.now()}`, msg);
        if (request.url.indexOf(this.authPref) != -1) {
            return next.handle(request); // do nothing
        }
        const curUser = this.userSrv.curUserWithToken;
        if (curUser.token.length !== 0) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${curUser.token}`
                }
            });
        }
        this.currentRequest = request;
        // console.log('EXIT JwtInterceptor.intercept() After-URL: %s request.headers: %O', request.url, request.headers); 
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/shared/model/entity-state.interface.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/model/entity-state.interface.ts ***!
  \********************************************************/
/*! exports provided: EntityChangeResultEnum, EntityMessageTypeEnum, EntityStateEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityChangeResultEnum", function() { return EntityChangeResultEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityMessageTypeEnum", function() { return EntityMessageTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStateEnum", function() { return EntityStateEnum; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var EntityChangeResultEnum;
(function (EntityChangeResultEnum) {
    EntityChangeResultEnum["NOSET"] = "NOSET";
    EntityChangeResultEnum["ERROR"] = "ERROR";
    EntityChangeResultEnum["SUCCESS"] = "SUCCESS";
})(EntityChangeResultEnum || (EntityChangeResultEnum = {}));
var EntityMessageTypeEnum;
(function (EntityMessageTypeEnum) {
    EntityMessageTypeEnum["INFO"] = "INFO";
    EntityMessageTypeEnum["WARN"] = "WARN";
    EntityMessageTypeEnum["ERROR"] = "ERROR";
    EntityMessageTypeEnum["FATAL"] = "FATAL";
})(EntityMessageTypeEnum || (EntityMessageTypeEnum = {}));
var EntityStateEnum;
(function (EntityStateEnum) {
    EntityStateEnum["NOSET"] = "NOSET";
    EntityStateEnum["LOAD"] = "LOAD";
    EntityStateEnum["ADD"] = "ADD";
    EntityStateEnum["UPDATE"] = "UPDATE";
    EntityStateEnum["DELETE"] = "DELETE";
    EntityStateEnum["WRONG"] = "WRONG";
})(EntityStateEnum || (EntityStateEnum = {}));


/***/ }),

/***/ "./src/app/shared/ng-material.module.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/ng-material.module.ts ***!
  \**********************************************/
/*! exports provided: NgMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMaterialModule", function() { return NgMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let NgMaterialModule = class NgMaterialModule {
};
NgMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], NgMaterialModule);



/***/ }),

/***/ "./src/app/shared/services/entity-state.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/entity-state.service.ts ***!
  \*********************************************************/
/*! exports provided: EntityStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStateService", function() { return EntityStateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");




let EntityStateService = class EntityStateService {
    constructor() {
        this.isEntityChangedInit = {
            op: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].NOSET,
            isEnd: false,
            opResult: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET
        };
        this.isEntityChangedSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.isEntityChangedInit);
        this.isEntityChanged$ = this.isEntityChangedSub$.asObservable();
        this.isEntityChangedValue = this.isEntityChangedSub$.value;
        this.context = 'N/A';
    }
    reset() {
        this.isEntityChangedSub$.next(this.isEntityChangedInit);
    }
    complete() {
        this.isEntityChangedSub$.complete();
    }
    next(entityChangedState) {
        if (entityChangedState) {
            this.isEntityChangedSub$.next(entityChangedState);
        }
        else {
            this.isEntityChangedSub$.next(this.isEntityChangedInit);
        }
    }
};
EntityStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EntityStateService);



/***/ }),

/***/ "./src/app/shared/services/entity-update.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/entity-update.service.ts ***!
  \**********************************************************/
/*! exports provided: EntityUpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityUpdateService", function() { return EntityUpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _server_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-status.service */ "./src/app/shared/services/server-status.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let EntityUpdateService = class EntityUpdateService {
    constructor(http, serverStatusSrv) {
        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    approveLoanApp(clientId, loanAppObj, stateService) {
        console.log('SYNC ENTER EntityUpdateService.approveLoanApp() %O', loanAppObj);
        if (stateService) {
            const isLoanAppChangedEnter = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].UPDATE,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isLoanAppChangedEnter);
        }
        this.http.post(`${this.apiUrl}/clients/${clientId}/loans`, loanAppObj, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set("Content-Type", "application/json")
                .set("Accept", "application/json")
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
            console.log('\tASYNC PIPE EntityUpdateService.approveLoanApp().map(ANY): %O', result);
            // if (this.isLoanProductNotFound(product)) {
            //   throw new Error(`Loan Product with [productId] = ${prodId} has not found.`);
            // }
            return { token: 'OK', result };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log('\tASYNC PIPE EntityUpdateService.approveLoanApp().catchError(): %O', err);
            let msg;
            let isLoanAppChangedError = null;
            if (stateService) {
                isLoanAppChangedError = {
                    op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].UPDATE,
                    isEnd: true,
                    opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR,
                };
            }
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                // Server error 
                const status = err.status;
                if (status === 0) {
                    msg = `SERVER ERROR: HTTP failure response for ${err.url}`;
                }
                else if (status > 0 && status < 600) {
                    msg = `SERVER ERROR: ${status} - ${this.serverStatusSrv.getStatusText(status.toString())}`;
                }
                isLoanAppChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isLoanAppChangedError.message = msg;
            }
            else {
                // Client error 
                msg = err.message ? err.message : err.toString();
                ;
                isLoanAppChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isLoanAppChangedError.message = `CLIENT ERROR: ${msg}`;
            }
            if (stateService) {
                stateService.next(isLoanAppChangedError);
            }
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ token: 'ERROR', result: null });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            console.log(`\tSUBSCRIBE: EntityUpdateService.approveLoanApp().subscribe(NEXT): rezObj: %O`, rezObj);
            if (rezObj.token === 'OK') {
                if (stateService) {
                    const isLoanAppChangedExit = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].UPDATE,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS,
                        messageType: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].INFO,
                        message: rezObj.result.message
                    };
                    stateService.next(isLoanAppChangedExit);
                }
            }
        }, err => console.log(`\tSUBSCRIBE: EntityUpdateService.approveLoanApp().subscribe(ERROR): %O`, err), () => console.log(`\tSUBSCRIBE: EntityUpdateService.approveLoanApp().subscribe(COMPLETE)`));
        // eom 
    }
};
EntityUpdateService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _server_status_service__WEBPACK_IMPORTED_MODULE_6__["ServerStatusService"] }
];
EntityUpdateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EntityUpdateService);



/***/ }),

/***/ "./src/app/shared/services/jwt-decoder.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/jwt-decoder.service.ts ***!
  \********************************************************/
/*! exports provided: JwtDecoderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtDecoderService", function() { return JwtDecoderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);



let JwtDecoderService = class JwtDecoderService {
    constructor() { }
    decodeJwtPayload(token) {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        }
        catch (Error) {
            return null;
        }
    }
};
JwtDecoderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], JwtDecoderService);



/***/ }),

/***/ "./src/app/shared/services/screen.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/screen.service.ts ***!
  \***************************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ScreenService = class ScreenService {
    constructor(bpObserver) {
        // console.log('ENTER ScreenService.constructor()');
        this.bpObserver = bpObserver;
        this.isSmallScreen$ = this.bpObserver
            // .observe([Breakpoints.Handset, Breakpoints.Tablet])
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetPortrait])
            .pipe(
        // tap((m: {matches: boolean}) => console.log('\tScreenService.PIPE matches:', m.matches)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ matches: false }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
};
ScreenService.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] }
];
ScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ScreenService);



/***/ }),

/***/ "./src/app/shared/services/server-status.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/server-status.service.ts ***!
  \**********************************************************/
/*! exports provided: ACCEPTED, BAD_GATEWAY, BAD_REQUEST, CONFLICT, CONTINUE, CREATED, EXPECTATION_FAILED, FAILED_DEPENDENCY, FORBIDDEN, GATEWAY_TIMEOUT, GONE, HTTP_VERSION_NOT_SUPPORTED, IM_A_TEAPOT, INSUFFICIENT_SPACE_ON_RESOURCE, INSUFFICIENT_STORAGE, INTERNAL_SERVER_ERROR, LENGTH_REQUIRED, LOCKED, METHOD_FAILURE, METHOD_NOT_ALLOWED, MOVED_PERMANENTLY, MOVED_TEMPORARILY, MULTI_STATUS, MULTIPLE_CHOICES, NETWORK_AUTHENTICATION_REQUIRED, NO_CONTENT, NON_AUTHORITATIVE_INFORMATION, NOT_ACCEPTABLE, NOT_FOUND, NOT_IMPLEMENTED, NOT_MODIFIED, OK, PARTIAL_CONTENT, PAYMENT_REQUIRED, PERMANENT_REDIRECT, PRECONDITION_FAILED, PRECONDITION_REQUIRED, PROCESSING, PROXY_AUTHENTICATION_REQUIRED, REQUEST_HEADER_FIELDS_TOO_LARGE, REQUEST_TIMEOUT, REQUEST_TOO_LONG, REQUEST_URI_TOO_LONG, REQUESTED_RANGE_NOT_SATISFIABLE, RESET_CONTENT, SEE_OTHER, SERVICE_UNAVAILABLE, SWITCHING_PROTOCOLS, TEMPORARY_REDIRECT, TOO_MANY_REQUESTS, UNAUTHORIZED, UNPROCESSABLE_ENTITY, UNSUPPORTED_MEDIA_TYPE, USE_PROXY, ServerStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCEPTED", function() { return ACCEPTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAD_GATEWAY", function() { return BAD_GATEWAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BAD_REQUEST", function() { return BAD_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFLICT", function() { return CONFLICT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTINUE", function() { return CONTINUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATED", function() { return CREATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPECTATION_FAILED", function() { return EXPECTATION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAILED_DEPENDENCY", function() { return FAILED_DEPENDENCY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORBIDDEN", function() { return FORBIDDEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GATEWAY_TIMEOUT", function() { return GATEWAY_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GONE", function() { return GONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_VERSION_NOT_SUPPORTED", function() { return HTTP_VERSION_NOT_SUPPORTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IM_A_TEAPOT", function() { return IM_A_TEAPOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSUFFICIENT_SPACE_ON_RESOURCE", function() { return INSUFFICIENT_SPACE_ON_RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSUFFICIENT_STORAGE", function() { return INSUFFICIENT_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERNAL_SERVER_ERROR", function() { return INTERNAL_SERVER_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LENGTH_REQUIRED", function() { return LENGTH_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCKED", function() { return LOCKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METHOD_FAILURE", function() { return METHOD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METHOD_NOT_ALLOWED", function() { return METHOD_NOT_ALLOWED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVED_PERMANENTLY", function() { return MOVED_PERMANENTLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVED_TEMPORARILY", function() { return MOVED_TEMPORARILY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTI_STATUS", function() { return MULTI_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTIPLE_CHOICES", function() { return MULTIPLE_CHOICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NETWORK_AUTHENTICATION_REQUIRED", function() { return NETWORK_AUTHENTICATION_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NO_CONTENT", function() { return NO_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_AUTHORITATIVE_INFORMATION", function() { return NON_AUTHORITATIVE_INFORMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_ACCEPTABLE", function() { return NOT_ACCEPTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_FOUND", function() { return NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_IMPLEMENTED", function() { return NOT_IMPLEMENTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOT_MODIFIED", function() { return NOT_MODIFIED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OK", function() { return OK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTIAL_CONTENT", function() { return PARTIAL_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_REQUIRED", function() { return PAYMENT_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMANENT_REDIRECT", function() { return PERMANENT_REDIRECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRECONDITION_FAILED", function() { return PRECONDITION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRECONDITION_REQUIRED", function() { return PRECONDITION_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESSING", function() { return PROCESSING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROXY_AUTHENTICATION_REQUIRED", function() { return PROXY_AUTHENTICATION_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_HEADER_FIELDS_TOO_LARGE", function() { return REQUEST_HEADER_FIELDS_TOO_LARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_TIMEOUT", function() { return REQUEST_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_TOO_LONG", function() { return REQUEST_TOO_LONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUEST_URI_TOO_LONG", function() { return REQUEST_URI_TOO_LONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REQUESTED_RANGE_NOT_SATISFIABLE", function() { return REQUESTED_RANGE_NOT_SATISFIABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CONTENT", function() { return RESET_CONTENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEE_OTHER", function() { return SEE_OTHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_UNAVAILABLE", function() { return SERVICE_UNAVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCHING_PROTOCOLS", function() { return SWITCHING_PROTOCOLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPORARY_REDIRECT", function() { return TEMPORARY_REDIRECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOO_MANY_REQUESTS", function() { return TOO_MANY_REQUESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAUTHORIZED", function() { return UNAUTHORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNPROCESSABLE_ENTITY", function() { return UNPROCESSABLE_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSUPPORTED_MEDIA_TYPE", function() { return UNSUPPORTED_MEDIA_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USE_PROXY", function() { return USE_PROXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStatusService", function() { return ServerStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

/**
 * Constants enumerating the HTTP status codes.
 *
 * All status codes defined in RFC1945 (HTTP/1.0, RFC2616 (HTTP/1.1),
 * RFC2518 (WebDAV), RFC6585 (Additional HTTP Status Codes), and
 * RFC7538 (Permanent Redirect) are supported.
 
 * Ported by Bryce Neal.
 */

let statusCodes = {};
const ACCEPTED = 202;
const BAD_GATEWAY = 502;
const BAD_REQUEST = 400;
const CONFLICT = 409;
const CONTINUE = 100;
const CREATED = 201;
const EXPECTATION_FAILED = 417;
const FAILED_DEPENDENCY = 424;
const FORBIDDEN = 403;
const GATEWAY_TIMEOUT = 504;
const GONE = 410;
const HTTP_VERSION_NOT_SUPPORTED = 505;
const IM_A_TEAPOT = 418;
const INSUFFICIENT_SPACE_ON_RESOURCE = 419;
const INSUFFICIENT_STORAGE = 507;
const INTERNAL_SERVER_ERROR = 500;
const LENGTH_REQUIRED = 411;
const LOCKED = 423;
const METHOD_FAILURE = 420;
const METHOD_NOT_ALLOWED = 405;
const MOVED_PERMANENTLY = 301;
const MOVED_TEMPORARILY = 302;
const MULTI_STATUS = 207;
const MULTIPLE_CHOICES = 300;
const NETWORK_AUTHENTICATION_REQUIRED = 511;
const NO_CONTENT = 204;
const NON_AUTHORITATIVE_INFORMATION = 203;
const NOT_ACCEPTABLE = 406;
const NOT_FOUND = 404;
const NOT_IMPLEMENTED = 501;
const NOT_MODIFIED = 304;
const OK = 200;
const PARTIAL_CONTENT = 206;
const PAYMENT_REQUIRED = 402;
const PERMANENT_REDIRECT = 308;
const PRECONDITION_FAILED = 412;
const PRECONDITION_REQUIRED = 428;
const PROCESSING = 102;
const PROXY_AUTHENTICATION_REQUIRED = 407;
const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
const REQUEST_TIMEOUT = 408;
const REQUEST_TOO_LONG = 413;
const REQUEST_URI_TOO_LONG = 414;
const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
const RESET_CONTENT = 205;
const SEE_OTHER = 303;
const SERVICE_UNAVAILABLE = 503;
const SWITCHING_PROTOCOLS = 101;
const TEMPORARY_REDIRECT = 307;
const TOO_MANY_REQUESTS = 429;
const UNAUTHORIZED = 401;
const UNPROCESSABLE_ENTITY = 422;
const UNSUPPORTED_MEDIA_TYPE = 415;
const USE_PROXY = 305;
statusCodes[ACCEPTED] = "Accepted";
statusCodes[BAD_GATEWAY] = "Bad Gateway";
statusCodes[BAD_REQUEST] = "Bad Request";
statusCodes[CONFLICT] = "Conflict";
statusCodes[CONTINUE] = "Continue";
statusCodes[CREATED] = "Created";
statusCodes[EXPECTATION_FAILED] = "Expectation Failed";
statusCodes[FAILED_DEPENDENCY] = "Failed Dependency";
statusCodes[FORBIDDEN] = "Forbidden";
statusCodes[GATEWAY_TIMEOUT] = "Gateway Timeout";
statusCodes[GONE] = "Gone";
statusCodes[HTTP_VERSION_NOT_SUPPORTED] = "HTTP Version Not Supported";
statusCodes[IM_A_TEAPOT] = "I'm a teapot";
statusCodes[INSUFFICIENT_SPACE_ON_RESOURCE] = "Insufficient Space on Resource";
statusCodes[INSUFFICIENT_STORAGE] = "Insufficient Storage";
statusCodes[INTERNAL_SERVER_ERROR] = "Server Error";
statusCodes[LENGTH_REQUIRED] = "Length Required";
statusCodes[LOCKED] = "Locked";
statusCodes[METHOD_FAILURE] = "Method Failure";
statusCodes[METHOD_NOT_ALLOWED] = "Method Not Allowed";
statusCodes[MOVED_PERMANENTLY] = "Moved Permanently";
statusCodes[MOVED_TEMPORARILY] = "Moved Temporarily";
statusCodes[MULTI_STATUS] = "Multi-Status";
statusCodes[MULTIPLE_CHOICES] = "Multiple Choices";
statusCodes[NETWORK_AUTHENTICATION_REQUIRED] = "Network Authentication Required";
statusCodes[NO_CONTENT] = "No Content";
statusCodes[NON_AUTHORITATIVE_INFORMATION] = "Non Authoritative Information";
statusCodes[NOT_ACCEPTABLE] = "Not Acceptable";
statusCodes[NOT_FOUND] = "Not Found";
statusCodes[NOT_IMPLEMENTED] = "Not Implemented";
statusCodes[NOT_MODIFIED] = "Not Modified";
statusCodes[OK] = "OK";
statusCodes[PARTIAL_CONTENT] = "Partial Content";
statusCodes[PAYMENT_REQUIRED] = "Payment Required";
statusCodes[PERMANENT_REDIRECT] = "Permanent Redirect";
statusCodes[PRECONDITION_FAILED] = "Precondition Failed";
statusCodes[PRECONDITION_REQUIRED] = "Precondition Required";
statusCodes[PROCESSING] = "Processing";
statusCodes[PROXY_AUTHENTICATION_REQUIRED] = "Proxy Authentication Required";
statusCodes[REQUEST_HEADER_FIELDS_TOO_LARGE] = "Request Header Fields Too Large";
statusCodes[REQUEST_TIMEOUT] = "Request Timeout";
statusCodes[REQUEST_TOO_LONG] = "Request Entity Too Large";
statusCodes[REQUEST_URI_TOO_LONG] = "Request-URI Too Long";
statusCodes[REQUESTED_RANGE_NOT_SATISFIABLE] = "Requested Range Not Satisfiable";
statusCodes[RESET_CONTENT] = "Reset Content";
statusCodes[SEE_OTHER] = "See Other";
statusCodes[SERVICE_UNAVAILABLE] = "Service Unavailable";
statusCodes[SWITCHING_PROTOCOLS] = "Switching Protocols";
statusCodes[TEMPORARY_REDIRECT] = "Temporary Redirect";
statusCodes[TOO_MANY_REQUESTS] = "Too Many Requests";
statusCodes[UNAUTHORIZED] = "Unauthorized";
statusCodes[UNPROCESSABLE_ENTITY] = "Unprocessable Entity";
statusCodes[UNSUPPORTED_MEDIA_TYPE] = "Unsupported Media Type";
statusCodes[USE_PROXY] = "Use Proxy";
let ServerStatusService = class ServerStatusService {
    constructor() {
        this.getStatusText = (statusCode) => {
            if (statusCodes.hasOwnProperty(statusCode)) {
                return statusCodes[statusCode];
            }
            else {
                throw new Error("Status code does not exist: " + statusCode);
            }
        };
        this.getStatusCode = (reasonPhrase) => {
            for (let key in Object.keys(statusCodes)) {
                if (statusCodes[key] === reasonPhrase) {
                    return parseInt(key, 10);
                }
            }
            throw new Error("Reason phrase does not exist: " + reasonPhrase);
        };
    }
};
ServerStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServerStatusService);



/***/ }),

/***/ "./src/app/shared/services/theme.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/theme.service.ts ***!
  \**************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ThemeService = class ThemeService {
    constructor() {
        this.themeSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.currentTheme = this.themeSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])('dark-theme'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    setTheme(theme) {
        this.themeSub$.next(theme);
    }
};
ThemeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ThemeService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// // Netesa mock API
// export const environment = {
//   production: false,
//   apiAuthUrl: 'http://localhost:3000/auth/login',
//   authPrefix: '/auth',
//   apiUrl: 'http://localhost:3000/api',
//   appBaseHref: '/',
// };
// TGI
const environment = {
    production: false,
    apiAuthUrl: 'https://pacersnacksacks.com/api/authentication',
    authPrefix: '/authentication',
    apiUrl: 'https://pacersnacksacks.com/api',
    appBaseHref: '/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alex/d/upwork/tgidevelopment/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);