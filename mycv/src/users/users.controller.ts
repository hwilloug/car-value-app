import { 
    Controller, 
    Post, 
    Body, 
    Get, 
    Patch, 
    Param, 
    Query, 
    Delete, 
    NotFoundException
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto.ts';
import { UsersService } from './users.service';
import { UserDto } from './dtos/user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('auth')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        return this.usersService.create(body.email, body.password)
    }

    @Serialize(UserDto)
    @Get('/:id')
    async findUser(@Param('id') id: string) {
        console.log('handler is running')
        const user = await this.usersService.findOne(parseInt(id))
        if (!user) {
            throw new NotFoundException('user not found')
        }
        return user
    }

    @Serialize(UserDto)
    @Get()
    findAllUsers(@Query('email') email: string) {
        return this.usersService.find(email)
    }

    @Serialize(UserDto)
    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.usersService.remove(parseInt(id))
    }

    @Serialize(UserDto)
    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.usersService.update(parseInt(id), body)
    }
}
