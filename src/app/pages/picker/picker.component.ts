import { Component } from '@angular/core';

import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

@Component({
  selector: 'app-picker',
  standalone: true,
  imports: [NzColorPickerModule],
  templateUrl: './picker.component.html'
})
export class PickerComponent {}
