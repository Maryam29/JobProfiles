webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CustomListService);
    return CustomListService;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/custom-list.service.js.map

/***/ }),

/***/ 299:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 299;


/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(307);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(495),
            styles: [__webpack_require__(484)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/app.component.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_filter_pipe__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard_service__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_custom_list_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__signin_signin_component__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_create_form_create_form_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_create_template_create_template_component__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_applicant_form_applicant_form_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_view_forms_view_forms_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_applicant_list_applicant_list_component__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_preview_form_preview_form_component__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_applicant_profile_applicant_profile_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_Keys_pipe__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_Times_pipe__ = __webpack_require__(310);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
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
                __WEBPACK_IMPORTED_MODULE_22__home_Keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_23__home_Times_pipe__["a" /* TimesPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_21_ng2_file_upload__["FileUploadModule"],
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

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b, _c;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/auth-guard.service.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/Keys.pipe.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'times' })
    ], TimesPipe);
    return TimesPipe;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/Times.pipe.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_list_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__);
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






// const URL = 'http://akdesign.in/dev/apiurl/filereciever.php';
var URL = 'http://localhost:3000/file';
var ApplicantFormComponent = /** @class */ (function () {
    // When Form is partially filled.0: form in no-edit state, 1: Changes Saved, -1: Changes not saved due to error,2:in edit/remove/add
    function ApplicantFormComponent(customFormService, authService, fb, customListService) {
        this.customFormService = customFormService;
        this.authService = authService;
        this.fb = fb;
        this.customListService = customListService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_file_upload__["FileUploader"]({
            url: URL,
            isHTML5: true
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
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
    ApplicantFormComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ApplicantFormComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applicant-form',
            template: __webpack_require__(496),
            styles: [__webpack_require__(485)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__custom_list_service__["a" /* CustomListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__custom_list_service__["a" /* CustomListService */]) === "function" && _d || Object])
    ], ApplicantFormComponent);
    return ApplicantFormComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/applicant-form.component.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jspdf__ = __webpack_require__(181);
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
                    _this.OnSelectApplicantType(0);
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
        console.log('Export to pdf');
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
                var filename = 'Applicant' + _this.SelectedType.applicants[index]['Name'] + '.pdf';
                doc.save(filename);
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('ApplicantProfiles'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
    ], ApplicantListComponent.prototype, "ApplicantProfiles", void 0);
    ApplicantListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applicant-list',
            template: __webpack_require__(497),
            styles: [__webpack_require__(486)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _b || Object])
    ], ApplicantListComponent);
    return ApplicantListComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/applicant-list.component.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__(181);
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
        this.format_1 = true;
        this.format_2 = false;
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
                    console.log(_this.Applicant);
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
            console.log(index);
            if (index == 1) {
                this.format_1 = true;
                this.format_2 = false;
            }
            else if (index == 2) {
                this.format_2 = true;
                this.format_1 = false;
            }
            // const SelectedTemplate = this.TemplateList[index - 1];
            // const Section = {};
            // for (let sec = 0; sec < this.Form.Sections.length; sec++) {
            //   const currsec = this.Form.Sections[sec];
            //   Section[currsec.SectionID] = sec; // storing the index
            // }
            // for (let i = 0; i < SelectedTemplate.Sections.length; i++) {
            //   const templatesec = SelectedTemplate.Sections[i];
            //   // If Section is present in template section look for fields in Template
            //   if (Section.hasOwnProperty(templatesec.SectionID)) {
            //     const secindex = Section[templatesec.SectionID];
            //     const currsec = this.Form.Sections[secindex];
            //     const formfields = currsec.Fields;
            //     for (let findex = 0; findex < formfields.length; findex++) {
            //       const isFieldpresent = templatesec.Fields.filter((field) => {
            //         return field === formfields[findex].FieldID;
            //       });
            //       if (isFieldpresent.length) {
            //         currsec.Fields[findex].isFieldChecked = true;
            //       }else {
            //         currsec.Fields[findex].isFieldChecked = false;
            //       }
            //     }
            //     console.log(SelectedTemplate);
            //   }
            // }
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
        //const content = this.ApplicantProfile.nativeElement;
        var content = document.getElementById('printable_format_1');
        // doc.fromHTML(content.innerHTML, 15, 15, {
        // 'width': 190,
        // 'elementHandlers': specialElementHandlers
        // });
        var popupWinindow;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style>body{margin: 50px 50px;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}.table-bordered {border: 1px solid #ddd;}.table {width: 100%;max-width: 100%;margin-bottom: 20px;border-collapse: collapse;}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th{border: 1px solid #ddd;text-align:left;padding:8px}</style></head><body onload="window.print()">' + content.innerHTML + '</html>');
        popupWinindow.document.close();
        // console.log(content);
        // const filename = 'Applicant' + this.Applicant._id + '.pdf';
        // doc.save(filename);
    };
    ApplicantProfileComponent.prototype.PrintToPdf_2 = function () {
        console.log('Export to pdf');
        var doc = new __WEBPACK_IMPORTED_MODULE_4_jspdf__();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        //const content = this.ApplicantProfile.nativeElement;
        var content = document.getElementById('printable_format_2');
        // doc.fromHTML(content.innerHTML, 15, 15, {
        // 'width': 190,
        // 'elementHandlers': specialElementHandlers
        // });
        var popupWinindow;
        popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><style>body{margin: 50px 50px;font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}.table-bordered {border: 1px solid #000;}.table {width: 100%;max-width: 100%;margin-bottom: 20px;border-collapse: collapse;}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th{border: 1px solid #000;text-align:left;padding:8px}</style></head><body onload="window.print()">' + content.innerHTML + '</html>');
        popupWinindow.document.close();
        // console.log(content);
        // const filename = 'Applicant' + this.Applicant._id + '.pdf';
        // doc.save(filename);
    };
    ApplicantProfileComponent.prototype.PrintToPdf_bk = function () {
        console.log('Export to pdf');
        var doc = new __WEBPACK_IMPORTED_MODULE_4_jspdf__();
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        var content = document.getElementById('printable'); //this.ApplicantProfile.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            'elementHandlers': specialElementHandlers
        });
        console.log(content);
        var filename = 'Applicant' + this.Applicant._id + '.pdf';
        doc.save(filename);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ApplicantProfile'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], ApplicantProfileComponent.prototype, "ApplicantProfile", void 0);
    ApplicantProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applicant-profile',
            template: __webpack_require__(498),
            styles: [__webpack_require__(487)]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__custom_form_service__["a" /* CustomFormService */]) === "function" && _d || Object])
    ], ApplicantProfileComponent);
    return ApplicantProfileComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/applicant-profile.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__section_model__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_model__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_control_model__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_model__ = __webpack_require__(316);
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







var ObjectID = __webpack_require__(325);
var CreateFormComponent = /** @class */ (function () {
    function CreateFormComponent(customFormService, authService) {
        this.customFormService = customFormService;
        this.authService = authService;
        this.SelectedForm = new __WEBPACK_IMPORTED_MODULE_4__form_model__["a" /* FormModel */]();
        this.FormSaved = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CreateFormComponent.prototype, "SelectedForm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CreateFormComponent.prototype, "FormSaved", void 0);
    CreateFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-form',
            template: __webpack_require__(499),
            styles: [__webpack_require__(488)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], CreateFormComponent);
    return CreateFormComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/create-form.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_model__ = __webpack_require__(74);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-template',
            template: __webpack_require__(500),
            styles: [__webpack_require__(489)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object])
    ], CreateTemplateComponent);
    return CreateTemplateComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/create-template.component.js.map

/***/ }),

/***/ 316:
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

/***/ 317:
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

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(501),
            styles: [__webpack_require__(490)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/home.component.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PreviewFormComponent.prototype, "SelectedForm", void 0);
    PreviewFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-preview-form',
            template: __webpack_require__(502),
            styles: [__webpack_require__(491)]
        }),
        __metadata("design:paramtypes", [])
    ], PreviewFormComponent);
    return PreviewFormComponent;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/preview-form.component.js.map

/***/ }),

/***/ 320:
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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_form_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_model__ = __webpack_require__(74);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-forms',
            template: __webpack_require__(503),
            styles: [__webpack_require__(492)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__custom_form_service__["a" /* CustomFormService */]) === "function" && _a || Object])
    ], ViewFormsComponent);
    return ViewFormsComponent;
    var _a;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/view-forms.component.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SigninComponent.prototype, "message", void 0);
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(504),
            styles: [__webpack_require__(493)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/signin.component.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(285);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "otptext", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "phoneno", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SignupComponent.prototype, "message", void 0);
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(505),
            styles: [__webpack_require__(494)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/signup.component.js.map

/***/ }),

/***/ 324:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_rx__ = __webpack_require__(285);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(182);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _b || Object])
    ], CustomFormService);
    return CustomFormService;
    var _a, _b;
}());

//# sourceMappingURL=D:/Backup/Personal stuff/Projects/JobPortal/src/custom-form.service.js.map

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n    z-index: 10;\n}\n.loader_div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n}\n.loadingtext {\n    margin-top:5px;\n    color:white;\n}\n\nth{font-weight: bold;}\n.table{margin-bottom: 5px;font-size: 12px}\n\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n    z-index: 10;\n}\n.loader_div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n}\n.loadingtext {\n    margin-top:5px;\n    color:white;\n}"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n    z-index: 10;\n}\n.loader_div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n}\n.loadingtext {\n    margin-top:5px;\n    color:white;\n}\n\n.hideElement{display: none;}\n\n.table-bordered>tbody>tr>th{font-weight: bold;}\n.table-bordered>tbody>tr>td,\n.table-bordered>tbody>tr>th {\n    border-color: black\n}\nh4{font-weight: bold}"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n    z-index: 10;\n}\n.loader_div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n}\n.loadingtext {\n    margin-top:5px;\n    color:white;\n}"

/***/ }),

