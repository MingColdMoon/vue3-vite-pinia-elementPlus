export interface FROM_CONFIG {
  propName: string;
  labelWidth: string;
  type: string;
  label: string;
  placeHolder: string;
  slotName?: string;
}

export interface TABLE_CONFIG {
  prop: string;
  label: string;
  width: string;
  [slotName: string]: string;
}

export interface OBJECT_RESET {
  [xx: string]: string
}
