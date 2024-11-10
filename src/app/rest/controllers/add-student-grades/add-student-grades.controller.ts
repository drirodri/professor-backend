import { UpdateStudentStatusUsecaseFactory } from '../../../../infra/factories/usecases/update-student-status.usecase.factory';
import { CreateEvaluationDto } from './create-evaluation.dto';
import { Controller, Post, HttpCode, HttpStatus, Param, Body } from '@nestjs/common';

@Controller('/students')
export class StudentsController {
  constructor(private readonly usecaseFactory: UpdateStudentStatusUsecaseFactory) {}

  @Post(':id/evaluation')
  @HttpCode(HttpStatus.OK)
  async CreateEvaluation(@Param('id') studentId: string, @Body() CreateEvaluationDto: CreateEvaluationDto) {
    const usecase = this.usecaseFactory.getInstance();
    const new_status = await usecase.execute(studentId, CreateEvaluationDto);

    return { status: new_status };
  }
}
