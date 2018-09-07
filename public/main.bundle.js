webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomListService = /** @class */ (function () {
    function CustomListService() {
        this.countries = new Array();
        this.companytypes = new Array();
    }
    CustomListService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CustomListService);
    return CustomListService;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/custom-list.service.js.map

/***/ }),

/***/ 297:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 297;


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(305);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/main.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
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
        // console.log("Nginit app compo");
        this.AuthService.isAuthenticated.subscribe(function (isauth) {
            // console.log("Set Is Authenticated");
            _this.IsAuthenticated = isauth;
        });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(491),
            styles: [__webpack_require__(480)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/app.component.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_filter_pipe__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_custom_list_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signin_signin_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_create_form_create_form_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_create_template_create_template_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_applicant_form_applicant_form_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_view_forms_view_forms_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_applicant_list_applicant_list_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_preview_form_preview_form_component__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_applicant_profile_applicant_profile_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_Keys_pipe__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_Times_pipe__ = __webpack_require__(308);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_11__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]], children: [
            // { path: 'createform', component: CreateFormComponent, canActivate:[AuthGuard]},
            { path: 'forms', component: __WEBPACK_IMPORTED_MODULE_17__home_view_forms_view_forms_component__["a" /* ViewFormsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'applicants', component: __WEBPACK_IMPORTED_MODULE_18__home_applicant_list_applicant_list_component__["a" /* ApplicantListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_16__home_applicant_form_applicant_form_component__["a" /* ApplicantFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'ViewProfile/:id', component: __WEBPACK_IMPORTED_MODULE_20__home_applicant_profile_applicant_profile_component__["a" /* ApplicantProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] },
            { path: 'templates', component: __WEBPACK_IMPORTED_MODULE_15__home_create_template_create_template_component__["a" /* CreateTemplateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */]] }
        ] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_create_form_create_form_component__["a" /* CreateFormComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_applicant_form_applicant_form_component__["a" /* ApplicantFormComponent */],
                __WEBPACK_IMPORTED_MODULE_17__home_view_forms_view_forms_component__["a" /* ViewFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_applicant_list_applicant_list_component__["a" /* ApplicantListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_preview_form_preview_form_component__["a" /* PreviewFormComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_create_template_create_template_component__["a" /* CreateTemplateComponent */],
                __WEBPACK_IMPORTED_MODULE_20__home_applicant_profile_applicant_profile_component__["a" /* ApplicantProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_21__home_Keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_22__home_Times_pipe__["a" /* TimesPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__home_custom_form_service__["a" /* CustomFormService */], __WEBPACK_IMPORTED_MODULE_9__home_custom_list_service__["a" /* CustomListService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
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
        //  2.) If token is not set, which means a new tab is opened, then check the node server if session is still open. 
        // if open then take action similar to 1, ese redirect to sigin page
        //     console.log("Check for session");
        return this.authService.isSessionOpen().take(1).map(function (obj) {
            // console.log(obj);
            if (obj === true) {
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

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/auth-guard.service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
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

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/Keys.pipe.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimesPipe = /** @class */ (function () {
    function TimesPipe() {
    }
    TimesPipe.prototype.transform = function (value) {
        return (new Array(value)).fill(1);
    };
    TimesPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'times' })
    ], TimesPipe);
    return TimesPipe;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/Times.pipe.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_list_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(99);
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
    // When Form is partially filled.0: form in no-edit state, 1: Changes Saved, -1: Changes not saved due to error,2:in edit/remove/add
    function ApplicantFormComponent(customFormService, authService, fb, customListService) {
        this.customFormService = customFormService;
        this.authService = authService;
        this.fb = fb;
        this.customListService = customListService;
        this.FormFields = new Array();
        this.isFormSaved = 0;
        this.isFormLoaded = false; // It checks whether in the begining Empty or Filled Form is loaded
    }
    ApplicantFormComponent.prototype.ngOnInit = function () {
        // console.log(this.authService.sessionData);
        this.sessionData = this.authService.sessionData;
        this.type = this.sessionData.type;
        this.ProfileForm = this.fb.group({
            customcontrols: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormArray */]([])
        });
        this.GetApplicantProfile();
        this.GetAllList();
    };
    ApplicantFormComponent.prototype.GetApplicantProfile = function () {
        var _this = this;
        this.customFormService.GetApplicantProfile(this.sessionData._id).subscribe(function (obj) {
            if (obj) {
                _this.isApplicationFilled = true;
                _this.ProfileDetails = obj;
                _this.CreateForm();
            }
            else {
                _this.isApplicationFilled = false;
                console.log(_this.type);
                _this.CreateEmptyForm();
            }
        });
    };
    ApplicantFormComponent.prototype.GetAllList = function () {
        var _this = this;
        if (this.customListService.countries.length === 0) {
            this.customFormService.getCountries().subscribe(function (obj) {
                _this.customListService.countries = obj;
            });
        }
        if (this.customListService.companytypes.length === 0) {
            this.customFormService.getCompanyTypes().subscribe(function (obj) {
                _this.customListService.companytypes = obj;
            });
        }
    };
    ApplicantFormComponent.prototype.GetFieldValue = function (SectionIndex, subindex, FieldIndex) {
        var FieldType = this.FormLayout.Sections[SectionIndex][subindex].Fields[FieldIndex].FieldType.toString();
        var FormAllSections = this.ProfileForm.get('customcontrols');
        var FormValues = FormAllSections.value;
        var result = '';
        if (FieldType === 'Checkbox') {
            var checkboxarray = FormValues[SectionIndex][subindex][FieldIndex];
            for (var i = 0; i < checkboxarray.length; i++) {
                if (checkboxarray[i]) {
                    result = result + this.FormLayout.Sections[SectionIndex][subindex].Fields[FieldIndex].options[i] + ' ';
                }
            }
            return result;
        }
        else {
            return FormValues[SectionIndex][subindex][FieldIndex];
        }
    };
    // ----------------For Checkbox---------------//
    ApplicantFormComponent.prototype.checkOptionInProfile = function (sectionid, subsectionindex, option, fieldid) {
        if (this.ProfileDetails[sectionid][subsectionindex][fieldid] &&
            this.ProfileDetails[sectionid][subsectionindex][fieldid].length > 0) {
            return this.ProfileDetails[sectionid][subsectionindex][fieldid].includes(option);
        }
        else {
            return false;
        }
    };
    ApplicantFormComponent.prototype.onSelectParent = function (sectionindex, subindex, fieldindex, value) {
        var currFieldId = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].FieldID.toString();
        var FieldType = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].FieldType.toString();
        var currSectionId = this.FormLayout.Sections[sectionindex][subindex].SectionID.toString();
        var ParentSectionId = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].ParentField.SectionID;
        var ParentFieldId = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].ParentField.FieldID;
        var suboptions;
        var ParentValue;
        var FormAllSections = this.ProfileForm.get('customcontrols');
        var FormValues = FormAllSections.value;
        // console.log(FormValues);
        var ParentSectionIndex = this.ActualForm.Sections
            .findIndex(function (sec) { return sec.SectionID.toString() === ParentSectionId; });
        if (ParentSectionIndex !== -1) {
            var ParentSection = this.FormLayout.Sections[ParentSectionIndex][subindex];
            var ParentFieldIndex = ParentSection.Fields.findIndex(function (field) { return field.FieldID.toString() === ParentFieldId; });
            var ParentField = ParentSection.Fields[ParentFieldIndex];
            if (ParentField) {
                // Taking Parent value from same sub-section
                ParentValue = FormValues[ParentSectionIndex][subindex][ParentFieldIndex];
            }
        }
        // get sub-options for selected Parent ( for eg: list of states if country selected is India)
        if (FieldType === 'Country') {
            if (this.customListService.countries.length > 0) {
                var country = this.customListService.countries.find(function (c) { return c.CountryName === value; });
                suboptions = country.States;
            }
        }
        if (FieldType === 'State') {
            if (this.customListService.countries.length > 0) {
                var type = this.customListService.countries.find(function (c) {
                    return c.CountryName === ParentValue;
                });
                var States = type.States.find(function (c) { return c.StateName === value; });
                if (States) {
                    suboptions = States.Cities;
                }
            }
        }
        if (FieldType === 'Type') {
            if (this.customListService.companytypes.length > 0) {
                var type = this.customListService.companytypes.find(function (c) { return c.name === value; });
                suboptions = type.InstallationType;
            }
        }
        if (FieldType === 'InstallationType') {
            if (this.customListService.companytypes.length > 0) {
                var type = this.customListService.companytypes.find(function (c) {
                    return c.name === ParentValue;
                });
                var InstallationType = type.InstallationType.find(function (c) { return c.name === value; });
                if (InstallationType) {
                    suboptions = InstallationType.Designation;
                }
            }
        }
        // Get dependent fields
        var DepedentFields = this.FormLayout.Sections[sectionindex][subindex].Fields[fieldindex].DependentFieldList;
        var _loop_1 = function (i) {
            var DependentSectionId = DepedentFields[i].SectionID.toString();
            var DependentFieldId = DepedentFields[i].FieldID.toString();
            // Search for dependent SectionId and FieldId in all Sections. when found remove currfield from its parent field List
            var DependentSectionIndex = this_1.ActualForm.Sections
                .findIndex(function (sec) { return sec.SectionID.toString() === DependentSectionId; });
            if (DependentSectionIndex !== -1) {
                var DependentSection = this_1.FormLayout.Sections[DependentSectionIndex][subindex];
                var DependentField = DependentSection.Fields.find(function (field) { return field.FieldID.toString() === DependentFieldId; });
                if (DependentField) {
                    // Update Field.options
                    DependentField.options = suboptions;
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < DepedentFields.length; i++) {
            _loop_1(i);
        }
    };
    ApplicantFormComponent.prototype.GetAllCountries = function (sectionindex, subsectionindex, fieldindex, Formfields) {
        var _this = this;
        // ------------------- If countries is never fetched------------//
        if (this.customListService.countries.length === 0) {
            this.customFormService.getCountries().subscribe(function (obj) {
                _this.customListService.countries = obj;
                var field = _this.FormLayout.Sections[sectionindex][subsectionindex].Fields[fieldindex];
                field.options = _this.customListService.countries;
                _this.PushOptions(sectionindex, subsectionindex, fieldindex, Formfields, field);
            });
        }
        else {
            var field = this.FormLayout.Sections[sectionindex][subsectionindex].Fields[fieldindex];
            field.options = this.customListService.countries;
            this.PushOptions(sectionindex, subsectionindex, fieldindex, Formfields, field);
        }
    };
    ApplicantFormComponent.prototype.GetAllCompanyType = function (sectionindex, subsectionindex, fieldindex, Formfields) {
        var _this = this;
        // ------------------- If company Types is never fetched------------//
        if (this.customListService.companytypes.length === 0) {
            this.customFormService.getCompanyTypes().subscribe(function (obj) {
                _this.customListService.companytypes = obj;
                var field = _this.FormLayout.Sections[sectionindex][subsectionindex].Fields[fieldindex];
                field.options = _this.customListService.companytypes;
                _this.PushOptions(sectionindex, subsectionindex, fieldindex, Formfields, field);
            });
        }
        else {
            var field = this.FormLayout.Sections[sectionindex][subsectionindex].Fields[fieldindex];
            field.options = this.customListService.companytypes;
            this.PushOptions(sectionindex, subsectionindex, fieldindex, Formfields, field);
        }
    };
    ApplicantFormComponent.prototype.PushOptions = function (sectionindex, subsectionindex, fieldindex, Formfields, field) {
        var newcontrol;
        // If Partially-Filled/ fully Filled form is already present in DB
        if (this.ProfileDetails != null) {
            var existingdetails = this.ProfileDetails[this.FormLayout.Sections[sectionindex][subsectionindex].SectionID];
            // console.log(fields.options);
            var isSectionDetailAvailable = false;
            if (existingdetails && existingdetails.length > 0) {
                isSectionDetailAvailable = true;
            }
            if (isSectionDetailAvailable) { // ------If the Corresponding section is available in Applicant Form -----//
                var val = existingdetails[subsectionindex][field.FieldID];
                if (val) { // ------If the Corresponding field is available in Applicant Form -----//
                    newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](val, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                }
                else {
                    newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                }
            }
            else {
                newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
            }
        }
        else {
            newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
        }
        // const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
        // const Formfields = new FormGroup({});
        Formfields.addControl(fieldindex.toString(), newcontrol); // Adds new Control to Form Fields
        // Formcurrsection.insert(subsectionindex, Formfields);  // Adds Form Fields to FormcurrSection
        // FormAllSections.insert(sectionindex, Formcurrsection); // Adds FormCurrSection to FormAllSection
        // console.log(FormAllSections);
    };
    ApplicantFormComponent.prototype.CreateForm = function () {
        var _this = this;
        this.customFormService.GetForm(this.type).subscribe(function (obj) {
            _this.FormLayout = new Object();
            _this.FormLayout.Sections = new Array();
            if (obj) {
                _this.ActualForm = obj;
                _this.FormTitle = obj.FormTitle;
                var FormAllSections = _this.ProfileForm.get('customcontrols');
                for (var i = 0; i < obj.Sections.length; i++) {
                    var currsection = JSON.parse(JSON.stringify(obj.Sections[i])); // To do Deep Copy
                    var existingdetails = _this.ProfileDetails[obj.Sections[i].SectionID];
                    var isSectionDetailAvailable = false;
                    if (existingdetails && existingdetails.length > 0) {
                        currsection.count = existingdetails.length;
                        isSectionDetailAvailable = true;
                    }
                    else {
                        currsection.count = 1;
                    }
                    _this.FormLayout.Sections[i] = new Array();
                    var fields = currsection.Fields;
                    currsection.isEditMode = false;
                    var Formcurrsection = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormArray */]([]);
                    for (var j = 0; j < currsection.count; j++) {
                        var subsection = JSON.parse(JSON.stringify(currsection));
                        _this.FormLayout.Sections[i].push(subsection); // To do Deep Copy
                        var Formfields = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormGroup */]({});
                        for (var findex = 0; findex < fields.length; findex++) {
                            // Get Countries List if Country type
                            if (fields[findex].FieldType === 'Country') {
                                // FormSectionIndex, FormCurresectionIndex, fieldindex
                                _this.GetAllCountries(i, j, findex, Formfields);
                            }
                            else if (fields[findex].FieldType === 'Type') {
                                // FormSectionIndex, FormCurresectionIndex, fieldindex
                                _this.GetAllCompanyType(i, j, findex, Formfields);
                            }
                            else if (fields[findex].FieldType === 'Checkbox') {
                                var checkboxoptionArray = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormArray */]([]);
                                for (var count = 0; count < fields[findex].options.length; count++) {
                                    var option = fields[findex].options[count];
                                    var optioncontrol = void 0;
                                    if (isSectionDetailAvailable) {
                                        if (_this.checkOptionInProfile(obj.Sections[i].SectionID, j, option, fields[findex].FieldID)) {
                                            optioncontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](true, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                        }
                                        else {
                                            optioncontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](false, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                        }
                                    }
                                    else {
                                        optioncontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](false, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                    }
                                    checkboxoptionArray.push(optioncontrol);
                                }
                                Formfields.addControl(findex.toString(), checkboxoptionArray);
                            }
                            else {
                                var newcontrol = void 0;
                                if (isSectionDetailAvailable) {
                                    var val = existingdetails[j][fields[findex].FieldID];
                                    if (val) {
                                        newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](val, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                    }
                                    else {
                                        newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                    }
                                }
                                else {
                                    newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                }
                                Formfields.addControl(findex.toString(), newcontrol);
                            }
                        }
                        // console.log(j);
                        Formcurrsection.push(Formfields);
                    }
                    FormAllSections.push(Formcurrsection);
                }
                // console.log(FormAllSections);
                // console.log(this.FormLayout);
            }
            _this.isFormLoaded = true;
        });
    };
    ApplicantFormComponent.prototype.CreateEmptyForm = function () {
        var _this = this;
        // console.log(this.type);
        this.customFormService.GetForm(this.type).subscribe(function (obj) {
            _this.FormLayout = new Object();
            _this.FormLayout.Sections = new Array();
            if (obj) {
                _this.ActualForm = obj;
                _this.FormTitle = obj.FormTitle;
                var FormAllSections = _this.ProfileForm.get('customcontrols');
                for (var i = 0; i < obj.Sections.length; i++) {
                    var currsection = JSON.parse(JSON.stringify(obj.Sections[i])); // To do Deep Copy
                    // console.log(JSON.stringify(obj.Sections[i]));
                    currsection.isEditMode = false;
                    currsection.count = 1;
                    // Each Section is an Array of Sub section. Initially in an Empty form Section has only 1 SubSection //
                    _this.FormLayout.Sections[i] = new Array();
                    var fields = currsection.Fields;
                    var Formcurrsection = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormArray */]([]);
                    for (var j = 0; j < currsection.count; j++) {
                        _this.FormLayout.Sections[i].push(currsection);
                        var Formfields = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormGroup */]({});
                        for (var findex = 0; findex < fields.length; findex++) {
                            if (fields[findex].FieldType === 'Country') {
                                _this.GetAllCountries(i, j, findex, Formfields);
                                var newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                Formfields.addControl(findex.toString(), newcontrol);
                            }
                            else if (fields[findex].FieldType === 'Type') {
                                _this.GetAllCompanyType(i, j, findex, Formfields);
                                var newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                Formfields.addControl(findex.toString(), newcontrol);
                            }
                            else if (fields[findex].FieldType === 'Checkbox') {
                                var checkboxoptionArray = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormArray */]([]);
                                for (var count = 0; count < fields[findex].options.length; count++) {
                                    var option = fields[findex].options[count];
                                    var optioncontrol = void 0;
                                    optioncontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](false, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                    checkboxoptionArray.push(optioncontrol);
                                }
                                Formfields.addControl(findex.toString(), checkboxoptionArray);
                            }
                            else {
                                var newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                                Formfields.addControl(findex.toString(), newcontrol);
                            }
                        }
                        Formcurrsection.push(Formfields);
                    }
                    FormAllSections.push(Formcurrsection);
                    // console.log(FormAllSections);
                }
            }
            _this.isFormLoaded = true;
        });
    };
    ApplicantFormComponent.prototype.AddSubSection = function (currsectionindex) {
        var currsection = this.FormLayout.Sections[currsectionindex][0];
        var newSubSection = JSON.parse(JSON.stringify(currsection));
        newSubSection.isEditMode = true;
        var fields = currsection.Fields;
        var FormAllSections = this.ProfileForm.get('customcontrols');
        // console.log(FormAllSections);
        var Formcurrsection = FormAllSections.controls[currsectionindex];
        var Formfields = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormGroup */]({});
        for (var findex = 0; findex < fields.length; findex++) {
            if (fields[findex].FieldType === 'Checkbox') {
                var checkboxoptionArray = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormArray */]([]);
                for (var count = 0; count < fields[findex].options.length; count++) {
                    var option = fields[findex].options[count];
                    var optioncontrol = void 0;
                    optioncontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](false, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                    checkboxoptionArray.push(optioncontrol);
                }
                Formfields.addControl(findex.toString(), checkboxoptionArray);
            }
            else {
                var newcontrol = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required);
                Formfields.addControl(findex.toString(), newcontrol);
            }
        }
        Formcurrsection.push(Formfields);
        this.FormLayout.Sections[currsectionindex].push(newSubSection);
        this.isFormSaved = 2;
    };
    ApplicantFormComponent.prototype.RemoveSubSection = function (currsectionindex, subindex) {
        // Check if only one subsection/row then don't remove row
        if (this.FormLayout.Sections[currsectionindex].length > 1) {
            var FormAllSections = this.ProfileForm.get('customcontrols');
            // console.log(FormAllSections);
            var Formcurrsection = FormAllSections.controls[currsectionindex];
            Formcurrsection.removeAt(subindex);
            // console.log(this.FormLayout.Sections[currsectionindex][subindex]);
            var subsectionarray = this.FormLayout.Sections[currsectionindex];
            subsectionarray.splice(subindex, 1);
        }
        this.isFormSaved = 2;
    };
    ApplicantFormComponent.prototype.EditSubSection = function (sectionindex, subindex) {
        this.FormLayout.Sections[sectionindex][subindex].isEditMode = true;
        this.isFormSaved = 2;
    };
    ApplicantFormComponent.prototype.onSavesubSection = function (sectionindex, subindex) {
        this.FormLayout.Sections[sectionindex][subindex].isEditMode = false;
        this.isFormSaved = 2;
    };
    // onSaveSection(secindex) {
    //     const obj = {};
    //     const oldobj = { _id: this.sessionData._id };
    //     const FormAllSections = this.ProfileForm.get('customcontrols') as FormArray;
    //     const FormValues = FormAllSections.value;
    //     // console.log(FormValues);
    //     const sectionid = this.FormLayout.Sections[secindex][0].SectionID;
    //     obj[this.FormLayout.Sections[secindex][0].SectionID] = [];
    //     for (let subsecindex = 0; subsecindex > this.FormLayout.Sections[secindex].length; subsecindex++) {
    //         const fieldsobj = {};
    //         const Fields = this.FormLayout.Sections[secindex][subsecindex].Fields;
    //         for (let findex = 0; findex < Fields.length; findex++) {
    //             const field = Fields[findex];
    //             const fieldid = field.FieldID;
    //             // console.log(fieldid);
    //             const fieldvalue = FormValues[secindex][subsecindex][findex];
    //             // console.log(fieldvalue);
    //             if (field.FieldType === 'Checkbox') {
    //                 fieldsobj[fieldid] = new Array();
    //                 for (let j = 0; j < field.options.length; j++) {
    //                     if (fieldvalue[j]) {
    //                         fieldsobj[fieldid].push(field.options[j]);
    //                     }
    //                 }
    //             }else {
    //                 fieldsobj[fieldid] = fieldvalue;
    //             }
    //         }
    //         obj[sectionid].push(fieldsobj);
    //         this.FormLayout.Sections[secindex][subsecindex].isEditMode = false;
    //     }
    //     this.customFormService.UpdateApplicantProfile(oldobj, obj).subscribe((res) => {
    //         if (res) {
    //             this.ProfileDetails = res;
    //         }
    //     });
    // }
    ApplicantFormComponent.prototype.onSaveForm = function () {
        var _this = this;
        var FormAllSections = this.ProfileForm.get('customcontrols');
        var FormValues = FormAllSections.value;
        // console.log(FormValues);
        var obj = { _id: this.sessionData._id, type: this.sessionData.type };
        var Sections = this.FormLayout.Sections;
        for (var secindex = 0; secindex < this.FormLayout.Sections.length; secindex++) {
            // Assuming atleast 1 sub section in a section
            obj[Sections[secindex][0].SectionID] = [];
            for (var subsecindex = 0; subsecindex < Sections[secindex].length; subsecindex++) {
                var fieldsobj = {};
                var Subsection = Sections[secindex][subsecindex];
                Sections[secindex][subsecindex].isEditMode = false;
                for (var i = 0; i < Subsection.Fields.length; i++) {
                    var field = Subsection.Fields[i];
                    var fieldid = field.FieldID;
                    var fieldvalue = FormValues[secindex][subsecindex][i];
                    // console.log(fieldvalue);
                    if (field.FieldType === 'Checkbox') {
                        fieldsobj[fieldid] = new Array();
                        for (var j = 0; j < field.options.length; j++) {
                            if (fieldvalue[j]) {
                                fieldsobj[fieldid].push(field.options[j]);
                            }
                        }
                    }
                    else {
                        fieldsobj[fieldid] = fieldvalue;
                    }
                }
                obj[Sections[secindex][subsecindex].SectionID].push(fieldsobj);
            }
        }
        // console.log(obj);
        this.customFormService.SaveApplicantForm(obj).subscribe(function (res) {
            // console.log(res);
            if (res) {
                _this.isApplicationFilled = true;
                _this.ProfileDetails = res;
                _this.isFormSaved = 1;
            }
            else {
                _this.isFormSaved = -1;
            }
        });
    };
    ApplicantFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-applicant-form',
            template: __webpack_require__(492),
            styles: [__webpack_require__(481)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__custom_list_service__["a" /* CustomListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__custom_list_service__["a" /* CustomListService */]) === "function" && _d || Object])
    ], ApplicantFormComponent);
    return ApplicantFormComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/applicant-form.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jspdf__);
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
        this.ApplicantsDetails = new Array();
        this.userFilter = {};
        this.isApplicantDetailsLoaded = false;
        this.PersonalDetailsID = '5b8552293763452b047283cd'; // Should be same across all the forms
        this.SelectedType = {
            type: '',
            fields: [],
            applicants: [],
            count_applicants: 0
        };
    }
    ApplicantListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customFormService.GetAllApplicantsPersonalDetails(this.PersonalDetailsID).subscribe(function (obj) {
            _this.isApplicantDetailsLoaded = true;
            if (obj && obj.length) {
                _this.AllApplicants = obj;
                _this.customFormService.GetAllForms().subscribe(function (form) {
                    if (form && form.length) {
                        _this.FormsList = form;
                    }
                    _this.CategorizeApplicant();
                });
            }
        });
    };
    ApplicantListComponent.prototype.isEmpty = function (text) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](text);
    };
    ApplicantListComponent.prototype.OnSearch = function () {
        var _this = this;
        // console.log('OnFilterchnage');
        if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isEmpty"](this.FilterText)) {
            this.isApplicantFiltered.fill(true, 0);
        }
        else {
            var searchedtext_1 = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](this.FilterText);
            this.SelectedType.applicants.forEach(function (item, index) {
                _this.SelectedType.fields.some(function (field) {
                    var val = __WEBPACK_IMPORTED_MODULE_2_lodash__["toLower"](item[field.FieldName]);
                    // console.log(val);
                    if (val.indexOf(searchedtext_1) !== -1) {
                        _this.isApplicantFiltered[index] = true;
                        return true;
                    }
                    else {
                        _this.isApplicantFiltered[index] = false;
                    }
                });
            });
        }
    };
    ApplicantListComponent.prototype.OnClearSearch = function () {
        this.FilterText = '';
        this.isApplicantFiltered.fill(true, 0);
    };
    ApplicantListComponent.prototype.OnSelectApplicantType = function (index) {
        // console.log('OnSelectApplicantType');
        this.SelectedType = this.ApplicantsDetails[index];
        this.FilterText = '';
        this.isApplicantChecked = new Array(this.SelectedType.count_applicants);
        this.isApplicantFiltered = new Array(this.SelectedType.count_applicants);
        this.isApplicantChecked.fill(false, 0);
        this.isApplicantFiltered.fill(true, 0);
        // console.log(this.isApplicantFiltered);
        // console.log(this.isApplicantChecked);
    };
    ApplicantListComponent.prototype.ToggleApplicantSelection = function (index) {
        // console.log(this.isApplicantChecked);
        this.isApplicantChecked[index] = !this.isApplicantChecked[index];
        // console.log(this.isApplicantChecked);
    };
    ApplicantListComponent.prototype.CategorizeApplicant = function () {
        var _this = this;
        this.FormsList.forEach(function (form) {
            var obj = {};
            obj['type'] = form.FormTypeName; // form type
            obj['fields'] = [];
            // console.log(form);
            var section = form.Sections.filter(function (s) {
                return s.SectionID.includes(_this.PersonalDetailsID);
            });
            if (section.length) {
                obj['fields'] = section[0].Fields;
            }
            obj['applicants'] = [];
            // ---------For each applicant get Personal Details----------//
            _this.AllApplicants.forEach(function (applicant) {
                // ----Check if Applicant type, is of current Form type and has PersonalDetials section----//
                if (applicant.type === form.FormType && applicant[_this.PersonalDetailsID] && applicant[_this.PersonalDetailsID].length > 0) {
                    var values_1 = applicant[_this.PersonalDetailsID][0]; // values object stores values for differnent field.
                    var singleapplicant_1 = { applicantID: applicant._id };
                    obj['fields'].forEach(function (field) {
                        singleapplicant_1[field.FieldName] = values_1[field.FieldID];
                    });
                    obj['applicants'].push(singleapplicant_1);
                }
            });
            obj['count_applicants'] = obj['applicants'].length;
            // Applicant Details categorizes applicants in number of applicant type category,
            // Each element of ApplicantDetials has list of applicants under that category
            _this.ApplicantsDetails.push(obj);
        });
        // console.log(this.ApplicantsDetails);
    };
    ApplicantListComponent.prototype.ExportSelectedProfiles = function () {
        var _this = this;
        // console.log('Export to pdf');
        this.ApplicantProfiles.forEach(function (profile, index) {
            if (_this.isApplicantChecked[index]) {
                var doc = new __WEBPACK_IMPORTED_MODULE_3_jspdf__();
                var specialElementHandlers = {
                    '#editor': function (element, renderer) {
                        return true;
                    }
                };
                var content = profile.nativeElement;
                doc.fromHTML(content.innerHTML, 15, 15, {
                    'width': 190,
                    'elementHandlers': specialElementHandlers
                });
                var filename = 'Applicant' + _this.SelectedType.applicants[index]['applicantID'] + '.pdf';
                doc.save(filename);
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChildren */])('ApplicantProfiles'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* QueryList */]) === "function" && _a || Object)
    ], ApplicantListComponent.prototype, "ApplicantProfiles", void 0);
    ApplicantListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-applicant-list',
            template: __webpack_require__(493),
            styles: [__webpack_require__(482)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _b || Object])
    ], ApplicantListComponent);
    return ApplicantListComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/applicant-list.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_model__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicantProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApplicantProfileComponent = /** @class */ (function () {
    function ApplicantProfileComponent(route, router, customFormService) {
        this.route = route;
        this.router = router;
        this.customFormService = customFormService;
        this.isProfileLoaded = false;
    }
    ApplicantProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Form = new __WEBPACK_IMPORTED_MODULE_3__form_model__["a" /* FormModel */]();
        this.Applicant = {};
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.customFormService.GetApplicantProfile(id).subscribe(function (obj) {
                if (obj) {
                    _this.Applicant = obj;
                    _this.customFormService.GetForm(_this.Applicant.type).subscribe(function (form) {
                        if (form) {
                            _this.Form = form;
                            _this.OnSelectForm();
                            _this.GetAllFormTemplates(_this.Form._id);
                        }
                    });
                }
            });
        });
    };
    ApplicantProfileComponent.prototype.OnSelectForm = function () {
        // Inititally all the fields of the form are displayed.
        for (var sec = 0; sec < this.Form.Sections.length; sec++) {
            var currsec = this.Form.Sections[sec];
            for (var findex = 0; findex < currsec.Fields.length; findex++) {
                currsec.Fields[findex].isFieldChecked = true;
            }
        }
        this.isProfileLoaded = true;
    };
    ApplicantProfileComponent.prototype.GetFieldValue = function (SectionID, index, FieldID) {
        if (this.Applicant[SectionID]) {
            return this.Applicant[SectionID][index][FieldID];
        }
        return '';
    };
    ApplicantProfileComponent.prototype.GetSectionCount = function (SectionID) {
        if (this.Applicant[SectionID]) {
            return this.Applicant[SectionID].length;
        }
        return 0;
    };
    ApplicantProfileComponent.prototype.GetAllFormTemplates = function (formID) {
        var _this = this;
        this.customFormService.GetTemplatesByFormID(formID).subscribe(function (temp) {
            if (temp && temp.length) {
                _this.TemplateList = temp;
            }
        });
    };
    ApplicantProfileComponent.prototype.CheckedFieldCount = function (secindex) {
        return this.Form.Sections[secindex].Fields.filter(function (field) {
            return field.isFieldChecked === true;
        }).length;
    };
    ApplicantProfileComponent.prototype.OnSelectTemplate = function (val) {
        var index = val.target['selectedIndex'];
        if (index === 0) {
            this.OnSelectForm();
        }
        else {
            var SelectedTemplate = this.TemplateList[index - 1];
            var Section = {};
            for (var sec = 0; sec < this.Form.Sections.length; sec++) {
                var currsec = this.Form.Sections[sec];
                Section[currsec.SectionID] = sec; // storing the index
            }
            var _loop_1 = function (i) {
                var templatesec = SelectedTemplate.Sections[i];
                // If Section is present in template section look for fields in Template
                if (Section.hasOwnProperty(templatesec.SectionID)) {
                    var secindex = Section[templatesec.SectionID];
                    var currsec = this_1.Form.Sections[secindex];
                    var formfields_1 = currsec.Fields;
                    var _loop_2 = function (findex) {
                        var isFieldpresent = templatesec.Fields.filter(function (field) {
                            return field === formfields_1[findex].FieldID;
                        });
                        if (isFieldpresent.length) {
                            currsec.Fields[findex].isFieldChecked = true;
                        }
                        else {
                            currsec.Fields[findex].isFieldChecked = false;
                        }
                    };
                    for (var findex = 0; findex < formfields_1.length; findex++) {
                        _loop_2(findex);
                    }
                    console.log(SelectedTemplate);
                }
            };
            var this_1 = this;
            for (var i = 0; i < SelectedTemplate.Sections.length; i++) {
                _loop_1(i);
            }
        }
    };
    ApplicantProfileComponent.prototype.PrintToPdf = function () {
        console.log('Export to pdf');
        var doc = new __WEBPACK_IMPORTED_MODULE_4_jspdf__();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        var content = this.ApplicantProfile.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            'elementHandlers': specialElementHandlers
        });
        console.log(content);
        var filename = 'Applicant' + this.Applicant._id + '.pdf';
        doc.save(filename);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('ApplicantProfile'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
    ], ApplicantProfileComponent.prototype, "ApplicantProfile", void 0);
    ApplicantProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-applicant-profile',
            template: __webpack_require__(494),
            styles: [__webpack_require__(483)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__custom_form_service__["a" /* CustomFormService */]) === "function" && _d || Object])
    ], ApplicantProfileComponent);
    return ApplicantProfileComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/applicant-profile.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_model__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_model__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_control_model__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_model__ = __webpack_require__(314);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ObjectID = __webpack_require__(323);
