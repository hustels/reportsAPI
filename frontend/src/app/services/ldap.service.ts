import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class LdapService {
	url: string;
	port:  string;
	resource_path: string;
	constructor (private http:  Http){
			this.url = 'http://localhost:';
			this.port = '8000';
			this.resource_path = '/userinfo';
	}
	getUserInfo(){
		return this.http.get(this.url +  this.port + this.resource_path)
		.map(response => response.json());
	}
}