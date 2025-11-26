import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { DatabaseModule } from './database/database.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PersonaModule } from './modules/persona/persona.module';

import { RoleModule } from './modules/role/role.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { ProductoModule } from './modules/producto/producto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`

    }),
    AuthModule, 
    UsersModule, 
    DatabaseModule, CategoriaModule, PersonaModule, PedidoModule, RoleModule, ClienteModule, PedidoModule,ProductoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}