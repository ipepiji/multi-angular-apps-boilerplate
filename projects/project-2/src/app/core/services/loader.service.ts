import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  private isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get status(): BehaviorSubject<boolean> {
    return this.isVisible;
  }

  display(value: boolean): void {
    this.isVisible.next(value);
  }
}
