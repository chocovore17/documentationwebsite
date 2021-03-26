import { Component, OnInit } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-advanced-features',
  templateUrl: './advanced-features.component.html',
  styleUrls: ['./advanced-features.component.css']
})
export class AdvancedFeaturesComponent implements OnInit {

  constructor() { }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
  ngOnInit(): void {
  }

}
