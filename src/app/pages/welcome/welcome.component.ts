import { Component, OnInit } from '@angular/core';
import { PickerComponent } from '../picker/picker.component';
import { MenuComponent } from "../menu/menu.component";
import { CarlosAComponent } from '../../carlos-a/carlos-a.component';
import { IconofComponent } from '../../iconof/iconof.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [PickerComponent, MenuComponent, CarlosAComponent,IconofComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
