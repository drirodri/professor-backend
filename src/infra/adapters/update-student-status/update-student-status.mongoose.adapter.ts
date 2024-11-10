import { Model } from 'mongoose';
import {
  UpdateStudentStatusPort,
  UpdateStudentStatusPortInput,
  UpdateStudentStatusPortResult,
} from '../../../domain/ports/update-student-status.port';
import { StudentDocument } from '../../../infra/schemas/student.shema';

export class UpdateStudentStatusMongooseAdapter implements UpdateStudentStatusPort {
  constructor(private readonly StudentModel: Model<StudentDocument>) {}

  async execute({ studentId, newStatus }: UpdateStudentStatusPortInput): Promise<UpdateStudentStatusPortResult> {
    // changed findByIdAndUpdate since the project uses a custom id in the schema
    const updatedStudent = (await this.StudentModel.findOneAndUpdate(
      { id: studentId },
      { status: newStatus },
      { new: true },
    )
      .lean()
      .exec()) as StudentDocument | null;

    if (!updatedStudent) {
      throw new Error('Student not found');
    }

    return this.mapStudentToModel(updatedStudent);
  }

  private mapStudentToModel(student: StudentDocument): UpdateStudentStatusPortResult {
    return {
      id: student.id,
      name: student.name,
      status: student.status,
      classCodeList: student.classCodeList.map((classId) => classId.toString()),
    };
  }
}
