import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

const Badge = ({color, children}) => {
  const [isHovering, setIsHovering] = useState(false);
  
  function handleMouseEnter(){
    setIsHovering(true);
  }

  function handleMoustLeave(){
    setIsHovering(false);
  }

  return(
    <span className={`${color} badge`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMoustLeave}>
      {children}
      {isHovering && (
        <div className='info' style={{backgroundColor:color}}>
          Yupp it's {children}
        </div>
      )}
    </span>
  ) 
}

const ComponentBadges = () => {
    return(
    <section>
      <h2>Check out these badges!</h2>
      <Badge color="green">Success</Badge> This is operational. <br />
      <Badge color="red">Removed</Badge> This is critical. <br />
      <Badge color="yellow">Warning</Badge> This is a warning. <br />
      <Badge color="blue">Beta</Badge> This is in progress. <br />
    </section>
  )
}

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <ComponentBadges />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export {App};
