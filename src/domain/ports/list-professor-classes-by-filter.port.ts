import { Action } from '../../types/action.type';
import { Class } from '../models/class.model';

export interface ListProfessorClassesByFilterPortInput {
  professorId: string;
}

export type ListProfessorClassesByFilterPortResult = Class[];

export type ListProfessorClassesByFilterPort = Action<
  ListProfessorClassesByFilterPortInput,
  Promise<ListProfessorClassesByFilterPortResult>
>;
