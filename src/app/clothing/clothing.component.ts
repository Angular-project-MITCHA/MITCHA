import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material'; 
import { ClothingService } from '../services/clothing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {


  constructor(private clothingServ:ClothingService,private router:Router) { }
  public clothing=[]; 
  pageSizeOptions=[3,6,9];
  ngOnInit() {
    this.clothingServ.listAll().subscribe(data=>{
      this.clothing=data;
    })
  }
  
  onSelect(close){
    this.router.navigate(['/clothingdetails',close._id])
   console.log(close._id);
   
  }
  search(name){
    this.router.navigate(['/clothingsearch',name])
   console.log(name);
   
  }

}
