import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './user.dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async remove(id: number) {
    const blogs = await this.findOne(id);
    return this.userRepository.remove(blogs);
  }

  async update(id: number, createUserDto: CreateUserDto) {
    const blogs = await this.userRepository.preload({
      id: +id,
      ...createUserDto,
    });
    return this.userRepository.save(blogs);
  }
}
