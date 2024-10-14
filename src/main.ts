import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'remixicon/fonts/remixicon.css'

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
