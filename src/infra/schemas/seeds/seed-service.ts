/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Class } from '../class.schema';
import { Student } from '../student.shema';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Class.name) private readonly turmaProfessorModel: Model<Class>,
    @InjectModel(Student.name) private readonly studentModel: Model<Student>,
  ) {}

  async seed() {
    const turmas = [
      {
        code: 'TURMA001',
        courseId: 'DISC001',
        professorId: 'PROF001',
        campus: 'Campus Central',
        period: '2023.1',
        modality: 'Presencial',
      },
      {
        code: 'TURMA002',
        courseId: 'DISC002',
        professorId: 'PROF001',
        campus: 'Campus Central',
        period: '2023.1',
        modality: 'Presencial',
      },
      {
        code: 'TURMA003',
        courseId: 'DISC003',
        professorId: 'PROF001',
        campus: 'Campus Central',
        period: '2023.1',
        modality: 'Presencial',
      },
    ];

    const students = [
      { name: 'Albert Einstein', id: 'STU001', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA002'] },
      { name: 'Marie Curie', id: 'STU002', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Isaac Newton', id: 'STU003', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Nikola Tesla', id: 'STU004', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA003'] },
      { name: 'Galileo Galilei', id: 'STU005', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Leonardo da Vinci', id: 'STU006', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA002'] },
      { name: 'Ada Lovelace', id: 'STU007', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Charles Darwin', id: 'STU008', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Stephen Hawking', id: 'STU009', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA001'] },
      { name: 'Bill Gates', id: 'STU010', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Thomas Edison', id: 'STU011', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA003'] },
      { name: 'Alexander Graham Bell', id: 'STU012', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Benjamin Franklin', id: 'STU013', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA003'] },
      { name: 'Marie Antoinette', id: 'STU014', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Pablo Picasso', id: 'STU015', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA001'] },
      { name: 'Wright Brothers', id: 'STU016', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA002'] },
      { name: 'Frida Kahlo', id: 'STU017', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA002'] },
      { name: 'Mahatma Gandhi', id: 'STU018', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA003'] },
      { name: 'Vincent van Gogh', id: 'STU019', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA001'] },
      { name: 'Nelson Mandela', id: 'STU020', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA002'] },
      { name: 'Martin Luther King Jr.', id: 'STU021', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA002'] },
      { name: 'Abraham Lincoln', id: 'STU022', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Helen Keller', id: 'STU023', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Walt Disney', id: 'STU024', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Cleopatra', id: 'STU025', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Mark Zuckerberg', id: 'STU026', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Beyoncé', id: 'STU027', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA003'] },
      { name: 'Bruce Lee', id: 'STU028', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Angelina Jolie', id: 'STU029', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Rihanna', id: 'STU030', status: 'NAO_AVALIADO', classCodeList: ['TURMA001', 'TURMA003'] },
      { name: 'Billie Eilish', id: 'STU031', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Meryl Streep', id: 'STU032', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Dwayne Johnson', id: 'STU033', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'David Beckham', id: 'STU034', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Kylie Jenner', id: 'STU035', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Tom Hanks', id: 'STU036', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
      { name: 'Taylor Swift', id: 'STU037', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA002'] },
      { name: 'Oprah Winfrey', id: 'STU038', status: 'NAO_AVALIADO', classCodeList: ['TURMA002', 'TURMA003'] },
      { name: 'Serena Williams', id: 'STU039', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA002'] },
      { name: 'Emma Watson', id: 'STU040', status: 'NAO_AVALIADO', classCodeList: ['TURMA003', 'TURMA001'] },
    ];

    await this.turmaProfessorModel.deleteMany({});
    await this.turmaProfessorModel.insertMany(turmas);

    await this.studentModel.deleteMany({});
    await this.studentModel.insertMany(students);

    console.log('Coleção turmaProfessor seeded com sucesso!');
    console.log('Coleção student seeded com sucesso!');
  }
}
