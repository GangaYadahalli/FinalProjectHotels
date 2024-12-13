import { Component } from '@angular/core';
import { Users } from 'src/app/model/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent {

  userList:Users[]=[];
  constructor(private userService:UsersService){}
  token: string = '';

  ngOnInit(){

      this.getAllUsers();

  }
  getAllUsers(){
    
    this.userService.getAll().subscribe( 
                              (list)=>{ this.userList = list;  console.log(list)}
                              
                                );

}
deleteById(userId: number) {
  const token = this.token; // Assume `this.token` holds the current valid JWT token

  this.userService.delete(userId, token).subscribe(
    (msg) => {
      console.log("Deleted: " + msg);
      this.getAllUsers(); // Refresh the user list after successful deletion
    },
    (error) => {
      console.error("Error deleting user:", error);
    }
  );
}


}
