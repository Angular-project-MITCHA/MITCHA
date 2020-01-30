import { Component, OnInit } from '@angular/core';
import { Jewerly } from '../jewerly';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { JewerlyService } from '../services/jewerly.service';

@Component({
  selector: 'app-jewerlysearch',
  templateUrl: './jewerlysearch.component.html',
  styleUrls: ['./jewerlysearch.component.css']
})
export class JewerlysearchComponent implements OnInit {

  constructor(private route:ActivatedRoute , private jewe:JewerlyService , private router:Router) { }
  public code;
  public ID;
  public name;
  public jewel=new Jewerly ("",0,"","",[""],"",0,0,0,0,"");
  

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.name=params.get('name');
      console.log(typeof(params.get("name")))
     });

     this.jewe.getSearch(this.name).subscribe(data=>{
      this.jewel=data;
      // this.ID=this.code.slice(0,9);
      console.log(this.jewel);
    })

  }
  back()
  {
   this.router.navigate(['/jewelry']);
  }

  onSelect(jew){
    this.router.navigate(['/jewelrydetails',jew._id])
   console.log(jew._id);
   
  }

}
