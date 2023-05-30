import { useState, useRef } from 'react'
// import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [x, setX] = useState(150);
  const [y, setY] = useState(150);
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const [w, setW] = useState();
  const [h, setH] = useState();

  function startGame() {
    setFlag(false)
    const interval = setInterval(() => {
      setSeconds((seconds) => (seconds + 1));
    }, 1000);
    timerRef.current = interval;

    return () => clearInterval(timerRef.current);
  }

  function reset() {
    setX(Math.random() * window.innerWidth);
    setY(Math.random() * window.innerHeight);
    setCount(0)
    setSeconds(0)
    setFlag(true)
  }

  const positionRandom = () => {
    setX(Math.random() * window.innerWidth);
    setY(Math.random() * window.innerHeight);
    setCount(count + 1)
    if (count == 9) {
      clearInterval(timerRef.current)
    }
  }

  const changeDifficulty = (dif) => {
    switch (dif) {
      case "easy":
        setH('48px')
        setW('48px')
        break;
      case "medium":
        setH('38px')
        setW('38px')
        break;
      case "hard":
        setH('28px')
        setW('28px')
        break;
    }
  }

  return (
    <main>
      <header>
        <h1>{seconds} segundos</h1>
      </header>
      <section style={{ height: '90%' }} >
        {
          count < 10 ?
            !flag ? <figure style={{ position: "absolute", top: y, left: x, width: w, height: h }} onClick={() => positionRandom()} /> :
              <figure style={{ position: "absolute", top: y, left: x, width: w, height: h }} />
            :
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '200px' }}>
              <h2>Game Over</h2>
            </div>
        }
        {
          flag ?
            <div>
              <button className='btnDif' onClick={() => changeDifficulty('easy')} >Easy</button>
              <button className='btnDif' onClick={() => changeDifficulty('medium')}>Medium</button>
              <button className='btnDif' onClick={() => changeDifficulty('hard')}>Hard</button>
            </div>
            :
            <></>
        }

      </section>
      <footer>
        
        {
          flag ?
            <button onClick={() => startGame()}>Jugar</button>
            :
            <button onClick={reset}>Reiniciar</button>
        }
      </footer>
    </main>
  )
}

export default App
