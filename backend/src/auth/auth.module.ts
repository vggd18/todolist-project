import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from './auth-basic.strategy';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [BasicStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
