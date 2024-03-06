import { GenderEnum } from './gender';

export interface IListItem {
  id: number;
  name: string;
  surname: string;
  age: number;
  sex: GenderEnum;
}
