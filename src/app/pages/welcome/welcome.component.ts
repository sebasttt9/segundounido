import { Component, OnInit } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [PickerComponent, MenuComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
