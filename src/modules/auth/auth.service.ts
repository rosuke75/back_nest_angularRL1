import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm/repository/Repository.js';
import { hash,compare} from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService,
                @InjectRepository(User) private userRepository:Repository<User>){} 

    async funRegister(objUser: RegisterAuthDto) {
        const {password} = objUser //capturamos solo password de todo el objeto
        //console.log("andes:",objUser)
        const plainToHash = await hash(password, 12)//para encriptar la contraseña
        //console.log(plainToHash) //imprimimos el hash

        objUser={...objUser,password:plainToHash}
        //almacenatodos los datos excepto el password que fue sacado y guarda un nuevo password
        //console.log("Despues:",objUser)

        return this.userRepository.save(objUser)//para guardar en la BDD
    }

     async login(credenciales: LoginAuthDto) {
        const {email,password}=credenciales // en este caso necestimos dos campos
        const user=await this.userRepository.findOne({
            where:{
                email:email
            }
        })
        // si no exixte el usuario lanzamos una excepcion
        if(!user) return new HttpException ("usuario no encontrado",404);

        const verificarPass = await compare (password,user.password) // compore lo impotamos manualmente
         
        if(!verificarPass) throw new HttpException("Password inválido", 401)

        let payload={email:user.email,id:user.id} 
        const token=this.jwtService.sign(payload)
        return{user:user,token:token}  
    }

    register(userObj: RegisterAuthDto) {
        return userObj; 
    }
}