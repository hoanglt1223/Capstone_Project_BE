import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"
import { createConnection } from 'typeorm'
import { User } from './model/user.entity'

createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123123123",
  database: "set2020db",
  entities: [
    User
  ],
  synchronize: true,
  logging: false
}).then(async connection => {
  let user = new User()
  user.username = "user1"
  user.password = "123abc"
  user.isInactive = false
  user.credit = 0
  user.avatarURL = ''

  let userRepo = connection.getRepository(User)
  await userRepo.save(user)
  console.log("user has been saved. user id is", user.id);
  let users = await userRepo.find();
  console.log("All User from the db: ", users);

  let [allUsers, countUsers] = await userRepo.findAndCount()
  console.log('all', allUsers, 'count', countUsers)
}).catch(error => console.log(error));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('User API')
    .setDescription('My User API')
    .build());

  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
