import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { AddHotelsComponent } from './components/add-hotels/add-hotels.component';
import { AddRoomsComponent } from './components/add-rooms/add-rooms.component';
import { DisplayHotelsComponent } from './components/display-hotels/display-hotels.component';
import { DisplayRoomsComponent } from './components/display-rooms/display-rooms.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { SearchComponent } from './components/search/search.component';
import { SearchHotelsComponent } from './components/search-hotels/search-hotels.component';
import { SearchRoomsComponent } from './components/search-rooms/search-rooms.component';
import { SecurityComponent } from './components/security/security.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';
import { UpdateRoomsComponent } from './components/update-rooms/update-rooms.component';
import { UpdateHotelsComponent } from './components/update-hotels/update-hotels.component';


const routes: Routes = [

  {path:'home',component:AppComponent},
  { path: 'login', component: SecurityComponent},
  { path: 'register', component: AddUsersComponent },
  //{ path: 'register', component: RegistrationComponent },
  {
    path: 'users', children: [
      { path: 'add', component: AddUsersComponent },      
      { path: 'display', component: DisplayUsersComponent }, 
      {path:'search/:input',component:SearchComponent},
      { path: 'updatePhoneNumber/:id/:phoneNumber', component: UpdateUsersComponent },
      {path:'update',component:UpdateUsersComponent},

    ]
  },
  {
    path: 'rooms', children: [
      { path: 'add', component: AddRoomsComponent },      
      { path: 'display', component: DisplayRoomsComponent }, 
      {path:'search/:input',component:SearchRoomsComponent},
      {path:'update',component:UpdateRoomsComponent}
     
      
    ]
  },
  {
    path: 'hotels', children: [
      { path: 'add', component: AddHotelsComponent },      
      { path: 'display', component: DisplayHotelsComponent }, 
      {path:'search/:input',component:SearchHotelsComponent},
      {path:'update',component:UpdateHotelsComponent}
    ]
  },
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
