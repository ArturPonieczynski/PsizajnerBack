import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
  })
  surname: string;

  @Column({
    length: 50,
  })
  email: string;

  @Column()
  street: string;

  @Column({
    length: 88,
  })
  city: string;

  @Column({
    length: 22,
  })
  country: string;

  @Column()
  passwordHash: string;

  @Column({
    nullable: true,
    default: null,
  })
  currentTokenId: string | null;

  // @OneToMany((type) => ItemInBasket, (entity) => entity.user)
  // itemsInBasket: ItemInBasket[];
}
