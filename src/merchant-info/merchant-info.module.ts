import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MerchantInfoController } from './merchant-info.controller';
import { MERCHANT_SERVICE_NAME, MERCHANT_PACKAGE_NAME } from './merchant.pb';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MERCHANT_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: MERCHANT_PACKAGE_NAME,
          protoPath: 'node_modules/grpc-nest-proto/proto/merchant.proto',
        },
      },
    ]),
  ],
  controllers: [MerchantInfoController],
})
export class MerchantInfoModule {}
