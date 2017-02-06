webpackJsonp([0,3],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TaskDataService__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTaskComponent = (function () {
    function AddTaskComponent() {
        this.addTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* EventEmitter */]();
    }
    AddTaskComponent.prototype.onSubmit = function (input) {
        if (input.title.trim() != '')
            this.addTask.emit({ title: input.title, status: __WEBPACK_IMPORTED_MODULE_1__TaskDataService__["b" /* State */].New });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], AddTaskComponent.prototype, "addTask", void 0);
    AddTaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'td-add-task',
            templateUrl: './addtask.component.html',
            styleUrls: ['./addtask.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AddTaskComponent);
    return AddTaskComponent;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/app.addtask.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TaskDataService__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskComponent = (function () {
    function TaskComponent() {
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* EventEmitter */]();
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.task.rename = false;
    };
    TaskComponent.prototype.toChange = function () {
        this.change.emit(this.task);
    };
    TaskComponent.prototype.toDelete = function () {
        this.delete.emit(this.task);
    };
    TaskComponent.prototype.toSubmit = function (submitType) {
        switch (submitType) {
            case 'save':
                this.onRename();
                this.toChange();
                break;
            case 'cancel':
                this.task.title = this.tempTitle;
                this.onRename();
                break;
            case 'delete':
                this.toDelete();
                break;
        }
    };
    TaskComponent.prototype.onChecked = function (checked) {
        this.task.status = checked ? __WEBPACK_IMPORTED_MODULE_1__TaskDataService__["b" /* State */].Done : __WEBPACK_IMPORTED_MODULE_1__TaskDataService__["b" /* State */].New;
        this.toChange();
    };
    TaskComponent.prototype.onRename = function () {
        this.tempTitle = this.task.title;
        if (this.task.title == '')
            this.toDelete();
        this.task.rename = !this.task.rename;
    };
    TaskComponent.prototype.rename = function (text) {
        this.task.title = text;
        this.toChange();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "change", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "delete", void 0);
    TaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'td-task',
            templateUrl: './task.component.html',
            styleUrls: ['./task.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TaskComponent);
    return TaskComponent;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/app.task.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TaskDataService__ = __webpack_require__(55);
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
    function AppComponent(taskService) {
        this.taskService = taskService;
        this.name = 'Todo list';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.taskList = this.taskService.getTasks();
    };
    AppComponent.prototype.onChange = function (task) {
        this.taskService.saveTask(task);
    };
    AppComponent.prototype.onDelete = function (task) {
        this.taskService.deleteTask(task);
    };
    AppComponent.prototype.onTaskAdded = function (task) {
        this.taskService.addTask(task);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'todo-list',
            templateUrl: './todolist.component.html',
            styleUrls: ['./todolist.component.css']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__TaskDataService__["a" /* TaskDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__TaskDataService__["a" /* TaskDataService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/app.component.js.map

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 254;


/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(207);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/main.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['form[_ngcontent-%COMP%]{\n    width: 400px;\n    margin: 0 auto;\n}\nlabel[_ngcontent-%COMP%]{\n    font-size: 20px;\n    font-weight: bold;\n    color: cornflowerblue;\n}\ninput[_ngcontent-%COMP%]{\n  border:2px cornflowerblue solid;\n  height:20px;\n  font-size: 12px;\n  min-width: 200px;\n  border-radius: 20px;\n  padding-left: 10px;    \n  font-family: "Comic Sans MS", "Comic Sans", cursive;\n}\ninput[_ngcontent-%COMP%]:focus{\n    outline: 0;\n}\nbutton[_ngcontent-%COMP%]{\n    width: 30px;\n    height: 30px;\n    color: white;\n    font-size: 11px;\n    background-color: cornflowerblue; \n    border-radius: 15px;\n    padding: 0;\n    margin: 4px;\n}\nbutton[_ngcontent-%COMP%]:focus{\n    outline: 0;\n}'];
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/addtask.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_addtask_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addtask_component_css_shim_ngstyle__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gendir_node_modules_angular_forms_src_directives_ng_form_ngfactory__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_element_ref__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms_src_directives_control_value_accessor__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms_src_directives_ng_model__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms_src_directives_ng_control__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_forms_src_directives_ng_control_status__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms_src_directives_ng_form__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms_src_directives_control_container__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_AddTaskComponent; });
/* unused harmony export AddTaskComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_AddTaskComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};




















var Wrapper_AddTaskComponent = (function () {
    function Wrapper_AddTaskComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_addtask_component__["a" /* AddTaskComponent */]();
    }
    Wrapper_AddTaskComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AddTaskComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_AddTaskComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_AddTaskComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AddTaskComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AddTaskComponent.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.addTask.subscribe(_eventHandler.bind(view, 'addTask')));
        }
    };
    return Wrapper_AddTaskComponent;
}());
var renderType_AddTaskComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AddTaskComponent_Host0 = (function (_super) {
    __extends(View_AddTaskComponent_Host0, _super);
    function View_AddTaskComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AddTaskComponent_Host0, renderType_AddTaskComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AddTaskComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'td-add-task', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AddTaskComponent0(this.viewUtils, this, 0, this._el_0);
        this._AddTaskComponent_0_3 = new Wrapper_AddTaskComponent();
        this.compView_0.create(this._AddTaskComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._AddTaskComponent_0_3.context);
    };
    View_AddTaskComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_addtask_component__["a" /* AddTaskComponent */]) && (0 === requestNodeIndex))) {
            return this._AddTaskComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AddTaskComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AddTaskComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AddTaskComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._AddTaskComponent_0_3.ngOnDestroy();
    };
    View_AddTaskComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AddTaskComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AddTaskComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('td-add-task', View_AddTaskComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_addtask_component__["a" /* AddTaskComponent */]);
