import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ProfiledataComponent } from './profiledata/profiledata.component';
import { DeleteComponent } from './delete/delete.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { OrderlistComponent } from './orderlist/orderlist.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    ServiceComponent,
    PriceComponent,
    ContactComponent,
    ProfileComponent,
    ProfiledataComponent,
    DeleteComponent,
    OrderItemComponent,
    OrderlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
