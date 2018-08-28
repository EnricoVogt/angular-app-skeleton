import { MatUiModule } from './mat-ui.module';

describe('MatUiModule', () => {
  let matUiModule: MatUiModule;

  beforeEach(() => {
    matUiModule = new MatUiModule();
  });

  it('should create an instance', () => {
    expect(matUiModule).toBeTruthy();
  });
});
