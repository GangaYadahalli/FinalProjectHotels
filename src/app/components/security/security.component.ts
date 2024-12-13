import { Component } from '@angular/core';
import { JwtClientService } from 'src/app/jwt-clientservice';
import { AuthRequest } from 'src/app/model/authrequest';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  response:any;
    token:any;


    authRequest: AuthRequest = new AuthRequest();


  constructor(private jwtService:JwtClientService){}


  ngOnInit(): void {
    
   
  }


   readFormData(formData:any){

      this.authRequest.username = formData.form.value.username;
      this.authRequest.password = formData.form.value.password;

      this.getAccessToken(this.authRequest);

   }



  public getAccessToken(authRequest:any){

   let response =  this.jwtService.getGeneratedToken(authRequest);

      response.subscribe( (genToken)=> {
           this.token = genToken ;console.log(genToken); 
          this.accessApi(this.token) });

      

  }

  public accessApi(token:any){



  let responseBody =    this.jwtService.authorizationTest(token);

      console.log(responseBody )
  
  responseBody.subscribe( responseData => {
                           this.response = responseData;
                            console.log('responseData '+responseData)
                            } , error => {console.log('myerror '+error)});

  }
  public deleteUser(token: any, userId: number) {
    // Using jwtService to handle the delete operation
    let responseBody = this.jwtService.deleteUser(token, userId);
  
    // Subscribe to the response and log the responseData or error
    responseBody.subscribe(
      (responseData) => {
        this.response = responseData;
        console.log('Delete response data (from jwtService): ' + responseData);
      },
      (error) => {
        console.log('Delete user error (from jwtService): ' + error);
      }
    );
  }
  // public deleteUser(token: any, userId: number) 
  // {
  //   let responseBody =  this.jwtService.deleteUser(token,userId);

  //   // Subscribe to the response and log the responseData or error
  //   responseBody.subscribe(
  //     (responseData) => {
  //       this.response = responseData;
  //       console.log('Delete response data: ' + responseData);
  //     },
  //     (error) => {
  //       console.log('Delete user error: ' + error);
  //     }
  //   );
  // }
  }




