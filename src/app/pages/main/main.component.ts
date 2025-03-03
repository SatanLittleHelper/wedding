import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Timing, TimingComponent } from '../../components/timing/timing.component';
import { DressCodeComponent } from '../../components/dress-code/dress-code.component';

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
      time: '20:00',
    },
    {
      name: 'Завершение торжества',
      icon: 'party',
      time: '23:00',
    },
  ];

  openMap(): void {
    const location = ['55.376623', '35.857011'];
    const [lat, lng] = location;

    const yandexUrl = `yandexnavi://build_route_on_map?lat_to=${lat}&lon_to=${lng}`;
    const fallbackUrl = `https://yandex.ru/maps/?rtext=~${lat},${lng}&rtt=auto`;

    window.location.href = yandexUrl;

    setTimeout(() => {
      window.open(fallbackUrl, '_blank');
    }, 2000);
  }
}