/***/ 490:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 492:
/***/ (function(module, exports) {

module.exports = "#loading.overlay{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0,0,0,0.5);\n    z-index: 10;\n}\n.loader_div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    text-align: center;\n}\n.loadingtext {\n    margin-top:5px;\n    color:white;\n}"

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 494:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 495:
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <div id=\"page-wrapper\" style=\"margin:50px;\">\n      <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ 496:
/***/ (function(module, exports) {

module.exports = "<!--Empty Form-->\n<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" name=\"fileToUpload\" />\n<div class=\"col-md-9\" style=\"margin-bottom: 40px\">\n \n            <h3>Upload queue</h3>\n            <p>Queue length: {{ uploader?.queue?.length }}</p>\n \n            <table class=\"table\">\n                <thead>\n                <tr>\n                    <th width=\"50%\">Name</th>\n                    <th>Size</th>\n                    <th>Progress</th>\n                    <th>Status</th>\n                    <th>Actions</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let item of uploader.queue\">\n                    <td><strong>{{ item?.file?.name }}</strong></td>\n                    <td *ngIf=\"uploader.isHTML5\" nowrap><!-- {{ item?.file?.size/1024/1024 | number:'.2' }} MB --></td>\n                    <td >\n                        <div class=\"progress\" style=\"margin-bottom: 0;\">\n                            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                        </div>\n                    </td>\n                    <td class=\"text-center\">\n                        <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                        <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                        <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                    </td>\n                    <td nowrap>\n                        <button type=\"button\" class=\"btn btn-success btn-xs\"\n                                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                            <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                        </button>\n                        <button type=\"button\" class=\"btn btn-warning btn-xs\"\n                                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                        </button>\n                        <button type=\"button\" class=\"btn btn-danger btn-xs\"\n                                (click)=\"item.remove()\">\n                            <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                        </button>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n<div *ngIf=\"isFormLoaded\">\n        <div *ngIf=\"!isApplicationFilled\">\n                <form (ngSubmit)=\"onSaveForm()\" [formGroup]=\"ProfileForm\">\n                    <h3>{{FormTitle}}</h3>\n                    \n                    <div formArrayName=\"customcontrols\" *ngFor=\"let currsection of ProfileForm.get('customcontrols').controls; let currsectionindex = index;\">\n                        <h4>{{FormLayout.Sections[currsectionindex][0].SectionName}}</h4>\n            \n                        <div *ngFor=\"let subsection of currsection.controls; let subindex = index\" [formArrayName]=\"currsectionindex\">\n                            <hr>\n                            <div *ngFor=\"let field of FormLayout.Sections[currsectionindex][subindex].Fields; let fieldindex = index\" [formGroupName]=\"subindex\">\n                                <div [ngSwitch]=\"field.FieldType\">\n                                    <label>{{field.FieldName}}</label>\n            \n                                    <!-----------------------For Radio Button------------------>\n                                    <div *ngSwitchCase=\"'Radio'\">\n                                        <div *ngFor=\"let option of field.options;let optionindex = index\">\n                                            {{option}}\n                                            <input class=\"\" type=\"radio\" [formControlName]=\"fieldindex\" [value]=\"option\">\n                                        </div>\n                                    </div>\n                                    <!-----------------------End Radio Button------------------>\n            \n                                    <!-----------------------For Checkbox Button------------------>\n                                    <div *ngSwitchCase=\"'Checkbox'\">\n                                        <div *ngFor=\"let option of field.options; let optionindex = index\" [formArrayName]=\"fieldindex\">\n                                            {{option}}\n                                            <input class=\"\" type=\"checkbox\" [formControlName]=\"optionindex\">\n                                        </div>\n                                    </div>\n                                    <!-----------------------End Checkbox Button------------------>\n            \n                                    <!-----------------------For Textbox Button------------------>\n                                    <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n                                        <input class=\"form-control\" type=\"text\" [formControlName]=\"fieldindex\">\n                                    </div>\n                                    <!----------------------End Textbox Button------------------>\n            \n                                    <!-----------------------For Paragraph Button------------------>\n                                    <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n                                        <textarea class=\"form-control\" [formControlName]=\"fieldindex\"></textarea>\n                                    </div>\n                                    <!----------------------End Paragraph Button------------------>\n            \n                                    <!-----------------------For Dropbox Button------------------>\n                                    <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\n                                        <select class=\"form-control\" [formControlName]=\"fieldindex\">\n                                            <option selected disabled>Choose one</option>\n                                            <option *ngFor=\"let option of field.options;\">{{option}}</option>\n                                        </select>\n                                    </div>\n                                    <!----------------------End Dropbox Button------------------>\n            \n                                    <!-----------------------For Calendar Button------------------>\n                                    <div *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\n                                        <input class=\"form-control\" type=\"date\" [formControlName]=\"fieldindex\" />\n                                    </div>\n                                    <!----------------------End Calendar Button------------------>\n            \n                                    <!-----------------------For Countries Dropbox Button------------------>\n                                    <div *ngSwitchCase=\"'Country'\" class=\"form-group\">\n                                        <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                            [formControlName]=\"fieldindex\">\n                                            <option selected disabled>Select Country</option>\n                                            <option *ngFor=\"let option of field.options\" value={{option.CountryName}}>{{option.CountryName}}</option>\n                                        </select>\n                                    </div>\n                                    <!----------------------End CustomerType Dropbox Button------------------>\n            \n                                    <!-----------------------For State Dropbox Button------------------>\n                                    <div *ngSwitchCase=\"'State'\" class=\"form-group\">\n                                        <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                            [formControlName]=\"fieldindex\">\n                                            <option selected disabled>Select State</option>\n                                            <option *ngFor=\"let option of field.options\" value={{option.StateName}}>{{option.StateName}}</option>\n                                        </select>\n                                        <!-- <select>\n                                                <option selected disabled>Choose one</option>\n                                                <option *ngFor=\"let option of field.options;\">{{option}}</option>\n                                            </select> -->\n                                    </div>\n                                    <!----------------------End State Dropbox Button------------------>\n            \n                                    <!-----------------------For City Dropbox Button------------------>\n                                    <div *ngSwitchCase=\"'City'\" class=\"form-group\">\n                                        <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\n                                            <option selected disabled>Select City</option>\n                                            <option *ngFor=\"let option of field.options\" value={{option}}>{{option}}</option>\n                                        </select>\n                                        <!-- <select>\n                                                    <option selected disabled>Choose one</option>\n                                                    <option *ngFor=\"let option of field.options;\">{{option}}</option>\n                                                </select> -->\n                                    </div>\n                                    <!----------------------End City Dropbox Button------------------>\n            \n                                    <!-----------------------For CustomerType Dropbox Button------------------>\n                                    <div *ngSwitchCase=\"'Type'\" class=\"form-group\">\n                                        <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                            [formControlName]=\"fieldindex\">\n                                            <option selected disabled>Select Customer Type</option>\n                                            <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                        </select>\n            \n                                        <!-- <select [formControlName]=\"fieldindex\"> \n                                    <option selected disabled>Choose one</option>\n                                    <option *ngFor=\"let option of field.options;\"value= {{country.id}}>{{country.name}}</option>\n                                </select>-->\n                                    </div>\n                                    <!----------------------End CustomerType Dropbox Button------------------>\n            \n                                    <!-----------------------For Installation Type Dropbox Button------------------>\n                                    <div *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\n                                        <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                            [formControlName]=\"fieldindex\">\n                                            <option selected disabled>Select Installation Type</option>\n                                            <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                        </select>\n                                        <!-- <select>\n                                            <option selected disabled>Choose one</option>\n                                            <option *ngFor=\"let option of field.options;\">{{option}}</option>\n                                        </select> -->\n                                    </div>\n                                    <!----------------------End Installation Type Dropbox Button------------------>\n                                    <!-----------------------For Designation Dropbox Button------------------>\n                                    <div *ngSwitchCase=\"'Designation'\" class=\"form-group\">\n                                        <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\n                                            <option selected disabled>Select Designation</option>\n                                            <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                        </select>\n                                    </div>\n                                    <!----------------------End Designation Dropbox Button------------------>\n            \n                                </div>\n                            </div>\n                        </div>\n                        <span>\n                            <a *ngIf=\"FormLayout.Sections[currsectionindex][0].CanBeMultiple\" (click)=\"AddSubSection(currsectionindex)\">Add Section</a>\n                        </span>\n                        <hr>\n                    </div>\n                    <button class=\"btn btn-primary\" type=\"submit\">Save</button>\n                </form>\n            </div>\n            \n            <div *ngIf=\"isApplicationFilled\">\n                <h3 style=\"padding-top: 30px;\">{{FormTitle}}</h3>\n                <form (ngSubmit)=\"onSaveForm()\" [formGroup]=\"ProfileForm\">\n                    <div formArrayName=\"customcontrols\" *ngFor=\"let currsection of ProfileForm.get('customcontrols').controls; let currsectionindex = index;\" style=\"width:40%\">\n                        <h4 style=\"margin-top: 30px\">{{FormLayout.Sections[currsectionindex][0].SectionName}}</h4>\n            \n                        <!-- Sections that cannot be multiple in Non Edit Mode -->\n                        <ng-container *ngIf=\"!FormLayout.Sections[currsectionindex][0].CanBeMultiple && !FormLayout.Sections[currsectionindex][0].isEditMode\">\n                            <div *ngFor=\"let field of FormLayout.Sections[currsectionindex][0].Fields; let fieldindex = index\" class=\"row\">\n                                <label class=\"col-md-6\">{{field.FieldName}}:</label> <div  class=\"col-md-6\">{{GetFieldValue(currsectionindex,0,fieldindex)}}</div>\n                            </div>\n                            <span>\n                                <a (click)=\"EditSubSection(currsectionindex, 0)\">Edit {{FormLayout.Sections[currsectionindex][0].SectionName}}</a>\n                            </span>\n                        </ng-container>\n           \n                        <!-- Sections that cannot be multiple in Edit Mode -->\n                        <ng-container *ngIf=\"!FormLayout.Sections[currsectionindex][0].CanBeMultiple && FormLayout.Sections[currsectionindex][0].isEditMode\">\n                            <ng-container *ngFor=\"let subsection of currsection.controls; let subindex = index\" [formArrayName]=\"currsectionindex\">\n                                <ng-container *ngFor=\"let field of FormLayout.Sections[currsectionindex][0].Fields; let fieldindex = index\" [formGroupName]=\"subindex\">\n                                    <label>{{field.FieldName}}:</label> \n                                    <ng-container [ngSwitch]=\"field.FieldType\">\n                                        <!-- <label>{{field.FieldName}}</label> -->\n            \n                                        <!-----------------------For Radio Button------------------>\n                                        <div *ngSwitchCase=\"'Radio'\">\n                                            <ng-container *ngFor=\"let option of field.options;let optionindex = index\">\n                                                {{option}}\n                                                <input class=\"\" type=\"radio\" [formControlName]=\"fieldindex\" [value]=\"option\">\n                                            </ng-container>\n                                        </div>\n            \n                                        <!-----------------------End Radio Button------------------>\n            \n                                        <!-----------------------For Checkbox Button------------------>\n                                        <div *ngSwitchCase=\"'Checkbox'\">\n                                            <ng-container *ngFor=\"let option of field.options; let optionindex = index\" [formArrayName]=\"fieldindex\">\n                                                {{option}}\n                                                <input type=\"checkbox\" [formControlName]=\"optionindex\">\n                                            </ng-container>\n                                        </div>\n            \n                                        <!-----------------------End Checkbox Button------------------>\n            \n                                        <!-----------------------For Textbox Button------------------>\n                                        <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n                                            <input class=\"form-control\" type=\"text\" [formControlName]=\"fieldindex\">\n                                        </div>\n            \n                                        <!----------------------End Textbox Button------------------>\n            \n                                        <!-----------------------For Paragraph Button------------------>\n                                        <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n                                            <textarea class=\"form-control\" [formControlName]=\"fieldindex\"></textarea>\n                                        </div>\n            \n                                        <!----------------------End Paragraph Button------------------>\n            \n                                        <!-----------------------For Dropbox Button------------------>\n                                        <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\n                                            <select class=\"form-control\" [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Choose one</option>\n                                                <option *ngFor=\"let option of field.options;\">{{option}}</option>\n                                            </select>\n                                        </div>\n            \n            \n                                        <!----------------------End Dropbox Button------------------>\n            \n                                        <!-----------------------For Calendar Button------------------>\n                                        <div *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\n                                            <input class=\"form-control\" type=\"date\" [formControlName]=\"fieldindex\" />\n                                        </div>\n            \n                                        <!----------------------End Calendar Button------------------>\n            \n                                        <!-----------------------For Countries Dropbox Button------------------>\n                                        <div *ngSwitchCase=\"'Country'\" class=\"form-group\">\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                                [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select Country</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.CountryName}}>{{option.CountryName}}</option>\n                                            </select>\n                                        </div>\n            \n                                        <!----------------------End CustomerType Dropbox Button------------------>\n            \n                                        <!-----------------------For State Dropbox Button------------------>\n                                        <div *ngSwitchCase=\"'State'\" class=\"form-group\">\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                                [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select State</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.StateName}}>{{option.StateName}}</option>\n                                            </select>\n                                        </div>\n            \n                                        <!----------------------End State Dropbox Button------------------>\n            \n                                        <!-----------------------For City Dropbox Button------------------>\n                                        <div *ngSwitchCase=\"'City'\" class=\"form-group\">\n                                            <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select City</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option}}>{{option}}</option>\n                                            </select>\n                                        </div>\n            \n                                        <!----------------------End City Dropbox Button------------------>\n            \n                                        <!-----------------------For CustomerType Dropbox Button------------------>\n                                        <div *ngSwitchCase=\"'Type'\" class=\"form-group\">\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                                [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select Customer Type</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                            </select>\n                                        </div>\n            \n                                        <!----------------------End CustomerType Dropbox Button------------------>\n            \n                                        <!-----------------------For Installation Type Dropbox Button------------------>\n                                        <div *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                                [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select Installation Type</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                            </select>\n                                        </div>\n            \n                                        <!----------------------End Installation Type Dropbox Button------------------>\n                                        <!-----------------------For Designation Dropbox Button------------------>\n                                        <div *ngSwitchCase=\"'Designation'\" class=\"form-group\">\n                                            <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select Designation</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                            </select>\n                                        </div>\n            \n                                        <!----------------------End Designation Dropbox Button------------------>\n            \n                                    </ng-container>\n                                </ng-container>\n                            </ng-container>\n                            <a type=\"button\" (click)=\"onSavesubSection(currsectionindex,0)\">Done</a>\n                        </ng-container>\n            \n                        <!-- Sections that can be multiple -->\n                        \n                        <table class=\"table table-bordered table-striped\" *ngIf=\"FormLayout.Sections[currsectionindex][0].CanBeMultiple\">\n                            <tr>\n                                <th *ngFor=\"let field of FormLayout.Sections[currsectionindex][0].Fields; let fieldindex = index\">\n                                    {{field.FieldName}}\n                                </th>\n                                <th></th>\n                                <th></th>\n                            </tr>\n                            <ng-container *ngFor=\"let subsection of currsection.controls; let subindex = index\" [formArrayName]=\"currsectionindex\">\n                                    <!-- If Sub Section/Row is in Non Edit Mode  -->\n                            <tr *ngIf=\"!FormLayout.Sections[currsectionindex][subindex].isEditMode\">\n                                <td *ngFor=\"let field of FormLayout.Sections[currsectionindex][0].Fields; let fieldindex = index\">\n                                    {{GetFieldValue(currsectionindex,subindex,fieldindex)}}\n                                </td>\n                                <td>\n                                    <a *ngIf=\"FormLayout.Sections[currsectionindex].length>1\" (click)=\"RemoveSubSection(currsectionindex,subindex)\">Remove</a>\n                                </td>\n                                <td>\n                                    <span>\n                                        <a (click)=\"EditSubSection(currsectionindex, subindex)\">Edit</a>\n                                    </span>\n                                </td>\n                            </tr>\n            \n                            <!-- If Sub Section/Row is in Edit Mode  -->\n            \n                            <tr *ngIf=\"FormLayout.Sections[currsectionindex][subindex].isEditMode\">\n                                <ng-container *ngFor=\"let field of FormLayout.Sections[currsectionindex][subindex].Fields; let fieldindex = index\" [formGroupName]=\"subindex\">\n                                    <ng-container [ngSwitch]=\"field.FieldType\">\n                                        <!-- <label>{{field.FieldName}}</label> -->\n            \n                                        <!-----------------------For Radio Button------------------>\n                                        <td *ngSwitchCase=\"'Radio'\">\n                                            <ng-container *ngFor=\"let option of field.options;let optionindex = index\">\n                                                {{option}}\n                                                <input class=\"\" type=\"radio\" [formControlName]=\"fieldindex\" [value]=\"option\">\n                                            </ng-container>\n                                        </td>\n            \n                                        <!-----------------------End Radio Button------------------>\n            \n                                        <!-----------------------For Checkbox Button------------------>\n                                        <td *ngSwitchCase=\"'Checkbox'\">\n                                            <ng-container *ngFor=\"let option of field.options; let optionindex = index\" [formArrayName]=\"fieldindex\">\n                                                {{option}}\n                                                <input type=\"checkbox\" [formControlName]=\"optionindex\">\n                                            </ng-container>\n                                        </td>\n            \n                                        <!-----------------------End Checkbox Button------------------>\n            \n                                        <!-----------------------For Textbox Button------------------>\n                                        <td *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n                                            <input class=\"form-control\" type=\"text\" [formControlName]=\"fieldindex\">\n                                        </td>\n            \n                                        <!----------------------End Textbox Button------------------>\n            \n                                        <!-----------------------For Paragraph Button------------------>\n                                        <td *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n                                            <textarea class=\"form-control\" [formControlName]=\"fieldindex\"></textarea>\n                                        </td>\n            \n                                        <!----------------------End Paragraph Button------------------>\n            \n                                        <!-----------------------For Dropbox Button------------------>\n                                        <td *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\n                                            <select class=\"form-control\" [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Choose one</option>\n                                                <option *ngFor=\"let option of field.options;\">{{option}}</option>\n                                            </select>\n                                        </td>\n            \n            \n                                        <!----------------------End Dropbox Button------------------>\n            \n                                        <!-----------------------For Calendar Button------------------>\n                                        <td *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\n                                            <input class=\"form-control\" type=\"date\" [formControlName]=\"fieldindex\" />\n                                        </td>\n            \n                                        <!----------------------End Calendar Button------------------>\n            \n                                        <!-----------------------For Countries Dropbox Button------------------>\n                                        <td *ngSwitchCase=\"'Country'\" class=\"form-group\">\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                                [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select Country</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.CountryName}}>{{option.CountryName}}</option>\n                                            </select>\n                                        </td>\n            \n                                        <!----------------------End CustomerType Dropbox Button------------------>\n            \n                                        <!-----------------------For State Dropbox Button------------------>\n                                        <td *ngSwitchCase=\"'State'\" class=\"form-group\">\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                                [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select State</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.StateName}}>{{option.StateName}}</option>\n                                            </select>\n                                        </td>\n            \n                                        <!----------------------End State Dropbox Button------------------>\n            \n                                        <!-----------------------For City Dropbox Button------------------>\n                                        <td *ngSwitchCase=\"'City'\" class=\"form-group\">\n                                            <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select City</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option}}>{{option}}</option>\n                                            </select>\n                                        </td>\n            \n                                        <!----------------------End City Dropbox Button------------------>\n            \n                                        <!-----------------------For CustomerType Dropbox Button------------------>\n                                        <td *ngSwitchCase=\"'Type'\" class=\"form-group\">\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                                [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select Customer Type</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                            </select>\n                                        </td>\n            \n                                        <!----------------------End CustomerType Dropbox Button------------------>\n            \n                                        <!-----------------------For Installation Type Dropbox Button------------------>\n                                        <td *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\n                                            <select (change)=\"onSelectParent(currsectionindex, subindex, fieldindex, $event.target.value)\" class=\"form-control input-lg\"\n                                                [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select Installation Type</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                            </select>\n                                        </td>\n            \n                                        <!----------------------End Installation Type Dropbox Button------------------>\n                                        <!-----------------------For Designation Dropbox Button------------------>\n                                        <td *ngSwitchCase=\"'Designation'\" class=\"form-group\">\n                                            <select class=\"form-control input-lg\" [formControlName]=\"fieldindex\">\n                                                <option selected disabled>Select Designation</option>\n                                                <option *ngFor=\"let option of field.options\" value={{option.name}}>{{option.name}}</option>\n                                            </select>\n                                        </td>\n            \n                                        <!----------------------End Designation Dropbox Button------------------>\n            \n                                    </ng-container>\n                                </ng-container>\n                                <td>\n                                    <a *ngIf=\"FormLayout.Sections[currsectionindex].length>1\" (click)=\"RemoveSubSection(currsectionindex,subindex)\">Remove</a>\n                                </td>\n                                <td>\n                                    <a type=\"button\" (click)=\"onSavesubSection(currsectionindex,subindex)\">Done</a>\n                                </td>\n                            </tr>\n            \n                            </ng-container>\n                        </table>\n                        <span>\n                            <a class=\"\" *ngIf=\"FormLayout.Sections[currsectionindex][0].CanBeMultiple\" (click)=\"AddSubSection(currsectionindex)\">Add {{FormLayout.Sections[currsectionindex][0].SectionName}}</a>\n                        </span>\n                        \n                        <div *ngFor=\"let subsection of currsection.controls; let subindex = index\">\n                        </div>\n            \n                    </div>\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"isFormSaved != 2\" style=\"margin-top: 20px\">Save Changes</button>\n                </form>\n                <div class=\"panel panel-danger\" style=\"margin:10px\" *ngIf=\"isFormSaved == -1\">\n                    <div class=\"panel-body\">Details couldn\\'t be saved.</div>\n                </div>\n            \n                <div class=\"panel panel-success\" style=\"margin:10px\" *ngIf=\"isFormSaved == 1\">\n                    <div class=\"panel-body\">Details saved Sucessfully.</div>\n                </div>\n            </div>\n            \n            <!-- Profile Already Filled-->\n</div>\n<div *ngIf=\"!isFormLoaded\">\n    <div id=\"loading\" class=\"overlay\">\n        <div class=\"loader_div\">\n            <img src=\"loader.gif\"/><br><br>\n            <b class=\"loadingtext\">Loading...</b>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

module.exports = "<style>\n.table-bordered.table-condensed.table-striped tr td:nth-child(6),.table-bordered.table-condensed.table-striped tr th:nth-child(6)  {\n    display: none;\n}\n</style>\n\n\n  <ng-container *ngIf=\"!isApplicantDetailsLoaded; else DetailsLoaded\">\n    <div id=\"loading\" class=\"overlay\">\n      <div class=\"loader_div\">\n          <img src=\"loader.gif\"/><br><br>\n          <b class=\"loadingtext\">Loading...</b>\n      </div>\n  </div>\n  </ng-container>\n  <ng-template #DetailsLoaded>\n    <div class=\"row\">\n    <div class=\"col-md-1\" *ngIf=\"ApplicantsDetails.length>0\">\n      <nav style=\"background:  #0067ad;\n        width: 224px;\n        left: 0;\n        position: fixed;\n        height: -webkit-fill-available;\n        padding-left: 25px;color:#fff;\">\n      <h3 style=\"margin-bottom: 25px;font-weight:600\">\n        Applicant List\n      </h3>\n      <em>Select Form Type</em>\n      <ul>\n        <li *ngFor=\"let item of ApplicantsDetails;let j=index\">\n          <a (click)=\"OnSelectApplicantType(j)\" style=\"color: #fff;\">{{item.type}}</a>\n        </li>\n      </ul>\n    </nav>\n    </div>\n\n    <div class=\"col-md-11\" *ngIf=\"SelectedType.count_applicants > 0\">\n      <h3>Applicant list</h3>\n      <!---->\n      <!-- <select [(ngModel)]=\"FilterType\">\n            <option selected disabled>Choose one</option>\n            <option *ngFor=\"let col of SelectedType.fields\">{{col.FieldName}}</option>\n          </select> -->\n    <div class=\"row\" style=\"margin-top: 30px\">\n      <div class=\"col-md-12 form-group\">\n        <input type=\"text\" [(ngModel)]=\"FilterText\">\n        <button class=\"btn btn-primary\" (click)=\"OnSearch()\">Search</button>\n        <button class=\"btn btn-default\" (click)=\"OnClearSearch()\">Clear Search</button>\n      </div>\n \n      <div class=\"col-md-12\" style=\"overflow: scroll;margin-top: 30px\">\n      <!-- <button class=\"btn btn-success\" (click)=\"ExportSelectedProfiles()\">Export to pdf</button> -->\n      <!---When Filter Text is not empty show filtered results-->\n      <table class=\"table-bordered table-condensed table-striped\" style=\"width:100%\">\n        <tr>\n         \n          <th *ngFor=\"let col of SelectedType.fields\" style=\"font-weight: 600\">\n            {{col.FieldName}}\n          </th>\n          <th></th>\n        </tr>\n        <ng-container *ngFor=\"let applicant of SelectedType.applicants;let j=index\">\n          <tr *ngIf=\"isApplicantFiltered[j]\">\n           \n            <td *ngFor=\"let col of SelectedType.fields;let k=index\" style=\"min-width: 100px\">\n                <span *ngIf=\"k==0\">              \n                    <a [routerLink]=\"['../ViewProfile',applicant.applicantID]\"> {{applicant[col.FieldName]}}</a>\n                  </span>\n                  <span *ngIf=\"k!=0\">              \n                       {{applicant[col.FieldName]}}\n                    </span>\n            </td>\n            <td>\n              <a [routerLink]=\"['../ViewProfile',applicant.applicantID]\">View Profile</a>\n            </td>\n          </tr>\n          <!-- <tr *ngIf=\"isApplicantFiltered[j]\">\n                <input type=\"checkbox\" [checked]=\"isApplicantChecked[j]\" (change)=\"ToggleApplicantSelection(j)\">\n                <td *ngFor=\"let col of SelectedType.fields | filterBy:userFilter\">\n                  {{applicant[\"Personal Details\"][0][col.FieldName]}}\n                </td>\n              </tr> -->\n\n          <!--PDF template-->\n          <div [hidden]=true #ApplicantProfiles>\n            <ul>\n              <li *ngFor=\"let col of SelectedType.fields\">\n                <label>{{col.FieldName}}:</label>{{applicant[col.FieldName]}}\n              </li>\n            </ul>\n          </div>\n        </ng-container>\n      </table>\n    </div>\n  </div>\n      \n    </div>\n  </div>\n  </ng-template>\n"

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!isProfileLoaded; else ProfileLoaded\">\n    <div id=\"loading\" class=\"overlay\">\n        <div class=\"loader_div\">\n            <img src=\"loader.gif\" /><br><br>\n            <b class=\"loadingtext\">Loading...</b>\n        </div>\n    </div>\n</ng-container>\n\n\n<ng-template #ProfileLoaded>\n\n    <h3 style=\"padding-top: 30px\">{{Form.FormTitle}}</h3>\n    <select class=\"form-control\" (change)=\"OnSelectTemplate($event)\" style=\"width: 40%\">\n        <option selected disabled>Select Template</option>\n        <!-- <option *ngFor=\"let col of TemplateList;let j=index\">{{col.TemplateTitle}}</option> -->\n        <option value=\"1\" selected=\"selected\">OCS Template</option>\n        <option value=\"2\" >Seadrill Template</option>\n        \n      </select>\n\n    <div #ApplicantProfile style=\"display: none;\">\n        <div *ngFor=\"let section of Form.Sections;let secindex = index\">\n            <h4>{{section.SectionName}}</h4>\n            <ng-container *ngIf=\"!section.CanBeMultiple\">\n                <div *ngFor=\"let field of section.Fields; let fieldindex = index\">\n                    <ng-container *ngIf=\"field.isFieldChecked\" class=\"form-control\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\"><label> {{field.FieldName}}:</label></div>\n                            <div class=\"col-md-2\">{{GetFieldValue(section.SectionID, 0, field.FieldID)}}</div>\n                        </div>\n                    </ng-container>\n                </div>\n            </ng-container>\n            <ng-container *ngIf=\"section.CanBeMultiple\">\n                <table class=\"table table-striped table-bordered\">\n                    <tr>\n                        <ng-container *ngFor=\"let field of section.Fields; let fieldindex = index\">\n                            <th *ngIf=\"field.isFieldChecked\">\n                                {{field.FieldName}}\n                            </th>\n                        </ng-container>\n                    </tr>\n                    <tr *ngFor=\"let subsection of Applicant[section.SectionID]; let subindex = index\">\n                        <ng-container *ngFor=\"let field of section.Fields; let fieldindex = index\">\n                            <td *ngIf=\"field.isFieldChecked\">\n                                {{GetFieldValue(section.SectionID, subindex, field.FieldID)}}\n                            </td>\n                        </ng-container>\n                    </tr>\n                </table>\n            </ng-container>\n            <hr>\n        </div>\n    </div>\n<div id=\"printable_format_2\" *ngIf=\"format_2\">\n    <table class=\"table table-bordered\" style=\"margin-top:20px\">\n        <tbody>\n            <tr>\n                <td style=\"width:65%; font-size: 27px\"><span style=\"font-weight:bold\">{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[0].FieldID)}}</span> <span style=\"font-weight:bold\">{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[2].FieldID)}}</span></td>\n                <td>Phone no : {{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[5].FieldID)}}</td>\n            </tr>\n            <tr>\n                <td style=\"font-weight:bold\">\n                    <p>Email : {{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[6].FieldID)}}</p>\n                    <p>Job applied for : {{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[3].FieldID)}}</p>\n                </td>\n                <td>\n                    <p>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[4].FieldID)}}</p>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n<h4 style=\"font-weight:bold\">Experience Details</h4>\n    <table class=\"table table-bordered\" style=\"margin-top:20px\" *ngFor=\"let subsection of Applicant[Form.Sections[1].SectionID]; let subindex = index\">\n        <tbody>\n            <tr style=\"background-color:#c0c0c0\">\n                <th>Company Name</th>\n                <th>Designation</th>\n                <th>Service period mmm.yy to mmm.yy</th>\n            </tr>\n            <tr>\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[0].FieldID)}}, {{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[1].FieldID)}} & {{GetFieldValue(Form.Sections[1].SectionID, 0, Form.Sections[1].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[3].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[6].FieldID)}} - {{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[7].FieldID)}}</td>\n            </tr>\n            <tr>\n                <td colspan=\"3\">Details of Experience: {{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[5].FieldID)}}</td>\n            </tr>\n        </tbody>\n    </table>\n\n    <table class=\"table table-bordered\" style=\"margin-top:20px\">\n        <tbody>\n            <tr style=\"background-color:#c0c0c0;font-weight:bold\">\n                \n                <td></td>\n                <td></td>\n                <td></td>\n            </tr>\n            <tr *ngFor=\"let subsection of Applicant[Form.Sections[2].SectionID]; let subindex = index\">\n               <td><span [class.hideElement]=\"subindex>0\" style=\"font-weight:bold\">Education</span></td>\n                <td>{{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[1].FieldID)}} - {{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[2].FieldID)}}, {{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[0].FieldID)}},  {{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[9].FieldID)}},  {{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[7].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[6].FieldID)}}</td>\n            </tr>\n           \n            <!-- <tr>\n                <td></td>\n                <td>High school <span style=\"float:right\">Institute name  city  country</span></td>\n                <td>Date completed mmm.yy</td>\n            </tr> -->\n        </tbody>\n    </table>\n\n    <table class=\"table table-bordered\" style=\"margin-top:20px\">\n        <tbody>\n            <tr *ngFor=\"let subsection of Applicant[Form.Sections[3].SectionID]; let subindex = index\">\n                <td><span [class.hideElement]=\"subindex>0\" style=\"font-weight:bold\">Trainings</span></td>\n                <td>{{GetFieldValue(Form.Sections[3].SectionID, subindex, Form.Sections[3].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[3].SectionID, subindex, Form.Sections[3].Fields[1].FieldID)}}</td>\n            </tr>\n        </tbody>\n    </table>\n\n\n    <table class=\"table table-bordered\" style=\"margin-top:20px\">\n        <tbody>\n            <tr *ngFor=\"let subsection of Applicant[Form.Sections[10].SectionID]; let subindex = index\">\n                <td><span [class.hideElement]=\"subindex>0\" style=\"font-weight:bold\">Extra-Curricular</span></td>\n                <td colspan=\"4\">{{GetFieldValue(Form.Sections[10].SectionID, subindex, Form.Sections[10].Fields[0].FieldID)}}</td>\n                \n            </tr>\n            <tr>\n                <td style=\"font-weight:bold\">References</td>\n                <td>Name</td>\n                <td>Designation</td>\n                <td>Company</td>\n                <td>Contact Info</td>\n            </tr>\n            <tr *ngFor=\"let subsection of Applicant[Form.Sections[4].SectionID]; let subindex = index\">\n                <td></td>\n                <td>{{GetFieldValue(Form.Sections[4].SectionID, subindex, Form.Sections[4].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[4].SectionID, subindex, Form.Sections[4].Fields[1].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[4].SectionID, subindex, Form.Sections[4].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[4].SectionID, subindex, Form.Sections[4].Fields[3].FieldID)}}</td>\n            </tr>\n            \n            <tr>\n                <td style=\"font-weight:bold\">Work Authorization </td>\n                <td>India</td>\n                <td>UAE</td>\n                <td>Singapore</td>\n                <td>Malaysia</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n\n<div id=\"printable_format_1\" *ngIf=\"format_1\" style=\"margin-top: 20px\">\n        <div style=\"display:flex\"><img src=\"https://www.ocs.services//images/Oilfield_Consolidated_Services.jpg\" style=\"margin-left:30px\">\n            <h3 style=\"text-decoration: underline;margin-left:20px\">OCS Services (India) Private Limited</h3>\n        </div>\n        <div style=\"display:flex\">\n            <table class=\"table table-bordered\" style=\"margin-top:20px;width:60%\">\n                <tr>\n                    <td style=\"background-color:#c5d9f1;font-weight:bold\">Date of submission</td>\n                    <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[23].FieldID)}}</td>\n                </tr>\n                <tr>\n                    <td style=\"background-color:#c5d9f1;font-weight:bold\">Current Post:</td>\n                    <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[3].FieldID)}}</td>\n                </tr>\n                <tr>\n                    <td style=\"background-color:#c5d9f1;font-weight:bold\">Post Applied For:</td>\n                    <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[14].FieldID)}}</td>\n                </tr>\n                <tr>\n                    <td style=\"background-color:#c5d9f1;font-weight:bold\">Pan Card Number:</td>\n                    <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[24].FieldID)}}</td>\n                </tr>\n                <tr>\n                    <td style=\"background-color:#c5d9f1;font-weight:bold\">Aadhar Card Number:</td>\n                    <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[7].FieldID)}}</td>\n                </tr>\n            </table>\n            <div style=\"width:40%\"><img src=\"http://akdesign.in/dev/images/dummy-male.jpg\" style=\"display: block;margin: auto;width:50%\"></div>\n        </div>\n        <h4>PERSONAL DETAILS</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\";font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Name: As Per Passport</td>\n                <td style=\"background-color:#c5d9f1\">Last Name</td>\n                <td style=\"background-color:#c5d9f1\">First Name</td>\n                <td style=\"background-color:#c5d9f1\">Middle Name</td>\n            </tr>\n            <tr>\n                <td></td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[1].FieldID)}}</td>\n            </tr>\n        </table>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\";font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Date Of Birth</td>\n                <td style=\"background-color:#c5d9f1\">Age</td>\n                <td style=\"background-color:#c5d9f1\">Gender</td>\n                <td style=\"background-color:#c5d9f1\">Place Of Birth</td>\n            </tr>\n            <tr>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[16].FieldID)}}</td>\n                <td >{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[17].FieldID)}}</td>\n                <td >{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[18].FieldID)}}</td>\n                <td >{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[19].FieldID)}}</td>\n            </tr>\n        </table>\n\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr>\n                <td style=\"background-color:#c5d9f1;font-weight:bold\">Address</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[4].FieldID)}}</td>\n            </tr>\n            <tr>\n                <td style=\"background-color:#c5d9f1;font-weight:bold\">Email ID</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[6].FieldID)}}</td>\n            </tr>\n            <tr>\n                <td style=\"background-color:#c5d9f1;font-weight:bold\">Contact No</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[5].FieldID)}}</td>\n            </tr>\n            <tr>\n                <td style=\"background-color:#c5d9f1;font-weight:bold\">Skype ID</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[15].FieldID)}}</td>\n            </tr>\n        </table>\n\n        <h4>EDUCATIONAL QUALIFICATION</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\"font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Education</td>\n                <td style=\"background-color:#c5d9f1\">Degree</td>\n                <td style=\"background-color:#c5d9f1\">Year</td>\n                <td style=\"background-color:#c5d9f1\">Marks</td>\n                <td style=\"background-color:#c5d9f1\">Grade</td>\n                <td style=\"background-color:#c5d9f1\">Board</td>\n            </tr>\n            <tr *ngFor=\"let subsection of Applicant[Form.Sections[2].SectionID]; let subindex = index\">\n                <td>{{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[1].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[6].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[3].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[4].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[2].SectionID, subindex, Form.Sections[2].Fields[5].FieldID)}}</td>\n            </tr>\n            <!-- <tr>\n                <td>Higher Secondary School</td>\n                <td>HSC</td>\n                <td>1998</td>\n                <td>65%</td>\n                <td>1</td>\n                <td>Department of Pre-University Education</td>\n            </tr>\n            <tr>\n                <td>Under Graduation</td>\n                <td>Diploma Mechanical</td>\n                <td>2001</td>\n                <td>66%</td>\n                <td>1</td>\n                <td>Hebich Technical Training Institute, Karnataka</td>\n            </tr>\n            <tr>\n                <td>Post Graduation</td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n                <td></td>\n            </tr> -->\n        </table>\n\n\n        <h4>PASSPORT DETAILS</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\"font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Passport No</td>\n                <td style=\"background-color:#c5d9f1\">Place of Issue</td>\n                <td style=\"background-color:#c5d9f1\">Issue Date</td>\n                <td style=\"background-color:#c5d9f1\">Expiry Date</td>\n                <td style=\"background-color:#c5d9f1\">ECR/ECNR</td>\n            </tr>\n            <tr>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[7].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[20].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[21].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[10].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[0].SectionID, 0, Form.Sections[0].Fields[22].FieldID)}}</td>\n            </tr>\n        </table>\n\n        <h4>SEAMEN BOOK DETAILS</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\"font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Seamen Book No</td>\n                <td style=\"background-color:#c5d9f1\">Place of Issue</td>\n                <td style=\"background-color:#c5d9f1\">Issue Date</td>\n                <td style=\"background-color:#c5d9f1\">Expiry Date</td>\n                <td style=\"background-color:#c5d9f1\">Seamen Book Type</td>\n            </tr>\n            <tr>\n                <td>{{GetFieldValue(Form.Sections[5].SectionID, 0, Form.Sections[5].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[5].SectionID, 0, Form.Sections[5].Fields[1].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[5].SectionID, 0, Form.Sections[5].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[5].SectionID, 0, Form.Sections[5].Fields[3].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[5].SectionID, 0, Form.Sections[5].Fields[4].FieldID)}}</td>\n            </tr>\n        </table>\n\n        <h4>POLICE CLEARANCE</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\"font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Local PCC Issue Date</td>\n                <td style=\"background-color:#c5d9f1\">Passport PCC Issue Date</td>\n            </tr>\n            <tr>\n                <td>{{GetFieldValue(Form.Sections[6].SectionID, 0, Form.Sections[6].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[6].SectionID, 0, Form.Sections[6].Fields[1].FieldID)}}</td>\n            </tr>\n        </table>\n\n        <h4>MEDICAL DETAILS</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\" >\n            <tr style=\"font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Blood Group</td>\n                <td style=\"background-color:#c5d9f1\">Date of Last MEdical Examination</td>\n                <td style=\"background-color:#c5d9f1\">Place of Last MEdical Examination</td>\n                <td style=\"background-color:#c5d9f1\">Valid Until</td>\n            </tr>\n            <tr>\n                <td>{{GetFieldValue(Form.Sections[7].SectionID, 0, Form.Sections[7].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[7].SectionID, 0, Form.Sections[7].Fields[1].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[7].SectionID, 0, Form.Sections[7].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[7].SectionID, 0, Form.Sections[7].Fields[3].FieldID)}}</td>\n            </tr>\n        </table>\n\n        <h4>SAFETY CERTIFICATION:</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\"font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Name</td>\n                <td style=\"background-color:#c5d9f1\">Certification No.</td>\n                <td style=\"background-color:#c5d9f1\">Issue Date</td>\n                <td style=\"background-color:#c5d9f1\">Expiry Date</td>\n                <td style=\"background-color:#c5d9f1\">Issuing Authority</td>\n            </tr>\n            <tr *ngFor=\"let subsection of Applicant[Form.Sections[8].SectionID]; let subindex = index\">\n                <td>{{GetFieldValue(Form.Sections[8].SectionID, subindex, Form.Sections[8].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[8].SectionID, subindex, Form.Sections[8].Fields[1].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[8].SectionID, subindex, Form.Sections[8].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[8].SectionID, subindex, Form.Sections[8].Fields[3].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[8].SectionID, subindex, Form.Sections[8].Fields[4].FieldID)}}</td>\n            </tr>\n            \n        </table>\n\n        <h4>JOB SPECIFIC CERTIFICATIONS:</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\"font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Name</td>\n                <td style=\"background-color:#c5d9f1\">Certificate No.</td>\n                <td style=\"background-color:#c5d9f1\">Issue Date</td>\n                <td style=\"background-color:#c5d9f1\">Expiry Date</td>\n                <td style=\"background-color:#c5d9f1\">Issuing Authority</td>\n            </tr>\n            <tr *ngFor=\"let subsection of Applicant[Form.Sections[9].SectionID]; let subindex = index\">\n                <td>{{GetFieldValue(Form.Sections[9].SectionID, subindex, Form.Sections[9].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[9].SectionID, subindex, Form.Sections[9].Fields[1].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[9].SectionID, subindex, Form.Sections[9].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[9].SectionID, subindex, Form.Sections[9].Fields[3].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[9].SectionID, subindex, Form.Sections[9].Fields[4].FieldID)}}</td>\n            </tr>\n        </table>\n\n        <h4>WORK EXPERIENCE: (Starting with the Most Recent/Current Role)</h4>\n        <table class=\"table table-bordered\" style=\"margin-top:20px\">\n            <tr style=\"font-weight:bold\">\n                <td style=\"background-color:#c5d9f1\">Compay Name</td>\n                <td style=\"background-color:#c5d9f1\">Rig/Installation Name</td>\n                <td style=\"background-color:#c5d9f1\">Rig/Installation Type</td>\n                <td style=\"background-color:#c5d9f1\">Designation</td>\n                <td style=\"background-color:#c5d9f1\">Date From</td>\n                <td style=\"background-color:#c5d9f1\">Date To</td>\n            </tr>\n            <tr *ngFor=\"let subsection of Applicant[Form.Sections[1].SectionID]; let subindex = index\">\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[0].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[1].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[2].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[3].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[6].FieldID)}}</td>\n                <td>{{GetFieldValue(Form.Sections[1].SectionID, subindex, Form.Sections[1].Fields[7].FieldID)}}</td>\n            </tr>\n        </table>\n    </div>\n\n\n\n    <!-- <div *ngFor=\"let section of Form.Sections;let secindex = index\">\n        <ng-container *ngIf=\"!section.CanBeMultiple\">\n            <table>\n                <ng-container *ngFor=\"let field of section.Fields; let fieldindex = index\">\n                    <tr>\n                        <td>\n                            <span *ngIf=\"field.FieldName=='First Name'\">{{GetFieldValue(section.SectionID, 0, field.FieldID)}}</span>\n                            <span *ngIf=\"field.FieldName=='Last Name'\">{{GetFieldValue(section.SectionID, 0, field.FieldID)}}</span>\n                        </td>\n                        <td *ngIf=\"field.FieldName=='Email ID'\">\n                            Email: {{GetFieldValue(section.SectionID, 0, field.FieldID)}}\n                        </td>\n                        <td *ngIf=\"field.FieldName=='Current Post'\">\n                            Job Apllied For: {{GetFieldValue(section.SectionID, 0, field.FieldID)}}\n                        </td>\n                    </tr>\n                    <tr *ngIf=\"field.FieldName=='Address'\">\n\n                        <td colspan=\"3\">Address: {{GetFieldValue(section.SectionID, 0, field.FieldID)}}</td>\n                    </tr>\n                </ng-container>\n            </table>\n        </ng-container>\n    </div> -->\n    <!-- <div *ngFor=\"let section of Form.Sections;let secindex = index\">\n        <ng-container *ngIf=\"section.CanBeMultiple\">\n            <table class=\"table table-bordered\">\n\n                <ng-container *ngFor=\"let field of section.Fields; let fieldindex = index\" class=\"row\">\n                    <div class=\"col-md-4\" style=\"border-bottom:1px solid #ddd;min-height: 89px\">\n                        <tr>\n\n                            <th *ngIf=\"field.isFieldChecked\">{{field.FieldName}}</th>\n\n                        </tr>\n\n                        <tr>\n\n                            <td>{{GetFieldValue(section.SectionID, 0, field.FieldID)}}</td>\n\n                        </tr>\n                    </div>\n                </ng-container>\n            </table>\n        </ng-container>\n    </div> -->\n\n\n    <button class=\"btn btn-primary\" (click)=\"PrintToPdf()\" *ngIf=\"format_1\">Print</button>\n    <button class=\"btn btn-primary\" (click)=\"PrintToPdf_2()\" *ngIf=\"format_2\">Print</button>\n</ng-template>"

/***/ }),

/***/ 499:
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\">\n label,ul{margin-top: 15px;}\n input,select{margin-bottom: 3px;}\n</style>\n<h3>Create Form</h3>\n<label style=\"margin-top: 30px\">\n  Form Title :\n</label>\n<input class=\"form-control form-group\" [(ngModel)]=\"SelectedForm.FormTitle\" >\n<label>\n  Form Type :\n</label>\n<select class=\"form-control\" id=\"type\" name=\"type\" [(ngModel)]=\"SelectedForm.FormType\" (change)=\"OnSelectFormType($event)\" required>\n  <option *ngFor=\"let option of ApplicantType\" [ngValue]=\"option._id\" >{{option.type}}</option>\n</select>\n<br>\n<div class=\"alert alert-danger\" *ngIf=\"Error\">\n    <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\n    {{Error}}\n</div>\n\n<br>\n<div *ngFor=\"let section of SelectedForm.Sections; let sectionindex = index\"\nstyle=\"border-bottom: 1px solid;\">\n    <label>Section Title</label>\n    <input class=\"form-control\"  [(ngModel)]=\"section.SectionName\" [ngModelOptions]=\"{standalone: true}\">\n    <div *ngFor=\"let item of section.Fields; let fieldindex = index;\">\n        <div [ngSwitch]=\"item.FieldType\">\n          <label>{{item.FieldType}}</label>\n          <!-----------------------For Radio Button------------------>\n          <div *ngSwitchCase=\"'Radio'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\n            <ul>\n              <li *ngFor=\"let option of item.options; let optionindex = index\" style=\"margin-bottom: 20px;display: flex;\">\n                <input class=\"form-control\"  [value]=\"option\" (change)=\"OnOptionChange(sectionindex,fieldindex,$event.target.value,optionindex)\">\n                <a style=\"margin-top: 1%;margin-left:1%\" (click)=\"RemoveOption(sectionindex,fieldindex,optionindex)\">X</a>\n              </li>\n            </ul>\n            <a (click)=\"AddOption(sectionindex,fieldindex)\">Add Options</a>\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n          </div>\n          <!-----------------------End Radio Button------------------>\n    \n          <!-----------------------For Checkbox Button------------------>\n          <div *ngSwitchCase=\"'Checkbox'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\n            <ul>\n              <li *ngFor=\"let option of item.options; let optionindex = index\" style=\"margin-bottom: 20px;display: flex;\">\n                <input class=\"form-control\"  [value]=\"option\" (change)=\"OnOptionChange(sectionindex,fieldindex,$event.target.value,optionindex)\">\n                <a style=\"margin-top: 1%;margin-left:1%\" (click)=\"RemoveOption(sectionindex, fieldindex,optionindex)\">X</a>\n              </li>\n            </ul>\n            <a (click)=\"AddOption(sectionindex,fieldindex)\">Add Options</a>\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n          </div>\n          <!-----------------------End Checkbox Button------------------>\n    \n          <!-----------------------For Dropbox Button------------------>\n          <div *ngSwitchCase=\"'Dropdown'\" class=\"dropdown form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\n            <ul>\n              <li *ngFor=\"let option of item.options; let optionindex = index\" style=\"margin-bottom: 20px;display: flex;\">\n                <input class=\"form-control\"  [value]=\"option\" (change)=\"OnOptionChange(sectionindex,fieldindex,$event.target.value,optionindex)\">\n                <a style=\"margin-top:1%;margin-left:1%\" (click)=\"RemoveOption(sectionindex,fieldindex,optionindex)\">X</a>\n              </li>\n            </ul>\n            <a (click)=\"AddOption(sectionindex,fieldindex)\">Add Options</a>\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n          </div>\n          <!----------------------End Dropbox Button------------------>\n    \n          <!-----------------------For Textbox Button------------------>\n          <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n          </div>\n    \n          <!----------------------End Textbox Button------------------>\n    \n          <!-----------------------For TextArea Button------------------>\n          <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [value]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n          </div>\n          <!----------------------End TextArea Button------------------>\n\n          <!-----------------------For Calendar Button------------------>\n          <div *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\n              <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [value]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\">\n              <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n            </div>\n            <!----------------------End Calendar Button------------------>\n\n          <!-----------------------For Country List------------------>\n          <div *ngSwitchCase=\"'Country'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n            <br>\n            <small><em>*Take options from {{item.Table}} Library.</em></small>\n          </div>\n          <!----------------------End Country List------------------>\n\n          <!-----------------------For State List------------------>\n          <div *ngSwitchCase=\"'State'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\n            <select class=\"form-control\" (change)=\"AddParentField(sectionindex,fieldindex,$event.target.value)\">\n              <option selected disabled>Choose one</option>\n            <option *ngFor=\"let x of item.ParentField.FieldList;\" [value]=\"x|json\">{{GetFieldName(x.SectionID,x.FieldID)}}</option>\n          </select>\n          <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n          </div>\n          <!----------------------End State List------------------>\n\n          <!-----------------------For city List------------------>\n          <div *ngSwitchCase=\"'City'\" class=\"form-group\">\n              <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\n              <select class=\"form-control\" (change)=\"AddParentField(sectionindex,fieldindex,$event.target.value)\">\n                <option selected disabled>Choose one</option>\n              <option *ngFor=\"let x of item.ParentField.FieldList\" [value]=\"x|json\">{{GetFieldName(x.SectionID,x.FieldID)}}</option>\n            </select>\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n            </div>\n            <!----------------------End city List------------------>\n\n           <!-----------------------For CompanyType List------------------>\n           <div *ngSwitchCase=\"'Type'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\n            <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n            <br>\n            <small><em>*Take options from {{item.Table}} Library.</em></small>\n          </div>\n          <!----------------------End CompanyType List------------------>\n\n          <!-----------------------For Installation Type List------------------>\n          <div *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\n            <select class=\"form-control\" (change)=\"AddParentField(sectionindex,fieldindex,$event.target.value)\">\n              <option selected disabled>Choose one</option>\n            <option *ngFor=\"let x of item.ParentField.FieldList\" [value]=\"x|json\">{{GetFieldName(x.SectionID,x.FieldID)}}</option>\n          </select>\n          <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n          </div>\n          <!----------------------End Installation Type List------------------>\n\n          <!-----------------------For Designation List------------------>\n          <div *ngSwitchCase=\"'Designation'\" class=\"form-group\">\n            <input class=\"form-control\"  [(ngModel)]=\"item.FieldName\" [ngModelOptions]=\"{standalone: true}\" />\n            <select class=\"form-control\"  (change)=\"AddParentField(sectionindex,fieldindex,$event.target.value)\">\n              <option selected disabled>Choose one</option>\n            <option *ngFor=\"let x of item.ParentField.FieldList\" [value]=\"x|json\">{{GetFieldName(x.SectionID,x.FieldID)}}</option>\n          </select>\n          <a (click)=\"RemoveField(sectionindex,fieldindex)\">Remove Field</a>\n          </div>\n          <!----------------------End Designation List------------------>\n        </div>\n      </div>\n      <br>\n      <table class=\"table-bordered table-condensed table-striped\" style=\"width:80%;border: 1px solid #333;box-shadow: 2px 2px 4px #888;\">\n        <tr>\n          <td colspan=\"2\" style=\"font-weight: 600;padding-left: 20px\">\n            Field Manager\n        </td></tr>\n          <tr>\n            <td style=\"padding-left: 20px\">Control Type</td>\n            <!-- <td>Option Count</td> -->\n            <td></td>\n          </tr>\n          <tr *ngFor=\"let control of controls\">\n            <td style=\"padding-left: 20px\">{{control.Type}}</td>\n            <!-- <td *ngIf=\"!control.isMultipleOption\"></td>\n            <td *ngIf=\"control.isMultipleOption\">\n              <input class=\"form-control\"  type=\"text\" [(ngModel)]=\"control.optionCount\">\n            </td> -->\n\n            <td style=\"padding-left: 20px;\">\n              <a (click)=\"AddField(sectionindex,control)\">Add</a>\n            </td>\n          </tr>\n        </table>\n        <a (click)=\"RemoveSection(sectionindex)\" style=\"line-height: 3\">Remove Section</a>\n        <br>\n        <input class=\"\"  type=\"checkbox\" [(ngModel)]=\"section.CanBeMultiple\">Can be added Multiple Times.\n        <hr>\n</div>\n<div  style=\"margin-top: 20px\">\n<a (click)=\"AddSection()\">Add Section</a>\n<button class=\"btn btn-primary pull-right\" *ngIf=\"TotalSections>0\" (click)=\"OnSave()\" type=\"submit\">Save</button>\n</div>\n<br>\n\n<div class=\"panel panel-danger\" style=\"margin:10px\" *ngIf=\"FormSuccessMessage == -1\">\n    <div class=\"panel-body\">Form couldn\\'t be saved.</div>\n</div>\n\n<div class=\"panel panel-success\"  style=\"margin:10px\"  *ngIf=\"FormSuccessMessage == 1\">\n    <div class=\"panel-body alert alert-success\">Form saved Sucessfully.</div>\n</div>"

/***/ }),

