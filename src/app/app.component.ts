import { Component } from '@angular/core';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  icons = freeSet;
  title = 'portfolio';
}
