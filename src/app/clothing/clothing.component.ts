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
  totalBags=0;
  bagsPerPage=9;
  currentPage=1;   
  pageSizeOptions=[3,6,9];
  ngOnInit() {
    this.clothingServ.listclothing(this.bagsPerPage,this.currentPage).subscribe(data=>{
      this.clothing=data;
      this.totalBags=data.maxBags;
    })
  }
  onChangedPage (pageData:PageEvent){
    // console.log(pageData); 
    this.currentPage=pageData.pageIndex + 1;
    this.bagsPerPage=pageData.pageSize;
    this.clothingServ.listclothing(this.bagsPerPage,this.currentPage).subscribe(data=>{
      this.clothing=data;
      this.totalBags=data.maxBags;
    })


  }
  onSelect(close){
    this.router.navigate(['/clothingdetails',close._id])
   console.log(close._id);
   
  }

}