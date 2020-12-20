import { CardMakerComponent } from './card-maker/card-maker.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';



const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register', component:RegistrationComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'editcard/:id', component:EditCardComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'Card/:id', component:CardMakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
