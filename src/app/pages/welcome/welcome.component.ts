import { Component, OnInit } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [PickerComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
