import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // This should work for Docker
      port: 5432,
      username: 'postgres', // Default PostgreSQL username
      password: 'postgres', // Password you set in the Docker command
      database: 'postgres', // Default database name in PostgreSQL, you can create a new one if needed
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
