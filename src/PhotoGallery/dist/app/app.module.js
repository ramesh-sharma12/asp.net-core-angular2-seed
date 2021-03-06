"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_2 = require("@angular/http");
var account_module_1 = require("./components/account/account.module");
var app_component_1 = require("./app.component");
var album_photos_component_1 = require("./components/album-photos.component");
var home_component_1 = require("./components/home.component");
var photos_component_1 = require("./components/photos.component");
var albums_component_1 = require("./components/albums.component");
var routes_1 = require("./routes");
var data_service_1 = require("./core/services/data.service");
var membership_service_1 = require("./core/services/membership.service");
var utility_service_1 = require("./core/services/utility.service");
var notification_service_1 = require("./core/services/notification.service");
var AppBaseRequestOptions = (function (_super) {
    __extends(AppBaseRequestOptions, _super);
    function AppBaseRequestOptions() {
        var _this = _super.call(this) || this;
        _this.headers = new http_2.Headers();
        _this.headers.append('Content-Type', 'application/json');
        _this.body = '';
        return _this;
    }
    return AppBaseRequestOptions;
}(http_2.BaseRequestOptions));
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            routes_1.routing,
            account_module_1.AccountModule
        ],
        declarations: [app_component_1.AppComponent, album_photos_component_1.AlbumPhotosComponent, home_component_1.HomeComponent, photos_component_1.PhotosComponent, albums_component_1.AlbumsComponent],
        providers: [data_service_1.DataService, membership_service_1.MembershipService, utility_service_1.UtilityService, notification_service_1.NotificationService,
            { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            { provide: http_2.RequestOptions, useClass: AppBaseRequestOptions }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map