import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Jewerly} from '../jewerly';
import { JewerlyService } from '../services/jewerly.service';


@Component({
  selector: 'app-jewelrydetails',
  templateUrl: './jewelrydetails.component.html',
  styleUrls: ['./jewelrydetails.component.css']
})
export class JewelrydetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute , private jewe:JewerlyService , private router:Router) { }
  public code;
  public ID;
  public jewel=new Jewerly ("",0,"","",[""],"",0,0,0,0,"");
  

  ngOnInit() {
    
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('_id');
      console.log(typeof(params.get("_id")))
     });

     this.jewe.jewDetails(this.code).subscribe(data=>{
      this.jewel=data;
      this.ID=this.code.slice(0,9);
      console.log(this.jewel);
    })

  }
  
  back()
  {
   this.router.navigate(['/jewelry']);

  }
  }


