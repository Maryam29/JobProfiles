webpackJsonp([1,4],{

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(300);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(34);
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


var AppComponent = /** @class */ (function () {
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
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(479),
            styles: [__webpack_require__(470)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/app.component.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_filter_pipe__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_custom_form_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signin_signin_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_custom_form_custom_form_component__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_applicant_form_applicant_form_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_view_forms_view_forms_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_applicant_list_applicant_list_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_preview_form_preview_form_component__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_Keys_pipe__ = __webpack_require__(302);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_10__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]], children: [
            // { path: 'createform', component: CreateFormComponent, canActivate:[AuthGuard]},
            { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_15__home_view_forms_view_forms_component__["a" /* ViewFormsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'applicants', component: __WEBPACK_IMPORTED_MODULE_16__home_applicant_list_applicant_list_component__["a" /* ApplicantListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__home_applicant_form_applicant_form_component__["a" /* ApplicantFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] }
        ] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_custom_form_custom_form_component__["a" /* CustomFormComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_Keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_14__home_applicant_form_applicant_form_component__["a" /* ApplicantFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_view_forms_view_forms_component__["a" /* ViewFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_applicant_list_applicant_list_component__["a" /* ApplicantListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_preview_form_preview_form_component__["a" /* PreviewFormComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__home_custom_form_service__["a" /* CustomFormService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(34);
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(route, router, authService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        // return true;
        //    2.) If token is not set, which means a new tab is opened, then check the node server if session is still open. if open then take action similar to 1, ese redirect to sigin page
        //     console.log("Check for session");
        return this.authService.isSessionOpen().take(1).map(function (obj) {
            //console.log(obj);
            if (obj == true) {
                return obj;
            }
            else {
                _this.router.navigate(['/signin']);
                return obj;
            }
        });
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b, _c;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/auth-guard.service.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/Keys.pipe.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(97);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicantFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApplicantFormComponent = /** @class */ (function () {
    function ApplicantFormComponent(customFormService, authService, fb) {
        this.customFormService = customFormService;
        this.authService = authService;
        this.fb = fb;
        this.FormFields = new Array();
        this.isSelected = new Array();
    }
    ApplicantFormComponent.prototype.ngOnInit = function () {
        //console.log(this.authService.sessionData);
        this.sessionData = this.authService.sessionData;
        this.type = this.sessionData.type;
        this.ProfileForm = this.fb.group({
            customcontrols: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormArray */]([])
        });
        this.GetApplicantProfile();
    };
    ApplicantFormComponent.prototype.onSaveForm = function () {
        var _this = this;
        var FormControlsList = this.ProfileForm.get('customcontrols');
        var FormValues = FormControlsList.value;
        var obj = { _id: this.sessionData._id, type: this.sessionData.type };
        for (var i = 0; i < this.FormFields.length; i++) {
            var label = this.FormFields[i].label;
            if (this.FormFields[i].type === "Checkbox") {
                obj[label] = new Array();
                for (var j = 0; j < this.FormFields[i].optionCount; j++) {
                    if (FormValues[i][j]) {
                        obj[label].push(this.FormFields[i].options[j]);
                    }
                }
            }
            else {
                obj[label] = FormValues[i];
            }
        }
        this.customFormService.SaveApplicantForm(obj).subscribe(function (res) {
            //console.log(res);
            if (res) {
                _this.isApplicationFilled = true;
                _this.ProfileDetails = res;
            }
        });
    };
    ApplicantFormComponent.prototype.EditField = function (index) {
        //console.log(index);
        this.isSelected[index] = true;
    };
    ApplicantFormComponent.prototype.checkOptionInProfile = function (option, index) {
        var label = this.FormFields[index].label;
        if (this.ProfileDetails[label] && this.ProfileDetails[label].length > 0)
            return this.ProfileDetails[label].includes(option);
        else
            return false;
    };
    ApplicantFormComponent.prototype.onSaveField = function (index) {
        var _this = this;
        var oldobj = { _id: this.sessionData._id };
        var newobj = {};
        var FormControlsList = this.ProfileForm.get('customcontrols');
        var FormValues = FormControlsList.value[index];
        var label = this.FormFields[index].label;
        if (this.FormFields[index].type === "Checkbox") {
            console.log(FormValues);
            newobj[label] = new Array();
            for (var j = 0; j < this.FormFields[index].optionCount; j++) {
                if (FormValues[j]) {
                    newobj[label].push(this.FormFields[index].options[j]);
                    console.log(newobj[label]);
                }
            }
        }
        else {
            newobj[label] = FormValues;
        }
        console.log(newobj[label]);
        console.log(this.ProfileDetails[label]);
        if (newobj[label] === this.ProfileDetails[label]) {
            console.log("no change");
        }
        else {
            this.customFormService.UpdateApplicantProfile(oldobj, newobj).subscribe(function (res) {
                if (res) {
                    _this.isSelected[index] = false;
                    _this.ProfileDetails = res;
                }
            });
        }
    };
    ApplicantFormComponent.prototype.GetApplicantProfile = function () {
        var _this = this;
        this.customFormService.GetApplicantProfile(this.sessionData._id).subscribe(function (obj) {
            if (obj) {
                _this.isApplicationFilled = true;
                _this.ProfileDetails = obj;
            }
            else {
                _this.isApplicationFilled = false;
            }
            _this.GetEmptyForm();
        });
    };
    ApplicantFormComponent.prototype.GetEmptyForm = function () {
        var _this = this;
        this.customFormService.GetForm(this.type).subscribe(function (obj) {
            if (obj) {
                //console.log(obj);
                _this.FormTitle = obj.FormTitle;
                _this.FormFields = obj.FormFields;
                if (obj.FormFields)
                    _this.fieldcount = obj.FormFields.length;
                for (var i = 0; i < _this.fieldcount; i++) {
                    _this.isSelected[i] = false;
                    if (_this.FormFields[i].type == 'Checkbox') {
                        var newArray = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormArray */]([]);
                        for (var count = 0; count < _this.FormFields[i].optionCount; count++) {
                            var option = _this.FormFields[i].options[count];
                            var optioncontrol;
                            if (_this.checkOptionInProfile(option, i)) {
                                optioncontrol = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](true);
                            }
                            else
                                optioncontrol = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](false);
                            newArray.push(optioncontrol);
                        }
                        var FormControlsList = _this.ProfileForm.get('customcontrols');
                        FormControlsList.push(newArray);
                    }
                    else {
                        var newcontrol;
                        var val = _this.ProfileDetails[_this.FormFields[i].label];
                        if (val) {
                            newcontrol = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](val, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required);
                        }
                        else {
                            newcontrol = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required);
                        }
                        var FormControlsList = _this.ProfileForm.get('customcontrols');
                        //FormControlsList.add
                        FormControlsList.push(newcontrol);
                    }
                }
            }
        });
    };
    ApplicantFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-applicant-form',
            template: __webpack_require__(480),
            styles: [__webpack_require__(471)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */]) === "function" && _c || Object])
    ], ApplicantFormComponent);
    return ApplicantFormComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/applicant-form.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicantListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApplicantListComponent = /** @class */ (function () {
    function ApplicantListComponent(customFormService) {
        this.customFormService = customFormService;
        this.userFilter = {};
        this.SelectedApplicant = {};
    }
    ApplicantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customFormService.GetAllApplicants().subscribe(function (obj) {
            if (obj && obj.length) {
                _this.AllApplicants = obj;
                //console.log(this.AllApplicants);
                _this.customFormService.GetAllForms().subscribe(function (obj) {
                    if (obj && obj.length) {
                        _this.FormsList = obj;
                        //console.log(this.FormsList);
                    }
                    _this.CategorizeApplicant();
                });
            }
        });
    };
    ApplicantListComponent.prototype.OnFilterChange = function () {
        this.userFilter = {};
        //this.userFilter[this.FilterType] = this.FilterText;
        this.userFilter = this.FilterText;
        console.log(this.userFilter);
    };
    ApplicantListComponent.prototype.OnSelectApplicantType = function (index) {
        this.SelectedApplicant = this.ApplicantsDetails[index];
        this.FilterType = "";
        this.FilterText = "";
        this.userFilter = {};
    };
    ApplicantListComponent.prototype.CategorizeApplicant = function () {
        var _this = this;
        this.ApplicantsDetails = new Array();
        this.FormsList.forEach(function (form) {
            var obj = {};
            obj["type"] = form.FormType;
            obj["fields"] = form.FormFields;
            obj["applicants"] = _this.AllApplicants.filter(function (item) {
                //console.log(item.type);
                return item.type == form.FormType;
            });
            obj["count_applicants"] = obj["applicants"].length;
            _this.ApplicantsDetails.push(obj);
        });
        //console.log(this.ApplicantsDetails);
    };
    ApplicantListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-applicant-list',
            template: __webpack_require__(481),
            styles: [__webpack_require__(472)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object])
    ], ApplicantListComponent);
    return ApplicantListComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/applicant-list.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_control_model__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(34);
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




