import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class ReportService{
	url:  string;
	constructor(private http: Http ){
		console.log('Report service initilize...');
	}
	getReports(){
		this.url = 'http://localhost:8080/reports'
		return this.http.get(this.url )
		.map(res => res.json());
	}
}