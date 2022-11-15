import { Test, TestingModule } from '@nestjs/testing';
import { TransactionIdController } from './transaction-id.controller';

describe('TransactionIdController', () => {
  let controller: TransactionIdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionIdController],
    }).compile();

    controller = module.get<TransactionIdController>(TransactionIdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
