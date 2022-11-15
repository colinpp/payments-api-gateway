import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionIdModule } from './transaction-id/transaction-id.module';
import { TransactionModule } from './transaction/transaction.module';
import { MerchantInfoModule } from './merchant-info/merchant-info.module';

@Module({
  imports: [TransactionIdModule, TransactionModule, MerchantInfoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