/***/ 500:
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(TemplatesLoaded && FormLoaded); else Loading\">\n    <div class=\"col-md-1\">\n      <nav class=\"side-nav-custom\">\n        <ul>\n          <li *ngFor=\"let item of TemplatesList;let j=index\">\n            <a (click)=\"OnEditTemplate(j)\" style=\"color: #fff\">{{item.TemplateTitle}}</a>\n          </li>\n        </ul>\n        <a (click)=\"OnCreateTemplate()\" style=\"color: #fff\">+ New Template</a>\n      </nav>\n      </div>\n      <ng-container *ngIf=\"createMode\">\n          <div class=\"col-md-6\" style=\"margin-top: 20px\">\n              <select id=\"type\" name=\"type\" [(ngModel)]=\"SelectedForm.FormType\" (change)=\"OnSelectForm($event)\">\n                <option selected disabled>Select Form</option>\n                <option *ngFor=\"let option of FormsList;let j=index\">\n                  {{option.FormTitle}}\n                </option>\n              </select>\n              <label>\n                Template Title:\n              </label>\n              <input type=\"text\" [(ngModel)]=\"TemplateTitle\">\n              <div *ngFor=\"let section of SelectedForm.Sections; let secindex= index\">\n                {{section.SectionName}}\n                <br>\n                <ng-container *ngFor=\"let field of section.Fields;let fieldindex=index\">\n                  <input type=\"checkbox\" [checked]=\"field.isFieldChecked\" (change)=\"ToggleFieldSelection(secindex,fieldindex)\">\n                  <label>{{field.FieldName}}</label>\n                  <br>\n                </ng-container>\n                <hr>\n              </div>\n              <button class=\"btn btn-primary\" (click)=\"OnSaveTemplate()\" *ngIf=\"TotalFieldsChecked>0\">Save Template</button>\n              <br>\n              <div class=\"panel panel-danger\" style=\"margin:10px\" *ngIf=\"TemplateSaved == -1\">\n                <div class=\"panel-body\">Template couldn\\'t be saved.</div>\n              </div>\n            \n              <div class=\"panel panel-success\" style=\"margin:10px\" *ngIf=\"TemplateSaved == 1\">\n                <div class=\"panel-body\">Template saved Sucessfully.</div>\n              </div>\n            </div>\n            \n            <div class=\"col-md-4\" style=\"background-color: #f0f0f0\">\n              <h3>{{TemplateTitle}}</h3>\n              <div *ngFor=\"let section of SelectedForm.Sections;let secindex= index\">\n                <ng-container *ngIf=\"CheckedFieldCount(secindex) > 0\">\n                  <h4>\n                    {{section.SectionName}}\n                  </h4>\n                  <br>\n                </ng-container>\n                <ng-container *ngFor=\"let field of section.Fields;let fieldindex=index\">\n                  <label *ngIf=\"field.isFieldChecked\">{{field.FieldName}}</label>\n                  <br>\n                </ng-container>\n                <hr>\n              </div>\n            </div>\n      </ng-container>      \n</ng-container>\n<ng-template #Loading>\n  <div id=\"loading\" class=\"overlay\">\n    <div class=\"loader_div\">\n        <img src=\"loader.gif\"/><br><br>\n        <b class=\"loadingtext\">Loading...</b>\n    </div>\n</div>\n</ng-template>\n"

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

