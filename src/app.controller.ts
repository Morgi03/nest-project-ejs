import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root(): { message: string; age: number; name: string } {
    return { message: 'Hello World!', age: 17, name: 'Morgi03' };
  }
}
