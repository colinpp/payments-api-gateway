import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  GetMerchantResponse,
  MerchantServiceClient,
  MERCHANT_SERVICE_NAME,
} from './merchant.pb';

@Controller('merchant-info')
export class MerchantInfoController {
  private svc: MerchantServiceClient;

  @Inject(MERCHANT_SERVICE_NAME)
  private readonly client: ClientGrpc;

  @Get(':id')
  private async getMerchant(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Observable<GetMerchantResponse>> {
    return this.svc.getMerchant({ id });
  }
}
