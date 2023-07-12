import React, { useState, useEffect } from 'react';
import { fromEvent } from 'rxjs';
import { scan } from 'rxjs/operators';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const button = document.querySelector('button');
    const click$ = fromEvent(button, 'click');
    const increment$ = click$.pipe(scan(count => count + 1, 0));

    const subscription = increment$.subscribe(newCount => {
      setCount(newCount);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return <Counter value={count} onIncrement={() => {}} />;
}

export default App;