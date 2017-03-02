import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';



@Injectable()

export class AddReportService{


	url:  string;
	constructor(private http: Http ){
		console.log('Report service initilize...');
		
	}
	saveReport(environment:string , date:string , session:string , specification:string , 
			hostfilesystem:string , incident:string , link :string, endok :string, notes:string){

		this.url = 'http://localhost:8080/reports/add';

		return this.http.post(this.url , {
			environment: environment
		});
	}
}