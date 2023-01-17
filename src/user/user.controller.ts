import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'User has been successfully created',
    type: User,
  })
  create(@Body() user: User) {
    return this.userService.save(user);
  }
}
