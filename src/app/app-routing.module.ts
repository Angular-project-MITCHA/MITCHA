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
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BagsearchComponent } from './bagsearch/bagsearch.component';
import { JewerlysearchComponent } from './jewerlysearch/jewerlysearch.component';
import { ADMINComponent } from './admin/admin.component';
import { AllBagsComponent } from './all-bags/all-bags.component';
import { AllClothingComponent } from './all-clothing/all-clothing.component';
import { AllJewleryComponent } from './all-jewlery/all-jewlery.component';


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
  {path:'bagsearch/:name',component:BagsearchComponent},
  {path:'jewerlysearch/:name',component:JewerlysearchComponent},
  {path:'clothingdetails/:_id',component:ClothingdetailsComponent},
  
  {path:'admin',component:ADMINComponent,
  children:[{path:'allBags',component:AllBagsComponent},
  {path:'allClothing',component:AllClothingComponent},
  {path:'allJewlry',component:AllJewleryComponent}
]},
  {path:'**' ,component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