var CreateFormComponent = /** @class */ (function () {
    function CreateFormComponent(customFormService, authService) {
        this.customFormService = customFormService;
        this.authService = authService;
        this.SelectedForm = new __WEBPACK_IMPORTED_MODULE_4__form_model__["a" /* FormModel */]();
        this.FormSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.TotalSections = 0;
        this.FormSuccessMessage = 0;
    }
    CreateFormComponent.prototype.ngOnChanges = function () {
        this.TotalSections = this.SelectedForm.Sections.length;
    };
    CreateFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getApplicantType().subscribe(function (obj) {
            // console.log(obj);
            _this.ApplicantType = obj;
        });
        this.customFormService.GetFormControls().subscribe(function (obj) {
            _this.controls = new Array();
            for (var i = 0; i < obj.length; i++) {
                var control = new __WEBPACK_IMPORTED_MODULE_5__form_control_model__["a" /* FormControlModel */]();
                control.Type = obj[i].FieldType;
                control.isMultipleOption = obj[i].isMultipleOption;
                control.Total = 0;
                control.Table = obj[i].Table ? obj[i].Table : '';
                control.ParentType = obj[i].parent ? obj[i].parent : '';
                if (control.isMultipleOption) {
                    control.optionCount = 1;
                }
                else {
                    control.optionCount = 0;
                }
                _this.controls.push(control);
            }
            _this.totalcontrols = _this.controls.length;
            // console.log(this.controls);
        });
    };
    CreateFormComponent.prototype.OnSave = function () {
        var _this = this;
        // console.log(this.SelectedForm);
        this.customFormService.SaveForm(this.SelectedForm)
            .subscribe(function (obj) {
            if (obj) {
                _this.SelectedForm._id = obj._id;
                _this.FormSaved.emit(_this.SelectedForm);
                _this.FormSuccessMessage = 1;
            }
            else {
                _this.FormSuccessMessage = -1;
            }
        });
    };
    CreateFormComponent.prototype.OnSelectFormType = function (event) {
        var index = event.target['selectedIndex'];
        this.SelectedForm.FormTypeName = this.ApplicantType[index].type;
        // console.log(this.SelectedForm.FormTypeName);
    };
    CreateFormComponent.prototype.OnOptionChange = function (sectionindex, fieldindex, newvalue, optionindex) {
        this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options[optionindex] = newvalue;
    };
    CreateFormComponent.prototype.AddOption = function (sectionindex, fieldindex) {
        var optionlabel = 'Option ' + this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.length;
        this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.push(optionlabel);
    };
    CreateFormComponent.prototype.RemoveOption = function (sectionindex, fieldindex, optionindex) {
        this.SelectedForm.Sections[sectionindex].Fields[fieldindex].options.splice(optionindex, 1);
    };
    CreateFormComponent.prototype.AddSection = function () {
        var newSection = new __WEBPACK_IMPORTED_MODULE_3__section_model__["a" /* SectionModel */]();
        newSection.SectionID = ObjectID();
        newSection.SectionName = 'Section ' + this.TotalSections;
        newSection.CanBeMultiple = false;
        newSection.Fields = new Array();
        this.SelectedForm.Sections.push(newSection);
        this.TotalSections++;
    };
    CreateFormComponent.prototype.RemoveSection = function (sectionindex) {
        this.SelectedForm.Sections.splice(sectionindex, 1);
    };
    CreateFormComponent.prototype.AddParentField = function (sectionIndex, fieldindex, SelectedParent) {
        // Add the Parent Field
        SelectedParent = JSON.parse(SelectedParent);
        var ParentSectionId = SelectedParent.SectionID.toString();
        var ParentFieldId = SelectedParent.FieldID.toString();
        var DependentSectionId = this.SelectedForm.Sections[sectionIndex].SectionID.toString();
        var DependentFieldId = this.SelectedForm.Sections[sectionIndex].Fields[fieldindex].FieldID.toString();
        var DependentFieldName = this.SelectedForm.Sections[sectionIndex].Fields[fieldindex].FieldName;
        // -- Add the selected Parent to Field's ParentField-- //
        this.SelectedForm.Sections[sectionIndex].Fields[fieldindex].ParentField.FieldID = SelectedParent.FieldID;
        this.SelectedForm.Sections[sectionIndex].Fields[fieldindex].ParentField.SectionID = SelectedParent.SectionID;
        // --Add to Parent Field's Dependency List-- //
        var ParentSection = this.SelectedForm.Sections.find(function (sec) { return sec.SectionID.toString() === ParentSectionId; });
        if (ParentSection) {
            var ParentField = ParentSection.Fields.find(function (field) { return field.FieldID.toString() === ParentFieldId; });
            if (ParentField) {
                // Push only if its not already in dependent list.
                if (!ParentField.DependentFieldList.find(function (field) { return field.FieldID.toString() === DependentFieldId; })) {
                    ParentField.DependentFieldList.push({ FieldID: DependentFieldId, SectionID: DependentSectionId });
                }
            }
        }
    };
    CreateFormComponent.prototype.GetParentList = function (sectionIndex, CurrField) {
        var _this = this;
        var ParentFieldType = CurrField.ParentField.FieldType;
        var FieldList;
        var _loop_1 = function (secind) {
            FieldList = this_1.SelectedForm.Sections[secind].Fields.filter(function (field) {
                return field.FieldType === ParentFieldType;
            }).map(function (elem, findex) {
                return {
                    FieldID: elem.FieldID.toString(),
                    FieldName: elem.FieldName + '(' + _this.SelectedForm.Sections[secind].SectionName + ',' + findex + ')',
                    // If same freld Name for multiple Columns, So specify Sectioname and Field Index
                    SectionID: _this.SelectedForm.Sections[secind].SectionID.toString()
                };
            });
            if (FieldList.length > 0) {
                // Merge the Parent List Array with FieldList(List of Fields with Parent Field Type) obtained above.
                Array.prototype.push.apply(CurrField.ParentField.FieldList, FieldList);
            }
        };
        var this_1 = this;
        for (var secind = 0; secind < this.SelectedForm.Sections.length; secind++) {
            _loop_1(secind);
        }
        if (CurrField.ParentField.FieldList.length !== 0) {
            this.SelectedForm.Sections[sectionIndex].Fields.push(CurrField);
        }
        else {
            this.Error = 'No ' + CurrField.ParentField.FieldType + ' Field Found. Add ' + CurrField.ParentField.FieldType + ' Field First.';
        }
    };
    CreateFormComponent.prototype.AddField = function (SectionIndex, control) {
        var fieldcount = this.SelectedForm.Sections[SectionIndex].Fields.length;
        var newField = new __WEBPACK_IMPORTED_MODULE_6__field_model__["a" /* FieldModel */]();
        newField.FieldID = ObjectID();
        newField.FieldName = 'Field ' + fieldcount;
        newField.FieldType = control.Type;
        newField.Table = control.Table;
        newField.ParentField = { FieldType: control.ParentType, FieldList: new Array(), FieldID: null, SectionID: null };
        newField.DependentFieldList = new Array();
        newField.options = new Array();
        if (control.Table !== '') {
            if (control.ParentType) {
                this.GetParentList(SectionIndex, newField);
            }
            else {
                this.SelectedForm.Sections[SectionIndex].Fields.push(newField);
                // this.GetOptionsinList(control, fieldcount, SectionIndex);
            }
        }
        else {
            for (var count = 0; count < control.optionCount; count++) {
                var optionlabel = 'Option ' + count;
                newField.options.push(optionlabel);
            }
            this.SelectedForm.Sections[SectionIndex].Fields.push(newField);
        }
    };
    CreateFormComponent.prototype.RemoveField = function (sectionindex, fieldindex) {
        var currFieldId = this.SelectedForm.Sections[sectionindex].Fields[fieldindex].FieldID.toString();
        var currSectionId = this.SelectedForm.Sections[sectionindex].SectionID.toString();
        var currFieldParentSectionId = this.SelectedForm.Sections[sectionindex].Fields[fieldindex].ParentField.SectionID;
        var currFieldParentFieldId = this.SelectedForm.Sections[sectionindex].Fields[fieldindex].ParentField.FieldID;
        var DepedentFields = this.SelectedForm.Sections[sectionindex].Fields[fieldindex].DependentFieldList; // only fieldId and SectionId
        var _loop_2 = function (i) {
            var DependentSectionId = DepedentFields[i].SectionID.toString();
            var DependentFieldId = DepedentFields[i].FieldID.toString();
            // Search for dependent SectionId and FieldId in all Sections. when found remove currfield from its parent field List
            var DependentSection = this_2.SelectedForm.Sections.find(function (sec) { return sec.SectionID.toString() === DependentSectionId; });
            if (DependentSection) {
                var DependentField = DependentSection.Fields.find(function (field) { return field.FieldID.toString() === DependentFieldId; });
                if (DependentField) {
                    if (DependentField.ParentField.FieldID === currFieldId) {
                        DependentField.ParentField.FieldID = null;
                    }
                    // Removing CurrField from Dependent Field's ParentList
                    DependentField.ParentField.FieldList = DependentField.ParentField.FieldList
                        .reduce(function (p, c) { return (c.FieldID !== currFieldId && p.push(c), p); }, []);
                    // Add code to check if parent fieldlist is empty after this operation then?
                }
            }
        };
        var this_2 = this;
        // Remove this Field from all dependent Fields
        for (var i = 0; i < DepedentFields.length; i++) {
            _loop_2(i);
        }
        // Remove this Field from Parent Field
        if (currFieldParentFieldId !== null) {
            var ParentSection = this.SelectedForm.Sections.find(function (sec) { return sec.SectionID.toString() === currFieldParentSectionId.toString(); });
            if (ParentSection) {
                var ParentField = ParentSection.Fields.find(function (field) { return field.FieldID.toString() === currFieldParentFieldId.toString(); });
                // Removing Curr Field from Parent Field's Dependency List
                if (ParentField) {
                    ParentField.DependentFieldList = ParentField.DependentFieldList
                        .reduce(function (p, c) { return (c.FieldID !== currFieldId && p.push(c), p); }, []);
                }
            }
        }
        // Remove this Field from Curr Section Fields Array
        this.SelectedForm.Sections[sectionindex].Fields.splice(fieldindex, 1);
    };
    CreateFormComponent.prototype.GetFieldName = function (sectionId, fieldId) {
        var ParentSection = this.SelectedForm.Sections.find(function (sec) { return sec.SectionID.toString() === sectionId.toString(); });
        if (ParentSection) {
            var ParentField = ParentSection.Fields.find(function (field) { return field.FieldID.toString() === fieldId.toString(); });
            if (ParentField) {
                return ParentField.FieldName;
            }
        }
    };
    CreateFormComponent.prototype.GetOptionsinList = function (control, fieldIndex, SectionIndex) {
        var _this = this;
        if (control.ParentType === '') {
            switch (control.Table) {
                case 'Countries':
                    this.customFormService.getCountries().subscribe(function (obj) {
                        // console.log(obj);
                        for (var count = 0; count < obj.length; count++) {
                            var optionlabel = obj[count].CountryName;
                            _this.SelectedForm.Sections[SectionIndex].Fields[fieldIndex].options.push(optionlabel);
                        }
                    });
                    break;
                case 'CompanyName':
                    // this.authService.getStates().subscribe(obj => {
                    //   // console.log(obj);
                    //   this.ApplicantType = obj;
                    // });
                    break;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
        __metadata("design:type", Object)
    ], CreateFormComponent.prototype, "SelectedForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
        __metadata("design:type", Object)
    ], CreateFormComponent.prototype, "FormSaved", void 0);
    CreateFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-create-form',
            template: __webpack_require__(495),
            styles: [__webpack_require__(484)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], CreateFormComponent);
    return CreateFormComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/create-form.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_model__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTemplateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateTemplateComponent = /** @class */ (function () {
    function CreateTemplateComponent(customFormService) {
        this.customFormService = customFormService;
        this.TemplateSaved = 0;
        this.FormLoaded = false;
        this.TemplatesLoaded = false;
    }
    CreateTemplateComponent.prototype.ngOnInit = function () {
        this.GetAllTemplates();
        this.GetAllForms();
    };
    CreateTemplateComponent.prototype.GetAllTemplates = function () {
        var _this = this;
        this.customFormService.GetAllTemplates().subscribe(function (obj) {
            _this.TemplatesLoaded = true;
            if (obj && obj.length) {
                _this.TemplatesList = obj;
            }
        });
    };
    CreateTemplateComponent.prototype.GetAllForms = function () {
        var _this = this;
        this.customFormService.GetAllForms().subscribe(function (obj) {
            _this.FormLoaded = true;
            if (obj && obj.length) {
                _this.FormsList = obj;
            }
        });
    };
    CreateTemplateComponent.prototype.OnEditTemplate = function (index) {
        var SelectedTemplate = this.TemplatesList[index];
        this.TemplateTitle = SelectedTemplate.TemplateTitle;
        this.TemplateID = SelectedTemplate._id;
        var Form = this.FormsList.filter(function (form) {
            return form._id === SelectedTemplate.FormID;
        });
        if (Form.length) {
            this.SelectedForm = Form[0];
            this.TotalFieldsChecked = 0;
            var Section = {};
            // Check if Form section is present in the selected Template Sections
            for (var sec = 0; sec < this.SelectedForm.Sections.length; sec++) {
                var currsec = this.SelectedForm.Sections[sec];
                Section[currsec.SectionID] = sec; // storing the index
            }
            var _loop_1 = function (i) {
                var templatesec = SelectedTemplate.Sections[i];
                // If Section is present in template section look for fields in Template
                if (Section.hasOwnProperty(templatesec.SectionID)) {
                    var secindex = Section[templatesec.SectionID];
                    var currsec = this_1.SelectedForm.Sections[secindex];
                    var formfields_1 = currsec.Fields;
                    var _loop_2 = function (findex) {
                        var isFieldpresent = templatesec.Fields.filter(function (field) {
                            return field === formfields_1[findex].FieldID;
                        });
                        if (isFieldpresent.length) {
                            currsec.Fields[findex].isFieldChecked = true;
                            this_1.TotalFieldsChecked++;
                        }
                        else {
                            currsec.Fields[findex].isFieldChecked = false;
                        }
                    };
                    for (var findex = 0; findex < formfields_1.length; findex++) {
                        _loop_2(findex);
                    }
                    // console.log(this.SelectedForm);
                }
            };
            var this_1 = this;
            for (var i = 0; i < SelectedTemplate.Sections.length; i++) {
                _loop_1(i);
            }
        }
        this.createMode = true;
    };
    CreateTemplateComponent.prototype.OnSelectForm = function (val) {
        var index = val.target['selectedIndex'];
        this.SelectedForm = this.FormsList[index - 1]; // 'Select Form is also 0th option'
        for (var sec = 0; sec < this.SelectedForm.Sections.length; sec++) {
            var currsec = this.SelectedForm.Sections[sec];
            for (var findex = 0; findex < currsec.Fields.length; findex++) {
                currsec.Fields[findex].isFieldChecked = true;
                this.TotalFieldsChecked++;
            }
        }
    };
    CreateTemplateComponent.prototype.ToggleFieldSelection = function (secindex, fieldindex) {
        this.SelectedForm.Sections[secindex].Fields[fieldindex].isFieldChecked = !this.SelectedForm.Sections[secindex].Fields[fieldindex]
            .isFieldChecked;
        if (this.SelectedForm.Sections[secindex].Fields[fieldindex].isFieldChecked) {
            this.TotalFieldsChecked++;
        }
        else {
            this.TotalFieldsChecked--;
        }
    };
    CreateTemplateComponent.prototype.CheckedFieldCount = function (secindex) {
        return this.SelectedForm.Sections[secindex].Fields.filter(function (field) {
            return field.isFieldChecked === true;
        }).length;
    };
    CreateTemplateComponent.prototype.OnCreateTemplate = function () {
        this.createMode = true;
        this.SelectedForm = new __WEBPACK_IMPORTED_MODULE_2__form_model__["a" /* FormModel */]();
        this.TemplateTitle = 'Template Title';
        this.TemplateID = null;
        this.SelectedForm.Sections = new Array();
        this.TotalFieldsChecked = 0;
    };
    CreateTemplateComponent.prototype.OnSaveTemplate = function () {
        var _this = this;
        var template = {
            FormID: this.SelectedForm._id,
            FormType: this.SelectedForm.FormType,
            TemplateTitle: this.TemplateTitle,
            _id: this.TemplateID
        };
        template['Sections'] = new Array();
        for (var secindex = 0; secindex < this.SelectedForm.Sections.length; secindex++) {
            var fields = this.SelectedForm.Sections[secindex].Fields;
            var currsec = this.SelectedForm.Sections[secindex];
            var checkedfields = fields.filter(function (field) {
                return field.isFieldChecked === true;
            }).map(function (field) {
                return field.FieldID;
            });
            if (checkedfields.length > 0) {
                var currobj = {};
                currobj['SectionID'] = currsec.SectionID;
                currobj['Fields'] = checkedfields;
                template['Sections'].push(currobj);
            }
        }
        this.customFormService.SaveTemplate(template).subscribe(function (obj) {
            if (obj) {
                _this.GetAllTemplates();
                _this.TemplateSaved = 1;
            }
            else {
                _this.TemplateSaved = -1;
            }
        });
    };
    CreateTemplateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-create-template',
            template: __webpack_require__(496),
            styles: [__webpack_require__(485)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object])
    ], CreateTemplateComponent);
    return CreateTemplateComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/create-template.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldModel; });
