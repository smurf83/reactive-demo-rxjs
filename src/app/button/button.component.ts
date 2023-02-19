import { Component, OnInit } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  categories: Category[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  ngOnInit() {
    const button = document.querySelector('#myButton');
    if (button) {
      const click$ = fromEvent(button, 'click');
      click$.subscribe(() => {
        console.log('Button clicked');
      });
    }

    const input1 = document.querySelector('#input1');
    const input2 = document.querySelector('#input2');
    if (input1 && input2) {
      const input1$ = fromEvent(input1, 'input').pipe(
        map((event) => (event.target as HTMLInputElement).value)
      );
      const input2$ = fromEvent(input2, 'input').pipe(
        map((event) => (event.target as HTMLInputElement).value)
      );
      const combined$ = combineLatest([input1$, input2$]);
      combined$.subscribe(([value1, value2]) => {
        console.log(`Input 1: ${value1}, Input 2: ${value2}`);
      });
    }
  }
}
