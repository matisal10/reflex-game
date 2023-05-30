import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [x, setX] = useState(150);
  const [y, setY] = useState(150);
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  const timer = null;

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

  return (
    <main>
      <header>
        <h1>{seconds} segundos</h1>
      </header>
      <section style={{ height: '90%'}} >
        {
          count < 10 ? 
            !flag ? <figure style={{ position: "absolute", top: y, left: x }} onClick={() => positionRandom()} /> : 
                    <figure style={{ position: "absolute", top: y, left: x }}  />
            :
            <div style={{display:'flex',alignItems:'center', justifyContent:'center',marginTop:'200px'}}>
              <h2>Game Over</h2>
            </div>
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
