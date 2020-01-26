import { Component, OnInit } from '@angular/core';
import { JewerlyService } from '../services/jewerly.service';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css']
})
export class JewelryComponent implements OnInit {
  constructor(private jewe:JewerlyService) { }
  public jewerly=[];
  ngOnInit() {
    this.jewe.listJew().subscribe(data=>{
      this.jewerly=data;
    })
  }

}
