import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    console.log('This is Signup Request');
  }
  @Post('/login')
  login() {
    console.log('This is Login Request');
    return 'This is Login Request';
  }
}
