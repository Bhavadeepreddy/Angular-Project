import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {

  @Input() featureSet: any;

  feature = "Feature One"
  discription = "Some Small Feature Of The Bootstrap In Our Project"
  button = "Learn More..."
}
