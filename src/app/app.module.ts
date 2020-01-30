import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { JewelryComponent } from "./jewelry/jewelry.component";
import { BagsComponent } from "./bags/bags.component";
import { UsersComponent } from "./users/users.component";
import { LoginFormComponent } from "./users/login-form/login-form.component";
import { RegisterFormComponent } from "./users/register-form/register-form.component";
import { HomeComponent } from "./home/home/home.component";
import { FooterComponent } from "./home/footer/footer.component";
import { ClothingComponent } from "./clothing/clothing.component";
import { JewelrydetailsComponent } from "./jewelrydetails/jewelrydetails.component";
import { BagsdetailsComponent } from "./bagsdetails/bagsdetails.component";
import { ClothingdetailsComponent } from "./clothingdetails/clothingdetails.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { MatPaginatorModule } from "@angular/material";
import { BagService } from "./services/bag.service";
import { JewerlyService } from "./services/jewerly.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UserService } from "./services/user.service";
 import { from } from 'rxjs';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    JewelryComponent,
    BagsComponent,
    UsersComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HomeComponent,
    FooterComponent,
    ClothingComponent,
    JewelrydetailsComponent,
    BagsdetailsComponent,
    ClothingdetailsComponent,
    PagenotfoundComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [BagService, JewerlyService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
