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
  clothing=[];
  totalclothing=0;
  clothingPerPage=9;
  currentPage=1;   
  pageSizeOptions=[3,6,9];
  ngOnInit() {
    this.clothingServ.listclothing(this.clothingPerPage,this.currentPage)
    .subscribe(data=>{
      this.clothing=data.cbag;
      this.totalclothing=data.maxclothing;

     })

  }
  onChangedPage(pageData:PageEvent){
    
    this.currentPage=pageData.pageIndex + 1;
    this.clothingPerPage=pageData.pageSize;
    this.clothingServ.listclothing(this.clothingPerPage,this.currentPage)
    .subscribe(data=>{
      this.clothing=data.cclothing;
      this.totalclothing=data.maxclothing;

     })


  }
  onSelect(close){
    this.router.navigate(['/clothingdetails',close._id])
   console.log(close._id);
   
  }
  

}
