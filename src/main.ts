import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import '@fortawesome/fontawesome-free/css/all.css';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
