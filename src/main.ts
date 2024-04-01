import { NestFactory } from '@nestjs/core';
import { HttpStatus } from '@nestjs/common';
import { Handler } from 'aws-lambda';
import { PlanetModule } from './planets.module';
import { PlanetService } from './planets.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(PlanetModule);
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();

export const getPlanetById: Handler = async (event: any) => {
  const appContext = await NestFactory.createApplicationContext(PlanetModule);
  const appService = appContext.get(PlanetService);
  const { id } = event.pathParameters;
  try {
    const res = await appService.getPlanetById(id);
    return {
      statusCode: HttpStatus.OK,
      body: JSON.stringify(res),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: JSON.stringify(error.response ?? error.message),
    };
  }
};

export const getPlanets: Handler = async () => {
  const appContext = await NestFactory.createApplicationContext(PlanetModule);
  const appService = appContext.get(PlanetService);
  try {
    const res = await appService.getPlanets();
    return {
      statusCode: HttpStatus.OK,
      body: JSON.stringify(res),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: JSON.stringify(error.response ?? error.message),
    };
  }
};


export const savePlanet: Handler = async (event: any) => {
  const appContext = await NestFactory.createApplicationContext(PlanetModule);
  const appService = appContext.get(PlanetService);
  try {
    const res = await appService.savePlanet(JSON.parse(event.body));
    return {
      statusCode: HttpStatus.CREATED,
      body: JSON.stringify(res),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      body: JSON.stringify(error.response ?? error.message),
    };
  }
};
