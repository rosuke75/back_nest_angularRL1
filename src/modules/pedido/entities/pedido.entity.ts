import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "../../cliente/entities/cliente.entity";
import { PedidoProducto } from "./pedidoproducto.entity";
@Entity('pedidos')
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string; // Nota: En un entorno real, es común usar el tipo 'Date' en TypeScript y 'datetime' en la base de datos.

  @Column()
  estado: number;

  @Column()
  observaciones: string;

  @ManyToOne(() => Cliente)
  cliente: Cliente;
  
  @OneToMany(() => PedidoProducto, (pedPro) => pedPro.pedido)
  pedidoProducto: PedidoProducto[];
}