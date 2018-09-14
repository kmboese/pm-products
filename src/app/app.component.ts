import { Component } from '@angular/core';

@Component({
  // Defines the component's directive name, used as a custom html tag
  selector: 'pm-root',
  // Defines the view for the component
  templateUrl: './app.component.html',
  // Defines the view styling for the component
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Shop.com';
  bodyText: string = 'Welcome to Shop.com!';
}
console.log("#angbadang.");
