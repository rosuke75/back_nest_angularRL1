import { Categoria } from "../../categoria/entities/categoria.entity";
//import { Categoria } from "src/modules/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";

@Entity('productos')
export class Producto {
@PrimaryGeneratedColumn()
id: number;

@Column({type:"varchar",length:250})
nombre: string;

@Column({type:"decimal",precision:10,scale:2})
precio: number;

@Column({type:"int"})
stock: number;

@Column({type:"varchar",length:250,nullable:true})
image: string;

@Column({type:"text",nullable:true})
descripción: string;

@Column({type:"boolean",default:true})
estado: boolean;

@ManyToOne(() => Categoria, (cat) => cat.productos)
categoria: Categoria;

@OneToMany(() => PedidoProducto, (pedPro) => pedPro.producto)
pedidoProducto: PedidoProducto[];

}