var styles_AddTaskComponent = [__WEBPACK_IMPORTED_MODULE_7__addtask_component_css_shim_ngstyle__["a" /* styles */]];
var renderType_AddTaskComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AddTaskComponent, {});
var View_AddTaskComponent0 = (function (_super) {
    __extends(View_AddTaskComponent0, _super);
    function View_AddTaskComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AddTaskComponent0, renderType_AddTaskComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AddTaskComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'form', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._NgForm_0_3 = new __WEBPACK_IMPORTED_MODULE_8__gendir_node_modules_angular_forms_src_directives_ng_form_ngfactory__["a" /* Wrapper_NgForm */](null, null);
        this._ControlContainer_0_4 = this._NgForm_0_3.context;
        this._NgControlStatusGroup_0_5 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["a" /* Wrapper_NgControlStatusGroup */](this._ControlContainer_0_4);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'label', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'for', 'title'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'New task: ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'input', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](8, 'class', 'taskInput', 'name', 'title', 'ngModel', '', 'type', 'text'), null);
        this._DefaultValueAccessor_5_3 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_forms_src_directives_default_value_accessor_ngfactory__["a" /* Wrapper_DefaultValueAccessor */](this.renderer, new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_5));
        this._NG_VALUE_ACCESSOR_5_4 = [this._DefaultValueAccessor_5_3.context];
        this._NgModel_5_5 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_forms_src_directives_ng_model_ngfactory__["a" /* Wrapper_NgModel */](this._ControlContainer_0_4, null, null, this._NG_VALUE_ACCESSOR_5_4);
        this._NgControl_5_6 = this._NgModel_5_5.context;
        this._NgControlStatus_5_7 = new __WEBPACK_IMPORTED_MODULE_9__gendir_node_modules_angular_forms_src_directives_ng_control_status_ngfactory__["b" /* Wrapper_NgControlStatus */](this._NgControl_5_6);
        this._text_6 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'button', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'type', 'submit'), null);
        this._text_8 = this.renderer.createText(this._el_7, 'Add', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray8"](6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_0));
        this._NgForm_0_3.subscribe(this, this.eventHandler(this.handleEvent_0), true);
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_5, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_5));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._text_9
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    };
    View_AddTaskComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_13__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */]) && (5 === requestNodeIndex))) {
            return this._DefaultValueAccessor_5_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_forms_src_directives_control_value_accessor__["a" /* NG_VALUE_ACCESSOR */]) && (5 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_5_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_15__angular_forms_src_directives_ng_model__["a" /* NgModel */]) && (5 === requestNodeIndex))) {
            return this._NgModel_5_5.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_forms_src_directives_ng_control__["a" /* NgControl */]) && (5 === requestNodeIndex))) {
            return this._NgControl_5_6;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */]) && (5 === requestNodeIndex))) {
            return this._NgControlStatus_5_7.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_18__angular_forms_src_directives_ng_form__["a" /* NgForm */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._NgForm_0_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_19__angular_forms_src_directives_control_container__["a" /* ControlContainer */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._ControlContainer_0_4;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_17__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._NgControlStatusGroup_0_5.context;
        }
        return notFoundResult;
    };
    View_AddTaskComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._NgForm_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._NgControlStatusGroup_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this._DefaultValueAccessor_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_5_1_0 = 'title';
        this._NgModel_5_5.check_name(currVal_5_1_0, throwOnChange, false);
        var currVal_5_1_1 = '';
        this._NgModel_5_5.check_model(currVal_5_1_1, throwOnChange, false);
        this._NgModel_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatus_5_7.ngDoCheck(this, this._el_5, throwOnChange);
        this._NgControlStatusGroup_0_5.checkHost(this, this, this._el_0, throwOnChange);
        this._NgControlStatus_5_7.checkHost(this, this, this._el_5, throwOnChange);
    };
    View_AddTaskComponent0.prototype.destroyInternal = function () {
        this._NgModel_5_5.ngOnDestroy();
        this._NgForm_0_3.ngOnDestroy();
    };
    View_AddTaskComponent0.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_0_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            var pd_sub_0 = (this.context.onSubmit(this._NgForm_0_3.context.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_AddTaskComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_5_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AddTaskComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/app.addtask.component.ngfactory.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_TaskDataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todolist_component_css_shim_ngstyle__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_app_task_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_task_component_ngfactory__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_app_addtask_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_addtask_component_ngfactory__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common_src_directives_ng_for__ = __webpack_require__(115);
/* unused harmony export Wrapper_AppComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/* unused harmony export View_AppComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



















var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */](p0);
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'todo-list', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__app_TaskDataService__["a" /* TaskDataService */], this.parentIndex));
        this.compView_0.create(this._AppComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AppComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('todo-list', View_AppComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]);
