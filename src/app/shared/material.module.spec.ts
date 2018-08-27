import { Shared\materialModule } from './shared\material.module';

describe('Shared\materialModule', () => {
  let shared\materialModule: Shared\materialModule;

  beforeEach(() => {
    shared\materialModule = new Shared\materialModule();
  });

  it('should create an instance', () => {
    expect(shared\materialModule).toBeTruthy();
  });
});