var FieldModel = /** @class */ (function () {
    function FieldModel() {
    }
    return FieldModel;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/field.model.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormControlModel; });
var FormControlModel = /** @class */ (function () {
    function FormControlModel() {
    }
    return FormControlModel;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/form-control.model.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
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
            template: __webpack_require__(497),
            styles: [__webpack_require__(486)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/home.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
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
            template: __webpack_require__(498),
            styles: [__webpack_require__(487)]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewFormComponent);
    return PreviewFormComponent;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/preview-form.component.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionModel; });
var SectionModel = /** @class */ (function () {
    function SectionModel() {
    }
    return SectionModel;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/section.model.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_model__ = __webpack_require__(73);
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
        this.isFormsLoaded = false;
    }
    ViewFormsComponent.prototype.ngOnInit = function () {
        console.log(this.isFormsLoaded);
        this.getAllForms();
    };
    ViewFormsComponent.prototype.OnSelectForm = function (index) {
        this.isSelected = true;
        this.SelectedForm = this.FormsList[index];
        // console.log(this.SelectedForm);
    };
    ViewFormsComponent.prototype.OnSaveForm = function (event) {
        this.SelectedForm = event;
        this.isSelected = true;
        this.getAllForms();
    };
    ViewFormsComponent.prototype.CreateNewForm = function () {
        this.SelectedForm = new __WEBPACK_IMPORTED_MODULE_2__form_model__["a" /* FormModel */]();
        this.SelectedForm.Sections = new Array();
        this.isSelected = true;
    };
    ViewFormsComponent.prototype.getAllForms = function () {
        var _this = this;
        this.customFormService.GetAllForms().subscribe(function (obj) {
            _this.isFormsLoaded = true;
            console.log(_this.isFormsLoaded);
            if (obj && obj.length) {
                _this.FormsList = obj;
                _this.FormsCount = _this.FormsList.length;
            }
        });
    };
    ViewFormsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
            selector: 'app-view-forms',
            template: __webpack_require__(499),
            styles: [__webpack_require__(488)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object])
    ], ViewFormsComponent);
    return ViewFormsComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/view-forms.component.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
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
            template: __webpack_require__(500),
            styles: [__webpack_require__(489)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/signin.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(280);
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
            template: __webpack_require__(501),
            styles: [__webpack_require__(490)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/signup.component.js.map

/***/ }),

