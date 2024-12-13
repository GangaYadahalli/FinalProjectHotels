import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {


  // pageMessage: string = '';
  data:string = '';

    constructor(private userService:UsersService,private router:Router){}
   
      find(searchData:any){

          this.router.navigate(['/search/'+searchData.form.value.data])

          console.log(searchData.form.value.data);
          

      }
     

  // ngOnInit() {
  //   // Check the current route and set the message accordingly
  //   if (this.router.url === '/home') {
  //     this.pageMessage = 'Welcome to Home Page';
  //   }
  // }

}
