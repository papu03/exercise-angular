import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ShiftDTO } from 'src/app/app.shift';
import { ShiftService } from 'src/app/shift-form-services/shift.service';

@Component({
  selector: 'app-member-shifts',
  templateUrl: './member-shifts.component.html',
  styleUrls: ['./member-shifts.component.css']
})
export class MemberShiftsComponent implements OnInit {

  memberShifts: ShiftDTO[]=[]

  constructor(private route: ActivatedRoute, 
              private shiftService:ShiftService,
              private location: Location) { }

  ngOnInit() {
    this.getMemberShifts()
  }

  getMemberShifts(): void {
    const id = +this.route.snapshot.paramMap.get('memberId');
    this.shiftService.getShiftsFromMember(id)
      .subscribe(memberShifts => {
        this.memberShifts = memberShifts
        
      });
  }

  deleteAllShift():void{
    this.memberShifts=[]
    const id = +this.route.snapshot.paramMap.get('memberId');

    this.shiftService.deleteAllShiftOfMember(id).subscribe(_ => {
      this.goBack()
      
    });
  }

  goBack(): void {
    this.location.back();
  }

}
