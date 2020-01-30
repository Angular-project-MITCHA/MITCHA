import { Component, OnInit } from '@angular/core';
import { AllService } from '../services/all.service';
import { All } from '../all'
import { from } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  // public code;
  // public ID;
  // public name;
  // public allproduct=new All ("",0,"","",[""],"",0,0,0,0,"");

  constructor(private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
  //   this.route.paramMap.subscribe((params:ParamMap)=>{
  //     this.name=params.get('name');
  //     console.log(typeof(params.get("name")))
  //    });
  //    this.allproduct.(this.name).subscribe(data=>{
  //     this.allproduct=data;
  //     // this.ID=this.code.slice(0,9);
  //     console.log(this.allproduct);
  //   })

  // }
  // back()
  // {
  //  this.router.navigate(['/']);
  // }
  }
}