/***/ 322:
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
//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/environment.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(280);
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
        // console.log(userid,password);
        return this.http.post("login", { username: userid, password: password }).map(function (res) {
            if (res.status === 400) {
                _this.router.navigate(['/signin']);
                throw new Error('' + res.status);
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
            if (res.status === 400) {
                _this.router.navigate(['/signup']);
                throw new Error('' + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.getApplicantType = function () {
        return this.http.get('getApplicantType').map(function (res) {
            if (res.status === 400) {
                throw new Error('400');
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.isSessionOpen = function () {
        var _this = this;
        // console.log('isSession Open');
        return this.http.get("isSessionOpen").map(function (res) {
            if (res.status !== 200) {
                throw new Error('Couldn\'t authenticate. Some Error Occured' + res.status);
            }
            else {
                var obj = res.json();
                if (obj.isSessionOpen === true) {
                    _this.isAuthenticated.next(true);
                    _this.sessionData = obj.sessionData;
                    // console.log(this.sessionData);
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
        console.log('SendOTP Auth');
        return this.http.post('sendOTP', { phoneno: phoneno }).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Verify. Some Error Occured' + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.VerifyOTP = function (otp, phoneno) {
        console.log('Verify OTP');
        return this.http.post('verifyOTP', { phoneno: phoneno, otp: otp }).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Verify. Some Error Occured' + res.status);
            }
            else {
                return res.json();
            }
        });
    };
    AuthService.prototype.Logout = function () {
        var _this = this;
        return this.http.get('logout').subscribe(function (obj) {
            console.log('Logged out successfully');
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

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/auth.service.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(181);
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
                throw new Error('Couldn\'t get form controls');
            }
            else {
                return res.json();
            }
        });
    };
    CustomFormService.prototype.SaveForm = function (form) {
        return this.http.post('saveForm', form).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Save Forms');
            }
            else {
                return res.json();
            }
        });
    };
    CustomFormService.prototype.GetForm = function (type) {
        // console.log('Get form');
        return this.http.post('getForm', { type: type }).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Forms');
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    CustomFormService.prototype.GetAllForms = function () {
        // console.log('Get form');
        return this.http.get('getAllForms').map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Forms');
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    // GetAllApplicants(){
    //     return this.http.get('getAllApplicants').map(res =>{
    //         if(res.status == 400){
    //             throw new Error('Couldn\'t Get Applicants List');
    //         }
    //         else{
    //             let obj = res.json();
    //             return res.json();
    //         }
    //     });
    // }
    CustomFormService.prototype.GetAllApplicantsPersonalDetails = function (PersonalDetailsID) {
        console.log(PersonalDetailsID);
        return this.http.post('GetAllApplicantsPersonalDetails', { id: PersonalDetailsID }).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Applicants List');
            }
            else {
                var obj = res.json();
                return res.json();
            }
        });
    };
    CustomFormService.prototype.SaveApplicantForm = function (ApplicantDetails) {
        return this.http.post('saveApplicantData', ApplicantDetails).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Forms');
            }
            else {
                var obj = res.json();
                console.log(obj);
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    CustomFormService.prototype.SaveTemplate = function (template) {
        return this.http.post('saveTemplate', template).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Save Template');
            }
            else {
                var obj = res.json();
                console.log(obj);
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    CustomFormService.prototype.GetAllTemplates = function () {
        return this.http.get('getAllTemplates').map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Template');
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    CustomFormService.prototype.GetTemplatesByFormID = function (formID) {
        console.log(formID);
        return this.http.post('getTemplatesByFormID', { formID: formID }).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Templates');
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    CustomFormService.prototype.GetApplicantProfile = function (_id) {
        return this.http.post('getApplicantProfile', { _id: _id }).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Applicant');
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    CustomFormService.prototype.UpdateApplicantProfile = function (oldobj, newobj) {
        return this.http.post('UpdateApplicantProfile', { oldobj: oldobj, newobj: newobj }).map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Forms');
            }
            else {
                var obj = res.json();
                console.log(obj);
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    CustomFormService.prototype.getCountries = function () {
        return this.http.get('getAllCountries').map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Template');
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
                return null;
            }
        });
    };
    CustomFormService.prototype.getCompanyTypes = function () {
        return this.http.get('getAllCompanyTypes').map(function (res) {
            if (res.status === 400) {
                throw new Error('Couldn\'t Get Template');
            }
            else {
                var obj = res.json();
                if (!__WEBPACK_IMPORTED_MODULE_3_lodash__["isEmpty"](obj)) {
                    return res.json();
                }
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

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/custom-form.service.js.map

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 481:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0,0,0,0.5);\r\n    z-index: 10;\r\n}\r\n.loader_div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    text-align: center;\r\n}\r\n.loadingtext {\r\n    margin-top:5px;\r\n    color:white;\r\n}"

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0,0,0,0.5);\r\n    z-index: 10;\r\n}\r\n.loader_div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    text-align: center;\r\n}\r\n.loadingtext {\r\n    margin-top:5px;\r\n    color:white;\r\n}"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0,0,0,0.5);\r\n    z-index: 10;\r\n}\r\n.loader_div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    text-align: center;\r\n}\r\n.loadingtext {\r\n    margin-top:5px;\r\n    color:white;\r\n}"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0,0,0,0.5);\r\n    z-index: 10;\r\n}\r\n.loader_div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    text-align: center;\r\n}\r\n.loadingtext {\r\n    margin-top:5px;\r\n    color:white;\r\n}"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background: rgba(0,0,0,0.5);\r\n    z-index: 10;\r\n}\r\n.loader_div {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    text-align: center;\r\n}\r\n.loadingtext {\r\n    margin-top:5px;\r\n    color:white;\r\n}"

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <div id=\"page-wrapper\" style=\"margin:100px\">\r\n      <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "<!--Empty Form-->\r\n<div *ngIf=\"isFormLoaded\">\r\n        <div *ngIf=\"!isApplicationFilled\">\r\n                <form (ngSubmit)=\"onSaveForm()\" [formGroup]=\"ProfileForm\">\r\n                    <h3>{{FormTitle}}</h3>\r\n                    <div formArrayName=\"customcontrols\" *ngFor=\"let currsection of ProfileForm.get('customcontrols').controls; let currsectionindex = index;\">\r\n                        <h4>{{FormLayout.Sections[currsectionindex][0].SectionName}}</h4>\r\n            \r\n                        <div *ngFor=\"let subsection of currsection.controls; let subindex = index\" [formArrayName]=\"currsectionindex\">\r\n                            <hr>\r\n                            <div *ngFor=\"let field of FormLayout.Sections[currsectionindex][subindex].Fields; let fieldindex = index\" [formGroupName]=\"subindex\">\r\n                                <div [ngSwitch]=\"field.FieldType\">\r\n                                    <label>{{field.FieldName}}</label>\r\n            \r\n                                    <!-----------------------For Radio Button------------------>\r\n                                    <div *ngSwitchCase=\"'Radio'\">\r\n                                        <div *ngFor=\"let option of field.options;let optionindex = index\">\r\n                                            {{option}}\r\n                                            <input class=\"form-control\" type=\"radio\" [formControlName]=\"fieldindex\" [value]=\"option\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-----------------------End Radio Button------------------>\r\n            \r\n                                    <!-----------------------For Checkbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'Checkbox'\">\r\n                                        <div *ngFor=\"let option of field.options; let optionindex = index\" [formArrayName]=\"fieldindex\">\r\n                                            {{option}}\r\n                                            <input class=\"form-control\" type=\"checkbox\" [formControlName]=\"optionindex\">\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-----------------------End Checkbox Button------------------>\r\n            \r\n                                    <!-----------------------For Textbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\r\n                                        <input class=\"form-control\" type=\"text\" [formControlName]=\"fieldindex\">\r\n                                    </div>\r\n                                    <!----------------------End Textbox Button------------------>\r\n            \r\n                                    <!-----------------------For Paragraph Button------------------>\r\n                                    <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\r\n                                        <textarea class=\"form-control\" [formControlName]=\"fieldindex\"></textarea>\r\n                                    </div>\r\n                                    <!----------------------End Paragraph Button------------------>\r\n            \r\n                                    <!-----------------------For Dropbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\r\n                                        <select class=\"form-control\" [formControlName]=\"fieldindex\">\r\n                                            <option selected disabled>Choose one</option>\r\n                                            <option *ngFor=\"let option of field.options;\">{{option}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <!----------------------End Dropbox Button------------------>\r\n            \r\n                                    <!-----------------------For Calendar Button------------------>\r\n                                    <div *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\r\n                                        <input class=\"form-control\" type=\"date\" [formControlName]=\"fieldindex\" />\r\n                                    </div>\r\n                                    <!----------------------End Calendar Button------------------>\r\n            \r\n                                    <!-----------------------For Countries Dropbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'Country'\" class=\"form-group\">\r\n                                        <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                            [formControlName]=\"fieldindex\">\r\n                                            <option selected disabled>Select Country</option>\r\n                                            <option *ngFor=\"let option of field.options\" value={{option.CountryName}}>{{option.CountryName}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <!----------------------End CustomerType Dropbox Button------------------>\r\n            \r\n                                    <!-----------------------For State Dropbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'State'\" class=\"form-group\">\r\n                                        <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                            [formControlName]=\"fieldindex\">\r\n                                            <option selected disabled>Select State</option>\r\n                                            <option *ngFor=\"let option of field.options\" value={{option.StateName}}>{{option.StateName}}</option>\r\n                                        </select>\r\n                                        <!-- <select>\r\n                                                <option selected disabled>Choose one</option>\r\n                                                <option *ngFor=\"let option of field.options;\">{{option}}</option>\r\n                                            </select> -->\r\n                                    </div>\r\n                                    <!----------------------End State Dropbox Button------------------>\r\n            \r\n                                    <!-----------------------For City Dropbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'City'\" class=\"form-group\">\r\n                                        <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\r\n                                            <option selected disabled>Select City</option>\r\n                                            <option *ngFor=\"let option of field.options\" value={{option}}>{{option}}</option>\r\n                                        </select>\r\n                                        <!-- <select>\r\n                                                    <option selected disabled>Choose one</option>\r\n                                                    <option *ngFor=\"let option of field.options;\">{{option}}</option>\r\n                                                </select> -->\r\n                                    </div>\r\n                                    <!----------------------End City Dropbox Button------------------>\r\n            \r\n                                    <!-----------------------For CustomerType Dropbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'Type'\" class=\"form-group\">\r\n                                        <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                            [formControlName]=\"fieldindex\">\r\n                                            <option selected disabled>Select Customer Type</option>\r\n                                            <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                        </select>\r\n            \r\n                                        <!-- <select [formControlName]=\"fieldindex\"> \r\n                                    <option selected disabled>Choose one</option>\r\n                                    <option *ngFor=\"let option of field.options;\"value= {{country.id}}>{{country.name}}</option>\r\n                                </select>-->\r\n                                    </div>\r\n                                    <!----------------------End CustomerType Dropbox Button------------------>\r\n            \r\n                                    <!-----------------------For Installation Type Dropbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\r\n                                        <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                            [formControlName]=\"fieldindex\">\r\n                                            <option selected disabled>Select Installation Type</option>\r\n                                            <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                        </select>\r\n                                        <!-- <select>\r\n                                            <option selected disabled>Choose one</option>\r\n                                            <option *ngFor=\"let option of field.options;\">{{option}}</option>\r\n                                        </select> -->\r\n                                    </div>\r\n                                    <!----------------------End Installation Type Dropbox Button------------------>\r\n                                    <!-----------------------For Designation Dropbox Button------------------>\r\n                                    <div *ngSwitchCase=\"'Designation'\" class=\"form-group\">\r\n                                        <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\r\n                                            <option selected disabled>Select Designation</option>\r\n                                            <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <!----------------------End Designation Dropbox Button------------------>\r\n            \r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <span>\r\n                            <a *ngIf=\"FormLayout.Sections[currsectionindex][0].CanBeMultiple\" (click)=\"AddSubSection(currsectionindex)\">Add Section</a>\r\n                        </span>\r\n                        <hr>\r\n                    </div>\r\n                    <button class=\"btn btn-primary\" type=\"submit\">Save</button>\r\n                </form>\r\n            </div>\r\n            \r\n            <div *ngIf=\"isApplicationFilled\">\r\n                <h3>{{FormTitle}}</h3>\r\n                <form (ngSubmit)=\"onSaveForm()\" [formGroup]=\"ProfileForm\">\r\n                    <div formArrayName=\"customcontrols\" *ngFor=\"let currsection of ProfileForm.get('customcontrols').controls; let currsectionindex = index;\">\r\n                        <h4>{{FormLayout.Sections[currsectionindex][0].SectionName}}</h4>\r\n            \r\n                        <!-- Sections that cannot be multiple in Non Edit Mode -->\r\n                        <ng-container *ngIf=\"!FormLayout.Sections[currsectionindex][0].CanBeMultiple && !FormLayout.Sections[currsectionindex][0].isEditMode\">\r\n                            <div *ngFor=\"let field of FormLayout.Sections[currsectionindex][0].Fields; let fieldindex = index\">\r\n                                <label>{{field.FieldName}}:</label> {{GetFieldValue(currsectionindex,0,fieldindex)}}\r\n                            </div>\r\n                            <span>\r\n                                <a (click)=\"EditSubSection(currsectionindex, 0)\">Edit {{FormLayout.Sections[currsectionindex][0].SectionName}}</a>\r\n                            </span>\r\n                        </ng-container>\r\n            \r\n                        <!-- Sections that cannot be multiple in Edit Mode -->\r\n                        <ng-container *ngIf=\"!FormLayout.Sections[currsectionindex][0].CanBeMultiple && FormLayout.Sections[currsectionindex][0].isEditMode\">\r\n                            <ng-container *ngFor=\"let subsection of currsection.controls; let subindex = index\" [formArrayName]=\"currsectionindex\">\r\n                                <ng-container *ngFor=\"let field of FormLayout.Sections[currsectionindex][0].Fields; let fieldindex = index\" [formGroupName]=\"subindex\">\r\n                                    <label>{{field.FieldName}}:</label> \r\n                                    <ng-container [ngSwitch]=\"field.FieldType\">\r\n                                        <!-- <label>{{field.FieldName}}</label> -->\r\n            \r\n                                        <!-----------------------For Radio Button------------------>\r\n                                        <div *ngSwitchCase=\"'Radio'\">\r\n                                            <ng-container *ngFor=\"let option of field.options;let optionindex = index\">\r\n                                                {{option}}\r\n                                                <input class=\"form-control\" type=\"radio\" [formControlName]=\"fieldindex\" [value]=\"option\">\r\n                                            </ng-container>\r\n                                        </div>\r\n            \r\n                                        <!-----------------------End Radio Button------------------>\r\n            \r\n                                        <!-----------------------For Checkbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'Checkbox'\">\r\n                                            <ng-container *ngFor=\"let option of field.options; let optionindex = index\" [formArrayName]=\"fieldindex\">\r\n                                                {{option}}\r\n                                                <input type=\"checkbox\" [formControlName]=\"optionindex\">\r\n                                            </ng-container>\r\n                                        </div>\r\n            \r\n                                        <!-----------------------End Checkbox Button------------------>\r\n            \r\n                                        <!-----------------------For Textbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\r\n                                            <input class=\"form-control\" type=\"text\" [formControlName]=\"fieldindex\">\r\n                                        </div>\r\n            \r\n                                        <!----------------------End Textbox Button------------------>\r\n            \r\n                                        <!-----------------------For Paragraph Button------------------>\r\n                                        <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\r\n                                            <textarea class=\"form-control\" [formControlName]=\"fieldindex\"></textarea>\r\n                                        </div>\r\n            \r\n                                        <!----------------------End Paragraph Button------------------>\r\n            \r\n                                        <!-----------------------For Dropbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\r\n                                            <select class=\"form-control\" [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Choose one</option>\r\n                                                <option *ngFor=\"let option of field.options;\">{{option}}</option>\r\n                                            </select>\r\n                                        </div>\r\n            \r\n            \r\n                                        <!----------------------End Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For Calendar Button------------------>\r\n                                        <div *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\r\n                                            <input class=\"form-control\" type=\"date\" [formControlName]=\"fieldindex\" />\r\n                                        </div>\r\n            \r\n                                        <!----------------------End Calendar Button------------------>\r\n            \r\n                                        <!-----------------------For Countries Dropbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'Country'\" class=\"form-group\">\r\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                                [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select Country</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.CountryName}}>{{option.CountryName}}</option>\r\n                                            </select>\r\n                                        </div>\r\n            \r\n                                        <!----------------------End CustomerType Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For State Dropbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'State'\" class=\"form-group\">\r\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                                [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select State</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.StateName}}>{{option.StateName}}</option>\r\n                                            </select>\r\n                                        </div>\r\n            \r\n                                        <!----------------------End State Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For City Dropbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'City'\" class=\"form-group\">\r\n                                            <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select City</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option}}>{{option}}</option>\r\n                                            </select>\r\n                                        </div>\r\n            \r\n                                        <!----------------------End City Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For CustomerType Dropbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'Type'\" class=\"form-group\">\r\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                                [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select Customer Type</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                            </select>\r\n                                        </div>\r\n            \r\n                                        <!----------------------End CustomerType Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For Installation Type Dropbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\r\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                                [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select Installation Type</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                            </select>\r\n                                        </div>\r\n            \r\n                                        <!----------------------End Installation Type Dropbox Button------------------>\r\n                                        <!-----------------------For Designation Dropbox Button------------------>\r\n                                        <div *ngSwitchCase=\"'Designation'\" class=\"form-group\">\r\n                                            <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select Designation</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                            </select>\r\n                                        </div>\r\n            \r\n                                        <!----------------------End Designation Dropbox Button------------------>\r\n            \r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <a type=\"button\" (click)=\"onSavesubSection(currsectionindex,0)\">Done</a>\r\n                        </ng-container>\r\n            \r\n                        <!-- Sections that can be multiple -->\r\n                        <span>\r\n                            <a class=\"pull-right\" *ngIf=\"FormLayout.Sections[currsectionindex][0].CanBeMultiple\" (click)=\"AddSubSection(currsectionindex)\">Add {{FormLayout.Sections[currsectionindex][0].SectionName}}</a>\r\n                        </span>\r\n                        <table class=\"table table-bordered table-striped\" *ngIf=\"FormLayout.Sections[currsectionindex][0].CanBeMultiple\">\r\n                            <tr>\r\n                                <th *ngFor=\"let field of FormLayout.Sections[currsectionindex][0].Fields; let fieldindex = index\">\r\n                                    {{field.FieldName}}\r\n                                </th>\r\n                                <th></th>\r\n                                <th></th>\r\n                            </tr>\r\n                            <ng-container *ngFor=\"let subsection of currsection.controls; let subindex = index\" [formArrayName]=\"currsectionindex\">\r\n                                    <!-- If Sub Section/Row is in Non Edit Mode  -->\r\n                            <tr *ngIf=\"!FormLayout.Sections[currsectionindex][subindex].isEditMode\">\r\n                                <td *ngFor=\"let field of FormLayout.Sections[currsectionindex][0].Fields; let fieldindex = index\">\r\n                                    {{GetFieldValue(currsectionindex,subindex,fieldindex)}}\r\n                                </td>\r\n                                <td>\r\n                                    <a *ngIf=\"FormLayout.Sections[currsectionindex].length>1\" (click)=\"RemoveSubSection(currsectionindex,subindex)\">Remove</a>\r\n                                </td>\r\n                                <td>\r\n                                    <span>\r\n                                        <a (click)=\"EditSubSection(currsectionindex, subindex)\">Edit</a>\r\n                                    </span>\r\n                                </td>\r\n                            </tr>\r\n            \r\n                            <!-- If Sub Section/Row is in Edit Mode  -->\r\n            \r\n                            <tr *ngIf=\"FormLayout.Sections[currsectionindex][subindex].isEditMode\">\r\n                                <ng-container *ngFor=\"let field of FormLayout.Sections[currsectionindex][subindex].Fields; let fieldindex = index\" [formGroupName]=\"subindex\">\r\n                                    <ng-container [ngSwitch]=\"field.FieldType\">\r\n                                        <!-- <label>{{field.FieldName}}</label> -->\r\n            \r\n                                        <!-----------------------For Radio Button------------------>\r\n                                        <td *ngSwitchCase=\"'Radio'\">\r\n                                            <ng-container *ngFor=\"let option of field.options;let optionindex = index\">\r\n                                                {{option}}\r\n                                                <input class=\"form-control\" type=\"radio\" [formControlName]=\"fieldindex\" [value]=\"option\">\r\n                                            </ng-container>\r\n                                        </td>\r\n            \r\n                                        <!-----------------------End Radio Button------------------>\r\n            \r\n                                        <!-----------------------For Checkbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'Checkbox'\">\r\n                                            <ng-container *ngFor=\"let option of field.options; let optionindex = index\" [formArrayName]=\"fieldindex\">\r\n                                                {{option}}\r\n                                                <input type=\"checkbox\" [formControlName]=\"optionindex\">\r\n                                            </ng-container>\r\n                                        </td>\r\n            \r\n                                        <!-----------------------End Checkbox Button------------------>\r\n            \r\n                                        <!-----------------------For Textbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\r\n                                            <input class=\"form-control\" type=\"text\" [formControlName]=\"fieldindex\">\r\n                                        </td>\r\n            \r\n                                        <!----------------------End Textbox Button------------------>\r\n            \r\n                                        <!-----------------------For Paragraph Button------------------>\r\n                                        <td *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\r\n                                            <textarea class=\"form-control\" [formControlName]=\"fieldindex\"></textarea>\r\n                                        </td>\r\n            \r\n                                        <!----------------------End Paragraph Button------------------>\r\n            \r\n                                        <!-----------------------For Dropbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\r\n                                            <select class=\"form-control\" [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Choose one</option>\r\n                                                <option *ngFor=\"let option of field.options;\">{{option}}</option>\r\n                                            </select>\r\n                                        </td>\r\n            \r\n            \r\n                                        <!----------------------End Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For Calendar Button------------------>\r\n                                        <td *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\r\n                                            <input class=\"form-control\" type=\"date\" [formControlName]=\"fieldindex\" />\r\n                                        </td>\r\n            \r\n                                        <!----------------------End Calendar Button------------------>\r\n            \r\n                                        <!-----------------------For Countries Dropbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'Country'\" class=\"form-group\">\r\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                                [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select Country</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.CountryName}}>{{option.CountryName}}</option>\r\n                                            </select>\r\n                                        </td>\r\n            \r\n                                        <!----------------------End CustomerType Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For State Dropbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'State'\" class=\"form-group\">\r\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                                [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select State</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.StateName}}>{{option.StateName}}</option>\r\n                                            </select>\r\n                                        </td>\r\n            \r\n                                        <!----------------------End State Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For City Dropbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'City'\" class=\"form-group\">\r\n                                            <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select City</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option}}>{{option}}</option>\r\n                                            </select>\r\n                                        </td>\r\n            \r\n                                        <!----------------------End City Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For CustomerType Dropbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'Type'\" class=\"form-group\">\r\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                                [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select Customer Type</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                            </select>\r\n                                        </td>\r\n            \r\n                                        <!----------------------End CustomerType Dropbox Button------------------>\r\n            \r\n                                        <!-----------------------For Installation Type Dropbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\r\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\r\n                                                [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select Installation Type</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                            </select>\r\n                                        </td>\r\n            \r\n                                        <!----------------------End Installation Type Dropbox Button------------------>\r\n                                        <!-----------------------For Designation Dropbox Button------------------>\r\n                                        <td *ngSwitchCase=\"'Designation'\" class=\"form-group\">\r\n                                            <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\r\n                                                <option selected disabled>Select Designation</option>\r\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\r\n                                            </select>\r\n                                        </td>\r\n            \r\n                                        <!----------------------End Designation Dropbox Button------------------>\r\n            \r\n                                    </ng-container>\r\n                                </ng-container>\r\n                                <td>\r\n                                    <a *ngIf=\"FormLayout.Sections[currsectionindex].length>1\" (click)=\"RemoveSubSection(currsectionindex,subindex)\">Remove</a>\r\n                                </td>\r\n                                <td>\r\n                                    <a type=\"button\" (click)=\"onSavesubSection(currsectionindex,subindex)\">Done</a>\r\n                                </td>\r\n                            </tr>\r\n            \r\n                            </ng-container>\r\n                        </table>\r\n                        \r\n                        <div *ngFor=\"let subsection of currsection.controls; let subindex = index\">\r\n                        </div>\r\n            \r\n                    </div>\r\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"isFormSaved != 2\">Save Changes</button>\r\n                </form>\r\n                <div class=\"panel panel-danger\" style=\"margin:10px\" *ngIf=\"isFormSaved == -1\">\r\n                    <div class=\"panel-body\">Details couldn\\'t be saved.</div>\r\n                </div>\r\n            \r\n                <div class=\"panel panel-success\" style=\"margin:10px\" *ngIf=\"isFormSaved == 1\">\r\n                    <div class=\"panel-body\">Details saved Sucessfully.</div>\r\n                </div>\r\n            </div>\r\n            \r\n            <!-- Profile Already Filled-->\r\n</div>\r\n<div *ngIf=\"!isFormLoaded\">\r\n    <div id=\"loading\" class=\"overlay\">\r\n        <div class=\"loader_div\">\r\n            <img src=\"loader.gif\"/><br><br>\r\n            <b class=\"loadingtext\">Loading...</b>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <ng-container *ngIf=\"!isApplicantDetailsLoaded; else DetailsLoaded\">\r\n    <div id=\"loading\" class=\"overlay\">\r\n      <div class=\"loader_div\">\r\n          <img src=\"loader.gif\"/><br><br>\r\n          <b class=\"loadingtext\">Loading...</b>\r\n      </div>\r\n  </div>\r\n  </ng-container>\r\n  <ng-template #DetailsLoaded>\r\n    <div class=\"col-md-12\" *ngIf=\"ApplicantsDetails.length>0\">\r\n      <h3>\r\n        Applicant List\r\n      </h3>\r\n      <em>Select Form Type</em>\r\n      <ul>\r\n        <li *ngFor=\"let item of ApplicantsDetails;let j=index\">\r\n          <a (click)=\"OnSelectApplicantType(j)\">{{item.type}}</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div class=\"col-md-12\" *ngIf=\"SelectedType.count_applicants > 0\">\r\n      <!---->\r\n      <!-- <select [(ngModel)]=\"FilterType\">\r\n            <option selected disabled>Choose one</option>\r\n            <option *ngFor=\"let col of SelectedType.fields\">{{col.FieldName}}</option>\r\n          </select> -->\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" [(ngModel)]=\"FilterText\">\r\n        <button class=\"btn btn-primary\" (click)=\"OnSearch()\">Search</button>\r\n        <button class=\"btn btn-default\" (click)=\"OnClearSearch()\">Clear Search</button>\r\n      </div>\r\n\r\n      \r\n      <!---When Filter Text is not empty show filtered results-->\r\n      <table class=\"table table-striped table-bordered\">\r\n        <tr>\r\n          <th></th>\r\n          <th *ngFor=\"let col of SelectedType.fields\">\r\n            {{col.FieldName}}\r\n          </th>\r\n          <th></th>\r\n        </tr>\r\n        <ng-container *ngFor=\"let applicant of SelectedType.applicants;let j=index\">\r\n          <tr *ngIf=\"isApplicantFiltered[j]\">\r\n            <input type=\"checkbox\" [checked]=\"isApplicantChecked[j]\" (change)=\"ToggleApplicantSelection(j)\">\r\n            <td *ngFor=\"let col of SelectedType.fields\">\r\n              {{applicant[col.FieldName]}}\r\n            </td>\r\n            <td>\r\n              <a [routerLink]=\"['../ViewProfile',applicant.applicantID]\">View Profile</a>\r\n            </td>\r\n          </tr>\r\n          <!-- <tr *ngIf=\"isApplicantFiltered[j]\">\r\n                <input type=\"checkbox\" [checked]=\"isApplicantChecked[j]\" (change)=\"ToggleApplicantSelection(j)\">\r\n                <td *ngFor=\"let col of SelectedType.fields | filterBy:userFilter\">\r\n                  {{applicant[\"Personal Details\"][0][col.FieldName]}}\r\n                </td>\r\n              </tr> -->\r\n\r\n          <!--PDF template-->\r\n          <div [hidden]=true #ApplicantProfiles>\r\n            <ul>\r\n              <li *ngFor=\"let col of SelectedType.fields\">\r\n                <label>{{col.FieldName}}:</label>{{applicant[col.FieldName]}}\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </ng-container>\r\n      </table>\r\n      <br>\r\n      <button class=\"btn btn-success\" (click)=\"ExportSelectedProfiles()\">Export to pdf</button>\r\n    </div>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!isProfileLoaded; else ProfileLoaded\">\r\n  <div id=\"loading\" class=\"overlay\">\r\n    <div class=\"loader_div\">\r\n        <img src=\"loader.gif\"/><br><br>\r\n        <b class=\"loadingtext\">Loading...</b>\r\n    </div>\r\n</div>\r\n</ng-container>\r\n\r\n<ng-template #ProfileLoaded>\r\n    <h3>{{Form.FormTitle}}</h3>\r\n    <select (change)=\"OnSelectTemplate($event)\">\r\n        <option selected disabled>Select Template</option>\r\n        <option *ngFor=\"let col of TemplateList;let j=index\">{{col.TemplateTitle}}</option>\r\n      </select>\r\n      \r\n      <div #ApplicantProfile>\r\n        <div *ngFor=\"let section of Form.Sections;let secindex = index\">\r\n          <h4>{{section.SectionName}}</h4>\r\n      \r\n          <!-- Sections that cannot be multiple in Non Edit Mode -->\r\n          <ng-container *ngIf=\"!section.CanBeMultiple\">\r\n            <div *ngFor=\"let field of section.Fields; let fieldindex = index\">\r\n              <ng-container *ngIf=\"field.isFieldChecked\">\r\n                  <label> {{field.FieldName}}:</label> {{GetFieldValue(section.SectionID, 0, field.FieldID)}}\r\n              </ng-container>\r\n            </div>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"section.CanBeMultiple\">\r\n            <table class=\"table table-striped table-bordered\">\r\n              <tr>\r\n                <ng-container *ngFor=\"let field of section.Fields; let fieldindex = index\">\r\n                  <th *ngIf=\"field.isFieldChecked\">\r\n                    {{field.FieldName}}\r\n                  </th>\r\n                </ng-container>\r\n              </tr>\r\n              <tr *ngFor=\"let subsection of Applicant[section.SectionID]; let subindex = index\">\r\n                <ng-container *ngFor=\"let field of section.Fields; let fieldindex = index\">\r\n                  <td *ngIf=\"field.isFieldChecked\">\r\n                    {{GetFieldValue(section.SectionID, subindex, field.FieldID)}}\r\n                  </td>\r\n                </ng-container>\r\n              </tr>\r\n            </table>\r\n          </ng-container>\r\n          <hr>\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary\" (click)=\"PrintToPdf()\">Print</button>\r\n</ng-template>"

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<label>\r\n  Form Title :\r\n</label>\r\n<input [(ngModel)]=\"SelectedForm.FormTitle\" class=\"form-group\">\r\n<br>\r\n<label>\r\n  Form Type :\r\n</label>\r\n<select class=\"form-group\" id=\"type\" name=\"type\" [(ngModel)]=\"SelectedForm.FormType\" (change)=\"OnSelectFormType($event)\" required>\r\n  <option *ngFor=\"let option of ApplicantType\" [ngValue]=\"option._id\" >{{option.type}}</option>\r\n</select>\r\n<br>\r\n<div class=\"alert alert-danger\" *ngIf=\"Error\">\r\n    <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n    {{Error}}\r\n</div>\r\n\r\n<br>\r\n<div *ngFor=\"let section of SelectedForm.Sections; let sectionindex = index\">\r\n    <label>Section Title</label>\r\n    <input [(ngModel)]=\"section.SectionName\" [ngModelOptions]=\"{standalone: true}\">\r\n    <div *ngFor=\"let item of section.Fields; let fieldindex = index;\">\r\n        <div [ngSwitch]=\"item.FieldType\">\r\n          <label>{{item.FieldType}}</label>\r\n          <!-----------------------For Radio Button------------------>\r\n          <div *ngSwitchCase=\"'Radio'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\r\n            <ul>\r\n              <li *ngFor=\"let option of item.options; let optionindex = index\">\r\n                <input [value]=\"option\" (change)=\"OnOptionChange(sectionindex,fieldindex,$event.target.value,optionindex)\">\r\n                <a (click)=\"RemoveOption(sectionindex,fieldindex,optionindex)\">X</a>\r\n              </li>\r\n            </ul>\r\n            <a (click)=\"AddOption(sectionindex,fieldindex)\">Add Options</a>\r\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n          </div>\r\n          <!-----------------------End Radio Button------------------>\r\n    \r\n          <!-----------------------For Checkbox Button------------------>\r\n          <div *ngSwitchCase=\"'Checkbox'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\r\n            <ul>\r\n              <li *ngFor=\"let option of item.options; let optionindex = index\">\r\n                <input [value]=\"option\" (change)=\"OnOptionChange(sectionindex,fieldindex,$event.target.value,optionindex)\">\r\n                <a (click)=\"RemoveOption(sectionindex, fieldindex,optionindex)\">X</a>\r\n              </li>\r\n            </ul>\r\n            <a (click)=\"AddOption(sectionindex,fieldindex)\">Add Options</a>\r\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n          </div>\r\n          <!-----------------------End Checkbox Button------------------>\r\n    \r\n          <!-----------------------For Dropbox Button------------------>\r\n          <div *ngSwitchCase=\"'Dropdown'\" class=\"dropdown form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\r\n            <ul>\r\n              <li *ngFor=\"let option of item.options; let optionindex = index\">\r\n                <input [value]=\"option\" (change)=\"OnOptionChange(sectionindex,fieldindex,$event.target.value,optionindex)\">\r\n                <a (click)=\"RemoveOption(sectionindex,fieldindex,optionindex)\">X</a>\r\n              </li>\r\n            </ul>\r\n            <a (click)=\"AddOption(sectionindex,fieldindex)\">Add Options</a>\r\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n          </div>\r\n          <!----------------------End Dropbox Button------------------>\r\n    \r\n          <!-----------------------For Textbox Button------------------>\r\n          <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\r\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n          </div>\r\n    \r\n          <!----------------------End Textbox Button------------------>\r\n    \r\n          <!-----------------------For TextArea Button------------------>\r\n          <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [value]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\r\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n          </div>\r\n          <!----------------------End TextArea Button------------------>\r\n\r\n          <!-----------------------For Calendar Button------------------>\r\n          <div *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\r\n              <input [(ngModel)]=\"item.FieldName\" [value]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\r\n              <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n            </div>\r\n            <!----------------------End Calendar Button------------------>\r\n\r\n          <!-----------------------For Country List------------------>\r\n          <div *ngSwitchCase=\"'Country'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\r\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n            <br>\r\n            <small><em>*Take options from {{item.Table}} Library.</em></small>\r\n          </div>\r\n          <!----------------------End Country List------------------>\r\n\r\n          <!-----------------------For State List------------------>\r\n          <div *ngSwitchCase=\"'State'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\r\n            <select (change)=\"AddParentField(sectionindex,fieldindex,$event.target.value)\">\r\n              <option selected disabled>Choose one</option>\r\n            <option *ngFor=\"let x of item.ParentField.FieldList;\" [value]=\"x|json\">{{GetFieldName(x.SectionID,x.FieldID)}}</option>\r\n          </select>\r\n          <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n          </div>\r\n          <!----------------------End State List------------------>\r\n\r\n          <!-----------------------For city List------------------>\r\n          <div *ngSwitchCase=\"'City'\" class=\"form-group\">\r\n              <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\r\n              <select (change)=\"AddParentField(sectionindex,fieldindex,$event.target.value)\">\r\n                <option selected disabled>Choose one</option>\r\n              <option *ngFor=\"let x of item.ParentField.FieldList\" [value]=\"x|json\">{{GetFieldName(x.SectionID,x.FieldID)}}</option>\r\n            </select>\r\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n            </div>\r\n            <!----------------------End city List------------------>\r\n\r\n           <!-----------------------For CompanyType List------------------>\r\n           <div *ngSwitchCase=\"'Type'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\r\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n            <br>\r\n            <small><em>*Take options from {{item.Table}} Library.</em></small>\r\n          </div>\r\n          <!----------------------End CompanyType List------------------>\r\n\r\n          <!-----------------------For Installation Type List------------------>\r\n          <div *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\r\n            <select (change)=\"AddParentField(sectionindex,fieldindex,$event.target.value)\">\r\n              <option selected disabled>Choose one</option>\r\n            <option *ngFor=\"let x of item.ParentField.FieldList\" [value]=\"x|json\">{{GetFieldName(x.SectionID,x.FieldID)}}</option>\r\n          </select>\r\n          <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n          </div>\r\n          <!----------------------End Installation Type List------------------>\r\n\r\n          <!-----------------------For Designation List------------------>\r\n          <div *ngSwitchCase=\"'Designation'\" class=\"form-group\">\r\n            <input [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\r\n            <select (change)=\"AddParentField(sectionindex,fieldindex,$event.target.value)\">\r\n              <option selected disabled>Choose one</option>\r\n            <option *ngFor=\"let x of item.ParentField.FieldList\" [value]=\"x|json\">{{GetFieldName(x.SectionID,x.FieldID)}}</option>\r\n          </select>\r\n          <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\r\n          </div>\r\n          <!----------------------End Designation List------------------>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <table class=\"table-bordered table-condensed table-striped\">\r\n        <tr>\r\n          <td colspan=\"2\">\r\n            Field Manager\r\n        </td></tr>\r\n          <tr>\r\n            <td>Control Type</td>\r\n            <!-- <td>Option Count</td> -->\r\n            <td></td>\r\n          </tr>\r\n          <tr *ngFor=\"let control of controls\">\r\n            <td>{{control.Type}}</td>\r\n            <!-- <td *ngIf=\"!control.isMultipleOption\"></td>\r\n            <td *ngIf=\"control.isMultipleOption\">\r\n              <input type=\"text\" [(ngModel)]=\"control.optionCount\">\r\n            </td> -->\r\n            <td>\r\n              <a (click)=\"AddField(sectionindex,control)\">Add</a>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n        <a (click)=\"RemoveSection(sectionindex)\">Remove Section</a>\r\n        <br>\r\n        <input type=\"checkbox\" [(ngModel)]=\"section.CanBeMultiple\">Can be added Multiple Times.\r\n        <hr>\r\n</div>\r\n<a (click)=\"AddSection()\">Add Section</a>\r\n<button class=\"btn btn-primary pull-right\" *ngIf=\"TotalSections>0\" (click)=\"OnSave()\" type=\"submit\">Save</button>\r\n<br>\r\n\r\n<div class=\"panel panel-danger\" style=\"margin:10px\" *ngIf=\"FormSuccessMessage == -1\">\r\n    <div class=\"panel-body\">Form couldn\\'t be saved.</div>\r\n</div>\r\n\r\n<div class=\"panel panel-success\"  style=\"margin:10px\"  *ngIf=\"FormSuccessMessage == 1\">\r\n    <div class=\"panel-body\">Form saved Sucessfully.</div>\r\n</div>"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(TemplatesLoaded && FormLoaded); else Loading\">\r\n    <div class=\"col-md-2\">\r\n        <ul>\r\n          <li *ngFor=\"let item of TemplatesList;let j=index\">\r\n            <a (click)=\"OnEditTemplate(j)\">{{item.TemplateTitle}}</a>\r\n          </li>\r\n        </ul>\r\n        <a (click)=\"OnCreateTemplate()\">+ New Template</a>\r\n      </div>\r\n      <ng-container *ngIf=\"createMode\">\r\n          <div class=\"col-md-6\">\r\n              <select id=\"type\" name=\"type\" [(ngModel)]=\"SelectedForm.FormType\" (change)=\"OnSelectForm($event)\">\r\n                <option selected disabled>Select Form</option>\r\n                <option *ngFor=\"let option of FormsList;let j=index\">\r\n                  {{option.FormTitle}}\r\n                </option>\r\n              </select>\r\n              <label>\r\n                Template Title:\r\n              </label>\r\n              <input type=\"text\" [(ngModel)]=\"TemplateTitle\">\r\n              <div *ngFor=\"let section of SelectedForm.Sections; let secindex= index\">\r\n                {{section.SectionName}}\r\n                <br>\r\n                <ng-container *ngFor=\"let field of section.Fields;let fieldindex=index\">\r\n                  <input type=\"checkbox\" [checked]=\"field.isFieldChecked\" (change)=\"ToggleFieldSelection(secindex,fieldindex)\">\r\n                  <label>{{field.FieldName}}</label>\r\n                  <br>\r\n                </ng-container>\r\n                <hr>\r\n              </div>\r\n              <button class=\"btn btn-primary\" (click)=\"OnSaveTemplate()\" *ngIf=\"TotalFieldsChecked>0\">Save Template</button>\r\n              <br>\r\n              <div class=\"panel panel-danger\" style=\"margin:10px\" *ngIf=\"TemplateSaved == -1\">\r\n                <div class=\"panel-body\">Template couldn\\'t be saved.</div>\r\n              </div>\r\n            \r\n              <div class=\"panel panel-success\" style=\"margin:10px\" *ngIf=\"TemplateSaved == 1\">\r\n                <div class=\"panel-body\">Template saved Sucessfully.</div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col-md-4\">\r\n              <h3>{{TemplateTitle}}</h3>\r\n              <div *ngFor=\"let section of SelectedForm.Sections;let secindex= index\">\r\n                <ng-container *ngIf=\"CheckedFieldCount(secindex) > 0\">\r\n                  <h4>\r\n                    {{section.SectionName}}\r\n                  </h4>\r\n                  <br>\r\n                </ng-container>\r\n                <ng-container *ngFor=\"let field of section.Fields;let fieldindex=index\">\r\n                  <label *ngIf=\"field.isFieldChecked\">{{field.FieldName}}</label>\r\n                  <br>\r\n                </ng-container>\r\n                <hr>\r\n              </div>\r\n            </div>\r\n      </ng-container>      \r\n</ng-container>\r\n<ng-template #Loading>\r\n  <div id=\"loading\" class=\"overlay\">\r\n    <div class=\"loader_div\">\r\n        <img src=\"loader.gif\"/><br><br>\r\n        <b class=\"loadingtext\">Loading...</b>\r\n    </div>\r\n</div>\r\n</ng-template>\r\n"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n    <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n        <div class=\"navbar-header\">\r\n        </div>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n            <!-- <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\r\n                    <a [routerLink]=\"['createform']\">Create Form</a>\r\n                </li> -->\r\n            <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\r\n                <a [routerLink]=\"['forms']\">View Form</a>\r\n            </li>\r\n            <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\r\n                <a [routerLink]=\"['applicants']\">Applicants</a>\r\n            </li>\r\n            <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\r\n                <a [routerLink]=\"['templates']\">Templates</a>\r\n            </li>\r\n            <li routerLinkActive=\"active\" *ngIf=\"UserType != 'Admin'\">\r\n                <a [routerLink]=\"['profile']\">Profile</a>\r\n            </li>\r\n            <li>\r\n                <a style=\"cursor: pointer\" (click)=\"OnLogout()\">Logout</a>\r\n            </li>\r\n        </ul>\r\n    </nav>\r\n    <div id=\"page-wrapper\" style=\"margin:100px\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "    <h3>{{SelectedForm.FormTitle}}</h3>\r\n    <div *ngFor=\"let section of SelectedForm.Sections;\">\r\n       <h4>{{section.SectionName}}</h4> \r\n            <div *ngFor=\"let item of section.Fields;\">\r\n                    <div [ngSwitch]=\"item.FieldType\">\r\n                        <label>\r\n                            {{item.FieldName}}\r\n                        </label>\r\n                       <!-----------------------For Radio Button------------------>\r\n                       <div *ngSwitchCase=\"'Radio'\" class=\"form-group\">\r\n                         <div *ngFor=\"let option of item.options; let j = index\" >\r\n                             <!-- <label class=\"radio-inline\">{{option}}</label> -->\r\n                             {{option}}\r\n                             <input type=\"radio\" [value]=\"option\">\r\n                            </div>\r\n                       </div>\r\n                       <!-----------------------End Radio Button------------------>\r\n                 \r\n                       <!-----------------------For Checkbox Button------------------>\r\n                       <div *ngSwitchCase=\"'Checkbox'\" class=\"form-group\">\r\n                           <div *ngFor=\"let option of item.options; let j = index\">\r\n                             {{option}}\r\n                               <input type=\"checkbox\">\r\n                           </div>\r\n                       </div>\r\n                       <!-----------------------End Checkbox Button------------------>\r\n                 \r\n                       <!-----------------------For Textbox Button------------------>\r\n                       <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\r\n                           <input type=\"text\"/>\r\n                       </div>\r\n                       <!----------------------End Textbox Button------------------>\r\n                 \r\n                       <!-----------------------For Paragraph Button------------------>\r\n                       <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\r\n                           <textarea></textarea>\r\n                       </div>\r\n                       <!----------------------End Paragraph Button------------------>\r\n                 \r\n                       <!-----------------------For Dropbox Button------------------>\r\n                       <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\r\n                           <select>\r\n                               <option selected disabled>Choose one</option>\r\n                             <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option>\r\n                           </select>\r\n                       </div>\r\n                        <!----------------------End Dropbox Button------------------>\r\n\r\n                        <!-----------------------For Calendar Button------------------>\r\n                       <div *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\r\n                            <input type=\"date\"/>\r\n                        </div>\r\n                         <!----------------------End Calendar Button------------------>\r\n\r\n                         <!-----------------------For Country Dropbox Button------------------>\r\n                       <div *ngSwitchCase=\"'Country'\" class=\"form-group\">\r\n                        <select>\r\n                            <option selected disabled>Choose one</option>\r\n                            Countries\r\n                          <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\r\n                        </select>\r\n                    </div>\r\n                     <!----------------------End Country Dropbox Button------------------>\r\n\r\n                     <!-----------------------For State Dropbox Button------------------>\r\n                     <div *ngSwitchCase=\"'State'\" class=\"form-group\">\r\n                            <select>\r\n                                <option selected disabled>Choose one</option>\r\n                                States in selected country\r\n                              <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\r\n                            </select>\r\n                        </div>\r\n                         <!----------------------End State Dropbox Button------------------>\r\n\r\n                         <!-----------------------For City Dropbox Button------------------>\r\n                     <div *ngSwitchCase=\"'City'\" class=\"form-group\">\r\n                            <select>\r\n                                <option selected disabled>Choose one</option>\r\n                                City in selected country\r\n                              <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\r\n                            </select>\r\n                        </div>\r\n                         <!----------------------End City Dropbox Button------------------>\r\n\r\n                         <!-----------------------For CustomerType Dropbox Button------------------>\r\n                       <div *ngSwitchCase=\"'Type'\" class=\"form-group\">\r\n                            <select>\r\n                                <option selected disabled>Choose one</option>\r\n                            Customer Type\r\n                              <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\r\n                            </select>\r\n                        </div>\r\n                         <!----------------------End CustomerType Dropbox Button------------------>\r\n    \r\n                         <!-----------------------For Installation Type Dropbox Button------------------>\r\n                         <div *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\r\n                                <select>\r\n                                    <option selected disabled>Choose one</option>\r\n                                    Installation Types in the selected Customer Type\r\n                                  <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\r\n                                </select>\r\n                            </div>\r\n                             <!----------------------End Installation Type Dropbox Button------------------>\r\n                              <!-----------------------For Designation Dropbox Button------------------>\r\n                         <div *ngSwitchCase=\"'Designation'\" class=\"form-group\">\r\n                                <select>\r\n                                    <option selected disabled>Choose one</option>\r\n                                    Designation in the selected Installation Type\r\n                                  <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\r\n                                </select>\r\n                            </div>\r\n                             <!----------------------End Designation Dropbox Button------------------>\r\n                     </div>\r\n                   </div><hr>\r\n    </div>"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"!isFormsLoaded; else FormLoaded\">\r\n    <div id=\"loading\" class=\"overlay\">\r\n        <div class=\"loader_div\">\r\n            <img src=\"loader.gif\"/><br><br>\r\n            <b class=\"loadingtext\">Loading...</b>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #FormLoaded>\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-2\">\r\n          <h4>List of Forms</h4>\r\n          <ul>\r\n            <li *ngFor=\"let option of FormsList; let j=index\"><a (click) =\"OnSelectForm(j)\">{{option.FormTitle}}</a></li>\r\n          </ul>\r\n          <a (click)=\"CreateNewForm()\">+ New Form</a>\r\n        </div>\r\n    \r\n        <div class=\"col-xs-6\" *ngIf=\"isSelected\" >\r\n          <app-create-form [SelectedForm]=\"SelectedForm\"  (FormSaved)=\"OnSaveForm($event)\"></app-create-form>\r\n        </div>\r\n        \r\n        <div class=\"col-xs-4\" *ngIf=\"isSelected\" >\r\n          <app-preview-form [SelectedForm]=\"SelectedForm\"></app-preview-form>\r\n        </div>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <span class=\"help-block\" >{{message}}</span>\r\n      <form (ngSubmit)=\"OnSignIn(f)\" #f=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"userid\">Phone No.</label>\r\n            <input type=\"userid\" \r\n                     id=\"userid\" \r\n                     class=\"form-control\" \r\n                     ngModel \r\n                     name=\"userid\"\r\n                     required\r\n                     #userid = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n            <span class=\"help-block\" *ngIf=\"!userid.valid && userid.touched\">Phone No. is invalid</span>\r\n           \r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" ngModel required #password = \"ngModel\">\r\n            <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\" >Password is required</span>\r\n  </div>\r\n  <button class=\"btn btn-primary\" [disabled]=\"!f.valid && f.touched\" type=\"submit\">Sign In</button>\r\n  <button class=\"btn btn-default\" (click) = \"GoToSignup()\" type=\"button\">New User? Sign up</button>\r\n  </form>\r\n  </div>\r\n</div>\r\n<!--Email Pattern check pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"-->"

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <span class=\"help-block\" >{{message}}</span>\r\n        <form (ngSubmit)=\"OnSignUp(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"userid\">Phone No</label>\r\n              <input type=\"userid\" \r\n                       id=\"userid\" \r\n                       class=\"form-control\" \r\n                       name=\"userid\"\r\n                       required\r\n                       [(ngModel)]=\"phoneno\"\r\n                       #userid = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n              <span class=\"help-block\" *ngIf=\"!userid.valid && userid.touched\">Phone No. is invalid</span>\r\n            </div>\r\n\r\n            <div class=\"form-group\" *ngIf=\"isSMSSent\">\r\n                <label for=\"otp\">OTP</label>\r\n                  <input type=\"text\" \r\n                           id=\"otp\" \r\n                           class=\"form-control\" \r\n                           name=\"otp\"\r\n                           required\r\n                           [(ngModel)]=\"otptext\"\r\n                           #otp = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\r\n                  <span class=\"help-block\" *ngIf=\"!otp.valid && otp.touched\">OTP is invalid</span>\r\n                </div>\r\n            \r\n\r\n              <button class=\"btn btn-warning\" *ngIf=\"!isSMSSent\" (click)=\"SendOTP()\" type='button'>Continue</button>\r\n              <button class=\"btn btn-warning\" *ngIf=\"isSMSSent && !isPhoneVerified\" (click)=\"VerifyOTP()\" type='button'>Verify OTP</button>\r\n            \r\n            <div class=\"form-group\" *ngIf=\"isPhoneVerified\">\r\n              <label for=\"type\">Type\r\n                <select id=\"type\" name=\"type\" ngModel required>\r\n                    <option selected disabled>Choose one</option>\r\n                    <option *ngFor=\"let option of ApplicantType;let j=index\" [ngValue]=\"option._id\">{{option.type}}</option>\r\n                </select></label>\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" minlength=\"6\" id=\"password\" name=\"password\" class=\"form-control\" ngModel required #password = \"ngModel\">\r\n              <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\" >Password is invalid</span>\r\n              <span class=\"help-block\" *ngIf=\"password.errors?.minlength && password.touched\">Password must be atleast 6 characters long</span>\r\n            </div>\r\n            <button class=\"btn btn-primary\" *ngIf=\"isPhoneVerified\" [disabled]=\"!f.valid && f.touched\" type=\"submit\">Sign Up</button>\r\n            <button class=\"btn btn-default\" (click)=\"OnLoginPage()\" type='button'>Already have an account? Log in</button>\r\n          </form>\r\n    </div>\r\n</div>\r\n  <!-- pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" -->"

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormModel; });
var FormModel = /** @class */ (function () {
    function FormModel() {
    }
    return FormModel;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/form.model.js.map

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(298);


/***/ })

},[785]);
//# sourceMappingURL=main.bundle.map