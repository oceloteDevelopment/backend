import { Controller, Get,Post, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { ItemDto } from 'src/items/dtos/ItemDto';
import { itemNotFoundException } from 'src/items/exceptions/ItemNotFoundException';
const items = [1,2,3,4]

@Controller('items')
export class ItemsController {
    @Get()
    getItems(){
        return "goods"
    }
    
    @Get(':id')
    getItem(@Param('id', ParseIntPipe) id:number):string{
        const array = items.map((id) => items)
        if(array.length >= 1){
            throw new itemNotFoundException()
            
        }
        else{

        console.log("estos items", items)
        return `this is a the Item ${id}`
        }
    }
    @Post()
    createItem(
        @Body() item :ItemDto 
    ){
        return { data:`el item es ${item.name} este dia  hay ${item.alerts} intento de robo`}
    }
    @Patch(':id')
    editItem(
        @Param('id', ParseIntPipe) id:number,
        @Body() item:ItemDto
    ): string{
        return "change good"
    }
    
}
