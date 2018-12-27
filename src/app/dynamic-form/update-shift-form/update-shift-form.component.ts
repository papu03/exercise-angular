import { Component, OnInit,Input } from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { Location } from '@angular/common';
import { ShiftPropertyControlService } from 'src/app/shift-form-services/shift-property-control.service';
import { Shift, CrewMember, ShiftDTO } from 'src/app/app.shift';
import { ShiftPropertyBase } from '../shift-form-property/shift-property-base';
import { DropdownShift } from '../shift-form-property/shift-dropdown';
import { CrewMemberService } from 'src/app/shift-form-services/crew-member.service';
import { ShiftService } from 'src/app/shift-form-services/shift.service';
import { ShiftPropertyService } from 'src/app/shift-form-services/shift-property.service';

@Component({
  selector: 'app-update-shift-form',
  templateUrl: './update-shift-form.component.html',
  styleUrls: ['./update-shift-form.component.css'],
  providers: [ ShiftPropertyControlService ]
})
export class UpdateShiftFormComponent implements OnInit {

  @Input() shift:Shift

  members:CrewMember[]
  properties: ShiftPropertyBase<any>[] = [];

  form: FormGroup;
  JSONMembers :  DropdownShift
  validUpdate: boolean

  constructor(private spcs: ShiftPropertyControlService,
              private crewMemberService:CrewMemberService, 
              private shiftService:ShiftService,
              private location: Location,
              private shiftPropertyService: ShiftPropertyService ) {
  }

  ngOnInit() {

    this.properties=this.shiftPropertyService.getProperty()
    this.form = this.spcs.toFormGroup(this.properties)
    this.validUpdate=false
    
    this.crewMemberService.getMembers().subscribe(

      members => {
        
        this.members=members

        for (let member of this.members){

            this.JSONMembers=this.properties.filter(idx=>idx.key=="crewMember")[0] as DropdownShift
            this.JSONMembers.options.push({key:member.id,value:member.name})

        }
        this.form.get('duration').setValue(this.shift.duration)
        this.form.get('crewMember').setValue(this.shift.crewMember.id)
        this.form.get('weekday').setValue(this.shift.weekDay.name)
        this.form.disable()

        
      })
  

    // this.logNameChange();
  }
 
  logNameChange() {
    const nameControl = this.form.get('duration');
    nameControl.valueChanges.forEach(
      (value: string) => console.log(value)
    );
  }


  goBack(): void {
    this.location.back();
  }

  ngOnDestroy(){
  }

  toChangeEnable(){

    if(this.form.enabled){
      this.form.disable()
      document.getElementById('toChangeEnable').textContent="Enable Update"
      this.validUpdate=false
    }else{
      this.form.enable()
      document.getElementById('toChangeEnable').textContent="Disable Update"
      document.getElementById('update')
      this.validUpdate=true

    }
  }

  updateShift(){

    this.shiftService.updateShift( this.shift.shiftId ,
                                    {weekDay:this.form.value.weekday as string,
                                    duration:this.form.value.duration as number,
                                    crewMemberId:this.form.value.crewMember as number} as ShiftDTO).subscribe(() => this.goBack());


  }
  

 




}

