import { Categoria } from "../../categoria/entities/categoria.entity";
//import { Categoria } from "src/modules/categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";

@Entity('productos')
export class Producto {
@PrimaryGeneratedColumn()
id: number;

@Column()
nombre: string;

@Column()
precio: number;

@Column()
stock: number;

@Column()
image: string;

@Column()
descripción: string;

@Column()
estado: boolean;

@ManyToOne(() => Categoria, (cat) => cat.productos)
categoria: Categoria;

@OneToMany(() => PedidoProducto, (pedPro) => pedPro.producto)
pedidoProducto: PedidoProducto[];

}