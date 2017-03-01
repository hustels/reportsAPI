"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var reports_service_1 = require('../services/reports.service');
var ReportComponent = (function () {
    function ReportComponent(reportsService) {
        var _this = this;
        this.reportsService = reportsService;
        this.reportsService.getReports()
            .subscribe(function (reports) {
            _this.reports = reports;
            console.log(reports);
        });
    }
    ReportComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reports',
            templateUrl: './templates/reports.component.html',
            //styleUrls: ['./app.component.css']
            providers: [reports_service_1.ReportService]
        }), 
        __metadata('design:paramtypes', [reports_service_1.ReportService])
    ], ReportComponent);
    return ReportComponent;
}());
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=reports.component.js.map