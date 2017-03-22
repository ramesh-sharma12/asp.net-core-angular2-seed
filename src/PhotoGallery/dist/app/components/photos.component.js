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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var paginated_1 = require("../core/common/paginated");
var data_service_1 = require("../core/services/data.service");
var PhotosComponent = (function (_super) {
    __extends(PhotosComponent, _super);
    function PhotosComponent(photosService) {
        var _this = _super.call(this, 0, 0, 0) || this;
        _this.photosService = photosService;
        _this._photosAPI = 'api/photos/';
        return _this;
    }
    PhotosComponent.prototype.ngOnInit = function () {
        this.photosService.set(this._photosAPI, 12);
        this.getPhotos();
    };
    PhotosComponent.prototype.getPhotos = function () {
        var self = this;
        self.photosService.get(self._page)
            .subscribe(function (res) {
            var data = res.json();
            self._photos = data.Items;
            self._page = data.Page;
            self._pagesCount = data.TotalPages;
            self._totalCount = data.TotalCount;
        }, function (error) { return console.error('Error: ' + error); });
    };
    PhotosComponent.prototype.search = function (i) {
        _super.prototype.search.call(this, i);
        this.getPhotos();
    };
    ;
    return PhotosComponent;
}(paginated_1.Paginated));
PhotosComponent = __decorate([
    core_1.Component({
        selector: 'photos',
        templateUrl: './photos.component.html'
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], PhotosComponent);
exports.PhotosComponent = PhotosComponent;
//# sourceMappingURL=photos.component.js.map