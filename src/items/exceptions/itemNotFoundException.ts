import {HttpException, HttpStatus} from "@nestjs/common"
export class itemNotFoundException extends HttpException{
    constructor(msg?:string, status?:HttpStatus){
    super(msg || "el articulo no existe en el inventario",status || HttpStatus.NOT_FOUND)
    }
} 