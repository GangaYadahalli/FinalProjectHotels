import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { SearchComponent } from './components/search/search.component';
import { AddHotelsComponent } from './components/add-hotels/add-hotels.component';
import { AddRoomsComponent } from './components/add-rooms/add-rooms.component';
import { DisplayHotelsComponent } from './components/display-hotels/display-hotels.component';
import { DisplayRoomsComponent } from './components/display-rooms/display-rooms.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';

const routes: Routes = [

  {path:'home',component:AppComponent},
  {
    path: 'users', children: [
      { path: 'add', component: AddUsersComponent },      
      { path: 'display', component: DisplayUsersComponent }, 
    ]
  },
  // {path:'insertUsers', component:AddUsersComponent},
  // {path:'getallUsers', component:DisplayUsersComponent},
  {path:'search/:input',component:SearchComponent},
  {
    path: 'rooms', children: [
      { path: 'add', component: AddRoomsComponent },      
      { path: 'display', component: DisplayRoomsComponent }, 
    ]
  },
  {
    path: 'hotels', children: [
      { path: 'add', component: AddHotelsComponent },      
      { path: 'display', component: DisplayHotelsComponent }, 
    ]
  },

  // {path:'insertHotels',component:AddHotelsComponent},
  // {path:'getallHotels',component:DisplayHotelsComponent},
  // {path:'insertRooms',component:AddRoomsComponent},
  // {path:'getallRooms',component:DisplayRoomsComponent},
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
