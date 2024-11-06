import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ versionKey: false, autoCreate: true, autoIndex: true, collection: 'class' })
export class Class {
  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ required: true })
  courseId: string;

  @Prop({ required: true })
  professorId: string;

  @Prop({ required: true })
  campus: string;

  @Prop({ required: true })
  period: string;

  @Prop({ required: true })
  modality: string;
}

export type ClassDocument = HydratedDocument<Class>;
export const ClassSchema = SchemaFactory.createForClass(Class);

ClassSchema.index({ code: 1, courseId: 1, professorId: 1 });
