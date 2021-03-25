import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreFeaturesComponent } from './core-features/core-features.component';
import { ResourcesComponent } from './resources/resources.component';
import { HomeComponent } from './home/home.component';
import { AdvancedFeaturesComponent } from './advanced-features/advanced-features.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreFeaturesComponent,
    ResourcesComponent,
    HomeComponent,
    AdvancedFeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
