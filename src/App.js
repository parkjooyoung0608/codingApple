import './App.css';
import { useState } from 'react';

function App() {
  
  let [a] = useState('강남 우동 맛집');
  let [b] = useState('강남 우동 맛집');
  let [c] = useState('강남 우동 맛집');

  return (
    <div className="App">
        <div className='black-nav'>
            <h4>블로그임</h4>
        </div>
        <div className='list'>
          <h4>{a}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4>{b}</h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4>{c}</h4>
          <p>2월 17일 발행</p>
        </div>
    </div>
  );
}

export default App;
