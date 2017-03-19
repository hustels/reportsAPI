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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var reports_service_1 = require("../services/reports.service");
var reports_actions_service_1 = require("../services/reports.actions.service");
var ReportComponent = (function () {
    function ReportComponent(reportsService, reportacionts) {
        var _this = this;
        this.reportsService = reportsService;
        this.reportacionts = reportacionts;
        setTimeout(this.reportacionts.drawReportsTable, 100);
        //this.reportacionts.drawReportsTable();
        this.reportsService.getReports()
            .subscribe(function (reports) {
            _this.reports = reports;
            //console.log(reports);
        });
        //this.drawReportsTable();
    }
    return ReportComponent;
}());
ReportComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'reports',
        templateUrl: './templates/reports.component.html',
        //styleUrls: ['./app.component.css']
        providers: [reports_service_1.ReportService, reports_actions_service_1.ReportActionsService]
    }),
    __metadata("design:paramtypes", [reports_service_1.ReportService, reports_actions_service_1.ReportActionsService])
], ReportComponent);
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=reports.component.js.map