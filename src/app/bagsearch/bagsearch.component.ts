import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Bag } from '../bag';
import { BagService } from '../services/bag.service';

@Component({
  selector: 'app-bagsearch',
  templateUrl: './bagsearch.component.html',
  styleUrls: ['./bagsearch.component.css']
})
export class BagsearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private bagServ:BagService) { }
  public code;
  public ID;
  public name;
  public bagModel=new Bag("",0,"","",[""],"",0,0,0,0,"");

 ngOnInit() {
  
     this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });

     this.bagServ.getSearch(this.name).subscribe(data=>{
     this.bagModel=data;
    //  this.ID=this.code.slice(0,9);
      console.log(this.bagModel);
    })

  }
  
  back()
  {
   this.router.navigate(['/bags']);

  }
  onSelect(bag){
    this.router.navigate(['/bagdetail',bag._id])
   console.log(bag._id);
  }
  


}
