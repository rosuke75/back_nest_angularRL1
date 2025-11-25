import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({type:"varchar", length:50})
  nombre: string;

  @Column({type:"text", nullable:true})// con esto permitimos que el campo sea nulo
  detalles:string;

  @OneToMany(() => Producto, (prod)=> prod.categoria)
  productos: Producto[];
}
