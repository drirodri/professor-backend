import { Injectable } from '@nestjs/common';
import { ListStudentsFromClassByIdPortFactory } from '../ports/list-students-from-class-by-id.port.factory';
import { CheckClassStatusUsecase } from '../../../domain/usecases/check-class-status/check-class-status.usecase';

@Injectable()
export class CheckClassStatusUsecaseFactory {
  constructor(private readonly listStudentsFromClassByIdPortFactory: ListStudentsFromClassByIdPortFactory) {}

  getInstance(): CheckClassStatusUsecase {
    return new CheckClassStatusUsecase(this.listStudentsFromClassByIdPortFactory.getInstance());
  }
}
