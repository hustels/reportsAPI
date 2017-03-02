import { ModuleWithProviders } from '@angular/core'

import { Routes , RouterModule } from '@angular/router'

import { UserComponent } from './components/user.component'
import { ReportComponent } from './components/reports.component'
import { AppComponent } from './app.component';
import { AddReportComponent } from './components/addreport.component';



const appRoutes: Routes = [
	{
		path: 'user/profile',
		component: UserComponent

	},

	
	{
		path: 'reports',
		component: ReportComponent
	},

	{
	path: 'reports/add',
		component: AddReportComponent
	}
	
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
