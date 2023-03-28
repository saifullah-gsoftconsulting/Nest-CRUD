import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './user.dtos';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Get('id/:id')
  findUsersById(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Post('create')
  createUsers(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Delete('id/:id')
  delete(@Param('id') id: number) {
    return this.userService.remove(id);
  }

  @Patch('id/:id')
  update(@Param('id') id: number, @Body() createUserDto: CreateUserDto) {
    return this.userService.update(id, createUserDto);
  }
}
