import { Component } from '@angular/core';
import { } from './shift.service'
import {ShiftPropertyService} from './shift-form-services/shift-property.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'ICARO XT';

  constructor() {
    console.log("AppComponent constructor")
    }

}
