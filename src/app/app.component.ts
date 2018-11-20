import { Component } from '@angular/core';
import { } from './shift.service'
import {ShiftPropertyService} from './shift-form-services/shift-property.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
    <div>
      <h1>{{title}}</h1>
      <nav>
          <a routerLink="/dashboard">Dashboard</a>
          <a routerLink="/add-shift" >Add shift</a>
      </nav>
      <!--<app-dynamic-shift-form></app-dynamic-shift-form>-->
      <router-outlet></router-outlet>
    </div>
  `,
  

})
export class AppComponent {
  title = 'ICARO XT';

  constructor() {
    console.log("AppComponent constructor")
    }

}
