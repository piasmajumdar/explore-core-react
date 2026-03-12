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
      <Person2></Person2>
      <Person3></Person3>
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

function Person2(){
  const names = ['Anil', 'Rakib', 'Hitesh', 'Jalil'];
  return (
    <div>
      <p>{names.join(", ")}</p>
    </div>
  )
}

function Person3(){
  return (
    <div>
      <ul>
        <a href="https://www.google.com">Google</a>
        <br />
        <a href="https://bing.com">Bing</a>
      </ul>
    </div>
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
