import { NgModule } from '@angular/core';

import { HomePageComponent } from './components/home-page/home-page.component'
import { HomeRoutingModule } from './home.routing.module'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UiModule } from '../ui/ui.module'
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpClient} from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/home/', '.json');
}

@NgModule({
  imports: [
    //
    UiModule,
    HomeRoutingModule,
    TranslateModule.forChild(
      {
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        },
        isolate: false
      }
    )
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomeModule {
  constructor(private readonly translate: TranslateService) {

  }
}
