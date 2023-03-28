import { Injectable, Post } from '@nestjs/common';

@Injectable()
export class AuthService {
  signup() {}

  login() {
    console.log('Hello From the Login Service');
  }
}
