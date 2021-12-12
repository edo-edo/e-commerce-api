import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  comparePassword(password, hash): Promise<boolean> {
    return compare(password, hash);
  }

  async validateUser(email, password) {
    const user = await this.usersService.findUser(email);

    if (user && (await this.comparePassword(password, user.password))) {
      return {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
      };
    }
    return null;
  }

  async login(user) {
    const payload = { sub: user.id };
    return {
      userName: user.userName,
      access_token: this.jwtService.sign(payload),
    };
  }
}
