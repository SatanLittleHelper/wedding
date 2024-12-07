import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionComponent } from './components/section/section.component';

@Component({
  selector: 'app-main',
  imports: [SectionComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
