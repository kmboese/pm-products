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
  pageTitle: string = 'Except When Both';
  bodyText: string = 'Now this is a story all about how // my life got flipped, turned upside down // And I\'d like to take a minute, just sit right there // and I\'ll tell you how I became the prince of a town called BelAir.';
}
console.log("#angbadang.");
