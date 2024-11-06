import { ListStudentsFromClassByIdPort } from '../../../domain/ports/list-students-from-class-by-id.port';
import { CheckClassStatusInput } from './check-class-status.types';

export class CheckClassStatusUsecase {
  constructor(private readonly listStudentsFromClassByIdPort: ListStudentsFromClassByIdPort) {}

  async execute({ classId }: CheckClassStatusInput): Promise<string> {
    await this.listStudentsFromClassByIdPort.execute({
      classId,
    });

    return '';
  }
}
