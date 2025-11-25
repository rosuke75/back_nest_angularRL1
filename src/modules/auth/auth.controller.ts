import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        
    }

    @Post('register')
    registerUser(@Body() userObj: RegisterAuthDto) {
        console.log(userObj)
        return this.authService.funRegister(userObj); 
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto) {
        return this.authService.login(credenciales);
    }

    @UseGuards(AuthGuard('jwt')) 
    @Get('profile')
    profile(@Req() req) {
        return req.user; 
    }
}