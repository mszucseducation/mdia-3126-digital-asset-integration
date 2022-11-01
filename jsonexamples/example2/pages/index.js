import records from '../data/records.json';
import { useEffect, useState } from 'react';

export default function Home() {
  function getWord() {
    return records[Math.floor(Math.random() * records.length)]
  }

  const [fruit, setFruit] = useState(getWord);
  const [num, setNum] = useState(0);

  //useEffect(() => setFruit("nothing"), []);

  return (
    <div id="new">
      <button onClick={() => setNum(num + 1)}>increment</button>
      <button onClick={() => (
        setNum(0),
        setFruit(getWord())
  )}>Reset</button>
      { num > 0 && 
          <div>
            {fruit}
          </div>
      }
    </div>
  )
}
