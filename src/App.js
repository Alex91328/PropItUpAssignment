import React from 'react';


import './App.css';
import PIUComponent from './components/PIUcomponent';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <PIUComponent />
      <Person LastName="Doe" FirstName="Jane" Age={45} HairColor="Black" />
      <Person LastName="Smith" FirstName="John" Age={88} HairColor="Brown" />
      <Person LastName="Smith" FirstName="Maria" Age={55} HairColor="Brown" />
      <Person LastName="Fillmore" FirstName="Millard" Age={50} HairColor="Brown" />
    </div>
  );
}

export default App;
