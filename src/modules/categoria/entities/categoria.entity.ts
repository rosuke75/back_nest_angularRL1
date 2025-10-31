import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  nombre: string;

  @Column()
  detalles:string;

  @OneToMany(() => Producto, (prod)=> prod.categoria)
  productos: Producto[];
}
