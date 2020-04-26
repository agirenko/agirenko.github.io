(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loanapplications-loanapplications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-divider class=\"tgi-mat-divider\"></mat-divider>\r\n  <mat-toolbar class=\"tgi-mat-toolbar-first\">\r\n\r\n    <mat-button-toggle class=\"tgi-button-toggle\" [checked]=\"false\" \r\n                        (change)=\"onToggleBtnChange($event);\">\r\n      <mat-icon>filter_list</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\"></mat-divider>\r\n    <!-- <div style=\"margin:0 20px;border-left:1px solid whitesmoke;padding:0 20px;border-right: 1px solid whitesmoke;\"> -->\r\n      <mat-form-field class=\"tgi-form-field-view\">\r\n        <mat-label>View</mat-label>\r\n        <mat-select [(value)]=\"selectedView\">\r\n          <mat-option value=\"all\">All Applications</mat-option>\r\n          <mat-option value=\"requested\">Requested</mat-option>\r\n          <mat-option value=\"approved\">Approved</mat-option>\r\n          <mat-option value=\"denied\">Denied</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    <!-- </div>  -->\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\">\"></mat-divider>\r\n      \r\n    <!-- <div style=\"margin-right: 20px; padding:20px 20px 0 0;\"> -->\r\n      <div>{{renderLoanApplicationArr?.length}} Loan Applications</div>\r\n    <!-- </div> -->\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\">></mat-divider>\r\n\r\n    <span class=\"nav-spacer\"></span>\r\n\r\n    <mat-form-field class=\"find-full-width\" appearance=\"outline\" floatLabel=\"auto\">\r\n      <input matInput placeholder=\"Find\">\r\n      <!-- <mat-label>Find</mat-label>  -->\r\n      <mat-icon matPrefix>search</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <button mat-icon-button class=\"tgi-button-icon\">\r\n      <mat-icon class=\"tgi-icon-download-size\" aria-hidden=\"false\" aria-label=\"Download\">cloud_download</mat-icon>\r\n      <!--  <img class=\"tgi-icon-download-size\" src=\"../assets/icons/cloud_download-24px.svg\"  alt=\"Download\" title=\"Download\"> -->\r\n    </button>\r\n    <!--\r\n    <button mat-icon-button class=\"tgi-button-img\" (click)=\"clickShare()\">\r\n      <mat-icon>share</mat-icon>\r\n    </button>\r\n-->\r\n    <mat-button-toggle class=\"tgi-button-toggle\" [checked]=\"false\" (change)=\"onToggleBtnChangeShare($event);\">\r\n\r\n      <mat-icon>share</mat-icon>\r\n    </mat-button-toggle>\r\n\r\n  </mat-toolbar>\r\n  \r\n  <mat-divider class=\"tgi-mat-divider\"></mat-divider>\r\n\r\n  <mat-toolbar class=\"tgi-mat-toolbar-two\" *ngIf=\"isViewTwoPanel\">\r\n\r\n    <ng-container *ngIf=\"isFilterUse\">\r\n\r\n      <mat-form-field *ngIf=\"officerList\" class=\"tgi-officer-form-field\">\r\n        <mat-label>Credit Officer</mat-label>\r\n        <mat-select multiple>          \r\n          <mat-option *ngFor=\"let officer of officerList\" [value]=\"officer\">{{officer}}</mat-option>\r\n        </mat-select>      \r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"tgi-city-mat-form-field\" *ngIf=\"cityList\">\r\n        <mat-label>City</mat-label>\r\n        <mat-select multiple>\r\n          <mat-option *ngFor=\"let city of cityList\" [value]=\"city\">{{city}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </ng-container>\r\n\r\n    <span class=\"nav-spacer\"></span>\r\n\r\n    <ng-container *ngIf=\"isShareUse\">\r\n      <button mat-raised-button>\r\n        Email\r\n      </button>\r\n\r\n      <button mat-raised-button class=\"tgi-button-print\">\r\n        Print\r\n      </button>\r\n\r\n    </ng-container>\r\n\r\n  </mat-toolbar>\r\n  <mat-divider class=\"tgi-mat-divider\"></mat-divider>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapplication-list.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapplication-list.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(currentUser$ | async) as ut\"></ng-container>\n<ng-container *ngIf=\"(currentLoanApplications$ | async) as loanApplications\">\n\n  <!-- <div>\n    {{loanApplications | json}}\n  </div> -->\n\n  <app-loanapp-filter-settings [data-source]=\"loanApplications\"\n                        (loanapplication-view-change)=\"loanApplicationViewChanged($event)\"\n                        [render-data]=\"renderLoanApplicationArr\">\n  </app-loanapp-filter-settings>\n\n  <app-loanapplication-table [data-source]=\"loanApplications\"\n                    [loanapplication-view]=\"loanApplicationView\"\n                    (render-loanapplications)=\"renderLoanApplicationsChanged($event)\">\n  </app-loanapplication-table>\n\n</ng-container>\n\n<ng-container *ngIf=\"(isLoanApplicationsChanged$ | async) as r\">\n  <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n    <div class=\"spinner-container\">\n      <span>LOADING LOAN APPLICATIONS</span>\n      <mat-spinner diameter=\"30\"></mat-spinner>\n    </div>\n  </ng-container>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(renderLoanApplicationList$ | async) as renderLoanApplications\"></ng-container>\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"loanApplicationId\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Application #</th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.loanApplicationId}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"productName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Loan Product Name</th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.productName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"clientState\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Client State</th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.clientState}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"loanPurpose\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Loan Purpose</th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.loanPurpose}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"loanAmount\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Loan Amount</th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.loanAmount}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.firstName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.lastName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"phoneNumber\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number </th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.phoneNumber}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.email}} </td>\n  </ng-container>\n\n<!--   // ??? makarov  status loanapplications.status -->\n  <ng-container matColumnDef=\"status\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Loan App Status</th>\n    <td mat-cell *matCellDef=\"let loanApplication\"> {{loanApplication.status}} </td>\n  </ng-container>\n\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let loanApplication; columns: displayedColumns;\" class=\"client-row\"\n    [class.selected-client-row]=\"selectedLoanApplication === loanApplication\" (click)=\"onTblRowClick(loanApplication)\">\n\n  </tr>\n\n</table>");

/***/ }),

