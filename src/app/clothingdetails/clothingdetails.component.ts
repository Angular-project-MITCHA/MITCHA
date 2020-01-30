import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { close } from '../clothing';
import { ClothingService } from '../services/clothing.service';

@Component({
  selector: 'app-clothingdetails',
  templateUrl: './clothingdetails.component.html',
  styleUrls: ['./clothingdetails.component.css']
})
export class ClothingdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private clothingServ:ClothingService) { }
  public code;
  public ID;
  public closeModel=new close("",0,"","",[""],"",0,0,0,0,"");

 ngOnInit() {
  
   
     this.route.paramMap.subscribe((params:ParamMap)=>{
      this.code=params.get('_id');
      console.log(typeof(params.get("_id")))
     });

     this.clothingServ.getDetails(this.code).subscribe(data=>{
      this.closeModel=data;
      this.ID=this.code.slice(0,9);
      console.log(this.closeModel);
    })

  }
  
  back()
  {
   this.router.navigate(['/clothing']);

  }
  


}
