import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ClothingService } from '../services/clothing.service';
import { CartService } from '../services/cart.service';
import { close } from '../clothing';


@Component({
  selector: 'app-clothingsearch',
  templateUrl: './clothingsearch.component.html',
  styleUrls: ['./clothingsearch.component.css']
})
export class ClothingsearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,
    private router:Router,private clothingServ:ClothingService) { }
  public code;
  public ID;
  public closeModel=new close("",0,"","",[""],"",0,0,0,0,"");
  public proId;
  public name;

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });

     this.clothingServ.getSearch(this.name).subscribe(data=>{
      this.closeModel=data;
      // this.ID=this.code.slice(0,9);
      console.log(this.closeModel);
    })

  }
  
  back()
  {
   this.router.navigate(['/clothing']);

  }
  onSelect(close){
    this.router.navigate(['/clothingdetails',close._id])
   console.log(close._id);
   
  }
}
