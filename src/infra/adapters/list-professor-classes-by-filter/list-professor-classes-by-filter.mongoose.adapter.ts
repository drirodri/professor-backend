import { Model } from 'mongoose';
import {
  ListProfessorClassesByFilterPort,
  ListProfessorClassesByFilterPortInput,
  ListProfessorClassesByFilterPortResult,
} from '../../../domain/ports/list-professor-classes-by-filter.port';
import { ClassDocument } from '../../schemas/class.schema';

export class ListProfessorClassesByFilterMongooseAdapter implements ListProfessorClassesByFilterPort {
  constructor(private readonly ClassModel: Model<ClassDocument>) {}

  async execute({
    professorId,
  }: ListProfessorClassesByFilterPortInput): Promise<ListProfessorClassesByFilterPortResult> {
    const turmas = (await this.ClassModel.find<ClassDocument>({ professorId }).lean().exec()) as ClassDocument[];

    return this.mapClassDocumentToModel(turmas);
  }

  private mapClassDocumentToModel(classDocumentList: ClassDocument[]): ListProfessorClassesByFilterPortResult {
    return classDocumentList.map((classDocument) => ({
      code: classDocument.code,
      courseId: classDocument.courseId,
      professorId: classDocument.professorId,
      campus: classDocument.campus,
      period: classDocument.period,
      modality: classDocument.modality,
    }));
  }
}
