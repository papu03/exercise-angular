import { ShiftPropertyBase } from './shift-property-base';


export class DropdownShift extends ShiftPropertyBase<string> {
  controlType = 'dropdown';
  options: {key: number, value: string}[] = [];

  constructor(properties: {} = {}) {
    super(properties);
    this.options = properties['options'] || [];
  }
}