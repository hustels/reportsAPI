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
var core_1 = require("@angular/core");
var addreport_service_1 = require("../services/addreport.service");
var AddReportComponent = (function () {
    function AddReportComponent(addreportservice) {
        this.addreportservice = addreportservice;
        //console.log('Add reports compoenent');
    }
    AddReportComponent.prototype.addReport = function (environment, date, session, specification, hostfilesystem, incident, endok, notes) {
        //this.endok = $('#endok').is(":checked") ? 'SI' : 'NO';
        /*
        console.log(environment  +  date + session + specification +
            hostfilesystem +  incident + link +  endok + notes);
        */
        /*

        if($('#endok').is(":checked")){
            this.endok = 'SI';
        }else{
            this.endok = 'NO';
        }
        console.log(this.endok);
        */
        this.addreportservice.saveReport(environment, date, session, specification, hostfilesystem, incident, this.endok, notes)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    return AddReportComponent;
}());
AddReportComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-report',
        templateUrl: './templates/addreport.component.html',
        providers: [addreport_service_1.AddReportService]
    }),
    __metadata("design:paramtypes", [addreport_service_1.AddReportService])
], AddReportComponent);
exports.AddReportComponent = AddReportComponent;
//# sourceMappingURL=addreport.component.js.map