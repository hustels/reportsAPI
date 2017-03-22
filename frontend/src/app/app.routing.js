"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./components/user.component');
var reports_component_1 = require('./components/reports.component');
var addreport_component_1 = require('./components/addreport.component');
var veeam_component_1 = require('./components/veeam.component');
var oracle_component_1 = require('./components/oracle.component');
var appRoutes = [
    {
        path: 'user/profile',
        component: user_component_1.UserComponent
    },
    {
        path: 'reports',
        component: reports_component_1.ReportComponent
    },
    {
        path: 'reports/add',
        component: addreport_component_1.AddReportComponent
    },
    {
        path: 'reports/veeam',
        component: veeam_component_1.VeeamComponent
    },
    {
        path: 'reports/oracle',
        component: oracle_component_1.OracleComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map