import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/model/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  userSearchList:Users[] =[];

    constructor(private route:ActivatedRoute, private userService:UsersService){}
 
    ngOnInit(): void {
     
      this.find();
  }
   
     searchInput:string = '';

    find(){

    

        this.route.params.subscribe( (param)=>{ this.searchInput = param['input']});

        this.userService.find(this.searchInput).subscribe( (list)=> {this.userSearchList = list;console.log('list '+list)});
       
        console.log('serached data '+this.userSearchList);

    }
}
