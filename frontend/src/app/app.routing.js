"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./components/user.component');
var reports_component_1 = require('./components/reports.component');
var appRoutes = [
    {
        path: 'user/profile',
        component: user_component_1.UserComponent
    },
    {
        path: 'reports',
        component: reports_component_1.ReportComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map