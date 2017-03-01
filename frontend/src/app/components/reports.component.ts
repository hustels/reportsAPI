import { Component } from '@angular/core'
import { ReportService } from '../services/reports.service'



@Component({
	moduleId: module.id,
	selector: 'reports',
	templateUrl: './templates/reports.component.html',
	//styleUrls: ['./app.component.css']
	providers: [ReportService]
})


export class ReportComponent{

	reports:  ReportInterface;

	constructor(private reportsService:  ReportService)
	{
		this.reportsService.getReports()
		.subscribe(reports =>{
			this.reports = reports;
			console.log(reports);
		})

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