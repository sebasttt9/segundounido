import { Component } from '@angular/core';

import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  standalone: true,
  selector: 'app-carlos-a',
  imports: [NzBadgeModule, NzIconModule],
  templateUrl: './carlos-a.component.html',
  styleUrls: ['./carlos-a.component.css']
})
export class CarlosAComponent {}