module.exports = "<style>\nul{margin-right: 4%;}\nul li a{color: #fff;}\nul li a:visited{background: #0067ad;color: #fff}\n\n\n</style>\n\n<div id=\"wrapper\">\n    <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" style=\"margin-bottom: 0;background-color: #01aef0;border: none\">\n         <img src=\"https://www.ocs.services//images/Oilfield_Consolidated_Services.jpg\" style=\"border-left: 11px solid #fff;\n           border-right: 18px solid #fff;\n           border-top: 3px solid #fff;\n           border-bottom: 3px solid #fff;\n           height: 38px;\n           margin-top: 6px;\n           margin-left: 25px;\"> \n        <ul class=\"nav navbar-nav navbar-right\">\n            <!-- <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\n                    <a [routerLink]=\"['createform']\">Create Form</a>\n                </li> -->\n            <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\n                <a [routerLink]=\"['forms']\">View Form</a>\n            </li>\n            <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\n                <a [routerLink]=\"['applicants']\">Applicants</a>\n            </li>\n            <!-- <li routerLinkActive=\"active\" *ngIf=\"UserType == 'Admin'\">\n                <a [routerLink]=\"['templates']\">Templates</a>\n            </li> -->\n            <li routerLinkActive=\"active\" *ngIf=\"UserType != 'Admin'\">\n                <a [routerLink]=\"['profile']\">Profile</a>\n            </li>\n            <li>\n                <a style=\"cursor: pointer\" (click)=\"OnLogout()\">Logout</a>\n            </li>\n        </ul>\n    </nav>\n    <div id=\"page-wrapper\" style=\"margin-left:  100px\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

