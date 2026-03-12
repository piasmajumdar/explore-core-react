import './App.css'

function App() {


  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Cat></Cat>
      <Sports></Sports>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}

function Person() {
  const name = 'Pias';
  const age = 24;
  return (
    <p>I am a person: {name} {age}</p>

  )
}

function Cat(){
  return(
    <p>Cat</p>
  )
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Bat</li>
        <li>Ball</li>
      </ul>
      <p>Playing and loosing</p>
    </div>
  )
}

export default App
