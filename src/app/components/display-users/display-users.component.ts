import { Component } from '@angular/core';
import { JwtClientService } from 'src/app/jwt-clientservice';
import { Users } from 'src/app/model/Users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent {

  userList:Users[]=[];
  constructor(private userService:UsersService,private jwtService:JwtClientService){}
  token: string = '';

  ngOnInit():void{

      this.getAllUsers();

  }
//   getAllUsers(){
    
//     this.jwtService.getAll().subscribe( 
//                               (list)=>{ this.userList = list;  console.log(list)}
                              
//                                 );

// }
getAllUsers(): void {
  // Retrieve the token stored after login
  const token = this.jwtService.getToken();

  if (token) {
    // Call the authorizationTest method from JwtClientService
    this.jwtService.authorizationTest(token).subscribe(
      (list) => {
        this.userList = list;  // Store the response in the userList array
        console.log('User List:', list);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  } else {
    console.error('Token is not available!');
  }
}



deleteById(userId: number) {
  //const token = this.token; // Assume `this.token` holds the current valid JWT token

  this.userService.delete(userId).subscribe(
    (msg) => {
      console.log("Deleted: " + msg);
      //this.getAllUsers(); // Refresh the user list after successful deletion
    },
    (error) => {
      console.error("Error deleting user:", error);
    }
  );
}


}
