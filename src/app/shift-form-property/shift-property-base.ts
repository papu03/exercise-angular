
export class ShiftPropertyBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
   
    constructor(properties: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string
      } = {}) {
      this.value = properties.value;
      this.key = properties.key || '';
      this.label = properties.label || '';
      this.required = !!properties.required;
      this.order = properties.order === undefined ? 1 : properties.order;
      this.controlType = properties.controlType || '';
    }
}