/***/ "./src/app/loanapplications/loanapplication-list.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/loanapplications/loanapplication-list.service.ts ***!
  \******************************************************************/
/*! exports provided: LoanApplicationListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationListService", function() { return LoanApplicationListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _loanapplication_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loanapplication.interface */ "./src/app/loanapplications/loanapplication.interface.ts");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/server-status.service */ "./src/app/shared/services/server-status.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let LoanApplicationListService = class LoanApplicationListService {
    constructor(http, serverStatusSrv) {
        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.curLoanApplicationListSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curLoanApplicationList$ = this.curLoanApplicationListSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_loanapplication_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanApplicationList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curLoanApplicationList = _loanapplication_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanApplicationList"];
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curLoanApplicationList$.subscribe(loanApplications => {
            this.curLoanApplicationList = loanApplications;
        });
    }
    // ------------------------------------------------------------
    isWrongLoanApplicationList(loanApplications) {
        if (!loanApplications) {
            throw new Error('Parameter [loanApplications] is null');
        }
        if (loanApplications === _loanapplication_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanApplicationList"]) {
            return true;
        }
        else {
            return false;
        }
    }
    isLoanApplicationListNotEmpty(loanApplications) {
        if (!loanApplications) {
            throw new Error('Parameter [loanApplications] is null');
        }
        if (loanApplications === _loanapplication_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanApplicationList"]) {
            return false;
        }
        else {
            return true;
        }
    }
    isLoanApplicationListEmpty() {
        return !this.isLoanApplicationListNotEmpty(this.curLoanApplicationList);
    }
    clearLoanApplicationList() {
        if (!this.isLoanApplicationListEmpty()) {
            this.curLoanApplicationListSub$.next(_loanapplication_interface__WEBPACK_IMPORTED_MODULE_5__["WrongLoanApplicationList"]);
        }
    }
    // ------------------------------------------------------------
    loadLoanApplicationList(stateService) {
        // console.log('SYNC ENTER LoanApplicationListService.loadLoanApplicationList() %O', stateService);
        if (stateService) {
            const isLoanApplicationsChangedEnter = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isLoanApplicationsChangedEnter);
        }
        this.http.get(`${this.apiUrl}/loanapplications`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                // .set("Content-Type", "application/json")
                .set("Accept", "application/json")
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((loanApplications) => {
            // console.log('\tASYNC PIPE LoanApplicationListService.loadLoanApplicationList().map(ANY): %O', loanApplications);
            if (this.isWrongLoanApplicationList(loanApplications)) {
                return null;
            }
            if (!Array.isArray(loanApplications) || loanApplications.length === 0) {
                return null;
            }
            let curLoanApplicationList = loanApplications.map(item => {
                let loanApplication = {
                    productName: item.productName,
                    loanApplicationId: item.id.toString(),
                    loanPurpose: item.loanPurpose,
                    firstName: item.client.profile.firstName,
                    lastName: item.client.profile.lastName,
                    phoneNumber: item.client.profile.mobilePhoneNumber,
                    email: item.client.profile.emailAddress,
                    clientId: item.client.id,
                    clientState: item.client.status,
                    loanAmount: item.loanAmount,
                    feesDue: item.feesDue,
                    penaltyDue: item.penaltyDue,
                    creditOfficer: item.client.loanOfficer,
                    status: item.status // ??? makarov  status = loanapplications.status
                };
                return loanApplication;
            });
            return { token: 'OK', loanApplications: curLoanApplicationList };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            // console.log('\tASYNC PIPE LoanApplicationListService.loadLoanApplicationList().catchError() #2: %O', err);
            let msg;
            let isLoanApplicationsChangedError = null;
            if (stateService) {
                isLoanApplicationsChangedError = {
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
                isLoanApplicationsChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                isLoanApplicationsChangedError.message = msg;
            }
            else {
                // LoanApplication error
                msg = err.message ? err.message : err.toString();
                ;
                isLoanApplicationsChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                isLoanApplicationsChangedError.message = `LOANAPPLICATION ERROR: ${msg}`;
            }
            if (stateService) {
                stateService.next(isLoanApplicationsChangedError);
            }
            this.clearLoanApplicationList();
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ token: 'ERROR', loanApplications: null });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            // console.log(`\tSUBSCRIBE: LoanApplicationListService.loadLoanApplicationList().subscribe(NEXT): rezObj: %O`, rezObj);
            // if (rezObj.token === 'ERROR') {
            //   if (stateService) {
            //     const isLoanApplicationsChangedError: IsEntityChangedInterface = {
            //       op: EntityStateEnum.LOAD,
            //       isEnd: true,
            //       opResult: EntityChangeResultEnum.ERROR,
            //     };
            //     stateService.next(isLoanApplicationsChangedError);
            //   }
            //   this.clearLoanApplicationList();
            // } else
            if (rezObj.token === 'OK') {
                this.curLoanApplicationListSub$.next(rezObj.loanApplications); // BEFOR stateService.next()!
                if (stateService) {
                    const isLoanApplicationsChangedExit = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS
                    };
                    stateService.next(isLoanApplicationsChangedExit);
                }
                // this.curLoanApplicationListSub$.next(rezObj.loanApplications);
            }
        }
        // , err => console.log(`\tSUBSCRIBE: LoanApplicationListService.loadLoanApplicationList().subscribe(ERROR): %O`, err)
        // , () => console.log(`\tSUBSCRIBE: LoanApplicationListService.loadLoanApplicationList().subscribe(COMPLETE)`)
        );
    }
};
LoanApplicationListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__["ServerStatusService"] }
];
LoanApplicationListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoanApplicationListService);



