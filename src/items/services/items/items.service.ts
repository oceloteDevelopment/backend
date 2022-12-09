import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
    
    getAllItems():[]{
        return []
    }
    getItemById(id:number):string{
        return "hola"
    }

    createNewItem():string{
        return "hola"
    }
    editCurrentItem():string{
        return ""
    }
    
}
