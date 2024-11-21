import { Component, OnInit } from '@angular/core';
import { DiazcheckComponent } from '../../diazcheck/diazcheck.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [DiazcheckComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
