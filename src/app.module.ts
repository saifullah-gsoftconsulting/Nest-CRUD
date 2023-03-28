import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
// import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { BlogModule } from './blog/blog.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
