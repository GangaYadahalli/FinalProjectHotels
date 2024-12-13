import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http:HttpClient) { }


    baseURL:string = 'http://localhost:8080/api/';

    getGeneratedToken(requestBody: any){

        return this.http.post(this.baseURL+"users/login/authenticate",requestBody,{responseType: 'text' as 'json'});

    }

    authorizationTest(token:any){

          let tokenString = "Bearer "+token;

          const headers =  new HttpHeaders({
                 'Content-Type': 'application/json',
                 'Access-Control-Allow-Origin': 'http://localhost:4200'
               }).set("Authorization",tokenString);


        return this.http.get(this.baseURL,{headers,responseType:'text' as 'json'});

    }
    // jwt-client.service.ts
deleteUser(token: any, userId: number) {
  const tokenString = "Bearer " + token;
  const headers = new HttpHeaders({
    'Authorization': tokenString, // Add Authorization header
  });

  return this.http.delete(`${this.baseURL}users/delete/${userId}`, { headers, responseType: 'text' as 'json' });
}

    // deleteUser(token: any, userId: number) {
    //   const tokenString = "Bearer " + token;
    //   const headers = new HttpHeaders({
    //     'Authorization': tokenString
    //   });
    
    //   return this.http.delete(`${this.baseURL}users/delete/${userId}`, { headers, responseType: 'text' as 'json' });
    // }
    
    


}
