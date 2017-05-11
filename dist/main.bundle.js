webpackJsonp([1,4],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneService = (function () {
    function GeneService(http) {
        this.http = http;
        this.baseurl = "http://localhost:5000/api/values";
    }
    GeneService.prototype.getAllSamples = function () {
        return this.http.get(this.baseurl + "/samples/-1")
            .map(function (res) { return res.json(); });
    };
    GeneService.prototype.getUserRegex = function (userName) {
        return this.http.get(this.baseurl + "/users/" + userName)
            .map(function (res) { return res.json(); });
    };
    GeneService.prototype.getUsers = function () {
        return this.http.get(this.baseurl + '/users')
            .map(function (res) { return res.json(); });
    };
    GeneService.prototype.getStatuses = function () {
        return this.http.get(this.baseurl + '/statuses')
            .map(function (res) { return res.json(); });
    };
    GeneService.prototype.addSample = function (barcode, statusId, createdBy) {
        var body = JSON.stringify({
            "barcode": barcode,
            "statusId": statusId,
            "createdBy": createdBy
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/samples', body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    GeneService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], GeneService);
    return GeneService;
    var _a;
}());
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/gene.service.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(671),
            styles: [__webpack_require__(666)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/about.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gene_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SamplesComponent = (function () {
    function SamplesComponent(geneService) {
        this.geneService = geneService;
    }
    SamplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geneService.getAllSamples()
            .subscribe(function (res) {
            _this.samples = res;
            _this.origSampleSize = _this.samples.length;
        });
    };
    SamplesComponent.prototype.tableClassSelector = function (status) {
        status = status.toLowerCase();
        if (status == 'received') {
            return "table-action";
        }
        else if (status == 'accessioning') {
            return "table-info";
        }
        else if (status == 'in lab') {
            return "table-warning";
        }
        else {
            return "table-success";
        }
    };
    SamplesComponent.prototype.barcodeSort = function () {
        this.samples = this.samples.sort(function (a, b) {
            return (a.barcode > b.barcode) ? 1 : -1;
        });
    };
    SamplesComponent.prototype.createdSort = function () {
        this.samples = this.samples.sort(function (a, b) {
            return (a.createdAt > b.createdAt) ? 1 : -1;
        });
    };
    SamplesComponent.prototype.statusSort = function () {
        this.samples = this.samples.sort(function (a, b) {
            return (a.status > b.status) ? 1 : -1;
        });
    };
    SamplesComponent.prototype.lastnameSort = function () {
        this.samples = this.samples.sort(function (a, b) {
            return (a.lastName > b.lastName) ? 1 : -1;
        });
    };
    SamplesComponent.prototype.statusFilter = function (status) {
        this.samples = this.samples.filter(function (a) {
            return a.status == status;
        });
    };
    SamplesComponent.prototype.barcodeFilter = function (barcode) {
        this.samples = this.samples.filter(function (a) {
            return a.barcode == barcode;
        });
    };
    SamplesComponent.prototype.dateFilter = function (date) {
        this.samples = this.samples.filter(function (a) {
            return a.createdAt == date;
        });
    };
    SamplesComponent.prototype.resetSamples = function () {
        var _this = this;
        this.geneService.getAllSamples().subscribe(function (res) {
            _this.samples = res;
        });
        this.userName = null;
        this.selectedUser = null;
    };
    SamplesComponent.prototype.ratio = function () {
        return this.samples.length / this.origSampleSize * 100;
    };
    SamplesComponent.prototype.userRegexFilter = function () {
        var _this = this;
        if (this.userName.length > 0) {
            this.geneService.getUserRegex(this.userName).subscribe(function (res) {
                _this.samples = res;
            });
        }
    };
    SamplesComponent.prototype.selectUser = function (user) {
        this.selectedUser = { "lastName": user.lastName, "firstName": user.firstName };
    };
    SamplesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-samples',
            template: __webpack_require__(673),
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gene_service__["a" /* GeneService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_gene_service__["a" /* GeneService */]) === 'function' && _a) || Object])
    ], SamplesComponent);
    return SamplesComponent;
    var _a;
}());
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/samples.component.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gene_service__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(geneService) {
        this.geneService = geneService;
        this.user = { "firstName": "", lastName: "" };
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geneService.getUserRegex(this.user.firstName + this.user.lastName).subscribe(function (res) {
            _this.samples = res;
        });
    };
    UsersComponent.prototype.statusFilter = function (status) {
        var local = this.samples.filter(function (x) {
            return x.status == status;
        });
        return local.length;
    };
    UsersComponent.prototype.tableClassSelector = function (status) {
        status = status.toLowerCase();
        if (status == 'received') {
            return "table-action";
        }
        else if (status == 'accessioning') {
            return "table-info";
        }
        else if (status == 'in lab') {
            return "table-warning";
        }
        else {
            return "table-success";
        }
    };
    UsersComponent.prototype.closeUsers = function () {
        this.user = { "firstName": "", lastName: "" };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], UsersComponent.prototype, "user", void 0);
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__(674),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gene_service__["a" /* GeneService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_gene_service__["a" /* GeneService */]) === 'function' && _a) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/users.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/main.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(670),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_samples_samples_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_users_users_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gene_service__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_addsample_addsample_component__ = __webpack_require__(510);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_samples_samples_component__["a" /* SamplesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_addsample_addsample_component__["a" /* AddsampleComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_gene_service__["a" /* GeneService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_samples_samples_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_users_users_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__ = __webpack_require__(330);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




// Route Configuration
var routes = [
    { path: 'samples', component: __WEBPACK_IMPORTED_MODULE_1__components_samples_samples_component__["a" /* SamplesComponent */] },
    { path: '', redirectTo: '/samples', pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__components_users_users_component__["a" /* UsersComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__components_about_about_component__["a" /* AboutComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/app.routes.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gene_service__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddsampleComponent = (function () {
    function AddsampleComponent(geneService) {
        this.geneService = geneService;
    }
    AddsampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geneService.getUsers().subscribe(function (res) {
            _this.users = res;
            _this.user = res[0];
        });
        this.geneService.getStatuses().subscribe(function (res) {
            _this.statuses = res;
            _this.status = res[0];
        });
    };
    AddsampleComponent.prototype.post = function () {
        var _this = this;
        //console.log(this.barcode, this.user, this.status);
        var bar = this.barcode;
        var user = this.users.filter(function (u) { return u.firstName + ' ' + u.lastName == _this.user; })[0];
        var stat = this.statuses.filter(function (s) { return s.status == _this.status; })[0];
        this.geneService.addSample(bar, stat.statusId, user.userId).subscribe(function (res) {
            console.log(res);
        });
    };
    AddsampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-addsample',
            template: __webpack_require__(672),
            styles: [__webpack_require__(667)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gene_service__["a" /* GeneService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_gene_service__["a" /* GeneService */]) === 'function' && _a) || Object])
    ], AddsampleComponent);
    return AddsampleComponent;
    var _a;
}());
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/addsample.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/miles/Projects/Professional/CSharp/Gene/src/environment.js.map

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "th {\n    cursor: pointer;\n    text-align: center;\n}\n\ntd#status, td#barcode, td#fname, td#lname, td {\n    cursor: pointer;\n}\n\n#sampleTable{\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n\n.row {\n    margin-top: .5em;\n    margin-bottom: .5em;\n}"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "button {\n    margin-top: .5em;\n    margin-bottom: 1em;\n}"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-primary\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button>\n  <a class=\"navbar-brand\" routerLink=\"/samples\">Gene By Gene</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/samples\">Samples <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" routerLink=\"/about\">About</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 671:
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h3>Add Sample</h3>\n  </div>\n  <div class=\"col-md-3\">\n    <form>\n        <div class=\"form-group\">\n          <label for=\"barcode\">Barcode</label>\n          <input type=\"text\" class=\"form-control\" id=\"barcode\" placeholder=\"Enter barcode\" name=\"barcode\" [(ngModel)]=\"barcode\">\n        </div>\n        \n        <div class=\"form-group\">\n          <label for=\"User\">User</label>\n          <select class=\"form-control\" id=\"user\" name=\"user\" [(ngModel)]=\"user\">\n            <option *ngFor=\"let u of users\">{{u.firstName +' '+ u.lastName}}</option>\n          </select>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"status\">Status</label>\n          <select class=\"form-control\" id=\"status\" name=\"status\" [(ngModel)]=\"status\">\n            <option *ngFor=\"let s of statuses\">{{s.status}}</option>\n          </select>\n        </div>\n\n        <button (click)=\"post()\" class=\"btn btn-danger\">Submit</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedUser\">\n  <app-users [user]=\"selectedUser\"></app-users>\n</div>\n\n<div *ngIf=\"samples\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Samples</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 float-left\">\n      <button class=\"btn btn-warn\">Count: {{samples.length}}</button>\n      <button class=\"btn btn-warn\">Percent Showing: {{ratio() | number:'1.2-2'}} %</button>\n      <button class=\"btn btn-primary\" (click)=\"resetSamples()\">Reset</button>\n\n      <input class=\"pull-right\" type=\"text\" [(ngModel)]=\"userName\" name=\"userName\" (keyup)=\"userRegexFilter($event)\" placeholder=\"Search Users...\" />\n    </div>\n  </div>\n  <div class=\"row\" style=\"height: 600px !important; overflow:scroll;\">\n    <div class=\"col-md-12\">\n      <table class=\"table table-hover table-bordered\" id=\"sampleTable\">\n        <thead class=\"thead-inverse\">\n          <tr>\n            <th>#</th>\n            <th (click)=\"createdSort()\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> CreatedAt</th>\n            <th (click)=\"barcodeSort()\"><i class=\"fa fa-barcode\" aria-hidden=\"true\"></i> Barcode</th>\n            <th (click)=\"statusSort()\"><i class=\"fa fa-map\" aria-hidden=\"true\"></i> Status</th>\n            <th (click)=\"lastnameSort()\" colspan=2><i class=\"fa fa-user\" aria-hidden=\"true\"></i> User (Last, First)</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let sample of samples; let i=index\" [ngClass]=\"tableClassSelector(sample.status)\">\n            <td>{{i + 1}}</td>\n            <td (click)=\"dateFilter(sample.createdAt)\">{{sample.createdAt | date:'yyyy-MM-dd'}}</td>\n            <td id=\"barcode\" (click)=\"barcodeFilter(sample.barcode)\">{{sample.barcode}}</td>\n            <td id=\"status\" (click)=\"statusFilter(sample.status)\">{{sample.status}}</td>\n            <td id=\"lname\" (click)=\"selectUser(sample)\">{{sample.lastName}}</td>\n            <td id=\"fname\" (click)=\"selectUser(sample)\">{{sample.firstName}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  <hr>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-addsample></app-addsample>\n      <hr>\n    </div>\n  </div>\n  \n\n</div>"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"user.firstName.length > 0\">\n  <div class=\"col-md-12\">\n    <hr>\n    <h2>User Insights</h2>\n    <h4><i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{user.firstName}} {{user.lastName}}</h4>\n    <div *ngIf=\"samples\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <button class=\"btn\" [ngClass]=\"tableClassSelector('Report Generation')\">Report Generation: {{ statusFilter(\"Report Generation\") }}</button>\n        </div>\n        <div class=\"col-md-3\">\n          <button class=\"btn\" [ngClass]=\"tableClassSelector('Received')\">Received: {{ statusFilter(\"Received\") }}</button>\n        </div>\n        <div class=\"col-md-3\">\n          <button class=\"btn\" [ngClass]=\"tableClassSelector('In Lab')\">In Lab: {{ statusFilter(\"In Lab\") }}</button>\n        </div>\n        <div class=\"col-md-3\">\n          <button class=\"btn\" [ngClass]=\"tableClassSelector('Accessioning')\">Accessioning: {{ statusFilter(\"Accessioning\")}}</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-warn\" (click)=\"closeUsers()\">Close</button>\n      </div>\n\n    </div>\n    <hr>\n  </div>\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[692]);
//# sourceMappingURL=main.bundle.map