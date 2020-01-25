import { Component, OnInit } from '@angular/core';
import { BagService } from '../services/bag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {

  constructor(private bagServ:BagService,private router :Router) { }
 public bags:[];
 
  ngOnInit() {
    this.bagServ.listBags().subscribe(data=>{
      this.bags=data;
      
     })
  }
  onSelect(bag){
    this.router.navigate(['/bagdetail',bag._id])
  }
  

}
