import { GenderEnum } from './interfaces/gender';
import { IListItem } from './interfaces/listItem.interface';

export const mockData: IListItem[] = [
  { id: 1, name: 'Anna', surname: 'Karenina', age: 25, sex: GenderEnum.female },
  { id: 2, name: 'Pierre', surname: 'Bezukhov', age: 27, sex: GenderEnum.male },
  {
    id: 3,
    name: 'Jack',
    surname: 'Daniels',
    age: 12,
    sex: GenderEnum.undefined,
  },
  {
    id: 4,
    name: 'Gendalf',
    surname: 'Gray',
    age: Infinity,
    sex: GenderEnum.male,
  },
];
