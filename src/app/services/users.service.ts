import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/Users';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;

    baseURL:string = "http://localhost:8080/api/users/";

  constructor(private  http:HttpClient) {

   }

      addUser(user:Users):Observable<Users>{


          return  this.http.post<Users>(this.baseURL+"insert",user);

      }

      getAll():Observable<Users[]>{

        return  this.http.get<Users[]>(this.baseURL+"getall");



    }
    // users.service.ts
delete(userId: number, token: string): Observable<string> {
  const tokenString = "Bearer " + token; // Format the token
  const headers = new HttpHeaders({
    'Authorization': tokenString, // Add Authorization header
  });

  return this.http.delete<string>(`${this.baseURL}delete/${userId}`, { headers });
}

    // delete(userId: number, token: string): Observable<string> {
    //   const tokenString = "Bearer " + token; // Format the token as required
    //   const headers = new HttpHeaders({
    //     'Authorization': tokenString // Add the Authorization header
    //   });
    
    //   return this.http.delete<string>(this.baseURL + `delete/${userId}`, { headers });
    // }
    

    // delete(userId:number):Observable<string>{

    //   return  this.http.delete<string>(this.baseURL+`delete/${userId}`);

    // }
   
  //  searchByUserName(name:string):Observable<Users[]>{

  //   return    this.http.get<Users[]>(this.baseURL+"?name="+name);


  // }
  find(data:string):Observable<Users[]>{


    console.log(data)
   return this.http.get<Users[]>(this.baseURL+`get/name/${data}`);

  }
  }
    
    