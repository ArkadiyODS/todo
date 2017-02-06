webpackJsonp([0,3],{

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], TaskDataService);
    return TaskDataService;
}());
//# sourceMappingURL=/Users/arkadiy/MyProjects/CLI-Builded-TODO/src/TaskDataService.js.map

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 327;


/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(433);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/arkadiy/MyProjects/CLI-Builded-TODO/src/main.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TaskDataService__ = __webpack_require__(130);
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
        this.addTask = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.disabled = true;
    }
    AddTaskComponent.prototype.inputChange = function (e) {
        this.disabled = e.target.value.trim() === '' ? true : null;
    };
    AddTaskComponent.prototype.onSubmit = function (form) {
        if (form.value.title.trim() != '') {
            this.addTask.emit({ title: form.value.title, status: __WEBPACK_IMPORTED_MODULE_1__TaskDataService__["b" /* State */].New });
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(), 
        __metadata('design:type', Object)
    ], AddTaskComponent.prototype, "addTask", void 0);
    AddTaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'td-add-task',
            template: __webpack_require__(592),
            styles: [__webpack_require__(589)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddTaskComponent);
    return AddTaskComponent;
}());
//# sourceMappingURL=/Users/arkadiy/MyProjects/CLI-Builded-TODO/src/app.addtask.component.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TaskDataService__ = __webpack_require__(130);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'todo-list',
            template: __webpack_require__(594),
            styles: [__webpack_require__(591)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__TaskDataService__["a" /* TaskDataService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__TaskDataService__["a" /* TaskDataService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/Users/arkadiy/MyProjects/CLI-Builded-TODO/src/app.component.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TaskDataService__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_task_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_addtask_component__ = __webpack_require__(431);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__app_task_component__["a" /* TaskComponent */], __WEBPACK_IMPORTED_MODULE_6__app_addtask_component__["a" /* AddTaskComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__TaskDataService__["a" /* TaskDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/arkadiy/MyProjects/CLI-Builded-TODO/src/app.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TaskDataService__ = __webpack_require__(130);
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
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Input */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "task", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "change", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(), 
        __metadata('design:type', Object)
    ], TaskComponent.prototype, "delete", void 0);
    TaskComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'td-task',
            template: __webpack_require__(593),
            styles: [__webpack_require__(590)]
        }), 
        __metadata('design:paramtypes', [])
    ], TaskComponent);
    return TaskComponent;
}());
//# sourceMappingURL=/Users/arkadiy/MyProjects/CLI-Builded-TODO/src/app.task.component.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true
};
//# sourceMappingURL=/Users/arkadiy/MyProjects/CLI-Builded-TODO/src/environment.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/arkadiy/MyProjects/CLI-Builded-TODO/src/polyfills.js.map

/***/ }),

/***/ 589:
/***/ (function(module, exports) {

module.exports = "\nform{\n    width: 400px;\n    margin: 0 auto;\n}\nlabel{\n    font-size: 20px;\n    font-weight: bold;\n    color: cornflowerblue;\n}\ninput{\n  border:2px cornflowerblue solid;\n  height:20px;\n  font-size: 12px;\n  min-width: 200px;\n  border-radius: 20px;\n  padding-left: 10px;    \n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n}\ninput:focus{\n    outline: 0;\n}\nbutton{\n    width: 30px;\n    height: 30px;\n    color: white;\n    font-size: 11px;\n    background-color: cornflowerblue; \n    border-radius: 15px;\n    padding: 0;\n    margin: 4px;\n}\nbutton:focus{\n    outline: 0;\n}\nbutton:disabled {\n    background:lightslategray;\n}"

/***/ }),

/***/ 590:
/***/ (function(module, exports) {

module.exports = ".crossed{\ntext-decoration: line-through;\n}\nli{\nlist-style-type: none;\npadding: 10px;\nfont-style: italic;\nwidth: 450px;\nmargin: 0 auto;\noverflow: auto;\n}\nspan{ \n    margin-left: 5px; \n}\n.checkBox{\n  -ms-transform: scale(1.2); /* IE */\n  -moz-transform: scale(1.2); /* FF */\n  -webkit-transform: scale(1.2); /* Safari and Chrome */\n  -o-transform: scale(1.2); /* Opera */\n  padding: 10px;\n  margin:5px;\n  float:left;\n}\n.checkBox:focus{\n    outline: 0;\n}\ninput{\n  font-size: 12px; \n  border-radius: 10px;\n  margin-left: 5px;\n  padding-left: 5px;    \n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive; \n}\ninput:focus{\n    outline: 0;\n}\nbutton{ \n    height: 25px;\n    width: 50px;\n    color: white;\n    font-size: 11px;\n    background-color: cornflowerblue; \n    border-radius: 15px;\n    padding: 0;\n    margin-left: 10px;\n}\nbutton:focus{\n    outline: 0;\n}\ndiv{\n    display: inline-block;\n}"

/***/ }),

/***/ 591:
/***/ (function(module, exports) {

module.exports = "h1{ \n    text-align: center;\n    font-size: 50px;\n    color: cornflowerblue;\n}"

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "<form\n#taskAddForm=\"ngForm\"\n(ngSubmit)=\"onSubmit(taskAddForm);\n        taskAddForm.reset()\">\n    <label for=\"title\">New task: </label>\n    <input (input)=\"inputChange($event)\" class=\"taskInput\" type=\"text\" name=\"title\" ngModel>\n    <button disabled=\"{{disabled}}\" type=\"submit\">Add</button >\n</form>"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "<li>\n    <input class=\"checkBox\" type=\"checkbox\"\n      (change)=\"onChecked($event.target.checked)\"\n      [checked]=\"task.status\">\n    <span *ngIf=\"!task.rename\"\n      [class.crossed]=\"task.status\"\n      (click)=\"onRename()\"\n    > {{task.title}}</span>\n    <div  *ngIf=\"task.rename\">\n    <input\n      [value]=\"task.title\" \n      (change)=\"rename($event.target.value)\" autofocus>\n      <div>\n      <button name=\"save\" (click)=\"toSubmit($event.target.name)\">Save</button>\n      <button  name=\"cancel\" (click)=\"toSubmit($event.target.name)\">Cancel</button>\n      <button name=\"delete\" (click)=\"toSubmit($event.target.name)\">Delete</button>\n      </div> \n    </div>\n</li>"

/***/ }),

/***/ 594:
/***/ (function(module, exports) {

module.exports = "<h1>{{name}}</h1>\n<hr>\n<td-add-task (addTask)=\"onTaskAdded($event)\"></td-add-task>\n<hr>\n<ul>\n  <td-task *ngFor='let task of taskList'\n  [task] = \"task\"\n  (change) = \"onChange($event)\" \n  (delete) = \"onDelete($event)\">   \n  </td-task>\n</ul>  "

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(328);


/***/ })

},[607]);
//# sourceMappingURL=main.bundle.map