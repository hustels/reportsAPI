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
		setTimeout( this.drawReportsTable, 1000);
		//this.drawReportsTable();

		this.reportsService.getReports()
		.subscribe(reports =>{
			this.reports = reports;
			//console.log(reports);
		}) 

		//this.drawReportsTable();

	}

	drawReportsTable(){
		$('#ReportTableContainer').jtable({
			ajaxSettings: {
		    type: 'GET',
		    dataType: 'json',
		    headers: {'Access-Control-Allow-Origin': '*' },
				}
			,
            title: 'Report table',
            actions: {
                listAction: 'http://localhost:8080/reports',
                /*createAction: '/GettingStarted/CreatePerson',
                updateAction: '/GettingStarted/UpdatePerson',
                deleteAction: '/GettingStarted/DeletePerson'
                */
            },
            fields: {
                _id: {
                    key: true,
                    list: false
                },
                date: {
                    title: 'date',
                    width: '40%'
                },
                environment: {
                    title: 'Entorno',
                    width: '20%'
                },
                session: {
                    title: 'Session',
                    width: '30%',
                    create: false,
                    edit: false
                }
            }
        });
		$('#ReportTableContainer').jtable('load');
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