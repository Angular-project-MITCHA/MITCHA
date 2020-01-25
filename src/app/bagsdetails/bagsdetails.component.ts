import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Bag } from '../bag';
import { BagService } from '../services/bag.service';

@Component({
  selector: 'app-bagsdetails',
  templateUrl: './bagsdetails.component.html',
  styleUrls: ['./bagsdetails.component.css']
})
export class BagsdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private bagServ:BagService) { }
  public code;
  public ID;
  public bagModel=new Bag("",0,"","",[""],"",0,0,0,0,"");

 ngOnInit() {
  
   
     this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('_id');
      console.log(typeof(params.get("_id")))
     });

     this.bagServ.getDetails(this.code).subscribe(data=>{
      this.bagModel=data;
      this.ID=this.code.slice(0,9);
      console.log(this.bagModel);
    })

  }
  
  back()
  {
   this.router.navigate(['/bags']);

  }
  


}