module.exports = "    <h3 style=\"margin-bottom: 30px\">{{SelectedForm.FormTitle}}</h3>\n    <div *ngFor=\"let section of SelectedForm.Sections;\">\n       <h4>{{section.SectionName}}</h4> \n            <div *ngFor=\"let item of section.Fields;\">\n                    <div [ngSwitch]=\"item.FieldType\">\n                        <label>\n                            {{item.FieldName}}\n                        </label>\n                       <!-----------------------For Radio Button------------------>\n                       <div *ngSwitchCase=\"'Radio'\" class=\"form-group\">\n                         <div *ngFor=\"let option of item.options; let j = index\" >\n                             <!-- <label class=\"radio-inline\">{{option}}</label> -->\n                             {{option}}\n                             <input class=\"\"  type=\"radio\" [value]=\"option\">\n                            </div>\n                       </div>\n                       <!-----------------------End Radio Button------------------>\n                 \n                       <!-----------------------For Checkbox Button------------------>\n                       <div *ngSwitchCase=\"'Checkbox'\" class=\"\">\n                           <div *ngFor=\"let option of item.options; let j = index\">\n                             {{option}}\n                               <input  class=\"\" type=\"checkbox\">\n                           </div>\n                       </div>\n                       <!-----------------------End Checkbox Button------------------>\n                 \n                       <!-----------------------For Textbox Button------------------>\n                       <div *ngSwitchCase=\"'Textbox'\" class=\"form-group\">\n                           <input class=\"form-control\" type=\"text\"/>\n                       </div>\n                       <!----------------------End Textbox Button------------------>\n                 \n                       <!-----------------------For Paragraph Button------------------>\n                       <div *ngSwitchCase=\"'Textarea'\" class=\"form-group\">\n                           <textarea  class=\"form-control\" ></textarea>\n                       </div>\n                       <!----------------------End Paragraph Button------------------>\n                 \n                       <!-----------------------For Dropbox Button------------------>\n                       <div *ngSwitchCase=\"'Dropdown'\" class=\"form-group\">\n                           <select  class=\"form-control\" >\n                               <option selected disabled>Choose one</option>\n                             <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option>\n                           </select>\n                       </div>\n                        <!----------------------End Dropbox Button------------------>\n\n                        <!-----------------------For Calendar Button------------------>\n                       <div *ngSwitchCase=\"'Calendar'\" class=\"form-group\">\n                            <input  class=\"form-control\"  type=\"date\"/>\n                        </div>\n                         <!----------------------End Calendar Button------------------>\n\n                         <!-----------------------For Country Dropbox Button------------------>\n                       <div *ngSwitchCase=\"'Country'\" class=\"form-group\">\n                        <select  class=\"form-control\" >\n                            <option selected disabled>Choose one</option>\n                            Countries\n                          <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\n                        </select>\n                    </div>\n                     <!----------------------End Country Dropbox Button------------------>\n\n                     <!-----------------------For State Dropbox Button------------------>\n                     <div *ngSwitchCase=\"'State'\" class=\"form-group\">\n                            <select class=\"form-control\" >\n                                <option selected disabled>Choose one</option>\n                                States in selected country\n                              <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\n                            </select>\n                        </div>\n                         <!----------------------End State Dropbox Button------------------>\n\n                         <!-----------------------For City Dropbox Button------------------>\n                     <div *ngSwitchCase=\"'City'\" class=\"form-group\">\n                            <select class=\"form-control\" >\n                                <option selected disabled>Choose one</option>\n                                City in selected country\n                              <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\n                            </select>\n                        </div>\n                         <!----------------------End City Dropbox Button------------------>\n\n                         <!-----------------------For CustomerType Dropbox Button------------------>\n                       <div *ngSwitchCase=\"'Type'\" class=\"form-group\">\n                            <select class=\"form-control\" >\n                                <option selected disabled>Choose one</option>\n                            Customer Type\n                              <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\n                            </select>\n                        </div>\n                         <!----------------------End CustomerType Dropbox Button------------------>\n    \n                         <!-----------------------For Installation Type Dropbox Button------------------>\n                         <div *ngSwitchCase=\"'InstallationType'\" class=\"form-group\">\n                                <select class=\"form-control\" >\n                                    <option selected disabled>Choose one</option>\n                                    Installation Types in the selected Customer Type\n                                  <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\n                                </select>\n                            </div>\n                             <!----------------------End Installation Type Dropbox Button------------------>\n                              <!-----------------------For Designation Dropbox Button------------------>\n                         <div *ngSwitchCase=\"'Designation'\" class=\"form-group\">\n                                <select class=\"form-control\" >\n                                    <option selected disabled>Choose one</option>\n                                    Designation in the selected Installation Type\n                                  <!-- <option *ngFor=\"let option of item.options;let j=index\">{{option}}</option> -->\n                                </select>\n                            </div>\n                             <!----------------------End Designation Dropbox Button------------------>\n                     </div>\n                   </div><hr>\n    </div>"

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

