import { Component } from '@angular/core';
import { AddReportService }  from '../services/addreport.service'

@Component({
	moduleId: module.id,
	selector: 'add-report',
	templateUrl: './templates/addreport.component.html',
	providers:[ AddReportService]
})


export class AddReportComponent{
	endok:  string;
	constructor(private addreportservice:  AddReportService){
		//console.log('Add reports compoenent');
	}

	addReport(environment: string , date:string , session:string , specification:string , 
			hostfilesystem:string , incident:string ,  endok:string , notes:string ){
			//this.endok = $('#endok').is(":checked") ? 'SI' : 'NO';
			/*
			console.log(environment  +  date + session + specification + 
				hostfilesystem +  incident + link +  endok + notes);
			*/
			/*

			if($('#endok').is(":checked")){
				this.endok = 'SI';
			}else{
				this.endok = 'NO';
			}
			console.log(this.endok);
			*/
			
			this.addreportservice.saveReport(environment , date , session , specification , 
			hostfilesystem , incident  , this.endok , notes)
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