import { Action } from '../../types/action.type';
import { Student } from '../models/student.model';

export interface ListStudentsFromClassByIdPortInput {
  classId: string;
}

export type ListStudentsFromClassByIdPortResult = Student[];

export type ListStudentsFromClassByIdPort = Action<
  ListStudentsFromClassByIdPortInput,
  Promise<ListStudentsFromClassByIdPortResult>
>;
