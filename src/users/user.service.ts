import { Injectable } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: User) {
    //To Do
    return this.userRepository.createUser(user);
  }
}
