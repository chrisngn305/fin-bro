import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log('Login request received for user:', req.user.email);
    return this.authService.login(req.user);
  }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    console.log('Registration request received for email:', createUserDto.email);
    return this.authService.register(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('validate')
  async validate(@Request() req) {
    console.log('Token validation request received for user:', req.user?.email);
    if (!req.user) {
      console.error('No user found in request');
      throw new Error('No user found in request');
    }
    return { user: req.user };
  }
} 