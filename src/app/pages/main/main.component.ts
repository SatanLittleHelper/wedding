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

  private get location(): string[] {
    return ['55.376623', '35.857011'];
  }

  protected openYandexNav(event: MouseEvent): void {
    const [lat, lng] = this.location;
    event.preventDefault();

    const navigatorLink = `yandexnavi://build_route_on_map?lat_to=${lat}&lon_to=${lng}`;
    const mapsUrl = `https://yandex.ru/maps/?rtext=~${lat},${lng}&rtt=auto`;

    const hiddenBefore = document.hidden;

    window.location.href = navigatorLink;

    setTimeout(() => {
      if (!document.hidden || hiddenBefore) {
        window.open(mapsUrl, '_blank');
      }
    }, 1000);
  }
}
