import { Component } from '@angular/core';
import { LdapService } from '../services/ldap.service';

@Component({
	selector: 'user',
	template:  `<h3> user component </h3>`,
	providers: [LdapService]
})


export class UserComponent{
	constructor(private userservice:  LdapService){
		console.log('user component ready');

		this.userservice.getUserInfo()
		.subscribe(userinfo => {
			console.log(userinfo);
		})
	}
	
}