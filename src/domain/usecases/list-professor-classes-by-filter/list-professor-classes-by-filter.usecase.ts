import {
  ListProfessorClassesByFilterPort as ListProfessorClassesByFilterPort,
  ListProfessorClassesByFilterPortResult,
} from '../../ports/list-professor-classes-by-filter.port';
import { ListProfessorClassesByFilterInput as ListProfessorClassesByFilterInput } from './list-professor-classes-by-filter.types';

export class ListProfessorClassesByFilterUsecase {
  constructor(private readonly listProfessorClassesByFilterPort: ListProfessorClassesByFilterPort) {}

  async execute({ professorId }: ListProfessorClassesByFilterInput): Promise<ListProfessorClassesByFilterPortResult> {
    return await this.listProfessorClassesByFilterPort.execute({
      professorId,
    });
  }
}
