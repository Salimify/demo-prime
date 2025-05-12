import { Component } from '@angular/core';
import {DemoButtonComponent} from "@salimify/demo-prime";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DemoButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo-prime-preview';
}
