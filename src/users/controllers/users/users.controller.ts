import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserDto } from 'src/users/dtos/UserDto';
import { LoginUserDto } from 'src/users/dtos/LoginUserDto';

@Controller('users')
export class UsersController {
    
    @Post()
    createUser(
    @Body() user:UserDto        
    ){
        return user
    }

    @Post()
    loginUser(
        @Body() user:LoginUserDto
    ){
        
    }
    @Get(':id')
    getUser(
        @Param('id') id:number
    ){
        return id
    }
}
