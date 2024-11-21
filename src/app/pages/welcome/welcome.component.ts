import { Component, OnInit } from '@angular/core';
import { CarlosAComponent } from '../../carlos-a/carlos-a.component';
import { IconofComponent } from '../../iconof/iconof.component';
import { PickerComponent } from '../picker/picker.component';
import { SwitchBPComponent } from '../../switch-bp/switch-bp.component';
import { MenuComponent } from '../menu/menu.component';
import { WalterAlertaComponent } from '../../walter-alerta/walter-alerta.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [MenuComponent, CarlosAComponent, IconofComponent, PickerComponent, SwitchBPComponent,WalterAlertaComponent],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