/***/ }),

/***/ "./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n.find-full-width {\n  width: 20%;\n  margin-right: 20px;\n}\n\ndiv.mat-form-field-wrapper > div.mat-form-field-wrapper {\n  margin-left: 20px;\n}\n\n.tgi-city-mat-form-field {\n  padding-left: 32px;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h1 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h2 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h3 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h4 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h5 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h6 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h1 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h2 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h3 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h4 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h5 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h6 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n/*\n.tgi-mat-toolbar-first {\n\n}\n.tgi-mat-toolbar-two {\n\n}\n*/\n\n::ng-deep .find-full-width .mat-form-field-infix {\n  /* padding: .5em 0; */\n  padding: 0.3em 0 0.4em 0;\n}\n\n.tgi-button-print {\n  margin-left: 50px;\n}\n\n.tgi-mat-divider {\n  padding: 1px 0 1px 0;\n}\n\n.tgi-mat-divider-vertical {\n  height: 100%;\n  margin: 0 20px;\n  /*  border: 1px;  */\n}\n\n::ng-deep .tgi-mat-divider-vertical.mat-divider.mat-divider-vertical {\n  border-right-width: 2px;\n}\n\n.tgi-form-field-view {\n  max-width: 200px;\n}\n\n.tgi-officer-form-field {\n  padding-left: 32px;\n  max-width: 250px;\n}\n\n.tgi-city-mat-form-field {\n  padding-left: 32px;\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvbG9hbmFwcGxpY2F0aW9ucy9sb2FuYXBwbGljYXRpb24tbGlzdC9sb2FuYXBwLWZpbHRlci1zZXR0aW5ncy9sb2FuYXBwLWZpbHRlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9hbmFwcGxpY2F0aW9ucy9sb2FuYXBwbGljYXRpb24tbGlzdC9sb2FuYXBwLWZpbHRlci1zZXR0aW5ncy9sb2FuYXBwLWZpbHRlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURDRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRENFO0VBQ0UsaUJBQUE7QUNFSjs7QURDRTtFQUNFLGtCQUFBO0FDRUo7O0FERUE7RUFDRSx3REFBQTtBQ0NGOztBRENBO0VBQ0Usd0RBQUE7QUNFRjs7QURBQTtFQUNFLHdEQUFBO0FDR0Y7O0FEREE7RUFDRSx3REFBQTtBQ0lGOztBREZBO0VBQ0Usd0RBQUE7QUNLRjs7QURIQTtFQUNFLHdEQUFBO0FDTUY7O0FESkE7RUFDRSx3REFBQTtBQ09GOztBREpBO0VBQ0Usd0RBQUE7QUNPRjs7QURMQTtFQUNFLHdEQUFBO0FDUUY7O0FETkE7RUFDRSx3REFBQTtBQ1NGOztBRFBBO0VBQ0Usd0RBQUE7QUNVRjs7QURSQTtFQUNFLHdEQUFBO0FDV0Y7O0FEVEE7RUFDRSx3REFBQTtBQ1lGOztBRFZBO0VBQ0Usd0RBQUE7QUNhRjs7QURYQTs7Ozs7OztDQUFBOztBQVFBO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtBQ2NGOztBRFhBO0VBQ0UsaUJBQUE7QUNjRjs7QURYQTtFQUNFLG9CQUFBO0FDY0Y7O0FEWEE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDY0Y7O0FEWEE7RUFDRSx1QkFBQTtBQ2NGOztBRFhBO0VBQ0UsZ0JBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNjRjs7QURYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNjRiIsImZpbGUiOiJzcmMvYXBwL2xvYW5hcHBsaWNhdGlvbnMvbG9hbmFwcGxpY2F0aW9uLWxpc3QvbG9hbmFwcC1maWx0ZXItc2V0dGluZ3MvbG9hbmFwcC1maWx0ZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLmZpbmQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC50Z2ktY2l0eS1tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgfVxyXG5cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgxIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgyIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDMge1xyXG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IFxyXG59XHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoNCB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGg1IHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDYge1xyXG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IFxyXG59XHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGgxIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoMiB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoMyB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNCB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNSB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNiB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuLypcclxuLnRnaS1tYXQtdG9vbGJhci1maXJzdCB7XHJcblxyXG59XHJcbi50Z2ktbWF0LXRvb2xiYXItdHdvIHtcclxuXHJcbn1cclxuKi9cclxuOjpuZy1kZWVwIC5maW5kLWZ1bGwtd2lkdGggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAvKiBwYWRkaW5nOiAuNWVtIDA7ICovXHJcbiAgcGFkZGluZzogMC4zZW0gMCAwLjRlbSAwO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1wcmludCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWRpdmlkZXIge1xyXG4gIHBhZGRpbmc6IDFweCAwIDFweCAwO1xyXG59XHJcblxyXG4udGdpLW1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcclxuICBoZWlnaHQ6ICAxMDAlOyBcclxuICBtYXJnaW46IDAgMjBweDtcclxuICAvKiAgYm9yZGVyOiAxcHg7ICAqL1xyXG59XHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LWRpdmlkZXItdmVydGljYWwubWF0LWRpdmlkZXIubWF0LWRpdmlkZXItdmVydGljYWwge1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xyXG59XHJcblxyXG4udGdpLWZvcm0tZmllbGQtdmlldyB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnRnaS1vZmZpY2VyLWZvcm0tZmllbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMzJweDtcclxuICBtYXgtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4udGdpLWNpdHktbWF0LWZvcm0tZmllbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMzJweDtcclxuICBtYXgtd2lkdGg6IDI1MHB4OyBcclxufVxyXG4iLCIubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZmluZC1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5kaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi50Z2ktY2l0eS1tYXQtZm9ybS1maWVsZCB7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoMSB7XG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgyIHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDMge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoNCB7XG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGg1IHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDYge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDEge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDIge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDMge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDQge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDUge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDYge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4vKlxuLnRnaS1tYXQtdG9vbGJhci1maXJzdCB7XG5cbn1cbi50Z2ktbWF0LXRvb2xiYXItdHdvIHtcblxufVxuKi9cbjo6bmctZGVlcCAuZmluZC1mdWxsLXdpZHRoIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIC8qIHBhZGRpbmc6IC41ZW0gMDsgKi9cbiAgcGFkZGluZzogMC4zZW0gMCAwLjRlbSAwO1xufVxuXG4udGdpLWJ1dHRvbi1wcmludCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4udGdpLW1hdC1kaXZpZGVyIHtcbiAgcGFkZGluZzogMXB4IDAgMXB4IDA7XG59XG5cbi50Z2ktbWF0LWRpdmlkZXItdmVydGljYWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAyMHB4O1xuICAvKiAgYm9yZGVyOiAxcHg7ICAqL1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtZGl2aWRlci12ZXJ0aWNhbC5tYXQtZGl2aWRlci5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xufVxuXG4udGdpLWZvcm0tZmllbGQtdmlldyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi50Z2ktb2ZmaWNlci1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4udGdpLWNpdHktbWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: LoanappFilterSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanappFilterSettingsComponent", function() { return LoanappFilterSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



let LoanappFilterSettingsComponent = class LoanappFilterSettingsComponent {
    constructor() {
        this.loanApplicationViewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._renderLoanApplicationArr = null;
        // public OfficerList = CREDIT_OFFICER_LIST;
        this.officerList = [];
        this.cityList = [];
        this._selView = 'all';
        this.isFilterUse = false;
        this.isShareUse = false;
        this.isViewTwoPanel = false;
    }
    get renderLoanApplicationArr() {
        return this._renderLoanApplicationArr;
    }
    set renderLoanApplicationArr(val) {
        this._renderLoanApplicationArr = val;
        this.officerList = lodash__WEBPACK_IMPORTED_MODULE_2__["uniqBy"](val, 'creditOfficer')
            .map(item => item.creditOfficer);
        // this.cityList = _.uniqBy(val, 'city')
        //                   .map(item => item.city);
        const arr = lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"](val, 'city')
            .map(item => item.city);
        this.cityList = lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"](arr);
    }
    get selectedView() {
        return this._selView;
    }
    ;
    set selectedView(val) {
        console.log('FilterSettingsComponent.selectedView(val) SET val=%s', val);
        this._selView = val;
        if (val === 'all') {
            val = '';
        }
        this.loanApplicationViewChange.emit(val);
    }
    ngOnInit() {
        this.selectedView = 'requested';
    }
    onToggleBtnChange(e) {
        this.isFilterUse = !this.isFilterUse;
        if (this.isFilterUse) {
            if (!this.isViewTwoPanel) {
                this.isViewTwoPanel = true;
            }
            else {
                // this.isViewTwoPanel = true;
            }
        }
        if (!this.isFilterUse) {
            if (!this.isShareUse) {
                this.isViewTwoPanel = false;
            }
        }
        // console.log('FilterSettingsComponent.onToggleBtnChange(event) isFilterUse -> %O', this.isFilterUse);
        // console.log('FilterSettingsComponent.onToggleBtnChange(event) isShareUse -> %O', this.isShareUse);
        // console.log('FilterSettingsComponent.onToggleBtnChange(event) isViewTwoPanel  1 -> %O', this.isViewTwoPanel);
    }
    onToggleBtnChangeShare(e) {
        this.isShareUse = !this.isShareUse;
        if (this.isShareUse) {
            if (!this.isViewTwoPanel) {
                this.isViewTwoPanel = true;
            }
            else {
                // this.isViewTwoPanel = true;
            }
        }
        if (!this.isShareUse) {
            if (!this.isFilterUse) {
                this.isViewTwoPanel = false;
            }
        }
        // console.log('FilterSettingsComponent.onToggleBtnChange(event) isFilterUse -> %O', this.isFilterUse);
        // console.log('FilterSettingsComponent.onToggleBtnChange(event) isShareUse -> %O', this.isShareUse);
        // console.log('FilterSettingsComponent.onToggleBtnChange(event) isViewTwoPanel  1 -> %O', this.isViewTwoPanel);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], LoanappFilterSettingsComponent.prototype, "loanApplicationArr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('loanapplication-view-change')
], LoanappFilterSettingsComponent.prototype, "loanApplicationViewChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('render-data')
], LoanappFilterSettingsComponent.prototype, "renderLoanApplicationArr", null);
LoanappFilterSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loanapp-filter-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loanapp-filter-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loanapp-filter-settings.component.scss */ "./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.scss")).default]
    })
], LoanappFilterSettingsComponent);



