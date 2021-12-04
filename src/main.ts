import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
};

bootstrap().then(() => {
  console.log(`Server start to ${process.env.PORT} port`);
});
