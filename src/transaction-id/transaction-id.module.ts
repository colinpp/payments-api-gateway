import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ID_PACKAGE_NAME, I_DSERVICE_NAME } from './id.pb';
import { TransactionIdController } from './transaction-id.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: I_DSERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50053',
          package: ID_PACKAGE_NAME,
          protoPath: 'node_modules/grpc-nest-proto/proto/product.proto',
        },
      },
    ]),
  ],
  controllers: [TransactionIdController],
})
export class TransactionIdModule {}