/***/ }),

/***/ "./src/app/loanapplications/loanapplication-list/loanapplication-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/loanapplications/loanapplication-list/loanapplication-list.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*  left part */\n.nav-spacer {\n  flex: 1 1 auto;\n}\n/*\n.tgi-icon {\n    padding: 0 14px;\n  }\n  */\n/*\n::ng-deep  mat-button-toggle.tgi-button-toggle  .mat-button-toggle-label-content {\n    line-height: 48px;\n  }\n*/\n.tgi-icon-size {\n  height: 28px;\n}\n/*  right part */\n/* find */\n.find-form {\n  min-width: 150px;\n  max-width: 300px;\n  width: 100%;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n/*\n::ng-deep mat-toolbar.find-menu {\n  background-color: grey;\n}\n*/\n::ng-deep mat-form-field.find-full-width > div.mat-form-field-wrapper {\n  margin: 0;\n  padding: 0;\n  /* background-color: lightgray; */\n}\n.find-full-width {\n  width: 100%;\n}\n.menu-group {\n  padding-left: 10px;\n  background-color: lightgray;\n  border: 0px solid black;\n}\n.tgi-client-num {\n  padding-left: 14px;\n}\n/* icon buttons */\n.tgi-icon-download-size {\n  /* height: 38px; */\n  vertical-align: middle;\n}\n.tgi-icon-share-size {\n  height: 28px;\n}\n.toolbar-icon {\n  text-decoration: none;\n  display: flex;\n  /* color: #fff; */\n  /* padding-left: 25px; */\n  width: 50px;\n}\n.sidenav-icon {\n  text-decoration: none;\n  padding: 0 10px;\n}\n.tgi-button-icon {\n  display: flex;\n  text-decoration: none;\n}\n.tgi-button-img {\n  display: flex;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvbG9hbmFwcGxpY2F0aW9ucy9sb2FuYXBwbGljYXRpb24tbGlzdC9sb2FuYXBwbGljYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9hbmFwcGxpY2F0aW9ucy9sb2FuYXBwbGljYXRpb24tbGlzdC9sb2FuYXBwbGljYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFBO0FBRUE7RUFDSSxjQUFBO0FDQUo7QURFRTs7OztHQUFBO0FBS0E7Ozs7Q0FBQTtBQU1BO0VBQ0ksWUFBQTtBQ0FOO0FES0UsZ0JBQUE7QUFFQSxTQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSko7QURNRTs7OztDQUFBO0FBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDSEo7QURLRTtFQUNFLFdBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDRko7QURJRTtFQUNFLGtCQUFBO0FDREo7QURHRSxpQkFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQ0RKO0FER0U7RUFDRSxZQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xvYW5hcHBsaWNhdGlvbnMvbG9hbmFwcGxpY2F0aW9uLWxpc3QvbG9hbmFwcGxpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgbGVmdCBwYXJ0ICovXHJcblxyXG4ubmF2LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLypcclxuICAudGdpLWljb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICB9XHJcbiAgICAqL1xyXG4gIC8qXHJcbiAgOjpuZy1kZWVwICBtYXQtYnV0dG9uLXRvZ2dsZS50Z2ktYnV0dG9uLXRvZ2dsZSAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAqL1xyXG4gIFxyXG4gIC50Z2ktaWNvbi1zaXplIHtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qICByaWdodCBwYXJ0ICovXHJcbiAgXHJcbiAgLyogZmluZCAqL1xyXG4gIFxyXG4gIC5maW5kLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAvKlxyXG4gIDo6bmctZGVlcCBtYXQtdG9vbGJhci5maW5kLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICB9XHJcbiAgKi9cclxuICA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQuZmluZC1mdWxsLXdpZHRoID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgKi9cclxuICB9XHJcbiAgLmZpbmQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtZ3JvdXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgfSBcclxuICAudGdpLWNsaWVudC1udW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIH1cclxuICAvKiBpY29uIGJ1dHRvbnMgKi9cclxuICBcclxuICAudGdpLWljb24tZG93bmxvYWQtc2l6ZSB7XHJcbiAgICAvKiBoZWlnaHQ6IDM4cHg7ICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAudGdpLWljb24tc2hhcmUtc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgXHJcbiAgfVxyXG4gIC50b29sYmFyLWljb24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyNXB4OyAqL1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfSBcclxuICBcclxuICAuc2lkZW5hdi1pY29uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRnaS1idXR0b24taWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGdpLWJ1dHRvbi1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgIiwiLyogIGxlZnQgcGFydCAqL1xuLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLypcbi50Z2ktaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICB9XG4gICovXG4vKlxuOjpuZy1kZWVwICBtYXQtYnV0dG9uLXRvZ2dsZS50Z2ktYnV0dG9uLXRvZ2dsZSAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB9XG4qL1xuLnRnaS1pY29uLXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi8qICByaWdodCBwYXJ0ICovXG4vKiBmaW5kICovXG4uZmluZC1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKlxuOjpuZy1kZWVwIG1hdC10b29sYmFyLmZpbmQtbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4qL1xuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLmZpbmQtZnVsbC13aWR0aCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICovXG59XG5cbi5maW5kLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtZ3JvdXAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XG59XG5cbi50Z2ktY2xpZW50LW51bSB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbn1cblxuLyogaWNvbiBidXR0b25zICovXG4udGdpLWljb24tZG93bmxvYWQtc2l6ZSB7XG4gIC8qIGhlaWdodDogMzhweDsgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnRnaS1pY29uLXNoYXJlLXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi50b29sYmFyLWljb24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICAvKiBwYWRkaW5nLWxlZnQ6IDI1cHg7ICovXG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uc2lkZW5hdi1pY29uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50Z2ktYnV0dG9uLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/loanapplications/loanapplication-list/loanapplication-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/loanapplications/loanapplication-list/loanapplication-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: LoanApplicationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationListComponent", function() { return LoanApplicationListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _loanapplication_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../loanapplication-list.service */ "./src/app/loanapplications/loanapplication-list.service.ts");










