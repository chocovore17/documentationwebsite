import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { AdvancedFeaturesComponent } from './advanced-features/advanced-features.component';
import { ThreadAnalysisComponent } from './thread-analysis/thread-analysis.component';
import { TimeAnalysisComponent } from './time-analysis/time-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreFeaturesComponent,
    ResourcesComponent,
    HomeComponent,
    AdvancedFeaturesComponent,
    ThreadAnalysisComponent,
    TimeAnalysisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
