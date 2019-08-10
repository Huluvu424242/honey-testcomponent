import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {HoneySlideshowModule} from './app/slideshow/honey-slideshow.module';
import {environment} from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(HoneySlideshowModule);






