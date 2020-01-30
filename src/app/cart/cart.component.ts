import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart=[];
  constructor(private cartserv:CartService,private router:Router) { }

  ngOnInit() {
    this.cartserv.getCart().subscribe(data =>{
      this.cart=data;
      console.log(typeof(data));
      console.log(data)

    })
  }

}
