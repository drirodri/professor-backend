import {
  ListStudentsFromClassByIdPort,
  ListStudentsFromClassByIdPortResult,
} from '../../../domain/ports/list-students-from-class-by-id.port';
import { CheckClassStatusInput } from './check-class-status.types';

export class CheckClassStatusUsecase {
  constructor(private readonly listStudentsFromClassByIdPort: ListStudentsFromClassByIdPort) {}

  async execute({ classId }: CheckClassStatusInput): Promise<string> {
    const students = await this.listStudentsFromClassByIdPort.execute({
      classId,
    });
    const classStatus = this.calculateClassStatus(students);

    return classStatus;
  }

  private calculateClassStatus(students: ListStudentsFromClassByIdPortResult): string {
    let status: string = '';

    if (students.every((student) => student.status === 'NAO_AVALIADO')) {
      status = 'ABERTA';
    } else if (students.every((student) => student.status !== 'NAO_AVALIADO')) {
      status = 'FECHADA';
    } else if (students.some((student) => student.status !== 'NAO_AVALIADO')) {
      status = 'EM_FECHAMENTO';
    }

    return status;
  }
}
