(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["clients-clients-module"],{

/***/ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js ***!
  \**********************************************************************/
/*! exports provided: LazyLoadImageDirective, LazyLoadImageModule, intersectionObserverPreset, scrollPreset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadImageDirective", function() { return LazyLoadImageDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadImageModule", function() { return LazyLoadImageModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectionObserverPreset", function() { return intersectionObserverPreset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollPreset", function() { return scrollPreset; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






const cssClassNames = {
    loaded: 'ng-lazyloaded',
    loading: 'ng-lazyloading',
    failed: 'ng-failed-lazyloaded'
};
function removeCssClassName(element, cssClassName) {
    element.className = element.className.replace(cssClassName, '');
}
function addCssClassName(element, cssClassName) {
    if (!element.className.includes(cssClassName)) {
        element.className += ` ${cssClassName}`;
    }
}
function hasCssClassName(element, cssClassName) {
    return element.className && element.className.includes(cssClassName);
}

function getNavigator() {
    return typeof window !== 'undefined' ? window.navigator : undefined;
}
function isChildOfPicture(element) {
    return Boolean(element.parentElement && element.parentElement.nodeName.toLowerCase() === 'picture');
}
function isImageElement(element) {
    return element.nodeName.toLowerCase() === 'img';
}
function setImage(element, imagePath, useSrcset) {
    if (isImageElement(element)) {
        if (useSrcset && 'srcset' in element) {
            element.srcset = imagePath;
        }
        else {
            element.src = imagePath;
        }
    }
    else {
        element.style.backgroundImage = `url('${imagePath}')`;
    }
    return element;
}
function setSources(attrName) {
    return (image) => {
        const sources = image.parentElement.getElementsByTagName('source');
        for (let i = 0; i < sources.length; i++) {
            const attrValue = sources[i].getAttribute(attrName);
            if (attrValue) {
                // Check if `srcset` is supported by the current browser
                if ('srcset' in sources[i]) {
                    sources[i].srcset = attrValue;
                }
                else {
                    sources[i].src = attrValue;
                }
            }
        }
    };
}
const setSourcesToDefault = setSources('defaultImage');
const setSourcesToLazy = setSources('lazyLoad');
const setSourcesToError = setSources('errorImage');
function setImageAndSources(setSourcesFn) {
    return (element, imagePath, useSrcset) => {
        if (isImageElement(element) && isChildOfPicture(element)) {
            setSourcesFn(element);
        }
        if (imagePath) {
            setImage(element, imagePath, useSrcset);
        }
    };
}
const setImageAndSourcesToDefault = setImageAndSources(setSourcesToDefault);
const setImageAndSourcesToLazy = setImageAndSources(setSourcesToLazy);
const setImageAndSourcesToError = setImageAndSources(setSourcesToError);

const end = ({ element }) => {
    addCssClassName(element, cssClassNames.loaded);
    removeCssClassName(element, cssClassNames.loading);
};
const ɵ0 = end;
const loadImage = ({ element, useSrcset, imagePath, decode }) => {
    let img;
    if (isImageElement(element) && isChildOfPicture(element)) {
        const parentClone = element.parentNode.cloneNode(true);
        img = parentClone.getElementsByTagName('img')[0];
        setSourcesToLazy(img);
        setImage(img, imagePath, useSrcset);
    }
    else {
        img = new Image();
        if (isImageElement(element) && element.sizes) {
            img.sizes = element.sizes;
        }
        if (useSrcset && 'srcset' in img) {
            img.srcset = imagePath;
        }
        else {
            img.src = imagePath;
        }
    }
    if (decode && img.decode) {
        return img.decode().then(() => imagePath);
    }
    return new Promise((resolve, reject) => {
        img.onload = () => resolve(imagePath);
        img.onerror = () => reject(null);
    });
};
const setErrorImage = ({ element, errorImagePath, useSrcset }) => {
    setImageAndSourcesToError(element, errorImagePath, useSrcset);
    addCssClassName(element, cssClassNames.failed);
};
const ɵ1 = setErrorImage;
const setLoadedImage = ({ element, imagePath, useSrcset }) => {
    setImageAndSourcesToLazy(element, imagePath, useSrcset);
};
const ɵ2 = setLoadedImage;
const setup = ({ element, defaultImagePath, useSrcset }) => {
    setImageAndSourcesToDefault(element, defaultImagePath, useSrcset);
    addCssClassName(element, cssClassNames.loading);
    if (hasCssClassName(element, cssClassNames.loaded)) {
        removeCssClassName(element, cssClassNames.loaded);
    }
};
const ɵ3 = setup;
const isBot = navigator => {
    if (navigator && navigator.userAgent) {
        return /googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot/i.test(navigator.userAgent);
    }
    return false;
};
const sharedPreset = {
    finally: end,
    loadImage,
    setErrorImage,
    setLoadedImage,
    setup,
    isBot
};

const observers = new WeakMap();
const intersectionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
function loadingCallback(entrys) {
    entrys.forEach(entry => intersectionSubject.next(entry));
}
const uniqKey = {};
const getIntersectionObserver = (attributes) => {
    const scrollContainerKey = attributes.scrollContainer || uniqKey;
    const options = {
        root: attributes.scrollContainer || null
    };
    if (attributes.offset) {
        options.rootMargin = `${attributes.offset}px`;
    }
    let observer = observers.get(scrollContainerKey);
    if (!observer) {
        observer = new IntersectionObserver(loadingCallback, options);
        observers.set(scrollContainerKey, observer);
    }
    observer.observe(attributes.element);
    return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((obs) => {
        const subscription = intersectionSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(entry => entry.target === attributes.element)).subscribe(obs);
        return () => {
            subscription.unsubscribe();
            observer.unobserve(attributes.element);
        };
    });
};

const isVisible = ({ event }) => {
    return event.isIntersecting;
};
const getObservable = (attributes, _getInterObserver = getIntersectionObserver) => {
    if (attributes.customObservable) {
        return attributes.customObservable;
    }
    return _getInterObserver(attributes);
};
const intersectionObserverPreset = Object.assign({}, sharedPreset, {
    isVisible,
    getObservable
});

const isVisible$1 = () => {
    return true;
};
const ɵ0$1 = isVisible$1;
const getObservable$1 = () => {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('load');
};
const ɵ1$1 = getObservable$1;
const loadImage$1 = ({ imagePath }) => {
    return [imagePath];
};
const ɵ2$1 = loadImage$1;
const ssrPreset = Object.assign({}, sharedPreset, {
    isVisible: isVisible$1,
    getObservable: getObservable$1,
    loadImage: loadImage$1
});

function createHooks(platformId, options) {
    const defaultPreset = intersectionObserverPreset;
    const isBot = options && options.isBot ? options.isBot : defaultPreset.isBot;
    if (isBot(getNavigator(), platformId)) {
        return Object.assign(ssrPreset, { isBot });
    }
    else if (!options) {
        return defaultPreset;
    }
    const hooks = {};
    if (options.preset) {
        Object.assign(hooks, options.preset);
    }
    else {
        Object.assign(hooks, defaultPreset);
    }
    Object.keys(options)
        .filter(key => key !== 'preset')
        .forEach(key => {
        hooks[key] = options[key];
    });
    return hooks;
}

function lazyLoadImage(hookSet, attributes) {
    return (evntObservable) => {
        return evntObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => attributes.onStateChange.emit({ reason: 'observer-emit', data })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => hookSet.isVisible({
            element: attributes.element,
            event: event,
            offset: attributes.offset,
            scrollContainer: attributes.scrollContainer
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => attributes.onStateChange.emit({ reason: 'start-loading' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => hookSet.loadImage(attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => attributes.onStateChange.emit({ reason: 'mount-image' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(imagePath => hookSet.setLoadedImage({
            element: attributes.element,
            imagePath,
            useSrcset: attributes.useSrcset
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => attributes.onStateChange.emit({ reason: 'loading-succeeded' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            attributes.onStateChange.emit({ reason: 'loading-failed', data: error });
            hookSet.setErrorImage(attributes);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            attributes.onStateChange.emit({ reason: 'finally' });
            hookSet.finally(attributes);
        }));
    };
}

let LazyLoadImageDirective = class LazyLoadImageDirective {
    constructor(el, ngZone, platformId, options) {
        this.onStateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // Emits an event on every state change
        this.onLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"](); // @deprecated use `onStateChange` instead.
        this.elementRef = el;
        this.ngZone = ngZone;
        this.propertyChanges$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"]();
        this.platformId = platformId;
        this.hooks = createHooks(platformId, options);
    }
    ngOnChanges() {
        if (this.debug === true && !this.debugSubscription) {
            this.debugSubscription = this.onStateChange.subscribe((e) => console.log(e));
        }
        this.propertyChanges$.next({
            element: this.elementRef.nativeElement,
            imagePath: this.lazyImage,
            defaultImagePath: this.defaultImage,
            errorImagePath: this.errorImage,
            useSrcset: this.useSrcset,
            offset: this.offset ? this.offset | 0 : 0,
            scrollContainer: this.scrollTarget,
            customObservable: this.customObservable,
            decode: this.decode,
            onStateChange: this.onStateChange
        });
    }
    ngAfterContentInit() {
        // Don't do anything if SSR and the user isn't a bot
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this.platformId) && !this.hooks.isBot(getNavigator(), this.platformId)) {
            return null;
        }
        this.ngZone.runOutsideAngular(() => {
            this.loadSubscription = this.propertyChanges$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(attributes => attributes.onStateChange.emit({ reason: 'setup' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(attributes => this.hooks.setup(attributes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(attributes => {
                if (!attributes.imagePath) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["never"])();
                }
                return this.hooks.getObservable(attributes).pipe(lazyLoadImage(this.hooks, attributes));
            }))
                .subscribe(success => this.onLoad.emit(success));
        });
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.loadSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.debugSubscription) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
};
LazyLoadImageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: ['options',] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('lazyLoad')
], LazyLoadImageDirective.prototype, "lazyImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LazyLoadImageDirective.prototype, "defaultImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LazyLoadImageDirective.prototype, "errorImage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LazyLoadImageDirective.prototype, "scrollTarget", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LazyLoadImageDirective.prototype, "customObservable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LazyLoadImageDirective.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LazyLoadImageDirective.prototype, "useSrcset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LazyLoadImageDirective.prototype, "decode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LazyLoadImageDirective.prototype, "debug", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], LazyLoadImageDirective.prototype, "onStateChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], LazyLoadImageDirective.prototype, "onLoad", void 0);
LazyLoadImageDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[lazyLoad]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])('options'))
], LazyLoadImageDirective);

var LazyLoadImageModule_1;
let LazyLoadImageModule = LazyLoadImageModule_1 = class LazyLoadImageModule {
    static forRoot(options) {
        return {
            ngModule: LazyLoadImageModule_1,
            providers: [{ provide: 'options', useValue: options }]
        };
    }
};
LazyLoadImageModule = LazyLoadImageModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [LazyLoadImageDirective],
        exports: [LazyLoadImageDirective]
    })
], LazyLoadImageModule);

class Rect {
    constructor(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    static fromElement(element) {
        const { left, top, right, bottom } = element.getBoundingClientRect();
        if (left === 0 && top === 0 && right === 0 && bottom === 0) {
            return Rect.empty;
        }
        else {
            return new Rect(left, top, right, bottom);
        }
    }
    static fromWindow(_window) {
        return new Rect(0, 0, _window.innerWidth, _window.innerHeight);
    }
    inflate(inflateBy) {
        this.left -= inflateBy;
        this.top -= inflateBy;
        this.right += inflateBy;
        this.bottom += inflateBy;
    }
    intersectsWith(rect) {
        return rect.left < this.right && this.left < rect.right && rect.top < this.bottom && this.top < rect.bottom;
    }
    getIntersectionWith(rect) {
        const left = Math.max(this.left, rect.left);
        const top = Math.max(this.top, rect.top);
        const right = Math.min(this.right, rect.right);
        const bottom = Math.min(this.bottom, rect.bottom);
        if (right >= left && bottom >= top) {
            return new Rect(left, top, right, bottom);
        }
        else {
            return Rect.empty;
        }
    }
}
Rect.empty = new Rect(0, 0, 0, 0);

const scrollListeners = new WeakMap();
function sampleObservable(obs, scheduler) {
    return obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["sampleTime"])(100, scheduler), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
}
// Only create one scroll listener per target and share the observable.
// Typical, there will only be one observable per application
const getScrollListener = (scrollTarget) => {
    if (!scrollTarget || typeof scrollTarget.addEventListener !== 'function') {
        console.warn('`addEventListener` on ' + scrollTarget + ' (scrollTarget) is not a function. Skipping this target');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    }
    const scrollListener = scrollListeners.get(scrollTarget);
    if (scrollListener) {
        return scrollListener;
    }
    const srollEvent = rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create((observer) => {
        const eventName = 'scroll';
        const handler = (event) => observer.next(event);
        const options = { passive: true, capture: false };
        scrollTarget.addEventListener(eventName, handler, options);
        return () => scrollTarget.removeEventListener(eventName, handler, options);
    });
    const listener = sampleObservable(srollEvent);
    scrollListeners.set(scrollTarget, listener);
    return listener;
};

const isVisible$2 = ({ element, offset, scrollContainer }, getWindow = () => window) => {
    const elementBounds = Rect.fromElement(element);
    if (elementBounds === Rect.empty) {
        return false;
    }
    const windowBounds = Rect.fromWindow(getWindow());
    elementBounds.inflate(offset);
    if (scrollContainer) {
        const scrollContainerBounds = Rect.fromElement(scrollContainer);
        const intersection = scrollContainerBounds.getIntersectionWith(windowBounds);
        return elementBounds.intersectsWith(intersection);
    }
    else {
        return elementBounds.intersectsWith(windowBounds);
    }
};
const getObservable$2 = (attributes) => {
    if (attributes.customObservable) {
        return attributes.customObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
    }
    if (attributes.scrollContainer) {
        return getScrollListener(attributes.scrollContainer);
    }
    return getScrollListener(window);
};
const ɵ0$2 = getObservable$2;
const scrollPreset = Object.assign({}, sharedPreset, {
    isVisible: isVisible$2,
    getObservable: getObservable$2
});

var LazyLoadImageModule$1 = LazyLoadImageModule;

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-lazyload-image.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--  <p>AmortizationScheduleTableComponent works!</p>  -->\n\n<!--   paymentScheduleData: {{ paymentScheduleData | json }} -->\n\n<!--\n <ng-container  [ngClass]=\"isVisible ? 'tgi-visible' : 'tgi-no-visible'\" >\n      <table mat-table  [dataSource]=\"paymentsDataSource\" matSort \n      class=\"mat-elevation-z8 tgi-table-container\"  >\n-->  \n     <table mat-table  class=\"tgi-visible\" \n          [dataSource]=\"paymentsDataSource\" matSort \n          class=\"mat-elevation-z8 tgi-table-container\"  >\n        \n      <ng-container matColumnDef=\"id\" >\n        <th mat-header-cell *matHeaderCellDef class=\"tgi-mat-cell\" class=\"tgi-mat-cell\">#</th>\n        <td mat-cell *matCellDef=\"let payment; let i = index\" class=\"tgi-mat-cell\"> {{i+1}} </td>\n        <td mat-footer-cell *matFooterCellDef class=\"tgi-mat-cell\"></td>\n      </ng-container>\n\n               \n          <ng-container matColumnDef=\"paymentDate\">\n            <th mat-header-cell *matHeaderCellDef >Date</th>\n            <td mat-cell *matCellDef=\"let payment\"> {{getValueDate(payment.paymentDate)}} </td>\n            <td mat-footer-cell *matFooterCellDef> Total:</td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"beginingBalance\">\n            <th mat-header-cell *matHeaderCellDef >Beginning Balance</th>\n            <td mat-cell *matCellDef=\"let payment\"> {{getValueBaks(payment.beginingBalance)}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"installment\">\n            <th mat-header-cell *matHeaderCellDef >Scheduled Payment</th>\n            <td mat-cell *matCellDef=\"let payment\"> {{getValueBaks(payment.installment)}} </td>\n            <td mat-footer-cell *matFooterCellDef> {{getScheduledPaymentTotalBaks()}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"principalPayment\">\n            <th mat-header-cell *matHeaderCellDef >Principal</th>\n            <td mat-cell *matCellDef=\"let payment\"> {{getValueBaks(payment.principalPayment)}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getPrincipalPaymentTotalBaks()}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"totalInterest\">\n            <th mat-header-cell *matHeaderCellDef >Interest</th>\n            <td mat-cell *matCellDef=\"let payment\"> {{getValueBaks(payment.totalInterest)}} </td>\n            <td mat-footer-cell *matFooterCellDef>{{getTotalInterestTotalBaks()}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"totalFees\">\n            <th mat-header-cell *matHeaderCellDef >Fees</th>\n            <td mat-cell *matCellDef=\"let payment\"> {{getValueBaks(payment.totalFees)}} </td>\n            <td mat-footer-cell  *matFooterCellDef>{{getTotalFeesTotalBaks()}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"endingBalance\">\n            <th mat-header-cell *matHeaderCellDef >Ending Balance</th>\n            <td mat-cell *matCellDef=\"let payment\"> {{getValueBaks(payment.endingBalance)}} </td>\n            <td mat-footer-cell *matFooterCellDef></td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let payment; columns: displayedColumns;\" class=\"tbl-row\"\n            [class.selected-tbl-row]=\"selectedPaymentSchedule === payment\" (click)=\"onTblRowClick(payment)\">\n          </tr>          \n          <tr mat-footer-row  *matFooterRowDef=\"displayedColumns; sticky: false\"></tr>\n\n    </table>\n<!--\n  </ng-container>\n -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"currentPaymentSchedule$ | async\"></ng-container>\n\n<mat-card class=\"tgi-mat-card-amortization\">\n\n  <mat-card-header>\n\n    <div class=\"flex-row\">\n\n      <div class=\"flex-item\">\n\n        <div class=\"flex-spinner-container\">\n\n          <ng-container *ngIf=\"(isPaymentScheduleChanged$ | async) as r\">\n\n            <!--  <ng-container *ngIf=\"(r.isEnd === false)\"> -->\n            <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n\n              <div>LOADING PAYMENT SCHEDULE</div>\n              <div class=\"tgi-mat-spinner\">\n                <mat-spinner diameter=\"20\"></mat-spinner>\n              </div>\n\n            </ng-container>\n\n          </ng-container>\n\n        </div>\n\n      </div>\n      <!-- \n      <h5>dataForAmortizationSchedule: {{ dataForAmortizationSchedule | json  }}</h5> \n      -->\n      <ng-container *ngIf=\"(currentUser$ | async) as ut\"></ng-container>\n      <!-- <ng-container *ngIf=\"(currentPaymentSchedule$ | async) as paymentSchedule\"> -->\n\n        <!--   <div> {{paymentSchedule | json}} </div>  -->\n\n        <div class=\"flex-item-title\">\n\n          <mat-card-title>\n            <div class=\"tgi-label-type\">Amortization Shedule ( {{amortizationTypes[currentAmortizType]}} )\n            </div>\n\n            <button mat-stroked-button class=\"tgi-mat-button\" \n                    (click)=\"onLoadPaymentSchedule($event)\"\n                  >\n                    Calculate Amortization\n            </button>\n\n          </mat-card-title>\n\n        </div>\n      \n      <!-- <ng-container *ngIf=\"(currentPaymentSchedule$ | async) as paymentSchedule\"> -->\n      \n        <div class=\"flex-item\">\n\n          <app-amortization-schedule-table style=\"width: 100%;\"\n                      [paymentScheduleData]=\"curPaymentSchedule\">\n          </app-amortization-schedule-table>\n\n        </div>\n\n      <!-- </ng-container> -->\n\n    </div>\n  </mat-card-header>\n\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ng-container *ngIf=\"(activatedRouteParentParams$ | async ) as prodId\"></ng-container>\n  <ng-container *ngIf=\"(currentUser$ | async )\"></ng-container>\n\n  <ng-container *ngIf=\"(currentLoanProduct$ | async) as loanProduct\">\n    <!-- <pre>{{loanProduct | json}}</pre> -->\n    <app-buisness-loan-app-form \n                    [data-source]=\"loanProduct\"                    \n                  >\n    </app-buisness-loan-app-form>\n  </ng-container>\n  \n  <ng-container *ngIf=\"(isLoanProductChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n      <div class=\"spinner-container\">\n        <span>LOADING LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>\n<!--   \n  <ng-container *ngIf=\"(isLoanAppChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'UPDATE')\">\n      <div class=\"spinner-container\">\n        <span>APPROVE BUSINESS LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>\n -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tgi-body-component\">\n  <div class=\"flex-container\">\n    <div class=\"flex-column-left\">\n\n      <div class=\"flex-item  tgi-mat-card-left\">\n\n        <app-business-loan-app-detail>\n        </app-business-loan-app-detail>\n\n      </div>\n    </div>\n\n    <div class=\"flex-column-right\">\n      <form [formGroup]=\"buisnessLoanForm\">\n\n        <div class=\"flex-item\">\n          <app-loan-app-params #loanAppParams\n                              [data-source]=\"productData\" \n                              (current-amortiz-type)=\"onCurrentAmortizType($event)\"\n                              >\n          </app-loan-app-params>\n        </div>\n\n        <div class=\"flex-item\">\n          <app-loan-app-fees #loanAppFees\n                              [data-source]=\"productData\"\n                              >\n          </app-loan-app-fees>\n        </div>\n\n        <div class=\"flex-item\">\n          <app-loan-credit-line-options #loanCreditLineOpts\n                              [data-source]=\"productData\" \n                              >\n          </app-loan-credit-line-options>\n        </div>\n\n      </form>\n\n      <div class=\"flex-item\">\n        <mat-card class=\"tgi-mat-card-buisnesss-approve\">\n<!-- \n          <mat-card-title>\n          <h5>buisnessLoanForm value: {{ buisnessLoanForm.value | json  }}</h5>    \n          <h5>buisnessLoanForm valueChanges: {{ loanParamsForm?.loanParamsFG?.valueChanges | async  | json  }}</h5>\n        </mat-card-title>     \n -->\n            <mat-card-header>        \n                  <mat-card-subtitle class=\"tgi-button-approve-loan\">\n                    <button mat-raised-button color=\"accent\"  \n                            (click)=\"onApproveLoanOk(productData)\">\n                            Approve Loan\n                    </button>\n                    <button mat-raised-button color=\"accent\" \n                            class=\"tgi-button-approve-loan-cancel\" \n                            (click)=\"onApproveLoanCancel(productData)\">\n                            Cancel\n                    </button>\n                  </mat-card-subtitle>                  \n            </mat-card-header>\n        </mat-card>\n\n      </div>\n      \n      <div class=\"flex-item\">\n        <ng-container *ngIf=\"buisnessLoanParamsFG?.valueChanges | async as param_values\">\n\n          <app-amortization-schedule \n            [dataForAmortizationSchedule]=\"param_values\" \n            [amortizationTypes]=\"productData.amortizationTypes\"\n            [currentAmortizType]= \"currentAmortizType\"\n            [productId] = \"productData.productId\" >\n          </app-amortization-schedule>\n\n        </ng-container>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<ng-container *ngIf=\"(isLoanAppChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'UPDATE')\">\n      <div class=\"spinner-container\">\n        <span>APPROVE BUISNESS LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"creditLineParamsFG\">\n\n<mat-card class=\"tgi-options tgi-mat-card-options\" *ngIf=\"productData && productData.isCreditLine\">\n  <mat-card-header>\n\n    <mat-card-subtitle>\n      <mat-divider class=\"tgi-options tgi-mat-divider\"></mat-divider>\n    </mat-card-subtitle>\n\n    <mat-card-title class=\"tgi-options tgi-mat-card-title\">Credit Line Options</mat-card-title>\n\n    <mat-card-subtitle>\n      <mat-divider class=\"tgi-options tgi-mat-divider\"></mat-divider>\n    </mat-card-subtitle>\n\n      <mat-card-subtitle class=\"tgi-options tgi-card-subtitle-1\">\n        <div class=\"tgi-options tgi-line-group\">\n            <span>Is this a revolving credit line * </span>\n            <span>\n              <section class=\"tgi-options tgi-section\">\n                <mat-radio-group formControlName=\"revolvingCreditLine\">\n                  <mat-radio-button value=\"true\">Yes</mat-radio-button>\n                  <mat-radio-button class=\"tgi-options tgi-mat-radio-button-2\" value=\"false\">No</mat-radio-button>\n                </mat-radio-group>\n              </section>\n            </span>\n       </div>\n       <div  class=\"tgi-options tgi-line-group\">\n            <span>Are Drawdowns Fixed *</span>\n            <span>\n              <section class=\"tgi-options tgi-section\">\n                <mat-radio-group formControlName=\"drawnDownFixed\">\n                  <mat-radio-button value=\"true\">Yes</mat-radio-button>\n                  <mat-radio-button class=\"tgi-options tgi-mat-radio-button-2\" value=\"false\">No</mat-radio-button>\n                </mat-radio-group>\n              </section>\n            </span>\n        </div>\n      </mat-card-subtitle>\n\n\n      <mat-card-subtitle class=\"tgi-options tgi-subtitle-2\">\n        <span>Credit Line Valid Until * </span>\n        <span class=\"tgi-options tgi-creditLineValueUtil\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"validUntilPicker\" \n                    placeholder=\"Choose Valid Until\"\n                    formControlName=\"creditLineValueUtil\">\n            <mat-datepicker-toggle matSuffix [for]=\"validUntilPicker\"></mat-datepicker-toggle>\n            <mat-datepicker #validUntilPicker></mat-datepicker>\n          </mat-form-field>\n        </span>\n      </mat-card-subtitle>\n\n      <!-- <mat-card-subtitle class=\"tgi-options tgi-subtitle-2\">\n        <pre>{{creditLineParamsFG.value | json}}</pre>\n      </mat-card-subtitle> -->\n\n  </mat-card-header>\n</mat-card>\n\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ng-container *ngIf=\"(activatedRouteParentParams$ | async ) as prodId\"></ng-container>  \n  <ng-container *ngIf=\"(currentUser$ | async )\"></ng-container>\n\n  <ng-container *ngIf=\"(currentLoanProduct$ | async) as loanProduct\">\n    <!-- <pre>{{loanProduct | json}}</pre> -->\n    <app-personal-loan-app-form \n                    [data-source]=\"loanProduct\"\n                    \n                    >\n    </app-personal-loan-app-form>\n  </ng-container>\n\n  <ng-container *ngIf=\"(isLoanProductChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n      <div class=\"spinner-container\">\n        <span>LOADING LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>\n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"tgi-mat-card-fees\" *ngIf=\"productData\">\n  <mat-card-header class=\"tgi-mat-card-header\">\n \n    <mat-card-title class=\"tgi-mat-card-title-icon-tbl\">\n      Fees\n    </mat-card-title>\n    \n    <mat-card-subtitle>\n\n    <table mat-table [dataSource]=\"feesDataSource\" class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n            <input matInput placeholder=\"Name\" [formControl]=\"element.get('name')\">            \n          </mat-form-field>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"type\">\n        <th mat-header-cell *matHeaderCellDef>Type</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n            <input matInput placeholder=\"Type\" [formControl]=\"element.get('type')\">            \n          </mat-form-field>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"method\">\n        <th mat-header-cell *matHeaderCellDef>Method</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-size\">\n            <input matInput placeholder=\"Method\" [formControl]=\"element.get('method')\">            \n          </mat-form-field>          \n        </td>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"value\">\n        <th mat-header-cell *matHeaderCellDef>Value</th>\n        <td mat-cell *matCellDef=\"let element\">\n        <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n          <input matInput placeholder=\"Value\" [formControl]=\"element.get('value')\">\n          <span matPrefix>$&nbsp;</span>\n        </mat-form-field>\n      </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tax\">\n        <th mat-header-cell *matHeaderCellDef>Tax</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n            <input matInput placeholder=\"Tax\" [formControl]=\"element.get('tax')\">            \n          </mat-form-field>          \n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"feeHandling\">\n        <th mat-header-cell *matHeaderCellDef>How do you want to handle fee</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field appearance=\"outline\" class=\"tgi-mat-form-field-size\">\n            <mat-select placeholder=\"Fee Handling\" [formControl]=\"element.get('feeHandling')\">\n              <mat-option *ngFor=\"let feeType of feesHandlingArr; index as i;\" [value]=\"i\">\n                {{feeType}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"loan-row\">\n      </tr>\n\n    </table>\n  \n  </mat-card-subtitle>\n\n  </mat-card-header>\n\n  <mat-card-footer>        \n    <!-- <pre>\n        feesDataSource:= {{feesDataSource.data | json}}\n        {{feesFormArray?.value | json}}\n    </pre> -->\n  </mat-card-footer>\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <mat-card class=\"tgi-mat-card-params\" *ngIf=\"productData\">\n    <mat-card-header  class=\"tgi-mat-card-header tgi-visible\">  \n    <!--   -->\n      <mat-card-title class=\"tgi-mat-card-title-icon\" >\n        <div>Approve Loan Application</div>\n      </mat-card-title>\n      <mat-card-subtitle>\n        <div [formGroup]=\"loanParamsFG\">\n          <mat-grid-list cols=\"4\" rowHeight=\"80px\" class=\"tgi-at-grid-list-params\">\n            <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n              Amortization Type *\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"3\">\n              <mat-form-field appearance=\"outline\">\n                <mat-select [value]=\"0\" \n                            (selectionChange)=\"amortizTypeChanged($event.value)\"\n                            formControlName=\"amortType\"\n                            #amortType=\"matSelect\"\n                          >\n                  <mat-option *ngFor=\"let atype of productData.amortizationTypes; index as i;\" [value]=\"i\">\n                    {{atype}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>            \n            </mat-grid-tile>\n            <mat-grid-tile class=\"tgi-mat-grid-tile-1\">Loan Amount *</mat-grid-tile>\n            <mat-grid-tile>\n              <mat-form-field appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                <input  matInput \n                        placeholder=\"Input Amount\" \n                        formControlName=\"loanAmount\"                        \n                >\n                <span matPrefix>$&nbsp;</span>\n                <mat-hint align=\"start\">Min: {{productData.minLoanAmount}}</mat-hint>\n                <mat-hint align=\"end\">Max: {{productData.maxLoanAmount}}</mat-hint>\n              </mat-form-field>            \n            </mat-grid-tile>\n            <ng-container *ngIf=\"curAmortizType===0\">\n              <mat-grid-tile class=\"tgi-mat-grid-tile-2\">Interest Rate *</mat-grid-tile>\n              <mat-grid-tile>\n                <mat-form-field appearance=\"outline\"  class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                  <input matInput \n                          placeholder=\"Input Interest Rate\"\n                          formControlName=\"interestRate\"                          \n                          >\n                  <span matPrefix>%&nbsp;</span>\n                  <mat-hint align=\"start\">Min: {{productData.minInterestRate}}%</mat-hint>\n                  <mat-hint align=\"end\">Max: {{productData.maxInterestRate}}%</mat-hint>\n                </mat-form-field>            \n              </mat-grid-tile>\n            </ng-container>\n            <ng-container *ngIf=\"curAmortizType===1 || curAmortizType===2\">\n              <mat-grid-tile class=\"tgi-mat-grid-tile-2\">Installment *</mat-grid-tile>\n              <mat-grid-tile>\n                <mat-form-field appearance=\"outline\"  class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                  <input  matInput \n                          placeholder=\"Input Installment\"\n                          formControlName=\"installment\"                           \n                  >\n                  <span matPrefix>$&nbsp;</span>                \n                </mat-form-field>            \n              </mat-grid-tile>\n            </ng-container>\n            <ng-container *ngIf=\"curAmortizType===2\">\n              <mat-grid-tile class=\"tgi-mat-grid-tile-2\">Interest Rate *</mat-grid-tile>\n              <mat-grid-tile>\n                <mat-form-field appearance=\"outline\"  class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                  <input matInput \n                          placeholder=\"Input Interest Rate\"\n                          formControlName=\"interestRate2\"                          \n                          >\n                  <span matPrefix>%&nbsp;</span>\n                  <mat-hint align=\"start\">Min: {{productData.minInterestRate}}%</mat-hint>\n                  <mat-hint align=\"end\">Max: {{productData.maxInterestRate}}%</mat-hint>\n                </mat-form-field>            \n              </mat-grid-tile>\n            </ng-container>\n            <ng-container *ngIf=\"curAmortizType===0 || curAmortizType===1\">\n              <mat-grid-tile class=\"tgi-mat-grid-tile-1\">Term (weekly) *</mat-grid-tile>\n              <mat-grid-tile>\n                <mat-form-field appearance=\"outline\"  class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                  <input  matInput \n                          placeholder=\"Input Term\"\n                          formControlName=\"term\"\n                          [value]=\"productData.defaultTerm\"\n                  >              \n                  <mat-hint align=\"start\">Min: {{productData.minTerm}}</mat-hint>\n                  <mat-hint align=\"end\">Max: {{productData.maxTerm}}</mat-hint>\n                </mat-form-field>\n              </mat-grid-tile>\n            </ng-container>\n            <mat-grid-tile class=\"tgi-mat-grid-tile-2\">Disbursement Date *</mat-grid-tile>\n            <mat-grid-tile>\n              <mat-form-field>\n                <input  matInput [matDatepicker]=\"disburPicker\" \n                        placeholder=\"Choose Disbursement Date\"\n                        formControlName=\"disbursDate\"                        \n                        >\n                <mat-datepicker-toggle matSuffix [for]=\"disburPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #disburPicker></mat-datepicker>\n              </mat-form-field>\n            </mat-grid-tile>\n            <mat-grid-tile class=\"tgi-mat-grid-tile-1\">First Repayment Date</mat-grid-tile>\n            <mat-grid-tile>\n              <mat-form-field>\n                <input  matInput [matDatepicker]=\"repayPicker\" \n                        placeholder=\"First Repayment Date\"\n                        formControlName=\"firstDisbursDate\"                        \n                        >\n                <mat-datepicker-toggle matSuffix [for]=\"repayPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #repayPicker></mat-datepicker>\n              </mat-form-field>\n            </mat-grid-tile>          \n            <mat-grid-tile class=\"tgi-mat-grid-tile-1\">\n              <mat-checkbox formControlName=\"isFixedRepaymentDate\"\n              >\n                Fixed Repayment Date\n              </mat-checkbox>\n            </mat-grid-tile>\n            <mat-grid-tile class=\"tgi-mat-grid-tile-1\">\n              <input  matInput hidden                       \n                      formControlName=\"arrearsGraceDay\"\n              >\n            </mat-grid-tile>      \n            <!-- <mat-grid-tile class=\"tgi-mat-grid-tile-1\">Arrears Grace Day</mat-grid-tile>\n            <mat-grid-tile [colspan]=\"3\">\n              <mat-form-field appearance=\"outline\" class=\"tgi-mat-form-field-size\">\n                <input  matInput\n                        placeholder=\"Arrears Grace Day\"\n                        formControlName=\"arrearsGraceDay\"\n                >              \n              </mat-form-field>\n            </mat-grid-tile> -->\n            <!-- <mat-grid-tile [colspan]=\"4\">\n              <div>FORM VALUE: {{this.loanParamsFG.value | json}}</div>\n            </mat-grid-tile> -->\n          </mat-grid-list>\n        </div>\n      </mat-card-subtitle>\n      <!-- -->      \n    </mat-card-header>\n  </mat-card>  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tgi-body-component\">   \n  \n  <div class=\"flex-container\">\n\n    <div class=\"flex-column-left\">\n      <div class=\"flex-item  tgi-mat-card-left\">            \n       \n        <app-personal-loan-app-detail>\n        </app-personal-loan-app-detail>\n        \n      </div>\n    </div>\n\n    <div class=\"flex-column-right\">\n      <form [formGroup]=\"personalLoanForm\">\n\n        <div class=\"flex-item\">   \n          <app-loan-app-params #loanAppParams \n                      [data-source]=\"productData\" \n                      (current-amortiz-type)=\"onCurrentAmortizType($event)\"                        \n                      >\n          </app-loan-app-params>                                 \n        </div>\n\n        <div class=\"flex-item\">   \n          <app-loan-app-fees #loanAppFees\n                      [data-source]=\"productData\"> \n          </app-loan-app-fees> \n         \n        </div>\n\n      </form>\n\n      <div class=\"flex-item\">  \n          \n        <mat-card class=\"tgi-mat-card-personal-approve\">          \n          <!-- <mat-card-title>\n            <h5>personalLoanForm value: {{ personalLoanForm.value | json  }}</h5>    \n            <h5>personalLoanForm valueChanges: {{ loanParamsForm?.loanParamsFG?.valueChanges | async  | json  }}</h5>\n          </mat-card-title> -->\n          \n           <mat-card-header>\n              <mat-card-subtitle class=\"tgi-button-approve-loan\">\n                  <button mat-raised-button color=\"accent\"\n                          (click)=\"onApproveLoanOk(productData)\">\n                          Approve Loan\n                  </button>\n                  <button mat-raised-button color=\"accent\"\n                          class=\"tgi-button-approve-loan-cancel\"\n                          (click)=\"onApproveLoanCancel(productData)\">\n                          Cancel\n                  </button>\n              </mat-card-subtitle>                  \n            </mat-card-header>\n        </mat-card>\n\n      </div>\n\n      <div class=\"flex-item\">\n        <ng-container *ngIf=\"persLoanParamsFG?.valueChanges | async as param_values\">      \n\n          <app-amortization-schedule \n              [dataForAmortizationSchedule]=\"param_values\" \n              [amortizationTypes]=\"productData.amortizationTypes\"\n              [currentAmortizType]= \"currentAmortizType\"\n              [productId] = \"productData.productId\" >\n          </app-amortization-schedule>\n\n        </ng-container>\n      </div> \n\n    </div>      \n  \n  </div>\n  \n</div>\n\n<ng-container *ngIf=\"(isLoanAppChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'UPDATE')\">\n      <div class=\"spinner-container\">\n        <span>APPROVE PERSONAL LOAN PRODUCT</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n</ng-container>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<mat-card class=\"tgi-mat-card-right\" *ngIf=\"bankStatement\">\n    <mat-card-header  class=\"tgi-mat-card-header tgi-visible\">\n\n        <mat-card-title class=\"tgi-mat-card-title-icon\">\n            <div>Bank Statement Detail </div>\n            <div class=\"nav-spacer\"></div>\n        </mat-card-title>\n        <mat-card-subtitle>\n            <mat-grid-list cols=\"4\" rowHeight=\"30px\">\n                <mat-grid-tile>Request Code<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.requestCode ? bankStatement.requestCode : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Status Text<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.statusText ? bankStatement.statusText : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Email Address<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.emailAddress ? bankStatement.emailAddress : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Institution Name<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.institutionName ? bankStatement.institutionName : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Account Name<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.accountName ? bankStatement.accountName : '-' }}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Routing Number Returned<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.routingNumberReturned ? bankStatement.routingNumberReturned : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Account Type<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.accountType ? bankStatement.accountType : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Available Balance<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.availableBalance ? bankStatement.availableBalance : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Average Balance<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.averageBalance ? bankStatement.averageBalance : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>Average Balance Recent<div class=\"nav-spacer\"></div></mat-grid-tile>\n                <mat-grid-tile>{{bankStatement.averageBalanceRecent ? bankStatement.averageBalanceRecent : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n            </mat-grid-list>\n        </mat-card-subtitle>\n\n    </mat-card-header>\n</mat-card>\n\n<ng-container *ngIf=\"(isDenyChanged$  | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n        <div class=\"spinner-container\">\n            <span>DENY LOAN APPLICATION</span>\n            <mat-spinner diameter=\"30\"></mat-spinner>\n        </div>\n    </ng-container>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card class=\"tgi-blad-mat-card-left\">\n  <mat-card-header class=\"tgi-blad-mat-card-header\">\n\n  <ng-container *ngIf=\"businessLoan\">\n\n  <mat-card-subtitle class=\"tgi-blad-subtitle-line-1\">Loan Product: {{businessLoan.loanProductName ? businessLoan.loanProductName : ' -'}} </mat-card-subtitle>\n  <mat-card-subtitle >Loan Purpose: {{businessLoan.loanPurpose ? businessLoan.loanPurpose : '-' }}</mat-card-subtitle>\n    <mat-card-subtitle >Loan Amount: {{businessLoan.loanAmount ? businessLoan.loanAmount : '-'}}</mat-card-subtitle>\n    <mat-card-subtitle >Description: {{businessLoan.productDescr ? businessLoan.productDescr : '-' }}</mat-card-subtitle>\n  <mat-card-subtitle >Credit Score: {{businessLoan.creditScore ? businessLoan.creditScore : ' -'}}</mat-card-subtitle>\n    <mat-card-subtitle >Average Monthly: {{businessLoan.averageMontlyRevenue ? businessLoan.averageMontlyRevenue : ' -'}}</mat-card-subtitle>\n    <mat-card-subtitle >Industry: {{businessLoan.industry ? businessLoan.industry : ' -'}}</mat-card-subtitle>\n  <mat-card-subtitle >Revenue Source: {{businessLoan.revenueSource ? businessLoan.revenueSource : '-' }}</mat-card-subtitle>\n    <mat-card-subtitle ><mat-checkbox [checked]=\"businessLoan.taxLien\" disabled >Tax Lien</mat-checkbox></mat-card-subtitle>\n    <mat-card-subtitle ><mat-checkbox [checked]=\"businessLoan.bankruptcy\" disabled >Bankruptcy</mat-checkbox></mat-card-subtitle>\n</ng-container>\n\n  </mat-card-header>\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-app/business-loan-app.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-app/business-loan-app.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card class=\"tgi-mat-card-right\" *ngIf=\"buisnessLoan\">\n  <mat-card-header  class=\"tgi-mat-card-header tgi-visible\">\n\n    <mat-card-title class=\"tgi-mat-card-title-icon\">\n      <div>Business Loan Application</div>\n      <div class=\"nav-spacer\"></div>\n      \n      <button mat-stroked-button [disabled]=\"disabledButtons\" \n                (click)=\"onApproveBtnClick()\">APPROVE</button>\n<!--       \n      <ng-container *ngIf=\"buisnessLoan.outstandingItems == false\">\n        <button mat-stroked-button [disabled]=\"disabledButtons\" (click)=\"onApproveBtnClick()\">APPROVE</button>\n      </ng-container>\n      <ng-container *ngIf=\"buisnessLoan.outstandingItems == true\">\n        <button mat-stroked-button [disabled]=true>NOT READY FOR APPROVAL</button>\n      </ng-container>\n       -->\n      <button mat-stroked-button [disabled]=\"disabledButtons\" class=\"tgi-button-deny\"\n                                  (click)=\"onDenyBtnClick()\">DENY</button>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <mat-grid-list cols=\"4\" rowHeight=\"30px\">\n        \n        <mat-grid-tile>Loan Product<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.productName ? buisnessLoan.productName : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Loan Purpose<div class=\"nav-spacer\"></div></mat-grid-tile>        \n        <mat-grid-tile>{{buisnessLoan.productDescr ? buisnessLoan.productDescr : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        \n        <mat-grid-tile>Credit Score<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.creditScore ? buisnessLoan.creditScore : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Average Monthly<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.averageMontlyRevenue ? buisnessLoan.averageMontlyRevenue : '-' }}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        \n        <mat-grid-tile>Industry<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.industry ? buisnessLoan.industry : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Revenue Source<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.revenueSource ? buisnessLoan.revenueSource : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        \n        <mat-grid-tile><mat-checkbox [disabled]=\"true\" [checked]=\"buisnessLoan.taxLien\">Tax Lien</mat-checkbox><div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile><div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile><mat-checkbox [disabled]=\"true\" [checked]=\"buisnessLoan.bankruptcy\">Bankruptcy</mat-checkbox><div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        \n        <mat-grid-tile>Missing Identifications<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile [colspan]=3 >{{buisnessLoan.missingItems ? buisnessLoan.missingItems : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n      \n      </mat-grid-list>\n    </mat-card-subtitle>\n\n    <!-- <mat-card-title-group> -->\n      <mat-card-title class=\"tgi-mat-card-title-icon\">\n        <div>Officers</div>\n      </mat-card-title>\n\n      <table mat-table [dataSource]=\"officerDataSource\" class=\"mat-elevation-z8\">\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n        <!-- Title Column -->\n        <ng-container matColumnDef=\"title\">\n          <th mat-header-cell *matHeaderCellDef> Title </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n        </ng-container>\n\n        <!-- Ownership Percentage Column -->\n        <ng-container matColumnDef=\"ownershipPercentage\">\n          <th mat-header-cell *matHeaderCellDef> Ownership Percentage </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.ownershipPercentage}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>        \n    <!-- </mat-card-title-group> -->\n\n\n  </mat-card-header>\n</mat-card>\n\n<ng-container *ngIf=\"(isDenyChanged$  | async) as r\">\n  <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n    <div class=\"spinner-container\">\n      <span>DENY LOAN APPLICATION</span>\n      <mat-spinner diameter=\"30\"></mat-spinner>\n    </div>\n  </ng-container>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card class=\"tgi-mat-card-left\">\n  <mat-card-header class=\"tgi-mat-card-header\">\n\n  <ng-container *ngIf=\"businessLoan\">\n\n  <mat-card-subtitle >Loan Product: {{businessLoan.loanProductName ? businessLoan.loanProductName : ' -'}} </mat-card-subtitle>\n  <mat-card-subtitle >Loan Purpose: {{businessLoan.loanPurpose ? businessLoan.loanPurpose : '-' }}</mat-card-subtitle>\n    <mat-card-subtitle >Loan Amount: {{businessLoan.loanAmount ? businessLoan.loanAmount : '-'}}</mat-card-subtitle>\n    <mat-card-subtitle >Description: {{businessLoan.productDescr ? businessLoan.productDescr : '-' }}</mat-card-subtitle>\n  <mat-card-subtitle >Credit Score: {{businessLoan.creditScore ? businessLoan.creditScore : ' -'}}</mat-card-subtitle>\n    <mat-card-subtitle >Average Monthly: {{businessLoan.averageMontlyRevenue ? businessLoan.averageMontlyRevenue : ' -'}}</mat-card-subtitle>\n    <mat-card-subtitle >Industry: {{businessLoan.industry ? businessLoan.industry : ' -'}}</mat-card-subtitle>\n  <mat-card-subtitle >Revenue Source: {{businessLoan.revenueSource ? businessLoan.revenueSource : '-' }}</mat-card-subtitle>\n    <mat-card-subtitle ><mat-checkbox [checked]=\"businessLoan.taxLien\">Tax Lien</mat-checkbox></mat-card-subtitle>\n    <mat-card-subtitle ><mat-checkbox [checked]=\"businessLoan.bankruptcy\">Bankruptcy</mat-checkbox></mat-card-subtitle>\n</ng-container>\n\n  </mat-card-header>\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan/business-loan.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan/business-loan.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card class=\"tgi-mat-card-right\" *ngIf=\"buisnessLoan\">\n  <mat-card-header  class=\"tgi-mat-card-header tgi-visible\">\n\n    <mat-card-title class=\"tgi-mat-card-title-icon\">\n      <div>Business Loan </div>\n      <div class=\"nav-spacer\"></div>\n      <button mat-stroked-button [disabled]=\"disabledButtons\" (click)=\"onApproveBtnClick()\">FUND</button>\n      <button mat-stroked-button [disabled]=\"disabledButtons\" class=\"tgi-button-deny\" (click)=\"onDenyBtnClick()\" class=\"tgi-button-deny\">DENY</button>\n\n\n    </mat-card-title>\n    <mat-card-subtitle>\n      <mat-grid-list cols=\"4\" rowHeight=\"30px\">\n        <mat-grid-tile>Loan Product<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.productName ? buisnessLoan.productName : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Loan Purpose<div class=\"nav-spacer\"></div></mat-grid-tile>        \n        <mat-grid-tile>{{buisnessLoan.productDescr ? buisnessLoan.productDescr : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Credit Score<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.creditScore ? buisnessLoan.creditScore : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Average Monthly<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.averageMontlyRevenue ? buisnessLoan.averageMontlyRevenue : '-' }}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Industry<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.industry ? buisnessLoan.industry : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Revenue Source<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.revenueSource ? buisnessLoan.revenueSource : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile><mat-checkbox [disabled]=\"true\" [checked]=\"buisnessLoan.taxLien\">Tax Lien</mat-checkbox><div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile><div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile><mat-checkbox [disabled]=\"true\" [checked]=\"buisnessLoan.bankruptcy\">Bankruptcy</mat-checkbox><div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-subtitle>\n\n    <mat-card-title class=\"tgi-mat-card-title-icon\">\n      <div>Loan Detail</div>\n      <div class=\"nav-spacer\"></div>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <mat-grid-list cols=\"4\" rowHeight=\"30px\">\n        <mat-grid-tile>Approved Loan Amount<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.loanAmount ? buisnessLoan.loanAmount : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Requested Loan Amount<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.requestedLoanAmount ? buisnessLoan.requestedLoanAmount : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Interest Rate<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.interestRate ? buisnessLoan.interestRate : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Selected Term<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{buisnessLoan.term ? buisnessLoan.term : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-subtitle>\n\n    <!-- <mat-card-title-group> -->\n      <mat-card-title class=\"tgi-mat-card-title-icon\">\n        <div>Officers</div>\n      </mat-card-title>\n\n      <table mat-table [dataSource]=\"officerDataSource\" class=\"mat-elevation-z8\">\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef> Name </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        </ng-container>\n\n        <!-- Title Column -->\n        <ng-container matColumnDef=\"title\">\n          <th mat-header-cell *matHeaderCellDef> Title </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n        </ng-container>\n\n        <!-- Ownership Percentage Column -->\n        <ng-container matColumnDef=\"ownershipPercentage\">\n          <th mat-header-cell *matHeaderCellDef> Ownership Percentage </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.ownershipPercentage}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>        \n    <!-- </mat-card-title-group> -->\n\n\n\n  </mat-card-header>\n</mat-card>\n\n<ng-container *ngIf=\"(isDenyChanged$  | async) as r\">\n  <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n    <div class=\"spinner-container\">\n      <span>DENY LOAN APPLICATION</span>\n      <mat-spinner diameter=\"30\"></mat-spinner>\n    </div>\n  </ng-container>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <p>client-detail-assets works!</p> -->\n\n<mat-card class=\"tgi-mat-card-right\">\n  <mat-card-header>\n\n      <mat-card-title class=\"tgi-mat-card-title-icon-tbl\">Assets\n        <button mat-icon-button>\n          <mat-icon  aria-hidden=\"false\" aria-label=\"Add\">add_box</mat-icon>  \n        </button>                        \n      </mat-card-title>\n\n    <mat-card-subtitle>Table Assets Client # {{clientId}}</mat-card-subtitle>\n\n  </mat-card-header>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <p>client-detail-attachments works!</p> -->\n\n<mat-card class=\"tgi-mat-card-right\">\n  <mat-card-header>\n\n      <mat-card-title class=\"tgi-mat-card-title-icon-tbl\">Attachments\n        <button mat-icon-button>\n          <mat-icon  aria-hidden=\"false\" aria-label=\"Add\">add_box</mat-icon>  \n        </button>                        \n      </mat-card-title>\n\n    <mat-card-subtitle>Table Attachments Client # {{clientId}}</mat-card-subtitle>\n\n  </mat-card-header>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <p>client-detail avatar works!</p> -->\n\n            <div class=\"tgi-avatar-container\">\n\n                <mat-card>\n                    <mat-card-header [ngClass]=\"isVisible ? 'tgi-visible' : 'tgi-no-visible'\" class=\"tgi-card-header\" >\n\n                        <div class=\"flex-container-avatar\" >\n                            <div class=\"flex-column\"> \n                              <div class=\"flex-item\">\n                                <mat-icon class=\"tgi-icon-account-size\">account_circle</mat-icon>\n                                <!-- \n                                  <ng-container *ngIf=\"isProfileImage(profileImageUrl)\">\n                                      <img mat-card-avatar class=\"tgi-img-size\" src=\"{{profileImageUrl}}\"  alt=\"Profile image\" title=\"Profile image\">\n                                  </ng-container>\n                                -->\n                              </div>\n                            </div>\n                              \n                            <div class=\"flex-column\" >              \n                              <div class=\"flex-item\"> \n                                  <mat-card-title class=\"tgi-card-title\">{{getFullName(firstName, lastName)}}</mat-card-title>\n                                  <mat-card-subtitle>Client # {{clientId}}</mat-card-subtitle>\n                                  \n                                  <mat-card-subtitle class=\"tgi-subtitle-contact\">\n                                        <div *ngIf=\"isExist(workPhoneNumber)\">  <mat-icon class=\"tgi-icon-size\">phone</mat-icon>{{getPhoneNumber(workPhoneNumber)}}</div>\n                                        <div *ngIf=\"isExist(emailAddress)\">  <mat-icon class=\"tgi-icon-size\">email</mat-icon>{{getEmail(emailAddress)}}  </div>\n                                  </mat-card-subtitle>\n\n                            </div>\n                          </div>\n                        </div>\n\n                    </mat-card-header>\n                </mat-card>\n\n            </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-documemts.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-documemts.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<p>Client Documemts Component works!</p>\n\n<ng-container *ngIf=\"( activatedRouteParentParams$ | async ) as curClient\">\n   \n    <h3>clientId: {{clientId}} - {{curClient}}</h3>\n\n</ng-container>\n<!--  -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <p>client-detail-employment works!</p> -->\n\n<mat-card class=\"tgi-mat-card-right\">\n  <mat-card-header>\n\n      <mat-card-title class=\"tgi-mat-card-title-icon-tbl\">Employment\n        <button mat-icon-button>\n          <mat-icon  aria-hidden=\"false\" aria-label=\"Add\">add_box</mat-icon>  \n        </button>                        \n      </mat-card-title>\n\n    <mat-card-subtitle>Table Employment Client # {{clientId}}</mat-card-subtitle>\n\n  </mat-card-header>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-financials.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-financials.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"tgi-body-component\">\n\n    <!-- <ng-container *ngIf=\"(activatedRouteParentParams$ | async ) as curClientId\"></ng-container> -->\n    <ng-container *ngIf=\"(currentClientDetail$ | async) as clientDetailOverview\">\n\n        <!--    <h5>clientId: {{clientDetailOverview.id}} </h5> -->\n\n        <div class=\"flex-container\">\n\n            <div class=\"flex-column-left\">\n\n                <div class=\"flex-item tgi-mat-card-left\">\n\n                    <app-client-detail-personal-info [id]=\"clientDetailOverview.id\" [profile]=\"clientDetailOverview.profile\"\n                                                     [loanOfficer]=\"clientDetailOverview.loanOfficer\" [branch]=\"clientDetailOverview.branch\">\n                    </app-client-detail-personal-info>\n\n                </div>\n\n            </div>\n\n            <!-- -->\n            <div class=\"flex-column-right\">\n\n                <div class=\"flex-item\">\n                    <mat-card-title class=\"tgi-mat-card-title-score\">\n                        <button mat-stroked-button  (click)=\"onGetCreditScore()\">Get Credit Score</button>\n                        <button mat-stroked-button  class=\"tgi-button-margin\" (click)=\"onGetBankStatement()\">Get Bank Statement</button>\n                    </mat-card-title>\n                </div>\n\n                <div class=\"flex-item\">\n                    <app-loan-symmary [clientData]=\"clientDetailOverview\"></app-loan-symmary>\n                </div>\n\n                <div class=\"flex-item\">\n                    <app-bankstatement-inquiry [bankStatement]=\"clientDetailOverview.bankStatement\"></app-bankstatement-inquiry>\n                </div>\n\n\n            </div>\n        </div>\n\n    </ng-container>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--  <p>ClientDetailIdentificationsTableComponent works!</p>  -->\n\n<!--   identificationsData: {{ identificationsData | json }} -->\n<!-- \n<ng-container *ngIf=\"(renderClientDetailIdentifications$ | async) as renderIdentifications\"></ng-container>\n-->\n\n<mat-card class=\"tgi-mat-card-right\">\n  <mat-card-header [ngClass]=\"isVisible ? 'tgi-visible' : 'tgi-no-visible'\" class=\"tgi-mat-card-header\">\n\n    <mat-card-title class=\"tgi-mat-card-title-icon-tbl\">Identification\n          <button mat-icon-button class=\"tgi-button-icon-tbl\">\n            <mat-icon class=\"tgi-icon-size-tbl\" aria-hidden=\"false\" aria-label=\"Add\">add_box</mat-icon>  \n          </button>                        \n    </mat-card-title>\n\n<!-- not use identificationsDataSource !!! use  identificationsData -->\n     <table mat-table [dataSource]=\"identificationsDataSource\" matSort class=\"mat-elevation-z8\">\n<!-- -->\n      <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef >ID</th>\n        <td mat-cell *matCellDef=\"let identification\"> {{identification.id}} </td>\n      </ng-container>\n\n          <ng-container matColumnDef=\"imageUrl\">\n            <th mat-header-cell *matHeaderCellDef >Image</th>\n            <td mat-cell *matCellDef=\"let identification\">  \n              <ng-container *ngIf=\"isImageUrl(identification.imageUrl)\">\n                <mat-icon class=\"tgi-icon-identification-size\">assignment</mat-icon>\n                <!--\n                <img mat-card-avatar class=\"tgi-tbl-img-size\" src=\"{{getImageUrl(identification.imageUrl)}}\"  alt=\"Identification image\" title=\"Identification image\">\n              -->\n            </ng-container>\n            </td>\n          </ng-container>\n       \n       \n          <ng-container matColumnDef=\"type\">\n            <th mat-header-cell *matHeaderCellDef >Type</th>\n            <td mat-cell *matCellDef=\"let identification\"> {{getValue(identification.type)}} </td>\n          </ng-container>\n\n\n          <ng-container matColumnDef=\"number\">\n            <th mat-header-cell *matHeaderCellDef >ID Number</th>\n            <td mat-cell *matCellDef=\"let identification\"> {{getValue(identification.number)}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"issuingAuthority\">\n            <th mat-header-cell *matHeaderCellDef >Issued By</th>\n            <td mat-cell *matCellDef=\"let identification\"> {{getValue(identification.issuingAuthority)}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"issueDate\">\n            <th mat-header-cell *matHeaderCellDef >Issue Date</th>\n            <td mat-cell *matCellDef=\"let identification\"> {{getValueDate(identification.issueDate)}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"expirationDate\">\n            <th mat-header-cell *matHeaderCellDef >Expiry Date</th>\n            <td mat-cell *matCellDef=\"let identification\"> {{getValueDate(identification.expirationDate)}} </td>\n          </ng-container>\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let identification; columns: displayedColumns;\" class=\"tbl-row\"\n            [class.selected-tbl-row]=\"selectedIdentification === identification\" (click)=\"onTblRowClick(identification)\">\n\n          </tr>\n\n    </table>\n\n  </mat-card-header>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--   <p>ClientDetailLoansTableComponent works!</p> -->\n\n<!--   loansData: {{ loansData }} -->\n<!-- \n<ng-container *ngIf=\"(renderClientDetailLoans$ | async) as renderLoans\"></ng-container>\n-->\n<mat-card class=\"tgi-mat-card-right\">\n\n  <mat-card-header [ngClass]=\"isVisible ? 'tgi-visible' : 'tgi-no-visible'\" class=\"tgi-mat-card-header\">\n\n    <mat-card-title class=\"tgi-mat-card-title-icon-tbl\">Loan Applications\n          <button mat-icon-button class=\"tgi-button-icon-tbl\">\n            <mat-icon class=\"tgi-icon-size-tbl\" aria-hidden=\"false\" aria-label=\"Add\">add_box</mat-icon>  \n          </button>                         \n    </mat-card-title>\n\n     <table mat-table [dataSource]=\"loansDataSource\" matSort class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef >Loan #</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.id}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"loanStartDate\">\n            <th mat-header-cell *matHeaderCellDef >Start Date</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValueDate(loan.loanStartDate)}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"loanAmount\">\n            <th mat-header-cell *matHeaderCellDef >Loan Amount</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValueBaks(loan.loanAmount)}} </td>\n          </ng-container>\n \n          <!-- ??? {{loan.feesDue}}/{{loan.penaltyDue}} -->\n          <ng-container matColumnDef=\"feesDue\">\n            <th mat-header-cell *matHeaderCellDef >Fees/Penalty Due</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValueBaks(loan.feesDue)}} / {{getValueBaks(loan.penaltyDue)}}</td>\n          </ng-container>\n          <!--\n          <ng-container matColumnDef=\"penaltyDue\">\n            <th mat-header-cell *matHeaderCellDef >Fees/Penalty Due</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValue(loan.penaltyDue)}}</td>\n          </ng-container>\n           -->\n          <ng-container matColumnDef=\"nextPayment\">\n            <th mat-header-cell *matHeaderCellDef >Next Payment</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValue(loan.nextPayment)}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef >Status</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValue(loan.status)}}</td>\n          </ng-container>\n\n\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let loan; columns: displayedColumns;\" class=\"loan-row\"\n            [class.selected-loan-row]=\"selectedLoan === loan\" (click)=\"onTblRowClick(loan)\">\n\n          </tr>\n\n    </table>\n\n  </mat-card-header>                    \n\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loan-applications.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loan-applications.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"tgi-body-component\">\n\n    <!-- <ng-container *ngIf=\"(activatedRouteParentParams$ | async ) as curClientId\"></ng-container> -->\n    <ng-container *ngIf=\"(currentClientDetail$ | async) as clientDetailOverview\">\n\n        <!--    <h5>clientId: {{clientDetailOverview.id}} </h5> -->\n\n        <div class=\"flex-container\">\n\n            <div class=\"flex-column-left\">\n\n                <div class=\"flex-item tgi-mat-card-left\">\n\n                    <app-client-detail-personal-info [id]=\"clientDetailOverview.id\" [profile]=\"clientDetailOverview.profile\"\n                                                     [loanOfficer]=\"clientDetailOverview.loanOfficer\" [branch]=\"clientDetailOverview.branch\">\n                    </app-client-detail-personal-info>\n\n                </div>\n\n            </div>\n\n            <!-- -->\n            <div class=\"flex-column-right\">\n\n                <div class=\"flex-item\">\n                    <app-loan-symmary [clientData]=\"clientDetailOverview\"></app-loan-symmary>\n                </div>\n\n                <div class=\"flex-item\">\n                    <app-personal-loan-app [data-source]=\"clientDetailOverview\"></app-personal-loan-app>\n                </div>\n\n                <div class=\"flex-item\">\n                    <app-business-loan-app [data-source]=\"clientDetailOverview\"></app-business-loan-app>\n                </div>\n\n                <div class=\"flex-item\">\n\n                    <app-client-detail-loan-app-table [loansData]=\"clientDetailOverview.loanApplications\"></app-client-detail-loan-app-table>\n\n                </div>\n\n            </div>\n        </div>\n\n    </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loans.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loans.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"tgi-body-component\">\n\n    <!-- <ng-container *ngIf=\"(activatedRouteParentParams$ | async ) as curClientId\"></ng-container> -->\n    <ng-container *ngIf=\"(currentClientDetail$ | async) as clientDetailOverview\">\n\n        <!--    <h5>clientId: {{clientDetailOverview.id}} </h5> -->\n\n        <div class=\"flex-container\">\n\n            <div class=\"flex-column-left\">\n\n                <div class=\"flex-item tgi-mat-card-left\">\n\n                    <app-client-detail-personal-info [id]=\"clientDetailOverview.id\" [profile]=\"clientDetailOverview.profile\"\n                                                     [loanOfficer]=\"clientDetailOverview.loanOfficer\" [branch]=\"clientDetailOverview.branch\">\n                    </app-client-detail-personal-info>\n\n                </div>\n\n            </div>\n\n            <!-- -->\n            <div class=\"flex-column-right\">\n\n                <div class=\"flex-item\">\n                    <app-loan-symmary [clientData]=\"clientDetailOverview\"></app-loan-symmary>\n                </div>\n\n\n                <div class=\"flex-item\">\n                    <app-personal-loan [data-source]=\"clientDetailOverview\"></app-personal-loan>\n                </div>\n\n                <div class=\"flex-item\">\n                    <app-business-loan [data-source]=\"clientDetailOverview\"></app-business-loan>\n                </div>\n\n\n                <div class=\"flex-item\">\n\n                    <app-client-detail-loans-table [loansData]=\"clientDetailOverview.loans\"></app-client-detail-loans-table>\n\n                </div>\n\n\n            </div>\n        </div>\n\n    </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!--   <p>ClientDetailLoansTableComponent works!</p> -->\n\n<!--   loansData: {{ loansData }} -->\n<!-- \n<ng-container *ngIf=\"(renderClientDetailLoans$ | async) as renderLoans\"></ng-container>\n-->\n<mat-card class=\"tgi-mat-card-right\">\n\n  <mat-card-header [ngClass]=\"isVisible ? 'tgi-visible' : 'tgi-no-visible'\" class=\"tgi-mat-card-header\">\n\n    <mat-card-title class=\"tgi-mat-card-title-icon-tbl\">Loans\n          <button mat-icon-button class=\"tgi-button-icon-tbl\">\n            <mat-icon class=\"tgi-icon-size-tbl\" aria-hidden=\"false\" aria-label=\"Add\">add_box</mat-icon>  \n          </button>                         \n    </mat-card-title>\n\n     <table mat-table [dataSource]=\"loansDataSource\" matSort class=\"mat-elevation-z8\">\n\n          <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef >Loan #</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.id}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"loanStartDate\">\n            <th mat-header-cell *matHeaderCellDef >Start Date</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValueDate(loan.loanStartDate)}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"loanAmount\">\n            <th mat-header-cell *matHeaderCellDef >Loan Amount</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValueBaks(loan.loanAmount)}} </td>\n          </ng-container>\n \n          <!-- ??? {{loan.feesDue}}/{{loan.penaltyDue}} -->\n          <ng-container matColumnDef=\"feesDue\">\n            <th mat-header-cell *matHeaderCellDef >Fees/Penalty Due</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValueBaks(loan.feesDue)}} / {{getValueBaks(loan.penaltyDue)}}</td>\n          </ng-container>\n          <!--\n          <ng-container matColumnDef=\"penaltyDue\">\n            <th mat-header-cell *matHeaderCellDef >Fees/Penalty Due</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValue(loan.penaltyDue)}}</td>\n          </ng-container>\n           -->\n          <ng-container matColumnDef=\"nextPayment\">\n            <th mat-header-cell *matHeaderCellDef >Next Payment</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValue(loan.nextPayment)}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef >Status</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{getValue(loan.status)}}</td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"drawFund\">\n            <th mat-header-cell *matHeaderCellDef ></th>\n            <td mat-cell *matCellDef=\"let loan\">\n\n                <button mat-raised-button color=\"accent\" *ngIf=\"loan.status === 'Approved'\"  (click)=\"drawFund(loan.id)\">\n                  Draw fund\n                </button>  \n            </td>\n          </ng-container>\n          \n\n        <!-- \n          <ng-container matColumnDef=\"productName\">\n            <th mat-header-cell *matHeaderCellDef >Product Name</th>\n            <td mat-cell *matCellDef=\"let client\"> {{loan.productName}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"term\">\n            <th mat-header-cell *matHeaderCellDef >Term</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.term}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"loanPurpose\">\n            <th mat-header-cell *matHeaderCellDef >Loan Purpose</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.loanPurpose}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"loanAmount\">\n            <th mat-header-cell *matHeaderCellDef >loan Amount</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.loanState}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"interestRate\">\n            <th mat-header-cell *matHeaderCellDef >Interest Rate</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.interestRate}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"maturityType\">\n            <th mat-header-cell *matHeaderCellDef >Maturity Type</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.maturityType}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"firstRepaymentDate\">\n            <th mat-header-cell *matHeaderCellDef >firstRepaymentDate</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.firstRepaymentDate}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"disbursementDate\">\n            <th mat-header-cell *matHeaderCellDef >Disbursement Date</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.disbursementDate}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"maturityDate\">\n            <th mat-header-cell *matHeaderCellDef >Maturity Date</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.maturityDate}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"nextPaymentDate\">\n            <th mat-header-cell *matHeaderCellDef >Next Payment Date</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.nextPaymentDate}} </td>\n          </ng-container>\n\n          <ng-container matColumnDef=\"nextPaymentAmount\">\n            <th mat-header-cell *matHeaderCellDef >next Payment Amount</th>\n            <td mat-cell *matCellDef=\"let loan\"> {{loan.nextPaymentAmount}} </td>\n          </ng-container>\n          -->\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let loan; columns: displayedColumns;\" class=\"loan-row\"\n            [class.selected-loan-row]=\"selectedLoan === loan\" (click)=\"onTblRowClick(loan)\">\n\n          </tr>\n\n    </table>\n\n  </mat-card-header>                    \n\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-overview.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-overview.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tgi-body-component\">\n\n  <!-- <ng-container *ngIf=\"(activatedRouteParentParams$ | async ) as curClientId\"></ng-container> -->\n  <ng-container *ngIf=\"(currentClientDetail$ | async) as clientDetailOverview\">\n\n      <!-- <h5>clientId: {{clientDetailOverview.id}} </h5> -->\n\n      <div class=\"flex-container\">\n\n        <div class=\"flex-column-left\">\n\n          <div class=\"flex-item tgi-mat-card-left\">\n\n              <app-client-detail-personal-info [id]=\"clientDetailOverview.id\" [profile]=\"clientDetailOverview.profile\"\n                [loanOfficer]=\"clientDetailOverview.loanOfficer\" [branch]=\"clientDetailOverview.branch\">\n              </app-client-detail-personal-info>\n\n          </div>\n\n        </div>\n\n        <!-- -->\n        <div class=\"flex-column-right\">\n\n          <div class=\"flex-item\">\n            <app-loan-symmary [clientData]=\"clientDetailOverview\"></app-loan-symmary>\n          </div>\n\n          <div class=\"flex-item\">\n\n            <app-client-detail-identifications-table [identificationsData]=\"clientDetailOverview.identifications\">\n            </app-client-detail-identifications-table>\n\n          </div>\n\n          <div class=\"flex-item\">\n\n            <app-client-detail-loans-table [loansData]=\"clientDetailOverview.loans\"></app-client-detail-loans-table>\n\n          </div>\n\n          <div class=\"flex-item\">\n\n            <app-client-detail-loan-app-table [loansData]=\"clientDetailOverview.loanApplications\"></app-client-detail-loan-app-table>\n\n          </div>\n\n\n          \n        </div>\n      </div>\n\n  </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <p>client-detail personal-info works!</p> -->\n\n\n<mat-card class=\"tgi-mat-card-left\">\n  <mat-card-header [ngClass]=\"isVisible ? 'tgi-visible' : 'tgi-no-visible'\" class=\"tgi-mat-card-header\">\n    <!-- ??? -->\n\n    <ng-container>\n        <mat-card-title  class=\"tgi-mat-card-title-icon\">\n              {{getFullName(profile.firstName, profile.lastName, profile.middleName)}} \n              <button mat-icon-button class=\"tgi-button-icon-notuse\">\n                  <mat-icon class=\"tgi-icon-edit-size\" aria-hidden=\"false\" aria-label=\"Edit\">edit</mat-icon> \n              </button>\n        </mat-card-title>\n\n        <mat-card-subtitle >Client # {{id}}</mat-card-subtitle>                      \n        <mat-card-subtitle >{{profile.gender}}</mat-card-subtitle>\n        <mat-card-subtitle >Marital Status: {{profile.maritalStatus}}</mat-card-subtitle>\n\n        <mat-card-subtitle  class=\"tgi-card-line-indent-2\">Date of birth: {{profile.dateOfBirth}}</mat-card-subtitle>\n        <mat-card-subtitle  class=\"tgi-card-line-indent-1\">Loan Officer: {{loanOfficer}}</mat-card-subtitle>\n        <mat-card-subtitle  class=\"tgi-card-line-indent-1\">Branch: {{branch}}</mat-card-subtitle>\n        \n        <!--\n        <mat-card-subtitle  class=\"tgi-card-line-indent-1\">Branch: {{branch}}</mat-card-subtitle>\n        -->\n\n        <!-- Contact -->\n        <mat-card-title  class=\"tgi-mat-card-title-icon\">Contact</mat-card-title>\n\n        <mat-card-subtitle  class=\"tgi-card-line-indent-1\"><mat-icon class=\"tgi-mat-icon-size\">email</mat-icon>{{getEmail(profile.emailAddress)}}</mat-card-subtitle>\n        <mat-card-subtitle ><mat-icon class=\"tgi-mat-icon-size\">phone</mat-icon>work: {{getPhoneNumber(profile.workPhoneNumber)}} </mat-card-subtitle>\n        <mat-card-subtitle ><mat-icon class=\"tgi-mat-icon-size\">phone</mat-icon>mobile: {{getPhoneNumber(profile.mobilePhoneNumber)}} </mat-card-subtitle>\n        <mat-card-subtitle ><mat-icon class=\"tgi-mat-icon-size\">phone</mat-icon>home: {{getPhoneNumber(profile.homePhoneNumber)}} </mat-card-subtitle>\n        <!--  \"city\": null -->\n    </ng-container>\n\n    <!-- Home Address -->\n        <ng-container *ngFor=\"let address of profile.addresses\">\n              <!-- <ng-container *ngIf=\"isAddressType(address, 'Home')\"> </ng-container> -->\n\n                <mat-card-title class=\"tgi-mat-card-title-icon\">\n                      <div class=\"tgi-address-type\">\n                        <span>Address:</span> \n                        <span  *ngFor=\"let type of getAddressTypes(address.addressTypes)\">\n                          {{type}} \n                        </span>\n                      </div>\n                  <button mat-icon-button class=\"tgi-button-icon-notuse\">\n                    <mat-icon class=\"tgi-icon-edit-size\" aria-hidden=\"false\" aria-label=\"Edit Address\">edit</mat-icon> \n                  </button> \n                </mat-card-title>\n\n                <mat-card-subtitle >{{address.addressLine1}}</mat-card-subtitle>\n                <mat-card-subtitle >{{address.addressLine2}}</mat-card-subtitle>\n                <mat-card-subtitle >{{address.city}}, {{address.state}} {{address.postalCode}}</mat-card-subtitle>\n                <mat-card-subtitle >Ownership Type: {{address.ownershipType}}</mat-card-subtitle>\n                <mat-card-subtitle >Country: {{address.country}}</mat-card-subtitle>\n                <mat-card-subtitle >Years: {{address.yearsAtAddress}}</mat-card-subtitle>\n                <!--\n                <mat-card-subtitle >Valid from: {{address.validFrom}}</mat-card-subtitle>\n                <mat-card-subtitle >Valid to: {{address.validTo}}</mat-card-subtitle>           \n                -->\n              \n        </ng-container>\n\n    <!-- Home Mailing -->\n    <!--\n        <ng-container  *ngFor=\"let address of profile.addresses\">\n          <ng-container *ngIf=\"isAddressType(address, 'Mailing')\">\n\n            <mat-card-title class=\"tgi-mat-card-title-icon\">Address Mailing\n              <button mat-icon-button class=\"tgi-button-icon-notuse\" *ngIf=\"!isAddressType(address, 'Home')\">\n                <mat-icon class=\"tgi-icon-edit-size\" aria-hidden=\"false\" aria-label=\"Edit name\">edit</mat-icon> \n              </button> \n            </mat-card-title>\n\n            <mat-card-subtitle class=\"tgi-card-line-indent-2\">{{address.addressLine1}}</mat-card-subtitle>\n            <mat-card-subtitle >{{address.addressLine2}}</mat-card-subtitle>\n            <mat-card-subtitle >{{address.city}}, {{address.state}} {{address.postalCode}}</mat-card-subtitle>\n            <mat-card-subtitle >Ownership Type: {{address.ownershipType}}</mat-card-subtitle>\n            <mat-card-subtitle >Country: {{address.country}}</mat-card-subtitle>\n            <mat-card-subtitle >Years: {{address.yearsAtAddress}}</mat-card-subtitle>\n            <mat-card-subtitle >Valid from: {{address.validFrom}}</mat-card-subtitle>\n            <mat-card-subtitle >Valid to: {{address.validTo}}</mat-card-subtitle>           \n\n          </ng-container>\n        </ng-container>\n    -->\n                      \n\n<!-- -->\n  </mat-card-header>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tgi-body-component\">\n<!-- netesa - -->\n  <!-- <ng-container *ngIf=\"(isClientDetailChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'NOSET')\">\n      <div class=\"spinner-container\">\n        <span>LOADING CLIENT DETAIL</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container> -->\n\n  <ng-container *ngIf=\"( activatedRouteParamMap$ | async ) as curClientId\">\n    <ng-container *ngIf=\"(currentClientDetail$ | async) as clientDetail\">\n\n      <!-- ??? [isVisible]=\"clientDetail bool -->\n\n          <app-client-detail-avatar [isVisible]=\"clientDetail\" \n                      [clientId]=\"clientDetail.id\"  \n                      [firstName]=\"clientDetail.profile.firstName\"\n                      [lastName]=\"clientDetail.profile.lastName\"\n                      [workPhoneNumber]=\"clientDetail.profile.workPhoneNumber\"\n                      [emailAddress]=\"clientDetail.profile.emailAddress\" ></app-client-detail-avatar>\n\n\n          <nav mat-tab-nav-bar class=\"tgi-tab-group\" mat-align-tabs=\"end\">\n            <a mat-tab-link *ngFor=\"let link of navLinks\" [routerLink]=\"link.path\" routerLinkActive #rla=\"routerLinkActive\"\n              [active]=\"rla.isActive\">\n              {{link.label}}\n            </a>\n          </nav>\n\n      <!-- <h4>clientId: {{curClientId}}</h4> -->\n\n      <!--  <h3>clientDetail: {{clientDetail | json}} </h3> -->\n\n      <router-outlet></router-outlet>\n\n    </ng-container>\n  </ng-container>\n\n  <!-- netesa + -->\n  <ng-container *ngIf=\"(isClientDetailChanged$ | async) as r\">\n    <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n      <div class=\"spinner-container\">\n        <span>LOADING CLIENT DETAIL</span>\n        <mat-spinner diameter=\"30\"></mat-spinner>\n      </div>\n    </ng-container>\n  </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \n  <div class=\"tgi-inquiry tgi-body-component\">\n\n        <div class=\"tgi-inquiry flex-spinner-container\">\n  \n          <ng-container *ngIf=\"(isInquiryChanged$ | async) as r\">\n\n            <ng-container *ngIf=\"(r.isEnd === false && r.op === 'UPDATE')\">\n              <div class=\"tgi-inquiry spinner-container\">\n                <div>CREDIT SCORE INQUIRY</div>\n                <div class=\"tgi-inquiry spinner\"><mat-spinner diameter=\"30\"></mat-spinner></div>\n              </div>\n            </ng-container>\n          </ng-container>\n\n         </div>\n    \n     <ng-container *ngIf=\"(currentClientDetail$ | async) as clientDetailOverview\">\n   \n       <!--    <h5>clientId: {{clientDetailOverview.id}} </h5> -->\n   \n         <div class=\"tgi-inquiry flex-container\">\n   \n           <div class=\"tgi-inquiry flex-column-left\">\n   \n             <div class=\"tgi-inquiry flex-item tgi-mat-card-left\">\n   \n                 <app-client-detail-personal-info [id]=\"clientDetailOverview.id\" [profile]=\"clientDetailOverview.profile\"\n                   [loanOfficer]=\"clientDetailOverview.loanOfficer\" [branch]=\"clientDetailOverview.branch\">\n                 </app-client-detail-personal-info>\n   \n             </div>\n   \n           </div>\n   \n           <!-- -->\n           <div class=\"tgi-inquiry flex-column-right\">\n\n               <div class=\"tgi-inquiry flex-item\">\n\n                    <mat-card class=\"tgi-inquiry  tgi-mat-card-right\">\n                         <mat-card-header>\n                  \n                        <form [formGroup]=\"creditScoreParamsFG\" class=\"tgi-inquiry form-inquiry\">   \n\n                              <mat-card-title class=\"tgi-inquiry tgi-mat-card-title\">Credit Score Inquiry</mat-card-title>\n\n                              <mat-card-subtitle class=\"tgi-inquiry tgi-card-subtitle-1\">\n                                <div class=\"tgi-inquiry tgi-block-section\">\n                                   <div>Does the customer agree to you running a credit check *</div>\n                                   <div>\n                                     <section class=\"tgi-inquiry tgi-section\">\n                                       <mat-radio-group formControlName=\"customerAgreeded\">\n                                         <mat-radio-button value=\"true\">Yes</mat-radio-button>\n                                         <mat-radio-button class=\"tgi-inquiry tgi-section-2\" value=\"false\">No</mat-radio-button>\n                                       </mat-radio-group>\n                                     </section>\n                                   </div>\n                                  </div>\n                              <!--   -->\n                                  <div class=\"tgi-inquiry tgi-block-select\">\n                                    <div>Inquiry Reason *</div>                              \n                                    <mat-form-field appearance=\"outline\" class=\"tgi-inquiry tgi-select-inquiry\">\n                                        <mat-select \n                                                    (selectionChange)=\"inquiryReasonChanged($event.value)\"\n                                                    formControlName=\"inquiryReason\"\n                                                    #amortType=\"matSelect\"\n                                                  >\n                                          <mat-option *ngFor=\"let inquiry of inquiryReasonData; index as i\" [value]=\"inquiry.id\">\n                                            {{inquiry.value}}\n                                          </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                  </div>\n                                </mat-card-subtitle>\n\n                                <mat-card-subtitle class=\"tgi-inquiry tgi-card-subtitle-0\">\n                                </mat-card-subtitle>\n\n                              <mat-card-subtitle class=\"tgi-inquiry tgi-card-subtitle-2\">\n                                    <div>\n                                      <mat-checkbox formControlName=\"termsAccepted\"></mat-checkbox>\n                                    </div>\n                                    <div class=\"tgi-inquiry tgi-argee\">I have read and agree to the above terms of service</div>\n\n                              </mat-card-subtitle>\n\n                              <mat-card-title class=\"tgi-inquiry tgi-mat-card-title-report\">\n                                   <button mat-stroked-button  (click)=\"onGetCreditReport()\">Get Credit Report</button>\n                                   <button mat-stroked-button  class=\"tgi-inquiry tgi-button-margin\" (click)=\"onCancel()\">Cancel</button>\n                              </mat-card-title>\n\n                           </form>\n\n                          </mat-card-header>\n                        </mat-card>\n\n             </div>\n   \n            </div>\n           </div>\n   \n     </ng-container>\n   \n   </div>\n\n   \n  \n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"creditLineParamsFG\">\n\n<mat-card class=\"tgi-options tgi-mat-card-options\" *ngIf=\"productData && productData.isCreditLine\">\n  <mat-card-header>\n\n    <mat-card-subtitle>\n      <mat-divider class=\"tgi-options tgi-mat-divider\"></mat-divider>\n    </mat-card-subtitle>\n\n    <mat-card-title class=\"tgi-options tgi-mat-card-title\">Credit Line Options</mat-card-title>\n\n    <mat-card-subtitle>\n      <mat-divider class=\"tgi-options tgi-mat-divider\"></mat-divider>\n    </mat-card-subtitle>\n\n      <mat-card-subtitle class=\"tgi-options tgi-card-subtitle-1\">\n        <div class=\"tgi-options tgi-line-group\">\n            <span>Is this a revolving credit line * </span>\n            <span>\n              <section class=\"tgi-options tgi-section\">\n                <mat-radio-group formControlName=\"revolvingCreditLine\">\n                  <mat-radio-button value=\"true\">Yes</mat-radio-button>\n                  <mat-radio-button class=\"tgi-options tgi-mat-radio-button-2\" value=\"false\">No</mat-radio-button>\n                </mat-radio-group>\n              </section>\n            </span>\n       </div>\n       <div  class=\"tgi-options tgi-line-group\">\n            <span>Are Drawdowns Fixed *</span>\n            <span>\n              <section class=\"tgi-options tgi-section\">\n                <mat-radio-group formControlName=\"drawnDownFixed\">\n                  <mat-radio-button value=\"true\">Yes</mat-radio-button>\n                  <mat-radio-button class=\"tgi-options tgi-mat-radio-button-2\" value=\"false\">No</mat-radio-button>\n                </mat-radio-group>\n              </section>\n            </span>\n        </div>\n      </mat-card-subtitle>\n\n\n      <mat-card-subtitle class=\"tgi-options tgi-subtitle-2\">\n        <span>Credit Line Valid Until * </span>\n        <span class=\"tgi-options tgi-creditLineValueUtil\">\n          <mat-form-field>\n            <input matInput [matDatepicker]=\"validUntilPicker\" \n                    placeholder=\"Choose Valid Until\"\n                    formControlName=\"creditLineValueUtil\">\n            <mat-datepicker-toggle matSuffix [for]=\"validUntilPicker\"></mat-datepicker-toggle>\n            <mat-datepicker #validUntilPicker></mat-datepicker>\n          </mat-form-field>\n        </span>\n      </mat-card-subtitle>\n\n      <!-- <mat-card-subtitle class=\"tgi-options tgi-subtitle-2\">\n        <pre>{{creditLineParamsFG.value | json}}</pre>\n      </mat-card-subtitle> -->\n\n  </mat-card-header>\n</mat-card>\n\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"tgi-mat-card-fees\" *ngIf=\"productData\">\n  <mat-card-header class=\"tgi-mat-card-header\">\n \n    <mat-card-title class=\"tgi-mat-card-title-icon-tbl\">\n      Fees\n    </mat-card-title>\n\n    <table mat-table [dataSource]=\"feesDataSource\" class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n            <input matInput placeholder=\"Name\" [formControl]=\"element.get('name')\">            \n          </mat-form-field>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"type\">\n        <th mat-header-cell *matHeaderCellDef>Type</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n            <input matInput placeholder=\"Type\" [formControl]=\"element.get('type')\">            \n          </mat-form-field>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"method\">\n        <th mat-header-cell *matHeaderCellDef>Method</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-size\">\n            <input matInput placeholder=\"Method\" [formControl]=\"element.get('method')\">            \n          </mat-form-field>          \n        </td>\n      </ng-container>\n      \n      <ng-container matColumnDef=\"value\">\n        <th mat-header-cell *matHeaderCellDef>Value</th>\n        <td mat-cell *matCellDef=\"let element\">\n        <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n          <input matInput placeholder=\"Value\" [formControl]=\"element.get('value')\">\n          <span matPrefix>$&nbsp;</span>\n        </mat-form-field>\n      </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"tax\">\n        <th mat-header-cell *matHeaderCellDef>Tax</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field floatLabel=\"never\" appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n            <input matInput placeholder=\"Tax\" [formControl]=\"element.get('tax')\">            \n          </mat-form-field>          \n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"feeHandling\">\n        <th mat-header-cell *matHeaderCellDef>How do you want to handle fee</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <mat-form-field appearance=\"outline\" class=\"tgi-mat-form-field-size\">\n            <mat-select placeholder=\"Fee Handling\" [formControl]=\"element.get('feeHandling')\">\n              <mat-option *ngFor=\"let feeType of feesHandlingArr; index as i;\" [value]=\"i\">\n                {{feeType}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"loan-row\">\n      </tr>\n\n    </table>\n  <!-- -->\n  </mat-card-header>\n\n  <mat-card-footer>    \n    <!-- feesDataSource:= {{feesDataSource.data | json}} -->\n    <!-- <pre>\n        {{feesFormArray?.value | json}}\n    </pre> -->\n  </mat-card-footer>\n<!-- -->\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <mat-card class=\"tgi-mat-card-params\" *ngIf=\"productData\">\n    <mat-card-header  class=\"tgi-mat-card-header tgi-visible\">  \n    <!--   -->\n      <mat-card-title class=\"tgi-mat-card-title-icon\" >\n        <div>Fund Loan Application</div>\n      </mat-card-title>\n      <mat-card-subtitle>\n        <form (ngSubmit)=\"onFormSubmit(loanParamsFG)\" [formGroup]=\"loanParamsFG\">\n          <mat-grid-list cols=\"4\" rowHeight=\"80px\" class=\"tgi-at-grid-list-params\">\n            <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n              Amortization Type *\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"3\">\n              <mat-form-field appearance=\"outline\">\n                <mat-select [value]=\"0\" \n                            (selectionChange)=\"amortizTypeChanged($event.value)\"\n                            formControlName=\"amortType\"\n                            #amortType=\"matSelect\"\n                          >\n                  <mat-option *ngFor=\"let atype of productData.amortizationTypes; index as i;\" [value]=\"i\">\n                    {{atype}}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>            \n            </mat-grid-tile>\n            <mat-grid-tile class=\"tgi-mat-grid-tile-1\">Loan Amount *</mat-grid-tile>\n            <mat-grid-tile>\n              <mat-form-field appearance=\"outline\" class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                <input  matInput \n                        placeholder=\"Input Amount\" \n                        formControlName=\"loanAmount\"                        \n                >\n                <span matPrefix>$&nbsp;</span>\n                <mat-hint align=\"start\">Min: {{productData.minLoanAmount}}</mat-hint>\n                <mat-hint align=\"end\">Max: {{productData.maxLoanAmount}}</mat-hint>\n              </mat-form-field>            \n            </mat-grid-tile>\n            <ng-container *ngIf=\"curAmortizType===0\">\n              <mat-grid-tile class=\"tgi-mat-grid-tile-2\">Interest Rate *</mat-grid-tile>\n              <mat-grid-tile>\n                <mat-form-field appearance=\"outline\"  class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                  <input matInput \n                          placeholder=\"Input Interest Rate\"\n                          formControlName=\"interestRate\"                          \n                          >\n                  <span matPrefix>%&nbsp;</span>\n                  <mat-hint align=\"start\">Min: {{productData.minInterestRate}}%</mat-hint>\n                  <mat-hint align=\"end\">Max: {{productData.maxInterestRate}}%</mat-hint>\n                </mat-form-field>            \n              </mat-grid-tile>\n            </ng-container>\n            <ng-container *ngIf=\"curAmortizType===1 || curAmortizType===2\">\n              <mat-grid-tile class=\"tgi-mat-grid-tile-2\">Installment *</mat-grid-tile>\n              <mat-grid-tile>\n                <mat-form-field appearance=\"outline\"  class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                  <input  matInput \n                          placeholder=\"Input Installment\"\n                          formControlName=\"installment\"                           \n                  >\n                  <span matPrefix>$&nbsp;</span>                \n                </mat-form-field>            \n              </mat-grid-tile>\n            </ng-container>\n            <ng-container *ngIf=\"curAmortizType===2\">\n              <mat-grid-tile class=\"tgi-mat-grid-tile-2\">Interest Rate *</mat-grid-tile>\n              <mat-grid-tile>\n                <mat-form-field appearance=\"outline\"  class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                  <input matInput \n                          placeholder=\"Input Interest Rate\"\n                          formControlName=\"interestRate2\"                          \n                          >\n                  <span matPrefix>%&nbsp;</span>\n                  <mat-hint align=\"start\">Min: {{productData.minInterestRate}}%</mat-hint>\n                  <mat-hint align=\"end\">Max: {{productData.maxInterestRate}}%</mat-hint>\n                </mat-form-field>            \n              </mat-grid-tile>\n            </ng-container>\n            <ng-container *ngIf=\"curAmortizType===0 || curAmortizType===1\">\n              <mat-grid-tile class=\"tgi-mat-grid-tile-1\">Term (weekly) *</mat-grid-tile>\n              <mat-grid-tile>\n                <mat-form-field appearance=\"outline\"  class=\"tgi-mat-form-field-f6 tgi-mat-form-field-size\">\n                  <input  matInput \n                          placeholder=\"Input Term\"\n                          formControlName=\"term\"\n                          [value]=\"productData.defaultTerm\"\n                  >              \n                  <mat-hint align=\"start\">Min: {{productData.minTerm}}</mat-hint>\n                  <mat-hint align=\"end\">Max: {{productData.maxTerm}}</mat-hint>\n                </mat-form-field>\n              </mat-grid-tile>\n            </ng-container>\n            <mat-grid-tile class=\"tgi-mat-grid-tile-2\">Disbursement Date *</mat-grid-tile>\n            <mat-grid-tile>\n              <mat-form-field>\n                <input  matInput [matDatepicker]=\"disburPicker\" \n                        placeholder=\"Choose Disbursement Date\"\n                        formControlName=\"disbursDate\"                        \n                        >\n                <mat-datepicker-toggle matSuffix [for]=\"disburPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #disburPicker></mat-datepicker>\n              </mat-form-field>\n            </mat-grid-tile>\n            <mat-grid-tile class=\"tgi-mat-grid-tile-1\">First Repayment Date</mat-grid-tile>\n            <mat-grid-tile>\n              <mat-form-field>\n                <input  matInput [matDatepicker]=\"repayPicker\" \n                        placeholder=\"First Repayment Date\"\n                        formControlName=\"firstDisbursDate\"                        \n                        >\n                <mat-datepicker-toggle matSuffix [for]=\"repayPicker\"></mat-datepicker-toggle>\n                <mat-datepicker #repayPicker></mat-datepicker>\n              </mat-form-field>\n            </mat-grid-tile>          \n            <mat-grid-tile [colspan]=\"2\" class=\"tgi-mat-grid-tile-2\">\n              <mat-checkbox formControlName=\"isFixedRepaymentDate\"\n              >\n                Fixed Repayment Date\n              </mat-checkbox>\n            </mat-grid-tile>          \n            <mat-grid-tile class=\"tgi-mat-grid-tile-1\">Arrears Grace Day</mat-grid-tile>\n            <mat-grid-tile [colspan]=\"3\">\n              <mat-form-field appearance=\"outline\" class=\"tgi-mat-form-field-size\">\n                <input  matInput\n                        placeholder=\"Arrears Grace Day\"\n                        formControlName=\"arrearsGraceDay\"\n                >              \n              </mat-form-field>\n            </mat-grid-tile>\n            <!-- <mat-grid-tile [colspan]=\"4\">\n              <div>FORM VALUE: {{this.loanParamsFG.value | json}}</div>\n            </mat-grid-tile> -->\n          </mat-grid-list>\n        </form>\n      </mat-card-subtitle>\n      <!-- -->      \n    </mat-card-header>\n  </mat-card>  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <mat-card class=\"tgi-mat-card-identificaton\" *ngIf=\"identificationData\">\n    <mat-card-header  class=\"tgi-mat-card-header\">  \n    <!--   -->\n      <mat-card-title class=\"tgi-mat-card-title\" >\n        <div>Identification</div>\n        \n        <ng-container *ngIf=\"(isIdentificationImageChanged$ | async) as r\">\n            <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n              <div class=\"spinner-container\">\n                <span>LOADING IDENTIFICATION IMAGE</span>\n                <mat-spinner diameter=\"30\"></mat-spinner>\n              </div>\n            </ng-container>\n          </ng-container>\n\n      </mat-card-title>\n      <!-- \n      <mat-card-subtitle>\n        <h5>identificationData: {{identificationData | json}} </h5>\n      </mat-card-subtitle>\n     -->\n      <mat-grid-list cols=\"6\" rowHeight=\"40px\" class=\"tgi-at-grid-list-params\">\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            ID\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            Type\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            ID Number\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            Issued By\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            Issue Date\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            Expiry Date\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            {{identificationData.id}}\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            {{identificationData.type}}\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            {{identificationData.number}}\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            {{identificationData.issuingAuthority}}\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            {{identificationData.issueDate}}\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\"  class=\"tgi-mat-grid-tile-0\">\n            {{identificationData.expirationDate}}\n        </mat-grid-tile>\n         <!--\n        <mat-grid-tile [colspan]=\"6\"  class=\"tgi-mat-grid-tile-0\"> image Url </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"6\"  class=\"tgi-mat-grid-tile-0\"> {{identificationData.imageUrl}}</mat-grid-tile>\n        --> \n      </mat-grid-list>\n\n<!--          <img   [errorImage]=\"errorImage\" [lazyLoad]=\"rxjsFromImageMe$ | async\" />-->\n\n          <!--\n      <ng-container *ngIf=\"(curIdentificationImage$ | async) as curIdentificationImage\">\n          <h4>curIdentificationImage: {{curIdentificationImage}}</h4>\n\n            <img mat-card-image [src]=\"getImageUrl(curIdentificationImage)\" alt=\"Photo identification\">\n\n      </ng-container>\n            --> \n\n</mat-card-header>\n</mat-card>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"tgi-body-component\">\n\n    <ng-container *ngIf=\"(activatedRouteParamMap$ | async ) as curParamMap\"></ng-container> \n\n    <ng-container *ngIf=\"(currentClientDetail$ | async) as clientDetailOverview\">\n\n\n        <div class=\"flex-container\">\n\n            <div class=\"flex-column-left\">\n\n                <div class=\"flex-item tgi-mat-card-left\">\n\n                    <app-client-detail-personal-info [id]=\"clientDetailOverview.id\" [profile]=\"clientDetailOverview.profile\"\n                                                     [loanOfficer]=\"clientDetailOverview.loanOfficer\" [branch]=\"clientDetailOverview.branch\">\n                    </app-client-detail-personal-info>\n\n                </div>\n\n            </div>\n\n            <!-- -->\n            <div class=\"flex-column-right\">\n\n                <div class=\"flex-item\">\n              <!--\n                    <h3>Identification</h3>\n                    \n                  <h5>clientId: {{clientDetailOverview.id}} </h5> \n                  <h5>identificationId: {{identificationId}} </h5>         \n                  <h5>identifications: {{clientDetailOverview.identifications | json}} </h5> \n                  <h5>identificationData: {{getCurIdentification() | json}} </h5>  \n              -->  \n\n                   <app-client-detail-identification-view [identificationData]=\"getCurIdentification()\" ></app-client-detail-identification-view>\n                    \n                </div>\n\n                <div class=\"flex-item\">\n                 \n                </div>\n\n\n            </div>\n        </div>\n\n    </ng-container>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/loan-symmary/loan-symmary.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/loan-symmary/loan-symmary.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--  <p>client-detail-assets works!</p> -->\n\n\n<mat-grid-list cols=\"13\" rowHeight=\"74px\" class=\"tgi-mat-grid-list-symmary\">\n\n  <mat-grid-tile></mat-grid-tile>\n       <mat-grid-tile [style.background]=\"summaryColor1\" class=\"tgi-digit-symmary\"><h3 class=\"tgi-symmary-h3\">{{getScore(clientData.clientScore)}}</h3></mat-grid-tile>\n       <mat-grid-tile [style.background]=\"summaryColor2\" [colspan]=\"2\" class=\"tgi-text-symmary\"><h3 class=\"tgi-symmary-h3\">Overall Score {{getSummary(clientData.clientScore)}}</h3></mat-grid-tile>\n\n  <mat-grid-tile></mat-grid-tile>\n       <mat-grid-tile [style.background]=\"summaryColor1\" class=\"tgi-digit-symmary\"><h3 class=\"tgi-symmary-h3\">{{clientData.totalCompletedLoans}}</h3></mat-grid-tile>\n       <mat-grid-tile [style.background]=\"summaryColor2\" [colspan]=\"2\" class=\"tgi-text-symmary\"><h3 class=\"tgi-symmary-h3\">Loans Completed</h3></mat-grid-tile>\n\n  <mat-grid-tile></mat-grid-tile>\n      <mat-grid-tile [style.background]=\"summaryColor1\" class=\"tgi-digit-symmary\"><h3 class=\"tgi-symmary-h3\">{{getScore(clientData.creditScore)}}</h3></mat-grid-tile>\n      <mat-grid-tile [style.background]=\"summaryColor2\" [colspan]=\"2\" class=\"tgi-text-symmary\"><h3 class=\"tgi-symmary-h3\">Credit Score {{getSummary(clientData.creditScore)}}</h3></mat-grid-tile>\n\n  <mat-grid-tile></mat-grid-tile>\n\n</mat-grid-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card class=\"tgi-mat-card-left\">\n  <mat-card-header class=\"tgi-mat-card-header\">\n\n  <ng-container *ngIf=\"personalLoan\">\n\n  <mat-card-subtitle >Loan Product: {{personalLoan.loanProductName ? personalLoan.loanProductName : ' -'}} </mat-card-subtitle>\n  <mat-card-subtitle >Loan Purpose: {{personalLoan.loanPurpose ? personalLoan.loanPurpose : '-' }}</mat-card-subtitle>\n  <mat-card-subtitle >Credit Score: {{personalLoan.creditScore ? personalLoan.creditScore : ' -'}}</mat-card-subtitle>\n  <mat-card-subtitle >Employment Status: {{personalLoan.employmentStatus ? personalLoan.employmentStatus : '-' }}</mat-card-subtitle>\n  <mat-card-subtitle >Annual Pretax Income: {{personalLoan.annualPretaxIncome ? personalLoan.annualPretaxIncome : '-'}}</mat-card-subtitle>\n  <mat-card-subtitle >Loan Amount: {{personalLoan.loanAmount ? personalLoan.loanAmount : '-'}}</mat-card-subtitle>\n  <mat-card-subtitle ><mat-checkbox [checked]=\"personalLoan.directDeposit\" disabled >Direct Deposit</mat-checkbox></mat-card-subtitle>\n\n</ng-container>\n\n  </mat-card-header>\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"tgi-mat-card-right\" *ngIf=\"personalLoan\">\n  <mat-card-header  class=\"tgi-mat-card-header tgi-visible\">\n\n    <mat-card-title class=\"tgi-mat-card-title-icon\">\n      <div>Personal Loan Application</div>\n      <div class=\"nav-spacer\"></div>\n      \n        <button mat-stroked-button [disabled]=\"disabledButtons\" \n                          (click)=\"onApproveBtnClick()\">APPROVE</button>\n    \n      <!-- <ng-container *ngIf=\"personalLoan.outstandingItems == false\">\n          <button mat-stroked-button [disabled]=\"disabledButtons\" (click)=\"onApproveBtnClick()\">APPROVE</button>\n      </ng-container>\n       <ng-container *ngIf=\"personalLoan.outstandingItems == true\">\n        <button mat-stroked-button [disabled]=true>NOT READY FOR APPROVAL</button>\n      </ng-container> -->\n      <button mat-stroked-button [disabled]=\"disabledButtons\" class=\"tgi-button-deny\" (click)=\"onDenyBtnClick()\">DENY</button>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <mat-grid-list cols=\"4\" rowHeight=\"30px\">\n        \n        <mat-grid-tile>Loan Product<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanProductName ? personalLoan.loanProductName : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Loan Purpose<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>-<div class=\"nav-spacer\"></div></mat-grid-tile>\n        \n        <mat-grid-tile>Credit Score<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.creditScore ? personalLoan.creditScore : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Employment Status<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.employmentStatus ? personalLoan.employmentStatus : '-' }}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        \n        <mat-grid-tile>Annual Pretax Income<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.annualPretaxIncome ? personalLoan.annualPretaxIncome : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Loan Amount<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanAmount ? personalLoan.loanAmount : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        \n        <mat-grid-tile><mat-checkbox [checked]=\"personalLoan.directDeposit\">Direct Deposit</mat-checkbox><div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n\n        <mat-grid-tile>Missing Identifications<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile [colspan]=3 >{{personalLoan.missingItems ? personalLoan.missingItems : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n\n      </mat-grid-list>\n    </mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n\n<ng-container *ngIf=\"(isDenyChanged$  | async) as r\">\n  <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n    <div class=\"spinner-container\">\n      <span>DENY LOAN APPLICATION</span>\n      <mat-spinner diameter=\"30\"></mat-spinner>\n    </div>\n  </ng-container>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<mat-card class=\"tgi-mat-card-left\">\n  <mat-card-header class=\"tgi-mat-card-header\">\n\n  <ng-container *ngIf=\"personalLoan\">\n\n  <mat-card-subtitle >Loan Product: {{personalLoan.loanProductName ? personalLoan.loanProductName : ' -'}} </mat-card-subtitle>\n  <mat-card-subtitle >Loan Purpose: {{personalLoan.loanPurpose ? personalLoan.loanPurpose : '-' }}</mat-card-subtitle>\n  <mat-card-subtitle >Credit Score: {{personalLoan.creditScore ? personalLoan.creditScore : ' -'}}</mat-card-subtitle>\n  <mat-card-subtitle >Employment Status: {{personalLoan.employmentStatus ? personalLoan.employmentStatus : '-' }}</mat-card-subtitle>\n  <mat-card-subtitle >Annual Pretax Income: {{personalLoan.annualPretaxIncome ? personalLoan.annualPretaxIncome : '-'}}</mat-card-subtitle>\n  <mat-card-subtitle >Loan Amount: {{personalLoan.loanAmount ? personalLoan.loanAmount : '-'}}</mat-card-subtitle>\n  <mat-card-subtitle ><mat-checkbox [checked]=\"personalLoan.directDeposit\">Direct Deposit</mat-checkbox></mat-card-subtitle>\n\n</ng-container>\n\n  </mat-card-header>\n\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan/personal-loan.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan/personal-loan.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<mat-card class=\"tgi-mat-card-right\" *ngIf=\"personalLoan\">\n  <mat-card-header  class=\"tgi-mat-card-header tgi-visible\">\n\n    <mat-card-title class=\"tgi-mat-card-title-icon\">\n      <div>Loan Application Detail </div>\n      <div class=\"nav-spacer\"></div>\n      <button mat-stroked-button [disabled]=\"disabledButtons\" (click)=\"onApproveBtnClick()\">FUND</button>\n      <button mat-stroked-button [disabled]=\"disabledButtons\" class=\"tgi-button-deny\" (click)=\"onDenyBtnClick()\">CANCEL</button>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <mat-grid-list cols=\"4\" rowHeight=\"30px\">\n        <mat-grid-tile>Loan Product<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.productName ? personalLoan.productName : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Loan Purpose<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanApplication.loanPurpose ? personalLoan.loanApplication.loanPurpose : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Credit Score<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanApplication.creditScore ? personalLoan.loanApplication.creditScore : ' -'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Employment Status<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanApplication.employmentStatus ? personalLoan.loanApplication.employmentStatus : '-' }}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Annual Pretax Income<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanApplication.annualPretaxIncome ? personalLoan.annualPretaxIncome : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Approved Loan Amount<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanApplication.loanAmount ? personalLoan.loanApplication.loanAmount : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Request Loan Amount<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanAmount ? personalLoan.loanAmount : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile><mat-checkbox [checked]=\"personalLoan.directDeposit\">Direct Deposit</mat-checkbox><div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-subtitle>\n    <mat-card-title class=\"tgi-mat-card-title-icon\">\n      <div>Loan Detail</div>\n      <div class=\"nav-spacer\"></div>\n    </mat-card-title>\n    <mat-card-subtitle>\n      <mat-grid-list cols=\"4\" rowHeight=\"30px\">\n        <mat-grid-tile>Approved Loan Amount<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.loanAmount ? personalLoan.loanAmount : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Requested Loan Amount<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.requestedLoanAmount ? personalLoan.requestedLoanAmount : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Interest Rate<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.interestRate ? personalLoan.interestRate : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>Selected Term<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile>{{personalLoan.term ? personalLoan.term : '-'}}<div class=\"nav-spacer\"></div></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n        <mat-grid-tile></mat-grid-tile>\n      </mat-grid-list>\n    </mat-card-subtitle>\n  </mat-card-header>\n</mat-card>\n\n<ng-container *ngIf=\"(isDenyChanged$  | async) as r\">\n  <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n    <div class=\"spinner-container\">\n      <span>DENY LOAN APPLICATION</span>\n      <mat-spinner diameter=\"30\"></mat-spinner>\n    </div>\n  </ng-container>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/client-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/client-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"curRefreshCmd$ | async\"></ng-container>\n<ng-container *ngIf=\"(currentUser$ | async) as ut\"></ng-container>\n<ng-container *ngIf=\"(currentClients$ | async) as clients\">\n\n  <!-- <div>\n    {{clients | json}}\n  </div> -->\n\n  <app-filter-settings [data-source]=\"clients\" \n                        (client-view-change)=\"clientViewChanged($event)\"\n                        [render-data]=\"renderClientArr\">\n  </app-filter-settings>\n\n  <app-client-table [data-source]=\"clients\" \n                    [client-view]=\"clientView\" \n                    (render-clients)=\"renderClientsChanged($event)\">\n  </app-client-table>\n\n</ng-container>\n\n<ng-container *ngIf=\"(isClientsChanged$ | async) as r\">\n  <ng-container *ngIf=\"(r.isEnd === false && r.op === 'LOAD')\">\n    <div class=\"spinner-container\">\n      <span>LOADING CLIENTS</span>\n      <mat-spinner diameter=\"30\"></mat-spinner>\n    </div>\n  </ng-container>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/client-table/client-table.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/client-table/client-table.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"(renderClientList$ | async) as renderClients\"></ng-container>\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"clientId\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Client #</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.clientId}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.firstName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.lastName}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.email}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"clientState\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Client State</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.clientState}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"phoneNumber\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Phone</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.phoneNumber}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"creditOfficer\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>Credit Officer</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.creditOfficer}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"city\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>City</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.city}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"state\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header>State</th>\n    <td mat-cell *matCellDef=\"let client\"> {{client.state}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let client; columns: displayedColumns;\" class=\"client-row\"\n    [class.selected-client-row]=\"selectedClient === client\" (click)=\"onTblRowClick(client)\">\n\n  </tr>\n\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/filter-settings/filter-settings.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/filter-settings/filter-settings.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-divider class=\"tgi-mat-divider\"></mat-divider>\r\n  <mat-toolbar class=\"tgi-mat-toolbar-first\">\r\n\r\n    <mat-button-toggle class=\"tgi-button-toggle\" [checked]=\"false\" \r\n                        (change)=\"onToggleBtnChange($event);\">\r\n      <mat-icon>filter_list</mat-icon>\r\n    </mat-button-toggle>\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\"></mat-divider>\r\n    <!-- <div style=\"margin:0 20px;border-left:1px solid whitesmoke;padding:0 20px;border-right: 1px solid whitesmoke;\"> -->\r\n      <mat-form-field class=\"tgi-form-field-view\">\r\n        <mat-label>View</mat-label>\r\n        <mat-select [(value)]=\"selectedView\">\r\n          <mat-option value=\"all\">All Clients</mat-option>\r\n          <mat-option value=\"active\">Active Clients</mat-option>\r\n          <mat-option value=\"pending\">Pending Clients</mat-option>\r\n          <mat-option value=\"closed\">Closed Clients</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    <!-- </div>  -->\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\">\"></mat-divider>\r\n      \r\n    <!-- <div style=\"margin-right: 20px; padding:20px 20px 0 0;\"> -->\r\n      <div>{{renderClientArr?.length}} Clients</div>\r\n    <!-- </div> -->\r\n    <mat-divider vertical class=\"tgi-mat-divider-vertical\">></mat-divider>\r\n\r\n    <span class=\"nav-spacer\"></span>\r\n\r\n    <mat-form-field class=\"find-full-width\" appearance=\"outline\" floatLabel=\"auto\">\r\n      <input matInput placeholder=\"Find\">\r\n      <!-- <mat-label>Find</mat-label>  -->\r\n      <mat-icon matPrefix>search</mat-icon>\r\n    </mat-form-field>\r\n\r\n    <button mat-icon-button class=\"tgi-button-icon\">\r\n      <mat-icon class=\"tgi-icon-download-size\" aria-hidden=\"false\" aria-label=\"Download\">cloud_download</mat-icon>\r\n      <!--  <img class=\"tgi-icon-download-size\" src=\"../assets/icons/cloud_download-24px.svg\"  alt=\"Download\" title=\"Download\"> -->\r\n    </button>\r\n    <!--\r\n    <button mat-icon-button class=\"tgi-button-img\" (click)=\"clickShare()\">\r\n      <mat-icon>share</mat-icon>\r\n    </button>\r\n-->\r\n    <mat-button-toggle class=\"tgi-button-toggle\" [checked]=\"false\" (change)=\"onToggleBtnChangeShare($event);\">\r\n\r\n      <mat-icon>share</mat-icon>\r\n    </mat-button-toggle>\r\n\r\n  </mat-toolbar>\r\n  \r\n  <mat-divider class=\"tgi-mat-divider\"></mat-divider>\r\n\r\n  <mat-toolbar class=\"tgi-mat-toolbar-two\" *ngIf=\"isViewTwoPanel\">\r\n\r\n    <ng-container *ngIf=\"isFilterUse\">\r\n\r\n      <mat-form-field *ngIf=\"officerList\" class=\"tgi-officer-form-field\">\r\n        <mat-label>Credit Officer</mat-label>\r\n        <mat-select multiple>          \r\n          <mat-option *ngFor=\"let officer of officerList\" [value]=\"officer\">{{officer}}</mat-option>\r\n        </mat-select>      \r\n      </mat-form-field>\r\n\r\n      <mat-form-field class=\"tgi-city-mat-form-field\" *ngIf=\"cityList\">\r\n        <mat-label>City</mat-label>\r\n        <mat-select multiple>\r\n          <mat-option *ngFor=\"let city of cityList\" [value]=\"city\">{{city}}</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </ng-container>\r\n\r\n    <span class=\"nav-spacer\"></span>\r\n\r\n    <ng-container *ngIf=\"isShareUse\">\r\n      <button mat-raised-button>\r\n        Email\r\n      </button>\r\n\r\n      <button mat-raised-button class=\"tgi-button-print\">\r\n        Print\r\n      </button>\r\n\r\n    </ng-container>\r\n\r\n  </mat-toolbar>\r\n  <mat-divider class=\"tgi-mat-divider\"></mat-divider>");

/***/ }),

/***/ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n/* ??? */\n\ntr.tbl-row:not(.selected-row):hover {\n  background: #777;\n}\n\n/* ??? */\n\ntr.tbl-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.tbl-row td {\n  border-bottom-width: 0;\n}\n\n.tgi-tbl-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n/*   */\n\n::ng-deep th.mat-header-cell.tgi-mat-cell {\n  padding-left: 52px;\n}\n\n::ng-deep td.mat-cell.tgi-mat-cell {\n  padding-left: 52px;\n}\n\n::ng-deep td.mat-footer-cell.tgi-mat-cell {\n  padding-left: 52px;\n}\n\n/* visible after loaded */\n\n/* */\n\n::ng-deep .tgi-visible .mat-header-row {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-header-row {\n  opacity: 1;\n  /*    visible header table */\n}\n\n::ng-deep .tgi-visible .mat-row {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-row {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible .mat-footer-row {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-footer-row {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 0;\n}\n\n.tgi-table-container th.mat-header-cell {\n  border-bottom: 2px solid grey;\n  border-top: 2px solid grey;\n}\n\n.tgi-table-container tr.mat-footer-row {\n  font-weight: bold;\n  /* border: 2px solid green;  ???? */\n}\n\n.tgi-table-container td.mat-footer-cell {\n  border-bottom: 2px solid grey;\n  border-top: 2px solid grey;\n}\n\n/*\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Ftb3J0aXphdGlvbi1zY2hlZHVsZS9hbW9ydGl6YXRpb24tc2NoZWR1bGUtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9hbW9ydGl6YXRpb24tc2NoZWR1bGUvYW1vcnRpemF0aW9uLXNjaGVkdWxlLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxXQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0FDQUY7O0FER0EsUUFBQTs7QUFDQTtFQUNFLGdCQUFBO0FDQUY7O0FERUEsUUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURHQSxNQUFBOztBQUNBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREtBLHlCQUFBOztBQUNBLElBQUE7O0FBQ0E7RUFDRSxVQUFBO0FDRkY7O0FES0E7RUFDRSxVQUFBO0VBQWUsNEJBQUE7QUNEakI7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDREY7O0FES0E7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLG1DQUFBO0FDRkY7O0FES0E7RUFDRSw2QkFBQTtFQUNBLDBCQUFBO0FDRkY7O0FESUE7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9hbW9ydGl6YXRpb24tc2NoZWR1bGUvYW1vcnRpemF0aW9uLXNjaGVkdWxlLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlOyBcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogPz8/ICovXG50ci50Ymwtcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG59XG4vKiA/Pz8gKi9cbnRyLnRibC1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi50Ymwtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLnRnaS10YmwtaW1nLXNpemUge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG5cbi8qICAgKi9cbjo6bmctZGVlcCAgdGgubWF0LWhlYWRlci1jZWxsLnRnaS1tYXQtY2VsbCB7XG4gIHBhZGRpbmctbGVmdDogNTJweDtcbn1cblxuOjpuZy1kZWVwICB0ZC5tYXQtY2VsbC50Z2ktbWF0LWNlbGwge1xuICBwYWRkaW5nLWxlZnQ6IDUycHg7XG59XG5cbjo6bmctZGVlcCAgdGQubWF0LWZvb3Rlci1jZWxsLnRnaS1tYXQtY2VsbCB7XG4gIHBhZGRpbmctbGVmdDogNTJweDtcbn1cblxuXG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG4vKiAqL1xuOjpuZy1kZWVwICAudGdpLXZpc2libGUgLm1hdC1oZWFkZXItcm93IHtcbiAgb3BhY2l0eTogMS4wOyBcbn1cblxuOjpuZy1kZWVwICAudGdpLW5vLXZpc2libGUgLm1hdC1oZWFkZXItcm93IHtcbiAgb3BhY2l0eTogMS4wOyAgLyogICAgdmlzaWJsZSBoZWFkZXIgdGFibGUgKi9cbn1cblxuOjpuZy1kZWVwICAudGdpLXZpc2libGUgLm1hdC1yb3cge1xuICBvcGFjaXR5OiAxLjA7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktbm8tdmlzaWJsZSAubWF0LXJvdyB7XG4gIG9wYWNpdHk6IDAuMDsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS12aXNpYmxlIC5tYXQtZm9vdGVyLXJvdyB7XG4gIG9wYWNpdHk6IDEuMDsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlIC5tYXQtZm9vdGVyLXJvdyB7XG4gIG9wYWNpdHk6IDAuMDsgXG59XG5cbjo6bmctZGVlcCAudGdpLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZSAubWF0LWljb24udGdpLWljb24taWRlbnRpZmljYXRpb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG5cbi50Z2ktdGFibGUtY29udGFpbmVyIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIGdyZXk7XG59XG5cbi50Z2ktdGFibGUtY29udGFpbmVyIHRyLm1hdC1mb290ZXItcm93IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCBncmVlbjsgID8/Pz8gKi8gXG59XG5cbi50Z2ktdGFibGUtY29udGFpbmVyIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItdG9wOiAycHggc29saWQgIGdyZXk7XG59XG4vKlxuLm1hdC10YWJsZS1zdGlja3kge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcbn1cbiovIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogPz8/ICovXG50ci50Ymwtcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG59XG5cbi8qID8/PyAqL1xudHIudGJsLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLnRibC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4udGdpLXRibC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi8qICAgKi9cbjo6bmctZGVlcCB0aC5tYXQtaGVhZGVyLWNlbGwudGdpLW1hdC1jZWxsIHtcbiAgcGFkZGluZy1sZWZ0OiA1MnB4O1xufVxuXG46Om5nLWRlZXAgdGQubWF0LWNlbGwudGdpLW1hdC1jZWxsIHtcbiAgcGFkZGluZy1sZWZ0OiA1MnB4O1xufVxuXG46Om5nLWRlZXAgdGQubWF0LWZvb3Rlci1jZWxsLnRnaS1tYXQtY2VsbCB7XG4gIHBhZGRpbmctbGVmdDogNTJweDtcbn1cblxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cbi8qICovXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtaGVhZGVyLXJvdyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1oZWFkZXItcm93IHtcbiAgb3BhY2l0eTogMTtcbiAgLyogICAgdmlzaWJsZSBoZWFkZXIgdGFibGUgKi9cbn1cblxuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZSAubWF0LXJvdyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1yb3cge1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtZm9vdGVyLXJvdyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1mb290ZXItcm93IHtcbiAgb3BhY2l0eTogMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZSAubWF0LWljb24udGdpLWljb24taWRlbnRpZmljYXRpb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1pZGVudGlmaWNhdGlvbi1zaXplIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50Z2ktdGFibGUtY29udGFpbmVyIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcbn1cblxuLnRnaS10YWJsZS1jb250YWluZXIgdHIubWF0LWZvb3Rlci1yb3cge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogYm9yZGVyOiAycHggc29saWQgZ3JlZW47ICA/Pz8/ICovXG59XG5cbi50Z2ktdGFibGUtY29udGFpbmVyIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBib3JkZXItdG9wOiAycHggc29saWQgZ3JleTtcbn1cblxuLypcbi5tYXQtdGFibGUtc3RpY2t5IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG4qLyJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AmortizationScheduleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmortizationScheduleTableComponent", function() { return AmortizationScheduleTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let AmortizationScheduleTableComponent = class AmortizationScheduleTableComponent {
    // public renderPaymentSchedule$: Observable<PaymentInterface[]> = null;
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.currentPaymentScheduleInterface$ = null;
        this.displayedColumns = [
            'id',
            'paymentDate',
            'beginingBalance',
            'installment',
            'principalPayment',
            'totalInterest',
            'totalFees',
            'endingBalance' // table  8       Ending Balance        25666.67
            // 'loanTerm'                                                             6
        ];
        // netesa -
        // @Input()  isVisible = true;
        this._paymentSchedule = null;
        this.paymentsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        console.log('PaymentScheduleTableComponent.constructor() paymentScheduleData: -> %O', this.paymentScheduleData);
    }
    get paymentScheduleData() {
        return this._paymentSchedule;
    }
    set paymentScheduleData(val) {
        this._paymentSchedule = val;
        this.paymentsDataSource.data = this._paymentSchedule ? this._paymentSchedule.payments : [];
    }
    ngOnInit() {
        console.log('PaymentScheduleTableComponent.OnInit() paymentScheduleData -> %O', this.paymentScheduleData);
        this.paymentsDataSource.data = this.paymentScheduleData ? this.paymentScheduleData.payments : [];
        this.paymentsDataSource.sort = this.sort;
    }
    onTblRowClick(payment) {
        console.log(`PaymentScheduleTableComponent.onTblRowClick() payment:%O`, payment);
        // this.router.navigate([`/identification`, identification.id, 'overview']);    
        // this.router.navigate([identification.id, 'overview'], {relativeTo: this.route});
    }
    getValue(value) {
        if (!value || value === '') {
            value = '-';
        }
        return value;
    }
    getValueBaks(value) {
        if (!value || value === '') {
            return '-';
        }
        let value_d = value;
        if (!isNaN(value)) {
            value_d = Number(value).toFixed(2);
        }
        return '$ ' + value_d;
    }
    getValueDate(value) {
        // console.log('getValueDate()  value -> %O', value);
        if (!value || value === '') {
            return value = '-';
        }
        let date;
        try {
            var parts_0 = value.split('T');
            var parts = parts_0[0].split('-');
            // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
            // January - 0, February - 1, etc.   
            // '2019-31-12'
            // date = new Date(parts[0], parts[2] - 1, parts[1]);  // (YYYY-DD-MM)
            // '2019-12-31'   '2019-12-24T00:00:00.000+0000'
            date = new Date(parts[0], parts[1] - 1, parts[2]); //  (YYYY-MM-DD)
            // The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
            //date = new Date('2019-12-31');  // "2019-12-24T00:00:00.000+0000"   // "2015-03-25" (The International Standard)
            // Examples of ISO format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS.
            // var today = new Date('05 October 2011 14:48 UTC');  // http://daks.me/js_date_formats.php
            // today.toISOString()
            /*
            https://momentjs.com/
            let dt = moment("02-01-2019", "MM-DD-YYYY");
            console.log(dt.fromNow()+' |'+dt.format('LL'))
            */
            // console.log('getValueDate()  date -> %O', date);
        }
        catch (ex) {
            // console.log('getValueDate()  ex -> %O', ex);
            return date = 'Exeption: ' + ex.message;
        }
        if (isNaN(date) || isNaN(date.getFullYear()) || isNaN(date.getMonth()) || isNaN(date.getDate())) {
            return 'NaN error';
        }
        const month = date.getMonth() + 1;
        let month_s = '' + month;
        if (month <= 9) {
            month_s = '0' + month;
        }
        let date_s = '' + date.getDate();
        if (date.getDate() <= 9) {
            date_s = '0' + date.getDate();
        }
        return `${date.getFullYear()}-${month_s}-${date_s}`; // (YYYY-MM-DD)
    }
    getScheduledPaymentTotalBaks() {
        let total = this.paymentScheduleData.payments.map(t => {
            if (isNaN(t.installment)) {
                return 0;
            }
            return t.installment;
        }).reduce((acc, value) => acc + value, 0);
        return this.getValueBaks(total);
    }
    getPrincipalPaymentTotalBaks() {
        let total = this.paymentScheduleData.payments.map(t => {
            if (isNaN(t.principalPayment)) {
                return 0;
            }
            return t.principalPayment;
        }).reduce((acc, value) => acc + value, 0);
        return this.getValueBaks(total);
    }
    getTotalInterestTotalBaks() {
        let total = this.paymentScheduleData.payments.map(t => {
            if (isNaN(t.totalInterest)) {
                return 0;
            }
            return t.totalInterest;
        }).reduce((acc, value) => acc + value, 0);
        return this.getValueBaks(total);
    }
    getTotalFeesTotalBaks() {
        let total = this.paymentScheduleData.payments.map(t => {
            if (isNaN(t.totalFees)) {
                return 0;
            }
            return t.totalFees;
        }).reduce((acc, value) => acc + value, 0);
        return this.getValueBaks(total);
    }
};
AmortizationScheduleTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AmortizationScheduleTableComponent.prototype, "paymentScheduleData", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: true })
], AmortizationScheduleTableComponent.prototype, "matTbl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], AmortizationScheduleTableComponent.prototype, "sort", void 0);
AmortizationScheduleTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-amortization-schedule-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./amortization-schedule-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./amortization-schedule-table.component.scss */ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.scss")).default]
    })
], AmortizationScheduleTableComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n/*  */\n\n::ng-deep .tgi-mat-card-amortization.mat-card {\n  margin-bottom: 32px;\n  /* */\n  width: 100%;\n}\n\n.mat-card-header .mat-card-title {\n  display: flex;\n  justify-content: space-between;\n}\n\n/*\n::ng-deep .tgi-mat-card.mat-card-header {\n   display: block; \n}\n*/\n\n/*  */\n\n.flex-row {\n  flex-direction: row;\n  flex-wrap: nowrap;\n  margin-left: -32px;\n  /* margin-left: -32px; */\n  width: 100%;\n  /* border: 1px solid red; */\n}\n\n.flex-item-title {\n  padding-top: 24px;\n  padding-left: 0px;\n  padding-right: 0px;\n  width: 100%;\n  /* border: 1px solid green;   */\n}\n\n.flex-item {\n  padding-left: 0px;\n  margin-left: 0px;\n  width: 100%;\n  /* border: 1px solid blue;   */\n}\n\n/* spinner */\n\n/*\n.flex-conteiner-spinner {\n  width: 100%;  \n}\n*/\n\n.flex-spinner-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  width: 100%;\n  /* border: 1px solid yellow;  */\n  height: 20px;\n}\n\n/*\n.flex-spinner-container div:last-child {\n  padding-left: 32px;\n}\n*/\n\n.tgi-mat-spinner {\n  margin-left: 32px;\n}\n\n.tgi-label-type {\n  font-size: medium;\n  margin-left: 32px;\n}\n\n.tgi-mat-button {\n  margin-right: 64px;\n}\n\n.tgi-mat-select-type {\n  background-size: contain;\n}\n\n/*\n::ng-deep .mat-form-field-infix {\n  width: 300px; \n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Ftb3J0aXphdGlvbi1zY2hlZHVsZS9hbW9ydGl6YXRpb24tc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9hbW9ydGl6YXRpb24tc2NoZWR1bGUvYW1vcnRpemF0aW9uLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBLEtBQUE7O0FBQ0E7RUFDRSxtQkFBQTtFQUFzQixJQUFBO0VBQ3RCLFdBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0VGOztBREFBOzs7O0NBQUE7O0FBS0EsS0FBQTs7QUFDQTtFQUVFLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUVBLHdCQUFBO0VBQ0EsV0FBQTtFQUNELDJCQUFBO0FDQUQ7O0FER0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsK0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxXQUFBO0VBQ0csOEJBQUE7QUNGTDs7QURLQSxZQUFBOztBQUNBOzs7O0NBQUE7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEseUJBQUE7RUFFQSxXQUFBO0VBQ0EsK0JBQUE7RUFFQSxZQUFBO0FDTEY7O0FET0E7Ozs7Q0FBQTs7QUFLQTtFQUNFLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0Usd0JBQUE7QUNKRjs7QURPQTs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Ftb3J0aXphdGlvbi1zY2hlZHVsZS9hbW9ydGl6YXRpb24tc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4vKiAgKi9cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWFtb3J0aXphdGlvbi5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7ICAvKiAqL1xuICB3aWR0aDogMTAwJTsgXG59XG5cbi5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLypcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLm1hdC1jYXJkLWhlYWRlciB7XG4gICBkaXNwbGF5OiBibG9jazsgXG59XG4qL1xuLyogICovXG4uZmxleC1yb3cge1xuXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcblxuICBtYXJnaW4tbGVmdDogLTMycHg7XG5cbiAgLyogbWFyZ2luLWxlZnQ6IC0zMnB4OyAqL1xuICB3aWR0aDogMTAwJTsgXG4gLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG4uZmxleC1pdGVtLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG5cbiAgd2lkdGg6IDEwMCU7ICBcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAgKi9cbn1cblxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuXG4gIHdpZHRoOiAxMDAlOyAgXG4gICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAgKi9cbn1cblxuLyogc3Bpbm5lciAqL1xuLypcbi5mbGV4LWNvbnRlaW5lci1zcGlubmVyIHtcbiAgd2lkdGg6IDEwMCU7ICBcbn1cbiovXG4uZmxleC1zcGlubmVyLWNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gIHdpZHRoOiAxMDAlOyAgXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdzsgICovXG5cbiAgaGVpZ2h0OiAyMHB4O1xufVxuLypcbi5mbGV4LXNwaW5uZXItY29udGFpbmVyIGRpdjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuKi9cbi50Z2ktbWF0LXNwaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLnRnaS1sYWJlbC10eXBlIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLW1hdC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LXNlbGVjdC10eXBlICB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLypcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICB3aWR0aDogMzAwcHg7IFxufVxuKi8iLCIubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4vKiAgKi9cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWFtb3J0aXphdGlvbi5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIC8qICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLypcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLm1hdC1jYXJkLWhlYWRlciB7XG4gICBkaXNwbGF5OiBibG9jazsgXG59XG4qL1xuLyogICovXG4uZmxleC1yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IC0zMnB4O1xuICAvKiBtYXJnaW4tbGVmdDogLTMycHg7ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi5mbGV4LWl0ZW0tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgICovXG59XG5cbi5mbGV4LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAgKi9cbn1cblxuLyogc3Bpbm5lciAqL1xuLypcbi5mbGV4LWNvbnRlaW5lci1zcGlubmVyIHtcbiAgd2lkdGg6IDEwMCU7ICBcbn1cbiovXG4uZmxleC1zcGlubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHllbGxvdzsgICovXG4gIGhlaWdodDogMjBweDtcbn1cblxuLypcbi5mbGV4LXNwaW5uZXItY29udGFpbmVyIGRpdjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuKi9cbi50Z2ktbWF0LXNwaW5uZXIge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLnRnaS1sYWJlbC10eXBlIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLW1hdC1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LXNlbGVjdC10eXBlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4vKlxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHdpZHRoOiAzMDBweDsgXG59XG4qLyJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AmortizationScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmortizationScheduleComponent", function() { return AmortizationScheduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _amortization_schedule_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./amortization-schedule.service */ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule.service.ts");









let AmortizationScheduleComponent = class AmortizationScheduleComponent {
    constructor(userSrv, amortizationScheduleService, PaymentScheduleStateSrv, snackBarSrv) {
        this.userSrv = userSrv;
        this.amortizationScheduleService = amortizationScheduleService;
        this.PaymentScheduleStateSrv = PaymentScheduleStateSrv;
        this.snackBarSrv = snackBarSrv;
        this._productId = 0;
        // netesa +
        this._paymentSchedule = null;
        this.currentUser$ = null;
        this.currentPaymentSchedule$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isPaymentScheduleChanged$ = null;
        // --------------------------------------------------------------
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.changeLog = [];
        PaymentScheduleStateSrv.context = "AmortizationScheduleComponent";
    }
    get dataForAmortizationSchedule() {
        // console.log('AmortizationScheduleComponent.dataForAmortizationSchedul(val) GET _dataForAmortizationSchedule -> %O', this._dataForAmortizationSchedule);
        return this._dataForAmortizationSchedule;
    }
    set dataForAmortizationSchedule(val) {
        console.log('AmortizationScheduleComponent.dataForAmortizationSchedul(val) SET val -> %O', val);
        this.amortizationScheduleService.clearPaymentSchedule();
        this._dataForAmortizationSchedule = val;
    }
    get currentAmortizType() {
        // console.log('AmortizationScheduleComponent.currentAmortizType(val) GET');
        return this._curAmortizType;
    }
    set currentAmortizType(val) {
        // console.log('AmortizationScheduleComponent.currentAmortizType(val) SET val=%s', val);
        this._curAmortizType = val;
        this.tokenTimeInMsSend = 0;
    }
    get productId() {
        // console.log('AmortizationScheduleComponent.productId(val) GET val -> %O');
        return this._productId;
    }
    set productId(val) {
        //  console.log('AmortizationScheduleComponent.productId(val) SET val -> %O', val);
        this._productId = val;
    }
    get curPaymentSchedule() {
        // console.log('AmortizationScheduleComponent.currentAmortizType(val) GET val=%s');
        return this._paymentSchedule;
    }
    set curPaymentSchedule(val) {
        //  console.log('AmortizationScheduleComponent.currentAmortizType(val) SET val=%s', val);
        this._paymentSchedule = val;
    }
    ngOnInit() {
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((user) => {
            // console.log(`\tPIPE: PaymentScheduleComponent.OnInit() tap currentUser$:%O`, user);
            if (this.userSrv.isAnonymUser(user)) {
                this.onDestroySub$.next(true); // befor!
                this.amortizationScheduleService.clearPaymentSchedule();
                // this.onDestroySub$.next(true);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroySub$));
        this.currentPaymentSchedule$ = this.amortizationScheduleService.curPaymentSchedule$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((paymentSchedule) => {
            // console.log(`PaymentScheduleComponent.OnInit() tap currentPaymentSchedule$ -> %O`, paymentSchedule,);
            // if (!this.amortizationScheduleService.isWrongPaymentSchedule(paymentSchedule)) {
            this.curPaymentSchedule = paymentSchedule;
            // }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.onDestroySub$));
        this.isPaymentScheduleChanged$ = this.PaymentScheduleStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`PaymentScheduleComponent.OnInit() IsEntityChangedInterface -> %O`, r);
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
                        this.snackBarSrv.open(`Selected PaymentSchedule has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }) // ,  ???
        //  takeUntil(this.onDestroySub$)
        );
    }
    onLoadPaymentSchedule(ev) {
        // console.log('***  AmortizationScheduleComponent onLoadPaymentSchedule() -> %O', this.dataForAmortizationSchedule);
        this.amortizationScheduleService.clearPaymentSchedule(); // for error !!!
        if (this.dataForAmortizationSchedule) {
            /*
            : { "amortType": 0, "loanAmount": "3001", "interestRate": 3, "installment": null, "interestRate2": 3, "term": 20, "disbursDate": "2020-04-30", "firstDisbursDate": "2020-03-31T21:00:00.000Z", "isFixedRepaymentDate": true }
            : { "amortType": 1, "loanAmount": "3001", "interestRate": 3, "installment": null, "interestRate2": 3, "term": 20, "disbursDate": "2020-04-30", "firstDisbursDate": "2020-03-31T21:00:00.000Z", "isFixedRepaymentDate": true }
            : { "amortType": 2, "loanAmount": "3001", "interestRate": 3, "installment": null, "interestRate2": 3, "term": 20, "disbursDate": "2020-04-30", "firstDisbursDate": "2020-03-31T21:00:00.000Z", "isFixedRepaymentDate": true }
            */
            /* --- TBC-2 / TBC-50 ---  Client Overview - Approve Loan Application - Calculate Amortization Schedule
            {
                "loanAmount": 300.0,
                "interestRate": 3.59,
                "startDate": "2019-12-31",
                "term": 20,
                "firstRepaymentDate": "2019-12-31"
            }
            */
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            // corr
            const data = {
                "loanAmount": this.dataForAmortizationSchedule.loanAmount,
                "interestRate": this.dataForAmortizationSchedule.interestRate,
                "startDate": (new Date(this.dataForAmortizationSchedule.disbursDate)).toLocaleDateString('en-CA', options),
                "term": this.dataForAmortizationSchedule.term,
                "firstRepaymentDate": (new Date(this.dataForAmortizationSchedule.firstDisbursDate)).toLocaleDateString('en-CA', options) // ??? "2019-12-31"
            };
            this.amortizationScheduleService.loadPaymentSchedule(this.PaymentScheduleStateSrv, this.productId, data);
        }
    }
    ngOnDestroy() {
        // this.paymentScheduleSrv.clearPaymentSchedule(); // auto loaded
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
AmortizationScheduleComponent.ctorParameters = () => [
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _amortization_schedule_service__WEBPACK_IMPORTED_MODULE_8__["AmortizationScheduleService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AmortizationScheduleComponent.prototype, "dataForAmortizationSchedule", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AmortizationScheduleComponent.prototype, "amortizationTypes", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AmortizationScheduleComponent.prototype, "currentAmortizType", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AmortizationScheduleComponent.prototype, "productId", null);
AmortizationScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-amortization-schedule',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./amortization-schedule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./amortization-schedule.component.scss */ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.scss")).default]
    })
], AmortizationScheduleComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule.service.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/amortization-schedule/amortization-schedule.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: AmortizationScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmortizationScheduleService", function() { return AmortizationScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/server-status.service */ "./src/app/shared/services/server-status.service.ts");
/* harmony import */ var _payment_schedule_Interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment-schedule.Interface */ "./src/app/clients/client-detail/amortization-schedule/payment-schedule.Interface.ts");









let AmortizationScheduleService = class AmortizationScheduleService {
    constructor(http, serverStatusSrv) {
        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.curPaymentScheduleSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curPaymentSchedule$ = this.curPaymentScheduleSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_payment_schedule_Interface__WEBPACK_IMPORTED_MODULE_8__["WrongPaymentSchedule"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curPaymentSchedule = _payment_schedule_Interface__WEBPACK_IMPORTED_MODULE_8__["WrongPaymentSchedule"];
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curPaymentSchedule$.subscribe(paymentSchedule => {
            this.curPaymentSchedule = paymentSchedule;
        });
    }
    // ------------------------------------------------------------
    isWrongPaymentSchedule(paymentSchedule) {
        if (!paymentSchedule) {
            throw new Error('Parameter [paymentSchedule] is null');
        }
        if (paymentSchedule === _payment_schedule_Interface__WEBPACK_IMPORTED_MODULE_8__["WrongPaymentSchedule"]) {
            return true;
        }
        else {
            return false;
        }
    }
    isPaymentScheduleNotEmpty(paymentSchedule) {
        if (!paymentSchedule) {
            throw new Error('Parameter [paymentSchedule] is null');
        }
        if (paymentSchedule === _payment_schedule_Interface__WEBPACK_IMPORTED_MODULE_8__["WrongPaymentSchedule"]) {
            return false;
        }
        else {
            return true;
        }
    }
    isPaymentScheduleEmpty() {
        return !this.isPaymentScheduleNotEmpty(this.curPaymentSchedule);
    }
    clearPaymentSchedule() {
        if (!this.isPaymentScheduleEmpty()) {
            this.curPaymentScheduleSub$.next(_payment_schedule_Interface__WEBPACK_IMPORTED_MODULE_8__["WrongPaymentSchedule"]);
        }
    }
    // ------------------------------------------------------------
    loadPaymentSchedule(stateService, productId, paymentScheduleRequestsInterface) {
        console.log('SYNC ENTER PaymentScheduleService.loadPaymentSchedule() stateService -> %O   productId-> %O  paymentScheduleRequestsInterface -> %O', stateService, productId, paymentScheduleRequestsInterface);
        if (stateService) {
            const isClentsChangedEnter = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isClentsChangedEnter);
        }
        // test fake get !!! makarov
        this.http.post(`${this.apiUrl}/products/${productId}/paymentschedulerequests`, paymentScheduleRequestsInterface, {
            // this.http.get<any>(`${this.apiUrl}/products/${productId}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                // .set(Content-Type", "application/json")
                .set("Accept", "application/json")
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((paymentSchedule) => {
            console.log('\tASYNC PIPE PaymentScheduleService.loadPaymentSchedule().map(ANY) paymentSchedule -> %O', paymentSchedule);
            // Control as PaymentScheduleInterface !!!  ???
            if (this.isWrongPaymentSchedule(paymentSchedule)) {
                return null;
            }
            return { token: 'OK', paymentSchedule: paymentSchedule };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log('\tASYNC PIPE PaymentScheduleService.loadPaymentSchedule().catchError() #2 -> %O', err);
            let msg;
            let isPaymentScheduleChangedError = null;
            if (stateService) {
                isPaymentScheduleChangedError = {
                    op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
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
                isPaymentScheduleChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isPaymentScheduleChangedError.message = msg;
            }
            else {
                // paymentSchedule error 
                msg = err.message ? err.message : err.toString();
                ;
                isPaymentScheduleChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isPaymentScheduleChangedError.message = `PaymentSchedule ERROR: ${msg}`;
            }
            if (stateService) {
                stateService.next(isPaymentScheduleChangedError);
            }
            this.clearPaymentSchedule();
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ token: 'ERROR', paymentSchedule: null });
        }), 
        // delay(5000),                //  test makarov
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            console.log(`\tSUBSCRIBE: PaymentScheduleService.loadPaymentSchedule().subscribe(NEXT): rezObj -> %O`, rezObj);
            if (rezObj.token === 'OK') {
                this.curPaymentScheduleSub$.next(rezObj.paymentSchedule); // BEFOR stateService.next()!
                if (stateService) {
                    const isPaymentScheduleChangedExit = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS
                    };
                    stateService.next(isPaymentScheduleChangedExit);
                }
                // this.curPaymentScheduleSub$.next(rezObj.paymentSchedule);
            }
        }
        // , err => console.log(`\tSUBSCRIBE: PaymentScheduleService.loadPaymentSchedule().subscribe(ERROR): %O`, err)
        // , () => console.log(`\tSUBSCRIBE: PaymentScheduleService.loadPaymentSchedule().subscribe(COMPLETE)`)    
        );
    }
};
AmortizationScheduleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__["ServerStatusService"] }
];
AmortizationScheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AmortizationScheduleService);



/***/ }),

/***/ "./src/app/clients/client-detail/amortization-schedule/payment-schedule.Interface.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/clients/client-detail/amortization-schedule/payment-schedule.Interface.ts ***!
  \*******************************************************************************************/
/*! exports provided: WrongPaymentSchedule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongPaymentSchedule", function() { return WrongPaymentSchedule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const WrongPaymentSchedule = {
    totalFees: 0,
    endingBalance: 0,
    loanAmount: 0,
    totalInterestPayment: 0,
    payments: []
};


/***/ }),

/***/ "./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  /* margin-bottom: 10px; */\n  width: 100%;\n}\n\n/*  approve  buttons */\n\n::ng-deep .tgi-mat-card-buisnesss-approve.mat-card {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.tgi-button-approve-loan {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n::ng-deep .tgi-mat-card-buisnesss-approve .mat-card-header-text {\n  width: 100%;\n}\n\n.tgi-button-approve-loan-cancel {\n  margin-left: 20px;\n  margin-right: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtYnVpc25lc3MtbG9hbi1hcHAvYXBwcm92ZS1idWlzbmVzcy1sb2FuLWFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtYnVpc25lc3MtbG9hbi1hcHAvYXBwcm92ZS1idWlzbmVzcy1sb2FuLWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNESjs7QURJRTtFQUVFLGFBQUE7RUFFQSw2QkFBQTtBQ0hKOztBREtFO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNOSjs7QURTRTtFQUVFLDZCQUFBO0VBQ0MsV0FBQTtBQ1BMOztBRFVFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ1BKOztBRFNFO0VBQ0MseUJBQUE7RUFDQyxXQUFBO0FDTko7O0FEU0Usc0JBQUE7O0FBQ0Y7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNORjs7QURTQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSxXQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvYXBwcm92ZS1idWlzbmVzcy1sb2FuLWFwcC9hcHByb3ZlLWJ1aXNuZXNzLWxvYW4tYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRnaS1ib2R5LWNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDsgXHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7IFxyXG4gIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtY29sdW1uLWxlZnQge1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xyXG4gIH1cclxuICAuZmxleC1jb2x1bW4tcmlnaHQge1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gICAgZmxleC13cmFwOiB3cmFwOyBcclxuICBcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgXHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWl0ZW0ge1xyXG4gIFxyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXHJcbiAgICAgd2lkdGg6IDEwMCU7IFxyXG4gIH1cclxuICBcclxuICAudGdpLW1hdC1jYXJkLWxlZnQge1xyXG4gICAgbWluLXdpZHRoOiAzNTBweDsgXHJcbiAgICAvKiB3aWR0aDogYXV0bzsgICovXHJcbiAgfVxyXG4gIDo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgLyogbWFyZ2luLWJvdHRvbTogMTBweDsgKi9cclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICB9XHJcbiAgICBcclxuICAvKiAgYXBwcm92ZSAgYnV0dG9ucyAqL1xyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1idWlzbmVzc3MtYXBwcm92ZS5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMTAwJTsgXHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1idWlzbmVzc3MtYXBwcm92ZSAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1hcHByb3ZlLWxvYW4tY2FuY2VsIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XHJcbn0iLCIudGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgLyogd2lkdGg6IGF1dG87ICAqL1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIC8qIG1hcmdpbi1ib3R0b206IDEwcHg7ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiAgYXBwcm92ZSAgYnV0dG9ucyAqL1xuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtYnVpc25lc3NzLWFwcHJvdmUubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1idWlzbmVzc3MtYXBwcm92ZSAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuLWNhbmNlbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ApproveBuisnessLoanAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveBuisnessLoanAppComponent", function() { return ApproveBuisnessLoanAppComponent; });
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










// -----------
let ApproveBuisnessLoanAppComponent = class ApproveBuisnessLoanAppComponent {
    constructor(activatedRoute, router, userSrv, clientDetailSrv, loanProductSrv, loanProductStateSrv, 
    // protected loanAppUpdateSrv: EntityUpdateService,
    // @Inject('LOAN_APP_STATE_SERVICE') protected loanAppStateSrv: EntityStateService,
    snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userSrv = userSrv;
        this.clientDetailSrv = clientDetailSrv;
        this.loanProductSrv = loanProductSrv;
        this.loanProductStateSrv = loanProductStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.currentUser$ = null;
        this.currentLoanProduct$ = null;
        this.activatedRouteParentParams$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isLoanProductChanged$ = null;
        this.isLoanAppChanged$ = null;
        this.dataForAmortizationSchedule = {};
        loanProductStateSrv.context = 'Business Loan Product Load';
        // loanAppStateSrv.context = 'Business Loan App Update Srv';
    }
    ngOnInit() {
        // console.log('ApproveBuisnessLoanAppComponent.ngOnInit() loanProductStateSrv=%o loanAppStateSrv=%O',
        //           this.loanProductStateSrv, this.loanAppStateSrv );
        this.clientId = this.clientDetailSrv.curClientDetail.id;
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
        // end OnInit
    }
    //------------------------------------------------------------------ 
    ngOnDestroy() {
        this.loanProductSrv.clearCurLoanProduct(); // auto loaded
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
ApproveBuisnessLoanAppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__["ClientDetailService"] },
    { type: _services_loan_product_service__WEBPACK_IMPORTED_MODULE_9__["LoanProductService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ApproveBuisnessLoanAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-approve-buisness-loan-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./approve-buisness-loan-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"],
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./approve-buisness-loan-app.component.scss */ "./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.scss")).default]
    })
], ApproveBuisnessLoanAppComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n\n.flex-column-right > form {\n  width: 100%;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  /* margin-bottom: 0px; */\n  width: 100%;\n}\n\n/*  approve  buttons */\n\n::ng-deep .tgi-mat-card-personal-approve.mat-card {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.tgi-button-approve-loan {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n::ng-deep .tgi-mat-card-personal-approve .mat-card-header-text {\n  width: 100%;\n}\n\n/*  NOT USE !!! makarov\n  ::ng-deep mat-card   .mat-card-header-text {\n    width: 100%;\n  }\n  */\n\n.tgi-button-approve-loan-cancel {\n  margin-left: 20px;\n  margin-right: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtYnVpc25lc3MtbG9hbi1hcHAvYnVpc25lc3MtbG9hbi1hcHAtZm9ybS9idWlzbmVzcy1sb2FuLWFwcC1mb3JtL2J1aXNuZXNzLWxvYW4tYXBwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9hcHByb3ZlLWJ1aXNuZXNzLWxvYW4tYXBwL2J1aXNuZXNzLWxvYW4tYXBwLWZvcm0vYnVpc25lc3MtbG9hbi1hcHAtZm9ybS9idWlzbmVzcy1sb2FuLWFwcC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ0hKOztBRE1FO0VBRUUsYUFBQTtFQUVBLDZCQUFBO0FDTEo7O0FET0U7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFFQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQ1JKOztBRFdFO0VBRUUsNkJBQUE7RUFDQyxXQUFBO0FDVEw7O0FEWUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEWUU7RUFDRyxXQUFBO0FDVEw7O0FEWUU7RUFDQyx3QkFBQTtFQUNDLFdBQUE7QUNUSjs7QURZRSxzQkFBQTs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ1ZKOztBRGFFO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7QUNYSjs7QURjRTtFQUNFLFdBQUE7QUNYSjs7QURjQTs7OztHQUFBOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtYnVpc25lc3MtbG9hbi1hcHAvYnVpc25lc3MtbG9hbi1hcHAtZm9ybS9idWlzbmVzcy1sb2FuLWFwcC1mb3JtL2J1aXNuZXNzLWxvYW4tYXBwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi50Z2ktYm9keS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7IFxyXG4gIH1cclxuICBcclxuICAuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwOyBcclxuICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXHJcbiAgfVxyXG4gIFxyXG4gIC5mbGV4LWNvbHVtbi1sZWZ0IHtcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgXHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxuICB9XHJcbiAgLmZsZXgtY29sdW1uLXJpZ2h0IHtcclxuICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGZsZXgtd3JhcDogd3JhcDsgXHJcbiAgXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIFxyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZmxleC1pdGVtIHtcclxuICBcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xyXG4gICAgIHdpZHRoOiAxMDAlOyBcclxuICB9XHJcbiAgXHJcbiAgLnRnaS1tYXQtY2FyZC1sZWZ0IHtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7IFxyXG4gICAgLyogd2lkdGg6IGF1dG87ICAqL1xyXG4gIH1cclxuICBcclxuICAuZmxleC1jb2x1bW4tcmlnaHQgPiBmb3JtICB7XHJcbiAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICB9XHJcblxyXG4gIDo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgLyogbWFyZ2luLWJvdHRvbTogMHB4OyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gIH1cclxuICBcclxuICAvKiAgYXBwcm92ZSAgYnV0dG9ucyAqL1xyXG4gIFxyXG4gIDo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXBlcnNvbmFsLWFwcHJvdmUubWF0LWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICB9XHJcbiAgXHJcbiAgLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXBlcnNvbmFsLWFwcHJvdmUgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbi8qICBOT1QgVVNFICEhISBtYWthcm92XHJcbiAgOjpuZy1kZWVwIG1hdC1jYXJkICAgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAqL1xyXG4gIC50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbi1jYW5jZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDY0cHg7XHJcbiAgfVxyXG4gICIsIi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1pdGVtIHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCA+IGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICAvKiBtYXJnaW4tYm90dG9tOiAwcHg7ICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiAgYXBwcm92ZSAgYnV0dG9ucyAqL1xuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcGVyc29uYWwtYXBwcm92ZS5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLWJ1dHRvbi1hcHByb3ZlLWxvYW4ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXBlcnNvbmFsLWFwcHJvdmUgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qICBOT1QgVVNFICEhISBtYWthcm92XG4gIDo6bmctZGVlcCBtYXQtY2FyZCAgIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgKi9cbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbi1jYW5jZWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA2NHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: BuisnessLoanAppFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuisnessLoanAppFormComponent", function() { return BuisnessLoanAppFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _shared_services_entity_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/services/entity-update.service */ "./src/app/shared/services/entity-update.service.ts");
/* harmony import */ var src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");










let BuisnessLoanAppFormComponent = class BuisnessLoanAppFormComponent {
    // --------------------------------------------------------------  
    constructor(fb, router, snackBarSrv, clientDetailSrv, loanAppUpdateSrv, loanAppStateSrv) {
        this.fb = fb;
        this.router = router;
        this.snackBarSrv = snackBarSrv;
        this.clientDetailSrv = clientDetailSrv;
        this.loanAppUpdateSrv = loanAppUpdateSrv;
        this.loanAppStateSrv = loanAppStateSrv;
        this.simpleSnackBarRef = null;
        this.isLoanAppChanged$ = null;
        this._curAmortizType = 0;
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
        // console.log('* BuisnessLoanAppFormComponent.CONSTRUCTOR()'); 
        this.loanAppStateSrv.context = 'Buisness Loan App Update State Srv';
    }
    get currentAmortizType() {
        return this._curAmortizType;
    }
    set currentAmortizType(val) {
        this._curAmortizType = val;
    }
    ngOnInit() {
        this.clientId = this.clientDetailSrv.curClientDetail.id;
        // console.log('* BuisnessLoanAppFormComponent.ngOnInit() params: %O fees: %O creditLinesOpts: %O', 
        //               this.loanParamsForm, this.loanFeesForm, this.loanCreditLineOptsForm); 
        if (this.loanParamsForm && this.loanCreditLineOptsForm) {
            this.buisnessLoanForm = this.fb.group({
                params: this.loanParamsForm.loanParamsFG,
                creditlineopts: this.loanCreditLineOptsForm.creditLineParamsFG,
            });
            this.buisnessLoanParamsFG = this.buisnessLoanForm.get('params');
            this.buisnessCreditLineOptsFG = this.buisnessLoanForm.get('creditlineopts');
        }
        this.isLoanAppChanged$ = this.loanAppStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            // console.log(`\tPIPE: BuisnessLoanAppFormComponent.OnInit() loanAppStateSrv.IsEntityChangedInterface:%O`, r,);
            if (r.op === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityStateEnum"].UPDATE) {
                if (!r.isEnd && r.opResult === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'UPDATE', isEnd: false, opResult: 'NOSET' };
                }
                else if (r.isEnd && r.opResult === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    // this.simpleSnackBarRef.afterDismissed()
                    // .subscribe( (res: MatSnackBarDismiss) => {
                    //   // DEBUG
                    //     this.clientDetailSrv.clearClientDetail();
                    //     this.router.navigateByUrl(`/clients/${this.clientId}/overview`);
                    //   }
                    // );
                    return { op: 'UPDATE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`${r.message}`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    this.simpleSnackBarRef.afterDismissed()
                        .subscribe((res) => {
                        this.clientDetailSrv.clearClientDetail();
                        this.router.navigateByUrl(`/clients/${this.clientId}/overview`);
                    });
                    return { op: 'UPDATE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
        // eom    
    }
    ngAfterViewInit() {
        // console.log('* BuisnessLoanAppFormComponent.ngAfterViewInit() params: %O fees: %O creditLinesOpts: %O', 
        //               this.loanParamsForm, this.loanFeesForm, this.loanCreditLineOptsForm); 
        if (this.buisnessLoanForm && this.loanFeesForm) {
            this.buisnessLoanForm.addControl('fees', this.loanFeesForm.feesFormArray);
        }
        if (this.buisnessLoanParamsFG) {
            const ctrl = this.buisnessLoanParamsFG.get('arrearsGraceDay');
            if (ctrl) {
                ctrl.setValue('INIT');
            }
        }
    }
    onCurrentAmortizType(ev) {
        // console.log('* BuisnessLoanAppFormComponent.onCurrentAmortizType(ev) view = %s', ev);
        this.currentAmortizType = ev;
    }
    loanParamsGet() {
        // console.log('BuisnessLoanAppFormComponent.loanParamsGet() loanParams= %O', ev);
        const currentParamsFormValue = this.buisnessLoanForm.value.params;
        if (currentParamsFormValue) {
            this.businessLoanAppObjFill(currentParamsFormValue);
        }
        // makarov  ???
        this.dataForAmortizationSchedule = {
            productId: this.businessLoanAppObj.productId,
            currentAmortizType: this.businessLoanAppObj.amortizationType,
            params: {
                loanAmount: this.businessLoanAppObj.loanAmount,
                interestRate: this.businessLoanAppObj.interestRate,
                startDate: this.businessLoanAppObj.disbursementDate,
                term: this.businessLoanAppObj.term,
                firstRepaymentDate: this.businessLoanAppObj.firstDisbursementDate // "2019-12-31"
            }
        };
        // console.log('BuisnessLoanAppFormComponent.feesParamsGet() dataForAmortizationSchedule -> %O',
        //                   this.dataForAmortizationSchedule);
    }
    feesParamsGet() {
        // console.log('BuisnessLoanAppFormComponent.feesParamsGet() feesParams= %O', ev);
        const currentFeessFormValue = this.buisnessLoanForm.value.fees;
        if (currentFeessFormValue) {
            this.businessLoanAppObjByFeesFill(currentFeessFormValue);
        }
        // console.log('BuisnessLoanAppFormComponent.feesParamsGet() businessLoanAppObj= %O', 
        //     this.businessLoanAppObj);    
    }
    creditLineParamsGet() {
        // console.log('BuisnessLoanAppFormComponent.creditLineParamsGet() loanParams= %O', ev);
        const currentCreditLineOptsValue = this.buisnessLoanForm.value.creditlineopts;
        if (currentCreditLineOptsValue) {
            this.businessLoanAppObjByCreditLineFill(currentCreditLineOptsValue);
        }
        // console.log('BuisnessLoanAppFormComponent.creditLineParamsGet() businessLoanAppObj= %O', 
        //     this.businessLoanAppObj);
    }
    fetchBuisnessLoanAppInfo(clientData) {
        if (clientData && clientData.loanApplications &&
            Array.isArray(clientData.loanApplications) &&
            clientData.loanApplications.length > 0) {
            const personalLoanApp = clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'requested' &&
                    loan.type.toLocaleLowerCase() === 'business';
            });
            return personalLoanApp;
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
    businessLoanAppObjFill(ev) {
        const personalLoanApp = this.fetchBuisnessLoanAppInfo(this.clientDetailSrv.curClientDetail);
        if (!personalLoanApp) {
            throw new Error('Active Personal Loan App has not found.');
        }
        this.businessLoanAppObj.loanApplicationId = personalLoanApp.id;
        this.businessLoanAppObj.productId = personalLoanApp.productId;
        const loanProductAmortizTypes = this.fetchLoanProductAmortizTypes(this.productData);
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
        this.businessLoanAppObj.penaltyRate = (this.productData).defaultPenaltyRate;
        this.businessLoanAppObj.fees = null;
        this.businessLoanAppObj.installment = +ev.installment;
        // this.businessLoanAppObj.drawnDownFixed = (this.loanProductSrv.curLoanProduct as any).drawnDownFixed;
    }
    businessLoanAppObjByFeesFill(ev) {
        let feesArr = [];
        const feesHandlingArr = this.loanFeesForm.feesHandlingArr;
        // console.log('XXX BuisnessLoanAppFormComponent.businessLoanAppObjByFeesFill() feesHandlingArr= %O', 
        //                 feesHandlingArr);
        if (ev && Array.isArray(ev) && ev.length > 0) {
            for (var i = 0; i < ev.length; i++) {
                feesArr.push({
                    value: +ev[i].value,
                    feeId: 0,
                    feeType: ev[i].type,
                    tax: +ev[i].tax,
                    feeHandling: feesHandlingArr[ev[i].feeHandling],
                });
            }
            this.businessLoanAppObj.fees = feesArr;
        }
    }
    businessLoanAppObjByCreditLineFill(ev) {
        // console.log('XXX BuisnessLoanAppFormComponent.businessLoanAppObjByCreditLineFill() ev= %O', 
        //               ev);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        this.businessLoanAppObj.revolvingCreditLine = ev.revolvingCreditLine;
        this.businessLoanAppObj.drawnDownFixed = ev.drawnDownFixed;
        this.businessLoanAppObj.creditLineValueUtil =
            (new Date(ev.creditLineValueUtil)).toLocaleDateString('en-CA', options);
    }
    onApproveLoanOk(loanProduct) {
        console.log('BuisnessLoanAppFormComponent.onApproveLoanOk()  loanProduct -> %O', loanProduct);
        this.loanParamsGet();
        this.feesParamsGet();
        this.creditLineParamsGet();
        // debug
        // this.simpleSnackBarRef = 
        //   this.snackBarSrv.open(`Buisness Loan App approved: ${JSON.stringify(this.businessLoanAppObj)}`,
        //               'X', {
        //               duration: 0,
        //               panelClass: 'mat-snack-bar-container_info'
        //            });
        this.loanAppUpdateSrv.approveLoanApp(this.clientId, this.businessLoanAppObj, this.loanAppStateSrv);
    }
    onApproveLoanCancel(loanProduct) {
        // console.log('BuisnessLoanAppFormComponent.onApproveLoanCancel()   loanProduct -> %O', loanProduct);
        this.router.navigateByUrl(`/clients/${this.clientDetailSrv.curClientDetail.id}/overview`);
    }
    //--------------------------------------------------------------------------
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
BuisnessLoanAppFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_6__["ClientDetailService"] },
    { type: _shared_services_entity_update_service__WEBPACK_IMPORTED_MODULE_8__["EntityUpdateService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], BuisnessLoanAppFormComponent.prototype, "productData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loanAppParams', { static: true })
], BuisnessLoanAppFormComponent.prototype, "loanParamsForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loanAppFees', { static: true })
], BuisnessLoanAppFormComponent.prototype, "loanFeesForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loanCreditLineOpts', { static: true })
], BuisnessLoanAppFormComponent.prototype, "loanCreditLineOptsForm", void 0);
BuisnessLoanAppFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buisness-loan-app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./buisness-loan-app-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"],
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./buisness-loan-app-form.component.scss */ "./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.scss")).default]
    })
], BuisnessLoanAppFormComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-options.tgi-mat-card-options.mat-card {\n  margin-bottom: -30px;\n  width: 100%;\n}\n\n::ng-deep .tgi-options.tgi-mat-card-options .mat-card-title {\n  font-size: medium;\n  width: 100%;\n  padding-top: 10px;\n  /* padding-bottom: 16px; */\n  padding-left: 0px;\n}\n\n::ng-deep .tgi-options.tgi-mat-card-options .mat-card-header-text {\n  width: 100%;\n}\n\n.tgi-options.tgi-mat-divider {\n  padding: 1px 0 1px 0;\n}\n\n.tgi-options.tgi-mat-card-title {\n  margin-top: 0px;\n}\n\n.tgi-options.tgi-card-subtitle-1 {\n  padding-top: 32px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.tgi-options.tgi-creditLineValueUtil {\n  margin-left: 32px;\n}\n\n.tgi-options.tgi-line-group {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.tgi-options.tgi-section {\n  margin-left: 32px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  /*  border: 1px solid red; */\n}\n\n.tgi-options.tgi-mat-radio-button-2 {\n  padding-left: 20px;\n}\n\n.tgi-options.tgi-subtitle-2 {\n  padding-top: 32px;\n}\n\n/*\n.tgi-button-approve-loan {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.tgi-button-approve-loan-cancel {\n  margin-left: 20px;\n  margin-right: 64px;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtYnVpc25lc3MtbG9hbi1hcHAvbG9hbi1jcmVkaXQtbGluZS1vcHRpb25zL2xvYW4tY3JlZGl0LWxpbmUtb3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtYnVpc25lc3MtbG9hbi1hcHAvbG9hbi1jcmVkaXQtbGluZS1vcHRpb25zL2xvYW4tY3JlZGl0LWxpbmUtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBRUEsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtBQ0RGOztBRElBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLDhCQUFBO0FDRkY7O0FES0E7RUFDRSxpQkFBQTtBQ0ZGOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSwyQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7QUNIRjs7QURLQTs7Ozs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9hcHByb3ZlLWJ1aXNuZXNzLWxvYW4tYXBwL2xvYW4tY3JlZGl0LWxpbmUtb3B0aW9ucy9sb2FuLWNyZWRpdC1saW5lLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6bmctZGVlcCAudGdpLW9wdGlvbnMudGdpLW1hdC1jYXJkLW9wdGlvbnMubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgd2lkdGg6IDEwMCU7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktb3B0aW9ucy50Z2ktbWF0LWNhcmQtb3B0aW9ucyAubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgd2lkdGg6IDEwMCU7IFxuXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMTZweDsgKi9cbiAgcGFkZGluZy1sZWZ0OiAwcHg7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktb3B0aW9ucy50Z2ktbWF0LWNhcmQtb3B0aW9ucyAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1vcHRpb25zLnRnaS1tYXQtZGl2aWRlciB7XG4gIHBhZGRpbmc6IDFweCAwIDFweCAwO1xufVxuXG4udGdpLW9wdGlvbnMudGdpLW1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLWNhcmQtc3VidGl0bGUtMSAge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGdpLW9wdGlvbnMudGdpLWNyZWRpdExpbmVWYWx1ZVV0aWwge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi50Z2ktb3B0aW9ucy50Z2ktbGluZS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnRnaS1vcHRpb25zLnRnaS1zZWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC8qICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktbWF0LXJhZGlvLWJ1dHRvbi0yIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLXN1YnRpdGxlLTIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cbi8qXG4udGdpLWJ1dHRvbi1hcHByb3ZlLWxvYW4ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuLWNhbmNlbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59XG4qLyIsIjo6bmctZGVlcCAudGdpLW9wdGlvbnMudGdpLW1hdC1jYXJkLW9wdGlvbnMubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAudGdpLW9wdGlvbnMudGdpLW1hdC1jYXJkLW9wdGlvbnMgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgLyogcGFkZGluZy1ib3R0b206IDE2cHg7ICovXG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1vcHRpb25zLnRnaS1tYXQtY2FyZC1vcHRpb25zIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW9wdGlvbnMudGdpLW1hdC1kaXZpZGVyIHtcbiAgcGFkZGluZzogMXB4IDAgMXB4IDA7XG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktbWF0LWNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktY2FyZC1zdWJ0aXRsZS0xIHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktY3JlZGl0TGluZVZhbHVlVXRpbCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLWxpbmUtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLXNlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC8qICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktbWF0LXJhZGlvLWJ1dHRvbi0yIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLXN1YnRpdGxlLTIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLypcbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGdpLWJ1dHRvbi1hcHByb3ZlLWxvYW4tY2FuY2VsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNjRweDtcbn1cbiovIl19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: LoanCreditLineOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanCreditLineOptionsComponent", function() { return LoanCreditLineOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LoanCreditLineOptionsComponent = class LoanCreditLineOptionsComponent {
    constructor(fb) {
        this.fb = fb;
        this.creditLineParamsFG = this.fb.group({
            revolvingCreditLine: [''],
            drawnDownFixed: [''],
            creditLineValueUtil: ['']
        });
    }
    getInitCreditLineParams() {
        return {
            revolvingCreditLine: this.productData.revolvingCreditLine.toString(),
            drawnDownFixed: this.productData.drawnDownFixed.toString(),
            creditLineValueUtil: this.productData.creditLineValueUtil
        };
    }
    ngOnInit() {
        this.creditLineParamsFG.patchValue(this.getInitCreditLineParams());
        // eof OnInit     
    }
};
LoanCreditLineOptionsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], LoanCreditLineOptionsComponent.prototype, "productData", void 0);
LoanCreditLineOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-credit-line-options',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-credit-line-options.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.html")).default,
        providers: [],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-credit-line-options.component.scss */ "./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.scss")).default]
    })
], LoanCreditLineOptionsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  /* margin-bottom: 0px; */\n  width: 100%;\n}\n\n/*  approve  buttons */\n\n::ng-deep .tgi-mat-card-personal-approve.mat-card {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.tgi-button-approve-loan {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n::ng-deep .tgi-mat-card-personal-approve .mat-card-header-text {\n  width: 100%;\n}\n\n.tgi-button-approve-loan-cancel {\n  margin-left: 20px;\n  margin-right: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtcGVyc29uYWwtbG9hbi1hcHAvYXBwcm92ZS1wZXJzb25hbC1sb2FuLWFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtcGVyc29uYWwtbG9hbi1hcHAvYXBwcm92ZS1wZXJzb25hbC1sb2FuLWFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNIRjs7QURNQTtFQUVFLGFBQUE7RUFFQSw2QkFBQTtBQ0xGOztBRE9BO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNSRjs7QURXQTtFQUVFLDZCQUFBO0VBQ0MsV0FBQTtBQ1RIOztBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0Msd0JBQUE7RUFDQyxXQUFBO0FDVEY7O0FEWUEsc0JBQUE7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNWRjs7QURhQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0FDWEY7O0FEY0E7RUFDRSxXQUFBO0FDWEY7O0FEY0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvYXBwcm92ZS1wZXJzb25hbC1sb2FuLWFwcC9hcHByb3ZlLXBlcnNvbmFsLWxvYW4tYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udGdpLWJvZHktY29tcG9uZW50IHtcclxuICBwYWRkaW5nLXRvcDogMzJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IFxyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7IFxyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uLWxlZnQge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG4uZmxleC1jb2x1bW4tcmlnaHQge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gIGZsZXgtd3JhcDogd3JhcDsgXHJcblxyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcblxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcblxyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xyXG4gICB3aWR0aDogMTAwJTsgXHJcbn1cclxuXHJcbi50Z2ktbWF0LWNhcmQtbGVmdCB7XHJcbiAgbWluLXdpZHRoOiAzNTBweDsgXHJcbiAgLyogd2lkdGg6IGF1dG87ICAqL1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XHJcbiAvKiBtYXJnaW4tYm90dG9tOiAwcHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7IFxyXG59XHJcblxyXG4vKiAgYXBwcm92ZSAgYnV0dG9ucyAqL1xyXG5cclxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcGVyc29uYWwtYXBwcm92ZS5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMTAwJTsgXHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1wZXJzb25hbC1hcHByb3ZlIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbi1jYW5jZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNjRweDtcclxufSIsIi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1pdGVtIHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgLyogbWFyZ2luLWJvdHRvbTogMHB4OyAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogIGFwcHJvdmUgIGJ1dHRvbnMgKi9cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXBlcnNvbmFsLWFwcHJvdmUubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1wZXJzb25hbC1hcHByb3ZlIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLWJ1dHRvbi1hcHByb3ZlLWxvYW4tY2FuY2VsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNjRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ApprovePersonalLoanAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovePersonalLoanAppComponent", function() { return ApprovePersonalLoanAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _services_loan_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../services/loan-product.service */ "./src/app/clients/client-detail/services/loan-product.service.ts");








// import { ClientDetailService } from './../services/client-detail.service';

// -----------
let ApprovePersonalLoanAppComponent = class ApprovePersonalLoanAppComponent {
    // --------------------------------------------------------------  
    constructor(activatedRoute, 
    // private router: Router,
    userSrv, 
    // protected clientDetailSrv: ClientDetailService, 
    loanProductSrv, loanProductStateSrv, 
    // protected loanAppUpdateSrv: EntityUpdateService,
    // @Inject('LOAN_APP_STATE_SERVICE') protected loanAppStateSrv: EntityStateService,          
    snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.userSrv = userSrv;
        this.loanProductSrv = loanProductSrv;
        this.loanProductStateSrv = loanProductStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.currentUser$ = null;
        this.currentLoanProduct$ = null;
        this.activatedRouteParentParams$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isLoanProductChanged$ = null;
        this.isLoanAppChanged$ = null;
        loanProductStateSrv.context = 'Personal Loan Product Load';
        // loanAppStateSrv.context = 'Personal Loan App Update Srv';
    }
    ngOnInit() {
        this.activatedRouteParentParams$ = this.activatedRoute.params
            .pipe(
        // tap ((pm: Params) => {
        //   console.log('ApprovePersonalLoanAppComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', pm);
        // }),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((pm) => pm.prodId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((prodId) => {
            // console.log('ApprovePersonalLoanAppComponent activatedRouteParentParams$ activatedRoute.params.prodId -> %s', prodId);
            this.productId = prodId;
            this.loanProductSrv.loadLoanProduct(+prodId, this.loanProductStateSrv);
        }));
        // ---------------------
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                this.loanProductSrv.clearCurLoanProduct();
            }
        }));
        // ---------------------
        this.currentLoanProduct$ = this.loanProductSrv.curLoanProduct$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((product) => {
            console.log('ApprovePersonalLoanAppComponent currentLoanProduct$ product: %o', product);
            if (this.loanProductSrv.isLoanProductWrong(product)) {
                return null;
            }
            return product;
        }));
        // ---------------------  
        this.isLoanProductChanged$ = this.loanProductStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
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
        // eom OnInit
    }
    ngAfterViewInit() {
        // console.log(`\tApprovePersonalLoanAppComponent.ngAfterViewInit() params: %O fees: %O`, 
        //             this.loanParamsList, this.loanFeesList); 
    }
    ngOnDestroy() {
        this.loanProductSrv.clearCurLoanProduct(); // auto loaded
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
ApprovePersonalLoanAppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _services_loan_product_service__WEBPACK_IMPORTED_MODULE_8__["LoanProductService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ApprovePersonalLoanAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-approve-personal-loan-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./approve-personal-loan-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"],
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./approve-personal-loan-app.component.scss */ "./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.scss")).default]
    })
], ApprovePersonalLoanAppComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 0;\n  padding-bottom: 0;\n}\n\n::ng-deep .tgi-mat-card-fees.mat-card {\n  margin-bottom: -10px;\n  width: 100%;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.loan-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.loan-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.loan-row td {\n  border-bottom-width: 0;\n}\n\n.tgi-mat-form-field-f6 {\n  max-width: 100px;\n}\n\n::ng-deep .tgi-mat-form-field-size .mat-form-field-infix {\n  border-top: 0.24375em solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtcGVyc29uYWwtbG9hbi1hcHAvbG9hbi1hcHAtZmVlcy9sb2FuLWFwcC1mZWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvYXBwcm92ZS1wZXJzb25hbC1sb2FuLWFwcC9sb2FuLWFwcC1mZWVzL2xvYW4tYXBwLWZlZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUdBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURLRTtFQUNJLFdBQUE7QUNGTjs7QURLSTtFQUNFLFlBQUE7QUNGTjs7QURLSTtFQUNFLGdCQUFBO0FDRk47O0FES0k7RUFDRSxtQkFBQTtBQ0ZOOztBREtJO0VBQ0Usc0JBQUE7QUNGTjs7QURLSTtFQUNFLGdCQUFBO0FDRk47O0FES0U7RUFDRSx1Q0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtcGVyc29uYWwtbG9hbi1hcHAvbG9hbi1hcHAtZmVlcy9sb2FuLWFwcC1mZWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICBcclxuICBcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1mZWVzLm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICBcclxuICAgIHRyLmxvYW4tcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRyLmxvYW4tcm93Om5vdCguc2VsZWN0ZWQtcm93KTphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9hbi1yb3cgdGQge1xyXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC50Z2ktbWF0LWZvcm0tZmllbGQtZjYge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC50Z2ktbWF0LWZvcm0tZmllbGQtc2l6ZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBib3JkZXItdG9wOiAwLjI0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbn0iLCI6Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtZmVlcy5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxudHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5sb2FuLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi50Z2ktbWF0LWZvcm0tZmllbGQtZjYge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtZm9ybS1maWVsZC1zaXplIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlci10b3A6IDAuMjQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LoanAppFeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanAppFeesComponent", function() { return LoanAppFeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




// import { MatTableDataSource } from '@angular/material/table';
let LoanAppFeesComponent = class LoanAppFeesComponent {
    constructor(router, route, fb) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        // @Input('data-source')
        // private _productData: any;
        // public get productData(): any {
        //   console.log('*******LoanAppFeesComponent.productData.GET: %O', 
        //                  this._productData);
        //   return this._productData;
        // }
        // public set productData(value: any) {
        //   this._productData = value;
        //   console.log('*******LoanAppFeesComponent.productData.SET: %O', 
        //                  this._productData);
        // }
        // netesa -
        // @Output('fees-params-get') feesParamsSend = new EventEmitter<any>();
        this.displayedColumns = [
            'name',
            'type',
            'method',
            'value',
            'tax',
            // 'taxAble',
            'feeHandling',
        ];
        // console.log('** LoanAppFeesComponent.CONSTRUCTOR()'); 
        // WRONG !
        // const feesArr = this.getFeesArr();
        // this.feesFormArray = new FormArray(feesArr.map(x => this.createFormGroup(x)));
        // this.feesDataSource = this.feesFormArray.controls;
    }
    ngOnInit() {
        // console.log('** LoanAppFeesComponent.ngOnInit() productData: %O', 
        //               this.productData);
        const feesArr = this.getFeesArr();
        this.feesFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](feesArr.map(x => this.createFormGroup(x)));
        this.feesDataSource = this.feesFormArray.controls;
        this.feesHandlingArr = this.getFeesHandlingArr();
    }
    ngAfterViewInit() {
        // console.log('** LoanAppFeesComponent.ngAfterViewInit()');
    }
    getFeesArr() {
        // const testFeesArr = [
        //   {
        //     "name": "Late Fee 1",
        //     "type": "Late Fee 1",
        //     "method": "As Fixed Rate 1",
        //     "value": null,
        //     "tax": null,
        //     "taxAble": false,
        //     "handling": 0
        //   },
        //   {
        //     "name": "Late Fee 2",
        //     "type": "Late Fee 2",
        //     "method": "As Fixed Rate 2",
        //     "value": null,
        //     "tax": null,
        //     "taxAble": false,
        //     "handling": 1
        //   },
        //   {
        //     "name": "Late Fee 3",
        //     "type": "Late Fee 3",
        //     "method": "As Fixed Rate 3",
        //     "value": null,
        //     "tax": null,
        //     "taxAble": false,
        //     "handling": 0
        //   },
        // ];
        // return testFeesArr;
        // console.log('LoanAppFeesComponent.getFeesArr() productData: %O', this.productData);
        if (this.productData && this.productData.fees) {
            // console.log('LoanAppFeesComponent.getFeesArr() productData.fees: %O', this.productData.fees);
            let newFees = this.productData.fees.map(f => {
                const { feeHandling } = f, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](f, ["feeHandling"]);
                return Object.assign({}, rest, { handling: 0 });
            });
            return newFees;
        }
        return [];
    }
    createFormGroup(data) {
        data = data || { name: '',
            type: '',
            method: '',
            value: null,
            tax: null,
            handling: 0
        };
        return this.fb.group({
            name: [data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            type: [data.type],
            method: [data.method],
            value: [data.value],
            tax: [data.tax],
            feeHandling: [data.handling]
        });
    }
    getFeesFormArray() {
        const feesArr = this.getFeesArr();
        this.feesFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](feesArr.map(x => this.createFormGroup(x)));
        this.feesDataSource = this.feesFormArray.controls;
        // console.log('FeesFormComponent.getFeesFormArray() feesFormArray: %O feesDataSource: %O',
        //               this.feesFormArray, this.feesDataSource);
        return this.feesFormArray;
    }
    getFeesHandlingArr() {
        if (this.productData && this.productData.fees && this.productData.fees[0].feeHandling) {
            return this.productData.fees[0].feeHandling;
        }
        return [];
    }
};
LoanAppFeesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], LoanAppFeesComponent.prototype, "productData", void 0);
LoanAppFeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-app-fees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-app-fees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-app-fees.component.scss */ "./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.scss")).default]
    })
], LoanAppFeesComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-params.mat-card {\n  margin-bottom: -50px;\n  width: 100%;\n}\n\n::ng-deep mat-form-field.mat-form-field-type-mat-select {\n  width: 320px !important;\n}\n\n::ng-deep .tgi-at-grid-list-params figure.mat-figure {\n  justify-content: left !important;\n  top: 6px !important;\n}\n\n.tgi-mat-grid-tile-0 {\n  margin-left: 5%;\n}\n\n.tgi-mat-grid-tile-1 {\n  margin-left: 7%;\n}\n\n.tgi-mat-grid-tile-2 {\n  margin-left: 7%;\n}\n\n.tgi-mat-form-field-f6 {\n  max-width: 150px;\n  /* font: 400 14px/18px Roboto, \"Helvetica Neue\", sans-serif; */\n}\n\n::ng-deep .tgi-mat-form-field-size .mat-form-field-infix {\n  border-top: 0.24375em solid transparent;\n}\n\n/*   size input */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtcGVyc29uYWwtbG9hbi1hcHAvbG9hbi1hcHAtcGFyYW1zL2xvYW4tYXBwLXBhcmFtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtcGVyc29uYWwtbG9hbi1hcHAvbG9hbi1hcHAtcGFyYW1zL2xvYW4tYXBwLXBhcmFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRFlBO0VBQ0ksdUJBQUE7QUNUSjs7QURrQkE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FDZko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRG9CQTtFQUNJLGVBQUE7QUNqQko7O0FEb0JBO0VBQ0ksZ0JBQUE7RUFFRCw4REFBQTtBQ2xCSDs7QURxQkE7RUFDSSx1Q0FBQTtBQ2xCSjs7QURxQkEsaUJBQUEiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvYXBwcm92ZS1wZXJzb25hbC1sb2FuLWFwcC9sb2FuLWFwcC1wYXJhbXMvbG9hbi1hcHAtcGFyYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXBhcmFtcy5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLmF1dG8td2lkdGgge1xyXG4vLyAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuLy8gICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuLy8gICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9ICBcclxuLy8gfVxyXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0IHtcclxuICAgIHdpZHRoOiAzMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IHtcclxuLy8gICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vICAgZGl2LndpZHRoLWNvbnRhaW5lciA+ICoge1xyXG4vLyAgICAgd2lkdGg6IDI4MHB4O1xyXG4vLyAgIH1cclxuXHJcbjo6bmctZGVlcCAudGdpLWF0LWdyaWQtbGlzdC1wYXJhbXMgZmlndXJlLm1hdC1maWd1cmUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0ICAhaW1wb3J0YW50OyBcclxuICAgIHRvcDogNnB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi8vIDo6bmctZGVlcCBtYXQtZ3JpZC10aWxlIHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuLy8gfVxyXG5cclxuLnRnaS1tYXQtZ3JpZC10aWxlLTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4udGdpLW1hdC1ncmlkLXRpbGUtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbn1cclxuLnRnaS1tYXQtZ3JpZC10aWxlLTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG59XHJcblxyXG4udGdpLW1hdC1mb3JtLWZpZWxkLWY2IHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcblxyXG4gICAvKiBmb250OiA0MDAgMTRweC8xOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAqL1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtZm9ybS1maWVsZC1zaXplIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgIGJvcmRlci10b3A6IDAuMjQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogICBzaXplIGlucHV0ICovIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcGFyYW1zLm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0IHtcbiAgd2lkdGg6IDMyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudGdpLWF0LWdyaWQtbGlzdC1wYXJhbXMgZmlndXJlLm1hdC1maWd1cmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbiAgdG9wOiA2cHggIWltcG9ydGFudDtcbn1cblxuLnRnaS1tYXQtZ3JpZC10aWxlLTAge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi50Z2ktbWF0LWdyaWQtdGlsZS0xIHtcbiAgbWFyZ2luLWxlZnQ6IDclO1xufVxuXG4udGdpLW1hdC1ncmlkLXRpbGUtMiB7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbn1cblxuLnRnaS1tYXQtZm9ybS1maWVsZC1mNiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIC8qIGZvbnQ6IDQwMCAxNHB4LzE4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7ICovXG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1mb3JtLWZpZWxkLXNpemUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgYm9yZGVyLXRvcDogMC4yNDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4vKiAgIHNpemUgaW5wdXQgKi8iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LoanAppParamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanAppParamsComponent", function() { return LoanAppParamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let LoanAppParamsComponent = class LoanAppParamsComponent {
    constructor(fb) {
        // console.log('** LoanAppParamsComponent.CONSTRUCTOR()');
        this.fb = fb;
        // @Input('data-source')
        // private _productData: any;
        // public get productData(): any {
        //   return this._productData;
        // }
        // public set productData(value: any) {
        //   this._productData = value;
        // }
        this.currentAmortizType = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // @Output('cur-loan-params') currentLoanParams = new EventEmitter<LoanAppParamsComponent>();
        this._curAmortizType = 0;
        this.loanParamsFG = this.fb.group({
            amortType: [''],
            loanAmount: [''],
            interestRate: [''],
            installment: [''],
            interestRate2: [''],
            term: [''],
            disbursDate: [''],
            firstDisbursDate: [''],
            isFixedRepaymentDate: [''],
            arrearsGraceDay: ['']
        }); // OK
        // this.loanParamsFG.patchValue(this.getInitLoanAppParams()); // WRONG
    }
    get curAmortizType() {
        return this._curAmortizType;
    }
    set curAmortizType(val) {
        this._curAmortizType = val;
        this.currentAmortizType.emit(val);
    }
    getInitLoanAppParams() {
        return {
            amortType: 0,
            loanAmount: this.productData.defaultLoanAmount,
            interestRate: this.productData.defaultInterestRate,
            installment: this.productData.defaultInstallment,
            interestRate2: this.productData.defaultInterestRate,
            term: this.productData.defaultTerm,
            disbursDate: this.productData.defaultDisbursementDate,
            firstDisbursDate: this.productData.firstDisbursementDate,
            isFixedRepaymentDate: this.productData.fixedRepaymentDate,
            arrearsGraceDay: ''
        };
    }
    ngOnInit() {
        // console.log('** LoanAppParamsComponent.ngOnInit() productData: %O', 
        //             this.productData);
        // this.loanParamsFG = this.fb.group({
        //   amortType:    [''],
        //   loanAmount:   [''],
        //   interestRate: [''],
        //   installment:  [''],
        //   interestRate2:  [''],
        //   term:         [''],
        //   disbursDate:  [''],
        //   firstDisbursDate: [''],
        //   isFixedRepaymentDate: [''],
        //   arrearsGraceDay:  ['']
        // }); // WRONG    
        this.loanParamsFG.patchValue(this.getInitLoanAppParams()); // OK
    }
    ngAfterViewInit() {
        // console.log('** LoanAppParamsComponent.ngAfterViewInit()');
    }
    amortizTypeChanged(value) {
        // console.log('CHANGE LoanAppParamsComponent.amortizTypeChanged() value=%O type=%s ', value, typeof(value));
        this.curAmortizType = value;
    }
};
LoanAppParamsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], LoanAppParamsComponent.prototype, "productData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('current-amortiz-type')
], LoanAppParamsComponent.prototype, "currentAmortizType", void 0);
LoanAppParamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-app-params',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-app-params.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-app-params.component.scss */ "./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.scss")).default]
    })
], LoanAppParamsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n\n.flex-column-right > form {\n  width: 100%;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  /* margin-bottom: 0px; */\n  width: 100%;\n}\n\n/*  approve  buttons */\n\n::ng-deep .tgi-mat-card-personal-approve.mat-card {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n.tgi-button-approve-loan {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: flex-end;\n}\n\n::ng-deep .tgi-mat-card-personal-approve .mat-card-header-text {\n  width: 100%;\n}\n\n.tgi-button-approve-loan-cancel {\n  margin-left: 20px;\n  margin-right: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtcGVyc29uYWwtbG9hbi1hcHAvcGVyc29uYWwtbG9hbi1hcHAtZm9ybS9wZXJzb25hbC1sb2FuLWFwcC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvYXBwcm92ZS1wZXJzb25hbC1sb2FuLWFwcC9wZXJzb25hbC1sb2FuLWFwcC1mb3JtL3BlcnNvbmFsLWxvYW4tYXBwLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLDRCQUFBO0FDSEo7O0FETUU7RUFFRSxhQUFBO0VBRUEsNkJBQUE7QUNMSjs7QURPRTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FDUko7O0FEV0U7RUFFRSw2QkFBQTtFQUNDLFdBQUE7QUNUTDs7QURZRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURZRTtFQUNHLFdBQUE7QUNUTDs7QURZRTtFQUNDLHdCQUFBO0VBQ0MsV0FBQTtBQ1RKOztBRFlFLHNCQUFBOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDVko7O0FEYUU7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtBQ1hKOztBRGNFO0VBQ0UsV0FBQTtBQ1hKOztBRGNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2FwcHJvdmUtcGVyc29uYWwtbG9hbi1hcHAvcGVyc29uYWwtbG9hbi1hcHAtZm9ybS9wZXJzb25hbC1sb2FuLWFwcC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udGdpLWJvZHktY29tcG9uZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4OyBcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDsgXHJcbiAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xyXG4gIH1cclxuICBcclxuICAuZmxleC1jb2x1bW4tbGVmdCB7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXHJcbiAgfVxyXG4gIC5mbGV4LWNvbHVtbi1yaWdodCB7XHJcbiAgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7IFxyXG4gIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtaXRlbSB7XHJcbiAgXHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAgKi9cclxuICAgICB3aWR0aDogMTAwJTsgXHJcbiAgfVxyXG4gIFxyXG4gIC50Z2ktbWF0LWNhcmQtbGVmdCB7XHJcbiAgICBtaW4td2lkdGg6IDM1MHB4OyBcclxuICAgIC8qIHdpZHRoOiBhdXRvOyAgKi9cclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtY29sdW1uLXJpZ2h0ID4gZm9ybSAge1xyXG4gICAgIHdpZHRoOiAxMDAlOyBcclxuICAgfVxyXG5cclxuICA6Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XHJcbiAgIC8qIG1hcmdpbi1ib3R0b206IDBweDsgKi9cclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICB9XHJcbiAgXHJcbiAgLyogIGFwcHJvdmUgIGJ1dHRvbnMgKi9cclxuICBcclxuICA6Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1wZXJzb25hbC1hcHByb3ZlLm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgfVxyXG4gIFxyXG4gIC50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1wZXJzb25hbC1hcHByb3ZlIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuLWNhbmNlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjRweDtcclxuICB9XHJcbiAgIiwiLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIC8qIHdpZHRoOiBhdXRvOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLXJpZ2h0ID4gZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIC8qIG1hcmdpbi1ib3R0b206IDBweDsgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qICBhcHByb3ZlICBidXR0b25zICovXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1wZXJzb25hbC1hcHByb3ZlLm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcGVyc29uYWwtYXBwcm92ZSAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuLWNhbmNlbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: PersonalLoanAppFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalLoanAppFormComponent", function() { return PersonalLoanAppFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _shared_services_entity_update_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/entity-update.service */ "./src/app/shared/services/entity-update.service.ts");
/* harmony import */ var src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");







// import { LoanProductService } from '../../services/loan-product.service';



let PersonalLoanAppFormComponent = class PersonalLoanAppFormComponent {
    // --------------------------------------------------------------  
    constructor(fb, activatedRoute, router, snackBarSrv, clientDetailSrv, loanAppUpdateSrv, loanAppStateSrv) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.snackBarSrv = snackBarSrv;
        this.clientDetailSrv = clientDetailSrv;
        this.loanAppUpdateSrv = loanAppUpdateSrv;
        this.loanAppStateSrv = loanAppStateSrv;
        this.simpleSnackBarRef = null;
        this.isLoanAppChanged$ = null;
        this._curAmortizType = 0;
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
        // console.log('* PersonalLoanAppFormComponent.CONSTRUCTOR()'); 
        this.loanAppStateSrv.context = 'Personal Loan App Update State Srv';
    }
    get currentAmortizType() {
        return this._curAmortizType;
    }
    set currentAmortizType(val) {
        this._curAmortizType = val;
        //  this.currentAmortizType.emit(val);
    }
    ngOnInit() {
        this.clientId = this.clientDetailSrv.curClientDetail.id;
        // console.log('* PersonalLoanAppFormComponent.ngOnInit() params: %O fees: %O', 
        //               this.loanParamsForm, this.loanFeesForm); 
        if (this.loanParamsForm) {
            this.personalLoanForm = this.fb.group({
                params: this.loanParamsForm.loanParamsFG,
            });
            this.persLoanParamsFG = this.personalLoanForm.get('params');
            // this.persLoanParamsChanges$ = this.persLoanParamsFG.valueChanges;
            // this.persLoanParamsChanges$ = this.loanParamsForm.loanParamsFG.valueChanges;
        }
        this.isLoanAppChanged$ = this.loanAppStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            // console.log(`\tPIPE: ApprovePersonalLoanAppComponent.OnInit() loanAppStateSrv.IsEntityChangedInterface:%O`, r,);
            if (r.op === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityStateEnum"].UPDATE) {
                if (!r.isEnd && r.opResult === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'UPDATE', isEnd: false, opResult: 'NOSET' };
                }
                else if (r.isEnd && r.opResult === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    // this.simpleSnackBarRef.afterDismissed()
                    // .subscribe( (res: MatSnackBarDismiss) => {
                    //   // DEBUG
                    //     this.clientDetailSrv.clearClientDetail();
                    //     this.router.navigateByUrl(`/clients/${this.clientId}/overview`);
                    //   }
                    // );
                    return { op: 'UPDATE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === src_app_shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_9__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`${r.message}`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    this.simpleSnackBarRef.afterDismissed()
                        .subscribe((res) => {
                        this.clientDetailSrv.clearClientDetail();
                        this.router.navigateByUrl(`/clients/${this.clientId}/overview`);
                    });
                    return { op: 'UPDATE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
        // eom    
    }
    ngAfterViewInit() {
        // console.log('* PersonalLoanAppFormComponent.ngAfterViewInit() params: %O fees: %O', 
        //               this.loanParamsForm, this.loanFeesForm); 
        // WRONG
        // if (this.loanParamsForm && this.loanFeesForm) {
        //   this.personalLoanForm = this.fb.group({
        //     params: this.loanParamsForm.loanParamsFG,
        //     fees: this.loanFeesForm.feesFormArray,
        //   });
        //   this.persLoanParamsFG = this.personalLoanForm.get('params') as FormGroup;
        // }
        if (this.personalLoanForm && this.loanFeesForm) {
            this.personalLoanForm.addControl('fees', this.loanFeesForm.feesFormArray);
        }
        if (this.persLoanParamsFG) {
            const ctrl = this.persLoanParamsFG.get('arrearsGraceDay');
            if (ctrl) {
                ctrl.setValue('INIT');
            }
        }
    }
    onCurrentAmortizType(ev) {
        // console.log('ApprovePersonalLoanAppComponent.onCurrentAmortizType(ev) view = %s', ev);
        this.currentAmortizType = ev;
        this.personalLoanAppObj.amortizationType = ev.toString(); // ????
    }
    onApproveLoanOk(loanProduct) {
        // console.log('ApprovePersonalLoanAppComponent.onApproveLoanOk() loanProduct -> %O',
        //             loanProduct);
        this.loanParamsGet();
        this.feesParamsGet();
        console.log('ApprovePersonalLoanAppComponent.onApproveLoanOk() personalLoanAppObj= %O', this.personalLoanAppObj);
        // this.simpleSnackBarRef = 
        //   this.snackBarSrv.open(`Personal Loan App approved: ${JSON.stringify(this.personalLoanAppObj)}`,
        //               'X', {
        //               duration: 0,
        //               panelClass: 'mat-snack-bar-container_info'
        //             });
        this.loanAppUpdateSrv.approveLoanApp(this.clientId, this.personalLoanAppObj, this.loanAppStateSrv);
    }
    onApproveLoanCancel(loanProduct) {
        // console.log('ApprovePersonalLoanAppComponent.onApproveLoanCancel()  loanProduct -> %O', loanProduct);
        this.router.navigateByUrl(`/clients/${this.clientDetailSrv.curClientDetail.id}/overview`);
    }
    loanParamsGet() {
        const currentParamsFormValue = this.personalLoanForm.value.params;
        if (currentParamsFormValue) {
            this.personalLoanAppObjFill(currentParamsFormValue);
        }
        // makarov  ???
        this.dataForAmortizationSchedule = {
            productId: this.personalLoanAppObj.productId,
            currentAmortizType: this.personalLoanAppObj.amortizationType,
            params: {
                loanAmount: this.personalLoanAppObj.loanAmount,
                interestRate: this.personalLoanAppObj.interestRate,
                startDate: this.personalLoanAppObj.disbursementDate,
                term: this.personalLoanAppObj.term,
                firstRepaymentDate: this.personalLoanAppObj.firstDisbursementDate // "2019-12-31"
            }
        };
        console.log('ApprovePersonalLoanAppComponent.loanParamsGet() dataForAmortizationSchedule -> %O', this.dataForAmortizationSchedule);
    }
    feesParamsGet() {
        const currentFeesFormValue = this.personalLoanForm.value.fees;
        if (currentFeesFormValue) {
            this.personalLoanAppObjByFeesFill(currentFeesFormValue);
        }
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
            throw new Error('Requested Personal Loan App has not found.');
        }
        this.personalLoanAppObj.loanApplicationId = personalLoanApp.id;
        this.personalLoanAppObj.productId = personalLoanApp.productId;
        const loanProductAmortizTypes = this.fetchLoanProductAmortizTypes(this.productData);
        if (!loanProductAmortizTypes) {
            throw new Error('Loan Product Amortization Types has not found.');
        }
        this.personalLoanAppObj.amortizationType =
            loanProductAmortizTypes[ev.amortType];
        this.personalLoanAppObj.loanAmount = +ev.loanAmount;
        if (ev.amortType === 2) {
            this.personalLoanAppObj.interestRate = +ev.interestRate2;
        }
        else {
            this.personalLoanAppObj.interestRate = +ev.interestRate;
        }
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        this.personalLoanAppObj.disbursementDate =
            (new Date(ev.disbursDate)).toLocaleDateString('en-CA', options);
        this.personalLoanAppObj.firstDisbursementDate =
            (new Date(ev.firstDisbursDate)).toLocaleDateString('en-CA', options);
        this.personalLoanAppObj.fixedRepaymentDate = ev.isFixedRepaymentDate;
        this.personalLoanAppObj.term = ev.term;
        this.personalLoanAppObj.penaltyRate = this.productData.defaultPenaltyRate;
        this.personalLoanAppObj.fees = null;
        this.personalLoanAppObj.installment = +ev.installment;
        this.personalLoanAppObj.drawnDownFixed = this.productData.drawnDownFixed;
    }
    personalLoanAppObjByFeesFill(ev) {
        let feesArr = [];
        const feesHandlingArr = this.loanFeesForm.feesHandlingArr;
        if (ev && Array.isArray(ev) && ev.length > 0) {
            for (var i = 0; i < ev.length; i++) {
                feesArr.push({
                    value: +ev[i].value,
                    feeId: 0,
                    feeType: ev[i].type,
                    tax: +ev[i].tax,
                    feeHandling: feesHandlingArr[ev[i].feeHandling],
                });
            }
            this.personalLoanAppObj.fees = feesArr;
        }
    }
    //--------------------------------------------------------------------------
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
PersonalLoanAppFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_6__["ClientDetailService"] },
    { type: _shared_services_entity_update_service__WEBPACK_IMPORTED_MODULE_8__["EntityUpdateService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], PersonalLoanAppFormComponent.prototype, "productData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loanAppParams', { static: true })
], PersonalLoanAppFormComponent.prototype, "loanParamsForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('loanAppFees', { static: true })
], PersonalLoanAppFormComponent.prototype, "loanFeesForm", void 0);
PersonalLoanAppFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-loan-app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-loan-app-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"],
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-loan-app-form.component.scss */ "./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.scss")).default]
    })
], PersonalLoanAppFormComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep app-personal-loan-app.tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep app-personal-loan-app.tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n  ::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n    padding-top: 20px;\n    padding-left: 64px;\n    padding-bottom: 0px;\n  }\n  */\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\napp-personal-loan-app.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  display: inline;\n}\n\n.tgi-button-deny {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2JhbmtzdGF0ZW1lbnQtaW5xdWlyeS9iYW5rc3RhdGVtZW50LWlucXVpcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9iYW5rc3RhdGVtZW50LWlucXVpcnkvYmFua3N0YXRlbWVudC1pbnF1aXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSkY7O0FET0E7Ozs7OztHQUFBOztBQU9BO0VBQ0UsaUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ1BGOztBRFVBO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FDUkY7O0FEV0E7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1ZGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ1hGOztBRGVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNaRjs7QURlQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ1pGOztBRGVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDWkY7O0FEZUE7RUFDRSxJQUFBO0VBQ0Esc0JBQUE7QUNaRjs7QURlQTtFQUNFLGtCQUFBO0FDWkY7O0FEZUE7RUFDRSx3QkFBQTtBQ1pGOztBRGVBO0VBQ0UsZ0JBQUE7QUNaRjs7QURlQTtFQUNFLGlCQUFBO0FDWkY7O0FEZUE7RUFDRSxlQUFBO0FDWkY7O0FEZUEseUJBQUE7O0FBQ0E7RUFDRSxVQUFBO0FDWkY7O0FEZUE7RUFDRSxVQUFBO0FDWkY7O0FEZUE7RUFDRSxVQUFBO0FDWkY7O0FEZUE7RUFDRSxVQUFBO0FDWkY7O0FEZUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1pGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FDWkY7O0FEZUE7RUFDRSxpQkFBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNaRjs7QURlQTtFQUNFLGVBQUE7QUNaRjs7QURlQTtFQUNFLGlCQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvYmFua3N0YXRlbWVudC1pbnF1aXJ5L2JhbmtzdGF0ZW1lbnQtaW5xdWlyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbjo6bmctZGVlcCBhcHAtcGVyc29uYWwtbG9hbi1hcHAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24ubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBmb250LXNpemU6IG1lZGl1bTtcblxuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZm9udC1zaXplOiBtZWRpdW07XG5cblxuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4vKlxuICA6Om5nLWRlZXAgIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YWJsZS5tYXQtY2FyZC10aXRsZSAubWF0LWljb24ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG4gICovXG4udGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi50Z2ktbWF0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDI1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA3NSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbjtcbn1cblxuYXBwLXBlcnNvbmFsLWxvYW4tYXBwLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbi50Z2ktbWF0LWltZy1zaXplIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcbiAgLyptaW4td2lkdGg6IDMwMHB4OyAqL1xuICB3aWR0aDogYXV0bztcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcbiAgLyogKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRnaS1tYXQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbi50Z2ktY2FyZC1saW5lLWluZGVudC0xIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDEuMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMC4wO1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxLjA7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDAuMDtcbn1cblxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi50Z2ktYnV0dG9uLWljb24tdGVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRnaS1idXR0b24taWNvbi10Ymwge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLnRnaS1pY29uLXNpemUtdGJsIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1hZGRyZXNzLXR5cGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50Z2ktYnV0dG9uLWRlbnkge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuIiwiLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuOjpuZy1kZWVwIGFwcC1wZXJzb25hbC1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIC8qIHBhZGRpbmctbGVmdDogMTBweDsgKi9cbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuOjpuZy1kZWVwIGFwcC1wZXJzb25hbC1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLypcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuICAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4udGdpLW1hdC1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogMjUlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogNzUlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbmFwcC1wZXJzb25hbC1sb2FuLWFwcC5mbGV4LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtaW1nLXNpemUge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICAvKm1pbi13aWR0aDogMzAwcHg7ICovXG4gIHdpZHRoOiBhdXRvO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1oZWFkZXItaW1hZ2Uge1xuICAvKiAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1pY29uLnRnaS1tYXQtaWNvbi1zaXplIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiB2aXNpYmxlIGFmdGVyIGxvYWRlZCAqL1xuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi50Z2ktYnV0dG9uLWljb24tdGVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRnaS1idXR0b24taWNvbi10Ymwge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLnRnaS1pY29uLXNpemUtdGJsIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1hZGRyZXNzLXR5cGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50Z2ktYnV0dG9uLWRlbnkge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BankStatementInquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankStatementInquiryComponent", function() { return BankStatementInquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _shared_services_entity_credit_score_inquiry_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../shared/services/entity-credit-score-inquiry.service */ "./src/app/shared/services/entity-credit-score-inquiry.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");





// -----------




// -----------

let BankStatementInquiryComponent = class BankStatementInquiryComponent {
    // --------------------------------------------------------------
    //
    constructor(activatedRoute, router, formBuilder, userSrv, clientDetailOverviewStateSrv, entityCreditScoreInquiryService, clientDetailOverviewService, snackBarSrv, inquiryStateSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userSrv = userSrv;
        this.clientDetailOverviewStateSrv = clientDetailOverviewStateSrv;
        this.entityCreditScoreInquiryService = entityCreditScoreInquiryService;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        this.inquiryStateSrv = inquiryStateSrv;
        this.currentUser$ = null;
        this.currentClientDetail$ = null;
        this.isDenyChanged$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isClientDetailOverviewChanged$ = null;
        this.isInquiryChanged$ = null;
        inquiryStateSrv.context = 'Inquiry Update Srv';
    }
    ngOnInit() {
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                this.clientDetailOverviewService.clearClientDetail();
            }
        }));
        // ---------------------
        this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetail$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((client) => {
            if (!this.clientDetailOverviewService.isClientDetailNotEmpty(client)) {
                return null;
            }
            this.currentClientDetail = client;
            return client;
        }));
    }
    ngOnDestroy() {
    }
};
BankStatementInquiryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _shared_services_entity_credit_score_inquiry_service__WEBPACK_IMPORTED_MODULE_8__["EntityCreditScoreInquiryService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_9__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['LOAN_APP_STATE_SERVICE',] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BankStatementInquiryComponent.prototype, "bankStatement", void 0);
BankStatementInquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bankstatement-inquiry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bankstatement-inquiry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"],
            { provide: 'LOAN_APP_STATE_SERVICE', useClass: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] }
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bankstatement-inquiry.component.scss */ "./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('LOAN_APP_STATE_SERVICE'))
], BankStatementInquiryComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n.tgi-blad-mat-card-left {\n  width: auto;\n}\n\n.tgi-blad-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-blad-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-blad-subtitle-line-1 {\n  padding-top: 20px;\n}\n\n/*   !!! connection with right card */\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2J1c2luZXNzLWxvYW4tYXBwLWRldGFpbC9idXNpbmVzcy1sb2FuLWFwcC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9idXNpbmVzcy1sb2FuLWFwcC1kZXRhaWwvYnVzaW5lc3MtbG9hbi1hcHAtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBRUksV0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLHdCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBLHFDQUFBOztBQUNBO0VBQ1Esd0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9idXNpbmVzcy1sb2FuLWFwcC1kZXRhaWwvYnVzaW5lc3MtbG9hbi1hcHAtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi50Z2ktYmxhZC1tYXQtY2FyZC1sZWZ0IHtcclxuXHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLnRnaS1ibGFkLW1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLWJsYWQtbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbn1cclxuXHJcbi50Z2ktYmxhZC1zdWJ0aXRsZS1saW5lLTEge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi8qICAgISEhIGNvbm5lY3Rpb24gd2l0aCByaWdodCBjYXJkICovXHJcbjo6bmctZGVlcCAgICAudGdpLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDsgXHJcbiAgICB9XHJcblxyXG4iLCIubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4udGdpLWJsYWQtbWF0LWNhcmQtbGVmdCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4udGdpLWJsYWQtbWF0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1ibGFkLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbi50Z2ktYmxhZC1zdWJ0aXRsZS1saW5lLTEge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLyogICAhISEgY29ubmVjdGlvbiB3aXRoIHJpZ2h0IGNhcmQgKi9cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: BusinessLoanAppDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessLoanAppDetailComponent", function() { return BusinessLoanAppDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");






let BusinessLoanAppDetailComponent = class BusinessLoanAppDetailComponent {
    // --------------------------------------------------------------
    constructor(router, route, denyStateSrv, clientDetailOverviewService, snackBarSrv) {
        this.router = router;
        this.route = route;
        this.denyStateSrv = denyStateSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        // @Input('data-source') clientData: any;
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
        this.client = null;
        this.businessLoan = null;
        this.clientData = null;
        this.disabledButtons = false;
        // ---------------------
        this.simpleSnackBarRef = null;
        this.isDenyChanged$ = null;
    }
    ngOnInit() {
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.clientData = this.clientDetailOverviewService.curClientDetail;
        this.client = {
            id: this.clientData.id,
        };
        this.fetchBusinessLoanInfo();
        console.log("Fetching From business loan app detail");
        // ---------------------
        /*
                this.isDenyChanged$ = this.denyStateSrv.isEntityChanged$
                .pipe(
                  map((r: IsEntityChangedInterface): OpStateInterface => {
                    // console.log(`\tPIPE: PersonalLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
          
                    if (r.op === EntityStateEnum.NOSET) {
                      if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
                        if (this.simpleSnackBarRef != null) {
                          this.simpleSnackBarRef.dismiss();
                          this.simpleSnackBarRef = null;
                        }
                        return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                      }
                    } else if (r.op === EntityStateEnum.LOAD) {
          
                      if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
                        if (this.simpleSnackBarRef != null) {
                          this.simpleSnackBarRef.dismiss();
                          this.simpleSnackBarRef = null;
                        }
                        return { op: 'LOAD', isEnd: false, opResult: 'NOSET' };
          
                      } else if (r.isEnd && r.opResult === EntityChangeResultEnum.ERROR) {
          
                        this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`,
                          'X', {
                          duration: 0,  // 5000
                          panelClass: 'mat-snack-bar-container_err'
                        });
          
                        return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                      } else if (r.isEnd && r.opResult === EntityChangeResultEnum.SUCCESS) {
                       
                        this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`,
                          'X', {
                          duration: 2000,  // 5000
                          panelClass: 'mat-snack-bar-container_info'
                        });
          
                              // Disabled Buttons APPROVE DENY
                              this.disabledButtons = true;
                         
                         //   this.simpleSnackBarRef.afterDismissed()
                         //   .subscribe(
                         //     (res: MatSnackBarDismiss) => {
          
                                // this.router.navigateByUrl('/clients');
                         //     }
                         //   );
                        
                        return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                      }
                    }
                  })
                );
                */
    }
    fetchBusinessLoanInfo() {
        console.log("Fetching From business loan app detail - client ddata " + this.clientData);
        if (this.clientData.loanApplications != undefined &&
            Array.isArray(this.clientData.loanApplications) &&
            this.clientData.loanApplications.length > 0) {
            console.log("Fetching From business loan app detail - client data loop " + this.clientData.loanApplications);
            this.businessLoan = this.clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'requested' &&
                    loan.type.toLocaleLowerCase() === 'business';
            });
            console.log('BusinessLoanAppComponent.fetchBusinessLoanInfo() %O', this.businessLoan);
            if (this.businessLoan != undefined) {
            }
        }
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
BusinessLoanAppDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_4__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_5__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
BusinessLoanAppDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-business-loan-app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./business-loan-app-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./business-loan-app-detail.component.scss */ "./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.scss")).default]
    })
], BusinessLoanAppDetailComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/business-loan-app/business-loan-app.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/clients/client-detail/business-loan-app/business-loan-app.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep business-loan-app.tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep business-loan-app.tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n  ::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n    padding-top: 20px;\n    padding-left: 64px; \n    padding-bottom: 0px;\n  }\n  */\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\n.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep business-loan-app.tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep business-loan-app.tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep business-loan-app.mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep business-loan-app.tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep business-loan-app.tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep business-loan-app.tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep business-loan-app.tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  display: inline;\n}\n\n.tgi-button-deny {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2J1c2luZXNzLWxvYW4tYXBwL2J1c2luZXNzLWxvYW4tYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvYnVzaW5lc3MtbG9hbi1hcHAvYnVzaW5lc3MtbG9hbi1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFHQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKRjs7QURPQTs7Ozs7O0dBQUE7O0FBT0E7RUFDRSxpQkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLDRCQUFBO0FDUEY7O0FEVUE7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNSRjs7QURXQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVkY7O0FEY0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDWEY7O0FEZUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ1pGOztBRGVBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDWkY7O0FEZUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNaRjs7QURlQTtFQUNFLElBQUE7RUFDQSxzQkFBQTtBQ1pGOztBRGVBO0VBQ0Usa0JBQUE7QUNaRjs7QURlQTtFQUNFLHdCQUFBO0FDWkY7O0FEZUE7RUFDRSxnQkFBQTtBQ1pGOztBRGVBO0VBQ0UsaUJBQUE7QUNaRjs7QURlQTtFQUNFLGVBQUE7QUNaRjs7QURlQSx5QkFBQTs7QUFDQTtFQUNFLFVBQUE7QUNaRjs7QURlQTtFQUNFLFVBQUE7QUNaRjs7QURlQTtFQUNFLFVBQUE7QUNaRjs7QURlQTtFQUNFLFVBQUE7QUNaRjs7QURlQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDWkY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNaRjs7QURlQTtFQUNFLGlCQUFBO0FDWkY7O0FEZUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1pGOztBRGVBO0VBQ0UsZUFBQTtBQ1pGOztBRGVBO0VBQ0UsaUJBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9idXNpbmVzcy1sb2FuLWFwcC9idXNpbmVzcy1sb2FuLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcblxyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC8qIHBhZGRpbmctbGVmdDogMTBweDsgKi9cclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuXHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gICovXHJcbi50Z2ktYm9keS1jb21wb25lbnQge1xyXG4gIHBhZGRpbmctdG9wOiAzMnB4O1xyXG59XHJcblxyXG4udGdpLW1hdC1jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uLWxlZnQge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB3aWR0aDogNzUlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIDtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGdpLW1hdC1pbWctc2l6ZSB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWxlZnQge1xyXG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcclxuICAvKiAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBidXNpbmVzcy1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG59XHJcblxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gIG9wYWNpdHk6IDEuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIG9wYWNpdHk6IDEuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRlc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi50Z2ktaWNvbi1zaXplLXRibCB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWFkZHJlc3MtdHlwZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1kZW55IHtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuIiwiLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi8qXG4gIDo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRhYmxlLm1hdC1jYXJkLXRpdGxlIC5tYXQtaWNvbiB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4OyBcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG4gICovXG4udGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi50Z2ktbWF0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAyNSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA3NSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87XG59XG5cbjo6bmctZGVlcCBidXNpbmVzcy1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcbiAgLyogKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRnaS1tYXQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCBidXNpbmVzcy1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCBidXNpbmVzcy1sb2FuLWFwcC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50Z2ktaWNvbi1lZGl0LXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRlc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50Z2ktYnV0dG9uLWljb24tdGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi50Z2ktaWNvbi1zaXplLXRibCB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi50Z2ktYWRkcmVzcy10eXBlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udGdpLWJ1dHRvbi1kZW55IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/business-loan-app/business-loan-app.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/clients/client-detail/business-loan-app/business-loan-app.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BusinessLoanAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessLoanAppComponent", function() { return BusinessLoanAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/deny-loan-application.service */ "./src/app/clients/client-detail/services/deny-loan-application.service.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");








let BusinessLoanAppComponent = class BusinessLoanAppComponent {
    // --------------------------------------------------------------
    constructor(router, route, denyLoanApplicationService, denyStateSrv, snackBarSrv) {
        this.router = router;
        this.route = route;
        this.denyLoanApplicationService = denyLoanApplicationService;
        this.denyStateSrv = denyStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
        this.client = null;
        this.buisnessLoan = null;
        this.disabledButtons = false;
        this.displayedColumns = [
            'name',
            'title',
            'ownershipPercentage'
        ];
        // ------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isDenyChanged$ = null;
    }
    ngOnInit() {
        this.client = {
            id: this.clientData.id,
        };
        this.fetchBusinessLoanInfo();
        this.officerDataSource = this.getBusinessLoanOfficerArr();
        // ---------------------
        this.isDenyChanged$ = this.denyStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`\tPIPE: BusinessLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
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
                    // Disabled Buttons APPROVE and DENY
                    this.disabledButtons = true;
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_info'
                    });
                    this.simpleSnackBarRef.afterDismissed()
                        .subscribe((res) => {
                        this.router.navigateByUrl(`/clients/${this.client.id}/overview`);
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    getBusinessLoanOfficerArr() {
        //  const testFeesArr = [
        //     {
        //         "name": "Late Fee 1",
        //         "type": "Late Fee 1",
        //         "method": "As Fixed Rate 1",
        //         "value": null,
        //         "tax": null,
        //         "taxAble": false,
        //         "handling": 0
        //     },
        //     {
        //       "name": "Late Fee 2",
        //       "type": "Late Fee 2",
        //       "method": "As Fixed Rate 2",
        //       "value": null,
        //       "tax": null,
        //       "taxAble": false,
        //       "handling": 1
        //   },
        //   {
        //     "name": "Late Fee 3",
        //     "type": "Late Fee 3",
        //     "method": "As Fixed Rate 3",
        //     "value": null,
        //     "tax": null,
        //     "taxAble": false,
        //     "handling": 0
        //   },
        // ];
        // return testFeesArr;
        // console.log('BusinessLoanAppComponent.getOfficerArr() clientData: %O', this.clientData);
        if (this.buisnessLoan && this.buisnessLoan.officers &&
            Array.isArray(this.buisnessLoan.officers) &&
            this.buisnessLoan.officers.length > 0) {
            return this.buisnessLoan.officers;
        }
        return [];
    }
    fetchBusinessLoanInfo() {
        if (this.clientData.loanApplications != undefined &&
            Array.isArray(this.clientData.loanApplications) &&
            this.clientData.loanApplications.length > 0) {
            this.buisnessLoan = this.clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'requested' &&
                    loan.type.toLocaleLowerCase() === 'business';
            });
            if (this.buisnessLoan != undefined) {
            }
        }
    }
    onApproveBtnClick() {
        console.log('BusinessLoanAppComponent.onApproveBtnClick() %O', this.buisnessLoan);
        this.router.navigate([`${this.buisnessLoan.productId}`, 'buisness-loan-app'], { relativeTo: this.route });
    }
    onDenyBtnClick() {
        // console.log('BusinessLoanAppComponent.onDenyBtnClick() %O', this.buisnessLoan);
        console.log('BusinessLoanAppComponent.onDenyBtnClick() clientId -> %O loanApplication.id -> %O', this.client.id, this.buisnessLoan.id);
        this.denyLoanApplicationService.denyLoanApplication(+this.client.id, +this.buisnessLoan.id, this.denyStateSrv);
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
BusinessLoanAppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__["DenyLoanApplicationService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], BusinessLoanAppComponent.prototype, "clientData", void 0);
BusinessLoanAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-business-loan-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./business-loan-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-app/business-loan-app.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"], _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__["DenyLoanApplicationService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./business-loan-app.component.scss */ "./src/app/clients/client-detail/business-loan-app/business-loan-app.component.scss")).default]
    })
], BusinessLoanAppComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep app-business-loan-app-detail.tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep app-business-loan-app-detail.tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n  ::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n    padding-top: 20px;\n    padding-left: 64px; \n    padding-bottom: 0px;\n  }\n  */\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\napp-business-loan-app-detail.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  display: inline;\n}\n\n.tgi-button-deny {\n  margin-left: 32px;\n}\n\n::ng-deep .tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n  padding-top: 20px;\n  padding-left: 64px;\n  padding-bottom: 0px;\n}\n*/\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\n.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  /* display: inline; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2J1c2luZXNzLWxvYW4tZGV0YWlsL2J1c2luZXNzLWxvYW4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvYnVzaW5lc3MtbG9hbi1kZXRhaWwvYnVzaW5lc3MtbG9hbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFHQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTs7Ozs7O0dBQUE7O0FBT0E7RUFDSSxpQkFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLDRCQUFBO0FDUEo7O0FEVUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNSSjs7QURXQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVko7O0FEY0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDWEo7O0FEZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1pKOztBRGVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNaSjs7QURlQTtFQUNJLElBQUE7RUFDQSxzQkFBQTtBQ1pKOztBRGVBO0VBQ0ksa0JBQUE7QUNaSjs7QURlQTtFQUNJLHdCQUFBO0FDWko7O0FEZUE7RUFDSSxnQkFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7QUNaSjs7QURlQSx5QkFBQTs7QUFDQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUNaSjs7QURlQTtFQUNJLGlCQUFBO0FDWko7O0FEZUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGVBO0VBQ0ksZUFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7QUNaSjs7QURnQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRG9CQTs7Ozs7O0NBQUE7O0FBT0E7RUFDSSxpQkFBQTtBQ2pCSjs7QURvQkE7RUFDSSxrQkFBQTtBQ2pCSjs7QURvQkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ3BCSjs7QUR1QkE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNyQko7O0FEdUJBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUN2Qko7O0FEeUJBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQTtFQUNJLElBQUE7RUFBTyxzQkFBQTtBQ3JCWDs7QUR3QkE7RUFDSSxrQkFBQTtBQ3JCSjs7QUR1QkE7RUFDSSx3QkFBQTtBQ3BCSjs7QURzQkE7RUFDSSxnQkFBQTtBQ25CSjs7QURxQkE7RUFDSSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQSx5QkFBQTs7QUFDQTtFQUNJLFVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksVUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxVQUFBO0FDbEJKOztBRHFCQTtFQUNJLFVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNsQko7O0FEcUJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGlCQUFBO0FDbEJKOztBRHFCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDbEJKOztBRG9CQTtFQUNJLHFCQUFBO0FDakJKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2J1c2luZXNzLWxvYW4tZGV0YWlsL2J1c2luZXNzLWxvYW4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtYnVzaW5lc3MtbG9hbi1hcHAtZGV0YWlsLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGFwcC1idXNpbmVzcy1sb2FuLWFwcC1kZXRhaWwudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gICovXHJcbi50Z2ktYm9keS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMycHg7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xyXG59XHJcblxyXG4uZmxleC1jb2x1bW4tbGVmdCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbi1yaWdodCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgO1xyXG59XHJcblxyXG5hcHAtYnVzaW5lc3MtbG9hbi1hcHAtZGV0YWlsLmZsZXgtaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50Z2ktbWF0LWltZy1zaXplIHtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWxlZnQge1xyXG4gICAgLyptaW4td2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcclxuICAgIC8qICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG59XHJcblxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXHJcbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbn1cclxuXHJcbi50Z2ktaWNvbi1lZGl0LXNpemUge1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWljb24tdGVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuLnRnaS1pY29uLXNpemUtdGJsIHtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWFkZHJlc3MtdHlwZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWRlbnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMTBweDsgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuXHJcblxyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi8qXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRhYmxlLm1hdC1jYXJkLXRpdGxlIC5tYXQtaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA2NHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuKi9cclxuLnRnaS1ib2R5LWNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbi1sZWZ0IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG4uZmxleC1jb2x1bW4tcmlnaHQge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDs7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGdpLW1hdC1pbWctc2l6ZSB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcclxuICAgIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcclxuICAgIC8qICovICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuOjpuZy1kZWVwICAgIC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbn1cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSAgIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cclxuOjpuZy1kZWVwICAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwICAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxufVxyXG5cclxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWljb24tdGJsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4udGdpLWljb24tc2l6ZS10Ymwge1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbn1cclxuLnRnaS1hZGRyZXNzLXR5cGUge1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lOyAqL1xyXG59XHJcbiIsIi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbjo6bmctZGVlcCBhcHAtYnVzaW5lc3MtbG9hbi1hcHAtZGV0YWlsLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgYXBwLWJ1c2luZXNzLWxvYW4tYXBwLWRldGFpbC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLypcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7IFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgKi9cbi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLnRnaS1tYXQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDI1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDc1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG5hcHAtYnVzaW5lc3MtbG9hbi1hcHAtZGV0YWlsLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XG4gIC8qICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50Z2ktbWF0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50Z2ktY2FyZC1saW5lLWluZGVudC0yIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udGdpLWljb24tZWRpdC1zaXplIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLWljb24tc2l6ZS10Ymwge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWFkZHJlc3MtdHlwZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnRnaS1idXR0b24tZGVueSB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4vKlxuOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbiovXG4udGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi50Z2ktbWF0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAyNSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA3NSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XG4gIC8qICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50Z2ktbWF0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50Z2ktY2FyZC1saW5lLWluZGVudC0yIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udGdpLWljb24tZWRpdC1zaXplIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLWljb24tc2l6ZS10Ymwge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWFkZHJlc3MtdHlwZSB7XG4gIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BusinessLoanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessLoanDetailComponent", function() { return BusinessLoanDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");








let BusinessLoanDetailComponent = class BusinessLoanDetailComponent {
    // --------------------------------------------------------------
    constructor(router, route, denyStateSrv, clientDetailOverviewService, snackBarSrv) {
        this.router = router;
        this.route = route;
        this.denyStateSrv = denyStateSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        // @Input('data-source') clientData: any;
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
        this.client = null;
        this.businessLoan = null;
        this.clientData = null;
        this.disabledButtons = false;
        // ---------------------
        this.simpleSnackBarRef = null;
        this.isDenyChanged$ = null;
    }
    ngOnInit() {
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.clientData = this.clientDetailOverviewService.curClientDetail;
        this.client = {
            id: this.clientData.id,
        };
        this.fetchBusinessLoanInfo();
        console.log("Fetching From business loan app detail");
        // ---------------------
        this.isDenyChanged$ = this.denyStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`\tPIPE: PersonalLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 2000,
                        panelClass: 'mat-snack-bar-container_info'
                    });
                    // Disabled Buttons APPROVE DENY
                    this.disabledButtons = true;
                    /*
                       this.simpleSnackBarRef.afterDismissed()
                       .subscribe(
                         (res: MatSnackBarDismiss) => {
     
                           // this.router.navigateByUrl('/clients');
                         }
                       );
                   */
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    fetchBusinessLoanInfo() {
        console.log("Fetching From business loan app detail - client ddata " + this.clientData);
        if (this.clientData.loanApplications != undefined &&
            Array.isArray(this.clientData.loanApplications) &&
            this.clientData.loanApplications.length > 0) {
            console.log("Fetching From business loan app detail - client data loop " + this.clientData.loanApplications);
            this.businessLoan = this.clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'requested' &&
                    loan.type.toLocaleLowerCase() === 'business';
            });
            console.log('BusinessLoanAppComponent.fetchBusinessLoanInfo() %O', this.businessLoan);
            if (this.businessLoan != undefined) {
            }
        }
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
BusinessLoanDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_7__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
BusinessLoanDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-business-loan-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./business-loan-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./business-loan-detail.component.scss */ "./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.scss")).default]
    })
], BusinessLoanDetailComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/business-loan/business-loan.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/clients/client-detail/business-loan/business-loan.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep business-loan-app.tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep business-loan-app.tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n  ::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n    padding-top: 20px;\n    padding-left: 64px; \n    padding-bottom: 0px;\n  }\n  */\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\n.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep business-loan-app.tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep business-loan-app.tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep business-loan-app.mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep business-loan-app.tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep business-loan-app.tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep business-loan-app.tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep business-loan-app.tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  display: inline;\n}\n\n.tgi-button-deny {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2J1c2luZXNzLWxvYW4vYnVzaW5lc3MtbG9hbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2J1c2luZXNzLWxvYW4vYnVzaW5lc3MtbG9hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUVBLGlCQUFBO0VBRUEsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUdBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRE9BOzs7Ozs7R0FBQTs7QUFPQTtFQUNFLGlCQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNQRjs7QURVQTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ1JGOztBRFdBO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNWRjs7QURjQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNYRjs7QURlQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDWkY7O0FEZUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNaRjs7QURlQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ1pGOztBRGVBO0VBQ0UsSUFBQTtFQUNBLHNCQUFBO0FDWkY7O0FEZUE7RUFDRSxrQkFBQTtBQ1pGOztBRGVBO0VBQ0Usd0JBQUE7QUNaRjs7QURlQTtFQUNFLGdCQUFBO0FDWkY7O0FEZUE7RUFDRSxpQkFBQTtBQ1pGOztBRGVBO0VBQ0UsZUFBQTtBQ1pGOztBRGVBLHlCQUFBOztBQUNBO0VBQ0UsVUFBQTtBQ1pGOztBRGVBO0VBQ0UsVUFBQTtBQ1pGOztBRGVBO0VBQ0UsVUFBQTtBQ1pGOztBRGVBO0VBQ0UsVUFBQTtBQ1pGOztBRGVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNaRjs7QURlQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQ1pGOztBRGVBO0VBQ0UsaUJBQUE7QUNaRjs7QURlQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDWkY7O0FEZUE7RUFDRSxlQUFBO0FDWkY7O0FEZUE7RUFDRSxpQkFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2J1c2luZXNzLWxvYW4vYnVzaW5lc3MtbG9hbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcblxyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC8qIHBhZGRpbmctbGVmdDogMTBweDsgKi9cclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuXHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gICovXHJcbi50Z2ktYm9keS1jb21wb25lbnQge1xyXG4gIHBhZGRpbmctdG9wOiAzMnB4O1xyXG59XHJcblxyXG4udGdpLW1hdC1jb250YWluZXIge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG5cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uLWxlZnQge1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDI1JTtcclxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB3aWR0aDogNzUlO1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cclxuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gIDtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGdpLW1hdC1pbWctc2l6ZSB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWxlZnQge1xyXG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcclxuICAvKiAqL1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWNhcmQtaGVhZGVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCBidXNpbmVzcy1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG59XHJcblxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gIG9wYWNpdHk6IDEuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIG9wYWNpdHk6IDEuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRlc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi50Z2ktaWNvbi1zaXplLXRibCB7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWFkZHJlc3MtdHlwZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1kZW55IHtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuIiwiLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi8qXG4gIDo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRhYmxlLm1hdC1jYXJkLXRpdGxlIC5tYXQtaWNvbiB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4OyBcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICB9XG4gICovXG4udGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi50Z2ktbWF0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAyNSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA3NSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87XG59XG5cbjo6bmctZGVlcCBidXNpbmVzcy1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcbiAgLyogKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRnaS1tYXQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCBidXNpbmVzcy1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCBidXNpbmVzcy1sb2FuLWFwcC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuOjpuZy1kZWVwIGJ1c2luZXNzLWxvYW4tYXBwLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgYnVzaW5lc3MtbG9hbi1hcHAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50Z2ktaWNvbi1lZGl0LXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRlc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50Z2ktYnV0dG9uLWljb24tdGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi50Z2ktaWNvbi1zaXplLXRibCB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi50Z2ktYWRkcmVzcy10eXBlIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udGdpLWJ1dHRvbi1kZW55IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/business-loan/business-loan.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/clients/client-detail/business-loan/business-loan.component.ts ***!
  \********************************************************************************/
/*! exports provided: BusinessLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessLoanComponent", function() { return BusinessLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/deny-loan-application.service */ "./src/app/clients/client-detail/services/deny-loan-application.service.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");








let BusinessLoanComponent = class BusinessLoanComponent {
    // --------------------------------------------------------------
    constructor(router, route, denyLoanApplicationService, denyStateSrv, snackBarSrv) {
        this.router = router;
        this.route = route;
        this.denyLoanApplicationService = denyLoanApplicationService;
        this.denyStateSrv = denyStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
        this.client = null;
        this.buisnessLoan = null;
        this.disabledButtons = false;
        this.displayedColumns = [
            'name',
            'title',
            'ownershipPercentage'
        ];
        // ------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isDenyChanged$ = null;
    }
    ngOnInit() {
        this.client = {
            id: this.clientData.id,
        };
        this.fetchBusinessLoanInfo();
        this.officerDataSource = this.getBusinessLoanOfficerArr();
        // ---------------------
        this.isDenyChanged$ = this.denyStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`\tPIPE: BusinessLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 2000,
                        panelClass: 'mat-snack-bar-container_info'
                    });
                    // Disabled Buttons APPROVE DENY
                    this.disabledButtons = true;
                    /*
                       this.simpleSnackBarRef.afterDismissed()
                       .subscribe(
                         (res: MatSnackBarDismiss) => {
     
                           // this.router.navigateByUrl('/clients');
                         }
                       );
                   */
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    getBusinessLoanOfficerArr() {
        //  const testFeesArr = [
        //     {
        //         "name": "Late Fee 1",
        //         "type": "Late Fee 1",
        //         "method": "As Fixed Rate 1",
        //         "value": null,
        //         "tax": null,
        //         "taxAble": false,
        //         "handling": 0
        //     },
        //     {
        //       "name": "Late Fee 2",
        //       "type": "Late Fee 2",
        //       "method": "As Fixed Rate 2",
        //       "value": null,
        //       "tax": null,
        //       "taxAble": false,
        //       "handling": 1
        //   },
        //   {
        //     "name": "Late Fee 3",
        //     "type": "Late Fee 3",
        //     "method": "As Fixed Rate 3",
        //     "value": null,
        //     "tax": null,
        //     "taxAble": false,
        //     "handling": 0
        //   },
        // ];
        // return testFeesArr;
        // console.log('BusinessLoanAppComponent.getOfficerArr() clientData: %O', this.clientData);
        if (this.buisnessLoan && this.buisnessLoan.officers &&
            Array.isArray(this.buisnessLoan.officers) &&
            this.buisnessLoan.officers.length > 0) {
            return this.buisnessLoan.officers;
        }
        return [];
    }
    fetchBusinessLoanInfo() {
        if (this.clientData.loans != undefined &&
            Array.isArray(this.clientData.loans) &&
            this.clientData.loans.length > 0) {
            this.buisnessLoan = this.clientData.loans.find(loan => {
                return loan.status &&
                    loan.status === 'In Process' &&
                    loan.productName === 'Business Loan';
            });
            if (this.buisnessLoan != undefined) {
                console.log('BusinessLoanAppComponent.onApproveBtnClick() %O', this.buisnessLoan);
            }
        }
    }
    onApproveBtnClick() {
        console.log('BusinessLoanAppComponent.onApproveBtnClick() %O', this.buisnessLoan);
        this.router.navigate([`${this.buisnessLoan.productId}`, 'buisness-loan'], { relativeTo: this.route });
    }
    onDenyBtnClick() {
        // console.log('BusinessLoanAppComponent.onDenyBtnClick() %O', this.buisnessLoan);
        console.log('BusinessLoanAppComponent.onDenyBtnClick() clientId -> %O loan.id -> %O', this.client.id, this.buisnessLoan.id);
        this.denyLoanApplicationService.denyLoanApplication(+this.client.id, +this.buisnessLoan.id, this.denyStateSrv);
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
BusinessLoanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__["DenyLoanApplicationService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], BusinessLoanComponent.prototype, "clientData", void 0);
BusinessLoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-business-loan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./business-loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/business-loan/business-loan.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"], _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__["DenyLoanApplicationService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./business-loan.component.scss */ "./src/app/clients/client-detail/business-loan/business-loan.component.scss")).default]
    })
], BusinessLoanComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.tbl-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.tbl-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.tbl-row td {\n  border-bottom-width: 0;\n}\n\n.tgi-tbl-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n/*\n::ng-deep .tgi-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 0;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtYXNzZXRzL2NsaWVudC1kZXRhaWwtYXNzZXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1hc3NldHMvY2xpZW50LWRldGFpbC1hc3NldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSEY7O0FET0E7RUFDRSxXQUFBO0FDSkY7O0FET0E7RUFDRSxZQUFBO0FDSkY7O0FET0E7RUFDRSxnQkFBQTtBQ0pGOztBRE9BO0VBQ0UsbUJBQUE7QUNKRjs7QURPQTtFQUNFLHNCQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0pGOztBRE9BOzs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLWFzc2V0cy9jbGllbnQtZGV0YWlsLWFzc2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IG1lZGl1bTtcblxuXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7IFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRyLnRibC1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxudHIudGJsLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLnRibC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4udGdpLXRibC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi8qXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1pZGVudGlmaWNhdGlvbi1zaXplIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cbiovIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHIudGJsLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xufVxuXG50ci50Ymwtcm93Om5vdCguc2VsZWN0ZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4udGJsLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi50Z2ktdGJsLWltZy1zaXplIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLypcbjo6bmctZGVlcCAudGdpLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZSAubWF0LWljb24udGdpLWljb24taWRlbnRpZmljYXRpb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuKi8iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ClientDetailAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailAssetsComponent", function() { return ClientDetailAssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientDetailAssetsComponent = class ClientDetailAssetsComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailAssetsComponent.prototype, "clientId", void 0);
ClientDetailAssetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-assets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-assets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.html")).default,
        providers: [],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-assets.component.scss */ "./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.scss")).default]
    })
], ClientDetailAssetsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.tbl-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.tbl-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.tbl-row td {\n  border-bottom-width: 0;\n}\n\n.tgi-tbl-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n/*\n::ng-deep .tgi-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 0;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtYXR0YWNobWVudHMvY2xpZW50LWRldGFpbC1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtYXR0YWNobWVudHMvY2xpZW50LWRldGFpbC1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFHQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURPQTtFQUNFLFdBQUE7QUNKRjs7QURPQTtFQUNFLFlBQUE7QUNKRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FET0E7RUFDRSxtQkFBQTtBQ0pGOztBRE9BO0VBQ0Usc0JBQUE7QUNKRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FET0E7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtYXR0YWNobWVudHMvY2xpZW50LWRldGFpbC1hdHRhY2htZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IG1lZGl1bTtcblxuXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7IFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRyLnRibC1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxudHIudGJsLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLnRibC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4udGdpLXRibC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi8qXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1pZGVudGlmaWNhdGlvbi1zaXplIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cbiovIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHIudGJsLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xufVxuXG50ci50Ymwtcm93Om5vdCguc2VsZWN0ZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4udGJsLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi50Z2ktdGJsLWltZy1zaXplIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLypcbjo6bmctZGVlcCAudGdpLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZSAubWF0LWljb24udGdpLWljb24taWRlbnRpZmljYXRpb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuKi8iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ClientDetailAttachmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailAttachmentsComponent", function() { return ClientDetailAttachmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientDetailAttachmentsComponent = class ClientDetailAttachmentsComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailAttachmentsComponent.prototype, "clientId", void 0);
ClientDetailAttachmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-attachments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-attachments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.html")).default,
        providers: [],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-attachments.component.scss */ "./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.scss")).default]
    })
], ClientDetailAttachmentsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tgi-avatar-container {\n  padding-left: 30px;\n  max-width: 400px;\n}\n\n.flex-container-avatar {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  /*border: 1px solid red;  */\n}\n\n.flex-column {\n  display: flex;\n  margin-left: 5px;\n}\n\n.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n}\n\n.tgi-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-avatar-header-image {\n  /* */\n  background-size: cover;\n}\n\n::ng-deep .tgi-card-header .mat-card-header-text {\n  margin: 0px;\n}\n\n::ng-deep .tgi-card-title.mat-card-title {\n  padding-bottom: 6px;\n  font-size: small;\n}\n\n::ng-deep .tgi-card-header.mat-card-header .mat-card-subtitle:not(:first-child) {\n  margin-top: -16px;\n  /*  line spacing !!!   */\n  font-size: small;\n}\n\n/*\n::ng-deep  .mat-card-actions, .mat-card-content, .mat-card-subtitle {\n  margin-bottom: 8px;\n}\n*/\n\n::ng-deep .mat-card-subtitle {\n  margin-top: 0px;\n}\n\n::ng-deep .mat-icon.tgi-icon-size {\n  font-size: 18px;\n  margin-left: 10px;\n}\n\n::ng-deep .tgi-card-header.mat-card-content > :last-child:not(.mat-card-footer), .mat-card > :last-child:not(.mat-card-footer) {\n  margin-bottom: -30px;\n}\n\n/*  Tabs */\n\n::ng-deep .tgi-tab-group.mat-tab-group {\n  /* not use */\n  margin-top: -40px;\n}\n\n::ng-deep nav.tgi-tab-group {\n  margin-top: -40px;\n}\n\n::ng-deep .tgi-visible .mat-icon.tgi-icon-account-size {\n  font-size: 64px;\n  margin-right: 32px;\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-icon.tgi-icon-account-size {\n  font-size: 64px;\n  margin-right: 32px;\n  opacity: 0;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header img {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header img {\n  opacity: 0;\n}\n\n.tgi-subtitle-contact {\n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: center; */\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtYXZhdGFyL2NsaWVudC1kZXRhaWwtYXZhdGFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1hdmF0YXIvY2xpZW50LWRldGFpbC1hdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsMkJBQUE7QUNGRjs7QURLQTtFQUVFLGFBQUE7RUFFQSxnQkFBQTtBQ0pGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDSEY7O0FET0E7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQ0pIOztBRE9BO0VBQ0MsSUFBQTtFQUFPLHNCQUFBO0FDSFI7O0FETUE7RUFDRyxXQUFBO0FDSEg7O0FETUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FET0E7RUFDRSxpQkFBQTtFQUFxQix3QkFBQTtFQUNyQixnQkFBQTtBQ0hGOztBREtBOzs7O0NBQUE7O0FBS0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLG9CQUFBO0FDRkY7O0FES0EsVUFBQTs7QUFDQTtFQUEyQyxZQUFBO0VBQ3pDLGlCQUFBO0FDREY7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0RGOztBRElBLHlCQUFBOztBQUNBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFFQSw2QkFBQTtFQUNBLHVCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1hdmF0YXIvY2xpZW50LWRldGFpbC1hdmF0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50Z2ktYXZhdGFyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMzBweDsgXG4gIG1heC13aWR0aDogNDAwcHg7IFxufVxuXG4uZmxleC1jb250YWluZXItYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7IFxuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAvKmJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbiB7XG5cbiAgZGlzcGxheTogZmxleDtcblxuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG59XG5cblxuLnRnaS1pbWctc2l6ZSB7XG4gICB3aWR0aDogNjRweDtcbiAgIGhlaWdodDogNjRweDtcbn1cblxuLnRnaS1hdmF0YXItaGVhZGVyLWltYWdlIHtcbiAvKiAqLyAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS1jYXJkLWhlYWRlciAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICAgbWFyZ2luOiAwcHg7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktY2FyZC10aXRsZS5tYXQtY2FyZC10aXRsZSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cblxuOjpuZy1kZWVwICAudGdpLWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGU6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAtMTZweDsgICAvKiAgbGluZSBzcGFjaW5nICEhISAgICovXG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG4vKlxuOjpuZy1kZWVwICAubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLWNvbnRlbnQsIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbiovXG46Om5nLWRlZXAgIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktaWNvbi1zaXplICAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG46Om5nLWRlZXAgIC50Z2ktY2FyZC1oZWFkZXIubWF0LWNhcmQtY29udGVudD46bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3RlciksIC5tYXQtY2FyZD46bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3Rlcikge1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDsgXG59XG5cbi8qICBUYWJzICovXG46Om5nLWRlZXAgIC50Z2ktdGFiLWdyb3VwLm1hdC10YWItZ3JvdXAgeyAgLyogbm90IHVzZSAqL1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbn1cblxuOjpuZy1kZWVwICBuYXYudGdpLXRhYi1ncm91cCB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1hY2NvdW50LXNpemUgICB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAxLjA7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWFjY291bnQtc2l6ZSAgIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDAuMDtcbn1cblxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cbjo6bmctZGVlcCAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxLjA7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDAuMDsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxLjA7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDAuMDsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciBpbWcge1xuICBvcGFjaXR5OiAxLjA7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgIGltZyB7XG4gIG9wYWNpdHk6IDAuMDsgXG59XG5cbi50Z2ktc3VidGl0bGUtY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgXG5cbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufSIsIi50Z2ktYXZhdGFyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyLWF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG59XG5cbi50Z2ktaW1nLXNpemUge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4udGdpLWF2YXRhci1oZWFkZXItaW1hZ2Uge1xuICAvKiAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG46Om5nLWRlZXAgLnRnaS1jYXJkLWhlYWRlciAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBtYXJnaW46IDBweDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktY2FyZC10aXRsZS5tYXQtY2FyZC10aXRsZSB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbjo6bmctZGVlcCAudGdpLWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGU6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tdG9wOiAtMTZweDtcbiAgLyogIGxpbmUgc3BhY2luZyAhISEgICAqL1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4vKlxuOjpuZy1kZWVwICAubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLWNvbnRlbnQsIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbiovXG46Om5nLWRlZXAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1pY29uLnRnaS1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1jYXJkLWhlYWRlci5tYXQtY2FyZC1jb250ZW50ID4gOmxhc3QtY2hpbGQ6bm90KC5tYXQtY2FyZC1mb290ZXIpLCAubWF0LWNhcmQgPiA6bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3Rlcikge1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbn1cblxuLyogIFRhYnMgKi9cbjo6bmctZGVlcCAudGdpLXRhYi1ncm91cC5tYXQtdGFiLWdyb3VwIHtcbiAgLyogbm90IHVzZSAqL1xuICBtYXJnaW4tdG9wOiAtNDBweDtcbn1cblxuOjpuZy1kZWVwIG5hdi50Z2ktdGFiLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG5cbjo6bmctZGVlcCAudGdpLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWFjY291bnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1hY2NvdW50LXNpemUge1xuICBmb250LXNpemU6IDY0cHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIGltZyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIGltZyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50Z2ktc3VidGl0bGUtY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ClientDetailAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailAvatarComponent", function() { return ClientDetailAvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientDetailAvatarComponent = class ClientDetailAvatarComponent {
    constructor() {
        this.isVisible = false;
    }
    ngOnInit() {
    }
    getFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }
    getPhoneNumber(value) {
        if (!value || value === '') {
            return '-';
        }
        return value;
    }
    getEmail(value) {
        if (!value || value === '') {
            return '-';
        }
        return value;
    }
    isExist(valie) {
        if (!valie || valie === '') {
            return false;
        }
        return true;
    }
    isProfileImage(profileImage) {
        if (!profileImage || profileImage === '') {
            return false;
        }
        return true;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    ngOnDestroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailAvatarComponent.prototype, "isVisible", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailAvatarComponent.prototype, "clientId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailAvatarComponent.prototype, "firstName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailAvatarComponent.prototype, "lastName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailAvatarComponent.prototype, "workPhoneNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailAvatarComponent.prototype, "emailAddress", void 0);
ClientDetailAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-avatar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-avatar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.html")).default,
        providers: [],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-avatar.component.scss */ "./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.scss")).default]
    })
], ClientDetailAvatarComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-documemts.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-documemts.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLWRvY3VtZW10cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-documemts.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-documemts.component.ts ***!
  \****************************************************************************/
/*! exports provided: ClientDetailDocumemtsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailDocumemtsComponent", function() { return ClientDetailDocumemtsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ClientDetailDocumemtsComponent = class ClientDetailDocumemtsComponent {
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activatedRouteParentParams$ = null;
        this.client = null;
    }
    ngOnInit() {
        this.activatedRouteParentParams$ = this.activatedRoute.parent.params
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((pm) => pm.id), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((clientId) => {
            console.log('ClientDocumemtsComponent activatedRoute.parent.params -> %o', clientId);
            this.clientId = clientId;
        }));
    }
    ngOnDestroy() {
        /*
        if (this.simpleSnackBarRef != null) {
          this.simpleSnackBarRef.dismiss();
          this.simpleSnackBarRef = null;
        }
        */
    }
};
ClientDetailDocumemtsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ClientDetailDocumemtsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-documemts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-documemts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-documemts.component.html")).default,
        providers: [
        // ClientDocumemtsStateService
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-documemts.component.scss */ "./src/app/clients/client-detail/client-detail-documemts.component.scss")).default]
    })
], ClientDetailDocumemtsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.tbl-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.tbl-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.tbl-row td {\n  border-bottom-width: 0;\n}\n\n.tgi-tbl-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n/*\n::ng-deep .tgi-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 0;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtZW1wbG95bWVudC9jbGllbnQtZGV0YWlsLWVtcGxveW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLWVtcGxveW1lbnQvY2xpZW50LWRldGFpbC1lbXBsb3ltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUdBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE9BO0VBQ0UsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtBQ0pGOztBRE9BO0VBQ0UsZ0JBQUE7QUNKRjs7QURPQTtFQUNFLG1CQUFBO0FDSkY7O0FET0E7RUFDRSxzQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTs7Ozs7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1lbXBsb3ltZW50L2NsaWVudC1kZXRhaWwtZW1wbG95bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IG1lZGl1bTtcblxuXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7IFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbnRyLnRibC1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxudHIudGJsLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLnRibC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4udGdpLXRibC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi8qXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1pZGVudGlmaWNhdGlvbi1zaXplIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cbiovIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHIudGJsLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xufVxuXG50ci50Ymwtcm93Om5vdCguc2VsZWN0ZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4udGJsLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi50Z2ktdGJsLWltZy1zaXplIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLypcbjo6bmctZGVlcCAudGdpLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZSAubWF0LWljb24udGdpLWljb24taWRlbnRpZmljYXRpb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAwO1xufVxuKi8iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ClientDetailEmploymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailEmploymentComponent", function() { return ClientDetailEmploymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientDetailEmploymentComponent = class ClientDetailEmploymentComponent {
    constructor() {
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailEmploymentComponent.prototype, "clientId", void 0);
ClientDetailEmploymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-employment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-employment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.html")).default,
        providers: [],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-employment.component.scss */ "./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.scss")).default]
    })
], ClientDetailEmploymentComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-financials.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-financials.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------------- */\n.tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n.tgi-mat-card-title-score {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n.tgi-button-margin {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtZmluYW5jaWFscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtZmluYW5jaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxzQkFBQTtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsV0FBQTtFQUNBLDRCQUFBO0FDSEY7QURNQTtFQUVFLGFBQUE7RUFFQSw2QkFBQTtBQ0xGO0FET0E7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFFQSw4QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtBQ1JGO0FEV0E7RUFFRSw2QkFBQTtFQUNBLFdBQUE7QUNURjtBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ1RGO0FEV0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNSRjtBRFdBO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtBQ1ZGO0FEYUE7RUFDRSxpQkFBQTtBQ1ZGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtZmluYW5jaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG4uZmxleC1jb2x1bW4tcmlnaHQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBtYXJnaW4tbGVmdDogNXB4O1xuXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcblxuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtaXRlbSB7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLXRpdGxlLXNjb3JlIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIC8qIHdpZHRoOiBhdXRvOyAgKi9cbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtY2FyZC10aXRsZS1zY29yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-financials.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-financials.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClientDetailFinancialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailFinancialsComponent", function() { return ClientDetailFinancialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");









let ClientDetailFinancialsComponent = class ClientDetailFinancialsComponent {
    constructor(activatedRoute, router, userSrv, clientDetailOverviewStateSrv, clientDetailOverviewService, snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userSrv = userSrv;
        this.clientDetailOverviewStateSrv = clientDetailOverviewStateSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        // public isVisible = false;  /* visible after loaded */
        this.currentUser$ = null;
        this.currentClientDetail$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isClientDetailOverviewChanged$ = null;
        // --------------------------------------------------------------
        // protected stateIsEnd = '';
        // protected stateOp = '';
        // ----------------
        this.activatedRouteParentParams$ = null;
        // public clientId: string;
        this.clientDetailOverview = null; //  clientOverview
    }
    ngOnInit() {
        // this.activatedRouteParentParams$ = this.activatedRoute.parent.params
        // .pipe(
        //   map((pm: Params) => pm.id),
        //   tap((clientId: string) => {
        //       console.log('ClientDetailOverviewComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', clientId);
        //       this.clientId = clientId;
        //       // this.isVisible = false;
        //       // this.clientDetailOverviewService.loadClientDetailOverview(this.clientDetailOverviewStateSrv, this.clientId);
        //       // this.clientDetailOverviewService.loadClientDetail(this.clientDetailOverviewStateSrv, this.clientId);
        //     })
        // );
        // ---------------------
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                // this.clientDetailOverviewService.clearClientDetailOverview();
                this.clientDetailOverviewService.clearClientDetail();
            }
        }));
        // ---------------------
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetail$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((client) => {
            if (!this.clientDetailOverviewService.isClientDetailNotEmpty(client)) {
                return null;
            }
            return client;
        }));
        // ---------------------
        this.isClientDetailOverviewChanged$ = this.clientDetailOverviewStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            // this.stateIsEnd += ` ${r.isEnd};`;
            // this.stateOp += ` ${r.op};`;
            // this.isVisible = false;
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].LOAD) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'LOAD', isEnd: false, opResult: 'NOSET' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].ERROR) {
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].SUCCESS) {
                    // this.isVisible = true; // netesa-
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].DELETE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'DELETE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Client Detail Overview has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    // ---------------------
    getFullName(firstName, lastName, middleName) {
        let fullName = firstName + ' ' + lastName;
        if (middleName) {
            fullName = fullName + ' ' + middleName.trim();
        }
        return fullName;
    }
    getPhoneNumber(phoneNumber) {
        return phoneNumber;
    }
    getEmail(email) {
        return email;
    }
    isProfileImage(profileImage) {
        if (profileImage) {
            return true;
        }
        return false;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    getAddressTypes(addressTypes) {
        let types = [];
        for (let i = 0; i < addressTypes.length; i++) {
            types[i] = addressTypes[i];
            if (i < (addressTypes.length - 1)) {
                types[i] += ',';
            }
        }
        return types;
    }
    onGetCreditScore() {
        console.log('ClientDetailOverviewComponent.onGetCreditScore() %O');
        // this.router.navigateByUrl('/');
        this.router.navigate(['creditscoreinquiry'], { relativeTo: this.activatedRoute });
    }
    onGetBankStatement() {
        // ???
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
ClientDetailFinancialsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_4__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
ClientDetailFinancialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-financials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-financials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-financials.component.html")).default,
        providers: [
        // ClientFinancialsStateService
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-financials.component.scss */ "./src/app/clients/client-detail/client-detail-financials.component.scss")).default]
    })
], ClientDetailFinancialsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\n/* ??? */\n\ntr.tbl-row:not(.selected-row):hover {\n  background: #777;\n}\n\n/* ??? */\n\ntr.tbl-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.tbl-row td {\n  border-bottom-width: 0;\n}\n\n.tgi-tbl-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n::ng-deep .tgi-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-icon.tgi-icon-identification-size {\n  font-size: 32px;\n  margin-right: 32px;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtaWRlbnRpZmljYXRpb25zL2NsaWVudC1kZXRhaWwtaWRlbnRpZmljYXRpb25zLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1pZGVudGlmaWNhdGlvbnMvY2xpZW50LWRldGFpbC1pZGVudGlmaWNhdGlvbnMtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURHQSxRQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNBRjs7QURFQSxRQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtaWRlbnRpZmljYXRpb25zL2NsaWVudC1kZXRhaWwtaWRlbnRpZmljYXRpb25zLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlOyBcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogPz8/ICovXG50ci50Ymwtcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG59XG4vKiA/Pz8gKi9cbnRyLnRibC1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi50Ymwtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLnRnaS10YmwtaW1nLXNpemUge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1pZGVudGlmaWNhdGlvbi1zaXplIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cbiIsIjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qID8/PyAqL1xudHIudGJsLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNzc3O1xufVxuXG4vKiA/Pz8gKi9cbnRyLnRibC1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi50Ymwtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLnRnaS10YmwtaW1nLXNpemUge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1pZGVudGlmaWNhdGlvbi1zaXplIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWlkZW50aWZpY2F0aW9uLXNpemUge1xuICBmb250LXNpemU6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ClientDetailIdentificationsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailIdentificationsTableComponent", function() { return ClientDetailIdentificationsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let ClientDetailIdentificationsTableComponent = class ClientDetailIdentificationsTableComponent {
    // @Output('render-identifications') renderClientDetailIdentificationChange = new EventEmitter<ClientDetailIdentificationInterface[]>();
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.isVisible = true;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.currentClientDetailIdentification$ = null;
        this.displayedColumns = [
            'id',
            'imageUrl',
            'type',
            'number',
            'issuingAuthority',
            'issueDate',
            'expirationDate' // table 5           "2040-09-04"
        ];
        this.renderClientDetailIdentifications$ = null;
        this.identificationsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        // this.identificationsDataSource.sort = this.sort;
        /*
        this.identificationsDataSource.filterPredicate = (data, filter) => {
           console.log('ClientDetailIdentificationsTableComponent identificationsDataSource.filterPredicate() data -> %O filter=%s',
                         data, filter);
    
          // ??? mak
           const dataStr = data.status.toLowerCase().trim();
          return dataStr.indexOf(filter) != -1;
        }
       */
        console.log('\tPIPE: ClientDetailIdentificationsTableComponent.constructor() identificationsData -> %O', this.identificationsData);
    }
    ngOnInit() {
        console.log('\tPIPE: ClientDetailIdentificationsTableComponent.OnInit() identificationsData -> %O', this.identificationsData);
        this.identificationsDataSource.data = this.identificationsData;
        this.identificationsDataSource.sort = this.sort;
        // console.log('\tPIPE: ClientDetailIdentificationsTableComponent.OnInit() dataSource.data -> %O', this.identificationsDataSource.data);
        /*
            this.renderClientDetailIdentifications$ = this.identificationsDataSource.connect()
              .asObservable()
              .pipe(
                tap((identifications: ClientDetailIdentificationInterface[]) => {
                   // console.log('\tPIPE: ClientDetailIdentificationsTableComponent.OnInit() renderClientDetailIdentifications -> %O', identifications);
                   // console.log('\tPIPE: ClientDetailIdentificationsTableComponent.OnInit() renderClientDetailIdentifications$ identificationsData -> %O', this.identificationsData);
        
                 // this.renderClientDetailIdentificationChange.emit(identifications);
                })
              );
           */
    }
    onTblRowClick(identification) {
        console.log(`\tPIPE: ClientTableComponent.onTblRowClick() identification:%O`, identification);
        const identificationId = identification.id;
        this.router.navigate(['identifications', identificationId], { relativeTo: this.route });
    }
    getValue(value) {
        if (!value || value === '') {
            value = '-';
        }
        return value;
    }
    getValueBaks(value) {
        if (!value || value === '') {
            return '-';
        }
        return '$ ' + value;
    }
    getValueDate(value) {
        // console.log('getValueDate()  value -> %O', value);
        if (!value || value === '') {
            return value = '-';
        }
        let date;
        try {
            var parts_0 = value.split('T');
            var parts = parts_0[0].split('-');
            // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
            // January - 0, February - 1, etc.   
            // '2019-31-12'
            // date = new Date(parts[0], parts[2] - 1, parts[1]);  // (YYYY-DD-MM)
            // '2019-12-31'   '2019-12-24T00:00:00.000+0000'
            date = new Date(parts[0], parts[1] - 1, parts[2]); //  (YYYY-MM-DD)
            // The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
            //date = new Date('2019-12-31');  // "2019-12-24T00:00:00.000+0000"   // "2015-03-25" (The International Standard)
            // Examples of ISO format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS.
            // var today = new Date('05 October 2011 14:48 UTC');  // http://daks.me/js_date_formats.php
            // today.toISOString()
            /*
            https://momentjs.com/
            let dt = moment("02-01-2019", "MM-DD-YYYY");
            console.log(dt.fromNow()+' |'+dt.format('LL'))
            */
            // console.log('getValueDate()  date -> %O', date);
        }
        catch (ex) {
            // console.log('getValueDate()  ex -> %O', ex);
            return date = 'Exeption: ' + ex.message;
        }
        if (isNaN(date) || isNaN(date.getFullYear()) || isNaN(date.getMonth()) || isNaN(date.getDate())) {
            return 'NaN error';
        }
        const month = date.getMonth() + 1;
        let month_s = '' + month;
        if (month <= 9) {
            month_s = '0' + month;
        }
        let date_s = '' + date.getDate();
        if (date.getDate() <= 9) {
            date_s = '0' + date.getDate();
        }
        return `${date.getFullYear()}-${month_s}-${date_s}`; // (YYYY-MM-DD)
    }
    getImageUrl(value) {
        if (!value || value === '') {
            value = '-';
        }
        return `${this.apiUrl}/${value}`;
    }
    isImageUrl(value) {
        if (!value || value === '') {
            return false;
        }
        return true;
    }
    deleteRow(id) {
        console.log('ClientDetailIdentificationsTableComponent deleteRow() id -> %O', id);
    }
    editRow(id) {
        console.log('ClientDetailIdentificationsTableComponent editRow() id -> %O', id);
    }
};
ClientDetailIdentificationsTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailIdentificationsTableComponent.prototype, "identificationsData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: true })
], ClientDetailIdentificationsTableComponent.prototype, "matTbl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], ClientDetailIdentificationsTableComponent.prototype, "sort", void 0);
ClientDetailIdentificationsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-identifications-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-identifications-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-identifications-table.component.scss */ "./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.scss")).default]
    })
], ClientDetailIdentificationsTableComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.loan-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.loan-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.loan-row td {\n  border-bottom-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtbG9hbi1hcHAvY2xpZW50LWRldGFpbC1sb2FuLWFwcC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtbG9hbi1hcHAvY2xpZW50LWRldGFpbC1sb2FuLWFwcC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDSSxXQUFBO0FDTEo7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxnQkFBQTtBQ0xKOztBRFFFO0VBQ0UsbUJBQUE7QUNMSjs7QURRRTtFQUNFLHNCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1sb2FuLWFwcC9jbGllbnQtZGV0YWlsLWxvYW4tYXBwLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuXG5cbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDsgXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgdHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xuICB9XG4gIFxuICB0ci5sb2FuLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB9XG4gIFxuICAubG9hbi1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiBcbiAgIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxudHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5sb2FuLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ClientDetailLoanAppTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailLoanAppTableComponent", function() { return ClientDetailLoanAppTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let ClientDetailLoanAppTableComponent = class ClientDetailLoanAppTableComponent {
    // @Output('render-loans') renderClientDetailLoanChange = new EventEmitter<ClientDetailLoanInterface[]>();
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.isVisible = true;
        this.currentClientDetailLoan$ = null;
        this.displayedColumns = [
            'id',
            'loanStartDate',
            'loanAmount',
            'feesDue',
            //'penaltyDue',            // table  3
            'nextPayment',
            'status' // table  5
            // 'productName',
            // 'term',
            // 'loanPurpose',
            // 'interestRate',
            // 'maturityType',
            // 'firstRepaymentDate',
            // 'disbursementDate',
            // 'maturityDate',
            // 'nextPaymentDate',
            // 'nextPaymentAmount'
        ];
        this.renderClientDetailLoans$ = null;
        this.loansDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        // this.loansDataSource.sort = this.sort;
        /* */
        this.loansDataSource.filterPredicate = (data, filter) => {
            console.log('ClientDetailLoansTableComponent loansDataSource.filterPredicate() data -> %O filter=%s', data, filter);
            // ??? mak
            const dataStr = data.status.toLowerCase().trim();
            return dataStr.indexOf(filter) != -1;
        };
        console.log('\tPIPE: ClientDetailLoansTableComponent.constructor() loansData -> %O', this.loansData);
    }
    ngOnInit() {
        console.log('\tPIPE: ClientDetailLoansTableComponent.OnInit() loansData -> %O', this.loansData);
        this.loansDataSource.data = this.loansData;
        this.loansDataSource.sort = this.sort;
        // console.log('\tPIPE: ClientDetailLoansTableComponent.OnInit() dataSource.data -> %O', this.loansDataSource.data);
        /*
            this.renderClientDetailLoans$ = this.loansDataSource.connect()
              .asObservable()
              .pipe(
                tap((loans: ClientDetailLoanInterface[]) => {
                   // console.log('\tPIPE: ClientDetailLoansTableComponent.OnInit() renderClientDetailLoans -> %O', loans);
                   // console.log('\tPIPE: ClientDetailLoansTableComponent.OnInit() renderClientDetailLoans$ loansData -> %O', this.loansData);
        
                 // this.renderClientDetailLoanChange.emit(loans);
                })
              );
           */
    }
    onTblRowClick(loan) {
        console.log(`\tPIPE: ClientDetailLoansTableComponent.OnInit() clicked Client:%O`, loan);
        // this.router.navigate([`/loan`, loan.id, 'overview']);    
        // this.router.navigate([loan.id, 'overview'], {relativeTo: this.route});
    }
    getValue(value) {
        if (!value || value === '') {
            value = '-';
        }
        return value;
    }
    getValueBaks(value) {
        if (!value || value === '') {
            return '-';
        }
        return '$ ' + value;
    }
    getValueDate(value) {
        // console.log('getValueDate()  value -> %O', value);
        if (!value || value === '') {
            return value = '-';
        }
        let date;
        try {
            var parts_0 = value.split('T');
            var parts = parts_0[0].split('-');
            // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
            // January - 0, February - 1, etc.   
            // '2019-31-12'
            // date = new Date(parts[0], parts[2] - 1, parts[1]);  // (YYYY-DD-MM)
            // '2019-12-31'   '2019-12-24T00:00:00.000+0000'
            date = new Date(parts[0], parts[1] - 1, parts[2]); //  (YYYY-MM-DD)
            // The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
            //date = new Date('2019-12-31');  // "2019-12-24T00:00:00.000+0000"   // "2015-03-25" (The International Standard)
            // Examples of ISO format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS.
            // var today = new Date('05 October 2011 14:48 UTC');  // http://daks.me/js_date_formats.php
            // today.toISOString()
            /*
            https://momentjs.com/
            let dt = moment("02-01-2019", "MM-DD-YYYY");
            console.log(dt.fromNow()+' |'+dt.format('LL'))
            */
            // console.log('getValueDate()  date -> %O', date);
        }
        catch (ex) {
            // console.log('getValueDate()  ex -> %O', ex);
            return date = 'Exeption: ' + ex.message;
        }
        if (isNaN(date) || isNaN(date.getFullYear()) || isNaN(date.getMonth()) || isNaN(date.getDate())) {
            return 'NaN error';
        }
        return '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(); // (YYYY-MM-DD)
    }
    drawFund(id) {
        console.log('ClientDetailLoansTableComponent drawFund() id -> %O', id);
    }
};
ClientDetailLoanAppTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailLoanAppTableComponent.prototype, "loansData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: true })
], ClientDetailLoanAppTableComponent.prototype, "matTbl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], ClientDetailLoanAppTableComponent.prototype, "sort", void 0);
ClientDetailLoanAppTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-loan-app-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-loan-app-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-loan-app-table.component.scss */ "./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.scss")).default]
    })
], ClientDetailLoanAppTableComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-loan-applications.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-loan-applications.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------------- */\n.tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n.tgi-mat-card-title-score {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n.tgi-button-margin {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtbG9hbi1hcHBsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLWxvYW4tYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLHNCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNIRjtBRE1BO0VBRUUsYUFBQTtFQUVBLDZCQUFBO0FDTEY7QURPQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FDUkY7QURXQTtFQUVFLDZCQUFBO0VBQ0EsV0FBQTtBQ1RGO0FEWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDVEY7QURXQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ1JGO0FEV0E7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0FDVkY7QURhQTtFQUNFLGlCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1sb2FuLWFwcGxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG4uZmxleC1jb2x1bW4tcmlnaHQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBtYXJnaW4tbGVmdDogNXB4O1xuXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcblxuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtaXRlbSB7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLXRpdGxlLXNjb3JlIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1pdGVtIHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWNhcmQtdGl0bGUtc2NvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4udGdpLWJ1dHRvbi1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-loan-applications.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-loan-applications.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClientDetailLoanApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailLoanApplicationsComponent", function() { return ClientDetailLoanApplicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");









let ClientDetailLoanApplicationsComponent = class ClientDetailLoanApplicationsComponent {
    constructor(activatedRoute, router, userSrv, clientDetailOverviewStateSrv, clientDetailOverviewService, snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userSrv = userSrv;
        this.clientDetailOverviewStateSrv = clientDetailOverviewStateSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        // public isVisible = false;  /* visible after loaded */
        this.currentUser$ = null;
        this.currentClientDetail$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isClientDetailOverviewChanged$ = null;
        // --------------------------------------------------------------
        // protected stateIsEnd = '';
        // protected stateOp = '';
        // ----------------
        this.activatedRouteParentParams$ = null;
        // public clientId: string;
        this.clientDetailOverview = null; //  clientOverview
    }
    ngOnInit() {
        // this.activatedRouteParentParams$ = this.activatedRoute.parent.params
        // .pipe(
        //   map((pm: Params) => pm.id),
        //   tap((clientId: string) => {
        //       console.log('ClientDetailOverviewComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', clientId);
        //       this.clientId = clientId;
        1;
        //       // this.clientDetailOverviewService.loadClientDetail(this.clientDetailOverviewStateSrv, this.clientId);
        //     })
        // );
        // ---------------------
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                // this.clientDetailOverviewService.clearClientDetailOverview();
                this.clientDetailOverviewService.clearClientDetail();
            }
        }));
        // ---------------------
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetail$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((client) => {
            if (!this.clientDetailOverviewService.isClientDetailNotEmpty(client)) {
                return null;
            }
            return client;
        }));
        // ---------------------
        this.isClientDetailOverviewChanged$ = this.clientDetailOverviewStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            // this.stateIsEnd += ` ${r.isEnd};`;
            // this.stateOp += ` ${r.op};`;
            // this.isVisible = false;
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].LOAD) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'LOAD', isEnd: false, opResult: 'NOSET' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].ERROR) {
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].SUCCESS) {
                    // this.isVisible = true; // netesa-
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].DELETE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'DELETE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Client Detail Overview has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    // ---------------------
    getFullName(firstName, lastName, middleName) {
        let fullName = firstName + ' ' + lastName;
        if (middleName) {
            fullName = fullName + ' ' + middleName.trim();
        }
        return fullName;
    }
    getPhoneNumber(phoneNumber) {
        return phoneNumber;
    }
    getEmail(email) {
        return email;
    }
    isProfileImage(profileImage) {
        if (profileImage) {
            return true;
        }
        return false;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    getAddressTypes(addressTypes) {
        let types = [];
        for (let i = 0; i < addressTypes.length; i++) {
            types[i] = addressTypes[i];
            if (i < (addressTypes.length - 1)) {
                types[i] += ',';
            }
        }
        return types;
    }
    onGetCreditScore() {
        console.log('ClientDetailOverviewComponent.onGetCreditScore() %O');
        // this.router.navigateByUrl('/');
        this.router.navigate(['creditscoreinquiry'], { relativeTo: this.activatedRoute });
    }
    onGetBankStatement() {
        // ???
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
ClientDetailLoanApplicationsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_4__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
ClientDetailLoanApplicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-loan-applications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-loan-applications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loan-applications.component.html")).default,
        providers: [
        // ClientLoansStateService
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-loan-applications.component.scss */ "./src/app/clients/client-detail/client-detail-loan-applications.component.scss")).default]
    })
], ClientDetailLoanApplicationsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-loans.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-loans.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------------- */\n.tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n.tgi-mat-card-title-score {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n.tgi-button-margin {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtbG9hbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLWxvYW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLHNCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNIRjtBRE1BO0VBRUUsYUFBQTtFQUVBLDZCQUFBO0FDTEY7QURPQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FDUkY7QURXQTtFQUVFLDZCQUFBO0VBQ0EsV0FBQTtBQ1RGO0FEWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDVEY7QURXQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ1JGO0FEV0E7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0FDVkY7QURhQTtFQUNFLGlCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1sb2Fucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG4uZmxleC1jb2x1bW4tcmlnaHQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBtYXJnaW4tbGVmdDogNXB4O1xuXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcblxuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtaXRlbSB7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLXRpdGxlLXNjb3JlIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuIiwiLyogLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1pdGVtIHtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWNhcmQtdGl0bGUtc2NvcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4udGdpLWJ1dHRvbi1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-loans.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-loans.component.ts ***!
  \************************************************************************/
/*! exports provided: ClientDetailLoansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailLoansComponent", function() { return ClientDetailLoansComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");









let ClientDetailLoansComponent = class ClientDetailLoansComponent {
    constructor(activatedRoute, router, userSrv, clientDetailOverviewStateSrv, clientDetailOverviewService, snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userSrv = userSrv;
        this.clientDetailOverviewStateSrv = clientDetailOverviewStateSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        // public isVisible = false;  /* visible after loaded */
        this.currentUser$ = null;
        this.currentClientDetail$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isClientDetailOverviewChanged$ = null;
        // --------------------------------------------------------------
        // protected stateIsEnd = '';
        // protected stateOp = '';
        // ----------------
        this.activatedRouteParentParams$ = null;
        // public clientId: string;
        this.clientDetailOverview = null; //  clientOverview
    }
    ngOnInit() {
        // this.activatedRouteParentParams$ = this.activatedRoute.parent.params
        // .pipe(
        //   map((pm: Params) => pm.id),
        //   tap((clientId: string) => {
        //       console.log('ClientDetailOverviewComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', clientId);
        //       this.clientId = clientId;
        //       // this.isVisible = false;
        //       // this.clientDetailOverviewService.loadClientDetailOverview(this.clientDetailOverviewStateSrv, this.clientId);
        //       // this.clientDetailOverviewService.loadClientDetail(this.clientDetailOverviewStateSrv, this.clientId);
        //     })
        // );
        // ---------------------
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                // this.clientDetailOverviewService.clearClientDetailOverview();
                this.clientDetailOverviewService.clearClientDetail();
            }
        }));
        // ---------------------
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetail$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((client) => {
            if (!this.clientDetailOverviewService.isClientDetailNotEmpty(client)) {
                return null;
            }
            return client;
        }));
        // ---------------------
        this.isClientDetailOverviewChanged$ = this.clientDetailOverviewStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            // this.stateIsEnd += ` ${r.isEnd};`;
            // this.stateOp += ` ${r.op};`;
            // this.isVisible = false;
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].LOAD) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'LOAD', isEnd: false, opResult: 'NOSET' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].ERROR) {
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].SUCCESS) {
                    // this.isVisible = true; // netesa-
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityStateEnum"].DELETE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'DELETE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_3__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Client Detail Overview has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    // ---------------------
    getFullName(firstName, lastName, middleName) {
        let fullName = firstName + ' ' + lastName;
        if (middleName) {
            fullName = fullName + ' ' + middleName.trim();
        }
        return fullName;
    }
    getPhoneNumber(phoneNumber) {
        return phoneNumber;
    }
    getEmail(email) {
        return email;
    }
    isProfileImage(profileImage) {
        if (profileImage) {
            return true;
        }
        return false;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    getAddressTypes(addressTypes) {
        let types = [];
        for (let i = 0; i < addressTypes.length; i++) {
            types[i] = addressTypes[i];
            if (i < (addressTypes.length - 1)) {
                types[i] += ',';
            }
        }
        return types;
    }
    onGetCreditScore() {
        console.log('ClientDetailOverviewComponent.onGetCreditScore() %O');
        // this.router.navigateByUrl('/');
        this.router.navigate(['creditscoreinquiry'], { relativeTo: this.activatedRoute });
    }
    onGetBankStatement() {
        // ???
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
ClientDetailLoansComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_4__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
];
ClientDetailLoansComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-loans',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-loans.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loans.component.html")).default,
        providers: [
        // ClientLoansStateService
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-loans.component.scss */ "./src/app/clients/client-detail/client-detail-loans.component.scss")).default]
    })
], ClientDetailLoansComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.loan-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.loan-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.loan-row td {\n  border-bottom-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtbG9hbnMvY2xpZW50LWRldGFpbC1sb2Fucy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtbG9hbnMvY2xpZW50LWRldGFpbC1sb2Fucy10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FEUUE7RUFDSSxXQUFBO0FDTEo7O0FEUUU7RUFDRSxZQUFBO0FDTEo7O0FEUUU7RUFDRSxnQkFBQTtBQ0xKOztBRFFFO0VBQ0UsbUJBQUE7QUNMSjs7QURRRTtFQUNFLHNCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1sb2Fucy9jbGllbnQtZGV0YWlsLWxvYW5zLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDsgXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuXG5cbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDsgXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgdHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xuICB9XG4gIFxuICB0ci5sb2FuLXJvdzpub3QoLnNlbGVjdGVkLXJvdyk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICB9XG4gIFxuICAubG9hbi1yb3cgdGQge1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIH1cbiBcbiAgIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxudHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5sb2FuLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ClientDetailLoansTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailLoansTableComponent", function() { return ClientDetailLoansTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");





let ClientDetailLoansTableComponent = class ClientDetailLoansTableComponent {
    // @Output('render-loans') renderClientDetailLoanChange = new EventEmitter<ClientDetailLoanInterface[]>();
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.isVisible = true;
        this.currentClientDetailLoan$ = null;
        this.displayedColumns = [
            'id',
            'loanStartDate',
            'loanAmount',
            'feesDue',
            //'penaltyDue',            // table  3
            'nextPayment',
            'status',
            'drawFund'
            // 'productName',
            // 'term',
            // 'loanPurpose',
            // 'interestRate',
            // 'maturityType',
            // 'firstRepaymentDate',
            // 'disbursementDate',
            // 'maturityDate',
            // 'nextPaymentDate',
            // 'nextPaymentAmount'
        ];
        this.renderClientDetailLoans$ = null;
        this.loansDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        // this.loansDataSource.sort = this.sort;
        /* */
        this.loansDataSource.filterPredicate = (data, filter) => {
            console.log('ClientDetailLoansTableComponent loansDataSource.filterPredicate() data -> %O filter=%s', data, filter);
            // ??? mak
            const dataStr = data.status.toLowerCase().trim();
            return dataStr.indexOf(filter) != -1;
        };
        console.log('\tPIPE: ClientDetailLoansTableComponent.constructor() loansData -> %O', this.loansData);
    }
    ngOnInit() {
        console.log('\tPIPE: ClientDetailLoansTableComponent.OnInit() loansData -> %O', this.loansData);
        this.loansDataSource.data = this.loansData;
        this.loansDataSource.sort = this.sort;
        // console.log('\tPIPE: ClientDetailLoansTableComponent.OnInit() dataSource.data -> %O', this.loansDataSource.data);
        /*
            this.renderClientDetailLoans$ = this.loansDataSource.connect()
              .asObservable()
              .pipe(
                tap((loans: ClientDetailLoanInterface[]) => {
                   // console.log('\tPIPE: ClientDetailLoansTableComponent.OnInit() renderClientDetailLoans -> %O', loans);
                   // console.log('\tPIPE: ClientDetailLoansTableComponent.OnInit() renderClientDetailLoans$ loansData -> %O', this.loansData);
        
                 // this.renderClientDetailLoanChange.emit(loans);
                })
              );
           */
    }
    onTblRowClick(loan) {
        console.log(`\tPIPE: ClientDetailLoansTableComponent.OnInit() clicked Client:%O`, loan);
        // this.router.navigate([`/loan`, loan.id, 'overview']);    
        // this.router.navigate([loan.id, 'overview'], {relativeTo: this.route});
    }
    getValue(value) {
        if (!value || value === '') {
            value = '-';
        }
        return value;
    }
    getValueBaks(value) {
        if (!value || value === '') {
            return '-';
        }
        return '$ ' + value;
    }
    getValueDate(value) {
        // console.log('getValueDate()  value -> %O', value);
        if (!value || value === '') {
            return value = '-';
        }
        let date;
        try {
            var parts_0 = value.split('T');
            var parts = parts_0[0].split('-');
            // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
            // January - 0, February - 1, etc.   
            // '2019-31-12'
            // date = new Date(parts[0], parts[2] - 1, parts[1]);  // (YYYY-DD-MM)
            // '2019-12-31'   '2019-12-24T00:00:00.000+0000'
            date = new Date(parts[0], parts[1] - 1, parts[2]); //  (YYYY-MM-DD)
            // The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
            //date = new Date('2019-12-31');  // "2019-12-24T00:00:00.000+0000"   // "2015-03-25" (The International Standard)
            // Examples of ISO format: YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS.
            // var today = new Date('05 October 2011 14:48 UTC');  // http://daks.me/js_date_formats.php
            // today.toISOString()
            /*
            https://momentjs.com/
            let dt = moment("02-01-2019", "MM-DD-YYYY");
            console.log(dt.fromNow()+' |'+dt.format('LL'))
            */
            // console.log('getValueDate()  date -> %O', date);
        }
        catch (ex) {
            // console.log('getValueDate()  ex -> %O', ex);
            return date = 'Exeption: ' + ex.message;
        }
        if (isNaN(date) || isNaN(date.getFullYear()) || isNaN(date.getMonth()) || isNaN(date.getDate())) {
            return 'NaN error';
        }
        return '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(); // (YYYY-MM-DD)
    }
    drawFund(id) {
        console.log('ClientDetailLoansTableComponent drawFund() id -> %O', id);
    }
};
ClientDetailLoansTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailLoansTableComponent.prototype, "loansData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], { static: true })
], ClientDetailLoansTableComponent.prototype, "matTbl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
], ClientDetailLoansTableComponent.prototype, "sort", void 0);
ClientDetailLoansTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-loans-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-loans-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-loans-table.component.scss */ "./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.scss")).default]
    })
], ClientDetailLoansTableComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-overview.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-overview.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------------- */\n.tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n.tgi-mat-card-title-score {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n.tgi-button-margin {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLHNCQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDREY7QURJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNIRjtBRE1BO0VBRUUsYUFBQTtFQUVBLDZCQUFBO0FDTEY7QURPQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FDUkY7QURXQTtFQUVFLDZCQUFBO0VBQ0MsV0FBQTtBQ1RIO0FEWUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FDVEY7QURXQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ1JGO0FEV0E7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0FDVkY7QURhQTtFQUNFLGlCQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7IFxufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDsgXG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG5cbiAgZGlzcGxheTogZmxleDtcblxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gIGZsZXgtd3JhcDogd3JhcDsgXG5cbiAgbWFyZ2luLWxlZnQ6IDVweDtcblxuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG5cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWl0ZW0ge1xuXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xuICAgd2lkdGg6IDEwMCU7IFxufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4OyBcbiAgLyogd2lkdGg6IGF1dG87ICAqL1xufVxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTsgXG59XG5cbi50Z2ktbWF0LWNhcmQtdGl0bGUtc2NvcmUge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnRnaS1idXR0b24tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIC8qIHdpZHRoOiBhdXRvOyAgKi9cbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtY2FyZC10aXRsZS1zY29yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-overview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-overview.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClientDetailOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailOverviewComponent", function() { return ClientDetailOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");




// -----------




// -----------

let ClientDetailOverviewComponent = class ClientDetailOverviewComponent {
    constructor(activatedRoute, router, userSrv, clientDetailOverviewStateSrv, clientDetailOverviewService, snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userSrv = userSrv;
        this.clientDetailOverviewStateSrv = clientDetailOverviewStateSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        // public isVisible = false;  /* visible after loaded */
        this.currentUser$ = null;
        this.currentClientDetail$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isClientDetailOverviewChanged$ = null;
        // --------------------------------------------------------------
        // protected stateIsEnd = '';
        // protected stateOp = '';
        // ----------------
        this.activatedRouteParentParams$ = null;
        // public clientId: string;
        this.clientDetailOverview = null; //  clientOverview
    }
    ngOnInit() {
        // this.activatedRouteParentParams$ = this.activatedRoute.parent.params
        // .pipe(
        //   map((pm: Params) => pm.id),
        //   tap((clientId: string) => {
        //       console.log('ClientDetailOverviewComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', clientId);
        //       this.clientId = clientId;
        //       // this.isVisible = false;
        //       // this.clientDetailOverviewService.loadClientDetailOverview(this.clientDetailOverviewStateSrv, this.clientId);
        //       // this.clientDetailOverviewService.loadClientDetail(this.clientDetailOverviewStateSrv, this.clientId);
        //     })
        // );
        // ---------------------
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                // this.clientDetailOverviewService.clearClientDetailOverview();
                this.clientDetailOverviewService.clearClientDetail();
            }
        }));
        // ---------------------
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetail$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((client) => {
            if (!this.clientDetailOverviewService.isClientDetailNotEmpty(client)) {
                return null;
            }
            return client;
        }));
        // ---------------------  
        this.isClientDetailOverviewChanged$ = this.clientDetailOverviewStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            // this.stateIsEnd += ` ${r.isEnd};`;
            // this.stateOp += ` ${r.op};`;
            // this.isVisible = false;
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    // this.isVisible = true; // netesa-
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Client Detail Overview has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    // ---------------------
    getFullName(firstName, lastName, middleName) {
        let fullName = firstName + ' ' + lastName;
        if (middleName) {
            fullName = fullName + ' ' + middleName.trim();
        }
        return fullName;
    }
    getPhoneNumber(phoneNumber) {
        return phoneNumber;
    }
    getEmail(email) {
        return email;
    }
    isProfileImage(profileImage) {
        if (profileImage) {
            return true;
        }
        return false;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    getAddressTypes(addressTypes) {
        let types = [];
        for (let i = 0; i < addressTypes.length; i++) {
            types[i] = addressTypes[i];
            if (i < (addressTypes.length - 1)) {
                types[i] += ',';
            }
        }
        return types;
    }
    isAddressType(address, addressType) {
        function isName(element, index, array) {
            if (element.trim().toUpperCase() === addressType.trim().toUpperCase()) {
                // console.log('isAddressType addressType -> %O   element  -> %O',  addressType, element);
                return true;
            }
            return false;
        }
        if (address && address.addressTypes && address.addressTypes.length > 0) {
            // console.log('isAddressType addressType -> %O   address.addressTypes  -> %O',  addressType, address.addressTypes);
            return address.addressTypes.find(isName);
        }
    }
    onGetCreditScore() {
        console.log('ClientDetailOverviewComponent.onGetCreditScore() %O');
        // this.router.navigateByUrl('/');
        this.router.navigate(['creditscoreinquiry'], { relativeTo: this.activatedRoute });
    }
    onGetBankStatement() {
        // ???
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
ClientDetailOverviewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ClientDetailOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-overview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-overview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-overview.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-overview.component.scss */ "./src/app/clients/client-detail/client-detail-overview.component.scss")).default]
    })
], ClientDetailOverviewComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n  padding-top: 20px;\n  padding-left: 64px; \n  padding-bottom: 0px;\n}\n*/\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\n.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  /* display: inline; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwtcGVyc29uYWwtaW5mby9jbGllbnQtZGV0YWlsLXBlcnNvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLXBlcnNvbmFsLWluZm8vY2xpZW50LWRldGFpbC1wZXJzb25hbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FET0E7Ozs7OztDQUFBOztBQU9BO0VBQ0UsaUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ1BGOztBRFVBO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FDUkY7O0FEVUE7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1RGOztBRFlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0MsV0FBQTtBQ1RIOztBRGFBO0VBQ0csV0FBQTtFQUNBLFlBQUE7QUNWSDs7QURhQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ1ZGOztBRFlBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDVEY7O0FEWUE7RUFDQyxJQUFBO0VBQU8sc0JBQUE7QUNSUjs7QURXQTtFQUNFLGtCQUFBO0FDUkY7O0FEVUE7RUFDRSx3QkFBQTtBQ1BGOztBRFNBO0VBQ0UsZ0JBQUE7QUNORjs7QURRQTtFQUNFLGlCQUFBO0FDTEY7O0FEUUE7RUFDRSxlQUFBO0FDTEY7O0FEUUEseUJBQUE7O0FBQ0E7RUFDRSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0FDTEY7O0FEUUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FDTEY7O0FEUUE7RUFDRSxpQkFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNMRjs7QURPQTtFQUNFLHFCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC1wZXJzb25hbC1pbmZvL2NsaWVudC1kZXRhaWwtcGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24ubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4OyBcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICAvKiBwYWRkaW5nLWxlZnQ6IDEwcHg7ICovXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBmb250LXNpemU6IG1lZGl1bTtcblxuXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7IFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLypcbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRhYmxlLm1hdC1jYXJkLXRpdGxlIC5tYXQtaWNvbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDY0cHg7IFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuKi9cbi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLnRnaS1tYXQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDsgXG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1sZWZ0IHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogMjUlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gIGZsZXgtd3JhcDogd3JhcDsgXG5cbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDc1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4Oztcbn1cblxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gICB3aWR0aDogMTAwJTsgXG59XG5cblxuLnRnaS1tYXQtaW1nLXNpemUge1xuICAgd2lkdGg6IDY0cHg7XG4gICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87IFxufVxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTsgXG59XG5cbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XG4gLyogKi8gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxufVxuXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbjo6bmctZGVlcCAgICAudGdpLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7IFxufVxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSAgIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiB2aXNpYmxlIGFmdGVyIGxvYWRlZCAqL1xuOjpuZy1kZWVwICAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDEuMDsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMC4wOyBcbn1cblxuOjpuZy1kZWVwICAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDEuMDsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMC4wOyBcbn1cblxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRlc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50Z2ktYnV0dG9uLWljb24tdGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi50Z2ktaWNvbi1zaXplLXRibCB7ICBcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cbi50Z2ktYWRkcmVzcy10eXBlIHtcbiAgLyogZGlzcGxheTogaW5saW5lOyAqL1xufVxuIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIC8qIHBhZGRpbmctbGVmdDogMTBweDsgKi9cbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLypcbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRhYmxlLm1hdC1jYXJkLXRpdGxlIC5tYXQtaWNvbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDY0cHg7IFxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuKi9cbi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLnRnaS1tYXQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDI1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDc1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uZmxleC1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWltZy1zaXplIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcbiAgLyptaW4td2lkdGg6IDMwMHB4OyAqL1xuICB3aWR0aDogYXV0bztcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcbiAgLyogKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRnaS1tYXQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG59XG5cbi50Z2ktY2FyZC1saW5lLWluZGVudC0xIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTIge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50Z2ktaWNvbi1lZGl0LXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRlc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50Z2ktYnV0dG9uLWljb24tdGJsIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi50Z2ktaWNvbi1zaXplLXRibCB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi50Z2ktYWRkcmVzcy10eXBlIHtcbiAgLyogZGlzcGxheTogaW5saW5lOyAqL1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ClientDetailPersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailPersonalInfoComponent", function() { return ClientDetailPersonalInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClientDetailPersonalInfoComponent = class ClientDetailPersonalInfoComponent {
    constructor() {
        /*
         <app-client-detail-personal-info  [isVisible]="true"
             [id]="id" [profile]="profile" [loanOfficer]="loanOfficer"  [branch]="branch"
           ></app-client-detail-personal-info>
      
        */
        this.isVisible = true;
    }
    ngOnInit() {
    }
    getFullName(firstName, lastName, middleName) {
        let fullName = firstName + ' ' + lastName;
        if (middleName) {
            fullName = fullName + ' ' + middleName.trim();
        }
        return fullName;
    }
    getPhoneNumber(phoneNumber) {
        return phoneNumber;
    }
    getEmail(email) {
        return email;
    }
    isProfileImage(profileImage) {
        if (profileImage) {
            return true;
        }
        return false;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    getAddressTypes(addressTypes) {
        let types = [];
        for (let i = 0; i < addressTypes.length; i++) {
            types[i] = addressTypes[i];
            if (i < (addressTypes.length - 1)) {
                types[i] += ',';
            }
        }
        return types;
    }
    isAddressType(address, addressType) {
        function isName(element, index, array) {
            if (element.trim().toUpperCase() === addressType.trim().toUpperCase()) {
                // console.log('isAddressType addressType -> %O   element  -> %O',  addressType, element);
                return true;
            }
            return false;
        }
        if (address && address.addressTypes && address.addressTypes.length > 0) {
            // console.log('isAddressType addressType -> %O   address.addressTypes  -> %O',  addressType, address.addressTypes);
            return address.addressTypes.find(isName);
        }
    }
    ngOnDestroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailPersonalInfoComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailPersonalInfoComponent.prototype, "profile", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailPersonalInfoComponent.prototype, "loanOfficer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClientDetailPersonalInfoComponent.prototype, "branch", void 0);
ClientDetailPersonalInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-personal-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-personal-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.html")).default,
        providers: [],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-personal-info.component.scss */ "./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.scss")).default]
    })
], ClientDetailPersonalInfoComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/client-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tgi-body-component {\n  padding-top: 8px;\n}\n\n.tgi-avatar-container {\n  /*  display: flex;\n    flex-direction: column;\n    */\n  padding-left: 30px;\n}\n\n/**/\n\n/*\n.tgi-avatar-container > * {\n  width: auto;\n}\n*/\n\n.flex-container-avatar {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  /*border: 1px solid red;  */\n}\n\n.flex-column {\n  display: flex;\n  /* width: auto; */\n  margin-left: 5px;\n}\n\n.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n}\n\n.tgi-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-avatar-card {\n  max-width: 350px;\n  /* width: auto; ??? */\n}\n\n.tgi-avatar-header-image {\n  /* */\n  background-size: cover;\n}\n\n::ng-deep .tgi-card-header .mat-card-header-text {\n  margin: 0px;\n}\n\n/*\n::ng-deep   .tgi-card-header.mat-card-content > :last-child:not(.mat-card-footer), .mat-card[_ngcontent-ymu-c12] > [_ngcontent-ymu-c12]:last-child:not(.mat-card-footer) {\n  margin: -30px;\n}\n*/\n\n::ng-deep .tgi-card-title.mat-card-title {\n  padding-bottom: 6px;\n  font-size: small;\n}\n\n::ng-deep .tgi-card-header.mat-card-header .mat-card-subtitle:not(:first-child) {\n  margin-top: -16px;\n  /*  line spacing !!!   */\n  font-size: small;\n}\n\n/*\n::ng-deep  .mat-card-actions, .mat-card-content, .mat-card-subtitle {\n  margin-bottom: 8px;\n}\n*/\n\n::ng-deep .mat-card-subtitle {\n  margin-top: 0px;\n}\n\n::ng-deep .mat-icon.tgi-icon-size {\n  font-size: 18px;\n  margin-left: 10px;\n}\n\n::ng-deep .tgi-card-header.mat-card-content > :last-child:not(.mat-card-footer), .mat-card > :last-child:not(.mat-card-footer) {\n  margin-bottom: -30px;\n}\n\n/*  Tabs */\n\n::ng-deep .tgi-tab-group.mat-tab-group {\n  /* not use */\n  margin-top: -40px;\n}\n\n::ng-deep nav.tgi-tab-group {\n  margin-top: -40px;\n}\n\n/*\n::ng-deep  .tgi-tab-group .mat-tab-header, .mat-tab-nav-bar {\n  border-bottom: 4px solid rgba(0,0,0,.12);  \n}\n*/\n\n/* set color for page */\n\n/* \n::ng-deep   .mat-drawer-container {\n  background-color: beige;\n}\n*/\n\n::ng-deep .tgi-visible .mat-icon.tgi-icon-account-size {\n  font-size: 64px;\n  margin-right: 32px;\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible .mat-icon.tgi-icon-account-size {\n  font-size: 64px;\n  margin-right: 32px;\n  opacity: 0;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header img {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header img {\n  opacity: 0;\n}\n\n.tgi-subtitle-contact {\n  display: flex;\n  flex-wrap: wrap;\n  /* justify-content: center; */\n  align-items: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NsaWVudC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9jbGllbnQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNBOztLQUFBO0VBR0Usa0JBQUE7QUNBRjs7QURFQSxHQUFBOztBQUNBOzs7O0NBQUE7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLDJCQUFBO0FDRkY7O0FES0E7RUFFRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDRkY7O0FETUE7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQ0hIOztBRE1BO0VBQ0UsZ0JBQUE7RUFDRCxxQkFBQTtBQ0hEOztBRE1BO0VBQ0MsSUFBQTtFQUFPLHNCQUFBO0FDRlI7O0FES0E7RUFDRyxXQUFBO0FDRkg7O0FESUE7Ozs7Q0FBQTs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURLQTtFQUNFLGlCQUFBO0VBQXFCLHdCQUFBO0VBQ3JCLGdCQUFBO0FDREY7O0FER0E7Ozs7Q0FBQTs7QUFLQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0Usb0JBQUE7QUNBRjs7QURHQSxVQUFBOztBQUNBO0VBQTJDLFlBQUE7RUFDekMsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7Ozs7Q0FBQTs7QUFLQSx1QkFBQTs7QUFDQTs7OztDQUFBOztBQU1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREdBLHlCQUFBOztBQUNBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsVUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFFQSw2QkFBQTtFQUNBLHVCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY2xpZW50LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi50Z2ktYXZhdGFyLWNvbnRhaW5lciB7XG4vKiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgKi9cbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuLyoqL1xuLypcbi50Z2ktYXZhdGFyLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogYXV0bztcbn1cbiovXG4uZmxleC1jb250YWluZXItYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7IFxuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgXG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICAvKiB3aWR0aDogYXV0bzsgKi9cbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5mbGV4LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xufVxuXG5cbi50Z2ktaW1nLXNpemUge1xuICAgd2lkdGg6IDY0cHg7XG4gICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktYXZhdGFyLWNhcmQge1xuICBtYXgtd2lkdGg6IDM1MHB4OyBcbiAvKiB3aWR0aDogYXV0bzsgPz8/ICovXG59XG5cbi50Z2ktYXZhdGFyLWhlYWRlci1pbWFnZSB7XG4gLyogKi8gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktY2FyZC1oZWFkZXIgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgIG1hcmdpbjogMHB4OyBcbn1cbi8qXG46Om5nLWRlZXAgICAudGdpLWNhcmQtaGVhZGVyLm1hdC1jYXJkLWNvbnRlbnQgPiA6bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3RlciksIC5tYXQtY2FyZFtfbmdjb250ZW50LXltdS1jMTJdID4gW19uZ2NvbnRlbnQteW11LWMxMl06bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3Rlcikge1xuICBtYXJnaW46IC0zMHB4O1xufVxuKi9cbjo6bmctZGVlcCAgLnRnaS1jYXJkLXRpdGxlLm1hdC1jYXJkLXRpdGxlIHtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuXG46Om5nLWRlZXAgIC50Z2ktY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IC0xNnB4OyAgIC8qICBsaW5lIHNwYWNpbmcgISEhICAgKi9cbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cbi8qXG46Om5nLWRlZXAgIC5tYXQtY2FyZC1hY3Rpb25zLCAubWF0LWNhcmQtY29udGVudCwgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuKi9cbjo6bmctZGVlcCAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1pY29uLnRnaS1pY29uLXNpemUgICB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAgLnRnaS1jYXJkLWhlYWRlci5tYXQtY2FyZC1jb250ZW50PjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSwgLm1hdC1jYXJkPjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSB7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4OyBcbn1cblxuLyogIFRhYnMgKi9cbjo6bmctZGVlcCAgLnRnaS10YWItZ3JvdXAubWF0LXRhYi1ncm91cCB7ICAvKiBub3QgdXNlICovXG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG46Om5nLWRlZXAgIG5hdi50Z2ktdGFiLWdyb3VwIHtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG5cbi8qXG46Om5nLWRlZXAgIC50Z2ktdGFiLWdyb3VwIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhciB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDAsMCwwLC4xMik7ICBcbn1cbiovXG4vKiBzZXQgY29sb3IgZm9yIHBhZ2UgKi9cbi8qIFxuOjpuZy1kZWVwICAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG4qL1xuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1hY2NvdW50LXNpemUgICB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAxLjA7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWFjY291bnQtc2l6ZSAgIHtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBtYXJnaW4tcmlnaHQ6IDMycHg7XG4gIG9wYWNpdHk6IDAuMDtcbn1cblxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cbjo6bmctZGVlcCAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxLjA7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDAuMDsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxLjA7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDAuMDsgXG59XG5cbjo6bmctZGVlcCAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciBpbWcge1xuICBvcGFjaXR5OiAxLjA7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgIGltZyB7XG4gIG9wYWNpdHk6IDAuMDsgXG59XG5cbi50Z2ktc3VidGl0bGUtY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgXG5cbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufSIsIi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4udGdpLWF2YXRhci1jb250YWluZXIge1xuICAvKiAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICovXG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLyoqL1xuLypcbi50Z2ktYXZhdGFyLWNvbnRhaW5lciA+ICoge1xuICB3aWR0aDogYXV0bztcbn1cbiovXG4uZmxleC1jb250YWluZXItYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogd2lkdGg6IGF1dG87ICovXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xufVxuXG4udGdpLWltZy1zaXplIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuLnRnaS1hdmF0YXItY2FyZCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIC8qIHdpZHRoOiBhdXRvOyA/Pz8gKi9cbn1cblxuLnRnaS1hdmF0YXItaGVhZGVyLWltYWdlIHtcbiAgLyogKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktY2FyZC1oZWFkZXIgLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi8qXG46Om5nLWRlZXAgICAudGdpLWNhcmQtaGVhZGVyLm1hdC1jYXJkLWNvbnRlbnQgPiA6bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3RlciksIC5tYXQtY2FyZFtfbmdjb250ZW50LXltdS1jMTJdID4gW19uZ2NvbnRlbnQteW11LWMxMl06bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3Rlcikge1xuICBtYXJnaW46IC0zMHB4O1xufVxuKi9cbjo6bmctZGVlcCAudGdpLWNhcmQtdGl0bGUubWF0LWNhcmQtdGl0bGUge1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG46Om5nLWRlZXAgLnRnaS1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXRvcDogLTE2cHg7XG4gIC8qICBsaW5lIHNwYWNpbmcgISEhICAgKi9cbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLypcbjo6bmctZGVlcCAgLm1hdC1jYXJkLWFjdGlvbnMsIC5tYXQtY2FyZC1jb250ZW50LCAubWF0LWNhcmQtc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4qL1xuOjpuZy1kZWVwIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktaWNvbi1zaXplIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktY2FyZC1oZWFkZXIubWF0LWNhcmQtY29udGVudCA+IDpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSwgLm1hdC1jYXJkID4gOmxhc3QtY2hpbGQ6bm90KC5tYXQtY2FyZC1mb290ZXIpIHtcbiAgbWFyZ2luLWJvdHRvbTogLTMwcHg7XG59XG5cbi8qICBUYWJzICovXG46Om5nLWRlZXAgLnRnaS10YWItZ3JvdXAubWF0LXRhYi1ncm91cCB7XG4gIC8qIG5vdCB1c2UgKi9cbiAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG5cbjo6bmctZGVlcCBuYXYudGdpLXRhYi1ncm91cCB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG4vKlxuOjpuZy1kZWVwICAudGdpLXRhYi1ncm91cCAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXIge1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiYSgwLDAsMCwuMTIpOyAgXG59XG4qL1xuLyogc2V0IGNvbG9yIGZvciBwYWdlICovXG4vKiBcbjo6bmctZGVlcCAgIC5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuKi9cbjo6bmctZGVlcCAudGdpLXZpc2libGUgLm1hdC1pY29uLnRnaS1pY29uLWFjY291bnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlIC5tYXQtaWNvbi50Z2ktaWNvbi1hY2NvdW50LXNpemUge1xuICBmb250LXNpemU6IDY0cHg7XG4gIG1hcmdpbi1yaWdodDogMzJweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIGltZyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIGltZyB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50Z2ktc3VidGl0bGUtY29udGFjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/client-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/clients/client-detail/client-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");




// -----------





let ClientDetailComponent = class ClientDetailComponent {
    // client: ClientDetailInterface = null;
    constructor(activatedRoute, router, userSrv, clientDetailStateSrv, clientDetailService, snackBarSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userSrv = userSrv;
        this.clientDetailStateSrv = clientDetailStateSrv;
        this.clientDetailService = clientDetailService;
        this.snackBarSrv = snackBarSrv;
        this.currentUser$ = null;
        this.currentClientDetail$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isClientDetailChanged$ = null;
        // --------------------------------------------------------------
        // protected stateIsEnd = '';
        // protected stateOp = '';
        // ----------------
        // <nav mat-tab-nav-bar class="tgi-tab-group"   mat-align-tabs="end"  [color]="matTabNavColor" >
        this.matTabNavColor = 'primary'; // 'primary',  'accent' . 'warn'
        // public isVisible = false;  // netesa - /* visible after loaded */
        this.activatedRouteParamMap$ = null;
        this.navLinks = [];
        clientDetailStateSrv.context = "ClientDetailComponent";
    }
    ngOnInit() {
        this.activatedRouteParamMap$ = this.activatedRoute.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((params) => params.get('id')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((clientId) => {
            console.log('\tPIPE: ClientDetailComponent activatedRouteParamMap$ id = %s', clientId);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((Id) => {
            //  this.isVisible = false; // netesa -
            /* */
            this.navLinks = [
                { path: `/clients/${Id}/overview`, isActive: false, label: 'Overview' },
                { path: `/clients/${Id}/loanapplications`, isActive: false, label: 'Applications' },
                { path: `/clients/${Id}/financials`, isActive: false, label: 'Financials' },
                // {path: `/clients/${Id}/documemts`, isActive: false, label: 'Documemts'},
                { path: `/clients/${Id}/loans`, isActive: false, label: 'Loans' }
            ];
            this.clientId = Id;
            this.clientDetailService.loadClientDetail(this.clientDetailStateSrv, Id);
            return Id;
        }));
        // ---------------------
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            console.log('\tPIPE: ClientDetailComponent currentUser$ user = %O', user);
            if (this.userSrv.isAnonymUser(user)) {
                this.clientDetailService.clearClientDetail();
            }
        }));
        // ---------------------
        this.currentClientDetail$ = this.clientDetailService.curClientDetail$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((client) => {
            console.log('\tPIPE: ClientDetailComponent currentClientDetail$ client = %O', client);
        }), 
        // netesa -
        // tap((client: ClientDetailInterface) => {
        //   if (!this.clientDetailService.isClientDetailNotEmpty(client)) {
        //     const userWithToken = this.userSrv.curUserWithToken;
        //     if (this.userSrv.isAnonymUser(userWithToken)) {
        //       // throw new Error('Current User is anonymous');
        //     } else if (userWithToken.user != null &&
        //       !this.userSrv.isWrongUser(userWithToken.user)) {
        //     } else {
        //         throw new Error('User is null or WrongUser');
        //     }
        //   }
        // })
        // netesa + 
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((client) => {
            if (!this.clientDetailService.isClientDetailNotEmpty(client)) {
                // return null;
                this.clientDetailService.loadClientDetail(this.clientDetailStateSrv, this.clientId);
            }
            return client;
        }));
        // ---------------------  
        this.isClientDetailChanged$ = this.clientDetailStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((r) => {
            console.log(`\tPIPE: ClientDetailComponent.OnInit() IsEntityChangedInterface:%O`, r);
            // this.stateIsEnd += ` ${r.isEnd};`;
            // this.stateOp += ` ${r.op};`;
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    // this.isVisible = true; // netesa-
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Client Detail has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    /*
      getLink(tab: string, clientId: string ) {
         const link = `/clients/${this.clientId}/${tab}`;
         console.log('ClientDetailComponent getLink() -> %o', link);
         return link;
      }
      */
    getFullName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
    getPhoneNumber(phoneNumber) {
        return phoneNumber;
    }
    getEmail(email) {
        return email;
    }
    isProfileImage(profileImage) {
        if (profileImage) {
            return true;
        }
        return false;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    ngOnDestroy() {
        this.clientDetailService.clearClientDetail(); // netesa +
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
ClientDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_8__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ClientDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/client-detail.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail.component.scss */ "./src/app/clients/client-detail/client-detail.component.scss")).default]
    })
], ClientDetailComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------------- */\n.tgi-inquiry.tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n.tgi-inquiry.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n.tgi-inquiry.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n.tgi-inquiry.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n.tgi-inquiry.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n.tgi-inquiry.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n/* mat-card-right  */\n::ng-deep .tgi-inquiry.tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n.tgi-inquiry.form-inquiry {\n  width: 100%;\n}\n.tgi-inquiry.tgi-mat-card-title {\n  margin-top: 32px;\n}\n.tgi-inquiry.tgi-card-subtitle-1 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin-top: 32px;\n}\n.tgi-inquiry.tgi-block-section {\n  display: flex;\n  flex-direction: column;\n}\n.tgi-inquiry.tgi-section {\n  margin-top: 4px;\n  margin-left: 32px;\n  margin-bottom: 10px;\n}\n.tgi-inquiry.tgi-section-2 {\n  margin-left: 32px;\n}\n.tgi-inquiry.tgi-block-select {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n.tgi-mat-card-title-score {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n.tgi-button-margin {\n  margin-left: 32px;\n}\n::ng-deep .tgi-inquiry.tgi-select-inquiry.mat-form-field.mat-form-field-type-mat-select {\n  width: 470px !important;\n  margin-left: 32px;\n}\n.tgi-inquiry.tgi-card-subtitle-2 {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  margin-top: 32px;\n}\n.tgi-inquiry.tgi-argee {\n  margin-left: 10px;\n}\n/*  spinner  */\n.tgi-inquiry.flex-spinner-container {\n  width: 100%;\n  height: 32px;\n  margin-top: -32px;\n  /* border: 1px solid yellow;  */\n}\n.tgi-inquiry.spinner-container {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: center;\n}\n.tgi-inquiry.spinner {\n  margin-left: 32px;\n  margin-right: 64px;\n}\n.tgi-inquiry.tgi-mat-card-title-report {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 32px;\n}\n.tgi-inquiry.tgi-button-margin {\n  margin-left: 64px;\n}\n.tgi-inquiry.tgi-card-subtitle-0 {\n  height: 200px;\n  border: 1px solid yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NyZWRpdC1zY29yZS1pbnF1aXJ5L2NyZWRpdC1zY29yZS1pbnF1aXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvY3JlZGl0LXNjb3JlLWlucXVpcnkvY3JlZGl0LXNjb3JlLWlucXVpcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ0RGO0FESUE7RUFFRSxhQUFBO0VBRUEsNkJBQUE7QUNIRjtBRE9BO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNSRjtBRFdBO0VBRUUsNkJBQUE7RUFDQyxXQUFBO0FDVEg7QURZQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNURjtBRFlBLG9CQUFBO0FBRUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUNWRjtBRGFBO0VBQ0UsV0FBQTtBQ1ZGO0FEYUE7RUFDRyxnQkFBQTtBQ1ZIO0FEYUE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLDhCQUFBO0VBRUEsZ0JBQUE7QUNiRjtBRGdCQTtFQUVFLGFBQUE7RUFDQSxzQkFBQTtBQ2RGO0FEZ0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNiRjtBRGVBO0VBQ0UsaUJBQUE7QUNaRjtBRGVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNaRjtBRGVBO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUJBQUE7QUNkRjtBRGlCQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7QUNkRjtBRGlCQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBRUEsZ0JBQUE7QUNqQkY7QURvQkE7RUFDRSxpQkFBQTtBQ2pCRjtBRG9CQSxjQUFBO0FBRUE7RUFDRSxXQUFBO0VBRUEsWUFBQTtFQUVBLGlCQUFBO0VBRUEsK0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSx5QkFBQTtFQUNBLG1CQUFBO0FDdkJGO0FEMEJBO0VBQ0csaUJBQUE7RUFDQSxrQkFBQTtBQ3ZCSDtBRDBCQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtBQzFCRjtBRDZCQTtFQUNFLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO0FDMUJGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2NyZWRpdC1zY29yZS1pbnF1aXJ5L2NyZWRpdC1zY29yZS1pbnF1aXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi50Z2ktaW5xdWlyeS50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4OyBcbn1cblxuLnRnaS1pbnF1aXJ5LmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7IFxuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLnRnaS1pbnF1aXJ5LmZsZXgtY29sdW1uLWxlZnQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cblxuLnRnaS1pbnF1aXJ5LmZsZXgtY29sdW1uLXJpZ2h0IHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgZmxleC13cmFwOiB3cmFwOyBcblxuICBtYXJnaW4tbGVmdDogNXB4O1xuXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcblxuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1pbnF1aXJ5LmZsZXgtaXRlbSB7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gICB3aWR0aDogMTAwJTsgXG59XG5cbi50Z2ktaW5xdWlyeS50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIG1pbi13aWR0aDogMzUwcHg7IFxuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG5cbi8qIG1hdC1jYXJkLXJpZ2h0ICAqL1xuXG46Om5nLWRlZXAgLnRnaS1pbnF1aXJ5LnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlOyBcbn1cblxuLnRnaS1pbnF1aXJ5LmZvcm0taW5xdWlyeSB7XG4gIHdpZHRoOiAxMDAlOyBcbn1cblxuLnRnaS1pbnF1aXJ5LnRnaS1tYXQtY2FyZC10aXRsZSB7XG4gICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4udGdpLWlucXVpcnkudGdpLWNhcmQtc3VidGl0bGUtMSB7XG4gIHdpZHRoOiAxMDAlOyBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi50Z2ktaW5xdWlyeS50Z2ktYmxvY2stc2VjdGlvbiB7XG4gICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50Z2ktaW5xdWlyeS50Z2ktc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udGdpLWlucXVpcnkudGdpLXNlY3Rpb24tMiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLWlucXVpcnkudGdpLWJsb2NrLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4udGdpLW1hdC1jYXJkLXRpdGxlLXNjb3JlIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1pbnF1aXJ5LnRnaS1zZWxlY3QtaW5xdWlyeS5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1zZWxlY3Qge1xuICB3aWR0aDogNDcwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi50Z2ktaW5xdWlyeS50Z2ktY2FyZC1zdWJ0aXRsZS0yIHtcbiAgd2lkdGg6IDEwMCU7IFxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi50Z2ktaW5xdWlyeS50Z2ktYXJnZWUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLyogIHNwaW5uZXIgICovXG5cbi50Z2ktaW5xdWlyeS5mbGV4LXNwaW5uZXItY29udGFpbmVye1xuICB3aWR0aDogMTAwJTsgIFxuXG4gIGhlaWdodDogMzJweDtcblxuICBtYXJnaW4tdG9wOiAtMzJweDtcblxuICAvKiBib3JkZXI6IDFweCBzb2xpZCB5ZWxsb3c7ICAqL1xufVxuXG4udGdpLWlucXVpcnkuc3Bpbm5lci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTsgXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50Z2ktaW5xdWlyeS5zcGlubmVyIHtcbiAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgbWFyZ2luLXJpZ2h0OiA2NHB4O1xufVxuXG4udGdpLWlucXVpcnkudGdpLW1hdC1jYXJkLXRpdGxlLXJlcG9ydCB7XG4gIHdpZHRoOiAxMDAlOyBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcbiAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLnRnaS1pbnF1aXJ5LnRnaS1idXR0b24tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDY0cHg7XG59XG5cbi50Z2ktaW5xdWlyeS50Z2ktY2FyZC1zdWJ0aXRsZS0wIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xufSIsIi8qIC0tLS0tLS0tLS0tLS0tLS0tICovXG4udGdpLWlucXVpcnkudGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnRnaS1pbnF1aXJ5LmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi50Z2ktaW5xdWlyeS5mbGV4LWNvbHVtbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi50Z2ktaW5xdWlyeS5mbGV4LWNvbHVtbi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1pbnF1aXJ5LmZsZXgtaXRlbSB7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1pbnF1aXJ5LnRnaS1tYXQtY2FyZC1sZWZ0IHtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgLyogd2lkdGg6IGF1dG87ICAqL1xufVxuXG4vKiBtYXQtY2FyZC1yaWdodCAgKi9cbjo6bmctZGVlcCAudGdpLWlucXVpcnkudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktaW5xdWlyeS5mb3JtLWlucXVpcnkge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1pbnF1aXJ5LnRnaS1tYXQtY2FyZC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi50Z2ktaW5xdWlyeS50Z2ktY2FyZC1zdWJ0aXRsZS0xIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4udGdpLWlucXVpcnkudGdpLWJsb2NrLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGdpLWlucXVpcnkudGdpLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGdpLWlucXVpcnkudGdpLXNlY3Rpb24tMiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLWlucXVpcnkudGdpLWJsb2NrLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4udGdpLW1hdC1jYXJkLXRpdGxlLXNjb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnRnaS1idXR0b24tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbjo6bmctZGVlcCAudGdpLWlucXVpcnkudGdpLXNlbGVjdC1pbnF1aXJ5Lm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LXNlbGVjdCB7XG4gIHdpZHRoOiA0NzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLnRnaS1pbnF1aXJ5LnRnaS1jYXJkLXN1YnRpdGxlLTIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4udGdpLWlucXVpcnkudGdpLWFyZ2VlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qICBzcGlubmVyICAqL1xuLnRnaS1pbnF1aXJ5LmZsZXgtc3Bpbm5lci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgeWVsbG93OyAgKi9cbn1cblxuLnRnaS1pbnF1aXJ5LnNwaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGdpLWlucXVpcnkuc3Bpbm5lciB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktaW5xdWlyeS50Z2ktbWF0LWNhcmQtdGl0bGUtcmVwb3J0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLnRnaS1pbnF1aXJ5LnRnaS1idXR0b24tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IDY0cHg7XG59XG5cbi50Z2ktaW5xdWlyeS50Z2ktY2FyZC1zdWJ0aXRsZS0wIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgeWVsbG93O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CreditScoreInquiryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditScoreInquiryComponent", function() { return CreditScoreInquiryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _shared_services_entity_credit_score_inquiry_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../shared/services/entity-credit-score-inquiry.service */ "./src/app/shared/services/entity-credit-score-inquiry.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");





// -----------





// -----------

let CreditScoreInquiryComponent = class CreditScoreInquiryComponent {
    constructor(activatedRoute, router, formBuilder, userSrv, clientDetailOverviewStateSrv, entityCreditScoreInquiryService, clientDetailOverviewService, snackBarSrv, inquiryStateSrv) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.formBuilder = formBuilder;
        this.userSrv = userSrv;
        this.clientDetailOverviewStateSrv = clientDetailOverviewStateSrv;
        this.entityCreditScoreInquiryService = entityCreditScoreInquiryService;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        this.inquiryStateSrv = inquiryStateSrv;
        this.currentUser$ = null;
        this.currentClientDetail$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isClientDetailOverviewChanged$ = null;
        this.isInquiryChanged$ = null;
        // --------------------------------------------------------------
        this.inquiryReasonData = [
            { id: '0', value: 'Application For Credit Or Amendment Of Credit Terms' },
            { id: '1', value: 'Collection Of Public Dues' },
            { id: '2', value: 'Evaluation Of Current Customer Supplier Partner Or Own Employee' },
            { id: '3', value: 'Evaluation Of Subject As Guarantor Of Company Applying For Credit' },
            { id: '4', value: 'Initial Collection' },
            { id: '5', value: 'Intermediate Collection' },
            { id: '6', value: 'Legal Collection' },
            { id: '7', value: 'Payment Agreement' },
            { id: '8', value: 'Another Reason' }
        ];
        inquiryStateSrv.context = 'Inquiry Update Srv';
    }
    ngOnInit() {
        this.creditScoreParamsFG = this.formBuilder.group({
            customerAgreeded: ['false'],
            inquiryReason: ['0'],
            termsAccepted: [false]
        });
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                this.clientDetailOverviewService.clearClientDetail();
            }
        }));
        // ---------------------
        this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetail$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((client) => {
            if (!this.clientDetailOverviewService.isClientDetailNotEmpty(client)) {
                return null;
            }
            this.currentClientDetail = client;
            return client;
        }));
        // ---------------------
        this.isInquiryChanged$ = this.inquiryStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`\tPIPE: CreditScoreInquiryComponent.OnInit() inquiryStateSrv.IsEntityChangedInterface:%O`, r,);
            if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].NOSET) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'NOSET', isEnd: false, opResult: 'NOSET' };
                }
            }
            else if (r.op === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].UPDATE) {
                if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET) {
                    if (this.simpleSnackBarRef != null) {
                        this.simpleSnackBarRef.dismiss();
                        this.simpleSnackBarRef = null;
                    }
                    return { op: 'UPDATE', isEnd: false, opResult: 'NOSET' };
                }
                else if (!r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].ERROR) { // Error
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 5000,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'UPDATE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Credit Score Inquiry: ${r.message}`, 'X', {
                            duration: 5000,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'UPDATE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    getFullName(firstName, lastName, middleName) {
        let fullName = firstName + ' ' + lastName;
        if (middleName) {
            fullName = fullName + ' ' + middleName.trim();
        }
        return fullName;
    }
    getPhoneNumber(phoneNumber) {
        return phoneNumber;
    }
    getEmail(email) {
        return email;
    }
    isProfileImage(profileImage) {
        if (profileImage) {
            return true;
        }
        return false;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    getAddressTypes(addressTypes) {
        let types = [];
        for (let i = 0; i < addressTypes.length; i++) {
            types[i] = addressTypes[i];
            if (i < (addressTypes.length - 1)) {
                types[i] += ',';
            }
        }
        return types;
    }
    isAddressType(address, addressType) {
        function isName(element, index, array) {
            if (element.trim().toUpperCase() === addressType.trim().toUpperCase()) {
                // console.log('isAddressType addressType -> %O   element  -> %O',  addressType, element);
                return true;
            }
            return false;
        }
        if (address && address.addressTypes && address.addressTypes.length > 0) {
            // console.log('isAddressType addressType -> %O   address.addressTypes  -> %O',  addressType, address.addressTypes);
            return address.addressTypes.find(isName);
        }
    }
    inquiryReasonChanged(s) {
    }
    onGetCreditReport() {
        const index = this.creditScoreParamsFG.get('inquiryReason').value;
        const inquiryReason = this.inquiryReasonData.filter(function (data) { return data.id === index; })[0].value;
        let creditscoreinquiryrequests = {
            inquiryReason: inquiryReason,
            customerAgreeded: this.creditScoreParamsFG.get('customerAgreeded').value === "true" ? true : false,
            termsAccepted: this.creditScoreParamsFG.get('termsAccepted').value,
        };
        console.log('CreditScoreInquiryComponent.onGetCreditReport() clientid -> %O creditscoreinquiryrequests -> %O', this.currentClientDetail.id, creditscoreinquiryrequests);
        if (this.currentClientDetail) {
            let clientId = this.currentClientDetail.id; // ???
            this.entityCreditScoreInquiryService.creditScoreInquiry(`/clients/${clientId}/creditscoreinquiryrequests`, creditscoreinquiryrequests, this.inquiryStateSrv);
        }
        // ???
        // this.router.navigateByUrl('/');
        // this.router.navigate(['creditscoreinquiry'], {relativeTo: this.activatedRoute});
    }
    onCancel() {
        console.log('CreditScoreInquiryComponent.onCancel() %O');
        // ???
        // this.router.navigate(['creditscoreinquiry'], {relativeTo: this.activatedRoute});
    }
    ngOnDestroy() {
    }
};
CreditScoreInquiryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] },
    { type: _shared_services_entity_credit_score_inquiry_service__WEBPACK_IMPORTED_MODULE_9__["EntityCreditScoreInquiryService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_10__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['LOAN_APP_STATE_SERVICE',] }] }
];
CreditScoreInquiryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-credit-score-inquiry',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./credit-score-inquiry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"],
            { provide: 'LOAN_APP_STATE_SERVICE', useClass: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] }
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./credit-score-inquiry.component.scss */ "./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('LOAN_APP_STATE_SERVICE'))
], CreditScoreInquiryComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.scss ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-options.tgi-mat-card-options.mat-card {\n  margin-bottom: -30px;\n  width: 100%;\n}\n\n::ng-deep .tgi-options.tgi-mat-card-options .mat-card-title {\n  font-size: medium;\n  width: 100%;\n  padding-top: 10px;\n  /* padding-bottom: 16px; */\n  padding-left: 0px;\n}\n\n::ng-deep .tgi-options.tgi-mat-card-options .mat-card-header-text {\n  width: 100%;\n}\n\n.tgi-options.tgi-mat-divider {\n  padding: 1px 0 1px 0;\n}\n\n.tgi-options.tgi-mat-card-title {\n  margin-top: 0px;\n}\n\n.tgi-options.tgi-card-subtitle-1 {\n  padding-top: 32px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.tgi-options.tgi-creditLineValueUtil {\n  margin-left: 32px;\n}\n\n.tgi-options.tgi-line-group {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.tgi-options.tgi-section {\n  margin-left: 32px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  /*  border: 1px solid red; */\n}\n\n.tgi-options.tgi-mat-radio-button-2 {\n  padding-left: 20px;\n}\n\n.tgi-options.tgi-subtitle-2 {\n  padding-top: 32px;\n}\n\n/*\n.tgi-button-approve-loan {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: row;\n\n  width: 100%;\n  justify-content: flex-end;\n}\n\n.tgi-button-approve-loan-cancel {\n  margin-left: 20px;\n  margin-right: 64px;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Z1bmQtYnVpc25lc3MtbG9hbi9sb2FuLWNyZWRpdC1saW5lLW9wdGlvbnMvbG9hbi1jcmVkaXQtbGluZS1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvZnVuZC1idWlzbmVzcy1sb2FuL2xvYW4tY3JlZGl0LWxpbmUtb3B0aW9ucy9sb2FuLWNyZWRpdC1saW5lLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7QUNGRjs7QURJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsMkJBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0FDSEY7O0FES0E7Ozs7Ozs7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvZnVuZC1idWlzbmVzcy1sb2FuL2xvYW4tY3JlZGl0LWxpbmUtb3B0aW9ucy9sb2FuLWNyZWRpdC1saW5lLW9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6bmctZGVlcCAudGdpLW9wdGlvbnMudGdpLW1hdC1jYXJkLW9wdGlvbnMubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgd2lkdGg6IDEwMCU7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktb3B0aW9ucy50Z2ktbWF0LWNhcmQtb3B0aW9ucyAubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgd2lkdGg6IDEwMCU7IFxuXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICAvKiBwYWRkaW5nLWJvdHRvbTogMTZweDsgKi9cbiAgcGFkZGluZy1sZWZ0OiAwcHg7IFxufVxuXG46Om5nLWRlZXAgIC50Z2ktb3B0aW9ucy50Z2ktbWF0LWNhcmQtb3B0aW9ucyAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1vcHRpb25zLnRnaS1tYXQtZGl2aWRlciB7XG4gIHBhZGRpbmc6IDFweCAwIDFweCAwO1xufVxuXG4udGdpLW9wdGlvbnMudGdpLW1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLWNhcmQtc3VidGl0bGUtMSAge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG5cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGdpLW9wdGlvbnMudGdpLWNyZWRpdExpbmVWYWx1ZVV0aWwge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cbi50Z2ktb3B0aW9ucy50Z2ktbGluZS1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLnRnaS1vcHRpb25zLnRnaS1zZWN0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC8qICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktbWF0LXJhZGlvLWJ1dHRvbi0yIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLXN1YnRpdGxlLTIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cbi8qXG4udGdpLWJ1dHRvbi1hcHByb3ZlLWxvYW4ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRnaS1idXR0b24tYXBwcm92ZS1sb2FuLWNhbmNlbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY0cHg7XG59XG4qLyIsIjo6bmctZGVlcCAudGdpLW9wdGlvbnMudGdpLW1hdC1jYXJkLW9wdGlvbnMubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAtMzBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAudGdpLW9wdGlvbnMudGdpLW1hdC1jYXJkLW9wdGlvbnMgLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgLyogcGFkZGluZy1ib3R0b206IDE2cHg7ICovXG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1vcHRpb25zLnRnaS1tYXQtY2FyZC1vcHRpb25zIC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW9wdGlvbnMudGdpLW1hdC1kaXZpZGVyIHtcbiAgcGFkZGluZzogMXB4IDAgMXB4IDA7XG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktbWF0LWNhcmQtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktY2FyZC1zdWJ0aXRsZS0xIHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktY3JlZGl0TGluZVZhbHVlVXRpbCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLWxpbmUtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLXNlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC8qICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXG59XG5cbi50Z2ktb3B0aW9ucy50Z2ktbWF0LXJhZGlvLWJ1dHRvbi0yIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4udGdpLW9wdGlvbnMudGdpLXN1YnRpdGxlLTIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLypcbi50Z2ktYnV0dG9uLWFwcHJvdmUtbG9hbiB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4udGdpLWJ1dHRvbi1hcHByb3ZlLWxvYW4tY2FuY2VsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNjRweDtcbn1cbiovIl19 */");

/***/ }),

/***/ "./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: ClientLoanCreditLineOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLoanCreditLineOptionsComponent", function() { return ClientLoanCreditLineOptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ClientLoanCreditLineOptionsComponent = class ClientLoanCreditLineOptionsComponent {
    constructor(fb) {
        this.fb = fb;
        this.creditLineParamsSend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._prepareParams = 0;
    }
    get prepareCreditLineParams() {
        return this._prepareParams;
    }
    set prepareCreditLineParams(val) {
        this._prepareParams = val;
        if (this._prepareParams !== 0) {
            this.creditLineParamsSend.emit(this.creditLineParamsFG.value);
        }
    }
    getInitCreditLineParams() {
        return {
            revolvingCreditLine: this.productData.revolvingCreditLine.toString(),
            drawnDownFixed: this.productData.drawnDownFixed.toString(),
            creditLineValueUtil: this.productData.creditLineValueUtil
        };
    }
    ngOnInit() {
        this.prepareCreditLineParams = 0;
        this.creditLineParamsFG = this.fb.group({
            revolvingCreditLine: [''],
            drawnDownFixed: [''],
            creditLineValueUtil: ['']
        });
        this.creditLineParamsFG.patchValue(this.getInitCreditLineParams());
        // eof OnInit     
    }
    ngOnDestroy() {
    }
};
ClientLoanCreditLineOptionsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], ClientLoanCreditLineOptionsComponent.prototype, "productData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('credit-line-params-get')
], ClientLoanCreditLineOptionsComponent.prototype, "creditLineParamsSend", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('credit-line-params-prepare')
], ClientLoanCreditLineOptionsComponent.prototype, "prepareCreditLineParams", null);
ClientLoanCreditLineOptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clientloan-credit-line-options',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-credit-line-options.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.html")).default,
        providers: [],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-credit-line-options.component.scss */ "./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.scss")).default]
    })
], ClientLoanCreditLineOptionsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 0;\n  padding-bottom: 0;\n}\n\n::ng-deep .tgi-mat-card-fees.mat-card {\n  margin-bottom: -10px;\n  width: 100%;\n}\n\ntable {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.loan-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.loan-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.loan-row td {\n  border-bottom-width: 0;\n}\n\n.tgi-mat-form-field-f6 {\n  max-width: 100px;\n}\n\n::ng-deep .tgi-mat-form-field-size .mat-form-field-infix {\n  border-top: 0.24375em solid transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Z1bmQtcGVyc29uYWwtbG9hbi9sb2FuLWZlZXMvbG9hbi1mZWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvZnVuZC1wZXJzb25hbC1sb2FuL2xvYW4tZmVlcy9sb2FuLWZlZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUdBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRko7O0FES0U7RUFDRSxvQkFBQTtFQUNBLFdBQUE7QUNGSjs7QURLRTtFQUNJLFdBQUE7QUNGTjs7QURLSTtFQUNFLFlBQUE7QUNGTjs7QURLSTtFQUNFLGdCQUFBO0FDRk47O0FES0k7RUFDRSxtQkFBQTtBQ0ZOOztBREtJO0VBQ0Usc0JBQUE7QUNGTjs7QURLSTtFQUNFLGdCQUFBO0FDRk47O0FES0U7RUFDRSx1Q0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Z1bmQtcGVyc29uYWwtbG9hbi9sb2FuLWZlZXMvbG9hbi1mZWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICBcclxuICBcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1mZWVzLm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gIH1cclxuXHJcbiAgdGFibGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICBcclxuICAgIHRyLmxvYW4tcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM3Nzc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRyLmxvYW4tcm93Om5vdCguc2VsZWN0ZWQtcm93KTphY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9hbi1yb3cgdGQge1xyXG4gICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgfVxyXG4gICBcclxuICAgIC50Z2ktbWF0LWZvcm0tZmllbGQtZjYge1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC50Z2ktbWF0LWZvcm0tZmllbGQtc2l6ZSAubWF0LWZvcm0tZmllbGQtaW5maXh7XHJcbiAgICBib3JkZXItdG9wOiAwLjI0Mzc1ZW0gc29saWQgdHJhbnNwYXJlbnQ7XHJcbn0iLCI6Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtZmVlcy5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxudHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxudHIubG9hbi1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5sb2FuLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi50Z2ktbWF0LWZvcm0tZmllbGQtZjYge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtZm9ybS1maWVsZC1zaXplIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIGJvcmRlci10b3A6IDAuMjQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClientLoanAppFeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLoanAppFeesComponent", function() { return ClientLoanAppFeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ClientLoanAppFeesComponent = class ClientLoanAppFeesComponent {
    constructor(router, route, fb) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.feesParamsSend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayedColumns = [
            'name',
            'type',
            'method',
            'value',
            'tax',
            // 'taxAble',
            'feeHandling',
        ];
        this._prepareParams = 0;
        // this.feesDataSource = new MatTableDataSource();
    }
    get prepareFeesParams() {
        return this._prepareParams;
    }
    set prepareFeesParams(val) {
        this._prepareParams = val;
        if (this._prepareParams !== 0) {
            this.feesParamsSend.emit(this.feesFormArray.value);
        }
    }
    ngOnInit() {
        this.prepareFeesParams = 0;
        // console.log('LoanAppFeesComponent.OnInit() productData: %O', this.productData);
        // this.feesDataSource.data = this.getFeesArr();
        const feesArr = this.getFeesArr();
        this.feesFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](feesArr.map(x => this.createFormGroup(x)));
        this.feesDataSource = this.feesFormArray.controls;
        this.feesHandlingArr = this.getFeesHandlingArr();
    }
    getFeesArr() {
        //  const testFeesArr = [
        //     {
        //         "name": "Late Fee 1",
        //         "type": "Late Fee 1",
        //         "method": "As Fixed Rate 1",
        //         "value": null,
        //         "tax": null,
        //         "taxAble": false,
        //         "handling": 0
        //     },
        //     {
        //       "name": "Late Fee 2",
        //       "type": "Late Fee 2",
        //       "method": "As Fixed Rate 2",
        //       "value": null,
        //       "tax": null,
        //       "taxAble": false,
        //       "handling": 1
        //   },
        //   {
        //     "name": "Late Fee 3",
        //     "type": "Late Fee 3",
        //     "method": "As Fixed Rate 3",
        //     "value": null,
        //     "tax": null,
        //     "taxAble": false,
        //     "handling": 0
        //   },
        // ];
        // return testFeesArr;
        // console.log('LoanAppFeesComponent.getFeesArr() productData: %O', this.productData);
        if (this.productData && this.productData.fees) {
            // console.log('LoanAppFeesComponent.getFeesArr() productData.fees: %O', this.productData.fees);
            let newFees = this.productData.fees.map(f => {
                const { feeHandling } = f, rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](f, ["feeHandling"]);
                return Object.assign({}, rest, { handling: 0 });
            });
            return newFees;
        }
        return [];
    }
    getFeesHandlingArr() {
        if (this.productData && this.productData.fees && this.productData.fees[0].feeHandling) {
            return this.productData.fees[0].feeHandling;
        }
        return [];
    }
    createFormGroup(data) {
        data = data || { name: '',
            type: '',
            method: '',
            value: null,
            tax: null,
            handling: 0
        };
        return this.fb.group({
            name: [data.name],
            type: [data.type],
            method: [data.method],
            value: [data.value],
            tax: [data.tax],
            feeHandling: [data.handling]
        });
    }
};
ClientLoanAppFeesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], ClientLoanAppFeesComponent.prototype, "productData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('fees-params-get')
], ClientLoanAppFeesComponent.prototype, "feesParamsSend", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('fees-params-prepare')
], ClientLoanAppFeesComponent.prototype, "prepareFeesParams", null);
ClientLoanAppFeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-fees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-fees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-fees.component.scss */ "./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.scss")).default]
    })
], ClientLoanAppFeesComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-params.mat-card {\n  margin-bottom: -50px;\n  width: 100%;\n}\n\n::ng-deep mat-form-field.mat-form-field-type-mat-select {\n  width: 320px !important;\n}\n\n::ng-deep .tgi-at-grid-list-params figure.mat-figure {\n  justify-content: left !important;\n  top: 6px !important;\n}\n\n.tgi-mat-grid-tile-0 {\n  margin-left: 5%;\n}\n\n.tgi-mat-grid-tile-1 {\n  margin-left: 7%;\n}\n\n.tgi-mat-grid-tile-2 {\n  margin-left: 7%;\n}\n\n.tgi-mat-form-field-f6 {\n  max-width: 150px;\n  /* font: 400 14px/18px Roboto, \"Helvetica Neue\", sans-serif; */\n}\n\n::ng-deep .tgi-mat-form-field-size .mat-form-field-infix {\n  border-top: 0.24375em solid transparent;\n}\n\n/*   size input */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Z1bmQtcGVyc29uYWwtbG9hbi9sb2FuLXBhcmFtcy9sb2FuLXBhcmFtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2Z1bmQtcGVyc29uYWwtbG9hbi9sb2FuLXBhcmFtcy9sb2FuLXBhcmFtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRFlBO0VBQ0ksdUJBQUE7QUNUSjs7QURrQkE7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0FDZko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRG9CQTtFQUNJLGVBQUE7QUNqQko7O0FEb0JBO0VBQ0ksZ0JBQUE7RUFFRCw4REFBQTtBQ2xCSDs7QURxQkE7RUFDSSx1Q0FBQTtBQ2xCSjs7QURxQkEsaUJBQUEiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvZnVuZC1wZXJzb25hbC1sb2FuL2xvYW4tcGFyYW1zL2xvYW4tcGFyYW1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXBhcmFtcy5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLmF1dG8td2lkdGgge1xyXG4vLyAgICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuLy8gICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuLy8gICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9ICBcclxuLy8gfVxyXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0IHtcclxuICAgIHdpZHRoOiAzMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8vIDo6bmctZGVlcCBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IHtcclxuLy8gICAgIHdpZHRoOiAzMDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vICAgZGl2LndpZHRoLWNvbnRhaW5lciA+ICoge1xyXG4vLyAgICAgd2lkdGg6IDI4MHB4O1xyXG4vLyAgIH1cclxuXHJcbjo6bmctZGVlcCAudGdpLWF0LWdyaWQtbGlzdC1wYXJhbXMgZmlndXJlLm1hdC1maWd1cmUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0ICAhaW1wb3J0YW50OyBcclxuICAgIHRvcDogNnB4ICFpbXBvcnRhbnQ7IFxyXG59XHJcbi8vIDo6bmctZGVlcCBtYXQtZ3JpZC10aWxlIHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuLy8gfVxyXG5cclxuLnRnaS1tYXQtZ3JpZC10aWxlLTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4udGdpLW1hdC1ncmlkLXRpbGUtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbn1cclxuLnRnaS1tYXQtZ3JpZC10aWxlLTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDclO1xyXG59XHJcblxyXG4udGdpLW1hdC1mb3JtLWZpZWxkLWY2IHtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcblxyXG4gICAvKiBmb250OiA0MDAgMTRweC8xOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyAqL1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtZm9ybS1maWVsZC1zaXplIC5tYXQtZm9ybS1maWVsZC1pbmZpeHtcclxuICAgIGJvcmRlci10b3A6IDAuMjQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogICBzaXplIGlucHV0ICovIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcGFyYW1zLm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtc2VsZWN0IHtcbiAgd2lkdGg6IDMyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAudGdpLWF0LWdyaWQtbGlzdC1wYXJhbXMgZmlndXJlLm1hdC1maWd1cmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQgIWltcG9ydGFudDtcbiAgdG9wOiA2cHggIWltcG9ydGFudDtcbn1cblxuLnRnaS1tYXQtZ3JpZC10aWxlLTAge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi50Z2ktbWF0LWdyaWQtdGlsZS0xIHtcbiAgbWFyZ2luLWxlZnQ6IDclO1xufVxuXG4udGdpLW1hdC1ncmlkLXRpbGUtMiB7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbn1cblxuLnRnaS1tYXQtZm9ybS1maWVsZC1mNiB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIC8qIGZvbnQ6IDQwMCAxNHB4LzE4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7ICovXG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1mb3JtLWZpZWxkLXNpemUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgYm9yZGVyLXRvcDogMC4yNDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4vKiAgIHNpemUgaW5wdXQgKi8iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ClientLoanAppParamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientLoanAppParamsComponent", function() { return ClientLoanAppParamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ClientLoanAppParamsComponent = class ClientLoanAppParamsComponent {
    constructor(fb) {
        this.fb = fb;
        this.currentAmortizType = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loanParamsSend = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._curAmortizType = 0;
        this._prepareParams = 0;
    }
    get curAmortizType() {
        return this._curAmortizType;
    }
    set curAmortizType(val) {
        this._curAmortizType = val;
        this.currentAmortizType.emit(val);
    }
    get prepareLoanParams() {
        return this._prepareParams;
    }
    set prepareLoanParams(val) {
        this._prepareParams = val;
        if (this._prepareParams !== 0) {
            this.loanParamsSend.emit(this.loanParamsFG.value);
        }
    }
    getInitLoanAppParams() {
        return {
            amortType: 0,
            loanAmount: this.productData.defaultLoanAmount,
            interestRate: this.productData.defaultInterestRate,
            installment: this.productData.defaultInstallment,
            interestRate2: this.productData.defaultInterestRate,
            term: this.productData.defaultTerm,
            disbursDate: this.productData.defaultDisbursementDate,
            firstDisbursDate: this.productData.firstDisbursementDate,
            isFixedRepaymentDate: this.productData.fixedRepaymentDate,
            arrearsGraceDay: ''
        };
    }
    ngOnInit() {
        // console.log('LoanAppParamsComponent.ngOnInit() MatSelect: %O', this.amortizTypeSelect); // -
        this.prepareLoanParams = 0;
        this.loanParamsFG = this.fb.group({
            amortType: [''],
            loanAmount: [''],
            interestRate: [''],
            installment: [''],
            interestRate2: [''],
            term: [''],
            disbursDate: [''],
            firstDisbursDate: [''],
            isFixedRepaymentDate: [''],
            arrearsGraceDay: ['']
        });
        this.loanParamsFG.patchValue(this.getInitLoanAppParams());
    }
    ngAfterViewInit() {
        // console.log('LoanAppParamsComponent.ngAfterViewInit() MatSelect: %O', this.amortizTypeSelect);
    }
    amortizTypeChanged(value) {
        console.log('CHANGE LoanAppParamsComponent.amortizTypeChanged() value=%O type=%s ', value, typeof (value));
        this.curAmortizType = value;
    }
    onFormSubmit({ value, valid }) {
        console.log('SYNC ENTER LoanAppParamsComponent.onFormSubmit(): form.value: %O form.valid: %s', value, valid);
    }
};
ClientLoanAppParamsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], ClientLoanAppParamsComponent.prototype, "productData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('current-amortiz-type')
], ClientLoanAppParamsComponent.prototype, "currentAmortizType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('loan-params-get')
], ClientLoanAppParamsComponent.prototype, "loanParamsSend", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('loan-params-prepare')
], ClientLoanAppParamsComponent.prototype, "prepareLoanParams", null);
ClientLoanAppParamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-params',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-params.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-params.component.scss */ "./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.scss")).default]
    })
], ClientLoanAppParamsComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .tgi-mat-card-identificaton.mat-card {\n  margin-bottom: -50px;\n  width: 100%;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n/* visible after loaded */\n\n/*\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1.0;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0.0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1.0;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0.0;\n}\n\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2lkZW50aWZpY2F0aW9ucy9pZGVudGlmaWNhdGlvbi9jbGllbnQtZGV0YWlsLWlkZW50aWZpY2F0aW9uLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9pZGVudGlmaWNhdGlvbnMvaWRlbnRpZmljYXRpb24vY2xpZW50LWRldGFpbC1pZGVudGlmaWNhdGlvbi12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREdBLHlCQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2lkZW50aWZpY2F0aW9ucy9pZGVudGlmaWNhdGlvbi9jbGllbnQtZGV0YWlsLWlkZW50aWZpY2F0aW9uLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWlkZW50aWZpY2F0b24ubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbiAgd2lkdGg6IDEwMCU7IFxufVxuXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cbi8qXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxLjA7XG59XG5cbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIG9wYWNpdHk6IDAuMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMS4wO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAwLjA7XG59XG5cbiovIiwiOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtaWRlbnRpZmljYXRvbi5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IC01MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG4vKlxuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMS4wO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAwLjA7XG59XG5cbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIG9wYWNpdHk6IDEuMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMC4wO1xufVxuXG4qLyJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ClientDetailIdentificationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailIdentificationViewComponent", function() { return ClientDetailIdentificationViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _identification_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./identification-image.service */ "./src/app/clients/client-detail/identifications/identification/identification-image.service.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../auth/user.service */ "./src/app/auth/user.service.ts");









let ClientDetailIdentificationViewComponent = class ClientDetailIdentificationViewComponent {
    // ------- LazyLoadImage -----------------------------------
    constructor(
    // private snackBarSrv: MatSnackBar 
    identificationImageService, entityStateService, snackBarSrv, userSrv) {
        this.identificationImageService = identificationImageService;
        this.entityStateService = entityStateService;
        this.snackBarSrv = snackBarSrv;
        this.userSrv = userSrv;
        this.curIdentificationImage$ = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isIdentificationImageChanged$ = null;
        // --------------------------------------------------------------
        this.dataUrl$ = null;
        this.src$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.errorImage = './../../../../../assets/img/errorImage.jpg'; // 'https://i.imgur.com/XkU4Ajf.png';
        this.defaultImage = './../../../../../assets/img/defaultImage.jpg'; // 'https://www.placecage.com/300/300';
    }
    ngOnInit() {
        this.curIdentificationImage$ = this.identificationImageService.curIdentificationImage$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((body) => {
            console.log('**** ClientDetailIdentificationViewComponent ngOnInit() body -> %o', body);
            /*
            if (!this.identificationImageService.isIdentificationImageNotEmpty(body)) {
              return null;
            }
            */
            return body;
        }));
        // ------- LazyLoadImage -----------------------------------
        // https://www.npmjs.com/package/ng-lazyload-image
        // > npm install ng-lazyload-image --save
        // get from Api new url
        const urlLazyLoadImage = 'https://dev-tgibrookscapital-com.s3.us-west-2.amazonaws.com/clients/1/identifications/0b5f4bd8-bcfe-4b29-b1fb-62cec950d420?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200418T175447Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86399&X-Amz-Credential=AKIAVERWYGLSBNYCWQMP%2F20200418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=c7fe4468686850d9e638d66757ab427bc0e32c73266864bdb298613e28a0f58c';
        // const  urlLazyLoadImage = 'https://elasticbeanstalk-us-west-1-866541310131-cors-test.s3-us-west-2.amazonaws.com/test/Driver_1.png';
        //  const  urlLazyLoadImage = 'https://elasticbeanstalk-us-west-1-866541310131-cors-test.s3-us-west-2.amazonaws.com/test/Driver_1.jpg';
        // ------
        // const urlLazyLoadImage =  'https://pacersnacksacks.com/api/clients/2/identifications/3/files/7441121b-2c3d-413f-bc66-65f4ee378e7c';
        //const urlLazyLoadImage = `${environment.apiUrl}/${this.identificationData.imageUrl}`;
        // this.rxjsFromImageMe$ = from([urlLazyLoadImage]);
        // ------- LazyLoadImage -----------------------------------
        this.identificationImageService.loadIdentificationImage(this.entityStateService, this.identificationData.imageUrl);
        // ---------------------  
        this.isIdentificationImageChanged$ = this.entityStateService.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            console.log(`\tPIPE: ClientDetailIdentificationViewComponent.OnInit() IsEntityChangedInterface:%O`, r);
            // this.stateIsEnd += ` ${r.isEnd};`;
            // this.stateOp += ` ${r.op};`;
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    // this.isVisible = true; // netesa-
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_err'
                    });
                    return { op: 'DELETE', isEnd: true, opResult: 'ERROR' };
                }
                else if (r.isEnd && r.opResult === _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS) {
                    this.simpleSnackBarRef =
                        this.snackBarSrv.open(`Selected Client Detail has been deleted!`, 'X', {
                            duration: 0,
                            panelClass: 'mat-snack-bar-container_info'
                        });
                    return { op: 'DELETE', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    // ---------------------
    getImageUrl(src) {
        return src;
        // 'https://pacersnacksacks.com/api/clients/2/identifications/3/files/7441121b-2c3d-413f-bc66-65f4ee378e7c';
        // this.identificationData.imageUrl;
        // return 'https://material.angular.io/assets/img/examples/shiba2.jpg';
    }
    ngOnDestroy() {
        /*
        if (this.simpleSnackBarRef != null) {
          this.simpleSnackBarRef.dismiss();
          this.simpleSnackBarRef = null;
        }
        */
    }
};
ClientDetailIdentificationViewComponent.ctorParameters = () => [
    { type: _identification_image_service__WEBPACK_IMPORTED_MODULE_6__["IdentificationImageService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('identificationData')
], ClientDetailIdentificationViewComponent.prototype, "identificationData", void 0);
ClientDetailIdentificationViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-identification-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-identification-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-identification-view.component.scss */ "./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.scss")).default]
    })
], ClientDetailIdentificationViewComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* ----------------- */\n.tgi-body-component {\n  padding-top: 32px;\n  padding-left: 30px;\n}\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n.flex-column-left {\n  display: flex;\n  /* border: 1px solid grey;  */\n}\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n  width: 100%;\n}\n.flex-item {\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n.tgi-mat-card-left {\n  min-width: 350px;\n  /* width: auto;  */\n}\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n.tgi-mat-card-title-score {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n.tgi-button-margin {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2lkZW50aWZpY2F0aW9ucy9pZGVudGlmaWNhdGlvbi9jbGllbnQtZGV0YWlsLWlkZW50aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvaWRlbnRpZmljYXRpb25zL2lkZW50aWZpY2F0aW9uL2NsaWVudC1kZXRhaWwtaWRlbnRpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsc0JBQUE7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ0hGO0FETUE7RUFFRSxhQUFBO0VBRUEsNkJBQUE7QUNMRjtBRE9BO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBRUEsOEJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUNSRjtBRFdBO0VBRUUsNkJBQUE7RUFDQSxXQUFBO0FDVEY7QURZQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUNURjtBRFdBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDUkY7QURXQTtFQUVFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7QUNWRjtBRGFBO0VBQ0UsaUJBQUE7QUNWRiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9pZGVudGlmaWNhdGlvbnMvaWRlbnRpZmljYXRpb24vY2xpZW50LWRldGFpbC1pZGVudGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG4uZmxleC1jb2x1bW4tcmlnaHQge1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBtYXJnaW4tbGVmdDogNXB4O1xuXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcblxuICB3aWR0aDogMTAwJTtcbn1cblxuLmZsZXgtaXRlbSB7XG5cbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICAvKiB3aWR0aDogYXV0bzsgICovXG59XG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1jYXJkLXRpdGxlLXNjb3JlIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4iLCIvKiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4LWl0ZW0ge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBibHVlOyAgKi9cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIG1pbi13aWR0aDogMzUwcHg7XG4gIC8qIHdpZHRoOiBhdXRvOyAgKi9cbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtcmlnaHQubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtY2FyZC10aXRsZS1zY29yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ClientDetailIdentificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailIdentificationComponent", function() { return ClientDetailIdentificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");






let ClientDetailIdentificationComponent = class ClientDetailIdentificationComponent {
    constructor(activatedRoute, router, userSrv, 
    // protected clientDetailOverviewStateSrv: EntityStateService,
    clientDetailOverviewService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userSrv = userSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.currentUser$ = null;
        this.currentClientDetail$ = null;
        // --------------------------------------------------------------
        // private simpleSnackBarRef: MatSnackBarRef<SimpleSnackBar> = null;
        // public isClientDetailOverviewChanged$: Observable<OpStateInterface> = null;
        // --------------------------------------------------------------
        // protected stateIsEnd = '';
        // protected stateOp = '';
        // ----------------
        this.activatedRouteParamMap$ = null;
        // public curIdentification: any;
        this.clientDetailOverview = null; //  clientOverview
    }
    ngOnInit() {
        // ---------------------
        this.activatedRouteParamMap$ = this.activatedRoute.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((params) => {
            // console.log('ClientDetailOverviewComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', params.get('identificationId'));
            return params.get('identificationId');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((identificationId) => {
            // console.log('*** ClientDetailOverviewComponent activatedRouteParentParams$ activatedRoute.parent.params -> %o', identificationId);
            this.identificationId = +identificationId;
        }));
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((user) => {
            if (this.userSrv.isAnonymUser(user)) {
                // this.clientDetailOverviewService.clearClientDetailOverview();
                this.clientDetailOverviewService.clearClientDetail();
            }
        }));
        // ---------------------
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetail$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((client) => {
            if (!this.clientDetailOverviewService.isClientDetailNotEmpty(client)) {
                return null;
            }
            this.curClient = client;
            return client;
        }));
        // ---------------------
        /*
            this.isClientDetailOverviewChanged$ = this.clientDetailOverviewStateSrv.isEntityChanged$
                .pipe(
                    map((r: IsEntityChangedInterface): OpStateInterface   => {
                      // this.stateIsEnd += ` ${r.isEnd};`;
                      // this.stateOp += ` ${r.op};`;
        
                      // this.isVisible = false;
        
                      if (r.op === EntityStateEnum.NOSET) {
                        if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
                          if (this.simpleSnackBarRef != null) {
                            this.simpleSnackBarRef.dismiss();
                            this.simpleSnackBarRef = null;
                          }
                          return {op: 'NOSET', isEnd: false, opResult: 'NOSET'};
                        }
                      } else if (r.op === EntityStateEnum.LOAD) {
                        if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
                          if (this.simpleSnackBarRef != null) {
                            this.simpleSnackBarRef.dismiss();
                            this.simpleSnackBarRef = null;
                          }
        
                          return {op: 'LOAD', isEnd: false, opResult: 'NOSET'};
                        } else if (r.isEnd && r.opResult === EntityChangeResultEnum.ERROR) {
                          this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`,
                              'X', {
                                duration: 0,
                                panelClass: 'mat-snack-bar-container_err'
                              });
                          return {op: 'LOAD', isEnd: true, opResult: 'ERROR'};
                        } else if (r.isEnd && r.opResult === EntityChangeResultEnum.SUCCESS) {
        
                          // this.isVisible = true; // netesa-
                          return {op: 'LOAD', isEnd: true, opResult: 'SUCCESS'};
                        }
                      } else if (r.op === EntityStateEnum.DELETE) {
                        if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
                          if (this.simpleSnackBarRef != null) {
                            this.simpleSnackBarRef.dismiss();
                            this.simpleSnackBarRef = null;
                          }
                          return {op: 'DELETE', isEnd: false, opResult: 'NOSET'};
                        } else if (!r.isEnd && r.opResult === EntityChangeResultEnum.ERROR) { // Error
                          this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`,
                              'X', {
                                duration: 0,
                                panelClass: 'mat-snack-bar-container_err'
                              });
                          return {op: 'DELETE', isEnd: true, opResult: 'ERROR'};
                        } else if (r.isEnd && r.opResult === EntityChangeResultEnum.SUCCESS) {
                          this.simpleSnackBarRef =
                              this.snackBarSrv.open(`Selected Client Detail Overview has been deleted!`,
                                  'X', {
                                    duration: 0,
                                    panelClass: 'mat-snack-bar-container_info'
                                  });
                          return {op: 'DELETE', isEnd: true, opResult: 'SUCCESS'};
                        }
                      }
                    })
                );
          */
    }
    // ---------------------
    getCurIdentification() {
        if (this.curClient &&
            this.curClient.identifications &&
            this.identificationId) {
            return this.curClient.identifications.find(identification => {
                return identification.id === this.identificationId;
            });
        }
        else {
            return null;
        }
    }
    getFullName(firstName, lastName, middleName) {
        let fullName = firstName + ' ' + lastName;
        if (middleName) {
            fullName = fullName + ' ' + middleName.trim();
        }
        return fullName;
    }
    getPhoneNumber(phoneNumber) {
        return phoneNumber;
    }
    getEmail(email) {
        return email;
    }
    isProfileImage(profileImage) {
        if (profileImage) {
            return true;
        }
        return false;
    }
    getProfileImageUrl(profileImage) {
        return profileImage;
    }
    getAddressTypes(addressTypes) {
        let types = [];
        for (let i = 0; i < addressTypes.length; i++) {
            types[i] = addressTypes[i];
            if (i < (addressTypes.length - 1)) {
                types[i] += ',';
            }
        }
        return types;
    }
    onGetCreditScore() {
        /*
        console.log('ClientDetailOverviewComponent.onGetCreditScore() %O');
    
        // this.router.navigateByUrl('/');
        this.router.navigate(['creditscoreinquiry'], {relativeTo: this.activatedRoute});
        */
    }
    onGetBankStatement() {
        // ???
    }
    ngOnDestroy() {
        /*
        if (this.simpleSnackBarRef != null) {
          this.simpleSnackBarRef.dismiss();
          this.simpleSnackBarRef = null;
        }
        */
    }
};
ClientDetailIdentificationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_5__["ClientDetailService"] }
];
ClientDetailIdentificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-detail-identification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-detail-identification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.html")).default,
        providers: [
        // ClientFinancialsStateService
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-detail-identification.component.scss */ "./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.scss")).default]
    })
], ClientDetailIdentificationComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/identifications/identification/identification-image.service.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/identifications/identification/identification-image.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: WrongIdentificationImage, IdentificationImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongIdentificationImage", function() { return WrongIdentificationImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificationImageService", function() { return IdentificationImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");








/*
export interface IdentificationImageInterface {
   body: string;
}

export const WrongIdentificationImage: IdentificationImageInterface = {
  body: 'no image'
}
*/
const WrongIdentificationImage = '';
let IdentificationImageService = class IdentificationImageService {
    constructor(http, domSanitizer) {
        this.http = http;
        this.domSanitizer = domSanitizer;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        this.curIdentificationImageSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curIdentificationImage$ = this.curIdentificationImageSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(WrongIdentificationImage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curIdentificationImage = WrongIdentificationImage;
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curIdentificationImage$.subscribe(body => {
            this.curIdentificationImage = body; // WrongIdentificationImage
        });
    }
    // ------------------------------------------------------------
    isIdentificationImageNotEmpty(body) {
        if (!body) {
            throw new Error('Parameter image body is null');
        }
        if (body === WrongIdentificationImage) {
            return false;
        }
        else {
            return true;
        }
    }
    // ---
    isIdentificationImageEmpty() {
        return !this.isIdentificationImageNotEmpty(this.curIdentificationImage);
    }
    // ---
    clearIdentificationImage() {
        if (!this.isIdentificationImageEmpty()) {
            this.curIdentificationImageSub$.next(WrongIdentificationImage);
        }
    }
    // ------------------------------------------------------------
    loadImage$(url) {
        // url= // 'https://dev-tgibrookscapital-com.s3.us-west-2.amazonaws.com/clients/2/identifications/7441121b-2c3d-413f-bc66-65f4ee378e7c?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200416T151811Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAVERWYGLSBNYCWQMP%2F20200416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=4a9466dcbc52a19006f3323fe3a3ce0b8adac3486f0ba89b7012d4355c81b237';
        // 'https://elasticbeanstalk-us-west-1-866541310131-cors-test.s3-us-west-2.amazonaws.com/test/1_FRONT.jpg';
        return this.http.get(url, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                // .set("Content-Type", "application/json") // netesa
                .set("Accept", "application/json, text/plain, */*")
                // .set("Sec-Fetch-Dest", "empty")
                // .set("Sec-Fetch-Mode", "cors")
                // .set("Sec-Fetch-Site", "cross-site")
                // .set("Host", "media3.giphy.com")
                .set('Content-Type', 'application/octet-stream'),
            // observe: 'response',  // error !!!
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log('===== IdentificationImageService loadIdentificationImag() catchError -> %o', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('==== ERROR');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(e => {
            console.log('-----  1 IdentificationImageService loadIdentificationImag() e -> %o', e);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(e => this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(e))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(n => {
            console.log('----- 2 IdentificationImageService loadIdentificationImag() n -> %o', n);
        }));
    }
    // ------------------------------------------------------------
    loadIdentificationImage(stateService, imageUrl) {
        console.log('&&&& IdentificationImageService loadIdentificationImag() imageUrl -> %o', imageUrl);
        if (!imageUrl) { // ???
            return;
        }
        if (stateService) {
            const isClentsChangedEnter = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isClentsChangedEnter);
        }
        this.http.get(`${this.apiUrl}/${imageUrl}`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            // .set("Content-Type", "application/json") // netesa
            // .set("Accept", "application/json")
        })
            .pipe(
        // delay(1200), // netesa
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log('&&&& IdentificationImageService loadIdentificationImag() catchError -> %o', err);
            let retMsg = 'ERROR';
            let msg;
            let isBodyChangedError = null;
            if (stateService) {
                isBodyChangedError = {
                    op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                    isEnd: true,
                    opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR,
                    messageType: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR,
                    message: ''
                };
            }
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                const status = err.status;
                if (status === 401) {
                    retMsg = 'JWT_EXPIRED';
                    msg = 'Authentication has been expired!';
                    isBodyChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                    isBodyChangedError.message = msg;
                }
                else if (status >= 500) {
                    msg = err.error ? (err.error.error ? err.error.error.message : err.message) : err.message;
                    isBodyChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                    isBodyChangedError.message = msg;
                }
                else {
                    retMsg = 'ERROR';
                    msg = err.statusText;
                    isBodyChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                    isBodyChangedError.message = msg;
                }
            }
            else {
                retMsg = 'ERROR';
                msg = 'UNKNOWN ERROR';
                isBodyChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isBodyChangedError.message = msg;
            }
            if (stateService) {
                stateService.next(isBodyChangedError);
            }
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])('ERROR');
        }), 
        //                    delay(3000),  // todo  mak delay test snipper !!!,
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((p) => {
            console.log(`\t *** IdentificationImageService loadIdentificationImag()  map: p -> %O`, p);
            let retObj;
            let retMsg;
            if (typeof p === 'object') {
                retObj = p;
                retMsg = 'OK';
            }
            return { token: 'OK', body: retObj };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe(
        /*
          this.http.get(targetUrl,{responseType:ResponseContentType.Blob})
          .catch((err)=>{return [do yourself]})
          .subscribe((res:Response)=>{
          var a = document.createElement("a");
          a.href = URL.createObjectURL(res.blob());
          a.download = fileName;
          // start download
          a.click();
          })
        */
        (rezObj) => {
            console.log(`\t ***** SUBSCRIBE: IdentificationImageService loadIdentificationImag().subscribe(NEXT): rezObj: %O`, rezObj);
            if (rezObj.token === 'ERROR') {
                if (stateService) {
                    const isBodyChangedError = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR,
                    };
                    stateService.next(isBodyChangedError);
                }
                // this.clearBodyList();
            }
            else if (rezObj.token === 'OK') {
                if (stateService) {
                    this.curIdentificationImageSub$.next(rezObj.body); // BEFOR stateService.next()!
                    // this.curIdentificationImageSub$.next(Object.assign(rezObj.body, {profileImage: this.profileImage})); // BEFOR stateService.next()!
                    const isBodyChangedExit = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS
                    };
                    stateService.next(isBodyChangedExit);
                }
                // this.curIdentificationImageSub$.next(rezObj.body); 
            }
        });
    }
};
IdentificationImageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }
];
IdentificationImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IdentificationImageService);



/***/ }),

/***/ "./src/app/clients/client-detail/loan-symmary/loan-symmary.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/clients/client-detail/loan-symmary/loan-symmary.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tgi-mat-grid-list-symmary {\n  margin-bottom: 20px;\n}\n\n.tgi-digit-symmary {\n  align-self: center;\n}\n\n.tgi-text-symmary {\n  align-self: center;\n}\n\n.tgi-symmary-h3 {\n  margin: 4px;\n}\n\n.tgi-mat-card-title-score {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  padding-top: 0px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2xvYW4tc3ltbWFyeS9sb2FuLXN5bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9sb2FuLXN5bW1hcnkvbG9hbi1zeW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsbUJBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtBQ0dGOztBRERBO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxvQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL2xvYW4tc3ltbWFyeS9sb2FuLXN5bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50Z2ktbWF0LWdyaWQtbGlzdC1zeW1tYXJ5IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi50Z2ktZGlnaXQtc3ltbWFyeSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi50Z2ktdGV4dC1zeW1tYXJ5IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnRnaS1zeW1tYXJ5LWgzIHtcbiAgbWFyZ2luOiA0cHg7XG59XG4udGdpLW1hdC1jYXJkLXRpdGxlLXNjb3JlIHtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4iLCIudGdpLW1hdC1ncmlkLWxpc3Qtc3ltbWFyeSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50Z2ktZGlnaXQtc3ltbWFyeSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRnaS10ZXh0LXN5bW1hcnkge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50Z2ktc3ltbWFyeS1oMyB7XG4gIG1hcmdpbjogNHB4O1xufVxuXG4udGdpLW1hdC1jYXJkLXRpdGxlLXNjb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/loan-symmary/loan-symmary.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/clients/client-detail/loan-symmary/loan-symmary.component.ts ***!
  \******************************************************************************/
/*! exports provided: LoanSymmaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanSymmaryComponent", function() { return LoanSymmaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoanSymmaryComponent = class LoanSymmaryComponent {
    constructor() {
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
    }
    ngOnInit() {
    }
    getScore(data) {
        let value = '';
        if (data) {
            if (data.score) {
                return value + data.score;
            }
        }
        return value;
    }
    getSummary(data) {
        let value = '';
        if (data) {
            if (data.summary) {
                return value + data.summary;
            }
        }
        return value;
    }
    ngOnDestroy() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LoanSymmaryComponent.prototype, "clientData", void 0);
LoanSymmaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loan-symmary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loan-symmary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/loan-symmary/loan-symmary.component.html")).default,
        providers: [],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loan-symmary.component.scss */ "./src/app/clients/client-detail/loan-symmary/loan-symmary.component.scss")).default]
    })
], LoanSymmaryComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep app-personal-loan-app-detail.tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep app-personal-loan-app-detail.tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n  ::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n    padding-top: 20px;\n    padding-left: 64px; \n    padding-bottom: 0px;\n  }\n  */\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\napp-personal-loan-app-detail.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  display: inline;\n}\n\n.tgi-button-deny {\n  margin-left: 32px;\n}\n\n::ng-deep .tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n  padding-top: 20px;\n  padding-left: 64px;\n  padding-bottom: 0px;\n}\n*/\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\n.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  /* display: inline; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL3BlcnNvbmFsLWxvYW4tYXBwLWRldGFpbC9wZXJzb25hbC1sb2FuLWFwcC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9wZXJzb25hbC1sb2FuLWFwcC1kZXRhaWwvcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7Ozs7OztHQUFBOztBQU9BO0VBQ0ksaUJBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0FDSko7O0FET0E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ1BKOztBRFVBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FDUko7O0FEV0E7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1ZKOztBRGNBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNaSjs7QURlQTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGVBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxJQUFBO0VBQ0Esc0JBQUE7QUNaSjs7QURlQTtFQUNJLGtCQUFBO0FDWko7O0FEZUE7RUFDSSx3QkFBQTtBQ1pKOztBRGVBO0VBQ0ksZ0JBQUE7QUNaSjs7QURlQTtFQUNJLGlCQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0FDWko7O0FEZUEseUJBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDWko7O0FEZUE7RUFDSSxVQUFBO0FDWko7O0FEZUE7RUFDSSxVQUFBO0FDWko7O0FEZUE7RUFDSSxVQUFBO0FDWko7O0FEZUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGVBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FDWko7O0FEZUE7RUFDSSxpQkFBQTtBQ1pKOztBRGVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7QUNaSjs7QURlQTtFQUNJLGlCQUFBO0FDWko7O0FEZ0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUNmSjs7QURrQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUdBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2xCSjs7QURvQkE7Ozs7OztDQUFBOztBQU9BO0VBQ0ksaUJBQUE7QUNqQko7O0FEb0JBO0VBQ0ksa0JBQUE7QUNqQko7O0FEb0JBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNwQko7O0FEdUJBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FDckJKOztBRHVCQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDdEJKOztBRHlCQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEMEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUN2Qko7O0FEMEJBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDdkJKOztBRHlCQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkE7RUFDSSxJQUFBO0VBQU8sc0JBQUE7QUNyQlg7O0FEd0JBO0VBQ0ksa0JBQUE7QUNyQko7O0FEdUJBO0VBQ0ksd0JBQUE7QUNwQko7O0FEc0JBO0VBQ0ksZ0JBQUE7QUNuQko7O0FEcUJBO0VBQ0ksaUJBQUE7QUNsQko7O0FEcUJBO0VBQ0ksZUFBQTtBQ2xCSjs7QURxQkEseUJBQUE7O0FBQ0E7RUFDSSxVQUFBO0FDbEJKOztBRHFCQTtFQUNJLFVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksVUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxVQUFBO0FDbEJKOztBRHFCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDbEJKOztBRHFCQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ2xCSjs7QURvQkE7RUFDSSxxQkFBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9wZXJzb25hbC1sb2FuLWFwcC1kZXRhaWwvcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGFwcC1wZXJzb25hbC1sb2FuLWFwcC1kZXRhaWwudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gICovXHJcbi50Z2ktYm9keS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMycHg7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xyXG59XHJcblxyXG4uZmxleC1jb2x1bW4tbGVmdCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbi1yaWdodCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgO1xyXG59XHJcblxyXG5hcHAtcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLmZsZXgtaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50Z2ktbWF0LWltZy1zaXplIHtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWxlZnQge1xyXG4gICAgLyptaW4td2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcclxuICAgIC8qICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG59XHJcblxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXHJcbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbn1cclxuXHJcbi50Z2ktaWNvbi1lZGl0LXNpemUge1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWljb24tdGVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuLnRnaS1pY29uLXNpemUtdGJsIHtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWFkZHJlc3MtdHlwZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWRlbnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMTBweDsgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuXHJcblxyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi8qXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRhYmxlLm1hdC1jYXJkLXRpdGxlIC5tYXQtaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA2NHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuKi9cclxuLnRnaS1ib2R5LWNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbi1sZWZ0IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG4uZmxleC1jb2x1bW4tcmlnaHQge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDs7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGdpLW1hdC1pbWctc2l6ZSB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcclxuICAgIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcclxuICAgIC8qICovICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuOjpuZy1kZWVwICAgIC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbn1cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSAgIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cclxuOjpuZy1kZWVwICAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwICAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxufVxyXG5cclxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWljb24tdGJsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4udGdpLWljb24tc2l6ZS10Ymwge1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbn1cclxuLnRnaS1hZGRyZXNzLXR5cGUge1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lOyAqL1xyXG59XHJcbiIsIi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbjo6bmctZGVlcCBhcHAtcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLWRldGFpbC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLypcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7IFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgKi9cbi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLnRnaS1tYXQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDI1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDc1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG5hcHAtcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XG4gIC8qICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50Z2ktbWF0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50Z2ktY2FyZC1saW5lLWluZGVudC0yIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udGdpLWljb24tZWRpdC1zaXplIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLWljb24tc2l6ZS10Ymwge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWFkZHJlc3MtdHlwZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnRnaS1idXR0b24tZGVueSB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4vKlxuOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbiovXG4udGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi50Z2ktbWF0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAyNSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA3NSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XG4gIC8qICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50Z2ktbWF0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50Z2ktY2FyZC1saW5lLWluZGVudC0yIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udGdpLWljb24tZWRpdC1zaXplIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLWljb24tc2l6ZS10Ymwge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWFkZHJlc3MtdHlwZSB7XG4gIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PersonalLoanAppDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalLoanAppDetailComponent", function() { return PersonalLoanAppDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");








let PersonalLoanAppDetailComponent = class PersonalLoanAppDetailComponent {
    // --------------------------------------------------------------
    constructor(router, route, denyStateSrv, clientDetailOverviewService, snackBarSrv) {
        this.router = router;
        this.route = route;
        this.denyStateSrv = denyStateSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        // @Input('data-source') clientData: any;
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
        this.client = null;
        this.personalLoan = null;
        this.clientData = null;
        this.disabledButtons = false;
        // ---------------------
        this.simpleSnackBarRef = null;
        this.isDenyChanged$ = null;
    }
    ngOnInit() {
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.clientData = this.clientDetailOverviewService.curClientDetail;
        this.client = {
            id: this.clientData.id,
        };
        this.fetchPersonalLoanInfo();
        console.log("Fetching From personal loan app detail");
        // ---------------------
        this.isDenyChanged$ = this.denyStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`\tPIPE: PersonalLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 2000,
                        panelClass: 'mat-snack-bar-container_info'
                    });
                    // Disabled Buttons APPROVE DENY
                    this.disabledButtons = true;
                    /*
                       this.simpleSnackBarRef.afterDismissed()
                       .subscribe(
                         (res: MatSnackBarDismiss) => {
     
                           // this.router.navigateByUrl('/clients');
                         }
                       );
                   */
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    fetchPersonalLoanInfo() {
        console.log("Fetching From personal loan app detail - client ddata " + this.clientData);
        if (this.clientData.loanApplications != undefined &&
            Array.isArray(this.clientData.loanApplications) &&
            this.clientData.loanApplications.length > 0) {
            console.log("Fetching From personal loan app detail - client ddata loop " + this.clientData.loanApplications);
            this.personalLoan = this.clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'requested' &&
                    loan.type.toLocaleLowerCase() === 'personal';
            });
            console.log('PersonalLoanAppComponent.fetchPersonalLoanInfo() %O', this.personalLoan);
            if (this.personalLoan != undefined) {
            }
        }
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
PersonalLoanAppDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_7__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
PersonalLoanAppDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-loan-app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-loan-app-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-loan-app-detail.component.scss */ "./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.scss")).default]
    })
], PersonalLoanAppDetailComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep app-personal-loan-app.tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep app-personal-loan-app.tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n  ::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n    padding-top: 20px;\n    padding-left: 64px; \n    padding-bottom: 0px;\n  }\n  */\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\napp-personal-loan-app.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  display: inline;\n}\n\n.tgi-button-deny {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL3BlcnNvbmFsLWxvYW4tYXBwL3BlcnNvbmFsLWxvYW4tYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvcGVyc29uYWwtbG9hbi1hcHAvcGVyc29uYWwtbG9hbi1hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFHQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTs7Ozs7O0dBQUE7O0FBT0E7RUFDSSxpQkFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLDRCQUFBO0FDUEo7O0FEVUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNSSjs7QURXQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVko7O0FEY0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDWEo7O0FEZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1pKOztBRGVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNaSjs7QURlQTtFQUNJLElBQUE7RUFDQSxzQkFBQTtBQ1pKOztBRGVBO0VBQ0ksa0JBQUE7QUNaSjs7QURlQTtFQUNJLHdCQUFBO0FDWko7O0FEZUE7RUFDSSxnQkFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7QUNaSjs7QURlQSx5QkFBQTs7QUFDQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUNaSjs7QURlQTtFQUNJLGlCQUFBO0FDWko7O0FEZUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGVBO0VBQ0ksZUFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWRldGFpbC9wZXJzb25hbC1sb2FuLWFwcC9wZXJzb25hbC1sb2FuLWFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGFwcC1wZXJzb25hbC1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcblxyXG5cclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLypcclxuICA6Om5nLWRlZXAgIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YWJsZS5tYXQtY2FyZC10aXRsZSAubWF0LWljb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgKi9cclxuLnRnaS1ib2R5LWNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbi1sZWZ0IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICA7XHJcbn1cclxuXHJcbmFwcC1wZXJzb25hbC1sb2FuLWFwcC5mbGV4LWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGdpLW1hdC1pbWctc2l6ZSB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcclxuICAgIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XHJcbiAgICAvKiAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRnaS1tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxufVxyXG5cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTIge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4vKiB2aXNpYmxlIGFmdGVyIGxvYWRlZCAqL1xyXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgb3BhY2l0eTogMC4wO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgb3BhY2l0eTogMC4wO1xyXG59XHJcblxyXG4udGdpLWljb24tZWRpdC1zaXplIHtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRlc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnRnaS1idXR0b24taWNvbi10Ymwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi50Z2ktaWNvbi1zaXplLXRibCB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxufVxyXG5cclxuLnRnaS1hZGRyZXNzLXR5cGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1kZW55IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4iLCIubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4vKlxuICA6Om5nLWRlZXAgIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YWJsZS5tYXQtY2FyZC10aXRsZSAubWF0LWljb24ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNjRweDsgXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuICAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4udGdpLW1hdC1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogMjUlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogNzUlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbmFwcC1wZXJzb25hbC1sb2FuLWFwcC5mbGV4LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtaW1nLXNpemUge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICAvKm1pbi13aWR0aDogMzAwcHg7ICovXG4gIHdpZHRoOiBhdXRvO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1oZWFkZXItaW1hZ2Uge1xuICAvKiAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1pY29uLnRnaS1tYXQtaWNvbi1zaXplIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiB2aXNpYmxlIGFmdGVyIGxvYWRlZCAqL1xuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi50Z2ktYnV0dG9uLWljb24tdGVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRnaS1idXR0b24taWNvbi10Ymwge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLnRnaS1pY29uLXNpemUtdGJsIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1hZGRyZXNzLXR5cGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50Z2ktYnV0dG9uLWRlbnkge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PersonalLoanAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalLoanAppComponent", function() { return PersonalLoanAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/deny-loan-application.service */ "./src/app/clients/client-detail/services/deny-loan-application.service.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");








let PersonalLoanAppComponent = class PersonalLoanAppComponent {
    // --------------------------------------------------------------
    constructor(router, route, denyLoanApplicationService, denyStateSrv, snackBarSrv) {
        this.router = router;
        this.route = route;
        this.denyLoanApplicationService = denyLoanApplicationService;
        this.denyStateSrv = denyStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
        this.client = null;
        this.personalLoan = null;
        this.disabledButtons = false;
        // ---------------------
        this.simpleSnackBarRef = null;
        this.isDenyChanged$ = null;
    }
    ngOnInit() {
        this.client = {
            id: this.clientData.id,
        };
        this.fetchPersonalLoanInfo();
        // ---------------------
        this.isDenyChanged$ = this.denyStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`\tPIPE: PersonalLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
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
                    // Disabled Buttons APPROVE DENY
                    this.disabledButtons = true;
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 0,
                        panelClass: 'mat-snack-bar-container_info'
                    });
                    this.simpleSnackBarRef.afterDismissed()
                        .subscribe((res) => {
                        this.router.navigateByUrl(`/clients/${this.client.id}/overview`);
                    });
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    fetchPersonalLoanInfo() {
        if (this.clientData.loanApplications != undefined &&
            Array.isArray(this.clientData.loanApplications) &&
            this.clientData.loanApplications.length > 0) {
            this.personalLoan = this.clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'requested' &&
                    loan.type.toLocaleLowerCase() === 'personal';
            });
            console.log('PersonalLoanAppComponent.fetchPersonalLoanInfo() %O', this.personalLoan);
            if (this.personalLoan != undefined) {
            }
        }
    }
    onApproveBtnClick() {
        // console.log('PersonalLoanAppComponent.onApproveBtnClick() %O', this.personalLoan);
        // this.router.navigateByUrl('/');
        this.router.navigate([`${this.personalLoan.productId}`, 'personal-loan-app'], { relativeTo: this.route });
    }
    onDenyBtnClick() {
        console.log('PersonalLoanAppComponent.onDenyBtnClick() clientId -> %O loanApplication.id -> %O', this.client.id, this.personalLoan.id);
        this.denyLoanApplicationService.denyLoanApplication(+this.client.id, +this.personalLoan.id, this.denyStateSrv);
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
PersonalLoanAppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__["DenyLoanApplicationService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], PersonalLoanAppComponent.prototype, "clientData", void 0);
PersonalLoanAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-loan-app',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-loan-app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"], _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__["DenyLoanApplicationService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-loan-app.component.scss */ "./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.scss")).default]
    })
], PersonalLoanAppComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep app-personal-loan-app-detail.tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep app-personal-loan-app-detail.tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n  ::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n    padding-top: 20px;\n    padding-left: 64px; \n    padding-bottom: 0px;\n  }\n  */\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\napp-personal-loan-app-detail.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  display: inline;\n}\n\n.tgi-button-deny {\n  margin-left: 32px;\n}\n\n::ng-deep .tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep .tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n  padding-top: 20px;\n  padding-left: 64px;\n  padding-bottom: 0px;\n}\n*/\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\n.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  /* display: inline; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL3BlcnNvbmFsLWxvYW4tZGV0YWlsL3BlcnNvbmFsLWxvYW4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1kZXRhaWwvcGVyc29uYWwtbG9hbi1kZXRhaWwvcGVyc29uYWwtbG9hbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsaUJBQUE7RUFHQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTs7Ozs7O0dBQUE7O0FBT0E7RUFDSSxpQkFBQTtBQ0pKOztBRE9BO0VBQ0ksa0JBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUVBLHVCQUFBO0VBQ0EsdUJBQUE7RUFFQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLDRCQUFBO0FDUEo7O0FEVUE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNSSjs7QURXQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDVko7O0FEY0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FDWEo7O0FEZUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1pKOztBRGVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNaSjs7QURlQTtFQUNJLElBQUE7RUFDQSxzQkFBQTtBQ1pKOztBRGVBO0VBQ0ksa0JBQUE7QUNaSjs7QURlQTtFQUNJLHdCQUFBO0FDWko7O0FEZUE7RUFDSSxnQkFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7QUNaSjs7QURlQTtFQUNJLGVBQUE7QUNaSjs7QURlQSx5QkFBQTs7QUFDQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFVBQUE7QUNaSjs7QURlQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUNaSjs7QURlQTtFQUNJLGlCQUFBO0FDWko7O0FEZUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGVBO0VBQ0ksZUFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7QUNaSjs7QURnQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFFQSxpQkFBQTtFQUVBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUVBLGlCQUFBO0VBR0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDbEJKOztBRG9CQTs7Ozs7O0NBQUE7O0FBT0E7RUFDSSxpQkFBQTtBQ2pCSjs7QURvQkE7RUFDSSxrQkFBQTtBQ2pCSjs7QURvQkE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFFQSx1QkFBQTtFQUNBLHVCQUFBO0VBRUEsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7RUFDQSw0QkFBQTtBQ3BCSjs7QUR1QkE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUNyQko7O0FEdUJBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUQwQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3ZCSjs7QUQwQkE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUN2Qko7O0FEeUJBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQTtFQUNJLElBQUE7RUFBTyxzQkFBQTtBQ3JCWDs7QUR3QkE7RUFDSSxrQkFBQTtBQ3JCSjs7QUR1QkE7RUFDSSx3QkFBQTtBQ3BCSjs7QURzQkE7RUFDSSxnQkFBQTtBQ25CSjs7QURxQkE7RUFDSSxpQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxlQUFBO0FDbEJKOztBRHFCQSx5QkFBQTs7QUFDQTtFQUNJLFVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksVUFBQTtBQ2xCSjs7QURxQkE7RUFDSSxVQUFBO0FDbEJKOztBRHFCQTtFQUNJLFVBQUE7QUNsQko7O0FEcUJBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNsQko7O0FEcUJBO0VBQ0ksYUFBQTtFQUNBLHFCQUFBO0FDbEJKOztBRHFCQTtFQUNJLGlCQUFBO0FDbEJKOztBRHFCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDbEJKOztBRG9CQTtFQUNJLHFCQUFBO0FDakJKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL3BlcnNvbmFsLWxvYW4tZGV0YWlsL3BlcnNvbmFsLWxvYW4tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGFwcC1wZXJzb25hbC1sb2FuLWFwcC1kZXRhaWwudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGJsLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4OyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gICovXHJcbi50Z2ktYm9keS1jb21wb25lbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDMycHg7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xyXG59XHJcblxyXG4uZmxleC1jb2x1bW4tbGVmdCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbi1yaWdodCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgO1xyXG59XHJcblxyXG5hcHAtcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLmZsZXgtaXRlbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi50Z2ktbWF0LWltZy1zaXplIHtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWxlZnQge1xyXG4gICAgLyptaW4td2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcclxuICAgIC8qICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLWhlYWRlci5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xyXG59XHJcblxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXHJcbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAudGdpLW5vLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAwLjA7XHJcbn1cclxuXHJcbi50Z2ktaWNvbi1lZGl0LXNpemUge1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWljb24tdGVzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuLnRnaS1pY29uLXNpemUtdGJsIHtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWFkZHJlc3MtdHlwZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWRlbnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuXHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIC8qIHBhZGRpbmctbGVmdDogMTBweDsgKi9cclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuXHJcblxyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcbi8qXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRhYmxlLm1hdC1jYXJkLXRpdGxlIC5tYXQtaWNvbiB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA2NHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuKi9cclxuLnRnaS1ib2R5LWNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbi1sZWZ0IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG4uZmxleC1jb2x1bW4tcmlnaHQge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xyXG4gICAgcGFkZGluZy1yaWdodDogNDBweDs7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGdpLW1hdC1pbWctc2l6ZSB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcclxuICAgIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRnaS1tYXQtaGVhZGVyLWltYWdlIHtcclxuICAgIC8qICovICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuOjpuZy1kZWVwICAgIC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XHJcbn1cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaWNvbi50Z2ktbWF0LWljb24tc2l6ZSAgIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLyogdmlzaWJsZSBhZnRlciBsb2FkZWQgKi9cclxuOjpuZy1kZWVwICAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuOjpuZy1kZWVwICAudGdpLXZpc2libGUubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxLjA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcclxuICAgIG9wYWNpdHk6IDAuMDtcclxufVxyXG5cclxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxufVxyXG5cclxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi50Z2ktYnV0dG9uLWljb24tdGJsIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4udGdpLWljb24tc2l6ZS10Ymwge1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbn1cclxuLnRnaS1hZGRyZXNzLXR5cGUge1xyXG4gICAgLyogZGlzcGxheTogaW5saW5lOyAqL1xyXG59XHJcbiIsIi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbjo6bmctZGVlcCBhcHAtcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLWRldGFpbC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLypcbiAgOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7IFxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgKi9cbi50Z2ktYm9keS1jb21wb25lbnQge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cblxuLnRnaS1tYXQtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDI1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JleTsgICovXG59XG5cbi5mbGV4LWNvbHVtbi1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDc1JTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICAqL1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG5hcHAtcGVyc29uYWwtbG9hbi1hcHAtZGV0YWlsLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XG4gIC8qICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50Z2ktbWF0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50Z2ktY2FyZC1saW5lLWluZGVudC0yIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udGdpLWljb24tZWRpdC1zaXplIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLWljb24tc2l6ZS10Ymwge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWFkZHJlc3MtdHlwZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnRnaS1idXR0b24tZGVueSB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4vKlxuOjpuZy1kZWVwICAudGdpLW1hdC1jYXJkLXRpdGxlLWljb24tdGFibGUubWF0LWNhcmQtdGl0bGUgLm1hdC1pY29uIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbiovXG4udGdpLWJvZHktY29tcG9uZW50IHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi50Z2ktbWF0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAyNSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAqL1xufVxuXG4uZmxleC1jb2x1bW4tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiA3NSU7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmx1ZTsgICovXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1pbWctc2l6ZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG5cbi50Z2ktbWF0LWNhcmQtbGVmdCB7XG4gIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cbiAgd2lkdGg6IGF1dG87XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC1jYXJkLXJpZ2h0Lm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XG4gIC8qICovXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50Z2ktbWF0LWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi50Z2ktY2FyZC1saW5lLWluZGVudC0yIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi8qIHZpc2libGUgYWZ0ZXIgbG9hZGVkICovXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udGdpLWljb24tZWRpdC1zaXplIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1idXR0b24taWNvbi10ZXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGdpLWJ1dHRvbi1pY29uLXRibCB7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4udGdpLWljb24tc2l6ZS10Ymwge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4udGdpLWFkZHJlc3MtdHlwZSB7XG4gIC8qIGRpc3BsYXk6IGlubGluZTsgKi9cbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PersonalLoanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalLoanDetailComponent", function() { return PersonalLoanDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _services_client_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/client-detail.service */ "./src/app/clients/client-detail/services/client-detail.service.ts");








let PersonalLoanDetailComponent = class PersonalLoanDetailComponent {
    // --------------------------------------------------------------
    constructor(router, route, denyStateSrv, clientDetailOverviewService, snackBarSrv) {
        this.router = router;
        this.route = route;
        this.denyStateSrv = denyStateSrv;
        this.clientDetailOverviewService = clientDetailOverviewService;
        this.snackBarSrv = snackBarSrv;
        // @Input('data-source') clientData: any;
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
        this.client = null;
        this.personalLoan = null;
        this.clientData = null;
        this.disabledButtons = false;
        // ---------------------
        this.simpleSnackBarRef = null;
        this.isDenyChanged$ = null;
    }
    ngOnInit() {
        //  this.currentClientDetail$ = this.clientDetailOverviewService.curClientDetailOverview$
        this.clientData = this.clientDetailOverviewService.curClientDetail;
        this.client = {
            id: this.clientData.id,
        };
        this.fetchPersonalLoanInfo();
        console.log("Fetching From personal loan app detail");
        // ---------------------
        this.isDenyChanged$ = this.denyStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`\tPIPE: PersonalLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 2000,
                        panelClass: 'mat-snack-bar-container_info'
                    });
                    // Disabled Buttons APPROVE DENY
                    this.disabledButtons = true;
                    /*
                       this.simpleSnackBarRef.afterDismissed()
                       .subscribe(
                         (res: MatSnackBarDismiss) => {
     
                           // this.router.navigateByUrl('/clients');
                         }
                       );
                   */
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    fetchPersonalLoanInfo() {
        console.log("Fetching From personal loan app detail - client ddata " + this.clientData);
        if (this.clientData.loanApplications != undefined &&
            Array.isArray(this.clientData.loanApplications) &&
            this.clientData.loanApplications.length > 0) {
            console.log("Fetching From personal loan app detail - client ddata loop " + this.clientData.loanApplications);
            this.personalLoan = this.clientData.loanApplications.find(loan => {
                return loan.status &&
                    loan.status.toLocaleLowerCase() === 'requested' &&
                    loan.type.toLocaleLowerCase() === 'personal';
            });
            console.log('PersonalLoanAppComponent.fetchPersonalLoanInfo() %O', this.personalLoan);
            if (this.personalLoan != undefined) {
            }
        }
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
PersonalLoanDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_6__["EntityStateService"] },
    { type: _services_client_detail_service__WEBPACK_IMPORTED_MODULE_7__["ClientDetailService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
PersonalLoanDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-loan-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-loan-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-loan-detail.component.scss */ "./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.scss")).default]
    })
], PersonalLoanDetailComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/personal-loan/personal-loan.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/clients/client-detail/personal-loan/personal-loan.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n::ng-deep app-personal-loan-app.tgi-mat-card-title-icon.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  font-size: medium;\n  padding-top: 20px;\n  /* padding-left: 10px; */\n  padding-bottom: 0px;\n}\n\n::ng-deep app-personal-loan-app.tgi-mat-card-title-icon-tbl.mat-card-title {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: medium;\n  padding-top: 20px;\n  padding-left: 32px;\n  padding-bottom: 0px;\n}\n\n/*\n  ::ng-deep  .tgi-mat-card-title-icon-table.mat-card-title .mat-icon {\n    padding-top: 20px;\n    padding-left: 64px; \n    padding-bottom: 0px;\n  }\n  */\n\n.tgi-body-component {\n  padding-top: 32px;\n}\n\n.tgi-mat-container {\n  padding-left: 30px;\n}\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  padding-left: 5px;\n  padding-right: 10px;\n  width: 100%;\n  /* border: 1px solid red;  */\n}\n\n.flex-column-left {\n  display: flex;\n  margin-left: 5px;\n  width: 25%;\n  /* border: 1px solid grey;  */\n}\n\n.flex-column-right {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-left: 5px;\n  width: 75%;\n  /* border: 1px solid green;  */\n  padding-right: 40px;\n}\n\napp-personal-loan-app.flex-item {\n  padding-left: 10px;\n  margin-left: 0px;\n  /* border: 1px solid blue;  */\n  width: 100%;\n}\n\n.tgi-mat-img-size {\n  width: 64px;\n  height: 64px;\n}\n\n.tgi-mat-card-left {\n  /*min-width: 300px; */\n  width: auto;\n}\n\n::ng-deep .tgi-mat-card-right.mat-card {\n  margin-bottom: 32px;\n  width: 100%;\n}\n\n.tgi-mat-header-image {\n  /* */\n  background-size: cover;\n}\n\n.tgi-mat-card-header {\n  padding-left: 20px;\n}\n\n::ng-deep .tgi-mat-card-header.mat-card-header {\n  flex-flow: column nowrap;\n}\n\n.tgi-card-line-indent-1 {\n  padding-top: 5px;\n}\n\n.tgi-card-line-indent-2 {\n  padding-top: 10px;\n}\n\n::ng-deep .mat-icon.tgi-mat-icon-size {\n  font-size: 18px;\n}\n\n/* visible after loaded */\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-title {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-title {\n  opacity: 0;\n}\n\n::ng-deep .tgi-visible.mat-card-header .mat-card-subtitle {\n  opacity: 1;\n}\n\n::ng-deep .tgi-no-visible.mat-card-header .mat-card-subtitle {\n  opacity: 0;\n}\n\n.tgi-icon-edit-size {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-button-icon-test {\n  display: flex;\n  text-decoration: none;\n}\n\n.tgi-button-icon-tbl {\n  margin-left: 32px;\n}\n\n.tgi-icon-size-tbl {\n  height: 28px;\n  width: 28px;\n}\n\n.tgi-address-type {\n  display: inline;\n}\n\n.tgi-button-deny {\n  margin-left: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL3BlcnNvbmFsLWxvYW4vcGVyc29uYWwtbG9hbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL3BlcnNvbmFsLWxvYW4vcGVyc29uYWwtbG9hbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUVBLGlCQUFBO0VBRUEsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQkFBQTtFQUdBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BOzs7Ozs7R0FBQTs7QUFPQTtFQUNJLGlCQUFBO0FDSko7O0FET0E7RUFDSSxrQkFBQTtBQ0pKOztBRE9BO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBRUEsdUJBQUE7RUFDQSx1QkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsNEJBQUE7QUNQSjs7QURVQTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ1JKOztBRFdBO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNWSjs7QURjQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNYSjs7QURlQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDWko7O0FEZUE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUNaSjs7QURlQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ1pKOztBRGVBO0VBQ0ksSUFBQTtFQUNBLHNCQUFBO0FDWko7O0FEZUE7RUFDSSxrQkFBQTtBQ1pKOztBRGVBO0VBQ0ksd0JBQUE7QUNaSjs7QURlQTtFQUNJLGdCQUFBO0FDWko7O0FEZUE7RUFDSSxpQkFBQTtBQ1pKOztBRGVBO0VBQ0ksZUFBQTtBQ1pKOztBRGVBLHlCQUFBOztBQUNBO0VBQ0ksVUFBQTtBQ1pKOztBRGVBO0VBQ0ksVUFBQTtBQ1pKOztBRGVBO0VBQ0ksVUFBQTtBQ1pKOztBRGVBO0VBQ0ksVUFBQTtBQ1pKOztBRGVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNaSjs7QURlQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQ1pKOztBRGVBO0VBQ0ksaUJBQUE7QUNaSjs7QURlQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWko7O0FEZUE7RUFDSSxlQUFBO0FDWko7O0FEZUE7RUFDSSxpQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50cy9jbGllbnQtZGV0YWlsL3BlcnNvbmFsLWxvYW4vcGVyc29uYWwtbG9hbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIGFwcC1wZXJzb25hbC1sb2FuLWFwcC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YmwubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcblxyXG5cclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLypcclxuICA6Om5nLWRlZXAgIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YWJsZS5tYXQtY2FyZC10aXRsZSAubWF0LWljb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDY0cHg7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbiAgKi9cclxuLnRnaS1ib2R5LWNvbXBvbmVudCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzJweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbi1sZWZ0IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cclxufVxyXG5cclxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAgKi9cclxuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICA7XHJcbn1cclxuXHJcbmFwcC1wZXJzb25hbC1sb2FuLWFwcC5mbGV4LWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4udGdpLW1hdC1pbWctc2l6ZSB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLnRnaS1tYXQtY2FyZC1sZWZ0IHtcclxuICAgIC8qbWluLXdpZHRoOiAzMDBweDsgKi9cclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWhlYWRlci1pbWFnZSB7XHJcbiAgICAvKiAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnRnaS1tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1oZWFkZXIubWF0LWNhcmQtaGVhZGVyIHtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcclxufVxyXG5cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG5cclxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTIge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWljb24udGdpLW1hdC1pY29uLXNpemUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4vKiB2aXNpYmxlIGFmdGVyIGxvYWRlZCAqL1xyXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xyXG4gICAgb3BhY2l0eTogMC4wO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnRnaS1uby12aXNpYmxlLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgb3BhY2l0eTogMC4wO1xyXG59XHJcblxyXG4udGdpLWljb24tZWRpdC1zaXplIHtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1pY29uLXRlc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnRnaS1idXR0b24taWNvbi10Ymwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi50Z2ktaWNvbi1zaXplLXRibCB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICB3aWR0aDogMjhweDtcclxufVxyXG5cclxuLnRnaS1hZGRyZXNzLXR5cGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1kZW55IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4iLCIubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLm1hdC1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxMHB4OyAqL1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG46Om5nLWRlZXAgYXBwLXBlcnNvbmFsLWxvYW4tYXBwLnRnaS1tYXQtY2FyZC10aXRsZS1pY29uLXRibC5tYXQtY2FyZC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4vKlxuICA6Om5nLWRlZXAgIC50Z2ktbWF0LWNhcmQtdGl0bGUtaWNvbi10YWJsZS5tYXQtY2FyZC10aXRsZSAubWF0LWljb24ge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNjRweDsgXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgfVxuICAqL1xuLnRnaS1ib2R5LWNvbXBvbmVudCB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuXG4udGdpLW1hdC1jb250YWluZXIge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogMjUlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmV5OyAgKi9cbn1cblxuLmZsZXgtY29sdW1uLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB3aWR0aDogNzUlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgICovXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbmFwcC1wZXJzb25hbC1sb2FuLWFwcC5mbGV4LWl0ZW0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7ICAqL1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRnaS1tYXQtaW1nLXNpemUge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuXG4udGdpLW1hdC1jYXJkLWxlZnQge1xuICAvKm1pbi13aWR0aDogMzAwcHg7ICovXG4gIHdpZHRoOiBhdXRvO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtY2FyZC1yaWdodC5tYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGdpLW1hdC1oZWFkZXItaW1hZ2Uge1xuICAvKiAqL1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGdpLW1hdC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LWNhcmQtaGVhZGVyLm1hdC1jYXJkLWhlYWRlciB7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cblxuLnRnaS1jYXJkLWxpbmUtaW5kZW50LTEge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4udGdpLWNhcmQtbGluZS1pbmRlbnQtMiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1pY29uLnRnaS1tYXQtaWNvbi1zaXplIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiB2aXNpYmxlIGFmdGVyIGxvYWRlZCAqL1xuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbm8tdmlzaWJsZS5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnRnaS1pY29uLWVkaXQtc2l6ZSB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG5cbi50Z2ktYnV0dG9uLWljb24tdGVzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRnaS1idXR0b24taWNvbi10Ymwge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLnRnaS1pY29uLXNpemUtdGJsIHtcbiAgaGVpZ2h0OiAyOHB4O1xuICB3aWR0aDogMjhweDtcbn1cblxuLnRnaS1hZGRyZXNzLXR5cGUge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi50Z2ktYnV0dG9uLWRlbnkge1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-detail/personal-loan/personal-loan.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/clients/client-detail/personal-loan/personal-loan.component.ts ***!
  \********************************************************************************/
/*! exports provided: PersonalLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalLoanComponent", function() { return PersonalLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/deny-loan-application.service */ "./src/app/clients/client-detail/services/deny-loan-application.service.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");








let PersonalLoanComponent = class PersonalLoanComponent {
    // --------------------------------------------------------------
    constructor(router, route, denyLoanApplicationService, denyStateSrv, snackBarSrv) {
        this.router = router;
        this.route = route;
        this.denyLoanApplicationService = denyLoanApplicationService;
        this.denyStateSrv = denyStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.summaryColor1 = '#6FA8DC'; // '#6FA8DC'  '#DDBDF1'
        this.summaryColor2 = '#9FC5F8'; // '#9FC5F8'  '#DDBDF1'
        this.client = null;
        this.personalLoan = null;
        this.disabledButtons = false;
        // ---------------------
        this.simpleSnackBarRef = null;
        this.isDenyChanged$ = null;
    }
    ngOnInit() {
        this.client = {
            id: this.clientData.id,
        };
        this.fetchPersonalLoanInfo();
        // ---------------------
        this.isDenyChanged$ = this.denyStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((r) => {
            // console.log(`\tPIPE: PersonalLoanAppComponent.OnInit() IsEntityChangedInterface:%O`, r,);
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
                    this.simpleSnackBarRef = this.snackBarSrv.open(`${r.message}`, 'X', {
                        duration: 2000,
                        panelClass: 'mat-snack-bar-container_info'
                    });
                    // Disabled Buttons APPROVE DENY
                    this.disabledButtons = true;
                    /*
                       this.simpleSnackBarRef.afterDismissed()
                       .subscribe(
                         (res: MatSnackBarDismiss) => {
     
                           // this.router.navigateByUrl('/clients');
                         }
                       );
                   */
                    return { op: 'LOAD', isEnd: true, opResult: 'SUCCESS' };
                }
            }
        }));
    }
    fetchPersonalLoanInfo() {
        if (this.clientData.loans != undefined &&
            Array.isArray(this.clientData.loans) &&
            this.clientData.loans.length > 0) {
            this.personalLoan = this.clientData.loans.find(loan => {
                return loan.status &&
                    loan.status === 'In Process' &&
                    loan.productName === 'Consumer Loan';
            });
            console.log('PersonalLoanAppComponent.fetchPersonalLoanInfo() %O', this.personalLoan);
            if (this.personalLoan != undefined) {
                console.log('PersonalLoanAppComponent.onApproveBtnClick() %O', this.personalLoan);
            }
        }
    }
    onApproveBtnClick() {
        // console.log('PersonalLoanAppComponent.onDenyBtnClick() %O', this.personalLoan);
        console.log('PersonalLoanAppComponent.onApproveBtnClick() clientId -> %O loanApplication.id -> %O', this.client.id, this.personalLoan.id);
        this.denyLoanApplicationService.fundLoanApplication(+this.client.id, +this.personalLoan.id, this.denyStateSrv);
    }
    onDenyBtnClick() {
        // console.log('PersonalLoanAppComponent.onDenyBtnClick() %O', this.personalLoan);
        console.log('PersonalLoanAppComponent.onDenyBtnClick() clientId -> %O loanApplication.id -> %O', this.client.id, this.personalLoan.id);
        this.denyLoanApplicationService.denyLoanApplication(+this.client.id, +this.personalLoan.id, this.denyStateSrv);
    }
    ngOnDestroy() {
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
PersonalLoanComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__["DenyLoanApplicationService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], PersonalLoanComponent.prototype, "clientData", void 0);
PersonalLoanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personal-loan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-detail/personal-loan/personal-loan.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"], _services_deny_loan_application_service__WEBPACK_IMPORTED_MODULE_6__["DenyLoanApplicationService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-loan.component.scss */ "./src/app/clients/client-detail/personal-loan/personal-loan.component.scss")).default]
    })
], PersonalLoanComponent);



/***/ }),

/***/ "./src/app/clients/client-detail/services/deny-loan-application.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/clients/client-detail/services/deny-loan-application.service.ts ***!
  \*********************************************************************************/
/*! exports provided: WrongDenyLoanApplication, DenyLoanApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongDenyLoanApplication", function() { return WrongDenyLoanApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenyLoanApplicationService", function() { return DenyLoanApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/server-status.service */ "./src/app/shared/services/server-status.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








const WrongDenyLoanApplication = {
    message: 'WRONG',
};
let DenyLoanApplicationService = class DenyLoanApplicationService {
    constructor(http, serverStatusSrv) {
        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.curDenyLoanApplicationSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curDenyLoanApplication$ = this.curDenyLoanApplicationSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(WrongDenyLoanApplication), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curDenyLoanApplication = WrongDenyLoanApplication;
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curDenyLoanApplication$.subscribe(response => {
            this.curDenyLoanApplication = response;
        });
    }
    // ------------------------------------------------------------
    /* */
    isDenyLoanApplicationWrong(response) {
        if (!response) {
            throw new Error('Parameter [response] is null');
        }
        if (response === WrongDenyLoanApplication) {
            return true;
        }
        else {
            return false;
        }
    }
    isCurDenyLoanApplicationCorrect() {
        return !this.isDenyLoanApplicationWrong(this.curDenyLoanApplication);
    }
    isCurDenyLoanApplicationWrong() {
        return !this.isDenyLoanApplicationWrong(this.curDenyLoanApplication);
    }
    clearCurDenyLoanApplication() {
        if (this.isCurDenyLoanApplicationCorrect()) {
            this.curDenyLoanApplicationSub$.next(WrongDenyLoanApplication);
        }
    }
    isDenyLoanApplicationNotFound(response) {
        if (!response) {
            throw new Error('Parameter [response] is null');
        }
        if (!response.message) {
            throw new Error('Parameter [response] has no [message] fields.');
        }
        else if (response.message == null) {
            return true;
        }
        else {
            return false;
        }
    }
    // ------------------------------------------------------------
    denyLoanApplication(clientId, loanApplicationId, stateService) {
        console.log('DenyLoanApplicationService.denyLoanApplication() clientId -> %O, loanApplicationId -> %O ,stateService -> %O', clientId, loanApplicationId, stateService);
        if (stateService) {
            const isEntityChangedInterface = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isEntityChangedInterface);
        }
        /* put  !!!
              https://pacersnacksacks.com/api/clients/1/loanapplications/1/status
              {"status": 'Deny'}
              // responce:
              {
                "message": "Client loan application status updated.",
                "clientNumber": null,
                "clientState": null
              }
        */
        // Parameter [response] has no [message] or [clientNumber] fields.
        const deny = {
            status: 'Deny'
        };
        const fund = {
            status: 'Fund'
        };
        this.http.put(`${this.apiUrl}/clients/${clientId}/loanapplications/${loanApplicationId}/status`, deny, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                //.set("Content-Type", "application/json")  // !!! work with only "Content-Type", "application/json" ???
                .set("Accept", "application/json")
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            console.log('\t PIPE DenyLoanApplicationService.denyLoanApplication().map(ANY) -> %O', response);
            if (this.isDenyLoanApplicationNotFound(response)) {
                throw new Error(`Loan Application with [clientId]=${clientId} [loanApplicationId]=${loanApplicationId} has not found.`);
            }
            return { token: 'OK', 'message': response.message };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log('\t PIPE DenyLoanApplicationService.denyLoanApplication().catchError() #2: -> %O', err);
            let msg;
            let isEntityChangedInterface = null;
            if (stateService) {
                isEntityChangedInterface = {
                    op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
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
                isEntityChangedInterface.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isEntityChangedInterface.message = msg;
            }
            else {
                // Client error 
                msg = err.message ? err.message : err.toString();
                ;
                isEntityChangedInterface.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isEntityChangedInterface.message = `CLIENT AND LOAN APPLICATION ERROR: ${msg}`;
            }
            if (stateService) {
                stateService.next(isEntityChangedInterface);
            }
            this.clearCurDenyLoanApplication(); // ???
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ token: 'ERROR', response: null });
        }), 
        // delay(5000),  // test
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            console.log(`\t SUBSCRIBE: DenyLoanApplicationService.denyLoanApplication().subscribe(NEXT): rezObj -> %O`, rezObj);
            if (rezObj.token === 'OK') {
                this.curDenyLoanApplicationSub$.next(rezObj.message); // BEFOR stateService.next()!
                if (stateService) {
                    const isEntityChangedInterface = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS,
                        message: rezObj.message
                    };
                    stateService.next(isEntityChangedInterface);
                }
            }
        }
        // , err => console.log(`\tSUBSCRIBE: DenyLoanApplicationService.denyLoanApplication().subscribe(ERROR): %O`, err)
        // , () => console.log(`\tSUBSCRIBE: DenyLoanApplicationService.denyLoanApplication().subscribe(COMPLETE)`)    
        );
    }
    fundLoanApplication(clientId, loanApplicationId, stateService) {
        console.log('DenyLoanApplicationService.denyLoanApplication() clientId -> %O, loanApplicationId -> %O ,stateService -> %O', clientId, loanApplicationId, stateService);
        if (stateService) {
            const isEntityChangedInterface = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isEntityChangedInterface);
        }
        const fund = {
            status: 'Fund'
        };
        this.http.put(`${this.apiUrl}/loans/${loanApplicationId}/status`, fund, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                //.set("Content-Type", "application/json")  // !!! work with only "Content-Type", "application/json" ???
                .set("Accept", "application/json")
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((response) => {
            console.log('\t PIPE DenyLoanApplicationService.denyLoanApplication().map(ANY) -> %O', response);
            if (this.isDenyLoanApplicationNotFound(response)) {
                throw new Error(`Loan Application with [clientId]=${clientId} [loanApplicationId]=${loanApplicationId} has not found.`);
            }
            return { token: 'OK', 'message': response.message };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log('\t PIPE DenyLoanApplicationService.denyLoanApplication().catchError() #2: -> %O', err);
            let msg;
            let isEntityChangedInterface = null;
            if (stateService) {
                isEntityChangedInterface = {
                    op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
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
                isEntityChangedInterface.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isEntityChangedInterface.message = msg;
            }
            else {
                // Client error
                msg = err.message ? err.message : err.toString();
                ;
                isEntityChangedInterface.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isEntityChangedInterface.message = `CLIENT AND LOAN APPLICATION ERROR: ${msg}`;
            }
            if (stateService) {
                stateService.next(isEntityChangedInterface);
            }
            this.clearCurDenyLoanApplication(); // ???
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ token: 'ERROR', response: null });
        }), 
        // delay(5000),  // test
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            console.log(`\t SUBSCRIBE: DenyLoanApplicationService.denyLoanApplication().subscribe(NEXT): rezObj -> %O`, rezObj);
            if (rezObj.token === 'OK') {
                this.curDenyLoanApplicationSub$.next(rezObj.message); // BEFOR stateService.next()!
                if (stateService) {
                    const isEntityChangedInterface = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS,
                        message: rezObj.message
                    };
                    stateService.next(isEntityChangedInterface);
                }
            }
        }
        // , err => console.log(`\tSUBSCRIBE: DenyLoanApplicationService.denyLoanApplication().subscribe(ERROR): %O`, err)
        // , () => console.log(`\tSUBSCRIBE: DenyLoanApplicationService.denyLoanApplication().subscribe(COMPLETE)`)
        );
    }
};
DenyLoanApplicationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_6__["ServerStatusService"] }
];
DenyLoanApplicationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DenyLoanApplicationService);



/***/ }),

/***/ "./src/app/clients/client-list.service.ts":
/*!************************************************!*\
  !*** ./src/app/clients/client-list.service.ts ***!
  \************************************************/
/*! exports provided: ClientListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListService", function() { return ClientListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _client_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client.interface */ "./src/app/clients/client.interface.ts");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/server-status.service */ "./src/app/shared/services/server-status.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let ClientListService = class ClientListService {
    constructor(http, serverStatusSrv) {
        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl;
        this.curClientListSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curClientList$ = this.curClientListSub$.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_client_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1));
        this.curClientList = _client_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientList"];
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.curClientList$.subscribe(clients => {
            this.curClientList = clients;
        });
    }
    // ------------------------------------------------------------
    isWrongClientList(clients) {
        if (!clients) {
            throw new Error('Parameter [clients] is null');
        }
        if (clients === _client_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientList"]) {
            return true;
        }
        else {
            return false;
        }
    }
    isClientListNotEmpty(clients) {
        if (!clients) {
            throw new Error('Parameter [clients] is null');
        }
        if (clients === _client_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientList"]) {
            return false;
        }
        else {
            return true;
        }
    }
    isClientListEmpty() {
        return !this.isClientListNotEmpty(this.curClientList);
    }
    clearClientList() {
        if (!this.isClientListEmpty()) {
            this.curClientListSub$.next(_client_interface__WEBPACK_IMPORTED_MODULE_5__["WrongClientList"]);
        }
    }
    // ------------------------------------------------------------
    loadClientList(stateService) {
        // console.log('SYNC ENTER ClientListService.loadClientList() %O', stateService);
        if (stateService) {
            const isClentsChangedEnter = {
                op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                isEnd: false,
                opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isClentsChangedEnter);
        }
        this.http.get(`${this.apiUrl}/clients`, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                // .set("Content-Type", "application/json")
                .set("Accept", "application/json")
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((clients) => {
            // console.log('\tASYNC PIPE ClientListService.loadClientList().map(ANY): %O', clients);
            if (this.isWrongClientList(clients)) {
                return null;
            }
            if (!Array.isArray(clients) || clients.length === 0) {
                return null;
            }
            let curClientList = clients.map(item => {
                const client0 = {
                    clientId: item.id.toString(),
                    clientState: item.status,
                    creditOfficer: item.loanOfficer,
                };
                let client1, client2;
                if (!item.profile) {
                    client1 = {
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                    };
                }
                else {
                    client1 = {
                        firstName: item.profile.firstName,
                        lastName: item.profile.lastName,
                        email: item.profile.emailAddress,
                        gender: item.profile.gender,
                        phoneNumber: item.profile.mobilePhoneNumber,
                    };
                    if (item.profile && item.profile.addresses &&
                        Array.isArray(item.profile.addresses) &&
                        item.profile.addresses.length > 0) {
                        client2 = {
                            state: item.profile.addresses[0].state,
                            city: item.profile.addresses[0].city,
                        };
                    }
                    else {
                        client2 = {
                            state: '',
                            city: '',
                        };
                    }
                }
                return Object.assign(client0, client1, client2);
            });
            return { token: 'OK', clients: curClientList };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            // console.log('\tASYNC PIPE ClientListService.loadClientList().catchError() #2: %O', err);
            let msg;
            let isClientsChangedError = null;
            if (stateService) {
                isClientsChangedError = {
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
                isClientsChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                isClientsChangedError.message = msg;
            }
            else {
                // Client error 
                msg = err.message ? err.message : err.toString();
                ;
                isClientsChangedError.messageType = _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityMessageTypeEnum"].ERROR;
                isClientsChangedError.message = `CLIENT ERROR: ${msg}`;
            }
            if (stateService) {
                stateService.next(isClientsChangedError);
            }
            this.clearClientList();
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ token: 'ERROR', clients: null });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            // console.log(`\tSUBSCRIBE: ClientListService.loadClientList().subscribe(NEXT): rezObj: %O`, rezObj);
            // if (rezObj.token === 'ERROR') {
            //   if (stateService) {
            //     const isClientsChangedError: IsEntityChangedInterface = {
            //       op: EntityStateEnum.LOAD,
            //       isEnd: true,
            //       opResult: EntityChangeResultEnum.ERROR,
            //     };
            //     stateService.next(isClientsChangedError);
            //   }
            //   this.clearClientList();
            // } else
            if (rezObj.token === 'OK') {
                this.curClientListSub$.next(rezObj.clients); // BEFOR stateService.next()!
                if (stateService) {
                    const isClientsChangedExit = {
                        op: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityStateEnum"].LOAD,
                        isEnd: true,
                        opResult: _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__["EntityChangeResultEnum"].SUCCESS
                    };
                    stateService.next(isClientsChangedExit);
                }
                // this.curClientListSub$.next(rezObj.clients);
            }
        }
        // , err => console.log(`\tSUBSCRIBE: ClientListService.loadClientList().subscribe(ERROR): %O`, err)
        // , () => console.log(`\tSUBSCRIBE: ClientListService.loadClientList().subscribe(COMPLETE)`)    
        );
    }
};
ClientListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _shared_services_server_status_service__WEBPACK_IMPORTED_MODULE_7__["ServerStatusService"] }
];
ClientListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientListService);



/***/ }),

/***/ "./src/app/clients/client-list/client-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/clients/client-list/client-list.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*  left part */\n.nav-spacer {\n  flex: 1 1 auto;\n}\n/*\n.tgi-icon {\n    padding: 0 14px;\n  }\n  */\n/*\n::ng-deep  mat-button-toggle.tgi-button-toggle  .mat-button-toggle-label-content {\n    line-height: 48px;\n  }\n*/\n.tgi-icon-size {\n  height: 28px;\n}\n/*  right part */\n/* find */\n.find-form {\n  min-width: 150px;\n  max-width: 300px;\n  width: 100%;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n}\n/*\n::ng-deep mat-toolbar.find-menu {\n  background-color: grey;\n}\n*/\n::ng-deep mat-form-field.find-full-width > div.mat-form-field-wrapper {\n  margin: 0;\n  padding: 0;\n  /* background-color: lightgray; */\n}\n.find-full-width {\n  width: 100%;\n}\n.menu-group {\n  padding-left: 10px;\n  background-color: lightgray;\n  border: 0px solid black;\n}\n.tgi-client-num {\n  padding-left: 14px;\n}\n/* icon buttons */\n.tgi-icon-download-size {\n  /* height: 38px; */\n  vertical-align: middle;\n}\n.tgi-icon-share-size {\n  height: 28px;\n}\n.toolbar-icon {\n  text-decoration: none;\n  display: flex;\n  /* color: #fff; */\n  /* padding-left: 25px; */\n  width: 50px;\n}\n.sidenav-icon {\n  text-decoration: none;\n  padding: 0 10px;\n}\n.tgi-button-icon {\n  display: flex;\n  text-decoration: none;\n}\n.tgi-button-img {\n  display: flex;\n  padding-left: 5px;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtbGlzdC9jbGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2xpZW50cy9jbGllbnQtbGlzdC9jbGllbnQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFBO0FBRUE7RUFDSSxjQUFBO0FDQUo7QURFRTs7OztHQUFBO0FBS0E7Ozs7Q0FBQTtBQU1BO0VBQ0ksWUFBQTtBQ0FOO0FES0UsZ0JBQUE7QUFFQSxTQUFBO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSko7QURNRTs7OztDQUFBO0FBS0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDSEo7QURLRTtFQUNFLFdBQUE7QUNGSjtBREtFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FDRko7QURJRTtFQUNFLGtCQUFBO0FDREo7QURHRSxpQkFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQ0RKO0FER0U7RUFDRSxZQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FER0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudHMvY2xpZW50LWxpc3QvY2xpZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAgbGVmdCBwYXJ0ICovXHJcblxyXG4ubmF2LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLypcclxuICAudGdpLWljb24ge1xyXG4gICAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgICB9XHJcbiAgICAqL1xyXG4gIC8qXHJcbiAgOjpuZy1kZWVwICBtYXQtYnV0dG9uLXRvZ2dsZS50Z2ktYnV0dG9uLXRvZ2dsZSAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xyXG4gICAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAqL1xyXG4gIFxyXG4gIC50Z2ktaWNvbi1zaXplIHtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qICByaWdodCBwYXJ0ICovXHJcbiAgXHJcbiAgLyogZmluZCAqL1xyXG4gIFxyXG4gIC5maW5kLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICAvKlxyXG4gIDo6bmctZGVlcCBtYXQtdG9vbGJhci5maW5kLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICB9XHJcbiAgKi9cclxuICA6Om5nLWRlZXAgbWF0LWZvcm0tZmllbGQuZmluZC1mdWxsLXdpZHRoID4gZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgKi9cclxuICB9XHJcbiAgLmZpbmQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1lbnUtZ3JvdXAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XHJcbiAgfSBcclxuICAudGdpLWNsaWVudC1udW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIH1cclxuICAvKiBpY29uIGJ1dHRvbnMgKi9cclxuICBcclxuICAudGdpLWljb24tZG93bmxvYWQtc2l6ZSB7XHJcbiAgICAvKiBoZWlnaHQ6IDM4cHg7ICovXHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAudGdpLWljb24tc2hhcmUtc2l6ZSB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgXHJcbiAgfVxyXG4gIC50b29sYmFyLWljb24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAyNXB4OyAqL1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfSBcclxuICBcclxuICAuc2lkZW5hdi1pY29uIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRnaS1idXR0b24taWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAudGdpLWJ1dHRvbi1pbWcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgIiwiLyogIGxlZnQgcGFydCAqL1xuLm5hdi1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLypcbi50Z2ktaWNvbiB7XG4gICAgcGFkZGluZzogMCAxNHB4O1xuICB9XG4gICovXG4vKlxuOjpuZy1kZWVwICBtYXQtYnV0dG9uLXRvZ2dsZS50Z2ktYnV0dG9uLXRvZ2dsZSAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB9XG4qL1xuLnRnaS1pY29uLXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi8qICByaWdodCBwYXJ0ICovXG4vKiBmaW5kICovXG4uZmluZC1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKlxuOjpuZy1kZWVwIG1hdC10b29sYmFyLmZpbmQtbWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4qL1xuOjpuZy1kZWVwIG1hdC1mb3JtLWZpZWxkLmZpbmQtZnVsbC13aWR0aCA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7ICovXG59XG5cbi5maW5kLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtZ3JvdXAge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgYm9yZGVyOiAwcHggc29saWQgYmxhY2s7XG59XG5cbi50Z2ktY2xpZW50LW51bSB7XG4gIHBhZGRpbmctbGVmdDogMTRweDtcbn1cblxuLyogaWNvbiBidXR0b25zICovXG4udGdpLWljb24tZG93bmxvYWQtc2l6ZSB7XG4gIC8qIGhlaWdodDogMzhweDsgKi9cbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnRnaS1pY29uLXNoYXJlLXNpemUge1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi50b29sYmFyLWljb24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICAvKiBwYWRkaW5nLWxlZnQ6IDI1cHg7ICovXG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uc2lkZW5hdi1pY29uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbi50Z2ktYnV0dG9uLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50Z2ktYnV0dG9uLWltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/clients/client-list/client-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clients/client-list/client-list.component.ts ***!
  \**************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_model_entity_state_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/entity-state.service */ "./src/app/shared/services/entity-state.service.ts");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _client_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client-list.service */ "./src/app/clients/client-list.service.ts");










// import { ClientTableComponent } from './client-table/client-table.component';
// import { isNgTemplate } from '@angular/compiler';
// import { DataRefreshService } from 'src/app/shared/services/data-refresh.service';
let ClientListComponent = class ClientListComponent {
    constructor(router, userSrv, clientsSrv, clientsStateSrv, snackBarSrv) {
        this.router = router;
        this.userSrv = userSrv;
        this.clientsSrv = clientsSrv;
        this.clientsStateSrv = clientsStateSrv;
        this.snackBarSrv = snackBarSrv;
        this.currentUser$ = null;
        this.currentClients$ = null;
        // public curClientList$: Observable<ClientInterface[]> = null;
        // --------------------------------------------------------------
        this.simpleSnackBarRef = null;
        this.isClientsChanged$ = null;
        // --------------------------------------------------------------
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isFilter = false; // netesa
        this._clientView = '';
        this._renderClientArr = null;
        clientsStateSrv.context = "ClientListComponent";
    }
    get clientView() {
        return this._clientView;
    }
    set clientView(val) {
        // console.log('ClientListComponent.clientView(val) val=%s', val);
        this._clientView = val;
    }
    get renderClientArr() {
        return this._renderClientArr;
    }
    set renderClientArr(val) {
        this._renderClientArr = val;
    }
    ngOnInit() {
        this.currentUser$ = this.userSrv.curUser$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((user) => {
            // console.log(`\tPIPE: ClientListComponent.OnInit() tap currentUser$:%O`, user);
            if (this.userSrv.isAnonymUser(user)) {
                this.onDestroySub$.next(true); // befor!
                this.clientsSrv.clearClientList();
                // this.onDestroySub$.next(true);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$));
        // this.curRefreshCmd$ = this.dataRefreshSrv.currentCmd$
        //   .pipe(
        //     tap((cmd: string) => {
        //       console.log('ClientListComponent ngOnInit() Refresh Cmd => %s', cmd);    
        //       if (cmd === 'data') {
        //         this.clientsSrv.clearClientList(); 
        //         this.dataRefreshSrv.setRefreshCmd('nothing');
        //       }
        //     })
        //   )      
        this.currentClients$ = this.clientsSrv.curClientList$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((clients) => {
            // console.log(`\tPIPE: ClientListComponent.OnInit() tap currentClients$:%O`, clients,);
            if (this.clientsSrv.isWrongClientList(clients)) {
                if (this.userSrv.isCurUserAuth()) {
                    this.clientsSrv.loadClientList(this.clientsStateSrv);
                    // setTimeout(() => {
                    //   this.clientsSrv.loadClientList(this.clientsStateSrv);
                    // }, 1200);
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((clients) => {
            // console.log(`\tPIPE: ClientListComponent.OnInit() map currentClients$:%O`, clients,);
            if (this.clientsSrv.isWrongClientList(clients)) {
                return null;
            }
            if (!Array.isArray(clients) || clients.length === 0) {
                return null;
            }
            //   let curClientList = clients.map(item => {
            //     let client: ClientInterface = {
            //       clientId: item.id.toString(),
            //       firstName: item.profile.firstName,
            //       lastName: item.profile.lastName,
            //       maritalStatus: item.profile.maritalStatus,
            //       gender: item.profile.gender,
            //       clientState: item.status,
            //       phoneNumber: item.profile.mobilePhoneNumber,
            //       creditOfficer: item.loanOfficer,
            //       state: item.profile.addresses[0].state,
            //       city: item.profile.addresses[0].city,
            //     };
            //     return client;
            //   })
            //   return curClientList;
            // DEBUG - remove!
            // clients.forEach(item => {item.lastName = item.lastName + ' - ' + Date.now()});
            return clients;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$));
        this.isClientsChanged$ = this.clientsStateSrv.isEntityChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((r) => {
            // console.log(`\tPIPE: ClientListComponent.OnInit() IsEntityChangedInterface:%O`, r,);
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
                    // if (this.clientTableCmp) {
                    //   this.clientTableCmp.dataSource.data = this.clientsSrv.curClientList; // OK
                    //   // console.log(`\tPIPE: ClientListComponent.OnInit() ClientTableCmp:%O clientsSrv.curClientList:%O`,
                    //   //               this.clientTableCmp, this.clientsSrv.curClientList);
                    // }
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
                        this.snackBarSrv.open(`Selected Client has been deleted!`, 'X', {
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
        // this.isClientsChanged$ = this.clientsStateSrv.isEntityChanged$
        // .pipe(
        //   map((r: IsEntityChangedInterface): OpStateInterface   => {
        //     console.log(`\tPIPE: ClientListComponent.OnInit() IsEntityChangedInterface:%O, ClientTableCmp:%O`, 
        //                   r, this.clientTableCmp);
        //     // this.stateIsEnd += ` ${r.isEnd};`;
        //     // this.stateOp += ` ${r.op};`;
        //     if (r.op === EntityStateEnum.NOSET) {
        //       if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
        //         if (this.simpleSnackBarRef != null) {
        //           this.simpleSnackBarRef.dismiss();
        //           this.simpleSnackBarRef = null;
        //         }
        //         return {op: 'NOSET', isEnd: false, opResult: 'NOSET'};
        //       }
        //     } else if (r.op === EntityStateEnum.LOAD) {
        //       if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
        //         if (this.simpleSnackBarRef != null) {
        //           this.simpleSnackBarRef.dismiss();
        //           this.simpleSnackBarRef = null;
        //         }
        //         return {op: 'LOAD', isEnd: false, opResult: 'NOSET'};
        //       } else if (r.isEnd && r.opResult === EntityChangeResultEnum.ERROR) {
        //           this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`,
        //             'X', {
        //             duration: 0,
        //             panelClass: 'mat-snack-bar-container_err'
        //           });
        //           return {op: 'LOAD', isEnd: true, opResult: 'ERROR'};
        //      } else if (r.isEnd && r.opResult === EntityChangeResultEnum.SUCCESS) {
        //         if (this.clientTableCmp) {
        //           this.clientTableCmp.clientArr = this.clientsSrv.curClientList;
        //         }
        //         return {op: 'LOAD', isEnd: true, opResult: 'SUCCESS'};
        //       }
        //     } else if (r.op === EntityStateEnum.DELETE) {
        //       if (!r.isEnd && r.opResult === EntityChangeResultEnum.NOSET) {
        //         if (this.simpleSnackBarRef != null) {
        //           this.simpleSnackBarRef.dismiss();
        //           this.simpleSnackBarRef = null;
        //         }
        //         return {op: 'DELETE', isEnd: false, opResult: 'NOSET'};
        //       } else if (!r.isEnd && r.opResult === EntityChangeResultEnum.ERROR) { // Error
        //         this.simpleSnackBarRef = this.snackBarSrv.open(`ERROR: ${r.message}`,
        //           'X', {
        //           duration: 0,
        //           panelClass: 'mat-snack-bar-container_err'
        //         });
        //         return {op: 'DELETE', isEnd: true, opResult: 'ERROR'};
        //       } else if (r.isEnd && r.opResult === EntityChangeResultEnum.SUCCESS) {
        //         this.simpleSnackBarRef =
        //           this.snackBarSrv.open(`Selected Client has been deleted!`,
        //           'X', {
        //           duration: 0,
        //           panelClass: 'mat-snack-bar-container_info'
        //         });
        //         return {op: 'DELETE', isEnd: true, opResult: 'SUCCESS'};
        //       }
        //     }
        //   })
        // );
    }
    buttonToggleChange(ev) {
        // console.log('buttonToggleChange ev -> %O', ev);
    }
    filter() {
        this.isFilter = !this.isFilter;
    }
    clientViewChanged(ev) {
        // console.log('ClientListComponent.clientViewChanged(ev) view=%s', ev);
        this.clientView = ev;
    }
    renderClientsChanged(ev) {
        // console.log('ClientListComponent.renderClientsChanged(ev) clientArr=%O', ev);
        this.renderClientArr = ev;
    }
    ngOnDestroy() {
        // this.clientsSrv.clearClientList(); // auto loaded
        if (this.simpleSnackBarRef != null) {
            this.simpleSnackBarRef.dismiss();
            this.simpleSnackBarRef = null;
        }
    }
};
ClientListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _client_list_service__WEBPACK_IMPORTED_MODULE_9__["ClientListService"] },
    { type: _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
ClientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/client-list.component.html")).default,
        providers: [
            _shared_services_entity_state_service__WEBPACK_IMPORTED_MODULE_7__["EntityStateService"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-list.component.scss */ "./src/app/clients/client-list/client-list.component.scss")).default]
    })
], ClientListComponent);



/***/ }),

/***/ "./src/app/clients/client-list/client-table/client-table.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/clients/client-list/client-table/client-table.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted {\n  color: black;\n}\n\ntr.client-row:not(.selected-row):hover {\n  background: #777;\n}\n\ntr.client-row:not(.selected-row):active {\n  background: #efefef;\n}\n\n.client-row td {\n  border-bottom-width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtbGlzdC9jbGllbnQtdGFibGUvY2xpZW50LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1saXN0L2NsaWVudC10YWJsZS9jbGllbnQtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1saXN0L2NsaWVudC10YWJsZS9jbGllbnQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICB0ci5jbGllbnQtcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNzc3O1xyXG4gIH1cclxuICBcclxuICB0ci5jbGllbnQtcm93Om5vdCguc2VsZWN0ZWQtcm93KTphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxuICB9XHJcbiAgXHJcbiAgLmNsaWVudC1yb3cgdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxuICB9XHJcbiBcclxuICAiLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG50ci5jbGllbnQtcm93Om5vdCguc2VsZWN0ZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG59XG5cbnRyLmNsaWVudC1yb3c6bm90KC5zZWxlY3RlZC1yb3cpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5jbGllbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/clients/client-list/client-table/client-table.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/clients/client-list/client-table/client-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: ClientTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientTableComponent", function() { return ClientTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");






let ClientTableComponent = class ClientTableComponent {
    constructor(router, route
    // protected userSrv: UserService,
    // protected clientsSrv: ClientListService,
    // protected clientsStateSrv: EntityStateService,
    ) {
        this.router = router;
        this.route = route;
        this.currentUser$ = null;
        this.currentClients$ = null;
        this.isClientsChanged$ = null;
        this.displayedColumns = [
            'clientId',
            'firstName',
            'lastName',
            'email',
            'clientState',
            'phoneNumber',
            'creditOfficer',
            'state',
            'city'
        ];
        this._clientView = '';
        this.renderClientList$ = null;
        this.renderClientListChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        console.log('ClientTableComponent constructor() -> setting datasource');
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        // this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (data, filter) => {
            // console.log('ClientTableComponent dataSource.filterPredicate() data=%O filter=%s', 
            //               data, filter);
            const dataStr = data.clientState.toLowerCase().trim();
            return dataStr.indexOf(filter) != -1;
        };
    }
    get clientView() {
        console.log('ClientTableComponent.clientView(val) GET this._clientView=%s', this._clientView);
        return this._clientView;
    }
    set clientView(val) {
        console.log('ClientTableComponent.clientView(val) SET val=%s', val);
        this._clientView = val;
        this.dataSource.filter = val;
    }
    ngOnInit() {
        // this.dataSource = new MatTableDataSource(CLIENT_DATA);  //MOCK OK!
        this.dataSource.data = this.clientArr;
        this.dataSource.sort = this.sort;
        const sortState = { active: 'clientId', direction: 'desc' };
        this.sort.active = sortState.active;
        this.sort.direction = sortState.direction;
        this.sort.sortChange.emit(sortState);
        this.renderClientList$ = this.dataSource.connect()
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((clients) => {
            // console.log('\tPIPE: ClientTableComponent.OnInit() renderClientList:%O', clients);
            this.renderClientListChange.emit(clients);
        }));
        // this.dataSource.filterPredicate = (data, filter) => {
        //   const dataStr = data.clientState.toLowerCase().trim();
        //   return dataStr.indexOf(filter) != -1; 
        // }
        // this.currentUser$ = this.userSrv.curUser$
        //   .pipe(
        //     tap((user: UserWithTokenInterface) => {
        //       if (this.userSrv.isAnonymUser(user)) {
        //         this.clientsSrv.clearClientList();
        //       }
        //     })
        //   );
        //   this.currentClients$ = this.clientsSrv.curClientList$
        //   .pipe(
        //     tap((clients: ClientInterface[]) => {
        //       if (this.clientsSrv.isClientListNotEmpty(clients)) {
        //         // this.dataSource = new MatTableDataSource(clients);
        //         this.dataSource = new MatTableDataSource(CLIENT_DATA);
        //         this.dataSource.sort = this.sort;
        //       }
        //     })
        //   );
        //   this.isClientsChanged$ = this.clientsStateSrv.isEntityChanged$
        //   .pipe(
        //     map((r: IsEntityChangedInterface): OpStateInterface   => {
        //       console.log(`\tPIPE: ClientTableComponent.OnInit() IsEntityChangedInterface:%O`, r);
        //       if (r.isEnd && r.opResult === EntityChangeResultEnum.SUCCESS) {
        //         return {op: 'LOAD', isEnd: true, opResult: 'SUCCESS'};
        //       }
        //     })
        //   );
    }
    onTblRowClick(client) {
        // console.log(`\tPIPE: ClientTableComponent.OnInit() clicked Client:%O`, client);    
        // this.router.navigate([`/clients`, client.clientId, 'overview']);    
        this.router.navigate([client.clientId, 'overview'], { relativeTo: this.route });
    }
};
ClientTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('data-source')
], ClientTableComponent.prototype, "clientArr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('client-view')
], ClientTableComponent.prototype, "clientView", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], { static: true })
], ClientTableComponent.prototype, "matTbl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], ClientTableComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('render-clients')
], ClientTableComponent.prototype, "renderClientListChange", void 0);
ClientTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/client-table/client-table.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client-table.component.scss */ "./src/app/clients/client-list/client-table/client-table.component.scss")).default]
    })
], ClientTableComponent);



/***/ }),

/***/ "./src/app/clients/client-list/filter-settings/filter-settings.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/clients/client-list/filter-settings/filter-settings.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-spacer {\n  flex: 1 1 auto;\n}\n\n.find-full-width {\n  width: 20%;\n  margin-right: 20px;\n}\n\ndiv.mat-form-field-wrapper > div.mat-form-field-wrapper {\n  margin-left: 20px;\n}\n\n.tgi-city-mat-form-field {\n  padding-left: 32px;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h1 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h2 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h3 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h4 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h5 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-first.mat-toolbar h6 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h1 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h2 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h3 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h4 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h5 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n::ng-deep .tgi-mat-toolbar-two.mat-toolbar h6 {\n  font: 400 14px/24px Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n/*\n.tgi-mat-toolbar-first {\n\n}\n.tgi-mat-toolbar-two {\n\n}\n*/\n\n::ng-deep .find-full-width .mat-form-field-infix {\n  /* padding: .5em 0; */\n  padding: 0.3em 0 0.4em 0;\n}\n\n.tgi-button-print {\n  margin-left: 50px;\n}\n\n.tgi-mat-divider {\n  padding: 1px 0 1px 0;\n}\n\n.tgi-mat-divider-vertical {\n  height: 100%;\n  margin: 0 20px;\n  /*  border: 1px;  */\n}\n\n::ng-deep .tgi-mat-divider-vertical.mat-divider.mat-divider-vertical {\n  border-right-width: 2px;\n}\n\n.tgi-form-field-view {\n  max-width: 200px;\n}\n\n.tgi-officer-form-field {\n  padding-left: 32px;\n  max-width: 250px;\n}\n\n.tgi-city-mat-form-field {\n  padding-left: 32px;\n  max-width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4L2QvdXB3b3JrL3RnaWRldmVsb3BtZW50L3NyYy9hcHAvY2xpZW50cy9jbGllbnQtbGlzdC9maWx0ZXItc2V0dGluZ3MvZmlsdGVyLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jbGllbnRzL2NsaWVudC1saXN0L2ZpbHRlci1zZXR0aW5ncy9maWx0ZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRTtFQUNFLGlCQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtBQ0VKOztBREVBO0VBQ0Usd0RBQUE7QUNDRjs7QURDQTtFQUNFLHdEQUFBO0FDRUY7O0FEQUE7RUFDRSx3REFBQTtBQ0dGOztBRERBO0VBQ0Usd0RBQUE7QUNJRjs7QURGQTtFQUNFLHdEQUFBO0FDS0Y7O0FESEE7RUFDRSx3REFBQTtBQ01GOztBREpBO0VBQ0Usd0RBQUE7QUNPRjs7QURKQTtFQUNFLHdEQUFBO0FDT0Y7O0FETEE7RUFDRSx3REFBQTtBQ1FGOztBRE5BO0VBQ0Usd0RBQUE7QUNTRjs7QURQQTtFQUNFLHdEQUFBO0FDVUY7O0FEUkE7RUFDRSx3REFBQTtBQ1dGOztBRFRBO0VBQ0Usd0RBQUE7QUNZRjs7QURWQTtFQUNFLHdEQUFBO0FDYUY7O0FEWEE7Ozs7Ozs7Q0FBQTs7QUFRQTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUNjRjs7QURYQTtFQUNFLGlCQUFBO0FDY0Y7O0FEWEE7RUFDRSxvQkFBQTtBQ2NGOztBRFhBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2NGOztBRFhBO0VBQ0UsdUJBQUE7QUNjRjs7QURYQTtFQUNFLGdCQUFBO0FDY0Y7O0FEWEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDY0Y7O0FEWEE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDY0YiLCJmaWxlIjoic3JjL2FwcC9jbGllbnRzL2NsaWVudC1saXN0L2ZpbHRlci1zZXR0aW5ncy9maWx0ZXItc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLmZpbmQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZGl2Lm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIgPiBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC50Z2ktY2l0eS1tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgfVxyXG5cclxuXHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgxIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgyIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDMge1xyXG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IFxyXG59XHJcbjo6bmctZGVlcCAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoNCB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGg1IHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDYge1xyXG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IFxyXG59XHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LXRvb2xiYXItdHdvLm1hdC10b29sYmFyIGgxIHtcclxuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyBcclxufVxyXG46Om5nLWRlZXAgICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoMiB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoMyB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNCB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNSB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuOjpuZy1kZWVwICAudGdpLW1hdC10b29sYmFyLXR3by5tYXQtdG9vbGJhciBoNiB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgXHJcbn1cclxuLypcclxuLnRnaS1tYXQtdG9vbGJhci1maXJzdCB7XHJcblxyXG59XHJcbi50Z2ktbWF0LXRvb2xiYXItdHdvIHtcclxuXHJcbn1cclxuKi9cclxuOjpuZy1kZWVwIC5maW5kLWZ1bGwtd2lkdGggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAvKiBwYWRkaW5nOiAuNWVtIDA7ICovXHJcbiAgcGFkZGluZzogMC4zZW0gMCAwLjRlbSAwO1xyXG59XHJcblxyXG4udGdpLWJ1dHRvbi1wcmludCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi50Z2ktbWF0LWRpdmlkZXIge1xyXG4gIHBhZGRpbmc6IDFweCAwIDFweCAwO1xyXG59XHJcblxyXG4udGdpLW1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcclxuICBoZWlnaHQ6ICAxMDAlOyBcclxuICBtYXJnaW46IDAgMjBweDtcclxuICAvKiAgYm9yZGVyOiAxcHg7ICAqL1xyXG59XHJcblxyXG46Om5nLWRlZXAgIC50Z2ktbWF0LWRpdmlkZXItdmVydGljYWwubWF0LWRpdmlkZXIubWF0LWRpdmlkZXItdmVydGljYWwge1xyXG4gIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xyXG59XHJcblxyXG4udGdpLWZvcm0tZmllbGQtdmlldyB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG5cclxuLnRnaS1vZmZpY2VyLWZvcm0tZmllbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMzJweDtcclxuICBtYXgtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4udGdpLWNpdHktbWF0LWZvcm0tZmllbGQge1xyXG4gIHBhZGRpbmctbGVmdDogMzJweDtcclxuICBtYXgtd2lkdGg6IDI1MHB4OyBcclxufVxyXG4iLCIubmF2LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uZmluZC1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5kaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciA+IGRpdi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi50Z2ktY2l0eS1tYXQtZm9ybS1maWVsZCB7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoMSB7XG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGgyIHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDMge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci1maXJzdC5tYXQtdG9vbGJhciBoNCB7XG4gIGZvbnQ6IDQwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjo6bmctZGVlcCAudGdpLW1hdC10b29sYmFyLWZpcnN0Lm1hdC10b29sYmFyIGg1IHtcbiAgZm9udDogNDAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOjpuZy1kZWVwIC50Z2ktbWF0LXRvb2xiYXItZmlyc3QubWF0LXRvb2xiYXIgaDYge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDEge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDIge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDMge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDQge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDUge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtdG9vbGJhci10d28ubWF0LXRvb2xiYXIgaDYge1xuICBmb250OiA0MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4vKlxuLnRnaS1tYXQtdG9vbGJhci1maXJzdCB7XG5cbn1cbi50Z2ktbWF0LXRvb2xiYXItdHdvIHtcblxufVxuKi9cbjo6bmctZGVlcCAuZmluZC1mdWxsLXdpZHRoIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIC8qIHBhZGRpbmc6IC41ZW0gMDsgKi9cbiAgcGFkZGluZzogMC4zZW0gMCAwLjRlbSAwO1xufVxuXG4udGdpLWJ1dHRvbi1wcmludCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4udGdpLW1hdC1kaXZpZGVyIHtcbiAgcGFkZGluZzogMXB4IDAgMXB4IDA7XG59XG5cbi50Z2ktbWF0LWRpdmlkZXItdmVydGljYWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCAyMHB4O1xuICAvKiAgYm9yZGVyOiAxcHg7ICAqL1xufVxuXG46Om5nLWRlZXAgLnRnaS1tYXQtZGl2aWRlci12ZXJ0aWNhbC5tYXQtZGl2aWRlci5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMnB4O1xufVxuXG4udGdpLWZvcm0tZmllbGQtdmlldyB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi50Z2ktb2ZmaWNlci1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBtYXgtd2lkdGg6IDI1MHB4O1xufVxuXG4udGdpLWNpdHktbWF0LWZvcm0tZmllbGQge1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIG1heC13aWR0aDogMjUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/clients/client-list/filter-settings/filter-settings.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/clients/client-list/filter-settings/filter-settings.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FilterSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterSettingsComponent", function() { return FilterSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);



// import { CREDIT_OFFICER_LIST } from '../client-list/client-table/mock-data';
let FilterSettingsComponent = class FilterSettingsComponent {
    constructor() {
        this.clientViewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._renderClientArr = null;
        // public OfficerList = CREDIT_OFFICER_LIST;
        this.officerList = [];
        this.cityList = [];
        this._selView = 'all';
        this.isFilterUse = false;
        this.isShareUse = false;
        this.isViewTwoPanel = false;
    }
    get renderClientArr() {
        return this._renderClientArr;
    }
    set renderClientArr(val) {
        this._renderClientArr = val;
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
        // console.log('FilterSettingsComponent.selectedView(val) val=%s', val);
        this._selView = val;
        if (val === 'all') {
            val = '';
        }
        this.clientViewChange.emit(val);
    }
    ngOnInit() {
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
], FilterSettingsComponent.prototype, "clientArr", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('client-view-change')
], FilterSettingsComponent.prototype, "clientViewChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('render-data')
], FilterSettingsComponent.prototype, "renderClientArr", null);
FilterSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clients/client-list/filter-settings/filter-settings.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter-settings.component.scss */ "./src/app/clients/client-list/filter-settings/filter-settings.component.scss")).default]
    })
], FilterSettingsComponent);



/***/ }),

/***/ "./src/app/clients/client.interface.ts":
/*!*********************************************!*\
  !*** ./src/app/clients/client.interface.ts ***!
  \*********************************************/
/*! exports provided: WrongClient, WrongClientList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongClient", function() { return WrongClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrongClientList", function() { return WrongClientList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const WrongClient = {
    clientId: '000000',
    firstName: 'WRONG',
    lastName: 'WRONG'
};
const WrongClientList = [WrongClient];


/***/ }),

/***/ "./src/app/clients/clients-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/clients/clients-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ClientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsRoutingModule", function() { return ClientsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/clients/client-list/client-list.component.ts");
/* harmony import */ var _client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-detail/client-detail.component */ "./src/app/clients/client-detail/client-detail.component.ts");
/* harmony import */ var _client_detail_client_detail_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-detail/client-detail-overview.component */ "./src/app/clients/client-detail/client-detail-overview.component.ts");
/* harmony import */ var _client_detail_client_detail_financials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-detail/client-detail-financials.component */ "./src/app/clients/client-detail/client-detail-financials.component.ts");
/* harmony import */ var _client_detail_client_detail_documemts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-detail/client-detail-documemts.component */ "./src/app/clients/client-detail/client-detail-documemts.component.ts");
/* harmony import */ var _client_detail_client_detail_loans_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-detail/client-detail-loans.component */ "./src/app/clients/client-detail/client-detail-loans.component.ts");
/* harmony import */ var _client_detail_client_detail_loan_applications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-detail/client-detail-loan-applications.component */ "./src/app/clients/client-detail/client-detail-loan-applications.component.ts");
/* harmony import */ var _client_detail_approve_personal_loan_app_approve_personal_loan_app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./client-detail/approve-personal-loan-app/approve-personal-loan-app.component */ "./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.ts");
/* harmony import */ var _client_detail_approve_buisness_loan_app_approve_buisness_loan_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component */ "./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.ts");
/* harmony import */ var _client_detail_credit_score_inquiry_credit_score_inquiry_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./client-detail/credit-score-inquiry/credit-score-inquiry.component */ "./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.ts");
/* harmony import */ var _client_detail_identifications_identification_client_detail_identification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./client-detail/identifications/identification/client-detail-identification.component */ "./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.ts");
















const routes = [
    {
        path: '',
        component: _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_5__["ClientListComponent"],
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
    {
        path: ':id',
        component: _client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_6__["ClientDetailComponent"],
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        children: [
            {
                path: 'overview',
                component: _client_detail_client_detail_overview_component__WEBPACK_IMPORTED_MODULE_7__["ClientDetailOverviewComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'financials',
                component: _client_detail_client_detail_financials_component__WEBPACK_IMPORTED_MODULE_8__["ClientDetailFinancialsComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'documemts',
                component: _client_detail_client_detail_documemts_component__WEBPACK_IMPORTED_MODULE_9__["ClientDetailDocumemtsComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'loans',
                component: _client_detail_client_detail_loans_component__WEBPACK_IMPORTED_MODULE_10__["ClientDetailLoansComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'loanapplications',
                component: _client_detail_client_detail_loan_applications_component__WEBPACK_IMPORTED_MODULE_11__["ClientDetailLoanApplicationsComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'loanapplications/:prodId/personal-loan-app',
                component: _client_detail_approve_personal_loan_app_approve_personal_loan_app_component__WEBPACK_IMPORTED_MODULE_12__["ApprovePersonalLoanAppComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'loanapplications/:prodId/buisness-loan-app',
                component: _client_detail_approve_buisness_loan_app_approve_buisness_loan_app_component__WEBPACK_IMPORTED_MODULE_13__["ApproveBuisnessLoanAppComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'financials/creditscoreinquiry',
                component: _client_detail_credit_score_inquiry_credit_score_inquiry_component__WEBPACK_IMPORTED_MODULE_14__["CreditScoreInquiryComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'overview/identifications/:identificationId',
                component: _client_detail_identifications_identification_client_detail_identification_component__WEBPACK_IMPORTED_MODULE_15__["ClientDetailIdentificationComponent"],
                canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            }
        ]
    }
];
let ClientsRoutingModule = class ClientsRoutingModule {
};
ClientsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], ClientsRoutingModule);



/***/ }),

/***/ "./src/app/clients/clients.module.ts":
/*!*******************************************!*\
  !*** ./src/app/clients/clients.module.ts ***!
  \*******************************************/
/*! exports provided: ClientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsModule", function() { return ClientsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-lazyload-image */ "./node_modules/ng-lazyload-image/fesm2015/ng-lazyload-image.js");
/* harmony import */ var _shared_ng_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ng-material.module */ "./src/app/shared/ng-material.module.ts");
/* harmony import */ var _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-list/client-list.component */ "./src/app/clients/client-list/client-list.component.ts");
/* harmony import */ var _client_list_filter_settings_filter_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client-list/filter-settings/filter-settings.component */ "./src/app/clients/client-list/filter-settings/filter-settings.component.ts");
/* harmony import */ var _clients_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clients-routing.module */ "./src/app/clients/clients-routing.module.ts");
/* harmony import */ var _client_list_client_table_client_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client-list/client-table/client-table.component */ "./src/app/clients/client-list/client-table/client-table.component.ts");
/* harmony import */ var _client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client-detail/client-detail.component */ "./src/app/clients/client-detail/client-detail.component.ts");
/* harmony import */ var _client_detail_client_detail_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-detail/client-detail-overview.component */ "./src/app/clients/client-detail/client-detail-overview.component.ts");
/* harmony import */ var _client_detail_client_detail_financials_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./client-detail/client-detail-financials.component */ "./src/app/clients/client-detail/client-detail-financials.component.ts");
/* harmony import */ var _client_detail_client_detail_documemts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./client-detail/client-detail-documemts.component */ "./src/app/clients/client-detail/client-detail-documemts.component.ts");
/* harmony import */ var _client_detail_client_detail_loans_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./client-detail/client-detail-loans.component */ "./src/app/clients/client-detail/client-detail-loans.component.ts");
/* harmony import */ var _client_detail_client_detail_loan_applications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./client-detail/client-detail-loan-applications.component */ "./src/app/clients/client-detail/client-detail-loan-applications.component.ts");
/* harmony import */ var _client_detail_client_detail_avatar_client_detail_avatar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./client-detail/client-detail-avatar/client-detail-avatar.component */ "./src/app/clients/client-detail/client-detail-avatar/client-detail-avatar.component.ts");
/* harmony import */ var _client_detail_client_detail_loans_client_detail_loans_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./client-detail/client-detail-loans/client-detail-loans-table.component */ "./src/app/clients/client-detail/client-detail-loans/client-detail-loans-table.component.ts");
/* harmony import */ var _client_detail_client_detail_loan_app_client_detail_loan_app_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./client-detail/client-detail-loan-app/client-detail-loan-app-table.component */ "./src/app/clients/client-detail/client-detail-loan-app/client-detail-loan-app-table.component.ts");
/* harmony import */ var _client_detail_client_detail_identifications_client_detail_identifications_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./client-detail/client-detail-identifications/client-detail-identifications-table.component */ "./src/app/clients/client-detail/client-detail-identifications/client-detail-identifications-table.component.ts");
/* harmony import */ var _client_detail_client_detail_personal_info_client_detail_personal_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./client-detail/client-detail-personal-info/client-detail-personal-info.component */ "./src/app/clients/client-detail/client-detail-personal-info/client-detail-personal-info.component.ts");
/* harmony import */ var _client_detail_business_loan_business_loan_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./client-detail/business-loan/business-loan.component */ "./src/app/clients/client-detail/business-loan/business-loan.component.ts");
/* harmony import */ var _client_detail_business_loan_app_business_loan_app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./client-detail/business-loan-app/business-loan-app.component */ "./src/app/clients/client-detail/business-loan-app/business-loan-app.component.ts");
/* harmony import */ var _client_detail_personal_loan_app_personal_loan_app_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./client-detail/personal-loan-app/personal-loan-app.component */ "./src/app/clients/client-detail/personal-loan-app/personal-loan-app.component.ts");
/* harmony import */ var _client_detail_personal_loan_app_detail_personal_loan_app_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./client-detail/personal-loan-app-detail/personal-loan-app-detail.component */ "./src/app/clients/client-detail/personal-loan-app-detail/personal-loan-app-detail.component.ts");
/* harmony import */ var _client_detail_personal_loan_personal_loan_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./client-detail/personal-loan/personal-loan.component */ "./src/app/clients/client-detail/personal-loan/personal-loan.component.ts");
/* harmony import */ var _client_detail_personal_loan_detail_personal_loan_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./client-detail/personal-loan-detail/personal-loan-detail.component */ "./src/app/clients/client-detail/personal-loan-detail/personal-loan-detail.component.ts");
/* harmony import */ var _client_detail_business_loan_app_detail_business_loan_app_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./client-detail/business-loan-app-detail/business-loan-app-detail.component */ "./src/app/clients/client-detail/business-loan-app-detail/business-loan-app-detail.component.ts");
/* harmony import */ var _client_detail_business_loan_detail_business_loan_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./client-detail/business-loan-detail/business-loan-detail.component */ "./src/app/clients/client-detail/business-loan-detail/business-loan-detail.component.ts");
/* harmony import */ var _client_detail_approve_personal_loan_app_approve_personal_loan_app_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./client-detail/approve-personal-loan-app/approve-personal-loan-app.component */ "./src/app/clients/client-detail/approve-personal-loan-app/approve-personal-loan-app.component.ts");
/* harmony import */ var _client_detail_approve_personal_loan_app_loan_app_params_loan_app_params_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component */ "./src/app/clients/client-detail/approve-personal-loan-app/loan-app-params/loan-app-params.component.ts");
/* harmony import */ var _client_detail_approve_personal_loan_app_loan_app_fees_loan_app_fees_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component */ "./src/app/clients/client-detail/approve-personal-loan-app/loan-app-fees/loan-app-fees.component.ts");
/* harmony import */ var _client_detail_fund_personal_loan_loan_params_loan_params_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./client-detail/fund-personal-loan/loan-params/loan-params.component */ "./src/app/clients/client-detail/fund-personal-loan/loan-params/loan-params.component.ts");
/* harmony import */ var _client_detail_fund_personal_loan_loan_fees_loan_fees_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./client-detail/fund-personal-loan/loan-fees/loan-fees.component */ "./src/app/clients/client-detail/fund-personal-loan/loan-fees/loan-fees.component.ts");
/* harmony import */ var _client_detail_amortization_schedule_amortization_schedule_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./client-detail/amortization-schedule/amortization-schedule.component */ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule.component.ts");
/* harmony import */ var _client_detail_amortization_schedule_amortization_schedule_table_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./client-detail/amortization-schedule/amortization-schedule-table.component */ "./src/app/clients/client-detail/amortization-schedule/amortization-schedule-table.component.ts");
/* harmony import */ var _client_detail_client_detail_attachments_client_detail_attachments_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./client-detail/client-detail-attachments/client-detail-attachments.component */ "./src/app/clients/client-detail/client-detail-attachments/client-detail-attachments.component.ts");
/* harmony import */ var _client_detail_client_detail_employment_client_detail_employment_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./client-detail/client-detail-employment/client-detail-employment.component */ "./src/app/clients/client-detail/client-detail-employment/client-detail-employment.component.ts");
/* harmony import */ var _client_detail_client_detail_assets_client_detail_assets_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./client-detail/client-detail-assets/client-detail-assets.component */ "./src/app/clients/client-detail/client-detail-assets/client-detail-assets.component.ts");
/* harmony import */ var _client_detail_approve_buisness_loan_app_approve_buisness_loan_app_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component */ "./src/app/clients/client-detail/approve-buisness-loan-app/approve-buisness-loan-app.component.ts");
/* harmony import */ var _client_detail_approve_buisness_loan_app_loan_credit_line_options_loan_credit_line_options_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component */ "./src/app/clients/client-detail/approve-buisness-loan-app/loan-credit-line-options/loan-credit-line-options.component.ts");
/* harmony import */ var _client_detail_fund_buisness_loan_loan_credit_line_options_loan_credit_line_options_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component */ "./src/app/clients/client-detail/fund-buisness-loan/loan-credit-line-options/loan-credit-line-options.component.ts");
/* harmony import */ var _client_detail_loan_symmary_loan_symmary_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./client-detail/loan-symmary/loan-symmary.component */ "./src/app/clients/client-detail/loan-symmary/loan-symmary.component.ts");
/* harmony import */ var _client_detail_credit_score_inquiry_credit_score_inquiry_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./client-detail/credit-score-inquiry/credit-score-inquiry.component */ "./src/app/clients/client-detail/credit-score-inquiry/credit-score-inquiry.component.ts");
/* harmony import */ var _client_detail_approve_personal_loan_app_personal_loan_app_form_personal_loan_app_form_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component */ "./src/app/clients/client-detail/approve-personal-loan-app/personal-loan-app-form/personal-loan-app-form.component.ts");
/* harmony import */ var _client_detail_bankstatement_inquiry_bankstatement_inquiry_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./client-detail/bankstatement-inquiry/bankstatement-inquiry.component */ "./src/app/clients/client-detail/bankstatement-inquiry/bankstatement-inquiry.component.ts");
/* harmony import */ var _client_detail_identifications_identification_client_detail_identification_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./client-detail/identifications/identification/client-detail-identification.component */ "./src/app/clients/client-detail/identifications/identification/client-detail-identification.component.ts");
/* harmony import */ var _client_detail_identifications_identification_client_detail_identification_view_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./client-detail/identifications/identification/client-detail-identification-view.component */ "./src/app/clients/client-detail/identifications/identification/client-detail-identification-view.component.ts");
/* harmony import */ var _client_detail_approve_buisness_loan_app_buisness_loan_app_form_buisness_loan_app_form_buisness_loan_app_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component */ "./src/app/clients/client-detail/approve-buisness-loan-app/buisness-loan-app-form/buisness-loan-app-form/buisness-loan-app-form.component.ts");




// ------- LazyLoadImage -----------------------------------

// ------- LazyLoadImage -----------------------------------
// import {MatRadioModule} from '@angular/material/radio';












// ClientDetailOverviewComponent  children













// import { FundPersonalLoanComponent } from './client-detail/fund-personal-loan/fund-personal-loan.component';










// import { FundBuisnessLoanComponent } from './client-detail/fund-buisness-loan/fund-buisness-loan.component';









let ClientsModule = class ClientsModule {
};
ClientsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _client_list_client_list_component__WEBPACK_IMPORTED_MODULE_6__["ClientListComponent"],
            _client_list_filter_settings_filter_settings_component__WEBPACK_IMPORTED_MODULE_7__["FilterSettingsComponent"],
            _client_list_client_table_client_table_component__WEBPACK_IMPORTED_MODULE_9__["ClientTableComponent"],
            _client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_10__["ClientDetailComponent"],
            _client_detail_client_detail_avatar_client_detail_avatar_component__WEBPACK_IMPORTED_MODULE_16__["ClientDetailAvatarComponent"],
            _client_detail_client_detail_overview_component__WEBPACK_IMPORTED_MODULE_11__["ClientDetailOverviewComponent"],
            _client_detail_client_detail_financials_component__WEBPACK_IMPORTED_MODULE_12__["ClientDetailFinancialsComponent"],
            _client_detail_client_detail_documemts_component__WEBPACK_IMPORTED_MODULE_13__["ClientDetailDocumemtsComponent"],
            _client_detail_client_detail_loans_component__WEBPACK_IMPORTED_MODULE_14__["ClientDetailLoansComponent"],
            _client_detail_client_detail_loan_applications_component__WEBPACK_IMPORTED_MODULE_15__["ClientDetailLoanApplicationsComponent"],
            _client_detail_client_detail_loans_client_detail_loans_table_component__WEBPACK_IMPORTED_MODULE_17__["ClientDetailLoansTableComponent"],
            _client_detail_client_detail_loan_app_client_detail_loan_app_table_component__WEBPACK_IMPORTED_MODULE_18__["ClientDetailLoanAppTableComponent"],
            _client_detail_client_detail_identifications_client_detail_identifications_table_component__WEBPACK_IMPORTED_MODULE_19__["ClientDetailIdentificationsTableComponent"],
            _client_detail_client_detail_personal_info_client_detail_personal_info_component__WEBPACK_IMPORTED_MODULE_20__["ClientDetailPersonalInfoComponent"],
            _client_detail_business_loan_business_loan_component__WEBPACK_IMPORTED_MODULE_21__["BusinessLoanComponent"],
            _client_detail_business_loan_detail_business_loan_detail_component__WEBPACK_IMPORTED_MODULE_28__["BusinessLoanDetailComponent"],
            _client_detail_business_loan_app_business_loan_app_component__WEBPACK_IMPORTED_MODULE_22__["BusinessLoanAppComponent"],
            _client_detail_business_loan_app_detail_business_loan_app_detail_component__WEBPACK_IMPORTED_MODULE_27__["BusinessLoanAppDetailComponent"],
            _client_detail_personal_loan_app_personal_loan_app_component__WEBPACK_IMPORTED_MODULE_23__["PersonalLoanAppComponent"],
            _client_detail_personal_loan_app_detail_personal_loan_app_detail_component__WEBPACK_IMPORTED_MODULE_24__["PersonalLoanAppDetailComponent"],
            _client_detail_personal_loan_personal_loan_component__WEBPACK_IMPORTED_MODULE_25__["PersonalLoanComponent"],
            _client_detail_personal_loan_detail_personal_loan_detail_component__WEBPACK_IMPORTED_MODULE_26__["PersonalLoanDetailComponent"],
            _client_detail_approve_personal_loan_app_approve_personal_loan_app_component__WEBPACK_IMPORTED_MODULE_29__["ApprovePersonalLoanAppComponent"],
            // FundPersonalLoanComponent,
            _client_detail_approve_personal_loan_app_loan_app_params_loan_app_params_component__WEBPACK_IMPORTED_MODULE_30__["LoanAppParamsComponent"],
            _client_detail_fund_personal_loan_loan_params_loan_params_component__WEBPACK_IMPORTED_MODULE_32__["ClientLoanAppParamsComponent"],
            _client_detail_approve_personal_loan_app_loan_app_fees_loan_app_fees_component__WEBPACK_IMPORTED_MODULE_31__["LoanAppFeesComponent"],
            _client_detail_fund_personal_loan_loan_fees_loan_fees_component__WEBPACK_IMPORTED_MODULE_33__["ClientLoanAppFeesComponent"],
            _client_detail_amortization_schedule_amortization_schedule_component__WEBPACK_IMPORTED_MODULE_34__["AmortizationScheduleComponent"],
            _client_detail_amortization_schedule_amortization_schedule_table_component__WEBPACK_IMPORTED_MODULE_35__["AmortizationScheduleTableComponent"],
            _client_detail_client_detail_attachments_client_detail_attachments_component__WEBPACK_IMPORTED_MODULE_36__["ClientDetailAttachmentsComponent"],
            _client_detail_client_detail_employment_client_detail_employment_component__WEBPACK_IMPORTED_MODULE_37__["ClientDetailEmploymentComponent"],
            _client_detail_client_detail_assets_client_detail_assets_component__WEBPACK_IMPORTED_MODULE_38__["ClientDetailAssetsComponent"],
            _client_detail_approve_buisness_loan_app_approve_buisness_loan_app_component__WEBPACK_IMPORTED_MODULE_39__["ApproveBuisnessLoanAppComponent"],
            // FundBuisnessLoanComponent,
            _client_detail_approve_buisness_loan_app_loan_credit_line_options_loan_credit_line_options_component__WEBPACK_IMPORTED_MODULE_40__["LoanCreditLineOptionsComponent"],
            _client_detail_fund_buisness_loan_loan_credit_line_options_loan_credit_line_options_component__WEBPACK_IMPORTED_MODULE_41__["ClientLoanCreditLineOptionsComponent"],
            _client_detail_loan_symmary_loan_symmary_component__WEBPACK_IMPORTED_MODULE_42__["LoanSymmaryComponent"],
            _client_detail_credit_score_inquiry_credit_score_inquiry_component__WEBPACK_IMPORTED_MODULE_43__["CreditScoreInquiryComponent"],
            _client_detail_approve_personal_loan_app_personal_loan_app_form_personal_loan_app_form_component__WEBPACK_IMPORTED_MODULE_44__["PersonalLoanAppFormComponent"],
            _client_detail_bankstatement_inquiry_bankstatement_inquiry_component__WEBPACK_IMPORTED_MODULE_45__["BankStatementInquiryComponent"],
            _client_detail_identifications_identification_client_detail_identification_component__WEBPACK_IMPORTED_MODULE_46__["ClientDetailIdentificationComponent"],
            _client_detail_identifications_identification_client_detail_identification_view_component__WEBPACK_IMPORTED_MODULE_47__["ClientDetailIdentificationViewComponent"],
            _client_detail_approve_buisness_loan_app_buisness_loan_app_form_buisness_loan_app_form_buisness_loan_app_form_component__WEBPACK_IMPORTED_MODULE_48__["BuisnessLoanAppFormComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            // MatRadioModule,
            _shared_ng_material_module__WEBPACK_IMPORTED_MODULE_5__["NgMaterialModule"],
            _clients_routing_module__WEBPACK_IMPORTED_MODULE_8__["ClientsRoutingModule"],
            ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImageModule"].forRoot(ng_lazyload_image__WEBPACK_IMPORTED_MODULE_4__["intersectionObserverPreset"]) // ------- LazyLoadImage 
        ]
    })
], ClientsModule);



/***/ }),

/***/ "./src/app/shared/services/entity-credit-score-inquiry.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/services/entity-credit-score-inquiry.service.ts ***!
  \************************************************************************/
/*! exports provided: EntityCreditScoreInquiryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityCreditScoreInquiryService", function() { return EntityCreditScoreInquiryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/entity-state.interface */ "./src/app/shared/model/entity-state.interface.ts");
/* harmony import */ var _server_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server-status.service */ "./src/app/shared/services/server-status.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








let EntityCreditScoreInquiryService = class EntityCreditScoreInquiryService {
    constructor(http, serverStatusSrv) {
        this.http = http;
        this.serverStatusSrv = serverStatusSrv;
        this.apiUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl;
        this.onDestroySub$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    creditScoreInquiry(urlPath, body, stateService) {
        console.log('SYNC ENTER EntityCreditScoreInquiryService.creditScoreInquiry() body -> %O, stateService -> %O', body, stateService);
        if (stateService) {
            const isEntityChanged = {
                op: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].UPDATE,
                isEnd: false,
                opResult: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].NOSET
            };
            stateService.next(isEntityChanged);
        }
        this.http.post(`${this.apiUrl}${urlPath}`, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set("Content-Type", "application/json")
                .set("Accept", "application/json")
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => {
            console.log('\tASYNC PIPE EntityCreditScoreInquiryService.creditScoreInquiry().map(ANY): %O', result);
            // if (this.isLoanProductNotFound(product)) {
            //   throw new Error(`Loan Product with [productId] = ${prodId} has not found.`);
            // }
            return { token: 'OK', result };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            console.log('\tASYNC PIPE EntityCreditScoreInquiryService.creditScoreInquiry().catchError(): %O', err);
            let msg;
            let isEntityChangedError = null;
            if (stateService) {
                isEntityChangedError = {
                    op: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].UPDATE,
                    isEnd: true,
                    opResult: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].ERROR,
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
                isEntityChangedError.messageType = _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isEntityChangedError.message = msg;
            }
            else {
                // request error 
                msg = err.message ? err.message : err.toString();
                ;
                isEntityChangedError.messageType = _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR;
                isEntityChangedError.message = `ERROR: ${msg}`;
            }
            if (stateService) {
                stateService.next(isEntityChangedError);
            }
            this.onDestroySub$.next(true);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ token: 'ERROR', result: null });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.onDestroySub$)).subscribe((rezObj) => {
            console.log(`\tSUBSCRIBE: EntityCreditScoreInquiryService.creditScoreInquiry().subscribe(NEXT): rezObj: %O`, rezObj);
            if (rezObj.token === 'OK') {
                if (stateService) {
                    const isEntityChangedExit = {
                        op: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityStateEnum"].UPDATE,
                        isEnd: true,
                        opResult: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityChangeResultEnum"].SUCCESS,
                        messageType: _model_entity_state_interface__WEBPACK_IMPORTED_MODULE_5__["EntityMessageTypeEnum"].ERROR,
                        message: rezObj.result.message
                    };
                    stateService.next(isEntityChangedExit);
                }
            }
        }, err => console.log(`\tSUBSCRIBE: EntityCreditScoreInquiryService.creditScoreInquiry().subscribe(ERROR): %O`, err), () => console.log(`\tSUBSCRIBE: EntityCreditScoreInquiryService.creditScoreInquiry().subscribe(COMPLETE)`));
        // eom 
    }
};
EntityCreditScoreInquiryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _server_status_service__WEBPACK_IMPORTED_MODULE_6__["ServerStatusService"] }
];
EntityCreditScoreInquiryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EntityCreditScoreInquiryService);



/***/ })

}]);