import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PRODUCT_SERVICE_NAME, PRODUCT_PACKAGE_NAME } from './transaction.pb';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50054',
          package: PRODUCT_PACKAGE_NAME,
          protoPath: 'node_modules/proto/transaction.proto',
        },
      },
    ]),
  ],
  controllers: [TransactionController],
})
export class TransactionModule {}
