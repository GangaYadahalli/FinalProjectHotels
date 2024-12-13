import { Component } from '@angular/core';
import { Hotels } from 'src/app/model/hotels';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-display-hotels',
  templateUrl: './display-hotels.component.html',
  styleUrls: ['./display-hotels.component.css']
})
export class DisplayHotelsComponent {

  
  hotelList:Hotels[]=[];
  constructor(private hotelService:HotelsService){}


  ngOnInit(){

      this.getAllHotels();

  }
  getAllHotels(){
    
    this.hotelService.getAll().subscribe( 
                              (list)=>{ this.hotelList = list;  console.log(list)}
                              
                                );

        

}
deleteById(hotelId:number){

  this.hotelService.delete(hotelId).subscribe( (msg)=>{ console.log("Deleted "+msg);});


  this.getAllHotels(); 
}

}
