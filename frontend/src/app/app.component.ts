import { Component } from '@angular/core';
import * as io from "socket.io-client";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  //template: `<reports> </reports>`,
   templateUrl: './components/templates/app.component.html',
   styleUrls: ['./components/css/app.component.css']

})
export class AppComponent  { 

	 counter:  number;
     constructor(){
     	
       $(document).ready(function(){
       	this.counter = parseInt($('.notification-counter').text());


       	// don't show notification if there are no 
       	if(this.counter < 0 || this.counter === 0){
       //	console.log(this.counter);	
       	$('.notification-counter').css({"display": "none"});
      
      	}	
      	var socket = io.connect('http://localhost:8080');

      	socket.on('connect' , function(){
      		console.log(socket);



      	});




       });
    }

}
