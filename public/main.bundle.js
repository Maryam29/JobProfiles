webpackJsonp([1,4],{

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(534);


/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomFormService = (function () {
    function CustomFormService(router, http) {
        this.router = router;
        this.http = http;
    }
    CustomFormService.prototype.GetFormControls = function () {
        return this.http.get('getformcontrols').map(function (res) {
            if (res.status === 400) {
                throw new Error("Couldn't get form controls");
            }
            else {
                return res.json();
            }
        });
    };
    CustomFormService.prototype.SaveForm = function (FormFields, FormTitle) {
        console.log("service");
        return this.http.post('saveForm', { FormFields: FormFields, FormTitle: FormTitle }).map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Save Forms");
            }
            else {
                console.log(res);
                return res.json();
            }
        }).subscribe(function (obj) {
            return obj;
        });
    };
    CustomFormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], CustomFormService);
    return CustomFormService;
    var _a, _b;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/custom-form.service.js.map

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 533;


/***/ }),

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(652);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/main.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(90);
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
    function AppComponent(AuthService) {
        this.AuthService = AuthService;
        this.title = 'Job Portal';
        this.IsAuthenticated = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Nginit app compo");
        this.AuthService.isAuthenticated.subscribe(function (isauth) {
            console.log("Set Is Authenticated");
            _this.IsAuthenticated = isauth;
        });
    };
    AppComponent.prototype.OnLogout = function () {
        //this.AuthService.Logout();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(822),
            styles: [__webpack_require__(817)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/app.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_dropdown__ = __webpack_require__(815);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_custom_form_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signin_signin_component__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_custom_form_custom_form_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_JsonKeys_pipe__ = __webpack_require__(654);
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
















var appRoutes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_10__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]], children: [
            { path: 'createform', component: __WEBPACK_IMPORTED_MODULE_13__home_custom_form_custom_form_component__["a" /* CustomFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] }
        ] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_custom_form_custom_form_component__["a" /* CustomFormComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_JsonKeys_pipe__["a" /* KeysPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__home_custom_form_service__["a" /* CustomFormService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/app.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return true;
        // 2.) If token is not set, which means a new tab is opened, then check the node server if session is still open. if open then take action similar to 1, ese redirect to sigin page
        // console.log("Check for session");
        // return this.authService.isSessionOpen().take(1).map(obj => {
        //     console.log(obj);
        //     if (obj == true) {
        //         return obj;
        //     }
        //     else {
        //         this.router.navigate(['/signin']);
        //         return obj;
        //     }
        // }
        // );
    };
    AuthGuard.prototype.canLoad = function (route) {
        return true;
        // if(this.authService.isAuthenticated()){
        //     return true;
        // }
        // else
        // {
        //     this.router.navigate(['/signin']);
        // }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b, _c;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/auth-guard.service.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (JsonObj) {
        return Object.keys(JsonObj)[0];
    };
    KeysPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' }), 
        __metadata('design:paramtypes', [])
    ], KeysPipe);
    return KeysPipe;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/JsonKeys.pipe.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_control_model__ = __webpack_require__(656);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomFormComponent = (function () {
    function CustomFormComponent(customFormService) {
        this.customFormService = customFormService;
        this.ProfileFormControlCount = 0;
    }
    CustomFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customFormService.GetFormControls().subscribe(function (obj) {
            _this.controls = new Array();
            for (var i = 0; i < obj.length; i++) {
                var control = new __WEBPACK_IMPORTED_MODULE_2__form_control_model__["a" /* FormControlModel */]();
                control.type = obj[i].FieldType;
                control.label = "";
                control.isMultiField = obj[i].isMultipleOption;
                if (control.isMultiField == 1) {
                    control.optionCount = 1;
                    control.options = ['option0'];
                }
                _this.controls.push(control);
            }
        });
        this.FormLabelList = new Array();
    };
    CustomFormComponent.prototype.AddControl = function (control) {
        var labelname = "Label" + this.ProfileFormControlCount;
        var newitem = new __WEBPACK_IMPORTED_MODULE_2__form_control_model__["a" /* FormControlModel */]();
        newitem.label = labelname;
        newitem.type = control.type;
        newitem.optionCount = control.optionCount;
        //console.log(control.optionCount);
        newitem.options = new Array();
        for (var count = 0; count < newitem.optionCount; count++) {
            var optionlabel = "option" + count;
            newitem.options.push(optionlabel);
        }
        this.FormLabelList.push(newitem);
        //console.log(this.FormLabelList);
        this.ProfileFormControlCount++;
    };
    CustomFormComponent.prototype.OnSave = function () {
        //console.log(this.FormLabelList);
        this.customFormService.SaveForm(this.FormLabelList, this.FormTitle);
    };
    CustomFormComponent.prototype.OnOptionChange = function (i, newvalue, j) {
        this.FormLabelList[i].options[j] = newvalue;
        //console.log(this.FormLabelList[i]);
    };
    CustomFormComponent.prototype.AddOption = function (i) {
        var optionlabel = "option" + this.FormLabelList[i].optionCount;
        this.FormLabelList[i].optionCount++;
        this.FormLabelList[i].options.push(optionlabel);
    };
    CustomFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-custom-form',
            template: __webpack_require__(823),
            styles: [__webpack_require__(818)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === 'function' && _a) || Object])
    ], CustomFormComponent);
    return CustomFormComponent;
    var _a;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/custom-form.component.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormControlModel; });
