import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public ngOnInit(): void {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      offet: 300,
      mirror: true
    });
  }
}
