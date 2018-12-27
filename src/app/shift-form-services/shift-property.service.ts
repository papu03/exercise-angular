import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CrewMember} from '../app.shift';
import { Observable, of } from 'rxjs';
import { CrewMemberService } from './crew-member.service';
import { Shift } from '../app.shift';
import { ShiftPropertyBase } from '../dynamic-form/shift-form-property/shift-property-base';
import { DropdownShift } from '../dynamic-form/shift-form-property/shift-dropdown';
import { TextboxShift } from '../dynamic-form/shift-form-property/shift-textbox';

@Injectable({
  providedIn: 'root'
})
export class ShiftPropertyService {

  members: CrewMember[]=[]
  properties: ShiftPropertyBase<any>[]=[]

  constructor(private crewMemberService:CrewMemberService) { 
    console.log("ShiftPropertyService constructor")
  }

  getProperty(){
      let properties: ShiftPropertyBase<any>[] = [

          new DropdownShift({
            key: 'crewMember',
            label: 'Crew Member name',
            options: [],
            order:1,
            required: true,
          }),

          new TextboxShift({
            key: 'duration',
            label: 'Duration',
            value: '1',
            required: true,
            order: 3
          }),

          new DropdownShift({
            key: 'weekday',
            label: 'Week day',
            options: [
              {key: "Monday", value: 'Monday'},
              {key: "Tuesday", value: 'Tuesday'},
              {key: "Wednesday", value: 'Wednesday'},
              {key: "Thursday", value: 'Thursday'},
              {key: "Friday", value: 'Friday'},
              {key: "Saturday", value: 'Saturday'},
              {key: "Sunday", value: 'Sunday'},
            ],
            required: true,
            order: 2
          }),

      ]

    this.properties=properties.sort((a, b) => a.order - b.order)
    return this.properties;
  
  }


}