let LoanApplicationListComponent = class LoanApplicationListComponent {
    constructor(router, userSrv, loanApplicationsSrv, loanApplicationsStateSrv, snackBarSrv) {
        this.router = router;
        this.userSrv = userSrv;
        this.loanApplicationsSrv = loanApplicationsSrv;
        this.loanApplicationsStateSrv = loanApplicationsStateSrv;
        this.snackBarSrv = snackBarSrv;
        // @ViewChild(LoanApplicationTableComponent, {static: false}) loanApplicationTableCmp: LoanApplicationTableComponent;
        this.currentUser$ = null;
        this.currentLoanApplications$ = null;
        // public curLoanApplicationList$: Observable<LoanApplicationInterface[]> = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isLoanApplicationsChanged$ = null;
        // --------------------------------------------------------------
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isFilter = false; // netesa
        this._loanApplicationView = '';
        this._renderLoanApplicationArr = null;
        loanApplicationsStateSrv.context = "LoanApplicationListComponent";
    }
    get loanApplicationView() {
        return this._loanApplicationView;
    }
    set loanApplicationView(val) {
        // console.log('LoanApplicationListComponent.loanApplicationView(val) val=%s', val);
        this._loanApplicationView = val;
    }
    get renderLoanApplicationArr() {
        return this._renderLoanApplicationArr;
    }
    set renderLoanApplicationArr(val) {
        this._renderLoanApplicationArr = val;
    }
    ngOnInit() {
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((user) => {
            // console.log(`\tPIPE: LoanApplicationListComponent.OnInit() tap currentUser$:%O`, user);
            if (this.userSrv.isAnonymUser(user)) {
                this.onDestroySub$.next(true); // befor!
                this.loanApplicationsSrv.clearLoanApplicationList();
                // this.onDestroySub$.next(true);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$));
        this.currentLoanApplications$ = this.loanApplicationsSrv.curLoanApplicationList$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((loanApplications) => {
            // console.log(`\tPIPE: LoanApplicationListComponent.OnInit() tap currentLoanApplications$:%O`, loanapplications,);
            if (this.loanApplicationsSrv.isWrongLoanApplicationList(loanApplications)) {
                if (this.userSrv.isCurUserAuth()) {
                    this.loanApplicationsSrv.loadLoanApplicationList(this.loanApplicationsStateSrv);
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((loanApplications) => {
            // console.log(`\tPIPE: LoanApplicationListComponent.OnInit() map currentLoanApplications$:%O`, loanApplications,);
            if (this.loanApplicationsSrv.isWrongLoanApplicationList(loanApplications)) {
                return null;
            }
            if (!Array.isArray(loanApplications) || loanApplications.length === 0) {
                return null;
            }
            return loanApplications;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$));
        this.isLoanApplicationsChanged$ = this.loanApplicationsStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            // console.log(`\tPIPE: LoanApplicationListComponent.OnInit() IsEntityChangedInterface:%O`, r,);
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'LOAD', isEnd: false, opResult: 'NOSET' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR) {
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS) {
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].DELETE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'DELETE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Loan Application has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
        // ngOnInit       
    }
    ngAfterViewInit() {
    }
    buttonToggleChange(ev) {
        // console.log('buttonToggleChange ev -> %O', ev);
    }
    filter() {
        this.isFilter = !this.isFilter;
    }
    loanApplicationViewChanged(ev) {
        // console.log('LoanApplicationListComponent.loanApplicationViewChanged(ev) view=%s', ev);
        this.loanApplicationView = ev;
    }
    renderLoanApplicationsChanged(ev) {
        console.log('LoanApplicationListComponent.renderLoanApplicationsChanged(ev) loanApplicationArr=%O', ev);
        this.renderLoanApplicationArr = ev;
    }
    ngOnDestroy() {
        // this.loanApplicationsSrv.clearLoanApplicationList(); // auto loaded
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
LoanApplicationListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _loanapplication_list_service__WEBPACK_IMPORTED_MODULE_9__["LoanApplicationListService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
LoanApplicationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loanapplication-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loanapplication-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapplication-list.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loanapplication-list.component.scss */ "./src/app/loanapplications/loanapplication-list/loanapplication-list.component.scss")).default]
    })
], LoanApplicationListComponent);



/***/ }),

