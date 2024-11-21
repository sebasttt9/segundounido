import { Component, OnInit } from '@angular/core';
import { SwitchBPComponent } from '../../switch-bp/switch-bp.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [SwitchBPComponent],
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
