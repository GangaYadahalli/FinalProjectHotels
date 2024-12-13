
export enum UserRole {
    GUEST='GUEST',
   HOTELOWNER='HOTELOWNER' , 
   ADMIN='ADMIN'
  }
  
  export interface Users
  {
      userId:number;
      email:string;
      name:string;
      phoneNumber:number;
      password:string;
      dateCreated:Date ;
      userRole: UserRole ;
  
  
  }