/***/ "./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.client-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.client-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.client-row td {\n  border-bottom-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvbG9hbmFwcGxpY2F0aW9ucy9sb2FuYXBwbGljYXRpb24tbGlzdC9sb2FuYXBwbGljYXRpb24tdGFibGUvbG9hbmFwcGxpY2F0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2FuYXBwbGljYXRpb25zL2xvYW5hcHBsaWNhdGlvbi1saXN0L2xvYW5hcHBsaWNhdGlvbi10YWJsZS9sb2FuYXBwbGljYXRpb24tdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2FuYXBwbGljYXRpb25zL2xvYW5hcHBsaWNhdGlvbi1saXN0L2xvYW5hcHBsaWNhdGlvbi10YWJsZS9sb2FuYXBwbGljYXRpb24tdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICB0ci5jbGllbnQtcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gIH1cclxuICBcclxuICB0ci5jbGllbnQtcm93Om5vdCguc2VsZWN0ZWQtcm93KTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICB9XHJcbiAgXHJcbiAgLmNsaWVudC1yb3cgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICB9XHJcbiBcclxuICAiLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50ci5jbGllbnQtcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG59XG5cbnRyLmNsaWVudC1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5jbGllbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: LoanApplicationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationTableComponent", function() { return LoanApplicationTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");






let LoanApplicationTableComponent = class LoanApplicationTableComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.currentUser$ = null;
        this.currentLoanApplications$ = null;
        this.isLoanApplicationsChanged$ = null;
        this.displayedColumns = [
            'loanApplicationId',
            'productName',
            'clientState',
            'loanPurpose',
            'loanAmount',
            'firstName',
            'lastName',
            'phoneNumber',
            'email',
            'status',
        ];
        this._loanApplicationView = '';
        this.renderLoanApplicationList$ = null;
        this.renderLoanApplicationListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('LoanApplicationTableComponent constructor() -> setting datasource');
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        // this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data, filter) => {
            // console.log('LoanApplicationTableComponent dataSource.filterPredicate() data=%O filter=%s',
            //               data, filter);
            // const dataStr = data.clientState.toLowerCase().trim();
            const dataStr = data.status.toLowerCase().trim(); // ??? makarov  status loanapplications.status
            return dataStr.indexOf(filter) != -1;
        };
    }
    get loanApplicationView() {
        console.log('LoanApplicationTableComponent.loanApplicationView() GET val -> %s', this._loanApplicationView);
        return this._loanApplicationView;
    }
    set loanApplicationView(val) {
        console.log('LoanApplicationTableComponent.loanApplicationView(val) SET val -> %s', val);
        this._loanApplicationView = val;
        this.dataSource.filter = val;
    }
    ngOnInit() {
        // this.dataSource = new MatTableDataSource(LOANAPPLICATION_DATA);  //MOCK OK!
        this.dataSource.data = this.loanApplicationArr;
        this.dataSource.sort = this.sort;
        const sortState = { active: 'loanApplicationId', direction: 'desc' };
        this.sort.active = sortState.active;
        this.sort.direction = sortState.direction;
        this.sort.sortChange.emit(sortState);
        this.renderLoanApplicationList$ = this.dataSource.connect()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((loanApplications) => {
            // console.log('\tPIPE: LoanApplicationTableComponent.OnInit() renderLoanApplicationList:%O', loanApplications);
            this.renderLoanApplicationListChange.emit(loanApplications);
        }));
    }
    onTblRowClick(loanApplication) {
        // console.log(`\tPIPE: LoanApplicationTableComponent.OnInit() clicked Client:%O`, loanApplication);
        if (loanApplication.clientState == 'Available' || loanApplication.clientState == 'Active' || loanApplication.clientState == 'In Process') {
            this.router.navigate([`/clients`, loanApplication.clientId, 'loans']);
        }
        else {
            this.router.navigate([`/clients`, loanApplication.clientId, 'loanapplications']);
        }
        // this.router.navigate([loanApplication.loanApplicationId, 'overview'], {relativeTo: this.route});
    }
};
LoanApplicationTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], LoanApplicationTableComponent.prototype, "loanApplicationArr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('loanapplication-view')
], LoanApplicationTableComponent.prototype, "loanApplicationView", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], { static: true })
], LoanApplicationTableComponent.prototype, "matTbl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], LoanApplicationTableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('render-loanapplications')
], LoanApplicationTableComponent.prototype, "renderLoanApplicationListChange", void 0);
LoanApplicationTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loanapplication-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loanapplication-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loanapplication-table.component.scss */ "./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.scss")).default]
    })
], LoanApplicationTableComponent);



