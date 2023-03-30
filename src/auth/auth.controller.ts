import { Body, Controller, Post, HttpCode, HttpStatus } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "../user/user.dtos";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() createUserDto: CreateUserDto) {
    console.log("In Login API");
    return this.authService.signIn(createUserDto.email, createUserDto.password);
  }

  // @Post("/login")
  // login() {
  //   console.log("This is Login Request");
  //   return "This is Login Request";
  // }
}
