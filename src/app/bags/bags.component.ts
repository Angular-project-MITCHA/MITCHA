import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material'; 
import { BagService } from '../services/bag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {


  constructor(private bagServ:BagService,private router:Router) { }
  bags=[];
  totalBags=0;
  bagsPerPage=9;
  currentPage=1;   
  pageSizeOptions=[3,6,9];
  ngOnInit() {
    this.bagServ.listBags(this.bagsPerPage,this.currentPage)
    .subscribe(data=>{
      this.bags=data.cbag;
      this.totalBags=data.maxBags;

     })

  }
  onChangedPage(pageData:PageEvent){
    // console.log(pageData); 
    this.currentPage=pageData.pageIndex + 1;
    this.bagsPerPage=pageData.pageSize;
    this.bagServ.listBags(this.bagsPerPage,this.currentPage)
    .subscribe(data=>{
      this.bags=data.cbag;
      this.totalBags=data.maxBags;

     })


  }
  onSelect(bag){
    this.router.navigate(['/bagdetail',bag._id])
   console.log(bag._id);
  }

  search(name){
    this.router.navigate(['/bagsearch',name])
   console.log(name);
   
  }
  
}
