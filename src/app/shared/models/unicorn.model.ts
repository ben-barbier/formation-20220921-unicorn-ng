import { Capacity } from './capacity.model';

export interface UnicornDTO {
  id: number;
  name: string;
  birthyear: number;
  weight: number;
  photo: string;
  hobbies: string[];
  capacities: number[];
}

export type UnicornWithCapacities = Omit<UnicornDTO, 'capacities'> & {
  capacities: Capacity[];
};
