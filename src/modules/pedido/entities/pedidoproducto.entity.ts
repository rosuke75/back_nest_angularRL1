
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./pedido.entity";
import { Producto } from "../../producto/entities/producto.entity"; 

@Entity('pedido_producto')
export class PedidoProducto {
  @PrimaryGeneratedColumn()
  id: number;

  // Claves foráneas (Foreign Keys)
  @Column()
  pedidoId: number;

  @Column()
  productoId: number;

  // Columna adicional para la relación Many-to-Many
  @Column()
  cantidad: number;

  // Relación ManyToOne con Pedido
  @ManyToOne(() => Pedido, (ped) => ped.pedidoProducto)
  pedido: Pedido;

  // Relación ManyToOne con Producto
  @ManyToOne(() => Producto, (pro) => pro.pedidoProducto)
  producto: Producto;
}