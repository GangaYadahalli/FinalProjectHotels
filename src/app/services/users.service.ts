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

      updateUser(user:Users):Observable<Users>{


        return  this.http.put<Users>(this.baseURL+"update",user);

    }
    //   getAll():Observable<Users[]>{

    //     return  this.http.get<Users[]>(this.baseURL+"getall");



    // }
    // delete(userId: number, token: string): Observable<string> {
    //   const tokenString = 'Bearer ' + token;
    //   console.log("Authorization Token:", tokenString); // Format the token
    //   const headers = new HttpHeaders({
    //     Authorization: tokenString, // Add Authorization header
    //   });
  
    //   return this.http.delete<string>(`${this.baseURL}delete/${userId}`, { headers });
    // }
    

    delete(userId:number):Observable<string>{

      return  this.http.delete<string>(this.baseURL+`delete/${userId}`);

    }
   
 
  findById(data:string):Observable<Users[]>{


    console.log(data)
   return this.http.get<Users[]>(this.baseURL+`getbyid/${data}`);

  }
  findByName(data:string):Observable<Users[]>{


    console.log(data)
   return this.http.get<Users[]>(this.baseURL+`getByName/${data}`);

  }
 

  updatePhoneNumber(id: number, phoneNumber: number): Observable<string> {
    return this.http.put<string>(`${this.baseURL}/updatePhoneNumber/${id}`, null, {
      params: { phoneNumber: phoneNumber.toString() },
    });
  }

  updatePassword(id: number, password: string): Observable<string> {
    return this.http.put<string>(`${this.baseURL}/updatePassword/${id}`, null, {
      params: { password },
    });
  }
  }
    
    