import { ModuleWithProviders } from '@angular/core'

import { Routes , RouterModule } from '@angular/router'


import { ReportComponent } from './components/reports.component'
import { AppComponent } from './app.component'



const appRoutes: Routes = [
	{
		path: '',
		component: AppComponent

	},

	
	{
		path: 'reports',
		component: ReportComponent
	}
	
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
