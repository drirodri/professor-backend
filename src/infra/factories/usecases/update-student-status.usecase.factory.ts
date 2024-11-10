import { Injectable } from '@nestjs/common';
import { UpdateStudentStatusUsecase } from '../../../domain/usecases/update-student-status/update-student-status.usecase';
import { UpdateStudentStatusPortFactory } from '../ports/update-studant-status.port.factory';

@Injectable()
export class UpdateStudentStatusUsecaseFactory {
  constructor(private readonly updateStudentStatusPortFactory: UpdateStudentStatusPortFactory) {}

  getInstance(): UpdateStudentStatusUsecase {
    return new UpdateStudentStatusUsecase(this.updateStudentStatusPortFactory);
  }
}
