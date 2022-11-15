import { Test, TestingModule } from '@nestjs/testing';
import { MerchantInfoController } from './merchant-info.controller';

describe('MerchantInfoController', () => {
  let controller: MerchantInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchantInfoController],
    }).compile();

    controller = module.get<MerchantInfoController>(MerchantInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
