import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dress-code',
  imports: [NgClass],
  templateUrl: './dress-code.component.html',
  styleUrl: './dress-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DressCodeComponent {
  protected colors: string[] = ['Blaze', 'Mocha', 'Evergreen', 'Coral', 'Beige', 'Meadow'];
}
