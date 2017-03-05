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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var LdapService = (function () {
    function LdapService(http) {
        this.http = http;
        this.url = 'http://localhost:';
        this.port = '8000';
        this.resource_path = '/userinfo';
    }
    LdapService.prototype.getUserInfo = function () {
        return this.http.get(this.url + this.port + this.resource_path)
            .map(function (response) { return response.json(); });
    };
    return LdapService;
}());
LdapService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LdapService);
exports.LdapService = LdapService;
//# sourceMappingURL=ldap.service.js.map