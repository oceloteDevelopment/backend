import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    getUserById(id:number) : string{
        return `hola  usuario ${id}`
    }   
}
