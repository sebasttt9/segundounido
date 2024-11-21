import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-mateo-l',
  standalone: true,
  imports: [FormsModule, NzButtonModule, NzCheckboxModule],
  templateUrl: './mateo-l.component.html',
  styleUrls: ['./mateo-l.component.css']
})
export class MateoLComponent {
  isCheckedButton = true;
  isDisabledButton = false;

  checkButton(): void {
    this.isCheckedButton = !this.isCheckedButton;
  }

  disableButton(): void {
    this.isDisabledButton = !this.isDisabledButton;
  }
}
