import { Component } from '@angular/core'
import { ReportService } from '../services/reports.service'
import { ReportActionsService} from '../services/reports.actions.service';


@Component({
	moduleId: module.id,
	selector: 'reports',
	templateUrl: './templates/reports.component.html',
	//styleUrls: ['./app.component.css']
	providers: [ReportService , ReportActionsService]
})


export class ReportComponent{

	reports:  ReportInterface;

	constructor(private reportsService:  ReportService , private reportacionts:  ReportActionsService)
	{
		setTimeout( this.reportacionts.drawReportsTable, 100);
		
		//this.reportacionts.drawReportsTable();

		this.reportsService.getReports()
		.subscribe(reports =>{
			this.reports = reports;
			//console.log(reports);
		}) 

		//this.drawReportsTable();

	}


}


// report interface
interface ReportInterface  {
	_id: number,
	environment: string,
	date: string,
	session: string,
	specification: string,
	hostfilesystem: string,
	incident: string,
	link: string;
	endok: boolean,
	notes: string
}