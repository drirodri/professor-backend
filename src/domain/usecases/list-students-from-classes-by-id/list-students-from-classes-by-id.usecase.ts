import {
  ListStudentsFromClassByIdPort,
  ListStudentsFromClassByIdPortResult,
} from '../../../domain/ports/list-students-from-class-by-id.port';
import { ListStudentsFromClassByIdInput } from './list-students-from-classes-by-id.types';

export class ListStudentsFromClassByIdUsecase {
  constructor(private readonly listStudentsFromClassByIdPort: ListStudentsFromClassByIdPort) {}

  async execute({ classId }: ListStudentsFromClassByIdInput): Promise<ListStudentsFromClassByIdPortResult> {
    return await this.listStudentsFromClassByIdPort.execute({
      classId,
    });
  }
}
