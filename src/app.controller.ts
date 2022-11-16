import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root(): { message: string } {
    return { message: 'Hello World!' };
  }
}
