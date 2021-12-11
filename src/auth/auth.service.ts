import { Injectable, Inject, forwardRef } from '@nestjs/common';
import bcrypt from 'bcrypt';

import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  comparePassword(password, hash): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async validateUser(email, password) {
    const user = await this.usersService.findUser(email);

    if (user && (await this.comparePassword(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
