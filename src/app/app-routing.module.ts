import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { RegisterFormComponent } from './users/register-form/register-form.component';
import { JewelrydetailsComponent } from './jewelrydetails/jewelrydetails.component';
import { BagsdetailsComponent } from './bagsdetails/bagsdetails.component';
import { BagsComponent } from './bags/bags.component';
import { HomeComponent } from './home/home/home.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { ClothingComponent } from './clothing/clothing.component';
import {ClothingdetailsComponent} from './clothingdetails/clothingdetails.component'
<<<<<<< HEAD
import { CartComponent } from './cart/cart.component';
=======
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
>>>>>>> a00f2df2109155397f4d9cc92944e9847a73ec80


const routes: Routes = [
  {path:'',component:HomeComponent}, 
  {path:'bags',component:BagsComponent},
  {path:'bagdetail/:_id',component:BagsdetailsComponent},
  {path:'cart/:_id',component:CartComponent}, 
  {path:'clothing',component:ClothingComponent}, 
  {path:'jewelry',component:JewelryComponent},
  {path:'jewelrydetails/:_id',component:JewelrydetailsComponent},
  {path:'user',component:UsersComponent,
  children:[{path:'login',component:LoginFormComponent},{path:'register',component:RegisterFormComponent}]},
  {path:'jewelrydetail',component:JewelrydetailsComponent},
  {path:'clothingdetails',component:ClothingdetailsComponent},
  {path:'**' ,component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