module.exports = "\n<ng-container *ngIf=\"!isFormsLoaded; else FormLoaded\">\n    <div id=\"loading\" class=\"overlay\">\n        <div class=\"loader_div\">\n            <img src=\"loader.gif\"/><br><br>\n            <b class=\"loadingtext\">Loading...</b>\n        </div>\n    </div>\n</ng-container>\n\n <ng-template #FormLoaded>\n  <div class=\"row\">\n    <div class=\"col-md-1\">\n      <nav class=\"side-nav-custom\">\n\n        <div class=\"row\">\n            <div class=\"\">\n              <h4 style=\"color: #fff;margin-bottom: 25px;font-weight:600\">List of Forms</h4>\n              <ul>\n                <li *ngFor=\"let option of FormsList; let j=index\"><a (click) =\"OnSelectForm(j)\" style=\"color: #fff\">{{option.FormTitle}}</a></li>\n              </ul>\n              <a (click)=\"CreateNewForm()\" style=\"color: #fff\">+ New Form</a>\n            </div>\n        \n            \n        </div>\n      </nav>\n    </div>\n    <div class=\"col-md-11\">\n      <div class=\"row\">\n\n        <div class=\"col-md-6\" *ngIf=\"isSelected\" style=\"padding: 0 5%;background-color: #eaeaea;overflow: scroll;height: 100vh\">\n          <app-create-form [SelectedForm]=\"SelectedForm\"  (FormSaved)=\"OnSaveForm($event)\"></app-create-form>\n        </div>\n        \n        <div class=\"col-md-6\" *ngIf=\"isSelected\" style=\"background-color: #f4f4f4;padding: 0 5%;overflow: scroll;height: 100vh\">\n          <app-preview-form [SelectedForm]=\"SelectedForm\"></app-preview-form>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color: #e2edff;width: 60%;margin: auto; padding: 5% 0 5% 0;\">\n<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <span class=\"help-block\" >{{message}}</span>\n      <form (ngSubmit)=\"OnSignIn(f)\" #f=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"userid\">Phone No / E-Mail</label>\n            <input class=\"form-control\" type=\"userid\" \n                     id=\"userid\" \n                     class=\"form-control\" \n                     ngModel \n                     name=\"userid\"\n                     required\n                     #userid = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\n            <span class=\"help-block\" *ngIf=\"!userid.valid && userid.touched\">Phone No. is invalid</span>\n           \n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" ngModel required #password = \"ngModel\">\n            <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\" >Password is required</span>\n  </div>\n  <button class=\"btn btn-primary\" [disabled]=\"!f.valid && f.touched\" type=\"submit\">Sign In</button>\n  <button class=\"btn btn-default\" (click) = \"GoToSignup()\" type=\"button\">New User? Sign up</button>\n  </form>\n  </div>\n</div>\n<!--Email Pattern check pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"-->"

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <span class=\"help-block\" >{{message}}</span>\n        <form (ngSubmit)=\"OnSignUp(f)\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"userid\">Phone No</label>\n              <input type=\"userid\" \n                       id=\"userid\" \n                       class=\"form-control\" \n                       name=\"userid\"\n                       required\n                       [(ngModel)]=\"phoneno\"\n                       #userid = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\n              <span class=\"help-block\" *ngIf=\"!userid.valid && userid.touched\">Phone No. is invalid</span>\n            </div>\n\n            <div class=\"form-group\" *ngIf=\"isSMSSent\">\n                <label for=\"otp\">OTP</label>\n                  <input type=\"text\" \n                           id=\"otp\" \n                           class=\"form-control\" \n                           name=\"otp\"\n                           required\n                           [(ngModel)]=\"otptext\"\n                           #otp = \"ngModel\"> <!-- Just like ngForm ngModel also gives information about control-->\n                  <span class=\"help-block\" *ngIf=\"!otp.valid && otp.touched\">OTP is invalid</span>\n                </div>\n            \n\n              <button class=\"btn btn-warning\" *ngIf=\"!isSMSSent\" (click)=\"SendOTP()\" type='button'>Continue</button>\n              <button class=\"btn btn-warning\" *ngIf=\"isSMSSent && !isPhoneVerified\" (click)=\"VerifyOTP()\" type='button'>Verify OTP</button>\n            \n            <div class=\"form-group\" *ngIf=\"isPhoneVerified\">\n              <label for=\"type\">Type\n                <select id=\"type\" name=\"type\" ngModel required>\n                    <option selected disabled>Choose one</option>\n                    <option *ngFor=\"let option of ApplicantType;let j=index\" [ngValue]=\"option._id\">{{option.type}}</option>\n                </select></label>\n              <label for=\"password\">Password</label>\n              <input type=\"password\" minlength=\"6\" id=\"password\" name=\"password\" class=\"form-control\" ngModel required #password = \"ngModel\">\n              <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\" >Password is invalid</span>\n              <span class=\"help-block\" *ngIf=\"password.errors?.minlength && password.touched\">Password must be atleast 6 characters long</span>\n            </div>\n            <button class=\"btn btn-primary\" *ngIf=\"isPhoneVerified\" [disabled]=\"!f.valid && f.touched\" type=\"submit\">Sign Up</button>\n            <button class=\"btn btn-default\" (click)=\"OnLoginPage()\" type='button'>Already have an account? Log in</button>\n          </form>\n    </div>\n</div>\n  <!-- pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" -->"

/***/ }),

/***/ 74:
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

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(300);


/***/ })

},[792]);
//# sourceMappingURL=main.bundle.map