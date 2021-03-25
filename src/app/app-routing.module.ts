import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AppComponent} from './app.component';
import {ResourcesComponent} from './../app/resources/resources.component';
import {CoreFeaturesComponent} from './../app/core-features/core-features.component';
import { HomeComponent } from './home/home.component';
import { AdvancedFeaturesComponent } from './advanced-features/advanced-features.component';
import { ThreadAnalysisComponent } from './thread-analysis/thread-analysis.component';
import { TimeAnalysisComponent } from './time-analysis/time-analysis.component';
const routes: Routes = [
  // {path: '', component :AppComponent}, caused double header
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app-resources', component: ResourcesComponent },
  { path: 'core-features', component: CoreFeaturesComponent },
  { path: 'advanced-features', component: AdvancedFeaturesComponent, data: {} },
  { path: 'thread-analysis', component: ThreadAnalysisComponent },
  { path: 'time-analysis', component: TimeAnalysisComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
