import { Component } from '@angular/core';
import { OracleReportActionsService } from '../services/oracle.reports.actions.service'

@Component({
	selector: 'veeam',
	 templateUrl: 'app/components/templates/oracle.component.html',
	 providers: [ OracleReportActionsService]
   	


})

export class OracleComponent{

	constructor(private reportacionts:  OracleReportActionsService )
	{
		setTimeout( this.reportacionts.drawReportsTable, 100);

	}
	
}