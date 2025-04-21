import { Component, signal } from '@angular/core';
import { HeaderComponent } from './component/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent],
  template: `
  <app-header />
  <main>
     <router-outlet />
</main>
  `,
  styles: [`
    main{
      padding:16px;
    }
    `],
})
export class AppComponent {
  title = signal('first-ng-app');
}
