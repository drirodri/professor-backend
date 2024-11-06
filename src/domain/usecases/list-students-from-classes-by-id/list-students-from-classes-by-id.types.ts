import { Student } from '../../../domain/models/student.model';

export interface ListStudentsFromClassByIdInput {
  classId: string;
}

export type ListStudentsFromClassByIdResult = Student[];
