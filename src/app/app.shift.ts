export class ShiftDTO{
    shiftId:number
    weekDay:string
    duration:number
    crewMemberId:number
    
}

export class Shift{
    shiftId:number
    weekDay:WeekDay
    duration:number
    crewMember:CrewMember
}

export class WeekDay{
    daysToNextWeek:number
    name:string
}

export class CrewMember{
    id:number
    name:string
}