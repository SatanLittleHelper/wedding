import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable, tap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

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
  imports: [AsyncPipe, JsonPipe],
})
export class GuestListComponent {
  private firestore = inject(Firestore);

  items$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'wedding');
    this.items$ = collectionData(aCollection).pipe();
  }
}
