import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUsersComponent } from './components/add-users/add-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddHotelsComponent } from './components/add-hotels/add-hotels.component';
import { AddRoomsComponent } from './components/add-rooms/add-rooms.component';
import { DisplayHotelsComponent } from './components/display-hotels/display-hotels.component';
import { DisplayRoomsComponent } from './components/display-rooms/display-rooms.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { RoomsService } from './services/rooms.service';
import { HotelsService } from './services/hotels.service';
import { SecurityComponent } from './components/security/security.component';
import { SearchHotelsComponent } from './components/search-hotels/search-hotels.component';
import { SearchRoomsComponent } from './components/search-rooms/search-rooms.component';
import { UpdateUsersComponent } from './components/update-users/update-users.component';
import { UpdateRoomsComponent } from './components/update-rooms/update-rooms.component';
import { UpdateHotelsComponent } from './components/update-hotels/update-hotels.component';
import { UpdatePhoneNumberComponent } from './components/update-phone-number/update-phone-number.component';
import { UpdataCapacityComponent } from './components/updata-capacity/updata-capacity.component';
import { UpdatePricePerNightComponent } from './components/update-price-per-night/update-price-per-night.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUsersComponent,
    DisplayUsersComponent,
    DashboardComponent,
    SearchComponent,
    AddHotelsComponent,
    AddRoomsComponent,
    DisplayHotelsComponent,
    DisplayRoomsComponent,
    SecurityComponent,
    SearchHotelsComponent,
    SearchRoomsComponent,
    UpdateUsersComponent,
    UpdateRoomsComponent,
    UpdateHotelsComponent,
    UpdatePhoneNumberComponent,
    UpdataCapacityComponent,
    UpdatePricePerNightComponent,
    UpdatePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [UsersService, RoomsService, HotelsService,{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
