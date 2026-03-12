import './App.css'
import ToDo from "./Todo"
import {Food, TakeRest} from "./Todo"

function App() {
  
  let time = 50;

  return (
    <>
      <h1>React Core concept</h1>
      <ToDo 
      task ="Learn React" 
      isDone={true} 
      time={time}></ToDo>
      <ToDo 
      task ="Revise JS" 
      isDone={false}></ToDo>
      <ToDo task ="Take a shower" isDone={true} time="100"></ToDo>

      <Food item="Burger" isHungry={true}></Food>
      <Food item="Noodles" isHungry={false}></Food>

      <TakeRest work="Assignment" isDone={true}></TakeRest>
      <TakeRest work="Project" isDone={false}></TakeRest>
      


      {/* <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name="Majumdar" tech="Python"></Developer>
      <Developer name="Rajon" tech="JS"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Device name="Laptop"></Device>
      <Device name="iPhone"></Device>
      <Device name="Motorolla"></Device>
      <Player name="tamim" runs="5000"></Player>
      <Player name="mushi" runs="5000"></Player>
      <Salami event="Eid" amount="20"></Salami>
      <Salami event="Graduation"></Salami>
      <MobilePhone name="iPhone 11" price="50000"></MobilePhone>
      <MobilePhone name="iPhone 16" price="120000"></MobilePhone>
      <Book name="Death" author="Sadhguru JV"></Book>
      <Book name="Karma" author="Sadhguru JV"></Book> */}



    </>
  )
}

function Book({name, author}){
  return (
    <div>
      <h3>Book Name: {name}</h3>
      <p>Author: {author}</p>
    </div>
  )
}

function MobilePhone({name, price}) {
  return (
    <div className='mobile-phone'>
      <h3>Model: {name}</h3>
      <p>Price: {price}</p>
    </div>
  )
}

function Salami({event, amount=0}){
  return (
    <div>
      <p>Salami For: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

// const {name, runs} = {name: 'tamim', runs: '5000'}
function Player({name, runs}){
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}

function Device(props){
  console.log(props);
  return (
    <div className='device'>
      <p>Device Name: {props.name}</p>
    </div>
  )
}

// const {name, tech} = {name: 'Shabana', tech: 'Java'}
function Developer(props) {
  console.log(props)
  return (
    <div style={{
      border: '2px solid green',
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

function Person() {
  const name = 'Pias';
  const age = 24;
  const personStyle = {
    color: 'red',
    textAlign: 'right'
  }
  return (
    <p style={personStyle}>I am a person: {name} {age}</p>

  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Department: </p>
    </div>
  )
}



function Person2() {
  const names = ['Anil', 'Rakib', 'Hitesh', 'Jalil'];
  return (
    <div>
      <p>{names.join(", ")}</p>
    </div>
  )
}

function Person3() {
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

function Cat() {
  return (
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
