import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root(): {
    message: string;
    age: number;
    name: string;
    rand: number;
    rand1: number;
    rand2: number;
    randValues: number;
  } {
    return {
      message: 'Hello World!',
      age: 17,
      name: 'Morgi03',
      rand: Math.floor(Math.random() * 13 + 1),
      rand2: Math.floor(Math.random() * 100 + 1),
      rand1: Math.floor(Math.random() * 100 + 1),
      randValues: 0,
    };
  }
}
