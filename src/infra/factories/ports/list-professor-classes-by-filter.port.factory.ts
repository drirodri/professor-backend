import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from '../../../domain/models/class.model';
import { ListProfessorClassesByFilterMongooseAdapter } from '../../adapters/list-professor-classes-by-filter/list-professor-classes-by-filter.mongoose.adapter';
import { ClassDocument } from '../../schemas/class.schema';

export class ListProfessorClassesByFilterPortFactory {
  constructor(@InjectModel(Class.name) private readonly model: Model<ClassDocument>) {}

  getInstance() {
    return new ListProfessorClassesByFilterMongooseAdapter(this.model);
  }
}
