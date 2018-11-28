import { Component, OnInit,Input} from '@angular/core';
import { ShiftPropertyBase } from '../shift-form/shift-property-base'
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'app-shift-property',
  templateUrl: './dynamic-shift-form-property.component.html',
  styleUrls: ['./dynamic-shift-form-property.component.css']
})
export class DynamicShiftFormPropertyComponent implements OnInit {

  @Input() property: ShiftPropertyBase<any>;
  @Input() form: FormGroup;

    
  constructor() { 

  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
  }
  

}
