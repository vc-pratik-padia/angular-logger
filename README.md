## Welcome to LoggerService

Help to do better logging regardless of environment.

### Usage

Import LoggerService in your component and start logging. That's it! As simple as cook Maggi 🚀

```typescript

import { LoggerService } from 'services/logger.service';

ngOnInit() {
    LoggerService.log('Hi 🙋‍♂️, This is my first log using LoggerService 💪');
    
    this.noopService.all().subscribe({
      next: (result: boolena) {
        this.readyToGo = true;
      },
      error: (error: HttpErrorResponse) => {
        LoggerService.warn('Error while fetching list from noopservice');
        LoggerService.error(error);
      }
    });
}
```
