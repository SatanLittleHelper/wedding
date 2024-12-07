import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionComponent {
  title = input<string>();
  subTitle = input<string>();
}
