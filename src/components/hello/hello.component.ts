import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-hello',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AsyncPipe, NgIf],
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  private toggleAction = new BehaviorSubject<boolean>(false);
  toggleAction$ = this.toggleAction.asObservable();

  constructor() {}
  toggle() {
    this.toggleAction.next(!this.toggleAction.value);
  }
}
