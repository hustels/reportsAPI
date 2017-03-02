import { Component } from '@angular/core';
import { AddReportService }  from '../services/addreport.service'

@Component({
	moduleId: module.id,
	selector: 'add-report',
	templateUrl: './templates/addreport.component.html',
	providers:[ AddReportService]
})


export class AddReportComponent{
	constructor(private addreportservice:  AddReportService){
		//console.log('Add reports');
	}

	addReport(environment , date , session , specification , 
			hostfilesystem , incident , link , endok , notes ){
			/*
			console.log(environment  +  date + session + specification + 
				hostfilesystem +  incident + link +  endok + notes);
			*/
			this.addreportservice.saveReport(environment , date , session , specification , 
			hostfilesystem , incident , link , endok , notes)
			.subscribe(response => {
				console.log(response);
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