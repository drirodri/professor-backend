import { Controller, Get, Header, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { CheckClassStatusUsecaseFactory } from '../../../../infra/factories/usecases/check-class-status.usecase.factory';

@Controller()
export class CheckClassStatusController {
  constructor(private readonly usecaseFactory: CheckClassStatusUsecaseFactory) {}

  @Get('/class/:id/status')
  @HttpCode(HttpStatus.OK)
  @Header('access-control-allow-origin', '*')
  async execute(@Param('id') classId: string): Promise<string> {
    const usecase = this.usecaseFactory.getInstance();
    const status = await usecase.execute({ classId });

    return status;
  }
}
