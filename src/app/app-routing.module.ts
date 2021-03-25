import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AppComponent} from './app.component';
import {ResourcesComponent} from './../app/resources/resources.component';
import {CoreFeaturesComponent} from './../app/core-features/core-features.component';
import { HomeComponent } from './home/home.component';
import { AdvancedFeaturesComponent } from './advanced-features/advanced-features.component';
const routes: Routes = [
  // {path: '', component :AppComponent}, caused double header
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app-resources', component: ResourcesComponent },
  { path: 'core-features', component: CoreFeaturesComponent },
  { path: 'advanced-features', component: AdvancedFeaturesComponent, data: {} },
  // { path: 'app-aromas', component: AromasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
