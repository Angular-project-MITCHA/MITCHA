import { Component, OnInit } from '@angular/core';
import { JewerlyService } from '../services/jewerly.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css']
})
export class JewelryComponent implements OnInit {
  constructor(private jewe:JewerlyService, private router:Router) { }
  public jewerly=[];
  totalBags=0;
  bagsPerPage=9;
  currentPage=1;   
  pageSizeOptions=[3,6,9];
  ngOnInit() {
    this.jewe.listJew(this.bagsPerPage,this.currentPage).subscribe(data=>{
      this.jewerly=data;
      this.totalBags=data.maxBags;
    })
  }
  onChangedPage (pageData:PageEvent){
    // console.log(pageData); 
    this.currentPage=pageData.pageIndex + 1;
    this.bagsPerPage=pageData.pageSize;
    this.jewe.listJew(this.bagsPerPage,this.currentPage).subscribe(data=>{
      this.jewerly=data;
      this.totalBags=data.maxBags;
    })


  }
  onSelect(jew){
    this.router.navigate(['/jewelrydetails',jew._id])
   console.log(jew._id);
   
  }

}
