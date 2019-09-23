(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/anagnorisis/anagnorisis.component.html":
/*!********************************************************!*\
  !*** ./src/app/anagnorisis/anagnorisis.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  anagnorisis works!\n</p>\n"

/***/ }),

/***/ "./src/app/anagnorisis/anagnorisis.component.scss":
/*!********************************************************!*\
  !*** ./src/app/anagnorisis/anagnorisis.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYWdub3Jpc2lzL2FuYWdub3Jpc2lzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/anagnorisis/anagnorisis.component.ts":
/*!******************************************************!*\
  !*** ./src/app/anagnorisis/anagnorisis.component.ts ***!
  \******************************************************/
/*! exports provided: AnagnorisisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnagnorisisComponent", function() { return AnagnorisisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnagnorisisComponent = /** @class */ (function () {
    function AnagnorisisComponent() {
    }
    AnagnorisisComponent.prototype.ngOnInit = function () {
    };
    AnagnorisisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anagnorisis',
            template: __webpack_require__(/*! ./anagnorisis.component.html */ "./src/app/anagnorisis/anagnorisis.component.html"),
            styles: [__webpack_require__(/*! ./anagnorisis.component.scss */ "./src/app/anagnorisis/anagnorisis.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnagnorisisComponent);
    return AnagnorisisComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: ROUTING_DECLARATIONS, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING_DECLARATIONS", function() { return ROUTING_DECLARATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_general_general_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/general.component */ "./src/app/components/general/general.component.ts");
/* harmony import */ var _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/roles/roles.component */ "./src/app/components/roles/roles.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forms/forms.component */ "./src/app/components/forms/forms.component.ts");
/* harmony import */ var _components_episodes_episodes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/episodes/episodes.component */ "./src/app/components/episodes/episodes.component.ts");









var ROUTING_DECLARATIONS = [
    _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    _components_general_general_component__WEBPACK_IMPORTED_MODULE_4__["GeneralComponent"],
    _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_5__["RolesComponent"],
    _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
    _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"],
    _components_episodes_episodes_component__WEBPACK_IMPORTED_MODULE_8__["EpisodesComponent"]
];
var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'general-settings', component: _components_general_general_component__WEBPACK_IMPORTED_MODULE_4__["GeneralComponent"] },
    { path: 'roles', component: _components_roles_roles_component__WEBPACK_IMPORTED_MODULE_5__["RolesComponent"] },
    { path: 'users', component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"] },
    { path: 'forms', component: _components_forms_forms_component__WEBPACK_IMPORTED_MODULE_7__["FormsComponent"] },
    { path: 'episodes', component: _components_episodes_episodes_component__WEBPACK_IMPORTED_MODULE_8__["EpisodesComponent"] },
    { path: '**', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdc-top-app-bar fixed #topAppBar class=\"top-app-bar mdc-typography\">\n  <mdc-top-app-bar-row >\n    <mdc-top-app-bar-section align=\"start\">\n      <button mdcIconButton mdcTopAppBarNavIcon icon=\"menu\" (click)=\"appDrawer.open = !appDrawer.open\"></button>\n      <span style=\"font-size: 21px\">\n        <i class=\"fas fa-cogs fa-2x\"></i>\n        &nbsp;Engenho Novo MDC</span>\n    </mdc-top-app-bar-section>\n  </mdc-top-app-bar-row>\n</mdc-top-app-bar>\n\n<mdc-drawer drawer=\"modal\" #appDrawer>\n\n  <mdc-drawer-header style=\"margin-top: 25px; font-size: 24px;\"><i class=\"fas fa-sun fa-2x\"></i>&nbsp;&nbsp;O Cardáṕio</mdc-drawer-header>\n  <mdc-list-divider></mdc-list-divider>\n  <mdc-drawer-content>\n    <mdc-list-item *ngFor=\"let navItem of navigationLinks\" (selectionChange)=\"onDrawerSelect(navItem.route,rla)\"\n                   [activated]=\"rla.isActive\"\n                   routerLinkActive #rla=\"routerLinkActive\"\n                   [routerLink]=\"navItem.route\"\n                   class=\"dignity\">\n      <mdc-list-item-graphic>\n        <img [src]=\"navItem.icon\" alt=\"\">\n      </mdc-list-item-graphic>\n      {{navItem.name}}</mdc-list-item>\n  </mdc-drawer-content>\n</mdc-drawer>\n\n\n<div mdcDrawerAppContent mdcTopAppBarFixedAdjust class=\"router-container\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SMALL_WIDTH_BREAKPOINT = 1240;
var AppComponent = /** @class */ (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.title = 'Engenho Novo MDC';
        this.navigationLinks = [
            { name: 'In Media Res', route: 'home', icon: '../assets/Icon%20-%2032x24%20-%20Home.svg' },
            { name: 'In Principio', route: 'general-settings', icon: '../assets/Icon%20-%2032x24%20-%20General%20Settings.svg' },
            { name: 'Satisfaction', route: 'roles', icon: '../assets/Icon%20-%2032x24%20-%20Roles.svg' },
            { name: 'Brown Sugar', route: 'users', icon: '../assets/Icon%20-%2032x24%20-%20Users.svg' },
            { name: 'Jumping Jack Flash', route: 'forms', icon: '../assets/Icon%20-%2032x24%20-%20Forms.svg' },
            { name: 'Sympathy for the Devil', route: 'episodes', icon: '../assets/Icon%20-%2032x24%20-%20Episodes.svg' }
        ];
    }
    AppComponent.prototype.isScreenSmall = function () {
        return this.matcher.matches;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.matcher = matchMedia("(max-width: " + SMALL_WIDTH_BREAKPOINT + "px)");
    };
    AppComponent.prototype.onDrawerSelect = function (route, param) {
        this._router.navigate([route]);
        this.appDrawer.open = false;
        console.log(this.appDrawer);
        console.log(param);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('topAppBar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcTopAppBar"])
    ], AppComponent.prototype, "topAppBar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('appDrawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDrawer"])
    ], AppComponent.prototype, "appDrawer", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _anagnorisis_anagnorisis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anagnorisis/anagnorisis.component */ "./src/app/anagnorisis/anagnorisis.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["ROUTING_DECLARATIONS"],
                _anagnorisis_anagnorisis_component__WEBPACK_IMPORTED_MODULE_7__["AnagnorisisComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcTypographyModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_3__["MdcCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/episodes/episodes.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/episodes/episodes.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  episodes works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/episodes/episodes.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/episodes/episodes.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXBpc29kZXMvZXBpc29kZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/episodes/episodes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/episodes/episodes.component.ts ***!
  \***********************************************************/
/*! exports provided: EpisodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EpisodesComponent", function() { return EpisodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EpisodesComponent = /** @class */ (function () {
    function EpisodesComponent() {
    }
    EpisodesComponent.prototype.ngOnInit = function () {
    };
    EpisodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-episodes',
            template: __webpack_require__(/*! ./episodes.component.html */ "./src/app/components/episodes/episodes.component.html"),
            styles: [__webpack_require__(/*! ./episodes.component.scss */ "./src/app/components/episodes/episodes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EpisodesComponent);
    return EpisodesComponent;
}());



/***/ }),

/***/ "./src/app/components/forms/forms.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/forms/forms.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"module-grid\">\n  <div class=\"module-info\">\n    <!-- <h4 class=\"title\" mdcHeadline4>Forms</h4><img class=\"module-icon\" src=\"../../../assets/Icon%20-%2032x24%20-%20Forms.svg\" alt=\"\">\n    <p class=\"subtitle\" mdcSubtitle2>Review existing forms in the table below. You can copy, edit, or delete them as\n      needed.</p>\n  </div>\n  <button class=\"button-showcase\" mdc-button >Create New Form</button>\n  <div class=\"table-container\">\n    <table>\n      <tr>\n        <th>Firstname</th>\n        <th>Lastname</th>\n      </tr>\n      <tr>\n        <td>Peter</td>\n        <td>Griffin</td>\n      </tr>\n      <tr>\n        <td>Lois</td>\n        <td>Griffin</td>\n      </tr>\n    </table>\n  </div>\n  <div class=\"table-buttons-container\">\n    <button class=\"table-button\" mdc-button  outlined>Copy</button>\n    <button class=\"table-button\" mdc-button  outlined>Edit</button>\n    <button class=\"table-button\" mdc-button  outlined>Delete</button>\n  </div> -->\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/forms/forms.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/forms/forms.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybXMvZm9ybXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/forms/forms.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/forms/forms.component.ts ***!
  \*****************************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormsComponent = /** @class */ (function () {
    function FormsComponent() {
    }
    FormsComponent.prototype.ngOnInit = function () {
    };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! ./forms.component.html */ "./src/app/components/forms/forms.component.html"),
            styles: [__webpack_require__(/*! ./forms.component.scss */ "./src/app/components/forms/forms.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/components/general/general.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/general/general.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-card-grid\">\n\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('home')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/alchemy-sulphuric.svg\" alt=\"Alquimistas Chegando\" width=\"60\" style=\"margin: 0 auto; padding: 25px 25px;\">\n      <h2 mdcHeadline6>Cheiro de Enxofre</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('roles')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/wheeling.svg\" alt=\"Alquimistas Chegando\" width=\"60\" style=\"margin: 0 auto; padding: 25px 25px;\">\n      <h2 mdcHeadline6>Jogando em Equipe</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('users')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/biohazard.svg\" alt=\"Alquimistas Chegando\" height=\"70\" style=\"margin: 0 auto; padding: 25px 25px;\">\n      <h2 mdcHeadline6>Superusuários</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ.</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('users')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/anarchy.svg\" alt=\"Alquimistas Chegando\" height=\"70\" style=\"margin: 0 auto; padding: 25px 25px;\">\n      <h2 mdcHeadline6>An Electronic Proletarian</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ.</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n"

/***/ }),

/***/ "./src/app/components/general/general.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/general/general.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2VuZXJhbC9nZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/general/general.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/general/general.component.ts ***!
  \*********************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneralComponent = /** @class */ (function () {
    function GeneralComponent() {
    }
    GeneralComponent.prototype.ngOnInit = function () {
    };
    GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-general',
            template: __webpack_require__(/*! ./general.component.html */ "./src/app/components/general/general.component.html"),
            styles: [__webpack_require__(/*! ./general.component.scss */ "./src/app/components/general/general.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneralComponent);
    return GeneralComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-card-grid\">\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('general-settings')\">\n    <mdc-card-primary-action >\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20General%20Settings.svg\" alt=\"\">\n      <h2 mdcHeadline6>General</h2>\n      <h3 mdcSubtitle2>Set basic app configurations.</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('roles')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20Roles.svg\" alt=\"\">\n      <h2 mdcHeadline6>Roles</h2>\n      <h3 mdcSubtitle2>Define user roles.</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('users')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20Users.svg\" alt=\"\">\n      <h2 mdcHeadline6>Users</h2>\n      <h3 mdcSubtitle2>Manage users.</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('forms')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20Forms.svg\" alt=\"\">\n      <h2 mdcHeadline6>Forms</h2>\n      <h3 mdcSubtitle2>Review, edit, and create forms.</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('episodes')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20Episodes.svg\" alt=\"\">\n      <h2 mdcHeadline6>Episodes</h2>\n      <h3 mdcSubtitle2>Set up episode work flows.</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_router) {
        this._router = _router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onNavCardSelect = function (route) {
        this._router.navigate([route]);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/roles/roles.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/roles/roles.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-card-grid\">\n\n  <mdc-card mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('home')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/alchemy-sulphuric.svg\" alt=\"Alquimistas Chegando\" width=50 style=\"margin: 0 auto; padding-top: 25px;\">\n      <h2 mdcHeadline6>Cheiro de Enxofre</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n\n    <div class=\"mdc-card__actions\">\n      <button class=\"mdc-icon-button mdc-card__action mdc-card__action--icon\"\n         aria-pressed=\"false\"\n         aria-label=\"Add to favorites\"\n         title=\"Add to favorites\">\n       <i class=\"material-icons mdc-icon-button__icon mdc-icon-button__icon--on\">favorite</i>\n       <i class=\"material-icons mdc-icon-button__icon\">all_inclusive</i>\n      </button>\n      <button class=\"material-icons mdc-icon-button mdc-card__action mdc-card__action--icon\" title=\"Share\">directions_bike</button>\n      <button class=\"material-icons mdc-icon-button mdc-card__action mdc-card__action--icon\" title=\"More options\">beach_access</button>\n    </div>\n\n  </mdc-card>\n\n  <mdc-card mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('home')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/alchemy-sulphuric.svg\" alt=\"Alquimistas Chegando\" width=50 style=\"margin: 0 auto; padding-top: 25px;\">\n      <h2 mdcHeadline6>Cheiro de Enxofre</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n\n    <div class=\"mdc-card__actions\">\n      <button class=\"mdc-icon-button mdc-card__action mdc-card__action--icon\"\n         aria-pressed=\"false\"\n         aria-label=\"Add to favorites\"\n         title=\"Add to favorites\">\n       <i class=\"material-icons mdc-icon-button__icon mdc-icon-button__icon--on\">favorite</i>\n       <i class=\"material-icons mdc-icon-button__icon\">all_inclusive</i>\n      </button>\n      <button class=\"material-icons mdc-icon-button mdc-card__action mdc-card__action--icon\" title=\"Share\">directions_bike</button>\n      <button class=\"material-icons mdc-icon-button mdc-card__action mdc-card__action--icon\" title=\"More options\">beach_access</button>\n    </div>\n\n  </mdc-card>\n\n  <mdc-card mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('home')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/alchemy-sulphuric.svg\" alt=\"Alquimistas Chegando\" width=50 style=\"margin: 0 auto; padding-top: 25px;\">\n      <h2 mdcHeadline6>Cheiro de Enxofre</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n\n    <div class=\"mdc-card__actions\">\n      <button class=\"mdc-icon-button mdc-card__action mdc-card__action--icon\"\n         aria-pressed=\"false\"\n         aria-label=\"Add to favorites\"\n         title=\"Add to favorites\">\n       <i class=\"material-icons mdc-icon-button__icon mdc-icon-button__icon--on\">favorite</i>\n       <i class=\"material-icons mdc-icon-button__icon\">all_inclusive</i>\n      </button>\n      <button class=\"material-icons mdc-icon-button mdc-card__action mdc-card__action--icon\" title=\"Share\">directions_bike</button>\n      <button class=\"material-icons mdc-icon-button mdc-card__action mdc-card__action--icon\" title=\"More options\">beach_access</button>\n    </div>\n\n  </mdc-card>\n\n\n<button mdc-button>\n  <span class=\"mdc-button__label\">\n    <i class=\"fas fa-sun fa-2x\"></i>\n    Impress Me</span>\n</button>\n\n<script>\n\nimport {MDCRipple} from '@material/ripple';\n\nconst selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';\nconst ripples = [].map.call(document.querySelectorAll(selector), function(el) {\n  return new MDCRipple(el);\n});\n\n</script>\n"

/***/ }),

/***/ "./src/app/components/roles/roles.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/roles/roles.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mdc-button {\n  font-family: 'News Cycle', sans-serif;\n  font-weight: 300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JyZXRvbmlvL0hlcm9rdS1IYWlrdXMvZXhlbXBsYXJ5LWFuZ2xlL3NyYy9hcHAvY29tcG9uZW50cy9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWRjLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiAnTmV3cyBDeWNsZScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/roles/roles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/roles/roles.component.ts ***!
  \*****************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RolesComponent = /** @class */ (function () {
    function RolesComponent() {
    }
    RolesComponent.prototype.ngOnInit = function () {
    };
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles',
            template: __webpack_require__(/*! ./roles.component.html */ "./src/app/components/roles/roles.component.html"),
            styles: [__webpack_require__(/*! ./roles.component.scss */ "./src/app/components/roles/roles.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RolesComponent);
    return RolesComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-card-grid\">\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('general-settings')\">\n    <mdc-card-primary-action >\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20General%20Settings.svg\" alt=\"\">\n      <h2 mdcHeadline6>Generalities</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('roles')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20Roles.svg\" alt=\"\">\n      <h2 mdcHeadline6>All-Night Movie Role</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('users')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20Users.svg\" alt=\"\">\n      <h2 mdcHeadline6>Users &amp; Abusers</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('forms')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20Forms.svg\" alt=\"\">\n      <h2 mdcHeadline6>Red Tape</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n  <mdc-card class=\"nav-card\" (click)=\"onNavCardSelect('episodes')\">\n    <mdc-card-primary-action>\n      <img src=\"../../../assets/Icon%20-%2056x40%20-%20Episodes.svg\" alt=\"\">\n      <h2 mdcHeadline6>Unseen Episodes</h2>\n      <h3 mdcSubtitle2>Νε vελ ομνεσ φαβθλασ. Cορπορα cοπιοσαε ρεφορμιδανσ</h3>\n    </mdc-card-primary-action>\n  </mdc-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/components/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdc/web */ "./node_modules/@angular-mdc/web/esm5/web.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcButtonModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcCardModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcCheckboxModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcChipsModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDialogModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcDrawerModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcElevationModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcFabModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcIconButtonModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcIconModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcImageListModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcLinearProgressModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcListModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcMenuModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcRadioModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcRippleModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcSelectModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcSliderModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcSnackbarModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcSwitchModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcTabBarModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcTextFieldModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcTopAppBarModule"],
                _angular_mdc_web__WEBPACK_IMPORTED_MODULE_2__["MdcTypographyModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bretonio/Heroku-Haikus/exemplary-angle/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map