import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Check for a stored route (redirected from 404.html)
const storedPath = sessionStorage.getItem('redirectPath');

if (storedPath) {
  sessionStorage.removeItem('redirectPath'); // Remove it after use
  sessionStorage.removeItem('redirected'); // Allow future redirects
  history.replaceState({}, '', storedPath); // Restore correct URL
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
