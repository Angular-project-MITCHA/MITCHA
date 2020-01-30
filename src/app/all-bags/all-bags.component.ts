import { Component, OnInit } from '@angular/core';
import { BagService } from '../services/bag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-bags',
  templateUrl: './all-bags.component.html',
  styleUrls: ['./all-bags.component.css']
})
export class AllBagsComponent implements OnInit {

  constructor(private bagServ:BagService,private router:Router) { }
  bags=[];
  
  ngOnInit() {
    this.bagServ.listAll().subscribe(data=>{
      this.bags=data;
    }
    )
  }
}
