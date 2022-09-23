import { Capacity } from './capacity.model';

export type UnicornDTO = {
  id: number;
  name: string;
  birthyear: number;
  weight: number;
  photo: string;
  hobbies: string[];
  capacities: number[];
};

export type Unicorn = Omit<UnicornDTO, 'capacities'> & {
  capacities: Capacity[];
};