var CustomFormComponent = /** @class */ (function () {
    function CustomFormComponent(customFormService, authService) {
        this.customFormService = customFormService;
        this.authService = authService;
        this.SelectedForm = {
            FormFields: [],
            FormTitle: "",
            FormType: "",
            _id: null
        };
        this.FormSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.ProfileFormControlCount = 0;
    }
    CustomFormComponent.prototype.ngOnChanges = function () {
        this.ProfileFormControlCount = this.SelectedForm.FormFields.length;
    };
    CustomFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getApplicantType().subscribe(function (obj) {
            //console.log(obj);
            _this.ApplicantType = obj;
        });
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
    };
    CustomFormComponent.prototype.RemoveControl = function (index) {
        this.SelectedForm.FormFields.splice(index, 1);
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
        this.SelectedForm.FormFields.push(newitem);
        this.ProfileFormControlCount++;
    };
    CustomFormComponent.prototype.OnSave = function () {
        var _this = this;
        //console.log(this.SelectedForm.FormFields);
        this.customFormService.SaveForm(this.SelectedForm.FormFields, this.SelectedForm.FormTitle, this.SelectedForm.FormType, this.SelectedForm._id)
            .subscribe(function (obj) {
            if (obj) {
                console.log(obj);
                _this.SelectedForm._id = obj._id;
                _this.FormSaved.emit(_this.SelectedForm);
            }
        });
    };
    CustomFormComponent.prototype.OnOptionChange = function (i, newvalue, j) {
        this.SelectedForm.FormFields[i].options[j] = newvalue;
        //console.log(this.SelectedForm.FormFields[i]);
    };
    CustomFormComponent.prototype.AddOption = function (i) {
        var optionlabel = "option" + this.SelectedForm.FormFields[i].optionCount;
        this.SelectedForm.FormFields[i].optionCount++;
        this.SelectedForm.FormFields[i].options.push(optionlabel);
    };
    CustomFormComponent.prototype.RemoveOption = function (controlindex, optionindex) {
        this.SelectedForm.FormFields[controlindex].options.splice(optionindex, 1);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", Object)
    ], CustomFormComponent.prototype, "SelectedForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
        __metadata("design:type", Object)
    ], CustomFormComponent.prototype, "FormSaved", void 0);
    CustomFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-custom-form',
            template: __webpack_require__(482),
            styles: [__webpack_require__(473)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], CustomFormComponent);
    return CustomFormComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/custom-form.component.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormControlModel; });