var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_8__todolist_component_css_shim_ngstyle__["a" /* styles */]];
var View_AppComponent1 = (function (_super) {
    __extends(View_AppComponent1, _super);
    function View_AppComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent1, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'td-task', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_10__app_task_component_ngfactory__["a" /* View_TaskComponent0 */](this.viewUtils, this, 0, this._el_0);
        this._TaskComponent_0_3 = new __WEBPACK_IMPORTED_MODULE_10__app_task_component_ngfactory__["b" /* Wrapper_TaskComponent */]();
        this._text_1 = this.renderer.createText(null, '   \n  ', null);
        this.compView_0.create(this._TaskComponent_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'change', null, 'delete', null), this.eventHandler(this.handleEvent_0));
        this._TaskComponent_0_3.subscribe(this, this.eventHandler(this.handleEvent_0), true, true);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_9__app_app_task_component__["a" /* TaskComponent */]) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._TaskComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit;
        this._TaskComponent_0_3.check_task(currVal_0_0_0, throwOnChange, false);
        this._TaskComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent1.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._TaskComponent_0_3.ngOnDestroy();
    };
    View_AppComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.parentView.context.onChange($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'delete')) {
            var pd_sub_1 = (this.parentView.context.onDelete($event) !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    return View_AppComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_AppComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_19 = __WEBPACK_IMPORTED_MODULE_15__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'hr', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_5 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'td-add-task', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this.compView_5 = new __WEBPACK_IMPORTED_MODULE_13__app_addtask_component_ngfactory__["a" /* View_AddTaskComponent0 */](this.viewUtils, this, 5, this._el_5);
        this._AddTaskComponent_5_3 = new __WEBPACK_IMPORTED_MODULE_13__app_addtask_component_ngfactory__["b" /* Wrapper_AddTaskComponent */]();
        this.compView_5.create(this._AddTaskComponent_5_3.context);
        this._text_6 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_7 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'hr', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, '\n  ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_11 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_view_container__["a" /* ViewContainer */](11, 9, this, this._anchor_11);
        this._TemplateRef_11_5 = new __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 11, this._anchor_11);
        this._NgFor_11_6 = new __WEBPACK_IMPORTED_MODULE_14__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_11.vcRef, this._TemplateRef_11_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_17__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.ref);
        this._text_12 = this.renderer.createText(this._el_9, '\n', null);
        this._text_13 = this.renderer.createText(parentRenderNode, '  ', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_5, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'addTask', null), this.eventHandler(this.handleEvent_5));
        this._AddTaskComponent_5_3.subscribe(this, this.eventHandler(this.handleEvent_5), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._text_13
        ]), [disposable_0]);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__app_app_addtask_component__["a" /* AddTaskComponent */]) && (5 === requestNodeIndex))) {
            return this._AddTaskComponent_5_3.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_18__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AddTaskComponent_5_3.ngDoCheck(this, this._el_5, throwOnChange);
        var currVal_11_0_0 = this.context.taskList;
        this._NgFor_11_6.check_ngForOf(currVal_11_0_0, throwOnChange, false);
        this._NgFor_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        var currVal_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.name, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_19, currVal_19)) {
            this.renderer.setText(this._text_1, currVal_19);
            this._expr_19 = currVal_19;
        }
        this.compView_5.internalDetectChanges(throwOnChange);
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_11.destroyNestedViews();
        this.compView_5.destroy();
        this._AddTaskComponent_5_3.ngOnDestroy();
    };
    View_AppComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 11)) {
            return new View_AppComponent1(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        return null;
    };
    View_AppComponent0.prototype.handleEvent_5 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'addTask')) {
            var pd_sub_0 = (this.context.onTaskAdded($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_AppComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/app.component.ngfactory.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_src_localization__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core_src_application_init__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_testability_testability__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_ref__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_compiler__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_src_dom_events_hammer_gestures__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_event_manager__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_shared_styles_host__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_dom_renderer__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_queue__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_view_utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_src_browser_title__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_TaskDataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_component_ngfactory__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_core_src_i18n_tokens__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_core_src_application_tokens__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_src_dom_events_dom_events__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_src_dom_events_key_events__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_core_src_zone_ng_zone__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_src_dom_debug_ng_probe__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_core_src_console__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_core_src_error_handler__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_platform_browser_src_dom_dom_tokens__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_animation_driver__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_core_src_render_api__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_core_src_security__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [__WEBPACK_IMPORTED_MODULE_22__app_component_ngfactory__["a" /* AppComponentNgFactory */]], [__WEBPACK_IMPORTED_MODULE_22__app_component_ngfactory__["a" /* AppComponentNgFactory */]]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_6", {
        get: function () {
            if ((this.__LOCALE_ID_6 == null)) {
                (this.__LOCALE_ID_6 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* _localeFactory */](this.parent.get(__WEBPACK_IMPORTED_MODULE_23__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */], null)));
            }
            return this.__LOCALE_ID_6;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_7", {
        get: function () {
            if ((this.__NgLocalization_7 == null)) {
                (this.__NgLocalization_7 = new __WEBPACK_IMPORTED_MODULE_7__angular_common_src_localization__["a" /* NgLocaleLocalization */](this._LOCALE_ID_6));
            }
            return this.__NgLocalization_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_12", {
        get: function () {
            if ((this.__ApplicationRef_12 == null)) {
                (this.__ApplicationRef_12 = this._ApplicationRef__11);
            }
            return this.__ApplicationRef_12;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_13", {
        get: function () {
            if ((this.__Compiler_13 == null)) {
                (this.__Compiler_13 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_compiler__["a" /* Compiler */]());
            }
            return this.__Compiler_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_14", {
        get: function () {
            if ((this.__APP_ID_14 == null)) {
                (this.__APP_ID_14 = __WEBPACK_IMPORTED_MODULE_24__angular_core_src_application_tokens__["a" /* _appIdRandomProviderFactory */]());
            }
            return this.__APP_ID_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_15", {
        get: function () {
            if ((this.__DOCUMENT_15 == null)) {
                (this.__DOCUMENT_15 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["a" /* _document */]());
            }
            return this.__DOCUMENT_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_16", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_16 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_16 = new __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_src_dom_events_hammer_gestures__["a" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_17", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_17 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_17 = [
                    new __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_src_dom_events_dom_events__["a" /* DomEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_src_dom_events_key_events__["a" /* KeyEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_src_dom_events_hammer_gestures__["b" /* HammerGesturesPlugin */](this._HAMMER_GESTURE_CONFIG_16)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_18", {
        get: function () {
            if ((this.__EventManager_18 == null)) {
                (this.__EventManager_18 = new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */](this._EVENT_MANAGER_PLUGINS_17, this.parent.get(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__EventManager_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_19", {
        get: function () {
            if ((this.__DomSharedStylesHost_19 == null)) {
                (this.__DomSharedStylesHost_19 = new __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */](this._DOCUMENT_15));
            }
            return this.__DomSharedStylesHost_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_20", {
        get: function () {
            if ((this.__AnimationDriver_20 == null)) {
                (this.__AnimationDriver_20 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["b" /* _resolveDefaultAnimationDriver */]());
            }
            return this.__AnimationDriver_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_21", {
        get: function () {
            if ((this.__DomRootRenderer_21 == null)) {
                (this.__DomRootRenderer_21 = new __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_dom_renderer__["a" /* DomRootRenderer_ */](this._DOCUMENT_15, this._EventManager_18, this._DomSharedStylesHost_19, this._AnimationDriver_20, this._APP_ID_14));
            }
            return this.__DomRootRenderer_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_22", {
        get: function () {
            if ((this.__RootRenderer_22 == null)) {
                (this.__RootRenderer_22 = __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_src_dom_debug_ng_probe__["a" /* _createConditionalRootRenderer */](this._DomRootRenderer_21, this.parent.get(__WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_src_dom_debug_ng_probe__["b" /* NgProbeToken */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_ref__["a" /* NgProbeToken */], null)));
            }
            return this.__RootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_23", {
        get: function () {
            if ((this.__DomSanitizer_23 == null)) {
                (this.__DomSanitizer_23 = new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_security_dom_sanitization_service__["a" /* DomSanitizerImpl */]());
            }
            return this.__DomSanitizer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_24", {
        get: function () {
            if ((this.__Sanitizer_24 == null)) {
                (this.__Sanitizer_24 = this._DomSanitizer_23);
            }
            return this.__Sanitizer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_25", {
        get: function () {
            if ((this.__AnimationQueue_25 == null)) {
                (this.__AnimationQueue_25 = new __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */](this.parent.get(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__AnimationQueue_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_26", {
        get: function () {
            if ((this.__ViewUtils_26 == null)) {
                (this.__ViewUtils_26 = new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_view_utils__["ViewUtils"](this._RootRenderer_22, this._Sanitizer_24, this._AnimationQueue_25));
            }
            return this.__ViewUtils_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_27", {
        get: function () {
            if ((this.__IterableDiffers_27 == null)) {
                (this.__IterableDiffers_27 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["b" /* _iterableDiffersFactory */]());
            }
            return this.__IterableDiffers_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_28", {
        get: function () {
            if ((this.__KeyValueDiffers_28 == null)) {
                (this.__KeyValueDiffers_28 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["c" /* _keyValueDiffersFactory */]());
            }
            return this.__KeyValueDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_29", {
        get: function () {
            if ((this.__SharedStylesHost_29 == null)) {
                (this.__SharedStylesHost_29 = this._DomSharedStylesHost_19);
            }
            return this.__SharedStylesHost_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_30", {
        get: function () {
            if ((this.__Title_30 == null)) {
                (this.__Title_30 = new __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_src_browser_title__["a" /* Title */]());
            }
            return this.__Title_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_31", {
        get: function () {
            if ((this.__RadioControlRegistry_31 == null)) {
                (this.__RadioControlRegistry_31 = new __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_radio_control_value_accessor__["a" /* RadioControlRegistry */]());
            }
            return this.__RadioControlRegistry_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_TaskDataService_32", {
        get: function () {
            if ((this.__TaskDataService_32 == null)) {
                (this.__TaskDataService_32 = new __WEBPACK_IMPORTED_MODULE_21__app_TaskDataService__["a" /* TaskDataService */]());
            }
            return this.__TaskDataService_32;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._ApplicationModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["d" /* ApplicationModule */]();
        this._BrowserModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["c" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["c" /* BrowserModule */], null));
        this._InternalFormsSharedModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["a" /* InternalFormsSharedModule */]();
        this._FormsModule_4 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */]();
        this._AppModule_5 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        this._ErrorHandler_8 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* errorHandler */]();
        this._ApplicationInitStatus_9 = new __WEBPACK_IMPORTED_MODULE_8__angular_core_src_application_init__["a" /* ApplicationInitStatus */](this.parent.get(__WEBPACK_IMPORTED_MODULE_8__angular_core_src_application_init__["b" /* APP_INITIALIZER */], null));
        this._Testability_10 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_testability_testability__["a" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_zone_ng_zone__["a" /* NgZone */]));
        this._ApplicationRef__11 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_ref__["b" /* ApplicationRef_ */](this.parent.get(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_zone_ng_zone__["a" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_29__angular_core_src_console__["a" /* Console */]), this, this._ErrorHandler_8, this, this._ApplicationInitStatus_9, this.parent.get(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_testability_testability__["b" /* TestabilityRegistry */], null), this._Testability_10);
        return this._AppModule_5;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["d" /* ApplicationModule */])) {
            return this._ApplicationModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["c" /* BrowserModule */])) {
            return this._BrowserModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["a" /* InternalFormsSharedModule */])) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */])) {
            return this._FormsModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])) {
            return this._LOCALE_ID_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_30__angular_core_src_error_handler__["a" /* ErrorHandler */])) {
            return this._ErrorHandler_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_core_src_application_init__["a" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_core_src_testability_testability__["a" /* Testability */])) {
            return this._Testability_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_ref__["b" /* ApplicationRef_ */])) {
            return this._ApplicationRef__11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_application_ref__["c" /* ApplicationRef */])) {
            return this._ApplicationRef_12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_compiler__["a" /* Compiler */])) {
            return this._Compiler_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__angular_core_src_application_tokens__["b" /* APP_ID */])) {
            return this._APP_ID_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_31__angular_platform_browser_src_dom_dom_tokens__["a" /* DOCUMENT */])) {
            return this._DOCUMENT_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_src_dom_events_hammer_gestures__["c" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_event_manager__["b" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */])) {
            return this._EventManager_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */])) {
            return this._DomSharedStylesHost_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_animation_driver__["a" /* AnimationDriver */])) {
            return this._AnimationDriver_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_dom_renderer__["b" /* DomRootRenderer */])) {
            return this._DomRootRenderer_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_33__angular_core_src_render_api__["a" /* RootRenderer */])) {
            return this._RootRenderer_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizer */])) {
            return this._DomSanitizer_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_34__angular_core_src_security__["a" /* Sanitizer */])) {
            return this._Sanitizer_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */])) {
            return this._AnimationQueue_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__angular_core_src_linker_view_utils__["ViewUtils"])) {
            return this._ViewUtils_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_35__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */])) {
            return this._IterableDiffers_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_shared_styles_host__["b" /* SharedStylesHost */])) {
            return this._SharedStylesHost_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__angular_platform_browser_src_browser_title__["a" /* Title */])) {
            return this._Title_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__angular_forms_src_directives_radio_control_value_accessor__["a" /* RadioControlRegistry */])) {
            return this._RadioControlRegistry_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__app_TaskDataService__["a" /* TaskDataService */])) {
            return this._TaskDataService_32;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__11.ngOnDestroy();
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/app.module.ngfactory.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_task_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_component_css_shim_ngstyle__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_if__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_TaskComponent; });
/* unused harmony export TaskComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View_TaskComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};













var Wrapper_TaskComponent = (function () {
    function Wrapper_TaskComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_task_component__["a" /* TaskComponent */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_TaskComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_TaskComponent.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
        (this.subscription1 && this.subscription1.unsubscribe());
    };
    Wrapper_TaskComponent.prototype.check_task = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.task = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_TaskComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_TaskComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_TaskComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_TaskComponent.prototype.subscribe = function (view, _eventHandler, emit0, emit1) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.change.subscribe(_eventHandler.bind(view, 'change')));
        }
        if (emit1) {
            (this.subscription1 = this.context.delete.subscribe(_eventHandler.bind(view, 'delete')));
        }
    };
    return Wrapper_TaskComponent;
}());
var renderType_TaskComponent_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_TaskComponent_Host0 = (function (_super) {
    __extends(View_TaskComponent_Host0, _super);
    function View_TaskComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TaskComponent_Host0, renderType_TaskComponent_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_TaskComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'td-task', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_TaskComponent0(this.viewUtils, this, 0, this._el_0);
        this._TaskComponent_0_3 = new Wrapper_TaskComponent();
        this.compView_0.create(this._TaskComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentRef_ */](0, this, this._el_0, this._TaskComponent_0_3.context);
    };
    View_TaskComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_task_component__["a" /* TaskComponent */]) && (0 === requestNodeIndex))) {
            return this._TaskComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_TaskComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._TaskComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_TaskComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._TaskComponent_0_3.ngOnDestroy();
    };
    View_TaskComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_TaskComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var TaskComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentFactory */]('td-task', View_TaskComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_task_component__["a" /* TaskComponent */]);
