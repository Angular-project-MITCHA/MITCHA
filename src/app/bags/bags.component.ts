import { Component, OnInit } from '@angular/core';
import { BagService } from '../services/bag.service';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {

  constructor(private bagServ:BagService) { }
  bags=[];
  ngOnInit() {
    this.bagServ.listBags().subscribe(data=>{
      this.bags=data;
     })
  }

}
