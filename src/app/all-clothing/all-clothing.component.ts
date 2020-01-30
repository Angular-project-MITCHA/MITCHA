import { Component, OnInit } from '@angular/core';
import { ClothingService } from '../services/clothing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-clothing',
  templateUrl: './all-clothing.component.html',
  styleUrls: ['./all-clothing.component.css']
})
export class AllClothingComponent implements OnInit {

  constructor(private clothingServ:ClothingService,private router:Router) { }
  public clothing=[];
  ngOnInit() {
    this.clothingServ.listAll().subscribe(data=>{
      this.clothing=data;
    })
  }

}
