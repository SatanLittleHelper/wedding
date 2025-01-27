import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Timing {
  icon: string;
  time: string;
  name: string;
}
@Component({
  selector: 'app-timing',
  imports: [],
  templateUrl: './timing.component.html',
  styleUrl: './timing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimingComponent {
  timings = input<Timing[]>([]);

  protected getIconPath(icon: string): string {
    return `assets/icons/${icon}.svg`;
  }
}
