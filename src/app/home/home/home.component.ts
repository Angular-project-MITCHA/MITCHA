import { Component, OnInit } from '@angular/core';
import { BagService } from 'src/app/services/bag.service';
import { ClothingService } from 'src/app/services/clothing.service';
import { JewerlyService } from 'src/app/services/jewerly.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bagServ:BagService,private clothingServ:ClothingService,private jwlServ:JewerlyService,private router:Router) { }
  bags=[];
  clothing=[];
  jewerly=[];
  ngOnInit() {
    this.bagServ.randomBags().subscribe(data=>{
    this.bags=data

     });

     this.clothingServ.randomclothing().subscribe(data=>{
      this.clothing=data;
  
       });

       this.jwlServ.randomjwl().subscribe(data=>{
        this.jewerly=data;
    
         });


  }

  onSelectBag(bag){
    this.router.navigate(['/bagdetail',bag._id])
   console.log(bag._id);
   
  }

  onSelectClothing(close){
    this.router.navigate(['/clothingdetails',close._id])
    
    
   }

   onSelectJwl(jew){
    this.router.navigate(['/jewelrydetails',jew._id])
   console.log(jew._id);
   
  }

}
