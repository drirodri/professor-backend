import { Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from '../../../app/rest/controllers/add-student-grades/create-evaluation.dto';
import { UpdateStudentStatusPortFactory } from '../../../infra/factories/ports/update-studant-status.port.factory';

@Injectable()
export class UpdateStudentStatusUsecase {
  constructor(private readonly updateStudentsStatusFactory: UpdateStudentStatusPortFactory) {}

  async execute(studentId: string, evaluationDto: CreateEvaluationDto): Promise<string> {
    const { aulas_atendidas, aulas_lecionadas, nota_p1, nota_p2 } = evaluationDto;

    // Making sure that evaluationDto are all valid numbers
    if (
      !aulas_atendidas ||
      !aulas_lecionadas ||
      !nota_p1 ||
      !nota_p2 ||
      isNaN(Number(aulas_atendidas)) ||
      isNaN(Number(aulas_lecionadas)) ||
      isNaN(Number(nota_p1)) ||
      isNaN(Number(nota_p2))
    ) {
      throw new Error('Inputs inválidos: todos os inputs devem ser números');
    }
    const updateStudentStatusAdapter = this.updateStudentsStatusFactory.getInstance();

    const newStatus = this.calculateNewStatus(evaluationDto);

    const result = await updateStudentStatusAdapter.execute({
      studentId,
      newStatus,
    });

    return result.status;
  }

  private calculateNewStatus(evaluationDto: CreateEvaluationDto): string {
    const { aulas_atendidas, aulas_lecionadas, nota_p1, nota_p2 } = evaluationDto;

    let new_status: string = '';

    const frequencia_aula = (Number(aulas_atendidas) / Number(aulas_lecionadas)) * 100;
    const media_notas = (Number(nota_p1) + Number(nota_p2)) / 2;

    if (media_notas >= 7 && frequencia_aula >= 75) {
      new_status = 'APROVADO';
    } else if (media_notas >= 5 || frequencia_aula < 75) {
      new_status = 'EM_EXAME';
    } else if (media_notas < 5) {
      new_status = 'REPROVADO';
    }

    return new_status;
  }
}
