import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import Jordan from './assets/Jordan.png'
import AddToList from './components/AddToList';

export interface Istate {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<Istate["people"]>([
    {
      name: "Michael Jordan",
      url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/893.png',
      age: 36,
      note: "The greatest of all time!"
    }
  ])





  return (
    <div className="App">
      <h1>People Invited to the party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;



// {
//   name: "LeBron James",
//   url: '',
//   age: 36,
//   note: 'Allergic to staying on the same team'
// },
// {
//   name: "Michael Jordan",
//   url: '',
//   age: 36,

// },