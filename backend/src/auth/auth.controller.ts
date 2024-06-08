import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('basic'))
  @Post('login')
  async login(@Req() req) {
    return { message: 'Login successful', user: req.user };
  }
}