/***/ }),

/***/ "./src/app/loanapplications/loanapplication.interface.ts":
/*!***************************************************************!*\
  !*** ./src/app/loanapplications/loanapplication.interface.ts ***!
  \***************************************************************/
/*! exports provided: WrongLoanApplication, WrongLoanApplicationList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongLoanApplication", function() { return WrongLoanApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongLoanApplicationList", function() { return WrongLoanApplicationList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const WrongLoanApplication = {
    loanApplicationId: '000000',
    productName: '000000',
    firstName: 'WRONG',
    lastName: 'WRONG'
};
const WrongLoanApplicationList = [WrongLoanApplication];


/***/ }),

/***/ "./src/app/loanapplications/loanapplications-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/loanapplications/loanapplications-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LoanApplicationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationsRoutingModule", function() { return LoanApplicationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _loanapplication_list_loanapplication_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loanapplication-list/loanapplication-list.component */ "./src/app/loanapplications/loanapplication-list/loanapplication-list.component.ts");






const routes = [
    {
        path: '',
        component: _loanapplication_list_loanapplication_list_component__WEBPACK_IMPORTED_MODULE_5__["LoanApplicationListComponent"],
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }
];
let LoanApplicationsRoutingModule = class LoanApplicationsRoutingModule {
};
LoanApplicationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], LoanApplicationsRoutingModule);



