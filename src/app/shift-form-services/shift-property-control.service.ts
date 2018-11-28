import { Injectable } from '@angular/core';
import { ShiftPropertyBase } from '../shift-form/shift-property-base'
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Injectable(
  {providedIn: 'root'}
)
export class ShiftPropertyControlService {

  constructor() { 
    console.log("ShiftPropertyControlService constructor")

  }

  toFormGroup(properties: ShiftPropertyBase<any>[] ) {
    let group: any = {};

    properties.forEach(property => {
      group[property.key] = property.required ? new FormControl(property.value || '', Validators.required)
                                              : new FormControl(property.value || '');
    });
    
    return new FormGroup(group);
  }
}
