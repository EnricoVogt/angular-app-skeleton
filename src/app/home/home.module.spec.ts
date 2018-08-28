import { HomeModule } from './home.module';

describe('AuthModule', () => {
  let authModule: HomeModule;

  beforeEach(() => {
    authModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(authModule).toBeTruthy();
  });
});
