import { from } from 'rxjs';
import { skip, filter } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/skip
// Example 2: Short hand for a specific filter use case
const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 3,4,5...
const skipObs = numArrayObs.pipe(skip(2)).subscribe(console.log);

// 3,4,5...
const filterObs = numArrayObs
  .pipe(filter((val, index) => index > 1))
  .subscribe(console.log);

//Same output!