var styles_TaskComponent = [__WEBPACK_IMPORTED_MODULE_8__task_component_css_shim_ngstyle__["a" /* styles */]];
var View_TaskComponent1 = (function (_super) {
    __extends(View_TaskComponent1, _super);
    function View_TaskComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_TaskComponent1, renderType_TaskComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_TaskComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'span', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), [disposable_0]);
        return null;
    };
    View_TaskComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = this.parentView.context.task.status;
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_0, 'crossed', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, ' ', this.parentView.context.task.title, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_1, currVal_3);
            this._expr_3 = currVal_3;
        }
    };
    View_TaskComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TaskComponent1.prototype.handleEvent_0 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.onRename() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TaskComponent1;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var View_TaskComponent2 = (function (_super) {
    __extends(View_TaskComponent2, _super);
    function View_TaskComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_TaskComponent2, renderType_TaskComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_TaskComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'div', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'input', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'autofocus', ''), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n      ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_5 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'button', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'name', 'save'), null);
        this._text_7 = this.renderer.createText(this._el_6, 'Save', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'button', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'name', 'cancel'), null);
        this._text_10 = this.renderer.createText(this._el_9, 'Cancel', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n      ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'button', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'name', 'delete'), null);
        this._text_13 = this.renderer.createText(this._el_12, 'Delete', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n      ', null);
        this._text_15 = this.renderer.createText(this._el_0, ' \n    ', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_2, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'change', null), this.eventHandler(this.handleEvent_2));
        var disposable_1 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_6, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_6));
        var disposable_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_9, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_9));
        var disposable_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_12, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'click', null), this.eventHandler(this.handleEvent_12));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._text_15
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3
        ]);
        return null;
    };
    View_TaskComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_16 = this.parentView.context.task.title;
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_16, currVal_16)) {
            this.renderer.setElementProperty(this._el_2, 'value', currVal_16);
            this._expr_16 = currVal_16;
        }
    };
    View_TaskComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_TaskComponent2.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.parentView.context.rename($event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_TaskComponent2.prototype.handleEvent_6 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.toSubmit($event.target.name) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_TaskComponent2.prototype.handleEvent_9 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.toSubmit($event.target.name) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    View_TaskComponent2.prototype.handleEvent_12 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.parentView.context.toSubmit($event.target.name) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TaskComponent2;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_TaskComponent = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_TaskComponent, {});
