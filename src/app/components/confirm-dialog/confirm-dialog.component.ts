import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  TuiAlertService, TuiDialogContext, TuiTextfieldComponent, TuiTextfieldDirective,
} from '@taiga-ui/core';
import { tuiAutoFocusOptionsProvider } from '@taiga-ui/cdk';
import { injectContext } from '@taiga-ui/polymorpheus';
import {
  FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators,
} from '@angular/forms';
import type { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { TuiInputPhoneInternational } from '@taiga-ui/experimental';
import { tuiInputPhoneInternationalOptionsProvider } from '@taiga-ui/kit';
import { defer } from 'rxjs';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-confirm-dialog',
  imports: [
    ReactiveFormsModule,
    ButtonComponent,
    TuiTextfieldComponent,
    TuiInputPhoneInternational,
    TuiTextfieldDirective,
  ],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiAutoFocusOptionsProvider({ preventScroll: true }),
    tuiInputPhoneInternationalOptionsProvider({
      metadata: defer(async () => import('libphonenumber-js/max/metadata').then((m) => m.default)),
    }),
  ],
})
export class ConfirmDialogComponent {
  protected guestForm: FormGroup;
  protected readonly countries: ReadonlyArray<TuiCountryIsoCode> = ['RU', 'KZ', 'UA', 'BY'];

  private readonly context = injectContext<TuiDialogContext<boolean>>();
  private firestore = inject(Firestore);
  private readonly alerts = inject(TuiAlertService);

  constructor(private fb: FormBuilder) {
    this.guestForm = this.fb.group({
      guests: this.fb.array([this.createGuest()]),
    });
  }

  get guests(): FormArray {
    return this.guestForm.get('guests') as FormArray;
  }

  createGuest(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      telegram: [''],
    });
  }

  addGuest(): void {
    this.guests.push(this.createGuest());
  }

  removeGuest(index: number): void {
    this.guests.removeAt(index);
  }

  submitForm(): void {
    if (this.guestForm.valid) {
      const data = this.guests.getRawValue();
      const id = data[0].phone;
      const weddingDocRef = doc(this.firestore, 'wedding', id);
      setDoc(weddingDocRef, { ...data });
      this.alerts.open('Спасибо! <3', { appearance: 'positive' }).subscribe();
      this.close();
    }
  }

  protected close(): void {
    this.context.completeWith(false);
  }
}
