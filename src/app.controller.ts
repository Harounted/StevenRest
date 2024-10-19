import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:there')
  getHello(@Param('there') id: string) {
    return this.appService.getString(id);
  }
}