var View_TaskComponent0 = (function (_super) {
    __extends(View_TaskComponent0, _super);
    function View_TaskComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_TaskComponent0, renderType_TaskComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_14 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    View_TaskComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'li', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'input', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'checkBox', 'type', 'checkbox'), null);
        this._text_3 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_4 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](4, 0, this, this._anchor_4);
        this._TemplateRef_4_5 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 4, this._anchor_4);
        this._NgIf_4_6 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_4.vcRef, this._TemplateRef_4_5);
        this._text_5 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_6 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](6, 0, this, this._anchor_6);
        this._TemplateRef_6_5 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 6, this._anchor_6);
        this._NgIf_6_6 = new __WEBPACK_IMPORTED_MODULE_10__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_2, new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'change', null), this.eventHandler(this.handleEvent_2));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._anchor_4,
            this._text_5,
            this._anchor_6,
            this._text_7
        ]), [disposable_0]);
        return null;
    };
    View_TaskComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (4 === requestNodeIndex))) {
            return this._TemplateRef_4_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (4 === requestNodeIndex))) {
            return this._NgIf_4_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        return notFoundResult;
    };
    View_TaskComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_4_0_0 = !this.context.task.rename;
        this._NgIf_4_6.check_ngIf(currVal_4_0_0, throwOnChange, false);
        this._NgIf_4_6.ngDoCheck(this, this._anchor_4, throwOnChange);
        var currVal_6_0_0 = this.context.task.rename;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        this._vc_4.detectChangesInNestedViews(throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        var currVal_14 = this.context.task.status;
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementProperty(this._el_2, 'checked', currVal_14);
            this._expr_14 = currVal_14;
        }
    };
    View_TaskComponent0.prototype.destroyInternal = function () {
        this._vc_4.destroyNestedViews();
        this._vc_6.destroyNestedViews();
    };
    View_TaskComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 4)) {
            return new View_TaskComponent1(this.viewUtils, this, 4, this._anchor_4, this._vc_4);
        }
        if ((nodeIndex == 6)) {
            return new View_TaskComponent2(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        return null;
    };
    View_TaskComponent0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            var pd_sub_0 = (this.context.onChecked($event.target.checked) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_TaskComponent0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/app.task.component.ngfactory.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.crossed[_ngcontent-%COMP%]{\ntext-decoration: line-through;\n}\nli[_ngcontent-%COMP%]{\nlist-style-type: none;\npadding: 10px;\nfont-style: italic;\nwidth: 450px;\nmargin: 0 auto;\noverflow: scroll;\n}\nspan[_ngcontent-%COMP%]{ \n    margin-left: 5px; \n}\n.checkBox[_ngcontent-%COMP%]{\n  -ms-transform: scale(1.2); \n  -moz-transform: scale(1.2); \n  -webkit-transform: scale(1.2); \n  -o-transform: scale(1.2); \n  padding: 10px;\n  margin:5px;\n  float:left;\n}\n.checkBox[_ngcontent-%COMP%]:focus{\n    outline: 0;\n}\ninput[_ngcontent-%COMP%]{\n  font-size: 12px; \n  border-radius: 10px;\n  margin-left: 5px;\n  padding-left: 5px;    \n  font-family: "Comic Sans MS", "Comic Sans", cursive; \n}\ninput[_ngcontent-%COMP%]:focus{\n    outline: 0;\n}\nbutton[_ngcontent-%COMP%]{ \n    height: 25px;\n    width: 50px;\n    color: white;\n    font-size: 11px;\n    background-color: cornflowerblue; \n    border-radius: 15px;\n    padding: 0;\n    margin-left: 10px;\n}\nbutton[_ngcontent-%COMP%]:focus{\n    outline: 0;\n}\ndiv[_ngcontent-%COMP%]{\n    display: inline-block;\n}'];
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/task.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['h1[_ngcontent-%COMP%]{ \n    text-align: center;\n    font-size: 50px;\n    color: cornflowerblue;\n}'];
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/todolist.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_NgFor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgFor = (function () {
    function Wrapper_NgFor(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__["a" /* NgFor */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_NgFor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgFor.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgFor.prototype.check_ngForOf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngForOf = currValue;
            this._changes['ngForOf'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTrackBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.ngForTrackBy = currValue;
            this._changes['ngForTrackBy'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTemplate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.ngForTemplate = currValue;
            this._changes['ngForTemplate'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgFor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgFor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgFor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgFor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgFor;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/ng_for.ngfactory.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_NgIf; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgIf = (function () {
    function Wrapper_NgIf(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__["a" /* NgIf */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_NgIf.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgIf.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgIf.prototype.check_ngIf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngIf = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgIf.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgIf.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgIf.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgIf.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgIf;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/ng_if.ngfactory.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_default_value_accessor__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_DefaultValueAccessor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */

var Wrapper_DefaultValueAccessor = (function () {
    function Wrapper_DefaultValueAccessor(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_default_value_accessor__["a" /* DefaultValueAccessor */](p0, p1);
    }
    Wrapper_DefaultValueAccessor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_DefaultValueAccessor.prototype.ngOnDestroy = function () {
    };
    Wrapper_DefaultValueAccessor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_DefaultValueAccessor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_DefaultValueAccessor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'input')) {
            var pd_sub_0 = (this.context.onChange($event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'blur')) {
            var pd_sub_1 = (this.context.onTouched() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_DefaultValueAccessor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_DefaultValueAccessor;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/default_value_accessor.ngfactory.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Wrapper_NgControlStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_NgControlStatusGroup; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgControlStatus = (function () {
    function Wrapper_NgControlStatus(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__["a" /* NgControlStatus */](p0);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_NgControlStatus.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgControlStatus.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgControlStatus.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgControlStatus.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_0 = this.context.ngClassUntouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currVal_0)) {
            view.renderer.setElementClass(el, 'ng-untouched', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.ngClassTouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementClass(el, 'ng-touched', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.ngClassPristine;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            view.renderer.setElementClass(el, 'ng-pristine', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.ngClassDirty;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementClass(el, 'ng-dirty', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.ngClassValid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'ng-valid', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.ngClassInvalid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'ng-invalid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.ngClassPending;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'ng-pending', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    Wrapper_NgControlStatus.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgControlStatus.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgControlStatus;
}());
var Wrapper_NgControlStatusGroup = (function () {
    function Wrapper_NgControlStatusGroup(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_control_status__["b" /* NgControlStatusGroup */](p0);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_NgControlStatusGroup.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgControlStatusGroup.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgControlStatusGroup.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgControlStatusGroup.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_0 = this.context.ngClassUntouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currVal_0)) {
            view.renderer.setElementClass(el, 'ng-untouched', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this.context.ngClassTouched;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currVal_1)) {
            view.renderer.setElementClass(el, 'ng-touched', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this.context.ngClassPristine;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            view.renderer.setElementClass(el, 'ng-pristine', currVal_2);
            this._expr_2 = currVal_2;
        }
        var currVal_3 = this.context.ngClassDirty;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currVal_3)) {
            view.renderer.setElementClass(el, 'ng-dirty', currVal_3);
            this._expr_3 = currVal_3;
        }
        var currVal_4 = this.context.ngClassValid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'ng-valid', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_5 = this.context.ngClassInvalid;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            view.renderer.setElementClass(el, 'ng-invalid', currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = this.context.ngClassPending;
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            view.renderer.setElementClass(el, 'ng-pending', currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    Wrapper_NgControlStatusGroup.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgControlStatusGroup.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgControlStatusGroup;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/ng_control_status.ngfactory.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_form__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_NgForm; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */

var Wrapper_NgForm = (function () {
    function Wrapper_NgForm(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_form__["a" /* NgForm */](p0, p1);
    }
    Wrapper_NgForm.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgForm.prototype.ngOnDestroy = function () {
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_NgForm.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgForm.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgForm.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'submit')) {
            var pd_sub_0 = (this.context.onSubmit($event) !== false);
            result = (pd_sub_0 && result);
        }
        if ((eventName == 'reset')) {
            var pd_sub_1 = (this.context.onReset() !== false);
            result = (pd_sub_1 && result);
        }
        return result;
    };
    Wrapper_NgForm.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ngSubmit.subscribe(_eventHandler.bind(view, 'ngSubmit')));
        }
    };
    return Wrapper_NgForm;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/ng_form.ngfactory.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_model__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrapper_NgModel; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgModel = (function () {
    function Wrapper_NgModel(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_forms_src_directives_ng_model__["a" /* NgModel */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
        this._expr_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["b" /* UNINITIALIZED */];
    }
    Wrapper_NgModel.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgModel.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_NgModel.prototype.check_name = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.name = currValue;
            this._changes['name'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgModel.prototype.check_isDisabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.isDisabled = currValue;
            this._changes['isDisabled'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgModel.prototype.check_model = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.model = currValue;
            this._changes['model'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgModel.prototype.check_options = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.options = currValue;
            this._changes['options'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_3, currValue);
            this._expr_3 = currValue;
        }
    };
    Wrapper_NgModel.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_NgModel.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgModel.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgModel.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.update.subscribe(_eventHandler.bind(view, 'ngModelChange')));
        }
    };
    return Wrapper_NgModel;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/ng_model.ngfactory.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TaskDataService__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_task_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_addtask_component__ = __webpack_require__(149);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__app_task_component__["a" /* TaskComponent */], __WEBPACK_IMPORTED_MODULE_6__app_addtask_component__["a" /* AddTaskComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__TaskDataService__["a" /* TaskDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/app.module.js.map

/***/ }),

/***/ 330:
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
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/environment.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/polyfills.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(255);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var State;
(function (State) {
    State[State["New"] = 0] = "New";
    State[State["Done"] = 1] = "Done";
})(State || (State = {}));
var TaskDataService = (function () {
    function TaskDataService() {
        this.storage = window.localStorage;
        this.storageName = 'todo-list';
        // window.localStorage.removeItem(this.storageName);
        var data = this.storage.getItem(this.storageName);
        if (data == null || undefined)
            this.taskList = [];
        else {
            this.taskList = JSON.parse(data);
            if (this.taskList == undefined || null)
                throw "Error! Can't parse localStorage";
        }
    }
    TaskDataService.prototype.getTasks = function () {
        return this.taskList;
    };
    TaskDataService.prototype.addTask = function (task) {
        this.taskList.unshift(task);
        this.saveToStorage();
    };
    TaskDataService.prototype.saveToStorage = function () {
        this.storage.setItem(this.storageName, JSON.stringify(this.taskList));
    };
    TaskDataService.prototype.deleteTask = function (task) {
        var index = this.taskList.indexOf(task);
        if (index > -1) {
            this.taskList.splice(index, 1);
            this.saveToStorage();
        }
    };
    TaskDataService.prototype.saveTask = function (task) {
        var index = this.taskList.indexOf(task);
        if (index > -1) {
            this.taskList[index] = task;
            this.saveToStorage();
        }
    };
    TaskDataService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], TaskDataService);
    return TaskDataService;
}());
//# sourceMappingURL=/Users/arkadiy/FirstProject/my-app/src/TaskDataService.js.map

/***/ })

},[496]);
//# sourceMappingURL=main.bundle.map