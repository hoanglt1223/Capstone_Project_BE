import { AllExceptionFilter } from './filter/exception.filter'
import { ConfigModule } from '@nestjs/config'
import { configService } from './config/config.service'
import { Module } from '@nestjs/common'

import appConfig from '@config/app.config'
import authConfig from '@config/auth.config'
import { LoggerModule } from './logger/logger.module'
import { UserHttpModule } from './users/user-http.module'
import { AuthModule } from './auth/auth.module'
import { ValidatorModule } from '@validators/validator.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { APP_FILTER } from '@nestjs/core'
import { UserModule } from './users/user.module'
import { ProjectModule } from './projects/project.module'
import databaseConfig from '@config/database.config'
import { ProjectHttpModule } from './projects/project-http.module'
import { PaymentModule } from './payment/payment.module'
import { PaymentHttpModule } from './payment/payment-http.module'
import { TransactionHttpModule } from './transaction/transaction-http.module'
import { TransactionModule } from './transaction/transaction.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, authConfig],
    }),
    LoggerModule,
    UserHttpModule,
    UserModule,
    AuthModule,
    ValidatorModule,
    ProjectHttpModule,
    ProjectModule,
    PaymentHttpModule,
    PaymentModule,
    TransactionHttpModule,
    TransactionModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
