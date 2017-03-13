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
var oracle_reports_actions_service_1 = require('../services/oracle.reports.actions.service');
var OracleComponent = (function () {
    function OracleComponent(reportacionts) {
        this.reportacionts = reportacionts;
        setTimeout(this.reportacionts.drawReportsTable, 100);
    }
    OracleComponent = __decorate([
        core_1.Component({
            selector: 'veeam',
            templateUrl: 'app/components/templates/oracle.component.html',
            providers: [oracle_reports_actions_service_1.OracleReportActionsService]
        }), 
        __metadata('design:paramtypes', [oracle_reports_actions_service_1.OracleReportActionsService])
    ], OracleComponent);
    return OracleComponent;
}());
exports.OracleComponent = OracleComponent;
//# sourceMappingURL=oracle.component.js.map