var FormControlModel = (function () {
    function FormControlModel() {
    }
    return FormControlModel;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/form-control.model.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.OnLogout = function () {
        this.authService.Logout();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(824),
            styles: [__webpack_require__(819)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/home.component.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.OnSignIn = function (form) {
        var _this = this;
        var userid = form.value.userid;
        var password = form.value.password;
        this.authService.Signin(userid, password).subscribe(function (obj) {
            if (obj.user == false) {
                _this.message = "Your username or password is incorrect";
            }
            else {
                //console.log("Signin Successful");
                _this.authService.isAuthenticated.next(true);
                _this.router.navigate(['/']);
            }
        }, function (error) { return _this.router.navigate(['/signin']); });
        ;
    };
    SigninComponent.prototype.GoToSignup = function () {
        this.router.navigate(['/signup']);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SigninComponent.prototype, "message", void 0);
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(825),
            styles: [__webpack_require__(820)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/signin.component.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.isPhoneVerified = false;
        this.isSMSSent = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.OnSignUp = function (form) {
        var _this = this;
        var userid = form.value.userid;
        var password = form.value.password;
        this.authService.Signup(userid, password).subscribe(function (obj) {
            if (obj.user == false) {
                _this.message = "Some Error Occured. Try Again";
            }
            else {
                _this.authService.isAuthenticated.next(true);
                _this.router.navigate(['/']);
            }
        }, function (error) { return _this.router.navigate(['/signup']); });
    };
    SignupComponent.prototype.SendOTP = function () {
        var _this = this;
        this.authService.SendOTP(this.phoneno).subscribe(function (obj) {
            if (obj.OTPSent) {
                _this.isSMSSent = true;
                _this.message = "SMS successfully sent.";
            }
            else {
                _this.message = obj.message;
            }
        });
    };
    SignupComponent.prototype.VerifyOTP = function () {
        var _this = this;
        this.authService.VerifyOTP(this.otptext, this.phoneno).subscribe(function (obj) {
            if (obj.OTPVerified) {
                _this.isPhoneVerified = true;
                _this.message = "Phone No. verified.";
            }
            else {
                _this.message = obj.message;
            }
        });
    };
    SignupComponent.prototype.OnLoginPage = function () {
        this.router.navigate(['/signin']);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SignupComponent.prototype, "otptext", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SignupComponent.prototype, "phoneno", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], SignupComponent.prototype, "message", void 0);
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(826),
            styles: [__webpack_require__(821)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/signup.component.js.map

/***/ }),

/***/ 660:
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
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/environment.js.map

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <!-- <ng-template [ngIf]=\"!IsAuthenticated()\">\r\n        <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n            <div class=\"navbar-header\">\r\n            </div>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- <li routerLinkActive=\"active\">\r\n                    <a [routerLink]=\"['/report']\">Report</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\">\r\n                    <a [routerLink]=\"['/overrides']\">Overrides</a>\r\n                </li> \r\n                <li>\r\n                    <a style=\"cursor: pointer\" (click)=\"OnLogout()\">Logout</a>\r\n                </li>\r\n            </ul>\r\n          </nav>\r\n    </ng-template> -->\r\n  <div id=\"page-wrapper\" style=\"margin:100px\">\r\n     <!-- <ng-template [ngIf]=\"!IsAuthenticated()\">\r\n          <div class=\"col-md-12\">\r\n              <app-signin></app-signin>\r\n          </div>\r\n      </ng-template> -->\r\n      <router-outlet></router-outlet>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "\n<input [(ngModel)]=\"FormTitle\" >\n{{FormTitle}}\n  <div class=\"dropdown\" dropdown [dropdownToggle]=\"false\">\n    <button class=\"btn btn-default\" dropdown-open>Controls list</button>\n    <div class=\"dropdown-menu\" dropdown-not-closable-zone>\n      <table class=\"table-bordered table-condensed table-striped\">\n        <tr *ngFor=\"let control of controls\">\n          <td>{{control.type}}</td>\n          <td *ngIf=\"!control.isMultiField\"></td>\n          <td *ngIf=\"control.isMultiField\">\n            <input type=\"text\" [(ngModel)]=\"control.optionCount\">\n          </td>\n          <td>\n            <a (click)=\"AddControl(control)\">Add</a>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n  <div *ngIf=\"ProfileFormControlCount >0\">\n      <div *ngFor=\"let item of FormLabelList; let i = index;\">\n         <div [ngSwitch]=\"item.type\">\n          <!-----------------------For Radio Button------------------>\n          <div *ngSwitchCase=\"'radio'\" class=\"form-group\">\n              <input [(ngModel)]=\"item.label\"  [ngModelOptions]=\"{standalone: true}\">\n\n              <div *ngFor=\"let option of item.options; let j = index\">\n                  <label class=\"radio-inline\"><input [value]=\"option\" (change)=\"OnOptionChange(i,$event.target.value,j)\"></label>\n                  <input type=\"radio\">\n              </div>\n              <a (click)=\"AddOption(i)\">Add Options</a>\n          </div>\n          \n          <!-----------------------End Radio Button------------------>\n          <!-----------------------For Checkbox Button------------------>\n          <div *ngSwitchCase=\"'Checkbox'\" class=\"form-group\">\n              <input [(ngModel)]=\"item.label\"  [ngModelOptions]=\"{standalone: true}\">\n\n              <div *ngFor=\"let option of item.options; let j = index\" class=\"checkbox\">\n                  <label class=\"checkbox-inline\"><input [value]=\"option\" (change)=\"OnOptionChange(i,$event.target.value,j)\"></label>\n                  <input type=\"checkbox\">\n              </div>\n              <a (click)=\"AddOption(i)\">Add Options</a>\n            </div>\n            <!-----------------------End Checkbox Button------------------>\n\n          <!-----------------------For Dropbox Button------------------>\n            \n              <div *ngSwitchCase=\"'Dropdown'\" class=\"dropdown\" dropdown [dropdownToggle]=\"false\">\n                  <button class=\"btn btn-default\" dropdown-open>\n                      <input [(ngModel)]=\"item.label\" [ngModelOptions]=\"{standalone: true}\"/>\n                  </button>\n                  <div class=\"dropdown-menu\" dropdown-not-closable-zone>\n                      <div *ngFor=\"let option of item.options; let j = index\">\n                          <label><input [value]=\"option\" (change)=\"OnOptionChange(i,$event.target.value,j)\"></label>\n                        </div>\n                  </div>\n                  <a (click)=\"AddOption(i)\">Add Options</a>\n                </div>\n            <!----------------------End Dropbox Button------------------>\n\n          <!-----------------------For Textbox Button------------------>\n          <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n            <input [(ngModel)]=\"item.label\"  [ngModelOptions]=\"{standalone: true}\">\n              <input type=\"text\">\n          </div>\n          \n          <!----------------------End Textbox Button------------------>\n\n          <!-----------------------For TextArea Button------------------>\n          <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n              <input [(ngModel)]=\"item.label\" [value]=\"item.label\" [ngModelOptions]=\"{standalone: true}\">\n            <textarea></textarea>\n          </div>\n          <!----------------------End TextArea Button------------------>\n        </div>\n      </div>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"OnSave()\" type=\"submit\">Save</button>\n    </div>\n      \n       "

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n        <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n            <div class=\"navbar-header\">\r\n            </div>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li routerLinkActive=\"active\">\r\n                    <a [routerLink]=\"['createform']\">Create Form</a>\r\n                </li>\r\n                <li>\r\n                    <a style=\"cursor: pointer\" (click)=\"OnLogout()\">Logout</a>\r\n                </li>\r\n            </ul>\r\n          </nav>\r\n  <div id=\"page-wrapper\" style=\"margin:100px\">\r\n      <router-outlet></router-outlet>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <span class=\"help-block\" >{{message}}</span>\r\n      <form (ngSubmit)=\"OnSignIn(f)\" #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"userid\">Phone No.</label>\r\n            <input type=\"userid\" \r\n                     id=\"userid\" \r\n                     class=\"form-control\" \r\n                     ngModel \r\n                     name=\"userid\"\r\n                     required\r\n                     #userid = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n            <span class=\"help-block\" *ngIf=\"!userid.valid && userid.touched\">Phone No. is invalid</span>\r\n           \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" ngModel required #password = \"ngModel\">\r\n            <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\" >Password is required</span>\r\n  </div>\r\n  <button class=\"btn btn-primary\" [disabled]=\"!f.valid && f.touched\" type=\"submit\">Sign In</button>\r\n  <button class=\"btn btn-default\" (click) = \"GoToSignup()\" type=\"button\">New User? Sign up</button>\r\n  </form>\r\n  </div>\r\n</div>\r\n<!--Email Pattern check pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"-->"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <span class=\"help-block\" >{{message}}</span>\r\n        <form (ngSubmit)=\"OnSignUp(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"userid\">Phone No</label>\r\n              <input type=\"userid\" \r\n                       id=\"userid\" \r\n                       class=\"form-control\" \r\n                       name=\"userid\"\r\n                       required\r\n                       [(ngModel)]=\"phoneno\"\r\n                       #userid = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n              <span class=\"help-block\" *ngIf=\"!userid.valid && userid.touched\">Phone No. is invalid</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"isSMSSent\">\r\n                <label for=\"otp\">OTP</label>\r\n                  <input type=\"text\" \r\n                           id=\"otp\" \r\n                           class=\"form-control\" \r\n                           name=\"otp\"\r\n                           required\r\n                           [(ngModel)]=\"otptext\"\r\n                           #otp = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n                  <span class=\"help-block\" *ngIf=\"!otp.valid && otp.touched\">OTP is invalid</span>\r\n                </div>\r\n            \r\n\r\n              <button class=\"btn btn-warning\" *ngIf=\"!isSMSSent\" (click)=\"SendOTP()\" type='button'>Continue</button>\r\n              <button class=\"btn btn-warning\" *ngIf=\"isSMSSent && !isPhoneVerified\" (click)=\"VerifyOTP()\" type='button'>Verify OTP</button>\r\n            \r\n            <div class=\"form-group\" *ngIf=\"isPhoneVerified\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" minlength=\"6\" id=\"password\" name=\"password\" class=\"form-control\" ngModel required #password = \"ngModel\">\r\n              <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\" >Password is invalid</span>\r\n              <span class=\"help-block\" *ngIf=\"password.errors?.minlength && password.touched\">Password must be atleast 6 characters long</span>\r\n            </div>\r\n            <button class=\"btn btn-primary\" *ngIf=\"isPhoneVerified\" [disabled]=\"!f.valid && f.touched\" type=\"submit\">Sign Up</button>\r\n            <button class=\"btn btn-primary\" (click)=\"OnLoginPage()\" type='button'>Login</button>\r\n          </form>\r\n    </div>\r\n</div>\r\n  <!-- pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" -->"

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.isAuthenticated = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    AuthService.prototype.Signin = function (userid, password) {
        var _this = this;
        console.log(userid, password);
        return this.http.post("login", { username: userid, password: password }).map(function (res) {
            if (res.status === 400) {
                _this.router.navigate(['/signin']);
                throw new Error("" + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.Signup = function (userid, password) {
        var _this = this;
        return this.http.post("register", { userid: userid, password: password }).map(function (res) {
            if (res.status == 400) {
                _this.router.navigate(['/signup']);
                throw new Error("" + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.isSessionOpen = function () {
        var _this = this;
        console.log("isSession Open");
        return this.http.get("isSessionOpen").map(function (res) {
            if (res.status !== 200)
                throw new Error("Couldn't authenticate. Some Error Occured" + res.status);
            else {
                var obj = res.json();
                console.log(obj);
                if (obj.isSessionOpen === true) {
                    _this.isAuthenticated.next(true);
                    return true;
                }
                else {
                    _this.isAuthenticated.next(false);
                    return false;
                }
            }
        });
    };
    AuthService.prototype.SendOTP = function (phoneno) {
        console.log("SendOTP Auth");
        return this.http.post('sendOTP', { phoneno: phoneno }).map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Verify. Some Error Occured" + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.VerifyOTP = function (otp, phoneno) {
        console.log("Verify OTP");
        return this.http.post('verifyOTP', { phoneno: phoneno, otp: otp }).map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Verify. Some Error Occured" + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.Logout = function () {
        var _this = this;
        return this.http.get('logout').subscribe(function (obj) {
            console.log("Logged out successfully");
            _this.isAuthenticated.next(false);
            _this.router.navigate(['/signin']);
        });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/auth.service.js.map

/***/ })

},[1110]);
//# sourceMappingURL=main.bundle.map