var FormControlModel = /** @class */ (function () {
    function FormControlModel() {
    }
    return FormControlModel;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/form-control.model.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(34);
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.UserType = this.authService.sessionData.type;
    };
    HomeComponent.prototype.OnLogout = function () {
        this.authService.Logout();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(483),
            styles: [__webpack_require__(474)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/home.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreviewFormComponent = /** @class */ (function () {
    function PreviewFormComponent() {
    }
    PreviewFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", Object)
    ], PreviewFormComponent.prototype, "SelectedForm", void 0);
    PreviewFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-preview-form',
            template: __webpack_require__(484),
            styles: [__webpack_require__(475)]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewFormComponent);
    return PreviewFormComponent;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/preview-form.component.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewFormsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewFormsComponent = /** @class */ (function () {
    function ViewFormsComponent(customFormService) {
        this.customFormService = customFormService;
        this.isSelected = false;
        this.FormsCount = 0;
    }
    ViewFormsComponent.prototype.ngOnInit = function () {
        this.getAllForms();
    };
    ViewFormsComponent.prototype.OnSelectForm = function (index) {
        this.isSelected = true;
        //console.log(this.FormsList[index]);
        this.SelectedForm = this.FormsList[index];
    };
    ViewFormsComponent.prototype.OnSaveForm = function (event) {
        console.log("OnSave Form create form");
        this.SelectedForm = event;
        this.isSelected = true;
        this.getAllForms();
    };
    ViewFormsComponent.prototype.CreateNewForm = function () {
        this.SelectedForm = {
            FormFields: [],
            FormTitle: "",
            FormType: "",
            _id: null
        };
        this.isSelected = true;
    };
    ViewFormsComponent.prototype.getAllForms = function () {
        var _this = this;
        this.customFormService.GetAllForms().subscribe(function (obj) {
            if (obj && obj.length) {
                _this.FormsList = obj;
                _this.FormsCount = _this.FormsList.length;
            }
        });
    };
    ViewFormsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-view-forms',
            template: __webpack_require__(485),
            styles: [__webpack_require__(476)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object])
    ], ViewFormsComponent);
    return ViewFormsComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/view-forms.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(45);
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



var SigninComponent = /** @class */ (function () {
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
                _this.authService.sessionData = obj.user;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], SigninComponent.prototype, "message", void 0);
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__(486),
            styles: [__webpack_require__(477)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/signin.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(275);
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




var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.isPhoneVerified = false;
        this.isSMSSent = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getApplicantType().subscribe(function (obj) {
            //console.log(obj);
            _this.ApplicantType = obj;
        });
    };
    SignupComponent.prototype.OnSignUp = function (form) {
        var _this = this;
        var userid = form.value.userid;
        var password = form.value.password;
        var type = form.value.type;
        this.authService.Signup(userid, password, type).subscribe(function (obj) {
            if (obj.user == false) {
                _this.message = "Some Error Occured. Try Again";
            }
            else {
                _this.authService.sessionData = obj.user;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "otptext", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "phoneno", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "message", void 0);
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__(487),
            styles: [__webpack_require__(478)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/signup.component.js.map

/***/ }),

/***/ 312:
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(12);
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





var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.isAuthenticated = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    AuthService.prototype.Signin = function (userid, password) {
        var _this = this;
        //console.log(userid,password);
        return this.http.post("login", { username: userid, password: password }).map(function (res) {
            if (res.status === 400) {
                _this.router.navigate(['/signin']);
                throw new Error("" + res.status);
            }
            else {
                _this.sessionData = res.json().sessionData;
                return res.json();
            }
        });
    };
    AuthService.prototype.Signup = function (userid, password, type) {
        var _this = this;
        return this.http.post("register", { userid: userid, password: password, type: type }).map(function (res) {
            if (res.status == 400) {
                _this.router.navigate(['/signup']);
                throw new Error("" + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.getApplicantType = function () {
        return this.http.get('getApplicantType').map(function (res) {
            if (res.status == 400) {
                throw new Error("400");
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.isSessionOpen = function () {
        var _this = this;
        //console.log("isSession Open");
        return this.http.get("isSessionOpen").map(function (res) {
            if (res.status !== 200)
                throw new Error("Couldn't authenticate. Some Error Occured" + res.status);
            else {
                var obj = res.json();
                if (obj.isSessionOpen === true) {
                    _this.isAuthenticated.next(true);
                    _this.sessionData = obj.sessionData;
                    //console.log(this.sessionData);
                    return true;
                }
                else {
                    _this.isAuthenticated.next(false);
                    _this.sessionData = null;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/auth.service.js.map

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n    <!-- <ng-template [ngIf]=\"!IsAuthenticated()\">\n        <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n            <div class=\"navbar-header\">\n            </div>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <!-- <li routerLinkActive=\"active\">\n                    <a [routerLink]=\"['/report']\">Report</a>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a [routerLink]=\"['/overrides']\">Overrides</a>\n                </li> \n                <li>\n                    <a style=\"cursor: pointer\" (click)=\"OnLogout()\">Logout</a>\n                </li>\n            </ul>\n          </nav>\n    </ng-template> -->\n  <div id=\"page-wrapper\" style=\"margin:100px\">\n     <!-- <ng-template [ngIf]=\"!IsAuthenticated()\">\n          <div class=\"col-md-12\">\n              <app-signin></app-signin>\n          </div>\n      </ng-template> -->\n      <router-outlet></router-outlet>\n\n  </div>\n</div>"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<!--Empty Form-->\n<div *ngIf=\"!isApplicationFilled\">\n    <form (ngSubmit)=\"onSaveForm()\" *ngIf=\"!isApplicationFilled && fieldcount >0\" [formGroup]=\"ProfileForm\">\n        <h3>{{FormTitle}}</h3>\n      <div formArrayName=\"customcontrols\" *ngFor=\"let item of ProfileForm.get('customcontrols').controls; let i = index;\">\n       <div [ngSwitch]=\"FormFields[i].type\">\n    \n          <!-----------------------For Radio Button------------------>\n          <div *ngSwitchCase=\"'Radio'\" class=\"form-group\">\n            <label>\n              {{FormFields[i].label}}\n              <div *ngFor=\"let option of FormFields[i].options; let j = index\" >\n                <!-- <label class=\"radio-inline\">{{option}}</label> -->\n                {{option}}\n                  <input type=\"radio\" [formControlName]=\"i\" [value]=\"option\">\n              </div>\n            </label>\n          </div>\n          <!-----------------------End Radio Button------------------>\n    \n          <!-----------------------For Checkbox Button------------------>\n          <div *ngSwitchCase=\"'Checkbox'\">\n            <label [for]=\"i\">\n              {{FormFields[i].label}}\n              <div *ngFor=\"let option of FormFields[i].options; let j = index\" [formArrayName]=\"i\">\n                {{option}}\n                  <input type=\"checkbox\" [formControlName]=\"j\">\n              </div>\n            </label>\n          </div>\n          <!-----------------------End Checkbox Button------------------>\n    \n          <!-----------------------For Textbox Button------------------>\n          <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n            <label [for]=\"i\">\n              {{FormFields[i].label}}\n              <input type=\"text\" [formControlName]=\"i\">\n            </label>\n          </div>\n          <!----------------------End Textbox Button------------------>\n    \n          <!-----------------------For Paragraph Button------------------>\n          <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n            <label [for]=\"i\">\n              {{FormFields[i].label}}\n              <textarea [formControlName]=\"i\"></textarea>\n            </label>\n          </div>\n          <!----------------------End Paragraph Button------------------>\n    \n          <!-----------------------For Dropbox Button------------------>\n          <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\n            <label [for]=\"i\">\n              {{FormFields[i].label}}\n              <select [formControlName]=\"i\">\n                  <option selected disabled>Choose one</option>\n                <option *ngFor=\"let option of FormFields[i].options;let j=index\">{{option}}</option>\n              </select>\n            </label>\n          </div>\n           <!----------------------End Dropbox Button------------------>\n        </div>\n      </div>\n      <br>\n      <button [disabled]=\"!ProfileForm.valid\" class=\"btn btn-primary\" type=\"submit\">Save</button>\n    </form>\n</div>\n<!-- Profile Already Filled-->\n<div *ngIf=\"isApplicationFilled\">\n<ul>\n  <li *ngFor=\"let item of FormFields;let i= index\">\n    <label>{{item.label}}</label> : {{ProfileDetails[item.label]}}\n    <br>\n    <a (click)=\"EditField(i)\">Edit</a>\n\n    <!------------------------------Edit Form---------------------------------->\n    <form *ngIf=\"isSelected[i]\" (ngSubmit)=\"onSaveField(i)\" [formGroup]=\"ProfileForm\">\n      <div formArrayName=\"customcontrols\">\n       <div [ngSwitch]=\"FormFields[i].type\">\n    \n          <!-----------------------For Radio Button------------------>\n          <div *ngSwitchCase=\"'Radio'\" class=\"form-group\">\n            <label>\n              <div *ngFor=\"let option of FormFields[i].options; let j = index\" >\n                <!-- <label class=\"radio-inline\">{{option}}</label> -->\n                {{option}}\n                  <input type=\"radio\" [formControlName]=\"i\" [value]=\"option\">\n              </div>\n            </label>\n          </div>\n          <!-----------------------End Radio Button------------------>\n    \n          <!-----------------------For Checkbox Button------------------>\n          <div *ngSwitchCase=\"'Checkbox'\">\n            <label [for]=\"i\">\n              <div *ngFor=\"let option of FormFields[i].options; let j = index\" [formArrayName]=\"i\">\n                {{option}}\n                  <input type=\"checkbox\" [formControlName]=\"j\">\n              </div>\n            </label>\n          </div>\n          <!-----------------------End Checkbox Button------------------>\n    \n          <!-----------------------For Textbox Button------------------>\n          <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n            <label [for]=\"i\">\n              <input type=\"text\" [formControlName]=\"i\"\n            </label>\n          </div>\n          <!----------------------End Textbox Button------------------>\n    \n          <!-----------------------For Paragraph Button------------------>\n          <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n            <label [for]=\"i\">\n              <textarea [formControlName]=\"i\"></textarea>\n            </label>\n          </div>\n          <!----------------------End Paragraph Button------------------>\n    \n          <!-----------------------For Dropbox Button------------------>\n          <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\n            <label [for]=\"i\">\n              <select [formControlName]=\"i\">\n                  <option selected disabled>Choose one</option>\n                <option *ngFor=\"let option of FormFields[i].options;let j=index\">{{option}}</option>\n              </select>\n            </label>\n          </div>\n           <!----------------------End Dropbox Button------------------>\n        </div>\n      </div>\n      <br>\n      <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n    </form>\n  </li>\n</ul>\n</div>\n"

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3>\n    Applicant List\n  </h3>\n  <div class=\"col-md-2\">\n    <ul>\n      <li *ngFor=\"let item of ApplicantsDetails;let j= index\">\n        <a (click)=\"OnSelectApplicantType(j)\">{{item.type}}</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-md-8\"  *ngIf=\"SelectedApplicant.count_applicants > 0\">\n    <select [(ngModel)]=\"FilterType\">\n      <option selected disabled>Choose one</option>\n      <option *ngFor=\"let col of SelectedApplicant.fields\">{{col.label}}</option>\n    </select>\n\n    <input type=\"text\" [(ngModel)]=\"FilterText\" (ngModelChange)=\"OnFilterChange()\">\n    <!-- <button (click)=\"OnFilterChange()\">Search</button> -->\n    <table class=\"table-striped table-bordered\">\n      \n      <tr>\n        <th *ngFor=\"let col of SelectedApplicant.fields\">\n          {{col.label}}\n        </th>\n      </tr>\n      <tr *ngFor=\"let applicant of SelectedApplicant.applicants | filterBy: userFilter\">\n        <td *ngFor=\"let col of SelectedApplicant.fields\">{{applicant[col.label]}}</td>\n      </tr>\n    </table>\n    <br>\n    \n  </div>\n  <!-- <div class=\"col-md-2\" *ngFor=\"let filter of userFilter | keys\">\n      <label>filter.key</label>filter.value\n  </div> -->\n\n</div>"

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<span>\n  Form Title :\n</span>\n<input [(ngModel)]=\"SelectedForm.FormTitle\">\n<br>\n<span>\n  Form Type :\n</span>\n<select id=\"type\" name=\"type\" [(ngModel)]=\"SelectedForm.FormType\" required>\n  <option *ngFor=\"let option of ApplicantType\">{{option.type}}</option>\n</select>\n\n<table class=\"table-bordered table-condensed table-striped\">\n  <tr *ngFor=\"let control of controls\">\n    <td>{{control.type}}</td>\n    <td *ngIf=\"!control.isMultiField\"></td>\n    <td *ngIf=\"control.isMultiField\">\n      <input type=\"text\" [(ngModel)]=\"control.optionCount\">\n    </td>\n    <td>\n      <a (click)=\"AddControl(control)\">Add</a>\n    </td>\n  </tr>\n</table>\n\n<div *ngIf=\"ProfileFormControlCount >0\">\n  <div *ngFor=\"let item of SelectedForm.FormFields; let i = index;\">\n    <div [ngSwitch]=\"item.type\">\n      <label>{{item.type}}</label>\n      <!-----------------------For Radio Button------------------>\n      <div *ngSwitchCase=\"'Radio'\" class=\"form-group\">\n        <input [(ngModel)]=\"item.label\" [ngModelOptions]=\"{standalone: true}\">\n        <ul>\n          <li *ngFor=\"let option of item.options; let j = index\">\n            <input [value]=\"option\" (change)=\"OnOptionChange(i,$event.target.value,j)\">\n            <a (click)=\"RemoveOption(i,j)\">X</a>\n          </li>\n        </ul>\n        <a (click)=\"AddOption(i)\">Add Options</a>\n        <a (click)=\"RemoveControl(i)\">Remove Control</a>\n      </div>\n      <!-----------------------End Radio Button------------------>\n\n      <!-----------------------For Checkbox Button------------------>\n      <div *ngSwitchCase=\"'Checkbox'\" class=\"form-group\">\n        <input [(ngModel)]=\"item.label\" [ngModelOptions]=\"{standalone: true}\">\n        <ul>\n          <li *ngFor=\"let option of item.options; let j = index\">\n            <input [value]=\"option\" (change)=\"OnOptionChange(i,$event.target.value,j)\">\n            <a (click)=\"RemoveOption(i,j)\">X</a>\n          </li>\n        </ul>\n        <a (click)=\"AddOption(i)\">Add Options</a>\n        <a (click)=\"RemoveControl(i)\">Remove Control</a>\n      </div>\n      <!-----------------------End Checkbox Button------------------>\n\n      <!-----------------------For Dropbox Button------------------>\n      <div *ngSwitchCase=\"'Dropdown'\" class=\"dropdown\">\n        <input [(ngModel)]=\"item.label\" [ngModelOptions]=\"{standalone: true}\" />\n        <ul>\n          <li *ngFor=\"let option of item.options; let j = index\">\n            <input [value]=\"option\" (change)=\"OnOptionChange(i,$event.target.value,j)\">\n            <a (click)=\"RemoveOption(i,j)\">X</a>\n          </li>\n        </ul>\n        <a (click)=\"AddOption(i)\">Add Options</a>\n        <a (click)=\"RemoveControl(i)\">Remove Control</a>\n      </div>\n      <!----------------------End Dropbox Button------------------>\n\n      <!-----------------------For Textbox Button------------------>\n      <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n        <input [(ngModel)]=\"item.label\" [ngModelOptions]=\"{standalone: true}\">\n        <a (click)=\"RemoveControl(i)\">Remove Control</a>\n      </div>\n\n      <!----------------------End Textbox Button------------------>\n\n      <!-----------------------For TextArea Button------------------>\n      <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n        <input [(ngModel)]=\"item.label\" [value]=\"item.label\" [ngModelOptions]=\"{standalone: true}\">\n        <a (click)=\"RemoveControl(i)\">Remove Control</a>\n      </div>\n      <!----------------------End TextArea Button------------------>\n    </div>\n  </div>\n  <br>\n\n  <button class=\"btn btn-primary\" *ngIf=\"ProfileFormControlCount>0\" (click)=\"OnSave()\" type=\"submit\">Save</button>\n</div>"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n        <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n            <div class=\"navbar-header\">\r\n            </div>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <!-- <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\r\n                    <a [routerLink]=\"['createform']\">Create Form</a>\r\n                </li> -->\r\n                <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\r\n                    <a [routerLink]=\"['forms']\">View Form</a>\r\n                </li>\r\n                <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\r\n                        <a [routerLink]=\"['applicants']\">Applicants</a>\r\n                    </li>\r\n                <li routerLinkActive=\"active\" *ngIf=\"UserType != 'Admin'\">\r\n                    <a [routerLink]=\"['profile']\">Profile</a>\r\n                </li>\r\n                <li>\r\n                    <a style=\"cursor: pointer\" (click)=\"OnLogout()\">Logout</a>\r\n                </li>\r\n            </ul>\r\n          </nav>\r\n  <div id=\"page-wrapper\" style=\"margin:100px\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "    <h4>Preview</h4>\n    <h4>{{SelectedForm.FormTitle}}</h4>\n        <div *ngFor=\"let item of SelectedForm.FormFields;\">\n            <div [ngSwitch]=\"item.type\">\n                <label>\n                    {{item.label}}\n                </label>\n               <!-----------------------For Radio Button------------------>\n               <div *ngSwitchCase=\"'Radio'\" class=\"form-group\">\n                 <div *ngFor=\"let option of item.options; let j = index\" >\n                     <!-- <label class=\"radio-inline\">{{option}}</label> -->\n                     {{option}}\n                     <input type=\"radio\" [value]=\"option\">\n                    </div>\n               </div>\n               <!-----------------------End Radio Button------------------>\n         \n               <!-----------------------For Checkbox Button------------------>\n               <div *ngSwitchCase=\"'Checkbox'\">\n                   <div *ngFor=\"let option of item.options; let j = index\">\n                     {{option}}\n                       <input type=\"checkbox\">\n                   </div>\n               </div>\n               <!-----------------------End Checkbox Button------------------>\n         \n               <!-----------------------For Textbox Button------------------>\n               <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n                   <input type=\"text\"/>\n               </div>\n               <!----------------------End Textbox Button------------------>\n         \n               <!-----------------------For Paragraph Button------------------>\n               <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n                   <textarea></textarea>\n               </div>\n               <!----------------------End Paragraph Button------------------>\n         \n               <!-----------------------For Dropbox Button------------------>\n               <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\n                   <select>\n                       <option selected disabled>Choose one</option>\n                     <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option>\n                   </select>\n               </div>\n                <!----------------------End Dropbox Button------------------>\n             </div>\n           </div>"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-4\">\n      <ul>\n        Forms List\n        <li *ngFor=\"let option of FormsList; let j=index\"><a (click) =\"OnSelectForm(j)\">{{option.FormTitle}} ({{option.FormType}})</a></li>\n      </ul>\n      <a (click)=\"CreateNewForm()\">+ New Form</a>\n    </div>\n\n    <div class=\"col-xs-4\" *ngIf=\"isSelected\" >\n        <app-custom-form [SelectedForm]=\"SelectedForm\"  (FormSaved)=\"OnSaveForm($event)\"></app-custom-form>\n    </div>\n    \n    <div class=\"col-xs-4\" *ngIf=\"isSelected\" >\n            <app-preview-form [SelectedForm]=\"SelectedForm\"></app-preview-form>\n        </div>\n     \n</div>"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <span class=\"help-block\" >{{message}}</span>\r\n      <form (ngSubmit)=\"OnSignIn(f)\" #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"userid\">Phone No.</label>\r\n            <input type=\"userid\" \r\n                     id=\"userid\" \r\n                     class=\"form-control\" \r\n                     ngModel \r\n                     name=\"userid\"\r\n                     required\r\n                     #userid = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n            <span class=\"help-block\" *ngIf=\"!userid.valid && userid.touched\">Phone No. is invalid</span>\r\n           \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" ngModel required #password = \"ngModel\">\r\n            <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\" >Password is required</span>\r\n  </div>\r\n  <button class=\"btn btn-primary\" [disabled]=\"!f.valid && f.touched\" type=\"submit\">Sign In</button>\r\n  <button class=\"btn btn-default\" (click) = \"GoToSignup()\" type=\"button\">New User? Sign up</button>\r\n  </form>\r\n  </div>\r\n</div>\r\n<!--Email Pattern check pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"-->"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <span class=\"help-block\" >{{message}}</span>\r\n        <form (ngSubmit)=\"OnSignUp(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"userid\">Phone No</label>\r\n              <input type=\"userid\" \r\n                       id=\"userid\" \r\n                       class=\"form-control\" \r\n                       name=\"userid\"\r\n                       required\r\n                       [(ngModel)]=\"phoneno\"\r\n                       #userid = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n              <span class=\"help-block\" *ngIf=\"!userid.valid && userid.touched\">Phone No. is invalid</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"isSMSSent\">\r\n                <label for=\"otp\">OTP</label>\r\n                  <input type=\"text\" \r\n                           id=\"otp\" \r\n                           class=\"form-control\" \r\n                           name=\"otp\"\r\n                           required\r\n                           [(ngModel)]=\"otptext\"\r\n                           #otp = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n                  <span class=\"help-block\" *ngIf=\"!otp.valid && otp.touched\">OTP is invalid</span>\r\n                </div>\r\n            \r\n\r\n              <button class=\"btn btn-warning\" *ngIf=\"!isSMSSent\" (click)=\"SendOTP()\" type='button'>Continue</button>\r\n              <button class=\"btn btn-warning\" *ngIf=\"isSMSSent && !isPhoneVerified\" (click)=\"VerifyOTP()\" type='button'>Verify OTP</button>\r\n            \r\n            <div class=\"form-group\" *ngIf=\"isPhoneVerified\">\r\n              <label for=\"type\">Type\r\n                <select id=\"type\" name=\"type\" ngModel required>\r\n                    <option selected disabled>Choose one</option>\r\n                    <option *ngFor=\"let option of ApplicantType;let j=index\">{{option.type}}</option>\r\n                </select></label>\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" minlength=\"6\" id=\"password\" name=\"password\" class=\"form-control\" ngModel required #password = \"ngModel\">\r\n              <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\" >Password is invalid</span>\r\n              <span class=\"help-block\" *ngIf=\"password.errors?.minlength && password.touched\">Password must be atleast 6 characters long</span>\r\n            </div>\r\n            <button class=\"btn btn-primary\" *ngIf=\"isPhoneVerified\" [disabled]=\"!f.valid && f.touched\" type=\"submit\">Sign Up</button>\r\n            <button class=\"btn btn-default\" (click)=\"OnLoginPage()\" type='button'>Already have an account? Log in</button>\r\n          </form>\r\n    </div>\r\n</div>\r\n  <!-- pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" -->"

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
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




var CustomFormService = /** @class */ (function () {
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
    CustomFormService.prototype.SaveForm = function (FormFields, FormTitle, FormType, formid) {
        return this.http.post('saveForm', { FormFields: FormFields, FormTitle: FormTitle, FormType: FormType, formid: formid }).map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Save Forms");
            }
            else {
                return res.json();
            }
        });
    };
    CustomFormService.prototype.GetForm = function (type) {
        //console.log("Get form");
        return this.http.post('getForm', { type: type }).map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Get Forms");
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj))
                    return res.json();
                return null;
            }
        });
    };
    CustomFormService.prototype.GetAllForms = function () {
        //console.log("Get form");
        return this.http.get('getAllForms').map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Get Forms");
            }
            else {
                return res.json();
            }
        });
    };
    CustomFormService.prototype.GetAllApplicants = function () {
        return this.http.get('getAllApplicants').map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Get Applicants List");
            }
            else {
                var obj = res.json();
                return res.json();
            }
        });
    };
    CustomFormService.prototype.SaveApplicantForm = function (ApplicantDetails) {
        return this.http.post('saveApplicantData', ApplicantDetails).map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Get Forms");
            }
            else {
                var obj = res.json();
                console.log(obj);
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj))
                    return res.json();
                return null;
            }
        });
    };
    CustomFormService.prototype.GetApplicantProfile = function (_id) {
        return this.http.post('getApplicantProfile', { _id: _id }).map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Get Forms");
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj))
                    return res.json();
                return null;
            }
        });
    };
    CustomFormService.prototype.UpdateApplicantProfile = function (oldobj, newobj) {
        return this.http.post('UpdateApplicantProfile', { oldobj: oldobj, newobj: newobj }).map(function (res) {
            if (res.status == 400) {
                throw new Error("Couldn't Get Forms");
            }
            else {
                var obj = res.json();
                console.log(obj);
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj))
                    return res.json();
                return null;
            }
        });
    };
    CustomFormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], CustomFormService);
    return CustomFormService;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/FreelanceProject/JobPortal/src/custom-form.service.js.map

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[769]);
//# sourceMappingURL=main.bundle.map