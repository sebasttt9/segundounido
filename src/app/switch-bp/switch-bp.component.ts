import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzSwitchModule } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-switch-bp',
  standalone: true,
  imports: [FormsModule, NzSwitchModule],
  templateUrl: './switch-bp.component.html'
})
export class SwitchBPComponent {
  switchValue = false;
}
