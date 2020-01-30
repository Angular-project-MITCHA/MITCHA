import { Component, OnInit } from '@angular/core';
import { JewerlyService } from '../services/jewerly.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-jewlery',
  templateUrl: './all-jewlery.component.html',
  styleUrls: ['./all-jewlery.component.css']
})
export class AllJewleryComponent implements OnInit {
  public jewerly=[];
  constructor(private jewe:JewerlyService, private router:Router) { }

  ngOnInit() {
    this.jewe.listAll().subscribe(data=>{
      this.jewerly=data;
    })
  }


}
