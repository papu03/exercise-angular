import { ShiftPropertyBase } from './shift-property-base';


export class TextboxShift extends ShiftPropertyBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(properties: {} = {}) {
    super(properties);
    this.type = properties['type'] || '';
  }
}