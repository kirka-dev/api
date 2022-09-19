import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BrandsModule } from './brands/brands.module';
import { CategoriesModule } from './categories/categories.module';
import { ColorsModule } from './colors/colors.module';
import { PricesModule } from './prices/prices.module';
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';
import { StoresModule } from './stores/stores.module';
import { UsersModule } from './users/users.module';
import { Brand } from './brands/brands.entity';
import { Category } from './categories/categories.entity';
import { Color } from './colors/colors.entity';
import { ContactsModule } from './contacts/contacts.module';
import { MessengersModule } from './messengers/messengers.module';
import { Price } from './prices/prices.entity';
import { Product } from './products/products.entity';
import { Role } from './roles/roles.entity';
import { Section } from './sections/sections.entity';
import { Store } from './stores/stores.entity';
import { User } from './users/users.entity';
import { SectionsModule } from './sections/sections.module';
import { Contact } from './contacts/contacts.entity';
import { Messenger } from './messengers/messengers.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dmitry',
      password: '',
      database: 'lascain',
      entities: [
        Brand,
        Category,
        Color,
        Contact,
        Messenger,
        Price,
        Product,
        Role,
        Section,
        Store,
        User,
      ],
      synchronize: true,
    }),
    AuthModule,
    BrandsModule,
    CategoriesModule,
    ColorsModule,
    ContactsModule,
    MessengersModule,
    PricesModule,
    ProductsModule,
    RolesModule,
    SectionsModule,
    StoresModule,
    UsersModule,
  ],
})
export class AppModule {}
