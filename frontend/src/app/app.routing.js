"use strict";
var router_1 = require('@angular/router');
var reports_component_1 = require('./components/reports.component');
var app_component_1 = require('./app.component');
var appRoutes = [
    {
        path: '',
        component: app_component_1.AppComponent
    },
    {
        path: 'reports',
        component: reports_component_1.ReportComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map