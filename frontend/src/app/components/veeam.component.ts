import { Component } from '@angular/core';
import { VeeamReportActionsService  } from '../services/veeam.reports.actions.service'

@Component({
	selector: 'veeam',
	 templateUrl: 'app/components/templates/veeam.component.html',
	 providers: [VeeamReportActionsService ]
   	


})

export class VeeamComponent{

	constructor(private reportacionts:  VeeamReportActionsService )
	{
		setTimeout( this.reportacionts.drawReportsTable, 100);

	}
	
}