/***/ }),

/***/ "./src/app/loanapplications/loanapplications.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/loanapplications/loanapplications.module.ts ***!
  \*************************************************************/
/*! exports provided: LoanApplicationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanApplicationsModule", function() { return LoanApplicationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _shared_ng_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ng-material.module */ "./src/app/shared/ng-material.module.ts");
/* harmony import */ var _loanapplications_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loanapplications-routing.module */ "./src/app/loanapplications/loanapplications-routing.module.ts");
/* harmony import */ var _loanapplication_list_loanapplication_table_loanapplication_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loanapplication-list/loanapplication-table/loanapplication-table.component */ "./src/app/loanapplications/loanapplication-list/loanapplication-table/loanapplication-table.component.ts");
/* harmony import */ var _loanapplication_list_loanapplication_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loanapplication-list/loanapplication-list.component */ "./src/app/loanapplications/loanapplication-list/loanapplication-list.component.ts");
/* harmony import */ var _loanapplication_list_loanapp_filter_settings_loanapp_filter_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component */ "./src/app/loanapplications/loanapplication-list/loanapp-filter-settings/loanapp-filter-settings.component.ts");










let LoanApplicationsModule = class LoanApplicationsModule {
};
LoanApplicationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loanapplication_list_loanapplication_list_component__WEBPACK_IMPORTED_MODULE_8__["LoanApplicationListComponent"],
            _loanapplication_list_loanapp_filter_settings_loanapp_filter_settings_component__WEBPACK_IMPORTED_MODULE_9__["LoanappFilterSettingsComponent"],
            _loanapplication_list_loanapplication_table_loanapplication_table_component__WEBPACK_IMPORTED_MODULE_7__["LoanApplicationTableComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
            _shared_ng_material_module__WEBPACK_IMPORTED_MODULE_5__["NgMaterialModule"],
            _loanapplications_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoanApplicationsRoutingModule"]
        ]
    })
], LoanApplicationsModule);



/***/ })

}]);