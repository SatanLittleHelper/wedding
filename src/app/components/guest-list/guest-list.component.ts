import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

interface Guest {
  firstName: string;
  lastName: string;
  phone: string;
  telegram: string;
}

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrl: './guest-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe],
})
export class GuestListComponent {
  items$: Observable<Guest[][]>;

  private firestore = inject(Firestore);

  constructor() {
    const aCollection = collection(this.firestore, 'wedding');
    this.items$ = collectionData(aCollection).pipe(
      map((value) => [...(value.map((item) => Object.values(item)) as Guest[][])]),
    );
  }
}
