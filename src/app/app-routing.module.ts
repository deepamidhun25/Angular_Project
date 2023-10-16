import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'services',component:ServiceComponent},
  {path:'contact',component:ContactComponent },
  {path:'profile',component:ProfileComponent},
  {path:'orderitem',component:OrderItemComponent},
  {path:'pricing',component:PriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
