import { IsNotEmpty, IsNumberString, IsString, IsNumber} from "class-validator"

export class ItemDto{
    @IsNumberString()
    @IsNotEmpty()
    id:number
    
    @IsString()
    @IsNotEmpty()
    name:string

    @IsNumber()
    alerts:number
}