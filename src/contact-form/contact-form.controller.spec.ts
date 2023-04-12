import { Test, TestingModule } from '@nestjs/testing';
import { ContactFormController } from './contact-form.controller';

describe('ContactFormController', () => {
  let controller: ContactFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactFormController],
    }).compile();

    controller = module.get<ContactFormController>(ContactFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
