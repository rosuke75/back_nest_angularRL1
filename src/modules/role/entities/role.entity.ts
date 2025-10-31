import {Column , Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import {User} from "../..//users/entities/user.entity";
//import { User } from 'src/modules/user/entities/user.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  detalle: string;

  @ManyToMany(() => User)
  @JoinTable({name: 'role_user'})// con esto ya se crea la tercera tabla 
    users: User[];
}