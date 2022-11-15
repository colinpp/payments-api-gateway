import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  IDRequest,
  IDServiceClient,
  I_DSERVICE_NAME,
  IDResponse,
} from './id.pb';
@Controller('transaction-id')
export class TransactionIdController {
  private svc: IDServiceClient;

  @Inject(I_DSERVICE_NAME)
  private readonly client: ClientGrpc;

  @Get(':id')
  private async findOne(
    @Param('id') id: IDRequest,
  ): Promise<Observable<IDResponse>> {
    return this.svc.getId(id);
  }
}
