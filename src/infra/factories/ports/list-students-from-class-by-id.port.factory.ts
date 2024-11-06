import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ListStudentsFromClassByIdMongooseAdapter } from '../../adapters/list-students-from-class-by-id/list-professor-classes-by-filter.mongoose.adapter';
import { Student, StudentDocument } from '../../../infra/schemas/student.shema';

export class ListStudentsFromClassByIdPortFactory {
  constructor(@InjectModel(Student.name) private readonly model: Model<StudentDocument>) {}

  getInstance() {
    return new ListStudentsFromClassByIdMongooseAdapter(this.model);
  }
}
