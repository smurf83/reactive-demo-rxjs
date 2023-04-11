import { Component, OnInit } from '@angular/core';
import { fromEvent, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { JokeService } from '../joke.service';

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
  selectedCategory!: String;
  jokeResponse!: string;

  categories: Category[] = [
    { value: 'animal', viewValue: 'Animal' },
    { value: 'career', viewValue: 'Career' },
    { value: 'celebrity', viewValue: 'Celebrity' },
    { value: 'dev', viewValue: 'Dev' },
    { value: 'explicit', viewValue: 'Explicit' },
    { value: 'fashion', viewValue: 'Fashion' },
    { value: 'food', viewValue: 'Food' },
    { value: 'history', viewValue: 'History' },
    { value: 'money', viewValue: 'Money' },
    { value: 'movie', viewValue: 'Movie' },
    { value: 'music', viewValue: 'Music' },
  ];

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    // const button = document.querySelector('#myButton');
    // if (button) {
    //   const click$ = fromEvent(button, 'click');
    //   click$.subscribe(() => {
    //     console.log('Button clicked');
    //   });
    // }
    // const input1 = document.querySelector('#input1');
    // const input2 = document.querySelector('#input2');
    // if (input1 && input2) {
    //   const input1$ = fromEvent(input1, 'input').pipe(
    //     map((event) => (event.target as HTMLInputElement).value)
    //   );
    //   const input2$ = fromEvent(input2, 'input').pipe(
    //     map((event) => (event.target as HTMLInputElement).value)
    //   );
    //   const combined$ = combineLatest([input1$, input2$]);
    //   combined$.subscribe(([value1, value2]) => {
    //     console.log(`Input 1: ${value1}, Input 2: ${value2}`);
    //   });
    // }
  }

  submit() {
    console.log('Selected category:', this.selectedCategory);
    if (!this.selectedCategory) {
      this.jokeResponse = this.jokeService.getRandomJoke();
    }
  }
}
