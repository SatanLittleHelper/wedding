import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tuiDialog } from '@taiga-ui/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Timing, TimingComponent } from '../../components/timing/timing.component';
import { DressCodeComponent } from '../../components/dress-code/dress-code.component';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, TimingComponent, DressCodeComponent],
})
export class MainComponent {
  protected timings: Timing[] = [
    {
      name: 'сбор гостей',
      icon: 'cocktail',
      time: '15:00',
    },
    {
      name: 'церемония',
      icon: 'rings',
      time: '16:00',
    },
    {
      name: 'банкет',
      icon: 'food',
      time: '17:00',
    },
    {
      name: 'торт',
      icon: 'cake',
      time: '21:30',
    },
    {
      name: 'Завершение торжества',
      icon: 'party',
      time: '23:00',
    },
  ];
  private readonly dialog = tuiDialog(ConfirmDialogComponent, {
    size: 'page',
    closeable: true,
    dismissible: true,
  });

  protected showDialog(): void {
    this.dialog().subscribe();
  }

  protected openMap(event: MouseEvent): void {
    event.preventDefault();

    const fallback = 'https://yandex.ru/navi?rtext=55.759274,37.404824~55.375934,35.854115&rtt=auto';
    window.open(fallback, '_blank');
  }
}
