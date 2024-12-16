import { Component } from '@angular/core';
import { JwtClientService } from 'src/app/jwt-clientservice';
import { AuthRequest } from 'src/app/model/authrequest';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent {
  response: any;
  token: string | null = null;
  authRequest: AuthRequest = new AuthRequest();

  constructor(private jwtService: JwtClientService) { }

  ngOnInit(): void {}

  readFormData(formData: any): void {
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
 
 
 
 }


